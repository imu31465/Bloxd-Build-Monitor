export const id = 111;
export const ids = [111];
export const modules = {
  5021: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => ID,
      c: () => MD,
      e: () => BD,
      g: () => nD
    });
    var pD = wD(58),
      sD = wD(5026),
      KD = wD(4395),
      rD = wD(1366),
      LD = wD(5049),
      cD = wD(1044),
      gD = wD.n(cD),
      RD = wD(1355),
      AD = wD(1737),
      UD = wD(5057),
      fD = wD(1096);

    function ID(DD) {
      let {
        label: zD,
        onClick: wD,
        checked: pD,
        circleInfoText: sD,
        className: LD,
        disabled: cD,
        note: RD
      } = DD;
      return (0, fD.jsxs)("div", {
        "aria-disabled": cD || void 0,
        "data-pad-focusable": !0,
        className: gD()("SettingBox CheckboxContainer", {
          [LD]: LD,
          SettingBoxDisabled: cD
        }),
        onClick: () => {
          cD || wD(!pD)
        },
        children: [(0, fD.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, fD.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, fD.jsx)(KD.d, {
              className: "SettingsCheckbox",
              checked: pD,
              disabled: cD,
              onChange: () => {}
            })
          }), (0, fD.jsxs)("div", {
            className: "CheckboxText",
            children: [zD, sD && (0, fD.jsx)("span", {
              onClick: DD => DD.stopPropagation(),
              children: (0, fD.jsx)(rD.b, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: sD
              })
            })]
          })]
        }), RD && (0, fD.jsx)("div", {
          className: "SettingNote",
          children: RD
        })]
      })
    }

    function BD(DD) {
      let {
        name: zD,
        onChange: wD,
        min: sD,
        max: KD,
        step: LD,
        initValue: cD,
        circleInfoText: RD,
        format: AD,
        className: UD,
        padStep: ID,
        disabled: BD = !1,
        selectableMax: GD,
        cappedNote: nD,
        onChangeComplete: MD
      } = DD;
      const [OD, JD] = (0, pD.useState)(cD), ED = (0, pD.useRef)(cD);
      (0, pD.useEffect)((() => {
        ED.current = cD, JD(cD)
      }), [cD]);
      const QD = void 0 !== GD && GD < KD,
        XD = QD ? {
          "--slider-selectable": (GD - sD) / (KD - sD)
        } : void 0;
      return (0, fD.jsxs)("div", {
        className: gD()("SettingBox SettingsSliderDiv", {
          [UD]: UD,
          SettingBoxDisabled: BD,
          SliderCapped: QD
        }),
        style: XD,
        children: [(0, fD.jsxs)("div", {
          className: "SliderText",
          children: [`${zD}: ${AD?AD(OD):OD}`, RD && (0, fD.jsx)(rD.b, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: RD
          })]
        }), (0, fD.jsx)("div", {
          className: "SliderDiv",
          children: (0, fD.jsx)(hD, {
            value: OD,
            min: sD,
            max: KD,
            step: LD,
            onChange: DD => {
              if (QD && DD >= GD && OD === GD) return;
              const zD = QD ? Math.min(DD, GD) : DD;
              ED.current = zD, JD(zD), wD(zD)
            },
            onChangeComplete: MD && (() => {
              MD(ED.current)
            }),
            format: AD,
            padStep: ID,
            disabled: BD
          })
        }), QD && nD && (0, fD.jsx)("div", {
          className: "SettingNote",
          children: nD
        })]
      })
    }
    const GD = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function hD(DD) {
      var zD;
      let {
        value: wD,
        min: KD,
        max: rD,
        step: LD,
        onChange: cD,
        orientation: gD,
        reverse: RD,
        setIsChanging: AD,
        tooltip: ID,
        labels: BD,
        handleLabel: hD,
        format: nD,
        onChangeStart: MD,
        onChangeComplete: OD,
        padStep: JD,
        disabled: ED = !1
      } = DD;
      const QD = (0, pD.useRef)(null),
        XD = (0, pD.useRef)(null);
      (0, pD.useLayoutEffect)((() => {
        var DD, zD, wD;
        const pD = null !== (DD = null === (zD = QD.current) || void 0 === zD ? void 0 : zD.querySelector(".rangeslider")) && void 0 !== DD ? DD : null;
        null === pD || void 0 === pD || pD.setAttribute("data-pad-slider", ""), null === pD || void 0 === pD || pD.setAttribute("data-pad-focusable", ""), null === pD || void 0 === pD || null === (wD = pD.querySelector(".rangeslider__handle")) || void 0 === wD || wD.setAttribute("data-pad-slider-handle", ""), XD.current = pD
      }), []), (0, pD.useLayoutEffect)((() => {
        var DD, zD;
        ED ? null === (DD = XD.current) || void 0 === DD || DD.setAttribute("aria-disabled", "true") : null === (zD = XD.current) || void 0 === zD || zD.removeAttribute("aria-disabled")
      }), [ED]);
      const VD = (null !== (zD = String(LD).split(".")[1]) && void 0 !== zD ? zD : "").length,
        PD = DD => {
          const zD = Number((Math.round((DD - KD) / LD) * LD + KD).toFixed(VD));
          return Math.min(rD, Math.max(KD, zD))
        },
        CD = (0, pD.useRef)(OD);
      CD.current = OD, (0, pD.useEffect)((() => {
        const DD = QD.current;
        if (!DD) return;
        const zD = DD => {
          var zD;
          GD.has(DD.key) && (null === (zD = CD.current) || void 0 === zD || zD.call(CD))
        };
        return DD.addEventListener("keyup", zD), () => {
          DD.removeEventListener("keyup", zD)
        }
      }), []);
      const xD = (0, pD.useRef)(!1);
      return (0, UD.c)(XD, {
        adjust: DD => {
          if (ED) return;
          const zD = null !== JD && void 0 !== JD ? JD : Math.max(LD, Math.round((rD - KD) / 20 / LD) * LD),
            pD = PD(wD + DD * zD * (RD ? -1 : 1));
          pD !== wD && (null === MD || void 0 === MD || MD(), cD(pD), null === OD || void 0 === OD || OD())
        },
        setFraction: DD => {
          if (ED) return;
          const zD = PD(KD + (RD ? 1 - DD : DD) * (rD - KD));
          zD !== wD && (xD.current || (xD.current = !0, null === MD || void 0 === MD || MD()), cD(zD))
        },
        endDrag: () => {
          xD.current && (xD.current = !1, null === OD || void 0 === OD || OD())
        }
      }), (0, fD.jsx)("div", {
        ref: QD,
        style: {
          display: "contents"
        },
        children: (0, fD.jsx)(sD.c, {
          value: wD,
          min: KD,
          max: rD,
          step: LD,
          onChange: cD,
          orientation: gD,
          reverse: RD,
          tooltip: ID,
          labels: BD,
          handleLabel: hD,
          format: nD,
          onChangeStart: () => {
            null === MD || void 0 === MD || MD(), null === AD || void 0 === AD || AD(!0)
          },
          onChangeComplete: () => {
            null === AD || void 0 === AD || AD(!1), null === OD || void 0 === OD || OD()
          }
        })
      })
    }
    async function nD() {
      const DD = RD.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await DD.getResult() && (0, AD.reloadBloxd)()
    }

    function MD(DD) {
      let {
        label: zD,
        options: wD,
        value: pD,
        onChange: sD,
        circleInfoText: KD
      } = DD;
      return (0, fD.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, fD.jsxs)("div", {
          className: "SliderText",
          children: [zD, KD && (0, fD.jsx)(rD.b, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: KD
          })]
        }), (0, fD.jsx)(LD.e, {
          ariaLabel: zD,
          options: wD,
          value: pD,
          onChange: sD
        })]
      })
    }
  },
  6702: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      default: () => tD
    });
    var pD = wD(58),
      sD = wD(1523),
      KD = wD(6594),
      rD = wD(1232),
      LD = wD(351),
      cD = wD(1346),
      gD = wD(1511),
      RD = wD(1447),
      AD = wD(1366),
      UD = wD(2600),
      fD = wD(2739),
      ID = wD(4572),
      BD = wD(1127),
      GD = wD(1495),
      hD = wD(103),
      nD = wD(1200);
    const MD = wD.p + "static/media/bloxdhubLogo.6a6c367af2ad6e6f1eb3.webp";
    var OD = wD(1044),
      JD = wD.n(OD),
      ED = wD(1057),
      QD = wD(1355),
      XD = wD(6590),
      VD = wD(1096);
    const PD = (0, pD.lazy)((() => Promise.all([wD.e(107), wD.e(77), wD.e(133), wD.e(132), wD.e(112), wD.e(397)]).then((() => wD(6624))).then((DD => ({
      default: DD.ShaderPackPublishForm
    })))));

    function CD(DD) {
      let {
        details: zD,
        owner: wD,
        onChanged: sD
      } = DD;
      const {
        t: rD
      } = (0, nD.E)(), LD = (0, gD.useNavigatePreserveSearch)(), {
        userContext: AD
      } = (0, BD.c)(), [UD, fD] = (0, pD.useState)(!1), [ID, hD] = (0, pD.useState)(null), [MD, OD] = (0, pD.useState)(!1), {
        packId: CD,
        name: xD,
        description: TD,
        live: bD
      } = zD;
      async function jD(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : sD;
        fD(!0), hD(null);
        try {
          await DD(), zD()
        } catch (wD) {
          console.error("Failed to change a shader pack", wD), hD((0, XD.u)(wD, rD, "shaderPackListing:ownerActionFailed"))
        } finally {
          fD(!1)
        }
      }
      const dD = (0, XD.q)(AD);
      return (0, VD.jsxs)("section", {
        className: "ShaderPackOwnerPanel",
        children: [(0, VD.jsx)("h2", {
          className: "ShaderPackSectionTitle",
          children: rD("general:manage")
        }), (0, XD.V)(wD, !(null === bD || void 0 === bD || !bD.renderId), Date.now(), rD).map((DD => (0, VD.jsxs)("div", {
          className: JD()("ShaderPackOwnerNotice", {
            Warning: "warning" === DD.tone
          }),
          children: [(0, VD.jsx)(ED.e, {
            name: "warning" === DD.tone ? "triangle-exclamation" : "circle-info"
          }), (0, VD.jsxs)("div", {
            children: [DD.text, DD.detail && (0, VD.jsx)("pre", {
              className: "ShaderPackOwnerNoticeDetail",
              children: DD.detail
            })]
          })]
        }, DD.text))), zD.ban && (0, VD.jsxs)("div", {
          className: "ShaderPackOwnerNotice Warning",
          children: [(0, VD.jsx)(ED.e, {
            name: "ban"
          }), (0, VD.jsxs)("div", {
            children: ["Banned by ", zD.ban.byName, " on ", new Date(zD.ban.at).toLocaleString()]
          })]
        }), ID && (0, VD.jsx)("div", {
          className: "ShaderPackOwnerError",
          children: ID
        }), (0, VD.jsxs)("div", {
          className: "ShaderPackOwnerActions",
          children: [(0, VD.jsxs)(RD.Y, {
            disabled: UD,
            onClick: () => {
              !async function() {
                const DD = await QD.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:renameTitle",
                  initialValue: xD,
                  maxLength: KD.C,
                  submitText: "general:save",
                  validate: DD => DD.trim().length < KD.G ? rD("shaderPackListing:nameTooShort", {
                    min: String(KD.G)
                  }) : null
                }).getResult();
                "notificationTornDown" !== DD && "submit" === (null === DD || void 0 === DD ? void 0 : DD.type) && DD.value.trim() !== xD && await jD((() => GD.d.updateShaderPack(AD, {
                  packId: CD,
                  name: DD.value.trim()
                })))
              }()
            },
            children: [(0, VD.jsx)(ED.e, {
              name: "pen"
            }), " ", rD("shaderPackListing:rename")]
          }), (0, VD.jsxs)(RD.Y, {
            disabled: UD,
            onClick: () => {
              !async function() {
                const DD = await QD.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:editDescription",
                  initialValue: TD,
                  maxLength: KD.p,
                  multiline: !0,
                  allowEmptySubmit: !0,
                  submitText: "general:save"
                }).getResult();
                "notificationTornDown" !== DD && "submit" === (null === DD || void 0 === DD ? void 0 : DD.type) && DD.value.trim() !== TD && await jD((() => GD.d.updateShaderPack(AD, {
                  packId: CD,
                  description: DD.value.trim()
                })))
              }()
            },
            children: [(0, VD.jsx)(ED.e, {
              name: "file-lines"
            }), " ", rD("shaderPackListing:editDescription")]
          }), (0, VD.jsxs)(RD.Y, {
            disabled: UD || wD.isBanned && !wD.listed,
            onClick: () => {
              jD((() => GD.d.updateShaderPack(AD, {
                packId: CD,
                listed: !wD.listed
              })))
            },
            children: [(0, VD.jsx)(ED.e, {
              name: wD.listed ? "eye-slash" : "eye"
            }), " ", rD(wD.listed ? "shaderPackListing:unlist" : "shaderPackListing:relist")]
          }), !wD.isBanned && (0, VD.jsxs)(RD.f, {
            disabled: UD,
            onClick: () => {
              OD(!MD)
            },
            children: [(0, VD.jsx)(ED.e, {
              name: "upload"
            }), " ", rD("shaderPackListing:uploadVersion")]
          }), (0, VD.jsxs)(RD.T, {
            disabled: UD || wD.isBanned,
            onClick: () => {
              !async function() {
                !0 === await QD.NotificationProvider.showPromptPopup({
                  title: "shaderPackListing:deleteTitle",
                  subtitle: "shaderPackListing:deleteSubtitle",
                  confirmText: "general:delete",
                  cancelText: "general:cancel",
                  destructive: !0
                }).getResult() && await jD((() => GD.d.deleteShaderPack(AD, CD)), (() => {
                  LD(`${XD.S}?section=mine`, {
                    replace: !0
                  })
                }))
              }()
            },
            children: [(0, VD.jsx)(ED.e, {
              name: "trash-can"
            }), " ", rD("general:delete")]
          }), dD && (0, VD.jsxs)(RD.T, {
            disabled: UD,
            onClick: () => {
              jD((() => GD.d.setShaderPackBanned(AD, CD, !wD.isBanned)))
            },
            children: [(0, VD.jsx)(ED.e, {
              name: wD.isBanned ? "circle-check" : "ban"
            }), " ", wD.isBanned ? "Unban" : "Ban"]
          })]
        }), MD && (0, VD.jsx)(pD.Suspense, {
          fallback: (0, VD.jsx)(cD.e, {}),
          children: (0, VD.jsx)(PD, {
            existing: {
              packId: CD,
              name: xD,
              description: TD
            },
            onPublished: () => {
              OD(!1), sD()
            }
          })
        })]
      })
    }
    var xD = wD(79),
      TD = wD(1886),
      bD = wD(1282),
      jD = wD(5057),
      dD = wD(1211),
      SD = wD(6601),
      iD = wD(6597),
      lD = wD(6608);

    function WD(DD) {
      let {
        item: zD
      } = DD;
      const {
        t: wD
      } = (0, nD.E)(), [sD] = (0, SD.g)(), [rD, LD] = (0, pD.useState)(sD), [cD, gD] = (0, pD.useState)(!1), [RD, AD] = (0, pD.useState)(!1), {
        s3Url: UD
      } = dD.clientSideServerUrls, {
        width: fD,
        height: ID
      } = KD.s.large, BD = (0, KD.w)(UD, zD, rD, "large"), {
        renderVersion: GD
      } = zD;
      return (0, VD.jsxs)("div", {
        className: "ShaderPackPreviews",
        children: [(0, VD.jsx)(lD.b, {
          selected: rD,
          onSelect: DD => {
            LD(DD), gD(!1)
          },
          imageUrl: DD => (0, KD.w)(UD, zD, DD, "thumb")
        }), (0, VD.jsxs)("div", {
          className: "ShaderPackPreviewStage",
          children: [!cD && (0, VD.jsxs)("button", {
            type: "button",
            className: "ShaderPackPreviewMain",
            title: null === GD ? void 0 : wD("shaderPackListing:fullSize"),
            disabled: null === GD,
            onClick: () => {
              AD(!0)
            },
            children: [(0, VD.jsx)("img", {
              src: BD,
              width: fD,
              height: ID,
              alt: wD(XD.gb[rD]),
              draggable: !1
            }), (0, VD.jsx)(iD.d, {
              item: zD
            })]
          }), !cD && null !== GD && (0, VD.jsxs)(kD, {
            side: "Right",
            onClick: () => {
              gD(!0)
            },
            children: [(0, VD.jsx)(ED.e, {
              name: "arrows-left-right"
            }), " ", wD("shaderPackListing:compare")]
          }), cD && null !== GD && (0, VD.jsx)(yD, {
            item: zD,
            packUrl: BD,
            baselineUrl: (0, KD.l)(UD, GD, rD, "large")
          }), cD && (0, VD.jsx)(kD, {
            side: "Left",
            onClick: () => {
              gD(!1)
            },
            children: wD("shaderPackListing:withPack")
          }), cD && (0, VD.jsx)(kD, {
            side: "Right",
            onClick: () => {
              gD(!1)
            },
            children: wD("shaderPackListing:withoutPack")
          })]
        }), RD && (0, VD.jsx)(ND, {
          fullUrl: (0, KD.w)(UD, zD, rD, "full"),
          largeUrl: BD,
          alt: wD(XD.gb[rD]),
          onClose: () => {
            AD(!1)
          }
        })]
      })
    }

    function ND(DD) {
      let {
        fullUrl: zD,
        largeUrl: wD,
        alt: sD,
        onClose: KD
      } = DD;
      const rD = (0, pD.useRef)(null);
      return (0, bD.u)("popup", rD, KD), (0, pD.useEffect)((() => {
        function DD(DD) {
          "Escape" === DD.key && (DD.stopPropagation(), KD())
        }
        return window.addEventListener("keydown", DD, !0), () => {
          window.removeEventListener("keydown", DD, !0)
        }
      }), [KD]), (0, xD.createPortal)((0, VD.jsxs)("div", {
        ref: rD,
        className: "ShaderPackFullSize",
        onClick: KD,
        children: [(0, VD.jsx)("img", {
          className: "ShaderPackFullSizeImage",
          src: zD,
          alt: sD,
          draggable: !1,
          style: {
            backgroundImage: `url(${wD})`
          }
        }), (0, VD.jsx)(RD.k, {
          className: "ShaderPackFullSizeClose",
          onClick: KD
        })]
      }), document.body)
    }
    const ZD = 5;

    function yD(DD) {
      let {
        item: zD,
        packUrl: wD,
        baselineUrl: sD
      } = DD;
      const {
        t: rD
      } = (0, nD.E)(), [LD, cD] = (0, pD.useState)(50), gD = (0, pD.useRef)(!1), RD = (0, pD.useRef)(null), {
        width: AD,
        height: UD
      } = KD.s.large;

      function fD(DD) {
        cD((zD => (0, TD.f)(zD + DD, 0, 100)))
      }

      function ID(DD) {
        const zD = DD.currentTarget.getBoundingClientRect();
        cD((0, TD.f)((DD.clientX - zD.left) / zD.width * 100, 0, 100))
      }
      return (0, jD.c)(RD, {
        adjust: DD => {
          fD(DD * ZD)
        },
        setFraction: DD => {
          cD(100 * DD)
        },
        endDrag: () => {}
      }), (0, VD.jsxs)("div", {
        ref: RD,
        className: "ShaderPackCompare",
        "data-pad-slider": "",
        "data-pad-focusable": "",
        role: "slider",
        tabIndex: 0,
        "aria-label": rD("shaderPackListing:compare"),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(LD),
        style: {
          "--split": `${LD}%`
        },
        onKeyDown: function(DD) {
          const zD = "ArrowLeft" === DD.key ? -ZD : "ArrowRight" === DD.key ? ZD : 0;
          0 !== zD && (DD.preventDefault(), fD(zD))
        },
        onPointerDown: DD => {
          gD.current = !0, DD.currentTarget.setPointerCapture(DD.pointerId), ID(DD)
        },
        onPointerMove: DD => {
          gD.current && ID(DD)
        },
        onPointerUp: () => {
          gD.current = !1
        },
        onPointerCancel: () => {
          gD.current = !1
        },
        children: [(0, VD.jsx)("img", {
          className: "ShaderPackCompareBaseline",
          src: sD,
          width: AD,
          height: UD,
          alt: "",
          draggable: !1,
          style: {
            backgroundImage: `url(${wD})`
          }
        }), (0, VD.jsx)("div", {
          className: "ShaderPackCompareLine"
        }), (0, VD.jsx)("img", {
          className: "ShaderPackComparePack",
          src: wD,
          width: AD,
          height: UD,
          alt: "",
          draggable: !1
        }), (0, VD.jsx)(iD.d, {
          item: zD,
          className: "ShaderPackCompareNotice"
        })]
      })
    }

    function kD(DD) {
      let {
        side: zD,
        onClick: wD,
        children: pD
      } = DD;
      return (0, VD.jsx)("button", {
        type: "button",
        className: `ShaderPackStageButton ${zD}`,
        onClick: wD,
        children: (0, VD.jsx)("span", {
          className: "ShaderPackStageButtonFace SmallTextBold",
          children: pD
        })
      })
    }
    var mD = wD(5021),
      eD = wD(323),
      oD = wD(6693);
    const aD = {
      compiler: "shaderPack:compilerUnavailable",
      download: "shaderPackListing:useDownloadFailed",
      apiVersion: "shaderPackListing:useOtherApiVersion",
      invalid: "shaderPackListing:useInvalid",
      errors: "shaderPackListing:useFailsHere",
      save: "shaderPack:saveFailed"
    };

    function uD(DD) {
      const {
        userContext: zD
      } = (0, BD.c)(), [sD, KD] = (0, pD.useState)(null), [rD, LD] = (0, pD.useState)(!1), [cD, gD] = (0, pD.useState)(!1), [RD, AD] = (0, pD.useState)(null), UD = null === DD || void 0 === DD ? void 0 : DD.packId, fD = null === DD || void 0 === DD ? void 0 : DD.sourceHash;
      return (0, pD.useEffect)((() => {
        if (LD(!1), AD(null), void 0 === UD) return;
        let DD = !1;
        return Promise.all([(0, hD.hasUsableWebGpuAdapter)(), (0, oD.c)()]).then((zD => {
          let [wD, pD] = zD;
          var sD;
          DD || (KD(wD), LD((null === pD || void 0 === pD || null === (sD = pD.listing) || void 0 === sD ? void 0 : sD.packId) === UD && pD.listing.sourceHash === fD))
        })).catch((zD => {
          console.error("Failed to check whether this shader pack can be used", zD), DD || KD(!1)
        })), () => {
          DD = !0
        }
      }), [UD, fD]), {
        webGpuUsable: sD,
        inUse: rD,
        busy: cD,
        errorKey: RD,
        use: () => {
          null !== DD && async function(DD) {
            gD(!0), AD(null);
            try {
              const {
                installListedShaderPack: pD
              } = await Promise.all([wD.e(77), wD.e(133), wD.e(113)]).then((() => wD(40420))), sD = await pD({
                packId: DD.packId,
                sourceHash: DD.sourceHash,
                name: DD.name,
                ownerName: DD.ownerName,
                description: DD.description
              });
              if ("failed" === sD.kind) return void AD(aD[sD.reason]);
              LD(!0), GD.d.recordShaderPackDownload(zD, DD.packId).catch((DD => {
                console.error("Failed to count a shader pack's download", DD)
              })), (0, mD.g)()
            } catch (pD) {
              console.error("Failed to use the shader pack", pD), AD("shaderPack:unexpectedError")
            } finally {
              gD(!1)
            }
          }(DD)
        }
      }
    }

    function vD(DD) {
      let {
        packUse: zD
      } = DD;
      const {
        t: wD
      } = (0, nD.E)(), {
        webGpuUsable: pD,
        inUse: sD,
        busy: KD,
        errorKey: rD,
        use: LD
      } = zD;
      return (0, VD.jsxs)("div", {
        className: "ShaderPackUse",
        children: [(0, VD.jsxs)(RD.o, {
          disabled: !0 !== pD || sD,
          loading: KD,
          onClick: LD,
          children: [(0, VD.jsx)(ED.e, {
            name: sD ? "check" : "download"
          }), " ", wD(sD ? "shaderPackListing:inUse" : "shaderPackListing:use")]
        }), !1 === pD && (0, VD.jsx)("div", {
          className: "ShaderPackUseNote",
          children: wD((0, eD.i)() ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), rD && (0, VD.jsx)("div", {
          className: "ShaderPackUseNote Error",
          children: wD(rD)
        })]
      })
    }

    function tD() {
      var DD;
      const {
        t: zD
      } = (0, nD.E)(), wD = (0, gD.useNavigatePreserveSearch)(), {
        packId: KD
      } = (0, sD.C)(), {
        userContext: rD,
        isUserContextUpdating: LD
      } = (0, BD.c)(), [AD, UD] = (0, pD.useState)(null), [fD, hD] = (0, pD.useState)(null), [MD, OD] = (0, pD.useState)(0), JD = (0, pD.useRef)(0);

      function ED() {
        var DD;
        null !== (DD = (0, gD.getPreviousLocation)()) && void 0 !== DD && DD.startsWith(XD.S) ? wD(-1) : wD(XD.S)
      }(0, ID.e)(ED), (0, SD.b)(), (0, pD.useEffect)((() => {
        if (LD || void 0 === KD) return;
        const DD = ++JD.current;
        hD(null), GD.d.getShaderPack(rD, KD).then((zD => {
          JD.current === DD && UD(zD)
        })).catch((zD => {
          JD.current === DD && (console.error("Failed to get the shader pack", zD), UD(null), hD({
            error: zD
          }))
        }))
      }), [KD, rD, LD, MD]);
      const QD = () => {
          OD((DD => DD + 1))
        },
        PD = (null === AD || void 0 === AD ? void 0 : AD.packId) === KD ? AD : null,
        xD = (0, SD.k)(),
        TD = uD(null !== (DD = null === PD || void 0 === PD ? void 0 : PD.live) && void 0 !== DD ? DD : null),
        bD = null !== PD && void 0 !== PD && PD.live ? (0, VD.jsx)(FD, {
          item: PD.live,
          favourites: xD,
          packUse: TD
        }) : null;
      return (0, VD.jsxs)("article", {
        className: "ShaderPackInformation AnimFadeIn",
        children: [(0, VD.jsx)(RD.d, {
          onClick: ED,
          children: zD("shaderPackListing:backToPacks")
        }), null === PD && null === fD && (0, VD.jsx)("div", {
          className: "ShaderPackInformationMessage",
          children: (0, VD.jsx)(cD.e, {})
        }), null !== fD && (0, VD.jsxs)("div", {
          className: "ShaderPackInformationMessage",
          children: [(0, XD.u)(fD.error, zD, "shaderPackListing:loadPackFailed"), (0, VD.jsx)(RD.f, {
            onClick: QD,
            children: zD("general:tryAgain")
          })]
        }), null !== PD && null === fD && (0, VD.jsxs)("div", {
          className: "ShaderPackInformationBody",
          children: [(0, VD.jsxs)("header", {
            className: "ShaderPackInformationHeader",
            children: [(0, VD.jsx)("h1", {
              className: "FullyFancyText",
              children: PD.name
            }), bD]
          }), PD.live && (0, VD.jsx)(WD, {
            item: PD.live
          }), PD.live && (0, VD.jsx)(YD, {
            item: PD.live,
            ownerPreview: PD.ownerPreview,
            bloxdhubSlug: PD.bloxdhubSlug,
            actions: bD
          }), PD.owner && (0, VD.jsx)(CD, {
            details: PD,
            owner: PD.owner,
            onChanged: QD
          })]
        })]
      })
    }

    function FD(DD) {
      let {
        item: zD,
        favourites: wD,
        packUse: pD
      } = DD;
      const sD = wD.isFavourite(zD.packId);
      return (0, VD.jsxs)("div", {
        className: "ShaderPackInformationActions",
        children: [hD.featureFlags.settings.canUseShaderPacks && (0, VD.jsx)(vD, {
          packUse: pD
        }), (0, VD.jsx)(RD.x, {
          className: "ShaderPackInformationLike",
          onClick: () => {
            wD.toggle(zD.packId)
          },
          isLiked: !0 === sD,
          isLoading: null === sD
        })]
      })
    }

    function YD(DD) {
      let {
        item: zD,
        ownerPreview: wD,
        bloxdhubSlug: pD,
        actions: sD
      } = DD;
      const {
        t: LD
      } = (0, nD.E)(), cD = (0, fD.p)(), RD = null === pD ? null : (0, KD.f)(pD);
      return (0, VD.jsxs)("div", {
        className: "ShaderPackFacts",
        children: [zD.description && (0, VD.jsx)("p", {
          className: "ShaderPackDescription",
          children: zD.description
        }), (0, VD.jsxs)("div", {
          className: "ShaderPackFeatureList",
          children: [(null !== wD || null !== RD) && (0, VD.jsx)("div", {
            className: "ShaderPackAuthor",
            children: null !== wD ? (0, VD.jsxs)(VD.Fragment, {
              children: [(0, VD.jsx)(UD.e, {
                playerSocialPreview: wD,
                showLocation: !1,
                linkToProfile: !0
              }), null !== RD && (0, VD.jsx)("a", {
                className: "ShaderPackBloxdhubLogo",
                href: RD,
                target: "_blank",
                rel: "noopener noreferrer",
                children: (0, VD.jsx)("img", {
                  src: MD,
                  alt: KD.d
                })
              })]
            }) : (0, VD.jsxs)("a", {
              className: "ShaderPackBloxdhubName",
              href: RD,
              target: "_blank",
              rel: "noopener noreferrer",
              children: [KD.d, (0, VD.jsx)("img", {
                src: MD,
                alt: ""
              })]
            })
          }), XD.w.filter((DD => zD.features.includes(DD))).map((DD => (0, VD.jsx)(gD.LinkPreserveSearch, {
            className: "ShaderPackFeature",
            to: (0, XD.F)(DD),
            children: LD(XD.I[DD])
          }, DD)))]
        }), sD, (0, VD.jsxs)("dl", {
          className: "ShaderPackFactList",
          children: [(0, VD.jsxs)("div", {
            children: [(0, VD.jsx)("dt", {
              children: LD("shaderPackListing:downloads")
            }), (0, VD.jsx)("dd", {
              children: (0, rD.N)(zD.downloads)
            })]
          }), (0, VD.jsx)(HD, {
            label: LD("shaderPackListing:updated"),
            time: zD.listedUpdatedAt,
            now: cD
          }), (0, VD.jsx)(HD, {
            label: LD("shaderPackListing:created"),
            time: zD.publishedAt,
            now: cD
          }), null !== zD.gpuCost && (0, VD.jsxs)("div", {
            children: [(0, VD.jsx)("dt", {
              children: LD("shaderPackListing:lag")
            }), (0, VD.jsx)("dd", {
              children: LD("shaderPackListing:lagPercent", {
                percent: String((0, XD.P)(zD.gpuCost))
              })
            })]
          }), (0, VD.jsxs)("div", {
            children: [(0, VD.jsx)("dt", {
              children: LD("shaderPackListing:size")
            }), (0, VD.jsx)("dd", {
              children: LD("shaderPackListing:sizeValue", {
                kilobytes: String((0, XD.L)(zD.sourceBytes))
              })
            })]
          }), (0, VD.jsxs)("div", {
            children: [(0, VD.jsx)("dt", {
              children: LD("shaderPackListing:files")
            }), (0, VD.jsx)("dd", {
              children: zD.fileCount
            })]
          })]
        })]
      })
    }

    function HD(DD) {
      let {
        label: zD,
        time: wD,
        now: pD
      } = DD;
      const {
        t: sD,
        selectedLanguage: KD
      } = (0, nD.E)(), rD = new Date(wD);
      let cD = rD.toLocaleDateString();
      if (pD - wD <= 30 * LD.f) {
        const DD = (0, nD.n)(KD.code, "shaderPackListing:timeAgo");
        cD = sD("shaderPackListing:timeAgo", {
          time: (0, LD.fb)(DD, wD, pD)
        })
      }
      return (0, VD.jsx)(AD.f, {
        tooltipInner: rD.toLocaleString(),
        children: (0, VD.jsxs)("div", {
          children: [(0, VD.jsx)("dt", {
            children: zD
          }), (0, VD.jsx)("dd", {
            children: cD
          })]
        })
      })
    }
  },
  5049: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => rD
    });
    var pD = wD(1044),
      sD = wD.n(pD),
      KD = wD(1096);

    function rD(DD) {
      let {
        options: zD,
        value: wD,
        onChange: pD,
        ariaLabel: rD,
        className: LD,
        reselectable: cD = !1,
        keepsFocus: gD = !1,
        padTabs: RD
      } = DD;
      const AD = void 0 !== RD;
      return (0, KD.jsx)("div", {
        className: sD()("SegmentedToggle", LD),
        role: "group",
        "aria-label": rD,
        "data-pad-tabs": RD,
        children: zD.map((DD => {
          const zD = DD.value === wD;
          return (0, KD.jsx)("button", {
            type: "button",
            "aria-pressed": zD,
            "data-pad-tab": AD || void 0,
            "data-pad-selected": AD && zD ? "true" : void 0,
            "data-pad-default-focus": AD && zD || void 0,
            "aria-label": DD.ariaLabel,
            title: DD.ariaLabel,
            className: sD()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: zD
            }),
            onMouseDown: gD ? DD => {
              DD.preventDefault()
            } : void 0,
            onClick: () => {
              zD && !cD || pD(DD.value)
            },
            children: DD.label
          }, DD.value)
        }))
      })
    }
  },
  5057: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => KD,
      c: () => rD
    });
    var pD = wD(58);
    const sD = new WeakMap,
      KD = DD => {
        var zD;
        const wD = DD.closest("[data-pad-slider]");
        return wD && null !== (zD = sD.get(wD)) && void 0 !== zD ? zD : null
      },
      rD = (DD, zD) => {
        const wD = (0, pD.useRef)(zD);
        wD.current = zD, (0, pD.useEffect)((() => {
          if (DD.current) return ((DD, zD) => (sD.set(DD, zD), () => {
            sD.get(DD) === zD && sD.delete(DD)
          }))(DD.current, {
            adjust: DD => {
              wD.current.adjust(DD)
            },
            setFraction: DD => {
              wD.current.setFraction(DD)
            },
            endDrag: () => {
              wD.current.endDrag()
            }
          })
        }), [DD])
      }
  },
  6693: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => sD,
      c: () => KD
    });
    var pD = wD(35);
    const sD = "shaderPack";
    async function KD() {
      var DD;
      let zD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (DD = await pD.g.getItem(sD, zD)) && void 0 !== DD ? DD : null
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);