export const id = 111;
export const ids = [111];
export const modules = {
  5148: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => KS,
      g: () => PS,
      k: () => jS,
      o: () => nS
    });
    var tS = gS(64),
      bS = gS(5153),
      XS = gS(4489),
      xS = gS(1444),
      NS = gS(5182),
      qS = gS(1121),
      uS = gS.n(qS),
      IS = gS(1435),
      fS = gS(1844),
      kS = gS(5191),
      aS = gS(1181);

    function KS(SS) {
      let {
        label: HS,
        onClick: gS,
        checked: tS,
        circleInfoText: bS,
        className: NS,
        disabled: qS,
        note: IS
      } = SS;
      return (0, aS.jsxs)("div", {
        "aria-disabled": qS || void 0,
        "data-pad-focusable": !0,
        className: uS()("SettingBox CheckboxContainer", {
          [NS]: NS,
          SettingBoxDisabled: qS
        }),
        onClick: () => {
          qS || gS(!tS)
        },
        children: [(0, aS.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, aS.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, aS.jsx)(XS.c, {
              className: "SettingsCheckbox",
              checked: tS,
              disabled: qS,
              onChange: () => {}
            })
          }), (0, aS.jsxs)("div", {
            className: "CheckboxText",
            children: [HS, bS && (0, aS.jsx)("span", {
              onClick: SS => SS.stopPropagation(),
              children: (0, aS.jsx)(xS.e, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: bS
              })
            })]
          })]
        }), IS && (0, aS.jsx)("div", {
          className: "SettingNote",
          children: IS
        })]
      })
    }

    function jS(SS) {
      let {
        name: HS,
        onChange: gS,
        min: bS,
        max: XS,
        step: NS,
        initValue: qS,
        circleInfoText: IS,
        format: fS,
        className: kS,
        padStep: KS,
        disabled: jS = !1,
        selectableMax: GS,
        cappedNote: nS,
        onChangeComplete: PS
      } = SS;
      const [QS, DS] = (0, tS.useState)(qS), wS = (0, tS.useRef)(qS);
      (0, tS.useEffect)((() => {
        wS.current = qS, DS(qS)
      }), [qS]);
      const hS = void 0 !== GS && GS < XS,
        ZS = hS ? {
          "--slider-selectable": (GS - bS) / (XS - bS)
        } : void 0;
      return (0, aS.jsxs)("div", {
        className: uS()("SettingBox SettingsSliderDiv", {
          [kS]: kS,
          SettingBoxDisabled: jS,
          SliderCapped: hS
        }),
        style: ZS,
        children: [(0, aS.jsxs)("div", {
          className: "SliderText",
          children: [`${HS}: ${fS?fS(QS):QS}`, IS && (0, aS.jsx)(xS.e, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: IS
          })]
        }), (0, aS.jsx)("div", {
          className: "SliderDiv",
          children: (0, aS.jsx)(CS, {
            value: QS,
            min: bS,
            max: XS,
            step: NS,
            onChange: SS => {
              if (hS && SS >= GS && QS === GS) return;
              const HS = hS ? Math.min(SS, GS) : SS;
              wS.current = HS, DS(HS), gS(HS)
            },
            onChangeComplete: PS && (() => {
              PS(wS.current)
            }),
            format: fS,
            padStep: KS,
            disabled: jS
          })
        }), hS && nS && (0, aS.jsx)("div", {
          className: "SettingNote",
          children: nS
        })]
      })
    }
    const GS = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function CS(SS) {
      var HS;
      let {
        value: gS,
        min: XS,
        max: xS,
        step: NS,
        onChange: qS,
        orientation: uS,
        reverse: IS,
        setIsChanging: fS,
        tooltip: KS,
        labels: jS,
        handleLabel: CS,
        format: nS,
        onChangeStart: PS,
        onChangeComplete: QS,
        padStep: DS,
        disabled: wS = !1
      } = SS;
      const hS = (0, tS.useRef)(null),
        ZS = (0, tS.useRef)(null);
      (0, tS.useLayoutEffect)((() => {
        var SS, HS, gS;
        const tS = null !== (SS = null === (HS = hS.current) || void 0 === HS ? void 0 : HS.querySelector(".rangeslider")) && void 0 !== SS ? SS : null;
        null === tS || void 0 === tS || tS.setAttribute("data-pad-slider", ""), null === tS || void 0 === tS || tS.setAttribute("data-pad-focusable", ""), null === tS || void 0 === tS || null === (gS = tS.querySelector(".rangeslider__handle")) || void 0 === gS || gS.setAttribute("data-pad-slider-handle", ""), ZS.current = tS
      }), []), (0, tS.useLayoutEffect)((() => {
        var SS, HS;
        wS ? null === (SS = ZS.current) || void 0 === SS || SS.setAttribute("aria-disabled", "true") : null === (HS = ZS.current) || void 0 === HS || HS.removeAttribute("aria-disabled")
      }), [wS]);
      const JS = (null !== (HS = String(NS).split(".")[1]) && void 0 !== HS ? HS : "").length,
        OS = SS => {
          const HS = Number((Math.round((SS - XS) / NS) * NS + XS).toFixed(JS));
          return Math.min(xS, Math.max(XS, HS))
        },
        dS = (0, tS.useRef)(QS);
      dS.current = QS, (0, tS.useEffect)((() => {
        const SS = hS.current;
        if (!SS) return;
        const HS = SS => {
          var HS;
          GS.has(SS.key) && (null === (HS = dS.current) || void 0 === HS || HS.call(dS))
        };
        return SS.addEventListener("keyup", HS), () => {
          SS.removeEventListener("keyup", HS)
        }
      }), []);
      const cS = (0, tS.useRef)(!1);
      return (0, kS.f)(ZS, {
        adjust: SS => {
          if (wS) return;
          const HS = null !== DS && void 0 !== DS ? DS : Math.max(NS, Math.round((xS - XS) / 20 / NS) * NS),
            tS = OS(gS + SS * HS * (IS ? -1 : 1));
          tS !== gS && (null === PS || void 0 === PS || PS(), qS(tS), null === QS || void 0 === QS || QS())
        },
        setFraction: SS => {
          if (wS) return;
          const HS = OS(XS + (IS ? 1 - SS : SS) * (xS - XS));
          HS !== gS && (cS.current || (cS.current = !0, null === PS || void 0 === PS || PS()), qS(HS))
        },
        endDrag: () => {
          cS.current && (cS.current = !1, null === QS || void 0 === QS || QS())
        }
      }), (0, aS.jsx)("div", {
        ref: hS,
        style: {
          display: "contents"
        },
        children: (0, aS.jsx)(bS.c, {
          value: gS,
          min: XS,
          max: xS,
          step: NS,
          onChange: qS,
          orientation: uS,
          reverse: IS,
          tooltip: KS,
          labels: jS,
          handleLabel: CS,
          format: nS,
          onChangeStart: () => {
            null === PS || void 0 === PS || PS(), null === fS || void 0 === fS || fS(!0)
          },
          onChangeComplete: () => {
            null === fS || void 0 === fS || fS(!1), null === QS || void 0 === QS || QS()
          }
        })
      })
    }
    async function nS() {
      const SS = IS.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await SS.getResult() && (0, fS.reloadBloxd)()
    }

    function PS(SS) {
      let {
        label: HS,
        options: gS,
        value: tS,
        onChange: bS,
        circleInfoText: XS
      } = SS;
      return (0, aS.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, aS.jsxs)("div", {
          className: "SliderText",
          children: [HS, XS && (0, aS.jsx)(xS.e, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: XS
          })]
        }), (0, aS.jsx)(NS.d, {
          ariaLabel: HS,
          options: gS,
          value: tS,
          onChange: bS
        })]
      })
    }
  },
  6853: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      default: () => oS
    });
    var tS = gS(64),
      bS = gS(1622),
      XS = gS(6760),
      xS = gS(1309),
      NS = gS(387),
      qS = gS(1419),
      uS = gS(1608),
      IS = gS(1528),
      fS = gS(1444),
      kS = gS(2725),
      aS = gS(2878),
      KS = gS(4691),
      jS = gS(1211),
      GS = gS(1588),
      CS = gS(104),
      nS = gS(1281);
    const PS = gS.p + "static/media/bloxdhubLogo.6a6c367af2ad6e6f1eb3.webp";
    var QS = gS(1121),
      DS = gS.n(QS),
      wS = gS(1127),
      hS = gS(1435),
      ZS = gS(6754),
      JS = gS(1181);
    const OS = (0, tS.lazy)((() => Promise.all([gS.e(107), gS.e(77), gS.e(133), gS.e(132), gS.e(112), gS.e(397)]).then((() => gS(6790))).then((SS => ({
      default: SS.ShaderPackPublishForm
    })))));

    function dS(SS) {
      let {
        details: HS,
        owner: gS,
        onChanged: bS
      } = SS;
      const {
        t: xS
      } = (0, nS.F)(), NS = (0, uS.useNavigatePreserveSearch)(), {
        userContext: fS
      } = (0, jS.b)(), [kS, aS] = (0, tS.useState)(!1), [KS, CS] = (0, tS.useState)(null), [PS, QS] = (0, tS.useState)(!1), {
        packId: dS,
        name: cS,
        description: vS,
        live: ES
      } = HS;
      async function LS(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bS;
        aS(!0), CS(null);
        try {
          await SS(), HS()
        } catch (gS) {
          console.error("Failed to change a shader pack", gS), CS((0, ZS.s)(gS, xS, "shaderPackListing:ownerActionFailed"))
        } finally {
          aS(!1)
        }
      }
      const YS = (0, ZS.o)(fS);
      return (0, JS.jsxs)("section", {
        className: "ShaderPackOwnerPanel",
        children: [(0, JS.jsx)("h2", {
          className: "ShaderPackSectionTitle",
          children: xS("general:manage")
        }), (0, ZS.S)(gS, !(null === ES || void 0 === ES || !ES.renderId), Date.now(), xS).map((SS => (0, JS.jsxs)("div", {
          className: DS()("ShaderPackOwnerNotice", {
            Warning: "warning" === SS.tone
          }),
          children: [(0, JS.jsx)(wS.d, {
            name: "warning" === SS.tone ? "triangle-exclamation" : "circle-info"
          }), (0, JS.jsxs)("div", {
            children: [SS.text, SS.detail && (0, JS.jsx)("pre", {
              className: "ShaderPackOwnerNoticeDetail",
              children: SS.detail
            })]
          })]
        }, SS.text))), HS.ban && (0, JS.jsxs)("div", {
          className: "ShaderPackOwnerNotice Warning",
          children: [(0, JS.jsx)(wS.d, {
            name: "ban"
          }), (0, JS.jsxs)("div", {
            children: ["Banned by ", HS.ban.byName, " on ", new Date(HS.ban.at).toLocaleString()]
          })]
        }), KS && (0, JS.jsx)("div", {
          className: "ShaderPackOwnerError",
          children: KS
        }), (0, JS.jsxs)("div", {
          className: "ShaderPackOwnerActions",
          children: [(0, JS.jsxs)(IS.P, {
            disabled: kS,
            onClick: () => {
              !async function() {
                const SS = await hS.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:renameTitle",
                  initialValue: cS,
                  maxLength: XS.E,
                  submitText: "general:save",
                  validate: SS => SS.trim().length < XS.I ? xS("shaderPackListing:nameTooShort", {
                    min: String(XS.I)
                  }) : null
                }).getResult();
                "notificationTornDown" !== SS && "submit" === (null === SS || void 0 === SS ? void 0 : SS.type) && SS.value.trim() !== cS && await LS((() => GS.b.updateShaderPack(fS, {
                  packId: dS,
                  name: SS.value.trim()
                })))
              }()
            },
            children: [(0, JS.jsx)(wS.d, {
              name: "pen"
            }), " ", xS("shaderPackListing:rename")]
          }), (0, JS.jsxs)(IS.P, {
            disabled: kS,
            onClick: () => {
              !async function() {
                const SS = await hS.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:editDescription",
                  initialValue: vS,
                  maxLength: XS.v,
                  multiline: !0,
                  allowEmptySubmit: !0,
                  submitText: "general:save"
                }).getResult();
                "notificationTornDown" !== SS && "submit" === (null === SS || void 0 === SS ? void 0 : SS.type) && SS.value.trim() !== vS && await LS((() => GS.b.updateShaderPack(fS, {
                  packId: dS,
                  description: SS.value.trim()
                })))
              }()
            },
            children: [(0, JS.jsx)(wS.d, {
              name: "file-lines"
            }), " ", xS("shaderPackListing:editDescription")]
          }), (0, JS.jsxs)(IS.P, {
            disabled: kS || gS.isBanned && !gS.listed,
            onClick: () => {
              LS((() => GS.b.updateShaderPack(fS, {
                packId: dS,
                listed: !gS.listed
              })))
            },
            children: [(0, JS.jsx)(wS.d, {
              name: gS.listed ? "eye-slash" : "eye"
            }), " ", xS(gS.listed ? "shaderPackListing:unlist" : "shaderPackListing:relist")]
          }), !gS.isBanned && (0, JS.jsxs)(IS.g, {
            disabled: kS,
            onClick: () => {
              QS(!PS)
            },
            children: [(0, JS.jsx)(wS.d, {
              name: "upload"
            }), " ", xS("shaderPackListing:uploadVersion")]
          }), (0, JS.jsxs)(IS.M, {
            disabled: kS || gS.isBanned,
            onClick: () => {
              !async function() {
                !0 === await hS.NotificationProvider.showPromptPopup({
                  title: "shaderPackListing:deleteTitle",
                  subtitle: "shaderPackListing:deleteSubtitle",
                  confirmText: "general:delete",
                  cancelText: "general:cancel",
                  destructive: !0
                }).getResult() && await LS((() => GS.b.deleteShaderPack(fS, dS)), (() => {
                  NS(`${ZS.P}?section=mine`, {
                    replace: !0
                  })
                }))
              }()
            },
            children: [(0, JS.jsx)(wS.d, {
              name: "trash-can"
            }), " ", xS("general:delete")]
          }), YS && (0, JS.jsxs)(IS.M, {
            disabled: kS,
            onClick: () => {
              LS((() => GS.b.setShaderPackBanned(fS, dS, !gS.isBanned)))
            },
            children: [(0, JS.jsx)(wS.d, {
              name: gS.isBanned ? "circle-check" : "ban"
            }), " ", gS.isBanned ? "Unban" : "Ban"]
          })]
        }), PS && (0, JS.jsx)(tS.Suspense, {
          fallback: (0, JS.jsx)(qS.c, {}),
          children: (0, JS.jsx)(OS, {
            existing: {
              packId: dS,
              name: cS,
              description: vS
            },
            onPublished: () => {
              QS(!1), bS()
            }
          })
        })]
      })
    }
    var cS = gS(77),
      vS = gS(2022),
      ES = gS(1359),
      LS = gS(5191),
      YS = gS(1286),
      AS = gS(6775),
      yS = gS(6768),
      VS = gS(6783);

    function iS(SS) {
      let {
        item: HS
      } = SS;
      const {
        t: gS
      } = (0, nS.F)(), [bS] = (0, AS.h)(), [xS, NS] = (0, tS.useState)(bS), [qS, uS] = (0, tS.useState)(!1), [IS, fS] = (0, tS.useState)(!1), {
        s3Url: kS
      } = YS.clientSideServerUrls, {
        width: aS,
        height: KS
      } = XS.w.large, jS = (0, XS.z)(kS, HS, xS, "large"), {
        renderVersion: GS
      } = HS;
      return (0, JS.jsxs)("div", {
        className: "ShaderPackPreviews",
        children: [(0, JS.jsx)(VS.e, {
          selected: xS,
          onSelect: SS => {
            NS(SS), uS(!1)
          },
          imageUrl: SS => (0, XS.z)(kS, HS, SS, "thumb")
        }), (0, JS.jsxs)("div", {
          className: "ShaderPackPreviewStage",
          children: [!qS && (0, JS.jsxs)("button", {
            type: "button",
            className: "ShaderPackPreviewMain",
            title: null === GS ? void 0 : gS("shaderPackListing:fullSize"),
            disabled: null === GS,
            onClick: () => {
              fS(!0)
            },
            children: [(0, JS.jsx)("img", {
              src: jS,
              width: aS,
              height: KS,
              alt: gS(ZS.db[xS]),
              draggable: !1
            }), (0, JS.jsx)(yS.c, {
              item: HS
            })]
          }), !qS && null !== GS && (0, JS.jsxs)(pS, {
            side: "Right",
            onClick: () => {
              uS(!0)
            },
            children: [(0, JS.jsx)(wS.d, {
              name: "arrows-left-right"
            }), " ", gS("shaderPackListing:compare")]
          }), qS && null !== GS && (0, JS.jsx)(US, {
            item: HS,
            packUrl: jS,
            baselineUrl: (0, XS.u)(kS, GS, xS, "large")
          }), qS && (0, JS.jsx)(pS, {
            side: "Left",
            onClick: () => {
              uS(!1)
            },
            children: gS("shaderPackListing:withPack")
          }), qS && (0, JS.jsx)(pS, {
            side: "Right",
            onClick: () => {
              uS(!1)
            },
            children: gS("shaderPackListing:withoutPack")
          })]
        }), IS && (0, JS.jsx)(WS, {
          fullUrl: (0, XS.z)(kS, HS, xS, "full"),
          largeUrl: jS,
          alt: gS(ZS.db[xS]),
          onClose: () => {
            fS(!1)
          }
        })]
      })
    }

    function WS(SS) {
      let {
        fullUrl: HS,
        largeUrl: gS,
        alt: bS,
        onClose: XS
      } = SS;
      const xS = (0, tS.useRef)(null);
      return (0, ES.s)("popup", xS, XS), (0, tS.useEffect)((() => {
        function SS(SS) {
          "Escape" === SS.key && (SS.stopPropagation(), XS())
        }
        return window.addEventListener("keydown", SS, !0), () => {
          window.removeEventListener("keydown", SS, !0)
        }
      }), [XS]), (0, cS.createPortal)((0, JS.jsxs)("div", {
        ref: xS,
        className: "ShaderPackFullSize",
        onClick: XS,
        children: [(0, JS.jsx)("img", {
          className: "ShaderPackFullSizeImage",
          src: HS,
          alt: bS,
          draggable: !1,
          style: {
            backgroundImage: `url(${gS})`
          }
        }), (0, JS.jsx)(IS.l, {
          className: "ShaderPackFullSizeClose",
          onClick: XS
        })]
      }), document.body)
    }
    const zS = 5;

    function US(SS) {
      let {
        item: HS,
        packUrl: gS,
        baselineUrl: bS
      } = SS;
      const {
        t: xS
      } = (0, nS.F)(), [NS, qS] = (0, tS.useState)(50), uS = (0, tS.useRef)(!1), IS = (0, tS.useRef)(null), {
        width: fS,
        height: kS
      } = XS.w.large;

      function aS(SS) {
        qS((HS => (0, vS.h)(HS + SS, 0, 100)))
      }

      function KS(SS) {
        const HS = SS.currentTarget.getBoundingClientRect();
        qS((0, vS.h)((SS.clientX - HS.left) / HS.width * 100, 0, 100))
      }
      return (0, LS.f)(IS, {
        adjust: SS => {
          aS(SS * zS)
        },
        setFraction: SS => {
          qS(100 * SS)
        },
        endDrag: () => {}
      }), (0, JS.jsxs)("div", {
        ref: IS,
        className: "ShaderPackCompare",
        "data-pad-slider": "",
        "data-pad-focusable": "",
        role: "slider",
        tabIndex: 0,
        "aria-label": xS("shaderPackListing:compare"),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(NS),
        style: {
          "--split": `${NS}%`
        },
        onKeyDown: function(SS) {
          const HS = "ArrowLeft" === SS.key ? -zS : "ArrowRight" === SS.key ? zS : 0;
          0 !== HS && (SS.preventDefault(), aS(HS))
        },
        onPointerDown: SS => {
          uS.current = !0, SS.currentTarget.setPointerCapture(SS.pointerId), KS(SS)
        },
        onPointerMove: SS => {
          uS.current && KS(SS)
        },
        onPointerUp: () => {
          uS.current = !1
        },
        onPointerCancel: () => {
          uS.current = !1
        },
        children: [(0, JS.jsx)("img", {
          className: "ShaderPackCompareBaseline",
          src: bS,
          width: fS,
          height: kS,
          alt: "",
          draggable: !1,
          style: {
            backgroundImage: `url(${gS})`
          }
        }), (0, JS.jsx)("div", {
          className: "ShaderPackCompareLine"
        }), (0, JS.jsx)("img", {
          className: "ShaderPackComparePack",
          src: gS,
          width: fS,
          height: kS,
          alt: "",
          draggable: !1
        }), (0, JS.jsx)(yS.c, {
          item: HS,
          className: "ShaderPackCompareNotice"
        })]
      })
    }

    function pS(SS) {
      let {
        side: HS,
        onClick: gS,
        children: tS
      } = SS;
      return (0, JS.jsx)("button", {
        type: "button",
        className: `ShaderPackStageButton ${HS}`,
        onClick: gS,
        children: (0, JS.jsx)("span", {
          className: "ShaderPackStageButtonFace SmallTextBold",
          children: tS
        })
      })
    }
    var sS = gS(5148),
      BS = gS(362),
      MS = gS(6848);
    const FS = {
      compiler: "shaderPack:compilerUnavailable",
      download: "shaderPackListing:useDownloadFailed",
      apiVersion: "shaderPackListing:useOtherApiVersion",
      invalid: "shaderPackListing:useInvalid",
      errors: "shaderPackListing:useFailsHere",
      save: "shaderPack:saveFailed"
    };

    function RS(SS) {
      const {
        userContext: HS
      } = (0, jS.b)(), [bS, XS] = (0, tS.useState)(null), [xS, NS] = (0, tS.useState)(!1), [qS, uS] = (0, tS.useState)(!1), [IS, fS] = (0, tS.useState)(null), kS = null === SS || void 0 === SS ? void 0 : SS.packId, aS = null === SS || void 0 === SS ? void 0 : SS.sourceHash;
      return (0, tS.useEffect)((() => {
        if (NS(!1), fS(null), void 0 === kS) return;
        let SS = !1;
        return Promise.all([(0, CS.hasUsableWebGpuAdapter)(), (0, MS.f)()]).then((HS => {
          let [gS, tS] = HS;
          var bS;
          SS || (XS(gS), NS((null === tS || void 0 === tS || null === (bS = tS.listing) || void 0 === bS ? void 0 : bS.packId) === kS && tS.listing.sourceHash === aS))
        })).catch((HS => {
          console.error("Failed to check whether this shader pack can be used", HS), SS || XS(!1)
        })), () => {
          SS = !0
        }
      }), [kS, aS]), {
        webGpuUsable: bS,
        inUse: xS,
        busy: qS,
        errorKey: IS,
        use: () => {
          null !== SS && async function(SS) {
            uS(!0), fS(null);
            try {
              const {
                installListedShaderPack: tS
              } = await Promise.all([gS.e(77), gS.e(133), gS.e(113)]).then((() => gS(40531))), bS = await tS({
                packId: SS.packId,
                sourceHash: SS.sourceHash,
                name: SS.name,
                ownerName: SS.ownerName,
                description: SS.description
              });
              if ("failed" === bS.kind) return void fS(FS[bS.reason]);
              NS(!0), GS.b.recordShaderPackDownload(HS, SS.packId).catch((SS => {
                console.error("Failed to count a shader pack's download", SS)
              })), (0, sS.o)()
            } catch (tS) {
              console.error("Failed to use the shader pack", tS), fS("shaderPack:unexpectedError")
            } finally {
              uS(!1)
            }
          }(SS)
        }
      }
    }

    function TS(SS) {
      let {
        packUse: HS
      } = SS;
      const {
        t: gS
      } = (0, nS.F)(), {
        webGpuUsable: tS,
        inUse: bS,
        busy: XS,
        errorKey: xS,
        use: NS
      } = HS;
      return (0, JS.jsxs)("div", {
        className: "ShaderPackUse",
        children: [(0, JS.jsxs)(IS.p, {
          disabled: !0 !== tS || bS,
          loading: XS,
          onClick: NS,
          children: [(0, JS.jsx)(wS.d, {
            name: bS ? "check" : "download"
          }), " ", gS(bS ? "shaderPackListing:inUse" : "shaderPackListing:use")]
        }), !1 === tS && (0, JS.jsx)("div", {
          className: "ShaderPackUseNote",
          children: gS((0, BS.m)() ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), xS && (0, JS.jsx)("div", {
          className: "ShaderPackUseNote Error",
          children: gS(xS)
        })]
      })
    }

    function oS() {
      var SS;
      const {
        t: HS
      } = (0, nS.F)(), gS = (0, uS.useNavigatePreserveSearch)(), {
        packId: XS
      } = (0, bS.z)(), {
        userContext: xS,
        isUserContextUpdating: NS
      } = (0, jS.b)(), [fS, kS] = (0, tS.useState)(null), [aS, CS] = (0, tS.useState)(null), [PS, QS] = (0, tS.useState)(0), DS = (0, tS.useRef)(0);

      function wS() {
        var SS;
        null !== (SS = (0, uS.getPreviousLocation)()) && void 0 !== SS && SS.startsWith(ZS.P) ? gS(-1) : gS(ZS.P)
      }(0, KS.c)(wS), (0, AS.d)(), (0, tS.useEffect)((() => {
        if (NS || void 0 === XS) return;
        const SS = ++DS.current;
        CS(null), GS.b.getShaderPack(xS, XS).then((HS => {
          DS.current === SS && kS(HS)
        })).catch((HS => {
          DS.current === SS && (console.error("Failed to get the shader pack", HS), kS(null), CS({
            error: HS
          }))
        }))
      }), [XS, xS, NS, PS]);
      const hS = () => {
          QS((SS => SS + 1))
        },
        OS = (null === fS || void 0 === fS ? void 0 : fS.packId) === XS ? fS : null,
        cS = (0, AS.j)(),
        vS = RS(null !== (SS = null === OS || void 0 === OS ? void 0 : OS.live) && void 0 !== SS ? SS : null),
        ES = null !== OS && void 0 !== OS && OS.live ? (0, JS.jsx)(lS, {
          item: OS.live,
          favourites: cS,
          packUse: vS
        }) : null;
      return (0, JS.jsxs)("article", {
        className: "ShaderPackInformation AnimFadeIn",
        children: [(0, JS.jsx)(IS.d, {
          onClick: wS,
          children: HS("shaderPackListing:backToPacks")
        }), null === OS && null === aS && (0, JS.jsx)("div", {
          className: "ShaderPackInformationMessage",
          children: (0, JS.jsx)(qS.c, {})
        }), null !== aS && (0, JS.jsxs)("div", {
          className: "ShaderPackInformationMessage",
          children: [(0, ZS.s)(aS.error, HS, "shaderPackListing:loadPackFailed"), (0, JS.jsx)(IS.g, {
            onClick: hS,
            children: HS("general:tryAgain")
          })]
        }), null !== OS && null === aS && (0, JS.jsxs)("div", {
          className: "ShaderPackInformationBody",
          children: [(0, JS.jsxs)("header", {
            className: "ShaderPackInformationHeader",
            children: [(0, JS.jsx)("h1", {
              className: "FullyFancyText",
              children: OS.name
            }), ES]
          }), OS.live && (0, JS.jsx)(iS, {
            item: OS.live
          }), OS.live && (0, JS.jsx)(mS, {
            item: OS.live,
            ownerPreview: OS.ownerPreview,
            bloxdhubSlug: OS.bloxdhubSlug,
            actions: ES
          }), OS.owner && (0, JS.jsx)(dS, {
            details: OS,
            owner: OS.owner,
            onChanged: hS
          })]
        })]
      })
    }

    function lS(SS) {
      let {
        item: HS,
        favourites: gS,
        packUse: tS
      } = SS;
      const bS = gS.isFavourite(HS.packId);
      return (0, JS.jsxs)("div", {
        className: "ShaderPackInformationActions",
        children: [CS.featureFlags.settings.canUseShaderPacks && (0, JS.jsx)(TS, {
          packUse: tS
        }), (0, JS.jsx)(IS.w, {
          className: "ShaderPackInformationLike",
          onClick: () => {
            gS.toggle(HS.packId)
          },
          isLiked: !0 === bS,
          isLoading: null === bS
        })]
      })
    }

    function mS(SS) {
      let {
        item: HS,
        ownerPreview: gS,
        bloxdhubSlug: tS,
        actions: bS
      } = SS;
      const {
        t: NS
      } = (0, nS.F)(), qS = (0, aS.q)(), IS = null === tS ? null : (0, XS.h)(tS);
      return (0, JS.jsxs)("div", {
        className: "ShaderPackFacts",
        children: [HS.description && (0, JS.jsx)("p", {
          className: "ShaderPackDescription",
          children: HS.description
        }), (0, JS.jsxs)("div", {
          className: "ShaderPackFeatureList",
          children: [(null !== gS || null !== IS) && (0, JS.jsx)("div", {
            className: "ShaderPackAuthor",
            children: null !== gS ? (0, JS.jsxs)(JS.Fragment, {
              children: [(0, JS.jsx)(kS.g, {
                playerSocialPreview: gS,
                showLocation: !1,
                linkToProfile: !0
              }), null !== IS && (0, JS.jsx)("a", {
                className: "ShaderPackBloxdhubLogo",
                href: IS,
                target: "_blank",
                rel: "noopener noreferrer",
                children: (0, JS.jsx)("img", {
                  src: PS,
                  alt: XS.e
                })
              })]
            }) : (0, JS.jsxs)("a", {
              className: "ShaderPackBloxdhubName",
              href: IS,
              target: "_blank",
              rel: "noopener noreferrer",
              children: [XS.e, (0, JS.jsx)("img", {
                src: PS,
                alt: ""
              })]
            })
          }), ZS.w.filter((SS => HS.features.includes(SS))).map((SS => (0, JS.jsx)(uS.LinkPreserveSearch, {
            className: "ShaderPackFeature",
            to: (0, ZS.H)(SS),
            children: NS(ZS.J[SS])
          }, SS)))]
        }), bS, (0, JS.jsxs)("dl", {
          className: "ShaderPackFactList",
          children: [(0, JS.jsxs)("div", {
            children: [(0, JS.jsx)("dt", {
              children: NS("shaderPackListing:downloads")
            }), (0, JS.jsx)("dd", {
              children: (0, xS.R)(HS.downloads)
            })]
          }), (0, JS.jsx)(eS, {
            label: NS("shaderPackListing:updated"),
            time: HS.listedUpdatedAt,
            now: qS
          }), (0, JS.jsx)(eS, {
            label: NS("shaderPackListing:created"),
            time: HS.publishedAt,
            now: qS
          }), null !== HS.gpuCost && (0, JS.jsxs)("div", {
            children: [(0, JS.jsx)("dt", {
              children: NS("shaderPackListing:lag")
            }), (0, JS.jsx)("dd", {
              children: NS("shaderPackListing:lagPercent", {
                percent: String((0, ZS.O)(HS.gpuCost))
              })
            })]
          }), (0, JS.jsxs)("div", {
            children: [(0, JS.jsx)("dt", {
              children: NS("shaderPackListing:size")
            }), (0, JS.jsx)("dd", {
              children: NS("shaderPackListing:sizeValue", {
                kilobytes: String((0, ZS.K)(HS.sourceBytes))
              })
            })]
          }), (0, JS.jsxs)("div", {
            children: [(0, JS.jsx)("dt", {
              children: NS("shaderPackListing:files")
            }), (0, JS.jsx)("dd", {
              children: HS.fileCount
            })]
          })]
        })]
      })
    }

    function eS(SS) {
      let {
        label: HS,
        time: gS,
        now: tS
      } = SS;
      const {
        t: bS,
        selectedLanguage: XS
      } = (0, nS.F)(), xS = new Date(gS);
      let qS = xS.toLocaleDateString();
      if (tS - gS <= 30 * NS.h) {
        const SS = (0, nS.q)(XS.code, "shaderPackListing:timeAgo");
        qS = bS("shaderPackListing:timeAgo", {
          time: (0, NS.W)(SS, gS, tS)
        })
      }
      return (0, JS.jsx)(fS.h, {
        tooltipInner: xS.toLocaleString(),
        children: (0, JS.jsxs)("div", {
          children: [(0, JS.jsx)("dt", {
            children: HS
          }), (0, JS.jsx)("dd", {
            children: qS
          })]
        })
      })
    }
  },
  5182: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => xS
    });
    var tS = gS(1121),
      bS = gS.n(tS),
      XS = gS(1181);

    function xS(SS) {
      let {
        options: HS,
        value: gS,
        onChange: tS,
        ariaLabel: xS,
        className: NS,
        reselectable: qS = !1,
        keepsFocus: uS = !1,
        padTabs: IS
      } = SS;
      const fS = void 0 !== IS;
      return (0, XS.jsx)("div", {
        className: bS()("SegmentedToggle", NS),
        role: "group",
        "aria-label": xS,
        "data-pad-tabs": IS,
        children: HS.map((SS => {
          const HS = SS.value === gS;
          return (0, XS.jsx)("button", {
            type: "button",
            "aria-pressed": HS,
            "data-pad-tab": fS || void 0,
            "data-pad-selected": fS && HS ? "true" : void 0,
            "data-pad-default-focus": fS && HS || void 0,
            "aria-label": SS.ariaLabel,
            title: SS.ariaLabel,
            className: bS()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: HS
            }),
            onMouseDown: uS ? SS => {
              SS.preventDefault()
            } : void 0,
            onClick: () => {
              HS && !qS || tS(SS.value)
            },
            children: SS.label
          }, SS.value)
        }))
      })
    }
  },
  5191: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => XS,
      f: () => xS
    });
    var tS = gS(64);
    const bS = new WeakMap,
      XS = SS => {
        var HS;
        const gS = SS.closest("[data-pad-slider]");
        return gS && null !== (HS = bS.get(gS)) && void 0 !== HS ? HS : null
      },
      xS = (SS, HS) => {
        const gS = (0, tS.useRef)(HS);
        gS.current = HS, (0, tS.useEffect)((() => {
          if (SS.current) return ((SS, HS) => (bS.set(SS, HS), () => {
            bS.get(SS) === HS && bS.delete(SS)
          }))(SS.current, {
            adjust: SS => {
              gS.current.adjust(SS)
            },
            setFraction: SS => {
              gS.current.setFraction(SS)
            },
            endDrag: () => {
              gS.current.endDrag()
            }
          })
        }), [SS])
      }
  },
  6848: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => bS,
      f: () => XS
    });
    var tS = gS(45);
    const bS = "shaderPack";
    async function XS() {
      var SS;
      let HS = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (SS = await tS.e.getItem(bS, HS)) && void 0 !== SS ? SS : null
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);