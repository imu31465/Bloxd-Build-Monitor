export const id = 125;
export const ids = [125];
export const modules = {
  5401: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => hM,
      f: () => UM,
      h: () => JM,
      j: () => EM
    });
    var OM = iM(44),
      SM = iM(5403),
      jM = iM(4720),
      aM = iM(1440),
      PM = iM(5417),
      nM = iM(1116),
      QM = iM.n(nM),
      zM = iM(1429),
      LM = iM(1830),
      mM = iM(5419),
      HM = iM(1303);

    function hM(MM) {
      let {
        label: rM,
        onClick: iM,
        checked: OM,
        circleInfoText: SM,
        className: PM,
        disabled: nM,
        note: zM
      } = MM;
      return (0, HM.jsxs)("div", {
        "aria-disabled": nM || void 0,
        "data-pad-focusable": !0,
        className: QM()("SettingBox CheckboxContainer", {
          [PM]: PM,
          SettingBoxDisabled: nM
        }),
        onClick: () => {
          nM || iM(!OM)
        },
        children: [(0, HM.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, HM.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, HM.jsx)(jM.c, {
              className: "SettingsCheckbox",
              checked: OM,
              disabled: nM,
              onChange: () => {}
            })
          }), (0, HM.jsxs)("div", {
            className: "CheckboxText",
            children: [rM, SM && (0, HM.jsx)("span", {
              onClick: MM => MM.stopPropagation(),
              children: (0, HM.jsx)(aM.e, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: SM
              })
            })]
          })]
        }), zM && (0, HM.jsx)("div", {
          className: "SettingNote",
          children: zM
        })]
      })
    }

    function JM(MM) {
      let {
        name: rM,
        onChange: iM,
        min: SM,
        max: jM,
        step: PM,
        initValue: nM,
        circleInfoText: zM,
        format: LM,
        className: mM,
        padStep: hM,
        disabled: JM = !1,
        selectableMax: dM,
        cappedNote: yM,
        onChangeComplete: EM
      } = MM;
      const [UM, GM] = (0, OM.useState)(nM), CM = (0, OM.useRef)(nM);
      (0, OM.useEffect)((() => {
        CM.current = nM, GM(nM)
      }), [nM]);
      const eM = void 0 !== dM && dM < jM,
        bM = eM ? {
          "--slider-selectable": (dM - SM) / (jM - SM)
        } : void 0;
      return (0, HM.jsxs)("div", {
        className: QM()("SettingBox SettingsSliderDiv", {
          [mM]: mM,
          SettingBoxDisabled: JM,
          SliderCapped: eM
        }),
        style: bM,
        children: [(0, HM.jsxs)("div", {
          className: "SliderText",
          children: [`${rM}: ${LM?LM(UM):UM}`, zM && (0, HM.jsx)(aM.e, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: zM
          })]
        }), (0, HM.jsx)("div", {
          className: "SliderDiv",
          children: (0, HM.jsx)(lM, {
            value: UM,
            min: SM,
            max: jM,
            step: PM,
            onChange: MM => {
              if (eM && MM >= dM && UM === dM) return;
              const rM = eM ? Math.min(MM, dM) : MM;
              CM.current = rM, GM(rM), iM(rM)
            },
            onChangeComplete: EM && (() => {
              EM(CM.current)
            }),
            format: LM,
            padStep: hM,
            disabled: JM
          })
        }), eM && yM && (0, HM.jsx)("div", {
          className: "SettingNote",
          children: yM
        })]
      })
    }
    const dM = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function yM(MM) {
      var rM;
      return (null !== (rM = String(MM).split(".")[1]) && void 0 !== rM ? rM : "").length
    }

    function lM(MM) {
      let {
        value: rM,
        min: iM,
        max: jM,
        step: aM,
        onChange: PM,
        orientation: nM,
        reverse: QM,
        setIsChanging: zM,
        tooltip: LM,
        labels: hM,
        handleLabel: JM,
        format: lM,
        onChangeStart: EM,
        onChangeComplete: UM,
        padStep: GM,
        disabled: CM = !1
      } = MM;
      const eM = (0, OM.useRef)(null),
        bM = (0, OM.useRef)(null);
      (0, OM.useLayoutEffect)((() => {
        var MM, rM, iM;
        const OM = null !== (MM = null === (rM = eM.current) || void 0 === rM ? void 0 : rM.querySelector(".rangeslider")) && void 0 !== MM ? MM : null;
        null === OM || void 0 === OM || OM.setAttribute("data-pad-slider", ""), null === OM || void 0 === OM || OM.setAttribute("data-pad-focusable", ""), null === OM || void 0 === OM || null === (iM = OM.querySelector(".rangeslider__handle")) || void 0 === iM || iM.setAttribute("data-pad-slider-handle", ""), bM.current = OM
      }), []), (0, OM.useLayoutEffect)((() => {
        var MM, rM;
        CM ? null === (MM = bM.current) || void 0 === MM || MM.setAttribute("aria-disabled", "true") : null === (rM = bM.current) || void 0 === rM || rM.removeAttribute("aria-disabled")
      }), [CM]);
      const wM = Math.max(yM(aM), yM(iM)),
        tM = MM => {
          if (MM >= jM) return jM;
          if (MM <= iM) return iM;
          const rM = Number((Math.round((MM - iM) / aM) * aM + iM).toFixed(wM));
          return Math.min(jM, Math.max(iM, rM))
        },
        gM = (0, OM.useRef)(UM);
      gM.current = UM, (0, OM.useEffect)((() => {
        const MM = eM.current;
        if (!MM) return;
        const rM = MM => {
          var rM;
          dM.has(MM.key) && (null === (rM = gM.current) || void 0 === rM || rM.call(gM))
        };
        return MM.addEventListener("keyup", rM), () => {
          MM.removeEventListener("keyup", rM)
        }
      }), []);
      const uM = (0, OM.useRef)(!1);
      return (0, mM.d)(bM, {
        adjust: MM => {
          if (CM) return;
          const OM = null !== GM && void 0 !== GM ? GM : Math.max(aM, Math.round((jM - iM) / 20 / aM) * aM),
            SM = tM(rM + MM * OM * (QM ? -1 : 1));
          SM !== rM && (null === EM || void 0 === EM || EM(), PM(SM), null === UM || void 0 === UM || UM())
        },
        setFraction: MM => {
          if (CM) return;
          const OM = tM(iM + (QM ? 1 - MM : MM) * (jM - iM));
          OM !== rM && (uM.current || (uM.current = !0, null === EM || void 0 === EM || EM()), PM(OM))
        },
        endDrag: () => {
          uM.current && (uM.current = !1, null === UM || void 0 === UM || UM())
        }
      }), (0, HM.jsx)("div", {
        ref: eM,
        style: {
          display: "contents"
        },
        children: (0, HM.jsx)(SM.d, {
          value: rM,
          min: iM,
          max: jM,
          step: aM,
          onChange: MM => {
            PM(tM(MM))
          },
          orientation: nM,
          reverse: QM,
          tooltip: LM,
          labels: hM,
          handleLabel: JM,
          format: lM,
          onChangeStart: () => {
            null === EM || void 0 === EM || EM(), null === zM || void 0 === zM || zM(!0)
          },
          onChangeComplete: () => {
            null === zM || void 0 === zM || zM(!1), null === UM || void 0 === UM || UM()
          }
        })
      })
    }
    async function EM() {
      const MM = zM.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await MM.getResult() && (0, LM.reloadBloxd)()
    }

    function UM(MM) {
      let {
        label: rM,
        options: iM,
        value: OM,
        onChange: SM,
        circleInfoText: jM
      } = MM;
      return (0, HM.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, HM.jsxs)("div", {
          className: "SliderText",
          children: [rM, jM && (0, HM.jsx)(aM.e, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: jM
          })]
        }), (0, HM.jsx)(PM.e, {
          ariaLabel: rM,
          options: iM,
          value: OM,
          onChange: SM
        })]
      })
    }
  },
  7150: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      default: () => TM
    });
    var OM = iM(44),
      SM = iM(1608),
      jM = iM(7054),
      aM = iM(1229),
      PM = iM(332),
      nM = iM(1630),
      QM = iM(1396),
      zM = iM(1591),
      LM = iM(1520),
      mM = iM(1440),
      HM = iM(1694),
      hM = iM(2818),
      JM = iM(2963),
      dM = iM(4934),
      yM = iM(1142),
      lM = iM(1573),
      EM = iM(83),
      UM = iM(1188);
    const GM = iM.p + "static/media/bloxdhubLogo.6a6c367af2ad6e6f1eb3.webp";
    var CM = iM(1116),
      eM = iM.n(CM),
      bM = iM(1398),
      wM = iM(1429),
      tM = iM(7051),
      gM = iM(1303);
    const uM = (0, OM.lazy)((() => Promise.all([iM.e(121), iM.e(89), iM.e(149), iM.e(148), iM.e(126), iM.e(706)]).then((() => iM(7093))).then((MM => ({
      default: MM.ShaderPackPublishForm
    })))));

    function RM(MM) {
      let {
        details: rM,
        owner: iM,
        onChanged: SM
      } = MM;
      const {
        t: aM
      } = (0, UM.A)(), PM = (0, zM.useNavigatePreserveSearch)(), {
        userContext: nM
      } = (0, yM.b)(), [mM, HM] = (0, OM.useState)(!1), [hM, JM] = (0, OM.useState)(null), [dM, EM] = (0, OM.useState)(!1), {
        packId: GM,
        name: CM,
        description: RM,
        live: pM
      } = rM;
      async function WM(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SM;
        HM(!0), JM(null);
        try {
          await MM(), rM()
        } catch (iM) {
          console.error("Failed to change a shader pack", iM), JM((0, tM.u)(iM, aM, "shaderPackListing:ownerActionFailed"))
        } finally {
          HM(!1)
        }
      }
      const sM = (0, tM.q)(nM);
      return (0, gM.jsxs)("section", {
        className: "ShaderPackOwnerPanel",
        children: [(0, gM.jsx)("h2", {
          className: "ShaderPackSectionTitle",
          children: aM("general:manage")
        }), (0, tM.S)(iM, !(null === pM || void 0 === pM || !pM.renderId), Date.now(), aM).map((MM => (0, gM.jsxs)("div", {
          className: eM()("ShaderPackOwnerNotice", {
            Warning: "warning" === MM.tone
          }),
          children: [(0, gM.jsx)(bM.b, {
            name: "warning" === MM.tone ? "triangle-exclamation" : "circle-info"
          }), (0, gM.jsxs)("div", {
            children: [MM.text, MM.detail && (0, gM.jsx)("pre", {
              className: "ShaderPackOwnerNoticeDetail",
              children: MM.detail
            })]
          })]
        }, MM.text))), rM.ban && (0, gM.jsxs)("div", {
          className: "ShaderPackOwnerNotice Warning",
          children: [(0, gM.jsx)(bM.b, {
            name: "ban"
          }), (0, gM.jsxs)("div", {
            children: ["Banned by ", rM.ban.byName, " on ", new Date(rM.ban.at).toLocaleString()]
          })]
        }), hM && (0, gM.jsx)("div", {
          className: "ShaderPackOwnerError",
          children: hM
        }), (0, gM.jsxs)("div", {
          className: "ShaderPackOwnerActions",
          children: [(0, gM.jsxs)(LM.V, {
            disabled: mM,
            onClick: () => {
              !async function() {
                const MM = await wM.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:renameTitle",
                  initialValue: CM,
                  maxLength: jM.z,
                  submitText: "general:save",
                  validate: MM => MM.trim().length < jM.D ? aM("shaderPackListing:nameTooShort", {
                    min: String(jM.D)
                  }) : null
                }).getResult();
                "notificationTornDown" !== MM && "submit" === (null === MM || void 0 === MM ? void 0 : MM.type) && MM.value.trim() !== CM && await WM((() => lM.c.updateShaderPack(nM, {
                  packId: GM,
                  name: MM.value.trim()
                })))
              }()
            },
            children: [(0, gM.jsx)(bM.b, {
              name: "pen"
            }), " ", aM("shaderPackListing:rename")]
          }), (0, gM.jsxs)(LM.V, {
            disabled: mM,
            onClick: () => {
              !async function() {
                const MM = await wM.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:editDescription",
                  initialValue: RM,
                  maxLength: jM.t,
                  multiline: !0,
                  allowEmptySubmit: !0,
                  submitText: "general:save"
                }).getResult();
                "notificationTornDown" !== MM && "submit" === (null === MM || void 0 === MM ? void 0 : MM.type) && MM.value.trim() !== RM && await WM((() => lM.c.updateShaderPack(nM, {
                  packId: GM,
                  description: MM.value.trim()
                })))
              }()
            },
            children: [(0, gM.jsx)(bM.b, {
              name: "file-lines"
            }), " ", aM("shaderPackListing:editDescription")]
          }), (0, gM.jsxs)(LM.V, {
            disabled: mM || iM.isBanned && !iM.listed,
            onClick: () => {
              WM((() => lM.c.updateShaderPack(nM, {
                packId: GM,
                listed: !iM.listed
              })))
            },
            children: [(0, gM.jsx)(bM.b, {
              name: iM.listed ? "eye-slash" : "eye"
            }), " ", aM(iM.listed ? "shaderPackListing:unlist" : "shaderPackListing:relist")]
          }), !iM.isBanned && (0, gM.jsxs)(LM.e, {
            disabled: mM,
            onClick: () => {
              EM(!dM)
            },
            children: [(0, gM.jsx)(bM.b, {
              name: "upload"
            }), " ", aM("shaderPackListing:uploadVersion")]
          }), (0, gM.jsxs)(LM.N, {
            disabled: mM || iM.isBanned,
            onClick: () => {
              !async function() {
                !0 === await wM.NotificationProvider.showPromptPopup({
                  title: "shaderPackListing:deleteTitle",
                  subtitle: "shaderPackListing:deleteSubtitle",
                  confirmText: "general:delete",
                  cancelText: "general:cancel",
                  destructive: !0
                }).getResult() && await WM((() => lM.c.deleteShaderPack(nM, GM)), (() => {
                  PM(`${tM.P}?section=mine`, {
                    replace: !0
                  })
                }))
              }()
            },
            children: [(0, gM.jsx)(bM.b, {
              name: "trash-can"
            }), " ", aM("general:delete")]
          }), sM && (0, gM.jsxs)(LM.N, {
            disabled: mM,
            onClick: () => {
              WM((() => lM.c.setShaderPackBanned(nM, GM, !iM.isBanned)))
            },
            children: [(0, gM.jsx)(bM.b, {
              name: iM.isBanned ? "circle-check" : "ban"
            }), " ", iM.isBanned ? "Unban" : "Ban"]
          })]
        }), dM && (0, gM.jsx)(OM.Suspense, {
          fallback: (0, gM.jsx)(QM.d, {}),
          children: (0, gM.jsx)(uM, {
            existing: {
              packId: GM,
              name: CM,
              description: RM
            },
            onPublished: () => {
              EM(!1), SM()
            }
          })
        })]
      })
    }
    var pM = iM(65),
      WM = iM(2e3),
      sM = iM(1287),
      DM = iM(5419),
      kM = iM(1202),
      ZM = iM(7068),
      oM = iM(7061),
      fM = iM(7081);

    function YM(MM) {
      let {
        item: rM
      } = MM;
      const {
        t: iM
      } = (0, UM.A)(), [SM] = (0, ZM.h)(), [aM, PM] = (0, OM.useState)(SM), [nM, QM] = (0, OM.useState)(!1), [zM, LM] = (0, OM.useState)(!1), {
        s3Url: mM
      } = kM.clientSideServerUrls, {
        width: HM,
        height: hM
      } = jM.v.large, JM = (0, jM.w)(mM, rM, aM, "large"), {
        renderVersion: dM
      } = rM;
      return (0, gM.jsxs)("div", {
        className: "ShaderPackPreviews",
        children: [(0, gM.jsx)(fM.c, {
          selected: aM,
          onSelect: MM => {
            PM(MM), QM(!1)
          },
          imageUrl: MM => (0, jM.w)(mM, rM, MM, "thumb")
        }), (0, gM.jsxs)("div", {
          className: "ShaderPackPreviewStage",
          children: [!nM && (0, gM.jsxs)("button", {
            type: "button",
            className: "ShaderPackPreviewMain",
            title: null === dM ? void 0 : iM("shaderPackListing:fullSize"),
            disabled: null === dM,
            onClick: () => {
              LM(!0)
            },
            children: [(0, gM.jsx)("img", {
              src: JM,
              width: HM,
              height: hM,
              alt: iM(tM.db[aM]),
              draggable: !1
            }), (0, gM.jsx)(oM.e, {
              item: rM
            })]
          }), !nM && null !== dM && (0, gM.jsxs)(vM, {
            side: "Right",
            onClick: () => {
              QM(!0)
            },
            children: [(0, gM.jsx)(bM.b, {
              name: "arrows-left-right"
            }), " ", iM("shaderPackListing:compare")]
          }), nM && null !== dM && (0, gM.jsx)(xM, {
            item: rM,
            packUrl: JM,
            baselineUrl: (0, jM.q)(mM, dM, aM, "large")
          }), nM && (0, gM.jsx)(vM, {
            side: "Left",
            onClick: () => {
              QM(!1)
            },
            children: iM("shaderPackListing:withPack")
          }), nM && (0, gM.jsx)(vM, {
            side: "Right",
            onClick: () => {
              QM(!1)
            },
            children: iM("shaderPackListing:withoutPack")
          })]
        }), zM && (0, gM.jsx)(NM, {
          fullUrl: (0, jM.w)(mM, rM, aM, "full"),
          largeUrl: JM,
          alt: iM(tM.db[aM]),
          onClose: () => {
            LM(!1)
          }
        })]
      })
    }

    function NM(MM) {
      let {
        fullUrl: rM,
        largeUrl: iM,
        alt: SM,
        onClose: jM
      } = MM;
      const aM = (0, OM.useRef)(null);
      return (0, sM.v)("popup", aM, jM), (0, OM.useEffect)((() => {
        function MM(MM) {
          "Escape" === MM.key && (MM.stopPropagation(), jM())
        }
        return window.addEventListener("keydown", MM, !0), () => {
          window.removeEventListener("keydown", MM, !0)
        }
      }), [jM]), (0, pM.createPortal)((0, gM.jsxs)("div", {
        ref: aM,
        className: "ShaderPackFullSize",
        onClick: jM,
        children: [(0, gM.jsx)("img", {
          className: "ShaderPackFullSizeImage",
          src: rM,
          alt: SM,
          draggable: !1,
          style: {
            backgroundImage: `url(${iM})`
          }
        }), (0, gM.jsx)(LM.l, {
          className: "ShaderPackFullSizeClose",
          onClick: jM
        })]
      }), document.body)
    }
    const AM = 5;

    function xM(MM) {
      let {
        item: rM,
        packUrl: iM,
        baselineUrl: SM
      } = MM;
      const {
        t: aM
      } = (0, UM.A)(), [PM, nM] = (0, OM.useState)(50), QM = (0, OM.useRef)(!1), zM = (0, OM.useRef)(null), {
        width: LM,
        height: mM
      } = jM.v.large;

      function HM(MM) {
        nM((rM => (0, WM.f)(rM + MM, 0, 100)))
      }

      function hM(MM) {
        const rM = MM.currentTarget.getBoundingClientRect();
        nM((0, WM.f)((MM.clientX - rM.left) / rM.width * 100, 0, 100))
      }
      return (0, DM.d)(zM, {
        adjust: MM => {
          HM(MM * AM)
        },
        setFraction: MM => {
          nM(100 * MM)
        },
        endDrag: () => {}
      }), (0, gM.jsxs)("div", {
        ref: zM,
        className: "ShaderPackCompare",
        "data-pad-slider": "",
        "data-pad-focusable": "",
        role: "slider",
        tabIndex: 0,
        "aria-label": aM("shaderPackListing:compare"),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(PM),
        style: {
          "--split": `${PM}%`
        },
        onKeyDown: function(MM) {
          const rM = "ArrowLeft" === MM.key ? -AM : "ArrowRight" === MM.key ? AM : 0;
          0 !== rM && (MM.preventDefault(), HM(rM))
        },
        onPointerDown: MM => {
          QM.current = !0, MM.currentTarget.setPointerCapture(MM.pointerId), hM(MM)
        },
        onPointerMove: MM => {
          QM.current && hM(MM)
        },
        onPointerUp: () => {
          QM.current = !1
        },
        onPointerCancel: () => {
          QM.current = !1
        },
        children: [(0, gM.jsx)("img", {
          className: "ShaderPackCompareBaseline",
          src: SM,
          width: LM,
          height: mM,
          alt: "",
          draggable: !1,
          style: {
            backgroundImage: `url(${iM})`
          }
        }), (0, gM.jsx)("div", {
          className: "ShaderPackCompareLine"
        }), (0, gM.jsx)("img", {
          className: "ShaderPackComparePack",
          src: iM,
          width: LM,
          height: mM,
          alt: "",
          draggable: !1
        }), (0, gM.jsx)(oM.e, {
          item: rM,
          className: "ShaderPackCompareNotice"
        })]
      })
    }

    function vM(MM) {
      let {
        side: rM,
        onClick: iM,
        children: OM
      } = MM;
      return (0, gM.jsx)("button", {
        type: "button",
        className: `ShaderPackStageButton ${rM}`,
        onClick: iM,
        children: (0, gM.jsx)("span", {
          className: "ShaderPackStageButtonFace SmallTextBold",
          children: OM
        })
      })
    }
    var FM = iM(5401),
      BM = iM(308),
      XM = iM(7148);
    const IM = {
      compiler: "shaderPack:compilerUnavailable",
      download: "shaderPackListing:useDownloadFailed",
      apiVersion: "shaderPackListing:useOtherApiVersion",
      invalid: "shaderPackListing:useInvalid",
      errors: "shaderPackListing:useFailsHere",
      save: "shaderPack:saveFailed"
    };

    function KM(MM) {
      const {
        userContext: rM
      } = (0, yM.b)(), [SM, jM] = (0, OM.useState)(null), [aM, PM] = (0, OM.useState)(!1), [nM, QM] = (0, OM.useState)(!1), [zM, LM] = (0, OM.useState)(null), mM = null === MM || void 0 === MM ? void 0 : MM.packId, HM = null === MM || void 0 === MM ? void 0 : MM.sourceHash;
      return (0, OM.useEffect)((() => {
        if (PM(!1), LM(null), void 0 === mM) return;
        let MM = !1;
        return Promise.all([(0, EM.hasUsableWebGpuAdapter)(), (0, XM.d)()]).then((rM => {
          let [iM, OM] = rM;
          var SM;
          MM || (jM(iM), PM((null === OM || void 0 === OM || null === (SM = OM.listing) || void 0 === SM ? void 0 : SM.packId) === mM && OM.listing.sourceHash === HM))
        })).catch((rM => {
          console.error("Failed to check whether this shader pack can be used", rM), MM || jM(!1)
        })), () => {
          MM = !0
        }
      }), [mM, HM]), {
        webGpuUsable: SM,
        inUse: aM,
        busy: nM,
        errorKey: zM,
        use: () => {
          null !== MM && async function(MM) {
            QM(!0), LM(null);
            try {
              const {
                installListedShaderPack: OM
              } = await Promise.all([iM.e(89), iM.e(149), iM.e(127)]).then((() => iM(41591))), SM = await OM({
                packId: MM.packId,
                sourceHash: MM.sourceHash,
                name: MM.name,
                ownerName: MM.ownerName,
                description: MM.description
              });
              if ("failed" === SM.kind) return void LM(IM[SM.reason]);
              PM(!0), lM.c.recordShaderPackDownload(rM, MM.packId).catch((MM => {
                console.error("Failed to count a shader pack's download", MM)
              })), (0, FM.j)()
            } catch (OM) {
              console.error("Failed to use the shader pack", OM), LM("shaderPack:unexpectedError")
            } finally {
              QM(!1)
            }
          }(MM)
        }
      }
    }

    function qM(MM) {
      let {
        packUse: rM
      } = MM;
      const {
        t: iM
      } = (0, UM.A)(), {
        webGpuUsable: OM,
        inUse: SM,
        busy: jM,
        errorKey: aM,
        use: PM
      } = rM;
      return (0, gM.jsxs)("div", {
        className: "ShaderPackUse",
        children: [(0, gM.jsxs)(LM.p, {
          disabled: !0 !== OM || SM,
          loading: jM,
          onClick: PM,
          children: [(0, gM.jsx)(bM.b, {
            name: SM ? "check" : "download"
          }), " ", iM(SM ? "shaderPackListing:inUse" : "shaderPackListing:use")]
        }), !1 === OM && (0, gM.jsx)("div", {
          className: "ShaderPackUseNote",
          children: iM((0, BM.k)() ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), aM && (0, gM.jsx)("div", {
          className: "ShaderPackUseNote Error",
          children: iM(aM)
        })]
      })
    }

    function TM() {
      var MM;
      const {
        t: rM
      } = (0, UM.A)(), iM = (0, zM.useNavigatePreserveSearch)(), {
        packId: jM
      } = (0, SM.D)(), {
        userContext: aM,
        isUserContextUpdating: PM
      } = (0, yM.b)(), [mM, hM] = (0, OM.useState)(null), [JM, EM] = (0, OM.useState)(null), [GM, CM] = (0, OM.useState)(0), eM = (0, OM.useRef)(0);

      function bM() {
        var MM;
        null !== (MM = (0, zM.getPreviousLocation)()) && void 0 !== MM && MM.startsWith(tM.P) ? iM(-1) : iM(tM.P)
      }(0, dM.e)(bM), (0, ZM.c)(), (0, OM.useEffect)((() => {
        if (PM || void 0 === jM) return;
        const MM = ++eM.current;
        EM(null), lM.c.getShaderPack(aM, jM).then((rM => {
          eM.current === MM && hM(rM)
        })).catch((rM => {
          eM.current === MM && (console.error("Failed to get the shader pack", rM), hM(null), EM({
            error: rM
          }))
        }))
      }), [jM, aM, PM, GM]);
      const wM = () => {
          CM((MM => MM + 1))
        },
        uM = (null === mM || void 0 === mM ? void 0 : mM.packId) === jM ? mM : null,
        pM = (0, ZM.l)(),
        WM = KM(null !== (MM = null === uM || void 0 === uM ? void 0 : uM.live) && void 0 !== MM ? MM : null),
        sM = null !== uM && void 0 !== uM && uM.live ? (0, gM.jsx)(VM, {
          item: uM.live,
          favourites: pM,
          packUse: WM
        }) : null;
      return (0, gM.jsxs)("article", {
        className: "ShaderPackInformation AnimFadeIn",
        children: [null !== uM && (0, gM.jsx)(HM.c, {
          meta: (0, nM.Z)(uM.name)
        }), (0, gM.jsx)(LM.c, {
          onClick: bM,
          children: rM("shaderPackListing:backToPacks")
        }), null === uM && null === JM && (0, gM.jsx)("div", {
          className: "ShaderPackInformationMessage",
          children: (0, gM.jsx)(QM.d, {})
        }), null !== JM && (0, gM.jsxs)("div", {
          className: "ShaderPackInformationMessage",
          children: [(0, tM.u)(JM.error, rM, "shaderPackListing:loadPackFailed"), (0, gM.jsx)(LM.e, {
            onClick: wM,
            children: rM("general:tryAgain")
          })]
        }), null !== uM && null === JM && (0, gM.jsxs)("div", {
          className: "ShaderPackInformationBody",
          children: [(0, gM.jsxs)("header", {
            className: "ShaderPackInformationHeader",
            children: [(0, gM.jsx)("h1", {
              className: "FullyFancyText",
              children: uM.name
            }), sM]
          }), uM.live && (0, gM.jsx)(YM, {
            item: uM.live
          }), uM.live && (0, gM.jsx)(cM, {
            item: uM.live,
            ownerPreview: uM.ownerPreview,
            bloxdhubSlug: uM.bloxdhubSlug,
            actions: sM
          }), uM.owner && (0, gM.jsx)(RM, {
            details: uM,
            owner: uM.owner,
            onChanged: wM
          })]
        })]
      })
    }

    function VM(MM) {
      let {
        item: rM,
        favourites: iM,
        packUse: OM
      } = MM;
      const SM = iM.isFavourite(rM.packId);
      return (0, gM.jsxs)("div", {
        className: "ShaderPackInformationActions",
        children: [EM.featureFlags.settings.canUseShaderPacks && (0, gM.jsx)(qM, {
          packUse: OM
        }), (0, gM.jsx)(LM.y, {
          className: "ShaderPackInformationLike",
          onClick: () => {
            iM.toggle(rM.packId)
          },
          isLiked: !0 === SM,
          isLoading: null === SM
        })]
      })
    }

    function cM(MM) {
      let {
        item: rM,
        ownerPreview: iM,
        bloxdhubSlug: OM,
        actions: SM
      } = MM;
      const {
        t: PM
      } = (0, UM.A)(), nM = (0, JM.p)(), QM = null === OM ? null : (0, jM.e)(OM);
      return (0, gM.jsxs)("div", {
        className: "ShaderPackFacts",
        children: [rM.description && (0, gM.jsx)("p", {
          className: "ShaderPackDescription",
          children: rM.description
        }), (0, gM.jsxs)("div", {
          className: "ShaderPackFeatureList",
          children: [(null !== iM || null !== QM) && (0, gM.jsx)("div", {
            className: "ShaderPackAuthor",
            children: null !== iM ? (0, gM.jsxs)(gM.Fragment, {
              children: [(0, gM.jsx)(hM.f, {
                playerSocialPreview: iM,
                showLocation: !1,
                linkToProfile: !0
              }), null !== QM && (0, gM.jsx)("a", {
                className: "ShaderPackBloxdhubLogo",
                href: QM,
                target: "_blank",
                rel: "noopener noreferrer",
                children: (0, gM.jsx)("img", {
                  src: GM,
                  alt: jM.b
                })
              })]
            }) : (0, gM.jsxs)("a", {
              className: "ShaderPackBloxdhubName",
              href: QM,
              target: "_blank",
              rel: "noopener noreferrer",
              children: [jM.b, (0, gM.jsx)("img", {
                src: GM,
                alt: ""
              })]
            })
          }), tM.w.filter((MM => rM.features.includes(MM))).map((MM => (0, gM.jsx)(zM.LinkPreserveSearch, {
            className: "ShaderPackFeature",
            to: (0, tM.F)(MM),
            children: PM(tM.I[MM])
          }, MM)))]
        }), SM, (0, gM.jsxs)("dl", {
          className: "ShaderPackFactList",
          children: [(0, gM.jsxs)("div", {
            children: [(0, gM.jsx)("dt", {
              children: PM("shaderPackListing:downloads")
            }), (0, gM.jsx)("dd", {
              children: (0, aM.T)(rM.downloads)
            })]
          }), (0, gM.jsx)(Mr, {
            label: PM("shaderPackListing:updated"),
            time: rM.listedUpdatedAt,
            now: nM
          }), (0, gM.jsx)(Mr, {
            label: PM("shaderPackListing:created"),
            time: rM.publishedAt,
            now: nM
          }), null !== rM.gpuCost && (0, gM.jsxs)("div", {
            children: [(0, gM.jsx)("dt", {
              children: PM("shaderPackListing:lag")
            }), (0, gM.jsx)("dd", {
              children: PM("shaderPackListing:lagPercent", {
                percent: String((0, tM.N)(rM.gpuCost))
              })
            })]
          }), (0, gM.jsxs)("div", {
            children: [(0, gM.jsx)("dt", {
              children: PM("shaderPackListing:size")
            }), (0, gM.jsx)("dd", {
              children: PM("shaderPackListing:sizeValue", {
                kilobytes: String((0, tM.K)(rM.sourceBytes))
              })
            })]
          }), (0, gM.jsxs)("div", {
            children: [(0, gM.jsx)("dt", {
              children: PM("shaderPackListing:files")
            }), (0, gM.jsx)("dd", {
              children: rM.fileCount
            })]
          })]
        })]
      })
    }

    function Mr(MM) {
      let {
        label: rM,
        time: iM,
        now: OM
      } = MM;
      const {
        t: SM,
        selectedLanguage: jM
      } = (0, UM.A)(), aM = new Date(iM);
      let nM = aM.toLocaleDateString();
      if (OM - iM <= 30 * PM.i) {
        const MM = (0, UM.n)(jM.code, "shaderPackListing:timeAgo");
        nM = SM("shaderPackListing:timeAgo", {
          time: (0, PM.db)(MM, iM, OM)
        })
      }
      return (0, gM.jsx)(mM.i, {
        tooltipInner: aM.toLocaleString(),
        children: (0, gM.jsxs)("div", {
          children: [(0, gM.jsx)("dt", {
            children: rM
          }), (0, gM.jsx)("dd", {
            children: nM
          })]
        })
      })
    }
  },
  5417: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => aM
    });
    var OM = iM(1116),
      SM = iM.n(OM),
      jM = iM(1303);

    function aM(MM) {
      let {
        options: rM,
        value: iM,
        onChange: OM,
        ariaLabel: aM,
        className: PM,
        reselectable: nM = !1,
        keepsFocus: QM = !1,
        padTabs: zM
      } = MM;
      const LM = void 0 !== zM;
      return (0, jM.jsx)("div", {
        className: SM()("SegmentedToggle", PM),
        role: "group",
        "aria-label": aM,
        "data-pad-tabs": zM,
        children: rM.map((MM => {
          const rM = MM.value === iM;
          return (0, jM.jsx)("button", {
            type: "button",
            "aria-pressed": rM,
            "data-pad-tab": LM || void 0,
            "data-pad-selected": LM && rM ? "true" : void 0,
            "data-pad-default-focus": LM && rM || void 0,
            "aria-label": MM.ariaLabel,
            title: MM.ariaLabel,
            className: SM()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: rM
            }),
            onMouseDown: QM ? MM => {
              MM.preventDefault()
            } : void 0,
            onClick: () => {
              rM && !nM || OM(MM.value)
            },
            children: MM.label
          }, MM.value)
        }))
      })
    }
  },
  5419: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => jM,
      d: () => aM
    });
    var OM = iM(44);
    const SM = new WeakMap,
      jM = MM => {
        var rM;
        const iM = MM.closest("[data-pad-slider]");
        return iM && null !== (rM = SM.get(iM)) && void 0 !== rM ? rM : null
      },
      aM = (MM, rM) => {
        const iM = (0, OM.useRef)(rM);
        iM.current = rM, (0, OM.useEffect)((() => {
          if (MM.current) return ((MM, rM) => (SM.set(MM, rM), () => {
            SM.get(MM) === rM && SM.delete(MM)
          }))(MM.current, {
            adjust: MM => {
              iM.current.adjust(MM)
            },
            setFraction: MM => {
              iM.current.setFraction(MM)
            },
            endDrag: () => {
              iM.current.endDrag()
            }
          })
        }), [MM])
      }
  },
  7148: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => SM,
      d: () => jM
    });
    var OM = iM(30);
    const SM = "shaderPack";
    async function jM() {
      var MM;
      let rM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (MM = await OM.f.getItem(SM, rM)) && void 0 !== MM ? MM : null
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);