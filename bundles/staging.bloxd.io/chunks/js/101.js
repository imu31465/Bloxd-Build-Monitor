export const id = 101;
export const ids = [101];
export const modules = {
  4677: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => yD
    });
    var ID = cD(1049),
      pD = cD.n(ID),
      iD = cD(1064),
      fD = cD(1328),
      bD = cD(3314),
      QD = cD(120),
      wD = cD(3346),
      SD = cD(3342),
      BD = cD(1093);

    function yD(DD) {
      let {
        game: CD
      } = DD;
      const cD = (0, QD.i)() ? "large" : "small",
        ID = (0, wD.f)(CD, cD),
        yD = (0, bD.f)(ID),
        MD = void 0 !== yD.blurhash;
      return (0, BD.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [yD.isLoading && !MD && (0, BD.jsx)(fD.e, {
          loaderType: "Secondary"
        }), !yD.failed && (null !== yD.src || MD) && (0, BD.jsx)("div", {
          className: pD()("SchematicImage", SD.h, {
            SchematicImageFadeIn: yD.fadeIn && !MD
          }),
          style: (0, SD.d)(yD),
          children: (0, BD.jsx)(SD.b, {
            image: yD
          })
        }), yD.failed && (0, BD.jsx)("div", {
          className: "SchematicImageError",
          children: (0, BD.jsx)(iD.c, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  4808: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => MD
    });
    var ID = cD(53),
      pD = cD(1049),
      iD = cD.n(pD),
      fD = cD(4734),
      bD = cD(1328),
      QD = cD(1192),
      wD = cD(2948),
      SD = cD(3095),
      BD = cD(1064),
      yD = cD(1093);

    function MD(DD) {
      let {
        folderName: CD,
        onTexturePackUpdated: pD,
        disabled: MD = !1,
        maxFileSizeMb: tD,
        packOwner: ZD
      } = DD;
      const {
        t: oD
      } = (0, QD.F)(), [vD, ND] = (0, ID.useState)(!1), [gD, XD] = (0, ID.useState)(null), [mD, nD] = (0, ID.useState)(null), OD = (0, ID.useRef)(null);
      const {
        getRootProps: PD,
        getInputProps: HD,
        isDragActive: UD
      } = (0, fD.b)({
        onDrop: async function(DD) {
          ND(!0);
          try {
            const CD = await (0, wD.w)(DD);
            if ("customGame" === ZD && (0, SD.n)(CD)) return void XD(oD(SD.c));
            if (void 0 !== tD) {
              const DD = JSON.stringify(CD).length / 1048576;
              if (DD > tD) return void XD(`File size is too large. Max size is ${tD}MB. Current size is ${DD}MB.`)
            }
            XD(null), nD(null), pD(CD), OD.current = CD,
              function(DD, CD) {
                const ID = DD.modelOverrides;
                ID && Promise.all([cD.e(195), cD.e(194)]).then((() => cD(9113))).then((cD => {
                  let {
                    packDisplayName: pD,
                    refusedPackModels: iD,
                    packModelSummary: fD
                  } = cD;
                  const bD = pD(DD.metaData);
                  CD(fD(bD, iD(bD, ID, !1)))
                })).catch((DD => {
                  console.error("Checking the texture pack's models failed:", DD)
                }))
              }(CD, (DD => {
                OD.current === CD && nD(DD)
              }))
          } catch {
            XD("Invalid Texture Pack Folder")
          } finally {
            ND(!1)
          }
        },
        useFsAccessApi: !1,
        disabled: MD
      });
      return (0, yD.jsxs)("div", {
        className: "CustomTexturePackContainer",
        children: [(0, yD.jsxs)("div", {
          className: "CustomTextureWarning",
          children: [oD("settingsMenu:customTextureWarning"), ".", (0, yD.jsx)("br", {}), oD("settingsMenu:viewDocumentation"), ":", " ", (0, yD.jsx)("a", {
            href: "https://github.com/Bloxdy/texturePacks",
            target: "_blank",
            rel: "noreferrer",
            children: "github.com/Bloxdy/texturePacks"
          })]
        }), gD && (0, yD.jsxs)("div", {
          className: "CustomTextureError",
          children: [oD("general:error"), ": ", gD]
        }), mD && (0, yD.jsx)("div", {
          className: "CustomTextureError",
          children: mD
        }), (0, yD.jsxs)("div", {
          ...PD({
            className: iD()("CustomTextureFolderUpload", {
              ActiveDrag: UD,
              Disabled: MD
            })
          }),
          children: [(0, yD.jsx)("input", {
            ...HD({
              webkitdirectory: "true"
            })
          }), vD && (0, yD.jsx)("div", {
            className: "CustomTextureFolderUploadLoading",
            children: (0, yD.jsx)(bD.e, {})
          }), !vD && !UD && CD && (0, yD.jsxs)(yD.Fragment, {
            children: [(0, yD.jsx)("div", {
              className: "CustomTextureFolderUploadIcon Active",
              children: (0, yD.jsx)(BD.c, {
                name: "folder-image"
              })
            }), (0, yD.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions Active",
              children: CD
            })]
          }), !vD && (UD || !CD) && (0, yD.jsxs)(yD.Fragment, {
            children: [(0, yD.jsx)("div", {
              className: "CustomTextureFolderUploadIcon",
              children: (0, yD.jsx)(BD.c, {
                name: "up-from-bracket"
              })
            }), (0, yD.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions",
              children: "Drag and drop a Texture Pack folder here"
            })]
          })]
        })]
      })
    }
  },
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
  4767: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => vD,
      f: () => ND
    });
    var ID = cD(2948),
      pD = cD(2952),
      iD = cD(53),
      fD = cD(1049),
      bD = cD.n(fD),
      QD = cD(1328),
      wD = cD(2946),
      SD = cD(1340),
      BD = cD(4770),
      yD = cD(4808),
      MD = cD(646),
      tD = cD(4811),
      ZD = cD(1093);

    function oD() {
      (0, BD.j)("texturePackPickReload")
    }

    function vD(DD) {
      var CD;
      let {
        setApplySettingsCallback: cD
      } = DD;
      const [, fD] = (0, iD.useReducer)((DD => DD + 1), 0), bD = (0, iD.useRef)(!1), QD = (0, iD.useRef)(null);

      function vD(DD, CD) {
        wD.e.setFromJson(DD, "player");
        const ID = wD.e.saveTexturePack();
        if (MD.q) {
          const DD = wD.e.toJson();
          ID.then((CD => {
            CD && (0, tD.e)(DD, oD)
          }))
        } else bD.current ||= CD, QD.current !== wD.e.getId() || wD.e.getId() === pD.r.CUSTOM && bD.current ? cD((() => BD.j)) : cD(null);
        fD()
      }
      async function gD(DD) {
        if (wD.e.getId() !== DD.metaData.id) {
          if (wD.e.getId() === pD.r.CUSTOM && wD.e.getFromFolderName()) {
            const DD = SD.NotificationProvider.showPromptPopup({
              title: "settingsMenu:loseChangesTitle",
              subtitle: "settingsMenu:loseChangesSubtitle",
              confirmText: "general:continue",
              destructive: !0,
              confirmTooltip: "",
              cancelText: "general:cancel",
              cancelTooltip: ""
            });
            if (!0 !== await DD.getResult()) return
          }
          vD(DD, !1)
        }
      }(0, iD.useEffect)((() => {
        QD.current = wD.e.getId()
      }), []);
      const XD = ID.e,
        mD = [XD, ...Object.values(pD.r).filter((DD => DD !== XD))];
      return (0, ZD.jsx)(ZD.Fragment, {
        children: (0, ZD.jsxs)("div", {
          className: "TexturePackCategory SettingsMenuRightInner",
          children: [(0, ZD.jsx)("div", {
            className: "TexturePackList",
            children: mD.map((DD => (0, ZD.jsx)(ND, {
              id: DD,
              isSelected: DD === wD.e.getId(),
              setSelected: gD
            }, DD)))
          }), wD.e.getId() === pD.r.CUSTOM && (0, ZD.jsx)(yD.d, {
            folderName: null !== (CD = wD.e.getFromFolderName()) && void 0 !== CD ? CD : null,
            onTexturePackUpdated: function(DD) {
              vD(DD, !0)
            },
            packOwner: "player"
          })]
        })
      })
    }

    function ND(DD) {
      let {
        id: CD,
        isSelected: cD,
        setSelected: fD,
        disabled: wD = !1
      } = DD;
      const [SD, BD] = (0, iD.useState)(!0), [yD, MD] = (0, iD.useState)(""), [tD, oD] = (0, iD.useState)(""), [vD, ND] = (0, iD.useState)(""), gD = (0, iD.useRef)({});
      return (0, iD.useEffect)((() => {
        (0, ID.t)(CD).then((DD => {
          var CD;
          DD && (gD.current = DD, BD(!1), MD(gD.current.metaData.name), oD(gD.current.metaData.author), ND(null !== (CD = gD.current.metaData.previewImage) && void 0 !== CD ? CD : ""))
        })).catch((DD => {
          console.warn(`Failed to fetch texture pack ${CD}`, DD)
        }))
      }), [CD]), (0, ZD.jsxs)("div", {
        "data-pad-focusable": !0,
        "aria-disabled": wD || void 0,
        className: bD()("TexturePack", {
          Selected: cD,
          Custom: CD === pD.r.CUSTOM,
          Disabled: wD
        }),
        onClick: () => {
          SD || wD || fD(gD.current)
        },
        children: [(0, ZD.jsx)("div", {
          className: "TexturePackBg",
          style: {
            backgroundImage: vD ? `url(${vD})` : void 0
          }
        }), SD && (0, ZD.jsx)("div", {
          className: "TexturePackName",
          children: (0, ZD.jsx)(QD.e, {})
        }), !SD && yD && (0, ZD.jsx)("div", {
          className: "TexturePackName",
          children: yD
        }), !SD && tD && (0, ZD.jsx)("div", {
          className: "TexturePackAuthor",
          children: tD
        })]
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
  4811: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => bD,
      e: () => fD
    });
    var ID = cD(2952),
      pD = cD(4819);
    let iD = null;

    function fD(DD, CD) {
      iD = {
        pack: DD.metaData.id === ID.e ? null : DD,
        prompt: CD
      }
    }

    function bD(DD, CD) {
      const cD = iD;
      null !== cD && (0, pD.c)(cD.pack, DD) && (iD = null, CD && cD.prompt())
    }
  },
  4819: (DD, CD, cD) => {
    function ID(DD, CD) {
      return pD(DD, CD)
    }

    function pD(DD, CD) {
      if (DD === CD) return !0;
      if ("object" !== typeof DD || "object" !== typeof CD || null === DD || null === CD || Array.isArray(DD) !== Array.isArray(CD)) return !1;
      const cD = DD,
        ID = CD,
        iD = Object.keys(cD);
      return iD.length === Object.keys(ID).length && iD.every((DD => Object.prototype.hasOwnProperty.call(ID, DD) && pD(cD[DD], ID[DD])))
    }
    cD.d(CD, {
      c: () => ID
    })
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);