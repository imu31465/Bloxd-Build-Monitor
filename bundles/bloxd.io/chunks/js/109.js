export const id = 109;
export const ids = [109];
export const modules = {
  4770: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => tD,
      g: () => gD,
      i: () => ZD,
      j: () => ND
    });
    var ID = cD(53),
      pD = cD(4774),
      iD = cD(4182),
      fD = cD(1356),
      bD = cD(4799),
      QD = cD(1049),
      wD = cD.n(QD),
      SD = cD(1340),
      BD = cD(1701),
      yD = cD(4806),
      MD = cD(1093);

    function tD(DD) {
      let {
        label: CD,
        onClick: cD,
        checked: ID,
        circleInfoText: pD,
        className: bD,
        disabled: QD,
        note: SD
      } = DD;
      return (0, MD.jsxs)("div", {
        "aria-disabled": QD || void 0,
        "data-pad-focusable": !0,
        className: wD()("SettingBox CheckboxContainer", {
          [bD]: bD,
          SettingBoxDisabled: QD
        }),
        onClick: () => {
          QD || cD(!ID)
        },
        children: [(0, MD.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, MD.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, MD.jsx)(iD.e, {
              className: "SettingsCheckbox",
              checked: ID,
              disabled: QD,
              onChange: () => {}
            })
          }), (0, MD.jsxs)("div", {
            className: "CheckboxText",
            children: [CD, pD && (0, MD.jsx)("span", {
              onClick: DD => DD.stopPropagation(),
              children: (0, MD.jsx)(fD.d, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: pD
              })
            })]
          })]
        }), SD && (0, MD.jsx)("div", {
          className: "SettingNote",
          children: SD
        })]
      })
    }

    function ZD(DD) {
      let {
        name: CD,
        onChange: cD,
        min: pD,
        max: iD,
        step: bD,
        initValue: QD,
        circleInfoText: SD,
        format: BD,
        className: yD,
        padStep: tD,
        disabled: ZD = !1,
        selectableMax: oD,
        cappedNote: ND,
        onChangeComplete: gD
      } = DD;
      const [XD, mD] = (0, ID.useState)(QD), nD = (0, ID.useRef)(QD);
      (0, ID.useEffect)((() => {
        nD.current = QD, mD(QD)
      }), [QD]);
      const OD = void 0 !== oD && oD < iD,
        PD = OD ? {
          "--slider-selectable": (oD - pD) / (iD - pD)
        } : void 0;
      return (0, MD.jsxs)("div", {
        className: wD()("SettingBox SettingsSliderDiv", {
          [yD]: yD,
          SettingBoxDisabled: ZD,
          SliderCapped: OD
        }),
        style: PD,
        children: [(0, MD.jsxs)("div", {
          className: "SliderText",
          children: [`${CD}: ${BD?BD(XD):XD}`, SD && (0, MD.jsx)(fD.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: SD
          })]
        }), (0, MD.jsx)("div", {
          className: "SliderDiv",
          children: (0, MD.jsx)(vD, {
            value: XD,
            min: pD,
            max: iD,
            step: bD,
            onChange: DD => {
              if (OD && DD >= oD && XD === oD) return;
              const CD = OD ? Math.min(DD, oD) : DD;
              nD.current = CD, mD(CD), cD(CD)
            },
            onChangeComplete: gD && (() => {
              gD(nD.current)
            }),
            format: BD,
            padStep: tD,
            disabled: ZD
          })
        }), OD && ND && (0, MD.jsx)("div", {
          className: "SettingNote",
          children: ND
        })]
      })
    }
    const oD = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function vD(DD) {
      var CD;
      let {
        value: cD,
        min: iD,
        max: fD,
        step: bD,
        onChange: QD,
        orientation: wD,
        reverse: SD,
        setIsChanging: BD,
        tooltip: tD,
        labels: ZD,
        handleLabel: vD,
        format: ND,
        onChangeStart: gD,
        onChangeComplete: XD,
        padStep: mD,
        disabled: nD = !1
      } = DD;
      const OD = (0, ID.useRef)(null),
        PD = (0, ID.useRef)(null);
      (0, ID.useLayoutEffect)((() => {
        var DD, CD, cD;
        const ID = null !== (DD = null === (CD = OD.current) || void 0 === CD ? void 0 : CD.querySelector(".rangeslider")) && void 0 !== DD ? DD : null;
        null === ID || void 0 === ID || ID.setAttribute("data-pad-slider", ""), null === ID || void 0 === ID || ID.setAttribute("data-pad-focusable", ""), null === ID || void 0 === ID || null === (cD = ID.querySelector(".rangeslider__handle")) || void 0 === cD || cD.setAttribute("data-pad-slider-handle", ""), PD.current = ID
      }), []), (0, ID.useLayoutEffect)((() => {
        var DD, CD;
        nD ? null === (DD = PD.current) || void 0 === DD || DD.setAttribute("aria-disabled", "true") : null === (CD = PD.current) || void 0 === CD || CD.removeAttribute("aria-disabled")
      }), [nD]);
      const HD = (null !== (CD = String(bD).split(".")[1]) && void 0 !== CD ? CD : "").length,
        UD = DD => {
          const CD = Number((Math.round((DD - iD) / bD) * bD + iD).toFixed(HD));
          return Math.min(fD, Math.max(iD, CD))
        },
        xD = (0, ID.useRef)(XD);
      xD.current = XD, (0, ID.useEffect)((() => {
        const DD = OD.current;
        if (!DD) return;
        const CD = DD => {
          var CD;
          oD.has(DD.key) && (null === (CD = xD.current) || void 0 === CD || CD.call(xD))
        };
        return DD.addEventListener("keyup", CD), () => {
          DD.removeEventListener("keyup", CD)
        }
      }), []);
      const qD = (0, ID.useRef)(!1);
      return (0, yD.g)(PD, {
        adjust: DD => {
          if (nD) return;
          const CD = null !== mD && void 0 !== mD ? mD : Math.max(bD, Math.round((fD - iD) / 20 / bD) * bD),
            ID = UD(cD + DD * CD * (SD ? -1 : 1));
          ID !== cD && (null === gD || void 0 === gD || gD(), QD(ID), null === XD || void 0 === XD || XD())
        },
        setFraction: DD => {
          if (nD) return;
          const CD = UD(iD + (SD ? 1 - DD : DD) * (fD - iD));
          CD !== cD && (qD.current || (qD.current = !0, null === gD || void 0 === gD || gD()), QD(CD))
        },
        endDrag: () => {
          qD.current && (qD.current = !1, null === XD || void 0 === XD || XD())
        }
      }), (0, MD.jsx)("div", {
        ref: OD,
        style: {
          display: "contents"
        },
        children: (0, MD.jsx)(pD.e, {
          value: cD,
          min: iD,
          max: fD,
          step: bD,
          onChange: QD,
          orientation: wD,
          reverse: SD,
          tooltip: tD,
          labels: ZD,
          handleLabel: vD,
          format: ND,
          onChangeStart: () => {
            null === gD || void 0 === gD || gD(), null === BD || void 0 === BD || BD(!0)
          },
          onChangeComplete: () => {
            null === BD || void 0 === BD || BD(!1), null === XD || void 0 === XD || XD()
          }
        })
      })
    }
    async function ND() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      const CD = SD.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: "",
        unlockPointerKey: DD
      });
      !0 === await CD.getResult() && (0, BD.reloadBloxd)()
    }

    function gD(DD) {
      let {
        label: CD,
        options: cD,
        value: ID,
        onChange: pD,
        circleInfoText: iD
      } = DD;
      return (0, MD.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, MD.jsxs)("div", {
          className: "SliderText",
          children: [CD, iD && (0, MD.jsx)(fD.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: iD
          })]
        }), (0, MD.jsx)(bD.b, {
          ariaLabel: CD,
          options: cD,
          value: ID,
          onChange: pD
        })]
      })
    }
  },
  6418: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      default: () => uD
    });
    var ID = cD(53),
      pD = cD(1517),
      iD = cD(6298),
      fD = cD(1221),
      bD = cD(326),
      QD = cD(1328),
      wD = cD(1508),
      SD = cD(1442),
      BD = cD(1356),
      yD = cD(2466),
      MD = cD(2607),
      tD = cD(4346),
      ZD = cD(1120),
      oD = cD(1497),
      vD = cD(90),
      ND = cD(1192);
    const gD = cD.p + "static/media/bloxdhubLogo.6a6c367af2ad6e6f1eb3.webp";
    var XD = cD(1049),
      mD = cD.n(XD),
      nD = cD(1064),
      OD = cD(1340),
      PD = cD(6291),
      HD = cD(1093);
    const UD = (0, ID.lazy)((() => Promise.all([cD.e(105), cD.e(74), cD.e(131), cD.e(125), cD.e(124)]).then((() => cD(6337))).then((DD => ({
      default: DD.ShaderPackPublishForm
    })))));

    function xD(DD) {
      let {
        details: CD,
        owner: cD,
        onChanged: pD
      } = DD;
      const {
        t: fD
      } = (0, ND.F)(), bD = (0, wD.useNavigatePreserveSearch)(), {
        userContext: BD
      } = (0, ZD.c)(), [yD, MD] = (0, ID.useState)(!1), [tD, vD] = (0, ID.useState)(null), [gD, XD] = (0, ID.useState)(!1), {
        packId: xD,
        name: qD,
        description: JD,
        live: KD
      } = CD;
      async function aD(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pD;
        MD(!0), vD(null);
        try {
          await DD(), CD()
        } catch (cD) {
          console.error("Failed to change a shader pack", cD), vD((0, PD.w)(cD, fD, "shaderPackListing:ownerActionFailed"))
        } finally {
          MD(!1)
        }
      }
      const VD = (0, PD.r)(BD);
      return (0, HD.jsxs)("section", {
        className: "ShaderPackOwnerPanel",
        children: [(0, HD.jsx)("h2", {
          className: "ShaderPackSectionTitle",
          children: fD("general:manage")
        }), (0, PD.Y)(cD, !(null === KD || void 0 === KD || !KD.renderId), Date.now(), fD).map((DD => (0, HD.jsxs)("div", {
          className: mD()("ShaderPackOwnerNotice", {
            Warning: "warning" === DD.tone
          }),
          children: [(0, HD.jsx)(nD.c, {
            name: "warning" === DD.tone ? "triangle-exclamation" : "circle-info"
          }), (0, HD.jsxs)("div", {
            children: [DD.text, DD.detail && (0, HD.jsx)("pre", {
              className: "ShaderPackOwnerNoticeDetail",
              children: DD.detail
            })]
          })]
        }, DD.text))), CD.ban && (0, HD.jsxs)("div", {
          className: "ShaderPackOwnerNotice Warning",
          children: [(0, HD.jsx)(nD.c, {
            name: "ban"
          }), (0, HD.jsxs)("div", {
            children: ["Banned by ", CD.ban.byName, " on ", new Date(CD.ban.at).toLocaleString()]
          })]
        }), tD && (0, HD.jsx)("div", {
          className: "ShaderPackOwnerError",
          children: tD
        }), (0, HD.jsxs)("div", {
          className: "ShaderPackOwnerActions",
          children: [(0, HD.jsxs)(SD.P, {
            disabled: yD,
            onClick: () => {
              !async function() {
                const DD = await OD.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:renameTitle",
                  initialValue: qD,
                  maxLength: iD.C,
                  submitText: "general:save",
                  validate: DD => DD.trim().length < iD.E ? fD("shaderPackListing:nameTooShort", {
                    min: String(iD.E)
                  }) : null
                }).getResult();
                "notificationTornDown" !== DD && "submit" === (null === DD || void 0 === DD ? void 0 : DD.type) && DD.value.trim() !== qD && await aD((() => oD.c.updateShaderPack(BD, {
                  packId: xD,
                  name: DD.value.trim()
                })))
              }()
            },
            children: [(0, HD.jsx)(nD.c, {
              name: "pen"
            }), " ", fD("shaderPackListing:rename")]
          }), (0, HD.jsxs)(SD.P, {
            disabled: yD,
            onClick: () => {
              !async function() {
                const DD = await OD.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:editDescription",
                  initialValue: JD,
                  maxLength: iD.t,
                  multiline: !0,
                  allowEmptySubmit: !0,
                  submitText: "general:save"
                }).getResult();
                "notificationTornDown" !== DD && "submit" === (null === DD || void 0 === DD ? void 0 : DD.type) && DD.value.trim() !== JD && await aD((() => oD.c.updateShaderPack(BD, {
                  packId: xD,
                  description: DD.value.trim()
                })))
              }()
            },
            children: [(0, HD.jsx)(nD.c, {
              name: "file-lines"
            }), " ", fD("shaderPackListing:editDescription")]
          }), (0, HD.jsxs)(SD.P, {
            disabled: yD || cD.isBanned && !cD.listed,
            onClick: () => {
              aD((() => oD.c.updateShaderPack(BD, {
                packId: xD,
                listed: !cD.listed
              })))
            },
            children: [(0, HD.jsx)(nD.c, {
              name: cD.listed ? "eye-slash" : "eye"
            }), " ", fD(cD.listed ? "shaderPackListing:unlist" : "shaderPackListing:relist")]
          }), !cD.isBanned && (0, HD.jsxs)(SD.i, {
            disabled: yD,
            onClick: () => {
              XD(!gD)
            },
            children: [(0, HD.jsx)(nD.c, {
              name: "upload"
            }), " ", fD("shaderPackListing:uploadVersion")]
          }), (0, HD.jsxs)(SD.N, {
            disabled: yD || cD.isBanned,
            onClick: () => {
              !async function() {
                !0 === await OD.NotificationProvider.showPromptPopup({
                  title: "shaderPackListing:deleteTitle",
                  subtitle: "shaderPackListing:deleteSubtitle",
                  confirmText: "general:delete",
                  cancelText: "general:cancel",
                  destructive: !0
                }).getResult() && await aD((() => oD.c.deleteShaderPack(BD, xD)), (() => {
                  bD(`${PD.W}?section=mine`, {
                    replace: !0
                  })
                }))
              }()
            },
            children: [(0, HD.jsx)(nD.c, {
              name: "trash-can"
            }), " ", fD("general:delete")]
          }), VD && (0, HD.jsxs)(SD.N, {
            disabled: yD,
            onClick: () => {
              aD((() => oD.c.setShaderPackBanned(BD, xD, !cD.isBanned)))
            },
            children: [(0, HD.jsx)(nD.c, {
              name: cD.isBanned ? "circle-check" : "ban"
            }), " ", cD.isBanned ? "Unban" : "Ban"]
          })]
        }), gD && (0, HD.jsx)(ID.Suspense, {
          fallback: (0, HD.jsx)(QD.e, {}),
          children: (0, HD.jsx)(UD, {
            existing: {
              packId: xD,
              name: qD,
              description: JD
            },
            onPublished: () => {
              XD(!1), pD()
            }
          })
        })]
      })
    }
    var qD = cD(62),
      JD = cD(1865),
      KD = cD(1280),
      aD = cD(4806),
      VD = cD(1199),
      zD = cD(6312),
      jD = cD(6303),
      lD = cD(6325);

    function LD(DD) {
      let {
        item: CD
      } = DD;
      const {
        t: cD
      } = (0, ND.F)(), [pD] = (0, zD.g)(), [fD, bD] = (0, ID.useState)(pD), [QD, wD] = (0, ID.useState)(!1), [SD, BD] = (0, ID.useState)(!1), {
        s3Url: yD
      } = VD.clientSideServerUrls, {
        width: MD,
        height: tD
      } = iD.u.large, ZD = (0, iD.w)(yD, CD, fD, "large"), {
        renderVersion: oD
      } = CD;
      return (0, HD.jsxs)("div", {
        className: "ShaderPackPreviews",
        children: [(0, HD.jsx)(lD.d, {
          selected: fD,
          onSelect: DD => {
            bD(DD), wD(!1)
          },
          imageUrl: DD => (0, iD.w)(yD, CD, DD, "thumb")
        }), (0, HD.jsxs)("div", {
          className: "ShaderPackPreviewStage",
          children: [!QD && (0, HD.jsxs)("button", {
            type: "button",
            className: "ShaderPackPreviewMain",
            title: null === oD ? void 0 : cD("shaderPackListing:fullSize"),
            disabled: null === oD,
            onClick: () => {
              BD(!0)
            },
            children: [(0, HD.jsx)("img", {
              src: ZD,
              width: MD,
              height: tD,
              alt: cD(PD.db[fD]),
              draggable: !1
            }), (0, HD.jsx)(jD.b, {
              item: CD
            })]
          }), !QD && null !== oD && (0, HD.jsxs)(kD, {
            side: "Right",
            onClick: () => {
              wD(!0)
            },
            children: [(0, HD.jsx)(nD.c, {
              name: "arrows-left-right"
            }), " ", cD("shaderPackListing:compare")]
          }), QD && null !== oD && (0, HD.jsx)(RD, {
            item: CD,
            packUrl: ZD,
            baselineUrl: (0, iD.p)(yD, oD, fD, "large")
          }), QD && (0, HD.jsx)(kD, {
            side: "Left",
            onClick: () => {
              wD(!1)
            },
            children: cD("shaderPackListing:withPack")
          }), QD && (0, HD.jsx)(kD, {
            side: "Right",
            onClick: () => {
              wD(!1)
            },
            children: cD("shaderPackListing:withoutPack")
          })]
        }), SD && (0, HD.jsx)(TD, {
          fullUrl: (0, iD.w)(yD, CD, fD, "full"),
          largeUrl: ZD,
          alt: cD(PD.db[fD]),
          onClose: () => {
            BD(!1)
          }
        })]
      })
    }

    function TD(DD) {
      let {
        fullUrl: CD,
        largeUrl: cD,
        alt: pD,
        onClose: iD
      } = DD;
      const fD = (0, ID.useRef)(null);
      return (0, KD.t)("popup", fD, iD), (0, ID.useEffect)((() => {
        function DD(DD) {
          "Escape" === DD.key && (DD.stopPropagation(), iD())
        }
        return window.addEventListener("keydown", DD, !0), () => {
          window.removeEventListener("keydown", DD, !0)
        }
      }), [iD]), (0, qD.createPortal)((0, HD.jsxs)("div", {
        ref: fD,
        className: "ShaderPackFullSize",
        onClick: iD,
        children: [(0, HD.jsx)("img", {
          className: "ShaderPackFullSizeImage",
          src: CD,
          alt: pD,
          draggable: !1,
          style: {
            backgroundImage: `url(${cD})`
          }
        }), (0, HD.jsx)(SD.l, {
          className: "ShaderPackFullSizeClose",
          onClick: iD
        })]
      }), document.body)
    }
    const GD = 5;

    function RD(DD) {
      let {
        item: CD,
        packUrl: cD,
        baselineUrl: pD
      } = DD;
      const {
        t: fD
      } = (0, ND.F)(), [bD, QD] = (0, ID.useState)(50), wD = (0, ID.useRef)(!1), SD = (0, ID.useRef)(null), {
        width: BD,
        height: yD
      } = iD.u.large;

      function MD(DD) {
        QD((CD => (0, JD.h)(CD + DD, 0, 100)))
      }

      function tD(DD) {
        const CD = DD.currentTarget.getBoundingClientRect();
        QD((0, JD.h)((DD.clientX - CD.left) / CD.width * 100, 0, 100))
      }
      return (0, aD.g)(SD, {
        adjust: DD => {
          MD(DD * GD)
        },
        setFraction: DD => {
          QD(100 * DD)
        },
        endDrag: () => {}
      }), (0, HD.jsxs)("div", {
        ref: SD,
        className: "ShaderPackCompare",
        "data-pad-slider": "",
        "data-pad-focusable": "",
        role: "slider",
        tabIndex: 0,
        "aria-label": fD("shaderPackListing:compare"),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(bD),
        style: {
          "--split": `${bD}%`
        },
        onKeyDown: function(DD) {
          const CD = "ArrowLeft" === DD.key ? -GD : "ArrowRight" === DD.key ? GD : 0;
          0 !== CD && (DD.preventDefault(), MD(CD))
        },
        onPointerDown: DD => {
          wD.current = !0, DD.currentTarget.setPointerCapture(DD.pointerId), tD(DD)
        },
        onPointerMove: DD => {
          wD.current && tD(DD)
        },
        onPointerUp: () => {
          wD.current = !1
        },
        onPointerCancel: () => {
          wD.current = !1
        },
        children: [(0, HD.jsx)("img", {
          className: "ShaderPackCompareBaseline",
          src: pD,
          width: BD,
          height: yD,
          alt: "",
          draggable: !1,
          style: {
            backgroundImage: `url(${cD})`
          }
        }), (0, HD.jsx)("div", {
          className: "ShaderPackCompareLine"
        }), (0, HD.jsx)("img", {
          className: "ShaderPackComparePack",
          src: cD,
          width: BD,
          height: yD,
          alt: "",
          draggable: !1
        }), (0, HD.jsx)(jD.b, {
          item: CD,
          className: "ShaderPackCompareNotice"
        })]
      })
    }

    function kD(DD) {
      let {
        side: CD,
        onClick: cD,
        children: ID
      } = DD;
      return (0, HD.jsx)("button", {
        type: "button",
        className: `ShaderPackStageButton ${CD}`,
        onClick: cD,
        children: (0, HD.jsx)("span", {
          className: "ShaderPackStageButtonFace SmallTextBold",
          children: ID
        })
      })
    }
    var dD = cD(4770),
      YD = cD(298),
      WD = cD(6409);
    const sD = {
      compiler: "shaderPack:compilerUnavailable",
      download: "shaderPackListing:useDownloadFailed",
      apiVersion: "shaderPackListing:useOtherApiVersion",
      invalid: "shaderPackListing:useInvalid",
      errors: "shaderPackListing:useFailsHere",
      save: "shaderPack:saveFailed"
    };

    function ED(DD) {
      const {
        userContext: CD
      } = (0, ZD.c)(), [pD, iD] = (0, ID.useState)(null), [fD, bD] = (0, ID.useState)(!1), [QD, wD] = (0, ID.useState)(!1), [SD, BD] = (0, ID.useState)(null), yD = null === DD || void 0 === DD ? void 0 : DD.packId, MD = null === DD || void 0 === DD ? void 0 : DD.sourceHash;
      return (0, ID.useEffect)((() => {
        if (bD(!1), BD(null), void 0 === yD) return;
        let DD = !1;
        return Promise.all([(0, vD.hasUsableWebGpuAdapter)(), (0, WD.d)()]).then((CD => {
          let [cD, ID] = CD;
          var pD;
          DD || (iD(cD), bD((null === ID || void 0 === ID || null === (pD = ID.listing) || void 0 === pD ? void 0 : pD.packId) === yD && ID.listing.sourceHash === MD))
        })).catch((CD => {
          console.error("Failed to check whether this shader pack can be used", CD), DD || iD(!1)
        })), () => {
          DD = !0
        }
      }), [yD, MD]), {
        webGpuUsable: pD,
        inUse: fD,
        busy: QD,
        errorKey: SD,
        use: () => {
          null !== DD && async function(DD) {
            wD(!0), BD(null);
            try {
              const {
                installListedShaderPack: ID
              } = await Promise.all([cD.e(74), cD.e(131), cD.e(126)]).then((() => cD(39614))), pD = await ID({
                packId: DD.packId,
                sourceHash: DD.sourceHash,
                name: DD.name,
                ownerName: DD.ownerName,
                description: DD.description
              });
              if ("failed" === pD.kind) return void BD(sD[pD.reason]);
              bD(!0), oD.c.recordShaderPackDownload(CD, DD.packId).catch((DD => {
                console.error("Failed to count a shader pack's download", DD)
              })), (0, dD.j)()
            } catch (ID) {
              console.error("Failed to use the shader pack", ID), BD("shaderPack:unexpectedError")
            } finally {
              wD(!1)
            }
          }(DD)
        }
      }
    }

    function eD(DD) {
      let {
        packUse: CD
      } = DD;
      const {
        t: cD
      } = (0, ND.F)(), {
        webGpuUsable: ID,
        inUse: pD,
        busy: iD,
        errorKey: fD,
        use: bD
      } = CD;
      return (0, HD.jsxs)("div", {
        className: "ShaderPackUse",
        children: [(0, HD.jsxs)(SD.o, {
          disabled: !0 !== ID || pD,
          loading: iD,
          onClick: bD,
          children: [(0, HD.jsx)(nD.c, {
            name: pD ? "check" : "download"
          }), " ", cD(pD ? "shaderPackListing:inUse" : "shaderPackListing:use")]
        }), !1 === ID && (0, HD.jsx)("div", {
          className: "ShaderPackUseNote",
          children: cD((0, YD.f)() ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), fD && (0, HD.jsx)("div", {
          className: "ShaderPackUseNote Error",
          children: cD(fD)
        })]
      })
    }

    function uD() {
      var DD;
      const {
        t: CD
      } = (0, ND.F)(), cD = (0, wD.useNavigatePreserveSearch)(), {
        packId: iD
      } = (0, pD.F)(), {
        userContext: fD,
        isUserContextUpdating: bD
      } = (0, ZD.c)(), [BD, yD] = (0, ID.useState)(null), [MD, vD] = (0, ID.useState)(null), [gD, XD] = (0, ID.useState)(0), mD = (0, ID.useRef)(0);

      function nD() {
        var DD;
        null !== (DD = (0, wD.getPreviousLocation)()) && void 0 !== DD && DD.startsWith(PD.W) ? cD(-1) : cD(PD.W)
      }(0, tD.d)(nD), (0, zD.c)(), (0, ID.useEffect)((() => {
        if (bD || void 0 === iD) return;
        const DD = ++mD.current;
        vD(null), oD.c.getShaderPack(fD, iD).then((CD => {
          mD.current === DD && yD(CD)
        })).catch((CD => {
          mD.current === DD && (console.error("Failed to get the shader pack", CD), yD(null), vD({
            error: CD
          }))
        }))
      }), [iD, fD, bD, gD]);
      const OD = () => {
          XD((DD => DD + 1))
        },
        UD = (null === BD || void 0 === BD ? void 0 : BD.packId) === iD ? BD : null,
        qD = (0, zD.i)(),
        JD = ED(null !== (DD = null === UD || void 0 === UD ? void 0 : UD.live) && void 0 !== DD ? DD : null),
        KD = null !== UD && void 0 !== UD && UD.live ? (0, HD.jsx)(hD, {
          item: UD.live,
          favourites: qD,
          packUse: JD
        }) : null;
      return (0, HD.jsxs)("article", {
        className: "ShaderPackInformation AnimFadeIn",
        children: [(0, HD.jsx)(SD.e, {
          onClick: nD,
          children: CD("shaderPackListing:backToPacks")
        }), null === UD && null === MD && (0, HD.jsx)("div", {
          className: "ShaderPackInformationMessage",
          children: (0, HD.jsx)(QD.e, {})
        }), null !== MD && (0, HD.jsxs)("div", {
          className: "ShaderPackInformationMessage",
          children: [(0, PD.w)(MD.error, CD, "shaderPackListing:loadPackFailed"), (0, HD.jsx)(SD.i, {
            onClick: OD,
            children: CD("general:tryAgain")
          })]
        }), null !== UD && null === MD && (0, HD.jsxs)("div", {
          className: "ShaderPackInformationBody",
          children: [(0, HD.jsxs)("header", {
            className: "ShaderPackInformationHeader",
            children: [(0, HD.jsx)("h1", {
              className: "FullyFancyText",
              children: UD.name
            }), KD]
          }), UD.live && (0, HD.jsx)(LD, {
            item: UD.live
          }), UD.live && (0, HD.jsx)(rD, {
            item: UD.live,
            ownerPreview: UD.ownerPreview,
            bloxdhubSlug: UD.bloxdhubSlug,
            actions: KD
          }), UD.owner && (0, HD.jsx)(xD, {
            details: UD,
            owner: UD.owner,
            onChanged: OD
          })]
        })]
      })
    }

    function hD(DD) {
      let {
        item: CD,
        favourites: cD,
        packUse: ID
      } = DD;
      const pD = cD.isFavourite(CD.packId);
      return (0, HD.jsxs)("div", {
        className: "ShaderPackInformationActions",
        children: [vD.featureFlags.settings.canUseShaderPacks && (0, HD.jsx)(eD, {
          packUse: ID
        }), (0, HD.jsx)(SD.t, {
          className: "ShaderPackInformationLike",
          onClick: () => {
            cD.toggle(CD.packId)
          },
          isLiked: !0 === pD,
          isLoading: null === pD
        })]
      })
    }

    function rD(DD) {
      let {
        item: CD,
        ownerPreview: cD,
        bloxdhubSlug: ID,
        actions: pD
      } = DD;
      const {
        t: bD
      } = (0, ND.F)(), QD = (0, MD.n)(), SD = null === ID ? null : (0, iD.h)(ID);
      return (0, HD.jsxs)("div", {
        className: "ShaderPackFacts",
        children: [CD.description && (0, HD.jsx)("p", {
          className: "ShaderPackDescription",
          children: CD.description
        }), (0, HD.jsxs)("div", {
          className: "ShaderPackFeatureList",
          children: [(null !== cD || null !== SD) && (0, HD.jsx)("div", {
            className: "ShaderPackAuthor",
            children: null !== cD ? (0, HD.jsxs)(HD.Fragment, {
              children: [(0, HD.jsx)(yD.h, {
                playerSocialPreview: cD,
                showLocation: !1,
                linkToProfile: !0
              }), null !== SD && (0, HD.jsx)("a", {
                className: "ShaderPackBloxdhubLogo",
                href: SD,
                target: "_blank",
                rel: "noopener noreferrer",
                children: (0, HD.jsx)("img", {
                  src: gD,
                  alt: iD.e
                })
              })]
            }) : (0, HD.jsxs)("a", {
              className: "ShaderPackBloxdhubName",
              href: SD,
              target: "_blank",
              rel: "noopener noreferrer",
              children: [iD.e, (0, HD.jsx)("img", {
                src: gD,
                alt: ""
              })]
            })
          }), PD.x.filter((DD => CD.features.includes(DD))).map((DD => (0, HD.jsx)(wD.LinkPreserveSearch, {
            className: "ShaderPackFeature",
            to: (0, PD.I)(DD),
            children: bD(PD.M[DD])
          }, DD)))]
        }), pD, (0, HD.jsxs)("dl", {
          className: "ShaderPackFactList",
          children: [(0, HD.jsxs)("div", {
            children: [(0, HD.jsx)("dt", {
              children: bD("shaderPackListing:downloads")
            }), (0, HD.jsx)("dd", {
              children: (0, fD.S)(CD.downloads)
            })]
          }), (0, HD.jsx)(AD, {
            label: bD("shaderPackListing:updated"),
            time: CD.listedUpdatedAt,
            now: QD
          }), (0, HD.jsx)(AD, {
            label: bD("shaderPackListing:created"),
            time: CD.publishedAt,
            now: QD
          }), null !== CD.gpuCost && (0, HD.jsxs)("div", {
            children: [(0, HD.jsx)("dt", {
              children: bD("shaderPackListing:lag")
            }), (0, HD.jsx)("dd", {
              children: bD("shaderPackListing:lagPercent", {
                percent: String((0, PD.S)(CD.gpuCost))
              })
            })]
          }), (0, HD.jsxs)("div", {
            children: [(0, HD.jsx)("dt", {
              children: bD("shaderPackListing:size")
            }), (0, HD.jsx)("dd", {
              children: bD("shaderPackListing:sizeValue", {
                kilobytes: String((0, PD.P)(CD.sourceBytes))
              })
            })]
          }), (0, HD.jsxs)("div", {
            children: [(0, HD.jsx)("dt", {
              children: bD("shaderPackListing:files")
            }), (0, HD.jsx)("dd", {
              children: CD.fileCount
            })]
          })]
        })]
      })
    }

    function AD(DD) {
      let {
        label: CD,
        time: cD,
        now: ID
      } = DD;
      const {
        t: pD,
        selectedLanguage: iD
      } = (0, ND.F)(), fD = new Date(cD);
      let QD = fD.toLocaleDateString();
      if (ID - cD <= 30 * bD.i) {
        const DD = (0, ND.m)(iD.code, "shaderPackListing:timeAgo");
        QD = pD("shaderPackListing:timeAgo", {
          time: (0, bD.cb)(DD, cD, ID)
        })
      }
      return (0, HD.jsx)(BD.f, {
        tooltipInner: fD.toLocaleString(),
        children: (0, HD.jsxs)("div", {
          children: [(0, HD.jsx)("dt", {
            children: CD
          }), (0, HD.jsx)("dd", {
            children: QD
          })]
        })
      })
    }
  },
  4799: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => fD
    });
    var ID = cD(1049),
      pD = cD.n(ID),
      iD = cD(1093);

    function fD(DD) {
      let {
        options: CD,
        value: cD,
        onChange: ID,
        ariaLabel: fD,
        className: bD,
        reselectable: QD = !1,
        keepsFocus: wD = !1
      } = DD;
      return (0, iD.jsx)("div", {
        className: pD()("SegmentedToggle", bD),
        role: "group",
        "aria-label": fD,
        children: CD.map((DD => {
          const CD = DD.value === cD;
          return (0, iD.jsx)("button", {
            type: "button",
            "aria-pressed": CD,
            "aria-label": DD.ariaLabel,
            title: DD.ariaLabel,
            className: pD()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: CD
            }),
            onMouseDown: wD ? DD => {
              DD.preventDefault()
            } : void 0,
            onClick: () => {
              CD && !QD || ID(DD.value)
            },
            children: DD.label
          }, DD.value)
        }))
      })
    }
  },
  4806: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => iD,
      g: () => fD
    });
    var ID = cD(53);
    const pD = new WeakMap,
      iD = DD => {
        var CD;
        const cD = DD.closest("[data-pad-slider]");
        return cD && null !== (CD = pD.get(cD)) && void 0 !== CD ? CD : null
      },
      fD = (DD, CD) => {
        const cD = (0, ID.useRef)(CD);
        cD.current = CD, (0, ID.useEffect)((() => {
          if (DD.current) return ((DD, CD) => (pD.set(DD, CD), () => {
            pD.get(DD) === CD && pD.delete(DD)
          }))(DD.current, {
            adjust: DD => {
              cD.current.adjust(DD)
            },
            setFraction: DD => {
              cD.current.setFraction(DD)
            },
            endDrag: () => {
              cD.current.endDrag()
            }
          })
        }), [DD])
      }
  },
  6409: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => pD,
      d: () => iD
    });
    var ID = cD(36);
    const pD = "shaderPack";
    async function iD() {
      var DD;
      let CD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (DD = await ID.f.getItem(pD, CD)) && void 0 !== DD ? DD : null
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);