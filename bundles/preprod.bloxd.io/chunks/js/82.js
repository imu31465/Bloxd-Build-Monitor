export const id = 82;
export const ids = [82];
export const modules = {
  36011: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => cz,
      d: () => hz
    });
    var Ez = bz(56),
      nz = bz(1871),
      iz = bz(36019),
      lz = bz.n(iz),
      Mz = bz(4300),
      tz = bz(1846),
      Hz = bz(1417),
      Oz = bz(96),
      pz = bz(111),
      dz = bz(328),
      Fz = bz(1038),
      Zz = bz.n(Fz),
      Rz = bz(20),
      Kz = bz(1047),
      wz = bz(1595),
      Xz = bz(1673),
      fz = bz(1633),
      sz = bz(1936),
      rz = bz(1377),
      oz = bz(2007),
      Nz = bz(1362),
      vz = bz(8442),
      xz = bz(36021),
      Jz = bz(36039),
      Az = bz(1441),
      Tz = bz(2317),
      Lz = bz(1181),
      Pz = bz(36046);
    var Gz = bz(8915);
    var az = bz(1089);
    const Vz = bz(36053),
      mz = ["enter", "t", "/"];
    let qz = !1;

    function hz() {
      return qz || (0, Xz.isTextEntry)(document.activeElement)
    }

    function Uz() {
      var zz, uz;
      (0, oz.c)();
      const bz = null !== (zz = null === (uz = (0, rz.f)()) || void 0 === uz ? void 0 : uz.getBoundButton("keyboardChannel")) && void 0 !== zz ? zz : null;
      return bz ? (0, az.jsx)(sz.e, {
        className: "ChatInputChannelGlyph",
        glyph: bz
      }) : null
    }

    function cz() {
      const {
        t: zz
      } = (0, Lz.F)(), {
        isTouchScreen: uz
      } = (0, Rz.m)(["isTouchScreen"]), bz = (0, Nz.p)(), [iz, Fz] = (0, Ez.useState)(!1), sz = (0, Ez.useRef)(iz), rz = (0, Ez.useRef)(null), {
        messages: oz,
        reportedPlayers: hz,
        channel: cz
      } = (0, vz.n)(), Sz = (0, Ez.useRef)(0), yz = (0, Ez.useRef)(""), Dz = (0, Ez.useRef)(null);
      var Qz;
      Qz = Dz, (0, Ez.useEffect)((() => {
        if (!(0, Oz.isIOS)()) return;
        const zz = Qz.current;
        let uz = null;
        const bz = bz => {
            const Ez = bz.changedTouches[0];
            uz = "none" === getComputedStyle(zz).pointerEvents ? {
              id: Ez.identifier,
              y: Ez.clientY
            } : null
          },
          Ez = bz => {
            const Ez = uz,
              nz = Ez && (0, Pz.b)(bz.changedTouches, Ez.id);
            nz && (bz.preventDefault(), zz.scrollBy({
              top: Ez.y - nz.clientY,
              behavior: "instant"
            }), Ez.y = nz.clientY)
          };
        return zz.addEventListener("touchstart", bz, {
          passive: !0
        }), zz.addEventListener("touchmove", Ez, {
          passive: !1
        }), () => {
          zz.removeEventListener("touchstart", bz), zz.removeEventListener("touchmove", Ez)
        }
      }), [Qz]);
      const [Wz, ez] = (0, Ez.useState)(!1), [jz, Iz] = (0, Ez.useState)(!1), Bz = (0, Ez.useRef)(Wz), Cz = (0, Ez.useRef)(null), Yz = (0, Ez.useRef)(!1), kz = (0, Ez.useRef)(null), zu = (0, Ez.useRef)(null), uu = (0, Ez.useRef)(null), bu = (0, Ez.useRef)(lu);
      bu.current = lu;
      const Eu = (0, Tz.m)();

      function nu() {
        sz.current = !1, Fz(!1), zu.current.blur()
      }

      function iu(zz) {
        Bz.current = zz, ez(zz)
      }

      function lu() {
        const zz = zu.current.value;
        zu.current.value = "", Mu(zz)
      }

      function Mu(zz) {
        (0, vz.l)(zz), Sz.current = 0, iu(!1)
      }

      function tu(zz, uz) {
        0 === Sz.current && (yz.current = zu.current.value);
        const bz = (0, vz.i)(Sz.current + zz, uz);
        Sz.current = bz.stepsBack, zu.current.value = 0 === bz.stepsBack ? yz.current : bz.text, setTimeout((() => {
          zu.current && zu.current.setSelectionRange(-1, -1)
        }), 0)
      }

      function Hu() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        Dz.current && (!zz && Bz.current || (Dz.current.scrollTop = 1e5))
      }
      return (0, Mz.e)(!0, iz, "ChatComponent"), (0, Ez.useEffect)((() => (qz = iz, () => {
          qz = !1
        })), [iz]), (0, Hz.g)("appManagerUpdated|openEverythingMenuName", (() => {
          (0, wz.p)() && Fz(!1)
        })), (0, Ez.useEffect)((() => {
          zu.current.addEventListener("blur", (zz => {
            if (null === zu.current) return;
            Array.from(document.querySelectorAll(":hover")).some((zz => zz.classList.contains("ChatInputChannel") || zz.classList.contains("ChatMsgSelectWrapper"))) || ((0, Oz.isMobile)() && sz.current && "" !== zu.current.value && bu.current(), Fz(!1))
          }));
          const zz = zz => {
            rz.current.contains(zz.target) || (0, fz.n)(zz.target) || Fz(!1)
          };
          document.addEventListener("touchstart", zz, {
            capture: !0
          });
          const uz = zz => {
            (0, Jz.i)(zz.target) && (sz.current = !1, Fz(!1))
          };
          document.addEventListener("mousedown", uz, {
            capture: !0
          });
          const bz = () => {
              clearTimeout(Cz.current), iu(!0)
            },
            Ez = () => {
              clearTimeout(Cz.current), Cz.current = setTimeout((() => {
                iu(!1), Hu()
              }), 4e3)
            },
            iz = () => {
              document.pointerLockElement ? (Fz(!1), Iz(!0), Yz.current = !1, iu(!1), Hu()) : Iz(!1)
            };
          Dz.current.addEventListener("pointermove", (zz => {
            "touch" === zz.pointerType || Yz.current || document.pointerLockElement || (Yz.current = !0, clearTimeout(Cz.current))
          })), Dz.current.addEventListener("pointerleave", (zz => {
            "touch" !== zz.pointerType && (Yz.current = !1, Bz.current && Ez())
          })), Dz.current.addEventListener("pointerdown", (zz => {
            "touch" === zz.pointerType || document.pointerLockElement || (Yz.current = !0, bz())
          })), Dz.current.addEventListener("wheel", (zz => {
            document.pointerLockElement || zz.deltaY >= 0 && Math.abs(Dz.current.scrollTop) < 1 || (bz(), Yz.current || (Cz.current = setTimeout((() => {
              iu(!1)
            }), 4e3)))
          }), {
            passive: !0
          }), Dz.current.addEventListener("touchstart", bz), Dz.current.addEventListener("touchend", Ez), Dz.current.addEventListener("touchcancel", Ez), document.addEventListener("pointerlockchange", iz);
          const Mz = zz => {
            if (Eu.shown && (sz.current || ! function(zz) {
                if ((0, Xz.isTypingInInput)()) return !0;
                const uz = document.activeElement;
                return (uz instanceof HTMLButtonElement || "button" === (null === uz || void 0 === uz ? void 0 : uz.getAttribute("role"))) && ["Enter", " "].includes(zz.key)
              }(zz)) && "codeEditor" !== Rz.e.get("openInGameMenuName") && "lobbyCodeEditor" !== Rz.e.get("openInGameMenuName") && !nz.gameBridge.latest("connectedGame").replay)
              if (sz.current || !(0, wz.p)()) {
                if (sz.current) {
                  if ("ArrowUp" === zz.code || "ArrowDown" === zz.code) return tu("ArrowUp" === zz.code ? 1 : -1, !1), void zz.stopPropagation();
                  if ("Tab" === zz.code) return vz.d.selectNextChannel(), zz.stopPropagation(), void zz.preventDefault();
                  if (zz.ctrlKey && gz.includes(Vz[zz.keyCode])) return zz.preventDefault(), void zz.stopPropagation()
                }
                if ([...mz, "esc"].includes(lz()(zz)))
                  if ("esc" !== lz()(zz)) {
                    if (!sz.current || "/" !== lz()(zz)) {
                      if ("t" === lz()(zz)) {
                        if (sz.current) return void zz.stopPropagation();
                        zz.preventDefault()
                      }
                      sz.current && "" !== zu.current.value && bu.current(), zz.repeat || (sz.current || "/" === lz()(zz) && (zu.current.value = "/", zz.preventDefault()), Fz(!sz.current))
                    }
                  } else sz.current && (Fz(!1), zz.stopPropagation());
                else sz.current && zz.stopPropagation()
              } else mz.includes(lz()(zz)) && (zz.preventDefault(), zz.stopPropagation(), (0, wz.b)(zz))
          };
          document.addEventListener("keydown", Mz, {
            capture: !0
          });
          const tz = Dz.current;
          let Hz = !1;
          const pz = new ResizeObserver((() => {
              Hz && (Hz = !1, Hu())
            })),
            dz = () => {
              Hz = !0, pz.unobserve(tz), pz.observe(tz)
            };
          kz.current = dz;
          const Zz = new MutationObserver(dz);
          return Zz.observe(tz, {
            childList: !0,
            subtree: !0
          }), () => {
            document.removeEventListener("keydown", Mz, {
              capture: !0
            }), document.removeEventListener("touchstart", zz, {
              capture: !0
            }), document.removeEventListener("mousedown", uz, {
              capture: !0
            }), document.removeEventListener("pointerlockchange", iz), kz.current = null, Zz.disconnect(), pz.disconnect(), clearTimeout(Cz.current)
          }
        }), []), (0, fz.r)(zu, {
          open: () => {
            Fz(!0)
          },
          close: () => {
            nu()
          },
          submit: () => {
            "" !== zu.current.value && lu(), nu()
          },
          stepHistory: () => {
            tu(1, !0)
          },
          sendLine: zz => {
            Mu(zz), nu()
          },
          selectNextChannel: () => {
            vz.d.selectNextChannel()
          }
        }), (0, Ez.useEffect)((() => {
          var zz;
          (sz.current = iz, zu.current) && (iz ? (Sz.current = 0, zu.current.focus()) : (zu.current.blur(), null === (zz = kz.current) || void 0 === zz || zz.call(kz)))
        }), [iz]),
        function(zz, uz) {
          (0, Ez.useLayoutEffect)((() => {
            if (!uz) return;
            Gz.d.hold();
            const bz = zz.current.closest(".InGameHeaderAndChat"),
              Ez = window.visualViewport;
            let nz = "";
            const iz = () => {
              const zz = `${Ez.offsetTop+Ez.height}px`;
              zz !== nz && (nz = zz, bz.style.setProperty("--keyboard-top", zz))
            };
            return iz(), Ez.addEventListener("resize", iz), Ez.addEventListener("scroll", iz), () => {
              Ez.removeEventListener("resize", iz), Ez.removeEventListener("scroll", iz), bz.style.removeProperty("--keyboard-top"), Gz.d.release()
            }
          }), [zz, uz])
        }(rz, iz && uz), (0, az.jsx)(az.Fragment, {
          children: (0, az.jsxs)("div", {
            ref: rz,
            className: Zz()("Chat", {
              Chatting: iz
            }),
            "data-camera-keeper": iz ? "" : void 0,
            children: [(0, az.jsx)("div", {
              ref: Dz,
              className: Zz()("ChatMessages", {
                HideScrollbar: !Wz && !iz,
                NoScrolling: !(0, Oz.isMobile)() && jz
              }),
              children: (0, az.jsx)(xz.b, {
                messages: oz,
                reportedPlayers: hz
              })
            }), uz && !iz && (0, az.jsx)("button", {
              type: "button",
              className: "ChatIconWrapper SmallTextLight",
              "aria-label": zz("general:chat"),
              ...(0, Az.c)((() => {
                Fz(!0), uu.current.style.display = "flex", (0, Oz.isIOS)() && zu.current.focus()
              }), "pointerup"),
              children: (0, az.jsx)(Kz.c, {
                name: "comment-dots",
                className: "ChatIcon"
              })
            }), (0, az.jsxs)("div", {
              ref: uu,
              className: "ChatInputWrapper",
              style: {
                display: "" + (iz ? "flex" : "none")
              },
              children: [cz && (0, az.jsx)("button", {
                type: "button",
                className: "ChatInputChannel",
                style: {
                  backgroundColor: cz.elementBgColor
                },
                onClick: zz => {
                  vz.d.selectNextChannel(), zu.current.focus()
                },
                children: (0, az.jsx)("span", {
                  className: "SmallTextBold",
                  children: (0, az.jsx)(tz.b, {
                    text: cz.elementContent
                  })
                })
              }), cz && bz && (0, az.jsx)(Uz, {}), (0, az.jsx)("input", {
                className: "ChatInput",
                maxLength: dz.ed,
                ref: zu,
                spellCheck: "false",
                autoComplete: "off",
                autoCorrect: "off",
                "aria-label": zz("general:chat"),
                placeholder: cz ? `${cz.channelName} Chat${"touchOnly"===(0,pz.e)()||bz?"":" [Tab]"}` : ""
              })]
            })]
          })
        })
    }
    const gz = ["W", "S", "D", "N", "T", "<tab>", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "<page-up>", "<page-down>", "B", "O", "H", "J", "F", "G", "J", "M", "<enter>", "L", "K", "E", "P", "R", "O", "U"]
  },
  36021: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => vz
    });
    var Ez = bz(56),
      nz = bz(1038),
      iz = bz.n(nz),
      lz = bz(8450),
      Mz = bz(22),
      tz = bz(2264),
      Hz = bz(3344),
      Oz = bz(1953),
      pz = bz(20),
      dz = bz(1846),
      Fz = bz(36029),
      Zz = bz(2067),
      Rz = bz(36032),
      Kz = bz(2485),
      wz = bz(2466),
      Xz = bz(2458),
      fz = bz(3355),
      sz = bz(2866),
      rz = bz(1912),
      oz = bz(1089);

    function Nz(zz) {
      for (let bz = zz.length - 1; bz >= 0; bz--) {
        const Ez = "string" === typeof(uz = zz[bz]) ? uz : "str" in uz && "string" === typeof uz.str ? uz.str : "";
        if ("" !== Ez.trim()) return Ez
      }
      var uz;
      return ""
    }

    function vz(zz) {
      let {
        messages: uz,
        reportedPlayers: bz
      } = zz;
      return (0, oz.jsx)(oz.Fragment, {
        children: uz.map((zz => (0, oz.jsx)(xz, {
          message: zz,
          reportedPlayers: bz
        }, zz.clientChatMsgId)))
      })
    }
    const xz = (0, Ez.memo)((function(zz) {
      var uz;
      let {
        message: bz,
        reportedPlayers: nz
      } = zz;
      const vz = (0, Ez.useRef)(null),
        [xz] = (0, Ez.useState)(sz.e),
        {
          author: Jz
        } = bz,
        Az = null === Jz || void 0 === Jz ? void 0 : Jz.id,
        Tz = null !== (uz = null === Jz || void 0 === Jz ? void 0 : Jz.name) && void 0 !== uz ? uz : void 0,
        Lz = (0, Oz.e)(Tz),
        Pz = null !== Jz && void 0 !== Jz && Jz.profileEffect ? Zz.g[Jz.profileEffect] : void 0,
        Gz = null !== Jz && !Jz.local,
        az = null === Jz && null !== bz.serverChatMsgId,
        Vz = (0, rz.e)("hiddenPlayerNames", (zz => (0, Rz.h)(Gz, Tz, zz))),
        mz = null === bz.serverChatMsgId || null === Jz ? null : {
          text: Nz(bz.content),
          serverChatMsgId: bz.serverChatMsgId,
          authorId: Jz.id
        },
        qz = az || null !== mz && !nz.includes(Az),
        hz = (0, Hz.g)(Gz && null !== Tz && void 0 !== Tz ? Tz : null),
        Uz = (0, Xz.j)(vz);
      (0, Ez.useEffect)((() => () => {
        Xz.e.closeIfOwner(vz)
      }), []);
      const cz = () => {
          az ? Mz.k.sK("OpenReportMenu", {
            playerEId: null,
            playerName: void 0,
            zM: (0, lz.b)(bz.content),
            serverChatMsgId: bz.serverChatMsgId
          }) : null !== mz ? Mz.k.sK("OpenReportMenu", {
            playerEId: Az,
            playerName: Tz,
            zM: mz.text,
            serverChatMsgId: mz.serverChatMsgId
          }) : console.warn("Reporting a chat message the server never acknowledged")
        },
        gz = void 0 === Tz ? [] : (0, fz.d)(hz, Tz, mz);
      return (0, oz.jsxs)("div", {
        ref: vz,
        className: iz()("MessageWrapper", {
          ChatMsgSelectWrapper: Az,
          Still: xz
        }),
        onContextMenu: Vz ? zz => {
          (0, Kz.g)(vz, zz, {
            ...(0, Rz.e)(Az, Tz),
            showLocation: !1,
            status: null,
            extraActions: qz ? [{
              icon: "flag",
              text: "Report",
              onClick: cz
            }] : [],
            friendRequestSource: "chat"
          }, pz.e.get("isTouchScreen"))
        } : void 0,
        onPointerDown: Vz ? zz => {
          (0, wz.b)(zz, (() => (0, Rz.e)(Az, Tz).playerSocialPreview))
        } : void 0,
        children: [Pz && (0, oz.jsx)(Pz, {
          className: "ChatMessageBackground",
          simple: !0
        }), (Gz || az) && !Uz && (0, oz.jsx)(Fz.d, {
          className: "ChatFloatingActions",
          triggerElementRef: vz,
          options: [{
            icon: "flag",
            text: "Report",
            onPointerDown: cz,
            show: qz
          }, ...gz, {
            icon: "user-plus",
            text: "socialBar:sendFriendRequest",
            onPointerDown: zz => {
              (0, tz.j)(Tz, "chat")
            },
            analyticsClick: {
              id: "social.add_friend",
              value: "chat"
            },
            show: Vz && "blocked" !== hz
          }]
        }), (0, oz.jsx)(dz.b, {
          text: bz.content,
          friendBadgeFor: Lz ? Tz : void 0
        }, bz.clientChatMsgId)]
      }, bz.clientChatMsgId)
    }))
  },
  36066: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Fz,
      d: () => Zz,
      g: () => dz,
      h: () => pz
    });
    var Ez = bz(8982),
      nz = bz(36071),
      iz = bz(36080),
      lz = bz(8378),
      Mz = bz(1417),
      tz = bz(56),
      Hz = bz(79),
      Oz = bz(1089);

    function pz() {
      var zz;
      return (0, Mz.h)(nz.e, (0, nz.o)()), (0, Oz.jsx)(Oz.Fragment, {
        children: null === (zz = (0, nz.o)()) || void 0 === zz ? void 0 : zz.content
      })
    }

    function dz(zz) {
      var uz;
      let {
        show: bz
      } = zz;
      (0, Mz.h)(nz.e, (0, nz.o)());
      const Hz = null === (uz = (0, nz.o)()) || void 0 === uz ? void 0 : uz.menu;
      return (0, tz.useEffect)((() => {
        var zz;
        bz || (null === Hz || void 0 === Hz || null === (zz = Hz.onClose) || void 0 === zz || zz.call(Hz), (0, iz.j)())
      }), [bz, Hz]), (0, tz.useEffect)((() => bz ? (0, lz.e)(iz.u, iz.d) : void 0), [bz]), (0, Oz.jsx)(Ez.d, {
        showing: bz,
        globallyUniqueKey: "clientGameMenu",
        children: null === Hz || void 0 === Hz ? void 0 : Hz.content
      })
    }

    function Fz(zz) {
      let {
        placement: uz = "bottom"
      } = zz;
      return (0, Oz.jsx)("div", {
        id: `clientGameHud-${uz}`,
        style: {
          display: "contents"
        }
      })
    }

    function Zz(zz) {
      let {
        children: uz,
        placement: bz = "bottom"
      } = zz;
      const [Ez, nz] = (0, tz.useState)(null);
      return (0, tz.useEffect)((() => {
        nz(document.getElementById(`clientGameHud-${bz}`))
      }), [bz]), Ez ? (0, Hz.createPortal)(uz, Ez) : null
    }
  },
  36326: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => pz,
      c: () => Oz
    });
    var Ez = bz(56),
      nz = bz(1038),
      iz = bz.n(nz),
      lz = bz(1419),
      Mz = bz(1089);
    const tz = 200,
      Hz = 160;

    function Oz() {
      return window.matchMedia("(max-width: 900px)").matches
    }

    function pz(zz) {
      let {
        side: uz,
        defaultSize: bz,
        covers: nz,
        onClose: Oz,
        children: pz
      } = zz;
      const dz = (0, Ez.useRef)(null),
        [Fz, Zz] = (0, Ez.useState)(null),
        [Rz, Kz] = (0, Ez.useState)(bz);
      Rz !== bz && (Kz(bz), Zz(null));
      const wz = (0, Ez.useRef)(null),
        Xz = "top" === uz,
        fz = zz => Xz ? zz.clientY : zz.clientX,
        sz = () => {
          wz.current = null
        };
      return (0, Mz.jsxs)("div", {
        ref: dz,
        className: iz()("ResizableSidePanel", uz && `ResizableSidePanel-${uz}`, {
          Covers: "always" === nz,
          CoversWhenNarrow: "narrow" === nz,
          Dragged: null !== Fz
        }),
        style: {
          [Xz ? "height" : "width"]: null !== Fz && void 0 !== Fz ? Fz : bz
        },
        children: [pz, uz && (0, Mz.jsx)("div", {
          className: "ResizableSidePanelHandle",
          role: "separator",
          "aria-orientation": Xz ? "horizontal" : "vertical",
          onPointerDown: zz => {
            if (0 !== zz.button) return;
            zz.preventDefault();
            const uz = dz.current,
              bz = Array.from(uz.parentElement.children).reduce(((zz, bz) => bz !== uz && "0" !== getComputedStyle(bz).flexGrow ? zz + (zz => Xz ? zz.clientHeight : zz.clientWidth)(bz) : zz), 0),
              Ez = Xz ? uz.offsetHeight : uz.offsetWidth,
              nz = Math.min(tz, Ez),
              iz = Math.max(nz, Ez + Math.max(0, bz - Hz));
            wz.current = {
              start: fz(zz),
              startSize: Ez,
              minSize: nz,
              maxSize: iz
            }, zz.currentTarget.setPointerCapture(zz.pointerId)
          },
          onPointerMove: zz => {
            const bz = wz.current;
            if (!bz) return;
            const Ez = "right" === uz ? bz.start - zz.clientX : fz(zz) - bz.start;
            Zz(Math.min(bz.maxSize, Math.max(bz.minSize, bz.startSize + Ez)))
          },
          onPointerUp: sz,
          onPointerCancel: sz,
          onLostPointerCapture: sz
        }), Oz && (0, Mz.jsx)(lz.m, {
          className: "ResizableSidePanelClose",
          onClick: Oz
        })]
      })
    }
  },
  36343: (zz, uz, bz) => {
    bz.d(uz, {
      B: () => vz,
      C: () => nz,
      D: () => Nz,
      d: () => fz,
      e: () => Kz,
      g: () => Zz,
      j: () => Fz,
      n: () => Xz,
      o: () => xz,
      r: () => sz,
      v: () => oz,
      y: () => rz
    });
    var Ez = bz(56);
    const nz = 5e3,
      iz = 500,
      lz = 3e3;
    let Mz = null,
      tz = null,
      Hz = null;
    const Oz = new Set;

    function pz(zz) {
      Mz = zz;
      for (const uz of Oz) uz()
    }

    function dz() {
      if (!Mz || void 0 !== Mz.endedAt) return;
      null !== tz && (clearTimeout(tz), tz = null), pz({
        ...Mz,
        endedAt: Date.now()
      });
      const zz = Hz;
      Hz = null, null === zz || void 0 === zz || zz()
    }

    function Fz(zz, uz) {
      let {
        submit: bz,
        reopen: Ez
      } = uz;
      null !== tz && clearTimeout(tz), Hz = Ez, pz({
        ...zz,
        startedAt: Date.now(),
        errors: []
      }), tz = setTimeout(dz, lz), bz()
    }

    function Zz() {
      Mz && void 0 === Mz.endedAt && void 0 === Mz.ranAt && (null !== tz && clearTimeout(tz), pz({
        ...Mz,
        ranAt: Date.now()
      }), tz = setTimeout(dz, nz))
    }
    const Rz = 3;

    function Kz(zz) {
      if (!Mz || void 0 === Mz.ranAt || void 0 !== Mz.endedAt || Mz.errors.includes(zz) || Mz.errors.length >= Rz) return;
      const uz = 0 === Mz.errors.length;
      pz({
        ...Mz,
        errors: [...Mz.errors, zz]
      }), uz && (null !== tz && clearTimeout(tz), tz = setTimeout(dz, iz))
    }

    function wz(zz) {
      var uz;
      return (null === (uz = Mz) || void 0 === uz ? void 0 : uz.chatKey) === zz ? Mz : null
    }

    function Xz(zz) {
      const uz = wz(zz);
      return uz && void 0 !== uz.endedAt ? (pz(null), uz) : null
    }

    function fz(zz) {
      var uz;
      (null === (uz = Mz) || void 0 === uz ? void 0 : uz.chatKey) === zz && (null !== tz && (clearTimeout(tz), tz = null), Hz = null, pz(null))
    }
    const sz = "These changes from your last answer didn't go in. Make them again.";

    function rz(zz) {
      const uz = [...new Set(zz)].slice(0, Rz);
      return `Fix this in your change: when it ran, the world showed ${1===uz.length?"this error":"these errors"}: ${uz.join(" ")}`
    }

    function oz(zz) {
      return `Your change didn't go in, because the code wouldn't run at all: ${zz.join(" ")} Send the whole change again with that fixed.`
    }

    function Nz(zz) {
      return `Fix this in your change: ${zz.join(" ")}`
    }

    function vz(zz) {
      var uz;
      if (void 0 === zz.ranAt) return {
        title: "Couldn't test it",
        text: "Your change didn't go into your world, so it couldn't be tested. Press Submit to try it."
      };
      const bz = Math.max(1, Math.round(((null !== (uz = zz.endedAt) && void 0 !== uz ? uz : zz.ranAt) - zz.ranAt) / 1e3)),
        Ez = `Your change ran in your world for ${bz} ${1===bz?"second":"seconds"}`;
      return 0 === zz.errors.length ? {
        title: "Tested: no errors",
        text: `${Ez} without an error.`
      } : {
        title: 1 === zz.errors.length ? "Tested: it showed an error" : `Tested: it showed ${zz.errors.length} errors`,
        text: `${Ez} and showed: ${zz.errors.join(" ")}`
      }
    }

    function xz(zz) {
      const [uz, bz] = (0, Ez.useState)((() => wz(zz)));
      return (0, Ez.useEffect)((() => {
        const uz = () => {
          bz(wz(zz))
        };
        return uz(), Oz.add(uz), () => {
          Oz.delete(uz)
        }
      }), [zz]), uz
    }
  },
  36352: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => nz,
      i: () => Ez
    });
    const Ez = {
      key: "worldCode",
      label: "World Code",
      codeBlock: !1
    };

    function nz(zz, uz, bz) {
      return {
        key: zz,
        label: `Code block at ${uz.join(", ")}`,
        codeBlock: !0,
        pos: uz,
        canChangePos: bz
      }
    }
  },
  36334: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Ez,
      e: () => iz,
      f: () => lz,
      j: () => nz
    });
    const Ez = "code block",
      nz = "World Code/";

    function iz(zz) {
      return zz.trim().toLowerCase().startsWith(nz.toLowerCase())
    }

    function lz(zz) {
      return zz.trim().slice(nz.length).replace(/^\.?\//, "")
    }
  },
  36308: (zz, uz, bz) => {
    bz.d(uz, {
      A: () => Jz,
      D: () => dz,
      G: () => az,
      K: () => vz,
      L: () => xz,
      N: () => Gz,
      e: () => Zz,
      i: () => tz,
      k: () => Rz,
      l: () => Az,
      p: () => Mz,
      r: () => Oz,
      s: () => Fz,
      v: () => Kz,
      y: () => sz,
      z: () => Tz
    });
    var Ez = bz(36297),
      nz = bz(36300);
    const iz = "bloxd-world-code-directory-sync",
      lz = "handles",
      Mz = "[INVALID SCHEMATIC PLACEHOLDER]";

    function tz(zz, uz) {
      return `${zz}::${uz}`
    }
    const Hz = new Set(["node_modules", ".git"]);

    function Oz() {
      return "undefined" !== typeof window && "function" === typeof window.showDirectoryPicker
    }

    function pz() {
      return new Promise(((zz, uz) => {
        const bz = indexedDB.open(iz, 1);
        bz.onupgradeneeded = () => {
          const zz = bz.result;
          zz.objectStoreNames.contains(lz) || zz.createObjectStore(lz)
        }, bz.onsuccess = () => {
          zz(bz.result)
        }, bz.onerror = () => {
          var zz;
          uz(null !== (zz = bz.error) && void 0 !== zz ? zz : new Error("Failed to open directory sync IndexedDB"))
        }
      }))
    }
    async function dz(zz, uz) {
      const bz = await pz();
      try {
        await new Promise(((Ez, nz) => {
          const iz = bz.transaction(lz, "readwrite");
          iz.objectStore(lz).put(uz, zz), iz.oncomplete = () => {
            Ez()
          }, iz.onerror = () => {
            var zz;
            nz(null !== (zz = iz.error) && void 0 !== zz ? zz : new Error("Failed to store directory handle"))
          }
        }))
      } finally {
        bz.close()
      }
    }
    async function Fz(zz) {
      const uz = await pz();
      try {
        return await new Promise(((bz, Ez) => {
          const nz = uz.transaction(lz, "readonly").objectStore(lz).get(zz);
          nz.onsuccess = () => {
            var zz;
            bz(null !== (zz = nz.result) && void 0 !== zz ? zz : null)
          }, nz.onerror = () => {
            var zz;
            Ez(null !== (zz = nz.error) && void 0 !== zz ? zz : new Error("Failed to load directory handle"))
          }
        }))
      } finally {
        uz.close()
      }
    }
    async function Zz(zz) {
      const uz = await pz();
      try {
        await new Promise(((bz, Ez) => {
          const nz = uz.transaction(lz, "readwrite");
          nz.objectStore(lz).delete(zz), nz.oncomplete = () => {
            bz()
          }, nz.onerror = () => {
            var zz;
            Ez(null !== (zz = nz.error) && void 0 !== zz ? zz : new Error("Failed to clear directory handle"))
          }
        }))
      } finally {
        uz.close()
      }
    }
    async function Rz(zz) {
      const uz = {
        mode: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "readwrite"
      };
      return "granted" === await zz.queryPermission(uz) || "granted" === await zz.requestPermission(uz)
    }
    async function Kz(zz) {
      if (!Oz()) return null;
      try {
        const uz = await window.showDirectoryPicker({
          mode: "readwrite"
        });
        return await dz(zz, uz), uz
      } catch (uz) {
        if (function(zz) {
            return zz instanceof DOMException && "AbortError" === zz.name
          }(uz)) return null;
        throw uz
      }
    }

    function wz(zz) {
      return zz.startsWith(".") || Hz.has(zz)
    }

    function Xz(zz) {
      if (!zz) return !0;
      const uz = zz.split("/");
      for (const bz of uz)
        if ("" === bz || "." === bz || ".." === bz) return !1;
      return !0
    }
    async function fz(zz, uz, bz) {
      for await (const [iz, lz] of zz.entries()) {
        if ("directory" === lz.kind) {
          if (wz(iz)) continue;
          const zz = uz ? `${uz}/${iz}` : iz;
          if (!Xz(zz)) continue;
          await fz(lz, zz, bz);
          continue
        }
        const zz = uz ? `${uz}/${iz}` : iz;
        if (!(0, Ez.t)(zz) && !(0, nz.d)(zz)) continue;
        const Mz = await lz.getFile();
        bz[zz] = (0, nz.d)(zz) ? await Lz(Mz) : await Mz.text()
      }
    }
    async function sz(zz) {
      const uz = {};
      return await fz(zz, "", uz), uz
    }

    function rz(zz) {
      return !(!zz || zz !== zz.trim() || zz.startsWith("/") || zz.includes("\\") || zz.includes("\0")) && Xz(zz)
    }
    async function oz(zz, uz, bz) {
      const Ez = uz.split("/"),
        nz = Ez[Ez.length - 1];
      let iz = zz;
      for (let lz = 0; lz < Ez.length - 1; lz++) iz = await iz.getDirectoryHandle(Ez[lz], {
        create: bz
      });
      return {
        dir: iz,
        fileName: nz
      }
    }
    async function Nz(zz, uz, bz) {
      if (!rz(uz)) throw new Error(`Refusing to write unsafe path: ${uz}`);
      const {
        dir: Ez,
        fileName: nz
      } = await oz(zz, uz, !0), iz = await Ez.getFileHandle(nz, {
        create: !0
      }), lz = await iz.createWritable();
      await lz.write(bz), await lz.close()
    }
    async function vz(zz, uz, bz) {
      const Ez = await async function(zz, uz) {
        if (!rz(uz)) return null;
        try {
          const {
            dir: bz,
            fileName: Ez
          } = await oz(zz, uz, !1), nz = await bz.getFileHandle(Ez), iz = await nz.getFile();
          return await iz.text()
        } catch (bz) {
          if (bz instanceof DOMException && ("NotFoundError" === bz.name || "NotAllowedError" === bz.name)) return null;
          throw bz
        }
      }(zz, uz);
      Ez !== bz && await Nz(zz, uz, bz)
    }
    async function xz(zz, uz, bz) {
      if (!(0, Ez.t)(uz) && !(0, nz.d)(uz)) throw new Error(`Refusing to write non-allowlisted path: ${uz}`);
      if ((0, nz.d)(uz)) {
        if (await Pz(zz, uz) === Mz) throw new Error(`Move the binary schematic ${uz} outside the linked folder before syncing its placeholder`)
      }
      await Nz(zz, uz, bz)
    }
    async function Jz(zz, uz) {
      if (!rz(uz)) throw new Error(`Refusing to remove unsafe path: ${uz}`);
      try {
        const {
          dir: bz,
          fileName: Ez
        } = await oz(zz, uz, !1);
        await bz.removeEntry(Ez)
      } catch (bz) {
        if (bz instanceof DOMException && ("NotFoundError" === bz.name || "NotAllowedError" === bz.name)) return;
        throw bz
      }
    }
    async function Az(zz, uz) {
      if (!rz(uz)) return null;
      try {
        const bz = uz.split("/");
        let Ez = zz;
        for (const zz of bz) Ez = await Ez.getDirectoryHandle(zz);
        return Ez
      } catch (bz) {
        if (bz instanceof DOMException && ("NotFoundError" === bz.name || "NotAllowedError" === bz.name)) return null;
        throw bz
      }
    }
    async function Tz(zz, uz) {
      if ((0, Ez.t)(uz) || (0, nz.d)(uz)) {
        if ((0, nz.d)(uz)) {
          if (await Pz(zz, uz) === Mz) throw new Error(`Refusing to remove a binary schematic: ${uz}`)
        }
        await Jz(zz, uz)
      }
    }
    async function Lz(zz) {
      if (zz.size > 64) return Mz;
      const uz = await zz.text();
      return Array.from(uz).some((zz => {
        const uz = zz.charCodeAt(0);
        return uz < 9 || uz > 13 && uz < 32 || 65533 === uz
      })) ? Mz : uz
    }
    async function Pz(zz, uz) {
      try {
        const {
          dir: bz,
          fileName: Ez
        } = await oz(zz, uz, !1);
        return await Lz(await (await bz.getFileHandle(Ez)).getFile())
      } catch (bz) {
        if (bz instanceof DOMException && "NotFoundError" === bz.name) return null;
        throw bz
      }
    }
    async function Gz(zz, uz) {
      const bz = await sz(zz);
      for (const Ez of Object.keys(bz)) Ez in uz || (0, nz.d)(Ez) || await Tz(zz, Ez);
      for (const [iz, lz] of Object.entries(uz))((0, Ez.t)(iz) || (0, nz.d)(iz)) && await xz(zz, iz, lz)
    }

    function az(zz, uz) {
      var bz, Ez;
      let nz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const iz = null !== (bz = nz.debounceMs) && void 0 !== bz ? bz : 300,
        lz = null !== (Ez = nz.pollMs) && void 0 !== Ez ? Ez : 1e3;
      let Mz = !1,
        tz = null,
        Hz = null,
        Oz = null;
      const pz = () => {
          Mz || (tz && clearTimeout(tz), tz = setTimeout((() => {
            tz = null, dz()
          }), iz))
        },
        dz = async () => {
          if (!Mz) try {
            if (!await Rz(zz, "readwrite")) return;
            const bz = await sz(zz);
            Mz || uz(bz)
          } catch (bz) {
            console.error("[WorldCodeDirectorySync] Failed to read watched directory", bz)
          }
        };
      dz();
      const Fz = window.FileSystemObserver;
      if (Fz) try {
        Oz = new Fz((() => {
          pz()
        })), Oz.observe(zz, {
          recursive: !0
        })
      } catch (Zz) {
        console.warn("[WorldCodeDirectorySync] FileSystemObserver unavailable, falling back to polling", Zz), Oz = null
      }
      return Oz || (Hz = setInterval((() => {
        pz()
      }), lz)), () => {
        Mz = !0, tz && clearTimeout(tz), Hz && clearInterval(Hz), Oz && Oz.disconnect()
      }
    }
  },
  4590: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Kz,
      f: () => wz
    });
    var Ez = bz(1038),
      nz = bz.n(Ez),
      iz = bz(56),
      lz = bz(1181),
      Mz = bz(4598),
      tz = bz(1846),
      Hz = bz(2313),
      Oz = bz(4601),
      pz = bz(1089);
    const dz = new WeakMap;
    let Fz = 0;

    function Zz(zz) {
      let uz = dz.get(zz);
      return void 0 === uz && (uz = Fz++, dz.set(zz, uz)), uz
    }

    function Rz(zz) {
      let {
        piece: uz
      } = zz;
      return "space" === uz.kind ? (0, pz.jsx)(pz.Fragment, {
        children: uz.text
      }) : (0, pz.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${uz.delayMs}ms`
        },
        children: (0, pz.jsx)(Mz.b, {
          text: "icon" === uz.kind ? `[[${uz.icon}]]` : uz.text
        })
      })
    }

    function Kz(zz) {
      let {
        display: uz
      } = zz;
      const {
        selectedLanguage: bz
      } = (0, lz.F)(), Ez = (0, iz.useMemo)((() => (0, Oz.e)((0, Oz.g)(uz).plan.pieces)), [uz, bz.code]);
      return (0, pz.jsxs)("div", {
        className: nz()("Dialogue", {
          DialogueAnimateIn: !1 !== uz.animateIn
        }),
        children: [uz.speakerName && (0, pz.jsx)(tz.b, {
          text: uz.speakerName,
          className: "DialogueSpeaker"
        }), (0, pz.jsx)("p", {
          className: "DialogueLine",
          children: Ez.map(((zz, uz) => 1 === zz.length && "space" === zz[0].kind ? zz[0].text : (0, pz.jsx)("span", {
            className: "DialogueGlue",
            children: zz.map(((zz, uz) => (0, pz.jsx)(Rz, {
              piece: zz
            }, uz)))
          }, uz)))
        })]
      })
    }
    const wz = (0, iz.memo)((function() {
      const zz = (0, Hz.g)("dialogue");
      return (0, pz.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: zz && (0, pz.jsx)(Kz, {
          display: zz
        }, Zz(zz))
      })
    }))
  },
  36156: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Fz,
      d: () => Zz
    });
    var Ez = bz(56),
      nz = bz(2756),
      iz = bz(1417),
      lz = bz(1912),
      Mz = bz(36103),
      tz = bz(588),
      Hz = bz(1038),
      Oz = bz.n(Hz),
      pz = bz(1089);
    const dz = {},
      Fz = (0, Ez.memo)((function() {
        const zz = (0, nz.c)();
        return (0, iz.g)("damagedByOtherPlayer", (uz => {
          let {
            nE: bz,
            direction: Ez
          } = uz;
          const nz = bz || "nonDirectional";
          if (dz[nz]) {
            const uz = dz[nz];
            clearTimeout(uz.timeout), uz.direction = Ez, uz.timeout = setTimeout((() => {
              delete dz[nz], zz()
            }), 800)
          } else dz[nz] = {
            direction: Ez,
            KV: null,
            timeout: setTimeout((() => {
              delete dz[nz], zz()
            }), 800)
          };
          zz()
        })), (0, lz.d)("kill", (uz => {
          let {
            killer: bz,
            victim: Ez
          } = uz;
          const nz = Ez.id;
          bz.local && nz && nz in dz && (clearTimeout(dz[nz].timeout), delete dz[nz], zz())
        })), (0, Ez.useEffect)((() => {
          const zz = (0, Mz.g)("turnDamageIndicators", Zz);
          return () => {
            zz();
            for (const zz in dz) clearTimeout(dz[zz].timeout), delete dz[zz]
          }
        }), []), (0, pz.jsx)("div", {
          className: "DirectionalDamage",
          children: Object.entries(dz).map((zz => {
            let [uz, bz] = zz;
            const Ez = (0, tz.F)(bz.direction);
            return (0, pz.jsx)("div", {
              ref: zz => {
                dz[uz] && (dz[uz].KV = zz)
              },
              className: Oz()("DamageIndicator", {
                DamageIndicatorFullCircle: Ez
              })
            }, uz)
          }))
        })
      }));

    function Zz(zz) {
      for (const uz in dz) {
        const {
          direction: bz,
          KV: Ez
        } = dz[uz];
        if ((0, tz.F)(bz)) continue;
        const nz = bz - zz;
        Ez.style.rotate = `${nz}rad`
      }
    }
  },
  36029: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Kz
    });
    var Ez = bz(56),
      nz = bz(79),
      iz = bz(1181),
      lz = bz(1038),
      Mz = bz.n(lz),
      tz = bz(1673),
      Hz = bz(1047),
      Oz = bz(1266),
      pz = bz(1448),
      dz = bz(1613),
      Fz = bz(1441),
      Zz = bz(1089);
    const Rz = 14;

    function Kz(zz) {
      let {
        className: uz,
        triggerElementRef: bz,
        options: lz
      } = zz;
      const {
        t: Kz
      } = (0, iz.F)(), [wz, Xz] = (0, Ez.useState)(!1), [fz, sz] = (0, Ez.useState)({
        x: 0,
        y: 0
      }), rz = (0, Ez.useRef)(null);
      (0, Ez.useEffect)((() => {
        let zz = null;
        const uz = uz => {
            zz = {
              x: uz.clientX,
              y: uz.clientY
            }
          },
          Ez = uz => {
            if (null === zz || !(0, Fz.b)(zz, uz)) return;
            zz = null;
            const bz = Rz * (0, tz.getRemInPx)();
            sz({
              x: Math.min(uz.clientX, window.innerWidth - bz - 5),
              y: uz.clientY
            }), Xz((zz => !zz))
          },
          nz = zz => {
            var uz;
            null !== (uz = rz.current) && void 0 !== uz && uz.contains(zz.relatedTarget) || Xz(!1)
          },
          iz = bz.current;
        return iz.addEventListener("pointerdown", uz), iz.addEventListener("pointerup", Ez), iz.addEventListener("mouseleave", nz), () => {
          iz.removeEventListener("pointerdown", uz), iz.removeEventListener("pointerup", Ez), iz.removeEventListener("mouseleave", nz)
        }
      }), [bz]), (0, Ez.useEffect)((() => {
        if (wz) return (0, dz.e)("pointerdown", (zz => {
          !rz.current || rz.current.contains(zz.target) || bz.current.contains(zz.target) || Xz(!1)
        }))
      }), [wz, bz]), (0, Ez.useLayoutEffect)((() => {
        if (!wz || !rz.current) return;
        const zz = rz.current.getBoundingClientRect().height,
          uz = Math.max(5, window.innerHeight - zz - 5);
        fz.y > uz && sz({
          x: fz.x,
          y: uz
        })
      }), [wz, fz]), (0, Oz.u)("popup", rz, (() => {
        Xz(!1)
      }), wz);
      const oz = lz.filter((zz => !1 !== zz.show));
      return wz && 0 !== oz.length ? (0, nz.createPortal)((0, Zz.jsx)("div", {
        ref: rz,
        className: Mz()("FloatingActions", {
          [uz]: uz
        }),
        style: {
          width: `${Rz}rem`,
          top: fz.y,
          left: fz.x
        },
        children: oz.map((zz => {
          let {
            icon: uz,
            text: bz,
            onPointerDown: Ez,
            analyticsClick: nz
          } = zz;
          return (0, Zz.jsxs)("div", {
            className: "FloatingAction",
            "data-pad-focusable": !0,
            onPointerUp: zz => {
              void 0 !== nz && (0, pz.reportAnalyticsClick)(nz), Ez(zz), Xz(!1), zz.stopPropagation()
            },
            children: [(0, Zz.jsx)(Hz.c, {
              name: uz
            }), (0, Zz.jsx)("div", {
              children: Kz(bz)
            })]
          }, bz)
        }))
      }), function() {
        var zz;
        return null !== (zz = document.querySelector(".WholeAppWrapperInner")) && void 0 !== zz ? zz : document.body
      }()) : null
    }
  },
  36171: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Xl
    });
    var Ez = bz(36066),
      nz = bz(56),
      iz = bz(1998),
      lz = bz(4292),
      Mz = bz(4298),
      tz = bz(2313),
      Hz = bz(1871),
      Oz = bz(1089);

    function pz(zz) {
      let {
        className: uz,
        style: bz,
        vw: Ez,
        maxPx: nz,
        children: iz
      } = zz;
      console.assert("number" === typeof Ez && "number" === typeof nz, "vw and maxPx passed to Text must be numbers");
      const lz = window.innerWidth * (Ez / 100) > nz ? `${nz}px` : `${Ez}vw`;
      return (0, Oz.jsx)("div", {
        className: uz,
        style: {
          ...bz,
          fontSize: lz
        },
        children: iz
      })
    }
    var dz = bz(36179),
      Fz = bz(1419),
      Zz = bz(22),
      Rz = bz(1892),
      Kz = bz(1047);

    function wz(zz) {
      let {
        tasks: uz,
        lastDisplayedTasks: bz
      } = zz;
      return (0, Oz.jsx)(Oz.Fragment, {
        children: Object.keys(uz).map((zz => (0, Oz.jsx)(Xz, {
          task: uz[zz],
          lastDisplayedAs: bz[zz]
        }, uz[zz].text)))
      })
    }

    function Xz(zz) {
      let {
        task: uz,
        lastDisplayedAs: bz
      } = zz;
      const [Ez, iz] = (0, nz.useState)(null !== bz && void 0 !== bz && bz.progress ? bz.progress / uz.goal : 0), [lz, Mz] = (0, nz.useState)(!1), [tz, Hz] = (0, nz.useState)(uz.claimed || !1);
      return (0, nz.useEffect)((() => {
        iz(uz.progress / uz.goal)
      }), [uz.progress, uz.goal]), tz ? null : (0, Oz.jsxs)("div", {
        className: "Task",
        children: [(0, Oz.jsx)("div", {
          className: "TaskDescDiv",
          children: (0, Oz.jsx)(pz, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: uz.text
          })
        }), uz.progress < uz.goal ? (0, Oz.jsxs)("div", {
          className: "TaskProgress",
          children: [0 !== Ez ? (0, Oz.jsx)("div", {
            className: "TaskProgressForeground",
            style: {
              width: 100 * Ez + "%"
            }
          }) : null, (0, Oz.jsx)("div", {
            className: "TaskProgressText",
            children: `${uz.progress}/${uz.goal}`
          })]
        }) : (0, Oz.jsx)(Fz.q, {
          className: "ClaimRewardButton",
          onClick: () => {
            Mz(!0)
          },
          children: (0, Oz.jsx)(pz, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: "Claim Reward"
          })
        }), lz ? (0, Oz.jsx)(fz, {
          task: uz,
          close: () => {
            uz.claimed = !0, Hz(!0), Mz(!1)
          }
        }) : null]
      })
    }

    function fz(zz) {
      let {
        task: uz,
        close: bz
      } = zz;
      const [Ez, iz] = (0, nz.useState)({}), [lz, Mz] = (0, nz.useState)("closed");
      (0, nz.useEffect)((() => {
        let zz;
        return "animStart" === lz && (zz = setTimeout((() => {
          Mz("animEnd")
        }), 700)), () => {
          clearTimeout(zz)
        }
      }), [lz]), (0, dz.c)((() => {
        Hz.gameBridge.send("completeTask", uz.text)
      }));
      const pz = (0, tz.g)("currencyAmounts");
      return (0, Oz.jsxs)("div", {
        className: "RewardBackground",
        onClick: () => {
          if ("animEnd" === lz)
            if (0 === uz.rewards.length) bz(), Hz.gameBridge.send("completeTask", uz.text);
            else {
              const zz = {
                ...Rz.b.get("currencyAmounts")
              };
              for (const uz in Ez) zz[uz] = {
                ...zz[uz],
                amount: zz[uz].amount + Ez[uz]
              };
              Rz.b.apply({
                currencyAmounts: zz
              }), Mz("closed")
            }
          else "closed" === lz && (iz(uz.rewards.pop()), Mz("animStart"))
        },
        children: [(0, Oz.jsx)("img", {
          className: "Chest",
          alt: "closed" !== lz ? "open chest" : "closed chest",
          src: `/textures/miscImages/Treasure Chest ${"closed"!==lz?"open":"closed"}.png`
        }), (0, Oz.jsx)("div", {
          className: "Rewards",
          children: "closed" !== lz ? Object.keys(Ez).map((zz => {
            const uz = null === pz || void 0 === pz ? void 0 : pz[zz];
            return !uz || uz.hidden ? null : (0, Oz.jsxs)("div", {
              className: "Reward",
              children: [(0, Oz.jsx)(Kz.c, {
                name: uz.icon,
                className: "3x UiCurrencyIcon RewardIcon",
                style: {
                  color: uz.iconColour
                }
              }), (0, Oz.jsx)("div", {
                className: "RewardAmountText",
                children: "animStart" === lz ? 0 : Ez[zz]
              })]
            }, zz)
          })) : null
        }), "animStart" === lz ? (0, Oz.jsx)(sz, {}) : null, (0, Oz.jsx)("div", {
          className: "ChestsLeft",
          children: uz.rewards.length
        })]
      })
    }

    function sz() {
      const [zz, uz] = (0, nz.useState)(0);
      (0, nz.useEffect)((() => {
        uz(1)
      }), []);
      return (0, Oz.jsx)(Oz.Fragment, {
        children: Array.from({
          length: 40
        }).map(((uz, bz) => (0, Oz.jsx)(Kz.c, {
          name: "star",
          className: "3x UiCurrencyIcon OpenStar",
          style: {
            bottom: 50 * zz * Math.cos(bz / 40 * (2 * Math.PI)) + 50 + "vh",
            left: 50 * zz * Math.sin(bz / 40 * (2 * Math.PI)) + "vh",
            opacity: 0 === zz ? 1 : 0
          }
        }, bz)))
      })
    }
    Zz.k.subscribe("requiredLibrariesLoaded", (() => {
      setTimeout((() => {
        const zz = new Image,
          uz = new Image;
        zz.src = "/textures/miscImages/Treasure Chest open.png", uz.src = "/textures/miscImages/Treasure Chest closed.png"
      }), 1e4)
    }));
    var rz = bz(2882),
      oz = bz(1114),
      Nz = bz(1846),
      vz = bz(1417),
      xz = bz(328),
      Jz = bz(1912),
      Az = bz(1305);

    function Tz(zz) {
      var uz, bz;
      let {
        byId: Ez,
        localId: nz
      } = zz;
      return null === nz ? null : null !== (uz = null === (bz = Ez[nz]) || void 0 === bz ? void 0 : bz.name) && void 0 !== uz ? uz : null
    }

    function Lz(zz) {
      let {
        lbStats: uz,
        storedState: bz = {}
      } = zz;
      const {
        userContext: Ez
      } = (0, oz.c)(), iz = (0, Jz.e)("players", Tz), [lz, Mz] = (0, nz.useState)(bz.selectedCat || (null === uz || void 0 === uz ? void 0 : uz[0]) || null), [tz, pz] = (0, nz.useState)(bz.selectedTimeframe || "Today"), [dz, Fz] = (0, nz.useState)(null);
      (0, nz.useEffect)((() => {
        null === lz && null !== uz && uz.length > 0 && Mz(uz[0])
      }), [uz, lz]);
      const [Zz, Rz] = (0, nz.useState)(bz.seeingTop || !1), [Kz, wz] = (0, nz.useState)(!1), Xz = (0, nz.useCallback)((() => {
        null !== lz && null !== tz && (Hz.gameBridge.send("requestLeaderboard", {
          category: lz.value,
          timeframe: tz,
          seeTop: Zz
        }), sz(!0), az && Vz(null))
      }), [lz, tz, bz, Zz]);
      (0, nz.useEffect)((() => {
        Xz(), bz.selectedCat = lz, bz.selectedTimeframe = tz, bz.seeingTop = Zz
      }), [lz, tz, bz, Zz, Xz]), (0, nz.useEffect)((() => {
        if ((null === dz || void 0 === dz ? void 0 : dz.length) > 0)
          if (Zz) Zz && wz(null === Lz(dz));
          else {
            for (const zz of dz)
              if (1 === zz.place) return void wz(!1);
            wz(!0)
          }
      }), [dz, Zz]), (0, vz.g)("leaderboardResponse", (zz => {
        let {
          category: bz,
          timeframe: Ez,
          data: nz
        } = zz;
        for (let iz = 0; iz < uz; iz++)
          if (uz[iz].value === bz) {
            Mz(uz[iz]);
            break
          } pz(Ez), Fz(nz), sz(!1)
      }));
      const [fz, sz] = (0, nz.useState)(!0);

      function Lz(zz) {
        const uz = Tz(Hz.gameBridge.latest("players"));
        for (let bz = 0; bz < zz.length; bz++)
          if (zz[bz].name === uz) return zz[bz].place;
        return null
      }
      const [Pz, Gz] = (0, nz.useState)(!1), [az, Vz] = (0, nz.useState)(null);
      (0, nz.useEffect)((() => {
        if (dz && !Pz) {
          const zz = Lz(dz);
          zz < (bz.lastSeenPlayerPlace || 0) && Vz(bz.lastSeenPlayerPlace - zz), Gz(!0)
        }
      }), [dz, bz, Pz]), (0, nz.useEffect)((() => () => {
        dz && (bz.lastSeenPlayerPlace = Lz(dz))
      }), [dz, bz]);
      const mz = (0, nz.useRef)(null),
        [qz, hz] = (0, nz.useState)(void 0);
      return (0, nz.useEffect)((() => {
        var zz, uz;
        qz !== (null === (zz = mz.current) || void 0 === zz ? void 0 : zz.offsetHeight) && hz(null === (uz = mz.current) || void 0 === uz ? void 0 : uz.offsetHeight)
      })), Ez.isLoggedIn() ? (0, Oz.jsxs)(Oz.Fragment, {
        children: [(0, Oz.jsxs)("div", {
          className: "LeaderboardSelectors",
          children: [(0, Oz.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, Oz.jsx)(rz.d, {
              options: uz.map((zz => ({
                label: zz.label,
                value: zz.value
              }))),
              value: lz,
              onChange: zz => {
                Mz(zz)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), (0, Oz.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, Oz.jsx)(rz.d, {
              options: xz.Uc.map((zz => ({
                value: zz,
                label: zz,
                className: "LBDropdownMenuItem"
              }))),
              value: tz,
              onChange: zz => {
                pz(zz.label)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), Kz ? (0, Oz.jsx)("div", {
            className: "SeeTopText",
            onClick: () => {
              Rz(!Zz)
            },
            children: Zz ? "See Yourself" : "See Top"
          }) : null]
        }), (0, Oz.jsx)("div", {
          className: "LBTableWrapper",
          children: fz ? (0, Oz.jsx)("div", {
            className: "LoaderContainer",
            children: (0, Oz.jsx)(Az.c, {})
          }) : null === az ? (0, Oz.jsx)(Oz.Fragment, {
            children: (0, Oz.jsxs)("table", {
              className: "LBTable",
              children: [(0, Oz.jsx)("thead", {
                className: "LBTableTHead",
                ref: mz,
                children: (0, Oz.jsxs)("tr", {
                  children: [(0, Oz.jsx)("th", {
                    className: "LBTablePlaceTH LBTableTH",
                    children: "PLACE"
                  }), (0, Oz.jsx)("th", {
                    className: "LBTablePlayerTH LBTableTH",
                    children: "PLAYER"
                  }), (0, Oz.jsx)("th", {
                    className: "LBTableValueTH LBTableTH",
                    children: lz.label.toUpperCase()
                  })]
                })
              }), (0, Oz.jsx)("tbody", {
                children: dz.map((zz => (0, Oz.jsxs)("tr", {
                  className: "LBTableTR " + (zz.name === iz ? "LBTableTRYou" : ""),
                  children: [(0, Oz.jsx)("td", {
                    className: "LBTableTD",
                    children: `#${zz.place}`
                  }), (0, Oz.jsx)("td", {
                    className: "LBTableTD",
                    children: (0, Oz.jsx)(Nz.b, {
                      text: [{
                        entityName: zz.name
                      }]
                    })
                  }), (0, Oz.jsx)("td", {
                    className: "LBTableTD",
                    children: zz.stat
                  })]
                }, zz.name)))
              })]
            })
          }) : (0, Oz.jsx)("div", {
            className: "LBIncreaseWrapper",
            onClick: () => {
              Vz(null)
            },
            children: (0, Oz.jsxs)("div", {
              className: "LBIncreaseDiv",
              children: [(0, Oz.jsx)("div", {
                className: "TriangleUp"
              }), (0, Oz.jsx)("div", {
                className: "LBIncreaseText",
                children: `${az} Place${az>1?"s":""}`
              })]
            })
          })
        })]
      }) : (0, Oz.jsxs)("div", {
        className: "LBLoginDiv",
        children: [(0, Oz.jsx)("div", {
          className: "LBLoginInfo",
          children: "Login to see the leaderboard"
        }), (0, Oz.jsx)("div", {
          className: "LBLoginInfo",
          children: "You can login from the top left homescreen"
        })]
      })
    }
    var Pz = bz(1108),
      Gz = bz(96),
      az = bz(33),
      Vz = bz(3169);
    const mz = (0, nz.memo)((function(zz) {
      let {
        show: uz,
        onClose: bz
      } = zz;
      (0, Pz.b)();
      const Ez = (0, tz.g)("_tasks"),
        iz = (0, tz.g)("_availableLeaderboards"),
        [Hz, pz] = (0, nz.useState)({});
      Ez && Object.keys(Ez).length > 0 && 0 === Object.keys(Hz).length && pz(Ez);
      const [dz] = (0, nz.useState)({
        tasks: {},
        leaderboard: {}
      }), Fz = {
        tasks: {
          Title: "Tasks",
          getIsDefined: () => !!Ez && Object.keys(Ez).length > 0,
          content: (0, Oz.jsx)(wz, {
            tasks: Ez,
            lastDisplayedTasks: Hz
          })
        },
        leaderboard: {
          Title: "Leaderboard",
          getIsDefined: () => (null === iz || void 0 === iz ? void 0 : iz.length) > 0,
          content: (0, Oz.jsx)(Lz, {
            lbStats: iz,
            storedState: dz.leaderboard
          })
        }
      };

      function Zz() {
        for (const zz in Fz)
          if (Fz[zz].getIsDefined()) return zz;
        return null
      }
      const [Rz, Kz] = (0, nz.useState)(Zz());

      function Xz() {
        pz({
          ...Ez
        }), bz()
      }(0, nz.useEffect)((() => {
        Rz || Kz(Zz())
      }), [Zz()]), (0, Mz.d)(!0, Rz && uz), (0, nz.useEffect)((() => {
        uz && !Rz && (console.log("CLOSE"), Xz())
      }), [uz, Rz]);
      const [fz, sz] = (0, nz.useState)(!1);
      return (0, nz.useEffect)((() => {
        uz && Rz && !fz && sz(!0)
      }), [uz, fz, Rz]), (0, nz.useEffect)((() => {
        !fz && Ez && "tasks" !== Rz && Kz("tasks")
      }), [fz, Ez, Rz]), (0, Oz.jsx)(Oz.Fragment, {
        children: Rz ? (0, Oz.jsx)(Vz.e, {
          className: "RetentionFeaturesWrapper",
          show: uz,
          children: (0, Oz.jsxs)(lz.d, {
            close: Xz,
            escDoesExit: !1,
            closeClassnameList: ["VerticalMenuScreenDiv"],
            togglePointerLock: !1,
            globallyUniqueKey: "RetentionFeaturesComponent",
            children: [(0, Oz.jsxs)("div", {
              className: "VerticalMenuScreenDiv",
              children: [(0, Oz.jsx)(hz, {}), (0, Oz.jsxs)("div", {
                className: "MenuDiv",
                children: [(0, Oz.jsx)(qz, {
                  setCategory: Kz,
                  menuCategories: Fz,
                  selectedCat: Rz
                }), (0, Oz.jsx)("div", {
                  className: "MenuCategoryContainer",
                  children: Fz[Rz].content
                })]
              })]
            }), (0, Oz.jsx)("div", {
              className: "BottomScreenMenuWrapper",
              children: Gz.featureFlags.useDiscord && (0, Oz.jsx)("div", {
                className: "DiscordMenuDivDiv",
                children: (0, Oz.jsx)("div", {
                  className: "DiscordMenuDiv",
                  children: (0, Oz.jsx)(Uz, {
                    tasks: Ez
                  })
                })
              })
            })]
          })
        }) : null
      })
    }));

    function qz(zz) {
      let {
        selectedCat: uz,
        setCategory: bz,
        menuCategories: Ez
      } = zz;
      return (0, Oz.jsx)("div", {
        className: "MenuHeader",
        children: Object.keys(Ez).map((zz => Ez[zz].getIsDefined() ? (0, Oz.jsx)("div", {
          className: "MenuHeaderCategory " + (zz === uz ? "SelectedHeaderCat" : "UnselectedHeaderCat"),
          onClick: () => {
            bz(zz)
          },
          children: Ez[zz].Title
        }, zz) : null))
      })
    }

    function hz() {
      const zz = (0, tz.g)("currencyAmounts");
      return (0, Oz.jsx)("div", {
        className: "TopScreenCurrencies",
        children: Object.keys(null !== zz && void 0 !== zz ? zz : {}).map((uz => {
          const bz = zz[uz];
          return bz.hidden ? null : (0, Oz.jsxs)("div", {
            className: "TopScreenCurrencyDiv",
            children: [(0, Oz.jsx)(Kz.c, {
              name: bz.icon,
              className: "3x UiCurrencyIcon",
              style: {
                color: bz.iconColour
              }
            }), (0, Oz.jsx)("div", {
              className: "UiCurrencyAmount",
              children: bz.amount
            })]
          }, uz)
        }))
      })
    }

    function Uz(zz) {
      let {
        tasks: uz
      } = zz;
      return (0, Oz.jsxs)("a", {
        className: "MenuDiscordButtonWrapper",
        href: "https://discord.gg/playbloxd",
        target: "_blank",
        rel: "noreferrer",
        children: [(0, Oz.jsx)(Kz.c, {
          name: "discord",
          kit: "brands",
          className: "DiscordButton",
          onClick: () => {
            az.g.setItem("DiscordPressed", !0), Hz.gameBridge.send("setServerCookie", {
              key: "joinDiscord",
              value: "true"
            }), "joinDiscord" in uz && Zz.k.sK("clientTaskProgress", {
              taskId: "joinDiscord",
              progress: 1
            })
          }
        }), (0, Oz.jsx)(iz.b, {})]
      })
    }
    var cz = bz(20),
      gz = bz(1595),
      Sz = bz(36011),
      yz = bz(8892),
      Dz = bz(4385),
      Qz = bz(158),
      Wz = bz(1202),
      ez = bz(1332),
      jz = bz(2510),
      Iz = bz(1181),
      Bz = bz(1597),
      Cz = bz(2276),
      Yz = bz(2264),
      kz = bz(1802),
      zu = bz(1968),
      uu = bz(1249),
      bu = bz(1448),
      Eu = bz(4335);

    function nu(zz) {
      const uz = {
        lobbyName: zz,
        answer: null,
        response: Eu.e.getSocialSettings(zz)
      };
      return uz.response.then((zz => {
        uz.answer = zz
      })), uz
    }
    const iu = new Map;

    function lu(zz) {
      const [uz] = (0, nz.useState)((() => function(zz) {
        var uz;
        const bz = null !== (uz = iu.get(zz)) && void 0 !== uz ? uz : null;
        return null !== bz && void 0 !== bz && bz.answer && "error" in bz.answer ? null : bz
      }(zz))), [bz, Ez] = (0, nz.useState)((() => null !== uz && void 0 !== uz && uz.answer && "settings" in uz.answer ? uz.answer.settings : null)), [iz, lz] = (0, nz.useState)(!0), [Mz, tz] = (0, nz.useState)(null !== bz), Hz = (0, nz.useRef)(bz);
      Hz.current = bz;
      const Oz = (0, nz.useRef)(0),
        pz = (0, nz.useRef)(0),
        dz = (0, nz.useRef)(!1),
        Fz = (0, nz.useRef)(!0),
        Zz = (0, nz.useCallback)((async uz => {
          const bz = ++Oz.current,
            nz = await (null !== uz && void 0 !== uz ? uz : Eu.e.getSocialSettings(zz));
          Fz.current && bz === Oz.current && (tz(!0), lz(!1), "error" in nz || Ez(nz.settings))
        }), [zz]),
        Rz = (0, nz.useCallback)((() => {
          lz(!0), Zz()
        }), [Zz]);
      (0, nz.useEffect)((() => (Fz.current = !0, iu.delete(zz), lz(!0), Zz(null === uz || void 0 === uz ? void 0 : uz.response), () => {
        Fz.current = !1
      })), [Zz, zz, uz]);
      const Kz = zz => {
        Oz.current++, lz(!1), Hz.current = zz, Ez(zz)
      };
      return {
        settings: bz,
        loading: iz,
        answered: Mz,
        retry: Rz,
        change: async function(uz, bz) {
          let {
            quiet: Ez = !1
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const nz = Hz.current;
          if (null === nz) return !1;
          Kz(bz(nz)), pz.current > 0 && (dz.current = !0), pz.current++;
          const iz = await Eu.e.setSocialSettings(zz, uz);
          pz.current--;
          const lz = !("error" in iz);
          if (!Fz.current) return lz;
          if (Ez);
          else if ("error" in iz) kz.f.showMessage({
            translationKey: iz.error
          });
          else
            for (const zz of iz.notFound) kz.f.showMessage({
              translationKey: "worldSocial:notFound",
              params: {
                playerName: zz
              }
            });
          if (pz.current > 0) return lz;
          const Mz = dz.current;
          return dz.current = !1, !Mz && "settings" in iz ? Kz(iz.settings) : (Mz || Kz(nz), Zz()), lz
        }
      }
    }

    function Mu(zz, uz) {
      const bz = uz.toLowerCase();
      for (const Ez of zz)
        if (Ez.toLowerCase() === bz) return !0;
      return !1
    }

    function tu(zz) {
      if (null === zz) return !0;
      const {
        visibility: uz
      } = zz;
      return "public" === uz || "unlisted" === uz || "whitelist" === uz && zz.canManage
    }

    function Hu(zz, uz, bz) {
      if (bz) {
        const bz = uz.filter((uz => !Mu(zz.whitelist, uz)));
        return {
          ...zz,
          whitelist: [...zz.whitelist, ...bz]
        }
      }
      return {
        ...zz,
        whitelist: zz.whitelist.filter((zz => !Mu(uz, zz)))
      }
    }
    var Ou = bz(2523);

    function pu(zz) {
      let {
        worldCode: uz,
        message: bz
      } = zz;
      const {
        t: Ez
      } = (0, Iz.F)(), {
        isTouchScreen: iz
      } = (0, cz.m)(["isTouchScreen"]), lz = Gz.featureFlags.canUseInviteLinks, Mz = (0, yz.g)(lz && null === bz), [tz, Hz] = (0, Ou.e)(), pz = (0, nz.useRef)(null);
      if (null !== bz) return (0, Oz.jsxs)("div", {
        className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
        children: [(0, Oz.jsx)(Kz.c, {
          name: "lock"
        }), (0, Oz.jsx)("span", {
          children: bz
        })]
      });
      const dz = lz ? Mz : uz,
        Zz = iz && lz && (0, Ou.c)();
      return (0, Oz.jsxs)("div", {
        className: "WorldSocialLinkRow",
        children: [!lz && (0, Oz.jsx)("span", {
          className: "WorldSocialCodeLabel",
          children: Ez("worldSocial:worldCode")
        }), (0, Oz.jsx)("input", {
          ref: pz,
          className: "WorldSocialLink",
          readOnly: !0,
          value: null !== dz && void 0 !== dz ? dz : "",
          "aria-label": Ez(lz ? "worldSocial:worldLink" : "worldSocial:worldCode"),
          onFocus: zz => {
            zz.currentTarget.select()
          }
        }), (0, Oz.jsxs)(Fz.f, {
          className: "WorldSocialCopy",
          disabled: null === dz,
          onClick: () => {
            null !== dz && (0, Ou.d)(dz, {
              useShareSheet: Zz,
              onOutcome: zz => {
                if ((0, bu.reportAnalyticsClick)({
                    id: "world_social.copy_link",
                    value: "copied" !== zz || lz ? zz : "code"
                  }), "copied" === zz) Hz();
                else if ("failed" === zz) {
                  var uz;
                  null === (uz = pz.current) || void 0 === uz || uz.focus(), kz.f.showMessage({
                    translationKey: "partyBar:copyFailed"
                  })
                }
              }
            })
          },
          children: [(0, Oz.jsx)(Kz.c, {
            name: tz ? "check" : Zz ? "up-from-bracket" : "copy"
          }), " ", Ez(tz ? "general:copied" : Zz ? "worldSocial:share" : "general:copy")]
        })]
      })
    }
    var du = bz(1038),
      Fu = bz.n(du);
    const Zu = {
        unlisted: "link",
        public: "globe",
        whitelist: "user-check",
        private: "lock"
      },
      Ru = ["unlisted", "public", "whitelist", "private"];

    function Ku(zz) {
      let {
        visibility: uz,
        onPick: bz
      } = zz;
      const {
        t: Ez
      } = (0, Iz.F)(), iz = (0, nz.useRef)([]);
      return (0, Oz.jsx)("div", {
        className: "WorldSocialTiles",
        role: "group",
        "aria-label": Ez("worldSocial:whoCanJoin"),
        children: Ru.map(((zz, nz) => {
          const lz = zz === uz;
          return (0, Oz.jsxs)("button", {
            ref: zz => {
              iz.current[nz] = zz
            },
            type: "button",
            className: Fu()("WorldSocialTile", {
              WorldSocialTileSelected: lz
            }),
            "aria-pressed": lz,
            tabIndex: lz ? 0 : -1,
            onKeyDown: zz => {
              ((zz, uz) => {
                const bz = "ArrowRight" === zz.key || "ArrowDown" === zz.key ? 1 : "ArrowLeft" === zz.key || "ArrowUp" === zz.key ? -1 : 0;
                var Ez;
                0 !== bz && (zz.preventDefault(), null === (Ez = iz.current[(uz + bz + Ru.length) % Ru.length]) || void 0 === Ez || Ez.focus())
              })(zz, nz)
            },
            onClick: () => {
              bz(zz)
            },
            children: [(0, Oz.jsx)("span", {
              className: "WorldSocialTileIcon",
              children: (0, Oz.jsx)(Kz.c, {
                name: Zu[zz]
              })
            }), (0, Oz.jsxs)("span", {
              className: "WorldSocialTileText",
              children: [(0, Oz.jsx)("span", {
                className: "WorldSocialTileTitle",
                children: Ez(`worldSocial:${zz}`)
              }), (0, Oz.jsx)("span", {
                className: "WorldSocialTileDescription",
                children: Ez(`worldSocial:${zz}Description`)
              })]
            })]
          }, zz)
        }))
      })
    }
    var wu = bz(577),
      Xu = bz(2503),
      fu = bz(2455),
      su = bz(4144);

    function ru(zz, uz) {
      var bz;
      return {
        isError: !1,
        name: zz,
        ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
        cosmetics: null !== uz && void 0 !== uz ? uz : {},
        nameColour: null !== (bz = null === uz || void 0 === uz ? void 0 : uz.nameColour) && void 0 !== bz ? bz : wu.b,
        location: {
          status: "offline"
        }
      }
    }

    function ou(zz) {
      let {
        player: uz,
        isFriend: bz = !1,
        status: Ez,
        showLocation: nz = void 0 === Ez,
        sd: iz,
        onSendFriendRequest: lz,
        actions: Mz,
        zIndex: tz
      } = zz;
      const {
        t: Hz
      } = (0, Iz.F)();
      let pz, dz = Ez;
      return null !== iz && void 0 !== iz && iz.on && (dz = (0, Oz.jsxs)(Oz.Fragment, {
        children: [null !== Ez && void 0 !== Ez ? Ez : (0, Oz.jsx)(fu.e, {
          socialPreview: uz
        }), (0, Oz.jsxs)("span", {
          className: "WorldSocialCanJoin",
          children: [" \xb7 ", Hz("worldSocial:canJoin")]
        })]
      })), (Mz || iz) && (pz = (0, Oz.jsxs)(Oz.Fragment, {
        children: [Mz, iz && (0, Oz.jsx)("label", {
          className: "WorldSocialTick",
          children: (0, Oz.jsx)(su.b, {
            checked: iz.on,
            disabled: !1,
            ariaLabel: Hz("worldSocial:letJoin", {
              playerName: uz.name
            }),
            onChange: zz => {
              iz.onChange(zz.target.checked)
            }
          })
        })]
      })), (0, Oz.jsx)(Xu.d, {
        playerSocialPreview: uz,
        isFriend: bz,
        hideFriendBadge: !0,
        onFriendRemoved: bz ? zz => {
          Bz.b.removeFriendFromState(zz)
        } : void 0,
        status: dz,
        showLocation: nz,
        onSendFriendRequest: lz,
        opensProfileCard: !1,
        zIndex: tz,
        children: pz
      })
    }

    function Nu(zz) {
      let {
        row: uz,
        sd: bz,
        canInvite: Ez,
        invited: nz,
        onInvite: iz,
        zIndex: lz
      } = zz;
      const {
        t: Mz
      } = (0, Iz.F)(), tz = "online" === uz.place ? Fz.f : Fz.j;
      return (0, Oz.jsx)(ou, {
        player: uz.friend,
        isFriend: !0,
        status: "here" === uz.place ? Mz("worldSocial:inThisWorld") : void 0,
        showLocation: !0,
        sd: bz,
        zIndex: lz,
        actions: Ez && (0, Oz.jsx)(tz, {
          className: "WorldSocialInvite SmallTextLight",
          disabled: nz,
          onClick: iz,
          ariaLabel: `${Mz("worldSocial:invite")} ${uz.friend.name}`,
          children: Mz(nz ? "worldSocial:invited" : "worldSocial:invite")
        })
      })
    }
    var vu = bz(2558);

    function xu(zz) {
      let {
        playersHere: uz,
        exclude: bz,
        Qr: Ez
      } = zz;
      const {
        t: iz
      } = (0, Iz.F)(), lz = (0, vu.j)(vu.f), [Mz, tz] = (0, nz.useState)([]), Hz = [], pz = (zz, uz) => {
        const Ez = [...bz, ...Hz.map((zz => zz.player.name))];
        Hz.length < 3 && !Mu(Ez, zz.name) && Hz.push({
          player: zz,
          status: uz
        })
      };
      for (const nz of uz) pz(ru(nz.name, nz.cosmetics, nz.ranks), iz("worldSocial:inThisWorld"));
      if ("loaded" === lz.state.status)
        for (const nz of lz.state.recentPlayers) nz.preview.name && !nz.preview.isError && pz({
          ...nz.preview,
          location: {
            status: "offline"
          }
        }, iz("worldSocial:playedWithYou"));
      const dz = zz => {
        tz((uz => [...uz, zz])), Ez(zz).finally((() => {
          tz((uz => uz.filter((uz => uz !== zz))))
        }))
      };
      return (0, Oz.jsx)(Oz.Fragment, {
        children: Hz.map(((zz, uz) => {
          let {
            player: bz,
            status: Ez
          } = zz;
          return (0, Oz.jsx)(ou, {
            zIndex: Hz.length - uz,
            player: bz,
            status: Ez,
            onSendFriendRequest: () => {
              dz(bz.name)
            },
            actions: (0, Oz.jsx)(ez.f, {
              tooltipInner: (0, Oz.jsx)(Oz.Fragment, {
                children: iz("recentPlayers:addFriend")
              }),
              delayShow: 0,
              hoverOnly: !0,
              children: (0, Oz.jsx)(Fz.f, {
                className: "FriendRequestButton",
                disabled: Mz.includes(bz.name),
                ariaLabel: `${iz("recentPlayers:addFriend")} ${bz.name}`,
                onClick: () => {
                  dz(bz.name)
                },
                children: (0, Oz.jsx)(Kz.c, {
                  name: "user-plus"
                })
              })
            })
          }, `suggestion:${bz.name}`)
        }))
      })
    }
    var Ju = bz(1628);

    function Au(zz) {
      let {
        Qr: uz
      } = zz;
      const {
        t: bz
      } = (0, Iz.F)(), Ez = (0, nz.useRef)(null), [iz, lz] = (0, nz.useState)(""), [Mz, tz] = (0, nz.useState)(!1), Hz = () => {
        const zz = iz.trim();
        "" === zz || Mz || (tz(!0), uz(zz).then((zz => {
          zz && Ez.current && (Ez.current.value = "", lz(""))
        })).finally((() => {
          tz(!1)
        })))
      };
      return (0, Oz.jsxs)("div", {
        className: "WorldSocialAddFriend",
        onKeyDown: zz => {
          zz.target === Ez.current && "Escape" !== zz.key && zz.stopPropagation()
        },
        children: [(0, Oz.jsx)(Ju.d, {
          className: "WorldSocialAddFriendInput",
          domRef: Ez,
          maxLength: 32,
          placeholderText: bz("worldSocial:addFriendPlaceholder"),
          ariaLabel: bz("worldSocial:addFriendPlaceholder"),
          stopPropagation: !1,
          onValueChange: zz => {
            lz(zz)
          },
          onEnter: Hz
        }), (0, Oz.jsxs)(Fz.f, {
          className: "WorldSocialAddFriendButton SmallTextLight",
          disabled: Mz || "" === iz.trim(),
          onClick: Hz,
          children: [(0, Oz.jsx)(Kz.c, {
            name: "user-plus"
          }), " ", bz("socialBar:sendRequest")]
        })]
      })
    }
    const Tu = new Map;

    function Lu(zz) {
      const uz = Tu.get(zz);
      if (!uz) return [];
      const bz = Date.now();
      for (const [Ez, nz] of uz) bz - nz >= Qz.l && uz.delete(Ez);
      return [...uz.keys()]
    }
    var Pu = bz(1212),
      Gu = bz(1468),
      au = bz(4380),
      Vu = bz(301),
      mu = bz(4362);
    const qu = ["auto", "auto_existing"];

    function hu(zz) {
      return qu.includes(zz)
    }

    function Uu(zz, uz) {
      const bz = (0, Pu.yb)(zz);
      return null !== uz && (0, Pu.yb)(uz) === bz || (0, mu.e)().some((zz => (0, Pu.yb)(zz.name) === bz))
    }
    const cu = new Set;

    function gu(zz) {
      return `worldSocialSeen:${zz}`
    }

    function Su(zz) {
      return !zz || cu.has(zz) || !0 === az.g.getItem(gu(zz))
    }

    function yu(zz) {
      zz && !cu.has(zz) && (cu.add(zz), az.g.setItem(gu(zz), !0))
    }

    function Du(zz) {
      let {
        show: uz,
        onClose: bz,
        opener: Ez
      } = zz;
      const {
        lobbyName: iz,
        shownLobbyName: Mz
      } = (0, Jz.h)("connectedGame");
      return (0, nz.useEffect)((() => {
        uz && (0, bu.reportAnalyticsClick)({
          id: "world_social.open",
          value: Ez
        })
      }), [uz]), (0, Oz.jsx)(lz.d, {
        show: uz && null !== iz,
        close: bz,
        togglePointerLock: !1,
        className: "WorldSocialBackgroundScreen",
        globallyUniqueKey: "WorldSocialPopup",
        doGameplayStartStopOnShow: !0,
        ignorePressesAsShown: "icon" !== Ez,
        children: uz && null !== iz && (0, Oz.jsx)(Qu, {
          lobbyName: iz,
          worldCode: null !== Mz && void 0 !== Mz ? Mz : iz,
          onClose: bz
        }, iz)
      })
    }

    function Qu(zz) {
      var uz;
      let {
        lobbyName: bz,
        worldCode: Ez,
        onClose: iz
      } = zz;
      const {
        t: lz
      } = (0, Iz.F)(), Mz = (0, nz.useRef)(null), {
        settings: tz,
        loading: Hz,
        answered: pz,
        change: dz,
        retry: Zz
      } = lu(bz), Rz = (0, Bz.l)(), wz = (0, Jz.h)("players"), Xz = (0, Jz.h)("hiddenPlayerNames"), [fz, sz] = (0, nz.useState)([]), [rz, Nz] = (0, nz.useState)([]), [vz, xz] = (0, nz.useState)(!1), Tz = (0, nz.useMemo)((() => {
        var zz, uz;
        const bz = null === wz.localId ? null : null !== (zz = null === (uz = wz.byId[wz.localId]) || void 0 === uz ? void 0 : uz.name) && void 0 !== zz ? zz : null;
        return wz.ids.flatMap((zz => {
          const uz = wz.byId[zz];
          return null !== uz && void 0 !== uz && uz.name && uz.name !== bz ? [{
            name: uz.name,
            cosmetics: uz.cosmetics,
            ranks: uz.ranks
          }] : []
        }))
      }), [wz]), Lz = (0, nz.useMemo)((() => function(zz, uz, bz) {
        const Ez = [],
          nz = [],
          iz = [];
        for (const lz of zz) !lz.isError && lz.name && ("inGame" === lz.location.status && lz.location.inLobbyName === uz || Mu(bz, lz.name) ? nz.push({
          friend: lz,
          place: "here"
        }) : "offline" === lz.location.status ? iz.push({
          friend: lz,
          place: "offline"
        }) : Ez.push({
          friend: lz,
          place: "online"
        }));
        return [...Ez, ...nz, ...iz]
      }(Rz.friends, bz, Tz.map((zz => zz.name)))), [Rz.friends, bz, Tz]), Pz = Gz.featureFlags.canSeeRealPlayerNames ? Tz.filter((zz => null === (0, uu.b)(zz.name, Xz))) : [], az = null !== tz && void 0 !== tz && tz.canManage ? tz : null, Vz = null !== az, mz = null !== (uz = null === tz || void 0 === tz ? void 0 : tz.visibility) && void 0 !== uz ? uz : null, qz = "whitelist" === (null === az || void 0 === az ? void 0 : az.visibility), hz = "private" === mz || "whitelist" === mz && !Vz, {
        userContext: Uz
      } = (0, oz.c)();
      (0, nz.useEffect)((() => {
        Vz && Uu(bz, Uz.getPersonalWorldLobbyName()) && yu(Uz.whamm)
      }), [Vz, bz, Uz]);
      const cz = hz ? lz("whitelist" === mz ? "socialBar:inviteWorldManagersOnly" : Vz ? "worldSocial:privateLinkRow" : "socialBar:inviteWorldPrivate") : null,
        gz = null === cz;
      (0, nz.useEffect)((() => hz ? void 0 : kz.f.quietFriendAdded()), [hz]), (0, nz.useEffect)((() => kz.f.quietFriendRequests()), []);
      const yz = (0, nz.useRef)(!1);
      (0, nz.useEffect)((() => {
        const zz = Mz.current,
          uz = !yz.current;
        yz.current = !0;
        const bz = null === document.activeElement || document.activeElement === document.body;
        null !== zz && void 0 !== zz && zz.contains(document.activeElement) || !uz && !bz || (0, Sz.d)() || null === zz || void 0 === zz || zz.focus({
          preventScroll: !0
        })
      }), [gz]), (0, nz.useEffect)((() => {
        const zz = zz => {
          "Escape" !== zz.key || null !== document.activeElement && document.activeElement !== document.body || iz()
        };
        return document.addEventListener("keydown", zz), () => {
          document.removeEventListener("keydown", zz)
        }
      }), [iz]);
      const Eu = null === tz && !pz,
        nu = (Hz || Rz.loading) && 0 === Rz.friends.length,
        iu = Rz.friends.flatMap((zz => zz.name ? [zz.name] : [])),
        Ou = fz.filter((zz => !Mu(iu, zz))),
        du = Lz.length + 3,
        Fu = Ou.length + du,
        Zu = vz ? Rz.requests : Rz.requests.slice(0, 1),
        Ru = async function(zz) {
          let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (const bz of function(zz, uz) {
              const bz = [];
              for (let Ez = 0; Ez < zz.length; Ez += uz) bz.push(zz.slice(Ez, Ez + uz));
              return bz
            }(zz, Dz.F)) {
            if (!await dz({
                whitelistAdd: bz
              }, (zz => Hu(zz, bz, !0)), {
                quiet: uz
              })) return !1
          }
          return !0
        }, wu = async zz => {
          if (zz === mz) return;
          (0, bu.reportAnalyticsClick)({
            id: "world_social.set_mode",
            value: zz
          });
          const uz = [...Lu(bz), ...rz],
            Ez = "whitelist" === zz && tz ? function(zz, uz, bz) {
              const Ez = [],
                nz = zz.flatMap((zz => "here" === zz.place ? [zz.friend.name] : []));
              for (const iz of [...nz, ...uz]) Mu(Ez, iz) || Mu(bz, iz) || Ez.push(iz);
              return Ez
            }(Lz, uz, tz.whitelist) : [];
          await dz({
            setVisibility: zz
          }, (uz => ({
            ...uz,
            visibility: zz
          }))) && await Ru(Ez)
        }, Xu = zz => {
          if (qz && az) return {
            on: Mu(az.whitelist, zz),
            onChange: uz => {
              (0, bu.reportAnalyticsClick)({
                id: "world_social.whitelist_toggle",
                value: uz ? "on" : "off"
              }), dz(uz ? {
                whitelistAdd: [zz]
              } : {
                whitelistRemove: zz
              }, (bz => Hu(bz, [zz], uz)))
            }
          }
        }, fu = async zz => {
          (0, bu.reportAnalyticsClick)({
            id: "world_social.invite",
            value: "friend"
          });
          const uz = () => {
            Nz((uz => uz.filter((uz => uz !== zz))))
          };
          Nz((uz => [...uz, zz]));
          const Ez = function(zz, uz) {
            return null === zz || void 0 === zz || !zz.canManage || Mu(zz.whitelist, uz) ? "none" : "whitelist" === zz.visibility ? "required" : "quiet"
          }(tz, zz);
          if ("none" !== Ez) {
            const bz = Ru([zz], "quiet" === Ez);
            if ("required" === Ez && !await bz) return void uz()
          }
          await (0, Cz.k)(zz, "game", {
            announceSent: !1,
            source: "world_social"
          }) ? (! function(zz, uz) {
            var bz;
            const Ez = null !== (bz = Tu.get(zz)) && void 0 !== bz ? bz : new Map;
            Ez.set(uz, Date.now()), Tu.set(zz, Ez)
          }(bz, zz), setTimeout(uz, Qz.o)) : uz()
        }, su = async (zz, uz) => {
          (0, bu.reportAnalyticsClick)({
            id: "world_social.add_friend",
            value: uz
          });
          const bz = await (0, Yz.f)(zz, "world_social");
          return (0, Yz.b)(bz, zz, {
            announceSent: !1
          }), "failed" !== bz.kind && ("sent" === bz.kind && sz((uz => Mu(uz, zz) ? uz : [...uz, zz])), qz && await Ru([zz]), !0)
        };
      return (0, Oz.jsxs)("div", {
        ref: Mz,
        className: "WorldSocialPopup AnimFadeInScaleUp",
        tabIndex: -1,
        onKeyDown: zz => {
          zz.target === zz.currentTarget && " " === zz.key && zz.preventDefault()
        },
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "WorldSocialTitle",
        children: [(0, Oz.jsxs)("div", {
          className: "WorldSocialHeader",
          children: [(0, Oz.jsx)("h2", {
            id: "WorldSocialTitle",
            className: "WorldSocialTitle SmallTextBold",
            children: lz("worldSocial:title")
          }), (0, Oz.jsx)(Fz.m, {
            className: "WorldSocialClose",
            onClick: iz
          })]
        }), Eu && (0, Oz.jsx)("div", {
          className: "WorldSocialLoading",
          children: (0, Oz.jsx)(Az.c, {})
        }), !Eu && (0, Oz.jsxs)(Oz.Fragment, {
          children: [(0, Oz.jsx)(pu, {
            worldCode: Ez,
            message: cz
          }), null === tz && !Hz && (0, Oz.jsx)("button", {
            type: "button",
            className: "WorldSocialLoadFailed",
            onClick: Zz,
            children: lz("worldSocial:loadFailed")
          }), Vz && null !== mz && (0, Oz.jsx)(Ku, {
            visibility: mz,
            onPick: zz => {
              wu(zz)
            }
          }), Rz.requests.length > 0 && (0, Oz.jsxs)("div", {
            className: "WorldSocialSection",
            children: [(0, Oz.jsx)(jz.c, {
              label: (0, Oz.jsxs)(Oz.Fragment, {
                children: [(0, Oz.jsx)(Kz.c, {
                  name: zu.f
                }), " ", lz("socialBar:requests")]
              }),
              meta: (0, Oz.jsxs)(Oz.Fragment, {
                children: [Rz.requests.length, Rz.requests.length === Wz.p && (0, Oz.jsx)("span", {
                  className: "SocialSectionTitleLimit",
                  children: lz("socialBar:limitReached")
                }), !vz && Rz.requests.length > 1 && (0, Oz.jsx)("button", {
                  type: "button",
                  className: "WorldSocialMoreRequests",
                  onClick: () => {
                    xz(!0)
                  },
                  children: lz("worldSocial:moreRequests", {
                    count: Rz.requests.length - 1
                  })
                })]
              })
            }), (0, Oz.jsx)("div", {
              className: "PlayerRows",
              children: Zu.map(((zz, uz) => (0, Oz.jsx)(ou, {
                zIndex: Zu.length - uz,
                player: zz,
                actions: (0, Oz.jsxs)(Oz.Fragment, {
                  children: [(0, Oz.jsx)(ez.f, {
                    tooltipInner: (0, Oz.jsx)(Oz.Fragment, {
                      children: lz("general:accept")
                    }),
                    delayShow: 0,
                    hoverOnly: !0,
                    children: (0, Oz.jsx)(Fz.f, {
                      className: "FriendRequestButton",
                      ariaLabel: `${lz("general:accept")} ${zz.name}`,
                      analyticsClick: {
                        id: "social.accept_friend_request",
                        value: "world_social"
                      },
                      onClick: () => {
                        (0, Yz.c)(zz.name, !0, {
                          source: "world_social"
                        })
                      },
                      children: (0, Oz.jsx)(Kz.c, {
                        name: "check"
                      })
                    })
                  }), (0, Oz.jsx)(ez.f, {
                    tooltipInner: (0, Oz.jsx)(Oz.Fragment, {
                      children: lz("general:decline")
                    }),
                    delayShow: 0,
                    hoverOnly: !0,
                    children: (0, Oz.jsx)(Fz.j, {
                      className: "FriendRequestButton",
                      ariaLabel: `${lz("general:decline")} ${zz.name}`,
                      analyticsClick: {
                        id: "social.decline_friend_request",
                        value: "world_social"
                      },
                      onClick: () => {
                        (0, Yz.c)(zz.name, !1, {
                          source: "world_social"
                        })
                      },
                      children: (0, Oz.jsx)(Kz.c, {
                        name: "xmark"
                      })
                    })
                  })]
                })
              }, `incoming:${zz.name}`)))
            })]
          }), (0, Oz.jsxs)("div", {
            className: "WorldSocialSection",
            children: [(0, Oz.jsx)(jz.c, {
              label: (0, Oz.jsxs)(Oz.Fragment, {
                children: [(0, Oz.jsx)(Kz.c, {
                  name: zu.b
                }), " ", lz("socialBar:friends")]
              }),
              meta: Rz.loaded && !hz ? Rz.friends.length : void 0
            }), (0, Oz.jsx)(Au, {
              Qr: zz => su(zz, "field")
            }), nu && (0, Oz.jsx)("div", {
              className: "WorldSocialLoading",
              children: (0, Oz.jsx)(Az.c, {})
            }), !nu && (0, Oz.jsxs)(Oz.Fragment, {
              children: [(0, Oz.jsxs)("div", {
                className: "PlayerRows",
                children: [Ou.map(((zz, uz) => (0, Oz.jsx)(ou, {
                  zIndex: Fu - uz,
                  player: ru(zz, null),
                  status: lz("worldSocial:requestSent"),
                  sd: Xu(zz)
                }, `request:${zz}`))), !hz && Lz.map(((zz, uz) => (0, Oz.jsx)(Nu, {
                  zIndex: du - uz,
                  row: zz,
                  sd: Xu(zz.friend.name),
                  canInvite: tu(tz) && "here" !== zz.place,
                  invited: rz.includes(zz.friend.name),
                  onInvite: () => {
                    fu(zz.friend.name)
                  }
                }, zz.friend.name))), Rz.loaded && 0 === Rz.friends.length && (0, Oz.jsx)(xu, {
                  playersHere: Pz,
                  exclude: fz,
                  Qr: zz => su(zz, "suggestion")
                })]
              }), qz && Rz.loaded && 0 === Rz.friends.length && 0 === Ou.length && (0, Oz.jsx)("div", {
                className: "WorldSocialEmpty",
                children: lz("worldSocial:whitelistNoFriends")
              })]
            })]
          })]
        })]
      })
    }
    var Wu = bz(2342),
      eu = bz(2317);

    function ju(zz) {
      let {
        show: uz,
        onClose: bz,
        option: Ez
      } = zz;
      const iz = (0, Jz.e)("connectedGame", (zz => (0, Wu.c)(zz) ? zz.lobbyName : null));
      return function(zz) {
        const {
          gameEntrySource: uz,
          loadingOverlayVisible: bz
        } = (0, cz.m)(["gameEntrySource", "loadingOverlayVisible"]), {
          userContext: Ez
        } = (0, oz.c)(), iz = (0, Jz.h)("localPlayerAlive"), lz = (0, Jz.e)("players", (zz => null !== zz.localId && void 0 !== zz.byId[zz.localId])), Mz = (0, eu.m)(), tz = (0, nz.useRef)(null), Hz = (0, nz.useRef)(null), Oz = "worldCreation" === uz, pz = Ez.whamm, dz = Ez.getPersonalWorldLobbyName();
        (0, nz.useEffect)((() => {
          var uz;
          null !== zz && (null === (uz = Hz.current) || void 0 === uz ? void 0 : uz.lobbyName) !== zz && null !== Yu(zz, Oz, pz, dz) && (Hz.current = nu(zz))
        }), [Oz, zz, pz, dz]), (0, nz.useEffect)((() => {
          if (null !== zz && (!bz && iz && lz)) return Mz.whenShown((() => {
            var uz;
            const bz = tz.current === zz ? null : Yu(zz, Oz, pz, dz);
            if (null === bz) return;
            const Ez = (null === (uz = Hz.current) || void 0 === uz ? void 0 : uz.lobbyName) === zz ? Hz.current : nu(zz);
            Hz.current = null, tz.current = zz,
              function(zz, uz, bz, Ez) {
                const {
                  lobbyName: nz
                } = zz, iz = () => {
                  ! function(zz, uz) {
                    if (!Eb()) return void uz(!0);
                    const bz = performance.now() + ub;
                    let Ez = 0;
                    const nz = () => {
                      Ez = Eb() ? 0 : Ez + 1, Ez >= 2 ? uz(!0) : !bb(zz) || performance.now() > bz ? uz(!1) : setTimeout(nz, zb)
                    };
                    setTimeout(nz, zb)
                  }(nz, (iz => {
                    Ez();
                    const lz = "auto_existing" === uz && Su(bz);
                    iz && bb(nz) && !Bu(nz) && !lz && (ku(zz) ? Cu(nz) : (Cu(nz), yu(bz), function(zz) {
                      const uz = Vu.d.world_social_popup_v1;
                      return (0, Vu.j)("world_social_popup_v1"), (0, bu.reportAnalyticsClick)({
                        id: "world_social.auto_open",
                        value: `${uz}:${(0,au.d)()}:${zz}`
                      }), (0, Gu.flushClientAnalyticsEvents)(), "auto_open" === uz
                    }(uz) && (! function(zz) {
                      iu.set(zz.lobbyName, zz)
                    }(zz), Zz.k.sK("toggleMenu", `inviteLink|${uz}`), "inviteLink" !== cz.e.get("openInGameMenuName") && console.warn("World social popup: the auto-open asked for it, but it didn't open"))))
                  }))
                };
                if ("auto" === uz && !ku(zz)) return void iz();
                zz.response.then((zz => {
                  if (!("error" in zz)) return zz.settings.canManage ? void iz() : (Cu(nz), void Ez());
                  Ez()
                }))
              }(Ez, bz, pz, (() => {
                tz.current === zz && (tz.current = null)
              }))
          }))
        }), [Mz, Oz, bz, zz, iz, lz, pz, dz])
      }(iz), (0, nz.useEffect)((() => {
        uz && null !== iz && Cu(iz)
      }), [uz, iz]), null !== iz ? (0, Oz.jsx)(Du, {
        show: uz,
        onClose: bz,
        opener: hu(Ez) ? Ez : "icon"
      }) : (0, Oz.jsx)(yz.b, {
        show: uz,
        onClose: bz
      })
    }
    const Iu = new Set;

    function Bu(zz) {
      return Iu.has(zz) || !!az.h.getItem(`worldSocialShown:${zz}`)
    }

    function Cu(zz) {
      Iu.add(zz), az.h.setItem(`worldSocialShown:${zz}`, !0)
    }

    function Yu(zz, uz, bz, Ez) {
      return Bu(zz) ? null : function(zz) {
        let {
          justMade: uz,
          playerId: bz,
          lobbyName: Ez,
          personalWorld: nz
        } = zz;
        return uz ? "auto" : !Su(bz) && Uu(Ez, nz) ? "auto_existing" : null
      }({
        justMade: uz,
        playerId: bz,
        lobbyName: zz,
        personalWorld: Ez
      })
    }

    function ku(zz) {
      let {
        answer: uz
      } = zz;
      return null !== uz && "settings" in uz && !uz.settings.canManage
    }
    const zb = 500,
      ub = 3e4;

    function bb(zz) {
      return "inGame" === cz.e.get("gameState") && Hz.gameBridge.latest("connectedGame").lobbyName === zz
    }

    function Eb() {
      return (0, Sz.d)() || cz.e.get("loadingOverlayVisible") || (0, gz.l)()
    }
    var nb = bz(36185),
      ib = bz(2907),
      lb = bz(1923),
      Mb = bz(2899);

    function tb(zz, uz, bz) {
      return Mb.e.overridesTexture(zz) ? Mb.e.getTexture(zz, uz).url : bz
    }
    var Hb = bz(9788);
    const Ob = (zz, uz) => {
        (0, nz.useEffect)((() => {
          setTimeout((() => {
            zz && zz.current && zz.current.focus()
          }), 1)
        }), [uz])
      },
      pb = (0, nz.memo)((function(zz) {
        let {
          isInputActive: uz,
          onClose: bz,
          onChange: Ez,
          textAreaRef: nz,
          fontSize: iz,
          lineHeight: lz,
          currText: Mz
        } = zz;
        return (0, Oz.jsxs)("div", {
          className: "WriteOnBoardWrapper",
          children: [(0, Oz.jsx)("img", {
            src: tb("board_full", ib.m.BLOCK, Hb),
            alt: "Board",
            className: "WriteOnBoardImg"
          }), (0, Oz.jsx)("textarea", {
            className: "WriteOnBoardTextArea",
            value: Mz,
            ref: nz,
            style: {
              fontSize: `${iz}rem`,
              lineHeight: `${lz}rem`
            },
            onKeyDown: zz => {
              var uz;
              "Escape" !== zz.key && (zz.stopPropagation(), "Tab" === zz.key && function(zz) {
                zz.preventDefault();
                const uz = zz.target,
                  {
                    value: bz
                  } = uz;
                let Ez = uz.selectionStart,
                  nz = uz.selectionEnd,
                  iz = bz.slice(Ez, nz);
                if (!iz.includes("\n") && !zz.shiftKey) return void document.execCommand("insertText", !1, "\t");
                for (; Ez > 0 && "\n" !== bz[Ez - 1];) Ez--;
                const lz = "\n" === bz[nz - 1];
                lz && nz--;
                iz = bz.slice(Ez, nz);
                const Mz = iz.split("\n").map((uz => zz.shiftKey ? uz.replace(/^\t/, "") : "\t" + uz)).join("\n");
                if (zz.shiftKey && bz.slice(Ez, nz) === Mz) return;
                let {
                  selectionStart: tz
                } = uz;
                uz.setSelectionRange(Ez, nz), tz > Ez && (!zz.shiftKey || "\t" === iz[0]) && (tz += zz.shiftKey ? -1 : 1);
                nz = Ez + Mz.length + (lz ? 1 : 0), document.execCommand("insertText", !1, Mz), uz.setSelectionRange(tz, nz)
              }(zz), /^F\d+$/i.test(zz.code) && null !== (uz = lb.s.OpenCodeEditor) && void 0 !== uz && uz.includes(zz.code) && bz())
            },
            spellCheck: "false",
            autoComplete: "off",
            onChange: Ez
          })]
        })
      }));

    function db(zz) {
      return 1.3 * zz
    }
    var Fb = bz(1633);
    const Zb = (0, nz.memo)((function(zz) {
        let {
          show: uz,
          onOpen: bz,
          onClose: Ez
        } = zz;
        const [iz, Mz] = (0, nz.useState)(null), [tz, pz] = (0, nz.useState)(""), [dz, Zz] = (0, nz.useState)(0), [Rz, Kz] = (0, nz.useState)(null), [wz, Xz] = (0, nz.useState)({
          text: "",
          textSize: 0
        }), fz = (zz, uz) => Rz ? (0, nb.n)(zz, uz, Rz.width, Rz.height) : (0, nb.f)(zz, uz), sz = zz => {
          pz(fz(tz, zz)), Zz(zz), az.g.setItem("lastBoardTextSize", zz)
        }, rz = () => {
          Ez(), Rz && tz === wz.text && dz === wz.textSize || Hz.gameBridge.send("writeOnBoard", {
            pos: iz,
            text: tz,
            textSize: dz
          })
        };
        (0, Jz.d)("boardEditRequested", (zz => {
          var nz, iz;
          if (!Gz.featureFlags.canSeePlayerWrittenText) return;
          if (null === zz) return Mz(null), void(uz && Ez());
          const {
            pos: lz,
            noticeboardSpan: tz,
            text: Hz
          } = zz;
          Mz(lz), Kz(tz), pz(Hz);
          const Oz = null !== (nz = null !== (iz = zz.textSize) && void 0 !== iz ? iz : az.g.getItem("lastBoardTextSize")) && void 0 !== nz ? nz : 0;
          Zz(Oz), Xz({
            text: Hz,
            textSize: Oz
          }), az.g.setItem("lastBoardTextSize", Oz), bz()
        }));
        const oz = (0, nz.useRef)(null);
        Ob(oz, uz), (0, Fb.s)(oz, {
          kind: "sign",
          submit: rz
        });
        const Nz = function(zz, uz) {
            const bz = nb.d[zz];
            if (!uz) return bz.uiFontSize;
            const {
              numLines: Ez,
              charsPerLine: nz
            } = (0, nb.x)(uz.width, uz.height, zz);
            return bz.uiFontSize * Math.min(bz.charsPerLine / nz, bz.numLines / Ez)
          }(dz, Rz),
          vz = db(Nz);
        return (0, Oz.jsxs)(lz.d, {
          className: "WriteOnBoardBg",
          close: rz,
          escDoesExit: !0,
          show: uz,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, Oz.jsx)(pb, {
            isInputActive: () => uz,
            onClose: rz,
            onChange: zz => {
              pz(fz(zz.target.value, dz))
            },
            textAreaRef: oz,
            fontSize: Nz,
            lineHeight: vz,
            currText: tz
          }), (0, Oz.jsx)("div", {
            className: "WriteOnBoardTextSizeHeader SmallTextBold",
            children: "Text Size"
          }), (0, Oz.jsxs)("div", {
            className: "WriteOnBoardTextSizeButtons",
            children: [(0, Oz.jsx)(Fz.f, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                sz(0)
              },
              disabled: 0 === dz,
              children: "Small"
            }), (0, Oz.jsx)(Fz.f, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                sz(1)
              },
              disabled: 1 === dz,
              children: "Medium"
            }), (0, Oz.jsx)(Fz.f, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                sz(2)
              },
              disabled: 2 === dz,
              children: "Large"
            })]
          })]
        })
      })),
      Rb = (0, nz.memo)((function(zz) {
        let {
          show: uz,
          onOpen: bz,
          onClose: Ez
        } = zz;
        const [iz, Mz] = (0, nz.useState)(""), tz = () => {
          Ez(), Hz.gameBridge.send("writeNameTag", iz)
        };
        (0, vz.g)("EditNameTag", (zz => {
          Gz.featureFlags.canSeePlayerWrittenText && null !== zz && (Mz(zz), bz())
        }));
        const pz = (0, nz.useRef)(null);
        Ob(pz, uz), (0, Fb.s)(pz, {
          kind: "nameTag",
          submit: tz
        });
        const dz = nb.E.nameTag.uiFontSize,
          Zz = db(dz);
        return (0, Oz.jsxs)(lz.d, {
          className: "WriteOnBoardBg",
          close: tz,
          escDoesExit: !0,
          show: uz,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, Oz.jsx)("div", {
            className: "NameTagTrim",
            children: (0, Oz.jsx)(pb, {
              isInputActive: () => uz,
              onClose: tz,
              onChange: zz => {
                const uz = zz.target.value.replaceAll("\n", "");
                Mz((0, nb.r)(uz, "nameTag"))
              },
              textAreaRef: pz,
              fontSize: dz,
              lineHeight: Zz,
              currText: iz
            })
          }), (0, Oz.jsx)(Fz.f, {
            onClick: tz,
            className: "WriteOnNameTagCloseButton",
            children: "Finish"
          })]
        })
      }));
    var Kb = bz(18094);
    const wb = (0, nz.memo)((function(zz) {
      let {
        show: uz,
        onOpen: bz,
        onClose: Ez
      } = zz;
      const [iz, Mz] = (0, nz.useState)(""), [tz, pz] = (0, nz.useState)(0), [dz, Zz] = (0, nz.useState)(!1), [Rz, Kz] = (0, nz.useState)(["", "", "", "", "", "", "", "", "", ""]), [wz, Xz] = (0, nz.useState)("Title"), [fz, sz] = (0, nz.useState)(!0), [rz, oz] = (0, nz.useState)(!1);
      (0, vz.g)("EditBook", (zz => {
        let {
          pages: uz,
          title: Ez,
          isPublished: nz
        } = zz;
        var iz;
        Gz.featureFlags.canSeePlayerWrittenText && (null !== uz ? (Kz(uz), Mz(null !== (iz = uz[0]) && void 0 !== iz ? iz : ""), Xz(Ez), pz(0), Zz(!1), sz(!nz), oz(!1), bz()) : Kz(["", "", "", "", "", "", "", "", "", ""]))
      }));
      const Nz = (0, nz.useRef)(null),
        xz = (0, nz.useRef)(null);
      Ob(Nz, uz), (0, Fb.s)(Nz, {
        kind: "book"
      }), (0, Fb.s)(xz, {
        kind: "cM"
      });
      const Jz = nb.E.book.uiFontSize,
        Az = db(Jz),
        Tz = () => {
          (fz || rz) && Hz.gameBridge.send("writeBook", {
            pages: [...Rz],
            title: wz,
            published: !fz && rz
          })
        },
        Lz = zz => {
          dz && (Rz[tz] = iz, Zz(!1)), Mz(Rz[zz]), pz(zz)
        };
      return (0, Oz.jsxs)(lz.d, {
        className: "WriteOnBoardBg",
        close: () => {
          Ez(), Rz[tz] = iz, Tz()
        },
        escDoesExit: !0,
        show: uz,
        togglePointerLock: !1,
        globallyUniqueKey: "WriteOnBookComp",
        children: [(0, Oz.jsxs)("div", {
          className: "WriteOnBookWrapper",
          children: [(0, Oz.jsx)("textarea", {
            className: "BookTitleTextArea SmallTextLight",
            value: wz,
            ref: xz,
            style: {
              fontSize: "2.5rem",
              lineHeight: `${Az}rem`
            },
            onKeyDown: zz => {
              fz && zz.stopPropagation()
            },
            spellCheck: "false",
            autoComplete: "off",
            onChange: zz => {
              let uz = zz.target.value;
              uz = (0, nb.r)(uz, "cM"), Xz(uz)
            },
            readOnly: !fz
          }), (0, Oz.jsx)("img", {
            src: tb("book_page", ib.m.ITEM, Kb),
            alt: "book_page",
            className: "WriteOnBookPageImg"
          }), (0, Oz.jsx)("div", {
            className: "BookTextAreaPadding",
            children: (0, Oz.jsx)("textarea", {
              className: "WriteOnBookPageTextArea",
              value: iz,
              ref: Nz,
              style: {
                fontSize: `${Jz}rem`,
                lineHeight: `${Az}rem`
              },
              onKeyDown: zz => {
                fz && zz.stopPropagation()
              },
              spellCheck: "false",
              autoComplete: "off",
              onChange: zz => {
                const uz = zz.target.value;
                Mz((0, nb.r)(uz, "book")), Zz(!0)
              },
              readOnly: !fz
            })
          })]
        }), (0, Oz.jsxs)("div", {
          className: "BookNavigationWrapper",
          children: [(0, Oz.jsx)(Fz.f, {
            disabled: 0 === tz,
            onClick: () => {
              Lz(tz - 1)
            },
            className: "BookNavButton",
            children: "<"
          }), (0, Oz.jsx)("div", {
            style: {
              width: "2rem"
            }
          }), (0, Oz.jsx)(Fz.f, {
            disabled: 9 === tz,
            onClick: () => {
              Lz(tz + 1)
            },
            className: "BookNavButton",
            children: ">"
          }), (0, Oz.jsx)("div", {
            style: {
              width: "2rem"
            }
          }), (0, Oz.jsx)(Fz.f, {
            onClick: () => {
              sz(!fz), oz(!0)
            },
            className: "BookNavButton",
            children: fz ? "Publish" : "Edit"
          })]
        })]
      })
    }));
    var Xb = bz(36080),
      fb = bz(8342),
      sb = bz(1362),
      rb = bz(1856);

    function ob(zz) {
      let {
        show: uz,
        buttons: bz
      } = zz;
      const {
        t: Ez
      } = (0, Iz.F)(), iz = (0, nz.useRef)(null);
      return (0, nz.useEffect)((() => {
        var zz, bz;
        const Ez = uz ? (0, Xb.x)() : null;
        if (!Ez || !(0, sb.f)()) return;
        const nz = (0, Xb.h)().findIndex((zz => zz.id === Ez));
        (0, fb.n)(null !== (zz = null === (bz = iz.current) || void 0 === bz ? void 0 : bz.children[nz]) && void 0 !== zz ? zz : null)
      }), [uz]), 0 === bz.length ? null : (0, Oz.jsx)("div", {
        ref: iz,
        className: "ClientGameInventoryButtons",
        onPointerDown: zz => {
          zz.stopPropagation()
        },
        onPointerUp: zz => {
          zz.stopPropagation()
        },
        children: bz.map((zz => {
          const uz = Ez(zz.labelKey);
          return (0, Oz.jsxs)(Fz.q, {
            className: zz.className,
            disabled: zz.disabled,
            onClick: () => {
              (0, Xb.n)(zz)
            },
            ariaLabel: zz.iconOnly ? uz : void 0,
            title: zz.iconOnly ? uz : void 0,
            children: [zz.icon && (0, Oz.jsxs)("div", {
              className: "ClientGameInventoryButtonIcon",
              children: ["item" === zz.icon.kind && (0, Oz.jsx)(rb.c, {
                itemName: zz.icon.name,
                amount: 0
              }), "image" === zz.icon.kind && (0, Oz.jsx)("img", {
                src: zz.icon.src,
                alt: "",
                draggable: !1
              }), "icon" === zz.icon.kind && (0, Oz.jsx)(Kz.c, {
                name: zz.icon.name
              })]
            }), !zz.iconOnly && uz]
          }, zz.id)
        }))
      })
    }
    var Nb = bz(36188),
      vb = bz(2594),
      xb = bz(8999),
      Jb = bz(36006),
      Ab = bz(35998);
    let Tb = null;
    window.setShowInventoryAdsOverride = zz => {
      Tb = zz
    };
    const Lb = 24e4;
    var Pb = bz(1865);

    function Gb(zz) {
      var uz;
      let {
        draggedInfo: {
          name: bz,
          attributes: Ez,
          amount: nz
        },
        toAddRef: iz
      } = zz;
      return (0, Oz.jsx)("div", {
        className: "DraggedInvenItem",
        ref: iz,
        children: (0, Oz.jsx)(rb.c, {
          itemName: bz,
          amount: nz,
          enchantmentTier: null === Ez || void 0 === Ez || null === (uz = Ez.customAttributes) || void 0 === uz ? void 0 : uz.enchantmentTier,
          bar: (0, Pb.i)(Ez)
        })
      })
    }

    function ab(zz) {
      let {
        className: uz = "",
        displayInfo: bz,
        domRef: Ez
      } = zz;
      return (0, Oz.jsxs)("div", {
        className: `InvenHoveredItemInfo SmallTextBold ${uz}`,
        ref: Ez,
        children: [(0, Oz.jsx)(Nz.b, {
          text: (0, xz.vb)(bz.name, {
            fontStyle: bz.fontStyle
          })
        }), (0, Oz.jsx)("div", {
          className: "InvenHoveredItemInfoDescription",
          children: (0, Oz.jsx)(Nz.b, {
            text: bz.desc
          })
        })]
      })
    }

    function Vb(zz) {
      let {
        info: uz,
        draggedInfo: bz
      } = zz;
      const Ez = (0, nz.useRef)(null);
      return (0, nz.useLayoutEffect)((() => {
        const zz = Ez.current,
          {
            left: bz,
            top: nz
          } = function(zz, uz, bz, Ez) {
            const nz = Ez.left * bz.width / 100 + 4,
              iz = bz.width - Ez.right * bz.width / 100 - 4 - uz.width,
              lz = Ez.top * bz.height / 100 + 4,
              Mz = bz.height - 4 - uz.height;
            return {
              left: Math.max(nz, Math.min(zz.x - uz.width / 2, iz)),
              top: Math.max(lz, Math.min(zz.y - 48 - uz.height, Mz))
            }
          }({
            x: uz.initTouchX,
            y: uz.initTouchY
          }, {
            width: zz.offsetWidth,
            height: zz.offsetHeight
          }, {
            width: window.innerWidth,
            height: window.innerHeight
          }, cz.e.get("notchSize"));
        zz.style.left = `${bz}px`, zz.style.top = `${nz}px`
      }), [uz]), (0, Oz.jsxs)("div", {
        className: "LongHoldSplitInfoUI SmallTextBold",
        ref: Ez,
        children: [(0, Oz.jsx)("div", {
          className: "LongHoldSplitInfoUIInner",
          style: {
            width: bz.amount / uz.maxAmount * 100 + "%"
          }
        }), (0, Oz.jsxs)("div", {
          className: "LongHoldSplitInfoUIText",
          children: [bz.amount, "/", uz.maxAmount]
        })]
      })
    }
    var mb = bz(195);
    const qb = (0, nz.memo)((function(zz) {
      let {
        show: uz,
        onOpen: bz,
        onClose: Ez
      } = zz;
      const iz = (0, nz.useRef)({
          pos: null
        }),
        [Mz, tz] = (0, nz.useState)([0, 0, 0, 0]),
        {
          userContext: pz
        } = (0, oz.c)();
      (0, Jz.d)("ironChestOpenRequested", (zz => {
        let {
          pos: uz,
          ownerDbId: Ez,
          cachedPasskey: nz
        } = zz;
        if (iz.current.pos = uz, Ez !== pz.whamm) return null !== nz ? (tz(nz), void dz(nz)) : void bz();
        dz(Mz)
      })), (0, Jz.d)("localEffectUpdated", (zz => {
        "Thief" === zz && Ez()
      }));
      const dz = zz => {
        const {
          pos: uz
        } = iz.current;
        Hz.gameBridge.send("openIronChest", {
          pos: uz,
          jH: zz
        })
      };
      return (0, Oz.jsx)(lz.d, {
        className: "IronChestPasskeyInputScreenOuter",
        close: Ez,
        escDoesExit: !0,
        show: uz,
        togglePointerLock: !1,
        globallyUniqueKey: "IronChestPasskeyInputScreen",
        children: (0, Oz.jsx)("div", {
          className: "IronChestPasskeyInputScreen",
          children: (0, Oz.jsx)(hb, {
            jH: Mz,
            onPasskeyUpdated: tz,
            confirmText: "ironChest:tryUnlock",
            onConfirm: () => {
              dz(Mz)
            }
          })
        })
      })
    }));

    function hb(zz) {
      let {
        className: uz = "",
        jH: bz,
        onPasskeyUpdated: Ez,
        confirmText: nz,
        onConfirm: iz
      } = zz;
      const {
        t: lz
      } = (0, Iz.F)();
      return (0, Oz.jsxs)("div", {
        className: `${uz} IronChestPasskeyInput`,
        children: [(0, Oz.jsx)("div", {
          className: "SmallTextBold IronChestPasskeyInputTitle",
          children: lz("ironChest:passkeyInputTitle")
        }), (0, Oz.jsx)("div", {
          className: "IronChestPasskeyInputRow",
          children: new Array(mb.e.ironChestPasskeyLength).fill(0).map(((zz, uz) => (0, Oz.jsx)(Ub, {
            digit: bz[uz],
            onPasskeyDigitUpdated: zz => {
              const nz = [...bz];
              nz[uz] = zz, Ez(nz)
            }
          }, uz)))
        }), (0, Oz.jsx)(Fz.q, {
          className: "IronChestPasskeyInputConfirmButton",
          onClick: iz,
          children: lz(nz)
        })]
      })
    }

    function Ub(zz) {
      let {
        digit: uz,
        onPasskeyDigitUpdated: bz
      } = zz;
      return (0, Oz.jsx)("div", {
        className: "IronChestPasskeyDigitInputWrapper",
        children: (0, Oz.jsxs)("div", {
          className: "IronChestPasskeyDigitInput",
          children: [(0, Oz.jsx)(Fz.q, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              bz(xz.d.mod(uz + 1, 10))
            },
            children: (0, Oz.jsx)(Kz.c, {
              name: "angle-up"
            })
          }), (0, Oz.jsx)("div", {
            className: "SmallTextBold IronChestPasskeyDigit",
            children: uz
          }), (0, Oz.jsx)(Fz.q, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              bz(xz.d.mod(uz - 1, 10))
            },
            children: (0, Oz.jsx)(Kz.c, {
              name: "angle-down"
            })
          })]
        })
      })
    }
    var cb = bz(8994),
      gb = bz(36231),
      Sb = bz(35989);

    function yb(zz) {
      let {
        specialItemInfo: uz,
        setHovered: bz,
        pointerDown: Ez,
        pointerUp: iz,
        enchantingTablePosition: lz,
        enchantingTableBlockName: Mz
      } = zz;
      const {
        t: pz
      } = (0, Iz.F)(), [dz, Zz] = (0, nz.useState)(null), [Rz, Kz] = (0, nz.useState)(null), wz = (0, tz.g)("auraPerLevel"), Xz = Math.floor((0, Jz.h)("aura") / wz);
      (0, nz.useEffect)((() => {
        if (!uz) return void Zz(null);
        let zz = !0;
        return Hz.gameBridge.query("enchantingOffer", {
          slot: uz.idx,
          name: uz.name,
          blockName: Mz
        }).then((bz => {
          var Ez, nz;
          let {
            perks: iz,
            options: lz
          } = bz;
          if (!zz) return;
          const Mz = {
            isEnchantable: iz.length > 0,
            possibleEnchantments: iz,
            options: lz.map((zz => {
              let {
                level: uz,
                odds: bz
              } = zz;
              return {
                level: uz,
                possibilities: Object.fromEntries(bz.map(((zz, uz) => [`Tier ${uz+1}`, zz])))
              }
            })),
            isAlreadyEnchanted: iz.length > 0 && void 0 !== (null === (Ez = uz.attributes) || void 0 === Ez || null === (nz = Ez.customAttributes) || void 0 === nz ? void 0 : nz.enchantmentTier)
          };
          Zz(Mz), (zz => {
            const uz = zz.options.map((zz => Object.entries(zz.possibilities).map((zz => {
              let [uz, bz] = zz;
              return {
                str: `${uz}: ${bz>0?bz<.01?bz.toPrecision(1):bz.toFixed(2):0}%\n`,
                style: {
                  color: xz.rb[uz]
                }
              }
            }))));
            Kz(uz)
          })(Mz)
        })), () => {
          zz = !1
        }
      }), [uz, lz, Mz]);
      const fz = [];
      for (let nz = 0; nz < gb.d; nz++) {
        const zz = null === dz || void 0 === dz ? void 0 : dz.options[nz],
          Ez = !zz || zz.level > Xz;
        fz.push((0, Oz.jsx)(Fz.f, {
          className: "EnchantmentButton",
          onPointerEnter: zz ? zz => null === bz || void 0 === bz ? void 0 : bz()(!0, {
            name: "",
            desc: Rz[nz]
          }, zz) : void 0,
          onPointerLeave: zz ? () => null === bz || void 0 === bz ? void 0 : bz()(!1) : void 0,
          onClick: Ez ? void 0 : () => {
            Hz.gameBridge.send("enchantItem", {
              slot: uz.idx,
              level: zz.level,
              tablePos: lz
            }), Zz(null)
          },
          disabled: Ez,
          children: zz ? (0, Oz.jsxs)(Oz.Fragment, {
            children: [(0, Oz.jsxs)("h1", {
              className: "EnchantmentLevels",
              children: [(0, Oz.jsxs)("span", {
                className: "EnchantmentLevelsCost",
                children: [pz("enchantments:cost"), ": "]
              }), " ", pz("enchantments:levels", {
                level: zz.level
              })]
            }), (0, Oz.jsxs)("div", {
              className: "EnchantmentPossibilities",
              children: [(0, Oz.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, Oz.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: pz("enchantments:tier")
                }), Object.entries(zz.possibilities).map((zz => {
                  let [uz, bz] = zz;
                  return 0 === bz ? null : (0, Oz.jsx)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: xz.rb[uz]
                    },
                    children: uz
                  }, uz)
                }))]
              }), (0, Oz.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, Oz.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: pz("enchantments:odds")
                }), Object.entries(zz.possibilities).map((zz => {
                  let [uz, bz] = zz;
                  return 0 === bz ? null : (0, Oz.jsxs)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: xz.rb[uz]
                    },
                    children: [bz > 0 && bz < .1 ? "<0.1" : bz.toFixed(0 < bz && bz < .95 ? 1 : 0), "%"]
                  }, uz)
                }))]
              })]
            })]
          }) : !1 === (null === dz || void 0 === dz ? void 0 : dz.isEnchantable) ? (0, Oz.jsx)("h1", {
            className: "EnchantmentLevels",
            children: pz("enchantments:notEnchantable")
          }) : (0, Oz.jsx)("h1", {
            className: "EnchantmentLevels",
            children: pz("enchantments:enterItem")
          })
        }, nz))
      }
      return (0, Oz.jsxs)("div", {
        className: "EnchantingTable",
        children: [(0, Oz.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: Mz
        }), (0, Oz.jsxs)("div", {
          className: "EnchantingTableBody",
          children: [(0, Oz.jsxs)("div", {
            className: "EnchantingTableLeft",
            children: [(0, Oz.jsx)(Sb.c, {
              idx: Ab.d,
              setHovered: zz => {
                null === bz || void 0 === bz || bz(Ab.d)(zz)
              },
              pointerDown: Ez,
              pointerUp: iz,
              draggedInfo: null,
              specialItemInfo: uz,
              variation: "Enchanting Table"
            }), dz && dz.possibleEnchantments.length > 0 && (0, Oz.jsxs)("div", {
              className: "PossibleEnchantments",
              children: [(0, Oz.jsx)("h2", {
                children: "Possible Perks:"
              }), dz.possibleEnchantments.map((zz => (0, Oz.jsxs)(nz.Fragment, {
                children: [(0, Oz.jsxs)("div", {
                  className: "PossibleEnchantmentName",
                  children: [(0, Oz.jsx)("div", {
                    className: "PossibleEnchantmentIcon",
                    children: (0, Oz.jsx)(rb.c, {
                      itemName: `${zz} Enchantment`,
                      amount: 1
                    })
                  }), (0, Oz.jsx)("div", {
                    className: "PossibleEnchantmentNameText",
                    children: zz
                  })]
                }), (0, Oz.jsx)("div", {
                  className: "PossibleEnchantmentDescription",
                  children: pz((0, cb.i)(zz).translationKey)
                })]
              }, zz)))]
            })]
          }), (0, Oz.jsxs)("div", {
            className: "EnchantmentOptions",
            children: [dz && dz.isAlreadyEnchanted && (0, Oz.jsx)("div", {
              className: "AlreadyEnchantedWarning",
              children: pz("enchantments:alreadyEnchanted")
            }), fz]
          })]
        })]
      })
    }
    var Db = bz(36237);

    function Qb(zz) {
      var uz;
      let {
        specialItemInfo: bz,
        setSpecialItemInfo: Ez,
        setHovered: iz,
        pointerDown: lz,
        pointerUp: Mz
      } = zz;
      const {
        t: tz
      } = (0, Iz.F)(), pz = (0, Jz.e)("inventory", (zz => zz.freeSlots)), [dz, Zz] = (0, nz.useState)(null);
      (0, nz.useEffect)((() => {
        if (bz) {
          const zz = (0, Db.c)(bz.name, bz.amount);
          Zz({
            salvageable: !!zz,
            produces: zz
          })
        } else Zz(null)
      }), [bz, null === bz || void 0 === bz ? void 0 : bz.name, null === bz || void 0 === bz ? void 0 : bz.amount]);
      const Rz = !!bz && !(null === dz || void 0 === dz || !dz.salvageable) && !(null !== (uz = dz.produces) && void 0 !== uz && uz.some((zz => {
        let {
          amt: uz
        } = zz;
        return uz < 1
      })));
      return (0, Oz.jsxs)("div", {
        className: "SalvagingTable",
        children: [(0, Oz.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: tz("item:salvagingTable")
        }), (0, Oz.jsxs)("div", {
          className: "SalvagingTableBody",
          children: [(0, Oz.jsx)("div", {
            className: "SalvagingTableLeft",
            children: (0, Oz.jsx)(Sb.c, {
              idx: Ab.d,
              setHovered: zz => {
                null === iz || void 0 === iz || iz(Ab.d)(zz)
              },
              pointerDown: lz,
              pointerUp: Mz,
              draggedInfo: null,
              specialItemInfo: bz,
              variation: "Salvaging Table"
            })
          }), (0, Oz.jsx)("div", {
            className: "SalvagingTableRight",
            children: (0, Oz.jsx)(Fz.f, {
              className: "SalvageButton",
              onClick: Rz ? () => {
                const {
                  idx: zz,
                  name: uz,
                  amount: nz
                } = bz;
                Hz.gameBridge.send("salvageItem", {
                  slot: zz,
                  name: uz,
                  amount: nz
                }) && (Zz(null), Ez(null))
              } : void 0,
              disabled: !Rz,
              children: dz ? dz.salvageable ? dz.produces.some((zz => {
                let {
                  amt: uz
                } = zz;
                return uz < 1
              })) ? (0, Oz.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, Oz.jsx)("div", {
                  className: "SalvageText Error",
                  children: tz("salvagingTable:notEnoughResources")
                })
              }) : pz < dz.produces.length ? (0, Oz.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, Oz.jsx)("div", {
                  className: "SalvageText Error",
                  children: tz("salvagingTable:notEnoughInventorySpace")
                })
              }) : (0, Oz.jsxs)("div", {
                className: "SalvageButtonText",
                children: [(0, Oz.jsx)("div", {
                  className: "SalvageText",
                  children: tz("salvagingTable:salvage")
                }), (0, Oz.jsx)("div", {
                  className: "SalvageIcons",
                  children: dz.produces.map(((zz, uz) => {
                    let {
                      item: bz,
                      amt: Ez
                    } = zz;
                    return (0, Oz.jsx)("div", {
                      className: "SalvageIcon",
                      children: (0, Oz.jsx)(rb.c, {
                        itemName: bz,
                        amount: Math.floor(Ez)
                      })
                    }, uz)
                  }))
                })]
              }) : (0, Oz.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, Oz.jsx)("div", {
                  className: "SalvageText Error",
                  children: tz("salvagingTable:unsalvageable")
                })
              }) : (0, Oz.jsx)(Oz.Fragment, {})
            })
          })]
        })]
      })
    }
    var Wb = bz(206),
      eb = bz(9078),
      jb = bz(2548),
      Ib = bz(8356),
      Bb = bz(8349),
      Cb = bz(1613),
      Yb = bz(1936),
      kb = bz(1377),
      zE = bz(2007);

    function uE(zz, uz, bz) {
      const Ez = zz.trim().toLowerCase();
      if ("" === Ez) return 0;
      let nz = null;
      for (const iz of uz) {
        const zz = iz.toLowerCase().indexOf(Ez);
        if (0 === zz) return 0;
        zz > 0 && (nz = 1)
      }
      if (null !== nz) return nz;
      for (const iz of bz)
        if (iz.toLowerCase().includes(Ez)) return 2;
      return null
    }

    function bE(zz) {
      return zz.map((zz => {
        var uz;
        return zz ? {
          name: zz.name,
          amount: null !== (uz = zz.amount) && void 0 !== uz ? uz : 1
        } : null
      }))
    }

    function EE(zz) {
      return zz < 1e3 ? `${zz}` : zz < 1e4 ? Math.floor(zz / 100) / 10 + "k" : `${Math.floor(zz/1e3)}k`
    }
    var nE = bz(36243);
    const iE = Fz.f,
      lE = {
        initialDelayMs: 400,
        intervalMs: 100
      },
      ME = () => {
        const zz = (0, kb.f)();
        return zz ? zz.getPadRepeatTiming(lE) : lE
      };

    function tE(zz, uz, bz) {
      var Ez, nz;
      const iz = (0, xb.t)(uz, zz);
      let lz = null === (Ez = uz[zz]) || void 0 === Ez ? void 0 : Ez.description;
      if (bz && (null === (nz = (0, nE.e)().get(zz)) || void 0 === nz || !nz.hideIngredients)) {
        lz ? (lz = (0, xz.vb)(lz), lz.push({
          str: "\n"
        })) : lz = [], lz.push({
          str: "\n"
        }), lz.push({
          str: "Can be crafted from:\n"
        });
        for (const zz of bz) "string" === typeof zz && (lz.push({
          icon: zz,
          style: {
            fontSize: "1.5em"
          }
        }), lz.push({
          str: " "
        }), lz.push(...(0, xz.vb)((0, xb.t)(uz, zz))), lz.push({
          str: "\n"
        }))
      }
      return {
        name: iz,
        desc: lz
      }
    }

    function HE(zz) {
      let {
        name: uz,
        cO: bz
      } = zz;
      return `${uz}_${bz}`
    }

    function OE(zz) {
      var uz;
      let {
        onClick: bz,
        itemName: Ez,
        recipeId: iz,
        isSelected: lz,
        haveIngredients: Mz,
        craftable: tz,
        setHovered: Hz,
        padActions: pz,
        marked: dz,
        lock: Fz,
        itemInfo: Zz
      } = zz;
      const Rz = (0, nz.useRef)(null);
      return (0, Ib.g)(Rz, {
        press: zz => !Mz || "secondary" === zz && !tz ? (pz.refuse(), !1) : "primary" === zz ? (pz.choose(), !0) : pz.craft(),
        release: pz.stopCraft,
        hints: {
          primary: "inventoryChooseRecipe",
          secondary: "inventoryCraft"
        }
      }), (0, Oz.jsxs)("div", {
        ref: Rz,
        className: Fu()("InvenItem", {
          CraftableItemNotEnoughIngredients: !Mz && !Fz,
          CraftableItemMarked: dz,
          CraftableItemLocked: void 0 !== Fz,
          CraftableItemLockedFar: (null !== (uz = null === Fz || void 0 === Fz ? void 0 : Fz.stepsAway) && void 0 !== uz ? uz : 1) > 1
        }),
        "data-recipe-key": iz,
        "data-pad-inventory-default": lz ? "" : void 0,
        onClick: bz,
        style: {
          cursor: lz ? null : "pointer"
        },
        onPointerEnter: zz => {
          null === Hz || void 0 === Hz || Hz(!0, tE(Ez, Zz)), !lz && (0, Cb.r)(zz.nativeEvent) && (0, Bb.i)() && bz()
        },
        onPointerLeave: () => {
          null === Hz || void 0 === Hz || Hz(!1)
        },
        children: [(0, Oz.jsx)(rb.c, {
          itemName: Ez,
          amount: 1
        }), dz && (0, Oz.jsx)("span", {
          className: "CraftableItemMarkBadge",
          "aria-hidden": "true",
          children: "!"
        }), Fz && (0, Oz.jsxs)("span", {
          className: "CraftableItemLockTag",
          children: [(0, Oz.jsx)(Kz.c, {
            name: "lock"
          }), (0, Oz.jsx)(Nz.b, {
            text: Fz.tag
          })]
        })]
      })
    }

    function pE(zz) {
      let {
        idx: uz,
        status: bz,
        shownItem: Ez,
        dim: iz,
        onHoverStart: lz,
        onHoverEnd: Mz,
        onPadBack: tz
      } = zz;
      const Hz = (0, nz.useRef)(null);
      (0, Ib.g)(Hz, {
        press: () => !1,
        back: tz,
        hints: {
          back: "inventoryBackToRecipes"
        }
      });
      const pz = bz.need > 0 ? Math.min(bz.have / bz.need, 1) : 1;
      return (0, Oz.jsxs)("div", {
        ref: Hz,
        className: Fu()("CupTile", {
          Short: bz.missing > 0
        }),
        style: {
          width: iz,
          height: iz
        },
        "data-craft-ingredient": uz,
        onPointerEnter: lz,
        onPointerLeave: Mz,
        children: [(0, Oz.jsx)("div", {
          className: "CupFill",
          style: {
            transform: `scaleY(${pz})`
          }
        }), (0, Oz.jsx)(rb.c, {
          itemName: Ez,
          amount: 0
        }), (0, Oz.jsxs)("div", {
          className: "CupCount SmallTextBold",
          children: [EE(bz.have), "/", EE(bz.need)]
        })]
      })
    }

    function dE(zz) {
      var uz, bz, Ez, iz, lz;
      let {
        show: Mz,
        recipeItem: {
          name: tz,
          cO: pz,
          requires: dz,
          produces: Fz,
          haveIngredients: Zz
        },
        detail: Rz,
        onCraft: Kz,
        setHovered: wz,
        craftButtonRef: Xz,
        onPadBack: fz,
        showPadShortcut: sz,
        refusedCount: rz,
        lock: oz,
        itemInfo: vz
      } = zz;
      const {
        t: xz
      } = (0, Iz.F)(), Jz = null !== Rz && !Rz.roomForOne, Az = null !== (uz = null === Rz || void 0 === Rz ? void 0 : Rz.craftAllTimes) && void 0 !== uz ? uz : 0, Tz = function(zz, uz) {
        return zz.map((zz => {
          let {
            items: bz,
            amt: Ez
          } = zz, nz = 0;
          const iz = [];
          for (const lz of bz) {
            const zz = uz(lz);
            nz += zz, zz > 0 && iz.push(lz)
          }
          return 0 === iz.length && iz.push(bz[0]), {
            shownItems: iz,
            need: Ez,
            have: nz,
            missing: Math.max(Ez - nz, 0)
          }
        }))
      }(dz, (zz => {
        var uz;
        return null !== (uz = null === Rz || void 0 === Rz ? void 0 : Rz.amounts[zz]) && void 0 !== uz ? uz : 0
      }));
      let Lz = "4rem",
        Pz = 4;
      3 === dz.length || 4 === dz.length ? Lz = "3.75rem" : dz.length >= 5 && (Lz = "3rem"), 4 === dz.length ? Pz = 2 : dz.length <= 6 && (Pz = 3);
      const Gz = `calc(${Pz} * ${Lz} + ${Pz-1} * 0.4rem + 1px)`,
        az = (0, nz.useRef)(null),
        Vz = (0, nz.useRef)(null);
      (0, nz.useLayoutEffect)((() => {
        az.current.scrollTop = 0
      }), [tz, pz]);
      const mz = (0, nz.useRef)(rz);
      (0, nz.useEffect)((() => {
        if (rz === mz.current) return;
        mz.current = rz;
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
        for (const Ez of null !== (uz = null === (bz = az.current) || void 0 === bz ? void 0 : bz.querySelectorAll(".CupTile.Short, .CantCraftInfo")) && void 0 !== uz ? uz : []) {
          var uz, bz;
          Ez.animate(zz, {
            duration: 280,
            easing: "ease-out"
          })
        }
      }), [rz]);
      const qz = (zz, uz, bz) => {
          var Ez;
          if ((0, nE.e)().has(tz)) return void(bz && clearInterval(hz.current));
          const nz = null !== (Ez = null === Rz || void 0 === Rz ? void 0 : Rz.resultStackable) && void 0 !== Ez && Ez,
            iz = bE(Hz.gameBridge.latest("inventory").player),
            {
              gO: lz,
              Rp: Mz,
              amountAddedToSlot: Oz
            } = Hz.gameBridge.send("craftRecipe", {
              name: tz,
              cO: pz,
              times: uz || zz && nz ? null : 1
            });
          if (lz > 0) {
            const uz = [],
              Ez = new Set(dz.flatMap((zz => {
                let {
                  items: uz
                } = zz;
                return uz
              }))),
              lz = function(zz, uz, bz) {
                const Ez = [];
                for (let nz = 0; nz < zz.length; nz++) {
                  const iz = zz[nz];
                  if (!iz || !bz.has(iz.name)) continue;
                  const lz = uz[nz],
                    Mz = (null === lz || void 0 === lz ? void 0 : lz.name) === iz.name ? lz.amount : 0;
                  Mz < iz.amount && Ez.push({
                    idx: nz,
                    itemName: iz.name,
                    amount: iz.amount - Mz
                  })
                }
                return Ez
              }(iz, bE(Hz.gameBridge.latest("inventory").player), Ez).slice(0, 12),
              pz = bz ? 0 : Math.min(50, 400 / lz.length),
              Zz = bz ? 220 : 320;
            for (const zz of lz) {
              var Fz;
              const bz = dz.findIndex((uz => {
                  let {
                    items: bz
                  } = uz;
                  return bz.includes(zz.itemName)
                })),
                Ez = null === (Fz = az.current) || void 0 === Fz ? void 0 : Fz.querySelector(`[data-craft-ingredient="${bz}"]`),
                nz = (0, xb.d)(zz.idx);
              Ez && nz && uz.push({
                kind: "ingredient",
                itemName: zz.itemName,
                amount: zz.amount,
                Rp: zz.idx,
                from: nz,
                to: (0, xb.d)(Ez),
                delayMs: Math.round(uz.length * pz),
                durationMs: Zz
              })
            }
            let Rz;
            if (null !== Mz && Oz > 0 && Vz.current) {
              const zz = uz.length > 0 ? uz[uz.length - 1].delayMs + .6 * Zz : 0;
              Rz = {
                itemName: tz,
                amount: Oz,
                Rp: Mz,
                from: (0, xb.d)(Vz.current),
                delayMs: Math.round(zz)
              }
            }
            Kz(Rz, zz && !nz ? Mz : null, uz), Nb.d.play("wood1", .5).rate(1.75)
          }
        },
        hz = (0, nz.useRef)(null);
      (0, nz.useEffect)((() => () => {
        clearInterval(hz.current)
      }), []);
      const Uz = (zz, uz) => {
          qz(zz, !1, !1), clearInterval(hz.current), uz && (hz.current = setTimeout((() => {
            hz.current = setInterval((() => {
              qz(zz, !1, !0)
            }), uz.intervalMs)
          }), uz.initialDelayMs))
        },
        cz = () => {
          clearInterval(hz.current)
        },
        gz = !Zz || Jz || Boolean(oz),
        Sz = (0, nz.useRef)(null),
        yz = null !== (bz = null === (Ez = (0, zE.c)()) || void 0 === Ez ? void 0 : Ez.hideButtonHints) && void 0 !== bz && bz,
        Dz = null !== (iz = null === (lz = (0, kb.f)()) || void 0 === lz ? void 0 : lz.getBoundButton("inventorySecondary")) && void 0 !== iz ? iz : null,
        Qz = () => !gz && (qz(!1, !0, !1), !0);
      (0, Ib.g)(Xz, {
        press: zz => "secondary" === zz ? Qz() : !gz && (Uz(!1, ME()), !0),
        release: cz,
        back: fz,
        hints: {
          primary: "inventoryCraft",
          secondary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      }), (0, Ib.g)(Sz, {
        press: Qz,
        back: fz,
        hints: {
          primary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      });
      const [Wz, ez] = (0, nz.useState)(0), [jz, Bz] = (0, nz.useState)(null);
      (0, nz.useEffect)((() => {
        if (!0 === Mz) {
          ez(0);
          const zz = setInterval((() => {
            ez((zz => zz + 1))
          }), 1e3);
          return () => {
            clearInterval(zz)
          }
        }
        return () => {}
      }), [Mz]);
      const Cz = null === Rz || void 0 === Rz ? void 0 : Rz.ingredientsCraftedFrom,
        Yz = (0, nz.useRef)(wz);
      (0, nz.useEffect)((() => {
        Yz.current = wz
      }), [wz]);
      const kz = !(null === oz || void 0 === oz || !oz.hideIngredients);
      (0, nz.useEffect)((() => {
        var zz, uz;
        if (!jz) return;
        if (kz) return Bz(null), void(null === (uz = Yz.current) || void 0 === uz || uz.call(Yz, !1));
        const bz = jz[Wz % jz.length];
        null === (zz = Yz.current) || void 0 === zz || zz.call(Yz, !0, tE(bz, vz, null === Cz || void 0 === Cz ? void 0 : Cz[bz]))
      }), [jz, Wz, vz, Cz, kz]);
      const zu = !!oz,
        uu = (0, nz.useRef)(!1);
      (0, nz.useEffect)((() => {
        var zz;
        zu && (clearInterval(hz.current), kz && uu.current && (uu.current = !1, null === (zz = Yz.current) || void 0 === zz || zz.call(Yz, !1)))
      }), [zu, kz]);
      const bu = (0, xb.t)(vz, tz);
      return (0, Oz.jsxs)("div", {
        ref: az,
        className: "CraftableInfo SmallTextBold",
        children: [(0, Oz.jsx)("div", {
          className: "CraftableHeader",
          children: (0, Oz.jsx)(Nz.b, {
            text: bu
          })
        }), !kz && (0, Oz.jsx)("div", {
          className: Fu()("CraftableIngredients", {
            Compact: dz.length >= 5
          }),
          style: {
            maxWidth: Gz
          },
          children: Tz.map(((zz, uz) => {
            const bz = zz.shownItems[Wz % zz.shownItems.length];
            return (0, Oz.jsx)(pE, {
              idx: uz,
              status: zz,
              shownItem: bz,
              dim: Lz,
              onHoverStart: () => {
                Bz(zz.shownItems)
              },
              onHoverEnd: () => {
                Bz(null), null === wz || void 0 === wz || wz(!1)
              },
              onPadBack: fz
            }, uz)
          }))
        }), oz && (0, Oz.jsx)("div", {
          className: "CantCraftInfo CraftableLockReason",
          children: (0, Oz.jsx)(Nz.b, {
            text: oz.reason
          })
        }), !oz && (!Zz || Jz) && (0, Oz.jsxs)("div", {
          className: "CantCraftInfo",
          children: [!Zz && "Missing ingredients", (0, Oz.jsx)("br", {}), Jz && "Inventory is full"]
        }), !kz && (0, Oz.jsxs)(Oz.Fragment, {
          children: [(0, Oz.jsxs)(iE, {
            ref: Xz,
            className: "DoCraftButton",
            onPointerDown: zz => {
              Uz((0, xb.w)(zz), (0, Cb.r)(zz.nativeEvent) ? ME() : lE)
            },
            onPointerUp: cz,
            onPointerLeave: cz,
            disabled: gz,
            children: [sz && Dz && !gz && !yz && (0, Oz.jsx)(Yb.e, {
              className: "CraftShortcutGlyph",
              glyph: Dz
            }), (0, Oz.jsx)("div", {
              ref: Vz,
              className: "DoCraftItem",
              onPointerEnter: () => {
                uu.current = !0, null === wz || void 0 === wz || wz(!0, tE(tz, vz))
              },
              onPointerLeave: () => {
                uu.current = !1, null === wz || void 0 === wz || wz(!1)
              },
              children: (0, Oz.jsx)(rb.c, {
                itemName: tz,
                amount: Fz
              })
            })]
          }), (0, Oz.jsxs)(iE, {
            ref: Sz,
            className: "DoCraftAllButton",
            onPointerDown: zz => {
              qz((0, xb.w)(zz), !0, !1)
            },
            disabled: gz,
            children: [(0, Oz.jsx)("span", {
              className: "CraftAllLabel",
              children: xz("general:craftAll")
            }), Az > 0 && (0, Oz.jsxs)("span", {
              className: "CraftAllCount",
              children: ["x", EE(Az)]
            })]
          })]
        })]
      })
    }

    function FE(zz) {
      let {
        selectedIdx: uz,
        hidden: bz
      } = zz;
      const Ez = (0, sb.p)(),
        iz = (0, nz.useRef)(null);
      return (0, nz.useLayoutEffect)((() => {
        const zz = iz.current,
          Ez = null === zz || void 0 === zz ? void 0 : zz.parentElement;
        if (!Ez || !zz) return;
        const nz = Ez.querySelector(".CraftableItems"),
          lz = () => {
            var iz, lz;
            if (bz) return void(zz.style.opacity = "0");
            const Mz = null === nz || void 0 === nz ? void 0 : nz.children[uz],
              tz = null === (iz = null !== (lz = null === Mz || void 0 === Mz ? void 0 : Mz.querySelector(".InvenItem")) && void 0 !== lz ? lz : Mz) || void 0 === iz ? void 0 : iz.getBoundingClientRect();
            if (!tz || 0 === tz.width) return void(zz.style.opacity = "0");
            const Hz = Ez.getBoundingClientRect();
            zz.style.opacity = "1", zz.style.width = `${tz.width}px`, zz.style.height = `${tz.height}px`, zz.style.transform = `translate(${tz.left-Hz.left+Ez.scrollLeft}px, ${tz.top-Hz.top+Ez.scrollTop}px)`
          };
        lz();
        const Mz = new MutationObserver(lz),
          tz = new ResizeObserver(lz);
        return tz.observe(Ez), nz && (Mz.observe(nz, {
          childList: !0,
          subtree: !0
        }), tz.observe(nz)), () => {
          Mz.disconnect(), tz.disconnect()
        }
      }), [uz, bz]), (0, Oz.jsx)("div", {
        ref: iz,
        className: Fu()("SelectionReticle", {
          Secondary: Ez
        })
      })
    }

    function ZE(zz, uz, bz) {
      return zz ? (0, Wb.e)(eb.k, zz) ? RE(zz, uz, bz) : zz : bz("classicGame:handCrafting")
    }

    function RE(zz, uz, bz) {
      var Ez;
      const nz = null === (Ez = uz[zz]) || void 0 === Ez ? void 0 : Ez.displayName;
      if ("string" === typeof nz) return bz(nz);
      const iz = Hz.gameBridge.latest("hiddenPlayerNames");
      return Array.isArray(nz) ? nz.map((zz => {
        if ("string" === typeof zz) return zz;
        if ("translationKey" in zz) return bz(zz.translationKey, (0, Iz.q)(zz.params, iz));
        if ("str" in zz) {
          if ("string" === typeof zz.str) return zz.str;
          if ("translationKey" in zz.str) return bz(zz.str.translationKey, (0, Iz.q)(zz.str.params, iz))
        }
        return ""
      })).join("") : nz && "translationKey" in nz ? bz(nz.translationKey, (0, Iz.q)(nz.params, iz)) : zz
    }

    function KE(zz, uz) {
      return zz === uz || null !== zz && null !== uz && zz.name === uz.name && zz.cO === uz.cO
    }

    function wE(zz) {
      var uz, bz, Ez;
      let {
        show: iz,
        onCraft: lz,
        dispatchSelectedCraftable: Mz,
        selectedCraftable: tz,
        craftingStation: pz,
        setHovered: dz
      } = zz;
      const {
        t: Fz
      } = (0, Iz.F)(), [Zz, Rz] = (0, nz.useState)(""), [Kz, wz] = (0, nz.useState)(0);
      (0, nz.useEffect)((() => {
        iz || (Rz(""), wz((zz => zz + 1)))
      }), [iz]);
      const [Xz, fz] = (0, nz.useState)(pz);
      Xz !== pz && (fz(pz), "" !== Zz && (Rz(""), wz((zz => zz + 1))));
      const sz = (0, nz.useRef)(null),
        rz = (0, nz.useRef)(null),
        oz = (0, Bb.k)(),
        Nz = oz.showing && "recipe" === oz.kind,
        [vz, xz] = (0, nz.useState)(0),
        Az = null !== pz && void 0 !== pz ? pz : null,
        Tz = (0, nz.useRef)(null),
        Lz = zz => {
          return !((uz = Tz.current) === (bz = zz) || null !== uz && null !== bz && uz.station === bz.station && KE(uz.recipe, bz.recipe)) && (Tz.current = zz, Hz.gameBridge.send("focusCrafting", zz), !0);
          var uz, bz
        };
      Lz(iz ? {
        station: Az,
        recipe: (null === (uz = Tz.current) || void 0 === uz ? void 0 : uz.station) === Az ? Tz.current.recipe : null
      } : null);
      let Pz = Hz.gameBridge.latest("crafting");
      const Gz = (0, Jz.h)("itemInfo"),
        az = "" !== Zz.trim(),
        Vz = (0, nE.F)(),
        mz = (0, nE.D)(),
        qz = (0, nE.H)(),
        hz = function(zz, uz) {
          const [bz, Ez] = (0, nz.useState)(!1);
          (0, nz.useEffect)((() => {
            if (!zz) return void Ez(!1);
            const uz = setTimeout((() => {
              Ez(!0)
            }), 0);
            return () => {
              clearTimeout(uz)
            }
          }), [zz]);
          const iz = zz && bz,
            lz = (0, nz.useRef)({
              station: uz,
              at: new Map
            });
          return (lz.current.station !== uz || !iz && lz.current.at.size > 0) && (lz.current = {
            station: uz,
            at: new Map
          }), iz ? lz.current.at : null
        }(iz, pz);
      let Uz = Pz.recipes.filter((zz => {
        let {
          listed: uz
        } = zz;
        return uz
      }));
      if (az) {
        const zz = [];
        for (const uz of Pz.recipes) {
          var cz;
          const bz = null !== (cz = mz.get(uz.name)) && void 0 !== cz && cz.hideIngredients ? [] : uz.requires.flatMap((zz => {
              let {
                items: uz
              } = zz;
              return uz.flatMap((zz => [zz, RE(zz, Gz, Fz)]))
            })),
            Ez = uE(Zz, [uz.name, RE(uz.name, Gz, Fz)], bz);
          null !== Ez && zz.push({
            item: uz,
            rank: Ez
          })
        }
        zz.sort(((zz, uz) => zz.rank - uz.rank)), Uz = zz.map((zz => {
          let {
            item: uz
          } = zz;
          return uz
        }))
      } else {
        if (hz && hz.size > 0) {
          const zz = Pz.recipes.filter((zz => !zz.listed && hz.has(HE(zz))));
          Uz = Uz.concat(zz)
        }
        Uz = (0, nE.k)(Uz, Vz, mz, qz), hz && (Uz = (0, nE.i)(Uz, hz, HE))
      }
      const gz = zz => Uz.find((uz => HE(uz) === zz)),
        Sz = `${pz}|${Zz}`,
        [yz, Dz] = (0, nz.useState)(null),
        Qz = (null === yz || void 0 === yz ? void 0 : yz.context) === Sz ? yz.key : null,
        Wz = tz ? HE(tz) : null,
        ez = null !== (bz = null !== (Ez = gz(Wz)) && void 0 !== Ez ? Ez : gz(Qz)) && void 0 !== bz ? bz : Uz[0],
        jz = ez ? HE(ez) : null,
        Bz = ez ? {
          name: ez.name,
          cO: ez.cO
        } : null;
      iz && Lz({
        station: Az,
        recipe: Bz
      }) && (Pz = Hz.gameBridge.latest("crafting")), jz !== Wz && jz !== Qz && Dz(jz ? {
        context: Sz,
        key: jz
      } : null), (0, nz.useEffect)((() => () => {
        Tz.current = null, Hz.gameBridge.send("focusCrafting", null)
      }), []);
      const Cz = KE(Pz.detail, Bz) ? Pz.detail : null,
        Yz = null !== Cz && !Cz.roomForOne,
        kz = Uz.findIndex((zz => HE(zz) === HE(ez))),
        zu = () => rz.current ? (0, Ib.e)(rz.current) : null,
        uu = (0, nz.useRef)(null),
        bu = (0, nz.useRef)(0);
      bu.current++;
      const Eu = bu.current;
      (0, nz.useEffect)((() => {
        const zz = uu.current;
        if (!zz || Eu <= zz.afterRender) return;
        if (uu.current = null, zz.key !== jz) return;
        const uz = zu();
        var bz;
        null !== uz && void 0 !== uz && uz.press("primary") && !zz.yM && (null === (bz = uz.release) || void 0 === bz || bz.call(uz))
      }));
      const nu = zz => {
          const uz = {
            name: zz.name,
            cO: zz.cO
          };
          return {
            choose: () => {
              Mz(uz), (0, fb.n)(rz.current)
            },
            craft: () => {
              var zz, bz;
              return Mz(uz), HE(uz) !== HE(ez) ? (uu.current = {
                key: HE(uz),
                yM: !0,
                afterRender: bu.current
              }, !0) : null !== (zz = null === (bz = zu()) || void 0 === bz ? void 0 : bz.press("primary")) && void 0 !== zz && zz
            },
            stopCraft: () => {
              var zz, uz;
              uu.current ? uu.current.yM = !1 : null === (zz = zu()) || void 0 === zz || null === (uz = zz.release) || void 0 === uz || uz.call(zz)
            },
            refuse: () => {
              HE(uz) !== HE(ez) && Mz(uz), xz((zz => zz + 1))
            }
          }
        },
        iu = () => {
          var zz, uz, bz;
          (0, fb.n)(null !== (zz = null === (uz = sz.current) || void 0 === uz || null === (bz = uz.querySelector(".CraftableItems")) || void 0 === bz ? void 0 : bz.children[kz]) && void 0 !== zz ? zz : null)
        },
        lu = Uz.map(HE).join("|"),
        Mu = (0, nz.useRef)(lu);
      return (0, nz.useEffect)((() => {
        Mu.current !== lu && (Mu.current = lu, Nz && kz >= 0 && (0, Bb.i)() && iu())
      })), (0, Oz.jsxs)("div", {
        className: "Craftables",
        children: [(0, Oz.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: ZE(pz, Gz, Fz)
        }), (0, Oz.jsxs)("div", {
          className: "CraftablesBody",
          children: [(0, Oz.jsx)(Ju.d, {
            className: "CraftingSearch",
            placeholderText: Fz("general:searchRecipes"),
            defaultValue: Zz,
            maxLength: 100,
            onValueChange: zz => {
              Rz(zz)
            },
            blurOnEnter: !0
          }, Kz), 0 === Uz.length && az && (0, Oz.jsx)("div", {
            className: "CraftingNoMatches SmallTextBold",
            children: Fz("general:noRecipesMatchSearch")
          }), Uz.length > 0 && (0, Oz.jsxs)(Oz.Fragment, {
            children: [(0, Oz.jsxs)("div", {
              ref: sz,
              className: "CraftablesLeftSide",
              children: [(0, Oz.jsx)(jb.b, {
                lazyLoadedClassName: "CraftableItems",
                observerUpdateDeps: [JSON.stringify(Uz.map((zz => {
                  let {
                    name: uz,
                    cO: bz,
                    haveIngredients: Ez
                  } = zz;
                  return {
                    name: uz,
                    cO: bz,
                    haveIngredients: Ez
                  }
                })))],
                observing: iz,
                children: Uz.map((zz => {
                  const {
                    name: uz,
                    cO: bz,
                    haveIngredients: Ez
                  } = zz, nz = HE(zz);
                  return (0, Oz.jsx)(OE, {
                    recipeId: nz,
                    itemName: uz,
                    onClick: () => {
                      Mz({
                        name: uz,
                        cO: bz
                      })
                    },
                    isSelected: HE(ez) === nz,
                    haveIngredients: Ez,
                    craftable: Ez && !mz.has(uz) && !(HE(ez) === nz && Yz),
                    setHovered: dz,
                    padActions: nu(zz),
                    marked: Vz.has(uz),
                    lock: mz.get(uz),
                    itemInfo: Gz
                  }, nz)
                }))
              }), (0, Oz.jsx)(FE, {
                selectedIdx: kz,
                hidden: Nz && oz.steppingSlots
              })]
            }), (0, Oz.jsx)(dE, {
              show: iz,
              recipeItem: ez,
              detail: Cz,
              onCraft: lz,
              setHovered: dz,
              craftButtonRef: rz,
              onPadBack: iu,
              showPadShortcut: Nz,
              refusedCount: vz,
              lock: mz.get(ez.name),
              itemInfo: Gz
            })]
          })]
        })]
      })
    }
    var XE = bz(9007),
      fE = bz(3043),
      sE = bz(2030),
      rE = bz(8337);
    class oE {
      constructor(zz, uz, bz) {
        this.commit = zz, this.delayMs = uz, this.defers = bz, this.pending = null, this.timer = void 0, this.yM = !1, this.flush = () => {
          clearTimeout(this.timer);
          const zz = this.pending;
          null !== zz && (this.pending = null, this.commit(zz))
        }
      }
      type(zz) {
        this.pending = zz, clearTimeout(this.timer), this.yM || this.defers() ? this.yM || (this.timer = setTimeout(this.flush, this.delayMs)) : this.flush()
      }
      getTyped(zz) {
        var uz;
        return null !== (uz = this.pending) && void 0 !== uz ? uz : zz
      }
      isHeld() {
        return this.yM
      }
      setHeld(zz) {
        this.yM = zz, zz || this.flush()
      }
    }

    function NE(zz) {
      return null === zz ? "creativeInventory:all" : `creativeInventory:${zz}`
    }

    function vE(zz) {
      let {
        category: uz
      } = zz;
      return null === uz ? (0, Oz.jsx)(Kz.c, {
        name: "layer-group"
      }) : (0, Oz.jsx)(rb.c, {
        itemName: XE.creativeItemCategoryIcons[uz],
        amount: 0
      })
    }

    function xE(zz) {
      let {
        labelKey: uz,
        isSelected: bz,
        onSelect: Ez,
        setHovered: nz,
        children: iz
      } = zz;
      return (0, Oz.jsx)("div", {
        className: Fu()("CreativeCategoryTab", {
          Selected: bz
        }),
        onClick: Ez,
        onPointerEnter: zz => {
          (0, xb.q)(zz) || nz(!0, {
            name: {
              translationKey: uz
            },
            desc: ""
          })
        },
        onPointerLeave: () => {
          nz(!1)
        },
        children: iz
      })
    }

    function JE(zz) {
      let {
        categories: uz,
        selectedCategory: bz,
        onSelect: Ez
      } = zz;
      const {
        t: iz
      } = (0, Iz.F)(), [lz, Mz] = (0, nz.useState)(!1), tz = (0, nz.useRef)(null), Hz = (0, nz.useCallback)((() => {
        Mz(!1)
      }), []);
      return (0, sE.b)(tz, Hz), (0, Oz.jsxs)("div", {
        className: "CreativeCategoryDropdown",
        ref: tz,
        children: [(0, Oz.jsxs)("div", {
          className: "CreativeCategoryDropdownButton",
          onClick: () => {
            Mz(!lz)
          },
          children: [(0, Oz.jsx)("div", {
            className: "CreativeCategoryIcon",
            children: (0, Oz.jsx)(vE, {
              category: bz
            })
          }), (0, Oz.jsx)("span", {
            children: iz(NE(bz))
          }), (0, Oz.jsx)(Kz.c, {
            name: lz ? "caret-up" : "caret-down"
          })]
        }), lz && (0, Oz.jsx)("div", {
          className: "CreativeCategoryDropdownMenu",
          children: uz.map((zz => (0, Oz.jsxs)("div", {
            className: Fu()("CreativeCategoryDropdownOption", {
              Selected: bz === zz
            }),
            onClick: () => {
              Ez(zz), Mz(!1)
            },
            children: [(0, Oz.jsx)("div", {
              className: "CreativeCategoryIcon",
              children: (0, Oz.jsx)(vE, {
                category: zz
              })
            }), (0, Oz.jsx)("span", {
              children: iz(NE(zz))
            })]
          }, null !== zz && void 0 !== zz ? zz : "all")))
        })]
      })
    }
    const AE = (0, nz.memo)((function(zz) {
      let {
        creativeScrollDiv: uz,
        playerInvenNumSlots: bz,
        getSetHoveringForIdx: Ez,
        getPointerDownForIdx: iz,
        getPointerUpForIdx: lz,
        creativeSearchVal: Mz,
        setCreativeSearchVal: Hz,
        creativeCategory: pz,
        setCreativeCategory: dz,
        show: Fz
      } = zz;
      const {
        t: Zz
      } = (0, Iz.F)(), Rz = (0, Jz.h)("creativeVisibility"), {
        userContext: wz
      } = (0, oz.c)(), Xz = (0, tz.g)("canUseDevCreativeItems"), fz = wz.playerHasRank("developer") || !!Xz, sz = (0, nz.useMemo)((() => LE("", Rz, fz)), [Rz, fz]), rz = (0, nz.useMemo)((() => {
        const zz = (0, XE.creativeItemIds)(),
          uz = new Set(sz.map((uz => (0, XE.creativeCategoryOf)(zz[uz]))));
        return XE.creativeItemCategories.filter((zz => uz.has(zz)))
      }), [sz]), Nz = null !== pz && rz.includes(pz) ? pz : null, xz = (0, nz.useMemo)((() => "" === Mz ? sz : LE(Mz, Rz, fz)), [sz, Mz, Rz, fz]), Az = (0, nz.useMemo)((() => {
        const zz = (0, XE.creativeItemIds)();
        return null !== Nz ? xz.filter((uz => (0, XE.creativeCategoryOf)(zz[uz]) === Nz)) : "" === Mz ? xz.filter((uz => !(0, XE.showOnlyInCreativeCategory)(zz[uz]))) : xz
      }), [xz, Nz, Mz]), Tz = Ez();

      function Lz(zz) {
        dz(zz), uz.current.scrollTop = 0
      }
      const Pz = [null, ...rz],
        {
          isTouchScreen: Gz
        } = (0, cz.m)(["isTouchScreen"]),
        az = !Gz,
        Vz = (0, nz.useRef)(null),
        [mz, qz] = (0, nz.useState)(0);
      (0, nz.useEffect)((() => {
        const zz = Vz.current;
        if (!zz) return;
        const uz = new ResizeObserver((zz => {
          qz(zz[0].contentRect.height)
        }));
        return uz.observe(zz), () => {
          uz.disconnect()
        }
      }), [az]);
      const hz = (0, nz.useRef)(null),
        Uz = (0, nz.useCallback)((function zz() {
          "up" === hz.current ? uz.current.scrollTop -= 10 : "down" === hz.current && (uz.current.scrollTop += 10), hz.current && requestAnimationFrame(zz)
        }), [uz]),
        gz = (0, nz.useCallback)((function(zz) {
          hz.current || (hz.current = zz, Uz())
        }), [Uz]);

      function Sz() {
        hz.current = null
      }
      const yz = (0, nz.useRef)({
        creativeSearchVal: Mz,
        setCreativeSearchVal: Hz
      });
      yz.current = {
        creativeSearchVal: Mz,
        setCreativeSearchVal: Hz
      };
      const [Dz] = (0, nz.useState)((() => new oE((zz => {
        yz.current.setCreativeSearchVal(zz)
      }), 250, sb.f))), Qz = zz => {
        var bz;
        null === (bz = uz.current) || void 0 === bz || bz.classList.toggle("CreativeItemSlotsStale", zz)
      };
      (0, vz.g)(rE.c, (zz => {
        Dz.setHeld(zz), zz || Qz(!1)
      })), (0, nz.useEffect)((() => Dz.flush), [Dz]);
      const Wz = (0, Oz.jsx)(Ju.d, {
          className: "CreativeItemSlotsSearch",
          placeholderText: "Search",
          defaultValue: Mz,
          maxLength: 1e4,
          onValueChange: (zz, uz) => {
            "" === Dz.getTyped(yz.current.creativeSearchVal) && "" !== zz && dz(null), Dz.type(zz), Qz(Dz.isHeld())
          },
          onEnter: Dz.flush,
          blurOnEnter: !0
        }),
        ez = (0, Oz.jsxs)("div", {
          className: "CreateItemSlotsScrollable",
          children: [Gz && (0, Oz.jsxs)("div", {
            className: "CreativeScrollButtons",
            children: [(0, Oz.jsx)("div", {
              className: "CreativeScrollButton Up",
              onPointerDown: () => {
                gz("up")
              },
              onPointerLeave: Sz,
              onPointerUp: Sz,
              children: (0, Oz.jsx)(Kz.c, {
                name: "arrow-up"
              })
            }), (0, Oz.jsx)("div", {
              className: "CreativeScrollButton Down",
              onPointerDown: () => {
                gz("down")
              },
              onPointerLeave: Sz,
              onPointerUp: Sz,
              children: (0, Oz.jsx)(Kz.c, {
                name: "arrow-up"
              })
            })]
          }), (0, Oz.jsxs)("div", {
            className: "CreativeItemSlots",
            ref: uz,
            children: [0 === Az.length && "" !== Mz && (0, Oz.jsx)("div", {
              className: "CreativeItemSlotsEmpty",
              children: Zz("general:noResults")
            }), (0, Oz.jsx)(jb.b, {
              lazyLoadedClassName: "CreativeItemSlotsInner",
              observerUpdateDeps: [Mz, Nz],
              observerRoot: "CreativeItemSlots",
              observing: Fz,
              children: Az.map((zz => {
                const uz = bz + zz;
                return (0, Oz.jsx)(Sb.c, {
                  idx: uz,
                  draggedInfo: null,
                  specialItemInfo: null,
                  setHovered: Ez(uz),
                  pointerDown: iz(uz),
                  pointerUp: lz(uz)
                }, uz)
              }))
            })]
          })]
        });
      return (0, Oz.jsxs)("div", {
        className: Fu()("CreativeItemSlotsWrapper", az ? "WithRail" : "WithDropdown"),
        children: [az && (0, Oz.jsx)("div", {
          className: "CreativeCategoryRail",
          ref: Vz,
          style: {
            "--rail-height": mz > 0 ? `${mz}px` : void 0,
            "--tab-rows": Math.ceil(Pz.length / 2)
          },
          children: Pz.map((zz => (0, Oz.jsx)(xE, {
            labelKey: NE(zz),
            isSelected: Nz === zz,
            onSelect: () => {
              Lz(zz)
            },
            setHovered: Tz,
            children: (0, Oz.jsx)(vE, {
              category: zz
            })
          }, null !== zz && void 0 !== zz ? zz : "all")))
        }), (0, Oz.jsxs)("div", {
          className: "CreativeItemSlotsMain",
          children: [(0, Oz.jsxs)("div", {
            className: "CreativeItemSlotsSearchRow",
            children: [Wz, !az && (0, Oz.jsx)(JE, {
              categories: Pz,
              selectedCategory: Nz,
              onSelect: Lz
            })]
          }), ez]
        })]
      })
    }));

    function TE(zz) {
      var uz;
      return null !== (uz = (0, fE.g)(zz)) && void 0 !== uz ? uz : ""
    }

    function LE(zz, uz, bz) {
      let {
        publicLobby: Ez,
        shownInGame: nz
      } = uz;
      const iz = zz.toLowerCase(),
        lz = (0, XE.creativeItemIds)(),
        Mz = zz => {
          var uz;
          const iz = lz[zz];
          return !(0, XE.itemIsDisabled)(iz, Ez, null === (uz = nz[TE(iz)]) || void 0 === uz || uz, bz)
        };
      if ("" === iz) return lz.map(((zz, uz) => uz)).filter((zz => !(0, XE.showOnlyInCreativeSearch)(lz[zz]))).filter(Mz);
      const tz = [];
      for (let Hz = 0; Hz < lz.length; Hz++) TE(lz[Hz]).toLowerCase().includes(iz) && tz.push(Hz);
      tz.sort(((zz, uz) => {
        const bz = TE(lz[zz]).toLowerCase(),
          Ez = TE(lz[uz]).toLowerCase();
        return bz.indexOf(iz) - Ez.indexOf(iz)
      }));
      for (const [Hz, Oz] of(0, XE.creativeAltNames)())
        for (const zz of Oz)
          if (zz.toLowerCase().includes(iz)) {
            const zz = lz.indexOf(Hz);
            tz.includes(zz) || tz.push(zz)
          } return tz.filter(Mz)
    }
    var PE = bz(36262),
      GE = bz(588);

    function aE(zz) {
      return zz > GE.j
    }

    function VE(zz) {
      const uz = zz / 2,
        bz = [];
      for (let Ez = 0; Ez < uz / 6; Ez++)
        for (let zz = 0; zz < 12; zz++) {
          const nz = zz < 6 ? 0 : uz;
          bz.push(nz + 6 * Ez + zz % 6)
        }
      return bz
    }

    function mE(zz) {
      let {
        numSlots: uz,
        renderSlot: bz
      } = zz;
      const {
        t: Ez
      } = (0, Iz.F)(), iz = (0, nz.useRef)(null);
      var lz;
      return lz = iz, (0, nz.useLayoutEffect)((() => {
        var zz;
        const uz = null === (zz = lz.current) || void 0 === zz ? void 0 : zz.closest(".InvenBody");
        if (!uz) return;
        const bz = () => {
          uz.style.zoom = "";
          const zz = parseFloat(getComputedStyle(document.documentElement).fontSize),
            bz = window.innerWidth - 2 * zz,
            Ez = uz.getBoundingClientRect().width;
          Ez > bz && (uz.style.zoom = "" + bz / Ez)
        };
        return bz(), window.addEventListener("resize", bz), () => {
          window.removeEventListener("resize", bz), uz.style.zoom = ""
        }
      }), [lz]), (0, Oz.jsxs)("div", {
        ref: iz,
        className: "ChestItemSlots DoubleChestSlots",
        children: [(0, Oz.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: Ez("doubleChest:title")
        }), (0, Oz.jsx)("div", {
          className: "GridItemSlots",
          children: VE(uz).map((zz => bz(zz)))
        })]
      })
    }

    function qE(zz) {
      let {
        pl: uz,
        initialPasskey: bz
      } = zz;
      const {
        t: Ez
      } = (0, Iz.F)(), [iz, lz] = (0, nz.useState)(bz), [Mz, tz] = (0, nz.useState)(bz);
      (0, nz.useEffect)((() => {
        lz(bz), tz(bz)
      }), [...uz]);
      return (0, Oz.jsxs)("div", {
        className: "IronChestPasskeyEditorWrapper",
        children: [(0, Oz.jsx)("div", {
          className: "SmallTextBold",
          children: Ez("ironChest:currentPasskey", {
            currentPasskey: iz.join("")
          })
        }), (0, Oz.jsx)(hb, {
          className: "IronChestPasskeyEditor",
          jH: Mz,
          onPasskeyUpdated: tz,
          confirmText: "ironChest:changePasskey",
          onConfirm: () => {
            Hz.gameBridge.send("changeIronChestPasskey", {
              pos: [...uz],
              jH: [...Mz]
            }), lz([...Mz])
          }
        })]
      })
    }

    function hE(zz) {
      let {
        variation: uz,
        canCraft: bz,
        show: Ez,
        creativeMounted: nz,
        specialItemRef: iz,
        draggedInfo: lz,
        getSetHovering: Mz,
        getPointerDownForIdx: tz,
        getPointerUpForIdx: Hz,
        enchantingTablePosition: pz,
        enchantingTableBlockName: dz,
        selectedCraftable: Fz,
        dispatchSelectedCraftable: Zz,
        creativeScrollDiv: Rz,
        creativeSearchVal: Kz,
        setCreativeSearchVal: wz,
        creativeCategory: Xz,
        setCreativeCategory: fz,
        onCraft: sz
      } = zz;
      const {
        userContext: rz
      } = (0, oz.c)(), {
        t: Nz
      } = (0, Iz.F)(), vz = (0, Jz.e)("inventory", (zz => zz.chest)), xz = (0, Jz.e)("inventory", (zz => zz.player.length)), Az = (0, Jz.e)("inventory", (zz => zz.creative));
      if (0 === xz) return null;
      let Tz, Lz;
      const Pz = zz => {
          const uz = xz + zz;
          return (0, Oz.jsx)(Sb.c, {
            idx: uz,
            draggedInfo: lz,
            specialItemInfo: iz.current,
            setHovered: Mz(uz),
            pointerDown: tz(uz),
            pointerUp: Hz(uz)
          }, uz)
        },
        Gz = vz ? (0, PE.d)(vz.type) : null;
      if (Gz) Tz = Fu()("InvenLeftSideChestCustom", Gz.className), Lz = (0, Oz.jsx)("div", {
        className: "ChestItemSlotsWrapper",
        children: Gz.render({
          pl: vz.pos,
          renderSlot: Pz
        })
      });
      else if (vz) {
        const zz = vz.pos,
          uz = "Iron" === vz.type || "Moonstone" === vz.type ? vz.type : "Standard";
        let bz = !1,
          Ez = null;
        "Iron" === uz && (bz = vz.ironChest.ownerDbId === rz.whamm, Ez = vz.ironChest.jH), Tz = `InvenLeftSideChest${uz}`;
        const nz = aE(vz.numSlots);
        Lz = (0, Oz.jsxs)("div", {
          className: "ChestItemSlotsWrapper",
          children: [bz && (0, Oz.jsx)(qE, {
            pl: zz,
            initialPasskey: Ez
          }), nz && (0, Oz.jsx)(mE, {
            numSlots: vz.numSlots,
            renderSlot: Pz
          }), !nz && (0, Oz.jsxs)("div", {
            className: "ChestItemSlots",
            children: [(0, Oz.jsx)("div", {
              className: "InvenLeftSideHeader SmallTextBold",
              children: Nz("Moonstone" === uz ? "item:moonstoneChest" : "Iron" === uz ? "item:ironChest" : "item:chest")
            }), (0, Oz.jsx)("div", {
              className: "GridItemSlots",
              children: new Array(vz.numSlots).fill(0).map(((zz, uz) => Pz(uz)))
            })]
          })]
        })
      } else if (!Az || uz && bz)
        if (bz && "Enchanting Table" === uz) Tz = `InvenLeftSide${(null!==dz&&void 0!==dz?dz:"").replace(/ /gi,"")}`, Lz = (0, Oz.jsx)(yb, {
          specialItemInfo: iz.current,
          setHovered: Mz,
          pointerDown: tz(Ab.d),
          pointerUp: Hz(Ab.d),
          enchantingTablePosition: pz,
          enchantingTableBlockName: dz
        });
        else if (bz && "Salvaging Table" === uz) Tz = "InvenLeftSideSalvagingTable", Lz = (0, Oz.jsx)(Qb, {
        specialItemInfo: iz.current,
        setSpecialItemInfo: zz => {
          iz.current = zz
        },
        setHovered: Mz,
        pointerDown: tz(Ab.d),
        pointerUp: Hz(Ab.d)
      });
      else {
        if (!bz) return null;
        Tz = `InvenLeftSide${(null!==uz&&void 0!==uz?uz:"HandCrafting").replace(/ /gi,"")}`, Lz = (0, Oz.jsx)(wE, {
          show: Ez,
          onCraft: sz,
          craftingStation: uz,
          selectedCraftable: Fz,
          dispatchSelectedCraftable: Zz,
          setHovered: Mz()
        })
      } else Tz = "InvenLeftSideCreative", Lz = nz ? (0, Oz.jsx)(AE, {
        creativeScrollDiv: Rz,
        playerInvenNumSlots: xz,
        getSetHoveringForIdx: Mz,
        getPointerDownForIdx: tz,
        getPointerUpForIdx: Hz,
        creativeSearchVal: Kz,
        setCreativeSearchVal: wz,
        creativeCategory: Xz,
        setCreativeCategory: fz,
        show: Ez
      }) : null;
      const az = !!vz || bz && !!uz;
      return (0, Oz.jsx)("div", {
        className: `InvenLeftSide ${Tz}`,
        "data-pad-inventory-start": az ? "" : void 0,
        children: Lz
      })
    }
    var UE = bz(584),
      cE = bz(20022),
      gE = bz(20027),
      SE = bz(20032);
    const yE = {
      Helmet: {
        sprite: "empty_armor_slot_helmet",
        image: bz(20041)
      },
      Chestplate: {
        sprite: "empty_armor_slot_chestplate",
        image: gE
      },
      Gauntlets: {
        sprite: "empty_armor_slot_gauntlets",
        image: SE
      },
      Leggings: {
        sprite: "empty_armor_slot_leggings",
        image: bz(20048)
      },
      Boots: {
        sprite: "empty_armor_slot_boots",
        image: cE
      }
    };

    function DE(zz) {
      const {
        sprite: uz,
        image: bz
      } = yE[zz];
      return tb(uz, ib.m.ITEM, bz)
    }

    function QE(zz) {
      let {
        draggedInfo: uz,
        specialItemInfo: bz,
        craftFlyAnims: Ez,
        getSetHovering: nz,
        getPointerDownForIdx: iz,
        getPointerUpForIdx: lz,
        variation: Mz,
        canCraft: tz,
        isNewSlot: Hz
      } = zz;
      const pz = (0, Jz.e)("inventory", (zz => zz.player.length));
      return 0 === pz ? null : (0, Oz.jsxs)("div", {
        className: "InvenBodyRight",
        children: [(0, Oz.jsx)("div", {
          className: "ArmourItemSlots",
          children: new Array(UE.c.length).fill(0).map(((zz, dz) => {
            const Fz = pz - UE.c.length + dz;
            return (0, Oz.jsx)(Sb.c, {
              idx: Fz,
              draggedInfo: uz,
              specialItemInfo: bz,
              craftFlyHoldbackInfo: (0, Jb.k)(Ez, Fz),
              setHovered: nz(Fz),
              pointerDown: iz(Fz),
              pointerUp: lz(Fz),
              defaultIconB64: DE(UE.c[dz]),
              variation: tz ? Mz : void 0,
              showNewDot: Hz(Fz)
            }, Fz)
          }))
        }), (0, Oz.jsx)("div", {
          className: "GridItemSlots",
          children: new Array(pz - 10 - UE.c.length).fill(0).map(((zz, dz) => {
            const Fz = pz - UE.c.length - dz - 1;
            return (0, Oz.jsx)(Sb.c, {
              idx: Fz,
              draggedInfo: uz,
              specialItemInfo: bz,
              craftFlyHoldbackInfo: (0, Jb.k)(Ez, Fz),
              setHovered: nz(Fz),
              pointerDown: iz(Fz),
              pointerUp: lz(Fz),
              variation: tz ? Mz : void 0,
              showNewDot: Hz(Fz)
            }, Fz)
          }))
        })]
      })
    }
    var WE = bz(36265),
      eE = bz(36274);

    function jE(zz) {
      const {
        e: uz,
        idx: bz
      } = zz, Ez = (0, xb.i)(zz.readInventory(), bz), nz = (0, xb.p)(uz);
      bz === Ab.b ? function(zz, uz) {
        const {
          draggedInfoRef: bz,
          removeItem: Ez,
          removeDraggedInfoRef: nz,
          close: iz
        } = zz;
        if (bz.current) {
          const zz = uz && bz.current.amount || 1;
          Ez(bz.current.idx, zz, !0) && (bz.current.amount -= zz, bz.current.amount <= 0 && nz())
        } else uz && iz()
      }(zz, nz) : bz === Ab.d ? function(zz, uz) {
        const {
          e: bz,
          draggedInfoRef: Ez,
          specialItemRef: nz,
          moveAmtIntoSlot: iz,
          removeDraggedInfoRef: lz
        } = zz;
        if ((0, xb.w)(bz) && nz.current) nz.current = null;
        else if (Ez.current && nz.current && (Ez.current.idx === nz.current.idx || (0, eE.b)(Ez.current, nz.current)) && Ez.current.amount > 0 && nz.current.amount > 0 && nz.current.amount < mb.e.maxItemStackSize)
          if (Ez.current.idx === nz.current.idx) {
            if (uz) {
              const zz = Math.min(Ez.current.amount, mb.e.maxItemStackSize - nz.current.amount);
              nz.current.amount += zz, Ez.current.amount -= zz
            } else Ez.current.amount--, nz.current.amount++;
            Ez.current.amount <= 0 && lz()
          } else if (uz) {
          const zz = Math.min(Ez.current.amount, mb.e.maxItemStackSize - nz.current.amount);
          iz(nz.current.idx, zz) && (nz.current.amount += zz)
        } else {
          iz(nz.current.idx, 1) && nz.current.amount++
        } else if (!Ez.current || nz.current || uz) {
          const zz = Ez.current;
          Ez.current = nz.current, nz.current = zz
        } else Ez.current.amount--, nz.current = {
          idx: Ez.current.idx,
          name: Ez.current.name,
          attributes: Ez.current.attributes,
          amount: 1
        }
      }(zz, nz) : (0, xb.w)(uz) ? function(zz, uz) {
        var bz, Ez;
        const {
          idx: nz,
          draggedInfoRef: iz,
          specialItemRef: lz,
          canCraft: Mz,
          variation: tz,
          swapSlots: Hz,
          moveIntoSlots: Oz
        } = zz;
        if (!uz) return;
        let pz = uz.amount;
        nz === (null === (bz = iz.current) || void 0 === bz ? void 0 : bz.idx) && (pz = iz.current.amount <= 0 ? 0 : uz.amount - iz.current.amount);
        nz === (null === (Ez = lz.current) || void 0 === Ez ? void 0 : Ez.idx) && (pz = lz.current.amount <= 0 ? 0 : uz.amount - lz.current.amount);
        if (0 === pz) return;
        const dz = zz.readInventory(),
          Fz = dz.player.length,
          Zz = dz.chest,
          Rz = Fz - UE.c.length,
          Kz = () => {
            if (!(0, sb.f)()) return void Oz(10, Rz, nz, pz);
            const zz = zz => {
              const bz = (0, xb.i)(dz, zz);
              return bz ? {
                amount: bz.amount,
                stacksWithMoved: (0, eE.b)(bz, uz)
              } : null
            };
            for (const uz of ((zz, uz, bz, Ez, nz) => {
                const iz = [];
                let lz = Ez;
                if (null !== Ez) {
                  let Mz = 0;
                  for (let Ez = uz; Ez < bz; Ez++) {
                    const uz = zz(Ez);
                    null !== uz && void 0 !== uz && uz.stacksWithMoved && null !== uz.amount && uz.amount > 0 && (Mz += Math.max(0, nz - uz.amount))
                  }
                  const tz = Math.min(Ez, Mz);
                  if (tz > 0 && (iz.push({
                      start: uz,
                      end: bz,
                      amount: tz
                    }), lz = Ez - tz), lz <= 0) return iz
                }
                for (let Mz = bz - 1; Mz >= uz; Mz--)
                  if (null === zz(Mz)) {
                    iz.push({
                      start: Mz,
                      end: Mz + 1,
                      amount: lz
                    });
                    break
                  } return iz
              })(zz, 10, Rz, pz, mb.e.maxItemStackSize)) Oz(uz.start, uz.end, nz, uz.amount)
          };
        if (!Mz || "Enchanting Table" !== tz && "Salvaging Table" !== tz) {
          const bz = (0, xz.Bb)(uz.name),
            Ez = bz ? (0, xz.zb)(bz) : null;
          if (!UE.c.includes(bz) || nz !== Ez && (0, xb.m)(dz, zz.itemInfo, Ez, nz))
            if (Zz)
              if (nz < Fz) {
                var wz, Xz;
                const [zz, uz] = null !== (wz = null === (Xz = (0, PE.d)(Zz.type)) || void 0 === Xz ? void 0 : Xz.quickMoveRange) && void 0 !== wz ? wz : [0, Zz.numSlots];
                Oz(Fz + zz, Fz + uz, nz, pz)
              } else Oz(0, Fz - UE.c.length, nz, pz);
          else dz.creative ? nz < 10 ? Kz() : nz < Fz ? Oz(0, 10, nz, pz) : Oz(0, Fz - UE.c.length, nz, null !== uz.amount ? mb.e.maxItemStackSize : null) : nz < 10 ? Kz() : Oz(0, 10, nz, pz);
          else nz < Fz - UE.c.length || nz >= Fz ? Hz(Ez, nz) : (Oz(0, Fz - UE.c.length, Ez, pz), Nb.d.play("equip_leather1", 1).rate(.9 + .3 * Math.random()))
        } else lz.current = {
          idx: nz,
          name: uz.name,
          attributes: uz.attributes,
          amount: null !== uz.amount ? pz : 0
        }
      }(zz, Ez) : zz.draggedInfoRef.current ? function(zz, uz, bz, Ez) {
        const {
          draggedInfoRef: nz,
          specialItemRef: iz,
          moveAmtIntoSlot: lz,
          swapSlots: Mz,
          removeItem: tz,
          removeDraggedInfoRef: Hz
        } = zz, Oz = zz.readInventory(), pz = nz.current.idx;
        if (bz && (uz === pz || (0, eE.b)(nz.current, bz)) && nz.current.amount > 0 && (0, xb.c)(bz) > 0 && (bz.amount < mb.e.maxItemStackSize || uz === pz)) Ez ? bz.amount + nz.current.amount <= mb.e.maxItemStackSize || uz === pz ? lz(uz, nz.current.amount) : lz(uz, mb.e.maxItemStackSize - bz.amount) : lz(uz, 1);
        else if (nz.current.amount > 0 && !bz) lz(uz, Ez ? nz.current.amount : 1);
        else if (Ez || bz || 0 === nz.current.amount)
          if (Oz.creative && !Oz.chest && uz >= Oz.player.length) {
            const zz = 0 === nz.current.amount ? 1 : nz.current.amount;
            tz(nz.current.idx, zz, !1) && Hz()
          } else {
            var dz;
            const bz = (null === (dz = iz.current) || void 0 === dz ? void 0 : dz.idx) === uz;
            if (Mz(uz, nz.current.idx)) {
              const Ez = zz.readInventory(),
                lz = (0, xb.i)(Ez, pz),
                Mz = !Ez.chest && Ez.creative && nz.current.idx >= Ez.player.length;
              if (lz && nz.current.idx !== uz && !Mz) {
                let zz = (0, xb.c)(lz);
                bz && (zz -= iz.current.amount), nz.current = bz && 0 === zz ? null : {
                  idx: nz.current.idx,
                  name: lz.name,
                  attributes: lz.attributes,
                  amount: zz
                }
              } else Hz()
            }
          }
        else lz(uz, 1)
      }(zz, bz, Ez, nz) : function(zz, uz, bz, Ez) {
        var nz;
        const {
          draggedInfoRef: iz,
          specialItemRef: lz
        } = zz;
        if (!bz) return;
        let Mz = (0, xb.c)(bz);
        const tz = (null === (nz = lz.current) || void 0 === nz ? void 0 : nz.idx) === uz;
        tz && (Mz -= lz.current.amount);
        Ez || (Mz = Math.ceil(Mz / 2));
        iz.current = tz && 0 === Mz ? null : {
          idx: uz,
          name: bz.name,
          attributes: bz.attributes,
          amount: Mz
        }
      }(zz, bz, Ez, nz)
    }

    function IE(zz, uz) {
      return !!uz && uz.name === zz.name
    }

    function BE() {
      return Hz.gameBridge.latest("inventory")
    }

    function CE(zz, uz, bz) {
      return Hz.gameBridge.send("removeInventoryItem", {
        slot: zz,
        amount: uz,
        drop: bz
      })
    }

    function YE(zz) {
      return (0, xb.h)(zz, Hz.gameBridge.latest("itemInfo"), Hz.gameBridge.latest("stationItems").enchantable)
    }

    function kE(zz) {
      let {
        show: uz,
        close: bz,
        canCraft: Ez,
        variation: iz,
        inventoryItemsMoveable: lz,
        setCraftFlyAnims: Mz
      } = zz;
      (0, Jz.h)("itemInfo");
      const [tz, Oz] = (0, nz.useState)(null), [pz, dz] = (0, nz.useState)(null), [Fz, Zz] = (0, nz.useState)(!1), Rz = (0, nz.useRef)(null), Kz = (0, nz.useRef)(null), wz = (0, nz.useRef)(null), Xz = (0, nz.useRef)(null), [fz, sz] = (0, nz.useReducer)((zz => zz + 1), 0), rz = (0, nz.useCallback)((() => {
        uz && sz()
      }), [uz, sz]), oz = (0, nz.useCallback)((() => {
        Kz.current = null, mz.current = null, rz()
      }), [rz]), Nz = (0, nz.useCallback)(((zz, uz) => {
        Mz((bz => bz.map((bz => "ingredient" === bz.kind ? bz : bz.Rp === zz ? {
          ...bz,
          Rp: uz,
          to: (0, xb.d)(uz)
        } : bz.Rp === uz ? {
          ...bz,
          Rp: zz,
          to: (0, xb.d)(zz)
        } : bz))))
      }), [Mz]), vz = (0, nz.useCallback)(((zz, uz) => {
        const bz = Uz.current;
        if (bz.x = zz, bz.y = uz, Rz.current) !cz.current.isTouch || cz.current.itemBeingDragged && !mz.current ? (Rz.current.style.transform = `translate(${bz.x}px, ${bz.y}px)`, Zz(cz.current.isTouch && !mz.current)) : (Rz.current.style.transform = "translate(0.5rem, 0.5rem)", Zz(!0));
        else if (Xz.current) {
          const bz = Xz.current;
          let Ez = zz + 10,
            nz = uz + 10;
          const iz = bz.offsetWidth,
            lz = bz.offsetHeight;
          Ez + iz > window.innerWidth && (Ez = zz - iz - 10), nz + lz > window.innerHeight && (nz = uz - lz - 10), Ez < 0 && (Ez = 0), nz < 0 && (nz = 0), Xz.current.style.transform = `translate(${Ez}px, ${nz}px)`
        }
      }), []), Az = (0, nz.useCallback)((zz => (uz, bz, Ez) => {
        if (Oz(uz && void 0 !== zz ? zz : null), uz) {
          if (void 0 === zz && !bz) return void(0, WE.e)("Error in invenComp", new Error("isHovering true but no idx or text"));
          if (void 0 !== zz) {
            var nz;
            const uz = BE();
            let bz;
            if (bz = zz === Ab.d ? wz.current ? (0, xb.i)(uz, wz.current.idx) : null : (0, xb.i)(uz, zz), !bz) return void dz(null);
            if ((null === (nz = wz.current) || void 0 === nz ? void 0 : nz.idx) === zz) {
              if (0 === (0, xb.c)(bz) - wz.current.amount) return void dz(null)
            }
            dz(YE(bz))
          } else dz({
            name: bz.name,
            desc: bz.desc,
            fontStyle: "normal"
          })
        } else dz(null);
        Ez && setTimeout((() => {
          vz(Ez.pageX, Ez.pageY)
        }), 0)
      }), [vz]), Tz = (0, nz.useCallback)(((zz, uz) => {
        const bz = Hz.gameBridge.send("moveInventoryItem", {
          from: Kz.current.idx,
          to: zz,
          amount: uz
        });
        return bz ? (Kz.current.amount -= uz, Kz.current.amount <= 0 && oz()) : console.error("moveInventoryItem failed"), bz
      }), [oz]), Lz = (0, nz.useCallback)(((zz, uz) => {
        const bz = wz.current,
          Ez = null === bz || void 0 === bz ? void 0 : bz.idx;
        bz && (bz.idx = function(zz, uz, bz) {
          return zz === uz ? bz : zz === bz ? uz : zz
        }(Ez, zz, uz));
        const nz = Hz.gameBridge.send("swapInventorySlots", {
          a: zz,
          b: uz
        });
        return nz ? Nz(zz, uz) : bz && (bz.idx = Ez), nz
      }), [Nz]), Pz = (0, nz.useCallback)(((zz, uz, bz, Ez) => {
        const nz = Hz.gameBridge.send("quickMoveInventoryItem", {
          slot: bz,
          start: zz,
          end: uz,
          amount: Ez
        });
        null !== nz && Nz(bz, nz)
      }), [Nz]), Gz = (0, nz.useCallback)(((zz, uz) => {
        var nz;
        ((zz, uz, bz) => {
          const Ez = zz - (bz - UE.c.length);
          return !(!uz || Ez < 0 || Ez >= UE.c.length) && (0, xz.Bb)(uz) !== UE.c[Ez]
        })(uz, null === (nz = Kz.current) || void 0 === nz ? void 0 : nz.name, BE().player.length) || (jE({
          e: zz,
          idx: uz,
          readInventory: BE,
          itemInfo: Hz.gameBridge.latest("itemInfo"),
          draggedInfoRef: Kz,
          specialItemRef: wz,
          moveAmtIntoSlot: Tz,
          swapSlots: Lz,
          moveIntoSlots: Pz,
          removeItem: CE,
          removeDraggedInfoRef: oz,
          close: bz,
          canCraft: Ez,
          variation: iz
        }), rz())
      }), [Ez, bz, Tz, Pz, oz, Lz, iz, rz]), az = (0, nz.useRef)(0), Vz = (0, nz.useRef)(null), mz = (0, nz.useRef)(null), qz = (0, nz.useRef)(null), hz = (0, nz.useRef)(new Set), Uz = (0, nz.useRef)({
        x: 0,
        y: 0
      }), cz = (0, nz.useRef)({
        isTouch: !1,
        itemBeingDragged: !1
      }), gz = (0, nz.useCallback)((() => (qz.current = null, cz.current.itemBeingDragged = !1, clearTimeout(Vz.current), !!mz.current && (mz.current = null, rz(), !0))), [rz]);
      (0, nz.useEffect)((() => {
        gz(), hz.current.clear()
      }), [uz]);
      const Sz = zz => void 0 !== zz && (hz.current.has(zz) || null !== qz.current && zz !== qz.current),
        yz = zz => {
          cz.current.isTouch = (0, xb.q)(zz)
        },
        Dz = (0, nz.useCallback)((zz => uz => {
          const Ez = (0, xb.q)(uz);
          if (Ez || vz(uz.pageX, uz.pageY), lz)
            if (Sz(uz.pointerId)) void 0 !== uz.pointerId && hz.current.add(uz.pointerId);
            else {
              if (yz(uz), Ez) {
                az.current = uz.timeStamp, cz.current.itemBeingDragged = !0, qz.current = uz.pointerId;
                const bz = (0, xb.i)(BE(), zz);
                if (bz && bz.amount && bz.amount > 0) {
                  const bz = uz.pageX,
                    Ez = uz.pageY,
                    nz = Uz.current.x,
                    iz = Uz.current.y;
                  clearTimeout(Vz.current), Vz.current = setTimeout((() => {
                    if (Kz.current && Kz.current.idx === zz && (Math.abs(bz - Uz.current.x) < 20 && Math.abs(Ez - Uz.current.y) < 20 || nz === Uz.current.x && iz === Uz.current.y) && cz.current.itemBeingDragged) {
                      const zz = BE(),
                        bz = zz.creative && !zz.chest && Kz.current.idx >= mb.e.numInvenSlots && null !== (0, xb.i)(zz, Kz.current.idx).amount ? mb.e.maxItemStackSize : Kz.current.amount;
                      mz.current = {
                        initTouchX: uz.pageX,
                        initTouchY: uz.pageY,
                        maxAmount: bz
                      }, Kz.current.amount = Math.ceil(Kz.current.amount / 2), Rz.current.style.transform = "translate(0.5rem, 0.5rem)", Zz(!0), rz()
                    }
                  }), 500)
                }
              }
              Gz(uz, zz)
            }
          else zz === Ab.b && (0, xb.p)(uz) && bz()
        }), [vz, Gz, lz, bz, rz]),
        Qz = (0, nz.useCallback)((zz => zz => {
          if (Sz(zz.pointerId)) return;
          const uz = (0, xb.q)(zz);
          if (yz(zz), !gz()) {
            if (uz && Kz.current && zz.timeStamp - az.current > 150) {
              const uz = document.elementFromPoint(zz.clientX, zz.clientY);
              if (null !== uz) {
                const bz = uz.getAttribute("data-inven-idx");
                null !== bz ? Gz(zz, parseInt(bz)) : uz.classList.contains("InventoryBackgroundScreen") && Gz(zz, -1)
              }
            }
            vz(zz.pageX, zz.pageY)
          }
        }), [vz, Gz, gz]);
      (0, nz.useEffect)((() => {
        let zz;
        const bz = ["pointerup", "pointercancel"],
          Ez = zz => {
            hz.current.has(zz.pointerId) ? setTimeout((() => {
              hz.current.delete(zz.pointerId)
            }), 0) : zz.pointerId === qz.current && setTimeout((() => {
              qz.current === zz.pointerId && gz()
            }), 0)
          };
        if (uz) {
          for (const zz of bz) document.addEventListener(zz, Ez, !0);
          if (!cz.current.isTouch) {
            const zz = Uz.current;
            vz(zz.x, zz.y)
          }
          zz = zz => {
            zz.preventDefault(), Sz(zz.pointerId) || (yz(zz), vz(zz.pageX, zz.pageY), mz.current && zz.pointerId === qz.current && (zz => {
              if (!Kz.current) return mz.current = null, void rz();
              const {
                initTouchX: uz,
                maxAmount: bz
              } = mz.current, Ez = (zz.pageX - uz) * mz.current.maxAmount / 160, nz = Math.ceil(bz / 2) + Math.ceil(Ez);
              Kz.current.amount = Math.min(bz, Math.max(1, nz)), rz()
            })(zz))
          }, document.addEventListener("pointermove", zz, !0)
        }
        return () => {
          document.removeEventListener("pointermove", zz, !0);
          for (const zz of bz) document.removeEventListener(zz, Ez, !0)
        }
      }));
      const Wz = (0, nz.useCallback)((() => {
          if (Kz.current) {
            const zz = (0, xb.i)(BE(), Kz.current.idx);
            (!IE(Kz.current, zz) || zz.amount < Kz.current.amount) && oz()
          }
        }), [oz]),
        ez = (0, nz.useCallback)((() => {
          const zz = Kz.current;
          if (zz) {
            const uz = (0, xb.i)(BE(), zz.idx);
            IE(zz, uz) && (zz.attributes = uz.attributes)
          }
        }), []);
      return {
        draggedDomRef: Rz,
        draggedInfoRef: Kz,
        specialItemRef: wz,
        hoverInfoDomRef: Xz,
        longHoldSplitInfoRef: mz,
        currHoveredIdx: tz,
        currHoveredDisplayInfo: pz,
        displayDraggedItemName: Fz,
        forceRerenderIfVisible: rz,
        removeDraggedInfoRef: oz,
        checkDraggedItemConsistencyWithInven: Wz,
        refreshDraggedAttributes: ez,
        swapSlots: Lz,
        getPointerDownForIdx: Dz,
        getPointerUpForIdx: Qz,
        getSetHovering: Az,
        setCurrHoveredDisplayInfo: dz,
        moveFollowerTo: vz
      }
    }
    class zn {
      constructor(zz) {
        this.snapshot = [], this.newSlots = new Set, this.update(zz, !1)
      }
      update(zz, uz) {
        const bz = zz.map((zz => {
          var uz;
          return zz ? {
            name: zz.name,
            amount: null !== (uz = zz.amount) && void 0 !== uz ? uz : 1
          } : null
        }));
        bz.forEach(((zz, bz) => {
          const Ez = this.snapshot[bz],
            nz = (null === zz || void 0 === zz ? void 0 : zz.name) !== (null === Ez || void 0 === Ez ? void 0 : Ez.name);
          (!zz || nz || zz.amount < Ez.amount) && this.newSlots.delete(bz), uz && zz && (nz || zz.amount > Ez.amount) && this.newSlots.add(bz)
        })), this.snapshot = bz
      }
      clearMarks() {
        this.newSlots.clear()
      }
      isNew(zz) {
        return this.newSlots.has(zz)
      }
    }
    const un = (zz, uz, bz) => ({
      button: uz,
      shiftKey: bz,
      pageX: zz.clientX,
      pageY: zz.clientY,
      clientX: zz.clientX,
      clientY: zz.clientY,
      pointerType: "mouse"
    });

    function bn(zz) {
      const [uz, bz] = (0, nz.useState)(zz);
      return zz && !uz && bz(!0), (0, nz.useEffect)((() => {
        if (uz) return;
        let zz = !0;
        const Ez = () => {
            zz && (zz = !1, bz(!0))
          },
          nz = "function" === typeof window.requestIdleCallback,
          iz = nz ? window.requestIdleCallback(Ez, {
            timeout: 2e3
          }) : void 0,
          lz = setTimeout(Ez, nz ? 2e3 : 1e3);
        return () => {
          zz = !1, clearTimeout(lz), void 0 !== iz && window.cancelIdleCallback(iz)
        }
      }), [uz]), uz
    }
    const En = (0, nz.memo)((function(zz) {
      var uz;
      let {
        show: bz,
        onOpen: Ez,
        onClose: iz,
        variation: Mz
      } = zz;
      const pz = (0, nz.useRef)(null),
        dz = (0, nz.useRef)(null),
        Fz = function(zz) {
          const [uz, bz] = (0, nz.useState)(!0), [Ez, iz] = (0, nz.useState)(!1), lz = (0, nz.useRef)(null), Mz = (0, nz.useRef)(null), Hz = (0, tz.g)("_shield"), Oz = (0, nz.useRef)(null), pz = (0, tz.g)("_health"), dz = (0, nz.useRef)(null);

          function Fz(zz) {
            const uz = Date.now() + zz;
            uz < Mz.current || (bz(!1), clearTimeout(lz.current), Mz.current = uz, lz.current = setTimeout((() => {
              bz(!0)
            }), zz))
          }
          return (0, nz.useEffect)((() => {
            Fz(Lb);
            const zz = Zz.k.subscribe("requestingPlayVideoAd", (() => {
              Fz(Lb)
            }));
            return () => {
              clearTimeout(lz.current), Zz.k.unsubscribe(zz)
            }
          }), []), (0, nz.useEffect)((() => {
            (Oz.current > Hz || dz.current > pz) && Fz(6e4), Oz.current = Hz, dz.current = pz
          }), [Hz, pz]), (0, nz.useEffect)((() => {
            let uz = null;
            return zz ? uz = setTimeout((() => {
              iz(!0)
            }), 250) : iz(!1), () => {
              clearTimeout(uz)
            }
          }), [zz]), uz && Ez
        }(bz);
      (0, vz.h)(Xb.c, null);
      const Rz = (0, Xb.h)(),
        Kz = Rz.some((zz => zz.panel)),
        wz = (0, Jz.e)("inventory", (zz => null !== zz.chest && (null !== zz.chest.ironChest || aE(zz.chest.numSlots)))),
        Xz = bn(bz),
        fz = bn(bz),
        [sz, rz] = (0, nz.useState)([]),
        oz = (0, nz.useCallback)((zz => {
          rz((uz => uz.filter((uz => uz.id !== zz))))
        }), []),
        Nz = (0, nz.useRef)(null),
        Az = (0, nz.useRef)(0),
        Tz = (0, nz.useCallback)((() => {
          Nz.current && (Az.current = Nz.current.scrollTop), iz()
        }), [iz]),
        Lz = (0, tz.g)("inventoryItemsMoveable"),
        Pz = (0, tz.g)("canCraft"),
        {
          clientEscMenuOptions: Gz
        } = (0, cz.m)(["clientEscMenuOptions"]),
        az = (0, nz.useRef)(null);
      az.current || (az.current = new zn(Hz.gameBridge.latest("inventory").player));
      const mz = az.current,
        {
          draggedDomRef: qz,
          draggedInfoRef: hz,
          specialItemRef: Uz,
          hoverInfoDomRef: gz,
          longHoldSplitInfoRef: Sz,
          currHoveredIdx: yz,
          currHoveredDisplayInfo: Dz,
          displayDraggedItemName: Qz,
          forceRerenderIfVisible: Wz,
          removeDraggedInfoRef: ez,
          checkDraggedItemConsistencyWithInven: jz,
          refreshDraggedAttributes: Iz,
          swapSlots: Bz,
          getPointerDownForIdx: Cz,
          getPointerUpForIdx: Yz,
          getSetHovering: kz,
          setCurrHoveredDisplayInfo: zu,
          moveFollowerTo: uu
        } = kE({
          show: bz,
          close: Tz,
          canCraft: Pz,
          variation: Mz,
          inventoryItemsMoveable: Lz,
          setCraftFlyAnims: rz
        });
      (0, nz.useEffect)((() => {
        const zz = !bz && null !== Hz.gameBridge.latest("inventory").chest;
        if (zz && Hz.gameBridge.send("closeChest", null), bz || (mz.clearMarks(), kz(null)(!1)), zz) {
          Nb.d.play("chestClose", 1).rate(.8 + .4 * Math.random())
        }
      }), [bz]), (0, Jz.d)("chestToggled", (zz => {
        if (zz ? Ez() : bz && Tz(), zz) {
          Nb.d.play("chestOpen", 1).rate(.8 + .4 * Math.random())
        }
      }));
      const bu = (0, eu.m)();
      (0, Jz.d)("inventory", (zz => {
        let {
          player: uz
        } = zz;
        var Ez, nz, iz;
        (mz.update(uz, !bz && bu.shown), Uz.current) && (Uz.current = (nz = Uz.current, iz = null !== (Ez = uz[Uz.current.idx]) && void 0 !== Ez ? Ez : null, IE(nz, iz) ? (nz.attributes = iz.attributes, null !== iz.amount && nz.amount > iz.amount && (nz.amount = iz.amount), nz) : null));
        Iz(), null !== yz && kz(yz)(!0), Wz()
      })), (0, nz.useEffect)((() => (Hz.gameBridge.send("setInventoryOpen", bz), () => {
        Hz.gameBridge.send("setInventoryOpen", !1)
      })), [bz]);
      const Eu = (zz, uz) => {
        if (zz === Ab.d) return void(zz => {
          const uz = Uz.current;
          if (!uz || null === (0, xb.i)(Hz.gameBridge.latest("inventory"), uz.idx)) return;
          const bz = zz ? Math.max(uz.amount, 1) : 1,
            Ez = uz.amount - bz;
          if (!Hz.gameBridge.send("removeInventoryItem", {
              slot: uz.idx,
              amount: bz,
              drop: !0
            })) return;
          const nz = Uz.current;
          nz && (nz.amount = Math.min(nz.amount, Ez), nz.amount <= 0 && (Uz.current = null)), Wz()
        })(uz);
        const bz = null === zz ? null : (0, xb.i)(Hz.gameBridge.latest("inventory"), zz);
        if (null !== bz) {
          var Ez, nz, iz;
          const lz = uz && null !== (Ez = bz.amount) && void 0 !== Ez ? Ez : 1;
          Hz.gameBridge.send("removeInventoryItem", {
            slot: zz,
            amount: lz,
            drop: !0
          }), zz === (null === (nz = hz.current) || void 0 === nz ? void 0 : nz.idx) && (hz.current.amount -= lz, hz.current.amount <= 0 && ez(), Wz()), zz === (null === (iz = Uz.current) || void 0 === iz ? void 0 : iz.idx) && (Uz.current = null, Wz())
        }
      };
      (0, Jz.d)("inventoryDropRequested", (zz => {
        bz && yz !== Ab.d && Eu(yz, zz)
      }));
      const nu = (zz, uz) => {
        let bz = uz;
        if (uz === Ab.d) {
          if (!Uz.current) return;
          bz = Uz.current.idx
        }
        const Ez = Bz(zz, bz);
        if (Ez && hz.current && (hz.current.idx === bz ? hz.current.idx = zz : hz.current.idx === zz && (hz.current.idx = bz)), Ez && uz === Ab.d) {
          const zz = (0, xb.i)(Hz.gameBridge.latest("inventory"), bz);
          Uz.current = zz ? {
            idx: bz,
            name: zz.name,
            attributes: zz.attributes,
            amount: zz.amount
          } : null
        }
        Wz()
      };
      (0, Jz.d)("numberKeyPressed", (zz => {
        null !== yz && bz && nu(zz - 1, yz)
      })), (0, nz.useEffect)((() => {
        bz || (Uz.current = null, ez(), zu(null))
      }), [bz, ez, zu, Uz]);
      const iu = Uz.current;
      (0, nz.useEffect)((() => {
        yz === Ab.d && kz(Ab.d)(!0)
      }), [iu, yz, kz]);
      const lu = () => {
        jz(), Iz(), Wz()
      };
      (0, Jz.d)("chestRefreshed", lu), (0, Jz.d)("inventorySynced", lu);
      const [Mu, tu] = (0, nz.useState)(new Map), Hu = null !== (uz = Mu.get(Mz)) && void 0 !== uz ? uz : null, Ou = (zz, uz) => {
        tu((bz => {
          const Ez = bz.get(zz);
          return Ez && Ez.name === uz.name && Ez.cO === uz.cO ? bz : new Map(bz).set(zz, uz)
        }))
      };
      (0, vz.g)("craftingRecipesEdited", (() => {
        Wz()
      })), (0, vz.g)(nE.b, (zz => {
        let {
          variation: uz,
          itemName: bz
        } = zz;
        Ou(uz, {
          name: bz,
          cO: 0
        })
      }));
      const [pu, du] = (0, nz.useState)(null), [Zu, Ru] = (0, nz.useState)(null);
      (0, Jz.d)("enchantingTableOpened", (zz => {
        let {
          position: uz,
          blockName: bz
        } = zz;
        du(uz), Ru(bz)
      }));
      const [Ku, wu] = (0, nz.useState)(""), [Xu, fu] = (0, nz.useState)(null);
      (0, nz.useEffect)((() => {
        bz && Nz.current && (Nz.current.scrollTop = Az.current)
      }), [bz]);
      return (zz => {
        const uz = (0, nz.useRef)(zz);
        uz.current = zz, (0, nz.useEffect)((() => {
          if (!zz.show) return;
          const bz = (zz, bz, Ez, nz) => {
              const {
                getPointerDownForIdx: iz,
                getPointerUpForIdx: lz
              } = uz.current;
              iz(zz)(un(bz, Ez, nz)), lz(zz)(un(bz, Ez, nz))
            },
            Ez = {
              primary: (zz, uz) => {
                bz(zz, uz, 0, !1)
              },
              secondary: (zz, uz) => {
                bz(zz, uz, 2, !1)
              },
              quickMove: (zz, uz) => {
                bz(zz, uz, 0, !0)
              },
              dropHeld: (zz, bz) => {
                uz.current.getPointerDownForIdx(Ab.b)(un(bz, zz ? 0 : 2, !1))
              },
              dropSlot: (zz, bz) => {
                uz.current.dropFromIdx(zz, bz)
              },
              swapWithHotbar: (zz, bz) => {
                uz.current.swapWithHotbar(zz, bz)
              },
              cancel: () => {
                uz.current.removeDraggedInfoRef()
              },
              isHolding: () => !!uz.current.draggedInfoRef.current,
              hasItemAt: zz => {
                const {
                  draggedInfoRef: bz,
                  specialItemRef: Ez
                } = uz.current;
                if (zz === Ab.d) return !!Ez.current;
                const nz = (0, xb.i)(Hz.gameBridge.latest("inventory"), zz);
                return !!nz && (0, Sb.d)(zz, (0, xb.c)(nz), [bz.current, Ez.current]).shown
              },
              hover: (zz, bz) => {
                const {
                  moveFollowerTo: Ez,
                  getSetHovering: nz
                } = uz.current;
                Ez(bz.clientX, bz.clientY), nz(null !== zz && void 0 !== zz ? zz : void 0)(null !== zz, void 0, {
                  pageX: bz.clientX,
                  pageY: bz.clientY
                })
              },
              moveTo: zz => {
                uz.current.moveFollowerTo(zz.clientX, zz.clientY)
              },
              close: () => {
                uz.current.close()
              }
            };
          return (0, fb.j)(Ez)
        }), [zz.show])
      })({
        show: bz,
        close: Tz,
        draggedInfoRef: hz,
        specialItemRef: Uz,
        getPointerDownForIdx: Cz,
        getPointerUpForIdx: Yz,
        getSetHovering: kz,
        moveFollowerTo: uu,
        removeDraggedInfoRef: ez,
        dropFromIdx: Eu,
        swapWithHotbar: nu
      }), (0, nz.useEffect)((() => {
        Zz.k.sK("inventoryDraggedItemUpdated", {
          draggedInfo: hz.current,
          specialItemInfo: Uz.current,
          setHovered: kz,
          pointerDown: Cz,
          pointerUp: Yz,
          variation: Pz ? Mz : void 0,
          craftFlyAnims: sz
        })
      })), (0, Oz.jsxs)(Vz.e, {
        show: bz,
        style: {
          touchAction: bz ? "none" : void 0
        },
        children: [hz.current && (0, Oz.jsx)(Gb, {
          draggedInfo: hz.current,
          toAddRef: qz
        }), hz.current && Qz && (0, Oz.jsx)(ab, {
          className: "DraggedInvenItemName",
          displayInfo: YE(hz.current),
          domRef: null
        }), !hz.current && Dz && (0, Oz.jsx)(ab, {
          displayInfo: Dz,
          domRef: gz
        }), Sz.current && hz.current && (0, Oz.jsx)(Vb, {
          info: Sz.current,
          draggedInfo: hz.current
        }), sz.map((zz => (0, Oz.jsx)(Jb.e, {
          anim: zz,
          onComplete: oz
        }, zz.id))), (0, Oz.jsx)(lz.d, {
          show: bz,
          className: "InventoryBackgroundScreen",
          globallyUniqueKey: "Inventory",
          close: Tz,
          togglePointerLock: !1,
          closeOnPressBackground: !1,
          preventContextMenu: !0,
          pointerDown: Cz(Ab.b),
          pointerUp: Yz(Ab.b),
          doGameplayStartStopOnShow: !0
        }), Xz && (0, Oz.jsxs)("div", {
          className: "EntireInventoryWrapper",
          children: [(0, Oz.jsx)("div", {
            ref: pz,
            className: "InventoryAdOuter",
            children: (0, Oz.jsx)(vb.e, {
              info: {
                adType: "leaderboard",
                adId: 6,
                adAlias: "inventory"
              },
              sizeInfo: {
                parentRef: pz
              },
              verticalAlign: "start",
              showing: bz && Fz,
              extraContrastBackgroundBox: "top",
              noFillShowBloxdAdProbability: 0,
              autoRefreshMode: "none"
            })
          }), (0, Oz.jsxs)("div", {
            className: "InventoryWrapper",
            children: [(0, Oz.jsxs)("div", {
              className: Fu()("Inventory", {
                WithPanelButtons: Kz,
                WideChestOpen: wz
              }),
              children: [(0, Oz.jsx)("div", {
                className: "InventoryFiller"
              }), (0, Oz.jsx)(ob, {
                show: bz,
                buttons: Rz
              }), (0, Oz.jsxs)("div", {
                className: "InvenBody",
                children: [(0, Oz.jsx)(hE, {
                  variation: Mz,
                  canCraft: Pz,
                  show: bz,
                  creativeMounted: fz,
                  specialItemRef: Uz,
                  draggedInfo: hz.current,
                  getSetHovering: kz,
                  getPointerDownForIdx: Cz,
                  getPointerUpForIdx: Yz,
                  enchantingTablePosition: pu,
                  enchantingTableBlockName: Zu,
                  selectedCraftable: Hu,
                  dispatchSelectedCraftable: zz => {
                    Ou(Mz, zz)
                  },
                  creativeScrollDiv: Nz,
                  creativeSearchVal: Ku,
                  setCreativeSearchVal: wu,
                  creativeCategory: Xu,
                  setCreativeCategory: fu,
                  onCraft: function(zz, uz) {
                    let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    if (jz(), (zz || bz.length > 0) && rz((uz => {
                        const Ez = [...uz],
                          nz = uz.filter((zz => "ingredient" === zz.kind)).length;
                        for (const zz of bz.slice(0, Math.max(0, 24 - nz))) Ez.push({
                          id: (0, Jb.i)(),
                          ...zz,
                          to: zz.to
                        });
                        return zz && Ez.push({
                          id: (0, Jb.i)(),
                          ...zz,
                          to: (0, xb.d)(zz.Rp)
                        }), Ez
                      })), null !== uz) {
                      var Ez;
                      const zz = Hz.gameBridge.latest("inventory");
                      (0, xz.Bb)(null === (Ez = (0, xb.i)(zz, uz)) || void 0 === Ez ? void 0 : Ez.name) ? Cz(uz)({
                        button: 0,
                        shiftKey: !0
                      }): Bz(uz, zz.selectedSlot)
                    }
                  }
                }), (0, Oz.jsx)(QE, {
                  draggedInfo: hz.current,
                  specialItemInfo: Uz.current,
                  craftFlyAnims: sz,
                  getSetHovering: kz,
                  getPointerDownForIdx: Cz,
                  getPointerUpForIdx: Yz,
                  variation: Mz,
                  canCraft: Pz,
                  isNewSlot: zz => Gz.showNewItemIndicator && mz.isNew(zz)
                })]
              })]
            }), (0, Oz.jsx)("div", {
              className: "InventoryAdOuter",
              children: (0, Oz.jsx)("div", {
                ref: dz,
                className: "InventoryAd",
                children: (0, Oz.jsx)("div", {
                  className: "InventoryAdInner"
                })
              })
            })]
          })]
        })]
      })
    }));
    var nn = bz(1405),
      Mn = bz(128);
    const tn = (0, nz.memo)((function(zz) {
      let {
        show: uz,
        onOpen: bz,
        onClose: Ez
      } = zz;
      const iz = (0, nz.useRef)(0),
        Mz = () => (0, nn.g)() && !(0, nn.s)() && iz.current <= 2;
      uz = Mz() && uz;
      const tz = () => {
        iz.current++, Ez()
      };
      (0, vz.g)("ctrlCrouchWithoutFullscreen", (() => {
        Mz() && bz()
      })), (0, vz.g)("displaymodeFullscreenChange", (zz => {
        uz && zz && tz()
      }));
      const Hz = "crazygames" === Mn.x;
      return (0, Oz.jsx)(lz.d, {
        close: tz,
        escDoesExit: !0,
        show: uz,
        togglePointerLock: !1,
        globallyUniqueKey: "CantCtrlCrouchIfNotFullscreenComp",
        children: (0, Oz.jsxs)("div", {
          className: "CantCtrlCrouchIfNotFullscreenComp SmallTextBold",
          children: [(0, Oz.jsx)("div", {
            className: "CantCtrlCrouchHeader",
            children: "Go fullscreen to crouch with ctrl"
          }), Hz && (0, Oz.jsx)("div", {
            className: "CantCtrlCrouchInstructions SmallTextLight",
            children: "Press the crazygames full screen button"
          }), (0, Oz.jsx)("div", {
            className: "CantCtrlCrouchSubtext SmallTextLight",
            children: "(Otherwise I can't stop CTRL+W closing the window!)"
          }), (0, Oz.jsxs)("div", {
            className: "CantCtrlCrouchButtonsContainer",
            children: [!Hz && (0, Oz.jsx)(Fz.q, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                (0, nn.x)(), tz()
              },
              children: (0, Oz.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Go Fullscreen"
              })
            }), (0, Oz.jsx)(Fz.K, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                tz()
              },
              children: (0, Oz.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Nevermind"
              })
            })]
          })]
        })
      })
    }));
    var Hn = bz(3360),
      On = bz(3375),
      pn = bz(1322),
      dn = bz(3344),
      Fn = bz(1326),
      Zn = bz(36032),
      Rn = bz(3351),
      Kn = bz(3355);

    function wn(zz, uz) {
      return (0, Zn.h)(!0, zz, uz) ? () => {
        !async function(zz) {
          await dn.b.refresh();
          const {
            data: uz,
            failed: bz
          } = dn.b.getState();
          if (null === uz || bz) return;
          const Ez = dn.b.getExclusion(zz);
          if ("blocked" === Ez) return;
          const nz = null === Ez;
          pn.NotificationProvider.showCustomPopup({
            body: uz => {
              const bz = bz => ({
                text: Rn.h[bz].text,
                onClick: () => {
                  uz(), (0, Kn.g)(bz, zz, null)
                }
              });
              return (0, Oz.jsx)(Fn.g, {
                title: nz ? "socialBar:ignoreOrBlockAfterReport" : "socialBar:blockAfterReport",
                textOpts: {
                  title: {
                    playerName: zz
                  }
                },
                secondary: nz ? bz("ignore") : void 0,
                confirm: bz("block"),
                cancel: {
                  text: "socialBar:notNow",
                  onClick: uz
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
    bz(3368);
    const Xn = (0, nz.memo)((function(zz) {
      let {
        show: uz,
        onOpen: bz,
        onClose: Ez
      } = zz;
      const [iz, Mz] = (0, nz.useState)(""), [tz, pz] = (0, nz.useState)(""), [dz, Fz] = (0, nz.useState)(null), [Zz, Rz] = (0, nz.useState)(null), Kz = (0, Jz.h)("hiddenPlayerNames"), wz = {
        kind: "worldCodeLine",
        onSubmit: (zz, uz) => {
          Ez(), Hz.gameBridge.send("reportWorldCodeChat", {
            chatMsgId: Zz,
            Nl: zz,
            details: uz
          })
        }
      }, Xz = {
        kind: "player",
        shownPlayerName: (0, uu.c)(iz, Kz),
        onSubmit: (zz, uz) => {
          Ez(), (0, On.b)({
            playerId: tz,
            playerName: iz,
            chatMsgId: Zz,
            policyId: zz,
            details: uz,
            onAccepted: wn(iz, Kz)
          })
        }
      };
      return (0, vz.g)("OpenReportMenu", (zz => {
        let {
          playerEId: uz,
          playerName: Ez,
          zM: nz,
          serverChatMsgId: iz
        } = zz;
        pz(uz), Mz(Ez), Fz(nz), Rz(iz), bz()
      })), (0, Oz.jsx)(lz.d, {
        show: uz,
        close: Ez,
        padShowsHud: !0,
        togglePointerLock: !1,
        escDoesExit: !0,
        className: "ReportBackgroundScreen",
        globallyUniqueKey: "MakeReportComponent",
        children: (0, Oz.jsx)("div", {
          className: "ReportPanel",
          children: uz && (0, Oz.jsx)(Hn.e, {
            reported: null === tz ? wz : Xz,
            chatMessage: dz,
            inGame: !0,
            onCancel: Ez
          })
        })
      })
    }));
    var fn = bz(36282);
    const sn = (0, nz.memo)((function(zz) {
      let {
        show: uz,
        onOpen: bz,
        onClose: Ez
      } = zz;
      const {
        t: iz
      } = (0, Iz.F)(), [Mz, tz] = (0, nz.useState)(null), [pz, dz] = (0, nz.useState)(0);
      (0, vz.g)("OpenDiscordReportBox", (zz => {
        Hz.gameBridge.send("requestDiscordReportKey", zz), dz(0), bz()
      }));
      const Zz = () => {
        Ez(), tz(null), dz(0)
      };
      return (0, vz.g)("setDiscordReportKey", (zz => {
        tz(zz)
      })), (0, Oz.jsx)(lz.d, {
        show: uz,
        close: Zz,
        padShowsHud: !0,
        togglePointerLock: !1,
        escDoesExit: !0,
        className: "ReportBackgroundScreen",
        globallyUniqueKey: "MakeDiscordReportComponent",
        children: (0, Oz.jsx)("div", {
          className: "ReportPanel",
          children: (0, Oz.jsx)(Fn.g, {
            className: "ReportKeyBox",
            title: "report:discordReportTitle",
            subtitle: "report:discordReportDescription",
            confirm: {
              text: "report:openDiscord",
              onClick: () => {
                window.open(fn.e, "_blank", "noreferrer")
              },
              padMouseOnly: !0
            },
            cancel: {
              text: "general:cancel",
              onClick: Zz
            },
            padStartsOn: "cancel",
            children: (0, Oz.jsxs)("div", {
              className: "ReportKeyRow",
              children: [(0, Oz.jsx)("div", {
                className: "ReportKeyInner",
                children: null !== Mz && void 0 !== Mz ? Mz : iz("report:loadingReportKey")
              }), (0, Oz.jsx)(Fz.f, {
                className: "ReportKeyCopyButton",
                onClick: () => {
                  navigator.clipboard.writeText(Mz).catch((zz => {
                    console.error("Failed to copy report key:", zz)
                  })), dz(Date.now())
                },
                disabled: Date.now() - pz < 1e3 || !Mz,
                children: Date.now() - pz < 1e3 ? iz("general:copied") : iz("general:copy")
              })]
            })
          })
        })
      })
    }));
    var rn = bz(1269);
    const Nn = {
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
      vn = (0, nz.memo)((function(zz) {
        let {
          show: uz,
          onOpen: bz,
          onClose: Ez
        } = zz;
        const [iz, Mz] = (0, nz.useState)(null), tz = (0, nz.useRef)(0), pz = (0, nz.useRef)(null), {
          t: dz
        } = (0, Iz.F)();
        (0, vz.g)("EditCustomLobbyBlock", (zz => {
          let {
            pos: uz
          } = zz;
          Mz(uz), null !== uz && bz(), pz.current.scrollTo(0, tz.current)
        }));
        const Fz = zz => {
          Hz.gameBridge.send("setCustomLobbyBlock", {
            pos: iz,
            blockName: zz
          }), Ez()
        };
        return (0, Oz.jsx)(lz.d, {
          className: "CustomLobbyBlockEditorOuter",
          close: Ez,
          escDoesExit: !0,
          show: uz,
          togglePointerLock: !1,
          globallyUniqueKey: "CustomLobbyBlockEditor",
          children: (0, Oz.jsx)("div", {
            className: "CustomLobbyBlockEditor",
            ref: pz,
            onScroll: () => {
              tz.current = pz.current.scrollTop
            },
            children: (0, Oz.jsx)("div", {
              className: "CustomLobbyBlockGameContainer",
              children: Object.entries(Nn).map((zz => {
                let [uz, bz] = zz;
                return (0, Oz.jsxs)("div", {
                  className: "CustomLobbyBlockGame",
                  children: [(0, Oz.jsx)("h2", {
                    className: "CustomLobbyBlockGameTitle",
                    children: dz(uz)
                  }), (0, Oz.jsx)("div", {
                    className: "CustomLobbyBlockCategoryContainer",
                    children: Object.entries(bz).map((zz => {
                      let [uz, {
                        tooltip: bz,
                        blocks: Ez
                      }] = zz;
                      return (0, Oz.jsxs)("div", {
                        className: "CustomLobbyBlockCategory",
                        children: [(0, Oz.jsxs)("h3", {
                          className: "CustomLobbyBlockCategoryTitle",
                          children: [dz(uz), (0, Oz.jsx)(ez.b, {
                            hoverInfo: dz(bz),
                            className: "CustomLobbyBlockTooltip"
                          })]
                        }), (0, Oz.jsx)("div", {
                          className: "CustonLobbyBlockContainer",
                          children: Ez.map((zz => (0, Oz.jsx)(xn, {
                            blockName: zz,
                            selectBlock: Fz
                          }, zz)))
                        })]
                      }, uz)
                    }))
                  })]
                }, uz)
              }))
            })
          })
        })
      })),
      xn = (0, nz.memo)((function(zz) {
        var uz;
        let {
          blockName: bz,
          selectBlock: Ez
        } = zz;
        const nz = (0, fE.e)(bz),
          iz = null !== (uz = void 0 === nz ? void 0 : (0, XE.displayNameOf)(nz)) && void 0 !== uz ? uz : bz,
          lz = void 0 === nz ? void 0 : (0, XE.descriptionOf)(nz);
        return (0, Oz.jsx)(ez.f, {
          tooltipInner: (0, Oz.jsxs)("div", {
            className: "CustomLobbyBlockNameTooltip",
            children: [(0, Oz.jsx)("div", {
              className: "CustomLobbyBlockName",
              children: (0, Oz.jsx)(Nz.b, {
                text: iz
              })
            }), lz && (0, Oz.jsx)("div", {
              className: "CustomLobbyBlockDescription",
              children: (0, Oz.jsx)(Nz.b, {
                text: lz
              })
            })]
          }),
          children: (0, Oz.jsx)("div", {
            className: "CustomLobbyBlockButton",
            onClick: () => Ez(bz),
            children: (0, Oz.jsx)(rb.c, {
              itemName: bz,
              amount: 1
            })
          })
        }, bz)
      }));
    var Jn = bz(2756),
      An = bz(4027),
      Tn = bz(9020);

    function Ln() {
      const zz = (0, Jz.h)("itemInfo");
      return (0, nz.useMemo)((() => function(zz) {
        return {
          getDefaultItemStat(uz, bz) {
            var Ez;
            const nz = zz[uz];
            return "description" === bz ? null === nz || void 0 === nz ? void 0 : nz.description : null !== (Ez = null === nz || void 0 === nz ? void 0 : nz.displayName) && void 0 !== Ez ? Ez : uz
          }
        }
      }(zz)), [zz])
    }
    const Pn = (0, nz.memo)((function(zz) {
        var uz, bz, Ez, iz, Mz, tz, Hz, pz, dz, Fz, Zz, Rz, wz, Xz, fz, sz, rz, oz, Nz, xz, Jz, Az, Tz;
        let {
          togglePointerLock: Lz,
          show: Pz,
          onOpen: Gz,
          onClose: az
        } = zz;
        const {
          t: Vz
        } = (0, Iz.F)(), mz = Ln(), qz = (0, nz.useRef)(null), hz = (0, nz.useRef)(An.d.MobHungerLevel.Hungry), Uz = (0, nz.useRef)(null), cz = (0, Jn.c)(), gz = (0, nz.useRef)(null), Sz = (0, nz.useRef)(null), yz = qz.current;
        (0, nz.useEffect)((() => {
          if (!Pz) return;
          const zz = Tn.j.openPet(gz.current);
          return Sz.current = zz, () => {
            zz.close(), Sz.current = null
          }
        }), [Pz]), (0, nz.useEffect)((() => {
          Pz && yz && Sz.current.show(function(zz) {
            var uz;
            let {
              mobType: bz,
              mobSettings: Ez
            } = zz;
            return {
              mobType: bz,
              variation: null !== (uz = Ez.variation) && void 0 !== uz ? uz : "default",
              metaInfo: Ez.metaInfo,
              tamed: !(0, GE.F)(Ez.ownerDbId)
            }
          }(yz))
        }), [Pz, yz]), (0, nz.useEffect)((() => {
          const zz = () => {
            var zz;
            const uz = An.d.getMobHungerLevel(null === (zz = qz.current) || void 0 === zz ? void 0 : zz.mobSettings.petInfo.lastFedAt);
            if (uz !== hz.current && (hz.current = uz, cz()), Uz.current) {
              var bz;
              const zz = Date.now(),
                uz = An.d.getNextStateAt(null === (bz = qz.current) || void 0 === bz ? void 0 : bz.mobSettings.petInfo.lastFedAt);
              let Ez = Math.floor((uz - zz) / 1e3),
                nz = "";
              if (Ez > 3600) {
                nz += Math.floor(Ez / 60 / 60).toString().padStart(2, "0"), nz += ":", Ez %= 3600
              }
              const iz = Ez % 60;
              nz += Math.floor(Ez / 60).toString().padStart(2, "0"), nz += ":", nz += iz.toString().padStart(2, "0"), Uz.current.textContent = nz
            }
          };
          zz();
          const uz = setInterval(zz, 250);
          return () => {
            clearInterval(uz)
          }
        }), [yz, cz]), (0, vz.g)("showPetUi", (zz => {
          let {
            mobType: uz,
            mobSettings: bz
          } = zz;
          qz.current = {
            mobType: uz,
            mobSettings: bz
          }, Pz || Gz()
        }));
        const Dz = null === (uz = qz.current) || void 0 === uz ? void 0 : uz.mobSettings.health,
          Qz = null === (bz = qz.current) || void 0 === bz ? void 0 : bz.mobSettings.maxHealth,
          Wz = An.d.getFriendshipLevelInfo(null !== (Ez = null === (iz = qz.current) || void 0 === iz ? void 0 : iz.mobSettings.petInfo.friendshipPoints) && void 0 !== Ez ? Ez : 0);
        return (0, Oz.jsx)(lz.d, {
          className: "PetUIOuter",
          close: az,
          escDoesExit: !0,
          show: Pz,
          togglePointerLock: Lz,
          forcePointerUnlock: Pz,
          globallyUniqueKey: "PetUI",
          children: (0, Oz.jsx)("div", {
            className: "PetUI",
            children: (0, Oz.jsxs)("div", {
              className: "PetUIContainer",
              children: [(0, Oz.jsxs)("div", {
                className: "PetUILeftSideContainer",
                children: [(0, Oz.jsx)("div", {
                  className: "PetUITitle",
                  children: null !== (Mz = null === (tz = qz.current) || void 0 === tz ? void 0 : tz.mobSettings.name) && void 0 !== Mz ? Mz : "Your Pet"
                }), (0, Oz.jsx)("div", {
                  className: "PetUICanvasContainer",
                  ref: gz
                })]
              }), (0, Oz.jsxs)("div", {
                className: "PetUIInformation",
                children: [!(0, GE.F)(null === (Hz = qz.current) || void 0 === Hz ? void 0 : Hz.mobSettings.petInfo.friendshipPoints) && (0, Oz.jsxs)("div", {
                  className: "PetUIFriendshipPoints",
                  children: [(0, Oz.jsx)("div", {
                    className: "PetUIFriendshipPointsTitle",
                    children: Vz("mobAiPlugin:friendshipTitle")
                  }), (0, Oz.jsx)("div", {
                    className: "PetUIFriendshipHearts",
                    children: An.d.getIconsFromFriendshipPoints(null !== (pz = qz.current.mobSettings.petInfo.friendshipPoints) && void 0 !== pz ? pz : 0).map(((zz, uz) => (0, Oz.jsx)("div", {
                      className: "PetUIFriendshipHeart",
                      children: (0, Oz.jsx)(rb.c, {
                        itemName: zz,
                        amount: 1
                      })
                    }, uz)))
                  }), (0, Oz.jsx)("div", {
                    className: "PetUIFriendshipBar",
                    children: (0, Oz.jsxs)("div", {
                      className: "PetUIFriendshipBarBackground",
                      children: [(0, Oz.jsx)("div", {
                        className: "PetUIFriendshipBarForeground",
                        style: {
                          transform: `scaleX(${Wz.totalPointsForNextLevel>0?Math.max(Wz.pointsIntoCurrentLevel/Wz.totalPointsForNextLevel,0):1})`,
                          transformOrigin: "left center"
                        }
                      }), (0, Oz.jsx)("div", {
                        className: "PetUIFriendshipBarText",
                        children: Wz.totalPointsForNextLevel > 0 ? ` ${Math.ceil(Wz.pointsIntoCurrentLevel)}/${Math.ceil(Wz.totalPointsForNextLevel)}` : Math.ceil(Wz.pointsIntoCurrentLevel)
                      })]
                    })
                  })]
                }), (0, Oz.jsxs)("div", {
                  className: "PetUIHungry",
                  children: [(0, Oz.jsx)("div", {
                    className: "PetUIHungryTitle",
                    children: Vz("mobAiPlugin:hungerTitle")
                  }), (0, Oz.jsx)("div", {
                    className: "PetUIHungryCurrent",
                    children: An.d.hungerLevelIcons[hz.current].map(((zz, uz) => (0, Oz.jsx)("div", {
                      className: "PetUIHungryIcon",
                      children: (0, Oz.jsx)(rb.c, {
                        itemName: zz,
                        amount: 1
                      })
                    }, uz)))
                  }), (0, Oz.jsxs)("div", {
                    className: "PetUIHungryLevel",
                    children: [Vz(An.d.hungerLevelTranslations[hz.current].translationKey), hz.current !== An.d.MobHungerLevel.Starving && !(0, GE.F)(null === (dz = qz.current) || void 0 === dz ? void 0 : dz.mobSettings.petInfo.lastFedAt) && (0, Oz.jsxs)("div", {
                      className: "PetUIHungryNext",
                      children: [Vz("mobAiPlugin:nextFeedIn", {
                        state: Vz(An.d.hungerLevelTranslations[hz.current + 1].translationKey)
                      }), ":", " ", (0, Oz.jsx)("span", {
                        ref: Uz
                      })]
                    })]
                  })]
                }), (0, Oz.jsx)(ez.f, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, Oz.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: Vz("mobAiPlugin:healthTooltip")
                  }),
                  children: (0, Oz.jsxs)("div", {
                    className: Fu()("PetUIQuickStatsItem", {
                      Disabled: (0, GE.F)(Dz) || (0, GE.F)(Qz)
                    }),
                    children: [(0, Oz.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, Oz.jsx)(rb.c, {
                        itemName: "Health",
                        amount: 1
                      })
                    }), (0, Oz.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (0, GE.F)(Dz) || (0, GE.F)(Qz) ? "" : (0, Oz.jsxs)(Oz.Fragment, {
                        children: [Math.ceil(Dz), (0, Oz.jsxs)("span", {
                          className: "PetUIQuickStatsValueMax",
                          children: ["/", Math.ceil(Qz)]
                        })]
                      })
                    })]
                  })
                }), (0, Oz.jsx)(ez.f, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, Oz.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: Vz("mobAiPlugin:attackDamageTooltip")
                  }),
                  children: (0, Oz.jsxs)("div", {
                    className: Fu()("PetUIQuickStatsItem", {
                      Disabled: (0, GE.F)(null === (Fz = qz.current) || void 0 === Fz ? void 0 : Fz.mobSettings.attackDamage) || qz.current.mobSettings.attackDamage <= 0
                    }),
                    children: [(0, Oz.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, Oz.jsx)(rb.c, {
                        itemName: "Iron Sword",
                        amount: 1
                      })
                    }), (0, Oz.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (Zz = qz.current) || void 0 === Zz ? void 0 : Zz.mobSettings.attackDamage) || ""
                    })]
                  })
                }), (0, Oz.jsx)(ez.f, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, Oz.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: Vz("mobAiPlugin:secondaryAttackDamageTooltip")
                  }),
                  children: (0, Oz.jsxs)("div", {
                    className: Fu()("PetUIQuickStatsItem", {
                      Disabled: (0, GE.F)(null === (Rz = qz.current) || void 0 === Rz ? void 0 : Rz.mobSettings.secondaryAttackDamage) || qz.current.mobSettings.secondaryAttackDamage <= 0
                    }),
                    children: [(0, Oz.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, Oz.jsx)(rb.c, {
                        itemName: "Stone Crossbow",
                        amount: 1
                      })
                    }), (0, Oz.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (wz = qz.current) || void 0 === wz ? void 0 : wz.mobSettings.secondaryAttackDamage) || ""
                    })]
                  })
                }), (0, Oz.jsx)(ez.f, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, Oz.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: Vz("mobAiPlugin:speedTooltip")
                  }),
                  children: (0, Oz.jsxs)("div", {
                    className: Fu()("PetUIQuickStatsItem", {
                      Disabled: (0, GE.F)(null === (Xz = qz.current) || void 0 === Xz ? void 0 : Xz.mobSettings.baseRunningSpeed)
                    }),
                    children: [(0, Oz.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, Oz.jsx)(rb.c, {
                        itemName: "Speed",
                        amount: 1
                      })
                    }), (0, Oz.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: null !== (fz = null === (sz = qz.current) || void 0 === sz || null === (rz = sz.mobSettings.baseRunningSpeed) || void 0 === rz ? void 0 : rz.toFixed(2)) && void 0 !== fz ? fz : ""
                    })]
                  })
                }), (0, Oz.jsx)(ez.f, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, Oz.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: Vz("mobAiPlugin:saddledTooltip")
                  }),
                  children: (0, Oz.jsxs)("div", {
                    className: Fu()("PetUIQuickStatsItem", {
                      Disabled: "Saddled" !== (null === (oz = qz.current) || void 0 === oz ? void 0 : oz.mobSettings.metaInfo)
                    }),
                    children: [(0, Oz.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, Oz.jsx)(rb.c, {
                        itemName: "Saddle",
                        amount: 1
                      })
                    }), (0, Oz.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: "Saddled" === (null === (Nz = qz.current) || void 0 === Nz ? void 0 : Nz.mobSettings.metaInfo) ? (0, Oz.jsx)(Kz.c, {
                        name: "check"
                      }) : ""
                    })]
                  })
                }), !(0, GE.F)(null === (xz = qz.current) || void 0 === xz ? void 0 : xz.mobSettings.tameInfo) && (0, Oz.jsxs)(Oz.Fragment, {
                  children: [(0, Oz.jsxs)("div", {
                    className: "PetUIFood",
                    children: [(0, Oz.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, Oz.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, Oz.jsx)(an, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:superlikedFoodTitle"
                          },
                          description: null,
                          tintColor: An.d.feedTextColours[An.d.MobFoodType.Superliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, Oz.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: (0, Oz.jsx)("div", {
                          className: "PetUIFoodItem",
                          children: qz.current.mobSettings.petInfo.superlikedFoodKnown ? (0, Oz.jsx)(Gn, {
                            food: qz.current.mobSettings.petInfo.superlikedFood
                          }) : (0, Oz.jsx)(an, {
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
                    }), (0, Oz.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, Oz.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, Oz.jsx)(an, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:likedFoodTitle"
                          },
                          description: null,
                          tintColor: An.d.feedTextColours[An.d.MobFoodType.Liked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, Oz.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (Jz = qz.current.mobSettings.tameInfo.likedFoods) || void 0 === Jz ? void 0 : Jz.filter((zz => !qz.current.mobSettings.petInfo.superlikedFoodKnown || zz !== qz.current.mobSettings.petInfo.superlikedFood)).map((zz => (0, Oz.jsx)(Gn, {
                          food: zz
                        }, zz)))
                      })]
                    }), (0, Oz.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, Oz.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, Oz.jsx)(an, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:neutralFoodTitle"
                          },
                          description: null,
                          tintColor: An.d.feedTextColours[An.d.MobFoodType.Neutral],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, Oz.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (Az = qz.current.mobSettings.tameInfo.neutralFoods) || void 0 === Az ? void 0 : Az.map((zz => (0, Oz.jsx)(Gn, {
                          food: zz
                        }, zz)))
                      })]
                    }), (0, Oz.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, Oz.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, Oz.jsx)(an, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:dislikedFoodTitle"
                          },
                          description: null,
                          tintColor: An.d.feedTextColours[An.d.MobFoodType.Disliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, Oz.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (Tz = qz.current.mobSettings.tameInfo.dislikedFoods) || void 0 === Tz ? void 0 : Tz.map((zz => (0, Oz.jsx)(Gn, {
                          food: zz
                        }, zz)))
                      })]
                    })]
                  }), qz.current.mobSettings.tameInfo.levelUpBonuses && (0, Oz.jsx)("div", {
                    className: "PetUIFeedDrops",
                    children: Array.from({
                      length: An.d.MAX_LEVEL + 1
                    }).map(((zz, uz) => {
                      const bz = uz;
                      if (0 === bz) return null;
                      const Ez = qz.current.mobSettings.tameInfo.levelUpBonuses[bz],
                        nz = An.d.getBonusDisplayInfo(mz, qz.current.mobSettings, qz.current.mobType, Ez);
                      return (0, Oz.jsxs)("div", {
                        className: Fu()("PetUIFeedDropContainer", {
                          Selected: bz === An.d.getFriendshipLevelInfo(qz.current.mobSettings.petInfo.friendshipPoints).level
                        }),
                        children: [(0, Oz.jsx)("div", {
                          className: "PetUIFeedDropHearts",
                          children: Array.from({
                            length: bz
                          }).map(((zz, uz) => (0, Oz.jsx)("div", {
                            className: "PetUIFeedDropHeart",
                            children: (0, Oz.jsx)(rb.c, {
                              itemName: "Friendship",
                              amount: 1
                            })
                          }, `${bz}-${uz}`)))
                        }), (0, Oz.jsx)("div", {
                          className: "PetUIFeedDropItems",
                          children: nz && (0, Oz.jsx)(an, {
                            icon: nz.icon,
                            displayName: nz.displayName,
                            description: nz.description
                          })
                        })]
                      }, bz)
                    }))
                  })]
                })]
              })]
            })
          })
        })
      })),
      Gn = (0, nz.memo)((function(zz) {
        let {
          food: uz,
          includeDescription: bz = !1
        } = zz;
        const Ez = Ln(),
          nz = Ez.getDefaultItemStat(uz, "displayName"),
          iz = Ez.getDefaultItemStat(uz, "description");
        return (0, Oz.jsx)(an, {
          icon: uz,
          displayName: nz,
          description: bz ? iz : null
        })
      })),
      an = (0, nz.memo)((function(zz) {
        let {
          icon: uz,
          displayName: bz,
          description: Ez,
          tintColor: nz,
          className: iz = "PetUIFoodItem"
        } = zz;
        return (0, Oz.jsx)(ez.f, {
          delayHide: 0,
          delayShow: 0,
          tooltipInner: (0, Oz.jsxs)("div", {
            className: "PetUIFoodItemTooltip",
            children: [(0, Oz.jsx)("div", {
              className: "PetUIFoodItemName",
              children: (0, Oz.jsx)(Nz.b, {
                text: bz
              })
            }), Ez && (0, Oz.jsx)("div", {
              className: "PetUIFoodItemDescription",
              children: (0, Oz.jsx)(Nz.b, {
                text: Ez
              })
            })]
          }),
          children: (0, Oz.jsx)("div", {
            className: iz,
            children: (0, Oz.jsx)(rb.c, {
              itemName: uz,
              amount: 1,
              tintColor: nz
            })
          })
        })
      }));
    var Vn = bz(3521),
      mn = bz(1118),
      qn = bz(1226),
      hn = bz(36297),
      Un = bz(36294),
      cn = bz(994),
      gn = bz(2261);

    function Sn(zz) {
      let {
        peers: uz
      } = zz;
      const [bz, Ez] = (0, nz.useState)(null), iz = (0, Jz.h)("players");
      return (0, Oz.jsx)("div", {
        className: "CodeEditorPresence",
        children: uz.map((zz => {
          var uz, nz;
          const lz = null !== (uz = null === (nz = iz.byId[zz.playerId]) || void 0 === nz ? void 0 : nz.cosmetics) && void 0 !== uz ? uz : {};
          return (0, Oz.jsxs)("div", {
            className: Fu()("PresenceIcon", {
              Viewer: !zz.isEditor
            }),
            style: {
              backgroundColor: zz.colour
            },
            onMouseEnter: () => {
              Ez(zz.playerId)
            },
            onMouseLeave: () => {
              Ez(null)
            },
            children: [(0, Oz.jsx)(gn.e, {
              cosmetics: lz
            }), bz === zz.playerId && (0, Oz.jsx)("div", {
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
    var yn = bz(621),
      Dn = bz(36291),
      Qn = bz(36029),
      Wn = bz(36300);

    function en(zz) {
      const uz = zz.split("/"),
        bz = [];
      for (let Ez = 1; Ez < uz.length; Ez++) bz.push(uz.slice(0, Ez).join("/"));
      return bz
    }

    function jn(zz) {
      return zz.slice(zz.lastIndexOf("/") + 1)
    }
    const In = (0, nz.memo)((function(zz) {
      var uz;
      let {
        files: bz,
        activePath: Ez,
        canEdit: iz,
        directoryLinked: lz,
        pluginNames: Mz,
        activePluginName: tz,
        activePluginFile: Hz,
        onSelect: pz,
        onSelectPlugin: dz,
        onCreate: Zz,
        onRename: Rz,
        onRenameFolder: wz,
        onDelete: Xz,
        onToggleDirectorySync: fz,
        schematics: sz,
        onManageSchematic: rz
      } = zz;
      const {
        t: oz
      } = (0, Iz.F)(), Nz = null !== (uz = (0, Un.c)(bz)) && void 0 !== uz ? uz : qn.i, vz = Object.keys(bz), [xz, Jz] = (0, nz.useState)((() => new Set)), Az = function(zz, uz, bz) {
        const Ez = {
          folders: new Map,
          files: []
        };
        for (const lz of zz) {
          if (lz === uz) continue;
          let zz = Ez;
          for (const uz of en(lz)) {
            let bz = zz.folders.get(uz);
            bz || (bz = {
              folders: new Map,
              files: []
            }, zz.folders.set(uz, bz)), zz = bz
          }
          zz.files.push(lz)
        }
        const nz = [];
        zz.includes(uz) && nz.push({
          kind: "file",
          path: uz,
          name: jn(uz),
          depth: 0
        });
        const iz = (zz, uz) => {
          const Ez = [...zz.folders.entries()].sort(((zz, uz) => {
            let [bz] = zz, [Ez] = uz;
            return bz.localeCompare(Ez)
          }));
          for (const [lz, Mz] of Ez) {
            const zz = bz.has(lz);
            nz.push({
              kind: "folder",
              path: lz,
              name: jn(lz),
              depth: uz,
              collapsed: zz
            }), zz || iz(Mz, uz + 1)
          }
          zz.files.sort(((zz, uz) => zz.localeCompare(uz)));
          for (const bz of zz.files) nz.push({
            kind: "file",
            path: bz,
            name: jn(bz),
            depth: uz
          })
        };
        return iz(Ez, 0), nz
      }(vz, Nz, xz);
      (0, nz.useEffect)((() => {
        Jz((zz => {
          const uz = new Set(zz);
          let bz = !1;
          for (const nz of en(Ez)) bz = uz.delete(nz) || bz;
          return bz ? uz : zz
        }))
      }), [Ez]);
      const Tz = vz.length >= nb.B,
        Lz = (zz, uz) => {
          if (zz.length > hn.v) return `Path must be at most ${hn.v} characters`;
          if (!(0, hn.t)(zz)) return "Use a relative .js, .ts, or .d.ts path, e.g. lib/util.js";
          if ("index.d.ts" === zz) return "index.d.ts cannot be the world-code entry";
          const Ez = !!uz && (0, Un.f)(uz, zz);
          if (uz && (0, Un.i)(uz) && !Ez) return `Cannot rename ${uz} (only swapping ${qn.i} and ${qn.m} is allowed)`;
          if (zz in bz) return "A file with that path already exists";
          if ((0, Un.i)(zz) && !Ez) {
            if ((zz === qn.i ? qn.m : qn.i) in bz) return `World code cannot have both ${qn.i} and ${qn.m}`
          }
          return null
        },
        Pz = zz => {
          pn.NotificationProvider.showInputPopup({
            title: "codeEditor:newFile",
            subtitle: "codeEditor:newFilePathHint",
            placeholderText: "lib/util.js",
            initialValue: void 0 === zz ? void 0 : `${zz}/`,
            submitText: "general:create",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: zz => Lz(zz)
          }).getResult().then((zz => {
            "notificationTornDown" !== zz && null !== zz && "submit" === zz.type && Zz(zz.value)
          }))
        },
        Gz = zz => {
          pn.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFile",
            subtitle: "codeEditor:newFilePathHint",
            initialValue: zz,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: uz => uz === zz ? "That is already the file's path" : Lz(uz, zz)
          }).getResult().then((uz => {
            "notificationTornDown" !== uz && null !== uz && "submit" === uz.type && Rz(zz, uz.value)
          }))
        },
        az = zz => {
          const uz = zz => zz.replace(/\/+$/, "");
          pn.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFolder",
            subtitle: "codeEditor:renameFolderHint",
            initialValue: zz,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: bz => {
              const Ez = uz(bz);
              if (Ez === zz) return "That is already the folder's path";
              for (const [uz, nz] of(0, Un.n)(vz, zz, Ez)) {
                const zz = Lz(nz, uz);
                if (null !== zz) return zz
              }
              return null
            }
          }).getResult().then((bz => {
            "notificationTornDown" !== bz && null !== bz && "submit" === bz.type && wz(zz, uz(bz.value))
          }))
        },
        Vz = zz => {
          pn.NotificationProvider.showPromptPopup({
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
          }).getResult().then((uz => {
            !0 === uz && Xz(zz)
          }))
        };
      return (0, Oz.jsxs)("div", {
        className: "CodeEditorFileTree",
        children: [(0, Oz.jsxs)("div", {
          className: "FileTreeHeader",
          children: [(0, Oz.jsx)("span", {
            children: "Files"
          }), iz && !Tz && (0, Oz.jsx)(Fz.v, {
            className: "FileTreeHeaderButton",
            onClick: () => {
              Pz()
            },
            children: (0, Oz.jsx)(Kz.c, {
              name: "plus"
            })
          })]
        }), (0, Oz.jsxs)("div", {
          className: "FileTreeList",
          children: [Az.map((zz => {
            const uz = zz.path;
            if ("folder" === zz.kind) return (0, Oz.jsx)(Yn, {
              path: uz,
              name: zz.name,
              depth: zz.depth,
              collapsed: zz.collapsed,
              onToggle: () => {
                var zz;
                zz = uz, Jz((uz => {
                  const bz = new Set(uz);
                  return bz.delete(zz) || bz.add(zz), bz
                }))
              },
              canCreate: iz && !Tz,
              canRename: iz,
              onCreate: Pz,
              onRename: az
            }, `folder:${uz}`);
            const nz = (0, Un.i)(uz),
              lz = qn.i in bz && qn.m in bz,
              Mz = !nz || lz,
              Hz = null === tz && uz === Ez;
            return (0, Oz.jsx)(zi, {
              path: uz,
              label: zz.name,
              depth: zz.depth,
              isActive: Hz,
              canRename: iz,
              onSelect: pz,
              onRename: Gz,
              onDelete: Vz,
              canDelete: Mz && iz
            }, uz)
          })), (0, Oz.jsxs)("div", {
            className: "FileTreeHeader Secondary",
            children: [(0, Oz.jsxs)("span", {
              children: ["Schematics (", Object.keys(sz).length, "/", Wn.g, ")"]
            }), iz && (0, Oz.jsx)(Fz.v, {
              className: "FileTreeHeaderButton",
              disabled: Object.keys(sz).length >= Wn.g,
              onClick: () => {
                rz("")
              },
              children: (0, Oz.jsx)(Kz.c, {
                name: "plus"
              })
            })]
          }), Object.keys(sz).sort().map((zz => (0, Oz.jsx)(zi, {
            path: zz,
            isActive: !1,
            canRename: !1,
            canDelete: !1,
            onSelect: rz
          }, zz))), Mz.length > 0 && (0, Oz.jsxs)(Oz.Fragment, {
            children: [(0, Oz.jsx)("div", {
              className: "FileTreeHeader Secondary",
              children: (0, Oz.jsx)("span", {
                children: "Plugins"
              })
            }), Mz.map((zz => {
              var uz;
              const bz = Dn.i[zz],
                Ez = Object.keys(null !== (uz = null === bz || void 0 === bz ? void 0 : bz.files) && void 0 !== uz ? uz : {
                  "index.ts": ""
                }).sort(((zz, uz) => "index.ts" === zz ? -1 : "index.ts" === uz ? 1 : zz.localeCompare(uz)));
              return (0, Oz.jsxs)("div", {
                children: [(0, Oz.jsx)("div", {
                  className: "FileTreePluginName",
                  children: (0, Un.u)(zz)
                }), Ez.map((uz => (0, Oz.jsx)(zi, {
                  path: uz,
                  nested: !0,
                  isActive: tz === zz && Hz === uz,
                  canRename: !1,
                  onSelect: () => {
                    dz(zz, uz)
                  },
                  canDelete: !1
                }, uz)))]
              }, zz)
            }))]
          })]
        }), (0, Oz.jsx)("div", {
          className: "FileTreeFooter",
          children: (0, Oz.jsx)(Fz.f, {
            className: "FileTreeFooterButton",
            onClick: fz,
            children: oz(lz ? "codeEditor:directorySyncUnlink" : "codeEditor:directorySyncLink")
          })
        })]
      })
    }));

    function Bn(zz) {
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

    function Cn(zz) {
      let {
        depth: uz
      } = zz;
      return (0, Oz.jsx)(Oz.Fragment, {
        children: Array.from({
          length: uz
        }, ((zz, uz) => (0, Oz.jsx)("span", {
          className: "FileTreeIndentGuide",
          style: {
            "--guide-level": uz
          }
        }, uz)))
      })
    }

    function Yn(zz) {
      let {
        path: uz,
        name: bz,
        depth: Ez,
        collapsed: nz,
        onToggle: iz,
        canCreate: lz,
        canRename: Mz,
        onCreate: tz,
        onRename: Hz
      } = zz;
      const pz = [];
      lz && pz.push({
        icon: "plus",
        text: "codeEditor:newFile",
        onPointerDown: () => {
          tz(uz)
        }
      }), Mz && pz.push({
        icon: "pen",
        text: "codeEditor:renameFolder",
        onPointerDown: () => {
          Hz(uz)
        }
      });
      const dz = Bn(Ez);
      return (0, Oz.jsxs)("div", {
        className: Fu()("FileTreeItem FileTreeFolder", dz.className),
        style: dz.style,
        children: [(0, Oz.jsx)(Cn, {
          depth: Ez
        }), (0, Oz.jsxs)("button", {
          type: "button",
          className: "FileTreeItemName",
          "aria-expanded": !nz,
          onClick: iz,
          children: [(0, Oz.jsx)(Kz.c, {
            className: "FileTreeFolderCaret",
            name: nz ? "caret-right" : "caret-down"
          }), (0, Oz.jsx)(Kz.c, {
            className: "FileTreeFolderIcon",
            name: nz ? "folder" : "folder-open"
          }), bz]
        }), (0, Oz.jsx)(kn, {
          path: uz,
          actions: pz
        })]
      })
    }

    function kn(zz) {
      let {
        path: uz,
        actions: bz
      } = zz;
      const Ez = (0, nz.useRef)(null);
      return 0 === bz.length ? null : (0, Oz.jsxs)("div", {
        ref: Ez,
        className: "FileTreeItemActions",
        children: [(0, Oz.jsx)("button", {
          type: "button",
          className: "FileTreeActionMenuButton",
          "aria-label": `Actions for ${uz}`,
          children: (0, Oz.jsx)(Kz.c, {
            name: "ellipsis"
          })
        }), (0, Oz.jsx)(Qn.d, {
          triggerElementRef: Ez,
          options: bz
        })]
      })
    }

    function zi(zz) {
      let {
        path: uz,
        label: bz = uz,
        depth: Ez = 0,
        isActive: nz,
        canRename: iz,
        onSelect: lz,
        onRename: Mz,
        onDelete: tz,
        canDelete: Hz,
        nested: pz
      } = zz;
      const dz = [];
      iz && Mz && dz.push({
        icon: "pen",
        text: "codeEditor:rename",
        onPointerDown: () => {
          Mz(uz)
        }
      }), Hz && tz && dz.push({
        icon: "xmark",
        text: "general:delete",
        onPointerDown: () => {
          tz(uz)
        }
      });
      const Fz = Bn(Ez);
      return (0, Oz.jsxs)("div", {
        className: Fu()("FileTreeItem", Fz.className, {
          Active: nz,
          Nested: pz
        }),
        style: Fz.style,
        children: [(0, Oz.jsx)(Cn, {
          depth: Ez
        }), (0, Oz.jsx)("button", {
          type: "button",
          className: "FileTreeItemName",
          title: bz === uz ? void 0 : uz,
          onClick: () => {
            lz(uz)
          },
          children: bz
        }), (0, Oz.jsx)(kn, {
          path: uz,
          actions: dz
        })]
      })
    }
    async function ui(zz) {
      const uz = (0, Un.c)(zz);
      if (!uz || "" === zz[uz].trim()) return [];
      const {
        collectImportedWorldCodePluginNames: Ez
      } = await Promise.all([bz.e(289), bz.e(290)]).then((() => bz(40696)));
      return (0, Dn.e)(Ez(zz))
    }
    var bi = bz(36308);

    function Ei(zz, uz) {
      const bz = Object.keys(zz),
        Ez = Object.keys(uz);
      if (bz.length !== Ez.length) return !1;
      for (const nz of bz)
        if (!(nz in uz) || zz[nz] !== uz[nz]) return !1;
      return !0
    }

    function ni(zz, uz) {
      const bz = [],
        Ez = [],
        nz = [];
      for (const iz of Object.keys(uz)) iz in zz ? zz[iz] !== uz[iz] && nz.push(iz) : bz.push(iz);
      for (const iz of Object.keys(zz)) iz in uz || Ez.push(iz);
      return bz.sort(), Ez.sort(), nz.sort(), {
        creates: bz,
        deletes: Ez,
        updates: nz
      }
    }

    function ii(zz, uz) {
      var bz;
      const Ez = {
          ...zz
        },
        nz = (0, Un.c)(uz),
        iz = (0, Un.c)(Ez);
      if (qn.i in Ez && qn.m in Ez) {
        const zz = null !== nz && void 0 !== nz ? nz : qn.m,
          bz = zz === qn.i ? qn.m : qn.i;
        var lz;
        if (!(zz in Ez)) Ez[zz] = null !== (lz = uz[zz]) && void 0 !== lz ? lz : "";
        return delete Ez[bz], Ez
      }
      var Mz;
      return nz && !(nz in Ez) ? (iz || (Ez[nz] = null !== (Mz = uz[nz]) && void 0 !== Mz ? Mz : ""), Ez) : (iz || nz || (Ez[qn.i] = null !== (bz = Ez[qn.i]) && void 0 !== bz ? bz : "", delete Ez[qn.m]), Ez)
    }

    function li(zz, uz) {
      const bz = (0, Un.c)(uz),
        Ez = qn.i in uz && qn.m in uz;
      return zz.filter((zz => !(0, Un.i)(zz) || (!!Ez || bz !== zz)))
    }
    async function Mi(zz, uz, Ez) {
      const nz = zz.getLobbyFiles(),
        iz = (0, nb.m)(Ez, (0, Un.o)(nz, uz)),
        lz = await zz.ensureJoined(uz),
        Mz = (0, hn.z)(lz.docKey);
      if (lz.doc === iz) return;
      for (let bz = 0; bz < 100; bz++) {
        const bz = zz.getCollabSnapshot();
        if (bz && (0, hn.z)(bz.docKey) === Mz && zz.getActivePath() === uz) {
          if (zz.replaceActiveDoc(Mz, iz)) return;
          await (0, GE.L)(40)
        } else await (0, GE.L)(40)
      }
      const {
        ChangeSet: tz
      } = await bz.e(285).then((() => bz(40531))), Oz = zz.getCollabSnapshot(), pz = Oz && (0, hn.z)(Oz.docKey) === Mz ? Oz : lz;
      await async function(zz, uz, bz, Ez) {
        const nz = zz.of({
            from: 0,
            to: bz.length,
            insert: Ez
          }, bz.length),
          iz = JSON.stringify([{
            clientID: uz.clientID,
            changes: nz.toJSON()
          }]),
          lz = (0, hn.z)(uz.docKey);
        iz.length <= hn.l ? Hz.gameBridge.send("sendCodeCollab", {
          ru: hn.e.Push,
          ou: lz,
          Nu: uz.version,
          Ju: iz
        }) : await (0, mn.postJsonWithMetricsCookiesAndJsonResponse)(`${uz.httpConfig.gsUrl}/code/collab-push`, Vn.n["collab-push"].toBuffer({
          gameNameWithVariation: uz.httpConfig.gameNameWithVariation,
          lobbyName: uz.httpConfig.lobbyName,
          docKey: lz,
          version: uz.version,
          updates: iz
        }), {
          retries: 0
        })
      }(tz, pz, pz.doc, iz)
    }
    class ti {
      constructor(zz) {
        this.handle = null, this.lastSynced = {}, this.lastLobbySeen = null, this.pendingDocText = new Map, this.flushingDocText = !1, this.recheckingDisk = !1, this.stopWatch = null, this.lobbyPollTimer = null, this.running = !1, this.applying = !1, this.reconcileSettled = !1, this.reconcileInFlight = !1, this.linked = !1, this.scaffoldedPluginNamesKey = null, this.scaffoldingLocalTypes = Promise.resolve(), this.bridge = void 0, this.bridge = zz
      }
      async writeLobbyFiles(zz) {
        const uz = {
            ...this.bridge.getLobbyFiles()
          },
          bz = {
            ...uz
          };
        for (const {
            path: iz,
            text: lz
          }
          of zz) bz[iz] = lz;
        if (!zz.every((zz => {
            let {
              path: uz,
              text: Ez
            } = zz;
            return (0, nb.m)(Ez, (0, Un.o)(bz, uz)) === Ez
          }))) return !1;
        const Ez = [];
        try {
          for (const {
              path: uz,
              text: bz
            }
            of zz) Ez.push(uz), uz in this.bridge.getLobbyFiles() || (this.bridge.createFile(uz, {
            focus: !1
          }), await this.bridge.waitForLobbyPath(uz, !0)), await Mi(this.bridge, uz, bz)
        } catch (nz) {
          for (const zz of Ez) zz in uz ? await Mi(this.bridge, zz, uz[zz]).catch((uz => {
            console.error("World Code AI: couldn't put back", zz, uz)
          })) : this.bridge.deleteFile(zz);
          throw nz
        }
        return !0
      }
      isLinked() {
        return this.linked
      }
      async linkFolder() {
        if (!this.bridge.canEditCode()) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncNeedEdit"), "warning"), !1;
        const zz = await (0, bi.v)(this.bridge.getStorageKey());
        return !!zz && (this.handle = zz, this.linked = !0, this.reconcileSettled = !1, await this.scaffoldLocalTypes(zz), !0)
      }
      async unlinkFolder() {
        const zz = this.bridge.getStorageKey();
        this.pendingDocText.clear(), this.stopContinuousSync(), this.handle = null, this.linked = !1, this.reconcileSettled = !1, this.lastSynced = {}, this.lastLobbySeen = null, this.scaffoldedPluginNamesKey = null, await (0, bi.e)(zz), this.bridge.onUnlinked()
      }
      async tryRestoreHandle() {
        const zz = this.bridge.getStorageKey(),
          uz = await (0, bi.s)(zz);
        return !!uz && (!!await (0, bi.k)(uz, "readwrite") && (this.handle = uz, this.linked = !0, await (0, bi.D)(zz, uz), await this.scaffoldLocalTypes(uz), !0))
      }
      scaffoldLocalTypes(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.bridge.getLobbyFiles();
        return this.scaffoldingLocalTypes = this.scaffoldingLocalTypes.then((async () => {
          try {
            const Ez = (await ui(uz)).map((zz => Dn.i[zz])),
              nz = Ez.map((zz => {
                var uz;
                return `${zz.name}:${Object.keys(null!==(uz=null===zz||void 0===zz?void 0:zz.files)&&void 0!==uz?uz:{}).sort().join(",")}`
              })).join("\0");
            if (this.scaffoldedPluginNamesKey === nz) return;
            const {
              ensureLocalBloxdTypes: iz
            } = await Promise.all([bz.e(81), bz.e(287), bz.e(292)]).then((() => bz(40702)));
            await iz(zz, Ez), this.scaffoldedPluginNamesKey = nz
          } catch (Ez) {
            console.error("[WorldCodeDirectorySync] Failed to scaffold local @bloxd types", Ez)
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
      async onDocTextChanged(zz, uz) {
        if (!this.handle) return;
        const bz = [this.scaffoldLocalTypes(this.handle, {
          ...this.bridge.getLobbyFiles(),
          [zz]: uz
        })];
        this.running && (this.pendingDocText.set(zz, uz), bz.push(this.flushDocTextToDisk())), await Promise.all(bz)
      }
      async flushDocTextToDisk() {
        if (this.flushingDocText || this.applying || !this.handle || 0 === this.pendingDocText.size) return;
        const zz = this.handle;
        this.flushingDocText = !0, this.applying = !0;
        try {
          for (; this.pendingDocText.size > 0;) {
            const uz = [...this.pendingDocText];
            this.pendingDocText.clear();
            for (const [bz, Ez] of uz) this.lastSynced[bz] !== Ez && (await (0, bi.L)(zz, bz, Ez), this.lastSynced = {
              ...this.lastSynced,
              [bz]: Ez
            })
          }
        } catch (uz) {
          console.error("[WorldCodeDirectorySync] Failed to write remote doc to disk", uz), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
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
            await this.onDiskFilesChanged(await (0, bi.y)(this.handle))
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
            if (!await (0, bi.k)(this.handle, "readwrite")) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncPermissionDenied"), "warning"), void(this.reconcileSettled = !0);
            await this.bridge.pullLobbyFiles();
            const uz = this.bridge.getLobbyFiles(),
              bz = await (0, bi.y)(this.handle);
            for (const zz of Object.keys(uz).filter(Wn.d)) {
              if (bz[zz] === bi.p) return void this.bridge.setMessage(`Move ${zz} outside the linked folder before syncing its placeholder.`, "warning");
              bz[zz] = Wn.q
            }
            if (Ei(bz, uz)) {
              for (const zz of Object.keys(uz).filter(Wn.d)) await (0, bi.L)(this.handle, zz, Wn.q);
              return this.lastSynced = {
                ...bz
              }, void this.beginWatch()
            }
            const Ez = await this.promptReconcile(function(zz) {
              return null !== (0, Un.c)(zz)
            }(bz));
            if ("unlink" === Ez) return void await this.unlinkFolder();
            if ("dismissed" === Ez) return void(this.reconcileSettled = !0);
            this.applying = !0;
            try {
              if ("local" === Ez) {
                if (!this.bridge.canEditCode()) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncNeedEdit"), "warning"), void(this.reconcileSettled = !0);
                await this.applyLocalTreeToLobby(bz);
                for (const zz of Object.keys(uz).filter(Wn.d)) await (0, bi.L)(this.handle, zz, Wn.q);
                this.lastSynced = {
                  ...await (0, bi.y)(this.handle)
                }
              } else await (0, bi.N)(this.handle, uz), this.lastSynced = {
                ...uz
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
        return await new Promise((uz => {
          const bz = [{
              choice: "local",
              Button: Fz.f,
              labelKey: "directorySyncUseLocal",
              descriptionKey: "directorySyncUseLocalDescription"
            }, {
              choice: "live",
              Button: Fz.f,
              labelKey: "directorySyncUseLive",
              descriptionKey: "directorySyncUseLiveDescription"
            }, {
              choice: "unlink",
              Button: Fz.f,
              labelKey: "directorySyncUseUnlink",
              descriptionKey: "directorySyncUseUnlinkDescription"
            }],
            Ez = (0, Oz.jsxs)("div", {
              className: "CodeEditorDirectorySyncPrompt",
              children: [(0, Oz.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptTitle",
                children: this.bridge.t("codeEditor:directorySyncDifferTitle")
              }), (0, Oz.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptBody",
                children: zz ? this.bridge.t("codeEditor:directorySyncDifferBody") : this.bridge.t("codeEditor:directorySyncLocalInvalidEntry")
              }), (0, Oz.jsx)("div", {
                className: "CodeEditorDirectorySyncOptions",
                children: bz.filter((uz => "local" !== uz.choice || zz)).map((zz => {
                  let {
                    choice: bz,
                    Button: Ez,
                    labelKey: iz,
                    descriptionKey: lz
                  } = zz;
                  return (0, Oz.jsxs)("div", {
                    className: "CodeEditorDirectorySyncOption",
                    children: [(0, Oz.jsx)(Ez, {
                      className: "CodeEditorButton",
                      onClick: () => {
                        (zz => {
                          nz.tearDownNotification(), uz(zz)
                        })(bz)
                      },
                      children: this.bridge.t(`codeEditor:${iz}`)
                    }), (0, Oz.jsx)("div", {
                      className: "CodeEditorDirectorySyncOptionDescription",
                      children: this.bridge.t(`codeEditor:${lz}`)
                    })]
                  }, bz)
                }))
              })]
            }),
            nz = pn.NotificationProvider.showCustomPopup({
              body: Ez,
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "worldCodeDirectorySync"
            });
          nz.getResult().then((zz => {
            "notificationTornDown" === zz && uz("dismissed")
          }))
        }))
      }
      beginWatch() {
        this.handle && (this.stopContinuousSync(), this.reconcileSettled = !0, this.running = !0, this.stopWatch = (0, bi.G)(this.handle, (zz => {
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
        const uz = this.bridge.getLobbyFiles();
        let bz = ii(zz, this.lastSynced);
        for (const iz in uz)
          if ((0, Wn.d)(iz) && bz[iz] === bi.p) return void this.bridge.setMessage("Move binary schematic files outside the linked folder. Add them through the Code Editor.", "warning");
        const Ez = Object.keys(bz).filter((zz => (0, Wn.d)(zz) && !(zz in uz)));
        Ez.length > 0 && this.bridge.setMessage("Add or rename schematics in the Code Editor. Unknown local schematic files are not uploaded.", "warning");
        for (const iz of Object.keys(uz).filter(Wn.d))(iz in bz || Ez.length > 0 || !(iz in this.lastSynced)) && (bz[iz] = Wn.q);
        if (!Ei(bz, zz)) {
          this.applying = !0;
          try {
            await this.persistEntryRepair(zz, bz), bz = ii(await (0, bi.y)(this.handle), this.lastSynced)
          } finally {
            this.applying = !1
          }
        }
        if (!Ei(bz, this.lastSynced)) {
          this.applying = !0;
          try {
            const zz = ni(this.lastSynced, bz);
            if (await this.pushDiskDeltaToLobby(bz, uz), null !== this.lastLobbySeen)
              for (const bz of [...zz.creates, ...zz.updates, ...zz.deletes])(0, Wn.d)(bz) || (bz in uz ? this.lastLobbySeen[bz] = uz[bz] : delete this.lastLobbySeen[bz]);
            this.lastSynced = {
              ...bz
            }
          } catch (nz) {
            console.error("[WorldCodeDirectorySync] Disk\u2192lobby sync failed", nz), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async persistEntryRepair(zz, uz) {
        if (this.handle) {
          for (const bz of Object.keys(zz)) bz in uz || await (0, bi.z)(this.handle, bz);
          for (const [bz, Ez] of Object.entries(uz)) zz[bz] !== Ez && await (0, bi.L)(this.handle, bz, Ez)
        }
      }
      async applyRemoteTreeToDisk(zz) {
        if (!this.handle) return;
        const uz = this.lastLobbySeen;
        if (null === uz) return void(this.lastLobbySeen = {
          ...zz
        });
        const bz = Object.keys(zz).filter((bz => uz[bz] !== zz[bz])),
          Ez = Object.keys(uz).filter((uz => !(uz in zz)));
        if (0 !== bz.length || 0 !== Ez.length) {
          this.applying = !0;
          try {
            for (const uz of [...Ez, ...bz]) try {
              if (uz in zz) await (0, bi.L)(this.handle, uz, zz[uz]), this.lastSynced = {
                ...this.lastSynced,
                [uz]: zz[uz]
              }, this.lastLobbySeen = {
                ...this.lastLobbySeen,
                [uz]: zz[uz]
              };
              else {
                await (0, bi.z)(this.handle, uz);
                const zz = {
                  ...this.lastSynced
                };
                delete zz[uz], this.lastSynced = zz;
                const bz = {
                  ...this.lastLobbySeen
                };
                delete bz[uz], this.lastLobbySeen = bz
              }
            } catch (nz) {
              console.error("[WorldCodeDirectorySync] Lobby\u2192disk sync failed", nz), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
            }
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async renameLobbyEntryIfSwitched(zz, uz) {
        const bz = function(zz, uz) {
          const bz = (0, Un.c)(zz),
            Ez = (0, Un.c)(uz);
          return bz && Ez && bz !== Ez ? {
            from: bz,
            to: Ez
          } : null
        }(zz, uz);
        return !!bz && (this.bridge.renameFile(bz.from, bz.to), await this.bridge.waitForLobbyPath(bz.to, !0), !0)
      }
      async applyLocalTreeToLobby(zz) {
        var uz;
        const bz = this.bridge.getActivePath();
        await this.renameLobbyEntryIfSwitched(this.bridge.getLobbyFiles(), zz);
        const Ez = this.bridge.getLobbyFiles(),
          nz = ni(Ez, zz),
          iz = li(nz.deletes, Ez);
        for (const Hz of nz.creates)(0, Wn.d)(Hz) || (this.bridge.createFile(Hz, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(Hz, !0));
        for (const Hz of iz)(0, Wn.d)(Hz) || (this.bridge.deleteFile(Hz), await this.bridge.waitForLobbyPath(Hz, !1));
        if (!(0, Un.c)(this.bridge.getLobbyFiles()) && !(0, Un.c)(zz)) {
          if (this.bridge.createFile(qn.i, {
              focus: !1
            }), await this.bridge.waitForLobbyPath(qn.i, !0), !this.handle) return;
          await (0, bi.L)(this.handle, qn.i, ""), zz = {
            ...zz,
            [qn.i]: ""
          }
        }
        const lz = this.bridge.getLobbyFiles();
        for (const Hz of Object.keys(zz))(0, Wn.d)(Hz) || lz[Hz] !== zz[Hz] && await Mi(this.bridge, Hz, zz[Hz]);
        const Mz = this.bridge.getLobbyFiles(),
          tz = bz in Mz ? bz : null !== (uz = (0, Un.c)(Mz)) && void 0 !== uz ? uz : qn.i;
        await this.bridge.ensureJoined(tz)
      }
      async pushDiskDeltaToLobby(zz, uz) {
        const bz = this.bridge.getActivePath(),
          Ez = await this.renameLobbyEntryIfSwitched(uz, zz) ? this.bridge.getLobbyFiles() : uz,
          nz = ni(this.lastSynced, zz),
          iz = li(nz.deletes, Ez).filter((zz => zz in Ez));
        for (const lz of nz.creates)(0, Wn.d)(lz) || (lz in this.bridge.getLobbyFiles() || (this.bridge.createFile(lz, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(lz, !0)), await Mi(this.bridge, lz, zz[lz]));
        for (const lz of iz)(0, Wn.d)(lz) ? await this.bridge.deleteSchematic(lz) : (this.bridge.deleteFile(lz), await this.bridge.waitForLobbyPath(lz, !1));
        for (const lz of nz.updates)(0, Wn.d)(lz) || await Mi(this.bridge, lz, zz[lz]);
        bz in this.bridge.getLobbyFiles() && this.bridge.getActivePath() !== bz && await this.bridge.ensureJoined(bz)
      }
    }
    var Hi = bz(1195);

    function Oi() {
      const {
        websocketUrl: zz,
        gameNameWithVariation: uz,
        lobbyName: bz
      } = Hz.gameBridge.latest("connectedGame");
      return {
        gsUrl: Hi.clientSideServerUrls.getHttpUrlFromWebSocketUrl(zz),
        gameNameWithVariation: uz,
        lobbyName: bz
      }
    }
    async function di(zz) {
      const {
        gsUrl: uz,
        gameNameWithVariation: bz,
        lobbyName: Ez
      } = Oi();
      return await (0, mn.postBinaryWithMetricsCookiesAndCustomResponse)(`${uz}/code/schematics`, Vn.mk.schematics.toBuffer({
        gameNameWithVariation: bz,
        lobbyName: Ez,
        request: JSON.stringify(zz)
      }), {
        retries: 0
      }, mn.HttpPayloadType.json)
    }
    var Fi = bz(35840);

    function Zi(zz) {
      let {
        path: uz,
        revision: bz
      } = zz;
      const [Ez, iz] = (0, nz.useState)(""), [lz, Mz] = (0, nz.useState)(!1), [tz, Hz] = (0, nz.useState)(0);
      return (0, nz.useEffect)((() => {
        let zz = !1;
        return iz(""), Mz(!1), di({
          action: "preview",
          path: uz
        }).then((uz => {
          zz || iz(`data:image/webp;base64,${uz.previewBase64}`)
        })).catch((uz => {
          console.error("Could not load schematic preview", uz), zz || Mz(!0)
        })), () => {
          zz = !0
        }
      }), [uz, bz, tz]), (0, Oz.jsxs)("div", {
        className: "SchematicPreview",
        children: [Ez && (0, Oz.jsx)("img", {
          src: Ez,
          alt: `Preview of ${uz}`
        }), !Ez && !lz && (0, Oz.jsx)(Az.c, {
          loaderType: "Secondary"
        }), lz && (0, Oz.jsxs)(Oz.Fragment, {
          children: [(0, Oz.jsx)("div", {
            className: "SmallTextLight",
            role: "status",
            children: "Preview unavailable."
          }), (0, Oz.jsx)(Fz.f, {
            onClick: () => {
              Hz(tz + 1)
            },
            children: "Retry preview"
          })]
        })]
      })
    }

    function Ri(zz) {
      var uz;
      let {
        initialPath: bz,
        onChanged: Ez,
        onClose: iz
      } = zz;
      const lz = "" === bz,
        [Mz, tz] = (0, nz.useState)(null),
        [Hz, pz] = (0, nz.useState)(bz),
        [dz, Zz] = (0, nz.useState)(!1),
        [Rz, Kz] = (0, nz.useState)(!1),
        [wz, Xz] = (0, nz.useState)(null),
        [fz, sz] = (0, nz.useState)(!1),
        [rz, oz] = (0, nz.useState)(""),
        Nz = (0, nz.useRef)(null),
        vz = (0, nz.useRef)(!1),
        xz = (0, nz.useRef)(!0);
      (0, nz.useEffect)((() => (xz.current = !0, di({
        action: "state"
      }).then((zz => {
        xz.current && tz(zz)
      })).catch((zz => {
        console.error("Could not load schematic assets", zz), xz.current && oz("Could not load schematics. Reopen this panel to retry.")
      })), () => {
        xz.current = !1
      })), []);
      const Jz = null === Mz || void 0 === Mz ? void 0 : Mz.assets[bz],
        Az = Object.keys(null !== (uz = null === Mz || void 0 === Mz ? void 0 : Mz.assets) && void 0 !== uz ? uz : {}).length,
        Tz = Hz.trim(),
        Lz = Tz ? (0, Wn.d)(Tz) ? null !== Mz && void 0 !== Mz && Mz.assets[Tz] && (lz || Tz !== bz) ? "A schematic already uses that path." : "" : "Use a relative path ending in .bloxdschem." : "",
        Pz = !!Tz && !Lz && (lz ? Az < Wn.g : Tz !== bz),
        Gz = fz || !Mz;
      async function az(zz) {
        if (!vz.current && xz.current) {
          vz.current = !0, sz(!0), oz("");
          try {
            const uz = await di({
              ...zz,
              expectedRevision: Mz.revision
            });
            Ez(uz), xz.current && iz()
          } catch (bz) {
            var uz;
            if (console.error("Schematic asset operation failed", bz), xz.current) oz(bz instanceof Qz.c ? null !== (uz = bz.errorMessageForUser) && void 0 !== uz ? uz : bz.message : String(bz));
            try {
              const zz = await di({
                action: "state"
              });
              Ez(zz), xz.current && tz(zz)
            } catch (nz) {
              console.error("Could not refresh schematic assets", nz)
            }
          } finally {
            vz.current = !1, xz.current && sz(!1)
          }
        }
      }
      return (0, Oz.jsxs)("div", {
        className: "WorldCodeSchematicPanel InputGenericPopup PromptGenericPopup FileTreePathPopup",
        children: [(0, Oz.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: lz ? "New schematic" : dz ? "Rename schematic" : "Schematic"
        }), rz && (0, Oz.jsx)("div", {
          className: "InputGenericPopupError SmallTextLight",
          role: "alert",
          children: rz
        }), !Mz && !rz && (0, Oz.jsx)("div", {
          className: "SmallTextLight",
          children: "Loading schematic\u2026"
        }), (0, Oz.jsxs)("fieldset", {
          disabled: Gz,
          children: [lz || dz ? (0, Oz.jsxs)("label", {
            className: "SchematicField",
            children: [(0, Oz.jsx)("span", {
              className: "SmallTextBold",
              children: "Project path"
            }), (0, Oz.jsx)("div", {
              className: "InputGenericPopupInputRow",
              children: (0, Oz.jsx)(Ju.d, {
                className: "InputGenericPopupInput",
                defaultValue: bz,
                placeholderText: "maps/arena.bloxdschem",
                maxLength: 64,
                onValueChange: pz
              }, dz ? "rename" : "create")
            })]
          }) : (0, Oz.jsx)("div", {
            className: "SchematicPath SmallTextBold",
            children: bz
          }), (lz || dz) && Lz && (0, Oz.jsx)("div", {
            className: "InputGenericPopupError SmallTextLight",
            role: "alert",
            children: Lz
          }), lz ? (0, Oz.jsxs)(Oz.Fragment, {
            children: [Az >= Wn.g && (0, Oz.jsxs)("div", {
              className: "SmallTextLight",
              children: ["Delete a schematic before adding another (", Wn.g, " maximum)."]
            }), Rz ? (0, Oz.jsxs)(Oz.Fragment, {
              children: [(0, Oz.jsx)("div", {
                className: "SmallTextBold",
                children: "Choose from profile"
              }), (0, Oz.jsx)("div", {
                className: "SchematicProfilePicker",
                "aria-disabled": Gz || !Pz,
                children: (0, Oz.jsx)(Fi.b, {
                  loading: null === wz,
                  schematics: null !== wz && void 0 !== wz ? wz : [],
                  disableAutoExport: !0,
                  onSchematicPicked: zz => {
                    !Gz && Pz && az({
                      action: "profile",
                      path: Tz,
                      schematicId: zz.schematicId
                    })
                  }
                })
              }), (0, Oz.jsx)("div", {
                className: "InputGenericPopupButtons",
                children: (0, Oz.jsx)(Fz.f, {
                  className: "InputGenericPopupButton",
                  disabled: Gz,
                  onClick: () => {
                    Kz(!1)
                  },
                  children: "Back"
                })
              })]
            }) : (0, Oz.jsxs)("div", {
              className: "InputGenericPopupButtons",
              children: [(0, Oz.jsx)(Fz.f, {
                className: "InputGenericPopupButton",
                disabled: Gz || !Pz,
                onClick: () => {
                  Nz.current.click()
                },
                children: "Upload Schematic"
              }), (0, Oz.jsx)(Fz.f, {
                className: "InputGenericPopupButton",
                disabled: Gz || !Pz,
                onClick: () => {
                  !async function() {
                    if (Kz(!0), oz(""), !wz) try {
                      const zz = await (0, mn.postJsonWithMetricsCookiesAndJsonResponse)(`${Hi.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
                        retries: 0,
                        minTimeout: 3e3
                      });
                      xz.current && Xz(zz)
                    } catch (zz) {
                      console.error("Could not load profile schematics", zz), xz.current && (Kz(!1), oz("Could not load your schematics. Try again."))
                    }
                  }()
                },
                children: "Choose from profile"
              })]
            }), (0, Oz.jsx)("input", {
              ref: Nz,
              type: "file",
              accept: ".bloxdschem",
              hidden: !0,
              onChange: zz => {
                var uz;
                const bz = null === (uz = zz.target.files) || void 0 === uz ? void 0 : uz[0];
                if (zz.target.value = "", !bz) return;
                if (bz.size > Wn.j) return void oz("The schematic file is too large.");
                const Ez = Tz;
                sz(!0);
                const nz = new FileReader;
                nz.onload = () => {
                  az({
                    action: "upload",
                    path: Ez,
                    base64: String(nz.result).split(",")[1]
                  })
                }, nz.onerror = () => {
                  console.error("Could not read schematic file", nz.error), xz.current && (sz(!1), oz("Could not read the selected file."))
                }, nz.readAsDataURL(bz)
              }
            })]
          }) : Jz ? (0, Oz.jsxs)(Oz.Fragment, {
            children: [!dz && (0, Oz.jsx)(Zi, {
              path: bz,
              revision: Mz.revision
            }), !dz && (0, Oz.jsxs)("p", {
              className: "SchematicDetails SmallTextLight",
              children: [Math.ceil(Jz.byteSize / 1024), " KB \xb7 ", Jz.dimensions.join(" \xd7 "), " blocks"]
            }), (0, Oz.jsx)("div", {
              className: "InputGenericPopupButtons",
              children: dz ? (0, Oz.jsxs)(Oz.Fragment, {
                children: [(0, Oz.jsx)(Fz.f, {
                  className: "InputGenericPopupButton",
                  disabled: Gz || !Pz,
                  onClick: () => {
                    az({
                      action: "rename",
                      path: bz,
                      newPath: Tz
                    })
                  },
                  children: "Rename"
                }), (0, Oz.jsx)(Fz.f, {
                  className: "InputGenericPopupButton",
                  disabled: Gz,
                  onClick: () => {
                    Zz(!1), pz(bz)
                  },
                  children: "Cancel"
                })]
              }) : (0, Oz.jsxs)(Oz.Fragment, {
                children: [(0, Oz.jsx)(Fz.f, {
                  className: "InputGenericPopupButton",
                  disabled: Gz,
                  onClick: () => {
                    Zz(!0)
                  },
                  children: "Rename"
                }), (0, Oz.jsx)(Fz.K, {
                  className: "InputGenericPopupButton",
                  disabled: Gz,
                  onClick: () => {
                    az({
                      action: "remove",
                      path: bz
                    })
                  },
                  children: "Delete"
                })]
              })
            })]
          }) : Mz && (0, Oz.jsx)("div", {
            className: "SmallTextLight",
            children: "This schematic is no longer in the project."
          })]
        })]
      })
    }

    function Ki(zz) {
      if ("string" !== typeof zz) return null;
      try {
        const uz = JSON.parse(zz);
        return (0, Un.k)(null === uz || void 0 === uz ? void 0 : uz.worldCodeEngine) && "boolean" === typeof uz.engineLocked && function(zz) {
          if (null === zz) return !0;
          const uz = null === zz || void 0 === zz ? void 0 : zz.location;
          return "string" === typeof(null === zz || void 0 === zz ? void 0 : zz.reason) && (null === uz || "string" === typeof(null === uz || void 0 === uz ? void 0 : uz.path) && Number.isInteger(uz.line))
        }(uz.fallback) ? uz : (console.error("[CodeCollab] Malformed engine settings", zz), null)
      } catch (uz) {
        return console.error("[CodeCollab] Failed to parse engine settings", uz), null
      }
    }

    function wi(zz) {
      let {
        fallback: uz,
        onGoToLine: bz
      } = zz;
      const {
        t: Ez
      } = (0, Iz.F)(), {
        location: nz
      } = uz;
      return (0, Oz.jsxs)("div", {
        className: "CodeEditorEngineNotice",
        children: [Ez("codeEditorEngine:notice", {
          reason: uz.reason
        }), nz && (0, Oz.jsxs)(Oz.Fragment, {
          children: [" ", (0, Oz.jsx)("button", {
            type: "button",
            className: "CodeEditorEngineNoticeLink",
            onClick: () => {
              bz(nz.path, nz.line)
            },
            children: Ez("codeEditorEngine:goToLine", {
              line: String(nz.line)
            })
          })]
        })]
      })
    }
    var Xi = bz(4696);

    function fi(zz) {
      let {
        label: uz,
        hint: bz,
        checked: Ez,
        onChange: nz
      } = zz;
      return (0, Oz.jsxs)("label", {
        className: "CodeEditorMoreOptionsRow CodeEditorOptionSwitch",
        children: [(0, Oz.jsxs)("span", {
          className: "CodeEditorOptionSwitchText",
          children: [(0, Oz.jsx)("span", {
            children: uz
          }), (0, Oz.jsx)("span", {
            className: "CodeEditorOptionSwitchHint",
            children: bz
          })]
        }), (0, Oz.jsx)("span", {
          className: "SwitchContainer",
          children: (0, Oz.jsx)(su.b, {
            className: "SwitchCheckbox",
            checked: Ez,
            onChange: zz => {
              nz(zz.target.checked)
            },
            disabled: !1
          })
        })]
      })
    }

    function si(zz) {
      let {
        engine: uz,
        onSetEngine: bz,
        aiHints: Ez,
        variation: nz
      } = zz;
      const {
        t: iz
      } = (0, Iz.F)();
      return (0, Oz.jsxs)("div", {
        className: "CodeEditorMoreOptions",
        children: [(0, Oz.jsx)("div", {
          className: "CodeEditorMoreOptionsTitle",
          children: iz("codeEditor:moreOptions")
        }), uz && (0, Oz.jsx)(fi, {
          label: iz("codeEditorEngine:toggle"),
          hint: iz("codeEditorEngine:toggleHint"),
          checked: "ses" === uz,
          onChange: zz => {
            bz(zz ? "ses" : "quickjs")
          }
        }), Ez && (0, Oz.jsx)(fi, {
          label: iz("codeEditorAiHints:toggle"),
          hint: iz("codeEditorAiHints:toggleHint"),
          checked: Ez.shown,
          onChange: Ez.setShown
        }), nz && (0, Oz.jsxs)("div", {
          className: "CodeEditorMoreOptionsRow",
          children: [(0, Oz.jsx)(Xi.d, {
            label: "codeEditor:variationLabel",
            children: (0, Oz.jsx)(Ju.d, {
              className: "CodeEditorVariationInput",
              maxLength: 32,
              defaultValue: nz.name,
              onValueChange: nz.setName,
              onEnter: nz.reload
            })
          }), (0, Oz.jsx)(Fz.B, {
            className: "CodeEditorButton",
            onClick: nz.reload,
            children: iz("codeEditor:reloadAsVariation")
          })]
        })]
      })
    }
    var ri = bz(36316),
      oi = bz(36319);

    function Ni(zz) {
      let {
        close: uz
      } = zz;
      const {
        t: bz
      } = (0, Iz.F)(), Ez = [{
        name: bz("codeEditor:welcomeTutorial"),
        tutorial: "welcome"
      }, {
        name: bz("codeEditor:docsOverviewTutorial"),
        tutorial: "docsOverview"
      }, {
        name: bz("codeEditorAiTutorial:tutorialName"),
        tutorial: "aiHelperOverview"
      }];
      return (0, Oz.jsxs)("div", {
        className: "PromptGenericPopup CodeEditorTutorialsPopup",
        children: [(0, Oz.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: bz("codeEditor:tutorialsTitle")
        }), (0, Oz.jsx)("div", {
          className: "CodeEditorTutorialsList",
          children: Ez.map((zz => (0, Oz.jsx)(Fz.f, {
            className: "CodeEditorTutorialsListButton",
            onClick: () => {
              uz(), (0, oi.A)(zz.tutorial)
            },
            children: zz.name
          }, zz.tutorial)))
        })]
      })
    }
    var vi = bz(111),
      xi = bz(36021),
      Ji = bz(8442);
    const Ai = (0, nz.forwardRef)((function(zz, uz) {
      let {
        value: bz,
        onChange: Ez,
        onSubmit: nz,
        placeholder: iz,
        maxLength: lz,
        rows: Mz = 2,
        allowNewLines: tz = !1,
        onKeyDown: Hz,
        before: pz
      } = zz;
      const {
        t: dz
      } = (0, Iz.F)(), Zz = "" !== bz.trim(), Rz = () => {
        Zz && nz()
      };
      return (0, Oz.jsxs)("div", {
        className: "PanelPromptInputRow",
        children: [pz, (0, Oz.jsx)("textarea", {
          ref: uz,
          className: "PanelPromptInput",
          value: bz,
          maxLength: lz,
          rows: Mz,
          placeholder: iz,
          spellCheck: !1,
          autoComplete: "off",
          onChange: zz => {
            Ez(tz ? zz.target.value : zz.target.value.replace(/\r?\n/g, " "))
          },
          onKeyDown: zz => {
            zz.nativeEvent.isComposing || 229 === zz.nativeEvent.keyCode ? zz.stopPropagation() : "Escape" !== zz.key && (zz.stopPropagation(), null === Hz || void 0 === Hz || Hz(zz), zz.defaultPrevented || "Enter" !== zz.key || tz && zz.shiftKey || (zz.preventDefault(), Rz()))
          }
        }), (0, Oz.jsx)(Fz.f, {
          className: "PanelPromptSend",
          disabled: !Zz,
          onClick: Rz,
          ariaLabel: dz("codeEditorPanels:send"),
          children: (0, Oz.jsx)(Kz.c, {
            name: "arrow-up"
          })
        })]
      })
    }));

    function Ti(zz) {
      let {
        inputRef: uz
      } = zz;
      const {
        t: bz
      } = (0, Iz.F)(), {
        messages: Ez,
        reportedPlayers: iz,
        channel: lz
      } = (0, Ji.n)(), [Mz, tz] = (0, nz.useState)(""), Hz = (0, nz.useRef)({
        stepsBack: 0,
        text: ""
      });
      return (0, Oz.jsxs)("div", {
        className: "CodeEditorChatPanel",
        children: [(0, Oz.jsx)("div", {
          className: "CodeEditorChatHeader",
          children: (0, Oz.jsx)("span", {
            className: "CodeEditorChatTitle",
            children: bz("codeEditorChat:title")
          })
        }), 0 === Ez.length ? (0, Oz.jsx)("div", {
          className: "CodeEditorChatEmpty",
          children: bz("codeEditorChat:empty")
        }) : (0, Oz.jsx)("div", {
          className: "ChatMessages CodeEditorChatMessages",
          children: (0, Oz.jsx)(xi.b, {
            messages: Ez,
            reportedPlayers: iz
          })
        }), (0, Oz.jsx)(Ai, {
          ref: uz,
          value: Mz,
          onChange: tz,
          onSubmit: () => {
            (0, Ji.l)(Mz), tz(""), Hz.current = {
              stepsBack: 0,
              text: ""
            }
          },
          maxLength: xz.ed,
          rows: 1,
          placeholder: lz ? bz("touchOnly" === (0, vi.e)() ? "codeEditorChat:channelPlaceholderTouch" : "codeEditorChat:channelPlaceholder", {
            channel: lz.channelName
          }) : bz("codeEditorChat:placeholder"),
          before: lz && (0, Oz.jsx)("button", {
            type: "button",
            className: "CodeEditorChatChannel",
            style: {
              backgroundColor: lz.elementBgColor
            },
            onClick: () => {
              Ji.d.selectNextChannel(), uz.current.focus()
            },
            children: (0, Oz.jsx)(Nz.b, {
              text: lz.elementContent
            })
          }),
          onKeyDown: zz => {
            const uz = Mz === Hz.current.text;
            if ("ArrowUp" !== zz.key && "ArrowDown" !== zz.key || !uz && "" !== Mz) "Tab" === zz.key && !zz.shiftKey && lz && (zz.preventDefault(), Ji.d.selectNextChannel());
            else {
              zz.preventDefault();
              const bz = uz ? Hz.current.stepsBack : 0;
              Hz.current = (0, Ji.i)(bz + ("ArrowUp" === zz.key ? 1 : -1)), tz(Hz.current.text)
            }
          }
        })]
      })
    }
    var Li = bz(36326);

    function Pi(zz) {
      let {
        xd: uz,
        worldPanel: bz,
        closeWorld: Ez,
        aiShown: nz,
        defaultWidth: iz,
        children: lz
      } = zz;
      const Mz = "hidden" !== uz;
      return (0, Oz.jsx)(Li.b, {
        side: "right",
        defaultSize: Mz ? "max(18rem, 40%)" : iz,
        covers: "expanded" === uz ? "always" : Mz || nz ? "narrow" : void 0,
        children: (0, Oz.jsxs)("div", {
          className: Fu()("CodeEditorRightColumn", {
            WorldExpanded: "expanded" === uz
          }),
          children: [Mz && (0, Oz.jsx)(Li.b, {
            side: "top",
            onClose: Ez,
            children: bz
          }), lz]
        })
      })
    }
    var Gi = bz(1920),
      ai = bz(2014),
      Vi = bz(1273);
    class mi {
      constructor(zz, uz, bz) {
        this.measure = zz, this.apply = uz, this.now = bz, this.last = null, this.resizedAt = -1 / 0, this.resizing = !1, this.stretchedAt = null
      }
      get rect() {
        var zz, uz;
        return null !== (zz = null === (uz = this.last) || void 0 === uz ? void 0 : uz.rect) && void 0 !== zz ? zz : null
      }
      sync() {
        const zz = function(zz) {
          const uz = Math.round(zz.left),
            bz = Math.round(zz.top);
          return {
            left: uz,
            top: bz,
            width: Math.round(zz.right) - uz,
            height: Math.round(zz.bottom) - bz
          }
        }(this.measure());
        if (zz.width <= 0 || zz.height <= 0) return;
        const uz = this.now(),
          bz = this.last;
        let Ez = {
          width: zz.width,
          height: zz.height
        };
        null === bz || zz.width === bz.rect.width && zz.height === bz.rect.height || (this.resizing = uz - this.resizedAt < 100, this.resizedAt = uz);
        const nz = null !== bz && this.resizing && uz - this.resizedAt < 100 && (zz.width !== bz.bufferSize.width || zz.height !== bz.bufferSize.height);
        nz && (this.stretchedAt ??= uz), nz && uz - this.stretchedAt < 250 ? Ez = bz.bufferSize : this.stretchedAt = null;
        const iz = {
          rect: zz,
          bufferSize: Ez
        };
        var lz, Mz;
        null !== bz && (Mz = iz, (lz = bz).rect.left === Mz.rect.left && lz.rect.top === Mz.rect.top && lz.rect.width === Mz.rect.width && lz.rect.height === Mz.rect.height && lz.bufferSize.width === Mz.bufferSize.width && lz.bufferSize.height === Mz.bufferSize.height) || (this.last = iz, this.apply(iz))
      }
      stop() {
        null !== this.last && (this.last = null, this.apply(null))
      }
    }

    function qi(zz) {
      const {
        style: uz
      } = document.documentElement;
      for (const [bz, Ez] of [
          ["--worldViewLeft", null === zz || void 0 === zz ? void 0 : zz.left],
          ["--worldViewTop", null === zz || void 0 === zz ? void 0 : zz.top],
          ["--worldViewWidth", null === zz || void 0 === zz ? void 0 : zz.width],
          ["--worldViewHeight", null === zz || void 0 === zz ? void 0 : zz.height]
        ]) void 0 === Ez ? uz.removeProperty(bz) : uz.setProperty(bz, `${Ez}px`)
    }
    var Ui = bz(1673),
      ci = bz(1929);

    function gi(zz, uz) {
      (0, nz.useEffect)((() => {
        if (!zz) return;
        const bz = zz => {
          var bz;
          "Escape" === zz.key ? (zz.stopPropagation(), zz.preventDefault(), uz()) : (bz = zz.code, Object.entries(lb.s).some((zz => {
            let [uz, Ez] = zz;
            const nz = ci.e[uz];
            return nz.includes("ui") && !nz.includes("core") && Ez.includes(bz)
          })) && !(0, Ui.isTextEntry)(zz.target) && zz.preventDefault())
        };
        window.addEventListener("keydown", bz, !0);
        const Ez = (0, gz.i)(uz);
        return () => {
          window.removeEventListener("keydown", bz, !0), Ez()
        }
      }), [zz, uz])
    }

    function Si() {
      return (0, rn.h)().some((zz => zz !== rn.b))
    }

    function yi(zz, uz) {
      return zz.map((zz => uz ? String(zz) : zz.toFixed(1))).join(", ")
    }

    function Di(zz) {
      let {
        freeCamera: uz,
        picking: bz,
        hovered: Ez
      } = zz;
      const {
        t: iz
      } = (0, Iz.F)(), lz = (0, nz.useRef)(null), Mz = (0, nz.useRef)(null);
      return (0, nz.useEffect)((() => {
        const zz = (zz, uz) => {
            zz.textContent !== uz && (zz.textContent = uz)
          },
          bz = () => {
            const bz = uz ? Hz.gameBridge.lookup("freeCameraPos", null) : null;
            zz(lz.current, yi(null !== bz && void 0 !== bz ? bz : Hz.gameBridge.lookup("localPos", null), !1));
            const Ez = Hz.gameBridge.lookup("targetedBlockPos", null);
            zz(Mz.current, Ez ? yi(Ez, !0) : "-")
          };
        return bz(), (0, Vi.t)(bz)
      }), [uz]), (0, Oz.jsxs)("div", {
        className: "WorldPanelCoordinates",
        children: [(0, Oz.jsx)("span", {
          className: "WorldPanelCoordsLabel",
          children: iz(uz ? "codeEditorWorld:camera" : "codeEditorWorld:position")
        }), (0, Oz.jsx)("span", {
          ref: lz
        }), (0, Oz.jsx)("span", {
          className: "WorldPanelCoordsLabel",
          children: iz("codeEditorWorld:lookingAt")
        }), (0, Oz.jsx)("span", {
          ref: Mz,
          hidden: bz
        }), bz && (0, Oz.jsxs)(Oz.Fragment, {
          children: [(0, Oz.jsx)("span", {
            children: Ez ? yi(Ez.pos, !0) : "-"
          }), Ez && (0, Oz.jsx)("span", {
            className: "WorldPanelCoordsName",
            children: Ez.name
          })]
        })]
      })
    }
    var Qi = bz(36328);

    function Wi(zz) {
      const uz = zz.currentTarget.getBoundingClientRect();
      return {
        x: (zz.clientX - uz.left) / uz.width,
        y: (zz.clientY - uz.top) / uz.height
      }
    }

    function ei(zz) {
      const [uz, bz] = (0, nz.useState)(!1), [Ez, iz] = (0, nz.useState)(null), lz = (0, nz.useRef)(null);
      (0, nz.useEffect)((() => {
        if (!uz) return;
        let zz = null,
          bz = null,
          Ez = 1 / 0;
        const nz = (0, Vi.o)((uz => {
          Ez += uz;
          const nz = lz.current;
          if (nz === bz && Ez < 100) return;
          bz = nz, Ez = 0;
          const Mz = nz && Hz.gameBridge.lookup("blockAtViewPoint", nz);
          var tz, Oz;
          (tz = Mz) === (Oz = zz) || null !== tz && null !== Oz && tz.name === Oz.name && (0, Qi.e)(tz.pos, Oz.pos) && (0, Qi.e)(tz.normal, Oz.normal) || (zz = Mz, iz(Mz), Hz.gameBridge.send("setBlockHighlight", Mz))
        }));
        return () => {
          nz(), null !== zz && Hz.gameBridge.send("setBlockHighlight", null), iz(null)
        }
      }), [uz]);
      const Mz = (0, nz.useCallback)((() => {
        bz(!1)
      }), []);
      gi(uz, Mz);
      const tz = {
        onPointerMove: zz => {
          lz.current = Wi(zz)
        },
        onPointerLeave: () => {
          lz.current = null
        },
        onClick: Ez => {
          if (!uz) return;
          const nz = Hz.gameBridge.lookup("blockAtViewPoint", Wi(Ez));
          null !== nz && (bz(!1), zz(nz.pos))
        }
      };
      return {
        picking: uz,
        setPicking: bz,
        hovered: Ez,
        slotHandlers: tz
      }
    }

    function ji(zz) {
      Hz.gameBridge.send("setFreeCameraMovesFly", zz)
    }

    function Ii(zz) {
      let {
        shown: uz,
        setShown: bz,
        canInsertCode: Ez
      } = zz;
      const {
        t: iz
      } = (0, Iz.F)(), {
        isTouchScreen: lz
      } = (0, cz.m)(["isTouchScreen"]), Mz = (0, nz.useRef)(null), Hz = (0, nz.useCallback)((() => {
        var zz;
        null === (zz = Mz.current.closest(".CodeEditorBg").querySelector(".cm-content")) || void 0 === zz || zz.focus()
      }), []), {
        control: pz,
        take: dz,
        release: Rz,
        blocked: wz
      } = function(zz) {
        const [uz, bz] = (0, nz.useState)("none"), Ez = (0, nz.useRef)("none"), [iz, lz] = (0, nz.useState)(!1), Mz = zz => {
          Ez.current = zz, bz(zz)
        }, tz = (0, nz.useCallback)((() => {
          const uz = Ez.current;
          "none" !== uz && (Mz("none"), (0, rn.m)(rn.b), "mouse" === uz && zz())
        }), [zz]), Hz = (0, nz.useCallback)((zz => {
          Si() ? lz(!0) : (Mz("mouse" === zz && "touchOnly" !== (0, vi.e)() ? "mouse" : "touch"), (0, rn.k)(rn.b))
        }), []);
        return (0, vz.g)("pointerLockUpdate", (zz => {
          zz && "touch" === Ez.current && "touchOnly" !== (0, vi.e)() ? Mz("mouse") : zz || "mouse" !== Ez.current || tz()
        })), (0, nz.useEffect)((() => {
          if (!iz) return;
          const zz = () => {
            Si() || lz(!1)
          };
          return zz(), (0, rn.d)(zz)
        }), [iz]), gi("none" !== uz, tz), (0, nz.useEffect)((() => {
          if ("none" === uz) return;
          const zz = zz => {
            (0, Ui.isTextEntry)(zz.target) && tz()
          };
          return document.addEventListener("focusin", zz), () => {
            document.removeEventListener("focusin", zz)
          }
        }), [uz, tz]), (0, nz.useEffect)((() => (document.addEventListener("pointerlockerror", tz), () => {
          document.removeEventListener("pointerlockerror", tz)
        })), [tz]), (0, nz.useEffect)((() => () => {
          "none" !== Ez.current && null !== cz.e.get("openInGameMenuName") && (0, rn.m)(rn.b)
        }), []), {
          control: uz,
          take: Hz,
          release: tz,
          blocked: iz
        }
      }(Hz), Xz = (0, ai.b)(Li.c);
      (0, nz.useEffect)((() => {
        "touch" !== pz || "shown" !== uz || Xz ? "none" === pz && "expanded" === uz && bz("shown") : bz("expanded")
      }), [pz, Xz]),
      function(zz, uz) {
        const bz = (0, nz.useRef)(uz);
        bz.current = uz;
        const Ez = (0, nz.useRef)(null);
        (0, nz.useLayoutEffect)((() => {
          const uz = new mi((() => zz.current.getBoundingClientRect()), (zz => {
            var uz;
            "none" !== bz.current && qi(null !== (uz = null === zz || void 0 === zz ? void 0 : zz.rect) && void 0 !== uz ? uz : null), (0, Vi.y)().setGameView(zz)
          }), (() => performance.now()));
          Ez.current = uz, uz.sync();
          const nz = (0, Vi.m)((() => {
            uz.sync()
          }));
          return () => {
            nz(), cz.e.set({
              worldPanelHud: null
            }), uz.stop()
          }
        }), [zz]), (0, nz.useLayoutEffect)((() => {
          Ez.current.sync(), qi("none" === uz ? null : Ez.current.rect), cz.e.set({
            worldPanelHud: uz
          })
        }), [uz])
      }(Mz, "touch" === pz ? "touchControls" : "none");
      const {
        picking: fz,
        setPicking: sz,
        hovered: rz,
        slotHandlers: oz
      } = ei((zz => {
        Zz.k.sK("CodeEditorInsertText", {
          text: `[${zz.join(", ")}]`,
          focus: !lz
        }), (0, Li.c)() && bz("hidden")
      })), Nz = function() {
        const {
          allowed: zz,
          movesFly: uz
        } = (0, Jz.h)("freeCamera"), bz = (0, nz.useRef)(uz), Ez = (0, nz.useRef)(uz);
        return Ez.current !== uz && (Ez.current = uz, bz.current = uz), (0, nz.useEffect)((() => () => {
          bz.current && ji(!1)
        }), []), {
          allowed: zz,
          on: uz,
          toggle: () => {
            bz.current = !uz, ji(!uz)
          }
        }
      }(), xz = (0, tz.g)("hideCoordinates"), Az = (0, Jz.h)("localPlayerAlive"), Tz = !Az || wz;
      (0, nz.useEffect)((() => {
        Az || Rz()
      }), [Az, Rz]), (0, nz.useEffect)((() => {
        !Tz && Ez || sz(!1)
      }), [Tz, Ez, sz]);
      const Lz = Nz.on ? Fz.q : Fz.f,
        Pz = fz ? Fz.q : Fz.f;
      return (0, Oz.jsxs)("div", {
        className: "WorldPanel",
        children: [(0, Oz.jsxs)("div", {
          className: "WorldPanelHeader",
          children: [(0, Oz.jsx)("span", {
            className: "WorldPanelTitle",
            children: iz("codeEditorWorld:title")
          }), "touch" === pz && !Xz && (0, Oz.jsx)(Fz.f, {
            className: "WorldPanelButton",
            onClick: Rz,
            children: iz("codeEditorWorld:backToCode")
          }), !Tz && Nz.allowed && !lz && (0, Oz.jsx)(ez.f, {
            tooltipInner: iz("codeEditorWorld:freeCameraTooltip"),
            hoverOnly: !0,
            children: (0, Oz.jsx)(Lz, {
              className: "WorldPanelButton",
              ariaPressed: Nz.on,
              ariaLabel: iz("codeEditorWorld:freeCamera"),
              onClick: Nz.toggle,
              children: (0, Oz.jsx)(Kz.c, {
                name: "video"
              })
            })
          }), !Tz && Ez && (0, Oz.jsx)(ez.f, {
            tooltipInner: iz("codeEditorWorld:pickTooltip"),
            hoverOnly: !0,
            children: (0, Oz.jsxs)(Pz, {
              className: "WorldPanelButton",
              ariaPressed: fz,
              onClick: () => {
                Rz(), sz(!fz)
              },
              children: [(0, Oz.jsx)(Kz.c, {
                name: "crosshairs"
              }), iz("codeEditorWorld:pick")]
            })
          })]
        }), !xz && (0, Oz.jsx)(Di, {
          freeCamera: Nz.on,
          picking: fz,
          hovered: rz
        }), (0, Oz.jsxs)("div", {
          ref: Mz,
          className: Fu()("WorldPanelSlot", {
            TouchControl: "touch" === pz,
            Picking: fz
          }),
          onPointerDown: zz => {
            0 !== zz.button || Tz || fz || dz(zz.pointerType)
          },
          ...oz,
          children: [!Tz && !fz && (0, Oz.jsx)("div", {
            className: "WorldPanelCrosshair",
            children: "+"
          }), !Tz && "touch" !== pz && (0, Oz.jsxs)("div", {
            className: "WorldPanelHint",
            children: [fz && iz(lz ? "codeEditorWorld:tapToPick" : "codeEditorWorld:clickToPick"), !fz && "none" === pz && !Nz.on && iz(lz ? "codeEditorWorld:tapToPlay" : "codeEditorWorld:clickToPlay"), !fz && "none" === pz && Nz.on && iz("codeEditorWorld:clickToFly"), "mouse" === pz && (0, Oz.jsxs)(Oz.Fragment, {
              children: [(0, Oz.jsx)(Gi.e, {
                noaAction: "OpenLobbyLeaderboard"
              }), iz("codeEditorWorld:backToCode")]
            })]
          }), Tz && (0, Oz.jsxs)("div", {
            className: "WorldPanelWaiting",
            children: [(0, Oz.jsx)("span", {
              children: iz(Az ? "codeEditorWorld:gameWaiting" : "codeEditorWorld:died")
            }), (0, Oz.jsx)(Fz.f, {
              onClick: gz.c,
              children: iz("codeEditorWorld:toGame")
            })]
          })]
        })]
      })
    }
    var Bi = bz(4770);

    function Ci(zz) {
      let {
        xd: uz,
        setWorld: bz,
        toggleWorld: Ez,
        aiShown: nz,
        closeAi: iz
      } = zz;
      const {
        t: lz
      } = (0, Iz.F)(), Mz = nz ? "ai" : "hidden" !== uz ? "world" : "code", tz = [{
        value: "code",
        label: lz("codeEditorWorld:codePane")
      }, {
        value: "world",
        label: lz("codeEditorWorld:title")
      }];
      nz && tz.push({
        value: "ai",
        label: lz("codeEditorWorld:aiPane")
      });
      return (0, Oz.jsx)("div", {
        className: "CodeEditorPaneSwitch",
        children: (0, Oz.jsx)(Bi.d, {
          options: tz,
          value: Mz,
          onChange: zz => {
            "world" !== zz ? (nz && iz(), bz("hidden")) : "hidden" === uz ? Ez() : iz()
          },
          ariaLabel: lz("codeEditorWorld:panes"),
          keepsFocus: !0
        })
      })
    }
    var Yi = bz(36332);
    class ki {
      constructor(zz, uz) {
        this.storageKey = zz, this.defaultValue = uz, this.value = null, this.listeners = new Set, this.get = () => {
          if (null === this.value) {
            const zz = az.g.getItem(this.storageKey);
            this.value = "boolean" === typeof zz ? zz : this.defaultValue
          }
          return this.value
        }, this.set = zz => {
          this.value = zz, az.g.setItem(this.storageKey, zz);
          for (const uz of this.listeners) uz(zz)
        }
      }
      subscribe(zz) {
        return this.listeners.add(zz), () => {
          this.listeners.delete(zz)
        }
      }
    }
    const zl = new ki("codeEditorLightMode", !1),
      ul = new ki("codeEditorAiHints", !0);

    function bl(zz) {
      const [uz, bz] = (0, nz.useState)(zz.get);
      return (0, nz.useEffect)((() => {
        const uz = zz.subscribe(bz);
        return bz(zz.get()), uz
      }), [zz]), [uz, zz.set]
    }
    var El = bz(36334),
      nl = bz(36343),
      il = bz(36352);
    const ll = (0, nz.lazy)((() => Promise.all([bz.e(289), bz.e(285), bz.e(288), bz.e(284), bz.e(81), bz.e(287), bz.e(286), bz.e(283)]).then((() => bz(40515))))),
      Ml = (0, nz.lazy)((() => Promise.all([bz.e(76), bz.e(79), bz.e(80), bz.e(78), bz.e(291)]).then((() => bz(40682))))),
      tl = (0, nz.lazy)((() => Promise.all([bz.e(289), bz.e(288), bz.e(81), bz.e(79), bz.e(80), bz.e(78), bz.e(287), bz.e(286), bz.e(77), bz.e(88)]).then((() => bz(40685)))));

    function Hl(zz) {
      return Hz.gameBridge.query("worldCodeAiChunk", zz)
    }

    function Ol() {
      return Hz.gameBridge.query("worldCodeAiGameState", null)
    }

    function pl(zz) {
      const {
        gsUrl: uz,
        gameNameWithVariation: bz,
        lobbyName: Ez
      } = Oi();
      return (0, mn.postJsonWithMetricsCookiesAndJsonResponse)(`${uz}/code/get-lobby-code`, Vn.mk["get-lobby-code"].toBuffer({
        gameNameWithVariation: bz,
        lobbyName: Ez,
        path: zz
      }), {
        retries: 1
      })
    }
    let dl = !1;
    const Fl = [],
      Zl = {
        message: "You do not have permission to view the code.",
        type: "warning"
      },
      Rl = (0, nz.memo)((function(zz) {
        var uz, bz;
        let {
          show: Ez,
          onOpen: iz,
          onClose: Mz,
          isLobbyCode: pz
        } = zz;
        const dz = (0, nz.useRef)(""),
          [Rz, wz] = (0, nz.useState)(null),
          Xz = (0, nz.useRef)(pz),
          [fz, sz] = (0, nz.useState)({
            message: null,
            type: null
          }),
          [rz, oz] = (0, nz.useState)(""),
          Nz = fz.message ? fz : {
            message: rz,
            type: "warning"
          },
          [Tz, Lz] = (0, nz.useState)(!0),
          [Pz, az] = bl(zl),
          [Vz, mz] = bl(ul),
          [qz, hz] = (0, nz.useState)(!1),
          [Uz, Sz] = (0, nz.useState)(!1),
          yz = (0, nz.useRef)(null),
          Dz = (0, nz.useRef)(!1);
        (0, nz.useEffect)((() => {
          var zz;
          Uz && Dz.current && (Dz.current = !1, null === (zz = yz.current) || void 0 === zz || zz.focus())
        }), [Uz]);
        const Qz = (0, Yi.e)(),
          Wz = (0, nz.useRef)(null),
          jz = (0, nz.useRef)(null),
          {
            openInGameMenuName: Bz,
            openEverythingMenuName: Cz
          } = (0, cz.m)(["openInGameMenuName", "openEverythingMenuName"]),
          Yz = zz => {
            Ez && (Wz.current = zz, xu.current = !0)
          };
        (0, vz.g)("OpenReportMenu", (() => {
          Yz("xZ")
        })), (0, vz.g)("OpenStoreFromCodeEditor", (() => {
          Yz("store")
        })), (0, nz.useEffect)((() => {
          const zz = Wz.current;
          null === zz || "xZ" === zz && ("makeReport" === Bz || "makeDiscordReport" === Bz) || "store" === zz && null !== Cz || (Wz.current = null, null === Bz && null === Cz ? pz ? (jz.current = ub.current, Zz.k.sK("EditLobbyCode", Rz)) : Zz.k.sK("EditCodeBlock", {
            pos: Rz,
            canChangePos: Xz.current
          }) : (0, oi.v)())
        }), [Bz, Cz, pz, Rz]), (0, nz.useEffect)((() => {
          if (Ez) return () => {
            jz.current = null
          }
        }), [Ez]);
        const [kz, zu] = function() {
          const [zz, uz] = (0, nz.useState)(dl);
          return (0, vz.g)("CodeEditorAiHelperShown", (zz => {
            uz(zz)
          })), [zz, (0, nz.useCallback)((zz => {
            dl = zz, Zz.k.sK("CodeEditorAiHelperShown", zz)
          }), [])]
        }(), [uu, bu] = (0, nz.useState)(null), [Eu, nu] = (0, nz.useState)([]), [iu, lu] = (0, nz.useState)(0), [Mu, tu] = (0, nz.useState)(0), [Hu, Ou] = (0, nz.useState)(""), pu = (0, nz.useRef)(null), [du, Zu] = (0, nz.useState)(pz ? il.i : null), Ru = pz || null !== Rz, Ku = (0, tz.g)("canEditCode"), wu = (0, tz.g)("canUseDevCreativeItems"), Xu = (0, ri.j)("welcome"), fu = (0, ri.j)("docsOverview"), su = fu ? "docsOverview" : "welcome", ru = null !== fu && void 0 !== fu ? fu : Xu, ou = (0, ri.j)("aiHelperOverview"), Nu = ou ? "aiHelperOverview" : "welcome", vu = null !== ou && void 0 !== ou ? ou : Xu, xu = (0, nz.useRef)(!1), Ju = (0, nz.useRef)(!1), Au = (0, nz.useRef)(null), [Tu, Lu] = (0, nz.useState)(""), [Gu, au] = (0, nz.useState)(!1), [Vu, mu] = (0, nz.useState)(null), qu = (0, Jz.h)("connectedGame"), hu = pz && Ku && "classic" === qu.gameNameWithVariation && !(0, Pu.M)(qu.lobbyName), [Uu, cu] = (0, nz.useState)(null), [gu, Su] = (0, nz.useState)({
          [qn.i]: ""
        }), [yu, Du] = (0, nz.useState)({
          assets: {},
          revision: 0
        }), Qu = (0, nz.useRef)(yu), Wu = (0, nz.useCallback)((zz => {
          var uz;
          zz.revision < Qu.current.revision || (Qu.current = zz, Du(zz), oz(zz.startupError ? `Schematics could not load: ${zz.startupError}` : ""), null === (uz = Rb.current) || void 0 === uz || uz.onLobbyFilesChanged({
            ...tb.current,
            ...(0, Wn.m)(zz.assets)
          }))
        }), []), [eu, ju] = (0, nz.useState)(qn.i), [Iu, Bu] = (0, nz.useState)(null), [Cu, Yu] = (0, nz.useState)(null), ku = (0, nz.useRef)(!1), zb = (0, nz.useRef)(null), ub = (0, nz.useRef)(eu);
        ub.current = eu;
        const bb = (0, nz.useRef)(Iu);
        bb.current = Iu;
        const Eb = Iu ? null : Vu,
          ib = Eb && !Eb.engineLocked ? Eb.worldCodeEngine : null,
          Mb = (0, nz.useRef)(Cu);
        Mb.current = Cu;
        const tb = (0, nz.useRef)(gu);
        tb.current = gu;
        const Hb = (0, nz.useRef)(null),
          Ob = (0, nz.useRef)(null),
          [pb, db] = (0, nz.useState)(!1),
          Fb = (0, bi.r)(),
          Zb = (0, nz.useRef)([]),
          Rb = (0, nz.useRef)(null),
          Kb = (0, nz.useRef)(null),
          wb = (0, nz.useRef)(null);

        function Xb(zz) {
          sz(zz), clearTimeout(Au.current), Au.current = setTimeout((() => {
            sz({
              message: null,
              type: null
            })
          }), 3e3)
        }
        const fb = (0, nz.useCallback)((function() {
            let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            ku.current && zb.current && (Hz.gameBridge.send("sendCodeCollab", {
              ru: hn.e.Leave,
              ou: (0, hn.z)(zb.current),
              Cl: !!zz || null
            }), ku.current = !1, zb.current = null), cu(null)
          }), []),
          sb = (0, nz.useCallback)((zz => {
            const uz = {
              kind: "lobby",
              path: zz
            };
            zb.current = uz, ju(zz), dz.current = "", Hz.gameBridge.send("sendCodeCollab", {
              ru: hn.e.Join,
              ou: (0, hn.z)(uz)
            }), ku.current = !0
          }), []),
          rb = (0, nz.useCallback)((zz => {
            var uz;
            const bz = null === (uz = Kb.current) || void 0 === uz ? void 0 : uz.collabState;
            return bz && "lobby" === bz.docKey.kind && bz.docKey.path === zz && ub.current === zz ? Promise.resolve({
              doc: bz.doc,
              version: bz.version,
              clientID: bz.clientID,
              docKey: bz.docKey,
              httpConfig: bz.httpConfig
            }) : new Promise(((uz, bz) => {
              const Ez = setTimeout((() => {
                  Zb.current = Zb.current.filter((zz => zz !== nz)), bz(new Error(`Timed out joining ${zz}`))
                }), 15e3),
                nz = bz => {
                  "lobby" === bz.docKey.kind && bz.docKey.path === zz && (clearTimeout(Ez), Zb.current = Zb.current.filter((zz => zz !== nz)), uz(bz))
                };
              Zb.current.push(nz), ub.current !== zz ? (fb(!0), sb(zz)) : ku.current || sb(zz)
            }))
          }), [sb, fb]),
          ob = (0, nz.useCallback)((async function(zz, uz) {
            let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e4;
            const Ez = Date.now();
            let nz = zz in tb.current;
            for (; nz !== uz;) {
              if (Date.now() - Ez > bz) throw new Error(`Timed out waiting for lobby path ${zz} present=${uz}`);
              await (0, GE.L)(50), nz = zz in tb.current
            }
          }), []),
          Nb = (0, nz.useCallback)((zz => {
            const uz = tb.current,
              bz = qn.i in uz && qn.m in uz;
            if (!(0, Un.i)(zz) || bz) {
              if (ub.current === zz) {
                var Ez;
                const nz = bz && (0, Un.i)(zz) ? zz === qn.i ? qn.m : qn.i : null !== (Ez = (0, Un.c)(uz)) && void 0 !== Ez ? Ez : qn.i;
                Ob.current = {
                  fromPath: zz,
                  toPath: nz
                }, ju(nz)
              }
              Hz.gameBridge.send("sendCodeCollab", {
                ru: hn.e.DeleteFile,
                ou: (0, hn.z)({
                  kind: "lobby",
                  path: ub.current
                }),
                Yl: zz
              })
            }
          }), []),
          vb = (0, nz.useCallback)((zz => {
            jz.current = null, Bu(null), Yu(null), !pz || zz === ub.current && ku.current || (fb(!0), sb(zz))
          }), [pz, fb, sb]),
          xb = (0, nz.useCallback)(((zz, uz) => {
            const bz = Dn.i[zz],
              Ez = bz && uz in bz.files ? uz : "index.ts";
            if (zz !== bb.current || Ez !== Mb.current) {
              var nz;
              if (zz !== bb.current) null === (nz = Rb.current) || void 0 === nz || nz.stopContinuousSync(), fb(!0);
              Bu(zz), Yu(Ez)
            }
          }), [fb]),
          Jb = (0, nz.useCallback)((zz => {
            var uz;
            const bz = ub.current,
              Ez = tb.current[bz],
              nz = ku.current && !bb.current && bz in zz && void 0 !== Ez ? {
                ...zz,
                [bz]: Ez
              } : zz;
            Su(nz);
            const iz = Hb.current;
            if (iz && iz in zz) Hb.current = null, iz !== ub.current && vb(iz);
            else if (!(ub.current in zz) && ku.current && !bb.current) {
              var lz;
              vb(null !== (lz = (0, Un.c)(zz)) && void 0 !== lz ? lz : qn.i)
            }
            null === (uz = Rb.current) || void 0 === uz || uz.onLobbyFilesChanged({
              ...nz,
              ...(0, Wn.m)(Qu.current.assets)
            })
          }), [vb]),
          Ab = (0, nz.useCallback)((() => pl(ub.current).then((async zz => {
            if (!ku.current || !zz.files) return null;
            Jb(zz.files);
            const uz = await di({
              action: "state"
            });
            return Wu(uz), {
              ...zz.files,
              ...(0, Wn.m)(uz.assets)
            }
          })).catch((zz => (console.error("[CodeCollab] Failed to fetch lobby files via HTTP", zz), Xb({
            message: "Could not refresh the file list",
            type: "warning"
          }), null)))), [Jb, Wu]),
          Tb = () => {
            Mz()
          };
        (0, nz.useEffect)((() => {
          if (oz(""), !Ez || !pz) return;
          let zz = !1;
          return Qu.current = {
            assets: {},
            revision: 0
          }, Du(Qu.current), di({
            action: "state"
          }).then((uz => {
            zz || Wu(uz)
          })).catch((uz => {
            console.error("Could not load project schematics", uz), zz || oz("Could not load schematics. Reopen the Code Editor to retry.")
          })), () => {
            zz = !0
          }
        }), [Ez, pz, Wu]);
        const Lb = (0, nz.useCallback)((function() {
            let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            zb.current && Hz.gameBridge.send("sendCodeCollab", {
              ru: hn.e.Submit,
              ou: (0, hn.z)(zb.current),
              ...zz ? {
                Ju: "keepOpen"
              } : {}
            })
          }), []),
          Pb = (0, nz.useCallback)((() => {
            if (!zb.current || "lobby" !== zb.current.kind) return;
            const zz = Tu.trim();
            (0, cn.r)(zz) ? (Hz.gameBridge.send("sendCodeCollab", {
              ru: hn.e.ReloadAsVariation,
              ou: (0, hn.z)(zb.current),
              Ju: zz
            }), au(!1)) : Xb({
              message: "Variation must be 1-32 characters: A-Z, a-z, 0-9, _, -",
              type: "warning"
            })
          }), [Tu]),
          Gb = (0, nz.useCallback)((zz => {
            Hz.gameBridge.send("sendCodeCollab", {
              ru: hn.e.SetEngine,
              ou: (0, hn.z)({
                kind: "lobby",
                path: ub.current
              }),
              Ju: zz
            })
          }), []),
          ab = (0, nz.useCallback)((zz => {
            if (!bb.current && Ku && (Xz.current || pz)) {
              if (pz) {
                var uz;
                const bz = (0, Un.o)(tb.current, ub.current),
                  Ez = Math.min(nb.A, Math.max(0, nb.C - bz)),
                  nz = zz.slice(0, Ez);
                return dz.current = nz, Su((zz => ({
                  ...zz,
                  [ub.current]: nz
                }))), void(null === (uz = Rb.current) || void 0 === uz || uz.onDocTextChanged(ub.current, nz))
              }
              dz.current = zz, Ou(zz)
            }
          }), [Ku, pz]);
        (0, vz.g)("EditLobbyCode", (zz => {
          var uz;
          Gz.featureFlags.canSeePlayerWrittenText && pz && (fb(), wz(zz), dz.current = "", Su({
            [qn.i]: ""
          }), mu(null), ju(qn.i), Bu(null), Yu(null), Hb.current = null, Ob.current = null, null === (uz = Rb.current) || void 0 === uz || uz.stopContinuousSync(), iz(), sb(qn.i))
        })), (0, vz.g)("EditCodeBlock", (zz => {
          let {
            pos: uz,
            canChangePos: bz
          } = zz;
          if (Gz.featureFlags.canSeePlayerWrittenText && !pz)
            if (fb(), null !== uz && (uz = [...uz]), wz(uz), Xz.current = bz, null !== uz) {
              dz.current = "", Ou(""), iz();
              const zz = {
                  kind: "codeBlock",
                  pos: uz
                },
                Ez = (0, hn.z)(zz);
              pu.current !== Ez && (pu.current = Ez, nu([]), tu(iu)), Zu((0, il.e)(Ez, [uz[0], uz[1], uz[2]], !!bz)), zb.current = zz, Hz.gameBridge.send("sendCodeCollab", {
                ru: hn.e.Join,
                ou: (0, hn.z)(zz)
              }), ku.current = !0
            } else Ez && Mz()
        })), (0, vz.g)("codeCollabRejoin", (zz => {
          const uz = zb.current ? (0, hn.z)(zb.current) : null;
          uz && zz.docKey === uz && (dz.current = zz.doc, pz || Ou(zz.doc), cu((uz => uz ? {
            ...uz,
            doc: zz.doc,
            version: zz.version,
            clientID: (0, yn.d)()
          } : uz)))
        })), (0, vz.g)("codeCollab", (zz => {
          var uz;
          const bz = zb.current ? (0, hn.z)(zb.current) : null;
          if (zz.type === hn.h.LobbyFilesChanged && pz) {
            if ("string" !== typeof zz.files) return void Ab();
            try {
              Jb(JSON.parse(zz.files))
            } catch (Hz) {
              console.error("[CodeCollab] Failed to parse lobby files", Hz), Ab()
            }
            return
          }
          if (zz.type === hn.h.EngineSettings && pz) return void mu(Ki(zz.engineSettings));
          const nz = zz.type === hn.h.Joined ? (0, hn.m)(zz.docKey) : null,
            iz = pz && "lobby" === (null === (uz = zb.current) || void 0 === uz ? void 0 : uz.kind) && (0, Un.i)(zb.current.path) && "lobby" === (null === nz || void 0 === nz ? void 0 : nz.kind) && (0, Un.i)(nz.path);
          if (!bz || zz.docKey === bz || iz)
            if (zz.type !== hn.h.ForceClose) {
              if (Ez)
                if (zz.type === hn.h.Joined) {
                  var lz;
                  const Oz = JSON.parse(zz.peers),
                    Fz = zz.existingCursors ? JSON.parse(zz.existingCursors) : [],
                    Kz = (0, yn.d)(),
                    wz = Oi(),
                    {
                      gsUrl: Xz,
                      gameNameWithVariation: fz,
                      lobbyName: rz
                    } = wz,
                    oz = null !== (lz = (0, hn.m)(zz.docKey)) && void 0 !== lz ? lz : zb.current;
                  oz && (zb.current = oz, "lobby" === oz.kind && (ju(oz.path), ub.current = oz.path));
                  const Nz = oz || (pz ? {
                    kind: "lobby",
                    path: ub.current
                  } : {
                    kind: "codeBlock",
                    pos: Rz
                  });

                  function vz(uz) {
                    var bz, Ez;
                    if (!ku.current) return;
                    const nz = null !== (bz = uz.code) && void 0 !== bz ? bz : "",
                      iz = null !== (Ez = uz.collabVersion) && void 0 !== Ez ? Ez : 0;
                    dz.current = nz, pz || Ou(nz), pz && uz.files ? Su(uz.files) : pz && Su((zz => ({
                      ...zz,
                      [ub.current]: nz
                    })));
                    const lz = {
                      doc: nz,
                      version: iz,
                      clientID: Kz,
                      docKey: Nz,
                      peers: Oz,
                      editorCount: zz.editorCount,
                      existingCursors: Fz,
                      httpConfig: wz
                    };
                    if (cu(lz), "lobby" === Nz.kind) {
                      var Mz;
                      const zz = {
                        doc: nz,
                        version: iz,
                        clientID: Kz,
                        docKey: Nz,
                        httpConfig: wz
                      };
                      for (const uz of [...Zb.current]) uz(zz);
                      null === (Mz = Rb.current) || void 0 === Mz || Mz.startWhenReady()
                    }
                    uz.canSeeCode ? (clearTimeout(Au.current), sz({
                      message: null,
                      type: null
                    })) : function(zz) {
                      clearTimeout(Au.current), sz(zz)
                    }(Zl);
                    const tz = jz.current;
                    jz.current = null, pz && tz && uz.files && tz in uz.files && tz !== ub.current && vb(tz)
                  }
                  pz ? pl(ub.current).then(vz).catch((zz => {
                    console.error("[CodeCollab] Failed to fetch lobby code via HTTP", zz), fb()
                  })) : (0, mn.postJsonWithMetricsCookiesAndJsonResponse)(`${Xz}/code/get-code-block`, Vn.mk["get-code-block"].toBuffer({
                    gameNameWithVariation: fz,
                    lobbyName: rz,
                    pos: Rz
                  }), {
                    retries: 1
                  }).then(vz).catch((zz => {
                    console.error("[CodeCollab] Failed to fetch code block via HTTP", zz), fb()
                  }))
                } else if (zz.type === hn.h.Presence) {
                if (!bz) return;
                const xz = JSON.parse(zz.peers);
                cu((uz => uz ? {
                  ...uz,
                  peers: xz,
                  editorCount: zz.editorCount
                } : uz))
              }
            } else {
              var tz;
              if (!bz) return;
              Ez && pz && "keptOpen" === zz.updates && Zz.k.sK("CodeEditorKeepEdits");
              const Jz = zb.current;
              ku.current = !1, zb.current = null, cu(null);
              if (!pz || "close" === zz.updates) return (0, nl.g)(), void(Ez && Mz());
              if (!Ez) return;
              const Az = tb.current,
                Tz = Ob.current;
              Ob.current = null;
              const Lz = "lobby" === (null === Jz || void 0 === Jz ? void 0 : Jz.kind) && Jz.path === (null === Tz || void 0 === Tz ? void 0 : Tz.fromPath),
                Pz = Tz && (Lz || Tz.toPath in Az || (0, Un.i)(Tz.toPath)) ? Tz.toPath : ub.current in Az ? ub.current : null !== (tz = (0, Un.c)(Az)) && void 0 !== tz ? tz : qn.i;
              sb(Pz)
            }
        })), (0, vz.g)("refetchCode", (() => {
          Gz.featureFlags.canSeePlayerWrittenText && Ez && ku.current && (Ku || (fb(), pz ? Zz.k.sK("EditLobbyCode", Rz) : Zz.k.sK("EditCodeBlock", {
            pos: Rz,
            canChangePos: Xz.current
          })))
        }));
        const Vb = (0, nz.useCallback)((() => {
            Ez && (hz(!1), window.open("/docs", "_blank", "popup=yes,width=1200,height=800"))
          }), [Ez]),
          mb = (0, nz.useCallback)((() => {
            hz(!1)
          }), []);
        (0, nz.useEffect)((() => {
          Ez && Ku && ("docsButton" === ru && qz ? (0, oi.e)("docsButton") : ru && oi.h.includes(ru) && !qz && (hz(!0), zu(!1)))
        }), [Ez, Ku, ru, qz, zu]);
        const qb = (0, nz.useCallback)((() => {
          zu(!1)
        }), [zu]);
        (0, nz.useEffect)((() => {
          Ez && Ku && Ru && ("aiHelperButton" === vu && kz ? (0, oi.e)("aiHelperButton") : vu && oi.b.includes(vu) && !kz && (zu(!0), hz(!1)))
        }), [Ez, Ku, Ru, vu, kz, zu]), (0, nz.useEffect)((() => {
          if (!Ez || !Ku) return;
          const zz = pz ? "worldCode" : "codeBlock";
          return (0, oi.w)(zz, !0), () => {
            (0, oi.w)(zz, !1)
          }
        }), [Ez, Ku, pz]), (0, nz.useEffect)((() => {
          if (Ez) return () => {
            xu.current ? xu.current = !1 : (0, oi.v)()
          }
        }), [Ez]), (0, nz.useEffect)((() => {
          (0, oi.y)("exportButton", !!wu)
        }), [wu]);
        const {
          t: hb
        } = (0, Iz.F)(), Ub = !kz && iu > Mu, cb = Ub ? Fz.K : Fz.B, gb = (0, nz.useCallback)(((zz, uz) => {
          Zz.k.sK("CodeEditorGoToLine", {
            path: zz,
            line: uz
          }), vb(zz)
        }), [vb]), Sb = (0, nz.useCallback)((zz => {
          wb.current = zz
        }), []), yb = function(zz, uz) {
          const [bz, Ez] = (0, nz.useState)(null);
          return (0, nz.useEffect)((() => {
            if (!uz) return void Ez(null);
            let bz = !1;
            return ui(zz).then((zz => {
              bz || Ez(zz)
            }), (zz => {
              console.error("[CodeEditor] could not collect the imported plugins", zz), bz || Ez(null)
            })), () => {
              bz = !0
            }
          }), [zz, uz]), bz
        }(gu, Ez);
        (0, nz.useEffect)((() => {
          yb && Iu && !yb.includes(Iu) && (Bu(null), Yu(null), pz && !ku.current && sb(ub.current))
        }), [Iu, yb, pz, sb]), Kb.current = {
          collabState: Uu,
          ensureJoinedPath: rb,
          waitForLobbyPath: ob,
          pullLobbyFiles: Ab,
          t: hb,
          canEditCode: !!Ku
        }, Rb.current || (Rb.current = new ti({
          getLobbyFiles: () => ({
            ...tb.current,
            ...(0, Wn.m)(Qu.current.assets)
          }),
          deleteSchematic: async zz => {
            const uz = await di({
              action: "remove",
              path: zz,
              expectedRevision: Qu.current.revision
            });
            Wu(uz)
          },
          getActivePath: () => ub.current,
          getCollabSnapshot: () => {
            var zz;
            if (bb.current) return null;
            const uz = null === (zz = Kb.current) || void 0 === zz ? void 0 : zz.collabState;
            return uz ? {
              doc: uz.doc,
              version: uz.version,
              clientID: uz.clientID,
              docKey: uz.docKey,
              httpConfig: uz.httpConfig
            } : null
          },
          replaceActiveDoc: (zz, uz) => {
            var bz, Ez;
            return null !== (bz = null === (Ez = wb.current) || void 0 === Ez ? void 0 : Ez.call(wb, zz, uz)) && void 0 !== bz && bz
          },
          ensureJoined: zz => Kb.current.ensureJoinedPath(zz),
          createFile: (zz, uz) => {
            !1 !== (null === uz || void 0 === uz ? void 0 : uz.focus) && (Hb.current = zz), Hz.gameBridge.send("sendCodeCollab", {
              ru: hn.e.CreateFile,
              ou: (0, hn.z)({
                kind: "lobby",
                path: ub.current
              }),
              Yl: zz
            })
          },
          renameFile: (zz, uz) => {
            const bz = (0, hn.z)({
              kind: "lobby",
              path: ub.current
            });
            ub.current === zz && (Ob.current = {
              fromPath: zz,
              toPath: uz
            }, ju(uz)), Hz.gameBridge.send("sendCodeCollab", {
              ru: hn.e.RenameFile,
              ou: bz,
              Yl: zz,
              kl: uz
            })
          },
          deleteFile: zz => {
            Nb(zz)
          },
          waitForLobbyPath: (zz, uz, bz) => Kb.current.waitForLobbyPath(zz, uz, bz),
          pullLobbyFiles: () => Kb.current.pullLobbyFiles(),
          setMessage: (zz, uz) => {
            Xb({
              message: zz,
              type: uz
            })
          },
          onUnlinked: () => {
            db(!1)
          },
          t: zz => Kb.current.t(zz),
          canEditCode: () => Kb.current.canEditCode,
          getStorageKey: () => {
            const {
              gameNameWithVariation: zz,
              lobbyName: uz
            } = Hz.gameBridge.latest("connectedGame");
            return (0, bi.i)(zz, uz)
          }
        }));
        const Db = (0, nz.useCallback)((async zz => {
            const uz = Rb.current;
            if (!uz) return !1;
            try {
              return await uz.writeLobbyFiles(zz)
            } catch (bz) {
              return console.error("World Code AI: couldn't write the change", bz), !1
            }
          }), []),
          Qb = (0, nz.useCallback)((async zz => {
            var uz, bz;
            const Ez = null === (uz = zz.find((zz => zz.path === El.b))) || void 0 === uz ? void 0 : uz.text,
              nz = zb.current;
            return void 0 !== Ez && "codeBlock" === (null === nz || void 0 === nz ? void 0 : nz.kind) && (!(null === (bz = wb.current) || void 0 === bz || !bz.call(wb, (0, hn.z)(nz), Ez)) && (dz.current = Ez, Ou(Ez), !0))
          }), []),
          Wb = (0, nz.useCallback)((async () => {
            try {
              var zz, uz;
              const bz = await pl(qn.i);
              return !1 === bz.canSeeCode ? null : null !== (zz = bz.files) && void 0 !== zz ? zz : {
                [qn.i]: null !== (uz = bz.code) && void 0 !== uz ? uz : ""
              }
            } catch (bz) {
              return console.error("World Code AI: couldn't read World Code for a code block", bz), null
            }
          }), []),
          eb = (0, nz.useMemo)((() => ({
            [El.b]: Hu
          })), [Hu]),
          jb = (0, nz.useCallback)(((zz, uz) => {
            Zz.k.sK("CodeEditorGoToLine", {
              path: El.b,
              line: uz
            })
          }), []);
        (0, nz.useEffect)((() => {
          kz && Ez && tu(iu)
        }), [kz, Ez, iu]);
        const Ib = (0, nz.useCallback)((() => {
            var zz, uz;
            Lb();
            const bz = (0, Gz.isTouchscreen)() ? "open World Code again" : `press ${null!==(zz=null===(uz=lb.s.OpenCodeEditor)||void 0===uz?void 0:uz[0])&&void 0!==zz?zz:"F8"}`,
              Ez = pz ? `\ud83e\udd16 Try out your change, then ${bz} to tell the AI Helper how it went.` : "\ud83e\udd16 Click the code block to try your change, then open it again to tell the AI Helper how it went.";
            Zz.k.sK("chat", {
              content: [{
                str: Ez,
                style: {
                  color: xz.N.cyanUiText
                }
              }]
            })
          }), [Lb, pz]),
          Bb = (0, nz.useCallback)((zz => {
            const uz = Rz,
              bz = Xz.current;
            pz || !uz || Hz.gameBridge.lookup("codeBlockClickable", uz) ? (0, nl.j)(zz, {
              submit: () => {
                Lb(), Zz.k.sK("chat", {
                  content: [{
                    str: "\ud83e\udd16 Testing your change. The AI Helper comes back in a moment.",
                    style: {
                      color: xz.N.cyanUiText
                    }
                  }]
                }), !pz && uz && setTimeout((() => {
                  Hz.gameBridge.send("clickCodeBlock", uz)
                }), 1e3)
              },
              reopen: () => {
                (0, gz.l)() || (pz ? Zz.k.sK("EditLobbyCode", uz) : Zz.k.sK("EditCodeBlock", {
                  pos: uz,
                  canChangePos: bz
                }))
              }
            }) : Ib()
          }), [Lb, pz, Rz, Ib]),
          Cb = (0, nz.useCallback)((() => {
            zu(!1)
          }), [zu]),
          Yb = (0, nz.useRef)(Tb);
        Yb.current = Tb;
        const kb = (0, nz.useCallback)((function(zz) {
            let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            Zz.k.sK("WorldCodeAiDraft", {
              text: zz,
              send: uz
            }), Yb.current(), Zz.k.sK("EditLobbyCode", Rz)
          }), [Rz]),
          zE = (0, nz.useCallback)((zz => {
            Yb.current(), zz.codeBlock ? Zz.k.sK("EditCodeBlock", {
              pos: [...zz.pos],
              canChangePos: zz.canChangePos
            }) : Zz.k.sK("EditLobbyCode", Rz)
          }), [Rz]);
        (0, vz.g)("WorldCodeAiDraft", (zz => {
          pz && (bu(zz), zu(!0))
        }));
        const uE = !!Ku && !!ru && oi.h.includes(ru),
          bE = !!Ku && !!vu && oi.b.includes(vu);
        (0, nz.useEffect)((() => {
          Ez && kz && Ru && !uE && hz(!1)
        }), [Ez, kz, Ru, uE]);
        const EE = (0, nz.useCallback)((() => {
            zu(!1), hz(!1)
          }), [zu]),
          {
            xd: nE,
            setWorld: iE,
            toggleWorld: lE
          } = function(zz) {
            let {
              showAi: uz,
              showDocs: bz,
              showChat: Ez,
              hideOtherRightPanels: iz
            } = zz;
            const [lz, Mz] = (0, nz.useState)("hidden"), tz = (0, nz.useRef)(null), Hz = (0, nz.useCallback)((() => {
              tz.current = null, Mz((zz => "hidden" === zz ? zz : (0, Li.c)() ? "hidden" : "shown"))
            }), []);
            (0, nz.useEffect)((() => {
              (uz || bz) && Hz()
            }), [uz, bz, Hz]), (0, nz.useEffect)((() => {
              Ez && Hz()
            }), [Ez, Hz]);
            const Oz = "hidden" !== lz && (0, Li.c)();
            (0, nz.useLayoutEffect)((() => {
              if (Oz) {
                const zz = document.activeElement;
                zz instanceof HTMLElement && zz.closest(".cm-content") && (tz.current = zz, zz.blur())
              } else {
                var zz;
                null === (zz = tz.current) || void 0 === zz || zz.focus(), tz.current = null
              }
            }), [Oz]);
            const pz = (0, nz.useCallback)((() => {
              "hidden" === lz ? (Mz("shown"), (0, Li.c)() && iz()) : Mz("hidden")
            }), [lz, iz]);
            return {
              xd: lz,
              setWorld: Mz,
              toggleWorld: pz
            }
          }({
            showAi: kz,
            showDocs: qz,
            showChat: Uz,
            hideOtherRightPanels: EE
          }),
          ME = kz && null !== du && Ru,
          tE = (0, nz.useCallback)((() => {
            bu(null)
          }), []),
          [HE, OE] = (0, nz.useState)(null);
        (0, vz.g)("WorldCodeAiSelection", (zz => {
          Ez && (OE(zz), zu(!0), hz(!1))
        }));
        const pE = (0, nz.useCallback)((() => {
          OE(null)
        }), []);
        (0, vz.g)("chat", (zz => {
          let {
            content: uz
          } = zz;
          if (!pz && null === pu.current) return;
          const bz = Array.isArray(uz) ? uz : [uz],
            Ez = bz.some((zz => {
              var uz;
              return (null === zz || void 0 === zz || null === (uz = zz.style) || void 0 === uz ? void 0 : uz.color) === xz.N.redUiText
            })),
            nz = bz.map((zz => {
              var uz;
              const bz = null !== (uz = null === zz || void 0 === zz ? void 0 : zz.str) && void 0 !== uz ? uz : zz;
              return "string" === typeof bz ? bz : ""
            })).join("");
          Ez && /world code|error/i.test(nz) && (nu((zz => [...zz, nz].slice(-10))), lu((zz => zz + 1)), (0, nl.e)(nz))
        })), (0, nz.useEffect)((() => {
          if (!Ez || !pz || !Fb) return;
          let zz = !1;
          return (async (uz, bz) => {
            const Ez = await (null === (uz = Rb.current) || void 0 === uz ? void 0 : uz.tryRestoreHandle());
            !zz && Ez && (db(!0), null === (bz = Rb.current) || void 0 === bz || bz.startWhenReady())
          })(), () => {
            zz = !0
          }
        }), [Ez, pz, Fb]), (0, nz.useEffect)((() => {
          var zz;
          Ez || (null === (zz = Rb.current) || void 0 === zz || zz.stopContinuousSync(), fb(!1), Ju.current && (Ju.current = !1, Hz.gameBridge.send("sendChatMessage", {
            zM: "//export",
            channelName: null
          })))
        }), [Ez, fb]);
        const dE = (0, nz.useCallback)((async () => {
            if (Fb && Rb.current) try {
              if (!await Rb.current.linkFolder()) return;
              db(!0), await Rb.current.startWhenReady()
            } catch (zz) {
              console.error("[WorldCodeDirectorySync] Link failed", zz), Xb({
                message: hb("codeEditor:directorySyncError"),
                type: "warning"
              })
            }
          }), [Fb, hb]),
          FE = (0, nz.useCallback)((async () => {
            Rb.current && await Rb.current.unlinkFolder()
          }), []),
          ZE = (0, nz.useCallback)((() => {
            Fb ? pb ? FE() : dE() : pn.NotificationProvider.showAlertPopup({
              title: "codeEditor:directorySyncUnsupported",
              subtitle: "codeEditor:directorySyncUnsupportedBody",
              confirmText: "general:ok"
            })
          }), [Fb, pb, dE, FE]),
          RE = pz && "hidden" !== nE;
        return (0, Oz.jsxs)(lz.d, {
          className: Fu()("CodeEditorBg", {
            CodeEditorLight: Pz,
            WorldShown: "hidden" !== nE
          }),
          close: Tb,
          escDoesExit: !0,
          show: Ez,
          togglePointerLock: !1,
          globallyUniqueKey: pz ? "LobbyCodeEditor" : "CodeBlockEditor",
          children: [(0, Oz.jsx)(ri.d, {
            tutorial: "welcome",
            step: "codeBlockIntro",
            text: hb("codeEditor:tutorialCodeBlockIntro"),
            enabled: !!Ku && !pz
          }), (0, Oz.jsx)(ri.d, {
            tutorial: "welcome",
            step: "worldCodeIntro",
            text: (0, Oz.jsxs)(Oz.Fragment, {
              children: [(0, Oz.jsx)("p", {
                children: hb("codeEditor:tutorialWorldCodeWelcome")
              }), (0, Oz.jsxs)("ul", {
                className: "TutorialStepList",
                children: [(0, Oz.jsx)("li", {
                  children: hb("codeEditor:tutorialWorldCodeUseSetUp")
                }), (0, Oz.jsx)("li", {
                  children: hb("codeEditor:tutorialWorldCodeUseReact")
                }), (0, Oz.jsx)("li", {
                  children: hb("codeEditor:tutorialWorldCodeUseRun")
                })]
              })]
            }),
            enabled: !!Ku && pz
          }), (0, Oz.jsx)("div", {
            className: "CodeEditorTitle",
            children: pz ? "World Code" : "Code Block"
          }), (0, Oz.jsxs)("div", {
            className: "CodeEditorTopBar",
            children: [(0, Oz.jsxs)("div", {
              className: "CodeEditorTopLeft",
              children: [(0, Oz.jsx)(ez.f, {
                tooltipInner: hb(wu ? "codeEditor:exportTooltip" : "codeEditor:exportOwnerOnly"),
                delayShow: wu ? void 0 : 0,
                hideTooltip: "exportButton" === Xu,
                children: (0, Oz.jsx)(ri.i, {
                  tutorial: "welcome",
                  step: "exportButton",
                  text: hb("codeEditor:tutorialExport"),
                  enabled: !!Ku,
                  children: (0, Oz.jsx)(Fz.q, {
                    className: "CodeEditorButton",
                    disabled: !wu,
                    onClick: () => {
                      "exportButton" === Xu && ((0, oi.e)("exportButton"), xu.current = !0), Ju.current = !0, Tb()
                    },
                    padDestructive: !0,
                    children: hb("codeEditor:exportWorld")
                  })
                })
              }), (0, Oz.jsx)(Ci, {
                xd: nE,
                setWorld: iE,
                toggleWorld: lE,
                aiShown: ME,
                closeAi: Cb
              })]
            }), (0, Oz.jsxs)("div", {
              className: "CodeEditorTopRight",
              children: [Ku && (0, Oz.jsx)(ez.f, {
                tooltipInner: hb("codeEditor:helpTooltip"),
                hideTooltip: "helpButton" === Xu,
                children: (0, Oz.jsx)(ri.i, {
                  tutorial: "welcome",
                  step: "helpButton",
                  text: hb("codeEditor:tutorialHelpButton"),
                  placement: "bottom",
                  children: (0, Oz.jsx)(Fz.f, {
                    className: "CodeEditorHelpButton",
                    ariaLabel: hb("codeEditor:helpTooltip"),
                    onClick: () => {
                      (0, oi.e)("helpButton"), pn.NotificationProvider.showCustomPopup({
                        body: zz => (0, Oz.jsx)(Ni, {
                          close: zz
                        }),
                        unlockPointerKey: "codeEditorTutorials"
                      })
                    },
                    children: (0, Oz.jsx)("div", {
                      className: "CodeEditorHelpButtonInner",
                      children: (0, Oz.jsx)(Kz.c, {
                        name: "circle-question"
                      })
                    })
                  })
                })
              }), (0, Oz.jsx)(ez.f, {
                tooltipInner: hb("codeEditor:closeTooltip"),
                children: (0, Oz.jsx)("div", {
                  className: "CodeEditorCloseButtonClickZone",
                  onClick: () => {
                    Tb()
                  },
                  children: (0, Oz.jsx)(Fz.m, {
                    className: "CodeEditorCloseButton"
                  })
                })
              })]
            })]
          }), (0, Oz.jsx)(Sn, {
            peers: null !== (uz = null === Uu || void 0 === Uu ? void 0 : Uu.peers) && void 0 !== uz ? uz : []
          }), (0, Oz.jsxs)("div", {
            className: "CodeEditorMainArea",
            children: [Uz && Qz && (0, Oz.jsx)(Li.b, {
              side: "left",
              defaultSize: "max(16rem, 24%)",
              onClose: () => {
                Sz(!1)
              },
              children: (0, Oz.jsx)(Ti, {
                inputRef: yz
              })
            }), pz && (0, Oz.jsx)(In, {
              schematics: yu.assets,
              onManageSchematic: zz => {
                Ku && pn.NotificationProvider.showCustomPopup({
                  body: uz => (0, Oz.jsx)(Ri, {
                    initialPath: zz,
                    onChanged: Wu,
                    onClose: uz
                  }),
                  unlockPointerKey: "worldCodeSchematics"
                })
              },
              files: gu,
              activePath: eu,
              canEdit: !!Ku,
              directoryLinked: pb,
              pluginNames: null !== yb && void 0 !== yb ? yb : Fl,
              activePluginName: Iu,
              activePluginFile: Cu,
              onSelect: vb,
              onSelectPlugin: xb,
              onToggleDirectorySync: ZE,
              onCreate: zz => {
                Hb.current = zz, Hz.gameBridge.send("sendCodeCollab", {
                  ru: hn.e.CreateFile,
                  ou: (0, hn.z)({
                    kind: "lobby",
                    path: ub.current
                  }),
                  Yl: zz
                })
              },
              onRename: (zz, uz) => {
                ub.current === zz && (Ob.current = {
                  fromPath: zz,
                  toPath: uz
                }, ju(uz)), Hz.gameBridge.send("sendCodeCollab", {
                  ru: hn.e.RenameFile,
                  ou: (0, hn.z)({
                    kind: "lobby",
                    path: ub.current
                  }),
                  Yl: zz,
                  kl: uz
                })
              },
              onRenameFolder: (zz, uz) => {
                const [bz] = (0, Un.n)([ub.current], zz, uz);
                bz && (Ob.current = {
                  fromPath: bz[0],
                  toPath: bz[1]
                }, ju(bz[1])), Hz.gameBridge.send("sendCodeCollab", {
                  ru: hn.e.RenameFolder,
                  ou: (0, hn.z)({
                    kind: "lobby",
                    path: ub.current
                  }),
                  Yl: zz,
                  kl: uz
                })
              },
              onDelete: Nb
            }), (0, Oz.jsx)("div", {
              className: Fu()("CodeEditorMessage", {
                CodeEditorMessageHidden: !Nz.message,
                CodeEditorMessageSuccess: "success" === Nz.type
              }),
              children: Nz.message && (0, Oz.jsx)("div", {
                className: "CodeEditorMessageText",
                children: Nz.message
              })
            }), (0, Oz.jsx)(nz.Suspense, {
              fallback: (0, Oz.jsx)("div", {
                className: "CodeEditorContent",
                children: (0, Oz.jsx)(Az.c, {})
              }),
              children: (0, Oz.jsx)(ll, {
                isLobbyCode: pz,
                code: Uu ? Uu.doc : dz.current,
                files: pz ? gu : void 0,
                activePath: pz ? eu : void 0,
                pluginName: Iu,
                pluginFile: Cu,
                pluginSource: Iu && Cu ? null === (bz = Dn.i[Iu]) || void 0 === bz ? void 0 : bz.files[Cu] : void 0,
                onChange: ab,
                canEditCode: Ku,
                setTemporaryMessage: Xb,
                close: Tb,
                showTooltips: Tz,
                lightMode: Pz,
                collabState: Uu,
                setActiveDocReplacer: Sb,
                showAiHints: Ru && Vz,
                canAiChangeCode: !!Ku && (pz || !!Xz.current),
                onRemoteDocChange: zz => {
                  var uz;
                  (dz.current = zz, pz) ? (Su((uz => ({
                    ...uz,
                    [ub.current]: zz
                  }))), null === (uz = Rb.current) || void 0 === uz || uz.onDocTextChanged(ub.current, zz)) : Ou(zz)
                }
              })
            }), (qz || ME || "hidden" !== nE) && (0, Oz.jsxs)(Pi, {
              xd: nE,
              worldPanel: (0, Oz.jsx)(Ii, {
                shown: nE,
                setShown: iE,
                canInsertCode: !!Ku && !Iu
              }),
              closeWorld: () => {
                iE("hidden")
              },
              aiShown: ME,
              defaultWidth: qz ? "40%" : "max(18rem, 36%)",
              children: [qz && (0, Oz.jsx)(Li.b, {
                onClose: uE ? void 0 : mb,
                children: (0, Oz.jsx)(nz.Suspense, {
                  fallback: (0, Oz.jsx)("div", {
                    className: "DocsPanel",
                    children: (0, Oz.jsx)(Az.c, {})
                  }),
                  children: (0, Oz.jsx)(Ml, {
                    popOutDocs: Vb,
                    hideDocs: mb,
                    tutorialEnabled: !!Ku
                  })
                })
              }), ME && (0, Oz.jsx)(Li.b, {
                onClose: bE ? void 0 : Cb,
                children: (0, Oz.jsx)(nz.Suspense, {
                  fallback: (0, Oz.jsx)("div", {
                    className: "CodeEditorPanelLoading",
                    children: (0, Oz.jsx)(Az.c, {})
                  }),
                  children: (0, Oz.jsx)(tl, {
                    target: du,
                    chatKey: `${qu.gameNameWithVariation}/${qu.lobbyName}/aiHelper`,
                    historyKey: `${qu.gameNameWithVariation}/${qu.lobbyName}/${du.key}`,
                    files: du.codeBlock ? eb : gu,
                    activePath: du.codeBlock ? El.b : eu,
                    canEdit: !!Ku && (du.codeBlock ? !!Xz.current : !Iu),
                    isLoaded: null !== Uu,
                    errors: Eu,
                    errorCount: iu,
                    applyFiles: du.codeBlock ? Qb : Db,
                    submit: Ib,
                    testRun: Bb,
                    close: Cb,
                    goToLine: du.codeBlock ? jb : gb,
                    openWorldCode: du.codeBlock ? kb : void 0,
                    readWorldCode: du.codeBlock ? Wb : void 0,
                    viewChunk: Hl,
                    viewGameState: Ol,
                    openTarget: Ku ? zE : void 0,
                    draft: uu,
                    onDraftUsed: tE,
                    selection: HE,
                    onSelectionUsed: pE
                  }, du.key)
                })
              })]
            })]
          }), (null === Eb || void 0 === Eb ? void 0 : Eb.fallback) && (0, Oz.jsx)(wi, {
            fallback: Eb.fallback,
            onGoToLine: gb
          }), (0, Oz.jsxs)("div", {
            className: "CodeEditorButtons",
            "data-pad-hint-bar-avoid": !0,
            children: [(0, Oz.jsx)(ez.f, {
              tooltipInner: hb(Pz ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
              placement: "top",
              children: (0, Oz.jsx)(Fz.f, {
                className: "CodeEditorButton CodeEditorThemeButton",
                ariaLabel: hb(Pz ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
                onClick: () => {
                  az(!Pz)
                },
                children: (0, Oz.jsx)(Kz.c, {
                  name: Pz ? "moon" : "sun-bright"
                })
              })
            }), (0, Oz.jsx)(ez.f, {
              tooltipInner: hb(RE ? "codeEditorWorld:submitCodeTooltip" : "codeEditor:submitCodeTooltip"),
              placement: "top",
              children: (0, Oz.jsx)(Fz.q, {
                className: "CodeEditorButton",
                onClick: () => {
                  Lb(RE)
                },
                padDefaultFocus: !0,
                children: hb("codeEditor:submitCode")
              })
            }), (0, Oz.jsx)(ez.f, {
              tooltipInner: hb(qz ? "codeEditor:hideDocsTooltip" : "codeEditor:showDocsTooltip"),
              placement: "top",
              hideTooltip: "docsButton" === ru || "hideDocsButton" === ru,
              children: (0, Oz.jsx)(ri.i, {
                tutorial: su,
                step: qz ? "hideDocsButton" : "docsButton",
                text: hb(qz ? "codeEditor:tutorialHideDocs" : "codeEditor:tutorialDocs"),
                enabled: !!Ku,
                placement: "top",
                waitForClick: !0,
                onPrevious: qz && "welcome" === su ? mb : void 0,
                children: (0, Oz.jsx)(Fz.B, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    (0, oi.e)(qz ? "hideDocsButton" : "docsButton"), hz(!qz), zu(!1)
                  },
                  children: hb(qz ? "codeEditor:hideDocs" : "codeEditor:showDocs")
                })
              })
            }), Ru && (0, Oz.jsx)(ri.i, {
              tutorial: Nu,
              step: kz ? "hideAiHelperButton" : "aiHelperButton",
              text: hb(kz ? "codeEditorAiTutorial:hideAiHelperButton" : "welcome" === Nu ? "codeEditorAiTutorial:welcomeAiHelperButton" : "codeEditorAiTutorial:aiHelperButton"),
              enabled: !!Ku,
              placement: "top",
              waitForClick: !0,
              onPrevious: kz && "welcome" === Nu ? qb : void 0,
              children: (0, Oz.jsx)(cb, {
                className: "CodeEditorButton",
                onClick: () => {
                  (0, oi.e)(kz ? "hideAiHelperButton" : "aiHelperButton"), zu(!kz), hz(!1)
                },
                children: kz ? "Hide AI Helper" : Ub ? "Fix error with AI" : "AI Helper"
              })
            }), Qz && (0, Oz.jsx)(ez.f, {
              tooltipInner: hb(Uz ? "codeEditorChat:hideChatTooltip" : "codeEditorChat:showChatTooltip"),
              placement: "top",
              children: (0, Oz.jsx)(Fz.B, {
                className: "CodeEditorButton",
                onClick: () => {
                  Dz.current = !Uz, Sz(!Uz)
                },
                children: hb(Uz ? "codeEditorChat:hideChat" : "codeEditorChat:showChat")
              })
            }), (0, Oz.jsx)(ez.f, {
              tooltipInner: hb("hidden" === nE ? "codeEditorWorld:showWorldTooltip" : "codeEditorWorld:hideWorldTooltip"),
              placement: "top",
              children: (0, Oz.jsx)(Fz.B, {
                className: "CodeEditorButton CodeEditorWorldButton",
                onClick: lE,
                children: hb("hidden" === nE ? "codeEditorWorld:showWorld" : "codeEditorWorld:hideWorld")
              })
            }), (0, Oz.jsx)(ez.f, {
              tooltipInner: hb("codeEditor:formatCodeTooltip"),
              placement: "top",
              children: (0, Oz.jsx)(Fz.f, {
                className: "CodeEditorButton",
                onClick: () => {
                  Zz.k.sK("FormatCode")
                },
                children: hb("codeEditor:formatCode")
              })
            }), (0, Oz.jsx)(ez.f, {
              tooltipInner: hb("codeEditor:copyCodeTooltip"),
              placement: "top",
              children: (0, Oz.jsx)(Fz.f, {
                className: "CodeEditorButton",
                onClick: () => {
                  navigator.clipboard.writeText(dz.current).then((() => {
                    Xb({
                      message: "Successfully copied code to clipboard",
                      type: "success"
                    })
                  })).catch((() => {
                    Xb({
                      message: "Failed to copy code to clipboard",
                      type: "warning"
                    })
                  }))
                },
                children: hb("codeEditor:copyCode")
              })
            }), (0, Oz.jsx)(ez.f, {
              tooltipInner: hb(Tz ? "codeEditor:hideTooltipsTooltip" : "codeEditor:showTooltipsTooltip"),
              placement: "top",
              children: (0, Oz.jsx)(Fz.f, {
                className: "CodeEditorButton",
                onClick: () => {
                  Lz(!Tz)
                },
                children: hb(Tz ? "codeEditor:hideTooltips" : "codeEditor:showTooltips")
              })
            }), !pz && (0, Oz.jsx)(ez.f, {
              tooltipInner: hb("codeEditor:worldCodeTooltip"),
              placement: "top",
              hideTooltip: "worldCodeButton" === Xu,
              children: (0, Oz.jsx)(ri.i, {
                tutorial: "welcome",
                step: "worldCodeButton",
                text: hb("codeEditor:tutorialWorldCodeButton"),
                enabled: !!Ku,
                placement: "top",
                waitForClick: !0,
                children: (0, Oz.jsx)(Fz.B, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    "worldCodeButton" === Xu && ((0, oi.e)("worldCodeButton"), xu.current = !0), Tb(), Zz.k.sK("EditLobbyCode", Rz)
                  },
                  children: hb("codeEditor:worldCode")
                })
              })
            }), (hu || ib || Ru) && (0, Oz.jsx)(ez.f, {
              tooltipInner: hb("codeEditor:moreOptionsTooltip"),
              placement: "top",
              children: (0, Oz.jsx)(Fz.f, {
                className: "CodeEditorButton CodeEditorMoreButton",
                onClick: () => {
                  au(!0)
                },
                children: (0, Oz.jsx)(Kz.c, {
                  name: "ellipsis"
                })
              })
            })]
          }), Gu && (0, Oz.jsx)(Fn.c, {
            middleScreenPopupContainerClassName: "CodeEditorMoreOptionsPopup",
            close: () => {
              au(!1)
            },
            body: (0, Oz.jsx)(si, {
              engine: ib,
              onSetEngine: Gb,
              aiHints: Ru ? {
                shown: Vz,
                setShown: mz
              } : null,
              variation: hu ? {
                name: Tu,
                setName: Lu,
                reload: Pb
              } : null
            })
          })]
        })
      })),
      Kl = new Set(["makeReport", "makeDiscordReport", "inviteLink"]);

    function wl(zz) {
      return "inventory" === zz
    }
    const Xl = (0, nz.memo)((function() {
      const {
        openEverythingMenuName: zz,
        openInGameMenuName: uz
      } = (0, cz.m)(["openEverythingMenuName", "openInGameMenuName"]), bz = (0, Jz.h)("fullInventory"), iz = (0, nz.useRef)(null), lz = (0, eu.m)();
      (0, vz.g)("toggleMenu", (zz => {
        var uz;
        if (!lz.shown) return;
        const bz = cz.e.get("openInGameMenuName");
        let Ez = zz.split("|")[0];
        const nz = null !== (uz = zz.split("|")[1]) && void 0 !== uz ? uz : null;
        ("closeCurrentMenu" === nz && bz || Ez === bz) && (iz.current = null, Ez = null);
        const Mz = "closeCurrentMenu" === nz ? null : nz;
        iz.current !== Mz && (iz.current = Mz), null !== Ez && (0, rn.m)(rn.b, {
          keepsMovement: wl(Ez)
        }), cz.e.set({
          openInGameMenuName: Ez
        })
      }));
      const Mz = (0, nz.useCallback)((zz => () => {
          Zz.k.sK("toggleMenu", zz)
        }), []),
        tz = (0, nz.useRef)({
          cantCrouchIfNotFullscreen: Mz("cantCrouchIfNotFullscreen"),
          makeReport: Mz("makeReport"),
          makeDiscordReport: Mz("makeDiscordReport"),
          editBook: Mz("editBook"),
          editNameTag: Mz("editNameTag"),
          inventory: Mz("inventory"),
          inviteLink: Mz("inviteLink"),
          writeOnBoard: Mz("writeOnBoard"),
          codeEditor: Mz("codeEditor"),
          lobbyCodeEditor: Mz("lobbyCodeEditor"),
          customLobbyBlockEditor: Mz("customLobbyBlockEditor"),
          ironChestPasskeyInput: Mz("ironChestPasskeyInput"),
          petUi: Mz("petUi")
        }),
        Hz = (0, nz.useCallback)((() => {
          cz.e.set({
            openInGameMenuName: null
          })
        }), []),
        pz = (0, nz.useRef)(null);
      return (0, nz.useEffect)((() => {
        if (uz) {
          var zz;
          (0, rn.m)(rn.b, {
            keepsMovement: wl(uz)
          }), pz.current = Kl.has(uz) ? null !== (zz = cz.e.get("openEverythingMenuName")) && void 0 !== zz ? zz : pz.current : null, cz.e.set({
            openEverythingMenuName: null
          })
        } else {
          const zz = pz.current;
          pz.current = null, null !== zz && null === cz.e.get("openEverythingMenuName") && cz.e.set({
            openEverythingMenuName: zz
          }), iz.current = null, (0, rn.k)(rn.b)
        }
      }), [uz]), (0, nz.useEffect)((() => {
        null !== zz && Hz()
      }), [zz, Hz]), (0, Oz.jsxs)(Oz.Fragment, {
        children: [(0, Oz.jsx)(Ez.g, {
          show: "clientGame" === uz
        }), (0, Oz.jsx)(tn, {
          show: "cantCrouchIfNotFullscreen" === uz,
          onOpen: tz.current.cantCrouchIfNotFullscreen,
          onClose: Hz
        }), (0, Oz.jsx)(Xn, {
          show: "makeReport" === uz,
          onOpen: tz.current.makeReport,
          onClose: Hz
        }), (0, Oz.jsx)(sn, {
          show: "makeDiscordReport" === uz,
          onOpen: tz.current.makeDiscordReport,
          onClose: Hz
        }), (0, Oz.jsx)(wb, {
          show: "editBook" === uz,
          onOpen: tz.current.editBook,
          onClose: Hz
        }), (0, Oz.jsx)(Rb, {
          show: "editNameTag" === uz,
          onOpen: tz.current.editNameTag,
          onClose: Hz
        }), bz && (0, Oz.jsx)(En, {
          show: "inventory" === uz,
          onOpen: tz.current.inventory,
          onClose: Hz,
          variation: iz.current
        }), (0, Oz.jsx)(ju, {
          show: "inviteLink" === uz,
          onClose: Hz,
          option: iz.current
        }), (0, Oz.jsx)(mz, {
          show: "retentionFeatures" === uz,
          onClose: Hz
        }), (0, Oz.jsx)(Zb, {
          show: "writeOnBoard" === uz,
          onOpen: tz.current.writeOnBoard,
          onClose: Hz
        }), (0, Oz.jsx)(Rl, {
          show: "lobbyCodeEditor" === uz,
          onOpen: tz.current.lobbyCodeEditor,
          onClose: Hz,
          isLobbyCode: !0
        }), (0, Oz.jsx)(Rl, {
          show: "codeEditor" === uz,
          onOpen: tz.current.codeEditor,
          onClose: Hz,
          isLobbyCode: !1
        }), (0, Oz.jsx)(vn, {
          show: "customLobbyBlockEditor" === uz,
          onOpen: tz.current.customLobbyBlockEditor,
          onClose: Hz
        }), (0, Oz.jsx)(qb, {
          show: "ironChestPasskeyInput" === uz,
          onOpen: tz.current.ironChestPasskeyInput,
          onClose: Hz
        }), (0, Oz.jsx)(Pn, {
          togglePointerLock: !0,
          show: "petUi" === uz,
          onOpen: tz.current.petUi,
          onClose: Hz
        })]
      })
    }))
  },
  35977: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Ol
    });
    bz(35981);
    var Ez = bz(56),
      nz = bz(1038),
      iz = bz.n(nz),
      lz = bz(3505),
      Mz = bz(1417),
      tz = bz(1846),
      Hz = bz(1089);

    function Oz() {
      const zz = 2e3,
        [uz, bz] = (0, Ez.useState)(null),
        [nz, Oz] = (0, Ez.useState)(null),
        pz = (0, Ez.useRef)(null);
      (0, Mz.g)("showBottomMessage", (uz => {
        let {
          message: bz,
          timeoutLength: Ez = zz,
          type: nz
        } = uz;
        Oz({
          message: bz,
          type: nz
        }), clearTimeout(pz.current), pz.current = setTimeout((() => {
          Oz(null)
        }), Ez)
      })), (0, Mz.g)("showPermanentBottomMessage", (zz => {
        bz(zz)
      })), (0, Ez.useEffect)((() => ((0, lz.e)((() => {
        bz(null)
      })), () => {
        clearTimeout(pz.current)
      })), []);
      const dz = nz || uz;
      return dz ? (0, Hz.jsx)("div", {
        className: iz()("BottomScreenMessage", dz.type),
        children: (0, Hz.jsx)(tz.b, {
          text: dz.message
        })
      }) : null
    }
    var pz = bz(2256),
      dz = bz(1871),
      Fz = bz(1482),
      Zz = bz(2317);

    function Rz() {
      let zz;
      const uz = () => {
          clearTimeout(zz), zz = setTimeout((() => {
            dz.gameBridge.latest("connectedGame").replay || (dz.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, Fz.navigatePreserveSearch)("/"))
          }), 3e5)
        },
        bz = () => {
          clearTimeout(zz)
        };
      return window.addEventListener("focus", bz), window.addEventListener("blur", uz), () => {
        window.removeEventListener("blur", uz), window.removeEventListener("focus", bz), clearTimeout(zz)
      }
    }
    var Kz = bz(1114),
      wz = bz(1108),
      Xz = bz(316),
      fz = bz(2313),
      sz = bz(22),
      rz = bz(1892),
      oz = bz(33),
      Nz = bz(1912),
      vz = bz(20),
      xz = bz(1920),
      Jz = bz(1362),
      Az = bz(8499),
      Tz = bz(1945),
      Lz = bz(1181);
    const Pz = (0, Ez.memo)((function() {
      const {
        isTouchScreen: zz,
        loadingOverlayVisible: uz,
        openInGameMenuName: bz,
        openEverythingMenuName: nz
      } = (0, vz.m)(["isTouchScreen", "loadingOverlayVisible", "openInGameMenuName", "openEverythingMenuName"]), lz = (0, Jz.p)();
      (0, wz.b)();
      const Mz = (0, fz.g)("showBasicMovementControls"),
        [tz, Oz] = (0, Ez.useState)("movement"),
        pz = "movement" === tz,
        dz = lz && !1 !== Mz;
      (0, Ez.useEffect)((() => {
        "padActions" !== tz || dz || Oz("done")
      }), [tz, dz]);
      const Fz = uz || null !== bz || null !== nz,
        Zz = (0, Ez.useRef)({
          step: tz,
          ms: 0
        });
      return (0, Ez.useEffect)((() => {
        if (Fz || "done" === tz) return;
        Zz.current.step !== tz && (Zz.current = {
          step: tz,
          ms: 0
        });
        const zz = Zz.current,
          uz = performance.now(),
          bz = setTimeout((() => {
            Oz("movement" === tz && (0, Jz.f)() ? "padActions" : "done")
          }), 7e3 - zz.ms);
        return () => {
          clearTimeout(bz), zz.ms += performance.now() - uz
        }
      }), [Fz, tz]), oz.g.getItem(Xz.Xb) > 2 ? (0, Hz.jsx)(mz, {
        showingMovementControls: !1
      }) : (0, Hz.jsxs)(Hz.Fragment, {
        children: [zz && !lz || !pz || !1 === Mz ? null : (0, Hz.jsxs)("div", {
          className: iz()("ControlsTutorialDiv", {
            Covered: Fz
          }),
          children: [(0, Hz.jsx)(Gz, {}), (0, Hz.jsx)(Vz, {
            header: "Sprint",
            noaAction: "sprint"
          }), (0, Hz.jsx)(Vz, {
            header: "Jump",
            noaAction: "jump"
          })]
        }), "padActions" === tz && dz && (0, Hz.jsx)(az, {
          covered: Fz
        }), (0, Hz.jsx)(mz, {
          showingMovementControls: "done" !== tz
        })]
      })
    }));

    function Gz() {
      const zz = (0, Jz.p)();
      return (0, Hz.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, Hz.jsx)("div", {
          className: "KeyHeader",
          children: "Move"
        }), zz && (0, Hz.jsx)(xz.e, {
          noaAction: "forward"
        }), !zz && (0, Hz.jsxs)(Hz.Fragment, {
          children: [(0, Hz.jsx)("div", {
            className: "WasdKeysTopRow",
            children: (0, Hz.jsx)(xz.e, {
              noaAction: "forward"
            })
          }), (0, Hz.jsxs)("div", {
            className: "WasdKeysBottomRow",
            children: [(0, Hz.jsx)(xz.e, {
              noaAction: "left"
            }), (0, Hz.jsx)(xz.e, {
              noaAction: "backward"
            }), (0, Hz.jsx)(xz.e, {
              noaAction: "right"
            })]
          })]
        })]
      })
    }

    function az(zz) {
      let {
        covered: uz
      } = zz;
      const {
        t: bz
      } = (0, Lz.F)(), Ez = (0, fz.g)("useInventory");
      return (0, Hz.jsxs)("div", {
        className: iz()("ControlsTutorialDiv", {
          Covered: uz
        }),
        children: [(0, Hz.jsx)(Vz, {
          header: bz("controller:tutorialMine"),
          noaAction: "primary-fire"
        }), (0, Hz.jsx)(Vz, {
          header: bz("controller:tutorialPlace"),
          noaAction: "alt-fire"
        }), !1 !== Ez && (0, Hz.jsx)(Vz, {
          header: bz("controller:tutorialInventory"),
          noaAction: "OpenInventory"
        }), (0, Hz.jsx)(Vz, {
          header: bz("controller:tutorialPause"),
          noaAction: "OpenSettings"
        })]
      })
    }

    function Vz(zz) {
      let {
        header: uz,
        noaAction: bz
      } = zz;
      return (0, Hz.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, Hz.jsx)("div", {
          className: "KeyHeader",
          children: uz
        }), (0, Hz.jsx)(xz.e, {
          noaAction: bz
        })]
      })
    }

    function mz(zz) {
      let {
        showingMovementControls: uz
      } = zz;
      const {
        isTouchScreen: bz
      } = (0, vz.m)(["isTouchScreen"]), nz = (0, Jz.p)(), iz = (0, Tz.b)("OpenShop"), [lz, Mz] = (0, Ez.useState)(!1), tz = `SeenShopControls|${(0,Nz.e)("connectedGame",(zz=>zz.gameNameWithVariation))}`, Oz = () => (!(0, Jz.f)() || null !== (0, Az.b)("OpenShop")) && !oz.g.getItem(tz) && rz.b.get("shopInfo") && !uz, pz = () => (Mz(!0), oz.g.setItem(tz, !0), (0, Jz.f)() || sz.k.sK("showShopTouchTutorial"), setTimeout((() => {
        Mz(!1)
      }), 7e3));
      (0, Ez.useEffect)((() => {
        let zz;
        const uz = sz.k.subscribe("showShopTutorial", (() => {
          Oz() && (zz = pz())
        }));
        return () => {
          clearTimeout(zz), sz.k.unsubscribe(uz)
        }
      }), [uz]);
      const dz = (0, Ez.useRef)();
      return (0, fz.f)("currencyAmounts", (zz => {
        if (Oz()) {
          let bz = !1;
          const Ez = rz.b.get("shopInfo");
          for (const nz in Ez) {
            for (const iz in Ez[nz].items) {
              var uz;
              const lz = Ez[nz].items[iz];
              if (void 0 !== lz.currency && zz[lz.currency] && lz.cost <= zz[lz.currency].amount && (null === (uz = lz.hidden) || void 0 === uz || !uz)) {
                bz = !0;
                break
              }
            }
            if (bz) break
          }
          bz && (dz.current = pz())
        }
      })), (0, Ez.useEffect)((() => () => {
        clearTimeout(dz.current)
      }), [uz]), !lz || nz && !iz ? null : (0, Hz.jsx)("div", {
        className: "ControlsTutorialDiv",
        children: bz && !nz ? null : (0, Hz.jsx)(Vz, {
          header: "Shop",
          noaAction: "OpenShop"
        })
      })
    }
    var qz = bz(1332),
      hz = bz(1047);
    const Uz = (0, Ez.memo)((function() {
      return (0, wz.b)(), (0, Hz.jsx)(cz, {})
    }));
    class cz extends Ez.Component {
      constructor(zz) {
        super(zz), this.showQueue = [], this.slideDuration = 1, this.state = {
          showQueue: [],
          currState: null
        }, this.currMessage = null, this.justShowed = !1
      }
      componentDidMount() {
        this.sub = sz.k.subscribe("TopRightHelper", (zz => {
          this.showQueue.push(zz), this.setState({
            showQueue: this.showQueue
          })
        }))
      }
      componentWillUnmount() {
        sz.k.unsubscribe(this.sub), clearTimeout(this.slideOutTimeout), clearTimeout(this.hidingMessageTimeout)
      }
      componentDidUpdate(zz, uz) {
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
        let zz, uz, bz, Ez, nz, iz = !0;
        if (this.state.showQueue.length > 0 && null === this.state.currState ? (this.currMessage = this.state.showQueue[0], this.justShowed = !0, zz = "slideIn") : "slideOut" === this.state.currState ? zz = "slideOut" : null === this.currMessage && (iz = !1), this.currMessage) {
          const iz = this.currMessage.color || "rgb(102, 102, 102)";
          uz = {
            width: this.currMessage.width || "250px",
            height: this.currMessage.height || "70px",
            animation: "1s " + ("slideOut" === zz ? "HelperSlideKeyFrameReverse" : "HelperSlideKeyFrame")
          }, bz = {
            backgroundColor: iz
          }, Ez = {
            animation: "2s " + ("slideOut" === zz ? "CloseNotification" : "ExpandNotification")
          }, nz = {
            fontSize: this.currMessage.fontSize || "16px",
            animation: "2s " + ("slideOut" === zz ? "textDisappear" : "textAppear")
          }
        }
        return iz ? (0, Hz.jsxs)("div", {
          className: "TopRightHelperBox",
          style: {
            ...uz
          },
          children: [(0, Hz.jsx)("div", {
            className: "LeftSide",
            style: bz,
            children: (0, Hz.jsx)(hz.c, {
              name: this.currMessage.icon,
              className: `fa-${this.currMessage.iconSizeMult||3}x HelperIcon`
            })
          }), (0, Hz.jsx)("div", {
            className: "RightSide",
            style: Ez,
            children: (0, Hz.jsx)("div", {
              className: "HelperText",
              style: nz,
              children: this.currMessage.text
            })
          })]
        }) : null
      }
    }
    var gz = bz(35983),
      Sz = bz(1377);
    const yz = (0, Sz.j)((zz => zz.PadSneakChip));

    function Dz(zz) {
      const [uz, bz, Ez] = function(zz) {
        const uz = parseInt(zz.substring(1), 16),
          bz = (uz >> 16) / 255,
          Ez = (uz >> 8 & 255) / 255,
          nz = (255 & uz) / 255,
          iz = Math.max(bz, Ez, nz),
          lz = Math.min(bz, Ez, nz),
          Mz = (iz + lz) / 2,
          tz = iz - lz;
        if (0 === tz) return [0, 0, Mz];
        const Hz = tz / (1 - Math.abs(2 * Mz - 1));
        let Oz;
        Oz = iz === bz ? (Ez - nz) / tz % 6 : iz === Ez ? (nz - bz) / tz + 2 : (bz - Ez) / tz + 4;
        return [(60 * Oz + 360) % 360, Hz, Mz]
      }(zz), nz = 0 === bz ? 0 : Math.min(.6, bz + .03), iz = Ez > .5 ? -1 : 1, lz = Qz(Ez + .09 * iz);
      return {
        panel: zz,
        slot: Wz(uz, nz, lz),
        slotSelected: Wz(uz, nz, Qz(lz + .2 * iz)),
        slotUnavailable: Wz(uz, nz, Qz(Ez + -.1 * iz))
      }
    }

    function Qz(zz) {
      return Math.min(1, Math.max(0, zz))
    }

    function Wz(zz, uz, bz) {
      const Ez = (1 - Math.abs(2 * bz - 1)) * uz,
        nz = Ez * (1 - Math.abs(zz / 60 % 2 - 1)),
        iz = bz - Ez / 2;
      let lz;
      return lz = zz < 60 ? [Ez, nz, 0] : zz < 120 ? [nz, Ez, 0] : zz < 180 ? [0, Ez, nz] : zz < 240 ? [0, nz, Ez] : zz < 300 ? [nz, 0, Ez] : [Ez, 0, nz], "#" + lz.map((zz => function(zz) {
        return Math.round(255 * zz).toString(16).padStart(2, "0")
      }(zz + iz))).join("")
    }
    var ez = bz(36011),
      jz = bz(4078),
      Iz = bz(2289),
      Bz = bz(2294),
      Cz = bz(36061),
      Yz = bz(4575),
      kz = bz(1434),
      zu = bz(588);

    function uu(zz, uz, bz, Ez) {
      zz.style.display = "";
      const nz = zz.offsetWidth,
        iz = zz.offsetHeight,
        lz = Math.min(Math.max((uz.left + uz.right) / 2 - nz / 2, 8), window.innerWidth - 8 - nz);
      let Mz = uz.top - bz - iz;
      const tz = [...Ez].sort(((zz, uz) => uz.top - zz.top));
      for (const Hz of tz) lz < Hz.right && lz + nz > Hz.left && Mz < Hz.bottom && Mz + iz > Hz.top && (Mz = Hz.top - 8 - iz);
      return Mz < 8 ? (zz.style.display = "none", null) : (zz.style.transform = `translate(${lz-uz.left}px, ${Mz-uz.top}px)`, {
        left: lz,
        top: Mz,
        right: lz + nz,
        bottom: Mz + iz
      })
    }

    function bu(zz) {
      const uz = [];
      for (const bz of document.querySelectorAll(zz)) {
        const zz = bz.getBoundingClientRect();
        zz.width > 0 && "visible" === getComputedStyle(bz).visibility && uz.push(zz)
      }
      return uz
    }

    function Eu(zz, uz) {
      return zz.clientX >= uz.left - 8 && zz.clientX <= uz.right + 8 && zz.clientY >= uz.top - 8 && zz.clientY <= uz.bottom + 8
    }
    var nu = bz(8554);
    class iu {
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
      hold(zz, uz) {
        this.suspended || (this.offered ? uz || this.setPhase("idle") : zz && "idle" === this.phase ? (this.setPhase("charging"), this.armTimer = setTimeout((() => {
          this.armTimer = null, this.onArm(), this.setPhase("armed")
        }), 1e3)) : zz || "charging" !== this.phase || this.setPhase("idle"))
      }
      onArm() {}
      setPhase(zz) {
        null !== this.armTimer && (clearTimeout(this.armTimer), this.armTimer = null);
        const uz = this.phase;
        this.phase = zz, this.deps.onPhase(zz, uz)
      }
    }
    const lu = 25 * Math.PI / 180,
      Mu = 45 * Math.PI / 180;
    class tu extends iu {
      constructor() {
        super(...arguments), this.speed = 0, this.armedSpeed = 0
      }
      get lockedSpeed() {
        return this.armedSpeed
      }
      move(zz, uz, bz) {
        this.speed = bz;
        const Ez = Math.hypot(zz, uz),
          nz = Ez > 0 ? Math.acos(Math.min(1, -uz / Ez)) : Math.PI;
        this.hold(Ez >= .8 && nz <= lu, Ez >= .5 && nz <= Mu)
      }
      onArm() {
        this.armedSpeed = this.speed
      }
    }
    var Hu = bz(1269);

    function Ou(zz, uz) {
      const bz = (0, Ez.useRef)(null),
        nz = (0, Ez.useRef)(uz);
      return nz.current = uz, (0, Ez.useEffect)((() => {
        if (!zz) return;
        const {
          create: uz,
          elementRef: Ez,
          ringRef: iz,
          classPrefix: lz,
          keptBehindMovementPanels: Mz,
          resizeEnds: tz
        } = nz.current, Hz = {
          charging: `${lz}Charging`,
          armed: `${lz}Armed`,
          ready: `${lz}Ready`,
          locked: `${lz}Locked`
        };
        let Oz = null;
        const pz = uz({
          onPhase: (zz, uz) => {
            const bz = Ez.current;
            if (null !== bz) {
              for (const [uz, Ez] of Object.entries(Hz)) bz.classList.toggle(Ez, uz === zz);
              if ("charging" === zz) Oz = iz.current.animate([{
                strokeDashoffset: 1
              }, {
                strokeDashoffset: 0
              }], {
                delay: 400,
                duration: 600,
                fill: "forwards"
              });
              else if ("idle" === zz) {
                var lz;
                null === (lz = Oz) || void 0 === lz || lz.cancel(), Oz = null
              }
              var Mz, tz;
              if ("armed" === zz && "charging" === uz && nz.current.onArmed(), "ready" === zz && nu.e.play("lockReady"), "locked" === zz) nu.e.play("lockLocked"), null === (Mz = (tz = nz.current).onLocked) || void 0 === Mz || Mz.call(tz);
              "locked" === uz && nz.current.onUnlocked()
            }
          }
        });
        bz.current = pz;
        const dz = () => {
            pz.suspend()
          },
          Fz = () => {
            "hidden" === document.visibilityState && dz()
          },
          Zz = () => {
            tz ? pz.suspend() : pz.suspendArming()
          },
          Rz = (0, Hu.e)((zz => {
            let {
              keepsMovement: uz
            } = zz;
            uz && Mz ? pz.suspendArming() : dz()
          }));
        return document.addEventListener("visibilitychange", Fz), window.addEventListener("blur", dz), window.addEventListener("resize", Zz), () => {
          Rz(), document.removeEventListener("visibilitychange", Fz), window.removeEventListener("blur", dz), window.removeEventListener("resize", Zz), pz.cancel(), bz.current = null
        }
      }), [zz]), (0, Nz.d)("localPlayerAliveSet", (() => {
        var zz;
        null === (zz = bz.current) || void 0 === zz || zz.suspend()
      })), bz
    }
    var pu = bz(2331),
      du = bz(2350),
      Fu = bz(1102),
      Zu = bz(3163),
      Ru = bz(2356);

    function Ku(zz, uz, bz) {
      const Ez = function(zz, uz, bz) {
        const Ez = bz.map((bz => ({
            left: Math.max(0, bz.left),
            top: Math.max(0, bz.top),
            right: Math.min(zz, bz.right),
            bottom: Math.min(uz, bz.bottom)
          }))).filter((zz => zz.right > zz.left && zz.bottom > zz.top)),
          nz = [...new Set([0, uz, ...Ez.flatMap((zz => [zz.top, zz.bottom]))])].sort(((zz, uz) => zz - uz)),
          iz = [];
        for (let lz = 0; lz < nz.length - 1; lz++) {
          const uz = nz[lz],
            bz = nz[lz + 1],
            Mz = Ez.filter((zz => zz.top <= uz && zz.bottom >= bz)).map((zz => [zz.left, zz.right])).sort(((zz, uz) => zz[0] - uz[0]));
          let tz = 0;
          for (const [zz, Ez] of Mz) zz > tz && iz.push({
            left: tz,
            top: uz,
            right: zz,
            bottom: bz
          }), tz = Math.max(tz, Ez);
          tz < zz && iz.push({
            left: tz,
            top: uz,
            right: zz,
            bottom: bz
          })
        }
        return iz
      }(zz, uz, bz);
      if (0 === Ez.length) return 'path("M0 0Z")';
      if (1 === Ez.length && 0 === Ez[0].left && 0 === Ez[0].top && Ez[0].right === zz && Ez[0].bottom === uz) return "";
      const nz = zz => Math.round(10 * zz) / 10;
      return `path("${Ez.map((zz=>`M${nz(zz.left)} ${nz(zz.top)}H${nz(zz.right)}V${nz(zz.bottom)}H${nz(zz.left)}Z`)).join("")}")`
    }

    function wu(zz, uz, bz) {
      let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16;
      const nz = [],
        iz = 2 * bz / Ez;
      for (let lz = 0; lz < Ez; lz++) {
        const Ez = uz - bz + lz * iz,
          Mz = Ez + iz,
          tz = Math.min(Math.max(uz, Ez), Mz) - uz,
          Hz = Math.sqrt(Math.max(0, bz * bz - tz * tz));
        nz.push({
          left: zz - Hz,
          top: Ez,
          right: zz + Hz,
          bottom: Mz
        })
      }
      return nz
    }
    var Xu = bz(8563),
      fu = bz(36039);

    function su(zz) {
      const uz = zz.getBoundingClientRect(),
        bz = {
          left: uz.left,
          top: uz.top,
          right: uz.right,
          bottom: uz.bottom
        },
        Ez = (0, Cz.f)(zz);
      if (Ez.whole) return [bz];
      const nz = function(zz) {
          const uz = zz.right - zz.left,
            bz = zz.bottom - zz.top,
            Ez = Math.min(uz, bz) / 2,
            nz = (zz.left + zz.right) / 2,
            iz = (zz.top + zz.bottom) / 2;
          return uz >= bz ? [{
            left: zz.left + Ez,
            top: zz.top,
            right: zz.right - Ez,
            bottom: zz.bottom
          }, ...wu(zz.left + Ez, iz, Ez), ...wu(zz.right - Ez, iz, Ez)] : [{
            left: zz.left,
            top: zz.top + Ez,
            right: zz.right,
            bottom: zz.bottom - Ez
          }, ...wu(nz, zz.top + Ez, Ez), ...wu(nz, zz.bottom - Ez, Ez)]
        }(bz),
        iz = Ez.keyBox;
      if (iz) {
        const zz = (bz.left + bz.right) / 2,
          uz = (bz.top + bz.bottom) / 2;
        nz.push({
          left: zz - iz.width / 2,
          top: uz - iz.height / 2,
          right: zz + iz.width / 2,
          bottom: uz + iz.height / 2
        })
      }
      return nz
    }

    function ru(zz) {
      const uz = zz.getBoundingClientRect();
      return 0 === uz.width && 0 === uz.height || "visible" !== getComputedStyle(zz).visibility ? [] : [(0, Xu.n)(uz, 44)]
    }

    function ou(zz, uz) {
      (0, Ez.useEffect)((() => {
        const bz = zz.current;
        if (!uz || !bz) return;
        const Ez = () => {
          const zz = Array.from(document.querySelectorAll(".TouchComponentsButtons .TouchKeyHit, .TouchInteractHit")),
            uz = zz.find((zz => zz.classList.contains("TouchInteractHit")));
          uz !== nz && (nz && iz.unobserve(nz), nz = uz, uz && iz.observe(uz));
          const Ez = Array.from(document.querySelectorAll(Ru.d)),
            lz = [...zz.flatMap((zz => su(zz))), ...Ez.flatMap(ru)],
            Mz = function(zz, uz) {
              const bz = uz.map((uz => ({
                left: uz.left - zz.left,
                top: uz.top - zz.top,
                right: uz.right - zz.left,
                bottom: uz.bottom - zz.top
              })));
              return Ku(Math.ceil(zz.width), Math.ceil(zz.height), bz)
            }(bz.getBoundingClientRect(), lz);
          bz.style.clipPath !== Mz && (bz.style.clipPath = Mz)
        };
        let nz;
        const iz = new ResizeObserver((() => {
          Ez()
        }));
        Ez(), iz.observe(bz);
        const lz = bz.closest(".InGameUi"),
          Mz = new MutationObserver(Ez);
        lz && Mz.observe(lz, {
          attributes: !0,
          attributeFilter: ["class", fu.e]
        });
        const tz = [(0, sz.o)(Zu.d, Ez), (0, sz.o)(Ru.o, Ez), (0, sz.o)(Ru.f, Ez)];
        return () => {
          iz.disconnect(), Mz.disconnect();
          for (const zz of tz) zz();
          bz.style.clipPath = ""
        }
      }), [zz, uz])
    }
    var Nu = bz(4177);

    function vu(zz) {
      var uz;
      let {
        onMove: bz,
        mode: nz,
        speedCurve: iz,
        autorun: lz = !1
      } = zz;
      const Mz = (0, Ez.useRef)(null),
        tz = (0, Ez.useRef)(null),
        Oz = (0, Ez.useRef)(null),
        pz = (0, Ez.useRef)(null),
        Fz = (0, Ez.useRef)(null),
        Zz = (0, Ez.useRef)(null),
        Rz = (0, Ez.useRef)(null),
        Kz = (0, Ez.useRef)(null),
        wz = (0, Ez.useRef)(null),
        Xz = (0, Ez.useRef)(!1),
        fz = (0, Ez.useRef)({
          clientX: 0,
          clientY: 0
        }),
        {
          t: sz
        } = (0, Lz.F)(),
        rz = (0, Nu.n)(nz),
        oz = (0, vz.m)(["notchSize"]).notchSize,
        Nz = oz.left,
        xz = (0, Ez.useRef)(16),
        Jz = (0, du.e)(),
        [Az, Tz, Pz] = "pinned" === nz ? pu.v : null !== (uz = Jz.hudElements.joystick) && void 0 !== uz ? uz : pu.v,
        Gz = "pinned" === nz ? null : Jz.hudSafe,
        az = Math.max(Nu.l, Nu.m * Pz);
      ou(tz, "pinned" !== nz);
      const Vz = function(zz, uz, bz, nz, iz) {
        const lz = (0, Ez.useRef)(null),
          Mz = () => {
            clearInterval(lz.current), lz.current = null
          },
          tz = Ou(zz, {
            create: zz => new tu(zz),
            elementRef: uz,
            ringRef: bz,
            classPrefix: "Autorun",
            keptBehindMovementPanels: !0,
            resizeEnds: !0,
            onArmed: iz,
            onLocked: () => {
              lz.current = setInterval((() => {
                dz.gameBridge.lookup("dropAhead", null) && (nu.e.play("autorunLedgeStop"), tz.current.cancel())
              }), 100)
            },
            onUnlocked: () => {
              Mz(), nz()
            }
          });
        return (0, Ez.useEffect)((() => Mz), []), tz
      }(lz, Oz, Rz, (() => {
        yz(), Sz()
      }), (() => {
        mz(), null === wz.current && Vz.current.suspend()
      }));

      function mz() {
        const zz = Oz.current.getBoundingClientRect();
        wz.current = uu(Kz.current, zz, 80, bu(`.TouchInventoryKey, ${Ru.d}`)), Xz.current = null !== wz.current && Eu(fz.current, wz.current)
      }

      function qz() {
        const {
          innerWidth: zz,
          innerHeight: uz
        } = window, bz = (0, Ru.F)(Gz, zz, uz, (0, Ru.L)(oz, zz, uz), xz.current);
        return {
          left: bz[3],
          bottom: bz[2]
        }
      }

      function Uz(zz) {
        Oz.current.style.transform = `translate(${zz.x-az}px, ${zz.y-az}px)`
      }

      function cz(zz) {
        const uz = Oz.current;
        uz.classList.add("Resting"), uz.classList.toggle("Returning", zz), uz.style.display = "fixed_hidden" === nz ? "none" : "block", Uz(function() {
          const {
            innerWidth: zz,
            innerHeight: uz
          } = window, bz = qz(), Ez = Nz * zz / 100 + bz.left, nz = Mz.current.offsetHeight || uz, iz = ((0, Fu.e)(zz, uz) ? Nu.f : Nu.e) + bz.bottom;
          return {
            x: Math.min(zz - az, Math.max(az, Ez + Nu.h + Az * zz)),
            y: Math.min(nz - az, Math.max(az, nz - iz + Tz * nz))
          }
        }())
      }
      const gz = (0, Ez.useRef)({
        restFixed: cz,
        release: Dz
      });

      function Sz() {
        rz ? cz("fixed_shown" === nz) : "floating" === nz && (Oz.current.style.display = "none"), bz({
          x: 0,
          y: 0
        })
      }

      function yz() {
        Zz.current = null, Fz.current = null, pz.current.style.transform = "translate(-50%, -50%)"
      }

      function Dz(zz) {
        yz();
        const uz = Vz.current;
        zz && null !== uz && void 0 !== uz && uz.lift() ? bz({
          x: 0,
          y: -uz.lockedSpeed
        }) : (null === uz || void 0 === uz || uz.cancel(), Sz())
      }

      function Qz(zz) {
        const uz = Array.from(zz.touches).find((zz => zz.identifier === Zz.current));
        if (null === Fz.current || null === Zz.current || (0, zu.F)(uz)) return;
        const Ez = Vz.current,
          nz = uz.clientX - Fz.current.x,
          lz = uz.clientY - Fz.current.y,
          Mz = Math.hypot(nz, lz),
          tz = Mz > 0 ? Math.min(1, az / Mz) : 0,
          Hz = nz * tz,
          Oz = lz * tz,
          dz = Math.hypot(Hz, Oz) / az,
          Rz = iz && dz > 0 ? iz(dz) / dz : 1;
        pz.current.style.transform = `translate(calc(-50% + ${Hz}px), calc(-50% + ${Oz}px))`;
        const Kz = Hz / az,
          sz = Oz / az;
        if (bz({
            x: Kz * Rz,
            y: sz * Rz
          }), null !== Ez && null !== wz.current) {
          Ez.move(Kz, sz, dz * Rz), fz.current = {
            clientX: uz.clientX,
            clientY: uz.clientY
          };
          const zz = Xz.current;
          Xz.current = Eu(uz, wz.current), Xz.current !== zz && Ez.target(Xz.current)
        }
      }
      return gz.current = {
        restFixed: cz,
        release: Dz
      }, (0, Ez.useLayoutEffect)((() => {
        if (!rz) return;
        const zz = () => {
          xz.current = (0, Ru.Q)(document)
        };
        zz(), null === Zz.current && gz.current.restFixed(!1);
        const uz = new ResizeObserver((() => {
          zz(), null === Zz.current && gz.current.restFixed(!1)
        }));
        uz.observe(Mz.current);
        const bz = Oz.current;
        return () => {
          uz.disconnect(), bz.classList.remove("Resting", "Returning"), null === Zz.current && (bz.style.display = "", bz.style.transform = "")
        }
      }), [rz, nz, oz, Az, Tz, az, Gz]), (0, Ez.useEffect)((() => {
        const zz = zz => {
            const uz = Zz.current;
            null === uz || Array.from(zz.touches).some((zz => zz.identifier === uz)) || gz.current.release("touchend" === zz.type && Array.from(zz.changedTouches).some((zz => zz.identifier === uz)))
          },
          uz = () => {
            null !== Zz.current && gz.current.release(!1)
          },
          bz = () => {
            "hidden" === document.visibilityState && uz()
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
        }), window.addEventListener("blur", uz), document.addEventListener("visibilitychange", bz);
        const Ez = (0, Hu.e)((zz => {
          let {
            keepsMovement: bz
          } = zz;
          bz || uz()
        }));
        return () => {
          Ez(), document.removeEventListener("touchstart", zz, {
            capture: !0
          }), document.removeEventListener("touchmove", zz, {
            capture: !0
          }), document.removeEventListener("touchend", zz, {
            capture: !0
          }), document.removeEventListener("touchcancel", zz, {
            capture: !0
          }), window.removeEventListener("blur", uz), document.removeEventListener("visibilitychange", bz)
        }
      }), []), (0, Ez.useEffect)((() => {
        const zz = Mz.current,
          uz = zz => {
            zz.preventDefault()
          };
        return zz.addEventListener("touchstart", uz, {
          passive: !1
        }), () => {
          zz.removeEventListener("touchstart", uz)
        }
      }), []), (0, Hz.jsxs)("div", {
        ref: Mz,
        className: "JoystickZone",
        style: rz && (Az > 0 || Pz > 1 || qz().left > 0) ? {
          width: `max(35vw, calc(${Nz+100*Az}vw + ${qz().left+Nu.h+az+24}px))`
        } : void 0,
        onTouchStart: function(zz) {
          var uz;
          if (null !== Zz.current) return;
          const bz = Array.from(zz.changedTouches).find((zz => {
            var uz;
            return null === (uz = Mz.current) || void 0 === uz ? void 0 : uz.contains(zz.target)
          }));
          if (bz) {
            if (null === (uz = Vz.current) || void 0 === uz || uz.startTouch(), Zz.current = bz.identifier, "pinned" === nz) {
              const zz = Oz.current.getBoundingClientRect();
              Fz.current = {
                x: zz.left + zz.width / 2,
                y: zz.top + zz.height / 2
              }
            } else {
              Fz.current = {
                x: bz.clientX,
                y: bz.clientY
              }, Oz.current.classList.remove("Resting", "Returning"), Oz.current.style.display = "block";
              const zz = Mz.current.getBoundingClientRect();
              Uz({
                x: bz.clientX - zz.left,
                y: bz.clientY - zz.top
              }), lz && (fz.current = {
                clientX: bz.clientX,
                clientY: bz.clientY
              }, mz())
            }
            Qz(zz)
          }
        },
        onTouchMove: Qz,
        children: [(0, Hz.jsx)("div", {
          ref: tz,
          className: "JoystickTouchLayer"
        }), (0, Hz.jsxs)("div", {
          ref: Oz,
          className: "Joystick",
          style: {
            width: 2 * az + "px",
            height: 2 * az + "px",
            transform: "pinned" === nz ? "translate(4vw, calc(50vh - 50%))" : void 0
          },
          children: [(0, Hz.jsx)("div", {
            className: "JoystickBase",
            style: {
              width: 2 * az + "px",
              height: 2 * az + "px"
            }
          }), lz && (0, Hz.jsxs)(Hz.Fragment, {
            children: [(0, Hz.jsx)("svg", {
              className: "AutorunRing",
              viewBox: "0 0 100 100",
              children: (0, Hz.jsx)("circle", {
                ref: Rz,
                cx: "50",
                cy: "50",
                r: "48",
                pathLength: 1
              })
            }), (0, Hz.jsxs)("div", {
              ref: Kz,
              className: "AutorunTarget",
              children: [(0, Hz.jsx)(hz.c, {
                name: "lock"
              }), sz("settingsMenu:autoRun")]
            })]
          }), (0, Hz.jsx)("div", {
            ref: pz,
            className: "JoystickKnob",
            style: {
              width: `${az}px`,
              height: `${az}px`
            }
          })]
        })]
      })
    }
    const xu = .35,
      Ju = .22;

    function Au(zz) {
      if (zz < .1) return 0;
      if (zz < xu) {
        const uz = (zz - .1) / (xu - .1);
        return .06 + .16 * uz * uz
      }
      return zz < .85 ? Ju + .78 * (zz - xu) / .5 : 1
    }

    function Tu(zz, uz) {
      const bz = (0, Ez.useRef)(null);
      return (0, Ez.useLayoutEffect)((() => (Cz.h.set(zz, bz.current, uz), () => {
        Cz.h.set(zz, null)
      })), [zz, uz]), bz
    }
    const Lu = "C",
      Pu = "J",
      Gu = "U",
      au = "P",
      Vu = "A",
      mu = "G",
      qu = "X",
      hu = (0, Ez.forwardRef)((function(zz, uz) {
        let {
          slot: bz,
          canvasZone: nz = !1,
          lit: lz = !1,
          label: Mz,
          className: tz,
          children: Oz,
          ...pz
        } = zz;
        return (0, Ez.useEffect)((() => (sz.k.sK(Zu.d), () => {
          sz.k.sK(Zu.d)
        })), []), (0, Hz.jsx)("div", {
          ref: uz,
          className: iz()("TouchKeyHit", `TouchSlot${bz}`, tz, {
            CanvasZone: nz
          }),
          ...pz,
          children: (0, Hz.jsxs)("div", {
            className: iz()("TouchKey", {
              Lit: lz,
              Labelled: void 0 !== Mz
            }),
            children: [Oz, void 0 !== Mz && (0, Hz.jsx)("span", {
              className: "TouchKeyLabel",
              children: Mz
            })]
          })
        })
      }));

    function Uu(zz, uz) {
      (0, Ez.useEffect)((() => () => {
        uz.current && (uz.current = !1, (0, Bz.t)(zz, !1, {
          isTrusted: !0,
          timeStamp: performance.now()
        }))
      }), [])
    }

    function cu(zz, uz) {
      const bz = uz ? [qu] : [au, qu];
      return zz.filter((zz => null !== zz)).slice(0, bz.length).map(((zz, uz) => {
        const nz = bz[uz];
        return (0, Hz.jsx)(Ez.Fragment, {
          children: zz.render(nz)
        }, `${zz.id}:${nz}`)
      }))
    }
    var gu = bz(36046);
    class Su extends iu {
      constructor() {
        super(...arguments), this.start = {
          x: 0,
          y: 0
        }, this.moved = !1
      }
      press(zz, uz) {
        this.start = {
          x: zz,
          y: uz
        }, this.moved = !1, this.startTouch(), this.hold(!0, !1)
      }
      move(zz, uz, bz) {
        const Ez = Math.hypot(zz - this.start.x, uz - this.start.y) <= 12;
        this.moved ||= !Ez;
        const nz = null !== bz && uz < this.start.y - 12 && Eu({
          clientX: zz,
          clientY: uz
        }, bz);
        this.hold(!this.moved, Ez || nz)
      }
    }
    const yu = new Set;

    function Du(zz) {
      const uz = new Set(Array.from(zz.touches, (zz => zz.identifier)));
      for (const bz of yu) {
        for (const zz of bz.ids) uz.has(zz) || bz.ids.delete(zz);
        if (0 === bz.ids.size) {
          yu.delete(bz);
          bz.pressesOnPointerDown && "touchstart" === zz.type && Array.from(zz.changedTouches).some((zz => zz.target instanceof Node && bz.element.contains(zz.target))) || bz.release()
        }
      }
    }
    if ("undefined" !== typeof window)
      for (const sl of ["touchstart", "touchmove"]) window.addEventListener(sl, Du, {
        capture: !0,
        passive: !0
      });

    function Qu(zz) {
      let {
        pressesOnPointerDown: uz = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const bz = (0, Ez.useRef)(zz);
      bz.current = zz;
      const nz = (0, Ez.useRef)({
        ids: new Set,
        element: null,
        pressesOnPointerDown: uz,
        release: () => {
          bz.current()
        }
      });
      (0, Ez.useEffect)((() => {
        const zz = nz.current;
        return () => {
          yu.delete(zz), zz.ids.clear()
        }
      }), []);
      const iz = zz => {
        const uz = nz.current;
        for (const bz of Array.from(zz.changedTouches)) uz.ids.delete(bz.identifier);
        0 === uz.ids.size && yu.delete(uz)
      };
      return {
        onTouchStart: zz => {
          const uz = nz.current;
          uz.element = zz.currentTarget;
          for (const bz of Array.from(zz.changedTouches)) bz.target instanceof Node && zz.currentTarget.contains(bz.target) && uz.ids.add(bz.identifier);
          uz.ids.size > 0 && yu.add(uz)
        },
        onTouchEnd: iz,
        onTouchCancel: iz
      }
    }

    function Wu(zz, uz) {
      return null === uz ? null : (0, gu.b)(zz.nativeEvent.changedTouches, uz.id)
    }

    function eu(zz) {
      let {
        lockable: uz
      } = zz;
      const {
        t: bz
      } = (0, Lz.F)(), nz = "round" === (0, pu.fb)().hudShape, iz = (0, Ez.useRef)(!1);
      Uu(Iz.w.Jump, iz);
      const lz = (0, Ez.useRef)(null),
        Mz = (0, Ez.useRef)(null),
        tz = (0, Ez.useRef)(null),
        Oz = (0, Ez.useRef)(null),
        pz = (0, Ez.useRef)(null),
        dz = (0, Ez.useRef)(null),
        Fz = (0, Ez.useRef)(!1),
        Zz = (zz, uz) => {
          iz.current = zz, (0, Bz.t)(Iz.w.Jump, zz, uz)
        },
        Rz = function() {
          let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            isTrusted: !0,
            timeStamp: performance.now()
          };
          iz.current && (lz.current && (0, kz.l)(lz.current, !1), Zz(!1, zz))
        },
        Kz = Ou(uz, {
          create: zz => new Su(zz),
          elementRef: lz,
          ringRef: Mz,
          classPrefix: "JumpLock",
          keptBehindMovementPanels: !1,
          resizeEnds: !1,
          onArmed: () => {
            const zz = lz.current.getBoundingClientRect(),
              uz = tz.current.parentElement,
              bz = uz.getBoundingClientRect(),
              Ez = {
                left: bz.left + uz.clientLeft,
                top: bz.top + uz.clientTop,
                right: bz.right - uz.clientLeft,
                bottom: bz.bottom - uz.clientTop
              };
            if (pz.current = uu(tz.current, Ez, 16, bu(`.TouchKeyHit:not(.JumpKey) > .TouchKey, .TouchInventoryKey, ${Ru.d}`)), null === pz.current) return void Kz.current.suspend();
            const nz = pz.current;
            dz.current = {
              left: Math.min(zz.left, nz.left),
              top: nz.top,
              right: Math.max(zz.right, nz.right),
              bottom: zz.bottom
            }, Fz.current = null !== Oz.current && Eu({
              clientX: Oz.current.x,
              clientY: Oz.current.y
            }, nz)
          },
          onUnlocked: () => {
            null === Oz.current && Rz()
          }
        }),
        wz = zz => {
          var uz;
          Oz.current = null, null === (uz = Kz.current) || void 0 === uz || uz.cancel(), Rz(zz)
        },
        Xz = Qu((() => {
          wz()
        })),
        fz = zz => {
          const uz = Oz.current;
          var bz;
          return null === uz ? null !== (bz = Kz.current) && void 0 !== bz && bz.locked ? null : "lifted" : Wu(zz, uz) ? "lifted" : (0, gu.d)(zz.nativeEvent.touches, uz.id) ? null : "dropped"
        };
      return (0, Hz.jsxs)(hu, {
        ref: lz,
        slot: Pu,
        className: "JumpKey",
        onTouchStart: zz => {
          Xz.onTouchStart(zz), (0, kz.l)(zz.currentTarget, !0), null === Oz.current || (0, gu.d)(zz.nativeEvent.touches, Oz.current.id) || wz();
          const uz = zz.changedTouches[0];
          var bz;
          null === Oz.current && uz && (Oz.current = {
            id: uz.identifier,
            x: uz.clientX,
            y: uz.clientY
          }, null === (bz = Kz.current) || void 0 === bz || bz.press(uz.clientX, uz.clientY));
          iz.current || Zz(!0, zz.nativeEvent)
        },
        onTouchMove: zz => {
          const uz = Oz.current,
            bz = Wu(zz, uz);
          if (!bz) return;
          const Ez = Kz.current;
          if (null === Ez || void 0 === Ez || Ez.move(bz.clientX, bz.clientY, dz.current), null !== Ez && void 0 !== Ez && Ez.offered) {
            const zz = Eu(bz, pz.current);
            zz !== Fz.current && (Fz.current = zz, Ez.target(zz))
          }
          uz.x = bz.clientX, uz.y = bz.clientY
        },
        onTouchEnd: zz => {
          var uz;
          Xz.onTouchEnd(zz);
          const bz = fz(zz);
          null !== bz && ("dropped" !== bz ? (Oz.current = null, null !== (uz = Kz.current) && void 0 !== uz && uz.lift() ? (0, kz.l)(zz.currentTarget, !1) : Rz(zz.nativeEvent)) : wz(zz.nativeEvent))
        },
        onTouchCancel: zz => {
          Xz.onTouchCancel(zz), null !== fz(zz) && wz(zz.nativeEvent)
        },
        children: [(0, Hz.jsx)(hz.c, {
          name: "arrow-up-from-line"
        }), uz && (0, Hz.jsxs)(Hz.Fragment, {
          children: [(0, Hz.jsx)("span", {
            className: "JumpLockBadge",
            children: (0, Hz.jsx)(hz.c, {
              name: "lock"
            })
          }), (0, Hz.jsx)("svg", {
            className: "JumpLockRing",
            viewBox: "0 0 100 100",
            preserveAspectRatio: "none",
            children: (0, Hz.jsx)("rect", {
              ref: Mz,
              x: "2",
              y: "2",
              width: "96",
              height: "96",
              rx: nz ? 48 : 0,
              pathLength: 1
            })
          }), (0, Hz.jsxs)("div", {
            ref: tz,
            className: "JumpLockTarget",
            children: [(0, Hz.jsx)(hz.c, {
              name: "lock"
            }), bz("settingsMenu:jumpLock")]
          })]
        })]
      })
    }
    const ju = new WeakMap;
    class Iu {
      constructor(zz) {
        this.zones = zz, this.followed = new Map, this.onStart = zz => {
          if (this.releaseMissing(zz.touches), zz.target instanceof HTMLCanvasElement)
            for (let bz = 0; bz < zz.changedTouches.length; bz++) {
              var uz;
              const {
                identifier: Ez,
                clientX: nz,
                clientY: iz
              } = zz.changedTouches[bz];
              this.release(Ez);
              const lz = this.zones.hitZone(nz, iz);
              if (!lz) continue;
              const {
                key: Mz
              } = lz;
              null === (uz = ju.get(Mz)) || void 0 === uz || uz.cancel();
              const tz = {
                hit: lz.element,
                key: Mz,
                x: lz.x,
                y: lz.y,
                reach: .6 * lz.radius
              };
              this.followed.set(Ez, tz), (0, kz.l)(lz.element, !0), Bu(tz, nz, iz)
            }
        }, this.onMove = zz => {
          this.releaseMissing(zz.touches);
          for (let uz = 0; uz < zz.changedTouches.length; uz++) {
            const {
              identifier: bz,
              clientX: Ez,
              clientY: nz
            } = zz.changedTouches[uz], iz = this.followed.get(bz);
            iz && Bu(iz, Ez, nz)
          }
        }, this.onEnd = zz => {
          for (let uz = 0; uz < zz.changedTouches.length; uz++) this.release(zz.changedTouches[uz].identifier)
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
        for (const uz of [...this.followed.keys()])(0, gu.d)(zz, uz) || this.release(uz)
      }
      releaseAll() {
        for (const zz of [...this.followed.keys()]) this.release(zz)
      }
      release(zz) {
        const uz = this.followed.get(zz);
        if (!uz) return;
        this.followed.delete(zz);
        for (const nz of this.followed.values())
          if (nz.key === uz.key) return;
        (0, kz.l)(uz.hit, !1);
        const {
          key: bz
        } = uz, Ez = bz.style.translate;
        bz.style.translate = "", Ez && ju.set(bz, bz.animate({
          translate: [Ez, "0 0"]
        }, {
          duration: 150,
          easing: "ease-out"
        }))
      }
    }

    function Bu(zz, uz, bz) {
      let {
        key: Ez,
        x: nz,
        y: iz,
        reach: lz
      } = zz;
      const Mz = uz - nz,
        tz = bz - iz,
        Hz = Math.min(1, lz / (Math.hypot(Mz, tz) || 1));
      Ez.style.translate = `${Mz*Hz}px ${tz*Hz}px`
    }
    const Cu = () => {
      const zz = (0, jz.j)(),
        uz = (0, Jz.p)();
      return zz || uz
    };

    function Yu(zz) {
      (0, Cz.i)(zz.x, zz.y)
    }
    const ku = (0, Ez.memo)((function() {
        const zz = Cu(),
          {
            joystickMode: uz,
            touchSpeedCurve: bz,
            autorun: nz
          } = (0, vz.m)(["clientEscMenuOptions"]).clientEscMenuOptions;
        return (0, Ez.useEffect)((() => ((0, Yz.i)(Iz.z.TouchControls, Iz.z.TouchControls), () => {
          (0, Yz.i)(Iz.z.TouchControls, 0), (0, Cz.i)(0, 0)
        })), []), (0, Hz.jsx)("div", {
          className: iz()("TouchMovementWrapper", {
            Hidden: zz
          }),
          "data-camera-keeper": "",
          children: (0, Hz.jsx)(vu, {
            onMove: Yu,
            mode: uz,
            speedCurve: bz ? Au : void 0,
            autorun: nz
          })
        })
      })),
      zb = (0, Ez.memo)((function() {
        const zz = Cu(),
          {
            clientEscMenuOptions: uz
          } = (0, vz.m)(["clientEscMenuOptions"]),
          bz = uz.touchActionButtons;
        return (0, Ez.useEffect)((() => new Iu(Cz.h).start()), []), (0, Ez.useEffect)((() => {
          sz.k.sK(Zu.d)
        }), [zz]), (0, Hz.jsxs)("div", {
          className: iz()("TouchComponentsButtons", {
            Hidden: zz
          }),
          "data-camera-keeper": "",
          children: [(0, Hz.jsx)(eu, {
            lockable: uz.jumpLock && !zz
          }), (0, Hz.jsx)(db, {
            hidden: zz,
            actionButtons: bz
          }), (0, Hz.jsx)(bb, {})]
        })
      }));

    function ub(zz) {
      const uz = uz => bz => {
        (0, kz.l)(bz.currentTarget, uz), zz(uz, bz.nativeEvent)
      };
      return {
        onPointerDown: uz(!0),
        onPointerUp: uz(!1),
        onPointerCancel: uz(!1)
      }
    }

    function bb() {
      const zz = (0, fz.g)("canCrouch"),
        uz = (0, Nz.h)("crouching"),
        bz = (0, Ez.useRef)(!1);
      Uu(Iz.w.Crouch, bz);
      const nz = (zz, uz) => {
          bz.current = zz, (0, Bz.t)(Iz.w.Crouch, zz, uz)
        },
        iz = (0, Ez.useRef)(null),
        lz = () => {
          bz.current && (iz.current && (0, kz.l)(iz.current, !1), nz(!1, {
            isTrusted: !0,
            timeStamp: performance.now()
          }))
        },
        Mz = Qu(lz);
      return (0, Ez.useEffect)((() => {
        !1 === zz && lz()
      }), [zz]), !1 === zz ? null : (0, Hz.jsx)(hu, {
        ref: iz,
        slot: Lu,
        className: "CrouchKey",
        lit: uz,
        ...Mz,
        ...ub(nz),
        children: (0, Hz.jsx)(hz.c, {
          name: "arrow-down-to-line"
        })
      })
    }
    const Eb = [{
        icon: "arrows-rotate"
      }],
      nb = [{
        icon: "Arrow"
      }],
      ib = [{
        icon: "crosshairs"
      }],
      lb = [{
        icon: "swords"
      }],
      Mb = [{
        icon: "hand-back-point-up"
      }],
      tb = [{
        icon: "Firecracker"
      }];

    function Hb(zz, uz, bz, Ez) {
      return {
        id: JSON.stringify(uz),
        render: nz => (0, Hz.jsx)(Fb, {
          code: zz,
          slot: nz,
          icon: uz,
          label: Ez,
          hidden: bz
        })
      }
    }

    function Ob(zz, uz) {
      return {
        id: "fly",
        render: bz => (0, Hz.jsx)(pb, {
          slot: bz,
          flying: zz,
          label: uz
        })
      }
    }

    function pb(zz) {
      let {
        slot: uz,
        flying: bz,
        label: Ez
      } = zz;
      return (0, Hz.jsx)(hu, {
        slot: uz,
        className: "FlyKey",
        lit: bz,
        label: Ez,
        ...ub(((zz, uz) => {
          (0, Bz.t)(Iz.w.Fly, zz, uz)
        })),
        children: (0, Hz.jsx)(hz.c, {
          name: "feather-pointed"
        })
      })
    }

    function db(zz) {
      var uz, bz;
      let {
        hidden: Ez,
        actionButtons: nz
      } = zz;
      const {
        t: iz
      } = (0, Lz.F)(), {
        gun: lz,
        aimable: Mz,
        chargeName: tz
      } = (0, Nz.h)("heldItemAim"), Oz = (0, Nz.h)("gliderBoostFuel"), {
        canFly: pz,
        flying: dz
      } = (0, Nz.h)("flight"), Fz = (0, fz.g)("touchscreenActionButton"), Zz = lz ? Eb : Fz, Rz = Mz ? {
        icon: nb,
        label: iz("touchKeys:aim")
      } : null, Kz = null !== tz ? {
        icon: [{
          icon: tz
        }]
      } : null, wz = null !== Rz && void 0 !== Rz ? Rz : Kz, Xz = null !== (uz = null === (bz = lz ? Rz : null !== Kz && void 0 !== Kz ? Kz : Rz) || void 0 === bz ? void 0 : bz.icon) && void 0 !== uz ? uz : Mb, sz = [!nz && wz ? Hb(Cz.d.Action2, wz.icon, Ez, wz.label) : null, lz ? Hb(Cz.d.Action3, ib, Ez, iz("touchKeys:scope")) : null, pz ? Ob(dz, iz("touchKeys:fly")) : null];
      return (0, Hz.jsxs)(Hz.Fragment, {
        children: [Zz && (0, Hz.jsx)(Fb, {
          code: Cz.d.Action1,
          slot: mu,
          icon: Zz,
          label: lz ? iz("touchKeys:reload") : void 0,
          hidden: Ez
        }, JSON.stringify(Zz)), nz && (0, Hz.jsxs)(Hz.Fragment, {
          children: [(0, Hz.jsx)(Fb, {
            code: Cz.d.Attack,
            slot: Vu,
            icon: lb,
            name: iz("touchKeys:attack"),
            hidden: Ez
          }), (0, Hz.jsx)(Fb, {
            code: Cz.d.Use,
            slot: Gu,
            icon: Xz,
            name: iz("touchKeys:use"),
            hidden: Ez
          })]
        }), cu(sz, nz), Oz > 0 && (0, Hz.jsx)(Fb, {
          code: Cz.d.Boost,
          slot: qu,
          icon: tb,
          label: iz("touchKeys:boost", {
            fuel: Oz > 99 ? "99+" : Oz
          }),
          hidden: Ez
        })]
      })
    }

    function Fb(zz) {
      let {
        code: uz,
        slot: bz,
        icon: Ez,
        label: nz,
        name: iz,
        hidden: lz
      } = zz;
      const Mz = Tu(uz, lz);
      return (0, Hz.jsx)(hu, {
        ref: Mz,
        slot: bz,
        className: "TouchActionKey",
        canvasZone: !0,
        label: nz,
        role: void 0 !== iz ? "img" : void 0,
        "aria-label": iz,
        children: (0, Hz.jsx)(tz.b, {
          text: Ez
        })
      })
    }
    var Zb = bz(4055),
      Rb = bz(2756),
      Kb = bz(621);
    const wb = (0, Ez.memo)((function() {
      (0, wz.b)();
      const zz = (0, Ez.useRef)([]),
        uz = (0, Rb.c)(),
        bz = (0, Ez.useRef)(0),
        nz = (0, Ez.useRef)(0),
        iz = (0, Ez.useRef)([]),
        lz = (0, Ez.useRef)(null);

      function Oz(bz, Ez, nz, iz) {
        const lz = (0, Kb.d)(),
          Mz = setTimeout((() => {
            zz.current = zz.current.filter((zz => zz.id !== lz)), uz()
          }), iz);
        dz.gameBridge.send("recordFlyingMiddleText", {
          content: bz,
          ki: Ez,
          angle: nz,
          zl: iz
        }), zz.current.push({
          id: lz,
          content: bz,
          ki: Ez,
          zl: iz,
          removeTimeout: Mz,
          angle: nz
        }), uz()
      }
      return (0, Nz.d)("shotDamageToShow", (zz => {
        let {
          damage: uz,
          wasCrit: bz,
          distance: Ez
        } = zz;
        const nz = -Math.PI / 4 + Math.random() * Math.PI / 2;
        Oz(bz ? [{
          str: uz.toString(),
          style: {
            color: "#ff8a80",
            fontSize: "1.6em"
          }
        }] : [uz.toString()], Ez, nz, 1e3)
      })), (0, Mz.g)("flyingMiddleMessage", (zz => {
        let {
          content: uz,
          ki: Ez,
          zl: Mz
        } = zz;
        iz.current.push({
          content: uz,
          ki: Ez,
          zl: Mz
        });
        const tz = () => {
          const {
            content: zz,
            ki: uz,
            zl: Ez
          } = iz.current.shift(), lz = function(zz) {
            const uz = -Math.PI / 4,
              bz = Math.PI / 4,
              Ez = bz - uz,
              nz = (1 + Math.sqrt(5)) / 2,
              iz = 2 * Math.PI / (nz * nz);
            let lz = zz + iz;
            for (; lz > bz;) lz -= Ez;
            for (; lz < uz;) lz += Ez;
            const Mz = Math.PI / 6;
            if (Math.abs(lz - zz) < Mz) {
              lz = zz + (Math.sign(lz - zz) || 1) * Mz, lz > bz && (lz = zz - Mz), lz < uz && (lz = zz + Mz)
            }
            return lz
          }(nz.current);
          nz.current = lz, bz.current = Date.now(), Oz(zz, uz, lz, Ez)
        };
        if (!lz.current) {
          const zz = () => {
            iz.current.length > 0 && tz(), 0 === iz.current.length && (clearInterval(lz.current), lz.current = null)
          };
          lz.current = setInterval(zz, 200), bz.current + 200 < Date.now() && zz()
        }
        for (; iz.current.length > 4;) tz()
      })), (0, Mz.g)("forceFlyingMiddleMessage", (zz => {
        let {
          content: uz,
          ki: bz,
          angle: Ez,
          zl: nz
        } = zz;
        Oz(uz, bz, Ez, nz)
      })), (0, Ez.useEffect)((() => () => {
        clearInterval(lz.current), lz.current = null;
        for (const uz of zz.current) clearTimeout(uz.removeTimeout)
      }), []), (0, Hz.jsx)("div", {
        className: "FlyingMiddleTextWrapper",
        children: zz.current.map((zz => {
          const {
            id: uz,
            content: bz,
            ki: Ez,
            zl: nz,
            angle: iz
          } = zz;
          return zz.pos || (zz.pos = function(zz, uz) {
            const bz = 50 / (zz ** .7 * .35);
            return {
              x: bz * Math.sin(uz),
              y: -bz * Math.cos(uz)
            }
          }(Ez, iz)), (0, Hz.jsx)(Xb, {
            className: "FlyingMiddleText",
            classNames: "FlyingMiddleText",
            timeout: nz,
            enterActiveStyle: {
              transform: `translate(${zz.pos.x}vw, ${zz.pos.y}vh)`,
              transition: `transform ${nz}ms ease-out`
            },
            children: (0, Hz.jsx)("div", {
              children: (0, Hz.jsx)(tz.b, {
                text: bz
              })
            })
          }, uz)
        }))
      })
    }));

    function Xb(zz) {
      let {
        children: uz,
        className: bz,
        classNames: nz,
        timeout: iz,
        enterActiveStyle: lz
      } = zz;
      const [Mz, tz] = (0, Ez.useState)(!1), [Oz, pz] = (0, Ez.useState)(!1), dz = (0, Ez.useRef)(null);
      return (0, Ez.useEffect)((() => {
        tz(!0)
      }), []), (0, Hz.jsx)(Zb.b, {
        className: bz,
        classNames: nz || bz,
        in: Mz,
        timeout: iz,
        nodeRef: dz,
        onEntering: () => {
          pz(!0)
        },
        children: (0, Ez.cloneElement)(uz, {
          ref: dz,
          style: Oz && lz || void 0
        })
      })
    }
    var fb = bz(36066);

    function sb() {
      const zz = (0, Nz.h)("health");
      return (0, Hz.jsxs)("div", {
        className: "BottomScreenStatBarList",
        children: [(0, Hz.jsx)(fb.c, {
          placement: "statBars"
        }), (0, Hz.jsx)(rb, {
          actualValue: zz.shield,
          maxValue: zz.maxShield,
          hideAtValue: 0,
          icon: "shield",
          className: "ShieldBar"
        }), (0, Hz.jsx)(rb, {
          actualValue: zz.health,
          maxValue: zz.maxHealth,
          icon: "heart",
          className: "HealthBar"
        })]
      })
    }

    function rb(zz) {
      let {
        actualValue: uz,
        maxValue: bz,
        hideAtValue: Ez,
        icon: nz,
        className: iz
      } = zz;
      return (0, wz.c)(), null === uz || null === bz || uz === Ez || bz === Ez ? null : (0, Hz.jsx)("div", {
        className: "BottomScreenStatBarWrapper",
        children: (0, Hz.jsxs)("div", {
          className: "BottomScreenStatBarBackground",
          children: [(0, Hz.jsx)("div", {
            className: `BottomScreenStatBar ${iz}`,
            style: {
              transform: `scaleX(${Math.max(uz/bz,0)})`,
              transformOrigin: "left center"
            }
          }), (0, Hz.jsxs)("div", {
            className: "BottomScreenStatBarText SmallTextBold",
            children: [(0, Hz.jsx)(hz.c, {
              name: nz
            }), ` ${Math.ceil(uz)}/${bz}`]
          })]
        })
      })
    }
    var ob = bz(8982),
      Nb = bz(4292),
      vb = bz(1298),
      xb = bz(2594),
      Jb = bz(1419),
      Ab = bz(1283),
      Tb = bz(3169),
      Lb = bz(3216),
      Pb = bz(3189),
      Gb = bz(738),
      ab = bz(3230),
      Vb = bz(128),
      mb = bz(8896),
      qb = bz(328);

    function hb(zz, uz) {
      let {
        shownName: bz,
        lifeformType: Ez
      } = zz;
      return null !== bz ? bz : null !== Ez ? uz(`lifeform:${(0,qb.ze)(Ez)}`) : null
    }
    var Ub = bz(3181),
      cb = bz(3185);
    const gb = {
        FallDamage: "respawnPage:diedFallDamage",
        VoidJump: "respawnPage:diedVoid",
        Lava: "respawnPage:diedLava",
        "Toxic Waste": "respawnPage:diedToxicWaste",
        "Poison Potion": "respawnPage:diedPoisoned",
        "Rotten Brain": "respawnPage:diedPoisoned"
      },
      Sb = (0, Ez.memo)((function() {
        var zz, uz;
        const bz = (0, wz.b)(),
          nz = (0, Fz.useNavigatePreserveSearch)(),
          {
            t: lz
          } = (0, Lz.F)(),
          {
            loadingOverlayVisible: tz
          } = (0, vz.m)(["loadingOverlayVisible"]),
          Oz = (0, Jz.p)(),
          [pz, Zz] = (0, Ez.useState)(!1),
          [Rz, Kz] = (0, Ez.useState)(!0),
          [Xz, sz] = (0, Ez.useState)(null),
          oz = (0, Rb.c)(),
          xz = (0, fz.g)("respawnButtonText"),
          Az = (0, fz.g)("usePlayAgainButton"),
          Tz = (0, fz.g)("useRespawnButton"),
          {
            gameNameWithVariation: Pz
          } = (0, Nz.h)("connectedGame"),
          Gz = (0, Ez.useRef)(rz.b.get("secsToRespawn")),
          az = (0, Ez.useRef)(dz.gameBridge.latest("localPlayerAlive")),
          Vz = (0, Ez.useRef)(rz.b.get("secsToRespawn")),
          mz = (0, Ez.useRef)(rz.b.get("autoRespawn")),
          qz = (0, Ez.useRef)(null),
          Uz = (0, Ez.useRef)(0),
          cz = (0, Ez.useRef)(0),
          [gz, yz] = (0, Ez.useState)(!1),
          Dz = (0, Ez.useRef)(null),
          Qz = (0, Ez.useRef)(null),
          Wz = (0, Ez.useRef)(null);
        (0, fz.f)("secsToRespawn", (zz => {
          console.log("Received new secsToRespawn with", zz, "and current canRespawn value of ", mz.current), Vz.current = zz, Bz()
        })), (0, fz.f)("autoRespawn", (zz => {
          console.log("Received autorespawn", zz, "current canRespawn value of ", Gz.current), mz.current = zz, Bz()
        }));
        const ez = zz => {
          console.log("Updating respawn component from localPlayerAliveSet. isAlive:", zz), zz || Uz.current++, az.current = zz, Bz()
        };
        (0, Nz.d)("localPlayerAliveSet", ez), (0, Mz.g)(Lb.o, (zz => {
          "connected" === zz && !az.current && mz.current && Gz.current <= 0 && (cz.current = 0, Cz())
        })), (0, Ez.useEffect)((() => {
          const zz = dz.gameBridge.latest("localPlayerAlive");
          zz === az.current ? (console.log("Updating respawn component from initial mount"), Bz()) : ez(zz)
        }), []), (0, Ez.useEffect)((() => {
          if (pz) {
            yz(!1);
            const zz = setTimeout((() => {
              yz(!0)
            }), 600);
            return (0, mb.e)(), () => {
              clearTimeout(zz)
            }
          }
          return () => {}
        }), [pz]);
        (0, Nz.d)("kill", (zz => {
          let {
            killer: uz,
            victim: bz,
            withItem: Ez
          } = zz;
          if (!bz.local) return;
          const nz = ((zz, uz) => {
            if (zz.local) {
              const zz = gb[uz];
              return zz ? lz(zz) : null
            }
            const bz = hb(zz, lz);
            return bz ? lz("respawnPage:killedBy", {
              name: bz
            }) : null
          })(uz, Ez);
          nz && sz({
            text: nz,
            deathCount: az.current ? Uz.current + 1 : Uz.current
          })
        }));
        const jz = () => {
            pz && mz.current && az.current && gz && Zz(!1)
          },
          Iz = pz && mz.current && az.current && gz && !tz;
        (0, Mz.g)("usedKeyboard", (() => {
          jz()
        })), (0, cb.e)("respawn", Iz, jz);
        const Bz = () => {
            Kz(Vz.current >= 3 || !mz.current), az.current ? (clearInterval(qz.current), qz.current = null, mz.current ? oz() : Zz(!1)) : (Zz(!0), Gz.current = Vz.current, oz(), console.log("Running respawn stats updated", mz.current, Gz.current), mz.current && Gz.current <= 0 && Cz(), clearInterval(qz.current), Gz.current > 0 && (qz.current = setInterval((() => {
              Gz.current = Math.max(Gz.current - 1, 0), oz(), Gz.current <= 0 && (clearInterval(qz.current), qz.current = null, rz.b.get("autoRespawn") && Cz())
            }), 1e3)))
          },
          Cz = () => {
            if (Date.now() - cz.current > 1e3) {
              const zz = () => {
                dz.gameBridge.send("respawn", null), cz.current = Date.now()
              };
              rz.b.get("autoRespawn") ? zz() : (0, Ab.$)((() => {
                zz()
              }), "video_respawn")
            }
          },
          Yz = (0, Ez.useMemo)((() => {
            var zz;
            return null === (zz = (0, Gb.i)(Pz)) || void 0 === zz ? void 0 : zz.otherGameLinksOnRespawnPage
          }), [Pz]),
          kz = 0 === Gz.current,
          zu = (null === Xz || void 0 === Xz ? void 0 : Xz.deathCount) === Uz.current ? Xz.text : null,
          uu = pz && Rz && !tz,
          bu = Oz && Iz && null !== (zz = null === (uz = (0, Sz.f)()) || void 0 === uz ? void 0 : uz.getBoundButton("menuConfirm")) && void 0 !== zz ? zz : null,
          Eu = zz => kz ? zz : lz("respawnPage:actionInSeconds", {
            action: zz,
            seconds: Gz.current
          });
        return (0, Hz.jsx)(ob.d, {
          showing: pz,
          globallyUniqueKey: "RespawnComponent",
          alwaysMountChildren: !0,
          children: (0, Hz.jsx)(Tb.e, {
            show: pz,
            "data-holds-camera-keeper": "",
            children: (0, Hz.jsxs)(Nb.d, {
              close: () => {
                Zz(!1)
              },
              togglePointerLock: !1,
              closeOnPressBackground: !1,
              className: "RespawnBackgroundScreen",
              padLayerKind: mz.current || tz ? null : "death",
              padBackCloses: !1,
              cameraKeeper: !0,
              children: [(0, Vb.o)() && (0, Hz.jsx)(Jb.d, {
                onClick: Pb.b,
                children: lz("homePage:backToGames")
              }), (0, Hz.jsxs)("div", {
                className: "RespawnContainer",
                onClick: jz,
                children: [(0, Hz.jsxs)("div", {
                  className: "RespawnTop",
                  children: [(0, Hz.jsx)("div", {
                    ref: Qz,
                    className: "RespawnSideSquareBannerDiv",
                    children: bz[0] > 925 && (0, Hz.jsx)(xb.e, {
                      info: {
                        adType: "square",
                        adId: 1,
                        adAlias: "banner_respawn_1"
                      },
                      sizeInfo: {
                        parentRef: Qz
                      },
                      showing: uu,
                      horizontalAlign: "start",
                      extraContrastBackgroundBox: "left",
                      noFillShowBloxdAdProbability: 0
                    })
                  }), (0, Hz.jsx)("div", {
                    className: "RespawnMainContent",
                    children: (0, Hz.jsxs)("div", {
                      className: iz()("RespawnMainContentInner", {
                        RespawnMainContentInnerPad: Oz
                      }),
                      children: [mz.current && (0, Hz.jsxs)("div", {
                        className: "AutoRespawnDeathInfo",
                        children: [(0, Hz.jsxs)("div", {
                          className: "AutoRespawnDeathTitle FullyFancyText",
                          children: [(0, Hz.jsx)(hz.c, {
                            name: "skull",
                            className: "AutoRespawnDeathIcon"
                          }), lz("respawnPage:youDied")]
                        }), (0, Hz.jsxs)("div", {
                          className: "AutoRespawnDeathCause FullyFancyText",
                          children: [null === bu && (az.current ? lz("respawnPage:pressAnywhereToContinue") : kz ? lz("respawnPage:respawning") : Eu(lz("general:respawn"))), null !== bu && (0, Hz.jsx)(Ub.b, {
                            text: lz("controller:screensPressToContinue", {
                              button: Ub.e
                            }),
                            glyph: bu,
                            className: "AutoRespawnContinueGlyph"
                          })]
                        }), zu && (0, Hz.jsx)("div", {
                          className: "AutoRespawnStatus",
                          children: zu
                        })]
                      }), !mz.current && (0, Hz.jsxs)(Hz.Fragment, {
                        children: [(0, Hz.jsxs)("div", {
                          className: iz()("RespawnPageButtons", {
                            RespawnPageButtonsVertical: !Yz
                          }),
                          children: [Az && (0, Hz.jsx)(Jb.q, {
                            className: "RespawnPageButton",
                            padDefaultFocus: !0,
                            onClick: () => {
                              (0, Ab.$)((() => {
                                (0, vz.k)("inGameReplay");
                                const zz = (0, vb.c)(Pz);
                                nz(zz)
                              }), "video_start")
                            },
                            disabled: !kz || !gz,
                            touchPressOn: "pointerup",
                            children: Eu(lz("respawnPage:playAgain"))
                          }), Tz && (0, Hz.jsx)(Jb.f, {
                            className: "RespawnPageButton",
                            onClick: Cz,
                            padDefaultFocus: !Az,
                            padBack: "sessionBasedGame:stayInLobby" === xz,
                            disabled: !kz || !gz,
                            touchPressOn: "pointerup",
                            children: Eu(lz(xz))
                          }), !(0, Vb.o)() && (0, Hz.jsx)(Jb.K, {
                            className: "RespawnPageButton",
                            onClick: Pb.b,
                            disabled: !kz || !gz,
                            touchPressOn: "pointerup",
                            children: Eu(lz("respawnPage:exitGame"))
                          })]
                        }), Yz && (0, Hz.jsxs)("div", {
                          className: "RespawnPageOtherGames",
                          children: [(0, Hz.jsx)("div", {
                            className: "RespawnPageOtherGamesTitle",
                            children: lz("respawnPage:orTry")
                          }), (0, Hz.jsx)("div", {
                            className: "RespawnPageOtherGameThumbnails",
                            children: Yz.map((zz => (0, Hz.jsx)(ab.i, {
                              source: {
                                type: "game",
                                gameNameWithVariation: zz
                              },
                              disabled: !kz || !gz,
                              gameWidth: "13rem",
                              hideDescription: !0,
                              hideFavourites: !0,
                              hideCcu: !0,
                              onClick: () => {
                                (0, vz.k)("inGameReplay");
                                const uz = (0, vb.c)(zz);
                                nz(uz)
                              }
                            }, zz)))
                          })]
                        })]
                      })]
                    })
                  }), (0, Hz.jsx)("div", {
                    ref: Wz,
                    className: "RespawnSideSquareBannerDiv"
                  })]
                }), (0, Hz.jsx)("div", {
                  ref: Dz,
                  className: "RespawnBottom",
                  children: (0, Hz.jsx)(xb.e, {
                    info: {
                      adType: "leaderboard",
                      adId: 1,
                      adAlias: "banner_respawn_2"
                    },
                    sizeInfo: {
                      parentRef: Dz
                    },
                    showing: uu,
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
    var yb = bz(36088);
    const Db = [{
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
      Qb = [{
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
      Wb = {
        duration: 300,
        easing: "ease-out",
        fill: "forwards"
      },
      eb = {
        duration: 400,
        easing: "ease-out",
        fill: "forwards"
      },
      jb = (0, Ez.memo)((function() {
        const zz = (0, Ez.useRef)(null),
          uz = (0, Ez.useRef)(null);

        function bz(bz) {
          var Ez;
          let {
            ib: nz,
            screenPos: iz
          } = bz;
          const lz = zz.current;
          null === (Ez = uz.current) || void 0 === Ez || Ez.cancel(), lz.classList.remove("HitmarkerCrit"), iz ? (lz.style.left = `${iz.x}%`, lz.style.top = `${iz.y}%`) : (lz.style.left = "50%", lz.style.top = "50%"), lz.style.rotate = 16 * (Math.random() - .5) + "deg", nz && lz.classList.add("HitmarkerCrit");
          const Mz = lz.animate(nz ? Qb : Db, nz ? eb : Wb);
          uz.current = Mz, Mz.onfinish = () => {
            lz.classList.remove("HitmarkerCrit")
          }
        }
        return (0, Mz.g)("localGunHitmarker", (zz => {
          let {
            ib: uz
          } = zz;
          bz({
            ib: uz
          })
        })), (0, Mz.g)("yourAttackHit", (zz => {
          let {
            ib: uz,
            screenPos: Ez
          } = zz;
          bz({
            ib: uz,
            screenPos: vz.e.get("isTouchScreen") ? Ez : void 0
          })
        })), (0, Mz.g)("sendHitmarker", (zz => {
          let {
            ib: uz,
            screenPos: Ez
          } = zz;
          bz({
            ib: uz,
            screenPos: Ez
          })
        })), (0, Hz.jsxs)("div", {
          ref: zz,
          className: "Hitmarker",
          children: [(0, Hz.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, Hz.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, Hz.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, Hz.jsx)("div", {
            className: "HitmarkerBar"
          })]
        })
      }));

    function Ib() {
      const zz = (0, Ez.useRef)(!0);
      return (0, Mz.g)("localBlockMined", (() => {
        nu.e.play("blockMined")
      })), (0, Mz.g)("yourAttackHit", (() => {
        nu.e.play("hitLanded")
      })), (0, Mz.g)("localGunHitmarker", (() => {
        nu.e.play("hitLanded")
      })), (0, Mz.g)("damagedByOtherPlayer", (() => {
        nu.e.play("damageTaken")
      })), (0, Nz.d)("localPlayerAliveSet", (uz => {
        !uz && zz.current && nu.e.play("death"), zz.current = uz
      })), null
    }
    var Bb = bz(1856),
      Cb = bz(36106),
      Yb = bz.n(Cb),
      kb = bz(1959),
      zE = bz(1951),
      uE = bz(3043),
      bE = bz(9007);
    const EE = qb.ke ? 7e7 : 7e3,
      nE = Yb()("#ffffff").alpha(.5).string();

    function iE(zz) {
      const uz = (0, uE.e)(zz);
      return void 0 !== uz && "Gun" === (0, bE.itemTypeOf)(uz)
    }

    function lE(zz) {
      if (!zz) return console.error(`Killfeed colour was ${zz}`), nE;
      try {
        return Yb()(zz).alpha(.5).string()
      } catch {
        return console.warn(`Killfeed colour ${zz} is not a colour`), nE
      }
    }
    const ME = (0, Ez.memo)((function() {
      const {
        t: zz
      } = (0, Lz.F)(), uz = (0, Ez.useRef)([]), bz = (0, Rb.c)();
      return (0, Nz.d)("kill", (function(Ez) {
        var nz, iz;
        let {
          killer: lz,
          victim: Mz,
          withItem: tz,
          killstreak: Hz
        } = Ez;
        const Oz = uz.current;
        if (Oz.length >= 3) {
          const zz = Oz.shift();
          clearTimeout(zz.timeout)
        }
        const pz = dz.gameBridge.latest("hiddenPlayerNames"),
          Fz = {
            deadName: hb(Mz, zz),
            killerName: hb(lz, zz),
            isFriend: {
              killer: (0, kb.c)(lz.realName, pz),
              dead: (0, kb.c)(Mz.realName, pz)
            },
            withItem: tz,
            wasHeadshot: !1,
            killstreak: Hz,
            timeout: setTimeout((() => {
              Oz.shift(), bz()
            }), EE),
            reactId: `${null!==(nz=lz.id)&&void 0!==nz?nz:lz.shownName}|${null!==(iz=Mz.id)&&void 0!==iz?iz:Mz.shownName}|${Date.now()}`,
            killerBackground: lE(lz.colour),
            deadBackground: lE(Mz.colour)
          };
        Oz.push(Fz), bz()
      })), (0, Ez.useEffect)((() => {
        const zz = uz.current;
        return () => {
          for (; zz.length > 0;) {
            const {
              timeout: uz
            } = zz.pop();
            clearTimeout(uz)
          }
        }
      }), []), (0, Hz.jsx)("div", {
        className: "Killfeed",
        children: uz.current.map((zz => {
          let {
            deadName: uz,
            killerName: bz,
            withItem: Ez,
            wasHeadshot: nz,
            killstreak: iz,
            killerBackground: lz,
            deadBackground: Mz,
            reactId: tz,
            isFriend: Oz
          } = zz;
          return (0, Hz.jsxs)("div", {
            className: "IndividualKillWrapper SmallTextLight",
            style: {
              background: `linear-gradient(90deg, ${lz} calc(100% - 10rem), ${Mz} 100%)`
            },
            children: [iz >= 2 ? (0, Hz.jsx)("div", {
              className: "KillfeedKillstreak",
              children: (0, qb.X)(iz)
            }) : null, (0, Hz.jsx)("div", {
              className: "KillfeedKillerName",
              children: bz
            }), Oz.killer && (0, Hz.jsx)(zE.c, {}), (0, Hz.jsx)("div", {
              className: "KillfeedItem",
              style: {
                height: "5vmin",
                width: iE(Ez) ? "7.5vmin" : "5vmin"
              },
              children: (0, Hz.jsx)(Bb.c, {
                itemName: Ez,
                amount: 0,
                gunTransform: "scaleX(-1)",
                itemMarginTop: 0
              })
            }), nz ? (0, Hz.jsx)(hz.c, {
              name: "crosshairs",
              className: "3x KillfeedHeadshotIcon"
            }) : null, (0, Hz.jsx)("div", {
              className: "KillfeedDeadName",
              children: uz
            }), Oz.dead && (0, Hz.jsx)(zE.c, {})]
          }, tz)
        }))
      })
    }));
    var tE = bz(36156),
      HE = bz(1127),
      OE = bz.n(HE),
      pE = bz(3159),
      dE = bz(36158),
      FE = bz(1273);
    const ZE = {},
      RE = (0, Ez.memo)((function() {
        const zz = (0, Ez.useRef)({}),
          [, uz] = (0, Ez.useReducer)((zz => zz + 1), 0);
        (0, Mz.g)("setDirectionArrow", (bz => {
          let {
            id: Ez,
            position: nz,
            style: iz,
            text: lz,
            Ki: Mz
          } = bz;
          const tz = zz.current,
            Hz = iz || ZE,
            Oz = lz,
            pz = tz[Ez];
          if (!pz) return tz[Ez] = {
            position: nz,
            style: Hz,
            text: Oz,
            shouldShowDistance: Mz,
            KV: null,
            chevronElement: null,
            distanceElement: null,
            lastRenderedDist: -1,
            lastDistUpdateTime: 0,
            lastScreenX: NaN,
            lastScreenY: NaN,
            onScreen: void 0
          }, void uz();
          const dz = !OE()(pz.style, Hz) || !OE()(pz.text, Oz) || pz.shouldShowDistance !== Mz;
          pz.position = nz, pz.style = Hz, pz.text = Oz, pz.shouldShowDistance = Mz, dz && uz()
        })), (0, Mz.g)("clearDirectionArrow", (bz => {
          let {
            id: Ez
          } = bz;
          const nz = zz.current;
          if (null === Ez)
            for (const zz in nz) delete nz[zz];
          else delete nz[Ez];
          uz()
        })), (0, Ez.useEffect)((() => {
          const uz = zz.current,
            bz = (0, FE.o)((() => {
              ! function(zz) {
                const uz = dz.gameBridge.lookup("localPos", null),
                  bz = pE.c - KE,
                  Ez = (0, pE.k)() - KE;
                for (const nz in zz) {
                  const iz = zz[nz];
                  if (!iz.KV) continue;
                  const lz = dz.gameBridge.lookup("screenPos", iz.position),
                    Mz = lz.x - 50,
                    tz = lz.y - 50;
                  lz.x === iz.lastScreenX && lz.y === iz.lastScreenY || (iz.lastScreenX = lz.x, iz.lastScreenY = lz.y, iz.KV.style.translate = `${lz.x}vw ${lz.y}vh`, iz.chevronElement && (iz.chevronElement.style.rotate = `${qb.d.fastATan2(tz,Mz)}rad`));
                  const Hz = Math.abs(Mz) < bz && Math.abs(tz) < Ez;
                  if (Hz !== iz.onScreen && (iz.onScreen = Hz, iz.KV.classList.toggle("DirectionArrowOnScreen", Hz)), iz.shouldShowDistance && iz.distanceElement) {
                    const zz = iz.position[0] - uz[0],
                      bz = iz.position[1] - uz[1],
                      Ez = iz.position[2] - uz[2],
                      nz = Math.round(Math.sqrt(zz * zz + bz * bz + Ez * Ez));
                    (-1 === iz.lastRenderedDist || (0, dE.d)(nz, iz.lastRenderedDist, iz.lastDistUpdateTime)) && (iz.distanceElement.textContent = `${nz}m`, iz.lastRenderedDist = nz, iz.lastDistUpdateTime = Date.now() + Math.floor(100 * Math.random()))
                  }
                }
              }(uz)
            }));
          return () => {
            bz();
            for (const zz in uz) delete uz[zz]
          }
        }), []);
        const bz = zz.current;
        return (0, Hz.jsx)("div", {
          className: "DirectionArrows",
          children: Object.entries(bz).map((zz => {
            var uz;
            let [Ez, nz] = zz;
            const iz = null !== (uz = (0, Xz.jc)(nz.style)) && void 0 !== uz ? uz : "#ffffff";
            return (0, Hz.jsxs)("div", {
              ref: zz => {
                bz[Ez] && (bz[Ez].KV = zz)
              },
              className: "DirectionArrow",
              style: {
                fontSize: nz.style.fontSize,
                opacity: nz.style.opacity
              },
              children: [(0, Hz.jsxs)("div", {
                className: "DirectionArrowChevron",
                ref: zz => {
                  bz[Ez] && (bz[Ez].chevronElement = zz)
                },
                children: [(0, Hz.jsxs)("div", {
                  className: "DirectionArrowShadowLayer",
                  children: [(0, Hz.jsx)("div", {
                    className: "DirectionArrowBar"
                  }), (0, Hz.jsx)("div", {
                    className: "DirectionArrowBar"
                  })]
                }), (0, Hz.jsxs)("div", {
                  className: "DirectionArrowBarLayer",
                  children: [(0, Hz.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: iz
                    }
                  }), (0, Hz.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: iz
                    }
                  })]
                })]
              }), (0, Hz.jsx)("div", {
                className: "DirectionArrowMarker",
                style: {
                  background: iz,
                  boxShadow: `0 0 3px rgba(0, 0, 0, 0.8), 0 0 8px ${iz}`
                }
              }), nz.text && (0, Hz.jsx)("div", {
                className: "DirectionArrowLabel SmallTextLight",
                style: {
                  color: iz,
                  fontWeight: nz.style.fontWeight,
                  fontStyle: nz.style.fontStyle
                },
                children: (0, Hz.jsx)(tz.b, {
                  text: nz.text
                })
              }), nz.shouldShowDistance && (0, Hz.jsx)("div", {
                className: "DirectionArrowDistance SmallTextLight",
                ref: zz => {
                  bz[Ez] && (bz[Ez].distanceElement = zz)
                },
                style: {
                  color: iz,
                  fontWeight: nz.style.fontWeight,
                  fontStyle: nz.style.fontStyle
                }
              })]
            }, Ez)
          }))
        })
      })),
      KE = .5;
    const wE = (0, Ez.memo)((function(zz) {
        let {
          isTouchScreen: uz
        } = zz;
        return (0, Hz.jsxs)("div", {
          className: "BottomRightElements",
          "data-camera-keeper-host": "",
          children: [(0, Hz.jsx)(rE, {}), uz && (0, Hz.jsx)(zb, {})]
        })
      })),
      XE = {
        readyForNext: 0,
        running: 1
      },
      fE = 50;

    function sE(zz) {
      console.assert(zz.state.current === XE.readyForNext);
      const uz = zz.queue.current,
        bz = zz.foreground.current;
      if (uz.length > 0 && bz) {
        const {
          toFraction: Ez,
          toDuration: nz
        } = uz.shift();
        zz.state.current = XE.running, bz.style.transition = `transform ${Math.max(nz-fE,0)}ms linear`, bz.classList.remove("Complete"), zz.timeout.current = setTimeout((() => {
          bz.style.transform = `scaleX(${Ez})`, zz.timeout.current = setTimeout((() => {
            1 === Ez && bz.classList.add("Complete"), zz.state.current = XE.readyForNext, sE(zz)
          }), Math.max(nz - fE, 0))
        }), fE)
      }
    }

    function rE() {
      const zz = (0, Ez.useRef)([]),
        uz = (0, Ez.useRef)(XE.readyForNext),
        bz = (0, Ez.useRef)(void 0),
        nz = (0, Ez.useRef)(null),
        iz = (0, Ez.useRef)({
          queue: zz,
          state: uz,
          timeout: bz,
          foreground: nz
        }),
        lz = (0, fz.g)("showProgressBar");
      if ((0, Ez.useLayoutEffect)((() => (lz && uz.current === XE.readyForNext && sE(iz.current), () => {
          uz.current = XE.readyForNext, clearTimeout(bz.current), lz && (zz.current.length = 0)
        })), [lz]), (0, Mz.g)("progressBarUpdate", (bz => {
          let {
            toFraction: Ez,
            toDuration: nz
          } = bz;
          zz.current.push({
            toFraction: Ez,
            toDuration: nz
          }), uz.current === XE.readyForNext && sE(iz.current)
        })), !lz) return null;
      return (0, Hz.jsx)("div", {
        className: "ProgressBarBackground",
        children: (0, Hz.jsx)("div", {
          className: "ProgressBarForeground",
          ref: nz,
          style: {
            width: "15vw",
            transformOrigin: "left center",
            transform: "scaleX(0)"
          }
        })
      })
    }
    var oE = bz(36162),
      NE = bz(2336);
    const vE = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function xE(zz) {
      let {
        classes: uz,
        gone: bz
      } = zz;
      const Ez = document.documentElement;
      Ez.classList.remove(...uz);
      for (const nz of bz) nz.style.display = "block";
      return () => {
        Ez.classList.add(...uz);
        for (const zz of bz) zz.style.display = ""
      }
    }

    function JE(zz) {
      const {
        isTouchScreen: uz
      } = (0, vz.m)(["isTouchScreen"]);
      (0, Ez.useLayoutEffect)((() => {
        if (!uz) return;
        const bz = zz.current,
          Ez = document.querySelector(`.${oE.g}`),
          nz = zz => {
            const uz = () => {
              const uz = zz.querySelector(NE.h),
                Ez = function(zz) {
                  const uz = document.documentElement;
                  return {
                    classes: pu.K.map(Ru.w).filter((zz => uz.classList.contains(zz))),
                    gone: [...zz.querySelectorAll(`.TopRightTrayToggle.${NE.j}`)]
                  }
                }(zz);
              uz && function(zz, uz) {
                (0, NE.B)(zz, uz.classes.length > 0 || uz.gone.length > 0, (() => xE(uz)))
              }(uz, Ez);
              const nz = `${Math.floor(function(zz,uz,bz){const Ez=document.documentElement,nz=Ez.classList.contains((0,Ru.B)("menu")),iz=Ez.style.getPropertyValue((0,Ru.I)("menu"));if(!nz&&""===iz)return zz.getBoundingClientRect().left;const lz=uz?(0,NE.o)(uz):()=>{},Mz=xE(bz);Ez.classList.remove((0,Ru.B)("menu")),Ez.style.removeProperty((0,Ru.I)("menu"));const tz=zz.getBoundingClientRect().left;return Mz(),lz(),nz&&Ez.classList.add((0,Ru.B)("menu")),""!==iz&&Ez.style.setProperty((0,Ru.I)("menu"),iz),tz}(zz,uz,Ez)-bz.getBoundingClientRect().left-4)}px`;
              bz.style.getPropertyValue("--InGameHeaderMaxWidth") !== nz && bz.style.setProperty("--InGameHeaderMaxWidth", nz)
            };
            uz();
            const nz = new ResizeObserver(uz);
            nz.observe(zz), nz.observe(Ez), window.addEventListener("resize", uz);
            const iz = () => vE.map((zz => document.documentElement.style.getPropertyValue(zz))).join();
            let lz = iz();
            const Mz = new MutationObserver((() => {
              const zz = iz();
              zz !== lz && (lz = zz, uz())
            }));
            Mz.observe(document.documentElement, {
              attributes: !0,
              attributeFilter: ["style"]
            });
            const tz = (0, sz.o)(Ru.f, uz),
              Hz = new MutationObserver(uz);
            return Hz.observe(zz, {
              childList: !0,
              subtree: !0
            }), () => {
              nz.disconnect(), Mz.disconnect(), Hz.disconnect(), tz(), window.removeEventListener("resize", uz);
              const bz = zz.querySelector(NE.h);
              bz && (0, NE.o)(bz)
            }
          },
          iz = () => Ez.querySelector(".TopRightIconsContainer"),
          lz = iz();
        let Mz;
        if (lz) Mz = nz(lz);
        else {
          const zz = new MutationObserver((() => {
            const uz = iz();
            uz && (zz.disconnect(), Mz = nz(uz))
          }));
          zz.observe(Ez, {
            childList: !0,
            subtree: !0
          }), Mz = () => {
            zz.disconnect()
          }
        }
        return () => {
          Mz(), bz.style.removeProperty("--InGameHeaderMaxWidth")
        }
      }), [uz, zz])
    }
    var AE = bz(3428),
      TE = bz(3420),
      LE = bz(1595),
      PE = bz(1473),
      GE = bz(1597),
      aE = bz(1673),
      VE = bz(1802),
      mE = bz(1118),
      qE = bz(4086),
      hE = bz(1448),
      UE = bz(1326);
    const cE = 2e4,
      gE = 6e5,
      SE = new Set;

    function yE() {
      const {
        gameEntrySource: zz,
        loadingOverlayVisible: uz
      } = (0, vz.m)(["gameEntrySource", "loadingOverlayVisible"]), bz = (0, Nz.e)("connectedGame", (zz => (0, qE.k)(zz) ? zz.lobbyName : null)), nz = (0, Nz.h)("localPlayerAlive"), iz = (0, Nz.e)("players", (zz => null !== zz.localId && void 0 !== zz.byId[zz.localId])), [lz, Mz] = (0, Ez.useState)(null);
      return !uz && nz && iz && null !== bz && lz !== bz && Mz(bz), (0, Ez.useEffect)((() => {
        if (!(0, qE.m)(zz) || null === lz || lz !== bz || SE.has(lz)) return;
        const uz = setTimeout((() => {
          SE.add(lz), async function(zz) {
            const uz = await mE.userContextManager.getCurrentUserContext();
            let bz;
            try {
              bz = (await PE.c.getWorldOwnerFriendOffer(uz)).owner
            } catch (nz) {
              return void console.warn("Couldn't ask who owns this world", nz)
            }
            if (!bz || (0, qE.s)(bz.name, Date.now())) return;
            const Ez = bz;
            ! function(zz, uz) {
              const bz = Date.now() + gE;
              let Ez = Date.now(),
                nz = 0;
              const iz = () => {
                const lz = Date.now(),
                  Mz = dz.gameBridge.latest("connectedGame");
                Mz.lobbyName !== zz || lz > bz || (null === Mz.websocketUrl ? Ez = 1 / 0 : Ez === 1 / 0 && !vz.e.get("loadingOverlayVisible") && dz.gameBridge.latest("localPlayerAlive") && (Ez = lz + cE), nz = lz < Ez || !dz.gameBridge.latest("localPlayerAlive") || vz.e.get("isUiHidden") || vz.e.get("isUiHiddenByCamera") || (0, aE.isTypingInInput)() || vz.e.get("loadingOverlayVisible") || (0, LE.l)() || (0, AE.g)() || (0, UE.k)() ? 0 : nz + 1, nz >= 2 ? uz() : setTimeout(iz, 500))
              };
              iz()
            }(zz, (() => {
              (0, qE.g)(GE.b.getSocialState().friends, Ez.name) || ((0, qE.p)(Ez.name, Date.now()), VE.f.showWorldOwnerOffer(Ez), (0, hE.reportAnalyticsClick)({
                id: "social.world_owner_offer",
                value: "shown"
              }))
            }))
          }(lz).catch((zz => {
            console.error("Failed to offer the world's owner as a friend", zz)
          }))
        }), cE);
        return () => {
          clearTimeout(uz)
        }
      }), [zz, lz, bz]), null
    }
    var DE = bz(1848);
    const QE = (0, Ez.memo)((function(zz) {
        let {
          durationMs: uz,
          endsAtMs: bz
        } = zz;
        const [, nz] = (0, Ez.useReducer)((zz => zz + 1), 0), iz = null === bz ? uz : Math.max(bz - Date.now(), 0);
        return (0, Ez.useEffect)((() => {
          if (null === bz || iz <= 0) return;
          const zz = setTimeout(nz, iz - 1e3 * (Math.ceil(iz / 1e3) - 1));
          return () => {
            clearTimeout(zz)
          }
        })), (0, Hz.jsx)("div", {
          className: "EffectInfoDuration SmallTextLight",
          children: (0, qb.gb)(iz)
        })
      })),
      WE = (0, Ez.memo)((function() {
        const zz = (0, Nz.h)("localEffects");
        return (0, Hz.jsx)("div", {
          className: "EffectInfosWrapper",
          children: Object.entries(zz).map((zz => {
            let [uz, {
              icon: bz,
              displayName: Ez,
              durationMs: nz,
              endsAtMs: iz,
              level: lz
            }] = zz;
            return (0, Hz.jsxs)("div", {
              className: "EffectInfo",
              children: [(0, Hz.jsx)(DE.b, {
                icon: bz,
                className: "EffectInfoIcon"
              }), (0, Hz.jsxs)("div", {
                className: "EffectInfoRightSide",
                style: {
                  marginTop: null !== nz ? "0" : "1rem"
                },
                children: [(0, Hz.jsxs)("div", {
                  className: "EffectInfoNameWrapper",
                  children: [(0, Hz.jsx)(tz.b, {
                    text: null !== Ez && void 0 !== Ez ? Ez : uz,
                    className: "EffectInfoName SmallTextBold"
                  }), lz > 1 && (0, Hz.jsx)("div", {
                    className: "EffectInfoName SmallTextBold",
                    children: (0, qb.X)(lz)
                  })]
                }), null !== nz && (0, Hz.jsx)(QE, {
                  durationMs: nz,
                  endsAtMs: iz
                })]
              })]
            }, uz)
          }))
        })
      }));
    var eE = bz(36171),
      jE = bz(36332),
      IE = bz(195),
      BE = bz(1322),
      CE = bz(2614),
      YE = bz(2730);

    function kE(zz, uz) {
      (0, Ez.useLayoutEffect)((() => {
        let uz, bz;
        const Ez = requestAnimationFrame((() => {
          bz = setTimeout((() => {
            bz = void 0;
            const Ez = zz();
            uz = "function" === typeof Ez ? Ez : void 0
          }), 0)
        }));
        return () => {
          var zz;
          cancelAnimationFrame(Ez), clearTimeout(bz), null === (zz = uz) || void 0 === zz || zz()
        }
      }), uz)
    }
    const zn = [5, 5, 5],
      un = [7, 4, 4, 4];

    function bn(zz) {
      return zz.reduce(((zz, uz) => zz + uz), 0)
    }

    function En(zz, uz, bz, Ez, nz) {
      const iz = zz.getContext("2d");
      if (!iz) return null;
      const lz = uz.fontFamily,
        Mz = uz.fontWeight;
      return zz.width = bz, zz.height = Ez, iz.fillStyle = uz.color, iz.textAlign = "center", iz.textBaseline = "middle", iz.font = `${Mz} ${nz}px ${lz}`, iz
    }
    const nn = (0, Ez.memo)((function(zz) {
      let {
        show: uz
      } = zz;
      const bz = (0, Ez.useRef)(null),
        nz = (0, Ez.useRef)(null),
        iz = (0, Ez.useRef)(null),
        lz = (0, Zz.m)();
      return (0, Ez.useEffect)((() => lz.whenShown((() => {
        let zz = 0,
          uz = 0,
          bz = 0,
          Ez = 0;
        const lz = (0, FE.o)((() => {
          var lz;
          zz++, uz++;
          const Mz = performance.now();
          if (Mz - bz < 1e3) return;
          const tz = Math.round(zz / (Mz - bz) * 1e3);
          if (nz.current = tz, null === (lz = iz.current) || void 0 === lz || lz.call(iz, tz), zz = 0, bz = Mz, tz < 55) {
            var Hz, Oz;
            Ez += 1;
            const zz = oz.g.getItem("decreaseLoadDistPromptDeniedCount"),
              [uz, bz] = rz.b.get("minChunkAddDist");
            if (Ez >= 15 && function(zz, uz) {
                const bz = dz.gameBridge.lookup("Kr", null);
                return null !== bz && (bz.horizontal > zz || bz.vertical > uz)
              }(uz, bz) && (null !== (Hz = oz.g.getItem("lastDecreaseLoadDistPromptTime")) && void 0 !== Hz ? Hz : 0) + 432e5 < Date.now() && (null !== (Oz = oz.g.getItem("decreaseLoadDistPromptDeniedCount")) && void 0 !== Oz ? Oz : 0) < 3) {
              oz.g.setItem("lastDecreaseLoadDistPromptTime", Date.now());
              BE.NotificationProvider.showPromptPopup({
                title: "Lag (low FPS) caused by high chunk load distance. Decrease it?",
                confirmText: "general:yes",
                cancelText: "general:no",
                unlockPointerKey: "chunkLoadDistanceLagPopup"
              }).getResult().then((Ez => {
                "notificationTornDown" !== Ez && (Ez ? (dz.gameBridge.send("setChunkAddDistance", {
                  horizontal: uz,
                  vertical: bz
                }), oz.g.setItem("chunkHorizAddDist", uz), oz.g.setItem("chunkVertAddDist", bz), sz.k.sK("updatedChunkLoadDist"), oz.g.setItem("decreaseLoadDistPromptDeniedCount", 0)) : oz.g.setItem("decreaseLoadDistPromptDeniedCount", zz + 1))
              }))
            }
          } else Ez = 0
        }));
        let Mz = performance.now();
        uz = 0;
        let tz = null,
          Hz = !document.hidden;

        function Oz() {
          const zz = performance.now() - Mz,
            bz = 1e3 * uz / zz;
          Hz && (null === tz && (tz = bz), CE.c.setFps(bz, tz)), uz = 0, Mz = performance.now()
        }
        let pz = setInterval(Oz, YE.c);

        function Fz() {
          const zz = Hz;
          Hz = !document.hidden, !zz && Hz && (uz = 0, Mz = performance.now(), clearInterval(pz), pz = setInterval(Oz, YE.c))
        }
        return document.addEventListener("visibilitychange", Fz), () => {
          lz(), document.removeEventListener("visibilitychange", Fz), clearInterval(pz)
        }
      }))), [lz]), kE((() => {
        var zz;
        if (!uz || iz.current) return;
        const Ez = bz.current,
          lz = window.getComputedStyle(Ez.parentElement),
          Mz = null !== (zz = window.devicePixelRatio) && void 0 !== zz ? zz : 1,
          tz = parseFloat(lz.fontSize) * Mz,
          Hz = Math.round(3 * tz),
          Oz = Math.round(tz),
          pz = En(Ez, lz, Hz, Oz, tz);
        if (!pz) return;
        const dz = zz => {
          pz.clearRect(0, 0, Ez.width, Ez.height), pz.fillText(zz.toString(), Ez.width / 2, Ez.height / 2)
        };
        iz.current = dz, null !== nz.current && dz(nz.current)
      }), [uz]), (0, Hz.jsxs)("div", {
        className: "FpsWrapperDiv",
        style: {
          display: uz ? "flex" : "none"
        },
        children: [(0, Hz.jsx)("div", {
          className: "FpsLabel",
          children: "FPS"
        }), (0, Hz.jsx)("canvas", {
          className: "FpsCanvas",
          ref: bz,
          width: 48,
          height: 16
        })]
      })
    }));

    function Mn(zz) {
      return Math.sign(zz) * Math.round(100 * Math.abs(zz))
    }

    function tn(zz) {
      let {
        getCoordinates: uz,
        showChunkCoords: bz,
        columns: nz
      } = zz;
      const iz = (0, Ez.useRef)(null);
      return kE((() => {
        var zz;
        const Ez = iz.current,
          lz = window.getComputedStyle(Ez.parentElement),
          Mz = null !== (zz = window.devicePixelRatio) && void 0 !== zz ? zz : 1,
          tz = parseFloat(lz.fontSize) * Mz,
          Hz = Math.round(tz * bn(nz)),
          Oz = Math.round(tz),
          pz = En(Ez, lz, Hz, Oz, tz);
        if (!pz) return;
        let Fz = !0,
          Zz = 0,
          Rz = 0,
          Kz = 0,
          wz = 0,
          Xz = 0,
          fz = 0;
        const sz = () => {
          Fz = !0
        };
        document.fonts.load(pz.font).then(sz, sz);
        const rz = () => {
          En(Ez, lz, Hz, Oz, tz), sz()
        };
        Ez.addEventListener("contextrestored", rz);
        const oz = (0, FE.t)((() => {
          var zz, iz, lz, Mz, Hz, Oz;
          const [sz, rz, oz] = uz(), Nz = Mn(sz), vz = Mn(rz), xz = Mn(oz);
          let Jz = null;
          if (bz) {
            const zz = dz.gameBridge.lookup("localPos", null);
            Jz = (0, zu.Y)(zz[0], zz[1], zz[2])
          }
          const Az = null !== (zz = null === (iz = Jz) || void 0 === iz ? void 0 : iz[0]) && void 0 !== zz ? zz : 0,
            Tz = null !== (lz = null === (Mz = Jz) || void 0 === Mz ? void 0 : Mz[1]) && void 0 !== lz ? lz : 0,
            Lz = null !== (Hz = null === (Oz = Jz) || void 0 === Oz ? void 0 : Oz[2]) && void 0 !== Hz ? Hz : 0;
          if (!Fz && Nz === Zz && vz === Rz && xz === Kz && Az === wz && Tz === Xz && Lz === fz) return;
          Fz = !1, Zz = Nz, Rz = vz, Kz = xz, wz = Az, Xz = Tz, fz = Lz;
          const Pz = [(Nz / 100).toFixed(2), (vz / 100).toFixed(2), (xz / 100).toFixed(2)];
          Jz && Pz.unshift(`${Az} ${Tz} ${Lz}`), pz.clearRect(0, 0, Ez.width, Ez.height);
          const Gz = Ez.height / 2;
          let az = 0;
          for (let uz = 0; uz < Pz.length; uz++) {
            const zz = tz * nz[uz];
            pz.fillText(Pz[uz], az + zz / 2, Gz, zz), az += zz
          }
        }));
        return () => {
          oz(), Ez.removeEventListener("contextrestored", rz)
        }
      }), [uz, bz, nz]), (0, Hz.jsx)("div", {
        className: "CoordinateUI",
        children: (0, Hz.jsx)("canvas", {
          ref: iz,
          className: "CoordinateCanvas",
          width: 16 * bn(nz),
          height: 16
        })
      })
    }
    const Hn = (0, Ez.memo)((function() {
        const zz = (0, Ez.useCallback)((() => {
          const zz = dz.gameBridge.lookup("localPos", null);
          return [zz[0], zz[1], zz[2]]
        }), []);
        return (0, Hz.jsx)(tn, {
          getCoordinates: zz,
          showChunkCoords: !1,
          columns: zn
        })
      })),
      On = (0, Ez.memo)((function() {
        const zz = (0, Ez.useCallback)((() => {
          const zz = dz.gameBridge.lookup("localPos", null),
            uz = IE.e.IZ;
          let bz = zz[0] % uz,
            Ez = zz[1] % uz,
            nz = zz[2] % uz;
          return bz < 0 && (bz += uz), Ez < 0 && (Ez += uz), nz < 0 && (nz += uz), [bz, Ez, nz]
        }), []);
        return (0, Hz.jsx)(tn, {
          getCoordinates: zz,
          showChunkCoords: !0,
          columns: un
        })
      }));
    var pn = bz(1984),
      dn = bz(1305),
      Fn = bz(994),
      Zn = bz(1212),
      Rn = bz(96),
      Kn = bz(36188),
      wn = bz(1424),
      Xn = bz(2899);
    const fn = (0, Ez.memo)((function() {
      const zz = (0, fz.g)("maxAuraLevel");
      return 0 === zz ? null : (0, Hz.jsx)(sn, {
        maxLevel: zz
      })
    }));

    function sn(zz) {
      let {
        maxLevel: uz
      } = zz;
      const bz = (0, fz.g)("auraPerLevel"),
        [nz, iz] = (0, Ez.useState)((() => {
          var zz;
          return null !== (zz = dz.gameBridge.latest("aura")) && void 0 !== zz ? zz : void 0
        })),
        [lz, Mz] = (0, Ez.useState)((() => sz(nz))),
        [tz, Oz] = (0, Ez.useReducer)((zz => zz + 1), 0),
        pz = (0, Ez.useRef)(null),
        Fz = (0, Ez.useRef)([]),
        Zz = (0, Ez.useRef)({
          width: 0,
          level: 0
        }),
        Rz = (0, Ez.useRef)(null),
        Kz = (0, Ez.useRef)(null);

      function Xz() {
        if (null !== Rz.current) return;
        if (0 === Fz.current.length) return;
        const {
          width: zz,
          level: uz
        } = Fz.current.shift();
        let bz;
        if (uz !== Zz.current.level && uz > Zz.current.level !== zz > Zz.current.width) {
          const Ez = uz > Zz.current.level;
          bz = Ez ? zz : 100 - zz, pz.current.style.transition = "none", pz.current.style.width = Ez ? "0%" : "100%", pz.current.offsetWidth
        } else bz = Math.abs(zz - Zz.current.width);
        const Ez = 100 * bz / 20;
        pz.current.style.transition = `width ${Ez}ms linear`, Mz(zz), Zz.current = {
          width: zz,
          level: uz
        }, Fz.current.length > 0 && (Rz.current = setTimeout((() => {
          Rz.current = null, Xz()
        }), Ez))
      }

      function sz(zz) {
        return Math.floor(zz / bz) === uz ? 100 : zz % bz / bz * 100
      }
      return (0, Ez.useEffect)((() => () => {
        clearTimeout(Rz.current), clearTimeout(Kz.current), Rz.current = null, Kz.current = null
      }), []), (0, Nz.d)("aura", (zz => {
        if (Kz.current && clearTimeout(Kz.current), null === zz) return clearTimeout(Rz.current), Kz.current = null, Rz.current = null, Fz.current = [], Zz.current = {
          width: 0,
          level: 0
        }, iz(void 0), void Mz(0);
        Kz.current = setTimeout((() => {
          const uz = Math.floor(nz / bz),
            Ez = Math.floor(zz / bz),
            lz = sz(zz);
          zz > nz && Kn.d.play("exp_collect", .1).rate(1.6 + .5 * Math.random()), Ez > uz ? (Ez % 5 === 0 && Kn.d.play("exp_levelup", .45).rate(.95 + .1 * Math.random()), Oz(), Fz.current.push({
            width: 100,
            level: uz
          })) : Ez < uz && Fz.current.push({
            width: 0,
            level: uz
          }), zz === nz && Ez === uz || Fz.current.push({
            width: lz,
            level: Ez
          }), iz(zz), Xz()
        }), 50)
      })), (0, wz.c)(), (0, Hz.jsxs)("div", {
        className: "AuraBarWrapper",
        children: [(0, Hz.jsxs)("div", {
          className: "AuraBarLabel SmallTextBold",
          children: [(0, Hz.jsx)(wn.c, {
            showSignal: tz,
            particleElement: (0, Hz.jsx)("img", {
              src: (0, Xn.g)("glint"),
              alt: ""
            })
          }), (0, Hz.jsx)("img", {
            className: "AuraBarLabelImage",
            src: (0, Xn.g)("glint"),
            alt: "aura"
          }), (0, Hz.jsx)("div", {
            className: "AuraBarLabelText",
            children: Math.floor((null !== nz && void 0 !== nz ? nz : 0) / bz)
          })]
        }), (0, Hz.jsx)("div", {
          className: "AuraBar",
          children: (0, Hz.jsx)("div", {
            ref: pz,
            className: "AuraBarBackground",
            style: {
              width: `${lz}%`
            }
          })
        })]
      })
    }
    var rn = bz(2425);

    function Nn(zz) {
      zz.timed && (zz.endedAnimation = zz.timed.animation, zz.timed = null)
    }
    const vn = (0, Ez.memo)((function() {
      const zz = (0, Ez.useRef)(null),
        uz = (0, Ez.useRef)(null),
        bz = (0, Ez.useRef)({
          timed: null,
          endedAnimation: null
        });
      return (0, Mz.g)("middleScreenBarInitiate", (zz => {
        var Ez;
        let {
          duration: nz,
          KE: iz,
          horizBarRemOffset: lz
        } = zz;
        const Mz = bz.current;
        Nn(Mz);
        const tz = uz.current;
        if (!(nz >= 0) || !tz) return;
        null === (Ez = Mz.endedAnimation) || void 0 === Ez || Ez.cancel(), Mz.endedAnimation = null;
        const Hz = tz.animate([{
          transform: "scaleX(0)"
        }, {
          transform: "scaleX(1)"
        }], {
          duration: nz,
          fill: "forwards"
        });
        Mz.timed = {
          KE: iz,
          horizBarRemOffset: lz,
          animation: Hz
        }
      })), (0, Mz.g)("middleScreenBarRemove", (() => {
        Nn(bz.current)
      })), (0, Ez.useEffect)((() => {
        const Ez = bz.current;
        let nz = Number.NaN,
          iz = Number.NaN,
          lz = Number.NaN;
        return (0, FE.m)((() => {
          var bz, Mz, tz, Hz;
          const Oz = zz.current,
            pz = uz.current;
          if (!Oz || !pz) return;
          null !== (bz = Ez.timed) && void 0 !== bz && bz.KE && "finished" === Ez.timed.animation.playState && Nn(Ez), null === (Mz = Ez.endedAnimation) || void 0 === Mz || Mz.cancel(), Ez.endedAnimation = null;
          let Fz = Ez.timed ? 1 : 0;
          if (!Ez.timed) {
            const zz = dz.gameBridge.lookup("momentumFrac", null);
            Fz = zz > 0 ? 1 : 0, zz !== lz && (lz = zz, pz.style.transform = `scaleX(${zz})`)
          }
          const Zz = null !== (tz = null === (Hz = Ez.timed) || void 0 === Hz ? void 0 : Hz.horizBarRemOffset) && void 0 !== tz ? tz : 0;
          Zz === nz && Fz === iz || (nz = Zz, iz = Fz, Oz.style.transform = `translateX(calc(-50% + ${Zz}rem)) scaleX(${Fz})`)
        }))
      }), []), (0, Hz.jsx)("div", {
        className: "MiddleScreenBar",
        ref: zz,
        children: (0, Hz.jsx)("div", {
          className: "MiddleScreenBarFill",
          ref: uz
        })
      })
    }));
    var xn = bz(4425),
      Jn = bz(2589);

    function An() {
      const {
        t: zz
      } = (0, Lz.F)(), uz = (0, Mz.h)("serverUpdating", null), bz = (0, Jn.c)(250, null !== uz);
      return null === uz || bz - uz > 3e4 ? null : (0, Hz.jsxs)("div", {
        className: "UpdateCountdownBanner",
        children: [(0, Hz.jsx)("div", {
          className: "UpdateCountdownBannerTitle",
          children: zz("updateWaiting:updatingIn", {
            countdown: (0, xn.l)(uz - bz)
          })
        }), (0, Hz.jsx)("div", {
          children: zz("updateWaiting:bringYouBack")
        })]
      })
    }
    var Tn = bz(36361),
      Ln = bz(1923);
    const Pn = [{
        translationKey: "general:interact"
      }],
      Gn = (0, Ez.memo)((function() {
        const zz = (0, fz.g)("crosshairText"),
          {
            interactPrompt: uz,
            blockText: bz,
            neededTool: nz
          } = (0, Nz.h)("crosshairTarget"),
          {
            isTouchScreen: iz
          } = (0, vz.m)(["isTouchScreen"]),
          lz = (0, Jz.p)(),
          Oz = (0, Tz.b)("alt-fire");
        (0, Ez.useEffect)((() => {
          dz.gameBridge.send("setCrosshairInteractPrompt", !iz || lz ? "key" : "touch")
        }), [iz, lz]);
        const [pz, Fz] = (0, Ez.useReducer)((zz => zz + 1), 0);
        (0, Mz.g)("customBindingsChanged", Fz);
        var Zz;
        if (null !== uz && (lz && null !== Oz || !iz && null !== (0, Ln.m)("alt-fire"))) return (0, Hz.jsxs)("div", {
          className: "CrosshairText SmallTextBold InteractPrompt",
          children: [(0, Hz.jsx)(xz.e, {
            noaAction: "alt-fire"
          }), (0, Hz.jsx)(tz.b, {
            text: null !== (Zz = uz.label) && void 0 !== Zz ? Zz : Pn
          })]
        });
        let Rz = null;
        return null !== bz ? Rz = bz : null !== zz && "" !== zz ? Rz = zz : null !== nz && (Rz = [{
          icon: nz,
          style: {
            opacity: .8
          }
        }, {
          str: " needed",
          style: {
            opacity: .8
          }
        }]), Rz ? (0, Hz.jsx)("div", {
          className: "CrosshairText SmallTextBold",
          children: (0, Hz.jsx)(tz.b, {
            text: Rz
          })
        }) : null
      }));
    var an = bz(2433);
    const Vn = (0, Ez.memo)((function() {
      var zz;
      const {
        interactPrompt: uz
      } = (0, Nz.h)("crosshairTarget"), {
        openInGameMenuName: bz,
        openEverythingMenuName: Ez
      } = (0, vz.m)(["openInGameMenuName", "openEverythingMenuName"]), nz = (0, Mz.h)("aimingOverlay", "none"), iz = (0, jz.j)(), lz = (0, an.c)();
      return null === uz || null !== bz || null !== Ez || "sniper" === nz || iz || lz ? null : (0, Hz.jsx)(mn, {
        label: null !== (zz = uz.label) && void 0 !== zz ? zz : Pn
      })
    }));

    function mn(zz) {
      let {
        label: uz
      } = zz;
      const bz = Tu(Cz.d.Interact, !1);
      return (0, Ez.useEffect)((() => (sz.k.sK(Ru.o), () => {
        sz.k.sK(Ru.o)
      })), []), (0, Hz.jsx)("div", {
        ref: bz,
        className: "TouchInteractHit",
        children: (0, Hz.jsxs)("div", {
          className: "TouchInteractKey",
          children: [(0, Hz.jsx)("span", {
            className: "TouchInteractIcon",
            children: (0, Hz.jsx)(hz.c, {
              name: "hand-back-point-up"
            })
          }), (0, Hz.jsx)(tz.b, {
            text: uz
          })]
        })
      })
    }
    var qn = bz(4524),
      hn = bz(4590);
    const Un = (0, Ez.forwardRef)((function(zz, uz) {
        let {
          text: bz,
          className: Ez,
          children: nz
        } = zz;
        return bz.hasText ? (0, Hz.jsx)("div", {
          ref: uz,
          className: iz()("HudTextPanel", Ez, {
            NoBackground: !bz.showBackground
          }),
          children: null !== nz && void 0 !== nz ? nz : (0, Hz.jsx)(tz.b, {
            text: bz.content
          })
        }) : null
      })),
      cn = (0, Ez.memo)((function() {
        const zz = (0, fz.j)("middleTextTop"),
          [uz, bz] = (0, Ez.useState)(null),
          nz = (0, oE.j)(uz);
        return zz.hasText ? (0, Hz.jsx)("div", {
          className: iz()("MiddleTextTopContainer", {
            MiddleTextTopBelow: nz
          }),
          children: (0, Hz.jsx)(Un, {
            ref: bz,
            className: "MiddleTextTop",
            text: zz
          })
        }) : null
      })),
      gn = (0, Ez.memo)((function() {
        const zz = (0, fz.b)();
        return (0, Hz.jsx)(Hz.Fragment, {
          children: zz.map(((zz, uz) => (0, Hz.jsx)(Un, {
            className: "HeaderChip",
            text: zz
          }, uz)))
        })
      }));
    var Sn = bz(3373),
      yn = bz(4355);
    const Dn = (0, Ez.memo)((function() {
      const {
        t: zz
      } = (0, Lz.F)(), [uz, bz] = (0, Ez.useState)(!1), nz = (0, Ez.useRef)(!1), iz = function(zz) {
        let {
          gameNameWithVariation: uz,
          lobbyName: bz
        } = zz;
        if ((0, Fn.k)(uz)) return Qn;
        if ((0, Zn.H)(bz)) return Wn;
        return null
      }((0, Nz.h)("connectedGame"));
      if (!iz || uz) return null;
      const lz = yn.b[iz.target];
      return (0, Hz.jsx)(qz.f, {
        tooltipInner: (0, Hz.jsx)("div", {
          children: zz(lz.reportButtonTooltip)
        }),
        children: (0, Hz.jsx)("div", {
          children: (0, Hz.jsx)(Jb.R, {
            onClick: () => {
              nz.current || (nz.current = !0, (0, yn.e)(iz.reportPolicyIds, lz).then((zz => {
                null !== zz && void 0 !== zz && zz.selectedPolicyId && (dz.gameBridge.send("reportLobbyOrGame", {
                  target: iz.target,
                  Nl: zz.selectedPolicyId,
                  details: zz.vl
                }), bz(!0))
              })).finally((() => {
                nz.current = !1
              })))
            }
          })
        })
      })
    }));
    const Qn = {
        target: "customGame",
        reportPolicyIds: Sn.b
      },
      Wn = {
        target: "lobby",
        reportPolicyIds: Sn.c
      };
    var en = bz(8459),
      jn = bz(36369),
      In = bz(36378),
      Bn = bz(36386),
      Cn = bz(36392),
      Yn = bz(36422);

    function kn(zz) {
      return zz instanceof Error && zi.has(zz.message) ? zz.message : void 0
    }
    const zi = new Set([Yn.d.saveBusy.text, Yn.d.saveClosed.text, Yn.d.cropBusy.text]);
    let ui = !1;
    async function bi(zz, uz) {
      var bz, Ez;
      const {
        files: nz
      } = uz, iz = nz.replayKey();
      if (null === iz) return "none";
      if (ui) throw new Error(Yn.d.saveBusy.text);
      const lz = null !== (bz = null === (Ez = nz.saveRefusal) || void 0 === Ez ? void 0 : Ez.call(nz)) && void 0 !== bz ? bz : null;
      if (null !== lz) throw new Error(lz);
      ui = !0;
      try {
        return await async function(zz, uz, bz) {
          const {
            files: Ez
          } = uz, nz = () => Ez.replayKey() === bz, iz = (zz, uz) => {
            nz() && Ez.markSaved(zz, uz)
          };
          let lz = null;
          if (uz.pickerSupported()) {
            try {
              if (lz = await uz.chooseFile(zz ? null : Ez.fileHandle()), null === lz) return "ob"
            } catch (tz) {
              uz.onFallback(tz)
            }
            if (!nz()) throw new Error(Yn.d.saveClosed.text)
          }
          const Mz = await Ez.encode();
          if (null === Mz) {
            if (null !== lz) throw new Error(Yn.d.saveClosed.text);
            return "none"
          }
          if (null !== lz) try {
            return await uz.write(lz, Mz), iz(lz), "written"
          } catch (tz) {
            uz.onFallback(tz)
          }
          return iz(null, uz.download(Mz)), "downloaded"
        }(zz, uz, iz)
      } finally {
        ui = !1
      }
    }
    var Ei = bz(4300),
      ni = bz(79);
    const ii = [1, 2, 4, 8, 16, 32, 64];

    function li(zz, uz) {
      return Math.max(0, Math.min(zz, uz))
    }

    function Mi(zz, uz, bz) {
      return bz <= uz ? 0 : (zz - uz) / (bz - uz) * 100
    }

    function ti(zz, uz, bz) {
      const Ez = bz - uz;
      return Math.round(uz + zz / 100 * Ez)
    }

    function Hi(zz, uz) {
      const bz = Math.floor(zz / uz / 60),
        Ez = Math.floor(zz / uz % 60),
        nz = zz % uz;
      return `${bz.toString().padStart(2,"0")}:${Ez.toString().padStart(2,"0")}:${nz.toString().padStart(2,"0")}`
    }

    function Oi(zz) {
      return Number.isInteger(zz) || ii.includes(zz) ? `${Math.round(zz)}\xd7` : `${zz.toFixed(1)}\xd7`
    }

    function di(zz, uz) {
      const bz = ii.indexOf(zz);
      if (-1 !== bz) return "in" === uz ? ii[Math.min(bz + 1, ii.length - 1)] : ii[Math.max(bz - 1, 0)];
      if ("in" === uz) {
        for (const uz of ii)
          if (uz >= zz) return uz;
        return zz
      }
      for (let Ez = ii.length - 1; Ez >= 0; Ez--)
        if (ii[Ez] <= zz) return ii[Ez];
      return ii[0]
    }

    function Fi(zz, uz) {
      const bz = uz.getBoundingClientRect();
      if (bz.width <= 0) return 0;
      const Ez = (zz - bz.left) / bz.width * 100;
      return Math.max(0, Math.min(100, Ez))
    }

    function Zi(zz, uz) {
      return uz <= 0 ? 0 : zz / uz * 100
    }

    function Ri(zz, uz, bz) {
      const Ez = [];
      let nz = Math.ceil(zz / bz) * bz;
      for (; nz <= uz;) Ez.push(nz), nz += bz;
      return Ez
    }
    var Ki = bz(36427);
    const wi = [{
        label: "Linear",
        easing: Ki.h
      }, {
        label: "Ease",
        easing: [.25, .1, .25, 1]
      }, {
        label: "Ease In",
        easing: Ki.d
      }, {
        label: "Ease Out",
        easing: Ki.g
      }, {
        label: "Ease In Out",
        easing: Ki.c
      }],
      Xi = 200,
      fi = 150;

    function si(zz) {
      const uz = zz => Number(zz.toFixed(3)).toString();
      return `cubic-bezier(${uz(zz[0])}, ${uz(zz[1])}, ${uz(zz[2])}, ${uz(zz[3])})`
    }

    function ri(zz, uz) {
      return {
        cx: 25 + zz * fi,
        cy: 25 + (1 - uz) * fi
      }
    }

    function oi(zz, uz, bz) {
      const Ez = zz - bz.left,
        nz = uz - bz.top;
      return {
        x: qb.d.clamp((Ez - 25) / fi, 0, 1),
        y: qb.d.clamp(1 - (nz - 25) / fi, -1, 2)
      }
    }

    function Ni(zz, uz, bz, Ez, nz) {
      return {
        x: (0, Ki.q)(zz, bz, nz),
        y: (0, Ki.q)(uz, Ez, nz)
      }
    }
    const vi = (0, Ez.memo)((function(zz) {
      let {
        value: uz,
        onChange: bz
      } = zz;
      const nz = (0, Ez.useRef)(null),
        iz = (0, Ez.useRef)(null),
        [lz, Mz] = (0, Ez.useState)(null),
        tz = (0, Ez.useCallback)((() => {
          const zz = nz.current;
          if (!zz) return;
          const bz = zz.getContext("2d");
          if (!bz) return;
          const Ez = window.devicePixelRatio || 1;
          zz.width = Xi * Ez, zz.height = Xi * Ez, bz.setTransform(Ez, 0, 0, Ez, 0, 0), bz.clearRect(0, 0, Xi, Xi), bz.fillStyle = "rgba(38, 52, 93, 0.85)", bz.fillRect(0, 0, Xi, Xi), bz.beginPath();
          const iz = ri(0, 0),
            Mz = ri(1, 1);
          bz.moveTo(iz.cx, iz.cy), bz.lineTo(Mz.cx, Mz.cy), bz.strokeStyle = "rgba(164, 164, 164, 0.35)", bz.setLineDash([3, 3]), bz.stroke(), bz.setLineDash([]);
          const [tz, Hz, Oz, pz] = uz, dz = ri(tz, Hz), Fz = ri(Oz, pz);
          bz.strokeStyle = "rgba(252, 211, 115, 0.55)", bz.lineWidth = 1.5, bz.beginPath(), bz.moveTo(iz.cx, iz.cy), bz.lineTo(dz.cx, dz.cy), bz.moveTo(Mz.cx, Mz.cy), bz.lineTo(Fz.cx, Fz.cy), bz.stroke(), bz.strokeStyle = "#fcd373", bz.lineWidth = 2, bz.beginPath();
          for (let uz = 0; uz <= 50; uz++) {
            const zz = Ni(tz, Hz, Oz, pz, uz / 50),
              Ez = ri(zz.x, zz.y);
            0 === uz ? bz.moveTo(Ez.cx, Ez.cy) : bz.lineTo(Ez.cx, Ez.cy)
          }
          bz.stroke();
          const Zz = (zz, uz, Ez) => {
            bz.beginPath(), bz.arc(zz, uz, Ez ? 6 : 5, 0, 2 * Math.PI), bz.fillStyle = Ez ? "#ffb914" : "#fcd373", bz.fill(), bz.strokeStyle = "#1a1f2e", bz.lineWidth = 1.5, bz.stroke()
          };
          Zz(dz.cx, dz.cy, "p1" === lz), Zz(Fz.cx, Fz.cy, "p2" === lz)
        }), [lz, uz]);
      (0, Ez.useEffect)((() => {
        tz()
      }), [tz]);
      const Oz = (0, Ez.useCallback)(((zz, Ez) => {
          const lz = nz.current,
            Mz = iz.current;
          if (!lz || !Mz) return;
          const tz = lz.getBoundingClientRect(),
            {
              x: Hz,
              y: Oz
            } = oi(zz, Ez, tz);
          bz("p1" === Mz ? [Hz, Oz, uz[2], uz[3]] : [uz[0], uz[1], Hz, Oz])
        }), [bz, uz]),
        pz = (0, Ez.useCallback)((zz => {
          const bz = nz.current;
          if (!bz) return;
          const Ez = bz.getBoundingClientRect();
          let {
            x: lz,
            y: tz
          } = oi(zz.clientX, zz.clientY, Ez);
          lz = qb.d.clamp(lz, 0, 1), tz = qb.d.clamp(tz, 0, 1);
          const [Hz, pz, dz, Fz] = uz.map((zz => qb.d.clamp(zz, 0, 1))), Zz = Math.hypot(lz - Hz, tz - pz), Rz = Math.hypot(lz - dz, tz - Fz), Kz = Zz <= Rz ? "p1" : "p2";
          ("p1" === Kz ? Zz : Rz) > .12 || (iz.current = Kz, Mz(Kz), bz.setPointerCapture(zz.pointerId), Oz(zz.clientX, zz.clientY))
        }), [Oz, uz]),
        dz = (0, Ez.useCallback)((zz => {
          iz.current && Oz(zz.clientX, zz.clientY)
        }), [Oz]),
        Fz = (0, Ez.useCallback)((zz => {
          iz.current = null, Mz(null), zz.currentTarget.hasPointerCapture(zz.pointerId) && zz.currentTarget.releasePointerCapture(zz.pointerId)
        }), []);
      return (0, Hz.jsxs)("div", {
        className: "CubicBezierEasingEditor",
        children: [(0, Hz.jsx)("canvas", {
          ref: nz,
          className: "CubicBezierEasingEditorCanvas",
          style: {
            width: Xi,
            height: Xi
          },
          onPointerDown: pz,
          onPointerMove: dz,
          onPointerUp: Fz,
          onPointerCancel: Fz
        }), (0, Hz.jsx)("span", {
          className: "CubicBezierEasingEditorReadout",
          children: si(uz)
        })]
      })
    }));
    var xi = bz(1633),
      Ji = bz(1613);
    const Ai = 12;

    function Ti(zz) {
      return {
        left: zz.left + zz.width / 2,
        top: zz.top - 8
      }
    }

    function Li(zz, uz) {
      const [bz, nz] = (0, Ez.useState)(null);
      return (0, Ez.useLayoutEffect)((() => {
        const bz = zz.current;
        if (!bz) return;
        const {
          width: Ez,
          height: iz
        } = bz.getBoundingClientRect();
        nz(function(zz, uz, bz) {
          const Ez = window.innerWidth,
            nz = window.innerHeight,
            iz = uz / 2;
          let lz = zz.left + zz.width / 2;
          lz = Math.max(Ai + iz, Math.min(lz, Ez - Ai - iz));
          const Mz = zz.top - 8 - Ai,
            tz = nz - zz.bottom - 8 - Ai,
            Hz = Mz < bz && tz >= Mz;
          let Oz;
          Hz ? (Oz = zz.bottom + 8, Oz + bz > nz - Ai && (Oz = nz - Ai - bz), Oz = Math.max(Ai, Oz)) : (Oz = zz.top - 8, Oz - bz < Ai && (Oz = Ai + bz));
          return {
            left: lz,
            top: Oz,
            placeBelow: Hz
          }
        }(uz, Ez, iz))
      }), [uz, zz]), bz
    }

    function Pi(zz, uz, bz) {
      (0, Ez.useEffect)((() => (0, Ji.e)("pointerdown", (Ez => {
        var nz, iz;
        const lz = Ez.target;
        lz instanceof Node && (null !== (nz = zz.current) && void 0 !== nz && nz.contains(lz) || null !== bz && void 0 !== bz && null !== (iz = bz.current) && void 0 !== iz && iz.contains(lz) || (0, xi.n)(lz) || uz())
      }))), [bz, uz, zz])
    }

    function Gi(zz) {
      let {
        label: uz,
        value: bz,
        onChange: Ez
      } = zz;
      return (0, Hz.jsxs)("div", {
        className: "ReplayKeyframePopoverVec3",
        children: [(0, Hz.jsx)("span", {
          className: "ReplayKeyframePopoverVec3Label",
          children: uz
        }), (0, Hz.jsx)("div", {
          className: "ReplayKeyframePopoverVec3Inputs",
          children: ["X", "Y", "Z"].map(((zz, uz) => (0, Hz.jsxs)("label", {
            className: "ReplayKeyframePopoverAxis",
            children: [(0, Hz.jsx)("span", {
              children: zz
            }), (0, Hz.jsx)("input", {
              type: "number",
              step: "any",
              value: bz[uz],
              onChange: zz => {
                const nz = Number.parseFloat(zz.target.value);
                if (Number.isNaN(nz)) return;
                const iz = [bz[0], bz[1], bz[2]];
                iz[uz] = nz, Ez(iz)
              }
            })]
          }, zz)))
        })]
      })
    }
    const ai = (0, Ez.memo)((function(zz) {
        var uz, bz, nz;
        let {
          keyframe: lz,
          anchor: Mz,
          hasOutgoingSegment: tz,
          onClose: Oz,
          onApply: pz,
          onDelete: dz,
          onUseCurrentCamera: Fz
        } = zz;
        const Zz = (0, Ez.useRef)(null),
          Rz = Li(Zz, Mz.rect),
          [Kz, wz] = (0, Ez.useState)((() => [lz.position[0], lz.position[1], lz.position[2]])),
          [Xz, fz] = (0, Ez.useState)((() => [lz.direction[0], lz.direction[1], lz.direction[2]])),
          [sz, rz] = (0, Ez.useState)((() => lz.easing));
        (0, Ez.useEffect)((() => {
          wz([lz.position[0], lz.position[1], lz.position[2]]), fz([lz.direction[0], lz.direction[1], lz.direction[2]]), rz(lz.easing)
        }), [lz]), Pi(Zz, Oz);
        const oz = (0, Ez.useCallback)((() => {
            pz({
              sd: lz.sd,
              position: Kz,
              direction: Xz,
              easing: sz
            }), Oz()
          }), [Xz, sz, lz.sd, pz, Oz, Kz]),
          Nz = (0, Ez.useCallback)((() => {
            dz(lz.sd), Oz()
          }), [lz.sd, dz, Oz]),
          vz = (0, Ez.useCallback)((() => {
            const zz = Fz();
            zz && (wz([zz.position[0], zz.position[1], zz.position[2]]), fz([zz.direction[0], zz.direction[1], zz.direction[2]]))
          }), [Fz]),
          xz = Ti(Mz.rect);
        return (0, Hz.jsxs)("div", {
          ref: Zz,
          className: iz()("ReplayViewerPopover ReplayKeyframePopover", {
            Below: null !== (uz = null === Rz || void 0 === Rz ? void 0 : Rz.placeBelow) && void 0 !== uz && uz,
            Positioned: null !== Rz
          }),
          style: {
            left: `${null!==(bz=null===Rz||void 0===Rz?void 0:Rz.left)&&void 0!==bz?bz:xz.left}px`,
            top: `${null!==(nz=null===Rz||void 0===Rz?void 0:Rz.top)&&void 0!==nz?nz:xz.top}px`
          },
          onPointerDown: zz => {
            zz.stopPropagation()
          },
          children: [(0, Hz.jsxs)("div", {
            className: "ReplayKeyframePopoverHeader",
            children: [(0, Hz.jsx)("span", {
              className: "ReplayKeyframePopoverTitle",
              children: "Camera keyframe"
            }), (0, Hz.jsxs)("span", {
              className: "ReplayKeyframePopoverTick",
              children: ["Tick ", Mz.sd]
            })]
          }), (0, Hz.jsx)(Gi, {
            label: "Position",
            value: Kz,
            onChange: wz
          }), (0, Hz.jsx)(Gi, {
            label: "Direction",
            value: Xz,
            onChange: fz
          }), tz && (0, Hz.jsxs)("div", {
            className: "ReplayKeyframePopoverEasing",
            children: [(0, Hz.jsx)("span", {
              className: "ReplayKeyframePopoverEasingLabel",
              children: "Easing to next"
            }), (0, Hz.jsx)("div", {
              className: "ReplayKeyframePopoverEasingPresets",
              children: wi.map((zz => {
                const uz = (bz = sz, Ez = zz.easing, bz[0] === Ez[0] && bz[1] === Ez[1] && bz[2] === Ez[2] && bz[3] === Ez[3]);
                var bz, Ez;
                return (0, Hz.jsx)(Jb.V, {
                  className: iz()("ReplayKeyframePopoverPreset", {
                    Active: uz
                  }),
                  onClick: () => {
                    rz(zz.easing)
                  },
                  children: zz.label
                }, zz.label)
              }))
            }), (0, Hz.jsx)(vi, {
              value: sz,
              onChange: rz
            })]
          }), (0, Hz.jsxs)("div", {
            className: "ReplayKeyframePopoverActions",
            children: [(0, Hz.jsx)(Jb.f, {
              className: "ReplayViewerCompactButton",
              onClick: vz,
              children: "Use current view"
            }), (0, Hz.jsx)(Jb.q, {
              className: "ReplayViewerCompactButton",
              onClick: oz,
              children: "Apply"
            }), (0, Hz.jsx)(Jb.K, {
              className: "ReplayViewerCompactButton",
              onClick: Nz,
              children: "Delete"
            })]
          })]
        })
      })),
      Vi = (0, Ez.memo)((function(zz) {
        var uz, bz, nz;
        let {
          anchor: lz,
          hasPlaybackMark: Mz,
          onClose: tz,
          onMark: Oz,
          onZoom: pz,
          onCrop: dz,
          onDeleteKeyframes: Fz,
          onClearMark: Zz
        } = zz;
        const Rz = (0, Ez.useRef)(null),
          Kz = Li(Rz, lz.rect),
          wz = Ti(lz.rect),
          Xz = {
            startTick: lz.startTick,
            endTick: lz.endTick
          },
          fz = lz.endTick > lz.startTick;
        return Pi(Rz, tz), (0, Hz.jsx)("div", {
          ref: Rz,
          className: iz()("ReplayViewerPopover ReplayTimelineSelectionPopover", {
            Below: null !== (uz = null === Kz || void 0 === Kz ? void 0 : Kz.placeBelow) && void 0 !== uz && uz,
            Positioned: null !== Kz
          }),
          style: {
            left: `${null!==(bz=null===Kz||void 0===Kz?void 0:Kz.left)&&void 0!==bz?bz:wz.left}px`,
            top: `${null!==(nz=null===Kz||void 0===Kz?void 0:Kz.top)&&void 0!==nz?nz:wz.top}px`
          },
          onPointerDown: zz => {
            zz.stopPropagation()
          },
          children: (0, Hz.jsxs)("div", {
            className: "ReplayTimelineSelectionPopoverActions",
            children: [(0, Hz.jsx)(Jb.q, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                Oz(Xz)
              },
              disabled: !fz,
              children: (0, Hz.jsx)("span", {
                children: " Play range "
              })
            }), (0, Hz.jsx)(Jb.f, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                pz(Xz)
              },
              children: (0, Hz.jsx)("span", {
                children: " Zoom "
              })
            }), (0, Hz.jsx)(Jb.V, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                dz(Xz)
              },
              disabled: !fz,
              children: (0, Hz.jsx)("span", {
                children: " Crop "
              })
            }), (0, Hz.jsx)(Jb.V, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                Fz(Xz)
              },
              children: (0, Hz.jsx)("span", {
                children: " Delete all keyframes "
              })
            }), Mz && (0, Hz.jsx)(Jb.V, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                Zz()
              },
              children: (0, Hz.jsx)("span", {
                children: " Clear range "
              })
            })]
          })
        })
      })),
      mi = (0, Ez.memo)((function(zz) {
        var uz, bz;
        let {
          maxTick: nz,
          displayTick: lz,
          pT: Mz,
          cameraKeyframes: tz,
          playbackMark: Oz,
          onSeek: pz,
          onPause: dz,
          onScrubTickChange: Fz,
          onMoveCameraKeyframe: Zz,
          onUpdateCameraKeyframe: Rz,
          onDeleteCameraKeyframe: Kz,
          onUseCurrentCamera: wz,
          onMarkRange: Xz,
          onCropRange: fz,
          onDeleteKeyframesInRange: sz,
          onClearMark: rz,
          zoomLevel: oz,
          onZoomLevelChange: Nz
        } = zz;
        const vz = (0, Ez.useRef)(null),
          xz = (0, Ez.useRef)(null),
          Jz = (0, Ez.useRef)(!1),
          Az = (0, Ez.useRef)(!1),
          Tz = (0, Ez.useRef)(oz),
          Lz = (0, Ez.useRef)(null),
          Pz = (0, Ez.useRef)(null),
          Gz = (0, Ez.useRef)(null),
          az = (0, Ez.useRef)(null),
          [Vz, mz] = (0, Ez.useState)(null),
          [qz, hz] = (0, Ez.useState)(lz),
          [Uz, cz] = (0, Ez.useState)(null),
          [gz, Sz] = (0, Ez.useState)(null),
          [yz, Dz] = (0, Ez.useState)(null),
          [Qz, Wz] = (0, Ez.useState)(null),
          ez = (0, Ez.useMemo)((() => tz.map((zz => zz.sd))), [tz]),
          jz = null !== Vz && void 0 !== Vz ? Vz : lz,
          {
            viewStart: Iz,
            viewEnd: Bz
          } = (0, Ez.useMemo)((() => function(zz) {
            const uz = zz.maxTick + 1,
              bz = Math.max(1, Math.ceil(uz / zz.zoomLevel)),
              Ez = Math.floor(bz / 2);
            let nz = zz.centerTick - Ez;
            return nz = Math.max(0, Math.min(nz, zz.maxTick - bz + 1)), {
              viewStart: nz,
              viewEnd: Math.min(zz.maxTick, nz + bz - 1)
            }
          }({
            maxTick: nz,
            zoomLevel: oz,
            centerTick: qz
          })), [nz, oz, qz]);
        (0, Ez.useEffect)((() => {
          if (null !== Vz || null !== Pz.current || null !== Gz.current || null !== az.current) return;
          if (Jz.current) return void(Jz.current = !1);
          if (Az.current) return void(Az.current = !1);
          const zz = Tz.current !== oz;
          Tz.current = oz, zz && hz(lz)
        }), [oz, lz, Vz]);
        const Cz = (0, Ez.useCallback)((zz => {
            let uz = li(zz, nz);
            return Oz && (uz = Math.max(Oz.inTick, Math.min(uz, Oz.outTick))), uz
          }), [nz, Oz]),
          Yz = (0, Ez.useCallback)(((zz, uz) => {
            const bz = Cz(zz);
            pz(bz), uz && hz(bz)
          }), [Cz, pz]),
          kz = (0, Ez.useCallback)(((zz, uz) => {
            const bz = Cz(zz);
            mz(bz), Fz(bz), Yz(bz, uz)
          }), [Cz, Yz, Fz]),
          zu = (0, Ez.useCallback)((() => {
            mz((zz => (null !== zz && hz(zz), null))), Fz(null)
          }), [Fz]),
          uu = (0, Ez.useCallback)((() => {
            Dz(null), Wz(null)
          }), []),
          bu = (0, Ez.useCallback)((zz => {
            const uz = vz.current;
            if (!uz) return 0;
            return li(ti(Fi(zz, uz), Iz, Bz), nz)
          }), [nz, Bz, Iz]),
          Eu = (0, Ez.useCallback)((zz => {
            const uz = xz.current;
            if (!uz) return 0;
            return li(ti(Fi(zz, uz), 0, nz), nz)
          }), [nz]),
          nu = (0, Ez.useMemo)((() => {
            if (!Uz) return [...ez];
            const zz = ez.filter((zz => zz !== Uz.fromTick));
            return zz.push(Uz.previewTick), zz.sort(((zz, uz) => zz - uz)), zz
          }), [ez, Uz]),
          iu = (0, Ez.useMemo)((() => {
            var zz;
            return gz && null !== (zz = tz.find((zz => zz.sd === gz.sd))) && void 0 !== zz ? zz : null
          }), [tz, gz]),
          lu = (0, Ez.useMemo)((() => !!iu && tz.some((zz => zz.sd > iu.sd))), [tz, iu]);
        (0, Ez.useEffect)((() => {
          gz && !iu && Sz(null)
        }), [gz, iu]), (0, Ez.useEffect)((() => {
          if (!Qz) return () => {};
          const zz = zz => {
            "Escape" === zz.key && uu()
          };
          return window.addEventListener("keydown", zz), () => {
            window.removeEventListener("keydown", zz)
          }
        }), [uu, Qz]);
        const Mu = (0, Ez.useCallback)(((zz, uz) => {
            uu(), dz(), pz(zz, {
              ignorePlaybackMark: !0
            }), Sz({
              sd: zz,
              rect: uz.getBoundingClientRect()
            })
          }), [uu, dz, pz]),
          tu = (0, Ez.useCallback)(((zz, uz) => bz => {
            0 === bz.button && (bz.stopPropagation(), Sz(null), uu(), dz(), Lz.current = {
              fromTick: zz,
              startX: bz.clientX,
              startY: bz.clientY,
              didDrag: !1,
              track: uz
            }, cz({
              fromTick: zz,
              previewTick: zz,
              track: uz
            }), bz.currentTarget.setPointerCapture(bz.pointerId))
          }), [uu, dz]),
          Hu = (0, Ez.useCallback)((zz => {
            if (!Uz) return;
            zz.stopPropagation();
            const uz = Lz.current;
            if (uz && !uz.didDrag) {
              const bz = zz.clientX - uz.startX,
                Ez = zz.clientY - uz.startY;
              Math.hypot(bz, Ez) > 5 && (uz.didDrag = !0)
            }
            const bz = "detail" === Uz.track ? bu(zz.clientX) : Eu(zz.clientX);
            bz !== Uz.previewTick && cz({
              ...Uz,
              previewTick: bz
            })
          }), [Uz, bu, Eu]),
          Ou = (0, Ez.useCallback)((zz => {
            if (!Uz) return;
            zz.stopPropagation();
            const uz = Lz.current,
              bz = "detail" === Uz.track ? bu(zz.clientX) : Eu(zz.clientX);
            uz && !uz.didDrag ? Mu(uz.fromTick, zz.currentTarget) : bz !== Uz.fromTick && Zz(Uz.fromTick, bz), cz(null), Lz.current = null, zz.currentTarget.releasePointerCapture(zz.pointerId)
          }), [Uz, Zz, Mu, bu, Eu]),
          pu = (0, Ez.useCallback)((zz => {
            if (0 !== zz.button) return;
            Sz(null), dz();
            const uz = bu(zz.clientX);
            Pz.current = {
              pointerId: zz.pointerId,
              startX: zz.clientX,
              startY: zz.clientY,
              startTick: uz,
              currentTick: uz,
              didSelect: !1
            }, Dz(null), Wz(null), zz.currentTarget.setPointerCapture(zz.pointerId)
          }), [dz, bu]),
          du = (0, Ez.useCallback)((zz => {
            const uz = Pz.current;
            if (!uz || uz.pointerId !== zz.pointerId) return;
            const bz = bu(zz.clientX);
            if (uz.currentTick = bz, !uz.didSelect) {
              const bz = zz.clientX - uz.startX,
                Ez = zz.clientY - uz.startY;
              if (Math.hypot(bz, Ez) <= 5) return;
              uz.didSelect = !0
            }
            const Ez = Math.min(uz.startTick, bz),
              nz = Math.max(uz.startTick, bz);
            Dz({
              startTick: Ez,
              endTick: nz
            })
          }), [bu]),
          Fu = (0, Ez.useCallback)((zz => {
            const uz = Pz.current;
            if (!uz || uz.pointerId !== zz.pointerId) return;
            if (Pz.current = null, zz.currentTarget.releasePointerCapture(zz.pointerId), !uz.didSelect) return uu(), void Yz(uz.startTick, !0);
            const bz = bu(zz.clientX),
              Ez = Math.min(uz.startTick, bz),
              nz = Math.max(uz.startTick, bz),
              iz = {
                startTick: Ez,
                endTick: nz
              };
            Dz(iz);
            const lz = vz.current;
            if (!lz) return;
            const Mz = lz.getBoundingClientRect(),
              tz = Mi(Ez, Iz, Bz) / 100,
              Hz = Mi(nz, Iz, Bz) / 100,
              Oz = Mz.left + tz * Mz.width,
              pz = Mz.left + Hz * Mz.width;
            Wz({
              ...iz,
              rect: new DOMRect(Oz, Mz.top, Math.max(pz - Oz, 1), Mz.height)
            })
          }), [uu, Yz, bu, Bz, Iz]),
          Zu = (0, Ez.useCallback)((zz => uz => {
            if (0 !== uz.button) return;
            uz.stopPropagation(), Sz(null), uu(), dz(), Gz.current = {
              pointerId: uz.pointerId,
              track: zz
            }, uz.currentTarget.setPointerCapture(uz.pointerId);
            const bz = "detail" === zz ? bu(uz.clientX) : Eu(uz.clientX);
            kz(bz, !1)
          }), [uu, dz, kz, bu, Eu]),
          Ru = (0, Ez.useCallback)((zz => {
            const uz = Gz.current;
            if (!uz || uz.pointerId !== zz.pointerId) return;
            zz.stopPropagation();
            const bz = "detail" === uz.track ? bu(zz.clientX) : Eu(zz.clientX);
            kz(bz, !1)
          }), [kz, bu, Eu]),
          Ku = (0, Ez.useCallback)((zz => {
            const uz = Gz.current;
            uz && uz.pointerId === zz.pointerId && (zz.stopPropagation(), Gz.current = null, zz.currentTarget.releasePointerCapture(zz.pointerId), zu())
          }), [zu]),
          wu = (0, Ez.useCallback)((zz => {
            0 === zz.button && (uu(), dz(), az.current = {
              pointerId: zz.pointerId
            }, zz.currentTarget.setPointerCapture(zz.pointerId), kz(Eu(zz.clientX), !0))
          }), [uu, dz, kz, Eu]),
          Xu = (0, Ez.useCallback)((zz => {
            const uz = az.current;
            uz && uz.pointerId === zz.pointerId && kz(Eu(zz.clientX), !0)
          }), [kz, Eu]),
          fu = (0, Ez.useCallback)((zz => {
            const uz = az.current;
            uz && uz.pointerId === zz.pointerId && (az.current = null, zz.currentTarget.releasePointerCapture(zz.pointerId), zu())
          }), [zu]),
          su = (0, Ez.useCallback)((zz => {
            const uz = Math.max(1, zz.endTick - zz.startTick + 1),
              bz = nz + 1,
              Ez = bz / uz,
              iz = Math.max(1, Math.ceil(bz / Ez)),
              lz = zz.startTick + Math.floor((iz - 1) / 2);
            Az.current = !0, Tz.current = Ez, hz(li(lz, nz)), Nz(Ez), uu()
          }), [uu, nz, Nz]),
          ru = (0, Ez.useCallback)((zz => {
            Xz(zz), uu()
          }), [uu, Xz]),
          ou = (0, Ez.useCallback)((zz => {
            fz(zz), uu()
          }), [uu, fz]),
          Nu = (0, Ez.useCallback)((zz => {
            sz(zz), uu()
          }), [uu, sz]),
          vu = (0, Ez.useCallback)((() => {
            rz(), uu()
          }), [uu, rz]);
        (0, Ez.useEffect)((() => {
          const zz = vz.current;
          if (!zz) return () => {};
          const uz = uz => {
            uz.preventDefault();
            const bz = li(ti(Fi(uz.clientX, zz), Iz, Bz), nz),
              Ez = uz.deltaY < 0 ? "in" : "out",
              iz = di(oz, Ez);
            iz !== oz && (Jz.current = !0, hz(bz), Nz(iz))
          };
          return zz.addEventListener("wheel", uz, {
            passive: !1
          }), () => {
            zz.removeEventListener("wheel", uz)
          }
        }), [nz, Nz, Bz, Iz, oz]);
        const xu = Mi(jz, Iz, Bz),
          Ju = Zi(jz, nz),
          Au = Zi(Iz, nz),
          Tu = nz > 0 ? Zi(Bz, nz) : 100,
          Lu = null !== Oz,
          Pu = null !== (uz = null === Oz || void 0 === Oz ? void 0 : Oz.inTick) && void 0 !== uz ? uz : 0,
          Gu = null !== (bz = null === Oz || void 0 === Oz ? void 0 : Oz.outTick) && void 0 !== bz ? bz : nz,
          au = Zi(Pu, nz),
          Vu = Math.max(Zi(Gu, nz) - au, 0),
          mu = Mi(Math.max(Pu, Iz), Iz, Bz),
          qu = Mi(Math.min(Gu, Bz), Iz, Bz),
          hu = Math.max(qu - mu, 0),
          Uu = Lu && Gu >= Iz && Pu <= Bz,
          cu = Mi(Pu, Iz, Bz),
          gu = Mi(Gu, Iz, Bz),
          Su = Lu && Pu >= Iz && Pu <= Bz,
          yu = Lu && Gu >= Iz && Gu <= Bz,
          Du = Zi(Pu, nz),
          Qu = Zi(Gu, nz),
          Wu = null !== yz && void 0 !== yz ? yz : Qz ? {
            startTick: Qz.startTick,
            endTick: Qz.endTick
          } : null,
          eu = Wu ? Mi(Math.max(Wu.startTick, Iz), Iz, Bz) : 0,
          ju = Wu ? Mi(Math.min(Wu.endTick, Bz), Iz, Bz) : 0,
          Iu = Math.max(ju - eu, 0),
          Bu = null !== Wu && Wu.endTick >= Iz && Wu.startTick <= Bz,
          Cu = (0, Ez.useMemo)((() => Ri(0, nz, Mz)), [nz, Mz]),
          Yu = (0, Ez.useMemo)((() => Ri(Iz, Bz, Mz)), [Iz, Bz, Mz]),
          ku = (0, Ez.useMemo)((() => nu.filter((zz => zz >= Iz && zz <= Bz))), [nu, Bz, Iz]),
          zb = (0, Ez.useCallback)(((zz, uz, bz) => {
            const Ez = "detail" === uz ? Mi(zz, Iz, Bz) : Zi(zz, nz),
              lz = null !== Uz && bz === Uz.fromTick,
              Mz = null !== gz && gz.sd === bz;
            return (0, Hz.jsx)("button", {
              type: "button",
              className: iz()("ReplayTimelineCameraKeyframeMarker", "detail" === uz ? "Detail" : "Overview", {
                Dragging: lz,
                Selected: Mz
              }),
              style: {
                left: `${Ez}%`
              },
              onPointerDown: tu(bz, uz),
              onPointerMove: Hu,
              onPointerUp: Ou,
              onPointerCancel: Ou,
              "aria-label": `Camera keyframe at tick ${bz}`
            }, `cam-${uz}-${bz}`)
          }), [tu, gz, Ou, Uz, nz, Hu, Bz, Iz]),
          ub = (0, Ez.useCallback)((zz => Uz && zz === Uz.previewTick ? Uz.fromTick : zz), [Uz]);
        return nz <= 0 ? null : (0, Hz.jsxs)("div", {
          className: "ReplayTimeline",
          children: [gz && iu && (0, ni.createPortal)((0, Hz.jsx)(ai, {
            keyframe: iu,
            anchor: gz,
            hasOutgoingSegment: lu,
            onClose: () => {
              Sz(null)
            },
            onApply: Rz,
            onDelete: Kz,
            onUseCurrentCamera: wz
          }), document.body), Qz && (0, ni.createPortal)((0, Hz.jsx)(Vi, {
            anchor: Qz,
            hasPlaybackMark: Lu,
            onClose: uu,
            onMark: ru,
            onZoom: su,
            onCrop: ou,
            onDeleteKeyframes: Nu,
            onClearMark: vu
          }), document.body), (0, Hz.jsxs)("div", {
            className: iz()("ReplayTimelineOverviewSection", {
              Hidden: oz <= 1
            }),
            children: [(0, Hz.jsx)("div", {
              className: "ReplayTimelineSectionLabel",
              children: "Overview"
            }), (0, Hz.jsxs)("div", {
              ref: xz,
              className: "ReplayTimelineOverviewTrack",
              onPointerDown: wu,
              onPointerMove: Xu,
              onPointerUp: fu,
              onPointerCancel: fu,
              role: "slider",
              "aria-label": "Recording overview",
              "aria-valuemin": 0,
              "aria-valuemax": nz,
              "aria-valuenow": jz,
              tabIndex: 0,
              children: [Cu.map((zz => {
                const uz = Zi(zz, nz);
                return (0, Hz.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Overview",
                  style: {
                    left: `${uz}%`
                  }
                }, zz)
              })), Lu && (0, Hz.jsxs)(Hz.Fragment, {
                children: [(0, Hz.jsx)("div", {
                  className: "ReplayTimelineMarkRegion Overview",
                  style: {
                    left: `${au}%`,
                    width: `${Vu}%`
                  }
                }), (0, Hz.jsx)("div", {
                  className: "ReplayTimelineMarkMarker In Overview",
                  style: {
                    left: `${Du}%`
                  },
                  "aria-hidden": !0
                }), (0, Hz.jsx)("div", {
                  className: "ReplayTimelineMarkMarker Out Overview",
                  style: {
                    left: `${Qu}%`
                  },
                  "aria-hidden": !0
                })]
              }), nu.map((zz => zb(zz, "overview", ub(zz)))), (0, Hz.jsx)("div", {
                className: "ReplayTimelineViewport",
                style: {
                  left: `${Au}%`,
                  width: `${Math.max(Tu-Au,.5)}%`
                }
              }), (0, Hz.jsx)("button", {
                type: "button",
                className: iz()("ReplayTimelinePlayhead Overview", {
                  Scrubbing: null !== Vz
                }),
                style: {
                  left: `${Ju}%`
                },
                onPointerDown: Zu("overview"),
                onPointerMove: Ru,
                onPointerUp: Ku,
                onPointerCancel: Ku,
                "aria-label": "Scrub playhead"
              })]
            })]
          }), (0, Hz.jsxs)("div", {
            className: "ReplayTimelineDetailSection",
            children: [(0, Hz.jsxs)("div", {
              className: "ReplayTimelineDetailHeader",
              children: [(0, Hz.jsx)("span", {
                className: "ReplayTimelineSectionLabel",
                children: "Timeline"
              }), (0, Hz.jsxs)("span", {
                className: "ReplayTimelineDetailRange",
                children: [Hi(Iz, Mz), " \u2013 ", Hi(Bz, Mz), oz > 1 && (0, Hz.jsx)("span", {
                  className: "ReplayTimelineZoomBadge",
                  children: Oi(oz)
                })]
              })]
            }), (0, Hz.jsxs)("div", {
              ref: vz,
              className: "ReplayTimelineDetailTrack",
              onPointerDown: pu,
              onPointerMove: du,
              onPointerUp: Fu,
              onPointerCancel: Fu,
              role: "slider",
              "aria-label": "Recording timeline",
              "aria-valuemin": Iz,
              "aria-valuemax": Bz,
              "aria-valuenow": jz,
              tabIndex: 0,
              children: [Yu.map((zz => {
                const uz = Mi(zz, Iz, Bz);
                return (0, Hz.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Detail",
                  style: {
                    left: `${uz}%`
                  }
                }, zz)
              })), Uu && (0, Hz.jsx)("div", {
                className: "ReplayTimelineMarkRegion Detail",
                style: {
                  left: `${mu}%`,
                  width: `${hu}%`
                }
              }), Su && (0, Hz.jsx)("div", {
                className: "ReplayTimelineMarkMarker In Detail",
                style: {
                  left: `${cu}%`
                },
                "aria-label": `Play range start at tick ${Pu}`
              }), yu && (0, Hz.jsx)("div", {
                className: "ReplayTimelineMarkMarker Out Detail",
                style: {
                  left: `${gu}%`
                },
                "aria-label": `Play range end at tick ${Gu}`
              }), Bu && Wu && (0, Hz.jsx)("div", {
                className: "ReplayTimelineSelectionRegion Detail",
                style: {
                  left: `${eu}%`,
                  width: `${Iu}%`
                }
              }), ku.map((zz => zb(zz, "detail", ub(zz)))), (0, Hz.jsx)("button", {
                type: "button",
                className: iz()("ReplayTimelinePlayhead Detail", {
                  Scrubbing: null !== Vz
                }),
                style: {
                  left: `${xu}%`
                },
                onPointerDown: Zu("detail"),
                onPointerMove: Ru,
                onPointerUp: Ku,
                onPointerCancel: Ku,
                "aria-label": "Scrub playhead"
              })]
            }), (0, Hz.jsxs)("div", {
              className: "ReplayTimelineWheelHint",
              children: [(0, Hz.jsx)("span", {
                className: "Select",
                children: "Drag timeline to select"
              }), " \xb7 Scroll to zoom \xb7 Drag playhead to scrub"]
            })]
          })]
        })
      })),
      qi = (0, Ez.memo)((function(zz) {
        let {
          enabled: uz
        } = zz;
        const bz = (0, Ez.useRef)(!1),
          nz = (0, Ez.useRef)(null),
          [lz, Mz] = (0, Ez.useState)(!1),
          tz = (0, Ez.useCallback)((zz => {
            uz && 0 === zz.button && (bz.current = !0, Mz(!0), nz.current = {
              x: zz.clientX,
              y: zz.clientY
            }, zz.currentTarget.setPointerCapture(zz.pointerId))
          }), [uz]),
          Oz = (0, Ez.useCallback)((zz => {
            if (!uz || !bz.current || !nz.current) return;
            const Ez = zz.clientX - nz.current.x,
              iz = zz.clientY - nz.current.y;
            nz.current = {
              x: zz.clientX,
              y: zz.clientY
            }, dz.gameBridge.send("dragReplayCamera", {
              dx: Ez,
              dy: iz
            })
          }), [uz]),
          pz = (0, Ez.useCallback)((zz => {
            bz.current && (bz.current = !1, Mz(!1), nz.current = null, zz.currentTarget.releasePointerCapture(zz.pointerId))
          }), []);
        return uz ? (0, Hz.jsx)("div", {
          className: iz()("ReplayViewerCameraDragSurface", {
            Dragging: lz
          }),
          onPointerDown: tz,
          onPointerMove: Oz,
          onPointerUp: pz,
          onPointerCancel: pz,
          "aria-hidden": !0
        }) : null
      }));
    var Ui = bz(36435),
      ci = bz(36441);
    const gi = (0, Ez.memo)((function(zz) {
        var uz, bz, nz;
        let {
          anchorRect: lz,
          anchorRef: tz,
          onClose: Oz
        } = zz;
        const pz = (0, Ez.useRef)(null),
          dz = Li(pz, lz),
          [Fz, Zz] = (0, Ez.useState)(ci.e),
          Rz = (0, Ez.useMemo)((() => Object.values(Fz).every((zz => zz))), [Fz]);
        (0, Mz.g)("replayViewer|uiVisibilityChanged", (() => {
          Zz((0, ci.e)())
        })), Pi(pz, Oz, tz);
        const Kz = (0, Ez.useCallback)(((zz, uz) => {
            (0, ci.m)(zz, uz), Zz((0, ci.e)())
          }), []),
          wz = (0, Ez.useCallback)((zz => {
            for (const {
                group: uz
              }
              of Ui.g)(0, ci.m)(uz, zz);
            Zz((0, ci.e)())
          }), []),
          Xz = Ti(lz);
        return (0, ni.createPortal)((0, Hz.jsxs)("div", {
          ref: pz,
          className: iz()("ReplayViewerPopover ReplayUiVisibilityPopover", {
            Below: null !== (uz = null === dz || void 0 === dz ? void 0 : dz.placeBelow) && void 0 !== uz && uz,
            Positioned: null !== dz
          }),
          style: {
            left: `${null!==(bz=null===dz||void 0===dz?void 0:dz.left)&&void 0!==bz?bz:Xz.left}px`,
            top: `${null!==(nz=null===dz||void 0===dz?void 0:dz.top)&&void 0!==nz?nz:Xz.top}px`
          },
          onPointerDown: zz => {
            zz.stopPropagation()
          },
          children: [(0, Hz.jsx)("div", {
            className: "ReplayUiVisibilityPopoverHeader",
            children: (0, Hz.jsx)("span", {
              className: "ReplayUiVisibilityPopoverTitle",
              children: "UI visibility"
            })
          }), (0, Hz.jsxs)("div", {
            className: "ReplayUiVisibilityPopoverChecks",
            children: [(0, Hz.jsxs)("div", {
              className: "ReplayUiVisibilityPopoverCheck",
              children: [(0, Hz.jsx)("input", {
                type: "checkbox",
                checked: Rz,
                onChange: zz => {
                  wz(zz.target.checked)
                }
              }), (0, Hz.jsx)("span", {
                children: "SELECT ALL"
              })]
            }), Ui.g.map((zz => {
              let {
                group: uz,
                label: bz
              } = zz;
              return (0, Hz.jsxs)("label", {
                className: "ReplayUiVisibilityPopoverCheck",
                children: [(0, Hz.jsx)("input", {
                  type: "checkbox",
                  checked: Fz[uz],
                  onChange: zz => {
                    Kz(uz, zz.target.checked)
                  }
                }), (0, Hz.jsx)("span", {
                  children: bz
                })]
              }, uz)
            }))]
          })]
        }), document.body)
      })),
      Si = (0, Ez.memo)((function(zz) {
        let {
          disabled: uz
        } = zz;
        const bz = (0, Ez.useRef)(null),
          [nz, iz] = (0, Ez.useState)(!1),
          [lz, Mz] = (0, Ez.useState)(null),
          tz = (0, Ez.useCallback)((() => {
            bz.current && (Mz(bz.current.getBoundingClientRect()), iz((zz => !zz)))
          }), []),
          Oz = (0, Ez.useCallback)((() => {
            iz(!1)
          }), []);
        return (0, Hz.jsxs)(Hz.Fragment, {
          children: [(0, Hz.jsx)("div", {
            ref: bz,
            children: (0, Hz.jsx)(Jb.f, {
              className: "ReplayViewerActionButton",
              onClick: tz,
              disabled: uz,
              children: (0, Hz.jsx)("span", {
                children: "Hide UI elements"
              })
            })
          }), nz && lz && (0, Hz.jsx)(gi, {
            anchorRect: lz,
            anchorRef: bz,
            onClose: Oz
          })]
        })
      })),
      yi = ["freeCamUp", "freeCamDown"];

    function Di(zz, uz) {
      dz.gameBridge.send("holdReplayFreecamVertical", {
        action: zz,
        yM: uz
      })
    }
    const Qi = (0, Ez.memo)((function() {
        (0, Ez.useEffect)((() => () => {
          ! function() {
            dz.gameBridge.send("moveReplayFreecam", null);
            for (const zz of yi) Di(zz, !1)
          }()
        }), []);
        const zz = (0, Ez.useCallback)((zz => {
            dz.gameBridge.send("moveReplayFreecam", zz)
          }), []),
          uz = (0, Ez.useCallback)((zz => ({
            onTouchStart: uz => {
              uz.preventDefault(), uz.stopPropagation(), Di(zz, !0)
            },
            onTouchEnd: uz => {
              uz.preventDefault(), uz.stopPropagation(), Di(zz, !1)
            },
            onTouchCancel: uz => {
              uz.preventDefault(), uz.stopPropagation(), Di(zz, !1)
            }
          })), []);
        return (0, Hz.jsxs)("div", {
          className: "ReplayFreecamTouchControls",
          children: [(0, Hz.jsx)("div", {
            className: "ReplayFreecamJoystickWrap",
            children: (0, Hz.jsx)(vu, {
              onMove: zz,
              mode: "pinned"
            })
          }), (0, Hz.jsxs)("div", {
            className: "ReplayFreecamVerticalButtons",
            children: [(0, Hz.jsx)("button", {
              type: "button",
              className: "ReplayFreecamVerticalButton",
              "aria-label": "Freecam up",
              ...uz("freeCamUp"),
              children: (0, Hz.jsx)(hz.c, {
                name: "arrow-up",
                className: "ReplayFreecamVerticalIcon"
              })
            }), (0, Hz.jsx)("button", {
              type: "button",
              className: "ReplayFreecamVerticalButton",
              "aria-label": "Freecam down",
              ...uz("freeCamDown"),
              children: (0, Hz.jsx)(hz.c, {
                name: "angle-down",
                className: "ReplayFreecamVerticalIcon"
              })
            })]
          })]
        })
      })),
      Wi = [],
      ei = (0, Ez.memo)((function() {
        const zz = (0, jz.j)();
        return (0, Nz.d)("replayViewerRequested", (zz => {
          (0, jz.i)("toggle" === zz ? !(0, jz.f)() : "open" === zz)
        })), zz ? (0, Hz.jsx)(ji, {}) : null
      })),
      ji = (0, Ez.memo)((function() {
        var zz, uz, bz, nz, lz, Mz, tz, Oz, pz, Fz, Zz, Rz;
        const Kz = Ez.useRef(null),
          [wz, Xz] = (0, Ez.useState)(null),
          [fz, sz] = (0, Ez.useState)(1),
          [rz, oz] = (0, Ez.useState)(null),
          [Jz, Az] = (0, Ez.useState)(!1),
          {
            isTouchScreen: Tz
          } = (0, vz.m)(["isTouchScreen"]),
          Lz = (0, Nz.h)("replay"),
          Pz = (0, Nz.h)("replayEdits"),
          Gz = null !== Lz,
          az = null !== (zz = null === Lz || void 0 === Lz ? void 0 : Lz.sd) && void 0 !== zz ? zz : 0,
          Vz = null !== (uz = null === Lz || void 0 === Lz ? void 0 : Lz.totalTicks) && void 0 !== uz ? uz : 0,
          mz = Math.max(0, Vz - 1),
          Uz = null !== (bz = null === Lz || void 0 === Lz ? void 0 : Lz.playing) && void 0 !== bz && bz,
          cz = null !== (nz = null === Lz || void 0 === Lz ? void 0 : Lz.speed) && void 0 !== nz ? nz : 1,
          gz = null !== (lz = null === Lz || void 0 === Lz ? void 0 : Lz.pT) && void 0 !== lz ? lz : 20,
          Sz = null !== rz && void 0 !== rz ? rz : az,
          yz = null !== (Mz = null === Lz || void 0 === Lz ? void 0 : Lz.freecam) && void 0 !== Mz && Mz,
          Dz = null !== (tz = null === Lz || void 0 === Lz ? void 0 : Lz.cameraMode) && void 0 !== tz ? tz : "recording",
          Qz = null !== (Oz = null === Pz || void 0 === Pz ? void 0 : Pz.cameraKeyframes) && void 0 !== Oz ? Oz : Wi,
          Wz = null !== (pz = null === Pz || void 0 === Pz ? void 0 : Pz.playbackMark) && void 0 !== pz ? pz : null,
          ez = null !== (Fz = null === Pz || void 0 === Pz ? void 0 : Pz.fileName) && void 0 !== Fz ? Fz : null,
          Iz = null !== (Zz = null === Pz || void 0 === Pz ? void 0 : Pz.unsavedChanges) && void 0 !== Zz && Zz,
          Bz = null !== (Rz = null === Pz || void 0 === Pz ? void 0 : Pz.suggestSaveAs) && void 0 !== Rz && Rz,
          Cz = (0, Nz.h)("replayVideoExporting"),
          Yz = !Cz && Gz && ("freecam" === Dz || ("recording" === Dz || "keyframe" === Dz) && !Uz),
          kz = Tz && Gz && "freecam" === Dz && !Cz && !Jz;
        (0, Ei.e)(!0, !0, "ReplayViewerOverlay"), (0, Ez.useEffect)((() => {
          dz.gameBridge.send("syncReplayCameraMode", null)
        }), [yz]);
        const zu = (0, Ez.useCallback)(((zz, uz) => {
            dz.gameBridge.send("seekReplay", {
              sd: zz,
              ignorePlaybackMark: null === uz || void 0 === uz ? void 0 : uz.ignorePlaybackMark
            })
          }), []),
          uu = (0, Ez.useCallback)((() => {
            dz.gameBridge.send("setReplayPlaying", !1)
          }), []),
          bu = (0, Ez.useCallback)(((zz, uz) => {
            dz.gameBridge.send("moveReplayCameraKeyframe", {
              from: zz,
              to: uz
            })
          }), []),
          Eu = (0, Ez.useCallback)((zz => {
            dz.gameBridge.send("setReplayCameraKeyframe", zz)
          }), []),
          nu = (0, Ez.useCallback)((zz => {
            dz.gameBridge.send("deleteReplayCameraKeyframes", {
              start: zz,
              end: zz
            })
          }), []),
          iu = (0, Ez.useCallback)((zz => {
            dz.gameBridge.send("deleteReplayCameraKeyframes", {
              start: zz.startTick,
              end: zz.endTick
            })
          }), []),
          lu = (0, Ez.useCallback)((() => dz.gameBridge.lookup("replayCamera", null)), []),
          Mu = (0, Ez.useCallback)((zz => {
            oz(zz)
          }), []),
          tu = (0, Ez.useCallback)((zz => {
            dz.gameBridge.send("setReplayPlaybackMark", {
              inTick: zz.startTick,
              outTick: zz.endTick
            })
          }), []),
          Hu = (0, Ez.useCallback)((() => {
            dz.gameBridge.send("setReplayPlaybackMark", null)
          }), []),
          Ou = (0, Ez.useCallback)((zz => {
            const uz = dz.gameBridge.latest("replay");
            if (null === uz || zz.endTick <= zz.startTick) return;
            const bz = zz.startTick,
              Ez = zz.endTick;
            BE.NotificationProvider.showPromptPopup({
              title: "Crop recording to the selected range? This cannot be undone.",
              confirmText: "Crop",
              destructive: !0,
              cancelText: "Cancel"
            }).getResult().then((zz => {
              var nz;
              if (!0 !== zz) return;
              if ((null === (nz = dz.gameBridge.latest("replay")) || void 0 === nz ? void 0 : nz.id) !== uz.id) return;
              dz.gameBridge.send("cropReplay", {
                start: bz,
                end: Ez
              }) && (oz(null), sz(1))
            }))
          }), []),
          pu = (0, Ez.useCallback)(((zz, uz) => {
            Xz(null), sz(1), oz(null), (0, jn.e)().open(zz, uz).catch((zz => {
              console.error(zz), Xz(zz instanceof Error ? zz.message : "Failed to parse recording")
            }))
          }), []),
          du = (0, Ez.useCallback)(((zz, uz) => {
            null !== dz.gameBridge.latest("connectedGame").websocketUrl ? BE.NotificationProvider.showPromptPopup({
              title: "Leave current game and play recording?",
              confirmText: "Yes",
              cancelText: "No"
            }).getResult().then((bz => {
              !0 === bz && pu(zz, uz)
            })) : pu(zz, uz)
          }), [pu]),
          Fu = (0, Ez.useCallback)((zz => {
            var uz;
            const bz = null === (uz = zz.target.files) || void 0 === uz ? void 0 : uz[0];
            if (zz.target.value = "", !bz) return;
            const Ez = new FileReader;
            Ez.onload = () => {
              du(new Uint8Array(Ez.result), {
                fileName: bz.name
              })
            }, Ez.onerror = () => {
              Xz("Failed to read file")
            }, Ez.readAsArrayBuffer(bz)
          }), [du]),
          Zu = (0, Ez.useCallback)((() => {
            const zz = () => {
              var zz;
              null === (zz = Kz.current) || void 0 === zz || zz.click()
            };
            (0, Cn.j)() ? (0, Cn.e)().then((zz => {
              zz && du(zz.bytes, {
                fileHandle: zz.handle
              })
            })).catch((uz => {
              console.error(uz), zz()
            })): zz()
          }), [du]),
          Ru = (0, Ez.useCallback)((async function() {
            let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            let uz;
            try {
              uz = await bi(zz, {
                files: (0, jn.e)(),
                pickerSupported: Cn.j,
                chooseFile: Cn.d,
                write: Cn.k,
                download: Bn.h,
                onFallback: console.error
              })
            } catch (bz) {
              return void(zz => {
                console.error(zz), BE.NotificationProvider.showAlertPopup({
                  title: "Failed to save recording",
                  subtitle: kn(zz),
                  confirmText: "OK"
                })
              })(bz)
            }
            "written" !== uz && "downloaded" !== uz || (() => {
              const zz = BE.NotificationProvider.showAlertPopup({
                title: "Recording saved",
                disableBackground: !0
              });
              setTimeout((() => {
                zz.tearDownNotification()
              }), 1e3)
            })()
          }), []),
          Ku = (0, Ez.useCallback)((zz => {
            dz.gameBridge.send("replayAction", zz)
          }), []),
          wu = (0, Ez.useCallback)((zz => {
            sz((uz => di(uz, zz)))
          }), []),
          Xu = (0, Ez.useCallback)((zz => {
            if (!dz.gameBridge.latest("replayVideoExporting")) switch (zz) {
              case "replayLoad":
                Zu();
                break;
              case "replaySave":
                Ru(!1);
                break;
              case "replaySaveAs":
                Ru(!0);
                break;
              case "replayTimelineZoomIn":
                wu("in");
                break;
              case "replayTimelineZoomOut":
                wu("out")
            }
          }), [Zu, Ru, wu]);
        (0, Nz.d)("replayUiActionRequested", Xu);
        const fu = (0, Ez.useCallback)((zz => {
            dz.gameBridge.send("setReplayCameraMode", zz)
          }), []),
          su = Gz ? Jb.f : Jb.q,
          ru = Iz && !Bz ? Jb.q : Jb.f,
          ou = Iz && Bz ? Jb.q : Jb.f;
        return (0, Hz.jsxs)("div", {
          className: "ReplayViewerOverlay",
          children: [(0, Hz.jsx)(qi, {
            enabled: Yz
          }), kz && (0, Hz.jsx)(Qi, {}), (0, Hz.jsx)("input", {
            ref: Kz,
            type: "file",
            accept: Bn.c,
            className: "ReplayViewerFileInput",
            onChange: Fu
          }), (0, Hz.jsxs)("div", {
            className: iz()("ReplayViewerBar", {
              Collapsed: Jz
            }),
            children: [(0, Hz.jsx)("button", {
              type: "button",
              className: "ReplayViewerCollapseTab",
              onClick: () => {
                Jz ? Az(!1) : Gz ? Az(!0) : (0, jz.e)()
              },
              "aria-expanded": !Jz,
              "aria-label": Jz ? "Expand replay viewer" : "Collapse replay viewer",
              children: (0, Hz.jsx)(hz.c, {
                name: Jz ? "angle-up" : "angle-down"
              })
            }), !Jz && (0, Hz.jsxs)("div", {
              className: "ReplayViewerBarBody",
              children: [Gz && Vz > 0 && (0, Hz.jsx)(mi, {
                maxTick: mz,
                displayTick: Sz,
                pT: gz,
                cameraKeyframes: Qz,
                playbackMark: Wz,
                onSeek: zu,
                onPause: uu,
                onScrubTickChange: Mu,
                onMoveCameraKeyframe: bu,
                onUpdateCameraKeyframe: Eu,
                onDeleteCameraKeyframe: nu,
                onUseCurrentCamera: lu,
                onMarkRange: tu,
                onCropRange: Ou,
                onDeleteKeyframesInRange: iu,
                onClearMark: Hu,
                zoomLevel: fz,
                onZoomLevelChange: sz
              }, mz), (0, Hz.jsxs)("div", {
                className: "ReplayViewerControls",
                children: [(0, Hz.jsxs)("div", {
                  className: "ReplayViewerControlsLeftSide",
                  children: [(0, Hz.jsxs)("div", {
                    className: "ReplayViewerControlsGroup FileGroup",
                    children: [Gz && (0, Hz.jsxs)("div", {
                      className: "ReplayViewerFileName",
                      children: [null !== ez && void 0 !== ez ? ez : "Unsaved recording", Iz ? " *" : ""]
                    }), (0, Hz.jsxs)(su, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        Xu("replayLoad")
                      },
                      children: [(0, Hz.jsx)(xz.e, {
                        noaAction: "replayLoad",
                        padHidesKey: !0
                      }), (0, Hz.jsx)("span", {
                        children: " Load "
                      })]
                    }), (0, Hz.jsxs)(Jb.f, {
                      className: "ReplayViewerActionButton",
                      onClick: jz.e,
                      children: [(0, Hz.jsx)(xz.e, {
                        noaAction: "replayViewerOpen",
                        padHidesKey: !0
                      }), (0, Hz.jsx)("span", {
                        children: " Hide "
                      })]
                    }), (0, Hz.jsxs)(ru, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        Xu("replaySave")
                      },
                      disabled: !Gz,
                      children: [(0, Hz.jsx)(xz.e, {
                        noaAction: "replaySave",
                        padHidesKey: !0
                      }), (0, Hz.jsx)("span", {
                        children: " Save "
                      })]
                    }), (0, Hz.jsxs)(Jb.f, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        dz.gameBridge.send("leaveGame", {
                          reloadPath: "/"
                        })
                      },
                      disabled: !Gz,
                      children: [(0, Hz.jsx)(xz.e, {
                        noaAction: "replayExit",
                        padHidesKey: !0
                      }), (0, Hz.jsx)("span", {
                        children: " Exit "
                      })]
                    }), (0, Hz.jsxs)(ou, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        Xu("replaySaveAs")
                      },
                      disabled: !Gz,
                      children: [(0, Hz.jsx)(xz.e, {
                        noaAction: "replaySaveAs",
                        padHidesKey: !0
                      }), (0, Hz.jsx)("span", {
                        children: " Save As "
                      })]
                    }), (0, Hz.jsxs)(Jb.f, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        dz.gameBridge.send("exportReplayVideo", null)
                      },
                      disabled: !Gz || 0 === Vz || Cz,
                      children: [(0, Hz.jsx)(xz.e, {
                        noaAction: "replayExportVideo",
                        padHidesKey: !0
                      }), (0, Hz.jsx)("span", {
                        children: " Export "
                      })]
                    })]
                  }), (0, Hz.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, Hz.jsxs)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: [(0, Hz.jsx)("span", {
                        children: " Camera Mode "
                      }), (0, Hz.jsx)(xz.e, {
                        noaAction: "replayChangeCameraMode",
                        padHidesKey: !0
                      })]
                    }), (0, Hz.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody CameraModes",
                      children: [(0, Hz.jsx)(qz.f, {
                        tooltipInner: (0, Hz.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Replicate how the camera was set when recorded."
                        }),
                        children: (0, Hz.jsxs)(Jb.V, {
                          className: "ReplayViewerModeButton",
                          active: "recording" === Dz,
                          onClick: () => {
                            fu("recording")
                          },
                          disabled: !Gz,
                          children: ["Recorded ", (0, Hz.jsx)(hz.c, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, Hz.jsx)(qz.f, {
                        tooltipInner: (0, Hz.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Move the camera freely around."
                        }),
                        children: (0, Hz.jsxs)(Jb.V, {
                          className: "ReplayViewerModeButton",
                          active: "freecam" === Dz,
                          onClick: () => {
                            fu("freecam")
                          },
                          disabled: !Gz,
                          children: ["Free ", (0, Hz.jsx)(hz.c, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, Hz.jsx)(qz.f, {
                        tooltipInner: (0, Hz.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Display the replay in real time using keyframes."
                        }),
                        children: (0, Hz.jsxs)(Jb.V, {
                          className: "ReplayViewerModeButton",
                          active: "keyframe" === Dz,
                          onClick: () => {
                            fu("keyframe")
                          },
                          disabled: !Gz,
                          children: ["Preview ", (0, Hz.jsx)(hz.c, {
                            name: "circle-info"
                          })]
                        })
                      })]
                    })]
                  })]
                }), (0, Hz.jsxs)("div", {
                  className: "ReplayViewerControlsGroup TimeGroup",
                  children: [(0, Hz.jsxs)("div", {
                    className: "ReplayViewerTimecodeContainer",
                    children: [(0, Hz.jsxs)("span", {
                      className: "ReplayViewerTimecode",
                      children: [(0, Hz.jsx)("span", {
                        className: "ReplayViewerTimecodeNow",
                        children: Hi(Sz, gz)
                      }), (0, Hz.jsx)("span", {
                        className: "ReplayViewerTimecodeDivider",
                        children: "/"
                      }), (0, Hz.jsx)("span", {
                        className: "ReplayViewerTimecodeTotal",
                        children: Hi(mz, gz)
                      })]
                    }), (0, Hz.jsxs)("span", {
                      className: "ReplayViewerTickLabel",
                      children: ["Tick ", Sz, " / ", mz]
                    })]
                  }), (0, Hz.jsxs)("div", {
                    className: "ReplayViewerTimecodeControls",
                    children: [(0, Hz.jsxs)(Jb.f, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        Ku("replaySkipBack")
                      },
                      disabled: !Gz,
                      children: [(0, Hz.jsxs)("span", {
                        children: [" ", (0, Hz.jsx)(hz.c, {
                          name: "clock-rotate-left"
                        }), " 1s"]
                      }), (0, Hz.jsx)(xz.e, {
                        noaAction: "replaySkipBack",
                        padHidesKey: !0
                      })]
                    }), (0, Hz.jsxs)(Jb.q, {
                      className: "ReplayViewerMediaButton PlayButton",
                      onClick: () => {
                        dz.gameBridge.send("setReplayPlaying", !Uz)
                      },
                      disabled: !Gz,
                      children: [(0, Hz.jsxs)("span", {
                        children: [" ", Uz ? (0, Hz.jsx)(hz.c, {
                          name: "pause"
                        }) : (0, Hz.jsx)(hz.c, {
                          name: "play"
                        }), " "]
                      }), (0, Hz.jsx)(xz.e, {
                        noaAction: "replayPlayPause",
                        padHidesKey: !0
                      })]
                    }), (0, Hz.jsxs)(Jb.f, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        Ku("replaySkipForward")
                      },
                      disabled: !Gz,
                      children: [(0, Hz.jsxs)("span", {
                        children: [" ", (0, Hz.jsx)(hz.c, {
                          name: "rotate-forward"
                        }), " 1s"]
                      }), (0, Hz.jsx)(xz.e, {
                        noaAction: "replaySkipForward",
                        padHidesKey: !0
                      })]
                    })]
                  })]
                }), (0, Hz.jsxs)("div", {
                  className: "ReplayViewerControlsRightSide",
                  children: [(0, Hz.jsxs)("div", {
                    className: "ReplayViewerControlsGroup RecordKeyframeGroup",
                    children: [(0, Hz.jsxs)(Jb.q, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        Ku("replayRecordKeyframe")
                      },
                      disabled: !Gz,
                      children: [(0, Hz.jsx)(xz.e, {
                        noaAction: "replayRecordKeyframe",
                        padHidesKey: !0
                      }), (0, Hz.jsx)("span", {
                        children: " Record keyframe "
                      })]
                    }), (0, Hz.jsx)(Si, {
                      disabled: !Gz
                    }), Wz && (0, Hz.jsx)(Jb.V, {
                      className: "ReplayViewerActionButton",
                      onClick: Hu,
                      disabled: !Gz,
                      children: (0, Hz.jsx)("span", {
                        children: " Clear range "
                      })
                    })]
                  }), (0, Hz.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, Hz.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Speed"
                    }), (0, Hz.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, Hz.jsx)(Jb.f, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          Ku("replaySpeedDown")
                        },
                        disabled: !Gz || (0, In.h)(cz),
                        children: (0, Hz.jsx)("span", {
                          children: " \u2212 "
                        })
                      }), (0, Hz.jsxs)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: [cz, "\xd7"]
                      }), (0, Hz.jsx)(Jb.f, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          Ku("replaySpeedUp")
                        },
                        disabled: !Gz || (0, In.d)(cz),
                        children: (0, Hz.jsx)("span", {
                          children: " + "
                        })
                      })]
                    })]
                  }), (0, Hz.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, Hz.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Timeline Zoom"
                    }), (0, Hz.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, Hz.jsxs)(Jb.f, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          Xu("replayTimelineZoomOut")
                        },
                        disabled: !Gz || fz <= ii[0],
                        children: [(0, Hz.jsx)("span", {
                          children: " \u2212 "
                        }), (0, Hz.jsx)(xz.e, {
                          noaAction: "replayTimelineZoomOut",
                          padHidesKey: !0
                        })]
                      }), (0, Hz.jsx)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: Oi(fz)
                      }), (0, Hz.jsxs)(Jb.f, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          Xu("replayTimelineZoomIn")
                        },
                        disabled: !Gz || fz >= ii[ii.length - 1],
                        children: [(0, Hz.jsx)("span", {
                          children: " + "
                        }), (0, Hz.jsx)(xz.e, {
                          noaAction: "replayTimelineZoomIn",
                          padHidesKey: !0
                        })]
                      })]
                    })]
                  })]
                })]
              }), (0, Hz.jsx)("div", {
                className: "ReplayViewerEmptyState",
                children: !Gz && "Load a recording to begin playback"
              }), wz && (0, Hz.jsx)("div", {
                className: "ReplayViewerError",
                children: wz
              })]
            })]
          })]
        })
      }));
    var Ii = bz(1296);

    function Bi() {
      const [, zz] = (0, Ez.useState)(0);
      return (0, Mz.g)("replayViewer|uiVisibilityChanged", (() => {
          zz((zz => zz + 1))
        })), (0, Mz.g)("replayViewer|replayLoaded", (() => {
          zz((zz => zz + 1))
        })),
        function() {
          if (!(0, Ii.d)()) return {};
          const zz = {
              [Ui.c]: "true"
            },
            uz = (0, ci.e)();
          for (const {
              group: bz,
              dataAttr: Ez
            }
            of Ui.g) Ez && !uz[bz] && (zz[Ez] = "true");
          return zz
        }()
    }
    var Ci = bz(8979),
      Yi = bz(1993),
      ki = bz(8402),
      zl = bz(8387),
      ul = bz(2007);
    const bl = (0, Ez.memo)((function() {
      var zz, uz, bz;
      const nz = (0, fz.g)("customButtons");
      (0, Ez.useEffect)((() => nz ? (dz.gameBridge.send("bindCustomButtonKeys", nz.filter(ki.e).map((zz => {
        let {
          id: uz,
          keycode: bz
        } = zz;
        return {
          id: uz,
          keycode: bz
        }
      }))), () => {
        dz.gameBridge.send("bindCustomButtonKeys", [])
      }) : () => {}), [nz]);
      const iz = null !== (zz = null === nz || void 0 === nz ? void 0 : nz.filter(ki.e)) && void 0 !== zz ? zz : [],
        lz = (0, zl.k)(),
        Mz = null !== (uz = null === (bz = (0, ul.c)()) || void 0 === bz ? void 0 : bz.hideButtonHints) && void 0 !== uz && uz,
        tz = "customButton" !== (null === lz || void 0 === lz ? void 0 : lz.kind) || Mz ? null : lz.id,
        Oz = iz.length > 0,
        pz = (0, Ez.useRef)(null);
      return (0, Ez.useLayoutEffect)((() => {
        if (!Oz) return () => {};
        const zz = pz.current,
          uz = zz.closest(".InGameUi"),
          bz = () => {
            uz.style.setProperty("--custom-buttons-top", `${zz.offsetTop}px`)
          };
        bz();
        const Ez = new ResizeObserver(bz);
        return Ez.observe(zz), Ez.observe(zz.parentElement), () => {
          Ez.disconnect(), uz.style.removeProperty("--custom-buttons-top")
        }
      }), [Oz]), (0, Hz.jsx)("div", {
        ref: pz,
        className: "" + ((0, Rn.isMobile)() ? "CustomIconsMobile" : "CustomIcons"),
        children: iz.map((zz => {
          var uz, bz;
          return (0, Hz.jsx)(El, {
            button: zz,
            padGlyph: zz.id === tz && null !== (uz = null === (bz = (0, Sz.f)()) || void 0 === bz ? void 0 : bz.getBoundButton("actionButton")) && void 0 !== uz ? uz : null
          }, zz.id)
        }))
      })
    }));

    function El(zz) {
      let {
        button: uz,
        padGlyph: bz
      } = zz;
      const nz = (0, Ez.useRef)(null),
        iz = () => {
          null !== nz.current && (nz.current = null, dz.gameBridge.send("pressCustomButton", {
            id: uz.id,
            down: !1
          }))
        };
      (0, Ez.useEffect)((() => iz), []);
      const lz = Qu(iz, {
          pressesOnPointerDown: !0
        }),
        Mz = zz => {
          nz.current === zz.pointerId && iz()
        };
      return (0, Hz.jsxs)("div", {
        className: "CustomIcon",
        ...lz,
        onLostPointerCapture: Mz,
        children: [(0, Hz.jsx)(Yi.c, {
          icon: uz.icon,
          keyboardHint: (0, ki.b)(uz.keycode),
          padGlyph: bz,
          onPointerDown: zz => {
            try {
              zz.currentTarget.setPointerCapture(zz.pointerId)
            } catch {
              return
            }
            null === nz.current && dz.gameBridge.send("pressCustomButton", {
              id: uz.id,
              down: !0
            }), nz.current = zz.pointerId
          },
          onPointerUp: Mz,
          onPointerCancel: Mz,
          showTouchTutorialPubSubId: !1,
          showRedDotPubSubId: !1
        }), uz.description && (0, Hz.jsx)("div", {
          className: "CustomIconDescription SmallTextBold",
          children: uz.description
        })]
      })
    }
    var nl = bz(2306),
      il = bz(262);
    const ll = {
      frame: zz => {
        const uz = requestAnimationFrame((() => {
          zz()
        }));
        return () => {
          cancelAnimationFrame(uz)
        }
      },
      afterFrame: zz => {
        const uz = setTimeout(zz, 0);
        return () => {
          clearTimeout(uz)
        }
      }
    };
    class Ml {
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : il.d,
          uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ll;
        this.idle = zz, this.frames = uz, this.waiting = [], this.cancelIdle = null, this.cancelFrame = null, this.cancelAfterFrame = null, this.starvedFrames = 0, this.shown = !1
      }
      request(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.shown ? (zz(), () => {}) : (uz ? this.waiting.unshift(zz) : this.waiting.push(zz), this.schedule(), () => {
          const uz = this.waiting.indexOf(zz);
          uz >= 0 && (this.waiting.splice(uz, 1), this.settle())
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
        var zz, uz, bz;
        null === (zz = this.cancelIdle) || void 0 === zz || zz.call(this), this.cancelIdle = null, null === (uz = this.cancelFrame) || void 0 === uz || uz.call(this), this.cancelFrame = null, null === (bz = this.cancelAfterFrame) || void 0 === bz || bz.call(this), this.cancelAfterFrame = null
      }
    }
    const tl = (0, Ez.createContext)(null);

    function Hl(zz) {
      let {
        children: uz,
        first: bz = !1
      } = zz;
      const nz = (0, Ez.useContext)(tl),
        [iz, lz] = (0, Ez.useState)(null === nz);
      return (0, Ez.useEffect)((() => {
        if (!iz && null !== nz) return nz.request((() => {
          lz(!0)
        }), bz)
      }), [bz, iz, nz]), iz ? (0, Ez.createElement)(Ez.Fragment, null, uz) : null
    }
    const Ol = (0, Ez.memo)((function(zz) {
        let {
          shown: uz
        } = zz;
        const [bz] = (0, Ez.useState)((() => new Zz.e(uz))), [nz] = (0, Ez.useState)((() => uz ? null : new Ml));
        return (0, Ez.useLayoutEffect)((() => {
          uz && (null === nz || void 0 === nz || nz.show(), bz.show())
        }), [uz, bz, nz]), (0, Hz.jsx)(Zz.d.Provider, {
          value: bz,
          children: (0, Hz.jsx)(tl.Provider, {
            value: nz,
            children: (0, Hz.jsx)(pl, {})
          })
        })
      })),
      pl = (0, Ez.memo)((function() {
        const {
          isUiHidden: zz,
          isUiHiddenByCamera: uz,
          worldPanelHud: bz,
          isTouchScreen: nz
        } = (0, vz.m)(["isUiHidden", "isUiHiddenByCamera", "worldPanelHud", "isTouchScreen"]), lz = (0, jE.e)(), Mz = Bi(), tz = (0, Zz.m)(), Oz = (0, Ez.useRef)(null), pz = (0, fz.g)("showKillfeed");
        return function() {
            const zz = (0, Zz.m)();
            (0, Ez.useEffect)((() => zz.whenShown(Rz)), [zz])
          }(),
          function() {
            const zz = (0, fz.g)("inventoryColourOverride");
            (0, Ez.useEffect)((() => {
              if (!zz) return;
              const {
                panel: uz,
                slot: bz,
                slotSelected: Ez,
                slotUnavailable: nz
              } = Dz(zz), iz = document.documentElement.style;
              return iz.setProperty("--InventoryPanelColour", uz), iz.setProperty("--InventorySlotColour", bz), iz.setProperty("--InventorySlotSelectedColour", Ez), iz.setProperty("--InventorySlotUnavailableColour", nz), () => {
                iz.removeProperty("--InventoryPanelColour"), iz.removeProperty("--InventorySlotColour"), iz.removeProperty("--InventorySlotSelectedColour"), iz.removeProperty("--InventorySlotUnavailableColour")
              }
            }), [zz])
          }(), (0, Ez.useLayoutEffect)((() => tz.whenShown((() => {
            var zz;
            null === (zz = Oz.current) || void 0 === zz || zz.classList.remove("PreMounted")
          }))), [tz]), (0, Hz.jsxs)(Hz.Fragment, {
            children: [(0, Hz.jsxs)("div", {
              ref: Oz,
              className: iz()("InGameUi", {
                PreMounted: !tz.shown,
                Hidden: zz,
                HiddenByCamera: uz,
                HiddenByWorldPanel: null !== bz,
                WorldPanelTouchControl: "touchControls" === bz
              }),
              ...Mz,
              children: [(0, Hz.jsxs)(Hl, {
                children: [(0, Hz.jsx)(yb.e, {}), (0, Hz.jsx)(jb, {})]
              }), (0, Hz.jsx)(Zz.i, {
                children: (0, Hz.jsx)(Ib, {})
              }), (0, Hz.jsxs)(Hl, {
                children: [(0, Hz.jsx)(vn, {}), (0, Hz.jsx)(Gn, {}), nz && (0, Hz.jsx)(Vn, {})]
              }), (0, Hz.jsxs)(Hl, {
                children: [(0, Hz.jsx)(wb, {}), (0, Hz.jsx)(tE.b, {}), (0, Hz.jsx)(RE, {})]
              }), (0, Hz.jsx)(Zz.i, {
                children: (0, Hz.jsx)(Sb, {})
              }), (0, Hz.jsxs)(Hl, {
                children: [(0, Hz.jsx)(Tn.c, {}), (0, Hz.jsx)(ei, {})]
              }), (0, Hz.jsxs)(Hl, {
                children: [(0, Hz.jsx)(qn.c, {}), (0, Hz.jsx)(hn.f, {})]
              }), (0, Hz.jsx)(Hl, {
                children: (0, Hz.jsx)(fb.h, {})
              }), (0, Hz.jsx)(Hl, {
                children: (0, Hz.jsx)(Xl, {
                  showChat: lz
                })
              }), (0, Hz.jsxs)(Hl, {
                children: [(0, Hz.jsx)(cn, {}), (0, Hz.jsx)(An, {})]
              }), (0, Hz.jsxs)("div", {
                className: iz()("RightElements", {
                  RightElementsTouchscreen: nz
                }),
                "data-camera-keeper-host": "",
                children: [(0, Hz.jsxs)("div", {
                  className: oE.g,
                  "data-holds-camera-keeper": "",
                  children: [(0, Hz.jsxs)("div", {
                    className: "TopRightElementsLeft",
                    "data-holds-camera-keeper": "",
                    children: [(0, Hz.jsx)(Hl, {
                      children: (0, Hz.jsx)(pn.b, {})
                    }), (0, Hz.jsxs)(Hl, {
                      children: [(0, Hz.jsx)(Uz, {}), (0, Hz.jsx)(AE.e, {})]
                    }), Rn.featureFlags.useSocialFeatures && (0, Hz.jsx)(Zz.i, {
                      children: (0, Hz.jsx)(TE.e, {
                        placement: "inGame"
                      })
                    }), Rn.featureFlags.useSocialFeatures && (0, Hz.jsx)(Zz.i, {
                      children: (0, Hz.jsx)(yE, {})
                    }), pz && (0, Hz.jsx)(Zz.i, {
                      children: (0, Hz.jsx)(ME, {})
                    }), (0, Hz.jsx)(Hl, {
                      children: (0, Hz.jsx)(Ci.d, {})
                    })]
                  }), Rn.featureFlags.useSocialFeatures && (0, Hz.jsx)("div", {
                    className: "TopRightElementsRight",
                    children: (0, Hz.jsx)(Hl, {
                      children: (0, Hz.jsx)(rn.c, {})
                    })
                  })]
                }), (0, Hz.jsxs)(Hl, {
                  children: [(0, Hz.jsx)(fb.c, {
                    placement: "topRight"
                  }), (0, Hz.jsx)(fl, {})]
                })]
              }), (0, Hz.jsx)("div", {
                className: "LeftCentre",
                children: (0, Hz.jsx)(Hl, {
                  children: (0, Hz.jsx)(bl, {})
                })
              }), (0, Hz.jsxs)("div", {
                className: "BottomCentre",
                "data-holds-camera-keeper": nz ? "" : void 0,
                children: [(0, Hz.jsx)(Zz.i, {
                  children: (0, Hz.jsx)(Pz, {})
                }), (0, Hz.jsx)(Hl, {
                  children: (0, Hz.jsx)(Fl, {})
                }), (0, Hz.jsxs)("div", {
                  className: "BottomElements",
                  "data-holds-camera-keeper": nz ? "" : void 0,
                  children: [(0, Hz.jsx)("div", {
                    className: iz()("BottomLeftElements", {
                      Touch: nz
                    }),
                    children: (0, Hz.jsxs)(Hl, {
                      children: [(0, Hz.jsx)(WE, {}), !nz && (0, Hz.jsx)(nl.c, {})]
                    })
                  }), (0, Hz.jsx)(Hl, {
                    children: (0, Hz.jsx)(wl, {})
                  }), (0, Hz.jsx)(Hl, {
                    children: (0, Hz.jsx)(wE, {
                      isTouchScreen: nz
                    })
                  })]
                })]
              }), (0, Hz.jsx)("div", {
                className: "MiddleLeft"
              }), nz && (0, Hz.jsx)(Hl, {
                children: (0, Hz.jsx)(ku, {})
              }), (0, Hz.jsx)("div", {
                className: "CameraFadeHost",
                ref: fu.k
              })]
            }), (0, Hz.jsx)(Zz.i, {
              children: (0, Hz.jsx)(en.b, {})
            }), (0, Hz.jsx)(Hl, {
              first: !0,
              children: (0, Hz.jsx)(eE.b, {})
            }), (0, Hz.jsx)(Zz.i, {
              children: (0, Hz.jsx)(dl, {})
            })]
          })
      }));

    function dl() {
      return (0, Ez.useEffect)((() => {
        const zz = setTimeout((() => {
          (0, sz.h)()
        }), 0);
        return () => {
          clearTimeout(zz), sz.k.Ow(!1)
        }
      }), []), null
    }
    const Fl = (0, Ez.memo)((function() {
        const zz = (0, Mz.h)("aimingOverlay", "none");
        (0, wz.b)();
        const uz = (0, fz.j)("middleTextUpper"),
          bz = (0, fz.j)("middleTextLower");
        return (0, Hz.jsxs)("div", {
          className: "MiddleTextBottom",
          style: "sniper" === zz ? {
            visibility: "hidden"
          } : {},
          children: [(0, Hz.jsx)(Kl, {
            text: uz,
            className: "MiddleText MiddleTextUpper SmallTextBold",
            maxHeightFraction: Zl
          }), (0, Hz.jsx)(Kl, {
            text: bz,
            className: "MiddleText",
            maxHeightFraction: Rl
          })]
        })
      })),
      Zl = .3,
      Rl = .2;

    function Kl(zz) {
      let {
        text: uz,
        className: bz,
        maxHeightFraction: nz
      } = zz;
      const iz = (0, Ez.useRef)(null),
        lz = (0, Ez.useRef)(null);
      return function(zz, uz, bz, nz) {
        (0, Ez.useLayoutEffect)((() => {
          const Ez = zz.current,
            nz = uz.current;
          if (!Ez || !nz) return;
          let iz = -1,
            lz = -1;
          const Mz = zz => (nz.style.setProperty("zoom", String(zz)), Ez.getBoundingClientRect().height),
            tz = () => {
              const zz = document.documentElement.clientHeight * bz;
              let uz = 1;
              if (Mz(1) > zz) {
                let bz = .5,
                  Ez = 1;
                for (let uz = 0; uz < 6; uz++) {
                  const uz = (bz + Ez) / 2;
                  Mz(uz) <= zz ? bz = uz : Ez = uz
                }
                uz = bz
              }
              lz = Mz(uz), iz = Ez.getBoundingClientRect().width
            };
          tz();
          let Hz = 0;
          const Oz = () => {
              cancelAnimationFrame(Hz), Hz = requestAnimationFrame(tz)
            },
            pz = new ResizeObserver((() => {
              const {
                width: zz,
                height: uz
              } = Ez.getBoundingClientRect();
              zz === iz && uz === lz || Oz()
            }));
          return pz.observe(Ez), window.addEventListener("resize", Oz), () => {
            pz.disconnect(), window.removeEventListener("resize", Oz), cancelAnimationFrame(Hz), nz.style.removeProperty("zoom")
          }
        }), [zz, uz, bz, nz])
      }(iz, lz, nz, uz.content), (0, Hz.jsx)("div", {
        ref: iz,
        className: "MiddleTextFit",
        children: (0, Hz.jsx)(Un, {
          ref: lz,
          text: uz,
          className: bz
        })
      })
    }
    const wl = (0, Ez.memo)((function() {
        const zz = (0, Mz.h)("aimingOverlay", "none");
        (0, wz.b)();
        const uz = (0, fz.g)("useInventory");
        return (0, Hz.jsxs)("div", {
          className: "BottomMiddleElements",
          style: "sniper" === zz ? {
            visibility: "hidden"
          } : {},
          children: [(0, Hz.jsx)(Oz, {}), (0, Hz.jsx)(fb.c, {}), (0, Hz.jsx)(sb, {}), (0, Hz.jsx)(Zz.i, {
            children: (0, Hz.jsx)(fn, {})
          }), (0, Hz.jsxs)("div", {
            className: "HotBarRow",
            children: [uz ? (0, Hz.jsx)(gz.b, {}) : (0, Hz.jsx)(gz.e, {}), (0, Hz.jsx)(yz, {})]
          })]
        })
      })),
      Xl = (0, Ez.memo)((function(zz) {
        let {
          showChat: uz
        } = zz;
        const {
          t: bz
        } = (0, Lz.F)(), {
          clientEscMenuOptions: nz,
          isTouchScreen: lz
        } = (0, vz.m)(["clientEscMenuOptions", "isTouchScreen"]);
        (0, wz.b)();
        const {
          userContext: Mz,
          isUserContextUpdating: tz
        } = (0, Kz.c)(), Oz = (0, fz.g)("hideCoordinates"), dz = (0, fz.g)("customVariationTitle"), {
          requestedGameNameWithVariation: Fz,
          gameNameWithVariation: Zz,
          lobbyName: Rz,
          shownLobbyName: sz
        } = (0, Nz.h)("connectedGame"), rz = (0, pz.b)(Fz, Rz, !1), [oz, xz] = (0, Ez.useState)(null), Jz = (0, Fn.m)(Zz || Fz || ""), Az = dz || Jz || "";
        (0, Ez.useEffect)((() => {
          tz || PE.c.getFavouriteLobbies(Mz).then((zz => {
            console.log("Got favourite lobbies", zz), xz(zz)
          }))
        }), [tz, Mz]);
        const Tz = (0, Ez.useRef)(null);
        return (0, Ez.useLayoutEffect)((() => {
          const zz = Tz.current,
            uz = document.documentElement,
            bz = new ResizeObserver((() => {
              uz.style.setProperty("--InGameHeaderRowsHeight", `${zz.offsetHeight}px`)
            }));
          return bz.observe(zz), () => {
            bz.disconnect(), uz.style.removeProperty("--InGameHeaderRowsHeight")
          }
        }), []), JE(Tz), (0, Hz.jsxs)(Hz.Fragment, {
          children: [(0, Hz.jsxs)("div", {
            className: iz()(oE.d, {
              Touchscreen: lz
            }),
            ref: Tz,
            children: [(0, Hz.jsxs)("div", {
              className: "InGameHeader",
              children: [(0, Hz.jsxs)("div", {
                className: "InGameHeaderLogo",
                onMouseDown: zz => {
                  zz.stopPropagation(), zz.preventDefault()
                },
                onClick: () => {
                  vz.e.set({
                    openEverythingMenuName: Xz.r.SETTINGS
                  })
                },
                children: [(0, Hz.jsx)(dn.c, {
                  showFace: !0,
                  loading: !1
                }), "bloxd.io"]
              }), (0, Hz.jsx)("div", {
                className: "InGameHeaderSpacer"
              }), (0, Hz.jsxs)("div", {
                className: "InGameHeaderGameName",
                children: [null === rz && (0, Hz.jsx)(dn.c, {}), null !== rz && (0, Hz.jsxs)(Hz.Fragment, {
                  children: [rz, Az && ` ${Az}`]
                })]
              }), (0, Hz.jsx)("div", {
                className: "InGameHeaderSpacer"
              }), (0, Hz.jsx)("div", {
                className: "InGameHeaderLobbyName",
                children: sz
              }), (0, Zn.H)(Rz) && (0, Hz.jsx)(qz.f, {
                tooltipInner: (0, Hz.jsx)("div", {
                  children: bz(null !== oz && oz.includes(Rz) ? "customLobby:removeFromFavourites" : "customLobby:addToFavourites")
                }),
                children: (0, Hz.jsx)("div", {
                  children: (0, Hz.jsx)(Jb.z, {
                    isLiked: null !== oz && oz.includes(Rz),
                    onClick: () => {
                      try {
                        if (!oz) return;
                        oz.includes(Rz) ? (PE.c.unfavouriteLobby(Mz, Rz).catch((zz => {
                          console.error("Failed to favourite lobby", zz)
                        })), xz(oz.filter((zz => zz !== Rz)))) : (PE.c.favouriteLobby(Mz, Rz).catch((zz => {
                          console.error("Failed to favourite lobby", zz)
                        })), xz([...oz, Rz]))
                      } catch (zz) {
                        console.error("Failed to like lobby", zz)
                      }
                    },
                    isLoading: null === oz
                  })
                })
              }), (0, Hz.jsx)(Dn, {})]
            }), (0, Hz.jsx)(nn, {
              show: nz.showFPS
            }), !Oz && nz.showCoordinates && (0, Hz.jsx)(Hn, {}), !Oz && nz.showChunkCoordinates && (0, Hz.jsx)(On, {}), (0, Hz.jsx)(gn, {})]
          }), (0, Hz.jsx)("div", {
            className: "TopLeftElements",
            "data-holds-camera-keeper": "",
            children: (0, Hz.jsx)("div", {
              className: "InGameHeaderAndChat",
              "data-holds-camera-keeper": "",
              children: uz && (0, Hz.jsx)(ez.c, {})
            })
          })]
        })
      })),
      fl = (0, Ez.memo)((function() {
        (0, wz.b)();
        const zz = (0, fz.j)("RightInfoText"),
          [uz, bz] = (0, Ez.useState)(null);
        return (0, Zu.h)(uz, ".RightElements"), zz.hasText ? (0, Hz.jsx)("div", {
          className: "RightInfoDivContainer",
          children: (0, Hz.jsx)(Un, {
            ref: bz,
            text: zz,
            className: "RightInfoDiv",
            children: (0, Hz.jsx)("div", {
              className: "RightInfoDivInner",
              children: (0, Hz.jsx)(tz.b, {
                text: zz.content
              })
            })
          })
        }) : null
      }))
  },
  4598: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Mz
    });
    var Ez = bz(56),
      nz = bz(316),
      iz = bz(1856),
      lz = bz(1089);

    function Mz(zz) {
      let {
        text: uz
      } = zz;
      const bz = [];
      let Mz = "";
      return (0, nz.uc)(uz).forEach(((zz, uz) => {
        if ("string" === typeof zz || !(0, iz.d)(zz.icon)) return void(Mz += "string" === typeof zz ? zz : zz.icon);
        const nz = Math.max(0, Mz.trimEnd().search(/\S{1,12}$/));
        bz.push((0, lz.jsxs)(Ez.Fragment, {
          children: [Mz.slice(0, nz), (0, lz.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [Mz.slice(nz), (0, lz.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": zz.icon,
              children: (0, lz.jsx)(iz.c, {
                itemName: zz.icon,
                amount: 0
              })
            })]
          })]
        }, uz)), Mz = ""
      })), bz.push(Mz), (0, lz.jsx)(lz.Fragment, {
        children: bz
      })
    }
  },
  36006: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => dz,
      i: () => Oz,
      k: () => pz
    });
    var Ez = bz(56),
      nz = bz(1038),
      iz = bz.n(nz),
      lz = bz(1856),
      Mz = bz(1089);
    const tz = 350;
    let Hz = 0;

    function Oz() {
      return Hz += 1, Hz
    }

    function pz(zz, uz) {
      let bz = 0;
      for (const Ez of zz) "ingredient" !== Ez.kind && Ez.Rp === uz && (bz += Ez.amount);
      return bz > 0 ? {
        idx: uz,
        amount: bz
      } : null
    }

    function dz(zz) {
      var uz, bz;
      let {
        anim: nz,
        onComplete: Hz
      } = zz;
      const Oz = null !== (uz = nz.delayMs) && void 0 !== uz ? uz : 0,
        pz = null !== (bz = nz.durationMs) && void 0 !== bz ? bz : tz,
        [dz, Fz] = (0, Ez.useState)(nz.from),
        [Zz, Rz] = (0, Ez.useState)(0 === Oz),
        [Kz, wz] = (0, Ez.useState)(!1),
        Xz = (0, Ez.useRef)(!1);
      return (0, Ez.useEffect)((() => {
        let zz, uz;
        const bz = () => {
            Xz.current = !0, Rz(!0), zz = requestAnimationFrame((() => {
              uz = requestAnimationFrame((() => {
                Fz({
                  x: nz.to.x,
                  y: nz.to.y
                }), wz(!0)
              }))
            }))
          },
          Ez = Xz.current ? 0 : Oz;
        let iz;
        Ez > 0 ? iz = setTimeout(bz, Ez) : bz();
        const lz = setTimeout((() => {
          Hz(nz.id)
        }), Ez + pz + 50);
        return () => {
          clearTimeout(iz), cancelAnimationFrame(zz), cancelAnimationFrame(uz), clearTimeout(lz)
        }
      }), [nz.id, nz.to.x, nz.to.y, Hz, Oz, pz]), (0, Mz.jsx)("div", {
        className: iz()("CraftItemFlyAnimation", {
          Ingredient: "ingredient" === nz.kind,
          Waiting: !Zz,
          Arrived: Kz
        }),
        style: {
          left: dz.x,
          top: dz.y,
          "--fly-duration": `${pz}ms`
        },
        children: (0, Mz.jsx)(lz.c, {
          itemName: nz.itemName,
          amount: nz.amount
        })
      })
    }
  },
  35983: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => mz,
      e: () => Uz
    });
    var Ez = bz(56),
      nz = bz(2756),
      iz = bz(6291),
      lz = bz(1993),
      Mz = bz(2313),
      tz = bz(8514),
      Hz = bz(328),
      Oz = bz(22),
      pz = bz(1417),
      dz = bz(33),
      Fz = bz(1038),
      Zz = bz.n(Fz),
      Rz = bz(316),
      Kz = bz(35989),
      wz = bz(1846),
      Xz = bz(1912),
      fz = bz(8349),
      sz = bz(1089);

    function rz(zz) {
      var uz, bz;
      let {
        slotIdx: iz
      } = zz;
      const lz = (0, Xz.e)("hotbar", (zz => {
          var uz;
          return null !== (uz = zz.items[iz]) && void 0 !== uz ? uz : null
        })),
        tz = (0, Xz.e)("hotbar", (zz => zz.ammo)),
        [Oz, pz] = (0, Ez.useState)(!1),
        dz = (0, Ez.useRef)(null),
        [Fz, Rz] = (0, Ez.useState)(null),
        [Kz, rz] = (0, Ez.useState)(null),
        oz = (0, Mz.g)("maxAuraLevel"),
        Nz = (0, nz.c)(),
        vz = (0, Ez.useCallback)((() => {
          if (clearTimeout(dz.current), lz) {
            var zz, uz, bz, Ez;
            const tz = lz.displayName,
              Oz = [],
              pz = Array.isArray(tz) ? tz : [tz],
              dz = {
                fontStyle: null !== (zz = lz.attributes.customAttributes) && void 0 !== zz && zz.author ? "italic" : "normal"
              };
            for (const zz of pz) zz.str ? Oz.push(zz) : Oz.push({
              str: zz,
              style: dz
            });
            if (null !== (uz = lz.attributes.customAttributes) && void 0 !== uz && uz.enchantments) {
              Oz.push(" ");
              const zz = Object.entries(lz.attributes.customAttributes.enchantments).sort(((zz, uz) => uz[1] - zz[1])),
                uz = lz.attributes.customAttributes.enchantmentData;
              for (const [bz, Ez] of zz) {
                var nz, iz;
                const zz = null !== (nz = null === uz || void 0 === uz || null === (iz = uz[bz]) || void 0 === iz ? void 0 : iz.icon) && void 0 !== nz ? nz : `${bz} Enchantment`;
                var Mz;
                if (Ez < 4)
                  for (let uz = 0; uz < Ez; uz++) Oz.push({
                    icon: zz,
                    style: {
                      fontSize: "1.5em"
                    }
                  });
                else Oz.push({
                  icon: zz,
                  style: {
                    fontSize: "1.5em"
                  }
                }), Oz.push(null !== (Mz = (0, Hz.X)(Ez)) && void 0 !== Mz ? Mz : Ez.toString())
              }
            }
            Rz(Oz), rz(null !== (bz = null === (Ez = lz.attributes.customAttributes) || void 0 === Ez ? void 0 : Ez.enchantmentTier) && void 0 !== bz ? bz : null)
          } else Rz(null), rz(null);
          pz(!0), Nz();
          const tz = null === lz || void 0 === lz ? void 0 : lz.attributes.customAttributes;
          void 0 === (null === tz || void 0 === tz ? void 0 : tz.shotsLeft) && (dz.current = setTimeout((() => {
            pz(!1)
          }), 2e3))
        }), [null === lz || void 0 === lz ? void 0 : lz.name, iz, null === lz || void 0 === lz ? void 0 : lz.instance, null === lz || void 0 === lz ? void 0 : lz.displayName]);
      (0, Ez.useEffect)((() => (vz(), () => {
        clearTimeout(dz.current), pz(!1)
      })), [null === lz || void 0 === lz ? void 0 : lz.name, iz, null === lz || void 0 === lz ? void 0 : lz.instance, vz]);
      const xz = null === lz || void 0 === lz || null === (uz = lz.attributes.customAttributes) || void 0 === uz ? void 0 : uz.shotsLeft,
        Jz = void 0 === xz ? null : (0, sz.jsx)("div", {
          className: "SelectedItemShotsLeft",
          children: `${xz}|${lz.requiresAmmo?`${tz}x${lz.clipSize}`:lz.clipSize}`
        }),
        Az = (0, fz.k)();
      return (0, sz.jsx)(sz.Fragment, {
        children: Oz && lz && !Az.showing ? (0, sz.jsxs)("div", {
          className: Zz()("SelectedItemName SmallTextBold", {
            NoAuraBar: 0 === oz,
            Enchanted: null !== Kz
          }),
          style: {
            "--enchantmentColour": null !== (bz = Hz.rb[Kz]) && void 0 !== bz ? bz : Hz.rb.None,
            "--duration": Kz ? (0, Hz.jb)(Kz) + "s" : void 0
          },
          children: [Kz && (0, sz.jsxs)("div", {
            className: "SelectedItemNameGradient",
            children: [(0, sz.jsx)(wz.b, {
              text: Fz
            }), Jz]
          }), (0, sz.jsxs)("div", {
            className: "SelectedItemNameNormal",
            children: [(0, sz.jsx)(wz.b, {
              text: Fz
            }), Jz]
          })]
        }) : null
      })
    }
    var oz = bz(36006),
      Nz = bz(20),
      vz = bz(1871),
      xz = bz(588),
      Jz = bz(2317),
      Az = bz(3159),
      Tz = bz(3163);
    var Lz = bz(2014),
      Pz = bz(1102),
      Gz = bz(2356);

    function az() {
      return parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--touch-hotbar-ends-spare")) >= 0
    }
    var Vz = bz(1434);
    const mz = (0, Ez.memo)((function() {
      const [zz, uz] = (0, Ez.useState)(0), bz = (0, Mz.g)("useFullInventory"), lz = (0, Mz.g)("highlightedHotbarSlots"), {
        isTouchScreen: tz,
        openInGameMenuName: Hz
      } = (0, Nz.m)(["isTouchScreen", "openInGameMenuName"]), dz = null !== Hz && "inventory" !== Hz, Fz = (0, Xz.h)("fullInventory") && "inventory" === Hz, Rz = function() {
        const zz = (0, Lz.b)(((zz, uz) => `${zz}:${(0,Pz.e)(zz,uz)?"portrait":"landscape"}`)),
          [uz, bz] = (0, Ez.useState)(az);
        return (0, Ez.useLayoutEffect)((() => {
          bz(az())
        }), [zz]), (0, pz.g)(Gz.f, (() => {
          bz(az())
        })), uz
      }(), wz = tz && !Rz;
      ! function(zz, uz, bz) {
        (0, Ez.useLayoutEffect)((() => {
          const Ez = document.documentElement.classList;
          return zz && (Ez.add("TouchHotbar"), Ez.toggle("TouchHotbarKeysAbove", uz), Ez.toggle("TouchHotbarHasBag", bz)), (0, Az.i)(), Oz.k.sK(Tz.d), () => {
            Ez.remove("TouchHotbar", "TouchHotbarKeysAbove", "TouchHotbarHasBag"), (0, Az.i)(), Oz.k.sK(Tz.d)
          }
        }), [zz, uz, bz])
      }(tz, wz, bz);
      const [fz, Jz] = (0, iz.d)("changedHotbarUsingNumkeys", !0), Vz = (0, Xz.e)("hotbar", (zz => zz.selectedSlot)), mz = null !== Vz && void 0 !== Vz ? Vz : zz, cz = (0, nz.c)(), gz = (0, Ez.useRef)(null), yz = (0, pz.h)("pointerLockUpdate", Boolean(document.pointerLockElement));
      (0, pz.g)("inventoryDraggedItemUpdated", (zz => {
        gz.current = zz, cz()
      })), (0, Xz.d)("hotbarScrolled", (zz => {
        null === Vz && Qz(zz)
      })), (0, Xz.d)("hotbarSlotRequested", (zz => {
        Dz(zz), Jz(!1)
      })), (0, Xz.d)("numberKeyPressed", (() => {
        Jz(!1)
      })), (0, Xz.d)("hotbarDropRequested", (zz => {
        const uz = vz.gameBridge.latest("hotbar").items[mz];
        if (uz) {
          var bz;
          const Ez = zz && null !== (bz = uz.amount) && void 0 !== bz ? bz : 1;
          vz.gameBridge.send("removeInventoryItem", {
            slot: mz,
            amount: Ez,
            drop: !0
          })
        }
      }));
      const Dz = zz => {
          vz.gameBridge.send("selectHotbarSlot", zz), uz(zz)
        },
        Qz = zz => {
          Dz((mz + zz + xz.l) % xz.l)
        };
      let Wz, ez = null,
        jz = null,
        Iz = zz => zz => {},
        Bz = zz => uz => {
          Dz(zz)
        },
        Cz = zz => zz => {},
        Yz = [];
      if (Fz) {
        var kz;
        const zz = gz.current;
        if (null === zz || void 0 === zz || !zz.setHovered) return (0, sz.jsx)("div", {
          className: Zz()("HotBarContainer", {
            Touch: tz,
            KeysAbove: wz
          }),
          children: (0, sz.jsx)("div", {
            className: "HotBar"
          })
        });
        ez = zz.draggedInfo, jz = zz.specialItemInfo, Iz = zz.setHovered, Bz = zz.pointerDown, Cz = zz.pointerUp, Wz = zz.variation, Yz = null !== (kz = zz.craftFlyAnims) && void 0 !== kz ? kz : []
      }
      return (0, sz.jsxs)("div", {
        className: Zz()("HotBarContainer", {
          Touch: tz,
          PopupOpen: tz && dz,
          KeysAbove: wz
        }),
        children: [(0, sz.jsxs)("div", {
          className: Zz()("HotBar", {
            HoverDisabled: yz
          }),
          children: [tz && (0, sz.jsxs)(sz.Fragment, {
            children: [(0, sz.jsx)(hz, {
              useFullInventory: bz,
              inventoryOpen: Fz
            }), (0, sz.jsx)(qz, {
              direction: "Previous",
              onPress: () => {
                Qz(-1)
              }
            })]
          }), !tz && (0, sz.jsxs)(sz.Fragment, {
            children: [(0, sz.jsx)(Uz, {}), (0, sz.jsx)("div", {
              className: "HotBarFiller"
            })]
          }), (0, sz.jsx)("div", {
            className: "HotBarGameItemsContainer",
            children: new Array(10).fill(0).map(((zz, uz) => (0, sz.jsx)(Kz.c, {
              idx: uz,
              draggedInfo: ez,
              specialItemInfo: jz,
              craftFlyHoldbackInfo: (0, oz.k)(Yz, uz),
              setHovered: Iz(uz),
              pointerDown: Bz(uz),
              pointerUp: Cz(uz),
              variation: Wz,
              isSelected: uz === mz,
              hotbarHighlighted: !0 === (null === lz || void 0 === lz ? void 0 : lz.includes(uz)),
              hoverDisabled: yz,
              showNumber: fz && !tz
            }, uz)))
          }), tz && (0, sz.jsx)(qz, {
            direction: "Next",
            onPress: () => {
              Qz(1)
            }
          }), !tz && (0, sz.jsxs)(sz.Fragment, {
            children: [(0, sz.jsx)("div", {
              className: "HotBarFiller"
            }), (0, sz.jsx)("div", {
              className: Zz()("HotBarItem ButtonHotBarItem", {
                HiddenButtonHotBarItem: !bz
              }),
              onPointerDown: () => {
                Oz.k.sK("toggleMenu", "inventory")
              },
              children: (0, sz.jsx)(Sz, {})
            })]
          })]
        }), (0, sz.jsx)(rz, {
          slotIdx: mz
        })]
      })
    }));

    function qz(zz) {
      let {
        direction: uz,
        onPress: bz
      } = zz;
      return (0, sz.jsx)("div", {
        className: Zz()("HotBarArrow", uz),
        ...Vz.i,
        children: (0, sz.jsx)(lz.c, {
          icon: "Previous" === uz ? "caret-left" : "caret-right",
          touchPressOn: "pointerdown",
          onClick: bz
        })
      })
    }
    const hz = (0, Ez.memo)((function(zz) {
        let {
          useFullInventory: uz,
          inventoryOpen: bz
        } = zz;
        const nz = (0, Mz.g)("maxAuraLevel"),
          iz = (0, Ez.useRef)(null);
        return function(zz, uz, bz) {
          (0, Ez.useLayoutEffect)((() => (document.documentElement.classList.toggle("TouchHotbarHasShop", uz), () => {
            document.documentElement.classList.remove("TouchHotbarHasShop")
          })), [uz]), (0, Ez.useLayoutEffect)((() => {
            const uz = zz.current.closest(".BottomMiddleElements");
            return uz.classList.toggle("TouchInventoryOpen", bz), () => {
              uz.classList.remove("TouchInventoryOpen")
            }
          }), [zz, bz])
        }(iz, (0, tz.c)(), bz), (0, sz.jsxs)("div", {
          ref: iz,
          className: Zz()("TouchInventoryKeys", {
            NoAuraBar: 0 === nz,
            InventoryOpen: bz
          }),
          children: [(0, sz.jsx)(Uz, {
            touchKey: !0
          }), (0, sz.jsx)("div", {
            className: Zz()("TouchInventoryKey BagKey", {
              Hidden: !uz
            }),
            ...Vz.i,
            children: (0, sz.jsx)(Sz, {
              touchKey: !0
            })
          })]
        })
      })),
      Uz = (0, Ez.memo)((function(zz) {
        let {
          touchKey: uz = !1
        } = zz;
        const bz = (0, tz.c)();
        return (0, sz.jsx)("div", {
          className: uz ? Zz()("TouchInventoryKey ShopKey", {
            Hidden: !bz
          }) : Zz()("HotBarItem ButtonHotBarItem", {
            HiddenButtonHotBarItem: !bz
          }),
          ...uz ? Vz.i : {},
          children: (0, sz.jsx)(lz.c, {
            icon: (0, Hz.gc)(),
            noaAction: "OpenShop",
            touchPressOn: "pointerdown",
            onClick: () => {
              bz && Nz.e.set({
                openEverythingMenuName: Rz.r.SHOP
              })
            },
            showTouchTutorialPubSubId: "showShopTouchTutorial",
            showRedDotPubSubId: "showShopIconRedDot",
            touchIconPosition: "topleft"
          })
        })
      }));

    function cz(zz) {
      let {
        player: uz
      } = zz;
      return uz.some((zz => null !== zz && Hz.$c.includes(zz.name)))
    }

    function gz(zz) {
      zz.creative || dz.g.getItem("LogInInventoryRedDotTutorialComplete") || (cz(zz) ? (Oz.k.sK("RedDotOpenInventoryIcon", !0), Oz.k.sK("TouchTutorialOpenInventoryIcon", !0)) : (Oz.k.sK("RedDotOpenInventoryIcon", !1), Oz.k.sK("TouchTutorialOpenInventoryIcon", !1)))
    }
    const Sz = (0, Ez.memo)((function(zz) {
      let {
        touchKey: uz = !1
      } = zz;
      const {
        backpackPointerRequested: bz
      } = (0, Nz.m)(["backpackPointerRequested"]);
      (0, Ez.useEffect)((() => {
        gz(vz.gameBridge.latest("inventory"))
      }), []), (0, Xz.d)("inventory", gz);
      const nz = (0, Jz.m)();
      return (0, pz.g)("toggleMenu", (zz => {
        nz.shown && (null !== zz && void 0 !== zz && zz.startsWith("inventory") && cz(vz.gameBridge.latest("inventory")) ? (dz.g.setItem("LogInInventoryRedDotTutorialComplete", !0), Oz.k.sK("RedDotOpenInventoryIcon", !1), Oz.k.sK("TouchTutorialOpenInventoryIcon", !1)) : "shop" === zz && Oz.k.sK("showShopTouchTutorial", !1))
      })), uz ? (0, sz.jsx)(lz.c, {
        icon: "backpack",
        noaAction: "OpenInventory",
        touchPressOn: "pointerdown",
        onClick: () => {
          Oz.k.sK("toggleMenu", "inventory")
        },
        showRedDotPubSubId: "RedDotOpenInventoryIcon",
        showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
        touchTutorialRequested: bz,
        touchIconPosition: "topleft"
      }) : (0, sz.jsx)("div", {
        className: "HotBarButton",
        onPointerDown: () => {
          Oz.k.sK("toggleMenu", "inventory")
        },
        children: (0, sz.jsx)(lz.c, {
          icon: "backpack",
          noaAction: "OpenInventory",
          onPointerDown: zz => {
            Oz.k.sK("toggleMenu", "inventory"), zz.stopPropagation()
          },
          showRedDotPubSubId: "RedDotOpenInventoryIcon",
          showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
          touchTutorialRequested: bz,
          touchIconPosition: "topleft"
        })
      })
    }))
  },
  35989: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Kz,
      d: () => Zz
    });
    var Ez = bz(56),
      nz = bz(1038),
      iz = bz.n(nz),
      lz = bz(1865),
      Mz = bz(1856),
      tz = bz(1871),
      Hz = bz(1912),
      Oz = bz(35998),
      pz = bz(8999),
      dz = bz(1362),
      Fz = bz(1089);
    const Zz = (zz, uz, bz) => {
      let Ez = uz,
        nz = !1;
      for (const iz of bz)(null === iz || void 0 === iz ? void 0 : iz.idx) === zz && (nz = !0, Ez > 0 && (Ez -= iz.amount));
      return {
        displayedAmt: Ez,
        shown: !nz || Ez > 0
      }
    };
    const Rz = zz => {
        let {
          idx: uz
        } = zz;
        return (0, dz.p)() ? null : (0, Fz.jsx)("div", {
          className: "HotbarItemNumber SmallTextBold",
          children: uz < 9 ? uz + 1 : 0
        })
      },
      Kz = (0, Ez.memo)((function(zz) {
        var uz, bz, Ez;
        let {
          idx: nz,
          setHovered: dz,
          pointerDown: Kz,
          pointerUp: wz,
          draggedInfo: Xz,
          specialItemInfo: fz,
          craftFlyHoldbackInfo: sz,
          defaultIconB64: rz = null,
          variation: oz,
          isSelected: Nz = !1,
          hotbarHighlighted: vz = !1,
          hoverDisabled: xz = !1,
          showNumber: Jz = !1,
          showNewDot: Az = !1
        } = zz;
        const Tz = (0, Hz.e)("inventory", (zz => nz === Oz.d ? null : (0, pz.i)(zz, nz)));
        let Lz, Pz, Gz, az;
        if (nz === Oz.d) fz && (Lz = fz.name, Gz = fz.amount, az = fz.attributes);
        else if (Tz) {
          var Vz;
          Lz = Tz.name, Pz = Tz.icon, Gz = null !== (Vz = Tz.amount) && void 0 !== Vz ? Vz : 0, az = Tz.attributes
        }
        const mz = null === (uz = az) || void 0 === uz || null === (bz = uz.customAttributes) || void 0 === bz ? void 0 : bz.enchantmentTier,
          qz = (0, lz.i)(az),
          {
            displayedAmt: hz,
            shown: Uz
          } = Zz(nz, Gz, [Xz, fz, sz]),
          cz = Lz && Uz,
          gz = void 0 !== oz && function(zz, uz) {
            const {
              enchantable: bz,
              salvageable: Ez
            } = tz.gameBridge.latest("stationItems");
            return "Enchanting Table" === zz ? !0 === bz[uz] : "Salvaging Table" === zz && !0 === Ez[uz]
          }(oz, Lz);
        return (0, Fz.jsxs)("div", {
          className: iz()("InvenItem", {
            Highlighted: cz && gz,
            Selected: Nz,
            HotbarHighlighted: vz,
            HoverDisabled: xz
          }),
          onPointerEnter: () => {
            null === dz || void 0 === dz || dz(!0)
          },
          onPointerLeave: () => {
            null === dz || void 0 === dz || dz(!1)
          },
          onPointerDown: Kz,
          onPointerUp: wz,
          "data-inven-idx": nz,
          children: [cz && (0, Fz.jsx)(Mz.c, {
            itemName: null !== (Ez = Pz) && void 0 !== Ez ? Ez : Lz,
            amount: hz,
            enchantmentTier: mz,
            bar: qz
          }), cz && Az && (0, Fz.jsx)("div", {
            className: "InvenItemNewDot"
          }), Jz && (0, Fz.jsx)(Rz, {
            idx: nz
          }), rz && !cz && (0, Fz.jsx)("div", {
            className: "InvenItemUnfilled",
            style: {
              backgroundImage: `url(${rz})`
            }
          })]
        })
      }))
  },
  8987: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => iz
    });
    var Ez = bz(328),
      nz = bz(8994);

    function iz(zz, uz, bz) {
      const iz = Object.entries(uz).sort(((zz, uz) => uz[1] - zz[1])),
        lz = (0, Ez.vb)(zz);
      lz.push(zz ? "\n\n" : "\n");
      for (const [nz, Zz] of iz) {
        var Mz, tz, Hz;
        const zz = null !== (Mz = null === bz || void 0 === bz || null === (tz = bz[nz]) || void 0 === tz ? void 0 : tz.icon) && void 0 !== Mz ? Mz : `${nz} Enchantment`;
        lz.push({
          icon: zz,
          style: {
            fontSize: "1.5rem"
          }
        }), lz.push({
          str: `${nz} ${null!==(Hz=(0,Ez.X)(Zz))&&void 0!==Hz?Hz:Zz}\n`
        })
      }
      lz.push({
        str: "\n"
      });
      for (const [Ez, Zz] of iz) {
        var Oz, pz, dz, Fz;
        const zz = null !== (Oz = null === bz || void 0 === bz || null === (pz = bz[Ez]) || void 0 === pz ? void 0 : pz.icon) && void 0 !== Oz ? Oz : `${Ez} Enchantment`,
          uz = null !== (dz = null === bz || void 0 === bz || null === (Fz = bz[Ez]) || void 0 === Fz ? void 0 : Fz.description) && void 0 !== dz ? dz : (0, nz.i)(Ez);
        lz.push({
          icon: zz,
          style: {
            fontSize: "1.25rem",
            opacity: .75
          }
        }), lz.push({
          str: uz,
          style: {
            fontSize: "0.8em",
            fontWeight: "normal",
            opacity: .75
          }
        }), lz.push({
          str: "\n"
        })
      }
      return lz
    }
  },
  35998: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Ez,
      d: () => nz
    });
    const Ez = -1,
      nz = -2
  },
  8999: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Hz,
      d: () => Xz,
      h: () => Kz,
      i: () => tz,
      m: () => wz,
      p: () => Oz,
      q: () => dz,
      t: () => Rz,
      w: () => pz
    });
    var Ez = bz(316),
      nz = bz(588),
      iz = bz(328),
      lz = bz(4027),
      Mz = bz(8987);

    function tz(zz, uz) {
      var bz;
      let {
        player: Ez,
        chestOrCreative: nz
      } = zz;
      var iz;
      return uz < Ez.length ? null !== (iz = Ez[uz]) && void 0 !== iz ? iz : null : null !== (bz = nz[uz - Ez.length]) && void 0 !== bz ? bz : null
    }

    function Hz(zz) {
      var uz;
      return null !== (uz = zz.amount) && void 0 !== uz ? uz : 0
    }

    function Oz(zz) {
      return 0 === zz.button || void 0 === zz.button
    }

    function pz(zz) {
      return !!zz.shiftKey
    }

    function dz(zz) {
      return "touches" in zz || "touch" === zz.pointerType || "pen" === zz.pointerType
    }
    const Fz = new Set,
      Zz = 50;

    function Rz(zz, uz) {
      var bz;
      const Ez = null === (bz = zz[uz]) || void 0 === bz ? void 0 : bz.displayName;
      return (0, nz.F)(Ez) ? "string" !== typeof uz ? "" : (!Fz.has(uz) && Fz.size < Zz && (Fz.add(uz), console.warn(`No item called "${uz}", so its hover shows the name as given`)), uz) : Ez
    }

    function Kz(zz, uz, bz) {
      var tz, Hz, Oz, pz, dz, Fz, Zz, Kz, wz, Xz, fz, sz, rz, oz;
      const Nz = zz.attributes,
        vz = null !== (tz = null === (Hz = uz[zz.name]) || void 0 === Hz ? void 0 : Hz.rootName) && void 0 !== tz ? tz : zz.name,
        xz = null !== (Oz = null !== (pz = Nz.customDisplayName) && void 0 !== pz ? pz : null === (dz = uz[zz.name]) || void 0 === dz ? void 0 : dz.displayName) && void 0 !== Oz ? Oz : Rz(uz, vz);
      let Jz = xz;
      const Az = null === (Fz = Nz.customAttributes) || void 0 === Fz ? void 0 : Fz.enchantmentTier;
      Az && (Jz = (0, iz.vb)(xz, {
        colour: iz.rb[Az]
      }));
      const Tz = null !== (Zz = null !== (Kz = null !== (wz = function(zz, uz) {
        var bz;
        if (void 0 === zz || null !== (bz = uz.customAttributes) && void 0 !== bz && bz.author) return zz;
        const nz = (0, Ez.uc)(zz);
        return nz.every((zz => "string" === typeof zz)) ? zz : nz.map((zz => "string" === typeof zz ? zz : {
          icon: zz.icon,
          style: {
            fontSize: "1.5em"
          }
        }))
      }(Nz.customDescription, Nz)) && void 0 !== wz ? wz : null === (Xz = uz[zz.name]) || void 0 === Xz ? void 0 : Xz.description) && void 0 !== Kz ? Kz : null === (fz = uz[vz]) || void 0 === fz ? void 0 : fz.description) && void 0 !== Zz ? Zz : "";
      let Lz = Tz;
      if (null !== (sz = Nz.customAttributes) && void 0 !== sz && sz.enchantments) Lz = (0, Mz.c)(Tz, Nz.customAttributes.enchantments, Nz.customAttributes.enchantmentData);
      else if (bz[vz]) Lz = (0, iz.vb)(Tz), Lz.push({
        str: "\n"
      }), Lz.push({
        str: "Enchantable",
        style: {
          fontSize: "0.8em",
          fontWeight: "normal",
          opacity: .4
        }
      });
      else if (null !== (rz = Nz.customAttributes) && void 0 !== rz && rz.mobSettings) {
        var Pz, Gz;
        const zz = Nz.customAttributes.mobSettings;
        var az, Vz;
        if (Lz = [], (0, nz.F)(Nz.customAttributes.health) || (Lz.push({
            str: "\n"
          }), Lz.push({
            icon: "Health",
            style: {
              fontSize: "1.5em"
            }
          }), Lz.push({
            str: " "
          }), Lz.push({
            str: Nz.customAttributes.health.toString()
          }), (0, nz.F)(zz.maxHealth) || (Lz.push({
            str: "/"
          }), Lz.push({
            str: zz.maxHealth.toString()
          }))), !(0, nz.F)(zz.attackDamage) && zz.attackDamage > 0 && (Lz.push({
            str: "\n"
          }), Lz.push({
            icon: "Iron Sword",
            style: {
              fontSize: "1.5em"
            }
          }), Lz.push({
            str: " "
          }), Lz.push({
            str: zz.attackDamage.toString()
          })), !(0, nz.F)(zz.secondaryAttackDamage) && zz.secondaryAttackDamage > 0 && (Lz.push({
            str: "\n"
          }), Lz.push({
            icon: "Stone Crossbow",
            style: {
              fontSize: "1.5em"
            }
          }), Lz.push({
            str: " "
          }), Lz.push({
            str: zz.secondaryAttackDamage.toString()
          })), (0, nz.F)(zz.baseRunningSpeed) || (Lz.push({
            str: "\n"
          }), Lz.push({
            icon: "Speed",
            style: {
              fontSize: "1.5em"
            }
          }), Lz.push({
            str: " "
          }), Lz.push({
            str: zz.baseRunningSpeed.toFixed(2)
          })), "Saddled" === zz.metaInfo) Lz.push({
          str: "\n"
        }), Lz.push({
          str: {
            translationKey: "general:has"
          }
        }), Lz.push({
          str: " "
        }), Lz.push({
          icon: null !== (az = null === (Vz = zz.tameInfo) || void 0 === Vz ? void 0 : Vz.saddleItemName) && void 0 !== az ? az : "Saddle",
          style: {
            fontSize: "1.5em"
          }
        });
        if (Lz.push({
            str: "\n"
          }), Lz.push({
            str: "\n"
          }), zz.petInfo && null !== (Pz = zz.tameInfo) && void 0 !== Pz && Pz.supportsFriendship) {
          const uz = lz.d.getIconsFromFriendshipPoints(zz.petInfo.friendshipPoints);
          for (const zz of uz) Lz.push({
            icon: zz,
            style: {
              fontSize: "1.5em"
            }
          });
          Lz.push({
            str: "\n"
          });
          const bz = lz.d.getMobHungerLevel(zz.petInfo.lastFedAt);
          for (const zz of lz.d.hungerLevelIcons[bz]) Lz.push({
            icon: zz,
            style: {
              fontSize: "1.5em"
            }
          });
          Lz.push({
            str: " "
          }), Lz.push({
            str: lz.d.hungerLevelTranslations[bz],
            style: {
              fontWeight: "bolder"
            }
          })
        }
        if (zz.tameInfo && null !== (Gz = zz.tameInfo) && void 0 !== Gz && Gz.supportsFriendship) {
          var mz, qz;
          let uz = null !== (mz = zz.tameInfo.likedFoods) && void 0 !== mz ? mz : [];
          Lz.push({
            str: "\n"
          }), Lz.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: lz.d.feedTextColours[lz.d.MobFoodType.Superliked]
            }
          }), Lz.push({
            str: " "
          }), null !== (qz = zz.petInfo) && void 0 !== qz && qz.superlikedFoodKnown ? (Lz.push({
            icon: zz.petInfo.superlikedFood,
            style: {
              fontSize: "1.5em"
            }
          }), uz = uz.filter((uz => uz !== zz.petInfo.superlikedFood))) : Lz.push({
            icon: "Question Mark",
            style: {
              fontSize: "1.5em"
            }
          }), Lz.push({
            str: "\n"
          }), Lz.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: lz.d.feedTextColours[lz.d.MobFoodType.Liked]
            }
          }), Lz.push({
            str: " "
          });
          for (const zz of uz) Lz.push({
            icon: zz,
            style: {
              fontSize: "1.5em"
            }
          });
          Lz.push({
            str: "\n"
          }), Lz.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: lz.d.feedTextColours[lz.d.MobFoodType.Neutral]
            }
          }), Lz.push({
            str: " "
          });
          for (const bz of null !== (hz = zz.tameInfo.neutralFoods) && void 0 !== hz ? hz : []) {
            var hz;
            Lz.push({
              icon: bz,
              style: {
                fontSize: "1.5em"
              }
            })
          }
          Lz.push({
            str: "\n"
          }), Lz.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: lz.d.feedTextColours[lz.d.MobFoodType.Disliked]
            }
          }), Lz.push({
            str: " "
          });
          for (const bz of null !== (Uz = zz.tameInfo.dislikedFoods) && void 0 !== Uz ? Uz : []) {
            var Uz;
            Lz.push({
              icon: bz,
              style: {
                fontSize: "1.5em"
              }
            })
          }
        }
        Lz.length > 0 ? (Lz.shift(), Lz.unshift(...(0, iz.vb)(Tz))) : Lz = (0, iz.vb)(Tz)
      }
      return {
        name: Jz,
        desc: Lz,
        fontStyle: null !== (oz = Nz.customAttributes) && void 0 !== oz && oz.author ? "italic" : "normal"
      }
    }

    function wz(zz, uz, bz, Ez) {
      const nz = tz(zz, bz),
        iz = tz(zz, Ez);
      if (!nz) return !1;
      const lz = uz[nz.name].armourReduction,
        Mz = uz[iz.name].armourReduction;
      if (Mz === lz) {
        var Hz, Oz, pz, dz;
        const zz = null !== (Hz = null === (Oz = nz.attributes.customAttributes) || void 0 === Oz ? void 0 : Oz.enchantmentTier) && void 0 !== Hz ? Hz : "Tier 0",
          uz = null !== (pz = null === (dz = iz.attributes.customAttributes) || void 0 === dz ? void 0 : dz.enchantmentTier) && void 0 !== pz ? pz : "Tier 0";
        return parseInt(zz.replace("Tier ", "")) >= parseInt(uz.replace("Tier ", ""))
      }
      return lz > Mz
    }

    function Xz(zz) {
      let uz;
      if ("number" === typeof zz) {
        const bz = document.querySelector(`[data-inven-idx="${zz}"]`);
        if (!bz) return null;
        uz = bz.getBoundingClientRect()
      } else uz = zz.getBoundingClientRect();
      return {
        x: uz.left + uz.width / 2,
        y: uz.top + uz.height / 2
      }
    }
  },
  8892: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Fz,
      e: () => Zz,
      g: () => Rz
    });
    var Ez = bz(1419),
      nz = bz(56),
      iz = bz(1283),
      lz = bz(4292),
      Mz = bz(2256),
      tz = bz(1181),
      Hz = bz(96),
      Oz = bz(1912),
      pz = bz(1305),
      dz = bz(1089);

    function Fz(zz) {
      let {
        show: uz,
        onClose: bz
      } = zz;
      const {
        requestedGameNameWithVariation: Ez,
        lobbyName: nz,
        shownLobbyName: iz
      } = (0, Oz.h)("connectedGame"), tz = (0, Mz.b)(Ez, nz, !1);
      return Hz.featureFlags.canUseInviteLinks && (0, dz.jsx)(lz.d, {
        show: uz,
        close: bz,
        padShowsHud: !0,
        togglePointerLock: !1,
        globallyUniqueKey: "InviteLinkBox",
        doGameplayStartStopOnShow: !0,
        children: (0, dz.jsxs)("div", {
          className: "InviteLinkBox AnimFadeInScaleUp",
          children: [(0, dz.jsx)("div", {
            className: "InviteLinkBoxHeader SmallTextBold",
            children: "Invite Friends"
          }), (0, dz.jsxs)("div", {
            className: "InviteLinkBoxDescription SmallTextLight",
            children: [(0, dz.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: '"Join Lobby Name" Button Info'
            }), "Game: ", null === tz ? (0, dz.jsx)(pz.c, {}) : tz, (0, dz.jsx)("br", {}), "Lobby Name: ", iz, (0, dz.jsx)("br", {}), (0, dz.jsx)("br", {}), (0, dz.jsx)("br", {}), (0, dz.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: "Link"
            })]
          }), (0, dz.jsx)(Zz, {})]
        })
      })
    }

    function Zz() {
      var zz;
      const {
        t: uz
      } = (0, tz.F)(), bz = null !== (zz = Rz(Hz.featureFlags.canUseInviteLinks)) && void 0 !== zz ? zz : "Loading Link...", [iz, lz] = (0, nz.useState)(0), [Mz, Oz] = (0, nz.useReducer)((zz => zz + 1), 0);
      return (0, nz.useEffect)((() => {
        const zz = setTimeout((() => {
          Oz()
        }), 1100);
        return () => {
          clearTimeout(zz)
        }
      }), [iz]), Hz.featureFlags.canUseInviteLinks && (0, dz.jsxs)("div", {
        className: "InviteLinkInnerWrapper",
        children: [(0, dz.jsx)("div", {
          className: "InviteLinkInner",
          children: bz
        }), (0, dz.jsx)(Ez.f, {
          className: "InviteLinkCopyButton",
          onClick: () => {
            navigator.clipboard.writeText(bz).catch((zz => {
              console.error("Failed to copy invite link:", zz)
            })), lz(Date.now())
          },
          disabled: Date.now() - iz < 1e3,
          children: Date.now() - iz < 1e3 ? uz("general:copied") : uz("general:copy")
        })]
      })
    }

    function Rz(zz) {
      const [uz, bz] = (0, nz.useState)(null);
      return (0, nz.useEffect)((() => {
        if (!zz) return;
        let uz = !0;
        return (0, iz.v)().then((zz => {
          uz && bz(zz)
        })).catch((zz => {
          console.error("Failed to get invite link:", zz)
        })), () => {
          uz = !1
        }
      }), [zz]), uz
    }
  },
  36447: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => vz
    });
    var Ez = bz(56),
      nz = bz(2313),
      iz = bz(1846),
      lz = bz(577),
      Mz = bz(22),
      tz = bz(1038),
      Hz = bz.n(tz),
      Oz = bz(36029),
      pz = bz(2458),
      dz = bz(36032),
      Fz = bz(2485),
      Zz = bz(2466),
      Rz = bz(3355),
      Kz = bz(20),
      wz = bz(1959),
      Xz = bz(2261),
      fz = bz(1212),
      sz = bz(4678),
      rz = bz(1912),
      oz = bz(96),
      Nz = bz(1089);
    const vz = (0, Ez.memo)((function() {
      const zz = (0, nz.g)("lobbyLeaderboardInfo"),
        uz = (0, rz.h)("players"),
        bz = (0, rz.h)("lobbyLeaderboardRows"),
        Mz = (0, rz.h)("hiddenPlayerNames"),
        tz = (0, Ez.useRef)(null),
        [Hz, Oz] = (0, Ez.useReducer)((zz => zz + 1), 0);
      return (0, Ez.useEffect)((() => (0, wz.b)((() => {
        Oz()
      }))), []), (0, Nz.jsx)("div", {
        className: "LobbyLeaderboardContainer Menu",
        children: (0, Nz.jsx)("div", {
          className: "MenuBody",
          children: function() {
            if (!zz) return (0, Nz.jsx)(Nz.Fragment, {});
            const Ez = JSON.parse(JSON.stringify(zz)),
              nz = [...uz.ids],
              Hz = {},
              Oz = {};
            for (const zz of nz) {
              var pz, Fz;
              Hz[zz] = null === (pz = bz[zz]) || void 0 === pz ? void 0 : pz.colour;
              const uz = null === (Fz = bz[zz]) || void 0 === Fz ? void 0 : Fz.values;
              uz && (Oz[zz] = {
                ...uz
              })
            }
            const Zz = Object.keys(Ez);
            Zz.sort(((zz, uz) => Ez[zz].sortPriority - Ez[uz].sortPriority)), nz.sort(((zz, uz) => {
              if (!Oz[zz] || !Oz[uz]) return 0;
              for (const bz of Zz) {
                const nz = Oz[zz][bz],
                  iz = Oz[uz][bz];
                let lz = 0;
                if ("string" == typeof nz && "string" == typeof iz ? lz = nz.localeCompare(iz) : "number" == typeof nz && "number" == typeof iz ? lz = nz - iz : "number" == typeof nz && "string" == typeof iz ? lz = 1 : "string" == typeof nz && "number" == typeof iz && (lz = -1), lz) return lz * ("ascending" === Ez[bz].sortOrder ? 1 : -1)
              }
              return 0
            }));
            for (const zz of nz) {
              var Rz, Kz, rz;
              const {
                name: Ez,
                ranks: nz,
                cosmetics: iz
              } = uz.byId[zz], Mz = [], tz = null !== (Rz = null === (Kz = bz[zz]) || void 0 === Kz || null === (rz = Kz.tags) || void 0 === rz ? void 0 : rz.flatMap((zz => 0 === zz.length ? zz : [...zz, String.fromCharCode(8198)]))) && void 0 !== Rz ? Rz : [];
              Mz.push(...tz), Mz.push(...(0, fz.z)(nz, Ez, (null === iz || void 0 === iz ? void 0 : iz.nameColour) === lz.b || null === iz || void 0 === iz ? void 0 : iz.nameColour)), Oz[zz] ??= {}, Oz[zz].name = Mz
            }

            function oz(zz, bz) {
              if (Oz[zz] && void 0 !== Oz[zz][bz]) {
                if ("name" === bz) {
                  const {
                    name: Ez,
                    cosmetics: nz
                  } = uz.byId[zz];
                  return (0, Nz.jsxs)("div", {
                    className: "PlayerPfpAndName",
                    children: [nz && (0, Nz.jsx)(Xz.e, {
                      cosmetics: nz
                    }), " ", (0, Nz.jsx)(iz.b, {
                      text: Oz[zz][bz],
                      friendBadgeFor: (0, wz.c)(Ez, Mz) ? Ez : void 0
                    })]
                  })
                }
                return (0, Nz.jsx)(iz.b, {
                  text: Oz[zz][bz]
                })
              }
              return ""
            }
            const vz = Object.keys(Ez).filter((zz => !0 !== Ez[zz].hidden)).map((zz => {
              var uz;
              return {
                key: zz,
                header: (0, Nz.jsx)(iz.b, {
                  text: null !== (uz = Ez[zz].displayName) && void 0 !== uz ? uz : ""
                })
              }
            }));
            return (0, Nz.jsx)("div", {
              ref: tz,
              className: "LobbyLeaderboard",
              children: (0, Nz.jsx)(sz.c, {
                columns: vz,
                rows: nz,
                getRowKey: zz => zz,
                renderRow: zz => {
                  const bz = zz !== uz.localId;
                  return (0, Nz.jsx)(xz, {
                    playerId: zz,
                    playerName: uz.byId[zz].name,
                    isOtherPlayer: bz,
                    opensProfileCard: (0, dz.h)(bz, uz.byId[zz].name, Mz),
                    lobbyLeaderboardInfo: Ez,
                    getPlayerValue: oz,
                    playerColors: Hz
                  })
                }
              })
            })
          }()
        })
      })
    }));

    function xz(zz) {
      let {
        playerId: uz,
        playerName: bz,
        isOtherPlayer: nz,
        opensProfileCard: iz,
        lobbyLeaderboardInfo: lz,
        getPlayerValue: tz,
        playerColors: wz
      } = zz;
      const Xz = (0, Ez.useRef)(null);
      (0, Ez.useEffect)((() => () => {
        pz.e.closeIfOwner(Xz)
      }), []);
      const fz = {
          icon: "flag",
          text: "Report",
          onClick: () => {
            Mz.k.sK("OpenReportMenu", {
              playerEId: uz,
              playerName: bz,
              zM: null,
              serverChatMsgId: null
            })
          }
        },
        sz = () => ({
          ...(0, dz.e)(uz, bz),
          showLocation: !1,
          status: null,
          extraActions: [fz],
          friendRequestSource: "leaderboard"
        });
      return (0, Nz.jsxs)("tr", {
        ref: Xz,
        "data-pad-focusable": iz || void 0,
        [pz.h]: iz || void 0,
        onClick: iz ? () => {
          var zz;
          pz.e.toggle(Xz, {
            ...sz(),
            anchor: null !== (zz = Xz.current.querySelector(".PlayerPfpAndName")) && void 0 !== zz ? zz : Xz.current
          })
        } : void 0,
        onContextMenu: iz ? zz => {
          (0, Fz.g)(Xz, zz, sz(), Kz.e.get("isTouchScreen"))
        } : void 0,
        onPointerDown: iz ? zz => {
          (0, Zz.b)(zz, (() => (0, dz.e)(uz, bz).playerSocialPreview))
        } : void 0,
        children: [Object.keys(lz).map((zz => !0 === lz[zz].hidden ? null : (0, Nz.jsxs)("td", {
          className: Hz()("LobbyLeaderboardValue SmallTextBold", {
            LobbyLeaderboardValueHighlighted: !nz
          }),
          children: [(0, Nz.jsx)("div", {
            className: "LobbyLeaderboardValueText",
            children: tz(uz, zz)
          }), (0, Nz.jsx)("div", {
            className: "LobbyLeaderboardValueBg",
            style: {
              backgroundColor: wz[uz]
            }
          })]
        }, zz))), nz && !iz && (0, Nz.jsx)(Oz.d, {
          className: "LobbyLeaderboardRowFloatingActions",
          triggerElementRef: Xz,
          options: [{
            icon: fz.icon,
            text: fz.text,
            onPointerDown: fz.onClick
          }, ...null === bz || oz.featureFlags.useSocialFeatures ? [] : (0, Rz.d)(null, bz)]
        })]
      })
    }
  },
  4524: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Xz,
      b: () => wz
    });
    var Ez = bz(56),
      nz = bz(1417),
      iz = bz(1846),
      lz = bz(4531),
      Mz = bz(1089);
    const tz = (0, Ez.memo)((function(zz) {
      let {
        initialParameters: uz
      } = zz;
      const bz = (0, Ez.useRef)(null),
        nz = (0, Ez.useRef)(null),
        tz = (0, Ez.useRef)(0),
        Hz = (0, Ez.useRef)(null),
        Oz = uz.description,
        pz = uz.Sz,
        {
          scale: dz,
          rotation: Fz
        } = null !== uz && void 0 !== uz ? uz : {},
        Zz = (0, lz.f)();
      return (0, Ez.useEffect)((() => {
        const zz = Zz.onFrame((() => {
          const zz = Zz.getState();
          if (!zz.isActive || !bz.current || !nz.current) return;
          const uz = zz.state;
          if (bz.current.value = uz.progress, uz.clickCount > tz.current) {
            tz.current = uz.clickCount;
            const zz = nz.current;
            zz.classList.add("pulse"), Hz.current = setTimeout((() => {
              zz.classList.remove("pulse")
            }), 100)
          }
        }));
        return () => {
          clearTimeout(Hz.current), zz()
        }
      }), [Zz]), (0, Mz.jsx)(Mz.Fragment, {
        children: (0, Mz.jsxs)("div", {
          className: "QTEProgressBarWrapper",
          style: {
            ...null !== dz && {
              "--scale": dz
            },
            ...null !== Fz && {
              "--rotation": `${Fz}deg`
            }
          },
          children: [(0, Mz.jsx)("progress", {
            id: "catch",
            max: 100,
            className: "QTEProgressBar",
            ref: bz
          }), (0, Mz.jsx)("span", {
            className: "QTEProgressBarInteractionIndicator",
            ref: nz,
            children: (0, Mz.jsx)(iz.b, {
              text: [{
                icon: pz
              }]
            })
          }), (0, Mz.jsx)("div", {
            className: "QTEProgressBarDescription",
            children: (0, Mz.jsx)(iz.b, {
              text: Oz
            })
          })]
        })
      })
    }));
    var Hz = bz(1038),
      Oz = bz.n(Hz);
    const pz = 2 * Math.PI * 90,
      dz = (0, Ez.memo)((function(zz) {
        let {
          initialParameters: uz
        } = zz;
        const bz = (0, Ez.useRef)(null),
          nz = (0, Ez.useRef)(null),
          tz = (0, Ez.useRef)(null),
          Hz = uz.label,
          dz = uz.icon,
          Fz = uz.Qz,
          {
            scale: Zz,
            rotation: Rz,
            Wz: Kz
          } = null !== uz && void 0 !== uz ? uz : {},
          wz = (0, lz.f)();
        return (0, Ez.useEffect)((() => {
          const zz = wz.onFrame((() => {
            var zz, uz;
            const Ez = wz.getState();
            if (!Ez.isActive || !nz.current) return;
            const iz = Ez.state,
              lz = null !== (zz = iz.timeRemaining) && void 0 !== zz ? zz : 0,
              Mz = null !== (uz = iz.Dz) && void 0 !== uz ? uz : 1,
              Hz = pz * (1 - lz / Mz);
            nz.current.style.strokeDashoffset = `${Hz}`, bz.current && (bz.current.style.opacity = lz > 0 ? "1" : "0"), tz.current && Fz && (tz.current.textContent = `${(lz/1e3).toFixed(1)}s`)
          }));
          return () => {
            zz()
          }
        }), [wz, Fz]), (0, Mz.jsxs)("div", {
          className: "QTETimedClick",
          ref: bz,
          style: {
            ...null !== Zz && {
              "--scale": Zz
            },
            ...null !== Rz && {
              "--rotation": `${Rz}deg`
            }
          },
          children: [(0, Mz.jsxs)("div", {
            className: "QTETimedClickCircleContainer",
            children: [(0, Mz.jsxs)("svg", {
              className: "QTETimedClickCircularProgress",
              viewBox: "0 0 200 200",
              children: [(0, Mz.jsx)("circle", {
                className: "QTETimedClickProgressTrack",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12"
              }), (0, Mz.jsx)("circle", {
                className: "QTETimedClickProgressArc",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12",
                strokeLinecap: "square",
                strokeDasharray: pz,
                ref: nz
              })]
            }), (0, Mz.jsx)("div", {
              className: "QTETimedClickCenterContent",
              children: (0, Mz.jsx)(iz.b, {
                text: [{
                  icon: dz
                }],
                className: Oz()("QTETimedClickInnerText", {
                  QTETimedClickBreathe: Kz
                })
              })
            })]
          }), (0, Mz.jsxs)("div", {
            className: "QTETimedClickRightTextContainer",
            children: [(0, Mz.jsx)(iz.b, {
              text: Hz,
              className: "QTETimedClickLabelText"
            }), Fz && (0, Mz.jsx)("span", {
              className: "QTETimedClickTimeText",
              ref: tz
            })]
          })]
        })
      })),
      Fz = (0, Ez.memo)((function(zz) {
        let {
          initialParameters: uz
        } = zz;
        const bz = (0, Ez.useRef)(null),
          nz = (0, Ez.useRef)(null),
          tz = (0, Ez.useRef)(null),
          Hz = (0, Ez.useRef)(!1),
          Oz = uz.description,
          pz = null === uz || void 0 === uz ? void 0 : uz.icon,
          dz = (0, lz.f)();
        return (0, Ez.useEffect)((() => {
          const zz = dz.onFrame((() => {
            const zz = dz.getState();
            if (!zz.isActive) return;
            const uz = zz.state;
            if (bz.current) {
              const zz = 100 * (uz.catchZonePosition - uz.jz / 2);
              bz.current.style.left = `${zz}%`, bz.current.style.width = 100 * uz.jz + "%", uz.isCatching !== Hz.current && (Hz.current = uz.isCatching, uz.isCatching ? bz.current.classList.add("catching") : bz.current.classList.remove("catching"))
            }
            nz.current && (nz.current.style.left = 100 * uz.moverPosition + "%"), tz.current && (tz.current.value = uz.progress)
          }));
          return () => {
            zz()
          }
        }), [dz]), (0, Mz.jsxs)("div", {
          className: "QTEGravityBar",
          children: [(0, Mz.jsx)("div", {
            className: "QTEGravityBarDescription",
            children: (0, Mz.jsx)(iz.b, {
              text: Oz
            })
          }), (0, Mz.jsx)("progress", {
            max: 100,
            className: "QTEGravityBarProgress",
            ref: tz
          }), (0, Mz.jsxs)("div", {
            className: "QTEGravityBarTrack",
            children: [(0, Mz.jsx)("div", {
              className: "QTEGravityBarCatchZone",
              ref: bz
            }), (0, Mz.jsx)("div", {
              className: "QTEGravityBarMover",
              ref: nz,
              children: (0, Mz.jsx)("span", {
                children: pz && (0, Mz.jsx)(iz.b, {
                  text: [{
                    icon: pz,
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
    var Zz = bz(588);
    const Rz = (0, Ez.memo)((function(zz) {
        let {
          initialParameters: uz
        } = zz;
        const bz = (0, Ez.useRef)(null),
          nz = uz.label,
          tz = uz.uu,
          {
            icon: Hz,
            scale: Oz,
            rotation: pz
          } = null !== uz && void 0 !== uz ? uz : {},
          dz = 100 * (.5 - tz / 2),
          Fz = 100 * tz,
          Rz = (0, lz.f)();
        return (0, Ez.useEffect)((() => {
          const zz = Rz.onFrame((() => {
            const zz = Rz.getState();
            if (!zz.isActive || !bz.current) return;
            const uz = zz.state;
            bz.current.style.left = 100 * uz.markerPosition + "%"
          }));
          return () => {
            zz()
          }
        }), [Rz]), (0, Mz.jsxs)("div", {
          className: "QTEPrecisionBarWrapper",
          style: {
            ...!(0, Zz.F)(Oz) && {
              "--scale": Oz
            },
            ...!(0, Zz.F)(pz) && {
              "--rotation": `${pz}deg`
            }
          },
          children: [Hz && (0, Mz.jsx)(iz.b, {
            text: [{
              icon: Hz
            }],
            className: "QTEPrecisionBarIcon"
          }), (0, Mz.jsxs)("div", {
            className: "QTEPrecisionBarTrack",
            children: [(0, Mz.jsx)("div", {
              className: "QTEPrecisionBarSuccessZone",
              style: {
                left: `${dz}%`,
                width: `${Fz}%`
              }
            }), (0, Mz.jsx)("div", {
              className: "QTEPrecisionBarMarker",
              ref: bz
            })]
          }), (0, Mz.jsx)("div", {
            className: "QTEPrecisionBarLabel",
            children: (0, Mz.jsx)(iz.b, {
              text: nz
            })
          })]
        })
      })),
      Kz = (0, Ez.memo)((function(zz) {
        let {
          initialParameters: uz
        } = zz;
        const bz = (0, Ez.useRef)(null),
          [nz, tz] = (0, Ez.useState)((() => new Array(uz.nu).fill("pending"))),
          [Hz, Oz] = (0, Ez.useState)((() => {
            const zz = uz.Mu;
            return (0, Zz.F)(zz) || zz <= 0 ? [] : new Array(zz).fill("pending")
          })),
          pz = uz.label,
          {
            icon: dz
          } = uz,
          Fz = (0, Ez.useRef)(0),
          Rz = (0, Ez.useRef)(0),
          Kz = (0, Ez.useRef)([]),
          wz = (0, lz.f)();
        return (0, Ez.useEffect)((() => {
          const zz = wz.onFrame((() => {
            const zz = wz.getState();
            if (!zz.isActive || !bz.current) return;
            const uz = zz.state,
              Ez = 30 + 60 * uz.outerCircleProgress;
            if (bz.current.setAttribute("r", String(Ez)), !0 === uz.lastClickResult && uz.successes > Fz.current) {
              bz.current.classList.remove("QTERhythmClickOuterCircle--miss"), bz.current.classList.add("QTERhythmClickOuterCircle--hit");
              const zz = setTimeout((() => {
                var zz;
                null === (zz = bz.current) || void 0 === zz || zz.classList.remove("QTERhythmClickOuterCircle--hit")
              }), 200);
              Kz.current.push(zz)
            } else if (!1 === uz.lastClickResult && uz.misses > Rz.current) {
              bz.current.classList.remove("QTERhythmClickOuterCircle--hit"), bz.current.classList.add("QTERhythmClickOuterCircle--miss");
              const zz = setTimeout((() => {
                var zz;
                null === (zz = bz.current) || void 0 === zz || zz.classList.remove("QTERhythmClickOuterCircle--miss")
              }), 200);
              Kz.current.push(zz)
            }
            uz.successes === Fz.current && uz.misses === Rz.current || (Fz.current = uz.successes, Rz.current = uz.misses, tz((zz => {
              const bz = [...zz];
              for (let Ez = 0; Ez < uz.nu; Ez++) bz[Ez] = Ez < uz.successes ? "success" : "pending";
              return bz
            })), Oz((zz => {
              if (0 === zz.length) return zz;
              const bz = [...zz];
              for (let Ez = 0; Ez < bz.length; Ez++) bz[Ez] = Ez < uz.misses ? "miss" : "pending";
              return bz
            })))
          }));
          return () => {
            zz();
            for (const zz of Kz.current) clearTimeout(zz);
            Kz.current = []
          }
        }), [wz]), (0, Mz.jsxs)("div", {
          className: "QTERhythmClickWrapper",
          children: [(0, Mz.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: nz.map(((zz, uz) => (0, Mz.jsx)("div", {
              className: "QTERhythmClickDot" + ("success" === zz ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
            }, uz)))
          }), (0, Mz.jsxs)("div", {
            className: "QTERhythmClickCircleContainer",
            children: [(0, Mz.jsxs)("svg", {
              className: "QTERhythmClickSvg",
              viewBox: "0 0 200 200",
              children: [(0, Mz.jsx)("circle", {
                className: "QTERhythmClickInnerCircle",
                cx: "100",
                cy: "100",
                r: 30
              }), (0, Mz.jsx)("circle", {
                className: "QTERhythmClickOuterCircle",
                cx: "100",
                cy: "100",
                r: 90,
                ref: bz
              })]
            }), dz && (0, Mz.jsx)("div", {
              className: "QTERhythmClickCenterContent",
              children: (0, Mz.jsx)(iz.b, {
                text: [{
                  icon: dz
                }],
                className: "QTERhythmClickIcon"
              })
            })]
          }), Hz.length > 0 && (0, Mz.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: Hz.map(((zz, uz) => (0, Mz.jsx)("div", {
              className: "QTERhythmClickDot" + ("miss" === zz ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
            }, uz)))
          }), (0, Mz.jsx)("div", {
            className: "QTERhythmClickLabel",
            children: (0, Mz.jsx)(iz.b, {
              text: pz
            })
          })]
        })
      }));

    function wz(zz) {
      let {
        qte: uz
      } = zz;
      switch (uz.type) {
        case "progressBar":
          return (0, Mz.jsx)(tz, {
            initialParameters: uz.parameters
          });
        case "timedClick":
          return (0, Mz.jsx)(dz, {
            initialParameters: uz.parameters
          });
        case "gravityBar":
          return (0, Mz.jsx)(Fz, {
            initialParameters: uz.parameters
          });
        case "precisionBar":
          return (0, Mz.jsx)(Rz, {
            initialParameters: uz.parameters
          });
        case "rhythmClick":
          return (0, Mz.jsx)(Kz, {
            initialParameters: uz.parameters
          });
        default:
          return console.warn("Unknown QTE type"), null
      }
    }
    const Xz = (0, Ez.memo)((function() {
      const [zz, uz] = (0, Ez.useState)({
        type: null,
        parameters: null,
        state: null,
        isActive: !1
      });
      return (0, nz.g)("qteStateUpdated", (zz => {
        uz(zz)
      })), zz.isActive && zz.type ? (0, Mz.jsx)("div", {
        className: "QTE",
        "data-camera-keeper": "",
        children: (0, Mz.jsx)(wz, {
          qte: zz
        })
      }) : null
    }))
  },
  4531: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Mz,
      f: () => tz
    });
    var Ez = bz(56),
      nz = bz(1273),
      iz = bz(4540);
    const lz = {
        getState: () => iz.d.getCurrentState(),
        onFrame: nz.m
      },
      Mz = (0, Ez.createContext)(lz);

    function tz() {
      return (0, Ez.useContext)(Mz)
    }
  },
  8979: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Hz
    });
    var Ez = bz(56),
      nz = bz(1038),
      iz = bz.n(nz),
      lz = bz(1912),
      Mz = bz(1089);

    function tz(zz) {
      const uz = Math.floor(zz / 3600),
        bz = Math.floor(zz % 3600 / 60),
        Ez = Math.floor(zz % 60),
        nz = `${bz.toString().padStart(2,"0")}:${Ez.toString().padStart(2,"0")}`;
      return uz > 0 ? `${uz}:${nz}` : nz
    }
    const Hz = (0, Ez.memo)((function(zz) {
      let {
        className: uz
      } = zz;
      const {
        recording: bz,
        seconds: Ez
      } = (0, lz.h)("replayRecorder");
      return bz ? (0, Mz.jsxs)("div", {
        className: iz()("RecordingIndicator", uz),
        children: [(0, Mz.jsx)("span", {
          className: "RecordingIndicatorDot"
        }), (0, Mz.jsx)("span", {
          className: "RecordingIndicatorLabel",
          children: "REC"
        }), (0, Mz.jsx)("span", {
          className: "RecordingIndicatorTime",
          children: tz(Ez)
        })]
      }) : null
    }))
  },
  35840: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Oz,
      d: () => dz
    });
    var Ez = bz(56),
      nz = bz(1322),
      iz = bz(1181),
      lz = bz(1305),
      Mz = bz(3230),
      tz = bz(4690),
      Hz = bz(1089);

    function Oz(zz) {
      let {
        loading: uz,
        schematics: bz,
        onSchematicPicked: Ez,
        selectedSchematicIdList: nz = [],
        disableAutoExport: tz
      } = zz;
      const {
        t: Oz
      } = (0, iz.F)();
      return (0, Hz.jsxs)("div", {
        className: "SchematicList",
        children: [uz && (0, Hz.jsx)(lz.c, {}), !uz && 0 === bz.length && (0, Hz.jsx)("div", {
          className: "NoSchematicsText",
          children: Oz("worldBuilder:noSavedSchematic")
        }), !uz && bz.map((zz => (0, Hz.jsx)(Mz.i, {
          source: {
            type: "schematic",
            schematic: zz
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            Ez(zz)
          },
          isSelected: nz.includes(zz.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: zz.isAutoExported && tz,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, zz.schematicId)))]
      })
    }

    function pz(zz) {
      let {
        ownedSchematics: uz,
        currentWorldSchematicId: bz,
        onClose: nz
      } = zz;
      const {
        t: lz
      } = (0, iz.F)(), [Mz, pz] = (0, Ez.useState)(null);
      return (0, Hz.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === Mz && (0, Hz.jsxs)(Hz.Fragment, {
          children: [(0, Hz.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: lz("worldBuilder:schematicList")
          }), (0, Hz.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: lz("worldBuilder:clickSchematicForOptions")
          }), (0, Hz.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, Hz.jsx)(Oz, {
              loading: !1,
              schematics: uz,
              onSchematicPicked: zz => {
                pz(zz)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== Mz && (0, Hz.jsx)(tz.i, {
          schematic: Mz,
          inSourceWorld: Mz.schematicId === bz,
          onSchematicUpdate: zz => {
            pz(zz)
          },
          onClose: () => {
            pz(null), nz()
          }
        })]
      })
    }

    function dz(zz) {
      let {
        ownedSchematics: uz,
        currentWorldSchematicId: bz,
        onClose: Ez
      } = zz;
      nz.NotificationProvider.showCustomPopup({
        body: zz => (0, Hz.jsx)(pz, {
          ownedSchematics: uz,
          currentWorldSchematicId: bz,
          onClose: zz
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: Ez,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  36361: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => rz,
      g: () => sz
    });
    var Ez = bz(4055),
      nz = bz(1417),
      iz = bz(56),
      lz = bz(6204),
      Mz = bz(4041),
      tz = bz(1269),
      Hz = bz(1871),
      Oz = bz(1846),
      pz = bz(1419),
      dz = bz(1181),
      Fz = bz(36363),
      Zz = bz(1038),
      Rz = bz.n(Zz),
      Kz = bz(1283),
      wz = bz(1047),
      Xz = bz(1266),
      fz = bz(1089);
    const sz = "SleepingOverlay";

    function rz() {
      const {
        t: zz
      } = (0, dz.F)(), [uz, bz] = (0, iz.useState)(!1), [Zz, rz] = (0, iz.useState)(null), [Nz, vz] = (0, iz.useState)(1), [xz, Jz] = (0, iz.useState)(!1), [Az, Tz] = (0, iz.useState)(!1), Lz = (0, iz.useRef)(0), Pz = (0, iz.useRef)(!1), Gz = (0, iz.useRef)(!1), az = (0, iz.useRef)(), Vz = (0, iz.useRef)(null);

      function mz() {
        const zz = null !== Zz && void 0 !== Zz ? Zz : "Rested Speed";
        Hz.gameBridge.send("wakeUp", Az ? zz : null), Vz.current = null, bz(!1), rz(null), vz(1), Jz(!1), Tz(!1)
      }

      function qz() {
        return !xz && (mz(), !0)
      }
      return (0, nz.g)("PlayerPhysicsTypeUpdate", (zz => {
        zz !== Vz.current && (Vz.current = zz, zz === lz.m.SLEEPING ? (Gz.current || (Lz.current = Hz.gameBridge.lookup("cameraZoom", null), Gz.current = !0), Pz.current = !0, Hz.gameBridge.send("setCameraZoom", 3), bz(!0), vz(function() {
          for (const zz of Hz.gameBridge.lookup("blocksStandingOn", null)) {
            if (Fz.e.leafBeds.includes(zz)) return console.log(`Found leaf bed: ${zz}`), 1;
            if (Fz.e.woolBeds.includes(zz)) return console.log(`Found woold bed: ${zz}`), 2;
            if (Fz.e.strongBeds.includes(zz)) return console.log(`Found strong bed ${zz}`), 3
          }
          return 1
        }())) : (Gz.current = !1, bz(!1), rz(null), vz(1)))
      })), (0, iz.useEffect)((() => () => {
        (0, tz.k)(sz)
      }), []), (0, iz.useEffect)((() => {
        uz ? (0, tz.m)(sz) : ((0, tz.k)(sz), Pz.current && (Hz.gameBridge.send("setCameraZoom", Lz.current), Pz.current = !1))
      }), [uz]), (0, Xz.u)("overlay", az, qz, uz), (0, fz.jsx)(Ez.b, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: uz,
        timeout: 300,
        nodeRef: az,
        unmountOnExit: !0,
        children: (0, fz.jsx)("div", {
          ref: az,
          onClick: zz => {
            qz() && zz.stopPropagation()
          },
          children: (0, fz.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, fz.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: Mz.g.map((uz => (0, fz.jsxs)(oz, {
                restedEffect: uz,
                qM: Zz,
                setChosenRestedEffect: rz,
                children: [(0, fz.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, fz.jsx)(Oz.b, {
                    text: [{
                      icon: uz
                    }]
                  }), Mz.f[uz].shortName]
                }), (0, fz.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: zz(Mz.f[uz].description, {
                    time: Mz.f[uz].effectLevelDurations[Nz] / 6e4
                  })
                })]
              }, uz)))
            }), (0, fz.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, fz.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, fz.jsxs)(pz.f, {
                className: "SleepingOverlayWakeUpButton",
                onClick: zz => {
                  Az ? mz() : (Jz(!0), (0, Kz.Y)((() => {
                    Jz(!1), Tz(!0)
                  }), !0)), zz.stopPropagation()
                },
                loading: xz,
                children: [!Az && (0, fz.jsxs)(fz.Fragment, {
                  children: [(0, fz.jsx)(wz.c, {
                    name: "film"
                  }), " ", zz("classicGame:watchAdToGetRestedPerk")]
                }), Az && zz("classicGame:wakeUp")]
              }), (0, fz.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, fz.jsx)("div", {
                  className: Rz()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === Nz
                  }),
                  children: (0, fz.jsx)(Oz.b, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, fz.jsx)("div", {
                  className: Rz()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === Nz
                  }),
                  children: (0, fz.jsx)(Oz.b, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, fz.jsx)("div", {
                  className: Rz()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === Nz
                  }),
                  children: (0, fz.jsx)(Oz.b, {
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
    const oz = (0, iz.memo)((function(zz) {
      let {
        children: uz,
        restedEffect: bz,
        qM: Ez,
        setChosenRestedEffect: nz
      } = zz;
      return bz === Ez ? (0, fz.jsx)(pz.q, {
        onClick: zz => {
          zz.stopPropagation()
        },
        children: uz
      }) : (0, fz.jsx)(pz.j, {
        onClick: zz => {
          nz(bz), zz.stopPropagation()
        },
        children: uz
      })
    }))
  },
  36032: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Hz,
      h: () => tz
    });
    var Ez = bz(577),
      nz = bz(1871),
      iz = bz(1597),
      lz = bz(96),
      Mz = bz(1249);

    function tz(zz, uz, bz) {
      return lz.featureFlags.useSocialFeatures && zz && null === (0, Mz.b)(uz, bz)
    }

    function Hz(zz, uz) {
      var bz, lz;
      const Mz = iz.b.getSocialState().friends.find((zz => zz.name.toLowerCase() === uz.toLowerCase())),
        tz = nz.gameBridge.latest("players").byId[zz],
        Hz = void 0 !== tz && tz.name === uz,
        Oz = Hz && null !== (bz = tz.cosmetics) && void 0 !== bz ? bz : void 0,
        pz = Mz && Oz ? {
          ...Mz,
          cosmetics: Oz
        } : Mz;
      return {
        playerSocialPreview: null !== pz && void 0 !== pz ? pz : {
          isError: !1,
          name: uz,
          ranks: Hz ? [...tz.ranks] : [],
          cosmetics: null !== Oz && void 0 !== Oz ? Oz : {},
          nameColour: null !== (lz = null === Oz || void 0 === Oz ? void 0 : Oz.nameColour) && void 0 !== lz ? lz : Ez.b,
          location: {
            status: "inGame"
          }
        },
        isFriend: void 0 !== Mz
      }
    }
  },
  8982: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => iz
    });
    var Ez = bz(4298),
      nz = bz(4300);

    function iz(zz) {
      let {
        children: uz,
        showing: bz,
        globallyUniqueKey: iz,
        alwaysMountChildren: lz = !1,
        doGameplayStartStopOnShow: Mz = !0,
        keepsMovement: tz = !1
      } = zz;
      return (0, nz.e)(!0, bz, iz, tz), (0, Ez.d)(Mz, bz), bz || lz ? uz : null
    }
  },
  4678: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Mz
    });
    var Ez = bz(56),
      nz = bz(1038),
      iz = bz.n(nz),
      lz = bz(1089);

    function Mz(zz) {
      let {
        columns: uz,
        rows: bz,
        getRowKey: nz,
        renderRow: Mz,
        className: tz
      } = zz;
      return (0, lz.jsxs)("table", {
        className: iz()("Table", tz),
        children: [(0, lz.jsx)("thead", {
          children: (0, lz.jsx)("tr", {
            children: uz.map((zz => (0, lz.jsx)("th", {
              children: zz.header
            }, zz.key)))
          })
        }), (0, lz.jsx)("tbody", {
          children: bz.map((zz => (0, lz.jsx)(Ez.Fragment, {
            children: Mz(zz)
          }, nz(zz))))
        })]
      })
    }
  },
  36316: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => vz,
      g: () => oz,
      i: () => Nz,
      j: () => Zz
    });
    var Ez = bz(1038),
      nz = bz.n(Ez),
      iz = bz(56),
      lz = bz(79),
      Mz = bz(1341),
      tz = bz(1419),
      Hz = bz(1332),
      Oz = bz(1266),
      pz = bz(1181),
      dz = bz(36319),
      Fz = bz(1089);

    function Zz(zz) {
      const [uz, bz] = (0, iz.useState)((() => (0, dz.l)(zz)));
      return (0, iz.useEffect)((() => (bz((0, dz.l)(zz)), (0, dz.C)((() => {
        bz((0, dz.l)(zz))
      })))), [zz]), uz
    }

    function Rz(zz, uz) {
      "function" === typeof zz ? zz(uz) : zz && (zz.current = uz)
    }

    function Kz(zz) {
      let {
        tutorial: uz,
        step: bz,
        enabled: Ez = !0
      } = zz;
      const nz = Zz(uz);
      return Ez && nz === bz
    }

    function wz(zz, uz) {
      const bz = (0, dz.o)(zz),
        Ez = bz.indexOf(uz);
      return !bz.slice(Ez + 1).some((uz => (0, dz.t)(zz, uz)))
    }

    function Xz(zz, uz, bz, Ez) {
      let {
        tutorial: nz,
        step: iz,
        waitForClick: lz = !1,
        onPrevious: Mz
      } = zz;
      const tz = uz && (0, dz.s)(nz, iz),
        Hz = uz && !wz(nz, iz),
        pz = lz ? Ez : bz;
      let Fz = null;
      tz ? Fz = () => {
        null === Mz || void 0 === Mz || Mz(), (0, dz.r)(nz, iz)
      } : Hz && (Fz = () => {
        (0, dz.i)(nz)
      }), (0, Oz.u)("popup", null !== pz && void 0 !== pz ? pz : bz, Fz, uz && null !== pz, null, tz ? void 0 : "controller:menusSkipTutorial")
    }

    function fz(zz) {
      let {
        tutorial: uz,
        step: bz,
        text: Ez,
        waitForClick: nz = !1,
        onPrevious: iz
      } = zz;
      const {
        t: lz
      } = (0, pz.F)(), Mz = wz(uz, bz);
      return (0, Fz.jsxs)(Fz.Fragment, {
        children: [(0, Fz.jsx)("div", {
          className: "TutorialStepText",
          children: Ez
        }), (0, Fz.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, dz.s)(uz, bz) && (0, Fz.jsx)(tz.j, {
            className: "TutorialStepButton",
            onClick: () => {
              null === iz || void 0 === iz || iz(), (0, dz.r)(uz, bz)
            },
            children: lz("tutorial:back")
          }), !nz && (0, Fz.jsx)(tz.f, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, dz.e)(bz)
            },
            padDefaultFocus: !0,
            children: lz(Mz ? "tutorial:done" : "tutorial:next")
          }), !Mz && (0, Fz.jsx)(tz.j, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, dz.i)(uz)
            },
            children: lz("tutorial:skip")
          })]
        })]
      })
    }
    const sz = 6;

    function rz(zz) {
      let {
        rect: uz,
        margin: bz
      } = zz;
      const Ez = Math.max(0, uz.top - bz),
        nz = uz.bottom + bz,
        iz = Math.max(0, uz.left - bz),
        lz = uz.right + bz;
      return (0, Fz.jsxs)(Fz.Fragment, {
        children: [(0, Fz.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: Ez
          }
        }), (0, Fz.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: nz,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, Fz.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Ez,
            left: 0,
            width: iz,
            height: nz - Ez
          }
        }), (0, Fz.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Ez,
            left: lz,
            right: 0,
            height: nz - Ez
          }
        })]
      })
    }

    function oz(zz) {
      let {
        target: uz,
        placement: bz,
        boxRef: Ez,
        className: tz,
        spotlightMargin: Oz = sz,
        children: pz
      } = zz;
      const {
        getArrowProps: dz,
        getTooltipProps: Zz,
        setTooltipRef: Rz,
        setTriggerRef: Kz
      } = (0, Mz.d)({
        placement: bz,
        trigger: null,
        visible: !0,
        interactive: !0,
        closeOnOutsideClick: !1,
        offset: [0, Oz]
      });
      (0, iz.useLayoutEffect)((() => {
        Kz(uz)
      }), [uz, Kz]);
      const wz = function(zz, uz) {
        const [bz, Ez] = (0, iz.useState)(null);
        return (0, iz.useEffect)((() => {
          if (!uz || !zz) return void Ez(null);
          let bz = 0,
            nz = null;
          const iz = () => {
            const uz = zz.getBoundingClientRect();
            nz && uz.left === nz.left && uz.top === nz.top && uz.width === nz.width && uz.height === nz.height || (nz = uz, Ez(uz)), bz = requestAnimationFrame(iz)
          };
          return iz(), () => {
            cancelAnimationFrame(bz)
          }
        }), [zz, uz]), bz
      }(uz, !0);
      (0, iz.useEffect)((() => {
        null === uz || void 0 === uz || uz.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        })
      }), [uz]);
      const Xz = (0, iz.useCallback)((zz => {
        Rz(zz), Ez && (Ez.current = zz)
      }), [Rz, Ez]);
      return (0, lz.createPortal)((0, Fz.jsxs)(Fz.Fragment, {
        children: [wz && (0, Fz.jsx)(rz, {
          rect: wz,
          margin: Oz
        }), (0, Fz.jsxs)("div", {
          ref: Xz,
          ...Zz({
            className: nz()("tooltip-container SmallTextLight TutorialStep", tz)
          }),
          children: [pz, (0, Fz.jsx)("div", {
            ...dz({
              className: "tooltip-arrow"
            })
          })]
        })]
      }), (0, Hz.i)())
    }
    const Nz = (0, iz.forwardRef)((function(zz, uz) {
      let {
        placement: bz = "right",
        children: Ez,
        ...nz
      } = zz;
      const lz = Kz(nz),
        Mz = (0, iz.useRef)(null),
        tz = (0, iz.useRef)(null);
      Xz(nz, lz, Mz, tz);
      const [Hz, Oz] = (0, iz.useState)(null), pz = Ez.ref, dz = (0, iz.useCallback)((zz => {
        tz.current = zz, Oz(zz), Rz(uz, zz), Rz(pz, zz)
      }), [uz, pz]);
      return (0, Fz.jsxs)(Fz.Fragment, {
        children: [(0, iz.cloneElement)(Ez, {
          ref: dz
        }), lz && (0, Fz.jsx)(oz, {
          target: Hz,
          placement: bz,
          boxRef: Mz,
          children: (0, Fz.jsx)(fz, {
            ...nz
          })
        })]
      })
    }));

    function vz(zz) {
      const uz = Kz(zz),
        bz = (0, iz.useRef)(null);
      return Xz(zz, uz, bz, null), uz ? (0, lz.createPortal)((0, Fz.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, Fz.jsx)("div", {
          ref: bz,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, Fz.jsx)(fz, {
            ...zz
          })
        })
      }), (0, Hz.i)()) : null
    }
  },
  36162: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => iz,
      d: () => lz,
      g: () => Mz,
      j: () => tz
    });
    var Ez = bz(56),
      nz = bz(1108);
    const iz = 8,
      lz = "InGameHeaderContainer",
      Mz = "TopRightElements";

    function tz(zz) {
      const [uz] = (0, nz.b)(), [bz, tz] = (0, Ez.useState)(!1);
      return (0, Ez.useLayoutEffect)((() => {
        if (!zz) return;
        const uz = document.querySelector(`.${lz}`),
          bz = document.querySelector(`.${Mz}`),
          Ez = () => {
            const Ez = zz.getBoundingClientRect(),
              nz = uz ? uz.getBoundingClientRect().right : 0,
              lz = bz ? bz.getBoundingClientRect().left : window.innerWidth,
              Mz = Ez.left < nz + iz,
              Hz = Ez.right > lz - iz;
            tz(Mz || Hz)
          };
        Ez();
        const nz = new ResizeObserver(Ez);
        return nz.observe(zz), uz && nz.observe(uz), bz && nz.observe(bz), () => {
          nz.disconnect()
        }
      }), [zz, uz]), bz
    }
  },
  6291: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => iz
    });
    var Ez = bz(56),
      nz = bz(33);

    function iz(zz, uz) {
      var bz;
      const [iz, lz] = (0, Ez.useState)(null !== (bz = nz.g.getItem(zz)) && void 0 !== bz ? bz : uz);
      return [iz, uz => {
        nz.g.setItem(zz, uz), lz(uz)
      }]
    }
  },
  36332: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => iz
    });
    var Ez = bz(20),
      nz = bz(1283);

    function iz() {
      const {
        clientEscMenuOptions: zz
      } = (0, Ez.m)(["clientEscMenuOptions"]);
      return (0, nz.s)() && zz.showChat
    }
  },
  36265: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => tz
    });
    var Ez = bz(2623),
      nz = bz(3437),
      iz = bz(2709);
    const lz = ["Unable to create vertex buffer"];
    let Mz = {};

    function tz(zz, uz) {
      const bz = new Date;
      console.error(`${bz.getUTCHours()}:${bz.getUTCMinutes()}:${bz.getUTCSeconds()}`, zz, uz, null === uz || void 0 === uz ? void 0 : uz.stack), lz.includes(null === uz || void 0 === uz ? void 0 : uz.message) && (console.error("Unrecoverable error occurred. Leaving game."), (0, Ez.d)().client.leaveGameUnwanted({
        reason: `Unrecoverable error occurred.\nThis is a bug.\n\nError:\n${uz.message}\n\nPlease refresh the page.`,
        requiresRefresh: !0,
        canReconnect: !1,
        automaticallyReconnect: !1
      })), (0, iz.logError)("warning", `${zz}\n ${uz} "\n" ${null===uz||void 0===uz?void 0:uz.stack}`);
      const nz = zz + uz + (null === uz || void 0 === uz ? void 0 : uz.stack);
      nz in Mz || ((0, iz.logError)("error", `${zz}\n ${uz} "\n" ${null===uz||void 0===uz?void 0:uz.stack}`), Mz[nz] = !0)
    }(0, nz.onGameReset)((() => {
      Mz = {}
    }))
  },
  4601: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Vz,
      g: () => az
    });
    var Ez = bz(4605),
      nz = bz(316);
    const iz = 120,
      lz = 260,
      Mz = 1.15,
      tz = 1.2,
      Hz = 2,
      Oz = 1.08,
      pz = .8,
      dz = .95,
      Fz = 8,
      Zz = "[\"')\\]\u300d\u300f\uff09]*",
      Rz = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${Zz}$`),
      Kz = new RegExp(`[?\uff1f]${Zz}$`),
      wz = new RegExp(`[!\uff01]${Zz}$`),
      Xz = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      fz = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      sz = new RegExp(`[${fz}]`),
      rz = new RegExp(`[${fz}]|[^${fz}]+`, "g"),
      oz = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function Nz(zz) {
      let uz = 2166136261;
      for (let bz = 0; bz < zz.length; bz++) uz ^= zz.charCodeAt(bz), uz = Math.imul(uz, 16777619);
      return (uz >>> 0) / 4294967295 * 2 - 1
    }

    function vz(zz) {
      var uz;
      if (sz.test(zz)) return 1;
      const bz = zz.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        Ez = bz.replace(/[^0-9]/g, "");
      if (Ez.length > 0 && !/\p{L}/u.test(bz)) return Math.min(Ez.length, 4);
      const nz = null !== (uz = bz.match(oz)) && void 0 !== uz ? uz : [];
      if (0 === nz.length) {
        var iz, lz;
        const zz = null !== (iz = null === (lz = bz.match(/\p{L}/gu)) || void 0 === lz ? void 0 : lz.length) && void 0 !== iz ? iz : 0;
        return 0 === zz ? 0 : Math.min(Math.max(1, Math.round(zz / 2.5)), Fz)
      }
      const Mz = bz.replace(/[^\p{L}]/gu, ""),
        tz = nz.length > 1 && "e" === nz.at(-1) && Mz.endsWith("e") && !Mz.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(zz.replace(/[^\p{L}]/gu, ""));
      return Math.min(nz.length - (tz ? 1 : 0), Fz)
    }

    function xz(zz) {
      return zz.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function Jz(zz) {
      const uz = zz.replace(/[^\p{L}]/gu, "");
      return uz.length >= 2 && uz === uz.toUpperCase() && uz !== uz.toLowerCase()
    }

    function Az(zz, uz) {
      var bz;
      const Fz = uz && (0, Ez.k)(uz),
        Zz = null !== (bz = null === Fz || void 0 === Fz ? void 0 : Fz.syllableMs) && void 0 !== bz ? bz : Ez.e,
        fz = function(zz) {
          const uz = [];
          for (const Ez of (0, nz.uc)(zz))
            if ("string" === typeof Ez)
              for (const zz of Ez.split(/(\s+)/)) {
                if ("" === zz) continue;
                if (/^\s+$/.test(zz)) {
                  uz.push({
                    kind: "space",
                    text: zz
                  });
                  continue
                }
                if (!sz.test(zz)) {
                  uz.push({
                    kind: "word",
                    text: zz,
                    delayMs: 0
                  });
                  continue
                }
                let Ez = !0;
                for (const nz of null !== (bz = zz.match(rz)) && void 0 !== bz ? bz : []) {
                  var bz;
                  const zz = uz.at(-1);
                  Ez || "word" !== (null === zz || void 0 === zz ? void 0 : zz.kind) || sz.test(nz) || /[\p{L}\p{N}]/u.test(nz) ? (Ez || uz.push({
                    kind: "space",
                    text: "\u200b"
                  }), uz.push({
                    kind: "word",
                    text: nz,
                    delayMs: 0
                  }), Ez = !1) : zz.text += nz
                }
              } else uz.push({
                kind: "icon",
                text: Ez.icon,
                delayMs: 0
              });
          return uz
        }(zz),
        oz = [];
      let Az = [];
      for (const Ez of fz) "space" !== Ez.kind && (Az.push(Ez), Rz.test(Ez.text) && (oz.push(Az), Az = []));
      oz.push(Az);
      const Tz = [];
      let Lz = 0;
      for (const Ez of oz) {
        var Pz, Gz;
        const zz = null !== (Pz = null === (Gz = Ez.at(-1)) || void 0 === Gz ? void 0 : Gz.text) && void 0 !== Pz ? Pz : "",
          uz = Kz.test(zz),
          bz = wz.test(zz),
          nz = Ez.map((zz => "word" === zz.kind ? vz(zz.text) : 1)),
          fz = nz.findLastIndex((zz => zz > 0));
        for (const [Kz, wz] of Ez.entries()) {
          const zz = "word" === wz.kind,
            Ez = nz[Kz];
          wz.delayMs = Lz;
          for (let nz = 0; Fz && nz < Ez; nz++) {
            const {
              intonation: iz
            } = Fz;
            let lz = fz > 0 ? -iz.declineSemitones * (Kz / fz) : 0;
            lz += Nz(`${xz(wz.text)}|${nz}`) * iz.variationSemitones;
            const Rz = Math.min(1, iz.variationSemitones);
            let Xz = Fz.glideSemitones,
              sz = 1;
            bz && (lz += iz.exclaimLiftSemitones, sz *= Mz), uz && Kz === fz && (lz += iz.questionRiseSemitones * (Ez > 1 ? .5 + .5 * nz / (Ez - 1) : 1), nz === Ez - 1 && (Xz = Math.abs(Xz) + iz.questionRiseSemitones / 2)), zz && Jz(wz.text) && (lz += Hz * Rz, sz *= tz), Ez > 1 && 0 === nz && (lz += pz * Rz, sz *= Oz), Tz.push({
              atMs: Lz + nz * Zz,
              semitones: lz,
              glideSemitones: Xz,
              durationMs: nz < Ez - 1 ? Math.min(Fz.durationMs, Zz * dz) : Fz.durationMs,
              level: sz
            })
          }
          Lz += Ez * Zz + (Rz.test(wz.text) ? lz : Xz.test(wz.text) ? iz : 0)
        }
      }
      return {
        pieces: fz.map((zz => "space" === zz.kind ? zz : "icon" === zz.kind ? {
          kind: "icon",
          icon: zz.text,
          delayMs: zz.delayMs
        } : {
          kind: "word",
          text: zz.text,
          delayMs: zz.delayMs
        })),
        blips: Tz
      }
    }
    var Tz = bz(1181),
      Lz = bz(1241),
      Pz = bz(1873);

    function Gz(zz) {
      if ("string" === typeof zz) return zz;
      const uz = Lz.h.get().getCurrentLanguageCode();
      return (0, Tz.s)(uz, zz.translationKey, (0, Tz.q)(zz.params, Pz.b.shown))
    }

    function az(zz) {
      const uz = void 0 === zz.voice ? null : (0, Ez.n)(zz.voice),
        bz = uz && (0, Ez.k)(uz);
      return {
        plan: Az(Gz(zz.line), bz),
        synth: bz
      }
    }

    function Vz(zz) {
      const uz = [];
      let bz = [];
      for (const [nz, iz] of zz.entries()) {
        var Ez;
        "space" === iz.kind && (" " !== iz.text || "icon" !== (null === (Ez = zz[nz + 1]) || void 0 === Ez ? void 0 : Ez.kind)) ? (bz.length > 0 && uz.push(bz), uz.push([iz]), bz = []) : bz.push(iz)
      }
      return bz.length > 0 && uz.push(bz), uz
    }
  },
  36158: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => nz
    });
    const Ez = [{
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

    function nz(zz, uz, bz) {
      const nz = Math.abs(zz - uz),
        iz = Date.now() - bz;
      for (const lz of Ez)
        if (zz < lz.maxDist) return nz >= lz.hardUpdateDist || iz > lz.timeBetweenSoftChecks && nz >= lz.softUpdateDist;
      return !1
    }
  },
  36378: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => lz,
      h: () => iz,
      k: () => nz
    });
    const Ez = [.25, .5, 1, 2, 4, 8, 16];

    function nz(zz, uz) {
      const bz = Ez;
      let nz = bz.indexOf(zz);
      return -1 === nz && (nz = bz.findIndex((uz => uz >= zz)), -1 === nz && (nz = bz.length - 1)), "up" === uz ? bz[Math.min(nz + 1, bz.length - 1)] : bz[Math.max(nz - 1, 0)]
    }

    function iz(zz) {
      return zz <= Ez[0]
    }

    function lz(zz) {
      return zz >= Ez[Ez.length - 1]
    }
  },
  36435: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Ez,
      g: () => nz
    });
    const Ez = "data-replay-ui-active",
      nz = [{
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
  36441: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Hz,
      i: () => pz,
      m: () => Oz
    });
    var Ez = bz(20),
      nz = bz(22),
      iz = bz(36435);

    function lz() {
      const zz = {};
      for (const {
          group: uz
        }
        of iz.g) zz[uz] = !0;
      return zz
    }
    let Mz = lz();

    function tz() {
      nz.k.sK("replayViewer|uiVisibilityChanged")
    }

    function Hz() {
      return Mz
    }

    function Oz(zz, uz) {
      Mz[zz] !== uz && (Mz = {
        ...Mz,
        [zz]: uz
      }, "nametag" === zz && Ez.e.set({
        areNametagsHidden: !uz
      }), tz())
    }

    function pz() {
      Mz = lz(), Ez.e.set({
        areNametagsHidden: !1
      }), tz()
    }
  },
  9028: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => lz,
      e: () => nz,
      g: () => Oz
    });
    var Ez = bz(1531);

    function nz(zz) {
      var uz;
      return {
        ...lz.store,
        yaw: lz.store.yaw + (null !== (uz = Ez.c[zz].previewYaw) && void 0 !== uz ? uz : 0)
      }
    }
    const iz = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      lz = {
        player: iz,
        store: {
          ...iz,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function Mz(zz, uz) {
      zz instanceof Promise ? zz.then(uz).catch((zz => {
        console.error("Couldn't open the preview", zz)
      })) : uz(zz)
    }
    class tz {
      constructor(zz) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, Mz(zz, (zz => {
          this.closed ? zz.close() : (this.opened = zz, null !== this.size && zz.resize(this.size.width, this.size.height), null !== this.view && zz.show(this.view))
        }))
      }
      show(zz) {
        var uz;
        this.view = zz, null === (uz = this.opened) || void 0 === uz || uz.show(zz)
      }
      resize(zz, uz) {
        var bz;
        this.size = {
          width: zz,
          height: uz
        }, null === (bz = this.opened) || void 0 === bz || bz.resize(zz, uz)
      }
      close() {
        var zz;
        this.closed = !0, null === (zz = this.opened) || void 0 === zz || zz.close(), this.opened = null
      }
    }
    class Hz {
      constructor(zz) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(zz).then((zz => zz.ready)), Mz(zz, (zz => {
          this.closed ? zz.close() : (this.opened = zz, null !== this.size && zz.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var zz, uz;
        return null !== (zz = null === (uz = this.opened) || void 0 === uz ? void 0 : uz.isReady()) && void 0 !== zz && zz
      }
      setCosmetic(zz, uz) {
        var bz;
        null === (bz = this.opened) || void 0 === bz || bz.setCosmetic(zz, uz)
      }
      playEmote(zz) {
        var uz;
        null === (uz = this.opened) || void 0 === uz || uz.playEmote(zz)
      }
      setOrbit(zz) {
        var uz;
        null === (uz = this.opened) || void 0 === uz || uz.setOrbit(zz)
      }
      resetCamera() {
        var zz;
        null === (zz = this.opened) || void 0 === zz || zz.resetCamera()
      }
      async untilDrawn(zz) {
        var uz;
        await this.ready, await (null === (uz = this.opened) || void 0 === uz ? void 0 : uz.untilDrawn(zz))
      }
      resize(zz, uz) {
        var bz;
        this.size = {
          width: zz,
          height: uz
        }, null === (bz = this.opened) || void 0 === bz || bz.resize(zz, uz)
      }
      close() {
        var zz;
        this.closed = !0, null === (zz = this.opened) || void 0 === zz || zz.close(), this.opened = null
      }
    }
    const Oz = new class {
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
        return new tz(this.current().openMob(zz))
      }
      openPet(zz) {
        return new tz(this.current().openPet(zz))
      }
      openMobLineup(zz) {
        return new tz(this.current().openMobLineup(zz))
      }
      openCharacter(zz, uz) {
        return new Hz(this.current().openCharacter(zz, uz))
      }
    }
  },
  9020: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Ez.b,
      g: () => Ez.e,
      j: () => Ez.g
    });
    var Ez = bz(9028);
    class nz {
      constructor(zz) {
        this.load = zz, this.loaded = null, this.loading = null
      }
      run(zz) {
        return null !== this.loaded ? zz(this.loaded) : (this.loading ??= this.load().then((zz => (this.loaded = zz, zz)), (zz => {
          throw this.loading = null, zz
        })), this.loading.then(zz))
      }
    }
    class iz {
      constructor() {
        this.mobScene = new nz((() => Promise.all([bz.e(69), bz.e(226), bz.e(225), bz.e(244), bz.e(94), bz.e(245), bz.e(72), bz.e(71), bz.e(242), bz.e(70), bz.e(252), bz.e(246), bz.e(251), bz.e(249), bz.e(241), bz.e(218), bz.e(264), bz.e(222), bz.e(236), bz.e(247), bz.e(250), bz.e(74), bz.e(196), bz.e(215), bz.e(219), bz.e(93), bz.e(113), bz.e(234), bz.e(73), bz.e(112), bz.e(153)]).then((() => bz(40273))))), this.characterScene = new nz((() => Promise.all([bz.e(69), bz.e(226), bz.e(225), bz.e(244), bz.e(94), bz.e(245), bz.e(72), bz.e(71), bz.e(242), bz.e(70), bz.e(252), bz.e(246), bz.e(251), bz.e(249), bz.e(241), bz.e(218), bz.e(264), bz.e(222), bz.e(236), bz.e(247), bz.e(250), bz.e(74), bz.e(196), bz.e(215), bz.e(219), bz.e(93), bz.e(113), bz.e(234), bz.e(73), bz.e(112), bz.e(152)]).then((() => bz(40383)))))
      }
      openMob(zz) {
        return this.mobScene.run((uz => uz.openMobPreview(zz)))
      }
      openPet(zz) {
        return this.mobScene.run((uz => uz.openPetPreview(zz)))
      }
      openMobLineup(zz) {
        return this.mobScene.run((uz => uz.openMobLineupPreview(zz)))
      }
      openCharacter(zz, uz) {
        return this.characterScene.run((bz => bz.openCharacterPreview(zz, uz)))
      }
    }
    Ez.g.setDefaultHost((() => new iz))
  },
  36262: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => nz,
      e: () => iz
    });
    const Ez = new Map;

    function nz(zz) {
      var uz;
      return null === zz ? null : null !== (uz = Ez.get(zz)) && void 0 !== uz ? uz : null
    }

    function iz(zz, uz) {
      return Ez.set(zz, uz), () => {
        Ez.get(zz) === uz && Ez.delete(zz)
      }
    }
  },
  36080: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => iz,
      d: () => Rz,
      g: () => Kz,
      h: () => Mz,
      i: () => dz,
      j: () => wz,
      n: () => pz,
      q: () => fz,
      u: () => Zz,
      x: () => Xz
    });
    var Ez = bz(20),
      nz = bz(22);
    const iz = "clientGameInventoryButtonsChanged",
      lz = new Map;

    function Mz() {
      return [...lz.values()].sort(((zz, uz) => {
        var bz, Ez;
        return (null !== (bz = zz.order) && void 0 !== bz ? bz : 0) - (null !== (Ez = uz.order) && void 0 !== Ez ? Ez : 0)
      }))
    }
    let tz = null;

    function Hz(zz) {
      tz = zz
    }
    let Oz = !1;

    function pz(zz) {
      Oz = !0;
      try {
        zz.onClick()
      } finally {
        Oz = !1
      }
      zz.panel && "clientGame" === Ez.e.get("openInGameMenuName") && Hz(zz.id)
    }

    function dz() {
      return Oz
    }

    function Fz() {
      return Mz().filter((zz => zz.panel && !zz.disabled))
    }

    function Zz(zz) {
      const uz = Fz(),
        bz = uz.findIndex((zz => zz.id === tz));
      return !(bz < 0 || uz.length < 2) && (pz(uz[(bz + zz + uz.length) % uz.length]), !0)
    }

    function Rz() {
      return null !== tz && Fz().length > 1
    }

    function Kz() {
      Hz(null)
    }

    function wz() {
      "inventory" !== Ez.e.get("openInGameMenuName") && Hz(null)
    }

    function Xz() {
      const zz = tz;
      return Hz(null), zz
    }

    function fz(zz) {
      return lz.set(zz.id, zz), nz.k.sK(iz, Mz(), !0), () => {
        lz.get(zz.id) === zz && (lz.delete(zz.id), nz.k.sK(iz, Mz()))
      }
    }
  },
  36071: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Mz,
      i: () => Kz,
      l: () => wz,
      n: () => dz,
      o: () => Hz,
      p: () => Rz,
      t: () => Fz,
      x: () => Oz
    });
    var Ez = bz(20),
      nz = bz(22),
      iz = bz(1269),
      lz = bz(36080);
    const Mz = "clientGameUiChanged";
    let tz = null;

    function Hz() {
      return tz
    }

    function Oz(zz, uz) {
      const bz = {
        content: zz,
        menu: uz
      };
      return tz = bz, nz.k.sK(Mz, tz, !0), () => {
        tz === bz && (tz = null, Zz = !1, Kz(), nz.k.sK(Mz, null))
      }
    }
    let pz = null;

    function dz() {
      return pz
    }

    function Fz(zz) {
      return pz = zz, () => {
        pz === zz && (pz = null)
      }
    }
    let Zz = !1;

    function Rz() {
      const zz = Ez.e.get("openInGameMenuName");
      "clientGame" !== zz && (Zz = "inventory" === zz), (0, lz.i)() || (0, lz.g)(), (0, iz.m)(iz.b), Ez.e.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function Kz() {
      Xz(!1)
    }

    function wz() {
      Xz(Zz)
    }

    function Xz(zz) {
      "clientGame" === Ez.e.get("openInGameMenuName") && Ez.e.set({
        openInGameMenuName: zz ? "inventory" : null
      }), zz || (0, lz.g)(), Zz = !1
    }
  },
  36395: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => zb,
      f: () => ku
    });
    var Ez = bz(4035),
      nz = bz(588),
      iz = bz(3509),
      lz = bz(3527),
      Mz = bz.n(lz);
    const tz = new Set(["nameTagInfo", "multilineTextBox", "animationScript", "content", "skyBox", "opts", "fromBlockData", "toBlockData", "sharedBlockData"]),
      Hz = "EV_boolean",
      Oz = "EV_double",
      pz = "EV_string",
      dz = "EV_doubleArr",
      Fz = "EV_armour",
      Zz = "EV_other",
      Rz = "EV_cosmetics",
      Kz = "OEV_boolean",
      wz = "OEV_int",
      Xz = "OEV_double",
      fz = "OEV_string",
      sz = "OEV_stringArr",
      rz = "OEV_meshScaling",
      oz = "IV_int",
      Nz = "IV_string",
      vz = "IV_doubleArr",
      xz = "IV_double",
      Jz = "HV_int",
      Az = "HV_slots",
      Tz = "EnvV_string",
      Lz = "EnvV_double",
      Pz = "EnvV_doubleArr",
      Gz = "EnvV_boolean",
      az = {
        type: pz,
        name: pz,
        position: dz,
        rotation: dz,
        scale: Oz,
        speed: Oz,
        jumping: Hz,
        crouching: Hz,
        cameraPitch: Oz,
        armSwinging: Hz,
        heldItemName: pz,
        heldItemEnchantmentTier: pz,
        pose: pz,
        followingEId: pz,
        ridingVehicleEId: pz,
        leaderboardTop: pz,
        meshKind: pz,
        meshOpts: pz,
        followingOffset: dz,
        shouldMatchFollowingEntityRotation: Hz,
        meshOffset: dz,
        baseRenderHeading: Oz,
        armour: Fz,
        nG: Zz,
        playerCustomisations: Rz,
        variation: pz,
        metaInfo: pz,
        soundName: pz,
        volume: Oz,
        refDistance: Oz,
        maxHearDist: Oz,
        rate: Oz,
        aiState: pz
      },
      Vz = {
        opacity: Xz,
        zIndex: wz,
        overlayColour: fz,
        canSee: Kz,
        meshScaling: rz,
        nameTagInfo: fz,
        multilineTextBox: fz,
        hasPriorityNametag: Kz,
        ranks: sz,
        nameColour: fz,
        _isAlive: Kz,
        _invisibleEffect: Kz,
        _invincible: Kz,
        killfeedColour: fz,
        hideNameSeed: wz,
        _glowingEffect: Kz,
        lockHeadToBody: Kz
      },
      mz = {
        itemName: Nz,
        amount: oz,
        position: vz,
        size: xz,
        attributes: Nz
      },
      qz = {
        skyBox: Tz,
        fogColourOverride: Tz,
        fogChunkDistanceOverride: Lz,
        cameraTint: Pz,
        fogOnSkybox: Gz,
        fogBlockDistanceOverride: Lz
      },
      hz = {
        type: "array",
        items: "double"
      },
      Uz = {
        type: "array",
        items: "int"
      },
      cz = {
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
      gz = {
        type: "map",
        values: hz
      };

    function Sz(zz, uz) {
      return {
        type: "record",
        name: zz,
        fields: [{
          name: "x",
          type: uz
        }]
      }
    }
    const yz = {
        type: "array",
        items: {
          type: "record",
          name: "OtherEntityDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", Sz(Kz, "boolean"), Sz(wz, "int"), Sz(Xz, "double"), Sz(fz, "string"), Sz(sz, {
              type: "array",
              items: "string"
            }), Sz(rz, gz)]
          }]
        }
      },
      Dz = {
        type: "array",
        items: {
          type: "record",
          name: "EntityDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", Sz(Hz, "boolean"), Sz(Oz, "double"), Sz(pz, "string"), Sz(dz, hz), Sz(Fz, cz), Sz(Zz, yz), Sz(Rz, {
              type: "map",
              values: "string"
            })]
          }]
        }
      },
      Qz = {
        type: "array",
        items: {
          type: "record",
          name: "ItemDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", Sz(oz, "int"), Sz(Nz, "string"), Sz(xz, "double"), Sz(vz, hz)]
          }]
        }
      },
      Wz = {
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
      ez = {
        type: "record",
        name: "HotbarDeltaEntry",
        fields: [{
          name: "i",
          type: "int"
        }, {
          name: "v",
          type: ["null", Sz(Jz, "int"), Sz(Az, Wz)]
        }]
      },
      jz = {
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
      Iz = {
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
      Bz = {
        type: "array",
        items: {
          type: "record",
          name: "EnvironmentDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", Sz(Tz, "string"), Sz(Lz, "double"), Sz(Pz, hz), Sz(Gz, "boolean")]
          }]
        }
      },
      Cz = [{
        name: "qJ",
        type: "record",
        fields: [{
          name: "pos",
          type: Uz
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
          type: Uz
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
      Yz = [{
        name: "playSound",
        type: "record",
        fields: [{
          name: "cn",
          type: "string"
        }, {
          name: "volume",
          type: "double"
        }, {
          name: "rate",
          type: "double"
        }, {
          name: "yn",
          type: ["null", {
            type: "record",
            name: "SoundPosSettings",
            fields: [{
              name: "Dn",
              type: ["null", "string", hz],
              default: null
            }, {
              name: "Qn",
              type: ["null", "double"],
              default: null
            }, {
              name: "Wn",
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
          name: "Li",
          type: "string"
        }, {
          name: "Pi",
          type: "int"
        }, {
          name: "animationScript",
          type: ["null", "string"]
        }, {
          name: "Gi",
          type: "double"
        }, {
          name: "ai",
          type: "double"
        }]
      }, {
        name: "bullet",
        type: "record",
        fields: [{
          name: "nE",
          type: "string"
        }, {
          name: "bulletDirections",
          type: {
            type: "array",
            items: hz
          }
        }]
      }, {
        name: "lifeformHealth",
        type: "record",
        fields: [{
          name: "tu",
          type: "string"
        }, {
          name: "Uu",
          type: ["null", "double"],
          default: null
        }, {
          name: "cu",
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
          name: "ki",
          type: "double"
        }, {
          name: "angle",
          type: "double"
        }, {
          name: "zl",
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
      kz = [{
        name: "position",
        type: hz
      }, {
        name: "direction",
        type: hz
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

    function zu() {
      const zz = [{
        name: "entities",
        type: {
          type: "map",
          values: Dz
        }
      }, {
        name: "items",
        type: {
          type: "map",
          values: Qz
        }
      }, {
        name: "camera",
        type: {
          type: "record",
          name: "ReplayCameraState",
          fields: kz
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
              items: ez
            }
          }]
        }],
        default: null
      }, {
        name: "playerHud",
        type: ["null", jz],
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
              name: "tu",
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
        type: Iz
      }, {
        name: "environment",
        type: Bz
      }, {
        name: "structuralEvents",
        type: {
          type: "array",
          items: Cz
        }
      }, {
        name: "ephemeralEvents",
        type: {
          type: "array",
          items: Yz
        }
      }), zz
    }
    const uu = {
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
                name: "sd",
                type: "int"
              }, {
                name: "position",
                type: hz
              }, {
                name: "direction",
                type: hz
              }, {
                name: "easing",
                type: hz
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
    let bu;

    function Eu(zz) {
      if (9 === zz) return bu ??= (uz = [{
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
            name: "pT",
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
              type: Uz
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
            fields: zu()
          }
        }
      }, uu], Mz().Type.forSchema({
        type: "record",
        name: "RecordingState",
        fields: uz
      }, {
        VF: Object.create(null)
      })), bu;
      var uz
    }
    var nu = bz(36402);
    let iu, lu, Mu, tu;
    const Hu = 12;
    var Ou, pu;
    const du = [0, 1, 8, 255, "length", "undefined", 63, 6, "fromCodePoint", 7, 12, "push", 91, 8191, 88, 13, 14, 3, null, 60, 33554432, 2, 67108864, 4, 16, 99, 100, 101, !0, 15, "=", ";", 10, 5, 11, 9];

    function Fu(zz) {
      return typeof Ou[zz] === du[5] ? Ou[zz] = function(zz) {
        var uz, bz, Ez, nz, iz, lz, Mz;
        for (Ku(uz = "" + (zz || ""), bz = uz.length, Ez = [], nz = du[0], iz = du[0], lz = -du[1]), Mz = du[0]; Mz < bz; Mz++) {
          var tz = 'AdiQZBCl"x1yJpXDtORjL?zb;HE/)F9r+83a%h[]P{<kqom!IW^Uw`V.K_@Sg7G|vYfn4*=,N~}2(0#6T&>c:5se$uM'.indexOf(uz[Mz]);
          if (tz !== -du[1])
            if (lz < du[0]) lz = tz;
            else {
              Ku(lz += tz * du[12], nz |= lz << iz, iz += (lz & du[13]) > du[14] ? du[15] : du[16]);
              do {
                Ku(Ez.push(nz & du[3]), nz >>= du[2], iz -= du[2])
              } while (iz > du[9]);
              lz = -du[1]
            }
        }
        return lz > -du[1] && Ez.push((nz | lz << iz) & du[3]), Zu(Ez)
      }(pu[zz]) : Ou[zz]
    }

    function Zu(zz) {
      return typeof nb !== du[5] && nb ? (new nb).decode(new ib(zz)) : typeof lb !== du[5] && lb ? lb.from(zz).toString("utf-8") : Hb(zz)
    }

    function Ru() {}

    function Ku() {
      Ku = function() {}
    }
    var wu, Xu;
    Ku(Ou = {}, pu = ["wVz8xg<R8J>ytcGF4It8)[(@Y|.=wgrhPbWU/V=R8|bOd", '2SqrB*y&"LIWZcu))m4^"3iRsp', "pkV(khWaDDI;MHGF)d", "|r12M54RWRvW#Ht]xZFr[P9JkXrNeXeaN4&+V=<i", 'qC"V2}K9_OV(SS?{8Q_U/!&_^|rXKQp/4o*ZO_z%|K:%)!d;_A', '#yPWw0"%#SI', "44#(#%39.@=a=pl", "Sho}9V]j)O$d`ZW/W_(0oTn_l", 'Gh;xB*"w!?`|7Iw3jP;9>cjl&gX9f&F%_,2F$c0UDD^*D[ea5Y1UJ', "~y|Z_|TPHX#HQ^X", "@hd#w:S5_O0`Ch3;~SlxT^<@`j}~Q>K)mGQ", "Tr12TG+J<O", 'X_o.?,Dp7K_?EBr9j_WUMc[@|".TME*;J4$~PKi"#"l4YIo/^L9)d`dj8RP', 'HP*1J[rj,@ENcXDPdDMUa#"=U_QCmp6E=44Bq>nUuX', "PLX.YNrF)?@=FI)a5H?lR[7{o`Dhd", "6~U`PV8*Tg|ROtpj3g>`^@0|qG&d`N2EhUU1a7l`aVj60Hu3[,P/|:};IDi/d", '1mol<~9T+RJ4":$t_xD(C*(RMOW', "^x|ZNGP%!K3(P!PE_A", "vxk0AspljV`|tc6EaUQBT[8!o`TWxt$)@SMUCGa&MX%", "%_0r!@;m?vl!Gpz3F3:BzPA", "3b&Vg6q@]vaQ&IRLCd", '<O"80%H*.pB6nDl[GY,x,.=;6g(gKSd%', "8gd+TG$G6DnKCBdkpmAC{T1wZp`|H%i9", "]kACm4ub7X9.VH5aSx]Z@`m9B18?YZ{[^,C.v:F{5@W(A", "Eh,)X(*l?vk.)!u{k}5lK>)Rf|5JNQTEZfb~8S{_t?", 'qYaF1sOdhvs+mpf;xP@"Ec@P!fH*Lt[jvS)0T(A9YR]r4Sy[I_d', "uyr)r,al.@:nA", 'pm(}e#=mQjC@gSRLZWON;c*UfJS?rirhTr=ZV]MJjx>"Pc,h3_`wYNA', "6He~{WHjbv2mtQ@bZgmZHwf91S==T%3;zg5wEwOHTgeJ:Q", "1,RN8~Xw/XZ3k[]Rhh9Zc&%9Y_m)b[GORE:0Zgzsep$0KI#ExFi", "%_pl/#clgX)*YhuFyZ[lyG.pFG/IC7rFXR_Vj", "Yb/0*`(3[@aljXR]yW=l{W%JQ", "dJQN:(?F,v_l0;ZR*IJ0aP$w1L@~)S7OAx0^AIA", '(Ya1T,z}"1<T3[WPPVe~oh}R2L00J!lHl,Frt.<wUjtN"%0]QgKV1sE%B', "qUCx[7/*Y|k.3hj3gri", "L,_+A.z}}G6gT!i9O|FZ^0]lC", "@Em(k2i<)X", '9g=wfga*ML$m#H4hh4M"L', "<,$WL[DH8Rcz@WXECb*EC*TsTg+*d", "UV=,G`lj}Oh6]XQOGh[)M(A", "o3x#N6X%3|f=IDJ", 'O_.ZG@x2KL7l.XU)jg>"', 'M~%0,Gs3Y|=0#H"r+hX({7.Fv`eJT,AR7O#wBgX"tg~`C&.3H+:F>c~d', "?m8+M(C%^|n=A", "S4UFw@_{2GB4`Z", "m,.x:##PyL", "uUuCe85FWDe+&;R]3Iy}l6yHYRs=`Ht3d_~Ck~!2_O", "Jh=)2_=9.@1/.>,jZx_V7``!A|h)N,dktV0,D.]&}LALd", ",L4E2}j!l", 'SXE/m@=JTJ+.Ogj{fbx#e#)"z@KlEh/b|)6~]!ETIf14eSA%gVL1^=_FZ', "AgdV<W.a(Gc|s*M%xP(07NdHF?zLoIS<LJ>UHPap+g/YQEuz#~!)F", "LLsZI4qRLV!*M=8b/kM+$#}majgZfpJ", "5Sr~u_x`svBi]>qE^3WUF", "?_PCW=k!)SP1S>3;aDF1/~_2xOO61h@Fhk@U|6w90y~0@hRP1d", "6~Vle*UpfD8Ga[/FAZNxN&s;7S}W+SL/Rx;~)SXwBp^*Q]LPS,d", 'yZV),gVm{Y)p+/"H5YmW*6,djvm?yXK3SSIVW0}w#"]', "SIkF37Ki", "CZeZ$^#ss@w?<74R", "5Il82cyj1Sv=ID,rNGEU+SHjwpQ2bS{r", "%U*^+Tp{mR.", "5U/F<2^PG`bIt!(jR,MB2}*{v`GlHZ{j_oA#``NwJX", '63ewK>Tw!"M`[Wo]MQ=r4mkl5j', "9hp1{!?*,p", "jR:EQ3sm9Dy2JIxHzmH+{TkpZ", 'yZA#`|]!5pH1ZD"E;mj16,=9}SK~M*]h[kF}p(6d', '%}Tx!@Xsj_402D.)dJ5E9!k_}YI(;cvbeY`)}GH2G"eRd', '(rq1B%9il1m~ji"H_4I~=3i;XD?.mHp[6L;xH', 'r4W"YN:3*@!(d', 'fO7}d:(mH@+*"/@aQf]~Fwj`aJ^~c=o/*VY+E5F_OxI.oNJE1m=W;,A', "9_E+DcVPW_C@Z,H)nVPV]4PiMY7)YZ", "bY[.9V1wNY:=q,~]{O9)c8Is)Xu%k[H{]G0)^WC94_C6>H%hD_j0B&2p|R", "L|f`+T#3nJACVh1", "s<g0p&<J!|PT@[M%3xbZC}?jODKa;,.{]JO#Hc{d}O;p]Epj`J=,j", "yJz)o2b{4V0`HNE%3b&Vt%v@qy4S@*rO]xx2n}Vm_LS", '),10r!)"[@XN!>uF1m"C^0[i8VLL[7x', "wP9w#*?d", "JC^Y#[OF", '<7q1"=3.VG`t/gC,B9)+::X@WnvT!rC,Wk8IWB<zQUTsf2B7r7|a+', 'zY^JuQ$#wGneiPEb[Cj_TT`lZ0K3L6EbeSRWss"][unag(i5}D', 'W"<ZdgNf@~p^sGYkk"A{:>djO[.3Hd1:Pnr3u', "M^Yj", "rk9cr[>u", '2E@nh"(u', "bOCjn", "@mhK:rVS", ",a+9ys3n", "nHGSrmZ3Rq[:APdlke87UUi1MoBya>dlMu/OMkn?KIy9v)kH>Hj^7", ')0q9!]83:hPwvHYQN^D_$$JbCi>+z<YQwm7&GGWnN!P/|%vA"u', "d~c5_t@|!LSaF?zYY~uA6V_9ReQGs_m6M,{G;", "[az9", "Z,y_gwcS", "I}NR~?kn", "t{Fc~8mB", ')f"^_62%', "==?HQ", "XmL0?V?_", ":(Y{Bl~u", "@S;*a<.O", "9t#!{", "fBQc", "DB;*1,3O", "7t@i", "bGNtHS4O", "%B?6w_LO", 'Gtw/"XBN', "M]=~", "e^0b:>Ip", "`:IM7L@H", "%cDz", "u]7h*WcA", "?%O;Tk5E", "UnQ4%ObS", "51/JP0DD"]), Ku(Eb = function() {
      var zz, uz, bz, Ez = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }];
      Ku(zz = void 0, uz = []);
      try {
        Ku(zz = Object, uz[du[11]]("".__proto__.constructor.name))
      } catch (ib) {}
      zz: for (bz = du[0]; bz < Ez[du[4]]; bz++) try {
        var nz;
        for (zz = Ez[bz](), nz = du[0]; nz < uz[du[4]]; nz++)
          if (typeof zz[uz[nz]] === du[5]) continue zz;
        return zz
      } catch (ib) {}
      return zz || this
    }() || {}, nb = Eb.TextDecoder, ib = Eb.Uint8Array, lb = Eb.gZ, Mb = Eb.String || String, tb = Eb.Array || Array, Hb = function() {
      var zz, uz, bz = new tb(128);
      return Ku(zz = Mb[du[8]] || Mb.fromCharCode, uz = []),
        function(Ez) {
          var nz, iz, lz, Mz;
          for (Ku(iz = void 0, lz = Ez[du[4]], uz[du[4]] = du[0]), Mz = du[0]; Mz < lz;) Ku(iz = Ez[Mz++], iz <= 127 ? nz = iz : iz <= 223 ? nz = (31 & iz) << du[7] | Ez[Mz++] & du[6] : iz <= 239 ? nz = (iz & du[29]) << du[10] | (Ez[Mz++] & du[6]) << du[7] | Ez[Mz++] & du[6] : Mb[du[8]] ? nz = (iz & du[9]) << 18 | (Ez[Mz++] & du[6]) << du[10] | (Ez[Mz++] & du[6]) << du[7] | Ez[Mz++] & du[6] : (nz = du[6], Mz += du[17]), uz[du[11]](bz[nz] || (bz[nz] = zz(nz))));
          return uz.join("")
        }
    }()), (() => {
      function zz(zz) {
        return typeof Ou[zz] === du[5] ? Ou[zz] = function(zz) {
          var uz, bz, Ez, nz, iz, lz, Mz;
          for (Ku(uz = "" + (zz || ""), bz = uz.length, Ez = [], nz = du[0], iz = du[0], lz = -du[1]), Mz = du[0]; Mz < bz; Mz++) {
            var tz = 'dYuAhJMx+KFam#:O/R>13=D7L0nIBGgbcCW9i$QVv?;]&^~6qTXSPE{.`rs!(Zfwp),*k"jl}2e<z[4NU%o@H5t_|y8'.indexOf(uz[Mz]);
            if (tz !== -du[1])
              if (lz < du[0]) lz = tz;
              else {
                Ku(lz += tz * du[12], nz |= lz << iz, iz += (lz & du[13]) > du[14] ? du[15] : du[16]);
                do {
                  Ku(Ez.push(nz & du[3]), nz >>= du[2], iz -= du[2])
                } while (iz > du[9]);
                lz = -du[1]
              }
          }
          return lz > -du[1] && Ez.push((nz | lz << iz) & du[3]), Zu(Ez)
        }(pu[zz]) : Ou[zz]
      }
      Fu(75);
      const uz = du[24],
        bz = zz(81) + zz(82) + zz(83),
        Ez = [du[0], du[1], du[21], du[17]].map((zz => {
          function uz(zz) {
            return typeof Ou[zz] === du[5] ? Ou[zz] = function(zz) {
              var uz, bz, Ez, nz, iz, lz, Mz;
              for (Ku(uz = "" + (zz || ""), bz = uz.length, Ez = [], nz = du[0], iz = du[0], lz = -du[1]), Mz = du[0]; Mz < bz; Mz++) {
                var tz = 'uSnpeh5c1&_QU|m^H)o>!TNt3[(kBd6.9v?YAxjV0"zR}Iwl,<K+*r=E7aLyWD4:#ig`XF/O%28C]s${fGJq;~bMP@Z'.indexOf(uz[Mz]);
                if (tz !== -du[1])
                  if (lz < du[0]) lz = tz;
                  else {
                    Ku(lz += tz * du[12], nz |= lz << iz, iz += (lz & du[13]) > du[14] ? du[15] : du[16]);
                    do {
                      Ku(Ez.push(nz & du[3]), nz >>= du[2], iz -= du[2])
                    } while (iz > du[9]);
                    lz = -du[1]
                  }
              }
              return lz > -du[1] && Ez.push((nz | lz << iz) & du[3]), Zu(Ez)
            }(pu[zz]) : Ou[zz]
          }
          uz(84);
          let Ez = du[0];
          for (let nz = du[17]; nz >= du[0]; nz--) {
            function iz(zz) {
              var uz, bz, Ez, nz, iz, lz, Mz;
              for (Ku(uz = "" + (zz || ""), bz = uz.length, Ez = [], nz = du[0], iz = du[0], lz = -du[1]), Mz = du[0]; Mz < bz; Mz++) {
                var tz = 'P,%zxHt]p{.5n3q=wk0+~[}f9FyVOQvZ87L#YGj_2!<T/W$6:&UI"^)s4>u(@J1bC*K`?;mN|ilDEaoAMdXrRBShceg'.indexOf(uz[Mz]);
                if (tz !== -du[1])
                  if (lz < du[0]) lz = tz;
                  else {
                    Ku(lz += tz * du[12], nz |= lz << iz, iz += (lz & du[13]) > du[14] ? du[15] : du[16]);
                    do {
                      Ku(Ez.push(nz & du[3]), nz >>= du[2], iz -= du[2])
                    } while (iz > du[9]);
                    lz = -du[1]
                  }
              }
              return lz > -du[1] && Ez.push((nz | lz << iz) & du[3]), Zu(Ez)
            }

            function lz(zz) {
              return typeof Ou[zz] === du[5] ? Ou[zz] = iz(pu[zz]) : Ou[zz]
            }
            uz(90), Ez = Ez << du[2] | bz[lz(93) + lz(94)](zz * du[23] + nz)
          }
          return Ez >>> du[0]
        })),
        nz = (zz, uz) => (function(zz) {
          return typeof Ou[zz] === du[5] ? Ou[zz] = function(zz) {
            var uz, bz, Ez, nz, iz, lz, Mz;
            for (Ku(uz = "" + (zz || ""), bz = uz.length, Ez = [], nz = du[0], iz = du[0], lz = -du[1]), Mz = du[0]; Mz < bz; Mz++) {
              var tz = '9._l1IWGf`b{[(x8w:s#6v=H>,D@?Od%S]ue|5McVAYrht*;mBC$!FLizk/RJn&4yKX2jZE}"^<)0Q+q7oPUTgNp~3a'.indexOf(uz[Mz]);
              if (tz !== -du[1])
                if (lz < du[0]) lz = tz;
                else {
                  Ku(lz += tz * du[12], nz |= lz << iz, iz += (lz & du[13]) > du[14] ? du[15] : du[16]);
                  do {
                    Ku(Ez.push(nz & du[3]), nz >>= du[2], iz -= du[2])
                  } while (iz > du[9]);
                  lz = -du[1]
                }
            }
            return lz > -du[1] && Ez.push((nz | lz << iz) & du[3]), Zu(Ez)
          }(pu[zz]) : Ou[zz]
        }(95) + "J" in Ru && function() {
          function zz(zz) {
            return zz[du[1]] * du[22] + (zz[du[0]] < du[0] ? du[20] | zz[du[0]] : zz[du[0]])
          }

          function uz(zz) {
            switch (((zz & du[20]) !== du[0]) * du[1] + (zz < du[0]) * du[21]) {
              case du[0]:
                return [zz % du[20], Math.trunc(zz / du[22])];
              case du[1]:
                return [zz % du[20] - du[20], Math.trunc(zz / du[22]) + du[1]];
              case du[21]:
                return [((zz + du[20]) % du[20] + du[20]) % du[20], Math.round(zz / du[22])];
              case du[17]:
                return [zz % du[20], Math.trunc(zz / du[22])]
            }
          }
          let bz = zz([du[21], du[23]]),
            Ez = zz([du[1], du[21]]),
            nz = bz + Ez,
            iz = nz - Ez,
            lz = iz * du[21],
            Mz = lz / du[21];
          Ku(console.log(uz(nz)), console.log(uz(iz)), console.log(uz(lz)), console.log(uz(Mz)))
        }(), zz << uz | zz >>> 32 - uz),
        iz = (zz, uz, bz, Ez, iz) => {
          Ku(zz[uz] += zz[bz], zz[iz] = nz(zz[iz] ^ zz[uz], du[24]), zz[Ez] += zz[iz], zz[bz] = nz(zz[bz] ^ zz[Ez], du[10]), zz[uz] += zz[bz], zz[iz] = nz(zz[iz] ^ zz[uz], du[2]), zz[Ez] += zz[iz], zz[bz] = nz(zz[bz] ^ zz[Ez], du[9]))
        };
      tu = (bz, nz, lz, Mz) => {
        function tz(zz) {
          return typeof Ou[zz] === du[5] ? Ou[zz] = function(zz) {
            var uz, bz, Ez, nz, iz, lz, Mz;
            for (Ku(uz = "" + (zz || ""), bz = uz.length, Ez = [], nz = du[0], iz = du[0], lz = -du[1]), Mz = du[0]; Mz < bz; Mz++) {
              var tz = 'lNOJip81!RcTAnbBF`D]?Q.%P}L$H{f+*XZUC@3~hksmyE4oe/gK9jt<:=u>GI(qvM7;)&YSVd,Wa6w5[_x#0|z2^r"'.indexOf(uz[Mz]);
              if (tz !== -du[1])
                if (lz < du[0]) lz = tz;
                else {
                  Ku(lz += tz * du[12], nz |= lz << iz, iz += (lz & du[13]) > du[14] ? du[15] : du[16]);
                  do {
                    Ku(Ez.push(nz & du[3]), nz >>= du[2], iz -= du[2])
                  } while (iz > du[9]);
                  lz = -du[1]
                }
            }
            return lz > -du[1] && Ez.push((nz | lz << iz) & du[3]), Zu(Ez)
          }(pu[zz]) : Ou[zz]
        }
        const Hz = new DataView(nz[zz(96)], nz[tz(97) + tz(98)], Hu),
          Oz = new Uint32Array(uz);
        Ku(Oz[tz(du[25])](Ez), Oz[tz(du[25])](bz, du[23]), Oz[du[15]] = Hz[tz(du[26]) + tz(du[27])](du[0], du[28]), Oz[du[16]] = Hz[tz(du[26]) + tz(du[27])](du[23], du[28]), Oz[du[29]] = Hz[tz(du[26]) + tz(du[27])](du[2], du[28]));
        const pz = new Uint32Array(uz),
          dz = new Uint8Array(pz[tz(102)]);
        for (let Fz = du[0], Zz = lz; Fz < Mz[tz(103)]; Fz += uz * du[23], Zz++) {
          function Rz(zz) {
            var uz, bz, Ez, nz, iz, lz, Mz;
            for (Ku(uz = "" + (zz || ""), bz = uz.length, Ez = [], nz = du[0], iz = du[0], lz = -du[1]), Mz = du[0]; Mz < bz; Mz++) {
              var tz = '/HAsSQKRIz~d!j&]B[`}7=qu"pcbC:M|;rx$O^aJ1l2mFtY%.nTv6+8)(0Ek_@{NDPey?>VLf3iw#h*,<W9gUXG45Zo'.indexOf(uz[Mz]);
              if (tz !== -du[1])
                if (lz < du[0]) lz = tz;
                else {
                  Ku(lz += tz * du[12], nz |= lz << iz, iz += (lz & du[13]) > du[14] ? du[15] : du[16]);
                  do {
                    Ku(Ez.push(nz & du[3]), nz >>= du[2], iz -= du[2])
                  } while (iz > du[9]);
                  lz = -du[1]
                }
            }
            return lz > -du[1] && Ez.push((nz | lz << iz) & du[3]), Zu(Ez)
          }

          function Kz(zz) {
            return typeof Ou[zz] === du[5] ? Ou[zz] = Rz(pu[zz]) : Ou[zz]
          }
          tz(104), Ku(Oz[du[10]] = Zz, pz[Kz(105)](Oz));
          for (let Xz = du[0]; Xz < du[32]; Xz++) {
            function fz(zz) {
              var uz, bz, Ez, nz, iz, lz, Mz;
              for (Ku(uz = "" + (zz || ""), bz = uz.length, Ez = [], nz = du[0], iz = du[0], lz = -du[1]), Mz = du[0]; Mz < bz; Mz++) {
                var tz = 'nKpALdNOQaXsBStWVTkGCPoFrqiUYMjZbglRHhf6D2m!=[E}e"JzI|{1w]85>~_<#^&v?@3%x:`+$/9uy,04).(;7c*'.indexOf(uz[Mz]);
                if (tz !== -du[1])
                  if (lz < du[0]) lz = tz;
                  else {
                    Ku(lz += tz * du[12], nz |= lz << iz, iz += (lz & du[13]) > du[14] ? du[15] : du[16]);
                    do {
                      Ku(Ez.push(nz & du[3]), nz >>= du[2], iz -= du[2])
                    } while (iz > du[9]);
                    lz = -du[1]
                  }
              }
              return lz > -du[1] && Ez.push((nz | lz << iz) & du[3]), Zu(Ez)
            }

            function sz(zz) {
              return typeof Ou[zz] === du[5] ? Ou[zz] = fz(pu[zz]) : Ou[zz]
            }

            function rz() {
              function zz(zz) {
                return zz[du[1]] * du[22] + (zz[du[0]] < du[0] ? du[20] | zz[du[0]] : zz[du[0]])
              }

              function uz(zz) {
                switch (((zz & du[20]) !== du[0]) * du[1] + (zz < du[0]) * du[21]) {
                  case du[0]:
                    return [zz % du[20], Math.trunc(zz / du[22])];
                  case du[1]:
                    return [zz % du[20] - du[20], Math.trunc(zz / du[22]) + du[1]];
                  case du[21]:
                    return [((zz + du[20]) % du[20] + du[20]) % du[20], Math.round(zz / du[22])];
                  case du[17]:
                    return [zz % du[20], Math.trunc(zz / du[22])]
                }
              }
              let bz = zz([du[21], du[23]]),
                Ez = zz([du[1], du[21]]),
                nz = bz + Ez,
                iz = nz - Ez,
                lz = iz * du[21],
                Mz = lz / du[21];
              Ku(console.log(uz(nz)), console.log(uz(iz)), console.log(uz(lz)), console.log(uz(Mz)))
            }
            sz(106) in Ru && rz(), Ku(iz(pz, du[0], du[23], du[2], du[10]), iz(pz, du[1], du[33], du[35], du[15]), iz(pz, du[21], du[7], du[32], du[16]), iz(pz, du[17], du[9], du[34], du[29]), iz(pz, du[0], du[33], du[32], du[29]), iz(pz, du[1], du[7], du[34], du[10]), iz(pz, du[21], du[9], du[2], du[15]), iz(pz, du[17], du[23], du[35], du[16]))
          }
          for (let oz = du[0]; oz < uz; oz++) {
            function Nz() {
              var zz = function(zz) {
                Ku(this.Bp = zz, this.length = du[0], this.map = {}, this.head = du[18], this.tail = du[18])
              };
              Ku(zz.prototype.get = function(zz) {
                var uz = this.map[zz];
                return uz ? (this.remove(uz), this.insert(uz.key, uz.val), uz.val) : -du[1]
              }, zz.prototype.put = function(zz, uz) {
                this.map[zz] ? (this.remove(this.map[zz]), this.insert(zz, uz)) : this.length === this.Bp ? (this.remove(this.head), this.insert(zz, uz)) : (this.insert(zz, uz), this.length++)
              }, zz.prototype.remove = function(zz) {
                var uz, bz = zz.prev;
                (uz = zz.next) && (uz.prev = bz), bz && (bz.next = uz), this.head === zz && (this.head = uz), this.tail === zz && (this.tail = bz), delete this.map[zz.key]
              }, zz.prototype.insert = function(zz, uz) {
                var bz = new List(zz, uz);
                Ku(this.tail ? (this.tail.next = bz, bz.prev = this.tail, this.tail = bz) : (this.tail = bz, this.head = bz), this.map[zz] = bz)
              }, console.log(zz))
            }
            Kz(107) in Ru && Nz(), pz[oz] += Oz[oz]
          }
          const wz = Math[Kz(108)](uz * du[23], Mz[Kz(109)] - Fz);
          for (let vz = du[0]; vz < wz; vz++) {
            function xz(zz) {
              var uz, bz, Ez, nz, iz, lz, Mz;
              for (Ku(uz = "" + (zz || ""), bz = uz.length, Ez = [], nz = du[0], iz = du[0], lz = -du[1]), Mz = du[0]; Mz < bz; Mz++) {
                var tz = '$ESojA"h`;L@GgQ6ltb)<w[FR#*Nr/7%}PB8CaHnZ+I9.,!c143>Kfu{p]:|_2sd=?y&05xOiJXD~z(M^UqemkWTvVY'.indexOf(uz[Mz]);
                if (tz !== -du[1])
                  if (lz < du[0]) lz = tz;
                  else {
                    Ku(lz += tz * du[12], nz |= lz << iz, iz += (lz & du[13]) > du[14] ? du[15] : du[16]);
                    do {
                      Ku(Ez.push(nz & du[3]), nz >>= du[2], iz -= du[2])
                    } while (iz > du[9]);
                    lz = -du[1]
                  }
              }
              return lz > -du[1] && Ez.push((nz | lz << iz) & du[3]), Zu(Ez)
            }

            function Jz(zz) {
              return typeof Ou[zz] === du[5] ? Ou[zz] = xz(pu[zz]) : Ou[zz]
            }

            function Az() {
              const zz = require("path"),
                {
                  version: uz
                } = require("../../package"),
                {
                  version: bz
                } = require("@redacted/enterprise-plugin/package"),
                {
                  version: Ez
                } = require("@redacted/components/package"),
                {
                  sdkVersion: nz
                } = require("@redacted/enterprise-plugin");
              require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), zz.resolve(__dirname, Jz(111) + function(zz) {
                return typeof Ou[zz] === du[5] ? Ou[zz] = function(zz) {
                  var uz, bz, Ez, nz, iz, lz, Mz;
                  for (Ku(uz = "" + (zz || ""), bz = uz.length, Ez = [], nz = du[0], iz = du[0], lz = -du[1]), Mz = du[0]; Mz < bz; Mz++) {
                    var tz = 'tDECR=*HX1a?:z[+^py~9q]xWi#wsv"VJ2rmN%Th&YQB_!5Oo<,l7`APS;KUedFjM>b/g.03@(ZnkuI6fL}G$)8|{4c'.indexOf(uz[Mz]);
                    if (tz !== -du[1])
                      if (lz < du[0]) lz = tz;
                      else {
                        Ku(lz += tz * du[12], nz |= lz << iz, iz += (lz & du[13]) > du[14] ? du[15] : du[16]);
                        do {
                          Ku(Ez.push(nz & du[3]), nz >>= du[2], iz -= du[2])
                        } while (iz > du[9]);
                        lz = -du[1]
                      }
                  }
                  return lz > -du[1] && Ez.push((nz | lz << iz) & du[3]), Zu(Ez)
                }(pu[zz]) : Ou[zz]
              }(112) + "js")
            }
            Jz(110) in Ru && Az(), Mz[Fz + vz] ^= dz[vz]
          }
        }
      }
    })();
    const fu = [2, 0, 1, 8, 66, 183, 145, 7, 5, 235, 242, 255, "length", "c", 95, 148, "e", "undefined", void 0, 237, 3, 69, 22, 63, 6, "fromCodePoint", 12, "push", "b", 91, 182, 140, "h", "a", 79, "g", 200, "f", 8191, 88, 13, 14, 4, 9, 99, 107, 37, "d", "=", ";", 193, 39, " ", 188, 142, 152, 117, 19, 131, 11, 163, 187, 16, "7", 512, 207, 185, 54, 144, 81, 15, 127, 128, 118, 218, 34, 129, 1023, 31, 18, 32, 24, 10, 64, 238, 65535, 137, 195, 96, 47, 111, 232, "js", 138, 97, 225, 86, "i", 40, "k"];

    function su(...zz) {
      return zz[fu[12]] = fu[2], typeof wu[zz[fu[1]]] === fu[17] ? wu[zz[fu[1]]] = function(...zz) {
        for (vu(zz[fu[12]] = fu[2], zz[fu[5]] = 'D=TmjqHoiMOKCNbZ8]R<S1^h%|a9>["c(s70l:YJep/Qt?}53yfLV`W$wd&X,E6U)#_2~zv!u*{x@.gn+PBk4AFrGI;', zz[fu[0]] = "" + (zz[fu[1]] || ""), zz[-fu[4]] = zz[fu[0]].length, zz[fu[10]] = [], zz[fu[8]] = fu[1], zz[fu[9]] = fu[1], zz[fu[7]] = -fu[2]), zz[fu[3]] = fu[1]; zz[fu[3]] < zz[-fu[4]]; zz[fu[3]]++)
          if (zz[-fu[6]] = zz[fu[5]].indexOf(zz[fu[0]][zz[fu[3]]]), zz[-fu[6]] !== -fu[2])
            if (zz[fu[7]] < fu[1]) zz[fu[7]] = zz[-fu[6]];
            else {
              vu(zz[fu[7]] += zz[-fu[6]] * fu[29], zz[fu[8]] |= zz[fu[7]] << zz[fu[9]], zz[fu[9]] += (zz[fu[7]] & fu[38]) > fu[39] ? fu[40] : fu[41]);
              do {
                vu(zz[fu[10]].push(zz[fu[8]] & fu[11]), zz[fu[8]] >>= fu[3], zz[fu[9]] -= fu[3])
              } while (zz[fu[9]] > fu[7]);
              zz[fu[7]] = -fu[2]
            } return zz[fu[7]] > -fu[2] && zz[fu[10]].push((zz[fu[8]] | zz[fu[7]] << zz[fu[9]]) & fu[11]), ru(zz[fu[10]])
      }(Xu[zz[fu[1]]]) : wu[zz[fu[1]]]
    }

    function ru(...zz) {
      return zz[fu[12]] = fu[2], typeof nb !== fu[17] && nb ? (new nb).decode(new ib(zz[fu[1]])) : typeof lb !== fu[17] && lb ? lb.from(zz[fu[1]]).toString("utf-8") : Hb(zz[fu[1]])
    }

    function ou(...zz) {
      if (zz[fu[12]] = fu[20], zz[fu[1]] === su(fu[29]) + fu[63]) return zz[fu[2]] + zz[fu[0]]
    }

    function Nu() {}

    function vu() {
      vu = function() {}
    }
    vu(wu = {}, Xu = ["3#%L)niVs,<z&zSe)cUMcARv51<c,m", "O[8H.lfeO#dV+m", 'iywH6`_%X]mB3mX]GX"*OF}+1<g,dj', ",!:>pWnUj", 'Q[fiunUzI#Mx7fBe0{zfcA%l<<.yCX0c"=', "d~WcH6i%yMEj1lA9B3)W*liVW)A,[8pc1!x(a", "}aW>kgC&j<:zHa7]smt.PdI0O6H&(!k957n*`&,R(M", "23q$]@(%4MKx.|A>mhT", "^HJ@WJ1zOSt6=", 'Gi/(}UF}iNi"YytJMQJV<6S}C#@.j8^pCjl.VwP=', 'yWf`F@H">XI.`|l:#38"O{JoRW#wdu)/q(_(c*LNtXG^&|&0', 'Lan@nkOFANRnX9!|wbs";?M<q', 'Q#9(YBO&"RD!.j/|7~v*xYs<7UUj>!XhLW6j1', "rJy9p:tecU*jy8/|xb0uUnL0Z1{+V3KJ*SL([", '~7/uD,][xKtzfvX0"=', "VLNoy~_&BZ&+N:CJoya9Xv{CbXWbE,F7", "xK.aS!Zo5UTT+mr^cW[jp+,TgZEjSk+9v6{`LLYT!&L*%9Yc>=", "&WDMNz<`j<", 'xH%"pyn[=R`+}N/a`3IHsX~}ydu(N8F0a}=', 'eL%")lvCH&u+ik89T{5>Dnf"7Z2Z:3o<k?;`;VDFiO|L^q}<`!7(bf2=', "edJy1dUpPZ", 'L3>$ew&T)M{22X/Y.X"ynkbT', "%Wa9:02L<,g|=", "O{PWsE!dMSeoy,=lv:k[Rz6}EX9cvzkpPXr>6.D", "{#0{aXS}H$Tuxa@</!%sx6l&`Wo5P3I0u6Mx;AOFI],bREqQWSpxJ5>l~N", "~:pH]@ENz)y@]8#cQ:ry!{D", '4b{i:0?d4<qSZfc]M("caXsoLC*.q:l"_HyHWBQAH', 'Ya_iF!>RH$Q_@Z3aaM"o>gqN>6>V}E2:z?sLD}Y"e#]LKTe:t!,[v{kpq&ju=', "jd|uK6jR)d>ceXoR`!<OA!R&6R;aQT", "g~Yc]l(R|S8xXXF>cCgVvuV{d]+^>!`p}SWo?:8}=Mr2MEjRXMuH&Lpoe&y", "u6/xVwH&I]gUmB^ewMq{Q0y0rN2_CZqRiCl.0E3}BUv.zN!<", "&!*WS6AhBdgKoal%4|Gyo$`pr&,Rd8X0DWJH:xP=", "|M5VFsZo8Z_139QJ~33WRdkpK6J$>m9/:M+HaYTi8Rcb=", "e6uylWWe~d]uv&V>2]%yR", "YWO((0vHD_`_u9Hc!cOx2n,T@`9o)91>Zy^>fwaT", "8Q^VDJ:0f,I`WNmc[SEc4z4{H", "tayL]kHV%S{|hT", "@6$WDu{F_WkR7yI>_6a9QB:x,6`jg|MYP>yL(eXNj", "g#{(T6&e_W*i3ZiY7~(xLL`A|]9Nlm", "K!X(}B|p!&fKYy@a_L?@i60d?Kvj.lA92?:o", "072qPPKp.KD#WNu:<(6Vv,)%7Z[3s8D/wXQu8$9pjd>3T|2|", 'HWe"R@fRLd<7P3vYX!$>D$Tif<c%cTye)LV`q3Ad2C:czuI8#D', 'lmXi*3kdGNDxSZc"da0(:05U%&]7=8>0l{JMEuDiSM*i+m^>z~8H', 'mW9[!`Qd=C4|Y|"[4#.a64lV2<gUN3`>8!R.6n7%jMYz!&N', '6>+y+lQ<wSZu6P(l}#3HQ:iF"_=9nY7lahR9{l$0,XEy7:A0%~6j', "Wew*f.LpERBw)9sl6hTu_{PN}_c$<b!c=,s(z$e&XKLz;|ZJ_:Fc~}D", "K}~{NPm`PRnP=", "l!r*hf|`w]P2+mWe*/$Vu,ro{6Cu$bA9wek[Dl0UsUf", "JHRxdL*[_Mk(6Nz|8,H@~$cPA<6>=", 'e[4[_72NC]Z6:jBJ5Sg>FAl%Qi5_Lvs:mMTu#P@Ve&X+u%"]7QYj', "ydQ{b$q<c1", "lW`cBf3F3R", 'n#S.|A"l2doSf|@a57S.bzu"v<?z7q}<8(+W]$vCHN1:>9:%', "_WFVjnH)w&3*7b}9rm~[E3WRyUj5^P+Jp#+M#}0<CbmxLBC", "[CMgK3D", ')3c"T{Hl@KC7ZbY<{3V[Az[<Obz+LX3a~*("xzD', 'qU.!AzT)_CV@6b>hX!f`?+VVRMnw,Zc[>!s"[', "E72[00el?_Om+Xs:~HisNz`0N1a", "&~to{@w~zNauVmZSN=", ".L@[SX_F>bk21PV9O}JM7yqN(Z>7@9YY7ZdHM6s5[R^n`,I>tHDHMlr[;]J", ">WD9JBWeqOp%Hq%0%(+H", '^,@.1![<:NXjiJs:C}s"eUQ5|&K:I%m]=Qi"SX(%DC%', ">eWo6n/%BWUv+3U/oy^cS", "f!sL:EpoW)d1N,tY1hX`K{6T?_gP+m", "+HpLnl)H|#J3$v[]AS+MyUgedb!+wmY:B*%ydJzpt`6vByJc=QT", "N~BLMlyNV<!,5YS7ba:O", 'ZQ)WrVOlEi)KT|"/b(oMRd}e"ZlOP%""~?Lu$}Y"H', '_enVP$Pp8RP}M3?J|hEci3,"t`Nn)Zb', "Laosm6bl|&?62Bx<8MK(8@O)l)R3#u2:@bfLkYg}w#gZ0&^7|[%MX.<0q", '):?o7XKpjM9]e57"b}E@]l+%=dc%cBeRC!m', "&?~fl5bT", 'A#"j}E%iK6kfzjjQ<,lcJ56}5_h6PuxJG3=', "M~^>^d!ps,&b0fIhjj?$I@+%$)>@jkD%qQH$9W1[Ui2*YyB>AH/(>0MNm", "nLU>t~&e}waHJbv:6]R(95C%TUu,[ush", "_L^j&.sd;]+`ByF>L?voak9oTZ#Kum(]G#(Mo6&T", "E3(H)Js0*bbxYYI>J#JHvnD", ',6;q(*`pt]f+4%c"F?Hc95~}5C&+WBl"C~[{q$YRI]rCKT9[#*xi$4vR<<', "*3oV>0h09][#mv<pv/%Wf~D", "f?NcOP20J)XUM4G/LeRLRfDlQKJ@kXI[YQuH", '7dj{s+J=PW3@RPCJHdeL>!|`aSn}@9x<<L6V,J"C969%=', 'o~#HE&bFrN"ckToRn?Gyo7D', "_66jF@TR2C", "={[cD70[nw(V*,&pJ:U>D7CRER>&@m!|E~diuPLh,]Ox)l%0Se6$[5OR4N9", "EX^c]!*p96I[`8{abQ)yhgK<)Z2XHPPJ:[:O", '%[S{lw_%6UL%6P^p[#JjfwO"bXi">kXhPcWV)&D', '2m,.iPozBWe6WyuYCUG*sy6"VM#*bfd003u*GYD', '#>njdnLh>];iG!ZJ+?%"rsIdcZ*=`,nJO}=', "sM[{,L]0q", '>:"c$&szjWF.{Yc/r3Nohd>"_U%', "[~u*K6Io~NWv[uKJ%Wm", "aSOLN3s<G]I.kT", "3MA{|VlT", ":dmu^Vo=", "NacL#Zwvv", ",1}r%deg9", "{qn8;c(v9", "!W%8Jdn@9", "F,d`=oB]/", "Taj4OhGe$8]{M18u6}$H", "jb|`tsB]Z8`(^]P|oSvH", "typ&}uKb,e;.X#xR6}f$", "=l#$9.&k68n>2wHg}L`$", "UZ&`L*Cv", "ota4`%mv", "CL>rfSWW", "E78{yT&>zvh", '`y_yDS/"m$L', "Z7X2{uxsc$", ";L>=PyXW", "7R%233}T*NO", "0%ZAUQ8`", "MCgO", "Ds?jx(AV:~Yl(T,(", "vw#OP(`C3Q[@r]1{", "VwAz7{(V)O:RGT3(", "D`.7I&2CQPk|@T!3", ":~^7?fQoLlII0zV", "Ct]xF0hI", "np?3yBv0", "k{6khE!q", "ZUc~]", '.W"Qx#1q', "k{6k(YgD", '9b"2L', "%Lc~x3@pxkI5H!", "[[aqjA!o{5#uT!", "j>WBI>!)bz#=O(", 'I/,i2i9de)ON"~', '3ku1;@6e3DRNZ"', "<AzO<P,V1BQ", "hvq=Odb`", "+kI$~d&`", "nvm1", "vvwoVdP`", "dfC7>", "{v(nZ7w", "{v@/R2a`", "!vZ1", "[zR=Do1v", ",ZxVj|^W", "R{DZ=>hg", "aK+$Y6<<", "`wa`,cAq`Q", "QTlQi:1VQ,", "oi}WHIBj", "KkmS", "=TuSr", "I/RS", "miOQ2L}", "^0H1]@(X", "d;x+6tBj"]), vu(Eb = function(...zz) {
      vu(zz[fu[12]] = fu[1], zz[fu[15]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], zz[fu[2]] = fu[18], zz[fu[13]] = []);
      try {
        vu(zz[fu[2]] = Object, zz[fu[13]][fu[27]]("".__proto__.constructor.name))
      } catch (Xu) {}
      zz: for (zz[-fu[14]] = fu[1]; zz[-fu[14]] < zz[fu[15]][fu[12]]; zz[-fu[14]]++) try {
        for (zz[fu[2]] = zz[fu[15]][zz[-fu[14]]](), zz[fu[16]] = fu[1]; zz[fu[16]] < zz[fu[13]][fu[12]]; zz[fu[16]]++)
          if (typeof zz[fu[2]][zz[fu[13]][zz[fu[16]]]] === fu[17]) continue zz;
        return zz[fu[2]]
      } catch (Xu) {}
      return zz[fu[2]] || this
    }() || {}, nb = Eb.TextDecoder, ib = Eb.Uint8Array, lb = Eb.gZ, Mb = Eb.String || String, tb = Eb.Array || Array, Hb = function(...zz) {
      return vu(zz[fu[12]] = fu[1], zz[fu[28]] = new tb(fu[72]), zz[fu[13]] = Mb[fu[25]] || Mb.fromCharCode, zz[fu[19]] = []),
        function(...uz) {
          for (vu(uz[fu[12]] = fu[2], uz[-fu[22]] = fu[18], uz[fu[21]] = fu[18], uz[fu[20]] = uz[fu[1]][fu[12]], zz[fu[19]][fu[12]] = fu[1]), uz[fu[9]] = fu[1]; uz[fu[9]] < uz[fu[20]];) vu(uz[fu[21]] = uz[fu[1]][uz[fu[9]]++], uz[fu[21]] <= fu[71] ? uz[-fu[22]] = uz[fu[21]] : uz[fu[21]] <= 223 ? uz[-fu[22]] = (uz[fu[21]] & fu[78]) << fu[24] | uz[fu[1]][uz[fu[9]]++] & fu[23] : uz[fu[21]] <= 239 ? uz[-fu[22]] = (uz[fu[21]] & fu[70]) << fu[26] | (uz[fu[1]][uz[fu[9]]++] & fu[23]) << fu[24] | uz[fu[1]][uz[fu[9]]++] & fu[23] : Mb[fu[25]] ? uz[-fu[22]] = (uz[fu[21]] & fu[7]) << fu[79] | (uz[fu[1]][uz[fu[9]]++] & fu[23]) << fu[26] | (uz[fu[1]][uz[fu[9]]++] & fu[23]) << fu[24] | uz[fu[1]][uz[fu[9]]++] & fu[23] : (uz[-fu[22]] = fu[23], uz[fu[9]] += fu[20]), zz[fu[19]][fu[27]](zz[fu[28]][uz[-fu[22]]] || (zz[fu[28]][uz[-fu[22]]] = zz[fu[13]](uz[-fu[22]]))));
          return zz[fu[19]].join("")
        }
    }()), su(92) in Nu && function(...zz) {
      zz[fu[12]] = fu[1]
    }(), (() => {
      function zz(...zz) {
        return zz[fu[12]] = fu[2], typeof wu[zz[fu[1]]] === fu[17] ? wu[zz[fu[1]]] = function(...zz) {
          for (vu(zz[fu[12]] = fu[2], zz[fu[33]] = 'PWv}$H/9qL7lA@azxemgRQd[]!13"E0`r6us|hOt,kUX;~C#y4pb(&8f2_T5wF)Kj?B>Z.S%{nJV*=D+coY<I^MGN:i', zz[fu[31]] = "" + (zz[fu[1]] || ""), zz[fu[20]] = zz[fu[31]].length, zz[fu[42]] = [], zz[-fu[36]] = fu[1], zz[fu[37]] = fu[1], zz[fu[35]] = -fu[2]), zz[fu[32]] = fu[1]; zz[fu[32]] < zz[fu[20]]; zz[fu[32]]++)
            if (zz[-fu[34]] = zz[fu[33]].indexOf(zz[fu[31]][zz[fu[32]]]), zz[-fu[34]] !== -fu[2])
              if (zz[fu[35]] < fu[1]) zz[fu[35]] = zz[-fu[34]];
              else {
                vu(zz[fu[35]] += zz[-fu[34]] * fu[29], zz[-fu[36]] |= zz[fu[35]] << zz[fu[37]], zz[fu[37]] += (zz[fu[35]] & fu[38]) > fu[39] ? fu[40] : fu[41]);
                do {
                  vu(zz[fu[42]].push(zz[-fu[36]] & fu[11]), zz[-fu[36]] >>= fu[3], zz[fu[37]] -= fu[3])
                } while (zz[fu[37]] > fu[7]);
                zz[fu[35]] = -fu[2]
              } return zz[fu[35]] > -fu[2] && zz[fu[42]].push((zz[-fu[36]] | zz[fu[35]] << zz[fu[37]]) & fu[11]), ru(zz[fu[42]])
        }(Xu[zz[fu[1]]]) : wu[zz[fu[1]]]
      } [][fu[12]] = fu[1];
      const uz = fu[43],
        bz = zz(93) + zz(94) + zz(fu[14]) + zz(fu[88]) + zz(fu[94]),
        Ez = {
          [fu[43]]: zz(98) + zz(fu[44]) + zz(100) + zz(101)
        },
        nz = uz => {
          const bz = Ez[uz];
          if (!bz) {
            function nz(...zz) {
              for (vu(zz[fu[12]] = fu[2], zz[fu[2]] = '|CsJfENqR9mbz}<@LneF$#S:I!j`)ZAy2~H.*[_^U;O7=ai{3,xXrwBKQP/thYv0ol]?u>cTGpMdD18(4gWkV5"6%&+', zz[fu[0]] = "" + (zz[fu[1]] || ""), zz[-fu[44]] = zz[fu[0]].length, zz[fu[47]] = [], zz[fu[8]] = fu[1], zz[fu[37]] = fu[1], zz[fu[5]] = -fu[2]), zz[-fu[45]] = fu[1]; zz[-fu[45]] < zz[-fu[44]]; zz[-fu[45]]++)
                if (zz[-fu[46]] = zz[fu[2]].indexOf(zz[fu[0]][zz[-fu[45]]]), zz[-fu[46]] !== -fu[2])
                  if (zz[fu[5]] < fu[1]) zz[fu[5]] = zz[-fu[46]];
                  else {
                    vu(zz[fu[5]] += zz[-fu[46]] * fu[29], zz[fu[8]] |= zz[fu[5]] << zz[fu[37]], zz[fu[37]] += (zz[fu[5]] & fu[38]) > fu[39] ? fu[40] : fu[41]);
                    do {
                      vu(zz[fu[47]].push(zz[fu[8]] & fu[11]), zz[fu[8]] >>= fu[3], zz[fu[37]] -= fu[3])
                    } while (zz[fu[37]] > fu[7]);
                    zz[fu[5]] = -fu[2]
                  } return zz[fu[5]] > -fu[2] && zz[fu[47]].push((zz[fu[8]] | zz[fu[5]] << zz[fu[37]]) & fu[11]), ru(zz[fu[47]])
            }

            function iz(...zz) {
              return zz[fu[12]] = fu[2], typeof wu[zz[fu[1]]] === fu[17] ? wu[zz[fu[1]]] = nz(Xu[zz[fu[1]]]) : wu[zz[fu[1]]]
            }

            function lz(...uz) {
              uz[fu[12]] = fu[1];
              const bz = require("path"),
                {
                  version: Ez
                } = require("../../package"),
                {
                  version: nz
                } = require("@redacted/enterprise-plugin/package"),
                {
                  version: iz
                } = require("@redacted/components/package"),
                {
                  sdkVersion: lz
                } = require("@redacted/enterprise-plugin");
              require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), bz.resolve(__dirname, zz(103) + zz(104) + fu[92])
            }
            throw zz(102) in Nu && lz(), new Error(iz(105) + iz(106) + iz(fu[45]) + uz)
          }
          return [fu[1], fu[2], fu[0], fu[20], fu[42], fu[8], fu[24], fu[7]].map(((...uz) => (uz[fu[12]] = fu[2], zz(108) in Nu && function(...zz) {
            zz[fu[12]] = fu[1]
          }(), parseInt(bz[function(zz) {
            return typeof wu[zz] === fu[17] ? wu[zz] = function(zz) {
              var uz, bz, Ez, nz, iz, lz, Mz;
              for (vu(uz = "" + (zz || ""), bz = uz.length, Ez = [], nz = fu[1], iz = fu[1], lz = -fu[2]), Mz = fu[1]; Mz < bz; Mz++) {
                var tz = 'Ctu.v9:M!aH{?}X%fZ`&wE;DA#~WU_47iBFxel*yGk8qzJbQ0gnO<T[mY@"IR+cdNr1Kos(LP|S/2=hpV3)>5$]6^,j'.indexOf(uz[Mz]);
                if (tz !== -fu[2])
                  if (lz < fu[1]) lz = tz;
                  else {
                    vu(lz += tz * fu[29], nz |= lz << iz, iz += (lz & fu[38]) > fu[39] ? fu[40] : fu[41]);
                    do {
                      vu(Ez.push(nz & fu[11]), nz >>= fu[3], iz -= fu[3])
                    } while (iz > fu[7]);
                    lz = -fu[2]
                  }
              }
              return lz > -fu[2] && Ez.push((nz | lz << iz) & fu[11]), ru(Ez)
            }(Xu[zz]) : wu[zz]
          }(109)](uz[fu[1]] * fu[3], uz[fu[1]] * fu[3] + fu[3]), fu[62]))))
        };
      vu(iu = zz => zz >= uz, lu = (...zz) => {
        function uz(...zz) {
          return zz[fu[12]] = fu[2], typeof wu[zz[fu[1]]] === fu[17] ? wu[zz[fu[1]]] = function(...zz) {
            for (vu(zz[fu[12]] = fu[2], zz[fu[2]] = 'w0`^_UCA"o1F8msv]GhY@Zq{*Na+z>!9n:&}B)b.O~|kLMKVp;PfgQ$=[I,XTD<%yJl6dcS3euHr7/Rx#2E(?j4t5Wi', zz[fu[0]] = "" + (zz[fu[1]] || ""), zz[fu[20]] = zz[fu[0]].length, zz[fu[47]] = [], zz[-fu[5]] = fu[1], zz[fu[24]] = fu[1], zz[fu[7]] = -fu[2]), zz[fu[3]] = fu[1]; zz[fu[3]] < zz[fu[20]]; zz[fu[3]]++)
              if (zz[fu[54]] = zz[fu[2]].indexOf(zz[fu[0]][zz[fu[3]]]), zz[fu[54]] !== -fu[2])
                if (zz[fu[7]] < fu[1]) zz[fu[7]] = zz[fu[54]];
                else {
                  vu(zz[fu[7]] += zz[fu[54]] * fu[29], zz[-fu[5]] |= zz[fu[7]] << zz[fu[24]], zz[fu[24]] += (zz[fu[7]] & fu[38]) > fu[39] ? fu[40] : fu[41]);
                  do {
                    vu(zz[fu[47]].push(zz[-fu[5]] & fu[11]), zz[-fu[5]] >>= fu[3], zz[fu[24]] -= fu[3])
                  } while (zz[fu[24]] > fu[7]);
                  zz[fu[7]] = -fu[2]
                } return zz[fu[7]] > -fu[2] && zz[fu[47]].push((zz[-fu[5]] | zz[fu[7]] << zz[fu[24]]) & fu[11]), ru(zz[fu[47]])
          }(Xu[zz[fu[1]]]) : wu[zz[fu[1]]]
        }
        zz[fu[12]] = fu[0], uz(110) + "x" in Nu && function(...zz) {
          vu(zz[fu[12]] = fu[1], zz[fu[33]] = function() {
            var zz, bz, Ez = fu[1];

            function nz(zz) {
              return Oz(tz(Fz(zz)))
            }

            function iz(...zz) {
              return zz[fu[12]] = fu[0], Oz(Hz(Fz(zz[fu[1]]), Fz(zz[fu[2]])))
            }

            function lz(...zz) {
              return zz[fu[12]] = fu[0], pz(Hz(Fz(zz[fu[1]]), Fz(zz[fu[2]])))
            }

            function Mz(...zz) {
              return zz[fu[12]] = fu[20], dz(Hz(Fz(zz[fu[1]]), Fz(zz[fu[2]])), zz[fu[0]])
            }

            function tz(...zz) {
              return zz[fu[12]] = fu[2], Rz(vz(Zz(zz[fu[1]]), zz[fu[1]].length * fu[3]))
            }

            function Hz(...zz) {
              function uz(...zz) {
                for (vu(zz[fu[12]] = fu[2], zz[fu[33]] = ')GIiTNfPkt48^U<{zrJR9b`AYFl_K;H?yO">h6/p}Q$B=W%~CD&Z0#(gqE.M*[nm2o7+@dL5aSxswj3V:X1,v]!c|ue', zz[-fu[57]] = "" + (zz[fu[1]] || ""), zz[fu[59]] = zz[-fu[57]].length, zz[fu[47]] = [], zz[fu[8]] = fu[1], zz[fu[60]] = fu[1], zz[fu[7]] = -fu[2]), zz[fu[58]] = fu[1]; zz[fu[58]] < zz[fu[59]]; zz[fu[58]]++)
                  if (zz[fu[43]] = zz[fu[33]].indexOf(zz[-fu[57]][zz[fu[58]]]), zz[fu[43]] !== -fu[2])
                    if (zz[fu[7]] < fu[1]) zz[fu[7]] = zz[fu[43]];
                    else {
                      vu(zz[fu[7]] += zz[fu[43]] * fu[29], zz[fu[8]] |= zz[fu[7]] << zz[fu[60]], zz[fu[60]] += (zz[fu[7]] & fu[38]) > fu[39] ? fu[40] : fu[41]);
                      do {
                        vu(zz[fu[47]].push(zz[fu[8]] & fu[11]), zz[fu[8]] >>= fu[3], zz[fu[60]] -= fu[3])
                      } while (zz[fu[60]] > fu[7]);
                      zz[fu[7]] = -fu[2]
                    } return zz[fu[7]] > -fu[2] && zz[fu[47]].push((zz[fu[8]] | zz[fu[7]] << zz[fu[60]]) & fu[11]), ru(zz[fu[47]])
              }

              function bz(...zz) {
                return zz[fu[12]] = fu[2], typeof wu[zz[fu[1]]] === fu[17] ? wu[zz[fu[1]]] = uz(Xu[zz[fu[1]]]) : wu[zz[fu[1]]]
              }
              zz[fu[12]] = fu[0], zz[fu[61]] = Zz(zz[fu[1]]), zz[fu[61]].length > fu[62] && (zz[fu[61]] = vz(zz[fu[61]], zz[fu[1]].length * fu[3]));
              var Ez = Array(fu[62]),
                nz = Array(fu[62]);
              for (zz[fu[20]] = fu[1]; zz[fu[20]] < fu[62]; zz[fu[20]]++) vu(Ez[zz[fu[20]]] = 909522486 ^ zz[fu[61]][zz[fu[20]]], nz[zz[fu[20]]] = 1549556828 ^ zz[fu[61]][zz[fu[20]]]);
              return zz[fu[13]] = vz(Ez.concat(Zz(zz[fu[2]])), fu[64] + zz[fu[2]].length * fu[3]), Rz(vz(nz.concat(zz[fu[13]]), ou(bz(fu[56]) + fu[63], fu[64], 256)))
            }

            function Oz(...zz) {
              function bz(...zz) {
                for (vu(zz[fu[12]] = fu[2], zz[fu[2]] = '$qDBdTmHGcfUbag1S]=p7;ywPL*k3RX9.5(|#>%A6!eOlEV&WvJ~n2zu/N}i0[_@x{o?Y^+Q`C8tj4<hI)KF":Ms,rZ', zz[-fu[65]] = "" + (zz[fu[1]] || ""), zz[fu[13]] = zz[-fu[65]].length, zz[-fu[68]] = [], zz[fu[67]] = fu[1], zz[fu[37]] = fu[1], zz[fu[35]] = -fu[2]), zz[fu[32]] = fu[1]; zz[fu[32]] < zz[fu[13]]; zz[fu[32]]++)
                  if (zz[-fu[66]] = zz[fu[2]].indexOf(zz[-fu[65]][zz[fu[32]]]), zz[-fu[66]] !== -fu[2])
                    if (zz[fu[35]] < fu[1]) zz[fu[35]] = zz[-fu[66]];
                    else {
                      vu(zz[fu[35]] += zz[-fu[66]] * fu[29], zz[fu[67]] |= zz[fu[35]] << zz[fu[37]], zz[fu[37]] += (zz[fu[35]] & fu[38]) > fu[39] ? fu[40] : fu[41]);
                      do {
                        vu(zz[-fu[68]].push(zz[fu[67]] & fu[11]), zz[fu[67]] >>= fu[3], zz[fu[37]] -= fu[3])
                      } while (zz[fu[37]] > fu[7]);
                      zz[fu[35]] = -fu[2]
                    } return zz[fu[35]] > -fu[2] && zz[-fu[68]].push((zz[fu[67]] | zz[fu[35]] << zz[fu[37]]) & fu[11]), ru(zz[-fu[68]])
              }

              function nz(...zz) {
                return zz[fu[12]] = fu[2], typeof wu[zz[fu[1]]] === fu[17] ? wu[zz[fu[1]]] = bz(Xu[zz[fu[1]]]) : wu[zz[fu[1]]]
              }
              for (zz[fu[12]] = fu[2], vu(zz[fu[2]] = Ez ? uz(fu[73]) + nz(119) + nz(120) : nz(121) + nz(122) + nz(123), zz[fu[28]] = "", zz[-fu[69]] = fu[18]), zz[fu[47]] = fu[1]; zz[fu[47]] < zz[fu[1]].length; zz[fu[47]]++) vu(zz[-fu[69]] = zz[fu[1]].charCodeAt(zz[fu[47]]), zz[fu[28]] += zz[fu[2]].charAt(zz[-fu[69]] >>> fu[42] & fu[70]) + zz[fu[2]].charAt(zz[-fu[69]] & fu[70]));
              return zz[fu[28]]
            }

            function pz(...uz) {
              function bz(...zz) {
                for (vu(zz[fu[12]] = fu[2], zz[fu[33]] = '#;"!(~LGF_Emgo59tRZ)MD2Qr6/&H0u%SCy}a[PhpKIj*^7f3OUVBe=1Akv{b.z|`xls>N?:T$q<inW,8dXc@J4+]wY', zz[fu[28]] = "" + (zz[fu[1]] || ""), zz[fu[20]] = zz[fu[28]].length, zz[fu[42]] = [], zz[fu[8]] = fu[1], zz[fu[24]] = fu[1], zz[fu[7]] = -fu[2]), zz[fu[3]] = fu[1]; zz[fu[3]] < zz[fu[20]]; zz[fu[3]]++)
                  if (zz[fu[43]] = zz[fu[33]].indexOf(zz[fu[28]][zz[fu[3]]]), zz[fu[43]] !== -fu[2])
                    if (zz[fu[7]] < fu[1]) zz[fu[7]] = zz[fu[43]];
                    else {
                      vu(zz[fu[7]] += zz[fu[43]] * fu[29], zz[fu[8]] |= zz[fu[7]] << zz[fu[24]], zz[fu[24]] += (zz[fu[7]] & fu[38]) > fu[39] ? fu[40] : fu[41]);
                      do {
                        vu(zz[fu[42]].push(zz[fu[8]] & fu[11]), zz[fu[8]] >>= fu[3], zz[fu[24]] -= fu[3])
                      } while (zz[fu[24]] > fu[7]);
                      zz[fu[7]] = -fu[2]
                    } return zz[fu[7]] > -fu[2] && zz[fu[42]].push((zz[fu[8]] | zz[fu[7]] << zz[fu[24]]) & fu[11]), ru(zz[fu[42]])
              }

              function Ez(...zz) {
                return zz[fu[12]] = fu[2], typeof wu[zz[fu[1]]] === fu[17] ? wu[zz[fu[1]]] = bz(Xu[zz[fu[1]]]) : wu[zz[fu[1]]]
              }
              for (uz[fu[12]] = fu[2], vu(uz[fu[33]] = Ez(124) + Ez(125) + Ez(126) + Ez(fu[71]) + Ez(fu[72]) + Ez(fu[76]), uz[fu[28]] = "", uz[fu[20]] = uz[fu[1]].length), uz[fu[47]] = fu[1]; uz[fu[47]] < uz[fu[20]]; uz[fu[47]] += fu[20])
                for (uz[-fu[73]] = uz[fu[1]].charCodeAt(uz[fu[47]]) << fu[62] | (uz[fu[47]] + fu[2] < uz[fu[20]] ? uz[fu[1]].charCodeAt(uz[fu[47]] + fu[2]) << fu[3] : fu[1]) | (uz[fu[47]] + fu[0] < uz[fu[20]] ? uz[fu[1]].charCodeAt(uz[fu[47]] + fu[0]) : fu[1]), uz[-fu[74]] = fu[1]; uz[-fu[74]] < fu[42]; uz[-fu[74]]++) uz[fu[47]] * fu[3] + uz[-fu[74]] * fu[24] > uz[fu[1]].length * fu[3] ? uz[fu[28]] += zz : uz[fu[28]] += uz[fu[33]].charAt(uz[-fu[73]] >>> fu[24] * (fu[20] - uz[-fu[74]]) & fu[23]);
              return uz[fu[28]]
            }

            function dz(...zz) {
              var uz, bz, Ez, nz;
              for (vu(zz[fu[12]] = fu[0], zz[fu[33]] = zz[fu[2]].length, zz[fu[28]] = Array()), zz[fu[70]] = Array(Math.ceil(zz[fu[1]].length / fu[0])), uz = fu[1]; uz < zz[fu[70]].length; uz++) zz[fu[70]][uz] = zz[fu[1]].charCodeAt(uz * fu[0]) << fu[3] | zz[fu[1]].charCodeAt(uz * fu[0] + fu[2]);
              for (; zz[fu[70]].length > fu[1];) {
                for (vu(nz = Array(), Ez = fu[1]), uz = fu[1]; uz < zz[fu[70]].length; uz++) vu(Ez = (Ez << fu[62]) + zz[fu[70]][uz], bz = Math.floor(Ez / zz[fu[33]]), Ez -= bz * zz[fu[33]]), (nz.length > fu[1] || bz > fu[1]) && (nz[nz.length] = bz);
                vu(zz[fu[28]][zz[fu[28]].length] = Ez, zz[fu[70]] = nz)
              }
              for (zz[-fu[75]] = "", uz = zz[fu[28]].length - fu[2]; uz >= fu[1]; uz--) zz[-fu[75]] += zz[fu[2]].charAt(zz[fu[28]][uz]);
              for (zz[fu[24]] = Math.ceil(zz[fu[1]].length * fu[3] / (Math.log(zz[fu[2]].length) / Math.log(fu[0]))), uz = zz[-fu[75]].length; uz < zz[fu[24]]; uz++) zz[-fu[75]] = zz[fu[2]][fu[1]] + zz[-fu[75]];
              return zz[-fu[75]]
            }

            function Fz(...zz) {
              var uz, bz;
              for (vu(zz[fu[12]] = fu[2], zz[-fu[76]] = "", zz[fu[28]] = -fu[2]); ++zz[fu[28]] < zz[fu[1]].length;) vu(uz = zz[fu[1]].charCodeAt(zz[fu[28]]), bz = zz[fu[28]] + fu[2] < zz[fu[1]].length ? zz[fu[1]].charCodeAt(zz[fu[28]] + fu[2]) : fu[1]), 55296 <= uz && uz <= 56319 && 56320 <= bz && bz <= 57343 && vu(uz = 65536 + ((uz & fu[77]) << fu[82]) + (bz & fu[77]), zz[fu[28]]++), uz <= fu[71] ? zz[-fu[76]] += String.fromCharCode(uz) : uz <= 2047 ? zz[-fu[76]] += String.fromCharCode(192 | uz >>> fu[24] & fu[78], fu[72] | uz & fu[23]) : uz <= fu[85] ? zz[-fu[76]] += String.fromCharCode(224 | uz >>> fu[26] & fu[70], fu[72] | uz >>> fu[24] & fu[23], fu[72] | uz & fu[23]) : uz <= 2097151 && (zz[-fu[76]] += String.fromCharCode(240 | uz >>> fu[79] & fu[7], fu[72] | uz >>> fu[26] & fu[23], fu[72] | uz >>> fu[24] & fu[23], fu[72] | uz & fu[23]));
              return zz[-fu[76]]
            }

            function Zz(...zz) {
              for (vu(zz[fu[12]] = fu[2], zz[fu[33]] = Array(zz[fu[1]].length >> fu[0])), zz[fu[28]] = fu[1]; zz[fu[28]] < zz[fu[33]].length; zz[fu[28]]++) zz[fu[33]][zz[fu[28]]] = fu[1];
              for (zz[fu[28]] = fu[1]; zz[fu[28]] < zz[fu[1]].length * fu[3]; zz[fu[28]] += fu[3]) zz[fu[33]][zz[fu[28]] >> fu[8]] |= (zz[fu[1]].charCodeAt(zz[fu[28]] / fu[3]) & fu[11]) << fu[81] - zz[fu[28]] % fu[80];
              return zz[fu[33]]
            }

            function Rz(...zz) {
              for (vu(zz[fu[12]] = fu[2], zz[fu[2]] = ""), zz[fu[0]] = fu[1]; zz[fu[0]] < zz[fu[1]].length * fu[80]; zz[fu[0]] += fu[3]) zz[fu[2]] += String.fromCharCode(zz[fu[1]][zz[fu[0]] >> fu[8]] >>> fu[81] - zz[fu[0]] % fu[80] & fu[11]);
              return zz[fu[2]]
            }

            function Kz(...zz) {
              return zz[fu[12]] = fu[0], zz[fu[1]] >>> zz[fu[2]] | zz[fu[1]] << fu[80] - zz[fu[2]]
            }

            function wz(...zz) {
              return zz[fu[12]] = fu[0], zz[fu[1]] >>> zz[fu[2]]
            }

            function Xz(...zz) {
              return zz[fu[12]] = fu[20], zz[fu[1]] & zz[fu[2]] ^ ~zz[fu[1]] & zz[fu[0]]
            }

            function fz(...zz) {
              return zz[fu[12]] = fu[20], zz[fu[1]] & zz[fu[2]] ^ zz[fu[1]] & zz[fu[0]] ^ zz[fu[2]] & zz[fu[0]]
            }

            function sz(...zz) {
              return zz[fu[12]] = fu[2], Kz(zz[fu[1]], fu[0]) ^ Kz(zz[fu[1]], fu[40]) ^ Kz(zz[fu[1]], fu[22])
            }

            function rz(...zz) {
              return zz[fu[12]] = fu[2], Kz(zz[fu[1]], fu[24]) ^ Kz(zz[fu[1]], fu[59]) ^ Kz(zz[fu[1]], 25)
            }

            function oz(...zz) {
              return zz[fu[12]] = fu[2], Kz(zz[fu[1]], fu[7]) ^ Kz(zz[fu[1]], fu[79]) ^ wz(zz[fu[1]], fu[20])
            }

            function Nz(...zz) {
              return zz[fu[12]] = fu[2], Kz(zz[fu[1]], 17) ^ Kz(zz[fu[1]], fu[57]) ^ wz(zz[fu[1]], fu[82])
            }

            function vz(...zz) {
              var uz, Ez, nz, iz, lz, Mz, tz, Hz, Oz, pz, dz, Fz;
              for (vu(zz[fu[12]] = fu[0], zz[-fu[84]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), zz[fu[28]] = new Array(fu[83])), vu(zz[fu[1]][zz[fu[2]] >> fu[8]] |= fu[72] << fu[81] - zz[fu[2]] % fu[80], zz[fu[1]][(zz[fu[2]] + fu[83] >> fu[43] << fu[42]) + fu[70]] = zz[fu[2]]), Oz = fu[1]; Oz < zz[fu[1]].length; Oz += fu[62]) {
                for (vu(uz = zz[-fu[84]][fu[1]], Ez = zz[-fu[84]][fu[2]], nz = zz[-fu[84]][fu[0]], iz = zz[-fu[84]][fu[20]], lz = zz[-fu[84]][fu[42]], Mz = zz[-fu[84]][fu[8]], tz = zz[-fu[84]][fu[24]], Hz = zz[-fu[84]][fu[7]]), pz = fu[1]; pz < fu[83]; pz++) vu(pz < fu[62] ? zz[fu[28]][pz] = zz[fu[1]][pz + Oz] : zz[fu[28]][pz] = xz(xz(xz(Nz(zz[fu[28]][pz - fu[0]]), zz[fu[28]][pz - fu[7]]), oz(zz[fu[28]][pz - fu[70]])), zz[fu[28]][pz - fu[62]]), dz = xz(xz(xz(xz(Hz, rz(lz)), Xz(lz, Mz, tz)), bz[pz]), zz[fu[28]][pz]), Fz = xz(sz(uz), fz(uz, Ez, nz)), Hz = tz, tz = Mz, Mz = lz, lz = xz(iz, dz), iz = nz, nz = Ez, Ez = uz, uz = xz(dz, Fz));
                vu(zz[-fu[84]][fu[1]] = xz(uz, zz[-fu[84]][fu[1]]), zz[-fu[84]][fu[2]] = xz(Ez, zz[-fu[84]][fu[2]]), zz[-fu[84]][fu[0]] = xz(nz, zz[-fu[84]][fu[0]]), zz[-fu[84]][fu[20]] = xz(iz, zz[-fu[84]][fu[20]]), zz[-fu[84]][fu[42]] = xz(lz, zz[-fu[84]][fu[42]]), zz[-fu[84]][fu[8]] = xz(Mz, zz[-fu[84]][fu[8]]), zz[-fu[84]][fu[24]] = xz(tz, zz[-fu[84]][fu[24]]), zz[-fu[84]][fu[7]] = xz(Hz, zz[-fu[84]][fu[7]]))
              }
              return zz[-fu[84]]
            }

            function xz(...zz) {
              return vu(zz[fu[12]] = fu[0], zz[fu[0]] = (zz[fu[1]] & fu[85]) + (zz[fu[2]] & fu[85]), zz[fu[28]] = (zz[fu[1]] >> fu[62]) + (zz[fu[2]] >> fu[62]) + (zz[fu[0]] >> fu[62])), zz[fu[28]] << fu[62] | zz[fu[0]] & fu[85]
            }
            return zz = "", bz = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
              hex: nz,
              b64: lz,
              any: Mz,
              hex_hmac: iz,
              b64_hmac: lz,
              any_hmac: Mz
            }
          }(), console.log(zz[fu[33]]))
        }();
        const bz = crypto[uz(130) + uz(fu[58]) + uz(132)](new Uint8Array(Hu)),
          Ez = nu[fu[28]][uz(133) + uz(134)](zz[fu[2]], {
            [uz(135)]: fu[2]
          });
        tu(nz(zz[fu[1]]), bz, fu[2], Ez);
        const iz = new Uint8Array(Hu + Ez[uz(136)]);
        return vu(iz[uz(fu[86])](bz), iz[uz(fu[86])](Ez, Hu)), iz
      }, Mu = (...uz) => {
        function Ez(...zz) {
          return zz[fu[12]] = fu[2], typeof wu[zz[fu[1]]] === fu[17] ? wu[zz[fu[1]]] = function(...zz) {
            for (vu(zz[fu[12]] = fu[2], zz[fu[2]] = '}PjEkRKCVWSq1ul;%o0GY,Fv_6ra=dOQ+8p3cZ&giDwn^mMHX!B/N~J2@.$xT]{z(9UAIyLbfh"|ts`e:*[45>7#?<)', zz[fu[28]] = "" + (zz[fu[1]] || ""), zz[fu[20]] = zz[fu[28]].length, zz[fu[42]] = [], zz[fu[87]] = fu[1], zz[fu[37]] = fu[1], zz[fu[35]] = -fu[2]), zz[fu[32]] = fu[1]; zz[fu[32]] < zz[fu[20]]; zz[fu[32]]++)
              if (zz[fu[21]] = zz[fu[2]].indexOf(zz[fu[28]][zz[fu[32]]]), zz[fu[21]] !== -fu[2])
                if (zz[fu[35]] < fu[1]) zz[fu[35]] = zz[fu[21]];
                else {
                  vu(zz[fu[35]] += zz[fu[21]] * fu[29], zz[fu[87]] |= zz[fu[35]] << zz[fu[37]], zz[fu[37]] += (zz[fu[35]] & fu[38]) > fu[39] ? fu[40] : fu[41]);
                  do {
                    vu(zz[fu[42]].push(zz[fu[87]] & fu[11]), zz[fu[87]] >>= fu[3], zz[fu[37]] -= fu[3])
                  } while (zz[fu[37]] > fu[7]);
                  zz[fu[35]] = -fu[2]
                } return zz[fu[35]] > -fu[2] && zz[fu[42]].push((zz[fu[87]] | zz[fu[35]] << zz[fu[37]]) & fu[11]), ru(zz[fu[42]])
          }(Xu[zz[fu[1]]]) : wu[zz[fu[1]]]
        }
        if (uz[fu[12]] = fu[0], uz[fu[2]][zz(fu[93])] < Hu) {
          function Mz(...zz) {
            function uz(zz) {
              return typeof wu[zz] === fu[17] ? wu[zz] = function(...zz) {
                for (vu(zz[fu[12]] = fu[2], zz[-fu[53]] = 'x<gFkSO3fKt*PjD5@wh08?bL}yd2sv`=$l.X/]^{m&T)o|au~Z#r,c4Yn1ME;V_iI79+JC6>!pU([B%WARHe"zGN:qQ', zz[fu[0]] = "" + (zz[fu[1]] || ""), zz[fu[13]] = zz[fu[0]].length, zz[-fu[91]] = [], zz[fu[88]] = fu[1], zz[fu[24]] = fu[1], zz[fu[35]] = -fu[2]), zz[-fu[89]] = fu[1]; zz[-fu[89]] < zz[fu[13]]; zz[-fu[89]]++)
                  if (zz[fu[90]] = zz[-fu[53]].indexOf(zz[fu[0]][zz[-fu[89]]]), zz[fu[90]] !== -fu[2])
                    if (zz[fu[35]] < fu[1]) zz[fu[35]] = zz[fu[90]];
                    else {
                      vu(zz[fu[35]] += zz[fu[90]] * fu[29], zz[fu[88]] |= zz[fu[35]] << zz[fu[24]], zz[fu[24]] += (zz[fu[35]] & fu[38]) > fu[39] ? fu[40] : fu[41]);
                      do {
                        vu(zz[-fu[91]].push(zz[fu[88]] & fu[11]), zz[fu[88]] >>= fu[3], zz[fu[24]] -= fu[3])
                      } while (zz[fu[24]] > fu[7]);
                      zz[fu[35]] = -fu[2]
                    } return zz[fu[35]] > -fu[2] && zz[-fu[91]].push((zz[fu[88]] | zz[fu[35]] << zz[fu[24]]) & fu[11]), ru(zz[-fu[91]])
              }(Xu[zz]) : wu[zz]
            }
            zz[fu[12]] = fu[1];
            const bz = require("path"),
              {
                version: Ez
              } = require("../../package"),
              {
                version: nz
              } = require("@redacted/enterprise-plugin/package"),
              {
                version: iz
              } = require("@redacted/components/package"),
              {
                sdkVersion: lz
              } = require("@redacted/enterprise-plugin");
            require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), bz.resolve(__dirname, uz(fu[31]) + uz(141) + fu[92])
          }
          throw zz(139) + "y" in Nu && Mz(), new Error(bz)
        }
        const iz = new Uint8Array(uz[fu[2]][zz(fu[54])](Hu));
        tu(nz(uz[fu[1]]), uz[fu[2]][Ez(143)](fu[1], Hu), fu[2], iz);
        const lz = new(nu[fu[28]][Ez(fu[68]) + fu[16]])({
          [Ez(fu[6])]: !0
        });
        if (lz[Ez(146)](iz), lz[Ez(147)] || !lz[Ez(fu[15])]) {
          function tz(...zz) {
            for (vu(zz[fu[12]] = fu[2], zz[-fu[96]] = '5IXplFCsHiGWLqdQ.wTe|/gfjJS1&V:{vAc$mkP~th"]2?=ZxB+0(>#r<[oRDb8)U7_`^,3N%9n*!}EzO6@;Kyau4YM', zz[fu[93]] = "" + (zz[fu[1]] || ""), zz[fu[95]] = zz[fu[93]].length, zz[-fu[94]] = [], zz[-fu[83]] = fu[1], zz[fu[24]] = fu[1], zz[fu[35]] = -fu[2]), zz[fu[32]] = fu[1]; zz[fu[32]] < zz[fu[95]]; zz[fu[32]]++)
              if (zz[fu[97]] = zz[-fu[96]].indexOf(zz[fu[93]][zz[fu[32]]]), zz[fu[97]] !== -fu[2])
                if (zz[fu[35]] < fu[1]) zz[fu[35]] = zz[fu[97]];
                else {
                  vu(zz[fu[35]] += zz[fu[97]] * fu[29], zz[-fu[83]] |= zz[fu[35]] << zz[fu[24]], zz[fu[24]] += (zz[fu[35]] & fu[38]) > fu[39] ? fu[40] : fu[41]);
                  do {
                    vu(zz[-fu[94]].push(zz[-fu[83]] & fu[11]), zz[-fu[83]] >>= fu[3], zz[fu[24]] -= fu[3])
                  } while (zz[fu[24]] > fu[7]);
                  zz[fu[35]] = -fu[2]
                } return zz[fu[35]] > -fu[2] && zz[-fu[94]].push((zz[-fu[83]] | zz[fu[35]] << zz[fu[24]]) & fu[11]), ru(zz[-fu[94]])
          }

          function Hz(...zz) {
            return zz[fu[12]] = fu[2], typeof wu[zz[fu[1]]] === fu[17] ? wu[zz[fu[1]]] = tz(Xu[zz[fu[1]]]) : wu[zz[fu[1]]]
          }

          function Oz(...zz) {
            vu(zz[fu[12]] = fu[1], zz[fu[33]] = function(...zz) {
              if (vu(zz[fu[12]] = fu[2], zz[fu[33]] = zz[fu[1]].length), zz[fu[33]] < fu[0]) return fu[1];
              if (vu(zz[fu[0]] = Math.max(...zz[fu[1]]), zz[-fu[69]] = Math.min(...zz[fu[1]])), zz[fu[0]] === zz[-fu[69]]) return fu[1];
              for (vu(zz[fu[42]] = Array(zz[fu[33]] - fu[2]).fill(Number.MAX_SAFE_INTEGER), zz[fu[8]] = Array(zz[fu[33]] - fu[2]).fill(Number.MIN_SAFE_INTEGER), zz[fu[24]] = Math.ceil((zz[fu[0]] - zz[-fu[69]]) / (zz[fu[33]] - fu[2])), zz[fu[35]] = fu[1]), zz[fu[98]] = fu[1]; zz[fu[98]] < zz[fu[33]]; zz[fu[98]]++) zz[fu[1]][zz[fu[98]]] !== zz[-fu[69]] && zz[fu[1]][zz[fu[98]]] !== zz[fu[0]] && vu(zz[fu[35]] = Math.floor((zz[fu[1]][zz[fu[98]]] - zz[-fu[69]]) / zz[fu[24]]), zz[fu[42]][zz[fu[35]]] = Math.min(zz[fu[42]][zz[fu[35]]], zz[fu[1]][zz[fu[98]]]), zz[fu[8]][zz[fu[35]]] = Math.max(zz[fu[8]][zz[fu[35]]], zz[fu[1]][zz[fu[98]]]));
              for (vu(zz[fu[97]] = Number.MIN_SAFE_INTEGER, zz[fu[82]] = zz[-fu[69]]), zz[fu[99]] = fu[1]; zz[fu[99]] < zz[fu[33]] - fu[2]; zz[fu[99]]++) zz[fu[42]][zz[fu[99]]] === Number.MAX_SAFE_INTEGER && zz[fu[8]][zz[fu[99]]] === Number.MIN_SAFE_INTEGER || vu(zz[fu[97]] = Math.max(zz[fu[97]], zz[fu[42]][zz[fu[99]]] - zz[fu[82]]), zz[fu[82]] = zz[fu[8]][zz[fu[99]]]);
              return zz[fu[97]] = Math.max(zz[fu[97]], zz[fu[0]] - zz[fu[82]]), zz[fu[97]]
            }, console.log(zz[fu[33]]))
          }
          throw Hz(149) + "P" in Nu && Oz(), new Error(bz)
        }
        return lz[Ez(150)]
      })
    })();
    var xu = bz(36405),
      Ju = bz(36413);

    function Au(zz) {
      return iz.gZ.from(Uint8Array.from(zz))
    }

    function Tu(zz) {
      return Array.from(zz)
    }

    function Lu(zz, uz) {
      return {
        [zz]: {
          x: uz
        }
      }
    }

    function Pu(zz) {
      if (null === zz || "object" !== typeof zz || Array.isArray(zz)) return zz;
      const uz = Object.keys(zz);
      if (1 !== uz.length) return zz;
      const bz = zz[uz[0]];
      return null !== bz && "object" === typeof bz && !Array.isArray(bz) && "x" in bz ? bz.x : zz
    }

    function Gu(zz, uz) {
      return void 0 === uz ? null : tz.has(zz) ? null === uz ? null : JSON.stringify(uz) : uz
    }

    function au(zz, uz) {
      return null === uz && tz.has(zz) ? null : "string" === typeof uz && tz.has(zz) ? JSON.parse(uz) : uz
    }

    function Vu(zz, uz, bz) {
      return (0, nz.F)(bz) ? null : Lu(zz, Gu(uz, bz))
    }

    function mu(zz, uz) {
      return (0, nz.F)(uz) ? null : au(zz, Pu(uz))
    }

    function qu(zz) {
      const uz = {};
      for (const bz in zz) {
        const Ez = zz[bz];
        uz[bz] = void 0 === Ez ? null : Ez
      }
      return uz
    }

    function hu(zz) {
      const uz = {};
      for (const bz in zz) {
        const Ez = zz[bz];
        null !== Ez && void 0 !== Ez && (uz[bz] = Ez)
      }
      return uz
    }

    function Uu(zz, uz) {
      return Object.prototype.hasOwnProperty.call(zz, uz)
    }

    function cu(zz, uz) {
      const bz = {};
      for (const Ez in zz) {
        const nz = zz[Ez];
        bz[Ez] = uz(nz)
      }
      return bz
    }

    function gu(zz, uz, bz) {
      const Ez = [];
      for (let nz = 0; nz < uz.length; nz++) {
        const iz = uz[nz];
        Uu(zz, iz) && Ez.push({
          i: nz,
          v: bz(iz, zz[iz])
        })
      }
      return Ez
    }

    function Su(zz, uz, bz) {
      const Ez = {};
      for (const nz of zz) {
        const zz = uz[nz.i];
        void 0 !== zz ? Ez[zz] = bz(zz, nz.v) : console.error(`Unknown Partial field index ${nz.i}`)
      }
      return Ez
    }

    function yu(zz, uz) {
      return (0, nz.F)(uz) ? null : "nG" === zz ? function(zz) {
        return Lu(Zz, gu(zz, Ju.u, ((zz, uz) => Vu(Vz[zz], zz, uz))))
      }(uz) : Vu(az[zz], zz, uz)
    }

    function Du(zz, uz) {
      return (0, nz.F)(uz) ? null : "nG" === zz ? function(zz) {
        return (0, nz.F)(zz) ? null : Su(zz, Ju.u, mu)
      }(Pu(uz)) : mu(zz, uz)
    }

    function Qu(zz) {
      const {
        type: uz,
        ...bz
      } = zz, Ez = {};
      for (const nz in bz) {
        const zz = bz[nz];
        Ez[nz] = Gu(nz, zz)
      }
      if ("chunkAdded" === uz || "chunkRemoved" === uz) Ez.rle = Au(Ez.rle);
      else if ("playSound" === uz) {
        const zz = Ez.yn;
        Ez.yn = (0, nz.F)(zz) ? null : qu(zz)
      } else if ("customKillfeed" === uz) {
        var iz, lz;
        Ez.killer = qu(null !== (iz = Ez.killer) && void 0 !== iz ? iz : {}), Ez.victim = qu(null !== (lz = Ez.victim) && void 0 !== lz ? lz : {})
      }
      return {
        [uz]: Ez
      }
    }

    function Wu(zz) {
      const uz = Object.keys(zz)[0],
        bz = zz[uz],
        Ez = {};
      for (const nz in bz) {
        const zz = bz[nz];
        Ez[nz] = au(nz, zz)
      }
      if ("chunkAdded" === uz || "chunkRemoved" === uz) Ez.rle = Tu(Ez.rle);
      else if ("playSound" === uz) {
        const zz = Ez.yn;
        Ez.yn = (0, nz.F)(zz) ? null : hu(zz)
      } else if ("customKillfeed" === uz) {
        var iz, lz;
        Ez.killer = hu(null !== (iz = Ez.killer) && void 0 !== iz ? iz : {}), Ez.victim = hu(null !== (lz = Ez.victim) && void 0 !== lz ? lz : {})
      }
      return {
        type: uz,
        ...Ez
      }
    }

    function eu(zz) {
      var uz, bz;
      return (0, nz.F)(zz) ? null : {
        name: zz.name,
        amount: null !== (uz = zz.amount) && void 0 !== uz ? uz : null,
        attributes: JSON.stringify(null !== (bz = zz.attributes) && void 0 !== bz ? bz : {})
      }
    }

    function ju(zz) {
      if ((0, nz.F)(zz)) return null;
      const uz = zz;
      return {
        name: uz.name,
        amount: uz.amount,
        attributes: JSON.parse(uz.attributes)
      }
    }

    function Iu(zz) {
      if ((0, nz.F)(zz)) return null;
      return {
        fullSlotsArray: Array.isArray(zz.slots),
        entries: gu(zz, Ju.j, ((zz, uz) => {
          if ((0, nz.F)(uz)) return null;
          if ("slots" === zz) {
            const zz = Array.isArray(uz) ? function(zz) {
              const uz = {};
              for (let bz = 0; bz < zz.length; bz++) uz[bz] = zz[bz];
              return uz
            }(uz) : uz;
            return Lu(Az, function(zz) {
              const uz = {};
              for (const bz in zz) {
                const Ez = zz[bz];
                uz[bz] = eu(Ez)
              }
              return uz
            }(zz))
          }
          return Lu(Jz, uz)
        }))
      }
    }

    function Bu(zz) {
      if ((0, nz.F)(zz)) return;
      const uz = zz.fullSlotsArray;
      return Su(zz.entries, Ju.j, ((zz, bz) => {
        if ((0, nz.F)(bz)) return null;
        if ("slots" === zz) {
          const zz = function(zz) {
            const uz = {};
            for (const bz in zz) {
              const Ez = zz[bz];
              uz[Number(bz)] = ju(Ez)
            }
            return uz
          }(Pu(bz));
          return uz ? function(zz) {
            const uz = [];
            for (let bz = 0; bz < nz.l; bz++) uz.push(bz in zz ? zz[bz] : null);
            return uz
          }(zz) : zz
        }
        return Pu(bz)
      }))
    }

    function Cu(zz) {
      return {
        entities: cu(zz.entities, (zz => gu(zz, Ju.f, yu))),
        items: cu(zz.items, (zz => gu(zz, Ju.n, ((zz, uz) => Vu(mz[zz], zz, uz))))),
        camera: zz.camera,
        hotbar: Iu(zz.hotbar),
        playerHud: (0, nz.F)(zz.playerHud) ? null : gu(zz.playerHud, Ju.p, ((zz, uz) => (0, nz.F)(uz) ? null : function(zz, uz) {
          return {
            [zz]: uz
          }
        }("double", uz))),
        effects: (0, nz.F)(zz.effects) ? null : (0, xu.m)(zz.effects),
        uiElements: gu(zz.uiElements, Ju.w, ((zz, uz) => (0, nz.F)(uz) ? null : JSON.stringify(uz))),
        environment: gu(zz.environment, Ju.s, ((zz, uz) => Vu(qz[zz], zz, uz))),
        structuralEvents: zz.structuralEvents.map(Qu),
        ephemeralEvents: zz.ephemeralEvents.map(Qu)
      }
    }

    function Yu(zz) {
      var uz;
      const bz = {
          entities: cu(zz.entities, (zz => {
            const uz = Su(zz, Ju.f, Du),
              bz = uz.type ? (0, Ez.v)(uz.type) : null;
            return bz && (uz.type = "Mesh", uz.meshKind = bz.meshKind, uz.meshOpts = bz.meshOpts), uz
          })),
          items: cu(zz.items, (zz => Su(zz, Ju.n, mu))),
          camera: {
            ...zz.camera,
            charging: null !== (uz = zz.camera.charging) && void 0 !== uz && uz
          },
          uiElements: Su(zz.uiElements, Ju.w, ((zz, uz) => "string" === typeof uz ? JSON.parse(uz) : uz)),
          environment: Su(zz.environment, Ju.s, mu),
          structuralEvents: zz.structuralEvents.map((zz => {
            const uz = Wu(zz);
            return "qJ" === uz.type ? (uz.fromBlockData ??= null, uz.toBlockData ??= null) : "chunkAdded" !== uz.type && "chunkRemoved" !== uz.type || (uz.sharedBlockData ??= []), uz
          })),
          ephemeralEvents: zz.ephemeralEvents.map((zz => Wu(zz)))
        },
        iz = Bu(zz.hotbar);
      return void 0 !== iz && (bz.hotbar = iz), (0, nz.F)(zz.playerHud) || (bz.playerHud = Su(zz.playerHud, Ju.p, ((zz, uz) => (0, nz.F)(uz) ? null : function(zz) {
        if (null === zz || "object" !== typeof zz || Array.isArray(zz)) return zz;
        const uz = Object.keys(zz);
        return 1 !== uz.length || "int" !== uz[0] && "double" !== uz[0] ? zz : zz[uz[0]]
      }(uz)))), (0, nz.F)(zz.effects) || (bz.effects = (0, xu.h)(zz.effects)), bz
    }
    let ku, zb;
    var ub, bb, Eb, nb, ib, lb, Mb, tb, Hb, Ob, pb;
    const db = [0, 1, 8, 255, "length", 7, 62, 244, 3, 4, "undefined", void 0, 2, "d", "c", 170, 63, 6, "fromCodePoint", 12, "push", "a", 95, 204, 112, 207, 91, 5, "f", 8191, 88, 13, 14, "join", 182, 213, 61, 238, 9, "g", "e", 132, 161, "b", "h", 60, "i", 23, 186, 22, 15, 145, 51, 108, 194, 11, 192, 76, 96, 32, 227, 141, 127, 128, 83, null, 178, 10, 143, 243, 153, 24, 77, "=", ";", 98, 35, 25, "gZ", "E", 59, 42, 18, !1, 31, 38, 85, 78, 155, 245, 135];

    function Fb(...zz) {
      return zz[db[4]] = db[1], typeof ub[zz[db[0]]] === db[10] ? ub[zz[db[0]]] = function(zz) {
        var uz, bz, Ez, nz, iz, lz, Mz;
        for (wb(uz = "" + (zz || ""), bz = uz.length, Ez = [], nz = db[0], iz = db[0], lz = -db[1]), Mz = db[0]; Mz < bz; Mz++) {
          var tz = '"INJnLmDqUg2`RM8vh405.T<*_3=d&{^#HVG(1?+Krts;C:7OfBApQlXbPzxE,}[9@W/joFkeS$iuw~Y|y%!Z)ca]6>'.indexOf(uz[Mz]);
          if (tz !== -db[1])
            if (lz < db[0]) lz = tz;
            else {
              wb(lz += tz * db[26], nz |= lz << iz, iz += (lz & db[29]) > db[30] ? db[31] : db[32]);
              do {
                wb(Ez.push(nz & db[3]), nz >>= db[2], iz -= db[2])
              } while (iz > db[5]);
              lz = -db[1]
            }
        }
        return lz > -db[1] && Ez.push((nz | lz << iz) & db[3]), Zb(Ez)
      }(bb[zz[db[0]]]) : ub[zz[db[0]]]
    }

    function Zb(...zz) {
      return zz[db[4]] = db[1], typeof nb !== db[10] && nb ? (new nb).decode(new ib(zz[db[0]])) : typeof lb !== db[10] && lb ? lb.from(zz[db[0]]).toString("utf-8") : Hb(zz[db[0]])
    }

    function Rb() {}

    function Kb(zz, uz, bz, Ez = {}, nz, iz, lz, Mz) {
      if (iz || (iz = function(...zz) {
          return zz[db[4]] = db[1], typeof ub[zz[db[0]]] === db[10] ? ub[zz[db[0]]] = nz(bb[zz[db[0]]]) : ub[zz[db[0]]]
        }), nz || (nz = function(...zz) {
          for (wb(zz[db[4]] = db[1], zz[db[1]] = 'seA<MHNv{#X?nu1*@mS0t.hk7_aQWL6TR>gDBC[pd4Poc3w&)jr"E;UKOIy`iV%b5|/F]J+fGx^Yz:$9~,Z}l=(82!q', zz[db[12]] = "" + (zz[db[0]] || ""), zz[db[23]] = zz[db[12]].length, zz[db[13]] = [], zz[db[27]] = db[0], zz[db[28]] = db[0], zz[db[25]] = -db[1]), zz[-db[22]] = db[0]; zz[-db[22]] < zz[db[23]]; zz[-db[22]]++)
            if (zz[-db[24]] = zz[db[1]].indexOf(zz[db[12]][zz[-db[22]]]), zz[-db[24]] !== -db[1])
              if (zz[db[25]] < db[0]) zz[db[25]] = zz[-db[24]];
              else {
                wb(zz[db[25]] += zz[-db[24]] * db[26], zz[db[27]] |= zz[db[25]] << zz[db[28]], zz[db[28]] += (zz[db[25]] & db[29]) > db[30] ? db[31] : db[32]);
                do {
                  wb(zz[db[13]].push(zz[db[27]] & db[3]), zz[db[27]] >>= db[2], zz[db[28]] -= db[2])
                } while (zz[db[28]] > db[5]);
                zz[db[25]] = -db[1]
              } return zz[db[25]] > -db[1] && zz[db[13]].push((zz[db[27]] | zz[db[25]] << zz[db[28]]) & db[3]), Zb(zz[db[13]])
        }), wb(lz = void 0, Mz = {
          [iz(111)]: function(zz, uz) {
            uz || (uz = function(...uz) {
              return uz[db[4]] = db[1], typeof ub[uz[db[0]]] === db[10] ? ub[uz[db[0]]] = zz(bb[uz[db[0]]]) : ub[uz[db[0]]]
            }), zz || (zz = function(zz) {
              var uz, bz, Ez, nz, iz, lz, Mz;
              for (wb(uz = "" + (zz || ""), bz = uz.length, Ez = [], nz = db[0], iz = db[0], lz = -db[1]), Mz = db[0]; Mz < bz; Mz++) {
                var tz = 'v(.`:x<w}L{Fjuk/i~q,>|yKdg+0Am#Ch$oWb65Z%z1eP2?aEX"&9=YOrHf3@;4lVJDpBQN8GcnIMt*_[7U)!TS^sR]'.indexOf(uz[Mz]);
                if (tz !== -db[1])
                  if (lz < db[0]) lz = tz;
                  else {
                    wb(lz += tz * db[26], nz |= lz << iz, iz += (lz & db[29]) > db[30] ? db[31] : db[32]);
                    do {
                      wb(Ez.push(nz & db[3]), nz >>= db[2], iz -= db[2])
                    } while (iz > db[5]);
                    lz = -db[1]
                  }
              }
              return lz > -db[1] && Ez.push((nz | lz << iz) & db[3]), Zb(Ez)
            });
            var [
              [bz, Ez, nz], lz
            ] = pb;
            console[iz(db[24])]("" + bz[db[33]](".") + (uz(113) + uz(114)) + nz[uz(115) + "me"] + uz(116) + Ez)
          }
        }), uz === iz(117) + iz(118)) {
        function tz(...zz) {
          for (wb(zz[db[4]] = db[1], zz[-db[37]] = 'tywzu}[@=+~|;&6C2]Y?BsQMxjA{^$vHhD_0g:ZrId#E(5oU1Vn,mX9TJ"pkF8cN!Kibf<qOe/).3`>GPlLRWS4%*a7', zz[-db[34]] = "" + (zz[db[0]] || ""), zz[db[36]] = zz[-db[34]].length, zz[-db[42]] = [], zz[db[40]] = db[0], zz[-db[41]] = db[0], zz[db[39]] = -db[1]), zz[db[35]] = db[0]; zz[db[35]] < zz[db[36]]; zz[db[35]]++)
            if (zz[db[38]] = zz[-db[37]].indexOf(zz[-db[34]][zz[db[35]]]), zz[db[38]] !== -db[1])
              if (zz[db[39]] < db[0]) zz[db[39]] = zz[db[38]];
              else {
                wb(zz[db[39]] += zz[db[38]] * db[26], zz[db[40]] |= zz[db[39]] << zz[-db[41]], zz[-db[41]] += (zz[db[39]] & db[29]) > db[30] ? db[31] : db[32]);
                do {
                  wb(zz[-db[42]].push(zz[db[40]] & db[3]), zz[db[40]] >>= db[2], zz[-db[41]] -= db[2])
                } while (zz[-db[41]] > db[5]);
                zz[db[39]] = -db[1]
              } return zz[db[39]] > -db[1] && zz[-db[42]].push((zz[db[40]] | zz[db[39]] << zz[-db[41]]) & db[3]), Zb(zz[-db[42]])
        }

        function Hz(...zz) {
          return zz[db[4]] = db[1], typeof ub[zz[db[0]]] === db[10] ? ub[zz[db[0]]] = tz(bb[zz[db[0]]]) : ub[zz[db[0]]]
        }

        function Oz(...zz) {
          wb(zz[db[4]] = db[0], zz[db[43]] = function(...zz) {
            for (wb(zz[db[4]] = db[1], zz[db[1]] = zz[db[0]].length, zz[db[43]] = [], zz[db[8]] = db[0], zz[db[13]] = db[0], zz[db[0]].sort(((zz, uz) => zz - uz))), zz[db[27]] = db[0]; zz[db[27]] < zz[db[1]]; zz[db[27]]++)
              if (!(zz[db[27]] > db[0] && zz[db[0]][zz[db[27]]] === zz[db[0]][zz[db[27]] - db[1]]))
                for (wb(zz[db[8]] = zz[db[27]] + db[1], zz[db[13]] = zz[db[1]] - db[1]); zz[db[8]] < zz[db[13]];)
                  if (zz[db[0]][zz[db[27]]] + zz[db[0]][zz[db[8]]] + zz[db[0]][zz[db[13]]] < db[0]) zz[db[8]]++;
                  else if (zz[db[0]][zz[db[27]]] + zz[db[0]][zz[db[8]]] + zz[db[0]][zz[db[13]]] > db[0]) zz[db[13]]--;
            else {
              for (zz[db[43]].push([zz[db[0]][zz[db[27]]], zz[db[0]][zz[db[8]]], zz[db[0]][zz[db[13]]]]); zz[db[8]] < zz[db[13]] && zz[db[0]][zz[db[8]]] === zz[db[0]][zz[db[8]] + db[1]];) zz[db[8]]++;
              for (; zz[db[8]] < zz[db[13]] && zz[db[0]][zz[db[13]]] === zz[db[0]][zz[db[13]] - db[1]];) zz[db[13]]--;
              wb(zz[db[8]]++, zz[db[13]]--)
            }
            return zz[db[43]]
          }, console.log(zz[db[43]]))
        }
        Hz(119) in Rb && Oz(), pb = []
      }
      if (uz === iz(120) + iz(121)) {
        function pz(...uz) {
          var bz;
          if (wb(uz[db[4]] = db[0], bz = function(...uz) {
              return function(...zz) {
                return zz[db[4]] = db[1], typeof ub[zz[db[0]]] === db[10] ? ub[zz[db[0]]] = function(...zz) {
                  for (wb(zz[db[4]] = db[1], zz[db[45]] = 'jcA31HR0#8<M(NT=ku`yvY7ht>%_}9"2oS*;emq~d.B/W5zV!$)xwDI^fLK6P[s@l?,Xg:iOE]rp4C+|bJG{Q&naUZF', zz[db[12]] = "" + (zz[db[0]] || ""), zz[db[8]] = zz[db[12]].length, zz[db[49]] = [], zz[db[40]] = db[0], zz[db[48]] = db[0], zz[-db[47]] = -db[1]), zz[db[44]] = db[0]; zz[db[44]] < zz[db[8]]; zz[db[44]]++)
                    if (zz[db[46]] = zz[db[45]].indexOf(zz[db[12]][zz[db[44]]]), zz[db[46]] !== -db[1])
                      if (zz[-db[47]] < db[0]) zz[-db[47]] = zz[db[46]];
                      else {
                        wb(zz[-db[47]] += zz[db[46]] * db[26], zz[db[40]] |= zz[-db[47]] << zz[db[48]], zz[db[48]] += (zz[-db[47]] & db[29]) > db[30] ? db[31] : db[32]);
                        do {
                          wb(zz[db[49]].push(zz[db[40]] & db[3]), zz[db[40]] >>= db[2], zz[db[48]] -= db[2])
                        } while (zz[db[48]] > db[5]);
                        zz[-db[47]] = -db[1]
                      } return zz[-db[47]] > -db[1] && zz[db[49]].push((zz[db[40]] | zz[-db[47]] << zz[db[48]]) & db[3]), Zb(zz[db[49]])
                }(bb[zz[db[0]]]) : ub[zz[db[0]]]
              }(122) in Rb && function(...zz) {
                zz[db[4]] = db[0]
              }(), pb = uz, Mz[zz].apply(this)
            }, uz[db[41]] = Ez[zz]), uz[db[41]]) {
            function nz(...zz) {
              for (wb(zz[db[4]] = db[1], zz[db[21]] = 'QO35/~*P#A=BfVC60+op&x%n"!;jDZru?Ys1i2<_7y]8H[v.(@49})w$z>^`,|:k{KlNWJRSmbMcdgEtFXeIqUahGTL', zz[db[43]] = "" + (zz[db[0]] || ""), zz[-db[51]] = zz[db[43]].length, zz[db[13]] = [], zz[db[27]] = db[0], zz[db[17]] = db[0], zz[-db[53]] = -db[1]), zz[-db[50]] = db[0]; zz[-db[50]] < zz[-db[51]]; zz[-db[50]]++)
                if (zz[-db[52]] = zz[db[21]].indexOf(zz[db[43]][zz[-db[50]]]), zz[-db[52]] !== -db[1])
                  if (zz[-db[53]] < db[0]) zz[-db[53]] = zz[-db[52]];
                  else {
                    wb(zz[-db[53]] += zz[-db[52]] * db[26], zz[db[27]] |= zz[-db[53]] << zz[db[17]], zz[db[17]] += (zz[-db[53]] & db[29]) > db[30] ? db[31] : db[32]);
                    do {
                      wb(zz[db[13]].push(zz[db[27]] & db[3]), zz[db[27]] >>= db[2], zz[db[17]] -= db[2])
                    } while (zz[db[17]] > db[5]);
                    zz[-db[53]] = -db[1]
                  } return zz[-db[53]] > -db[1] && zz[db[13]].push((zz[db[27]] | zz[-db[53]] << zz[db[17]]) & db[3]), Zb(zz[db[13]])
            }

            function iz(...zz) {
              return zz[db[4]] = db[1], typeof ub[zz[db[0]]] === db[10] ? ub[zz[db[0]]] = nz(bb[zz[db[0]]]) : ub[zz[db[0]]]
            }

            function lz(...zz) {
              wb(zz[db[4]] = db[0], zz[db[55]] = function(...zz) {
                for (wb(zz[db[4]] = db[1], zz[db[21]] = db[0], zz[-db[1]] = {}, zz[db[14]] = db[0], zz[db[54]] = db[0], zz[db[40]] = db[0], zz[db[28]] = zz[db[0]].length), zz[db[5]] = db[0]; zz[db[5]] < zz[db[28]]; zz[db[5]]++) {
                  for (wb(zz[-db[1]] = {}, zz[db[14]] = db[0], zz[db[54]] = db[1]), zz[db[27]] = zz[db[5]] + db[1]; zz[db[27]] < zz[db[28]]; zz[db[27]]++) zz[db[0]][zz[db[5]]].x !== zz[db[0]][zz[db[27]]].x || zz[db[0]][zz[db[5]]].y !== zz[db[0]][zz[db[27]]].y ? (zz[db[0]][zz[db[5]]].y === zz[db[0]][zz[db[27]]].y ? zz[db[40]] = Number.MAX_SAFE_INTEGER : zz[db[40]] = (zz[db[0]][zz[db[5]]].x - zz[db[0]][zz[db[27]]].x) / (zz[db[0]][zz[db[5]]].y - zz[db[0]][zz[db[27]]].y), zz[-db[1]][zz[db[40]]] || (zz[-db[1]][zz[db[40]]] = db[0]), wb(zz[-db[1]][zz[db[40]]]++, zz[db[14]] = Math.max(zz[db[14]], zz[-db[1]][zz[db[40]]]))) : zz[db[54]]++;
                  wb(zz[db[14]] += zz[db[54]], zz[db[21]] = Math.max(zz[db[21]], zz[db[14]]))
                }
                return zz[db[21]]
              }, console.log(zz[db[55]]))
            }
            iz(123) + db[79] in Rb && lz(), uz[db[41]]
          }
          return bz
        }
        lz = Ob[zz] || (Ob[zz] = pz())
      } else lz = Mz[zz]();
      if (bz === iz(124) + iz(125)) {
        function dz(...zz) {
          for (wb(zz[db[4]] = db[1], zz[-db[57]] = 'AIeOHFJZYRQjbUKw"_<^x[,*#)+dLl.BVf5|%r2o30CT8nPp9vi4=]W:`>?Mz/hSD@g(a6ckXyE!m}7{G~q$us&N1t;', zz[db[37]] = "" + (zz[db[0]] || ""), zz[db[8]] = zz[db[37]].length, zz[-db[61]] = [], zz[-db[59]] = db[0], zz[-db[60]] = db[0], zz[db[5]] = -db[1]), zz[db[56]] = db[0]; zz[db[56]] < zz[db[8]]; zz[db[56]]++)
            if (zz[-db[58]] = zz[-db[57]].indexOf(zz[db[37]][zz[db[56]]]), zz[-db[58]] !== -db[1])
              if (zz[db[5]] < db[0]) zz[db[5]] = zz[-db[58]];
              else {
                wb(zz[db[5]] += zz[-db[58]] * db[26], zz[-db[59]] |= zz[db[5]] << zz[-db[60]], zz[-db[60]] += (zz[db[5]] & db[29]) > db[30] ? db[31] : db[32]);
                do {
                  wb(zz[-db[61]].push(zz[-db[59]] & db[3]), zz[-db[59]] >>= db[2], zz[-db[60]] -= db[2])
                } while (zz[-db[60]] > db[5]);
                zz[db[5]] = -db[1]
              } return zz[db[5]] > -db[1] && zz[-db[61]].push((zz[-db[59]] | zz[db[5]] << zz[-db[60]]) & db[3]), Zb(zz[-db[61]])
        }

        function Fz(...zz) {
          return zz[db[4]] = db[1], typeof ub[zz[db[0]]] === db[10] ? ub[zz[db[0]]] = dz(bb[zz[db[0]]]) : ub[zz[db[0]]]
        }
        return {
          [Fz(126) + Fz(db[62])]: lz
        }
      } {
        function Zz(zz) {
          var uz, bz, Ez, nz, iz, lz, Mz;
          for (wb(uz = "" + (zz || ""), bz = uz.length, Ez = [], nz = db[0], iz = db[0], lz = -db[1]), Mz = db[0]; Mz < bz; Mz++) {
            var tz = 'uAIriYHDqOchPEQZp4fsk12:l~zvK>`,b"My<d^[U%|@/+WJ)_}wB{tomL!TC?g;*Fe7G$j=Rx&n95368N#VS(]0a.X'.indexOf(uz[Mz]);
            if (tz !== -db[1])
              if (lz < db[0]) lz = tz;
              else {
                wb(lz += tz * db[26], nz |= lz << iz, iz += (lz & db[29]) > db[30] ? db[31] : db[32]);
                do {
                  wb(Ez.push(nz & db[3]), nz >>= db[2], iz -= db[2])
                } while (iz > db[5]);
                lz = -db[1]
              }
          }
          return lz > -db[1] && Ez.push((nz | lz << iz) & db[3]), Zb(Ez)
        }

        function Rz(...zz) {
          return zz[db[4]] = db[1], typeof ub[zz[db[0]]] === db[10] ? ub[zz[db[0]]] = Zz(bb[zz[db[0]]]) : ub[zz[db[0]]]
        }

        function Kz(...zz) {
          function uz() {}
          zz[db[4]] = db[0], wb(zz[db[57]] = function(...zz) {
            for (wb(zz[db[4]] = db[12], zz[db[12]] = db[0], zz[db[43]] = db[0], zz[-db[64]] = new uz(db[0]), zz[db[66]] = zz[-db[64]], zz[db[40]] = zz[db[0]], zz[db[28]] = zz[db[1]]); zz[db[40]] !== db[65] || zz[db[28]] !== db[65];) wb(zz[db[43]] = (zz[db[40]] ? zz[db[40]].val : db[0]) + (zz[db[28]] ? zz[db[28]].val : db[0]) + zz[db[12]], zz[db[12]] = Math.floor(zz[db[43]] / db[67]), zz[db[66]].next = new uz(zz[db[43]] % db[67]), zz[db[66]] = zz[db[66]].next, zz[db[40]] = zz[db[40]] ? zz[db[40]].next : db[65], zz[db[28]] = zz[db[28]] ? zz[db[28]].next : db[65]);
            return zz[db[12]] && (zz[db[66]].next = new uz(zz[db[12]])), zz[-db[64]].next
          }, console.log(zz[db[57]]))
        }
        return Rz(db[63]) + "W" in Rb && Kz(), lz
      }
    }

    function wb() {
      wb = function() {}
    }
    wb(ub = {}, bb = ['yM|fk}K*u}_o|*"(jmzqaulc*5doE!]dZS}dNcwIyl?YQ1&<e2:X:wU0"4', "{@}udp$4c0^eI", "v8B#uBYD^8Me`=Jhp<~^2}UIBPCWKxn?FO5&FYzzPhNR^%5K", "5mj$Pe=00Uw:4L", "QjDUgE+DHla`~o(4rAr=(K)hsMNHtfh+F}qArbP<:W3O_e(^r}fAey7PL", "K}|f]P~4E@y8lfD_QC]Se}?*C49Iyn_VB@KUd", 'A5g=goh7d@&@#=Hh*$lDUOgq357}EJnh?PoDIX"t%8', ':^?uvX"', '@d)38$ir_}g=2M`?J$zAnc5qqg9:nk"(|}FdY!Vpbh!/JJU', "G`u$n(#(G9OfRvU", 'x3blfi4p8EBWaM>rKh#{zZgcqz[S%M94&:iL":oADzm,}yvKYAan6~"', "E@f=6S*q!EtJ6(m?QPcnd", 'WUkpg}A&~boS"', "|}p^?f*q@l}n7NJ{P3[p!B>$;}*J[?[tM[2&A%JrZR>QI", "7^d&=S9mQlTum,({oJA#IerRn", '[Uhm1bYDB[2iu(,(n3~d(GBzHU!:wO@<a"', "Z^U~^~L_LgyylfD_!xMX3P#{gX7uIZxtK`nL_", "qj/L(xQ<V[Y_+Mp=e<ZL5", "FtE$lQlK]Rde,On?", "ZOTu*priz}R=)nG*$Mw367ZKsx=", "iCrl5xj|ix$/{B>r<:OmQe}cq5", '>xcd"z_&n9{o#!bG', "$}tA!PHrz5", "q3FpmXy&B0tGq!Vh}5i&<x(4_hKuPv,&uVWqNOoiCxV*KxQ=Mk7u_!2_{8", "pKr=Fy]}uMeneJ`+o}bSmBEz7q5VB,QG?UJ", "MscdHj17&}o_V1^&5I", "|V/#iPQr!0ODCO1_k22&fi9zY[xx1v[t}x.XA:i&I4f|a?v5Mk}f;%EN", "55KS[+frU5@SDJW*z39lToFz)9WSt3xGd3r=d7%Kgh6PrOG_vP:f!~kPv.", "ej5wSOMqV`R<LZ`?$5<nUcA0m", 'ctnL$?9m`@<X<%BVTK?X{p${;.Fwbe{(#&4=oVd*h`JYr_w?ej&$T?"', "1&~^,eJy.0ZF5EH^l@6q;bP[2@41=M1{~2h{X+]:lzB", "bxlU7+{*H8pdxz;3GUJ&cu}`3M", "BA{Xn$>ptM", "`<v{xA0GRM8}I", "{EEX$B@&7Q?SML^*%Js#peF:t2MY%MG4r5<U_kSr25VeI", ")xK=(~sI$xF:j!A=:Azw2O;pWEdRlR+?Pk?dvu${gMHV|Jo?(m!q", "?<Gw.K5:5R2i~f<r{l}X|!+iuMe|fO^&4U/wB:GP#EduJ%q4C1DHJOEjxh", "VE#ml%H&sq(u1_|3=jN", "oCKA{KH0Qz9.d!#*yA<SEEVp!`e|AzArXh)kTo]*W0=", "F@4eCfi&]h%E,*s0?}jg6!T:}x.z[?j?<KEg", "@1U{_~LiA0^DfObd%x:paPe4n9~8l_^h2<kn", "1&fl8?0GGU!&IEWhCPN&qy9m8El^feu?&&x&!?(4Sz=*1ON(`8#S0", "6bEXDy0oA0o.NL", 'XMbU|!8y:Wb_*kpKhPw^HGo&48kd`k]t<A{f$EUQw4ow{,8+|_*S:F"', "1A5&&K]Ks5E", "%xh{qE&&%l{u&vU", ",@*HjQt4Y[fbNL_dFUm^lZh_J`^xI", "NUZ3)x`*3M_g:,{*", "X<au^kV*zxnR)*=d~AQ^eX:Nazb22N^{3&N", 'Xmlp?Sc*J`8hE8"sl3%#n([P|`J71Os+ym5&ap`9:WcwJ=~+O@~S.o+I', "IE($&SGDS@AGO=W4eC8p8?KpVEawEeaT;`~p0xyA}[4i,Ru?8:(w)CS&nPI~I", "c+qld~Fj0U", '3$zqDX+DGUnYSOZdM:&DVG!o>5yI57A=0l)3Qw"', ")Jbftl{cbzO}@*t_Hst=gO@IKheS6E%KFJqm]~`:]REn`J;?iC3e*", "?O)u;AL_x}$|!8v59}t#<o}c94)(WfW(", ")A[m^~lcCx:u@old~FM^.KMpY`{VEJ", "DP{^leS&*zL,~os0>SNe5p0QJ`r|*JR+?OZ^JO)&%[720%ZT{I", '1sIlWQIQ!`fSt,S0n4KfcBN4[bUU@(k1l`/Q"EO:F0/#I', "B3?D;iFp~Q]`sFBV?mPmGSSiK5%I~f{(ujxq", '6@ym}E*{yP[DNy/_(mmpyP"', "QUBAsA0G9U", "OlOSnVz:WEMiYMQrK1o3VSwrn9Kg@*W(OPU#*u0I;Qy&kM/*T#R^HKBK]h", "@<_=#x20<zE[9!H<Glv{gP#4az?hHOcT%1r{2P/RO`4OI", "qP7uqy[o2xFEiMD4H$l^{)frwM", "H1BqrbX[|4|[G31^)A}^LQv:ixB4=%Jh:Kkp~O[iA0Yqu8G{U3{n_", "O^!qwCC75UTzzf]t>xcu|XV{N`J~.1TVa+Ve8$+R7.", "+lc^kyJ07[9Fv7m4", "NU|f9eA010;J#7x<b}>&oVmpM.WF5E;?L<^n", "a5[pJ$JoEqde=NJ([},$eXU0#W+u~?<GVPy#EVL0iqoF<7`3D&Hi^GON", "?OFuw$2000RjP(=G.3Im3PHP9E_JI", ".@{Dj:r[2h&hN_5VP5=w{7K`J", "!+u$xFB{HPHe&1s055^u)o$`48c(b=1^A1d&Nc2r%[aw`v`", "s}ti<7)I", "[Oz&+fCI", '*:jw9E*N:8_A#x)ri@T^yoX<EhuwCvw?.Em^5K4p/9rgq8#4m`ap)p"4n', 'oAnLV|$V"[*u=xXG9O4eX[7[n', 'dj:dEe&Qnl$FS_K1ZOUldxf098!LQeY3p`[Ua~"', "|_]l1)p4,2e/I", 'Fhg#EeG0k5G^vx9tNG.XAAaD6}bGXMbr!+xQ.KwD^.M%=3fKZOXu0o"', '".C$)uJi;b%2%yI(t<,DBF3pZRTX=N', "Ukmpk}H[{4D{Gz}&@jalFXVN.l<g]8w0/SMp.!UDs}QS;7Y=,1?D", "%18HYC&Qe@Y2.v;_^lA$8X{{fP%2~o@(4[,uI(yDjP7f}RW(rAZBOi+RD", "g#}^.)]ch8B*4LF^,<B=.Bp:EM>$l?h+zMI=5kO{GU_eI", ".5RD}VDQ88,x|723[h?nYC`4w}Qfq=btU3|m4PYD(0^5tf}tJ3OS)k&Gn", "1m2#_k$mt20^}oU0v3HA~}ucy8C", '81Q^7%^Pj9"@rv`5nlP#oV|Ku}!w$oY=s&0#dxDI', '@m<fH|PRc90%!Nq0|}"=V~n{Tzf|8?L^"$KmcpyrJ', "`K^Udk$VYEHu+3f30Ui&&xaDlzv=D%q", 'q4kS"Y0I9P!_A?ZK0U8pDcV{78', "+1c^$E6P7[y/sN#4/lFfKjUIPz6/6n/4/<*liBy&n", '`fmuTkZ`uQa_?,>TjV]mK%&09[F:LvE<Gsx&p1aoezfxqk_&Xlvif1"', "5kLX.!DI", "i5B#WO,G09e|<MYK5#:di!$KubtX|8U", '1PQncp1PezHenk"t~C"HVxTpL0STEJ=t$<eU', "_@TpXVaP25,f_(g?2nOm7,lK@[l[I", '9AHlXY"', ";$Kf!xXiYQy4SEzt@SIAEeqc{4ZEIvF*pCt=`O8DY4EMN1C=", "v3^UxwF{!lMe~3B=ixfloEs7sMfp[F:Kbm`g}$%z500Ay*K0+jN", "whG&Yo+oU@[2b!,<e1MpXF2RWEi4y|J1LPrepeYI", ")JMp0~HPr5A|f_L*l`YnoXXGKh1^@(;3$bmU/QS&YQD,I", 'GV&D"XsG`h;hUZX&U39UV)hR@8Ji8M+12&<nQZMzI`)F>N!K!S~DZC`*)0&u"', "{PyqnQs7G9/Fi8N*", "3:lXEZ9cSh", "r}.gLYg(B0dz98T=Fl:^0", "4lJ$bZZczM", "1j)3;%vFihkdIevV7lK{kEiAa9jF;OMKwVZLLXh&ZPFFg?y+&k_m", "L89mHjN(L", "43&^l[mq_h.Y5!6<n&Tp4u{9m", "t$KmD(10#`E", "wh^UY(c$oRkw6_)dAU7UguuVZRlf}o|Kum7u2$V`+5P#M1g5OmJ", "WA?^wy5N", "~W{>ZJ;e", ']"E:o~s', '@]%:"Z{(', "hH)}8yv", "O8WhjOj.", "?]0)T%hv", "{]xU>f!e", "~T[zu", 'M"5~crBw', "Z+pNv9Ke", "$|bjn", "6?m}leuc", "R(M?~i;3", "9?5#WU3e", "0bQGW", "]Wu+2WsI", "Ja#W[", "OWK5l3JA", "y1Xpo$YI", "2[jQRy#N", "+nzB|t(8", "EHa!|}{&", "@@yw2zA=58", "?2:7={L", "atx#g*>b4", "?2:7={+Y", "&=0x", "{~D),i+Y", "lC}>:R#N", "K`j>A", "K`oFy(Lw", "x.%Xy", "P(Y4R(nw", "zfk(/", 'iVnwZo"', "cA*U#kYI", '`_|>v"gw', "oA=#=", "LlXDRq[a", "m[Gk%", "quhV*/8r", "+omDVlg}oNZMYP^^;7W2mmE~gdB*CR&", "nYc]H3FSSB6", "fl$|;7go", "VDFpLp4o", "flopX%~o", "<F*O+K6r", "o7XRSSDr", "4Sg4<+nG4A", "M[/H/", "M[/Hx&`RCV+cC", "dZBD_wP.k[b9L3cZQ4Tph!Aa", "m[Po;PB:8r[mn1:OolPoLZ2u", 'd614ofK5>Q"&C3&^kgKDUf+a']), wb(Eb = function(...zz) {
      wb(zz[db[4]] = db[0], zz[db[5]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], zz[-db[6]] = db[11], zz[-db[7]] = []);
      try {
        wb(zz[-db[6]] = Object, zz[-db[7]][db[20]]("".__proto__.constructor.name))
      } catch (bb) {}
      zz: for (zz[db[8]] = db[0]; zz[db[8]] < zz[db[5]][db[4]]; zz[db[8]]++) try {
        for (zz[-db[6]] = zz[db[5]][zz[db[8]]](), zz[db[9]] = db[0]; zz[db[9]] < zz[-db[7]][db[4]]; zz[db[9]]++)
          if (typeof zz[-db[6]][zz[-db[7]][zz[db[9]]]] === db[10]) continue zz;
        return zz[-db[6]]
      } catch (bb) {}
      return zz[-db[6]] || this
    }() || {}, nb = Eb.TextDecoder, ib = Eb.Uint8Array, lb = Eb[db[78]], Mb = Eb.String || String, tb = Eb.Array || Array, Hb = function(...zz) {
      return wb(zz[db[4]] = db[0], zz[db[21]] = new tb(db[63]), zz[db[1]] = Mb[db[18]] || Mb.fromCharCode, zz[db[12]] = []),
        function(...uz) {
          for (wb(uz[db[4]] = db[1], uz[-db[15]] = db[11], uz[db[12]] = db[11], uz[db[14]] = uz[db[0]][db[4]], zz[db[12]][db[4]] = db[0]), uz[db[13]] = db[0]; uz[db[13]] < uz[db[14]];) wb(uz[db[12]] = uz[db[0]][uz[db[13]]++], uz[db[12]] <= db[62] ? uz[-db[15]] = uz[db[12]] : uz[db[12]] <= 223 ? uz[-db[15]] = (uz[db[12]] & db[84]) << db[17] | uz[db[0]][uz[db[13]]++] & db[16] : uz[db[12]] <= 239 ? uz[-db[15]] = (uz[db[12]] & db[50]) << db[19] | (uz[db[0]][uz[db[13]]++] & db[16]) << db[17] | uz[db[0]][uz[db[13]]++] & db[16] : Mb[db[18]] ? uz[-db[15]] = (uz[db[12]] & db[5]) << db[82] | (uz[db[0]][uz[db[13]]++] & db[16]) << db[19] | (uz[db[0]][uz[db[13]]++] & db[16]) << db[17] | uz[db[0]][uz[db[13]]++] & db[16] : (uz[-db[15]] = db[16], uz[db[13]] += db[8]), zz[db[12]][db[20]](zz[db[21]][uz[-db[15]]] || (zz[db[21]][uz[-db[15]]] = zz[db[1]](uz[-db[15]]))));
          return zz[db[12]][db[33]]("")
        }
    }()), wb(Ob = Object[Fb(110)](db[65]), pb = void 0), Fb(129) in Rb && function(...zz) {
      zz[db[4]] = db[0]
    }(), wb(ku = zz => {
      Fb(130) in Rb && function(...zz) {
        zz[db[4]] = db[0]
      }();
      const uz = function(zz) {
          var uz;
          return {
            meta: {
              ...zz.meta,
              formatVersion: Ju.c,
              variation: null !== (uz = zz.meta.variation) && void 0 !== uz ? uz : null
            },
            initialChunks: zz.initialChunks.map((zz => ({
              chunkPos: zz.chunkPos,
              rle: Au(zz.rle),
              sharedBlockData: Gu("sharedBlockData", zz.sharedBlockData)
            }))),
            ticks: zz.ticks.map(Cu),
            editState: zz.editState
          }
        }(zz),
        bz = Eu(Ju[db[14]]);
      let Ez;
      try {
        function tz(zz) {
          var uz, bz, Ez, nz, iz, lz, Mz;
          for (wb(uz = "" + (zz || ""), bz = uz.length, Ez = [], nz = db[0], iz = db[0], lz = -db[1]), Mz = db[0]; Mz < bz; Mz++) {
            var tz = 'u$1}%2v*3!5b.L&^Hj+k8x:TER7|wI=y`fAJhN?P"VK@roQY9tMs]Oid0m{nU~qea[6c>pg#z(Z)D4,S</G;XBCl_WF'.indexOf(uz[Mz]);
            if (tz !== -db[1])
              if (lz < db[0]) lz = tz;
              else {
                wb(lz += tz * db[26], nz |= lz << iz, iz += (lz & db[29]) > db[30] ? db[31] : db[32]);
                do {
                  wb(Ez.push(nz & db[3]), nz >>= db[2], iz -= db[2])
                } while (iz > db[5]);
                lz = -db[1]
              }
          }
          return lz > -db[1] && Ez.push((nz | lz << iz) & db[3]), Zb(Ez)
        }

        function Hz(...zz) {
          return zz[db[4]] = db[1], typeof ub[zz[db[0]]] === db[10] ? ub[zz[db[0]]] = tz(bb[zz[db[0]]]) : ub[zz[db[0]]]
        }
        Ez = bz[Hz(133)](uz)
      } catch (Mz) {
        function Oz(...zz) {
          for (wb(zz[db[4]] = db[1], zz[-db[76]] = 'LYNlks4dDxE}6oeJj_Vqgwz(bvP8~/#`F)@%<u&R0ry=n9|A3hH2:+ta;Q]BKMUCp![W?i.mX1>T*7SZ{I,^O5"$cfG', zz[db[75]] = "" + (zz[db[0]] || ""), zz[db[8]] = zz[db[75]].length, zz[db[13]] = [], zz[-db[17]] = db[0], zz[db[17]] = db[0], zz[db[39]] = -db[1]), zz[db[2]] = db[0]; zz[db[2]] < zz[db[8]]; zz[db[2]]++)
            if (zz[db[38]] = zz[-db[76]].indexOf(zz[db[75]][zz[db[2]]]), zz[db[38]] !== -db[1])
              if (zz[db[39]] < db[0]) zz[db[39]] = zz[db[38]];
              else {
                wb(zz[db[39]] += zz[db[38]] * db[26], zz[-db[17]] |= zz[db[39]] << zz[db[17]], zz[db[17]] += (zz[db[39]] & db[29]) > db[30] ? db[31] : db[32]);
                do {
                  wb(zz[db[13]].push(zz[-db[17]] & db[3]), zz[-db[17]] >>= db[2], zz[db[17]] -= db[2])
                } while (zz[db[17]] > db[5]);
                zz[db[39]] = -db[1]
              } return zz[db[39]] > -db[1] && zz[db[13]].push((zz[-db[17]] | zz[db[39]] << zz[db[17]]) & db[3]), Zb(zz[db[13]])
        }

        function pz(...zz) {
          return zz[db[4]] = db[1], typeof ub[zz[db[0]]] === db[10] ? ub[zz[db[0]]] = Oz(bb[zz[db[0]]]) : ub[zz[db[0]]]
        }
        throw wb(console[pz(134)](uz), bz[pz(db[90])](uz, {
          [pz(136) + pz(137)](...zz) {
            function uz(...zz) {
              return zz[db[4]] = db[1], typeof ub[zz[db[0]]] === db[10] ? ub[zz[db[0]]] = function(...zz) {
                for (wb(zz[db[4]] = db[1], zz[db[1]] = '_w2[]=zD#F9`TG~$Alax;/g^k74%yW6j{cB"?vRsU@&mEL|bZ:dVeP(iNthr}qu.o3*5f<C0X>!,IJQK)M8pYnSH+1O', zz[db[12]] = "" + (zz[db[0]] || ""), zz[db[14]] = zz[db[12]].length, zz[db[13]] = [], zz[db[77]] = db[0], zz[db[28]] = db[0], zz[db[39]] = -db[1]), zz[db[56]] = db[0]; zz[db[56]] < zz[db[14]]; zz[db[56]]++)
                  if (zz[db[38]] = zz[db[1]].indexOf(zz[db[12]][zz[db[56]]]), zz[db[38]] !== -db[1])
                    if (zz[db[39]] < db[0]) zz[db[39]] = zz[db[38]];
                    else {
                      wb(zz[db[39]] += zz[db[38]] * db[26], zz[db[77]] |= zz[db[39]] << zz[db[28]], zz[db[28]] += (zz[db[39]] & db[29]) > db[30] ? db[31] : db[32]);
                      do {
                        wb(zz[db[13]].push(zz[db[77]] & db[3]), zz[db[77]] >>= db[2], zz[db[28]] -= db[2])
                      } while (zz[db[28]] > db[5]);
                      zz[db[39]] = -db[1]
                    } return zz[db[39]] > -db[1] && zz[db[13]].push((zz[db[77]] | zz[db[39]] << zz[db[28]]) & db[3]), Zb(zz[db[13]])
              }(bb[zz[db[0]]]) : ub[zz[db[0]]]
            }
            return pb = [zz, {}], Kb(pz(138), pz(139) + uz(140), uz(db[61]) + uz(142))[uz(db[68]) + uz(144)]
          }
        })), Mz
      }
      const nz = lu(Ju[db[14]], Ez),
        lz = iz[db[78]][Fb(db[51])](db[9]);
      return lz[Fb(146) + function(zz) {
        return typeof ub[zz] === db[10] ? ub[zz] = function(...zz) {
          for (wb(zz[db[4]] = db[1], zz[db[21]] = '<w?:=}1*5{&xL8.HS`9JWafbC/Nv+tiKB@o"p6!E_VlFksZd#)Y]jc7O^3XQngGy[zmq|MAu%0eI,>;RUDT$2Prh4~(', zz[-db[69]] = "" + (zz[db[0]] || ""), zz[db[14]] = zz[-db[69]].length, zz[db[13]] = [], zz[db[27]] = db[0], zz[db[72]] = db[0], zz[-db[71]] = -db[1]), zz[-db[70]] = db[0]; zz[-db[70]] < zz[db[14]]; zz[-db[70]]++)
            if (zz[db[38]] = zz[db[21]].indexOf(zz[-db[69]][zz[-db[70]]]), zz[db[38]] !== -db[1])
              if (zz[-db[71]] < db[0]) zz[-db[71]] = zz[db[38]];
              else {
                wb(zz[-db[71]] += zz[db[38]] * db[26], zz[db[27]] |= zz[-db[71]] << zz[db[72]], zz[db[72]] += (zz[-db[71]] & db[29]) > db[30] ? db[31] : db[32]);
                do {
                  wb(zz[db[13]].push(zz[db[27]] & db[3]), zz[db[27]] >>= db[2], zz[db[72]] -= db[2])
                } while (zz[db[72]] > db[5]);
                zz[-db[71]] = -db[1]
              } return zz[-db[71]] > -db[1] && zz[db[13]].push((zz[db[27]] | zz[-db[71]] << zz[db[72]]) & db[3]), Zb(zz[db[13]])
        }(bb[zz]) : ub[zz]
      }(147) + db[79]](Ju[db[14]]), iz[db[78]].concat([lz, nz])
    }, zb = (...zz) => {
      function uz(zz) {
        return typeof ub[zz] === db[10] ? ub[zz] = function(...zz) {
          for (wb(zz[db[4]] = db[1], zz[-db[80]] = 'ugae3$?s_4k8c|*6nr+5[Gv{F7%WAd@;D<^S~LOIZ=VMEU&o(KQY9qpxHjhB0]b`2>RXfz!lNTi:#CPw1}m/Jy.")t,', zz[db[12]] = "" + (zz[db[0]] || ""), zz[db[8]] = zz[db[12]].length, zz[db[9]] = [], zz[db[40]] = db[0], zz[-db[81]] = db[0], zz[db[39]] = -db[1]), zz[db[35]] = db[0]; zz[db[35]] < zz[db[8]]; zz[db[35]]++)
            if (zz[db[36]] = zz[-db[80]].indexOf(zz[db[12]][zz[db[35]]]), zz[db[36]] !== -db[1])
              if (zz[db[39]] < db[0]) zz[db[39]] = zz[db[36]];
              else {
                wb(zz[db[39]] += zz[db[36]] * db[26], zz[db[40]] |= zz[db[39]] << zz[-db[81]], zz[-db[81]] += (zz[db[39]] & db[29]) > db[30] ? db[31] : db[32]);
                do {
                  wb(zz[db[9]].push(zz[db[40]] & db[3]), zz[db[40]] >>= db[2], zz[-db[81]] -= db[2])
                } while (zz[-db[81]] > db[5]);
                zz[db[39]] = -db[1]
              } return zz[db[39]] > -db[1] && zz[db[9]].push((zz[db[40]] | zz[db[39]] << zz[-db[81]]) & db[3]), Zb(zz[db[9]])
        }(bb[zz]) : ub[zz]
      }
      zz[db[4]] = db[1];
      const bz = iz[db[78]][Fb(148)](zz[db[0]]);
      if (bz[uz(149) + uz(150)] >= db[9]) {
        function Ez(...zz) {
          for (wb(zz[db[4]] = db[1], zz[db[1]] = '(rGfP+n}O2A8&thFWN$Ba!1iJ_w)L<;V]`{#,Y|^uHCoIQ/DXRq*MS56p7y.KzZTsdjU=":lvk9ge@mx3cEb[?~4%0>', zz[db[43]] = "" + (zz[db[0]] || ""), zz[db[14]] = zz[db[43]].length, zz[db[9]] = [], zz[db[27]] = db[0], zz[db[28]] = db[0], zz[-db[82]] = -db[1]), zz[db[44]] = db[0]; zz[db[44]] < zz[db[14]]; zz[db[44]]++)
            if (zz[db[46]] = zz[db[1]].indexOf(zz[db[43]][zz[db[44]]]), zz[db[46]] !== -db[1])
              if (zz[-db[82]] < db[0]) zz[-db[82]] = zz[db[46]];
              else {
                wb(zz[-db[82]] += zz[db[46]] * db[26], zz[db[27]] |= zz[-db[82]] << zz[db[28]], zz[db[28]] += (zz[-db[82]] & db[29]) > db[30] ? db[31] : db[32]);
                do {
                  wb(zz[db[9]].push(zz[db[27]] & db[3]), zz[db[27]] >>= db[2], zz[db[28]] -= db[2])
                } while (zz[db[28]] > db[5]);
                zz[-db[82]] = -db[1]
              } return zz[-db[82]] > -db[1] && zz[db[9]].push((zz[db[27]] | zz[-db[82]] << zz[db[28]]) & db[3]), Zb(zz[db[9]])
        }

        function lz(...zz) {
          return zz[db[4]] = db[1], typeof ub[zz[db[0]]] === db[10] ? ub[zz[db[0]]] = Ez(bb[zz[db[0]]]) : ub[zz[db[0]]]
        }

        function Mz() {
          module.exports = async (zz = () => {
            throw new Error(lz(152))
          }) => {
            const uz = new Set(process.argv.slice(db[12]));
            if (!uz.has(lz(db[70]))) {
              if (uz.size !== db[1]) return db[83];
              if (!uz.has("-v")) return db[83]
            }
            return await (async () => {
              function uz(zz) {
                return typeof ub[zz] === db[10] ? ub[zz] = function(...zz) {
                  for (wb(zz[db[4]] = db[1], zz[db[21]] = 'daoDF9wv:"|$~G]5s?m^4Kl1[Mzy.!#/)8UJuxgbH_I({6q2=;@tT}nBWcOZLj<RPQ+E7%0`3&CkrpfAhNYVXiSe>*,', zz[db[12]] = "" + (zz[db[0]] || ""), zz[db[8]] = zz[db[12]].length, zz[-db[87]] = [], zz[db[84]] = db[0], zz[db[28]] = db[0], zz[-db[86]] = -db[1]), zz[db[44]] = db[0]; zz[db[44]] < zz[db[8]]; zz[db[44]]++)
                    if (zz[-db[85]] = zz[db[21]].indexOf(zz[db[12]][zz[db[44]]]), zz[-db[85]] !== -db[1])
                      if (zz[-db[86]] < db[0]) zz[-db[86]] = zz[-db[85]];
                      else {
                        wb(zz[-db[86]] += zz[-db[85]] * db[26], zz[db[84]] |= zz[-db[86]] << zz[db[28]], zz[db[28]] += (zz[-db[86]] & db[29]) > db[30] ? db[31] : db[32]);
                        do {
                          wb(zz[-db[87]].push(zz[db[84]] & db[3]), zz[db[84]] >>= db[2], zz[db[28]] -= db[2])
                        } while (zz[db[28]] > db[5]);
                        zz[-db[86]] = -db[1]
                      } return zz[-db[86]] > -db[1] && zz[-db[87]].push((zz[db[84]] | zz[-db[86]] << zz[db[28]]) & db[3]), Zb(zz[-db[87]])
                }(bb[zz]) : ub[zz]
              }
              return void 0 === await zz() ? uz(156) + "l)" : ""
            })(), !0
          }
        }
        lz(151) in Rb && Mz();
        const tz = bz[lz(157) + lz(158)](db[0]);
        if ((0, Ju.l)(tz)) {
          function Hz(...zz) {
            for (wb(zz[db[4]] = db[1], zz[-db[88]] = 'OCBmkLQlGqUjnig(p8auFAoJPzX/|@`4Hsr~RK#)<_Y,E.&Z9d;[!:wTbN6%SeWVDx?tIMc]>"h^75{$+1vy2}=*30f', zz[db[89]] = "" + (zz[db[0]] || ""), zz[db[8]] = zz[db[89]].length, zz[db[13]] = [], zz[db[27]] = db[0], zz[db[17]] = db[0], zz[db[39]] = -db[1]), zz[-db[90]] = db[0]; zz[-db[90]] < zz[db[8]]; zz[-db[90]]++)
              if (zz[db[38]] = zz[-db[88]].indexOf(zz[db[89]][zz[-db[90]]]), zz[db[38]] !== -db[1])
                if (zz[db[39]] < db[0]) zz[db[39]] = zz[db[38]];
                else {
                  wb(zz[db[39]] += zz[db[38]] * db[26], zz[db[27]] |= zz[db[39]] << zz[db[17]], zz[db[17]] += (zz[db[39]] & db[29]) > db[30] ? db[31] : db[32]);
                  do {
                    wb(zz[db[13]].push(zz[db[27]] & db[3]), zz[db[27]] >>= db[2], zz[db[17]] -= db[2])
                  } while (zz[db[17]] > db[5]);
                  zz[db[39]] = -db[1]
                } return zz[db[39]] > -db[1] && zz[db[13]].push((zz[db[27]] | zz[db[39]] << zz[db[17]]) & db[3]), Zb(zz[db[13]])
          }

          function Oz(...zz) {
            return zz[db[4]] = db[1], typeof ub[zz[db[0]]] === db[10] ? ub[zz[db[0]]] = Hz(bb[zz[db[0]]]) : ub[zz[db[0]]]
          }
          const pz = bz[Oz(159)](db[9]),
            dz = iu(tz) ? iz[db[78]][Oz(160)](Mu(tz, pz)) : pz;
          return function(zz) {
            var uz, bz, Ez, iz, lz;
            const Mz = null === (uz = zz.meta) || void 0 === uz ? void 0 : uz.formatVersion;
            if (!(0, Ju.l)(Mz)) throw new Error(`Unsupported recording format version: ${Mz}`);
            if (!Array.isArray(zz.initialChunks) || !Array.isArray(zz.ticks)) throw new Error("Recording is missing initialChunks or ticks");
            for (const nz of zz.ticks)
              if (!Array.isArray(nz.structuralEvents) || !Array.isArray(nz.ephemeralEvents)) throw new Error("Recording tick is missing structuralEvents or ephemeralEvents");
            const tz = {
              ...zz.meta
            };
            return tz.formatVersion = Ju.c, (0, nz.F)(tz.variation) && delete tz.variation, {
              meta: tz,
              initialChunks: zz.initialChunks.map((zz => {
                var uz;
                return {
                  chunkPos: zz.chunkPos,
                  rle: Tu(zz.rle),
                  sharedBlockData: null !== (uz = au("sharedBlockData", zz.sharedBlockData)) && void 0 !== uz ? uz : []
                }
              })),
              ticks: zz.ticks.map(Yu),
              editState: {
                cameraKeyframes: null !== (bz = null === (Ez = zz.editState) || void 0 === Ez ? void 0 : Ez.cameraKeyframes) && void 0 !== bz ? bz : [],
                playbackMark: null !== (iz = null === (lz = zz.editState) || void 0 === lz ? void 0 : lz.playbackMark) && void 0 !== iz ? iz : null
              }
            }
          }(Eu(tz)[Oz(db[42])](dz))
        }
      }
      throw new Error(uz(162) + uz(163) + uz(164))
    })
  },
  36413: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => lz,
      c: () => Ez,
      f: () => pz,
      j: () => dz,
      l: () => iz,
      n: () => Hz,
      p: () => Fz,
      s: () => tz,
      u: () => Oz,
      w: () => Mz
    });
    const Ez = 9,
      nz = [9];

    function iz(zz) {
      return nz.includes(zz)
    }
    const lz = 100,
      Mz = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips"],
      tz = ["skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride"],
      Hz = ["itemName", "amount", "position", "size", "attributes"],
      Oz = ["opacity", "zIndex", "overlayColour", "canSee", "meshScaling", "nameTagInfo", "multilineTextBox", "hasPriorityNametag", "ranks", "nameColour", "_isAlive", "_invisibleEffect", "_invincible", "killfeedColour", "hideNameSeed", "_glowingEffect", "lockHeadToBody"],
      pz = ["type", "name", "position", "rotation", "scale", "speed", "jumping", "crouching", "cameraPitch", "armSwinging", "heldItemName", "heldItemEnchantmentTier", "pose", "followingEId", "followingOffset", "shouldMatchFollowingEntityRotation", "meshOffset", "baseRenderHeading", "armour", "nG", "playerCustomisations", "variation", "metaInfo", "soundName", "volume", "refDistance", "maxHearDist", "rate", "ridingVehicleEId", "leaderboardTop", "meshKind", "meshOpts", "aiState"],
      dz = ["selectedSlotIndex", "slots"],
      Fz = ["_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"]
  },
  36405: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => pz,
      g: () => Zz,
      h: () => tz,
      i: () => lz,
      m: () => Mz,
      o: () => Hz
    });
    var Ez = bz(328),
      nz = bz(22);

    function iz(zz) {
      return null === zz || void 0 === zz ? null : "string" === typeof zz ? zz : null
    }

    function lz(zz, uz) {
      return JSON.stringify(zz) === JSON.stringify(uz)
    }

    function Mz(zz) {
      const uz = [];
      for (const bz of Object.keys(zz)) {
        const Ez = zz[bz];
        for (const zz of Object.keys(Ez)) uz.push({
          tu: bz,
          name: zz,
          ...Ez[zz]
        })
      }
      return uz
    }

    function tz(zz) {
      const uz = {};
      for (const iz of zz) {
        var bz, Ez, nz;
        uz[iz.tu] || (uz[iz.tu] = {}), uz[iz.tu][iz.name] = {
          icon: iz.icon,
          level: iz.level,
          displayName: null !== (bz = iz.displayName) && void 0 !== bz ? bz : null,
          endTick: null !== (Ez = iz.endTick) && void 0 !== Ez ? Ez : null,
          showInNametag: null === (nz = iz.showInNametag) || void 0 === nz || nz
        }
      }
      return uz
    }

    function Hz(zz, uz) {
      const bz = {};
      for (const nz of Object.keys(zz)) {
        const iz = {};
        for (const bz of Object.keys(zz[nz])) {
          const Ez = zz[nz][bz];
          null !== Ez.endTick && Ez.endTick < uz || (iz[bz] = {
            ...Ez,
            endTick: null === Ez.endTick ? null : Ez.endTick - uz
          })
        }(0, Ez.zc)(iz) || (bz[nz] = iz)
      }
      return bz
    }

    function Oz(zz, uz, bz) {
      if (null !== zz) return Math.max(0, 1e3 * (zz - uz) / bz)
    }
    class pz {
      constructor() {
        this.tracked = {}
      }
      clear() {
        this.tracked = {}
      }
      seedFromClient(zz, uz) {
        this.clear();
        const bz = Date.now();
        for (const Mz of zz.iterateEntityIds()) {
          const tz = zz.getEffects(Mz);
          if ((0, Ez.zc)(tz)) continue;
          const Hz = uz(Mz);
          for (const zz of Object.keys(tz)) {
            var nz, lz;
            const uz = tz[zz];
            this.upsert(Hz, zz, {
              icon: uz.icon,
              level: uz.level,
              displayName: iz(uz.displayName),
              showInNametag: null === (nz = uz.showInNametag) || void 0 === nz || nz,
              endTime: void 0 !== uz.duration && null !== uz.duration ? (null !== (lz = uz.appliedAt) && void 0 !== lz ? lz : bz) + uz.duration : null
            })
          }
        }
      }
      upsert(zz, uz, bz) {
        this.tracked[zz] || (this.tracked[zz] = {}), this.tracked[zz][uz] = bz
      }
      remove(zz, uz) {
        const bz = this.tracked[zz];
        bz && (delete bz[uz], (0, Ez.zc)(bz) && delete this.tracked[zz])
      }
      handleUpdate(zz) {
        var uz;
        0 !== zz.duration ? this.upsert(zz.tu, zz.name, {
          icon: zz.icon,
          level: zz.level,
          displayName: iz(zz.displayName),
          showInNametag: null === (uz = zz.showInNametag) || void 0 === uz || uz,
          endTime: void 0 !== zz.duration && null !== zz.duration ? Date.now() + zz.duration : null
        }) : this.remove(zz.tu, zz.name)
      }
      handleRemove(zz, uz) {
        this.remove(zz, uz)
      }
      sample(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
        const nz = {},
          iz = 1e3 / uz;
        for (const lz of Object.keys(this.tracked)) {
          const uz = this.tracked[lz],
            Mz = {};
          for (const Ez of Object.keys(uz)) {
            const nz = uz[Ez];
            let tz = null;
            if (null !== nz.endTime) {
              const uz = Math.max(0, nz.endTime - bz);
              if (0 === uz) {
                this.remove(lz, Ez);
                continue
              }
              tz = zz + Math.ceil(uz / iz)
            }
            Mz[Ez] = {
              icon: nz.icon,
              level: nz.level,
              displayName: nz.displayName,
              endTick: tz,
              showInNametag: nz.showInNametag
            }
          }(0, Ez.zc)(Mz) || (nz[lz] = Mz)
        }
        return nz
      }
    }

    function dz(zz, uz, bz, Ez) {
      zz.hasEntity(uz) ? zz.updateEffect(uz, bz, Ez) : function(zz, uz, bz) {
        nz.k.sK("EffectUpdate", {
          tu: zz,
          name: uz,
          ...bz
        }, !0)
      }(uz, bz, Ez)
    }

    function Fz(zz, uz, bz) {
      zz.hasEntity(uz) ? zz.removeEffect(uz, bz) : function(zz, uz) {
        nz.k.sK("RemoveEffect", {
          tu: zz,
          name: uz
        }, !0)
      }(uz, bz)
    }

    function Zz(zz, uz, bz, Ez, nz, iz, lz) {
      for (const Oz of Object.keys(bz))
        for (const iz of Object.keys(bz[Oz])) {
          var Mz;
          null !== (Mz = uz[Oz]) && void 0 !== Mz && Mz[iz] || (Fz(zz, Oz, iz), Ez && Oz === Ez && String(nz) !== String(Oz) && Fz(zz, nz, iz))
        }
      for (const Rz of Object.keys(uz))
        for (const Mz of Object.keys(uz[Rz])) {
          var tz, Hz;
          const Kz = uz[Rz][Mz],
            wz = Oz(Kz.endTick, iz, lz);
          if (0 === wz) {
            Fz(zz, Rz, Mz), Ez && Rz === Ez && String(nz) !== String(Rz) && Fz(zz, nz, Mz);
            continue
          }
          const Xz = null === (tz = bz[Rz]) || void 0 === tz ? void 0 : tz[Mz],
            fz = Xz && (Zz = Kz, (pz = Xz).icon === Zz.icon && pz.level === Zz.level && pz.displayName === Zz.displayName && pz.endTick === Zz.endTick && pz.showInNametag === Zz.showInNametag),
            sz = {
              icon: Kz.icon,
              level: Kz.level,
              displayName: null !== (Hz = Kz.displayName) && void 0 !== Hz ? Hz : void 0,
              duration: wz,
              showInNametag: Kz.showInNametag
            };
          fz || dz(zz, Rz, Mz, sz), Ez && Rz === Ez && dz(zz, nz, Mz, {
            ...sz,
            showInNametag: !1
          })
        }
      var pz, Zz
    }
  },
  36392: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Hz,
      e: () => tz,
      f: () => pz,
      j: () => lz,
      k: () => Oz
    });
    var Ez = bz(36386),
      nz = bz(36395);
    const iz = {
      description: "Bloxd Replay",
      accept: {
        [Ez.d]: Ez.c
      }
    };

    function lz() {
      return "function" === typeof window.showOpenFilePicker && "function" === typeof window.showSaveFilePicker
    }

    function Mz(zz) {
      return zz instanceof DOMException && "AbortError" === zz.name
    }
    async function tz() {
      try {
        const [zz] = await window.showOpenFilePicker({
          multiple: !1,
          types: [iz]
        }), uz = await zz.getFile();
        return {
          handle: zz,
          bytes: new Uint8Array(await uz.arrayBuffer())
        }
      } catch (zz) {
        if (Mz(zz)) return null;
        throw zz
      }
    }
    async function Hz(zz) {
      if (zz && await async function(zz) {
          const uz = {
            mode: "readwrite"
          };
          return "granted" === await zz.queryPermission(uz) || "granted" === await zz.requestPermission(uz)
        }(zz)) return zz;
      try {
        return await window.showSaveFilePicker({
          suggestedName: (0, Ez.j)(),
          types: [iz]
        })
      } catch (uz) {
        if (Mz(uz)) return null;
        throw uz
      }
    }
    async function Oz(zz, uz) {
      const bz = await zz.createWritable();
      await bz.write(new Blob([uz], {
        type: Ez.d
      })), await bz.close()
    }

    function pz(zz) {
      return (0, Ez.h)((0, nz.f)(zz))
    }
  },
  35936: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => pz
    });
    var Ez = bz(20),
      nz = bz(96),
      iz = bz(33),
      lz = bz(677),
      Mz = bz(3198),
      tz = bz(6382);
    const Hz = "shaderPackListingCheckedAt",
      Oz = 36e5;

    function pz() {
      const {
        canUseShaderPacks: zz
      } = nz.featureFlags.settings;
      var uz, pz;
      (0, Mz.h)(zz) && !(0, Mz.e)(zz) && (uz = iz.g.getItem(Hz), pz = Date.now(), "number" !== typeof uz || pz < uz || pz - uz >= Oz) && (0, lz.e)((() => {
        (async function() {
          if ("landingPage" !== Ez.e.get("gameState")) return;
          const zz = await (0, tz.e)();
          if (void 0 === (null === zz || void 0 === zz ? void 0 : zz.listing)) return;
          iz.g.setItem(Hz, Date.now());
          const {
            followListingUpdates: uz
          } = await Promise.all([bz.e(74), bz.e(131), bz.e(123)]).then((() => bz(40506)));
          await uz(zz, zz.listing) || iz.g.removeItem(Hz)
        })().catch((zz => {
          console.error("Failed to check the shader pack listing for an update", zz)
        }))
      }))
    }
  },
  35965: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => tz
    });
    var Ez = bz(316),
      nz = bz(20),
      iz = bz(35970),
      lz = bz(1595),
      Mz = bz(1923);

    function tz(zz, uz) {
      var bz, tz, Hz;
      if (!nz.e.get("isKeydownEnabled") || zz.repeat) return;
      const Oz = zz.code;
      "Escape" === zz.key ? (0, lz.d)(zz) : null !== (bz = Mz.s.OpenSettings) && void 0 !== bz && bz.includes(Oz) ? (0, lz.t)(zz, Ez.r.SETTINGS) : null !== (tz = Mz.s.OpenCharacterCustomization) && void 0 !== tz && tz.includes(Oz) ? (0, iz.d)() || (0, lz.t)(zz, Ez.r.CUSTOMISATION, uz()) : null !== (Hz = Mz.s.ShowDebugOverlay) && void 0 !== Hz && Hz.includes(Oz) && nz.e.set({
        showDebugOverlay: !nz.e.get("showDebugOverlay")
      })
    }
  },
  35939: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Lz
    });
    var Ez = bz(588),
      nz = bz(1219),
      iz = bz(158);
    const lz = "cf-";

    function Mz(zz) {
      return `${lz}${zz}`
    }

    function tz(zz) {
      return zz.startsWith(Mz("game-server-"))
    }

    function Hz(zz) {
      return /^game-server-[a-z0-9-]+\.bloxd\.io$/i.test(zz)
    }
    var Oz = bz(1232),
      pz = bz(1212),
      dz = bz(22),
      Fz = bz(1723),
      Zz = bz(1748),
      Rz = bz(2737),
      Kz = bz(1283),
      wz = bz(1296),
      Xz = bz(1473),
      fz = bz(1195),
      sz = bz(35945),
      rz = bz(33),
      oz = bz(128),
      Nz = bz(1768);
    const vz = Date.UTC(2026, 10, 25),
      xz = 1728e5,
      Jz = "gameServerRoute";
    async function Az(zz) {
      if (!zz.ok) {
        const uz = await zz.text().catch((() => ""));
        return 403 === zz.status && "ipv6_unsupported" === uz ? "ipv6Refused" : "other"
      }
      const uz = await zz.json().catch((() => null));
      return "object" === typeof uz && null !== uz && Number.isFinite(uz.version) ? "ours" : "other"
    }
    const Tz = new class {
      constructor(zz) {
        this.deps = zz
      }
      hostFor(zz) {
        return this.deps.enabled && Hz(zz) && "cloudflare" === this.heldRoute() ? Mz(zz) : zz
      }
      async afterJoinFailed(zz, uz) {
        var bz;
        if (!this.deps.enabled || void 0 === uz) return !1;
        const Ez = new URL(zz).hostname,
          nz = this.stored();
        if (tz(Ez)) {
          var iz;
          if (this.deps.xZ("game_server_route", "cf_join_failed", 0), "cloudflare" !== (null === nz || void 0 === nz ? void 0 : nz.route) || nz.aliasFailedOnce || "ours" !== (await this.probeHost(Ez)).answer) this.store({
            arm: null !== (iz = null === nz || void 0 === nz ? void 0 : nz.arm) && void 0 !== iz ? iz : "cloudflare",
            route: "direct",
            until: this.deps.now() + 36e5
          });
          else this.store({
            ...nz,
            aliasFailedOnce: !0
          });
          return !1
        }
        if (!Hz(Ez) || "direct" === this.heldRoute()) return !1;
        const {
          outcome: lz,
          cfMs: Mz
        } = await this.check(Ez);
        if ("blocked" !== lz) return this.deps.xZ("game_server_route", lz, Mz), !1;
        const Oz = this.deps.now() >= vz ? "cloudflare" : null !== (bz = null === nz || void 0 === nz ? void 0 : nz.arm) && void 0 !== bz ? bz : 100 * this.deps.random() < 20 ? "holdout" : "cloudflare";
        return "holdout" === Oz ? (this.store({
          arm: Oz,
          route: "direct",
          until: Math.min(this.deps.now() + xz, vz)
        }), this.deps.xZ("game_server_route", "blocked_holdout", Mz), !1) : (this.store({
          arm: Oz,
          route: "cloudflare",
          until: this.deps.now() + xz
        }), this.deps.xZ("game_server_route", "blocked", Mz), !0)
      }
      afterJoined(zz) {
        if (!this.deps.enabled) return;
        const uz = new URL(zz).hostname,
          bz = tz(uz);
        if (bz) this.deps.xZ("game_server_route", "cf_join", 0);
        else if (!Hz(uz) || this.deps.random() >= .01) return;
        const Ez = bz ? uz.slice(lz.length) : uz;
        this.deps.delay(2e4).then((async () => {
          await this.reportRtt(Ez, "direct", "direct_failed"), await this.reportRtt(Mz(Ez), "cf", "cf_failed")
        }))
      }
      async check(zz) {
        const uz = this.probeHost(Mz(zz));
        if ("none" !== (await this.probeHost(zz)).answer) return {
          outcome: "direct_reachable",
          cfMs: 0
        };
        const {
          answer: bz,
          ms: Ez
        } = await uz;
        return "ours" !== bz && "ipv6Refused" !== bz ? {
          outcome: "cf_unreachable",
          cfMs: 0
        } : "none" !== (await this.probeHost(zz)).answer ? {
          outcome: "direct_reachable",
          cfMs: Ez
        } : {
          outcome: "ipv6Refused" === bz ? "blocked_ipv6" : "blocked",
          cfMs: Ez
        }
      }
      async reportRtt(zz, uz, bz) {
        const Ez = "ours" === (await this.probeHost(zz)).answer ? await this.probeHost(zz) : null;
        "ours" === (null === Ez || void 0 === Ez ? void 0 : Ez.answer) ? this.deps.xZ("game_server_rtt", uz, Ez.ms): this.deps.xZ("game_server_rtt", bz, 0)
      }
      probeHost(zz) {
        return this.deps.probe(`https://${zz}/version`, 8e3)
      }
      stored() {
        return function(zz) {
          if ("object" !== typeof zz || null === zz) return null;
          const {
            arm: uz,
            route: bz,
            until: Ez,
            aliasFailedOnce: nz
          } = zz;
          return "cloudflare" !== uz && "holdout" !== uz || "cloudflare" !== bz && "direct" !== bz || "number" !== typeof Ez ? null : !0 === nz ? {
            arm: uz,
            route: bz,
            until: Ez,
            aliasFailedOnce: nz
          } : {
            arm: uz,
            route: bz,
            until: Ez
          }
        }(this.deps.storage.getItem(Jz))
      }
      heldRoute() {
        const zz = this.stored();
        return null !== zz && zz.until > this.deps.now() ? zz.route : null
      }
      store(zz) {
        this.deps.storage.setItem(Jz, zz)
      }
    }({
      storage: rz.g,
      probe: async function(zz, uz) {
        const bz = performance.now(),
          Ez = await (0, Nz.k)(zz, {
            cache: "no-store"
          }, uz, (async zz => {
            const uz = Math.round(performance.now() - bz);
            return {
              answer: await Az(zz),
              ms: uz
            }
          }));
        return null !== Ez && void 0 !== Ez ? Ez : {
          answer: "none",
          ms: 0
        }
      },
      xZ: Fz.r,
      enabled: !(0, oz.d)(),
      now: Date.now,
      random: Math.random,
      delay: zz => new Promise((uz => {
        setTimeout(uz, zz)
      }))
    });

    function Lz(zz) {
      return async (uz, bz, lz, Mz, Hz) => {
        let pz;
        if ((0, Ez.F)(lz)) {
          if (Hz.aborted) return Pz();
          const zz = await Gz(uz, bz, Mz);
          if (Hz.aborted || Rz.g.matchmakingEnded(zz.isError() ? null : performance.now()), zz.isError()) {
            const uz = zz.asError();
            return console.log("Join room did not succeed, reason:", uz.message), uz.forward()
          }
          pz = zz.getValue()
        } else {
          Rz.g.skipPlayWait();
          const zz = az(lz.replace("https://", "").replace("http://", ""));
          if (zz.isError()) return zz.asError().forward();
          pz = {
            endpoint: zz.getValue(),
            gameNameWithVariation: bz,
            lobbyName: uz instanceof nz.h ? uz.getLobbyName() : uz
          }
        }
        if (Hz.aborted) return Pz();
        console.log(`Connecting to ${pz.gameNameWithVariation} in lobby ${pz.lobbyName} on game server ${pz.endpoint}`), dz.k.sK("matchmakeAndPlayStepCompleted", {
          step: iz.k.REQUEST_TO_MATCHMAKING,
          totalSubSteps: 1
        }), (0, Fz.i)(), Zz.e.markGameLoadStart(), (0, wz.o)({
          websocketUrl: pz.endpoint,
          gameNameWithVariation: pz.gameNameWithVariation,
          lobbyName: pz.lobbyName
        }), dz.k.sK("loadingScreenState", "loadingPage:loadingGame");
        const Xz = async () => {
          const zz = await async function(zz, uz, bz, Ez) {
            const nz = await Gz(zz, uz, bz);
            if (!nz.isError() && !Ez.aborted) {
              const {
                endpoint: zz,
                gameNameWithVariation: uz,
                lobbyName: bz
              } = nz.getValue();
              (0, wz.o)({
                websocketUrl: zz,
                gameNameWithVariation: uz,
                lobbyName: bz
              })
            }
            return nz
          }(uz, bz, Mz, Hz);
          return zz.isError() || (pz = zz.getValue()), zz
        }, fz = !(0, Ez.F)(lz), sz = () => zz({
          place: pz,
          userContext: Mz,
          direct: fz,
          rematch: Xz
        }, Hz);
        let rz = await sz();
        const oz = rz.isError() && !0 === rz.asError().debugResult.rematch;
        if (rz.isError() && !fz && !Hz.aborted && (oz || await Tz.afterJoinFailed(pz.endpoint, rz.asError().debugResult.gameServerUnreachable))) {
          if (Hz.aborted) return Pz();
          console.log("Matchmaking again");
          const zz = await Xz();
          if (zz.isError()) return zz.asError().forward();
          if (Hz.aborted) return Pz();
          rz = await sz(), !rz.isError() || oz && !tz(new URL(pz.endpoint).hostname) || await Tz.afterJoinFailed(pz.endpoint, rz.asError().debugResult.gameServerUnreachable)
        }
        return rz.isError() ? rz.asError().forward() : (Tz.afterJoined(pz.endpoint), (0, Kz.L)(), window.gtag ? window.gtag("event", "conversion", {
          send_to: "AW-16469618203/ipUBCJKWoJUZEJvcqa09"
        }) : console.error("window.gtag not defined"), Oz.b.value({
          gameNameWithVariation: pz.gameNameWithVariation,
          lobbyName: pz.lobbyName,
          addLobbyToRecentlyPlayed: !(uz instanceof nz.h)
        }))
      }
    }

    function Pz() {
      return Oz.b.errorWithCode("Left the game while it loaded", iz.k.REQUEST_TO_MATCHMAKING, {
        severity: "low",
        ob: !0
      })
    }
    async function Gz(zz, uz, bz) {
      return (0, Ez.F)(zz) || zz instanceof nz.h || !(zz.length > pz.Q) ? await Xz.c.matchmakePlayer(bz, zz, uz, (0, sz.b)()).then((zz => {
        if (!1 === zz.succeeded) return Oz.b.errorWithCode(zz.failReason, iz.k.REQUEST_TO_MATCHMAKING, {
          severity: "low"
        });
        const {
          gameServerHost: uz,
          lobbyName: bz,
          gameNameWithVariation: Ez
        } = zz, nz = az(Tz.hostFor(uz));
        return nz.isError() ? nz.asError().forward() : Oz.b.value({
          endpoint: nz.getValue(),
          gameNameWithVariation: Ez,
          lobbyName: bz
        })
      })).catch((zz => (console.error("Bad response from the matchmaking server:", zz), Oz.b.errorWithCode(zz.toString(), iz.k.REQUEST_TO_MATCHMAKING, {
        error: zz,
        severity: "medium"
      })))) : (console.error("Invalid lobby ID:", zz), Oz.b.errorWithCode("This lobby link's name is too long. Ask for a new link.", iz.k.REQUEST_TO_MATCHMAKING, {
        severity: "low"
      }))
    }

    function az(zz) {
      const uz = fz.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(zz);
      return uz.isError() ? Oz.b.errorWithCode(uz.asError().message, iz.k.CONNECT_TO_GAME_SERVER, {
        severity: "medium"
      }) : Oz.b.value(uz.getValue())
    }
    setTimeout((() => {
      window.initialD ? Date.now = window.initialD : console.error("window.initialD not defined")
    }), 3e3), window.leaveGame = () => {
      (0, wz.k)("/")
    }
  },
  8896: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Fz,
      e: () => dz
    });
    var Ez = bz(20),
      nz = bz(1638),
      iz = bz(33),
      lz = bz(1322),
      Mz = bz(3409),
      tz = bz(1448),
      Hz = bz(1362);
    const Oz = 2592e5,
      pz = "notificationOptInLastPromptedAt";
    async function dz() {
      var zz;
      const uz = await Fz();
      if (null === uz) return;
      const bz = null !== (zz = iz.g.getItem(pz)) && void 0 !== zz ? zz : 0;
      if (Date.now() - bz < Oz) return;
      if ((0, Hz.f)()) return;
      const Ez = await lz.NotificationProvider.showPromptPopup({
        icon: "bell",
        title: "mobilePushNotifications:optInTitle",
        subtitle: nz.d.supports("notifications") ? "mobilePushNotifications:optInSubtitle" : "mobilePushNotifications:optInSubtitleBrowser",
        confirmText: "mobilePushNotifications:optInConfirm",
        cancelText: "mobilePushNotifications:optInCancel",
        padStartsOn: "cancel"
      }).getResult();
      "notificationTornDown" !== Ez && (iz.g.setItem(pz, Date.now()), (0, tz.reportAnalyticsClick)({
        id: !0 === Ez ? "push.allow" : "push.deny",
        value: nz.d.supports("notifications") ? "app" : "browser"
      }), !0 === Ez && uz().catch((zz => {
        console.error("Failed to ask for push notifications:", zz)
      })))
    }
    async function Fz() {
      return await nz.d.ready, nz.d.supports("notifications") ? Ez.e.get("mobilePushNotificationsCanAsk") ? async () => {
        nz.d.request("notifications.requestPermission", {}).then((zz => {
          let {
            canAsk: uz
          } = zz;
          Ez.e.set({
            mobilePushNotificationsCanAsk: uz
          })
        }), (zz => {
          console.error("The app couldn't ask for push notifications:", zz)
        }))
      }: null: await Mz.c.canAsk() ? () => Mz.c.requestPermission() : null
    }
  },
  35952: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => dz,
      c: () => Oz,
      g: () => Fz,
      j: () => pz
    });
    var Ez = bz(328),
      nz = bz(621),
      iz = bz(633),
      lz = bz(33);
    const Mz = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      tz = "playSessionGameNameWithVariation",
      Hz = "wasMatchmakePlayer";

    function Oz() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lz.h;
      (0, iz.j)(zz, Mz)
    }

    function pz() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lz.h).setItem(Hz, !0)
    }

    function dz() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lz.h;
      return (0, iz.d)(zz, Mz)
    }

    function Fz(zz) {
      let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : lz.h;
      const bz = (0, iz.d)(uz, Mz),
        Oz = function(zz) {
          const uz = zz.getItem(tz);
          return "string" !== typeof uz ? null : uz
        }(uz),
        pz = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lz.h).getItem(Hz)
        }(uz);
      let dz;
      return dz = null !== bz && null !== Oz && (0, iz.g)(uz, Mz) && function(zz, uz, bz) {
          const nz = (0, Ez.Sb)(zz),
            iz = (0, Ez.Sb)(uz),
            lz = (0, Ez.Nb)(zz),
            Mz = (0, Ez.Nb)(uz);
          return !(nz !== iz || !bz) || nz === iz && lz === Mz
        }(Oz, zz, pz) ? bz : (0, nz.d)(), (0, iz.n)(uz, Mz, dz), uz.setItem(tz, zz),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lz.h).removeItem(Hz)
        }(uz), dz
    }
  },
  35945: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Xz,
      e: () => fz
    });
    var Ez = bz(994),
      nz = bz(597),
      iz = bz(328),
      lz = bz(1e3),
      Mz = bz(606),
      tz = bz(646),
      Hz = bz(4286),
      Oz = bz(96),
      pz = bz(128),
      dz = bz(1673),
      Fz = bz(111),
      Zz = bz(35952),
      Rz = bz(33),
      Kz = bz(627),
      wz = bz(35954);

    function Xz() {
      var zz, uz;
      return [...null !== (zz = navigator.languages) && void 0 !== zz ? zz : [null !== (uz = navigator.language) && void 0 !== uz ? uz : "none"], "en-Gb"]
    }

    function fz(zz, uz, bz, fz, sz) {
      const rz = (0, Ez.k)(uz) ? (0, Ez.q)(uz) : null,
        oz = {
          cookies: (0, dz.getAllCookiesForGameNameWithVariation)(uz),
          isMobile: (0, Oz.isMobile)(),
          isUsingCustomGameTexturePack: null !== rz && sz(rz),
          generalCookies: {
            joinDiscord: !!Rz.g.getItem("DiscordPressed"),
            newGo: Hz.b,
            ...zz.getMetricsCookies(),
            trafficCode: fz,
            compliance: Oz.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, Oz.getBrowserName)(),
            version: (0, Oz.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, Oz.getPlatformType)(),
            deviceType: (0, Fz.e)()
          },
          isLoggedIn: zz.isLoggedIn(),
          lobbyName: bz,
          languages: Xz(),
          version: nz.c,
          siteUsed: pz.x,
          subsiteUsed: pz.E,
          playSessionId: (0, Zz.g)(uz),
          visitSessionId: (0, Kz.d)(),
          clientReason: Mz.o.reason,
          budgetBasis: (0, wz.f)(),
          ...null !== tz.q && {
            diagClaim: tz.q.claimId
          }
        };
      return null !== rz && (0, iz.Fc)(rz) ? (oz.lobbyName = (0, Ez.g)(rz, (0, Ez.m)(uz), bz), {
        roomName: `classic_${lz.e}`,
        joinOptions: oz
      }) : {
        roomName: uz,
        joinOptions: oz
      }
    }
  },
  36046: (zz, uz, bz) => {
    function Ez(zz, uz) {
      for (let bz = 0; bz < zz.length; bz++)
        if (zz[bz].identifier === uz) return zz[bz];
      return null
    }

    function nz(zz, uz) {
      return null !== Ez(zz, uz)
    }
    bz.d(uz, {
      b: () => Ez,
      d: () => nz
    })
  },
  36319: (zz, uz, bz) => {
    bz.d(uz, {
      A: () => Vz,
      C: () => Uz,
      b: () => tz,
      e: () => Tz,
      h: () => Mz,
      i: () => az,
      l: () => Jz,
      o: () => oz,
      r: () => Gz,
      s: () => Pz,
      t: () => xz,
      v: () => mz,
      w: () => qz,
      y: () => hz
    });
    var Ez = bz(33);
    const nz = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      iz = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      lz = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      Mz = iz.filter((zz => "docsButton" !== zz)),
      tz = lz.filter((zz => "aiHelperButton" !== zz)),
      Hz = "codeEditorTutorials",
      Oz = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      pz = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let dz = null,
      Fz = null;
    const Zz = new Set,
      Rz = new Set;
    let Kz = null;
    const wz = new Set,
      Xz = new Set;

    function fz() {
      Xz.forEach((zz => {
        zz()
      }))
    }

    function sz() {
      if (!dz) {
        const zz = Ez.g.getItem(Hz);
        dz = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof zz && null !== zz ? zz : {}
        }
      }
      return dz
    }

    function rz(zz) {
      const uz = sz();
      uz[zz] || (dz = {
        ...uz,
        [zz]: !0
      }, Ez.g.setItem(Hz, dz))
    }

    function oz(zz) {
      return "docsOverview" === zz ? iz : "aiHelperOverview" === zz ? lz : Fz ? nz[Fz] : []
    }

    function Nz(zz) {
      return ("worldCodeButton" !== zz || !sz().worldCodeIntroShown) && !wz.has(zz)
    }

    function vz(zz) {
      var uz;
      return (null === (uz = Kz) || void 0 === uz ? void 0 : uz.name) === zz ? Kz.stepsDone : Zz
    }

    function xz(zz, uz) {
      if (! function(zz) {
          return Kz ? Kz.name === zz : "welcome" === zz
        }(zz) || !Nz(uz) || vz(zz).has(uz)) return !1;
      if (Kz) return !0;
      const bz = Oz[uz];
      return bz ? !sz()[bz] || Rz.has(uz) : !sz()[pz[zz]]
    }

    function Jz(zz) {
      var uz;
      return null !== (uz = oz(zz).find((uz => xz(zz, uz)))) && void 0 !== uz ? uz : null
    }

    function Az(zz) {
      var uz;
      rz(pz[zz]), (null === (uz = Kz) || void 0 === uz ? void 0 : uz.name) === zz && (Kz = null)
    }

    function Tz(zz) {
      const uz = (Kz ? [Kz.name] : ["welcome", "docsOverview"]).find((uz => Jz(uz) === zz));
      if (!uz) return;
      vz(uz).add(zz);
      const bz = Oz[zz];
      bz && (rz(bz), Kz || Rz.add(zz)), null === Jz(uz) && Az(uz), fz()
    }

    function Lz(zz, uz) {
      const bz = oz(zz),
        Ez = vz(zz);
      for (let nz = bz.indexOf(uz) - 1; nz >= 0; nz--)
        if (Ez.has(bz[nz]) && Nz(bz[nz])) return bz[nz];
      return null
    }

    function Pz(zz, uz) {
      return null !== Lz(zz, uz)
    }

    function Gz(zz, uz) {
      const bz = Lz(zz, uz);
      bz && (vz(zz).delete(bz), fz())
    }

    function az(zz) {
      Az(zz), "welcome" === zz && oz("welcome").forEach((zz => {
        const uz = Oz[zz];
        uz && rz(uz)
      })), fz()
    }

    function Vz(zz) {
      Kz = {
        name: zz,
        stepsDone: new Set
      }, fz()
    }

    function mz() {
      (Kz || 0 !== Zz.size || 0 !== Rz.size) && (Kz = null, Zz.clear(), Rz.clear(), fz())
    }

    function qz(zz, uz) {
      const bz = uz ? zz : Fz === zz ? null : Fz;
      bz !== Fz && (Fz = bz, fz())
    }

    function hz(zz, uz) {
      wz.has(zz) === uz && (uz ? wz.delete(zz) : wz.add(zz), fz())
    }

    function Uz(zz) {
      return Xz.add(zz), () => {
        Xz.delete(zz)
      }
    }
  },
  35959: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Ez,
      i: () => nz,
      j: () => iz
    });
    const Ez = 1024,
      nz = 1024 * Ez;

    function iz(zz) {
      return (zz / nz).toFixed(1)
    }
  },
  35956: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => iz,
      g: () => Mz,
      j: () => lz,
      l: () => tz,
      p: () => Hz
    });
    var Ez = bz(195);
    const nz = 32 * bz(35959).i,
      iz = 6144,
      lz = 4608,
      Mz = 512;

    function tz(zz) {
      return Math.floor(nz * zz / iz)
    }

    function Hz(zz) {
      const uz = zz - Math.floor(zz / 6);
      let bz = Ez.e.maxChunkHorizAddDistance,
        nz = Ez.e.maxChunkVertAddDistance;
      if (Oz(bz + 1, nz + 1) <= uz) return null;
      for (; Oz(bz + 1, nz + 1) > uz && (bz > 0 || nz > 0);) bz > nz ? bz-- : nz--;
      return {
        horizontal: bz,
        vertical: nz
      }
    }

    function Oz(zz, uz) {
      const bz = Math.max(zz, uz);
      let Ez = 0;
      for (let nz = -bz; nz <= bz; nz++)
        for (let iz = -bz; iz <= bz; iz++)
          for (let lz = -bz; lz <= bz; lz++) pz(zz, uz, nz, iz, lz) && Ez++;
      return Ez
    }

    function pz(zz, uz, bz, Ez, nz) {
      const iz = bz * bz + nz * nz;
      return zz === uz ? iz + Ez * Ez <= zz * zz : zz > uz ? Math.abs(Ez) <= uz && iz + Ez * Ez <= zz * zz : iz <= zz * zz && iz + Ez * Ez <= uz * uz
    }
  },
  35954: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => oz,
      f: () => rz,
      h: () => sz
    });
    var Ez = bz(195),
      nz = bz(96),
      iz = bz(2706),
      lz = bz(4169),
      Mz = bz(615),
      tz = bz(35956);
    const Hz = 1048576,
      Oz = 1024 * Hz,
      pz = 400 * Hz,
      dz = 147456,
      Fz = .5,
      Zz = 1.5 * Oz,
      Rz = 768 * Hz;

    function Kz(zz) {
      return pz + zz * dz
    }

    function wz(zz, uz, bz) {
      var nz, lz;
      let {
        footprintBytes: Mz,
        basis: Hz,
        namesLimit: wz
      } = function(zz) {
        const {
          os: uz,
          deviceMemory: bz
        } = zz;
        if ("ios" === uz) switch ((0, iz.f)(zz)) {
          case "ipad_m":
            return {
              footprintBytes: Kz(tz.c), basis: "ipad-m", namesLimit: !1
            };
          case "ipad":
            return {
              footprintBytes: Rz, basis: "ipad", namesLimit: !0
            };
          case "iphone_6gb":
            return {
              footprintBytes: Zz, basis: "iphone-6gb", namesLimit: !0
            };
          case "iphone":
            return {
              footprintBytes: Rz, basis: "iphone", namesLimit: !0
            }
        }
        return "number" === typeof bz && Number.isFinite(bz) && bz > 0 ? {
          footprintBytes: bz * Oz * Fz,
          basis: `memory-${bz}`,
          namesLimit: !0
        } : "android" === uz ? {
          footprintBytes: Rz,
          basis: "android",
          namesLimit: !0
        } : {
          footprintBytes: Kz(tz.j),
          basis: "unreported",
          namesLimit: !1
        }
      }(zz);
      if (bz) {
        const zz = Math.min(Mz, Kz(tz.c));
        Mz = pz + Math.max(0, zz - pz) / 2, Hz += "+killed", wz = !0
      }
      null !== uz && Kz(uz) < Mz && (Mz = Kz(uz), Hz += "+learned", wz = !0);
      const Xz = function(zz) {
          const uz = Math.floor((zz - pz) / dz);
          return Math.min(tz.c, Math.max(tz.g, uz))
        }(Mz),
        fz = (0, tz.p)(Xz);
      return {
        footprintBytes: Mz,
        shedFootprintBytes: wz ? Math.max(Mz, Kz(Xz)) : null,
        chunkCap: Xz,
        maxHorizDistance: null !== (nz = null === fz || void 0 === fz ? void 0 : fz.horizontal) && void 0 !== nz ? nz : Ez.e.maxChunkHorizAddDistance,
        maxVertDistance: null !== (lz = null === fz || void 0 === fz ? void 0 : fz.vertical) && void 0 !== lz ? lz : Ez.e.maxChunkVertAddDistance,
        basis: Hz
      }
    }
    let Xz = null;

    function fz() {
      return wz({
        os: (0, nz.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, iz.i)()
      }, (0, lz.i)(), (0, Mz.G)("wasm").length > 0)
    }

    function sz() {
      return Xz ??= fz(), Xz
    }

    function rz() {
      var zz;
      return (null !== (zz = Xz) && void 0 !== zz ? zz : fz()).basis
    }

    function oz(zz, uz) {
      return zz.setChunkCap(uz.chunkCap)
    }
  },
  36061: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Oz,
      f: () => dz,
      h: () => wz,
      i: () => Hz
    });
    var Ez = bz(20),
      nz = bz(2289),
      iz = bz(2294),
      lz = bz(2302),
      Mz = bz(2356),
      tz = bz(22);

    function Hz(zz, uz) {
      return (!(0, lz.d)() || 0 === zz && 0 === uz) && (0, iz.r)(nz.f.Joystick, 0, zz, uz, 0)
    }
    const Oz = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function pz(zz) {
      return zz.classList.contains("TouchKeyHit") && Fz() ? null : zz.firstElementChild
    }

    function dz(zz) {
      return zz.classList.contains("TouchKeyHit") && !zz.classList.contains("CanvasZone") ? {
        whole: !Fz(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: Zz(pz(zz))
      }
    }

    function Fz() {
      return document.documentElement.classList.contains(Mz.j)
    }

    function Zz(zz) {
      return !(zz instanceof HTMLElement) || zz.offsetWidth <= 0 || zz.offsetHeight <= 0 ? null : {
        width: zz.offsetWidth,
        height: zz.offsetHeight
      }
    }

    function Rz(zz, uz) {
      const bz = zz => Math.min(65535, Math.round(4 * zz));
      return (bz(zz) | bz(uz) << 16) >>> 0
    }

    function Kz(zz) {
      return {
        x: zz.left + zz.width / 2,
        y: zz.top + zz.height / 2,
        radius: Math.min(zz.width, zz.height) / 2
      }
    }
    const wz = new class {
      constructor(zz) {
        this.write = zz, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        uz ? this.elements.set(zz, {
          element: uz,
          hidden: bz
        }) : this.elements.delete(zz), this.measureOne(zz)
      }
      measure() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = zz.left, this.canvasTop = zz.top;
        for (const uz of this.elements.keys()) this.measureOne(uz)
      }
      hitZone(zz, uz) {
        let bz = null,
          Ez = 1;
        for (const nz of this.elements.keys()) {
          const iz = this.shown(nz);
          if (!iz) continue;
          const {
            rect: lz,
            element: Mz
          } = iz, tz = Kz(lz), Hz = Math.max(0, lz.width / 2 - tz.radius), Oz = Math.max(0, lz.height / 2 - tz.radius), dz = Math.max(0, Math.abs(zz - tz.x) - Hz), Fz = Math.max(0, Math.abs(uz - tz.y) - Oz), Rz = Mz.firstElementChild;
          let wz = Math.hypot(dz, Fz) / tz.radius;
          const Xz = Zz(pz(Mz));
          Xz && (wz = Math.min(wz, Math.max(2 * Math.abs(zz - tz.x) / Xz.width, 2 * Math.abs(uz - tz.y) / Xz.height))), wz < Ez && (bz = {
            code: nz,
            element: Mz,
            key: Rz,
            ...tz
          }, Ez = wz)
        }
        return bz
      }
      measureOne(zz) {
        const uz = this.shown(zz);
        if (!uz) return void this.write(nz.f.TouchZone, zz, 0, 0, 0);
        const {
          rect: bz,
          element: Ez
        } = uz, iz = Kz(bz);
        this.write(nz.f.TouchZone, zz, iz.x - this.canvasLeft, iz.y - this.canvasTop, Rz(bz.width, bz.height));
        const lz = Zz(pz(Ez));
        this.write(nz.f.TouchZone, 256 | zz, 0, 0, lz ? Rz(lz.width, lz.height) : 0)
      }
      shown(zz) {
        const uz = this.elements.get(zz),
          bz = Ez.e.get("worldPanelHud");
        if (!uz || uz.hidden || "none" === bz) return null;
        const nz = uz.element.getBoundingClientRect();
        return nz.width <= 0 || nz.height <= 0 ? null : {
          rect: nz,
          element: uz.element
        }
      }
    }(iz.r);
    (0, tz.o)(Mz.f, (() => {
      wz.measure()
    }))
  },
  36282: (zz, uz, bz) => {
    function Ez(zz) {
      return "fetch" === zz || "timeout" === zz || "integrity" === zz ? "download" : "browser"
    }
    bz.d(uz, {
      e: () => nz,
      i: () => lz,
      l: () => tz,
      m: () => Mz,
      q: () => Ez,
      s: () => iz
    });
    const nz = "https://discord.gg/playbloxd";

    function iz(zz) {
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

    function lz(zz, uz) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: uz ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: zz.code
        },
        discordLink: uz,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function Mz() {
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

    function tz(zz, uz, bz) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: bz ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: zz.reason
        },
        discordLink: null === zz.name,
        confirm: uz ? "general:reconnect" : zz.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  36328: (zz, uz, bz) => {
    function Ez(zz, uz) {
      return null === zz || null === uz ? zz === uz : zz[0] === uz[0] && zz[1] === uz[1] && zz[2] === uz[2]
    }

    function nz(zz) {
      return [zz[0] + .5, zz[1] + .5, zz[2] + .5]
    }
    bz.d(uz, {
      d: () => nz,
      e: () => Ez
    })
  },
  36291: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => tz,
      i: () => Mz
    });
    const Ez = {
        files: {
          "debugLog.ts": "export function debugLog(message: string): void {\n\tconsole.log(`[debug] ${message}`)\n}\n",
          "index.ts": 'import type { PlayerId } from "@bloxd"\nimport { debugLog } from "./debugLog"\n\nonPlayerJoin = (player: PlayerId) => {\n\tapi.log(`Player ${player} joined - Love from Debug Plugin!`)\n}\n\nexport { debugLog }\n'
        },
        dependencies: [],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  debugLog: () => debugLog\n});\nmodule.exports = __toCommonJS(index_exports);\n\n// world-code-plugin:debugLog.ts\nfunction debugLog(message) {\n  console.log(`[debug] ${message}`);\n}\n\n// world-code-plugin:index.ts\nonPlayerJoin = (player) => {\n  api.log(`Player ${player} joined - Love from Debug Plugin!`);\n};\n',
        types: "declare function debugLog(message: string): void;\n\nexport { debugLog };\n"
      },
      nz = {
        files: {
          "index.ts": 'import type { CustomTextStyling, DialogueText, PlayerId, SpeechVoice } from "@bloxd"\nimport { clearTimeout, setTimeout, TimeoutId } from "@plugins/helpers"\n\n/** Long enough to read most lines once they have appeared. */\nconst DEFAULT_DURATION_MS = 6000\n\nexport type DialogueOpts = {\n\t/** Shown above the line, such as a name. */\n\tspeakerName?: string | CustomTextStyling\n\t/** A preset such as "regular" or "gruff", or every synth parameter. Omit for a silent line. */\n\tvoice?: SpeechVoice\n\t/** How long the line stays up, counted from when it starts to appear. Defaults to 6 seconds. */\n\tdurationMs?: number\n}\n\nconst hideTimeouts: Record<PlayerId, TimeoutId> = {}\n\n/**\n * Shows a player a line of dialogue below the crosshair for a while. A new line replaces the one already up.\n * @param playerId - The player to show the line to\n * @param text - The line. `[[Item Name]]` shows the item\'s icon inline\n * @param opts - The speaker\'s name, the voice that reads it out, and how long it stays up\n */\nexport function sayDialogue(playerId: PlayerId, text: DialogueText, opts: DialogueOpts = {}) {\n\tif (hideTimeouts[playerId] !== undefined) {\n\t\tclearTimeout(hideTimeouts[playerId])\n\t\t// Cleared first, so a line said again replays rather than matching the value already set\n\t\tapi.setClientOption(playerId, "dialogue", null)\n\t}\n\tapi.setClientOption(playerId, "dialogue", { line: text, speakerName: opts.speakerName, voice: opts.voice })\n\thideTimeouts[playerId] = setTimeout(\n\t\t() => {\n\t\t\tclearDialogue(playerId)\n\t\t},\n\t\topts.durationMs ?? DEFAULT_DURATION_MS,\n\t\tplayerId,\n\t)\n}\n\n/**\n * Hides the line of dialogue a player is shown.\n * @param playerId - The player shown the line\n */\nexport function clearDialogue(playerId: PlayerId) {\n\tif (hideTimeouts[playerId] === undefined) {\n\t\treturn\n\t}\n\tclearTimeout(hideTimeouts[playerId])\n\tdelete hideTimeouts[playerId]\n\tapi.setClientOption(playerId, "dialogue", null)\n}\n\nonPlayerLeave = (playerId: PlayerId) => {\n\tdelete hideTimeouts[playerId]\n}\n'
        },
        dependencies: ["helpers"],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  clearDialogue: () => clearDialogue,\n  sayDialogue: () => sayDialogue\n});\nmodule.exports = __toCommonJS(index_exports);\nvar import_helpers = require("@plugins/helpers");\nvar DEFAULT_DURATION_MS = 6e3;\nvar hideTimeouts = {};\nfunction sayDialogue(playerId, text, opts = {}) {\n  if (hideTimeouts[playerId] !== void 0) {\n    (0, import_helpers.clearTimeout)(hideTimeouts[playerId]);\n    api.setClientOption(playerId, "dialogue", null);\n  }\n  api.setClientOption(playerId, "dialogue", { line: text, speakerName: opts.speakerName, voice: opts.voice });\n  hideTimeouts[playerId] = (0, import_helpers.setTimeout)(\n    () => {\n      clearDialogue(playerId);\n    },\n    opts.durationMs ?? DEFAULT_DURATION_MS,\n    playerId\n  );\n}\nfunction clearDialogue(playerId) {\n  if (hideTimeouts[playerId] === void 0) {\n    return;\n  }\n  (0, import_helpers.clearTimeout)(hideTimeouts[playerId]);\n  delete hideTimeouts[playerId];\n  api.setClientOption(playerId, "dialogue", null);\n}\nonPlayerLeave = (playerId) => {\n  delete hideTimeouts[playerId];\n};\n',
        types: "import { CustomTextStyling, SpeechVoice, PlayerId, DialogueText } from '@bloxd';\n\ntype DialogueOpts = {\n    /** Shown above the line, such as a name. */\n    speakerName?: string | CustomTextStyling;\n    /** A preset such as \"regular\" or \"gruff\", or every synth parameter. Omit for a silent line. */\n    voice?: SpeechVoice;\n    /** How long the line stays up, counted from when it starts to appear. Defaults to 6 seconds. */\n    durationMs?: number;\n};\n/**\n * Shows a player a line of dialogue below the crosshair for a while. A new line replaces the one already up.\n * @param playerId - The player to show the line to\n * @param text - The line. `[[Item Name]]` shows the item's icon inline\n * @param opts - The speaker's name, the voice that reads it out, and how long it stays up\n */\ndeclare function sayDialogue(playerId: PlayerId, text: DialogueText, opts?: DialogueOpts): void;\n/**\n * Hides the line of dialogue a player is shown.\n * @param playerId - The player shown the line\n */\ndeclare function clearDialogue(playerId: PlayerId): void;\n\nexport { clearDialogue, sayDialogue };\nexport type { DialogueOpts };\n"
      },
      iz = {
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
      lz = {
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
      Mz = {
        debug: {
          name: "debug",
          specifier: "@plugins/debug",
          sourceVfsPath: "/node_modules/@plugins/debug/index.ts",
          typesVfsPath: "/node_modules/@plugins/debug/index.d.ts",
          files: Ez.files,
          dependencies: Ez.dependencies,
          bundledSource: Ez.bundledSource,
          types: Ez.types
        },
        dialogue: {
          name: "dialogue",
          specifier: "@plugins/dialogue",
          sourceVfsPath: "/node_modules/@plugins/dialogue/index.ts",
          typesVfsPath: "/node_modules/@plugins/dialogue/index.d.ts",
          files: nz.files,
          dependencies: nz.dependencies,
          bundledSource: nz.bundledSource,
          types: nz.types
        },
        helpers: {
          name: "helpers",
          specifier: "@plugins/helpers",
          sourceVfsPath: "/node_modules/@plugins/helpers/index.ts",
          typesVfsPath: "/node_modules/@plugins/helpers/index.d.ts",
          files: iz.files,
          dependencies: iz.dependencies,
          bundledSource: iz.bundledSource,
          types: iz.types
        },
        sessionBasedGame: {
          name: "sessionBasedGame",
          specifier: "@plugins/sessionBasedGame",
          sourceVfsPath: "/node_modules/@plugins/sessionBasedGame/index.ts",
          typesVfsPath: "/node_modules/@plugins/sessionBasedGame/index.d.ts",
          files: lz.files,
          dependencies: lz.dependencies,
          bundledSource: lz.bundledSource,
          types: lz.types
        }
      };

    function tz(zz) {
      const uz = [],
        bz = new Set,
        Ez = zz => {
          if (bz.has(zz)) return;
          const nz = Mz[zz];
          if (nz) {
            bz.add(zz);
            for (const zz of nz.dependencies) Ez(zz);
            uz.push(zz)
          }
        };
      for (const nz of zz) Ez(nz);
      return uz
    }
  },
  36294: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => tz,
      f: () => Mz,
      i: () => lz,
      k: () => iz,
      n: () => Hz,
      o: () => Oz,
      r: () => Zz,
      s: () => Fz,
      u: () => dz
    });
    var Ez = bz(1226);
    const nz = ["quickjs", "ses"];

    function iz(zz) {
      return nz.includes(zz)
    }

    function lz(zz) {
      return zz === Ez.i || zz === Ez.m
    }

    function Mz(zz, uz) {
      return zz === Ez.i && uz === Ez.m || zz === Ez.m && uz === Ez.i
    }

    function tz(zz) {
      const uz = Ez.m in zz,
        bz = Ez.i in zz;
      return uz && bz ? null : uz ? Ez.m : bz ? Ez.i : null
    }

    function Hz(zz, uz, bz) {
      const Ez = `${uz}/`;
      return zz.filter((zz => zz.startsWith(Ez))).map((zz => [zz, `${bz}/${zz.slice(Ez.length)}`]))
    }

    function Oz(zz, uz) {
      let bz = 0;
      for (const [Ez, nz] of Object.entries(zz)) Ez !== uz && (bz += nz.length);
      return bz
    }
    const pz = "@plugins/";

    function dz(zz) {
      return `${pz}${zz}`
    }

    function Fz(zz, uz) {
      return `/node_modules/@plugins/${zz}/${uz}`
    }

    function Zz(zz) {
      if (!zz.startsWith(pz)) return null;
      const uz = zz.slice(pz.length);
      return function(zz) {
        return /^[a-zA-Z][a-zA-Z0-9_-]*$/.test(zz)
      }(uz) ? uz : null
    }
  },
  36300: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Mz,
      g: () => nz,
      j: () => lz,
      m: () => tz,
      q: () => iz
    });
    var Ez = bz(36297);
    const nz = 5,
      iz = "[SCHEMATIC]",
      lz = 1024e4;

    function Mz(zz) {
      return zz.endsWith(".bloxdschem") && (0, Ez.t)(zz.slice(0, -11) + ".ts") && zz.length <= 64
    }

    function tz(zz) {
      return Object.fromEntries(Object.keys(zz).map((zz => [zz, iz])))
    }
  },
  36297: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => nz,
      h: () => iz,
      l: () => dz,
      m: () => Mz,
      o: () => tz,
      s: () => Hz,
      t: () => pz,
      v: () => Oz,
      z: () => lz
    });
    var Ez = bz(1226);
    let nz = function(zz) {
        return zz[zz.Join = 0] = "Join", zz[zz.Leave = 1] = "Leave", zz[zz.Push = 2] = "Push", zz[zz.Cursor = 3] = "Cursor", zz[zz.Submit = 4] = "Submit", zz[zz.ReloadAsVariation = 5] = "ReloadAsVariation", zz[zz.CreateFile = 6] = "CreateFile", zz[zz.RenameFile = 7] = "RenameFile", zz[zz.DeleteFile = 8] = "DeleteFile", zz[zz.SetEngine = 9] = "SetEngine", zz[zz.RenameFolder = 10] = "RenameFolder", zz
      }({}),
      iz = function(zz) {
        return zz[zz.Joined = 0] = "Joined", zz[zz.Updates = 1] = "Updates", zz[zz.Presence = 2] = "Presence", zz[zz.RemoteCursor = 3] = "RemoteCursor", zz[zz.ForceClose = 4] = "ForceClose", zz[zz.LobbyFilesChanged = 5] = "LobbyFilesChanged", zz[zz.EngineSettings = 6] = "EngineSettings", zz
      }({});

    function lz(zz) {
      return "lobby" === zz.kind ? `lobby:${zz.path}` : `codeBlock:${zz.pos[0]},${zz.pos[1]},${zz.pos[2]}`
    }

    function Mz(zz) {
      if ("lobby" === zz) return {
        kind: "lobby",
        path: Ez.i
      };
      if (zz.startsWith("lobby:")) {
        const uz = zz.slice(6);
        return pz(uz) ? {
          kind: "lobby",
          path: uz
        } : null
      }
      const uz = zz.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
      return uz ? {
        kind: "codeBlock",
        pos: [parseInt(uz[1]), parseInt(uz[2]), parseInt(uz[3])]
      } : null
    }

    function tz(zz) {
      return zz.endsWith(".d.ts")
    }

    function Hz(zz) {
      return zz.endsWith(".ts") && !tz(zz)
    }
    const Oz = 64;

    function pz(zz) {
      if (!zz || zz !== zz.trim()) return !1;
      if (zz.length > Oz) return !1;
      if (zz.startsWith("/") || zz.includes("\\") || zz.includes("\0")) return !1;
      if (!tz(zz) && !Hz(zz) && ! function(zz) {
          return zz.endsWith(".js") && !zz.endsWith(".min.js") && !zz.endsWith(".bundle.js")
        }(zz)) return !1;
      const uz = zz.split("/");
      for (const bz of uz)
        if ("" === bz || "." === bz || ".." === bz) return !1;
      return !0
    }
    const dz = 14e3
  },
  4605: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => nz,
      h: () => Ez,
      i: () => iz,
      k: () => tz,
      n: () => lz
    });
    const Ez = ["sine", "triangle", "square", "sawtooth"],
      nz = 55,
      iz = {
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

    function lz(zz) {
      return "string" !== typeof zz ? zz : Object.hasOwn(iz, zz) ? iz[zz] : null
    }

    function Mz(zz, uz, bz) {
      return Math.min(bz, Math.max(uz, zz))
    }

    function tz(zz) {
      const uz = Mz(zz.durationMs, 10, 500),
        bz = Mz(zz.attackMs, 0, uz),
        {
          intonation: nz
        } = zz;
      return {
        waveform: Ez.includes(zz.waveform) ? zz.waveform : "sine",
        pitchHz: Mz(zz.pitchHz, 20, 4e3),
        glideSemitones: Mz(zz.glideSemitones, -24, 24),
        durationMs: uz,
        attackMs: bz,
        releaseMs: Mz(zz.releaseMs, 0, uz - bz),
        lowpassHz: null === zz.lowpassHz ? null : Mz(zz.lowpassHz, 20, 2e4),
        volume: Mz(zz.volume, 0, 2),
        intonation: {
          variationSemitones: Mz(nz.variationSemitones, 0, 6),
          declineSemitones: Mz(nz.declineSemitones, 0, 12),
          questionRiseSemitones: Mz(nz.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: Mz(nz.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: Mz(zz.syllableMs, 25, 200)
      }
    }
  },
  9788: zz => {
    zz.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAHklEQVR4nGNY3x/6nxjMQH2Fcyq8/hODaWA11d0IAPvLyX36T0UzAAAAAElFTkSuQmCC"
  },
  18094: zz => {
    zz.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAAC4CAYAAADqkK6nAAAAAXNSR0IArs4c6QAAAuxJREFUeJzt1jFOFHEchuEfxpqeaGusuYDhCpbewMbEwmNYmNBwA0quYLgAtaGF2HuBtVpEWHBNXnBXnqeanUzxT+bNtzMDsOl21nhm8eCnYBvd2c6zxzwFT8N9S7WYmfn0am9mZl6+2H2M87DhLi5/zMzM5/Pvy1u3GrJU5FYt1WJm5svB60c+Ctvo49dvy8urliwVuetL5RuKv7bqG8tSkXt+88afFurN+3czM7P/9sPDnIiNcHZy+Nvv06Pjlc9d9fJrqXxT0bu1VHexUE/Tzfd912JdZ6nIrb1UFop1WSpyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIit3ZUZyeHc3Zy+JBn4T9hqcg9X/fB06Pj337vv/2QH4bNs/x3uvn+72OpyO1cu17MzHx6tTczMy9f7P6L87BlLi5/zMzM5/Pvy1s7lorczop7i5mZLwevH/kobKOPX78tL69aslTkVi3Vkm8sbln1DXXzGUtF7r6lWlo8+CnYRne2Y6mAzfcTBsFAqM32XQcAAAAASUVORK5CYII="
  },
  20022: zz => {
    zz.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJUlEQVR4nGMwsIpkIAYz0FThfyjGymcgVSFMEJtCsBjJCgcgeABOGmAZtndiFgAAAABJRU5ErkJggg=="
  },
  20027: zz => {
    zz.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJ0lEQVR4nGMwsIpkIAYzQBn/kTBWMQYsgtgwA+0UMuBTNIgU4g1wAE6xgffL0CuLAAAAAElFTkSuQmCC"
  },
  20032: zz => {
    zz.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJElEQVR4nGMwsIpkIAYzkKrwPxLGKsZAc4UMaJh8hdQPHoIKAboeZhN3YNlSAAAAAElFTkSuQmCC"
  },
  20041: zz => {
    zz.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMUlEQVR4nGMwsIpkIAYzoAn8R8MM2BSiK/qPrJiQov8wxWQrxMkm2USiPUNS8OANcADc3H37DfNNQQAAAABJRU5ErkJggg=="
  },
  20048: zz => {
    zz.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAKElEQVR4nGMwsIpkIAYzIHH+48AMyApxKfoPU0yRQgZsYkNJIcEABwCQU3/5LLo7QwAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);