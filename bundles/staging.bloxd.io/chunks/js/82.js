export const id = 82;
export const ids = [82];
export const modules = {
  36027: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Qz,
      h: () => dz
    });
    var Fz = sz(65),
      Wz = sz(1857),
      Xz = sz(36033),
      Oz = sz.n(Xz),
      oz = sz(4180),
      vz = sz(1831),
      Uz = sz(1416),
      Kz = sz(106),
      uz = sz(119),
      Nz = sz(321),
      bz = sz(1020),
      wz = sz.n(bz),
      Dz = sz(30),
      gz = sz(1036),
      Hz = sz(1571),
      Bz = sz(1664),
      Pz = sz(1628),
      rz = sz(1922),
      Yz = sz(1375),
      xz = sz(2005),
      mz = sz(1358),
      Jz = sz(8283),
      Iz = sz(36037),
      Cz = sz(36053),
      ez = sz(1439),
      Zz = sz(2294),
      Gz = sz(1173),
      Tz = sz(36058);
    var cz = sz(8771);
    var jz = sz(1087);
    const Az = sz(36064),
      yz = ["enter", "t", "/"];
    let Mz = !1;

    function dz() {
      return Mz || (0, Bz.isTextEntry)(document.activeElement)
    }

    function hz() {
      var zz, tz;
      (0, xz.e)();
      const sz = null !== (zz = null === (tz = (0, Yz.c)()) || void 0 === tz ? void 0 : tz.getBoundButton("keyboardChannel")) && void 0 !== zz ? zz : null;
      return sz ? (0, jz.jsx)(rz.e, {
        className: "ChatInputChannelGlyph",
        glyph: sz
      }) : null
    }

    function Qz() {
      const {
        t: zz
      } = (0, Gz.B)(), {
        isTouchScreen: tz
      } = (0, Dz.h)(["isTouchScreen"]), sz = (0, mz.j)(), [Xz, bz] = (0, Fz.useState)(!1), rz = (0, Fz.useRef)(Xz), Yz = (0, Fz.useRef)(null), {
        messages: xz,
        reportedPlayers: dz,
        channel: Qz
      } = (0, Jz.m)(), iz = (0, Fz.useRef)(0), Lz = (0, Fz.useRef)(""), lz = (0, Fz.useRef)(null);
      var nz;
      nz = lz, (0, Fz.useEffect)((() => {
        if (!(0, Kz.isIOS)()) return;
        const zz = nz.current;
        let tz = null;
        const sz = sz => {
            const Fz = sz.changedTouches[0];
            tz = "none" === getComputedStyle(zz).pointerEvents ? {
              id: Fz.identifier,
              y: Fz.clientY
            } : null
          },
          Fz = sz => {
            const Fz = tz,
              Wz = Fz && (0, Tz.d)(sz.changedTouches, Fz.id);
            Wz && (sz.preventDefault(), zz.scrollBy({
              top: Fz.y - Wz.clientY,
              behavior: "instant"
            }), Fz.y = Wz.clientY)
          };
        return zz.addEventListener("touchstart", sz, {
          passive: !0
        }), zz.addEventListener("touchmove", Fz, {
          passive: !1
        }), () => {
          zz.removeEventListener("touchstart", sz), zz.removeEventListener("touchmove", Fz)
        }
      }), [nz]);
      const [az, qz] = (0, Fz.useState)(!1), [Sz, Vz] = (0, Fz.useState)(!1), Rz = (0, Fz.useRef)(az), pz = (0, Fz.useRef)(null), fz = (0, Fz.useRef)(!1), Ez = (0, Fz.useRef)(null), zt = (0, Fz.useRef)(null), tt = (0, Fz.useRef)(null), st = (0, Fz.useRef)(Ot);
      st.current = Ot;
      const Ft = (0, Zz.n)();

      function Wt() {
        rz.current = !1, bz(!1), zt.current.blur()
      }

      function Xt(zz) {
        Rz.current = zz, qz(zz)
      }

      function Ot() {
        const zz = zt.current.value;
        zt.current.value = "", ot(zz)
      }

      function ot(zz) {
        (0, Jz.l)(zz), iz.current = 0, Xt(!1)
      }

      function vt(zz, tz) {
        0 === iz.current && (Lz.current = zt.current.value);
        const sz = (0, Jz.h)(iz.current + zz, tz);
        iz.current = sz.stepsBack, zt.current.value = 0 === sz.stepsBack ? Lz.current : sz.text, setTimeout((() => {
          zt.current && zt.current.setSelectionRange(-1, -1)
        }), 0)
      }

      function Ut() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        lz.current && (!zz && Rz.current || (lz.current.scrollTop = 1e5))
      }
      return (0, oz.b)(!0, Xz, "ChatComponent"), (0, Fz.useEffect)((() => (Mz = Xz, () => {
          Mz = !1
        })), [Xz]), (0, Uz.g)("appManagerUpdated|openEverythingMenuName", (() => {
          (0, Hz.v)() && bz(!1)
        })), (0, Fz.useEffect)((() => {
          zt.current.addEventListener("blur", (zz => {
            if (null === zt.current) return;
            Array.from(document.querySelectorAll(":hover")).some((zz => zz.classList.contains("ChatInputChannel") || zz.classList.contains("ChatMsgSelectWrapper"))) || ((0, Kz.isMobile)() && rz.current && "" !== zt.current.value && st.current(), bz(!1))
          }));
          const zz = zz => {
            Yz.current.contains(zz.target) || (0, Pz.j)(zz.target) || bz(!1)
          };
          document.addEventListener("touchstart", zz, {
            capture: !0
          });
          const tz = zz => {
            (0, Cz.i)(zz.target) && (rz.current = !1, bz(!1))
          };
          document.addEventListener("mousedown", tz, {
            capture: !0
          });
          const sz = () => {
              clearTimeout(pz.current), Xt(!0)
            },
            Fz = () => {
              clearTimeout(pz.current), pz.current = setTimeout((() => {
                Xt(!1), Ut()
              }), 4e3)
            },
            Xz = () => {
              document.pointerLockElement ? (bz(!1), Vz(!0), fz.current = !1, Xt(!1), Ut()) : Vz(!1)
            };
          lz.current.addEventListener("pointermove", (zz => {
            "touch" === zz.pointerType || fz.current || document.pointerLockElement || (fz.current = !0, clearTimeout(pz.current))
          })), lz.current.addEventListener("pointerleave", (zz => {
            "touch" !== zz.pointerType && (fz.current = !1, Rz.current && Fz())
          })), lz.current.addEventListener("pointerdown", (zz => {
            "touch" === zz.pointerType || document.pointerLockElement || (fz.current = !0, sz())
          })), lz.current.addEventListener("wheel", (zz => {
            document.pointerLockElement || zz.deltaY >= 0 && Math.abs(lz.current.scrollTop) < 1 || (sz(), fz.current || (pz.current = setTimeout((() => {
              Xt(!1)
            }), 4e3)))
          }), {
            passive: !0
          }), lz.current.addEventListener("touchstart", sz), lz.current.addEventListener("touchend", Fz), lz.current.addEventListener("touchcancel", Fz), document.addEventListener("pointerlockchange", Xz);
          const oz = zz => {
            if (Ft.shown && (rz.current || ! function(zz) {
                if ((0, Bz.isTypingInInput)()) return !0;
                const tz = document.activeElement;
                return (tz instanceof HTMLButtonElement || "button" === (null === tz || void 0 === tz ? void 0 : tz.getAttribute("role"))) && ["Enter", " "].includes(zz.key)
              }(zz)) && "codeEditor" !== Dz.b.get("openInGameMenuName") && "lobbyCodeEditor" !== Dz.b.get("openInGameMenuName") && !Wz.gameBridge.latest("connectedGame").replay)
              if (rz.current || !(0, Hz.v)()) {
                if (rz.current) {
                  if ("ArrowUp" === zz.code || "ArrowDown" === zz.code) return vt("ArrowUp" === zz.code ? 1 : -1, !1), void zz.stopPropagation();
                  if ("Tab" === zz.code) return Jz.c.selectNextChannel(), zz.stopPropagation(), void zz.preventDefault();
                  if (zz.ctrlKey && kz.includes(Az[zz.keyCode])) return zz.preventDefault(), void zz.stopPropagation()
                }
                if ([...yz, "esc"].includes(Oz()(zz)))
                  if ("esc" !== Oz()(zz)) {
                    if (!rz.current || "/" !== Oz()(zz)) {
                      if ("t" === Oz()(zz)) {
                        if (rz.current) return void zz.stopPropagation();
                        zz.preventDefault()
                      }
                      rz.current && "" !== zt.current.value && st.current(), zz.repeat || (rz.current || "/" === Oz()(zz) && (zt.current.value = "/", zz.preventDefault()), bz(!rz.current))
                    }
                  } else rz.current && (bz(!1), zz.stopPropagation());
                else rz.current && zz.stopPropagation()
              } else yz.includes(Oz()(zz)) && (zz.preventDefault(), zz.stopPropagation(), (0, Hz.d)(zz))
          };
          document.addEventListener("keydown", oz, {
            capture: !0
          });
          const vz = lz.current;
          let Uz = !1;
          const uz = new ResizeObserver((() => {
              Uz && (Uz = !1, Ut())
            })),
            Nz = () => {
              Uz = !0, uz.unobserve(vz), uz.observe(vz)
            };
          Ez.current = Nz;
          const wz = new MutationObserver(Nz);
          return wz.observe(vz, {
            childList: !0,
            subtree: !0
          }), () => {
            document.removeEventListener("keydown", oz, {
              capture: !0
            }), document.removeEventListener("touchstart", zz, {
              capture: !0
            }), document.removeEventListener("mousedown", tz, {
              capture: !0
            }), document.removeEventListener("pointerlockchange", Xz), Ez.current = null, wz.disconnect(), uz.disconnect(), clearTimeout(pz.current)
          }
        }), []), (0, Pz.o)(zt, {
          open: () => {
            bz(!0)
          },
          close: () => {
            Wt()
          },
          submit: () => {
            "" !== zt.current.value && Ot(), Wt()
          },
          stepHistory: () => {
            vt(1, !0)
          },
          sendLine: zz => {
            ot(zz), Wt()
          },
          selectNextChannel: () => {
            Jz.c.selectNextChannel()
          }
        }), (0, Fz.useEffect)((() => {
          var zz;
          (rz.current = Xz, zt.current) && (Xz ? (iz.current = 0, zt.current.focus()) : (zt.current.blur(), null === (zz = Ez.current) || void 0 === zz || zz.call(Ez)))
        }), [Xz]),
        function(zz, tz) {
          (0, Fz.useLayoutEffect)((() => {
            if (!tz) return;
            cz.e.hold();
            const sz = zz.current.closest(".InGameHeaderAndChat"),
              Fz = window.visualViewport;
            let Wz = "";
            const Xz = () => {
              const zz = `${Fz.offsetTop+Fz.height}px`;
              zz !== Wz && (Wz = zz, sz.style.setProperty("--keyboard-top", zz))
            };
            return Xz(), Fz.addEventListener("resize", Xz), Fz.addEventListener("scroll", Xz), () => {
              Fz.removeEventListener("resize", Xz), Fz.removeEventListener("scroll", Xz), sz.style.removeProperty("--keyboard-top"), cz.e.release()
            }
          }), [zz, tz])
        }(Yz, Xz && tz), (0, jz.jsx)(jz.Fragment, {
          children: (0, jz.jsxs)("div", {
            ref: Yz,
            className: wz()("Chat", {
              Chatting: Xz
            }),
            "data-camera-keeper": Xz ? "" : void 0,
            children: [(0, jz.jsx)("div", {
              ref: lz,
              className: wz()("ChatMessages", {
                HideScrollbar: !az && !Xz,
                NoScrolling: !(0, Kz.isMobile)() && Sz
              }),
              children: (0, jz.jsx)(Iz.c, {
                messages: xz,
                reportedPlayers: dz
              })
            }), tz && !Xz && (0, jz.jsx)("button", {
              type: "button",
              className: "ChatIconWrapper SmallTextLight",
              "aria-label": zz("general:chat"),
              ...(0, ez.g)((() => {
                bz(!0), tt.current.style.display = "flex", (0, Kz.isIOS)() && zt.current.focus()
              }), "pointerup"),
              children: (0, jz.jsx)(gz.c, {
                name: "comment-dots",
                className: "ChatIcon"
              })
            }), (0, jz.jsxs)("div", {
              ref: tt,
              className: "ChatInputWrapper",
              style: {
                display: "" + (Xz ? "flex" : "none")
              },
              children: [Qz && (0, jz.jsx)("button", {
                type: "button",
                className: "ChatInputChannel",
                style: {
                  backgroundColor: Qz.elementBgColor
                },
                onClick: zz => {
                  Jz.c.selectNextChannel(), zt.current.focus()
                },
                children: (0, jz.jsx)("span", {
                  className: "SmallTextBold",
                  children: (0, jz.jsx)(vz.c, {
                    text: Qz.elementContent
                  })
                })
              }), Qz && sz && (0, jz.jsx)(hz, {}), (0, jz.jsx)("input", {
                className: "ChatInput",
                maxLength: Nz.Uc,
                ref: zt,
                spellCheck: "false",
                autoComplete: "off",
                autoCorrect: "off",
                "aria-label": zz("general:chat"),
                placeholder: Qz ? `${Qz.channelName} Chat${"touchOnly"===(0,uz.c)()||sz?"":" [Tab]"}` : ""
              })]
            })]
          })
        })
    }
    const kz = ["W", "S", "D", "N", "T", "<tab>", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "<page-up>", "<page-down>", "B", "O", "H", "J", "F", "G", "J", "M", "<enter>", "L", "K", "E", "P", "R", "O", "U"]
  },
  36037: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Jz
    });
    var Fz = sz(65),
      Wz = sz(1020),
      Xz = sz.n(Wz),
      Oz = sz(8288),
      oz = sz(34),
      vz = sz(2260),
      Uz = sz(3260),
      Kz = sz(1951),
      uz = sz(30),
      Nz = sz(1831),
      bz = sz(36044),
      wz = sz(2075),
      Dz = sz(36049),
      gz = sz(2427),
      Hz = sz(2405),
      Bz = sz(2397),
      Pz = sz(3275),
      rz = sz(2844),
      Yz = sz(1901),
      xz = sz(1087);

    function mz(zz) {
      for (let sz = zz.length - 1; sz >= 0; sz--) {
        const Fz = "string" === typeof(tz = zz[sz]) ? tz : "str" in tz && "string" === typeof tz.str ? tz.str : "";
        if ("" !== Fz.trim()) return Fz
      }
      var tz;
      return ""
    }

    function Jz(zz) {
      let {
        messages: tz,
        reportedPlayers: sz
      } = zz;
      return (0, xz.jsx)(xz.Fragment, {
        children: tz.map((zz => (0, xz.jsx)(Iz, {
          message: zz,
          reportedPlayers: sz
        }, zz.clientChatMsgId)))
      })
    }
    const Iz = (0, Fz.memo)((function(zz) {
      var tz;
      let {
        message: sz,
        reportedPlayers: Wz
      } = zz;
      const Jz = (0, Fz.useRef)(null),
        [Iz] = (0, Fz.useState)(rz.f),
        {
          author: Cz
        } = sz,
        ez = null === Cz || void 0 === Cz ? void 0 : Cz.id,
        Zz = null !== (tz = null === Cz || void 0 === Cz ? void 0 : Cz.name) && void 0 !== tz ? tz : void 0,
        Gz = (0, Kz.b)(Zz),
        Tz = null !== Cz && void 0 !== Cz && Cz.profileEffect ? wz.f[Cz.profileEffect] : void 0,
        cz = null !== Cz && !Cz.local,
        jz = null === Cz && null !== sz.serverChatMsgId,
        Az = (0, Yz.h)("hiddenPlayerNames", (zz => (0, Dz.f)(cz, Zz, zz))),
        yz = null === sz.serverChatMsgId || null === Cz ? null : {
          text: mz(sz.content),
          serverChatMsgId: sz.serverChatMsgId,
          authorId: Cz.id
        },
        Mz = jz || null !== yz && !Wz.includes(ez),
        dz = (0, Uz.e)(cz && null !== Zz && void 0 !== Zz ? Zz : null),
        hz = (0, Bz.f)(Jz);
      (0, Fz.useEffect)((() => () => {
        Bz.c.closeIfOwner(Jz)
      }), []);
      const Qz = () => {
          jz ? oz.o.Yg("OpenReportMenu", {
            playerEId: null,
            playerName: void 0,
            RO: (0, Oz.c)(sz.content),
            serverChatMsgId: sz.serverChatMsgId
          }) : null !== yz ? oz.o.Yg("OpenReportMenu", {
            playerEId: ez,
            playerName: Zz,
            RO: yz.text,
            serverChatMsgId: yz.serverChatMsgId
          }) : console.warn("Reporting a chat message the server never acknowledged")
        },
        kz = void 0 === Zz ? [] : (0, Pz.d)(dz, Zz, yz);
      return (0, xz.jsxs)("div", {
        ref: Jz,
        className: Xz()("MessageWrapper", {
          ChatMsgSelectWrapper: ez,
          Still: Iz
        }),
        onContextMenu: Az ? zz => {
          (0, gz.h)(Jz, zz, {
            ...(0, Dz.b)(ez, Zz),
            showLocation: !1,
            status: null,
            extraActions: Mz ? [{
              icon: "flag",
              text: "Report",
              onClick: Qz
            }] : [],
            friendRequestSource: "chat"
          }, uz.b.get("isTouchScreen"))
        } : void 0,
        onPointerDown: Az ? zz => {
          (0, Hz.b)(zz, (() => (0, Dz.b)(ez, Zz).playerSocialPreview))
        } : void 0,
        children: [Tz && (0, xz.jsx)(Tz, {
          className: "ChatMessageBackground",
          simple: !0
        }), (cz || jz) && !hz && (0, xz.jsx)(bz.d, {
          className: "ChatFloatingActions",
          triggerElementRef: Jz,
          options: [{
            icon: "flag",
            text: "Report",
            onPointerDown: Qz,
            show: Mz
          }, ...kz, {
            icon: "user-plus",
            text: "socialBar:sendFriendRequest",
            onPointerDown: zz => {
              (0, vz.e)(Zz, "chat")
            },
            analyticsClick: {
              id: "social.add_friend",
              value: "chat"
            },
            show: Az && "blocked" !== dz
          }]
        }), (0, xz.jsx)(Nz.c, {
          text: sz.content,
          friendBadgeFor: Gz ? Zz : void 0
        }, sz.clientChatMsgId)]
      }, sz.clientChatMsgId)
    }))
  },
  36078: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => bz,
      e: () => wz,
      g: () => Nz,
      h: () => uz
    });
    var Fz = sz(8843),
      Wz = sz(36086),
      Xz = sz(36090),
      Oz = sz(8238),
      oz = sz(1416),
      vz = sz(65),
      Uz = sz(78),
      Kz = sz(1087);

    function uz() {
      var zz;
      return (0, oz.h)(Wz.e, (0, Wz.o)()), (0, Kz.jsx)(Kz.Fragment, {
        children: null === (zz = (0, Wz.o)()) || void 0 === zz ? void 0 : zz.content
      })
    }

    function Nz(zz) {
      var tz;
      let {
        show: sz
      } = zz;
      (0, oz.h)(Wz.e, (0, Wz.o)());
      const Uz = null === (tz = (0, Wz.o)()) || void 0 === tz ? void 0 : tz.menu;
      return (0, vz.useEffect)((() => {
        var zz;
        sz || (null === Uz || void 0 === Uz || null === (zz = Uz.onClose) || void 0 === zz || zz.call(Uz), (0, Xz.p)())
      }), [sz, Uz]), (0, vz.useEffect)((() => sz ? (0, Oz.f)(Xz.w, Xz.e) : void 0), [sz]), (0, Kz.jsx)(Fz.c, {
        showing: sz,
        globallyUniqueKey: "clientGameMenu",
        children: null === Uz || void 0 === Uz ? void 0 : Uz.content
      })
    }

    function bz(zz) {
      let {
        placement: tz = "bottom"
      } = zz;
      return (0, Kz.jsx)("div", {
        id: `clientGameHud-${tz}`,
        style: {
          display: "contents"
        }
      })
    }

    function wz(zz) {
      let {
        children: tz,
        placement: sz = "bottom"
      } = zz;
      const [Fz, Wz] = (0, vz.useState)(null);
      return (0, vz.useEffect)((() => {
        Wz(document.getElementById(`clientGameHud-${sz}`))
      }), [sz]), Fz ? (0, Uz.createPortal)(tz, Fz) : null
    }
  },
  36309: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => uz,
      h: () => Kz
    });
    var Fz = sz(65),
      Wz = sz(1020),
      Xz = sz.n(Wz),
      Oz = sz(1419),
      oz = sz(1087);
    const vz = 200,
      Uz = 160;

    function Kz() {
      return window.matchMedia("(max-width: 900px)").matches
    }

    function uz(zz) {
      let {
        side: tz,
        defaultSize: sz,
        covers: Wz,
        onClose: Kz,
        children: uz
      } = zz;
      const Nz = (0, Fz.useRef)(null),
        [bz, wz] = (0, Fz.useState)(null),
        [Dz, gz] = (0, Fz.useState)(sz);
      Dz !== sz && (gz(sz), wz(null));
      const Hz = (0, Fz.useRef)(null),
        Bz = "top" === tz,
        Pz = zz => Bz ? zz.clientY : zz.clientX,
        rz = () => {
          Hz.current = null
        };
      return (0, oz.jsxs)("div", {
        ref: Nz,
        className: Xz()("ResizableSidePanel", tz && `ResizableSidePanel-${tz}`, {
          Covers: "always" === Wz,
          CoversWhenNarrow: "narrow" === Wz,
          Dragged: null !== bz
        }),
        style: {
          [Bz ? "height" : "width"]: null !== bz && void 0 !== bz ? bz : sz
        },
        children: [uz, tz && (0, oz.jsx)("div", {
          className: "ResizableSidePanelHandle",
          role: "separator",
          "aria-orientation": Bz ? "horizontal" : "vertical",
          onPointerDown: zz => {
            if (0 !== zz.button) return;
            zz.preventDefault();
            const tz = Nz.current,
              sz = Array.from(tz.parentElement.children).reduce(((zz, sz) => sz !== tz && "0" !== getComputedStyle(sz).flexGrow ? zz + (zz => Bz ? zz.clientHeight : zz.clientWidth)(sz) : zz), 0),
              Fz = Bz ? tz.offsetHeight : tz.offsetWidth,
              Wz = Math.min(vz, Fz),
              Xz = Math.max(Wz, Fz + Math.max(0, sz - Uz));
            Hz.current = {
              start: Pz(zz),
              startSize: Fz,
              minSize: Wz,
              maxSize: Xz
            }, zz.currentTarget.setPointerCapture(zz.pointerId)
          },
          onPointerMove: zz => {
            const sz = Hz.current;
            if (!sz) return;
            const Fz = "right" === tz ? sz.start - zz.clientX : Pz(zz) - sz.start;
            wz(Math.min(sz.maxSize, Math.max(sz.minSize, sz.startSize + Fz)))
          },
          onPointerUp: rz,
          onPointerCancel: rz,
          onLostPointerCapture: rz
        }), Kz && (0, oz.jsx)(Oz.n, {
          className: "ResizableSidePanelClose",
          onClick: Kz
        })]
      })
    }
  },
  36322: (zz, tz, sz) => {
    sz.d(tz, {
      C: () => Wz,
      G: () => mz,
      b: () => Pz,
      e: () => gz,
      i: () => wz,
      m: () => bz,
      n: () => Bz,
      q: () => Iz,
      t: () => rz,
      v: () => xz,
      w: () => Yz,
      z: () => Jz
    });
    var Fz = sz(65);
    const Wz = 5e3,
      Xz = 500,
      Oz = 3e3;
    let oz = null,
      vz = null,
      Uz = null;
    const Kz = new Set;

    function uz(zz) {
      oz = zz;
      for (const tz of Kz) tz()
    }

    function Nz() {
      if (!oz || void 0 !== oz.endedAt) return;
      null !== vz && (clearTimeout(vz), vz = null), uz({
        ...oz,
        endedAt: Date.now()
      });
      const zz = Uz;
      Uz = null, null === zz || void 0 === zz || zz()
    }

    function bz(zz, tz) {
      let {
        submit: sz,
        reopen: Fz
      } = tz;
      null !== vz && clearTimeout(vz), Uz = Fz, uz({
        ...zz,
        startedAt: Date.now(),
        errors: []
      }), vz = setTimeout(Nz, Oz), sz()
    }

    function wz() {
      oz && void 0 === oz.endedAt && void 0 === oz.ranAt && (null !== vz && clearTimeout(vz), uz({
        ...oz,
        ranAt: Date.now()
      }), vz = setTimeout(Nz, Wz))
    }
    const Dz = 3;

    function gz(zz) {
      if (!oz || void 0 === oz.ranAt || void 0 !== oz.endedAt || oz.errors.includes(zz) || oz.errors.length >= Dz) return;
      const tz = 0 === oz.errors.length;
      uz({
        ...oz,
        errors: [...oz.errors, zz]
      }), tz && (null !== vz && clearTimeout(vz), vz = setTimeout(Nz, Xz))
    }

    function Hz(zz) {
      var tz;
      return (null === (tz = oz) || void 0 === tz ? void 0 : tz.chatKey) === zz ? oz : null
    }

    function Bz(zz) {
      const tz = Hz(zz);
      return tz && void 0 !== tz.endedAt ? (uz(null), tz) : null
    }

    function Pz(zz) {
      var tz;
      (null === (tz = oz) || void 0 === tz ? void 0 : tz.chatKey) === zz && (null !== vz && (clearTimeout(vz), vz = null), Uz = null, uz(null))
    }
    const rz = "These changes from your last answer didn't go in. Make them again.";

    function Yz(zz) {
      const tz = [...new Set(zz)].slice(0, Dz);
      return `Fix this in your change: when it ran, the world showed ${1===tz.length?"this error":"these errors"}: ${tz.join(" ")}`
    }

    function xz(zz) {
      return `Your change didn't go in, because the code wouldn't run at all: ${zz.join(" ")} Send the whole change again with that fixed.`
    }

    function mz(zz) {
      return `Fix this in your change: ${zz.join(" ")}`
    }

    function Jz(zz) {
      var tz;
      if (void 0 === zz.ranAt) return {
        title: "Couldn't test it",
        text: "Your change didn't go into your world, so it couldn't be tested. Press Submit to try it."
      };
      const sz = Math.max(1, Math.round(((null !== (tz = zz.endedAt) && void 0 !== tz ? tz : zz.ranAt) - zz.ranAt) / 1e3)),
        Fz = `Your change ran in your world for ${sz} ${1===sz?"second":"seconds"}`;
      return 0 === zz.errors.length ? {
        title: "Tested: no errors",
        text: `${Fz} without an error.`
      } : {
        title: 1 === zz.errors.length ? "Tested: it showed an error" : `Tested: it showed ${zz.errors.length} errors`,
        text: `${Fz} and showed: ${zz.errors.join(" ")}`
      }
    }

    function Iz(zz) {
      const [tz, sz] = (0, Fz.useState)((() => Hz(zz)));
      return (0, Fz.useEffect)((() => {
        const tz = () => {
          sz(Hz(zz))
        };
        return tz(), Kz.add(tz), () => {
          Kz.delete(tz)
        }
      }), [zz]), tz
    }
  },
  36326: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Wz,
      e: () => Fz
    });
    const Fz = {
      key: "worldCode",
      label: "World Code",
      codeBlock: !1
    };

    function Wz(zz, tz, sz) {
      return {
        key: zz,
        label: `Code block at ${tz.join(", ")}`,
        codeBlock: !0,
        pos: tz,
        canChangePos: sz
      }
    }
  },
  36317: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Fz,
      d: () => Xz,
      g: () => Oz,
      h: () => Wz
    });
    const Fz = "code block",
      Wz = "World Code/";

    function Xz(zz) {
      return zz.trim().toLowerCase().startsWith(Wz.toLowerCase())
    }

    function Oz(zz) {
      return zz.trim().slice(Wz.length).replace(/^\.?\//, "")
    }
  },
  36293: (zz, tz, sz) => {
    sz.d(tz, {
      C: () => Cz,
      G: () => Nz,
      J: () => jz,
      N: () => Jz,
      P: () => Iz,
      Q: () => cz,
      c: () => wz,
      e: () => vz,
      f: () => Dz,
      h: () => ez,
      k: () => oz,
      n: () => Kz,
      p: () => bz,
      t: () => gz,
      x: () => rz,
      y: () => Zz
    });
    var Fz = sz(36283),
      Wz = sz(36287);
    const Xz = "bloxd-world-code-directory-sync",
      Oz = "handles",
      oz = "[INVALID SCHEMATIC PLACEHOLDER]";

    function vz(zz, tz) {
      return `${zz}::${tz}`
    }
    const Uz = new Set(["node_modules", ".git"]);

    function Kz() {
      return "undefined" !== typeof window && "function" === typeof window.showDirectoryPicker
    }

    function uz() {
      return new Promise(((zz, tz) => {
        const sz = indexedDB.open(Xz, 1);
        sz.onupgradeneeded = () => {
          const zz = sz.result;
          zz.objectStoreNames.contains(Oz) || zz.createObjectStore(Oz)
        }, sz.onsuccess = () => {
          zz(sz.result)
        }, sz.onerror = () => {
          var zz;
          tz(null !== (zz = sz.error) && void 0 !== zz ? zz : new Error("Failed to open directory sync IndexedDB"))
        }
      }))
    }
    async function Nz(zz, tz) {
      const sz = await uz();
      try {
        await new Promise(((Fz, Wz) => {
          const Xz = sz.transaction(Oz, "readwrite");
          Xz.objectStore(Oz).put(tz, zz), Xz.oncomplete = () => {
            Fz()
          }, Xz.onerror = () => {
            var zz;
            Wz(null !== (zz = Xz.error) && void 0 !== zz ? zz : new Error("Failed to store directory handle"))
          }
        }))
      } finally {
        sz.close()
      }
    }
    async function bz(zz) {
      const tz = await uz();
      try {
        return await new Promise(((sz, Fz) => {
          const Wz = tz.transaction(Oz, "readonly").objectStore(Oz).get(zz);
          Wz.onsuccess = () => {
            var zz;
            sz(null !== (zz = Wz.result) && void 0 !== zz ? zz : null)
          }, Wz.onerror = () => {
            var zz;
            Fz(null !== (zz = Wz.error) && void 0 !== zz ? zz : new Error("Failed to load directory handle"))
          }
        }))
      } finally {
        tz.close()
      }
    }
    async function wz(zz) {
      const tz = await uz();
      try {
        await new Promise(((sz, Fz) => {
          const Wz = tz.transaction(Oz, "readwrite");
          Wz.objectStore(Oz).delete(zz), Wz.oncomplete = () => {
            sz()
          }, Wz.onerror = () => {
            var zz;
            Fz(null !== (zz = Wz.error) && void 0 !== zz ? zz : new Error("Failed to clear directory handle"))
          }
        }))
      } finally {
        tz.close()
      }
    }
    async function Dz(zz) {
      const tz = {
        mode: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "readwrite"
      };
      return "granted" === await zz.queryPermission(tz) || "granted" === await zz.requestPermission(tz)
    }
    async function gz(zz) {
      if (!Kz()) return null;
      try {
        const tz = await window.showDirectoryPicker({
          mode: "readwrite"
        });
        return await Nz(zz, tz), tz
      } catch (tz) {
        if (function(zz) {
            return zz instanceof DOMException && "AbortError" === zz.name
          }(tz)) return null;
        throw tz
      }
    }

    function Hz(zz) {
      return zz.startsWith(".") || Uz.has(zz)
    }

    function Bz(zz) {
      if (!zz) return !0;
      const tz = zz.split("/");
      for (const sz of tz)
        if ("" === sz || "." === sz || ".." === sz) return !1;
      return !0
    }
    async function Pz(zz, tz, sz) {
      for await (const [Xz, Oz] of zz.entries()) {
        if ("directory" === Oz.kind) {
          if (Hz(Xz)) continue;
          const zz = tz ? `${tz}/${Xz}` : Xz;
          if (!Bz(zz)) continue;
          await Pz(Oz, zz, sz);
          continue
        }
        const zz = tz ? `${tz}/${Xz}` : Xz;
        if (!(0, Fz.x)(zz) && !(0, Wz.e)(zz)) continue;
        const oz = await Oz.getFile();
        sz[zz] = (0, Wz.e)(zz) ? await Gz(oz) : await oz.text()
      }
    }
    async function rz(zz) {
      const tz = {};
      return await Pz(zz, "", tz), tz
    }

    function Yz(zz) {
      return !(!zz || zz !== zz.trim() || zz.startsWith("/") || zz.includes("\\") || zz.includes("\0")) && Bz(zz)
    }
    async function xz(zz, tz, sz) {
      const Fz = tz.split("/"),
        Wz = Fz[Fz.length - 1];
      let Xz = zz;
      for (let Oz = 0; Oz < Fz.length - 1; Oz++) Xz = await Xz.getDirectoryHandle(Fz[Oz], {
        create: sz
      });
      return {
        dir: Xz,
        fileName: Wz
      }
    }
    async function mz(zz, tz, sz) {
      if (!Yz(tz)) throw new Error(`Refusing to write unsafe path: ${tz}`);
      const {
        dir: Fz,
        fileName: Wz
      } = await xz(zz, tz, !0), Xz = await Fz.getFileHandle(Wz, {
        create: !0
      }), Oz = await Xz.createWritable();
      await Oz.write(sz), await Oz.close()
    }
    async function Jz(zz, tz, sz) {
      const Fz = await async function(zz, tz) {
        if (!Yz(tz)) return null;
        try {
          const {
            dir: sz,
            fileName: Fz
          } = await xz(zz, tz, !1), Wz = await sz.getFileHandle(Fz), Xz = await Wz.getFile();
          return await Xz.text()
        } catch (sz) {
          if (sz instanceof DOMException && ("NotFoundError" === sz.name || "NotAllowedError" === sz.name)) return null;
          throw sz
        }
      }(zz, tz);
      Fz !== sz && await mz(zz, tz, sz)
    }
    async function Iz(zz, tz, sz) {
      if (!(0, Fz.x)(tz) && !(0, Wz.e)(tz)) throw new Error(`Refusing to write non-allowlisted path: ${tz}`);
      if ((0, Wz.e)(tz)) {
        if (await Tz(zz, tz) === oz) throw new Error(`Move the binary schematic ${tz} outside the linked folder before syncing its placeholder`)
      }
      await mz(zz, tz, sz)
    }
    async function Cz(zz, tz) {
      if (!Yz(tz)) throw new Error(`Refusing to remove unsafe path: ${tz}`);
      try {
        const {
          dir: sz,
          fileName: Fz
        } = await xz(zz, tz, !1);
        await sz.removeEntry(Fz)
      } catch (sz) {
        if (sz instanceof DOMException && ("NotFoundError" === sz.name || "NotAllowedError" === sz.name)) return;
        throw sz
      }
    }
    async function ez(zz, tz) {
      if (!Yz(tz)) return null;
      try {
        const sz = tz.split("/");
        let Fz = zz;
        for (const zz of sz) Fz = await Fz.getDirectoryHandle(zz);
        return Fz
      } catch (sz) {
        if (sz instanceof DOMException && ("NotFoundError" === sz.name || "NotAllowedError" === sz.name)) return null;
        throw sz
      }
    }
    async function Zz(zz, tz) {
      if ((0, Fz.x)(tz) || (0, Wz.e)(tz)) {
        if ((0, Wz.e)(tz)) {
          if (await Tz(zz, tz) === oz) throw new Error(`Refusing to remove a binary schematic: ${tz}`)
        }
        await Cz(zz, tz)
      }
    }
    async function Gz(zz) {
      if (zz.size > 64) return oz;
      const tz = await zz.text();
      return Array.from(tz).some((zz => {
        const tz = zz.charCodeAt(0);
        return tz < 9 || tz > 13 && tz < 32 || 65533 === tz
      })) ? oz : tz
    }
    async function Tz(zz, tz) {
      try {
        const {
          dir: sz,
          fileName: Fz
        } = await xz(zz, tz, !1);
        return await Gz(await (await sz.getFileHandle(Fz)).getFile())
      } catch (sz) {
        if (sz instanceof DOMException && "NotFoundError" === sz.name) return null;
        throw sz
      }
    }
    async function cz(zz, tz) {
      const sz = await rz(zz);
      for (const Fz of Object.keys(sz)) Fz in tz || (0, Wz.e)(Fz) || await Zz(zz, Fz);
      for (const [Xz, Oz] of Object.entries(tz))((0, Fz.x)(Xz) || (0, Wz.e)(Xz)) && await Iz(zz, Xz, Oz)
    }

    function jz(zz, tz) {
      var sz, Fz;
      let Wz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const Xz = null !== (sz = Wz.debounceMs) && void 0 !== sz ? sz : 300,
        Oz = null !== (Fz = Wz.pollMs) && void 0 !== Fz ? Fz : 1e3;
      let oz = !1,
        vz = null,
        Uz = null,
        Kz = null;
      const uz = () => {
          oz || (vz && clearTimeout(vz), vz = setTimeout((() => {
            vz = null, Nz()
          }), Xz))
        },
        Nz = async () => {
          if (!oz) try {
            if (!await Dz(zz, "readwrite")) return;
            const sz = await rz(zz);
            oz || tz(sz)
          } catch (sz) {
            console.error("[WorldCodeDirectorySync] Failed to read watched directory", sz)
          }
        };
      Nz();
      const bz = window.FileSystemObserver;
      if (bz) try {
        Kz = new bz((() => {
          uz()
        })), Kz.observe(zz, {
          recursive: !0
        })
      } catch (wz) {
        console.warn("[WorldCodeDirectorySync] FileSystemObserver unavailable, falling back to polling", wz), Kz = null
      }
      return Kz || (Uz = setInterval((() => {
        uz()
      }), Oz)), () => {
        oz = !0, vz && clearTimeout(vz), Uz && clearInterval(Uz), Kz && Kz.disconnect()
      }
    }
  },
  4464: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => gz,
      e: () => Hz
    });
    var Fz = sz(1020),
      Wz = sz.n(Fz),
      Xz = sz(65),
      Oz = sz(1173),
      oz = sz(4467),
      vz = sz(1831),
      Uz = sz(2290),
      Kz = sz(4472),
      uz = sz(1087);
    const Nz = new WeakMap;
    let bz = 0;

    function wz(zz) {
      let tz = Nz.get(zz);
      return void 0 === tz && (tz = bz++, Nz.set(zz, tz)), tz
    }

    function Dz(zz) {
      let {
        piece: tz
      } = zz;
      return "space" === tz.kind ? (0, uz.jsx)(uz.Fragment, {
        children: tz.text
      }) : (0, uz.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${tz.delayMs}ms`
        },
        children: (0, uz.jsx)(oz.b, {
          text: "icon" === tz.kind ? `[[${tz.icon}]]` : tz.text
        })
      })
    }

    function gz(zz) {
      let {
        display: tz
      } = zz;
      const {
        selectedLanguage: sz
      } = (0, Oz.B)(), Fz = (0, Xz.useMemo)((() => (0, Kz.d)((0, Kz.f)(tz).plan.pieces)), [tz, sz.code]);
      return (0, uz.jsxs)("div", {
        className: Wz()("Dialogue", {
          DialogueAnimateIn: !1 !== tz.animateIn
        }),
        children: [tz.speakerName && (0, uz.jsx)(vz.c, {
          text: tz.speakerName,
          className: "DialogueSpeaker"
        }), (0, uz.jsx)("p", {
          className: "DialogueLine",
          children: Fz.map(((zz, tz) => 1 === zz.length && "space" === zz[0].kind ? zz[0].text : (0, uz.jsx)("span", {
            className: "DialogueGlue",
            children: zz.map(((zz, tz) => (0, uz.jsx)(Dz, {
              piece: zz
            }, tz)))
          }, tz)))
        })]
      })
    }
    const Hz = (0, Xz.memo)((function() {
      const zz = (0, Uz.e)("dialogue");
      return (0, uz.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: zz && (0, uz.jsx)(gz, {
          display: zz
        }, wz(zz))
      })
    }))
  },
  36161: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => bz,
      f: () => wz
    });
    var Fz = sz(65),
      Wz = sz(2735),
      Xz = sz(1416),
      Oz = sz(1901),
      oz = sz(36112),
      vz = sz(580),
      Uz = sz(1020),
      Kz = sz.n(Uz),
      uz = sz(1087);
    const Nz = {},
      bz = (0, Fz.memo)((function() {
        const zz = (0, Wz.b)();
        return (0, Xz.g)("damagedByOtherPlayer", (tz => {
          let {
            PF: sz,
            direction: Fz
          } = tz;
          const Wz = sz || "nonDirectional";
          if (Nz[Wz]) {
            const tz = Nz[Wz];
            clearTimeout(tz.timeout), tz.direction = Fz, tz.timeout = setTimeout((() => {
              delete Nz[Wz], zz()
            }), 800)
          } else Nz[Wz] = {
            direction: Fz,
            iZ: null,
            timeout: setTimeout((() => {
              delete Nz[Wz], zz()
            }), 800)
          };
          zz()
        })), (0, Oz.d)("kill", (tz => {
          let {
            killer: sz,
            victim: Fz
          } = tz;
          const Wz = Fz.id;
          sz.local && Wz && Wz in Nz && (clearTimeout(Nz[Wz].timeout), delete Nz[Wz], zz())
        })), (0, Fz.useEffect)((() => {
          const zz = (0, oz.i)("turnDamageIndicators", wz);
          return () => {
            zz();
            for (const zz in Nz) clearTimeout(Nz[zz].timeout), delete Nz[zz]
          }
        }), []), (0, uz.jsx)("div", {
          className: "DirectionalDamage",
          children: Object.entries(Nz).map((zz => {
            let [tz, sz] = zz;
            const Fz = (0, vz.G)(sz.direction);
            return (0, uz.jsx)("div", {
              ref: zz => {
                Nz[tz] && (Nz[tz].iZ = zz)
              },
              className: Kz()("DamageIndicator", {
                DamageIndicatorFullCircle: Fz
              })
            }, tz)
          }))
        })
      }));

    function wz(zz) {
      for (const tz in Nz) {
        const {
          direction: sz,
          iZ: Fz
        } = Nz[tz];
        if ((0, vz.G)(sz)) continue;
        const Wz = sz - zz;
        Fz.style.rotate = `${Wz}rad`
      }
    }
  },
  36044: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => gz
    });
    var Fz = sz(65),
      Wz = sz(78),
      Xz = sz(1173),
      Oz = sz(1020),
      oz = sz.n(Oz),
      vz = sz(1664),
      Uz = sz(1036),
      Kz = sz(1264),
      uz = sz(1447),
      Nz = sz(1608),
      bz = sz(1439),
      wz = sz(1087);
    const Dz = 14;

    function gz(zz) {
      let {
        className: tz,
        triggerElementRef: sz,
        options: Oz
      } = zz;
      const {
        t: gz
      } = (0, Xz.B)(), [Hz, Bz] = (0, Fz.useState)(!1), [Pz, rz] = (0, Fz.useState)({
        x: 0,
        y: 0
      }), Yz = (0, Fz.useRef)(null);
      (0, Fz.useEffect)((() => {
        let zz = null;
        const tz = tz => {
            zz = {
              x: tz.clientX,
              y: tz.clientY
            }
          },
          Fz = tz => {
            if (null === zz || !(0, bz.c)(zz, tz)) return;
            zz = null;
            const sz = Dz * (0, vz.getRemInPx)();
            rz({
              x: Math.min(tz.clientX, window.innerWidth - sz - 5),
              y: tz.clientY
            }), Bz((zz => !zz))
          },
          Wz = zz => {
            var tz;
            null !== (tz = Yz.current) && void 0 !== tz && tz.contains(zz.relatedTarget) || Bz(!1)
          },
          Xz = sz.current;
        return Xz.addEventListener("pointerdown", tz), Xz.addEventListener("pointerup", Fz), Xz.addEventListener("mouseleave", Wz), () => {
          Xz.removeEventListener("pointerdown", tz), Xz.removeEventListener("pointerup", Fz), Xz.removeEventListener("mouseleave", Wz)
        }
      }), [sz]), (0, Fz.useEffect)((() => {
        if (Hz) return (0, Nz.d)("pointerdown", (zz => {
          !Yz.current || Yz.current.contains(zz.target) || sz.current.contains(zz.target) || Bz(!1)
        }))
      }), [Hz, sz]), (0, Fz.useLayoutEffect)((() => {
        if (!Hz || !Yz.current) return;
        const zz = Yz.current.getBoundingClientRect().height,
          tz = Math.max(5, window.innerHeight - zz - 5);
        Pz.y > tz && rz({
          x: Pz.x,
          y: tz
        })
      }), [Hz, Pz]), (0, Kz.s)("popup", Yz, (() => {
        Bz(!1)
      }), Hz);
      const xz = Oz.filter((zz => !1 !== zz.show));
      return Hz && 0 !== xz.length ? (0, Wz.createPortal)((0, wz.jsx)("div", {
        ref: Yz,
        className: oz()("FloatingActions", {
          [tz]: tz
        }),
        style: {
          width: `${Dz}rem`,
          top: Pz.y,
          left: Pz.x
        },
        children: xz.map((zz => {
          let {
            icon: tz,
            text: sz,
            onPointerDown: Fz,
            analyticsClick: Wz
          } = zz;
          return (0, wz.jsxs)("div", {
            className: "FloatingAction",
            "data-pad-focusable": !0,
            onPointerUp: zz => {
              void 0 !== Wz && (0, uz.reportAnalyticsClick)(Wz), Fz(zz), Bz(!1), zz.stopPropagation()
            },
            children: [(0, wz.jsx)(Uz.c, {
              name: tz
            }), (0, wz.jsx)("div", {
              children: gz(sz)
            })]
          }, sz)
        }))
      }), function() {
        var zz;
        return null !== (zz = document.querySelector(".WholeAppWrapperInner")) && void 0 !== zz ? zz : document.body
      }()) : null
    }
  },
  36177: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => gO
    });
    var Fz = sz(36078),
      Wz = sz(65),
      Xz = sz(1997),
      Oz = sz(4175),
      oz = sz(4178),
      vz = sz(2290),
      Uz = sz(1857),
      Kz = sz(1087);

    function uz(zz) {
      let {
        className: tz,
        style: sz,
        vw: Fz,
        maxPx: Wz,
        children: Xz
      } = zz;
      console.assert("number" === typeof Fz && "number" === typeof Wz, "vw and maxPx passed to Text must be numbers");
      const Oz = window.innerWidth * (Fz / 100) > Wz ? `${Wz}px` : `${Fz}vw`;
      return (0, Kz.jsx)("div", {
        className: tz,
        style: {
          ...sz,
          fontSize: Oz
        },
        children: Xz
      })
    }
    var Nz = sz(36186),
      bz = sz(1419),
      wz = sz(34),
      Dz = sz(1884),
      gz = sz(1036);

    function Hz(zz) {
      let {
        tasks: tz,
        lastDisplayedTasks: sz
      } = zz;
      return (0, Kz.jsx)(Kz.Fragment, {
        children: Object.keys(tz).map((zz => (0, Kz.jsx)(Bz, {
          task: tz[zz],
          lastDisplayedAs: sz[zz]
        }, tz[zz].text)))
      })
    }

    function Bz(zz) {
      let {
        task: tz,
        lastDisplayedAs: sz
      } = zz;
      const [Fz, Xz] = (0, Wz.useState)(null !== sz && void 0 !== sz && sz.progress ? sz.progress / tz.goal : 0), [Oz, oz] = (0, Wz.useState)(!1), [vz, Uz] = (0, Wz.useState)(tz.claimed || !1);
      return (0, Wz.useEffect)((() => {
        Xz(tz.progress / tz.goal)
      }), [tz.progress, tz.goal]), vz ? null : (0, Kz.jsxs)("div", {
        className: "Task",
        children: [(0, Kz.jsx)("div", {
          className: "TaskDescDiv",
          children: (0, Kz.jsx)(uz, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: tz.text
          })
        }), tz.progress < tz.goal ? (0, Kz.jsxs)("div", {
          className: "TaskProgress",
          children: [0 !== Fz ? (0, Kz.jsx)("div", {
            className: "TaskProgressForeground",
            style: {
              width: 100 * Fz + "%"
            }
          }) : null, (0, Kz.jsx)("div", {
            className: "TaskProgressText",
            children: `${tz.progress}/${tz.goal}`
          })]
        }) : (0, Kz.jsx)(bz.p, {
          className: "ClaimRewardButton",
          onClick: () => {
            oz(!0)
          },
          children: (0, Kz.jsx)(uz, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: "Claim Reward"
          })
        }), Oz ? (0, Kz.jsx)(Pz, {
          task: tz,
          close: () => {
            tz.claimed = !0, Uz(!0), oz(!1)
          }
        }) : null]
      })
    }

    function Pz(zz) {
      let {
        task: tz,
        close: sz
      } = zz;
      const [Fz, Xz] = (0, Wz.useState)({}), [Oz, oz] = (0, Wz.useState)("closed");
      (0, Wz.useEffect)((() => {
        let zz;
        return "animStart" === Oz && (zz = setTimeout((() => {
          oz("animEnd")
        }), 700)), () => {
          clearTimeout(zz)
        }
      }), [Oz]), (0, Nz.d)((() => {
        Uz.gameBridge.send("completeTask", tz.text)
      }));
      const uz = (0, vz.e)("currencyAmounts");
      return (0, Kz.jsxs)("div", {
        className: "RewardBackground",
        onClick: () => {
          if ("animEnd" === Oz)
            if (0 === tz.rewards.length) sz(), Uz.gameBridge.send("completeTask", tz.text);
            else {
              const zz = {
                ...Dz.e.get("currencyAmounts")
              };
              for (const tz in Fz) zz[tz] = {
                ...zz[tz],
                amount: zz[tz].amount + Fz[tz]
              };
              Dz.e.apply({
                currencyAmounts: zz
              }), oz("closed")
            }
          else "closed" === Oz && (Xz(tz.rewards.pop()), oz("animStart"))
        },
        children: [(0, Kz.jsx)("img", {
          className: "Chest",
          alt: "closed" !== Oz ? "open chest" : "closed chest",
          src: `/textures/miscImages/Treasure Chest ${"closed"!==Oz?"open":"closed"}.png`
        }), (0, Kz.jsx)("div", {
          className: "Rewards",
          children: "closed" !== Oz ? Object.keys(Fz).map((zz => {
            const tz = null === uz || void 0 === uz ? void 0 : uz[zz];
            return !tz || tz.hidden ? null : (0, Kz.jsxs)("div", {
              className: "Reward",
              children: [(0, Kz.jsx)(gz.c, {
                name: tz.icon,
                className: "3x UiCurrencyIcon RewardIcon",
                style: {
                  color: tz.iconColour
                }
              }), (0, Kz.jsx)("div", {
                className: "RewardAmountText",
                children: "animStart" === Oz ? 0 : Fz[zz]
              })]
            }, zz)
          })) : null
        }), "animStart" === Oz ? (0, Kz.jsx)(rz, {}) : null, (0, Kz.jsx)("div", {
          className: "ChestsLeft",
          children: tz.rewards.length
        })]
      })
    }

    function rz() {
      const [zz, tz] = (0, Wz.useState)(0);
      (0, Wz.useEffect)((() => {
        tz(1)
      }), []);
      return (0, Kz.jsx)(Kz.Fragment, {
        children: Array.from({
          length: 40
        }).map(((tz, sz) => (0, Kz.jsx)(gz.c, {
          name: "star",
          className: "3x UiCurrencyIcon OpenStar",
          style: {
            bottom: 50 * zz * Math.cos(sz / 40 * (2 * Math.PI)) + 50 + "vh",
            left: 50 * zz * Math.sin(sz / 40 * (2 * Math.PI)) + "vh",
            opacity: 0 === zz ? 1 : 0
          }
        }, sz)))
      })
    }
    wz.o.subscribe("requiredLibrariesLoaded", (() => {
      setTimeout((() => {
        const zz = new Image,
          tz = new Image;
        zz.src = "/textures/miscImages/Treasure Chest open.png", tz.src = "/textures/miscImages/Treasure Chest closed.png"
      }), 1e4)
    }));
    var Yz = sz(2862),
      xz = sz(1116),
      mz = sz(1831),
      Jz = sz(1416),
      Iz = sz(321),
      Cz = sz(1901),
      ez = sz(1306);

    function Zz(zz) {
      var tz, sz;
      let {
        byId: Fz,
        localId: Wz
      } = zz;
      return null === Wz ? null : null !== (tz = null === (sz = Fz[Wz]) || void 0 === sz ? void 0 : sz.name) && void 0 !== tz ? tz : null
    }

    function Gz(zz) {
      let {
        lbStats: tz,
        storedState: sz = {}
      } = zz;
      const {
        userContext: Fz
      } = (0, xz.b)(), Xz = (0, Cz.h)("players", Zz), [Oz, oz] = (0, Wz.useState)(sz.selectedCat || (null === tz || void 0 === tz ? void 0 : tz[0]) || null), [vz, uz] = (0, Wz.useState)(sz.selectedTimeframe || "Today"), [Nz, bz] = (0, Wz.useState)(null);
      (0, Wz.useEffect)((() => {
        null === Oz && null !== tz && tz.length > 0 && oz(tz[0])
      }), [tz, Oz]);
      const [wz, Dz] = (0, Wz.useState)(sz.seeingTop || !1), [gz, Hz] = (0, Wz.useState)(!1), Bz = (0, Wz.useCallback)((() => {
        null !== Oz && null !== vz && (Uz.gameBridge.send("requestLeaderboard", {
          category: Oz.value,
          timeframe: vz,
          seeTop: wz
        }), rz(!0), jz && Az(null))
      }), [Oz, vz, sz, wz]);
      (0, Wz.useEffect)((() => {
        Bz(), sz.selectedCat = Oz, sz.selectedTimeframe = vz, sz.seeingTop = wz
      }), [Oz, vz, sz, wz, Bz]), (0, Wz.useEffect)((() => {
        if ((null === Nz || void 0 === Nz ? void 0 : Nz.length) > 0)
          if (wz) wz && Hz(null === Gz(Nz));
          else {
            for (const zz of Nz)
              if (1 === zz.place) return void Hz(!1);
            Hz(!0)
          }
      }), [Nz, wz]), (0, Jz.g)("leaderboardResponse", (zz => {
        let {
          category: sz,
          timeframe: Fz,
          data: Wz
        } = zz;
        for (let Xz = 0; Xz < tz; Xz++)
          if (tz[Xz].value === sz) {
            oz(tz[Xz]);
            break
          } uz(Fz), bz(Wz), rz(!1)
      }));
      const [Pz, rz] = (0, Wz.useState)(!0);

      function Gz(zz) {
        const tz = Zz(Uz.gameBridge.latest("players"));
        for (let sz = 0; sz < zz.length; sz++)
          if (zz[sz].name === tz) return zz[sz].place;
        return null
      }
      const [Tz, cz] = (0, Wz.useState)(!1), [jz, Az] = (0, Wz.useState)(null);
      (0, Wz.useEffect)((() => {
        if (Nz && !Tz) {
          const zz = Gz(Nz);
          zz < (sz.lastSeenPlayerPlace || 0) && Az(sz.lastSeenPlayerPlace - zz), cz(!0)
        }
      }), [Nz, sz, Tz]), (0, Wz.useEffect)((() => () => {
        Nz && (sz.lastSeenPlayerPlace = Gz(Nz))
      }), [Nz, sz]);
      const yz = (0, Wz.useRef)(null),
        [Mz, dz] = (0, Wz.useState)(void 0);
      return (0, Wz.useEffect)((() => {
        var zz, tz;
        Mz !== (null === (zz = yz.current) || void 0 === zz ? void 0 : zz.offsetHeight) && dz(null === (tz = yz.current) || void 0 === tz ? void 0 : tz.offsetHeight)
      })), Fz.isLoggedIn() ? (0, Kz.jsxs)(Kz.Fragment, {
        children: [(0, Kz.jsxs)("div", {
          className: "LeaderboardSelectors",
          children: [(0, Kz.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, Kz.jsx)(Yz.d, {
              options: tz.map((zz => ({
                label: zz.label,
                value: zz.value
              }))),
              value: Oz,
              onChange: zz => {
                oz(zz)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), (0, Kz.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, Kz.jsx)(Yz.d, {
              options: Iz.Jc.map((zz => ({
                value: zz,
                label: zz,
                className: "LBDropdownMenuItem"
              }))),
              value: vz,
              onChange: zz => {
                uz(zz.label)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), gz ? (0, Kz.jsx)("div", {
            className: "SeeTopText",
            onClick: () => {
              Dz(!wz)
            },
            children: wz ? "See Yourself" : "See Top"
          }) : null]
        }), (0, Kz.jsx)("div", {
          className: "LBTableWrapper",
          children: Pz ? (0, Kz.jsx)("div", {
            className: "LoaderContainer",
            children: (0, Kz.jsx)(ez.d, {})
          }) : null === jz ? (0, Kz.jsx)(Kz.Fragment, {
            children: (0, Kz.jsxs)("table", {
              className: "LBTable",
              children: [(0, Kz.jsx)("thead", {
                className: "LBTableTHead",
                ref: yz,
                children: (0, Kz.jsxs)("tr", {
                  children: [(0, Kz.jsx)("th", {
                    className: "LBTablePlaceTH LBTableTH",
                    children: "PLACE"
                  }), (0, Kz.jsx)("th", {
                    className: "LBTablePlayerTH LBTableTH",
                    children: "PLAYER"
                  }), (0, Kz.jsx)("th", {
                    className: "LBTableValueTH LBTableTH",
                    children: Oz.label.toUpperCase()
                  })]
                })
              }), (0, Kz.jsx)("tbody", {
                children: Nz.map((zz => (0, Kz.jsxs)("tr", {
                  className: "LBTableTR " + (zz.name === Xz ? "LBTableTRYou" : ""),
                  children: [(0, Kz.jsx)("td", {
                    className: "LBTableTD",
                    children: `#${zz.place}`
                  }), (0, Kz.jsx)("td", {
                    className: "LBTableTD",
                    children: (0, Kz.jsx)(mz.c, {
                      text: [{
                        entityName: zz.name
                      }]
                    })
                  }), (0, Kz.jsx)("td", {
                    className: "LBTableTD",
                    children: zz.stat
                  })]
                }, zz.name)))
              })]
            })
          }) : (0, Kz.jsx)("div", {
            className: "LBIncreaseWrapper",
            onClick: () => {
              Az(null)
            },
            children: (0, Kz.jsxs)("div", {
              className: "LBIncreaseDiv",
              children: [(0, Kz.jsx)("div", {
                className: "TriangleUp"
              }), (0, Kz.jsx)("div", {
                className: "LBIncreaseText",
                children: `${jz} Place${jz>1?"s":""}`
              })]
            })
          })
        })]
      }) : (0, Kz.jsxs)("div", {
        className: "LBLoginDiv",
        children: [(0, Kz.jsx)("div", {
          className: "LBLoginInfo",
          children: "Login to see the leaderboard"
        }), (0, Kz.jsx)("div", {
          className: "LBLoginInfo",
          children: "You can login from the top left homescreen"
        })]
      })
    }
    var Tz = sz(1113),
      cz = sz(106),
      jz = sz(44),
      Az = sz(3080);
    const yz = (0, Wz.memo)((function(zz) {
      let {
        show: tz,
        onClose: sz
      } = zz;
      (0, Tz.c)();
      const Fz = (0, vz.e)("_tasks"),
        Xz = (0, vz.e)("_availableLeaderboards"),
        [Uz, uz] = (0, Wz.useState)({});
      Fz && Object.keys(Fz).length > 0 && 0 === Object.keys(Uz).length && uz(Fz);
      const [Nz] = (0, Wz.useState)({
        tasks: {},
        leaderboard: {}
      }), bz = {
        tasks: {
          Title: "Tasks",
          getIsDefined: () => !!Fz && Object.keys(Fz).length > 0,
          content: (0, Kz.jsx)(Hz, {
            tasks: Fz,
            lastDisplayedTasks: Uz
          })
        },
        leaderboard: {
          Title: "Leaderboard",
          getIsDefined: () => (null === Xz || void 0 === Xz ? void 0 : Xz.length) > 0,
          content: (0, Kz.jsx)(Gz, {
            lbStats: Xz,
            storedState: Nz.leaderboard
          })
        }
      };

      function wz() {
        for (const zz in bz)
          if (bz[zz].getIsDefined()) return zz;
        return null
      }
      const [Dz, gz] = (0, Wz.useState)(wz());

      function Bz() {
        uz({
          ...Fz
        }), sz()
      }(0, Wz.useEffect)((() => {
        Dz || gz(wz())
      }), [wz()]), (0, oz.e)(!0, Dz && tz), (0, Wz.useEffect)((() => {
        tz && !Dz && (console.log("CLOSE"), Bz())
      }), [tz, Dz]);
      const [Pz, rz] = (0, Wz.useState)(!1);
      return (0, Wz.useEffect)((() => {
        tz && Dz && !Pz && rz(!0)
      }), [tz, Pz, Dz]), (0, Wz.useEffect)((() => {
        !Pz && Fz && "tasks" !== Dz && gz("tasks")
      }), [Pz, Fz, Dz]), (0, Kz.jsx)(Kz.Fragment, {
        children: Dz ? (0, Kz.jsx)(Az.d, {
          className: "RetentionFeaturesWrapper",
          show: tz,
          children: (0, Kz.jsxs)(Oz.b, {
            close: Bz,
            escDoesExit: !1,
            closeClassnameList: ["VerticalMenuScreenDiv"],
            togglePointerLock: !1,
            globallyUniqueKey: "RetentionFeaturesComponent",
            children: [(0, Kz.jsxs)("div", {
              className: "VerticalMenuScreenDiv",
              children: [(0, Kz.jsx)(dz, {}), (0, Kz.jsxs)("div", {
                className: "MenuDiv",
                children: [(0, Kz.jsx)(Mz, {
                  setCategory: gz,
                  menuCategories: bz,
                  selectedCat: Dz
                }), (0, Kz.jsx)("div", {
                  className: "MenuCategoryContainer",
                  children: bz[Dz].content
                })]
              })]
            }), (0, Kz.jsx)("div", {
              className: "BottomScreenMenuWrapper",
              children: cz.featureFlags.useDiscord && (0, Kz.jsx)("div", {
                className: "DiscordMenuDivDiv",
                children: (0, Kz.jsx)("div", {
                  className: "DiscordMenuDiv",
                  children: (0, Kz.jsx)(hz, {
                    tasks: Fz
                  })
                })
              })
            })]
          })
        }) : null
      })
    }));

    function Mz(zz) {
      let {
        selectedCat: tz,
        setCategory: sz,
        menuCategories: Fz
      } = zz;
      return (0, Kz.jsx)("div", {
        className: "MenuHeader",
        children: Object.keys(Fz).map((zz => Fz[zz].getIsDefined() ? (0, Kz.jsx)("div", {
          className: "MenuHeaderCategory " + (zz === tz ? "SelectedHeaderCat" : "UnselectedHeaderCat"),
          onClick: () => {
            sz(zz)
          },
          children: Fz[zz].Title
        }, zz) : null))
      })
    }

    function dz() {
      const zz = (0, vz.e)("currencyAmounts");
      return (0, Kz.jsx)("div", {
        className: "TopScreenCurrencies",
        children: Object.keys(null !== zz && void 0 !== zz ? zz : {}).map((tz => {
          const sz = zz[tz];
          return sz.hidden ? null : (0, Kz.jsxs)("div", {
            className: "TopScreenCurrencyDiv",
            children: [(0, Kz.jsx)(gz.c, {
              name: sz.icon,
              className: "3x UiCurrencyIcon",
              style: {
                color: sz.iconColour
              }
            }), (0, Kz.jsx)("div", {
              className: "UiCurrencyAmount",
              children: sz.amount
            })]
          }, tz)
        }))
      })
    }

    function hz(zz) {
      let {
        tasks: tz
      } = zz;
      return (0, Kz.jsxs)("a", {
        className: "MenuDiscordButtonWrapper",
        href: "https://discord.gg/playbloxd",
        target: "_blank",
        rel: "noreferrer",
        children: [(0, Kz.jsx)(gz.c, {
          name: "discord",
          kit: "brands",
          className: "DiscordButton",
          onClick: () => {
            jz.f.setItem("DiscordPressed", !0), Uz.gameBridge.send("setServerCookie", {
              key: "joinDiscord",
              value: "true"
            }), "joinDiscord" in tz && wz.o.Yg("clientTaskProgress", {
              taskId: "joinDiscord",
              progress: 1
            })
          }
        }), (0, Kz.jsx)(Xz.c, {})]
      })
    }
    var Qz = sz(30),
      kz = sz(1571),
      iz = sz(36027),
      Lz = sz(8739),
      lz = sz(4278),
      nz = sz(161),
      az = sz(1207),
      qz = sz(1333),
      Sz = sz(2446),
      Vz = sz(1173),
      Rz = sz(1577),
      pz = sz(2268),
      fz = sz(2260),
      Ez = sz(1786),
      zt = sz(1966),
      tt = sz(1244),
      st = sz(1447),
      Ft = sz(4229);

    function Wt(zz) {
      const tz = {
        lobbyName: zz,
        answer: null,
        response: Ft.b.getSocialSettings(zz)
      };
      return tz.response.then((zz => {
        tz.answer = zz
      })), tz
    }
    const Xt = new Map;

    function Ot(zz) {
      const [tz] = (0, Wz.useState)((() => function(zz) {
        var tz;
        const sz = null !== (tz = Xt.get(zz)) && void 0 !== tz ? tz : null;
        return null !== sz && void 0 !== sz && sz.answer && "error" in sz.answer ? null : sz
      }(zz))), [sz, Fz] = (0, Wz.useState)((() => null !== tz && void 0 !== tz && tz.answer && "settings" in tz.answer ? tz.answer.settings : null)), [Xz, Oz] = (0, Wz.useState)(!0), [oz, vz] = (0, Wz.useState)(null !== sz), Uz = (0, Wz.useRef)(sz);
      Uz.current = sz;
      const Kz = (0, Wz.useRef)(0),
        uz = (0, Wz.useRef)(0),
        Nz = (0, Wz.useRef)(!1),
        bz = (0, Wz.useRef)(!0),
        wz = (0, Wz.useCallback)((async tz => {
          const sz = ++Kz.current,
            Wz = await (null !== tz && void 0 !== tz ? tz : Ft.b.getSocialSettings(zz));
          bz.current && sz === Kz.current && (vz(!0), Oz(!1), "error" in Wz || Fz(Wz.settings))
        }), [zz]),
        Dz = (0, Wz.useCallback)((() => {
          Oz(!0), wz()
        }), [wz]);
      (0, Wz.useEffect)((() => (bz.current = !0, Xt.delete(zz), Oz(!0), wz(null === tz || void 0 === tz ? void 0 : tz.response), () => {
        bz.current = !1
      })), [wz, zz, tz]);
      const gz = zz => {
        Kz.current++, Oz(!1), Uz.current = zz, Fz(zz)
      };
      return {
        settings: sz,
        loading: Xz,
        answered: oz,
        retry: Dz,
        change: async function(tz, sz) {
          let {
            quiet: Fz = !1
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const Wz = Uz.current;
          if (null === Wz) return !1;
          gz(sz(Wz)), uz.current > 0 && (Nz.current = !0), uz.current++;
          const Xz = await Ft.b.setSocialSettings(zz, tz);
          uz.current--;
          const Oz = !("error" in Xz);
          if (!bz.current) return Oz;
          if (Fz);
          else if ("error" in Xz) Ez.f.showMessage({
            translationKey: Xz.error
          });
          else
            for (const zz of Xz.notFound) Ez.f.showMessage({
              translationKey: "worldSocial:notFound",
              params: {
                playerName: zz
              }
            });
          if (uz.current > 0) return Oz;
          const oz = Nz.current;
          return Nz.current = !1, !oz && "settings" in Xz ? gz(Xz.settings) : (oz || gz(Wz), wz()), Oz
        }
      }
    }

    function ot(zz, tz) {
      const sz = tz.toLowerCase();
      for (const Fz of zz)
        if (Fz.toLowerCase() === sz) return !0;
      return !1
    }

    function vt(zz) {
      if (null === zz) return !0;
      const {
        visibility: tz
      } = zz;
      return "public" === tz || "unlisted" === tz || "whitelist" === tz && zz.canManage
    }

    function Ut(zz, tz, sz) {
      if (sz) {
        const sz = tz.filter((tz => !ot(zz.whitelist, tz)));
        return {
          ...zz,
          whitelist: [...zz.whitelist, ...sz]
        }
      }
      return {
        ...zz,
        whitelist: zz.whitelist.filter((zz => !ot(tz, zz)))
      }
    }
    var Kt = sz(2477);

    function ut(zz) {
      let {
        worldCode: tz,
        message: sz
      } = zz;
      const {
        t: Fz
      } = (0, Vz.B)(), {
        isTouchScreen: Xz
      } = (0, Qz.h)(["isTouchScreen"]), Oz = cz.featureFlags.canUseInviteLinks, oz = (0, Lz.k)(Oz && null === sz), [vz, Uz] = (0, Kt.g)(), uz = (0, Wz.useRef)(null);
      if (null !== sz) return (0, Kz.jsxs)("div", {
        className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
        children: [(0, Kz.jsx)(gz.c, {
          name: "lock"
        }), (0, Kz.jsx)("span", {
          children: sz
        })]
      });
      const Nz = Oz ? oz : tz,
        wz = Xz && Oz && (0, Kt.b)();
      return (0, Kz.jsxs)("div", {
        className: "WorldSocialLinkRow",
        children: [!Oz && (0, Kz.jsx)("span", {
          className: "WorldSocialCodeLabel",
          children: Fz("worldSocial:worldCode")
        }), (0, Kz.jsx)("input", {
          ref: uz,
          className: "WorldSocialLink",
          readOnly: !0,
          value: null !== Nz && void 0 !== Nz ? Nz : "",
          "aria-label": Fz(Oz ? "worldSocial:worldLink" : "worldSocial:worldCode"),
          onFocus: zz => {
            zz.currentTarget.select()
          }
        }), (0, Kz.jsxs)(bz.h, {
          className: "WorldSocialCopy",
          disabled: null === Nz,
          onClick: () => {
            null !== Nz && (0, Kt.e)(Nz, {
              useShareSheet: wz,
              onOutcome: zz => {
                if ((0, st.reportAnalyticsClick)({
                    id: "world_social.copy_link",
                    value: "copied" !== zz || Oz ? zz : "code"
                  }), "copied" === zz) Uz();
                else if ("failed" === zz) {
                  var tz;
                  null === (tz = uz.current) || void 0 === tz || tz.focus(), Ez.f.showMessage({
                    translationKey: "partyBar:copyFailed"
                  })
                }
              }
            })
          },
          children: [(0, Kz.jsx)(gz.c, {
            name: vz ? "check" : wz ? "up-from-bracket" : "copy"
          }), " ", Fz(vz ? "general:copied" : wz ? "worldSocial:share" : "general:copy")]
        })]
      })
    }
    var Nt = sz(1020),
      bt = sz.n(Nt);
    const wt = {
        unlisted: "link",
        public: "globe",
        whitelist: "user-check",
        private: "lock"
      },
      Dt = ["unlisted", "public", "whitelist", "private"];

    function gt(zz) {
      let {
        visibility: tz,
        onPick: sz
      } = zz;
      const {
        t: Fz
      } = (0, Vz.B)(), Xz = (0, Wz.useRef)([]);
      return (0, Kz.jsx)("div", {
        className: "WorldSocialTiles",
        role: "group",
        "aria-label": Fz("worldSocial:whoCanJoin"),
        children: Dt.map(((zz, Wz) => {
          const Oz = zz === tz;
          return (0, Kz.jsxs)("button", {
            ref: zz => {
              Xz.current[Wz] = zz
            },
            type: "button",
            className: bt()("WorldSocialTile", {
              WorldSocialTileSelected: Oz
            }),
            "aria-pressed": Oz,
            tabIndex: Oz ? 0 : -1,
            onKeyDown: zz => {
              ((zz, tz) => {
                const sz = "ArrowRight" === zz.key || "ArrowDown" === zz.key ? 1 : "ArrowLeft" === zz.key || "ArrowUp" === zz.key ? -1 : 0;
                var Fz;
                0 !== sz && (zz.preventDefault(), null === (Fz = Xz.current[(tz + sz + Dt.length) % Dt.length]) || void 0 === Fz || Fz.focus())
              })(zz, Wz)
            },
            onClick: () => {
              sz(zz)
            },
            children: [(0, Kz.jsx)("span", {
              className: "WorldSocialTileIcon",
              children: (0, Kz.jsx)(gz.c, {
                name: wt[zz]
              })
            }), (0, Kz.jsxs)("span", {
              className: "WorldSocialTileText",
              children: [(0, Kz.jsx)("span", {
                className: "WorldSocialTileTitle",
                children: Fz(`worldSocial:${zz}`)
              }), (0, Kz.jsx)("span", {
                className: "WorldSocialTileDescription",
                children: Fz(`worldSocial:${zz}Description`)
              })]
            })]
          }, zz)
        }))
      })
    }
    var Ht = sz(571),
      Bt = sz(2444),
      Pt = sz(2391),
      rt = sz(4022);

    function Yt(zz, tz) {
      var sz;
      return {
        isError: !1,
        name: zz,
        ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
        cosmetics: null !== tz && void 0 !== tz ? tz : {},
        nameColour: null !== (sz = null === tz || void 0 === tz ? void 0 : tz.nameColour) && void 0 !== sz ? sz : Ht.e,
        location: {
          status: "offline"
        }
      }
    }

    function xt(zz) {
      let {
        player: tz,
        isFriend: sz = !1,
        status: Fz,
        showLocation: Wz = void 0 === Fz,
        wN: Xz,
        onSendFriendRequest: Oz,
        actions: oz,
        zIndex: vz
      } = zz;
      const {
        t: Uz
      } = (0, Vz.B)();
      let uz, Nz = Fz;
      return null !== Xz && void 0 !== Xz && Xz.on && (Nz = (0, Kz.jsxs)(Kz.Fragment, {
        children: [null !== Fz && void 0 !== Fz ? Fz : (0, Kz.jsx)(Pt.c, {
          socialPreview: tz
        }), (0, Kz.jsxs)("span", {
          className: "WorldSocialCanJoin",
          children: [" \xb7 ", Uz("worldSocial:canJoin")]
        })]
      })), (oz || Xz) && (uz = (0, Kz.jsxs)(Kz.Fragment, {
        children: [oz, Xz && (0, Kz.jsx)("label", {
          className: "WorldSocialTick",
          children: (0, Kz.jsx)(rt.e, {
            checked: Xz.on,
            disabled: !1,
            ariaLabel: Uz("worldSocial:letJoin", {
              playerName: tz.name
            }),
            onChange: zz => {
              Xz.onChange(zz.target.checked)
            }
          })
        })]
      })), (0, Kz.jsx)(Bt.d, {
        playerSocialPreview: tz,
        isFriend: sz,
        hideFriendBadge: !0,
        onFriendRemoved: sz ? zz => {
          Rz.d.removeFriendFromState(zz)
        } : void 0,
        status: Nz,
        showLocation: Wz,
        onSendFriendRequest: Oz,
        opensProfileCard: !1,
        zIndex: vz,
        children: uz
      })
    }

    function mt(zz) {
      let {
        row: tz,
        wN: sz,
        canInvite: Fz,
        invited: Wz,
        onInvite: Xz,
        zIndex: Oz
      } = zz;
      const {
        t: oz
      } = (0, Vz.B)(), vz = "online" === tz.place ? bz.h : bz.l;
      return (0, Kz.jsx)(xt, {
        player: tz.friend,
        isFriend: !0,
        status: "here" === tz.place ? oz("worldSocial:inThisWorld") : void 0,
        showLocation: !0,
        wN: sz,
        zIndex: Oz,
        actions: Fz && (0, Kz.jsx)(vz, {
          className: "WorldSocialInvite SmallTextLight",
          disabled: Wz,
          onClick: Xz,
          ariaLabel: `${oz("worldSocial:invite")} ${tz.friend.name}`,
          children: oz(Wz ? "worldSocial:invited" : "worldSocial:invite")
        })
      })
    }
    var Jt = sz(2507);

    function It(zz) {
      let {
        playersHere: tz,
        exclude: sz,
        Hr: Fz
      } = zz;
      const {
        t: Xz
      } = (0, Vz.B)(), Oz = (0, Jt.r)(Jt.m), [oz, vz] = (0, Wz.useState)([]), Uz = [], uz = (zz, tz) => {
        const Fz = [...sz, ...Uz.map((zz => zz.player.name))];
        Uz.length < 3 && !ot(Fz, zz.name) && Uz.push({
          player: zz,
          status: tz
        })
      };
      for (const Wz of tz) uz(Yt(Wz.name, Wz.cosmetics, Wz.ranks), Xz("worldSocial:inThisWorld"));
      if ("loaded" === Oz.state.status)
        for (const Wz of Oz.state.recentPlayers) Wz.preview.name && !Wz.preview.isError && uz({
          ...Wz.preview,
          location: {
            status: "offline"
          }
        }, Xz("worldSocial:playedWithYou"));
      const Nz = zz => {
        vz((tz => [...tz, zz])), Fz(zz).finally((() => {
          vz((tz => tz.filter((tz => tz !== zz))))
        }))
      };
      return (0, Kz.jsx)(Kz.Fragment, {
        children: Uz.map(((zz, tz) => {
          let {
            player: sz,
            status: Fz
          } = zz;
          return (0, Kz.jsx)(xt, {
            zIndex: Uz.length - tz,
            player: sz,
            status: Fz,
            onSendFriendRequest: () => {
              Nz(sz.name)
            },
            actions: (0, Kz.jsx)(qz.h, {
              tooltipInner: (0, Kz.jsx)(Kz.Fragment, {
                children: Xz("recentPlayers:addFriend")
              }),
              delayShow: 0,
              hoverOnly: !0,
              children: (0, Kz.jsx)(bz.h, {
                className: "FriendRequestButton",
                disabled: oz.includes(sz.name),
                ariaLabel: `${Xz("recentPlayers:addFriend")} ${sz.name}`,
                onClick: () => {
                  Nz(sz.name)
                },
                children: (0, Kz.jsx)(gz.c, {
                  name: "user-plus"
                })
              })
            })
          }, `suggestion:${sz.name}`)
        }))
      })
    }
    var Ct = sz(1622);

    function et(zz) {
      let {
        Hr: tz
      } = zz;
      const {
        t: sz
      } = (0, Vz.B)(), Fz = (0, Wz.useRef)(null), [Xz, Oz] = (0, Wz.useState)(""), [oz, vz] = (0, Wz.useState)(!1), Uz = () => {
        const zz = Xz.trim();
        "" === zz || oz || (vz(!0), tz(zz).then((zz => {
          zz && Fz.current && (Fz.current.value = "", Oz(""))
        })).finally((() => {
          vz(!1)
        })))
      };
      return (0, Kz.jsxs)("div", {
        className: "WorldSocialAddFriend",
        onKeyDown: zz => {
          zz.target === Fz.current && "Escape" !== zz.key && zz.stopPropagation()
        },
        children: [(0, Kz.jsx)(Ct.d, {
          className: "WorldSocialAddFriendInput",
          domRef: Fz,
          maxLength: 32,
          placeholderText: sz("worldSocial:addFriendPlaceholder"),
          ariaLabel: sz("worldSocial:addFriendPlaceholder"),
          stopPropagation: !1,
          onValueChange: zz => {
            Oz(zz)
          },
          onEnter: Uz
        }), (0, Kz.jsxs)(bz.h, {
          className: "WorldSocialAddFriendButton SmallTextLight",
          disabled: oz || "" === Xz.trim(),
          onClick: Uz,
          children: [(0, Kz.jsx)(gz.c, {
            name: "user-plus"
          }), " ", sz("socialBar:sendRequest")]
        })]
      })
    }
    const Zt = new Map;

    function Gt(zz) {
      const tz = Zt.get(zz);
      if (!tz) return [];
      const sz = Date.now();
      for (const [Fz, Wz] of tz) sz - Wz >= nz.n && tz.delete(Fz);
      return [...tz.keys()]
    }
    var Tt = sz(1213),
      ct = sz(1464),
      jt = sz(4274),
      At = sz(292),
      yt = sz(4253);
    const Mt = ["auto", "auto_existing"];

    function dt(zz) {
      return Mt.includes(zz)
    }

    function ht(zz, tz) {
      const sz = (0, Tt.vb)(zz);
      return null !== tz && (0, Tt.vb)(tz) === sz || (0, yt.c)().some((zz => (0, Tt.vb)(zz.name) === sz))
    }
    const Qt = new Set;

    function kt(zz) {
      return `worldSocialSeen:${zz}`
    }

    function it(zz) {
      return !zz || Qt.has(zz) || !0 === jz.f.getItem(kt(zz))
    }

    function Lt(zz) {
      zz && !Qt.has(zz) && (Qt.add(zz), jz.f.setItem(kt(zz), !0))
    }

    function lt(zz) {
      let {
        show: tz,
        onClose: sz,
        opener: Fz
      } = zz;
      const {
        lobbyName: Xz,
        shownLobbyName: oz
      } = (0, Cz.l)("connectedGame");
      return (0, Wz.useEffect)((() => {
        tz && (0, st.reportAnalyticsClick)({
          id: "world_social.open",
          value: Fz
        })
      }), [tz]), (0, Kz.jsx)(Oz.b, {
        show: tz && null !== Xz,
        close: sz,
        togglePointerLock: !1,
        className: "WorldSocialBackgroundScreen",
        globallyUniqueKey: "WorldSocialPopup",
        doGameplayStartStopOnShow: !0,
        ignorePressesAsShown: "icon" !== Fz,
        children: tz && null !== Xz && (0, Kz.jsx)(nt, {
          lobbyName: Xz,
          worldCode: null !== oz && void 0 !== oz ? oz : Xz,
          onClose: sz
        }, Xz)
      })
    }

    function nt(zz) {
      var tz;
      let {
        lobbyName: sz,
        worldCode: Fz,
        onClose: Xz
      } = zz;
      const {
        t: Oz
      } = (0, Vz.B)(), oz = (0, Wz.useRef)(null), {
        settings: vz,
        loading: Uz,
        answered: uz,
        change: Nz,
        retry: wz
      } = Ot(sz), Dz = (0, Rz.k)(), Hz = (0, Cz.l)("players"), Bz = (0, Cz.l)("hiddenPlayerNames"), [Pz, rz] = (0, Wz.useState)([]), [Yz, mz] = (0, Wz.useState)([]), [Jz, Iz] = (0, Wz.useState)(!1), Zz = (0, Wz.useMemo)((() => {
        var zz, tz;
        const sz = null === Hz.localId ? null : null !== (zz = null === (tz = Hz.byId[Hz.localId]) || void 0 === tz ? void 0 : tz.name) && void 0 !== zz ? zz : null;
        return Hz.ids.flatMap((zz => {
          const tz = Hz.byId[zz];
          return null !== tz && void 0 !== tz && tz.name && tz.name !== sz ? [{
            name: tz.name,
            cosmetics: tz.cosmetics,
            ranks: tz.ranks
          }] : []
        }))
      }), [Hz]), Gz = (0, Wz.useMemo)((() => function(zz, tz, sz) {
        const Fz = [],
          Wz = [],
          Xz = [];
        for (const Oz of zz) !Oz.isError && Oz.name && ("inGame" === Oz.location.status && Oz.location.inLobbyName === tz || ot(sz, Oz.name) ? Wz.push({
          friend: Oz,
          place: "here"
        }) : "offline" === Oz.location.status ? Xz.push({
          friend: Oz,
          place: "offline"
        }) : Fz.push({
          friend: Oz,
          place: "online"
        }));
        return [...Fz, ...Wz, ...Xz]
      }(Dz.friends, sz, Zz.map((zz => zz.name)))), [Dz.friends, sz, Zz]), Tz = cz.featureFlags.canSeeRealPlayerNames ? Zz.filter((zz => null === (0, tt.c)(zz.name, Bz))) : [], jz = null !== vz && void 0 !== vz && vz.canManage ? vz : null, Az = null !== jz, yz = null !== (tz = null === vz || void 0 === vz ? void 0 : vz.visibility) && void 0 !== tz ? tz : null, Mz = "whitelist" === (null === jz || void 0 === jz ? void 0 : jz.visibility), dz = "private" === yz || "whitelist" === yz && !Az, {
        userContext: hz
      } = (0, xz.b)();
      (0, Wz.useEffect)((() => {
        Az && ht(sz, hz.getPersonalWorldLobbyName()) && Lt(hz.whamm)
      }), [Az, sz, hz]);
      const Qz = dz ? Oz("whitelist" === yz ? "socialBar:inviteWorldManagersOnly" : Az ? "worldSocial:privateLinkRow" : "socialBar:inviteWorldPrivate") : null,
        kz = null === Qz;
      (0, Wz.useEffect)((() => dz ? void 0 : Ez.f.quietFriendAdded()), [dz]), (0, Wz.useEffect)((() => Ez.f.quietFriendRequests()), []);
      const Lz = (0, Wz.useRef)(!1);
      (0, Wz.useEffect)((() => {
        const zz = oz.current,
          tz = !Lz.current;
        Lz.current = !0;
        const sz = null === document.activeElement || document.activeElement === document.body;
        null !== zz && void 0 !== zz && zz.contains(document.activeElement) || !tz && !sz || (0, iz.h)() || null === zz || void 0 === zz || zz.focus({
          preventScroll: !0
        })
      }), [kz]), (0, Wz.useEffect)((() => {
        const zz = zz => {
          "Escape" !== zz.key || null !== document.activeElement && document.activeElement !== document.body || Xz()
        };
        return document.addEventListener("keydown", zz), () => {
          document.removeEventListener("keydown", zz)
        }
      }), [Xz]);
      const Ft = null === vz && !uz,
        Wt = (Uz || Dz.loading) && 0 === Dz.friends.length,
        Xt = Dz.friends.flatMap((zz => zz.name ? [zz.name] : [])),
        Kt = Pz.filter((zz => !ot(Xt, zz))),
        Nt = Gz.length + 3,
        bt = Kt.length + Nt,
        wt = Jz ? Dz.requests : Dz.requests.slice(0, 1),
        Dt = async function(zz) {
          let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (const sz of function(zz, tz) {
              const sz = [];
              for (let Fz = 0; Fz < zz.length; Fz += tz) sz.push(zz.slice(Fz, Fz + tz));
              return sz
            }(zz, lz.I)) {
            if (!await Nz({
                whitelistAdd: sz
              }, (zz => Ut(zz, sz, !0)), {
                quiet: tz
              })) return !1
          }
          return !0
        }, Ht = async zz => {
          if (zz === yz) return;
          (0, st.reportAnalyticsClick)({
            id: "world_social.set_mode",
            value: zz
          });
          const tz = [...Gt(sz), ...Yz],
            Fz = "whitelist" === zz && vz ? function(zz, tz, sz) {
              const Fz = [],
                Wz = zz.flatMap((zz => "here" === zz.place ? [zz.friend.name] : []));
              for (const Xz of [...Wz, ...tz]) ot(Fz, Xz) || ot(sz, Xz) || Fz.push(Xz);
              return Fz
            }(Gz, tz, vz.whitelist) : [];
          await Nz({
            setVisibility: zz
          }, (tz => ({
            ...tz,
            visibility: zz
          }))) && await Dt(Fz)
        }, Bt = zz => {
          if (Mz && jz) return {
            on: ot(jz.whitelist, zz),
            onChange: tz => {
              (0, st.reportAnalyticsClick)({
                id: "world_social.whitelist_toggle",
                value: tz ? "on" : "off"
              }), Nz(tz ? {
                whitelistAdd: [zz]
              } : {
                whitelistRemove: zz
              }, (sz => Ut(sz, [zz], tz)))
            }
          }
        }, Pt = async zz => {
          (0, st.reportAnalyticsClick)({
            id: "world_social.invite",
            value: "friend"
          });
          const tz = () => {
            mz((tz => tz.filter((tz => tz !== zz))))
          };
          mz((tz => [...tz, zz]));
          const Fz = function(zz, tz) {
            return null === zz || void 0 === zz || !zz.canManage || ot(zz.whitelist, tz) ? "none" : "whitelist" === zz.visibility ? "required" : "quiet"
          }(vz, zz);
          if ("none" !== Fz) {
            const sz = Dt([zz], "quiet" === Fz);
            if ("required" === Fz && !await sz) return void tz()
          }
          await (0, pz.j)(zz, "game", {
            announceSent: !1,
            source: "world_social"
          }) ? (! function(zz, tz) {
            var sz;
            const Fz = null !== (sz = Zt.get(zz)) && void 0 !== sz ? sz : new Map;
            Fz.set(tz, Date.now()), Zt.set(zz, Fz)
          }(sz, zz), setTimeout(tz, nz.q)) : tz()
        }, rt = async (zz, tz) => {
          (0, st.reportAnalyticsClick)({
            id: "world_social.add_friend",
            value: tz
          });
          const sz = await (0, fz.d)(zz, "world_social");
          return (0, fz.b)(sz, zz, {
            announceSent: !1
          }), "failed" !== sz.kind && ("sent" === sz.kind && rz((tz => ot(tz, zz) ? tz : [...tz, zz])), Mz && await Dt([zz]), !0)
        };
      return (0, Kz.jsxs)("div", {
        ref: oz,
        className: "WorldSocialPopup AnimFadeInScaleUp",
        tabIndex: -1,
        onKeyDown: zz => {
          zz.target === zz.currentTarget && " " === zz.key && zz.preventDefault()
        },
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "WorldSocialTitle",
        children: [(0, Kz.jsxs)("div", {
          className: "WorldSocialHeader",
          children: [(0, Kz.jsx)("h2", {
            id: "WorldSocialTitle",
            className: "WorldSocialTitle SmallTextBold",
            children: Oz("worldSocial:title")
          }), (0, Kz.jsx)(bz.n, {
            className: "WorldSocialClose",
            onClick: Xz
          })]
        }), Ft && (0, Kz.jsx)("div", {
          className: "WorldSocialLoading",
          children: (0, Kz.jsx)(ez.d, {})
        }), !Ft && (0, Kz.jsxs)(Kz.Fragment, {
          children: [(0, Kz.jsx)(ut, {
            worldCode: Fz,
            message: Qz
          }), null === vz && !Uz && (0, Kz.jsx)("button", {
            type: "button",
            className: "WorldSocialLoadFailed",
            onClick: wz,
            children: Oz("worldSocial:loadFailed")
          }), Az && null !== yz && (0, Kz.jsx)(gt, {
            visibility: yz,
            onPick: zz => {
              Ht(zz)
            }
          }), Dz.requests.length > 0 && (0, Kz.jsxs)("div", {
            className: "WorldSocialSection",
            children: [(0, Kz.jsx)(Sz.e, {
              label: (0, Kz.jsxs)(Kz.Fragment, {
                children: [(0, Kz.jsx)(gz.c, {
                  name: zt.f
                }), " ", Oz("socialBar:requests")]
              }),
              meta: (0, Kz.jsxs)(Kz.Fragment, {
                children: [Dz.requests.length, Dz.requests.length === az.p && (0, Kz.jsx)("span", {
                  className: "SocialSectionTitleLimit",
                  children: Oz("socialBar:limitReached")
                }), !Jz && Dz.requests.length > 1 && (0, Kz.jsx)("button", {
                  type: "button",
                  className: "WorldSocialMoreRequests",
                  onClick: () => {
                    Iz(!0)
                  },
                  children: Oz("worldSocial:moreRequests", {
                    count: Dz.requests.length - 1
                  })
                })]
              })
            }), (0, Kz.jsx)("div", {
              className: "PlayerRows",
              children: wt.map(((zz, tz) => (0, Kz.jsx)(xt, {
                zIndex: wt.length - tz,
                player: zz,
                actions: (0, Kz.jsxs)(Kz.Fragment, {
                  children: [(0, Kz.jsx)(qz.h, {
                    tooltipInner: (0, Kz.jsx)(Kz.Fragment, {
                      children: Oz("general:accept")
                    }),
                    delayShow: 0,
                    hoverOnly: !0,
                    children: (0, Kz.jsx)(bz.h, {
                      className: "FriendRequestButton",
                      ariaLabel: `${Oz("general:accept")} ${zz.name}`,
                      analyticsClick: {
                        id: "social.accept_friend_request",
                        value: "world_social"
                      },
                      onClick: () => {
                        (0, fz.c)(zz.name, !0, {
                          source: "world_social"
                        })
                      },
                      children: (0, Kz.jsx)(gz.c, {
                        name: "check"
                      })
                    })
                  }), (0, Kz.jsx)(qz.h, {
                    tooltipInner: (0, Kz.jsx)(Kz.Fragment, {
                      children: Oz("general:decline")
                    }),
                    delayShow: 0,
                    hoverOnly: !0,
                    children: (0, Kz.jsx)(bz.l, {
                      className: "FriendRequestButton",
                      ariaLabel: `${Oz("general:decline")} ${zz.name}`,
                      analyticsClick: {
                        id: "social.decline_friend_request",
                        value: "world_social"
                      },
                      onClick: () => {
                        (0, fz.c)(zz.name, !1, {
                          source: "world_social"
                        })
                      },
                      children: (0, Kz.jsx)(gz.c, {
                        name: "xmark"
                      })
                    })
                  })]
                })
              }, `incoming:${zz.name}`)))
            })]
          }), (0, Kz.jsxs)("div", {
            className: "WorldSocialSection",
            children: [(0, Kz.jsx)(Sz.e, {
              label: (0, Kz.jsxs)(Kz.Fragment, {
                children: [(0, Kz.jsx)(gz.c, {
                  name: zt.e
                }), " ", Oz("socialBar:friends")]
              }),
              meta: Dz.loaded && !dz ? Dz.friends.length : void 0
            }), (0, Kz.jsx)(et, {
              Hr: zz => rt(zz, "field")
            }), Wt && (0, Kz.jsx)("div", {
              className: "WorldSocialLoading",
              children: (0, Kz.jsx)(ez.d, {})
            }), !Wt && (0, Kz.jsxs)(Kz.Fragment, {
              children: [(0, Kz.jsxs)("div", {
                className: "PlayerRows",
                children: [Kt.map(((zz, tz) => (0, Kz.jsx)(xt, {
                  zIndex: bt - tz,
                  player: Yt(zz, null),
                  status: Oz("worldSocial:requestSent"),
                  wN: Bt(zz)
                }, `request:${zz}`))), !dz && Gz.map(((zz, tz) => (0, Kz.jsx)(mt, {
                  zIndex: Nt - tz,
                  row: zz,
                  wN: Bt(zz.friend.name),
                  canInvite: vt(vz) && "here" !== zz.place,
                  invited: Yz.includes(zz.friend.name),
                  onInvite: () => {
                    Pt(zz.friend.name)
                  }
                }, zz.friend.name))), Dz.loaded && 0 === Dz.friends.length && (0, Kz.jsx)(It, {
                  playersHere: Tz,
                  exclude: Pz,
                  Hr: zz => rt(zz, "suggestion")
                })]
              }), Mz && Dz.loaded && 0 === Dz.friends.length && 0 === Kt.length && (0, Kz.jsx)("div", {
                className: "WorldSocialEmpty",
                children: Oz("worldSocial:whitelistNoFriends")
              })]
            })]
          })]
        })]
      })
    }
    var qt = sz(2311),
      St = sz(2294);

    function Vt(zz) {
      let {
        show: tz,
        onClose: sz,
        option: Fz
      } = zz;
      const Xz = (0, Cz.h)("connectedGame", (zz => (0, qt.b)(zz) ? zz.lobbyName : null));
      return function(zz) {
        const {
          gameEntrySource: tz,
          loadingOverlayVisible: sz
        } = (0, Qz.h)(["gameEntrySource", "loadingOverlayVisible"]), {
          userContext: Fz
        } = (0, xz.b)(), Xz = (0, Cz.l)("localPlayerAlive"), Oz = (0, Cz.h)("players", (zz => null !== zz.localId && void 0 !== zz.byId[zz.localId])), oz = (0, St.n)(), vz = (0, Wz.useRef)(null), Uz = (0, Wz.useRef)(null), Kz = "worldCreation" === tz, uz = Fz.whamm, Nz = Fz.getPersonalWorldLobbyName();
        (0, Wz.useEffect)((() => {
          var tz;
          null !== zz && (null === (tz = Uz.current) || void 0 === tz ? void 0 : tz.lobbyName) !== zz && null !== Et(zz, Kz, uz, Nz) && (Uz.current = Wt(zz))
        }), [Kz, zz, uz, Nz]), (0, Wz.useEffect)((() => {
          if (null !== zz && (!sz && Xz && Oz)) return oz.whenShown((() => {
            var tz;
            const sz = vz.current === zz ? null : Et(zz, Kz, uz, Nz);
            if (null === sz) return;
            const Fz = (null === (tz = Uz.current) || void 0 === tz ? void 0 : tz.lobbyName) === zz ? Uz.current : Wt(zz);
            Uz.current = null, vz.current = zz,
              function(zz, tz, sz, Fz) {
                const {
                  lobbyName: Wz
                } = zz, Xz = () => {
                  ! function(zz, tz) {
                    if (!Ws()) return void tz(!0);
                    const sz = performance.now() + ss;
                    let Fz = 0;
                    const Wz = () => {
                      Fz = Ws() ? 0 : Fz + 1, Fz >= 2 ? tz(!0) : !Fs(zz) || performance.now() > sz ? tz(!1) : setTimeout(Wz, ts)
                    };
                    setTimeout(Wz, ts)
                  }(Wz, (Xz => {
                    Fz();
                    const Oz = "auto_existing" === tz && it(sz);
                    Xz && Fs(Wz) && !pt(Wz) && !Oz && (zs(zz) ? ft(Wz) : (ft(Wz), Lt(sz), function(zz) {
                      const tz = At.b.world_social_popup_v1;
                      return (0, At.i)("world_social_popup_v1"), (0, st.reportAnalyticsClick)({
                        id: "world_social.auto_open",
                        value: `${tz}:${(0,jt.e)()}:${zz}`
                      }), (0, ct.flushClientAnalyticsEvents)(), "auto_open" === tz
                    }(tz) && (! function(zz) {
                      Xt.set(zz.lobbyName, zz)
                    }(zz), wz.o.Yg("toggleMenu", `inviteLink|${tz}`), "inviteLink" !== Qz.b.get("openInGameMenuName") && console.warn("World social popup: the auto-open asked for it, but it didn't open"))))
                  }))
                };
                if ("auto" === tz && !zs(zz)) return void Xz();
                zz.response.then((zz => {
                  if (!("error" in zz)) return zz.settings.canManage ? void Xz() : (ft(Wz), void Fz());
                  Fz()
                }))
              }(Fz, sz, uz, (() => {
                vz.current === zz && (vz.current = null)
              }))
          }))
        }), [oz, Kz, sz, zz, Xz, Oz, uz, Nz])
      }(Xz), (0, Wz.useEffect)((() => {
        tz && null !== Xz && ft(Xz)
      }), [tz, Xz]), null !== Xz ? (0, Kz.jsx)(lt, {
        show: tz,
        onClose: sz,
        opener: dt(Fz) ? Fz : "icon"
      }) : (0, Kz.jsx)(Lz.d, {
        show: tz,
        onClose: sz
      })
    }
    const Rt = new Set;

    function pt(zz) {
      return Rt.has(zz) || !!jz.j.getItem(`worldSocialShown:${zz}`)
    }

    function ft(zz) {
      Rt.add(zz), jz.j.setItem(`worldSocialShown:${zz}`, !0)
    }

    function Et(zz, tz, sz, Fz) {
      return pt(zz) ? null : function(zz) {
        let {
          justMade: tz,
          playerId: sz,
          lobbyName: Fz,
          personalWorld: Wz
        } = zz;
        return tz ? "auto" : !it(sz) && ht(Fz, Wz) ? "auto_existing" : null
      }({
        justMade: tz,
        playerId: sz,
        lobbyName: zz,
        personalWorld: Fz
      })
    }

    function zs(zz) {
      let {
        answer: tz
      } = zz;
      return null !== tz && "settings" in tz && !tz.settings.canManage
    }
    const ts = 500,
      ss = 3e4;

    function Fs(zz) {
      return "inGame" === Qz.b.get("gameState") && Uz.gameBridge.latest("connectedGame").lobbyName === zz
    }

    function Ws() {
      return (0, iz.h)() || Qz.b.get("loadingOverlayVisible") || (0, kz.r)()
    }
    var Xs = sz(36189),
      Os = sz(2881),
      os = sz(1910),
      vs = sz(2873);

    function Us(zz, tz, sz) {
      return vs.d.overridesTexture(zz) ? vs.d.getTexture(zz, tz).url : sz
    }
    var Ks = sz(9654);
    const us = (zz, tz) => {
        (0, Wz.useEffect)((() => {
          setTimeout((() => {
            zz && zz.current && zz.current.focus()
          }), 1)
        }), [tz])
      },
      Ns = (0, Wz.memo)((function(zz) {
        let {
          isInputActive: tz,
          onClose: sz,
          onChange: Fz,
          textAreaRef: Wz,
          fontSize: Xz,
          lineHeight: Oz,
          currText: oz
        } = zz;
        return (0, Kz.jsxs)("div", {
          className: "WriteOnBoardWrapper",
          children: [(0, Kz.jsx)("img", {
            src: Us("board_full", Os.l.BLOCK, Ks),
            alt: "Board",
            className: "WriteOnBoardImg"
          }), (0, Kz.jsx)("textarea", {
            className: "WriteOnBoardTextArea",
            value: oz,
            ref: Wz,
            style: {
              fontSize: `${Xz}rem`,
              lineHeight: `${Oz}rem`
            },
            onKeyDown: zz => {
              var tz;
              "Escape" !== zz.key && (zz.stopPropagation(), "Tab" === zz.key && function(zz) {
                zz.preventDefault();
                const tz = zz.target,
                  {
                    value: sz
                  } = tz;
                let Fz = tz.selectionStart,
                  Wz = tz.selectionEnd,
                  Xz = sz.slice(Fz, Wz);
                if (!Xz.includes("\n") && !zz.shiftKey) return void document.execCommand("insertText", !1, "\t");
                for (; Fz > 0 && "\n" !== sz[Fz - 1];) Fz--;
                const Oz = "\n" === sz[Wz - 1];
                Oz && Wz--;
                Xz = sz.slice(Fz, Wz);
                const oz = Xz.split("\n").map((tz => zz.shiftKey ? tz.replace(/^\t/, "") : "\t" + tz)).join("\n");
                if (zz.shiftKey && sz.slice(Fz, Wz) === oz) return;
                let {
                  selectionStart: vz
                } = tz;
                tz.setSelectionRange(Fz, Wz), vz > Fz && (!zz.shiftKey || "\t" === Xz[0]) && (vz += zz.shiftKey ? -1 : 1);
                Wz = Fz + oz.length + (Oz ? 1 : 0), document.execCommand("insertText", !1, oz), tz.setSelectionRange(vz, Wz)
              }(zz), /^F\d+$/i.test(zz.code) && null !== (tz = os.x.OpenCodeEditor) && void 0 !== tz && tz.includes(zz.code) && sz())
            },
            spellCheck: "false",
            autoComplete: "off",
            onChange: Fz
          })]
        })
      }));

    function bs(zz) {
      return 1.3 * zz
    }
    var ws = sz(1628);
    const Ds = (0, Wz.memo)((function(zz) {
        let {
          show: tz,
          onOpen: sz,
          onClose: Fz
        } = zz;
        const [Xz, oz] = (0, Wz.useState)(null), [vz, uz] = (0, Wz.useState)(""), [Nz, wz] = (0, Wz.useState)(0), [Dz, gz] = (0, Wz.useState)(null), [Hz, Bz] = (0, Wz.useState)({
          text: "",
          textSize: 0
        }), Pz = (zz, tz) => Dz ? (0, Xs.o)(zz, tz, Dz.width, Dz.height) : (0, Xs.g)(zz, tz), rz = zz => {
          uz(Pz(vz, zz)), wz(zz), jz.f.setItem("lastBoardTextSize", zz)
        }, Yz = () => {
          Fz(), Dz && vz === Hz.text && Nz === Hz.textSize || Uz.gameBridge.send("writeOnBoard", {
            pos: Xz,
            text: vz,
            textSize: Nz
          })
        };
        (0, Cz.d)("boardEditRequested", (zz => {
          var Wz, Xz;
          if (!cz.featureFlags.canSeePlayerWrittenText) return;
          if (null === zz) return oz(null), void(tz && Fz());
          const {
            pos: Oz,
            noticeboardSpan: vz,
            text: Uz
          } = zz;
          oz(Oz), gz(vz), uz(Uz);
          const Kz = null !== (Wz = null !== (Xz = zz.textSize) && void 0 !== Xz ? Xz : jz.f.getItem("lastBoardTextSize")) && void 0 !== Wz ? Wz : 0;
          wz(Kz), Bz({
            text: Uz,
            textSize: Kz
          }), jz.f.setItem("lastBoardTextSize", Kz), sz()
        }));
        const xz = (0, Wz.useRef)(null);
        us(xz, tz), (0, ws.p)(xz, {
          kind: "sign",
          submit: Yz
        });
        const mz = function(zz, tz) {
            const sz = Xs.c[zz];
            if (!tz) return sz.uiFontSize;
            const {
              numLines: Fz,
              charsPerLine: Wz
            } = (0, Xs.u)(tz.width, tz.height, zz);
            return sz.uiFontSize * Math.min(sz.charsPerLine / Wz, sz.numLines / Fz)
          }(Nz, Dz),
          Jz = bs(mz);
        return (0, Kz.jsxs)(Oz.b, {
          className: "WriteOnBoardBg",
          close: Yz,
          escDoesExit: !0,
          show: tz,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, Kz.jsx)(Ns, {
            isInputActive: () => tz,
            onClose: Yz,
            onChange: zz => {
              uz(Pz(zz.target.value, Nz))
            },
            textAreaRef: xz,
            fontSize: mz,
            lineHeight: Jz,
            currText: vz
          }), (0, Kz.jsx)("div", {
            className: "WriteOnBoardTextSizeHeader SmallTextBold",
            children: "Text Size"
          }), (0, Kz.jsxs)("div", {
            className: "WriteOnBoardTextSizeButtons",
            children: [(0, Kz.jsx)(bz.h, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                rz(0)
              },
              disabled: 0 === Nz,
              children: "Small"
            }), (0, Kz.jsx)(bz.h, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                rz(1)
              },
              disabled: 1 === Nz,
              children: "Medium"
            }), (0, Kz.jsx)(bz.h, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                rz(2)
              },
              disabled: 2 === Nz,
              children: "Large"
            })]
          })]
        })
      })),
      gs = (0, Wz.memo)((function(zz) {
        let {
          show: tz,
          onOpen: sz,
          onClose: Fz
        } = zz;
        const [Xz, oz] = (0, Wz.useState)(""), vz = () => {
          Fz(), Uz.gameBridge.send("writeNameTag", Xz)
        };
        (0, Jz.g)("EditNameTag", (zz => {
          cz.featureFlags.canSeePlayerWrittenText && null !== zz && (oz(zz), sz())
        }));
        const uz = (0, Wz.useRef)(null);
        us(uz, tz), (0, ws.p)(uz, {
          kind: "nameTag",
          submit: vz
        });
        const Nz = Xs.D.nameTag.uiFontSize,
          wz = bs(Nz);
        return (0, Kz.jsxs)(Oz.b, {
          className: "WriteOnBoardBg",
          close: vz,
          escDoesExit: !0,
          show: tz,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, Kz.jsx)("div", {
            className: "NameTagTrim",
            children: (0, Kz.jsx)(Ns, {
              isInputActive: () => tz,
              onClose: vz,
              onChange: zz => {
                const tz = zz.target.value.replaceAll("\n", "");
                oz((0, Xs.p)(tz, "nameTag"))
              },
              textAreaRef: uz,
              fontSize: Nz,
              lineHeight: wz,
              currText: Xz
            })
          }), (0, Kz.jsx)(bz.h, {
            onClick: vz,
            className: "WriteOnNameTagCloseButton",
            children: "Finish"
          })]
        })
      }));
    var Hs = sz(17947);
    const Bs = (0, Wz.memo)((function(zz) {
      let {
        show: tz,
        onOpen: sz,
        onClose: Fz
      } = zz;
      const [Xz, oz] = (0, Wz.useState)(""), [vz, uz] = (0, Wz.useState)(0), [Nz, wz] = (0, Wz.useState)(!1), [Dz, gz] = (0, Wz.useState)(["", "", "", "", "", "", "", "", "", ""]), [Hz, Bz] = (0, Wz.useState)("Title"), [Pz, rz] = (0, Wz.useState)(!0), [Yz, xz] = (0, Wz.useState)(!1);
      (0, Jz.g)("EditBook", (zz => {
        let {
          pages: tz,
          title: Fz,
          isPublished: Wz
        } = zz;
        var Xz;
        cz.featureFlags.canSeePlayerWrittenText && (null !== tz ? (gz(tz), oz(null !== (Xz = tz[0]) && void 0 !== Xz ? Xz : ""), Bz(Fz), uz(0), wz(!1), rz(!Wz), xz(!1), sz()) : gz(["", "", "", "", "", "", "", "", "", ""]))
      }));
      const mz = (0, Wz.useRef)(null),
        Iz = (0, Wz.useRef)(null);
      us(mz, tz), (0, ws.p)(mz, {
        kind: "book"
      }), (0, ws.p)(Iz, {
        kind: "qo"
      });
      const Cz = Xs.D.book.uiFontSize,
        ez = bs(Cz),
        Zz = () => {
          (Pz || Yz) && Uz.gameBridge.send("writeBook", {
            pages: [...Dz],
            title: Hz,
            published: !Pz && Yz
          })
        },
        Gz = zz => {
          Nz && (Dz[vz] = Xz, wz(!1)), oz(Dz[zz]), uz(zz)
        };
      return (0, Kz.jsxs)(Oz.b, {
        className: "WriteOnBoardBg",
        close: () => {
          Fz(), Dz[vz] = Xz, Zz()
        },
        escDoesExit: !0,
        show: tz,
        togglePointerLock: !1,
        globallyUniqueKey: "WriteOnBookComp",
        children: [(0, Kz.jsxs)("div", {
          className: "WriteOnBookWrapper",
          children: [(0, Kz.jsx)("textarea", {
            className: "BookTitleTextArea SmallTextLight",
            value: Hz,
            ref: Iz,
            style: {
              fontSize: "2.5rem",
              lineHeight: `${ez}rem`
            },
            onKeyDown: zz => {
              Pz && zz.stopPropagation()
            },
            spellCheck: "false",
            autoComplete: "off",
            onChange: zz => {
              let tz = zz.target.value;
              tz = (0, Xs.p)(tz, "qo"), Bz(tz)
            },
            readOnly: !Pz
          }), (0, Kz.jsx)("img", {
            src: Us("book_page", Os.l.ITEM, Hs),
            alt: "book_page",
            className: "WriteOnBookPageImg"
          }), (0, Kz.jsx)("div", {
            className: "BookTextAreaPadding",
            children: (0, Kz.jsx)("textarea", {
              className: "WriteOnBookPageTextArea",
              value: Xz,
              ref: mz,
              style: {
                fontSize: `${Cz}rem`,
                lineHeight: `${ez}rem`
              },
              onKeyDown: zz => {
                Pz && zz.stopPropagation()
              },
              spellCheck: "false",
              autoComplete: "off",
              onChange: zz => {
                const tz = zz.target.value;
                oz((0, Xs.p)(tz, "book")), wz(!0)
              },
              readOnly: !Pz
            })
          })]
        }), (0, Kz.jsxs)("div", {
          className: "BookNavigationWrapper",
          children: [(0, Kz.jsx)(bz.h, {
            disabled: 0 === vz,
            onClick: () => {
              Gz(vz - 1)
            },
            className: "BookNavButton",
            children: "<"
          }), (0, Kz.jsx)("div", {
            style: {
              width: "2rem"
            }
          }), (0, Kz.jsx)(bz.h, {
            disabled: 9 === vz,
            onClick: () => {
              Gz(vz + 1)
            },
            className: "BookNavButton",
            children: ">"
          }), (0, Kz.jsx)("div", {
            style: {
              width: "2rem"
            }
          }), (0, Kz.jsx)(bz.h, {
            onClick: () => {
              rz(!Pz), xz(!0)
            },
            className: "BookNavButton",
            children: Pz ? "Publish" : "Edit"
          })]
        })]
      })
    }));
    var Ps = sz(36090),
      rs = sz(8207),
      Ys = sz(1358),
      xs = sz(1845);

    function ms(zz) {
      let {
        show: tz,
        buttons: sz
      } = zz;
      const {
        t: Fz
      } = (0, Vz.B)(), Xz = (0, Wz.useRef)(null);
      return (0, Wz.useEffect)((() => {
        var zz, sz;
        const Fz = tz ? (0, Ps.z)() : null;
        if (!Fz || !(0, Ys.c)()) return;
        const Wz = (0, Ps.k)().findIndex((zz => zz.id === Fz));
        (0, rs.o)(null !== (zz = null === (sz = Xz.current) || void 0 === sz ? void 0 : sz.children[Wz]) && void 0 !== zz ? zz : null)
      }), [tz]), 0 === sz.length ? null : (0, Kz.jsx)("div", {
        ref: Xz,
        className: "ClientGameInventoryButtons",
        onPointerDown: zz => {
          zz.stopPropagation()
        },
        onPointerUp: zz => {
          zz.stopPropagation()
        },
        children: sz.map((zz => {
          const tz = Fz(zz.labelKey);
          return (0, Kz.jsxs)(bz.p, {
            className: zz.className,
            disabled: zz.disabled,
            onClick: () => {
              (0, Ps.r)(zz)
            },
            ariaLabel: zz.iconOnly ? tz : void 0,
            title: zz.iconOnly ? tz : void 0,
            children: [zz.icon && (0, Kz.jsxs)("div", {
              className: "ClientGameInventoryButtonIcon",
              children: ["item" === zz.icon.kind && (0, Kz.jsx)(xs.c, {
                itemName: zz.icon.name,
                amount: 0
              }), "image" === zz.icon.kind && (0, Kz.jsx)("img", {
                src: zz.icon.src,
                alt: "",
                draggable: !1
              }), "icon" === zz.icon.kind && (0, Kz.jsx)(gz.c, {
                name: zz.icon.name
              })]
            }), !zz.iconOnly && tz]
          }, zz.id)
        }))
      })
    }
    var Is = sz(36197),
      Cs = sz(2530),
      es = sz(8863),
      Zs = sz(36025),
      Gs = sz(36018);
    let Ts = null;
    window.setShowInventoryAdsOverride = zz => {
      Ts = zz
    };
    const cs = 24e4;
    var As = sz(1848);

    function ys(zz) {
      var tz;
      let {
        draggedInfo: {
          name: sz,
          attributes: Fz,
          amount: Wz
        },
        toAddRef: Xz
      } = zz;
      return (0, Kz.jsx)("div", {
        className: "DraggedInvenItem",
        ref: Xz,
        children: (0, Kz.jsx)(xs.c, {
          itemName: sz,
          amount: Wz,
          enchantmentTier: null === Fz || void 0 === Fz || null === (tz = Fz.customAttributes) || void 0 === tz ? void 0 : tz.enchantmentTier,
          bar: (0, As.h)(Fz)
        })
      })
    }

    function Ms(zz) {
      let {
        className: tz = "",
        displayInfo: sz,
        domRef: Fz
      } = zz;
      return (0, Kz.jsxs)("div", {
        className: `InvenHoveredItemInfo SmallTextBold ${tz}`,
        ref: Fz,
        children: [(0, Kz.jsx)(mz.c, {
          text: (0, Iz.sb)(sz.name, {
            fontStyle: sz.fontStyle
          })
        }), (0, Kz.jsx)("div", {
          className: "InvenHoveredItemInfoDescription",
          children: (0, Kz.jsx)(mz.c, {
            text: sz.desc
          })
        })]
      })
    }

    function ds(zz) {
      let {
        info: tz,
        draggedInfo: sz
      } = zz;
      const Fz = (0, Wz.useRef)(null);
      return (0, Wz.useLayoutEffect)((() => {
        const zz = Fz.current,
          {
            left: sz,
            top: Wz
          } = function(zz, tz, sz, Fz) {
            const Wz = Fz.left * sz.width / 100 + 4,
              Xz = sz.width - Fz.right * sz.width / 100 - 4 - tz.width,
              Oz = Fz.top * sz.height / 100 + 4,
              oz = sz.height - 4 - tz.height;
            return {
              left: Math.max(Wz, Math.min(zz.x - tz.width / 2, Xz)),
              top: Math.max(Oz, Math.min(zz.y - 48 - tz.height, oz))
            }
          }({
            x: tz.initTouchX,
            y: tz.initTouchY
          }, {
            width: zz.offsetWidth,
            height: zz.offsetHeight
          }, {
            width: window.innerWidth,
            height: window.innerHeight
          }, Qz.b.get("notchSize"));
        zz.style.left = `${sz}px`, zz.style.top = `${Wz}px`
      }), [tz]), (0, Kz.jsxs)("div", {
        className: "LongHoldSplitInfoUI SmallTextBold",
        ref: Fz,
        children: [(0, Kz.jsx)("div", {
          className: "LongHoldSplitInfoUIInner",
          style: {
            width: sz.amount / tz.maxAmount * 100 + "%"
          }
        }), (0, Kz.jsxs)("div", {
          className: "LongHoldSplitInfoUIText",
          children: [sz.amount, "/", tz.maxAmount]
        })]
      })
    }
    var hs = sz(201);
    const Qs = (0, Wz.memo)((function(zz) {
      let {
        show: tz,
        onOpen: sz,
        onClose: Fz
      } = zz;
      const Xz = (0, Wz.useRef)({
          pos: null
        }),
        [oz, vz] = (0, Wz.useState)([0, 0, 0, 0]),
        {
          userContext: uz
        } = (0, xz.b)();
      (0, Cz.d)("ironChestOpenRequested", (zz => {
        let {
          pos: tz,
          ownerDbId: Fz,
          cachedPasskey: Wz
        } = zz;
        if (Xz.current.pos = tz, Fz !== uz.whamm) return null !== Wz ? (vz(Wz), void Nz(Wz)) : void sz();
        Nz(oz)
      })), (0, Cz.d)("localEffectUpdated", (zz => {
        "Thief" === zz && Fz()
      }));
      const Nz = zz => {
        const {
          pos: tz
        } = Xz.current;
        Uz.gameBridge.send("openIronChest", {
          pos: tz,
          SU: zz
        })
      };
      return (0, Kz.jsx)(Oz.b, {
        className: "IronChestPasskeyInputScreenOuter",
        close: Fz,
        escDoesExit: !0,
        show: tz,
        togglePointerLock: !1,
        globallyUniqueKey: "IronChestPasskeyInputScreen",
        children: (0, Kz.jsx)("div", {
          className: "IronChestPasskeyInputScreen",
          children: (0, Kz.jsx)(ks, {
            SU: oz,
            onPasskeyUpdated: vz,
            confirmText: "ironChest:tryUnlock",
            onConfirm: () => {
              Nz(oz)
            }
          })
        })
      })
    }));

    function ks(zz) {
      let {
        className: tz = "",
        SU: sz,
        onPasskeyUpdated: Fz,
        confirmText: Wz,
        onConfirm: Xz
      } = zz;
      const {
        t: Oz
      } = (0, Vz.B)();
      return (0, Kz.jsxs)("div", {
        className: `${tz} IronChestPasskeyInput`,
        children: [(0, Kz.jsx)("div", {
          className: "SmallTextBold IronChestPasskeyInputTitle",
          children: Oz("ironChest:passkeyInputTitle")
        }), (0, Kz.jsx)("div", {
          className: "IronChestPasskeyInputRow",
          children: new Array(hs.d.ironChestPasskeyLength).fill(0).map(((zz, tz) => (0, Kz.jsx)(is, {
            digit: sz[tz],
            onPasskeyDigitUpdated: zz => {
              const Wz = [...sz];
              Wz[tz] = zz, Fz(Wz)
            }
          }, tz)))
        }), (0, Kz.jsx)(bz.p, {
          className: "IronChestPasskeyInputConfirmButton",
          onClick: Xz,
          children: Oz(Wz)
        })]
      })
    }

    function is(zz) {
      let {
        digit: tz,
        onPasskeyDigitUpdated: sz
      } = zz;
      return (0, Kz.jsx)("div", {
        className: "IronChestPasskeyDigitInputWrapper",
        children: (0, Kz.jsxs)("div", {
          className: "IronChestPasskeyDigitInput",
          children: [(0, Kz.jsx)(bz.p, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              sz(Iz.c.mod(tz + 1, 10))
            },
            children: (0, Kz.jsx)(gz.c, {
              name: "angle-up"
            })
          }), (0, Kz.jsx)("div", {
            className: "SmallTextBold IronChestPasskeyDigit",
            children: tz
          }), (0, Kz.jsx)(bz.p, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              sz(Iz.c.mod(tz - 1, 10))
            },
            children: (0, Kz.jsx)(gz.c, {
              name: "angle-down"
            })
          })]
        })
      })
    }
    var Ls = sz(8856),
      ls = sz(36222),
      ns = sz(36010);

    function as(zz) {
      let {
        specialItemInfo: tz,
        setHovered: sz,
        pointerDown: Fz,
        pointerUp: Xz,
        enchantingTablePosition: Oz,
        enchantingTableBlockName: oz
      } = zz;
      const {
        t: uz
      } = (0, Vz.B)(), [Nz, wz] = (0, Wz.useState)(null), [Dz, gz] = (0, Wz.useState)(null), Hz = (0, vz.e)("auraPerLevel"), Bz = Math.floor((0, Cz.l)("aura") / Hz);
      (0, Wz.useEffect)((() => {
        if (!tz) return void wz(null);
        let zz = !0;
        return Uz.gameBridge.query("enchantingOffer", {
          slot: tz.idx,
          name: tz.name,
          blockName: oz
        }).then((sz => {
          var Fz, Wz;
          let {
            perks: Xz,
            options: Oz
          } = sz;
          if (!zz) return;
          const oz = {
            isEnchantable: Xz.length > 0,
            possibleEnchantments: Xz,
            options: Oz.map((zz => {
              let {
                level: tz,
                odds: sz
              } = zz;
              return {
                level: tz,
                possibilities: Object.fromEntries(sz.map(((zz, tz) => [`Tier ${tz+1}`, zz])))
              }
            })),
            isAlreadyEnchanted: Xz.length > 0 && void 0 !== (null === (Fz = tz.attributes) || void 0 === Fz || null === (Wz = Fz.customAttributes) || void 0 === Wz ? void 0 : Wz.enchantmentTier)
          };
          wz(oz), (zz => {
            const tz = zz.options.map((zz => Object.entries(zz.possibilities).map((zz => {
              let [tz, sz] = zz;
              return {
                str: `${tz}: ${sz>0?sz<.01?sz.toPrecision(1):sz.toFixed(2):0}%\n`,
                style: {
                  color: Iz.lb[tz]
                }
              }
            }))));
            gz(tz)
          })(oz)
        })), () => {
          zz = !1
        }
      }), [tz, Oz, oz]);
      const Pz = [];
      for (let Wz = 0; Wz < ls.b; Wz++) {
        const zz = null === Nz || void 0 === Nz ? void 0 : Nz.options[Wz],
          Fz = !zz || zz.level > Bz;
        Pz.push((0, Kz.jsx)(bz.h, {
          className: "EnchantmentButton",
          onPointerEnter: zz ? zz => null === sz || void 0 === sz ? void 0 : sz()(!0, {
            name: "",
            desc: Dz[Wz]
          }, zz) : void 0,
          onPointerLeave: zz ? () => null === sz || void 0 === sz ? void 0 : sz()(!1) : void 0,
          onClick: Fz ? void 0 : () => {
            Uz.gameBridge.send("enchantItem", {
              slot: tz.idx,
              level: zz.level,
              tablePos: Oz
            }), wz(null)
          },
          disabled: Fz,
          children: zz ? (0, Kz.jsxs)(Kz.Fragment, {
            children: [(0, Kz.jsxs)("h1", {
              className: "EnchantmentLevels",
              children: [(0, Kz.jsxs)("span", {
                className: "EnchantmentLevelsCost",
                children: [uz("enchantments:cost"), ": "]
              }), " ", uz("enchantments:levels", {
                level: zz.level
              })]
            }), (0, Kz.jsxs)("div", {
              className: "EnchantmentPossibilities",
              children: [(0, Kz.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, Kz.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: uz("enchantments:tier")
                }), Object.entries(zz.possibilities).map((zz => {
                  let [tz, sz] = zz;
                  return 0 === sz ? null : (0, Kz.jsx)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: Iz.lb[tz]
                    },
                    children: tz
                  }, tz)
                }))]
              }), (0, Kz.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, Kz.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: uz("enchantments:odds")
                }), Object.entries(zz.possibilities).map((zz => {
                  let [tz, sz] = zz;
                  return 0 === sz ? null : (0, Kz.jsxs)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: Iz.lb[tz]
                    },
                    children: [sz > 0 && sz < .1 ? "<0.1" : sz.toFixed(0 < sz && sz < .95 ? 1 : 0), "%"]
                  }, tz)
                }))]
              })]
            })]
          }) : !1 === (null === Nz || void 0 === Nz ? void 0 : Nz.isEnchantable) ? (0, Kz.jsx)("h1", {
            className: "EnchantmentLevels",
            children: uz("enchantments:notEnchantable")
          }) : (0, Kz.jsx)("h1", {
            className: "EnchantmentLevels",
            children: uz("enchantments:enterItem")
          })
        }, Wz))
      }
      return (0, Kz.jsxs)("div", {
        className: "EnchantingTable",
        children: [(0, Kz.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: oz
        }), (0, Kz.jsxs)("div", {
          className: "EnchantingTableBody",
          children: [(0, Kz.jsxs)("div", {
            className: "EnchantingTableLeft",
            children: [(0, Kz.jsx)(ns.d, {
              idx: Gs.f,
              setHovered: zz => {
                null === sz || void 0 === sz || sz(Gs.f)(zz)
              },
              pointerDown: Fz,
              pointerUp: Xz,
              draggedInfo: null,
              specialItemInfo: tz,
              variation: "Enchanting Table"
            }), Nz && Nz.possibleEnchantments.length > 0 && (0, Kz.jsxs)("div", {
              className: "PossibleEnchantments",
              children: [(0, Kz.jsx)("h2", {
                children: "Possible Perks:"
              }), Nz.possibleEnchantments.map((zz => (0, Kz.jsxs)(Wz.Fragment, {
                children: [(0, Kz.jsxs)("div", {
                  className: "PossibleEnchantmentName",
                  children: [(0, Kz.jsx)("div", {
                    className: "PossibleEnchantmentIcon",
                    children: (0, Kz.jsx)(xs.c, {
                      itemName: `${zz} Enchantment`,
                      amount: 1
                    })
                  }), (0, Kz.jsx)("div", {
                    className: "PossibleEnchantmentNameText",
                    children: zz
                  })]
                }), (0, Kz.jsx)("div", {
                  className: "PossibleEnchantmentDescription",
                  children: uz((0, Ls.o)(zz).translationKey)
                })]
              }, zz)))]
            })]
          }), (0, Kz.jsxs)("div", {
            className: "EnchantmentOptions",
            children: [Nz && Nz.isAlreadyEnchanted && (0, Kz.jsx)("div", {
              className: "AlreadyEnchantedWarning",
              children: uz("enchantments:alreadyEnchanted")
            }), Pz]
          })]
        })]
      })
    }
    var qs = sz(36231);

    function Ss(zz) {
      var tz;
      let {
        specialItemInfo: sz,
        setSpecialItemInfo: Fz,
        setHovered: Xz,
        pointerDown: Oz,
        pointerUp: oz
      } = zz;
      const {
        t: vz
      } = (0, Vz.B)(), uz = (0, Cz.h)("inventory", (zz => zz.freeSlots)), [Nz, wz] = (0, Wz.useState)(null);
      (0, Wz.useEffect)((() => {
        if (sz) {
          const zz = (0, qs.e)(sz.name, sz.amount);
          wz({
            salvageable: !!zz,
            produces: zz
          })
        } else wz(null)
      }), [sz, null === sz || void 0 === sz ? void 0 : sz.name, null === sz || void 0 === sz ? void 0 : sz.amount]);
      const Dz = !!sz && !(null === Nz || void 0 === Nz || !Nz.salvageable) && !(null !== (tz = Nz.produces) && void 0 !== tz && tz.some((zz => {
        let {
          amt: tz
        } = zz;
        return tz < 1
      })));
      return (0, Kz.jsxs)("div", {
        className: "SalvagingTable",
        children: [(0, Kz.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: vz("item:salvagingTable")
        }), (0, Kz.jsxs)("div", {
          className: "SalvagingTableBody",
          children: [(0, Kz.jsx)("div", {
            className: "SalvagingTableLeft",
            children: (0, Kz.jsx)(ns.d, {
              idx: Gs.f,
              setHovered: zz => {
                null === Xz || void 0 === Xz || Xz(Gs.f)(zz)
              },
              pointerDown: Oz,
              pointerUp: oz,
              draggedInfo: null,
              specialItemInfo: sz,
              variation: "Salvaging Table"
            })
          }), (0, Kz.jsx)("div", {
            className: "SalvagingTableRight",
            children: (0, Kz.jsx)(bz.h, {
              className: "SalvageButton",
              onClick: Dz ? () => {
                const {
                  idx: zz,
                  name: tz,
                  amount: Wz
                } = sz;
                Uz.gameBridge.send("salvageItem", {
                  slot: zz,
                  name: tz,
                  amount: Wz
                }) && (wz(null), Fz(null))
              } : void 0,
              disabled: !Dz,
              children: Nz ? Nz.salvageable ? Nz.produces.some((zz => {
                let {
                  amt: tz
                } = zz;
                return tz < 1
              })) ? (0, Kz.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, Kz.jsx)("div", {
                  className: "SalvageText Error",
                  children: vz("salvagingTable:notEnoughResources")
                })
              }) : uz < Nz.produces.length ? (0, Kz.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, Kz.jsx)("div", {
                  className: "SalvageText Error",
                  children: vz("salvagingTable:notEnoughInventorySpace")
                })
              }) : (0, Kz.jsxs)("div", {
                className: "SalvageButtonText",
                children: [(0, Kz.jsx)("div", {
                  className: "SalvageText",
                  children: vz("salvagingTable:salvage")
                }), (0, Kz.jsx)("div", {
                  className: "SalvageIcons",
                  children: Nz.produces.map(((zz, tz) => {
                    let {
                      item: sz,
                      amt: Fz
                    } = zz;
                    return (0, Kz.jsx)("div", {
                      className: "SalvageIcon",
                      children: (0, Kz.jsx)(xs.c, {
                        itemName: sz,
                        amount: Math.floor(Fz)
                      })
                    }, tz)
                  }))
                })]
              }) : (0, Kz.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, Kz.jsx)("div", {
                  className: "SalvageText Error",
                  children: vz("salvagingTable:unsalvageable")
                })
              }) : (0, Kz.jsx)(Kz.Fragment, {})
            })
          })]
        })]
      })
    }
    var Vs = sz(214),
      Rs = sz(8940),
      ps = sz(2495),
      fs = sz(8216),
      Es = sz(8214),
      zF = sz(1608),
      tF = sz(1922),
      sF = sz(1375),
      FF = sz(2005);

    function WF(zz, tz, sz) {
      const Fz = zz.trim().toLowerCase();
      if ("" === Fz) return 0;
      let Wz = null;
      for (const Xz of tz) {
        const zz = Xz.toLowerCase().indexOf(Fz);
        if (0 === zz) return 0;
        zz > 0 && (Wz = 1)
      }
      if (null !== Wz) return Wz;
      for (const Xz of sz)
        if (Xz.toLowerCase().includes(Fz)) return 2;
      return null
    }

    function XF(zz) {
      return zz.map((zz => {
        var tz;
        return zz ? {
          name: zz.name,
          amount: null !== (tz = zz.amount) && void 0 !== tz ? tz : 1
        } : null
      }))
    }

    function OF(zz) {
      return zz < 1e3 ? `${zz}` : zz < 1e4 ? Math.floor(zz / 100) / 10 + "k" : `${Math.floor(zz/1e3)}k`
    }
    var oF = sz(36238);
    const vF = bz.h,
      UF = {
        initialDelayMs: 400,
        intervalMs: 100
      },
      KF = () => {
        const zz = (0, sF.c)();
        return zz ? zz.getPadRepeatTiming(UF) : UF
      };

    function uF(zz, tz, sz) {
      var Fz, Wz;
      const Xz = (0, es.k)(tz, zz);
      let Oz = null === (Fz = tz[zz]) || void 0 === Fz ? void 0 : Fz.description;
      if (sz && (null === (Wz = (0, oF.f)().get(zz)) || void 0 === Wz || !Wz.hideIngredients)) {
        Oz ? (Oz = (0, Iz.sb)(Oz), Oz.push({
          str: "\n"
        })) : Oz = [], Oz.push({
          str: "\n"
        }), Oz.push({
          str: "Can be crafted from:\n"
        });
        for (const zz of sz) "string" === typeof zz && (Oz.push({
          icon: zz,
          style: {
            fontSize: "1.5em"
          }
        }), Oz.push({
          str: " "
        }), Oz.push(...(0, Iz.sb)((0, es.k)(tz, zz))), Oz.push({
          str: "\n"
        }))
      }
      return {
        name: Xz,
        desc: Oz
      }
    }

    function NF(zz) {
      let {
        name: tz,
        dK: sz
      } = zz;
      return `${tz}_${sz}`
    }

    function bF(zz) {
      var tz;
      let {
        onClick: sz,
        itemName: Fz,
        recipeId: Xz,
        isSelected: Oz,
        haveIngredients: oz,
        craftable: vz,
        setHovered: Uz,
        padActions: uz,
        marked: Nz,
        lock: bz,
        itemInfo: wz
      } = zz;
      const Dz = (0, Wz.useRef)(null);
      return (0, fs.c)(Dz, {
        press: zz => !oz || "secondary" === zz && !vz ? (uz.refuse(), !1) : "primary" === zz ? (uz.choose(), !0) : uz.craft(),
        release: uz.stopCraft,
        hints: {
          primary: "inventoryChooseRecipe",
          secondary: "inventoryCraft"
        }
      }), (0, Kz.jsxs)("div", {
        ref: Dz,
        className: bt()("InvenItem", {
          CraftableItemNotEnoughIngredients: !oz && !bz,
          CraftableItemMarked: Nz,
          CraftableItemLocked: void 0 !== bz,
          CraftableItemLockedFar: (null !== (tz = null === bz || void 0 === bz ? void 0 : bz.stepsAway) && void 0 !== tz ? tz : 1) > 1
        }),
        "data-recipe-key": Xz,
        "data-pad-inventory-default": Oz ? "" : void 0,
        onClick: sz,
        style: {
          cursor: Oz ? null : "pointer"
        },
        onPointerEnter: zz => {
          null === Uz || void 0 === Uz || Uz(!0, uF(Fz, wz)), !Oz && (0, zF.r)(zz.nativeEvent) && (0, Es.h)() && sz()
        },
        onPointerLeave: () => {
          null === Uz || void 0 === Uz || Uz(!1)
        },
        children: [(0, Kz.jsx)(xs.c, {
          itemName: Fz,
          amount: 1
        }), Nz && (0, Kz.jsx)("span", {
          className: "CraftableItemMarkBadge",
          "aria-hidden": "true",
          children: "!"
        }), bz && (0, Kz.jsxs)("span", {
          className: "CraftableItemLockTag",
          children: [(0, Kz.jsx)(gz.c, {
            name: "lock"
          }), (0, Kz.jsx)(mz.c, {
            text: bz.tag
          })]
        })]
      })
    }

    function wF(zz) {
      let {
        idx: tz,
        status: sz,
        shownItem: Fz,
        dim: Xz,
        onHoverStart: Oz,
        onHoverEnd: oz,
        onPadBack: vz
      } = zz;
      const Uz = (0, Wz.useRef)(null);
      (0, fs.c)(Uz, {
        press: () => !1,
        back: vz,
        hints: {
          back: "inventoryBackToRecipes"
        }
      });
      const uz = sz.need > 0 ? Math.min(sz.have / sz.need, 1) : 1;
      return (0, Kz.jsxs)("div", {
        ref: Uz,
        className: bt()("CupTile", {
          Short: sz.missing > 0
        }),
        style: {
          width: Xz,
          height: Xz
        },
        "data-craft-ingredient": tz,
        onPointerEnter: Oz,
        onPointerLeave: oz,
        children: [(0, Kz.jsx)("div", {
          className: "CupFill",
          style: {
            transform: `scaleY(${uz})`
          }
        }), (0, Kz.jsx)(xs.c, {
          itemName: Fz,
          amount: 0
        }), (0, Kz.jsxs)("div", {
          className: "CupCount SmallTextBold",
          children: [OF(sz.have), "/", OF(sz.need)]
        })]
      })
    }

    function DF(zz) {
      var tz, sz, Fz, Xz, Oz;
      let {
        show: oz,
        recipeItem: {
          name: vz,
          dK: uz,
          requires: Nz,
          produces: bz,
          haveIngredients: wz
        },
        detail: Dz,
        onCraft: gz,
        setHovered: Hz,
        craftButtonRef: Bz,
        onPadBack: Pz,
        showPadShortcut: rz,
        refusedCount: Yz,
        lock: xz,
        itemInfo: Jz
      } = zz;
      const {
        t: Iz
      } = (0, Vz.B)(), Cz = null !== Dz && !Dz.roomForOne, ez = null !== (tz = null === Dz || void 0 === Dz ? void 0 : Dz.craftAllTimes) && void 0 !== tz ? tz : 0, Zz = function(zz, tz) {
        return zz.map((zz => {
          let {
            items: sz,
            amt: Fz
          } = zz, Wz = 0;
          const Xz = [];
          for (const Oz of sz) {
            const zz = tz(Oz);
            Wz += zz, zz > 0 && Xz.push(Oz)
          }
          return 0 === Xz.length && Xz.push(sz[0]), {
            shownItems: Xz,
            need: Fz,
            have: Wz,
            missing: Math.max(Fz - Wz, 0)
          }
        }))
      }(Nz, (zz => {
        var tz;
        return null !== (tz = null === Dz || void 0 === Dz ? void 0 : Dz.amounts[zz]) && void 0 !== tz ? tz : 0
      }));
      let Gz = "4rem",
        Tz = 4;
      3 === Nz.length || 4 === Nz.length ? Gz = "3.75rem" : Nz.length >= 5 && (Gz = "3rem"), 4 === Nz.length ? Tz = 2 : Nz.length <= 6 && (Tz = 3);
      const cz = `calc(${Tz} * ${Gz} + ${Tz-1} * 0.4rem + 1px)`,
        jz = (0, Wz.useRef)(null),
        Az = (0, Wz.useRef)(null);
      (0, Wz.useLayoutEffect)((() => {
        jz.current.scrollTop = 0
      }), [vz, uz]);
      const yz = (0, Wz.useRef)(Yz);
      (0, Wz.useEffect)((() => {
        if (Yz === yz.current) return;
        yz.current = Yz;
        const zz = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? [{
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
        for (const Fz of null !== (tz = null === (sz = jz.current) || void 0 === sz ? void 0 : sz.querySelectorAll(".CupTile.Short, .CantCraftInfo")) && void 0 !== tz ? tz : []) {
          var tz, sz;
          Fz.animate(zz, {
            duration: 280,
            easing: "ease-out"
          })
        }
      }), [Yz]);
      const Mz = (zz, tz, sz) => {
          var Fz;
          if ((0, oF.f)().has(vz)) return void(sz && clearInterval(dz.current));
          const Wz = null !== (Fz = null === Dz || void 0 === Dz ? void 0 : Dz.resultStackable) && void 0 !== Fz && Fz,
            Xz = XF(Uz.gameBridge.latest("inventory").player),
            {
              hK: Oz,
              Nu: oz,
              amountAddedToSlot: Kz
            } = Uz.gameBridge.send("craftRecipe", {
              name: vz,
              dK: uz,
              times: tz || zz && Wz ? null : 1
            });
          if (Oz > 0) {
            const tz = [],
              Fz = new Set(Nz.flatMap((zz => {
                let {
                  items: tz
                } = zz;
                return tz
              }))),
              Oz = function(zz, tz, sz) {
                const Fz = [];
                for (let Wz = 0; Wz < zz.length; Wz++) {
                  const Xz = zz[Wz];
                  if (!Xz || !sz.has(Xz.name)) continue;
                  const Oz = tz[Wz],
                    oz = (null === Oz || void 0 === Oz ? void 0 : Oz.name) === Xz.name ? Oz.amount : 0;
                  oz < Xz.amount && Fz.push({
                    idx: Wz,
                    itemName: Xz.name,
                    amount: Xz.amount - oz
                  })
                }
                return Fz
              }(Xz, XF(Uz.gameBridge.latest("inventory").player), Fz).slice(0, 12),
              uz = sz ? 0 : Math.min(50, 400 / Oz.length),
              wz = sz ? 220 : 320;
            for (const zz of Oz) {
              var bz;
              const sz = Nz.findIndex((tz => {
                  let {
                    items: sz
                  } = tz;
                  return sz.includes(zz.itemName)
                })),
                Fz = null === (bz = jz.current) || void 0 === bz ? void 0 : bz.querySelector(`[data-craft-ingredient="${sz}"]`),
                Wz = (0, es.e)(zz.idx);
              Fz && Wz && tz.push({
                kind: "ingredient",
                itemName: zz.itemName,
                amount: zz.amount,
                Nu: zz.idx,
                from: Wz,
                to: (0, es.e)(Fz),
                delayMs: Math.round(tz.length * uz),
                durationMs: wz
              })
            }
            let Dz;
            if (null !== oz && Kz > 0 && Az.current) {
              const zz = tz.length > 0 ? tz[tz.length - 1].delayMs + .6 * wz : 0;
              Dz = {
                itemName: vz,
                amount: Kz,
                Nu: oz,
                from: (0, es.e)(Az.current),
                delayMs: Math.round(zz)
              }
            }
            gz(Dz, zz && !Wz ? oz : null, tz), Is.d.play("wood1", .5).rate(1.75)
          }
        },
        dz = (0, Wz.useRef)(null);
      (0, Wz.useEffect)((() => () => {
        clearInterval(dz.current)
      }), []);
      const hz = (zz, tz) => {
          Mz(zz, !1, !1), clearInterval(dz.current), tz && (dz.current = setTimeout((() => {
            dz.current = setInterval((() => {
              Mz(zz, !1, !0)
            }), tz.intervalMs)
          }), tz.initialDelayMs))
        },
        Qz = () => {
          clearInterval(dz.current)
        },
        kz = !wz || Cz || Boolean(xz),
        iz = (0, Wz.useRef)(null),
        Lz = null !== (sz = null === (Fz = (0, FF.e)()) || void 0 === Fz ? void 0 : Fz.hideButtonHints) && void 0 !== sz && sz,
        lz = null !== (Xz = null === (Oz = (0, sF.c)()) || void 0 === Oz ? void 0 : Oz.getBoundButton("inventorySecondary")) && void 0 !== Xz ? Xz : null,
        nz = () => !kz && (Mz(!1, !0, !1), !0);
      (0, fs.c)(Bz, {
        press: zz => "secondary" === zz ? nz() : !kz && (hz(!1, KF()), !0),
        release: Qz,
        back: Pz,
        hints: {
          primary: "inventoryCraft",
          secondary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      }), (0, fs.c)(iz, {
        press: nz,
        back: Pz,
        hints: {
          primary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      });
      const [az, qz] = (0, Wz.useState)(0), [Sz, Rz] = (0, Wz.useState)(null);
      (0, Wz.useEffect)((() => {
        if (!0 === oz) {
          qz(0);
          const zz = setInterval((() => {
            qz((zz => zz + 1))
          }), 1e3);
          return () => {
            clearInterval(zz)
          }
        }
        return () => {}
      }), [oz]);
      const pz = null === Dz || void 0 === Dz ? void 0 : Dz.ingredientsCraftedFrom,
        fz = (0, Wz.useRef)(Hz);
      (0, Wz.useEffect)((() => {
        fz.current = Hz
      }), [Hz]);
      const Ez = !(null === xz || void 0 === xz || !xz.hideIngredients);
      (0, Wz.useEffect)((() => {
        var zz, tz;
        if (!Sz) return;
        if (Ez) return Rz(null), void(null === (tz = fz.current) || void 0 === tz || tz.call(fz, !1));
        const sz = Sz[az % Sz.length];
        null === (zz = fz.current) || void 0 === zz || zz.call(fz, !0, uF(sz, Jz, null === pz || void 0 === pz ? void 0 : pz[sz]))
      }), [Sz, az, Jz, pz, Ez]);
      const zt = !!xz,
        tt = (0, Wz.useRef)(!1);
      (0, Wz.useEffect)((() => {
        var zz;
        zt && (clearInterval(dz.current), Ez && tt.current && (tt.current = !1, null === (zz = fz.current) || void 0 === zz || zz.call(fz, !1)))
      }), [zt, Ez]);
      const st = (0, es.k)(Jz, vz);
      return (0, Kz.jsxs)("div", {
        ref: jz,
        className: "CraftableInfo SmallTextBold",
        children: [(0, Kz.jsx)("div", {
          className: "CraftableHeader",
          children: (0, Kz.jsx)(mz.c, {
            text: st
          })
        }), !Ez && (0, Kz.jsx)("div", {
          className: bt()("CraftableIngredients", {
            Compact: Nz.length >= 5
          }),
          style: {
            maxWidth: cz
          },
          children: Zz.map(((zz, tz) => {
            const sz = zz.shownItems[az % zz.shownItems.length];
            return (0, Kz.jsx)(wF, {
              idx: tz,
              status: zz,
              shownItem: sz,
              dim: Gz,
              onHoverStart: () => {
                Rz(zz.shownItems)
              },
              onHoverEnd: () => {
                Rz(null), null === Hz || void 0 === Hz || Hz(!1)
              },
              onPadBack: Pz
            }, tz)
          }))
        }), xz && (0, Kz.jsx)("div", {
          className: "CantCraftInfo CraftableLockReason",
          children: (0, Kz.jsx)(mz.c, {
            text: xz.reason
          })
        }), !xz && (!wz || Cz) && (0, Kz.jsxs)("div", {
          className: "CantCraftInfo",
          children: [!wz && "Missing ingredients", (0, Kz.jsx)("br", {}), Cz && "Inventory is full"]
        }), !Ez && (0, Kz.jsxs)(Kz.Fragment, {
          children: [(0, Kz.jsxs)(vF, {
            ref: Bz,
            className: "DoCraftButton",
            onPointerDown: zz => {
              hz((0, es.o)(zz), (0, zF.r)(zz.nativeEvent) ? KF() : UF)
            },
            onPointerUp: Qz,
            onPointerLeave: Qz,
            disabled: kz,
            children: [rz && lz && !kz && !Lz && (0, Kz.jsx)(tF.e, {
              className: "CraftShortcutGlyph",
              glyph: lz
            }), (0, Kz.jsx)("div", {
              ref: Az,
              className: "DoCraftItem",
              onPointerEnter: () => {
                tt.current = !0, null === Hz || void 0 === Hz || Hz(!0, uF(vz, Jz))
              },
              onPointerLeave: () => {
                tt.current = !1, null === Hz || void 0 === Hz || Hz(!1)
              },
              children: (0, Kz.jsx)(xs.c, {
                itemName: vz,
                amount: bz
              })
            })]
          }), (0, Kz.jsxs)(vF, {
            ref: iz,
            className: "DoCraftAllButton",
            onPointerDown: zz => {
              Mz((0, es.o)(zz), !0, !1)
            },
            disabled: kz,
            children: [(0, Kz.jsx)("span", {
              className: "CraftAllLabel",
              children: Iz("general:craftAll")
            }), ez > 0 && (0, Kz.jsxs)("span", {
              className: "CraftAllCount",
              children: ["x", OF(ez)]
            })]
          })]
        })]
      })
    }

    function gF(zz) {
      let {
        selectedIdx: tz,
        hidden: sz
      } = zz;
      const Fz = (0, Ys.j)(),
        Xz = (0, Wz.useRef)(null);
      return (0, Wz.useLayoutEffect)((() => {
        const zz = Xz.current,
          Fz = null === zz || void 0 === zz ? void 0 : zz.parentElement;
        if (!Fz || !zz) return;
        const Wz = Fz.querySelector(".CraftableItems"),
          Oz = () => {
            var Xz, Oz;
            if (sz) return void(zz.style.opacity = "0");
            const oz = null === Wz || void 0 === Wz ? void 0 : Wz.children[tz],
              vz = null === (Xz = null !== (Oz = null === oz || void 0 === oz ? void 0 : oz.querySelector(".InvenItem")) && void 0 !== Oz ? Oz : oz) || void 0 === Xz ? void 0 : Xz.getBoundingClientRect();
            if (!vz || 0 === vz.width) return void(zz.style.opacity = "0");
            const Uz = Fz.getBoundingClientRect();
            zz.style.opacity = "1", zz.style.width = `${vz.width}px`, zz.style.height = `${vz.height}px`, zz.style.transform = `translate(${vz.left-Uz.left+Fz.scrollLeft}px, ${vz.top-Uz.top+Fz.scrollTop}px)`
          };
        Oz();
        const oz = new MutationObserver(Oz),
          vz = new ResizeObserver(Oz);
        return vz.observe(Fz), Wz && (oz.observe(Wz, {
          childList: !0,
          subtree: !0
        }), vz.observe(Wz)), () => {
          oz.disconnect(), vz.disconnect()
        }
      }), [tz, sz]), (0, Kz.jsx)("div", {
        ref: Xz,
        className: bt()("SelectionReticle", {
          Secondary: Fz
        })
      })
    }

    function HF(zz, tz, sz) {
      return zz ? (0, Vs.e)(Rs.j, zz) ? BF(zz, tz, sz) : zz : sz("classicGame:handCrafting")
    }

    function BF(zz, tz, sz) {
      var Fz;
      const Wz = null === (Fz = tz[zz]) || void 0 === Fz ? void 0 : Fz.displayName;
      if ("string" === typeof Wz) return sz(Wz);
      const Xz = Uz.gameBridge.latest("hiddenPlayerNames");
      return Array.isArray(Wz) ? Wz.map((zz => {
        if ("string" === typeof zz) return zz;
        if ("translationKey" in zz) return sz(zz.translationKey, (0, Vz.r)(zz.params, Xz));
        if ("str" in zz) {
          if ("string" === typeof zz.str) return zz.str;
          if ("translationKey" in zz.str) return sz(zz.str.translationKey, (0, Vz.r)(zz.str.params, Xz))
        }
        return ""
      })).join("") : Wz && "translationKey" in Wz ? sz(Wz.translationKey, (0, Vz.r)(Wz.params, Xz)) : zz
    }

    function PF(zz, tz) {
      return zz === tz || null !== zz && null !== tz && zz.name === tz.name && zz.dK === tz.dK
    }

    function rF(zz) {
      var tz, sz, Fz;
      let {
        show: Xz,
        onCraft: Oz,
        dispatchSelectedCraftable: oz,
        selectedCraftable: vz,
        craftingStation: uz,
        setHovered: Nz
      } = zz;
      const {
        t: bz
      } = (0, Vz.B)(), [wz, Dz] = (0, Wz.useState)(""), [gz, Hz] = (0, Wz.useState)(0);
      (0, Wz.useEffect)((() => {
        Xz || (Dz(""), Hz((zz => zz + 1)))
      }), [Xz]);
      const [Bz, Pz] = (0, Wz.useState)(uz);
      Bz !== uz && (Pz(uz), "" !== wz && (Dz(""), Hz((zz => zz + 1))));
      const rz = (0, Wz.useRef)(null),
        Yz = (0, Wz.useRef)(null),
        xz = (0, Es.i)(),
        mz = xz.showing && "recipe" === xz.kind,
        [Jz, Iz] = (0, Wz.useState)(0),
        ez = null !== uz && void 0 !== uz ? uz : null,
        Zz = (0, Wz.useRef)(null),
        Gz = zz => {
          return !((tz = Zz.current) === (sz = zz) || null !== tz && null !== sz && tz.station === sz.station && PF(tz.recipe, sz.recipe)) && (Zz.current = zz, Uz.gameBridge.send("focusCrafting", zz), !0);
          var tz, sz
        };
      Gz(Xz ? {
        station: ez,
        recipe: (null === (tz = Zz.current) || void 0 === tz ? void 0 : tz.station) === ez ? Zz.current.recipe : null
      } : null);
      let Tz = Uz.gameBridge.latest("crafting");
      const cz = (0, Cz.l)("itemInfo"),
        jz = "" !== wz.trim(),
        Az = (0, oF.D)(),
        yz = (0, oF.C)(),
        Mz = (0, oF.F)(),
        dz = function(zz, tz) {
          const [sz, Fz] = (0, Wz.useState)(!1);
          (0, Wz.useEffect)((() => {
            if (!zz) return void Fz(!1);
            const tz = setTimeout((() => {
              Fz(!0)
            }), 0);
            return () => {
              clearTimeout(tz)
            }
          }), [zz]);
          const Xz = zz && sz,
            Oz = (0, Wz.useRef)({
              station: tz,
              at: new Map
            });
          return (Oz.current.station !== tz || !Xz && Oz.current.at.size > 0) && (Oz.current = {
            station: tz,
            at: new Map
          }), Xz ? Oz.current.at : null
        }(Xz, uz);
      let hz = Tz.recipes.filter((zz => {
        let {
          listed: tz
        } = zz;
        return tz
      }));
      if (jz) {
        const zz = [];
        for (const tz of Tz.recipes) {
          var Qz;
          const sz = null !== (Qz = yz.get(tz.name)) && void 0 !== Qz && Qz.hideIngredients ? [] : tz.requires.flatMap((zz => {
              let {
                items: tz
              } = zz;
              return tz.flatMap((zz => [zz, BF(zz, cz, bz)]))
            })),
            Fz = WF(wz, [tz.name, BF(tz.name, cz, bz)], sz);
          null !== Fz && zz.push({
            item: tz,
            rank: Fz
          })
        }
        zz.sort(((zz, tz) => zz.rank - tz.rank)), hz = zz.map((zz => {
          let {
            item: tz
          } = zz;
          return tz
        }))
      } else {
        if (dz && dz.size > 0) {
          const zz = Tz.recipes.filter((zz => !zz.listed && dz.has(NF(zz))));
          hz = hz.concat(zz)
        }
        hz = (0, oF.i)(hz, Az, yz, Mz), dz && (hz = (0, oF.g)(hz, dz, NF))
      }
      const kz = zz => hz.find((tz => NF(tz) === zz)),
        iz = `${uz}|${wz}`,
        [Lz, lz] = (0, Wz.useState)(null),
        nz = (null === Lz || void 0 === Lz ? void 0 : Lz.context) === iz ? Lz.key : null,
        az = vz ? NF(vz) : null,
        qz = null !== (sz = null !== (Fz = kz(az)) && void 0 !== Fz ? Fz : kz(nz)) && void 0 !== sz ? sz : hz[0],
        Sz = qz ? NF(qz) : null,
        Rz = qz ? {
          name: qz.name,
          dK: qz.dK
        } : null;
      Xz && Gz({
        station: ez,
        recipe: Rz
      }) && (Tz = Uz.gameBridge.latest("crafting")), Sz !== az && Sz !== nz && lz(Sz ? {
        context: iz,
        key: Sz
      } : null), (0, Wz.useEffect)((() => () => {
        Zz.current = null, Uz.gameBridge.send("focusCrafting", null)
      }), []);
      const pz = PF(Tz.detail, Rz) ? Tz.detail : null,
        fz = null !== pz && !pz.roomForOne,
        Ez = hz.findIndex((zz => NF(zz) === NF(qz))),
        zt = () => Yz.current ? (0, fs.b)(Yz.current) : null,
        tt = (0, Wz.useRef)(null),
        st = (0, Wz.useRef)(0);
      st.current++;
      const Ft = st.current;
      (0, Wz.useEffect)((() => {
        const zz = tt.current;
        if (!zz || Ft <= zz.afterRender) return;
        if (tt.current = null, zz.key !== Sz) return;
        const tz = zt();
        var sz;
        null !== tz && void 0 !== tz && tz.press("primary") && !zz.po && (null === (sz = tz.release) || void 0 === sz || sz.call(tz))
      }));
      const Wt = zz => {
          const tz = {
            name: zz.name,
            dK: zz.dK
          };
          return {
            choose: () => {
              oz(tz), (0, rs.o)(Yz.current)
            },
            craft: () => {
              var zz, sz;
              return oz(tz), NF(tz) !== NF(qz) ? (tt.current = {
                key: NF(tz),
                po: !0,
                afterRender: st.current
              }, !0) : null !== (zz = null === (sz = zt()) || void 0 === sz ? void 0 : sz.press("primary")) && void 0 !== zz && zz
            },
            stopCraft: () => {
              var zz, tz;
              tt.current ? tt.current.po = !1 : null === (zz = zt()) || void 0 === zz || null === (tz = zz.release) || void 0 === tz || tz.call(zz)
            },
            refuse: () => {
              NF(tz) !== NF(qz) && oz(tz), Iz((zz => zz + 1))
            }
          }
        },
        Xt = () => {
          var zz, tz, sz;
          (0, rs.o)(null !== (zz = null === (tz = rz.current) || void 0 === tz || null === (sz = tz.querySelector(".CraftableItems")) || void 0 === sz ? void 0 : sz.children[Ez]) && void 0 !== zz ? zz : null)
        },
        Ot = hz.map(NF).join("|"),
        ot = (0, Wz.useRef)(Ot);
      return (0, Wz.useEffect)((() => {
        ot.current !== Ot && (ot.current = Ot, mz && Ez >= 0 && (0, Es.h)() && Xt())
      })), (0, Kz.jsxs)("div", {
        className: "Craftables",
        children: [(0, Kz.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: HF(uz, cz, bz)
        }), (0, Kz.jsxs)("div", {
          className: "CraftablesBody",
          children: [(0, Kz.jsx)(Ct.d, {
            className: "CraftingSearch",
            placeholderText: bz("general:searchRecipes"),
            defaultValue: wz,
            maxLength: 100,
            onValueChange: zz => {
              Dz(zz)
            },
            blurOnEnter: !0
          }, gz), 0 === hz.length && jz && (0, Kz.jsx)("div", {
            className: "CraftingNoMatches SmallTextBold",
            children: bz("general:noRecipesMatchSearch")
          }), hz.length > 0 && (0, Kz.jsxs)(Kz.Fragment, {
            children: [(0, Kz.jsxs)("div", {
              ref: rz,
              className: "CraftablesLeftSide",
              children: [(0, Kz.jsx)(ps.c, {
                lazyLoadedClassName: "CraftableItems",
                observerUpdateDeps: [JSON.stringify(hz.map((zz => {
                  let {
                    name: tz,
                    dK: sz,
                    haveIngredients: Fz
                  } = zz;
                  return {
                    name: tz,
                    dK: sz,
                    haveIngredients: Fz
                  }
                })))],
                observing: Xz,
                children: hz.map((zz => {
                  const {
                    name: tz,
                    dK: sz,
                    haveIngredients: Fz
                  } = zz, Wz = NF(zz);
                  return (0, Kz.jsx)(bF, {
                    recipeId: Wz,
                    itemName: tz,
                    onClick: () => {
                      oz({
                        name: tz,
                        dK: sz
                      })
                    },
                    isSelected: NF(qz) === Wz,
                    haveIngredients: Fz,
                    craftable: Fz && !yz.has(tz) && !(NF(qz) === Wz && fz),
                    setHovered: Nz,
                    padActions: Wt(zz),
                    marked: Az.has(tz),
                    lock: yz.get(tz),
                    itemInfo: cz
                  }, Wz)
                }))
              }), (0, Kz.jsx)(gF, {
                selectedIdx: Ez,
                hidden: mz && xz.steppingSlots
              })]
            }), (0, Kz.jsx)(DF, {
              show: Xz,
              recipeItem: qz,
              detail: pz,
              onCraft: Oz,
              setHovered: Nz,
              craftButtonRef: Yz,
              onPadBack: Xt,
              showPadShortcut: mz,
              refusedCount: Jz,
              lock: yz.get(qz.name),
              itemInfo: cz
            })]
          })]
        })]
      })
    }
    var YF = sz(8866),
      xF = sz(2965),
      mF = sz(2039),
      JF = sz(8204);
    class IF {
      constructor(zz, tz, sz) {
        this.commit = zz, this.delayMs = tz, this.defers = sz, this.pending = null, this.timer = void 0, this.po = !1, this.flush = () => {
          clearTimeout(this.timer);
          const zz = this.pending;
          null !== zz && (this.pending = null, this.commit(zz))
        }
      }
      type(zz) {
        this.pending = zz, clearTimeout(this.timer), this.po || this.defers() ? this.po || (this.timer = setTimeout(this.flush, this.delayMs)) : this.flush()
      }
      getTyped(zz) {
        var tz;
        return null !== (tz = this.pending) && void 0 !== tz ? tz : zz
      }
      isHeld() {
        return this.po
      }
      setHeld(zz) {
        this.po = zz, zz || this.flush()
      }
    }

    function CF(zz) {
      return null === zz ? "creativeInventory:all" : `creativeInventory:${zz}`
    }

    function eF(zz) {
      let {
        category: tz
      } = zz;
      return null === tz ? (0, Kz.jsx)(gz.c, {
        name: "layer-group"
      }) : (0, Kz.jsx)(xs.c, {
        itemName: YF.creativeItemCategoryIcons[tz],
        amount: 0
      })
    }

    function ZF(zz) {
      let {
        labelKey: tz,
        isSelected: sz,
        onSelect: Fz,
        setHovered: Wz,
        children: Xz
      } = zz;
      return (0, Kz.jsx)("div", {
        className: bt()("CreativeCategoryTab", {
          Selected: sz
        }),
        onClick: Fz,
        onPointerEnter: zz => {
          (0, es.j)(zz) || Wz(!0, {
            name: {
              translationKey: tz
            },
            desc: ""
          })
        },
        onPointerLeave: () => {
          Wz(!1)
        },
        children: Xz
      })
    }

    function GF(zz) {
      let {
        categories: tz,
        selectedCategory: sz,
        onSelect: Fz
      } = zz;
      const {
        t: Xz
      } = (0, Vz.B)(), [Oz, oz] = (0, Wz.useState)(!1), vz = (0, Wz.useRef)(null), Uz = (0, Wz.useCallback)((() => {
        oz(!1)
      }), []);
      return (0, mF.b)(vz, Uz), (0, Kz.jsxs)("div", {
        className: "CreativeCategoryDropdown",
        ref: vz,
        children: [(0, Kz.jsxs)("div", {
          className: "CreativeCategoryDropdownButton",
          onClick: () => {
            oz(!Oz)
          },
          children: [(0, Kz.jsx)("div", {
            className: "CreativeCategoryIcon",
            children: (0, Kz.jsx)(eF, {
              category: sz
            })
          }), (0, Kz.jsx)("span", {
            children: Xz(CF(sz))
          }), (0, Kz.jsx)(gz.c, {
            name: Oz ? "caret-up" : "caret-down"
          })]
        }), Oz && (0, Kz.jsx)("div", {
          className: "CreativeCategoryDropdownMenu",
          children: tz.map((zz => (0, Kz.jsxs)("div", {
            className: bt()("CreativeCategoryDropdownOption", {
              Selected: sz === zz
            }),
            onClick: () => {
              Fz(zz), oz(!1)
            },
            children: [(0, Kz.jsx)("div", {
              className: "CreativeCategoryIcon",
              children: (0, Kz.jsx)(eF, {
                category: zz
              })
            }), (0, Kz.jsx)("span", {
              children: Xz(CF(zz))
            })]
          }, null !== zz && void 0 !== zz ? zz : "all")))
        })]
      })
    }
    const TF = (0, Wz.memo)((function(zz) {
      let {
        creativeScrollDiv: tz,
        playerInvenNumSlots: sz,
        getSetHoveringForIdx: Fz,
        getPointerDownForIdx: Xz,
        getPointerUpForIdx: Oz,
        creativeSearchVal: oz,
        setCreativeSearchVal: Uz,
        creativeCategory: uz,
        setCreativeCategory: Nz,
        show: bz
      } = zz;
      const {
        t: wz
      } = (0, Vz.B)(), Dz = (0, Cz.l)("creativeVisibility"), {
        userContext: Hz
      } = (0, xz.b)(), Bz = (0, vz.e)("canUseDevCreativeItems"), Pz = Hz.playerHasRank("developer") || !!Bz, rz = (0, Wz.useMemo)((() => jF("", Dz, Pz)), [Dz, Pz]), Yz = (0, Wz.useMemo)((() => {
        const zz = (0, YF.creativeItemIds)(),
          tz = new Set(rz.map((tz => (0, YF.creativeCategoryOf)(zz[tz]))));
        return YF.creativeItemCategories.filter((zz => tz.has(zz)))
      }), [rz]), mz = null !== uz && Yz.includes(uz) ? uz : null, Iz = (0, Wz.useMemo)((() => "" === oz ? rz : jF(oz, Dz, Pz)), [rz, oz, Dz, Pz]), ez = (0, Wz.useMemo)((() => {
        const zz = (0, YF.creativeItemIds)();
        return null !== mz ? Iz.filter((tz => (0, YF.creativeCategoryOf)(zz[tz]) === mz)) : "" === oz ? Iz.filter((tz => !(0, YF.showOnlyInCreativeCategory)(zz[tz]))) : Iz
      }), [Iz, mz, oz]), Zz = Fz();

      function Gz(zz) {
        Nz(zz), tz.current.scrollTop = 0
      }
      const Tz = [null, ...Yz],
        {
          isTouchScreen: cz
        } = (0, Qz.h)(["isTouchScreen"]),
        jz = !cz,
        Az = (0, Wz.useRef)(null),
        [yz, Mz] = (0, Wz.useState)(0);
      (0, Wz.useEffect)((() => {
        const zz = Az.current;
        if (!zz) return;
        const tz = new ResizeObserver((zz => {
          Mz(zz[0].contentRect.height)
        }));
        return tz.observe(zz), () => {
          tz.disconnect()
        }
      }), [jz]);
      const dz = (0, Wz.useRef)(null),
        hz = (0, Wz.useCallback)((function zz() {
          "up" === dz.current ? tz.current.scrollTop -= 10 : "down" === dz.current && (tz.current.scrollTop += 10), dz.current && requestAnimationFrame(zz)
        }), [tz]),
        kz = (0, Wz.useCallback)((function(zz) {
          dz.current || (dz.current = zz, hz())
        }), [hz]);

      function iz() {
        dz.current = null
      }
      const Lz = (0, Wz.useRef)({
        creativeSearchVal: oz,
        setCreativeSearchVal: Uz
      });
      Lz.current = {
        creativeSearchVal: oz,
        setCreativeSearchVal: Uz
      };
      const [lz] = (0, Wz.useState)((() => new IF((zz => {
        Lz.current.setCreativeSearchVal(zz)
      }), 250, Ys.c))), nz = zz => {
        var sz;
        null === (sz = tz.current) || void 0 === sz || sz.classList.toggle("CreativeItemSlotsStale", zz)
      };
      (0, Jz.g)(JF.d, (zz => {
        lz.setHeld(zz), zz || nz(!1)
      })), (0, Wz.useEffect)((() => lz.flush), [lz]);
      const az = (0, Kz.jsx)(Ct.d, {
          className: "CreativeItemSlotsSearch",
          placeholderText: "Search",
          defaultValue: oz,
          maxLength: 1e4,
          onValueChange: (zz, tz) => {
            "" === lz.getTyped(Lz.current.creativeSearchVal) && "" !== zz && Nz(null), lz.type(zz), nz(lz.isHeld())
          },
          onEnter: lz.flush,
          blurOnEnter: !0
        }),
        qz = (0, Kz.jsxs)("div", {
          className: "CreateItemSlotsScrollable",
          children: [cz && (0, Kz.jsxs)("div", {
            className: "CreativeScrollButtons",
            children: [(0, Kz.jsx)("div", {
              className: "CreativeScrollButton Up",
              onPointerDown: () => {
                kz("up")
              },
              onPointerLeave: iz,
              onPointerUp: iz,
              children: (0, Kz.jsx)(gz.c, {
                name: "arrow-up"
              })
            }), (0, Kz.jsx)("div", {
              className: "CreativeScrollButton Down",
              onPointerDown: () => {
                kz("down")
              },
              onPointerLeave: iz,
              onPointerUp: iz,
              children: (0, Kz.jsx)(gz.c, {
                name: "arrow-up"
              })
            })]
          }), (0, Kz.jsxs)("div", {
            className: "CreativeItemSlots",
            ref: tz,
            children: [0 === ez.length && "" !== oz && (0, Kz.jsx)("div", {
              className: "CreativeItemSlotsEmpty",
              children: wz("general:noResults")
            }), (0, Kz.jsx)(ps.c, {
              lazyLoadedClassName: "CreativeItemSlotsInner",
              observerUpdateDeps: [oz, mz],
              observerRoot: "CreativeItemSlots",
              observing: bz,
              children: ez.map((zz => {
                const tz = sz + zz;
                return (0, Kz.jsx)(ns.d, {
                  idx: tz,
                  draggedInfo: null,
                  specialItemInfo: null,
                  setHovered: Fz(tz),
                  pointerDown: Xz(tz),
                  pointerUp: Oz(tz)
                }, tz)
              }))
            })]
          })]
        });
      return (0, Kz.jsxs)("div", {
        className: bt()("CreativeItemSlotsWrapper", jz ? "WithRail" : "WithDropdown"),
        children: [jz && (0, Kz.jsx)("div", {
          className: "CreativeCategoryRail",
          ref: Az,
          style: {
            "--rail-height": yz > 0 ? `${yz}px` : void 0,
            "--tab-rows": Math.ceil(Tz.length / 2)
          },
          children: Tz.map((zz => (0, Kz.jsx)(ZF, {
            labelKey: CF(zz),
            isSelected: mz === zz,
            onSelect: () => {
              Gz(zz)
            },
            setHovered: Zz,
            children: (0, Kz.jsx)(eF, {
              category: zz
            })
          }, null !== zz && void 0 !== zz ? zz : "all")))
        }), (0, Kz.jsxs)("div", {
          className: "CreativeItemSlotsMain",
          children: [(0, Kz.jsxs)("div", {
            className: "CreativeItemSlotsSearchRow",
            children: [az, !jz && (0, Kz.jsx)(GF, {
              categories: Tz,
              selectedCategory: mz,
              onSelect: Gz
            })]
          }), qz]
        })]
      })
    }));

    function cF(zz) {
      var tz;
      return null !== (tz = (0, xF.d)(zz)) && void 0 !== tz ? tz : ""
    }

    function jF(zz, tz, sz) {
      let {
        publicLobby: Fz,
        shownInGame: Wz
      } = tz;
      const Xz = zz.toLowerCase(),
        Oz = (0, YF.creativeItemIds)(),
        oz = zz => {
          var tz;
          const Xz = Oz[zz];
          return !(0, YF.itemIsDisabled)(Xz, Fz, null === (tz = Wz[cF(Xz)]) || void 0 === tz || tz, sz)
        };
      if ("" === Xz) return Oz.map(((zz, tz) => tz)).filter((zz => !(0, YF.showOnlyInCreativeSearch)(Oz[zz]))).filter(oz);
      const vz = [];
      for (let Uz = 0; Uz < Oz.length; Uz++) cF(Oz[Uz]).toLowerCase().includes(Xz) && vz.push(Uz);
      vz.sort(((zz, tz) => {
        const sz = cF(Oz[zz]).toLowerCase(),
          Fz = cF(Oz[tz]).toLowerCase();
        return sz.indexOf(Xz) - Fz.indexOf(Xz)
      }));
      for (const [Uz, Kz] of(0, YF.creativeAltNames)())
        for (const zz of Kz)
          if (zz.toLowerCase().includes(Xz)) {
            const zz = Oz.indexOf(Uz);
            vz.includes(zz) || vz.push(zz)
          } return vz.filter(oz)
    }
    var AF = sz(36252),
      yF = sz(580);

    function MF(zz) {
      return zz > yF.j
    }

    function dF(zz) {
      const tz = zz / 2,
        sz = [];
      for (let Fz = 0; Fz < tz / 6; Fz++)
        for (let zz = 0; zz < 12; zz++) {
          const Wz = zz < 6 ? 0 : tz;
          sz.push(Wz + 6 * Fz + zz % 6)
        }
      return sz
    }

    function hF(zz) {
      let {
        numSlots: tz,
        renderSlot: sz
      } = zz;
      const {
        t: Fz
      } = (0, Vz.B)(), Xz = (0, Wz.useRef)(null);
      var Oz;
      return Oz = Xz, (0, Wz.useLayoutEffect)((() => {
        var zz;
        const tz = null === (zz = Oz.current) || void 0 === zz ? void 0 : zz.closest(".InvenBody");
        if (!tz) return;
        const sz = () => {
          tz.style.zoom = "";
          const zz = parseFloat(getComputedStyle(document.documentElement).fontSize),
            sz = window.innerWidth - 2 * zz,
            Fz = tz.getBoundingClientRect().width;
          Fz > sz && (tz.style.zoom = "" + sz / Fz)
        };
        return sz(), window.addEventListener("resize", sz), () => {
          window.removeEventListener("resize", sz), tz.style.zoom = ""
        }
      }), [Oz]), (0, Kz.jsxs)("div", {
        ref: Xz,
        className: "ChestItemSlots DoubleChestSlots",
        children: [(0, Kz.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: Fz("doubleChest:title")
        }), (0, Kz.jsx)("div", {
          className: "GridItemSlots",
          children: dF(tz).map((zz => sz(zz)))
        })]
      })
    }

    function QF(zz) {
      let {
        oO: tz,
        initialPasskey: sz
      } = zz;
      const {
        t: Fz
      } = (0, Vz.B)(), [Xz, Oz] = (0, Wz.useState)(sz), [oz, vz] = (0, Wz.useState)(sz);
      (0, Wz.useEffect)((() => {
        Oz(sz), vz(sz)
      }), [...tz]);
      return (0, Kz.jsxs)("div", {
        className: "IronChestPasskeyEditorWrapper",
        children: [(0, Kz.jsx)("div", {
          className: "SmallTextBold",
          children: Fz("ironChest:currentPasskey", {
            currentPasskey: Xz.join("")
          })
        }), (0, Kz.jsx)(ks, {
          className: "IronChestPasskeyEditor",
          SU: oz,
          onPasskeyUpdated: vz,
          confirmText: "ironChest:changePasskey",
          onConfirm: () => {
            Uz.gameBridge.send("changeIronChestPasskey", {
              pos: [...tz],
              SU: [...oz]
            }), Oz([...oz])
          }
        })]
      })
    }

    function kF(zz) {
      let {
        variation: tz,
        canCraft: sz,
        show: Fz,
        creativeMounted: Wz,
        specialItemRef: Xz,
        draggedInfo: Oz,
        getSetHovering: oz,
        getPointerDownForIdx: vz,
        getPointerUpForIdx: Uz,
        enchantingTablePosition: uz,
        enchantingTableBlockName: Nz,
        selectedCraftable: bz,
        dispatchSelectedCraftable: wz,
        creativeScrollDiv: Dz,
        creativeSearchVal: gz,
        setCreativeSearchVal: Hz,
        creativeCategory: Bz,
        setCreativeCategory: Pz,
        onCraft: rz
      } = zz;
      const {
        userContext: Yz
      } = (0, xz.b)(), {
        t: mz
      } = (0, Vz.B)(), Jz = (0, Cz.h)("inventory", (zz => zz.chest)), Iz = (0, Cz.h)("inventory", (zz => zz.player.length)), ez = (0, Cz.h)("inventory", (zz => zz.creative));
      if (0 === Iz) return null;
      let Zz, Gz;
      const Tz = zz => {
          const tz = Iz + zz;
          return (0, Kz.jsx)(ns.d, {
            idx: tz,
            draggedInfo: Oz,
            specialItemInfo: Xz.current,
            setHovered: oz(tz),
            pointerDown: vz(tz),
            pointerUp: Uz(tz)
          }, tz)
        },
        cz = Jz ? (0, AF.e)(Jz.type) : null;
      if (cz) Zz = bt()("InvenLeftSideChestCustom", cz.className), Gz = (0, Kz.jsx)("div", {
        className: "ChestItemSlotsWrapper",
        children: cz.render({
          oO: Jz.pos,
          renderSlot: Tz
        })
      });
      else if (Jz) {
        const zz = Jz.pos,
          tz = "Iron" === Jz.type || "Moonstone" === Jz.type ? Jz.type : "Standard";
        let sz = !1,
          Fz = null;
        "Iron" === tz && (sz = Jz.ironChest.ownerDbId === Yz.whamm, Fz = Jz.ironChest.SU), Zz = `InvenLeftSideChest${tz}`;
        const Wz = MF(Jz.numSlots);
        Gz = (0, Kz.jsxs)("div", {
          className: "ChestItemSlotsWrapper",
          children: [sz && (0, Kz.jsx)(QF, {
            oO: zz,
            initialPasskey: Fz
          }), Wz && (0, Kz.jsx)(hF, {
            numSlots: Jz.numSlots,
            renderSlot: Tz
          }), !Wz && (0, Kz.jsxs)("div", {
            className: "ChestItemSlots",
            children: [(0, Kz.jsx)("div", {
              className: "InvenLeftSideHeader SmallTextBold",
              children: mz("Moonstone" === tz ? "item:moonstoneChest" : "Iron" === tz ? "item:ironChest" : "item:chest")
            }), (0, Kz.jsx)("div", {
              className: "GridItemSlots",
              children: new Array(Jz.numSlots).fill(0).map(((zz, tz) => Tz(tz)))
            })]
          })]
        })
      } else if (!ez || tz && sz)
        if (sz && "Enchanting Table" === tz) Zz = `InvenLeftSide${(null!==Nz&&void 0!==Nz?Nz:"").replace(/ /gi,"")}`, Gz = (0, Kz.jsx)(as, {
          specialItemInfo: Xz.current,
          setHovered: oz,
          pointerDown: vz(Gs.f),
          pointerUp: Uz(Gs.f),
          enchantingTablePosition: uz,
          enchantingTableBlockName: Nz
        });
        else if (sz && "Salvaging Table" === tz) Zz = "InvenLeftSideSalvagingTable", Gz = (0, Kz.jsx)(Ss, {
        specialItemInfo: Xz.current,
        setSpecialItemInfo: zz => {
          Xz.current = zz
        },
        setHovered: oz,
        pointerDown: vz(Gs.f),
        pointerUp: Uz(Gs.f)
      });
      else {
        if (!sz) return null;
        Zz = `InvenLeftSide${(null!==tz&&void 0!==tz?tz:"HandCrafting").replace(/ /gi,"")}`, Gz = (0, Kz.jsx)(rF, {
          show: Fz,
          onCraft: rz,
          craftingStation: tz,
          selectedCraftable: bz,
          dispatchSelectedCraftable: wz,
          setHovered: oz()
        })
      } else Zz = "InvenLeftSideCreative", Gz = Wz ? (0, Kz.jsx)(TF, {
        creativeScrollDiv: Dz,
        playerInvenNumSlots: Iz,
        getSetHoveringForIdx: oz,
        getPointerDownForIdx: vz,
        getPointerUpForIdx: Uz,
        creativeSearchVal: gz,
        setCreativeSearchVal: Hz,
        creativeCategory: Bz,
        setCreativeCategory: Pz,
        show: Fz
      }) : null;
      const jz = !!Jz || sz && !!tz;
      return (0, Kz.jsx)("div", {
        className: `InvenLeftSide ${Zz}`,
        "data-pad-inventory-start": jz ? "" : void 0,
        children: Gz
      })
    }
    var iF = sz(574),
      LF = sz(19784),
      lF = sz(19793),
      nF = sz(19797);
    const aF = {
      Helmet: {
        sprite: "empty_armor_slot_helmet",
        image: sz(19802)
      },
      Chestplate: {
        sprite: "empty_armor_slot_chestplate",
        image: lF
      },
      Gauntlets: {
        sprite: "empty_armor_slot_gauntlets",
        image: nF
      },
      Leggings: {
        sprite: "empty_armor_slot_leggings",
        image: sz(19806)
      },
      Boots: {
        sprite: "empty_armor_slot_boots",
        image: LF
      }
    };

    function qF(zz) {
      const {
        sprite: tz,
        image: sz
      } = aF[zz];
      return Us(tz, Os.l.ITEM, sz)
    }

    function SF(zz) {
      let {
        draggedInfo: tz,
        specialItemInfo: sz,
        craftFlyAnims: Fz,
        getSetHovering: Wz,
        getPointerDownForIdx: Xz,
        getPointerUpForIdx: Oz,
        variation: oz,
        canCraft: vz,
        isNewSlot: Uz
      } = zz;
      const uz = (0, Cz.h)("inventory", (zz => zz.player.length));
      return 0 === uz ? null : (0, Kz.jsxs)("div", {
        className: "InvenBodyRight",
        children: [(0, Kz.jsx)("div", {
          className: "ArmourItemSlots",
          children: new Array(iF.c.length).fill(0).map(((zz, Nz) => {
            const bz = uz - iF.c.length + Nz;
            return (0, Kz.jsx)(ns.d, {
              idx: bz,
              draggedInfo: tz,
              specialItemInfo: sz,
              craftFlyHoldbackInfo: (0, Zs.j)(Fz, bz),
              setHovered: Wz(bz),
              pointerDown: Xz(bz),
              pointerUp: Oz(bz),
              defaultIconB64: qF(iF.c[Nz]),
              variation: vz ? oz : void 0,
              showNewDot: Uz(bz)
            }, bz)
          }))
        }), (0, Kz.jsx)("div", {
          className: "GridItemSlots",
          children: new Array(uz - 10 - iF.c.length).fill(0).map(((zz, Nz) => {
            const bz = uz - iF.c.length - Nz - 1;
            return (0, Kz.jsx)(ns.d, {
              idx: bz,
              draggedInfo: tz,
              specialItemInfo: sz,
              craftFlyHoldbackInfo: (0, Zs.j)(Fz, bz),
              setHovered: Wz(bz),
              pointerDown: Xz(bz),
              pointerUp: Oz(bz),
              variation: vz ? oz : void 0,
              showNewDot: Uz(bz)
            }, bz)
          }))
        })]
      })
    }
    var VF = sz(36256),
      RF = sz(36261);

    function pF(zz) {
      const {
        e: tz,
        idx: sz
      } = zz, Fz = (0, es.g)(zz.readInventory(), sz), Wz = (0, es.i)(tz);
      sz === Gs.e ? function(zz, tz) {
        const {
          draggedInfoRef: sz,
          removeItem: Fz,
          removeDraggedInfoRef: Wz,
          close: Xz
        } = zz;
        if (sz.current) {
          const zz = tz && sz.current.amount || 1;
          Fz(sz.current.idx, zz, !0) && (sz.current.amount -= zz, sz.current.amount <= 0 && Wz())
        } else tz && Xz()
      }(zz, Wz) : sz === Gs.f ? function(zz, tz) {
        const {
          e: sz,
          draggedInfoRef: Fz,
          specialItemRef: Wz,
          moveAmtIntoSlot: Xz,
          removeDraggedInfoRef: Oz
        } = zz;
        if ((0, es.o)(sz) && Wz.current) Wz.current = null;
        else if (Fz.current && Wz.current && (Fz.current.idx === Wz.current.idx || (0, RF.e)(Fz.current, Wz.current)) && Fz.current.amount > 0 && Wz.current.amount > 0 && Wz.current.amount < hs.d.maxItemStackSize)
          if (Fz.current.idx === Wz.current.idx) {
            if (tz) {
              const zz = Math.min(Fz.current.amount, hs.d.maxItemStackSize - Wz.current.amount);
              Wz.current.amount += zz, Fz.current.amount -= zz
            } else Fz.current.amount--, Wz.current.amount++;
            Fz.current.amount <= 0 && Oz()
          } else if (tz) {
          const zz = Math.min(Fz.current.amount, hs.d.maxItemStackSize - Wz.current.amount);
          Xz(Wz.current.idx, zz) && (Wz.current.amount += zz)
        } else {
          Xz(Wz.current.idx, 1) && Wz.current.amount++
        } else if (!Fz.current || Wz.current || tz) {
          const zz = Fz.current;
          Fz.current = Wz.current, Wz.current = zz
        } else Fz.current.amount--, Wz.current = {
          idx: Fz.current.idx,
          name: Fz.current.name,
          attributes: Fz.current.attributes,
          amount: 1
        }
      }(zz, Wz) : (0, es.o)(tz) ? function(zz, tz) {
        var sz, Fz;
        const {
          idx: Wz,
          draggedInfoRef: Xz,
          specialItemRef: Oz,
          canCraft: oz,
          variation: vz,
          swapSlots: Uz,
          moveIntoSlots: Kz
        } = zz;
        if (!tz) return;
        let uz = tz.amount;
        Wz === (null === (sz = Xz.current) || void 0 === sz ? void 0 : sz.idx) && (uz = Xz.current.amount <= 0 ? 0 : tz.amount - Xz.current.amount);
        Wz === (null === (Fz = Oz.current) || void 0 === Fz ? void 0 : Fz.idx) && (uz = Oz.current.amount <= 0 ? 0 : tz.amount - Oz.current.amount);
        if (0 === uz) return;
        const Nz = zz.readInventory(),
          bz = Nz.player.length,
          wz = Nz.chest,
          Dz = bz - iF.c.length,
          gz = () => {
            if (!(0, Ys.c)()) return void Kz(10, Dz, Wz, uz);
            const zz = zz => {
              const sz = (0, es.g)(Nz, zz);
              return sz ? {
                amount: sz.amount,
                stacksWithMoved: (0, RF.e)(sz, tz)
              } : null
            };
            for (const tz of ((zz, tz, sz, Fz, Wz) => {
                const Xz = [];
                let Oz = Fz;
                if (null !== Fz) {
                  let oz = 0;
                  for (let Fz = tz; Fz < sz; Fz++) {
                    const tz = zz(Fz);
                    null !== tz && void 0 !== tz && tz.stacksWithMoved && null !== tz.amount && tz.amount > 0 && (oz += Math.max(0, Wz - tz.amount))
                  }
                  const vz = Math.min(Fz, oz);
                  if (vz > 0 && (Xz.push({
                      start: tz,
                      end: sz,
                      amount: vz
                    }), Oz = Fz - vz), Oz <= 0) return Xz
                }
                for (let oz = sz - 1; oz >= tz; oz--)
                  if (null === zz(oz)) {
                    Xz.push({
                      start: oz,
                      end: oz + 1,
                      amount: Oz
                    });
                    break
                  } return Xz
              })(zz, 10, Dz, uz, hs.d.maxItemStackSize)) Kz(tz.start, tz.end, Wz, tz.amount)
          };
        if (!oz || "Enchanting Table" !== vz && "Salvaging Table" !== vz) {
          const sz = (0, Iz.zb)(tz.name),
            Fz = sz ? (0, Iz.yb)(sz) : null;
          if (!iF.c.includes(sz) || Wz !== Fz && (0, es.h)(Nz, zz.itemInfo, Fz, Wz))
            if (wz)
              if (Wz < bz) {
                var Hz, Bz;
                const [zz, tz] = null !== (Hz = null === (Bz = (0, AF.e)(wz.type)) || void 0 === Bz ? void 0 : Bz.quickMoveRange) && void 0 !== Hz ? Hz : [0, wz.numSlots];
                Kz(bz + zz, bz + tz, Wz, uz)
              } else Kz(0, bz - iF.c.length, Wz, uz);
          else Nz.creative ? Wz < 10 ? gz() : Wz < bz ? Kz(0, 10, Wz, uz) : Kz(0, bz - iF.c.length, Wz, null !== tz.amount ? hs.d.maxItemStackSize : null) : Wz < 10 ? gz() : Kz(0, 10, Wz, uz);
          else Wz < bz - iF.c.length || Wz >= bz ? Uz(Fz, Wz) : (Kz(0, bz - iF.c.length, Fz, uz), Is.d.play("equip_leather1", 1).rate(.9 + .3 * Math.random()))
        } else Oz.current = {
          idx: Wz,
          name: tz.name,
          attributes: tz.attributes,
          amount: null !== tz.amount ? uz : 0
        }
      }(zz, Fz) : zz.draggedInfoRef.current ? function(zz, tz, sz, Fz) {
        const {
          draggedInfoRef: Wz,
          specialItemRef: Xz,
          moveAmtIntoSlot: Oz,
          swapSlots: oz,
          removeItem: vz,
          removeDraggedInfoRef: Uz
        } = zz, Kz = zz.readInventory(), uz = Wz.current.idx;
        if (sz && (tz === uz || (0, RF.e)(Wz.current, sz)) && Wz.current.amount > 0 && (0, es.c)(sz) > 0 && (sz.amount < hs.d.maxItemStackSize || tz === uz)) Fz ? sz.amount + Wz.current.amount <= hs.d.maxItemStackSize || tz === uz ? Oz(tz, Wz.current.amount) : Oz(tz, hs.d.maxItemStackSize - sz.amount) : Oz(tz, 1);
        else if (Wz.current.amount > 0 && !sz) Oz(tz, Fz ? Wz.current.amount : 1);
        else if (Fz || sz || 0 === Wz.current.amount)
          if (Kz.creative && !Kz.chest && tz >= Kz.player.length) {
            const zz = 0 === Wz.current.amount ? 1 : Wz.current.amount;
            vz(Wz.current.idx, zz, !1) && Uz()
          } else {
            var Nz;
            const sz = (null === (Nz = Xz.current) || void 0 === Nz ? void 0 : Nz.idx) === tz;
            if (oz(tz, Wz.current.idx)) {
              const Fz = zz.readInventory(),
                Oz = (0, es.g)(Fz, uz),
                oz = !Fz.chest && Fz.creative && Wz.current.idx >= Fz.player.length;
              if (Oz && Wz.current.idx !== tz && !oz) {
                let zz = (0, es.c)(Oz);
                sz && (zz -= Xz.current.amount), Wz.current = sz && 0 === zz ? null : {
                  idx: Wz.current.idx,
                  name: Oz.name,
                  attributes: Oz.attributes,
                  amount: zz
                }
              } else Uz()
            }
          }
        else Oz(tz, 1)
      }(zz, sz, Fz, Wz) : function(zz, tz, sz, Fz) {
        var Wz;
        const {
          draggedInfoRef: Xz,
          specialItemRef: Oz
        } = zz;
        if (!sz) return;
        let oz = (0, es.c)(sz);
        const vz = (null === (Wz = Oz.current) || void 0 === Wz ? void 0 : Wz.idx) === tz;
        vz && (oz -= Oz.current.amount);
        Fz || (oz = Math.ceil(oz / 2));
        Xz.current = vz && 0 === oz ? null : {
          idx: tz,
          name: sz.name,
          attributes: sz.attributes,
          amount: oz
        }
      }(zz, sz, Fz, Wz)
    }

    function fF(zz, tz) {
      return !!tz && tz.name === zz.name
    }

    function EF() {
      return Uz.gameBridge.latest("inventory")
    }

    function zW(zz, tz, sz) {
      return Uz.gameBridge.send("removeInventoryItem", {
        slot: zz,
        amount: tz,
        drop: sz
      })
    }

    function tW(zz) {
      return (0, es.f)(zz, Uz.gameBridge.latest("itemInfo"), Uz.gameBridge.latest("stationItems").enchantable)
    }

    function sW(zz) {
      let {
        show: tz,
        close: sz,
        canCraft: Fz,
        variation: Xz,
        inventoryItemsMoveable: Oz,
        setCraftFlyAnims: oz
      } = zz;
      (0, Cz.l)("itemInfo");
      const [vz, Kz] = (0, Wz.useState)(null), [uz, Nz] = (0, Wz.useState)(null), [bz, wz] = (0, Wz.useState)(!1), Dz = (0, Wz.useRef)(null), gz = (0, Wz.useRef)(null), Hz = (0, Wz.useRef)(null), Bz = (0, Wz.useRef)(null), [Pz, rz] = (0, Wz.useReducer)((zz => zz + 1), 0), Yz = (0, Wz.useCallback)((() => {
        tz && rz()
      }), [tz, rz]), xz = (0, Wz.useCallback)((() => {
        gz.current = null, yz.current = null, Yz()
      }), [Yz]), mz = (0, Wz.useCallback)(((zz, tz) => {
        oz((sz => sz.map((sz => "ingredient" === sz.kind ? sz : sz.Nu === zz ? {
          ...sz,
          Nu: tz,
          to: (0, es.e)(tz)
        } : sz.Nu === tz ? {
          ...sz,
          Nu: zz,
          to: (0, es.e)(zz)
        } : sz))))
      }), [oz]), Jz = (0, Wz.useCallback)(((zz, tz) => {
        const sz = hz.current;
        if (sz.x = zz, sz.y = tz, Dz.current) !Qz.current.isTouch || Qz.current.itemBeingDragged && !yz.current ? (Dz.current.style.transform = `translate(${sz.x}px, ${sz.y}px)`, wz(Qz.current.isTouch && !yz.current)) : (Dz.current.style.transform = "translate(0.5rem, 0.5rem)", wz(!0));
        else if (Bz.current) {
          const sz = Bz.current;
          let Fz = zz + 10,
            Wz = tz + 10;
          const Xz = sz.offsetWidth,
            Oz = sz.offsetHeight;
          Fz + Xz > window.innerWidth && (Fz = zz - Xz - 10), Wz + Oz > window.innerHeight && (Wz = tz - Oz - 10), Fz < 0 && (Fz = 0), Wz < 0 && (Wz = 0), Bz.current.style.transform = `translate(${Fz}px, ${Wz}px)`
        }
      }), []), ez = (0, Wz.useCallback)((zz => (tz, sz, Fz) => {
        if (Kz(tz && void 0 !== zz ? zz : null), tz) {
          if (void 0 === zz && !sz) return void(0, VF.c)("Error in invenComp", new Error("isHovering true but no idx or text"));
          if (void 0 !== zz) {
            var Wz;
            const tz = EF();
            let sz;
            if (sz = zz === Gs.f ? Hz.current ? (0, es.g)(tz, Hz.current.idx) : null : (0, es.g)(tz, zz), !sz) return void Nz(null);
            if ((null === (Wz = Hz.current) || void 0 === Wz ? void 0 : Wz.idx) === zz) {
              if (0 === (0, es.c)(sz) - Hz.current.amount) return void Nz(null)
            }
            Nz(tW(sz))
          } else Nz({
            name: sz.name,
            desc: sz.desc,
            fontStyle: "normal"
          })
        } else Nz(null);
        Fz && setTimeout((() => {
          Jz(Fz.pageX, Fz.pageY)
        }), 0)
      }), [Jz]), Zz = (0, Wz.useCallback)(((zz, tz) => {
        const sz = Uz.gameBridge.send("moveInventoryItem", {
          from: gz.current.idx,
          to: zz,
          amount: tz
        });
        return sz ? (gz.current.amount -= tz, gz.current.amount <= 0 && xz()) : console.error("moveInventoryItem failed"), sz
      }), [xz]), Gz = (0, Wz.useCallback)(((zz, tz) => {
        const sz = Hz.current,
          Fz = null === sz || void 0 === sz ? void 0 : sz.idx;
        sz && (sz.idx = function(zz, tz, sz) {
          return zz === tz ? sz : zz === sz ? tz : zz
        }(Fz, zz, tz));
        const Wz = Uz.gameBridge.send("swapInventorySlots", {
          a: zz,
          b: tz
        });
        return Wz ? mz(zz, tz) : sz && (sz.idx = Fz), Wz
      }), [mz]), Tz = (0, Wz.useCallback)(((zz, tz, sz, Fz) => {
        const Wz = Uz.gameBridge.send("quickMoveInventoryItem", {
          slot: sz,
          start: zz,
          end: tz,
          amount: Fz
        });
        null !== Wz && mz(sz, Wz)
      }), [mz]), cz = (0, Wz.useCallback)(((zz, tz) => {
        var Wz;
        ((zz, tz, sz) => {
          const Fz = zz - (sz - iF.c.length);
          return !(!tz || Fz < 0 || Fz >= iF.c.length) && (0, Iz.zb)(tz) !== iF.c[Fz]
        })(tz, null === (Wz = gz.current) || void 0 === Wz ? void 0 : Wz.name, EF().player.length) || (pF({
          e: zz,
          idx: tz,
          readInventory: EF,
          itemInfo: Uz.gameBridge.latest("itemInfo"),
          draggedInfoRef: gz,
          specialItemRef: Hz,
          moveAmtIntoSlot: Zz,
          swapSlots: Gz,
          moveIntoSlots: Tz,
          removeItem: zW,
          removeDraggedInfoRef: xz,
          close: sz,
          canCraft: Fz,
          variation: Xz
        }), Yz())
      }), [Fz, sz, Zz, Tz, xz, Gz, Xz, Yz]), jz = (0, Wz.useRef)(0), Az = (0, Wz.useRef)(null), yz = (0, Wz.useRef)(null), Mz = (0, Wz.useRef)(null), dz = (0, Wz.useRef)(new Set), hz = (0, Wz.useRef)({
        x: 0,
        y: 0
      }), Qz = (0, Wz.useRef)({
        isTouch: !1,
        itemBeingDragged: !1
      }), kz = (0, Wz.useCallback)((() => (Mz.current = null, Qz.current.itemBeingDragged = !1, clearTimeout(Az.current), !!yz.current && (yz.current = null, Yz(), !0))), [Yz]);
      (0, Wz.useEffect)((() => {
        kz(), dz.current.clear()
      }), [tz]);
      const iz = zz => void 0 !== zz && (dz.current.has(zz) || null !== Mz.current && zz !== Mz.current),
        Lz = zz => {
          Qz.current.isTouch = (0, es.j)(zz)
        },
        lz = (0, Wz.useCallback)((zz => tz => {
          const Fz = (0, es.j)(tz);
          if (Fz || Jz(tz.pageX, tz.pageY), Oz)
            if (iz(tz.pointerId)) void 0 !== tz.pointerId && dz.current.add(tz.pointerId);
            else {
              if (Lz(tz), Fz) {
                jz.current = tz.timeStamp, Qz.current.itemBeingDragged = !0, Mz.current = tz.pointerId;
                const sz = (0, es.g)(EF(), zz);
                if (sz && sz.amount && sz.amount > 0) {
                  const sz = tz.pageX,
                    Fz = tz.pageY,
                    Wz = hz.current.x,
                    Xz = hz.current.y;
                  clearTimeout(Az.current), Az.current = setTimeout((() => {
                    if (gz.current && gz.current.idx === zz && (Math.abs(sz - hz.current.x) < 20 && Math.abs(Fz - hz.current.y) < 20 || Wz === hz.current.x && Xz === hz.current.y) && Qz.current.itemBeingDragged) {
                      const zz = EF(),
                        sz = zz.creative && !zz.chest && gz.current.idx >= hs.d.numInvenSlots && null !== (0, es.g)(zz, gz.current.idx).amount ? hs.d.maxItemStackSize : gz.current.amount;
                      yz.current = {
                        initTouchX: tz.pageX,
                        initTouchY: tz.pageY,
                        maxAmount: sz
                      }, gz.current.amount = Math.ceil(gz.current.amount / 2), Dz.current.style.transform = "translate(0.5rem, 0.5rem)", wz(!0), Yz()
                    }
                  }), 500)
                }
              }
              cz(tz, zz)
            }
          else zz === Gs.e && (0, es.i)(tz) && sz()
        }), [Jz, cz, Oz, sz, Yz]),
        nz = (0, Wz.useCallback)((zz => zz => {
          if (iz(zz.pointerId)) return;
          const tz = (0, es.j)(zz);
          if (Lz(zz), !kz()) {
            if (tz && gz.current && zz.timeStamp - jz.current > 150) {
              const tz = document.elementFromPoint(zz.clientX, zz.clientY);
              if (null !== tz) {
                const sz = tz.getAttribute("data-inven-idx");
                null !== sz ? cz(zz, parseInt(sz)) : tz.classList.contains("InventoryBackgroundScreen") && cz(zz, -1)
              }
            }
            Jz(zz.pageX, zz.pageY)
          }
        }), [Jz, cz, kz]);
      (0, Wz.useEffect)((() => {
        let zz;
        const sz = ["pointerup", "pointercancel"],
          Fz = zz => {
            dz.current.has(zz.pointerId) ? setTimeout((() => {
              dz.current.delete(zz.pointerId)
            }), 0) : zz.pointerId === Mz.current && setTimeout((() => {
              Mz.current === zz.pointerId && kz()
            }), 0)
          };
        if (tz) {
          for (const zz of sz) document.addEventListener(zz, Fz, !0);
          if (!Qz.current.isTouch) {
            const zz = hz.current;
            Jz(zz.x, zz.y)
          }
          zz = zz => {
            zz.preventDefault(), iz(zz.pointerId) || (Lz(zz), Jz(zz.pageX, zz.pageY), yz.current && zz.pointerId === Mz.current && (zz => {
              if (!gz.current) return yz.current = null, void Yz();
              const {
                initTouchX: tz,
                maxAmount: sz
              } = yz.current, Fz = (zz.pageX - tz) * yz.current.maxAmount / 160, Wz = Math.ceil(sz / 2) + Math.ceil(Fz);
              gz.current.amount = Math.min(sz, Math.max(1, Wz)), Yz()
            })(zz))
          }, document.addEventListener("pointermove", zz, !0)
        }
        return () => {
          document.removeEventListener("pointermove", zz, !0);
          for (const zz of sz) document.removeEventListener(zz, Fz, !0)
        }
      }));
      const az = (0, Wz.useCallback)((() => {
          if (gz.current) {
            const zz = (0, es.g)(EF(), gz.current.idx);
            (!fF(gz.current, zz) || zz.amount < gz.current.amount) && xz()
          }
        }), [xz]),
        qz = (0, Wz.useCallback)((() => {
          const zz = gz.current;
          if (zz) {
            const tz = (0, es.g)(EF(), zz.idx);
            fF(zz, tz) && (zz.attributes = tz.attributes)
          }
        }), []);
      return {
        draggedDomRef: Dz,
        draggedInfoRef: gz,
        specialItemRef: Hz,
        hoverInfoDomRef: Bz,
        longHoldSplitInfoRef: yz,
        currHoveredIdx: vz,
        currHoveredDisplayInfo: uz,
        displayDraggedItemName: bz,
        forceRerenderIfVisible: Yz,
        removeDraggedInfoRef: xz,
        checkDraggedItemConsistencyWithInven: az,
        refreshDraggedAttributes: qz,
        swapSlots: Gz,
        getPointerDownForIdx: lz,
        getPointerUpForIdx: nz,
        getSetHovering: ez,
        setCurrHoveredDisplayInfo: Nz,
        moveFollowerTo: Jz
      }
    }
    class FW {
      constructor(zz) {
        this.snapshot = [], this.newSlots = new Set, this.update(zz, !1)
      }
      update(zz, tz) {
        const sz = zz.map((zz => {
          var tz;
          return zz ? {
            name: zz.name,
            amount: null !== (tz = zz.amount) && void 0 !== tz ? tz : 1
          } : null
        }));
        sz.forEach(((zz, sz) => {
          const Fz = this.snapshot[sz],
            Wz = (null === zz || void 0 === zz ? void 0 : zz.name) !== (null === Fz || void 0 === Fz ? void 0 : Fz.name);
          (!zz || Wz || zz.amount < Fz.amount) && this.newSlots.delete(sz), tz && zz && (Wz || zz.amount > Fz.amount) && this.newSlots.add(sz)
        })), this.snapshot = sz
      }
      clearMarks() {
        this.newSlots.clear()
      }
      isNew(zz) {
        return this.newSlots.has(zz)
      }
    }
    const WW = (zz, tz, sz) => ({
      button: tz,
      shiftKey: sz,
      pageX: zz.clientX,
      pageY: zz.clientY,
      clientX: zz.clientX,
      clientY: zz.clientY,
      pointerType: "mouse"
    });

    function XW(zz) {
      const [tz, sz] = (0, Wz.useState)(zz);
      return zz && !tz && sz(!0), (0, Wz.useEffect)((() => {
        if (tz) return;
        let zz = !0;
        const Fz = () => {
            zz && (zz = !1, sz(!0))
          },
          Wz = "function" === typeof window.requestIdleCallback,
          Xz = Wz ? window.requestIdleCallback(Fz, {
            timeout: 2e3
          }) : void 0,
          Oz = setTimeout(Fz, Wz ? 2e3 : 1e3);
        return () => {
          zz = !1, clearTimeout(Oz), void 0 !== Xz && window.cancelIdleCallback(Xz)
        }
      }), [tz]), tz
    }
    const OW = (0, Wz.memo)((function(zz) {
      var tz;
      let {
        show: sz,
        onOpen: Fz,
        onClose: Xz,
        variation: oz
      } = zz;
      const uz = (0, Wz.useRef)(null),
        Nz = (0, Wz.useRef)(null),
        bz = function(zz) {
          const [tz, sz] = (0, Wz.useState)(!0), [Fz, Xz] = (0, Wz.useState)(!1), Oz = (0, Wz.useRef)(null), oz = (0, Wz.useRef)(null), Uz = (0, vz.e)("_shield"), Kz = (0, Wz.useRef)(null), uz = (0, vz.e)("_health"), Nz = (0, Wz.useRef)(null);

          function bz(zz) {
            const tz = Date.now() + zz;
            tz < oz.current || (sz(!1), clearTimeout(Oz.current), oz.current = tz, Oz.current = setTimeout((() => {
              sz(!0)
            }), zz))
          }
          return (0, Wz.useEffect)((() => {
            bz(cs);
            const zz = wz.o.subscribe("requestingPlayVideoAd", (() => {
              bz(cs)
            }));
            return () => {
              clearTimeout(Oz.current), wz.o.unsubscribe(zz)
            }
          }), []), (0, Wz.useEffect)((() => {
            (Kz.current > Uz || Nz.current > uz) && bz(6e4), Kz.current = Uz, Nz.current = uz
          }), [Uz, uz]), (0, Wz.useEffect)((() => {
            let tz = null;
            return zz ? tz = setTimeout((() => {
              Xz(!0)
            }), 250) : Xz(!1), () => {
              clearTimeout(tz)
            }
          }), [zz]), tz && Fz
        }(sz);
      (0, Jz.h)(Ps.c, null);
      const Dz = (0, Ps.k)(),
        gz = Dz.some((zz => zz.panel)),
        Hz = (0, Cz.h)("inventory", (zz => null !== zz.chest && (null !== zz.chest.ironChest || MF(zz.chest.numSlots)))),
        Bz = XW(sz),
        Pz = XW(sz),
        [rz, Yz] = (0, Wz.useState)([]),
        xz = (0, Wz.useCallback)((zz => {
          Yz((tz => tz.filter((tz => tz.id !== zz))))
        }), []),
        mz = (0, Wz.useRef)(null),
        ez = (0, Wz.useRef)(0),
        Zz = (0, Wz.useCallback)((() => {
          mz.current && (ez.current = mz.current.scrollTop), Xz()
        }), [Xz]),
        Gz = (0, vz.e)("inventoryItemsMoveable"),
        Tz = (0, vz.e)("canCraft"),
        {
          clientEscMenuOptions: cz
        } = (0, Qz.h)(["clientEscMenuOptions"]),
        jz = (0, Wz.useRef)(null);
      jz.current || (jz.current = new FW(Uz.gameBridge.latest("inventory").player));
      const yz = jz.current,
        {
          draggedDomRef: Mz,
          draggedInfoRef: dz,
          specialItemRef: hz,
          hoverInfoDomRef: kz,
          longHoldSplitInfoRef: iz,
          currHoveredIdx: Lz,
          currHoveredDisplayInfo: lz,
          displayDraggedItemName: nz,
          forceRerenderIfVisible: az,
          removeDraggedInfoRef: qz,
          checkDraggedItemConsistencyWithInven: Sz,
          refreshDraggedAttributes: Vz,
          swapSlots: Rz,
          getPointerDownForIdx: pz,
          getPointerUpForIdx: fz,
          getSetHovering: Ez,
          setCurrHoveredDisplayInfo: zt,
          moveFollowerTo: tt
        } = sW({
          show: sz,
          close: Zz,
          canCraft: Tz,
          variation: oz,
          inventoryItemsMoveable: Gz,
          setCraftFlyAnims: Yz
        });
      (0, Wz.useEffect)((() => {
        const zz = !sz && null !== Uz.gameBridge.latest("inventory").chest;
        if (zz && Uz.gameBridge.send("closeChest", null), sz || (yz.clearMarks(), Ez(null)(!1)), zz) {
          Is.d.play("chestClose", 1).rate(.8 + .4 * Math.random())
        }
      }), [sz]), (0, Cz.d)("chestToggled", (zz => {
        if (zz ? Fz() : sz && Zz(), zz) {
          Is.d.play("chestOpen", 1).rate(.8 + .4 * Math.random())
        }
      }));
      const st = (0, St.n)();
      (0, Cz.d)("inventory", (zz => {
        let {
          player: tz
        } = zz;
        var Fz, Wz, Xz;
        (yz.update(tz, !sz && st.shown), hz.current) && (hz.current = (Wz = hz.current, Xz = null !== (Fz = tz[hz.current.idx]) && void 0 !== Fz ? Fz : null, fF(Wz, Xz) ? (Wz.attributes = Xz.attributes, null !== Xz.amount && Wz.amount > Xz.amount && (Wz.amount = Xz.amount), Wz) : null));
        Vz(), null !== Lz && Ez(Lz)(!0), az()
      })), (0, Wz.useEffect)((() => (Uz.gameBridge.send("setInventoryOpen", sz), () => {
        Uz.gameBridge.send("setInventoryOpen", !1)
      })), [sz]);
      const Ft = (zz, tz) => {
        if (zz === Gs.f) return void(zz => {
          const tz = hz.current;
          if (!tz || null === (0, es.g)(Uz.gameBridge.latest("inventory"), tz.idx)) return;
          const sz = zz ? Math.max(tz.amount, 1) : 1,
            Fz = tz.amount - sz;
          if (!Uz.gameBridge.send("removeInventoryItem", {
              slot: tz.idx,
              amount: sz,
              drop: !0
            })) return;
          const Wz = hz.current;
          Wz && (Wz.amount = Math.min(Wz.amount, Fz), Wz.amount <= 0 && (hz.current = null)), az()
        })(tz);
        const sz = null === zz ? null : (0, es.g)(Uz.gameBridge.latest("inventory"), zz);
        if (null !== sz) {
          var Fz, Wz, Xz;
          const Oz = tz && null !== (Fz = sz.amount) && void 0 !== Fz ? Fz : 1;
          Uz.gameBridge.send("removeInventoryItem", {
            slot: zz,
            amount: Oz,
            drop: !0
          }), zz === (null === (Wz = dz.current) || void 0 === Wz ? void 0 : Wz.idx) && (dz.current.amount -= Oz, dz.current.amount <= 0 && qz(), az()), zz === (null === (Xz = hz.current) || void 0 === Xz ? void 0 : Xz.idx) && (hz.current = null, az())
        }
      };
      (0, Cz.d)("inventoryDropRequested", (zz => {
        sz && Lz !== Gs.f && Ft(Lz, zz)
      }));
      const Wt = (zz, tz) => {
        let sz = tz;
        if (tz === Gs.f) {
          if (!hz.current) return;
          sz = hz.current.idx
        }
        const Fz = Rz(zz, sz);
        if (Fz && dz.current && (dz.current.idx === sz ? dz.current.idx = zz : dz.current.idx === zz && (dz.current.idx = sz)), Fz && tz === Gs.f) {
          const zz = (0, es.g)(Uz.gameBridge.latest("inventory"), sz);
          hz.current = zz ? {
            idx: sz,
            name: zz.name,
            attributes: zz.attributes,
            amount: zz.amount
          } : null
        }
        az()
      };
      (0, Cz.d)("numberKeyPressed", (zz => {
        null !== Lz && sz && Wt(zz - 1, Lz)
      })), (0, Wz.useEffect)((() => {
        sz || (hz.current = null, qz(), zt(null))
      }), [sz, qz, zt, hz]);
      const Xt = hz.current;
      (0, Wz.useEffect)((() => {
        Lz === Gs.f && Ez(Gs.f)(!0)
      }), [Xt, Lz, Ez]);
      const Ot = () => {
        Sz(), Vz(), az()
      };
      (0, Cz.d)("chestRefreshed", Ot), (0, Cz.d)("inventorySynced", Ot);
      const [ot, vt] = (0, Wz.useState)(new Map), Ut = null !== (tz = ot.get(oz)) && void 0 !== tz ? tz : null, Kt = (zz, tz) => {
        vt((sz => {
          const Fz = sz.get(zz);
          return Fz && Fz.name === tz.name && Fz.dK === tz.dK ? sz : new Map(sz).set(zz, tz)
        }))
      };
      (0, Jz.g)("craftingRecipesEdited", (() => {
        az()
      })), (0, Jz.g)(oF.e, (zz => {
        let {
          variation: tz,
          itemName: sz
        } = zz;
        Kt(tz, {
          name: sz,
          dK: 0
        })
      }));
      const [ut, Nt] = (0, Wz.useState)(null), [wt, Dt] = (0, Wz.useState)(null);
      (0, Cz.d)("enchantingTableOpened", (zz => {
        let {
          position: tz,
          blockName: sz
        } = zz;
        Nt(tz), Dt(sz)
      }));
      const [gt, Ht] = (0, Wz.useState)(""), [Bt, Pt] = (0, Wz.useState)(null);
      (0, Wz.useEffect)((() => {
        sz && mz.current && (mz.current.scrollTop = ez.current)
      }), [sz]);
      return (zz => {
        const tz = (0, Wz.useRef)(zz);
        tz.current = zz, (0, Wz.useEffect)((() => {
          if (!zz.show) return;
          const sz = (zz, sz, Fz, Wz) => {
              const {
                getPointerDownForIdx: Xz,
                getPointerUpForIdx: Oz
              } = tz.current;
              Xz(zz)(WW(sz, Fz, Wz)), Oz(zz)(WW(sz, Fz, Wz))
            },
            Fz = {
              primary: (zz, tz) => {
                sz(zz, tz, 0, !1)
              },
              secondary: (zz, tz) => {
                sz(zz, tz, 2, !1)
              },
              quickMove: (zz, tz) => {
                sz(zz, tz, 0, !0)
              },
              dropHeld: (zz, sz) => {
                tz.current.getPointerDownForIdx(Gs.e)(WW(sz, zz ? 0 : 2, !1))
              },
              dropSlot: (zz, sz) => {
                tz.current.dropFromIdx(zz, sz)
              },
              swapWithHotbar: (zz, sz) => {
                tz.current.swapWithHotbar(zz, sz)
              },
              cancel: () => {
                tz.current.removeDraggedInfoRef()
              },
              isHolding: () => !!tz.current.draggedInfoRef.current,
              hasItemAt: zz => {
                const {
                  draggedInfoRef: sz,
                  specialItemRef: Fz
                } = tz.current;
                if (zz === Gs.f) return !!Fz.current;
                const Wz = (0, es.g)(Uz.gameBridge.latest("inventory"), zz);
                return !!Wz && (0, ns.g)(zz, (0, es.c)(Wz), [sz.current, Fz.current]).shown
              },
              hover: (zz, sz) => {
                const {
                  moveFollowerTo: Fz,
                  getSetHovering: Wz
                } = tz.current;
                Fz(sz.clientX, sz.clientY), Wz(null !== zz && void 0 !== zz ? zz : void 0)(null !== zz, void 0, {
                  pageX: sz.clientX,
                  pageY: sz.clientY
                })
              },
              moveTo: zz => {
                tz.current.moveFollowerTo(zz.clientX, zz.clientY)
              },
              close: () => {
                tz.current.close()
              }
            };
          return (0, rs.l)(Fz)
        }), [zz.show])
      })({
        show: sz,
        close: Zz,
        draggedInfoRef: dz,
        specialItemRef: hz,
        getPointerDownForIdx: pz,
        getPointerUpForIdx: fz,
        getSetHovering: Ez,
        moveFollowerTo: tt,
        removeDraggedInfoRef: qz,
        dropFromIdx: Ft,
        swapWithHotbar: Wt
      }), (0, Wz.useEffect)((() => {
        wz.o.Yg("inventoryDraggedItemUpdated", {
          draggedInfo: dz.current,
          specialItemInfo: hz.current,
          setHovered: Ez,
          pointerDown: pz,
          pointerUp: fz,
          variation: Tz ? oz : void 0,
          craftFlyAnims: rz
        })
      })), (0, Kz.jsxs)(Az.d, {
        show: sz,
        style: {
          touchAction: sz ? "none" : void 0
        },
        children: [dz.current && (0, Kz.jsx)(ys, {
          draggedInfo: dz.current,
          toAddRef: Mz
        }), dz.current && nz && (0, Kz.jsx)(Ms, {
          className: "DraggedInvenItemName",
          displayInfo: tW(dz.current),
          domRef: null
        }), !dz.current && lz && (0, Kz.jsx)(Ms, {
          displayInfo: lz,
          domRef: kz
        }), iz.current && dz.current && (0, Kz.jsx)(ds, {
          info: iz.current,
          draggedInfo: dz.current
        }), rz.map((zz => (0, Kz.jsx)(Zs.d, {
          anim: zz,
          onComplete: xz
        }, zz.id))), (0, Kz.jsx)(Oz.b, {
          show: sz,
          className: "InventoryBackgroundScreen",
          globallyUniqueKey: "Inventory",
          close: Zz,
          togglePointerLock: !1,
          closeOnPressBackground: !1,
          preventContextMenu: !0,
          pointerDown: pz(Gs.e),
          pointerUp: fz(Gs.e),
          doGameplayStartStopOnShow: !0
        }), Bz && (0, Kz.jsxs)("div", {
          className: "EntireInventoryWrapper",
          children: [(0, Kz.jsx)("div", {
            ref: uz,
            className: "InventoryAdOuter",
            children: (0, Kz.jsx)(Cs.c, {
              info: {
                adType: "leaderboard",
                adId: 6,
                adAlias: "inventory"
              },
              sizeInfo: {
                parentRef: uz
              },
              verticalAlign: "start",
              showing: sz && bz,
              extraContrastBackgroundBox: "top",
              noFillShowBloxdAdProbability: 0,
              autoRefreshMode: "none"
            })
          }), (0, Kz.jsxs)("div", {
            className: "InventoryWrapper",
            children: [(0, Kz.jsxs)("div", {
              className: bt()("Inventory", {
                WithPanelButtons: gz,
                WideChestOpen: Hz
              }),
              children: [(0, Kz.jsx)("div", {
                className: "InventoryFiller"
              }), (0, Kz.jsx)(ms, {
                show: sz,
                buttons: Dz
              }), (0, Kz.jsxs)("div", {
                className: "InvenBody",
                children: [(0, Kz.jsx)(kF, {
                  variation: oz,
                  canCraft: Tz,
                  show: sz,
                  creativeMounted: Pz,
                  specialItemRef: hz,
                  draggedInfo: dz.current,
                  getSetHovering: Ez,
                  getPointerDownForIdx: pz,
                  getPointerUpForIdx: fz,
                  enchantingTablePosition: ut,
                  enchantingTableBlockName: wt,
                  selectedCraftable: Ut,
                  dispatchSelectedCraftable: zz => {
                    Kt(oz, zz)
                  },
                  creativeScrollDiv: mz,
                  creativeSearchVal: gt,
                  setCreativeSearchVal: Ht,
                  creativeCategory: Bt,
                  setCreativeCategory: Pt,
                  onCraft: function(zz, tz) {
                    let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    if (Sz(), (zz || sz.length > 0) && Yz((tz => {
                        const Fz = [...tz],
                          Wz = tz.filter((zz => "ingredient" === zz.kind)).length;
                        for (const zz of sz.slice(0, Math.max(0, 24 - Wz))) Fz.push({
                          id: (0, Zs.g)(),
                          ...zz,
                          to: zz.to
                        });
                        return zz && Fz.push({
                          id: (0, Zs.g)(),
                          ...zz,
                          to: (0, es.e)(zz.Nu)
                        }), Fz
                      })), null !== tz) {
                      var Fz;
                      const zz = Uz.gameBridge.latest("inventory");
                      (0, Iz.zb)(null === (Fz = (0, es.g)(zz, tz)) || void 0 === Fz ? void 0 : Fz.name) ? pz(tz)({
                        button: 0,
                        shiftKey: !0
                      }): Rz(tz, zz.selectedSlot)
                    }
                  }
                }), (0, Kz.jsx)(SF, {
                  draggedInfo: dz.current,
                  specialItemInfo: hz.current,
                  craftFlyAnims: rz,
                  getSetHovering: Ez,
                  getPointerDownForIdx: pz,
                  getPointerUpForIdx: fz,
                  variation: oz,
                  canCraft: Tz,
                  isNewSlot: zz => cz.showNewItemIndicator && yz.isNew(zz)
                })]
              })]
            }), (0, Kz.jsx)("div", {
              className: "InventoryAdOuter",
              children: (0, Kz.jsx)("div", {
                ref: Nz,
                className: "InventoryAd",
                children: (0, Kz.jsx)("div", {
                  className: "InventoryAdInner"
                })
              })
            })]
          })]
        })]
      })
    }));
    var oW = sz(1401),
      vW = sz(133);
    const UW = (0, Wz.memo)((function(zz) {
      let {
        show: tz,
        onOpen: sz,
        onClose: Fz
      } = zz;
      const Xz = (0, Wz.useRef)(0),
        oz = () => (0, oW.h)() && !(0, oW.n)() && Xz.current <= 2;
      tz = oz() && tz;
      const vz = () => {
        Xz.current++, Fz()
      };
      (0, Jz.g)("ctrlCrouchWithoutFullscreen", (() => {
        oz() && sz()
      })), (0, Jz.g)("displaymodeFullscreenChange", (zz => {
        tz && zz && vz()
      }));
      const Uz = "crazygames" === vW.t;
      return (0, Kz.jsx)(Oz.b, {
        close: vz,
        escDoesExit: !0,
        show: tz,
        togglePointerLock: !1,
        globallyUniqueKey: "CantCtrlCrouchIfNotFullscreenComp",
        children: (0, Kz.jsxs)("div", {
          className: "CantCtrlCrouchIfNotFullscreenComp SmallTextBold",
          children: [(0, Kz.jsx)("div", {
            className: "CantCtrlCrouchHeader",
            children: "Go fullscreen to crouch with ctrl"
          }), Uz && (0, Kz.jsx)("div", {
            className: "CantCtrlCrouchInstructions SmallTextLight",
            children: "Press the crazygames full screen button"
          }), (0, Kz.jsx)("div", {
            className: "CantCtrlCrouchSubtext SmallTextLight",
            children: "(Otherwise I can't stop CTRL+W closing the window!)"
          }), (0, Kz.jsxs)("div", {
            className: "CantCtrlCrouchButtonsContainer",
            children: [!Uz && (0, Kz.jsx)(bz.p, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                (0, oW.t)(), vz()
              },
              children: (0, Kz.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Go Fullscreen"
              })
            }), (0, Kz.jsx)(bz.H, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                vz()
              },
              children: (0, Kz.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Nevermind"
              })
            })]
          })]
        })
      })
    }));
    var KW = sz(3281),
      uW = sz(3301),
      NW = sz(1319),
      bW = sz(3260),
      wW = sz(1328),
      DW = sz(36049),
      gW = sz(3271),
      HW = sz(3275);

    function BW(zz, tz) {
      return (0, DW.f)(!0, zz, tz) ? () => {
        !async function(zz) {
          await bW.b.refresh();
          const {
            data: tz,
            failed: sz
          } = bW.b.getState();
          if (null === tz || sz) return;
          const Fz = bW.b.getExclusion(zz);
          if ("blocked" === Fz) return;
          const Wz = null === Fz;
          NW.NotificationProvider.showCustomPopup({
            body: tz => {
              const sz = sz => ({
                text: gW.i[sz].text,
                onClick: () => {
                  tz(), (0, HW.h)(sz, zz, null)
                }
              });
              return (0, Kz.jsx)(wW.i, {
                title: Wz ? "socialBar:ignoreOrBlockAfterReport" : "socialBar:blockAfterReport",
                textOpts: {
                  title: {
                    playerName: zz
                  }
                },
                secondary: Wz ? sz("ignore") : void 0,
                confirm: sz("block"),
                cancel: {
                  text: "socialBar:notNow",
                  onClick: tz
                },
                destructive: !0
              })
            },
            disableExitButton: !0,
            unlockPointerKey: "exclusionAfterReport"
          })
        }(zz)
      } : null
    }
    sz(3291);
    const PW = (0, Wz.memo)((function(zz) {
      let {
        show: tz,
        onOpen: sz,
        onClose: Fz
      } = zz;
      const [Xz, oz] = (0, Wz.useState)(""), [vz, uz] = (0, Wz.useState)(""), [Nz, bz] = (0, Wz.useState)(null), [wz, Dz] = (0, Wz.useState)(null), gz = (0, Cz.l)("hiddenPlayerNames"), Hz = {
        kind: "worldCodeLine",
        onSubmit: (zz, tz) => {
          Fz(), Uz.gameBridge.send("reportWorldCodeChat", {
            chatMsgId: wz,
            PO: zz,
            details: tz
          })
        }
      }, Bz = {
        kind: "player",
        shownPlayerName: (0, tt.g)(Xz, gz),
        onSubmit: (zz, tz) => {
          Fz(), (0, uW.c)({
            playerId: vz,
            playerName: Xz,
            chatMsgId: wz,
            policyId: zz,
            details: tz,
            onAccepted: BW(Xz, gz)
          })
        }
      };
      return (0, Jz.g)("OpenReportMenu", (zz => {
        let {
          playerEId: tz,
          playerName: Fz,
          RO: Wz,
          serverChatMsgId: Xz
        } = zz;
        uz(tz), oz(Fz), bz(Wz), Dz(Xz), sz()
      })), (0, Kz.jsx)(Oz.b, {
        show: tz,
        close: Fz,
        padShowsHud: !0,
        togglePointerLock: !1,
        escDoesExit: !0,
        className: "ReportBackgroundScreen",
        globallyUniqueKey: "MakeReportComponent",
        children: (0, Kz.jsx)("div", {
          className: "ReportPanel",
          children: tz && (0, Kz.jsx)(KW.d, {
            reported: null === vz ? Hz : Bz,
            chatMessage: Nz,
            inGame: !0,
            onCancel: Fz
          })
        })
      })
    }));
    var rW = sz(36263);
    const YW = (0, Wz.memo)((function(zz) {
      let {
        show: tz,
        onOpen: sz,
        onClose: Fz
      } = zz;
      const {
        t: Xz
      } = (0, Vz.B)(), [oz, vz] = (0, Wz.useState)(null), [uz, Nz] = (0, Wz.useState)(0);
      (0, Jz.g)("OpenDiscordReportBox", (zz => {
        Uz.gameBridge.send("requestDiscordReportKey", zz), Nz(0), sz()
      }));
      const wz = () => {
        Fz(), vz(null), Nz(0)
      };
      return (0, Jz.g)("setDiscordReportKey", (zz => {
        vz(zz)
      })), (0, Kz.jsx)(Oz.b, {
        show: tz,
        close: wz,
        padShowsHud: !0,
        togglePointerLock: !1,
        escDoesExit: !0,
        className: "ReportBackgroundScreen",
        globallyUniqueKey: "MakeDiscordReportComponent",
        children: (0, Kz.jsx)("div", {
          className: "ReportPanel",
          children: (0, Kz.jsx)(wW.i, {
            className: "ReportKeyBox",
            title: "report:discordReportTitle",
            subtitle: "report:discordReportDescription",
            confirm: {
              text: "report:openDiscord",
              onClick: () => {
                window.open(rW.c, "_blank", "noreferrer")
              },
              padMouseOnly: !0
            },
            cancel: {
              text: "general:cancel",
              onClick: wz
            },
            padStartsOn: "cancel",
            children: (0, Kz.jsxs)("div", {
              className: "ReportKeyRow",
              children: [(0, Kz.jsx)("div", {
                className: "ReportKeyInner",
                children: null !== oz && void 0 !== oz ? oz : Xz("report:loadingReportKey")
              }), (0, Kz.jsx)(bz.h, {
                className: "ReportKeyCopyButton",
                onClick: () => {
                  navigator.clipboard.writeText(oz).catch((zz => {
                    console.error("Failed to copy report key:", zz)
                  })), Nz(Date.now())
                },
                disabled: Date.now() - uz < 1e3 || !oz,
                children: Date.now() - uz < 1e3 ? Xz("general:copied") : Xz("general:copy")
              })]
            })
          })
        })
      })
    }));
    var xW = sz(1269);
    const mW = {
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
      JW = (0, Wz.memo)((function(zz) {
        let {
          show: tz,
          onOpen: sz,
          onClose: Fz
        } = zz;
        const [Xz, oz] = (0, Wz.useState)(null), vz = (0, Wz.useRef)(0), uz = (0, Wz.useRef)(null), {
          t: Nz
        } = (0, Vz.B)();
        (0, Jz.g)("EditCustomLobbyBlock", (zz => {
          let {
            pos: tz
          } = zz;
          oz(tz), null !== tz && sz(), uz.current.scrollTo(0, vz.current)
        }));
        const bz = zz => {
          Uz.gameBridge.send("setCustomLobbyBlock", {
            pos: Xz,
            blockName: zz
          }), Fz()
        };
        return (0, Kz.jsx)(Oz.b, {
          className: "CustomLobbyBlockEditorOuter",
          close: Fz,
          escDoesExit: !0,
          show: tz,
          togglePointerLock: !1,
          globallyUniqueKey: "CustomLobbyBlockEditor",
          children: (0, Kz.jsx)("div", {
            className: "CustomLobbyBlockEditor",
            ref: uz,
            onScroll: () => {
              vz.current = uz.current.scrollTop
            },
            children: (0, Kz.jsx)("div", {
              className: "CustomLobbyBlockGameContainer",
              children: Object.entries(mW).map((zz => {
                let [tz, sz] = zz;
                return (0, Kz.jsxs)("div", {
                  className: "CustomLobbyBlockGame",
                  children: [(0, Kz.jsx)("h2", {
                    className: "CustomLobbyBlockGameTitle",
                    children: Nz(tz)
                  }), (0, Kz.jsx)("div", {
                    className: "CustomLobbyBlockCategoryContainer",
                    children: Object.entries(sz).map((zz => {
                      let [tz, {
                        tooltip: sz,
                        blocks: Fz
                      }] = zz;
                      return (0, Kz.jsxs)("div", {
                        className: "CustomLobbyBlockCategory",
                        children: [(0, Kz.jsxs)("h3", {
                          className: "CustomLobbyBlockCategoryTitle",
                          children: [Nz(tz), (0, Kz.jsx)(qz.d, {
                            hoverInfo: Nz(sz),
                            className: "CustomLobbyBlockTooltip"
                          })]
                        }), (0, Kz.jsx)("div", {
                          className: "CustonLobbyBlockContainer",
                          children: Fz.map((zz => (0, Kz.jsx)(IW, {
                            blockName: zz,
                            selectBlock: bz
                          }, zz)))
                        })]
                      }, tz)
                    }))
                  })]
                }, tz)
              }))
            })
          })
        })
      })),
      IW = (0, Wz.memo)((function(zz) {
        var tz;
        let {
          blockName: sz,
          selectBlock: Fz
        } = zz;
        const Wz = (0, xF.b)(sz),
          Xz = null !== (tz = void 0 === Wz ? void 0 : (0, YF.displayNameOf)(Wz)) && void 0 !== tz ? tz : sz,
          Oz = void 0 === Wz ? void 0 : (0, YF.descriptionOf)(Wz);
        return (0, Kz.jsx)(qz.h, {
          tooltipInner: (0, Kz.jsxs)("div", {
            className: "CustomLobbyBlockNameTooltip",
            children: [(0, Kz.jsx)("div", {
              className: "CustomLobbyBlockName",
              children: (0, Kz.jsx)(mz.c, {
                text: Xz
              })
            }), Oz && (0, Kz.jsx)("div", {
              className: "CustomLobbyBlockDescription",
              children: (0, Kz.jsx)(mz.c, {
                text: Oz
              })
            })]
          }),
          children: (0, Kz.jsx)("div", {
            className: "CustomLobbyBlockButton",
            onClick: () => Fz(sz),
            children: (0, Kz.jsx)(xs.c, {
              itemName: sz,
              amount: 1
            })
          })
        }, sz)
      }));
    var CW = sz(2735),
      eW = sz(3919),
      ZW = sz(8891);

    function GW() {
      const zz = (0, Cz.l)("itemInfo");
      return (0, Wz.useMemo)((() => function(zz) {
        return {
          getDefaultItemStat(tz, sz) {
            var Fz;
            const Wz = zz[tz];
            return "description" === sz ? null === Wz || void 0 === Wz ? void 0 : Wz.description : null !== (Fz = null === Wz || void 0 === Wz ? void 0 : Wz.displayName) && void 0 !== Fz ? Fz : tz
          }
        }
      }(zz)), [zz])
    }
    const TW = (0, Wz.memo)((function(zz) {
        var tz, sz, Fz, Xz, oz, vz, Uz, uz, Nz, bz, wz, Dz, Hz, Bz, Pz, rz, Yz, xz, mz, Iz, Cz, ez, Zz;
        let {
          togglePointerLock: Gz,
          show: Tz,
          onOpen: cz,
          onClose: jz
        } = zz;
        const {
          t: Az
        } = (0, Vz.B)(), yz = GW(), Mz = (0, Wz.useRef)(null), dz = (0, Wz.useRef)(eW.e.MobHungerLevel.Hungry), hz = (0, Wz.useRef)(null), Qz = (0, CW.b)(), kz = (0, Wz.useRef)(null), iz = (0, Wz.useRef)(null), Lz = Mz.current;
        (0, Wz.useEffect)((() => {
          if (!Tz) return;
          const zz = ZW.f.openPet(kz.current);
          return iz.current = zz, () => {
            zz.close(), iz.current = null
          }
        }), [Tz]), (0, Wz.useEffect)((() => {
          Tz && Lz && iz.current.show(function(zz) {
            var tz;
            let {
              mobType: sz,
              mobSettings: Fz
            } = zz;
            return {
              mobType: sz,
              variation: null !== (tz = Fz.variation) && void 0 !== tz ? tz : "default",
              metaInfo: Fz.metaInfo,
              tamed: !(0, yF.G)(Fz.ownerDbId)
            }
          }(Lz))
        }), [Tz, Lz]), (0, Wz.useEffect)((() => {
          const zz = () => {
            var zz;
            const tz = eW.e.getMobHungerLevel(null === (zz = Mz.current) || void 0 === zz ? void 0 : zz.mobSettings.petInfo.lastFedAt);
            if (tz !== dz.current && (dz.current = tz, Qz()), hz.current) {
              var sz;
              const zz = Date.now(),
                tz = eW.e.getNextStateAt(null === (sz = Mz.current) || void 0 === sz ? void 0 : sz.mobSettings.petInfo.lastFedAt);
              let Fz = Math.floor((tz - zz) / 1e3),
                Wz = "";
              if (Fz > 3600) {
                Wz += Math.floor(Fz / 60 / 60).toString().padStart(2, "0"), Wz += ":", Fz %= 3600
              }
              const Xz = Fz % 60;
              Wz += Math.floor(Fz / 60).toString().padStart(2, "0"), Wz += ":", Wz += Xz.toString().padStart(2, "0"), hz.current.textContent = Wz
            }
          };
          zz();
          const tz = setInterval(zz, 250);
          return () => {
            clearInterval(tz)
          }
        }), [Lz, Qz]), (0, Jz.g)("showPetUi", (zz => {
          let {
            mobType: tz,
            mobSettings: sz
          } = zz;
          Mz.current = {
            mobType: tz,
            mobSettings: sz
          }, Tz || cz()
        }));
        const lz = null === (tz = Mz.current) || void 0 === tz ? void 0 : tz.mobSettings.health,
          nz = null === (sz = Mz.current) || void 0 === sz ? void 0 : sz.mobSettings.maxHealth,
          az = eW.e.getFriendshipLevelInfo(null !== (Fz = null === (Xz = Mz.current) || void 0 === Xz ? void 0 : Xz.mobSettings.petInfo.friendshipPoints) && void 0 !== Fz ? Fz : 0);
        return (0, Kz.jsx)(Oz.b, {
          className: "PetUIOuter",
          close: jz,
          escDoesExit: !0,
          show: Tz,
          togglePointerLock: Gz,
          forcePointerUnlock: Tz,
          globallyUniqueKey: "PetUI",
          children: (0, Kz.jsx)("div", {
            className: "PetUI",
            children: (0, Kz.jsxs)("div", {
              className: "PetUIContainer",
              children: [(0, Kz.jsxs)("div", {
                className: "PetUILeftSideContainer",
                children: [(0, Kz.jsx)("div", {
                  className: "PetUITitle",
                  children: null !== (oz = null === (vz = Mz.current) || void 0 === vz ? void 0 : vz.mobSettings.name) && void 0 !== oz ? oz : "Your Pet"
                }), (0, Kz.jsx)("div", {
                  className: "PetUICanvasContainer",
                  ref: kz
                })]
              }), (0, Kz.jsxs)("div", {
                className: "PetUIInformation",
                children: [!(0, yF.G)(null === (Uz = Mz.current) || void 0 === Uz ? void 0 : Uz.mobSettings.petInfo.friendshipPoints) && (0, Kz.jsxs)("div", {
                  className: "PetUIFriendshipPoints",
                  children: [(0, Kz.jsx)("div", {
                    className: "PetUIFriendshipPointsTitle",
                    children: Az("mobAiPlugin:friendshipTitle")
                  }), (0, Kz.jsx)("div", {
                    className: "PetUIFriendshipHearts",
                    children: eW.e.getIconsFromFriendshipPoints(null !== (uz = Mz.current.mobSettings.petInfo.friendshipPoints) && void 0 !== uz ? uz : 0).map(((zz, tz) => (0, Kz.jsx)("div", {
                      className: "PetUIFriendshipHeart",
                      children: (0, Kz.jsx)(xs.c, {
                        itemName: zz,
                        amount: 1
                      })
                    }, tz)))
                  }), (0, Kz.jsx)("div", {
                    className: "PetUIFriendshipBar",
                    children: (0, Kz.jsxs)("div", {
                      className: "PetUIFriendshipBarBackground",
                      children: [(0, Kz.jsx)("div", {
                        className: "PetUIFriendshipBarForeground",
                        style: {
                          transform: `scaleX(${az.totalPointsForNextLevel>0?Math.max(az.pointsIntoCurrentLevel/az.totalPointsForNextLevel,0):1})`,
                          transformOrigin: "left center"
                        }
                      }), (0, Kz.jsx)("div", {
                        className: "PetUIFriendshipBarText",
                        children: az.totalPointsForNextLevel > 0 ? ` ${Math.ceil(az.pointsIntoCurrentLevel)}/${Math.ceil(az.totalPointsForNextLevel)}` : Math.ceil(az.pointsIntoCurrentLevel)
                      })]
                    })
                  })]
                }), (0, Kz.jsxs)("div", {
                  className: "PetUIHungry",
                  children: [(0, Kz.jsx)("div", {
                    className: "PetUIHungryTitle",
                    children: Az("mobAiPlugin:hungerTitle")
                  }), (0, Kz.jsx)("div", {
                    className: "PetUIHungryCurrent",
                    children: eW.e.hungerLevelIcons[dz.current].map(((zz, tz) => (0, Kz.jsx)("div", {
                      className: "PetUIHungryIcon",
                      children: (0, Kz.jsx)(xs.c, {
                        itemName: zz,
                        amount: 1
                      })
                    }, tz)))
                  }), (0, Kz.jsxs)("div", {
                    className: "PetUIHungryLevel",
                    children: [Az(eW.e.hungerLevelTranslations[dz.current].translationKey), dz.current !== eW.e.MobHungerLevel.Starving && !(0, yF.G)(null === (Nz = Mz.current) || void 0 === Nz ? void 0 : Nz.mobSettings.petInfo.lastFedAt) && (0, Kz.jsxs)("div", {
                      className: "PetUIHungryNext",
                      children: [Az("mobAiPlugin:nextFeedIn", {
                        state: Az(eW.e.hungerLevelTranslations[dz.current + 1].translationKey)
                      }), ":", " ", (0, Kz.jsx)("span", {
                        ref: hz
                      })]
                    })]
                  })]
                }), (0, Kz.jsx)(qz.h, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, Kz.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: Az("mobAiPlugin:healthTooltip")
                  }),
                  children: (0, Kz.jsxs)("div", {
                    className: bt()("PetUIQuickStatsItem", {
                      Disabled: (0, yF.G)(lz) || (0, yF.G)(nz)
                    }),
                    children: [(0, Kz.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, Kz.jsx)(xs.c, {
                        itemName: "Health",
                        amount: 1
                      })
                    }), (0, Kz.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (0, yF.G)(lz) || (0, yF.G)(nz) ? "" : (0, Kz.jsxs)(Kz.Fragment, {
                        children: [Math.ceil(lz), (0, Kz.jsxs)("span", {
                          className: "PetUIQuickStatsValueMax",
                          children: ["/", Math.ceil(nz)]
                        })]
                      })
                    })]
                  })
                }), (0, Kz.jsx)(qz.h, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, Kz.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: Az("mobAiPlugin:attackDamageTooltip")
                  }),
                  children: (0, Kz.jsxs)("div", {
                    className: bt()("PetUIQuickStatsItem", {
                      Disabled: (0, yF.G)(null === (bz = Mz.current) || void 0 === bz ? void 0 : bz.mobSettings.attackDamage) || Mz.current.mobSettings.attackDamage <= 0
                    }),
                    children: [(0, Kz.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, Kz.jsx)(xs.c, {
                        itemName: "Iron Sword",
                        amount: 1
                      })
                    }), (0, Kz.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (wz = Mz.current) || void 0 === wz ? void 0 : wz.mobSettings.attackDamage) || ""
                    })]
                  })
                }), (0, Kz.jsx)(qz.h, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, Kz.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: Az("mobAiPlugin:secondaryAttackDamageTooltip")
                  }),
                  children: (0, Kz.jsxs)("div", {
                    className: bt()("PetUIQuickStatsItem", {
                      Disabled: (0, yF.G)(null === (Dz = Mz.current) || void 0 === Dz ? void 0 : Dz.mobSettings.secondaryAttackDamage) || Mz.current.mobSettings.secondaryAttackDamage <= 0
                    }),
                    children: [(0, Kz.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, Kz.jsx)(xs.c, {
                        itemName: "Stone Crossbow",
                        amount: 1
                      })
                    }), (0, Kz.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (Hz = Mz.current) || void 0 === Hz ? void 0 : Hz.mobSettings.secondaryAttackDamage) || ""
                    })]
                  })
                }), (0, Kz.jsx)(qz.h, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, Kz.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: Az("mobAiPlugin:speedTooltip")
                  }),
                  children: (0, Kz.jsxs)("div", {
                    className: bt()("PetUIQuickStatsItem", {
                      Disabled: (0, yF.G)(null === (Bz = Mz.current) || void 0 === Bz ? void 0 : Bz.mobSettings.baseRunningSpeed)
                    }),
                    children: [(0, Kz.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, Kz.jsx)(xs.c, {
                        itemName: "Speed",
                        amount: 1
                      })
                    }), (0, Kz.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: null !== (Pz = null === (rz = Mz.current) || void 0 === rz || null === (Yz = rz.mobSettings.baseRunningSpeed) || void 0 === Yz ? void 0 : Yz.toFixed(2)) && void 0 !== Pz ? Pz : ""
                    })]
                  })
                }), (0, Kz.jsx)(qz.h, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, Kz.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: Az("mobAiPlugin:saddledTooltip")
                  }),
                  children: (0, Kz.jsxs)("div", {
                    className: bt()("PetUIQuickStatsItem", {
                      Disabled: "Saddled" !== (null === (xz = Mz.current) || void 0 === xz ? void 0 : xz.mobSettings.metaInfo)
                    }),
                    children: [(0, Kz.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, Kz.jsx)(xs.c, {
                        itemName: "Saddle",
                        amount: 1
                      })
                    }), (0, Kz.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: "Saddled" === (null === (mz = Mz.current) || void 0 === mz ? void 0 : mz.mobSettings.metaInfo) ? (0, Kz.jsx)(gz.c, {
                        name: "check"
                      }) : ""
                    })]
                  })
                }), !(0, yF.G)(null === (Iz = Mz.current) || void 0 === Iz ? void 0 : Iz.mobSettings.tameInfo) && (0, Kz.jsxs)(Kz.Fragment, {
                  children: [(0, Kz.jsxs)("div", {
                    className: "PetUIFood",
                    children: [(0, Kz.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, Kz.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, Kz.jsx)(jW, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:superlikedFoodTitle"
                          },
                          description: null,
                          tintColor: eW.e.feedTextColours[eW.e.MobFoodType.Superliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, Kz.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: (0, Kz.jsx)("div", {
                          className: "PetUIFoodItem",
                          children: Mz.current.mobSettings.petInfo.superlikedFoodKnown ? (0, Kz.jsx)(cW, {
                            food: Mz.current.mobSettings.petInfo.superlikedFood
                          }) : (0, Kz.jsx)(jW, {
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
                    }), (0, Kz.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, Kz.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, Kz.jsx)(jW, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:likedFoodTitle"
                          },
                          description: null,
                          tintColor: eW.e.feedTextColours[eW.e.MobFoodType.Liked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, Kz.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (Cz = Mz.current.mobSettings.tameInfo.likedFoods) || void 0 === Cz ? void 0 : Cz.filter((zz => !Mz.current.mobSettings.petInfo.superlikedFoodKnown || zz !== Mz.current.mobSettings.petInfo.superlikedFood)).map((zz => (0, Kz.jsx)(cW, {
                          food: zz
                        }, zz)))
                      })]
                    }), (0, Kz.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, Kz.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, Kz.jsx)(jW, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:neutralFoodTitle"
                          },
                          description: null,
                          tintColor: eW.e.feedTextColours[eW.e.MobFoodType.Neutral],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, Kz.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (ez = Mz.current.mobSettings.tameInfo.neutralFoods) || void 0 === ez ? void 0 : ez.map((zz => (0, Kz.jsx)(cW, {
                          food: zz
                        }, zz)))
                      })]
                    }), (0, Kz.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, Kz.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, Kz.jsx)(jW, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:dislikedFoodTitle"
                          },
                          description: null,
                          tintColor: eW.e.feedTextColours[eW.e.MobFoodType.Disliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, Kz.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (Zz = Mz.current.mobSettings.tameInfo.dislikedFoods) || void 0 === Zz ? void 0 : Zz.map((zz => (0, Kz.jsx)(cW, {
                          food: zz
                        }, zz)))
                      })]
                    })]
                  }), Mz.current.mobSettings.tameInfo.levelUpBonuses && (0, Kz.jsx)("div", {
                    className: "PetUIFeedDrops",
                    children: Array.from({
                      length: eW.e.MAX_LEVEL + 1
                    }).map(((zz, tz) => {
                      const sz = tz;
                      if (0 === sz) return null;
                      const Fz = Mz.current.mobSettings.tameInfo.levelUpBonuses[sz],
                        Wz = eW.e.getBonusDisplayInfo(yz, Mz.current.mobSettings, Mz.current.mobType, Fz);
                      return (0, Kz.jsxs)("div", {
                        className: bt()("PetUIFeedDropContainer", {
                          Selected: sz === eW.e.getFriendshipLevelInfo(Mz.current.mobSettings.petInfo.friendshipPoints).level
                        }),
                        children: [(0, Kz.jsx)("div", {
                          className: "PetUIFeedDropHearts",
                          children: Array.from({
                            length: sz
                          }).map(((zz, tz) => (0, Kz.jsx)("div", {
                            className: "PetUIFeedDropHeart",
                            children: (0, Kz.jsx)(xs.c, {
                              itemName: "Friendship",
                              amount: 1
                            })
                          }, `${sz}-${tz}`)))
                        }), (0, Kz.jsx)("div", {
                          className: "PetUIFeedDropItems",
                          children: Wz && (0, Kz.jsx)(jW, {
                            icon: Wz.icon,
                            displayName: Wz.displayName,
                            description: Wz.description
                          })
                        })]
                      }, sz)
                    }))
                  })]
                })]
              })]
            })
          })
        })
      })),
      cW = (0, Wz.memo)((function(zz) {
        let {
          food: tz,
          includeDescription: sz = !1
        } = zz;
        const Fz = GW(),
          Wz = Fz.getDefaultItemStat(tz, "displayName"),
          Xz = Fz.getDefaultItemStat(tz, "description");
        return (0, Kz.jsx)(jW, {
          icon: tz,
          displayName: Wz,
          description: sz ? Xz : null
        })
      })),
      jW = (0, Wz.memo)((function(zz) {
        let {
          icon: tz,
          displayName: sz,
          description: Fz,
          tintColor: Wz,
          className: Xz = "PetUIFoodItem"
        } = zz;
        return (0, Kz.jsx)(qz.h, {
          delayHide: 0,
          delayShow: 0,
          tooltipInner: (0, Kz.jsxs)("div", {
            className: "PetUIFoodItemTooltip",
            children: [(0, Kz.jsx)("div", {
              className: "PetUIFoodItemName",
              children: (0, Kz.jsx)(mz.c, {
                text: sz
              })
            }), Fz && (0, Kz.jsx)("div", {
              className: "PetUIFoodItemDescription",
              children: (0, Kz.jsx)(mz.c, {
                text: Fz
              })
            })]
          }),
          children: (0, Kz.jsx)("div", {
            className: Xz,
            children: (0, Kz.jsx)(xs.c, {
              itemName: tz,
              amount: 1,
              tintColor: Wz
            })
          })
        })
      }));
    var AW = sz(3433),
      yW = sz(1120),
      MW = sz(1223),
      dW = sz(36283),
      hW = sz(36274),
      QW = sz(991),
      kW = sz(2257);

    function iW(zz) {
      let {
        peers: tz
      } = zz;
      const [sz, Fz] = (0, Wz.useState)(null), Xz = (0, Cz.l)("players");
      return (0, Kz.jsx)("div", {
        className: "CodeEditorPresence",
        children: tz.map((zz => {
          var tz, Wz;
          const Oz = null !== (tz = null === (Wz = Xz.byId[zz.playerId]) || void 0 === Wz ? void 0 : Wz.cosmetics) && void 0 !== tz ? tz : {};
          return (0, Kz.jsxs)("div", {
            className: bt()("PresenceIcon", {
              Viewer: !zz.isEditor
            }),
            style: {
              backgroundColor: zz.colour
            },
            onMouseEnter: () => {
              Fz(zz.playerId)
            },
            onMouseLeave: () => {
              Fz(null)
            },
            children: [(0, Kz.jsx)(kW.e, {
              cosmetics: Oz
            }), sz === zz.playerId && (0, Kz.jsx)("div", {
              className: "PresenceTooltip",
              style: {
                backgroundColor: zz.colour
              },
              children: zz.playerName
            })]
          }, zz.playerId)
        }))
      })
    }
    var LW = sz(616),
      lW = sz(36270),
      nW = sz(36044),
      aW = sz(36287);

    function qW(zz) {
      const tz = zz.split("/"),
        sz = [];
      for (let Fz = 1; Fz < tz.length; Fz++) sz.push(tz.slice(0, Fz).join("/"));
      return sz
    }

    function SW(zz) {
      return zz.slice(zz.lastIndexOf("/") + 1)
    }
    const VW = (0, Wz.memo)((function(zz) {
      var tz;
      let {
        files: sz,
        activePath: Fz,
        canEdit: Xz,
        directoryLinked: Oz,
        pluginNames: oz,
        activePluginName: vz,
        activePluginFile: Uz,
        onSelect: uz,
        onSelectPlugin: Nz,
        onCreate: wz,
        onRename: Dz,
        onRenameFolder: Hz,
        onDelete: Bz,
        onToggleDirectorySync: Pz,
        schematics: rz,
        onManageSchematic: Yz
      } = zz;
      const {
        t: xz
      } = (0, Vz.B)(), mz = null !== (tz = (0, hW.b)(sz)) && void 0 !== tz ? tz : MW.j, Jz = Object.keys(sz), [Iz, Cz] = (0, Wz.useState)((() => new Set)), ez = function(zz, tz, sz) {
        const Fz = {
          folders: new Map,
          files: []
        };
        for (const Oz of zz) {
          if (Oz === tz) continue;
          let zz = Fz;
          for (const tz of qW(Oz)) {
            let sz = zz.folders.get(tz);
            sz || (sz = {
              folders: new Map,
              files: []
            }, zz.folders.set(tz, sz)), zz = sz
          }
          zz.files.push(Oz)
        }
        const Wz = [];
        zz.includes(tz) && Wz.push({
          kind: "file",
          path: tz,
          name: SW(tz),
          depth: 0
        });
        const Xz = (zz, tz) => {
          const Fz = [...zz.folders.entries()].sort(((zz, tz) => {
            let [sz] = zz, [Fz] = tz;
            return sz.localeCompare(Fz)
          }));
          for (const [Oz, oz] of Fz) {
            const zz = sz.has(Oz);
            Wz.push({
              kind: "folder",
              path: Oz,
              name: SW(Oz),
              depth: tz,
              collapsed: zz
            }), zz || Xz(oz, tz + 1)
          }
          zz.files.sort(((zz, tz) => zz.localeCompare(tz)));
          for (const sz of zz.files) Wz.push({
            kind: "file",
            path: sz,
            name: SW(sz),
            depth: tz
          })
        };
        return Xz(Fz, 0), Wz
      }(Jz, mz, Iz);
      (0, Wz.useEffect)((() => {
        Cz((zz => {
          const tz = new Set(zz);
          let sz = !1;
          for (const Wz of qW(Fz)) sz = tz.delete(Wz) || sz;
          return sz ? tz : zz
        }))
      }), [Fz]);
      const Zz = Jz.length >= Xs.z,
        Gz = (zz, tz) => {
          if (zz.length > dW.z) return `Path must be at most ${dW.z} characters`;
          if (!(0, dW.x)(zz)) return "Use a relative .js, .ts, or .d.ts path, e.g. lib/util.js";
          if ("index.d.ts" === zz) return "index.d.ts cannot be the world-code entry";
          const Fz = !!tz && (0, hW.f)(tz, zz);
          if (tz && (0, hW.i)(tz) && !Fz) return `Cannot rename ${tz} (only swapping ${MW.j} and ${MW.l} is allowed)`;
          if (zz in sz) return "A file with that path already exists";
          if ((0, hW.i)(zz) && !Fz) {
            if ((zz === MW.j ? MW.l : MW.j) in sz) return `World code cannot have both ${MW.j} and ${MW.l}`
          }
          return null
        },
        Tz = zz => {
          NW.NotificationProvider.showInputPopup({
            title: "codeEditor:newFile",
            subtitle: "codeEditor:newFilePathHint",
            placeholderText: "lib/util.js",
            initialValue: void 0 === zz ? void 0 : `${zz}/`,
            submitText: "general:create",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: zz => Gz(zz)
          }).getResult().then((zz => {
            "notificationTornDown" !== zz && null !== zz && "submit" === zz.type && wz(zz.value)
          }))
        },
        cz = zz => {
          NW.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFile",
            subtitle: "codeEditor:newFilePathHint",
            initialValue: zz,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: tz => tz === zz ? "That is already the file's path" : Gz(tz, zz)
          }).getResult().then((tz => {
            "notificationTornDown" !== tz && null !== tz && "submit" === tz.type && Dz(zz, tz.value)
          }))
        },
        jz = zz => {
          const tz = zz => zz.replace(/\/+$/, "");
          NW.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFolder",
            subtitle: "codeEditor:renameFolderHint",
            initialValue: zz,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: sz => {
              const Fz = tz(sz);
              if (Fz === zz) return "That is already the folder's path";
              for (const [tz, Wz] of(0, hW.m)(Jz, zz, Fz)) {
                const zz = Gz(Wz, tz);
                if (null !== zz) return zz
              }
              return null
            }
          }).getResult().then((sz => {
            "notificationTornDown" !== sz && null !== sz && "submit" === sz.type && Hz(zz, tz(sz.value))
          }))
        },
        Az = zz => {
          NW.NotificationProvider.showPromptPopup({
            title: "codeEditor:deleteFile",
            subtitle: "codeEditor:deleteFileConfirm",
            textOpts: {
              subtitle: {
                path: zz
              }
            },
            confirmText: "general:delete",
            destructive: !0,
            cancelText: "general:cancel"
          }).getResult().then((tz => {
            !0 === tz && Bz(zz)
          }))
        };
      return (0, Kz.jsxs)("div", {
        className: "CodeEditorFileTree",
        children: [(0, Kz.jsxs)("div", {
          className: "FileTreeHeader",
          children: [(0, Kz.jsx)("span", {
            children: "Files"
          }), Xz && !Zz && (0, Kz.jsx)(bz.t, {
            className: "FileTreeHeaderButton",
            onClick: () => {
              Tz()
            },
            children: (0, Kz.jsx)(gz.c, {
              name: "plus"
            })
          })]
        }), (0, Kz.jsxs)("div", {
          className: "FileTreeList",
          children: [ez.map((zz => {
            const tz = zz.path;
            if ("folder" === zz.kind) return (0, Kz.jsx)(fW, {
              path: tz,
              name: zz.name,
              depth: zz.depth,
              collapsed: zz.collapsed,
              onToggle: () => {
                var zz;
                zz = tz, Cz((tz => {
                  const sz = new Set(tz);
                  return sz.delete(zz) || sz.add(zz), sz
                }))
              },
              canCreate: Xz && !Zz,
              canRename: Xz,
              onCreate: Tz,
              onRename: jz
            }, `folder:${tz}`);
            const Wz = (0, hW.i)(tz),
              Oz = MW.j in sz && MW.l in sz,
              oz = !Wz || Oz,
              Uz = null === vz && tz === Fz;
            return (0, Kz.jsx)(zX, {
              path: tz,
              label: zz.name,
              depth: zz.depth,
              isActive: Uz,
              canRename: Xz,
              onSelect: uz,
              onRename: cz,
              onDelete: Az,
              canDelete: oz && Xz
            }, tz)
          })), (0, Kz.jsxs)("div", {
            className: "FileTreeHeader Secondary",
            children: [(0, Kz.jsxs)("span", {
              children: ["Schematics (", Object.keys(rz).length, "/", aW.i, ")"]
            }), Xz && (0, Kz.jsx)(bz.t, {
              className: "FileTreeHeaderButton",
              disabled: Object.keys(rz).length >= aW.i,
              onClick: () => {
                Yz("")
              },
              children: (0, Kz.jsx)(gz.c, {
                name: "plus"
              })
            })]
          }), Object.keys(rz).sort().map((zz => (0, Kz.jsx)(zX, {
            path: zz,
            isActive: !1,
            canRename: !1,
            canDelete: !1,
            onSelect: Yz
          }, zz))), oz.length > 0 && (0, Kz.jsxs)(Kz.Fragment, {
            children: [(0, Kz.jsx)("div", {
              className: "FileTreeHeader Secondary",
              children: (0, Kz.jsx)("span", {
                children: "Plugins"
              })
            }), oz.map((zz => {
              var tz;
              const sz = lW.g[zz],
                Fz = Object.keys(null !== (tz = null === sz || void 0 === sz ? void 0 : sz.files) && void 0 !== tz ? tz : {
                  "index.ts": ""
                }).sort(((zz, tz) => "index.ts" === zz ? -1 : "index.ts" === tz ? 1 : zz.localeCompare(tz)));
              return (0, Kz.jsxs)("div", {
                children: [(0, Kz.jsx)("div", {
                  className: "FileTreePluginName",
                  children: (0, hW.v)(zz)
                }), Fz.map((tz => (0, Kz.jsx)(zX, {
                  path: tz,
                  nested: !0,
                  isActive: vz === zz && Uz === tz,
                  canRename: !1,
                  onSelect: () => {
                    Nz(zz, tz)
                  },
                  canDelete: !1
                }, tz)))]
              }, zz)
            }))]
          })]
        }), (0, Kz.jsx)("div", {
          className: "FileTreeFooter",
          children: (0, Kz.jsx)(bz.h, {
            className: "FileTreeFooterButton",
            onClick: Pz,
            children: xz(Oz ? "codeEditor:directorySyncUnlink" : "codeEditor:directorySyncLink")
          })
        })]
      })
    }));

    function RW(zz) {
      return zz > 0 ? {
        className: "Indented",
        style: {
          "--tree-depth": zz
        }
      } : {
        className: void 0,
        style: void 0
      }
    }

    function pW(zz) {
      let {
        depth: tz
      } = zz;
      return (0, Kz.jsx)(Kz.Fragment, {
        children: Array.from({
          length: tz
        }, ((zz, tz) => (0, Kz.jsx)("span", {
          className: "FileTreeIndentGuide",
          style: {
            "--guide-level": tz
          }
        }, tz)))
      })
    }

    function fW(zz) {
      let {
        path: tz,
        name: sz,
        depth: Fz,
        collapsed: Wz,
        onToggle: Xz,
        canCreate: Oz,
        canRename: oz,
        onCreate: vz,
        onRename: Uz
      } = zz;
      const uz = [];
      Oz && uz.push({
        icon: "plus",
        text: "codeEditor:newFile",
        onPointerDown: () => {
          vz(tz)
        }
      }), oz && uz.push({
        icon: "pen",
        text: "codeEditor:renameFolder",
        onPointerDown: () => {
          Uz(tz)
        }
      });
      const Nz = RW(Fz);
      return (0, Kz.jsxs)("div", {
        className: bt()("FileTreeItem FileTreeFolder", Nz.className),
        style: Nz.style,
        children: [(0, Kz.jsx)(pW, {
          depth: Fz
        }), (0, Kz.jsxs)("button", {
          type: "button",
          className: "FileTreeItemName",
          "aria-expanded": !Wz,
          onClick: Xz,
          children: [(0, Kz.jsx)(gz.c, {
            className: "FileTreeFolderCaret",
            name: Wz ? "caret-right" : "caret-down"
          }), (0, Kz.jsx)(gz.c, {
            className: "FileTreeFolderIcon",
            name: Wz ? "folder" : "folder-open"
          }), sz]
        }), (0, Kz.jsx)(EW, {
          path: tz,
          actions: uz
        })]
      })
    }

    function EW(zz) {
      let {
        path: tz,
        actions: sz
      } = zz;
      const Fz = (0, Wz.useRef)(null);
      return 0 === sz.length ? null : (0, Kz.jsxs)("div", {
        ref: Fz,
        className: "FileTreeItemActions",
        children: [(0, Kz.jsx)("button", {
          type: "button",
          className: "FileTreeActionMenuButton",
          "aria-label": `Actions for ${tz}`,
          children: (0, Kz.jsx)(gz.c, {
            name: "ellipsis"
          })
        }), (0, Kz.jsx)(nW.d, {
          triggerElementRef: Fz,
          options: sz
        })]
      })
    }

    function zX(zz) {
      let {
        path: tz,
        label: sz = tz,
        depth: Fz = 0,
        isActive: Wz,
        canRename: Xz,
        onSelect: Oz,
        onRename: oz,
        onDelete: vz,
        canDelete: Uz,
        nested: uz
      } = zz;
      const Nz = [];
      Xz && oz && Nz.push({
        icon: "pen",
        text: "codeEditor:rename",
        onPointerDown: () => {
          oz(tz)
        }
      }), Uz && vz && Nz.push({
        icon: "xmark",
        text: "general:delete",
        onPointerDown: () => {
          vz(tz)
        }
      });
      const bz = RW(Fz);
      return (0, Kz.jsxs)("div", {
        className: bt()("FileTreeItem", bz.className, {
          Active: Wz,
          Nested: uz
        }),
        style: bz.style,
        children: [(0, Kz.jsx)(pW, {
          depth: Fz
        }), (0, Kz.jsx)("button", {
          type: "button",
          className: "FileTreeItemName",
          title: sz === tz ? void 0 : tz,
          onClick: () => {
            Oz(tz)
          },
          children: sz
        }), (0, Kz.jsx)(EW, {
          path: tz,
          actions: Nz
        })]
      })
    }
    async function tX(zz) {
      const tz = (0, hW.b)(zz);
      if (!tz || "" === zz[tz].trim()) return [];
      const {
        collectImportedWorldCodePluginNames: Fz
      } = await Promise.all([sz.e(289), sz.e(290)]).then((() => sz(40591)));
      return (0, lW.d)(Fz(zz))
    }
    var sX = sz(36293);

    function FX(zz, tz) {
      const sz = Object.keys(zz),
        Fz = Object.keys(tz);
      if (sz.length !== Fz.length) return !1;
      for (const Wz of sz)
        if (!(Wz in tz) || zz[Wz] !== tz[Wz]) return !1;
      return !0
    }

    function WX(zz, tz) {
      const sz = [],
        Fz = [],
        Wz = [];
      for (const Xz of Object.keys(tz)) Xz in zz ? zz[Xz] !== tz[Xz] && Wz.push(Xz) : sz.push(Xz);
      for (const Xz of Object.keys(zz)) Xz in tz || Fz.push(Xz);
      return sz.sort(), Fz.sort(), Wz.sort(), {
        creates: sz,
        deletes: Fz,
        updates: Wz
      }
    }

    function XX(zz, tz) {
      var sz;
      const Fz = {
          ...zz
        },
        Wz = (0, hW.b)(tz),
        Xz = (0, hW.b)(Fz);
      if (MW.j in Fz && MW.l in Fz) {
        const zz = null !== Wz && void 0 !== Wz ? Wz : MW.l,
          sz = zz === MW.j ? MW.l : MW.j;
        var Oz;
        if (!(zz in Fz)) Fz[zz] = null !== (Oz = tz[zz]) && void 0 !== Oz ? Oz : "";
        return delete Fz[sz], Fz
      }
      var oz;
      return Wz && !(Wz in Fz) ? (Xz || (Fz[Wz] = null !== (oz = tz[Wz]) && void 0 !== oz ? oz : ""), Fz) : (Xz || Wz || (Fz[MW.j] = null !== (sz = Fz[MW.j]) && void 0 !== sz ? sz : "", delete Fz[MW.l]), Fz)
    }

    function OX(zz, tz) {
      const sz = (0, hW.b)(tz),
        Fz = MW.j in tz && MW.l in tz;
      return zz.filter((zz => !(0, hW.i)(zz) || (!!Fz || sz !== zz)))
    }
    async function oX(zz, tz, Fz) {
      const Wz = zz.getLobbyFiles(),
        Xz = (0, Xs.k)(Fz, (0, hW.p)(Wz, tz)),
        Oz = await zz.ensureJoined(tz),
        oz = (0, dW.D)(Oz.docKey);
      if (Oz.doc === Xz) return;
      for (let sz = 0; sz < 100; sz++) {
        const sz = zz.getCollabSnapshot();
        if (sz && (0, dW.D)(sz.docKey) === oz && zz.getActivePath() === tz) {
          if (zz.replaceActiveDoc(oz, Xz)) return;
          await (0, yF.K)(40)
        } else await (0, yF.K)(40)
      }
      const {
        ChangeSet: vz
      } = await sz.e(285).then((() => sz(40427))), Kz = zz.getCollabSnapshot(), uz = Kz && (0, dW.D)(Kz.docKey) === oz ? Kz : Oz;
      await async function(zz, tz, sz, Fz) {
        const Wz = zz.of({
            from: 0,
            to: sz.length,
            insert: Fz
          }, sz.length),
          Xz = JSON.stringify([{
            clientID: tz.clientID,
            changes: Wz.toJSON()
          }]),
          Oz = (0, dW.D)(tz.docKey);
        Xz.length <= dW.k ? Uz.gameBridge.send("sendCodeCollab", {
          Yt: dW.e.Push,
          xt: Oz,
          Jt: tz.version,
          Zt: Xz
        }) : await (0, yW.postJsonWithMetricsCookiesAndJsonResponse)(`${tz.httpConfig.gsUrl}/code/collab-push`, AW.n["collab-push"].toBuffer({
          gameNameWithVariation: tz.httpConfig.gameNameWithVariation,
          lobbyName: tz.httpConfig.lobbyName,
          docKey: Oz,
          version: tz.version,
          updates: Xz
        }), {
          retries: 0
        })
      }(vz, uz, uz.doc, Xz)
    }
    class vX {
      constructor(zz) {
        this.handle = null, this.lastSynced = {}, this.lastLobbySeen = null, this.pendingDocText = new Map, this.flushingDocText = !1, this.recheckingDisk = !1, this.stopWatch = null, this.lobbyPollTimer = null, this.running = !1, this.applying = !1, this.reconcileSettled = !1, this.reconcileInFlight = !1, this.linked = !1, this.scaffoldedPluginNamesKey = null, this.scaffoldingLocalTypes = Promise.resolve(), this.bridge = void 0, this.bridge = zz
      }
      async writeLobbyFiles(zz) {
        const tz = {
            ...this.bridge.getLobbyFiles()
          },
          sz = {
            ...tz
          };
        for (const {
            path: Xz,
            text: Oz
          }
          of zz) sz[Xz] = Oz;
        if (!zz.every((zz => {
            let {
              path: tz,
              text: Fz
            } = zz;
            return (0, Xs.k)(Fz, (0, hW.p)(sz, tz)) === Fz
          }))) return !1;
        const Fz = [];
        try {
          for (const {
              path: tz,
              text: sz
            }
            of zz) Fz.push(tz), tz in this.bridge.getLobbyFiles() || (this.bridge.createFile(tz, {
            focus: !1
          }), await this.bridge.waitForLobbyPath(tz, !0)), await oX(this.bridge, tz, sz)
        } catch (Wz) {
          for (const zz of Fz) zz in tz ? await oX(this.bridge, zz, tz[zz]).catch((tz => {
            console.error("World Code AI: couldn't put back", zz, tz)
          })) : this.bridge.deleteFile(zz);
          throw Wz
        }
        return !0
      }
      isLinked() {
        return this.linked
      }
      async linkFolder() {
        if (!this.bridge.canEditCode()) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncNeedEdit"), "warning"), !1;
        const zz = await (0, sX.t)(this.bridge.getStorageKey());
        return !!zz && (this.handle = zz, this.linked = !0, this.reconcileSettled = !1, await this.scaffoldLocalTypes(zz), !0)
      }
      async unlinkFolder() {
        const zz = this.bridge.getStorageKey();
        this.pendingDocText.clear(), this.stopContinuousSync(), this.handle = null, this.linked = !1, this.reconcileSettled = !1, this.lastSynced = {}, this.lastLobbySeen = null, this.scaffoldedPluginNamesKey = null, await (0, sX.c)(zz), this.bridge.onUnlinked()
      }
      async tryRestoreHandle() {
        const zz = this.bridge.getStorageKey(),
          tz = await (0, sX.p)(zz);
        return !!tz && (!!await (0, sX.f)(tz, "readwrite") && (this.handle = tz, this.linked = !0, await (0, sX.G)(zz, tz), await this.scaffoldLocalTypes(tz), !0))
      }
      scaffoldLocalTypes(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.bridge.getLobbyFiles();
        return this.scaffoldingLocalTypes = this.scaffoldingLocalTypes.then((async () => {
          try {
            const Fz = (await tX(tz)).map((zz => lW.g[zz])),
              Wz = Fz.map((zz => {
                var tz;
                return `${zz.name}:${Object.keys(null!==(tz=null===zz||void 0===zz?void 0:zz.files)&&void 0!==tz?tz:{}).sort().join(",")}`
              })).join("\0");
            if (this.scaffoldedPluginNamesKey === Wz) return;
            const {
              ensureLocalBloxdTypes: Xz
            } = await Promise.all([sz.e(81), sz.e(287), sz.e(292)]).then((() => sz(40599)));
            await Xz(zz, Fz), this.scaffoldedPluginNamesKey = Wz
          } catch (Fz) {
            console.error("[WorldCodeDirectorySync] Failed to scaffold local @bloxd types", Fz)
          }
        })), this.scaffoldingLocalTypes
      }
      async startWhenReady() {
        this.linked && this.handle && !this.running && !this.reconcileInFlight && this.bridge.getCollabSnapshot() && (this.reconcileSettled ? this.beginWatch() : await this.runInitialReconcileAndSync())
      }
      stopContinuousSync() {
        this.flushDocTextToDisk(), this.running = !1, this.stopWatch && (this.stopWatch(), this.stopWatch = null), this.lobbyPollTimer && (clearInterval(this.lobbyPollTimer), this.lobbyPollTimer = null)
      }
      async onLobbyFilesChanged(zz) {
        this.handle && await this.scaffoldLocalTypes(this.handle, zz), this.running && this.handle && !this.applying && await this.applyRemoteTreeToDisk(zz)
      }
      async onDocTextChanged(zz, tz) {
        if (!this.handle) return;
        const sz = [this.scaffoldLocalTypes(this.handle, {
          ...this.bridge.getLobbyFiles(),
          [zz]: tz
        })];
        this.running && (this.pendingDocText.set(zz, tz), sz.push(this.flushDocTextToDisk())), await Promise.all(sz)
      }
      async flushDocTextToDisk() {
        if (this.flushingDocText || this.applying || !this.handle || 0 === this.pendingDocText.size) return;
        const zz = this.handle;
        this.flushingDocText = !0, this.applying = !0;
        try {
          for (; this.pendingDocText.size > 0;) {
            const tz = [...this.pendingDocText];
            this.pendingDocText.clear();
            for (const [sz, Fz] of tz) this.lastSynced[sz] !== Fz && (await (0, sX.P)(zz, sz, Fz), this.lastSynced = {
              ...this.lastSynced,
              [sz]: Fz
            })
          }
        } catch (tz) {
          console.error("[WorldCodeDirectorySync] Failed to write remote doc to disk", tz), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
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
            await this.onDiskFilesChanged(await (0, sX.x)(this.handle))
          } catch (zz) {
            console.error("[WorldCodeDirectorySync] Failed to re-check disk after sync", zz)
          } finally {
            this.recheckingDisk = !1
          }
        }
      }
      async runInitialReconcileAndSync() {
        if (this.handle && !this.reconcileInFlight) {
          this.reconcileInFlight = !0;
          try {
            if (!await (0, sX.f)(this.handle, "readwrite")) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncPermissionDenied"), "warning"), void(this.reconcileSettled = !0);
            await this.bridge.pullLobbyFiles();
            const tz = this.bridge.getLobbyFiles(),
              sz = await (0, sX.x)(this.handle);
            for (const zz of Object.keys(tz).filter(aW.e)) {
              if (sz[zz] === sX.k) return void this.bridge.setMessage(`Move ${zz} outside the linked folder before syncing its placeholder.`, "warning");
              sz[zz] = aW.o
            }
            if (FX(sz, tz)) {
              for (const zz of Object.keys(tz).filter(aW.e)) await (0, sX.P)(this.handle, zz, aW.o);
              return this.lastSynced = {
                ...sz
              }, void this.beginWatch()
            }
            const Fz = await this.promptReconcile(function(zz) {
              return null !== (0, hW.b)(zz)
            }(sz));
            if ("unlink" === Fz) return void await this.unlinkFolder();
            if ("dismissed" === Fz) return void(this.reconcileSettled = !0);
            this.applying = !0;
            try {
              if ("local" === Fz) {
                if (!this.bridge.canEditCode()) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncNeedEdit"), "warning"), void(this.reconcileSettled = !0);
                await this.applyLocalTreeToLobby(sz);
                for (const zz of Object.keys(tz).filter(aW.e)) await (0, sX.P)(this.handle, zz, aW.o);
                this.lastSynced = {
                  ...await (0, sX.x)(this.handle)
                }
              } else await (0, sX.Q)(this.handle, tz), this.lastSynced = {
                ...tz
              }
            } catch (zz) {
              return console.error("[WorldCodeDirectorySync] Reconcile failed", zz), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning"), void(this.reconcileSettled = !0)
            } finally {
              this.applying = !1, this.settleAfterApplying()
            }
            this.beginWatch()
          } finally {
            this.reconcileInFlight = !1
          }
        }
      }
      async promptReconcile(zz) {
        return await new Promise((tz => {
          const sz = [{
              choice: "local",
              Button: bz.h,
              labelKey: "directorySyncUseLocal",
              descriptionKey: "directorySyncUseLocalDescription"
            }, {
              choice: "live",
              Button: bz.h,
              labelKey: "directorySyncUseLive",
              descriptionKey: "directorySyncUseLiveDescription"
            }, {
              choice: "unlink",
              Button: bz.h,
              labelKey: "directorySyncUseUnlink",
              descriptionKey: "directorySyncUseUnlinkDescription"
            }],
            Fz = (0, Kz.jsxs)("div", {
              className: "CodeEditorDirectorySyncPrompt",
              children: [(0, Kz.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptTitle",
                children: this.bridge.t("codeEditor:directorySyncDifferTitle")
              }), (0, Kz.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptBody",
                children: zz ? this.bridge.t("codeEditor:directorySyncDifferBody") : this.bridge.t("codeEditor:directorySyncLocalInvalidEntry")
              }), (0, Kz.jsx)("div", {
                className: "CodeEditorDirectorySyncOptions",
                children: sz.filter((tz => "local" !== tz.choice || zz)).map((zz => {
                  let {
                    choice: sz,
                    Button: Fz,
                    labelKey: Xz,
                    descriptionKey: Oz
                  } = zz;
                  return (0, Kz.jsxs)("div", {
                    className: "CodeEditorDirectorySyncOption",
                    children: [(0, Kz.jsx)(Fz, {
                      className: "CodeEditorButton",
                      onClick: () => {
                        (zz => {
                          Wz.tearDownNotification(), tz(zz)
                        })(sz)
                      },
                      children: this.bridge.t(`codeEditor:${Xz}`)
                    }), (0, Kz.jsx)("div", {
                      className: "CodeEditorDirectorySyncOptionDescription",
                      children: this.bridge.t(`codeEditor:${Oz}`)
                    })]
                  }, sz)
                }))
              })]
            }),
            Wz = NW.NotificationProvider.showCustomPopup({
              body: Fz,
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "worldCodeDirectorySync"
            });
          Wz.getResult().then((zz => {
            "notificationTornDown" === zz && tz("dismissed")
          }))
        }))
      }
      beginWatch() {
        this.handle && (this.stopContinuousSync(), this.reconcileSettled = !0, this.running = !0, this.stopWatch = (0, sX.J)(this.handle, (zz => {
          this.onDiskFilesChanged(zz)
        })), this.lobbyPollTimer = setInterval((() => {
          this.pollRemoteLobbyFiles()
        }), 2e3))
      }
      async pollRemoteLobbyFiles() {
        if (this.running && !this.applying) try {
          await this.bridge.pullLobbyFiles()
        } catch (zz) {
          console.error("[WorldCodeDirectorySync] Lobby poll failed", zz)
        }
      }
      async onDiskFilesChanged(zz) {
        if (!this.running || !this.handle || this.applying) return;
        if (!this.bridge.canEditCode()) return;
        const tz = this.bridge.getLobbyFiles();
        let sz = XX(zz, this.lastSynced);
        for (const Xz in tz)
          if ((0, aW.e)(Xz) && sz[Xz] === sX.k) return void this.bridge.setMessage("Move binary schematic files outside the linked folder. Add them through the Code Editor.", "warning");
        const Fz = Object.keys(sz).filter((zz => (0, aW.e)(zz) && !(zz in tz)));
        Fz.length > 0 && this.bridge.setMessage("Add or rename schematics in the Code Editor. Unknown local schematic files are not uploaded.", "warning");
        for (const Xz of Object.keys(tz).filter(aW.e))(Xz in sz || Fz.length > 0 || !(Xz in this.lastSynced)) && (sz[Xz] = aW.o);
        if (!FX(sz, zz)) {
          this.applying = !0;
          try {
            await this.persistEntryRepair(zz, sz), sz = XX(await (0, sX.x)(this.handle), this.lastSynced)
          } finally {
            this.applying = !1
          }
        }
        if (!FX(sz, this.lastSynced)) {
          this.applying = !0;
          try {
            const zz = WX(this.lastSynced, sz);
            if (await this.pushDiskDeltaToLobby(sz, tz), null !== this.lastLobbySeen)
              for (const sz of [...zz.creates, ...zz.updates, ...zz.deletes])(0, aW.e)(sz) || (sz in tz ? this.lastLobbySeen[sz] = tz[sz] : delete this.lastLobbySeen[sz]);
            this.lastSynced = {
              ...sz
            }
          } catch (Wz) {
            console.error("[WorldCodeDirectorySync] Disk\u2192lobby sync failed", Wz), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async persistEntryRepair(zz, tz) {
        if (this.handle) {
          for (const sz of Object.keys(zz)) sz in tz || await (0, sX.y)(this.handle, sz);
          for (const [sz, Fz] of Object.entries(tz)) zz[sz] !== Fz && await (0, sX.P)(this.handle, sz, Fz)
        }
      }
      async applyRemoteTreeToDisk(zz) {
        if (!this.handle) return;
        const tz = this.lastLobbySeen;
        if (null === tz) return void(this.lastLobbySeen = {
          ...zz
        });
        const sz = Object.keys(zz).filter((sz => tz[sz] !== zz[sz])),
          Fz = Object.keys(tz).filter((tz => !(tz in zz)));
        if (0 !== sz.length || 0 !== Fz.length) {
          this.applying = !0;
          try {
            for (const tz of [...Fz, ...sz]) try {
              if (tz in zz) await (0, sX.P)(this.handle, tz, zz[tz]), this.lastSynced = {
                ...this.lastSynced,
                [tz]: zz[tz]
              }, this.lastLobbySeen = {
                ...this.lastLobbySeen,
                [tz]: zz[tz]
              };
              else {
                await (0, sX.y)(this.handle, tz);
                const zz = {
                  ...this.lastSynced
                };
                delete zz[tz], this.lastSynced = zz;
                const sz = {
                  ...this.lastLobbySeen
                };
                delete sz[tz], this.lastLobbySeen = sz
              }
            } catch (Wz) {
              console.error("[WorldCodeDirectorySync] Lobby\u2192disk sync failed", Wz), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
            }
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async renameLobbyEntryIfSwitched(zz, tz) {
        const sz = function(zz, tz) {
          const sz = (0, hW.b)(zz),
            Fz = (0, hW.b)(tz);
          return sz && Fz && sz !== Fz ? {
            from: sz,
            to: Fz
          } : null
        }(zz, tz);
        return !!sz && (this.bridge.renameFile(sz.from, sz.to), await this.bridge.waitForLobbyPath(sz.to, !0), !0)
      }
      async applyLocalTreeToLobby(zz) {
        var tz;
        const sz = this.bridge.getActivePath();
        await this.renameLobbyEntryIfSwitched(this.bridge.getLobbyFiles(), zz);
        const Fz = this.bridge.getLobbyFiles(),
          Wz = WX(Fz, zz),
          Xz = OX(Wz.deletes, Fz);
        for (const Uz of Wz.creates)(0, aW.e)(Uz) || (this.bridge.createFile(Uz, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(Uz, !0));
        for (const Uz of Xz)(0, aW.e)(Uz) || (this.bridge.deleteFile(Uz), await this.bridge.waitForLobbyPath(Uz, !1));
        if (!(0, hW.b)(this.bridge.getLobbyFiles()) && !(0, hW.b)(zz)) {
          if (this.bridge.createFile(MW.j, {
              focus: !1
            }), await this.bridge.waitForLobbyPath(MW.j, !0), !this.handle) return;
          await (0, sX.P)(this.handle, MW.j, ""), zz = {
            ...zz,
            [MW.j]: ""
          }
        }
        const Oz = this.bridge.getLobbyFiles();
        for (const Uz of Object.keys(zz))(0, aW.e)(Uz) || Oz[Uz] !== zz[Uz] && await oX(this.bridge, Uz, zz[Uz]);
        const oz = this.bridge.getLobbyFiles(),
          vz = sz in oz ? sz : null !== (tz = (0, hW.b)(oz)) && void 0 !== tz ? tz : MW.j;
        await this.bridge.ensureJoined(vz)
      }
      async pushDiskDeltaToLobby(zz, tz) {
        const sz = this.bridge.getActivePath(),
          Fz = await this.renameLobbyEntryIfSwitched(tz, zz) ? this.bridge.getLobbyFiles() : tz,
          Wz = WX(this.lastSynced, zz),
          Xz = OX(Wz.deletes, Fz).filter((zz => zz in Fz));
        for (const Oz of Wz.creates)(0, aW.e)(Oz) || (Oz in this.bridge.getLobbyFiles() || (this.bridge.createFile(Oz, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(Oz, !0)), await oX(this.bridge, Oz, zz[Oz]));
        for (const Oz of Xz)(0, aW.e)(Oz) ? await this.bridge.deleteSchematic(Oz) : (this.bridge.deleteFile(Oz), await this.bridge.waitForLobbyPath(Oz, !1));
        for (const Oz of Wz.updates)(0, aW.e)(Oz) || await oX(this.bridge, Oz, zz[Oz]);
        sz in this.bridge.getLobbyFiles() && this.bridge.getActivePath() !== sz && await this.bridge.ensureJoined(sz)
      }
    }
    var UX = sz(1191);

    function KX() {
      const {
        websocketUrl: zz,
        gameNameWithVariation: tz,
        lobbyName: sz
      } = Uz.gameBridge.latest("connectedGame");
      return {
        gsUrl: UX.clientSideServerUrls.getHttpUrlFromWebSocketUrl(zz),
        gameNameWithVariation: tz,
        lobbyName: sz
      }
    }
    async function uX(zz) {
      const {
        gsUrl: tz,
        gameNameWithVariation: sz,
        lobbyName: Fz
      } = KX();
      return await (0, yW.postBinaryWithMetricsCookiesAndCustomResponse)(`${tz}/code/schematics`, AW.Gj.schematics.toBuffer({
        gameNameWithVariation: sz,
        lobbyName: Fz,
        request: JSON.stringify(zz)
      }), {
        retries: 0
      }, yW.HttpPayloadType.json)
    }
    var NX = sz(35873);

    function bX(zz) {
      let {
        path: tz,
        revision: sz
      } = zz;
      const [Fz, Xz] = (0, Wz.useState)(""), [Oz, oz] = (0, Wz.useState)(!1), [vz, Uz] = (0, Wz.useState)(0);
      return (0, Wz.useEffect)((() => {
        let zz = !1;
        return Xz(""), oz(!1), uX({
          action: "preview",
          path: tz
        }).then((tz => {
          zz || Xz(`data:image/webp;base64,${tz.previewBase64}`)
        })).catch((tz => {
          console.error("Could not load schematic preview", tz), zz || oz(!0)
        })), () => {
          zz = !0
        }
      }), [tz, sz, vz]), (0, Kz.jsxs)("div", {
        className: "SchematicPreview",
        children: [Fz && (0, Kz.jsx)("img", {
          src: Fz,
          alt: `Preview of ${tz}`
        }), !Fz && !Oz && (0, Kz.jsx)(ez.d, {
          loaderType: "Secondary"
        }), Oz && (0, Kz.jsxs)(Kz.Fragment, {
          children: [(0, Kz.jsx)("div", {
            className: "SmallTextLight",
            role: "status",
            children: "Preview unavailable."
          }), (0, Kz.jsx)(bz.h, {
            onClick: () => {
              Uz(vz + 1)
            },
            children: "Retry preview"
          })]
        })]
      })
    }

    function wX(zz) {
      var tz;
      let {
        initialPath: sz,
        onChanged: Fz,
        onClose: Xz
      } = zz;
      const Oz = "" === sz,
        [oz, vz] = (0, Wz.useState)(null),
        [Uz, uz] = (0, Wz.useState)(sz),
        [Nz, wz] = (0, Wz.useState)(!1),
        [Dz, gz] = (0, Wz.useState)(!1),
        [Hz, Bz] = (0, Wz.useState)(null),
        [Pz, rz] = (0, Wz.useState)(!1),
        [Yz, xz] = (0, Wz.useState)(""),
        mz = (0, Wz.useRef)(null),
        Jz = (0, Wz.useRef)(!1),
        Iz = (0, Wz.useRef)(!0);
      (0, Wz.useEffect)((() => (Iz.current = !0, uX({
        action: "state"
      }).then((zz => {
        Iz.current && vz(zz)
      })).catch((zz => {
        console.error("Could not load schematic assets", zz), Iz.current && xz("Could not load schematics. Reopen this panel to retry.")
      })), () => {
        Iz.current = !1
      })), []);
      const Cz = null === oz || void 0 === oz ? void 0 : oz.assets[sz],
        ez = Object.keys(null !== (tz = null === oz || void 0 === oz ? void 0 : oz.assets) && void 0 !== tz ? tz : {}).length,
        Zz = Uz.trim(),
        Gz = Zz ? (0, aW.e)(Zz) ? null !== oz && void 0 !== oz && oz.assets[Zz] && (Oz || Zz !== sz) ? "A schematic already uses that path." : "" : "Use a relative path ending in .bloxdschem." : "",
        Tz = !!Zz && !Gz && (Oz ? ez < aW.i : Zz !== sz),
        cz = Pz || !oz;
      async function jz(zz) {
        if (!Jz.current && Iz.current) {
          Jz.current = !0, rz(!0), xz("");
          try {
            const tz = await uX({
              ...zz,
              expectedRevision: oz.revision
            });
            Fz(tz), Iz.current && Xz()
          } catch (sz) {
            var tz;
            if (console.error("Schematic asset operation failed", sz), Iz.current) xz(sz instanceof nz.e ? null !== (tz = sz.errorMessageForUser) && void 0 !== tz ? tz : sz.message : String(sz));
            try {
              const zz = await uX({
                action: "state"
              });
              Fz(zz), Iz.current && vz(zz)
            } catch (Wz) {
              console.error("Could not refresh schematic assets", Wz)
            }
          } finally {
            Jz.current = !1, Iz.current && rz(!1)
          }
        }
      }
      return (0, Kz.jsxs)("div", {
        className: "WorldCodeSchematicPanel InputGenericPopup PromptGenericPopup FileTreePathPopup",
        children: [(0, Kz.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: Oz ? "New schematic" : Nz ? "Rename schematic" : "Schematic"
        }), Yz && (0, Kz.jsx)("div", {
          className: "InputGenericPopupError SmallTextLight",
          role: "alert",
          children: Yz
        }), !oz && !Yz && (0, Kz.jsx)("div", {
          className: "SmallTextLight",
          children: "Loading schematic\u2026"
        }), (0, Kz.jsxs)("fieldset", {
          disabled: cz,
          children: [Oz || Nz ? (0, Kz.jsxs)("label", {
            className: "SchematicField",
            children: [(0, Kz.jsx)("span", {
              className: "SmallTextBold",
              children: "Project path"
            }), (0, Kz.jsx)("div", {
              className: "InputGenericPopupInputRow",
              children: (0, Kz.jsx)(Ct.d, {
                className: "InputGenericPopupInput",
                defaultValue: sz,
                placeholderText: "maps/arena.bloxdschem",
                maxLength: 64,
                onValueChange: uz
              }, Nz ? "rename" : "create")
            })]
          }) : (0, Kz.jsx)("div", {
            className: "SchematicPath SmallTextBold",
            children: sz
          }), (Oz || Nz) && Gz && (0, Kz.jsx)("div", {
            className: "InputGenericPopupError SmallTextLight",
            role: "alert",
            children: Gz
          }), Oz ? (0, Kz.jsxs)(Kz.Fragment, {
            children: [ez >= aW.i && (0, Kz.jsxs)("div", {
              className: "SmallTextLight",
              children: ["Delete a schematic before adding another (", aW.i, " maximum)."]
            }), Dz ? (0, Kz.jsxs)(Kz.Fragment, {
              children: [(0, Kz.jsx)("div", {
                className: "SmallTextBold",
                children: "Choose from profile"
              }), (0, Kz.jsx)("div", {
                className: "SchematicProfilePicker",
                "aria-disabled": cz || !Tz,
                children: (0, Kz.jsx)(NX.c, {
                  loading: null === Hz,
                  schematics: null !== Hz && void 0 !== Hz ? Hz : [],
                  disableAutoExport: !0,
                  onSchematicPicked: zz => {
                    !cz && Tz && jz({
                      action: "profile",
                      path: Zz,
                      schematicId: zz.schematicId
                    })
                  }
                })
              }), (0, Kz.jsx)("div", {
                className: "InputGenericPopupButtons",
                children: (0, Kz.jsx)(bz.h, {
                  className: "InputGenericPopupButton",
                  disabled: cz,
                  onClick: () => {
                    gz(!1)
                  },
                  children: "Back"
                })
              })]
            }) : (0, Kz.jsxs)("div", {
              className: "InputGenericPopupButtons",
              children: [(0, Kz.jsx)(bz.h, {
                className: "InputGenericPopupButton",
                disabled: cz || !Tz,
                onClick: () => {
                  mz.current.click()
                },
                children: "Upload Schematic"
              }), (0, Kz.jsx)(bz.h, {
                className: "InputGenericPopupButton",
                disabled: cz || !Tz,
                onClick: () => {
                  !async function() {
                    if (gz(!0), xz(""), !Hz) try {
                      const zz = await (0, yW.postJsonWithMetricsCookiesAndJsonResponse)(`${UX.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
                        retries: 0,
                        minTimeout: 3e3
                      });
                      Iz.current && Bz(zz)
                    } catch (zz) {
                      console.error("Could not load profile schematics", zz), Iz.current && (gz(!1), xz("Could not load your schematics. Try again."))
                    }
                  }()
                },
                children: "Choose from profile"
              })]
            }), (0, Kz.jsx)("input", {
              ref: mz,
              type: "file",
              accept: ".bloxdschem",
              hidden: !0,
              onChange: zz => {
                var tz;
                const sz = null === (tz = zz.target.files) || void 0 === tz ? void 0 : tz[0];
                if (zz.target.value = "", !sz) return;
                if (sz.size > aW.j) return void xz("The schematic file is too large.");
                const Fz = Zz;
                rz(!0);
                const Wz = new FileReader;
                Wz.onload = () => {
                  jz({
                    action: "upload",
                    path: Fz,
                    base64: String(Wz.result).split(",")[1]
                  })
                }, Wz.onerror = () => {
                  console.error("Could not read schematic file", Wz.error), Iz.current && (rz(!1), xz("Could not read the selected file."))
                }, Wz.readAsDataURL(sz)
              }
            })]
          }) : Cz ? (0, Kz.jsxs)(Kz.Fragment, {
            children: [!Nz && (0, Kz.jsx)(bX, {
              path: sz,
              revision: oz.revision
            }), !Nz && (0, Kz.jsxs)("p", {
              className: "SchematicDetails SmallTextLight",
              children: [Math.ceil(Cz.byteSize / 1024), " KB \xb7 ", Cz.dimensions.join(" \xd7 "), " blocks"]
            }), (0, Kz.jsx)("div", {
              className: "InputGenericPopupButtons",
              children: Nz ? (0, Kz.jsxs)(Kz.Fragment, {
                children: [(0, Kz.jsx)(bz.h, {
                  className: "InputGenericPopupButton",
                  disabled: cz || !Tz,
                  onClick: () => {
                    jz({
                      action: "rename",
                      path: sz,
                      newPath: Zz
                    })
                  },
                  children: "Rename"
                }), (0, Kz.jsx)(bz.h, {
                  className: "InputGenericPopupButton",
                  disabled: cz,
                  onClick: () => {
                    wz(!1), uz(sz)
                  },
                  children: "Cancel"
                })]
              }) : (0, Kz.jsxs)(Kz.Fragment, {
                children: [(0, Kz.jsx)(bz.h, {
                  className: "InputGenericPopupButton",
                  disabled: cz,
                  onClick: () => {
                    wz(!0)
                  },
                  children: "Rename"
                }), (0, Kz.jsx)(bz.H, {
                  className: "InputGenericPopupButton",
                  disabled: cz,
                  onClick: () => {
                    jz({
                      action: "remove",
                      path: sz
                    })
                  },
                  children: "Delete"
                })]
              })
            })]
          }) : oz && (0, Kz.jsx)("div", {
            className: "SmallTextLight",
            children: "This schematic is no longer in the project."
          })]
        })]
      })
    }

    function DX(zz) {
      if ("string" !== typeof zz) return null;
      try {
        const tz = JSON.parse(zz);
        return (0, hW.j)(null === tz || void 0 === tz ? void 0 : tz.worldCodeEngine) && "boolean" === typeof tz.engineLocked && function(zz) {
          if (null === zz) return !0;
          const tz = null === zz || void 0 === zz ? void 0 : zz.location;
          return "string" === typeof(null === zz || void 0 === zz ? void 0 : zz.reason) && (null === tz || "string" === typeof(null === tz || void 0 === tz ? void 0 : tz.path) && Number.isInteger(tz.line))
        }(tz.fallback) ? tz : (console.error("[CodeCollab] Malformed engine settings", zz), null)
      } catch (tz) {
        return console.error("[CodeCollab] Failed to parse engine settings", tz), null
      }
    }

    function gX(zz) {
      let {
        fallback: tz,
        onGoToLine: sz
      } = zz;
      const {
        t: Fz
      } = (0, Vz.B)(), {
        location: Wz
      } = tz;
      return (0, Kz.jsxs)("div", {
        className: "CodeEditorEngineNotice",
        children: [Fz("codeEditorEngine:notice", {
          reason: tz.reason
        }), Wz && (0, Kz.jsxs)(Kz.Fragment, {
          children: [" ", (0, Kz.jsx)("button", {
            type: "button",
            className: "CodeEditorEngineNoticeLink",
            onClick: () => {
              sz(Wz.path, Wz.line)
            },
            children: Fz("codeEditorEngine:goToLine", {
              line: String(Wz.line)
            })
          })]
        })]
      })
    }
    var HX = sz(4562);

    function BX(zz) {
      let {
        label: tz,
        hint: sz,
        checked: Fz,
        onChange: Wz
      } = zz;
      return (0, Kz.jsxs)("label", {
        className: "CodeEditorMoreOptionsRow CodeEditorOptionSwitch",
        children: [(0, Kz.jsxs)("span", {
          className: "CodeEditorOptionSwitchText",
          children: [(0, Kz.jsx)("span", {
            children: tz
          }), (0, Kz.jsx)("span", {
            className: "CodeEditorOptionSwitchHint",
            children: sz
          })]
        }), (0, Kz.jsx)("span", {
          className: "SwitchContainer",
          children: (0, Kz.jsx)(rt.e, {
            className: "SwitchCheckbox",
            checked: Fz,
            onChange: zz => {
              Wz(zz.target.checked)
            },
            disabled: !1
          })
        })]
      })
    }

    function PX(zz) {
      let {
        engine: tz,
        onSetEngine: sz,
        aiHints: Fz,
        variation: Wz
      } = zz;
      const {
        t: Xz
      } = (0, Vz.B)();
      return (0, Kz.jsxs)("div", {
        className: "CodeEditorMoreOptions",
        children: [(0, Kz.jsx)("div", {
          className: "CodeEditorMoreOptionsTitle",
          children: Xz("codeEditor:moreOptions")
        }), tz && (0, Kz.jsx)(BX, {
          label: Xz("codeEditorEngine:toggle"),
          hint: Xz("codeEditorEngine:toggleHint"),
          checked: "ses" === tz,
          onChange: zz => {
            sz(zz ? "ses" : "quickjs")
          }
        }), Fz && (0, Kz.jsx)(BX, {
          label: Xz("codeEditorAiHints:toggle"),
          hint: Xz("codeEditorAiHints:toggleHint"),
          checked: Fz.shown,
          onChange: Fz.setShown
        }), Wz && (0, Kz.jsxs)("div", {
          className: "CodeEditorMoreOptionsRow",
          children: [(0, Kz.jsx)(HX.h, {
            label: "codeEditor:variationLabel",
            children: (0, Kz.jsx)(Ct.d, {
              className: "CodeEditorVariationInput",
              maxLength: 32,
              defaultValue: Wz.name,
              onValueChange: Wz.setName,
              onEnter: Wz.reload
            })
          }), (0, Kz.jsx)(bz.y, {
            className: "CodeEditorButton",
            onClick: Wz.reload,
            children: Xz("codeEditor:reloadAsVariation")
          })]
        })]
      })
    }
    var rX = sz(36297),
      YX = sz(36303);

    function xX(zz) {
      let {
        close: tz
      } = zz;
      const {
        t: sz
      } = (0, Vz.B)(), Fz = [{
        name: sz("codeEditor:welcomeTutorial"),
        tutorial: "welcome"
      }, {
        name: sz("codeEditor:docsOverviewTutorial"),
        tutorial: "docsOverview"
      }, {
        name: sz("codeEditorAiTutorial:tutorialName"),
        tutorial: "aiHelperOverview"
      }];
      return (0, Kz.jsxs)("div", {
        className: "PromptGenericPopup CodeEditorTutorialsPopup",
        children: [(0, Kz.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: sz("codeEditor:tutorialsTitle")
        }), (0, Kz.jsx)("div", {
          className: "CodeEditorTutorialsList",
          children: Fz.map((zz => (0, Kz.jsx)(bz.h, {
            className: "CodeEditorTutorialsListButton",
            onClick: () => {
              tz(), (0, YX.I)(zz.tutorial)
            },
            children: zz.name
          }, zz.tutorial)))
        })]
      })
    }
    var mX = sz(119),
      JX = sz(36037),
      IX = sz(8283);
    const CX = (0, Wz.forwardRef)((function(zz, tz) {
      let {
        value: sz,
        onChange: Fz,
        onSubmit: Wz,
        placeholder: Xz,
        maxLength: Oz,
        rows: oz = 2,
        allowNewLines: vz = !1,
        onKeyDown: Uz,
        before: uz
      } = zz;
      const {
        t: Nz
      } = (0, Vz.B)(), wz = "" !== sz.trim(), Dz = () => {
        wz && Wz()
      };
      return (0, Kz.jsxs)("div", {
        className: "PanelPromptInputRow",
        children: [uz, (0, Kz.jsx)("textarea", {
          ref: tz,
          className: "PanelPromptInput",
          value: sz,
          maxLength: Oz,
          rows: oz,
          placeholder: Xz,
          spellCheck: !1,
          autoComplete: "off",
          onChange: zz => {
            Fz(vz ? zz.target.value : zz.target.value.replace(/\r?\n/g, " "))
          },
          onKeyDown: zz => {
            zz.nativeEvent.isComposing || 229 === zz.nativeEvent.keyCode ? zz.stopPropagation() : "Escape" !== zz.key && (zz.stopPropagation(), null === Uz || void 0 === Uz || Uz(zz), zz.defaultPrevented || "Enter" !== zz.key || vz && zz.shiftKey || (zz.preventDefault(), Dz()))
          }
        }), (0, Kz.jsx)(bz.h, {
          className: "PanelPromptSend",
          disabled: !wz,
          onClick: Dz,
          ariaLabel: Nz("codeEditorPanels:send"),
          children: (0, Kz.jsx)(gz.c, {
            name: "arrow-up"
          })
        })]
      })
    }));

    function eX(zz) {
      let {
        inputRef: tz
      } = zz;
      const {
        t: sz
      } = (0, Vz.B)(), {
        messages: Fz,
        reportedPlayers: Xz,
        channel: Oz
      } = (0, IX.m)(), [oz, vz] = (0, Wz.useState)(""), Uz = (0, Wz.useRef)({
        stepsBack: 0,
        text: ""
      });
      return (0, Kz.jsxs)("div", {
        className: "CodeEditorChatPanel",
        children: [(0, Kz.jsx)("div", {
          className: "CodeEditorChatHeader",
          children: (0, Kz.jsx)("span", {
            className: "CodeEditorChatTitle",
            children: sz("codeEditorChat:title")
          })
        }), 0 === Fz.length ? (0, Kz.jsx)("div", {
          className: "CodeEditorChatEmpty",
          children: sz("codeEditorChat:empty")
        }) : (0, Kz.jsx)("div", {
          className: "ChatMessages CodeEditorChatMessages",
          children: (0, Kz.jsx)(JX.c, {
            messages: Fz,
            reportedPlayers: Xz
          })
        }), (0, Kz.jsx)(CX, {
          ref: tz,
          value: oz,
          onChange: vz,
          onSubmit: () => {
            (0, IX.l)(oz), vz(""), Uz.current = {
              stepsBack: 0,
              text: ""
            }
          },
          maxLength: Iz.Uc,
          rows: 1,
          placeholder: Oz ? sz("touchOnly" === (0, mX.c)() ? "codeEditorChat:channelPlaceholderTouch" : "codeEditorChat:channelPlaceholder", {
            channel: Oz.channelName
          }) : sz("codeEditorChat:placeholder"),
          before: Oz && (0, Kz.jsx)("button", {
            type: "button",
            className: "CodeEditorChatChannel",
            style: {
              backgroundColor: Oz.elementBgColor
            },
            onClick: () => {
              IX.c.selectNextChannel(), tz.current.focus()
            },
            children: (0, Kz.jsx)(mz.c, {
              text: Oz.elementContent
            })
          }),
          onKeyDown: zz => {
            const tz = oz === Uz.current.text;
            if ("ArrowUp" !== zz.key && "ArrowDown" !== zz.key || !tz && "" !== oz) "Tab" === zz.key && !zz.shiftKey && Oz && (zz.preventDefault(), IX.c.selectNextChannel());
            else {
              zz.preventDefault();
              const sz = tz ? Uz.current.stepsBack : 0;
              Uz.current = (0, IX.h)(sz + ("ArrowUp" === zz.key ? 1 : -1)), vz(Uz.current.text)
            }
          }
        })]
      })
    }
    var ZX = sz(36309);

    function GX(zz) {
      let {
        PN: tz,
        worldPanel: sz,
        closeWorld: Fz,
        aiShown: Wz,
        defaultWidth: Xz,
        children: Oz
      } = zz;
      const oz = "hidden" !== tz;
      return (0, Kz.jsx)(ZX.e, {
        side: "right",
        defaultSize: oz ? "max(18rem, 40%)" : Xz,
        covers: "expanded" === tz ? "always" : oz || Wz ? "narrow" : void 0,
        children: (0, Kz.jsxs)("div", {
          className: bt()("CodeEditorRightColumn", {
            WorldExpanded: "expanded" === tz
          }),
          children: [oz && (0, Kz.jsx)(ZX.e, {
            side: "top",
            onClose: Fz,
            children: sz
          }), Oz]
        })
      })
    }
    var TX = sz(1904),
      cX = sz(2020),
      jX = sz(1279);
    class AX {
      constructor(zz, tz, sz) {
        this.measure = zz, this.apply = tz, this.now = sz, this.last = null, this.resizedAt = -1 / 0, this.resizing = !1, this.stretchedAt = null
      }
      get rect() {
        var zz, tz;
        return null !== (zz = null === (tz = this.last) || void 0 === tz ? void 0 : tz.rect) && void 0 !== zz ? zz : null
      }
      sync() {
        const zz = function(zz) {
          const tz = Math.round(zz.left),
            sz = Math.round(zz.top);
          return {
            left: tz,
            top: sz,
            width: Math.round(zz.right) - tz,
            height: Math.round(zz.bottom) - sz
          }
        }(this.measure());
        if (zz.width <= 0 || zz.height <= 0) return;
        const tz = this.now(),
          sz = this.last;
        let Fz = {
          width: zz.width,
          height: zz.height
        };
        null === sz || zz.width === sz.rect.width && zz.height === sz.rect.height || (this.resizing = tz - this.resizedAt < 100, this.resizedAt = tz);
        const Wz = null !== sz && this.resizing && tz - this.resizedAt < 100 && (zz.width !== sz.bufferSize.width || zz.height !== sz.bufferSize.height);
        Wz && (this.stretchedAt ??= tz), Wz && tz - this.stretchedAt < 250 ? Fz = sz.bufferSize : this.stretchedAt = null;
        const Xz = {
          rect: zz,
          bufferSize: Fz
        };
        var Oz, oz;
        null !== sz && (oz = Xz, (Oz = sz).rect.left === oz.rect.left && Oz.rect.top === oz.rect.top && Oz.rect.width === oz.rect.width && Oz.rect.height === oz.rect.height && Oz.bufferSize.width === oz.bufferSize.width && Oz.bufferSize.height === oz.bufferSize.height) || (this.last = Xz, this.apply(Xz))
      }
      stop() {
        null !== this.last && (this.last = null, this.apply(null))
      }
    }

    function yX(zz) {
      const {
        style: tz
      } = document.documentElement;
      for (const [sz, Fz] of [
          ["--worldViewLeft", null === zz || void 0 === zz ? void 0 : zz.left],
          ["--worldViewTop", null === zz || void 0 === zz ? void 0 : zz.top],
          ["--worldViewWidth", null === zz || void 0 === zz ? void 0 : zz.width],
          ["--worldViewHeight", null === zz || void 0 === zz ? void 0 : zz.height]
        ]) void 0 === Fz ? tz.removeProperty(sz) : tz.setProperty(sz, `${Fz}px`)
    }
    var MX = sz(1664),
      dX = sz(1917);

    function hX(zz, tz) {
      (0, Wz.useEffect)((() => {
        if (!zz) return;
        const sz = zz => {
          var sz;
          "Escape" === zz.key ? (zz.stopPropagation(), zz.preventDefault(), tz()) : (sz = zz.code, Object.entries(os.x).some((zz => {
            let [tz, Fz] = zz;
            const Wz = dX.f[tz];
            return Wz.includes("ui") && !Wz.includes("core") && Fz.includes(sz)
          })) && !(0, MX.isTextEntry)(zz.target) && zz.preventDefault())
        };
        window.addEventListener("keydown", sz, !0);
        const Fz = (0, kz.n)(tz);
        return () => {
          window.removeEventListener("keydown", sz, !0), Fz()
        }
      }), [zz, tz])
    }

    function QX() {
      return (0, xW.j)().some((zz => zz !== xW.c))
    }

    function kX(zz, tz) {
      return zz.map((zz => tz ? String(zz) : zz.toFixed(1))).join(", ")
    }

    function iX(zz) {
      let {
        freeCamera: tz,
        picking: sz,
        hovered: Fz
      } = zz;
      const {
        t: Xz
      } = (0, Vz.B)(), Oz = (0, Wz.useRef)(null), oz = (0, Wz.useRef)(null);
      return (0, Wz.useEffect)((() => {
        const zz = (zz, tz) => {
            zz.textContent !== tz && (zz.textContent = tz)
          },
          sz = () => {
            const sz = tz ? Uz.gameBridge.lookup("freeCameraPos", null) : null;
            zz(Oz.current, kX(null !== sz && void 0 !== sz ? sz : Uz.gameBridge.lookup("localPos", null), !1));
            const Fz = Uz.gameBridge.lookup("targetedBlockPos", null);
            zz(oz.current, Fz ? kX(Fz, !0) : "-")
          };
        return sz(), (0, jX.v)(sz)
      }), [tz]), (0, Kz.jsxs)("div", {
        className: "WorldPanelCoordinates",
        children: [(0, Kz.jsx)("span", {
          className: "WorldPanelCoordsLabel",
          children: Xz(tz ? "codeEditorWorld:camera" : "codeEditorWorld:position")
        }), (0, Kz.jsx)("span", {
          ref: Oz
        }), (0, Kz.jsx)("span", {
          className: "WorldPanelCoordsLabel",
          children: Xz("codeEditorWorld:lookingAt")
        }), (0, Kz.jsx)("span", {
          ref: oz,
          hidden: sz
        }), sz && (0, Kz.jsxs)(Kz.Fragment, {
          children: [(0, Kz.jsx)("span", {
            children: Fz ? kX(Fz.pos, !0) : "-"
          }), Fz && (0, Kz.jsx)("span", {
            className: "WorldPanelCoordsName",
            children: Fz.name
          })]
        })]
      })
    }
    var LX = sz(36311);

    function lX(zz) {
      const tz = zz.currentTarget.getBoundingClientRect();
      return {
        x: (zz.clientX - tz.left) / tz.width,
        y: (zz.clientY - tz.top) / tz.height
      }
    }

    function nX(zz) {
      const [tz, sz] = (0, Wz.useState)(!1), [Fz, Xz] = (0, Wz.useState)(null), Oz = (0, Wz.useRef)(null);
      (0, Wz.useEffect)((() => {
        if (!tz) return;
        let zz = null,
          sz = null,
          Fz = 1 / 0;
        const Wz = (0, jX.s)((tz => {
          Fz += tz;
          const Wz = Oz.current;
          if (Wz === sz && Fz < 100) return;
          sz = Wz, Fz = 0;
          const oz = Wz && Uz.gameBridge.lookup("blockAtViewPoint", Wz);
          var vz, Kz;
          (vz = oz) === (Kz = zz) || null !== vz && null !== Kz && vz.name === Kz.name && (0, LX.e)(vz.pos, Kz.pos) && (0, LX.e)(vz.normal, Kz.normal) || (zz = oz, Xz(oz), Uz.gameBridge.send("setBlockHighlight", oz))
        }));
        return () => {
          Wz(), null !== zz && Uz.gameBridge.send("setBlockHighlight", null), Xz(null)
        }
      }), [tz]);
      const oz = (0, Wz.useCallback)((() => {
        sz(!1)
      }), []);
      hX(tz, oz);
      const vz = {
        onPointerMove: zz => {
          Oz.current = lX(zz)
        },
        onPointerLeave: () => {
          Oz.current = null
        },
        onClick: Fz => {
          if (!tz) return;
          const Wz = Uz.gameBridge.lookup("blockAtViewPoint", lX(Fz));
          null !== Wz && (sz(!1), zz(Wz.pos))
        }
      };
      return {
        picking: tz,
        setPicking: sz,
        hovered: Fz,
        slotHandlers: vz
      }
    }

    function aX(zz) {
      Uz.gameBridge.send("setFreeCameraMovesFly", zz)
    }

    function qX(zz) {
      let {
        shown: tz,
        setShown: sz,
        canInsertCode: Fz
      } = zz;
      const {
        t: Xz
      } = (0, Vz.B)(), {
        isTouchScreen: Oz
      } = (0, Qz.h)(["isTouchScreen"]), oz = (0, Wz.useRef)(null), Uz = (0, Wz.useCallback)((() => {
        var zz;
        null === (zz = oz.current.closest(".CodeEditorBg").querySelector(".cm-content")) || void 0 === zz || zz.focus()
      }), []), {
        control: uz,
        take: Nz,
        release: Dz,
        blocked: Hz
      } = function(zz) {
        const [tz, sz] = (0, Wz.useState)("none"), Fz = (0, Wz.useRef)("none"), [Xz, Oz] = (0, Wz.useState)(!1), oz = zz => {
          Fz.current = zz, sz(zz)
        }, vz = (0, Wz.useCallback)((() => {
          const tz = Fz.current;
          "none" !== tz && (oz("none"), (0, xW.n)(xW.c), "mouse" === tz && zz())
        }), [zz]), Uz = (0, Wz.useCallback)((zz => {
          QX() ? Oz(!0) : (oz("mouse" === zz && "touchOnly" !== (0, mX.c)() ? "mouse" : "touch"), (0, xW.m)(xW.c))
        }), []);
        return (0, Jz.g)("pointerLockUpdate", (zz => {
          zz && "touch" === Fz.current && "touchOnly" !== (0, mX.c)() ? oz("mouse") : zz || "mouse" !== Fz.current || vz()
        })), (0, Wz.useEffect)((() => {
          if (!Xz) return;
          const zz = () => {
            QX() || Oz(!1)
          };
          return zz(), (0, xW.f)(zz)
        }), [Xz]), hX("none" !== tz, vz), (0, Wz.useEffect)((() => {
          if ("none" === tz) return;
          const zz = zz => {
            (0, MX.isTextEntry)(zz.target) && vz()
          };
          return document.addEventListener("focusin", zz), () => {
            document.removeEventListener("focusin", zz)
          }
        }), [tz, vz]), (0, Wz.useEffect)((() => (document.addEventListener("pointerlockerror", vz), () => {
          document.removeEventListener("pointerlockerror", vz)
        })), [vz]), (0, Wz.useEffect)((() => () => {
          "none" !== Fz.current && null !== Qz.b.get("openInGameMenuName") && (0, xW.n)(xW.c)
        }), []), {
          control: tz,
          take: Uz,
          release: vz,
          blocked: Xz
        }
      }(Uz), Bz = (0, cX.c)(ZX.h);
      (0, Wz.useEffect)((() => {
        "touch" !== uz || "shown" !== tz || Bz ? "none" === uz && "expanded" === tz && sz("shown") : sz("expanded")
      }), [uz, Bz]),
      function(zz, tz) {
        const sz = (0, Wz.useRef)(tz);
        sz.current = tz;
        const Fz = (0, Wz.useRef)(null);
        (0, Wz.useLayoutEffect)((() => {
          const tz = new AX((() => zz.current.getBoundingClientRect()), (zz => {
            var tz;
            "none" !== sz.current && yX(null !== (tz = null === zz || void 0 === zz ? void 0 : zz.rect) && void 0 !== tz ? tz : null), (0, jX.B)().setGameView(zz)
          }), (() => performance.now()));
          Fz.current = tz, tz.sync();
          const Wz = (0, jX.o)((() => {
            tz.sync()
          }));
          return () => {
            Wz(), Qz.b.set({
              worldPanelHud: null
            }), tz.stop()
          }
        }), [zz]), (0, Wz.useLayoutEffect)((() => {
          Fz.current.sync(), yX("none" === tz ? null : Fz.current.rect), Qz.b.set({
            worldPanelHud: tz
          })
        }), [tz])
      }(oz, "touch" === uz ? "touchControls" : "none");
      const {
        picking: Pz,
        setPicking: rz,
        hovered: Yz,
        slotHandlers: xz
      } = nX((zz => {
        wz.o.Yg("CodeEditorInsertText", {
          text: `[${zz.join(", ")}]`,
          focus: !Oz
        }), (0, ZX.h)() && sz("hidden")
      })), mz = function() {
        const {
          allowed: zz,
          movesFly: tz
        } = (0, Cz.l)("freeCamera"), sz = (0, Wz.useRef)(tz), Fz = (0, Wz.useRef)(tz);
        return Fz.current !== tz && (Fz.current = tz, sz.current = tz), (0, Wz.useEffect)((() => () => {
          sz.current && aX(!1)
        }), []), {
          allowed: zz,
          on: tz,
          toggle: () => {
            sz.current = !tz, aX(!tz)
          }
        }
      }(), Iz = (0, vz.e)("hideCoordinates"), ez = (0, Cz.l)("localPlayerAlive"), Zz = !ez || Hz;
      (0, Wz.useEffect)((() => {
        ez || Dz()
      }), [ez, Dz]), (0, Wz.useEffect)((() => {
        !Zz && Fz || rz(!1)
      }), [Zz, Fz, rz]);
      const Gz = mz.on ? bz.p : bz.h,
        Tz = Pz ? bz.p : bz.h;
      return (0, Kz.jsxs)("div", {
        className: "WorldPanel",
        children: [(0, Kz.jsxs)("div", {
          className: "WorldPanelHeader",
          children: [(0, Kz.jsx)("span", {
            className: "WorldPanelTitle",
            children: Xz("codeEditorWorld:title")
          }), "touch" === uz && !Bz && (0, Kz.jsx)(bz.h, {
            className: "WorldPanelButton",
            onClick: Dz,
            children: Xz("codeEditorWorld:backToCode")
          }), !Zz && mz.allowed && !Oz && (0, Kz.jsx)(qz.h, {
            tooltipInner: Xz("codeEditorWorld:freeCameraTooltip"),
            hoverOnly: !0,
            children: (0, Kz.jsx)(Gz, {
              className: "WorldPanelButton",
              ariaPressed: mz.on,
              ariaLabel: Xz("codeEditorWorld:freeCamera"),
              onClick: mz.toggle,
              children: (0, Kz.jsx)(gz.c, {
                name: "video"
              })
            })
          }), !Zz && Fz && (0, Kz.jsx)(qz.h, {
            tooltipInner: Xz("codeEditorWorld:pickTooltip"),
            hoverOnly: !0,
            children: (0, Kz.jsxs)(Tz, {
              className: "WorldPanelButton",
              ariaPressed: Pz,
              onClick: () => {
                Dz(), rz(!Pz)
              },
              children: [(0, Kz.jsx)(gz.c, {
                name: "crosshairs"
              }), Xz("codeEditorWorld:pick")]
            })
          })]
        }), !Iz && (0, Kz.jsx)(iX, {
          freeCamera: mz.on,
          picking: Pz,
          hovered: Yz
        }), (0, Kz.jsxs)("div", {
          ref: oz,
          className: bt()("WorldPanelSlot", {
            TouchControl: "touch" === uz,
            Picking: Pz
          }),
          onPointerDown: zz => {
            0 !== zz.button || Zz || Pz || Nz(zz.pointerType)
          },
          ...xz,
          children: [!Zz && !Pz && (0, Kz.jsx)("div", {
            className: "WorldPanelCrosshair",
            children: "+"
          }), !Zz && "touch" !== uz && (0, Kz.jsxs)("div", {
            className: "WorldPanelHint",
            children: [Pz && Xz(Oz ? "codeEditorWorld:tapToPick" : "codeEditorWorld:clickToPick"), !Pz && "none" === uz && !mz.on && Xz(Oz ? "codeEditorWorld:tapToPlay" : "codeEditorWorld:clickToPlay"), !Pz && "none" === uz && mz.on && Xz("codeEditorWorld:clickToFly"), "mouse" === uz && (0, Kz.jsxs)(Kz.Fragment, {
              children: [(0, Kz.jsx)(TX.b, {
                noaAction: "OpenLobbyLeaderboard"
              }), Xz("codeEditorWorld:backToCode")]
            })]
          }), Zz && (0, Kz.jsxs)("div", {
            className: "WorldPanelWaiting",
            children: [(0, Kz.jsx)("span", {
              children: Xz(ez ? "codeEditorWorld:gameWaiting" : "codeEditorWorld:died")
            }), (0, Kz.jsx)(bz.h, {
              onClick: kz.h,
              children: Xz("codeEditorWorld:toGame")
            })]
          })]
        })]
      })
    }
    var SX = sz(4636);

    function VX(zz) {
      let {
        PN: tz,
        setWorld: sz,
        toggleWorld: Fz,
        aiShown: Wz,
        closeAi: Xz
      } = zz;
      const {
        t: Oz
      } = (0, Vz.B)(), oz = Wz ? "ai" : "hidden" !== tz ? "world" : "code", vz = [{
        value: "code",
        label: Oz("codeEditorWorld:codePane")
      }, {
        value: "world",
        label: Oz("codeEditorWorld:title")
      }];
      Wz && vz.push({
        value: "ai",
        label: Oz("codeEditorWorld:aiPane")
      });
      return (0, Kz.jsx)("div", {
        className: "CodeEditorPaneSwitch",
        children: (0, Kz.jsx)(SX.b, {
          options: vz,
          value: oz,
          onChange: zz => {
            "world" !== zz ? (Wz && Xz(), sz("hidden")) : "hidden" === tz ? Fz() : Xz()
          },
          ariaLabel: Oz("codeEditorWorld:panes"),
          keepsFocus: !0
        })
      })
    }
    var RX = sz(36314);
    class pX {
      constructor(zz, tz) {
        this.storageKey = zz, this.defaultValue = tz, this.value = null, this.listeners = new Set, this.get = () => {
          if (null === this.value) {
            const zz = jz.f.getItem(this.storageKey);
            this.value = "boolean" === typeof zz ? zz : this.defaultValue
          }
          return this.value
        }, this.set = zz => {
          this.value = zz, jz.f.setItem(this.storageKey, zz);
          for (const tz of this.listeners) tz(zz)
        }
      }
      subscribe(zz) {
        return this.listeners.add(zz), () => {
          this.listeners.delete(zz)
        }
      }
    }
    const fX = new pX("codeEditorLightMode", !1),
      EX = new pX("codeEditorAiHints", !0);

    function zO(zz) {
      const [tz, sz] = (0, Wz.useState)(zz.get);
      return (0, Wz.useEffect)((() => {
        const tz = zz.subscribe(sz);
        return sz(zz.get()), tz
      }), [zz]), [tz, zz.set]
    }
    var tO = sz(36317),
      sO = sz(36322),
      FO = sz(36326);
    const WO = (0, Wz.lazy)((() => Promise.all([sz.e(289), sz.e(285), sz.e(288), sz.e(284), sz.e(81), sz.e(287), sz.e(286), sz.e(283)]).then((() => sz(40415))))),
      XO = (0, Wz.lazy)((() => Promise.all([sz.e(76), sz.e(79), sz.e(80), sz.e(78), sz.e(291)]).then((() => sz(40572))))),
      OO = (0, Wz.lazy)((() => Promise.all([sz.e(289), sz.e(288), sz.e(81), sz.e(79), sz.e(80), sz.e(78), sz.e(287), sz.e(286), sz.e(77), sz.e(88)]).then((() => sz(40578)))));

    function oO(zz) {
      return Uz.gameBridge.query("worldCodeAiChunk", zz)
    }

    function vO() {
      return Uz.gameBridge.query("worldCodeAiGameState", null)
    }

    function UO(zz) {
      const {
        gsUrl: tz,
        gameNameWithVariation: sz,
        lobbyName: Fz
      } = KX();
      return (0, yW.postJsonWithMetricsCookiesAndJsonResponse)(`${tz}/code/get-lobby-code`, AW.Gj["get-lobby-code"].toBuffer({
        gameNameWithVariation: sz,
        lobbyName: Fz,
        path: zz
      }), {
        retries: 1
      })
    }
    let KO = !1;
    const uO = [],
      NO = {
        message: "You do not have permission to view the code.",
        type: "warning"
      },
      bO = (0, Wz.memo)((function(zz) {
        var tz, sz;
        let {
          show: Fz,
          onOpen: Xz,
          onClose: oz,
          isLobbyCode: uz
        } = zz;
        const Nz = (0, Wz.useRef)(""),
          [Dz, Hz] = (0, Wz.useState)(null),
          Bz = (0, Wz.useRef)(uz),
          [Pz, rz] = (0, Wz.useState)({
            message: null,
            type: null
          }),
          [Yz, xz] = (0, Wz.useState)(""),
          mz = Pz.message ? Pz : {
            message: Yz,
            type: "warning"
          },
          [Zz, Gz] = (0, Wz.useState)(!0),
          [Tz, jz] = zO(fX),
          [Az, yz] = zO(EX),
          [Mz, dz] = (0, Wz.useState)(!1),
          [hz, iz] = (0, Wz.useState)(!1),
          Lz = (0, Wz.useRef)(null),
          lz = (0, Wz.useRef)(!1);
        (0, Wz.useEffect)((() => {
          var zz;
          hz && lz.current && (lz.current = !1, null === (zz = Lz.current) || void 0 === zz || zz.focus())
        }), [hz]);
        const nz = (0, RX.c)(),
          az = (0, Wz.useRef)(null),
          Sz = (0, Wz.useRef)(null),
          {
            openInGameMenuName: Rz,
            openEverythingMenuName: pz
          } = (0, Qz.h)(["openInGameMenuName", "openEverythingMenuName"]),
          fz = zz => {
            Fz && (az.current = zz, It.current = !0)
          };
        (0, Jz.g)("OpenReportMenu", (() => {
          fz("Iw")
        })), (0, Jz.g)("OpenStoreFromCodeEditor", (() => {
          fz("store")
        })), (0, Wz.useEffect)((() => {
          const zz = az.current;
          null === zz || "Iw" === zz && ("makeReport" === Rz || "makeDiscordReport" === Rz) || "store" === zz && null !== pz || (az.current = null, null === Rz && null === pz ? uz ? (Sz.current = ss.current, wz.o.Yg("EditLobbyCode", Dz)) : wz.o.Yg("EditCodeBlock", {
            pos: Dz,
            canChangePos: Bz.current
          }) : (0, YX.E)())
        }), [Rz, pz, uz, Dz]), (0, Wz.useEffect)((() => {
          if (Fz) return () => {
            Sz.current = null
          }
        }), [Fz]);
        const [Ez, zt] = function() {
          const [zz, tz] = (0, Wz.useState)(KO);
          return (0, Jz.g)("CodeEditorAiHelperShown", (zz => {
            tz(zz)
          })), [zz, (0, Wz.useCallback)((zz => {
            KO = zz, wz.o.Yg("CodeEditorAiHelperShown", zz)
          }), [])]
        }(), [tt, st] = (0, Wz.useState)(null), [Ft, Wt] = (0, Wz.useState)([]), [Xt, Ot] = (0, Wz.useState)(0), [ot, vt] = (0, Wz.useState)(0), [Ut, Kt] = (0, Wz.useState)(""), ut = (0, Wz.useRef)(null), [Nt, wt] = (0, Wz.useState)(uz ? FO.e : null), Dt = uz || null !== Dz, gt = (0, vz.e)("canEditCode"), Ht = (0, vz.e)("canUseDevCreativeItems"), Bt = (0, rX.j)("welcome"), Pt = (0, rX.j)("docsOverview"), rt = Pt ? "docsOverview" : "welcome", Yt = null !== Pt && void 0 !== Pt ? Pt : Bt, xt = (0, rX.j)("aiHelperOverview"), mt = xt ? "aiHelperOverview" : "welcome", Jt = null !== xt && void 0 !== xt ? xt : Bt, It = (0, Wz.useRef)(!1), Ct = (0, Wz.useRef)(!1), et = (0, Wz.useRef)(null), [Zt, Gt] = (0, Wz.useState)(""), [ct, jt] = (0, Wz.useState)(!1), [At, yt] = (0, Wz.useState)(null), Mt = (0, Cz.l)("connectedGame"), dt = uz && gt && "classic" === Mt.gameNameWithVariation && !(0, Tt.L)(Mt.lobbyName), [ht, Qt] = (0, Wz.useState)(null), [kt, it] = (0, Wz.useState)({
          [MW.j]: ""
        }), [Lt, lt] = (0, Wz.useState)({
          assets: {},
          revision: 0
        }), nt = (0, Wz.useRef)(Lt), qt = (0, Wz.useCallback)((zz => {
          var tz;
          zz.revision < nt.current.revision || (nt.current = zz, lt(zz), xz(zz.startupError ? `Schematics could not load: ${zz.startupError}` : ""), null === (tz = gs.current) || void 0 === tz || tz.onLobbyFilesChanged({
            ...Us.current,
            ...(0, aW.n)(zz.assets)
          }))
        }), []), [St, Vt] = (0, Wz.useState)(MW.j), [Rt, pt] = (0, Wz.useState)(null), [ft, Et] = (0, Wz.useState)(null), zs = (0, Wz.useRef)(!1), ts = (0, Wz.useRef)(null), ss = (0, Wz.useRef)(St);
        ss.current = St;
        const Fs = (0, Wz.useRef)(Rt);
        Fs.current = Rt;
        const Ws = Rt ? null : At,
          Os = Ws && !Ws.engineLocked ? Ws.worldCodeEngine : null,
          vs = (0, Wz.useRef)(ft);
        vs.current = ft;
        const Us = (0, Wz.useRef)(kt);
        Us.current = kt;
        const Ks = (0, Wz.useRef)(null),
          us = (0, Wz.useRef)(null),
          [Ns, bs] = (0, Wz.useState)(!1),
          ws = (0, sX.n)(),
          Ds = (0, Wz.useRef)([]),
          gs = (0, Wz.useRef)(null),
          Hs = (0, Wz.useRef)(null),
          Bs = (0, Wz.useRef)(null);

        function Ps(zz) {
          rz(zz), clearTimeout(et.current), et.current = setTimeout((() => {
            rz({
              message: null,
              type: null
            })
          }), 3e3)
        }
        const rs = (0, Wz.useCallback)((function() {
            let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            zs.current && ts.current && (Uz.gameBridge.send("sendCodeCollab", {
              Yt: dW.e.Leave,
              xt: (0, dW.D)(ts.current),
              qO: !!zz || null
            }), zs.current = !1, ts.current = null), Qt(null)
          }), []),
          Ys = (0, Wz.useCallback)((zz => {
            const tz = {
              kind: "lobby",
              path: zz
            };
            ts.current = tz, Vt(zz), Nz.current = "", Uz.gameBridge.send("sendCodeCollab", {
              Yt: dW.e.Join,
              xt: (0, dW.D)(tz)
            }), zs.current = !0
          }), []),
          xs = (0, Wz.useCallback)((zz => {
            var tz;
            const sz = null === (tz = Hs.current) || void 0 === tz ? void 0 : tz.collabState;
            return sz && "lobby" === sz.docKey.kind && sz.docKey.path === zz && ss.current === zz ? Promise.resolve({
              doc: sz.doc,
              version: sz.version,
              clientID: sz.clientID,
              docKey: sz.docKey,
              httpConfig: sz.httpConfig
            }) : new Promise(((tz, sz) => {
              const Fz = setTimeout((() => {
                  Ds.current = Ds.current.filter((zz => zz !== Wz)), sz(new Error(`Timed out joining ${zz}`))
                }), 15e3),
                Wz = sz => {
                  "lobby" === sz.docKey.kind && sz.docKey.path === zz && (clearTimeout(Fz), Ds.current = Ds.current.filter((zz => zz !== Wz)), tz(sz))
                };
              Ds.current.push(Wz), ss.current !== zz ? (rs(!0), Ys(zz)) : zs.current || Ys(zz)
            }))
          }), [Ys, rs]),
          ms = (0, Wz.useCallback)((async function(zz, tz) {
            let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e4;
            const Fz = Date.now();
            let Wz = zz in Us.current;
            for (; Wz !== tz;) {
              if (Date.now() - Fz > sz) throw new Error(`Timed out waiting for lobby path ${zz} present=${tz}`);
              await (0, yF.K)(50), Wz = zz in Us.current
            }
          }), []),
          Is = (0, Wz.useCallback)((zz => {
            const tz = Us.current,
              sz = MW.j in tz && MW.l in tz;
            if (!(0, hW.i)(zz) || sz) {
              if (ss.current === zz) {
                var Fz;
                const Wz = sz && (0, hW.i)(zz) ? zz === MW.j ? MW.l : MW.j : null !== (Fz = (0, hW.b)(tz)) && void 0 !== Fz ? Fz : MW.j;
                us.current = {
                  fromPath: zz,
                  toPath: Wz
                }, Vt(Wz)
              }
              Uz.gameBridge.send("sendCodeCollab", {
                Yt: dW.e.DeleteFile,
                xt: (0, dW.D)({
                  kind: "lobby",
                  path: ss.current
                }),
                SO: zz
              })
            }
          }), []),
          Cs = (0, Wz.useCallback)((zz => {
            Sz.current = null, pt(null), Et(null), !uz || zz === ss.current && zs.current || (rs(!0), Ys(zz))
          }), [uz, rs, Ys]),
          es = (0, Wz.useCallback)(((zz, tz) => {
            const sz = lW.g[zz],
              Fz = sz && tz in sz.files ? tz : "index.ts";
            if (zz !== Fs.current || Fz !== vs.current) {
              var Wz;
              if (zz !== Fs.current) null === (Wz = gs.current) || void 0 === Wz || Wz.stopContinuousSync(), rs(!0);
              pt(zz), Et(Fz)
            }
          }), [rs]),
          Zs = (0, Wz.useCallback)((zz => {
            var tz;
            const sz = ss.current,
              Fz = Us.current[sz],
              Wz = zs.current && !Fs.current && sz in zz && void 0 !== Fz ? {
                ...zz,
                [sz]: Fz
              } : zz;
            it(Wz);
            const Xz = Ks.current;
            if (Xz && Xz in zz) Ks.current = null, Xz !== ss.current && Cs(Xz);
            else if (!(ss.current in zz) && zs.current && !Fs.current) {
              var Oz;
              Cs(null !== (Oz = (0, hW.b)(zz)) && void 0 !== Oz ? Oz : MW.j)
            }
            null === (tz = gs.current) || void 0 === tz || tz.onLobbyFilesChanged({
              ...Wz,
              ...(0, aW.n)(nt.current.assets)
            })
          }), [Cs]),
          Gs = (0, Wz.useCallback)((() => UO(ss.current).then((async zz => {
            if (!zs.current || !zz.files) return null;
            Zs(zz.files);
            const tz = await uX({
              action: "state"
            });
            return qt(tz), {
              ...zz.files,
              ...(0, aW.n)(tz.assets)
            }
          })).catch((zz => (console.error("[CodeCollab] Failed to fetch lobby files via HTTP", zz), Ps({
            message: "Could not refresh the file list",
            type: "warning"
          }), null)))), [Zs, qt]),
          Ts = () => {
            oz()
          };
        (0, Wz.useEffect)((() => {
          if (xz(""), !Fz || !uz) return;
          let zz = !1;
          return nt.current = {
            assets: {},
            revision: 0
          }, lt(nt.current), uX({
            action: "state"
          }).then((tz => {
            zz || qt(tz)
          })).catch((tz => {
            console.error("Could not load project schematics", tz), zz || xz("Could not load schematics. Reopen the Code Editor to retry.")
          })), () => {
            zz = !0
          }
        }), [Fz, uz, qt]);
        const cs = (0, Wz.useCallback)((function() {
            let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            ts.current && Uz.gameBridge.send("sendCodeCollab", {
              Yt: dW.e.Submit,
              xt: (0, dW.D)(ts.current),
              ...zz ? {
                Zt: "keepOpen"
              } : {}
            })
          }), []),
          As = (0, Wz.useCallback)((() => {
            if (!ts.current || "lobby" !== ts.current.kind) return;
            const zz = Zt.trim();
            (0, QW.s)(zz) ? (Uz.gameBridge.send("sendCodeCollab", {
              Yt: dW.e.ReloadAsVariation,
              xt: (0, dW.D)(ts.current),
              Zt: zz
            }), jt(!1)) : Ps({
              message: "Variation must be 1-32 characters: A-Z, a-z, 0-9, _, -",
              type: "warning"
            })
          }), [Zt]),
          ys = (0, Wz.useCallback)((zz => {
            Uz.gameBridge.send("sendCodeCollab", {
              Yt: dW.e.SetEngine,
              xt: (0, dW.D)({
                kind: "lobby",
                path: ss.current
              }),
              Zt: zz
            })
          }), []),
          Ms = (0, Wz.useCallback)((zz => {
            if (!Fs.current && gt && (Bz.current || uz)) {
              if (uz) {
                var tz;
                const sz = (0, hW.p)(Us.current, ss.current),
                  Fz = Math.min(Xs.w, Math.max(0, Xs.A - sz)),
                  Wz = zz.slice(0, Fz);
                return Nz.current = Wz, it((zz => ({
                  ...zz,
                  [ss.current]: Wz
                }))), void(null === (tz = gs.current) || void 0 === tz || tz.onDocTextChanged(ss.current, Wz))
              }
              Nz.current = zz, Kt(zz)
            }
          }), [gt, uz]);
        (0, Jz.g)("EditLobbyCode", (zz => {
          var tz;
          cz.featureFlags.canSeePlayerWrittenText && uz && (rs(), Hz(zz), Nz.current = "", it({
            [MW.j]: ""
          }), yt(null), Vt(MW.j), pt(null), Et(null), Ks.current = null, us.current = null, null === (tz = gs.current) || void 0 === tz || tz.stopContinuousSync(), Xz(), Ys(MW.j))
        })), (0, Jz.g)("EditCodeBlock", (zz => {
          let {
            pos: tz,
            canChangePos: sz
          } = zz;
          if (cz.featureFlags.canSeePlayerWrittenText && !uz)
            if (rs(), null !== tz && (tz = [...tz]), Hz(tz), Bz.current = sz, null !== tz) {
              Nz.current = "", Kt(""), Xz();
              const zz = {
                  kind: "codeBlock",
                  pos: tz
                },
                Fz = (0, dW.D)(zz);
              ut.current !== Fz && (ut.current = Fz, Wt([]), vt(Xt)), wt((0, FO.b)(Fz, [tz[0], tz[1], tz[2]], !!sz)), ts.current = zz, Uz.gameBridge.send("sendCodeCollab", {
                Yt: dW.e.Join,
                xt: (0, dW.D)(zz)
              }), zs.current = !0
            } else Fz && oz()
        })), (0, Jz.g)("codeCollabRejoin", (zz => {
          const tz = ts.current ? (0, dW.D)(ts.current) : null;
          tz && zz.docKey === tz && (Nz.current = zz.doc, uz || Kt(zz.doc), Qt((tz => tz ? {
            ...tz,
            doc: zz.doc,
            version: zz.version,
            clientID: (0, LW.c)()
          } : tz)))
        })), (0, Jz.g)("codeCollab", (zz => {
          var tz;
          const sz = ts.current ? (0, dW.D)(ts.current) : null;
          if (zz.type === dW.h.LobbyFilesChanged && uz) {
            if ("string" !== typeof zz.files) return void Gs();
            try {
              Zs(JSON.parse(zz.files))
            } catch (Uz) {
              console.error("[CodeCollab] Failed to parse lobby files", Uz), Gs()
            }
            return
          }
          if (zz.type === dW.h.EngineSettings && uz) return void yt(DX(zz.engineSettings));
          const Wz = zz.type === dW.h.Joined ? (0, dW.o)(zz.docKey) : null,
            Xz = uz && "lobby" === (null === (tz = ts.current) || void 0 === tz ? void 0 : tz.kind) && (0, hW.i)(ts.current.path) && "lobby" === (null === Wz || void 0 === Wz ? void 0 : Wz.kind) && (0, hW.i)(Wz.path);
          if (!sz || zz.docKey === sz || Xz)
            if (zz.type !== dW.h.ForceClose) {
              if (Fz)
                if (zz.type === dW.h.Joined) {
                  var Oz;
                  const Kz = JSON.parse(zz.peers),
                    bz = zz.existingCursors ? JSON.parse(zz.existingCursors) : [],
                    gz = (0, LW.c)(),
                    Hz = KX(),
                    {
                      gsUrl: Bz,
                      gameNameWithVariation: Pz,
                      lobbyName: Yz
                    } = Hz,
                    xz = null !== (Oz = (0, dW.o)(zz.docKey)) && void 0 !== Oz ? Oz : ts.current;
                  xz && (ts.current = xz, "lobby" === xz.kind && (Vt(xz.path), ss.current = xz.path));
                  const mz = xz || (uz ? {
                    kind: "lobby",
                    path: ss.current
                  } : {
                    kind: "codeBlock",
                    pos: Dz
                  });

                  function Jz(tz) {
                    var sz, Fz;
                    if (!zs.current) return;
                    const Wz = null !== (sz = tz.code) && void 0 !== sz ? sz : "",
                      Xz = null !== (Fz = tz.collabVersion) && void 0 !== Fz ? Fz : 0;
                    Nz.current = Wz, uz || Kt(Wz), uz && tz.files ? it(tz.files) : uz && it((zz => ({
                      ...zz,
                      [ss.current]: Wz
                    })));
                    const Oz = {
                      doc: Wz,
                      version: Xz,
                      clientID: gz,
                      docKey: mz,
                      peers: Kz,
                      editorCount: zz.editorCount,
                      existingCursors: bz,
                      httpConfig: Hz
                    };
                    if (Qt(Oz), "lobby" === mz.kind) {
                      var oz;
                      const zz = {
                        doc: Wz,
                        version: Xz,
                        clientID: gz,
                        docKey: mz,
                        httpConfig: Hz
                      };
                      for (const tz of [...Ds.current]) tz(zz);
                      null === (oz = gs.current) || void 0 === oz || oz.startWhenReady()
                    }
                    tz.canSeeCode ? (clearTimeout(et.current), rz({
                      message: null,
                      type: null
                    })) : function(zz) {
                      clearTimeout(et.current), rz(zz)
                    }(NO);
                    const vz = Sz.current;
                    Sz.current = null, uz && vz && tz.files && vz in tz.files && vz !== ss.current && Cs(vz)
                  }
                  uz ? UO(ss.current).then(Jz).catch((zz => {
                    console.error("[CodeCollab] Failed to fetch lobby code via HTTP", zz), rs()
                  })) : (0, yW.postJsonWithMetricsCookiesAndJsonResponse)(`${Bz}/code/get-code-block`, AW.Gj["get-code-block"].toBuffer({
                    gameNameWithVariation: Pz,
                    lobbyName: Yz,
                    pos: Dz
                  }), {
                    retries: 1
                  }).then(Jz).catch((zz => {
                    console.error("[CodeCollab] Failed to fetch code block via HTTP", zz), rs()
                  }))
                } else if (zz.type === dW.h.Presence) {
                if (!sz) return;
                const Iz = JSON.parse(zz.peers);
                Qt((tz => tz ? {
                  ...tz,
                  peers: Iz,
                  editorCount: zz.editorCount
                } : tz))
              }
            } else {
              var vz;
              if (!sz) return;
              Fz && uz && "keptOpen" === zz.updates && wz.o.Yg("CodeEditorKeepEdits");
              const Cz = ts.current;
              zs.current = !1, ts.current = null, Qt(null);
              if (!uz || "close" === zz.updates) return (0, sO.i)(), void(Fz && oz());
              if (!Fz) return;
              const ez = Us.current,
                Zz = us.current;
              us.current = null;
              const Gz = "lobby" === (null === Cz || void 0 === Cz ? void 0 : Cz.kind) && Cz.path === (null === Zz || void 0 === Zz ? void 0 : Zz.fromPath),
                Tz = Zz && (Gz || Zz.toPath in ez || (0, hW.i)(Zz.toPath)) ? Zz.toPath : ss.current in ez ? ss.current : null !== (vz = (0, hW.b)(ez)) && void 0 !== vz ? vz : MW.j;
              Ys(Tz)
            }
        })), (0, Jz.g)("refetchCode", (() => {
          cz.featureFlags.canSeePlayerWrittenText && Fz && zs.current && (gt || (rs(), uz ? wz.o.Yg("EditLobbyCode", Dz) : wz.o.Yg("EditCodeBlock", {
            pos: Dz,
            canChangePos: Bz.current
          })))
        }));
        const ds = (0, Wz.useCallback)((() => {
            Fz && (dz(!1), window.open("/docs", "_blank", "popup=yes,width=1200,height=800"))
          }), [Fz]),
          hs = (0, Wz.useCallback)((() => {
            dz(!1)
          }), []);
        (0, Wz.useEffect)((() => {
          Fz && gt && ("docsButton" === Yt && Mz ? (0, YX.d)("docsButton") : Yt && YX.h.includes(Yt) && !Mz && (dz(!0), zt(!1)))
        }), [Fz, gt, Yt, Mz, zt]);
        const Qs = (0, Wz.useCallback)((() => {
          zt(!1)
        }), [zt]);
        (0, Wz.useEffect)((() => {
          Fz && gt && Dt && ("aiHelperButton" === Jt && Ez ? (0, YX.d)("aiHelperButton") : Jt && YX.c.includes(Jt) && !Ez && (zt(!0), dz(!1)))
        }), [Fz, gt, Dt, Jt, Ez, zt]), (0, Wz.useEffect)((() => {
          if (!Fz || !gt) return;
          const zz = uz ? "worldCode" : "codeBlock";
          return (0, YX.G)(zz, !0), () => {
            (0, YX.G)(zz, !1)
          }
        }), [Fz, gt, uz]), (0, Wz.useEffect)((() => {
          if (Fz) return () => {
            It.current ? It.current = !1 : (0, YX.E)()
          }
        }), [Fz]), (0, Wz.useEffect)((() => {
          (0, YX.H)("exportButton", !!Ht)
        }), [Ht]);
        const {
          t: ks
        } = (0, Vz.B)(), is = !Ez && Xt > ot, Ls = is ? bz.H : bz.y, ls = (0, Wz.useCallback)(((zz, tz) => {
          wz.o.Yg("CodeEditorGoToLine", {
            path: zz,
            line: tz
          }), Cs(zz)
        }), [Cs]), ns = (0, Wz.useCallback)((zz => {
          Bs.current = zz
        }), []), as = function(zz, tz) {
          const [sz, Fz] = (0, Wz.useState)(null);
          return (0, Wz.useEffect)((() => {
            if (!tz) return void Fz(null);
            let sz = !1;
            return tX(zz).then((zz => {
              sz || Fz(zz)
            }), (zz => {
              console.error("[CodeEditor] could not collect the imported plugins", zz), sz || Fz(null)
            })), () => {
              sz = !0
            }
          }), [zz, tz]), sz
        }(kt, Fz);
        (0, Wz.useEffect)((() => {
          as && Rt && !as.includes(Rt) && (pt(null), Et(null), uz && !zs.current && Ys(ss.current))
        }), [Rt, as, uz, Ys]), Hs.current = {
          collabState: ht,
          ensureJoinedPath: xs,
          waitForLobbyPath: ms,
          pullLobbyFiles: Gs,
          t: ks,
          canEditCode: !!gt
        }, gs.current || (gs.current = new vX({
          getLobbyFiles: () => ({
            ...Us.current,
            ...(0, aW.n)(nt.current.assets)
          }),
          deleteSchematic: async zz => {
            const tz = await uX({
              action: "remove",
              path: zz,
              expectedRevision: nt.current.revision
            });
            qt(tz)
          },
          getActivePath: () => ss.current,
          getCollabSnapshot: () => {
            var zz;
            if (Fs.current) return null;
            const tz = null === (zz = Hs.current) || void 0 === zz ? void 0 : zz.collabState;
            return tz ? {
              doc: tz.doc,
              version: tz.version,
              clientID: tz.clientID,
              docKey: tz.docKey,
              httpConfig: tz.httpConfig
            } : null
          },
          replaceActiveDoc: (zz, tz) => {
            var sz, Fz;
            return null !== (sz = null === (Fz = Bs.current) || void 0 === Fz ? void 0 : Fz.call(Bs, zz, tz)) && void 0 !== sz && sz
          },
          ensureJoined: zz => Hs.current.ensureJoinedPath(zz),
          createFile: (zz, tz) => {
            !1 !== (null === tz || void 0 === tz ? void 0 : tz.focus) && (Ks.current = zz), Uz.gameBridge.send("sendCodeCollab", {
              Yt: dW.e.CreateFile,
              xt: (0, dW.D)({
                kind: "lobby",
                path: ss.current
              }),
              SO: zz
            })
          },
          renameFile: (zz, tz) => {
            const sz = (0, dW.D)({
              kind: "lobby",
              path: ss.current
            });
            ss.current === zz && (us.current = {
              fromPath: zz,
              toPath: tz
            }, Vt(tz)), Uz.gameBridge.send("sendCodeCollab", {
              Yt: dW.e.RenameFile,
              xt: sz,
              SO: zz,
              VO: tz
            })
          },
          deleteFile: zz => {
            Is(zz)
          },
          waitForLobbyPath: (zz, tz, sz) => Hs.current.waitForLobbyPath(zz, tz, sz),
          pullLobbyFiles: () => Hs.current.pullLobbyFiles(),
          setMessage: (zz, tz) => {
            Ps({
              message: zz,
              type: tz
            })
          },
          onUnlinked: () => {
            bs(!1)
          },
          t: zz => Hs.current.t(zz),
          canEditCode: () => Hs.current.canEditCode,
          getStorageKey: () => {
            const {
              gameNameWithVariation: zz,
              lobbyName: tz
            } = Uz.gameBridge.latest("connectedGame");
            return (0, sX.e)(zz, tz)
          }
        }));
        const qs = (0, Wz.useCallback)((async zz => {
            const tz = gs.current;
            if (!tz) return !1;
            try {
              return await tz.writeLobbyFiles(zz)
            } catch (sz) {
              return console.error("World Code AI: couldn't write the change", sz), !1
            }
          }), []),
          Ss = (0, Wz.useCallback)((async zz => {
            var tz, sz;
            const Fz = null === (tz = zz.find((zz => zz.path === tO.c))) || void 0 === tz ? void 0 : tz.text,
              Wz = ts.current;
            return void 0 !== Fz && "codeBlock" === (null === Wz || void 0 === Wz ? void 0 : Wz.kind) && (!(null === (sz = Bs.current) || void 0 === sz || !sz.call(Bs, (0, dW.D)(Wz), Fz)) && (Nz.current = Fz, Kt(Fz), !0))
          }), []),
          Vs = (0, Wz.useCallback)((async () => {
            try {
              var zz, tz;
              const sz = await UO(MW.j);
              return !1 === sz.canSeeCode ? null : null !== (zz = sz.files) && void 0 !== zz ? zz : {
                [MW.j]: null !== (tz = sz.code) && void 0 !== tz ? tz : ""
              }
            } catch (sz) {
              return console.error("World Code AI: couldn't read World Code for a code block", sz), null
            }
          }), []),
          Rs = (0, Wz.useMemo)((() => ({
            [tO.c]: Ut
          })), [Ut]),
          ps = (0, Wz.useCallback)(((zz, tz) => {
            wz.o.Yg("CodeEditorGoToLine", {
              path: tO.c,
              line: tz
            })
          }), []);
        (0, Wz.useEffect)((() => {
          Ez && Fz && vt(Xt)
        }), [Ez, Fz, Xt]);
        const fs = (0, Wz.useCallback)((() => {
            var zz, tz;
            cs();
            const sz = (0, cz.isTouchscreen)() ? "open World Code again" : `press ${null!==(zz=null===(tz=os.x.OpenCodeEditor)||void 0===tz?void 0:tz[0])&&void 0!==zz?zz:"F8"}`,
              Fz = uz ? `\ud83e\udd16 Try out your change, then ${sz} to tell the AI Helper how it went.` : "\ud83e\udd16 Click the code block to try your change, then open it again to tell the AI Helper how it went.";
            wz.o.Yg("chat", {
              content: [{
                str: Fz,
                style: {
                  color: Iz.N.cyanUiText
                }
              }]
            })
          }), [cs, uz]),
          Es = (0, Wz.useCallback)((zz => {
            const tz = Dz,
              sz = Bz.current;
            uz || !tz || Uz.gameBridge.lookup("codeBlockClickable", tz) ? (0, sO.m)(zz, {
              submit: () => {
                cs(), wz.o.Yg("chat", {
                  content: [{
                    str: "\ud83e\udd16 Testing your change. The AI Helper comes back in a moment.",
                    style: {
                      color: Iz.N.cyanUiText
                    }
                  }]
                }), !uz && tz && setTimeout((() => {
                  Uz.gameBridge.send("clickCodeBlock", tz)
                }), 1e3)
              },
              reopen: () => {
                (0, kz.r)() || (uz ? wz.o.Yg("EditLobbyCode", tz) : wz.o.Yg("EditCodeBlock", {
                  pos: tz,
                  canChangePos: sz
                }))
              }
            }) : fs()
          }), [cs, uz, Dz, fs]),
          zF = (0, Wz.useCallback)((() => {
            zt(!1)
          }), [zt]),
          tF = (0, Wz.useRef)(Ts);
        tF.current = Ts;
        const sF = (0, Wz.useCallback)((function(zz) {
            let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            wz.o.Yg("WorldCodeAiDraft", {
              text: zz,
              send: tz
            }), tF.current(), wz.o.Yg("EditLobbyCode", Dz)
          }), [Dz]),
          FF = (0, Wz.useCallback)((zz => {
            tF.current(), zz.codeBlock ? wz.o.Yg("EditCodeBlock", {
              pos: [...zz.pos],
              canChangePos: zz.canChangePos
            }) : wz.o.Yg("EditLobbyCode", Dz)
          }), [Dz]);
        (0, Jz.g)("WorldCodeAiDraft", (zz => {
          uz && (st(zz), zt(!0))
        }));
        const WF = !!gt && !!Yt && YX.h.includes(Yt),
          XF = !!gt && !!Jt && YX.c.includes(Jt);
        (0, Wz.useEffect)((() => {
          Fz && Ez && Dt && !WF && dz(!1)
        }), [Fz, Ez, Dt, WF]);
        const OF = (0, Wz.useCallback)((() => {
            zt(!1), dz(!1)
          }), [zt]),
          {
            PN: oF,
            setWorld: vF,
            toggleWorld: UF
          } = function(zz) {
            let {
              showAi: tz,
              showDocs: sz,
              showChat: Fz,
              hideOtherRightPanels: Xz
            } = zz;
            const [Oz, oz] = (0, Wz.useState)("hidden"), vz = (0, Wz.useRef)(null), Uz = (0, Wz.useCallback)((() => {
              vz.current = null, oz((zz => "hidden" === zz ? zz : (0, ZX.h)() ? "hidden" : "shown"))
            }), []);
            (0, Wz.useEffect)((() => {
              (tz || sz) && Uz()
            }), [tz, sz, Uz]), (0, Wz.useEffect)((() => {
              Fz && Uz()
            }), [Fz, Uz]);
            const Kz = "hidden" !== Oz && (0, ZX.h)();
            (0, Wz.useLayoutEffect)((() => {
              if (Kz) {
                const zz = document.activeElement;
                zz instanceof HTMLElement && zz.closest(".cm-content") && (vz.current = zz, zz.blur())
              } else {
                var zz;
                null === (zz = vz.current) || void 0 === zz || zz.focus(), vz.current = null
              }
            }), [Kz]);
            const uz = (0, Wz.useCallback)((() => {
              "hidden" === Oz ? (oz("shown"), (0, ZX.h)() && Xz()) : oz("hidden")
            }), [Oz, Xz]);
            return {
              PN: Oz,
              setWorld: oz,
              toggleWorld: uz
            }
          }({
            showAi: Ez,
            showDocs: Mz,
            showChat: hz,
            hideOtherRightPanels: OF
          }),
          KF = Ez && null !== Nt && Dt,
          uF = (0, Wz.useCallback)((() => {
            st(null)
          }), []),
          [NF, bF] = (0, Wz.useState)(null);
        (0, Jz.g)("WorldCodeAiSelection", (zz => {
          Fz && (bF(zz), zt(!0), dz(!1))
        }));
        const wF = (0, Wz.useCallback)((() => {
          bF(null)
        }), []);
        (0, Jz.g)("chat", (zz => {
          let {
            content: tz
          } = zz;
          if (!uz && null === ut.current) return;
          const sz = Array.isArray(tz) ? tz : [tz],
            Fz = sz.some((zz => {
              var tz;
              return (null === zz || void 0 === zz || null === (tz = zz.style) || void 0 === tz ? void 0 : tz.color) === Iz.N.redUiText
            })),
            Wz = sz.map((zz => {
              var tz;
              const sz = null !== (tz = null === zz || void 0 === zz ? void 0 : zz.str) && void 0 !== tz ? tz : zz;
              return "string" === typeof sz ? sz : ""
            })).join("");
          Fz && /world code|error/i.test(Wz) && (Wt((zz => [...zz, Wz].slice(-10))), Ot((zz => zz + 1)), (0, sO.e)(Wz))
        })), (0, Wz.useEffect)((() => {
          if (!Fz || !uz || !ws) return;
          let zz = !1;
          return (async (tz, sz) => {
            const Fz = await (null === (tz = gs.current) || void 0 === tz ? void 0 : tz.tryRestoreHandle());
            !zz && Fz && (bs(!0), null === (sz = gs.current) || void 0 === sz || sz.startWhenReady())
          })(), () => {
            zz = !0
          }
        }), [Fz, uz, ws]), (0, Wz.useEffect)((() => {
          var zz;
          Fz || (null === (zz = gs.current) || void 0 === zz || zz.stopContinuousSync(), rs(!1), Ct.current && (Ct.current = !1, Uz.gameBridge.send("sendChatMessage", {
            RO: "//export",
            channelName: null
          })))
        }), [Fz, rs]);
        const DF = (0, Wz.useCallback)((async () => {
            if (ws && gs.current) try {
              if (!await gs.current.linkFolder()) return;
              bs(!0), await gs.current.startWhenReady()
            } catch (zz) {
              console.error("[WorldCodeDirectorySync] Link failed", zz), Ps({
                message: ks("codeEditor:directorySyncError"),
                type: "warning"
              })
            }
          }), [ws, ks]),
          gF = (0, Wz.useCallback)((async () => {
            gs.current && await gs.current.unlinkFolder()
          }), []),
          HF = (0, Wz.useCallback)((() => {
            ws ? Ns ? gF() : DF() : NW.NotificationProvider.showAlertPopup({
              title: "codeEditor:directorySyncUnsupported",
              subtitle: "codeEditor:directorySyncUnsupportedBody",
              confirmText: "general:ok"
            })
          }), [ws, Ns, DF, gF]),
          BF = uz && "hidden" !== oF;
        return (0, Kz.jsxs)(Oz.b, {
          className: bt()("CodeEditorBg", {
            CodeEditorLight: Tz,
            WorldShown: "hidden" !== oF
          }),
          close: Ts,
          escDoesExit: !0,
          show: Fz,
          togglePointerLock: !1,
          globallyUniqueKey: uz ? "LobbyCodeEditor" : "CodeBlockEditor",
          children: [(0, Kz.jsx)(rX.c, {
            tutorial: "welcome",
            step: "codeBlockIntro",
            text: ks("codeEditor:tutorialCodeBlockIntro"),
            enabled: !!gt && !uz
          }), (0, Kz.jsx)(rX.c, {
            tutorial: "welcome",
            step: "worldCodeIntro",
            text: (0, Kz.jsxs)(Kz.Fragment, {
              children: [(0, Kz.jsx)("p", {
                children: ks("codeEditor:tutorialWorldCodeWelcome")
              }), (0, Kz.jsxs)("ul", {
                className: "TutorialStepList",
                children: [(0, Kz.jsx)("li", {
                  children: ks("codeEditor:tutorialWorldCodeUseSetUp")
                }), (0, Kz.jsx)("li", {
                  children: ks("codeEditor:tutorialWorldCodeUseReact")
                }), (0, Kz.jsx)("li", {
                  children: ks("codeEditor:tutorialWorldCodeUseRun")
                })]
              })]
            }),
            enabled: !!gt && uz
          }), (0, Kz.jsx)("div", {
            className: "CodeEditorTitle",
            children: uz ? "World Code" : "Code Block"
          }), (0, Kz.jsxs)("div", {
            className: "CodeEditorTopBar",
            children: [(0, Kz.jsxs)("div", {
              className: "CodeEditorTopLeft",
              children: [(0, Kz.jsx)(qz.h, {
                tooltipInner: ks(Ht ? "codeEditor:exportTooltip" : "codeEditor:exportOwnerOnly"),
                delayShow: Ht ? void 0 : 0,
                hideTooltip: "exportButton" === Bt,
                children: (0, Kz.jsx)(rX.g, {
                  tutorial: "welcome",
                  step: "exportButton",
                  text: ks("codeEditor:tutorialExport"),
                  enabled: !!gt,
                  children: (0, Kz.jsx)(bz.p, {
                    className: "CodeEditorButton",
                    disabled: !Ht,
                    onClick: () => {
                      "exportButton" === Bt && ((0, YX.d)("exportButton"), It.current = !0), Ct.current = !0, Ts()
                    },
                    padDestructive: !0,
                    children: ks("codeEditor:exportWorld")
                  })
                })
              }), (0, Kz.jsx)(VX, {
                PN: oF,
                setWorld: vF,
                toggleWorld: UF,
                aiShown: KF,
                closeAi: zF
              })]
            }), (0, Kz.jsxs)("div", {
              className: "CodeEditorTopRight",
              children: [gt && (0, Kz.jsx)(qz.h, {
                tooltipInner: ks("codeEditor:helpTooltip"),
                hideTooltip: "helpButton" === Bt,
                children: (0, Kz.jsx)(rX.g, {
                  tutorial: "welcome",
                  step: "helpButton",
                  text: ks("codeEditor:tutorialHelpButton"),
                  placement: "bottom",
                  children: (0, Kz.jsx)(bz.h, {
                    className: "CodeEditorHelpButton",
                    ariaLabel: ks("codeEditor:helpTooltip"),
                    onClick: () => {
                      (0, YX.d)("helpButton"), NW.NotificationProvider.showCustomPopup({
                        body: zz => (0, Kz.jsx)(xX, {
                          close: zz
                        }),
                        unlockPointerKey: "codeEditorTutorials"
                      })
                    },
                    children: (0, Kz.jsx)("div", {
                      className: "CodeEditorHelpButtonInner",
                      children: (0, Kz.jsx)(gz.c, {
                        name: "circle-question"
                      })
                    })
                  })
                })
              }), (0, Kz.jsx)(qz.h, {
                tooltipInner: ks("codeEditor:closeTooltip"),
                children: (0, Kz.jsx)("div", {
                  className: "CodeEditorCloseButtonClickZone",
                  onClick: () => {
                    Ts()
                  },
                  children: (0, Kz.jsx)(bz.n, {
                    className: "CodeEditorCloseButton"
                  })
                })
              })]
            })]
          }), (0, Kz.jsx)(iW, {
            peers: null !== (tz = null === ht || void 0 === ht ? void 0 : ht.peers) && void 0 !== tz ? tz : []
          }), (0, Kz.jsxs)("div", {
            className: "CodeEditorMainArea",
            children: [hz && nz && (0, Kz.jsx)(ZX.e, {
              side: "left",
              defaultSize: "max(16rem, 24%)",
              onClose: () => {
                iz(!1)
              },
              children: (0, Kz.jsx)(eX, {
                inputRef: Lz
              })
            }), uz && (0, Kz.jsx)(VW, {
              schematics: Lt.assets,
              onManageSchematic: zz => {
                gt && NW.NotificationProvider.showCustomPopup({
                  body: tz => (0, Kz.jsx)(wX, {
                    initialPath: zz,
                    onChanged: qt,
                    onClose: tz
                  }),
                  unlockPointerKey: "worldCodeSchematics"
                })
              },
              files: kt,
              activePath: St,
              canEdit: !!gt,
              directoryLinked: Ns,
              pluginNames: null !== as && void 0 !== as ? as : uO,
              activePluginName: Rt,
              activePluginFile: ft,
              onSelect: Cs,
              onSelectPlugin: es,
              onToggleDirectorySync: HF,
              onCreate: zz => {
                Ks.current = zz, Uz.gameBridge.send("sendCodeCollab", {
                  Yt: dW.e.CreateFile,
                  xt: (0, dW.D)({
                    kind: "lobby",
                    path: ss.current
                  }),
                  SO: zz
                })
              },
              onRename: (zz, tz) => {
                ss.current === zz && (us.current = {
                  fromPath: zz,
                  toPath: tz
                }, Vt(tz)), Uz.gameBridge.send("sendCodeCollab", {
                  Yt: dW.e.RenameFile,
                  xt: (0, dW.D)({
                    kind: "lobby",
                    path: ss.current
                  }),
                  SO: zz,
                  VO: tz
                })
              },
              onRenameFolder: (zz, tz) => {
                const [sz] = (0, hW.m)([ss.current], zz, tz);
                sz && (us.current = {
                  fromPath: sz[0],
                  toPath: sz[1]
                }, Vt(sz[1])), Uz.gameBridge.send("sendCodeCollab", {
                  Yt: dW.e.RenameFolder,
                  xt: (0, dW.D)({
                    kind: "lobby",
                    path: ss.current
                  }),
                  SO: zz,
                  VO: tz
                })
              },
              onDelete: Is
            }), (0, Kz.jsx)("div", {
              className: bt()("CodeEditorMessage", {
                CodeEditorMessageHidden: !mz.message,
                CodeEditorMessageSuccess: "success" === mz.type
              }),
              children: mz.message && (0, Kz.jsx)("div", {
                className: "CodeEditorMessageText",
                children: mz.message
              })
            }), (0, Kz.jsx)(Wz.Suspense, {
              fallback: (0, Kz.jsx)("div", {
                className: "CodeEditorContent",
                children: (0, Kz.jsx)(ez.d, {})
              }),
              children: (0, Kz.jsx)(WO, {
                isLobbyCode: uz,
                code: ht ? ht.doc : Nz.current,
                files: uz ? kt : void 0,
                activePath: uz ? St : void 0,
                pluginName: Rt,
                pluginFile: ft,
                pluginSource: Rt && ft ? null === (sz = lW.g[Rt]) || void 0 === sz ? void 0 : sz.files[ft] : void 0,
                onChange: Ms,
                canEditCode: gt,
                setTemporaryMessage: Ps,
                close: Ts,
                showTooltips: Zz,
                lightMode: Tz,
                collabState: ht,
                setActiveDocReplacer: ns,
                showAiHints: Dt && Az,
                canAiChangeCode: !!gt && (uz || !!Bz.current),
                onRemoteDocChange: zz => {
                  var tz;
                  (Nz.current = zz, uz) ? (it((tz => ({
                    ...tz,
                    [ss.current]: zz
                  }))), null === (tz = gs.current) || void 0 === tz || tz.onDocTextChanged(ss.current, zz)) : Kt(zz)
                }
              })
            }), (Mz || KF || "hidden" !== oF) && (0, Kz.jsxs)(GX, {
              PN: oF,
              worldPanel: (0, Kz.jsx)(qX, {
                shown: oF,
                setShown: vF,
                canInsertCode: !!gt && !Rt
              }),
              closeWorld: () => {
                vF("hidden")
              },
              aiShown: KF,
              defaultWidth: Mz ? "40%" : "max(18rem, 36%)",
              children: [Mz && (0, Kz.jsx)(ZX.e, {
                onClose: WF ? void 0 : hs,
                children: (0, Kz.jsx)(Wz.Suspense, {
                  fallback: (0, Kz.jsx)("div", {
                    className: "DocsPanel",
                    children: (0, Kz.jsx)(ez.d, {})
                  }),
                  children: (0, Kz.jsx)(XO, {
                    popOutDocs: ds,
                    hideDocs: hs,
                    tutorialEnabled: !!gt
                  })
                })
              }), KF && (0, Kz.jsx)(ZX.e, {
                onClose: XF ? void 0 : zF,
                children: (0, Kz.jsx)(Wz.Suspense, {
                  fallback: (0, Kz.jsx)("div", {
                    className: "CodeEditorPanelLoading",
                    children: (0, Kz.jsx)(ez.d, {})
                  }),
                  children: (0, Kz.jsx)(OO, {
                    target: Nt,
                    chatKey: `${Mt.gameNameWithVariation}/${Mt.lobbyName}/aiHelper`,
                    historyKey: `${Mt.gameNameWithVariation}/${Mt.lobbyName}/${Nt.key}`,
                    files: Nt.codeBlock ? Rs : kt,
                    activePath: Nt.codeBlock ? tO.c : St,
                    canEdit: !!gt && (Nt.codeBlock ? !!Bz.current : !Rt),
                    isLoaded: null !== ht,
                    errors: Ft,
                    errorCount: Xt,
                    applyFiles: Nt.codeBlock ? Ss : qs,
                    submit: fs,
                    testRun: Es,
                    close: zF,
                    goToLine: Nt.codeBlock ? ps : ls,
                    openWorldCode: Nt.codeBlock ? sF : void 0,
                    readWorldCode: Nt.codeBlock ? Vs : void 0,
                    viewChunk: oO,
                    viewGameState: vO,
                    openTarget: gt ? FF : void 0,
                    draft: tt,
                    onDraftUsed: uF,
                    selection: NF,
                    onSelectionUsed: wF
                  }, Nt.key)
                })
              })]
            })]
          }), (null === Ws || void 0 === Ws ? void 0 : Ws.fallback) && (0, Kz.jsx)(gX, {
            fallback: Ws.fallback,
            onGoToLine: ls
          }), (0, Kz.jsxs)("div", {
            className: "CodeEditorButtons",
            "data-pad-hint-bar-avoid": !0,
            children: [(0, Kz.jsx)(qz.h, {
              tooltipInner: ks(Tz ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
              placement: "top",
              children: (0, Kz.jsx)(bz.h, {
                className: "CodeEditorButton CodeEditorThemeButton",
                ariaLabel: ks(Tz ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
                onClick: () => {
                  jz(!Tz)
                },
                children: (0, Kz.jsx)(gz.c, {
                  name: Tz ? "moon" : "sun-bright"
                })
              })
            }), (0, Kz.jsx)(qz.h, {
              tooltipInner: ks(BF ? "codeEditorWorld:submitCodeTooltip" : "codeEditor:submitCodeTooltip"),
              placement: "top",
              children: (0, Kz.jsx)(bz.p, {
                className: "CodeEditorButton",
                onClick: () => {
                  cs(BF)
                },
                padDefaultFocus: !0,
                children: ks("codeEditor:submitCode")
              })
            }), (0, Kz.jsx)(qz.h, {
              tooltipInner: ks(Mz ? "codeEditor:hideDocsTooltip" : "codeEditor:showDocsTooltip"),
              placement: "top",
              hideTooltip: "docsButton" === Yt || "hideDocsButton" === Yt,
              children: (0, Kz.jsx)(rX.g, {
                tutorial: rt,
                step: Mz ? "hideDocsButton" : "docsButton",
                text: ks(Mz ? "codeEditor:tutorialHideDocs" : "codeEditor:tutorialDocs"),
                enabled: !!gt,
                placement: "top",
                waitForClick: !0,
                onPrevious: Mz && "welcome" === rt ? hs : void 0,
                children: (0, Kz.jsx)(bz.y, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    (0, YX.d)(Mz ? "hideDocsButton" : "docsButton"), dz(!Mz), zt(!1)
                  },
                  children: ks(Mz ? "codeEditor:hideDocs" : "codeEditor:showDocs")
                })
              })
            }), Dt && (0, Kz.jsx)(rX.g, {
              tutorial: mt,
              step: Ez ? "hideAiHelperButton" : "aiHelperButton",
              text: ks(Ez ? "codeEditorAiTutorial:hideAiHelperButton" : "welcome" === mt ? "codeEditorAiTutorial:welcomeAiHelperButton" : "codeEditorAiTutorial:aiHelperButton"),
              enabled: !!gt,
              placement: "top",
              waitForClick: !0,
              onPrevious: Ez && "welcome" === mt ? Qs : void 0,
              children: (0, Kz.jsx)(Ls, {
                className: "CodeEditorButton",
                onClick: () => {
                  (0, YX.d)(Ez ? "hideAiHelperButton" : "aiHelperButton"), zt(!Ez), dz(!1)
                },
                children: Ez ? "Hide AI Helper" : is ? "Fix error with AI" : "AI Helper"
              })
            }), nz && (0, Kz.jsx)(qz.h, {
              tooltipInner: ks(hz ? "codeEditorChat:hideChatTooltip" : "codeEditorChat:showChatTooltip"),
              placement: "top",
              children: (0, Kz.jsx)(bz.y, {
                className: "CodeEditorButton",
                onClick: () => {
                  lz.current = !hz, iz(!hz)
                },
                children: ks(hz ? "codeEditorChat:hideChat" : "codeEditorChat:showChat")
              })
            }), (0, Kz.jsx)(qz.h, {
              tooltipInner: ks("hidden" === oF ? "codeEditorWorld:showWorldTooltip" : "codeEditorWorld:hideWorldTooltip"),
              placement: "top",
              children: (0, Kz.jsx)(bz.y, {
                className: "CodeEditorButton CodeEditorWorldButton",
                onClick: UF,
                children: ks("hidden" === oF ? "codeEditorWorld:showWorld" : "codeEditorWorld:hideWorld")
              })
            }), (0, Kz.jsx)(qz.h, {
              tooltipInner: ks("codeEditor:formatCodeTooltip"),
              placement: "top",
              children: (0, Kz.jsx)(bz.h, {
                className: "CodeEditorButton",
                onClick: () => {
                  wz.o.Yg("FormatCode")
                },
                children: ks("codeEditor:formatCode")
              })
            }), (0, Kz.jsx)(qz.h, {
              tooltipInner: ks("codeEditor:copyCodeTooltip"),
              placement: "top",
              children: (0, Kz.jsx)(bz.h, {
                className: "CodeEditorButton",
                onClick: () => {
                  navigator.clipboard.writeText(Nz.current).then((() => {
                    Ps({
                      message: "Successfully copied code to clipboard",
                      type: "success"
                    })
                  })).catch((() => {
                    Ps({
                      message: "Failed to copy code to clipboard",
                      type: "warning"
                    })
                  }))
                },
                children: ks("codeEditor:copyCode")
              })
            }), (0, Kz.jsx)(qz.h, {
              tooltipInner: ks(Zz ? "codeEditor:hideTooltipsTooltip" : "codeEditor:showTooltipsTooltip"),
              placement: "top",
              children: (0, Kz.jsx)(bz.h, {
                className: "CodeEditorButton",
                onClick: () => {
                  Gz(!Zz)
                },
                children: ks(Zz ? "codeEditor:hideTooltips" : "codeEditor:showTooltips")
              })
            }), !uz && (0, Kz.jsx)(qz.h, {
              tooltipInner: ks("codeEditor:worldCodeTooltip"),
              placement: "top",
              hideTooltip: "worldCodeButton" === Bt,
              children: (0, Kz.jsx)(rX.g, {
                tutorial: "welcome",
                step: "worldCodeButton",
                text: ks("codeEditor:tutorialWorldCodeButton"),
                enabled: !!gt,
                placement: "top",
                waitForClick: !0,
                children: (0, Kz.jsx)(bz.y, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    "worldCodeButton" === Bt && ((0, YX.d)("worldCodeButton"), It.current = !0), Ts(), wz.o.Yg("EditLobbyCode", Dz)
                  },
                  children: ks("codeEditor:worldCode")
                })
              })
            }), (dt || Os || Dt) && (0, Kz.jsx)(qz.h, {
              tooltipInner: ks("codeEditor:moreOptionsTooltip"),
              placement: "top",
              children: (0, Kz.jsx)(bz.h, {
                className: "CodeEditorButton CodeEditorMoreButton",
                onClick: () => {
                  jt(!0)
                },
                children: (0, Kz.jsx)(gz.c, {
                  name: "ellipsis"
                })
              })
            })]
          }), ct && (0, Kz.jsx)(wW.e, {
            middleScreenPopupContainerClassName: "CodeEditorMoreOptionsPopup",
            close: () => {
              jt(!1)
            },
            body: (0, Kz.jsx)(PX, {
              engine: Os,
              onSetEngine: ys,
              aiHints: Dt ? {
                shown: Az,
                setShown: yz
              } : null,
              variation: dt ? {
                name: Zt,
                setName: Gt,
                reload: As
              } : null
            })
          })]
        })
      })),
      wO = new Set(["makeReport", "makeDiscordReport", "inviteLink"]);

    function DO(zz) {
      return "inventory" === zz
    }
    const gO = (0, Wz.memo)((function() {
      const {
        openEverythingMenuName: zz,
        openInGameMenuName: tz
      } = (0, Qz.h)(["openEverythingMenuName", "openInGameMenuName"]), sz = (0, Cz.l)("fullInventory"), Xz = (0, Wz.useRef)(null), Oz = (0, St.n)();
      (0, Jz.g)("toggleMenu", (zz => {
        var tz;
        if (!Oz.shown) return;
        const sz = Qz.b.get("openInGameMenuName");
        let Fz = zz.split("|")[0];
        const Wz = null !== (tz = zz.split("|")[1]) && void 0 !== tz ? tz : null;
        ("closeCurrentMenu" === Wz && sz || Fz === sz) && (Xz.current = null, Fz = null);
        const oz = "closeCurrentMenu" === Wz ? null : Wz;
        Xz.current !== oz && (Xz.current = oz), null !== Fz && (0, xW.n)(xW.c, {
          keepsMovement: DO(Fz)
        }), Qz.b.set({
          openInGameMenuName: Fz
        })
      }));
      const oz = (0, Wz.useCallback)((zz => () => {
          wz.o.Yg("toggleMenu", zz)
        }), []),
        vz = (0, Wz.useRef)({
          cantCrouchIfNotFullscreen: oz("cantCrouchIfNotFullscreen"),
          makeReport: oz("makeReport"),
          makeDiscordReport: oz("makeDiscordReport"),
          editBook: oz("editBook"),
          editNameTag: oz("editNameTag"),
          inventory: oz("inventory"),
          inviteLink: oz("inviteLink"),
          writeOnBoard: oz("writeOnBoard"),
          codeEditor: oz("codeEditor"),
          lobbyCodeEditor: oz("lobbyCodeEditor"),
          customLobbyBlockEditor: oz("customLobbyBlockEditor"),
          ironChestPasskeyInput: oz("ironChestPasskeyInput"),
          petUi: oz("petUi")
        }),
        Uz = (0, Wz.useCallback)((() => {
          Qz.b.set({
            openInGameMenuName: null
          })
        }), []),
        uz = (0, Wz.useRef)(null);
      return (0, Wz.useEffect)((() => {
        if (tz) {
          var zz;
          (0, xW.n)(xW.c, {
            keepsMovement: DO(tz)
          }), uz.current = wO.has(tz) ? null !== (zz = Qz.b.get("openEverythingMenuName")) && void 0 !== zz ? zz : uz.current : null, Qz.b.set({
            openEverythingMenuName: null
          })
        } else {
          const zz = uz.current;
          uz.current = null, null !== zz && null === Qz.b.get("openEverythingMenuName") && Qz.b.set({
            openEverythingMenuName: zz
          }), Xz.current = null, (0, xW.m)(xW.c)
        }
      }), [tz]), (0, Wz.useEffect)((() => {
        null !== zz && Uz()
      }), [zz, Uz]), (0, Kz.jsxs)(Kz.Fragment, {
        children: [(0, Kz.jsx)(Fz.g, {
          show: "clientGame" === tz
        }), (0, Kz.jsx)(UW, {
          show: "cantCrouchIfNotFullscreen" === tz,
          onOpen: vz.current.cantCrouchIfNotFullscreen,
          onClose: Uz
        }), (0, Kz.jsx)(PW, {
          show: "makeReport" === tz,
          onOpen: vz.current.makeReport,
          onClose: Uz
        }), (0, Kz.jsx)(YW, {
          show: "makeDiscordReport" === tz,
          onOpen: vz.current.makeDiscordReport,
          onClose: Uz
        }), (0, Kz.jsx)(Bs, {
          show: "editBook" === tz,
          onOpen: vz.current.editBook,
          onClose: Uz
        }), (0, Kz.jsx)(gs, {
          show: "editNameTag" === tz,
          onOpen: vz.current.editNameTag,
          onClose: Uz
        }), sz && (0, Kz.jsx)(OW, {
          show: "inventory" === tz,
          onOpen: vz.current.inventory,
          onClose: Uz,
          variation: Xz.current
        }), (0, Kz.jsx)(Vt, {
          show: "inviteLink" === tz,
          onClose: Uz,
          option: Xz.current
        }), (0, Kz.jsx)(yz, {
          show: "retentionFeatures" === tz,
          onClose: Uz
        }), (0, Kz.jsx)(Ds, {
          show: "writeOnBoard" === tz,
          onOpen: vz.current.writeOnBoard,
          onClose: Uz
        }), (0, Kz.jsx)(bO, {
          show: "lobbyCodeEditor" === tz,
          onOpen: vz.current.lobbyCodeEditor,
          onClose: Uz,
          isLobbyCode: !0
        }), (0, Kz.jsx)(bO, {
          show: "codeEditor" === tz,
          onOpen: vz.current.codeEditor,
          onClose: Uz,
          isLobbyCode: !1
        }), (0, Kz.jsx)(JW, {
          show: "customLobbyBlockEditor" === tz,
          onOpen: vz.current.customLobbyBlockEditor,
          onClose: Uz
        }), (0, Kz.jsx)(Qs, {
          show: "ironChestPasskeyInput" === tz,
          onOpen: vz.current.ironChestPasskeyInput,
          onClose: Uz
        }), (0, Kz.jsx)(TW, {
          togglePointerLock: !0,
          show: "petUi" === tz,
          onOpen: vz.current.petUi,
          onClose: Uz
        })]
      })
    }))
  },
  35992: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => vO
    });
    sz(36e3);
    var Fz = sz(65),
      Wz = sz(1020),
      Xz = sz.n(Wz),
      Oz = sz(3408),
      oz = sz(1416),
      vz = sz(1831),
      Uz = sz(1087);

    function Kz() {
      const zz = 2e3,
        [tz, sz] = (0, Fz.useState)(null),
        [Wz, Kz] = (0, Fz.useState)(null),
        uz = (0, Fz.useRef)(null);
      (0, oz.g)("showBottomMessage", (tz => {
        let {
          message: sz,
          timeoutLength: Fz = zz,
          type: Wz
        } = tz;
        Kz({
          message: sz,
          type: Wz
        }), clearTimeout(uz.current), uz.current = setTimeout((() => {
          Kz(null)
        }), Fz)
      })), (0, oz.g)("showPermanentBottomMessage", (zz => {
        sz(zz)
      })), (0, Fz.useEffect)((() => ((0, Oz.c)((() => {
        sz(null)
      })), () => {
        clearTimeout(uz.current)
      })), []);
      const Nz = Wz || tz;
      return Nz ? (0, Uz.jsx)("div", {
        className: Xz()("BottomScreenMessage", Nz.type),
        children: (0, Uz.jsx)(vz.c, {
          text: Nz.message
        })
      }) : null
    }
    var uz = sz(2250),
      Nz = sz(1857),
      bz = sz(1483),
      wz = sz(2294);

    function Dz() {
      let zz;
      const tz = () => {
          clearTimeout(zz), zz = setTimeout((() => {
            Nz.gameBridge.latest("connectedGame").replay || (Nz.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, bz.navigatePreserveSearch)("/"))
          }), 3e5)
        },
        sz = () => {
          clearTimeout(zz)
        };
      return window.addEventListener("focus", sz), window.addEventListener("blur", tz), () => {
        window.removeEventListener("blur", tz), window.removeEventListener("focus", sz), clearTimeout(zz)
      }
    }
    var gz = sz(1116),
      Hz = sz(1113),
      Bz = sz(308),
      Pz = sz(2290),
      rz = sz(34),
      Yz = sz(1884),
      xz = sz(44),
      mz = sz(1901),
      Jz = sz(30),
      Iz = sz(1904),
      Cz = sz(1358),
      ez = sz(8321),
      Zz = sz(1926),
      Gz = sz(1173);
    const Tz = (0, Fz.memo)((function() {
      const {
        isTouchScreen: zz,
        loadingOverlayVisible: tz,
        openInGameMenuName: sz,
        openEverythingMenuName: Wz
      } = (0, Jz.h)(["isTouchScreen", "loadingOverlayVisible", "openInGameMenuName", "openEverythingMenuName"]), Oz = (0, Cz.j)();
      (0, Hz.c)();
      const oz = (0, Pz.e)("showBasicMovementControls"),
        [vz, Kz] = (0, Fz.useState)("movement"),
        uz = "movement" === vz,
        Nz = Oz && !1 !== oz;
      (0, Fz.useEffect)((() => {
        "padActions" !== vz || Nz || Kz("done")
      }), [vz, Nz]);
      const bz = tz || null !== sz || null !== Wz,
        wz = (0, Fz.useRef)({
          step: vz,
          ms: 0
        });
      return (0, Fz.useEffect)((() => {
        if (bz || "done" === vz) return;
        wz.current.step !== vz && (wz.current = {
          step: vz,
          ms: 0
        });
        const zz = wz.current,
          tz = performance.now(),
          sz = setTimeout((() => {
            Kz("movement" === vz && (0, Cz.c)() ? "padActions" : "done")
          }), 7e3 - zz.ms);
        return () => {
          clearTimeout(sz), zz.ms += performance.now() - tz
        }
      }), [bz, vz]), xz.f.getItem(Bz.Jb) > 2 ? (0, Uz.jsx)(yz, {
        showingMovementControls: !1
      }) : (0, Uz.jsxs)(Uz.Fragment, {
        children: [zz && !Oz || !uz || !1 === oz ? null : (0, Uz.jsxs)("div", {
          className: Xz()("ControlsTutorialDiv", {
            Covered: bz
          }),
          children: [(0, Uz.jsx)(cz, {}), (0, Uz.jsx)(Az, {
            header: "Sprint",
            noaAction: "sprint"
          }), (0, Uz.jsx)(Az, {
            header: "Jump",
            noaAction: "jump"
          })]
        }), "padActions" === vz && Nz && (0, Uz.jsx)(jz, {
          covered: bz
        }), (0, Uz.jsx)(yz, {
          showingMovementControls: "done" !== vz
        })]
      })
    }));

    function cz() {
      const zz = (0, Cz.j)();
      return (0, Uz.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, Uz.jsx)("div", {
          className: "KeyHeader",
          children: "Move"
        }), zz && (0, Uz.jsx)(Iz.b, {
          noaAction: "forward"
        }), !zz && (0, Uz.jsxs)(Uz.Fragment, {
          children: [(0, Uz.jsx)("div", {
            className: "WasdKeysTopRow",
            children: (0, Uz.jsx)(Iz.b, {
              noaAction: "forward"
            })
          }), (0, Uz.jsxs)("div", {
            className: "WasdKeysBottomRow",
            children: [(0, Uz.jsx)(Iz.b, {
              noaAction: "left"
            }), (0, Uz.jsx)(Iz.b, {
              noaAction: "backward"
            }), (0, Uz.jsx)(Iz.b, {
              noaAction: "right"
            })]
          })]
        })]
      })
    }

    function jz(zz) {
      let {
        covered: tz
      } = zz;
      const {
        t: sz
      } = (0, Gz.B)(), Fz = (0, Pz.e)("useInventory");
      return (0, Uz.jsxs)("div", {
        className: Xz()("ControlsTutorialDiv", {
          Covered: tz
        }),
        children: [(0, Uz.jsx)(Az, {
          header: sz("controller:tutorialMine"),
          noaAction: "primary-fire"
        }), (0, Uz.jsx)(Az, {
          header: sz("controller:tutorialPlace"),
          noaAction: "alt-fire"
        }), !1 !== Fz && (0, Uz.jsx)(Az, {
          header: sz("controller:tutorialInventory"),
          noaAction: "OpenInventory"
        }), (0, Uz.jsx)(Az, {
          header: sz("controller:tutorialPause"),
          noaAction: "OpenSettings"
        })]
      })
    }

    function Az(zz) {
      let {
        header: tz,
        noaAction: sz
      } = zz;
      return (0, Uz.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, Uz.jsx)("div", {
          className: "KeyHeader",
          children: tz
        }), (0, Uz.jsx)(Iz.b, {
          noaAction: sz
        })]
      })
    }

    function yz(zz) {
      let {
        showingMovementControls: tz
      } = zz;
      const {
        isTouchScreen: sz
      } = (0, Jz.h)(["isTouchScreen"]), Wz = (0, Cz.j)(), Xz = (0, Zz.c)("OpenShop"), [Oz, oz] = (0, Fz.useState)(!1), vz = `SeenShopControls|${(0,mz.h)("connectedGame",(zz=>zz.gameNameWithVariation))}`, Kz = () => (!(0, Cz.c)() || null !== (0, ez.c)("OpenShop")) && !xz.f.getItem(vz) && Yz.e.get("shopInfo") && !tz, uz = () => (oz(!0), xz.f.setItem(vz, !0), (0, Cz.c)() || rz.o.Yg("showShopTouchTutorial"), setTimeout((() => {
        oz(!1)
      }), 7e3));
      (0, Fz.useEffect)((() => {
        let zz;
        const tz = rz.o.subscribe("showShopTutorial", (() => {
          Kz() && (zz = uz())
        }));
        return () => {
          clearTimeout(zz), rz.o.unsubscribe(tz)
        }
      }), [tz]);
      const Nz = (0, Fz.useRef)();
      return (0, Pz.d)("currencyAmounts", (zz => {
        if (Kz()) {
          let sz = !1;
          const Fz = Yz.e.get("shopInfo");
          for (const Wz in Fz) {
            for (const Xz in Fz[Wz].items) {
              var tz;
              const Oz = Fz[Wz].items[Xz];
              if (void 0 !== Oz.currency && zz[Oz.currency] && Oz.cost <= zz[Oz.currency].amount && (null === (tz = Oz.hidden) || void 0 === tz || !tz)) {
                sz = !0;
                break
              }
            }
            if (sz) break
          }
          sz && (Nz.current = uz())
        }
      })), (0, Fz.useEffect)((() => () => {
        clearTimeout(Nz.current)
      }), [tz]), !Oz || Wz && !Xz ? null : (0, Uz.jsx)("div", {
        className: "ControlsTutorialDiv",
        children: sz && !Wz ? null : (0, Uz.jsx)(Az, {
          header: "Shop",
          noaAction: "OpenShop"
        })
      })
    }
    var Mz = sz(1333),
      dz = sz(1036);
    const hz = (0, Fz.memo)((function() {
      return (0, Hz.c)(), (0, Uz.jsx)(Qz, {})
    }));
    class Qz extends Fz.Component {
      constructor(zz) {
        super(zz), this.showQueue = [], this.slideDuration = 1, this.state = {
          showQueue: [],
          currState: null
        }, this.currMessage = null, this.justShowed = !1
      }
      componentDidMount() {
        this.sub = rz.o.subscribe("TopRightHelper", (zz => {
          this.showQueue.push(zz), this.setState({
            showQueue: this.showQueue
          })
        }))
      }
      componentWillUnmount() {
        rz.o.unsubscribe(this.sub), clearTimeout(this.slideOutTimeout), clearTimeout(this.hidingMessageTimeout)
      }
      componentDidUpdate(zz, tz) {
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
        let zz, tz, sz, Fz, Wz, Xz = !0;
        if (this.state.showQueue.length > 0 && null === this.state.currState ? (this.currMessage = this.state.showQueue[0], this.justShowed = !0, zz = "slideIn") : "slideOut" === this.state.currState ? zz = "slideOut" : null === this.currMessage && (Xz = !1), this.currMessage) {
          const Xz = this.currMessage.color || "rgb(102, 102, 102)";
          tz = {
            width: this.currMessage.width || "250px",
            height: this.currMessage.height || "70px",
            animation: "1s " + ("slideOut" === zz ? "HelperSlideKeyFrameReverse" : "HelperSlideKeyFrame")
          }, sz = {
            backgroundColor: Xz
          }, Fz = {
            animation: "2s " + ("slideOut" === zz ? "CloseNotification" : "ExpandNotification")
          }, Wz = {
            fontSize: this.currMessage.fontSize || "16px",
            animation: "2s " + ("slideOut" === zz ? "textDisappear" : "textAppear")
          }
        }
        return Xz ? (0, Uz.jsxs)("div", {
          className: "TopRightHelperBox",
          style: {
            ...tz
          },
          children: [(0, Uz.jsx)("div", {
            className: "LeftSide",
            style: sz,
            children: (0, Uz.jsx)(dz.c, {
              name: this.currMessage.icon,
              className: `fa-${this.currMessage.iconSizeMult||3}x HelperIcon`
            })
          }), (0, Uz.jsx)("div", {
            className: "RightSide",
            style: Fz,
            children: (0, Uz.jsx)("div", {
              className: "HelperText",
              style: Wz,
              children: this.currMessage.text
            })
          })]
        }) : null
      }
    }
    var kz = sz(36002),
      iz = sz(1375);
    const Lz = (0, iz.g)((zz => zz.PadSneakChip));

    function lz(zz) {
      const [tz, sz, Fz] = function(zz) {
        const tz = parseInt(zz.substring(1), 16),
          sz = (tz >> 16) / 255,
          Fz = (tz >> 8 & 255) / 255,
          Wz = (255 & tz) / 255,
          Xz = Math.max(sz, Fz, Wz),
          Oz = Math.min(sz, Fz, Wz),
          oz = (Xz + Oz) / 2,
          vz = Xz - Oz;
        if (0 === vz) return [0, 0, oz];
        const Uz = vz / (1 - Math.abs(2 * oz - 1));
        let Kz;
        Kz = Xz === sz ? (Fz - Wz) / vz % 6 : Xz === Fz ? (Wz - sz) / vz + 2 : (sz - Fz) / vz + 4;
        return [(60 * Kz + 360) % 360, Uz, oz]
      }(zz), Wz = 0 === sz ? 0 : Math.min(.6, sz + .03), Xz = Fz > .5 ? -1 : 1, Oz = nz(Fz + .09 * Xz);
      return {
        panel: zz,
        slot: az(tz, Wz, Oz),
        slotSelected: az(tz, Wz, nz(Oz + .2 * Xz)),
        slotUnavailable: az(tz, Wz, nz(Fz + -.1 * Xz))
      }
    }

    function nz(zz) {
      return Math.min(1, Math.max(0, zz))
    }

    function az(zz, tz, sz) {
      const Fz = (1 - Math.abs(2 * sz - 1)) * tz,
        Wz = Fz * (1 - Math.abs(zz / 60 % 2 - 1)),
        Xz = sz - Fz / 2;
      let Oz;
      return Oz = zz < 60 ? [Fz, Wz, 0] : zz < 120 ? [Wz, Fz, 0] : zz < 180 ? [0, Fz, Wz] : zz < 240 ? [0, Wz, Fz] : zz < 300 ? [Wz, 0, Fz] : [Fz, 0, Wz], "#" + Oz.map((zz => function(zz) {
        return Math.round(255 * zz).toString(16).padStart(2, "0")
      }(zz + Xz))).join("")
    }
    var qz = sz(36027),
      Sz = sz(3967),
      Vz = sz(2273),
      Rz = sz(2277),
      pz = sz(36071),
      fz = sz(4450),
      Ez = sz(1435),
      zt = sz(580);

    function tt(zz, tz, sz, Fz) {
      zz.style.display = "";
      const Wz = zz.offsetWidth,
        Xz = zz.offsetHeight,
        Oz = Math.min(Math.max((tz.left + tz.right) / 2 - Wz / 2, 8), window.innerWidth - 8 - Wz);
      let oz = tz.top - sz - Xz;
      const vz = [...Fz].sort(((zz, tz) => tz.top - zz.top));
      for (const Uz of vz) Oz < Uz.right && Oz + Wz > Uz.left && oz < Uz.bottom && oz + Xz > Uz.top && (oz = Uz.top - 8 - Xz);
      return oz < 8 ? (zz.style.display = "none", null) : (zz.style.transform = `translate(${Oz-tz.left}px, ${oz-tz.top}px)`, {
        left: Oz,
        top: oz,
        right: Oz + Wz,
        bottom: oz + Xz
      })
    }

    function st(zz) {
      const tz = [];
      for (const sz of document.querySelectorAll(zz)) {
        const zz = sz.getBoundingClientRect();
        zz.width > 0 && "visible" === getComputedStyle(sz).visibility && tz.push(zz)
      }
      return tz
    }

    function Ft(zz, tz) {
      return zz.clientX >= tz.left - 8 && zz.clientX <= tz.right + 8 && zz.clientY >= tz.top - 8 && zz.clientY <= tz.bottom + 8
    }
    var Wt = sz(8376);
    class Xt {
      constructor(zz) {
        this.deps = zz, this.phase = "idle", this.armTimer = null, this.suspended = !1
      }
      get locked() {
        return "locked" === this.phase
      }
      get offered() {
        return "armed" === this.phase || "ready" === this.phase
      }
      target(zz) {
        zz && "armed" === this.phase ? this.setPhase("ready") : zz || "ready" !== this.phase || this.setPhase("armed")
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
      hold(zz, tz) {
        this.suspended || (this.offered ? tz || this.setPhase("idle") : zz && "idle" === this.phase ? (this.setPhase("charging"), this.armTimer = setTimeout((() => {
          this.armTimer = null, this.onArm(), this.setPhase("armed")
        }), 1e3)) : zz || "charging" !== this.phase || this.setPhase("idle"))
      }
      onArm() {}
      setPhase(zz) {
        null !== this.armTimer && (clearTimeout(this.armTimer), this.armTimer = null);
        const tz = this.phase;
        this.phase = zz, this.deps.onPhase(zz, tz)
      }
    }
    const Ot = 25 * Math.PI / 180,
      ot = 45 * Math.PI / 180;
    class vt extends Xt {
      constructor() {
        super(...arguments), this.speed = 0, this.armedSpeed = 0
      }
      get lockedSpeed() {
        return this.armedSpeed
      }
      move(zz, tz, sz) {
        this.speed = sz;
        const Fz = Math.hypot(zz, tz),
          Wz = Fz > 0 ? Math.acos(Math.min(1, -tz / Fz)) : Math.PI;
        this.hold(Fz >= .8 && Wz <= Ot, Fz >= .5 && Wz <= ot)
      }
      onArm() {
        this.armedSpeed = this.speed
      }
    }
    var Ut = sz(1269);

    function Kt(zz, tz) {
      const sz = (0, Fz.useRef)(null),
        Wz = (0, Fz.useRef)(tz);
      return Wz.current = tz, (0, Fz.useEffect)((() => {
        if (!zz) return;
        const {
          create: tz,
          elementRef: Fz,
          ringRef: Xz,
          classPrefix: Oz,
          keptBehindMovementPanels: oz,
          resizeEnds: vz
        } = Wz.current, Uz = {
          charging: `${Oz}Charging`,
          armed: `${Oz}Armed`,
          ready: `${Oz}Ready`,
          locked: `${Oz}Locked`
        };
        let Kz = null;
        const uz = tz({
          onPhase: (zz, tz) => {
            const sz = Fz.current;
            if (null !== sz) {
              for (const [tz, Fz] of Object.entries(Uz)) sz.classList.toggle(Fz, tz === zz);
              if ("charging" === zz) Kz = Xz.current.animate([{
                strokeDashoffset: 1
              }, {
                strokeDashoffset: 0
              }], {
                delay: 400,
                duration: 600,
                fill: "forwards"
              });
              else if ("idle" === zz) {
                var Oz;
                null === (Oz = Kz) || void 0 === Oz || Oz.cancel(), Kz = null
              }
              var oz, vz;
              if ("armed" === zz && "charging" === tz && Wz.current.onArmed(), "ready" === zz && Wt.e.play("lockReady"), "locked" === zz) Wt.e.play("lockLocked"), null === (oz = (vz = Wz.current).onLocked) || void 0 === oz || oz.call(vz);
              "locked" === tz && Wz.current.onUnlocked()
            }
          }
        });
        sz.current = uz;
        const Nz = () => {
            uz.suspend()
          },
          bz = () => {
            "hidden" === document.visibilityState && Nz()
          },
          wz = () => {
            vz ? uz.suspend() : uz.suspendArming()
          },
          Dz = (0, Ut.i)((zz => {
            let {
              keepsMovement: tz
            } = zz;
            tz && oz ? uz.suspendArming() : Nz()
          }));
        return document.addEventListener("visibilitychange", bz), window.addEventListener("blur", Nz), window.addEventListener("resize", wz), () => {
          Dz(), document.removeEventListener("visibilitychange", bz), window.removeEventListener("blur", Nz), window.removeEventListener("resize", wz), uz.cancel(), sz.current = null
        }
      }), [zz]), (0, mz.d)("localPlayerAliveSet", (() => {
        var zz;
        null === (zz = sz.current) || void 0 === zz || zz.suspend()
      })), sz
    }
    var ut = sz(2304),
      Nt = sz(2313),
      bt = sz(1106),
      wt = sz(3068),
      Dt = sz(2321);

    function gt(zz, tz, sz) {
      const Fz = function(zz, tz, sz) {
        const Fz = sz.map((sz => ({
            left: Math.max(0, sz.left),
            top: Math.max(0, sz.top),
            right: Math.min(zz, sz.right),
            bottom: Math.min(tz, sz.bottom)
          }))).filter((zz => zz.right > zz.left && zz.bottom > zz.top)),
          Wz = [...new Set([0, tz, ...Fz.flatMap((zz => [zz.top, zz.bottom]))])].sort(((zz, tz) => zz - tz)),
          Xz = [];
        for (let Oz = 0; Oz < Wz.length - 1; Oz++) {
          const tz = Wz[Oz],
            sz = Wz[Oz + 1],
            oz = Fz.filter((zz => zz.top <= tz && zz.bottom >= sz)).map((zz => [zz.left, zz.right])).sort(((zz, tz) => zz[0] - tz[0]));
          let vz = 0;
          for (const [zz, Fz] of oz) zz > vz && Xz.push({
            left: vz,
            top: tz,
            right: zz,
            bottom: sz
          }), vz = Math.max(vz, Fz);
          vz < zz && Xz.push({
            left: vz,
            top: tz,
            right: zz,
            bottom: sz
          })
        }
        return Xz
      }(zz, tz, sz);
      if (0 === Fz.length) return 'path("M0 0Z")';
      if (1 === Fz.length && 0 === Fz[0].left && 0 === Fz[0].top && Fz[0].right === zz && Fz[0].bottom === tz) return "";
      const Wz = zz => Math.round(10 * zz) / 10;
      return `path("${Fz.map((zz=>`M${Wz(zz.left)} ${Wz(zz.top)}H${Wz(zz.right)}V${Wz(zz.bottom)}H${Wz(zz.left)}Z`)).join("")}")`
    }

    function Ht(zz, tz, sz) {
      let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16;
      const Wz = [],
        Xz = 2 * sz / Fz;
      for (let Oz = 0; Oz < Fz; Oz++) {
        const Fz = tz - sz + Oz * Xz,
          oz = Fz + Xz,
          vz = Math.min(Math.max(tz, Fz), oz) - tz,
          Uz = Math.sqrt(Math.max(0, sz * sz - vz * vz));
        Wz.push({
          left: zz - Uz,
          top: Fz,
          right: zz + Uz,
          bottom: oz
        })
      }
      return Wz
    }
    var Bt = sz(8381),
      Pt = sz(36053);

    function rt(zz) {
      const tz = zz.getBoundingClientRect(),
        sz = {
          left: tz.left,
          top: tz.top,
          right: tz.right,
          bottom: tz.bottom
        },
        Fz = (0, pz.e)(zz);
      if (Fz.whole) return [sz];
      const Wz = function(zz) {
          const tz = zz.right - zz.left,
            sz = zz.bottom - zz.top,
            Fz = Math.min(tz, sz) / 2,
            Wz = (zz.left + zz.right) / 2,
            Xz = (zz.top + zz.bottom) / 2;
          return tz >= sz ? [{
            left: zz.left + Fz,
            top: zz.top,
            right: zz.right - Fz,
            bottom: zz.bottom
          }, ...Ht(zz.left + Fz, Xz, Fz), ...Ht(zz.right - Fz, Xz, Fz)] : [{
            left: zz.left,
            top: zz.top + Fz,
            right: zz.right,
            bottom: zz.bottom - Fz
          }, ...Ht(Wz, zz.top + Fz, Fz), ...Ht(Wz, zz.bottom - Fz, Fz)]
        }(sz),
        Xz = Fz.keyBox;
      if (Xz) {
        const zz = (sz.left + sz.right) / 2,
          tz = (sz.top + sz.bottom) / 2;
        Wz.push({
          left: zz - Xz.width / 2,
          top: tz - Xz.height / 2,
          right: zz + Xz.width / 2,
          bottom: tz + Xz.height / 2
        })
      }
      return Wz
    }

    function Yt(zz) {
      const tz = zz.getBoundingClientRect();
      return 0 === tz.width && 0 === tz.height || "visible" !== getComputedStyle(zz).visibility ? [] : [(0, Bt.k)(tz, 44)]
    }

    function xt(zz, tz) {
      (0, Fz.useEffect)((() => {
        const sz = zz.current;
        if (!tz || !sz) return;
        const Fz = () => {
          const zz = Array.from(document.querySelectorAll(".TouchComponentsButtons .TouchKeyHit, .TouchInteractHit")),
            tz = zz.find((zz => zz.classList.contains("TouchInteractHit")));
          tz !== Wz && (Wz && Xz.unobserve(Wz), Wz = tz, tz && Xz.observe(tz));
          const Fz = Array.from(document.querySelectorAll(Dt.c)),
            Oz = [...zz.flatMap((zz => rt(zz))), ...Fz.flatMap(Yt)],
            oz = function(zz, tz) {
              const sz = tz.map((tz => ({
                left: tz.left - zz.left,
                top: tz.top - zz.top,
                right: tz.right - zz.left,
                bottom: tz.bottom - zz.top
              })));
              return gt(Math.ceil(zz.width), Math.ceil(zz.height), sz)
            }(sz.getBoundingClientRect(), Oz);
          sz.style.clipPath !== oz && (sz.style.clipPath = oz)
        };
        let Wz;
        const Xz = new ResizeObserver((() => {
          Fz()
        }));
        Fz(), Xz.observe(sz);
        const Oz = sz.closest(".InGameUi"),
          oz = new MutationObserver(Fz);
        Oz && oz.observe(Oz, {
          attributes: !0,
          attributeFilter: ["class", Pt.g]
        });
        const vz = [(0, rz.q)(wt.b, Fz), (0, rz.q)(Dt.o, Fz), (0, rz.q)(Dt.f, Fz)];
        return () => {
          Xz.disconnect(), oz.disconnect();
          for (const zz of vz) zz();
          sz.style.clipPath = ""
        }
      }), [zz, tz])
    }
    var mt = sz(4042);

    function Jt(zz) {
      var tz;
      let {
        onMove: sz,
        mode: Wz,
        speedCurve: Xz,
        autorun: Oz = !1
      } = zz;
      const oz = (0, Fz.useRef)(null),
        vz = (0, Fz.useRef)(null),
        Kz = (0, Fz.useRef)(null),
        uz = (0, Fz.useRef)(null),
        bz = (0, Fz.useRef)(null),
        wz = (0, Fz.useRef)(null),
        Dz = (0, Fz.useRef)(null),
        gz = (0, Fz.useRef)(null),
        Hz = (0, Fz.useRef)(null),
        Bz = (0, Fz.useRef)(!1),
        Pz = (0, Fz.useRef)({
          clientX: 0,
          clientY: 0
        }),
        {
          t: rz
        } = (0, Gz.B)(),
        Yz = (0, mt.n)(Wz),
        xz = (0, Jz.h)(["notchSize"]).notchSize,
        mz = xz.left,
        Iz = (0, Fz.useRef)(16),
        Cz = (0, Nt.e)(),
        [ez, Zz, Tz] = "pinned" === Wz ? ut.q : null !== (tz = Cz.hudElements.joystick) && void 0 !== tz ? tz : ut.q,
        cz = "pinned" === Wz ? null : Cz.hudSafe,
        jz = Math.max(mt.i, mt.l * Tz);
      xt(vz, "pinned" !== Wz);
      const Az = function(zz, tz, sz, Wz, Xz) {
        const Oz = (0, Fz.useRef)(null),
          oz = () => {
            clearInterval(Oz.current), Oz.current = null
          },
          vz = Kt(zz, {
            create: zz => new vt(zz),
            elementRef: tz,
            ringRef: sz,
            classPrefix: "Autorun",
            keptBehindMovementPanels: !0,
            resizeEnds: !0,
            onArmed: Xz,
            onLocked: () => {
              Oz.current = setInterval((() => {
                Nz.gameBridge.lookup("dropAhead", null) && (Wt.e.play("autorunLedgeStop"), vz.current.cancel())
              }), 100)
            },
            onUnlocked: () => {
              oz(), Wz()
            }
          });
        return (0, Fz.useEffect)((() => oz), []), vz
      }(Oz, Kz, Dz, (() => {
        Lz(), iz()
      }), (() => {
        yz(), null === Hz.current && Az.current.suspend()
      }));

      function yz() {
        const zz = Kz.current.getBoundingClientRect();
        Hz.current = tt(gz.current, zz, 80, st(`.TouchInventoryKey, ${Dt.c}`)), Bz.current = null !== Hz.current && Ft(Pz.current, Hz.current)
      }

      function Mz() {
        const {
          innerWidth: zz,
          innerHeight: tz
        } = window, sz = (0, Dt.E)(cz, zz, tz, (0, Dt.J)(xz, zz, tz), Iz.current);
        return {
          left: sz[3],
          bottom: sz[2]
        }
      }

      function hz(zz) {
        Kz.current.style.transform = `translate(${zz.x-jz}px, ${zz.y-jz}px)`
      }

      function Qz(zz) {
        const tz = Kz.current;
        tz.classList.add("Resting"), tz.classList.toggle("Returning", zz), tz.style.display = "fixed_hidden" === Wz ? "none" : "block", hz(function() {
          const {
            innerWidth: zz,
            innerHeight: tz
          } = window, sz = Mz(), Fz = mz * zz / 100 + sz.left, Wz = oz.current.offsetHeight || tz, Xz = ((0, bt.d)(zz, tz) ? mt.g : mt.d) + sz.bottom;
          return {
            x: Math.min(zz - jz, Math.max(jz, Fz + mt.h + ez * zz)),
            y: Math.min(Wz - jz, Math.max(jz, Wz - Xz + Zz * Wz))
          }
        }())
      }
      const kz = (0, Fz.useRef)({
        restFixed: Qz,
        release: lz
      });

      function iz() {
        Yz ? Qz("fixed_shown" === Wz) : "floating" === Wz && (Kz.current.style.display = "none"), sz({
          x: 0,
          y: 0
        })
      }

      function Lz() {
        wz.current = null, bz.current = null, uz.current.style.transform = "translate(-50%, -50%)"
      }

      function lz(zz) {
        Lz();
        const tz = Az.current;
        zz && null !== tz && void 0 !== tz && tz.lift() ? sz({
          x: 0,
          y: -tz.lockedSpeed
        }) : (null === tz || void 0 === tz || tz.cancel(), iz())
      }

      function nz(zz) {
        const tz = Array.from(zz.touches).find((zz => zz.identifier === wz.current));
        if (null === bz.current || null === wz.current || (0, zt.G)(tz)) return;
        const Fz = Az.current,
          Wz = tz.clientX - bz.current.x,
          Oz = tz.clientY - bz.current.y,
          oz = Math.hypot(Wz, Oz),
          vz = oz > 0 ? Math.min(1, jz / oz) : 0,
          Uz = Wz * vz,
          Kz = Oz * vz,
          Nz = Math.hypot(Uz, Kz) / jz,
          Dz = Xz && Nz > 0 ? Xz(Nz) / Nz : 1;
        uz.current.style.transform = `translate(calc(-50% + ${Uz}px), calc(-50% + ${Kz}px))`;
        const gz = Uz / jz,
          rz = Kz / jz;
        if (sz({
            x: gz * Dz,
            y: rz * Dz
          }), null !== Fz && null !== Hz.current) {
          Fz.move(gz, rz, Nz * Dz), Pz.current = {
            clientX: tz.clientX,
            clientY: tz.clientY
          };
          const zz = Bz.current;
          Bz.current = Ft(tz, Hz.current), Bz.current !== zz && Fz.target(Bz.current)
        }
      }
      return kz.current = {
        restFixed: Qz,
        release: lz
      }, (0, Fz.useLayoutEffect)((() => {
        if (!Yz) return;
        const zz = () => {
          Iz.current = (0, Dt.Q)(document)
        };
        zz(), null === wz.current && kz.current.restFixed(!1);
        const tz = new ResizeObserver((() => {
          zz(), null === wz.current && kz.current.restFixed(!1)
        }));
        tz.observe(oz.current);
        const sz = Kz.current;
        return () => {
          tz.disconnect(), sz.classList.remove("Resting", "Returning"), null === wz.current && (sz.style.display = "", sz.style.transform = "")
        }
      }), [Yz, Wz, xz, ez, Zz, jz, cz]), (0, Fz.useEffect)((() => {
        const zz = zz => {
            const tz = wz.current;
            null === tz || Array.from(zz.touches).some((zz => zz.identifier === tz)) || kz.current.release("touchend" === zz.type && Array.from(zz.changedTouches).some((zz => zz.identifier === tz)))
          },
          tz = () => {
            null !== wz.current && kz.current.release(!1)
          },
          sz = () => {
            "hidden" === document.visibilityState && tz()
          };
        document.addEventListener("touchstart", zz, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchmove", zz, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchend", zz, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchcancel", zz, {
          capture: !0,
          passive: !0
        }), window.addEventListener("blur", tz), document.addEventListener("visibilitychange", sz);
        const Fz = (0, Ut.i)((zz => {
          let {
            keepsMovement: sz
          } = zz;
          sz || tz()
        }));
        return () => {
          Fz(), document.removeEventListener("touchstart", zz, {
            capture: !0
          }), document.removeEventListener("touchmove", zz, {
            capture: !0
          }), document.removeEventListener("touchend", zz, {
            capture: !0
          }), document.removeEventListener("touchcancel", zz, {
            capture: !0
          }), window.removeEventListener("blur", tz), document.removeEventListener("visibilitychange", sz)
        }
      }), []), (0, Fz.useEffect)((() => {
        const zz = oz.current,
          tz = zz => {
            zz.preventDefault()
          };
        return zz.addEventListener("touchstart", tz, {
          passive: !1
        }), () => {
          zz.removeEventListener("touchstart", tz)
        }
      }), []), (0, Uz.jsxs)("div", {
        ref: oz,
        className: "JoystickZone",
        style: Yz && (ez > 0 || Tz > 1 || Mz().left > 0) ? {
          width: `max(35vw, calc(${mz+100*ez}vw + ${Mz().left+mt.h+jz+24}px))`
        } : void 0,
        onTouchStart: function(zz) {
          var tz;
          if (null !== wz.current) return;
          const sz = Array.from(zz.changedTouches).find((zz => {
            var tz;
            return null === (tz = oz.current) || void 0 === tz ? void 0 : tz.contains(zz.target)
          }));
          if (sz) {
            if (null === (tz = Az.current) || void 0 === tz || tz.startTouch(), wz.current = sz.identifier, "pinned" === Wz) {
              const zz = Kz.current.getBoundingClientRect();
              bz.current = {
                x: zz.left + zz.width / 2,
                y: zz.top + zz.height / 2
              }
            } else {
              bz.current = {
                x: sz.clientX,
                y: sz.clientY
              }, Kz.current.classList.remove("Resting", "Returning"), Kz.current.style.display = "block";
              const zz = oz.current.getBoundingClientRect();
              hz({
                x: sz.clientX - zz.left,
                y: sz.clientY - zz.top
              }), Oz && (Pz.current = {
                clientX: sz.clientX,
                clientY: sz.clientY
              }, yz())
            }
            nz(zz)
          }
        },
        onTouchMove: nz,
        children: [(0, Uz.jsx)("div", {
          ref: vz,
          className: "JoystickTouchLayer"
        }), (0, Uz.jsxs)("div", {
          ref: Kz,
          className: "Joystick",
          style: {
            width: 2 * jz + "px",
            height: 2 * jz + "px",
            transform: "pinned" === Wz ? "translate(4vw, calc(50vh - 50%))" : void 0
          },
          children: [(0, Uz.jsx)("div", {
            className: "JoystickBase",
            style: {
              width: 2 * jz + "px",
              height: 2 * jz + "px"
            }
          }), Oz && (0, Uz.jsxs)(Uz.Fragment, {
            children: [(0, Uz.jsx)("svg", {
              className: "AutorunRing",
              viewBox: "0 0 100 100",
              children: (0, Uz.jsx)("circle", {
                ref: Dz,
                cx: "50",
                cy: "50",
                r: "48",
                pathLength: 1
              })
            }), (0, Uz.jsxs)("div", {
              ref: gz,
              className: "AutorunTarget",
              children: [(0, Uz.jsx)(dz.c, {
                name: "lock"
              }), rz("settingsMenu:autoRun")]
            })]
          }), (0, Uz.jsx)("div", {
            ref: uz,
            className: "JoystickKnob",
            style: {
              width: `${jz}px`,
              height: `${jz}px`
            }
          })]
        })]
      })
    }
    const It = .35,
      Ct = .22;

    function et(zz) {
      if (zz < .1) return 0;
      if (zz < It) {
        const tz = (zz - .1) / (It - .1);
        return .06 + .16 * tz * tz
      }
      return zz < .85 ? Ct + .78 * (zz - It) / .5 : 1
    }

    function Zt(zz, tz) {
      const sz = (0, Fz.useRef)(null);
      return (0, Fz.useLayoutEffect)((() => (pz.h.set(zz, sz.current, tz), () => {
        pz.h.set(zz, null)
      })), [zz, tz]), sz
    }
    const Gt = "C",
      Tt = "J",
      ct = "U",
      jt = "P",
      At = "A",
      yt = "G",
      Mt = "X",
      dt = (0, Fz.forwardRef)((function(zz, tz) {
        let {
          slot: sz,
          canvasZone: Wz = !1,
          lit: Oz = !1,
          label: oz,
          className: vz,
          children: Kz,
          ...uz
        } = zz;
        return (0, Fz.useEffect)((() => (rz.o.Yg(wt.b), () => {
          rz.o.Yg(wt.b)
        })), []), (0, Uz.jsx)("div", {
          ref: tz,
          className: Xz()("TouchKeyHit", `TouchSlot${sz}`, vz, {
            CanvasZone: Wz
          }),
          ...uz,
          children: (0, Uz.jsxs)("div", {
            className: Xz()("TouchKey", {
              Lit: Oz,
              Labelled: void 0 !== oz
            }),
            children: [Kz, void 0 !== oz && (0, Uz.jsx)("span", {
              className: "TouchKeyLabel",
              children: oz
            })]
          })
        })
      }));

    function ht(zz, tz) {
      (0, Fz.useEffect)((() => () => {
        tz.current && (tz.current = !1, (0, Rz.x)(zz, !1, {
          isTrusted: !0,
          timeStamp: performance.now()
        }))
      }), [])
    }

    function Qt(zz, tz) {
      const sz = tz ? [Mt] : [jt, Mt];
      return zz.filter((zz => null !== zz)).slice(0, sz.length).map(((zz, tz) => {
        const Wz = sz[tz];
        return (0, Uz.jsx)(Fz.Fragment, {
          children: zz.render(Wz)
        }, `${zz.id}:${Wz}`)
      }))
    }
    var kt = sz(36058);
    class it extends Xt {
      constructor() {
        super(...arguments), this.start = {
          x: 0,
          y: 0
        }, this.moved = !1
      }
      press(zz, tz) {
        this.start = {
          x: zz,
          y: tz
        }, this.moved = !1, this.startTouch(), this.hold(!0, !1)
      }
      move(zz, tz, sz) {
        const Fz = Math.hypot(zz - this.start.x, tz - this.start.y) <= 12;
        this.moved ||= !Fz;
        const Wz = null !== sz && tz < this.start.y - 12 && Ft({
          clientX: zz,
          clientY: tz
        }, sz);
        this.hold(!this.moved, Fz || Wz)
      }
    }
    const Lt = new Set;

    function lt(zz) {
      const tz = new Set(Array.from(zz.touches, (zz => zz.identifier)));
      for (const sz of Lt) {
        for (const zz of sz.ids) tz.has(zz) || sz.ids.delete(zz);
        if (0 === sz.ids.size) {
          Lt.delete(sz);
          sz.pressesOnPointerDown && "touchstart" === zz.type && Array.from(zz.changedTouches).some((zz => zz.target instanceof Node && sz.element.contains(zz.target))) || sz.release()
        }
      }
    }
    if ("undefined" !== typeof window)
      for (const BO of ["touchstart", "touchmove"]) window.addEventListener(BO, lt, {
        capture: !0,
        passive: !0
      });

    function nt(zz) {
      let {
        pressesOnPointerDown: tz = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const sz = (0, Fz.useRef)(zz);
      sz.current = zz;
      const Wz = (0, Fz.useRef)({
        ids: new Set,
        element: null,
        pressesOnPointerDown: tz,
        release: () => {
          sz.current()
        }
      });
      (0, Fz.useEffect)((() => {
        const zz = Wz.current;
        return () => {
          Lt.delete(zz), zz.ids.clear()
        }
      }), []);
      const Xz = zz => {
        const tz = Wz.current;
        for (const sz of Array.from(zz.changedTouches)) tz.ids.delete(sz.identifier);
        0 === tz.ids.size && Lt.delete(tz)
      };
      return {
        onTouchStart: zz => {
          const tz = Wz.current;
          tz.element = zz.currentTarget;
          for (const sz of Array.from(zz.changedTouches)) sz.target instanceof Node && zz.currentTarget.contains(sz.target) && tz.ids.add(sz.identifier);
          tz.ids.size > 0 && Lt.add(tz)
        },
        onTouchEnd: Xz,
        onTouchCancel: Xz
      }
    }

    function qt(zz, tz) {
      return null === tz ? null : (0, kt.d)(zz.nativeEvent.changedTouches, tz.id)
    }

    function St(zz) {
      let {
        lockable: tz
      } = zz;
      const {
        t: sz
      } = (0, Gz.B)(), Wz = "round" === (0, ut.eb)().hudShape, Xz = (0, Fz.useRef)(!1);
      ht(Vz.u.Jump, Xz);
      const Oz = (0, Fz.useRef)(null),
        oz = (0, Fz.useRef)(null),
        vz = (0, Fz.useRef)(null),
        Kz = (0, Fz.useRef)(null),
        uz = (0, Fz.useRef)(null),
        Nz = (0, Fz.useRef)(null),
        bz = (0, Fz.useRef)(!1),
        wz = (zz, tz) => {
          Xz.current = zz, (0, Rz.x)(Vz.u.Jump, zz, tz)
        },
        Dz = function() {
          let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            isTrusted: !0,
            timeStamp: performance.now()
          };
          Xz.current && (Oz.current && (0, Ez.i)(Oz.current, !1), wz(!1, zz))
        },
        gz = Kt(tz, {
          create: zz => new it(zz),
          elementRef: Oz,
          ringRef: oz,
          classPrefix: "JumpLock",
          keptBehindMovementPanels: !1,
          resizeEnds: !1,
          onArmed: () => {
            const zz = Oz.current.getBoundingClientRect(),
              tz = vz.current.parentElement,
              sz = tz.getBoundingClientRect(),
              Fz = {
                left: sz.left + tz.clientLeft,
                top: sz.top + tz.clientTop,
                right: sz.right - tz.clientLeft,
                bottom: sz.bottom - tz.clientTop
              };
            if (uz.current = tt(vz.current, Fz, 16, st(`.TouchKeyHit:not(.JumpKey) > .TouchKey, .TouchInventoryKey, ${Dt.c}`)), null === uz.current) return void gz.current.suspend();
            const Wz = uz.current;
            Nz.current = {
              left: Math.min(zz.left, Wz.left),
              top: Wz.top,
              right: Math.max(zz.right, Wz.right),
              bottom: zz.bottom
            }, bz.current = null !== Kz.current && Ft({
              clientX: Kz.current.x,
              clientY: Kz.current.y
            }, Wz)
          },
          onUnlocked: () => {
            null === Kz.current && Dz()
          }
        }),
        Hz = zz => {
          var tz;
          Kz.current = null, null === (tz = gz.current) || void 0 === tz || tz.cancel(), Dz(zz)
        },
        Bz = nt((() => {
          Hz()
        })),
        Pz = zz => {
          const tz = Kz.current;
          var sz;
          return null === tz ? null !== (sz = gz.current) && void 0 !== sz && sz.locked ? null : "lifted" : qt(zz, tz) ? "lifted" : (0, kt.e)(zz.nativeEvent.touches, tz.id) ? null : "dropped"
        };
      return (0, Uz.jsxs)(dt, {
        ref: Oz,
        slot: Tt,
        className: "JumpKey",
        onTouchStart: zz => {
          Bz.onTouchStart(zz), (0, Ez.i)(zz.currentTarget, !0), null === Kz.current || (0, kt.e)(zz.nativeEvent.touches, Kz.current.id) || Hz();
          const tz = zz.changedTouches[0];
          var sz;
          null === Kz.current && tz && (Kz.current = {
            id: tz.identifier,
            x: tz.clientX,
            y: tz.clientY
          }, null === (sz = gz.current) || void 0 === sz || sz.press(tz.clientX, tz.clientY));
          Xz.current || wz(!0, zz.nativeEvent)
        },
        onTouchMove: zz => {
          const tz = Kz.current,
            sz = qt(zz, tz);
          if (!sz) return;
          const Fz = gz.current;
          if (null === Fz || void 0 === Fz || Fz.move(sz.clientX, sz.clientY, Nz.current), null !== Fz && void 0 !== Fz && Fz.offered) {
            const zz = Ft(sz, uz.current);
            zz !== bz.current && (bz.current = zz, Fz.target(zz))
          }
          tz.x = sz.clientX, tz.y = sz.clientY
        },
        onTouchEnd: zz => {
          var tz;
          Bz.onTouchEnd(zz);
          const sz = Pz(zz);
          null !== sz && ("dropped" !== sz ? (Kz.current = null, null !== (tz = gz.current) && void 0 !== tz && tz.lift() ? (0, Ez.i)(zz.currentTarget, !1) : Dz(zz.nativeEvent)) : Hz(zz.nativeEvent))
        },
        onTouchCancel: zz => {
          Bz.onTouchCancel(zz), null !== Pz(zz) && Hz(zz.nativeEvent)
        },
        children: [(0, Uz.jsx)(dz.c, {
          name: "arrow-up-from-line"
        }), tz && (0, Uz.jsxs)(Uz.Fragment, {
          children: [(0, Uz.jsx)("span", {
            className: "JumpLockBadge",
            children: (0, Uz.jsx)(dz.c, {
              name: "lock"
            })
          }), (0, Uz.jsx)("svg", {
            className: "JumpLockRing",
            viewBox: "0 0 100 100",
            preserveAspectRatio: "none",
            children: (0, Uz.jsx)("rect", {
              ref: oz,
              x: "2",
              y: "2",
              width: "96",
              height: "96",
              rx: Wz ? 48 : 0,
              pathLength: 1
            })
          }), (0, Uz.jsxs)("div", {
            ref: vz,
            className: "JumpLockTarget",
            children: [(0, Uz.jsx)(dz.c, {
              name: "lock"
            }), sz("settingsMenu:jumpLock")]
          })]
        })]
      })
    }
    const Vt = new WeakMap;
    class Rt {
      constructor(zz) {
        this.zones = zz, this.followed = new Map, this.onStart = zz => {
          if (this.releaseMissing(zz.touches), zz.target instanceof HTMLCanvasElement)
            for (let sz = 0; sz < zz.changedTouches.length; sz++) {
              var tz;
              const {
                identifier: Fz,
                clientX: Wz,
                clientY: Xz
              } = zz.changedTouches[sz];
              this.release(Fz);
              const Oz = this.zones.hitZone(Wz, Xz);
              if (!Oz) continue;
              const {
                key: oz
              } = Oz;
              null === (tz = Vt.get(oz)) || void 0 === tz || tz.cancel();
              const vz = {
                hit: Oz.element,
                key: oz,
                x: Oz.x,
                y: Oz.y,
                reach: .6 * Oz.radius
              };
              this.followed.set(Fz, vz), (0, Ez.i)(Oz.element, !0), pt(vz, Wz, Xz)
            }
        }, this.onMove = zz => {
          this.releaseMissing(zz.touches);
          for (let tz = 0; tz < zz.changedTouches.length; tz++) {
            const {
              identifier: sz,
              clientX: Fz,
              clientY: Wz
            } = zz.changedTouches[tz], Xz = this.followed.get(sz);
            Xz && pt(Xz, Fz, Wz)
          }
        }, this.onEnd = zz => {
          for (let tz = 0; tz < zz.changedTouches.length; tz++) this.release(zz.changedTouches[tz].identifier)
        }, this.onVisibilityChange = () => {
          document.hidden && this.releaseAll()
        }
      }
      start() {
        const zz = {
          passive: !0
        };
        return document.addEventListener("touchstart", this.onStart, zz), document.addEventListener("touchmove", this.onMove, zz), document.addEventListener("touchend", this.onEnd, zz), document.addEventListener("touchcancel", this.onEnd, zz), document.addEventListener("visibilitychange", this.onVisibilityChange), () => {
          document.removeEventListener("touchstart", this.onStart), document.removeEventListener("touchmove", this.onMove), document.removeEventListener("touchend", this.onEnd), document.removeEventListener("touchcancel", this.onEnd), document.removeEventListener("visibilitychange", this.onVisibilityChange), this.releaseAll()
        }
      }
      releaseMissing(zz) {
        for (const tz of [...this.followed.keys()])(0, kt.e)(zz, tz) || this.release(tz)
      }
      releaseAll() {
        for (const zz of [...this.followed.keys()]) this.release(zz)
      }
      release(zz) {
        const tz = this.followed.get(zz);
        if (!tz) return;
        this.followed.delete(zz);
        for (const Wz of this.followed.values())
          if (Wz.key === tz.key) return;
        (0, Ez.i)(tz.hit, !1);
        const {
          key: sz
        } = tz, Fz = sz.style.translate;
        sz.style.translate = "", Fz && Vt.set(sz, sz.animate({
          translate: [Fz, "0 0"]
        }, {
          duration: 150,
          easing: "ease-out"
        }))
      }
    }

    function pt(zz, tz, sz) {
      let {
        key: Fz,
        x: Wz,
        y: Xz,
        reach: Oz
      } = zz;
      const oz = tz - Wz,
        vz = sz - Xz,
        Uz = Math.min(1, Oz / (Math.hypot(oz, vz) || 1));
      Fz.style.translate = `${oz*Uz}px ${vz*Uz}px`
    }
    const ft = () => {
      const zz = (0, Sz.n)(),
        tz = (0, Cz.j)();
      return zz || tz
    };

    function Et(zz) {
      (0, pz.j)(zz.x, zz.y)
    }
    const zs = (0, Fz.memo)((function() {
        const zz = ft(),
          {
            joystickMode: tz,
            touchSpeedCurve: sz,
            autorun: Wz
          } = (0, Jz.h)(["clientEscMenuOptions"]).clientEscMenuOptions;
        return (0, Fz.useEffect)((() => ((0, fz.k)(Vz.x.TouchControls, Vz.x.TouchControls), () => {
          (0, fz.k)(Vz.x.TouchControls, 0), (0, pz.j)(0, 0)
        })), []), (0, Uz.jsx)("div", {
          className: Xz()("TouchMovementWrapper", {
            Hidden: zz
          }),
          "data-camera-keeper": "",
          children: (0, Uz.jsx)(Jt, {
            onMove: Et,
            mode: tz,
            speedCurve: sz ? et : void 0,
            autorun: Wz
          })
        })
      })),
      ts = (0, Fz.memo)((function() {
        const zz = ft(),
          {
            clientEscMenuOptions: tz
          } = (0, Jz.h)(["clientEscMenuOptions"]),
          sz = tz.touchActionButtons;
        return (0, Fz.useEffect)((() => new Rt(pz.h).start()), []), (0, Fz.useEffect)((() => {
          rz.o.Yg(wt.b)
        }), [zz]), (0, Uz.jsxs)("div", {
          className: Xz()("TouchComponentsButtons", {
            Hidden: zz
          }),
          "data-camera-keeper": "",
          children: [(0, Uz.jsx)(St, {
            lockable: tz.jumpLock && !zz
          }), (0, Uz.jsx)(bs, {
            hidden: zz,
            actionButtons: sz
          }), (0, Uz.jsx)(Fs, {})]
        })
      }));

    function ss(zz) {
      const tz = tz => sz => {
        (0, Ez.i)(sz.currentTarget, tz), zz(tz, sz.nativeEvent)
      };
      return {
        onPointerDown: tz(!0),
        onPointerUp: tz(!1),
        onPointerCancel: tz(!1)
      }
    }

    function Fs() {
      const zz = (0, Pz.e)("canCrouch"),
        tz = (0, mz.l)("crouching"),
        sz = (0, Fz.useRef)(!1);
      ht(Vz.u.Crouch, sz);
      const Wz = (zz, tz) => {
          sz.current = zz, (0, Rz.x)(Vz.u.Crouch, zz, tz)
        },
        Xz = (0, Fz.useRef)(null),
        Oz = () => {
          sz.current && (Xz.current && (0, Ez.i)(Xz.current, !1), Wz(!1, {
            isTrusted: !0,
            timeStamp: performance.now()
          }))
        },
        oz = nt(Oz);
      return (0, Fz.useEffect)((() => {
        !1 === zz && Oz()
      }), [zz]), !1 === zz ? null : (0, Uz.jsx)(dt, {
        ref: Xz,
        slot: Gt,
        className: "CrouchKey",
        lit: tz,
        ...oz,
        ...ss(Wz),
        children: (0, Uz.jsx)(dz.c, {
          name: "arrow-down-to-line"
        })
      })
    }
    const Ws = [{
        icon: "arrows-rotate"
      }],
      Xs = [{
        icon: "Arrow"
      }],
      Os = [{
        icon: "crosshairs"
      }],
      os = [{
        icon: "swords"
      }],
      vs = [{
        icon: "hand-back-point-up"
      }],
      Us = [{
        icon: "Firecracker"
      }];

    function Ks(zz, tz, sz, Fz) {
      return {
        id: JSON.stringify(tz),
        render: Wz => (0, Uz.jsx)(ws, {
          code: zz,
          slot: Wz,
          icon: tz,
          label: Fz,
          hidden: sz
        })
      }
    }

    function us(zz, tz) {
      return {
        id: "fly",
        render: sz => (0, Uz.jsx)(Ns, {
          slot: sz,
          flying: zz,
          label: tz
        })
      }
    }

    function Ns(zz) {
      let {
        slot: tz,
        flying: sz,
        label: Fz
      } = zz;
      return (0, Uz.jsx)(dt, {
        slot: tz,
        className: "FlyKey",
        lit: sz,
        label: Fz,
        ...ss(((zz, tz) => {
          (0, Rz.x)(Vz.u.Fly, zz, tz)
        })),
        children: (0, Uz.jsx)(dz.c, {
          name: "feather-pointed"
        })
      })
    }

    function bs(zz) {
      var tz, sz;
      let {
        hidden: Fz,
        actionButtons: Wz
      } = zz;
      const {
        t: Xz
      } = (0, Gz.B)(), {
        gun: Oz,
        aimable: oz,
        chargeName: vz
      } = (0, mz.l)("heldItemAim"), Kz = (0, mz.l)("gliderBoostFuel"), {
        canFly: uz,
        flying: Nz
      } = (0, mz.l)("flight"), bz = (0, Pz.e)("touchscreenActionButton"), wz = Oz ? Ws : bz, Dz = oz ? {
        icon: Xs,
        label: Xz("touchKeys:aim")
      } : null, gz = null !== vz ? {
        icon: [{
          icon: vz
        }]
      } : null, Hz = null !== Dz && void 0 !== Dz ? Dz : gz, Bz = null !== (tz = null === (sz = Oz ? Dz : null !== gz && void 0 !== gz ? gz : Dz) || void 0 === sz ? void 0 : sz.icon) && void 0 !== tz ? tz : vs, rz = [!Wz && Hz ? Ks(pz.c.Action2, Hz.icon, Fz, Hz.label) : null, Oz ? Ks(pz.c.Action3, Os, Fz, Xz("touchKeys:scope")) : null, uz ? us(Nz, Xz("touchKeys:fly")) : null];
      return (0, Uz.jsxs)(Uz.Fragment, {
        children: [wz && (0, Uz.jsx)(ws, {
          code: pz.c.Action1,
          slot: yt,
          icon: wz,
          label: Oz ? Xz("touchKeys:reload") : void 0,
          hidden: Fz
        }, JSON.stringify(wz)), Wz && (0, Uz.jsxs)(Uz.Fragment, {
          children: [(0, Uz.jsx)(ws, {
            code: pz.c.Attack,
            slot: At,
            icon: os,
            name: Xz("touchKeys:attack"),
            hidden: Fz
          }), (0, Uz.jsx)(ws, {
            code: pz.c.Use,
            slot: ct,
            icon: Bz,
            name: Xz("touchKeys:use"),
            hidden: Fz
          })]
        }), Qt(rz, Wz), Kz > 0 && (0, Uz.jsx)(ws, {
          code: pz.c.Boost,
          slot: Mt,
          icon: Us,
          label: Xz("touchKeys:boost", {
            fuel: Kz > 99 ? "99+" : Kz
          }),
          hidden: Fz
        })]
      })
    }

    function ws(zz) {
      let {
        code: tz,
        slot: sz,
        icon: Fz,
        label: Wz,
        name: Xz,
        hidden: Oz
      } = zz;
      const oz = Zt(tz, Oz);
      return (0, Uz.jsx)(dt, {
        ref: oz,
        slot: sz,
        className: "TouchActionKey",
        canvasZone: !0,
        label: Wz,
        role: void 0 !== Xz ? "img" : void 0,
        "aria-label": Xz,
        children: (0, Uz.jsx)(vz.c, {
          text: Fz
        })
      })
    }
    var Ds = sz(3948),
      gs = sz(2735),
      Hs = sz(616);
    const Bs = (0, Fz.memo)((function() {
      (0, Hz.c)();
      const zz = (0, Fz.useRef)([]),
        tz = (0, gs.b)(),
        sz = (0, Fz.useRef)(0),
        Wz = (0, Fz.useRef)(0),
        Xz = (0, Fz.useRef)([]),
        Oz = (0, Fz.useRef)(null);

      function Kz(sz, Fz, Wz, Xz) {
        const Oz = (0, Hs.c)(),
          oz = setTimeout((() => {
            zz.current = zz.current.filter((zz => zz.id !== Oz)), tz()
          }), Xz);
        Nz.gameBridge.send("recordFlyingMiddleText", {
          content: sz,
          pX: Fz,
          angle: Wz,
          fX: Xz
        }), zz.current.push({
          id: Oz,
          content: sz,
          pX: Fz,
          fX: Xz,
          removeTimeout: oz,
          angle: Wz
        }), tz()
      }
      return (0, mz.d)("shotDamageToShow", (zz => {
        let {
          damage: tz,
          wasCrit: sz,
          distance: Fz
        } = zz;
        const Wz = -Math.PI / 4 + Math.random() * Math.PI / 2;
        Kz(sz ? [{
          str: tz.toString(),
          style: {
            color: "#ff8a80",
            fontSize: "1.6em"
          }
        }] : [tz.toString()], Fz, Wz, 1e3)
      })), (0, oz.g)("flyingMiddleMessage", (zz => {
        let {
          content: tz,
          pX: Fz,
          fX: oz
        } = zz;
        Xz.current.push({
          content: tz,
          pX: Fz,
          fX: oz
        });
        const vz = () => {
          const {
            content: zz,
            pX: tz,
            fX: Fz
          } = Xz.current.shift(), Oz = function(zz) {
            const tz = -Math.PI / 4,
              sz = Math.PI / 4,
              Fz = sz - tz,
              Wz = (1 + Math.sqrt(5)) / 2,
              Xz = 2 * Math.PI / (Wz * Wz);
            let Oz = zz + Xz;
            for (; Oz > sz;) Oz -= Fz;
            for (; Oz < tz;) Oz += Fz;
            const oz = Math.PI / 6;
            if (Math.abs(Oz - zz) < oz) {
              Oz = zz + (Math.sign(Oz - zz) || 1) * oz, Oz > sz && (Oz = zz - oz), Oz < tz && (Oz = zz + oz)
            }
            return Oz
          }(Wz.current);
          Wz.current = Oz, sz.current = Date.now(), Kz(zz, tz, Oz, Fz)
        };
        if (!Oz.current) {
          const zz = () => {
            Xz.current.length > 0 && vz(), 0 === Xz.current.length && (clearInterval(Oz.current), Oz.current = null)
          };
          Oz.current = setInterval(zz, 200), sz.current + 200 < Date.now() && zz()
        }
        for (; Xz.current.length > 4;) vz()
      })), (0, oz.g)("forceFlyingMiddleMessage", (zz => {
        let {
          content: tz,
          pX: sz,
          angle: Fz,
          fX: Wz
        } = zz;
        Kz(tz, sz, Fz, Wz)
      })), (0, Fz.useEffect)((() => () => {
        clearInterval(Oz.current), Oz.current = null;
        for (const tz of zz.current) clearTimeout(tz.removeTimeout)
      }), []), (0, Uz.jsx)("div", {
        className: "FlyingMiddleTextWrapper",
        children: zz.current.map((zz => {
          const {
            id: tz,
            content: sz,
            pX: Fz,
            fX: Wz,
            angle: Xz
          } = zz;
          return zz.pos || (zz.pos = function(zz, tz) {
            const sz = 50 / (zz ** .7 * .35);
            return {
              x: sz * Math.sin(tz),
              y: -sz * Math.cos(tz)
            }
          }(Fz, Xz)), (0, Uz.jsx)(Ps, {
            className: "FlyingMiddleText",
            classNames: "FlyingMiddleText",
            timeout: Wz,
            enterActiveStyle: {
              transform: `translate(${zz.pos.x}vw, ${zz.pos.y}vh)`,
              transition: `transform ${Wz}ms ease-out`
            },
            children: (0, Uz.jsx)("div", {
              children: (0, Uz.jsx)(vz.c, {
                text: sz
              })
            })
          }, tz)
        }))
      })
    }));

    function Ps(zz) {
      let {
        children: tz,
        className: sz,
        classNames: Wz,
        timeout: Xz,
        enterActiveStyle: Oz
      } = zz;
      const [oz, vz] = (0, Fz.useState)(!1), [Kz, uz] = (0, Fz.useState)(!1), Nz = (0, Fz.useRef)(null);
      return (0, Fz.useEffect)((() => {
        vz(!0)
      }), []), (0, Uz.jsx)(Ds.d, {
        className: sz,
        classNames: Wz || sz,
        in: oz,
        timeout: Xz,
        nodeRef: Nz,
        onEntering: () => {
          uz(!0)
        },
        children: (0, Fz.cloneElement)(tz, {
          ref: Nz,
          style: Kz && Oz || void 0
        })
      })
    }
    var rs = sz(36078);

    function Ys() {
      const zz = (0, mz.l)("health");
      return (0, Uz.jsxs)("div", {
        className: "BottomScreenStatBarList",
        children: [(0, Uz.jsx)(rs.c, {
          placement: "statBars"
        }), (0, Uz.jsx)(xs, {
          actualValue: zz.shield,
          maxValue: zz.maxShield,
          hideAtValue: 0,
          icon: "shield",
          className: "ShieldBar"
        }), (0, Uz.jsx)(xs, {
          actualValue: zz.health,
          maxValue: zz.maxHealth,
          icon: "heart",
          className: "HealthBar"
        })]
      })
    }

    function xs(zz) {
      let {
        actualValue: tz,
        maxValue: sz,
        hideAtValue: Fz,
        icon: Wz,
        className: Xz
      } = zz;
      return (0, Hz.f)(), null === tz || null === sz || tz === Fz || sz === Fz ? null : (0, Uz.jsx)("div", {
        className: "BottomScreenStatBarWrapper",
        children: (0, Uz.jsxs)("div", {
          className: "BottomScreenStatBarBackground",
          children: [(0, Uz.jsx)("div", {
            className: `BottomScreenStatBar ${Xz}`,
            style: {
              transform: `scaleX(${Math.max(tz/sz,0)})`,
              transformOrigin: "left center"
            }
          }), (0, Uz.jsxs)("div", {
            className: "BottomScreenStatBarText SmallTextBold",
            children: [(0, Uz.jsx)(dz.c, {
              name: Wz
            }), ` ${Math.ceil(tz)}/${sz}`]
          })]
        })
      })
    }
    var ms = sz(8843),
      Is = sz(4175),
      Cs = sz(1297),
      es = sz(2530),
      Zs = sz(1419),
      Gs = sz(1287),
      Ts = sz(3080),
      cs = sz(3145),
      As = sz(3109),
      ys = sz(725),
      Ms = sz(3158),
      ds = sz(133),
      hs = sz(8744),
      Qs = sz(321);

    function ks(zz, tz) {
      let {
        shownName: sz,
        lifeformType: Fz
      } = zz;
      return null !== sz ? sz : null !== Fz ? tz(`lifeform:${(0,Qs.ue)(Fz)}`) : null
    }
    var is = sz(3097),
      Ls = sz(3103);
    const ls = {
        FallDamage: "respawnPage:diedFallDamage",
        VoidJump: "respawnPage:diedVoid",
        Lava: "respawnPage:diedLava",
        "Toxic Waste": "respawnPage:diedToxicWaste",
        "Poison Potion": "respawnPage:diedPoisoned",
        "Rotten Brain": "respawnPage:diedPoisoned"
      },
      ns = (0, Fz.memo)((function() {
        var zz, tz;
        const sz = (0, Hz.c)(),
          Wz = (0, bz.useNavigatePreserveSearch)(),
          {
            t: Oz
          } = (0, Gz.B)(),
          {
            loadingOverlayVisible: vz
          } = (0, Jz.h)(["loadingOverlayVisible"]),
          Kz = (0, Cz.j)(),
          [uz, wz] = (0, Fz.useState)(!1),
          [Dz, gz] = (0, Fz.useState)(!0),
          [Bz, rz] = (0, Fz.useState)(null),
          xz = (0, gs.b)(),
          Iz = (0, Pz.e)("respawnButtonText"),
          ez = (0, Pz.e)("usePlayAgainButton"),
          Zz = (0, Pz.e)("useRespawnButton"),
          {
            gameNameWithVariation: Tz
          } = (0, mz.l)("connectedGame"),
          cz = (0, Fz.useRef)(Yz.e.get("secsToRespawn")),
          jz = (0, Fz.useRef)(Nz.gameBridge.latest("localPlayerAlive")),
          Az = (0, Fz.useRef)(Yz.e.get("secsToRespawn")),
          yz = (0, Fz.useRef)(Yz.e.get("autoRespawn")),
          Mz = (0, Fz.useRef)(null),
          hz = (0, Fz.useRef)(0),
          Qz = (0, Fz.useRef)(0),
          [kz, Lz] = (0, Fz.useState)(!1),
          lz = (0, Fz.useRef)(null),
          nz = (0, Fz.useRef)(null),
          az = (0, Fz.useRef)(null);
        (0, Pz.d)("secsToRespawn", (zz => {
          console.log("Received new secsToRespawn with", zz, "and current canRespawn value of ", yz.current), Az.current = zz, Rz()
        })), (0, Pz.d)("autoRespawn", (zz => {
          console.log("Received autorespawn", zz, "current canRespawn value of ", cz.current), yz.current = zz, Rz()
        }));
        const qz = zz => {
          console.log("Updating respawn component from localPlayerAliveSet. isAlive:", zz), zz || hz.current++, jz.current = zz, Rz()
        };
        (0, mz.d)("localPlayerAliveSet", qz), (0, oz.g)(cs.o, (zz => {
          "connected" === zz && !jz.current && yz.current && cz.current <= 0 && (Qz.current = 0, pz())
        })), (0, Fz.useEffect)((() => {
          const zz = Nz.gameBridge.latest("localPlayerAlive");
          zz === jz.current ? (console.log("Updating respawn component from initial mount"), Rz()) : qz(zz)
        }), []), (0, Fz.useEffect)((() => {
          if (uz) {
            Lz(!1);
            const zz = setTimeout((() => {
              Lz(!0)
            }), 600);
            return (0, hs.e)(), () => {
              clearTimeout(zz)
            }
          }
          return () => {}
        }), [uz]);
        (0, mz.d)("kill", (zz => {
          let {
            killer: tz,
            victim: sz,
            withItem: Fz
          } = zz;
          if (!sz.local) return;
          const Wz = ((zz, tz) => {
            if (zz.local) {
              const zz = ls[tz];
              return zz ? Oz(zz) : null
            }
            const sz = ks(zz, Oz);
            return sz ? Oz("respawnPage:killedBy", {
              name: sz
            }) : null
          })(tz, Fz);
          Wz && rz({
            text: Wz,
            deathCount: jz.current ? hz.current + 1 : hz.current
          })
        }));
        const Sz = () => {
            uz && yz.current && jz.current && kz && wz(!1)
          },
          Vz = uz && yz.current && jz.current && kz && !vz;
        (0, oz.g)("usedKeyboard", (() => {
          Sz()
        })), (0, Ls.b)("respawn", Vz, Sz);
        const Rz = () => {
            gz(Az.current >= 3 || !yz.current), jz.current ? (clearInterval(Mz.current), Mz.current = null, yz.current ? xz() : wz(!1)) : (wz(!0), cz.current = Az.current, xz(), console.log("Running respawn stats updated", yz.current, cz.current), yz.current && cz.current <= 0 && pz(), clearInterval(Mz.current), cz.current > 0 && (Mz.current = setInterval((() => {
              cz.current = Math.max(cz.current - 1, 0), xz(), cz.current <= 0 && (clearInterval(Mz.current), Mz.current = null, Yz.e.get("autoRespawn") && pz())
            }), 1e3)))
          },
          pz = () => {
            if (Date.now() - Qz.current > 1e3) {
              const zz = () => {
                Nz.gameBridge.send("respawn", null), Qz.current = Date.now()
              };
              Yz.e.get("autoRespawn") ? zz() : (0, Gs.ib)((() => {
                zz()
              }), "video_respawn")
            }
          },
          fz = (0, Fz.useMemo)((() => {
            var zz;
            return null === (zz = (0, ys.l)(Tz)) || void 0 === zz ? void 0 : zz.otherGameLinksOnRespawnPage
          }), [Tz]),
          Ez = 0 === cz.current,
          zt = (null === Bz || void 0 === Bz ? void 0 : Bz.deathCount) === hz.current ? Bz.text : null,
          tt = uz && Dz && !vz,
          st = Kz && Vz && null !== (zz = null === (tz = (0, iz.c)()) || void 0 === tz ? void 0 : tz.getBoundButton("menuConfirm")) && void 0 !== zz ? zz : null,
          Ft = zz => Ez ? zz : Oz("respawnPage:actionInSeconds", {
            action: zz,
            seconds: cz.current
          });
        return (0, Uz.jsx)(ms.c, {
          showing: uz,
          globallyUniqueKey: "RespawnComponent",
          alwaysMountChildren: !0,
          children: (0, Uz.jsx)(Ts.d, {
            show: uz,
            "data-holds-camera-keeper": "",
            children: (0, Uz.jsxs)(Is.b, {
              close: () => {
                wz(!1)
              },
              togglePointerLock: !1,
              closeOnPressBackground: !1,
              className: "RespawnBackgroundScreen",
              padLayerKind: yz.current || vz ? null : "death",
              padBackCloses: !1,
              cameraKeeper: !0,
              children: [(0, ds.p)() && (0, Uz.jsx)(Zs.e, {
                onClick: As.b,
                children: Oz("homePage:backToGames")
              }), (0, Uz.jsxs)("div", {
                className: "RespawnContainer",
                onClick: Sz,
                children: [(0, Uz.jsxs)("div", {
                  className: "RespawnTop",
                  children: [(0, Uz.jsx)("div", {
                    ref: nz,
                    className: "RespawnSideSquareBannerDiv",
                    children: sz[0] > 925 && (0, Uz.jsx)(es.c, {
                      info: {
                        adType: "square",
                        adId: 1,
                        adAlias: "banner_respawn_1"
                      },
                      sizeInfo: {
                        parentRef: nz
                      },
                      showing: tt,
                      horizontalAlign: "start",
                      extraContrastBackgroundBox: "left",
                      noFillShowBloxdAdProbability: 0
                    })
                  }), (0, Uz.jsx)("div", {
                    className: "RespawnMainContent",
                    children: (0, Uz.jsxs)("div", {
                      className: Xz()("RespawnMainContentInner", {
                        RespawnMainContentInnerPad: Kz
                      }),
                      children: [yz.current && (0, Uz.jsxs)("div", {
                        className: "AutoRespawnDeathInfo",
                        children: [(0, Uz.jsxs)("div", {
                          className: "AutoRespawnDeathTitle FullyFancyText",
                          children: [(0, Uz.jsx)(dz.c, {
                            name: "skull",
                            className: "AutoRespawnDeathIcon"
                          }), Oz("respawnPage:youDied")]
                        }), (0, Uz.jsxs)("div", {
                          className: "AutoRespawnDeathCause FullyFancyText",
                          children: [null === st && (jz.current ? Oz("respawnPage:pressAnywhereToContinue") : Ez ? Oz("respawnPage:respawning") : Ft(Oz("general:respawn"))), null !== st && (0, Uz.jsx)(is.e, {
                            text: Oz("controller:screensPressToContinue", {
                              button: is.f
                            }),
                            glyph: st,
                            className: "AutoRespawnContinueGlyph"
                          })]
                        }), zt && (0, Uz.jsx)("div", {
                          className: "AutoRespawnStatus",
                          children: zt
                        })]
                      }), !yz.current && (0, Uz.jsxs)(Uz.Fragment, {
                        children: [(0, Uz.jsxs)("div", {
                          className: Xz()("RespawnPageButtons", {
                            RespawnPageButtonsVertical: !fz
                          }),
                          children: [ez && (0, Uz.jsx)(Zs.p, {
                            className: "RespawnPageButton",
                            padDefaultFocus: !0,
                            onClick: () => {
                              (0, Gs.ib)((() => {
                                (0, Jz.e)("inGameReplay");
                                const zz = (0, Cs.c)(Tz);
                                Wz(zz)
                              }), "video_start")
                            },
                            disabled: !Ez || !kz,
                            touchPressOn: "pointerup",
                            children: Ft(Oz("respawnPage:playAgain"))
                          }), Zz && (0, Uz.jsx)(Zs.h, {
                            className: "RespawnPageButton",
                            onClick: pz,
                            padDefaultFocus: !ez,
                            padBack: "sessionBasedGame:stayInLobby" === Iz,
                            disabled: !Ez || !kz,
                            touchPressOn: "pointerup",
                            children: Ft(Oz(Iz))
                          }), !(0, ds.p)() && (0, Uz.jsx)(Zs.H, {
                            className: "RespawnPageButton",
                            onClick: As.b,
                            disabled: !Ez || !kz,
                            touchPressOn: "pointerup",
                            children: Ft(Oz("respawnPage:exitGame"))
                          })]
                        }), fz && (0, Uz.jsxs)("div", {
                          className: "RespawnPageOtherGames",
                          children: [(0, Uz.jsx)("div", {
                            className: "RespawnPageOtherGamesTitle",
                            children: Oz("respawnPage:orTry")
                          }), (0, Uz.jsx)("div", {
                            className: "RespawnPageOtherGameThumbnails",
                            children: fz.map((zz => (0, Uz.jsx)(Ms.g, {
                              source: {
                                type: "game",
                                gameNameWithVariation: zz
                              },
                              disabled: !Ez || !kz,
                              gameWidth: "13rem",
                              hideDescription: !0,
                              hideFavourites: !0,
                              hideCcu: !0,
                              onClick: () => {
                                (0, Jz.e)("inGameReplay");
                                const tz = (0, Cs.c)(zz);
                                Wz(tz)
                              }
                            }, zz)))
                          })]
                        })]
                      })]
                    })
                  }), (0, Uz.jsx)("div", {
                    ref: az,
                    className: "RespawnSideSquareBannerDiv"
                  })]
                }), (0, Uz.jsx)("div", {
                  ref: lz,
                  className: "RespawnBottom",
                  children: (0, Uz.jsx)(es.c, {
                    info: {
                      adType: "leaderboard",
                      adId: 1,
                      adAlias: "banner_respawn_2"
                    },
                    sizeInfo: {
                      parentRef: lz
                    },
                    showing: tt,
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
    var as = sz(36097);
    const qs = [{
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
      Ss = [{
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
      Vs = {
        duration: 300,
        easing: "ease-out",
        fill: "forwards"
      },
      Rs = {
        duration: 400,
        easing: "ease-out",
        fill: "forwards"
      },
      ps = (0, Fz.memo)((function() {
        const zz = (0, Fz.useRef)(null),
          tz = (0, Fz.useRef)(null);

        function sz(sz) {
          var Fz;
          let {
            Hs: Wz,
            screenPos: Xz
          } = sz;
          const Oz = zz.current;
          null === (Fz = tz.current) || void 0 === Fz || Fz.cancel(), Oz.classList.remove("HitmarkerCrit"), Xz ? (Oz.style.left = `${Xz.x}%`, Oz.style.top = `${Xz.y}%`) : (Oz.style.left = "50%", Oz.style.top = "50%"), Oz.style.rotate = 16 * (Math.random() - .5) + "deg", Wz && Oz.classList.add("HitmarkerCrit");
          const oz = Oz.animate(Wz ? Ss : qs, Wz ? Rs : Vs);
          tz.current = oz, oz.onfinish = () => {
            Oz.classList.remove("HitmarkerCrit")
          }
        }
        return (0, oz.g)("localGunHitmarker", (zz => {
          let {
            Hs: tz
          } = zz;
          sz({
            Hs: tz
          })
        })), (0, oz.g)("yourAttackHit", (zz => {
          let {
            Hs: tz,
            screenPos: Fz
          } = zz;
          sz({
            Hs: tz,
            screenPos: Jz.b.get("isTouchScreen") ? Fz : void 0
          })
        })), (0, oz.g)("sendHitmarker", (zz => {
          let {
            Hs: tz,
            screenPos: Fz
          } = zz;
          sz({
            Hs: tz,
            screenPos: Fz
          })
        })), (0, Uz.jsxs)("div", {
          ref: zz,
          className: "Hitmarker",
          children: [(0, Uz.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, Uz.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, Uz.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, Uz.jsx)("div", {
            className: "HitmarkerBar"
          })]
        })
      }));

    function fs() {
      const zz = (0, Fz.useRef)(!0);
      return (0, oz.g)("localBlockMined", (() => {
        Wt.e.play("blockMined")
      })), (0, oz.g)("yourAttackHit", (() => {
        Wt.e.play("hitLanded")
      })), (0, oz.g)("localGunHitmarker", (() => {
        Wt.e.play("hitLanded")
      })), (0, oz.g)("damagedByOtherPlayer", (() => {
        Wt.e.play("damageTaken")
      })), (0, mz.d)("localPlayerAliveSet", (tz => {
        !tz && zz.current && Wt.e.play("death"), zz.current = tz
      })), null
    }
    var Es = sz(1845),
      zF = sz(36116),
      tF = sz.n(zF),
      sF = sz(1960),
      FF = sz(1943),
      WF = sz(2965),
      XF = sz(8866);
    const OF = Qs.fe ? 7e7 : 7e3,
      oF = tF()("#ffffff").alpha(.5).string();

    function vF(zz) {
      const tz = (0, WF.b)(zz);
      return void 0 !== tz && "Gun" === (0, XF.itemTypeOf)(tz)
    }

    function UF(zz) {
      if (!zz) return console.error(`Killfeed colour was ${zz}`), oF;
      try {
        return tF()(zz).alpha(.5).string()
      } catch {
        return console.warn(`Killfeed colour ${zz} is not a colour`), oF
      }
    }
    const KF = (0, Fz.memo)((function() {
      const {
        t: zz
      } = (0, Gz.B)(), tz = (0, Fz.useRef)([]), sz = (0, gs.b)();
      return (0, mz.d)("kill", (function(Fz) {
        var Wz, Xz;
        let {
          killer: Oz,
          victim: oz,
          withItem: vz,
          killstreak: Uz
        } = Fz;
        const Kz = tz.current;
        if (Kz.length >= 3) {
          const zz = Kz.shift();
          clearTimeout(zz.timeout)
        }
        const uz = Nz.gameBridge.latest("hiddenPlayerNames"),
          bz = {
            deadName: ks(oz, zz),
            killerName: ks(Oz, zz),
            isFriend: {
              killer: (0, sF.f)(Oz.realName, uz),
              dead: (0, sF.f)(oz.realName, uz)
            },
            withItem: vz,
            wasHeadshot: !1,
            killstreak: Uz,
            timeout: setTimeout((() => {
              Kz.shift(), sz()
            }), OF),
            reactId: `${null!==(Wz=Oz.id)&&void 0!==Wz?Wz:Oz.shownName}|${null!==(Xz=oz.id)&&void 0!==Xz?Xz:oz.shownName}|${Date.now()}`,
            killerBackground: UF(Oz.colour),
            deadBackground: UF(oz.colour)
          };
        Kz.push(bz), sz()
      })), (0, Fz.useEffect)((() => {
        const zz = tz.current;
        return () => {
          for (; zz.length > 0;) {
            const {
              timeout: tz
            } = zz.pop();
            clearTimeout(tz)
          }
        }
      }), []), (0, Uz.jsx)("div", {
        className: "Killfeed",
        children: tz.current.map((zz => {
          let {
            deadName: tz,
            killerName: sz,
            withItem: Fz,
            wasHeadshot: Wz,
            killstreak: Xz,
            killerBackground: Oz,
            deadBackground: oz,
            reactId: vz,
            isFriend: Kz
          } = zz;
          return (0, Uz.jsxs)("div", {
            className: "IndividualKillWrapper SmallTextLight",
            style: {
              background: `linear-gradient(90deg, ${Oz} calc(100% - 10rem), ${oz} 100%)`
            },
            children: [Xz >= 2 ? (0, Uz.jsx)("div", {
              className: "KillfeedKillstreak",
              children: (0, Qs.S)(Xz)
            }) : null, (0, Uz.jsx)("div", {
              className: "KillfeedKillerName",
              children: sz
            }), Kz.killer && (0, Uz.jsx)(FF.e, {}), (0, Uz.jsx)("div", {
              className: "KillfeedItem",
              style: {
                height: "5vmin",
                width: vF(Fz) ? "7.5vmin" : "5vmin"
              },
              children: (0, Uz.jsx)(Es.c, {
                itemName: Fz,
                amount: 0,
                gunTransform: "scaleX(-1)",
                itemMarginTop: 0
              })
            }), Wz ? (0, Uz.jsx)(dz.c, {
              name: "crosshairs",
              className: "3x KillfeedHeadshotIcon"
            }) : null, (0, Uz.jsx)("div", {
              className: "KillfeedDeadName",
              children: tz
            }), Kz.dead && (0, Uz.jsx)(FF.e, {})]
          }, vz)
        }))
      })
    }));
    var uF = sz(36161),
      NF = sz(1124),
      bF = sz.n(NF),
      wF = sz(3060),
      DF = sz(36164),
      gF = sz(1279);
    const HF = {},
      BF = (0, Fz.memo)((function() {
        const zz = (0, Fz.useRef)({}),
          [, tz] = (0, Fz.useReducer)((zz => zz + 1), 0);
        (0, oz.g)("setDirectionArrow", (sz => {
          let {
            id: Fz,
            position: Wz,
            style: Xz,
            text: Oz,
            rX: oz
          } = sz;
          const vz = zz.current,
            Uz = Xz || HF,
            Kz = Oz,
            uz = vz[Fz];
          if (!uz) return vz[Fz] = {
            position: Wz,
            style: Uz,
            text: Kz,
            shouldShowDistance: oz,
            iZ: null,
            chevronElement: null,
            distanceElement: null,
            lastRenderedDist: -1,
            lastDistUpdateTime: 0,
            lastScreenX: NaN,
            lastScreenY: NaN,
            onScreen: void 0
          }, void tz();
          const Nz = !bF()(uz.style, Uz) || !bF()(uz.text, Kz) || uz.shouldShowDistance !== oz;
          uz.position = Wz, uz.style = Uz, uz.text = Kz, uz.shouldShowDistance = oz, Nz && tz()
        })), (0, oz.g)("clearDirectionArrow", (sz => {
          let {
            id: Fz
          } = sz;
          const Wz = zz.current;
          if (null === Fz)
            for (const zz in Wz) delete Wz[zz];
          else delete Wz[Fz];
          tz()
        })), (0, Fz.useEffect)((() => {
          const tz = zz.current,
            sz = (0, gF.s)((() => {
              ! function(zz) {
                const tz = Nz.gameBridge.lookup("localPos", null),
                  sz = wF.e - PF,
                  Fz = (0, wF.i)() - PF;
                for (const Wz in zz) {
                  const Xz = zz[Wz];
                  if (!Xz.iZ) continue;
                  const Oz = Nz.gameBridge.lookup("screenPos", Xz.position),
                    oz = Oz.x - 50,
                    vz = Oz.y - 50;
                  Oz.x === Xz.lastScreenX && Oz.y === Xz.lastScreenY || (Xz.lastScreenX = Oz.x, Xz.lastScreenY = Oz.y, Xz.iZ.style.translate = `${Oz.x}vw ${Oz.y}vh`, Xz.chevronElement && (Xz.chevronElement.style.rotate = `${Qs.c.fastATan2(vz,oz)}rad`));
                  const Uz = Math.abs(oz) < sz && Math.abs(vz) < Fz;
                  if (Uz !== Xz.onScreen && (Xz.onScreen = Uz, Xz.iZ.classList.toggle("DirectionArrowOnScreen", Uz)), Xz.shouldShowDistance && Xz.distanceElement) {
                    const zz = Xz.position[0] - tz[0],
                      sz = Xz.position[1] - tz[1],
                      Fz = Xz.position[2] - tz[2],
                      Wz = Math.round(Math.sqrt(zz * zz + sz * sz + Fz * Fz));
                    (-1 === Xz.lastRenderedDist || (0, DF.d)(Wz, Xz.lastRenderedDist, Xz.lastDistUpdateTime)) && (Xz.distanceElement.textContent = `${Wz}m`, Xz.lastRenderedDist = Wz, Xz.lastDistUpdateTime = Date.now() + Math.floor(100 * Math.random()))
                  }
                }
              }(tz)
            }));
          return () => {
            sz();
            for (const zz in tz) delete tz[zz]
          }
        }), []);
        const sz = zz.current;
        return (0, Uz.jsx)("div", {
          className: "DirectionArrows",
          children: Object.entries(sz).map((zz => {
            var tz;
            let [Fz, Wz] = zz;
            const Xz = null !== (tz = (0, Bz.Xb)(Wz.style)) && void 0 !== tz ? tz : "#ffffff";
            return (0, Uz.jsxs)("div", {
              ref: zz => {
                sz[Fz] && (sz[Fz].iZ = zz)
              },
              className: "DirectionArrow",
              style: {
                fontSize: Wz.style.fontSize,
                opacity: Wz.style.opacity
              },
              children: [(0, Uz.jsxs)("div", {
                className: "DirectionArrowChevron",
                ref: zz => {
                  sz[Fz] && (sz[Fz].chevronElement = zz)
                },
                children: [(0, Uz.jsxs)("div", {
                  className: "DirectionArrowShadowLayer",
                  children: [(0, Uz.jsx)("div", {
                    className: "DirectionArrowBar"
                  }), (0, Uz.jsx)("div", {
                    className: "DirectionArrowBar"
                  })]
                }), (0, Uz.jsxs)("div", {
                  className: "DirectionArrowBarLayer",
                  children: [(0, Uz.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: Xz
                    }
                  }), (0, Uz.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: Xz
                    }
                  })]
                })]
              }), (0, Uz.jsx)("div", {
                className: "DirectionArrowMarker",
                style: {
                  background: Xz,
                  boxShadow: `0 0 3px rgba(0, 0, 0, 0.8), 0 0 8px ${Xz}`
                }
              }), Wz.text && (0, Uz.jsx)("div", {
                className: "DirectionArrowLabel SmallTextLight",
                style: {
                  color: Xz,
                  fontWeight: Wz.style.fontWeight,
                  fontStyle: Wz.style.fontStyle
                },
                children: (0, Uz.jsx)(vz.c, {
                  text: Wz.text
                })
              }), Wz.shouldShowDistance && (0, Uz.jsx)("div", {
                className: "DirectionArrowDistance SmallTextLight",
                ref: zz => {
                  sz[Fz] && (sz[Fz].distanceElement = zz)
                },
                style: {
                  color: Xz,
                  fontWeight: Wz.style.fontWeight,
                  fontStyle: Wz.style.fontStyle
                }
              })]
            }, Fz)
          }))
        })
      })),
      PF = .5;
    const rF = (0, Fz.memo)((function(zz) {
        let {
          isTouchScreen: tz
        } = zz;
        return (0, Uz.jsxs)("div", {
          className: "BottomRightElements",
          "data-camera-keeper-host": "",
          children: [(0, Uz.jsx)(JF, {}), tz && (0, Uz.jsx)(ts, {})]
        })
      })),
      YF = {
        readyForNext: 0,
        running: 1
      },
      xF = 50;

    function mF(zz) {
      console.assert(zz.state.current === YF.readyForNext);
      const tz = zz.queue.current,
        sz = zz.foreground.current;
      if (tz.length > 0 && sz) {
        const {
          toFraction: Fz,
          toDuration: Wz
        } = tz.shift();
        zz.state.current = YF.running, sz.style.transition = `transform ${Math.max(Wz-xF,0)}ms linear`, sz.classList.remove("Complete"), zz.timeout.current = setTimeout((() => {
          sz.style.transform = `scaleX(${Fz})`, zz.timeout.current = setTimeout((() => {
            1 === Fz && sz.classList.add("Complete"), zz.state.current = YF.readyForNext, mF(zz)
          }), Math.max(Wz - xF, 0))
        }), xF)
      }
    }

    function JF() {
      const zz = (0, Fz.useRef)([]),
        tz = (0, Fz.useRef)(YF.readyForNext),
        sz = (0, Fz.useRef)(void 0),
        Wz = (0, Fz.useRef)(null),
        Xz = (0, Fz.useRef)({
          queue: zz,
          state: tz,
          timeout: sz,
          foreground: Wz
        }),
        Oz = (0, Pz.e)("showProgressBar");
      if ((0, Fz.useLayoutEffect)((() => (Oz && tz.current === YF.readyForNext && mF(Xz.current), () => {
          tz.current = YF.readyForNext, clearTimeout(sz.current), Oz && (zz.current.length = 0)
        })), [Oz]), (0, oz.g)("progressBarUpdate", (sz => {
          let {
            toFraction: Fz,
            toDuration: Wz
          } = sz;
          zz.current.push({
            toFraction: Fz,
            toDuration: Wz
          }), tz.current === YF.readyForNext && mF(Xz.current)
        })), !Oz) return null;
      return (0, Uz.jsx)("div", {
        className: "ProgressBarBackground",
        children: (0, Uz.jsx)("div", {
          className: "ProgressBarForeground",
          ref: Wz,
          style: {
            width: "15vw",
            transformOrigin: "left center",
            transform: "scaleX(0)"
          }
        })
      })
    }
    var IF = sz(36169),
      CF = sz(2306);
    const eF = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function ZF(zz) {
      let {
        classes: tz,
        gone: sz
      } = zz;
      const Fz = document.documentElement;
      Fz.classList.remove(...tz);
      for (const Wz of sz) Wz.style.display = "block";
      return () => {
        Fz.classList.add(...tz);
        for (const zz of sz) zz.style.display = ""
      }
    }

    function GF(zz) {
      const {
        isTouchScreen: tz
      } = (0, Jz.h)(["isTouchScreen"]);
      (0, Fz.useLayoutEffect)((() => {
        if (!tz) return;
        const sz = zz.current,
          Fz = document.querySelector(`.${IF.j}`),
          Wz = zz => {
            const tz = () => {
              const tz = zz.querySelector(CF.g),
                Fz = function(zz) {
                  const tz = document.documentElement;
                  return {
                    classes: ut.E.map(Dt.z).filter((zz => tz.classList.contains(zz))),
                    gone: [...zz.querySelectorAll(`.TopRightTrayToggle.${CF.h}`)]
                  }
                }(zz);
              tz && function(zz, tz) {
                (0, CF.z)(zz, tz.classes.length > 0 || tz.gone.length > 0, (() => ZF(tz)))
              }(tz, Fz);
              const Wz = `${Math.floor(function(zz,tz,sz){const Fz=document.documentElement,Wz=Fz.classList.contains((0,Dt.D)("menu")),Xz=Fz.style.getPropertyValue((0,Dt.H)("menu"));if(!Wz&&""===Xz)return zz.getBoundingClientRect().left;const Oz=tz?(0,CF.m)(tz):()=>{},oz=ZF(sz);Fz.classList.remove((0,Dt.D)("menu")),Fz.style.removeProperty((0,Dt.H)("menu"));const vz=zz.getBoundingClientRect().left;return oz(),Oz(),Wz&&Fz.classList.add((0,Dt.D)("menu")),""!==Xz&&Fz.style.setProperty((0,Dt.H)("menu"),Xz),vz}(zz,tz,Fz)-sz.getBoundingClientRect().left-4)}px`;
              sz.style.getPropertyValue("--InGameHeaderMaxWidth") !== Wz && sz.style.setProperty("--InGameHeaderMaxWidth", Wz)
            };
            tz();
            const Wz = new ResizeObserver(tz);
            Wz.observe(zz), Wz.observe(Fz), window.addEventListener("resize", tz);
            const Xz = () => eF.map((zz => document.documentElement.style.getPropertyValue(zz))).join();
            let Oz = Xz();
            const oz = new MutationObserver((() => {
              const zz = Xz();
              zz !== Oz && (Oz = zz, tz())
            }));
            oz.observe(document.documentElement, {
              attributes: !0,
              attributeFilter: ["style"]
            });
            const vz = (0, rz.q)(Dt.f, tz),
              Uz = new MutationObserver(tz);
            return Uz.observe(zz, {
              childList: !0,
              subtree: !0
            }), () => {
              Wz.disconnect(), oz.disconnect(), Uz.disconnect(), vz(), window.removeEventListener("resize", tz);
              const sz = zz.querySelector(CF.g);
              sz && (0, CF.m)(sz)
            }
          },
          Xz = () => Fz.querySelector(".TopRightIconsContainer"),
          Oz = Xz();
        let oz;
        if (Oz) oz = Wz(Oz);
        else {
          const zz = new MutationObserver((() => {
            const tz = Xz();
            tz && (zz.disconnect(), oz = Wz(tz))
          }));
          zz.observe(Fz, {
            childList: !0,
            subtree: !0
          }), oz = () => {
            zz.disconnect()
          }
        }
        return () => {
          oz(), sz.style.removeProperty("--InGameHeaderMaxWidth")
        }
      }), [tz, zz])
    }
    var TF = sz(3346),
      cF = sz(3342),
      jF = sz(1571),
      AF = sz(1466),
      yF = sz(1577),
      MF = sz(1664),
      dF = sz(1786),
      hF = sz(1120),
      QF = sz(3970),
      kF = sz(1447),
      iF = sz(1328);
    const LF = 2e4,
      lF = 6e5,
      nF = new Set;

    function aF() {
      const {
        gameEntrySource: zz,
        loadingOverlayVisible: tz
      } = (0, Jz.h)(["gameEntrySource", "loadingOverlayVisible"]), sz = (0, mz.h)("connectedGame", (zz => (0, QF.k)(zz) ? zz.lobbyName : null)), Wz = (0, mz.l)("localPlayerAlive"), Xz = (0, mz.h)("players", (zz => null !== zz.localId && void 0 !== zz.byId[zz.localId])), [Oz, oz] = (0, Fz.useState)(null);
      return !tz && Wz && Xz && null !== sz && Oz !== sz && oz(sz), (0, Fz.useEffect)((() => {
        if (!(0, QF.m)(zz) || null === Oz || Oz !== sz || nF.has(Oz)) return;
        const tz = setTimeout((() => {
          nF.add(Oz), async function(zz) {
            const tz = await hF.userContextManager.getCurrentUserContext();
            let sz;
            try {
              sz = (await AF.d.getWorldOwnerFriendOffer(tz)).owner
            } catch (Wz) {
              return void console.warn("Couldn't ask who owns this world", Wz)
            }
            if (!sz || (0, QF.t)(sz.name, Date.now())) return;
            const Fz = sz;
            ! function(zz, tz) {
              const sz = Date.now() + lF;
              let Fz = Date.now(),
                Wz = 0;
              const Xz = () => {
                const Oz = Date.now(),
                  oz = Nz.gameBridge.latest("connectedGame");
                oz.lobbyName !== zz || Oz > sz || (null === oz.websocketUrl ? Fz = 1 / 0 : Fz === 1 / 0 && !Jz.b.get("loadingOverlayVisible") && Nz.gameBridge.latest("localPlayerAlive") && (Fz = Oz + LF), Wz = Oz < Fz || !Nz.gameBridge.latest("localPlayerAlive") || Jz.b.get("isUiHidden") || Jz.b.get("isUiHiddenByCamera") || (0, MF.isTypingInInput)() || Jz.b.get("loadingOverlayVisible") || (0, jF.r)() || (0, TF.f)() || (0, iF.l)() ? 0 : Wz + 1, Wz >= 2 ? tz() : setTimeout(Xz, 500))
              };
              Xz()
            }(zz, (() => {
              (0, QF.g)(yF.d.getSocialState().friends, Fz.name) || ((0, QF.p)(Fz.name, Date.now()), dF.f.showWorldOwnerOffer(Fz), (0, kF.reportAnalyticsClick)({
                id: "social.world_owner_offer",
                value: "shown"
              }))
            }))
          }(Oz).catch((zz => {
            console.error("Failed to offer the world's owner as a friend", zz)
          }))
        }), LF);
        return () => {
          clearTimeout(tz)
        }
      }), [zz, Oz, sz]), null
    }
    var qF = sz(1838);
    const SF = (0, Fz.memo)((function(zz) {
        let {
          durationMs: tz,
          endsAtMs: sz
        } = zz;
        const [, Wz] = (0, Fz.useReducer)((zz => zz + 1), 0), Xz = null === sz ? tz : Math.max(sz - Date.now(), 0);
        return (0, Fz.useEffect)((() => {
          if (null === sz || Xz <= 0) return;
          const zz = setTimeout(Wz, Xz - 1e3 * (Math.ceil(Xz / 1e3) - 1));
          return () => {
            clearTimeout(zz)
          }
        })), (0, Uz.jsx)("div", {
          className: "EffectInfoDuration SmallTextLight",
          children: (0, Qs.cb)(Xz)
        })
      })),
      VF = (0, Fz.memo)((function() {
        const zz = (0, mz.l)("localEffects");
        return (0, Uz.jsx)("div", {
          className: "EffectInfosWrapper",
          children: Object.entries(zz).map((zz => {
            let [tz, {
              icon: sz,
              displayName: Fz,
              durationMs: Wz,
              endsAtMs: Xz,
              level: Oz
            }] = zz;
            return (0, Uz.jsxs)("div", {
              className: "EffectInfo",
              children: [(0, Uz.jsx)(qF.d, {
                icon: sz,
                className: "EffectInfoIcon"
              }), (0, Uz.jsxs)("div", {
                className: "EffectInfoRightSide",
                style: {
                  marginTop: null !== Wz ? "0" : "1rem"
                },
                children: [(0, Uz.jsxs)("div", {
                  className: "EffectInfoNameWrapper",
                  children: [(0, Uz.jsx)(vz.c, {
                    text: null !== Fz && void 0 !== Fz ? Fz : tz,
                    className: "EffectInfoName SmallTextBold"
                  }), Oz > 1 && (0, Uz.jsx)("div", {
                    className: "EffectInfoName SmallTextBold",
                    children: (0, Qs.S)(Oz)
                  })]
                }), null !== Wz && (0, Uz.jsx)(SF, {
                  durationMs: Wz,
                  endsAtMs: Xz
                })]
              })]
            }, tz)
          }))
        })
      }));
    var RF = sz(36177),
      pF = sz(36314),
      fF = sz(201),
      EF = sz(1319),
      zW = sz(2549),
      tW = sz(2684);

    function sW(zz, tz) {
      (0, Fz.useLayoutEffect)((() => {
        let tz, sz;
        const Fz = requestAnimationFrame((() => {
          sz = setTimeout((() => {
            sz = void 0;
            const Fz = zz();
            tz = "function" === typeof Fz ? Fz : void 0
          }), 0)
        }));
        return () => {
          var zz;
          cancelAnimationFrame(Fz), clearTimeout(sz), null === (zz = tz) || void 0 === zz || zz()
        }
      }), tz)
    }
    const FW = [5, 5, 5],
      WW = [7, 4, 4, 4];

    function XW(zz) {
      return zz.reduce(((zz, tz) => zz + tz), 0)
    }

    function OW(zz, tz, sz, Fz, Wz) {
      const Xz = zz.getContext("2d");
      if (!Xz) return null;
      const Oz = tz.fontFamily,
        oz = tz.fontWeight;
      return zz.width = sz, zz.height = Fz, Xz.fillStyle = tz.color, Xz.textAlign = "center", Xz.textBaseline = "middle", Xz.font = `${oz} ${Wz}px ${Oz}`, Xz
    }
    const oW = (0, Fz.memo)((function(zz) {
      let {
        show: tz
      } = zz;
      const sz = (0, Fz.useRef)(null),
        Wz = (0, Fz.useRef)(null),
        Xz = (0, Fz.useRef)(null),
        Oz = (0, wz.n)();
      return (0, Fz.useEffect)((() => Oz.whenShown((() => {
        let zz = 0,
          tz = 0,
          sz = performance.now(),
          Fz = 0;
        const Oz = (0, gF.s)((() => {
          var Oz, oz, vz;
          zz++, tz++;
          const Uz = performance.now();
          if (Uz - sz < 1e3) return;
          const Kz = Math.round(zz / (Uz - sz) * 1e3);
          if (Wz.current = Kz, null === (Oz = Xz.current) || void 0 === Oz || Oz.call(Xz, Kz), zz = 0, sz = Uz, Kz >= 55) return void(Fz = 0);
          if (Fz += 1, Fz < 15) return;
          const uz = null !== (oz = xz.f.getItem("decreaseLoadDistPromptDeniedCount")) && void 0 !== oz ? oz : 0,
            [bz, wz] = Yz.e.get("minChunkAddDist");
          if (function(zz, tz) {
              const sz = Nz.gameBridge.lookup("RP", null);
              return null !== sz && (sz.horizontal > zz || sz.vertical > tz)
            }(bz, wz) && (null !== (vz = xz.f.getItem("lastDecreaseLoadDistPromptTime")) && void 0 !== vz ? vz : 0) + 432e5 < Date.now() && uz < 3) {
            xz.f.setItem("lastDecreaseLoadDistPromptTime", Date.now());
            EF.NotificationProvider.showPromptPopup({
              title: "Lag (low FPS) caused by high chunk load distance. Decrease it?",
              confirmText: "general:yes",
              cancelText: "general:no",
              unlockPointerKey: "chunkLoadDistanceLagPopup"
            }).getResult().then((zz => {
              "notificationTornDown" !== zz && (zz ? (Nz.gameBridge.send("setChunkAddDistance", {
                horizontal: bz,
                vertical: wz
              }), xz.f.setItem("chunkHorizAddDist", bz), xz.f.setItem("chunkVertAddDist", wz), rz.o.Yg("updatedChunkLoadDist"), xz.f.setItem("decreaseLoadDistPromptDeniedCount", 0)) : xz.f.setItem("decreaseLoadDistPromptDeniedCount", uz + 1))
            }))
          }
        }));
        let oz = performance.now();
        tz = 0;
        let vz = null,
          Uz = !document.hidden;

        function Kz() {
          const zz = performance.now() - oz,
            sz = 1e3 * tz / zz;
          Uz && (null === vz && (vz = sz), zW.c.setFps(sz, vz)), tz = 0, oz = performance.now()
        }
        let uz = setInterval(Kz, tW.d);

        function bz() {
          const zz = Uz;
          Uz = !document.hidden, !zz && Uz && (tz = 0, oz = performance.now(), clearInterval(uz), uz = setInterval(Kz, tW.d))
        }
        return document.addEventListener("visibilitychange", bz), () => {
          Oz(), document.removeEventListener("visibilitychange", bz), clearInterval(uz)
        }
      }))), [Oz]), sW((() => {
        var zz;
        if (!tz || Xz.current) return;
        const Fz = sz.current,
          Oz = window.getComputedStyle(Fz.parentElement),
          oz = null !== (zz = window.devicePixelRatio) && void 0 !== zz ? zz : 1,
          vz = parseFloat(Oz.fontSize) * oz,
          Uz = Math.round(3 * vz),
          Kz = Math.round(vz),
          uz = OW(Fz, Oz, Uz, Kz, vz);
        if (!uz) return;
        const Nz = zz => {
          uz.clearRect(0, 0, Fz.width, Fz.height), uz.fillText(zz.toString(), Fz.width / 2, Fz.height / 2)
        };
        Xz.current = Nz, null !== Wz.current && Nz(Wz.current)
      }), [tz]), (0, Uz.jsxs)("div", {
        className: "FpsWrapperDiv",
        style: {
          display: tz ? "flex" : "none"
        },
        children: [(0, Uz.jsx)("div", {
          className: "FpsLabel",
          children: "FPS"
        }), (0, Uz.jsx)("canvas", {
          className: "FpsCanvas",
          ref: sz,
          width: 48,
          height: 16
        })]
      })
    }));

    function vW(zz) {
      return Math.sign(zz) * Math.round(100 * Math.abs(zz))
    }

    function UW(zz) {
      let {
        getCoordinates: tz,
        showChunkCoords: sz,
        columns: Wz
      } = zz;
      const Xz = (0, Fz.useRef)(null);
      return sW((() => {
        var zz;
        const Fz = Xz.current,
          Oz = window.getComputedStyle(Fz.parentElement),
          oz = null !== (zz = window.devicePixelRatio) && void 0 !== zz ? zz : 1,
          vz = parseFloat(Oz.fontSize) * oz,
          Uz = Math.round(vz * XW(Wz)),
          Kz = Math.round(vz),
          uz = OW(Fz, Oz, Uz, Kz, vz);
        if (!uz) return;
        let bz = !0,
          wz = 0,
          Dz = 0,
          gz = 0,
          Hz = 0,
          Bz = 0,
          Pz = 0;
        const rz = () => {
          bz = !0
        };
        document.fonts.load(uz.font).then(rz, rz);
        const Yz = () => {
          OW(Fz, Oz, Uz, Kz, vz), rz()
        };
        Fz.addEventListener("contextrestored", Yz);
        const xz = (0, gF.v)((() => {
          var zz, Xz, Oz, oz, Uz, Kz;
          const [rz, Yz, xz] = tz(), mz = vW(rz), Jz = vW(Yz), Iz = vW(xz);
          let Cz = null;
          if (sz) {
            const zz = Nz.gameBridge.lookup("localPos", null);
            Cz = (0, zt.T)(zz[0], zz[1], zz[2])
          }
          const ez = null !== (zz = null === (Xz = Cz) || void 0 === Xz ? void 0 : Xz[0]) && void 0 !== zz ? zz : 0,
            Zz = null !== (Oz = null === (oz = Cz) || void 0 === oz ? void 0 : oz[1]) && void 0 !== Oz ? Oz : 0,
            Gz = null !== (Uz = null === (Kz = Cz) || void 0 === Kz ? void 0 : Kz[2]) && void 0 !== Uz ? Uz : 0;
          if (!bz && mz === wz && Jz === Dz && Iz === gz && ez === Hz && Zz === Bz && Gz === Pz) return;
          bz = !1, wz = mz, Dz = Jz, gz = Iz, Hz = ez, Bz = Zz, Pz = Gz;
          const Tz = [(mz / 100).toFixed(2), (Jz / 100).toFixed(2), (Iz / 100).toFixed(2)];
          Cz && Tz.unshift(`${ez} ${Zz} ${Gz}`), uz.clearRect(0, 0, Fz.width, Fz.height);
          const cz = Fz.height / 2;
          let jz = 0;
          for (let tz = 0; tz < Tz.length; tz++) {
            const zz = vz * Wz[tz];
            uz.fillText(Tz[tz], jz + zz / 2, cz, zz), jz += zz
          }
        }));
        return () => {
          xz(), Fz.removeEventListener("contextrestored", Yz)
        }
      }), [tz, sz, Wz]), (0, Uz.jsx)("div", {
        className: "CoordinateUI",
        children: (0, Uz.jsx)("canvas", {
          ref: Xz,
          className: "CoordinateCanvas",
          width: 16 * XW(Wz),
          height: 16
        })
      })
    }
    const KW = (0, Fz.memo)((function() {
        const zz = (0, Fz.useCallback)((() => {
          const zz = Nz.gameBridge.lookup("localPos", null);
          return [zz[0], zz[1], zz[2]]
        }), []);
        return (0, Uz.jsx)(UW, {
          getCoordinates: zz,
          showChunkCoords: !1,
          columns: FW
        })
      })),
      uW = (0, Fz.memo)((function() {
        const zz = (0, Fz.useCallback)((() => {
          const zz = Nz.gameBridge.lookup("localPos", null),
            tz = fF.d.pw;
          let sz = zz[0] % tz,
            Fz = zz[1] % tz,
            Wz = zz[2] % tz;
          return sz < 0 && (sz += tz), Fz < 0 && (Fz += tz), Wz < 0 && (Wz += tz), [sz, Fz, Wz]
        }), []);
        return (0, Uz.jsx)(UW, {
          getCoordinates: zz,
          showChunkCoords: !0,
          columns: WW
        })
      }));
    var NW = sz(1991),
      bW = sz(1306),
      wW = sz(991),
      DW = sz(1213),
      gW = sz(106),
      HW = sz(36197),
      BW = sz(1423),
      PW = sz(2873);
    const rW = (0, Fz.memo)((function() {
      const zz = (0, Pz.e)("maxAuraLevel");
      return 0 === zz ? null : (0, Uz.jsx)(YW, {
        maxLevel: zz
      })
    }));

    function YW(zz) {
      let {
        maxLevel: tz
      } = zz;
      const sz = (0, Pz.e)("auraPerLevel"),
        [Wz, Xz] = (0, Fz.useState)((() => {
          var zz;
          return null !== (zz = Nz.gameBridge.latest("aura")) && void 0 !== zz ? zz : void 0
        })),
        [Oz, oz] = (0, Fz.useState)((() => rz(Wz))),
        [vz, Kz] = (0, Fz.useReducer)((zz => zz + 1), 0),
        uz = (0, Fz.useRef)(null),
        bz = (0, Fz.useRef)([]),
        wz = (0, Fz.useRef)({
          width: 0,
          level: 0
        }),
        Dz = (0, Fz.useRef)(null),
        gz = (0, Fz.useRef)(null);

      function Bz() {
        if (null !== Dz.current) return;
        if (0 === bz.current.length) return;
        const {
          width: zz,
          level: tz
        } = bz.current.shift();
        let sz;
        if (tz !== wz.current.level && tz > wz.current.level !== zz > wz.current.width) {
          const Fz = tz > wz.current.level;
          sz = Fz ? zz : 100 - zz, uz.current.style.transition = "none", uz.current.style.width = Fz ? "0%" : "100%", uz.current.offsetWidth
        } else sz = Math.abs(zz - wz.current.width);
        const Fz = 100 * sz / 20;
        uz.current.style.transition = `width ${Fz}ms linear`, oz(zz), wz.current = {
          width: zz,
          level: tz
        }, bz.current.length > 0 && (Dz.current = setTimeout((() => {
          Dz.current = null, Bz()
        }), Fz))
      }

      function rz(zz) {
        return Math.floor(zz / sz) === tz ? 100 : zz % sz / sz * 100
      }
      return (0, Fz.useEffect)((() => () => {
        clearTimeout(Dz.current), clearTimeout(gz.current), Dz.current = null, gz.current = null
      }), []), (0, mz.d)("aura", (zz => {
        if (gz.current && clearTimeout(gz.current), null === zz) return clearTimeout(Dz.current), gz.current = null, Dz.current = null, bz.current = [], wz.current = {
          width: 0,
          level: 0
        }, Xz(void 0), void oz(0);
        gz.current = setTimeout((() => {
          const tz = Math.floor(Wz / sz),
            Fz = Math.floor(zz / sz),
            Oz = rz(zz);
          zz > Wz && HW.d.play("exp_collect", .1).rate(1.6 + .5 * Math.random()), Fz > tz ? (Fz % 5 === 0 && HW.d.play("exp_levelup", .45).rate(.95 + .1 * Math.random()), Kz(), bz.current.push({
            width: 100,
            level: tz
          })) : Fz < tz && bz.current.push({
            width: 0,
            level: tz
          }), zz === Wz && Fz === tz || bz.current.push({
            width: Oz,
            level: Fz
          }), Xz(zz), Bz()
        }), 50)
      })), (0, Hz.f)(), (0, Uz.jsxs)("div", {
        className: "AuraBarWrapper",
        children: [(0, Uz.jsxs)("div", {
          className: "AuraBarLabel SmallTextBold",
          children: [(0, Uz.jsx)(BW.e, {
            showSignal: vz,
            particleElement: (0, Uz.jsx)("img", {
              src: (0, PW.g)("glint"),
              alt: ""
            })
          }), (0, Uz.jsx)("img", {
            className: "AuraBarLabelImage",
            src: (0, PW.g)("glint"),
            alt: "aura"
          }), (0, Uz.jsx)("div", {
            className: "AuraBarLabelText",
            children: Math.floor((null !== Wz && void 0 !== Wz ? Wz : 0) / sz)
          })]
        }), (0, Uz.jsx)("div", {
          className: "AuraBar",
          children: (0, Uz.jsx)("div", {
            ref: uz,
            className: "AuraBarBackground",
            style: {
              width: `${Oz}%`
            }
          })
        })]
      })
    }
    var xW = sz(2372);

    function mW(zz) {
      zz.timed && (zz.endedAnimation = zz.timed.animation, zz.timed = null)
    }
    const JW = (0, Fz.memo)((function() {
      const zz = (0, Fz.useRef)(null),
        tz = (0, Fz.useRef)(null),
        sz = (0, Fz.useRef)({
          timed: null,
          endedAnimation: null
        });
      return (0, oz.g)("middleScreenBarInitiate", (zz => {
        var Fz;
        let {
          duration: Wz,
          jF: Xz,
          horizBarRemOffset: Oz
        } = zz;
        const oz = sz.current;
        mW(oz);
        const vz = tz.current;
        if (!(Wz >= 0) || !vz) return;
        null === (Fz = oz.endedAnimation) || void 0 === Fz || Fz.cancel(), oz.endedAnimation = null;
        const Uz = vz.animate([{
          transform: "scaleX(0)"
        }, {
          transform: "scaleX(1)"
        }], {
          duration: Wz,
          fill: "forwards"
        });
        oz.timed = {
          jF: Xz,
          horizBarRemOffset: Oz,
          animation: Uz
        }
      })), (0, oz.g)("middleScreenBarRemove", (() => {
        mW(sz.current)
      })), (0, Fz.useEffect)((() => {
        const Fz = sz.current;
        let Wz = Number.NaN,
          Xz = Number.NaN,
          Oz = Number.NaN;
        return (0, gF.o)((() => {
          var sz, oz, vz, Uz;
          const Kz = zz.current,
            uz = tz.current;
          if (!Kz || !uz) return;
          null !== (sz = Fz.timed) && void 0 !== sz && sz.jF && "finished" === Fz.timed.animation.playState && mW(Fz), null === (oz = Fz.endedAnimation) || void 0 === oz || oz.cancel(), Fz.endedAnimation = null;
          let bz = Fz.timed ? 1 : 0;
          if (!Fz.timed) {
            const zz = Nz.gameBridge.lookup("momentumFrac", null);
            bz = zz > 0 ? 1 : 0, zz !== Oz && (Oz = zz, uz.style.transform = `scaleX(${zz})`)
          }
          const wz = null !== (vz = null === (Uz = Fz.timed) || void 0 === Uz ? void 0 : Uz.horizBarRemOffset) && void 0 !== vz ? vz : 0;
          wz === Wz && bz === Xz || (Wz = wz, Xz = bz, Kz.style.transform = `translateX(calc(-50% + ${wz}rem)) scaleX(${bz})`)
        }))
      }), []), (0, Uz.jsx)("div", {
        className: "MiddleScreenBar",
        ref: zz,
        children: (0, Uz.jsx)("div", {
          className: "MiddleScreenBarFill",
          ref: tz
        })
      })
    }));
    var IW = sz(4328),
      CW = sz(2528);

    function eW() {
      const {
        t: zz
      } = (0, Gz.B)(), tz = (0, oz.h)("serverUpdating", null), sz = (0, CW.e)(250, null !== tz);
      return null === tz || sz - tz > 3e4 ? null : (0, Uz.jsxs)("div", {
        className: "UpdateCountdownBanner",
        children: [(0, Uz.jsx)("div", {
          className: "UpdateCountdownBannerTitle",
          children: zz("updateWaiting:updatingIn", {
            countdown: (0, IW.p)(tz - sz)
          })
        }), (0, Uz.jsx)("div", {
          children: zz("updateWaiting:bringYouBack")
        })]
      })
    }
    var ZW = sz(36329),
      GW = sz(1910);
    const TW = [{
        translationKey: "general:interact"
      }],
      cW = (0, Fz.memo)((function() {
        const zz = (0, Pz.e)("crosshairText"),
          {
            interactPrompt: tz,
            blockText: sz,
            neededTool: Wz
          } = (0, mz.l)("crosshairTarget"),
          {
            isTouchScreen: Xz
          } = (0, Jz.h)(["isTouchScreen"]),
          Oz = (0, Cz.j)(),
          Kz = (0, Zz.c)("alt-fire");
        (0, Fz.useEffect)((() => {
          Nz.gameBridge.send("setCrosshairInteractPrompt", !Xz || Oz ? "key" : "touch")
        }), [Xz, Oz]);
        const [uz, bz] = (0, Fz.useReducer)((zz => zz + 1), 0);
        (0, oz.g)("customBindingsChanged", bz);
        var wz;
        if (null !== tz && (Oz && null !== Kz || !Xz && null !== (0, GW.t)("alt-fire"))) return (0, Uz.jsxs)("div", {
          className: "CrosshairText SmallTextBold InteractPrompt",
          children: [(0, Uz.jsx)(Iz.b, {
            noaAction: "alt-fire"
          }), (0, Uz.jsx)(vz.c, {
            text: null !== (wz = tz.label) && void 0 !== wz ? wz : TW
          })]
        });
        let Dz = null;
        return null !== sz ? Dz = sz : null !== zz && "" !== zz ? Dz = zz : null !== Wz && (Dz = [{
          icon: Wz,
          style: {
            opacity: .8
          }
        }, {
          str: " needed",
          style: {
            opacity: .8
          }
        }]), Dz ? (0, Uz.jsx)("div", {
          className: "CrosshairText SmallTextBold",
          children: (0, Uz.jsx)(vz.c, {
            text: Dz
          })
        }) : null
      }));
    var jW = sz(2377);
    const AW = (0, Fz.memo)((function() {
      var zz;
      const {
        interactPrompt: tz
      } = (0, mz.l)("crosshairTarget"), {
        openInGameMenuName: sz,
        openEverythingMenuName: Fz
      } = (0, Jz.h)(["openInGameMenuName", "openEverythingMenuName"]), Wz = (0, oz.h)("aimingOverlay", "none"), Xz = (0, Sz.n)(), Oz = (0, jW.b)();
      return null === tz || null !== sz || null !== Fz || "sniper" === Wz || Xz || Oz ? null : (0, Uz.jsx)(yW, {
        label: null !== (zz = tz.label) && void 0 !== zz ? zz : TW
      })
    }));

    function yW(zz) {
      let {
        label: tz
      } = zz;
      const sz = Zt(pz.c.Interact, !1);
      return (0, Fz.useEffect)((() => (rz.o.Yg(Dt.o), () => {
        rz.o.Yg(Dt.o)
      })), []), (0, Uz.jsx)("div", {
        ref: sz,
        className: "TouchInteractHit",
        children: (0, Uz.jsxs)("div", {
          className: "TouchInteractKey",
          children: [(0, Uz.jsx)("span", {
            className: "TouchInteractIcon",
            children: (0, Uz.jsx)(dz.c, {
              name: "hand-back-point-up"
            })
          }), (0, Uz.jsx)(vz.c, {
            text: tz
          })]
        })
      })
    }
    var MW = sz(4395),
      dW = sz(4464);
    const hW = (0, Fz.forwardRef)((function(zz, tz) {
        let {
          text: sz,
          className: Fz,
          children: Wz
        } = zz;
        return sz.hasText ? (0, Uz.jsx)("div", {
          ref: tz,
          className: Xz()("HudTextPanel", Fz, {
            NoBackground: !sz.showBackground
          }),
          children: null !== Wz && void 0 !== Wz ? Wz : (0, Uz.jsx)(vz.c, {
            text: sz.content
          })
        }) : null
      })),
      QW = (0, Fz.memo)((function() {
        const zz = (0, Pz.f)("middleTextTop"),
          [tz, sz] = (0, Fz.useState)(null),
          Wz = (0, IF.k)(tz);
        return zz.hasText ? (0, Uz.jsx)("div", {
          className: Xz()("MiddleTextTopContainer", {
            MiddleTextTopBelow: Wz
          }),
          children: (0, Uz.jsx)(hW, {
            ref: sz,
            className: "MiddleTextTop",
            text: zz
          })
        }) : null
      })),
      kW = (0, Fz.memo)((function() {
        const zz = (0, Pz.b)();
        return (0, Uz.jsx)(Uz.Fragment, {
          children: zz.map(((zz, tz) => (0, Uz.jsx)(hW, {
            className: "HeaderChip",
            text: zz
          }, tz)))
        })
      }));
    var iW = sz(3294),
      LW = sz(4247);
    const lW = (0, Fz.memo)((function() {
      const {
        t: zz
      } = (0, Gz.B)(), [tz, sz] = (0, Fz.useState)(!1), Wz = (0, Fz.useRef)(!1), Xz = function(zz) {
        let {
          gameNameWithVariation: tz,
          lobbyName: sz
        } = zz;
        if ((0, wW.n)(tz)) return nW;
        if ((0, DW.G)(sz)) return aW;
        return null
      }((0, mz.l)("connectedGame"));
      if (!Xz || tz) return null;
      const Oz = LW.d[Xz.target];
      return (0, Uz.jsx)(Mz.h, {
        tooltipInner: (0, Uz.jsx)("div", {
          children: zz(Oz.reportButtonTooltip)
        }),
        children: (0, Uz.jsx)("div", {
          children: (0, Uz.jsx)(Zs.O, {
            onClick: () => {
              Wz.current || (Wz.current = !0, (0, LW.h)(Xz.reportPolicyIds, Oz).then((zz => {
                null !== zz && void 0 !== zz && zz.selectedPolicyId && (Nz.gameBridge.send("reportLobbyOrGame", {
                  target: Xz.target,
                  PO: zz.selectedPolicyId,
                  details: zz.rO
                }), sz(!0))
              })).finally((() => {
                Wz.current = !1
              })))
            }
          })
        })
      })
    }));
    const nW = {
        target: "customGame",
        reportPolicyIds: iW.e
      },
      aW = {
        target: "lobby",
        reportPolicyIds: iW.h
      };
    var qW = sz(8291),
      SW = sz(36344),
      VW = sz(36346),
      RW = sz(36352),
      pW = sz(36359),
      fW = sz(36394);

    function EW(zz) {
      return zz instanceof Error && zX.has(zz.message) ? zz.message : void 0
    }
    const zX = new Set([fW.d.saveBusy.text, fW.d.saveClosed.text, fW.d.cropBusy.text]);
    let tX = !1;
    async function sX(zz, tz) {
      var sz, Fz;
      const {
        files: Wz
      } = tz, Xz = Wz.replayKey();
      if (null === Xz) return "none";
      if (tX) throw new Error(fW.d.saveBusy.text);
      const Oz = null !== (sz = null === (Fz = Wz.saveRefusal) || void 0 === Fz ? void 0 : Fz.call(Wz)) && void 0 !== sz ? sz : null;
      if (null !== Oz) throw new Error(Oz);
      tX = !0;
      try {
        return await async function(zz, tz, sz) {
          const {
            files: Fz
          } = tz, Wz = () => Fz.replayKey() === sz, Xz = (zz, tz) => {
            Wz() && Fz.markSaved(zz, tz)
          };
          let Oz = null;
          if (tz.pickerSupported()) {
            try {
              if (Oz = await tz.chooseFile(zz ? null : Fz.fileHandle()), null === Oz) return "ds"
            } catch (vz) {
              tz.onFallback(vz)
            }
            if (!Wz()) throw new Error(fW.d.saveClosed.text)
          }
          const oz = await Fz.encode();
          if (null === oz) {
            if (null !== Oz) throw new Error(fW.d.saveClosed.text);
            return "none"
          }
          if (null !== Oz) try {
            return await tz.write(Oz, oz), Xz(Oz), "written"
          } catch (vz) {
            tz.onFallback(vz)
          }
          return Xz(null, tz.download(oz)), "downloaded"
        }(zz, tz, Xz)
      } finally {
        tX = !1
      }
    }
    var FX = sz(4180),
      WX = sz(78);
    const XX = [1, 2, 4, 8, 16, 32, 64];

    function OX(zz, tz) {
      return Math.max(0, Math.min(zz, tz))
    }

    function oX(zz, tz, sz) {
      return sz <= tz ? 0 : (zz - tz) / (sz - tz) * 100
    }

    function vX(zz, tz, sz) {
      const Fz = sz - tz;
      return Math.round(tz + zz / 100 * Fz)
    }

    function UX(zz, tz) {
      const sz = Math.floor(zz / tz / 60),
        Fz = Math.floor(zz / tz % 60),
        Wz = zz % tz;
      return `${sz.toString().padStart(2,"0")}:${Fz.toString().padStart(2,"0")}:${Wz.toString().padStart(2,"0")}`
    }

    function KX(zz) {
      return Number.isInteger(zz) || XX.includes(zz) ? `${Math.round(zz)}\xd7` : `${zz.toFixed(1)}\xd7`
    }

    function uX(zz, tz) {
      const sz = XX.indexOf(zz);
      if (-1 !== sz) return "in" === tz ? XX[Math.min(sz + 1, XX.length - 1)] : XX[Math.max(sz - 1, 0)];
      if ("in" === tz) {
        for (const tz of XX)
          if (tz >= zz) return tz;
        return zz
      }
      for (let Fz = XX.length - 1; Fz >= 0; Fz--)
        if (XX[Fz] <= zz) return XX[Fz];
      return XX[0]
    }

    function NX(zz, tz) {
      const sz = tz.getBoundingClientRect();
      if (sz.width <= 0) return 0;
      const Fz = (zz - sz.left) / sz.width * 100;
      return Math.max(0, Math.min(100, Fz))
    }

    function bX(zz, tz) {
      return tz <= 0 ? 0 : zz / tz * 100
    }

    function wX(zz, tz, sz) {
      const Fz = [];
      let Wz = Math.ceil(zz / sz) * sz;
      for (; Wz <= tz;) Fz.push(Wz), Wz += sz;
      return Fz
    }
    var DX = sz(36396);
    const gX = [{
        label: "Linear",
        easing: DX.l
      }, {
        label: "Ease",
        easing: [.25, .1, .25, 1]
      }, {
        label: "Ease In",
        easing: DX.g
      }, {
        label: "Ease Out",
        easing: DX.k
      }, {
        label: "Ease In Out",
        easing: DX.c
      }],
      HX = 200,
      BX = 150;

    function PX(zz) {
      const tz = zz => Number(zz.toFixed(3)).toString();
      return `cubic-bezier(${tz(zz[0])}, ${tz(zz[1])}, ${tz(zz[2])}, ${tz(zz[3])})`
    }

    function rX(zz, tz) {
      return {
        cx: 25 + zz * BX,
        cy: 25 + (1 - tz) * BX
      }
    }

    function YX(zz, tz, sz) {
      const Fz = zz - sz.left,
        Wz = tz - sz.top;
      return {
        x: Qs.c.clamp((Fz - 25) / BX, 0, 1),
        y: Qs.c.clamp(1 - (Wz - 25) / BX, -1, 2)
      }
    }

    function xX(zz, tz, sz, Fz, Wz) {
      return {
        x: (0, DX.t)(zz, sz, Wz),
        y: (0, DX.t)(tz, Fz, Wz)
      }
    }
    const mX = (0, Fz.memo)((function(zz) {
      let {
        value: tz,
        onChange: sz
      } = zz;
      const Wz = (0, Fz.useRef)(null),
        Xz = (0, Fz.useRef)(null),
        [Oz, oz] = (0, Fz.useState)(null),
        vz = (0, Fz.useCallback)((() => {
          const zz = Wz.current;
          if (!zz) return;
          const sz = zz.getContext("2d");
          if (!sz) return;
          const Fz = window.devicePixelRatio || 1;
          zz.width = HX * Fz, zz.height = HX * Fz, sz.setTransform(Fz, 0, 0, Fz, 0, 0), sz.clearRect(0, 0, HX, HX), sz.fillStyle = "rgba(38, 52, 93, 0.85)", sz.fillRect(0, 0, HX, HX), sz.beginPath();
          const Xz = rX(0, 0),
            oz = rX(1, 1);
          sz.moveTo(Xz.cx, Xz.cy), sz.lineTo(oz.cx, oz.cy), sz.strokeStyle = "rgba(164, 164, 164, 0.35)", sz.setLineDash([3, 3]), sz.stroke(), sz.setLineDash([]);
          const [vz, Uz, Kz, uz] = tz, Nz = rX(vz, Uz), bz = rX(Kz, uz);
          sz.strokeStyle = "rgba(252, 211, 115, 0.55)", sz.lineWidth = 1.5, sz.beginPath(), sz.moveTo(Xz.cx, Xz.cy), sz.lineTo(Nz.cx, Nz.cy), sz.moveTo(oz.cx, oz.cy), sz.lineTo(bz.cx, bz.cy), sz.stroke(), sz.strokeStyle = "#fcd373", sz.lineWidth = 2, sz.beginPath();
          for (let tz = 0; tz <= 50; tz++) {
            const zz = xX(vz, Uz, Kz, uz, tz / 50),
              Fz = rX(zz.x, zz.y);
            0 === tz ? sz.moveTo(Fz.cx, Fz.cy) : sz.lineTo(Fz.cx, Fz.cy)
          }
          sz.stroke();
          const wz = (zz, tz, Fz) => {
            sz.beginPath(), sz.arc(zz, tz, Fz ? 6 : 5, 0, 2 * Math.PI), sz.fillStyle = Fz ? "#ffb914" : "#fcd373", sz.fill(), sz.strokeStyle = "#1a1f2e", sz.lineWidth = 1.5, sz.stroke()
          };
          wz(Nz.cx, Nz.cy, "p1" === Oz), wz(bz.cx, bz.cy, "p2" === Oz)
        }), [Oz, tz]);
      (0, Fz.useEffect)((() => {
        vz()
      }), [vz]);
      const Kz = (0, Fz.useCallback)(((zz, Fz) => {
          const Oz = Wz.current,
            oz = Xz.current;
          if (!Oz || !oz) return;
          const vz = Oz.getBoundingClientRect(),
            {
              x: Uz,
              y: Kz
            } = YX(zz, Fz, vz);
          sz("p1" === oz ? [Uz, Kz, tz[2], tz[3]] : [tz[0], tz[1], Uz, Kz])
        }), [sz, tz]),
        uz = (0, Fz.useCallback)((zz => {
          const sz = Wz.current;
          if (!sz) return;
          const Fz = sz.getBoundingClientRect();
          let {
            x: Oz,
            y: vz
          } = YX(zz.clientX, zz.clientY, Fz);
          Oz = Qs.c.clamp(Oz, 0, 1), vz = Qs.c.clamp(vz, 0, 1);
          const [Uz, uz, Nz, bz] = tz.map((zz => Qs.c.clamp(zz, 0, 1))), wz = Math.hypot(Oz - Uz, vz - uz), Dz = Math.hypot(Oz - Nz, vz - bz), gz = wz <= Dz ? "p1" : "p2";
          ("p1" === gz ? wz : Dz) > .12 || (Xz.current = gz, oz(gz), sz.setPointerCapture(zz.pointerId), Kz(zz.clientX, zz.clientY))
        }), [Kz, tz]),
        Nz = (0, Fz.useCallback)((zz => {
          Xz.current && Kz(zz.clientX, zz.clientY)
        }), [Kz]),
        bz = (0, Fz.useCallback)((zz => {
          Xz.current = null, oz(null), zz.currentTarget.hasPointerCapture(zz.pointerId) && zz.currentTarget.releasePointerCapture(zz.pointerId)
        }), []);
      return (0, Uz.jsxs)("div", {
        className: "CubicBezierEasingEditor",
        children: [(0, Uz.jsx)("canvas", {
          ref: Wz,
          className: "CubicBezierEasingEditorCanvas",
          style: {
            width: HX,
            height: HX
          },
          onPointerDown: uz,
          onPointerMove: Nz,
          onPointerUp: bz,
          onPointerCancel: bz
        }), (0, Uz.jsx)("span", {
          className: "CubicBezierEasingEditorReadout",
          children: PX(tz)
        })]
      })
    }));
    var JX = sz(1628),
      IX = sz(1608);
    const CX = 12;

    function eX(zz) {
      return {
        left: zz.left + zz.width / 2,
        top: zz.top - 8
      }
    }

    function ZX(zz, tz) {
      const [sz, Wz] = (0, Fz.useState)(null);
      return (0, Fz.useLayoutEffect)((() => {
        const sz = zz.current;
        if (!sz) return;
        const {
          width: Fz,
          height: Xz
        } = sz.getBoundingClientRect();
        Wz(function(zz, tz, sz) {
          const Fz = window.innerWidth,
            Wz = window.innerHeight,
            Xz = tz / 2;
          let Oz = zz.left + zz.width / 2;
          Oz = Math.max(CX + Xz, Math.min(Oz, Fz - CX - Xz));
          const oz = zz.top - 8 - CX,
            vz = Wz - zz.bottom - 8 - CX,
            Uz = oz < sz && vz >= oz;
          let Kz;
          Uz ? (Kz = zz.bottom + 8, Kz + sz > Wz - CX && (Kz = Wz - CX - sz), Kz = Math.max(CX, Kz)) : (Kz = zz.top - 8, Kz - sz < CX && (Kz = CX + sz));
          return {
            left: Oz,
            top: Kz,
            placeBelow: Uz
          }
        }(tz, Fz, Xz))
      }), [tz, zz]), sz
    }

    function GX(zz, tz, sz) {
      (0, Fz.useEffect)((() => (0, IX.d)("pointerdown", (Fz => {
        var Wz, Xz;
        const Oz = Fz.target;
        Oz instanceof Node && (null !== (Wz = zz.current) && void 0 !== Wz && Wz.contains(Oz) || null !== sz && void 0 !== sz && null !== (Xz = sz.current) && void 0 !== Xz && Xz.contains(Oz) || (0, JX.j)(Oz) || tz())
      }))), [sz, tz, zz])
    }

    function TX(zz) {
      let {
        label: tz,
        value: sz,
        onChange: Fz
      } = zz;
      return (0, Uz.jsxs)("div", {
        className: "ReplayKeyframePopoverVec3",
        children: [(0, Uz.jsx)("span", {
          className: "ReplayKeyframePopoverVec3Label",
          children: tz
        }), (0, Uz.jsx)("div", {
          className: "ReplayKeyframePopoverVec3Inputs",
          children: ["X", "Y", "Z"].map(((zz, tz) => (0, Uz.jsxs)("label", {
            className: "ReplayKeyframePopoverAxis",
            children: [(0, Uz.jsx)("span", {
              children: zz
            }), (0, Uz.jsx)("input", {
              type: "number",
              step: "any",
              value: sz[tz],
              onChange: zz => {
                const Wz = Number.parseFloat(zz.target.value);
                if (Number.isNaN(Wz)) return;
                const Xz = [sz[0], sz[1], sz[2]];
                Xz[tz] = Wz, Fz(Xz)
              }
            })]
          }, zz)))
        })]
      })
    }
    const cX = (0, Fz.memo)((function(zz) {
        var tz, sz, Wz;
        let {
          keyframe: Oz,
          anchor: oz,
          hasOutgoingSegment: vz,
          onClose: Kz,
          onApply: uz,
          onDelete: Nz,
          onUseCurrentCamera: bz
        } = zz;
        const wz = (0, Fz.useRef)(null),
          Dz = ZX(wz, oz.rect),
          [gz, Hz] = (0, Fz.useState)((() => [Oz.position[0], Oz.position[1], Oz.position[2]])),
          [Bz, Pz] = (0, Fz.useState)((() => [Oz.direction[0], Oz.direction[1], Oz.direction[2]])),
          [rz, Yz] = (0, Fz.useState)((() => Oz.easing));
        (0, Fz.useEffect)((() => {
          Hz([Oz.position[0], Oz.position[1], Oz.position[2]]), Pz([Oz.direction[0], Oz.direction[1], Oz.direction[2]]), Yz(Oz.easing)
        }), [Oz]), GX(wz, Kz);
        const xz = (0, Fz.useCallback)((() => {
            uz({
              wN: Oz.wN,
              position: gz,
              direction: Bz,
              easing: rz
            }), Kz()
          }), [Bz, rz, Oz.wN, uz, Kz, gz]),
          mz = (0, Fz.useCallback)((() => {
            Nz(Oz.wN), Kz()
          }), [Oz.wN, Nz, Kz]),
          Jz = (0, Fz.useCallback)((() => {
            const zz = bz();
            zz && (Hz([zz.position[0], zz.position[1], zz.position[2]]), Pz([zz.direction[0], zz.direction[1], zz.direction[2]]))
          }), [bz]),
          Iz = eX(oz.rect);
        return (0, Uz.jsxs)("div", {
          ref: wz,
          className: Xz()("ReplayViewerPopover ReplayKeyframePopover", {
            Below: null !== (tz = null === Dz || void 0 === Dz ? void 0 : Dz.placeBelow) && void 0 !== tz && tz,
            Positioned: null !== Dz
          }),
          style: {
            left: `${null!==(sz=null===Dz||void 0===Dz?void 0:Dz.left)&&void 0!==sz?sz:Iz.left}px`,
            top: `${null!==(Wz=null===Dz||void 0===Dz?void 0:Dz.top)&&void 0!==Wz?Wz:Iz.top}px`
          },
          onPointerDown: zz => {
            zz.stopPropagation()
          },
          children: [(0, Uz.jsxs)("div", {
            className: "ReplayKeyframePopoverHeader",
            children: [(0, Uz.jsx)("span", {
              className: "ReplayKeyframePopoverTitle",
              children: "Camera keyframe"
            }), (0, Uz.jsxs)("span", {
              className: "ReplayKeyframePopoverTick",
              children: ["Tick ", oz.wN]
            })]
          }), (0, Uz.jsx)(TX, {
            label: "Position",
            value: gz,
            onChange: Hz
          }), (0, Uz.jsx)(TX, {
            label: "Direction",
            value: Bz,
            onChange: Pz
          }), vz && (0, Uz.jsxs)("div", {
            className: "ReplayKeyframePopoverEasing",
            children: [(0, Uz.jsx)("span", {
              className: "ReplayKeyframePopoverEasingLabel",
              children: "Easing to next"
            }), (0, Uz.jsx)("div", {
              className: "ReplayKeyframePopoverEasingPresets",
              children: gX.map((zz => {
                const tz = (sz = rz, Fz = zz.easing, sz[0] === Fz[0] && sz[1] === Fz[1] && sz[2] === Fz[2] && sz[3] === Fz[3]);
                var sz, Fz;
                return (0, Uz.jsx)(Zs.Q, {
                  className: Xz()("ReplayKeyframePopoverPreset", {
                    Active: tz
                  }),
                  onClick: () => {
                    Yz(zz.easing)
                  },
                  children: zz.label
                }, zz.label)
              }))
            }), (0, Uz.jsx)(mX, {
              value: rz,
              onChange: Yz
            })]
          }), (0, Uz.jsxs)("div", {
            className: "ReplayKeyframePopoverActions",
            children: [(0, Uz.jsx)(Zs.h, {
              className: "ReplayViewerCompactButton",
              onClick: Jz,
              children: "Use current view"
            }), (0, Uz.jsx)(Zs.p, {
              className: "ReplayViewerCompactButton",
              onClick: xz,
              children: "Apply"
            }), (0, Uz.jsx)(Zs.H, {
              className: "ReplayViewerCompactButton",
              onClick: mz,
              children: "Delete"
            })]
          })]
        })
      })),
      jX = (0, Fz.memo)((function(zz) {
        var tz, sz, Wz;
        let {
          anchor: Oz,
          hasPlaybackMark: oz,
          onClose: vz,
          onMark: Kz,
          onZoom: uz,
          onCrop: Nz,
          onDeleteKeyframes: bz,
          onClearMark: wz
        } = zz;
        const Dz = (0, Fz.useRef)(null),
          gz = ZX(Dz, Oz.rect),
          Hz = eX(Oz.rect),
          Bz = {
            startTick: Oz.startTick,
            endTick: Oz.endTick
          },
          Pz = Oz.endTick > Oz.startTick;
        return GX(Dz, vz), (0, Uz.jsx)("div", {
          ref: Dz,
          className: Xz()("ReplayViewerPopover ReplayTimelineSelectionPopover", {
            Below: null !== (tz = null === gz || void 0 === gz ? void 0 : gz.placeBelow) && void 0 !== tz && tz,
            Positioned: null !== gz
          }),
          style: {
            left: `${null!==(sz=null===gz||void 0===gz?void 0:gz.left)&&void 0!==sz?sz:Hz.left}px`,
            top: `${null!==(Wz=null===gz||void 0===gz?void 0:gz.top)&&void 0!==Wz?Wz:Hz.top}px`
          },
          onPointerDown: zz => {
            zz.stopPropagation()
          },
          children: (0, Uz.jsxs)("div", {
            className: "ReplayTimelineSelectionPopoverActions",
            children: [(0, Uz.jsx)(Zs.p, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                Kz(Bz)
              },
              disabled: !Pz,
              children: (0, Uz.jsx)("span", {
                children: " Play range "
              })
            }), (0, Uz.jsx)(Zs.h, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                uz(Bz)
              },
              children: (0, Uz.jsx)("span", {
                children: " Zoom "
              })
            }), (0, Uz.jsx)(Zs.Q, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                Nz(Bz)
              },
              disabled: !Pz,
              children: (0, Uz.jsx)("span", {
                children: " Crop "
              })
            }), (0, Uz.jsx)(Zs.Q, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                bz(Bz)
              },
              children: (0, Uz.jsx)("span", {
                children: " Delete all keyframes "
              })
            }), oz && (0, Uz.jsx)(Zs.Q, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                wz()
              },
              children: (0, Uz.jsx)("span", {
                children: " Clear range "
              })
            })]
          })
        })
      })),
      AX = (0, Fz.memo)((function(zz) {
        var tz, sz;
        let {
          maxTick: Wz,
          displayTick: Oz,
          iJ: oz,
          cameraKeyframes: vz,
          playbackMark: Kz,
          onSeek: uz,
          onPause: Nz,
          onScrubTickChange: bz,
          onMoveCameraKeyframe: wz,
          onUpdateCameraKeyframe: Dz,
          onDeleteCameraKeyframe: gz,
          onUseCurrentCamera: Hz,
          onMarkRange: Bz,
          onCropRange: Pz,
          onDeleteKeyframesInRange: rz,
          onClearMark: Yz,
          zoomLevel: xz,
          onZoomLevelChange: mz
        } = zz;
        const Jz = (0, Fz.useRef)(null),
          Iz = (0, Fz.useRef)(null),
          Cz = (0, Fz.useRef)(!1),
          ez = (0, Fz.useRef)(!1),
          Zz = (0, Fz.useRef)(xz),
          Gz = (0, Fz.useRef)(null),
          Tz = (0, Fz.useRef)(null),
          cz = (0, Fz.useRef)(null),
          jz = (0, Fz.useRef)(null),
          [Az, yz] = (0, Fz.useState)(null),
          [Mz, dz] = (0, Fz.useState)(Oz),
          [hz, Qz] = (0, Fz.useState)(null),
          [kz, iz] = (0, Fz.useState)(null),
          [Lz, lz] = (0, Fz.useState)(null),
          [nz, az] = (0, Fz.useState)(null),
          qz = (0, Fz.useMemo)((() => vz.map((zz => zz.wN))), [vz]),
          Sz = null !== Az && void 0 !== Az ? Az : Oz,
          {
            viewStart: Vz,
            viewEnd: Rz
          } = (0, Fz.useMemo)((() => function(zz) {
            const tz = zz.maxTick + 1,
              sz = Math.max(1, Math.ceil(tz / zz.zoomLevel)),
              Fz = Math.floor(sz / 2);
            let Wz = zz.centerTick - Fz;
            return Wz = Math.max(0, Math.min(Wz, zz.maxTick - sz + 1)), {
              viewStart: Wz,
              viewEnd: Math.min(zz.maxTick, Wz + sz - 1)
            }
          }({
            maxTick: Wz,
            zoomLevel: xz,
            centerTick: Mz
          })), [Wz, xz, Mz]);
        (0, Fz.useEffect)((() => {
          if (null !== Az || null !== Tz.current || null !== cz.current || null !== jz.current) return;
          if (Cz.current) return void(Cz.current = !1);
          if (ez.current) return void(ez.current = !1);
          const zz = Zz.current !== xz;
          Zz.current = xz, zz && dz(Oz)
        }), [xz, Oz, Az]);
        const pz = (0, Fz.useCallback)((zz => {
            let tz = OX(zz, Wz);
            return Kz && (tz = Math.max(Kz.inTick, Math.min(tz, Kz.outTick))), tz
          }), [Wz, Kz]),
          fz = (0, Fz.useCallback)(((zz, tz) => {
            const sz = pz(zz);
            uz(sz), tz && dz(sz)
          }), [pz, uz]),
          Ez = (0, Fz.useCallback)(((zz, tz) => {
            const sz = pz(zz);
            yz(sz), bz(sz), fz(sz, tz)
          }), [pz, fz, bz]),
          zt = (0, Fz.useCallback)((() => {
            yz((zz => (null !== zz && dz(zz), null))), bz(null)
          }), [bz]),
          tt = (0, Fz.useCallback)((() => {
            lz(null), az(null)
          }), []),
          st = (0, Fz.useCallback)((zz => {
            const tz = Jz.current;
            if (!tz) return 0;
            return OX(vX(NX(zz, tz), Vz, Rz), Wz)
          }), [Wz, Rz, Vz]),
          Ft = (0, Fz.useCallback)((zz => {
            const tz = Iz.current;
            if (!tz) return 0;
            return OX(vX(NX(zz, tz), 0, Wz), Wz)
          }), [Wz]),
          Wt = (0, Fz.useMemo)((() => {
            if (!hz) return [...qz];
            const zz = qz.filter((zz => zz !== hz.fromTick));
            return zz.push(hz.previewTick), zz.sort(((zz, tz) => zz - tz)), zz
          }), [qz, hz]),
          Xt = (0, Fz.useMemo)((() => {
            var zz;
            return kz && null !== (zz = vz.find((zz => zz.wN === kz.wN))) && void 0 !== zz ? zz : null
          }), [vz, kz]),
          Ot = (0, Fz.useMemo)((() => !!Xt && vz.some((zz => zz.wN > Xt.wN))), [vz, Xt]);
        (0, Fz.useEffect)((() => {
          kz && !Xt && iz(null)
        }), [kz, Xt]), (0, Fz.useEffect)((() => {
          if (!nz) return () => {};
          const zz = zz => {
            "Escape" === zz.key && tt()
          };
          return window.addEventListener("keydown", zz), () => {
            window.removeEventListener("keydown", zz)
          }
        }), [tt, nz]);
        const ot = (0, Fz.useCallback)(((zz, tz) => {
            tt(), Nz(), uz(zz, {
              ignorePlaybackMark: !0
            }), iz({
              wN: zz,
              rect: tz.getBoundingClientRect()
            })
          }), [tt, Nz, uz]),
          vt = (0, Fz.useCallback)(((zz, tz) => sz => {
            0 === sz.button && (sz.stopPropagation(), iz(null), tt(), Nz(), Gz.current = {
              fromTick: zz,
              startX: sz.clientX,
              startY: sz.clientY,
              didDrag: !1,
              track: tz
            }, Qz({
              fromTick: zz,
              previewTick: zz,
              track: tz
            }), sz.currentTarget.setPointerCapture(sz.pointerId))
          }), [tt, Nz]),
          Ut = (0, Fz.useCallback)((zz => {
            if (!hz) return;
            zz.stopPropagation();
            const tz = Gz.current;
            if (tz && !tz.didDrag) {
              const sz = zz.clientX - tz.startX,
                Fz = zz.clientY - tz.startY;
              Math.hypot(sz, Fz) > 5 && (tz.didDrag = !0)
            }
            const sz = "detail" === hz.track ? st(zz.clientX) : Ft(zz.clientX);
            sz !== hz.previewTick && Qz({
              ...hz,
              previewTick: sz
            })
          }), [hz, st, Ft]),
          Kt = (0, Fz.useCallback)((zz => {
            if (!hz) return;
            zz.stopPropagation();
            const tz = Gz.current,
              sz = "detail" === hz.track ? st(zz.clientX) : Ft(zz.clientX);
            tz && !tz.didDrag ? ot(tz.fromTick, zz.currentTarget) : sz !== hz.fromTick && wz(hz.fromTick, sz), Qz(null), Gz.current = null, zz.currentTarget.releasePointerCapture(zz.pointerId)
          }), [hz, wz, ot, st, Ft]),
          ut = (0, Fz.useCallback)((zz => {
            if (0 !== zz.button) return;
            iz(null), Nz();
            const tz = st(zz.clientX);
            Tz.current = {
              pointerId: zz.pointerId,
              startX: zz.clientX,
              startY: zz.clientY,
              startTick: tz,
              currentTick: tz,
              didSelect: !1
            }, lz(null), az(null), zz.currentTarget.setPointerCapture(zz.pointerId)
          }), [Nz, st]),
          Nt = (0, Fz.useCallback)((zz => {
            const tz = Tz.current;
            if (!tz || tz.pointerId !== zz.pointerId) return;
            const sz = st(zz.clientX);
            if (tz.currentTick = sz, !tz.didSelect) {
              const sz = zz.clientX - tz.startX,
                Fz = zz.clientY - tz.startY;
              if (Math.hypot(sz, Fz) <= 5) return;
              tz.didSelect = !0
            }
            const Fz = Math.min(tz.startTick, sz),
              Wz = Math.max(tz.startTick, sz);
            lz({
              startTick: Fz,
              endTick: Wz
            })
          }), [st]),
          bt = (0, Fz.useCallback)((zz => {
            const tz = Tz.current;
            if (!tz || tz.pointerId !== zz.pointerId) return;
            if (Tz.current = null, zz.currentTarget.releasePointerCapture(zz.pointerId), !tz.didSelect) return tt(), void fz(tz.startTick, !0);
            const sz = st(zz.clientX),
              Fz = Math.min(tz.startTick, sz),
              Wz = Math.max(tz.startTick, sz),
              Xz = {
                startTick: Fz,
                endTick: Wz
              };
            lz(Xz);
            const Oz = Jz.current;
            if (!Oz) return;
            const oz = Oz.getBoundingClientRect(),
              vz = oX(Fz, Vz, Rz) / 100,
              Uz = oX(Wz, Vz, Rz) / 100,
              Kz = oz.left + vz * oz.width,
              uz = oz.left + Uz * oz.width;
            az({
              ...Xz,
              rect: new DOMRect(Kz, oz.top, Math.max(uz - Kz, 1), oz.height)
            })
          }), [tt, fz, st, Rz, Vz]),
          wt = (0, Fz.useCallback)((zz => tz => {
            if (0 !== tz.button) return;
            tz.stopPropagation(), iz(null), tt(), Nz(), cz.current = {
              pointerId: tz.pointerId,
              track: zz
            }, tz.currentTarget.setPointerCapture(tz.pointerId);
            const sz = "detail" === zz ? st(tz.clientX) : Ft(tz.clientX);
            Ez(sz, !1)
          }), [tt, Nz, Ez, st, Ft]),
          Dt = (0, Fz.useCallback)((zz => {
            const tz = cz.current;
            if (!tz || tz.pointerId !== zz.pointerId) return;
            zz.stopPropagation();
            const sz = "detail" === tz.track ? st(zz.clientX) : Ft(zz.clientX);
            Ez(sz, !1)
          }), [Ez, st, Ft]),
          gt = (0, Fz.useCallback)((zz => {
            const tz = cz.current;
            tz && tz.pointerId === zz.pointerId && (zz.stopPropagation(), cz.current = null, zz.currentTarget.releasePointerCapture(zz.pointerId), zt())
          }), [zt]),
          Ht = (0, Fz.useCallback)((zz => {
            0 === zz.button && (tt(), Nz(), jz.current = {
              pointerId: zz.pointerId
            }, zz.currentTarget.setPointerCapture(zz.pointerId), Ez(Ft(zz.clientX), !0))
          }), [tt, Nz, Ez, Ft]),
          Bt = (0, Fz.useCallback)((zz => {
            const tz = jz.current;
            tz && tz.pointerId === zz.pointerId && Ez(Ft(zz.clientX), !0)
          }), [Ez, Ft]),
          Pt = (0, Fz.useCallback)((zz => {
            const tz = jz.current;
            tz && tz.pointerId === zz.pointerId && (jz.current = null, zz.currentTarget.releasePointerCapture(zz.pointerId), zt())
          }), [zt]),
          rt = (0, Fz.useCallback)((zz => {
            const tz = Math.max(1, zz.endTick - zz.startTick + 1),
              sz = Wz + 1,
              Fz = sz / tz,
              Xz = Math.max(1, Math.ceil(sz / Fz)),
              Oz = zz.startTick + Math.floor((Xz - 1) / 2);
            ez.current = !0, Zz.current = Fz, dz(OX(Oz, Wz)), mz(Fz), tt()
          }), [tt, Wz, mz]),
          Yt = (0, Fz.useCallback)((zz => {
            Bz(zz), tt()
          }), [tt, Bz]),
          xt = (0, Fz.useCallback)((zz => {
            Pz(zz), tt()
          }), [tt, Pz]),
          mt = (0, Fz.useCallback)((zz => {
            rz(zz), tt()
          }), [tt, rz]),
          Jt = (0, Fz.useCallback)((() => {
            Yz(), tt()
          }), [tt, Yz]);
        (0, Fz.useEffect)((() => {
          const zz = Jz.current;
          if (!zz) return () => {};
          const tz = tz => {
            tz.preventDefault();
            const sz = OX(vX(NX(tz.clientX, zz), Vz, Rz), Wz),
              Fz = tz.deltaY < 0 ? "in" : "out",
              Xz = uX(xz, Fz);
            Xz !== xz && (Cz.current = !0, dz(sz), mz(Xz))
          };
          return zz.addEventListener("wheel", tz, {
            passive: !1
          }), () => {
            zz.removeEventListener("wheel", tz)
          }
        }), [Wz, mz, Rz, Vz, xz]);
        const It = oX(Sz, Vz, Rz),
          Ct = bX(Sz, Wz),
          et = bX(Vz, Wz),
          Zt = Wz > 0 ? bX(Rz, Wz) : 100,
          Gt = null !== Kz,
          Tt = null !== (tz = null === Kz || void 0 === Kz ? void 0 : Kz.inTick) && void 0 !== tz ? tz : 0,
          ct = null !== (sz = null === Kz || void 0 === Kz ? void 0 : Kz.outTick) && void 0 !== sz ? sz : Wz,
          jt = bX(Tt, Wz),
          At = Math.max(bX(ct, Wz) - jt, 0),
          yt = oX(Math.max(Tt, Vz), Vz, Rz),
          Mt = oX(Math.min(ct, Rz), Vz, Rz),
          dt = Math.max(Mt - yt, 0),
          ht = Gt && ct >= Vz && Tt <= Rz,
          Qt = oX(Tt, Vz, Rz),
          kt = oX(ct, Vz, Rz),
          it = Gt && Tt >= Vz && Tt <= Rz,
          Lt = Gt && ct >= Vz && ct <= Rz,
          lt = bX(Tt, Wz),
          nt = bX(ct, Wz),
          qt = null !== Lz && void 0 !== Lz ? Lz : nz ? {
            startTick: nz.startTick,
            endTick: nz.endTick
          } : null,
          St = qt ? oX(Math.max(qt.startTick, Vz), Vz, Rz) : 0,
          Vt = qt ? oX(Math.min(qt.endTick, Rz), Vz, Rz) : 0,
          Rt = Math.max(Vt - St, 0),
          pt = null !== qt && qt.endTick >= Vz && qt.startTick <= Rz,
          ft = (0, Fz.useMemo)((() => wX(0, Wz, oz)), [Wz, oz]),
          Et = (0, Fz.useMemo)((() => wX(Vz, Rz, oz)), [Vz, Rz, oz]),
          zs = (0, Fz.useMemo)((() => Wt.filter((zz => zz >= Vz && zz <= Rz))), [Wt, Rz, Vz]),
          ts = (0, Fz.useCallback)(((zz, tz, sz) => {
            const Fz = "detail" === tz ? oX(zz, Vz, Rz) : bX(zz, Wz),
              Oz = null !== hz && sz === hz.fromTick,
              oz = null !== kz && kz.wN === sz;
            return (0, Uz.jsx)("button", {
              type: "button",
              className: Xz()("ReplayTimelineCameraKeyframeMarker", "detail" === tz ? "Detail" : "Overview", {
                Dragging: Oz,
                Selected: oz
              }),
              style: {
                left: `${Fz}%`
              },
              onPointerDown: vt(sz, tz),
              onPointerMove: Ut,
              onPointerUp: Kt,
              onPointerCancel: Kt,
              "aria-label": `Camera keyframe at tick ${sz}`
            }, `cam-${tz}-${sz}`)
          }), [vt, kz, Kt, hz, Wz, Ut, Rz, Vz]),
          ss = (0, Fz.useCallback)((zz => hz && zz === hz.previewTick ? hz.fromTick : zz), [hz]);
        return Wz <= 0 ? null : (0, Uz.jsxs)("div", {
          className: "ReplayTimeline",
          children: [kz && Xt && (0, WX.createPortal)((0, Uz.jsx)(cX, {
            keyframe: Xt,
            anchor: kz,
            hasOutgoingSegment: Ot,
            onClose: () => {
              iz(null)
            },
            onApply: Dz,
            onDelete: gz,
            onUseCurrentCamera: Hz
          }), document.body), nz && (0, WX.createPortal)((0, Uz.jsx)(jX, {
            anchor: nz,
            hasPlaybackMark: Gt,
            onClose: tt,
            onMark: Yt,
            onZoom: rt,
            onCrop: xt,
            onDeleteKeyframes: mt,
            onClearMark: Jt
          }), document.body), (0, Uz.jsxs)("div", {
            className: Xz()("ReplayTimelineOverviewSection", {
              Hidden: xz <= 1
            }),
            children: [(0, Uz.jsx)("div", {
              className: "ReplayTimelineSectionLabel",
              children: "Overview"
            }), (0, Uz.jsxs)("div", {
              ref: Iz,
              className: "ReplayTimelineOverviewTrack",
              onPointerDown: Ht,
              onPointerMove: Bt,
              onPointerUp: Pt,
              onPointerCancel: Pt,
              role: "slider",
              "aria-label": "Recording overview",
              "aria-valuemin": 0,
              "aria-valuemax": Wz,
              "aria-valuenow": Sz,
              tabIndex: 0,
              children: [ft.map((zz => {
                const tz = bX(zz, Wz);
                return (0, Uz.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Overview",
                  style: {
                    left: `${tz}%`
                  }
                }, zz)
              })), Gt && (0, Uz.jsxs)(Uz.Fragment, {
                children: [(0, Uz.jsx)("div", {
                  className: "ReplayTimelineMarkRegion Overview",
                  style: {
                    left: `${jt}%`,
                    width: `${At}%`
                  }
                }), (0, Uz.jsx)("div", {
                  className: "ReplayTimelineMarkMarker In Overview",
                  style: {
                    left: `${lt}%`
                  },
                  "aria-hidden": !0
                }), (0, Uz.jsx)("div", {
                  className: "ReplayTimelineMarkMarker Out Overview",
                  style: {
                    left: `${nt}%`
                  },
                  "aria-hidden": !0
                })]
              }), Wt.map((zz => ts(zz, "overview", ss(zz)))), (0, Uz.jsx)("div", {
                className: "ReplayTimelineViewport",
                style: {
                  left: `${et}%`,
                  width: `${Math.max(Zt-et,.5)}%`
                }
              }), (0, Uz.jsx)("button", {
                type: "button",
                className: Xz()("ReplayTimelinePlayhead Overview", {
                  Scrubbing: null !== Az
                }),
                style: {
                  left: `${Ct}%`
                },
                onPointerDown: wt("overview"),
                onPointerMove: Dt,
                onPointerUp: gt,
                onPointerCancel: gt,
                "aria-label": "Scrub playhead"
              })]
            })]
          }), (0, Uz.jsxs)("div", {
            className: "ReplayTimelineDetailSection",
            children: [(0, Uz.jsxs)("div", {
              className: "ReplayTimelineDetailHeader",
              children: [(0, Uz.jsx)("span", {
                className: "ReplayTimelineSectionLabel",
                children: "Timeline"
              }), (0, Uz.jsxs)("span", {
                className: "ReplayTimelineDetailRange",
                children: [UX(Vz, oz), " \u2013 ", UX(Rz, oz), xz > 1 && (0, Uz.jsx)("span", {
                  className: "ReplayTimelineZoomBadge",
                  children: KX(xz)
                })]
              })]
            }), (0, Uz.jsxs)("div", {
              ref: Jz,
              className: "ReplayTimelineDetailTrack",
              onPointerDown: ut,
              onPointerMove: Nt,
              onPointerUp: bt,
              onPointerCancel: bt,
              role: "slider",
              "aria-label": "Recording timeline",
              "aria-valuemin": Vz,
              "aria-valuemax": Rz,
              "aria-valuenow": Sz,
              tabIndex: 0,
              children: [Et.map((zz => {
                const tz = oX(zz, Vz, Rz);
                return (0, Uz.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Detail",
                  style: {
                    left: `${tz}%`
                  }
                }, zz)
              })), ht && (0, Uz.jsx)("div", {
                className: "ReplayTimelineMarkRegion Detail",
                style: {
                  left: `${yt}%`,
                  width: `${dt}%`
                }
              }), it && (0, Uz.jsx)("div", {
                className: "ReplayTimelineMarkMarker In Detail",
                style: {
                  left: `${Qt}%`
                },
                "aria-label": `Play range start at tick ${Tt}`
              }), Lt && (0, Uz.jsx)("div", {
                className: "ReplayTimelineMarkMarker Out Detail",
                style: {
                  left: `${kt}%`
                },
                "aria-label": `Play range end at tick ${ct}`
              }), pt && qt && (0, Uz.jsx)("div", {
                className: "ReplayTimelineSelectionRegion Detail",
                style: {
                  left: `${St}%`,
                  width: `${Rt}%`
                }
              }), zs.map((zz => ts(zz, "detail", ss(zz)))), (0, Uz.jsx)("button", {
                type: "button",
                className: Xz()("ReplayTimelinePlayhead Detail", {
                  Scrubbing: null !== Az
                }),
                style: {
                  left: `${It}%`
                },
                onPointerDown: wt("detail"),
                onPointerMove: Dt,
                onPointerUp: gt,
                onPointerCancel: gt,
                "aria-label": "Scrub playhead"
              })]
            }), (0, Uz.jsxs)("div", {
              className: "ReplayTimelineWheelHint",
              children: [(0, Uz.jsx)("span", {
                className: "Select",
                children: "Drag timeline to select"
              }), " \xb7 Scroll to zoom \xb7 Drag playhead to scrub"]
            })]
          })]
        })
      })),
      yX = (0, Fz.memo)((function(zz) {
        let {
          enabled: tz
        } = zz;
        const sz = (0, Fz.useRef)(!1),
          Wz = (0, Fz.useRef)(null),
          [Oz, oz] = (0, Fz.useState)(!1),
          vz = (0, Fz.useCallback)((zz => {
            tz && 0 === zz.button && (sz.current = !0, oz(!0), Wz.current = {
              x: zz.clientX,
              y: zz.clientY
            }, zz.currentTarget.setPointerCapture(zz.pointerId))
          }), [tz]),
          Kz = (0, Fz.useCallback)((zz => {
            if (!tz || !sz.current || !Wz.current) return;
            const Fz = zz.clientX - Wz.current.x,
              Xz = zz.clientY - Wz.current.y;
            Wz.current = {
              x: zz.clientX,
              y: zz.clientY
            }, Nz.gameBridge.send("dragReplayCamera", {
              dx: Fz,
              dy: Xz
            })
          }), [tz]),
          uz = (0, Fz.useCallback)((zz => {
            sz.current && (sz.current = !1, oz(!1), Wz.current = null, zz.currentTarget.releasePointerCapture(zz.pointerId))
          }), []);
        return tz ? (0, Uz.jsx)("div", {
          className: Xz()("ReplayViewerCameraDragSurface", {
            Dragging: Oz
          }),
          onPointerDown: vz,
          onPointerMove: Kz,
          onPointerUp: uz,
          onPointerCancel: uz,
          "aria-hidden": !0
        }) : null
      }));
    var MX = sz(36405),
      dX = sz(36407);
    const hX = (0, Fz.memo)((function(zz) {
        var tz, sz, Wz;
        let {
          anchorRect: Oz,
          anchorRef: vz,
          onClose: Kz
        } = zz;
        const uz = (0, Fz.useRef)(null),
          Nz = ZX(uz, Oz),
          [bz, wz] = (0, Fz.useState)(dX.b),
          Dz = (0, Fz.useMemo)((() => Object.values(bz).every((zz => zz))), [bz]);
        (0, oz.g)("replayViewer|uiVisibilityChanged", (() => {
          wz((0, dX.b)())
        })), GX(uz, Kz, vz);
        const gz = (0, Fz.useCallback)(((zz, tz) => {
            (0, dX.i)(zz, tz), wz((0, dX.b)())
          }), []),
          Hz = (0, Fz.useCallback)((zz => {
            for (const {
                group: tz
              }
              of MX.h)(0, dX.i)(tz, zz);
            wz((0, dX.b)())
          }), []),
          Bz = eX(Oz);
        return (0, WX.createPortal)((0, Uz.jsxs)("div", {
          ref: uz,
          className: Xz()("ReplayViewerPopover ReplayUiVisibilityPopover", {
            Below: null !== (tz = null === Nz || void 0 === Nz ? void 0 : Nz.placeBelow) && void 0 !== tz && tz,
            Positioned: null !== Nz
          }),
          style: {
            left: `${null!==(sz=null===Nz||void 0===Nz?void 0:Nz.left)&&void 0!==sz?sz:Bz.left}px`,
            top: `${null!==(Wz=null===Nz||void 0===Nz?void 0:Nz.top)&&void 0!==Wz?Wz:Bz.top}px`
          },
          onPointerDown: zz => {
            zz.stopPropagation()
          },
          children: [(0, Uz.jsx)("div", {
            className: "ReplayUiVisibilityPopoverHeader",
            children: (0, Uz.jsx)("span", {
              className: "ReplayUiVisibilityPopoverTitle",
              children: "UI visibility"
            })
          }), (0, Uz.jsxs)("div", {
            className: "ReplayUiVisibilityPopoverChecks",
            children: [(0, Uz.jsxs)("div", {
              className: "ReplayUiVisibilityPopoverCheck",
              children: [(0, Uz.jsx)("input", {
                type: "checkbox",
                checked: Dz,
                onChange: zz => {
                  Hz(zz.target.checked)
                }
              }), (0, Uz.jsx)("span", {
                children: "SELECT ALL"
              })]
            }), MX.h.map((zz => {
              let {
                group: tz,
                label: sz
              } = zz;
              return (0, Uz.jsxs)("label", {
                className: "ReplayUiVisibilityPopoverCheck",
                children: [(0, Uz.jsx)("input", {
                  type: "checkbox",
                  checked: bz[tz],
                  onChange: zz => {
                    gz(tz, zz.target.checked)
                  }
                }), (0, Uz.jsx)("span", {
                  children: sz
                })]
              }, tz)
            }))]
          })]
        }), document.body)
      })),
      QX = (0, Fz.memo)((function(zz) {
        let {
          disabled: tz
        } = zz;
        const sz = (0, Fz.useRef)(null),
          [Wz, Xz] = (0, Fz.useState)(!1),
          [Oz, oz] = (0, Fz.useState)(null),
          vz = (0, Fz.useCallback)((() => {
            sz.current && (oz(sz.current.getBoundingClientRect()), Xz((zz => !zz)))
          }), []),
          Kz = (0, Fz.useCallback)((() => {
            Xz(!1)
          }), []);
        return (0, Uz.jsxs)(Uz.Fragment, {
          children: [(0, Uz.jsx)("div", {
            ref: sz,
            children: (0, Uz.jsx)(Zs.h, {
              className: "ReplayViewerActionButton",
              onClick: vz,
              disabled: tz,
              children: (0, Uz.jsx)("span", {
                children: "Hide UI elements"
              })
            })
          }), Wz && Oz && (0, Uz.jsx)(hX, {
            anchorRect: Oz,
            anchorRef: sz,
            onClose: Kz
          })]
        })
      })),
      kX = ["freeCamUp", "freeCamDown"];

    function iX(zz, tz) {
      Nz.gameBridge.send("holdReplayFreecamVertical", {
        action: zz,
        po: tz
      })
    }
    const LX = (0, Fz.memo)((function() {
        (0, Fz.useEffect)((() => () => {
          ! function() {
            Nz.gameBridge.send("moveReplayFreecam", null);
            for (const zz of kX) iX(zz, !1)
          }()
        }), []);
        const zz = (0, Fz.useCallback)((zz => {
            Nz.gameBridge.send("moveReplayFreecam", zz)
          }), []),
          tz = (0, Fz.useCallback)((zz => ({
            onTouchStart: tz => {
              tz.preventDefault(), tz.stopPropagation(), iX(zz, !0)
            },
            onTouchEnd: tz => {
              tz.preventDefault(), tz.stopPropagation(), iX(zz, !1)
            },
            onTouchCancel: tz => {
              tz.preventDefault(), tz.stopPropagation(), iX(zz, !1)
            }
          })), []);
        return (0, Uz.jsxs)("div", {
          className: "ReplayFreecamTouchControls",
          children: [(0, Uz.jsx)("div", {
            className: "ReplayFreecamJoystickWrap",
            children: (0, Uz.jsx)(Jt, {
              onMove: zz,
              mode: "pinned"
            })
          }), (0, Uz.jsxs)("div", {
            className: "ReplayFreecamVerticalButtons",
            children: [(0, Uz.jsx)("button", {
              type: "button",
              className: "ReplayFreecamVerticalButton",
              "aria-label": "Freecam up",
              ...tz("freeCamUp"),
              children: (0, Uz.jsx)(dz.c, {
                name: "arrow-up",
                className: "ReplayFreecamVerticalIcon"
              })
            }), (0, Uz.jsx)("button", {
              type: "button",
              className: "ReplayFreecamVerticalButton",
              "aria-label": "Freecam down",
              ...tz("freeCamDown"),
              children: (0, Uz.jsx)(dz.c, {
                name: "angle-down",
                className: "ReplayFreecamVerticalIcon"
              })
            })]
          })]
        })
      })),
      lX = [],
      nX = (0, Fz.memo)((function() {
        const zz = (0, Sz.n)();
        return (0, mz.d)("replayViewerRequested", (zz => {
          (0, Sz.k)("toggle" === zz ? !(0, Sz.g)() : "open" === zz)
        })), zz ? (0, Uz.jsx)(aX, {}) : null
      })),
      aX = (0, Fz.memo)((function() {
        var zz, tz, sz, Wz, Oz, oz, vz, Kz, uz, bz, wz, Dz;
        const gz = Fz.useRef(null),
          [Hz, Bz] = (0, Fz.useState)(null),
          [Pz, rz] = (0, Fz.useState)(1),
          [Yz, xz] = (0, Fz.useState)(null),
          [Cz, ez] = (0, Fz.useState)(!1),
          {
            isTouchScreen: Zz
          } = (0, Jz.h)(["isTouchScreen"]),
          Gz = (0, mz.l)("replay"),
          Tz = (0, mz.l)("replayEdits"),
          cz = null !== Gz,
          jz = null !== (zz = null === Gz || void 0 === Gz ? void 0 : Gz.wN) && void 0 !== zz ? zz : 0,
          Az = null !== (tz = null === Gz || void 0 === Gz ? void 0 : Gz.totalTicks) && void 0 !== tz ? tz : 0,
          yz = Math.max(0, Az - 1),
          hz = null !== (sz = null === Gz || void 0 === Gz ? void 0 : Gz.playing) && void 0 !== sz && sz,
          Qz = null !== (Wz = null === Gz || void 0 === Gz ? void 0 : Gz.speed) && void 0 !== Wz ? Wz : 1,
          kz = null !== (Oz = null === Gz || void 0 === Gz ? void 0 : Gz.iJ) && void 0 !== Oz ? Oz : 20,
          iz = null !== Yz && void 0 !== Yz ? Yz : jz,
          Lz = null !== (oz = null === Gz || void 0 === Gz ? void 0 : Gz.freecam) && void 0 !== oz && oz,
          lz = null !== (vz = null === Gz || void 0 === Gz ? void 0 : Gz.cameraMode) && void 0 !== vz ? vz : "recording",
          nz = null !== (Kz = null === Tz || void 0 === Tz ? void 0 : Tz.cameraKeyframes) && void 0 !== Kz ? Kz : lX,
          az = null !== (uz = null === Tz || void 0 === Tz ? void 0 : Tz.playbackMark) && void 0 !== uz ? uz : null,
          qz = null !== (bz = null === Tz || void 0 === Tz ? void 0 : Tz.fileName) && void 0 !== bz ? bz : null,
          Vz = null !== (wz = null === Tz || void 0 === Tz ? void 0 : Tz.unsavedChanges) && void 0 !== wz && wz,
          Rz = null !== (Dz = null === Tz || void 0 === Tz ? void 0 : Tz.suggestSaveAs) && void 0 !== Dz && Dz,
          pz = (0, mz.l)("replayVideoExporting"),
          fz = !pz && cz && ("freecam" === lz || ("recording" === lz || "keyframe" === lz) && !hz),
          Ez = Zz && cz && "freecam" === lz && !pz && !Cz;
        (0, FX.b)(!0, !0, "ReplayViewerOverlay"), (0, Fz.useEffect)((() => {
          Nz.gameBridge.send("syncReplayCameraMode", null)
        }), [Lz]);
        const zt = (0, Fz.useCallback)(((zz, tz) => {
            Nz.gameBridge.send("seekReplay", {
              wN: zz,
              ignorePlaybackMark: null === tz || void 0 === tz ? void 0 : tz.ignorePlaybackMark
            })
          }), []),
          tt = (0, Fz.useCallback)((() => {
            Nz.gameBridge.send("setReplayPlaying", !1)
          }), []),
          st = (0, Fz.useCallback)(((zz, tz) => {
            Nz.gameBridge.send("moveReplayCameraKeyframe", {
              from: zz,
              to: tz
            })
          }), []),
          Ft = (0, Fz.useCallback)((zz => {
            Nz.gameBridge.send("setReplayCameraKeyframe", zz)
          }), []),
          Wt = (0, Fz.useCallback)((zz => {
            Nz.gameBridge.send("deleteReplayCameraKeyframes", {
              start: zz,
              end: zz
            })
          }), []),
          Xt = (0, Fz.useCallback)((zz => {
            Nz.gameBridge.send("deleteReplayCameraKeyframes", {
              start: zz.startTick,
              end: zz.endTick
            })
          }), []),
          Ot = (0, Fz.useCallback)((() => Nz.gameBridge.lookup("replayCamera", null)), []),
          ot = (0, Fz.useCallback)((zz => {
            xz(zz)
          }), []),
          vt = (0, Fz.useCallback)((zz => {
            Nz.gameBridge.send("setReplayPlaybackMark", {
              inTick: zz.startTick,
              outTick: zz.endTick
            })
          }), []),
          Ut = (0, Fz.useCallback)((() => {
            Nz.gameBridge.send("setReplayPlaybackMark", null)
          }), []),
          Kt = (0, Fz.useCallback)((zz => {
            const tz = Nz.gameBridge.latest("replay");
            if (null === tz || zz.endTick <= zz.startTick) return;
            const sz = zz.startTick,
              Fz = zz.endTick;
            EF.NotificationProvider.showPromptPopup({
              title: "Crop recording to the selected range? This cannot be undone.",
              confirmText: "Crop",
              destructive: !0,
              cancelText: "Cancel"
            }).getResult().then((zz => {
              var Wz;
              if (!0 !== zz) return;
              if ((null === (Wz = Nz.gameBridge.latest("replay")) || void 0 === Wz ? void 0 : Wz.id) !== tz.id) return;
              Nz.gameBridge.send("cropReplay", {
                start: sz,
                end: Fz
              }) && (xz(null), rz(1))
            }))
          }), []),
          ut = (0, Fz.useCallback)(((zz, tz) => {
            Bz(null), rz(1), xz(null), (0, SW.c)().open(zz, tz).catch((zz => {
              console.error(zz), Bz(zz instanceof Error ? zz.message : "Failed to parse recording")
            }))
          }), []),
          Nt = (0, Fz.useCallback)(((zz, tz) => {
            null !== Nz.gameBridge.latest("connectedGame").websocketUrl ? EF.NotificationProvider.showPromptPopup({
              title: "Leave current game and play recording?",
              confirmText: "Yes",
              cancelText: "No"
            }).getResult().then((sz => {
              !0 === sz && ut(zz, tz)
            })) : ut(zz, tz)
          }), [ut]),
          bt = (0, Fz.useCallback)((zz => {
            var tz;
            const sz = null === (tz = zz.target.files) || void 0 === tz ? void 0 : tz[0];
            if (zz.target.value = "", !sz) return;
            const Fz = new FileReader;
            Fz.onload = () => {
              Nt(new Uint8Array(Fz.result), {
                fileName: sz.name
              })
            }, Fz.onerror = () => {
              Bz("Failed to read file")
            }, Fz.readAsArrayBuffer(sz)
          }), [Nt]),
          wt = (0, Fz.useCallback)((() => {
            const zz = () => {
              var zz;
              null === (zz = gz.current) || void 0 === zz || zz.click()
            };
            (0, pW.l)() ? (0, pW.h)().then((zz => {
              zz && Nt(zz.bytes, {
                fileHandle: zz.handle
              })
            })).catch((tz => {
              console.error(tz), zz()
            })): zz()
          }), [Nt]),
          Dt = (0, Fz.useCallback)((async function() {
            let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            let tz;
            try {
              tz = await sX(zz, {
                files: (0, SW.c)(),
                pickerSupported: pW.l,
                chooseFile: pW.d,
                write: pW.n,
                download: RW.j,
                onFallback: console.error
              })
            } catch (sz) {
              return void(zz => {
                console.error(zz), EF.NotificationProvider.showAlertPopup({
                  title: "Failed to save recording",
                  subtitle: EW(zz),
                  confirmText: "OK"
                })
              })(sz)
            }
            "written" !== tz && "downloaded" !== tz || (() => {
              const zz = EF.NotificationProvider.showAlertPopup({
                title: "Recording saved",
                disableBackground: !0
              });
              setTimeout((() => {
                zz.tearDownNotification()
              }), 1e3)
            })()
          }), []),
          gt = (0, Fz.useCallback)((zz => {
            Nz.gameBridge.send("replayAction", zz)
          }), []),
          Ht = (0, Fz.useCallback)((zz => {
            rz((tz => uX(tz, zz)))
          }), []),
          Bt = (0, Fz.useCallback)((zz => {
            if (!Nz.gameBridge.latest("replayVideoExporting")) switch (zz) {
              case "replayLoad":
                wt();
                break;
              case "replaySave":
                Dt(!1);
                break;
              case "replaySaveAs":
                Dt(!0);
                break;
              case "replayTimelineZoomIn":
                Ht("in");
                break;
              case "replayTimelineZoomOut":
                Ht("out")
            }
          }), [wt, Dt, Ht]);
        (0, mz.d)("replayUiActionRequested", Bt);
        const Pt = (0, Fz.useCallback)((zz => {
            Nz.gameBridge.send("setReplayCameraMode", zz)
          }), []),
          rt = cz ? Zs.h : Zs.p,
          Yt = Vz && !Rz ? Zs.p : Zs.h,
          xt = Vz && Rz ? Zs.p : Zs.h;
        return (0, Uz.jsxs)("div", {
          className: "ReplayViewerOverlay",
          children: [(0, Uz.jsx)(yX, {
            enabled: fz
          }), Ez && (0, Uz.jsx)(LX, {}), (0, Uz.jsx)("input", {
            ref: gz,
            type: "file",
            accept: RW.e,
            className: "ReplayViewerFileInput",
            onChange: bt
          }), (0, Uz.jsxs)("div", {
            className: Xz()("ReplayViewerBar", {
              Collapsed: Cz
            }),
            children: [(0, Uz.jsx)("button", {
              type: "button",
              className: "ReplayViewerCollapseTab",
              onClick: () => {
                Cz ? ez(!1) : cz ? ez(!0) : (0, Sz.c)()
              },
              "aria-expanded": !Cz,
              "aria-label": Cz ? "Expand replay viewer" : "Collapse replay viewer",
              children: (0, Uz.jsx)(dz.c, {
                name: Cz ? "angle-up" : "angle-down"
              })
            }), !Cz && (0, Uz.jsxs)("div", {
              className: "ReplayViewerBarBody",
              children: [cz && Az > 0 && (0, Uz.jsx)(AX, {
                maxTick: yz,
                displayTick: iz,
                iJ: kz,
                cameraKeyframes: nz,
                playbackMark: az,
                onSeek: zt,
                onPause: tt,
                onScrubTickChange: ot,
                onMoveCameraKeyframe: st,
                onUpdateCameraKeyframe: Ft,
                onDeleteCameraKeyframe: Wt,
                onUseCurrentCamera: Ot,
                onMarkRange: vt,
                onCropRange: Kt,
                onDeleteKeyframesInRange: Xt,
                onClearMark: Ut,
                zoomLevel: Pz,
                onZoomLevelChange: rz
              }, yz), (0, Uz.jsxs)("div", {
                className: "ReplayViewerControls",
                children: [(0, Uz.jsxs)("div", {
                  className: "ReplayViewerControlsLeftSide",
                  children: [(0, Uz.jsxs)("div", {
                    className: "ReplayViewerControlsGroup FileGroup",
                    children: [cz && (0, Uz.jsxs)("div", {
                      className: "ReplayViewerFileName",
                      children: [null !== qz && void 0 !== qz ? qz : "Unsaved recording", Vz ? " *" : ""]
                    }), (0, Uz.jsxs)(rt, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        Bt("replayLoad")
                      },
                      children: [(0, Uz.jsx)(Iz.b, {
                        noaAction: "replayLoad",
                        padHidesKey: !0
                      }), (0, Uz.jsx)("span", {
                        children: " Load "
                      })]
                    }), (0, Uz.jsxs)(Zs.h, {
                      className: "ReplayViewerActionButton",
                      onClick: Sz.c,
                      children: [(0, Uz.jsx)(Iz.b, {
                        noaAction: "replayViewerOpen",
                        padHidesKey: !0
                      }), (0, Uz.jsx)("span", {
                        children: " Hide "
                      })]
                    }), (0, Uz.jsxs)(Yt, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        Bt("replaySave")
                      },
                      disabled: !cz,
                      children: [(0, Uz.jsx)(Iz.b, {
                        noaAction: "replaySave",
                        padHidesKey: !0
                      }), (0, Uz.jsx)("span", {
                        children: " Save "
                      })]
                    }), (0, Uz.jsxs)(Zs.h, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        Nz.gameBridge.send("leaveGame", {
                          reloadPath: "/"
                        })
                      },
                      disabled: !cz,
                      children: [(0, Uz.jsx)(Iz.b, {
                        noaAction: "replayExit",
                        padHidesKey: !0
                      }), (0, Uz.jsx)("span", {
                        children: " Exit "
                      })]
                    }), (0, Uz.jsxs)(xt, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        Bt("replaySaveAs")
                      },
                      disabled: !cz,
                      children: [(0, Uz.jsx)(Iz.b, {
                        noaAction: "replaySaveAs",
                        padHidesKey: !0
                      }), (0, Uz.jsx)("span", {
                        children: " Save As "
                      })]
                    }), (0, Uz.jsxs)(Zs.h, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        Nz.gameBridge.send("exportReplayVideo", null)
                      },
                      disabled: !cz || 0 === Az || pz,
                      children: [(0, Uz.jsx)(Iz.b, {
                        noaAction: "replayExportVideo",
                        padHidesKey: !0
                      }), (0, Uz.jsx)("span", {
                        children: " Export "
                      })]
                    })]
                  }), (0, Uz.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, Uz.jsxs)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: [(0, Uz.jsx)("span", {
                        children: " Camera Mode "
                      }), (0, Uz.jsx)(Iz.b, {
                        noaAction: "replayChangeCameraMode",
                        padHidesKey: !0
                      })]
                    }), (0, Uz.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody CameraModes",
                      children: [(0, Uz.jsx)(Mz.h, {
                        tooltipInner: (0, Uz.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Replicate how the camera was set when recorded."
                        }),
                        children: (0, Uz.jsxs)(Zs.Q, {
                          className: "ReplayViewerModeButton",
                          active: "recording" === lz,
                          onClick: () => {
                            Pt("recording")
                          },
                          disabled: !cz,
                          children: ["Recorded ", (0, Uz.jsx)(dz.c, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, Uz.jsx)(Mz.h, {
                        tooltipInner: (0, Uz.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Move the camera freely around."
                        }),
                        children: (0, Uz.jsxs)(Zs.Q, {
                          className: "ReplayViewerModeButton",
                          active: "freecam" === lz,
                          onClick: () => {
                            Pt("freecam")
                          },
                          disabled: !cz,
                          children: ["Free ", (0, Uz.jsx)(dz.c, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, Uz.jsx)(Mz.h, {
                        tooltipInner: (0, Uz.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Display the replay in real time using keyframes."
                        }),
                        children: (0, Uz.jsxs)(Zs.Q, {
                          className: "ReplayViewerModeButton",
                          active: "keyframe" === lz,
                          onClick: () => {
                            Pt("keyframe")
                          },
                          disabled: !cz,
                          children: ["Preview ", (0, Uz.jsx)(dz.c, {
                            name: "circle-info"
                          })]
                        })
                      })]
                    })]
                  })]
                }), (0, Uz.jsxs)("div", {
                  className: "ReplayViewerControlsGroup TimeGroup",
                  children: [(0, Uz.jsxs)("div", {
                    className: "ReplayViewerTimecodeContainer",
                    children: [(0, Uz.jsxs)("span", {
                      className: "ReplayViewerTimecode",
                      children: [(0, Uz.jsx)("span", {
                        className: "ReplayViewerTimecodeNow",
                        children: UX(iz, kz)
                      }), (0, Uz.jsx)("span", {
                        className: "ReplayViewerTimecodeDivider",
                        children: "/"
                      }), (0, Uz.jsx)("span", {
                        className: "ReplayViewerTimecodeTotal",
                        children: UX(yz, kz)
                      })]
                    }), (0, Uz.jsxs)("span", {
                      className: "ReplayViewerTickLabel",
                      children: ["Tick ", iz, " / ", yz]
                    })]
                  }), (0, Uz.jsxs)("div", {
                    className: "ReplayViewerTimecodeControls",
                    children: [(0, Uz.jsxs)(Zs.h, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        gt("replaySkipBack")
                      },
                      disabled: !cz,
                      children: [(0, Uz.jsxs)("span", {
                        children: [" ", (0, Uz.jsx)(dz.c, {
                          name: "clock-rotate-left"
                        }), " 1s"]
                      }), (0, Uz.jsx)(Iz.b, {
                        noaAction: "replaySkipBack",
                        padHidesKey: !0
                      })]
                    }), (0, Uz.jsxs)(Zs.p, {
                      className: "ReplayViewerMediaButton PlayButton",
                      onClick: () => {
                        Nz.gameBridge.send("setReplayPlaying", !hz)
                      },
                      disabled: !cz,
                      children: [(0, Uz.jsxs)("span", {
                        children: [" ", hz ? (0, Uz.jsx)(dz.c, {
                          name: "pause"
                        }) : (0, Uz.jsx)(dz.c, {
                          name: "play"
                        }), " "]
                      }), (0, Uz.jsx)(Iz.b, {
                        noaAction: "replayPlayPause",
                        padHidesKey: !0
                      })]
                    }), (0, Uz.jsxs)(Zs.h, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        gt("replaySkipForward")
                      },
                      disabled: !cz,
                      children: [(0, Uz.jsxs)("span", {
                        children: [" ", (0, Uz.jsx)(dz.c, {
                          name: "rotate-forward"
                        }), " 1s"]
                      }), (0, Uz.jsx)(Iz.b, {
                        noaAction: "replaySkipForward",
                        padHidesKey: !0
                      })]
                    })]
                  })]
                }), (0, Uz.jsxs)("div", {
                  className: "ReplayViewerControlsRightSide",
                  children: [(0, Uz.jsxs)("div", {
                    className: "ReplayViewerControlsGroup RecordKeyframeGroup",
                    children: [(0, Uz.jsxs)(Zs.p, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        gt("replayRecordKeyframe")
                      },
                      disabled: !cz,
                      children: [(0, Uz.jsx)(Iz.b, {
                        noaAction: "replayRecordKeyframe",
                        padHidesKey: !0
                      }), (0, Uz.jsx)("span", {
                        children: " Record keyframe "
                      })]
                    }), (0, Uz.jsx)(QX, {
                      disabled: !cz
                    }), az && (0, Uz.jsx)(Zs.Q, {
                      className: "ReplayViewerActionButton",
                      onClick: Ut,
                      disabled: !cz,
                      children: (0, Uz.jsx)("span", {
                        children: " Clear range "
                      })
                    })]
                  }), (0, Uz.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, Uz.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Speed"
                    }), (0, Uz.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, Uz.jsx)(Zs.h, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          gt("replaySpeedDown")
                        },
                        disabled: !cz || (0, VW.d)(Qz),
                        children: (0, Uz.jsx)("span", {
                          children: " \u2212 "
                        })
                      }), (0, Uz.jsxs)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: [Qz, "\xd7"]
                      }), (0, Uz.jsx)(Zs.h, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          gt("replaySpeedUp")
                        },
                        disabled: !cz || (0, VW.b)(Qz),
                        children: (0, Uz.jsx)("span", {
                          children: " + "
                        })
                      })]
                    })]
                  }), (0, Uz.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, Uz.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Timeline Zoom"
                    }), (0, Uz.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, Uz.jsxs)(Zs.h, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          Bt("replayTimelineZoomOut")
                        },
                        disabled: !cz || Pz <= XX[0],
                        children: [(0, Uz.jsx)("span", {
                          children: " \u2212 "
                        }), (0, Uz.jsx)(Iz.b, {
                          noaAction: "replayTimelineZoomOut",
                          padHidesKey: !0
                        })]
                      }), (0, Uz.jsx)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: KX(Pz)
                      }), (0, Uz.jsxs)(Zs.h, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          Bt("replayTimelineZoomIn")
                        },
                        disabled: !cz || Pz >= XX[XX.length - 1],
                        children: [(0, Uz.jsx)("span", {
                          children: " + "
                        }), (0, Uz.jsx)(Iz.b, {
                          noaAction: "replayTimelineZoomIn",
                          padHidesKey: !0
                        })]
                      })]
                    })]
                  })]
                })]
              }), (0, Uz.jsx)("div", {
                className: "ReplayViewerEmptyState",
                children: !cz && "Load a recording to begin playback"
              }), Hz && (0, Uz.jsx)("div", {
                className: "ReplayViewerError",
                children: Hz
              })]
            })]
          })]
        })
      }));
    var qX = sz(1293);

    function SX() {
      const [, zz] = (0, Fz.useState)(0);
      return (0, oz.g)("replayViewer|uiVisibilityChanged", (() => {
          zz((zz => zz + 1))
        })), (0, oz.g)("replayViewer|replayLoaded", (() => {
          zz((zz => zz + 1))
        })),
        function() {
          if (!(0, qX.e)()) return {};
          const zz = {
              [MX.e]: "true"
            },
            tz = (0, dX.b)();
          for (const {
              group: sz,
              dataAttr: Fz
            }
            of MX.h) Fz && !tz[sz] && (zz[Fz] = "true");
          return zz
        }()
    }
    var VX = sz(8834),
      RX = sz(1994),
      pX = sz(8257),
      fX = sz(8253),
      EX = sz(2005);
    const zO = (0, Fz.memo)((function() {
      var zz, tz, sz;
      const Wz = (0, Pz.e)("customButtons");
      (0, Fz.useEffect)((() => Wz ? (Nz.gameBridge.send("bindCustomButtonKeys", Wz.filter(pX.e).map((zz => {
        let {
          id: tz,
          keycode: sz
        } = zz;
        return {
          id: tz,
          keycode: sz
        }
      }))), () => {
        Nz.gameBridge.send("bindCustomButtonKeys", [])
      }) : () => {}), [Wz]);
      const Xz = null !== (zz = null === Wz || void 0 === Wz ? void 0 : Wz.filter(pX.e)) && void 0 !== zz ? zz : [],
        Oz = (0, fX.i)(),
        oz = null !== (tz = null === (sz = (0, EX.e)()) || void 0 === sz ? void 0 : sz.hideButtonHints) && void 0 !== tz && tz,
        vz = "customButton" !== (null === Oz || void 0 === Oz ? void 0 : Oz.kind) || oz ? null : Oz.id,
        Kz = Xz.length > 0,
        uz = (0, Fz.useRef)(null);
      return (0, Fz.useLayoutEffect)((() => {
        if (!Kz) return () => {};
        const zz = uz.current,
          tz = zz.closest(".InGameUi"),
          sz = () => {
            tz.style.setProperty("--custom-buttons-top", `${zz.offsetTop}px`)
          };
        sz();
        const Fz = new ResizeObserver(sz);
        return Fz.observe(zz), Fz.observe(zz.parentElement), () => {
          Fz.disconnect(), tz.style.removeProperty("--custom-buttons-top")
        }
      }), [Kz]), (0, Uz.jsx)("div", {
        ref: uz,
        className: "" + ((0, gW.isMobile)() ? "CustomIconsMobile" : "CustomIcons"),
        children: Xz.map((zz => {
          var tz, sz;
          return (0, Uz.jsx)(tO, {
            button: zz,
            padGlyph: zz.id === vz && null !== (tz = null === (sz = (0, iz.c)()) || void 0 === sz ? void 0 : sz.getBoundButton("actionButton")) && void 0 !== tz ? tz : null
          }, zz.id)
        }))
      })
    }));

    function tO(zz) {
      let {
        button: tz,
        padGlyph: sz
      } = zz;
      const Wz = (0, Fz.useRef)(null),
        Xz = () => {
          null !== Wz.current && (Wz.current = null, Nz.gameBridge.send("pressCustomButton", {
            id: tz.id,
            down: !1
          }))
        };
      (0, Fz.useEffect)((() => Xz), []);
      const Oz = nt(Xz, {
          pressesOnPointerDown: !0
        }),
        oz = zz => {
          Wz.current === zz.pointerId && Xz()
        };
      return (0, Uz.jsxs)("div", {
        className: "CustomIcon",
        ...Oz,
        onLostPointerCapture: oz,
        children: [(0, Uz.jsx)(RX.c, {
          icon: tz.icon,
          keyboardHint: (0, pX.b)(tz.keycode),
          padGlyph: sz,
          onPointerDown: zz => {
            try {
              zz.currentTarget.setPointerCapture(zz.pointerId)
            } catch {
              return
            }
            null === Wz.current && Nz.gameBridge.send("pressCustomButton", {
              id: tz.id,
              down: !0
            }), Wz.current = zz.pointerId
          },
          onPointerUp: oz,
          onPointerCancel: oz,
          showTouchTutorialPubSubId: !1,
          showRedDotPubSubId: !1
        }), tz.description && (0, Uz.jsx)("div", {
          className: "CustomIconDescription SmallTextBold",
          children: tz.description
        })]
      })
    }
    var sO = sz(2287),
      FO = sz(263);
    const WO = {
      frame: zz => {
        const tz = requestAnimationFrame((() => {
          zz()
        }));
        return () => {
          cancelAnimationFrame(tz)
        }
      },
      afterFrame: zz => {
        const tz = setTimeout(zz, 0);
        return () => {
          clearTimeout(tz)
        }
      }
    };
    class XO {
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : FO.c,
          tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WO;
        this.idle = zz, this.frames = tz, this.waiting = [], this.cancelIdle = null, this.cancelFrame = null, this.cancelAfterFrame = null, this.starvedFrames = 0, this.shown = !1
      }
      request(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.shown ? (zz(), () => {}) : (tz ? this.waiting.unshift(zz) : this.waiting.push(zz), this.schedule(), () => {
          const tz = this.waiting.indexOf(zz);
          tz >= 0 && (this.waiting.splice(tz, 1), this.settle())
        })
      }
      show() {
        for (this.shown = !0; this.waiting.length > 0;) this.mountNext()
      }
      schedule() {
        0 !== this.waiting.length && (this.cancelIdle ??= this.idle((zz => {
          for (this.cancelIdle = null; this.waiting.length > 0 && zz.timeRemaining() >= 8;) this.mountNext();
          this.schedule()
        })), this.cancelFrame ??= this.frames.frame((() => {
          this.cancelFrame = null, this.starvedFrames++, this.starvedFrames >= 4 && (this.cancelAfterFrame ??= this.frames.afterFrame((() => {
            this.cancelAfterFrame = null, this.mountNext(), this.schedule()
          }))), this.schedule()
        })))
      }
      mountNext() {
        this.starvedFrames = 0;
        const zz = this.waiting.shift();
        try {
          zz()
        } finally {
          this.settle()
        }
      }
      settle() {
        0 === this.waiting.length && this.stop()
      }
      stop() {
        var zz, tz, sz;
        null === (zz = this.cancelIdle) || void 0 === zz || zz.call(this), this.cancelIdle = null, null === (tz = this.cancelFrame) || void 0 === tz || tz.call(this), this.cancelFrame = null, null === (sz = this.cancelAfterFrame) || void 0 === sz || sz.call(this), this.cancelAfterFrame = null
      }
    }
    const OO = (0, Fz.createContext)(null);

    function oO(zz) {
      let {
        children: tz,
        first: sz = !1
      } = zz;
      const Wz = (0, Fz.useContext)(OO),
        [Xz, Oz] = (0, Fz.useState)(null === Wz);
      return (0, Fz.useEffect)((() => {
        if (!Xz && null !== Wz) return Wz.request((() => {
          Oz(!0)
        }), sz)
      }), [sz, Xz, Wz]), Xz ? (0, Fz.createElement)(Fz.Fragment, null, tz) : null
    }
    const vO = (0, Fz.memo)((function(zz) {
        let {
          shown: tz
        } = zz;
        const [sz] = (0, Fz.useState)((() => new wz.h(tz))), [Wz] = (0, Fz.useState)((() => tz ? null : new XO));
        return (0, Fz.useLayoutEffect)((() => {
          tz && (null === Wz || void 0 === Wz || Wz.show(), sz.show())
        }), [tz, sz, Wz]), (0, Uz.jsx)(wz.e.Provider, {
          value: sz,
          children: (0, Uz.jsx)(OO.Provider, {
            value: Wz,
            children: (0, Uz.jsx)(UO, {})
          })
        })
      })),
      UO = (0, Fz.memo)((function() {
        const {
          isUiHidden: zz,
          isUiHiddenByCamera: tz,
          worldPanelHud: sz,
          isTouchScreen: Wz
        } = (0, Jz.h)(["isUiHidden", "isUiHiddenByCamera", "worldPanelHud", "isTouchScreen"]), Oz = (0, pF.c)(), oz = SX(), vz = (0, wz.n)(), Kz = (0, Fz.useRef)(null), uz = (0, Pz.e)("showKillfeed");
        return function() {
            const zz = (0, wz.n)();
            (0, Fz.useEffect)((() => zz.whenShown(Dz)), [zz])
          }(),
          function() {
            const zz = (0, Pz.e)("inventoryColourOverride");
            (0, Fz.useEffect)((() => {
              if (!zz) return;
              const {
                panel: tz,
                slot: sz,
                slotSelected: Fz,
                slotUnavailable: Wz
              } = lz(zz), Xz = document.documentElement.style;
              return Xz.setProperty("--InventoryPanelColour", tz), Xz.setProperty("--InventorySlotColour", sz), Xz.setProperty("--InventorySlotSelectedColour", Fz), Xz.setProperty("--InventorySlotUnavailableColour", Wz), () => {
                Xz.removeProperty("--InventoryPanelColour"), Xz.removeProperty("--InventorySlotColour"), Xz.removeProperty("--InventorySlotSelectedColour"), Xz.removeProperty("--InventorySlotUnavailableColour")
              }
            }), [zz])
          }(), (0, Fz.useLayoutEffect)((() => vz.whenShown((() => {
            var zz;
            null === (zz = Kz.current) || void 0 === zz || zz.classList.remove("PreMounted")
          }))), [vz]), (0, Uz.jsxs)(Uz.Fragment, {
            children: [(0, Uz.jsxs)("div", {
              ref: Kz,
              className: Xz()("InGameUi", {
                PreMounted: !vz.shown,
                Hidden: zz,
                HiddenByCamera: tz,
                HiddenByWorldPanel: null !== sz,
                WorldPanelTouchControl: "touchControls" === sz
              }),
              ...oz,
              children: [(0, Uz.jsxs)(oO, {
                children: [(0, Uz.jsx)(as.e, {}), (0, Uz.jsx)(ps, {})]
              }), (0, Uz.jsx)(wz.j, {
                children: (0, Uz.jsx)(fs, {})
              }), (0, Uz.jsxs)(oO, {
                children: [(0, Uz.jsx)(JW, {}), (0, Uz.jsx)(cW, {}), Wz && (0, Uz.jsx)(AW, {})]
              }), (0, Uz.jsxs)(oO, {
                children: [(0, Uz.jsx)(Bs, {}), (0, Uz.jsx)(uF.d, {}), (0, Uz.jsx)(BF, {})]
              }), (0, Uz.jsx)(wz.j, {
                children: (0, Uz.jsx)(ns, {})
              }), (0, Uz.jsxs)(oO, {
                children: [(0, Uz.jsx)(ZW.d, {}), (0, Uz.jsx)(nX, {})]
              }), (0, Uz.jsxs)(oO, {
                children: [(0, Uz.jsx)(MW.e, {}), (0, Uz.jsx)(dW.e, {})]
              }), (0, Uz.jsx)(oO, {
                children: (0, Uz.jsx)(rs.h, {})
              }), (0, Uz.jsx)(oO, {
                children: (0, Uz.jsx)(gO, {
                  showChat: Oz
                })
              }), (0, Uz.jsxs)(oO, {
                children: [(0, Uz.jsx)(QW, {}), (0, Uz.jsx)(eW, {})]
              }), (0, Uz.jsxs)("div", {
                className: Xz()("RightElements", {
                  RightElementsTouchscreen: Wz
                }),
                "data-camera-keeper-host": "",
                children: [(0, Uz.jsxs)("div", {
                  className: IF.j,
                  "data-holds-camera-keeper": "",
                  children: [(0, Uz.jsxs)("div", {
                    className: "TopRightElementsLeft",
                    "data-holds-camera-keeper": "",
                    children: [(0, Uz.jsx)(oO, {
                      children: (0, Uz.jsx)(NW.d, {})
                    }), (0, Uz.jsxs)(oO, {
                      children: [(0, Uz.jsx)(hz, {}), (0, Uz.jsx)(TF.c, {})]
                    }), gW.featureFlags.useSocialFeatures && (0, Uz.jsx)(wz.j, {
                      children: (0, Uz.jsx)(cF.c, {
                        placement: "inGame"
                      })
                    }), gW.featureFlags.useSocialFeatures && (0, Uz.jsx)(wz.j, {
                      children: (0, Uz.jsx)(aF, {})
                    }), uz && (0, Uz.jsx)(wz.j, {
                      children: (0, Uz.jsx)(KF, {})
                    }), (0, Uz.jsx)(oO, {
                      children: (0, Uz.jsx)(VX.e, {})
                    })]
                  }), gW.featureFlags.useSocialFeatures && (0, Uz.jsx)("div", {
                    className: "TopRightElementsRight",
                    children: (0, Uz.jsx)(oO, {
                      children: (0, Uz.jsx)(xW.e, {})
                    })
                  })]
                }), (0, Uz.jsxs)(oO, {
                  children: [(0, Uz.jsx)(rs.c, {
                    placement: "topRight"
                  }), (0, Uz.jsx)(HO, {})]
                })]
              }), (0, Uz.jsx)("div", {
                className: "LeftCentre",
                children: (0, Uz.jsx)(oO, {
                  children: (0, Uz.jsx)(zO, {})
                })
              }), (0, Uz.jsxs)("div", {
                className: "BottomCentre",
                "data-holds-camera-keeper": Wz ? "" : void 0,
                children: [(0, Uz.jsx)(wz.j, {
                  children: (0, Uz.jsx)(Tz, {})
                }), (0, Uz.jsx)(oO, {
                  children: (0, Uz.jsx)(uO, {})
                }), (0, Uz.jsxs)("div", {
                  className: "BottomElements",
                  "data-holds-camera-keeper": Wz ? "" : void 0,
                  children: [(0, Uz.jsx)("div", {
                    className: Xz()("BottomLeftElements", {
                      Touch: Wz
                    }),
                    children: (0, Uz.jsxs)(oO, {
                      children: [(0, Uz.jsx)(VF, {}), !Wz && (0, Uz.jsx)(sO.d, {})]
                    })
                  }), (0, Uz.jsx)(oO, {
                    children: (0, Uz.jsx)(DO, {})
                  }), (0, Uz.jsx)(oO, {
                    children: (0, Uz.jsx)(rF, {
                      isTouchScreen: Wz
                    })
                  })]
                })]
              }), (0, Uz.jsx)("div", {
                className: "MiddleLeft"
              }), Wz && (0, Uz.jsx)(oO, {
                children: (0, Uz.jsx)(zs, {})
              }), (0, Uz.jsx)("div", {
                className: "CameraFadeHost",
                ref: Pt.k
              })]
            }), (0, Uz.jsx)(wz.j, {
              children: (0, Uz.jsx)(qW.e, {})
            }), (0, Uz.jsx)(oO, {
              first: !0,
              children: (0, Uz.jsx)(RF.b, {})
            }), (0, Uz.jsx)(wz.j, {
              children: (0, Uz.jsx)(KO, {})
            })]
          })
      }));

    function KO() {
      return (0, Fz.useEffect)((() => {
        const zz = setTimeout((() => {
          (0, rz.l)()
        }), 0);
        return () => {
          clearTimeout(zz), rz.o.gH(!1)
        }
      }), []), null
    }
    const uO = (0, Fz.memo)((function() {
        const zz = (0, oz.h)("aimingOverlay", "none");
        (0, Hz.c)();
        const tz = (0, Pz.f)("middleTextUpper"),
          sz = (0, Pz.f)("middleTextLower");
        return (0, Uz.jsxs)("div", {
          className: "MiddleTextBottom",
          style: "sniper" === zz ? {
            visibility: "hidden"
          } : {},
          children: [(0, Uz.jsx)(wO, {
            text: tz,
            className: "MiddleText MiddleTextUpper SmallTextBold",
            maxHeightFraction: NO
          }), (0, Uz.jsx)(wO, {
            text: sz,
            className: "MiddleText",
            maxHeightFraction: bO
          })]
        })
      })),
      NO = .3,
      bO = .2;

    function wO(zz) {
      let {
        text: tz,
        className: sz,
        maxHeightFraction: Wz
      } = zz;
      const Xz = (0, Fz.useRef)(null),
        Oz = (0, Fz.useRef)(null);
      return function(zz, tz, sz, Wz) {
        (0, Fz.useLayoutEffect)((() => {
          const Fz = zz.current,
            Wz = tz.current;
          if (!Fz || !Wz) return;
          let Xz = -1,
            Oz = -1;
          const oz = zz => (Wz.style.setProperty("zoom", String(zz)), Fz.getBoundingClientRect().height),
            vz = () => {
              const zz = document.documentElement.clientHeight * sz;
              let tz = 1;
              if (oz(1) > zz) {
                let sz = .5,
                  Fz = 1;
                for (let tz = 0; tz < 6; tz++) {
                  const tz = (sz + Fz) / 2;
                  oz(tz) <= zz ? sz = tz : Fz = tz
                }
                tz = sz
              }
              Oz = oz(tz), Xz = Fz.getBoundingClientRect().width
            };
          vz();
          let Uz = 0;
          const Kz = () => {
              cancelAnimationFrame(Uz), Uz = requestAnimationFrame(vz)
            },
            uz = new ResizeObserver((() => {
              const {
                width: zz,
                height: tz
              } = Fz.getBoundingClientRect();
              zz === Xz && tz === Oz || Kz()
            }));
          return uz.observe(Fz), window.addEventListener("resize", Kz), () => {
            uz.disconnect(), window.removeEventListener("resize", Kz), cancelAnimationFrame(Uz), Wz.style.removeProperty("zoom")
          }
        }), [zz, tz, sz, Wz])
      }(Xz, Oz, Wz, tz.content), (0, Uz.jsx)("div", {
        ref: Xz,
        className: "MiddleTextFit",
        children: (0, Uz.jsx)(hW, {
          ref: Oz,
          text: tz,
          className: sz
        })
      })
    }
    const DO = (0, Fz.memo)((function() {
        const zz = (0, oz.h)("aimingOverlay", "none");
        (0, Hz.c)();
        const tz = (0, Pz.e)("useInventory");
        return (0, Uz.jsxs)("div", {
          className: "BottomMiddleElements",
          style: "sniper" === zz ? {
            visibility: "hidden"
          } : {},
          children: [(0, Uz.jsx)(Kz, {}), (0, Uz.jsx)(rs.c, {}), (0, Uz.jsx)(Ys, {}), (0, Uz.jsx)(wz.j, {
            children: (0, Uz.jsx)(rW, {})
          }), (0, Uz.jsxs)("div", {
            className: "HotBarRow",
            children: [tz ? (0, Uz.jsx)(kz.e, {}) : (0, Uz.jsx)(kz.g, {}), (0, Uz.jsx)(Lz, {})]
          })]
        })
      })),
      gO = (0, Fz.memo)((function(zz) {
        let {
          showChat: tz
        } = zz;
        const {
          t: sz
        } = (0, Gz.B)(), {
          clientEscMenuOptions: Wz,
          isTouchScreen: Oz
        } = (0, Jz.h)(["clientEscMenuOptions", "isTouchScreen"]);
        (0, Hz.c)();
        const {
          userContext: oz,
          isUserContextUpdating: vz
        } = (0, gz.b)(), Kz = (0, Pz.e)("hideCoordinates"), Nz = (0, Pz.e)("customVariationTitle"), {
          requestedGameNameWithVariation: bz,
          gameNameWithVariation: wz,
          lobbyName: Dz,
          shownLobbyName: rz
        } = (0, mz.l)("connectedGame"), Yz = (0, uz.c)(bz, Dz, !1), [xz, Iz] = (0, Fz.useState)(null), Cz = (0, wW.p)(wz || bz || ""), ez = Nz || Cz || "";
        (0, Fz.useEffect)((() => {
          vz || AF.d.getFavouriteLobbies(oz).then((zz => {
            console.log("Got favourite lobbies", zz), Iz(zz)
          }))
        }), [vz, oz]);
        const Zz = (0, Fz.useRef)(null);
        return (0, Fz.useLayoutEffect)((() => {
          const zz = Zz.current,
            tz = document.documentElement,
            sz = new ResizeObserver((() => {
              tz.style.setProperty("--InGameHeaderRowsHeight", `${zz.offsetHeight}px`)
            }));
          return sz.observe(zz), () => {
            sz.disconnect(), tz.style.removeProperty("--InGameHeaderRowsHeight")
          }
        }), []), GF(Zz), (0, Uz.jsxs)(Uz.Fragment, {
          children: [(0, Uz.jsxs)("div", {
            className: Xz()(IF.g, {
              Touchscreen: Oz
            }),
            ref: Zz,
            children: [(0, Uz.jsxs)("div", {
              className: "InGameHeader",
              children: [(0, Uz.jsxs)("div", {
                className: "InGameHeaderLogo",
                onMouseDown: zz => {
                  zz.stopPropagation(), zz.preventDefault()
                },
                onClick: () => {
                  Jz.b.set({
                    openEverythingMenuName: Bz.r.SETTINGS
                  })
                },
                children: [(0, Uz.jsx)(bW.d, {
                  showFace: !0,
                  loading: !1
                }), "bloxd.io"]
              }), (0, Uz.jsx)("div", {
                className: "InGameHeaderSpacer"
              }), (0, Uz.jsxs)("div", {
                className: "InGameHeaderGameName",
                children: [null === Yz && (0, Uz.jsx)(bW.d, {}), null !== Yz && (0, Uz.jsxs)(Uz.Fragment, {
                  children: [Yz, ez && ` ${ez}`]
                })]
              }), (0, Uz.jsx)("div", {
                className: "InGameHeaderSpacer"
              }), (0, Uz.jsx)("div", {
                className: "InGameHeaderLobbyName",
                children: rz
              }), (0, DW.G)(Dz) && (0, Uz.jsx)(Mz.h, {
                tooltipInner: (0, Uz.jsx)("div", {
                  children: sz(null !== xz && xz.includes(Dz) ? "customLobby:removeFromFavourites" : "customLobby:addToFavourites")
                }),
                children: (0, Uz.jsx)("div", {
                  children: (0, Uz.jsx)(Zs.v, {
                    isLiked: null !== xz && xz.includes(Dz),
                    onClick: () => {
                      try {
                        if (!xz) return;
                        xz.includes(Dz) ? (AF.d.unfavouriteLobby(oz, Dz).catch((zz => {
                          console.error("Failed to favourite lobby", zz)
                        })), Iz(xz.filter((zz => zz !== Dz)))) : (AF.d.favouriteLobby(oz, Dz).catch((zz => {
                          console.error("Failed to favourite lobby", zz)
                        })), Iz([...xz, Dz]))
                      } catch (zz) {
                        console.error("Failed to like lobby", zz)
                      }
                    },
                    isLoading: null === xz
                  })
                })
              }), (0, Uz.jsx)(lW, {})]
            }), (0, Uz.jsx)(oW, {
              show: Wz.showFPS
            }), !Kz && Wz.showCoordinates && (0, Uz.jsx)(KW, {}), !Kz && Wz.showChunkCoordinates && (0, Uz.jsx)(uW, {}), (0, Uz.jsx)(kW, {})]
          }), (0, Uz.jsx)("div", {
            className: "TopLeftElements",
            "data-holds-camera-keeper": "",
            children: (0, Uz.jsx)("div", {
              className: "InGameHeaderAndChat",
              "data-holds-camera-keeper": "",
              children: tz && (0, Uz.jsx)(qz.e, {})
            })
          })]
        })
      })),
      HO = (0, Fz.memo)((function() {
        (0, Hz.c)();
        const zz = (0, Pz.f)("RightInfoText"),
          [tz, sz] = (0, Fz.useState)(null);
        return (0, wt.f)(tz, ".RightElements"), zz.hasText ? (0, Uz.jsx)("div", {
          className: "RightInfoDivContainer",
          children: (0, Uz.jsx)(hW, {
            ref: sz,
            text: zz,
            className: "RightInfoDiv",
            children: (0, Uz.jsx)("div", {
              className: "RightInfoDivInner",
              children: (0, Uz.jsx)(vz.c, {
                text: zz.content
              })
            })
          })
        }) : null
      }))
  },
  4467: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => oz
    });
    var Fz = sz(65),
      Wz = sz(308),
      Xz = sz(1845),
      Oz = sz(1087);

    function oz(zz) {
      let {
        text: tz
      } = zz;
      const sz = [];
      let oz = "";
      return (0, Wz.bc)(tz).forEach(((zz, tz) => {
        if ("string" === typeof zz || !(0, Xz.f)(zz.icon)) return void(oz += "string" === typeof zz ? zz : zz.icon);
        const Wz = Math.max(0, oz.trimEnd().search(/\S{1,12}$/));
        sz.push((0, Oz.jsxs)(Fz.Fragment, {
          children: [oz.slice(0, Wz), (0, Oz.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [oz.slice(Wz), (0, Oz.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": zz.icon,
              children: (0, Oz.jsx)(Xz.c, {
                itemName: zz.icon,
                amount: 0
              })
            })]
          })]
        }, tz)), oz = ""
      })), sz.push(oz), (0, Oz.jsx)(Oz.Fragment, {
        children: sz
      })
    }
  },
  36025: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Nz,
      g: () => Kz,
      j: () => uz
    });
    var Fz = sz(65),
      Wz = sz(1020),
      Xz = sz.n(Wz),
      Oz = sz(1845),
      oz = sz(1087);
    const vz = 350;
    let Uz = 0;

    function Kz() {
      return Uz += 1, Uz
    }

    function uz(zz, tz) {
      let sz = 0;
      for (const Fz of zz) "ingredient" !== Fz.kind && Fz.Nu === tz && (sz += Fz.amount);
      return sz > 0 ? {
        idx: tz,
        amount: sz
      } : null
    }

    function Nz(zz) {
      var tz, sz;
      let {
        anim: Wz,
        onComplete: Uz
      } = zz;
      const Kz = null !== (tz = Wz.delayMs) && void 0 !== tz ? tz : 0,
        uz = null !== (sz = Wz.durationMs) && void 0 !== sz ? sz : vz,
        [Nz, bz] = (0, Fz.useState)(Wz.from),
        [wz, Dz] = (0, Fz.useState)(0 === Kz),
        [gz, Hz] = (0, Fz.useState)(!1),
        Bz = (0, Fz.useRef)(!1);
      return (0, Fz.useEffect)((() => {
        let zz, tz;
        const sz = () => {
            Bz.current = !0, Dz(!0), zz = requestAnimationFrame((() => {
              tz = requestAnimationFrame((() => {
                bz({
                  x: Wz.to.x,
                  y: Wz.to.y
                }), Hz(!0)
              }))
            }))
          },
          Fz = Bz.current ? 0 : Kz;
        let Xz;
        Fz > 0 ? Xz = setTimeout(sz, Fz) : sz();
        const Oz = setTimeout((() => {
          Uz(Wz.id)
        }), Fz + uz + 50);
        return () => {
          clearTimeout(Xz), cancelAnimationFrame(zz), cancelAnimationFrame(tz), clearTimeout(Oz)
        }
      }), [Wz.id, Wz.to.x, Wz.to.y, Uz, Kz, uz]), (0, oz.jsx)("div", {
        className: Xz()("CraftItemFlyAnimation", {
          Ingredient: "ingredient" === Wz.kind,
          Waiting: !wz,
          Arrived: gz
        }),
        style: {
          left: Nz.x,
          top: Nz.y,
          "--fly-duration": `${uz}ms`
        },
        children: (0, oz.jsx)(Oz.c, {
          itemName: Wz.itemName,
          amount: Wz.amount
        })
      })
    }
  },
  36002: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => yz,
      g: () => hz
    });
    var Fz = sz(65),
      Wz = sz(2735),
      Xz = sz(6151),
      Oz = sz(1994),
      oz = sz(2290),
      vz = sz(8332),
      Uz = sz(321),
      Kz = sz(34),
      uz = sz(1416),
      Nz = sz(44),
      bz = sz(1020),
      wz = sz.n(bz),
      Dz = sz(308),
      gz = sz(36010),
      Hz = sz(1831),
      Bz = sz(1901),
      Pz = sz(8214),
      rz = sz(1087);

    function Yz(zz) {
      var tz, sz;
      let {
        slotIdx: Xz
      } = zz;
      const Oz = (0, Bz.h)("hotbar", (zz => {
          var tz;
          return null !== (tz = zz.items[Xz]) && void 0 !== tz ? tz : null
        })),
        vz = (0, Bz.h)("hotbar", (zz => zz.ammo)),
        [Kz, uz] = (0, Fz.useState)(!1),
        Nz = (0, Fz.useRef)(null),
        [bz, Dz] = (0, Fz.useState)(null),
        [gz, Yz] = (0, Fz.useState)(null),
        xz = (0, oz.e)("maxAuraLevel"),
        mz = (0, Wz.b)(),
        Jz = (0, Fz.useCallback)((() => {
          if (clearTimeout(Nz.current), Oz) {
            var zz, tz, sz, Fz;
            const vz = Oz.displayName,
              Kz = [],
              uz = Array.isArray(vz) ? vz : [vz],
              Nz = {
                fontStyle: null !== (zz = Oz.attributes.customAttributes) && void 0 !== zz && zz.author ? "italic" : "normal"
              };
            for (const zz of uz) zz.str ? Kz.push(zz) : Kz.push({
              str: zz,
              style: Nz
            });
            if (null !== (tz = Oz.attributes.customAttributes) && void 0 !== tz && tz.enchantments) {
              Kz.push(" ");
              const zz = Object.entries(Oz.attributes.customAttributes.enchantments).sort(((zz, tz) => tz[1] - zz[1])),
                tz = Oz.attributes.customAttributes.enchantmentData;
              for (const [sz, Fz] of zz) {
                var Wz, Xz;
                const zz = null !== (Wz = null === tz || void 0 === tz || null === (Xz = tz[sz]) || void 0 === Xz ? void 0 : Xz.icon) && void 0 !== Wz ? Wz : `${sz} Enchantment`;
                var oz;
                if (Fz < 4)
                  for (let tz = 0; tz < Fz; tz++) Kz.push({
                    icon: zz,
                    style: {
                      fontSize: "1.5em"
                    }
                  });
                else Kz.push({
                  icon: zz,
                  style: {
                    fontSize: "1.5em"
                  }
                }), Kz.push(null !== (oz = (0, Uz.S)(Fz)) && void 0 !== oz ? oz : Fz.toString())
              }
            }
            Dz(Kz), Yz(null !== (sz = null === (Fz = Oz.attributes.customAttributes) || void 0 === Fz ? void 0 : Fz.enchantmentTier) && void 0 !== sz ? sz : null)
          } else Dz(null), Yz(null);
          uz(!0), mz();
          const vz = null === Oz || void 0 === Oz ? void 0 : Oz.attributes.customAttributes;
          void 0 === (null === vz || void 0 === vz ? void 0 : vz.shotsLeft) && (Nz.current = setTimeout((() => {
            uz(!1)
          }), 2e3))
        }), [null === Oz || void 0 === Oz ? void 0 : Oz.name, Xz, null === Oz || void 0 === Oz ? void 0 : Oz.instance, null === Oz || void 0 === Oz ? void 0 : Oz.displayName]);
      (0, Fz.useEffect)((() => (Jz(), () => {
        clearTimeout(Nz.current), uz(!1)
      })), [null === Oz || void 0 === Oz ? void 0 : Oz.name, Xz, null === Oz || void 0 === Oz ? void 0 : Oz.instance, Jz]);
      const Iz = null === Oz || void 0 === Oz || null === (tz = Oz.attributes.customAttributes) || void 0 === tz ? void 0 : tz.shotsLeft,
        Cz = void 0 === Iz ? null : (0, rz.jsx)("div", {
          className: "SelectedItemShotsLeft",
          children: `${Iz}|${Oz.requiresAmmo?`${vz}x${Oz.clipSize}`:Oz.clipSize}`
        }),
        ez = (0, Pz.i)();
      return (0, rz.jsx)(rz.Fragment, {
        children: Kz && Oz && !ez.showing ? (0, rz.jsxs)("div", {
          className: wz()("SelectedItemName SmallTextBold", {
            NoAuraBar: 0 === xz,
            Enchanted: null !== gz
          }),
          style: {
            "--enchantmentColour": null !== (sz = Uz.lb[gz]) && void 0 !== sz ? sz : Uz.lb.None,
            "--duration": gz ? (0, Uz.fb)(gz) + "s" : void 0
          },
          children: [gz && (0, rz.jsxs)("div", {
            className: "SelectedItemNameGradient",
            children: [(0, rz.jsx)(Hz.c, {
              text: bz
            }), Cz]
          }), (0, rz.jsxs)("div", {
            className: "SelectedItemNameNormal",
            children: [(0, rz.jsx)(Hz.c, {
              text: bz
            }), Cz]
          })]
        }) : null
      })
    }
    var xz = sz(36025),
      mz = sz(30),
      Jz = sz(1857),
      Iz = sz(580),
      Cz = sz(2294),
      ez = sz(3060),
      Zz = sz(3068);
    var Gz = sz(2020),
      Tz = sz(1106),
      cz = sz(2321);

    function jz() {
      return parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--touch-hotbar-ends-spare")) >= 0
    }
    var Az = sz(1435);
    const yz = (0, Fz.memo)((function() {
      const [zz, tz] = (0, Fz.useState)(0), sz = (0, oz.e)("useFullInventory"), Oz = (0, oz.e)("highlightedHotbarSlots"), {
        isTouchScreen: vz,
        openInGameMenuName: Uz
      } = (0, mz.h)(["isTouchScreen", "openInGameMenuName"]), Nz = null !== Uz && "inventory" !== Uz, bz = (0, Bz.l)("fullInventory") && "inventory" === Uz, Dz = function() {
        const zz = (0, Gz.c)(((zz, tz) => `${zz}:${(0,Tz.d)(zz,tz)?"portrait":"landscape"}`)),
          [tz, sz] = (0, Fz.useState)(jz);
        return (0, Fz.useLayoutEffect)((() => {
          sz(jz())
        }), [zz]), (0, uz.g)(cz.f, (() => {
          sz(jz())
        })), tz
      }(), Hz = vz && !Dz;
      ! function(zz, tz, sz) {
        (0, Fz.useLayoutEffect)((() => {
          const Fz = document.documentElement.classList;
          return zz && (Fz.add("TouchHotbar"), Fz.toggle("TouchHotbarKeysAbove", tz), Fz.toggle("TouchHotbarHasBag", sz)), (0, ez.g)(), Kz.o.Yg(Zz.b), () => {
            Fz.remove("TouchHotbar", "TouchHotbarKeysAbove", "TouchHotbarHasBag"), (0, ez.g)(), Kz.o.Yg(Zz.b)
          }
        }), [zz, tz, sz])
      }(vz, Hz, sz);
      const [Pz, Cz] = (0, Xz.c)("changedHotbarUsingNumkeys", !0), Az = (0, Bz.h)("hotbar", (zz => zz.selectedSlot)), yz = null !== Az && void 0 !== Az ? Az : zz, Qz = (0, Wz.b)(), kz = (0, Fz.useRef)(null), Lz = (0, uz.h)("pointerLockUpdate", Boolean(document.pointerLockElement));
      (0, uz.g)("inventoryDraggedItemUpdated", (zz => {
        kz.current = zz, Qz()
      })), (0, Bz.d)("hotbarScrolled", (zz => {
        null === Az && nz(zz)
      })), (0, Bz.d)("hotbarSlotRequested", (zz => {
        lz(zz), Cz(!1)
      })), (0, Bz.d)("numberKeyPressed", (() => {
        Cz(!1)
      })), (0, Bz.d)("hotbarDropRequested", (zz => {
        const tz = Jz.gameBridge.latest("hotbar").items[yz];
        if (tz) {
          var sz;
          const Fz = zz && null !== (sz = tz.amount) && void 0 !== sz ? sz : 1;
          Jz.gameBridge.send("removeInventoryItem", {
            slot: yz,
            amount: Fz,
            drop: !0
          })
        }
      }));
      const lz = zz => {
          Jz.gameBridge.send("selectHotbarSlot", zz), tz(zz)
        },
        nz = zz => {
          lz((yz + zz + Iz.l) % Iz.l)
        };
      let az, qz = null,
        Sz = null,
        Vz = zz => zz => {},
        Rz = zz => tz => {
          lz(zz)
        },
        pz = zz => zz => {},
        fz = [];
      if (bz) {
        var Ez;
        const zz = kz.current;
        if (null === zz || void 0 === zz || !zz.setHovered) return (0, rz.jsx)("div", {
          className: wz()("HotBarContainer", {
            Touch: vz,
            KeysAbove: Hz
          }),
          children: (0, rz.jsx)("div", {
            className: "HotBar"
          })
        });
        qz = zz.draggedInfo, Sz = zz.specialItemInfo, Vz = zz.setHovered, Rz = zz.pointerDown, pz = zz.pointerUp, az = zz.variation, fz = null !== (Ez = zz.craftFlyAnims) && void 0 !== Ez ? Ez : []
      }
      return (0, rz.jsxs)("div", {
        className: wz()("HotBarContainer", {
          Touch: vz,
          PopupOpen: vz && Nz,
          KeysAbove: Hz
        }),
        children: [(0, rz.jsxs)("div", {
          className: wz()("HotBar", {
            HoverDisabled: Lz
          }),
          children: [vz && (0, rz.jsxs)(rz.Fragment, {
            children: [(0, rz.jsx)(dz, {
              useFullInventory: sz,
              inventoryOpen: bz
            }), (0, rz.jsx)(Mz, {
              direction: "Previous",
              onPress: () => {
                nz(-1)
              }
            })]
          }), !vz && (0, rz.jsxs)(rz.Fragment, {
            children: [(0, rz.jsx)(hz, {}), (0, rz.jsx)("div", {
              className: "HotBarFiller"
            })]
          }), (0, rz.jsx)("div", {
            className: "HotBarGameItemsContainer",
            children: new Array(10).fill(0).map(((zz, tz) => (0, rz.jsx)(gz.d, {
              idx: tz,
              draggedInfo: qz,
              specialItemInfo: Sz,
              craftFlyHoldbackInfo: (0, xz.j)(fz, tz),
              setHovered: Vz(tz),
              pointerDown: Rz(tz),
              pointerUp: pz(tz),
              variation: az,
              isSelected: tz === yz,
              hotbarHighlighted: !0 === (null === Oz || void 0 === Oz ? void 0 : Oz.includes(tz)),
              hoverDisabled: Lz,
              showNumber: Pz && !vz
            }, tz)))
          }), vz && (0, rz.jsx)(Mz, {
            direction: "Next",
            onPress: () => {
              nz(1)
            }
          }), !vz && (0, rz.jsxs)(rz.Fragment, {
            children: [(0, rz.jsx)("div", {
              className: "HotBarFiller"
            }), (0, rz.jsx)("div", {
              className: wz()("HotBarItem ButtonHotBarItem", {
                HiddenButtonHotBarItem: !sz
              }),
              onPointerDown: () => {
                Kz.o.Yg("toggleMenu", "inventory")
              },
              children: (0, rz.jsx)(iz, {})
            })]
          })]
        }), (0, rz.jsx)(Yz, {
          slotIdx: yz
        })]
      })
    }));

    function Mz(zz) {
      let {
        direction: tz,
        onPress: sz
      } = zz;
      return (0, rz.jsx)("div", {
        className: wz()("HotBarArrow", tz),
        ...Az.g,
        children: (0, rz.jsx)(Oz.c, {
          icon: "Previous" === tz ? "caret-left" : "caret-right",
          touchPressOn: "pointerdown",
          onClick: sz
        })
      })
    }
    const dz = (0, Fz.memo)((function(zz) {
        let {
          useFullInventory: tz,
          inventoryOpen: sz
        } = zz;
        const Wz = (0, oz.e)("maxAuraLevel"),
          Xz = (0, Fz.useRef)(null);
        return function(zz, tz, sz) {
          (0, Fz.useLayoutEffect)((() => (document.documentElement.classList.toggle("TouchHotbarHasShop", tz), () => {
            document.documentElement.classList.remove("TouchHotbarHasShop")
          })), [tz]), (0, Fz.useLayoutEffect)((() => {
            const tz = zz.current.closest(".BottomMiddleElements");
            return tz.classList.toggle("TouchInventoryOpen", sz), () => {
              tz.classList.remove("TouchInventoryOpen")
            }
          }), [zz, sz])
        }(Xz, (0, vz.c)(), sz), (0, rz.jsxs)("div", {
          ref: Xz,
          className: wz()("TouchInventoryKeys", {
            NoAuraBar: 0 === Wz,
            InventoryOpen: sz
          }),
          children: [(0, rz.jsx)(hz, {
            touchKey: !0
          }), (0, rz.jsx)("div", {
            className: wz()("TouchInventoryKey BagKey", {
              Hidden: !tz
            }),
            ...Az.g,
            children: (0, rz.jsx)(iz, {
              touchKey: !0
            })
          })]
        })
      })),
      hz = (0, Fz.memo)((function(zz) {
        let {
          touchKey: tz = !1
        } = zz;
        const sz = (0, vz.c)();
        return (0, rz.jsx)("div", {
          className: tz ? wz()("TouchInventoryKey ShopKey", {
            Hidden: !sz
          }) : wz()("HotBarItem ButtonHotBarItem", {
            HiddenButtonHotBarItem: !sz
          }),
          ...tz ? Az.g : {},
          children: (0, rz.jsx)(Oz.c, {
            icon: (0, Uz.bc)(),
            noaAction: "OpenShop",
            touchPressOn: "pointerdown",
            onClick: () => {
              sz && mz.b.set({
                openEverythingMenuName: Dz.r.SHOP
              })
            },
            showTouchTutorialPubSubId: "showShopTouchTutorial",
            showRedDotPubSubId: "showShopIconRedDot",
            touchIconPosition: "topleft"
          })
        })
      }));

    function Qz(zz) {
      let {
        player: tz
      } = zz;
      return tz.some((zz => null !== zz && Uz.Pc.includes(zz.name)))
    }

    function kz(zz) {
      zz.creative || Nz.f.getItem("LogInInventoryRedDotTutorialComplete") || (Qz(zz) ? (Kz.o.Yg("RedDotOpenInventoryIcon", !0), Kz.o.Yg("TouchTutorialOpenInventoryIcon", !0)) : (Kz.o.Yg("RedDotOpenInventoryIcon", !1), Kz.o.Yg("TouchTutorialOpenInventoryIcon", !1)))
    }
    const iz = (0, Fz.memo)((function(zz) {
      let {
        touchKey: tz = !1
      } = zz;
      const {
        backpackPointerRequested: sz
      } = (0, mz.h)(["backpackPointerRequested"]);
      (0, Fz.useEffect)((() => {
        kz(Jz.gameBridge.latest("inventory"))
      }), []), (0, Bz.d)("inventory", kz);
      const Wz = (0, Cz.n)();
      return (0, uz.g)("toggleMenu", (zz => {
        Wz.shown && (null !== zz && void 0 !== zz && zz.startsWith("inventory") && Qz(Jz.gameBridge.latest("inventory")) ? (Nz.f.setItem("LogInInventoryRedDotTutorialComplete", !0), Kz.o.Yg("RedDotOpenInventoryIcon", !1), Kz.o.Yg("TouchTutorialOpenInventoryIcon", !1)) : "shop" === zz && Kz.o.Yg("showShopTouchTutorial", !1))
      })), tz ? (0, rz.jsx)(Oz.c, {
        icon: "backpack",
        noaAction: "OpenInventory",
        touchPressOn: "pointerdown",
        onClick: () => {
          Kz.o.Yg("toggleMenu", "inventory")
        },
        showRedDotPubSubId: "RedDotOpenInventoryIcon",
        showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
        touchTutorialRequested: sz,
        touchIconPosition: "topleft"
      }) : (0, rz.jsx)("div", {
        className: "HotBarButton",
        onPointerDown: () => {
          Kz.o.Yg("toggleMenu", "inventory")
        },
        children: (0, rz.jsx)(Oz.c, {
          icon: "backpack",
          noaAction: "OpenInventory",
          onPointerDown: zz => {
            Kz.o.Yg("toggleMenu", "inventory"), zz.stopPropagation()
          },
          showRedDotPubSubId: "RedDotOpenInventoryIcon",
          showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
          touchTutorialRequested: sz,
          touchIconPosition: "topleft"
        })
      })
    }))
  },
  36010: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => gz,
      g: () => wz
    });
    var Fz = sz(65),
      Wz = sz(1020),
      Xz = sz.n(Wz),
      Oz = sz(1848),
      oz = sz(1845),
      vz = sz(1857),
      Uz = sz(1901),
      Kz = sz(36018),
      uz = sz(8863),
      Nz = sz(1358),
      bz = sz(1087);
    const wz = (zz, tz, sz) => {
      let Fz = tz,
        Wz = !1;
      for (const Xz of sz)(null === Xz || void 0 === Xz ? void 0 : Xz.idx) === zz && (Wz = !0, Fz > 0 && (Fz -= Xz.amount));
      return {
        displayedAmt: Fz,
        shown: !Wz || Fz > 0
      }
    };
    const Dz = zz => {
        let {
          idx: tz
        } = zz;
        return (0, Nz.j)() ? null : (0, bz.jsx)("div", {
          className: "HotbarItemNumber SmallTextBold",
          children: tz < 9 ? tz + 1 : 0
        })
      },
      gz = (0, Fz.memo)((function(zz) {
        var tz, sz, Fz;
        let {
          idx: Wz,
          setHovered: Nz,
          pointerDown: gz,
          pointerUp: Hz,
          draggedInfo: Bz,
          specialItemInfo: Pz,
          craftFlyHoldbackInfo: rz,
          defaultIconB64: Yz = null,
          variation: xz,
          isSelected: mz = !1,
          hotbarHighlighted: Jz = !1,
          hoverDisabled: Iz = !1,
          showNumber: Cz = !1,
          showNewDot: ez = !1
        } = zz;
        const Zz = (0, Uz.h)("inventory", (zz => Wz === Kz.f ? null : (0, uz.g)(zz, Wz)));
        let Gz, Tz, cz, jz;
        if (Wz === Kz.f) Pz && (Gz = Pz.name, cz = Pz.amount, jz = Pz.attributes);
        else if (Zz) {
          var Az;
          Gz = Zz.name, Tz = Zz.icon, cz = null !== (Az = Zz.amount) && void 0 !== Az ? Az : 0, jz = Zz.attributes
        }
        const yz = null === (tz = jz) || void 0 === tz || null === (sz = tz.customAttributes) || void 0 === sz ? void 0 : sz.enchantmentTier,
          Mz = (0, Oz.h)(jz),
          {
            displayedAmt: dz,
            shown: hz
          } = wz(Wz, cz, [Bz, Pz, rz]),
          Qz = Gz && hz,
          kz = void 0 !== xz && function(zz, tz) {
            const {
              enchantable: sz,
              salvageable: Fz
            } = vz.gameBridge.latest("stationItems");
            return "Enchanting Table" === zz ? !0 === sz[tz] : "Salvaging Table" === zz && !0 === Fz[tz]
          }(xz, Gz);
        return (0, bz.jsxs)("div", {
          className: Xz()("InvenItem", {
            Highlighted: Qz && kz,
            Selected: mz,
            HotbarHighlighted: Jz,
            HoverDisabled: Iz
          }),
          onPointerEnter: () => {
            null === Nz || void 0 === Nz || Nz(!0)
          },
          onPointerLeave: () => {
            null === Nz || void 0 === Nz || Nz(!1)
          },
          onPointerDown: gz,
          onPointerUp: Hz,
          "data-inven-idx": Wz,
          children: [Qz && (0, bz.jsx)(oz.c, {
            itemName: null !== (Fz = Tz) && void 0 !== Fz ? Fz : Gz,
            amount: dz,
            enchantmentTier: yz,
            bar: Mz
          }), Qz && ez && (0, bz.jsx)("div", {
            className: "InvenItemNewDot"
          }), Cz && (0, bz.jsx)(Dz, {
            idx: Wz
          }), Yz && !Qz && (0, bz.jsx)("div", {
            className: "InvenItemUnfilled",
            style: {
              backgroundImage: `url(${Yz})`
            }
          })]
        })
      }))
  },
  8848: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Xz
    });
    var Fz = sz(321),
      Wz = sz(8856);

    function Xz(zz, tz, sz) {
      const Xz = Object.entries(tz).sort(((zz, tz) => tz[1] - zz[1])),
        Oz = (0, Fz.sb)(zz);
      Oz.push(zz ? "\n\n" : "\n");
      for (const [Wz, wz] of Xz) {
        var oz, vz, Uz;
        const zz = null !== (oz = null === sz || void 0 === sz || null === (vz = sz[Wz]) || void 0 === vz ? void 0 : vz.icon) && void 0 !== oz ? oz : `${Wz} Enchantment`;
        Oz.push({
          icon: zz,
          style: {
            fontSize: "1.5rem"
          }
        }), Oz.push({
          str: `${Wz} ${null!==(Uz=(0,Fz.S)(wz))&&void 0!==Uz?Uz:wz}\n`
        })
      }
      Oz.push({
        str: "\n"
      });
      for (const [Fz, wz] of Xz) {
        var Kz, uz, Nz, bz;
        const zz = null !== (Kz = null === sz || void 0 === sz || null === (uz = sz[Fz]) || void 0 === uz ? void 0 : uz.icon) && void 0 !== Kz ? Kz : `${Fz} Enchantment`,
          tz = null !== (Nz = null === sz || void 0 === sz || null === (bz = sz[Fz]) || void 0 === bz ? void 0 : bz.description) && void 0 !== Nz ? Nz : (0, Wz.o)(Fz);
        Oz.push({
          icon: zz,
          style: {
            fontSize: "1.25rem",
            opacity: .75
          }
        }), Oz.push({
          str: tz,
          style: {
            fontSize: "0.8em",
            fontWeight: "normal",
            opacity: .75
          }
        }), Oz.push({
          str: "\n"
        })
      }
      return Oz
    }
  },
  36018: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Fz,
      f: () => Wz
    });
    const Fz = -1,
      Wz = -2
  },
  8863: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Uz,
      e: () => Bz,
      f: () => gz,
      g: () => vz,
      h: () => Hz,
      i: () => Kz,
      j: () => Nz,
      k: () => Dz,
      o: () => uz
    });
    var Fz = sz(308),
      Wz = sz(580),
      Xz = sz(321),
      Oz = sz(3919),
      oz = sz(8848);

    function vz(zz, tz) {
      var sz;
      let {
        player: Fz,
        chestOrCreative: Wz
      } = zz;
      var Xz;
      return tz < Fz.length ? null !== (Xz = Fz[tz]) && void 0 !== Xz ? Xz : null : null !== (sz = Wz[tz - Fz.length]) && void 0 !== sz ? sz : null
    }

    function Uz(zz) {
      var tz;
      return null !== (tz = zz.amount) && void 0 !== tz ? tz : 0
    }

    function Kz(zz) {
      return 0 === zz.button || void 0 === zz.button
    }

    function uz(zz) {
      return !!zz.shiftKey
    }

    function Nz(zz) {
      return "touches" in zz || "touch" === zz.pointerType || "pen" === zz.pointerType
    }
    const bz = new Set,
      wz = 50;

    function Dz(zz, tz) {
      var sz;
      const Fz = null === (sz = zz[tz]) || void 0 === sz ? void 0 : sz.displayName;
      return (0, Wz.G)(Fz) ? "string" !== typeof tz ? "" : (!bz.has(tz) && bz.size < wz && (bz.add(tz), console.warn(`No item called "${tz}", so its hover shows the name as given`)), tz) : Fz
    }

    function gz(zz, tz, sz) {
      var vz, Uz, Kz, uz, Nz, bz, wz, gz, Hz, Bz, Pz, rz, Yz, xz;
      const mz = zz.attributes,
        Jz = null !== (vz = null === (Uz = tz[zz.name]) || void 0 === Uz ? void 0 : Uz.rootName) && void 0 !== vz ? vz : zz.name,
        Iz = null !== (Kz = null !== (uz = mz.customDisplayName) && void 0 !== uz ? uz : null === (Nz = tz[zz.name]) || void 0 === Nz ? void 0 : Nz.displayName) && void 0 !== Kz ? Kz : Dz(tz, Jz);
      let Cz = Iz;
      const ez = null === (bz = mz.customAttributes) || void 0 === bz ? void 0 : bz.enchantmentTier;
      ez && (Cz = (0, Xz.sb)(Iz, {
        colour: Xz.lb[ez]
      }));
      const Zz = null !== (wz = null !== (gz = null !== (Hz = function(zz, tz) {
        var sz;
        if (void 0 === zz || null !== (sz = tz.customAttributes) && void 0 !== sz && sz.author) return zz;
        const Wz = (0, Fz.bc)(zz);
        return Wz.every((zz => "string" === typeof zz)) ? zz : Wz.map((zz => "string" === typeof zz ? zz : {
          icon: zz.icon,
          style: {
            fontSize: "1.5em"
          }
        }))
      }(mz.customDescription, mz)) && void 0 !== Hz ? Hz : null === (Bz = tz[zz.name]) || void 0 === Bz ? void 0 : Bz.description) && void 0 !== gz ? gz : null === (Pz = tz[Jz]) || void 0 === Pz ? void 0 : Pz.description) && void 0 !== wz ? wz : "";
      let Gz = Zz;
      if (null !== (rz = mz.customAttributes) && void 0 !== rz && rz.enchantments) Gz = (0, oz.c)(Zz, mz.customAttributes.enchantments, mz.customAttributes.enchantmentData);
      else if (sz[Jz]) Gz = (0, Xz.sb)(Zz), Gz.push({
        str: "\n"
      }), Gz.push({
        str: "Enchantable",
        style: {
          fontSize: "0.8em",
          fontWeight: "normal",
          opacity: .4
        }
      });
      else if (null !== (Yz = mz.customAttributes) && void 0 !== Yz && Yz.mobSettings) {
        var Tz, cz;
        const zz = mz.customAttributes.mobSettings;
        var jz, Az;
        if (Gz = [], (0, Wz.G)(mz.customAttributes.health) || (Gz.push({
            str: "\n"
          }), Gz.push({
            icon: "Health",
            style: {
              fontSize: "1.5em"
            }
          }), Gz.push({
            str: " "
          }), Gz.push({
            str: mz.customAttributes.health.toString()
          }), (0, Wz.G)(zz.maxHealth) || (Gz.push({
            str: "/"
          }), Gz.push({
            str: zz.maxHealth.toString()
          }))), !(0, Wz.G)(zz.attackDamage) && zz.attackDamage > 0 && (Gz.push({
            str: "\n"
          }), Gz.push({
            icon: "Iron Sword",
            style: {
              fontSize: "1.5em"
            }
          }), Gz.push({
            str: " "
          }), Gz.push({
            str: zz.attackDamage.toString()
          })), !(0, Wz.G)(zz.secondaryAttackDamage) && zz.secondaryAttackDamage > 0 && (Gz.push({
            str: "\n"
          }), Gz.push({
            icon: "Stone Crossbow",
            style: {
              fontSize: "1.5em"
            }
          }), Gz.push({
            str: " "
          }), Gz.push({
            str: zz.secondaryAttackDamage.toString()
          })), (0, Wz.G)(zz.baseRunningSpeed) || (Gz.push({
            str: "\n"
          }), Gz.push({
            icon: "Speed",
            style: {
              fontSize: "1.5em"
            }
          }), Gz.push({
            str: " "
          }), Gz.push({
            str: zz.baseRunningSpeed.toFixed(2)
          })), "Saddled" === zz.metaInfo) Gz.push({
          str: "\n"
        }), Gz.push({
          str: {
            translationKey: "general:has"
          }
        }), Gz.push({
          str: " "
        }), Gz.push({
          icon: null !== (jz = null === (Az = zz.tameInfo) || void 0 === Az ? void 0 : Az.saddleItemName) && void 0 !== jz ? jz : "Saddle",
          style: {
            fontSize: "1.5em"
          }
        });
        if (Gz.push({
            str: "\n"
          }), Gz.push({
            str: "\n"
          }), zz.petInfo && null !== (Tz = zz.tameInfo) && void 0 !== Tz && Tz.supportsFriendship) {
          const tz = Oz.e.getIconsFromFriendshipPoints(zz.petInfo.friendshipPoints);
          for (const zz of tz) Gz.push({
            icon: zz,
            style: {
              fontSize: "1.5em"
            }
          });
          Gz.push({
            str: "\n"
          });
          const sz = Oz.e.getMobHungerLevel(zz.petInfo.lastFedAt);
          for (const zz of Oz.e.hungerLevelIcons[sz]) Gz.push({
            icon: zz,
            style: {
              fontSize: "1.5em"
            }
          });
          Gz.push({
            str: " "
          }), Gz.push({
            str: Oz.e.hungerLevelTranslations[sz],
            style: {
              fontWeight: "bolder"
            }
          })
        }
        if (zz.tameInfo && null !== (cz = zz.tameInfo) && void 0 !== cz && cz.supportsFriendship) {
          var yz, Mz;
          let tz = null !== (yz = zz.tameInfo.likedFoods) && void 0 !== yz ? yz : [];
          Gz.push({
            str: "\n"
          }), Gz.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Oz.e.feedTextColours[Oz.e.MobFoodType.Superliked]
            }
          }), Gz.push({
            str: " "
          }), null !== (Mz = zz.petInfo) && void 0 !== Mz && Mz.superlikedFoodKnown ? (Gz.push({
            icon: zz.petInfo.superlikedFood,
            style: {
              fontSize: "1.5em"
            }
          }), tz = tz.filter((tz => tz !== zz.petInfo.superlikedFood))) : Gz.push({
            icon: "Question Mark",
            style: {
              fontSize: "1.5em"
            }
          }), Gz.push({
            str: "\n"
          }), Gz.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Oz.e.feedTextColours[Oz.e.MobFoodType.Liked]
            }
          }), Gz.push({
            str: " "
          });
          for (const zz of tz) Gz.push({
            icon: zz,
            style: {
              fontSize: "1.5em"
            }
          });
          Gz.push({
            str: "\n"
          }), Gz.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Oz.e.feedTextColours[Oz.e.MobFoodType.Neutral]
            }
          }), Gz.push({
            str: " "
          });
          for (const sz of null !== (dz = zz.tameInfo.neutralFoods) && void 0 !== dz ? dz : []) {
            var dz;
            Gz.push({
              icon: sz,
              style: {
                fontSize: "1.5em"
              }
            })
          }
          Gz.push({
            str: "\n"
          }), Gz.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Oz.e.feedTextColours[Oz.e.MobFoodType.Disliked]
            }
          }), Gz.push({
            str: " "
          });
          for (const sz of null !== (hz = zz.tameInfo.dislikedFoods) && void 0 !== hz ? hz : []) {
            var hz;
            Gz.push({
              icon: sz,
              style: {
                fontSize: "1.5em"
              }
            })
          }
        }
        Gz.length > 0 ? (Gz.shift(), Gz.unshift(...(0, Xz.sb)(Zz))) : Gz = (0, Xz.sb)(Zz)
      }
      return {
        name: Cz,
        desc: Gz,
        fontStyle: null !== (xz = mz.customAttributes) && void 0 !== xz && xz.author ? "italic" : "normal"
      }
    }

    function Hz(zz, tz, sz, Fz) {
      const Wz = vz(zz, sz),
        Xz = vz(zz, Fz);
      if (!Wz) return !1;
      const Oz = tz[Wz.name].armourReduction,
        oz = tz[Xz.name].armourReduction;
      if (oz === Oz) {
        var Uz, Kz, uz, Nz;
        const zz = null !== (Uz = null === (Kz = Wz.attributes.customAttributes) || void 0 === Kz ? void 0 : Kz.enchantmentTier) && void 0 !== Uz ? Uz : "Tier 0",
          tz = null !== (uz = null === (Nz = Xz.attributes.customAttributes) || void 0 === Nz ? void 0 : Nz.enchantmentTier) && void 0 !== uz ? uz : "Tier 0";
        return parseInt(zz.replace("Tier ", "")) >= parseInt(tz.replace("Tier ", ""))
      }
      return Oz > oz
    }

    function Bz(zz) {
      let tz;
      if ("number" === typeof zz) {
        const sz = document.querySelector(`[data-inven-idx="${zz}"]`);
        if (!sz) return null;
        tz = sz.getBoundingClientRect()
      } else tz = zz.getBoundingClientRect();
      return {
        x: tz.left + tz.width / 2,
        y: tz.top + tz.height / 2
      }
    }
  },
  8739: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => bz,
      h: () => wz,
      k: () => Dz
    });
    var Fz = sz(1419),
      Wz = sz(65),
      Xz = sz(1287),
      Oz = sz(4175),
      oz = sz(2250),
      vz = sz(1173),
      Uz = sz(106),
      Kz = sz(1901),
      uz = sz(1306),
      Nz = sz(1087);

    function bz(zz) {
      let {
        show: tz,
        onClose: sz
      } = zz;
      const {
        requestedGameNameWithVariation: Fz,
        lobbyName: Wz,
        shownLobbyName: Xz
      } = (0, Kz.l)("connectedGame"), vz = (0, oz.c)(Fz, Wz, !1);
      return Uz.featureFlags.canUseInviteLinks && (0, Nz.jsx)(Oz.b, {
        show: tz,
        close: sz,
        padShowsHud: !0,
        togglePointerLock: !1,
        globallyUniqueKey: "InviteLinkBox",
        doGameplayStartStopOnShow: !0,
        children: (0, Nz.jsxs)("div", {
          className: "InviteLinkBox AnimFadeInScaleUp",
          children: [(0, Nz.jsx)("div", {
            className: "InviteLinkBoxHeader SmallTextBold",
            children: "Invite Friends"
          }), (0, Nz.jsxs)("div", {
            className: "InviteLinkBoxDescription SmallTextLight",
            children: [(0, Nz.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: '"Join Lobby Name" Button Info'
            }), "Game: ", null === vz ? (0, Nz.jsx)(uz.d, {}) : vz, (0, Nz.jsx)("br", {}), "Lobby Name: ", Xz, (0, Nz.jsx)("br", {}), (0, Nz.jsx)("br", {}), (0, Nz.jsx)("br", {}), (0, Nz.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: "Link"
            })]
          }), (0, Nz.jsx)(wz, {})]
        })
      })
    }

    function wz() {
      var zz;
      const {
        t: tz
      } = (0, vz.B)(), sz = null !== (zz = Dz(Uz.featureFlags.canUseInviteLinks)) && void 0 !== zz ? zz : "Loading Link...", [Xz, Oz] = (0, Wz.useState)(0), [oz, Kz] = (0, Wz.useReducer)((zz => zz + 1), 0);
      return (0, Wz.useEffect)((() => {
        const zz = setTimeout((() => {
          Kz()
        }), 1100);
        return () => {
          clearTimeout(zz)
        }
      }), [Xz]), Uz.featureFlags.canUseInviteLinks && (0, Nz.jsxs)("div", {
        className: "InviteLinkInnerWrapper",
        children: [(0, Nz.jsx)("div", {
          className: "InviteLinkInner",
          children: sz
        }), (0, Nz.jsx)(Fz.h, {
          className: "InviteLinkCopyButton",
          onClick: () => {
            navigator.clipboard.writeText(sz).catch((zz => {
              console.error("Failed to copy invite link:", zz)
            })), Oz(Date.now())
          },
          disabled: Date.now() - Xz < 1e3,
          children: Date.now() - Xz < 1e3 ? tz("general:copied") : tz("general:copy")
        })]
      })
    }

    function Dz(zz) {
      const [tz, sz] = (0, Wz.useState)(null);
      return (0, Wz.useEffect)((() => {
        if (!zz) return;
        let tz = !0;
        return (0, Xz.E)().then((zz => {
          tz && sz(zz)
        })).catch((zz => {
          console.error("Failed to get invite link:", zz)
        })), () => {
          tz = !1
        }
      }), [zz]), tz
    }
  },
  36414: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Jz
    });
    var Fz = sz(65),
      Wz = sz(2290),
      Xz = sz(1831),
      Oz = sz(571),
      oz = sz(34),
      vz = sz(1020),
      Uz = sz.n(vz),
      Kz = sz(36044),
      uz = sz(2397),
      Nz = sz(36049),
      bz = sz(2427),
      wz = sz(2405),
      Dz = sz(3275),
      gz = sz(30),
      Hz = sz(1960),
      Bz = sz(2257),
      Pz = sz(1213),
      rz = sz(4542),
      Yz = sz(1901),
      xz = sz(106),
      mz = sz(1087);
    const Jz = (0, Fz.memo)((function() {
      const zz = (0, Wz.e)("lobbyLeaderboardInfo"),
        tz = (0, Yz.l)("players"),
        sz = (0, Yz.l)("lobbyLeaderboardRows"),
        oz = (0, Yz.l)("hiddenPlayerNames"),
        vz = (0, Fz.useRef)(null),
        [Uz, Kz] = (0, Fz.useReducer)((zz => zz + 1), 0);
      return (0, Fz.useEffect)((() => (0, Hz.d)((() => {
        Kz()
      }))), []), (0, mz.jsx)("div", {
        className: "LobbyLeaderboardContainer Menu",
        children: (0, mz.jsx)("div", {
          className: "MenuBody",
          children: function() {
            if (!zz) return (0, mz.jsx)(mz.Fragment, {});
            const Fz = JSON.parse(JSON.stringify(zz)),
              Wz = [...tz.ids],
              Uz = {},
              Kz = {};
            for (const zz of Wz) {
              var uz, bz;
              Uz[zz] = null === (uz = sz[zz]) || void 0 === uz ? void 0 : uz.colour;
              const tz = null === (bz = sz[zz]) || void 0 === bz ? void 0 : bz.values;
              tz && (Kz[zz] = {
                ...tz
              })
            }
            const wz = Object.keys(Fz);
            wz.sort(((zz, tz) => Fz[zz].sortPriority - Fz[tz].sortPriority)), Wz.sort(((zz, tz) => {
              if (!Kz[zz] || !Kz[tz]) return 0;
              for (const sz of wz) {
                const Wz = Kz[zz][sz],
                  Xz = Kz[tz][sz];
                let Oz = 0;
                if ("string" == typeof Wz && "string" == typeof Xz ? Oz = Wz.localeCompare(Xz) : "number" == typeof Wz && "number" == typeof Xz ? Oz = Wz - Xz : "number" == typeof Wz && "string" == typeof Xz ? Oz = 1 : "string" == typeof Wz && "number" == typeof Xz && (Oz = -1), Oz) return Oz * ("ascending" === Fz[sz].sortOrder ? 1 : -1)
              }
              return 0
            }));
            for (const zz of Wz) {
              var Dz, gz, Yz;
              const {
                name: Fz,
                ranks: Wz,
                cosmetics: Xz
              } = tz.byId[zz], oz = [], vz = null !== (Dz = null === (gz = sz[zz]) || void 0 === gz || null === (Yz = gz.tags) || void 0 === Yz ? void 0 : Yz.flatMap((zz => 0 === zz.length ? zz : [...zz, String.fromCharCode(8198)]))) && void 0 !== Dz ? Dz : [];
              oz.push(...vz), oz.push(...(0, Pz.w)(Wz, Fz, (null === Xz || void 0 === Xz ? void 0 : Xz.nameColour) === Oz.e || null === Xz || void 0 === Xz ? void 0 : Xz.nameColour)), Kz[zz] ??= {}, Kz[zz].name = oz
            }

            function xz(zz, sz) {
              if (Kz[zz] && void 0 !== Kz[zz][sz]) {
                if ("name" === sz) {
                  const {
                    name: Fz,
                    cosmetics: Wz
                  } = tz.byId[zz];
                  return (0, mz.jsxs)("div", {
                    className: "PlayerPfpAndName",
                    children: [Wz && (0, mz.jsx)(Bz.e, {
                      cosmetics: Wz
                    }), " ", (0, mz.jsx)(Xz.c, {
                      text: Kz[zz][sz],
                      friendBadgeFor: (0, Hz.f)(Fz, oz) ? Fz : void 0
                    })]
                  })
                }
                return (0, mz.jsx)(Xz.c, {
                  text: Kz[zz][sz]
                })
              }
              return ""
            }
            const Jz = Object.keys(Fz).filter((zz => !0 !== Fz[zz].hidden)).map((zz => {
              var tz;
              return {
                key: zz,
                header: (0, mz.jsx)(Xz.c, {
                  text: null !== (tz = Fz[zz].displayName) && void 0 !== tz ? tz : ""
                })
              }
            }));
            return (0, mz.jsx)("div", {
              ref: vz,
              className: "LobbyLeaderboard",
              children: (0, mz.jsx)(rz.c, {
                columns: Jz,
                rows: Wz,
                getRowKey: zz => zz,
                renderRow: zz => {
                  const sz = zz !== tz.localId;
                  return (0, mz.jsx)(Iz, {
                    playerId: zz,
                    playerName: tz.byId[zz].name,
                    isOtherPlayer: sz,
                    opensProfileCard: (0, Nz.f)(sz, tz.byId[zz].name, oz),
                    lobbyLeaderboardInfo: Fz,
                    getPlayerValue: xz,
                    playerColors: Uz
                  })
                }
              })
            })
          }()
        })
      })
    }));

    function Iz(zz) {
      let {
        playerId: tz,
        playerName: sz,
        isOtherPlayer: Wz,
        opensProfileCard: Xz,
        lobbyLeaderboardInfo: Oz,
        getPlayerValue: vz,
        playerColors: Hz
      } = zz;
      const Bz = (0, Fz.useRef)(null);
      (0, Fz.useEffect)((() => () => {
        uz.c.closeIfOwner(Bz)
      }), []);
      const Pz = {
          icon: "flag",
          text: "Report",
          onClick: () => {
            oz.o.Yg("OpenReportMenu", {
              playerEId: tz,
              playerName: sz,
              RO: null,
              serverChatMsgId: null
            })
          }
        },
        rz = () => ({
          ...(0, Nz.b)(tz, sz),
          showLocation: !1,
          status: null,
          extraActions: [Pz],
          friendRequestSource: "leaderboard"
        });
      return (0, mz.jsxs)("tr", {
        ref: Bz,
        "data-pad-focusable": Xz || void 0,
        [uz.d]: Xz || void 0,
        onClick: Xz ? () => {
          var zz;
          uz.c.toggle(Bz, {
            ...rz(),
            anchor: null !== (zz = Bz.current.querySelector(".PlayerPfpAndName")) && void 0 !== zz ? zz : Bz.current
          })
        } : void 0,
        onContextMenu: Xz ? zz => {
          (0, bz.h)(Bz, zz, rz(), gz.b.get("isTouchScreen"))
        } : void 0,
        onPointerDown: Xz ? zz => {
          (0, wz.b)(zz, (() => (0, Nz.b)(tz, sz).playerSocialPreview))
        } : void 0,
        children: [Object.keys(Oz).map((zz => !0 === Oz[zz].hidden ? null : (0, mz.jsxs)("td", {
          className: Uz()("LobbyLeaderboardValue SmallTextBold", {
            LobbyLeaderboardValueHighlighted: !Wz
          }),
          children: [(0, mz.jsx)("div", {
            className: "LobbyLeaderboardValueText",
            children: vz(tz, zz)
          }), (0, mz.jsx)("div", {
            className: "LobbyLeaderboardValueBg",
            style: {
              backgroundColor: Hz[tz]
            }
          })]
        }, zz))), Wz && !Xz && (0, mz.jsx)(Kz.d, {
          className: "LobbyLeaderboardRowFloatingActions",
          triggerElementRef: Bz,
          options: [{
            icon: Pz.icon,
            text: Pz.text,
            onPointerDown: Pz.onClick
          }, ...null === sz || xz.featureFlags.useSocialFeatures ? [] : (0, Dz.d)(null, sz)]
        })]
      })
    }
  },
  4395: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Bz,
      d: () => Hz
    });
    var Fz = sz(65),
      Wz = sz(1416),
      Xz = sz(1831),
      Oz = sz(4402),
      oz = sz(1087);
    const vz = (0, Fz.memo)((function(zz) {
      let {
        initialParameters: tz
      } = zz;
      const sz = (0, Fz.useRef)(null),
        Wz = (0, Fz.useRef)(null),
        vz = (0, Fz.useRef)(0),
        Uz = (0, Fz.useRef)(null),
        Kz = tz.description,
        uz = tz.iz,
        {
          scale: Nz,
          rotation: bz
        } = null !== tz && void 0 !== tz ? tz : {},
        wz = (0, Oz.d)();
      return (0, Fz.useEffect)((() => {
        const zz = wz.onFrame((() => {
          const zz = wz.getState();
          if (!zz.isActive || !sz.current || !Wz.current) return;
          const tz = zz.state;
          if (sz.current.value = tz.progress, tz.clickCount > vz.current) {
            vz.current = tz.clickCount;
            const zz = Wz.current;
            zz.classList.add("pulse"), Uz.current = setTimeout((() => {
              zz.classList.remove("pulse")
            }), 100)
          }
        }));
        return () => {
          clearTimeout(Uz.current), zz()
        }
      }), [wz]), (0, oz.jsx)(oz.Fragment, {
        children: (0, oz.jsxs)("div", {
          className: "QTEProgressBarWrapper",
          style: {
            ...null !== Nz && {
              "--scale": Nz
            },
            ...null !== bz && {
              "--rotation": `${bz}deg`
            }
          },
          children: [(0, oz.jsx)("progress", {
            id: "catch",
            max: 100,
            className: "QTEProgressBar",
            ref: sz
          }), (0, oz.jsx)("span", {
            className: "QTEProgressBarInteractionIndicator",
            ref: Wz,
            children: (0, oz.jsx)(Xz.c, {
              text: [{
                icon: uz
              }]
            })
          }), (0, oz.jsx)("div", {
            className: "QTEProgressBarDescription",
            children: (0, oz.jsx)(Xz.c, {
              text: Kz
            })
          })]
        })
      })
    }));
    var Uz = sz(1020),
      Kz = sz.n(Uz);
    const uz = 2 * Math.PI * 90,
      Nz = (0, Fz.memo)((function(zz) {
        let {
          initialParameters: tz
        } = zz;
        const sz = (0, Fz.useRef)(null),
          Wz = (0, Fz.useRef)(null),
          vz = (0, Fz.useRef)(null),
          Uz = tz.label,
          Nz = tz.icon,
          bz = tz.nz,
          {
            scale: wz,
            rotation: Dz,
            az: gz
          } = null !== tz && void 0 !== tz ? tz : {},
          Hz = (0, Oz.d)();
        return (0, Fz.useEffect)((() => {
          const zz = Hz.onFrame((() => {
            var zz, tz;
            const Fz = Hz.getState();
            if (!Fz.isActive || !Wz.current) return;
            const Xz = Fz.state,
              Oz = null !== (zz = Xz.timeRemaining) && void 0 !== zz ? zz : 0,
              oz = null !== (tz = Xz.lz) && void 0 !== tz ? tz : 1,
              Uz = uz * (1 - Oz / oz);
            Wz.current.style.strokeDashoffset = `${Uz}`, sz.current && (sz.current.style.opacity = Oz > 0 ? "1" : "0"), vz.current && bz && (vz.current.textContent = `${(Oz/1e3).toFixed(1)}s`)
          }));
          return () => {
            zz()
          }
        }), [Hz, bz]), (0, oz.jsxs)("div", {
          className: "QTETimedClick",
          ref: sz,
          style: {
            ...null !== wz && {
              "--scale": wz
            },
            ...null !== Dz && {
              "--rotation": `${Dz}deg`
            }
          },
          children: [(0, oz.jsxs)("div", {
            className: "QTETimedClickCircleContainer",
            children: [(0, oz.jsxs)("svg", {
              className: "QTETimedClickCircularProgress",
              viewBox: "0 0 200 200",
              children: [(0, oz.jsx)("circle", {
                className: "QTETimedClickProgressTrack",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12"
              }), (0, oz.jsx)("circle", {
                className: "QTETimedClickProgressArc",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12",
                strokeLinecap: "square",
                strokeDasharray: uz,
                ref: Wz
              })]
            }), (0, oz.jsx)("div", {
              className: "QTETimedClickCenterContent",
              children: (0, oz.jsx)(Xz.c, {
                text: [{
                  icon: Nz
                }],
                className: Kz()("QTETimedClickInnerText", {
                  QTETimedClickBreathe: gz
                })
              })
            })]
          }), (0, oz.jsxs)("div", {
            className: "QTETimedClickRightTextContainer",
            children: [(0, oz.jsx)(Xz.c, {
              text: Uz,
              className: "QTETimedClickLabelText"
            }), bz && (0, oz.jsx)("span", {
              className: "QTETimedClickTimeText",
              ref: vz
            })]
          })]
        })
      })),
      bz = (0, Fz.memo)((function(zz) {
        let {
          initialParameters: tz
        } = zz;
        const sz = (0, Fz.useRef)(null),
          Wz = (0, Fz.useRef)(null),
          vz = (0, Fz.useRef)(null),
          Uz = (0, Fz.useRef)(!1),
          Kz = tz.description,
          uz = null === tz || void 0 === tz ? void 0 : tz.icon,
          Nz = (0, Oz.d)();
        return (0, Fz.useEffect)((() => {
          const zz = Nz.onFrame((() => {
            const zz = Nz.getState();
            if (!zz.isActive) return;
            const tz = zz.state;
            if (sz.current) {
              const zz = 100 * (tz.catchZonePosition - tz.Sz / 2);
              sz.current.style.left = `${zz}%`, sz.current.style.width = 100 * tz.Sz + "%", tz.isCatching !== Uz.current && (Uz.current = tz.isCatching, tz.isCatching ? sz.current.classList.add("catching") : sz.current.classList.remove("catching"))
            }
            Wz.current && (Wz.current.style.left = 100 * tz.moverPosition + "%"), vz.current && (vz.current.value = tz.progress)
          }));
          return () => {
            zz()
          }
        }), [Nz]), (0, oz.jsxs)("div", {
          className: "QTEGravityBar",
          children: [(0, oz.jsx)("div", {
            className: "QTEGravityBarDescription",
            children: (0, oz.jsx)(Xz.c, {
              text: Kz
            })
          }), (0, oz.jsx)("progress", {
            max: 100,
            className: "QTEGravityBarProgress",
            ref: vz
          }), (0, oz.jsxs)("div", {
            className: "QTEGravityBarTrack",
            children: [(0, oz.jsx)("div", {
              className: "QTEGravityBarCatchZone",
              ref: sz
            }), (0, oz.jsx)("div", {
              className: "QTEGravityBarMover",
              ref: Wz,
              children: (0, oz.jsx)("span", {
                children: uz && (0, oz.jsx)(Xz.c, {
                  text: [{
                    icon: uz,
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
    var wz = sz(580);
    const Dz = (0, Fz.memo)((function(zz) {
        let {
          initialParameters: tz
        } = zz;
        const sz = (0, Fz.useRef)(null),
          Wz = tz.label,
          vz = tz.tt,
          {
            icon: Uz,
            scale: Kz,
            rotation: uz
          } = null !== tz && void 0 !== tz ? tz : {},
          Nz = 100 * (.5 - vz / 2),
          bz = 100 * vz,
          Dz = (0, Oz.d)();
        return (0, Fz.useEffect)((() => {
          const zz = Dz.onFrame((() => {
            const zz = Dz.getState();
            if (!zz.isActive || !sz.current) return;
            const tz = zz.state;
            sz.current.style.left = 100 * tz.markerPosition + "%"
          }));
          return () => {
            zz()
          }
        }), [Dz]), (0, oz.jsxs)("div", {
          className: "QTEPrecisionBarWrapper",
          style: {
            ...!(0, wz.G)(Kz) && {
              "--scale": Kz
            },
            ...!(0, wz.G)(uz) && {
              "--rotation": `${uz}deg`
            }
          },
          children: [Uz && (0, oz.jsx)(Xz.c, {
            text: [{
              icon: Uz
            }],
            className: "QTEPrecisionBarIcon"
          }), (0, oz.jsxs)("div", {
            className: "QTEPrecisionBarTrack",
            children: [(0, oz.jsx)("div", {
              className: "QTEPrecisionBarSuccessZone",
              style: {
                left: `${Nz}%`,
                width: `${bz}%`
              }
            }), (0, oz.jsx)("div", {
              className: "QTEPrecisionBarMarker",
              ref: sz
            })]
          }), (0, oz.jsx)("div", {
            className: "QTEPrecisionBarLabel",
            children: (0, oz.jsx)(Xz.c, {
              text: Wz
            })
          })]
        })
      })),
      gz = (0, Fz.memo)((function(zz) {
        let {
          initialParameters: tz
        } = zz;
        const sz = (0, Fz.useRef)(null),
          [Wz, vz] = (0, Fz.useState)((() => new Array(tz.Wt).fill("pending"))),
          [Uz, Kz] = (0, Fz.useState)((() => {
            const zz = tz.ot;
            return (0, wz.G)(zz) || zz <= 0 ? [] : new Array(zz).fill("pending")
          })),
          uz = tz.label,
          {
            icon: Nz
          } = tz,
          bz = (0, Fz.useRef)(0),
          Dz = (0, Fz.useRef)(0),
          gz = (0, Fz.useRef)([]),
          Hz = (0, Oz.d)();
        return (0, Fz.useEffect)((() => {
          const zz = Hz.onFrame((() => {
            const zz = Hz.getState();
            if (!zz.isActive || !sz.current) return;
            const tz = zz.state,
              Fz = 30 + 60 * tz.outerCircleProgress;
            if (sz.current.setAttribute("r", String(Fz)), !0 === tz.lastClickResult && tz.successes > bz.current) {
              sz.current.classList.remove("QTERhythmClickOuterCircle--miss"), sz.current.classList.add("QTERhythmClickOuterCircle--hit");
              const zz = setTimeout((() => {
                var zz;
                null === (zz = sz.current) || void 0 === zz || zz.classList.remove("QTERhythmClickOuterCircle--hit")
              }), 200);
              gz.current.push(zz)
            } else if (!1 === tz.lastClickResult && tz.misses > Dz.current) {
              sz.current.classList.remove("QTERhythmClickOuterCircle--hit"), sz.current.classList.add("QTERhythmClickOuterCircle--miss");
              const zz = setTimeout((() => {
                var zz;
                null === (zz = sz.current) || void 0 === zz || zz.classList.remove("QTERhythmClickOuterCircle--miss")
              }), 200);
              gz.current.push(zz)
            }
            tz.successes === bz.current && tz.misses === Dz.current || (bz.current = tz.successes, Dz.current = tz.misses, vz((zz => {
              const sz = [...zz];
              for (let Fz = 0; Fz < tz.Wt; Fz++) sz[Fz] = Fz < tz.successes ? "success" : "pending";
              return sz
            })), Kz((zz => {
              if (0 === zz.length) return zz;
              const sz = [...zz];
              for (let Fz = 0; Fz < sz.length; Fz++) sz[Fz] = Fz < tz.misses ? "miss" : "pending";
              return sz
            })))
          }));
          return () => {
            zz();
            for (const zz of gz.current) clearTimeout(zz);
            gz.current = []
          }
        }), [Hz]), (0, oz.jsxs)("div", {
          className: "QTERhythmClickWrapper",
          children: [(0, oz.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: Wz.map(((zz, tz) => (0, oz.jsx)("div", {
              className: "QTERhythmClickDot" + ("success" === zz ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
            }, tz)))
          }), (0, oz.jsxs)("div", {
            className: "QTERhythmClickCircleContainer",
            children: [(0, oz.jsxs)("svg", {
              className: "QTERhythmClickSvg",
              viewBox: "0 0 200 200",
              children: [(0, oz.jsx)("circle", {
                className: "QTERhythmClickInnerCircle",
                cx: "100",
                cy: "100",
                r: 30
              }), (0, oz.jsx)("circle", {
                className: "QTERhythmClickOuterCircle",
                cx: "100",
                cy: "100",
                r: 90,
                ref: sz
              })]
            }), Nz && (0, oz.jsx)("div", {
              className: "QTERhythmClickCenterContent",
              children: (0, oz.jsx)(Xz.c, {
                text: [{
                  icon: Nz
                }],
                className: "QTERhythmClickIcon"
              })
            })]
          }), Uz.length > 0 && (0, oz.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: Uz.map(((zz, tz) => (0, oz.jsx)("div", {
              className: "QTERhythmClickDot" + ("miss" === zz ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
            }, tz)))
          }), (0, oz.jsx)("div", {
            className: "QTERhythmClickLabel",
            children: (0, oz.jsx)(Xz.c, {
              text: uz
            })
          })]
        })
      }));

    function Hz(zz) {
      let {
        qte: tz
      } = zz;
      switch (tz.type) {
        case "progressBar":
          return (0, oz.jsx)(vz, {
            initialParameters: tz.parameters
          });
        case "timedClick":
          return (0, oz.jsx)(Nz, {
            initialParameters: tz.parameters
          });
        case "gravityBar":
          return (0, oz.jsx)(bz, {
            initialParameters: tz.parameters
          });
        case "precisionBar":
          return (0, oz.jsx)(Dz, {
            initialParameters: tz.parameters
          });
        case "rhythmClick":
          return (0, oz.jsx)(gz, {
            initialParameters: tz.parameters
          });
        default:
          return console.warn("Unknown QTE type"), null
      }
    }
    const Bz = (0, Fz.memo)((function() {
      const [zz, tz] = (0, Fz.useState)({
        type: null,
        parameters: null,
        state: null,
        isActive: !1
      });
      return (0, Wz.g)("qteStateUpdated", (zz => {
        tz(zz)
      })), zz.isActive && zz.type ? (0, oz.jsx)("div", {
        className: "QTE",
        "data-camera-keeper": "",
        children: (0, oz.jsx)(Hz, {
          qte: zz
        })
      }) : null
    }))
  },
  4402: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => oz,
      d: () => vz
    });
    var Fz = sz(65),
      Wz = sz(1279),
      Xz = sz(4411);
    const Oz = {
        getState: () => Xz.e.getCurrentState(),
        onFrame: Wz.o
      },
      oz = (0, Fz.createContext)(Oz);

    function vz() {
      return (0, Fz.useContext)(oz)
    }
  },
  8834: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Uz
    });
    var Fz = sz(65),
      Wz = sz(1020),
      Xz = sz.n(Wz),
      Oz = sz(1901),
      oz = sz(1087);

    function vz(zz) {
      const tz = Math.floor(zz / 3600),
        sz = Math.floor(zz % 3600 / 60),
        Fz = Math.floor(zz % 60),
        Wz = `${sz.toString().padStart(2,"0")}:${Fz.toString().padStart(2,"0")}`;
      return tz > 0 ? `${tz}:${Wz}` : Wz
    }
    const Uz = (0, Fz.memo)((function(zz) {
      let {
        className: tz
      } = zz;
      const {
        recording: sz,
        seconds: Fz
      } = (0, Oz.l)("replayRecorder");
      return sz ? (0, oz.jsxs)("div", {
        className: Xz()("RecordingIndicator", tz),
        children: [(0, oz.jsx)("span", {
          className: "RecordingIndicatorDot"
        }), (0, oz.jsx)("span", {
          className: "RecordingIndicatorLabel",
          children: "REC"
        }), (0, oz.jsx)("span", {
          className: "RecordingIndicatorTime",
          children: vz(Fz)
        })]
      }) : null
    }))
  },
  35873: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Kz,
      e: () => Nz
    });
    var Fz = sz(65),
      Wz = sz(1319),
      Xz = sz(1173),
      Oz = sz(1306),
      oz = sz(3158),
      vz = sz(4559),
      Uz = sz(1087);

    function Kz(zz) {
      let {
        loading: tz,
        schematics: sz,
        onSchematicPicked: Fz,
        selectedSchematicIdList: Wz = [],
        disableAutoExport: vz
      } = zz;
      const {
        t: Kz
      } = (0, Xz.B)();
      return (0, Uz.jsxs)("div", {
        className: "SchematicList",
        children: [tz && (0, Uz.jsx)(Oz.d, {}), !tz && 0 === sz.length && (0, Uz.jsx)("div", {
          className: "NoSchematicsText",
          children: Kz("worldBuilder:noSavedSchematic")
        }), !tz && sz.map((zz => (0, Uz.jsx)(oz.g, {
          source: {
            type: "schematic",
            schematic: zz
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            Fz(zz)
          },
          isSelected: Wz.includes(zz.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: zz.isAutoExported && vz,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, zz.schematicId)))]
      })
    }

    function uz(zz) {
      let {
        ownedSchematics: tz,
        currentWorldSchematicId: sz,
        onClose: Wz
      } = zz;
      const {
        t: Oz
      } = (0, Xz.B)(), [oz, uz] = (0, Fz.useState)(null);
      return (0, Uz.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === oz && (0, Uz.jsxs)(Uz.Fragment, {
          children: [(0, Uz.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: Oz("worldBuilder:schematicList")
          }), (0, Uz.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: Oz("worldBuilder:clickSchematicForOptions")
          }), (0, Uz.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, Uz.jsx)(Kz, {
              loading: !1,
              schematics: tz,
              onSchematicPicked: zz => {
                uz(zz)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== oz && (0, Uz.jsx)(vz.g, {
          schematic: oz,
          inSourceWorld: oz.schematicId === sz,
          onSchematicUpdate: zz => {
            uz(zz)
          },
          onClose: () => {
            uz(null), Wz()
          }
        })]
      })
    }

    function Nz(zz) {
      let {
        ownedSchematics: tz,
        currentWorldSchematicId: sz,
        onClose: Fz
      } = zz;
      Wz.NotificationProvider.showCustomPopup({
        body: zz => (0, Uz.jsx)(uz, {
          ownedSchematics: tz,
          currentWorldSchematicId: sz,
          onClose: zz
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: Fz,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  36329: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Yz,
      g: () => rz
    });
    var Fz = sz(3948),
      Wz = sz(1416),
      Xz = sz(65),
      Oz = sz(6057),
      oz = sz(3930),
      vz = sz(1269),
      Uz = sz(1857),
      Kz = sz(1831),
      uz = sz(1419),
      Nz = sz(1173),
      bz = sz(36336),
      wz = sz(1020),
      Dz = sz.n(wz),
      gz = sz(1287),
      Hz = sz(1036),
      Bz = sz(1264),
      Pz = sz(1087);
    const rz = "SleepingOverlay";

    function Yz() {
      const {
        t: zz
      } = (0, Nz.B)(), [tz, sz] = (0, Xz.useState)(!1), [wz, Yz] = (0, Xz.useState)(null), [mz, Jz] = (0, Xz.useState)(1), [Iz, Cz] = (0, Xz.useState)(!1), [ez, Zz] = (0, Xz.useState)(!1), Gz = (0, Xz.useRef)(0), Tz = (0, Xz.useRef)(!1), cz = (0, Xz.useRef)(!1), jz = (0, Xz.useRef)(), Az = (0, Xz.useRef)(null);

      function yz() {
        const zz = null !== wz && void 0 !== wz ? wz : "Rested Speed";
        Uz.gameBridge.send("wakeUp", ez ? zz : null), Az.current = null, sz(!1), Yz(null), Jz(1), Cz(!1), Zz(!1)
      }

      function Mz() {
        return !Iz && (yz(), !0)
      }
      return (0, Wz.g)("PlayerPhysicsTypeUpdate", (zz => {
        zz !== Az.current && (Az.current = zz, zz === Oz.r.SLEEPING ? (cz.current || (Gz.current = Uz.gameBridge.lookup("cameraZoom", null), cz.current = !0), Tz.current = !0, Uz.gameBridge.send("setCameraZoom", 3), sz(!0), Jz(function() {
          for (const zz of Uz.gameBridge.lookup("blocksStandingOn", null)) {
            if (bz.c.leafBeds.includes(zz)) return console.log(`Found leaf bed: ${zz}`), 1;
            if (bz.c.woolBeds.includes(zz)) return console.log(`Found woold bed: ${zz}`), 2;
            if (bz.c.strongBeds.includes(zz)) return console.log(`Found strong bed ${zz}`), 3
          }
          return 1
        }())) : (cz.current = !1, sz(!1), Yz(null), Jz(1)))
      })), (0, Xz.useEffect)((() => () => {
        (0, vz.m)(rz)
      }), []), (0, Xz.useEffect)((() => {
        tz ? (0, vz.n)(rz) : ((0, vz.m)(rz), Tz.current && (Uz.gameBridge.send("setCameraZoom", Gz.current), Tz.current = !1))
      }), [tz]), (0, Bz.s)("overlay", jz, Mz, tz), (0, Pz.jsx)(Fz.d, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: tz,
        timeout: 300,
        nodeRef: jz,
        unmountOnExit: !0,
        children: (0, Pz.jsx)("div", {
          ref: jz,
          onClick: zz => {
            Mz() && zz.stopPropagation()
          },
          children: (0, Pz.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, Pz.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: oz.i.map((tz => (0, Pz.jsxs)(xz, {
                restedEffect: tz,
                ko: wz,
                setChosenRestedEffect: Yz,
                children: [(0, Pz.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, Pz.jsx)(Kz.c, {
                    text: [{
                      icon: tz
                    }]
                  }), oz.f[tz].shortName]
                }), (0, Pz.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: zz(oz.f[tz].description, {
                    time: oz.f[tz].effectLevelDurations[mz] / 6e4
                  })
                })]
              }, tz)))
            }), (0, Pz.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, Pz.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, Pz.jsxs)(uz.h, {
                className: "SleepingOverlayWakeUpButton",
                onClick: zz => {
                  ez ? yz() : (Cz(!0), (0, gz.gb)((() => {
                    Cz(!1), Zz(!0)
                  }), !0)), zz.stopPropagation()
                },
                loading: Iz,
                children: [!ez && (0, Pz.jsxs)(Pz.Fragment, {
                  children: [(0, Pz.jsx)(Hz.c, {
                    name: "film"
                  }), " ", zz("classicGame:watchAdToGetRestedPerk")]
                }), ez && zz("classicGame:wakeUp")]
              }), (0, Pz.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, Pz.jsx)("div", {
                  className: Dz()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === mz
                  }),
                  children: (0, Pz.jsx)(Kz.c, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, Pz.jsx)("div", {
                  className: Dz()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === mz
                  }),
                  children: (0, Pz.jsx)(Kz.c, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, Pz.jsx)("div", {
                  className: Dz()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === mz
                  }),
                  children: (0, Pz.jsx)(Kz.c, {
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
    const xz = (0, Xz.memo)((function(zz) {
      let {
        children: tz,
        restedEffect: sz,
        ko: Fz,
        setChosenRestedEffect: Wz
      } = zz;
      return sz === Fz ? (0, Pz.jsx)(uz.p, {
        onClick: zz => {
          zz.stopPropagation()
        },
        children: tz
      }) : (0, Pz.jsx)(uz.l, {
        onClick: zz => {
          Wz(sz), zz.stopPropagation()
        },
        children: tz
      })
    }))
  },
  36049: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Uz,
      f: () => vz
    });
    var Fz = sz(571),
      Wz = sz(1857),
      Xz = sz(1577),
      Oz = sz(106),
      oz = sz(1244);

    function vz(zz, tz, sz) {
      return Oz.featureFlags.useSocialFeatures && zz && null === (0, oz.c)(tz, sz)
    }

    function Uz(zz, tz) {
      var sz, Oz;
      const oz = Xz.d.getSocialState().friends.find((zz => zz.name.toLowerCase() === tz.toLowerCase())),
        vz = Wz.gameBridge.latest("players").byId[zz],
        Uz = void 0 !== vz && vz.name === tz,
        Kz = Uz && null !== (sz = vz.cosmetics) && void 0 !== sz ? sz : void 0,
        uz = oz && Kz ? {
          ...oz,
          cosmetics: Kz
        } : oz;
      return {
        playerSocialPreview: null !== uz && void 0 !== uz ? uz : {
          isError: !1,
          name: tz,
          ranks: Uz ? [...vz.ranks] : [],
          cosmetics: null !== Kz && void 0 !== Kz ? Kz : {},
          nameColour: null !== (Oz = null === Kz || void 0 === Kz ? void 0 : Kz.nameColour) && void 0 !== Oz ? Oz : Fz.e,
          location: {
            status: "inGame"
          }
        },
        isFriend: void 0 !== oz
      }
    }
  },
  8843: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Xz
    });
    var Fz = sz(4178),
      Wz = sz(4180);

    function Xz(zz) {
      let {
        children: tz,
        showing: sz,
        globallyUniqueKey: Xz,
        alwaysMountChildren: Oz = !1,
        doGameplayStartStopOnShow: oz = !0,
        keepsMovement: vz = !1
      } = zz;
      return (0, Wz.b)(!0, sz, Xz, vz), (0, Fz.e)(oz, sz), sz || Oz ? tz : null
    }
  },
  4542: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => oz
    });
    var Fz = sz(65),
      Wz = sz(1020),
      Xz = sz.n(Wz),
      Oz = sz(1087);

    function oz(zz) {
      let {
        columns: tz,
        rows: sz,
        getRowKey: Wz,
        renderRow: oz,
        className: vz
      } = zz;
      return (0, Oz.jsxs)("table", {
        className: Xz()("Table", vz),
        children: [(0, Oz.jsx)("thead", {
          children: (0, Oz.jsx)("tr", {
            children: tz.map((zz => (0, Oz.jsx)("th", {
              children: zz.header
            }, zz.key)))
          })
        }), (0, Oz.jsx)("tbody", {
          children: sz.map((zz => (0, Oz.jsx)(Fz.Fragment, {
            children: oz(zz)
          }, Wz(zz))))
        })]
      })
    }
  },
  36297: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Jz,
      e: () => xz,
      g: () => mz,
      j: () => wz
    });
    var Fz = sz(1020),
      Wz = sz.n(Fz),
      Xz = sz(65),
      Oz = sz(78),
      oz = sz(1336),
      vz = sz(1419),
      Uz = sz(1333),
      Kz = sz(1264),
      uz = sz(1173),
      Nz = sz(36303),
      bz = sz(1087);

    function wz(zz) {
      const [tz, sz] = (0, Xz.useState)((() => (0, Nz.o)(zz)));
      return (0, Xz.useEffect)((() => (sz((0, Nz.o)(zz)), (0, Nz.J)((() => {
        sz((0, Nz.o)(zz))
      })))), [zz]), tz
    }

    function Dz(zz, tz) {
      "function" === typeof zz ? zz(tz) : zz && (zz.current = tz)
    }

    function gz(zz) {
      let {
        tutorial: tz,
        step: sz,
        enabled: Fz = !0
      } = zz;
      const Wz = wz(tz);
      return Fz && Wz === sz
    }

    function Hz(zz, tz) {
      const sz = (0, Nz.s)(zz),
        Fz = sz.indexOf(tz);
      return !sz.slice(Fz + 1).some((tz => (0, Nz.B)(zz, tz)))
    }

    function Bz(zz, tz, sz, Fz) {
      let {
        tutorial: Wz,
        step: Xz,
        waitForClick: Oz = !1,
        onPrevious: oz
      } = zz;
      const vz = tz && (0, Nz.y)(Wz, Xz),
        Uz = tz && !Hz(Wz, Xz),
        uz = Oz ? Fz : sz;
      let bz = null;
      vz ? bz = () => {
        null === oz || void 0 === oz || oz(), (0, Nz.w)(Wz, Xz)
      } : Uz && (bz = () => {
        (0, Nz.l)(Wz)
      }), (0, Kz.s)("popup", null !== uz && void 0 !== uz ? uz : sz, bz, tz && null !== uz, null, vz ? void 0 : "controller:menusSkipTutorial")
    }

    function Pz(zz) {
      let {
        tutorial: tz,
        step: sz,
        text: Fz,
        waitForClick: Wz = !1,
        onPrevious: Xz
      } = zz;
      const {
        t: Oz
      } = (0, uz.B)(), oz = Hz(tz, sz);
      return (0, bz.jsxs)(bz.Fragment, {
        children: [(0, bz.jsx)("div", {
          className: "TutorialStepText",
          children: Fz
        }), (0, bz.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, Nz.y)(tz, sz) && (0, bz.jsx)(vz.l, {
            className: "TutorialStepButton",
            onClick: () => {
              null === Xz || void 0 === Xz || Xz(), (0, Nz.w)(tz, sz)
            },
            children: Oz("tutorial:back")
          }), !Wz && (0, bz.jsx)(vz.h, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, Nz.d)(sz)
            },
            padDefaultFocus: !0,
            children: Oz(oz ? "tutorial:done" : "tutorial:next")
          }), !oz && (0, bz.jsx)(vz.l, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, Nz.l)(tz)
            },
            children: Oz("tutorial:skip")
          })]
        })]
      })
    }
    const rz = 6;

    function Yz(zz) {
      let {
        rect: tz,
        margin: sz
      } = zz;
      const Fz = Math.max(0, tz.top - sz),
        Wz = tz.bottom + sz,
        Xz = Math.max(0, tz.left - sz),
        Oz = tz.right + sz;
      return (0, bz.jsxs)(bz.Fragment, {
        children: [(0, bz.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: Fz
          }
        }), (0, bz.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Wz,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, bz.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Fz,
            left: 0,
            width: Xz,
            height: Wz - Fz
          }
        }), (0, bz.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Fz,
            left: Oz,
            right: 0,
            height: Wz - Fz
          }
        })]
      })
    }

    function xz(zz) {
      let {
        target: tz,
        placement: sz,
        boxRef: Fz,
        className: vz,
        spotlightMargin: Kz = rz,
        children: uz
      } = zz;
      const {
        getArrowProps: Nz,
        getTooltipProps: wz,
        setTooltipRef: Dz,
        setTriggerRef: gz
      } = (0, oz.e)({
        placement: sz,
        trigger: null,
        visible: !0,
        interactive: !0,
        closeOnOutsideClick: !1,
        offset: [0, Kz]
      });
      (0, Xz.useLayoutEffect)((() => {
        gz(tz)
      }), [tz, gz]);
      const Hz = function(zz, tz) {
        const [sz, Fz] = (0, Xz.useState)(null);
        return (0, Xz.useEffect)((() => {
          if (!tz || !zz) return void Fz(null);
          let sz = 0,
            Wz = null;
          const Xz = () => {
            const tz = zz.getBoundingClientRect();
            Wz && tz.left === Wz.left && tz.top === Wz.top && tz.width === Wz.width && tz.height === Wz.height || (Wz = tz, Fz(tz)), sz = requestAnimationFrame(Xz)
          };
          return Xz(), () => {
            cancelAnimationFrame(sz)
          }
        }), [zz, tz]), sz
      }(tz, !0);
      (0, Xz.useEffect)((() => {
        null === tz || void 0 === tz || tz.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        })
      }), [tz]);
      const Bz = (0, Xz.useCallback)((zz => {
        Dz(zz), Fz && (Fz.current = zz)
      }), [Dz, Fz]);
      return (0, Oz.createPortal)((0, bz.jsxs)(bz.Fragment, {
        children: [Hz && (0, bz.jsx)(Yz, {
          rect: Hz,
          margin: Kz
        }), (0, bz.jsxs)("div", {
          ref: Bz,
          ...wz({
            className: Wz()("tooltip-container SmallTextLight TutorialStep", vz)
          }),
          children: [uz, (0, bz.jsx)("div", {
            ...Nz({
              className: "tooltip-arrow"
            })
          })]
        })]
      }), (0, Uz.k)())
    }
    const mz = (0, Xz.forwardRef)((function(zz, tz) {
      let {
        placement: sz = "right",
        children: Fz,
        ...Wz
      } = zz;
      const Oz = gz(Wz),
        oz = (0, Xz.useRef)(null),
        vz = (0, Xz.useRef)(null);
      Bz(Wz, Oz, oz, vz);
      const [Uz, Kz] = (0, Xz.useState)(null), uz = Fz.ref, Nz = (0, Xz.useCallback)((zz => {
        vz.current = zz, Kz(zz), Dz(tz, zz), Dz(uz, zz)
      }), [tz, uz]);
      return (0, bz.jsxs)(bz.Fragment, {
        children: [(0, Xz.cloneElement)(Fz, {
          ref: Nz
        }), Oz && (0, bz.jsx)(xz, {
          target: Uz,
          placement: sz,
          boxRef: oz,
          children: (0, bz.jsx)(Pz, {
            ...Wz
          })
        })]
      })
    }));

    function Jz(zz) {
      const tz = gz(zz),
        sz = (0, Xz.useRef)(null);
      return Bz(zz, tz, sz, null), tz ? (0, Oz.createPortal)((0, bz.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, bz.jsx)("div", {
          ref: sz,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, bz.jsx)(Pz, {
            ...zz
          })
        })
      }), (0, Uz.k)()) : null
    }
  },
  36169: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Xz,
      g: () => Oz,
      j: () => oz,
      k: () => vz
    });
    var Fz = sz(65),
      Wz = sz(1113);
    const Xz = 8,
      Oz = "InGameHeaderContainer",
      oz = "TopRightElements";

    function vz(zz) {
      const [tz] = (0, Wz.c)(), [sz, vz] = (0, Fz.useState)(!1);
      return (0, Fz.useLayoutEffect)((() => {
        if (!zz) return;
        const tz = document.querySelector(`.${Oz}`),
          sz = document.querySelector(`.${oz}`),
          Fz = () => {
            const Fz = zz.getBoundingClientRect(),
              Wz = tz ? tz.getBoundingClientRect().right : 0,
              Oz = sz ? sz.getBoundingClientRect().left : window.innerWidth,
              oz = Fz.left < Wz + Xz,
              Uz = Fz.right > Oz - Xz;
            vz(oz || Uz)
          };
        Fz();
        const Wz = new ResizeObserver(Fz);
        return Wz.observe(zz), tz && Wz.observe(tz), sz && Wz.observe(sz), () => {
          Wz.disconnect()
        }
      }), [zz, tz]), sz
    }
  },
  6151: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Xz
    });
    var Fz = sz(65),
      Wz = sz(44);

    function Xz(zz, tz) {
      var sz;
      const [Xz, Oz] = (0, Fz.useState)(null !== (sz = Wz.f.getItem(zz)) && void 0 !== sz ? sz : tz);
      return [Xz, tz => {
        Wz.f.setItem(zz, tz), Oz(tz)
      }]
    }
  },
  36314: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Xz
    });
    var Fz = sz(30),
      Wz = sz(1287);

    function Xz() {
      const {
        clientEscMenuOptions: zz
      } = (0, Fz.h)(["clientEscMenuOptions"]);
      return (0, Wz.A)() && zz.showChat
    }
  },
  36256: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => vz
    });
    var Fz = sz(2555),
      Wz = sz(3348),
      Xz = sz(2662);
    const Oz = ["Unable to create vertex buffer"];
    let oz = {};

    function vz(zz, tz) {
      const sz = new Date;
      console.error(`${sz.getUTCHours()}:${sz.getUTCMinutes()}:${sz.getUTCSeconds()}`, zz, tz, null === tz || void 0 === tz ? void 0 : tz.stack), Oz.includes(null === tz || void 0 === tz ? void 0 : tz.message) && (console.error("Unrecoverable error occurred. Leaving game."), (0, Fz.d)().client.leaveGameUnwanted({
        reason: `Unrecoverable error occurred.\nThis is a bug.\n\nError:\n${tz.message}\n\nPlease refresh the page.`,
        requiresRefresh: !0,
        canReconnect: !1,
        automaticallyReconnect: !1
      })), (0, Xz.logError)("warning", `${zz}\n ${tz} "\n" ${null===tz||void 0===tz?void 0:tz.stack}`);
      const Wz = zz + tz + (null === tz || void 0 === tz ? void 0 : tz.stack);
      Wz in oz || ((0, Xz.logError)("error", `${zz}\n ${tz} "\n" ${null===tz||void 0===tz?void 0:tz.stack}`), oz[Wz] = !0)
    }(0, Wz.onGameReset)((() => {
      oz = {}
    }))
  },
  4472: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Az,
      f: () => jz
    });
    var Fz = sz(4476),
      Wz = sz(308);
    const Xz = 120,
      Oz = 260,
      oz = 1.15,
      vz = 1.2,
      Uz = 2,
      Kz = 1.08,
      uz = .8,
      Nz = .95,
      bz = 8,
      wz = "[\"')\\]\u300d\u300f\uff09]*",
      Dz = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${wz}$`),
      gz = new RegExp(`[?\uff1f]${wz}$`),
      Hz = new RegExp(`[!\uff01]${wz}$`),
      Bz = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      Pz = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      rz = new RegExp(`[${Pz}]`),
      Yz = new RegExp(`[${Pz}]|[^${Pz}]+`, "g"),
      xz = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function mz(zz) {
      let tz = 2166136261;
      for (let sz = 0; sz < zz.length; sz++) tz ^= zz.charCodeAt(sz), tz = Math.imul(tz, 16777619);
      return (tz >>> 0) / 4294967295 * 2 - 1
    }

    function Jz(zz) {
      var tz;
      if (rz.test(zz)) return 1;
      const sz = zz.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        Fz = sz.replace(/[^0-9]/g, "");
      if (Fz.length > 0 && !/\p{L}/u.test(sz)) return Math.min(Fz.length, 4);
      const Wz = null !== (tz = sz.match(xz)) && void 0 !== tz ? tz : [];
      if (0 === Wz.length) {
        var Xz, Oz;
        const zz = null !== (Xz = null === (Oz = sz.match(/\p{L}/gu)) || void 0 === Oz ? void 0 : Oz.length) && void 0 !== Xz ? Xz : 0;
        return 0 === zz ? 0 : Math.min(Math.max(1, Math.round(zz / 2.5)), bz)
      }
      const oz = sz.replace(/[^\p{L}]/gu, ""),
        vz = Wz.length > 1 && "e" === Wz.at(-1) && oz.endsWith("e") && !oz.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(zz.replace(/[^\p{L}]/gu, ""));
      return Math.min(Wz.length - (vz ? 1 : 0), bz)
    }

    function Iz(zz) {
      return zz.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function Cz(zz) {
      const tz = zz.replace(/[^\p{L}]/gu, "");
      return tz.length >= 2 && tz === tz.toUpperCase() && tz !== tz.toLowerCase()
    }

    function ez(zz, tz) {
      var sz;
      const bz = tz && (0, Fz.l)(tz),
        wz = null !== (sz = null === bz || void 0 === bz ? void 0 : bz.syllableMs) && void 0 !== sz ? sz : Fz.e,
        Pz = function(zz) {
          const tz = [];
          for (const Fz of (0, Wz.bc)(zz))
            if ("string" === typeof Fz)
              for (const zz of Fz.split(/(\s+)/)) {
                if ("" === zz) continue;
                if (/^\s+$/.test(zz)) {
                  tz.push({
                    kind: "space",
                    text: zz
                  });
                  continue
                }
                if (!rz.test(zz)) {
                  tz.push({
                    kind: "word",
                    text: zz,
                    delayMs: 0
                  });
                  continue
                }
                let Fz = !0;
                for (const Wz of null !== (sz = zz.match(Yz)) && void 0 !== sz ? sz : []) {
                  var sz;
                  const zz = tz.at(-1);
                  Fz || "word" !== (null === zz || void 0 === zz ? void 0 : zz.kind) || rz.test(Wz) || /[\p{L}\p{N}]/u.test(Wz) ? (Fz || tz.push({
                    kind: "space",
                    text: "\u200b"
                  }), tz.push({
                    kind: "word",
                    text: Wz,
                    delayMs: 0
                  }), Fz = !1) : zz.text += Wz
                }
              } else tz.push({
                kind: "icon",
                text: Fz.icon,
                delayMs: 0
              });
          return tz
        }(zz),
        xz = [];
      let ez = [];
      for (const Fz of Pz) "space" !== Fz.kind && (ez.push(Fz), Dz.test(Fz.text) && (xz.push(ez), ez = []));
      xz.push(ez);
      const Zz = [];
      let Gz = 0;
      for (const Fz of xz) {
        var Tz, cz;
        const zz = null !== (Tz = null === (cz = Fz.at(-1)) || void 0 === cz ? void 0 : cz.text) && void 0 !== Tz ? Tz : "",
          tz = gz.test(zz),
          sz = Hz.test(zz),
          Wz = Fz.map((zz => "word" === zz.kind ? Jz(zz.text) : 1)),
          Pz = Wz.findLastIndex((zz => zz > 0));
        for (const [gz, Hz] of Fz.entries()) {
          const zz = "word" === Hz.kind,
            Fz = Wz[gz];
          Hz.delayMs = Gz;
          for (let Wz = 0; bz && Wz < Fz; Wz++) {
            const {
              intonation: Xz
            } = bz;
            let Oz = Pz > 0 ? -Xz.declineSemitones * (gz / Pz) : 0;
            Oz += mz(`${Iz(Hz.text)}|${Wz}`) * Xz.variationSemitones;
            const Dz = Math.min(1, Xz.variationSemitones);
            let Bz = bz.glideSemitones,
              rz = 1;
            sz && (Oz += Xz.exclaimLiftSemitones, rz *= oz), tz && gz === Pz && (Oz += Xz.questionRiseSemitones * (Fz > 1 ? .5 + .5 * Wz / (Fz - 1) : 1), Wz === Fz - 1 && (Bz = Math.abs(Bz) + Xz.questionRiseSemitones / 2)), zz && Cz(Hz.text) && (Oz += Uz * Dz, rz *= vz), Fz > 1 && 0 === Wz && (Oz += uz * Dz, rz *= Kz), Zz.push({
              atMs: Gz + Wz * wz,
              semitones: Oz,
              glideSemitones: Bz,
              durationMs: Wz < Fz - 1 ? Math.min(bz.durationMs, wz * Nz) : bz.durationMs,
              level: rz
            })
          }
          Gz += Fz * wz + (Dz.test(Hz.text) ? Oz : Bz.test(Hz.text) ? Xz : 0)
        }
      }
      return {
        pieces: Pz.map((zz => "space" === zz.kind ? zz : "icon" === zz.kind ? {
          kind: "icon",
          icon: zz.text,
          delayMs: zz.delayMs
        } : {
          kind: "word",
          text: zz.text,
          delayMs: zz.delayMs
        })),
        blips: Zz
      }
    }
    var Zz = sz(1173),
      Gz = sz(1237),
      Tz = sz(1862);

    function cz(zz) {
      if ("string" === typeof zz) return zz;
      const tz = Gz.g.get().getCurrentLanguageCode();
      return (0, Zz.s)(tz, zz.translationKey, (0, Zz.r)(zz.params, Tz.d.shown))
    }

    function jz(zz) {
      const tz = void 0 === zz.voice ? null : (0, Fz.n)(zz.voice),
        sz = tz && (0, Fz.l)(tz);
      return {
        plan: ez(cz(zz.line), sz),
        synth: sz
      }
    }

    function Az(zz) {
      const tz = [];
      let sz = [];
      for (const [Wz, Xz] of zz.entries()) {
        var Fz;
        "space" === Xz.kind && (" " !== Xz.text || "icon" !== (null === (Fz = zz[Wz + 1]) || void 0 === Fz ? void 0 : Fz.kind)) ? (sz.length > 0 && tz.push(sz), tz.push([Xz]), sz = []) : sz.push(Xz)
      }
      return sz.length > 0 && tz.push(sz), tz
    }
  },
  36164: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Wz
    });
    const Fz = [{
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

    function Wz(zz, tz, sz) {
      const Wz = Math.abs(zz - tz),
        Xz = Date.now() - sz;
      for (const Oz of Fz)
        if (zz < Oz.maxDist) return Wz >= Oz.hardUpdateDist || Xz > Oz.timeBetweenSoftChecks && Wz >= Oz.softUpdateDist;
      return !1
    }
  },
  36346: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Oz,
      d: () => Xz,
      h: () => Wz
    });
    const Fz = [.25, .5, 1, 2, 4, 8, 16];

    function Wz(zz, tz) {
      const sz = Fz;
      let Wz = sz.indexOf(zz);
      return -1 === Wz && (Wz = sz.findIndex((tz => tz >= zz)), -1 === Wz && (Wz = sz.length - 1)), "up" === tz ? sz[Math.min(Wz + 1, sz.length - 1)] : sz[Math.max(Wz - 1, 0)]
    }

    function Xz(zz) {
      return zz <= Fz[0]
    }

    function Oz(zz) {
      return zz >= Fz[Fz.length - 1]
    }
  },
  36405: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Fz,
      h: () => Wz
    });
    const Fz = "data-replay-ui-active",
      Wz = [{
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
  36407: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Uz,
      e: () => uz,
      i: () => Kz
    });
    var Fz = sz(30),
      Wz = sz(34),
      Xz = sz(36405);

    function Oz() {
      const zz = {};
      for (const {
          group: tz
        }
        of Xz.h) zz[tz] = !0;
      return zz
    }
    let oz = Oz();

    function vz() {
      Wz.o.Yg("replayViewer|uiVisibilityChanged")
    }

    function Uz() {
      return oz
    }

    function Kz(zz, tz) {
      oz[zz] !== tz && (oz = {
        ...oz,
        [zz]: tz
      }, "nametag" === zz && Fz.b.set({
        areNametagsHidden: !tz
      }), vz())
    }

    function uz() {
      oz = Oz(), Fz.b.set({
        areNametagsHidden: !1
      }), vz()
    }
  },
  8897: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Oz,
      d: () => Wz,
      e: () => Kz
    });
    var Fz = sz(1521);

    function Wz(zz) {
      var tz;
      return {
        ...Oz.store,
        yaw: Oz.store.yaw + (null !== (tz = Fz.d[zz].previewYaw) && void 0 !== tz ? tz : 0)
      }
    }
    const Xz = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      Oz = {
        player: Xz,
        store: {
          ...Xz,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function oz(zz, tz) {
      zz instanceof Promise ? zz.then(tz).catch((zz => {
        console.error("Couldn't open the preview", zz)
      })) : tz(zz)
    }
    class vz {
      constructor(zz) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, oz(zz, (zz => {
          this.closed ? zz.close() : (this.opened = zz, null !== this.size && zz.resize(this.size.width, this.size.height), null !== this.view && zz.show(this.view))
        }))
      }
      show(zz) {
        var tz;
        this.view = zz, null === (tz = this.opened) || void 0 === tz || tz.show(zz)
      }
      resize(zz, tz) {
        var sz;
        this.size = {
          width: zz,
          height: tz
        }, null === (sz = this.opened) || void 0 === sz || sz.resize(zz, tz)
      }
      close() {
        var zz;
        this.closed = !0, null === (zz = this.opened) || void 0 === zz || zz.close(), this.opened = null
      }
    }
    class Uz {
      constructor(zz) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(zz).then((zz => zz.ready)), oz(zz, (zz => {
          this.closed ? zz.close() : (this.opened = zz, null !== this.size && zz.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var zz, tz;
        return null !== (zz = null === (tz = this.opened) || void 0 === tz ? void 0 : tz.isReady()) && void 0 !== zz && zz
      }
      setCosmetic(zz, tz) {
        var sz;
        null === (sz = this.opened) || void 0 === sz || sz.setCosmetic(zz, tz)
      }
      playEmote(zz) {
        var tz;
        null === (tz = this.opened) || void 0 === tz || tz.playEmote(zz)
      }
      setOrbit(zz) {
        var tz;
        null === (tz = this.opened) || void 0 === tz || tz.setOrbit(zz)
      }
      resetCamera() {
        var zz;
        null === (zz = this.opened) || void 0 === zz || zz.resetCamera()
      }
      async untilDrawn(zz) {
        var tz;
        await this.ready, await (null === (tz = this.opened) || void 0 === tz ? void 0 : tz.untilDrawn(zz))
      }
      resize(zz, tz) {
        var sz;
        this.size = {
          width: zz,
          height: tz
        }, null === (sz = this.opened) || void 0 === sz || sz.resize(zz, tz)
      }
      close() {
        var zz;
        this.closed = !0, null === (zz = this.opened) || void 0 === zz || zz.close(), this.opened = null
      }
    }
    const Kz = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(zz) {
        this.host = zz
      }
      setDefaultHost(zz) {
        this.makeDefault = zz
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(zz) {
        return new vz(this.current().openMob(zz))
      }
      openPet(zz) {
        return new vz(this.current().openPet(zz))
      }
      openMobLineup(zz) {
        return new vz(this.current().openMobLineup(zz))
      }
      openCharacter(zz, tz) {
        return new Uz(this.current().openCharacter(zz, tz))
      }
    }
  },
  8891: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Fz.b,
      c: () => Fz.d,
      f: () => Fz.e
    });
    var Fz = sz(8897);
    class Wz {
      constructor(zz) {
        this.load = zz, this.loaded = null, this.loading = null
      }
      run(zz) {
        return null !== this.loaded ? zz(this.loaded) : (this.loading ??= this.load().then((zz => (this.loaded = zz, zz)), (zz => {
          throw this.loading = null, zz
        })), this.loading.then(zz))
      }
    }
    class Xz {
      constructor() {
        this.mobScene = new Wz((() => Promise.all([sz.e(69), sz.e(226), sz.e(225), sz.e(244), sz.e(94), sz.e(245), sz.e(72), sz.e(71), sz.e(242), sz.e(70), sz.e(252), sz.e(246), sz.e(251), sz.e(249), sz.e(241), sz.e(218), sz.e(264), sz.e(222), sz.e(236), sz.e(247), sz.e(250), sz.e(74), sz.e(196), sz.e(215), sz.e(219), sz.e(93), sz.e(113), sz.e(234), sz.e(73), sz.e(112), sz.e(153)]).then((() => sz(40173))))), this.characterScene = new Wz((() => Promise.all([sz.e(69), sz.e(226), sz.e(225), sz.e(244), sz.e(94), sz.e(245), sz.e(72), sz.e(71), sz.e(242), sz.e(70), sz.e(252), sz.e(246), sz.e(251), sz.e(249), sz.e(241), sz.e(218), sz.e(264), sz.e(222), sz.e(236), sz.e(247), sz.e(250), sz.e(74), sz.e(196), sz.e(215), sz.e(219), sz.e(93), sz.e(113), sz.e(234), sz.e(73), sz.e(112), sz.e(152)]).then((() => sz(40255)))))
      }
      openMob(zz) {
        return this.mobScene.run((tz => tz.openMobPreview(zz)))
      }
      openPet(zz) {
        return this.mobScene.run((tz => tz.openPetPreview(zz)))
      }
      openMobLineup(zz) {
        return this.mobScene.run((tz => tz.openMobLineupPreview(zz)))
      }
      openCharacter(zz, tz) {
        return this.characterScene.run((sz => sz.openCharacterPreview(zz, tz)))
      }
    }
    Fz.e.setDefaultHost((() => new Xz))
  },
  36252: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Wz,
      g: () => Xz
    });
    const Fz = new Map;

    function Wz(zz) {
      var tz;
      return null === zz ? null : null !== (tz = Fz.get(zz)) && void 0 !== tz ? tz : null
    }

    function Xz(zz, tz) {
      return Fz.set(zz, tz), () => {
        Fz.get(zz) === tz && Fz.delete(zz)
      }
    }
  },
  36090: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Xz,
      e: () => Dz,
      i: () => gz,
      k: () => oz,
      m: () => Nz,
      p: () => Hz,
      r: () => uz,
      t: () => Pz,
      w: () => wz,
      z: () => Bz
    });
    var Fz = sz(30),
      Wz = sz(34);
    const Xz = "clientGameInventoryButtonsChanged",
      Oz = new Map;

    function oz() {
      return [...Oz.values()].sort(((zz, tz) => {
        var sz, Fz;
        return (null !== (sz = zz.order) && void 0 !== sz ? sz : 0) - (null !== (Fz = tz.order) && void 0 !== Fz ? Fz : 0)
      }))
    }
    let vz = null;

    function Uz(zz) {
      vz = zz
    }
    let Kz = !1;

    function uz(zz) {
      Kz = !0;
      try {
        zz.onClick()
      } finally {
        Kz = !1
      }
      zz.panel && "clientGame" === Fz.b.get("openInGameMenuName") && Uz(zz.id)
    }

    function Nz() {
      return Kz
    }

    function bz() {
      return oz().filter((zz => zz.panel && !zz.disabled))
    }

    function wz(zz) {
      const tz = bz(),
        sz = tz.findIndex((zz => zz.id === vz));
      return !(sz < 0 || tz.length < 2) && (uz(tz[(sz + zz + tz.length) % tz.length]), !0)
    }

    function Dz() {
      return null !== vz && bz().length > 1
    }

    function gz() {
      Uz(null)
    }

    function Hz() {
      "inventory" !== Fz.b.get("openInGameMenuName") && Uz(null)
    }

    function Bz() {
      const zz = vz;
      return Uz(null), zz
    }

    function Pz(zz) {
      return Oz.set(zz.id, zz), Wz.o.Yg(Xz, oz(), !0), () => {
        Oz.get(zz.id) === zz && (Oz.delete(zz.id), Wz.o.Yg(Xz, oz()))
      }
    }
  },
  36086: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => oz,
      h: () => gz,
      j: () => Hz,
      l: () => Nz,
      o: () => Uz,
      s: () => Dz,
      w: () => bz,
      x: () => Kz
    });
    var Fz = sz(30),
      Wz = sz(34),
      Xz = sz(1269),
      Oz = sz(36090);
    const oz = "clientGameUiChanged";
    let vz = null;

    function Uz() {
      return vz
    }

    function Kz(zz, tz) {
      const sz = {
        content: zz,
        menu: tz
      };
      return vz = sz, Wz.o.Yg(oz, vz, !0), () => {
        vz === sz && (vz = null, wz = !1, gz(), Wz.o.Yg(oz, null))
      }
    }
    let uz = null;

    function Nz() {
      return uz
    }

    function bz(zz) {
      return uz = zz, () => {
        uz === zz && (uz = null)
      }
    }
    let wz = !1;

    function Dz() {
      const zz = Fz.b.get("openInGameMenuName");
      "clientGame" !== zz && (wz = "inventory" === zz), (0, Oz.m)() || (0, Oz.i)(), (0, Xz.n)(Xz.c), Fz.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function gz() {
      Bz(!1)
    }

    function Hz() {
      Bz(wz)
    }

    function Bz(zz) {
      "clientGame" === Fz.b.get("openInGameMenuName") && Fz.b.set({
        openInGameMenuName: zz ? "inventory" : null
      }), zz || (0, Oz.i)(), wz = !1
    }
  },
  36366: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => zs,
      e: () => Et
    });
    var Fz = sz(3926),
      Wz = sz(580),
      Xz = sz(3417),
      Oz = sz(3437),
      oz = sz.n(Oz);
    const vz = new Set(["nameTagInfo", "multilineTextBox", "animationScript", "content", "skyBox", "opts", "fromBlockData", "toBlockData", "sharedBlockData"]),
      Uz = "EV_boolean",
      Kz = "EV_double",
      uz = "EV_string",
      Nz = "EV_doubleArr",
      bz = "EV_armour",
      wz = "EV_other",
      Dz = "EV_cosmetics",
      gz = "OEV_boolean",
      Hz = "OEV_int",
      Bz = "OEV_double",
      Pz = "OEV_string",
      rz = "OEV_stringArr",
      Yz = "OEV_meshScaling",
      xz = "IV_int",
      mz = "IV_string",
      Jz = "IV_doubleArr",
      Iz = "IV_double",
      Cz = "HV_int",
      ez = "HV_slots",
      Zz = "EnvV_string",
      Gz = "EnvV_double",
      Tz = "EnvV_doubleArr",
      cz = "EnvV_boolean",
      jz = {
        type: uz,
        name: uz,
        position: Nz,
        rotation: Nz,
        scale: Kz,
        speed: Kz,
        jumping: Uz,
        crouching: Uz,
        cameraPitch: Kz,
        armSwinging: Uz,
        heldItemName: uz,
        heldItemEnchantmentTier: uz,
        pose: uz,
        followingEId: uz,
        ridingVehicleEId: uz,
        leaderboardTop: uz,
        meshKind: uz,
        meshOpts: uz,
        followingOffset: Nz,
        shouldMatchFollowingEntityRotation: Uz,
        meshOffset: Nz,
        baseRenderHeading: Kz,
        armour: bz,
        bC: wz,
        playerCustomisations: Dz,
        variation: uz,
        metaInfo: uz,
        soundName: uz,
        volume: Kz,
        refDistance: Kz,
        maxHearDist: Kz,
        rate: Kz,
        aiState: uz
      },
      Az = {
        opacity: Bz,
        zIndex: Hz,
        overlayColour: Pz,
        canSee: gz,
        meshScaling: Yz,
        nameTagInfo: Pz,
        multilineTextBox: Pz,
        hasPriorityNametag: gz,
        ranks: rz,
        nameColour: Pz,
        _isAlive: gz,
        _invisibleEffect: gz,
        _invincible: gz,
        killfeedColour: Pz,
        hideNameSeed: Hz,
        _glowingEffect: gz,
        lockHeadToBody: gz
      },
      yz = {
        itemName: mz,
        amount: xz,
        position: Jz,
        size: Iz,
        attributes: mz
      },
      Mz = {
        skyBox: Zz,
        fogColourOverride: Zz,
        fogChunkDistanceOverride: Gz,
        cameraTint: Tz,
        fogOnSkybox: cz,
        fogBlockDistanceOverride: Gz
      },
      dz = {
        type: "array",
        items: "double"
      },
      hz = {
        type: "array",
        items: "int"
      },
      Qz = {
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
      kz = {
        type: "map",
        values: dz
      };

    function iz(zz, tz) {
      return {
        type: "record",
        name: zz,
        fields: [{
          name: "x",
          type: tz
        }]
      }
    }
    const Lz = {
        type: "array",
        items: {
          type: "record",
          name: "OtherEntityDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", iz(gz, "boolean"), iz(Hz, "int"), iz(Bz, "double"), iz(Pz, "string"), iz(rz, {
              type: "array",
              items: "string"
            }), iz(Yz, kz)]
          }]
        }
      },
      lz = {
        type: "array",
        items: {
          type: "record",
          name: "EntityDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", iz(Uz, "boolean"), iz(Kz, "double"), iz(uz, "string"), iz(Nz, dz), iz(bz, Qz), iz(wz, Lz), iz(Dz, {
              type: "map",
              values: "string"
            })]
          }]
        }
      },
      nz = {
        type: "array",
        items: {
          type: "record",
          name: "ItemDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", iz(xz, "int"), iz(mz, "string"), iz(Iz, "double"), iz(Jz, dz)]
          }]
        }
      },
      az = {
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
      qz = {
        type: "record",
        name: "HotbarDeltaEntry",
        fields: [{
          name: "i",
          type: "int"
        }, {
          name: "v",
          type: ["null", iz(Cz, "int"), iz(ez, az)]
        }]
      },
      Sz = {
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
      Vz = {
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
      Rz = {
        type: "array",
        items: {
          type: "record",
          name: "EnvironmentDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", iz(Zz, "string"), iz(Gz, "double"), iz(Tz, dz), iz(cz, "boolean")]
          }]
        }
      },
      pz = [{
        name: "HJ",
        type: "record",
        fields: [{
          name: "pos",
          type: hz
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
          type: hz
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
      fz = [{
        name: "playSound",
        type: "record",
        fields: [{
          name: "SW",
          type: "string"
        }, {
          name: "volume",
          type: "double"
        }, {
          name: "rate",
          type: "double"
        }, {
          name: "pW",
          type: ["null", {
            type: "record",
            name: "SoundPosSettings",
            fields: [{
              name: "fW",
              type: ["null", "string", dz],
              default: null
            }, {
              name: "EW",
              type: ["null", "double"],
              default: null
            }, {
              name: "zX",
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
          name: "GX",
          type: "string"
        }, {
          name: "TX",
          type: "int"
        }, {
          name: "animationScript",
          type: ["null", "string"]
        }, {
          name: "cX",
          type: "double"
        }, {
          name: "jX",
          type: "double"
        }]
      }, {
        name: "bullet",
        type: "record",
        fields: [{
          name: "PF",
          type: "string"
        }, {
          name: "bulletDirections",
          type: {
            type: "array",
            items: dz
          }
        }]
      }, {
        name: "lifeformHealth",
        type: "record",
        fields: [{
          name: "vt",
          type: "string"
        }, {
          name: "Lt",
          type: ["null", "double"],
          default: null
        }, {
          name: "lt",
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
          name: "pX",
          type: "double"
        }, {
          name: "angle",
          type: "double"
        }, {
          name: "fX",
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
      Ez = [{
        name: "position",
        type: dz
      }, {
        name: "direction",
        type: dz
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

    function zt() {
      const zz = [{
        name: "entities",
        type: {
          type: "map",
          values: lz
        }
      }, {
        name: "items",
        type: {
          type: "map",
          values: nz
        }
      }, {
        name: "camera",
        type: {
          type: "record",
          name: "ReplayCameraState",
          fields: Ez
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
              items: qz
            }
          }]
        }],
        default: null
      }, {
        name: "playerHud",
        type: ["null", Sz],
        default: null
      }];
      return zz.push({
        name: "effects",
        type: ["null", {
          type: "array",
          items: {
            type: "record",
            name: "ReplayActiveEffect",
            fields: [{
              name: "vt",
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
      }), zz.push({
        name: "uiElements",
        type: Vz
      }, {
        name: "environment",
        type: Rz
      }, {
        name: "structuralEvents",
        type: {
          type: "array",
          items: pz
        }
      }, {
        name: "ephemeralEvents",
        type: {
          type: "array",
          items: fz
        }
      }), zz
    }
    const tt = {
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
                name: "wN",
                type: "int"
              }, {
                name: "position",
                type: dz
              }, {
                name: "direction",
                type: dz
              }, {
                name: "easing",
                type: dz
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
    let st;

    function Ft(zz) {
      if (9 === zz) return st ??= (tz = [{
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
            name: "iJ",
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
              type: hz
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
            fields: zt()
          }
        }
      }, tt], oz().Type.forSchema({
        type: "record",
        name: "RecordingState",
        fields: tz
      }, {
        Zb: Object.create(null)
      })), st;
      var tz
    }
    var Wt = sz(36373);
    let Xt, Ot, ot, vt;
    const Ut = 12;
    var Kt, ut;
    const Nt = [0, 1, 8, 255, "length", "undefined", 63, 6, "fromCodePoint", 7, 12, "push", 91, 8191, 88, 13, 14, 3, 127, 1023, 65536, 10, 55296, 56320, 128, 16, 31, 15, 18, 192, 224, 240, !1, 162, 4, 163, 164, !0, 159, 33554432, 2, 67108864, 5, 11, 9, null];

    function bt(zz) {
      return typeof Kt[zz] === Nt[5] ? Kt[zz] = function(zz) {
        var tz, sz, Fz, Wz, Xz, Oz, oz;
        for (gt(tz = "" + (zz || ""), sz = tz.length, Fz = [], Wz = Nt[0], Xz = Nt[0], Oz = -Nt[1]), oz = Nt[0]; oz < sz; oz++) {
          var vz = 'uPAalVFBrHbCJk_t=("+^0IKhj$fD>RW6~xiX|mg#G,5`v.[pd]q2?}1cLQ&o)8*:M7!NwS%3<{EYeOn/Tys@U94Zz;'.indexOf(tz[oz]);
          if (vz !== -Nt[1])
            if (Oz < Nt[0]) Oz = vz;
            else {
              gt(Oz += vz * Nt[12], Wz |= Oz << Xz, Xz += (Oz & Nt[13]) > Nt[14] ? Nt[15] : Nt[16]);
              do {
                gt(Fz.push(Wz & Nt[3]), Wz >>= Nt[2], Xz -= Nt[2])
              } while (Xz > Nt[9]);
              Oz = -Nt[1]
            }
        }
        return Oz > -Nt[1] && Fz.push((Wz | Oz << Xz) & Nt[3]), wt(Fz)
      }(ut[zz]) : Kt[zz]
    }

    function wt(zz) {
      return typeof Ws !== Nt[5] && Ws ? (new Ws).decode(new Xs(zz)) : typeof Os !== Nt[5] && Os ? Os.from(zz).toString("utf-8") : Us(zz)
    }

    function Dt() {}

    function gt() {
      gt = function() {}
    }
    var Ht, Bt;
    gt(Kt = {}, ut = ['}_/HTX3"nr9trt0GGq|bQqCkdo)d=spx3q*<*x%L.C^kwlA|*&`BKUcNTtNSP', "Q&o1kX/FJ_M/9wlm%MK<j2w>F", "h}RD/{92S+Q_1_GgS8#H*@`h/*=FDsEmox12MonBF", 'f}]3o@c2Y(HK6%<+>%]63Yp9/"sjla!(a*!]qQHPyHbNKa!(6NrHWO<qQ&i', 'CN]qviZ.(tMjzp:"B.Ee_w;2D_Fy,|Vj_|q>N.gP', "Y8x6tLcA", ";cBHbX)[r^KMP", '1NtH(TFr`?:S7dPhF*@{dNrr4kh1]jS"xLJbZ~u', '!K%Hyv~wH(I^]kIx9SE>q|,hYrj3f&"D%|jqkpmA', "gHo?]|##&rgBpsv+zg_YC9J.XH#DlaPh@qIWV3^ATo$(lsoR", 'hN|D.|YxALo7m|F|E^oe(mAR8rydYs9I$xPFpN)GM"0nP', 'TDD{UL(PN+S<n_^x6q&r~}AXp"?/B%#m3M5{~}K?f^U!Bs*K', 'm}02`Noh>7|n5yjK1a/<^sH?a}`Y634G+}e$_Tx"d""MJszGxLvl', "^oP}[EZ.B", ">5QqCTPi.r^EamPh^P", "gLHO?@f?/Le.aSi(t%$Ea./95CJ1f]6h:8V]R%c2(H<.P", "dL@VSx`R3Q=y/&.#3cw]{wh.vrZ{Q|]x,82{Le]QOr(xP", "N(.1g<Y2a}%dxVB", "H|IlI#=2E(se4[b", ")(h~Y8HG@H~WQwlmDP", "XL768o>>>_JnRVi|XHsr~/:RX}kyMlbWf5wbJmWEMHpi@iARopUW0]fic(", "$M|l3oJXWJanKAK>>t`>4]Ir,Mdd$VhiRKG}lxoA", "n<Ee~N~G:?fMSkLD/_=H31t[h(p<pa6RqL*2VX,Jv?{SUpIG>P", "M}vbU]f+Q_k1d=%|5%_~OLXRO&A33tpx", "f#!>W%P4)CG&^aYmN(RWL.uQHb3S[me+8&4F4%*Lh^W&xVF", "=%%d+%EB&M}S8_>>}$a", 'kd!?Cs2"NH^fWm/#]v|{yw@/cQ%<o&i"7#*2jsJra', 'l>uFVoVGAJFA0o`g}MbfzYtj]}j(pt~"`^a', 'A7OWTX@Jy*jQKmJ^rlY]STMqO?,BoaG"9&>19%IA', "}}e{ys4w6oh3!mr", '=%#}{m&i=JHQqmu5=L@$*1`2~"=R1SXh"P', "~}RWX)c.#Ql}$VMKZr>W}3I2.cD3/36hiN}dJX98Pt63fAo,}FnH", '|Kr~>2WL=*>Bct;IoM;q>/[ig:s69jDG(Ld6~/SFD8CM`s!"^qXW{w0P', "Xqw$Im0[#k36u%@xL&F2sv&U$^Yl<hcD9p!r;2SR&&~&;w^x0LU$$2&wl", "<as>X}8Fz(&dt$X(b63}|&zU7}ZoV3ij_$vb(80i_0", "k6#FrTt?=HMiltkfg$*dmUu", "%}1H;mTP1^", "/cz6y8ZNe&b3P", "?^){(wB+u*F[Rd2DttSDh", "oWobyOtj~tCyNa}D6L/}n]i+4^H3FT5m)aA", "RMG3HX8J$8seCA", "|a2bh]u", "0%ZqPX{JYM}ShX6RR#lV6itPs}L<P", 'yF_12gJ2THm<w39Db"O%MX#:R7G&=t`$<F#HdEu', 'b%(E?@?P<8zeY%Eml{F2n8.#l:"R)lY$?vId]Q@25_o/4a', 'P}"3eLdUk&^Yx|k', 'w}Z<OmFrn"gY{T_^%|f6V?$ra+4oZsW|I.42f', "=$(ORO%GTtw/bV", ';COD;}8R.Ci3SSyDFlUBB1]"(LIWzhFm1L>2|UZ8?+3e:38X~Lv1@8*P', "mJD>}QoNwk3SW]DX^oP}{wtjEC", 'UqmW)@Vjv"/j4A9=2Ma', "J#N?h#8{qH", 'pWGf5*r"^}sc:&$>}MwWzslhttxxx|b', 'Z8OW/{D9T*Q7tA3"koD{ZYA9Z^8<_y&,', "}_S1Mo2/5Mc_=s=$sjjF", "5W(Ovd9.}Q3o:tHj/x/FpS~*Q^{lj3mj|aa", "&#+eyTDX~Jg<Qj>(UjuR]E&Pe8a}YfK>g{l]zO5BHQeentGgC5A", "`qC{u@q+R*RW;w8X?}N>jsBTFQcSf_C", "0{b3{8Ui6*%dufqfW5Xb>%;xk8T!u@O$>%l]+L[[4^$1Ow0G", "3pr}2y_Xl", 'a"kB78EkL8<.csx([$>bkYLk~*]_+$5+sS{?a.GP', "{,i6hm_hB", 'nW%2BnF.7+,wCy~WQ84HSp2"f^}SiSu"?}tO[EpA', "$MrO.yNF@:yVL=uRL((}t1%L(*</<T4GRHO2pyu", "sM,E;L`/Or[0$VN|+6}WpQEP4^sSts0G}K|W2@lRI+9e8mt$yu", "DN[dx<@J&&e?{wAX*8e$FxEP60[(&mfK?Lg}+", "^o01h%Ki6*%*UX=g#8OD_p?kEMlN<XA(Su", "R#U%5*Mqrbd<oXqx]^8Wnv8R[crp_V~RDK4d(wk[7}=NP))>qu", "q^76+TC+t*TT6[C+rd(Rpg|Bntb}yjaR3_9Y)nV?PL.<}m7|f#a", 'D^:F|/l,:"&&Up`g`qa', "[L!?M@j>aJsVofij>o!?D[u", 'M}?{^wA,xJ6wf]x"#L?2&x{#D0|w9wW|uL_11eu', '("]fIwww2:t|#[1>XpdF.|6{!+sV0p#WGL53OY".3k7<H)V+1MA', "f#b3L@HPO?v<(o|jw|mD^mqP", "OCY$Sn++,(SeHVR>", "`|HFd*{#)8oDW_>iH{cdD[ZJ_0olP", "a71DHp&wML)7s$b", "!,f3]dQ#MofB`[#+yxa", "h.Rd%ouRerc", "tJ0bXOm2xoAfP", "R.%D/X#2V", "+L@>,Sg[PLPEmkc,H|w$r9L[uoX", '+.L}ZLX:sH%eI$mW5%sr/]q>[ruO*_d#_.!r5/SQR0>8gm=x<v">%?YJhk', "m}7V)xEBr(5(_V", 'ON/d}*`/rQ(n^fE$qH[Y!3)iM"P|P', 'LHjFnL%>xovwZlQ>Qp`1x)7"OC8"zl', "ZCtHpyO#Ec>w!mV+O<OWETc2T*ZT`[mmY8U{nTu", 'A5"Ek{WiV:d<,kxK,Mj6U2F2:o]h@[&G(H?B(', 'U<)B`yD"/*?YkVAh%NvDN?tkToUJim8h', "$N2bTX#X[*5/EtiR(LWDQ@}Q5(!_x|H", "UW2>mcnqK^V[xj@xS|*dOwNJ;(o7ugA|{([lHpP?M*3.DfZ=|Ncd@m)k`r1", "ZMY>[|F2fM!c=fLx.q>1{]1i2k,", "|$*<Bo<q#^kM$dBWnC*YdE([F", "*}3}W[kj&8K(9w>Xko;>t1*[[0IQcswhwW#F8?j>a:h8(3)>K6a", "^{.l02%wt09e5f+xWL`>+", '3NO<G/?B.&m_3f~WK#~EjOq+0QiY7m6KkdU]={(?{(&/*txR$.]6C{".^H', "=tm1A8DA58QSm_{WSWrOJ", "7KhH[yv[f8se5[?fMq!]_wIr&Mw*n$MXyS.D+w}/PH`lm|ij", "{qwb62jEIQ_NNXdfeW1<lxt?R0`", 'J*1HjmLkP76nG=L,J6"6=Xf[v"UcJsg|eFm17@?K3^e{gab^', 'DHS2g)A"y*~wP', '(tY$_1:"@k@!@sP(@gV1@v(+:H{<7m$,m5e%ZL5B#(4!wTA(9,mYh', "Yc@>.SP48c5/Y37Rg^#F:{Z#do*iP", "u01DY{jBd}#10oi|l>6<de`R]o2wh&Cgdu", ":q@Vym(?ecBkLh<WVd]r%X?G&_jbv3dg", "aHEVYwK?{^@r_|Ah0McF8gyJ/*)eNoSm,K~FT~f[TtT6P", "^oC{f%bX<MMe{j[fUx7qrx<k.raF@iF", '6p~F"L8J,(L<n_1G7pA>S]m2Y_ee5&lRv|!>D}bhqH/TZ%K>Ycbe$', "0Hie*.5+]*BE[[LGAiU{qqhh.t2", "{8s?;m@JH8_ySjfGOvrE^sUByHX", "9&Je%]c/PL#iH@DK3c.1]elS{^.dxkZ>`FwBM1&k[rrq|3F", "2$Xeys29*tDn[to(Xo_BJplr$_", 'TW`eYp5+F+kKpfSh4DQq"ssi#(n?`fJ^kd0Y.yH+rM/*B${WfP', "RNG3y];J=7M.u%?i9^$3fUXJ_t5iOTfip|:}oxm2/H]", "llGRF{wBH_F[+A2x*&|Y0U`.z(", '}^hR"OS2$^3e0pQ>', "e8q?^]zB7LM?[y,j]$p}U2DJ]H8B]j1D+}P", "d$z}8@M*P*(hx|*,vK>BATtwEMIYu", "lN/q><~[lHj1J%LDudU$v*br$_cS7|L>VlHRE]=2M}I^4$^fVHB2h", 'a0=RbLVkT"mn#sRXcv.d1QtTO"IFYtm"', 'LNi6Le"A', "}V2pZnaW", "bfkYp", "}SQ*}.=H", "<Z4p9z{O", "YYxP1", "`qb,>*@B", "kP:?pNpW", "jT:9;Fu*", "w^){s$b*", "Ly9cTtI", "qcWi,{N*", "cPzR([H*", ']X)`"FY*', "]X]9c", '$`+N?nL[RPhz.1BJ"`9!1kv', "r:GRgt8lsm`Sa/Qwk!u3x8,n$T)_}|U", "o)2|1[/wh*7>{LItU)gbL~A", 'TB*et4>L]`;vwGW3R^SgC>r1"c&(DuV', "xuqko)Vze?6}_fs.~G]HjV&c!X=tCw|", "d2.vu&Lf[X7Nvq}jn9.Jv*:f&dX", "m10v<iq", "_W8.h!tX", "}1lK", '*N"9da0W', "+BMNy][v4&Ar1", "A!di`Y/akfYD1", "G?uDTpuuV5&rH", "bmO|jYMZ6z", "muc{3=3ExGW", "l8KYR#mFlx(", "3MIBeXpKf*(", "/}#%o~Cr1Vq", "2pgI~5m8_6p", "~X1h~vN]>W(", "W8)I1[NCS", "RLJ_U+$Ak?@I>}K_W8X%qT`rm/t(iEZeMiG).dc[t/**iEV<O3ENZ~CG03E^H", "fH}*4j+Vg/y$7$%mH}]%&Tbupgup6F}z`iG)8~t5%4FQ}FU<w}bYE5zyZ*T+1", "ZiG)D,tV8*H0<F?mttn%5[]r&*>pPF:6Ntn%f$=rh7up6F1V=ipN0>AusBO91", "JOcbK3~j", "y3fi87Qj", "9b^Nn", "RoHV", "Gofia]1j", "kbyE", "Xol%!,{j", "~z$NT(dj", "!c]R", "aY@*", "XcZ0JzYj", "@*S]2P7U"]), gt(Fs = function() {
      var zz, tz, sz, Fz = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }];
      gt(zz = void 0, tz = []);
      try {
        gt(zz = Object, tz[Nt[11]]("".__proto__.constructor.name))
      } catch (Xs) {}
      zz: for (sz = Nt[0]; sz < Fz[Nt[4]]; sz++) try {
        var Wz;
        for (zz = Fz[sz](), Wz = Nt[0]; Wz < tz[Nt[4]]; Wz++)
          if (typeof zz[tz[Wz]] === Nt[5]) continue zz;
        return zz
      } catch (Xs) {}
      return zz || this
    }() || {}, Ws = Fs.TextDecoder, Xs = Fs.Uint8Array, Os = Fs.Lw, os = Fs.String || String, vs = Fs.Array || Array, Us = function() {
      var zz, tz, sz = new vs(Nt[24]);
      return gt(zz = os[Nt[8]] || os.fromCharCode, tz = []),
        function(Fz) {
          var Wz, Xz, Oz, oz;
          for (gt(Xz = void 0, Oz = Fz[Nt[4]], tz[Nt[4]] = Nt[0]), oz = Nt[0]; oz < Oz;) gt(Xz = Fz[oz++], Xz <= Nt[18] ? Wz = Xz : Xz <= 223 ? Wz = (Xz & Nt[26]) << Nt[7] | Fz[oz++] & Nt[6] : Xz <= 239 ? Wz = (Xz & Nt[27]) << Nt[10] | (Fz[oz++] & Nt[6]) << Nt[7] | Fz[oz++] & Nt[6] : os[Nt[8]] ? Wz = (Xz & Nt[9]) << Nt[28] | (Fz[oz++] & Nt[6]) << Nt[10] | (Fz[oz++] & Nt[6]) << Nt[7] | Fz[oz++] & Nt[6] : (Wz = Nt[6], oz += Nt[17]), tz[Nt[11]](sz[Wz] || (sz[Wz] = zz(Wz))));
          return tz.join("")
        }
    }()), (() => {
      function zz(zz) {
        return typeof Kt[zz] === Nt[5] ? Kt[zz] = function(zz) {
          var tz, sz, Fz, Wz, Xz, Oz, oz;
          for (gt(tz = "" + (zz || ""), sz = tz.length, Fz = [], Wz = Nt[0], Xz = Nt[0], Oz = -Nt[1]), oz = Nt[0]; oz < sz; oz++) {
            var vz = 'AHWBZ*sE0d!tC%mfyoq:1XD5wKpxR?gb|k{IliT()r,c^S+F.U4O3VP&JN8MaLGhv7"jQnY@`}/#[9$u>_;2~]z=<e6'.indexOf(tz[oz]);
            if (vz !== -Nt[1])
              if (Oz < Nt[0]) Oz = vz;
              else {
                gt(Oz += vz * Nt[12], Wz |= Oz << Xz, Xz += (Oz & Nt[13]) > Nt[14] ? Nt[15] : Nt[16]);
                do {
                  gt(Fz.push(Wz & Nt[3]), Wz >>= Nt[2], Xz -= Nt[2])
                } while (Xz > Nt[9]);
                Oz = -Nt[1]
              }
          }
          return Oz > -Nt[1] && Fz.push((Wz | Oz << Xz) & Nt[3]), wt(Fz)
        }(ut[zz]) : Kt[zz]
      }
      const tz = Nt[25],
        sz = bt(120) + zz(121) + zz(122),
        Fz = [Nt[0], Nt[1], Nt[40], Nt[17]].map((tz => {
          zz(123);
          let Fz = Nt[0];
          for (let Wz = Nt[17]; Wz >= Nt[0]; Wz--) {
            function Xz(zz) {
              var tz, sz, Fz, Wz, Xz, Oz, oz;
              for (gt(tz = "" + (zz || ""), sz = tz.length, Fz = [], Wz = Nt[0], Xz = Nt[0], Oz = -Nt[1]), oz = Nt[0]; oz < sz; oz++) {
                var vz = '5KOjCPo]^uraBT(YL.}|i#RZmh%,+1`6>3*envE9{~&Ubq$z)dMf4p<GDF_S"0H/72I[xt;Vcy?s:!Ql@kN=X8AwJgW'.indexOf(tz[oz]);
                if (vz !== -Nt[1])
                  if (Oz < Nt[0]) Oz = vz;
                  else {
                    gt(Oz += vz * Nt[12], Wz |= Oz << Xz, Xz += (Oz & Nt[13]) > Nt[14] ? Nt[15] : Nt[16]);
                    do {
                      gt(Fz.push(Wz & Nt[3]), Wz >>= Nt[2], Xz -= Nt[2])
                    } while (Xz > Nt[9]);
                    Oz = -Nt[1]
                  }
              }
              return Oz > -Nt[1] && Fz.push((Wz | Oz << Xz) & Nt[3]), wt(Fz)
            }

            function Oz(zz) {
              return typeof Kt[zz] === Nt[5] ? Kt[zz] = Xz(ut[zz]) : Kt[zz]
            }
            Fz = Fz << Nt[2] | sz[Oz(124) + Oz(125)](tz * Nt[34] + Wz)
          }
          return Fz >>> Nt[0]
        })),
        Wz = (zz, tz) => (function(zz) {
          return typeof Kt[zz] === Nt[5] ? Kt[zz] = function(zz) {
            var tz, sz, Fz, Wz, Xz, Oz, oz;
            for (gt(tz = "" + (zz || ""), sz = tz.length, Fz = [], Wz = Nt[0], Xz = Nt[0], Oz = -Nt[1]), oz = Nt[0]; oz < sz; oz++) {
              var vz = '%BZg#JfR"A[?To5I4}zm(=Das)jN.ku,pwq7:LrCFdl^Q@>/x;`KM9O]y!1Gi~+HYXtS*&2We8_cn6E$V<3{v0bh|PU'.indexOf(tz[oz]);
              if (vz !== -Nt[1])
                if (Oz < Nt[0]) Oz = vz;
                else {
                  gt(Oz += vz * Nt[12], Wz |= Oz << Xz, Xz += (Oz & Nt[13]) > Nt[14] ? Nt[15] : Nt[16]);
                  do {
                    gt(Fz.push(Wz & Nt[3]), Wz >>= Nt[2], Xz -= Nt[2])
                  } while (Xz > Nt[9]);
                  Oz = -Nt[1]
                }
            }
            return Oz > -Nt[1] && Fz.push((Wz | Oz << Xz) & Nt[3]), wt(Fz)
          }(ut[zz]) : Kt[zz]
        }(126) in Dt && function() {
          var zz = function(zz) {
            var tz, sz, Fz, Wz, Xz = zz.length;
            for (gt(tz = [], sz = Nt[0]), Fz = Nt[0]; Fz < Xz; Fz++) tz.push(Fz !== Nt[0] && zz[Fz] > zz[Fz - Nt[1]] ? tz[Fz - Nt[1]] + Nt[1] : Nt[1]);
            for (Wz = Xz - Nt[1]; Wz >= Nt[0]; Wz--) Wz !== Xz - Nt[1] && zz[Wz] > zz[Wz + Nt[1]] && (tz[Wz] = Math.max(tz[Wz], tz[Wz + Nt[1]] + Nt[1])), sz += tz[Wz];
            return sz
          };
          console.log(zz)
        }(), zz << tz | zz >>> 32 - tz),
        Xz = (tz, sz, Fz, Xz, Oz) => {
          zz(Nt[18]) + "q" in Dt && function() {
            function tz(zz) {
              var tz, sz, Fz, Wz, Xz, Oz, oz, vz = 'vhXGPiHSKopNRqT1|Ym&0x<7D}s]tJ8.A2($>FOjWL56,4/"9Q?#[=~ywE@ku_M+ZIg{na^z!b:leB*cV)CU;rf%d3`';
              for (gt(tz = "" + (zz || ""), sz = tz.length, Fz = [], Wz = Nt[0], Xz = Nt[0], Oz = -Nt[1]), oz = Nt[0]; oz < sz; oz++) {
                var Uz = vz.indexOf(tz[oz]);
                if (Uz !== -Nt[1])
                  if (Oz < Nt[0]) Oz = Uz;
                  else {
                    gt(Oz += Uz * Nt[12], Wz |= Oz << Xz, Xz += (Oz & Nt[13]) > Nt[14] ? Nt[15] : Nt[16]);
                    do {
                      gt(Fz.push(Wz & Nt[3]), Wz >>= Nt[2], Xz -= Nt[2])
                    } while (Xz > Nt[9]);
                    Oz = -Nt[1]
                  }
              }
              return Oz > -Nt[1] && Fz.push((Wz | Oz << Xz) & Nt[3]), wt(Fz)
            }

            function sz(zz) {
              return typeof Kt[zz] === Nt[5] ? Kt[zz] = tz(ut[zz]) : Kt[zz]
            }! function(tz) {
              var sz, Fz, Wz, Xz;

              function Oz(zz) {
                var tz, sz, Fz, Wz, Xz, Oz, oz, vz = 'q2NGTVjfuQd^Sl(Zt;Y}H40#$z|{=OW9Xi?!cA+1B5JPMr)_pv:RC~8Dw,@E&/LI[UF%xs."7`Kbanky<e3g*]mo>h6';
                for (gt(tz = "" + (zz || ""), sz = tz.length, Fz = [], Wz = Nt[0], Xz = Nt[0], Oz = -Nt[1]), oz = Nt[0]; oz < sz; oz++) {
                  var Uz = vz.indexOf(tz[oz]);
                  if (Uz !== -Nt[1])
                    if (Oz < Nt[0]) Oz = Uz;
                    else {
                      gt(Oz += Uz * Nt[12], Wz |= Oz << Xz, Xz += (Oz & Nt[13]) > Nt[14] ? Nt[15] : Nt[16]);
                      do {
                        gt(Fz.push(Wz & Nt[3]), Wz >>= Nt[2], Xz -= Nt[2])
                      } while (Xz > Nt[9]);
                      Oz = -Nt[1]
                    }
                }
                return Oz > -Nt[1] && Fz.push((Wz | Oz << Xz) & Nt[3]), wt(Fz)
              }

              function oz(zz) {
                return typeof Kt[zz] === Nt[5] ? Kt[zz] = Oz(ut[zz]) : Kt[zz]
              }

              function vz(zz) {
                var tz, sz, Fz, Wz, Xz = [];
                for (gt(tz = Nt[0], sz = zz.length, Fz = void 0, Wz = void 0); tz < sz;) gt(Fz = zz.charCodeAt(tz++), Fz >= Nt[22] && Fz <= 56319 && tz < sz ? (64512 & (Wz = zz.charCodeAt(tz++))) == Nt[23] ? Xz.push(((Fz & Nt[19]) << Nt[21]) + (Wz & Nt[19]) + Nt[20]) : (Xz.push(Fz), tz--) : Xz.push(Fz));
                return Xz
              }

              function Uz(zz) {
                var tz, Fz, Wz, Xz = zz.length;
                for (gt(tz = -Nt[1], Fz = void 0, Wz = ""); ++tz < Xz;)(Fz = zz[tz]) > 65535 && gt(Fz -= Nt[20], Wz += sz(Fz >>> Nt[21] & Nt[19] | Nt[22]), Fz = Nt[23] | Fz & Nt[19]), Wz += sz(Fz);
                return Wz
              }

              function Kz(zz) {
                if (zz >= Nt[22] && zz <= 57343) {
                  function tz(zz) {
                    var tz, sz, Fz, Wz, Xz, Oz, oz, vz = 'IP*jGpmORQiJbWayHZA:8KF%EceMrftL9kXhV5!lN,6Tgd@#uz>^)`YvnBCUSqD1.7os+0|;$2"]/{_&[<?~w3x}(=4';
                    for (gt(tz = "" + (zz || ""), sz = tz.length, Fz = [], Wz = Nt[0], Xz = Nt[0], Oz = -Nt[1]), oz = Nt[0]; oz < sz; oz++) {
                      var Uz = vz.indexOf(tz[oz]);
                      if (Uz !== -Nt[1])
                        if (Oz < Nt[0]) Oz = Uz;
                        else {
                          gt(Oz += Uz * Nt[12], Wz |= Oz << Xz, Xz += (Oz & Nt[13]) > Nt[14] ? Nt[15] : Nt[16]);
                          do {
                            gt(Fz.push(Wz & Nt[3]), Wz >>= Nt[2], Xz -= Nt[2])
                          } while (Xz > Nt[9]);
                          Oz = -Nt[1]
                        }
                    }
                    return Oz > -Nt[1] && Fz.push((Wz | Oz << Xz) & Nt[3]), wt(Fz)
                  }

                  function sz(zz) {
                    return typeof Kt[zz] === Nt[5] ? Kt[zz] = tz(ut[zz]) : Kt[zz]
                  }
                  throw Error(sz(Nt[24]) + sz(129) + sz(130) + zz.toString(Nt[25]).toUpperCase() + (sz(131) + sz(132) + sz(133) + sz(134)))
                }
              }

              function uz(zz, tz) {
                return sz(zz >> tz & Nt[6] | Nt[24])
              }

              function Nz(zz) {
                var tz;
                return (4294967168 & zz) == Nt[0] ? sz(zz) : (tz = "", (4294965248 & zz) == Nt[0] ? tz = sz(zz >> Nt[7] & Nt[26] | Nt[29]) : (4294901760 & zz) == Nt[0] ? gt(Kz(zz), tz = sz(zz >> Nt[10] & Nt[27] | Nt[30]), tz += uz(zz, Nt[7])) : (4292870144 & zz) == Nt[0] && gt(tz = sz(zz >> Nt[28] & Nt[9] | Nt[31]), tz += uz(zz, Nt[10]), tz += uz(zz, Nt[7])), tz += sz(zz & Nt[6] | Nt[24]))
              }

              function bz(zz) {
                var tz, sz, Fz, Wz, Xz = vz(zz);
                for (gt(tz = Xz.length, sz = -Nt[1], Fz = void 0, Wz = ""); ++sz < tz;) gt(Fz = Xz[sz], Wz += Nz(Fz));
                return Wz
              }

              function wz() {
                var zz;

                function tz(zz) {
                  var tz, sz, Fz, Wz, Xz, Oz, oz, vz = 'z+HP{TNQ3qyVU^cx5r*,g6~7l(kbW@JZRo}I4wvB:?FKLdY.M/mu0hf1>#j`!|&$s)SACD[;ie8OtEa"_n<GX9=%]p2';
                  for (gt(tz = "" + (zz || ""), sz = tz.length, Fz = [], Wz = Nt[0], Xz = Nt[0], Oz = -Nt[1]), oz = Nt[0]; oz < sz; oz++) {
                    var Uz = vz.indexOf(tz[oz]);
                    if (Uz !== -Nt[1])
                      if (Oz < Nt[0]) Oz = Uz;
                      else {
                        gt(Oz += Uz * Nt[12], Wz |= Oz << Xz, Xz += (Oz & Nt[13]) > Nt[14] ? Nt[15] : Nt[16]);
                        do {
                          gt(Fz.push(Wz & Nt[3]), Wz >>= Nt[2], Xz -= Nt[2])
                        } while (Xz > Nt[9]);
                        Oz = -Nt[1]
                      }
                  }
                  return Oz > -Nt[1] && Fz.push((Wz | Oz << Xz) & Nt[3]), wt(Fz)
                }

                function sz(zz) {
                  return typeof Kt[zz] === Nt[5] ? Kt[zz] = tz(ut[zz]) : Kt[zz]
                }
                if (Xz >= Wz) {
                  function Oz(zz) {
                    var tz, sz, Fz, Wz, Xz, Oz, oz, vz = 'vIjimPSTFAtJwH&UM$*_?0)O[}q>ol9!NK.BEx:r`G/{]7QZ8"u%2(g;4#Yfe15Ryh6C@~D|pbLcnsdazX=+k3,^WV<';
                    for (gt(tz = "" + (zz || ""), sz = tz.length, Fz = [], Wz = Nt[0], Xz = Nt[0], Oz = -Nt[1]), oz = Nt[0]; oz < sz; oz++) {
                      var Uz = vz.indexOf(tz[oz]);
                      if (Uz !== -Nt[1])
                        if (Oz < Nt[0]) Oz = Uz;
                        else {
                          gt(Oz += Uz * Nt[12], Wz |= Oz << Xz, Xz += (Oz & Nt[13]) > Nt[14] ? Nt[15] : Nt[16]);
                          do {
                            gt(Fz.push(Wz & Nt[3]), Wz >>= Nt[2], Xz -= Nt[2])
                          } while (Xz > Nt[9]);
                          Oz = -Nt[1]
                        }
                    }
                    return Oz > -Nt[1] && Fz.push((Wz | Oz << Xz) & Nt[3]), wt(Fz)
                  }

                  function oz(zz) {
                    return typeof Kt[zz] === Nt[5] ? Kt[zz] = Oz(ut[zz]) : Kt[zz]
                  }
                  throw Error(oz(135))
                }
                if (gt(zz = Fz[Xz] & Nt[3], Xz++), (zz & Nt[29]) == Nt[24]) return zz & Nt[6];
                throw Error(sz(136))
              }

              function Dz() {
                var tz, sz, Oz, oz, vz;

                function Uz(zz) {
                  var tz, sz, Fz, Wz, Xz, Oz, oz, vz = 'xYRFcOrDJCP9~=5GMdbju!]IfBe_Nh|4v"ES8A^z2(0;T+?o/QX%gH7n)Z$q#U:>[6sk}`W*y,L1&iKw<3m.@aVt{lp';
                  for (gt(tz = "" + (zz || ""), sz = tz.length, Fz = [], Wz = Nt[0], Xz = Nt[0], Oz = -Nt[1]), oz = Nt[0]; oz < sz; oz++) {
                    var Uz = vz.indexOf(tz[oz]);
                    if (Uz !== -Nt[1])
                      if (Oz < Nt[0]) Oz = Uz;
                      else {
                        gt(Oz += Uz * Nt[12], Wz |= Oz << Xz, Xz += (Oz & Nt[13]) > Nt[14] ? Nt[15] : Nt[16]);
                        do {
                          gt(Fz.push(Wz & Nt[3]), Wz >>= Nt[2], Xz -= Nt[2])
                        } while (Xz > Nt[9]);
                        Oz = -Nt[1]
                      }
                  }
                  return Oz > -Nt[1] && Fz.push((Wz | Oz << Xz) & Nt[3]), wt(Fz)
                }

                function uz(zz) {
                  return typeof Kt[zz] === Nt[5] ? Kt[zz] = Uz(ut[zz]) : Kt[zz]
                }
                if (gt(tz = void 0, sz = void 0, Oz = void 0, oz = void 0, vz = void 0), Xz > Wz) throw Error(zz(137));
                if (Xz == Wz) return Nt[32];
                if (gt(tz = Fz[Xz] & Nt[3], Xz++), (tz & Nt[24]) == Nt[0]) return tz;
                if ((tz & Nt[30]) == Nt[29]) {
                  if (gt(sz = wz(), vz = (tz & Nt[26]) << Nt[7] | sz), vz >= Nt[24]) return vz;
                  {
                    function Nz(zz) {
                      var tz, sz, Fz, Wz, Xz, Oz, oz, vz = 'FHQZqcJWgkOEVApCITKrtlfoLiRPsMaNejDb<3Y2B+)U5#Xm?G`S7d{9,h!;^u8"]&v:x.6}y$>=4_w|(1~*z%0[/@n';
                      for (gt(tz = "" + (zz || ""), sz = tz.length, Fz = [], Wz = Nt[0], Xz = Nt[0], Oz = -Nt[1]), oz = Nt[0]; oz < sz; oz++) {
                        var Uz = vz.indexOf(tz[oz]);
                        if (Uz !== -Nt[1])
                          if (Oz < Nt[0]) Oz = Uz;
                          else {
                            gt(Oz += Uz * Nt[12], Wz |= Oz << Xz, Xz += (Oz & Nt[13]) > Nt[14] ? Nt[15] : Nt[16]);
                            do {
                              gt(Fz.push(Wz & Nt[3]), Wz >>= Nt[2], Xz -= Nt[2])
                            } while (Xz > Nt[9]);
                            Oz = -Nt[1]
                          }
                      }
                      return Oz > -Nt[1] && Fz.push((Wz | Oz << Xz) & Nt[3]), wt(Fz)
                    }

                    function bz(zz) {
                      return typeof Kt[zz] === Nt[5] ? Kt[zz] = Nz(ut[zz]) : Kt[zz]
                    }
                    throw Error(bz(138))
                  }
                }
                if ((tz & Nt[31]) == Nt[30]) {
                  if (gt(sz = wz(), Oz = wz(), vz = (tz & Nt[27]) << Nt[10] | sz << Nt[7] | Oz), vz >= 2048) return Kz(vz), vz;
                  {
                    function Dz(zz) {
                      var tz, sz, Fz, Wz, Xz, Oz, oz, vz = 'AhMlgXWsHByr|T+jRx{&oNF#zp~E1(:<k2Cvm.DQuU>YI7K/4f?]*9^O$Pb6GwJ!e=}ind%`S,V@)L_"tcaq8;503[Z';
                      for (gt(tz = "" + (zz || ""), sz = tz.length, Fz = [], Wz = Nt[0], Xz = Nt[0], Oz = -Nt[1]), oz = Nt[0]; oz < sz; oz++) {
                        var Uz = vz.indexOf(tz[oz]);
                        if (Uz !== -Nt[1])
                          if (Oz < Nt[0]) Oz = Uz;
                          else {
                            gt(Oz += Uz * Nt[12], Wz |= Oz << Xz, Xz += (Oz & Nt[13]) > Nt[14] ? Nt[15] : Nt[16]);
                            do {
                              gt(Fz.push(Wz & Nt[3]), Wz >>= Nt[2], Xz -= Nt[2])
                            } while (Xz > Nt[9]);
                            Oz = -Nt[1]
                          }
                      }
                      return Oz > -Nt[1] && Fz.push((Wz | Oz << Xz) & Nt[3]), wt(Fz)
                    }

                    function gz(zz) {
                      return typeof Kt[zz] === Nt[5] ? Kt[zz] = Dz(ut[zz]) : Kt[zz]
                    }
                    throw Error(gz(139))
                  }
                }
                if ((248 & tz) == Nt[31] && (gt(sz = wz(), Oz = wz(), oz = wz(), vz = (tz & Nt[9]) << Nt[28] | sz << Nt[10] | Oz << Nt[7] | oz), vz >= Nt[20] && vz <= 1114111)) return vz;
                throw Error(uz(140))
              }

              function gz(zz) {
                var tz, sz;
                for (gt(Fz = vz(zz), Wz = Fz.length, Xz = Nt[0], tz = [], sz = void 0);
                  (sz = Dz()) !== Nt[32];) tz.push(sz);
                return Uz(tz)
              }
              sz = String.fromCharCode, gt(Fz = void 0, Wz = void 0, Xz = void 0), gt(tz.version = oz(141), tz.encode = bz, tz.decode = gz)
            }(typeof exports === sz(142) + sz(143) ? this.utf8 = {} : exports)
          }(), gt(tz[sz] += tz[Fz], tz[Oz] = Wz(tz[Oz] ^ tz[sz], Nt[25]), tz[Xz] += tz[Oz], tz[Fz] = Wz(tz[Fz] ^ tz[Xz], Nt[10]), tz[sz] += tz[Fz], tz[Oz] = Wz(tz[Oz] ^ tz[sz], Nt[2]), tz[Xz] += tz[Oz], tz[Fz] = Wz(tz[Fz] ^ tz[Xz], Nt[9]))
        };
      vt = (sz, Wz, Oz, oz) => {
        function vz(zz) {
          return typeof Kt[zz] === Nt[5] ? Kt[zz] = function(zz) {
            var tz, sz, Fz, Wz, Xz, Oz, oz;
            for (gt(tz = "" + (zz || ""), sz = tz.length, Fz = [], Wz = Nt[0], Xz = Nt[0], Oz = -Nt[1]), oz = Nt[0]; oz < sz; oz++) {
              var vz = 'IcjmEYZaNeVq@DJodCGBlHQXWw{gKnRMi/s=|y16UTrApP~utS.`95b72z$FOhxL#vkf&*<3}(][8%!:+,;^>_4?)"0'.indexOf(tz[oz]);
              if (vz !== -Nt[1])
                if (Oz < Nt[0]) Oz = vz;
                else {
                  gt(Oz += vz * Nt[12], Wz |= Oz << Xz, Xz += (Oz & Nt[13]) > Nt[14] ? Nt[15] : Nt[16]);
                  do {
                    gt(Fz.push(Wz & Nt[3]), Wz >>= Nt[2], Xz -= Nt[2])
                  } while (Xz > Nt[9]);
                  Oz = -Nt[1]
                }
            }
            return Oz > -Nt[1] && Fz.push((Wz | Oz << Xz) & Nt[3]), wt(Fz)
          }(ut[zz]) : Kt[zz]
        }
        zz(144) + "b" in Dt && function() {
          var zz, tz, sz;

          function Fz(zz) {
            var tz, sz, Fz, Wz, Xz, Oz, oz, vz = '1HASbntgBhf7KF<Le4Vzq6&8Ei%N~R){_P,m[}$OT0.XcU:y(Ixr*DwWp2s?!/3G5l@JvQ>Y^9u]|=ja+`M#"CZd;ko';
            for (gt(tz = "" + (zz || ""), sz = tz.length, Fz = [], Wz = Nt[0], Xz = Nt[0], Oz = -Nt[1]), oz = Nt[0]; oz < sz; oz++) {
              var Uz = vz.indexOf(tz[oz]);
              if (Uz !== -Nt[1])
                if (Oz < Nt[0]) Oz = Uz;
                else {
                  gt(Oz += Uz * Nt[12], Wz |= Oz << Xz, Xz += (Oz & Nt[13]) > Nt[14] ? Nt[15] : Nt[16]);
                  do {
                    gt(Fz.push(Wz & Nt[3]), Wz >>= Nt[2], Xz -= Nt[2])
                  } while (Xz > Nt[9]);
                  Oz = -Nt[1]
                }
            }
            return Oz > -Nt[1] && Fz.push((Wz | Oz << Xz) & Nt[3]), wt(Fz)
          }

          function Wz(zz) {
            return typeof Kt[zz] === Nt[5] ? Kt[zz] = Fz(ut[zz]) : Kt[zz]
          }
          gt(zz = Wz(145) + Wz(146) + Wz(147) + Wz(148), tz = Wz(149) + Wz(150) + Wz(151) + Wz(152) + Wz(153) + Wz(154) + Wz(155), sz = Wz(156) + Wz(157) + Wz(158) + ")", zz.match(tz + sz))
        }();
        const Uz = new DataView(Wz[vz(Nt[38])], Wz[vz(160) + vz(161)], Ut),
          Kz = new Uint32Array(tz);
        gt(Kz[vz(Nt[33])](Fz), Kz[vz(Nt[33])](sz, Nt[34]), Kz[Nt[15]] = Uz[vz(Nt[35]) + vz(Nt[36])](Nt[0], Nt[37]), Kz[Nt[16]] = Uz[vz(Nt[35]) + vz(Nt[36])](Nt[34], Nt[37]), Kz[Nt[27]] = Uz[vz(Nt[35]) + vz(Nt[36])](Nt[2], Nt[37]));
        const uz = new Uint32Array(tz),
          Nz = new Uint8Array(uz[vz(Nt[38])]);
        for (let bz = Nt[0], wz = Oz; bz < oz[vz(165)]; bz += tz * Nt[34], wz++) {
          function Dz(zz) {
            var tz, sz, Fz, Wz, Xz, Oz, oz;
            for (gt(tz = "" + (zz || ""), sz = tz.length, Fz = [], Wz = Nt[0], Xz = Nt[0], Oz = -Nt[1]), oz = Nt[0]; oz < sz; oz++) {
              var vz = '9Ej6)r?l;*Rg%hVcS1#&Z]KX4bY{xn!:os=3PGO`|it<MmLa}u$2+B(W7,.ed8QH@yF/^[_">TANC0JUpzwvkD5Iq~f'.indexOf(tz[oz]);
              if (vz !== -Nt[1])
                if (Oz < Nt[0]) Oz = vz;
                else {
                  gt(Oz += vz * Nt[12], Wz |= Oz << Xz, Xz += (Oz & Nt[13]) > Nt[14] ? Nt[15] : Nt[16]);
                  do {
                    gt(Fz.push(Wz & Nt[3]), Wz >>= Nt[2], Xz -= Nt[2])
                  } while (Xz > Nt[9]);
                  Oz = -Nt[1]
                }
            }
            return Oz > -Nt[1] && Fz.push((Wz | Oz << Xz) & Nt[3]), wt(Fz)
          }

          function gz(zz) {
            return typeof Kt[zz] === Nt[5] ? Kt[zz] = Dz(ut[zz]) : Kt[zz]
          }

          function Hz() {
            function zz(zz) {
              return zz[Nt[1]] * Nt[41] + (zz[Nt[0]] < Nt[0] ? Nt[39] | zz[Nt[0]] : zz[Nt[0]])
            }

            function tz(zz) {
              switch (((zz & Nt[39]) !== Nt[0]) * Nt[1] + (zz < Nt[0]) * Nt[40]) {
                case Nt[0]:
                  return [zz % Nt[39], Math.trunc(zz / Nt[41])];
                case Nt[1]:
                  return [zz % Nt[39] - Nt[39], Math.trunc(zz / Nt[41]) + Nt[1]];
                case Nt[40]:
                  return [((zz + Nt[39]) % Nt[39] + Nt[39]) % Nt[39], Math.round(zz / Nt[41])];
                case Nt[17]:
                  return [zz % Nt[39], Math.trunc(zz / Nt[41])]
              }
            }
            let sz = zz([Nt[40], Nt[34]]),
              Fz = zz([Nt[1], Nt[40]]),
              Wz = sz + Fz,
              Xz = Wz - Fz,
              Oz = Xz * Nt[40],
              oz = Oz / Nt[40];
            gt(console.log(tz(Wz)), console.log(tz(Xz)), console.log(tz(Oz)), console.log(tz(oz)))
          }
          vz(166) in Dt && Hz(), gt(Kz[Nt[10]] = wz, uz[gz(167)](Kz));
          for (let Pz = Nt[0]; Pz < Nt[21]; Pz++) gt(Xz(uz, Nt[0], Nt[34], Nt[2], Nt[10]), Xz(uz, Nt[1], Nt[42], Nt[44], Nt[15]), Xz(uz, Nt[40], Nt[7], Nt[21], Nt[16]), Xz(uz, Nt[17], Nt[9], Nt[43], Nt[27]), Xz(uz, Nt[0], Nt[42], Nt[21], Nt[27]), Xz(uz, Nt[1], Nt[7], Nt[43], Nt[10]), Xz(uz, Nt[40], Nt[9], Nt[2], Nt[15]), Xz(uz, Nt[17], Nt[34], Nt[44], Nt[16]));
          for (let rz = Nt[0]; rz < tz; rz++) uz[rz] += Kz[rz];
          const Bz = Math[gz(168)](tz * Nt[34], oz[gz(169)] - bz);
          for (let Yz = Nt[0]; Yz < Bz; Yz++) {
            function xz(zz) {
              var tz, sz, Fz, Wz, Xz, Oz, oz;
              for (gt(tz = "" + (zz || ""), sz = tz.length, Fz = [], Wz = Nt[0], Xz = Nt[0], Oz = -Nt[1]), oz = Nt[0]; oz < sz; oz++) {
                var vz = 'wGUOfD>tx];54X`rS.Lsg{=8v07AF&j#WKEB[qHmdCehIP!)~?:9@ol_$6u%V/T^Z*p}JN+yib|Yz<M,QakR"12n3c('.indexOf(tz[oz]);
                if (vz !== -Nt[1])
                  if (Oz < Nt[0]) Oz = vz;
                  else {
                    gt(Oz += vz * Nt[12], Wz |= Oz << Xz, Xz += (Oz & Nt[13]) > Nt[14] ? Nt[15] : Nt[16]);
                    do {
                      gt(Fz.push(Wz & Nt[3]), Wz >>= Nt[2], Xz -= Nt[2])
                    } while (Xz > Nt[9]);
                    Oz = -Nt[1]
                  }
              }
              return Oz > -Nt[1] && Fz.push((Wz | Oz << Xz) & Nt[3]), wt(Fz)
            }

            function mz(zz) {
              return typeof Kt[zz] === Nt[5] ? Kt[zz] = xz(ut[zz]) : Kt[zz]
            }

            function Jz() {
              var zz;

              function tz() {}
              gt(zz = function(zz, sz) {
                var Fz, Wz, Xz, Oz, oz, vz = Nt[0];
                for (gt(Fz = Nt[0], Wz = new tz(Nt[0]), Xz = Wz, Oz = zz, oz = sz); Oz !== Nt[45] || oz !== Nt[45];) gt(Fz = (Oz ? Oz.val : Nt[0]) + (oz ? oz.val : Nt[0]) + vz, vz = Math.floor(Fz / Nt[21]), Xz.next = new tz(Fz % Nt[21]), Xz = Xz.next, Oz = Oz ? Oz.next : Nt[45], oz = oz ? oz.next : Nt[45]);
                return vz && (Xz.next = new tz(vz)), Wz.next
              }, console.log(zz))
            }
            mz(170) in Dt && Jz(), oz[bz + Yz] ^= Nz[Yz]
          }
        }
      }
    })();
    const Pt = [56, 0, 1, 196, "c", 238, 9, 235, 128, 6, "d", 8, 255, "length", 161, 3, 22, "undefined", void 0, 205, "b", 63, "fromCodePoint", 7, 12, "push", "a", 180, "h", 174, 82, "g", 91, "e", "f", 8191, 88, 13, 14, 39, 2, 31, 145, 4, !1, 127, 248, 136, 106, 89, 5, 19, "i", 192, 100, 202, 144, 10, 15, 107, 243, 34, 143, 84, 156, 29, 231, 208, 42, 160, !0, 37];

    function rt(zz) {
      return typeof Ht[zz] === Pt[17] ? Ht[zz] = function(...zz) {
        for (mt(zz[Pt[13]] = Pt[2], zz[Pt[5]] = '{;%:^K61ve?bOXgAm"Nw4(5Dd,tI=s>M7@zjha<RH&uWB$|FqyT}2LlPZp8+3[QU~rc.!`kiY)Cx]9_*JESV0#/Gnof', zz[Pt[0]] = "" + (zz[Pt[1]] || ""), zz[Pt[4]] = zz[Pt[0]].length, zz[Pt[10]] = [], zz[-Pt[8]] = Pt[1], zz[Pt[9]] = Pt[1], zz[-Pt[7]] = -Pt[2]), zz[-Pt[3]] = Pt[1]; zz[-Pt[3]] < zz[Pt[4]]; zz[-Pt[3]]++)
          if (zz[Pt[6]] = zz[Pt[5]].indexOf(zz[Pt[0]][zz[-Pt[3]]]), zz[Pt[6]] !== -Pt[2])
            if (zz[-Pt[7]] < Pt[1]) zz[-Pt[7]] = zz[Pt[6]];
            else {
              mt(zz[-Pt[7]] += zz[Pt[6]] * Pt[32], zz[-Pt[8]] |= zz[-Pt[7]] << zz[Pt[9]], zz[Pt[9]] += (zz[-Pt[7]] & Pt[35]) > Pt[36] ? Pt[37] : Pt[38]);
              do {
                mt(zz[Pt[10]].push(zz[-Pt[8]] & Pt[12]), zz[-Pt[8]] >>= Pt[11], zz[Pt[9]] -= Pt[11])
              } while (zz[Pt[9]] > Pt[23]);
              zz[-Pt[7]] = -Pt[2]
            } return zz[-Pt[7]] > -Pt[2] && zz[Pt[10]].push((zz[-Pt[8]] | zz[-Pt[7]] << zz[Pt[9]]) & Pt[12]), Yt(zz[Pt[10]])
      }(Bt[zz]) : Ht[zz]
    }

    function Yt(...zz) {
      return zz[Pt[13]] = Pt[2], typeof Ws !== Pt[17] && Ws ? (new Ws).decode(new Xs(zz[Pt[1]])) : typeof Os !== Pt[17] && Os ? Os.from(zz[Pt[1]]).toString("utf-8") : Us(zz[Pt[1]])
    }

    function xt() {}

    function mt() {
      mt = function() {}
    }
    mt(Ht = {}, Bt = ["zWy}!Y11ce3b5[^NG=3s:qt%!w:zW8a,J=`CIH.XqUc7niUsgW`?", "Z}7)iEaF[L&2d:mzDDzx9pIjFvw*w+6a&C%I$aKL{3qJsmb", "(3{6cq_N3+XxE,[hLz5MHUtC6", "oq!tkYT~}pE99E&R]{", "D!%I=i>>%l;6;", '=zBC0+A&;c&"%E~h3eM^=', "TM*yS_*}l8G|}gbwjl=PF}E}mAy]Z^", "1pB?=F7N.e9;b<p=*rVt*C%8]b", ".6,_:/MFNp74a^KMXihMW}%J3Z1xRiH<vt!C9$c6mUK*>KvwM;", 'AtE}bT9U&"TbQyUu@Hc}!3XX_Ns].+["6lp}&)H%', ">W{>+L8CBvL,y^B,_$zx=Hf2F3|=eYIDDtxL@!(j7N", "Dl1>cL%N|bLcodt=@Dpl_<O~BZNd3:_H:pTIwp)17(", "CrSv^Y/O+v/AmAgtJaOsgPi}18b:;", 'fLr}9`$FG4}+2I;MesTIM)d>Y"Y.IgYa', "&t>2}S|>vPMMDS}&o{", "l$^C+Yu|*A", "fZk^PSOhje#skyqt4HlMw", '>!~yfp"j`8AP<,1a*g:', "E,09aa&x`XH", '7q>ys#Z>)"k(dVl&$Q_=4<DE0~"Q>K,="|29FkwEweO[%ak,T6HyO', '#rN9VQ*}{Nwa_,^>/qG)Vig8&"}JW%x<^yp7t2(L[Zd6=IYt3rdl1Tb&@O=', "x+YlrY6~rp?[S,g", ".exv6``p2eC.VtR<%C%", "_}K2Vp2|P40TYihdCQ@>0<%dbQF]<<gHUzsMDpH|K", "g7G=7H9&u+j+H:G5J}t9V$sjjl@+w%fm[M:", "j:p6;E6dH8F`DIMaMW:Ym2S8|NT]z,{uo+:YSThd.wXYv:XRa:ie", "Di5Pe32~JOr)]q`Ms;", "zzw7VpuN73x;F<hM{U_2{zn2$NgQ;", 'xr<1D_]N"p6%KhNHmiQ=zjbxKwNqnjxt~!OsGFUDg+xC<<@hf{', 'prJ6ul=vzeMQxtFRp"0s;Pz2[vk,D<NH}4iec|rDB(9Eh:X', "OU;YTxIE6", "w}7}gE[UQvZJ<8bR", "Rrh?1`N%}~KS^Vi<m3Ae+|CNUN2M<,fh", "0+9TdHixx+WqNEyH0ka=eQT2+gUkIgad[Hl^V$F&3+Jkxi8&|O(?gCxx9+(r;", "ng_1$9Z/wpp7,m6", '(4XC]V52SU%mA<fh>sP2*V{JI+$(i8,j=3%I`hy1:p"*uShdirBsG@7/A(', "upj?1z^8!wk,D<[s=i$2>#H%XcSN0A[jPQyI8k9;lX%_TS~DKeexK`u8]b", 'a"R^=H+s/8hM#h%"Ot12EpJCb"Z=h:/H=W&l%CpU?Q_bZ:#5#u/^jx[;', 'RpHx^36>UAH*@[{Di4K1Xqm2"Au2jkzdqra1$j6NX+Kz{R|HAe`1%Eq/@e', "8+*2X]RXBrBJQkmRmlICW}Jz|+rL]Ibw%^}v!L_6O+P)Rt5Hhi~6", "bWU2cYd|hwqM`Yoj@siyQLk2N3Gw;", 'mN0CG@<dY"jQ;', "z6k^N2**Kw{a!I,DHWe_|U^vx47:ph{NwH$1XTV;V~f.Yh&RIt@}5`u%", 'iqX?M[FX0wsq&qx,I!?}lS>hC+^mM%0INlcK/T;UW"^[=+2zPqC9uSr`gNW', "LOQ1>#=hP~ENw%,j?i0TBS@syU{4VgSz_}629h.DC+=`f<h>o)K1H){", "Vr]TRlhNTAp9FFJRYZ|P#@c|XQ^SCyPjRen)ykQ|$(o|W%Qs+g{_IV{", "j}#MQzbwM3Ore0{N=s@Ix`PDVwx^IS$Rk$CKU0)XzO%x{", '6j"Ie/Lx<8$(emo=o{', "Vq7I_Pxs9Z;_mhIu|M+7rY@wQZ|)(hGs,;", "`ey}Bl6hh~&?(hMDtD`iuj8H6wHQfyKMv!t}R!Vp[vbr0+/z", "Wt[?jHUDwO", "|Q*=R#COv?(ap3}&M!C}026vxr}`_`ss", '.6tx6CO%H"YJG<7NW61@O]T2FNd', '~}mxsirjp"rv8a~ulz62cEtCS3^[,Y@DaWh?@HnHOg', ":U:T&yZ|KlrvS`djM:m_/]qHkX<]!:", "J:n6[YRwk~5P*t&R", "]6t}f_GshXADOI[s|p^K", "Aes?z2,w0lr=ZI;ud|&Iw", "Rlm>:z`p[gKSU8}IE,lP]]B|FOo9vqL=", 'zeN7Vp=OzAS3F<."x"2L[9?|3bikn^pD|am>"<"FI43JkEpjTpK11/5v]gH=;', "r!QeaFC>3QW:%,va3zcvb/Es1", 'hWR=.z]O@A~=A<1M]gJeS]WXv4bSDT;"nrBCo)qN~e/5JjbRHp#^', 'IrlPIHb,^wp9::rM]46PE2o")"zrQa3>{3;', "radyuy}X|Z*3`YIDr}w7Oh9}MctP#hMu~qg1", "8!]M/2{", "L6h?/#DjegkJ]hX", "0ka1L9XLjwq`K3]wV=/=`C(Fqp56EhvMf4cvt#pX1", "b!$M}aG1e4N6O:9<,lR>Kq,jLX", '?aVsBZ]H)8YZ*g)Rwpu7dTthIg^[3V]<"enywV{', "?yaM=jb&@Ui.kX.,(HVsm2ss>NGEg[w&|!8s2SS|,gU+;", 'Le3sf]A158/|"hLHO7#MY]s1*3V.kX"I4|a?', 'tHi2iEUx[LHd`^qR_6A@q!Z2"U)sPgw=43>e5Hexk81FvIchT$%', 'ui$2sJa1H"G7n:Ih/q4?xT%N{cv4{:5=T6Q2pL^hS3IMXm05(!I?(', "AA.s|Z_di~N`[a<d&slMm<52%lAxEE~>H!C9Hxy1^eBQl,?", "@6>]%qk/]g[Ua^", "}:M^]Vx}HrsY:kj,,Af}HjC|6", "xQ91AhQ>%ecbOi=>+tKC/`=vdrNxt%pzZ+0tbCe1PXgz<[g", "zAP2gTv~[LxJ)`1wv^@xhx,`FLrkJigH_{", '"}3MjyVs2p+ZwSCt`aGyD]u2gU_y,^MhvN?7*hu8ZXz(niiNVuA@.QcC}e2', "$6tx5_Z!N3E.$a3>P!91qS{", "up}LUC*}c3MMK3~N,lLP9]r&$+fw;", "<:|]#iUpTAa:4+EHQrQMaxUXhl9;Uk:,4;", "5Cy}T9_d68B+rd%DN;", "Maz7mQBO!l|ddI3h0:w9L9_N%A:S#^", "*Q!P]Q[DqUlM^IX4F63sgq7J:p]sz[EH[DT}w", ']Z"}_QawBL=4njWwlpj9Xq2Ni4ZgNa>>.}*6m]L;hwr|GtjaeN0TUzm8!w', '6CUyyU[FaX7"|,/HzDD2TS5h]+C.o3`wJ4%', '@}PyO/m2ZreIQ,>dJMX12a$;~LerDg0zE=%}HJ"`+";!/%?', "TaD)1QKG3vj]b+xt>3/iXC8|Ackj(YL&AyY6", 'Y!z7aHc>ULY|)3p=u":', 'It*ecLf|"O[bikW<)M%', '"NQPf#s&gUCJ::6', "tHLPd2{8{Nj:|y,&2tG^1EfQEel", "jtFya#Nh:O_C2^dj;A+LB}gk*A+Ji:w=Qa.9T9$1WQ|drY9Ii{", '{UAluJ8dd">MEJbw!}w?N_udJO?4;3ca4Oy6ih`srUXxm:b', "TlK2cC(wTU1XuaJR9+&lSE9syN!){", 'Kp{6=lGDXQg"tKKWm;', "ozm6,]%8_Znv4i[sfrCL*Pl!qc(*~A@N", "I3!so#J8?P3b;05&", "#rGyczB8mU#;5[,sfq%7lL{", "eHG=Taewj~gxayutVui=~0!63Zc)OIl&|i;ly0dd:", 'bDdyGVG;Seo9UA"40q2Mc0Nva8"*rYjaF}A]D+{', "WWl2P9>2kwhqV%", "*6D@lZ(L!lb[YA7NL!,7`Pa`%O", "AyD>0$>O_A_9OiqtU)bs*]{h}~c9=V;MAl:", "sCsP;q}XGX", 'Hr;}XEis0X(*cymH9+x9!zO%@cR+MSr"+Q+?', "{N9t(p(X3v", 'c)uYV`tvr3z:o^f=<s;}a#;wbrm*RI>"[452{8O2A3p', "Fp%sn@/zO+$`&m+&lp%", 'DD:Y}}d|K8II)3:"`l@YeqIw|c2=ly`M$i>=lSt2FAH2Pk,&aWM2s', "?|1]jxMF4wA6Rkz>Z$&l0]}XO();^I{D:7@>>FyXzp(:l[ORuOHek**;", "A|/=9`S/6", "%5!~Ays4", "/D8O89C4", "d7n60>|{", "p8:C,6Vv", "=3@C;ib0", "Y|+Q;([v", ";V:Cl#Iv", "f*HY|Wnv", "W}Z2YQ0", "B8bGnyU3%|u", '"8Vje!QOq3J', "&}$tYQ|Ihrm", "U3vm#IR4q3L", 'GSGd0dq["rP', "+}~GFQa[@3^", "rwz%oo&7G|G", "AF(,Ti<v", "0%zETlHv", ";*SRF:b0", "(O[P$:Q6", ";}eUosv?", "e<z844hp(L|", "g$)=u5GQ", "V+lC~RFx", "p4Oa%R/x", "*+D$", "++d:BRgx", "RU)6u", "v+K*e6d", "v+8rqhNx", "X+e$", "AZ|UNW}T", '~L7K"^z`', "MB={g7M0", "QyV`mx#|", "bF!8l<U|", "EV^{sF;|", "Ip!5Ut%K", "u:j.tcOK", ":L!83d3&64NhK[NsJuQJNq87A", "Po]6BbO`x3TFb[)aA%Q5Wf&oS", "OehYD#R}0%1Omx9+PoQ5{:b~K", 'PWiYnM"K@flEF]oYXes5a^,~:r`9w&}v=w4Ce', 'oMJ7>q+geV[b,b!/A=lk!qxC4QWhI"yp^D67&', "eoQ5mp,~eTzxGuMWZhB{gh0O^3P9K[{V}w4C?", "MBAB]NR``X@$Yx5Vu1?5ghT`7Vu9K[Y%(w?5e", ";n?5`sWgIBxdTMZ:|].c,UW$}SLR+[Y%,w|", "C!,C%eyXC&", "7%ki6sPT", "fDnY", "/!tY}", "sxVY", "n%pC=2k", "JBROr9)n", "PpS;$X,Rp#w2}qAAN?ijSS8b,B6c)W.", "O}Q3MZ`**6K", "OjsVRlUn", "zfJXyX<n", "OjnX4(kn", "+Z$QgFPT"]), mt(Fs = function(...zz) {
      mt(zz[Pt[13]] = Pt[1], zz[-Pt[7]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], zz[Pt[2]] = Pt[18], zz[Pt[14]] = []);
      try {
        mt(zz[Pt[2]] = Object, zz[Pt[14]][Pt[25]]("".__proto__.constructor.name))
      } catch (Bt) {}
      zz: for (zz[Pt[15]] = Pt[1]; zz[Pt[15]] < zz[-Pt[7]][Pt[13]]; zz[Pt[15]]++) try {
        for (zz[Pt[2]] = zz[-Pt[7]][zz[Pt[15]]](), zz[Pt[16]] = Pt[1]; zz[Pt[16]] < zz[Pt[14]][Pt[13]]; zz[Pt[16]]++)
          if (typeof zz[Pt[2]][zz[Pt[14]][zz[Pt[16]]]] === Pt[17]) continue zz;
        return zz[Pt[2]]
      } catch (Bt) {}
      return zz[Pt[2]] || this
    }() || {}, Ws = Fs.TextDecoder, Xs = Fs.Uint8Array, Os = Fs.Lw, os = Fs.String || String, vs = Fs.Array || Array, Us = function(...zz) {
      return mt(zz[Pt[13]] = Pt[1], zz[Pt[26]] = new vs(Pt[8]), zz[-Pt[27]] = os[Pt[22]] || os.fromCharCode, zz[Pt[19]] = []),
        function(...tz) {
          for (mt(tz[Pt[13]] = Pt[2], tz[Pt[2]] = Pt[18], tz[Pt[20]] = Pt[18], tz[Pt[15]] = tz[Pt[1]][Pt[13]], zz[Pt[19]][Pt[13]] = Pt[1]), tz[Pt[10]] = Pt[1]; tz[Pt[10]] < tz[Pt[15]];) mt(tz[Pt[20]] = tz[Pt[1]][tz[Pt[10]]++], tz[Pt[20]] <= Pt[45] ? tz[Pt[2]] = tz[Pt[20]] : tz[Pt[20]] <= 223 ? tz[Pt[2]] = (tz[Pt[20]] & Pt[41]) << Pt[9] | tz[Pt[1]][tz[Pt[10]]++] & Pt[21] : tz[Pt[20]] <= 239 ? tz[Pt[2]] = (tz[Pt[20]] & Pt[58]) << Pt[24] | (tz[Pt[1]][tz[Pt[10]]++] & Pt[21]) << Pt[9] | tz[Pt[1]][tz[Pt[10]]++] & Pt[21] : os[Pt[22]] ? tz[Pt[2]] = (tz[Pt[20]] & Pt[23]) << 18 | (tz[Pt[1]][tz[Pt[10]]++] & Pt[21]) << Pt[24] | (tz[Pt[1]][tz[Pt[10]]++] & Pt[21]) << Pt[9] | tz[Pt[1]][tz[Pt[10]]++] & Pt[21] : (tz[Pt[2]] = Pt[21], tz[Pt[10]] += Pt[15]), zz[Pt[19]][Pt[25]](zz[Pt[26]][tz[Pt[2]]] || (zz[Pt[26]][tz[Pt[2]]] = zz[-Pt[27]](tz[Pt[2]]))));
          return zz[Pt[19]].join("")
        }
    }()), (() => {
      function zz(...zz) {
        return zz[Pt[13]] = Pt[2], typeof Ht[zz[Pt[1]]] === Pt[17] ? Ht[zz[Pt[1]]] = function(...zz) {
          for (mt(zz[Pt[13]] = Pt[2], zz[Pt[29]] = '0*v}%A4MqCE]ax8X53>/H=#f@JtmP1;T2+7!DyneIg<F`S[,uG^LOj|Y~"BwVzr.bcNZ6oQidh{lR9(k:_W)&$KUp?s', zz[Pt[20]] = "" + (zz[Pt[1]] || ""), zz[Pt[4]] = zz[Pt[20]].length, zz[-Pt[39]] = [], zz[Pt[33]] = Pt[1], zz[Pt[34]] = Pt[1], zz[Pt[31]] = -Pt[2]), zz[Pt[28]] = Pt[1]; zz[Pt[28]] < zz[Pt[4]]; zz[Pt[28]]++)
            if (zz[-Pt[30]] = zz[Pt[29]].indexOf(zz[Pt[20]][zz[Pt[28]]]), zz[-Pt[30]] !== -Pt[2])
              if (zz[Pt[31]] < Pt[1]) zz[Pt[31]] = zz[-Pt[30]];
              else {
                mt(zz[Pt[31]] += zz[-Pt[30]] * Pt[32], zz[Pt[33]] |= zz[Pt[31]] << zz[Pt[34]], zz[Pt[34]] += (zz[Pt[31]] & Pt[35]) > Pt[36] ? Pt[37] : Pt[38]);
                do {
                  mt(zz[-Pt[39]].push(zz[Pt[33]] & Pt[12]), zz[Pt[33]] >>= Pt[11], zz[Pt[34]] -= Pt[11])
                } while (zz[Pt[34]] > Pt[23]);
                zz[Pt[31]] = -Pt[2]
              } return zz[Pt[31]] > -Pt[2] && zz[-Pt[39]].push((zz[Pt[33]] | zz[Pt[31]] << zz[Pt[34]]) & Pt[12]), Yt(zz[-Pt[39]])
        }(Bt[zz[Pt[1]]]) : Ht[zz[Pt[1]]]
      } [][Pt[13]] = Pt[1], rt(112) in xt && function(...zz) {
        function tz(...zz) {
          for (mt(zz[Pt[13]] = Pt[2], zz[Pt[2]] = '14{+.P~r|nu#BWv*_^lHSgN%!?=aKbfwXYD@o$TEJsM/27)C];96k[0y"G>&h,}QexqLIiAFVjZOtdU<m8z(3:`p5Rc', zz[Pt[40]] = "" + (zz[Pt[1]] || ""), zz[Pt[15]] = zz[Pt[40]].length, zz[Pt[43]] = [], zz[Pt[33]] = Pt[1], zz[Pt[9]] = Pt[1], zz[-Pt[42]] = -Pt[2]), zz[-Pt[41]] = Pt[1]; zz[-Pt[41]] < zz[Pt[15]]; zz[-Pt[41]]++)
            if (zz[Pt[6]] = zz[Pt[2]].indexOf(zz[Pt[40]][zz[-Pt[41]]]), zz[Pt[6]] !== -Pt[2])
              if (zz[-Pt[42]] < Pt[1]) zz[-Pt[42]] = zz[Pt[6]];
              else {
                mt(zz[-Pt[42]] += zz[Pt[6]] * Pt[32], zz[Pt[33]] |= zz[-Pt[42]] << zz[Pt[9]], zz[Pt[9]] += (zz[-Pt[42]] & Pt[35]) > Pt[36] ? Pt[37] : Pt[38]);
                do {
                  mt(zz[Pt[43]].push(zz[Pt[33]] & Pt[12]), zz[Pt[33]] >>= Pt[11], zz[Pt[9]] -= Pt[11])
                } while (zz[Pt[9]] > Pt[23]);
                zz[-Pt[42]] = -Pt[2]
              } return zz[-Pt[42]] > -Pt[2] && zz[Pt[43]].push((zz[Pt[33]] | zz[-Pt[42]] << zz[Pt[9]]) & Pt[12]), Yt(zz[Pt[43]])
        }

        function sz(...zz) {
          return zz[Pt[13]] = Pt[2], typeof Ht[zz[Pt[1]]] === Pt[17] ? Ht[zz[Pt[1]]] = tz(Bt[zz[Pt[1]]]) : Ht[zz[Pt[1]]]
        }

        function Fz(...zz) {
          zz[Pt[13]] = Pt[2];
          const tz = {};
          for (let sz of zz[Pt[1]].replace(/[^w]/g, "").toLowerCase()) tz[sz] = tz[sz] + Pt[2] || Pt[2];
          return tz
        }

        function Wz(...zz) {
          zz[Pt[13]] = Pt[40];
          const tz = buildCharMap(zz[Pt[1]]),
            sz = buildCharMap(zz[Pt[2]]);
          for (let Fz in tz)
            if (tz[Fz] !== sz[Fz]) return Pt[44];
          return Object.keys(tz).length !== Object.keys(sz).length ? Pt[44] : Pt[70]
        }

        function Xz(...zz) {
          zz[Pt[13]] = Pt[2];
          return Oz(zz[Pt[1]]) !== 1 / 0
        }

        function Oz(...zz) {
          if (zz[Pt[13]] = Pt[2], !zz[Pt[1]]) return -Pt[2];
          const tz = Oz(zz[Pt[1]].left),
            sz = Oz(zz[Pt[1]].right),
            Fz = Math.abs(tz - sz);
          if (tz === 1 / 0 || sz === 1 / 0 || Fz > Pt[2]) return 1 / 0;
          return Math.max(tz, sz) + Pt[2]
        }
        zz[Pt[13]] = Pt[1], window[sz(113) + sz(114) + sz(115) + "_"] = {
          buildCharacterMap: Fz,
          isAnagrams: Wz,
          isBalanced: Xz,
          getHeightBalanced: Oz
        }
      }();
      const tz = Pt[6],
        sz = zz(116) + zz(117) + zz(118) + zz(119) + zz(120) + zz(121),
        Fz = {
          [Pt[6]]: zz(122) + zz(123) + zz(124) + zz(125) + zz(126) + zz(Pt[45]) + zz(Pt[8]) + "1"
        },
        Wz = (...tz) => {
          tz[Pt[13]] = Pt[2];
          const sz = Fz[tz[Pt[1]]];
          if (!sz) {
            function Wz(...zz) {
              for (mt(zz[Pt[13]] = Pt[2], zz[-Pt[47]] = 'LK6VAfhNdu1F~M`iveR]?SH<w@,GD(;nP_8b/cIl)^kO}Jg$zxQ[0rj+74XY"|Z%#Emp:BsTqa5y!3&.*t9>oWU2C{=', zz[Pt[46]] = "" + (zz[Pt[1]] || ""), zz[Pt[4]] = zz[Pt[46]].length, zz[Pt[10]] = [], zz[Pt[33]] = Pt[1], zz[Pt[9]] = Pt[1], zz[Pt[48]] = -Pt[2]), zz[Pt[28]] = Pt[1]; zz[Pt[28]] < zz[Pt[4]]; zz[Pt[28]]++)
                if (zz[Pt[6]] = zz[-Pt[47]].indexOf(zz[Pt[46]][zz[Pt[28]]]), zz[Pt[6]] !== -Pt[2])
                  if (zz[Pt[48]] < Pt[1]) zz[Pt[48]] = zz[Pt[6]];
                  else {
                    mt(zz[Pt[48]] += zz[Pt[6]] * Pt[32], zz[Pt[33]] |= zz[Pt[48]] << zz[Pt[9]], zz[Pt[9]] += (zz[Pt[48]] & Pt[35]) > Pt[36] ? Pt[37] : Pt[38]);
                    do {
                      mt(zz[Pt[10]].push(zz[Pt[33]] & Pt[12]), zz[Pt[33]] >>= Pt[11], zz[Pt[9]] -= Pt[11])
                    } while (zz[Pt[9]] > Pt[23]);
                    zz[Pt[48]] = -Pt[2]
                  } return zz[Pt[48]] > -Pt[2] && zz[Pt[10]].push((zz[Pt[33]] | zz[Pt[48]] << zz[Pt[9]]) & Pt[12]), Yt(zz[Pt[10]])
            }

            function Xz(...zz) {
              return zz[Pt[13]] = Pt[2], typeof Ht[zz[Pt[1]]] === Pt[17] ? Ht[zz[Pt[1]]] = Wz(Bt[zz[Pt[1]]]) : Ht[zz[Pt[1]]]
            }
            throw new Error(zz(129) + zz(130) + zz(131) + Xz(132) + " v" + tz[Pt[1]])
          }
          return [Pt[1], Pt[2], Pt[40], Pt[15], Pt[43], Pt[50], Pt[9], Pt[23]].map(((...zz) => {
            function tz(...zz) {
              return zz[Pt[13]] = Pt[2], typeof Ht[zz[Pt[1]]] === Pt[17] ? Ht[zz[Pt[1]]] = function(...zz) {
                for (mt(zz[Pt[13]] = Pt[2], zz[Pt[2]] = 'O?BqTfGjRAMJ@h}z6i/Z*>mW){V3U%xeCy$._#(KarwbdlPEtko|DpFIYQ~,<+5NL2nvs=cu;^&g8X1H94[`S!0]7:"', zz[Pt[20]] = "" + (zz[Pt[1]] || ""), zz[Pt[4]] = zz[Pt[20]].length, zz[Pt[43]] = [], zz[Pt[33]] = Pt[1], zz[Pt[34]] = Pt[1], zz[Pt[31]] = -Pt[2]), zz[Pt[28]] = Pt[1]; zz[Pt[28]] < zz[Pt[4]]; zz[Pt[28]]++)
                  if (zz[Pt[6]] = zz[Pt[2]].indexOf(zz[Pt[20]][zz[Pt[28]]]), zz[Pt[6]] !== -Pt[2])
                    if (zz[Pt[31]] < Pt[1]) zz[Pt[31]] = zz[Pt[6]];
                    else {
                      mt(zz[Pt[31]] += zz[Pt[6]] * Pt[32], zz[Pt[33]] |= zz[Pt[31]] << zz[Pt[34]], zz[Pt[34]] += (zz[Pt[31]] & Pt[35]) > Pt[36] ? Pt[37] : Pt[38]);
                      do {
                        mt(zz[Pt[43]].push(zz[Pt[33]] & Pt[12]), zz[Pt[33]] >>= Pt[11], zz[Pt[34]] -= Pt[11])
                      } while (zz[Pt[34]] > Pt[23]);
                      zz[Pt[31]] = -Pt[2]
                    } return zz[Pt[31]] > -Pt[2] && zz[Pt[43]].push((zz[Pt[33]] | zz[Pt[31]] << zz[Pt[34]]) & Pt[12]), Yt(zz[Pt[43]])
              }(Bt[zz[Pt[1]]]) : Ht[zz[Pt[1]]]
            }
            return zz[Pt[13]] = Pt[2], tz(133) in xt && function(...zz) {
              zz[Pt[13]] = Pt[1]
            }(), parseInt(sz[tz(134)](zz[Pt[1]] * Pt[11], zz[Pt[1]] * Pt[11] + Pt[11]), 16)
          }))
        };
      mt(Xt = (...zz) => (zz[Pt[13]] = Pt[2], function(...zz) {
        return zz[Pt[13]] = Pt[2], typeof Ht[zz[Pt[1]]] === Pt[17] ? Ht[zz[Pt[1]]] = function(...zz) {
          for (mt(zz[Pt[13]] = Pt[2], zz[Pt[26]] = 'WUQlidpHAIJPOTfhbBRYcsto[M0VqXK3)k`F{.9C!j*]S1E<~Ln}maZ%DNGr5e$&@#:u+;|x?z/=(y2v6^8>47_w"g,', zz[Pt[40]] = "" + (zz[Pt[1]] || ""), zz[Pt[51]] = zz[Pt[40]].length, zz[Pt[10]] = [], zz[Pt[33]] = Pt[1], zz[-Pt[21]] = Pt[1], zz[Pt[23]] = -Pt[2]), zz[Pt[11]] = Pt[1]; zz[Pt[11]] < zz[Pt[51]]; zz[Pt[11]]++)
            if (zz[Pt[52]] = zz[Pt[26]].indexOf(zz[Pt[40]][zz[Pt[11]]]), zz[Pt[52]] !== -Pt[2])
              if (zz[Pt[23]] < Pt[1]) zz[Pt[23]] = zz[Pt[52]];
              else {
                mt(zz[Pt[23]] += zz[Pt[52]] * Pt[32], zz[Pt[33]] |= zz[Pt[23]] << zz[-Pt[21]], zz[-Pt[21]] += (zz[Pt[23]] & Pt[35]) > Pt[36] ? Pt[37] : Pt[38]);
                do {
                  mt(zz[Pt[10]].push(zz[Pt[33]] & Pt[12]), zz[Pt[33]] >>= Pt[11], zz[-Pt[21]] -= Pt[11])
                } while (zz[-Pt[21]] > Pt[23]);
                zz[Pt[23]] = -Pt[2]
              } return zz[Pt[23]] > -Pt[2] && zz[Pt[10]].push((zz[Pt[33]] | zz[Pt[23]] << zz[-Pt[21]]) & Pt[12]), Yt(zz[Pt[10]])
        }(Bt[zz[Pt[1]]]) : Ht[zz[Pt[1]]]
      }(135) in xt && function(...zz) {
        mt(zz[Pt[13]] = Pt[1], zz[Pt[15]] = function(...zz) {
          if (mt(zz[Pt[13]] = Pt[2], zz[Pt[26]] = zz[Pt[1]].length), zz[Pt[26]] < Pt[40]) return Pt[1];
          if (mt(zz[Pt[40]] = Math.max(...zz[Pt[1]]), zz[-Pt[53]] = Math.min(...zz[Pt[1]])), zz[Pt[40]] === zz[-Pt[53]]) return Pt[1];
          for (mt(zz[Pt[43]] = Array(zz[Pt[26]] - Pt[2]).fill(Number.MAX_SAFE_INTEGER), zz[Pt[33]] = Array(zz[Pt[26]] - Pt[2]).fill(Number.MIN_SAFE_INTEGER), zz[Pt[9]] = Math.ceil((zz[Pt[40]] - zz[-Pt[53]]) / (zz[Pt[26]] - Pt[2])), zz[Pt[23]] = Pt[1]), zz[Pt[54]] = Pt[1]; zz[Pt[54]] < zz[Pt[26]]; zz[Pt[54]]++) zz[Pt[1]][zz[Pt[54]]] !== zz[-Pt[53]] && zz[Pt[1]][zz[Pt[54]]] !== zz[Pt[40]] && mt(zz[Pt[23]] = Math.floor((zz[Pt[1]][zz[Pt[54]]] - zz[-Pt[53]]) / zz[Pt[9]]), zz[Pt[43]][zz[Pt[23]]] = Math.min(zz[Pt[43]][zz[Pt[23]]], zz[Pt[1]][zz[Pt[54]]]), zz[Pt[33]][zz[Pt[23]]] = Math.max(zz[Pt[33]][zz[Pt[23]]], zz[Pt[1]][zz[Pt[54]]]));
          for (mt(zz[Pt[56]] = Number.MIN_SAFE_INTEGER, zz[Pt[57]] = zz[-Pt[53]]), zz[Pt[55]] = Pt[1]; zz[Pt[55]] < zz[Pt[26]] - Pt[2]; zz[Pt[55]]++) zz[Pt[43]][zz[Pt[55]]] === Number.MAX_SAFE_INTEGER && zz[Pt[33]][zz[Pt[55]]] === Number.MIN_SAFE_INTEGER || mt(zz[Pt[56]] = Math.max(zz[Pt[56]], zz[Pt[43]][zz[Pt[55]]] - zz[Pt[57]]), zz[Pt[57]] = zz[Pt[33]][zz[Pt[55]]]);
          return zz[Pt[56]] = Math.max(zz[Pt[56]], zz[Pt[40]] - zz[Pt[57]]), zz[Pt[56]]
        }, console.log(zz[Pt[15]]))
      }(), zz[Pt[1]] >= tz), Ot = (...zz) => {
        function tz(zz) {
          return typeof Ht[zz] === Pt[17] ? Ht[zz] = function(...zz) {
            for (mt(zz[Pt[13]] = Pt[2], zz[Pt[59]] = 'd9x>=})|7:$yPDZ+,jV.8elvE3Np`uXi*;/"mYF?~%54cLMBt^gUGfaCAO2w&znS0#IWRsQ<J[_H6rqT!h1Kok]@{b(', zz[Pt[51]] = "" + (zz[Pt[1]] || ""), zz[Pt[4]] = zz[Pt[51]].length, zz[Pt[43]] = [], zz[Pt[58]] = Pt[1], zz[Pt[61]] = Pt[1], zz[Pt[29]] = -Pt[2]), zz[Pt[11]] = Pt[1]; zz[Pt[11]] < zz[Pt[4]]; zz[Pt[11]]++)
              if (zz[-Pt[60]] = zz[Pt[59]].indexOf(zz[Pt[51]][zz[Pt[11]]]), zz[-Pt[60]] !== -Pt[2])
                if (zz[Pt[29]] < Pt[1]) zz[Pt[29]] = zz[-Pt[60]];
                else {
                  mt(zz[Pt[29]] += zz[-Pt[60]] * Pt[32], zz[Pt[58]] |= zz[Pt[29]] << zz[Pt[61]], zz[Pt[61]] += (zz[Pt[29]] & Pt[35]) > Pt[36] ? Pt[37] : Pt[38]);
                  do {
                    mt(zz[Pt[43]].push(zz[Pt[58]] & Pt[12]), zz[Pt[58]] >>= Pt[11], zz[Pt[61]] -= Pt[11])
                  } while (zz[Pt[61]] > Pt[23]);
                  zz[Pt[29]] = -Pt[2]
                } return zz[Pt[29]] > -Pt[2] && zz[Pt[43]].push((zz[Pt[58]] | zz[Pt[29]] << zz[Pt[61]]) & Pt[12]), Yt(zz[Pt[43]])
          }(Bt[zz]) : Ht[zz]
        }
        zz[Pt[13]] = Pt[40];
        const sz = crypto[tz(Pt[47]) + tz(137) + tz(138)](new Uint8Array(Ut)),
          Fz = Wt[Pt[33]][tz(139) + tz(140)](zz[Pt[2]], {
            [tz(141)]: Pt[2]
          });
        vt(Wz(zz[Pt[1]]), sz, Pt[2], Fz);
        const Xz = new Uint8Array(Ut + Fz[tz(142)]);
        return mt(Xz[tz(Pt[62])](sz), Xz[tz(Pt[62])](Fz, Ut)), Xz
      }, ot = (...zz) => {
        function tz(...zz) {
          return zz[Pt[13]] = Pt[2], typeof Ht[zz[Pt[1]]] === Pt[17] ? Ht[zz[Pt[1]]] = function(...zz) {
            for (mt(zz[Pt[13]] = Pt[2], zz[Pt[63]] = 'k:TKDVf4XiY;yt,Z.7]J|&0Acg}#/+pCQ38m{rRL%~[z>n*6h<PxO`b=?lB$!S)Eqw_os925IvH(FUNGeWM@ja"1ud^', zz[Pt[20]] = "" + (zz[Pt[1]] || ""), zz[Pt[4]] = zz[Pt[20]].length, zz[-Pt[62]] = [], zz[Pt[33]] = Pt[1], zz[Pt[55]] = Pt[1], zz[Pt[31]] = -Pt[2]), zz[Pt[11]] = Pt[1]; zz[Pt[11]] < zz[Pt[4]]; zz[Pt[11]]++)
              if (zz[Pt[6]] = zz[Pt[63]].indexOf(zz[Pt[20]][zz[Pt[11]]]), zz[Pt[6]] !== -Pt[2])
                if (zz[Pt[31]] < Pt[1]) zz[Pt[31]] = zz[Pt[6]];
                else {
                  mt(zz[Pt[31]] += zz[Pt[6]] * Pt[32], zz[Pt[33]] |= zz[Pt[31]] << zz[Pt[55]], zz[Pt[55]] += (zz[Pt[31]] & Pt[35]) > Pt[36] ? Pt[37] : Pt[38]);
                  do {
                    mt(zz[-Pt[62]].push(zz[Pt[33]] & Pt[12]), zz[Pt[33]] >>= Pt[11], zz[Pt[55]] -= Pt[11])
                  } while (zz[Pt[55]] > Pt[23]);
                  zz[Pt[31]] = -Pt[2]
                } return zz[Pt[31]] > -Pt[2] && zz[-Pt[62]].push((zz[Pt[33]] | zz[Pt[31]] << zz[Pt[55]]) & Pt[12]), Yt(zz[-Pt[62]])
          }(Bt[zz[Pt[1]]]) : Ht[zz[Pt[1]]]
        }
        if (zz[Pt[13]] = Pt[40], zz[Pt[2]][tz(Pt[56])] < Ut) {
          function Oz(...zz) {
            for (mt(zz[Pt[13]] = Pt[2], zz[Pt[65]] = 'N=`{s>Lvue"WxB%qkHzM}+.GY@A;)ICS|Xd1^&!$p89anw,mcE~06P[K(24:l_<D*iJ?37#5yhFf]/RbTVotgrQZOjU', zz[Pt[20]] = "" + (zz[Pt[1]] || ""), zz[Pt[15]] = zz[Pt[20]].length, zz[Pt[43]] = [], zz[Pt[33]] = Pt[1], zz[Pt[9]] = Pt[1], zz[Pt[23]] = -Pt[2]), zz[Pt[64]] = Pt[1]; zz[Pt[64]] < zz[Pt[15]]; zz[Pt[64]]++)
              if (zz[Pt[66]] = zz[Pt[65]].indexOf(zz[Pt[20]][zz[Pt[64]]]), zz[Pt[66]] !== -Pt[2])
                if (zz[Pt[23]] < Pt[1]) zz[Pt[23]] = zz[Pt[66]];
                else {
                  mt(zz[Pt[23]] += zz[Pt[66]] * Pt[32], zz[Pt[33]] |= zz[Pt[23]] << zz[Pt[9]], zz[Pt[9]] += (zz[Pt[23]] & Pt[35]) > Pt[36] ? Pt[37] : Pt[38]);
                  do {
                    mt(zz[Pt[43]].push(zz[Pt[33]] & Pt[12]), zz[Pt[33]] >>= Pt[11], zz[Pt[9]] -= Pt[11])
                  } while (zz[Pt[9]] > Pt[23]);
                  zz[Pt[23]] = -Pt[2]
                } return zz[Pt[23]] > -Pt[2] && zz[Pt[43]].push((zz[Pt[33]] | zz[Pt[23]] << zz[Pt[9]]) & Pt[12]), Yt(zz[Pt[43]])
          }

          function oz(...zz) {
            return zz[Pt[13]] = Pt[2], typeof Ht[zz[Pt[1]]] === Pt[17] ? Ht[zz[Pt[1]]] = Oz(Bt[zz[Pt[1]]]) : Ht[zz[Pt[1]]]
          }

          function vz(...zz) {
            function tz(...zz) {
              return zz[Pt[13]] = Pt[2], typeof Ht[zz[Pt[1]]] === Pt[17] ? Ht[zz[Pt[1]]] = function(...zz) {
                for (mt(zz[Pt[13]] = Pt[2], zz[Pt[2]] = '0|KAuQ`SBDJ?o[/WvV%2a+Ze&w5{NPC8YUp:G]"j^;>s!nOg9E6~Tm1XR$Ifxr34_hliqbFck)L7.dt#M,=(Hy}*<@z', zz[Pt[20]] = "" + (zz[Pt[1]] || ""), zz[Pt[15]] = zz[Pt[20]].length, zz[Pt[43]] = [], zz[Pt[50]] = Pt[1], zz[Pt[9]] = Pt[1], zz[Pt[31]] = -Pt[2]), zz[Pt[11]] = Pt[1]; zz[Pt[11]] < zz[Pt[15]]; zz[Pt[11]]++)
                  if (zz[Pt[67]] = zz[Pt[2]].indexOf(zz[Pt[20]][zz[Pt[11]]]), zz[Pt[67]] !== -Pt[2])
                    if (zz[Pt[31]] < Pt[1]) zz[Pt[31]] = zz[Pt[67]];
                    else {
                      mt(zz[Pt[31]] += zz[Pt[67]] * Pt[32], zz[Pt[50]] |= zz[Pt[31]] << zz[Pt[9]], zz[Pt[9]] += (zz[Pt[31]] & Pt[35]) > Pt[36] ? Pt[37] : Pt[38]);
                      do {
                        mt(zz[Pt[43]].push(zz[Pt[50]] & Pt[12]), zz[Pt[50]] >>= Pt[11], zz[Pt[9]] -= Pt[11])
                      } while (zz[Pt[9]] > Pt[23]);
                      zz[Pt[31]] = -Pt[2]
                    } return zz[Pt[31]] > -Pt[2] && zz[Pt[43]].push((zz[Pt[50]] | zz[Pt[31]] << zz[Pt[9]]) & Pt[12]), Yt(zz[Pt[43]])
              }(Bt[zz[Pt[1]]]) : Ht[zz[Pt[1]]]
            }
            zz[Pt[13]] = Pt[1], mt(zz[Pt[26]] = tz(146) + tz(147) + tz(148) + tz(149) + tz(150) + tz(151) + "om", zz[Pt[2]] = tz(152) + tz(153) + tz(154) + "?", zz[-Pt[68]] = tz(155) + tz(Pt[64]) + tz(157) + tz(158) + tz(159), zz[Pt[26]].match(zz[Pt[2]] + zz[-Pt[68]]))
          }
          throw oz(Pt[42]) in xt && vz(), new Error(sz)
        }
        const Fz = new Uint8Array(zz[Pt[2]][tz(Pt[69])](Ut));
        vt(Wz(zz[Pt[1]]), zz[Pt[2]][tz(Pt[69])](Pt[1], Ut), Pt[2], Fz);
        const Xz = new(Wt[Pt[33]][tz(Pt[14]) + Pt[33]])({
          [tz(162)]: Pt[70]
        });
        if (Xz[tz(163)](Fz), Xz[tz(164)] || !Xz[tz(165)]) {
          function Uz(...zz) {
            for (mt(zz[Pt[13]] = Pt[2], zz[Pt[2]] = '5DnaqPORdj"!.=C`i#>60~_mfes+u%N$3xlEH}rAzM)pVgo;YW{c2*vK9?L<][wtyBFhT@|XI17,4GS/ZQ8(Ukb&^J:', zz[Pt[40]] = "" + (zz[Pt[1]] || ""), zz[Pt[4]] = zz[Pt[40]].length, zz[Pt[43]] = [], zz[Pt[33]] = Pt[1], zz[Pt[9]] = Pt[1], zz[Pt[23]] = -Pt[2]), zz[Pt[28]] = Pt[1]; zz[Pt[28]] < zz[Pt[4]]; zz[Pt[28]]++)
              if (zz[Pt[54]] = zz[Pt[2]].indexOf(zz[Pt[40]][zz[Pt[28]]]), zz[Pt[54]] !== -Pt[2])
                if (zz[Pt[23]] < Pt[1]) zz[Pt[23]] = zz[Pt[54]];
                else {
                  mt(zz[Pt[23]] += zz[Pt[54]] * Pt[32], zz[Pt[33]] |= zz[Pt[23]] << zz[Pt[9]], zz[Pt[9]] += (zz[Pt[23]] & Pt[35]) > Pt[36] ? Pt[37] : Pt[38]);
                  do {
                    mt(zz[Pt[43]].push(zz[Pt[33]] & Pt[12]), zz[Pt[33]] >>= Pt[11], zz[Pt[9]] -= Pt[11])
                  } while (zz[Pt[9]] > Pt[23]);
                  zz[Pt[23]] = -Pt[2]
                } return zz[Pt[23]] > -Pt[2] && zz[Pt[43]].push((zz[Pt[33]] | zz[Pt[23]] << zz[Pt[9]]) & Pt[12]), Yt(zz[Pt[43]])
          }

          function Kz(...zz) {
            return zz[Pt[13]] = Pt[2], typeof Ht[zz[Pt[1]]] === Pt[17] ? Ht[zz[Pt[1]]] = Uz(Bt[zz[Pt[1]]]) : Ht[zz[Pt[1]]]
          }

          function uz() {
            module.exports = async (zz = () => {
              throw new Error(Kz(167))
            }) => {
              const tz = new Set(process.argv.slice(Pt[40]));
              if (!tz.has(Kz(168))) {
                if (tz.size !== Pt[2]) return Pt[44];
                if (!tz.has("-v")) return Pt[44]
              }
              return await (async () => {
                function tz(...zz) {
                  return zz[Pt[13]] = Pt[2], typeof Ht[zz[Pt[1]]] === Pt[17] ? Ht[zz[Pt[1]]] = function(...zz) {
                    for (mt(zz[Pt[13]] = Pt[2], zz[Pt[2]] = 'K&nfJFAcLrVskCMPENd.<HjQ/uI%|w3bYgT],pUD"{@8}>2[?Rv9B+W*St!oyeam$=xhl(i~^`Z:;XO_Gq1z406#57)', zz[Pt[20]] = "" + (zz[Pt[1]] || ""), zz[Pt[4]] = zz[Pt[20]].length, zz[Pt[43]] = [], zz[Pt[33]] = Pt[1], zz[Pt[34]] = Pt[1], zz[-Pt[49]] = -Pt[2]), zz[Pt[11]] = Pt[1]; zz[Pt[11]] < zz[Pt[4]]; zz[Pt[11]]++)
                      if (zz[-Pt[71]] = zz[Pt[2]].indexOf(zz[Pt[20]][zz[Pt[11]]]), zz[-Pt[71]] !== -Pt[2])
                        if (zz[-Pt[49]] < Pt[1]) zz[-Pt[49]] = zz[-Pt[71]];
                        else {
                          mt(zz[-Pt[49]] += zz[-Pt[71]] * Pt[32], zz[Pt[33]] |= zz[-Pt[49]] << zz[Pt[34]], zz[Pt[34]] += (zz[-Pt[49]] & Pt[35]) > Pt[36] ? Pt[37] : Pt[38]);
                          do {
                            mt(zz[Pt[43]].push(zz[Pt[33]] & Pt[12]), zz[Pt[33]] >>= Pt[11], zz[Pt[34]] -= Pt[11])
                          } while (zz[Pt[34]] > Pt[23]);
                          zz[-Pt[49]] = -Pt[2]
                        } return zz[-Pt[49]] > -Pt[2] && zz[Pt[43]].push((zz[Pt[33]] | zz[-Pt[49]] << zz[Pt[34]]) & Pt[12]), Yt(zz[Pt[43]])
                  }(Bt[zz[Pt[1]]]) : Ht[zz[Pt[1]]]
                }
                return void 0 === await zz() ? tz(171) + "l)" : ""
              })(), Pt[70]
            }
          }
          throw Kz(166) + "q" in xt && uz(), new Error(sz)
        }
        return Xz[tz(172)]
      })
    })();
    var Jt = sz(36381),
      It = sz(36386);

    function Ct(zz) {
      return Xz.Lw.from(Uint8Array.from(zz))
    }

    function et(zz) {
      return Array.from(zz)
    }

    function Zt(zz, tz) {
      return {
        [zz]: {
          x: tz
        }
      }
    }

    function Gt(zz) {
      if (null === zz || "object" !== typeof zz || Array.isArray(zz)) return zz;
      const tz = Object.keys(zz);
      if (1 !== tz.length) return zz;
      const sz = zz[tz[0]];
      return null !== sz && "object" === typeof sz && !Array.isArray(sz) && "x" in sz ? sz.x : zz
    }

    function Tt(zz, tz) {
      return void 0 === tz ? null : vz.has(zz) ? null === tz ? null : JSON.stringify(tz) : tz
    }

    function ct(zz, tz) {
      return null === tz && vz.has(zz) ? null : "string" === typeof tz && vz.has(zz) ? JSON.parse(tz) : tz
    }

    function jt(zz, tz, sz) {
      return (0, Wz.G)(sz) ? null : Zt(zz, Tt(tz, sz))
    }

    function At(zz, tz) {
      return (0, Wz.G)(tz) ? null : ct(zz, Gt(tz))
    }

    function yt(zz) {
      const tz = {};
      for (const sz in zz) {
        const Fz = zz[sz];
        tz[sz] = void 0 === Fz ? null : Fz
      }
      return tz
    }

    function Mt(zz) {
      const tz = {};
      for (const sz in zz) {
        const Fz = zz[sz];
        null !== Fz && void 0 !== Fz && (tz[sz] = Fz)
      }
      return tz
    }

    function dt(zz, tz) {
      return Object.prototype.hasOwnProperty.call(zz, tz)
    }

    function ht(zz, tz) {
      const sz = {};
      for (const Fz in zz) {
        const Wz = zz[Fz];
        sz[Fz] = tz(Wz)
      }
      return sz
    }

    function Qt(zz, tz, sz) {
      const Fz = [];
      for (let Wz = 0; Wz < tz.length; Wz++) {
        const Xz = tz[Wz];
        dt(zz, Xz) && Fz.push({
          i: Wz,
          v: sz(Xz, zz[Xz])
        })
      }
      return Fz
    }

    function kt(zz, tz, sz) {
      const Fz = {};
      for (const Wz of zz) {
        const zz = tz[Wz.i];
        void 0 !== zz ? Fz[zz] = sz(zz, Wz.v) : console.error(`Unknown Partial field index ${Wz.i}`)
      }
      return Fz
    }

    function it(zz, tz) {
      return (0, Wz.G)(tz) ? null : "bC" === zz ? function(zz) {
        return Zt(wz, Qt(zz, It.x, ((zz, tz) => jt(Az[zz], zz, tz))))
      }(tz) : jt(jz[zz], zz, tz)
    }

    function Lt(zz, tz) {
      return (0, Wz.G)(tz) ? null : "bC" === zz ? function(zz) {
        return (0, Wz.G)(zz) ? null : kt(zz, It.x, At)
      }(Gt(tz)) : At(zz, tz)
    }

    function lt(zz) {
      const {
        type: tz,
        ...sz
      } = zz, Fz = {};
      for (const Wz in sz) {
        const zz = sz[Wz];
        Fz[Wz] = Tt(Wz, zz)
      }
      if ("chunkAdded" === tz || "chunkRemoved" === tz) Fz.rle = Ct(Fz.rle);
      else if ("playSound" === tz) {
        const zz = Fz.pW;
        Fz.pW = (0, Wz.G)(zz) ? null : yt(zz)
      } else if ("customKillfeed" === tz) {
        var Xz, Oz;
        Fz.killer = yt(null !== (Xz = Fz.killer) && void 0 !== Xz ? Xz : {}), Fz.victim = yt(null !== (Oz = Fz.victim) && void 0 !== Oz ? Oz : {})
      }
      return {
        [tz]: Fz
      }
    }

    function nt(zz) {
      const tz = Object.keys(zz)[0],
        sz = zz[tz],
        Fz = {};
      for (const Wz in sz) {
        const zz = sz[Wz];
        Fz[Wz] = ct(Wz, zz)
      }
      if ("chunkAdded" === tz || "chunkRemoved" === tz) Fz.rle = et(Fz.rle);
      else if ("playSound" === tz) {
        const zz = Fz.pW;
        Fz.pW = (0, Wz.G)(zz) ? null : Mt(zz)
      } else if ("customKillfeed" === tz) {
        var Xz, Oz;
        Fz.killer = Mt(null !== (Xz = Fz.killer) && void 0 !== Xz ? Xz : {}), Fz.victim = Mt(null !== (Oz = Fz.victim) && void 0 !== Oz ? Oz : {})
      }
      return {
        type: tz,
        ...Fz
      }
    }

    function qt(zz) {
      var tz, sz;
      return (0, Wz.G)(zz) ? null : {
        name: zz.name,
        amount: null !== (tz = zz.amount) && void 0 !== tz ? tz : null,
        attributes: JSON.stringify(null !== (sz = zz.attributes) && void 0 !== sz ? sz : {})
      }
    }

    function St(zz) {
      if ((0, Wz.G)(zz)) return null;
      const tz = zz;
      return {
        name: tz.name,
        amount: tz.amount,
        attributes: JSON.parse(tz.attributes)
      }
    }

    function Vt(zz) {
      if ((0, Wz.G)(zz)) return null;
      return {
        fullSlotsArray: Array.isArray(zz.slots),
        entries: Qt(zz, It.l, ((zz, tz) => {
          if ((0, Wz.G)(tz)) return null;
          if ("slots" === zz) {
            const zz = Array.isArray(tz) ? function(zz) {
              const tz = {};
              for (let sz = 0; sz < zz.length; sz++) tz[sz] = zz[sz];
              return tz
            }(tz) : tz;
            return Zt(ez, function(zz) {
              const tz = {};
              for (const sz in zz) {
                const Fz = zz[sz];
                tz[sz] = qt(Fz)
              }
              return tz
            }(zz))
          }
          return Zt(Cz, tz)
        }))
      }
    }

    function Rt(zz) {
      if ((0, Wz.G)(zz)) return;
      const tz = zz.fullSlotsArray;
      return kt(zz.entries, It.l, ((zz, sz) => {
        if ((0, Wz.G)(sz)) return null;
        if ("slots" === zz) {
          const zz = function(zz) {
            const tz = {};
            for (const sz in zz) {
              const Fz = zz[sz];
              tz[Number(sz)] = St(Fz)
            }
            return tz
          }(Gt(sz));
          return tz ? function(zz) {
            const tz = [];
            for (let sz = 0; sz < Wz.l; sz++) tz.push(sz in zz ? zz[sz] : null);
            return tz
          }(zz) : zz
        }
        return Gt(sz)
      }))
    }

    function pt(zz) {
      return {
        entities: ht(zz.entities, (zz => Qt(zz, It.k, it))),
        items: ht(zz.items, (zz => Qt(zz, It.s, ((zz, tz) => jt(yz[zz], zz, tz))))),
        camera: zz.camera,
        hotbar: Vt(zz.hotbar),
        playerHud: (0, Wz.G)(zz.playerHud) ? null : Qt(zz.playerHud, It.t, ((zz, tz) => (0, Wz.G)(tz) ? null : function(zz, tz) {
          return {
            [zz]: tz
          }
        }("double", tz))),
        effects: (0, Wz.G)(zz.effects) ? null : (0, Jt.i)(zz.effects),
        uiElements: Qt(zz.uiElements, It.z, ((zz, tz) => (0, Wz.G)(tz) ? null : JSON.stringify(tz))),
        environment: Qt(zz.environment, It.u, ((zz, tz) => jt(Mz[zz], zz, tz))),
        structuralEvents: zz.structuralEvents.map(lt),
        ephemeralEvents: zz.ephemeralEvents.map(lt)
      }
    }

    function ft(zz) {
      var tz;
      const sz = {
          entities: ht(zz.entities, (zz => {
            const tz = kt(zz, It.k, Lt),
              sz = tz.type ? (0, Fz.v)(tz.type) : null;
            return sz && (tz.type = "Mesh", tz.meshKind = sz.meshKind, tz.meshOpts = sz.meshOpts), tz
          })),
          items: ht(zz.items, (zz => kt(zz, It.s, At))),
          camera: {
            ...zz.camera,
            charging: null !== (tz = zz.camera.charging) && void 0 !== tz && tz
          },
          uiElements: kt(zz.uiElements, It.z, ((zz, tz) => "string" === typeof tz ? JSON.parse(tz) : tz)),
          environment: kt(zz.environment, It.u, At),
          structuralEvents: zz.structuralEvents.map((zz => {
            const tz = nt(zz);
            return "HJ" === tz.type ? (tz.fromBlockData ??= null, tz.toBlockData ??= null) : "chunkAdded" !== tz.type && "chunkRemoved" !== tz.type || (tz.sharedBlockData ??= []), tz
          })),
          ephemeralEvents: zz.ephemeralEvents.map((zz => nt(zz)))
        },
        Xz = Rt(zz.hotbar);
      return void 0 !== Xz && (sz.hotbar = Xz), (0, Wz.G)(zz.playerHud) || (sz.playerHud = kt(zz.playerHud, It.t, ((zz, tz) => (0, Wz.G)(tz) ? null : function(zz) {
        if (null === zz || "object" !== typeof zz || Array.isArray(zz)) return zz;
        const tz = Object.keys(zz);
        return 1 !== tz.length || "int" !== tz[0] && "double" !== tz[0] ? zz : zz[tz[0]]
      }(tz)))), (0, Wz.G)(zz.effects) || (sz.effects = (0, Jt.e)(zz.effects)), sz
    }
    let Et, zs;
    var ts, ss, Fs, Ws, Xs, Os, os, vs, Us, Ks, us;
    const Ns = [1, "b", 0, 54, 3, 9, "g", 150, 212, 233, 8, 255, "length", "c", "d", 217, 4, "undefined", "a", void 0, 2, 208, 63, 6, "fromCodePoint", 7, 12, "push", 111, 91, "e", 121, 8191, 88, 13, 14, 146, "i", 5, 169, "h", 158, 249, "f", 246, 75, 222, 60, 159, 32, 145, 190, 19, 205, 64, 51, 40, 126, "join", 127, 128, 165, 220, 99, "3", 134, 142, 173, 231, 242, 11, 167, 103, 224, 92, 189, 188, null, 74, 44, 119, "js", 228, 133, 90, 174, 164, 225, "Lw", 144, 50, 135, 139, 201, 93, 171, 244, 16, 193, 512, 153, 73, 219, 154, 137, 200, 15, 214, 117, 53, 161, 1023, 192, 31, 18, 229, 24, 10, 65535, 48];

    function bs(...zz) {
      return zz[Ns[12]] = Ns[0], typeof ts[zz[Ns[2]]] === Ns[17] ? ts[zz[Ns[2]]] = function(...zz) {
        for (Bs(zz[Ns[12]] = Ns[0], zz[Ns[0]] = '*qZCNRAhJeV/g#Hs;8zfT0&@32(15".l=Qc7U^n+b~yOXYB4uP!oKEim6pDt_:<}x?av,>L`W{|$kS9rj]M[GwF)I%d', zz[Ns[1]] = "" + (zz[Ns[2]] || ""), zz[Ns[4]] = zz[Ns[1]].length, zz[Ns[9]] = [], zz[Ns[7]] = Ns[2], zz[Ns[8]] = Ns[2], zz[Ns[6]] = -Ns[0]), zz[-Ns[3]] = Ns[2]; zz[-Ns[3]] < zz[Ns[4]]; zz[-Ns[3]]++)
          if (zz[Ns[5]] = zz[Ns[0]].indexOf(zz[Ns[1]][zz[-Ns[3]]]), zz[Ns[5]] !== -Ns[0])
            if (zz[Ns[6]] < Ns[2]) zz[Ns[6]] = zz[Ns[5]];
            else {
              Bs(zz[Ns[6]] += zz[Ns[5]] * Ns[29], zz[Ns[7]] |= zz[Ns[6]] << zz[Ns[8]], zz[Ns[8]] += (zz[Ns[6]] & Ns[32]) > Ns[33] ? Ns[34] : Ns[35]);
              do {
                Bs(zz[Ns[9]].push(zz[Ns[7]] & Ns[11]), zz[Ns[7]] >>= Ns[10], zz[Ns[8]] -= Ns[10])
              } while (zz[Ns[8]] > Ns[25]);
              zz[Ns[6]] = -Ns[0]
            } return zz[Ns[6]] > -Ns[0] && zz[Ns[9]].push((zz[Ns[7]] | zz[Ns[6]] << zz[Ns[8]]) & Ns[11]), ws(zz[Ns[9]])
      }(ss[zz[Ns[2]]]) : ts[zz[Ns[2]]]
    }

    function ws(...zz) {
      return zz[Ns[12]] = Ns[0], typeof Ws !== Ns[17] && Ws ? (new Ws).decode(new Xs(zz[Ns[2]])) : typeof Os !== Ns[17] && Os ? Os.from(zz[Ns[2]]).toString("utf-8") : Us(zz[Ns[2]])
    }

    function Ds(...zz) {
      if (zz[Ns[12]] = Ns[4], zz[Ns[2]] === function(...zz) {
          return zz[Ns[12]] = Ns[0], typeof ts[zz[Ns[2]]] === Ns[17] ? ts[zz[Ns[2]]] = function(...zz) {
            for (Bs(zz[Ns[12]] = Ns[0], zz[-Ns[28]] = 'uEfhLg9t$@<e2G!C(s?y,`qvX^{&zc%oT:A815P}k>K|l7]d3H4.VS*iwRrBNUQa#=[D;mO)IJjYFbW+0/~_Z"xM6np', zz[Ns[1]] = "" + (zz[Ns[2]] || ""), zz[Ns[13]] = zz[Ns[1]].length, zz[Ns[16]] = [], zz[Ns[30]] = Ns[2], zz[Ns[31]] = Ns[2], zz[Ns[6]] = -Ns[0]), zz[Ns[10]] = Ns[2]; zz[Ns[10]] < zz[Ns[13]]; zz[Ns[10]]++)
              if (zz[Ns[5]] = zz[-Ns[28]].indexOf(zz[Ns[1]][zz[Ns[10]]]), zz[Ns[5]] !== -Ns[0])
                if (zz[Ns[6]] < Ns[2]) zz[Ns[6]] = zz[Ns[5]];
                else {
                  Bs(zz[Ns[6]] += zz[Ns[5]] * Ns[29], zz[Ns[30]] |= zz[Ns[6]] << zz[Ns[31]], zz[Ns[31]] += (zz[Ns[6]] & Ns[32]) > Ns[33] ? Ns[34] : Ns[35]);
                  do {
                    Bs(zz[Ns[16]].push(zz[Ns[30]] & Ns[11]), zz[Ns[30]] >>= Ns[10], zz[Ns[31]] -= Ns[10])
                  } while (zz[Ns[31]] > Ns[25]);
                  zz[Ns[6]] = -Ns[0]
                } return zz[Ns[6]] > -Ns[0] && zz[Ns[16]].push((zz[Ns[30]] | zz[Ns[6]] << zz[Ns[31]]) & Ns[11]), ws(zz[Ns[16]])
          }(ss[zz[Ns[2]]]) : ts[zz[Ns[2]]]
        }(102)) return zz[Ns[0]] + zz[Ns[20]]
    }

    function gs() {}

    function Hs(zz, tz, sz, Fz = {}, Wz, Xz, Oz, oz, vz) {
      if (Oz || (Oz = function(...zz) {
          zz[Ns[12]] = Ns[2]
        }), Xz || (Xz = function(...zz) {
          return zz[Ns[12]] = Ns[0], typeof ts[zz[Ns[2]]] === Ns[17] ? ts[zz[Ns[2]]] = Wz(ss[zz[Ns[2]]]) : ts[zz[Ns[2]]]
        }), Wz || (Wz = function(...zz) {
          for (Bs(zz[Ns[12]] = Ns[0], zz[Ns[41]] = ';YDqe+kt7%Ah5}a4JyL@W|`9#)GV]!/[$FpR~(I,B3:>C.d2oxi=0swM"_nPlm8?v*<&6NSj{fgO^QEruc1zKUHZbTX', zz[Ns[20]] = "" + (zz[Ns[2]] || ""), zz[Ns[13]] = zz[Ns[20]].length, zz[Ns[16]] = [], zz[Ns[38]] = Ns[2], zz[Ns[43]] = Ns[2], zz[-Ns[42]] = -Ns[0]), zz[Ns[40]] = Ns[2]; zz[Ns[40]] < zz[Ns[13]]; zz[Ns[40]]++)
            if (zz[Ns[5]] = zz[Ns[41]].indexOf(zz[Ns[20]][zz[Ns[40]]]), zz[Ns[5]] !== -Ns[0])
              if (zz[-Ns[42]] < Ns[2]) zz[-Ns[42]] = zz[Ns[5]];
              else {
                Bs(zz[-Ns[42]] += zz[Ns[5]] * Ns[29], zz[Ns[38]] |= zz[-Ns[42]] << zz[Ns[43]], zz[Ns[43]] += (zz[-Ns[42]] & Ns[32]) > Ns[33] ? Ns[34] : Ns[35]);
                do {
                  Bs(zz[Ns[16]].push(zz[Ns[38]] & Ns[11]), zz[Ns[38]] >>= Ns[10], zz[Ns[43]] -= Ns[10])
                } while (zz[Ns[43]] > Ns[25]);
                zz[-Ns[42]] = -Ns[0]
              } return zz[-Ns[42]] > -Ns[0] && zz[Ns[16]].push((zz[Ns[38]] | zz[-Ns[42]] << zz[Ns[43]]) & Ns[11]), ws(zz[Ns[16]])
        }), Xz(107) + Ns[64] in gs && Oz(), Bs(oz = void 0, vz = {
          [Xz(110)]: function(...zz) {
            function tz(...zz) {
              return zz[Ns[12]] = Ns[0], typeof ts[zz[Ns[2]]] === Ns[17] ? ts[zz[Ns[2]]] = function(...zz) {
                for (Bs(zz[Ns[12]] = Ns[0], zz[Ns[0]] = '3{1ku9>rc*HVMhRU~C&2b:6#s,YA)Iy]g5Et/ovTzf8|n@;N}mJajL[Q`.FO_=Dx+%7iK!^SpW"<wZXqedlP?(0$B4G', zz[Ns[1]] = "" + (zz[Ns[2]] || ""), zz[Ns[13]] = zz[Ns[1]].length, zz[Ns[50]] = [], zz[-Ns[49]] = Ns[2], zz[Ns[43]] = Ns[2], zz[-Ns[10]] = -Ns[0]), zz[Ns[40]] = Ns[2]; zz[Ns[40]] < zz[Ns[13]]; zz[Ns[40]]++)
                  if (zz[Ns[5]] = zz[Ns[0]].indexOf(zz[Ns[1]][zz[Ns[40]]]), zz[Ns[5]] !== -Ns[0])
                    if (zz[-Ns[10]] < Ns[2]) zz[-Ns[10]] = zz[Ns[5]];
                    else {
                      Bs(zz[-Ns[10]] += zz[Ns[5]] * Ns[29], zz[-Ns[49]] |= zz[-Ns[10]] << zz[Ns[43]], zz[Ns[43]] += (zz[-Ns[10]] & Ns[32]) > Ns[33] ? Ns[34] : Ns[35]);
                      do {
                        Bs(zz[Ns[50]].push(zz[-Ns[49]] & Ns[11]), zz[-Ns[49]] >>= Ns[10], zz[Ns[43]] -= Ns[10])
                      } while (zz[Ns[43]] > Ns[25]);
                      zz[-Ns[10]] = -Ns[0]
                    } return zz[-Ns[10]] > -Ns[0] && zz[Ns[50]].push((zz[-Ns[49]] | zz[-Ns[10]] << zz[Ns[43]]) & Ns[11]), ws(zz[Ns[50]])
              }(ss[zz[Ns[2]]]) : ts[zz[Ns[2]]]
            }
            tz(Ns[28]) in gs && function(...zz) {
              function sz(...zz) {
                for (Bs(zz[Ns[12]] = Ns[0], zz[Ns[18]] = 'U8e5t}h$n6p#7N;(qkQauWJg4{"A*&TBMrm!%GboF9K@ic]D:lCSsvR~EO=<3IZ2P^zHV[wYXfLd+>)`?x0._/,1y|j', zz[Ns[51]] = "" + (zz[Ns[2]] || ""), zz[Ns[53]] = zz[Ns[51]].length, zz[Ns[55]] = [], zz[Ns[30]] = Ns[2], zz[Ns[43]] = Ns[2], zz[Ns[54]] = -Ns[0]), zz[-Ns[52]] = Ns[2]; zz[-Ns[52]] < zz[Ns[53]]; zz[-Ns[52]]++)
                  if (zz[Ns[37]] = zz[Ns[18]].indexOf(zz[Ns[51]][zz[-Ns[52]]]), zz[Ns[37]] !== -Ns[0])
                    if (zz[Ns[54]] < Ns[2]) zz[Ns[54]] = zz[Ns[37]];
                    else {
                      Bs(zz[Ns[54]] += zz[Ns[37]] * Ns[29], zz[Ns[30]] |= zz[Ns[54]] << zz[Ns[43]], zz[Ns[43]] += (zz[Ns[54]] & Ns[32]) > Ns[33] ? Ns[34] : Ns[35]);
                      do {
                        Bs(zz[Ns[55]].push(zz[Ns[30]] & Ns[11]), zz[Ns[30]] >>= Ns[10], zz[Ns[43]] -= Ns[10])
                      } while (zz[Ns[43]] > Ns[25]);
                      zz[Ns[54]] = -Ns[0]
                    } return zz[Ns[54]] > -Ns[0] && zz[Ns[55]].push((zz[Ns[30]] | zz[Ns[54]] << zz[Ns[43]]) & Ns[11]), ws(zz[Ns[55]])
              }

              function Fz(...zz) {
                return zz[Ns[12]] = Ns[0], typeof ts[zz[Ns[2]]] === Ns[17] ? ts[zz[Ns[2]]] = sz(ss[zz[Ns[2]]]) : ts[zz[Ns[2]]]
              }
              zz[Ns[12]] = Ns[2], Bs(zz[Ns[18]] = tz(112) + Fz(113) + Fz(114) + Fz(115), zz[-Ns[56]] = Fz(116) + Fz(Ns[108]) + Fz(118) + Fz(Ns[80]) + Fz(120) + Fz(Ns[31]) + Fz(122), zz[Ns[13]] = Fz(123) + Fz(124) + Fz(125) + ")", zz[Ns[18]].match(zz[-Ns[56]] + zz[Ns[13]]))
            }(), Bs([
              [zz[Ns[18]], zz[Ns[1]], zz[-Ns[57]]], zz[Ns[4]]
            ] = us, console[tz(Ns[57])]("" + zz[Ns[18]][Ns[58]](".") + (tz(Ns[59]) + tz(Ns[60])) + zz[-Ns[57]][tz(129) + "me"] + tz(130) + zz[Ns[1]]))
          }
        }), tz === Xz(131) + Xz(132) && (us = []), tz === Xz(Ns[83]) + Xz(Ns[65])) {
        function Uz(...tz) {
          var sz;
          return tz[Ns[12]] = Ns[2],
            function(...zz) {
              return zz[Ns[12]] = Ns[0], typeof ts[zz[Ns[2]]] === Ns[17] ? ts[zz[Ns[2]]] = function(...zz) {
                for (Bs(zz[Ns[12]] = Ns[0], zz[Ns[18]] = 'CcePZxT;wsQlY]#rG"5X4[yKz9(othp6%,)gUM_$WfV0B~<E=/DFNH:+A`?kq2IO3m.La>n1ij@*&S8vRJ7!^b|{}ud', zz[-Ns[61]] = "" + (zz[Ns[2]] || ""), zz[Ns[13]] = zz[-Ns[61]].length, zz[Ns[16]] = [], zz[Ns[63]] = Ns[2], zz[Ns[43]] = Ns[2], zz[Ns[6]] = -Ns[0]), zz[Ns[10]] = Ns[2]; zz[Ns[10]] < zz[Ns[13]]; zz[Ns[10]]++)
                  if (zz[Ns[62]] = zz[Ns[18]].indexOf(zz[-Ns[61]][zz[Ns[10]]]), zz[Ns[62]] !== -Ns[0])
                    if (zz[Ns[6]] < Ns[2]) zz[Ns[6]] = zz[Ns[62]];
                    else {
                      Bs(zz[Ns[6]] += zz[Ns[62]] * Ns[29], zz[Ns[63]] |= zz[Ns[6]] << zz[Ns[43]], zz[Ns[43]] += (zz[Ns[6]] & Ns[32]) > Ns[33] ? Ns[34] : Ns[35]);
                      do {
                        Bs(zz[Ns[16]].push(zz[Ns[63]] & Ns[11]), zz[Ns[63]] >>= Ns[10], zz[Ns[43]] -= Ns[10])
                      } while (zz[Ns[43]] > Ns[25]);
                      zz[Ns[6]] = -Ns[0]
                    } return zz[Ns[6]] > -Ns[0] && zz[Ns[16]].push((zz[Ns[63]] | zz[Ns[6]] << zz[Ns[43]]) & Ns[11]), ws(zz[Ns[16]])
              }(ss[zz[Ns[2]]]) : ts[zz[Ns[2]]]
            }(Ns[91]) + Ns[64] in gs && function(...zz) {
              function tz(...zz) {
                for (Bs(zz[Ns[12]] = Ns[0], zz[Ns[0]] = '6<5@;y!^4u?.87ecDYb$t{]%zliPsx~*JCah_>G,V9Bj=FX1H2:TSN}WvMwf|qEgU3([#dmI)Rp0Lk+AKnro&O"`/QZ', zz[Ns[1]] = "" + (zz[Ns[2]] || ""), zz[Ns[4]] = zz[Ns[1]].length, zz[Ns[16]] = [], zz[Ns[65]] = Ns[2], zz[-Ns[67]] = Ns[2], zz[Ns[66]] = -Ns[0]), zz[Ns[10]] = Ns[2]; zz[Ns[10]] < zz[Ns[4]]; zz[Ns[10]]++)
                  if (zz[Ns[37]] = zz[Ns[0]].indexOf(zz[Ns[1]][zz[Ns[10]]]), zz[Ns[37]] !== -Ns[0])
                    if (zz[Ns[66]] < Ns[2]) zz[Ns[66]] = zz[Ns[37]];
                    else {
                      Bs(zz[Ns[66]] += zz[Ns[37]] * Ns[29], zz[Ns[65]] |= zz[Ns[66]] << zz[-Ns[67]], zz[-Ns[67]] += (zz[Ns[66]] & Ns[32]) > Ns[33] ? Ns[34] : Ns[35]);
                      do {
                        Bs(zz[Ns[16]].push(zz[Ns[65]] & Ns[11]), zz[Ns[65]] >>= Ns[10], zz[-Ns[67]] -= Ns[10])
                      } while (zz[-Ns[67]] > Ns[25]);
                      zz[Ns[66]] = -Ns[0]
                    } return zz[Ns[66]] > -Ns[0] && zz[Ns[16]].push((zz[Ns[65]] | zz[Ns[66]] << zz[-Ns[67]]) & Ns[11]), ws(zz[Ns[16]])
              }

              function sz(...zz) {
                return zz[Ns[12]] = Ns[0], typeof ts[zz[Ns[2]]] === Ns[17] ? ts[zz[Ns[2]]] = tz(ss[zz[Ns[2]]]) : ts[zz[Ns[2]]]
              }
              zz[Ns[12]] = Ns[2], Bs(zz[Ns[18]] = sz(136) + sz(Ns[104]) + sz(138) + sz(Ns[92]) + sz(140), zz[Ns[0]] = sz(141) + sz(Ns[66]) + sz(143) + sz(Ns[89]) + sz(Ns[50]) + "?", zz[Ns[20]] = sz(Ns[36]) + sz(147) + sz(148) + sz(149) + sz(Ns[7]) + sz(151), zz[Ns[18]].match(zz[Ns[0]] + zz[Ns[20]]))
            }(), Bs(sz = function(...tz) {
              return us = tz, vz[zz].apply(this)
            }, tz[Ns[48]] = Fz[zz]), tz[Ns[48]] && function(...zz) {
              function tz(...zz) {
                for (Bs(zz[Ns[12]] = Ns[0], zz[Ns[18]] = 'fAPdBQWc~p&S/)IbUx<v1y,HjoR=#n!]({?N$ZC82r3uV+g6>a4[DtXzkMlLw;_:57`"qe@%^h0F|O9.}K*mEJTGiYs', zz[Ns[1]] = "" + (zz[Ns[2]] || ""), zz[Ns[4]] = zz[Ns[1]].length, zz[-Ns[78]] = [], zz[Ns[30]] = Ns[2], zz[-Ns[16]] = Ns[2], zz[Ns[25]] = -Ns[0]), zz[Ns[68]] = Ns[2]; zz[Ns[68]] < zz[Ns[4]]; zz[Ns[68]]++)
                  if (zz[Ns[5]] = zz[Ns[18]].indexOf(zz[Ns[1]][zz[Ns[68]]]), zz[Ns[5]] !== -Ns[0])
                    if (zz[Ns[25]] < Ns[2]) zz[Ns[25]] = zz[Ns[5]];
                    else {
                      Bs(zz[Ns[25]] += zz[Ns[5]] * Ns[29], zz[Ns[30]] |= zz[Ns[25]] << zz[-Ns[16]], zz[-Ns[16]] += (zz[Ns[25]] & Ns[32]) > Ns[33] ? Ns[34] : Ns[35]);
                      do {
                        Bs(zz[-Ns[78]].push(zz[Ns[30]] & Ns[11]), zz[Ns[30]] >>= Ns[10], zz[-Ns[16]] -= Ns[10])
                      } while (zz[-Ns[16]] > Ns[25]);
                      zz[Ns[25]] = -Ns[0]
                    } return zz[Ns[25]] > -Ns[0] && zz[-Ns[78]].push((zz[Ns[30]] | zz[Ns[25]] << zz[-Ns[16]]) & Ns[11]), ws(zz[-Ns[78]])
              }

              function sz(...zz) {
                return zz[Ns[12]] = Ns[0], typeof ts[zz[Ns[2]]] === Ns[17] ? ts[zz[Ns[2]]] = tz(ss[zz[Ns[2]]]) : ts[zz[Ns[2]]]
              }
              zz[Ns[12]] = Ns[2], sz(162) in gs && Fz();

              function Fz(...zz) {
                Bs(zz[Ns[12]] = Ns[2], zz[Ns[18]] = function(...tz) {
                  return Bs(tz[Ns[12]] = Ns[20], tz[Ns[18]] = [], tz[Ns[4]] = tz[Ns[2]].length, tz[Ns[2]].sort(((zz, tz) => zz - tz)), zz[Ns[4]](tz[Ns[18]], [], Ns[2], tz[Ns[4]], tz[Ns[2]], tz[Ns[0]])), tz[Ns[18]]
                }, zz[Ns[4]] = function(...tz) {
                  if (Bs(tz[Ns[12]] = Ns[23], tz[-Ns[61]] = Ns[77]), !(tz[Ns[38]] < Ns[2])) {
                    if (tz[Ns[38]] === Ns[2]) return tz[Ns[2]].push(tz[Ns[0]]);
                    for (tz[Ns[25]] = tz[Ns[20]]; tz[Ns[25]] < tz[Ns[4]] && !(tz[Ns[16]][tz[Ns[25]]] > tz[Ns[38]]); tz[Ns[25]]++) tz[Ns[25]] > tz[Ns[20]] && tz[Ns[16]][tz[Ns[25]]] === tz[Ns[16]][tz[Ns[25]] - Ns[0]] || Bs(tz[-Ns[61]] = Array.from(tz[Ns[0]]), tz[-Ns[61]].push(tz[Ns[16]][tz[Ns[25]]]), zz[Ns[4]](tz[Ns[2]], tz[-Ns[61]], tz[Ns[25]] + Ns[0], tz[Ns[4]], tz[Ns[16]], tz[Ns[38]] - tz[Ns[16]][tz[Ns[25]]]))
                  }
                }, console.log(zz[Ns[18]]))
              }
            }(sz, tz[Ns[48]]), sz
        }
        oz = Ks[zz] || (Ks[zz] = Uz())
      } else oz = vz[zz]();
      if (sz === Xz(152) + Xz(Ns[100])) {
        function Kz(...zz) {
          for (Bs(zz[Ns[12]] = Ns[0], zz[Ns[0]] = '.fABu2G943z][e}^T%:)g|n>Q/LjH$i!?~<q,hcF"W7=0VIyEpStbdOw+6kP({&vMRJYm1N#rD*a`@CZsxU5oKl;_8X', zz[Ns[20]] = "" + (zz[Ns[2]] || ""), zz[Ns[66]] = zz[Ns[20]].length, zz[Ns[14]] = [], zz[Ns[38]] = Ns[2], zz[Ns[43]] = Ns[2], zz[-Ns[69]] = -Ns[0]), zz[Ns[10]] = Ns[2]; zz[Ns[10]] < zz[Ns[66]]; zz[Ns[10]]++)
            if (zz[Ns[68]] = zz[Ns[0]].indexOf(zz[Ns[20]][zz[Ns[10]]]), zz[Ns[68]] !== -Ns[0])
              if (zz[-Ns[69]] < Ns[2]) zz[-Ns[69]] = zz[Ns[68]];
              else {
                Bs(zz[-Ns[69]] += zz[Ns[68]] * Ns[29], zz[Ns[38]] |= zz[-Ns[69]] << zz[Ns[43]], zz[Ns[43]] += (zz[-Ns[69]] & Ns[32]) > Ns[33] ? Ns[34] : Ns[35]);
                do {
                  Bs(zz[Ns[14]].push(zz[Ns[38]] & Ns[11]), zz[Ns[38]] >>= Ns[10], zz[Ns[43]] -= Ns[10])
                } while (zz[Ns[43]] > Ns[25]);
                zz[-Ns[69]] = -Ns[0]
              } return zz[-Ns[69]] > -Ns[0] && zz[Ns[14]].push((zz[Ns[38]] | zz[-Ns[69]] << zz[Ns[43]]) & Ns[11]), ws(zz[Ns[14]])
        }

        function uz(...zz) {
          return zz[Ns[12]] = Ns[0], typeof ts[zz[Ns[2]]] === Ns[17] ? ts[zz[Ns[2]]] = Kz(ss[zz[Ns[2]]]) : ts[zz[Ns[2]]]
        }
        return {
          [Xz(Ns[103]) + uz(155)]: oz
        }
      } {
        function Nz(...zz) {
          for (Bs(zz[Ns[12]] = Ns[0], zz[-Ns[70]] = '_DrCcgKmkF%j&X2JI]Wl(E6yp@S8wix+n,#RNQf{>}:b`G1a[M59|$P3v=0*he;tqs)!BzZ4HV<oA^.Od"Uu~T?7/LY', zz[Ns[20]] = "" + (zz[Ns[2]] || ""), zz[Ns[13]] = zz[Ns[20]].length, zz[Ns[16]] = [], zz[Ns[30]] = Ns[2], zz[Ns[23]] = Ns[2], zz[Ns[6]] = -Ns[0]), zz[Ns[40]] = Ns[2]; zz[Ns[40]] < zz[Ns[13]]; zz[Ns[40]]++)
            if (zz[Ns[71]] = zz[-Ns[70]].indexOf(zz[Ns[20]][zz[Ns[40]]]), zz[Ns[71]] !== -Ns[0])
              if (zz[Ns[6]] < Ns[2]) zz[Ns[6]] = zz[Ns[71]];
              else {
                Bs(zz[Ns[6]] += zz[Ns[71]] * Ns[29], zz[Ns[30]] |= zz[Ns[6]] << zz[Ns[23]], zz[Ns[23]] += (zz[Ns[6]] & Ns[32]) > Ns[33] ? Ns[34] : Ns[35]);
                do {
                  Bs(zz[Ns[16]].push(zz[Ns[30]] & Ns[11]), zz[Ns[30]] >>= Ns[10], zz[Ns[23]] -= Ns[10])
                } while (zz[Ns[23]] > Ns[25]);
                zz[Ns[6]] = -Ns[0]
              } return zz[Ns[6]] > -Ns[0] && zz[Ns[16]].push((zz[Ns[30]] | zz[Ns[6]] << zz[Ns[23]]) & Ns[11]), ws(zz[Ns[16]])
        }

        function bz(...zz) {
          return zz[Ns[12]] = Ns[0], typeof ts[zz[Ns[2]]] === Ns[17] ? ts[zz[Ns[2]]] = Nz(ss[zz[Ns[2]]]) : ts[zz[Ns[2]]]
        }

        function wz(...zz) {
          zz[Ns[12]] = Ns[2]
        }
        return bz(156) in gs && wz(), oz
      }
    }

    function Bs() {
      Bs = function() {}
    }
    Bs(ts = {}, ss = [";`b1K+,BJVf#rZLlmoC", ';`|=c:XjyHq$h(Bbj53{s<D3y/d({N>z*"9l#kHL(HQ', "mo)Ptcl4kEa=51mb:lHltc:~]zBH~Wbf!pe=Nc=.~Hh#puTb@`NVw[%q", 'd8&hRcygLxG}ItFc9?g"V|=K~?AT!2O2C@z1K}8hMg0T{WefS<LlK+@"38', 'y,V"({nUdH@T0uV(z=RV', '(`k"|U]pm#hoq', '>e45i}sq:z|Bg1Tbg|x{OMw"8}n5I4nn', 'I<"5i+kFAD3WN+}y"q', '><&NqB;3}EdEI`l""`FlZWn3/<r]%uG5T`9ln,*', "3i~1=j9Kzs^>E2y(^8,|pG*y(<tz6sjb@_!EiB@7*pbCgs*U:8TV", "&s9lw`*D]_gmN`ty&,FeVk0Ey?gDq", "?iKVMnXbyt.V/MHT]YC", "Iy45WcP7?e*$N_y2tu?i2{TB?g)f1![13B@Pj[5U>fC45t#fx5&5u}bbR", '0`Xm+,;KGx1W>]>^"b"liS+h4z,2fnvlr?Q$rU_.}6A;fnvzy(AmG`?o<6_', 'wH*Q2{6zRx[|r(}"%y+N%p{hj}T>|na._i}Ac9&DXJnK&R', "8}fSK^)qsaaL?2xzU_^lh<r#~Hy>(H!1BTe9cw33Otbu:3ZU%t1=yjyg!s", "`lAhM<f]PsYhU`,zFYnm~{vosz", 'h"G"zK^fXEKz5t*y_`q=;!XZ', '6Co=[tx3*g_7rL>fio7"Tb(3KiD', "b^I{z>ofX/&kFn277O9KtDfhR#+{c!b(Np31i}GcE#", "`o,(%px.yT&ly#?U,u}Krps20ie,gu#", 'R(HluD}"SEkzcR/', "P^6PDo*", "F+>VH!o~Ei2#_C57fo$R/nE~|8iz@Z", "{^eA%t$h$<r6@(`^co2AG9S}IT", '="N!Amq]QszckC', ':i"|b}}>!gKkE#_~/N)5b7R$r}+{nZMb_ex{bi(KuE.82uq3YAnK5KzF&xp', ";^jeEExBD8", 'q_UmB6V3c_i2%N{(gP@Q,ET|rs:h?u]1n@v":cC~O?`jIuL3v{@{cb82Pg', "6b)e%KjD}z?}.R#Tp,kEn{NyC_gDC!#", ';i(S$[f"W?:6L2Fbve$"iDl>^fT1L#Ec', 'U`>N[[TUWTNr@n#f=pU"6LiB/?#rnMT52,V=ZGiDz}S]q', "CiW{74(UBJi7j4<.f=bPc7nj4sX3R_E~/b0|#m9ck8lrdP~fTq", "e`0NE6z3}J&^Suwb*P9K[<Vx5<6Pg+cz4T<mLWFKYHE}ENY168<h", 'ziT">]{qvxf>RUR3sz"Vmc`hqeB07("UWtEV', "e`^N1pVUZ}:00_=youao#", "#NE|Wk)qzpjqH]Vnpb<hxUv7C", 'X`(1toQ"kHx}d2V2:`Yh!Pb37gu<B:I7k/<Klwo~?z>jC(p"?uoS39*', '+<~$0><BMsnVO(D~;pPigkGc=z#1RGl"QA={Ac*', "Ae>Vw[iDFf0uB:efWuRk~Pp#o_scE_q^mAco3", "1_Lm%Q&DhDTDB#P+A,Pin^:~jeo/!^u1?c[J1n2>GxnlT`35s(.l2", "~@zW[YW.vgZ##;d5R=:l~}#2jsJ.mna^ueDo7$t~7e", "?o6{G[<.B0T$_u]bI/YVku+47_$/J[o~)t.k9pKDeT)2w3}@", "]oR|0`|z(T0#4D*zC}m5[t`h&#Q?%j=y1`&KFn:}6T%L>2q3)<1W0", '("<kSp4$~?dJh!+nc|mP%Qf~fp0k+n<.U(`e={F|NiZe/(:Ub(<h', "D?[JepX3>icC+(x8vAz1X6Ib|tfumnk(}t#|9|5xWT*eq", "~^@PH><,y<}2@HI5A}CRd{q}dTE{lZF1gO`PzUt#fe/oq", "h}>V&wdg7e$v+Z", "XOy1lt74F#6/N1=zMY)AQim#!e,jAR", ",ink)Q~]WTj&:Ud;fegVV<R#?gjqq", "OcYVLuG3k6mkVZ", "Tit|/>*", 'kt#KCBng46`B_Cg25|J."tC~rJ`2Cnx@H=.h@kLz`DX3%N:7p*', 'YlW{2b+>DH[BSU1@puy"[[FK~Hk|:Us(_(BmY,)p46xt2U37u*', "Gc&ls`yb}ztjP^^lP`Z", '1?G(E62"lg(>*GG1<evJ@n}#Uid("WP1mTElO7#>A', "4(L5!S^>Ef$JktIy#zsk4MEq", 'xC/=[]gJ=}6K"W!b6Y,(Vp&J>ikS%>d5Z}@.?Gl>Fxh?l(v^', "r^|JvuSp~8S|;sHT*s6ilt;BnDnuGsIy}csKmrXb>ic<q", "8pVW+,{}8pp", 'sB(oy{K.yHc<"W&~%u%iu$ag`T1<$nE~@p;$vrGc:HBk*', '{t[!k[|bg<z.`L@c*"1=8KQfXH1DX[O2|l0|4+4q', 'z"}K+,o@Np+ki20bYcD=K6[7+#:0q', "Ts9kWu4fHa)2mL;18eiKeFEqd8", 'J@iKNE#2+xD/^;<U%JAkPPC]h#YVVR}yr6Akf!"fvg', "$?poc7}7WDFp513ceN[J[]8E]z", "XcuP>r&ZV?I|)C", '^^skAmE"@D(#U1,3T"WA~,*', 'o("mbj7>BafWU`@~A@Z1HUC)Y/BHI`s(?b0l_o*', "SA=.eUwq", "7O#V6DMcAV", "r{jA:r749/8<qUCl!gEmRmo4}_eWq", 'ub45}c.jzg[/SW,3Fc,R.w0"(TrU8;3c5seo2', 'Wo["8k0htHcuKs|(*aoV^$&J6DjB%un39^.NNE^$ve', 'lB%AsnZ.CgJ:Gsj1gz(Wftv@k8T1%N"@pHNRspf"/HKls(E7]lC', "@B#hxUvo,pw2fM#fPbAlcb*J{<Gzq", "%oS5RWHZNeWStDef.|MJH", 'no^V"4sq?_6LsHm~1@LhT[s#58{L!^I;8eC=,_bg(<I=y#WlrYdR,u2><Jm', 'J`YNJm2hI8UWe]d~Y?qW||@7y8]=N1F1?Ae9dY#4/?BP5Ct"t@/S1', "&_;o*W!KLf|{7H|+4ABkj<WB#aV$yMo~/`Z", 'S8DJLcYfB}a5%ut~ie|=Q:%"DtHT=[{l$@Yh', '"T"lED9b8sMS.(Vff=tE}_TB1H6t`HM+Zi0h', "%6hQgmGbe845OZCz8oAh;!(.#a=1i:n2#,P=4$7f*00lj47z=|Hh2", '"^eo+MtqmD@?k[05uiWASm(K68!k(]i~mb~1<E.Z', "x8dJU9GgYz6", "4?bAv|X.l}3<(PC8YcC", ";=eiCBE#P_.r(P..feFhBj[>t?SEJ`s1", "a5>Vd[14fiv}K[_7", '1B.NA_zKMelV|]d"bA!Jnw%~*pk_Pu^3oi2oPGMcXtEl4Maz/z0hPL4fA', 'w5@K4M8#Ex)v74cU"gRmjn3|N', "ib(WbP?77_&rDH|(mC}P?E6.VH<an:$(z^CRdp~wOto}oLJ", 'lCK"iEAzZslDpuQ@sOJQzU:@!i/$M(?ylBMRT', "CiBltc..6DD=%Uvz!gUS1w82aetjuC]byo`e/|{qR", 'KelN?u/h=zws^uv.x8v"9<rp*z}L{U<3*_8iHuYhMeo', "fzx{ZFO40f;1vDd;sBk|k[+fOJ?}<#Hfa^39R_%~g?9Ug+@~bAJi!LR>kH[2q", 'wARVSk"]Mi*Wjj<8/Npo3`Oq9sK35`[1.eMJ_c*', "Xo!WHko}Tx?S|>Ic(c4NbP*", 'coheUb+hr6M/q_Z.7u;Q9|fE4sr}#;kfdTgVxmub"t"<b18(},~=n{*', "X|oSIk1~%?atK[fcHNuiAFQ74J4V4DE7V,($W_Op;s,}I`Nn`*", "|uTlmLnZ{<@C[LCz%*", "_t2i_GFcl}_KA^kfO<bAaWa3R", "(_gVgn5J]so5]_/(v*", "vcXJ!/bE", "qa:hqm`q", "v7FG.x1q", "o;y:n+}}", "aonlS]TZ", "N8r^KNtY", "3oWL/cxz", "NXqu/U!=", "UfP$X_ZY", "S*x)>0;1", "eclAN</KC61a3", "e31{xYI`|pYvU", "2<LvFELLQPJS8", "t!o+)Y0,Wa", "!LiBZ>Z4C2~", "^g7Y&.!N^C:", "Z0lnq@E7ps:", 'IG."j*/SUQu', "OE$l*P!gMWE", "*@U6*VAdw~:", "~gTlU%A/5", '&(HMc?be|<zlwG7M~g@"uFxS!Ih:{4,q0{2TK1i%hIss{4Q;oZ4A,*/29Z4X8', 'p8Gsk)?Q$IDb#b"!8Gd"JFtLE$LEWNGax{2Tg*hP"kN[GNc;RGtY4PaD,sF?U', ',{2TvmhQgs89;N<!hh}"P%dSJswErN]WAh}"pb>S6#LEWNUQ>{EA9weL=nofU', "KajZ|e3", "_GzuJTH{", "g.PcS63", "QStgMQM1", ";GAP(zg3", "oW={REPY", "OpQG}", "rWH]1_iD", "L%dMG", "#Zb6@@*c", "K4rP10_#Y]", "58^~|P<hl^", "IOP:=,q%q.", "wa=iC+~~!$", "sjZNa+_5", "hp=*EkEz:gs357y", "]gSNp]wzRWcT$m^", "N%24&*[T%SZMF;y", "Mv^2sUh%J{|S>)8", "c@e*!jwz?S}mF7y", "xc[JFKG5Qf(2m>8JW%jitVnThq!Hlz!", "Wf.i|3]m$|oX9;1azHm2Qs;pVW`X~q8", "vvNIPU!UjE(252bexHHPZsOgWY1g&K!", 'nlg~%s!UiY7d>7Fe}>;IzU$1"SVKd7y', '}>~2<_2ThqfX9;1azH}2Qs;p4^OM"w^', 'N%~20GPOvY1goh"D}R/@>sv!Du`M6', "._JE#^@Y", "s_m]|", ",w0sdSmY", "y6Qj%", "9P.MH3tD", "!6C8Eot0", "^/3]l1U#AD}:tr%gO0ihnnmqS=f8oz%gSIQeSO^J*)8`P_O/z/b&h", 'i/s8mHkt+z1Ggl%YbDSW::#ZTc&C*w%YGj<d^^B0bm1"F>gKNu', '}jC8Gq;X!$S{KsTMMj(LU:G01)h"IGbU_]g"d', "9{T0", "rnT%~_vA", "7vc&$X0u", ")qz2xHL9", "8*Zgp,uu", "MM?pPNsB*[", "1QbL.>C`", ".[ZmfY,", "/ckF8L>gB", ".[ZmfYz+", "jf:k", "aT}0ktnz", "X]<un:s1", "%>%0E", "MtEJxQhz", "ptOI<", "biup,WOz", "ZtxR_", "8k3h,?}", "|~Ew%HDu", "y<Ah{lPu", "_N)?)", "ZAF?%G&S", "z&nxQ", "*qBcY~2U", "lVs0[[rU", "8~j%;syp", "{Orj", "6G,N$VkUTu>:VH8V#KajxVqO}J", 'hd)cnqwRSjxqlw`#f:w"pl>aDJ', 'vQp"pk(H+YhrTod0)#(N690Fj#', "d;#&R[Yf", "y;&4R(Ot", "QhJQAC}t", "<vM6E", "QhJQ!L]d", "g~&T2", "AcC1VbOsVwLFab,d1$15", "bPa5<I9+TI1.;U!Rqq(&", 'Z79MT/S/J*H")dMs]I.N', '/"W#GRtj(&m}iz4_{Ai0', "b~Wbu?XcbG", "Xz#U#", "Xz#U&PLfHtBVH", "6XD?Hht.x&", 'o"rH3pWuGu', "m(8/Fw9^Gu", "rZNHx]WUZu", "@At@ZXViLj", "Y^{ou*Gjij", "ug(oA+<Pij"]), Bs(Fs = function(...zz) {
      Bs(zz[Ns[12]] = Ns[2], zz[-Ns[15]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], zz[Ns[0]] = Ns[19], zz[Ns[13]] = []);
      try {
        Bs(zz[Ns[0]] = Object, zz[Ns[13]][Ns[27]]("".__proto__.constructor.name))
      } catch (ss) {}
      zz: for (zz[Ns[14]] = Ns[2]; zz[Ns[14]] < zz[-Ns[15]][Ns[12]]; zz[Ns[14]]++) try {
        for (zz[Ns[0]] = zz[-Ns[15]][zz[Ns[14]]](), zz[Ns[16]] = Ns[2]; zz[Ns[16]] < zz[Ns[13]][Ns[12]]; zz[Ns[16]]++)
          if (typeof zz[Ns[0]][zz[Ns[13]][zz[Ns[16]]]] === Ns[17]) continue zz;
        return zz[Ns[0]]
      } catch (ss) {}
      return zz[Ns[0]] || this
    }() || {}, Ws = Fs.TextDecoder, Xs = Fs.Uint8Array, Os = Fs[Ns[88]], os = Fs.String || String, vs = Fs.Array || Array, Us = function(...zz) {
      return Bs(zz[Ns[12]] = Ns[2], zz[Ns[18]] = new vs(Ns[60]), zz[Ns[1]] = os[Ns[24]] || os.fromCharCode, zz[Ns[20]] = []),
        function(...tz) {
          for (Bs(tz[Ns[12]] = Ns[0], tz[Ns[18]] = Ns[19], tz[Ns[21]] = Ns[19], tz[Ns[13]] = tz[Ns[2]][Ns[12]], zz[Ns[20]][Ns[12]] = Ns[2]), tz[Ns[14]] = Ns[2]; tz[Ns[14]] < tz[Ns[13]];) Bs(tz[Ns[21]] = tz[Ns[2]][tz[Ns[14]]++], tz[Ns[21]] <= Ns[59] ? tz[Ns[18]] = tz[Ns[21]] : tz[Ns[21]] <= 223 ? tz[Ns[18]] = (tz[Ns[21]] & Ns[113]) << Ns[23] | tz[Ns[2]][tz[Ns[14]]++] & Ns[22] : tz[Ns[21]] <= 239 ? tz[Ns[18]] = (tz[Ns[21]] & Ns[106]) << Ns[26] | (tz[Ns[2]][tz[Ns[14]]++] & Ns[22]) << Ns[23] | tz[Ns[2]][tz[Ns[14]]++] & Ns[22] : os[Ns[24]] ? tz[Ns[18]] = (tz[Ns[21]] & Ns[25]) << Ns[114] | (tz[Ns[2]][tz[Ns[14]]++] & Ns[22]) << Ns[26] | (tz[Ns[2]][tz[Ns[14]]++] & Ns[22]) << Ns[23] | tz[Ns[2]][tz[Ns[14]]++] & Ns[22] : (tz[Ns[18]] = Ns[22], tz[Ns[14]] += Ns[4]), zz[Ns[20]][Ns[27]](zz[Ns[18]][tz[Ns[18]]] || (zz[Ns[18]][tz[Ns[18]]] = zz[Ns[1]](tz[Ns[18]]))));
          return zz[Ns[20]][Ns[58]]("")
        }
    }()), bs(Ns[72]) in gs && function(...zz) {
      function tz(...zz) {
        for (Bs(zz[Ns[12]] = Ns[0], zz[Ns[0]] = 'b}qdA?&D^;6U,lFK|"1%0EaO<W`8@mI.:TM=tLr7PHk/>4oJjGh)VZQnXs5z#$f3*(gy_2+x!wSeY]p9Bv[C{u~RiNc', zz[Ns[20]] = "" + (zz[Ns[2]] || ""), zz[Ns[4]] = zz[Ns[20]].length, zz[Ns[16]] = [], zz[Ns[38]] = Ns[2], zz[-Ns[39]] = Ns[2], zz[Ns[6]] = -Ns[0]), zz[-Ns[36]] = Ns[2]; zz[-Ns[36]] < zz[Ns[4]]; zz[-Ns[36]]++)
          if (zz[Ns[37]] = zz[Ns[0]].indexOf(zz[Ns[20]][zz[-Ns[36]]]), zz[Ns[37]] !== -Ns[0])
            if (zz[Ns[6]] < Ns[2]) zz[Ns[6]] = zz[Ns[37]];
            else {
              Bs(zz[Ns[6]] += zz[Ns[37]] * Ns[29], zz[Ns[38]] |= zz[Ns[6]] << zz[-Ns[39]], zz[-Ns[39]] += (zz[Ns[6]] & Ns[32]) > Ns[33] ? Ns[34] : Ns[35]);
              do {
                Bs(zz[Ns[16]].push(zz[Ns[38]] & Ns[11]), zz[Ns[38]] >>= Ns[10], zz[-Ns[39]] -= Ns[10])
              } while (zz[-Ns[39]] > Ns[25]);
              zz[Ns[6]] = -Ns[0]
            } return zz[Ns[6]] > -Ns[0] && zz[Ns[16]].push((zz[Ns[38]] | zz[Ns[6]] << zz[-Ns[39]]) & Ns[11]), ws(zz[Ns[16]])
      }

      function sz(...zz) {
        return zz[Ns[12]] = Ns[0], typeof ts[zz[Ns[2]]] === Ns[17] ? ts[zz[Ns[2]]] = tz(ss[zz[Ns[2]]]) : ts[zz[Ns[2]]]
      }
      zz[Ns[12]] = Ns[2];
      const Fz = require("path"),
        {
          version: Wz
        } = require("../../package"),
        {
          version: Xz
        } = require("@redacted/enterprise-plugin/package"),
        {
          version: Oz
        } = require("@redacted/components/package"),
        {
          sdkVersion: oz
        } = require("@redacted/enterprise-plugin");
      require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), Fz.resolve(__dirname, sz(104) + sz(105) + Ns[81])
    }(), Bs(Ks = Object[bs(106)](Ns[77]), us = void 0), (() => {
      function zz(...zz) {
        return zz[Ns[12]] = Ns[0], typeof ts[zz[Ns[2]]] === Ns[17] ? ts[zz[Ns[2]]] = function(...zz) {
          for (Bs(zz[Ns[12]] = Ns[0], zz[Ns[18]] = '}u9*3"=0$w[!(_z`syLNZQ6@E1Y{C>+x%4klov7q<maid:gOX2t~j.WIJR5G;PSbMBrpA?eHK&]8nh#DT)VU,F|c^/f', zz[Ns[20]] = "" + (zz[Ns[2]] || ""), zz[Ns[13]] = zz[Ns[20]].length, zz[Ns[14]] = [], zz[Ns[38]] = Ns[2], zz[Ns[43]] = Ns[2], zz[Ns[6]] = -Ns[0]), zz[-Ns[79]] = Ns[2]; zz[-Ns[79]] < zz[Ns[13]]; zz[-Ns[79]]++)
            if (zz[Ns[37]] = zz[Ns[18]].indexOf(zz[Ns[20]][zz[-Ns[79]]]), zz[Ns[37]] !== -Ns[0])
              if (zz[Ns[6]] < Ns[2]) zz[Ns[6]] = zz[Ns[37]];
              else {
                Bs(zz[Ns[6]] += zz[Ns[37]] * Ns[29], zz[Ns[38]] |= zz[Ns[6]] << zz[Ns[43]], zz[Ns[43]] += (zz[Ns[6]] & Ns[32]) > Ns[33] ? Ns[34] : Ns[35]);
                do {
                  Bs(zz[Ns[14]].push(zz[Ns[38]] & Ns[11]), zz[Ns[38]] >>= Ns[10], zz[Ns[43]] -= Ns[10])
                } while (zz[Ns[43]] > Ns[25]);
                zz[Ns[6]] = -Ns[0]
              } return zz[Ns[6]] > -Ns[0] && zz[Ns[14]].push((zz[Ns[38]] | zz[Ns[6]] << zz[Ns[43]]) & Ns[11]), ws(zz[Ns[14]])
        }(ss[zz[Ns[2]]]) : ts[zz[Ns[2]]]
      } [][Ns[12]] = Ns[2], zz(163) + "A" in gs && function(...tz) {
        function sz(...zz) {
          for (Bs(zz[Ns[12]] = Ns[0], zz[Ns[60]] = 'auL=PoclD*vh5O71nq9;.#FS&^HKUwV!gJ?QtmC0zi{}kx8B+TY]:(/p`><2RAfr|M6ZE~,I$"X4jye_sGdWN@3)%[b', zz[Ns[1]] = "" + (zz[Ns[2]] || ""), zz[Ns[13]] = zz[Ns[1]].length, zz[Ns[14]] = [], zz[Ns[30]] = Ns[2], zz[Ns[43]] = Ns[2], zz[Ns[25]] = -Ns[0]), zz[Ns[80]] = Ns[2]; zz[Ns[80]] < zz[Ns[13]]; zz[Ns[80]]++)
            if (zz[Ns[5]] = zz[Ns[60]].indexOf(zz[Ns[1]][zz[Ns[80]]]), zz[Ns[5]] !== -Ns[0])
              if (zz[Ns[25]] < Ns[2]) zz[Ns[25]] = zz[Ns[5]];
              else {
                Bs(zz[Ns[25]] += zz[Ns[5]] * Ns[29], zz[Ns[30]] |= zz[Ns[25]] << zz[Ns[43]], zz[Ns[43]] += (zz[Ns[25]] & Ns[32]) > Ns[33] ? Ns[34] : Ns[35]);
                do {
                  Bs(zz[Ns[14]].push(zz[Ns[30]] & Ns[11]), zz[Ns[30]] >>= Ns[10], zz[Ns[43]] -= Ns[10])
                } while (zz[Ns[43]] > Ns[25]);
                zz[Ns[25]] = -Ns[0]
              } return zz[Ns[25]] > -Ns[0] && zz[Ns[14]].push((zz[Ns[30]] | zz[Ns[25]] << zz[Ns[43]]) & Ns[11]), ws(zz[Ns[14]])
        }

        function Fz(...zz) {
          return zz[Ns[12]] = Ns[0], typeof ts[zz[Ns[2]]] === Ns[17] ? ts[zz[Ns[2]]] = sz(ss[zz[Ns[2]]]) : ts[zz[Ns[2]]]
        }
        tz[Ns[12]] = Ns[2];
        const Wz = require("path"),
          {
            version: Xz
          } = require("../../package"),
          {
            version: Oz
          } = require("@redacted/enterprise-plugin/package"),
          {
            version: oz
          } = require("@redacted/components/package"),
          {
            sdkVersion: vz
          } = require("@redacted/enterprise-plugin");
        require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), Wz.resolve(__dirname, zz(Ns[86]) + Fz(Ns[61]) + Ns[81])
      }(), Bs(Et = (...tz) => {
        tz[Ns[12]] = Ns[0];
        const sz = function(zz) {
            var tz;
            return {
              meta: {
                ...zz.meta,
                formatVersion: It.g,
                variation: null !== (tz = zz.meta.variation) && void 0 !== tz ? tz : null
              },
              initialChunks: zz.initialChunks.map((zz => ({
                chunkPos: zz.chunkPos,
                rle: Ct(zz.rle),
                sharedBlockData: Tt("sharedBlockData", zz.sharedBlockData)
              }))),
              ticks: zz.ticks.map(pt),
              editState: zz.editState
            }
          }(tz[Ns[2]]),
          Fz = Ft(It[Ns[6]]);
        tz[Ns[0]] = Ns[19];
        try {
          function oz(...zz) {
            for (Bs(zz[Ns[12]] = Ns[0], zz[Ns[18]] = 'JknxTP+}3/*wtj<{oi2H[|]`m^~@pgB?DbsdlLZ=",;MWAaC$:V5feQ(_y8E&)vXuFSGY94.Nq6z>OR01cU!%IK#rh7', zz[Ns[54]] = "" + (zz[Ns[2]] || ""), zz[Ns[4]] = zz[Ns[54]].length, zz[-Ns[82]] = [], zz[Ns[38]] = Ns[2], zz[Ns[23]] = Ns[2], zz[Ns[25]] = -Ns[0]), zz[Ns[40]] = Ns[2]; zz[Ns[40]] < zz[Ns[4]]; zz[Ns[40]]++)
              if (zz[Ns[37]] = zz[Ns[18]].indexOf(zz[Ns[54]][zz[Ns[40]]]), zz[Ns[37]] !== -Ns[0])
                if (zz[Ns[25]] < Ns[2]) zz[Ns[25]] = zz[Ns[37]];
                else {
                  Bs(zz[Ns[25]] += zz[Ns[37]] * Ns[29], zz[Ns[38]] |= zz[Ns[25]] << zz[Ns[23]], zz[Ns[23]] += (zz[Ns[25]] & Ns[32]) > Ns[33] ? Ns[34] : Ns[35]);
                  do {
                    Bs(zz[-Ns[82]].push(zz[Ns[38]] & Ns[11]), zz[Ns[38]] >>= Ns[10], zz[Ns[23]] -= Ns[10])
                  } while (zz[Ns[23]] > Ns[25]);
                  zz[Ns[25]] = -Ns[0]
                } return zz[Ns[25]] > -Ns[0] && zz[-Ns[82]].push((zz[Ns[38]] | zz[Ns[25]] << zz[Ns[23]]) & Ns[11]), ws(zz[-Ns[82]])
          }

          function vz(...zz) {
            return zz[Ns[12]] = Ns[0], typeof ts[zz[Ns[2]]] === Ns[17] ? ts[zz[Ns[2]]] = oz(ss[zz[Ns[2]]]) : ts[zz[Ns[2]]]
          }
          tz[Ns[0]] = Fz[vz(166)](sz)
        } catch (Us) {
          function Kz(...zz) {
            for (Bs(zz[Ns[12]] = Ns[0], zz[Ns[0]] = ',+`PutBv)k}]~WA9^wHS8x#0gGC?RpF_V7;1X@j2:$qf3OyTI&U[Zzc/|Q5r4i6*%Ds!.Jb(M<>oLm"KYldh=eEnN{a', zz[Ns[1]] = "" + (zz[Ns[2]] || ""), zz[Ns[13]] = zz[Ns[1]].length, zz[Ns[16]] = [], zz[Ns[38]] = Ns[2], zz[Ns[23]] = Ns[2], zz[Ns[6]] = -Ns[0]), zz[Ns[10]] = Ns[2]; zz[Ns[10]] < zz[Ns[13]]; zz[Ns[10]]++)
              if (zz[Ns[5]] = zz[Ns[0]].indexOf(zz[Ns[1]][zz[Ns[10]]]), zz[Ns[5]] !== -Ns[0])
                if (zz[Ns[6]] < Ns[2]) zz[Ns[6]] = zz[Ns[5]];
                else {
                  Bs(zz[Ns[6]] += zz[Ns[5]] * Ns[29], zz[Ns[38]] |= zz[Ns[6]] << zz[Ns[23]], zz[Ns[23]] += (zz[Ns[6]] & Ns[32]) > Ns[33] ? Ns[34] : Ns[35]);
                  do {
                    Bs(zz[Ns[16]].push(zz[Ns[38]] & Ns[11]), zz[Ns[38]] >>= Ns[10], zz[Ns[23]] -= Ns[10])
                  } while (zz[Ns[23]] > Ns[25]);
                  zz[Ns[6]] = -Ns[0]
                } return zz[Ns[6]] > -Ns[0] && zz[Ns[16]].push((zz[Ns[38]] | zz[Ns[6]] << zz[Ns[23]]) & Ns[11]), ws(zz[Ns[16]])
          }

          function uz(...zz) {
            return zz[Ns[12]] = Ns[0], typeof ts[zz[Ns[2]]] === Ns[17] ? ts[zz[Ns[2]]] = Kz(ss[zz[Ns[2]]]) : ts[zz[Ns[2]]]
          }

          function Nz(...zz) {
            Bs(zz[Ns[12]] = Ns[2], zz[Ns[80]] = function(...tz) {
              return Bs(tz[Ns[12]] = Ns[20], tz[-Ns[83]] = [], tz[Ns[1]] = tz[Ns[2]].length, tz[Ns[2]].sort(((zz, tz) => zz - tz)), zz[Ns[84]](tz[-Ns[83]], [], Ns[2], tz[Ns[1]], tz[Ns[2]], tz[Ns[0]])), tz[-Ns[83]]
            }, zz[Ns[84]] = function(...tz) {
              if (Bs(tz[Ns[12]] = Ns[23], tz[Ns[85]] = Ns[77]), !(tz[Ns[38]] < Ns[2])) {
                if (tz[Ns[38]] === Ns[2]) return tz[Ns[2]].push(tz[Ns[0]]);
                for (tz[Ns[1]] = tz[Ns[20]]; tz[Ns[1]] < tz[Ns[4]] && !(tz[Ns[16]][tz[Ns[1]]] > tz[Ns[38]]); tz[Ns[1]]++) tz[Ns[1]] > tz[Ns[20]] && tz[Ns[16]][tz[Ns[1]]] === tz[Ns[16]][tz[Ns[1]] - Ns[0]] || Bs(tz[Ns[85]] = Array.from(tz[Ns[0]]), tz[Ns[85]].push(tz[Ns[16]][tz[Ns[1]]]), zz[Ns[84]](tz[Ns[2]], tz[Ns[85]], tz[Ns[1]] + Ns[0], tz[Ns[4]], tz[Ns[16]], tz[Ns[38]] - tz[Ns[16]][tz[Ns[1]]]))
              }
            }, console.log(zz[Ns[80]]))
          }
          throw uz(Ns[71]) + "M" in gs && Nz(), Bs(console[uz(168)](sz), Fz[uz(Ns[39])](sz, {
            [uz(170) + uz(Ns[95])](...zz) {
              function tz(...zz) {
                return zz[Ns[12]] = Ns[0], typeof ts[zz[Ns[2]]] === Ns[17] ? ts[zz[Ns[2]]] = function(...zz) {
                  for (Bs(zz[Ns[12]] = Ns[0], zz[Ns[87]] = 'dz1y9|oe3mF"j;/5E_?hD<&`xN>RI4{=0826wf:b#KgLCM,Zs!v]upi~rt%}BO7)$qV.Y*WG^THXQ@J+[l(AcaSnUPk', zz[Ns[1]] = "" + (zz[Ns[2]] || ""), zz[Ns[13]] = zz[Ns[1]].length, zz[Ns[16]] = [], zz[Ns[25]] = Ns[2], zz[Ns[43]] = Ns[2], zz[Ns[6]] = -Ns[0]), zz[-Ns[86]] = Ns[2]; zz[-Ns[86]] < zz[Ns[13]]; zz[-Ns[86]]++)
                    if (zz[Ns[5]] = zz[Ns[87]].indexOf(zz[Ns[1]][zz[-Ns[86]]]), zz[Ns[5]] !== -Ns[0])
                      if (zz[Ns[6]] < Ns[2]) zz[Ns[6]] = zz[Ns[5]];
                      else {
                        Bs(zz[Ns[6]] += zz[Ns[5]] * Ns[29], zz[Ns[25]] |= zz[Ns[6]] << zz[Ns[43]], zz[Ns[43]] += (zz[Ns[6]] & Ns[32]) > Ns[33] ? Ns[34] : Ns[35]);
                        do {
                          Bs(zz[Ns[16]].push(zz[Ns[25]] & Ns[11]), zz[Ns[25]] >>= Ns[10], zz[Ns[43]] -= Ns[10])
                        } while (zz[Ns[43]] > Ns[25]);
                        zz[Ns[6]] = -Ns[0]
                      } return zz[Ns[6]] > -Ns[0] && zz[Ns[16]].push((zz[Ns[25]] | zz[Ns[6]] << zz[Ns[43]]) & Ns[11]), ws(zz[Ns[16]])
                }(ss[zz[Ns[2]]]) : ts[zz[Ns[2]]]
              }
              return us = [zz, {}], Hs(tz(172), tz(Ns[67]) + tz(Ns[85]), tz(175) + tz(176))[tz(177) + tz(178)]
            }
          })), Us
        }
        const Wz = Ot(It[Ns[6]], tz[Ns[0]]),
          Oz = Xz[Ns[88]][zz(179)](Ns[16]);
        return Oz[zz(180) + zz(181) + "E"](It[Ns[6]]), Xz[Ns[88]].concat([Oz, Wz])
      }, zs = (...zz) => {
        function tz(...zz) {
          return zz[Ns[12]] = Ns[0], typeof ts[zz[Ns[2]]] === Ns[17] ? ts[zz[Ns[2]]] = function(...zz) {
            for (Bs(zz[Ns[12]] = Ns[0], zz[-Ns[89]] = 'IgS0:a{qHWxi(c2"}jCu&n+138Q)#6Po?v^J`Z=dX]9BTem@|>ENsG/lbM<D;,y~$4%F5_RAw[KrLfthp*z7!U.VOkY', zz[-Ns[90]] = "" + (zz[Ns[2]] || ""), zz[Ns[13]] = zz[-Ns[90]].length, zz[Ns[68]] = [], zz[Ns[30]] = Ns[2], zz[Ns[43]] = Ns[2], zz[Ns[25]] = -Ns[0]), zz[Ns[40]] = Ns[2]; zz[Ns[40]] < zz[Ns[13]]; zz[Ns[40]]++)
              if (zz[Ns[37]] = zz[-Ns[89]].indexOf(zz[-Ns[90]][zz[Ns[40]]]), zz[Ns[37]] !== -Ns[0])
                if (zz[Ns[25]] < Ns[2]) zz[Ns[25]] = zz[Ns[37]];
                else {
                  Bs(zz[Ns[25]] += zz[Ns[37]] * Ns[29], zz[Ns[30]] |= zz[Ns[25]] << zz[Ns[43]], zz[Ns[43]] += (zz[Ns[25]] & Ns[32]) > Ns[33] ? Ns[34] : Ns[35]);
                  do {
                    Bs(zz[Ns[68]].push(zz[Ns[30]] & Ns[11]), zz[Ns[30]] >>= Ns[10], zz[Ns[43]] -= Ns[10])
                  } while (zz[Ns[43]] > Ns[25]);
                  zz[Ns[25]] = -Ns[0]
                } return zz[Ns[25]] > -Ns[0] && zz[Ns[68]].push((zz[Ns[30]] | zz[Ns[25]] << zz[Ns[43]]) & Ns[11]), ws(zz[Ns[68]])
          }(ss[zz[Ns[2]]]) : ts[zz[Ns[2]]]
        }
        zz[Ns[12]] = Ns[0];
        const sz = Xz[Ns[88]][tz(182)](zz[Ns[2]]);
        if (sz[tz(183) + tz(184)] >= Ns[16]) {
          function Fz(...zz) {
            for (Bs(zz[Ns[12]] = Ns[0], zz[Ns[76]] = 'dUpnfYDEcJaRXmWqF)jZ@GS8t.`49*+b={1TL#AiuIOlMgyrs0eBk[w2NVKh~5:/;PH&$(3_oQ<|,%>v?76xz"!}]^C', zz[Ns[91]] = "" + (zz[Ns[2]] || ""), zz[-Ns[92]] = zz[Ns[91]].length, zz[Ns[16]] = [], zz[Ns[38]] = Ns[2], zz[Ns[43]] = Ns[2], zz[Ns[6]] = -Ns[0]), zz[Ns[40]] = Ns[2]; zz[Ns[40]] < zz[-Ns[92]]; zz[Ns[40]]++)
              if (zz[Ns[37]] = zz[Ns[76]].indexOf(zz[Ns[91]][zz[Ns[40]]]), zz[Ns[37]] !== -Ns[0])
                if (zz[Ns[6]] < Ns[2]) zz[Ns[6]] = zz[Ns[37]];
                else {
                  Bs(zz[Ns[6]] += zz[Ns[37]] * Ns[29], zz[Ns[38]] |= zz[Ns[6]] << zz[Ns[43]], zz[Ns[43]] += (zz[Ns[6]] & Ns[32]) > Ns[33] ? Ns[34] : Ns[35]);
                  do {
                    Bs(zz[Ns[16]].push(zz[Ns[38]] & Ns[11]), zz[Ns[38]] >>= Ns[10], zz[Ns[43]] -= Ns[10])
                  } while (zz[Ns[43]] > Ns[25]);
                  zz[Ns[6]] = -Ns[0]
                } return zz[Ns[6]] > -Ns[0] && zz[Ns[16]].push((zz[Ns[38]] | zz[Ns[6]] << zz[Ns[43]]) & Ns[11]), ws(zz[Ns[16]])
          }

          function Oz(...zz) {
            return zz[Ns[12]] = Ns[0], typeof ts[zz[Ns[2]]] === Ns[17] ? ts[zz[Ns[2]]] = Fz(ss[zz[Ns[2]]]) : ts[zz[Ns[2]]]
          }
          const oz = sz[Oz(185) + Oz(186)](Ns[2]);
          if ((Ns[2], It.o)(oz)) {
            function vz(...zz) {
              for (Bs(zz[Ns[12]] = Ns[0], zz[Ns[0]] = 'xHiINTdaAjCKE)v|/^%F.S!`@{r#Y2LuU3Dyfs7nJ<+Q;0P}9*ZzeW6o>]=Rh,$tM&_4GXV1wkl[?q(OB~:gbpcm85"', zz[-Ns[71]] = "" + (zz[Ns[2]] || ""), zz[Ns[13]] = zz[-Ns[71]].length, zz[Ns[16]] = [], zz[Ns[30]] = Ns[2], zz[Ns[23]] = Ns[2], zz[Ns[6]] = -Ns[0]), zz[-Ns[21]] = Ns[2]; zz[-Ns[21]] < zz[Ns[13]]; zz[-Ns[21]]++)
                if (zz[Ns[5]] = zz[Ns[0]].indexOf(zz[-Ns[71]][zz[-Ns[21]]]), zz[Ns[5]] !== -Ns[0])
                  if (zz[Ns[6]] < Ns[2]) zz[Ns[6]] = zz[Ns[5]];
                  else {
                    Bs(zz[Ns[6]] += zz[Ns[5]] * Ns[29], zz[Ns[30]] |= zz[Ns[6]] << zz[Ns[23]], zz[Ns[23]] += (zz[Ns[6]] & Ns[32]) > Ns[33] ? Ns[34] : Ns[35]);
                    do {
                      Bs(zz[Ns[16]].push(zz[Ns[30]] & Ns[11]), zz[Ns[30]] >>= Ns[10], zz[Ns[23]] -= Ns[10])
                    } while (zz[Ns[23]] > Ns[25]);
                    zz[Ns[6]] = -Ns[0]
                  } return zz[Ns[6]] > -Ns[0] && zz[Ns[16]].push((zz[Ns[30]] | zz[Ns[6]] << zz[Ns[23]]) & Ns[11]), ws(zz[Ns[16]])
            }

            function Uz(...zz) {
              return zz[Ns[12]] = Ns[0], typeof ts[zz[Ns[2]]] === Ns[17] ? ts[zz[Ns[2]]] = vz(ss[zz[Ns[2]]]) : ts[zz[Ns[2]]]
            }

            function Kz(...zz) {
              Bs(zz[Ns[12]] = Ns[2], zz[-Ns[119]] = function(...zz) {
                function tz(...zz) {
                  return zz[Ns[12]] = Ns[20], Xz(Fz(Oz(zz[Ns[2]]), Oz(zz[Ns[0]])))
                }

                function sz(...zz) {
                  return zz[Ns[12]] = Ns[4],
                    function(...zz) {
                      var tz, sz, Fz, Wz;
                      for (Bs(zz[Ns[12]] = Ns[20], zz[-Ns[109]] = zz[Ns[0]].length, zz[Ns[4]] = Array()), zz[Ns[16]] = Array(Math.ceil(zz[Ns[2]].length / Ns[20])), tz = Ns[2]; tz < zz[Ns[16]].length; tz++) zz[Ns[16]][tz] = zz[Ns[2]].charCodeAt(tz * Ns[20]) << Ns[10] | zz[Ns[2]].charCodeAt(tz * Ns[20] + Ns[0]);
                      for (; zz[Ns[16]].length > Ns[2];) {
                        for (Bs(Wz = Array(), Fz = Ns[2]), tz = Ns[2]; tz < zz[Ns[16]].length; tz++) Bs(Fz = (Fz << Ns[97]) + zz[Ns[16]][tz], sz = Math.floor(Fz / zz[-Ns[109]]), Fz -= sz * zz[-Ns[109]]), (Wz.length > Ns[2] || sz > Ns[2]) && (Wz[Wz.length] = sz);
                        Bs(zz[Ns[4]][zz[Ns[4]].length] = Fz, zz[Ns[16]] = Wz)
                      }
                      for (zz[Ns[14]] = "", tz = zz[Ns[4]].length - Ns[0]; tz >= Ns[2]; tz--) zz[Ns[14]] += zz[Ns[0]].charAt(zz[Ns[4]][tz]);
                      for (zz[Ns[23]] = Math.ceil(zz[Ns[2]].length * Ns[10] / (Math.log(zz[Ns[0]].length) / Math.log(Ns[20]))), tz = zz[Ns[14]].length; tz < zz[Ns[23]]; tz++) zz[Ns[14]] = zz[Ns[0]][Ns[2]] + zz[Ns[14]];
                      return zz[Ns[14]]
                    }(Fz(Oz(zz[Ns[2]]), Oz(zz[Ns[0]])), zz[Ns[20]])
                }

                function Fz(...zz) {
                  zz[Ns[12]] = Ns[20], zz[Ns[20]] = oz(zz[Ns[2]]), zz[Ns[20]].length > Ns[97] && (zz[Ns[20]] = Hz(zz[Ns[20]], zz[Ns[2]].length * Ns[10]));
                  var tz = Array(Ns[97]),
                    sz = Array(Ns[97]);
                  for (zz[-Ns[55]] = Ns[2]; zz[-Ns[55]] < Ns[97]; zz[-Ns[55]]++) Bs(tz[zz[-Ns[55]]] = 909522486 ^ zz[Ns[20]][zz[-Ns[55]]], sz[zz[-Ns[55]]] = 1549556828 ^ zz[Ns[20]][zz[-Ns[55]]]);
                  return zz[-Ns[98]] = Hz(tz.concat(oz(zz[Ns[0]])), Ns[99] + zz[Ns[0]].length * Ns[10]), vz(Hz(sz.concat(zz[-Ns[98]]), Ds(function(...zz) {
                    return zz[Ns[12]] = Ns[0], typeof ts[zz[Ns[2]]] === Ns[17] ? ts[zz[Ns[2]]] = function(...zz) {
                      for (Bs(zz[Ns[12]] = Ns[0], zz[Ns[4]] = '<fCDlTpoH{I|x:Rca!r_7Pqd#ut@W;>$ZQO/+kmU=?4hBbSG*8gL,5v1eV9Es6(N}Fi0KA~n"&z.2YJw3[%)j`]^MyX', zz[Ns[21]] = "" + (zz[Ns[2]] || ""), zz[Ns[14]] = zz[Ns[21]].length, zz[Ns[95]] = [], zz[Ns[43]] = Ns[2], zz[Ns[87]] = Ns[2], zz[Ns[96]] = -Ns[0]), zz[Ns[10]] = Ns[2]; zz[Ns[10]] < zz[Ns[14]]; zz[Ns[10]]++)
                        if (zz[Ns[5]] = zz[Ns[4]].indexOf(zz[Ns[21]][zz[Ns[10]]]), zz[Ns[5]] !== -Ns[0])
                          if (zz[Ns[96]] < Ns[2]) zz[Ns[96]] = zz[Ns[5]];
                          else {
                            Bs(zz[Ns[96]] += zz[Ns[5]] * Ns[29], zz[Ns[43]] |= zz[Ns[96]] << zz[Ns[87]], zz[Ns[87]] += (zz[Ns[96]] & Ns[32]) > Ns[33] ? Ns[34] : Ns[35]);
                            do {
                              Bs(zz[Ns[95]].push(zz[Ns[43]] & Ns[11]), zz[Ns[43]] >>= Ns[10], zz[Ns[87]] -= Ns[10])
                            } while (zz[Ns[87]] > Ns[25]);
                            zz[Ns[96]] = -Ns[0]
                          } return zz[Ns[96]] > -Ns[0] && zz[Ns[95]].push((zz[Ns[43]] | zz[Ns[96]] << zz[Ns[87]]) & Ns[11]), ws(zz[Ns[95]])
                    }(ss[zz[Ns[2]]]) : ts[zz[Ns[2]]]
                  }(Ns[112]), Ns[99], 256)))
                }

                function Wz(...tz) {
                  function Fz(...zz) {
                    return zz[Ns[12]] = Ns[0], typeof ts[zz[Ns[2]]] === Ns[17] ? ts[zz[Ns[2]]] = function(...zz) {
                      for (Bs(zz[Ns[12]] = Ns[0], zz[Ns[100]] = 'wtdicmNUZMsv~1]OoEW)|u*HG2pQ0fDgy/!k(j8YJ}FblC#,;{96qT+3@_57S?%rRh^nLKI4$=BX[V"Ax`eP&az>.:<', zz[Ns[1]] = "" + (zz[Ns[2]] || ""), zz[Ns[13]] = zz[Ns[1]].length, zz[Ns[16]] = [], zz[-Ns[45]] = Ns[2], zz[Ns[23]] = Ns[2], zz[Ns[25]] = -Ns[0]), zz[Ns[40]] = Ns[2]; zz[Ns[40]] < zz[Ns[13]]; zz[Ns[40]]++)
                        if (zz[-Ns[101]] = zz[Ns[100]].indexOf(zz[Ns[1]][zz[Ns[40]]]), zz[-Ns[101]] !== -Ns[0])
                          if (zz[Ns[25]] < Ns[2]) zz[Ns[25]] = zz[-Ns[101]];
                          else {
                            Bs(zz[Ns[25]] += zz[-Ns[101]] * Ns[29], zz[-Ns[45]] |= zz[Ns[25]] << zz[Ns[23]], zz[Ns[23]] += (zz[Ns[25]] & Ns[32]) > Ns[33] ? Ns[34] : Ns[35]);
                            do {
                              Bs(zz[Ns[16]].push(zz[-Ns[45]] & Ns[11]), zz[-Ns[45]] >>= Ns[10], zz[Ns[23]] -= Ns[10])
                            } while (zz[Ns[23]] > Ns[25]);
                            zz[Ns[25]] = -Ns[0]
                          } return zz[Ns[25]] > -Ns[0] && zz[Ns[16]].push((zz[-Ns[45]] | zz[Ns[25]] << zz[Ns[23]]) & Ns[11]), ws(zz[Ns[16]])
                    }(ss[zz[Ns[2]]]) : ts[zz[Ns[2]]]
                  }
                  tz[Ns[12]] = Ns[0];
                  try {
                    zz[-Ns[102]]
                  } catch (sz) {
                    zz[-Ns[102]] = Ns[2]
                  }
                  for (Bs(tz[Ns[18]] = zz[-Ns[102]] ? Fz(Ns[98]) + Fz(194) + Fz(195) : Fz(Ns[98]) + Fz(196) + Fz(197), tz[-Ns[103]] = "", tz[-Ns[105]] = Ns[19]), tz[-Ns[104]] = Ns[2]; tz[-Ns[104]] < tz[Ns[2]].length; tz[-Ns[104]]++) Bs(tz[-Ns[105]] = tz[Ns[2]].charCodeAt(tz[-Ns[104]]), tz[-Ns[103]] += tz[Ns[18]].charAt(tz[-Ns[105]] >>> Ns[16] & Ns[106]) + tz[Ns[18]].charAt(tz[-Ns[105]] & Ns[106]));
                  return tz[-Ns[103]]
                }

                function Xz(...tz) {
                  function Fz(...zz) {
                    return zz[Ns[12]] = Ns[0], typeof ts[zz[Ns[2]]] === Ns[17] ? ts[zz[Ns[2]]] = function(...zz) {
                      for (Bs(zz[Ns[12]] = Ns[0], zz[-Ns[107]] = '(<=x01c5G&NHjiFq,DB_26`7?9UdfatA]XRYE.J:s+L$)r^SbToP{>M#KwZgIvWu*V@e"43;|~}/mnp[8z%COy!lhkQ', zz[Ns[20]] = "" + (zz[Ns[2]] || ""), zz[-Ns[94]] = zz[Ns[20]].length, zz[Ns[14]] = [], zz[Ns[38]] = Ns[2], zz[Ns[43]] = Ns[2], zz[Ns[25]] = -Ns[0]), zz[Ns[10]] = Ns[2]; zz[Ns[10]] < zz[-Ns[94]]; zz[Ns[10]]++)
                        if (zz[Ns[37]] = zz[-Ns[107]].indexOf(zz[Ns[20]][zz[Ns[10]]]), zz[Ns[37]] !== -Ns[0])
                          if (zz[Ns[25]] < Ns[2]) zz[Ns[25]] = zz[Ns[37]];
                          else {
                            Bs(zz[Ns[25]] += zz[Ns[37]] * Ns[29], zz[Ns[38]] |= zz[Ns[25]] << zz[Ns[43]], zz[Ns[43]] += (zz[Ns[25]] & Ns[32]) > Ns[33] ? Ns[34] : Ns[35]);
                            do {
                              Bs(zz[Ns[14]].push(zz[Ns[38]] & Ns[11]), zz[Ns[38]] >>= Ns[10], zz[Ns[43]] -= Ns[10])
                            } while (zz[Ns[43]] > Ns[25]);
                            zz[Ns[25]] = -Ns[0]
                          } return zz[Ns[25]] > -Ns[0] && zz[Ns[14]].push((zz[Ns[38]] | zz[Ns[25]] << zz[Ns[43]]) & Ns[11]), ws(zz[Ns[14]])
                    }(ss[zz[Ns[2]]]) : ts[zz[Ns[2]]]
                  }
                  tz[Ns[12]] = Ns[0];
                  try {
                    zz[Ns[1]]
                  } catch (sz) {
                    zz[Ns[1]] = ""
                  }
                  for (Bs(tz[Ns[18]] = Fz(198) + Fz(199) + Fz(Ns[105]) + Fz(Ns[93]), tz[Ns[1]] = "", tz[-Ns[108]] = tz[Ns[2]].length), tz[Ns[14]] = Ns[2]; tz[Ns[14]] < tz[-Ns[108]]; tz[Ns[14]] += Ns[4])
                    for (tz[Ns[20]] = tz[Ns[2]].charCodeAt(tz[Ns[14]]) << Ns[97] | (tz[Ns[14]] + Ns[0] < tz[-Ns[108]] ? tz[Ns[2]].charCodeAt(tz[Ns[14]] + Ns[0]) << Ns[10] : Ns[2]) | (tz[Ns[14]] + Ns[20] < tz[-Ns[108]] ? tz[Ns[2]].charCodeAt(tz[Ns[14]] + Ns[20]) : Ns[2]), tz[Ns[23]] = Ns[2]; tz[Ns[23]] < Ns[16]; tz[Ns[23]]++) tz[Ns[14]] * Ns[10] + tz[Ns[23]] * Ns[23] > tz[Ns[2]].length * Ns[10] ? tz[Ns[1]] += zz[Ns[1]] : tz[Ns[1]] += tz[Ns[18]].charAt(tz[Ns[20]] >>> Ns[23] * (Ns[4] - tz[Ns[23]]) & Ns[22]);
                  return tz[Ns[1]]
                }

                function Oz(...zz) {
                  var tz, sz;
                  for (Bs(zz[Ns[12]] = Ns[0], zz[Ns[110]] = "", zz[-Ns[97]] = -Ns[0]); ++zz[-Ns[97]] < zz[Ns[2]].length;) Bs(tz = zz[Ns[2]].charCodeAt(zz[-Ns[97]]), sz = zz[-Ns[97]] + Ns[0] < zz[Ns[2]].length ? zz[Ns[2]].charCodeAt(zz[-Ns[97]] + Ns[0]) : Ns[2]), 55296 <= tz && tz <= 56319 && 56320 <= sz && sz <= 57343 && Bs(tz = 65536 + ((tz & Ns[111]) << Ns[117]) + (sz & Ns[111]), zz[-Ns[97]]++), tz <= Ns[59] ? zz[Ns[110]] += String.fromCharCode(tz) : tz <= 2047 ? zz[Ns[110]] += String.fromCharCode(Ns[112] | tz >>> Ns[23] & Ns[113], Ns[60] | tz & Ns[22]) : tz <= Ns[118] ? zz[Ns[110]] += String.fromCharCode(Ns[73] | tz >>> Ns[26] & Ns[106], Ns[60] | tz >>> Ns[23] & Ns[22], Ns[60] | tz & Ns[22]) : tz <= 2097151 && (zz[Ns[110]] += String.fromCharCode(240 | tz >>> Ns[114] & Ns[25], Ns[60] | tz >>> Ns[26] & Ns[22], Ns[60] | tz >>> Ns[23] & Ns[22], Ns[60] | tz & Ns[22]));
                  return zz[Ns[110]]
                }

                function oz(...zz) {
                  for (Bs(zz[Ns[12]] = Ns[0], zz[Ns[18]] = Array(zz[Ns[2]].length >> Ns[20])), zz[Ns[1]] = Ns[2]; zz[Ns[1]] < zz[Ns[18]].length; zz[Ns[1]]++) zz[Ns[18]][zz[Ns[1]]] = Ns[2];
                  for (zz[Ns[1]] = Ns[2]; zz[Ns[1]] < zz[Ns[2]].length * Ns[10]; zz[Ns[1]] += Ns[10]) zz[Ns[18]][zz[Ns[1]] >> Ns[38]] |= (zz[Ns[2]].charCodeAt(zz[Ns[1]] / Ns[10]) & Ns[11]) << Ns[116] - zz[Ns[1]] % Ns[49];
                  return zz[Ns[18]]
                }

                function vz(...zz) {
                  for (Bs(zz[Ns[12]] = Ns[0], zz[Ns[0]] = ""), zz[Ns[80]] = Ns[2]; zz[Ns[80]] < zz[Ns[2]].length * Ns[49]; zz[Ns[80]] += Ns[10]) zz[Ns[0]] += String.fromCharCode(zz[Ns[2]][zz[Ns[80]] >> Ns[38]] >>> Ns[116] - zz[Ns[80]] % Ns[49] & Ns[11]);
                  return zz[Ns[0]]
                }

                function Uz(...zz) {
                  return zz[Ns[12]] = Ns[20], zz[Ns[2]] >>> zz[Ns[0]] | zz[Ns[2]] << Ns[49] - zz[Ns[0]]
                }

                function Kz(...zz) {
                  return zz[Ns[12]] = Ns[20], zz[Ns[2]] >>> zz[Ns[0]]
                }

                function uz(...zz) {
                  return zz[Ns[12]] = Ns[4], zz[Ns[2]] & zz[Ns[0]] ^ ~zz[Ns[2]] & zz[Ns[20]]
                }

                function Nz(...zz) {
                  return zz[Ns[12]] = Ns[4], zz[Ns[2]] & zz[Ns[0]] ^ zz[Ns[2]] & zz[Ns[20]] ^ zz[Ns[0]] & zz[Ns[20]]
                }

                function bz(...zz) {
                  return zz[Ns[12]] = Ns[0], Uz(zz[Ns[2]], Ns[20]) ^ Uz(zz[Ns[2]], Ns[34]) ^ Uz(zz[Ns[2]], 22)
                }

                function wz(...zz) {
                  return zz[Ns[12]] = Ns[0], Uz(zz[Ns[2]], Ns[23]) ^ Uz(zz[Ns[2]], Ns[70]) ^ Uz(zz[Ns[2]], 25)
                }

                function Dz(...zz) {
                  return zz[Ns[12]] = Ns[0], Uz(zz[Ns[2]], Ns[25]) ^ Uz(zz[Ns[2]], Ns[114]) ^ Kz(zz[Ns[2]], Ns[4])
                }

                function gz(...zz) {
                  return zz[Ns[12]] = Ns[0], Uz(zz[Ns[2]], 17) ^ Uz(zz[Ns[2]], Ns[52]) ^ Kz(zz[Ns[2]], Ns[117])
                }

                function Hz(...tz) {
                  var sz, Fz, Wz, Xz, Oz, oz, vz, Uz, Kz, Hz, Pz, rz;
                  for (Bs(tz[Ns[12]] = Ns[20], tz[Ns[18]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), tz[Ns[1]] = new Array(Ns[54])), Bs(tz[Ns[2]][tz[Ns[0]] >> Ns[38]] |= Ns[60] << Ns[116] - tz[Ns[0]] % Ns[49], tz[Ns[2]][(tz[Ns[0]] + Ns[54] >> Ns[5] << Ns[16]) + Ns[106]] = tz[Ns[0]]), Kz = Ns[2]; Kz < tz[Ns[2]].length; Kz += Ns[97]) {
                    for (Bs(sz = tz[Ns[18]][Ns[2]], Fz = tz[Ns[18]][Ns[0]], Wz = tz[Ns[18]][Ns[20]], Xz = tz[Ns[18]][Ns[4]], Oz = tz[Ns[18]][Ns[16]], oz = tz[Ns[18]][Ns[38]], vz = tz[Ns[18]][Ns[23]], Uz = tz[Ns[18]][Ns[25]]), Hz = Ns[2]; Hz < Ns[54]; Hz++) Bs(Hz < Ns[97] ? tz[Ns[1]][Hz] = tz[Ns[2]][Hz + Kz] : tz[Ns[1]][Hz] = Bz(Bz(Bz(gz(tz[Ns[1]][Hz - Ns[20]]), tz[Ns[1]][Hz - Ns[25]]), Dz(tz[Ns[1]][Hz - Ns[106]])), tz[Ns[1]][Hz - Ns[97]]), Pz = Bz(Bz(Bz(Bz(Uz, wz(Oz)), uz(Oz, oz, vz)), zz[Ns[13]][Hz]), tz[Ns[1]][Hz]), rz = Bz(bz(sz), Nz(sz, Fz, Wz)), Uz = vz, vz = oz, oz = Oz, Oz = Bz(Xz, Pz), Xz = Wz, Wz = Fz, Fz = sz, sz = Bz(Pz, rz));
                    Bs(tz[Ns[18]][Ns[2]] = Bz(sz, tz[Ns[18]][Ns[2]]), tz[Ns[18]][Ns[0]] = Bz(Fz, tz[Ns[18]][Ns[0]]), tz[Ns[18]][Ns[20]] = Bz(Wz, tz[Ns[18]][Ns[20]]), tz[Ns[18]][Ns[4]] = Bz(Xz, tz[Ns[18]][Ns[4]]), tz[Ns[18]][Ns[16]] = Bz(Oz, tz[Ns[18]][Ns[16]]), tz[Ns[18]][Ns[38]] = Bz(oz, tz[Ns[18]][Ns[38]]), tz[Ns[18]][Ns[23]] = Bz(vz, tz[Ns[18]][Ns[23]]), tz[Ns[18]][Ns[25]] = Bz(Uz, tz[Ns[18]][Ns[25]]))
                  }
                  return tz[Ns[18]]
                }

                function Bz(...zz) {
                  return Bs(zz[Ns[12]] = Ns[20], zz[Ns[20]] = (zz[Ns[2]] & Ns[118]) + (zz[Ns[0]] & Ns[118]), zz[Ns[1]] = (zz[Ns[2]] >> Ns[97]) + (zz[Ns[0]] >> Ns[97]) + (zz[Ns[20]] >> Ns[97])), zz[Ns[1]] << Ns[97] | zz[Ns[20]] & Ns[118]
                }
                return Bs(zz[Ns[12]] = Ns[2], zz[-Ns[102]] = Ns[2], zz[Ns[1]] = ""), zz[Ns[13]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
                  hex: function(...zz) {
                    return zz[Ns[12]] = Ns[0], Wz(function(...zz) {
                      return zz[Ns[12]] = Ns[0], vz(Hz(oz(zz[Ns[2]]), zz[Ns[2]].length * Ns[10]))
                    }(Oz(zz[Ns[2]])))
                  },
                  b64: tz,
                  any: sz,
                  hex_hmac: function(...zz) {
                    return zz[Ns[12]] = Ns[20], Wz(Fz(Oz(zz[Ns[2]]), Oz(zz[Ns[0]])))
                  },
                  b64_hmac: tz,
                  any_hmac: sz
                }
              }(), console.log(zz[-Ns[119]]))
            }
            Oz(187) + "2" in gs && Kz();
            const uz = sz[Oz(202)](Ns[16]),
              Nz = Xt(oz) ? Xz[Ns[88]][Uz(203)](ot(oz, uz)) : uz;
            return function(zz) {
              var tz, sz, Fz, Xz, Oz;
              const oz = null === (tz = zz.meta) || void 0 === tz ? void 0 : tz.formatVersion;
              if (!(0, It.o)(oz)) throw new Error(`Unsupported recording format version: ${oz}`);
              if (!Array.isArray(zz.initialChunks) || !Array.isArray(zz.ticks)) throw new Error("Recording is missing initialChunks or ticks");
              for (const Wz of zz.ticks)
                if (!Array.isArray(Wz.structuralEvents) || !Array.isArray(Wz.ephemeralEvents)) throw new Error("Recording tick is missing structuralEvents or ephemeralEvents");
              const vz = {
                ...zz.meta
              };
              return vz.formatVersion = It.g, (0, Wz.G)(vz.variation) && delete vz.variation, {
                meta: vz,
                initialChunks: zz.initialChunks.map((zz => {
                  var tz;
                  return {
                    chunkPos: zz.chunkPos,
                    rle: et(zz.rle),
                    sharedBlockData: null !== (tz = ct("sharedBlockData", zz.sharedBlockData)) && void 0 !== tz ? tz : []
                  }
                })),
                ticks: zz.ticks.map(ft),
                editState: {
                  cameraKeyframes: null !== (sz = null === (Fz = zz.editState) || void 0 === Fz ? void 0 : Fz.cameraKeyframes) && void 0 !== sz ? sz : [],
                  playbackMark: null !== (Xz = null === (Oz = zz.editState) || void 0 === Oz ? void 0 : Oz.playbackMark) && void 0 !== Xz ? Xz : null
                }
              }
            }(Ft(oz)[Uz(204)](Nz))
          }
        }
        throw new Error(tz(Ns[53]) + tz(206) + tz(207) + tz(Ns[21]) + tz(209) + tz(210) + tz(211) + Ns[14])
      })
    })()
  },
  36386: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Oz,
      g: () => Fz,
      k: () => uz,
      l: () => Nz,
      o: () => Xz,
      s: () => Uz,
      t: () => bz,
      u: () => vz,
      x: () => Kz,
      z: () => oz
    });
    const Fz = 9,
      Wz = [9];

    function Xz(zz) {
      return Wz.includes(zz)
    }
    const Oz = 100,
      oz = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips"],
      vz = ["skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride"],
      Uz = ["itemName", "amount", "position", "size", "attributes"],
      Kz = ["opacity", "zIndex", "overlayColour", "canSee", "meshScaling", "nameTagInfo", "multilineTextBox", "hasPriorityNametag", "ranks", "nameColour", "_isAlive", "_invisibleEffect", "_invincible", "killfeedColour", "hideNameSeed", "_glowingEffect", "lockHeadToBody"],
      uz = ["type", "name", "position", "rotation", "scale", "speed", "jumping", "crouching", "cameraPitch", "armSwinging", "heldItemName", "heldItemEnchantmentTier", "pose", "followingEId", "followingOffset", "shouldMatchFollowingEntityRotation", "meshOffset", "baseRenderHeading", "armour", "bC", "playerCustomisations", "variation", "metaInfo", "soundName", "volume", "refDistance", "maxHearDist", "rate", "ridingVehicleEId", "leaderboardTop", "meshKind", "meshOpts", "aiState"],
      Nz = ["selectedSlotIndex", "slots"],
      bz = ["_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"]
  },
  36381: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => uz,
      d: () => wz,
      e: () => vz,
      f: () => Oz,
      i: () => oz,
      j: () => Uz
    });
    var Fz = sz(321),
      Wz = sz(34);

    function Xz(zz) {
      return null === zz || void 0 === zz ? null : "string" === typeof zz ? zz : null
    }

    function Oz(zz, tz) {
      return JSON.stringify(zz) === JSON.stringify(tz)
    }

    function oz(zz) {
      const tz = [];
      for (const sz of Object.keys(zz)) {
        const Fz = zz[sz];
        for (const zz of Object.keys(Fz)) tz.push({
          vt: sz,
          name: zz,
          ...Fz[zz]
        })
      }
      return tz
    }

    function vz(zz) {
      const tz = {};
      for (const Xz of zz) {
        var sz, Fz, Wz;
        tz[Xz.vt] || (tz[Xz.vt] = {}), tz[Xz.vt][Xz.name] = {
          icon: Xz.icon,
          level: Xz.level,
          displayName: null !== (sz = Xz.displayName) && void 0 !== sz ? sz : null,
          endTick: null !== (Fz = Xz.endTick) && void 0 !== Fz ? Fz : null,
          showInNametag: null === (Wz = Xz.showInNametag) || void 0 === Wz || Wz
        }
      }
      return tz
    }

    function Uz(zz, tz) {
      const sz = {};
      for (const Wz of Object.keys(zz)) {
        const Xz = {};
        for (const sz of Object.keys(zz[Wz])) {
          const Fz = zz[Wz][sz];
          null !== Fz.endTick && Fz.endTick < tz || (Xz[sz] = {
            ...Fz,
            endTick: null === Fz.endTick ? null : Fz.endTick - tz
          })
        }(0, Fz.tc)(Xz) || (sz[Wz] = Xz)
      }
      return sz
    }

    function Kz(zz, tz, sz) {
      if (null !== zz) return Math.max(0, 1e3 * (zz - tz) / sz)
    }
    class uz {
      constructor() {
        this.tracked = {}
      }
      clear() {
        this.tracked = {}
      }
      seedFromClient(zz, tz) {
        this.clear();
        const sz = Date.now();
        for (const oz of zz.iterateEntityIds()) {
          const vz = zz.getEffects(oz);
          if ((0, Fz.tc)(vz)) continue;
          const Uz = tz(oz);
          for (const zz of Object.keys(vz)) {
            var Wz, Oz;
            const tz = vz[zz];
            this.upsert(Uz, zz, {
              icon: tz.icon,
              level: tz.level,
              displayName: Xz(tz.displayName),
              showInNametag: null === (Wz = tz.showInNametag) || void 0 === Wz || Wz,
              endTime: void 0 !== tz.duration && null !== tz.duration ? (null !== (Oz = tz.appliedAt) && void 0 !== Oz ? Oz : sz) + tz.duration : null
            })
          }
        }
      }
      upsert(zz, tz, sz) {
        this.tracked[zz] || (this.tracked[zz] = {}), this.tracked[zz][tz] = sz
      }
      remove(zz, tz) {
        const sz = this.tracked[zz];
        sz && (delete sz[tz], (0, Fz.tc)(sz) && delete this.tracked[zz])
      }
      handleUpdate(zz) {
        var tz;
        0 !== zz.duration ? this.upsert(zz.vt, zz.name, {
          icon: zz.icon,
          level: zz.level,
          displayName: Xz(zz.displayName),
          showInNametag: null === (tz = zz.showInNametag) || void 0 === tz || tz,
          endTime: void 0 !== zz.duration && null !== zz.duration ? Date.now() + zz.duration : null
        }) : this.remove(zz.vt, zz.name)
      }
      handleRemove(zz, tz) {
        this.remove(zz, tz)
      }
      sample(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
        const Wz = {},
          Xz = 1e3 / tz;
        for (const Oz of Object.keys(this.tracked)) {
          const tz = this.tracked[Oz],
            oz = {};
          for (const Fz of Object.keys(tz)) {
            const Wz = tz[Fz];
            let vz = null;
            if (null !== Wz.endTime) {
              const tz = Math.max(0, Wz.endTime - sz);
              if (0 === tz) {
                this.remove(Oz, Fz);
                continue
              }
              vz = zz + Math.ceil(tz / Xz)
            }
            oz[Fz] = {
              icon: Wz.icon,
              level: Wz.level,
              displayName: Wz.displayName,
              endTick: vz,
              showInNametag: Wz.showInNametag
            }
          }(0, Fz.tc)(oz) || (Wz[Oz] = oz)
        }
        return Wz
      }
    }

    function Nz(zz, tz, sz, Fz) {
      zz.hasEntity(tz) ? zz.updateEffect(tz, sz, Fz) : function(zz, tz, sz) {
        Wz.o.Yg("EffectUpdate", {
          vt: zz,
          name: tz,
          ...sz
        }, !0)
      }(tz, sz, Fz)
    }

    function bz(zz, tz, sz) {
      zz.hasEntity(tz) ? zz.removeEffect(tz, sz) : function(zz, tz) {
        Wz.o.Yg("RemoveEffect", {
          vt: zz,
          name: tz
        }, !0)
      }(tz, sz)
    }

    function wz(zz, tz, sz, Fz, Wz, Xz, Oz) {
      for (const Kz of Object.keys(sz))
        for (const Xz of Object.keys(sz[Kz])) {
          var oz;
          null !== (oz = tz[Kz]) && void 0 !== oz && oz[Xz] || (bz(zz, Kz, Xz), Fz && Kz === Fz && String(Wz) !== String(Kz) && bz(zz, Wz, Xz))
        }
      for (const Dz of Object.keys(tz))
        for (const oz of Object.keys(tz[Dz])) {
          var vz, Uz;
          const gz = tz[Dz][oz],
            Hz = Kz(gz.endTick, Xz, Oz);
          if (0 === Hz) {
            bz(zz, Dz, oz), Fz && Dz === Fz && String(Wz) !== String(Dz) && bz(zz, Wz, oz);
            continue
          }
          const Bz = null === (vz = sz[Dz]) || void 0 === vz ? void 0 : vz[oz],
            Pz = Bz && (wz = gz, (uz = Bz).icon === wz.icon && uz.level === wz.level && uz.displayName === wz.displayName && uz.endTick === wz.endTick && uz.showInNametag === wz.showInNametag),
            rz = {
              icon: gz.icon,
              level: gz.level,
              displayName: null !== (Uz = gz.displayName) && void 0 !== Uz ? Uz : void 0,
              duration: Hz,
              showInNametag: gz.showInNametag
            };
          Pz || Nz(zz, Dz, oz, rz), Fz && Dz === Fz && Nz(zz, Wz, oz, {
            ...rz,
            showInNametag: !1
          })
        }
      var uz, wz
    }
  },
  36359: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Uz,
      h: () => vz,
      i: () => uz,
      l: () => Oz,
      n: () => Kz
    });
    var Fz = sz(36352),
      Wz = sz(36366);
    const Xz = {
      description: "Bloxd Replay",
      accept: {
        [Fz.g]: Fz.e
      }
    };

    function Oz() {
      return "function" === typeof window.showOpenFilePicker && "function" === typeof window.showSaveFilePicker
    }

    function oz(zz) {
      return zz instanceof DOMException && "AbortError" === zz.name
    }
    async function vz() {
      try {
        const [zz] = await window.showOpenFilePicker({
          multiple: !1,
          types: [Xz]
        }), tz = await zz.getFile();
        return {
          handle: zz,
          bytes: new Uint8Array(await tz.arrayBuffer())
        }
      } catch (zz) {
        if (oz(zz)) return null;
        throw zz
      }
    }
    async function Uz(zz) {
      if (zz && await async function(zz) {
          const tz = {
            mode: "readwrite"
          };
          return "granted" === await zz.queryPermission(tz) || "granted" === await zz.requestPermission(tz)
        }(zz)) return zz;
      try {
        return await window.showSaveFilePicker({
          suggestedName: (0, Fz.n)(),
          types: [Xz]
        })
      } catch (tz) {
        if (oz(tz)) return null;
        throw tz
      }
    }
    async function Kz(zz, tz) {
      const sz = await zz.createWritable();
      await sz.write(new Blob([tz], {
        type: Fz.g
      })), await sz.close()
    }

    function uz(zz) {
      return (0, Fz.j)((0, Wz.e)(zz))
    }
  },
  35951: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => uz
    });
    var Fz = sz(30),
      Wz = sz(106),
      Xz = sz(44),
      Oz = sz(668),
      oz = sz(3133),
      vz = sz(6237);
    const Uz = "shaderPackListingCheckedAt",
      Kz = 36e5;

    function uz() {
      const {
        canUseShaderPacks: zz
      } = Wz.featureFlags.settings;
      var tz, uz;
      (0, oz.k)(zz) && !(0, oz.h)(zz) && (tz = Xz.f.getItem(Uz), uz = Date.now(), "number" !== typeof tz || uz < tz || uz - tz >= Kz) && (0, Oz.d)((() => {
        (async function() {
          if ("landingPage" !== Fz.b.get("gameState")) return;
          const zz = await (0, vz.g)();
          if (void 0 === (null === zz || void 0 === zz ? void 0 : zz.listing)) return;
          Xz.f.setItem(Uz, Date.now());
          const {
            followListingUpdates: tz
          } = await Promise.all([sz.e(74), sz.e(131), sz.e(123)]).then((() => sz(40413)));
          await tz(zz, zz.listing) || Xz.f.removeItem(Uz)
        })().catch((zz => {
          console.error("Failed to check the shader pack listing for an update", zz)
        }))
      }))
    }
  },
  35981: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => vz
    });
    var Fz = sz(308),
      Wz = sz(30),
      Xz = sz(35983),
      Oz = sz(1571),
      oz = sz(1910);

    function vz(zz, tz) {
      var sz, vz, Uz;
      if (!Wz.b.get("isKeydownEnabled") || zz.repeat) return;
      const Kz = zz.code;
      "Escape" === zz.key ? (0, Oz.j)(zz) : null !== (sz = oz.x.OpenSettings) && void 0 !== sz && sz.includes(Kz) ? (0, Oz.w)(zz, Fz.r.SETTINGS) : null !== (vz = oz.x.OpenCharacterCustomization) && void 0 !== vz && vz.includes(Kz) ? (0, Xz.e)() || (0, Oz.w)(zz, Fz.r.CUSTOMISATION, tz()) : null !== (Uz = oz.x.ShowDebugOverlay) && void 0 !== Uz && Uz.includes(Kz) && Wz.b.set({
        showDebugOverlay: !Wz.b.get("showDebugOverlay")
      })
    }
  },
  35957: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Gz
    });
    var Fz = sz(580),
      Wz = sz(1215),
      Xz = sz(161);
    const Oz = "cf-";

    function oz(zz) {
      return `${Oz}${zz}`
    }

    function vz(zz) {
      return zz.startsWith(oz("game-server-"))
    }

    function Uz(zz) {
      return /^game-server-[a-z0-9-]+\.bloxd\.io$/i.test(zz)
    }
    var Kz = sz(1230),
      uz = sz(1213),
      Nz = sz(34),
      bz = sz(1706),
      wz = sz(1731),
      Dz = sz(2710),
      gz = sz(1287),
      Hz = sz(1293),
      Bz = sz(1466),
      Pz = sz(1191),
      rz = sz(35962),
      Yz = sz(44),
      xz = sz(133),
      mz = sz(1750);
    const Jz = Date.UTC(2026, 10, 25),
      Iz = 1728e5,
      Cz = "gameServerRoute";
    async function ez(zz) {
      if (!zz.ok) {
        const tz = await zz.text().catch((() => ""));
        return 403 === zz.status && "ipv6_unsupported" === tz ? "ipv6Refused" : "other"
      }
      const tz = await zz.json().catch((() => null));
      return "object" === typeof tz && null !== tz && Number.isFinite(tz.version) ? "ours" : "other"
    }
    const Zz = new class {
      constructor(zz) {
        this.deps = zz
      }
      hostFor(zz) {
        return this.deps.enabled && Uz(zz) && "cloudflare" === this.heldRoute() ? oz(zz) : zz
      }
      async afterJoinFailed(zz, tz) {
        var sz;
        if (!this.deps.enabled || void 0 === tz) return !1;
        const Fz = new URL(zz).hostname,
          Wz = this.stored();
        if (vz(Fz)) {
          var Xz;
          if (this.deps.Iw("game_server_route", "cf_join_failed", 0), "cloudflare" !== (null === Wz || void 0 === Wz ? void 0 : Wz.route) || Wz.aliasFailedOnce || "ours" !== (await this.probeHost(Fz)).answer) this.store({
            arm: null !== (Xz = null === Wz || void 0 === Wz ? void 0 : Wz.arm) && void 0 !== Xz ? Xz : "cloudflare",
            route: "direct",
            until: this.deps.now() + 36e5
          });
          else this.store({
            ...Wz,
            aliasFailedOnce: !0
          });
          return !1
        }
        if (!Uz(Fz) || "direct" === this.heldRoute()) return !1;
        const {
          outcome: Oz,
          cfMs: oz
        } = await this.check(Fz);
        if ("blocked" !== Oz) return this.deps.Iw("game_server_route", Oz, oz), !1;
        const Kz = this.deps.now() >= Jz ? "cloudflare" : null !== (sz = null === Wz || void 0 === Wz ? void 0 : Wz.arm) && void 0 !== sz ? sz : 100 * this.deps.random() < 20 ? "holdout" : "cloudflare";
        return "holdout" === Kz ? (this.store({
          arm: Kz,
          route: "direct",
          until: Math.min(this.deps.now() + Iz, Jz)
        }), this.deps.Iw("game_server_route", "blocked_holdout", oz), !1) : (this.store({
          arm: Kz,
          route: "cloudflare",
          until: this.deps.now() + Iz
        }), this.deps.Iw("game_server_route", "blocked", oz), !0)
      }
      afterJoined(zz) {
        if (!this.deps.enabled) return;
        const tz = new URL(zz).hostname,
          sz = vz(tz);
        if (sz) this.deps.Iw("game_server_route", "cf_join", 0);
        else if (!Uz(tz) || this.deps.random() >= .01) return;
        const Fz = sz ? tz.slice(Oz.length) : tz;
        this.deps.delay(2e4).then((async () => {
          await this.reportRtt(Fz, "direct", "direct_failed"), await this.reportRtt(oz(Fz), "cf", "cf_failed")
        }))
      }
      async check(zz) {
        const tz = this.probeHost(oz(zz));
        if ("none" !== (await this.probeHost(zz)).answer) return {
          outcome: "direct_reachable",
          cfMs: 0
        };
        const {
          answer: sz,
          ms: Fz
        } = await tz;
        return "ours" !== sz && "ipv6Refused" !== sz ? {
          outcome: "cf_unreachable",
          cfMs: 0
        } : "none" !== (await this.probeHost(zz)).answer ? {
          outcome: "direct_reachable",
          cfMs: Fz
        } : {
          outcome: "ipv6Refused" === sz ? "blocked_ipv6" : "blocked",
          cfMs: Fz
        }
      }
      async reportRtt(zz, tz, sz) {
        const Fz = "ours" === (await this.probeHost(zz)).answer ? await this.probeHost(zz) : null;
        "ours" === (null === Fz || void 0 === Fz ? void 0 : Fz.answer) ? this.deps.Iw("game_server_rtt", tz, Fz.ms): this.deps.Iw("game_server_rtt", sz, 0)
      }
      probeHost(zz) {
        return this.deps.probe(`https://${zz}/version`, 8e3)
      }
      stored() {
        return function(zz) {
          if ("object" !== typeof zz || null === zz) return null;
          const {
            arm: tz,
            route: sz,
            until: Fz,
            aliasFailedOnce: Wz
          } = zz;
          return "cloudflare" !== tz && "holdout" !== tz || "cloudflare" !== sz && "direct" !== sz || "number" !== typeof Fz ? null : !0 === Wz ? {
            arm: tz,
            route: sz,
            until: Fz,
            aliasFailedOnce: Wz
          } : {
            arm: tz,
            route: sz,
            until: Fz
          }
        }(this.deps.storage.getItem(Cz))
      }
      heldRoute() {
        const zz = this.stored();
        return null !== zz && zz.until > this.deps.now() ? zz.route : null
      }
      store(zz) {
        this.deps.storage.setItem(Cz, zz)
      }
    }({
      storage: Yz.f,
      probe: async function(zz, tz) {
        const sz = performance.now(),
          Fz = await (0, mz.m)(zz, {
            cache: "no-store"
          }, tz, (async zz => {
            const tz = Math.round(performance.now() - sz);
            return {
              answer: await ez(zz),
              ms: tz
            }
          }));
        return null !== Fz && void 0 !== Fz ? Fz : {
          answer: "none",
          ms: 0
        }
      },
      Iw: bz.n,
      enabled: !(0, xz.e)(),
      now: Date.now,
      random: Math.random,
      delay: zz => new Promise((tz => {
        setTimeout(tz, zz)
      }))
    });

    function Gz(zz) {
      return async (tz, sz, Oz, oz, Uz) => {
        let uz;
        if ((0, Fz.G)(Oz)) {
          if (Uz.aborted) return Tz();
          const zz = await cz(tz, sz, oz);
          if (Uz.aborted || Dz.e.matchmakingEnded(zz.isError() ? null : performance.now()), zz.isError()) {
            const tz = zz.asError();
            return console.log("Join room did not succeed, reason:", tz.message), tz.forward()
          }
          uz = zz.getValue()
        } else {
          Dz.e.skipPlayWait();
          const zz = jz(Oz.replace("https://", "").replace("http://", ""));
          if (zz.isError()) return zz.asError().forward();
          uz = {
            endpoint: zz.getValue(),
            gameNameWithVariation: sz,
            lobbyName: tz instanceof Wz.h ? tz.getLobbyName() : tz
          }
        }
        if (Uz.aborted) return Tz();
        console.log(`Connecting to ${uz.gameNameWithVariation} in lobby ${uz.lobbyName} on game server ${uz.endpoint}`), Nz.o.Yg("matchmakeAndPlayStepCompleted", {
          step: Xz.k.REQUEST_TO_MATCHMAKING,
          totalSubSteps: 1
        }), (0, bz.g)(), wz.c.markGameLoadStart(), (0, Hz.q)({
          websocketUrl: uz.endpoint,
          gameNameWithVariation: uz.gameNameWithVariation,
          lobbyName: uz.lobbyName
        }), Nz.o.Yg("loadingScreenState", "loadingPage:loadingGame");
        const Bz = async () => {
          const zz = await async function(zz, tz, sz, Fz) {
            const Wz = await cz(zz, tz, sz);
            if (!Wz.isError() && !Fz.aborted) {
              const {
                endpoint: zz,
                gameNameWithVariation: tz,
                lobbyName: sz
              } = Wz.getValue();
              (0, Hz.q)({
                websocketUrl: zz,
                gameNameWithVariation: tz,
                lobbyName: sz
              })
            }
            return Wz
          }(tz, sz, oz, Uz);
          return zz.isError() || (uz = zz.getValue()), zz
        }, Pz = !(0, Fz.G)(Oz), rz = () => zz({
          place: uz,
          userContext: oz,
          direct: Pz,
          rematch: Bz
        }, Uz);
        let Yz = await rz();
        const xz = Yz.isError() && !0 === Yz.asError().debugResult.rematch;
        if (Yz.isError() && !Pz && !Uz.aborted && (xz || await Zz.afterJoinFailed(uz.endpoint, Yz.asError().debugResult.gameServerUnreachable))) {
          if (Uz.aborted) return Tz();
          console.log("Matchmaking again");
          const zz = await Bz();
          if (zz.isError()) return zz.asError().forward();
          if (Uz.aborted) return Tz();
          Yz = await rz(), !Yz.isError() || xz && !vz(new URL(uz.endpoint).hostname) || await Zz.afterJoinFailed(uz.endpoint, Yz.asError().debugResult.gameServerUnreachable)
        }
        return Yz.isError() ? Yz.asError().forward() : (Zz.afterJoined(uz.endpoint), (0, gz.Z)(), window.gtag ? window.gtag("event", "conversion", {
          send_to: "AW-16469618203/ipUBCJKWoJUZEJvcqa09"
        }) : console.error("window.gtag not defined"), Kz.e.value({
          gameNameWithVariation: uz.gameNameWithVariation,
          lobbyName: uz.lobbyName,
          addLobbyToRecentlyPlayed: !(tz instanceof Wz.h)
        }))
      }
    }

    function Tz() {
      return Kz.e.errorWithCode("Left the game while it loaded", Xz.k.REQUEST_TO_MATCHMAKING, {
        severity: "low",
        ds: !0
      })
    }
    async function cz(zz, tz, sz) {
      return (0, Fz.G)(zz) || zz instanceof Wz.h || !(zz.length > uz.P) ? await Bz.d.matchmakePlayer(sz, zz, tz, (0, rz.c)()).then((zz => {
        if (!1 === zz.succeeded) return Kz.e.errorWithCode(zz.failReason, Xz.k.REQUEST_TO_MATCHMAKING, {
          severity: "low"
        });
        const {
          gameServerHost: tz,
          lobbyName: sz,
          gameNameWithVariation: Fz
        } = zz, Wz = jz(Zz.hostFor(tz));
        return Wz.isError() ? Wz.asError().forward() : Kz.e.value({
          endpoint: Wz.getValue(),
          gameNameWithVariation: Fz,
          lobbyName: sz
        })
      })).catch((zz => (console.error("Bad response from the matchmaking server:", zz), Kz.e.errorWithCode(zz.toString(), Xz.k.REQUEST_TO_MATCHMAKING, {
        error: zz,
        severity: "medium"
      })))) : (console.error("Invalid lobby ID:", zz), Kz.e.errorWithCode("This lobby link's name is too long. Ask for a new link.", Xz.k.REQUEST_TO_MATCHMAKING, {
        severity: "low"
      }))
    }

    function jz(zz) {
      const tz = Pz.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(zz);
      return tz.isError() ? Kz.e.errorWithCode(tz.asError().message, Xz.k.CONNECT_TO_GAME_SERVER, {
        severity: "medium"
      }) : Kz.e.value(tz.getValue())
    }
    setTimeout((() => {
      window.initialD ? Date.now = window.initialD : console.error("window.initialD not defined")
    }), 3e3), window.leaveGame = () => {
      (0, Hz.k)("/")
    }
  },
  8744: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => bz,
      e: () => Nz
    });
    var Fz = sz(30),
      Wz = sz(1636),
      Xz = sz(44),
      Oz = sz(1319),
      oz = sz(3330),
      vz = sz(1447),
      Uz = sz(1358);
    const Kz = 2592e5,
      uz = "notificationOptInLastPromptedAt";
    async function Nz() {
      var zz;
      const tz = await bz();
      if (null === tz) return;
      const sz = null !== (zz = Xz.f.getItem(uz)) && void 0 !== zz ? zz : 0;
      if (Date.now() - sz < Kz) return;
      if ((0, Uz.c)()) return;
      const Fz = await Oz.NotificationProvider.showPromptPopup({
        icon: "bell",
        title: "mobilePushNotifications:optInTitle",
        subtitle: Wz.c.supports("notifications") ? "mobilePushNotifications:optInSubtitle" : "mobilePushNotifications:optInSubtitleBrowser",
        confirmText: "mobilePushNotifications:optInConfirm",
        cancelText: "mobilePushNotifications:optInCancel",
        padStartsOn: "cancel"
      }).getResult();
      "notificationTornDown" !== Fz && (Xz.f.setItem(uz, Date.now()), (0, vz.reportAnalyticsClick)({
        id: !0 === Fz ? "push.allow" : "push.deny",
        value: Wz.c.supports("notifications") ? "app" : "browser"
      }), !0 === Fz && tz().catch((zz => {
        console.error("Failed to ask for push notifications:", zz)
      })))
    }
    async function bz() {
      return await Wz.c.ready, Wz.c.supports("notifications") ? Fz.b.get("mobilePushNotificationsCanAsk") ? async () => {
        Wz.c.request("notifications.requestPermission", {}).then((zz => {
          let {
            canAsk: tz
          } = zz;
          Fz.b.set({
            mobilePushNotificationsCanAsk: tz
          })
        }), (zz => {
          console.error("The app couldn't ask for push notifications:", zz)
        }))
      }: null: await oz.e.canAsk() ? () => oz.e.requestPermission() : null
    }
  },
  35970: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Nz,
      c: () => Kz,
      g: () => bz,
      j: () => uz
    });
    var Fz = sz(321),
      Wz = sz(616),
      Xz = sz(627),
      Oz = sz(44);
    const oz = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      vz = "playSessionGameNameWithVariation",
      Uz = "wasMatchmakePlayer";

    function Kz() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oz.j;
      (0, Xz.h)(zz, oz)
    }

    function uz() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oz.j).setItem(Uz, !0)
    }

    function Nz() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oz.j;
      return (0, Xz.d)(zz, oz)
    }

    function bz(zz) {
      let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Oz.j;
      const sz = (0, Xz.d)(tz, oz),
        Kz = function(zz) {
          const tz = zz.getItem(vz);
          return "string" !== typeof tz ? null : tz
        }(tz),
        uz = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oz.j).getItem(Uz)
        }(tz);
      let Nz;
      return Nz = null !== sz && null !== Kz && (0, Xz.g)(tz, oz) && function(zz, tz, sz) {
          const Wz = (0, Fz.Tb)(zz),
            Xz = (0, Fz.Tb)(tz),
            Oz = (0, Fz.Mb)(zz),
            oz = (0, Fz.Mb)(tz);
          return !(Wz !== Xz || !sz) || Wz === Xz && Oz === oz
        }(Kz, zz, uz) ? sz : (0, Wz.c)(), (0, Xz.i)(tz, oz, Nz), tz.setItem(vz, zz),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oz.j).removeItem(Uz)
        }(tz), Nz
    }
  },
  35962: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Bz,
      d: () => Pz
    });
    var Fz = sz(991),
      Wz = sz(585),
      Xz = sz(321),
      Oz = sz(993),
      oz = sz(601),
      vz = sz(644),
      Uz = sz(4165),
      Kz = sz(106),
      uz = sz(133),
      Nz = sz(1664),
      bz = sz(119),
      wz = sz(35970),
      Dz = sz(44),
      gz = sz(624),
      Hz = sz(35972);

    function Bz() {
      var zz, tz;
      return [...null !== (zz = navigator.languages) && void 0 !== zz ? zz : [null !== (tz = navigator.language) && void 0 !== tz ? tz : "none"], "en-Gb"]
    }

    function Pz(zz, tz, sz, Pz, rz) {
      const Yz = (0, Fz.n)(tz) ? (0, Fz.r)(tz) : null,
        xz = {
          cookies: (0, Nz.getAllCookiesForGameNameWithVariation)(tz),
          isMobile: (0, Kz.isMobile)(),
          isUsingCustomGameTexturePack: null !== Yz && rz(Yz),
          generalCookies: {
            joinDiscord: !!Dz.f.getItem("DiscordPressed"),
            newGo: Uz.d,
            ...zz.getMetricsCookies(),
            trafficCode: Pz,
            compliance: Kz.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, Kz.getBrowserName)(),
            version: (0, Kz.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, Kz.getPlatformType)(),
            deviceType: (0, bz.c)()
          },
          isLoggedIn: zz.isLoggedIn(),
          lobbyName: sz,
          languages: Bz(),
          version: Wz.e,
          siteUsed: uz.t,
          subsiteUsed: uz.x,
          playSessionId: (0, wz.g)(tz),
          visitSessionId: (0, gz.e)(),
          clientReason: oz.j.reason,
          budgetBasis: (0, Hz.c)(),
          ...null !== vz.q && {
            diagClaim: vz.q.claimId
          }
        };
      return null !== Yz && (0, Xz.zc)(Yz) ? (xz.lobbyName = (0, Fz.j)(Yz, (0, Fz.p)(tz), sz), {
        roomName: `classic_${Oz.h}`,
        joinOptions: xz
      }) : {
        roomName: tz,
        joinOptions: xz
      }
    }
  },
  36058: (zz, tz, sz) => {
    function Fz(zz, tz) {
      for (let sz = 0; sz < zz.length; sz++)
        if (zz[sz].identifier === tz) return zz[sz];
      return null
    }

    function Wz(zz, tz) {
      return null !== Fz(zz, tz)
    }
    sz.d(tz, {
      d: () => Fz,
      e: () => Wz
    })
  },
  36303: (zz, tz, sz) => {
    sz.d(tz, {
      B: () => Iz,
      E: () => yz,
      G: () => Mz,
      H: () => dz,
      I: () => Az,
      J: () => hz,
      c: () => vz,
      d: () => Zz,
      h: () => oz,
      l: () => jz,
      o: () => Cz,
      s: () => xz,
      w: () => cz,
      y: () => Tz
    });
    var Fz = sz(44);
    const Wz = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      Xz = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      Oz = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      oz = Xz.filter((zz => "docsButton" !== zz)),
      vz = Oz.filter((zz => "aiHelperButton" !== zz)),
      Uz = "codeEditorTutorials",
      Kz = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      uz = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let Nz = null,
      bz = null;
    const wz = new Set,
      Dz = new Set;
    let gz = null;
    const Hz = new Set,
      Bz = new Set;

    function Pz() {
      Bz.forEach((zz => {
        zz()
      }))
    }

    function rz() {
      if (!Nz) {
        const zz = Fz.f.getItem(Uz);
        Nz = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof zz && null !== zz ? zz : {}
        }
      }
      return Nz
    }

    function Yz(zz) {
      const tz = rz();
      tz[zz] || (Nz = {
        ...tz,
        [zz]: !0
      }, Fz.f.setItem(Uz, Nz))
    }

    function xz(zz) {
      return "docsOverview" === zz ? Xz : "aiHelperOverview" === zz ? Oz : bz ? Wz[bz] : []
    }

    function mz(zz) {
      return ("worldCodeButton" !== zz || !rz().worldCodeIntroShown) && !Hz.has(zz)
    }

    function Jz(zz) {
      var tz;
      return (null === (tz = gz) || void 0 === tz ? void 0 : tz.name) === zz ? gz.stepsDone : wz
    }

    function Iz(zz, tz) {
      if (! function(zz) {
          return gz ? gz.name === zz : "welcome" === zz
        }(zz) || !mz(tz) || Jz(zz).has(tz)) return !1;
      if (gz) return !0;
      const sz = Kz[tz];
      return sz ? !rz()[sz] || Dz.has(tz) : !rz()[uz[zz]]
    }

    function Cz(zz) {
      var tz;
      return null !== (tz = xz(zz).find((tz => Iz(zz, tz)))) && void 0 !== tz ? tz : null
    }

    function ez(zz) {
      var tz;
      Yz(uz[zz]), (null === (tz = gz) || void 0 === tz ? void 0 : tz.name) === zz && (gz = null)
    }

    function Zz(zz) {
      const tz = (gz ? [gz.name] : ["welcome", "docsOverview"]).find((tz => Cz(tz) === zz));
      if (!tz) return;
      Jz(tz).add(zz);
      const sz = Kz[zz];
      sz && (Yz(sz), gz || Dz.add(zz)), null === Cz(tz) && ez(tz), Pz()
    }

    function Gz(zz, tz) {
      const sz = xz(zz),
        Fz = Jz(zz);
      for (let Wz = sz.indexOf(tz) - 1; Wz >= 0; Wz--)
        if (Fz.has(sz[Wz]) && mz(sz[Wz])) return sz[Wz];
      return null
    }

    function Tz(zz, tz) {
      return null !== Gz(zz, tz)
    }

    function cz(zz, tz) {
      const sz = Gz(zz, tz);
      sz && (Jz(zz).delete(sz), Pz())
    }

    function jz(zz) {
      ez(zz), "welcome" === zz && xz("welcome").forEach((zz => {
        const tz = Kz[zz];
        tz && Yz(tz)
      })), Pz()
    }

    function Az(zz) {
      gz = {
        name: zz,
        stepsDone: new Set
      }, Pz()
    }

    function yz() {
      (gz || 0 !== wz.size || 0 !== Dz.size) && (gz = null, wz.clear(), Dz.clear(), Pz())
    }

    function Mz(zz, tz) {
      const sz = tz ? zz : bz === zz ? null : bz;
      sz !== bz && (bz = sz, Pz())
    }

    function dz(zz, tz) {
      Hz.has(zz) === tz && (tz ? Hz.delete(zz) : Hz.add(zz), Pz())
    }

    function hz(zz) {
      return Bz.add(zz), () => {
        Bz.delete(zz)
      }
    }
  },
  35800: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Fz,
      e: () => Wz,
      i: () => Xz,
      j: () => Oz
    });
    const Fz = 1024,
      Wz = 1024 * Fz;

    function Xz(zz) {
      return 2 ** Math.floor(Math.log2(Math.max(1, zz / Wz)))
    }

    function Oz(zz) {
      return (zz / Wz).toFixed(1)
    }
  },
  35974: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Xz,
      h: () => oz,
      j: () => Oz,
      n: () => vz,
      q: () => Uz,
      u: () => Kz
    });
    var Fz = sz(201);
    const Wz = 32 * sz(35800).e,
      Xz = 6144,
      Oz = 4608,
      oz = 512;

    function vz(zz) {
      return Math.floor(Wz * zz / Xz)
    }

    function Uz(zz) {
      const tz = zz - Math.floor(zz / 6);
      let sz = Fz.d.maxChunkHorizAddDistance,
        Wz = Fz.d.maxChunkVertAddDistance;
      if (Kz(sz + 1, Wz + 1) <= tz) return null;
      for (; Kz(sz + 1, Wz + 1) > tz && (sz > 0 || Wz > 0);) sz > Wz ? sz-- : Wz--;
      return {
        horizontal: sz,
        vertical: Wz
      }
    }

    function Kz(zz, tz) {
      const sz = Math.max(zz, tz);
      let Fz = 0;
      for (let Wz = -sz; Wz <= sz; Wz++)
        for (let Xz = -sz; Xz <= sz; Xz++)
          for (let Oz = -sz; Oz <= sz; Oz++) uz(zz, tz, Wz, Xz, Oz) && Fz++;
      return Fz
    }

    function uz(zz, tz, sz, Fz, Wz) {
      const Xz = sz * sz + Wz * Wz;
      return zz === tz ? Xz + Fz * Fz <= zz * zz : zz > tz ? Math.abs(Fz) <= tz && Xz + Fz * Fz <= zz * zz : Xz <= zz * zz && Xz + Fz * Fz <= tz * tz
    }
  },
  35972: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => xz,
      c: () => Yz,
      d: () => rz
    });
    var Fz = sz(201),
      Wz = sz(106),
      Xz = sz(2653),
      Oz = sz(4038),
      oz = sz(607),
      vz = sz(35974);
    const Uz = 1048576,
      Kz = 1024 * Uz,
      uz = 400 * Uz,
      Nz = 147456,
      bz = .5,
      wz = 1.5 * Kz,
      Dz = 768 * Uz;

    function gz(zz) {
      return uz + zz * Nz
    }

    function Hz(zz, tz, sz) {
      var Wz, Oz;
      let {
        footprintBytes: oz,
        basis: Uz,
        namesLimit: Hz
      } = function(zz) {
        const {
          os: tz,
          deviceMemory: sz
        } = zz;
        if ("ios" === tz) switch ((0, Xz.e)(zz)) {
          case "ipad_m":
            return {
              footprintBytes: gz(vz.e), basis: "ipad-m", namesLimit: !1
            };
          case "ipad":
            return {
              footprintBytes: Dz, basis: "ipad", namesLimit: !0
            };
          case "iphone_6gb":
            return {
              footprintBytes: wz, basis: "iphone-6gb", namesLimit: !0
            };
          case "iphone":
            return {
              footprintBytes: Dz, basis: "iphone", namesLimit: !0
            }
        }
        return "number" === typeof sz && Number.isFinite(sz) && sz > 0 ? {
          footprintBytes: sz * Kz * bz,
          basis: `memory-${sz}`,
          namesLimit: !0
        } : "android" === tz ? {
          footprintBytes: Dz,
          basis: "android",
          namesLimit: !0
        } : {
          footprintBytes: gz(vz.j),
          basis: "unreported",
          namesLimit: !1
        }
      }(zz);
      if (sz) {
        const zz = Math.min(oz, gz(vz.e));
        oz = uz + Math.max(0, zz - uz) / 2, Uz += "+killed", Hz = !0
      }
      null !== tz && gz(tz) < oz && (oz = gz(tz), Uz += "+learned", Hz = !0);
      const Bz = function(zz) {
          const tz = Math.floor((zz - uz) / Nz);
          return Math.min(vz.e, Math.max(vz.h, tz))
        }(oz),
        Pz = (0, vz.q)(Bz);
      return {
        footprintBytes: oz,
        shedFootprintBytes: Hz ? Math.max(oz, gz(Bz)) : null,
        chunkCap: Bz,
        maxHorizDistance: null !== (Wz = null === Pz || void 0 === Pz ? void 0 : Pz.horizontal) && void 0 !== Wz ? Wz : Fz.d.maxChunkHorizAddDistance,
        maxVertDistance: null !== (Oz = null === Pz || void 0 === Pz ? void 0 : Pz.vertical) && void 0 !== Oz ? Oz : Fz.d.maxChunkVertAddDistance,
        basis: Uz
      }
    }
    let Bz = null;

    function Pz() {
      return Hz({
        os: (0, Wz.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, Xz.f)()
      }, (0, Oz.f)(), (0, oz.F)("wasm").length > 0)
    }

    function rz() {
      return Bz ??= Pz(), Bz
    }

    function Yz() {
      var zz;
      return (null !== (zz = Bz) && void 0 !== zz ? zz : Pz()).basis
    }

    function xz(zz, tz) {
      return zz.setChunkCap(tz.chunkCap)
    }
  },
  36071: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Kz,
      e: () => Nz,
      h: () => Hz,
      j: () => Uz
    });
    var Fz = sz(30),
      Wz = sz(2273),
      Xz = sz(2277),
      Oz = sz(2280),
      oz = sz(2321),
      vz = sz(34);

    function Uz(zz, tz) {
      return (!(0, Oz.c)() || 0 === zz && 0 === tz) && (0, Xz.t)(Wz.j.Joystick, 0, zz, tz, 0)
    }
    const Kz = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function uz(zz) {
      return zz.classList.contains("TouchKeyHit") && bz() ? null : zz.firstElementChild
    }

    function Nz(zz) {
      return zz.classList.contains("TouchKeyHit") && !zz.classList.contains("CanvasZone") ? {
        whole: !bz(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: wz(uz(zz))
      }
    }

    function bz() {
      return document.documentElement.classList.contains(oz.i)
    }

    function wz(zz) {
      return !(zz instanceof HTMLElement) || zz.offsetWidth <= 0 || zz.offsetHeight <= 0 ? null : {
        width: zz.offsetWidth,
        height: zz.offsetHeight
      }
    }

    function Dz(zz, tz) {
      const sz = zz => Math.min(65535, Math.round(4 * zz));
      return (sz(zz) | sz(tz) << 16) >>> 0
    }

    function gz(zz) {
      return {
        x: zz.left + zz.width / 2,
        y: zz.top + zz.height / 2,
        radius: Math.min(zz.width, zz.height) / 2
      }
    }
    const Hz = new class {
      constructor(zz) {
        this.write = zz, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        tz ? this.elements.set(zz, {
          element: tz,
          hidden: sz
        }) : this.elements.delete(zz), this.measureOne(zz)
      }
      measure() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = zz.left, this.canvasTop = zz.top;
        for (const tz of this.elements.keys()) this.measureOne(tz)
      }
      hitZone(zz, tz) {
        let sz = null,
          Fz = 1;
        for (const Wz of this.elements.keys()) {
          const Xz = this.shown(Wz);
          if (!Xz) continue;
          const {
            rect: Oz,
            element: oz
          } = Xz, vz = gz(Oz), Uz = Math.max(0, Oz.width / 2 - vz.radius), Kz = Math.max(0, Oz.height / 2 - vz.radius), Nz = Math.max(0, Math.abs(zz - vz.x) - Uz), bz = Math.max(0, Math.abs(tz - vz.y) - Kz), Dz = oz.firstElementChild;
          let Hz = Math.hypot(Nz, bz) / vz.radius;
          const Bz = wz(uz(oz));
          Bz && (Hz = Math.min(Hz, Math.max(2 * Math.abs(zz - vz.x) / Bz.width, 2 * Math.abs(tz - vz.y) / Bz.height))), Hz < Fz && (sz = {
            code: Wz,
            element: oz,
            key: Dz,
            ...vz
          }, Fz = Hz)
        }
        return sz
      }
      measureOne(zz) {
        const tz = this.shown(zz);
        if (!tz) return void this.write(Wz.j.TouchZone, zz, 0, 0, 0);
        const {
          rect: sz,
          element: Fz
        } = tz, Xz = gz(sz);
        this.write(Wz.j.TouchZone, zz, Xz.x - this.canvasLeft, Xz.y - this.canvasTop, Dz(sz.width, sz.height));
        const Oz = wz(uz(Fz));
        this.write(Wz.j.TouchZone, 256 | zz, 0, 0, Oz ? Dz(Oz.width, Oz.height) : 0)
      }
      shown(zz) {
        const tz = this.elements.get(zz),
          sz = Fz.b.get("worldPanelHud");
        if (!tz || tz.hidden || "none" === sz) return null;
        const Wz = tz.element.getBoundingClientRect();
        return Wz.width <= 0 || Wz.height <= 0 ? null : {
          rect: Wz,
          element: tz.element
        }
      }
    }(Xz.t);
    (0, vz.q)(oz.f, (() => {
      Hz.measure()
    }))
  },
  36263: (zz, tz, sz) => {
    function Fz(zz) {
      return "fetch" === zz || "timeout" === zz || "integrity" === zz ? "download" : "browser"
    }
    sz.d(tz, {
      c: () => Wz,
      d: () => Oz,
      f: () => vz,
      h: () => oz,
      j: () => Fz,
      m: () => Xz
    });
    const Wz = "https://discord.gg/playbloxd";

    function Xz(zz) {
      return "download" === zz ? {
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

    function Oz(zz, tz) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: tz ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: zz.code
        },
        discordLink: tz,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function oz() {
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

    function vz(zz, tz, sz) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: sz ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: zz.reason
        },
        discordLink: null === zz.name,
        confirm: tz ? "general:reconnect" : zz.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  36311: (zz, tz, sz) => {
    function Fz(zz, tz) {
      return null === zz || null === tz ? zz === tz : zz[0] === tz[0] && zz[1] === tz[1] && zz[2] === tz[2]
    }

    function Wz(zz) {
      return [zz[0] + .5, zz[1] + .5, zz[2] + .5]
    }
    sz.d(tz, {
      c: () => Wz,
      e: () => Fz
    })
  },
  36270: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => vz,
      g: () => oz
    });
    const Fz = {
        files: {
          "debugLog.ts": "export function debugLog(message: string): void {\n\tconsole.log(`[debug] ${message}`)\n}\n",
          "index.ts": 'import type { PlayerId } from "@bloxd"\nimport { debugLog } from "./debugLog"\n\nonPlayerJoin = (player: PlayerId) => {\n\tapi.log(`Player ${player} joined - Love from Debug Plugin!`)\n}\n\nexport { debugLog }\n'
        },
        dependencies: [],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  debugLog: () => debugLog\n});\nmodule.exports = __toCommonJS(index_exports);\n\n// world-code-plugin:debugLog.ts\nfunction debugLog(message) {\n  console.log(`[debug] ${message}`);\n}\n\n// world-code-plugin:index.ts\nonPlayerJoin = (player) => {\n  api.log(`Player ${player} joined - Love from Debug Plugin!`);\n};\n',
        types: "declare function debugLog(message: string): void;\n\nexport { debugLog };\n"
      },
      Wz = {
        files: {
          "index.ts": 'import type { CustomTextStyling, DialogueText, PlayerId, SpeechVoice } from "@bloxd"\nimport { clearTimeout, setTimeout, TimeoutId } from "@plugins/helpers"\n\n/** Long enough to read most lines once they have appeared. */\nconst DEFAULT_DURATION_MS = 6000\n\nexport type DialogueOpts = {\n\t/** Shown above the line, such as a name. */\n\tspeakerName?: string | CustomTextStyling\n\t/** A preset such as "regular" or "gruff", or every synth parameter. Omit for a silent line. */\n\tvoice?: SpeechVoice\n\t/** How long the line stays up, counted from when it starts to appear. Defaults to 6 seconds. */\n\tdurationMs?: number\n}\n\nconst hideTimeouts: Record<PlayerId, TimeoutId> = {}\n\n/**\n * Shows a player a line of dialogue below the crosshair for a while. A new line replaces the one already up.\n * @param playerId - The player to show the line to\n * @param text - The line. `[[Item Name]]` shows the item\'s icon inline\n * @param opts - The speaker\'s name, the voice that reads it out, and how long it stays up\n */\nexport function sayDialogue(playerId: PlayerId, text: DialogueText, opts: DialogueOpts = {}) {\n\tif (hideTimeouts[playerId] !== undefined) {\n\t\tclearTimeout(hideTimeouts[playerId])\n\t\t// Cleared first, so a line said again replays rather than matching the value already set\n\t\tapi.setClientOption(playerId, "dialogue", null)\n\t}\n\tapi.setClientOption(playerId, "dialogue", { line: text, speakerName: opts.speakerName, voice: opts.voice })\n\thideTimeouts[playerId] = setTimeout(\n\t\t() => {\n\t\t\tclearDialogue(playerId)\n\t\t},\n\t\topts.durationMs ?? DEFAULT_DURATION_MS,\n\t\tplayerId,\n\t)\n}\n\n/**\n * Hides the line of dialogue a player is shown.\n * @param playerId - The player shown the line\n */\nexport function clearDialogue(playerId: PlayerId) {\n\tif (hideTimeouts[playerId] === undefined) {\n\t\treturn\n\t}\n\tclearTimeout(hideTimeouts[playerId])\n\tdelete hideTimeouts[playerId]\n\tapi.setClientOption(playerId, "dialogue", null)\n}\n\nonPlayerLeave = (playerId: PlayerId) => {\n\tdelete hideTimeouts[playerId]\n}\n'
        },
        dependencies: ["helpers"],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  clearDialogue: () => clearDialogue,\n  sayDialogue: () => sayDialogue\n});\nmodule.exports = __toCommonJS(index_exports);\nvar import_helpers = require("@plugins/helpers");\nvar DEFAULT_DURATION_MS = 6e3;\nvar hideTimeouts = {};\nfunction sayDialogue(playerId, text, opts = {}) {\n  if (hideTimeouts[playerId] !== void 0) {\n    (0, import_helpers.clearTimeout)(hideTimeouts[playerId]);\n    api.setClientOption(playerId, "dialogue", null);\n  }\n  api.setClientOption(playerId, "dialogue", { line: text, speakerName: opts.speakerName, voice: opts.voice });\n  hideTimeouts[playerId] = (0, import_helpers.setTimeout)(\n    () => {\n      clearDialogue(playerId);\n    },\n    opts.durationMs ?? DEFAULT_DURATION_MS,\n    playerId\n  );\n}\nfunction clearDialogue(playerId) {\n  if (hideTimeouts[playerId] === void 0) {\n    return;\n  }\n  (0, import_helpers.clearTimeout)(hideTimeouts[playerId]);\n  delete hideTimeouts[playerId];\n  api.setClientOption(playerId, "dialogue", null);\n}\nonPlayerLeave = (playerId) => {\n  delete hideTimeouts[playerId];\n};\n',
        types: "import { CustomTextStyling, SpeechVoice, PlayerId, DialogueText } from '@bloxd';\n\ntype DialogueOpts = {\n    /** Shown above the line, such as a name. */\n    speakerName?: string | CustomTextStyling;\n    /** A preset such as \"regular\" or \"gruff\", or every synth parameter. Omit for a silent line. */\n    voice?: SpeechVoice;\n    /** How long the line stays up, counted from when it starts to appear. Defaults to 6 seconds. */\n    durationMs?: number;\n};\n/**\n * Shows a player a line of dialogue below the crosshair for a while. A new line replaces the one already up.\n * @param playerId - The player to show the line to\n * @param text - The line. `[[Item Name]]` shows the item's icon inline\n * @param opts - The speaker's name, the voice that reads it out, and how long it stays up\n */\ndeclare function sayDialogue(playerId: PlayerId, text: DialogueText, opts?: DialogueOpts): void;\n/**\n * Hides the line of dialogue a player is shown.\n * @param playerId - The player shown the line\n */\ndeclare function clearDialogue(playerId: PlayerId): void;\n\nexport { clearDialogue, sayDialogue };\nexport type { DialogueOpts };\n"
      },
      Xz = {
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
      Oz = {
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
      oz = {
        debug: {
          name: "debug",
          specifier: "@plugins/debug",
          sourceVfsPath: "/node_modules/@plugins/debug/index.ts",
          typesVfsPath: "/node_modules/@plugins/debug/index.d.ts",
          files: Fz.files,
          dependencies: Fz.dependencies,
          bundledSource: Fz.bundledSource,
          types: Fz.types
        },
        dialogue: {
          name: "dialogue",
          specifier: "@plugins/dialogue",
          sourceVfsPath: "/node_modules/@plugins/dialogue/index.ts",
          typesVfsPath: "/node_modules/@plugins/dialogue/index.d.ts",
          files: Wz.files,
          dependencies: Wz.dependencies,
          bundledSource: Wz.bundledSource,
          types: Wz.types
        },
        helpers: {
          name: "helpers",
          specifier: "@plugins/helpers",
          sourceVfsPath: "/node_modules/@plugins/helpers/index.ts",
          typesVfsPath: "/node_modules/@plugins/helpers/index.d.ts",
          files: Xz.files,
          dependencies: Xz.dependencies,
          bundledSource: Xz.bundledSource,
          types: Xz.types
        },
        sessionBasedGame: {
          name: "sessionBasedGame",
          specifier: "@plugins/sessionBasedGame",
          sourceVfsPath: "/node_modules/@plugins/sessionBasedGame/index.ts",
          typesVfsPath: "/node_modules/@plugins/sessionBasedGame/index.d.ts",
          files: Oz.files,
          dependencies: Oz.dependencies,
          bundledSource: Oz.bundledSource,
          types: Oz.types
        }
      };

    function vz(zz) {
      const tz = [],
        sz = new Set,
        Fz = zz => {
          if (sz.has(zz)) return;
          const Wz = oz[zz];
          if (Wz) {
            sz.add(zz);
            for (const zz of Wz.dependencies) Fz(zz);
            tz.push(zz)
          }
        };
      for (const Wz of zz) Fz(Wz);
      return tz
    }
  },
  36274: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => vz,
      f: () => oz,
      i: () => Oz,
      j: () => Xz,
      m: () => Uz,
      p: () => Kz,
      q: () => wz,
      t: () => bz,
      v: () => Nz
    });
    var Fz = sz(1223);
    const Wz = ["quickjs", "ses"];

    function Xz(zz) {
      return Wz.includes(zz)
    }

    function Oz(zz) {
      return zz === Fz.j || zz === Fz.l
    }

    function oz(zz, tz) {
      return zz === Fz.j && tz === Fz.l || zz === Fz.l && tz === Fz.j
    }

    function vz(zz) {
      const tz = Fz.l in zz,
        sz = Fz.j in zz;
      return tz && sz ? null : tz ? Fz.l : sz ? Fz.j : null
    }

    function Uz(zz, tz, sz) {
      const Fz = `${tz}/`;
      return zz.filter((zz => zz.startsWith(Fz))).map((zz => [zz, `${sz}/${zz.slice(Fz.length)}`]))
    }

    function Kz(zz, tz) {
      let sz = 0;
      for (const [Fz, Wz] of Object.entries(zz)) Fz !== tz && (sz += Wz.length);
      return sz
    }
    const uz = "@plugins/";

    function Nz(zz) {
      return `${uz}${zz}`
    }

    function bz(zz, tz) {
      return `/node_modules/@plugins/${zz}/${tz}`
    }

    function wz(zz) {
      if (!zz.startsWith(uz)) return null;
      const tz = zz.slice(uz.length);
      return function(zz) {
        return /^[a-zA-Z][a-zA-Z0-9_-]*$/.test(zz)
      }(tz) ? tz : null
    }
  },
  36287: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => oz,
      i: () => Wz,
      j: () => Oz,
      n: () => vz,
      o: () => Xz
    });
    var Fz = sz(36283);
    const Wz = 5,
      Xz = "[SCHEMATIC]",
      Oz = 1024e4;

    function oz(zz) {
      return zz.endsWith(".bloxdschem") && (0, Fz.x)(zz.slice(0, -11) + ".ts") && zz.length <= 64
    }

    function vz(zz) {
      return Object.fromEntries(Object.keys(zz).map((zz => [zz, Xz])))
    }
  },
  36283: (zz, tz, sz) => {
    sz.d(tz, {
      D: () => Oz,
      e: () => Wz,
      h: () => Xz,
      k: () => Nz,
      o: () => oz,
      r: () => vz,
      u: () => Uz,
      x: () => uz,
      z: () => Kz
    });
    var Fz = sz(1223);
    let Wz = function(zz) {
        return zz[zz.Join = 0] = "Join", zz[zz.Leave = 1] = "Leave", zz[zz.Push = 2] = "Push", zz[zz.Cursor = 3] = "Cursor", zz[zz.Submit = 4] = "Submit", zz[zz.ReloadAsVariation = 5] = "ReloadAsVariation", zz[zz.CreateFile = 6] = "CreateFile", zz[zz.RenameFile = 7] = "RenameFile", zz[zz.DeleteFile = 8] = "DeleteFile", zz[zz.SetEngine = 9] = "SetEngine", zz[zz.RenameFolder = 10] = "RenameFolder", zz
      }({}),
      Xz = function(zz) {
        return zz[zz.Joined = 0] = "Joined", zz[zz.Updates = 1] = "Updates", zz[zz.Presence = 2] = "Presence", zz[zz.RemoteCursor = 3] = "RemoteCursor", zz[zz.ForceClose = 4] = "ForceClose", zz[zz.LobbyFilesChanged = 5] = "LobbyFilesChanged", zz[zz.EngineSettings = 6] = "EngineSettings", zz
      }({});

    function Oz(zz) {
      return "lobby" === zz.kind ? `lobby:${zz.path}` : `codeBlock:${zz.pos[0]},${zz.pos[1]},${zz.pos[2]}`
    }

    function oz(zz) {
      if ("lobby" === zz) return {
        kind: "lobby",
        path: Fz.j
      };
      if (zz.startsWith("lobby:")) {
        const tz = zz.slice(6);
        return uz(tz) ? {
          kind: "lobby",
          path: tz
        } : null
      }
      const tz = zz.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
      return tz ? {
        kind: "codeBlock",
        pos: [parseInt(tz[1]), parseInt(tz[2]), parseInt(tz[3])]
      } : null
    }

    function vz(zz) {
      return zz.endsWith(".d.ts")
    }

    function Uz(zz) {
      return zz.endsWith(".ts") && !vz(zz)
    }
    const Kz = 64;

    function uz(zz) {
      if (!zz || zz !== zz.trim()) return !1;
      if (zz.length > Kz) return !1;
      if (zz.startsWith("/") || zz.includes("\\") || zz.includes("\0")) return !1;
      if (!vz(zz) && !Uz(zz) && ! function(zz) {
          return zz.endsWith(".js") && !zz.endsWith(".min.js") && !zz.endsWith(".bundle.js")
        }(zz)) return !1;
      const tz = zz.split("/");
      for (const sz of tz)
        if ("" === sz || "." === sz || ".." === sz) return !1;
      return !0
    }
    const Nz = 14e3
  },
  4476: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Wz,
      f: () => Fz,
      h: () => Xz,
      l: () => vz,
      n: () => Oz
    });
    const Fz = ["sine", "triangle", "square", "sawtooth"],
      Wz = 55,
      Xz = {
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

    function Oz(zz) {
      return "string" !== typeof zz ? zz : Object.hasOwn(Xz, zz) ? Xz[zz] : null
    }

    function oz(zz, tz, sz) {
      return Math.min(sz, Math.max(tz, zz))
    }

    function vz(zz) {
      const tz = oz(zz.durationMs, 10, 500),
        sz = oz(zz.attackMs, 0, tz),
        {
          intonation: Wz
        } = zz;
      return {
        waveform: Fz.includes(zz.waveform) ? zz.waveform : "sine",
        pitchHz: oz(zz.pitchHz, 20, 4e3),
        glideSemitones: oz(zz.glideSemitones, -24, 24),
        durationMs: tz,
        attackMs: sz,
        releaseMs: oz(zz.releaseMs, 0, tz - sz),
        lowpassHz: null === zz.lowpassHz ? null : oz(zz.lowpassHz, 20, 2e4),
        volume: oz(zz.volume, 0, 2),
        intonation: {
          variationSemitones: oz(Wz.variationSemitones, 0, 6),
          declineSemitones: oz(Wz.declineSemitones, 0, 12),
          questionRiseSemitones: oz(Wz.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: oz(Wz.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: oz(zz.syllableMs, 25, 200)
      }
    }
  },
  9654: zz => {
    zz.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAHklEQVR4nGNY3x/6nxjMQH2Fcyq8/hODaWA11d0IAPvLyX36T0UzAAAAAElFTkSuQmCC"
  },
  17947: zz => {
    zz.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAAC4CAYAAADqkK6nAAAAAXNSR0IArs4c6QAAAuxJREFUeJzt1jFOFHEchuEfxpqeaGusuYDhCpbewMbEwmNYmNBwA0quYLgAtaGF2HuBtVpEWHBNXnBXnqeanUzxT+bNtzMDsOl21nhm8eCnYBvd2c6zxzwFT8N9S7WYmfn0am9mZl6+2H2M87DhLi5/zMzM5/Pvy1u3GrJU5FYt1WJm5svB60c+Ctvo49dvy8urliwVuetL5RuKv7bqG8tSkXt+88afFurN+3czM7P/9sPDnIiNcHZy+Nvv06Pjlc9d9fJrqXxT0bu1VHexUE/Tzfd912JdZ6nIrb1UFop1WSpyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIit3ZUZyeHc3Zy+JBn4T9hqcg9X/fB06Pj337vv/2QH4bNs/x3uvn+72OpyO1cu17MzHx6tTczMy9f7P6L87BlLi5/zMzM5/Pvy1s7lorczop7i5mZLwevH/kobKOPX78tL69aslTkVi3Vkm8sbln1DXXzGUtF7r6lWlo8+CnYRne2Y6mAzfcTBsFAqM32XQcAAAAASUVORK5CYII="
  },
  19784: zz => {
    zz.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJUlEQVR4nGMwsIpkIAYz0FThfyjGymcgVSFMEJtCsBjJCgcgeABOGmAZtndiFgAAAABJRU5ErkJggg=="
  },
  19793: zz => {
    zz.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJ0lEQVR4nGMwsIpkIAYzQBn/kTBWMQYsgtgwA+0UMuBTNIgU4g1wAE6xgffL0CuLAAAAAElFTkSuQmCC"
  },
  19797: zz => {
    zz.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJElEQVR4nGMwsIpkIAYzkKrwPxLGKsZAc4UMaJh8hdQPHoIKAboeZhN3YNlSAAAAAElFTkSuQmCC"
  },
  19802: zz => {
    zz.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMUlEQVR4nGMwsIpkIAYzoAn8R8MM2BSiK/qPrJiQov8wxWQrxMkm2USiPUNS8OANcADc3H37DfNNQQAAAABJRU5ErkJggg=="
  },
  19806: zz => {
    zz.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAKElEQVR4nGMwsIpkIAYzIHH+48AMyApxKfoPU0yRQgZsYkNJIcEABwCQU3/5LLo7QwAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);