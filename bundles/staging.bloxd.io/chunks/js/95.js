export const id = 95;
export const ids = [95];
export const modules = {
  4312: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => LB
    });
    var VB = dB(933),
      yB = dB.n(VB),
      pB = dB(946),
      lB = dB(1225),
      JB = dB(2998),
      YB = dB(138),
      gB = dB(3037),
      oB = dB(3026),
      kB = dB(980);

    function LB(BB) {
      let {
        game: TB
      } = BB;
      const dB = (0, YB.m)() ? "large" : "small",
        VB = (0, gB.f)(TB, dB),
        LB = (0, JB.h)(VB),
        OB = void 0 !== LB.blurhash;
      return (0, kB.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [LB.isLoading && !OB && (0, kB.jsx)(lB.b, {
          loaderType: "Secondary"
        }), !LB.failed && (null !== LB.src || OB) && (0, kB.jsx)("div", {
          className: yB()("SchematicImage", oB.e, {
            SchematicImageFadeIn: LB.fadeIn && !OB
          }),
          style: (0, oB.d)(LB),
          children: (0, kB.jsx)(oB.c, {
            image: LB
          })
        }), LB.failed && (0, kB.jsx)("div", {
          className: "SchematicImageError",
          children: (0, kB.jsx)(pB.e, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  4451: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => OB
    });
    var VB = dB(62),
      yB = dB(933),
      pB = dB.n(yB),
      lB = dB(4367),
      JB = dB(1225),
      YB = dB(1078),
      gB = dB(2623),
      oB = dB(2768),
      kB = dB(946),
      LB = dB(980);

    function OB(BB) {
      let {
        folderName: TB,
        onTexturePackUpdated: yB,
        disabled: OB = !1,
        maxFileSizeMb: DB,
        packOwner: uB
      } = BB;
      const {
        t: HB
      } = (0, YB.z)(), [EB, vB] = (0, VB.useState)(!1), [mB, iB] = (0, VB.useState)(null), [NB, tB] = (0, VB.useState)(null), fB = (0, VB.useRef)(null);
      const {
        getRootProps: sB,
        getInputProps: MB,
        isDragActive: zB
      } = (0, lB.c)({
        onDrop: async function(BB) {
          vB(!0);
          try {
            const TB = await (0, gB.o)(BB);
            if ("customGame" === uB && (0, oB.m)(TB)) return void iB(HB(oB.e));
            if (void 0 !== DB) {
              const BB = JSON.stringify(TB).length / 1048576;
              if (BB > DB) return void iB(`File size is too large. Max size is ${DB}MB. Current size is ${BB}MB.`)
            }
            iB(null), tB(null), yB(TB), fB.current = TB,
              function(BB, TB) {
                const VB = BB.modelOverrides;
                VB && Promise.all([dB.e(181), dB.e(180)]).then((() => dB(8623))).then((dB => {
                  let {
                    packDisplayName: yB,
                    refusedPackModels: pB,
                    packModelSummary: lB
                  } = dB;
                  const JB = yB(BB.metaData);
                  TB(lB(JB, pB(JB, VB, !1)))
                })).catch((BB => {
                  console.error("Checking the texture pack's models failed:", BB)
                }))
              }(TB, (BB => {
                fB.current === TB && tB(BB)
              }))
          } catch {
            iB("Invalid Texture Pack Folder")
          } finally {
            vB(!1)
          }
        },
        useFsAccessApi: !1,
        disabled: OB
      });
      return (0, LB.jsxs)("div", {
        className: "CustomTexturePackContainer",
        children: [(0, LB.jsxs)("div", {
          className: "CustomTextureWarning",
          children: [HB("settingsMenu:customTextureWarning"), ".", (0, LB.jsx)("br", {}), HB("settingsMenu:viewDocumentation"), ":", " ", (0, LB.jsx)("a", {
            href: "https://github.com/Bloxdy/texturePacks",
            target: "_blank",
            rel: "noreferrer",
            children: "github.com/Bloxdy/texturePacks"
          })]
        }), mB && (0, LB.jsxs)("div", {
          className: "CustomTextureError",
          children: [HB("general:error"), ": ", mB]
        }), NB && (0, LB.jsx)("div", {
          className: "CustomTextureError",
          children: NB
        }), (0, LB.jsxs)("div", {
          ...sB({
            className: pB()("CustomTextureFolderUpload", {
              ActiveDrag: zB,
              Disabled: OB
            })
          }),
          children: [(0, LB.jsx)("input", {
            ...MB({
              webkitdirectory: "true"
            })
          }), EB && (0, LB.jsx)("div", {
            className: "CustomTextureFolderUploadLoading",
            children: (0, LB.jsx)(JB.b, {})
          }), !EB && !zB && TB && (0, LB.jsxs)(LB.Fragment, {
            children: [(0, LB.jsx)("div", {
              className: "CustomTextureFolderUploadIcon Active",
              children: (0, LB.jsx)(kB.e, {
                name: "folder-image"
              })
            }), (0, LB.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions Active",
              children: TB
            })]
          }), !EB && (zB || !TB) && (0, LB.jsxs)(LB.Fragment, {
            children: [(0, LB.jsx)("div", {
              className: "CustomTextureFolderUploadIcon",
              children: (0, LB.jsx)(kB.e, {
                name: "up-from-bracket"
              })
            }), (0, LB.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions",
              children: "Drag and drop a Texture Pack folder here"
            })]
          })]
        })]
      })
    }
  },
  4411: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => DB,
      g: () => vB,
      k: () => uB,
      n: () => EB
    });
    var VB = dB(62),
      yB = dB(4415),
      pB = dB(3821),
      lB = dB(1249),
      JB = dB(4438),
      YB = dB(933),
      gB = dB.n(YB),
      oB = dB(1235),
      kB = dB(1596),
      LB = dB(4447),
      OB = dB(980);

    function DB(BB) {
      let {
        label: TB,
        onClick: dB,
        checked: VB,
        circleInfoText: yB,
        className: JB,
        disabled: YB
      } = BB;
      return (0, OB.jsx)("div", {
        "aria-disabled": YB || void 0,
        "data-pad-focusable": !0,
        className: gB()("SettingBox CheckboxContainer", {
          [JB]: JB,
          SettingBoxDisabled: YB
        }),
        onClick: () => {
          YB || dB(!VB)
        },
        children: (0, OB.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, OB.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, OB.jsx)(pB.b, {
              className: "SettingsCheckbox",
              checked: VB,
              disabled: YB,
              onChange: () => {}
            })
          }), (0, OB.jsxs)("div", {
            className: "CheckboxText",
            children: [TB, yB && (0, OB.jsx)("span", {
              onClick: BB => BB.stopPropagation(),
              children: (0, OB.jsx)(lB.e, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: yB
              })
            })]
          })]
        })
      })
    }

    function uB(BB) {
      let {
        name: TB,
        onChange: dB,
        min: yB,
        max: pB,
        step: JB,
        initValue: YB,
        circleInfoText: oB,
        format: kB,
        className: LB,
        padStep: DB,
        disabled: uB = !1,
        selectableMax: EB,
        cappedNote: vB
      } = BB;
      const [mB, iB] = (0, VB.useState)(YB);
      (0, VB.useEffect)((() => {
        iB(YB)
      }), [YB]);
      const NB = void 0 !== EB && EB < pB,
        tB = NB ? {
          "--slider-selectable": (EB - yB) / (pB - yB)
        } : void 0;
      return (0, OB.jsxs)("div", {
        className: gB()("SettingBox SettingsSliderDiv", {
          [LB]: LB,
          SettingBoxDisabled: uB,
          SliderCapped: NB
        }),
        style: tB,
        children: [(0, OB.jsxs)("div", {
          className: "SliderText",
          children: [`${TB}: ${kB?kB(mB):mB}`, oB && (0, OB.jsx)(lB.e, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: oB
          })]
        }), (0, OB.jsx)("div", {
          className: "SliderDiv",
          children: (0, OB.jsx)(HB, {
            value: mB,
            min: yB,
            max: pB,
            step: JB,
            onChange: BB => {
              if (NB && BB >= EB && mB === EB) return;
              const TB = NB ? Math.min(BB, EB) : BB;
              iB(TB), dB(TB)
            },
            format: kB,
            padStep: DB,
            disabled: uB
          })
        }), NB && vB && (0, OB.jsx)("div", {
          className: "SliderNote",
          children: vB
        })]
      })
    }

    function HB(BB) {
      var TB;
      let {
        value: dB,
        min: pB,
        max: lB,
        step: JB,
        onChange: YB,
        orientation: gB,
        reverse: oB,
        setIsChanging: kB,
        tooltip: DB,
        labels: uB,
        handleLabel: HB,
        format: EB,
        onChangeStart: vB,
        onChangeComplete: mB,
        padStep: iB,
        disabled: NB = !1
      } = BB;
      const tB = (0, VB.useRef)(null),
        fB = (0, VB.useRef)(null);
      (0, VB.useLayoutEffect)((() => {
        var BB, TB, dB;
        const VB = null !== (BB = null === (TB = tB.current) || void 0 === TB ? void 0 : TB.querySelector(".rangeslider")) && void 0 !== BB ? BB : null;
        null === VB || void 0 === VB || VB.setAttribute("data-pad-slider", ""), null === VB || void 0 === VB || VB.setAttribute("data-pad-focusable", ""), null === VB || void 0 === VB || null === (dB = VB.querySelector(".rangeslider__handle")) || void 0 === dB || dB.setAttribute("data-pad-slider-handle", ""), fB.current = VB
      }), []), (0, VB.useLayoutEffect)((() => {
        var BB, TB;
        NB ? null === (BB = fB.current) || void 0 === BB || BB.setAttribute("aria-disabled", "true") : null === (TB = fB.current) || void 0 === TB || TB.removeAttribute("aria-disabled")
      }), [NB]);
      const sB = (null !== (TB = String(JB).split(".")[1]) && void 0 !== TB ? TB : "").length,
        MB = BB => {
          const TB = Number((Math.round((BB - pB) / JB) * JB + pB).toFixed(sB));
          return Math.min(lB, Math.max(pB, TB))
        },
        zB = (0, VB.useRef)(!1);
      return (0, LB.c)(fB, {
        adjust: BB => {
          if (NB) return;
          const TB = null !== iB && void 0 !== iB ? iB : Math.max(JB, Math.round((lB - pB) / 20 / JB) * JB),
            VB = MB(dB + BB * TB * (oB ? -1 : 1));
          VB !== dB && (null === vB || void 0 === vB || vB(), YB(VB), null === mB || void 0 === mB || mB())
        },
        setFraction: BB => {
          if (NB) return;
          const TB = MB(pB + (oB ? 1 - BB : BB) * (lB - pB));
          TB !== dB && (zB.current || (zB.current = !0, null === vB || void 0 === vB || vB()), YB(TB))
        },
        endDrag: () => {
          zB.current && (zB.current = !1, null === mB || void 0 === mB || mB())
        }
      }), (0, OB.jsx)("div", {
        ref: tB,
        style: {
          display: "contents"
        },
        children: (0, OB.jsx)(yB.b, {
          value: dB,
          min: pB,
          max: lB,
          step: JB,
          onChange: YB,
          orientation: gB,
          reverse: oB,
          tooltip: DB,
          labels: uB,
          handleLabel: HB,
          format: EB,
          onChangeStart: () => {
            null === vB || void 0 === vB || vB(), null === kB || void 0 === kB || kB(!0)
          },
          onChangeComplete: () => {
            null === kB || void 0 === kB || kB(!1), null === mB || void 0 === mB || mB()
          }
        })
      })
    }
    async function EB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      const TB = oB.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: "",
        unlockPointerKey: BB
      });
      !0 === await TB.getResult() && (0, kB.reloadBloxd)()
    }

    function vB(BB) {
      let {
        label: TB,
        options: dB,
        value: VB,
        onChange: yB,
        circleInfoText: pB
      } = BB;
      return (0, OB.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, OB.jsxs)("div", {
          className: "SliderText",
          children: [TB, pB && (0, OB.jsx)(lB.e, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: pB
          })]
        }), (0, OB.jsx)(JB.d, {
          ariaLabel: TB,
          options: dB,
          value: VB,
          onChange: yB
        })]
      })
    }
  },
  4408: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => EB,
      d: () => vB
    });
    var VB = dB(2623),
      yB = dB(2626),
      pB = dB(62),
      lB = dB(933),
      JB = dB.n(lB),
      YB = dB(1225),
      gB = dB(2614),
      oB = dB(1235),
      kB = dB(4411),
      LB = dB(4451),
      OB = dB(586),
      DB = dB(4459),
      uB = dB(980);

    function HB() {
      (0, kB.n)("texturePackPickReload")
    }

    function EB(BB) {
      var TB;
      let {
        setApplySettingsCallback: dB
      } = BB;
      const [, lB] = (0, pB.useReducer)((BB => BB + 1), 0), JB = (0, pB.useRef)(!1), YB = (0, pB.useRef)(null);

      function EB(BB, TB) {
        gB.b.setFromJson(BB, "player");
        const VB = gB.b.saveTexturePack();
        if (OB.p) {
          const BB = gB.b.toJson();
          VB.then((TB => {
            TB && (0, DB.h)(BB, HB)
          }))
        } else JB.current ||= TB, YB.current !== gB.b.getId() || gB.b.getId() === yB.r.CUSTOM && JB.current ? dB((() => kB.n)) : dB(null);
        lB()
      }
      async function mB(BB) {
        if (gB.b.getId() !== BB.metaData.id) {
          if (gB.b.getId() === yB.r.CUSTOM && gB.b.getFromFolderName()) {
            const BB = oB.NotificationProvider.showPromptPopup({
              title: "settingsMenu:loseChangesTitle",
              subtitle: "settingsMenu:loseChangesSubtitle",
              confirmText: "general:continue",
              destructive: !0,
              confirmTooltip: "",
              cancelText: "general:cancel",
              cancelTooltip: ""
            });
            if (!0 !== await BB.getResult()) return
          }
          EB(BB, !1)
        }
      }(0, pB.useEffect)((() => {
        YB.current = gB.b.getId()
      }), []);
      const iB = VB.b,
        NB = [iB, ...Object.values(yB.r).filter((BB => BB !== iB))];
      return (0, uB.jsx)(uB.Fragment, {
        children: (0, uB.jsxs)("div", {
          className: "TexturePackCategory SettingsMenuRightInner",
          children: [(0, uB.jsx)("div", {
            className: "TexturePackList",
            children: NB.map((BB => (0, uB.jsx)(vB, {
              id: BB,
              isSelected: BB === gB.b.getId(),
              setSelected: mB
            }, BB)))
          }), gB.b.getId() === yB.r.CUSTOM && (0, uB.jsx)(LB.e, {
            folderName: null !== (TB = gB.b.getFromFolderName()) && void 0 !== TB ? TB : null,
            onTexturePackUpdated: function(BB) {
              EB(BB, !0)
            },
            packOwner: "player"
          })]
        })
      })
    }

    function vB(BB) {
      let {
        id: TB,
        isSelected: dB,
        setSelected: lB,
        disabled: gB = !1
      } = BB;
      const [oB, kB] = (0, pB.useState)(!0), [LB, OB] = (0, pB.useState)(""), [DB, HB] = (0, pB.useState)(""), [EB, vB] = (0, pB.useState)(""), mB = (0, pB.useRef)({});
      return (0, pB.useEffect)((() => {
        (0, VB.k)(TB).then((BB => {
          var TB;
          BB && (mB.current = BB, kB(!1), OB(mB.current.metaData.name), HB(mB.current.metaData.author), vB(null !== (TB = mB.current.metaData.previewImage) && void 0 !== TB ? TB : ""))
        })).catch((BB => {
          console.warn(`Failed to fetch texture pack ${TB}`, BB)
        }))
      }), [TB]), (0, uB.jsxs)("div", {
        "data-pad-focusable": !0,
        "aria-disabled": gB || void 0,
        className: JB()("TexturePack", {
          Selected: dB,
          Custom: TB === yB.r.CUSTOM,
          Disabled: gB
        }),
        onClick: () => {
          oB || gB || lB(mB.current)
        },
        children: [(0, uB.jsx)("div", {
          className: "TexturePackBg",
          style: {
            backgroundImage: EB ? `url(${EB})` : void 0
          }
        }), oB && (0, uB.jsx)("div", {
          className: "TexturePackName",
          children: (0, uB.jsx)(YB.b, {})
        }), !oB && LB && (0, uB.jsx)("div", {
          className: "TexturePackName",
          children: LB
        }), !oB && DB && (0, uB.jsx)("div", {
          className: "TexturePackAuthor",
          children: DB
        })]
      })
    }
  },
  4438: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => lB
    });
    var VB = dB(933),
      yB = dB.n(VB),
      pB = dB(980);

    function lB(BB) {
      let {
        options: TB,
        value: dB,
        onChange: VB,
        ariaLabel: lB
      } = BB;
      return (0, pB.jsx)("div", {
        className: "SegmentedToggle",
        role: "group",
        "aria-label": lB,
        children: TB.map((BB => {
          const TB = BB.value === dB;
          return (0, pB.jsx)("button", {
            type: "button",
            "aria-pressed": TB,
            className: yB()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: TB
            }),
            onClick: () => {
              TB || VB(BB.value)
            },
            children: BB.label
          }, BB.value)
        }))
      })
    }
  },
  4447: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => pB,
      c: () => lB
    });
    var VB = dB(62);
    const yB = new WeakMap,
      pB = BB => {
        var TB;
        const dB = BB.closest("[data-pad-slider]");
        return dB && null !== (TB = yB.get(dB)) && void 0 !== TB ? TB : null
      },
      lB = (BB, TB) => {
        const dB = (0, VB.useRef)(TB);
        dB.current = TB, (0, VB.useEffect)((() => {
          if (BB.current) return ((BB, TB) => (yB.set(BB, TB), () => {
            yB.get(BB) === TB && yB.delete(BB)
          }))(BB.current, {
            adjust: BB => {
              dB.current.adjust(BB)
            },
            setFraction: BB => {
              dB.current.setFraction(BB)
            },
            endDrag: () => {
              dB.current.endDrag()
            }
          })
        }), [BB])
      }
  },
  4459: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => JB,
      h: () => lB
    });
    var VB = dB(2626),
      yB = dB(4467);
    let pB = null;

    function lB(BB, TB) {
      pB = {
        pack: BB.metaData.id === VB.d ? null : BB,
        prompt: TB
      }
    }

    function JB(BB, TB) {
      const dB = pB;
      null !== dB && (0, yB.e)(dB.pack, BB) && (pB = null, TB && dB.prompt())
    }
  },
  4467: (BB, TB, dB) => {
    function VB(BB, TB) {
      return yB(BB, TB)
    }

    function yB(BB, TB) {
      if (BB === TB) return !0;
      if ("object" !== typeof BB || "object" !== typeof TB || null === BB || null === TB || Array.isArray(BB) !== Array.isArray(TB)) return !1;
      const dB = BB,
        VB = TB,
        pB = Object.keys(dB);
      return pB.length === Object.keys(VB).length && pB.every((BB => Object.prototype.hasOwnProperty.call(VB, BB) && yB(dB[BB], VB[BB])))
    }
    dB.d(TB, {
      e: () => VB
    })
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);