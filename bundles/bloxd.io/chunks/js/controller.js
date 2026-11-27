export const id = 34;
export const ids = [34];
export const modules = {
  10143: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => xR,
      g: () => gR,
      k: () => bR
    });
    var yR = GR(66),
      tR = GR(5347),
      uR = GR(1196),
      ZR = GR(1581),
      qR = GR(32),
      iR = GR(4733),
      fR = GR(3180),
      VR = GR(1336),
      KR = GR(3644),
      wR = GR(2134),
      rR = GR(2173),
      eR = GR(1270),
      aR = GR(25),
      LR = GR(1800),
      nR = GR(1163),
      UR = GR.n(nR),
      WR = GR(10149),
      AR = GR(10158),
      CR = GR(10162),
      XR = GR(10042),
      MR = GR(10170),
      BR = GR(4334),
      lR = (GR(10175), GR(1378));
    let pR = null;

    function gR() {
      return null !== pR
    }

    function bR() {
      return "pad" === pR
    }

    function vR() {
      return "inGame" === aR.d.get("gameState") && !(0, LR.o)()
    }

    function OR(RR) {
      return (0, AR.x)(RR, VR.p, AR.g, AR.k, AR.l)
    }
    const xR = (0, yR.memo)((function() {
      const {
        t: RR
      } = (0, eR.A)(), {
        userContext: JR
      } = (0, uR.d)(), [GR, aR] = (0, yR.useState)(null), [nR, gR] = (0, yR.useState)(null), bR = (0, yR.useRef)(null), xR = (0, yR.useCallback)((RR => {
        bR.current = RR, gR(RR)
      }), []), NR = (0, yR.useRef)(0), DR = (0, yR.useRef)(null), HR = (0, yR.useRef)({
        x: 0,
        y: 0
      }), [oR, cR] = (0, yR.useState)(0), PR = (0, yR.useMemo)((() => function(RR) {
        const JR = [];
        for (let yR = 0; yR < VR.p; yR++) {
          var GR;
          JR.push(null !== (GR = RR[yR]) && void 0 !== GR ? GR : null)
        }
        return JR
      }((0, KR.h)(JR.getPlayerCosmetics().emote))), [JR, oR]);
      (0, rR.c)("cosmeticsUpdated", (RR => {
        RR.some((RR => RR.local && "emote" === RR.ft)) && cR((RR => RR + 1))
      }));
      const IR = (0, yR.useRef)(!1),
        mR = (0, yR.useCallback)((function(RR) {
          let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          "pad" === RR && (0, CR.g)(), IR.current = JR, HR.current = {
            x: 0,
            y: 0
          }, xR(null), aR(RR)
        }), [xR]),
        zR = (0, yR.useCallback)((() => {
          aR(null), xR(null), HR.current = {
            x: 0,
            y: 0
          }
        }), [xR]),
        SR = (0, yR.useCallback)((RR => {
          if (Date.now() < NR.current) return;
          const JR = (0, fR.i)(RR),
            GR = !!JR.holdUntilMove,
            yR = GR ? 600 : Math.ceil(1e3 * JR.animation.animation_length / fR.b) + 200;
          NR.current = Date.now() + yR, DR.current = RR, wR.gameBridge.send("playEmote", RR), wR.gameBridge.send("applyTemporaryThirdPerson", GR ? {} : {
            durationMs: yR
          })
        }), []);
      (0, ZR.f)("requestToggleEmoteWheel", (() => {
        null === GR ? vR() && mR("click") : zR()
      })), (0, ZR.f)("requestEmoteWheelHoldOpen", (() => {
        null === GR && vR() && mR((0, WR.b)() ? "hold" : "click")
      })), (0, ZR.f)("requestEmoteWheelPadOpen", (RR => {
        null !== GR || !vR() || (0, XR.e)() || (0, MR.n)() || mR("pad", RR)
      })), (0, ZR.f)("requestEmoteRepeatLast", (() => {
        if (null !== GR || !vR() || (0, XR.e)() || (0, MR.n)()) return;
        const RR = DR.current;
        null !== RR && PR.includes(RR) ? SR(RR) : mR("pad", !0)
      }));
      const jR = () => {
        const RR = bR.current,
          JR = null !== RR ? PR[RR] : null;
        null !== JR && "pad" === GR && Date.now() < NR.current || (zR(), null !== JR && SR(JR))
      };
      (0, ZR.f)("emoteWheelPadAim", (RR => {
        if ("pad" !== GR) return;
        const JR = (0, AR.J)(RR, VR.p, bR.current);
        xR(null !== JR && null !== PR[JR] ? JR : null)
      })), (0, ZR.f)("requestEmoteWheelPadCommit", (RR => {
        "pad" !== GR || RR && IR.current || jR()
      })), (0, ZR.f)("appManagerUpdated|activeInputDevice", (RR => {
        null !== GR && "pad" === GR !== ("gamepad" === RR) && zR()
      })), (0, yR.useLayoutEffect)((() => (pR = GR, (0, iR.w)("emoteWheel", "pad" === GR), qR.n.JK(iR.q), () => {
        pR = null, (0, iR.w)("emoteWheel", !1), qR.n.JK(iR.q)
      })), [GR]), (0, ZR.f)("requestEmoteWheelHoldRelease", (() => {
        "hold" === GR && jR()
      })), (0, ZR.f)("requestEmoteWheelClose", (() => {
        null !== GR && zR()
      })), (0, ZR.f)("appManagerUpdated|gameState", (RR => {
        "inGame" !== RR && zR()
      }));
      const dR = () => {
        (0, LR.o)() && zR()
      };
      if ((0, ZR.f)("appManagerUpdated|openEverythingMenuName", dR), (0, ZR.f)("appManagerUpdated|openInGameMenuName", dR), (0, ZR.f)("pointerLockUpdate", (RR => {
          RR || "hold" !== GR || zR()
        })), (0, yR.useEffect)((() => {
          if (null === GR) return;
          const RR = RR => {
            "Escape" === RR.key && (RR.stopImmediatePropagation(), RR.preventDefault(), zR())
          };
          return document.addEventListener("keydown", RR, !0), () => {
            document.removeEventListener("keydown", RR, !0)
          }
        }), [GR, zR]), (0, tR.d)(!0, "click" === GR, "EmoteWheelOverlay"), (0, yR.useEffect)((() => {
          if ("hold" === GR) return wR.gameBridge.send("holdEmoteWheel", !0), () => {
            wR.gameBridge.send("holdEmoteWheel", !1)
          }
        }), [GR]), (0, yR.useEffect)((() => {
          if ("hold" !== GR) return;
          const RR = parseFloat(window.getComputedStyle(document.documentElement).fontSize),
            JR = AR.u * RR,
            yR = AR.q * RR,
            tR = RR => {
              let GR = HR.current.x + RR.movementX,
                tR = HR.current.y + RR.movementY;
              const uR = Math.hypot(GR, tR);
              if (uR > JR) {
                const RR = JR / uR;
                GR *= RR, tR *= RR
              }
              HR.current = {
                x: GR,
                y: tR
              }, xR(function(RR, JR, GR, yR) {
                if (Math.hypot(RR, JR) < GR) return null;
                const tR = (0, AR.B)(RR, JR, VR.p);
                return null === yR[tR] ? null : tR
              }(GR, tR, yR, PR))
            };
          return document.addEventListener("mousemove", tR), () => {
            document.removeEventListener("mousemove", tR)
          }
        }), [GR, PR, xR]), null === GR) return null;
      const ER = "hold" === GR || "pad" === GR,
        YR = null !== nR ? PR[nR] : null,
        kR = null !== YR ? (0, fR.i)(YR).displayName : RR("emotes:pickEmote");
      return (0, lR.jsx)("div", {
        className: UR()("EmoteWheelOverlay", {
          EmoteWheelOverlayPad: "pad" === GR
        }),
        onMouseDown: RR => {
          RR.target === RR.currentTarget && zR()
        },
        children: (0, lR.jsxs)("div", {
          className: "EmoteWheel",
          style: {
            width: 2 * AR.u + "rem",
            height: 2 * AR.u + "rem"
          },
          children: [(0, lR.jsxs)("svg", {
            className: "EmoteWheelSvg",
            viewBox: `0 0 ${AR.n} ${AR.n}`,
            children: [PR.map(((JR, GR) => {
              const yR = null !== JR,
                tR = ER && GR === nR;
              return (0, lR.jsx)("path", {
                d: OR(GR),
                className: UR()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: tR,
                  EmoteWheelWedgeDisabled: !yR
                }),
                onClick: RR => {
                  RR.stopPropagation(), null !== JR && (RR => {
                    zR(), SR(RR)
                  })(JR)
                },
                "aria-label": null !== JR ? (0, fR.i)(JR).displayName : RR("emotes:emptySlot")
              }, GR)
            })), (0, lR.jsx)("circle", {
              className: "EmoteWheelOuterRing",
              cx: AR.g,
              cy: AR.g,
              r: AR.l
            }), (0, lR.jsx)("circle", {
              className: "EmoteWheelInnerRing",
              cx: AR.g,
              cy: AR.g,
              r: AR.k
            }), ER && null !== nR && (0, lR.jsx)("path", {
              className: "EmoteWheelWedgeOutline",
              d: OR(nR)
            })]
          }), PR.map(((RR, JR) => {
            const GR = null !== RR,
              yR = ER && JR === nR,
              tR = (0, AR.F)(JR, VR.p),
              uR = AR.e * Math.cos(tR),
              ZR = AR.e * Math.sin(tR);
            return (0, lR.jsx)("div", {
              className: UR()("EmoteWheelSlotIcon", {
                EmoteWheelSlotIconHighlighted: yR,
                EmoteWheelSlotIconDisabled: !GR
              }),
              style: {
                left: `calc(50% + ${uR}rem)`,
                top: `calc(50% + ${ZR}rem)`,
                backgroundImage: GR ? `url(${(0,BR.h)("emote",RR)})` : void 0
              },
              "aria-hidden": !0
            }, JR)
          })), (0, lR.jsx)("div", {
            className: "EmoteWheelHint SmallTextBold",
            children: kR
          })]
        })
      })
    }))
  },
  6037: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => eR,
      g: () => AR,
      i: () => aR,
      m: () => WR
    });
    var yR = GR(66),
      tR = GR(6041),
      uR = GR(5141),
      ZR = GR(1501),
      qR = GR(4250),
      iR = GR(1163),
      fR = GR.n(iR),
      VR = GR(1493),
      KR = GR(1943),
      wR = GR(6063),
      rR = GR(1378);

    function eR(RR) {
      let {
        label: JR,
        onClick: GR,
        checked: yR,
        circleInfoText: tR,
        className: qR,
        disabled: iR,
        note: VR
      } = RR;
      return (0, rR.jsxs)("div", {
        "aria-disabled": iR || void 0,
        "data-pad-focusable": !0,
        className: fR()("SettingBox CheckboxContainer", {
          [qR]: qR,
          SettingBoxDisabled: iR
        }),
        onClick: () => {
          iR || GR(!yR)
        },
        children: [(0, rR.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, rR.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, rR.jsx)(uR.d, {
              className: "SettingsCheckbox",
              checked: yR,
              disabled: iR,
              onChange: () => {}
            })
          }), (0, rR.jsxs)("div", {
            className: "CheckboxText",
            children: [JR, tR && (0, rR.jsx)("span", {
              onClick: RR => RR.stopPropagation(),
              children: (0, rR.jsx)(ZR.e, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: tR
              })
            })]
          })]
        }), VR && (0, rR.jsx)("div", {
          className: "SettingNote",
          children: VR
        })]
      })
    }

    function aR(RR) {
      let {
        name: JR,
        onChange: GR,
        min: tR,
        max: uR,
        step: qR,
        initValue: iR,
        circleInfoText: VR,
        format: KR,
        className: wR,
        padStep: eR,
        disabled: aR = !1,
        selectableMax: LR,
        cappedNote: nR,
        note: WR,
        onChangeComplete: AR
      } = RR;
      const [CR, XR] = (0, yR.useState)(iR), MR = (0, yR.useRef)(iR);
      (0, yR.useEffect)((() => {
        MR.current = iR, XR(iR)
      }), [iR]);
      const BR = void 0 !== LR && LR < uR,
        lR = BR ? {
          "--slider-selectable": (LR - tR) / (uR - tR)
        } : void 0,
        pR = BR && nR ? nR : WR;
      return (0, rR.jsxs)("div", {
        className: fR()("SettingBox SettingsSliderDiv", {
          [wR]: wR,
          SettingBoxDisabled: aR,
          SliderCapped: BR
        }),
        style: lR,
        children: [(0, rR.jsxs)("div", {
          className: "SliderText",
          children: [`${JR}: ${KR?KR(CR):CR}`, VR && (0, rR.jsx)(ZR.e, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: VR
          })]
        }), (0, rR.jsx)("div", {
          className: "SliderDiv",
          children: (0, rR.jsx)(UR, {
            value: CR,
            min: tR,
            max: uR,
            step: qR,
            onChange: RR => {
              if (BR && RR >= LR && CR === LR) return;
              const JR = BR ? Math.min(RR, LR) : RR;
              MR.current = JR, XR(JR), GR(JR)
            },
            onChangeComplete: AR && (() => {
              AR(MR.current)
            }),
            format: KR,
            padStep: eR,
            disabled: aR
          })
        }), pR && (0, rR.jsx)("div", {
          className: "SettingNote",
          children: pR
        })]
      })
    }
    const LR = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function nR(RR) {
      var JR;
      return (null !== (JR = String(RR).split(".")[1]) && void 0 !== JR ? JR : "").length
    }

    function UR(RR) {
      let {
        value: JR,
        min: GR,
        max: uR,
        step: ZR,
        onChange: qR,
        orientation: iR,
        reverse: fR,
        setIsChanging: VR,
        tooltip: KR,
        labels: eR,
        handleLabel: aR,
        format: UR,
        onChangeStart: WR,
        onChangeComplete: AR,
        padStep: CR,
        disabled: XR = !1
      } = RR;
      const MR = (0, yR.useRef)(null),
        BR = (0, yR.useRef)(null);
      (0, yR.useLayoutEffect)((() => {
        var RR, JR, GR;
        const yR = null !== (RR = null === (JR = MR.current) || void 0 === JR ? void 0 : JR.querySelector(".rangeslider")) && void 0 !== RR ? RR : null;
        null === yR || void 0 === yR || yR.setAttribute("data-pad-slider", ""), null === yR || void 0 === yR || yR.setAttribute("data-pad-focusable", ""), null === yR || void 0 === yR || null === (GR = yR.querySelector(".rangeslider__handle")) || void 0 === GR || GR.setAttribute("data-pad-slider-handle", ""), BR.current = yR
      }), []), (0, yR.useLayoutEffect)((() => {
        var RR, JR;
        XR ? null === (RR = BR.current) || void 0 === RR || RR.setAttribute("aria-disabled", "true") : null === (JR = BR.current) || void 0 === JR || JR.removeAttribute("aria-disabled")
      }), [XR]);
      const lR = Math.max(nR(ZR), nR(GR)),
        pR = RR => {
          if (RR >= uR) return uR;
          if (RR <= GR) return GR;
          const JR = Number((Math.round((RR - GR) / ZR) * ZR + GR).toFixed(lR));
          return Math.min(uR, Math.max(GR, JR))
        },
        gR = (0, yR.useRef)(AR);
      gR.current = AR, (0, yR.useEffect)((() => {
        const RR = MR.current;
        if (!RR) return;
        const JR = RR => {
          var JR;
          LR.has(RR.key) && (null === (JR = gR.current) || void 0 === JR || JR.call(gR))
        };
        return RR.addEventListener("keyup", JR), () => {
          RR.removeEventListener("keyup", JR)
        }
      }), []);
      const bR = (0, yR.useRef)(!1);
      return (0, wR.i)(BR, {
        adjust: RR => {
          if (XR) return;
          const yR = null !== CR && void 0 !== CR ? CR : Math.max(ZR, Math.round((uR - GR) / 20 / ZR) * ZR),
            tR = pR(JR + RR * yR * (fR ? -1 : 1));
          tR !== JR && (null === WR || void 0 === WR || WR(), qR(tR), null === AR || void 0 === AR || AR())
        },
        setFraction: RR => {
          if (XR) return;
          const yR = pR(GR + (fR ? 1 - RR : RR) * (uR - GR));
          yR !== JR && (bR.current || (bR.current = !0, null === WR || void 0 === WR || WR()), qR(yR))
        },
        endDrag: () => {
          bR.current && (bR.current = !1, null === AR || void 0 === AR || AR())
        }
      }), (0, rR.jsx)("div", {
        ref: MR,
        style: {
          display: "contents"
        },
        children: (0, rR.jsx)(tR.b, {
          value: JR,
          min: GR,
          max: uR,
          step: ZR,
          onChange: RR => {
            qR(pR(RR))
          },
          orientation: iR,
          reverse: fR,
          tooltip: KR,
          labels: eR,
          handleLabel: aR,
          format: UR,
          onChangeStart: () => {
            null === WR || void 0 === WR || WR(), null === VR || void 0 === VR || VR(!0)
          },
          onChangeComplete: () => {
            null === VR || void 0 === VR || VR(!1), null === AR || void 0 === AR || AR()
          }
        })
      })
    }
    async function WR() {
      const RR = VR.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await RR.getResult() && (0, KR.reloadBloxd)()
    }

    function AR(RR) {
      let {
        label: JR,
        options: GR,
        value: yR,
        onChange: tR,
        circleInfoText: uR
      } = RR;
      return (0, rR.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, rR.jsxs)("div", {
          className: "SliderText",
          children: [JR, uR && (0, rR.jsx)(ZR.e, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: uR
          })]
        }), (0, rR.jsx)(qR.c, {
          ariaLabel: JR,
          options: GR,
          value: yR,
          onChange: tR
        })]
      })
    }
  },
  10085: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => ZR,
      f: () => uR
    });
    var yR = GR(2202);
    const tR = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      uR = RR => "string" === typeof RR.icon && "" !== RR.icon && "string" === typeof RR.keycode && tR.test(RR.keycode),
      ZR = RR => "Space" === RR ? "_" : yR.f[RR]
  },
  10149: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => tR
    });
    var yR = GR(25);

    function tR() {
      return !yR.d.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  10158: (RR, JR, GR) => {
    GR.d(JR, {
      B: () => KR,
      F: () => VR,
      I: () => wR,
      J: () => rR,
      e: () => uR,
      g: () => qR,
      k: () => fR,
      l: () => iR,
      n: () => ZR,
      q: () => tR,
      u: () => yR,
      x: () => eR
    });
    const yR = 14,
      tR = 6,
      uR = (yR + tR) / 2,
      ZR = 200,
      qR = ZR / 2,
      iR = ZR / 2 - 1,
      fR = tR / yR * (ZR / 2),
      VR = (RR, JR) => -Math.PI / 2 + 2 * RR * Math.PI / JR,
      KR = (RR, JR, GR) => {
        const yR = 2 * Math.PI / GR;
        return (Math.round((Math.atan2(JR, RR) + Math.PI / 2) / yR) % GR + GR) % GR
      },
      wR = .5,
      rR = (RR, JR, GR) => Math.hypot(RR.x, RR.y) < wR ? GR : KR(RR.x, RR.y, JR),
      eR = (RR, JR, GR, yR, tR) => {
        const uR = Math.PI / JR,
          ZR = VR(RR, JR),
          qR = ZR - uR,
          iR = ZR + uR,
          fR = (RR, JR) => `${GR+RR*Math.cos(JR)} ${GR+RR*Math.sin(JR)}`;
        return [`M ${fR(yR,qR)}`, `L ${fR(tR,qR)}`, `A ${tR} ${tR} 0 0 1 ${fR(tR,iR)}`, `L ${fR(yR,iR)}`, `A ${yR} ${yR} 0 0 0 ${fR(yR,qR)}`, "Z"].join(" ")
      }
  },
  10187: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => ZR
    });
    var yR = GR(66),
      tR = GR(10118),
      uR = GR(3465);

    function ZR() {
      const RR = (0, uR.f)("shopInfo"),
        [, JR] = (0, yR.useState)((() => (0, tR.c)(RR)));
      return (0, uR.e)("shopInfo", (RR => {
        JR((0, tR.c)(RR))
      })), !(0, tR.c)(RR)
    }
  },
  9497: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => ZR,
      d: () => tR,
      f: () => uR,
      j: () => wR,
      n: () => KR,
      o: () => fR,
      s: () => qR,
      v: () => yR,
      y: () => rR,
      z: () => eR
    });
    const yR = ["menuConfirm", "menuBack", "menuTabPrevious", "menuTabNext", "menuPageUp", "menuPageDown", "menuSecondary", "menuToggleCursor"],
      tR = [{
        group: "gameplay",
        actions: ["jump", "sneak", "sneakToggle", "zoom", "sprint", "attack", "use", "hotbarPrevious", "hotbarNext", "inventory", "actionButton", "perspective", "pickBlock", "drop", "emoteWheel", "chat", "pause", "leaderboard"]
      }, {
        group: "menu",
        actions: yR
      }, {
        group: "inventory",
        actions: ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryClose", "inventoryPanelPrevious", "inventoryPanelNext", "inventoryDrop", "inventoryHotbarSwap"]
      }, {
        group: "keyboard",
        actions: ["keyboardType", "keyboardBackspace", "keyboardSpace", "keyboardCaretLeft", "keyboardCaretRight", "keyboardShift", "keyboardSymbols", "keyboardSubmit", "keyboardClose", "keyboardChannel"]
      }],
      uR = {
        jump: "A",
        sneak: "B",
        sneakToggle: "RS",
        zoom: "RS",
        sprint: "LS",
        attack: "RT",
        use: "LT",
        hotbarPrevious: "LB",
        hotbarNext: "RB",
        inventory: "Y",
        actionButton: "X",
        perspective: "Up",
        pickBlock: "Up",
        drop: "Down",
        emoteWheel: "Left",
        chat: "Right",
        pause: "Menu",
        leaderboard: "View",
        menuConfirm: "A",
        menuBack: "B",
        menuTabPrevious: "LB",
        menuTabNext: "RB",
        menuPageUp: "LT",
        menuPageDown: "RT",
        menuSecondary: "X",
        menuToggleCursor: "LS",
        inventoryPrimary: "A",
        inventorySecondary: "X",
        inventoryQuickMove: "RS",
        inventoryClose: "B",
        inventoryPanelPrevious: "LB",
        inventoryPanelNext: "RB",
        inventoryDrop: "View",
        inventoryHotbarSwap: "LS",
        keyboardType: "A",
        keyboardBackspace: "X",
        keyboardSpace: "Y",
        keyboardCaretLeft: "LB",
        keyboardCaretRight: "RB",
        keyboardShift: "LT",
        keyboardSymbols: "RT",
        keyboardSubmit: "Menu",
        keyboardClose: "B",
        keyboardChannel: "View"
      },
      ZR = [
        ["pickBlock", "perspective"],
        ["zoom", "sneakToggle"]
      ],
      qR = RR => {
        var JR;
        return null !== (JR = ZR.find((JR => JR.includes(RR)))) && void 0 !== JR ? JR : [RR]
      },
      iR = Object.fromEntries(tR.flatMap((RR => {
        let {
          group: JR,
          actions: GR
        } = RR;
        return GR.map((RR => [RR, JR]))
      }))),
      fR = RR => iR[RR],
      VR = {
        pause: ["menu"],
        leaderboard: ["menu"],
        inventory: ["menu"],
        menuPageUp: ["inventory"],
        menuPageDown: ["inventory"]
      },
      KR = RR => {
        var JR;
        return [fR(RR), ...null !== (JR = VR[RR]) && void 0 !== JR ? JR : []]
      },
      wR = new Set(["menu", "inventory", "keyboard"]),
      rR = {
        jump: "jump",
        crouch: "sneak",
        sprint: "sprint",
        "primary-fire": "attack",
        "alt-fire": "use",
        SpecialAction1: "actionButton",
        SpecialAction2: "actionButton",
        ReloadGun: "actionButton",
        DropItem: "drop",
        SwapCameraZoom: "perspective",
        Zoom: "zoom",
        "mid-fire": "pickBlock",
        OpenInventory: "inventory",
        OpenSettings: "pause",
        OpenLobbyLeaderboard: "leaderboard",
        OpenShop: "leaderboard",
        OpenEmoteWheel: "emoteWheel"
      },
      eR = new Set(["forward", "backward", "left", "right"])
  },
  9495: (RR, JR, GR) => {
    GR.d(JR, {
      B: () => BR,
      C: () => WR,
      F: () => pR,
      G: () => VR,
      H: () => lR,
      K: () => vR,
      c: () => UR,
      e: () => CR,
      h: () => wR,
      k: () => rR,
      l: () => xR,
      o: () => bR,
      r: () => gR,
      v: () => AR,
      y: () => OR
    });
    var yR = GR(9497),
      tR = GR(9504),
      uR = GR(9483),
      ZR = GR(9520);
    const qR = RR => {
        var JR, GR;
        return null !== (JR = null === (GR = yR.b.find((JR => {
          let [GR] = JR;
          return GR === RR
        }))) || void 0 === GR ? void 0 : GR[1]) && void 0 !== JR ? JR : RR
      },
      iR = (RR, JR) => {
        var GR;
        const tR = qR(JR);
        return null !== (GR = RR[tR]) && void 0 !== GR ? GR : yR.f[tR]
      },
      fR = new Map([
        ["menuConfirm", "menuBack"],
        ["inventoryPrimary", "inventoryClose"],
        ["keyboardType", "keyboardClose"]
      ].flatMap((RR => {
        let [JR, GR] = RR;
        return [
          [JR, GR],
          [GR, JR]
        ]
      }))),
      VR = (RR, JR) => null !== RR && void 0 !== RR ? RR : "nintendo" === JR,
      KR = RR => VR((0, tR.l)().swapConfirmBack, (0, tR.p)()) && fR.get(RR) || RR,
      wR = RR => iR((0, tR.l)().bindings, KR(RR)),
      rR = RR => yR.f[qR(KR(RR))],
      eR = Object.keys(yR.f),
      aR = RR => "gameplay" === (0, yR.o)(RR) ? ["gameplay"] : (0, yR.n)(RR),
      LR = (RR, JR) => {
        const GR = aR(JR);
        return aR(RR).some((RR => GR.includes(RR)))
      },
      nR = (RR, JR, GR) => {
        const tR = iR(RR, JR),
          ZR = new Set((0, yR.s)(JR)),
          fR = [...ZR];
        for (let yR = fR.pop(); yR; yR = fR.pop())
          for (const JR of eR) {
            const uR = iR(RR, JR);
            ZR.has(JR) || uR !== GR && uR !== tR || !LR(yR, JR) || (ZR.add(JR), fR.push(JR))
          }
        const VR = {
          ...RR
        };
        for (const KR of ZR) {
          const JR = iR(RR, KR) === tR ? GR : tR,
            ZR = (0, yR.n)(KR).some((RR => yR.j.has(RR)));
          if ((0, uR.G)(JR) && ZR) return null;
          VR[qR(KR)] = JR
        }
        for (const uR of Object.keys(VR)) VR[uR] === yR.f[uR] && delete VR[uR];
        return VR
      },
      UR = (RR, JR) => null !== nR((0, tR.l)().bindings, KR(RR), JR),
      WR = (RR, JR) => {
        if (wR(RR) === JR) return !0;
        const GR = nR((0, tR.l)().bindings, KR(RR), JR);
        return !!GR && ((0, tR.t)({
          bindings: GR
        }), !0)
      },
      AR = (RR, JR) => {
        const GR = (0, yR.s)(JR);
        return eR.filter((JR => qR(JR) === JR && !GR.includes(JR) && iR(RR, KR(JR)) !== wR(JR)))
      },
      CR = ["southpaw", "triggersSwapped"],
      XR = {
        southpaw: {
          sprint: "RS",
          sneakToggle: "LS"
        },
        triggersSwapped: {
          attack: "LT",
          use: "RT"
        }
      },
      MR = RR => Object.keys(XR[RR]),
      BR = (RR, JR) => "southpaw" === RR ? JR.swapSticks : MR(RR).every((GR => iR(JR.bindings, GR) === XR[RR][GR])),
      lR = (RR, JR) => {
        const GR = (0, tR.l)();
        let uR = GR.bindings;
        for (const tR of MR(RR)) {
          const GR = JR ? XR[RR][tR] : yR.f[tR];
          if (uR = nR(uR, tR, GR), !uR) return !1
        }
        return (0, tR.t)({
          swapSticks: "southpaw" === RR ? JR : GR.swapSticks,
          bindings: uR
        }), !0
      },
      pR = () => {
        (0, tR.t)({
          swapSticks: !1,
          bindings: {}
        })
      },
      gR = () => (0, tR.l)().swapSticks ? "RightStick" : "LeftStick",
      bR = () => (0, tR.l)().swapSticks ? "LeftStick" : "RightStick",
      vR = RR => (0, tR.l)().swapSticks && (0, uR.G)(RR),
      OR = RR => vR(RR) ? gR() : bR(),
      xR = RR => {
        if (yR.z.has(RR)) return gR();
        const JR = yR.y[RR];
        return JR && ("leaderboard" !== JR || (0, ZR.e)(RR, (0, ZR.b)())) ? wR(JR) : null
      }
  },
  9477: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      ControllerCategory: () => Wq,
      ControllerGlyph: () => Mt,
      ControllerRoot: () => WZ,
      PadLobbyShortcuts: () => oZ,
      PadSneakChip: () => pZ,
      PadTooltip: () => bZ,
      attachPressToContinue: () => dZ,
      getBoundButton: () => VR.h,
      getControllerSettings: () => wR.l,
      getGlyphForNoaAction: () => VR.l,
      getInventoryCursorState: () => Cq,
      getMenuShortcutButton: () => dG,
      getPadGlyphIconName: () => MZ,
      getPadGlyphIconUrl: () => BZ,
      getPadRepeatTiming: () => aR.e,
      handOverPadFocus: () => Mq,
      hasActivePad: () => Aq,
      isPadSteppingSlots: () => Xq
    });
    const yR = JSON.parse('{"controller":{"inventoryTake":"Take","inventoryTakeHalf":"Take half","inventoryPlace":"Place","inventoryPlaceOne":"Place one","inventoryQuickMove":"Quick move","inventoryToHotbar":"To hotbar","inventoryPutBack":"Put back","inventoryHotbarSwap":"Swap with hotbar","inventorySwapHere":"Swap here","inventoryCancel":"Cancel","inventoryClose":"Close","inventoryDrop":"Drop (hold: stack)","inventorySelect":"Select","inventoryCraft":"Craft (hold to repeat)","inventoryCraftAll":"Craft all","inventoryChooseRecipe":"Choose","inventoryBackToRecipes":"Back to recipes","inventoryType":"Type","inventoryPanels":"Switch panel","inventoryCategory":"Category","inventoryPage":"Page","disconnected":"Controller disconnected","gameplayReload":"Reload","gameplayActionWheelHint":"(hold for more)","gameplaySneaking":"Sneaking","gameplayLoadFailedTitle":"Controller unavailable","gameplayLoadFailedSubtitle":"Reload the page to play with your controller.","gameplayDropStack":"Keep holding to drop the stack","gameplayAttackLatched":"Attacking","gameplayPickBlock":"Pick block","padButtonView":"View","padButtonMenu":"Menu","padButtonHome":"Home","padButtonCreate":"Create","padButtonOptions":"Options","padButtonDpadUp":"D-pad \u2191","padButtonDpadDown":"D-pad \u2193","padButtonDpadLeft":"D-pad \u2190","padButtonDpadRight":"D-pad \u2192","padButtonLeftStick":"L Stick","padButtonRightStick":"R Stick","settingsLook":"Look","settingsLookSensitivityX":"Look sensitivity (horizontal)","settingsLookSensitivityY":"Look sensitivity (vertical)","settingsAimLookSensitivity":"Look sensitivity while aiming (use held)","settingsInvertLookX":"Invert horizontal look","settingsInvertLookY":"Invert vertical look","settingsLookCurve":"Look curve","settingsLookCurveHint":"Steep gives finer aim near the centre, Linear turns at an even rate, and Boost turns faster when you hold the stick all the way.","settingsCurveExponential":"Steep","settingsCurveLinear":"Linear","settingsCurveBoost":"Boost","settingsLookDeadzone":"Look deadzone","settingsGyro":"Gyro aiming","settingsGyroToggle":"Aim by moving the controller","settingsGyroToggleInfo":"Turn and tilt the controller to aim, on top of the right stick.","settingsGyroTogglePhone":"Aim by moving your phone or tablet","settingsGyroToggleInfoPhone":"Turn and tilt your phone or tablet to aim, on top of the right stick.","settingsGyroUnsupported":"Gyro aiming needs Chrome or Edge.","settingsGyroBlocked":"Gyro aiming isn\'t available on this site.","settingsGyroPhoneNeedsController":"Connect a controller to aim by moving your phone or tablet.","settingsGyroSteamHint":"If Steam already turns your gyro into mouse movement, leave this off.","settingsGyroConnect":"Connect motion controller","settingsGyroConnectHint":"Works with DualSense, DualShock 4 and Switch controllers.","settingsGyroConnectNeedsClick":"Click Connect with your mouse: the browser asks before sharing a controller.","settingsGyroOpenFailed":"Another app is using the controller. Close apps such as Steam or DS4Windows, then try again.","settingsGyroConnected":"Aiming with {{name}}.","settingsGyroAllowMotion":"Allow motion sensor","settingsGyroAllowNeedsTap":"Tap Allow motion sensor on your screen to turn it on.","settingsGyroPhoneOn":"Aiming with this device\'s motion sensor.","settingsGyroPhoneWaiting":"Waiting for this device\'s motion sensor\u2026","settingsGyroPhoneNoSensor":"No motion sensor found on this device.","settingsGyroPhoneDenied":"Motion access is blocked. Allow it in your browser settings.","settingsGyroSensitivity":"Gyro sensitivity","settingsGyroActivation":"Gyro turns on","settingsGyroAlways":"Always","settingsGyroWhileAiming":"While aiming","settingsGyroWhileButton":"While holding a button","settingsGyroAimingHint":"Hold {{button}} to aim with motion.","settingsGyroButton":"Gyro button","settingsGyroButtonHint":"While gyro aiming is on, this button only turns the gyro on in game, so pick one you rarely use.","settingsMovement":"Movement","settingsMoveDeadzone":"Move deadzone","settingsAutoSprint":"Sprint at full tilt","settingsAutoSprintInfo":"Push the movement stick all the way to sprint.","settingsSneak":"Sneak","settingsSneakHold":"Hold","settingsSneakToggle":"Toggle","settingsButtons":"Buttons","settingsPromptFamily":"Button prompts","settingsPromptAuto":"Match my controller","settingsPromptXbox":"Xbox","settingsPromptPlayStation":"PlayStation","settingsPromptNintendo":"Nintendo","settingsPromptSteamDeck":"Steam Deck","settingsPromptGeneric":"Generic","settingsHideButtonHints":"Hide button hints","settingsVibration":"Vibration","settingsCursorSpeed":"Virtual cursor speed","settingsCursorMagnetism":"Cursor snaps onto buttons","settingsMenuBackToCategories":"Back returns to the category list first","settingsAccessibility":"Accessibility","settingsSwapConfirmBack":"Swap confirm and back","settingsSwapToast":"Select and Back have swapped buttons.","settingsLayoutRefusedToast":"This layout doesn\'t fit your current buttons. Reset them to use it.","settingsSwapConfirmBackInfo":"Select with the right face button and go back with the bottom one, in menus, the inventory and the on-screen keyboard. On by default for Nintendo controllers.","settingsButtonRepeat":"Button repeat","settingsButtonRepeatHint":"How a held button repeats in menus, sliders, the on-screen keyboard and crafting. Off acts once per press, and holding drop in game drops just one item.","settingsButtonRepeatDefault":"Default","settingsButtonRepeatSlow":"Slow (0.8 s, then 4 a second)","settingsButtonRepeatOff":"Off (once per press)","settingsTapHoldTime":"Tap/hold time","settingsTapHoldTimeHint":"How long to hold the chat, emote or action button to open its wheel, or the view button to change view where a tap picks a block. Dropping a whole stack takes 0.8, 1 or 1.3 s.","settingsTapHoldShort":"Short (0.25 s)","settingsTapHoldMedium":"Medium (0.5 s)","settingsTapHoldLong":"Long (0.8 s)","settingsEmoteButton":"Emote button","settingsEmoteButtonTapHoldHint":"Tap to repeat your last emote, or hold to open the emote wheel.","settingsEmoteButtonWheelHint":"Any press opens the emote wheel, with no hold to time. Pick with the stick, then select.","settingsEmoteButtonTapHold":"Tap repeats, hold opens wheel","settingsEmoteButtonWheel":"Opens the wheel","settingsAttackMode":"Attack / mine","settingsAttackHoldHint":"Hold attack to keep attacking or mining.","settingsAttackToggleHint":"Press attack once to keep attacking or mining, and again to stop.","settingsAttackHold":"Hold","settingsAttackToggle":"Toggle","settingsLargePointer":"Large pointer and focus","settingsLargePointerInfo":"A bigger menu cursor, thicker selection brackets and bigger button hints.","settingsRemap":"Remap buttons","settingsRemapHint":"Select an action, then press a button. If that button is taken, the two swap.","settingsLayoutSouthpaw":"Southpaw (move with the right stick)","settingsLayoutTriggersSwapped":"Triggers swapped (attack with the left trigger)","settingsCapturePrompt":"Press a button","settingsCaptureCancelHint":"Press {{button}} to cancel","settingsCaptureCancelOrBindHint":"Tap {{button}} to cancel, or hold it to choose it","settingsReset":"Reset","settingsSwapNotice":"{{action}} moved to {{button}}","settingsResetAll":"Reset all buttons and sticks","settingsGroupGameplay":"Movement & gameplay","settingsGroupMenus":"Menus","settingsGroupInventory":"Inventory","settingsGroupKeyboard":"On-screen keyboard","settingsActionMove":"Move","settingsActionLook":"Look around","settingsActionJump":"Jump","settingsActionSneak":"Sneak","settingsActionSneakToggle":"Toggle sneak","settingsActionZoom":"Zoom (hold)","settingsActionSprint":"Sprint","settingsActionAttack":"Attack / mine","settingsActionUse":"Use / place","settingsActionHotbarPrevious":"Previous hotbar slot","settingsActionHotbarNext":"Next hotbar slot","settingsActionInventory":"Inventory","settingsActionActionButton":"Game action","settingsActionPerspective":"Change view","settingsActionPickBlock":"Pick block (creative)","settingsActionDrop":"Drop item","settingsActionEmoteWheel":"Emotes","settingsActionChat":"Chat","settingsActionPause":"Pause menu","settingsActionLeaderboard":"Shop / leaderboard","settingsActionMenuConfirm":"Select","settingsActionMenuBack":"Back","settingsActionMenuTabPrevious":"Previous tab","settingsActionMenuTabNext":"Next tab","settingsActionMenuPageUp":"Page up","settingsActionMenuPageDown":"Page down","settingsActionMenuSecondary":"Secondary action","settingsActionMenuToggleCursor":"Switch to virtual cursor","settingsActionInventoryPrimary":"Pick up / place","settingsActionInventorySecondary":"Pick up half / place one","settingsActionInventoryQuickMove":"Quick move","settingsActionInventoryHotbarSwap":"Swap with hotbar slot","settingsActionInventoryClose":"Close","settingsActionInventoryPanelPrevious":"Previous panel","settingsActionInventoryPanelNext":"Next panel","settingsActionInventoryDrop":"Drop item","settingsActionKeyboardType":"Type key","settingsActionKeyboardBackspace":"Backspace","settingsActionKeyboardSpace":"Space","settingsActionKeyboardCaretLeft":"Move cursor left","settingsActionKeyboardCaretRight":"Move cursor right","settingsActionKeyboardShift":"Shift","settingsActionKeyboardSymbols":"Accents and symbols","settingsActionKeyboardSubmit":"Send","settingsActionKeyboardClose":"Close keyboard","settingsActionKeyboardChannel":"Chat channel","settingsAlternatives":"Try alternatives","settingsAlternativesHint":"Try each way of playing and keep the one that feels best.","settingsMenuNavigation":"Menu navigation","settingsMenuNavigationHint":"Steer a cursor with the stick and jump between buttons with the D-pad, or use just one.","settingsNavHybrid":"Cursor and D-pad","settingsMenuNavFocus":"Jump between buttons","settingsVirtualCursor":"Virtual cursor","settingsInventoryNavigation":"Inventory","settingsInventoryNavigationHint":"Steer a cursor with the stick and step slot by slot with the D-pad, or use just one.","settingsInventoryNavSlot":"Slot by slot","settingsQuickChat":"Hold chat button","settingsQuickChatHint":"Hold the chat button to pick a quick phrase. Tapping it still opens chat.","settingsQuickChatWheel":"Quick chat wheel","settingsQuickChatOff":"Off","settingsLeaderboardButton":"Shop / leaderboard button","settingsLeaderboardButtonHint":"Open the shop in one press in games that have one. The lobby leaderboard is still in the pause menu.","settingsLeaderboardButtonShop":"Shop, in games with one","settingsLeaderboardButtonLeaderboard":"Always the leaderboard","settingsTester":"Gamepad tester","settingsTesterNoPad":"Connect a gamepad and press any button to test it.","settingsTesterFamily":"Detected: {{family}}","settingsTesterHint":"Start a test to try every button and stick without moving through the menu.","settingsTesterStart":"Start test","settingsTesterStop":"Stop test","settingsTesterTesting":"Press anything to see it light up. To stop, hold {{button}} or press it three times.","settingsControlsNote":"Playing with a gamepad? Change its buttons and feel in Gamepad settings.","settingsOpenController":"Gamepad settings","keyboardSpace":"Space","keyboardSend":"Send","keyboardDone":"Done","keyboardTargetChat":"Chat","keyboardTargetSign":"Sign","keyboardTargetNameTag":"Name tag","keyboardTargetBook":"Book page","keyboardTargetBookTitle":"Book title","keyboardTargetText":"Text","quickChatPick":"Pick a phrase","actionWheelPick":"Pick an action","wheelReleaseToPick":"Release to pick","wheelClose":"Close","wheelChoose":"Choose","menusSelect":"Select","menusBack":"Back","menusClose":"Close","menusQuickChat":"Quick chat (hold)","menusSkipTutorial":"Skip tutorial","menusTabs":"Tabs","menusRows":"Rows","menusCursorMode":"Cursor","menusFocusMode":"Focus","menusClick":"Click","menusRightClick":"Right-click","menusScroll":"Scroll","menusFriends":"Friends","menusSearch":"Search","menusSettings":"Settings","menusLeaveGameTitle":"Leave the game?","menusLeaveGameLeave":"Leave","menusLeaveGameStay":"Stay","menusNotifications":"Notifications","menusLobby":"Lobby","menusShop":"Shop","menusTasks":"Tasks & leaderboards","menusInvite":"Invite friends","menusAdjust":"Adjust","menusFavourite":"Favourite","screensPressToContinue":"Press {{button}} to continue","screensPressToEnterGame":"Press {{button}} to enter game","screensEnterGame":"Enter game","screensBackToGames":"Back to games","tutorialMine":"Mine","tutorialPlace":"Place / Use","tutorialInventory":"Inventory","tutorialPause":"Pause","menusUseMouse":"Use a mouse or touch here"}}');
    var tR = GR(1270),
      uR = GR(1547),
      ZR = GR(9481),
      qR = GR(83),
      iR = GR(25),
      fR = GR(32),
      VR = GR(9495),
      KR = GR(9523),
      wR = GR(9504),
      rR = GR(9528),
      eR = GR(9483),
      aR = GR(9980),
      LR = GR(9987),
      nR = GR(1850);
    const UR = (RR, JR, GR) => Math.max(JR, Math.min(GR, RR)),
      WR = RR => Math.min(RR.width, RR.height) / 720,
      AR = RR => Math.max(.15, RR);
    class CR {
      constructor() {
        this.locked = !1
      }
      lock() {
        this.locked = !0
      }
      update(RR, JR) {
        const GR = Math.hypot(RR.x, RR.y) >= (RR => Math.max(.3, RR))(JR);
        return this.locked ? (this.locked = GR, !1) : GR
      }
    }
    const XR = (RR, JR) => {
        const GR = UR(JR.dtMs, 0, 100),
          yR = GR / 1e3,
          tR = WR(JR.viewport) * (JR.cursorSpeedPercent / 100),
          uR = (0, eR.k)(JR.stick, AR(JR.moveDeadzone)),
          ZR = Math.hypot(uR.x, uR.y),
          qR = ((RR, JR, GR) => {
            if (JR < .3) return 0;
            const yR = GR / 350;
            return JR >= .85 ? Math.min(1, RR + yR) : Math.max(0, RR - yR)
          })(RR.speedRamp, ZR, GR);
        let iR = RR.x,
          fR = RR.y;
        if (ZR > 0) {
          const RR = .45 + .55 * qR,
            GR = JR.context.overInteractive ? .45 : 1,
            VR = 1400 * (RR => {
              const JR = UR(RR, 0, 1);
              return .3 * JR + .7 * JR * JR
            })(ZR) * tR * RR * GR;
          iR += uR.x / ZR * VR * yR, fR += uR.y / ZR * VR * yR
        }
        const VR = Math.hypot(JR.dpad.x, JR.dpad.y);
        if (VR > 0) {
          const RR = 500 * tR;
          iR += JR.dpad.x / VR * RR * yR, fR += JR.dpad.y / VR * RR * yR
        }
        const KR = JR.context.magnetTarget;
        if (KR && ZR < .3 && 0 === VR) {
          const RR = ((RR, JR, GR, yR, tR) => {
            const uR = JR.x - RR.x,
              ZR = JR.y - RR.y,
              qR = Math.hypot(uR, ZR);
            if (0 === qR) return {
              x: 0,
              y: 0
            };
            const iR = Math.min(qR, tR * (1 - yR / .3));
            let fR = uR / qR * iR,
              VR = ZR / qR * iR;
            if (yR > 0) {
              const RR = GR.x / yR,
                JR = GR.y / yR,
                tR = fR * RR + VR * JR;
              tR < 0 && (fR -= tR * RR, VR -= tR * JR)
            }
            return {
              x: fR,
              y: VR
            }
          })({
            x: iR,
            y: fR
          }, KR, uR, ZR, 120 * WR(JR.viewport) * yR);
          iR += RR.x, fR += RR.y
        }
        return {
          x: UR(iR, 0, Math.max(0, JR.viewport.width - 1)),
          y: UR(fR, 0, Math.max(0, JR.viewport.height - 1)),
          speedRamp: qR
        }
      },
      MR = RR => {
        const JR = (0, eR.k)(RR, .2);
        return 0 !== JR.x || 0 !== JR.y
      },
      BR = (RR, JR) => {
        const GR = (0, eR.k)(RR, .2),
          yR = Math.hypot(GR.x, GR.y);
        if (0 === yR) return {
          x: 0,
          y: 0
        };
        const tR = yR * yR * 1600,
          uR = UR(JR, 0, 100) / 1e3;
        return {
          x: GR.x / yR * tR * uR,
          y: GR.y / yR * tR * uR
        }
      },
      lR = (RR, JR) => "y" === JR ? RR.scrollHeight > RR.clientHeight + 1 : RR.scrollWidth > RR.clientWidth + 1,
      pR = (RR, JR) => {
        if (!lR(RR, JR)) return !1;
        const GR = getComputedStyle(RR),
          yR = "y" === JR ? GR.overflowY : GR.overflowX;
        return "auto" === yR || "scroll" === yR
      },
      gR = (RR, JR, GR) => {
        for (let uR = RR instanceof HTMLElement ? RR : null !== (yR = null === RR || void 0 === RR ? void 0 : RR.parentElement) && void 0 !== yR ? yR : null; uR; uR = uR.parentElement) {
          var yR;
          if (pR(uR, JR)) return uR;
          if (uR === GR) return null
        }
        if (GR) return null;
        const tR = document.scrollingElement;
        return tR instanceof HTMLElement && lR(tR, JR) ? tR : null
      },
      bR = new WeakMap,
      vR = (RR, JR) => {
        const GR = performance.now(),
          yR = bR.get(RR);
        if (yR && yR.axis === JR && GR - yR.atMs < 500 && (!yR.container || yR.container.isConnected)) return yR.container;
        const tR = OR(RR, JR);
        return bR.set(RR, {
          axis: JR,
          atMs: GR,
          container: tR
        }), tR
      },
      OR = (RR, JR) => {
        let GR = pR(RR, JR) ? RR : null,
          yR = GR ? GR.clientWidth * GR.clientHeight : 0;
        for (const tR of RR.querySelectorAll("*")) {
          const RR = tR.clientWidth * tR.clientHeight;
          RR > yR && pR(tR, JR) && (GR = tR, yR = RR)
        }
        return GR
      },
      xR = (RR, JR, GR) => "y" === JR ? GR < 0 ? RR.scrollTop > 0 : RR.scrollTop + RR.clientHeight < RR.scrollHeight - 1 : GR < 0 ? RR.scrollLeft > 0 : RR.scrollLeft + RR.clientWidth < RR.scrollWidth - 1,
      NR = (RR, JR, GR) => {
        "y" === JR ? RR.scrollBy({
          top: GR,
          behavior: "instant"
        }) : RR.scrollBy({
          left: GR,
          behavior: "instant"
        })
      },
      DR = RR => {
        if (!RR || RR === document.scrollingElement) return new DOMRect(0, 0, window.innerWidth, window.innerHeight);
        const JR = RR.getBoundingClientRect(),
          GR = Math.max(0, JR.left),
          yR = Math.max(0, JR.top);
        return new DOMRect(GR, yR, Math.min(window.innerWidth, JR.right) - GR, Math.min(window.innerHeight, JR.bottom) - yR)
      },
      HR = (RR, JR) => RR.left < JR.right && JR.left < RR.right && RR.top < JR.bottom && JR.top < RR.bottom;
    var oR = GR(66),
      cR = GR(1163),
      PR = GR.n(cR),
      IR = GR(1378);
    let mR = 0,
      zR = !1;
    class SR {
      constructor() {
        this.element = null, this.shownKey = "", this.gap = null
      }
      setElement(RR) {
        this.element = RR, this.shownKey = "", this.gap = null
      }
      show(RR) {
        const JR = this.element;
        if (!JR) return;
        const GR = RR ? this.keepOnScreen(JR, RR) : null,
          yR = GR ? `${GR.left},${GR.top},${GR.width},${GR.height}` : "";
        if (yR === this.shownKey) return;
        const tR = "" === this.shownKey;
        this.shownKey = yR, JR.classList.toggle("Visible", null !== GR), GR && (JR.classList.toggle("Snap", tR), JR.style.width = `${GR.width}px`, JR.style.height = `${GR.height}px`, JR.style.transform = `translate(${GR.left}px, ${GR.top}px)`, tR && (JR.offsetWidth, JR.classList.remove("Snap")))
      }
      hide() {
        this.show(null)
      }
      keepOnScreen(RR, JR) {
        var GR;
        const yR = `${window.innerWidth}x${window.innerHeight}@${(()=>{if("undefined"===typeof ResizeObserver)return getComputedStyle(document.documentElement).fontSize;if(!zR){zR=!0;const RR=document.createElement("div");RR.setAttribute("aria-hidden","true"),RR.style.cssText="position: fixed; top: 0; left: 0; width: 1rem; height: 0; visibility: hidden; pointer-events: none",document.body.appendChild(RR),new ResizeObserver((()=>{mR++})).observe(RR)}return String(mR)})()}`;
        (null === (GR = this.gap) || void 0 === GR ? void 0 : GR.key) !== yR && (this.gap = {
          px: parseFloat(getComputedStyle(RR).paddingLeft) || 0,
          key: yR
        });
        const tR = this.gap.px + 2,
          uR = Math.max(JR.left, tR),
          ZR = Math.max(JR.top, tR),
          qR = Math.min(JR.left + JR.width, window.innerWidth - tR),
          iR = Math.min(JR.top + JR.height, window.innerHeight - tR);
        return qR <= uR || iR <= ZR ? JR : {
          left: uR,
          top: ZR,
          width: qR - uR,
          height: iR - ZR
        }
      }
    }
    const jR = RR => {
      let {
        placer: JR,
        className: GR
      } = RR;
      const yR = (0, oR.useCallback)((RR => {
        JR.setElement(RR)
      }), [JR]);
      return (0, IR.jsx)("div", {
        ref: yR,
        className: PR()("PadReticle", GR),
        "aria-hidden": !0
      })
    };
    var dR = GR(9992);
    const ER = {
      x: 0,
      y: 0,
      visible: !1,
      pressed: !1
    };
    const YR = new class {
      constructor() {
        this.state = ER, this.listeners = new Set
      }
      get() {
        return this.state
      }
      set(RR) {
        if (JR = this.state, GR = RR, (JR.visible || GR.visible) && (JR.visible !== GR.visible || JR.x !== GR.x || JR.y !== GR.y || JR.pressed !== GR.pressed)) {
          var JR, GR;
          this.state = RR;
          for (const JR of this.listeners) JR(RR)
        }
      }
      hide() {
        this.set(ER)
      }
      subscribe(RR) {
        return this.listeners.add(RR), () => {
          this.listeners.delete(RR)
        }
      }
    };
    var kR = GR(10010);
    const QR = (RR, JR) => {
        let {
          kind: GR,
          holding: yR,
          hasPress: tR,
          hasBack: uR,
          slotHasItem: ZR
        } = JR;
        switch (RR) {
          case "primary":
            return "slot" === GR ? "slotPrimary" : "recipe" === GR || "button" === GR ? tR ? "pressPrimary" : "click" : "textField" === GR ? "openKeyboard" : null;
          case "secondary":
            return "slot" === GR ? "slotSecondary" : "button" !== GR && "recipe" !== GR || !tR ? null : "pressSecondary";
          case "quickMove":
            return "slot" === GR && ZR ? "slotQuickMove" : null;
          case "hotbarSwap":
            return "slot" === GR && ZR && !yR ? "hotbarPick" : null;
          case "openButton":
            return "close";
          case "back":
            return yR ? "cancel" : uR ? "pressBack" : "close"
        }
      },
      FR = RR => {
        const JR = [];
        if (RR.hotbarPicking) return JR.push({
          actions: ["inventoryPrimary", "inventoryHotbarSwap"],
          labelKey: "inventorySwapHere"
        }), JR.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryCancel"
        }), JR;
        if (RR.holding) "slot" === RR.kind ? (JR.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryPlace"
        }), JR.push({
          actions: ["inventorySecondary"],
          labelKey: "inventoryPlaceOne"
        })) : "textField" === RR.kind && JR.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryType"
        }), JR.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryPutBack"
        }), JR.push({
          actions: ["inventoryDrop"],
          labelKey: "inventoryDrop"
        }), RR.openButtonCloses && JR.push({
          actions: ["inventory"],
          labelKey: "inventoryClose"
        });
        else {
          var GR;
          "slot" === RR.kind && RR.slotHasItem ? (JR.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryTake"
          }), JR.push({
            actions: ["inventorySecondary"],
            labelKey: "inventoryTakeHalf"
          }), JR.push({
            actions: ["inventoryQuickMove"],
            labelKey: RR.quickMoveToHotbar ? "inventoryToHotbar" : "inventoryQuickMove"
          }), JR.push({
            actions: ["inventoryHotbarSwap"],
            labelKey: "inventoryHotbarSwap"
          }), JR.push({
            actions: ["inventoryDrop"],
            labelKey: "inventoryDrop"
          })) : "button" !== RR.kind && "recipe" !== RR.kind || !RR.pressHints ? "button" === RR.kind || "recipe" === RR.kind ? JR.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventorySelect"
          }) : "textField" === RR.kind && JR.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryType"
          }) : (RR.pressHints.primary && JR.push({
            actions: ["inventoryPrimary"],
            labelKey: RR.pressHints.primary
          }), RR.pressHints.secondary && JR.push({
            actions: ["inventorySecondary"],
            labelKey: RR.pressHints.secondary
          }));
          const yR = null === (GR = RR.pressHints) || void 0 === GR ? void 0 : GR.back;
          yR && JR.push({
            actions: ["inventoryClose"],
            labelKey: yR
          });
          const tR = [];
          RR.openButtonCloses && tR.push("inventory"), yR || tR.push("inventoryClose"), tR.length > 0 && JR.push({
            actions: tR,
            labelKey: "inventoryClose"
          })
        }
        return JR.push({
          actions: ["inventoryPanelPrevious", "inventoryPanelNext"],
          labelKey: "inventoryPanels"
        }), RR.hasCategories ? JR.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryCategory"
        }) : RR.hasList && JR.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryPage"
        }), JR
      };
    var TR = GR(10018),
      sR = GR(3386);
    class hR {
      constructor(RR) {
        this.probes = RR, this.byContainer = new Map, this.byParent = new Map
      }
      find(RR, JR) {
        const GR = gR(RR, "y", JR);
        if (!GR) return null;
        let yR = this.byContainer.get(GR);
        return yR || (this.probes.push({
          element: GR,
          rect: yJ(GR.getBoundingClientRect())
        }), yR = {
          container: GR,
          box: DR(GR),
          group: GJ(GR)
        }, this.byContainer.set(GR, yR)), yR
      }
      findForParent(RR, JR) {
        let GR = this.byParent.get(RR);
        return void 0 === GR && (GR = this.find(RR, JR), this.byParent.set(RR, GR)), GR
      }
    }
    const RJ = new WeakMap;
    let JJ = 0;
    const GJ = RR => {
        let JR = RJ.get(RR);
        return JR || (JR = "el:" + JJ++, RJ.set(RR, JR)), JR
      },
      yJ = RR => ({
        left: RR.left,
        top: RR.top,
        width: RR.width,
        height: RR.height
      }),
      tJ = RR => RR.width > 0 && RR.height > 0,
      uJ = (RR, JR) => tJ(RR) && RR.left + RR.width > 0 && RR.top + RR.height > 0 && RR.left < JR.width && RR.top < JR.height,
      ZJ = (RR, JR, GR) => {
        const yR = RR.top + RR.height / 2;
        return uJ(RR, JR) && (!GR || yR >= GR.top && yR <= GR.bottom)
      },
      qJ = RR => ({
        x: RR.left + RR.width / 2,
        y: RR.top + RR.height / 2
      }),
      iJ = (RR, JR, GR) => RR < 0 ? GR >= 0 ? 0 : JR - 1 : ((RR + GR) % JR + JR) % JR,
      fJ = RR => "Left" === RR || "Right" === RR,
      VJ = (RR, JR, GR) => {
        const yR = fJ(GR),
          tR = yR ? RR.top : RR.left,
          uR = yR ? RR.height : RR.width,
          ZR = yR ? JR.top : JR.left,
          qR = yR ? JR.height : JR.width,
          iR = Math.max(0, Math.max(ZR - (tR + uR), tR - (ZR + qR)));
        return uR > 1.5 * qR ? {
          gap: iR,
          offset: Math.max(0, ZR - tR) + .1 * Math.max(0, tR - ZR)
        } : {
          gap: iR,
          offset: Math.abs(ZR + qR / 2 - (tR + uR / 2))
        }
      },
      KJ = (RR, JR, GR) => {
        const yR = ((RR, JR, GR) => {
          const yR = qJ(RR),
            tR = qJ(JR),
            uR = fJ(GR) ? Math.min(RR.width, JR.width) / 4 : Math.min(RR.height, JR.height) / 4;
          switch (GR) {
            case "Right":
              return tR.x - yR.x >= uR ? Math.max(0, JR.left - (RR.left + RR.width)) : null;
            case "Left":
              return yR.x - tR.x >= uR ? Math.max(0, RR.left - (JR.left + JR.width)) : null;
            case "Down":
              return tR.y - yR.y >= uR ? Math.max(0, JR.top - (RR.top + RR.height)) : null;
            case "Up":
              return yR.y - tR.y >= uR ? Math.max(0, RR.top - (JR.top + JR.height)) : null
          }
        })(RR, JR, GR);
        if (null === yR) return null;
        const tR = VJ(RR, JR, GR);
        return yR + 3 * tR.gap + .5 * tR.offset
      },
      wJ = (RR, JR) => JR.visible || null !== JR.scrollGroup && JR.scrollGroup === RR.scrollGroup,
      rJ = (RR, JR, GR, yR) => {
        let tR = null,
          uR = 1 / 0;
        for (const ZR of JR) {
          if (ZR.key === RR.key || !wJ(RR, ZR) || !yR(ZR)) continue;
          const JR = KJ(RR.rect, ZR.rect, GR);
          null !== JR && JR < uR && (tR = ZR, uR = JR)
        }
        return tR
      },
      eJ = (RR, JR, GR) => {
        const yR = rJ(RR, JR, GR, (() => !0));
        if (!yR || fJ(GR) || null === RR.scrollGroup || yR.scrollGroup === RR.scrollGroup) return yR;
        const tR = rJ(RR, JR, GR, (JR => 0 === VJ(RR.rect, JR.rect, GR).gap));
        return null !== tR && void 0 !== tR ? tR : yR
      },
      aJ = (RR, JR, GR) => {
        let yR = null,
          tR = 1 / 0;
        for (const uR of JR) {
          if (!uR.visible || GR && !GR(uR)) continue;
          const JR = qJ(uR.rect),
            ZR = Math.hypot(JR.x - RR.x, JR.y - RR.y);
          ZR < tR && (yR = uR, tR = ZR)
        }
        return yR
      },
      LJ = RR => {
        const {
          rect: JR,
          clip: GR
        } = RR;
        if (!GR) return JR;
        const yR = Math.max(JR.left, GR.left),
          tR = Math.max(JR.top, GR.top);
        return {
          left: yR,
          top: tR,
          width: Math.min(JR.left + JR.width, GR.left + GR.width) - yR,
          height: Math.min(JR.top + JR.height, GR.top + GR.height) - tR
        }
      },
      nJ = (RR, JR) => JR.x >= RR.left && JR.x < RR.left + RR.width && JR.y >= RR.top && JR.y < RR.top + RR.height,
      UJ = (RR, JR) => {
        let GR = null,
          yR = 1 / 0;
        for (const tR of JR) {
          const JR = LJ(tR);
          (tR.visible || tR.clip) && nJ(JR, RR) && (JR.width * JR.height < yR && (GR = tR, yR = JR.width * JR.height))
        }
        return GR
      },
      WJ = RR => {
        let JR = null;
        for (const GR of RR) {
          if (!GR.visible) continue;
          if (!JR) {
            JR = GR;
            continue
          }
          const RR = Math.min(JR.rect.height, GR.rect.height) / 2,
            yR = GR.rect.top - JR.rect.top;
          (yR < -RR || Math.abs(yR) <= RR && GR.rect.left < JR.rect.left) && (JR = GR)
        }
        return JR
      },
      AJ = (RR, JR, GR, yR, tR) => {
        const uR = tR % JR,
          ZR = Math.floor(tR / JR);
        return {
          left: RR.left + uR * GR,
          top: RR.top + ZR * yR,
          width: RR.width,
          height: RR.height
        }
      },
      CJ = ".EntireInventoryWrapper .Inventory, .HotBarGameItemsContainer",
      XJ = ".LazyLoadedItemWrapper",
      MJ = ["[data-inven-idx]", "[data-recipe-key]", "[role=button]", "button", "input:not([type=hidden])", "textarea", ".CreativeCategoryTab", ".CreativeCategoryDropdownButton", ".CreativeCategoryDropdownOption", "[data-craft-ingredient]"].join(","),
      BJ = [
        ["hotbar", ".HotBarGameItemsContainer"],
        ["gameButtons", ".ClientGameInventoryButtons"],
        ["categories", ".CreativeCategoryRail"],
        ["recipe", ".CraftableInfo"],
        ["armour", ".ArmourItemSlots"],
        ["main", ".InvenBodyRight"],
        ["left", ".InvenLeftSide"]
      ],
      lJ = ["gameButtons", "categories", "left", "recipe", "armour", "main", "hotbar"],
      pJ = RR => RR.hasAttribute("data-inven-idx") ? "slot" : RR.hasAttribute("data-recipe-key") ? "recipe" : RR.hasAttribute("data-craft-ingredient") || (0, sR.u)(RR) ? "info" : (0, dR.M)(RR) ? "textField" : "button",
      gJ = (RR, JR) => "slot" === JR ? Number(RR.getAttribute("data-inven-idx")) : null,
      bJ = RR => RR.matches(XJ) ? RR.querySelector(MJ) : RR,
      vJ = RR => {
        var JR, GR;
        return {
          element: RR,
          recipe: null !== (JR = RR && (null === (GR = bJ(RR)) || void 0 === GR ? void 0 : GR.getAttribute("data-recipe-key"))) && void 0 !== JR ? JR : null
        }
      },
      OJ = RR => {
        const JR = bJ(RR);
        if (!JR) return {
          kind: "pending",
          idx: null
        };
        const GR = pJ(JR);
        return {
          kind: GR,
          idx: gJ(JR, GR)
        }
      },
      xJ = RR => {
        const JR = [];
        for (const [GR, yR] of BJ) {
          RR.matches(yR) && JR.push([GR, RR]);
          for (const tR of RR.querySelectorAll(yR)) JR.push([GR, tR])
        }
        return JR
      },
      NJ = (RR, JR) => {
        for (const [GR, yR] of RR)
          if (yR.contains(JR)) return GR;
        return "other"
      },
      DJ = (RR, JR, GR, yR, tR, uR, ZR, qR) => {
        var iR;
        const fR = RR.children,
          VR = yJ(fR[0].getBoundingClientRect()),
          KR = [{
            element: fR[0],
            rect: VR
          }];
        if (uR.push(KR[0]), 0 === VR.width || 0 === VR.height) return;
        let wR = 1;
        for (; wR < fR.length && Math.abs(fR[wR].getBoundingClientRect().top - VR.top) < 1;) wR++;
        const rR = RR => {
            const JR = {
              element: fR[RR],
              rect: yJ(fR[RR].getBoundingClientRect())
            };
            return uR.push(JR), KR.push(JR), JR.rect
          },
          eR = wR > 1 ? rR(1).left - VR.left : VR.width,
          aR = fR.length > wR ? rR(wR).top - VR.top : VR.height,
          LR = ZR.find(RR, JR);
        let nR = null;
        if (LR) {
          var UR;
          const {
            container: RR,
            box: JR
          } = LR;
          nR = null !== (UR = qR.get(RR)) && void 0 !== UR ? UR : null, nR || (nR = {
            top: RR.scrollTop,
            left: RR.scrollLeft,
            box: JR,
            viewport: yR,
            targets: [],
            probes: [],
            holdsOthers: !1
          }, qR.set(RR, nR)), nR.probes.push(...KR)
        }
        const WR = tR.length;
        for (let MR = 0; MR < fR.length; MR++) {
          var AR, CR, XR;
          const RR = fR[MR],
            JR = AJ(VR, wR, eR, aR, MR),
            uR = RR.firstElementChild ? RR.querySelector(MJ) : null,
            ZR = uR ? pJ(uR) : "pending";
          tR.push({
            key: GJ(RR),
            rect: JR,
            panel: GR,
            scrollGroup: null !== (AR = null === LR || void 0 === LR ? void 0 : LR.group) && void 0 !== AR ? AR : null,
            visible: ZJ(JR, yR, null === LR || void 0 === LR ? void 0 : LR.box),
            clip: null !== (CR = null === LR || void 0 === LR ? void 0 : LR.box) && void 0 !== CR ? CR : null,
            element: RR,
            kind: ZR,
            idx: uR ? gJ(uR, ZR) : null,
            scrollContainer: null !== (XR = null === LR || void 0 === LR ? void 0 : LR.container) && void 0 !== XR ? XR : null
          })
        }
        null === (iR = nR) || void 0 === iR || iR.targets.push(...tR.slice(WR))
      },
      HJ = RR => RR instanceof Element && null !== RR.closest(XJ),
      oJ = RR => null !== RR.scrollContainer && HJ(RR.element);
    class cJ {
      constructor() {
        this.latched = null, this.presses = 0
      }
      press(RR, JR, GR, yR) {
        this.latched = {
          source: RR,
          focusKey: JR,
          sinceMs: GR,
          hold: {
            id: ++this.presses,
            holdMs: yR
          }
        }
      }
      update(RR, JR, GR) {
        const yR = this.latched;
        return yR ? RR && JR === yR.focusKey ? GR - yR.sinceMs < yR.hold.holdMs ? null : (this.latched = null, yR.source) : (this.latched = null, null) : null
      }
      getHold() {
        var RR, JR;
        return null !== (RR = null === (JR = this.latched) || void 0 === JR ? void 0 : JR.hold) && void 0 !== RR ? RR : null
      }
      reset() {
        this.latched = null
      }
    }
    var PJ = GR(10026);
    const IJ = {
        kind: "none"
      },
      mJ = RR => ({
        x: RR.clientX,
        y: RR.clientY
      }),
      zJ = () => 2 * (parseFloat(getComputedStyle(document.documentElement).fontSize) || 16);
    class SJ {
      constructor() {
        this.hovered = IJ, this.signature = "", this.holding = !1, this.lastPoint = {
          clientX: 0,
          clientY: 0
        }
      }
      sync(RR, JR, GR, yR, tR) {
        const uR = null !== JR ? {
            kind: "slot",
            idx: JR
          } : GR ? {
            kind: "element",
            element: GR
          } : IJ,
          ZR = `${tR}|${Math.round(yR.clientX)},${Math.round(yR.clientY)}`,
          qR = (iR = this.hovered, fR = uR, "slot" === iR.kind && "slot" === fR.kind ? iR.idx === fR.idx : "element" === iR.kind && "element" === fR.kind ? iR.element === fR.element : iR.kind === fR.kind);
        var iR, fR;
        if (qR && ZR === this.signature) return;
        const VR = !qR || tR !== this.holding || "" === this.signature;
        this.signature = ZR, this.holding = tR, this.lastPoint = yR;
        const KR = this.hovered;
        if (this.hovered = uR, "slot" === uR.kind) return this.leaveElement(KR, null, yR), void(VR ? RR.hover(uR.idx, yR) : RR.moveTo(yR));
        if (qR) return void("element" === uR.kind ? (0, dR.s)(uR.element, uR.element, mJ(yR)) : RR.hover(null, yR));
        RR.hover(null, yR);
        const wR = "element" === uR.kind ? uR.element : null;
        "element" === KR.kind ? (0, dR.s)(KR.element, wR, mJ(yR)) : wR && (0, dR.s)(null, wR, mJ(yR))
      }
      invalidate() {
        this.signature = ""
      }
      clear(RR) {
        const JR = this.hovered;
        this.hovered = IJ, this.signature = "", "none" !== JR.kind && (this.leaveElement(JR, null, this.lastPoint), RR && "slot" === JR.kind && RR.hover(null, this.lastPoint))
      }
      leaveElement(RR, JR, GR) {
        "element" === RR.kind && (0, dR.s)(RR.element, JR, mJ(GR))
      }
    }
    class jJ {
      constructor() {
        this.lastTiltedMs = -1 / 0
      }
      update(RR, JR) {
        MR(RR) && (this.lastTiltedMs = JR)
      }
      allowsClick(RR) {
        return RR - this.lastTiltedMs > 150
      }
    }
    class dJ {
      constructor() {
        this.remainder = 0, this.container = null
      }
      isScrolling(RR) {
        return 0 !== (0, eR.k)(RR, .2).y
      }
      step(RR, JR, GR) {
        RR !== this.container && (this.container = RR, this.remainder = 0);
        const yR = BR(JR, GR).y;
        if (0 === yR) return this.remainder = 0, !1;
        const tR = this.remainder + yR,
          uR = Math.trunc(tR);
        if (this.remainder = tR - uR, 0 === uR) return !1;
        const ZR = RR.scrollTop;
        return RR.scrollTop = ZR + uR, RR.scrollTop !== ZR
      }
      current() {
        var RR;
        return null !== (RR = this.container) && void 0 !== RR && RR.isConnected ? this.container : null
      }
      reset() {
        this.remainder = 0, this.container = null
      }
    }
    var EJ = GR(10028);
    const YJ = "[data-pad-inventory-default]",
      kJ = ".HotBarGameItemsContainer .InvenItem.Selected",
      QJ = {
        Up: {
          x: 0,
          y: -1
        },
        Down: {
          x: 0,
          y: 1
        },
        Left: {
          x: -1,
          y: 0
        },
        Right: {
          x: 1,
          y: 0
        }
      },
      FJ = [
        ["primary", "inventoryPrimary"],
        ["secondary", "inventorySecondary"],
        ["quickMove", "inventoryQuickMove"],
        ["hotbarSwap", "inventoryHotbarSwap"],
        ["back", "inventoryClose"],
        ["openButton", "inventory"]
      ],
      TJ = ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryHotbarSwap", "inventoryClose", "inventoryDrop"],
      sJ = ["inventoryPanelPrevious", "inventoryPanelNext", "menuPageUp", "menuPageDown"],
      hJ = [...TJ, ...sJ],
      RG = () => {
        return RR = (0, VR.h)("inventory"), !hJ.map(VR.h).includes(RR) && !(0, eR.G)(RR);
        var RR
      },
      JG = new Set(["slotPrimary", "slotSecondary", "slotQuickMove", "pressPrimary", "pressSecondary", "openKeyboard"]),
      GG = (RR, JR) => {
        const GR = !(null === JR || void 0 === JR || !JR.isHolding());
        return function(RR, JR) {
          const GR = RR.find((RR => RR.visible && JR(RR)));
          if (GR) return GR;
          for (var yR = arguments.length, tR = new Array(yR > 2 ? yR - 2 : 0), uR = 2; uR < yR; uR++) tR[uR - 2] = arguments[uR];
          for (const ZR of tR) {
            const JR = WJ(RR.filter(ZR));
            if (JR) return JR
          }
          return WJ(RR)
        }(RR, (RR => {
          const {
            element: JR
          } = RR;
          return JR.matches(YJ) || null !== JR.querySelector(YJ) || JR.matches(kJ)
        }), (RR => "slot" === RR.kind ? GR || null !== RR.idx && !(null === JR || void 0 === JR || !JR.hasItemAt(RR.idx)) : "recipe" === RR.kind || "pending" === RR.kind), (RR => "slot" === RR.kind || "button" === RR.kind))
      };
    class yG {
      constructor() {
        this.set = null, this.observer = new MutationObserver((RR => {
          RR.some((RR => !HJ(RR.target))) && (this.set = null)
        })), this.invalidate = () => {
          this.set = null
        }, this.onScroll = RR => {
          this.scrolled(RR.target)
        }
      }
      get() {
        if (!this.set) {
          this.set = (() => {
            const RR = [],
              JR = [];
            let GR = !1;
            const yR = {
                width: window.innerWidth,
                height: window.innerHeight
              },
              tR = new Map,
              uR = new hR(JR);
            for (const KR of document.querySelectorAll(CJ)) {
              const VR = xJ(KR);
              GR ||= null !== KR.querySelector(".CreativeCategoryTab");
              for (const GR of KR.querySelectorAll(`${XJ}:first-child`)) {
                const ZR = GR.parentElement;
                DJ(ZR, KR, NJ(VR, ZR), yR, RR, JR, uR, tR)
              }
              for (const GR of KR.querySelectorAll(MJ)) {
                var ZR, qR, iR, fR;
                if (GR.closest(XJ) || GR.closest("[data-pad-ignore]")) continue;
                const wR = null === (ZR = GR.parentElement) || void 0 === ZR ? void 0 : ZR.closest(MJ);
                if (wR && KR.contains(wR)) continue;
                const rR = pJ(GR),
                  eR = gJ(GR, rR);
                if (-1 === eR) continue;
                const aR = yJ(GR.getBoundingClientRect());
                JR.push({
                  element: GR,
                  rect: aR
                });
                const LR = uR.findForParent(GR.parentElement, KR),
                  nR = LR && !tR.has(LR.container) ? LR : null;
                (nR ? tJ(aR) : uJ(aR, yR)) && RR.push({
                  key: GJ(GR),
                  rect: aR,
                  panel: NJ(VR, GR),
                  scrollGroup: null !== (qR = null === nR || void 0 === nR ? void 0 : nR.group) && void 0 !== qR ? qR : null,
                  visible: ZJ(aR, yR, null === nR || void 0 === nR ? void 0 : nR.box),
                  clip: null !== (iR = null === nR || void 0 === nR ? void 0 : nR.box) && void 0 !== iR ? iR : null,
                  element: GR,
                  kind: rR,
                  idx: eR,
                  scrollContainer: null !== (fR = null === nR || void 0 === nR ? void 0 : nR.container) && void 0 !== fR ? fR : null
                })
              }
            }
            for (const [KR, wR] of tR) wR.holdsOthers = JR.some((RR => RR.element !== KR && KR.contains(RR.element) && !RR.element.closest(XJ)));
            const VR = new Map;
            for (const KR of RR) VR.set(KR.element, KR);
            return {
              targets: RR,
              byElement: VR,
              hasCategories: GR,
              probes: JR,
              scrollers: tR
            }
          })(), this.observer.disconnect();
          for (const RR of document.querySelectorAll(CJ)) this.observer.observe(RR, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["class", "disabled", "aria-disabled", "tabindex", "data-inven-idx"]
          })
        }
        return this.set
      }
      scrolled(RR) {
        !this.set || RR instanceof Element && ((RR, JR) => {
          const GR = RR.scrollers.get(JR);
          if (!GR || GR.holdsOthers || JR.scrollLeft !== GR.left) return !1;
          const yR = JR.scrollTop - GR.top;
          if (0 === yR) return !0;
          GR.top = JR.scrollTop;
          for (const tR of GR.probes) tR.rect.top -= yR;
          for (const tR of GR.targets) tR.rect.top -= yR, tR.visible = ZJ(tR.rect, GR.viewport, GR.box);
          return !0
        })(this.set, RR) || (this.set = null)
      }
      revalidate() {
        this.set && this.set.probes.some((RR => {
          return JR = RR.rect, GR = RR.element.getBoundingClientRect(), !(JR.left === GR.left && JR.top === GR.top && JR.width === GR.width && JR.height === GR.height);
          var JR, GR
        })) && (this.set = null)
      }
      disconnect() {
        this.observer.disconnect(), this.set = null
      }
    }
    const tG = new class {
        constructor() {
          this.focused = null, this.focusTarget = null, this.lastRect = null, this.panelMemory = new Map, this.reopenSlotIdx = null, this.dpadTimers = new Map(eR.B.map((RR => [RR, (0, aR.c)(eR.F)]))), this.stickRepeat = new eR.b((0, aR.c)(eR.db)), this.pageUpTimer = (0, aR.c)(eR.bb), this.pageDownTimer = (0, aR.c)(eR.bb), this.stickGate = new CR, this.pointer = null, this.activePress = null, this.dropLatch = new cJ, this.scroller = new dJ, this.scrollStickClick = new jJ, this.hover = new SJ, this.lastRealPointer = null, this.placeAfterCategory = null, this.hotbarPick = null, this.ring = new SR, this.targets = new yG, this.hasCategories = !1, this.wasShowing = !1, this.state = PJ.b, this.isActive = () => (0, TR.i)(), this.isShowing = () => "inventory" === KR.e.getActiveConsumerName() && (0, rR.k)(), this.getState = () => this.state, this.isSteppingSlots = () => this.isShowing() && null === this.pointer, this.onDeactivate = () => {
            this.endInteraction((0, TR.e)()), (0, TR.i)() || this.forgetSurface()
          }, this.forgetSurface = () => {
            var RR;
            this.reopenSlotIdx = null !== (RR = this.focused ? OJ(this.focused).idx : null) && void 0 !== RR ? RR : this.reopenSlotIdx, this.focused = null, this.focusTarget = null, this.lastRect = null, this.placeAfterCategory = null, (0, TR.u)(), this.panelMemory.clear(), this.targets.disconnect()
          }, this.onFrame = RR => {
            (0, qR.unstable_batchedUpdates)((() => {
              this.frame(RR)
            }))
          }, this.shouldBlockRealPointer = RR => RR.isTrusted && !(0, nR.z)(RR) && this.isShowing(), this.noteRealPointer = RR => {
            RR instanceof MouseEvent && RR.isTrusted && !(0, nR.z)(RR) && (this.lastRealPointer ??= {
              x: 0,
              y: 0
            }, this.lastRealPointer.x = RR.clientX, this.lastRealPointer.y = RR.clientY)
          }, this.wakePressActs = RR => {
            var JR;
            return RR === (0, VR.h)("inventoryClose") ? !(null !== (JR = (0, TR.e)()) && void 0 !== JR && JR.isHolding()) : !(RR !== (0, VR.h)("inventory") || !RG()) || ((0, eR.G)(RR) ? this.isNavButton(RR) : sJ.some((JR => (0, VR.h)(JR) === RR)))
          }
        }
        frame(RR) {
          var JR, GR, yR, tR, uR;
          const ZR = (0, TR.e)();
          if (!(0, rR.k)()) return void(this.wasShowing && (this.endInteraction(ZR), this.rehoverRealPointer()));
          this.wasShowing = !0, this.applyFocusRequest(), RR.wokeDevice && this.focusWakePointer(!(null === ZR || void 0 === ZR || !ZR.isHolding())), this.applyCategoryPlace(), this.ensureFocus(), "cursor" !== (0, wR.l)().inventoryNavigation || this.pointer || this.engagePointer();
          const qR = performance.now();
          this.handleNavigation(RR, qR), this.handlePanels(RR), this.handlePaging(RR, qR), this.handleScroll(RR), this.handleButtons(RR, qR, ZR), this.applyFocusRequest(), this.pointer && this.hoverAtPointer();
          const iR = this.ensureFocus(),
            fR = this.focusContext(ZR);
          this.ring.show(iR);
          const KR = "slot" === fR.kind ? fR.idx : null,
            eR = null !== (JR = null === (GR = fR.actionElement) || void 0 === GR ? void 0 : GR.querySelector(".DoCraftItem")) && void 0 !== JR ? JR : fR.actionElement;
          this.pointer ? (this.hover.sync(ZR, KR, eR, ((RR, JR) => {
            const GR = JR ? zJ() : 0;
            return {
              clientX: RR.x - GR,
              clientY: RR.y - GR
            }
          })(this.pointer, fR.holding), fR.holding), YR.set({
            x: this.pointer.x,
            y: this.pointer.y,
            visible: !0,
            pressed: RR.isHeld((0, VR.h)("inventoryPrimary"))
          })) : iR && this.focused && this.hover.sync(ZR, KR, eR, ((RR, JR) => {
            if (!JR) return {
              clientX: RR.left + RR.width - 10,
              clientY: RR.top + RR.height / 2 - 10
            };
            const GR = zJ();
            return {
              clientX: RR.left + RR.width / 2 - GR,
              clientY: RR.top + RR.height / 2 - GR
            }
          })(iR, fR.holding), fR.holding), this.publishState({
            showing: !0,
            kind: fR.kind,
            holding: fR.holding,
            slotHasItem: fR.slotHasItem,
            pressHints: null !== (yR = null === (tR = fR.press) || void 0 === tR ? void 0 : tR.hints) && void 0 !== yR ? yR : null,
            hasCategories: this.hasCategories,
            hasList: !!this.focusTarget && oJ(this.focusTarget),
            openButtonCloses: RG(),
            steppingSlots: null === this.pointer,
            quickMoveToHotbar: "slot" === fR.kind && !(null === (uR = fR.actionElement) || void 0 === uR || !uR.closest(".CreativeItemSlots")),
            dropStackHold: this.dropLatch.getHold(),
            hotbarPicking: null !== this.hotbarPick
          })
        }
        focusWakePointer(RR) {
          var JR;
          const GR = (0, rR.e)();
          if (!GR) return;
          this.targets.revalidate();
          const yR = this.getTargets().targets;
          this.setFocus(null !== (JR = UJ(GR, yR)) && void 0 !== JR ? JR : RR ? aJ(GR, yR, (RR => {
            let {
              rect: JR
            } = RR;
            const yR = Math.max(JR.left - GR.x, 0, GR.x - (JR.left + JR.width)),
              tR = Math.max(JR.top - GR.y, 0, GR.y - (JR.top + JR.height));
            return Math.hypot(yR, tR) <= Math.min(JR.width, JR.height) / 2
          })) : null, !1), "cursor" === (0, wR.l)().inventoryNavigation && (this.pointer = {
            x: GR.x,
            y: GR.y,
            speedRamp: 0
          })
        }
        rehoverRealPointer() {
          const RR = this.lastRealPointer;
          if (!RR || "keyboardMouse" !== iR.d.get("activeInputDevice")) return;
          const JR = document.elementFromPoint(RR.x, RR.y);
          JR && (0, dR.s)(null, JR, RR)
        }
        endInteraction(RR) {
          this.wasShowing = !1, this.hotbarPick = null, this.releasePress(), this.dropLatch.reset(), this.scroller.reset();
          for (const JR of this.dpadTimers.values()) JR.reset();
          this.stickRepeat.reset(), this.pageUpTimer.reset(), this.pageDownTimer.reset(), this.hover.clear(RR), this.ring.hide(), this.releasePointer(), this.publishState(PJ.b)
        }
        getTargets() {
          const RR = this.targets.get();
          return this.hasCategories = RR.hasCategories, RR
        }
        currentTarget() {
          var RR;
          return this.focused && null !== (RR = this.getTargets().byElement.get(this.focused)) && void 0 !== RR ? RR : null
        }
        readFocusRect() {
          const RR = this.focused;
          if (null === RR || void 0 === RR || !RR.isConnected || !RR.closest(CJ)) return null;
          const JR = RR.getBoundingClientRect();
          return JR.width > 0 && JR.height > 0 ? {
            left: JR.left,
            top: JR.top,
            width: JR.width,
            height: JR.height
          } : null
        }
        ensureFocus() {
          const RR = this.readFocusRect();
          if (RR || this.pointer) return RR;
          const {
            targets: JR,
            byElement: GR
          } = this.getTargets();
          let yR = null,
            tR = !1;
          if (this.lastRect) yR = aJ(qJ(this.lastRect), JR);
          else {
            var uR, ZR;
            const RR = ((RR, JR) => {
                const GR = document.querySelector(".EntireInventoryWrapper [data-pad-inventory-start]");
                return GR ? GG(RR.filter((RR => GR.contains(RR.element))), JR) : null
              })(JR, (0, TR.e)()),
              qR = JR.find((RR => null !== RR.idx && RR.idx === this.reopenSlotIdx)),
              iR = document.querySelector(kJ);
            tR = null !== RR || void 0 !== qR, yR = null !== (uR = null !== (ZR = null !== RR && void 0 !== RR ? RR : qR) && void 0 !== ZR ? ZR : iR && GR.get(iR)) && void 0 !== uR ? uR : WJ(JR)
          }
          return this.setFocus(yR, tR), this.lastRect
        }
        setFocus(RR) {
          let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          RR && (this.focused = RR.element, this.focusTarget = RR, this.panelMemory.set(RR.panel, RR.element), JR && RR.scrollContainer && ((RR, JR) => {
            const GR = RR.getBoundingClientRect(),
              yR = DR(JR),
              tR = JR.scrollTop;
            return GR.top < yR.top ? JR.scrollTop -= yR.top - GR.top : GR.bottom > yR.bottom && (JR.scrollTop += GR.bottom - yR.bottom), JR.scrollTop !== tR
          })(RR.element, RR.scrollContainer) && this.targets.invalidate(), this.lastRect = this.readFocusRect(), this.followFocusJump())
        }
        followFocusJump() {
          if (this.pointer)
            if ("cursor" === (0, wR.l)().inventoryNavigation) {
              if (this.lastRect) {
                const RR = qJ(this.lastRect);
                this.pointer = {
                  x: RR.x,
                  y: RR.y,
                  speedRamp: 0
                }
              }
            } else this.releasePointer()
        }
        engagePointer() {
          const RR = this.lastRect ? qJ(this.lastRect) : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          };
          this.pointer = {
            x: RR.x,
            y: RR.y,
            speedRamp: 0
          }
        }
        releasePointer() {
          this.pointer = null, YR.hide()
        }
        hoverAtPointer() {
          var RR;
          const JR = UJ(this.pointer, this.getTargets().targets);
          this.focusTarget = JR, (null === JR || void 0 === JR ? void 0 : JR.element) !== this.focused && (this.focused = null !== (RR = null === JR || void 0 === JR ? void 0 : JR.element) && void 0 !== RR ? RR : null, JR && (this.panelMemory.set(JR.panel, JR.element), this.lastRect = this.readFocusRect()))
        }
        moveCursor(RR, JR) {
          const GR = this.focusTarget,
            yR = GR && (0, wR.l)().cursorMagnetism ? qJ(LJ(GR)) : null;
          this.pointer = XR(this.pointer, {
            stick: RR.leftStick,
            moveDeadzone: (0, wR.l)().moveDeadzone,
            dpad: JR,
            dtMs: RR.dtMs,
            cursorSpeedPercent: (0, wR.l)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: {
              overInteractive: !1,
              magnetTarget: yR
            }
          })
        }
        move(RR) {
          this.targets.revalidate();
          const JR = this.currentTarget();
          JR && this.setFocus(eJ(JR, this.getTargets().targets, RR))
        }
        step(RR) {
          const JR = this.pointer;
          if (JR && (this.releasePointer(), !this.focused)) return this.targets.revalidate(), void this.setFocus(((RR, JR, GR) => {
            var yR;
            const tR = {
              key: "",
              rect: {
                left: RR.x,
                top: RR.y,
                width: 0,
                height: 0
              },
              panel: "",
              scrollGroup: null,
              visible: !0,
              clip: null
            };
            return null !== (yR = eJ(tR, JR, GR)) && void 0 !== yR ? yR : aJ(RR, JR)
          })(JR, this.getTargets().targets, RR));
          this.move(RR)
        }
        isNavButton(RR) {
          return !TJ.some((JR => (0, VR.h)(JR) === RR)) && !(RR === (0, VR.h)("inventory") && RG())
        }
        handleNavigation(RR, JR) {
          const GR = (0, wR.l)().inventoryNavigation,
            yR = {
              x: 0,
              y: 0
            };
          let tR = null;
          for (const iR of eR.B) {
            const uR = this.isNavButton(iR) && RR.isHeld(iR);
            uR && (yR.x += QJ[iR].x, yR.y += QJ[iR].y), this.dpadTimers.get(iR).update(uR, JR) && "cursor" !== GR && (tR ??= iR)
          }
          const uR = this.stickGate.update(RR.leftStick, (0, wR.l)().moveDeadzone);
          if (tR && (this.step(tR), this.stickGate.lock()), "slot" !== GR) {
            const JR = ((RR, JR, GR, yR) => "hybrid" !== RR ? "cursor" === RR : !yR && (JR || GR))(GR, null !== this.pointer, uR, null !== tR);
            return JR && !this.pointer && this.engagePointer(), void(this.pointer && this.moveCursor(RR, "cursor" === GR ? yR : {
              x: 0,
              y: 0
            }))
          }
          const ZR = (0, eR.k)(RR.leftStick, (0, wR.l)().moveDeadzone),
            qR = this.stickRepeat.update(uR ? (0, eR.eb)(ZR) : null, JR);
          qR && this.move(qR)
        }
        applyCategoryPlace() {
          const RR = this.placeAfterCategory;
          if (!RR) return;
          this.placeAfterCategory = null, this.targets.invalidate();
          const JR = aJ(qJ(RR.rect), this.getTargets().targets, (JR => JR.scrollGroup === RR.scrollGroup));
          this.setFocus(JR, !1)
        }
        applyFocusRequest() {
          const RR = (0, TR.u)();
          RR && (this.targets.invalidate(), this.setFocus((0, TR.c)(this.getTargets().targets, RR)))
        }
        handlePanels(RR) {
          var JR, GR, yR;
          const tR = RR.wasPressed((0, VR.h)("inventoryPanelPrevious")),
            uR = RR.wasPressed((0, VR.h)("inventoryPanelNext"));
          if (!tR && !uR) return;
          const {
            targets: ZR
          } = this.getTargets(), qR = (iR = ((RR, JR) => {
            const GR = [];
            for (const tR of RR) tR.visible && !GR.includes(tR.panel) && GR.push(tR.panel);
            const yR = RR => {
              const yR = JR.indexOf(RR);
              return -1 === yR ? JR.length + GR.indexOf(RR) : yR
            };
            return GR.sort(((RR, JR) => yR(RR) - yR(JR)))
          })(ZR, lJ), fR = null !== (JR = null === (GR = this.focusTarget) || void 0 === GR ? void 0 : GR.panel) && void 0 !== JR ? JR : null, KR = uR ? 1 : -1, 0 === iR.length ? null : iR[iJ(null === fR ? -1 : iR.indexOf(fR), iR.length, KR)]);
          var iR, fR, KR;
          if (null === qR) return;
          const wR = this.panelMemory.get(qR),
            rR = ZR.filter((RR => RR.panel === qR)),
            eR = null !== (yR = rR.find((RR => RR.element === wR && RR.visible))) && void 0 !== yR ? yR : GG(rR, (0, TR.e)());
          this.setFocus(eR)
        }
        handlePaging(RR, JR) {
          const GR = (0, VR.h)("menuPageUp"),
            yR = (0, VR.h)("menuPageDown"),
            tR = this.pageUpTimer.update(RR.isHeld(GR), JR),
            uR = this.pageDownTimer.update(RR.isHeld(yR), JR);
          if (!tR && !uR) return;
          const ZR = uR ? 1 : -1;
          if (!RR.wasPressed(uR ? yR : GR) && this.hasCategories) return;
          if ((RR => {
              const JR = Array.from(document.querySelectorAll(".EntireInventoryWrapper .CreativeCategoryTab"));
              if (0 === JR.length) return !1;
              const GR = JR.findIndex((RR => RR.classList.contains("Selected"))),
                yR = JR[iJ(GR, JR.length, RR)];
              return (0, dR.p)(yR, (0, dR.E)(yR)), !0
            })(ZR)) {
            var qR, iR;
            this.targets.invalidate();
            const RR = null !== (qR = null === (iR = this.focusTarget) || void 0 === iR ? void 0 : iR.scrollGroup) && void 0 !== qR ? qR : null,
              JR = this.readFocusRect();
            return void(this.placeAfterCategory = null !== RR && JR && !this.pointer ? {
              rect: JR,
              scrollGroup: RR
            } : null)
          }
          const {
            targets: fR
          } = this.getTargets(), KR = this.currentTarget(), wR = KR && oJ(KR) ? KR : fR.find((RR => oJ(RR) && RR.visible));
          if (!wR) return;
          const rR = ((RR, JR, GR, yR) => {
            if (null === RR.scrollGroup) return null;
            const tR = qJ(RR.rect),
              uR = tR.x,
              ZR = tR.y + ("Down" === GR ? yR : -yR);
            let qR = null,
              iR = 1 / 0;
            for (const fR of JR) {
              if (fR.scrollGroup !== RR.scrollGroup || fR.key === RR.key) continue;
              const JR = qJ(fR.rect);
              if ("Down" === GR ? JR.y <= tR.y : JR.y >= tR.y) continue;
              const yR = Math.hypot(JR.x - uR, JR.y - ZR);
              yR < iR && (qR = fR, iR = yR)
            }
            return qR
          })(wR, fR, ZR > 0 ? "Down" : "Up", wR.scrollContainer.clientHeight);
          this.setFocus(null !== rR && void 0 !== rR ? rR : wR)
        }
        handleScroll(RR) {
          var JR, GR, yR, tR, uR, ZR;
          if (!this.scroller.isScrolling(RR.rightStick)) return void this.scroller.reset();
          const {
            targets: qR
          } = this.getTargets(), iR = this.pointer, fR = !iR && this.focusTarget && oJ(this.focusTarget) ? this.focusTarget.scrollContainer : null, VR = iR && (null === (JR = qR.find((RR => RR.clip && nJ(RR.clip, iR)))) || void 0 === JR ? void 0 : JR.scrollContainer), KR = null !== (GR = null !== (yR = null !== (tR = this.scroller.current()) && void 0 !== tR ? tR : VR) && void 0 !== yR ? yR : fR) && void 0 !== GR ? GR : null === (uR = qR.find(oJ)) || void 0 === uR ? void 0 : uR.scrollContainer;
          if (!KR || !this.scroller.step(KR, RR.rightStick, RR.dtMs)) return;
          this.targets.scrolled(KR);
          const wR = iR || (null === (ZR = this.focusTarget) || void 0 === ZR ? void 0 : ZR.scrollContainer) !== KR ? null : this.readFocusRect();
          if (!wR) return;
          const rR = DR(KR),
            eR = qJ(wR);
          if (eR.y < rR.top || eR.y > rR.bottom) {
            const RR = this.focusTarget.scrollGroup,
              JR = aJ(eR, this.getTargets().targets, (JR => JR.scrollGroup === RR));
            this.setFocus(JR, !1)
          }
        }
        focusContext(RR) {
          const {
            kind: JR,
            idx: GR
          } = this.focused ? OJ(this.focused) : {
            kind: null,
            idx: null
          }, yR = this.focused ? bJ(this.focused) : null, tR = yR ? (0, EJ.b)(yR) : null;
          return {
            kind: JR,
            idx: GR,
            actionElement: yR,
            press: tR,
            hasPress: null !== tR,
            hasBack: !(null === tR || void 0 === tR || !tR.back),
            holding: RR.isHolding(),
            slotHasItem: null !== GR && RR.hasItemAt(GR)
          }
        }
        handleButtons(RR, JR, GR) {
          var yR, tR;
          if (!this.activePress || RR.isHeld(this.activePress.button) && (yR = this.activePress.target, tR = this.focused, null !== yR.recipe ? vJ(tR).recipe === yR.recipe : tR === yR.element) || this.releasePress(), this.scrollStickClick.update(RR.rightStick, JR), !this.handleHotbarPick(RR, GR)) {
            for (const [yR, tR] of FJ) {
              const uR = (0, VR.h)(tR);
              if (!RR.wasPressed(uR) || "openButton" === yR && !RG()) continue;
              if ("RS" === uR && !this.scrollStickClick.allowsClick(JR)) continue;
              const ZR = this.focusContext(GR),
                qR = QR(yR, ZR);
              qR && this.runIntent(qR, ZR, uR, GR)
            }
            this.handleDrop(RR, JR, GR)
          }
        }
        handleHotbarPick(RR, JR) {
          const GR = this.hotbarPick;
          if (!GR) return !1;
          const yR = RR.wasPressed((0, VR.h)("inventoryPrimary")) || RR.wasPressed((0, VR.h)("inventoryHotbarSwap"));
          if (!yR && !RR.wasPressed((0, VR.h)("inventoryClose")) && !JR.isHolding()) return !(RR.wasPressed((0, VR.h)("inventory")) && RG());
          const tR = this.focusTarget;
          yR && "hotbar" === (null === tR || void 0 === tR ? void 0 : tR.panel) && null !== tR.idx && tR.idx !== GR.idx && (JR.swapWithHotbar(tR.idx, GR.idx), this.afterAction()), this.hotbarPick = null;
          const uR = GR.element.isConnected ? this.getTargets().byElement.get(GR.element) : void 0;
          return uR && this.setFocus(uR), !0
        }
        startHotbarPick(RR) {
          var JR;
          const {
            targets: GR,
            byElement: yR
          } = this.getTargets(), tR = document.querySelector(kJ), uR = null !== (JR = tR && yR.get(tR)) && void 0 !== JR ? JR : GR.find((RR => "hotbar" === RR.panel));
          uR && this.focused && (this.hotbarPick = {
            idx: RR,
            element: this.focused
          }, this.setFocus(uR))
        }
        focusKey() {
          return this.focused ? GJ(this.focused) : null
        }
        handleDrop(RR, JR, GR) {
          const yR = (0, VR.h)("inventoryDrop");
          if (RR.wasPressed(yR)) {
            const RR = (tR = this.focusContext(GR)).holding ? {
              kind: "Qq"
            } : "slot" === tR.kind && tR.slotHasItem && null !== tR.idx ? {
              kind: "slot",
              idx: tR.idx
            } : null;
            return void(RR && (this.dropFrom(RR, !1, GR), this.dropLatch.press(RR, this.focusKey(), JR, LR.b[(0, wR.l)().tapHoldTime].dropStackMs), this.afterAction()))
          }
          var tR;
          const uR = this.dropLatch.update(RR.isHeld(yR), this.focusKey(), JR);
          uR && ((RR, JR, GR) => "Qq" === RR.kind ? JR : !JR && GR(RR.idx))(uR, GR.isHolding(), GR.hasItemAt) && (this.dropFrom(uR, !0, GR), this.afterAction())
        }
        dropFrom(RR, JR, GR) {
          "Qq" === RR.kind ? GR.dropHeld(JR, this.slotPoint()) : GR.dropSlot(RR.idx, JR)
        }
        slotPoint() {
          return this.pointer ? {
            clientX: this.pointer.x,
            clientY: this.pointer.y
          } : this.lastRect ? (RR => {
            const JR = qJ(RR);
            return {
              clientX: JR.x,
              clientY: JR.y
            }
          })(this.lastRect) : {
            clientX: 0,
            clientY: 0
          }
        }
        runIntent(RR, JR, GR, yR) {
          const tR = JR.idx,
            uR = JR.actionElement;
          switch (uR && JG.has(RR) && (0, nR.E)(uR), RR) {
            case "slotPrimary":
              yR.primary(tR, this.slotPoint());
              break;
            case "slotSecondary":
              yR.secondary(tR, this.slotPoint());
              break;
            case "slotQuickMove":
              yR.quickMove(tR, this.slotPoint());
              break;
            case "hotbarPick":
              this.startHotbarPick(tR);
              break;
            case "pressPrimary":
            case "pressSecondary":
              this.startPress(JR.press, "pressPrimary" === RR ? "primary" : "secondary", GR);
              break;
            case "click":
              (0, dR.p)(uR, (0, dR.E)(uR));
              break;
            case "openKeyboard":
              (0, dR.M)(uR) && (0, dR.L)(uR);
              break;
            case "pressBack":
              JR.press.back();
              break;
            case "cancel":
              yR.cancel();
              break;
            case "close":
              return this.releasePress(), void yR.close()
          }
          this.afterAction()
        }
        startPress(RR, JR, GR) {
          this.releasePress(), RR.press(JR) && (this.activePress = {
            handlers: RR,
            button: GR,
            target: vJ(this.focused)
          })
        }
        releasePress() {
          var RR, JR, GR;
          null === (RR = this.activePress) || void 0 === RR || null === (JR = (GR = RR.handlers).release) || void 0 === JR || JR.call(GR), this.activePress = null
        }
        afterAction() {
          this.targets.invalidate(), this.hover.invalidate()
        }
        publishState(RR) {
          ((RR, JR) => {
            var GR, yR, tR, uR, ZR, qR;
            return RR.showing === JR.showing && RR.kind === JR.kind && RR.holding === JR.holding && RR.slotHasItem === JR.slotHasItem && (null === (GR = RR.pressHints) || void 0 === GR ? void 0 : GR.primary) === (null === (yR = JR.pressHints) || void 0 === yR ? void 0 : yR.primary) && (null === (tR = RR.pressHints) || void 0 === tR ? void 0 : tR.secondary) === (null === (uR = JR.pressHints) || void 0 === uR ? void 0 : uR.secondary) && (null === (ZR = RR.pressHints) || void 0 === ZR ? void 0 : ZR.back) === (null === (qR = JR.pressHints) || void 0 === qR ? void 0 : qR.back) && RR.hasCategories === JR.hasCategories && RR.hasList === JR.hasList && RR.openButtonCloses === JR.openButtonCloses && RR.steppingSlots === JR.steppingSlots && RR.hotbarPicking === JR.hotbarPicking && RR.quickMoveToHotbar === JR.quickMoveToHotbar && RR.dropStackHold === JR.dropStackHold
          })(RR, this.state) || (this.state = RR, fR.n.JK(PJ.d, RR))
        }
      },
      uG = ["pointermove", "pointerover", "pointerout", "mouseover", "mouseout"];
    var ZG = GR(10035),
      qG = GR(359),
      iG = GR(1800),
      fG = GR(9497);
    const VG = "[data-pad-secondary]",
      KG = RR => RR instanceof HTMLElement && (0, sR.q)(RR) && !(0, sR.u)(RR),
      wG = RR => {
        const JR = RR.querySelector(VG);
        if (JR && KG(JR)) return JR;
        for (const tR of null !== (GR = null === (yR = RR.parentElement) || void 0 === yR ? void 0 : yR.children) && void 0 !== GR ? GR : []) {
          var GR, yR;
          if (tR !== RR && tR.matches(VG) && KG(tR)) return tR
        }
        return null
      },
      rG = (RR, JR, GR, yR) => Math.max(0, Math.max(RR, GR) - Math.min(JR, yR)),
      eG = (RR, JR, GR, yR) => Math.max(0, Math.min(JR, yR) - Math.max(RR, GR)),
      aG = (RR, JR, GR) => {
        const yR = (RR.left + RR.right) / 2,
          tR = (RR.top + RR.bottom) / 2,
          uR = (JR.left + JR.right) / 2,
          ZR = (JR.top + JR.bottom) / 2;
        if ("Left" === GR || "Right" === GR) {
          const qR = "Right" === GR ? 1 : -1;
          return {
            forwardGap: "Right" === GR ? JR.left - RR.right : RR.left - JR.right,
            centreForward: (uR - yR) * qR,
            sidewaysGap: rG(RR.top, RR.bottom, JR.top, JR.bottom),
            sidewaysOverlap: eG(RR.top, RR.bottom, JR.top, JR.bottom),
            centreSideways: Math.abs(ZR - tR),
            startSideways: Math.abs(JR.top - RR.top),
            fromSidewaysSize: RR.bottom - RR.top,
            toSidewaysSize: JR.bottom - JR.top,
            toLength: JR.right - JR.left
          }
        }
        const qR = "Down" === GR ? 1 : -1;
        return {
          forwardGap: "Down" === GR ? JR.top - RR.bottom : RR.top - JR.bottom,
          centreForward: (ZR - tR) * qR,
          sidewaysGap: rG(RR.left, RR.right, JR.left, JR.right),
          sidewaysOverlap: eG(RR.left, RR.right, JR.left, JR.right),
          centreSideways: Math.abs(uR - yR),
          startSideways: Math.abs(JR.left - RR.left),
          fromSidewaysSize: RR.right - RR.left,
          toSidewaysSize: JR.right - JR.left,
          toLength: JR.bottom - JR.top
        }
      },
      LG = RR => RR.centreForward > .5 && RR.forwardGap >= -RR.toLength / 2,
      nG = RR => {
        const JR = RR.sidewaysOverlap > 0 ? 0 : 2 * RR.fromSidewaysSize,
          GR = RR.fromSidewaysSize > 1.5 * RR.toSidewaysSize ? RR.startSideways : RR.centreSideways;
        return Math.max(0, RR.forwardGap) + 3 * RR.sidewaysGap + JR + .1 * GR
      },
      UG = (RR, JR) => eG(RR.top, RR.bottom, JR.top, JR.bottom) > 0 || JR.bottom - JR.top > JR.right - JR.left,
      WG = (RR, JR, GR, yR, tR, uR) => {
        const ZR = tR ? CG(RR, JR, GR, tR) : new Set,
          qR = MG(RR, JR, GR, ZR);
        return qR < 0 && ZR.size > 0 && uR ? AG(RR, JR, GR, uR) : yR && qR >= 0 ? XG(RR, JR, GR, yR, qR, ZR) : qR
      },
      AG = (RR, JR, GR, yR) => {
        const tR = new Set,
          uR = MG(RR, JR, "Up", tR) >= 0,
          ZR = MG(RR, JR, "Down", tR) >= 0,
          qR = new Set;
        return JR.forEach(((JR, GR) => {
          const tR = JR.top + JR.bottom < RR.top + RR.bottom;
          yR[GR] && !(tR ? uR : ZR) || qR.add(GR)
        })), MG(RR, JR, GR, qR)
      },
      CG = (RR, JR, GR, yR) => {
        const tR = new Set;
        return "Left" !== GR && "Right" !== GR || JR.forEach(((JR, GR) => {
          yR[GR] && eG(RR.top, RR.bottom, JR.top, JR.bottom) <= 0 && tR.add(GR)
        })), tR
      },
      XG = (RR, JR, GR, yR, tR, uR) => {
        const ZR = aG(RR, JR[tR], GR).forwardGap;
        let qR = tR,
          iR = yR[tR],
          fR = 1 / 0;
        return JR.forEach(((JR, VR) => {
          const KR = yR[VR];
          if (uR.has(VR) || KR < iR || KR === iR && qR === tR) return;
          const wR = aG(RR, JR, GR);
          if (!LG(wR) || wR.forwardGap < 0 || wR.forwardGap >= ZR) return;
          const rR = nG(wR);
          (KR > iR || rR < fR) && (qR = VR, iR = KR, fR = rR)
        })), qR
      },
      MG = (RR, JR, GR, yR) => {
        let tR = -1,
          uR = 1 / 0;
        if (JR.forEach(((JR, ZR) => {
            const qR = ((RR, JR, GR) => {
              const yR = aG(RR, JR, GR);
              if (!LG(yR)) return null;
              const tR = Math.max(0, yR.forwardGap);
              return yR.sidewaysOverlap <= 0 && yR.sidewaysGap > 2 * (tR + 1) ? null : nG(yR)
            })(RR, JR, GR);
            null !== qR && qR < uR && !yR.has(ZR) && (uR = qR, tR = ZR)
          })), tR < 0) return -1;
        const ZR = JR[tR],
          qR = aG(RR, ZR, GR).forwardGap;
        let iR = qR,
          fR = tR;
        return JR.forEach(((JR, uR) => {
          if (uR === tR || yR.has(uR) || !((RR, JR, GR) => {
              const yR = "Left" === GR || "Right" === GR,
                tR = yR ? eG(RR.top, RR.bottom, JR.top, JR.bottom) : eG(RR.left, RR.right, JR.left, JR.right),
                uR = yR ? Math.min(RR.bottom - RR.top, JR.bottom - JR.top) : Math.min(RR.right - RR.left, JR.right - JR.left);
              return tR > 0 && tR >= uR / 2
            })(JR, ZR, GR)) return;
          const VR = aG(RR, JR, GR);
          LG(VR) && VR.forwardGap + VR.toLength <= qR + 1 && VR.forwardGap < iR && (iR = VR.forwardGap, fR = uR)
        })), fR
      },
      BG = (RR, JR) => {
        let GR = -1,
          yR = 1 / 0;
        return JR.forEach(((JR, tR) => {
          const uR = Math.max(JR.left - RR.x, 0, RR.x - JR.right),
            ZR = Math.max(JR.top - RR.y, 0, RR.y - JR.bottom),
            qR = Math.hypot(uR, ZR);
          qR < yR && (yR = qR, GR = tR)
        })), GR
      },
      lG = (RR, JR) => {
        const GR = Math.min(RR.bottom - RR.top, JR.bottom - JR.top) / 2;
        return Math.abs(RR.top - JR.top) > GR ? RR.top - JR.top : RR.left - JR.left
      },
      pG = RR => {
        let JR = -1;
        for (let GR = 0; GR < RR.length; GR++)(JR < 0 || lG(RR[GR], RR[JR]) < 0) && (JR = GR);
        return JR
      };
    var gG = GR(1874),
      bG = GR(10037),
      vG = GR(10042);
    const OG = RR => {
        if ("death" !== RR || "inGame" !== iR.d.get("gameState") || "off" === (0, wR.l)().quickChat || null === (0, gG.e)()) return !1;
        const JR = (0, VR.h)("chat");
        return JR !== (0, VR.h)("menuConfirm") && JR !== (0, VR.h)("menuBack")
      },
      xG = new bG.c;
    var NG = GR(5049),
      DG = GR(10048),
      HG = GR(10057);
    const oG = RR => {
        let JR = null;
        for (const GR of RR.querySelectorAll("[data-pad-tabs]"))(0, sR.q)(GR) && (!JR || Number(GR.dataset.padTabs) < Number(JR.dataset.padTabs)) && (JR = GR);
        return JR
      },
      cG = (RR, JR, GR, yR) => {
        RR.focusWhenFound((() => {
          const tR = RR.pickInitial(JR);
          if (tR && !GR.has(tR) && (null === yR || void 0 === yR || !yR.contains(tR))) return tR;
          const uR = ((RR, JR) => {
              const GR = JR => RR.getEnabledCandidates(JR).filter((RR => !RR.closest("[data-pad-tabs]")));
              for (const yR of (0, sR.f)(JR)) {
                const RR = GR(yR);
                if (RR.length > 0) return RR
              }
              return GR(JR)
            })(RR, JR).filter((RR => !GR.has(RR))),
            ZR = pG(uR.map((RR => RR.getBoundingClientRect())));
          return ZR >= 0 ? uR[ZR] : null
        }), 3e3)
      },
      PG = (RR, JR, GR, yR) => {
        var tR;
        const uR = ((RR, JR) => {
          if (0 === RR.length) return null;
          const GR = RR.findIndex((RR => "true" === RR.dataset.padSelected));
          return GR < 0 ? JR > 0 ? RR[0] : RR[RR.length - 1] : RR[(GR + JR + RR.length) % RR.length]
        })([...GR.querySelectorAll("[data-pad-tab]")].filter((RR => (0, sR.q)(RR) && !(0, sR.u)(RR))), yR);
        if (!uR) return;
        const ZR = null !== (tR = null === RR || void 0 === RR ? void 0 : RR.getFocused()) && void 0 !== tR ? tR : null,
          qR = !(null === ZR || void 0 === ZR || !ZR.isConnected) && GR.contains(ZR),
          iR = RR && !qR ? new Set(RR.getEnabledCandidates(JR)) : null;
        (0, dR.e)(uR), RR && (iR ? cG(RR, JR, iR, GR) : RR.setFocus(uR, {
          byUser: !0
        }))
      },
      IG = RR => {
        var JR;
        const GR = DR(null !== (JR = gR(RR, "x")) && void 0 !== JR ? JR : RR),
          yR = (0, sR.d)(RR).filter((RR => !(0, sR.u)(RR))),
          tR = yR.filter((RR => HR(RR.getBoundingClientRect(), GR)));
        return (tR.length > 0 ? tR : yR).sort(((RR, JR) => lG(RR.getBoundingClientRect(), JR.getBoundingClientRect())))
      },
      mG = (RR, JR, GR) => {
        const yR = [...JR.querySelectorAll("[data-pad-row]")].filter(sR.q),
          tR = RR.getFocused(),
          uR = tR ? yR.findIndex((RR => RR.contains(tR))) : -1;
        let ZR = 0,
          qR = GR > 0 ? 0 : yR.length - 1;
        if (uR >= 0 && tR) ZR = Math.max(0, IG(yR[uR]).indexOf(tR)), qR = uR + GR;
        else if (tR) {
          const RR = tR.getBoundingClientRect(),
            JR = yR.map((JR => {
              const yR = JR.getBoundingClientRect();
              return GR > 0 ? yR.top >= RR.top : yR.bottom <= RR.bottom
            }));
          qR = GR > 0 ? JR.indexOf(!0) : JR.lastIndexOf(!0)
        }
        for (let iR = qR; iR >= 0 && iR < yR.length; iR += GR) {
          const JR = IG(yR[iR]);
          if (JR.length > 0) return void RR.setFocus(JR[Math.min(ZR, JR.length - 1)], {
            byUser: !0
          })
        }
      },
      zG = (RR, JR, GR) => {
        var yR, tR;
        const uR = null !== (yR = null === RR || void 0 === RR ? void 0 : RR.getFocused()) && void 0 !== yR ? yR : null,
          ZR = null !== uR && void 0 !== uR && uR.closest("[data-pad-row]") ? "x" : "y",
          qR = null !== (tR = uR ? gR(uR, ZR, JR) : null) && void 0 !== tR ? tR : vR(JR, ZR);
        if (!qR) return;
        const iR = uR ? (0, dR.E)(uR) : null;
        if (NR(qR, ZR, GR * ("y" === ZR ? qR.clientHeight : qR.clientWidth) * .85), !RR || !iR) return;
        const fR = DR(qR),
          VR = RR.getEnabledCandidates(JR).filter((RR => qR.contains(RR) && HR(RR.getBoundingClientRect(), fR))),
          KR = BG(iR, VR.map((RR => RR.getBoundingClientRect())));
        KR >= 0 && RR.setFocus(VR[KR], {
          scroll: !1,
          byUser: !0
        })
      };
    let SG = null;
    const jG = (RR, JR) => {
        var GR, yR;
        const tR = JR.querySelector("[data-pad-friends-column]"),
          uR = RR.getFocused();
        if (!tR || !uR || !tR.contains(uR)) return !1;
        const ZR = RR.getEnabledCandidates(JR).filter((RR => !tR.contains(RR))),
          qR = BG((0, dR.E)(uR), ZR.map((RR => RR.getBoundingClientRect()))),
          iR = null === (GR = SG) || void 0 === GR ? void 0 : GR.deref();
        return RR.setFocus(null !== iR && void 0 !== iR && iR.isConnected ? iR : null !== (yR = ZR[qR]) && void 0 !== yR ? yR : null, {
          byUser: !0
        }), !0
      },
      dG = RR => {
        const JR = (0, VR.h)(RR);
        return (0, eR.G)(JR) || fG.v.some((RR => (0, VR.h)(RR) === JR)) ? null : JR
      },
      EG = (RR, JR) => {
        const GR = dG(JR);
        return null !== GR && RR.wasPressed(GR)
      },
      YG = function(RR, JR, GR) {
        let yR = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const tR = (RR => {
            var JR, GR;
            return null !== (JR = null === (GR = oG(RR)) || void 0 === GR ? void 0 : GR.querySelector("[data-pad-tab][data-pad-selected='true']")) && void 0 !== JR ? JR : null
          })(JR),
          uR = RR && tR ? new Set(RR.getEnabledCandidates(JR)) : null;
        (0, ZG.e)(), GR === qG.o.SETTINGS && (0, iG.i)(iR.d.get("openEverythingMenuName")) ? iR.d.set({
          openEverythingMenuName: GR
        }) : (0, iG.v)((0, HG.e)("padMenuShortcut"), GR, yR), RR && uR && tR && cG(RR, JR, uR, tR.closest("[data-pad-tabs]"))
      },
      kG = RR => null !== RR.closest(".Dropdown-root") || null !== RR.querySelector(".Dropdown-root.is-open"),
      QG = RR => null !== (0, DG.c)() && "popup" !== RR.layer.kind && !oG(RR.root) && !kG(RR.root),
      FG = (0, aR.c)(eR.bb),
      TG = (0, aR.c)(eR.bb),
      sG = (RR, JR, GR) => {
        if (((RR, JR) => {
            const GR = (0, VR.h)("chat");
            return OG(JR) && RR.isHeld(GR) ? "hold" === xG.update(RR.wasPressed(GR), RR.isHeld(GR), performance.now(), LR.b[(0, wR.l)().tapHoldTime].wheelMs) && (KR.e.consumeButton(GR), fR.n.JK(vG.o), !0) : (xG.release(), !1)
          })(JR, GR.layer.kind)) return !0;
        const yR = GR.root;
        for (const [ZR, qR] of [
            ["menuTabPrevious", -1],
            ["menuTabNext", 1]
          ])
          if (JR.wasPressed((0, VR.h)(ZR))) {
            const JR = kG(yR) ? null : oG(yR);
            if (JR) PG(RR, yR, JR, qR);
            else if (QG(GR)) {
              var tR;
              const JR = RR ? new Set(RR.getEnabledCandidates(yR)) : null;
              null !== (tR = (0, DG.c)()) && void 0 !== tR && tR(qR) && RR && JR && cG(RR, yR, JR, null)
            } else RR && mG(RR, yR, qR);
            return !0
          } for (const [ZR, qR, iR] of [
            ["menuPageUp", -1, FG],
            ["menuPageDown", 1, TG]
          ]) {
          const GR = (0, VR.h)(ZR);
          if (JR.wasPressed(GR) && iR.reset(), iR.update(JR.isHeld(GR), performance.now())) return zG(RR, yR, qR), !0
        }
        const uR = "popup" === GR.layer.kind;
        return EG(JR, "pause") ? (uR || (0, iG.r)() && "menu" !== GR.layer.kind || YG(RR, yR, (0, iG.r)() ? qG.o.SETTINGS : (0, NG.b)()), !0) : !!EG(JR, "leaderboard") && ("home" === GR.layer.kind ? (RR => {
          const JR = [...RR.querySelectorAll("[data-pad-notifications]")].find(sR.q);
          JR && (0, dR.e)(JR)
        })(yR) : uR || YG(RR, yR, qG.o.LOBBY_LEADERBOARD, "inGame" === iR.d.get("gameState")), !0)
      },
      hG = (RR, JR, GR) => {
        if (sG(RR, JR, GR)) return !0;
        const yR = "home" === GR.layer.kind;
        if (JR.wasPressed((0, VR.h)("menuSecondary"))) {
          const JR = RR.getFocused(),
            tR = JR ? wG(JR) : null;
          if (tR) return (0, dR.e)(tR), !0;
          if (yR) {
            const JR = GR.root.querySelector("[data-pad-search] input");
            return JR && (0, sR.r)(JR, GR.root) ? (RR.setFocus(JR, {
              byUser: !0
            }), (0, dR.e)(JR)) : iR.d.set({
              searchOpen: !0
            }), !0
          }
        }
        return !(!yR || !EG(JR, "inventory")) && (((RR, JR) => {
          var GR, yR;
          const tR = JR.querySelector("[data-pad-friends-column]");
          if (!tR || !(0, sR.q)(tR)) return void(0, iG.v)((0, HG.e)("padMenuShortcut"), qG.o.SOCIAL);
          if (jG(RR, JR)) return;
          const uR = null !== (GR = null === (yR = tR.querySelector("[data-pad-friends-start]")) || void 0 === yR ? void 0 : yR.getBoundingClientRect().top) && void 0 !== GR ? GR : -1 / 0,
            ZR = RR.getEnabledCandidates(tR),
            qR = ZR.filter((RR => RR.getBoundingClientRect().top >= uR)),
            iR = qR.length > 0 ? qR : ZR,
            fR = pG(iR.map((RR => RR.getBoundingClientRect())));
          RR.setFocus(fR >= 0 ? iR[fR] : null, {
            byUser: !0
          })
        })(RR, GR.root), !0)
      },
      Ry = RR => {
        var JR, GR, yR;
        const tR = (0, dR.G)(RR);
        if (null !== tR) return tR;
        const uR = (null !== (JR = null !== (GR = null !== (yR = RR.getAttribute("aria-label")) && void 0 !== yR ? yR : RR.getAttribute("title")) && void 0 !== GR ? GR : RR.textContent) && void 0 !== JR ? JR : "").replace(/\s+/g, " ").trim();
        return uR ? `${RR.tagName}:${uR.slice(0,100)}` : null
      };
    class Jy {
      constructor() {
        this.remembered = new Map, this.history = []
      }
      enter(RR) {
        const JR = this.history.indexOf(RR);
        if (JR >= 0) {
          for (const RR of this.history.splice(JR + 1)) this.remembered.delete(RR);
          return !0
        }
        return this.remembered.delete(RR), this.history.push(RR), this.history.length > 32 && this.forget(this.history[0]), !1
      }
      forget(RR) {
        this.remembered.delete(RR);
        const JR = this.history.indexOf(RR);
        JR >= 0 && this.history.splice(JR, 1)
      }
      remember(RR, JR, GR, yR) {
        const tR = Ry(JR),
          uR = (0, dR.G)(JR),
          ZR = null !== uR && ((RR, JR) => {
            let GR = 0;
            for (const yR of RR.querySelectorAll("[data-pad-key], [href]"))
              if ((yR.getAttribute("data-pad-key") === JR || yR.getAttribute("href") === JR) && (GR++, GR > 1)) return !0;
            return !1
          })(GR, uR) ? Math.max(0, this.twins(yR(), uR).indexOf(JR)) : 0;
        this.remembered.set(RR, {
          element: new WeakRef(JR),
          identity: tR,
          ordinal: ZR
        })
      }
      has(RR) {
        return this.remembered.has(RR)
      }
      recall(RR, JR) {
        var GR, yR;
        const tR = this.remembered.get(RR);
        if (!tR) return null;
        const uR = tR.element.deref();
        if (uR && JR.includes(uR)) return uR;
        if (null === tR.identity) return null;
        const ZR = this.twins(JR, tR.identity);
        return null !== (GR = null !== (yR = ZR[tR.ordinal]) && void 0 !== yR ? yR : ZR[0]) && void 0 !== GR ? GR : null
      }
      twins(RR, JR) {
        return RR.filter((RR => Ry(RR) === JR))
      }
    }
    var Gy = GR(1366);
    const yy = RR => {
        const JR = [];
        let GR = RR;
        for (; GR && GR !== document.body;) {
          const RR = getComputedStyle(GR).zIndex;
          "auto" !== RR && JR.push(Number(RR) || 0), GR = GR.parentElement
        }
        return JR.reverse()
      },
      ty = (RR, JR) => {
        const GR = ((RR, JR) => {
          const GR = Math.max(RR.length, JR.length);
          for (let uR = 0; uR < GR; uR++) {
            var yR, tR;
            const GR = (null !== (yR = RR[uR]) && void 0 !== yR ? yR : 0) - (null !== (tR = JR[uR]) && void 0 !== tR ? tR : 0);
            if (0 !== GR) return GR
          }
          return 0
        })(yy(RR), yy(JR));
        if (0 !== GR) return GR > 0;
        if (RR.contains(JR)) return !1;
        if (JR.contains(RR)) return !0;
        const yR = RR.compareDocumentPosition(JR);
        return !!(yR & Node.DOCUMENT_POSITION_PRECEDING) || !(yR & Node.DOCUMENT_POSITION_FOLLOWING) && null
      },
      uy = (RR, JR) => {
        var GR;
        return null !== (GR = ty(RR.root, JR.root)) && void 0 !== GR ? GR : RR.order > JR.order
      },
      Zy = (RR, JR) => JR.some((JR => !JR.contains(RR) && !RR.contains(JR) && !0 === ty(JR, RR)));
    let qy = null,
      iy = null,
      fy = -1;
    const Vy = () => {
        var RR;
        const JR = null === (RR = document.timeline) || void 0 === RR ? void 0 : RR.currentTime,
          GR = "number" === typeof JR ? JR : null;
        if (null !== GR && GR === iy && fy === (0, Gy.d)()) return qy;
        let yR = null;
        const tR = [],
          uR = [...document.querySelectorAll("[data-pad-covers]")].filter(sR.q);
        for (const ZR of (0, Gy.h)()) {
          const RR = ZR.getRoot(),
            JR = !!RR && (0, sR.q)(RR) && !Zy(RR, uR);
          if (ZR.shown && !JR && tR.push(ZR), ZR.shown = JR, !RR || !JR) continue;
          const GR = {
            layer: ZR,
            root: RR,
            order: ZR.order
          };
          yR && !uy(GR, yR) || (yR = GR)
        }
        qy = yR, iy = GR, fy = (0, Gy.d)();
        for (const ZR of tR)(0, Gy.k)(ZR);
        return qy
      },
      Ky = () => {
        const RR = Vy();
        return !(null === RR || void 0 === RR || !RR.layer.close) && (RR.layer.close(), iy = null, !0)
      },
      wy = () => {
        var RR, JR;
        return null !== (RR = null === (JR = Vy()) || void 0 === JR ? void 0 : JR.root) && void 0 !== RR ? RR : null
      },
      ry = RR => RR ? {
        ...RR,
        root: wy()
      } : null;
    let ey = null,
      ay = null,
      Ly = (0, wR.l)().menuNavigation,
      ny = null;
    const Uy = new CR;
    let Wy = null;
    fR.n.subscribe(wR.i, (() => {
      const RR = (0, wR.l)().menuNavigation;
      RR !== Ly && (Ly = RR, ey = null, ay = null)
    }));
    const Ay = () => {
        var RR;
        return null !== (RR = ey) && void 0 !== RR ? RR : (0, wR.l)().menuNavigation
      },
      Cy = RR => {
        if (ly()) {
          if (ny = ry(RR), "hybrid" === Ay()) return Uy.lock(), void(ay = ay ? null : wy());
          ey = "focus" === Ay() ? "cursor" : "focus"
        }
      },
      Xy = () => {
        const RR = ny;
        return ny = null, RR
      };
    let My = {
      root: null,
      firstSeenMs: -1 / 0,
      atMs: -1 / 0,
      has: !1
    };
    const By = function(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const GR = My.root === RR,
          yR = GR ? My.firstSeenMs : JR,
          tR = My.has || JR - yR > 1e3;
        return (!GR || !tR || JR - My.atMs > 250) && (My = {
          root: RR,
          firstSeenMs: yR,
          atMs: JR,
          has: (0, sR.j)(RR)
        }), My.has
      },
      ly = () => {
        const RR = wy();
        return null !== RR && By(RR)
      },
      py = () => {
        const RR = Vy();
        return ay && (null === RR || void 0 === RR ? void 0 : RR.root) !== ay && (ay = null), (RR => {
          let {
            mode: JR,
            hasLayer: GR,
            hasCandidates: yR,
            hybridCursorEngaged: tR
          } = RR;
          return GR ? "cursor" !== JR && yR() ? "hybrid" === JR && tR ? "cursor" : "focus" : "cursor" : null
        })({
          mode: Ay(),
          hasLayer: null !== RR,
          hasCandidates: () => null !== RR && By(RR.root),
          hybridCursorEngaged: null !== ay
        })
      },
      gy = () => "hybrid" === Ay() && ly(),
      by = "pad-focused";
    var vy = GR(5354),
      Oy = GR(6063);
    const xy = "[data-pad-destructive]",
      Ny = `${xy}, [data-pad-back]`,
      Dy = RR => ({
        rect: RR.getBoundingClientRect(),
        destructive: RR.matches(xy),
        closes: null !== RR.closest("[data-pad-close-button]"),
        unavailable: RR.matches("[data-pad-unavailable]")
      }),
      Hy = RR => {
        let {
          destructive: JR,
          closes: GR,
          unavailable: yR
        } = RR;
        return JR ? GR ? 2 : 3 : yR ? 1 : 0
      },
      oy = RR => {
        let JR = -1;
        for (let GR = 0; GR < RR.length; GR++) {
          if (JR < 0) {
            JR = GR;
            continue
          }
          const yR = RR[GR],
            tR = RR[JR];
          Hy(yR) === Hy(tR) ? lG(yR.rect, tR.rect) < 0 && (JR = GR) : Hy(yR) < Hy(tR) && (JR = GR)
        }
        return JR
      },
      cy = "[data-pad-tabs]",
      Py = "[data-pad-tab]",
      Iy = (RR, JR) => {
        const GR = RR.querySelector(`${Py}[data-pad-selected='true']`);
        return GR && JR.includes(GR) ? GR : null
      },
      my = (RR, JR) => {
        let GR = JR;
        for (let yR = JR.parentElement; yR && !yR.contains(RR); yR = yR.parentElement) GR = yR;
        return GR
      };
    class zy {
      constructor() {
        this.contentReturn = null
      }
      redirect(RR, JR, GR, yR) {
        var tR, uR;
        const ZR = RR.closest(cy),
          qR = JR.closest(cy);
        var iR;
        if (qR && qR !== ZR) return ZR || (this.contentReturn = new WeakRef(RR)), null !== (iR = Iy(qR, GR)) && void 0 !== iR ? iR : JR;
        if (!ZR || qR) return JR;
        const fR = my(RR, JR),
          VR = null === (tR = this.contentReturn) || void 0 === tR ? void 0 : tR.deref();
        return VR && fR.contains(VR) && GR.includes(VR) ? VR : null !== (uR = this.pickRegionStart(fR, gR(JR, "y", yR), GR)) && void 0 !== uR ? uR : JR
      }
      findTabContent(RR, JR, GR) {
        const yR = RR.closest(cy);
        if (!yR || !RR.matches(Py) || yR.contains(JR)) return null;
        const tR = JR.closest(cy);
        if (tR && Number(tR.dataset.padTabs) <= Number(yR.dataset.padTabs)) return null;
        const uR = my(RR, JR);
        return GR.some((RR => uR.contains(RR) && !RR.closest(Ny))) || !JR.closest(Ny) ? uR : null
      }
      pickContentStart(RR, JR, GR) {
        return this.contentReturn = null, this.pickRegionStart(RR, gR(RR, "y", GR), JR)
      }
      pickReplacedContentStart(RR, JR, GR, yR) {
        if (!JR.contains(RR)) return null;
        const tR = my(JR, RR),
          uR = GR.filter((RR => JR.contains(RR) && !tR.contains(RR) && !RR.closest(Ny)));
        return 0 === uR.length ? null : (this.contentReturn = null, this.pickRegionStart(JR, gR(uR[0], "y", yR), uR))
      }
      backToStrip(RR, JR, GR) {
        if (RR.closest(cy)) return null;
        const yR = oG(GR);
        for (const tR of GR.querySelectorAll(cy)) {
          if (Number(tR.dataset.padTabs) <= 1 || tR === yR) continue;
          const uR = Iy(tR, JR),
            ZR = uR ? my(RR, tR).parentElement : null;
          if (uR && ZR && ZR !== GR && GR.contains(ZR)) return this.contentReturn = new WeakRef(RR), uR
        }
        return null
      }
      pickRegionStart(RR, JR, GR) {
        const yR = DR(JR),
          tR = RR => {
            const JR = GR.filter((JR => RR.contains(JR) && !JR.closest(cy) && HR(JR.getBoundingClientRect(), yR))),
              tR = oy(JR.map(Dy));
            return tR >= 0 ? JR[tR] : null
          };
        for (const uR of (0, sR.f)(RR)) {
          const RR = tR(uR);
          if (RR) return RR
        }
        for (const uR of RR.querySelectorAll(cy)) {
          const RR = Iy(uR, GR);
          if (RR) return RR
        }
        return tR(RR)
      }
    }
    const Sy = "[data-pad-default-focus], .Dropdown-option.is-selected",
      jy = ".Dropdown-root.is-open > .Dropdown-menu",
      dy = "[data-pad-no-step-in]",
      Ey = "[data-pad-tabs]",
      Yy = "[data-pad-press-area]",
      ky = RR => {
        let JR = RR;
        for (let GR = 0; JR && GR <= 4; GR++, JR = JR.parentElement) {
          const GR = JR.querySelector(".CircleInfo");
          if (GR) return JR === RR || JR.querySelectorAll(sR.b).length <= 1 ? GR : null;
          if (JR !== RR && JR.querySelectorAll(sR.b).length > 1) return null
        }
        return null
      },
      Qy = (RR, JR, GR) => {
        (0, dR.s)(RR, JR, GR);
        const yR = null !== RR && void 0 !== RR && RR.isConnected ? ky(RR) : null,
          tR = ky(JR);
        yR !== tR && (0, dR.s)(yR, tR, tR ? (0, dR.E)(tR) : GR, {
          leaveBelow: RR,
          enterBelow: JR
        })
      },
      Fy = RR => RR.getBoundingClientRect(),
      Ty = (RR, JR, GR) => {
        const yR = new Set(GR);
        for (let tR = RR; tR; tR = tR === JR ? null : tR.parentElement)
          if (yR.has(tR)) return tR;
        return null
      },
      sy = (RR, JR) => !RR.root || RR.root === JR || JR.matches(jy) && RR.root.contains(JR);
    const hy = new class {
      constructor() {
        this.focused = null, this.layerKey = null, this.layerRoot = null, this.memory = new Jy, this.tabStripNav = new zy, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.confirmPressedOn = null, this.confirmRepeatKey = null, this.confirmRepeated = !1, this.confirmRepeat = (0, aR.c)(eR.s), this.dpadRepeats = new Map(eR.B.map((RR => [RR, (0, aR.c)(eR.F)]))), this.stickRepeat = new eR.b((0, aR.c)(eR.db)), this.lastRefocusCheckMs = -1 / 0, this.enteredLayerAtMs = 0, this.lastFocusedCentre = null, this.lastActivatedKey = null, this.lastActivated = null, this.lastActivatedAtMs = -1 / 0, this.pendingFocus = null, this.tabOpenWait = null, this.retryMove = null, this.scrollRemainder = {
          x: 0,
          y: 0
        }, this.wasActive = !1, this.layerKind = null, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.listeners = new Set, this.dropdownLayers = new WeakMap, this.dropdownLayerCounter = 0
      }
      install() {
        const RR = KR.e.register({
            name: "focus",
            isActive: () => (0, rR.k)() && "focus" === py(),
            onFrame: RR => {
              this.onFrame(RR)
            },
            onDeactivate: () => {
              this.deactivate()
            },
            wakePressActs: RR => (0, KR.h)(RR) || RR === (0, VR.h)("menuConfirm") && (0, dR.J)((0, rR.e)())
          }),
          JR = (0, Gy.l)((RR => {
            const JR = (0, Gy.q)(RR);
            null === RR.memoryKey && this.memory.forget(JR), JR === this.layerKey && (this.layerKey = null)
          }));
        let GR = -1 / 0;
        const yR = ZR.e.onFrame((RR => {
            (0, rR.k)() || RR.timestampMs - GR < 100 || (GR = RR.timestampMs, Vy())
          })),
          tR = RR => {
            RR.isTrusted && RR.target instanceof Element && ZR.e.getActivePad() && this.noteChosenStop(RR.target)
          };
        return document.addEventListener("click", tR, !0), () => {
          RR(), JR(), yR(), document.removeEventListener("click", tR, !0), this.deactivate()
        }
      }
      noteChosenStop(RR) {
        var JR, GR;
        const yR = Vy();
        if (!yR || !yR.root.contains(RR)) return;
        const tR = null !== (JR = null === (GR = RR.closest(".Dropdown-root")) || void 0 === GR ? void 0 : GR.querySelector(".Dropdown-control")) && void 0 !== JR ? JR : RR,
          uR = Ty(tR, yR.root, this.getEnabledCandidates(yR.root));
        if (!uR) return;
        const ZR = (0, Gy.q)(yR.layer);
        ZR === this.layerKey && yR.root === this.layerRoot || this.beginLayer(yR, ZR), this.wasActive ? this.setFocus(uR, {
          scroll: !1,
          byUser: !0
        }) : (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.focused = uR, this.lastFocusedCentre = (0, dR.E)(uR), this.rememberFocus(uR), this.notify())
      }
      getFocused() {
        return this.focused
      }
      isActive() {
        return this.wasActive
      }
      onChange(RR) {
        return this.listeners.add(RR), () => {
          this.listeners.delete(RR)
        }
      }
      notify() {
        for (const RR of this.listeners) RR()
      }
      deactivate() {
        var RR;
        if (this.wasActive) {
          this.wasActive = !1, this.layerKind = null, this.confirmPressedOn = null, this.retryMove = null, this.pendingFocus = null;
          for (const RR of this.dpadRepeats.values()) RR.reset();
          this.stickRepeat.reset(), null !== (RR = this.focused) && void 0 !== RR && RR.isConnected && Qy(this.focused, null, (0, dR.E)(this.focused)), this.notify()
        }
      }
      setFocus(RR) {
        var JR;
        let {
          scroll: GR = !0,
          byUser: yR = !1
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (yR && (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1), RR === this.focused) return;
        const tR = null !== (JR = this.focused) && void 0 !== JR && JR.isConnected ? this.focused : null;
        if (this.focused = RR, RR) {
          GR && (RR.classList.add(by), RR.scrollIntoView({
            block: "nearest",
            inline: "nearest",
            behavior: "instant"
          })), yR && ((RR, JR) => {
            const GR = JR.closest("[data-pad-friends-column]");
            GR && RR && !GR.contains(RR) && (SG = new WeakRef(RR))
          })(tR, RR);
          const JR = (0, dR.E)(RR);
          this.lastFocusedCentre = JR, this.movedInLayer && this.rememberFocus(RR), Qy(tR, RR, JR), "false" === RR.getAttribute("aria-pressed") && RR.closest("[data-pad-select-on-focus]") && (0, dR.e)(RR)
        } else tR && Qy(tR, null, (0, dR.E)(tR));
        this.notify()
      }
      rememberFocus(RR) {
        const JR = this.layerRoot;
        this.layerKey && JR && this.memory.remember(this.layerKey, RR, JR, (() => this.getEnabledCandidates(JR)))
      }
      noteCursorActivation(RR) {
        const JR = Vy();
        if (!JR || !JR.root.contains(RR)) return;
        const GR = this.getEnabledCandidates(JR.root),
          yR = new Set(GR);
        let tR = RR;
        for (; tR && !yR.has(tR);) tR = tR === JR.root ? null : tR.parentElement;
        if (!(tR instanceof HTMLElement)) return;
        const uR = (0, Gy.q)(JR.layer);
        this.memory.enter(uR), this.memory.remember(uR, tR, JR.root, (() => GR))
      }
      notePageEnteredByCursor(RR) {
        return this.memory.enter(RR)
      }
      recallStop(RR, JR) {
        return this.findRemembered(RR, JR)
      }
      focusWhenFound(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
          GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.pendingFocus = {
          find: RR,
          untilMs: performance.now() + JR,
          holdWhile: GR
        }
      }
      getEnabledCandidates(RR) {
        return (0, sR.d)(RR).filter((RR => !(0, sR.u)(RR)))
      }
      onFrame(RR) {
        var JR;
        const GR = Vy();
        if (!GR) return;
        const yR = null !== (JR = this.findOpenDropdown(GR)) && void 0 !== JR ? JR : GR,
          tR = performance.now(),
          uR = (0, Gy.q)(yR.layer);
        if (uR !== this.layerKey || yR.root !== this.layerRoot) {
          const JR = this.focused;
          if (null !== this.layerKey && yR.root === this.layerRoot && JR && (0, sR.r)(JR, yR.root)) this.continueLayer(uR, JR), this.wasActive || this.resume(yR.root, tR);
          else {
            const JR = !this.wasActive && !RR.wokeDevice,
              ZR = "death" === this.layerKind || JR,
              qR = this.enterLayer(yR, uR);
            "popup" !== yR.layer.kind || yR !== GR || qR ? "menu" === yR.layer.kind && ZR && "inGame" === iR.d.get("gameState") && !(0, ZG.i)(3e3) && (this.pressGuardExtends = !0, this.pressGuardUntilMs = tR + vy.c) : (this.pressGuardExtends = JR, this.pressGuardUntilMs = tR + (JR ? vy.c : ZR ? 500 : 250))
          }
        } else this.wasActive || this.resume(yR.root, tR);
        if (this.layerKind = yR.layer.kind, this.wasActive || (this.wasActive = !0, this.notify()), RR.wokeDevice && this.focusPointedStop(yR.root), this.validateFocus(yR, tR), tR < this.pressGuardUntilMs && this.pressGuardExtends && (RR.wasPressed((0, VR.h)("menuConfirm")) || RR.wasPressed((0, VR.h)("menuBack"))) && (this.pressGuardUntilMs = tR + vy.c), tR >= this.pressGuardUntilMs && this.handleButtons(RR, yR)) return;
        const ZR = "hybrid" === Ay();
        if (ZR && (RR => {
            const JR = wy();
            return JR !== Wy && (Wy = JR, Uy.lock()), Uy.update(RR, (0, wR.l)().moveDeadzone)
          })(RR.leftStick)) return qR = this.getHandoff(), ny = ry(qR), ay = wy(), void KR.e.handOffHeldInput();
        var qR;
        this.handleDirections(RR, yR, tR, !ZR), this.handleScroll(RR, yR)
      }
      findOpenDropdown(RR) {
        const JR = RR.root.querySelector(jy);
        if (!JR || !(0, sR.q)(JR)) return null;
        let GR = this.dropdownLayers.get(JR);
        return GR || (this.dropdownLayerCounter++, GR = {
          id: `dropdown-${this.dropdownLayerCounter}`,
          kind: RR.layer.kind,
          getRoot: () => JR,
          close: () => {
            (0, dR.n)(JR)
          },
          memoryKey: null
        }, this.dropdownLayers.set(JR, GR)), {
          layer: GR,
          root: JR,
          order: RR.order
        }
      }
      focusPointedStop(RR) {
        const JR = (0, rR.e)(),
          GR = JR ? document.elementFromPoint(JR.x, JR.y) : null;
        if (!GR || !RR.contains(GR)) return;
        const yR = Ty(GR, RR, this.getEnabledCandidates(RR));
        yR && this.setFocus(yR, {
          scroll: !1,
          byUser: !0
        })
      }
      enterLayer(RR, JR) {
        const GR = this.beginLayer(RR, JR),
          yR = Xy();
        return yR && sy(yR, RR.root) ? (this.takeOver(RR.root, yR, this.enteredLayerAtMs), GR) : (this.restoreLayerFocus(RR.root, GR), GR)
      }
      beginLayer(RR, JR) {
        return this.layerKey = JR, this.layerRoot = RR.root, this.lastActivatedKey = null, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoreOnFocusLoss = !1, this.retryMove = null, this.pendingFocus = null, this.confirmPressedOn = null, this.lastRefocusCheckMs = -1 / 0, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.enteredLayerAtMs = performance.now(), this.lastFocusedCentre = null, this.memory.enter(JR)
      }
      restoreLayerFocus(RR, JR) {
        const GR = JR && this.layerKey ? this.findRemembered(RR, this.layerKey) : null;
        this.restoredFromMemory = null !== GR, this.setFocus(null !== GR && void 0 !== GR ? GR : this.pickInitial(RR, {
          waitForContent: !0
        }))
      }
      continueLayer(RR, JR) {
        this.layerKey = RR;
        const GR = this.memory.enter(RR);
        this.restoreOnFocusLoss = GR, this.movedInLayer && !GR && this.rememberFocus(JR)
      }
      resume(RR, JR) {
        var GR;
        const yR = Xy();
        yR && sy(yR, RR) ? this.takeOver(RR, yR, JR) : null !== (GR = this.focused) && void 0 !== GR && GR.isConnected && Qy(null, this.focused, (0, dR.E)(this.focused))
      }
      pickPreferred(RR) {
        var JR;
        return null !== (JR = this.layerKey ? this.findRemembered(RR, this.layerKey) : null) && void 0 !== JR ? JR : this.pickInitial(RR, {
          waitForContent: !0
        })
      }
      findRemembered(RR, JR) {
        return this.memory.has(JR) ? this.memory.recall(JR, this.getEnabledCandidates(RR)) : null
      }
      getHandoff() {
        var RR, JR, GR;
        const yR = null !== (RR = this.focused) && void 0 !== RR && RR.isConnected ? this.focused : null,
          tR = null !== (JR = this.layerRoot) && void 0 !== JR && JR.isConnected ? this.layerRoot : null;
        return {
          point: yR ? (0, dR.E)(yR) : null !== (GR = this.lastFocusedCentre) && void 0 !== GR ? GR : this.getLayerStartPoint(tR),
          element: yR,
          direction: null
        }
      }
      getLayerStartPoint(RR) {
        if (!RR) return {
          x: window.innerWidth / 2,
          y: window.innerHeight / 2
        };
        const JR = this.pickInitial(RR, {
          includeDisabled: !0
        });
        return (0, dR.E)(null !== JR && void 0 !== JR ? JR : RR)
      }
      takeOver(RR, JR, GR) {
        const {
          element: yR,
          direction: tR,
          point: uR
        } = JR, ZR = yR instanceof HTMLElement && (0, sR.r)(yR, RR) ? yR : null;
        if (!tR) {
          const JR = this.focused;
          return ZR ? this.setFocus(ZR, {
            scroll: !1,
            byUser: !0
          }) : this.focusNearest(RR, uR), void(this.focused && this.focused === JR && this.focused.isConnected && Qy(null, this.focused, (0, dR.E)(this.focused)))
        }
        if (this.dpadRepeats.get(tR).update(!0, GR), ZR) return this.setFocus(ZR, {
          scroll: !1,
          byUser: !0
        }), void this.move(RR, tR, GR, !0);
        const qR = this.getEnabledCandidates(RR),
          iR = qR.map(Fy),
          fR = WG(new DOMRect(uR.x, uR.y, 0, 0), iR, tR),
          VR = fR >= 0 ? fR : BG(uR, iR);
        this.setFocus(VR >= 0 ? qR[VR] : this.pickInitial(RR), {
          byUser: !0
        })
      }
      focusNearest(RR, JR) {
        const GR = this.getEnabledCandidates(RR),
          yR = BG(JR, GR.map(Fy));
        this.setFocus(yR >= 0 ? GR[yR] : this.pickInitial(RR), {
          byUser: !0
        })
      }
      pickDefault(RR) {
        let {
          includeDisabled: JR = !1,
          exclude: GR = null
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const yR = [...RR.querySelectorAll(Sy)].filter((yR => (null === GR || void 0 === GR || !GR.has(yR)) && (JR ? (0, sR.x)(yR, RR) : (0, sR.r)(yR, RR)))),
          tR = oy(yR.map(Dy));
        return tR >= 0 ? yR[tR] : null
      }
      pickNewAreaStart(RR, JR) {
        const GR = [...RR.querySelectorAll(Yy)].filter(sR.q);
        for (const yR of [...(0, sR.f)(RR), ...GR]) {
          if (JR.has(yR)) continue;
          const RR = this.getEnabledCandidates(yR),
            GR = oy(RR.map(Dy));
          if (GR >= 0) return RR[GR]
        }
        return null
      }
      pickInitial(RR) {
        let {
          includeDisabled: JR = !1,
          waitForContent: GR = !1,
          enteredAtMs: yR = this.enteredLayerAtMs
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const tR = this.pickDefault(RR, {
          includeDisabled: JR
        });
        if (tR) return tR;
        const uR = RR => JR ? (0, sR.d)(RR) : this.getEnabledCandidates(RR);
        let ZR = [];
        for (const wR of (0, sR.f)(RR))
          if (ZR = uR(wR), ZR.length > 0) break;
        if (0 === ZR.length) {
          if (GR && performance.now() - yR < 1e4 && (0, sR.m)(RR)) return null;
          ZR = uR(RR)
        }
        const qR = ZR.map(Fy),
          iR = DR(null),
          fR = ZR.filter(((RR, JR) => HR(qR[JR], iR))),
          VR = fR.length > 0 ? fR : ZR,
          KR = oy(VR.map(Dy));
        return KR >= 0 ? VR[KR] : null
      }
      validateFocus(RR, JR) {
        if (this.pendingFocus) {
          var GR, yR;
          const tR = this.pendingFocus.find();
          if (tR && (0, sR.r)(tR, RR.root)) return this.pendingFocus = null, void this.setFocus(tR, {
            byUser: !0
          });
          JR > this.pendingFocus.untilMs && (null === (GR = (yR = this.pendingFocus).holdWhile) || void 0 === GR || !GR.call(yR)) && (this.pendingFocus = null)
        }
        const tR = this.focused,
          uR = !!tR && (0, sR.r)(tR, RR.root);
        if (!(!uR && tR && tR === this.lastActivated && JR - this.lastActivatedAtMs < 5e3 && RR.root.contains(tR) && (0, sR.q)(tR) && (0, sR.u)(tR))) {
          if (!uR && this.restoreOnFocusLoss && this.layerKey) return this.restoreOnFocusLoss = !1, this.movedInLayer = !1, this.scrolledInLayer = !1, this.enteredLayerAtMs = JR, void this.restoreLayerFocus(RR.root, !0);
          if ((!uR || !this.movedInLayer && !this.scrolledInLayer) && !(JR - this.lastRefocusCheckMs < (uR ? 200 : 50)))
            if (this.lastRefocusCheckMs = JR, uR) {
              const GR = JR - this.enteredLayerAtMs < 15e3 ? this.pickPreferred(RR.root) : null,
                yR = null !== GR && void 0 !== GR ? GR : this.restoredFromMemory ? null : this.pickDefault(RR.root);
              yR && yR !== tR && this.setFocus(yR)
            } else {
              if (this.lastFocusedCentre && this.movedInLayer) {
                const JR = this.pendingFocus;
                return this.focusNearest(RR.root, this.lastFocusedCentre), void(this.pendingFocus = JR)
              }
              this.setFocus(this.pickPreferred(RR.root))
            }
        }
      }
      handleButtons(RR, JR) {
        if (RR.wasPressed((0, VR.h)("menuToggleCursor"))) return Cy(this.getHandoff()), !0;
        if (RR.wasPressed((0, VR.h)("menuBack"))) {
          const RR = (0, dR.n)(JR.root);
          return RR ? this.setFocus(RR, {
            byUser: !0
          }) : jG(this, JR.root) || ((0, dR.f)(JR.root) ? this.returnToOpener(JR.root) : this.backToStrip(JR.root) || Ky()), !0
        }
        const GR = (0, VR.h)("menuConfirm");
        var yR, tR;
        RR.wasPressed(GR) && (this.confirmPressedOn = this.focused, this.confirmRepeatKey = null !== (yR = null === (tR = this.focused) || void 0 === tR ? void 0 : tR.getAttribute("data-pad-repeat")) && void 0 !== yR ? yR : null, this.confirmRepeated = RR.wokeDevice, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now()));
        if (RR.wasReleased(GR)) {
          const RR = this.confirmPressedOn;
          if (this.confirmPressedOn = null, RR && !this.confirmRepeated && RR === this.focused && RR.isConnected && !(0, sR.u)(RR)) {
            const GR = RR.matches("[data-pad-tab]") ? RR.closest(Ey) : null;
            GR ? this.enterTab(RR, GR, JR.root, performance.now()) : this.activate(RR)
          }
          return !0
        }
        return this.repeatConfirm(RR, GR), hG(this, RR, JR)
      }
      repeatConfirm(RR, JR) {
        const GR = this.confirmPressedOn;
        GR && null !== this.confirmRepeatKey && RR.isHeld(JR) && (GR === this.focused && GR.isConnected && !(0, sR.u)(GR) && GR.getAttribute("data-pad-repeat") === this.confirmRepeatKey ? GR.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.confirmRepeated = !0, this.activate(GR)) : this.confirmRepeatKey = null)
      }
      backToStrip(RR) {
        const JR = this.focused;
        if (!(0, wR.l)().menuBackToCategories) return !1;
        const GR = null !== JR && void 0 !== JR && JR.isConnected ? this.tabStripNav.backToStrip(JR, this.getEnabledCandidates(RR), RR) : null;
        return GR && this.setFocus(GR, {
          byUser: !0
        }), null !== GR
      }
      returnToOpener(RR) {
        const JR = this.lastActivatedKey;
        JR && (this.lastActivatedKey = null, this.focusWhenFound((() => {
          var GR;
          return null !== (GR = this.getEnabledCandidates(RR).find((RR => (0, dR.G)(RR) === JR))) && void 0 !== GR ? GR : null
        })))
      }
      activate(RR) {
        var JR;
        if ((0, Oy.e)(RR) || (0, dR.H)(RR)) return;
        this.lastActivatedKey = null !== (JR = (0, dR.G)(RR)) && void 0 !== JR ? JR : this.lastActivatedKey, this.lastActivated = RR, this.lastActivatedAtMs = performance.now(), this.rememberFocus(RR);
        const GR = this.layerRoot;
        if (GR) {
          const JR = new Set(GR.querySelectorAll(Sy)),
            yR = new Set(GR.querySelectorAll(`[data-pad-initial-area], ${Yy}`)),
            tR = this.lastActivatedAtMs;
          this.focusWhenFound((() => {
            var tR;
            return (0, sR.r)(RR, GR) ? null : null !== (tR = this.pickDefault(GR, {
              exclude: JR
            })) && void 0 !== tR ? tR : this.pickNewAreaStart(GR, yR)
          }), 5e3, (() => RR.isConnected && (0, sR.u)(RR) && performance.now() - tR < 6e4))
        }(0, dR.e)(RR), (0, dR.j)(RR)
      }
      handleDirections(RR, JR, GR, yR) {
        const tR = OG(JR.layer.kind) ? (0, VR.h)("chat") : null;
        for (const qR of eR.B) {
          this.dpadRepeats.get(qR).update(RR.isHeld(qR), GR) && (qR !== tR || RR.wasPressed(qR)) && this.move(JR.root, qR, GR, !0)
        }
        const uR = yR ? (0, eR.k)(RR.leftStick, (0, wR.l)().moveDeadzone) : {
            x: 0,
            y: 0
          },
          ZR = this.stickRepeat.update((0, eR.eb)(uR), GR);
        if (ZR && this.move(JR.root, ZR, GR, !0), this.retryMove && GR >= this.retryMove.atMs) {
          const {
            direction: RR
          } = this.retryMove;
          this.retryMove = null, this.move(JR.root, RR, GR, !1)
        }
      }
      move(RR, JR, GR, yR) {
        var tR;
        let uR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.pendingFocus && this.pendingFocus === (null === (tR = this.tabOpenWait) || void 0 === tR ? void 0 : tR.wait) && JR === this.tabOpenWait.direction) return;
        this.pendingFocus = null;
        const ZR = this.focused;
        if (!ZR || !ZR.isConnected) {
          const JR = this.pickInitial(RR);
          return void(JR && this.setFocus(JR, {
            byUser: !0
          }))
        }
        const qR = "Left" === JR || "Right" === JR,
          iR = qR ? (0, Oy.e)(ZR) : null;
        if (iR) return void iR.adjust("Left" === JR ? -1 : 1);
        const fR = RR => null !== RR.closest("[data-pad-friends-column]"),
          VR = fR(ZR),
          KR = Fy(ZR),
          wR = qR || ZR.closest(Ey) ? null : (RR => {
            const JR = new Map;
            return GR => {
              const yR = GR.closest(Ey);
              if (!yR) return !1;
              let tR = JR.get(yR);
              if (void 0 === tR) {
                const GR = Fy(yR);
                tR = UG(RR, GR) && (GR.right <= RR.left || GR.left >= RR.right), JR.set(yR, tR)
              }
              return tR
            }
          })(KR),
          rR = null !== ZR.closest(dy),
          eR = this.getEnabledCandidates(RR).filter((RR => RR !== ZR && (qR || fR(RR) === VR) && !(null !== wR && void 0 !== wR && wR(RR)) && (rR || !RR.closest(dy)))),
          aR = eR.map(Fy),
          LR = gR(ZR, "y", RR),
          nR = DR(LR);
        if (!uR && !HR(KR, nR)) {
          const RR = eR.filter(((RR, JR) => HR(aR[JR], nR)));
          if (RR.length > 0) {
            const JR = {
              x: nR.left + nR.width / 2,
              y: nR.top + nR.height / 2
            };
            return void this.setFocus(RR[BG(JR, RR.map(Fy))], {
              byUser: !0
            })
          }
        }
        const UR = qR ? ((RR, JR, GR) => {
            const yR = Fy(RR),
              tR = RR.closest(Ey),
              uR = tR ? Fy(tR) : null;
            return JR.map(((JR, ZR) => {
              const qR = GR[ZR];
              if (qR.bottom > yR.top && qR.top < yR.bottom) return !0;
              const iR = JR.closest(Ey);
              if (tR && uR) return iR !== tR && (null !== iR || qR.bottom <= uR.top || qR.top >= uR.bottom);
              if (iR) return !UG(yR, Fy(iR));
              let fR = RR;
              for (let GR = RR.parentElement; GR && !GR.contains(JR); GR = GR.parentElement) fR = GR;
              const VR = Fy(fR);
              return qR.right > VR.left && qR.left < VR.right
            }))
          })(ZR, eR, aR) : void 0,
          WR = qR && !ZR.closest(Ey) ? (RR => RR.map((RR => !RR.closest(Ny))))(eR) : void 0,
          AR = ((RR, JR) => {
            const GR = [];
            for (let tR = RR; tR; tR = tR.parentElement) GR.push(tR);
            const yR = new Map;
            return GR.forEach(((RR, JR) => {
              yR.set(RR, GR.length - 1 - JR)
            })), JR.map((RR => {
              for (let JR = RR; JR; JR = JR.parentElement) {
                const RR = yR.get(JR);
                if (void 0 !== RR) return RR
              }
              return -1
            }))
          })(ZR, eR),
          CR = qR ? "x" : "y",
          XR = gR(ZR, CR, RR);
        let MR = WG(KR, aR, JR, AR, UR, WR);
        if (MR >= 0 && XR && !XR.contains(eR[MR])) {
          const RR = eR.flatMap(((RR, JR) => XR.contains(RR) ? [JR] : [])),
            GR = JR => JR && RR.map((RR => JR[RR])),
            yR = WG(KR, RR.map((RR => aR[RR])), JR, RR.map((RR => AR[RR])), GR(UR), GR(WR));
          MR = yR >= 0 ? RR[yR] : MR
        }
        if (MR >= 0) return void this.moveTo(ZR, eR[MR], eR, RR, JR, uR);
        if (!yR) return;
        const BR = "Right" === JR || "Down" === JR ? 1 : -1;
        if (XR && xR(XR, CR, BR)) {
          const RR = "y" === CR ? XR.clientHeight : XR.clientWidth;
          NR(XR, CR, BR * RR * .5), this.retryMove = {
            direction: JR,
            atMs: GR + 80
          }
        }
      }
      moveTo(RR, JR, GR, yR, tR, uR) {
        const ZR = this.tabStripNav.findTabContent(RR, JR, GR);
        ZR && "true" !== RR.dataset.padSelected ? this.openTab(RR, ZR, yR, tR) : uR && !ZR || this.setFocus(this.tabStripNav.redirect(RR, JR, GR, yR), {
          byUser: !0
        })
      }
      openTab(RR, JR, GR, yR) {
        const tR = JR.parentElement;
        (0, dR.e)(RR), this.focusWhenFound((() => "true" !== RR.dataset.padSelected ? null : JR.isConnected ? this.tabStripNav.pickContentStart(JR, this.getEnabledCandidates(GR), GR) : tR ? this.tabStripNav.pickReplacedContentStart(RR, tR, this.getEnabledCandidates(GR), GR) : null), 3e3), this.tabOpenWait = {
          wait: this.pendingFocus,
          direction: yR
        }
      }
      enterTab(RR, JR, GR, yR) {
        this.move(GR, (RR => {
          const JR = [...RR.querySelectorAll(Py)].filter((JR => JR.closest(cy) === RR));
          if (JR.length >= 2) {
            const RR = JR[0].getBoundingClientRect(),
              GR = JR[1].getBoundingClientRect();
            return Math.abs(GR.top - RR.top) > Math.abs(GR.left - RR.left) ? "Right" : "Down"
          }
          const GR = RR.getBoundingClientRect();
          return GR.height > GR.width ? "Right" : "Down"
        })(JR), yR, !1, !0), this.focused !== RR || this.pendingFocus || this.activate(RR)
      }
      handleScroll(RR, JR) {
        const GR = (0, eR.k)(RR.rightStick, .2);
        if (0 === GR.x && 0 === GR.y) return void(this.scrollRemainder = {
          x: 0,
          y: 0
        });
        const yR = RR.dtMs / 1e3;
        for (const uR of ["x", "y"]) {
          var tR;
          const RR = GR[uR];
          if (0 === RR) continue;
          const ZR = null !== (tR = gR(this.focused, uR, JR.root)) && void 0 !== tR ? tR : vR(JR.root, uR);
          if (!ZR) continue;
          const qR = Math.sign(RR) * RR * RR * 1500 * yR + this.scrollRemainder[uR],
            iR = Math.trunc(qR);
          this.scrollRemainder[uR] = qR - iR, 0 !== iR && (NR(ZR, uR, iR), this.scrolledInLayer = !0)
        }
      }
    };
    var Rt = GR(9533);
    var Jt = GR(10063);
    const Gt = {
        duration: 80,
        strongMagnitude: .2,
        weakMagnitude: .2,
        needsPadInUse: !1
      },
      yt = {
        damage: {
          duration: 120,
          strongMagnitude: .45,
          weakMagnitude: .3,
          minIntervalMs: 250,
          needsPadInUse: !0
        },
        blockBreak: {
          duration: 40,
          strongMagnitude: 0,
          weakMagnitude: .25,
          minIntervalMs: 120,
          needsPadInUse: !0
        },
        hit: {
          duration: 50,
          strongMagnitude: .15,
          weakMagnitude: .35,
          minIntervalMs: 120,
          needsPadInUse: !0
        },
        connect: {
          ...Gt,
          minIntervalMs: 1e3
        },
        preview: {
          ...Gt,
          minIntervalMs: 0
        }
      };
    const tt = new class {
        constructor(RR) {
          this.deps = RR, this.lastPlayedMs = {}, this.loggedFailure = !1, this.logFailure = RR => {
            this.loggedFailure || (this.loggedFailure = !0, console.warn("Controller vibration failed; further failures are not logged.", RR))
          }
        }
        play(RR, JR) {
          const GR = yt[RR];
          if (!this.deps.isVibrationOn() || GR.needsPadInUse && !this.deps.isPadInUse()) return !1;
          const yR = this.lastPlayedMs[RR];
          if (void 0 !== yR && JR - yR < GR.minIntervalMs) return !1;
          const tR = this.deps.getActuator();
          if (!tR) return !1;
          this.lastPlayedMs[RR] = JR;
          const {
            duration: uR,
            strongMagnitude: ZR,
            weakMagnitude: qR
          } = GR;
          try {
            tR.playEffect("dual-rumble", {
              duration: uR,
              strongMagnitude: ZR,
              weakMagnitude: qR
            }).catch(this.logFailure)
          } catch (iR) {
            this.logFailure(iR)
          }
          return !0
        }
      }({
        getActuator: () => (RR => {
          const JR = null === RR || void 0 === RR ? void 0 : RR.vibrationActuator;
          return "function" === typeof(null === JR || void 0 === JR ? void 0 : JR.playEffect) ? JR : null
        })(ZR.e.getActiveGamepad()),
        isVibrationOn: () => (0, wR.l)().vibration,
        isPadInUse: rR.k
      }),
      ut = RR => {
        tt.play(RR, performance.now())
      };
    var Zt = GR(9536),
      qt = GR(4053),
      it = GR(116),
      ft = GR(46),
      Vt = GR(726);
    class Kt {
      constructor(RR) {
        this.deps = RR
      }
      check() {
        let RR = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const JR = this.deps.isPadActive() ? this.deps.getPadFamily() : null;
        if (!JR) return "skipped";
        const GR = RR ? this.deps.getVisitId() : this.deps.peekVisitId();
        return null === GR || this.deps.readReportedVisitId() === GR ? "skipped" : this.deps.canReport() ? (this.deps.writeReportedVisitId(GR), this.deps.fK(JR, this.deps.getInputType()), "reported") : "notReady"
      }
    }
    const wt = "controllerUsageReportedVisit";
    var rt = GR(1493),
      et = GR(1943),
      Lt = GR(709),
      nt = GR(1581),
      Ut = GR(1343);
    const Wt = RR => ({
        translationKey: `controller:${RR}`
      }),
      At = {
        A: "A",
        B: "B",
        X: "X",
        Y: "Y",
        LB: "LB",
        RB: "RB",
        LT: "LT",
        RT: "RT",
        View: Wt("padButtonView"),
        Menu: Wt("padButtonMenu"),
        LS: "L3",
        RS: "R3",
        Up: Wt("padButtonDpadUp"),
        Down: Wt("padButtonDpadDown"),
        Left: Wt("padButtonDpadLeft"),
        Right: Wt("padButtonDpadRight"),
        Home: Wt("padButtonHome"),
        LeftStick: Wt("padButtonLeftStick"),
        RightStick: Wt("padButtonRightStick")
      },
      Ct = {
        xbox: {
          LS: "LS",
          RS: "RS"
        },
        generic: {},
        steamdeck: {
          LB: "L1",
          RB: "R1",
          LT: "L2",
          RT: "R2"
        },
        playstation: {
          A: "\u2715",
          B: "\u25cb",
          X: "\u25a1",
          Y: "\u25b3",
          LB: "L1",
          RB: "R1",
          LT: "L2",
          RT: "R2",
          View: Wt("padButtonCreate"),
          Menu: Wt("padButtonOptions")
        },
        nintendo: {
          A: "B",
          B: "A",
          X: "Y",
          Y: "X",
          LB: "L",
          RB: "R",
          LT: "ZL",
          RT: "ZR",
          View: "\u2212",
          Menu: "+"
        }
      },
      Xt = (RR, JR) => {
        var GR;
        const yR = null !== (GR = Ct[RR][JR]) && void 0 !== GR ? GR : At[JR];
        return "string" === typeof yR ? yR : (0, tR.w)(Ut.g.get().getCurrentLanguageCode(), yR.translationKey)
      },
      Mt = RR => {
        let {
          glyph: JR,
          family: GR,
          className: yR
        } = RR;
        const tR = (0, rR.v)(),
          uR = null !== GR && void 0 !== GR ? GR : tR,
          ZR = (0, Zt.f)(uR, JR);
        return (0, IR.jsx)("span", {
          className: PR()("ControllerGlyph", yR),
          role: "img",
          "aria-label": Xt(uR, JR),
          style: {
            "--pad-glyph-mask": `url(${ZR})`,
            "--pad-glyph-aspect": (0, Zt.d)(uR, JR)
          }
        })
      };
    var Bt = GR(2105);
    const lt = RR => {
      let {
        action: JR
      } = RR;
      const {
        t: GR
      } = (0, tR.A)();
      switch (JR.kind) {
        case "reload":
          return (0, IR.jsx)("span", {
            children: GR("controller:gameplayReload")
          });
        case "specialAction":
          return null;
        case "customButton":
          return (0, IR.jsx)(Bt.c, {
            text: JR.description ? [{
              icon: JR.icon
            }, ` ${JR.description}`] : [{
              icon: JR.icon
            }]
          });
        case "touchButton":
          return (0, IR.jsx)(Bt.c, {
            text: JR.label
          })
      }
    };
    var pt = GR(10072);
    const gt = RR => {
      let {
        hold: JR
      } = RR;
      return (0, IR.jsx)("div", {
        className: "DropStackFillTrack",
        style: {
          "--pad-drop-stack-hold": `${JR.holdMs}ms`
        },
        children: (0, IR.jsx)("div", {
          className: "DropStackFillBar"
        })
      }, JR.id)
    };
    var bt = GR(10099),
      vt = GR(10106),
      Ot = GR(10114),
      xt = GR(10094);
    const Nt = () => {
        const {
          gameState: RR
        } = (0, iR.o)(["gameState"]), JR = (0, rR.s)(), [yR, tR] = (0, oR.useState)(!1), [uR, ZR] = (0, oR.useState)(!1);
        return (0, oR.useEffect)((() => {
          "inGame" === RR && tR(!0)
        }), [RR]), (0, oR.useEffect)((() => {
          if (!yR) return;
          let RR = null,
            JR = !1;
          return (Lt.G ? Promise.all([GR.e(85), GR.e(105), GR.e(306), GR.e(127), GR.e(256), GR.e(254), GR.e(104)]).then((() => GR(42071))).then((RR => RR.startWasmPadGameplay)) : Promise.all([GR.e(85), GR.e(264), GR.e(263), GR.e(113), GR.e(89), GR.e(86), GR.e(87), GR.e(88), GR.e(213), GR.e(260), GR.e(91), GR.e(105), GR.e(252), GR.e(266), GR.e(112), GR.e(124), GR.e(257), GR.e(142), GR.e(240), GR.e(102), GR.e(90), GR.e(250), GR.e(185), GR.e(256), GR.e(123)]).then((() => GR(42201))).then((RR => RR.startPadGameplay))).then((GR => {
            JR || (RR = GR())
          })).catch((RR => {
            console.error("Pad gameplay failed to load", RR), JR || ZR(!0)
          })), () => {
            var GR;
            JR = !0, null === (GR = RR) || void 0 === GR || GR()
          }
        }), [yR]), (0, oR.useEffect)((() => {
          uR && JR && (ZR(!1), rt.NotificationProvider.showPromptPopup({
            title: "controller:gameplayLoadFailedTitle",
            subtitle: "controller:gameplayLoadFailedSubtitle",
            confirmText: "settingsMenu:reloadPagePopupConfirm",
            confirmTooltip: "",
            cancelText: "general:cancel",
            cancelTooltip: ""
          }).getResult().then((RR => {
            !0 === RR && (0, et.reloadBloxd)()
          })))
        }), [uR, JR]), (0, IR.jsxs)(IR.Fragment, {
          children: [(0, IR.jsx)(Dt, {}), (0, IR.jsx)(Ht, {}), (0, IR.jsx)(ot, {})]
        })
      },
      Dt = () => {
        const {
          t: RR
        } = (0, tR.A)(), JR = (0, rR.s)(), {
          gameState: GR,
          isUiHidden: yR
        } = (0, iR.o)(["gameState", "isUiHidden"]), {
          hideButtonHints: uR
        } = (0, wR.u)(), ZR = (0, pt.h)(), qR = (0, pt.l)(), [fR, KR] = (0, oR.useState)(Ot.c);
        return (0, nt.f)(xt.q, KR), !JR || uR || yR || "inGame" !== GR || !ZR && !fR ? null : (0, IR.jsxs)("div", {
          className: "PadActionHint SmallTextBold",
          children: [ZR && (0, IR.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, IR.jsx)(Mt, {
              glyph: (0, VR.h)("actionButton")
            }), (0, IR.jsx)(lt, {
              action: ZR
            }), qR && (0, IR.jsx)("span", {
              className: "PadActionHintMore",
              children: RR("controller:gameplayActionWheelHint")
            })]
          }), fR && (0, IR.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, IR.jsx)(Mt, {
              glyph: (0, VR.h)("pickBlock")
            }), (0, IR.jsx)("span", {
              children: RR("controller:gameplayPickBlock")
            })]
          })]
        })
      },
      Ht = () => {
        const {
          t: RR
        } = (0, tR.A)(), JR = (0, rR.s)(), {
          gameState: GR,
          isUiHidden: yR
        } = (0, iR.o)(["gameState", "isUiHidden"]), [uR, ZR] = (0, oR.useState)(bt.b);
        return (0, nt.f)(xt.p, ZR), JR && !yR && "inGame" === GR && uR ? (0, IR.jsxs)("div", {
          className: "PadDropStackFill SmallTextBold",
          children: [(0, IR.jsx)("span", {
            children: RR("controller:gameplayDropStack")
          }), (0, IR.jsx)(gt, {
            hold: uR
          })]
        }) : null
      },
      ot = () => {
        const {
          t: RR
        } = (0, tR.A)(), JR = (0, rR.s)(), {
          gameState: GR,
          isUiHidden: yR
        } = (0, iR.o)(["gameState", "isUiHidden"]), {
          hideButtonHints: uR
        } = (0, wR.u)(), [ZR, qR] = (0, oR.useState)(vt.c);
        return (0, nt.f)(xt.l, qR), JR && !yR && "inGame" === GR && ZR ? (0, IR.jsxs)("div", {
          className: "PadAttackLatchedHint SmallTextBold",
          children: [!uR && (0, IR.jsx)(Mt, {
            glyph: (0, VR.h)("attack")
          }), (0, IR.jsx)("span", {
            children: RR("controller:gameplayAttackLatched")
          })]
        }) : null
      };
    var ct = GR(10118),
      Pt = GR(2163),
      It = GR(3465),
      mt = GR(9520);
    const zt = RR => RR && !(0, ct.c)(Pt.c.get("shopInfo")),
      St = () => {
        const RR = "inGame" === (0, iR.o)(["gameState"]).gameState;
        return (0, It.e)("shopInfo", (() => {
          (0, mt.g)(zt(RR))
        })), (0, oR.useEffect)((() => {
          (0, mt.g)(zt(RR))
        }), [RR]), null
      },
      jt = () => {
        const {
          t: RR
        } = (0, tR.A)(), {
          hideButtonHints: JR
        } = (0, wR.u)();
        (0, rR.v)();
        const GR = (0, PJ.j)();
        return (0, oR.useEffect)((() => (() => {
          const RR = KR.e.register({
              name: "inventory",
              isActive: tG.isActive,
              onFrame: tG.onFrame,
              onDeactivate: tG.onDeactivate,
              wakePressActs: tG.wakePressActs
            }),
            JR = RR => {
              tG.noteRealPointer(RR), tG.shouldBlockRealPointer(RR) && RR.stopPropagation()
            };
          for (const ZR of uG) window.addEventListener(ZR, JR, !0);
          const GR = (0, TR.l)((() => {
              "inventory" !== KR.e.getActiveConsumerName() && tG.forgetSurface()
            })),
            yR = RR => {
              const JR = RR.target;
              (0, rR.k)() && (0, kR.k)(JR) && JR.closest(CJ) && (0, TR.i)() && (0, TR.q)(JR)
            };
          document.addEventListener("focusout", yR, !0);
          const {
            invalidate: tR,
            onScroll: uR
          } = tG.targets;
          return document.addEventListener("scroll", uR, !0), window.addEventListener("resize", tR), () => {
            RR(), GR();
            for (const RR of uG) window.removeEventListener(RR, JR, !0);
            document.removeEventListener("scroll", uR, !0), document.removeEventListener("focusout", yR, !0), window.removeEventListener("resize", tR), tG.targets.disconnect()
          }
        })()), []), (0, IR.jsxs)(IR.Fragment, {
          children: [(0, IR.jsx)(jR, {
            placer: tG.ring,
            className: "InventorySlotCursorRing"
          }), GR.showing && !JR && (0, IR.jsx)("div", {
            className: "InventorySlotCursorHints SmallTextBold",
            children: FR(GR).map((JR => {
              let {
                actions: yR,
                labelKey: tR
              } = JR;
              return (0, IR.jsxs)("div", {
                className: "InventorySlotCursorHint",
                children: [yR.map((RR => (0, IR.jsx)(Mt, {
                  glyph: (0, VR.h)(RR)
                }, RR))), (0, IR.jsx)("span", {
                  children: RR(`controller:${tR}`)
                }), "inventoryDrop" === tR && GR.dropStackHold && (0, IR.jsx)(gt, {
                  hold: GR.dropStackHold
                })]
              }, tR)
            }))
          })]
        })
      },
      dt = [{
        command: "close",
        action: "keyboardClose",
        repeats: !1
      }, {
        command: "submit",
        action: "keyboardSubmit",
        repeats: !1
      }, {
        command: "backspace",
        action: "keyboardBackspace",
        repeats: !0
      }, {
        command: "space",
        action: "keyboardSpace",
        repeats: !1
      }, {
        command: "caretLeft",
        action: "keyboardCaretLeft",
        repeats: !0
      }, {
        command: "caretRight",
        action: "keyboardCaretRight",
        repeats: !0
      }, {
        command: "shift",
        action: "keyboardShift",
        repeats: !1
      }, {
        command: "page",
        action: "keyboardSymbols",
        repeats: !1
      }, {
        command: "channel",
        action: "keyboardChannel",
        repeats: !1
      }],
      Et = RR => Array.from(RR).map((RR => ({
        type: "char",
        char: RR,
        width: 1
      }))),
      Yt = function(RR) {
        return {
          type: "command",
          command: RR,
          width: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
        }
      },
      kt = [Yt("page", 2), Yt("otherPage"), Yt("caretLeft"), Yt("space", 3), Yt("caretRight"), Yt("close", 1.5), Yt("submit", 1.5)],
      Qt = [Yt("page", 2), Yt("otherPage"), Yt("caretLeft"), Yt("space", 2), Yt("caretRight"), Yt("newline"), Yt("close", 1.5), Yt("submit", 1.5)],
      Ft = [
        [...Et("1234567890"), Yt("backspace")], Et("qwertyuiop/"), Et("asdfghjkl'?"), [Yt("shift", 2), ...Et("zxcvbnm,.")]
      ],
      Tt = [
        [...Et("1234567890"), Yt("backspace")], Et("!@#$%^&*()/"), Et('-_=+[]{};:"'), Et("~`|\\<>'\u20ac\xa3,.")
      ],
      st = {
        letters: Ft,
        accents: [
          [...Et("1234567890"), Yt("backspace")], Et("\xe1\xe9\xed\xf3\xfa\xe0\xe8\xec\xf2\xf9\xf1"), Et("\xe2\xea\xee\xf4\xfb\xe4\xeb\xef\xf6\xfc\xe7"), [Yt("shift", 2), ...Et("\xe3\xf5\xdf\u0153\u011f\u015f\u0131\xbf\xa1")]
        ],
        symbols: Tt
      },
      ht = new Set(["de", "es", "fr", "it", "nl", "pt", "pt-BR", "tr", "vi"]),
      Ru = (RR, JR) => "letters" === RR ? JR ? {
        page: "accents",
        otherPage: "symbols"
      } : {
        page: "symbols",
        otherPage: "accents"
      } : {
        page: "letters",
        otherPage: "accents" === RR ? "symbols" : "accents"
      },
      Ju = function(RR, JR) {
        const GR = ((RR, JR) => [...st[RR], JR ? Qt : kt])(RR, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]);
        if (0 === JR) return GR;
        const yR = Math.min(2, Gu(GR[0]) / JR);
        return [Array.from({
          length: JR
        }, ((RR, JR) => ({
          type: "phrase",
          phraseIndex: JR,
          width: yR
        }))), ...GR]
      },
      Gu = RR => RR.reduce(((RR, JR) => RR + JR.width), 0),
      yu = RR => Math.max(...RR.map(Gu)),
      tu = (RR, JR) => {
        const GR = RR[JR.row];
        let yR = (yu(RR) - Gu(GR)) / 2;
        for (let tR = 0; tR < JR.col; tR++) yR += GR[tR].width;
        return yR + GR[JR.col].width / 2
      },
      uu = (RR, JR, GR) => {
        let yR = 0,
          tR = 1 / 0;
        for (let uR = 0; uR < RR[JR].length; uR++) {
          const ZR = Math.abs(tu(RR, {
            row: JR,
            col: uR
          }) - GR);
          ZR < tR - 1e-9 && (yR = uR, tR = ZR)
        }
        return yR
      },
      Zu = (RR, JR) => {
        const GR = Math.max(0, Math.min(RR.length - 1, JR.row));
        return {
          row: GR,
          col: Math.max(0, Math.min(RR[GR].length - 1, JR.col))
        }
      },
      qu = (RR, JR, GR) => "once" === RR && JR - GR <= 400 ? "caps" : "off" === RR ? "once" : "off",
      iu = (RR, JR) => "once" === RR && (RR => RR.toLowerCase() !== RR.toUpperCase())(JR) ? "off" : RR,
      fu = (RR, JR, GR) => {
        if ("symbols" === JR || "off" === GR) return RR;
        const yR = RR.toUpperCase();
        return 1 === yR.length ? yR : RR
      };
    var Vu = GR(9975),
      Ku = GR(10127);
    const wu = {
        visible: !1,
        target: null,
        kind: null,
        page: "letters",
        accentsFirst: !1,
        shift: "off",
        focus: {
          row: 0,
          col: 0
        },
        preferredX: 0,
        placement: "bottom",
        maxHeightPx: 0
      },
      ru = ["XV", "nameTag"],
      eu = RR => {
        const JR = RR.target instanceof HTMLTextAreaElement && !ru.includes(RR.kind);
        return Ju(RR.page, "chat" === RR.kind ? Ku.e.length : 0, JR)
      },
      au = RR => {
        const JR = RR.getBoundingClientRect(),
          GR = window.innerHeight,
          yR = JR.top + JR.height / 2 < GR / 2 ? "bottom" : "top",
          tR = "bottom" === yR ? GR - JR.bottom - 6 : JR.top - 6;
        return {
          placement: yR,
          maxHeightPx: Math.min(.46 * GR, Math.max(.3 * GR, tR))
        }
      },
      Lu = RR => {
        (0, gG.h)(RR) ? (0, gG.e)().close(): (hy.noteChosenStop(RR), RR.blur())
      };
    class nu {
      constructor(RR) {
        this.host = RR, this.lastShiftPressMs = -1 / 0, this.phraseTexts = [], this.phrasesFill = !1
      }
      setPhraseRow(RR, JR) {
        this.phraseTexts = RR, this.phrasesFill = JR
      }
      pressKey(RR) {
        const JR = this.host.getState(),
          GR = eu(JR),
          yR = GR[RR.row][RR.col];
        this.host.setState({
          ...JR,
          focus: RR,
          preferredX: tu(GR, RR)
        }), "char" === yR.type ? this.typeChar(yR.char) : "command" === yR.type ? this.runCommand(yR.command) : this.sendPhrase(yR.phraseIndex)
      }
      runCommand(RR) {
        const JR = this.host.getState();
        switch (RR) {
          case "backspace":
            (0, kR.d)(JR.target);
            break;
          case "space":
            (0, kR.h)(JR.target, " ");
            break;
          case "newline":
            (0, kR.h)(JR.target, "\n");
            break;
          case "caretLeft":
            (0, kR.n)(JR.target, -1);
            break;
          case "caretRight":
            (0, kR.n)(JR.target, 1);
            break;
          case "shift": {
            const RR = performance.now();
            this.host.setState({
              ...JR,
              shift: qu(JR.shift, RR, this.lastShiftPressMs)
            }), this.lastShiftPressMs = RR;
            break
          }
          case "page":
          case "otherPage": {
            const GR = Ru(JR.page, JR.accentsFirst)[RR];
            this.host.setState({
              ...JR,
              page: GR,
              focus: Zu(eu({
                ...JR,
                page: GR
              }), JR.focus)
            });
            break
          }
          case "submit":
            this.submit();
            break;
          case "close":
            this.close();
            break;
          case "channel":
            (0, gG.h)(JR.target) && (0, gG.e)().selectNextChannel()
        }
      }
      submit() {
        var RR, JR;
        const {
          target: GR
        } = this.host.getState();
        this.host.hide(), (0, gG.h)(GR) ? (0, gG.e)().submit() : (hy.noteChosenStop(GR), null === (RR = (JR = (0, gG.f)(GR)).submit) || void 0 === RR || RR.call(JR), document.activeElement === GR && GR.blur())
      }
      close() {
        const {
          target: RR
        } = this.host.getState();
        this.host.hide(), Lu(RR)
      }
      typeChar(RR) {
        const {
          target: JR,
          page: GR,
          shift: yR
        } = this.host.getState();
        (0, kR.h)(JR, fu(RR, GR, yR)), this.host.setState({
          ...this.host.getState(),
          shift: iu(yR, RR)
        })
      }
      sendPhrase(RR) {
        if (this.phrasesFill) {
          const {
            target: JR
          } = this.host.getState(), GR = this.phraseTexts[RR];
          GR && (JR.setSelectionRange(0, JR.value.length), (0, kR.h)(JR, GR))
        } else Ku.h.claim(performance.now()) && (this.host.hide(), (0, gG.e)().sendLine(this.phraseTexts[RR]))
      }
    }
    var Uu = GR(10001);
    const Wu = {
        initialDelayMs: 380,
        intervalMs: 85
      },
      Au = {
        initialDelayMs: 400,
        intervalMs: 55
      };
    class Cu {
      constructor(RR, JR) {
        this.host = RR, this.editor = JR, this.lastDirection = null, this.navRepeat = new eR.b((0, aR.c)(Wu)), this.commandRepeats = new Map(dt.filter((RR => {
          let {
            repeats: JR
          } = RR;
          return JR
        })).map((RR => {
          let {
            command: JR
          } = RR;
          return [JR, (0, aR.c)(Au)]
        })))
      }
      reset() {
        this.navRepeat.reset();
        for (const RR of this.commandRepeats.values()) RR.reset()
      }
      onVisibleFrame(RR) {
        const JR = performance.now();
        for (const {
            command: tR,
            action: uR
          }
          of dt) {
          const GR = (0, VR.h)(uR),
            yR = this.commandRepeats.get(tR);
          if ((yR ? yR.update(RR.isHeld(GR), JR) : RR.wasPressed(GR)) && (this.editor.runCommand(tR), !this.host.getState().visible)) return
        }
        if (RR.wasPressed((0, VR.h)("keyboardType")) && (this.editor.pressKey(this.host.getState().focus), !this.host.getState().visible)) return;
        const GR = this.readNavDirection(RR);
        this.lastDirection = GR;
        const yR = this.navRepeat.update(GR, JR);
        yR && this.navigate(yR)
      }
      onHiddenFrame(RR, JR) {
        var GR;
        if (RR.wasPressed((0, VR.h)("keyboardClose"))) return void Lu(JR);
        const yR = (0, VR.h)("keyboardType");
        if (RR.wasPressed(yR)) return KR.e.consumeButton(yR), void this.host.open(JR);
        const tR = this.readNavDirection(RR),
          uR = null !== tR && tR !== this.lastDirection;
        if (this.lastDirection = tR, !uR || (0, gG.h)(JR)) return;
        const ZR = (null === (GR = Vy()) || void 0 === GR ? void 0 : GR.root.contains(JR)) || null !== JR.closest(".EntireInventoryWrapper");
        Lu(JR), ZR && KR.e.handOffHeldInput()
      }
      navigate(RR) {
        const JR = this.host.getState();
        if ("Up" === RR && 0 === JR.focus.row && "chat" === JR.kind) return (0, gG.e)().stepHistory(), void this.host.setState({
          ...JR
        });
        const GR = ((RR, JR, GR, yR) => {
          if ("Left" === GR || "Right" === GR) {
            const yR = RR[JR.row].length,
              tR = (JR.col + ("Right" === GR ? 1 : -1) + yR) % yR,
              uR = {
                row: JR.row,
                col: tR
              };
            return {
              pos: uR,
              preferredX: tu(RR, uR)
            }
          }
          const tR = (JR.row + ("Down" === GR ? 1 : -1) + RR.length) % RR.length;
          return {
            pos: {
              row: tR,
              col: uu(RR, tR, yR)
            },
            preferredX: yR
          }
        })(eu(JR), JR.focus, RR, JR.preferredX);
        this.host.setState({
          ...JR,
          focus: GR.pos,
          preferredX: GR.preferredX
        })
      }
      readNavDirection(RR) {
        for (const JR of eR.B)
          if (RR.isHeld(JR)) return JR;
        return (0, eR.eb)((0, eR.k)(RR.leftStick, (0, wR.l)().moveDeadzone))
      }
    }
    const Xu = ["Up", "Down", "Left", "Right"],
      Mu = new Set(["CapsLock", "Control", "Fn", "FnLock", "Hyper", "NumLock", "ScrollLock", "Shift", "Super"]);
    const Bu = new class {
      constructor() {
        this.state = wu, this.listeners = new Set, this.ownedField = null, this.pendingChatInput = null, this.pendingChatTimeout = 0, this.savedInputMode = null, this.editor = new nu(this), this.padInput = new Cu(this, this.editor)
      }
      getState() {
        return this.state
      }
      setState(RR) {
        const JR = RR.visible !== this.state.visible;
        this.state = RR;
        for (const GR of this.listeners) GR();
        JR && fR.n.JK(Uu.d, RR.visible)
      }
      subscribe(RR) {
        return this.listeners.add(RR), () => {
          this.listeners.delete(RR)
        }
      }
      install() {
        const RR = KR.e.register({
            name: "keyboard",
            isActive: () => this.state.visible || (0, kR.k)(document.activeElement),
            onFrame: RR => {
              this.onFrame(RR)
            },
            onDeactivate: () => {
              this.padInput.reset()
            },
            wakePressActs: RR => Xu.includes(RR) || !this.state.visible && RR === (0, VR.h)("keyboardType")
          }),
          JR = RR => {
            const JR = RR.target;
            (0, kR.k)(JR) && (JR === this.pendingChatInput || (0, rR.k)() ? this.open(JR) : this.state.visible && JR !== this.state.target && (this.ownedField = null, this.hide()))
          },
          GR = () => {
            setTimeout((() => {
              this.releaseLostField()
            }), 0)
          },
          yR = RR => {
            RR.isTrusted && this.state.visible && (RR => !RR.repeat && !Mu.has(RR.key) && !(0, Vu.d)(RR.key) && !/^(Audio|Media|Browser|Launch|Gamepad)/.test(RR.key))(RR) && this.hide()
          },
          tR = () => {
            this.state.visible && this.setState({
              ...this.state,
              ...au(this.state.target)
            })
          };
        document.addEventListener("focusin", JR, !0), document.addEventListener("focusout", GR, !0), window.addEventListener("keydown", yR, !0), window.addEventListener("resize", tR);
        const uR = fR.n.subscribe(xt.e, (() => {
            this.openChat()
          })),
          ZR = fR.n.subscribe(Uu.e, (RR => {
            this.openForField(RR)
          }));
        return () => {
          RR(), document.removeEventListener("focusin", JR, !0), document.removeEventListener("focusout", GR, !0), window.removeEventListener("keydown", yR, !0), window.removeEventListener("resize", tR), fR.n.unsubscribe(uR), fR.n.unsubscribe(ZR), this.clearPendingChat(), this.hide(), this.ownedField = null
        }
      }
      openChat() {
        const RR = (0, gG.e)();
        RR ? document.activeElement !== RR.input ? (this.clearPendingChat(), this.pendingChatInput = RR.input, this.pendingChatTimeout = window.setTimeout((() => {
          this.pendingChatInput = null
        }), 250), RR.open()) : this.open(RR.input) : console.warn("controllerOpenChat with no chat mounted")
      }
      openForField(RR) {
        (0, kR.k)(RR) ? (document.activeElement !== RR && RR.focus(), document.activeElement === RR && this.open(RR)) : console.warn("controllerOpenKeyboard needs an editable input or textarea", RR)
      }
      open(RR) {
        var JR;
        if (this.clearPendingChat(), this.ownedField = RR, this.state.visible && this.state.target === RR) return;
        this.restoreInputMode(), (0, kR.p)(RR), this.savedInputMode = RR.getAttribute("inputmode"), RR.setAttribute("inputmode", "none");
        const GR = {
          ...wu,
          visible: !0,
          target: RR,
          kind: (0, gG.h)(RR) ? "chat" : null !== (JR = (0, gG.f)(RR).kind) && void 0 !== JR ? JR : null,
          accentsFirst: (yR = Ut.g.get().getCurrentLanguageCode(), ht.has(yR)),
          ...au(RR)
        };
        var yR;
        const tR = eu(GR),
          uR = ((RR, JR) => {
            for (let GR = 0; GR < RR.length; GR++) {
              const yR = RR[GR].findIndex((RR => "char" === RR.type && RR.char === JR));
              if (-1 !== yR) return {
                row: GR,
                col: yR
              }
            }
            return null
          })(tR, "q");
        this.padInput.reset(), this.setState({
          ...GR,
          focus: uR,
          preferredX: tu(tR, uR)
        })
      }
      hide() {
        this.state.visible && (this.restoreInputMode(), this.padInput.reset(), this.setState(wu))
      }
      onFrame(RR) {
        if (this.releaseLostField()) return;
        const JR = document.activeElement;
        this.state.visible ? this.padInput.onVisibleFrame(RR) : (0, kR.k)(JR) && this.padInput.onHiddenFrame(RR, JR)
      }
      releaseLostField() {
        const RR = this.ownedField;
        return !(null === RR || RR.isConnected && document.activeElement === RR) && (this.ownedField = null, this.hide(), !0)
      }
      clearPendingChat() {
        window.clearTimeout(this.pendingChatTimeout), this.pendingChatInput = null
      }
      restoreInputMode() {
        const {
          target: RR
        } = this.state;
        RR && (null === this.savedInputMode ? RR.removeAttribute("inputmode") : RR.setAttribute("inputmode", this.savedInputMode), this.savedInputMode = null)
      }
    };
    var lu = GR(10136),
      pu = GR(3887);
    const gu = new Map(dt.map((RR => {
        let {
          command: JR,
          action: GR
        } = RR;
        return [JR, GR]
      }))),
      bu = {
        letters: "ABC",
        accents: "\xe0\xe9",
        symbols: "&123"
      },
      vu = {
        chat: "controller:keyboardTargetChat",
        sign: "controller:keyboardTargetSign",
        nameTag: "controller:keyboardTargetNameTag",
        book: "controller:keyboardTargetBook",
        XV: "controller:keyboardTargetBookTitle"
      },
      Ou = RR => {
        const JR = (() => {
          const [, RR] = (0, oR.useReducer)((RR => RR + 1), 0);
          return RR
        })();
        (0, oR.useEffect)((() => {
          if (!RR) return;
          const GR = ["input", "select", "selectionchange", "keyup", "pointerup"];
          for (const tR of GR) RR.addEventListener(tR, JR);
          document.addEventListener("selectionchange", JR);
          const yR = new MutationObserver(JR);
          return yR.observe(RR, {
            attributeFilter: ["placeholder"]
          }), () => {
            yR.disconnect();
            for (const yR of GR) RR.removeEventListener(yR, JR);
            document.removeEventListener("selectionchange", JR)
          }
        }), [RR, JR])
      },
      xu = RR => {
        RR.preventDefault()
      },
      Nu = RR => {
        "mouse" !== RR.pointerType && RR.preventDefault()
      },
      Du = () => {
        var RR;
        const {
          t: JR
        } = (0, tR.A)(), GR = (() => {
          const [RR, JR] = (0, oR.useState)(Bu.getState());
          return (0, oR.useEffect)((() => Bu.subscribe((() => {
            JR(Bu.getState())
          }))), []), RR
        })(), yR = (0, rR.s)(), uR = (0, oR.useRef)(null);
        (0, wR.u)(), (0, rR.v)(), (0, oR.useEffect)((() => {
          const RR = Bu.install(),
            JR = null;
          return () => {
            RR(), null === JR || void 0 === JR || JR()
          }
        }), []);
        const ZR = (0, lu.t)(),
          qR = GR.visible && "chat" === GR.kind ? GR.target : null;
        Ou(qR);
        const iR = null !== (RR = null === qR || void 0 === qR ? void 0 : qR.value) && void 0 !== RR ? RR : "",
          fR = (0, Ku.d)(iR, iR.startsWith("/") ? (0, pu.d)() : [], Ku.e.length),
          KR = iR.startsWith("/"),
          eR = KR ? Ku.e.map(((RR, JR) => {
            var GR;
            return null !== (GR = fR[JR]) && void 0 !== GR ? GR : ""
          })) : ZR;
        if ((0, oR.useEffect)((() => {
            Bu.editor.setPhraseRow(eR, KR)
          })), (0, oR.useEffect)((() => {
            const RR = uR.current;
            if (RR) return RR.addEventListener("touchstart", xu, {
              passive: !1
            }), () => {
              RR.removeEventListener("touchstart", xu)
            }
          }), [GR.visible]), !GR.visible) return null;
        const aR = eu(GR),
          LR = yu(aR),
          nR = RR => "char" === RR.type ? fu(RR.char, GR.page, GR.shift) : "phrase" === RR.type ? eR[RR.phraseIndex] : (RR => {
            switch (RR) {
              case "backspace":
                return "\u232b";
              case "shift":
                return "caps" === GR.shift ? "\u21ea" : "\u21e7";
              case "page":
              case "otherPage":
                return bu[Ru(GR.page, GR.accentsFirst)[RR]];
              case "space":
                return JR("controller:keyboardSpace");
              case "caretLeft":
                return "\u2190";
              case "caretRight":
                return "\u2192";
              case "newline":
                return "\u21b5";
              case "submit":
                return JR("chat" === GR.kind ? "controller:keyboardSend" : "controller:keyboardDone");
              case "close":
                return "\u2715";
              case "channel":
                return "\u21c4"
            }
          })(RR.command),
          UR = RR => {
            Bu.editor.pressKey(RR)
          };
        return (0, IR.jsxs)("div", {
          ref: uR,
          className: PR()(gG.o, "top" === GR.placement ? "PadKeyboardTop" : "PadKeyboardBottom", {
            PadKeyboardMultiline: GR.target instanceof HTMLTextAreaElement
          }),
          style: {
            "--pad-keyboard-rows": aR.length,
            "--pad-keyboard-height": `${GR.maxHeightPx}px`
          },
          onPointerDown: Nu,
          onMouseDown: xu,
          children: [(0, IR.jsx)(Hu, {
            target: GR.target,
            label: GR.kind ? JR(vu[GR.kind]) : GR.target.placeholder || JR("controller:keyboardTargetText")
          }), (0, IR.jsx)("div", {
            className: "PadKeyboardRows",
            children: aR.map(((RR, JR) => (0, IR.jsx)("div", {
              className: PR()("PadKeyboardRow", {
                PadKeyboardPhraseRow: "phrase" === RR[0].type
              }),
              children: RR.map(((RR, tR) => {
                const uR = yR && GR.focus.row === JR && GR.focus.col === tR,
                  ZR = "command" === RR.type ? gu.get(RR.command) : void 0;
                return (0, IR.jsx)("div", {
                  className: "PadKeyboardKeySlot",
                  style: {
                    width: RR.width / LR * 100 + "%"
                  },
                  children: (0, IR.jsxs)("div", {
                    className: PR()("PadKeyboardKey", {
                      PadKeyboardKeyFocused: uR,
                      PadKeyboardKeyCommand: "command" === RR.type,
                      PadKeyboardKeyPhrase: "phrase" === RR.type,
                      PadKeyboardKeyActive: "command" === RR.type && "shift" === RR.command && "off" !== GR.shift,
                      PadKeyboardKeySubmit: "command" === RR.type && "submit" === RR.command
                    }),
                    role: "button",
                    onClick: () => {
                      UR({
                        row: JR,
                        col: tR
                      })
                    },
                    onTouchEnd: RR => {
                      var GR, yR;
                      RR.preventDefault(), GR = RR.changedTouches[0], yR = RR.currentTarget.getBoundingClientRect(), GR && GR.clientX >= yR.left && GR.clientX <= yR.right && GR.clientY >= yR.top && GR.clientY <= yR.bottom && UR({
                        row: JR,
                        col: tR
                      })
                    },
                    children: [(0, IR.jsx)("span", {
                      className: "PadKeyboardKeyLabel",
                      children: nR(RR)
                    }), yR && ZR && (0, IR.jsx)(Mt, {
                      className: "PadKeyboardKeyGlyph",
                      glyph: (0, VR.h)(ZR)
                    })]
                  })
                }, tR)
              }))
            }, JR)))
          })]
        })
      },
      Hu = RR => {
        let {
          target: JR,
          label: GR
        } = RR;
        Ou(JR);
        const yR = (0, oR.useRef)(null),
          tR = (0, oR.useRef)(null),
          uR = JR instanceof HTMLTextAreaElement;
        (0, oR.useLayoutEffect)((() => {
          const RR = yR.current,
            JR = tR.current;
          uR ? RR.scrollTop = JR.offsetTop - RR.clientHeight / 2 : RR.scrollLeft = JR.offsetLeft - RR.clientWidth / 2
        }));
        const {
          value: ZR,
          start: qR,
          end: iR
        } = (0, kR.s)(JR), fR = "password" === JR.type ? "\u2022".repeat(ZR.length) : ZR;
        return (0, IR.jsxs)("div", {
          className: "PadKeyboardPreview",
          children: [(0, IR.jsx)("div", {
            className: "PadKeyboardPreviewLabel SmallTextBold",
            children: GR
          }), (0, IR.jsxs)("div", {
            ref: yR,
            className: PR()("PadKeyboardPreviewText", {
              PadKeyboardPreviewMultiline: uR
            }),
            children: [(0, IR.jsx)("span", {
              children: fR.slice(0, qR)
            }), (0, IR.jsx)("span", {
              ref: tR,
              className: "PadKeyboardCaret"
            }), qR !== iR && (0, IR.jsx)("span", {
              className: "PadKeyboardPreviewSelection",
              children: fR.slice(qR, iR)
            }), (0, IR.jsx)("span", {
              children: fR.slice(iR)
            }), 0 === fR.length && JR.placeholder && JR.placeholder !== GR && (0, IR.jsx)("span", {
              className: "PadKeyboardPreviewPlaceholder",
              children: JR.placeholder
            })]
          })]
        })
      };
    var ou = GR(1532),
      cu = GR(4733);
    const Pu = function() {
        for (var RR = arguments.length, JR = new Array(RR), GR = 0; GR < RR; GR++) JR[GR] = arguments[GR];
        return JR.map(VR.h)
      },
      Iu = (RR, JR) => {
        const GR = dG(RR);
        return GR ? [{
          glyphs: [GR],
          labelKey: JR
        }] : []
      },
      mu = [".BottomMiddleElements", ".BottomLeftElements > *", ".BottomRightElements > *", ".MiddleTextBottom .MiddleText"],
      zu = "--pad-hint-bar-clearance",
      Su = "[data-pad-hint-bar-avoid]",
      ju = RR => {
        const JR = [];
        for (const GR of RR)(0, sR.q)(GR) && JR.push(GR.getBoundingClientRect());
        return JR
      },
      du = RR => {
        if (!RR) return null;
        const JR = Vy(),
          GR = JR ? ju(((RR, JR) => {
            const GR = RR.closest(Su);
            return GR ? [GR] : ("popup" === JR ? document : RR).querySelectorAll(Su)
          })(JR.root, JR.layer.kind)) : [],
          yR = !JR || JR.root.hasAttribute("data-pad-shows-hud");
        if (((0, cu.m)(null === JR || void 0 === JR ? void 0 : JR.layer.kind, (0, cu.n)()) || yR) && GR.push(...ju(document.querySelectorAll(mu.join(",")))), 0 === GR.length) return null;
        const {
          width: tR,
          height: uR
        } = RR.getBoundingClientRect(), ZR = window.innerHeight - 8, qR = (0, cu.r)(ZR, {
          width: tR,
          height: uR
        }, window.innerWidth / 2, GR, 8);
        return qR === ZR ? null : Math.round(window.innerHeight - qR)
      },
      Eu = RR => {
        const JR = document.documentElement.style,
          GR = RR ? `${Math.round(window.innerHeight-RR.getBoundingClientRect().top)}px` : "";
        JR.getPropertyValue(zu) !== GR && (GR ? JR.setProperty(zu, GR) : JR.removeProperty(zu))
      },
      Yu = () => {
        const {
          t: RR
        } = (0, tR.A)(), {
          hideButtonHints: JR
        } = (0, wR.u)(), GR = (0, rR.s)(), [yR, uR] = (0, oR.useState)(!1), [ZR, fR] = (0, oR.useState)([]), [aR, LR] = (0, oR.useState)(null), nR = (0, oR.useRef)(null), UR = (0, oR.useRef)(null);
        (0, nt.f)(Uu.d, (RR => {
          uR(RR)
        })), (0, nt.f)(cu.q, (() => {
          var RR;
          null === (RR = UR.current) || void 0 === RR || RR.call(UR)
        }));
        const WR = GR && !JR && !yR;
        return (0, oR.useEffect)((() => {
          if (!WR) return;
          let RR = null;
          const JR = () => {
            const JR = (() => {
                var RR;
                const JR = KR.e.getActiveConsumerName(),
                  GR = (0, cu.i)();
                if (GR) {
                  const RR = (0, VR.h)(GR),
                    JR = "emoteWheel" === GR && "wheel" === (0, wR.l)().emoteButton || !(0, eR.J)(KR.e.getLastFrame().values, RR) ? {
                      glyphs: Pu("menuConfirm"),
                      labelKey: "controller:menusSelect"
                    } : {
                      glyphs: [RR],
                      labelKey: "controller:wheelReleaseToPick"
                    };
                  return [{
                    glyphs: [(0, VR.y)(RR)],
                    labelKey: "controller:wheelChoose"
                  }, JR, {
                    glyphs: Pu("menuBack"),
                    labelKey: "controller:wheelClose"
                  }]
                }
                const yR = Vy();
                if (!yR || "focus" !== JR && "cursor" !== JR) return (0, cu.e)(VR.h);
                const tR = [],
                  uR = {
                    glyphs: Pu("menuBack"),
                    labelKey: "controller:menusBack"
                  },
                  ZR = (0, dR.B)(yR.root),
                  qR = ZR ? !(0, sR.u)(ZR) : Boolean(yR.layer.close),
                  fR = !ZR && yR.layer.closeLabelKey ? yR.layer.closeLabelKey : uR.labelKey,
                  rR = qR ? [{
                    ...uR,
                    labelKey: fR
                  }] : [],
                  aR = OG(yR.layer.kind) ? [{
                    glyphs: Pu("chat"),
                    labelKey: "controller:menusQuickChat"
                  }] : [];
                if ("cursor" === JR) return tR.push({
                  glyphs: Pu("menuConfirm"),
                  labelKey: "controller:menusClick"
                }), tR.push({
                  glyphs: Pu("menuSecondary"),
                  labelKey: "controller:menusRightClick"
                }), tR.push(...rR), tR.push(...aR), tR.push({
                  glyphs: ["RightStick"],
                  labelKey: "controller:menusScroll"
                }), ly() && tR.push({
                  glyphs: Pu("menuToggleCursor"),
                  labelKey: "controller:menusFocusMode"
                }), tR;
                const LR = hy.getFocused();
                LR && (0, Oy.e)(LR) ? tR.push({
                  glyphs: ["Left", "Right"],
                  labelKey: "controller:menusAdjust"
                }) : LR && (0, dR.H)(LR) ? tR.push({
                  glyphs: [],
                  labelKey: "controller:menusUseMouse"
                }) : tR.push({
                  glyphs: Pu("menuConfirm"),
                  labelKey: "controller:menusSelect"
                });
                const nR = LR ? null === (RR = wG(LR)) || void 0 === RR ? void 0 : RR.dataset.padSecondary : void 0;
                nR && tR.push({
                  glyphs: Pu("menuSecondary"),
                  labelKey: nR
                }), tR.push(...null !== LR && void 0 !== LR && LR.closest("[data-pad-friends-column]") ? [uR] : rR), tR.push(...aR);
                const UR = "home" === yR.layer.kind;
                kG(yR.root) || !oG(yR.root) && !QG(yR) ? UR && tR.push({
                  glyphs: Pu("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusRows"
                }) : tR.push({
                  glyphs: Pu("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusTabs"
                }), UR && (tR.push(...Iu("inventory", "controller:menusFriends")), nR || tR.push({
                  glyphs: Pu("menuSecondary"),
                  labelKey: "controller:menusSearch"
                }), tR.push(...Iu("pause", "controller:menusSettings")), tR.push(...Iu("leaderboard", "controller:menusNotifications")));
                const WR = iR.d.get("openEverythingMenuName");
                return "inGame" === iR.d.get("gameState") && "popup" !== yR.layer.kind && null !== WR && ((0, iG.i)(WR) ? tR.push(...Iu("leaderboard", "controller:menusClose")) : WR !== qG.o.LOBBY_LEADERBOARD && tR.push(...Iu("leaderboard", "controller:menusLobby"))), tR.push({
                  glyphs: Pu("menuToggleCursor"),
                  labelKey: "controller:menusCursorMode"
                }), tR
              })(),
              GR = du(nR.current),
              yR = ((RR, JR) => `${RR.map((RR=>`${RR.glyphs.join("+")}:${RR.labelKey}`)).join("|")}@${JR}`)(JR, GR);
            yR !== RR && (RR = yR, (0, qR.unstable_batchedUpdates)((() => {
              fR(JR), LR(GR)
            }))), Eu(nR.current)
          };
          JR(), UR.current = JR;
          const GR = requestAnimationFrame(JR),
            yR = setInterval(JR, 150);
          return () => {
            UR.current = null, cancelAnimationFrame(GR), clearInterval(yR), Eu(null)
          }
        }), [WR]), (0, oR.useLayoutEffect)((() => {
          if (!WR) return;
          if (0 === ZR.length) return void Eu(null);
          const RR = du(nR.current);
          RR === aR ? Eu(nR.current) : LR(RR)
        }), [WR, ZR, aR]), WR && 0 !== ZR.length ? (0, IR.jsx)("div", {
          ref: nR,
          className: "PadButtonHintBar SmallTextBold",
          style: null === aR ? void 0 : {
            bottom: aR
          },
          "aria-hidden": !0,
          children: ZR.map((JR => (0, IR.jsxs)("div", {
            className: "PadButtonHint",
            children: [JR.glyphs.map((RR => (0, IR.jsx)(Mt, {
              glyph: RR,
              className: "PadButtonHintGlyph"
            }, RR))), (0, IR.jsx)("span", {
              children: RR(JR.labelKey)
            })]
          }, JR.labelKey)))
        }) : null
      };
    var ku = GR(1950);
    const Qu = [sR.b, "label", "[data-pad-slider]"].join(","),
      Fu = "data-pad-cursor-probe",
      Tu = RR => {
        var JR;
        const GR = (RR => {
          const JR = [];
          for (let yR = RR; yR && yR !== document.body && yR !== document.documentElement && (JR.push(yR), !(JR.length > 8)); yR = yR.parentElement);
          const GR = document.documentElement.classList.contains(rR.o) ? JR[JR.length - 1] : void 0;
          null === GR || void 0 === GR || GR.setAttribute(Fu, "");
          try {
            return JR.map((RR => ({
              element: RR,
              cursor: getComputedStyle(RR).cursor
            })))
          } finally {
            null === GR || void 0 === GR || GR.removeAttribute(Fu)
          }
        })(RR);
        if ("pointer" !== (null === (JR = GR[0]) || void 0 === JR ? void 0 : JR.cursor)) return null;
        let yR = 0;
        for (; yR + 1 < GR.length && "pointer" === GR[yR + 1].cursor;) yR++;
        return GR[yR].element
      },
      su = (RR, JR, GR, yR) => {
        const tR = yR.root.contains(RR) ? yR.root : null;
        for (let uR = RR; uR && uR !== document.body && uR !== document.documentElement; uR = uR.parentElement) {
          if (uR instanceof HTMLElement && pR(uR, JR) && xR(uR, JR, GR)) return uR;
          if (uR === tR) break
        }
        return "home" === yR.layer.kind || "gamePage" === yR.layer.kind ? ((RR, JR) => {
          const GR = document.scrollingElement;
          return GR instanceof HTMLElement && ![document.documentElement, document.body].some((JR => {
            const GR = getComputedStyle(JR),
              yR = "y" === RR ? GR.overflowY : GR.overflowX;
            return "hidden" === yR || "clip" === yR
          })) && xR(GR, RR, JR) ? GR : null
        })(JR, GR) : null
      };
    const hu = new class {
        constructor() {
          this.state = {
            x: 0,
            y: 0,
            speedRamp: 0
          }, this.hasPosition = !1, this.active = !1, this.hidden = !1, this.hit = null, this.interactive = null, this.magnet = null, this.lastHitTestMs = -1 / 0, this.press = null, this.draggedSlider = null, this.repeatStop = null, this.repeatKey = null, this.repeated = !1, this.confirmRepeat = (0, aR.c)(eR.s), this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.layerRoot = null, this.layerOrder = 0, this.layerPoints = new WeakMap, this.page = null, this.pendingPageStart = null
        }
        install() {
          const RR = KR.e.register({
              name: "cursor",
              isActive: () => "cursor" === py(),
              onFrame: RR => {
                this.onFrame(RR)
              },
              onDeactivate: () => {
                this.deactivate()
              },
              wakePressActs: RR => (0, KR.h)(RR) || RR === (0, VR.h)("menuConfirm") && (0, dR.J)((0, rR.e)())
            }),
            JR = (0, Gy.l)((RR => {
              const JR = RR.getRoot();
              JR && this.layerPoints.delete(JR), JR === this.layerRoot && (this.layerRoot = null)
            })),
            GR = fR.n.subscribe("appManagerUpdated|activeInputDevice", (RR => {
              "gamepad" !== RR && this.active && !this.hidden && this.hide()
            }));
          return () => {
            RR(), JR(), fR.n.unsubscribe(GR), this.deactivate()
          }
        }
        getHighlighted() {
          return this.isVisible() ? this.interactive : null
        }
        isVisible() {
          return this.active && !this.hidden && (0, rR.k)()
        }
        getPoint() {
          return {
            x: this.state.x,
            y: this.state.y
          }
        }
        hide() {
          this.hidden = !0, this.cancelPress(), this.secondaryArmed = !1, this.clearHover(), this.JK()
        }
        activate(RR) {
          this.active = !0, this.hidden = !1;
          const JR = Xy();
          !JR || JR.root && JR.root !== RR.root ? this.jumpTo(this.hasPosition ? this.getPoint() : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          }) : (this.setLayer(RR), this.jumpTo(JR.point))
        }
        jumpTo(RR) {
          this.state = {
            x: RR.x,
            y: RR.y,
            speedRamp: 0
          }, this.hasPosition = !0, this.lastHitTestMs = -1 / 0
        }
        deactivate() {
          this.active && (this.active = !1, this.page = null, this.pendingPageStart = null, this.cancelPress(), this.clearHover(), this.draggedSlider = null, this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.JK())
        }
        onFrame(RR) {
          const JR = Vy();
          if (!JR) return;
          if (this.active || this.activate(JR), this.followPage(JR)) return;
          this.followLayer(JR);
          const GR = RR.wokeDevice ? (0, rR.e)() : null;
          if (GR && this.jumpTo(GR), !(0, rR.k)()) return void this.hide();
          const yR = (0, VR.h)("menuToggleCursor");
          if (RR.wasPressed(yR)) return KR.e.consumeButton(yR), void Cy(this.getHandoff(null));
          if (this.handBackToFocus(RR)) return;
          const tR = (0, VR.h)("menuConfirm"),
            uR = (0, VR.h)("menuSecondary");
          if (RR.wasPressed((0, VR.h)("menuBack"))) return (0, dR.n)(JR.root) || (0, dR.f)(JR.root) || Ky(), void this.JK();
          if (sG(null, RR, JR)) return RR.wasReleased(tR) && this.press && (this.updateHit(!1), this.updateConfirm(RR, tR)), void this.JK();
          if (document.pointerLockElement) return void this.hide();
          const ZR = gy() ? {
              x: 0,
              y: 0
            } : (RR => {
              const JR = (RR, JR) => (RR ? 1 : 0) - (JR ? 1 : 0);
              return {
                x: JR(RR.isHeld("Right"), RR.isHeld("Left")),
                y: JR(RR.isHeld("Down"), RR.isHeld("Up"))
              }
            })(RR),
            qR = (0, wR.l)().moveDeadzone,
            iR = ((RR, JR) => {
              const GR = (0, eR.k)(RR, AR(JR));
              return Math.hypot(GR.x, GR.y)
            })(RR.leftStick, qR) > 0 || 0 !== ZR.x || 0 !== ZR.y;
          if (this.hidden) {
            const JR = RR.wasPressed(tR),
              GR = RR.wasPressed(uR);
            if (!iR && !MR(RR.rightStick) && !JR && !GR && !RR.wokeDevice) return void this.JK();
            if (this.hidden = !1, this.updateHit(!1), JR || GR) return JR && (this.press = {
              kind: "ignored"
            }, RR.wokeDevice && this.beginRepeat()), this.secondaryArmed = !1, void this.JK()
          }
          this.movePendingPageStart(iR);
          const fR = this.getPoint();
          this.state = XR(this.state, {
            stick: RR.leftStick,
            moveDeadzone: qR,
            dpad: ZR,
            dtMs: RR.dtMs,
            cursorSpeedPercent: (0, wR.l)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: this.getAssistContext()
          });
          const aR = this.state.x !== fR.x || this.state.y !== fR.y,
            LR = [tR, uR].some((JR => RR.wasPressed(JR) || RR.wasReleased(JR)));
          (aR || LR || performance.now() - this.lastHitTestMs >= 100) && this.updateHit(aR), this.updateConfirm(RR, tR), this.updateSecondary(RR, uR), this.updateScroll(RR, JR), this.JK()
        }
        followPage(RR) {
          const JR = "home" === RR.layer.kind || "gamePage" === RR.layer.kind,
            GR = this.page;
          if (this.page = JR ? {
              key: (0, Gy.q)(RR.layer),
              root: RR.root
            } : null, !this.page || !GR || GR.root !== RR.root || GR.key === this.page.key) return !1;
          if (this.cancelPress(), this.secondaryArmed = !1, this.setLayer(RR), "hybrid" === Ay()) return ny = null, ay = null, Uy.lock(), !0;
          const {
            key: yR
          } = this.page;
          return this.pendingPageStart = {
            root: RR.root,
            key: yR,
            returning: hy.notePageEnteredByCursor(yR),
            enteredAtMs: performance.now()
          }, !1
        }
        movePendingPageStart(RR) {
          const JR = this.pendingPageStart;
          if (!JR) return;
          if (RR || JR.root !== this.layerRoot) return void(this.pendingPageStart = null);
          const GR = JR.returning ? hy.recallStop(JR.root, JR.key) : null;
          if (!GR && JR.returning && performance.now() - JR.enteredAtMs < 1e3) return;
          const yR = null !== GR && void 0 !== GR ? GR : hy.pickInitial(JR.root, {
            includeDisabled: !0,
            waitForContent: !0,
            enteredAtMs: JR.enteredAtMs
          });
          yR && (this.pendingPageStart = null, this.jumpTo((0, dR.E)(yR)))
        }
        setLayer(RR) {
          this.layerRoot = RR.root, this.layerOrder = RR.order
        }
        followLayer(RR) {
          var JR;
          if (RR.root === this.layerRoot) return;
          null !== (JR = this.layerRoot) && void 0 !== JR && JR.isConnected && this.layerPoints.set(this.layerRoot, this.getPoint()), this.cancelPress(), this.draggedSlider = null, this.secondaryArmed = !1;
          const GR = this.layerPoints.get(RR.root),
            yR = GR && RR.order <= this.layerOrder ? GR : hy.getLayerStartPoint(RR.root);
          this.setLayer(RR), this.jumpTo(yR)
        }
        getHandoff(RR) {
          var JR;
          return {
            point: this.getPoint(),
            element: null !== (JR = this.interactive) && void 0 !== JR ? JR : this.findDraggedSliderNearby(),
            direction: RR
          }
        }
        findDraggedSliderNearby() {
          const RR = this.draggedSlider;
          if (null === RR || void 0 === RR || !RR.isConnected) return null;
          const JR = RR.getBoundingClientRect(),
            {
              y: GR
            } = this.getPoint();
          return GR >= JR.top - 40 && GR <= JR.bottom + 40 ? RR : null
        }
        handBackToFocus(RR) {
          if (!gy()) return !1;
          const JR = eR.B.find((JR => RR.wasPressed(JR)));
          return !!JR && (GR = this.getHandoff(JR), ny = ry(GR), ay = null, Uy.lock(), KR.e.handOffHeldInput(), !0);
          var GR
        }
        getAssistContext() {
          const RR = this.interactive;
          if (null === RR || void 0 === RR || !RR.isConnected) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const JR = RR.getBoundingClientRect();
          if (JR.width > .4 * window.innerWidth || JR.height > .4 * window.innerHeight) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const GR = (0, wR.l)().cursorMagnetism && !(0, ku.b)(RR) && !RR.closest("[data-pad-slider]"),
            yR = this.magnet && this.magnet !== RR && this.magnet.isConnected ? this.magnet.getBoundingClientRect() : JR;
          return {
            overInteractive: !0,
            magnetTarget: GR ? {
              x: yR.left + yR.width / 2,
              y: yR.top + yR.height / 2
            } : null
          }
        }
        updateHit(RR) {
          this.lastHitTestMs = performance.now();
          const JR = this.getPoint(),
            GR = document.elementFromPoint(JR.x, JR.y),
            yR = GR && !(0, nR.v)(GR) && (RR => {
              var JR;
              const GR = Vy();
              return !(GR && !GR.root.contains(RR) && !RR.closest(".tooltip-container")) || !(null !== (JR = document.getElementById("root")) && void 0 !== JR && JR.contains(RR))
            })(GR) ? GR : null;
          if (yR !== this.hit) return (0, dR.s)(this.hit, yR, JR), this.hit = yR, void this.setInteractive(yR ? (RR => {
            const JR = RR.closest(Qu);
            if (JR) {
              var GR, yR;
              const RR = null !== (GR = null === (yR = JR.parentElement) || void 0 === yR ? void 0 : yR.closest("[data-pad-focusable]")) && void 0 !== GR ? GR : JR;
              return (0, sR.u)(RR) ? {
                element: null,
                magnet: null
              } : {
                element: RR,
                magnet: JR
              }
            }
            const tR = Tu(RR);
            return {
              element: tR,
              magnet: tR
            }
          })(yR) : {
            element: null,
            magnet: null
          });
          RR && yR && (0, dR.s)(yR, yR, JR)
        }
        setInteractive(RR) {
          let {
            element: JR,
            magnet: GR
          } = RR;
          this.interactive = JR, this.magnet = GR
        }
        clearHover() {
          this.hit && (0, dR.s)(this.hit, null, this.getPoint()), this.hit = null, this.setInteractive({
            element: null,
            magnet: null
          })
        }
        beginPress() {
          const RR = this.hit;
          if (!RR || (0, dR.H)(RR)) return {
            kind: "ignored"
          };
          const JR = (0, Oy.e)(RR),
            GR = RR.closest("[data-pad-slider]");
          return JR && GR ? {
            kind: "slider",
            slider: GR,
            adjuster: JR
          } : ((0, dR.u)(RR, this.getPoint()), {
            kind: "pointer",
            target: RR
          })
        }
        applySliderFraction(RR) {
          var JR;
          const GR = RR.slider.getBoundingClientRect(),
            yR = GR.height > GR.width,
            tR = null === (JR = RR.slider.querySelector("[data-pad-slider-handle]")) || void 0 === JR ? void 0 : JR.getBoundingClientRect(),
            uR = tR ? yR ? tR.height : tR.width : 0,
            ZR = (yR ? GR.height : GR.width) - uR;
          if (ZR <= 0) return;
          const qR = yR ? GR.bottom - uR / 2 - this.state.y : this.state.x - GR.left - uR / 2;
          RR.adjuster.setFraction(Math.max(0, Math.min(1, qR / ZR)))
        }
        updateConfirm(RR, JR) {
          RR.wasPressed(JR) && (this.press = RR.wokeDevice ? {
            kind: "ignored"
          } : this.beginPress(), this.draggedSlider = "slider" === this.press.kind ? this.press.slider : null, this.beginRepeat());
          const GR = this.press;
          if (!GR) return;
          if (RR.isHeld(JR)) return "slider" === GR.kind && this.applySliderFraction(GR), void this.updateRepeat();
          this.press = null;
          const yR = this.repeated;
          if (this.endRepeat(), !RR.wasReleased(JR)) return void this.endPressWithoutClick(GR);
          const tR = this.getPoint(),
            uR = this.hit;
          if ("slider" === GR.kind && GR.adjuster.endDrag(), "pointer" === GR.kind) {
            const RR = null !== uR && void 0 !== uR ? uR : GR.target.isConnected ? GR.target : null;
            RR && (0, dR.x)(RR, tR);
            const JR = uR && GR.target.isConnected && !yR ? ((RR, JR) => {
              for (let GR = RR; GR; GR = GR.parentElement)
                if (GR.contains(JR)) return GR;
              return null
            })(GR.target, uR) : null;
            JR && (hy.noteCursorActivation(JR), (0, nR.g)(JR, new MouseEvent("click", (0, dR.P)(tR, 0, 0))), (0, dR.j)(JR), (0, dR.M)(JR) && (0, dR.L)(JR))
          }
        }
        beginRepeat() {
          var RR, JR, GR;
          const yR = null !== (RR = null === (JR = this.hit) || void 0 === JR ? void 0 : JR.closest("[data-pad-repeat]")) && void 0 !== RR ? RR : null;
          this.repeatStop = yR, this.repeatKey = null !== (GR = null === yR || void 0 === yR ? void 0 : yR.getAttribute("data-pad-repeat")) && void 0 !== GR ? GR : null, this.repeated = !1, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now())
        }
        updateRepeat() {
          const RR = this.repeatStop;
          if (!RR) return;
          const JR = this.hit;
          RR.isConnected && !(0, sR.u)(RR) && RR.getAttribute("data-pad-repeat") === this.repeatKey && JR && RR.contains(JR) ? RR.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.repeated = !0, hy.noteCursorActivation(RR), (0, nR.g)(RR, new MouseEvent("click", (0, dR.P)(this.getPoint(), 0, 0)))) : this.repeatStop = null
        }
        endRepeat() {
          this.repeatStop = null, this.repeated = !1
        }
        endPressWithoutClick(RR) {
          "slider" === RR.kind && RR.adjuster.endDrag(), "pointer" === RR.kind && RR.target.isConnected && (0, dR.x)(RR.target, this.getPoint())
        }
        cancelPress() {
          this.endRepeat(), this.press && (this.endPressWithoutClick(this.press), this.press = null)
        }
        updateSecondary(RR, JR) {
          RR.wasPressed(JR) && (this.secondaryArmed = null !== this.hit), this.secondaryArmed && !RR.isHeld(JR) && (this.secondaryArmed = !1, RR.wasReleased(JR) && this.hit && (0, dR.p)(this.hit, this.getPoint(), 2))
        }
        updateScroll(RR, JR) {
          const GR = BR(RR.rightStick, RR.dtMs);
          if (0 === GR.x && 0 === GR.y) return void(this.scrollRemainder = {
            x: 0,
            y: 0
          });
          this.scrollRemainder = {
            x: this.scrollRemainder.x + GR.x,
            y: this.scrollRemainder.y + GR.y
          };
          const yR = Math.trunc(this.scrollRemainder.x),
            tR = Math.trunc(this.scrollRemainder.y);
          this.scrollRemainder = {
            x: this.scrollRemainder.x - yR,
            y: this.scrollRemainder.y - tR
          };
          const uR = this.hit;
          if (!uR) return;
          let ZR = !1;
          if (0 !== tR) {
            const RR = su(uR, "y", tR > 0 ? 1 : -1, JR);
            RR && (RR.scrollBy({
              top: tR,
              behavior: "instant"
            }), ZR = !0)
          }
          if (0 !== yR) {
            const RR = su(uR, "x", yR > 0 ? 1 : -1, JR);
            RR && (RR.scrollBy({
              left: yR,
              behavior: "instant"
            }), ZR = !0)
          }
          ZR && (this.lastHitTestMs = -1 / 0)
        }
        JK() {
          YR.set({
            x: this.state.x,
            y: this.state.y,
            visible: this.isVisible(),
            pressed: null !== this.press && "ignored" !== this.press.kind
          })
        }
      },
      RZ = () => {
        const RR = (0, oR.useMemo)((() => new SR), []),
          JR = (0, rR.s)();
        return (0, oR.useEffect)((() => {
          if (!JR) return;
          let GR = 0,
            yR = {
              of: null,
              atMs: 0,
              list: []
            };
          const tR = document.getElementsByClassName(by),
            uR = RR => {
              for (const JR of [...tR]) JR !== RR && JR.classList.remove(by)
            },
            ZR = () => {
              var JR;
              GR = requestAnimationFrame(ZR);
              const tR = (() => {
                const RR = hy.getFocused();
                if (hy.isActive() && null !== RR && void 0 !== RR && RR.isConnected) return RR;
                const JR = hu.getHighlighted();
                return null !== JR && void 0 !== JR && JR.isConnected ? JR : null
              })();
              uR(tR), tR && !tR.classList.contains(by) && tR.classList.add(by);
              const qR = null !== (JR = null === tR || void 0 === tR ? void 0 : tR.closest("[data-pad-reticle-box]")) && void 0 !== JR ? JR : tR;
              RR.show(qR ? ((RR, JR) => {
                let GR = RR.left,
                  yR = RR.top,
                  tR = RR.right,
                  uR = RR.bottom;
                for (const ZR of JR) {
                  if (!ZR) continue;
                  const RR = DR(ZR);
                  GR = Math.max(GR, RR.left), yR = Math.max(yR, RR.top), tR = Math.min(tR, RR.right), uR = Math.min(uR, RR.bottom)
                }
                return tR <= GR || uR <= yR ? null : {
                  left: GR,
                  top: yR,
                  width: tR - GR,
                  height: uR - yR
                }
              })(qR.getBoundingClientRect(), (RR => {
                const JR = performance.now();
                return (yR.of !== RR || JR - yR.atMs > 500) && (yR = {
                  of: RR,
                  atMs: JR,
                  list: [gR(RR, "y"), gR(RR, "x")]
                }), yR.list
              })(qR)) : null)
            };
          return GR = requestAnimationFrame(ZR), () => {
            cancelAnimationFrame(GR), uR(null), RR.hide()
          }
        }), [JR, RR]), (0, IR.jsx)(jR, {
          placer: RR,
          className: "PadFocusRing"
        })
      },
      JZ = (RR, JR) => {
        RR.style.transform = `translate3d(${JR.x}px, ${JR.y}px, 0)`, RR.classList.toggle("Visible", JR.visible), RR.classList.toggle("Pressed", JR.pressed)
      },
      GZ = () => {
        const RR = (0, oR.useRef)(null);
        return (0, oR.useEffect)((() => {
          const JR = YR.subscribe((JR => {
            RR.current && JZ(RR.current, JR)
          }));
          return RR.current && JZ(RR.current, YR.get()), JR
        }), []), (0, IR.jsx)("div", {
          ref: RR,
          className: "PadCursorView",
          "aria-hidden": "true",
          children: (0, IR.jsx)("div", {
            className: "PadCursorGlyph",
            children: "+"
          })
        })
      },
      yZ = [{
        id: "google-consent",
        find: () => document.querySelector(".fc-consent-root"),
        startSelectors: [".fc-cta-do-not-consent", ".fc-cta-manage-options"]
      }],
      tZ = "PadOverThirdParty",
      uZ = new Set(yZ.map((RR => RR.id))),
      ZZ = () => {
        const RR = yZ.map((RR => {
            let {
              id: JR,
              find: GR,
              startSelectors: yR
            } = RR;
            return (0, Gy.m)({
              id: JR,
              kind: "popup",
              getRoot: () => {
                const RR = GR(),
                  JR = RR ? ((RR, JR) => {
                    var GR;
                    for (const yR of JR) {
                      const JR = RR.querySelector(yR);
                      if (JR) return JR
                    }
                    return null !== (GR = [...RR.querySelectorAll("button")].find((RR => !RR.matches(".fc-cta-consent")))) && void 0 !== GR ? GR : null
                  })(RR, yR) : null;
                if (RR && JR && !JR.hasAttribute("data-pad-default-focus")) {
                  for (const JR of RR.querySelectorAll("[data-pad-default-focus]")) JR.removeAttribute("data-pad-default-focus");
                  for (const JR of RR.querySelectorAll("[data-pad-hint-bar-avoid]")) JR.removeAttribute("data-pad-hint-bar-avoid");
                  JR.setAttribute("data-pad-default-focus", ""), ((RR, JR) => {
                    let GR = RR;
                    for (let yR = RR.parentElement; yR && JR.contains(yR) && !(yR.getBoundingClientRect().height >= window.innerHeight / 2); yR = yR.parentElement) GR = yR;
                    return GR
                  })(JR, RR).setAttribute("data-pad-hint-bar-avoid", "")
                }
                return RR
              },
              close: null,
              memoryKey: null
            })
          })),
          JR = document.documentElement,
          GR = ZR.e.onFrame((() => {
            const RR = (0, rR.k)() ? Vy() : null,
              GR = !!RR && (yR = RR.layer, uZ.has(yR.id));
            var yR;
            JR.classList.contains(tZ) !== GR && JR.classList.toggle(tZ, GR)
          }));
        return () => {
          for (const JR of RR) JR();
          GR(), JR.classList.remove(tZ)
        }
      },
      qZ = "PadLargePointer",
      iZ = () => {
        (0, oR.useEffect)((() => {
          const RR = (0, nR.n)(document.body),
            JR = hy.install(),
            GR = hu.install(),
            yR = ZZ();
          return () => {
            RR(), JR(), GR(), yR()
          }
        }), []);
        const {
          largePointer: RR
        } = (0, wR.u)(), JR = (0, ou.s)() && RR;
        return (0, oR.useEffect)((() => {
          if (JR) return document.documentElement.classList.add(qZ), () => {
            document.documentElement.classList.remove(qZ)
          }
        }), [JR]), (0, qR.createPortal)((0, IR.jsxs)(IR.Fragment, {
          children: [(0, IR.jsx)(Yu, {}), (0, IR.jsx)(RZ, {}), (0, IR.jsx)(GZ, {})]
        }), document.body)
      };
    var fZ = GR(10143),
      VZ = GR(10170),
      KZ = GR(10158);
    GR(10175);
    const wZ = (RR, JR) => {
        const [GR, yR] = (0, oR.useState)(!1), [tR, uR] = (0, oR.useState)(null), ZR = (0, oR.useRef)(null), qR = (0, oR.useCallback)((RR => {
          ZR.current = RR, uR(RR)
        }), []), iR = (0, oR.useCallback)((() => {
          yR(!1), qR(null)
        }), [qR]), VR = (0, oR.useCallback)((() => {
          yR(!0)
        }), []), KR = (0, oR.useCallback)(((RR, JR) => {
          qR((0, KZ.J)(RR, JR, ZR.current))
        }), [qR]);
        (0, oR.useLayoutEffect)((() => (JR(GR), (0, cu.w)(RR, GR), fR.n.JK(cu.q), () => {
          JR(!1), (0, cu.w)(RR, !1), fR.n.JK(cu.q)
        })), [GR, RR, JR]), (0, nt.f)("appManagerUpdated|activeInputDevice", (RR => {
          "gamepad" !== RR && iR()
        })), (0, nt.f)("appManagerUpdated|gameState", (RR => {
          "inGame" !== RR && iR()
        }));
        const wR = () => {
          (0, iG.o)() && iR()
        };
        return (0, nt.f)("appManagerUpdated|openEverythingMenuName", wR), (0, nt.f)("appManagerUpdated|openInGameMenuName", wR), {
          open: GR,
          picked: tR,
          pickedRef: ZR,
          show: VR,
          aim: KR,
          close: iR
        }
      },
      rZ = RR => {
        let {
          className: JR,
          slotCount: GR,
          picked: yR,
          slotLabel: tR,
          renderSlot: uR,
          centre: ZR
        } = RR;
        const qR = Array.from({
          length: GR
        }, ((RR, JR) => JR));
        return (0, IR.jsx)("div", {
          className: PR()("EmoteWheelOverlay PadRadialWheel", JR),
          children: (0, IR.jsxs)("div", {
            className: "EmoteWheel",
            style: {
              width: 2 * KZ.u + "rem",
              height: 2 * KZ.u + "rem"
            },
            children: [(0, IR.jsxs)("svg", {
              className: "EmoteWheelSvg",
              viewBox: `0 0 ${KZ.n} ${KZ.n}`,
              children: [qR.map((RR => (0, IR.jsx)("path", {
                d: (0, KZ.x)(RR, GR, KZ.g, KZ.k, KZ.l),
                className: PR()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: RR === yR
                }),
                "aria-label": tR(RR)
              }, RR))), (0, IR.jsx)("circle", {
                className: "EmoteWheelOuterRing",
                cx: KZ.g,
                cy: KZ.g,
                r: KZ.l
              }), (0, IR.jsx)("circle", {
                className: "EmoteWheelInnerRing",
                cx: KZ.g,
                cy: KZ.g,
                r: KZ.k
              }), null !== yR && (0, IR.jsx)("path", {
                className: "EmoteWheelWedgeOutline",
                d: (0, KZ.x)(yR, GR, KZ.g, KZ.k, KZ.l)
              })]
            }), qR.map((RR => {
              const JR = (0, KZ.F)(RR, GR);
              return (0, IR.jsx)("div", {
                className: PR()("PadRadialWheelSlot SmallTextBold", {
                  PadRadialWheelSlotPicked: RR === yR
                }),
                style: {
                  left: `calc(50% + ${KZ.e*Math.cos(JR)}rem)`,
                  top: `calc(50% + ${KZ.e*Math.sin(JR)}rem)`
                },
                "aria-hidden": !0,
                children: uR(RR)
              }, RR)
            })), (0, IR.jsx)("div", {
              className: "EmoteWheelHint SmallTextBold",
              children: ZR
            })]
          })
        })
      },
      eZ = Ku.e.length,
      aZ = () => {
        const {
          t: RR
        } = (0, tR.A)(), JR = wZ("chat", vG.p), GR = (0, lu.t)();
        return (0, nt.f)(vG.o, (() => {
          JR.open || (0, fZ.g)() || (0, VZ.n)() || "inGame" !== iR.d.get("gameState") || (0, iG.o)() || !(0, gG.e)() || JR.show()
        })), (0, nt.f)(vG.f, (RR => {
          JR.open && JR.aim(RR, eZ)
        })), (0, nt.f)(vG.l, (() => {
          var RR;
          if (!JR.open) return;
          const yR = JR.pickedRef.current;
          null !== yR ? Ku.h.claim(performance.now()) && (JR.close(), null === (RR = (0, gG.e)()) || void 0 === RR || RR.sendLine(GR[yR])) : JR.close()
        })), (0, nt.f)(vG.h, JR.close), JR.open ? (0, IR.jsx)(rZ, {
          className: "QuickChatWheel",
          slotCount: eZ,
          picked: JR.picked,
          slotLabel: RR => GR[RR],
          renderSlot: RR => GR[RR],
          centre: null !== JR.picked ? GR[JR.picked] : RR("controller:quickChatPick")
        }) : null
      },
      LZ = () => {
        const {
          t: RR
        } = (0, tR.A)(), JR = wZ("actionButton", VZ.o), [GR, yR] = (0, oR.useState)([]);
        if ((0, nt.f)(VZ.j, (RR => {
            JR.open || (0, fZ.g)() || (0, vG.e)() || "inGame" !== iR.d.get("gameState") || (0, iG.o)() || (yR(RR), JR.show())
          })), (0, nt.f)(VZ.b, (RR => {
            JR.open && JR.aim(RR, GR.length)
          })), (0, nt.f)(VZ.g, (() => {
            if (!JR.open) return;
            const RR = JR.pickedRef.current;
            JR.close(), null !== RR && fR.n.JK(VZ.m, GR[RR])
          })), (0, nt.f)(VZ.f, JR.close), !JR.open) return null;
        const uR = null !== JR.picked ? GR[JR.picked] : null;
        return (0, IR.jsx)(rZ, {
          className: "ActionWheel",
          slotCount: GR.length,
          picked: JR.picked,
          slotLabel: JR => {
            const yR = GR[JR];
            return "reload" === yR.kind ? RR("controller:gameplayReload") : "customButton" === yR.kind ? yR.description || yR.icon : "touchButton" === yR.kind && "string" === typeof yR.label ? yR.label : ""
          },
          renderSlot: RR => (0, IR.jsx)(lt, {
            action: GR[RR]
          }),
          centre: uR ? (0, IR.jsx)(lt, {
            action: uR
          }) : RR("controller:actionWheelPick")
        })
      };
    var nZ = GR(103);
    const UZ = () => ((0, oR.useEffect)((() => {
        var RR, JR;
        const GR = (0, nR.n)(document.getElementById("root")),
          yR = (0, rR.g)(),
          tR = (() => {
            const RR = [fR.n.subscribe(Jt.e, (() => {
                ut("blockBreak")
              })), fR.n.subscribe("damagedByOtherPlayer", (() => {
                ut("damage")
              })), fR.n.subscribe("yourAttackHit", (RR => {
                let {
                  hitSelf: JR
                } = RR;
                JR || ut("hit")
              }))],
              JR = ZR.e.onActivePadChanged((RR => {
                RR && ut("connect")
              }));
            return () => {
              for (const JR of RR) fR.n.unsubscribe(JR);
              JR()
            }
          })(),
          uR = (() => {
            const RR = new Kt({
              getVisitId: Vt.getVisitSessionId,
              peekVisitId: Vt.peekVisitSessionId,
              readReportedVisitId: () => {
                const RR = ft.k.getItem(wt);
                return "string" === typeof RR ? RR : null
              },
              writeReportedVisitId: RR => {
                ft.k.setItem(wt, RR)
              },
              isPadActive: rR.k,
              getPadFamily: () => {
                var RR, JR;
                return null !== (RR = null === (JR = ZR.e.getActivePad()) || void 0 === JR ? void 0 : JR.family) && void 0 !== RR ? RR : null
              },
              canReport: qt.isBloxdGa4Ready,
              getInputType: it.c,
              fK: qt.logControllerUsedToGtag
            });
            let JR = 0,
              GR = null;
            const yR = tR => {
                null === GR && ("notReady" !== RR.check(tR) || null !== GR || JR >= 20 || (JR++, GR = setTimeout((() => {
                  GR = null, yR(!1)
                }), 3e3)))
              },
              tR = fR.n.subscribe("appManagerUpdated|activeInputDevice", (() => {
                yR(!0)
              })),
              uR = (0, Vt.onVisitStarted)((() => {
                JR = 0, yR(!0)
              }));
            return () => {
              fR.n.unsubscribe(tR), uR(), null !== GR && clearTimeout(GR)
            }
          })(),
          qR = ZR.e.onFrame(((RR, JR, GR) => {
            const yR = (0, rR.n)(RR, GR);
            KR.e.dispatch(RR, JR, yR)
          }));
        let VR = null !== (RR = null === (JR = ZR.e.getActivePad()) || void 0 === JR ? void 0 : JR.family) && void 0 !== RR ? RR : null;
        const eR = ZR.e.onActivePadChanged((RR => {
            var JR, GR;
            (KR.e.reset(), (0, rR.p)(), fR.n.JK(ZR.d, RR), (null !== (JR = null === RR || void 0 === RR ? void 0 : RR.family) && void 0 !== JR ? JR : null) !== VR) && (VR = null !== (GR = null === RR || void 0 === RR ? void 0 : RR.family) && void 0 !== GR ? GR : null, fR.n.JK(wR.e, (0, wR.l)()));
            !RR && (0, rR.k)() && (0, rR.r)(iR.d.get("isTouchScreen") ? "touch" : "keyboardMouse")
          })),
          aR = () => {
            "visible" !== document.visibilityState && KR.e.clear()
          },
          LR = () => {
            KR.e.clear()
          };
        document.addEventListener("visibilitychange", aR), window.addEventListener("blur", LR), ZR.e.start(), (0, Zt.k)();
        const UR = null;
        return () => {
          GR(), yR(), tR(), uR(), qR(), eR(), document.removeEventListener("visibilitychange", aR), window.removeEventListener("blur", LR), ZR.e.stop(), null === UR || void 0 === UR || UR()
        }
      }), []), (0, IR.jsxs)("div", {
        className: "ControllerRoot",
        children: [(0, IR.jsx)(Nt, {}), (0, IR.jsx)(St, {}), (0, IR.jsx)(jt, {}), (0, IR.jsx)(Du, {}), (0, IR.jsx)(iZ, {}), (0, IR.jsx)(aZ, {}), (0, IR.jsx)(LZ, {})]
      })),
      WZ = () => nZ.featureFlags.useControllerSupport ? (0, IR.jsx)(UZ, {}) : null;
    var AZ = GR(9509),
      CZ = GR(10178);
    const XZ = new Set(Zt.g),
      MZ = RR => `${CZ.q}${(0,wR.p)()}/${RR}`,
      BZ = RR => {
        if (!(0, CZ.m)(RR)) return null;
        const [JR, GR] = RR.slice(CZ.q.length).split("/");
        return (0, AZ.e)(JR) && XZ.has(GR) ? (0, Zt.f)(JR, GR) : null
      };
    var lZ = GR(10181);
    const pZ = () => {
        const {
          t: RR
        } = (0, tR.A)(), JR = (0, rR.s)(), {
          gameState: GR,
          isUiHidden: yR
        } = (0, iR.o)(["gameState", "isUiHidden"]), {
          hideButtonHints: uR,
          sneakMode: ZR
        } = (0, wR.u)(), [qR, fR] = (0, oR.useState)(lZ.e);
        return (0, nt.f)(xt.t, fR), JR && !yR && "inGame" === GR && qR ? (0, IR.jsxs)("div", {
          className: "PadSneakChip SmallTextBold",
          children: [!uR && (0, IR.jsx)(Mt, {
            glyph: (0, VR.h)("toggle" === ZR ? "sneak" : "sneakToggle")
          }), (0, IR.jsx)("span", {
            children: RR("controller:gameplaySneaking")
          })]
        }) : null
      },
      gZ = 12,
      bZ = RR => {
        let {
          trigger: JR,
          className: GR,
          children: yR
        } = RR;
        const tR = (0, oR.useRef)(null);
        return (0, oR.useEffect)((() => {
          let RR = 0;
          const GR = gR(JR, "y"),
            yR = () => {
              RR = requestAnimationFrame(yR);
              const uR = tR.current;
              if (!uR || null === JR || void 0 === JR || !JR.isConnected) return;
              const {
                left: ZR,
                top: qR
              } = function(RR, JR, GR) {
                let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                  tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                const uR = RR.left + RR.width / 2,
                  ZR = Math.max(gZ, GR.width - gZ - JR.width),
                  qR = Math.min(Math.max(uR - JR.width / 2, gZ), ZR),
                  iR = GR.height - yR;
                let fR = 0,
                  VR = iR;
                if (tR) {
                  const RR = Math.max(0, tR.top),
                    yR = Math.min(iR, tR.bottom);
                  yR - RR >= Math.max(GR.height / 2, JR.height + 24) && (fR = RR, VR = yR)
                }
                const KR = RR.top + RR.height / 2 < (fR + VR) / 2 ? VR - gZ - JR.height : fR + gZ;
                return {
                  left: qR,
                  top: Math.max(gZ, KR)
                }
              }(JR.getBoundingClientRect(), {
                width: uR.offsetWidth,
                height: uR.offsetHeight
              }, {
                width: window.innerWidth,
                height: window.innerHeight
              }, parseFloat(document.documentElement.style.getPropertyValue(zu)) || 0, null !== GR && void 0 !== GR && GR.isConnected ? GR.getBoundingClientRect() : null);
              uR.style.transform = `translate3d(${Math.round(ZR)}px, ${Math.round(qR)}px, 0)`, uR.style.visibility = "visible"
            };
          return yR(), () => {
            cancelAnimationFrame(RR)
          }
        }), [JR]), (0, IR.jsx)("div", {
          ref: tR,
          className: GR,
          style: {
            position: "fixed",
            left: 0,
            top: 0,
            visibility: "hidden"
          },
          children: yR
        })
      };
    var vZ = GR(1468),
      OZ = GR(10187),
      xZ = GR(1590),
      NZ = GR(10194),
      DZ = GR(10199);
    const HZ = {
        shop: {
          icon: "cart-shopping",
          labelKey: "controller:menusShop"
        },
        tasks: {
          icon: "bars",
          labelKey: "controller:menusTasks"
        },
        invite: {
          icon: "user-plus",
          labelKey: "controller:menusInvite"
        },
        leave: {
          icon: "arrow-left",
          labelKey: "settingsMenu:exitGame"
        }
      },
      oZ = () => {
        const {
          t: RR
        } = (0, tR.A)(), JR = (0, rR.s)(), GR = (0, OZ.d)(), yR = (0, It.f)("_tasks"), uR = (0, It.f)("_availableLeaderboards");
        if (!JR) return null;
        const ZR = (RR => {
          let {
            hasShop: JR,
            hasTasksOrLeaderboards: GR,
            canInvite: yR
          } = RR;
          const tR = [];
          return JR && tR.push("shop"), GR && tR.push("tasks"), yR && tR.push("invite"), tR.push("leave"), tR
        })({
          hasShop: GR,
          hasTasksOrLeaderboards: !(!yR && !uR),
          canInvite: !!nZ.featureFlags.canUseInviteLinks
        });
        return (0, IR.jsx)("div", {
          className: "PadLobbyShortcuts",
          children: ZR.map((JR => {
            const {
              icon: GR,
              labelKey: yR
            } = HZ[JR], tR = "leave" === JR ? xZ.M : xZ.g;
            return (0, IR.jsx)(tR, {
              className: "PadLobbyShortcut",
              onClick: () => {
                (RR => {
                  switch (RR) {
                    case "shop":
                      return fR.n.JK(DZ.i), void iR.d.set({
                        openEverythingMenuName: qG.o.SHOP
                      });
                    case "tasks":
                      return void fR.n.JK("toggleMenu", "retentionFeatures");
                    case "invite":
                      return void fR.n.JK("toggleMenu", "inviteLink");
                    case "leave":
                      (0, NZ.e)()
                  }
                })(JR)
              },
              children: (0, IR.jsxs)("div", {
                className: "PadLobbyShortcutInner",
                children: [(0, IR.jsx)(vZ.d, {
                  name: GR
                }), (0, IR.jsx)("span", {
                  children: RR(yR)
                })]
              })
            }, JR)
          }))
        })
      };
    var cZ = GR(2194);
    const PZ = eR.z,
      IZ = ["forward", "backward", "left", "right", "sprint"],
      mZ = RR => RR.ctrlKey || RR.altKey || "Alt" === RR.key || "ArrowUp" === RR.key || "ArrowDown" === RR.key || "Tab" === RR.code || "/" === RR.key || "Slash" === RR.code;
    class zZ {
      constructor() {
        this.armed = !1, this.swallowedKeys = new Set, this.previousHeld = new Array(eR.Z).fill(!1), this.leftStickWasPressed = !1, this.rightStickWasPressed = !1, this.consumeNextFrame = !1, this.consumeAfterContinue = !1
      }
      setArmed(RR) {
        this.armed = RR
      }
      blocksGameplay() {
        return this.armed || this.consumeNextFrame
      }
      onKeyDown(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return !this.armed || JR ? !RR.repeat && this.swallowedKeys.delete(RR.code) ? {
          swallow: !1,
          continues: !1
        } : {
          swallow: this.swallowedKeys.has(RR.code),
          continues: !1
        } : "Escape" === RR.key || RR.repeat && !this.swallowedKeys.has(RR.code) ? {
          swallow: !1,
          continues: !1
        } : GR ? {
          swallow: !1,
          continues: !0
        } : (this.swallowedKeys.add(RR.code), {
          swallow: !0,
          continues: (0, rR.i)(RR)
        })
      }
      onKeyUp(RR) {
        return this.swallowedKeys.delete(RR.code)
      }
      forgetKeys() {
        this.swallowedKeys.clear()
      }
      onPadFrame(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          yR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const tR = (0, eR.p)(RR.values, this.previousHeld),
          uR = null === GR ? -1 : (0, eR.l)(GR),
          ZR = uR >= 0 && tR[uR] && !this.previousHeld[uR],
          qR = tR.some(((RR, JR) => RR && !this.previousHeld[JR] && JR !== uR)),
          iR = Math.hypot(RR.leftStick.x, RR.leftStick.y) >= PZ,
          fR = Math.hypot(RR.rightStick.x, RR.rightStick.y) >= PZ,
          VR = iR && !this.leftStickWasPressed || fR && !this.rightStickWasPressed;
        this.previousHeld = tR, this.leftStickWasPressed = iR, this.rightStickWasPressed = fR;
        let KR = !1;
        this.consumeNextFrame && (this.consumeNextFrame = !1, KR = !0);
        const wR = !JR && ZR && !yR,
          rR = !wR && this.armed && !JR && (qR || VR);
        return (wR || rR) && (this.consumeNextFrame = !0, this.consumeAfterContinue = rR, KR = !0), {
          continues: rR,
          back: wR,
          consumeHeld: KR
        }
      }
      consumeLeavesMoveStick() {
        return this.consumeAfterContinue
      }
    }
    const SZ = new Set([...cZ.k, ...cZ.B]),
      jZ = RR => ((RR, JR, GR) => {
        const yR = Object.keys(JR).filter((yR => !GR.has(yR) && JR[yR].includes(RR)));
        return yR.length > 0 && yR.every((RR => IZ.includes(RR)))
      })(RR, cZ.t, SZ),
      dZ = (RR, JR, GR) => {
        const yR = new zZ,
          tR = RR => {
            if (!RR.isTrusted) return;
            const {
              swallow: GR,
              continues: tR
            } = yR.onKeyDown(RR, !(0, rR.x)(RR) || (0, Rt.m)() || (0, iG.o)(), jZ(RR.code));
            GR && (RR.stopImmediatePropagation(), mZ(RR) && RR.preventDefault()), tR && ((0, rR.r)("keyboardMouse"), JR())
          },
          uR = RR => {
            RR.isTrusted && yR.onKeyUp(RR) && (RR.stopImmediatePropagation(), mZ(RR) && RR.preventDefault())
          },
          qR = () => {
            yR.forgetKeys()
          };
        window.addEventListener("keydown", tR, !0), window.addEventListener("keyup", uR, !0), window.addEventListener("blur", qR);
        const iR = ZR.e.onFrame((RR => {
            const tR = KR.e.getActiveConsumerName(),
              uR = GR(),
              ZR = uR ? (0, VR.h)("menuBack") : null,
              qR = null !== tR && "gameplay" !== tR,
              {
                continues: iR,
                back: fR,
                consumeHeld: eR
              } = yR.onPadFrame(RR, qR, ZR, (0, rR.l)(RR));
            if (eR) {
              const RR = (0, wR.l)().swapSticks ? "right" : "left";
              KR.e.consumeAllHeld(yR.consumeLeavesMoveStick() ? RR : null)
            }
            fR ? null === uR || void 0 === uR || uR() : iR && JR()
          })),
          fR = (0, Rt.o)(`pressToContinue:${RR}`, (() => yR.blocksGameplay()));
        return {
          setArmed: RR => {
            yR.setArmed(RR)
          },
          dispose: () => {
            window.removeEventListener("keydown", tR, !0), window.removeEventListener("keyup", uR, !0), window.removeEventListener("blur", qR), iR(), fR()
          }
        }
      };
    var EZ = GR(6037),
      YZ = GR(4742),
      kZ = GR(4375),
      QZ = GR(9514);
    const FZ = RR => {
        let {
          text: JR
        } = RR;
        return (0, IR.jsx)("div", {
          className: "ControllerSettingsHeading",
          children: JR
        })
      },
      TZ = RR => {
        let {
          label: JR,
          hint: GR,
          options: yR,
          value: uR,
          onChange: ZR
        } = RR;
        const {
          t: qR
        } = (0, tR.A)();
        return (0, IR.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, IR.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: [(0, IR.jsxs)("div", {
              className: "ControllerChoiceText",
              children: [(0, IR.jsx)("div", {
                className: "SliderText",
                children: JR
              }), GR && (0, IR.jsx)("div", {
                className: "ControllerSettingsHint",
                children: GR
              })]
            }), (0, IR.jsx)(kZ.e, {
              options: yR.map((RR => ({
                label: "label" in RR ? RR.label : qR(RR.labelKey),
                value: RR.value
              }))),
              value: uR,
              onChange: RR => {
                ZR(RR.value)
              }
            })]
          })
        })
      },
      sZ = RR => {
        let {
          settingKey: JR,
          label: GR,
          range: yR,
          format: tR
        } = RR;
        const uR = (0, wR.u)();
        return (0, IR.jsx)(EZ.i, {
          name: GR,
          min: yR.min,
          max: yR.max,
          step: yR.step,
          padStep: yR.step,
          initValue: uR[JR],
          format: tR,
          onChange: RR => {
            (0, wR.t)({
              [JR]: (0, QZ.x)(RR, yR)
            })
          }
        })
      };
    var hZ = GR(10203),
      Rq = GR(10210);
    const Jq = RR => RR instanceof DOMException && ("SecurityError" === RR.name || "NotAllowedError" === RR.name),
      Gq = RR => {
        const [JR] = [...RR.controllers].sort(((RR, JR) => Rq.n[RR] - Rq.n[JR]));
        return Rq.k[JR]
      },
      yq = RR => {
        (0, hZ.e)().allowPhoneMotion().catch((JR => {
          RR && Jq(JR) ? RR() : console.warn("Could not enable the motion sensor", JR)
        }))
      },
      tq = {
        waiting: "controller:settingsGyroPhoneWaiting",
        noSensor: "controller:settingsGyroPhoneNoSensor",
        on: "controller:settingsGyroPhoneOn",
        denied: "controller:settingsGyroPhoneDenied"
      },
      uq = RR => {
        let {
          status: JR
        } = RR;
        const {
          t: GR
        } = (0, tR.A)(), [yR, uR] = (0, oR.useState)(null), ZR = `${JR.controllers.join(",")}|${JR.phoneMotion}`;
        (0, oR.useEffect)((() => {
          uR(null)
        }), [ZR]);
        const qR = () => {
          (0, hZ.e)().connectController().then((RR => {
            uR(RR > 0 ? "openFailed" : null)
          })).catch((RR => {
            Jq(RR) ? uR("needsClick") : console.warn("Could not connect motion controller", RR)
          }))
        };
        if (JR.hidSupported) {
          let RR = GR("controller:settingsGyroConnectHint");
          return "needsClick" === yR ? RR = GR("controller:settingsGyroConnectNeedsClick") : "openFailed" === yR ? RR = GR("controller:settingsGyroOpenFailed") : JR.controllers.length > 0 && (RR = GR("controller:settingsGyroConnected", {
            name: Gq(JR)
          })), (0, IR.jsx)("div", {
            className: "SettingBox ControllerChoiceSetting",
            children: (0, IR.jsxs)("div", {
              className: "ControllerChoiceRow",
              children: [(0, IR.jsx)("div", {
                className: "ControllerSettingsHint",
                children: RR
              }), (0, IR.jsx)(xZ.g, {
                onClick: qR,
                children: GR("controller:settingsGyroConnect")
              })]
            })
          })
        }
        if ("needsPermission" === JR.phoneMotion) return (0, IR.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, IR.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: ["needsTap" === yR && (0, IR.jsx)("div", {
              className: "ControllerSettingsHint",
              children: GR("controller:settingsGyroAllowNeedsTap")
            }), (0, IR.jsx)(xZ.g, {
              onClick: () => {
                yq((() => {
                  uR("needsTap")
                }))
              },
              children: GR("controller:settingsGyroAllowMotion")
            })]
          })
        });
        const iR = tq[JR.phoneMotion];
        return iR ? (0, IR.jsx)("div", {
          className: "ControllerSettingsHint",
          children: GR(iR)
        }) : null
      },
      Zq = () => {
        const {
          t: RR
        } = (0, tR.A)(), JR = (0, wR.u)(), GR = (0, hZ.i)(), yR = (0, rR.v)(), uR = !GR.hidSupported && GR.phoneSupported && !GR.padConnected, ZR = (GR.hidSupported || GR.phoneSupported) && !uR, qR = (0, VR.h)("pause");
        return (0, IR.jsxs)(IR.Fragment, {
          children: [(0, IR.jsx)(FZ, {
            text: RR("controller:settingsGyro")
          }), uR && (0, IR.jsx)("div", {
            className: "ControllerSettingsHint",
            children: RR("controller:settingsGyroPhoneNeedsController")
          }), !ZR && !uR && (0, IR.jsx)("div", {
            className: "ControllerSettingsHint",
            children: RR(GR.hidBlocked || GR.phoneBlocked ? "controller:settingsGyroBlocked" : "controller:settingsGyroUnsupported")
          }), ZR && (0, IR.jsx)(EZ.e, {
            label: RR(GR.hidSupported ? "controller:settingsGyroToggle" : "controller:settingsGyroTogglePhone"),
            checked: JR.gyroAiming,
            onClick: RR => {
              var JR, GR;
              (0, wR.t)({
                gyroAiming: RR
              });
              const yR = null === (JR = null === (GR = navigator.userActivation) || void 0 === GR ? void 0 : GR.isActive) || void 0 === JR || JR;
              if (!RR || !yR) return;
              const tR = (0, hZ.e)(),
                uR = tR.getStatus();
              uR.hidSupported ? tR.connectControllerIfNoneGranted().catch((RR => {
                console.warn("Motion controller picker unavailable", RR)
              })) : "needsPermission" === uR.phoneMotion && yq()
            },
            circleInfoText: RR(GR.hidSupported ? "controller:settingsGyroToggleInfo" : "controller:settingsGyroToggleInfoPhone")
          }), ZR && GR.hidSupported && (0, IR.jsx)("div", {
            className: "ControllerSettingsHint",
            children: RR("controller:settingsGyroSteamHint")
          }), ZR && JR.gyroAiming && (0, IR.jsxs)(IR.Fragment, {
            children: [(0, IR.jsx)(uq, {
              status: GR
            }), (0, IR.jsx)(sZ, {
              settingKey: "gyroSensitivity",
              label: RR("controller:settingsGyroSensitivity"),
              range: QZ.S,
              format: QZ.M
            }), (0, IR.jsx)(TZ, {
              label: RR("controller:settingsGyroActivation"),
              hint: "aiming" === JR.gyroActivation && (0, IR.jsx)(YZ.c, {
                text: RR("controller:settingsGyroAimingHint", {
                  button: YZ.d
                }),
                glyph: (0, VR.h)("use")
              }),
              options: QZ.Q,
              value: JR.gyroActivation,
              onChange: RR => {
                (0, wR.t)({
                  gyroActivation: RR
                })
              }
            }), "button" === JR.gyroActivation && (0, IR.jsx)(TZ, {
              label: RR("controller:settingsGyroButton"),
              hint: RR("controller:settingsGyroButtonHint"),
              options: QZ.s.filter((RR => RR !== qR || RR === JR.gyroButton)).map((RR => ({
                label: Xt(yR, RR),
                value: RR
              }))),
              value: JR.gyroButton,
              onChange: RR => {
                (0, wR.t)({
                  gyroButton: RR
                })
              }
            })]
          })]
        })
      };
    var qq = GR(2068);
    const iq = () => {
      const {
        t: RR
      } = (0, tR.A)(), JR = (0, wR.u)(), GR = (0, rR.v)();
      return (0, IR.jsxs)(IR.Fragment, {
        children: [(0, IR.jsx)(FZ, {
          text: RR("controller:settingsAccessibility")
        }), (0, IR.jsx)(EZ.e, {
          label: RR("controller:settingsSwapConfirmBack"),
          checked: (0, VR.G)(JR.swapConfirmBack, GR),
          onClick: RR => {
            (0, wR.t)({
              swapConfirmBack: RR === (0, VR.G)(null, GR) ? null : RR
            }), qq.j.showMessage({
              translationKey: "controller:settingsSwapToast"
            })
          },
          circleInfoText: RR("controller:settingsSwapConfirmBackInfo")
        }), (0, IR.jsx)(TZ, {
          label: RR("controller:settingsButtonRepeat"),
          hint: RR("controller:settingsButtonRepeatHint"),
          options: QZ.r,
          value: JR.buttonRepeat,
          onChange: RR => {
            (0, wR.t)({
              buttonRepeat: RR
            })
          }
        }), (0, IR.jsx)(TZ, {
          label: RR("controller:settingsTapHoldTime"),
          hint: RR("controller:settingsTapHoldTimeHint"),
          options: QZ.pb,
          value: JR.tapHoldTime,
          onChange: RR => {
            (0, wR.t)({
              tapHoldTime: RR
            })
          }
        }), (0, IR.jsx)(TZ, {
          label: RR("controller:settingsEmoteButton"),
          hint: RR("wheel" === JR.emoteButton ? "controller:settingsEmoteButtonWheelHint" : "controller:settingsEmoteButtonTapHoldHint"),
          options: QZ.F,
          value: JR.emoteButton,
          onChange: RR => {
            (0, wR.t)({
              emoteButton: RR
            })
          }
        }), (0, IR.jsx)(TZ, {
          label: RR("controller:settingsAttackMode"),
          hint: RR("toggle" === JR.attackMode ? "controller:settingsAttackToggleHint" : "controller:settingsAttackHoldHint"),
          options: QZ.o,
          value: JR.attackMode,
          onChange: RR => {
            (0, wR.t)({
              attackMode: RR
            })
          }
        }), (0, IR.jsx)(EZ.e, {
          label: RR("controller:settingsLargePointer"),
          checked: JR.largePointer,
          onClick: RR => {
            (0, wR.t)({
              largePointer: RR
            })
          },
          circleInfoText: RR("controller:settingsLargePointerInfo")
        })]
      })
    };
    var fq = GR(10215);
    const Vq = new class {
        constructor(RR) {
          this.router = RR, this.current = null
        }
        claim(RR, JR) {
          const GR = this.current;
          GR && (this.current = null, GR.release(), GR.onTakenOver());
          const yR = this.router.register({
              ...RR,
              name: "capture"
            }),
            tR = {
              release: yR,
              onTakenOver: JR
            };
          return this.current = tR, () => {
            this.current === tR && (this.current = null), yR()
          }
        }
      }(KR.e),
      Kq = RR => {
        (0, oR.useEffect)((() => {
          if (!RR) return;
          const JR = RR();
          let GR = !1;
          const yR = () => {
              GR || (GR = !0, JR.onEnd())
            },
            tR = Vq.claim({
              isActive: () => !GR,
              onFrame: RR => {
                JR.onFrame(RR, yR)
              }
            }, yR),
            uR = void 0 === JR.timeoutMs ? void 0 : window.setTimeout(yR, JR.timeoutMs),
            ZR = RR => {
              "Escape" === RR.key && (RR.preventDefault(), RR.stopPropagation(), yR())
            };
          return window.addEventListener("keydown", ZR, !0), () => {
            GR = !0, tR(), window.clearTimeout(uR), window.removeEventListener("keydown", ZR, !0)
          }
        }), [RR])
      },
      wq = RR => {
        let {
          row: JR,
          capturing: GR,
          onCapture: yR,
          holdFillRef: uR,
          onRebind: ZR,
          swapped: qR
        } = RR;
        const {
          t: iR
        } = (0, tR.A)();
        if ("fixed" === JR.kind) return (0, IR.jsx)("div", {
          className: "ControlRow PadControlRow PadControlRowFixed",
          children: (0, IR.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, IR.jsx)("div", {
              className: "ControlName",
              children: iR(JR.labelKey)
            }), (0, IR.jsx)("div", {
              className: "ControlBindingsContainer",
              children: (0, IR.jsx)("div", {
                className: "ControlBindingsList",
                children: (0, IR.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  children: (0, IR.jsx)(Mt, {
                    glyph: "move" === JR.stick ? (0, VR.r)() : (0, VR.o)()
                  })
                })
              })
            })]
          })
        });
        const {
          action: fR
        } = JR, KR = (0, VR.h)(fR), wR = (0, VR.k)(fR), rR = KR !== wR && (0, VR.c)(fR, wR);
        return (0, IR.jsxs)("div", {
          className: PR()("ControlRow PadControlRow", {
            Capturing: GR
          }),
          children: [(0, IR.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, IR.jsx)("div", {
              className: "ControlName",
              children: iR(QZ.j[fR])
            }), (0, IR.jsxs)("div", {
              className: "ControlBindingsContainer",
              children: [!GR && (0, IR.jsxs)("div", {
                className: "ControlBindingsList",
                children: [(0, IR.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    yR(fR)
                  },
                  children: (0, IR.jsx)(Mt, {
                    glyph: KR
                  })
                }), rR && (0, IR.jsx)("div", {
                  className: "ControlBinding PadBindingReset",
                  title: iR("controller:settingsReset"),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    ZR(fR, wR)
                  },
                  children: (0, IR.jsx)(vZ.d, {
                    name: "arrows-rotate"
                  })
                })]
              }), GR && (0, IR.jsxs)("div", {
                className: "ControlBindingAddInput",
                children: [(0, IR.jsxs)("div", {
                  className: "PadCaptureBox",
                  children: [(0, IR.jsx)("span", {
                    children: iR("controller:settingsCapturePrompt")
                  }), (0, IR.jsx)("div", {
                    ref: uR,
                    className: "PadCaptureHoldFill"
                  })]
                }), (0, IR.jsx)("div", {
                  className: "ControlBindingAddCancel",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    yR(null)
                  },
                  children: "\xd7"
                })]
              }), GR && (0, IR.jsx)("div", {
                className: "PadCaptureHint",
                children: (0, IR.jsx)(YZ.c, {
                  text: iR((0, VR.c)(fR, (0, VR.h)("menuBack")) ? "controller:settingsCaptureCancelOrBindHint" : "controller:settingsCaptureCancelHint", {
                    button: YZ.d
                  }),
                  glyph: (0, VR.h)("menuBack")
                })
              })]
            })]
          }), qR.map((RR => (0, IR.jsx)("div", {
            className: "ControlRowWarning PadSwapNotice",
            children: (0, IR.jsx)(YZ.c, {
              text: iR("controller:settingsSwapNotice", {
                action: iR(QZ.j[RR]),
                button: YZ.d
              }),
              glyph: (0, VR.h)(RR)
            })
          }, RR))), GR && (0, IR.jsx)("div", {
            className: "PadCaptureTimer",
            style: {
              animationDuration: `${QZ.u}ms`
            }
          })]
        })
      },
      rq = [],
      eq = RR => {
        let {
          layoutSetting: JR
        } = RR;
        const {
          t: GR
        } = (0, tR.A)(), yR = (0, wR.u)();
        (0, rR.v)();
        const uR = (0, oR.useRef)(null),
          [ZR, qR] = (0, oR.useState)(null),
          iR = (0, oR.useCallback)(((RR, JR) => {
            const GR = (0, wR.l)().bindings;
            (0, VR.C)(RR, JR);
            const yR = (0, VR.v)(GR, RR);
            qR(yR.length > 0 ? {
              action: RR,
              swapped: yR
            } : null)
          }), []),
          [fR, aR] = ((RR, JR) => {
            const [GR, yR] = (0, oR.useState)(null), tR = (0, oR.useMemo)((() => GR ? () => {
              const tR = (0, VR.h)("menuBack"),
                uR = new QZ.d(tR, (0, VR.h)("menuConfirm"), (RR => (0, VR.c)(GR, RR)));
              return {
                onFrame: (yR, ZR) => {
                  var qR;
                  const iR = yR.frame.timestampMs,
                    fR = uR.update({
                      ...yR,
                      isDown: RR => (0, eR.J)(yR.frame.values, RR)
                    }, iR);
                  null === (qR = RR.current) || void 0 === qR || qR.style.setProperty("width", 100 * uR.getBindHoldProgress(iR) + "%"), fR && ("bind" === fR.kind ? (KR.e.consumeButton(fR.button), JR(GR, fR.button)) : KR.e.consumeButton(tR), ZR())
                },
                onEnd: () => {
                  yR(null)
                },
                timeoutMs: QZ.u
              }
            } : null), [GR, RR, JR]);
            return Kq(tR), [GR, yR]
          })(uR, iR),
          LR = RR => {
            RR && qR(null), aR(RR)
          };
        (0, oR.useEffect)((() => {
          if (!ZR) return;
          const RR = window.setTimeout((() => {
            qR(null)
          }), QZ.ob);
          return () => {
            window.clearTimeout(RR)
          }
        }), [ZR]);
        const nR = !yR.swapSticks && 0 === Object.keys(yR.bindings).length;
        return (0, IR.jsxs)("div", {
          className: "ControlsContainer PadControlsContainer",
          children: [(0, IR.jsx)("div", {
            className: "SliderText",
            children: GR("controller:settingsRemap")
          }), (0, IR.jsx)("div", {
            className: "ControllerSettingsHint",
            children: GR("controller:settingsRemapHint")
          }), (0, IR.jsx)(xZ.M, {
            className: "ResetBindingsButton PadResetAllButton",
            disabled: nR,
            onClick: () => {
              LR(null), qR(null), (0, VR.F)()
            },
            children: GR("controller:settingsResetAll")
          }), JR, QZ.hb.map(((RR, JR) => (0, IR.jsx)(fq.e, {
            title: GR(RR.titleKey),
            defaultOpen: 0 === JR,
            children: RR.rows.map((RR => (0, IR.jsx)(wq, {
              row: RR,
              capturing: "action" === RR.kind && RR.action === fR,
              onCapture: LR,
              holdFillRef: uR,
              onRebind: iR,
              swapped: "action" === RR.kind && (null === ZR || void 0 === ZR ? void 0 : ZR.action) === RR.action ? ZR.swapped : rq
            }, "action" === RR.kind ? RR.action : RR.labelKey)))
          }, RR.titleKey)))]
        })
      },
      aq = RR => {
        let {
          deadzone: JR,
          dotRef: GR,
          labelKey: yR
        } = RR;
        const {
          t: uR
        } = (0, tR.A)();
        return (0, IR.jsxs)("div", {
          className: "ControllerTesterStick",
          children: [(0, IR.jsxs)("div", {
            className: "ControllerTesterStickCircle",
            children: [(0, IR.jsx)("div", {
              className: "ControllerTesterDeadzone",
              style: {
                width: 100 * JR + "%",
                height: 100 * JR + "%"
              }
            }), (0, IR.jsx)("div", {
              ref: GR,
              className: "ControllerTesterDot"
            })]
          }), (0, IR.jsx)("div", {
            className: "ControllerTesterStickLabel",
            children: uR(yR)
          })]
        })
      },
      Lq = (RR, JR, GR, yR) => {
        var tR;
        RR && (RR.style.left = 50 + 50 * Math.max(-1, Math.min(1, JR.x)) + "%", RR.style.top = 50 + 50 * Math.max(-1, Math.min(1, JR.y)) + "%", null === (tR = RR.parentElement) || void 0 === tR || tR.classList.toggle("Active", yR || Math.hypot(JR.x, JR.y) > GR))
      },
      nq = RR => {
        const JR = {
            deadzone: RR.moveDeadzone,
            labelKey: "controller:settingsActionMove"
          },
          GR = {
            deadzone: RR.lookDeadzone,
            labelKey: "controller:settingsActionLook"
          };
        return RR.swapSticks ? {
          left: GR,
          right: JR
        } : {
          left: JR,
          right: GR
        }
      },
      Uq = () => {
        const {
          t: RR
        } = (0, tR.A)(), JR = (() => {
          const [RR, JR] = (0, oR.useState)((() => ZR.e.getActivePad()));
          return (0, nt.f)(ZR.d, (() => {
            JR(ZR.e.getActivePad())
          })), RR
        })(), GR = nq((0, wR.u)()), yR = (0, oR.useRef)(null), uR = (0, oR.useRef)(null), qR = (0, oR.useRef)([]), iR = (0, oR.useRef)(null), fR = (0, oR.useRef)(null), [rR, aR] = (RR => {
          const [JR, GR] = (0, oR.useState)(!1), yR = (0, oR.useMemo)((() => JR ? () => {
            const JR = (0, VR.h)("menuBack"),
              yR = new QZ.f;
            return {
              onFrame: (GR, tR) => {
                var uR;
                const ZR = yR.update({
                  pressed: GR.wasPressed(JR),
                  Qq: GR.isHeld(JR)
                }, GR.frame.timestampMs);
                null === (uR = RR.current) || void 0 === uR || uR.style.setProperty("width", 100 * ZR + "%"), ZR >= 1 && (KR.e.consumeButton(JR), tR())
              },
              onEnd: () => {
                GR(!1)
              }
            }
          } : null), [JR, RR]);
          return Kq(yR), [JR, GR]
        })(uR);
        (0, oR.useEffect)((() => {
          const RR = RR => {
            for (const GR of eR.ab) {
              const JR = (0, eR.l)(GR),
                yR = qR.current[JR];
              if (!yR) continue;
              const tR = RR.values[JR];
              yR.classList.toggle("Pressed", tR >= eR.z), (0, eR.M)(JR) && yR.style.setProperty("--trigger-fill", `${Math.round(100*tR)}%`)
            }
            const JR = nq((0, wR.l)());
            Lq(iR.current, RR.leftStick, JR.left.deadzone, RR.values[(0, eR.l)("LS")] >= eR.z), Lq(fR.current, RR.rightStick, JR.right.deadzone, RR.values[(0, eR.l)("RS")] >= eR.z)
          };
          return JR || RR((0, eR.v)()), ZR.e.onFrame(RR)
        }), [JR]), (0, oR.useEffect)((() => {
          JR || aR(!1)
        }), [JR, aR]), (0, oR.useEffect)((() => {
          var RR;
          rR && (null === (RR = yR.current) || void 0 === RR || RR.scrollIntoView({
            block: "nearest"
          }))
        }), [rR]);
        const LR = QZ.fb.find((RR => RR.value === (null === JR || void 0 === JR ? void 0 : JR.family)));
        return (0, IR.jsxs)("div", {
          ref: yR,
          className: PR()("SettingBox ControllerTester", {
            Testing: rR
          }),
          children: [(0, IR.jsxs)("div", {
            className: "ControllerTesterHeader",
            children: [(0, IR.jsxs)("div", {
              className: "ControllerTesterInfo",
              children: [JR && (0, IR.jsx)("div", {
                children: RR("controller:settingsTesterFamily", {
                  family: LR ? RR(LR.labelKey) : JR.family
                })
              }), JR && (0, IR.jsx)("div", {
                className: "ControllerTesterPadId",
                children: JR.id
              }), !JR && (0, IR.jsx)("div", {
                children: RR("controller:settingsTesterNoPad")
              })]
            }), (JR || rR) && (0, IR.jsx)(xZ.g, {
              className: "ControllerTesterToggle",
              onClick: () => {
                aR(!rR)
              },
              children: RR(rR ? "controller:settingsTesterStop" : "controller:settingsTesterStart")
            })]
          }), JR && !rR && (0, IR.jsx)("div", {
            className: "ControllerSettingsHint",
            children: RR("controller:settingsTesterHint")
          }), rR && (0, IR.jsxs)("div", {
            className: "ControllerTesterBanner",
            children: [(0, IR.jsx)(YZ.c, {
              text: RR("controller:settingsTesterTesting", {
                button: YZ.d
              }),
              glyph: (0, VR.h)("menuBack")
            }), (0, IR.jsx)("div", {
              ref: uR,
              className: "ControllerTesterExitFill"
            })]
          }), (0, IR.jsxs)("div", {
            className: "ControllerTesterBody",
            children: [(0, IR.jsx)(aq, {
              deadzone: GR.left.deadzone,
              dotRef: iR,
              labelKey: GR.left.labelKey
            }), (0, IR.jsx)("div", {
              className: "ControllerTesterButtons",
              children: eR.ab.map((RR => {
                const GR = (0, eR.l)(RR);
                return (0, IR.jsx)("div", {
                  ref: RR => {
                    qR.current[GR] = RR
                  },
                  className: (0, eR.M)(GR) ? "ControllerTesterButton ControllerTesterTrigger" : "ControllerTesterButton",
                  children: (0, IR.jsx)(Mt, {
                    glyph: RR,
                    family: null === JR || void 0 === JR ? void 0 : JR.family
                  })
                }, RR)
              }))
            }), (0, IR.jsx)(aq, {
              deadzone: GR.right.deadzone,
              dotRef: fR,
              labelKey: GR.right.labelKey
            })]
          })]
        })
      },
      Wq = (0, oR.memo)((function() {
        const {
          t: RR
        } = (0, tR.A)(), JR = (0, wR.u)(), [GR, yR] = (0, oR.useState)(!1);
        return (0, oR.useEffect)((() => {
          if (!GR) return;
          const RR = window.setTimeout((() => {
            yR(!1)
          }), QZ.ob);
          return () => {
            window.clearTimeout(RR)
          }
        }), [GR]), (0, IR.jsxs)("div", {
          className: "SettingsMenuRightInner ControllerCategory",
          children: [(0, IR.jsx)(FZ, {
            text: RR("controller:settingsLook")
          }), (0, IR.jsx)(sZ, {
            settingKey: "lookSensitivityX",
            label: RR("controller:settingsLookSensitivityX"),
            range: QZ.jb,
            format: QZ.N
          }), (0, IR.jsx)(sZ, {
            settingKey: "lookSensitivityY",
            label: RR("controller:settingsLookSensitivityY"),
            range: QZ.jb,
            format: QZ.N
          }), (0, IR.jsx)(sZ, {
            settingKey: "aimLookSensitivity",
            label: RR("controller:settingsAimLookSensitivity"),
            range: QZ.n,
            format: QZ.N
          }), (0, IR.jsx)(TZ, {
            label: RR("controller:settingsLookCurve"),
            hint: RR("controller:settingsLookCurveHint"),
            options: QZ.ab,
            value: JR.lookCurve,
            onChange: RR => {
              (0, wR.t)({
                lookCurve: RR
              })
            }
          }), (0, IR.jsx)(EZ.e, {
            label: RR("controller:settingsInvertLookX"),
            checked: JR.invertLookX,
            onClick: RR => {
              (0, wR.t)({
                invertLookX: RR
              })
            }
          }), (0, IR.jsx)(EZ.e, {
            label: RR("controller:settingsInvertLookY"),
            checked: JR.invertLookY,
            onClick: RR => {
              (0, wR.t)({
                invertLookY: RR
              })
            }
          }), (0, IR.jsx)(sZ, {
            settingKey: "lookDeadzone",
            label: RR("controller:settingsLookDeadzone"),
            range: QZ.D,
            format: QZ.I
          }), (0, IR.jsx)(Zq, {}), (0, IR.jsx)(FZ, {
            text: RR("controller:settingsMovement")
          }), (0, IR.jsx)(sZ, {
            settingKey: "moveDeadzone",
            label: RR("controller:settingsMoveDeadzone"),
            range: QZ.D,
            format: QZ.I
          }), (0, IR.jsx)(EZ.e, {
            label: RR("controller:settingsAutoSprint"),
            checked: JR.autoSprint,
            onClick: RR => {
              (0, wR.t)({
                autoSprint: RR
              })
            },
            circleInfoText: RR("controller:settingsAutoSprintInfo")
          }), (0, IR.jsx)(TZ, {
            label: RR("controller:settingsSneak"),
            options: QZ.nb,
            value: JR.sneakMode,
            onChange: RR => {
              (0, wR.t)({
                sneakMode: RR
              })
            }
          }), (0, IR.jsx)(FZ, {
            text: RR("controller:settingsButtons")
          }), (0, IR.jsx)(TZ, {
            label: RR("controller:settingsPromptFamily"),
            options: QZ.fb,
            value: JR.promptFamily,
            onChange: RR => {
              (0, wR.t)({
                promptFamily: RR
              })
            }
          }), (0, IR.jsx)(EZ.e, {
            label: RR("controller:settingsHideButtonHints"),
            checked: JR.hideButtonHints,
            onClick: RR => {
              (0, wR.t)({
                hideButtonHints: RR
              })
            }
          }), (0, IR.jsx)(EZ.e, {
            label: RR("controller:settingsVibration"),
            checked: JR.vibration,
            onClick: RR => {
              (0, wR.t)({
                vibration: RR
              }), RR && ut("preview")
            }
          }), (0, IR.jsx)(sZ, {
            settingKey: "cursorSpeed",
            label: RR("controller:settingsCursorSpeed"),
            range: QZ.B,
            format: QZ.N
          }), (0, IR.jsx)(EZ.e, {
            label: RR("controller:settingsCursorMagnetism"),
            checked: JR.cursorMagnetism,
            onClick: RR => {
              (0, wR.t)({
                cursorMagnetism: RR
              })
            }
          }), (0, IR.jsx)(EZ.e, {
            label: RR("controller:settingsMenuBackToCategories"),
            checked: JR.menuBackToCategories,
            onClick: RR => {
              (0, wR.t)({
                menuBackToCategories: RR
              })
            }
          }), (0, IR.jsx)(eq, {
            layoutSetting: (0, IR.jsxs)(IR.Fragment, {
              children: [VR.e.map((GR => (0, IR.jsx)(EZ.e, {
                label: RR(QZ.Y[GR]),
                checked: (0, VR.B)(GR, JR),
                onClick: RR => {
                  yR(!(0, VR.H)(GR, RR))
                }
              }, GR))), GR && (0, IR.jsx)("div", {
                className: "PadLayoutRefusedNotice",
                role: "status",
                children: RR("controller:settingsLayoutRefusedToast")
              })]
            })
          }), (0, IR.jsx)(iq, {}), (0, IR.jsx)(FZ, {
            text: RR("controller:settingsAlternatives")
          }), (0, IR.jsx)("div", {
            className: "ControllerSettingsHint",
            children: RR("controller:settingsAlternativesHint")
          }), (0, IR.jsx)(TZ, {
            label: RR("controller:settingsMenuNavigation"),
            hint: RR("controller:settingsMenuNavigationHint"),
            options: QZ.bb,
            value: JR.menuNavigation,
            onChange: RR => {
              (0, wR.t)({
                menuNavigation: RR
              })
            }
          }), (0, IR.jsx)(TZ, {
            label: RR("controller:settingsInventoryNavigation"),
            hint: RR("controller:settingsInventoryNavigationHint"),
            options: QZ.W,
            value: JR.inventoryNavigation,
            onChange: RR => {
              (0, wR.t)({
                inventoryNavigation: RR
              })
            }
          }), (0, IR.jsx)(TZ, {
            label: RR("controller:settingsQuickChat"),
            hint: RR("controller:settingsQuickChatHint"),
            options: QZ.gb,
            value: JR.quickChat,
            onChange: RR => {
              (0, wR.t)({
                quickChat: RR
              })
            }
          }), (0, IR.jsx)(TZ, {
            label: RR("controller:settingsLeaderboardButton"),
            hint: RR("controller:settingsLeaderboardButtonHint"),
            options: QZ.$,
            value: JR.leaderboardButton,
            onChange: RR => {
              (0, wR.t)({
                leaderboardButton: RR
              })
            }
          }), (0, IR.jsx)(FZ, {
            text: RR("controller:settingsTester")
          }), (0, IR.jsx)(Uq, {})]
        })
      }));
    (0, tR.c)(yR);
    for (const Bq of (0, uR.q)()) Bq.connected ? ZR.e.handleConnectionEvent(Bq) : ZR.e.handleDisconnectionEvent(Bq);
    const Aq = () => null !== ZR.e.getActivePad(),
      Cq = () => tG.getState(),
      Xq = () => tG.isSteppingSlots(),
      Mq = (RR, JR) => {
        const GR = hy.getFocused();
        hy.isActive() && GR && RR.contains(GR) && hy.setFocus(JR, {
          scroll: !1
        })
      }
  },
  9491: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => iR,
      f: () => fR
    });
    var yR = GR(1560),
      tR = GR(1552);
    const uR = {
        "054c": "playstation",
        "057e": "nintendo"
      },
      ZR = "28de",
      qR = new Set(["1205"]),
      iR = (RR, JR) => {
        const GR = (0, yR.d)(RR);
        if ((null === GR || void 0 === GR ? void 0 : GR.vendor) === ZR) return qR.has(GR.product) ? "steamdeck" : "xbox";
        if (GR && uR[GR.vendor]) return uR[GR.vendor];
        if ((0, tR.e)(RR)) return "nintendo";
        const iR = `${RR} ${null!==JR&&void 0!==JR?JR:""}`.toLowerCase();
        return /dualsense|dualshock|playstation|sony/.test(iR) ? "playstation" : /nintendo|switch|joy-con|pro controller/.test(iR) ? "nintendo" : /steam deck/.test(iR) ? "steamdeck" : "xbox"
      },
      fR = RR => {
        var JR;
        return (null === (JR = (0, yR.d)(RR)) || void 0 === JR ? void 0 : JR.vendor) === ZR
      }
  },
  9523: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => fR,
      h: () => qR
    });
    var yR = GR(9483);
    const tR = ["capture", "keyboard", "wheel", "inventory", "cursor", "focus", "gameplay"],
      uR = new Set(["capture", "gameplay"]),
      ZR = ["Up", "Down", "Left", "Right"],
      qR = RR => ZR.includes(RR),
      iR = .25;
    const fR = new class {
      constructor() {
        this.consumers = new Map, this.activeName = null, this.Qq = new Array(yR.Z).fill(!1), this.previousHeld = new Array(yR.Z).fill(!1), this.consumedButtons = new Array(yR.Z).fill(!1), this.suppressedReleases = new Array(yR.Z).fill(!1), this.wakeOwned = new Array(yR.Z).fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.peek = null, this.lastFrame = (0, yR.v)()
      }
      register(RR) {
        return this.consumers.has(RR.name) && console.warn(`Controller consumer "${RR.name}" registered twice; the newer one replaces it.`), this.consumers.set(RR.name, RR), () => {
          var JR;
          this.consumers.get(RR.name) === RR && (this.activeName === RR.name ? (this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()) : (null === (JR = this.peek) || void 0 === JR ? void 0 : JR.over) === RR.name && (this.peek = null), this.consumers.delete(RR.name))
        }
      }
      getActiveConsumerName() {
        return this.activeName
      }
      isButtonHeld(RR) {
        return this.Qq[(0, yR.l)(RR)]
      }
      getLastFrame() {
        return this.lastFrame
      }
      clear() {
        this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()
      }
      reset() {
        this.deactivateCurrent(), this.activeName = null, this.Qq = new Array(yR.Z).fill(!1), this.previousHeld = new Array(yR.Z).fill(!1), this.consumedButtons.fill(!1), this.suppressedReleases.fill(!1), this.wakeOwned.fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.lastFrame = (0, yR.v)()
      }
      dispatch(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.lastFrame = RR, this.previousHeld = this.Qq, this.Qq = (0, yR.p)(RR.values, this.previousHeld);
        for (let uR = 0; uR < yR.Z; uR++) this.suppressedReleases[uR] = !this.Qq[uR] && this.consumedButtons[uR], this.Qq[uR] || (this.consumedButtons[uR] = !1), this.wakeOwned[uR] && (this.Qq[uR] ? (this.consumedButtons[uR] = !0, this.wakeOwned[uR] = !1) : RR.values[uR] < yR.V && (this.wakeOwned[uR] = !1));
        Math.hypot(RR.leftStick.x, RR.leftStick.y) < iR && (this.leftStickConsumed = !1), Math.hypot(RR.rightStick.x, RR.rightStick.y) < iR && (this.rightStickConsumed = !1);
        const tR = this.pickActive();
        if ((null === tR || void 0 === tR ? void 0 : tR.name) !== this.activeName) {
          var ZR, qR, fR, VR, KR, wR;
          const RR = this.activeName,
            JR = {
              left: !this.leftStickConsumed,
              right: !this.rightStickConsumed
            },
            GR = null !== (ZR = null === tR || void 0 === tR || null === (qR = tR.peek) || void 0 === qR ? void 0 : qR.call(tR)) && void 0 !== ZR ? ZR : null,
            uR = null === RR && !!GR && !(null === (fR = this.consumers.get(GR.over)) || void 0 === fR || !fR.onPeekFrame),
            iR = GR && (GR.over === RR || uR) ? GR : null,
            rR = null !== this.peek && this.peek.over === (null === tR || void 0 === tR ? void 0 : tR.name) ? this.peek : null;
          this.deactivateCurrent(null !== iR, null !== rR), this.activeName = null !== (VR = null === tR || void 0 === tR ? void 0 : tR.name) && void 0 !== VR ? VR : null, null === RR || this.handOffPending || this.consumeAllHeld();
          const eR = null === (KR = null !== iR && void 0 !== iR ? iR : rR) || void 0 === KR ? void 0 : KR.stick;
          "left" === eR && JR.left ? this.leftStickConsumed = !1 : "right" === eR && JR.right && (this.rightStickConsumed = !1), this.peek = iR, tR || null === RR ? tR && (null === (wR = this.idleResume) || void 0 === wR ? void 0 : wR.name) === tR.name && (this.idleResume.left && (this.leftStickConsumed = !1), this.idleResume.right && (this.rightStickConsumed = !1)) : this.idleResume = {
            name: RR,
            left: JR.left && this.leftStickConsumed,
            right: JR.right && this.rightStickConsumed
          }, tR && (this.idleResume = null);
          for (let tR = 0; tR < yR.Z; tR++) this.previousHeld[tR] && !this.Qq[tR] && (this.suppressedReleases[tR] = !0)
        }
        var rR, eR;
        (this.handOffPending = !1, tR) && (GR && !uR.has(tR.name) && this.consumeWakePress(tR), tR.onFrame(this.buildInput(RR, JR, GR)), this.peek && (null === (rR = this.consumers.get(this.peek.over)) || void 0 === rR || null === (eR = rR.onPeekFrame) || void 0 === eR || eR.call(rR, this.buildInput(RR, JR, !1, this.peek.stick))))
      }
      consumeWakePress(RR) {
        for (let tR = 0; tR < yR.Z; tR++) {
          var JR, GR;
          const uR = yR.ab[tR];
          (null !== (JR = null === (GR = RR.wakePressActs) || void 0 === GR ? void 0 : GR.call(RR, uR)) && void 0 !== JR ? JR : ZR.includes(uR)) || (this.Qq[tR] ? this.consumedButtons[tR] = !0 : this.lastFrame.values[tR] >= yR.U && (this.wakeOwned[tR] = !0))
        }
      }
      pickActive() {
        for (const RR of tR) {
          const JR = this.consumers.get(RR);
          if (JR && JR.isActive()) return JR
        }
        return null
      }
      deactivateCurrent() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var GR, yR, tR, uR;
        this.activeName && (null === (GR = this.consumers.get(this.activeName)) || void 0 === GR || null === (yR = GR.onDeactivate) || void 0 === yR || yR.call(GR, RR));
        this.peek && !JR && (null === (tR = this.consumers.get(this.peek.over)) || void 0 === tR || null === (uR = tR.onDeactivate) || void 0 === uR || uR.call(tR, !1));
        this.peek = null
      }
      consumeAllHeld() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.idleResume = null;
        for (let tR = 0; tR < yR.Z; tR++) this.Qq[tR] && (this.consumedButtons[tR] = !0);
        const {
          leftStick: JR,
          rightStick: GR
        } = this.lastFrame;
        this.leftStickConsumed = "left" !== RR && (this.leftStickConsumed || Math.hypot(JR.x, JR.y) >= iR), this.rightStickConsumed = "right" !== RR && (this.rightStickConsumed || Math.hypot(GR.x, GR.y) >= iR)
      }
      handOffHeldInput() {
        this.handOffPending = !0
      }
      consumeButton(RR) {
        const JR = (0, yR.l)(RR);
        this.Qq[JR] && (this.consumedButtons[JR] = !0)
      }
      buildInput(RR, JR, GR, tR) {
        const uR = this.Qq,
          ZR = this.previousHeld,
          qR = tR ? new Array(yR.Z).fill(!0) : [...this.consumedButtons],
          iR = tR ? qR : [...this.suppressedReleases],
          fR = !this.leftStickConsumed && (!tR || "left" === tR),
          VR = !this.rightStickConsumed && (!tR || "right" === tR);
        return {
          frame: RR,
          dtMs: JR,
          isHeld: RR => {
            const JR = (0, yR.l)(RR);
            return uR[JR] && !qR[JR]
          },
          wasPressed: RR => {
            const JR = (0, yR.l)(RR);
            return uR[JR] && !ZR[JR] && !qR[JR]
          },
          wasReleased: RR => {
            const JR = (0, yR.l)(RR);
            return !uR[JR] && ZR[JR] && !iR[JR]
          },
          value: JR => {
            const GR = (0, yR.l)(JR);
            return qR[GR] ? 0 : RR.values[GR]
          },
          leftStick: fR ? RR.leftStick : {
            x: 0,
            y: 0
          },
          rightStick: VR ? RR.rightStick : {
            x: 0,
            y: 0
          },
          wokeDevice: GR
        }
      }
    }
  },
  9504: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => KR.d,
      i: () => KR.h,
      l: () => gR,
      p: () => bR,
      t: () => vR,
      u: () => OR
    });
    var yR = GR(66),
      tR = GR(32),
      uR = GR(1581),
      ZR = GR(46),
      qR = GR(9509),
      iR = GR(9483),
      fR = GR(9497),
      VR = GR(9481),
      KR = GR(2218),
      wR = GR(9514);
    const rR = {
        lookSensitivityX: 100,
        lookSensitivityY: 100,
        aimLookSensitivity: 100,
        invertLookX: !1,
        invertLookY: !1,
        lookCurve: "exponential",
        lookDeadzone: .12,
        moveDeadzone: .15,
        swapSticks: !1,
        autoSprint: !0,
        sneakMode: "toggle",
        tapHoldTime: "short",
        attackMode: "hold",
        promptFamily: "auto",
        hideButtonHints: !1,
        vibration: !0,
        cursorSpeed: 100,
        cursorMagnetism: !1,
        buttonRepeat: "default",
        largePointer: !1,
        menuBackToCategories: !0,
        swapConfirmBack: null,
        menuNavigation: "hybrid",
        inventoryNavigation: "hybrid",
        quickChat: "wheel",
        leaderboardButton: "shop",
        gyroAiming: !1,
        gyroSensitivity: 2,
        gyroActivation: "always",
        gyroButton: "RB",
        emoteButton: "tapHold",
        bindings: {}
      },
      eR = "controllerSettings",
      aR = ["bindings", "promptFamily", "hideButtonHints", "swapSticks", "swapConfirmBack", "leaderboardButton"],
      LR = ["auto", ...qR.c],
      nR = (RR, JR) => "string" === typeof JR && RR.includes(JR),
      UR = RR => JR => "number" === typeof JR && Number.isFinite(JR) ? (0, wR.x)(JR, RR) : void 0,
      WR = RR => "boolean" === typeof RR ? RR : void 0,
      AR = RR => JR => nR(RR, JR) ? JR : void 0,
      CR = {
        lookSensitivityX: UR(wR.jb),
        lookSensitivityY: UR(wR.jb),
        aimLookSensitivity: UR(wR.n),
        invertLookX: WR,
        invertLookY: WR,
        lookCurve: AR(iR.Q),
        lookDeadzone: UR(wR.D),
        moveDeadzone: UR(wR.D),
        swapSticks: WR,
        autoSprint: WR,
        sneakMode: AR(["toggle", "hold"]),
        tapHoldTime: AR(["short", "medium", "long"]),
        attackMode: AR(["hold", "toggle"]),
        promptFamily: AR(LR),
        hideButtonHints: WR,
        vibration: WR,
        cursorSpeed: UR(wR.B),
        cursorMagnetism: WR,
        buttonRepeat: AR(iR.m),
        largePointer: WR,
        menuBackToCategories: WR,
        swapConfirmBack: WR,
        menuNavigation: AR(["hybrid", "focus", "cursor"]),
        inventoryNavigation: AR(["hybrid", "slot", "cursor"]),
        quickChat: AR(["wheel", "off"]),
        leaderboardButton: AR(["shop", "leaderboard"]),
        gyroAiming: WR,
        gyroSensitivity: UR(wR.S),
        gyroActivation: AR(["always", "aiming", "button"]),
        gyroButton: AR(iR.ab),
        emoteButton: AR(["tapHold", "wheel"])
      },
      XR = [{
        param: "padMenuNav",
        key: "menuNavigation"
      }, {
        param: "padInventoryNav",
        key: "inventoryNavigation"
      }, {
        param: "padQuickChat",
        key: "quickChat"
      }, {
        param: "padSneak",
        key: "sneakMode"
      }, {
        param: "padGyro",
        key: "gyroActivation"
      }, {
        param: "padLeaderboardButton",
        key: "leaderboardButton"
      }],
      MR = RR => {
        const JR = {};
        if ("object" !== typeof RR || null === RR) return JR;
        for (const [GR, yR] of Object.entries(RR)) Object.prototype.hasOwnProperty.call(fR.f, GR) && nR(iR.ab, yR) && (JR[GR] = yR);
        return JR
      },
      BR = RR => {
        const JR = {};
        for (const GR of Object.keys(rR))("bindings" === GR ? Object.keys(RR.bindings).length > 0 : RR[GR] !== rR[GR]) && (JR[GR] = RR[GR]);
        0 !== Object.keys(JR).length ? ZR.i.setItem(eR, JR) : ZR.i.removeItem(eR)
      };
    let lR = (() => {
        const RR = ZR.i.getItem(eR),
          JR = (RR => {
            const JR = "object" === typeof RR && null !== RR ? RR : {},
              GR = {
                ...rR,
                bindings: MR(JR.bindings)
              };
            for (const tR of Object.keys(CR)) {
              const RR = CR[tR](JR[tR]);
              void 0 !== RR && (GR[tR] = RR)
            }
            const yR = Object.keys(JR).filter((RR => !!Object.prototype.hasOwnProperty.call(rR, RR) && ("bindings" === RR ? "object" !== typeof JR.bindings || null === JR.bindings || Object.keys(JR.bindings).length !== Object.keys(GR.bindings).length : GR[RR] !== JR[RR])));
            return yR.length > 0 && console.warn(`Stored controller settings had invalid values, replaced with defaults: ${yR.join(", ")}`), GR
          })(RR);
        return null !== RR && void 0 !== RR && BR(JR), JR
      })(),
      pR = {
        ...lR,
        ...(() => {
          if ("undefined" === typeof window) return {};
          const RR = {},
            JR = new URLSearchParams(window.location.search);
          for (const {
              param: GR,
              key: yR
            }
            of XR) {
            const tR = CR[yR](JR.get(GR));
            void 0 !== tR && (RR[yR] = tR)
          }
          return RR
        })()
      };
    const gR = () => pR,
      bR = () => {
        var RR, JR;
        const GR = gR().promptFamily;
        return "auto" !== GR ? GR : null !== (RR = null === (JR = VR.e.getActivePad()) || void 0 === JR ? void 0 : JR.family) && void 0 !== RR ? RR : "xbox"
      },
      vR = RR => {
        const JR = pR;
        lR = {
          ...lR,
          ...RR
        }, BR(lR), pR = {
          ...pR,
          ...RR
        }, (RR => {
          tR.n.JK(KR.h, pR), aR.some((JR => RR[JR] !== pR[JR])) && tR.n.JK(KR.d, pR)
        })(JR)
      },
      OR = () => {
        const [RR, JR] = (0, yR.useState)(pR);
        return (0, uR.f)(KR.h, JR), RR
      }
  },
  9975: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => tR
    });
    const yR = new Set(["Alt", "AltGraph", "Meta", "OS", "AudioVolumeUp", "AudioVolumeDown", "AudioVolumeMute", "MediaPlayPause", "MediaPlay", "MediaPause", "MediaStop", "MediaTrackNext", "MediaTrackPrevious", "BrowserBack", "BrowserForward", "BrowserHome", "GoBack", "LaunchApplication1", "LaunchApplication2", "LaunchMail", "PrintScreen", "Unidentified"]),
      tR = RR => yR.has(RR)
  },
  9481: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => aR.c,
      e: () => WR
    });
    var yR = GR(9483),
      tR = GR(9491);
    const uR = .1,
      ZR = .3;
    class qR {
      constructor() {
        this.deadzone = 0, this.anchor = null, this.steadyMs = 0, this.lastMs = null, this.returning = !0, this.anchorLearned = !1
      }
      observe(RR, JR) {
        const GR = null === this.lastMs ? 0 : Math.min(Math.max(0, JR - this.lastMs), 100);
        this.lastMs = JR;
        const yR = Math.hypot(RR.x, RR.y);
        if (yR >= ZR) return this.anchor = null, void(this.returning = !0);
        yR >= uR || (this.returning = !1);
        const tR = this.anchor;
        if (!tR || Math.hypot(RR.x - tR.x, RR.y - tR.y) > .03) return this.anchorLearned && (this.returning = !1), this.anchor = {
          x: RR.x,
          y: RR.y
        }, this.steadyMs = 0, void(this.anchorLearned = !1);
        if (this.steadyMs += GR, this.steadyMs < 1e3) return;
        const qR = Math.max(yR, Math.hypot(tR.x, tR.y));
        qR < uR ? this.deadzone = 0 : this.returning && (this.deadzone = qR + .05, this.anchorLearned = !0)
      }
      getDeadzone() {
        return this.deadzone
      }
      apply(RR) {
        return Math.hypot(RR.x, RR.y) < this.deadzone ? {
          x: 0,
          y: 0
        } : RR
      }
    }
    const iR = (RR, JR) => {
        var GR, yR;
        return null !== (GR = RR && (null === (yR = Object.getOwnPropertyDescriptor(RR, JR)) || void 0 === yR ? void 0 : yR.get)) && void 0 !== GR ? GR : null
      },
      fR = RR => {
        const JR = RR.vendorName;
        return "string" === typeof JR ? JR : void 0
      },
      VR = ((RR, JR) => {
        const GR = iR(RR, "index"),
          yR = iR(RR, "id"),
          tR = iR(RR, "connected"),
          uR = iR(RR, "mapping"),
          ZR = iR(RR, "buttons"),
          qR = iR(RR, "axes"),
          VR = iR(JR, "pressed"),
          KR = iR(JR, "value");
        return GR && yR && tR && uR && ZR && qR && VR && KR ? RR => {
          const JR = ZR.call(RR),
            iR = qR.call(RR),
            wR = {
              index: Number(GR.call(RR)),
              id: String(yR.call(RR)),
              connected: !0 === tR.call(RR),
              mapping: String(uR.call(RR)),
              buttons: [],
              axes: [],
              vendorName: fR(RR)
            };
          for (let GR = 0; GR < JR.length; GR++) wR.buttons.push({
            pressed: !0 === VR.call(JR[GR]),
            value: Number(KR.call(JR[GR]))
          });
          for (let GR = 0; GR < iR.length; GR++) wR.axes.push(Number(iR[GR]));
          return wR
        } : null
      })("undefined" === typeof Gamepad ? null : Gamepad.prototype, "undefined" === typeof GamepadButton ? null : GamepadButton.prototype),
      KR = "undefined" === typeof Navigator ? null : Navigator.prototype.getGamepads;
    var wR = GR(1550),
      rR = GR(1552);
    const eR = RR => ({
      pressed: RR,
      value: RR ? 1 : 0
    });
    var aR = GR(2218);
    const LR = ZR,
      nR = RR => {
        const JR = new Array(yR.Z).fill(0);
        for (let GR = 0; GR < yR.Z && GR < RR.buttons.length; GR++) {
          const tR = RR.buttons[GR];
          JR[GR] = tR.pressed && !(0, yR.M)(GR) ? Math.max(tR.value, yR.z) : tR.value
        }
        return JR
      },
      UR = (RR, JR) => {
        var GR, yR;
        return {
          x: null !== (GR = RR.axes[JR]) && void 0 !== GR ? GR : 0,
          y: null !== (yR = RR.axes[JR + 1]) && void 0 !== yR ? yR : 0
        }
      };
    const WR = new class {
      constructor(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : VR;
        this.readGamepads = RR, this.requireTrustedPads = JR, this.nativeReader = GR, this.running = !1, this.listening = !1, this.rafId = 0, this.lastTimestampMs = 0, this.activeInfo = null, this.slots = [], this.trustedIndices = new Set, this.warnedNonStandardIds = new Set, this.loggedReadError = !1, this.frameListeners = new Set, this.connectionListeners = new Set, this.anyPadConnected = !1, this.connectedListeners = new Set, this.handleConnectionEvent = RR => {
          RR.isTrusted && this.trustedIndices.add(RR.gamepad.index), this.wake()
        }, this.handleDisconnectionEvent = RR => {
          this.trustedIndices.delete(RR.gamepad.index)
        }, this.gK = RR => {
          if (this.rafId = 0, !this.running) return;
          const JR = 0 === this.lastTimestampMs ? 16 : Math.min(100, RR - this.lastTimestampMs);
          this.lastTimestampMs = RR;
          try {
            this.poll(RR, JR)
          } finally {
            this.anyPadConnected && (this.rafId = requestAnimationFrame(this.gK))
          }
        }
      }
      start() {
        this.running || "undefined" === typeof navigator || "function" !== typeof navigator.getGamepads || (this.running = !0, this.listenForConnections(), this.wake())
      }
      stop() {
        this.running = !1, cancelAnimationFrame(this.rafId), this.rafId = 0, this.listening = !1, window.removeEventListener("gamepadconnected", this.handleConnectionEvent), window.removeEventListener("gamepaddisconnected", this.handleDisconnectionEvent)
      }
      listenForConnections() {
        this.listening || "undefined" === typeof window || (this.listening = !0, window.addEventListener("gamepadconnected", this.handleConnectionEvent), window.addEventListener("gamepaddisconnected", this.handleDisconnectionEvent))
      }
      onFrame(RR) {
        return this.frameListeners.add(RR), () => {
          this.frameListeners.delete(RR)
        }
      }
      onActivePadChanged(RR) {
        return this.connectionListeners.add(RR), () => {
          this.connectionListeners.delete(RR)
        }
      }
      getActivePad() {
        return this.activeInfo
      }
      hasConnectedPad() {
        return this.anyPadConnected
      }
      onConnectedPadsChanged(RR) {
        return this.connectedListeners.add(RR), () => {
          this.connectedListeners.delete(RR)
        }
      }
      getActiveGamepad() {
        if (!this.activeInfo) return null;
        const RR = this.readPads()[this.activeInfo.index],
          JR = RR ? this.readPad(RR) : null;
        return JR && JR.id === this.activeInfo.id ? RR : null
      }
      poll(RR, JR) {
        var GR, tR;
        const uR = this.readPads();
        let ZR = null,
          iR = !1;
        const fR = [],
          VR = Math.max(uR.length, this.slots.length);
        for (let WR = 0; WR < VR; WR++) {
          var KR;
          const JR = WR < uR.length ? uR[WR] : null,
            GR = JR ? this.readPad(JR) : null;
          if (!GR || !GR.connected || !this.isUsable(GR)) {
            this.slots[WR] = null;
            continue
          }
          let tR = this.slots[WR];
          tR && tR.id === GR.id || (tR = {
            id: GR.id,
            Qq: [],
            leftSettled: !1,
            rightSettled: !1,
            leftRest: new qR,
            rightRest: new qR
          }, this.slots[WR] = tR);
          const VR = UR(GR, 0),
            wR = UR(GR, 2);
          !tR.leftSettled && Math.hypot(VR.x, VR.y) < LR && (tR.leftSettled = !0), !tR.rightSettled && Math.hypot(wR.x, wR.y) < LR && (tR.rightSettled = !0), tR.leftRest.observe(VR, RR), tR.rightRest.observe(wR, RR);
          const rR = nR(GR),
            eR = (0, yR.p)(rR, tR.Qq),
            aR = tR.Qq,
            AR = eR.map(((RR, JR) => RR && !aR[JR]));
          tR.Qq = eR;
          const CR = {
            pad: GR,
            slot: tR,
            values: rR
          };
          WR === (null === (KR = this.activeInfo) || void 0 === KR ? void 0 : KR.index) && GR.id === this.activeInfo.id ? (ZR = CR, iR = AR.includes(!0)) : AR.includes(!0) && fR.push({
            polled: CR,
            rose: AR
          })
        }
        const wR = this.slots.some((RR => null !== RR));
        if (wR !== this.anyPadConnected) {
          this.anyPadConnected = wR;
          for (const RR of this.connectedListeners) RR()
        }
        const rR = null !== (GR = null === (tR = ZR) || void 0 === tR ? void 0 : tR.slot.Qq) && void 0 !== GR ? GR : [],
          eR = iR ? void 0 : fR.find((RR => {
            let {
              rose: JR
            } = RR;
            return JR.some(((RR, JR) => RR && !rR[JR]))
          }));
        if (eR ? (ZR = eR.polled, this.setActive(eR.polled.pad)) : this.activeInfo && !ZR && this.setActive(null), !ZR || !this.activeInfo) return;
        const aR = ((RR, JR) => {
          let {
            pad: GR,
            slot: tR,
            values: uR
          } = RR;
          const ZR = (0, yR.v)(JR);
          return ZR.values = uR, tR.leftSettled && (ZR.leftStick = tR.leftRest.apply(UR(GR, 0))), tR.rightSettled && (ZR.rightStick = tR.rightRest.apply(UR(GR, 2))), ZR
        })(ZR, RR);
        for (const yR of this.frameListeners) yR(aR, JR, this.activeInfo)
      }
      readPad(RR) {
        const JR = this.readSnapshot(RR);
        return JR && (0, rR.i)(JR) ? (RR => {
          const JR = JR => {
              var GR;
              return null !== (GR = RR.buttons[JR]) && void 0 !== GR ? GR : eR(!1)
            },
            GR = JR => {
              var GR;
              return null !== (GR = RR.axes[JR]) && void 0 !== GR ? GR : 0
            },
            yR = RR.axes.length > 9,
            tR = yR ? (RR => {
              const JR = 0 !== RR;
              return {
                up: JR && (RR >= -1 && RR < -.7 || RR >= .95 && RR <= 1),
                right: JR && RR >= -.75 && RR < -.1,
                down: JR && RR >= -.2 && RR < .45,
                left: JR && RR >= .4 && RR <= 1
              }
            })(GR(9)) : {
              up: GR(5) < -.5,
              down: GR(5) > .5,
              left: GR(4) < -.5,
              right: GR(4) > .5
            };
          return {
            ...RR,
            mapping: "standard",
            buttons: [JR(1), JR(2), JR(0), JR(3), JR(4), JR(5), JR(6), JR(7), JR(8), JR(9), JR(10), JR(11), eR(tR.up), eR(tR.down), eR(tR.left), eR(tR.right), JR(12)],
            axes: [GR(0), GR(1), GR(2), GR(yR ? 5 : 3)]
          }
        })(JR) : JR
      }
      readSnapshot(RR) {
        if (this.nativeReader) try {
          return this.nativeReader(RR)
        } catch {
          if (this.requireTrustedPads) return null
        }
        return this.requireTrustedPads ? null : (RR => {
          const JR = RR;
          return {
            index: JR.index,
            id: JR.id,
            connected: JR.connected,
            mapping: JR.mapping,
            buttons: Array.from(JR.buttons, (RR => ({
              pressed: RR.pressed,
              value: RR.value
            }))),
            axes: Array.from(JR.axes),
            vendorName: fR(RR)
          }
        })(RR)
      }
      isUsable(RR) {
        return !(0, wR.f)(RR.id) && ("standard" !== RR.mapping ? (this.warnedNonStandardIds.has(RR.id) || (this.warnedNonStandardIds.add(RR.id), console.warn(`Controller "${RR.id}" has no standard button mapping, so it is ignored.`)), !1) : !this.requireTrustedPads || this.trustedIndices.has(RR.index))
      }
      setActive(RR) {
        this.activeInfo = RR ? {
          index: RR.index,
          id: RR.id,
          family: (0, tR.e)(RR.id, RR.vendorName)
        } : null;
        for (const JR of this.connectionListeners) JR(this.activeInfo)
      }
      readPads() {
        try {
          return this.readGamepads()
        } catch (RR) {
          return this.loggedReadError || (this.loggedReadError = !0, console.warn("Reading gamepads failed; controller input is unavailable.", RR)), []
        }
      }
      wake() {
        this.running && 0 === this.rafId && (this.lastTimestampMs = 0, this.rafId = requestAnimationFrame(this.gK))
      }
    }((() => KR ? KR.call(navigator) : []), !0);
    WR.listenForConnections()
  },
  10080: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => uR,
      d: () => ZR,
      h: () => qR,
      k: () => tR
    });
    var yR = GR(10085);
    const tR = RR => {
        const JR = [];
        RR.holdingGun && JR.push({
          kind: "reload"
        }), RR.touchscreenActionButton && JR.push({
          kind: "touchButton",
          label: RR.touchscreenActionButton
        });
        for (const uR of null !== (GR = null === (tR = RR.customButtons) || void 0 === tR ? void 0 : tR.filter(yR.f)) && void 0 !== GR ? GR : []) {
          var GR, tR;
          JR.push({
            kind: "customButton",
            id: uR.id,
            icon: uR.icon,
            description: uR.description
          })
        }
        return JR
      },
      uR = RR => RR.length >= 2,
      ZR = RR => "specialAction" !== RR.kind,
      qR = (RR, JR) => {
        if (null === RR || null === JR) return RR === JR;
        if (RR.kind !== JR.kind) return !1;
        switch (RR.kind) {
          case "reload":
            return !0;
          case "specialAction":
            return RR.action === JR.action;
          case "customButton":
            return RR.id === JR.id && RR.icon === JR.icon;
          case "touchButton":
            return RR.label === JR.label
        }
      }
  },
  9987: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => yR
    });
    const yR = {
      short: {
        wheelMs: 250,
        dropStackMs: 800
      },
      medium: {
        wheelMs: 500,
        dropStackMs: 1e3
      },
      long: {
        wheelMs: 800,
        dropStackMs: 1300
      }
    }
  },
  10072: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => VR,
      d: () => rR,
      h: () => KR,
      l: () => eR
    });
    var yR = GR(66),
      tR = GR(32),
      uR = GR(1581),
      ZR = GR(10080),
      qR = GR(10094);
    let iR = null;
    const fR = () => iR,
      VR = RR => {
        (0, ZR.h)(iR, RR) || (iR = RR, tR.n.JK(qR.f, iR))
      },
      KR = () => {
        const [RR, JR] = (0, yR.useState)(fR);
        return (0, uR.f)(qR.f, JR), RR
      };
    let wR = !1;
    const rR = RR => {
        RR !== wR && (wR = RR, tR.n.JK(qR.j, RR))
      },
      eR = () => {
        const [RR, JR] = (0, yR.useState)(wR);
        return (0, uR.f)(qR.j, JR), RR
      }
  },
  10106: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => ZR,
      e: () => qR
    });
    var yR = GR(32),
      tR = GR(10094);
    let uR = !1;
    const ZR = () => uR,
      qR = RR => {
        RR !== uR && (uR = RR, yR.n.JK(tR.l, uR))
      }
  },
  10099: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => qR,
      c: () => iR
    });
    var yR = GR(32),
      tR = GR(10094);
    let uR = null,
      ZR = 0;
    const qR = () => uR,
      iR = RR => {
        null === RR && null === uR || (uR = null === RR ? null : {
          id: ++ZR,
          holdMs: RR
        }, yR.n.JK(tR.p, uR))
      }
  },
  10094: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => uR,
      f: () => yR,
      j: () => tR,
      l: () => qR,
      p: () => iR,
      q: () => fR,
      t: () => ZR
    });
    const yR = "controllerActionHintChanged",
      tR = "controllerActionWheelHintChanged",
      uR = "controllerOpenChat",
      ZR = "controllerSneakToggledChanged",
      qR = "controllerAttackLatchedChanged",
      iR = "controllerDropStackHoldChanged",
      fR = "controllerPickBlockHintChanged"
  },
  10114: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => ZR,
      g: () => qR
    });
    var yR = GR(32),
      tR = GR(10094);
    let uR = !1;
    const ZR = () => uR,
      qR = RR => {
        RR !== uR && (uR = RR, yR.n.JK(tR.q, uR))
      }
  },
  10181: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => ZR,
      f: () => qR
    });
    var yR = GR(32),
      tR = GR(10094);
    let uR = !1;
    const ZR = () => uR,
      qR = RR => {
        RR !== uR && (uR = RR, yR.n.JK(tR.t, uR))
      }
  },
  10037: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => yR
    });
    class yR {
      constructor() {
        this.downAtMs = null
      }
      update(RR, JR, GR, yR) {
        if (RR) return this.downAtMs = GR, null;
        if (null === this.downAtMs) return null;
        const tR = GR - this.downAtMs >= yR;
        return JR ? tR ? (this.downAtMs = null, "hold") : null : (this.downAtMs = null, tR ? "hold" : "tap")
      }
      release() {
        this.downAtMs = null
      }
    }
  },
  9536: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => KR,
      f: () => wR,
      g: () => qR,
      k: () => WR,
      n: () => UR
    });
    var yR = GR(46),
      tR = GR(9509),
      uR = GR(9483);
    const ZR = (() => {
        try {
          return GR(9543)
        } catch {
          return null
        }
      })(),
      qR = [...uR.ab, "LeftStick", "RightStick"],
      iR = new Map,
      fR = {
        xbox: "xbox",
        playstation: "playstation",
        nintendo: "nintendo",
        steamdeck: "steamdeck",
        generic: "xbox"
      },
      VR = (new Set(Object.values(fR)), {
        xbox: {
          LB: 1.5,
          RB: 1.5
        },
        steamdeck: {
          Home: 2,
          Menu: 2,
          View: 2
        }
      }),
      KR = (RR, JR) => {
        var GR, yR;
        return null !== (GR = null === (yR = VR[fR[RR]]) || void 0 === yR ? void 0 : yR[JR]) && void 0 !== GR ? GR : 1
      },
      wR = (RR, JR) => {
        const GR = `./${fR[RR]}/${JR}.svg`;
        let yR = iR.get(GR);
        return void 0 === yR && (yR = ZR ? ZR(GR) : "", iR.set(GR, yR)), yR
      },
      rR = new Set,
      eR = [],
      aR = RR => {
        if (!rR.has(RR)) {
          rR.add(RR);
          for (const JR of qR) {
            const GR = wR(RR, JR);
            if (GR) {
              const RR = new Image;
              RR.crossOrigin = "anonymous", RR.src = GR, eR.push(RR)
            }
          }
        }
      },
      LR = "controllerGlyphFamily";
    let nR = null;
    const UR = RR => {
        RR !== nR && (nR = RR, yR.i.setItem(LR, RR), aR(RR))
      },
      WR = () => {
        const RR = yR.i.getItem(LR);
        (0, tR.e)(RR) && RR !== nR && (nR = RR, aR(RR))
      }
  },
  10203: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => PR,
      i: () => IR
    });
    var yR = GR(66),
      tR = GR(32),
      uR = GR(1581),
      ZR = GR(9495),
      qR = GR(9481),
      iR = GR(9523),
      fR = GR(9504);
    const VR = {
        x: 0,
        y: 0,
        z: 0
      },
      KR = Math.PI / 180,
      wR = RR => Math.hypot(RR.x, RR.y, RR.z),
      rR = (RR, JR) => ({
        x: RR.x * JR,
        y: RR.y * JR,
        z: RR.z * JR
      }),
      eR = (RR, JR) => ({
        x: RR.x + JR.x,
        y: RR.y + JR.y,
        z: RR.z + JR.z
      }),
      aR = (RR, JR) => ({
        x: RR.x - JR.x,
        y: RR.y - JR.y,
        z: RR.z - JR.z
      }),
      LR = RR => {
        const JR = wR(RR);
        return 0 === JR ? VR : rR(RR, 1 / JR)
      },
      nR = RR => ({
        min: {
          ...RR
        },
        max: {
          ...RR
        }
      }),
      UR = (RR, JR) => ({
        min: {
          x: Math.min(RR.min.x, JR.x),
          y: Math.min(RR.min.y, JR.y),
          z: Math.min(RR.min.z, JR.z)
        },
        max: {
          x: Math.max(RR.max.x, JR.x),
          y: Math.max(RR.max.y, JR.y),
          z: Math.max(RR.max.z, JR.z)
        }
      }),
      WR = (RR, JR) => RR.max.x - RR.min.x <= JR && RR.max.y - RR.min.y <= JR && RR.max.z - RR.min.z <= JR;
    class AR {
      constructor() {
        this.bias = VR, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = VR, this.windowSec = 0
      }
      update(RR) {
        const JR = this.gyroRange ? UR(this.gyroRange, RR.gyro) : nR(RR.gyro),
          GR = RR.accel ? this.accelRange ? UR(this.accelRange, RR.accel) : nR(RR.accel) : null;
        if (!WR(JR, 1) || GR && !WR(GR, .01)) return void this.restartWindow(RR);
        if (this.gyroRange = JR, this.accelRange = GR, this.sum = eR(this.sum, rR(RR.gyro, RR.dtSec)), this.windowSec += RR.dtSec, this.windowSec < 1) return;
        const yR = rR(this.sum, 1 / this.windowSec);
        if (wR(yR) > 5) return;
        const tR = aR(yR, this.bias);
        let uR = 0;
        !this.calibrated || this.windowSec >= 3 ? uR = 1 : wR(tR) <= 1 && (uR = Math.min(1, RR.dtSec / 1)), this.bias = eR(this.bias, rR(tR, uR)), this.calibrated = this.calibrated || uR > 0
      }
      correct(RR) {
        return aR(RR, this.bias)
      }
      getBias() {
        return this.bias
      }
      isCalibrated() {
        return this.calibrated
      }
      reset() {
        this.bias = VR, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = VR, this.windowSec = 0
      }
      restartWindow(RR) {
        this.gyroRange = nR(RR.gyro), this.accelRange = RR.accel ? nR(RR.accel) : null, this.sum = VR, this.windowSec = 0
      }
    }
    class CR {
      constructor() {
        this.down = null
      }
      update(RR, JR, GR) {
        const yR = LR(rR(JR, -1));
        if (!this.down) return this.down = yR, yR;
        const tR = rR(RR, KR * GR),
          uR = this.down,
          ZR = {
            x: uR.x - (tR.y * uR.z - tR.z * uR.y),
            y: uR.y - (tR.z * uR.x - tR.x * uR.z),
            z: uR.z - (tR.x * uR.y - tR.y * uR.x)
          },
          qR = 0 === wR(yR) ? 0 : Math.min(1, GR / .25);
        var iR, fR;
        return this.down = LR((fR = qR, eR(iR = ZR, rR(aR(yR, iR), fR)))), this.down
      }
      reset() {
        this.down = null
      }
    }
    class XR {
      constructor() {
        this.entries = [], this.windowSec = 0
      }
      apply(RR, JR, GR) {
        const yR = Math.hypot(RR, JR),
          tR = Math.max(0, Math.min(1, (yR - 2) / 2)),
          uR = {
            yaw: RR * (1 - tR),
            pitch: JR * (1 - tR),
            dtSec: GR
          };
        for (this.entries.push(uR), this.windowSec += GR; this.entries.length > 1 && this.windowSec - this.entries[0].dtSec >= .125;) this.windowSec -= this.entries[0].dtSec, this.entries.shift();
        let ZR = 0,
          qR = 0;
        for (const fR of this.entries) ZR += fR.yaw * fR.dtSec, qR += fR.pitch * fR.dtSec;
        const iR = this.windowSec > 0 ? {
          yaw: ZR / this.windowSec,
          pitch: qR / this.windowSec
        } : {
          yaw: uR.yaw,
          pitch: uR.pitch
        };
        return {
          yaw: RR * tR + iR.yaw,
          pitch: JR * tR + iR.pitch
        }
      }
      reset() {
        this.entries = [], this.windowSec = 0
      }
    }
    class MR {
      constructor() {
        this.calibrator = new AR, this.gravity = new CR, this.smoother = new XR
      }
      process(RR, JR, GR) {
        const yR = Math.max(0, Math.min(.05, JR));
        this.calibrator.update({
          ...RR,
          dtSec: yR
        });
        const tR = this.calibrator.correct(RR.gyro);
        let uR = tR.y;
        "player" === GR && RR.accel && (uR = ((RR, JR) => {
          const GR = RR.y * JR.y + RR.z * JR.z;
          return -Math.sign(GR) * Math.min(1.41 * Math.abs(GR), Math.hypot(RR.y, RR.z))
        })(tR, this.gravity.update(tR, RR.accel, yR)));
        const ZR = this.smoother.apply(uR, tR.x, yR),
          qR = ((RR, JR) => {
            const GR = Math.hypot(RR, JR);
            if (GR >= 1) return {
              yaw: RR,
              pitch: JR
            };
            const yR = GR / 1;
            return {
              yaw: RR * yR,
              pitch: JR * yR
            }
          })(ZR.yaw, ZR.pitch);
        return {
          yawDeg: qR.yaw * yR,
          pitchDeg: qR.pitch * yR
        }
      }
      getCalibration() {
        return {
          calibrated: this.calibrator.isCalibrated(),
          bias: this.calibrator.getBias()
        }
      }
      reset() {
        this.calibrator.reset(), this.gravity.reset(), this.smoother.reset()
      }
    }
    const BR = (RR, JR) => {
      var GR, yR, tR;
      const uR = JR * KR,
        ZR = null !== (GR = RR.beta) && void 0 !== GR ? GR : 0,
        qR = null !== (yR = RR.gamma) && void 0 !== yR ? yR : 0;
      return {
        x: ZR * Math.cos(uR) - qR * Math.sin(uR),
        y: ZR * Math.sin(uR) + qR * Math.cos(uR),
        z: null !== (tR = RR.alpha) && void 0 !== tR ? tR : 0
      }
    };
    var lR = GR(10210);
    class pR {
      constructor(RR, JR, GR) {
        this.hid = RR, this.sink = JR, this.onControllersChanged = GR, this.controllers = new Map, this.running = !1, this.openedCount = 0, this.opening = new Set, this.disconnectedWhileOpening = new Set, this.switchPacketCounter = 0, this.onConnect = RR => {
          this.openController(RR.device).catch((RR => {
            console.warn("Could not open motion controller", RR)
          }))
        }, this.onDisconnect = RR => {
          this.opening.has(RR.device) && this.disconnectedWhileOpening.add(RR.device);
          const JR = this.controllers.get(RR.device);
          JR && (this.forget(JR), this.onControllersChanged())
        }
      }
      async start() {
        if (this.running) return;
        this.running = !0, this.hid.addEventListener("connect", this.onConnect), this.hid.addEventListener("disconnect", this.onDisconnect);
        const RR = await this.hid.getDevices();
        for (const JR of RR) await this.openController(JR).catch((RR => {
          console.warn("Could not open motion controller", RR)
        }))
      }
      stop() {
        this.running = !1, this.hid.removeEventListener("connect", this.onConnect), this.hid.removeEventListener("disconnect", this.onDisconnect);
        for (const RR of [...this.controllers.values()]) this.forget(RR);
        this.onControllersChanged()
      }
      async request() {
        const RR = await this.hid.requestDevice({
          filters: lR.i
        });
        let JR = 0;
        for (const GR of RR) await this.openController(GR).catch((RR => {
          console.warn("Could not open motion controller", RR), JR++
        }));
        return JR
      }
      async hasGrantedController() {
        return (await this.hid.getDevices()).some((RR => null !== (0, lR.g)(RR.vendorId, RR.productId)))
      }
      getConnectedKinds() {
        return [...this.controllers.values()].map((RR => RR.kind))
      }
      forget(RR) {
        RR.device.removeEventListener("inputreport", RR.onReport), this.controllers.get(RR.device) === RR && this.controllers.delete(RR.device)
      }
      async openController(RR) {
        const JR = (0, lR.g)(RR.vendorId, RR.productId);
        if (!JR || !this.running || this.controllers.has(RR) || this.opening.has(RR)) return;
        this.opening.add(RR);
        let GR = !1;
        try {
          RR.opened || await RR.open()
        } finally {
          this.opening.delete(RR), GR = this.disconnectedWhileOpening.delete(RR)
        }
        if (GR) return void RR.close().catch((RR => {
          console.debug("Could not close an unplugged motion controller", RR)
        }));
        if (!this.running) return;
        const yR = {
          device: RR,
          kind: JR,
          lastClock: null,
          lastEventMs: null,
          lastReadingMs: -1 / 0,
          openedOrder: this.openedCount++,
          onReport: RR => {
            this.onReport(yR, RR)
          }
        };
        this.controllers.set(RR, yR), RR.addEventListener("inputreport", yR.onReport), this.onControllersChanged();
        try {
          await this.enableMotion(yR)
        } catch (tR) {
          console.warn(`Could not turn on motion for ${JR}`, tR), this.controllers.get(RR) === yR && (this.forget(yR), this.onControllersChanged())
        }
      }
      async enableMotion(RR) {
        let {
          device: JR,
          kind: GR
        } = RR;
        if ((0, lR.h)(GR))
          for (const yR of lR.x[GR]) await JR.receiveFeatureReport(yR).catch((RR => {
            console.debug(`Motion controller feature report ${yR} unavailable`, RR)
          }));
        else
          for (let yR = 0; yR < 2; yR++)
            for (const {
                subcommand: RR,
                args: GR
              }
              of lR.y) await JR.sendReport(lR.z, (0, lR.c)(this.switchPacketCounter++, RR, GR)), await new Promise((RR => {
              setTimeout(RR, 60)
            }))
      }
      onReport(RR, JR) {
        const GR = (0, lR.r)(RR.kind, JR.reportId, JR.data, RR.device.productId);
        if (!GR) return;
        const yR = null === RR.lastEventMs ? 0 : (JR.timeStamp - RR.lastEventMs) / 1e3;
        RR.lastEventMs = JR.timeStamp;
        let tR = GR.dtSec;
        if (null !== tR && yR > 0 && (tR = Math.max(.001, Math.min(.017, yR / GR.readings.length))), null === tR && null !== GR.sensorClock && (0, lR.h)(RR.kind)) {
          const JR = (0, lR.u)(RR.kind, RR.lastClock, GR.sensorClock);
          RR.lastClock = GR.sensorClock, tR = 0 === JR ? null : JR
        }
        if (RR.lastReadingMs = JR.timeStamp, this.isPreferred(RR, JR.timeStamp))
          for (const ZR of GR.readings) {
            var uR;
            this.sink(ZR, null !== (uR = tR) && void 0 !== uR ? uR : yR, `hid${RR.openedOrder}`)
          }
      }
      isPreferred(RR, JR) {
        const GR = RR => 1e6 * lR.n[RR.kind] + RR.openedOrder;
        for (const yR of this.controllers.values())
          if (yR !== RR && JR - yR.lastReadingMs < 500 && GR(yR) < GR(RR)) return !1;
        return !0
      }
    }
    var gR = GR(103);
    const bR = () => DeviceMotionEvent,
      vR = () => "undefined" !== typeof window && "undefined" !== typeof DeviceMotionEvent && window.isSecureContext && (0, gR.isMobile)(),
      OR = () => {
        var RR;
        const JR = null === (RR = window.screen.orientation) || void 0 === RR ? void 0 : RR.angle;
        return "number" === typeof JR ? JR : "number" === typeof window.orientation ? window.orientation : 0
      };
    class xR {
      constructor(RR, JR) {
        this.sink = RR, this.onStateChanged = JR, this.state = "off", this.lastEventMs = null, this.noSensorTimer = null, this.wanted = !1, this.permissionRequest = null, this.granted = !1, this.onGesture = () => {
          this.requestPermission().catch((RR => {
            console.warn("Could not enable the motion sensor", RR)
          }))
        }, this.onMotion = RR => {
          const JR = RR.rotationRate;
          if (!JR || null === JR.alpha && null === JR.beta && null === JR.gamma) return;
          const GR = null === this.lastEventMs ? 0 : (RR.timeStamp - this.lastEventMs) / 1e3;
          this.lastEventMs = RR.timeStamp, this.clearNoSensorTimer(), this.setState("on"), this.sink({
            gyro: BR(JR, OR()),
            accel: null
          }, GR, "phone")
        }
      }
      getState() {
        return this.state
      }
      start() {
        if (this.wanted = !0, "off" === this.state) return "function" !== typeof bR().requestPermission || this.granted ? void this.listen() : (this.setState("needsPermission"), void this.armGestureRequest())
      }
      requestPermission() {
        return this.permissionRequest || (this.permissionRequest = this.askPermission().finally((() => {
          this.permissionRequest = null
        }))), this.permissionRequest
      }
      async askPermission() {
        const RR = bR().requestPermission;
        if (!this.wanted) return;
        if ("function" !== typeof RR) return void this.listen();
        let JR;
        this.disarmGestureRequest();
        try {
          JR = await RR.call(DeviceMotionEvent)
        } catch (GR) {
          throw this.wanted && "needsPermission" === this.state && this.armGestureRequest(), GR
        }
        this.wanted && ("granted" === JR ? (this.granted = !0, this.listen()) : this.setState("denied"))
      }
      stop() {
        this.wanted = !1, this.disarmGestureRequest(), window.removeEventListener("devicemotion", this.onMotion), this.clearNoSensorTimer(), this.lastEventMs = null, this.setState("off")
      }
      armGestureRequest() {
        window.addEventListener("touchend", this.onGesture), window.addEventListener("click", this.onGesture)
      }
      disarmGestureRequest() {
        window.removeEventListener("touchend", this.onGesture), window.removeEventListener("click", this.onGesture)
      }
      listen() {
        this.disarmGestureRequest(), window.removeEventListener("devicemotion", this.onMotion), window.addEventListener("devicemotion", this.onMotion), this.setState("waiting"), this.clearNoSensorTimer(), this.noSensorTimer = setTimeout((() => {
          this.noSensorTimer = null, "waiting" === this.state && this.setState("noSensor")
        }), 3e3)
      }
      clearNoSensorTimer() {
        null !== this.noSensorTimer && (clearTimeout(this.noSensorTimer), this.noSensorTimer = null)
      }
      setState(RR) {
        this.state !== RR && (this.state = RR, this.onStateChanged())
      }
    }
    const NR = "controllerGyroStatusChanged",
      DR = {
        bD: 0,
        PD: 0
      },
      HR = RR => {
        var JR, GR;
        return "undefined" === typeof document || (null === (JR = null === (GR = document.featurePolicy) || void 0 === GR ? void 0 : GR.allowsFeature(RR)) || void 0 === JR || JR)
      };
    class oR {
      constructor() {
        this.processor = new MR, this.hid = void 0, this.hidBlocked = void 0, this.phone = void 0, this.phoneBlocked = void 0, this.source = null, this.pendingYawDeg = 0, this.pendingPitchDeg = 0, this.lastDrainMs = -1 / 0, this.lastHidReadingMs = -1 / 0, this.running = !1, this.phoneRunning = !1, this.syncWithSettings = RR => {
          const JR = RR.gyroAiming && qR.e.hasConnectedPad();
          var GR, yR;
          JR !== this.phoneRunning && (this.phoneRunning = JR, JR ? null === (GR = this.phone) || void 0 === GR || GR.start() : null === (yR = this.phone) || void 0 === yR || yR.stop());
          if (RR.gyroAiming !== this.running) {
            var tR, uR;
            if (this.running = RR.gyroAiming, this.running) null === (tR = this.hid) || void 0 === tR || tR.start().catch((RR => {
              console.warn("Could not open motion controllers", RR)
            }));
            else null === (uR = this.hid) || void 0 === uR || uR.stop(), this.processor.reset(), this.source = null, this.discardPending();
            this.publishStatus()
          }
        }, this.publishStatus = () => {
          tR.n.JK(NR, this.getStatus())
        };
        const RR = (() => {
            var RR;
            return "undefined" !== typeof navigator && window.isSecureContext && null !== (RR = navigator.hid) && void 0 !== RR ? RR : null
          })(),
          JR = HR("hid");
        this.hidBlocked = null !== RR && !JR, this.hid = RR && JR ? new pR(RR, ((RR, JR, GR) => {
          this.lastHidReadingMs = performance.now(), this.feed(RR, JR, "player", GR)
        }), this.publishStatus) : null;
        const GR = HR("accelerometer") && HR("gyroscope");
        this.phoneBlocked = vR() && !GR, this.phone = vR() && GR ? new xR(((RR, JR, GR) => {
          performance.now() - this.lastHidReadingMs >= 500 && this.feed(RR, JR, "local", GR)
        }), this.publishStatus) : null, tR.n.subscribe(fR.i, this.syncWithSettings), qR.e.onConnectedPadsChanged((() => {
          this.syncWithSettings((0, fR.l)()), this.publishStatus()
        })), this.syncWithSettings((0, fR.l)())
      }
      isSupported() {
        return null !== this.hid || null !== this.phone
      }
      getStatus() {
        var RR, JR, GR, yR;
        return {
          hidSupported: null !== this.hid,
          hidBlocked: this.hidBlocked,
          phoneSupported: null !== this.phone,
          phoneBlocked: this.phoneBlocked,
          controllers: null !== (RR = null === (JR = this.hid) || void 0 === JR ? void 0 : JR.getConnectedKinds()) && void 0 !== RR ? RR : [],
          phoneMotion: null !== (GR = null === (yR = this.phone) || void 0 === yR ? void 0 : yR.getState()) && void 0 !== GR ? GR : "off",
          padConnected: qR.e.hasConnectedPad()
        }
      }
      async connectController() {
        return this.hid ? this.hid.request() : 0
      }
      async connectControllerIfNoneGranted() {
        this.hid && !await this.hid.hasGrantedController() && await this.hid.request()
      }
      async allowPhoneMotion() {
        var RR;
        await (null === (RR = this.phone) || void 0 === RR ? void 0 : RR.requestPermission())
      }
      drainLookDelta() {
        const RR = performance.now();
        RR - this.lastDrainMs > 500 && this.discardPending(), this.lastDrainMs = RR;
        const JR = {
          yawDeg: this.pendingYawDeg,
          pitchDeg: this.pendingPitchDeg
        };
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0;
        const GR = (0, fR.l)();
        return GR.gyroAiming && (RR => {
          let {
            activation: JR,
            isHeld: GR,
            useButton: yR,
            gyroButton: tR
          } = RR;
          return "always" === JR || GR("aiming" === JR ? yR : tR)
        })({
          activation: GR.gyroActivation,
          isHeld: RR => iR.e.isButtonHeld(RR),
          useButton: (0, ZR.h)("use"),
          gyroButton: GR.gyroButton
        }) ? ((RR, JR) => ({
          bD: -RR.yawDeg * JR * KR,
          PD: -RR.pitchDeg * JR * KR
        }))(JR, GR.gyroSensitivity) : DR
      }
      discardPending() {
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0
      }
      injectMotion(RR, JR) {
        this.feed(RR, JR, "local", "injected")
      }
      getCalibration() {
        return this.processor.getCalibration()
      }
      feed(RR, JR, GR, yR) {
        this.source !== yR && (this.processor.reset(), this.source = yR);
        const tR = this.processor.process(RR, JR, GR);
        this.pendingYawDeg += tR.yawDeg, this.pendingPitchDeg += tR.pitchDeg
      }
    }
    let cR = null;
    const PR = () => (cR || (cR = new oR), cR),
      IR = () => {
        const [RR, JR] = (0, yR.useState)((() => PR().getStatus()));
        return (0, uR.f)(NR, JR), (0, yR.useEffect)((() => {
          JR(PR().getStatus())
        }), []), RR
      }
  },
  10210: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => CR,
      g: () => iR,
      h: () => yR,
      i: () => qR,
      k: () => fR,
      n: () => VR,
      r: () => UR,
      u: () => LR,
      x: () => MR,
      y: () => XR,
      z: () => WR
    });
    const yR = RR => "dualShock4" === RR || "dualSense" === RR,
      tR = 1356,
      uR = 1406,
      ZR = [{
        vendorId: tR,
        productId: 1476,
        kind: "dualShock4"
      }, {
        vendorId: tR,
        productId: 2508,
        kind: "dualShock4"
      }, {
        vendorId: tR,
        productId: 2976,
        kind: "dualShock4"
      }, {
        vendorId: tR,
        productId: 3302,
        kind: "dualSense"
      }, {
        vendorId: tR,
        productId: 3570,
        kind: "dualSense"
      }, {
        vendorId: uR,
        productId: 8201,
        kind: "switchPro"
      }, {
        vendorId: uR,
        productId: 8198,
        kind: "joyConLeft"
      }, {
        vendorId: uR,
        productId: 8199,
        kind: "joyConRight"
      }],
      qR = ZR.map((RR => {
        let {
          vendorId: JR,
          productId: GR
        } = RR;
        return {
          vendorId: JR,
          productId: GR
        }
      })),
      iR = (RR, JR) => {
        var GR, yR;
        return null !== (GR = null === (yR = ZR.find((GR => GR.vendorId === RR && GR.productId === JR))) || void 0 === yR ? void 0 : yR.kind) && void 0 !== GR ? GR : null
      },
      fR = {
        dualShock4: "DualShock 4",
        dualSense: "DualSense",
        switchPro: "Switch Pro Controller",
        joyConLeft: "Joy-Con (L)",
        joyConRight: "Joy-Con (R)"
      },
      VR = {
        dualSense: 0,
        dualShock4: 0,
        switchPro: 0,
        joyConRight: 1,
        joyConLeft: 2
      },
      KR = 2e3 / 32767,
      wR = 1 / 8192,
      rR = 936 / 13371,
      eR = (RR, JR, GR) => ({
        x: RR.getInt16(JR, !0) * GR,
        y: RR.getInt16(JR + 2, !0) * GR,
        z: RR.getInt16(JR + 4, !0) * GR
      }),
      aR = RR => 0 === RR.x && 0 === RR.y && 0 === RR.z,
      LR = (RR, JR, GR) => null === JR ? null : "dualShock4" === RR ? 16 * (GR - JR & 65535) / 3 / 1e6 : (GR - JR >>> 0) / 3 / 1e6,
      nR = (RR, JR) => "joyConRight" === JR ? {
        x: RR.y,
        y: -RR.z,
        z: -RR.x
      } : {
        x: -RR.y,
        y: RR.z,
        z: -RR.x
      },
      UR = (RR, JR, GR, tR) => yR(RR) ? ((RR, JR, GR, yR) => {
        const tR = ((RR, JR, GR) => "dualShock4" === RR ? 1 === JR && GR >= 63 ? 0 : 17 === JR && GR >= 65 ? 2 : null : 1 === JR && GR >= 62 ? 0 : 49 === JR && GR >= 63 ? 1 : null)(RR, JR, GR.byteLength);
        if (null === tR) return null;
        if (2976 === yR && 1 === JR && 0 !== (4 & GR.getUint8(30))) return null;
        const uR = tR + ("dualShock4" === RR ? 12 : 15),
          ZR = eR(GR, uR, KR),
          qR = eR(GR, uR + 6, wR);
        return aR(ZR) && aR(qR) ? null : {
          readings: [{
            gyro: ZR,
            accel: qR
          }],
          dtSec: null,
          sensorClock: "dualShock4" === RR ? GR.getUint16(tR + 9, !0) : GR.getUint32(tR + 27, !0)
        }
      })(RR, JR, GR, tR) : ((RR, JR, GR) => {
        if (48 !== JR && 49 !== JR || GR.byteLength < 48) return null;
        const yR = [];
        for (let tR = 0; tR < 3; tR++) {
          const JR = eR(GR, 12 + 12 * tR, 244e-6),
            uR = eR(GR, 18 + 12 * tR, rR);
          if (aR(uR) && aR(JR)) return null;
          yR.push({
            gyro: nR(uR, RR),
            accel: nR(JR, RR)
          })
        }
        return {
          readings: yR,
          dtSec: .005,
          sensorClock: null
        }
      })(RR, JR, GR),
      WR = 1,
      AR = [0, 1, 64, 64, 0, 1, 64, 64],
      CR = (RR, JR, GR) => new Uint8Array([15 & RR, ...AR, JR, ...GR]),
      XR = [{
        subcommand: 64,
        args: [1]
      }, {
        subcommand: 3,
        args: [48]
      }],
      MR = {
        dualShock4: [2, 5],
        dualSense: [5]
      }
  },
  9528: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => oR,
      g: () => jR,
      i: () => XR,
      k: () => rR.j,
      l: () => IR,
      n: () => PR,
      o: () => MR,
      p: () => mR,
      r: () => rR.n,
      s: () => rR.s,
      v: () => dR,
      x: () => rR.v,
      y: () => xR
    });
    var yR = GR(66),
      tR = GR(25),
      uR = GR(32),
      ZR = GR(1581),
      qR = GR(1383),
      iR = GR(9504),
      fR = GR(9533),
      VR = GR(9491),
      KR = GR(9481),
      wR = GR(9536),
      rR = GR(1532),
      eR = GR(9483),
      aR = GR(9975),
      LR = GR(5151),
      nR = GR(116);
    class UR {
      constructor(RR) {
        this.deps = RR, this.pads = new Map
      }
      observe(RR, JR, GR) {
        if (!this.deps.touchOnly) return;
        const yR = this.pads.get(JR.id);
        "proven" !== yR && GR ? (this.pads.set(JR.id, "proven"), void 0 !== yR && this.deps.onReleased(JR, RR, RR.timestampMs - yR)) : void 0 === yR && (this.pads.set(JR.id, RR.timestampMs), this.deps.onHeld(JR, RR)), this.deps.setMayHide("proven" === this.pads.get(JR.id))
      }
    }
    const WR = RR => RR.values.flatMap(((RR, JR) => RR >= eR.U ? [String(JR)] : [])).join(",") || "none",
      AR = (RR, JR, yR, tR, uR) => {
        const ZR = (0, rR.f)(),
          qR = document.visibilityState,
          iR = document.hasFocus(),
          fR = "Qq" === RR ? "touch HUD pad held" : "touch HUD pad released";
        Promise.all([Promise.resolve().then((() => GR(4053))), Promise.resolve().then((() => GR(1406))), Promise.resolve().then((() => GR(134)))]).then((GR => {
          let [{
            logControllerHudHoldToGtag: VR
          }, {
            logClientLineFromEveryPage: KR
          }, {
            siteUsed: wR
          }] = GR;
          VR(RR, JR.family, null === uR ? void 0 : Math.round(uR / 1e3)), KR(fR, CR(JR, yR, tR, uR, ZR, qR, iR, wR))
        }), (() => {}))
      },
      CR = (RR, JR, GR, yR, tR, uR, ZR, qR) => {
        var iR;
        const fR = {
          pad_id: RR.id.slice(0, 120),
          pad_family: RR.family,
          pad_mapping: null !== (iR = null === GR || void 0 === GR ? void 0 : GR.mapping) && void 0 !== iR ? iR : "unread",
          pad_axes: GR ? String(GR.axes.length) : "unread",
          pad_buttons: GR ? String(GR.buttons.length) : "unread",
          pressed: WR(JR),
          ms_since_touch: null === tR ? "none" : String(Math.round(JR.timestampMs - tR)),
          visibility: uR,
          focused: String(ZR),
          site: qR
        };
        return null !== yR && (fR.held_ms = String(Math.round(yR))), fR
      };
    const XR = RR => !RR.repeat && !(0, aR.d)(RR.key),
      MR = "PadHidesCursor";
    let BR = !1;
    const lR = RR => {
        RR !== BR && (BR = RR, document.documentElement.classList.toggle(MR, RR))
      },
      pR = new class {
        constructor() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
        observe(RR) {
          let JR = !1,
            GR = !1;
          RR.values.forEach(((RR, yR) => {
            const tR = RR >= (this.buttonsDown[yR] ? eR.V : eR.U);
            tR && !this.buttonsDown[yR] && (JR = !0, GR = !0), this.buttonsDown[yR] = tR
          }));
          return [RR.leftStick, RR.rightStick].forEach(((RR, yR) => {
            const tR = this.stickAnchors[yR];
            Math.hypot(RR.x, RR.y) < (tR ? eR.V : .3) ? this.stickAnchors[yR] = null : (!tR || Math.hypot(RR.x - tR.x, RR.y - tR.y) >= .3) && (this.stickAnchors[yR] = {
              x: RR.x,
              y: RR.y
            }, JR = !0, GR ||= !tR)
          })), JR && (this.lastActivityMs = RR.timestampMs), this.onlyMovedOn = JR && !GR, JR
        }
        wasOnlyMoveOn() {
          return this.onlyMovedOn
        }
        isHolding(RR) {
          return !(RR - this.lastActivityMs >= 1e3) && (this.buttonsDown.some((RR => RR)) || this.stickAnchors.some((RR => null !== RR)))
        }
        isStickOffRest() {
          return this.stickAnchors.some((RR => null !== RR))
        }
        reset() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
      },
      gR = (bR = () => KR.e.getActiveGamepad(), new UR({
        touchOnly: "touchOnly" === (0, nR.c)(),
        setMayHide: rR.p,
        onHeld: (RR, JR) => {
          AR("Qq", RR, JR, bR(), null)
        },
        onReleased: (RR, JR, GR) => {
          AR("released", RR, JR, bR(), GR)
        }
      }));
    var bR;
    let vR = null,
      OR = !1;
    const xR = () => OR;
    let NR = null,
      DR = !1,
      HR = null;
    const oR = () => HR;
    let cR = !1;
    const PR = (RR, JR) => {
        if (!pR.observe(RR)) return !1;
        if (gR.observe(RR, JR, pR.isStickOffRest()), cR && pR.wasOnlyMoveOn() && !(0, rR.j)()) return !1;
        cR = !1, OR = !1;
        const GR = !(0, rR.j)();
        return GR && (vR = RR, HR = !BR && DR && NR ? {
          ...NR
        } : null), DR = !1, (0, rR.n)("gamepad"), lR(!0), (0, wR.n)((0, iR.p)()), GR
      },
      IR = RR => !(0, rR.j)() || RR === vR,
      mR = () => {
        pR.reset()
      },
      zR = () => {
        const RR = tR.d.get("activeInputDevice"),
          JR = "gamepad" === RR ? KR.e.getActivePad() : null;
        return {
          device: RR,
          inGame: (0, qR.u)(),
          padMovesMouse: null !== JR && (0, VR.f)(JR.id)
        }
      },
      SR = RR => {
        document.pointerLockElement ? NR = null : (NR ??= {
          x: 0,
          y: 0
        }, NR.x = RR.clientX, NR.y = RR.clientY)
      },
      jR = () => {
        const RR = new LR.b,
          JR = JR => {
            RR.reset(), cR = !1, (0, rR.n)(JR)
          },
          GR = RR => {
            if (RR.isTrusted) {
              if (RR instanceof KeyboardEvent) {
                if ((0, rR.l)(RR), !XR(RR)) return;
                OR = !0
              }
              if (RR instanceof PointerEvent && "touch" === RR.pointerType) return NR = null, void JR("touch");
              RR instanceof PointerEvent && (SR(RR), DR = !0), ("pointerdown" !== RR.type || (RR => {
                let {
                  device: JR,
                  inGame: GR,
                  padMovesMouse: yR
                } = RR;
                return !("gamepad" === JR && yR && GR)
              })(zR())) && JR("keyboardMouse")
            }
          },
          yR = RR => {
            RR.isTrusted && (NR = null, JR("touch"))
          },
          ZR = RR => {
            RR.isTrusted && "touch" !== RR.pointerType && !RR.relatedTarget && (NR = null)
          },
          qR = GR => {
            if (!GR.isTrusted || "touch" === GR.pointerType) return;
            SR(GR);
            const yR = GR.movementX || 0,
              uR = GR.movementY || 0;
            if (0 === yR && 0 === uR) return;
            if (DR = !0, lR(!1), "keyboardMouse" === tR.d.get("activeInputDevice")) return;
            const ZR = pR.isHolding(GR.timeStamp),
              qR = zR(),
              iR = (RR => {
                let {
                  device: JR,
                  inGame: GR,
                  padMovesMouse: yR,
                  padHolding: tR
                } = RR;
                return ("gamepad" !== JR || !yR) && "keyboardMouse" !== JR && (GR || !tR)
              })({
                ...qR,
                inGame: qR.inGame && (0, fR.i)(),
                padHolding: ZR
              });
            iR && RR.add(yR, uR, GR.timeStamp) && (JR("keyboardMouse"), cR = pR.isStickOffRest())
          },
          iR = RR => {
            lR("gamepad" === RR)
          },
          VR = {
            capture: !0,
            passive: !0
          };
        window.addEventListener("keydown", GR, VR), window.addEventListener("pointerdown", GR, VR), window.addEventListener("wheel", GR, VR), window.addEventListener("touchstart", yR, VR), window.addEventListener("pointermove", qR, VR), window.addEventListener("pointerout", ZR, VR);
        const KR = uR.n.subscribe("appManagerUpdated|activeInputDevice", iR);
        return iR(tR.d.get("activeInputDevice")), () => {
          window.removeEventListener("keydown", GR, VR), window.removeEventListener("pointerdown", GR, VR), window.removeEventListener("wheel", GR, VR), window.removeEventListener("touchstart", yR, VR), window.removeEventListener("pointermove", qR, VR), window.removeEventListener("pointerout", ZR, VR), NR = null, uR.n.unsubscribe(KR), lR(!1)
        }
      },
      dR = () => {
        const [RR, JR] = (0, yR.useState)(iR.p);
        return (0, ZR.f)(iR.e, (() => {
          JR((0, iR.p)())
        })), (0, ZR.f)(KR.d, (() => {
          JR((0, iR.p)())
        })), RR
      }
  },
  9509: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => yR,
      e: () => tR
    });
    const yR = ["xbox", "playstation", "nintendo", "steamdeck", "generic"],
      tR = RR => yR.includes(RR)
  },
  10026: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => ZR,
      d: () => uR,
      f: () => iR,
      j: () => qR
    });
    var yR = GR(1581),
      tR = GR(1547);
    const uR = "controllerInventoryCursorChanged",
      ZR = {
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
      qR = () => {
        var RR, JR;
        return (0, yR.h)(uR, null !== (RR = null === (JR = (0, tR.g)()) || void 0 === JR ? void 0 : JR.getInventoryCursorState()) && void 0 !== RR ? RR : ZR)
      },
      iR = () => {
        var RR, JR;
        return null !== (RR = null === (JR = (0, tR.g)()) || void 0 === JR ? void 0 : JR.isPadSteppingSlots()) && void 0 !== RR && RR
      }
  },
  10018: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => wR,
      e: () => qR,
      i: () => iR,
      l: () => ZR,
      o: () => uR,
      q: () => VR,
      u: () => KR
    });
    let yR = null;
    const tR = new Set,
      uR = RR => (yR = RR, () => {
        if (yR === RR) {
          yR = null;
          for (const RR of tR) RR()
        }
      }),
      ZR = RR => (tR.add(RR), () => {
        tR.delete(RR)
      }),
      qR = () => yR,
      iR = () => null !== yR;
    let fR = null;
    const VR = RR => {
        fR = RR
      },
      KR = () => {
        const RR = fR;
        return fR = null, RR
      },
      wR = (RR, JR) => {
        var GR, yR;
        return null !== (GR = null !== (yR = RR.find((RR => RR.element === JR))) && void 0 !== yR ? yR : RR.find((RR => RR.element.contains(JR)))) && void 0 !== GR ? GR : null
      }
  },
  10028: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => uR,
      f: () => ZR
    });
    var yR = GR(66);
    const tR = new WeakMap,
      uR = RR => {
        var JR, GR;
        return null !== (JR = null === (GR = tR.get(RR)) || void 0 === GR ? void 0 : GR.current) && void 0 !== JR ? JR : null
      },
      ZR = (RR, JR) => {
        const GR = (0, yR.useRef)(JR);
        GR.current = JR;
        const uR = (0, yR.useRef)(null);
        (0, yR.useEffect)((() => {
          const JR = RR.current,
            yR = uR.current;
          JR !== yR && (yR && tR.get(yR) === GR && tR.delete(yR), uR.current = JR, JR && tR.set(JR, GR))
        })), (0, yR.useEffect)((() => () => {
          const RR = uR.current;
          RR && tR.get(RR) === GR && tR.delete(RR), uR.current = null
        }), [])
      }
  },
  10178: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => qR,
      g: () => fR,
      k: () => KR,
      m: () => VR,
      q: () => iR,
      s: () => rR
    });
    var yR = GR(32),
      tR = GR(2218),
      uR = GR(1547),
      ZR = GR(1532);
    const qR = RR => {
        var JR, GR;
        return (0, ZR.j)() && null !== (JR = null === (GR = (0, uR.g)()) || void 0 === GR ? void 0 : GR.getGlyphForNoaAction(RR)) && void 0 !== JR ? JR : null
      },
      iR = "controllerGlyph:",
      fR = RR => {
        var JR, GR;
        return null !== (JR = null === (GR = (0, uR.g)()) || void 0 === GR ? void 0 : GR.getPadGlyphIconName(RR)) && void 0 !== JR ? JR : `${iR}xbox/${RR}`
      },
      VR = RR => RR.startsWith(iR),
      KR = RR => {
        var JR, GR;
        return VR(RR) && null !== (JR = null === (GR = (0, uR.g)()) || void 0 === GR ? void 0 : GR.getPadGlyphIconUrl(RR)) && void 0 !== JR ? JR : null
      },
      wR = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", ZR.d, tR.d, tR.c],
      rR = RR => {
        const JR = wR.map((JR => yR.n.subscribe(JR, RR)));
        return () => {
          for (const RR of JR) yR.n.unsubscribe(RR)
        }
      }
  },
  9533: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => fR,
      i: () => VR,
      m: () => iR,
      o: () => qR
    });
    var yR = GR(25),
      tR = GR(1800),
      uR = GR(1950);
    const ZR = new Map,
      qR = (RR, JR) => (ZR.has(RR) && console.warn(`Gameplay blocker "${RR}" registered twice; the newer one replaces it.`), ZR.set(RR, JR), () => {
        ZR.get(RR) === JR && ZR.delete(RR)
      }),
      iR = () => (0, uR.b)(document.activeElement),
      fR = function() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        for (const [JR, GR] of ZR)
          if (!RR.includes(JR) && GR()) return JR;
        return null
      },
      VR = function() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return "inGame" === yR.d.get("gameState") && (!(0, tR.o)() && (!iR() && null === fR(RR)))
      }
  },
  9483: (RR, JR, GR) => {
    GR.d(JR, {
      B: () => WR,
      F: () => vR,
      G: () => AR,
      J: () => nR,
      M: () => LR,
      Q: () => fR,
      U: () => wR,
      V: () => rR,
      Z: () => tR,
      ab: () => yR,
      b: () => xR,
      bb: () => XR,
      cb: () => gR,
      d: () => bR,
      db: () => OR,
      eb: () => CR,
      h: () => VR,
      k: () => iR,
      l: () => qR,
      m: () => BR,
      p: () => UR,
      s: () => MR,
      v: () => uR,
      z: () => KR
    });
    const yR = ["A", "B", "X", "Y", "LB", "RB", "LT", "RT", "View", "Menu", "LS", "RS", "Up", "Down", "Left", "Right", "Home"],
      tR = yR.length,
      uR = function() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return {
          values: new Array(tR).fill(0),
          leftStick: {
            x: 0,
            y: 0
          },
          rightStick: {
            x: 0,
            y: 0
          },
          timestampMs: RR
        }
      },
      ZR = Object.fromEntries(yR.map(((RR, JR) => [RR, JR]))),
      qR = RR => ZR[RR],
      iR = function(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .95;
        const yR = Math.hypot(RR.x, RR.y);
        if (yR <= JR) return {
          x: 0,
          y: 0
        };
        const tR = Math.min(1, (yR - JR) / Math.max(1e-4, GR - JR));
        return {
          x: RR.x / yR * tR,
          y: RR.y / yR * tR
        }
      },
      fR = ["exponential", "linear", "boost"],
      VR = (RR, JR) => {
        const GR = Math.hypot(RR.x, RR.y);
        if (0 === GR) return {
          x: 0,
          y: 0
        };
        const yR = ((RR, JR) => {
          const GR = Math.max(0, Math.min(1, RR));
          return "linear" === JR ? GR : GR * GR
        })(GR, JR);
        return {
          x: RR.x / GR * yR,
          y: RR.y / GR * yR
        }
      },
      KR = .5,
      wR = .3,
      rR = .2,
      eR = qR("LT"),
      aR = qR("RT"),
      LR = RR => RR === eR || RR === aR,
      nR = (RR, JR) => {
        const GR = qR(JR);
        return LR(GR) ? RR[GR] > .35 : RR[GR] >= KR
      },
      UR = (RR, JR) => RR.map(((RR, GR) => LR(GR) ? JR[GR] ? RR > .35 : RR >= .55 : RR >= KR)),
      WR = ["Up", "Down", "Left", "Right"],
      AR = RR => WR.includes(RR),
      CR = function(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5;
        return Math.hypot(RR.x, RR.y) < JR ? null : Math.abs(RR.x) > Math.abs(RR.y) ? RR.x > 0 ? "Right" : "Left" : RR.y > 0 ? "Down" : "Up"
      },
      XR = {
        initialDelayMs: 350,
        intervalMs: 120
      },
      MR = {
        initialDelayMs: 350,
        intervalMs: 150
      },
      BR = ["default", "slow", "off"],
      lR = 800,
      pR = 250,
      gR = (RR, JR) => "off" === JR ? null : "slow" === JR ? {
        initialDelayMs: Math.max(RR.initialDelayMs, lR),
        intervalMs: Math.max(RR.intervalMs, pR)
      } : RR;
    class bR {
      constructor(RR) {
        this.readTiming = RR, this.Qq = !1, this.timing = null, this.nextFireMs = 0
      }
      update(RR, JR) {
        return RR ? this.Qq ? !!(this.timing && JR >= this.nextFireMs) && (this.nextFireMs = JR + this.timing.intervalMs, !0) : (this.Qq = !0, this.timing = this.readTiming(), this.nextFireMs = JR + (null !== (GR = null === (yR = this.timing) || void 0 === yR ? void 0 : yR.initialDelayMs) && void 0 !== GR ? GR : 0), !0) : (this.Qq = !1, !1);
        var GR, yR
      }
      reset() {
        this.Qq = !1
      }
    }
    const vR = {
        initialDelayMs: 350,
        intervalMs: 80
      },
      OR = {
        initialDelayMs: 400,
        intervalMs: 90
      };
    class xR {
      constructor(RR) {
        this.timer = RR, this.direction = null
      }
      update(RR, JR) {
        return RR !== this.direction && (this.timer.reset(), this.direction = RR), this.timer.update(null !== RR, JR) ? RR : null
      }
      reset() {
        this.timer.reset(), this.direction = null
      }
    }
  },
  10035: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => tR,
      i: () => uR
    });
    let yR = -1 / 0;
    const tR = () => {
        yR = performance.now()
      },
      uR = RR => performance.now() - yR < RR
  },
  9980: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => ZR,
      e: () => uR
    });
    var yR = GR(9504),
      tR = GR(9483);
    const uR = RR => (0, tR.cb)(RR, (0, yR.l)().buttonRepeat),
      ZR = RR => new tR.d((() => uR(RR)))
  },
  9520: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => iR,
      e: () => uR,
      g: () => qR
    });
    var yR = GR(32),
      tR = GR(9504);
    const uR = (RR, JR) => "OpenShop" === RR ? "shop" === JR : "OpenLobbyLeaderboard" !== RR || "leaderboard" === JR;
    let ZR = !1;
    const qR = RR => {
        RR !== ZR && (ZR = RR, yR.n.JK(tR.e, (0, tR.l)()))
      },
      iR = () => ((RR, JR) => "shop" === RR && JR ? "shop" : "leaderboard")((0, tR.l)().leaderboardButton, ZR)
  },
  9514: (RR, JR, GR) => {
    GR.d(JR, {
      $: () => WR,
      B: () => iR,
      D: () => qR,
      F: () => CR,
      I: () => wR,
      M: () => rR,
      N: () => KR,
      Q: () => AR,
      S: () => fR,
      W: () => nR,
      Y: () => pR,
      ab: () => aR,
      bb: () => LR,
      d: () => DR,
      f: () => oR,
      fb: () => eR,
      gb: () => UR,
      hb: () => OR,
      j: () => gR,
      jb: () => uR,
      n: () => ZR,
      nb: () => XR,
      o: () => lR,
      ob: () => HR,
      pb: () => BR,
      r: () => MR,
      s: () => xR,
      u: () => NR,
      x: () => VR
    });
    var yR = GR(9497),
      tR = GR(9483);
    const uR = {
        min: 25,
        max: 500,
        step: 5
      },
      ZR = {
        min: 25,
        max: 100,
        step: 5
      },
      qR = {
        min: 0,
        max: .4,
        step: .01
      },
      iR = {
        min: 25,
        max: 300,
        step: 5
      },
      fR = {
        min: .5,
        max: 6,
        step: .1
      },
      VR = (RR, JR) => {
        if (!Number.isFinite(RR)) return JR.min;
        const GR = JR.min + Math.round((RR - JR.min) / JR.step) * JR.step,
          yR = Math.min(JR.max, Math.max(JR.min, GR));
        return Math.round(1e3 * yR) / 1e3
      },
      KR = RR => `${Math.round(RR)}%`,
      wR = RR => KR(100 * RR),
      rR = RR => `${RR.toFixed(1)}\xd7`,
      eR = [{
        value: "auto",
        labelKey: "controller:settingsPromptAuto"
      }, {
        value: "xbox",
        labelKey: "controller:settingsPromptXbox"
      }, {
        value: "playstation",
        labelKey: "controller:settingsPromptPlayStation"
      }, {
        value: "nintendo",
        labelKey: "controller:settingsPromptNintendo"
      }, {
        value: "steamdeck",
        labelKey: "controller:settingsPromptSteamDeck"
      }, {
        value: "generic",
        labelKey: "controller:settingsPromptGeneric"
      }],
      aR = [{
        value: "exponential",
        labelKey: "controller:settingsCurveExponential"
      }, {
        value: "linear",
        labelKey: "controller:settingsCurveLinear"
      }, {
        value: "boost",
        labelKey: "controller:settingsCurveBoost"
      }],
      LR = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "focus",
        labelKey: "controller:settingsMenuNavFocus"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      nR = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "slot",
        labelKey: "controller:settingsInventoryNavSlot"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      UR = [{
        value: "wheel",
        labelKey: "controller:settingsQuickChatWheel"
      }, {
        value: "off",
        labelKey: "controller:settingsQuickChatOff"
      }],
      WR = [{
        value: "shop",
        labelKey: "controller:settingsLeaderboardButtonShop"
      }, {
        value: "leaderboard",
        labelKey: "controller:settingsLeaderboardButtonLeaderboard"
      }],
      AR = [{
        value: "always",
        labelKey: "controller:settingsGyroAlways"
      }, {
        value: "aiming",
        labelKey: "controller:settingsGyroWhileAiming"
      }, {
        value: "button",
        labelKey: "controller:settingsGyroWhileButton"
      }],
      CR = [{
        value: "tapHold",
        labelKey: "controller:settingsEmoteButtonTapHold"
      }, {
        value: "wheel",
        labelKey: "controller:settingsEmoteButtonWheel"
      }],
      XR = [{
        value: "toggle",
        labelKey: "controller:settingsSneakToggle"
      }, {
        value: "hold",
        labelKey: "controller:settingsSneakHold"
      }],
      MR = [{
        value: "default",
        labelKey: "controller:settingsButtonRepeatDefault"
      }, {
        value: "slow",
        labelKey: "controller:settingsButtonRepeatSlow"
      }, {
        value: "off",
        labelKey: "controller:settingsButtonRepeatOff"
      }],
      BR = [{
        value: "short",
        labelKey: "controller:settingsTapHoldShort"
      }, {
        value: "medium",
        labelKey: "controller:settingsTapHoldMedium"
      }, {
        value: "long",
        labelKey: "controller:settingsTapHoldLong"
      }],
      lR = [{
        value: "hold",
        labelKey: "controller:settingsAttackHold"
      }, {
        value: "toggle",
        labelKey: "controller:settingsAttackToggle"
      }],
      pR = {
        southpaw: "controller:settingsLayoutSouthpaw",
        triggersSwapped: "controller:settingsLayoutTriggersSwapped"
      },
      gR = {
        jump: "controller:settingsActionJump",
        sneak: "controller:settingsActionSneak",
        sneakToggle: "controller:settingsActionSneakToggle",
        zoom: "controller:settingsActionZoom",
        sprint: "controller:settingsActionSprint",
        attack: "controller:settingsActionAttack",
        use: "controller:settingsActionUse",
        hotbarPrevious: "controller:settingsActionHotbarPrevious",
        hotbarNext: "controller:settingsActionHotbarNext",
        inventory: "controller:settingsActionInventory",
        actionButton: "controller:settingsActionActionButton",
        perspective: "controller:settingsActionPerspective",
        pickBlock: "controller:settingsActionPickBlock",
        drop: "controller:settingsActionDrop",
        emoteWheel: "controller:settingsActionEmoteWheel",
        chat: "controller:settingsActionChat",
        pause: "controller:settingsActionPause",
        leaderboard: "controller:settingsActionLeaderboard",
        menuConfirm: "controller:settingsActionMenuConfirm",
        menuBack: "controller:settingsActionMenuBack",
        menuTabPrevious: "controller:settingsActionMenuTabPrevious",
        menuTabNext: "controller:settingsActionMenuTabNext",
        menuPageUp: "controller:settingsActionMenuPageUp",
        menuPageDown: "controller:settingsActionMenuPageDown",
        menuSecondary: "controller:settingsActionMenuSecondary",
        menuToggleCursor: "controller:settingsActionMenuToggleCursor",
        inventoryPrimary: "controller:settingsActionInventoryPrimary",
        inventorySecondary: "controller:settingsActionInventorySecondary",
        inventoryQuickMove: "controller:settingsActionInventoryQuickMove",
        inventoryClose: "controller:settingsActionInventoryClose",
        inventoryPanelPrevious: "controller:settingsActionInventoryPanelPrevious",
        inventoryPanelNext: "controller:settingsActionInventoryPanelNext",
        inventoryDrop: "controller:settingsActionInventoryDrop",
        inventoryHotbarSwap: "controller:settingsActionInventoryHotbarSwap",
        keyboardType: "controller:settingsActionKeyboardType",
        keyboardBackspace: "controller:settingsActionKeyboardBackspace",
        keyboardSpace: "controller:settingsActionKeyboardSpace",
        keyboardCaretLeft: "controller:settingsActionKeyboardCaretLeft",
        keyboardCaretRight: "controller:settingsActionKeyboardCaretRight",
        keyboardShift: "controller:settingsActionKeyboardShift",
        keyboardSymbols: "controller:settingsActionKeyboardSymbols",
        keyboardSubmit: "controller:settingsActionKeyboardSubmit",
        keyboardClose: "controller:settingsActionKeyboardClose",
        keyboardChannel: "controller:settingsActionKeyboardChannel"
      },
      bR = {
        gameplay: "controller:settingsGroupGameplay",
        menu: "controller:settingsGroupMenus",
        inventory: "controller:settingsGroupInventory",
        keyboard: "controller:settingsGroupKeyboard"
      },
      vR = [{
        kind: "fixed",
        stick: "move",
        labelKey: "controller:settingsActionMove"
      }, {
        kind: "fixed",
        stick: "look",
        labelKey: "controller:settingsActionLook"
      }],
      OR = yR.d.map((RR => {
        let {
          group: JR,
          actions: GR
        } = RR;
        const yR = GR.map((RR => ({
          kind: "action",
          action: RR
        })));
        return {
          titleKey: bR[JR],
          rows: "gameplay" === JR ? [...vR, ...yR] : yR
        }
      })),
      xR = tR.ab.filter((RR => "Home" !== RR)),
      NR = 1e4;
    class DR {
      constructor(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
        this.cancelButton = RR, this.openButton = JR, this.accepts = GR, this.startMs = null, this.ignoredUntilMs = new Map, this.cancelDownAtMs = null
      }
      update(RR, JR) {
        var GR;
        this.updateIgnored(RR, JR);
        const yR = JR - (null !== (GR = this.startMs) && void 0 !== GR ? GR : JR) >= 250;
        for (const tR of xR)
          if (tR !== this.cancelButton && yR && !this.ignoredUntilMs.has(tR) && RR.wasPressed(tR) && this.accepts(tR)) return {
            kind: "bind",
            button: tR
          };
        if (this.ignoredUntilMs.has(this.cancelButton)) return null;
        if (RR.wasPressed(this.cancelButton)) {
          if (!this.accepts(this.cancelButton)) return {
            kind: "cancel"
          };
          this.cancelDownAtMs = JR
        }
        return null === this.cancelDownAtMs ? null : RR.isHeld(this.cancelButton) && JR - this.cancelDownAtMs >= 700 ? (this.cancelDownAtMs = null, {
          kind: "bind",
          button: this.cancelButton
        }) : RR.wasReleased(this.cancelButton) ? (this.cancelDownAtMs = null, {
          kind: "cancel"
        }) : null
      }
      getBindHoldProgress(RR) {
        return null === this.cancelDownAtMs ? 0 : Math.min(1, (RR - this.cancelDownAtMs) / 700)
      }
      updateIgnored(RR, JR) {
        if (null === this.startMs) {
          this.startMs = JR;
          for (const JR of xR) RR.isDown(JR) && this.ignoredUntilMs.set(JR, 1 / 0);
          this.openButton && !this.ignoredUntilMs.has(this.openButton) && this.ignoredUntilMs.set(this.openButton, JR + 250)
        }
        for (const [GR, yR] of this.ignoredUntilMs) {
          const tR = RR.isDown(GR);
          yR === 1 / 0 ? tR || GR !== this.openButton ? tR || this.ignoredUntilMs.delete(GR) : this.ignoredUntilMs.set(GR, JR + 250) : JR >= yR ? this.ignoredUntilMs.delete(GR) : tR && this.ignoredUntilMs.set(GR, 1 / 0)
        }
      }
    }
    const HR = 6e3;
    class oR {
      constructor() {
        this.downAtMs = null, this.pressesAtMs = []
      }
      update(RR, JR) {
        let {
          pressed: GR,
          Qq: yR
        } = RR;
        if (GR) {
          const RR = this.pressesAtMs.at(-1);
          if (this.pressesAtMs = void 0 !== RR && JR - RR < 1500 ? [...this.pressesAtMs, JR] : [JR], this.pressesAtMs.length >= 3) return 1
        }
        return yR ? (this.downAtMs ??= JR, Math.min(1, (JR - this.downAtMs) / 1500)) : (this.downAtMs = null, 0)
      }
    }
  },
  10048: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => uR,
      e: () => tR
    });
    let yR = null;
    const tR = function(RR) {
        const JR = {
          cycle: RR,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return yR = JR, () => {
          yR === JR && (yR = null)
        }
      },
      uR = () => {
        var RR;
        return null !== (RR = yR) && void 0 !== RR && RR.canCycle() ? yR.cycle : null
      }
  },
  6063: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => uR,
      i: () => ZR
    });
    var yR = GR(66);
    const tR = new WeakMap,
      uR = RR => {
        var JR;
        const GR = RR.closest("[data-pad-slider]");
        return GR && null !== (JR = tR.get(GR)) && void 0 !== JR ? JR : null
      },
      ZR = (RR, JR) => {
        const GR = (0, yR.useRef)(JR);
        GR.current = JR, (0, yR.useEffect)((() => {
          if (RR.current) return ((RR, JR) => (tR.set(RR, JR), () => {
            tR.get(RR) === JR && tR.delete(RR)
          }))(RR.current, {
            adjust: RR => {
              GR.current.adjust(RR)
            },
            setFraction: RR => {
              GR.current.setFraction(RR)
            },
            endDrag: () => {
              GR.current.endDrag()
            }
          })
        }), [RR])
      }
  },
  10170: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => tR,
      f: () => ZR,
      g: () => uR,
      j: () => yR,
      m: () => qR,
      n: () => fR,
      o: () => VR
    });
    const yR = "controllerActionWheelOpen",
      tR = "controllerActionWheelAim",
      uR = "controllerActionWheelCommit",
      ZR = "controllerActionWheelClose",
      qR = "controllerActionWheelPick";
    let iR = !1;
    const fR = () => iR,
      VR = RR => {
        iR = RR
      }
  },
  10162: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => uR,
      g: () => tR
    });
    let yR = 0;
    const tR = () => {
        yR++
      },
      uR = () => yR
  },
  10042: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => iR,
      f: () => tR,
      h: () => ZR,
      l: () => uR,
      o: () => yR,
      p: () => fR
    });
    const yR = "controllerQuickChatWheelOpen",
      tR = "controllerQuickChatWheelAim",
      uR = "controllerQuickChatWheelCommit",
      ZR = "controllerQuickChatWheelClose";
    let qR = !1;
    const iR = () => qR,
      fR = RR => {
        qR = RR
      }
  },
  10063: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => uR,
      e: () => tR
    });
    var yR = GR(32);
    const tR = "localBlockBroken";

    function uR() {
      return {
        onPlayerChangeBlock(RR, JR, GR, uR, ZR, qR) {
          "Air" === qR && yR.n.JK(tR)
        }
      }
    }
  },
  10057: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => tR
    });
    var yR = GR(1349);

    function tR(RR, JR) {
      var GR, tR;
      try {
        const GR = (0, yR.d)();
        if ("function" === typeof GR) {
          const yR = new GR(RR, JR);
          if (yR.type === RR) return yR
        }
      } catch {}
      const uR = document.createEvent("Event");
      return uR.initEvent(RR, null !== (GR = null === JR || void 0 === JR ? void 0 : JR.bubbles) && void 0 !== GR && GR, null !== (tR = null === JR || void 0 === JR ? void 0 : JR.cancelable) && void 0 !== tR && tR), uR
    }
  },
  10118: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => ZR
    });
    var yR = GR(10125),
      tR = GR(679),
      uR = GR(134);

    function ZR(RR) {
      var JR, GR;
      if ((0, tR.I)(RR)) return !0;
      const ZR = null !== (JR = null === (GR = uR.siteUsedData[uR.siteUsed]) || void 0 === GR ? void 0 : GR.adConfig.showRewardedAds) && void 0 !== JR && JR;
      for (const tR in RR) {
        const JR = RR[tR];
        if (null !== JR && void 0 !== JR && JR.items)
          for (const RR in JR.items)
            if ((0, yR.n)(JR.items[RR], ZR)) return !1
      }
      return !0
    }
  },
  10175: () => {},
  9543: (RR, JR, GR) => {
    var yR = {
      "./nintendo/A.svg": 9550,
      "./nintendo/B.svg": 9556,
      "./nintendo/Down.svg": 9561,
      "./nintendo/Home.svg": 9566,
      "./nintendo/LB.svg": 9568,
      "./nintendo/LS.svg": 9570,
      "./nintendo/LT.svg": 9578,
      "./nintendo/Left.svg": 9582,
      "./nintendo/LeftStick.svg": 9590,
      "./nintendo/Menu.svg": 9596,
      "./nintendo/RB.svg": 9599,
      "./nintendo/RS.svg": 9605,
      "./nintendo/RT.svg": 9608,
      "./nintendo/Right.svg": 9615,
      "./nintendo/RightStick.svg": 9622,
      "./nintendo/Up.svg": 9624,
      "./nintendo/View.svg": 9627,
      "./nintendo/X.svg": 9631,
      "./nintendo/Y.svg": 9639,
      "./playstation/A.svg": 9645,
      "./playstation/B.svg": 9651,
      "./playstation/Down.svg": 9657,
      "./playstation/Home.svg": 9665,
      "./playstation/LB.svg": 9672,
      "./playstation/LS.svg": 9681,
      "./playstation/LT.svg": 9687,
      "./playstation/Left.svg": 9693,
      "./playstation/LeftStick.svg": 9695,
      "./playstation/Menu.svg": 9697,
      "./playstation/RB.svg": 9700,
      "./playstation/RS.svg": 9702,
      "./playstation/RT.svg": 9710,
      "./playstation/Right.svg": 9718,
      "./playstation/RightStick.svg": 9727,
      "./playstation/Up.svg": 9736,
      "./playstation/View.svg": 9740,
      "./playstation/X.svg": 9745,
      "./playstation/Y.svg": 9753,
      "./steamdeck/A.svg": 9758,
      "./steamdeck/B.svg": 9764,
      "./steamdeck/Down.svg": 9770,
      "./steamdeck/Home.svg": 9778,
      "./steamdeck/LB.svg": 9785,
      "./steamdeck/LS.svg": 9794,
      "./steamdeck/LT.svg": 9797,
      "./steamdeck/Left.svg": 9801,
      "./steamdeck/LeftStick.svg": 9808,
      "./steamdeck/Menu.svg": 9812,
      "./steamdeck/RB.svg": 9816,
      "./steamdeck/RS.svg": 9823,
      "./steamdeck/RT.svg": 9826,
      "./steamdeck/Right.svg": 9832,
      "./steamdeck/RightStick.svg": 9841,
      "./steamdeck/Up.svg": 9846,
      "./steamdeck/View.svg": 9851,
      "./steamdeck/X.svg": 9854,
      "./steamdeck/Y.svg": 9860,
      "./xbox/A.svg": 9862,
      "./xbox/B.svg": 9865,
      "./xbox/Down.svg": 9870,
      "./xbox/Home.svg": 9875,
      "./xbox/LB.svg": 9881,
      "./xbox/LS.svg": 9890,
      "./xbox/LT.svg": 9897,
      "./xbox/Left.svg": 9905,
      "./xbox/LeftStick.svg": 9912,
      "./xbox/Menu.svg": 9916,
      "./xbox/RB.svg": 9925,
      "./xbox/RS.svg": 9934,
      "./xbox/RT.svg": 9937,
      "./xbox/Right.svg": 9939,
      "./xbox/RightStick.svg": 9946,
      "./xbox/Up.svg": 9954,
      "./xbox/View.svg": 9963,
      "./xbox/X.svg": 9965,
      "./xbox/Y.svg": 9967
    };

    function tR(RR) {
      var JR = uR(RR);
      return GR(JR)
    }

    function uR(RR) {
      if (!GR.o(yR, RR)) {
        var JR = new Error("Cannot find module '" + RR + "'");
        throw JR.code = "MODULE_NOT_FOUND", JR
      }
      return yR[RR]
    }
    tR.keys = function() {
      return Object.keys(yR)
    }, tR.resolve = uR, RR.exports = tR, tR.id = 9543
  },
  9550: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/A.926fb88933484dfbde14.svg"
  },
  9556: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/B.9f5ec099f78f84e44427.svg"
  },
  9561: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  9566: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  9568: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/LB.3a20b15927b55d5d8b60.svg"
  },
  9570: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  9578: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/LT.9fdc5e69011b9d41f50a.svg"
  },
  9582: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  9590: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  9596: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Menu.c903a662eb685211e52e.svg"
  },
  9599: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/RB.bba470ddb76ceec5d168.svg"
  },
  9605: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  9608: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/RT.e5a9fbcc3c79550111ca.svg"
  },
  9615: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  9622: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  9624: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  9627: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/View.0c9378b5d720a636d50d.svg"
  },
  9631: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/X.c9377519af94e6dce1d7.svg"
  },
  9639: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Y.62d8c17731dd2e172426.svg"
  },
  9645: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/A.958a6de9474f8d0c9caf.svg"
  },
  9651: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/B.d05958bfa88a1162b47a.svg"
  },
  9657: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Down.db68fb3980768eb54671.svg"
  },
  9665: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  9672: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/LB.37a3c5128c958ec2a0c2.svg"
  },
  9681: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/LS.15b0cc5bf3f2fe7bbd8b.svg"
  },
  9687: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/LT.5412ae5222c69f8c833f.svg"
  },
  9693: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Left.4457b2895ce94a5df32e.svg"
  },
  9695: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  9697: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Menu.1e8427f8133c9d456c53.svg"
  },
  9700: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/RB.c96c4aa2590209e930c7.svg"
  },
  9702: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/RS.8d70d147cf1ab136e845.svg"
  },
  9710: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/RT.1e4691bb5a7c049693df.svg"
  },
  9718: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Right.a1e101413040c540b879.svg"
  },
  9727: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  9736: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Up.7544a65ad4f611a55775.svg"
  },
  9740: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/View.003cae39de89cae0b9d8.svg"
  },
  9745: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/X.d88b6e62dd8fb4bda32a.svg"
  },
  9753: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Y.428d3e70775877892f82.svg"
  },
  9758: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  9764: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  9770: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  9778: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Home.ea8b009cfa9562aa644e.svg"
  },
  9785: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/LB.f283d355d22fc107d6d6.svg"
  },
  9794: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  9797: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/LT.13e66c122e7ee04bb876.svg"
  },
  9801: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  9808: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  9812: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Menu.90fc4e918900eb5062a0.svg"
  },
  9816: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/RB.918a7f16dc054d96b6f3.svg"
  },
  9823: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  9826: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/RT.a0523211130959598bed.svg"
  },
  9832: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  9841: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  9846: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  9851: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/View.0bc952e292c28c3baac2.svg"
  },
  9854: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  9860: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  },
  9862: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  9865: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  9870: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  9875: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Home.8898f76b20962fe52ab7.svg"
  },
  9881: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/LB.689ba3703ae248f2e4cc.svg"
  },
  9890: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  9897: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/LT.9c2d10d335ab5c590525.svg"
  },
  9905: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  9912: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  9916: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Menu.9e485791ea97009871ca.svg"
  },
  9925: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/RB.7ee5ce48dd551f993f80.svg"
  },
  9934: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  9937: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/RT.903ecadc55a9e9e00f07.svg"
  },
  9939: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  9946: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  9954: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  9963: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/View.3c5eeb34f0413bde4a65.svg"
  },
  9965: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  9967: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);