export const id = 113;
export const ids = [113];
export const modules = {
  5019: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => KG,
      e: () => zG,
      f: () => hG,
      g: () => rG
    });
    var wG = ZG(51),
      SG = ZG(5021),
      LG = ZG(4396),
      yG = ZG(1320),
      kG = ZG(5039),
      UG = ZG(1006),
      YG = ZG.n(UG),
      VG = ZG(1311),
      pG = ZG(1702),
      fG = ZG(5042),
      QG = ZG(1067);

    function KG(GG) {
      let {
        label: bG,
        onClick: ZG,
        checked: wG,
        circleInfoText: SG,
        className: kG,
        disabled: UG,
        note: VG
      } = GG;
      return (0, QG.jsxs)("div", {
        "aria-disabled": UG || void 0,
        "data-pad-focusable": !0,
        className: YG()("SettingBox CheckboxContainer", {
          [kG]: kG,
          SettingBoxDisabled: UG
        }),
        onClick: () => {
          UG || ZG(!wG)
        },
        children: [(0, QG.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, QG.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, QG.jsx)(LG.e, {
              className: "SettingsCheckbox",
              checked: wG,
              disabled: UG,
              onChange: () => {}
            })
          }), (0, QG.jsxs)("div", {
            className: "CheckboxText",
            children: [bG, SG && (0, QG.jsx)("span", {
              onClick: GG => GG.stopPropagation(),
              children: (0, QG.jsx)(yG.d, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: SG
              })
            })]
          })]
        }), VG && (0, QG.jsx)("div", {
          className: "SettingNote",
          children: VG
        })]
      })
    }

    function hG(GG) {
      let {
        name: bG,
        onChange: ZG,
        min: SG,
        max: LG,
        step: kG,
        initValue: UG,
        circleInfoText: VG,
        format: pG,
        className: fG,
        padStep: KG,
        disabled: hG = !1,
        selectableMax: dG,
        cappedNote: rG,
        onChangeComplete: zG
      } = GG;
      const [EG, oG] = (0, wG.useState)(UG), XG = (0, wG.useRef)(UG);
      (0, wG.useEffect)((() => {
        XG.current = UG, oG(UG)
      }), [UG]);
      const uG = void 0 !== dG && dG < LG,
        iG = uG ? {
          "--slider-selectable": (dG - SG) / (LG - SG)
        } : void 0;
      return (0, QG.jsxs)("div", {
        className: YG()("SettingBox SettingsSliderDiv", {
          [fG]: fG,
          SettingBoxDisabled: hG,
          SliderCapped: uG
        }),
        style: iG,
        children: [(0, QG.jsxs)("div", {
          className: "SliderText",
          children: [`${bG}: ${pG?pG(EG):EG}`, VG && (0, QG.jsx)(yG.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: VG
          })]
        }), (0, QG.jsx)("div", {
          className: "SliderDiv",
          children: (0, QG.jsx)(JG, {
            value: EG,
            min: SG,
            max: LG,
            step: kG,
            onChange: GG => {
              if (uG && GG >= dG && EG === dG) return;
              const bG = uG ? Math.min(GG, dG) : GG;
              XG.current = bG, oG(bG), ZG(bG)
            },
            onChangeComplete: zG && (() => {
              zG(XG.current)
            }),
            format: pG,
            padStep: KG,
            disabled: hG
          })
        }), uG && rG && (0, QG.jsx)("div", {
          className: "SettingNote",
          children: rG
        })]
      })
    }
    const dG = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function JG(GG) {
      var bG;
      let {
        value: ZG,
        min: LG,
        max: yG,
        step: kG,
        onChange: UG,
        orientation: YG,
        reverse: VG,
        setIsChanging: pG,
        tooltip: KG,
        labels: hG,
        handleLabel: JG,
        format: rG,
        onChangeStart: zG,
        onChangeComplete: EG,
        padStep: oG,
        disabled: XG = !1
      } = GG;
      const uG = (0, wG.useRef)(null),
        iG = (0, wG.useRef)(null);
      (0, wG.useLayoutEffect)((() => {
        var GG, bG, ZG;
        const wG = null !== (GG = null === (bG = uG.current) || void 0 === bG ? void 0 : bG.querySelector(".rangeslider")) && void 0 !== GG ? GG : null;
        null === wG || void 0 === wG || wG.setAttribute("data-pad-slider", ""), null === wG || void 0 === wG || wG.setAttribute("data-pad-focusable", ""), null === wG || void 0 === wG || null === (ZG = wG.querySelector(".rangeslider__handle")) || void 0 === ZG || ZG.setAttribute("data-pad-slider-handle", ""), iG.current = wG
      }), []), (0, wG.useLayoutEffect)((() => {
        var GG, bG;
        XG ? null === (GG = iG.current) || void 0 === GG || GG.setAttribute("aria-disabled", "true") : null === (bG = iG.current) || void 0 === bG || bG.removeAttribute("aria-disabled")
      }), [XG]);
      const CG = (null !== (bG = String(kG).split(".")[1]) && void 0 !== bG ? bG : "").length,
        WG = GG => {
          const bG = Number((Math.round((GG - LG) / kG) * kG + LG).toFixed(CG));
          return Math.min(yG, Math.max(LG, bG))
        },
        mG = (0, wG.useRef)(EG);
      mG.current = EG, (0, wG.useEffect)((() => {
        const GG = uG.current;
        if (!GG) return;
        const bG = GG => {
          var bG;
          dG.has(GG.key) && (null === (bG = mG.current) || void 0 === bG || bG.call(mG))
        };
        return GG.addEventListener("keyup", bG), () => {
          GG.removeEventListener("keyup", bG)
        }
      }), []);
      const IG = (0, wG.useRef)(!1);
      return (0, fG.f)(iG, {
        adjust: GG => {
          if (XG) return;
          const bG = null !== oG && void 0 !== oG ? oG : Math.max(kG, Math.round((yG - LG) / 20 / kG) * kG),
            wG = WG(ZG + GG * bG * (VG ? -1 : 1));
          wG !== ZG && (null === zG || void 0 === zG || zG(), UG(wG), null === EG || void 0 === EG || EG())
        },
        setFraction: GG => {
          if (XG) return;
          const bG = WG(LG + (VG ? 1 - GG : GG) * (yG - LG));
          bG !== ZG && (IG.current || (IG.current = !0, null === zG || void 0 === zG || zG()), UG(bG))
        },
        endDrag: () => {
          IG.current && (IG.current = !1, null === EG || void 0 === EG || EG())
        }
      }), (0, QG.jsx)("div", {
        ref: uG,
        style: {
          display: "contents"
        },
        children: (0, QG.jsx)(SG.e, {
          value: ZG,
          min: LG,
          max: yG,
          step: kG,
          onChange: UG,
          orientation: YG,
          reverse: VG,
          tooltip: KG,
          labels: hG,
          handleLabel: JG,
          format: rG,
          onChangeStart: () => {
            null === zG || void 0 === zG || zG(), null === pG || void 0 === pG || pG(!0)
          },
          onChangeComplete: () => {
            null === pG || void 0 === pG || pG(!1), null === EG || void 0 === EG || EG()
          }
        })
      })
    }
    async function rG() {
      const GG = VG.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await GG.getResult() && (0, pG.reloadBloxd)()
    }

    function zG(GG) {
      let {
        label: bG,
        options: ZG,
        value: wG,
        onChange: SG,
        circleInfoText: LG
      } = GG;
      return (0, QG.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, QG.jsxs)("div", {
          className: "SliderText",
          children: [bG, LG && (0, QG.jsx)(yG.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: LG
          })]
        }), (0, QG.jsx)(kG.c, {
          ariaLabel: bG,
          options: ZG,
          value: wG,
          onChange: SG
        })]
      })
    }
  },
  6668: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      default: () => OG
    });
    var wG = ZG(51),
      SG = ZG(1457),
      LG = ZG(6561),
      yG = ZG(1177),
      kG = ZG(352),
      UG = ZG(1490),
      YG = ZG(1302),
      VG = ZG(1444),
      pG = ZG(1393),
      fG = ZG(1320),
      QG = ZG(1557),
      KG = ZG(2575),
      hG = ZG(2719),
      dG = ZG(4573),
      JG = ZG(1092),
      rG = ZG(1431),
      zG = ZG(80),
      EG = ZG(1151);
    const oG = ZG.p + "static/media/bloxdhubLogo.6a6c367af2ad6e6f1eb3.webp";
    var XG = ZG(1006),
      uG = ZG.n(XG),
      iG = ZG(1016),
      CG = ZG(1311),
      WG = ZG(6559),
      mG = ZG(1067);
    const IG = (0, wG.lazy)((() => Promise.all([ZG.e(109), ZG.e(78), ZG.e(136), ZG.e(135), ZG.e(114), ZG.e(402)]).then((() => ZG(6591))).then((GG => ({
      default: GG.ShaderPackPublishForm
    })))));

    function FG(GG) {
      let {
        details: bG,
        owner: ZG,
        onChanged: SG
      } = GG;
      const {
        t: yG
      } = (0, EG.w)(), kG = (0, VG.useNavigatePreserveSearch)(), {
        userContext: UG
      } = (0, JG.e)(), [fG, QG] = (0, wG.useState)(!1), [KG, hG] = (0, wG.useState)(null), [dG, zG] = (0, wG.useState)(!1), {
        packId: oG,
        name: XG,
        description: FG,
        live: vG
      } = bG;
      async function aG(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SG;
        QG(!0), hG(null);
        try {
          await GG(), bG()
        } catch (ZG) {
          console.error("Failed to change a shader pack", ZG), hG((0, WG.z)(ZG, yG, "shaderPackListing:ownerActionFailed"))
        } finally {
          QG(!1)
        }
      }
      const cG = (0, WG.s)(UG);
      return (0, mG.jsxs)("section", {
        className: "ShaderPackOwnerPanel",
        children: [(0, mG.jsx)("h2", {
          className: "ShaderPackSectionTitle",
          children: yG("general:manage")
        }), (0, WG.Z)(ZG, !(null === vG || void 0 === vG || !vG.renderId), Date.now(), yG).map((GG => (0, mG.jsxs)("div", {
          className: uG()("ShaderPackOwnerNotice", {
            Warning: "warning" === GG.tone
          }),
          children: [(0, mG.jsx)(iG.c, {
            name: "warning" === GG.tone ? "triangle-exclamation" : "circle-info"
          }), (0, mG.jsxs)("div", {
            children: [GG.text, GG.detail && (0, mG.jsx)("pre", {
              className: "ShaderPackOwnerNoticeDetail",
              children: GG.detail
            })]
          })]
        }, GG.text))), bG.ban && (0, mG.jsxs)("div", {
          className: "ShaderPackOwnerNotice Warning",
          children: [(0, mG.jsx)(iG.c, {
            name: "ban"
          }), (0, mG.jsxs)("div", {
            children: ["Banned by ", bG.ban.byName, " on ", new Date(bG.ban.at).toLocaleString()]
          })]
        }), KG && (0, mG.jsx)("div", {
          className: "ShaderPackOwnerError",
          children: KG
        }), (0, mG.jsxs)("div", {
          className: "ShaderPackOwnerActions",
          children: [(0, mG.jsxs)(pG.K, {
            disabled: fG,
            onClick: () => {
              !async function() {
                const GG = await CG.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:renameTitle",
                  initialValue: XG,
                  maxLength: LG.B,
                  submitText: "general:save",
                  validate: GG => GG.trim().length < LG.C ? yG("shaderPackListing:nameTooShort", {
                    min: String(LG.C)
                  }) : null
                }).getResult();
                "notificationTornDown" !== GG && "submit" === (null === GG || void 0 === GG ? void 0 : GG.type) && GG.value.trim() !== XG && await aG((() => rG.d.updateShaderPack(UG, {
                  packId: oG,
                  name: GG.value.trim()
                })))
              }()
            },
            children: [(0, mG.jsx)(iG.c, {
              name: "pen"
            }), " ", yG("shaderPackListing:rename")]
          }), (0, mG.jsxs)(pG.K, {
            disabled: fG,
            onClick: () => {
              !async function() {
                const GG = await CG.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:editDescription",
                  initialValue: FG,
                  maxLength: LG.q,
                  multiline: !0,
                  allowEmptySubmit: !0,
                  submitText: "general:save"
                }).getResult();
                "notificationTornDown" !== GG && "submit" === (null === GG || void 0 === GG ? void 0 : GG.type) && GG.value.trim() !== FG && await aG((() => rG.d.updateShaderPack(UG, {
                  packId: oG,
                  description: GG.value.trim()
                })))
              }()
            },
            children: [(0, mG.jsx)(iG.c, {
              name: "file-lines"
            }), " ", yG("shaderPackListing:editDescription")]
          }), (0, mG.jsxs)(pG.K, {
            disabled: fG || ZG.isBanned && !ZG.listed,
            onClick: () => {
              aG((() => rG.d.updateShaderPack(UG, {
                packId: oG,
                listed: !ZG.listed
              })))
            },
            children: [(0, mG.jsx)(iG.c, {
              name: ZG.listed ? "eye-slash" : "eye"
            }), " ", yG(ZG.listed ? "shaderPackListing:unlist" : "shaderPackListing:relist")]
          }), !ZG.isBanned && (0, mG.jsxs)(pG.d, {
            disabled: fG,
            onClick: () => {
              zG(!dG)
            },
            children: [(0, mG.jsx)(iG.c, {
              name: "upload"
            }), " ", yG("shaderPackListing:uploadVersion")]
          }), (0, mG.jsxs)(pG.E, {
            disabled: fG || ZG.isBanned,
            onClick: () => {
              !async function() {
                !0 === await CG.NotificationProvider.showPromptPopup({
                  title: "shaderPackListing:deleteTitle",
                  subtitle: "shaderPackListing:deleteSubtitle",
                  confirmText: "general:delete",
                  cancelText: "general:cancel",
                  destructive: !0
                }).getResult() && await aG((() => rG.d.deleteShaderPack(UG, oG)), (() => {
                  kG(`${WG.X}?section=mine`, {
                    replace: !0
                  })
                }))
              }()
            },
            children: [(0, mG.jsx)(iG.c, {
              name: "trash-can"
            }), " ", yG("general:delete")]
          }), cG && (0, mG.jsxs)(pG.E, {
            disabled: fG,
            onClick: () => {
              aG((() => rG.d.setShaderPackBanned(UG, oG, !ZG.isBanned)))
            },
            children: [(0, mG.jsx)(iG.c, {
              name: ZG.isBanned ? "circle-check" : "ban"
            }), " ", ZG.isBanned ? "Unban" : "Ban"]
          })]
        }), dG && (0, mG.jsx)(wG.Suspense, {
          fallback: (0, mG.jsx)(YG.b, {}),
          children: (0, mG.jsx)(IG, {
            existing: {
              packId: oG,
              name: XG,
              description: FG
            },
            onPublished: () => {
              zG(!1), SG()
            }
          })
        })]
      })
    }
    var vG = ZG(59),
      aG = ZG(1873),
      cG = ZG(1239),
      lG = ZG(5042),
      jG = ZG(1163),
      PG = ZG(6576),
      MG = ZG(6567),
      AG = ZG(6583);

    function sG(GG) {
      let {
        item: bG
      } = GG;
      const {
        t: ZG
      } = (0, EG.w)(), [SG] = (0, PG.i)(), [yG, kG] = (0, wG.useState)(SG), [UG, YG] = (0, wG.useState)(!1), [VG, pG] = (0, wG.useState)(!1), {
        s3Url: fG
      } = jG.clientSideServerUrls, {
        width: QG,
        height: KG
      } = LG.u.large, hG = (0, LG.v)(fG, bG, yG, "large"), {
        renderVersion: dG
      } = bG;
      return (0, mG.jsxs)("div", {
        className: "ShaderPackPreviews",
        children: [(0, mG.jsx)(AG.b, {
          selected: yG,
          onSelect: GG => {
            kG(GG), YG(!1)
          },
          imageUrl: GG => (0, LG.v)(fG, bG, GG, "thumb")
        }), (0, mG.jsxs)("div", {
          className: "ShaderPackPreviewStage",
          children: [!UG && (0, mG.jsxs)("button", {
            type: "button",
            className: "ShaderPackPreviewMain",
            title: null === dG ? void 0 : ZG("shaderPackListing:fullSize"),
            disabled: null === dG,
            onClick: () => {
              pG(!0)
            },
            children: [(0, mG.jsx)("img", {
              src: hG,
              width: QG,
              height: KG,
              alt: ZG(WG.jb[yG]),
              draggable: !1
            }), (0, mG.jsx)(MG.b, {
              item: bG
            })]
          }), !UG && null !== dG && (0, mG.jsxs)(eG, {
            side: "Right",
            onClick: () => {
              YG(!0)
            },
            children: [(0, mG.jsx)(iG.c, {
              name: "arrows-left-right"
            }), " ", ZG("shaderPackListing:compare")]
          }), UG && null !== dG && (0, mG.jsx)(gG, {
            item: bG,
            packUrl: hG,
            baselineUrl: (0, LG.n)(fG, dG, yG, "large")
          }), UG && (0, mG.jsx)(eG, {
            side: "Left",
            onClick: () => {
              YG(!1)
            },
            children: ZG("shaderPackListing:withPack")
          }), UG && (0, mG.jsx)(eG, {
            side: "Right",
            onClick: () => {
              YG(!1)
            },
            children: ZG("shaderPackListing:withoutPack")
          })]
        }), VG && (0, mG.jsx)(qG, {
          fullUrl: (0, LG.v)(fG, bG, yG, "full"),
          largeUrl: hG,
          alt: ZG(WG.jb[yG]),
          onClose: () => {
            pG(!1)
          }
        })]
      })
    }

    function qG(GG) {
      let {
        fullUrl: bG,
        largeUrl: ZG,
        alt: SG,
        onClose: LG
      } = GG;
      const yG = (0, wG.useRef)(null);
      return (0, cG.w)("popup", yG, LG), (0, wG.useEffect)((() => {
        function GG(GG) {
          "Escape" === GG.key && (GG.stopPropagation(), LG())
        }
        return window.addEventListener("keydown", GG, !0), () => {
          window.removeEventListener("keydown", GG, !0)
        }
      }), [LG]), (0, vG.createPortal)((0, mG.jsxs)("div", {
        ref: yG,
        className: "ShaderPackFullSize",
        onClick: LG,
        children: [(0, mG.jsx)("img", {
          className: "ShaderPackFullSizeImage",
          src: bG,
          alt: SG,
          draggable: !1,
          style: {
            backgroundImage: `url(${ZG})`
          }
        }), (0, mG.jsx)(pG.j, {
          className: "ShaderPackFullSizeClose",
          onClick: LG
        })]
      }), document.body)
    }
    const nG = 5;

    function gG(GG) {
      let {
        item: bG,
        packUrl: ZG,
        baselineUrl: SG
      } = GG;
      const {
        t: yG
      } = (0, EG.w)(), [kG, UG] = (0, wG.useState)(50), YG = (0, wG.useRef)(!1), VG = (0, wG.useRef)(null), {
        width: pG,
        height: fG
      } = LG.u.large;

      function QG(GG) {
        UG((bG => (0, aG.d)(bG + GG, 0, 100)))
      }

      function KG(GG) {
        const bG = GG.currentTarget.getBoundingClientRect();
        UG((0, aG.d)((GG.clientX - bG.left) / bG.width * 100, 0, 100))
      }
      return (0, lG.f)(VG, {
        adjust: GG => {
          QG(GG * nG)
        },
        setFraction: GG => {
          UG(100 * GG)
        },
        endDrag: () => {}
      }), (0, mG.jsxs)("div", {
        ref: VG,
        className: "ShaderPackCompare",
        "data-pad-slider": "",
        "data-pad-focusable": "",
        role: "slider",
        tabIndex: 0,
        "aria-label": yG("shaderPackListing:compare"),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(kG),
        style: {
          "--split": `${kG}%`
        },
        onKeyDown: function(GG) {
          const bG = "ArrowLeft" === GG.key ? -nG : "ArrowRight" === GG.key ? nG : 0;
          0 !== bG && (GG.preventDefault(), QG(bG))
        },
        onPointerDown: GG => {
          YG.current = !0, GG.currentTarget.setPointerCapture(GG.pointerId), KG(GG)
        },
        onPointerMove: GG => {
          YG.current && KG(GG)
        },
        onPointerUp: () => {
          YG.current = !1
        },
        onPointerCancel: () => {
          YG.current = !1
        },
        children: [(0, mG.jsx)("img", {
          className: "ShaderPackCompareBaseline",
          src: SG,
          width: pG,
          height: fG,
          alt: "",
          draggable: !1,
          style: {
            backgroundImage: `url(${ZG})`
          }
        }), (0, mG.jsx)("div", {
          className: "ShaderPackCompareLine"
        }), (0, mG.jsx)("img", {
          className: "ShaderPackComparePack",
          src: ZG,
          width: pG,
          height: fG,
          alt: "",
          draggable: !1
        }), (0, mG.jsx)(MG.b, {
          item: bG,
          className: "ShaderPackCompareNotice"
        })]
      })
    }

    function eG(GG) {
      let {
        side: bG,
        onClick: ZG,
        children: wG
      } = GG;
      return (0, mG.jsx)("button", {
        type: "button",
        className: `ShaderPackStageButton ${bG}`,
        onClick: ZG,
        children: (0, mG.jsx)("span", {
          className: "ShaderPackStageButtonFace SmallTextBold",
          children: wG
        })
      })
    }
    var RG = ZG(5019),
      TG = ZG(318),
      HG = ZG(6661);
    const tG = {
      compiler: "shaderPack:compilerUnavailable",
      download: "shaderPackListing:useDownloadFailed",
      apiVersion: "shaderPackListing:useOtherApiVersion",
      invalid: "shaderPackListing:useInvalid",
      errors: "shaderPackListing:useFailsHere",
      save: "shaderPack:saveFailed"
    };

    function DG(GG) {
      const {
        userContext: bG
      } = (0, JG.e)(), [SG, LG] = (0, wG.useState)(null), [yG, kG] = (0, wG.useState)(!1), [UG, YG] = (0, wG.useState)(!1), [VG, pG] = (0, wG.useState)(null), fG = null === GG || void 0 === GG ? void 0 : GG.packId, QG = null === GG || void 0 === GG ? void 0 : GG.sourceHash;
      return (0, wG.useEffect)((() => {
        if (kG(!1), pG(null), void 0 === fG) return;
        let GG = !1;
        return Promise.all([(0, zG.hasUsableWebGpuAdapter)(), (0, HG.e)()]).then((bG => {
          let [ZG, wG] = bG;
          var SG;
          GG || (LG(ZG), kG((null === wG || void 0 === wG || null === (SG = wG.listing) || void 0 === SG ? void 0 : SG.packId) === fG && wG.listing.sourceHash === QG))
        })).catch((bG => {
          console.error("Failed to check whether this shader pack can be used", bG), GG || LG(!1)
        })), () => {
          GG = !0
        }
      }), [fG, QG]), {
        webGpuUsable: SG,
        inUse: yG,
        busy: UG,
        errorKey: VG,
        use: () => {
          null !== GG && async function(GG) {
            YG(!0), pG(null);
            try {
              const {
                installListedShaderPack: wG
              } = await Promise.all([ZG.e(78), ZG.e(136), ZG.e(115)]).then((() => ZG(40874))), SG = await wG({
                packId: GG.packId,
                sourceHash: GG.sourceHash,
                name: GG.name,
                ownerName: GG.ownerName,
                description: GG.description
              });
              if ("failed" === SG.kind) return void pG(tG[SG.reason]);
              kG(!0), rG.d.recordShaderPackDownload(bG, GG.packId).catch((GG => {
                console.error("Failed to count a shader pack's download", GG)
              })), (0, RG.g)()
            } catch (wG) {
              console.error("Failed to use the shader pack", wG), pG("shaderPack:unexpectedError")
            } finally {
              YG(!1)
            }
          }(GG)
        }
      }
    }

    function NG(GG) {
      let {
        packUse: bG
      } = GG;
      const {
        t: ZG
      } = (0, EG.w)(), {
        webGpuUsable: wG,
        inUse: SG,
        busy: LG,
        errorKey: yG,
        use: kG
      } = bG;
      return (0, mG.jsxs)("div", {
        className: "ShaderPackUse",
        children: [(0, mG.jsxs)(pG.k, {
          disabled: !0 !== wG || SG,
          loading: LG,
          onClick: kG,
          children: [(0, mG.jsx)(iG.c, {
            name: SG ? "check" : "download"
          }), " ", ZG(SG ? "shaderPackListing:inUse" : "shaderPackListing:use")]
        }), !1 === wG && (0, mG.jsx)("div", {
          className: "ShaderPackUseNote",
          children: ZG((0, TG.k)() ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), yG && (0, mG.jsx)("div", {
          className: "ShaderPackUseNote Error",
          children: ZG(yG)
        })]
      })
    }

    function OG() {
      var GG;
      const {
        t: bG
      } = (0, EG.w)(), ZG = (0, VG.useNavigatePreserveSearch)(), {
        packId: LG
      } = (0, SG.v)(), {
        userContext: yG,
        isUserContextUpdating: kG
      } = (0, JG.e)(), [fG, KG] = (0, wG.useState)(null), [hG, zG] = (0, wG.useState)(null), [oG, XG] = (0, wG.useState)(0), uG = (0, wG.useRef)(0);

      function iG() {
        var GG;
        null !== (GG = (0, VG.getPreviousLocation)()) && void 0 !== GG && GG.startsWith(WG.X) ? ZG(-1) : ZG(WG.X)
      }(0, dG.e)(iG), (0, PG.d)(), (0, wG.useEffect)((() => {
        if (kG || void 0 === LG) return;
        const GG = ++uG.current;
        zG(null), rG.d.getShaderPack(yG, LG).then((bG => {
          uG.current === GG && KG(bG)
        })).catch((bG => {
          uG.current === GG && (console.error("Failed to get the shader pack", bG), KG(null), zG({
            error: bG
          }))
        }))
      }), [LG, yG, kG, oG]);
      const CG = () => {
          XG((GG => GG + 1))
        },
        IG = (null === fG || void 0 === fG ? void 0 : fG.packId) === LG ? fG : null,
        vG = (0, PG.k)(),
        aG = DG(null !== (GG = null === IG || void 0 === IG ? void 0 : IG.live) && void 0 !== GG ? GG : null),
        cG = null !== IG && void 0 !== IG && IG.live ? (0, mG.jsx)(xG, {
          item: IG.live,
          favourites: vG,
          packUse: aG
        }) : null;
      return (0, mG.jsxs)("article", {
        className: "ShaderPackInformation AnimFadeIn",
        children: [null !== IG && (0, mG.jsx)(QG.c, {
          meta: (0, UG.$)(IG.name)
        }), (0, mG.jsx)(pG.b, {
          onClick: iG,
          children: bG("shaderPackListing:backToPacks")
        }), null === IG && null === hG && (0, mG.jsx)("div", {
          className: "ShaderPackInformationMessage",
          children: (0, mG.jsx)(YG.b, {})
        }), null !== hG && (0, mG.jsxs)("div", {
          className: "ShaderPackInformationMessage",
          children: [(0, WG.z)(hG.error, bG, "shaderPackListing:loadPackFailed"), (0, mG.jsx)(pG.d, {
            onClick: CG,
            children: bG("general:tryAgain")
          })]
        }), null !== IG && null === hG && (0, mG.jsxs)("div", {
          className: "ShaderPackInformationBody",
          children: [(0, mG.jsxs)("header", {
            className: "ShaderPackInformationHeader",
            children: [(0, mG.jsx)("h1", {
              className: "FullyFancyText",
              children: IG.name
            }), cG]
          }), IG.live && (0, mG.jsx)(sG, {
            item: IG.live
          }), IG.live && (0, mG.jsx)(BG, {
            item: IG.live,
            ownerPreview: IG.ownerPreview,
            bloxdhubSlug: IG.bloxdhubSlug,
            actions: cG
          }), IG.owner && (0, mG.jsx)(FG, {
            details: IG,
            owner: IG.owner,
            onChanged: CG
          })]
        })]
      })
    }

    function xG(GG) {
      let {
        item: bG,
        favourites: ZG,
        packUse: wG
      } = GG;
      const SG = ZG.isFavourite(bG.packId);
      return (0, mG.jsxs)("div", {
        className: "ShaderPackInformationActions",
        children: [zG.featureFlags.settings.canUseShaderPacks && (0, mG.jsx)(NG, {
          packUse: wG
        }), (0, mG.jsx)(pG.o, {
          className: "ShaderPackInformationLike",
          onClick: () => {
            ZG.toggle(bG.packId)
          },
          isLiked: !0 === SG,
          isLoading: null === SG
        })]
      })
    }

    function BG(GG) {
      let {
        item: bG,
        ownerPreview: ZG,
        bloxdhubSlug: wG,
        actions: SG
      } = GG;
      const {
        t: kG
      } = (0, EG.w)(), UG = (0, hG.r)(), YG = null === wG ? null : (0, LG.c)(wG);
      return (0, mG.jsxs)("div", {
        className: "ShaderPackFacts",
        children: [bG.description && (0, mG.jsx)("p", {
          className: "ShaderPackDescription",
          children: bG.description
        }), (0, mG.jsxs)("div", {
          className: "ShaderPackFeatureList",
          children: [(null !== ZG || null !== YG) && (0, mG.jsx)("div", {
            className: "ShaderPackAuthor",
            children: null !== ZG ? (0, mG.jsxs)(mG.Fragment, {
              children: [(0, mG.jsx)(KG.h, {
                playerSocialPreview: ZG,
                showLocation: !1,
                linkToProfile: !0
              }), null !== YG && (0, mG.jsx)("a", {
                className: "ShaderPackBloxdhubLogo",
                href: YG,
                target: "_blank",
                rel: "noopener noreferrer",
                children: (0, mG.jsx)("img", {
                  src: oG,
                  alt: LG.b
                })
              })]
            }) : (0, mG.jsxs)("a", {
              className: "ShaderPackBloxdhubName",
              href: YG,
              target: "_blank",
              rel: "noopener noreferrer",
              children: [LG.b, (0, mG.jsx)("img", {
                src: oG,
                alt: ""
              })]
            })
          }), WG.D.filter((GG => bG.features.includes(GG))).map((GG => (0, mG.jsx)(VG.LinkPreserveSearch, {
            className: "ShaderPackFeature",
            to: (0, WG.R)(GG),
            children: kG(WG.S[GG])
          }, GG)))]
        }), SG, (0, mG.jsxs)("dl", {
          className: "ShaderPackFactList",
          children: [(0, mG.jsxs)("div", {
            children: [(0, mG.jsx)("dt", {
              children: kG("shaderPackListing:downloads")
            }), (0, mG.jsx)("dd", {
              children: (0, yG.O)(bG.downloads)
            })]
          }), (0, mG.jsx)(Gb, {
            label: kG("shaderPackListing:updated"),
            time: bG.listedUpdatedAt,
            now: UG
          }), (0, mG.jsx)(Gb, {
            label: kG("shaderPackListing:created"),
            time: bG.publishedAt,
            now: UG
          }), null !== bG.gpuCost && (0, mG.jsxs)("div", {
            children: [(0, mG.jsx)("dt", {
              children: kG("shaderPackListing:lag")
            }), (0, mG.jsx)("dd", {
              children: kG("shaderPackListing:lagPercent", {
                percent: String((0, WG.W)(bG.gpuCost))
              })
            })]
          }), (0, mG.jsxs)("div", {
            children: [(0, mG.jsx)("dt", {
              children: kG("shaderPackListing:size")
            }), (0, mG.jsx)("dd", {
              children: kG("shaderPackListing:sizeValue", {
                kilobytes: String((0, WG.V)(bG.sourceBytes))
              })
            })]
          }), (0, mG.jsxs)("div", {
            children: [(0, mG.jsx)("dt", {
              children: kG("shaderPackListing:files")
            }), (0, mG.jsx)("dd", {
              children: bG.fileCount
            })]
          })]
        })]
      })
    }

    function Gb(GG) {
      let {
        label: bG,
        time: ZG,
        now: wG
      } = GG;
      const {
        t: SG,
        selectedLanguage: LG
      } = (0, EG.w)(), yG = new Date(ZG);
      let UG = yG.toLocaleDateString();
      if (wG - ZG <= 30 * kG.j) {
        const GG = (0, EG.j)(LG.code, "shaderPackListing:timeAgo");
        UG = SG("shaderPackListing:timeAgo", {
          time: (0, kG.lb)(GG, ZG, wG)
        })
      }
      return (0, mG.jsx)(fG.h, {
        tooltipInner: yG.toLocaleString(),
        children: (0, mG.jsxs)("div", {
          children: [(0, mG.jsx)("dt", {
            children: bG
          }), (0, mG.jsx)("dd", {
            children: UG
          })]
        })
      })
    }
  },
  5039: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => yG
    });
    var wG = ZG(1006),
      SG = ZG.n(wG),
      LG = ZG(1067);

    function yG(GG) {
      let {
        options: bG,
        value: ZG,
        onChange: wG,
        ariaLabel: yG,
        className: kG,
        reselectable: UG = !1,
        keepsFocus: YG = !1,
        padTabs: VG
      } = GG;
      const pG = void 0 !== VG;
      return (0, LG.jsx)("div", {
        className: SG()("SegmentedToggle", kG),
        role: "group",
        "aria-label": yG,
        "data-pad-tabs": VG,
        children: bG.map((GG => {
          const bG = GG.value === ZG;
          return (0, LG.jsx)("button", {
            type: "button",
            "aria-pressed": bG,
            "data-pad-tab": pG || void 0,
            "data-pad-selected": pG && bG ? "true" : void 0,
            "data-pad-default-focus": pG && bG || void 0,
            "aria-label": GG.ariaLabel,
            title: GG.ariaLabel,
            className: SG()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: bG
            }),
            onMouseDown: YG ? GG => {
              GG.preventDefault()
            } : void 0,
            onClick: () => {
              bG && !UG || wG(GG.value)
            },
            children: GG.label
          }, GG.value)
        }))
      })
    }
  },
  5042: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => LG,
      f: () => yG
    });
    var wG = ZG(51);
    const SG = new WeakMap,
      LG = GG => {
        var bG;
        const ZG = GG.closest("[data-pad-slider]");
        return ZG && null !== (bG = SG.get(ZG)) && void 0 !== bG ? bG : null
      },
      yG = (GG, bG) => {
        const ZG = (0, wG.useRef)(bG);
        ZG.current = bG, (0, wG.useEffect)((() => {
          if (GG.current) return ((GG, bG) => (SG.set(GG, bG), () => {
            SG.get(GG) === bG && SG.delete(GG)
          }))(GG.current, {
            adjust: GG => {
              ZG.current.adjust(GG)
            },
            setFraction: GG => {
              ZG.current.setFraction(GG)
            },
            endDrag: () => {
              ZG.current.endDrag()
            }
          })
        }), [GG])
      }
  },
  6661: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => SG,
      e: () => LG
    });
    var wG = ZG(29);
    const SG = "shaderPack";
    async function LG() {
      var GG;
      let bG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (GG = await wG.e.getItem(SG, bG)) && void 0 !== GG ? GG : null
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);