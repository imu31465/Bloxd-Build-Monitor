export const id = 103;
export const ids = [103];
export const modules = {
  5065: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => kS
    });
    var tS = gS(1121),
      bS = gS.n(tS),
      XS = gS(1127),
      xS = gS(1419),
      NS = gS(3639),
      qS = gS(138),
      uS = gS(3676),
      IS = gS(3665),
      fS = gS(1181);

    function kS(SS) {
      let {
        game: HS
      } = SS;
      const gS = (0, qS.j)() ? "large" : "small",
        tS = (0, uS.c)(HS, gS),
        kS = (0, NS.f)(tS),
        aS = void 0 !== kS.blurhash;
      return (0, fS.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [kS.isLoading && !aS && (0, fS.jsx)(xS.c, {
          loaderType: "Secondary"
        }), !kS.failed && (null !== kS.src || aS) && (0, fS.jsx)("div", {
          className: bS()("SchematicImage", IS.h, {
            SchematicImageFadeIn: kS.fadeIn && !aS
          }),
          style: (0, IS.g)(kS),
          children: (0, fS.jsx)(IS.c, {
            image: kS
          })
        }), kS.failed && (0, fS.jsx)("div", {
          className: "SchematicImageError",
          children: (0, fS.jsx)(XS.d, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  5195: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => GS
    });
    var tS = gS(64),
      bS = gS(1121),
      XS = gS.n(bS),
      xS = gS(5114),
      NS = gS(1419),
      qS = gS(1281),
      uS = gS(3325),
      IS = gS(3443),
      fS = gS(1127),
      kS = gS(3330),
      aS = gS(5204),
      KS = gS(5228),
      jS = gS(1181);

    function GS(SS) {
      let {
        folderName: HS,
        onTexturePackUpdated: bS,
        disabled: GS = !1,
        maxFileSizeMb: CS,
        packOwner: nS
      } = SS;
      const {
        t: PS
      } = (0, qS.F)(), [QS, DS] = (0, tS.useState)(!1), [wS, hS] = (0, tS.useState)(null), [ZS, JS] = (0, tS.useState)(null), OS = (0, tS.useRef)(null);
      async function dS(SS) {
        DS(!0);
        try {
          const HS = await (0, uS.k)(SS);
          if ("customGame" === nS && (0, IS.j)(HS)) return void hS(PS(IS.c));
          if (void 0 !== CS) {
            const SS = JSON.stringify(HS).length / 1048576;
            if (SS > CS) return void hS(PS("customTexturePack:packTooBig", {
              size: SS.toFixed(1),
              max: CS
            }))
          }
          hS(null), JS(null), bS(HS), OS.current = HS,
            function(SS, HS) {
              const tS = SS.modelOverrides;
              tS && Promise.all([gS.e(203), gS.e(202)]).then((() => gS(34305))).then((gS => {
                let {
                  packDisplayName: bS,
                  refusedPackModels: XS,
                  packModelSummary: xS
                } = gS;
                const NS = bS(SS.metaData);
                HS(xS(NS, XS(NS, tS, !1)))
              })).catch((SS => {
                console.error("Checking the texture pack's models failed:", SS)
              }))
            }(HS, (SS => {
              OS.current === HS && JS(SS)
            }))
        } catch (HS) {
          if (HS instanceof kS.c) {
            const SS = "customTexturePack:invalidPack" !== HS.translationKey || (0, KS.f)() ? HS.translationKey : "customTexturePack:invalidPackZip";
            hS((0, aS.j)(PS, SS, HS.params))
          } else console.error("Couldn't read the texture pack", HS), hS(PS("customTexturePack:errorTitle"))
        } finally {
          DS(!1)
        }
      }
      const {
        getRootProps: cS,
        getInputProps: vS,
        isDragActive: ES,
        open: LS
      } = (0, xS.b)({
        onDrop: dS,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: GS
      });
      return (0, jS.jsxs)("div", {
        className: "CustomTexturePackContainer",
        children: [(0, jS.jsxs)("div", {
          className: "CustomTextureWarning",
          children: [PS("settingsMenu:customTextureWarning"), ".", (0, jS.jsx)("br", {}), PS("settingsMenu:viewDocumentation"), ":", " ", (0, jS.jsx)("a", {
            href: "https://github.com/Bloxdy/texturePacks",
            target: "_blank",
            rel: "noreferrer",
            children: "github.com/Bloxdy/texturePacks"
          })]
        }), wS && (0, jS.jsxs)("div", {
          className: "CustomTextureError",
          children: [PS("general:error"), ": ", wS]
        }), ZS && (0, jS.jsx)("div", {
          className: "CustomTextureError",
          children: ZS
        }), (0, jS.jsxs)("div", {
          ...cS({
            className: XS()("CustomTextureFolderUpload", {
              ActiveDrag: ES,
              Disabled: GS
            })
          }),
          children: [(0, jS.jsx)("input", {
            ...vS({
              webkitdirectory: "true"
            })
          }), QS && (0, jS.jsx)("div", {
            className: "CustomTextureFolderUploadLoading",
            children: (0, jS.jsx)(NS.c, {})
          }), !QS && !ES && HS && (0, jS.jsxs)(jS.Fragment, {
            children: [(0, jS.jsx)("div", {
              className: "CustomTextureFolderUploadIcon Active",
              children: (0, jS.jsx)(fS.d, {
                name: "folder-image"
              })
            }), (0, jS.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions Active",
              children: HS
            })]
          }), !QS && (ES || !HS) && (0, jS.jsxs)(jS.Fragment, {
            children: [(0, jS.jsx)("div", {
              className: "CustomTextureFolderUploadIcon",
              children: (0, jS.jsx)(fS.d, {
                name: "up-from-bracket"
              })
            }), (0, jS.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions",
              children: PS((0, KS.f)() ? "customTexturePack:dropHere" : "customTexturePack:chooseZipInstructions")
            })]
          }), !QS && (0, jS.jsx)(KS.d, {
            disabled: GS,
            openFolderPicker: LS,
            onFiles: SS => {
              dS(SS)
            }
          })]
        })]
      })
    }
  },
  5228: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => IS,
      f: () => uS
    });
    var tS = gS(64),
      bS = gS(1528),
      XS = gS(1281),
      xS = gS(104),
      NS = gS(3308),
      qS = gS(1181);

    function uS() {
      return !(0, xS.isMobile)()
    }

    function IS(SS) {
      let {
        disabled: HS,
        openFolderPicker: gS,
        onFiles: xS
      } = SS;
      const {
        t: IS
      } = (0, XS.F)(), fS = (0, tS.useRef)(null);
      return (0, qS.jsxs)("div", {
        className: "PackPickButtons",
        "data-pad-mouse-only": !0,
        children: [(0, qS.jsx)("input", {
          ref: fS,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(SS) {
            const HS = Array.from(SS.target.files);
            SS.target.value = "", xS(HS)
          }
        }), uS() && (0, qS.jsx)(bS.g, {
          disabled: HS,
          onClick: gS,
          children: IS("general:chooseFolder")
        }), (0, qS.jsx)(bS.g, {
          disabled: HS,
          onClick: () => {
            (0, NS.d)(fS.current)
          },
          children: IS("general:chooseZip")
        })]
      })
    }
  },
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
  5142: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => GS,
      c: () => CS
    });
    var tS = gS(3325),
      bS = gS(2256),
      XS = gS(64),
      xS = gS(1121),
      NS = gS.n(xS),
      qS = gS(1419),
      uS = gS(3320),
      IS = gS(1435),
      fS = gS(5148),
      kS = gS(5195),
      aS = gS(699),
      KS = gS(5234),
      jS = gS(1181);

    function GS(SS) {
      var HS;
      let {
        setApplySettingsCallback: gS
      } = SS;
      const [, xS] = (0, XS.useReducer)((SS => SS + 1), 0), NS = (0, XS.useRef)(!1), qS = (0, XS.useRef)(null);

      function GS(SS, HS) {
        uS.d.setFromJson(SS, "player");
        const tS = uS.d.saveTexturePack();
        if (aS.A) {
          const SS = uS.d.toJson();
          tS.then((HS => {
            HS && (0, KS.e)(SS)
          }))
        } else NS.current ||= HS, qS.current !== uS.d.getId() || uS.d.getId() === bS.q.CUSTOM && NS.current ? gS((() => fS.o)) : gS(null);
        xS()
      }
      async function nS(SS) {
        if (uS.d.getId() !== SS.metaData.id) {
          if (uS.d.getId() === bS.q.CUSTOM && uS.d.getFromFolderName()) {
            const SS = IS.NotificationProvider.showPromptPopup({
              title: "settingsMenu:loseChangesTitle",
              subtitle: "settingsMenu:loseChangesSubtitle",
              confirmText: "general:continue",
              destructive: !0,
              confirmTooltip: "",
              cancelText: "general:cancel",
              cancelTooltip: ""
            });
            if (!0 !== await SS.getResult()) return
          }
          GS(SS, !1)
        }
      }(0, XS.useEffect)((() => {
        qS.current = uS.d.getId()
      }), []);
      const PS = tS.b,
        QS = [PS, ...Object.values(bS.q).filter((SS => SS !== PS))];
      return (0, jS.jsx)(jS.Fragment, {
        children: (0, jS.jsxs)("div", {
          className: "TexturePackCategory SettingsMenuRightInner",
          children: [(0, jS.jsx)("div", {
            className: "TexturePackList",
            children: QS.map((SS => (0, jS.jsx)(CS, {
              id: SS,
              isSelected: SS === uS.d.getId(),
              setSelected: nS
            }, SS)))
          }), uS.d.getId() === bS.q.CUSTOM && (0, jS.jsx)(kS.d, {
            folderName: null !== (HS = uS.d.getFromFolderName()) && void 0 !== HS ? HS : null,
            onTexturePackUpdated: function(SS) {
              GS(SS, !0)
            },
            packOwner: "player"
          })]
        })
      })
    }

    function CS(SS) {
      let {
        id: HS,
        isSelected: gS,
        setSelected: xS,
        disabled: uS = !1
      } = SS;
      const [IS, fS] = (0, XS.useState)(!0), [kS, aS] = (0, XS.useState)(""), [KS, GS] = (0, XS.useState)(""), [CS, nS] = (0, XS.useState)(""), PS = (0, XS.useRef)({});
      return (0, XS.useEffect)((() => {
        (0, tS.j)(HS).then((SS => {
          var HS;
          SS && (PS.current = SS, fS(!1), aS(PS.current.metaData.name), GS(PS.current.metaData.author), nS(null !== (HS = PS.current.metaData.previewImage) && void 0 !== HS ? HS : ""))
        })).catch((SS => {
          console.warn(`Failed to fetch texture pack ${HS}`, SS)
        }))
      }), [HS]), (0, jS.jsxs)("div", {
        "data-pad-focusable": !0,
        "aria-disabled": uS || void 0,
        className: NS()("TexturePack", {
          Selected: gS,
          Custom: HS === bS.q.CUSTOM,
          Disabled: uS
        }),
        onClick: () => {
          IS || uS || xS(PS.current)
        },
        children: [(0, jS.jsx)("div", {
          className: "TexturePackBg",
          style: {
            backgroundImage: CS ? `url(${CS})` : void 0
          }
        }), IS && (0, jS.jsx)("div", {
          className: "TexturePackName",
          children: (0, jS.jsx)(qS.c, {})
        }), !IS && kS && (0, jS.jsx)("div", {
          className: "TexturePackName",
          children: kS
        }), !IS && KS && (0, jS.jsx)("div", {
          className: "TexturePackAuthor",
          children: KS
        })]
      })
    }
  },
  5204: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => NS,
      f: () => xS,
      j: () => XS
    });
    var tS = gS(5212);
    const bS = [SS => SS.strict ? "strict" : "nonStrict", SS => SS.program];

    function XS(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const tS = {};
      for (const bS in gS) tS[bS] = `\0${bS}\0`;
      return SS(HS, tS).replace(/\0(\w+)\0/g, ((SS, HS) => gS[HS]))
    }

    function xS(SS) {
      return null === SS.file ? null : SS.line > 0 ? `${SS.file}:${SS.line}` : SS.file
    }

    function NS(SS) {
      const HS = new Map(SS.map((SS => [qS(SS).join("."), SS])));
      if (0 === HS.size) return [];
      const gS = IS([...HS.values()]);
      return 0 === gS[0].length ? [] : gS
    }

    function qS(SS) {
      return bS.map((HS => HS(SS)))
    }
    const uS = bS.map((SS => new Set(tS.i.map(SS)).size));

    function IS(SS) {
      const HS = bS.map((HS => new Set(SS.map(HS)))),
        gS = HS.reduce(((SS, HS) => SS * HS.size), 1),
        tS = HS.every(((SS, HS) => 1 === SS.size || SS.size === uS[HS]));
      if (gS === SS.length && tS) return [bS.filter(((SS, gS) => 1 === HS[gS].size)).map((HS => HS(SS[0])))];
      let XS = null;
      for (let xS = 0; xS < bS.length; xS++) {
        if (1 === HS[xS].size) continue;
        const gS = fS(SS, bS[xS]).flatMap(IS);
        (null === XS || gS.length < XS.length) && (XS = gS)
      }
      return XS
    }

    function fS(SS, HS) {
      const gS = new Map;
      for (const bS of SS) {
        var tS;
        const SS = HS(bS);
        gS.set(SS, [...null !== (tS = gS.get(SS)) && void 0 !== tS ? tS : [], bS])
      }
      return [...gS.values()]
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
  5212: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => tS.h,
      i: () => bS,
      j: () => tS.n
    });
    var tS = gS(5221);
    const bS = [!1, !0].flatMap((SS => ["terrain", "liquid", "model"].map((HS => ({
      strict: SS,
      program: HS
    })))))
  },
  5242: (SS, HS, gS) => {
    function tS(SS, HS) {
      return bS(SS, HS)
    }

    function bS(SS, HS) {
      if (SS === HS) return !0;
      if ("object" !== typeof SS || "object" !== typeof HS || null === SS || null === HS || Array.isArray(SS) !== Array.isArray(HS)) return !1;
      const gS = SS,
        tS = HS,
        XS = Object.keys(gS);
      return XS.length === Object.keys(tS).length && XS.every((SS => Object.prototype.hasOwnProperty.call(tS, SS) && bS(gS[SS], tS[SS])))
    }
    gS.d(HS, {
      d: () => tS
    })
  },
  5234: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => xS,
      g: () => NS
    });
    var tS = gS(2256),
      bS = gS(5242);
    let XS = null;

    function xS(SS) {
      XS = {
        pack: SS.metaData.id === tS.d ? null : SS
      }
    }

    function NS(SS) {
      return !(null === XS || !(0, bS.d)(XS.pack, SS)) && (XS = null, !0)
    }
  },
  5221: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => NS,
      e: () => xS,
      h: () => tS,
      j: () => jS,
      m: () => fS,
      n: () => bS,
      r: () => XS,
      u: () => uS,
      v: () => IS,
      y: () => kS
    });
    const tS = 5;

    function bS(SS) {
      return SS === tS
    }

    function XS(SS) {
      return [...SS.features]
    }
    const xS = 262144,
      NS = 256,
      qS = 256;

    function uS(SS) {
      if ("object" !== typeof SS || null === SS || Array.isArray(SS)) return "The pack has no files.";
      const HS = [];
      for (const [gS, tS] of Object.entries(SS)) {
        if ("string" !== typeof tS) return `${gS} isn't text.`;
        HS.push({
          path: gS,
          source: tS
        })
      }
      return HS.sort(((SS, HS) => fS(SS.path, HS.path))),
        function(SS) {
          if (0 === SS.length) return "The pack has no .wgsl files.";
          if (SS.length > NS) return `The pack has more than ${NS} .wgsl files.`;
          const HS = new Set;
          for (const {
              path: gS
            }
            of SS) {
            const SS = aS(gS);
            if (null !== SS) return SS;
            if (HS.has(gS)) return `The pack has two files at ${gS}.`;
            HS.add(gS)
          }
          return kS(SS) > xS ? `The pack's .wgsl files are over ${xS/1024} KB in total.` : null
        }(HS) ?? HS
    }

    function IS(SS) {
      const HS = {};
      for (const gS of SS) HS[gS.path] = gS.source;
      return HS
    }

    function fS(SS, HS) {
      return SS < HS ? -1 : SS > HS ? 1 : 0
    }

    function kS(SS) {
      const HS = new TextEncoder;
      let gS = 0;
      for (const {
          source: tS
        }
        of SS) gS += HS.encode(tS).byteLength;
      return gS
    }

    function aS(SS) {
      if (!SS.toLowerCase().endsWith(".wgsl")) return `${SS} isn't a .wgsl file.`;
      if (SS.length > qS) return `A file path is over ${qS} characters.`;
      if (SS.includes("\\") || /[\u0000-\u001f]/.test(SS)) return `${SS} isn't a valid file path.`;
      return SS.split("/").some((SS => "" === SS || "." === SS || ".." === SS)) ? `${SS} isn't a valid file path.` : null
    }
    const KS = /^(.*)\[rot\[([1-4])$/;

    function jS(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const tS = new Map;
      HS.forEach(((SS, HS) => {
        let {
          numAnimStates: gS,
          animStartIdx: bS
        } = SS;
        for (let XS = 1; XS < gS; XS++) tS.set(bS + XS - 1, HS)
      }));
      const bS = Object.entries(SS),
        XS = new Map;
      for (const [jS, GS] of bS) {
        const SS = KS.exec(jS);
        "1" === SS?.[2] && XS.set(SS[1], GS + 1)
      }
      const xS = SS => {
          const HS = KS.exec(SS);
          return HS && XS.has(HS[1]) ? {
            root: HS[1],
            rotation: Number(HS[2]) - 1
          } : null
        },
        NS = new Set(bS.map((SS => {
          let [HS] = SS;
          return xS(HS)?.root ?? HS
        }))),
        qS = (SS, gS) => {
          const tS = SS.replace(/_?0$/, "");
          return (HS[gS]?.numAnimStates ?? 0) > 1 && !NS.has(tS) ? tS : SS
        },
        uS = new Map;
      for (const [KS, jS] of bS) uS.set(jS, qS(xS(KS)?.root ?? KS, jS));
      const IS = bS.reduce(((SS, HS) => {
          let [, gS] = HS;
          return Math.max(SS, gS + 1)
        }), 0),
        fS = Array.from({
          length: IS
        }, ((SS, HS) => ({
          id: HS + 1,
          rotation: 0
        }))),
        kS = new Map,
        aS = new Map;
      for (const [KS, jS] of bS) {
        const SS = xS(KS),
          HS = tS.get(jS);
        if (void 0 !== HS) {
          const gS = uS.get(HS);
          aS.set(KS, {
            name: KS,
            texture: gS,
            kind: "frame"
          }), SS && !aS.has(SS.root) && aS.set(SS.root, {
            name: SS.root,
            texture: gS,
            kind: "frame"
          });
          continue
        }
        const gS = uS.get(jS),
          bS = SS?.root ?? KS;
        if (gS !== bS && aS.set(bS, {
            name: bS,
            texture: gS,
            kind: "frame"
          }), SS) {
          const HS = XS.get(SS.root);
          fS[jS] = {
            id: HS,
            rotation: SS.rotation
          }, kS.set(gS, HS), aS.set(KS, {
            name: KS,
            texture: gS,
            kind: "rotation"
          })
        } else kS.set(gS, jS + 1)
      }
      for (const KS of kS.keys()) aS.delete(KS);
      for (const [KS, jS] of gS) {
        const SS = kS.get(jS);
        void 0 === SS || kS.has(KS) || (kS.set(KS, SS), aS.delete(KS))
      }
      return {
        named: [...kS].sort(((SS, HS) => {
          let [gS] = SS, [tS] = HS;
          return gS < tS ? -1 : gS > tS ? 1 : 0
        })).map((SS => {
          let [HS, gS] = SS;
          return {
            name: HS,
            id: gS
          }
        })),
        aliases: [...aS.values()],
        layers: fS
      }
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);