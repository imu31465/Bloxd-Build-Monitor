export const id = 102;
export const ids = [102];
export const modules = {
  4483: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => sY
    });
    var FY = DY(1092),
      AY = DY.n(FY),
      IY = DY(1098),
      RY = DY(1337),
      OY = DY(3082),
      gY = DY(144),
      aY = DY(3139),
      vY = DY(3123),
      uY = DY(1125);

    function sY(YY) {
      let {
        game: rY
      } = YY;
      const DY = (0, gY.h)() ? "large" : "small",
        FY = (0, aY.c)(rY, DY),
        sY = (0, OY.f)(FY),
        iY = void 0 !== sY.blurhash;
      return (0, uY.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [sY.isLoading && !iY && (0, uY.jsx)(RY.c, {
          loaderType: "Secondary"
        }), !sY.failed && (null !== sY.src || iY) && (0, uY.jsx)("div", {
          className: AY()("SchematicImage", vY.j, {
            SchematicImageFadeIn: sY.fadeIn && !iY
          }),
          style: (0, vY.h)(sY),
          children: (0, uY.jsx)(vY.d, {
            image: sY
          })
        }), sY.failed && (0, uY.jsx)("div", {
          className: "SchematicImageError",
          children: (0, uY.jsx)(IY.e, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  4615: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => iY
    });
    var FY = DY(61),
      AY = DY(1092),
      IY = DY.n(AY),
      RY = DY(4536),
      OY = DY(1337),
      gY = DY(1211),
      aY = DY(2746),
      vY = DY(2872),
      uY = DY(1098),
      sY = DY(1125);

    function iY(YY) {
      let {
        folderName: rY,
        onTexturePackUpdated: AY,
        disabled: iY = !1,
        maxFileSizeMb: yY,
        packOwner: QY
      } = YY;
      const {
        t: oY
      } = (0, gY.C)(), [WY, EY] = (0, FY.useState)(!1), [mY, VY] = (0, FY.useState)(null), [SY, lY] = (0, FY.useState)(null), TY = (0, FY.useRef)(null);
      const {
        getRootProps: eY,
        getInputProps: NY,
        isDragActive: BY
      } = (0, RY.d)({
        onDrop: async function(YY) {
          EY(!0);
          try {
            const rY = await (0, aY.r)(YY);
            if ("customGame" === QY && (0, vY.l)(rY)) return void VY(oY(vY.d));
            if (void 0 !== yY) {
              const YY = JSON.stringify(rY).length / 1048576;
              if (YY > yY) return void VY(`File size is too large. Max size is ${yY}MB. Current size is ${YY}MB.`)
            }
            VY(null), lY(null), AY(rY), TY.current = rY,
              function(YY, rY) {
                const FY = YY.modelOverrides;
                FY && Promise.all([DY.e(190), DY.e(189)]).then((() => DY(8800))).then((DY => {
                  let {
                    packDisplayName: AY,
                    refusedPackModels: IY,
                    packModelSummary: RY
                  } = DY;
                  const OY = AY(YY.metaData);
                  rY(RY(OY, IY(OY, FY, !1)))
                })).catch((YY => {
                  console.error("Checking the texture pack's models failed:", YY)
                }))
              }(rY, (YY => {
                TY.current === rY && lY(YY)
              }))
          } catch {
            VY("Invalid Texture Pack Folder")
          } finally {
            EY(!1)
          }
        },
        useFsAccessApi: !1,
        disabled: iY
      });
      return (0, sY.jsxs)("div", {
        className: "CustomTexturePackContainer",
        children: [(0, sY.jsxs)("div", {
          className: "CustomTextureWarning",
          children: [oY("settingsMenu:customTextureWarning"), ".", (0, sY.jsx)("br", {}), oY("settingsMenu:viewDocumentation"), ":", " ", (0, sY.jsx)("a", {
            href: "https://github.com/Bloxdy/texturePacks",
            target: "_blank",
            rel: "noreferrer",
            children: "github.com/Bloxdy/texturePacks"
          })]
        }), mY && (0, sY.jsxs)("div", {
          className: "CustomTextureError",
          children: [oY("general:error"), ": ", mY]
        }), SY && (0, sY.jsx)("div", {
          className: "CustomTextureError",
          children: SY
        }), (0, sY.jsxs)("div", {
          ...eY({
            className: IY()("CustomTextureFolderUpload", {
              ActiveDrag: BY,
              Disabled: iY
            })
          }),
          children: [(0, sY.jsx)("input", {
            ...NY({
              webkitdirectory: "true"
            })
          }), WY && (0, sY.jsx)("div", {
            className: "CustomTextureFolderUploadLoading",
            children: (0, sY.jsx)(OY.c, {})
          }), !WY && !BY && rY && (0, sY.jsxs)(sY.Fragment, {
            children: [(0, sY.jsx)("div", {
              className: "CustomTextureFolderUploadIcon Active",
              children: (0, sY.jsx)(uY.e, {
                name: "folder-image"
              })
            }), (0, sY.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions Active",
              children: rY
            })]
          }), !WY && (BY || !rY) && (0, sY.jsxs)(sY.Fragment, {
            children: [(0, sY.jsx)("div", {
              className: "CustomTextureFolderUploadIcon",
              children: (0, sY.jsx)(uY.e, {
                name: "up-from-bracket"
              })
            }), (0, sY.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions",
              children: "Drag and drop a Texture Pack folder here"
            })]
          })]
        })]
      })
    }
  },
  4580: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => yY,
      f: () => mY,
      j: () => QY,
      m: () => EY
    });
    var FY = DY(61),
      AY = DY(4589),
      IY = DY(3920),
      RY = DY(1354),
      OY = DY(4608),
      gY = DY(1092),
      aY = DY.n(gY),
      vY = DY(1346),
      uY = DY(1699),
      sY = DY(4613),
      iY = DY(1125);

    function yY(YY) {
      let {
        label: rY,
        onClick: DY,
        checked: FY,
        circleInfoText: AY,
        className: OY,
        disabled: gY,
        note: vY
      } = YY;
      return (0, iY.jsxs)("div", {
        "aria-disabled": gY || void 0,
        "data-pad-focusable": !0,
        className: aY()("SettingBox CheckboxContainer", {
          [OY]: OY,
          SettingBoxDisabled: gY
        }),
        onClick: () => {
          gY || DY(!FY)
        },
        children: [(0, iY.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, iY.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, iY.jsx)(IY.d, {
              className: "SettingsCheckbox",
              checked: FY,
              disabled: gY,
              onChange: () => {}
            })
          }), (0, iY.jsxs)("div", {
            className: "CheckboxText",
            children: [rY, AY && (0, iY.jsx)("span", {
              onClick: YY => YY.stopPropagation(),
              children: (0, iY.jsx)(RY.d, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: AY
              })
            })]
          })]
        }), vY && (0, iY.jsx)("div", {
          className: "SettingNote",
          children: vY
        })]
      })
    }

    function QY(YY) {
      let {
        name: rY,
        onChange: DY,
        min: AY,
        max: IY,
        step: OY,
        initValue: gY,
        circleInfoText: vY,
        format: uY,
        className: sY,
        padStep: yY,
        disabled: QY = !1,
        selectableMax: oY,
        cappedNote: EY,
        onChangeComplete: mY
      } = YY;
      const [VY, SY] = (0, FY.useState)(gY), lY = (0, FY.useRef)(gY);
      (0, FY.useEffect)((() => {
        lY.current = gY, SY(gY)
      }), [gY]);
      const TY = void 0 !== oY && oY < IY,
        eY = TY ? {
          "--slider-selectable": (oY - AY) / (IY - AY)
        } : void 0;
      return (0, iY.jsxs)("div", {
        className: aY()("SettingBox SettingsSliderDiv", {
          [sY]: sY,
          SettingBoxDisabled: QY,
          SliderCapped: TY
        }),
        style: eY,
        children: [(0, iY.jsxs)("div", {
          className: "SliderText",
          children: [`${rY}: ${uY?uY(VY):VY}`, vY && (0, iY.jsx)(RY.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: vY
          })]
        }), (0, iY.jsx)("div", {
          className: "SliderDiv",
          children: (0, iY.jsx)(WY, {
            value: VY,
            min: AY,
            max: IY,
            step: OY,
            onChange: YY => {
              if (TY && YY >= oY && VY === oY) return;
              const rY = TY ? Math.min(YY, oY) : YY;
              lY.current = rY, SY(rY), DY(rY)
            },
            onChangeComplete: mY && (() => {
              mY(lY.current)
            }),
            format: uY,
            padStep: yY,
            disabled: QY
          })
        }), TY && EY && (0, iY.jsx)("div", {
          className: "SettingNote",
          children: EY
        })]
      })
    }
    const oY = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function WY(YY) {
      var rY;
      let {
        value: DY,
        min: IY,
        max: RY,
        step: OY,
        onChange: gY,
        orientation: aY,
        reverse: vY,
        setIsChanging: uY,
        tooltip: yY,
        labels: QY,
        handleLabel: WY,
        format: EY,
        onChangeStart: mY,
        onChangeComplete: VY,
        padStep: SY,
        disabled: lY = !1
      } = YY;
      const TY = (0, FY.useRef)(null),
        eY = (0, FY.useRef)(null);
      (0, FY.useLayoutEffect)((() => {
        var YY, rY, DY;
        const FY = null !== (YY = null === (rY = TY.current) || void 0 === rY ? void 0 : rY.querySelector(".rangeslider")) && void 0 !== YY ? YY : null;
        null === FY || void 0 === FY || FY.setAttribute("data-pad-slider", ""), null === FY || void 0 === FY || FY.setAttribute("data-pad-focusable", ""), null === FY || void 0 === FY || null === (DY = FY.querySelector(".rangeslider__handle")) || void 0 === DY || DY.setAttribute("data-pad-slider-handle", ""), eY.current = FY
      }), []), (0, FY.useLayoutEffect)((() => {
        var YY, rY;
        lY ? null === (YY = eY.current) || void 0 === YY || YY.setAttribute("aria-disabled", "true") : null === (rY = eY.current) || void 0 === rY || rY.removeAttribute("aria-disabled")
      }), [lY]);
      const NY = (null !== (rY = String(OY).split(".")[1]) && void 0 !== rY ? rY : "").length,
        BY = YY => {
          const rY = Number((Math.round((YY - IY) / OY) * OY + IY).toFixed(NY));
          return Math.min(RY, Math.max(IY, rY))
        },
        cY = (0, FY.useRef)(VY);
      cY.current = VY, (0, FY.useEffect)((() => {
        const YY = TY.current;
        if (!YY) return;
        const rY = YY => {
          var rY;
          oY.has(YY.key) && (null === (rY = cY.current) || void 0 === rY || rY.call(cY))
        };
        return YY.addEventListener("keyup", rY), () => {
          YY.removeEventListener("keyup", rY)
        }
      }), []);
      const KY = (0, FY.useRef)(!1);
      return (0, sY.d)(eY, {
        adjust: YY => {
          if (lY) return;
          const rY = null !== SY && void 0 !== SY ? SY : Math.max(OY, Math.round((RY - IY) / 20 / OY) * OY),
            FY = BY(DY + YY * rY * (vY ? -1 : 1));
          FY !== DY && (null === mY || void 0 === mY || mY(), gY(FY), null === VY || void 0 === VY || VY())
        },
        setFraction: YY => {
          if (lY) return;
          const rY = BY(IY + (vY ? 1 - YY : YY) * (RY - IY));
          rY !== DY && (KY.current || (KY.current = !0, null === mY || void 0 === mY || mY()), gY(rY))
        },
        endDrag: () => {
          KY.current && (KY.current = !1, null === VY || void 0 === VY || VY())
        }
      }), (0, iY.jsx)("div", {
        ref: TY,
        style: {
          display: "contents"
        },
        children: (0, iY.jsx)(AY.b, {
          value: DY,
          min: IY,
          max: RY,
          step: OY,
          onChange: gY,
          orientation: aY,
          reverse: vY,
          tooltip: yY,
          labels: QY,
          handleLabel: WY,
          format: EY,
          onChangeStart: () => {
            null === mY || void 0 === mY || mY(), null === uY || void 0 === uY || uY(!0)
          },
          onChangeComplete: () => {
            null === uY || void 0 === uY || uY(!1), null === VY || void 0 === VY || VY()
          }
        })
      })
    }
    async function EY() {
      let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      const rY = vY.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: "",
        unlockPointerKey: YY
      });
      !0 === await rY.getResult() && (0, uY.reloadBloxd)()
    }

    function mY(YY) {
      let {
        label: rY,
        options: DY,
        value: FY,
        onChange: AY,
        circleInfoText: IY
      } = YY;
      return (0, iY.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, iY.jsxs)("div", {
          className: "SliderText",
          children: [rY, IY && (0, iY.jsx)(RY.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: IY
          })]
        }), (0, iY.jsx)(OY.d, {
          ariaLabel: rY,
          options: DY,
          value: FY,
          onChange: AY
        })]
      })
    }
  },
  4578: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => WY,
      e: () => EY
    });
    var FY = DY(2746),
      AY = DY(2755),
      IY = DY(61),
      RY = DY(1092),
      OY = DY.n(RY),
      gY = DY(1337),
      aY = DY(2743),
      vY = DY(1346),
      uY = DY(4580),
      sY = DY(4615),
      iY = DY(649),
      yY = DY(4619),
      QY = DY(1125);

    function oY() {
      (0, uY.m)("texturePackPickReload")
    }

    function WY(YY) {
      var rY;
      let {
        setApplySettingsCallback: DY
      } = YY;
      const [, RY] = (0, IY.useReducer)((YY => YY + 1), 0), OY = (0, IY.useRef)(!1), gY = (0, IY.useRef)(null);

      function WY(YY, rY) {
        aY.d.setFromJson(YY, "player");
        const FY = aY.d.saveTexturePack();
        if (iY.r) {
          const YY = aY.d.toJson();
          FY.then((rY => {
            rY && (0, yY.f)(YY, oY)
          }))
        } else OY.current ||= rY, gY.current !== aY.d.getId() || aY.d.getId() === AY.o.CUSTOM && OY.current ? DY((() => uY.m)) : DY(null);
        RY()
      }
      async function mY(YY) {
        if (aY.d.getId() !== YY.metaData.id) {
          if (aY.d.getId() === AY.o.CUSTOM && aY.d.getFromFolderName()) {
            const YY = vY.NotificationProvider.showPromptPopup({
              title: "settingsMenu:loseChangesTitle",
              subtitle: "settingsMenu:loseChangesSubtitle",
              confirmText: "general:continue",
              destructive: !0,
              confirmTooltip: "",
              cancelText: "general:cancel",
              cancelTooltip: ""
            });
            if (!0 !== await YY.getResult()) return
          }
          WY(YY, !1)
        }
      }(0, IY.useEffect)((() => {
        gY.current = aY.d.getId()
      }), []);
      const VY = FY.c,
        SY = [VY, ...Object.values(AY.o).filter((YY => YY !== VY))];
      return (0, QY.jsx)(QY.Fragment, {
        children: (0, QY.jsxs)("div", {
          className: "TexturePackCategory SettingsMenuRightInner",
          children: [(0, QY.jsx)("div", {
            className: "TexturePackList",
            children: SY.map((YY => (0, QY.jsx)(EY, {
              id: YY,
              isSelected: YY === aY.d.getId(),
              setSelected: mY
            }, YY)))
          }), aY.d.getId() === AY.o.CUSTOM && (0, QY.jsx)(sY.e, {
            folderName: null !== (rY = aY.d.getFromFolderName()) && void 0 !== rY ? rY : null,
            onTexturePackUpdated: function(YY) {
              WY(YY, !0)
            },
            packOwner: "player"
          })]
        })
      })
    }

    function EY(YY) {
      let {
        id: rY,
        isSelected: DY,
        setSelected: RY,
        disabled: aY = !1
      } = YY;
      const [vY, uY] = (0, IY.useState)(!0), [sY, iY] = (0, IY.useState)(""), [yY, oY] = (0, IY.useState)(""), [WY, EY] = (0, IY.useState)(""), mY = (0, IY.useRef)({});
      return (0, IY.useEffect)((() => {
        (0, FY.o)(rY).then((YY => {
          var rY;
          YY && (mY.current = YY, uY(!1), iY(mY.current.metaData.name), oY(mY.current.metaData.author), EY(null !== (rY = mY.current.metaData.previewImage) && void 0 !== rY ? rY : ""))
        })).catch((YY => {
          console.warn(`Failed to fetch texture pack ${rY}`, YY)
        }))
      }), [rY]), (0, QY.jsxs)("div", {
        "data-pad-focusable": !0,
        "aria-disabled": aY || void 0,
        className: OY()("TexturePack", {
          Selected: DY,
          Custom: rY === AY.o.CUSTOM,
          Disabled: aY
        }),
        onClick: () => {
          vY || aY || RY(mY.current)
        },
        children: [(0, QY.jsx)("div", {
          className: "TexturePackBg",
          style: {
            backgroundImage: WY ? `url(${WY})` : void 0
          }
        }), vY && (0, QY.jsx)("div", {
          className: "TexturePackName",
          children: (0, QY.jsx)(gY.c, {})
        }), !vY && sY && (0, QY.jsx)("div", {
          className: "TexturePackName",
          children: sY
        }), !vY && yY && (0, QY.jsx)("div", {
          className: "TexturePackAuthor",
          children: yY
        })]
      })
    }
  },
  4608: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => RY
    });
    var FY = DY(1092),
      AY = DY.n(FY),
      IY = DY(1125);

    function RY(YY) {
      let {
        options: rY,
        value: DY,
        onChange: FY,
        ariaLabel: RY,
        className: OY,
        reselectable: gY = !1,
        keepsFocus: aY = !1
      } = YY;
      return (0, IY.jsx)("div", {
        className: AY()("SegmentedToggle", OY),
        role: "group",
        "aria-label": RY,
        children: rY.map((YY => {
          const rY = YY.value === DY;
          return (0, IY.jsx)("button", {
            type: "button",
            "aria-pressed": rY,
            "aria-label": YY.ariaLabel,
            title: YY.ariaLabel,
            className: AY()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: rY
            }),
            onMouseDown: aY ? YY => {
              YY.preventDefault()
            } : void 0,
            onClick: () => {
              rY && !gY || FY(YY.value)
            },
            children: YY.label
          }, YY.value)
        }))
      })
    }
  },
  4613: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => IY,
      d: () => RY
    });
    var FY = DY(61);
    const AY = new WeakMap,
      IY = YY => {
        var rY;
        const DY = YY.closest("[data-pad-slider]");
        return DY && null !== (rY = AY.get(DY)) && void 0 !== rY ? rY : null
      },
      RY = (YY, rY) => {
        const DY = (0, FY.useRef)(rY);
        DY.current = rY, (0, FY.useEffect)((() => {
          if (YY.current) return ((YY, rY) => (AY.set(YY, rY), () => {
            AY.get(YY) === rY && AY.delete(YY)
          }))(YY.current, {
            adjust: YY => {
              DY.current.adjust(YY)
            },
            setFraction: YY => {
              DY.current.setFraction(YY)
            },
            endDrag: () => {
              DY.current.endDrag()
            }
          })
        }), [YY])
      }
  },
  4619: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => OY,
      f: () => RY
    });
    var FY = DY(2755),
      AY = DY(4623);
    let IY = null;

    function RY(YY, rY) {
      IY = {
        pack: YY.metaData.id === FY.d ? null : YY,
        prompt: rY
      }
    }

    function OY(YY, rY) {
      const DY = IY;
      null !== DY && (0, AY.c)(DY.pack, YY) && (IY = null, rY && DY.prompt())
    }
  },
  4623: (YY, rY, DY) => {
    function FY(YY, rY) {
      return AY(YY, rY)
    }

    function AY(YY, rY) {
      if (YY === rY) return !0;
      if ("object" !== typeof YY || "object" !== typeof rY || null === YY || null === rY || Array.isArray(YY) !== Array.isArray(rY)) return !1;
      const DY = YY,
        FY = rY,
        IY = Object.keys(DY);
      return IY.length === Object.keys(FY).length && IY.every((YY => Object.prototype.hasOwnProperty.call(FY, YY) && AY(DY[YY], FY[YY])))
    }
    DY.d(rY, {
      c: () => FY
    })
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);