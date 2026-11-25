export const id = 117;
export const ids = [117];
export const modules = {
  5306: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => mM
    });
    var OM = iM(1116),
      SM = iM.n(OM),
      jM = iM(1398),
      aM = iM(1396),
      PM = iM(3902),
      nM = iM(119),
      QM = iM(3945),
      zM = iM(3934),
      LM = iM(1303);

    function mM(MM) {
      let {
        game: rM
      } = MM;
      const iM = (0, nM.is99NightsCrazyGamesBundle)() ? "large" : "small",
        OM = (0, QM.g)(rM, iM),
        mM = (0, PM.c)(OM),
        HM = void 0 !== mM.blurhash;
      return (0, LM.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [mM.isLoading && !HM && (0, LM.jsx)(aM.d, {
          loaderType: "Secondary"
        }), !mM.failed && (null !== mM.src || HM) && (0, LM.jsx)("div", {
          className: SM()("SchematicImage", zM.k, {
            SchematicImageFadeIn: mM.fadeIn && !HM
          }),
          style: (0, zM.h)(mM),
          children: (0, LM.jsx)(zM.e, {
            image: mM
          })
        }), mM.failed && (0, LM.jsx)("div", {
          className: "SchematicImageError",
          children: (0, LM.jsx)(jM.b, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  5424: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => dM
    });
    var OM = iM(44),
      SM = iM(1116),
      jM = iM.n(SM),
      aM = iM(5364),
      PM = iM(1396),
      nM = iM(1188),
      QM = iM(3571),
      zM = iM(3706),
      LM = iM(1398),
      mM = iM(3573),
      HM = iM(5430),
      hM = iM(5451),
      JM = iM(1303);

    function dM(MM) {
      let {
        folderName: rM,
        onTexturePackUpdated: SM,
        disabled: dM = !1,
        maxFileSizeMb: yM,
        packOwner: lM
      } = MM;
      const {
        t: EM
      } = (0, nM.A)(), [UM, GM] = (0, OM.useState)(!1), [CM, eM] = (0, OM.useState)(null), [bM, wM] = (0, OM.useState)(null), tM = (0, OM.useRef)(null);
      async function gM(MM) {
        GM(!0);
        try {
          const rM = await (0, QM.m)(MM);
          if ("customGame" === lM && (0, zM.h)(rM)) return void eM(EM(zM.d));
          if (void 0 !== yM) {
            const MM = JSON.stringify(rM).length / 1048576;
            if (MM > yM) return void eM(EM("customTexturePack:packTooBig", {
              size: MM.toFixed(1),
              max: yM
            }))
          }
          eM(null), wM(null), SM(rM), tM.current = rM,
            function(MM, rM) {
              const OM = MM.modelOverrides;
              OM && Promise.all([iM.e(230), iM.e(229)]).then((() => iM(35106))).then((iM => {
                let {
                  packDisplayName: SM,
                  refusedPackModels: jM,
                  packModelSummary: aM
                } = iM;
                const PM = SM(MM.metaData);
                rM(aM(PM, jM(PM, OM, !1)))
              })).catch((MM => {
                console.error("Checking the texture pack's models failed:", MM)
              }))
            }(rM, (MM => {
              tM.current === rM && wM(MM)
            }))
        } catch (rM) {
          if (rM instanceof mM.e) {
            const MM = "customTexturePack:invalidPack" !== rM.translationKey || (0, hM.g)() ? rM.translationKey : "customTexturePack:invalidPackZip";
            eM((0, HM.i)(EM, MM, rM.params))
          } else console.error("Couldn't read the texture pack", rM), eM(EM("customTexturePack:errorTitle"))
        } finally {
          GM(!1)
        }
      }
      const {
        getRootProps: uM,
        getInputProps: RM,
        isDragActive: pM,
        open: WM
      } = (0, aM.e)({
        onDrop: gM,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: dM
      });
      return (0, JM.jsxs)("div", {
        className: "CustomTexturePackContainer",
        children: [(0, JM.jsxs)("div", {
          className: "CustomTextureWarning",
          children: [EM("settingsMenu:customTextureWarning"), ".", (0, JM.jsx)("br", {}), EM("settingsMenu:viewDocumentation"), ":", " ", (0, JM.jsx)("a", {
            href: "https://github.com/Bloxdy/texturePacks",
            target: "_blank",
            rel: "noreferrer",
            children: "github.com/Bloxdy/texturePacks"
          })]
        }), CM && (0, JM.jsxs)("div", {
          className: "CustomTextureError",
          children: [EM("general:error"), ": ", CM]
        }), bM && (0, JM.jsx)("div", {
          className: "CustomTextureError",
          children: bM
        }), (0, JM.jsxs)("div", {
          ...uM({
            className: jM()("CustomTextureFolderUpload", {
              ActiveDrag: pM,
              Disabled: dM
            })
          }),
          children: [(0, JM.jsx)("input", {
            ...RM({
              webkitdirectory: "true"
            })
          }), UM && (0, JM.jsx)("div", {
            className: "CustomTextureFolderUploadLoading",
            children: (0, JM.jsx)(PM.d, {})
          }), !UM && !pM && rM && (0, JM.jsxs)(JM.Fragment, {
            children: [(0, JM.jsx)("div", {
              className: "CustomTextureFolderUploadIcon Active",
              children: (0, JM.jsx)(LM.b, {
                name: "folder-image"
              })
            }), (0, JM.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions Active",
              children: rM
            })]
          }), !UM && (pM || !rM) && (0, JM.jsxs)(JM.Fragment, {
            children: [(0, JM.jsx)("div", {
              className: "CustomTextureFolderUploadIcon",
              children: (0, JM.jsx)(LM.b, {
                name: "up-from-bracket"
              })
            }), (0, JM.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions",
              children: EM((0, hM.g)() ? "customTexturePack:dropHere" : "customTexturePack:chooseZipInstructions")
            })]
          }), !UM && (0, JM.jsx)(hM.d, {
            disabled: dM,
            openFolderPicker: WM,
            onFiles: MM => {
              gM(MM)
            }
          })]
        })]
      })
    }
  },
  5451: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => zM,
      g: () => QM
    });
    var OM = iM(44),
      SM = iM(1520),
      jM = iM(1188),
      aM = iM(83),
      PM = iM(3540),
      nM = iM(1303);

    function QM() {
      return !(0, aM.isMobile)()
    }

    function zM(MM) {
      let {
        disabled: rM,
        openFolderPicker: iM,
        onFiles: aM
      } = MM;
      const {
        t: zM
      } = (0, jM.A)(), LM = (0, OM.useRef)(null);
      return (0, nM.jsxs)("div", {
        className: "PackPickButtons",
        "data-pad-mouse-only": !0,
        children: [(0, nM.jsx)("input", {
          ref: LM,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(MM) {
            const rM = Array.from(MM.target.files);
            MM.target.value = "", aM(rM)
          }
        }), QM() && (0, nM.jsx)(SM.e, {
          disabled: rM,
          onClick: iM,
          children: zM("general:chooseFolder")
        }), (0, nM.jsx)(SM.e, {
          disabled: rM,
          onClick: () => {
            (0, PM.f)(LM.current)
          },
          children: zM("general:chooseZip")
        })]
      })
    }
  },
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
  5393: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => dM,
      e: () => yM
    });
    var OM = iM(3571),
      SM = iM(2263),
      jM = iM(44),
      aM = iM(1116),
      PM = iM.n(aM),
      nM = iM(1396),
      QM = iM(3563),
      zM = iM(1429),
      LM = iM(5401),
      mM = iM(5424),
      HM = iM(656),
      hM = iM(5456),
      JM = iM(1303);

    function dM(MM) {
      var rM;
      let {
        setApplySettingsCallback: iM
      } = MM;
      const [, aM] = (0, jM.useReducer)((MM => MM + 1), 0), PM = (0, jM.useRef)(!1), nM = (0, jM.useRef)(null);

      function dM(MM, rM) {
        QM.e.setFromJson(MM, "player");
        const OM = QM.e.saveTexturePack();
        if (HM.H) {
          const MM = QM.e.toJson();
          OM.then((rM => {
            rM && (0, hM.e)(MM)
          }))
        } else PM.current ||= rM, nM.current !== QM.e.getId() || QM.e.getId() === SM.o.CUSTOM && PM.current ? iM((() => LM.j)) : iM(null);
        aM()
      }
      async function lM(MM) {
        if (QM.e.getId() !== MM.metaData.id) {
          if (QM.e.getId() === SM.o.CUSTOM && QM.e.getFromFolderName()) {
            const MM = zM.NotificationProvider.showPromptPopup({
              title: "settingsMenu:loseChangesTitle",
              subtitle: "settingsMenu:loseChangesSubtitle",
              confirmText: "general:continue",
              destructive: !0,
              confirmTooltip: "",
              cancelText: "general:cancel",
              cancelTooltip: ""
            });
            if (!0 !== await MM.getResult()) return
          }
          dM(MM, !1)
        }
      }(0, jM.useEffect)((() => {
        nM.current = QM.e.getId()
      }), []);
      const EM = OM.b,
        UM = [EM, ...Object.values(SM.o).filter((MM => MM !== EM))];
      return (0, JM.jsx)(JM.Fragment, {
        children: (0, JM.jsxs)("div", {
          className: "TexturePackCategory SettingsMenuRightInner",
          children: [(0, JM.jsx)("div", {
            className: "TexturePackList",
            children: UM.map((MM => (0, JM.jsx)(yM, {
              id: MM,
              isSelected: MM === QM.e.getId(),
              setSelected: lM
            }, MM)))
          }), QM.e.getId() === SM.o.CUSTOM && (0, JM.jsx)(mM.e, {
            folderName: null !== (rM = QM.e.getFromFolderName()) && void 0 !== rM ? rM : null,
            onTexturePackUpdated: function(MM) {
              dM(MM, !0)
            },
            packOwner: "player"
          })]
        })
      })
    }

    function yM(MM) {
      let {
        id: rM,
        isSelected: iM,
        setSelected: aM,
        disabled: QM = !1
      } = MM;
      const [zM, LM] = (0, jM.useState)(!0), [mM, HM] = (0, jM.useState)(""), [hM, dM] = (0, jM.useState)(""), [yM, lM] = (0, jM.useState)(""), EM = (0, jM.useRef)({});
      return (0, jM.useEffect)((() => {
        (0, OM.k)(rM).then((MM => {
          var rM;
          MM && (EM.current = MM, LM(!1), HM(EM.current.metaData.name), dM(EM.current.metaData.author), lM(null !== (rM = EM.current.metaData.previewImage) && void 0 !== rM ? rM : ""))
        })).catch((MM => {
          console.warn(`Failed to fetch texture pack ${rM}`, MM)
        }))
      }), [rM]), (0, JM.jsxs)("div", {
        "data-pad-focusable": !0,
        "aria-disabled": QM || void 0,
        className: PM()("TexturePack", {
          Selected: iM,
          Custom: rM === SM.o.CUSTOM,
          Disabled: QM
        }),
        onClick: () => {
          zM || QM || aM(EM.current)
        },
        children: [(0, JM.jsx)("div", {
          className: "TexturePackBg",
          style: {
            backgroundImage: yM ? `url(${yM})` : void 0
          }
        }), zM && (0, JM.jsx)("div", {
          className: "TexturePackName",
          children: (0, JM.jsx)(nM.d, {})
        }), !zM && mM && (0, JM.jsx)("div", {
          className: "TexturePackName",
          children: mM
        }), !zM && hM && (0, JM.jsx)("div", {
          className: "TexturePackAuthor",
          children: hM
        })]
      })
    }
  },
  5430: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => PM,
      e: () => aM,
      i: () => jM
    });
    var OM = iM(5435);
    const SM = [MM => MM.strict ? "strict" : "nonStrict", MM => MM.program];

    function jM(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const OM = {};
      for (const SM in iM) OM[SM] = `\0${SM}\0`;
      return MM(rM, OM).replace(/\0(\w+)\0/g, ((MM, rM) => iM[rM]))
    }

    function aM(MM) {
      return null === MM.file ? null : MM.line > 0 ? `${MM.file}:${MM.line}` : MM.file
    }

    function PM(MM) {
      const rM = new Map(MM.map((MM => [nM(MM).join("."), MM])));
      if (0 === rM.size) return [];
      const iM = zM([...rM.values()]);
      return 0 === iM[0].length ? [] : iM
    }

    function nM(MM) {
      return SM.map((rM => rM(MM)))
    }
    const QM = SM.map((MM => new Set(OM.g.map(MM)).size));

    function zM(MM) {
      const rM = SM.map((rM => new Set(MM.map(rM)))),
        iM = rM.reduce(((MM, rM) => MM * rM.size), 1),
        OM = rM.every(((MM, rM) => 1 === MM.size || MM.size === QM[rM]));
      if (iM === MM.length && OM) return [SM.filter(((MM, iM) => 1 === rM[iM].size)).map((rM => rM(MM[0])))];
      let jM = null;
      for (let aM = 0; aM < SM.length; aM++) {
        if (1 === rM[aM].size) continue;
        const iM = LM(MM, SM[aM]).flatMap(zM);
        (null === jM || iM.length < jM.length) && (jM = iM)
      }
      return jM
    }

    function LM(MM, rM) {
      const iM = new Map;
      for (const SM of MM) {
        var OM;
        const MM = rM(SM);
        iM.set(MM, [...null !== (OM = iM.get(MM)) && void 0 !== OM ? OM : [], SM])
      }
      return [...iM.values()]
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
  5435: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => OM.g,
      g: () => SM,
      k: () => OM.o
    });
    var OM = iM(5442);
    const SM = [!1, !0].flatMap((MM => ["terrain", "liquid", "model"].map((rM => ({
      strict: MM,
      program: rM
    })))))
  },
  5463: (MM, rM, iM) => {
    function OM(MM, rM) {
      return SM(MM, rM)
    }

    function SM(MM, rM) {
      if (MM === rM) return !0;
      if ("object" !== typeof MM || "object" !== typeof rM || null === MM || null === rM || Array.isArray(MM) !== Array.isArray(rM)) return !1;
      const iM = MM,
        OM = rM,
        jM = Object.keys(iM);
      return jM.length === Object.keys(OM).length && jM.every((MM => Object.prototype.hasOwnProperty.call(OM, MM) && SM(iM[MM], OM[MM])))
    }
    iM.d(rM, {
      d: () => OM
    })
  },
  5456: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => aM,
      g: () => PM
    });
    var OM = iM(2263),
      SM = iM(5463);
    let jM = null;

    function aM(MM) {
      jM = {
        pack: MM.metaData.id === OM.b ? null : MM
      }
    }

    function PM(MM) {
      return !(null === jM || !(0, SM.d)(jM.pack, MM)) && (jM = null, !0)
    }
  },
  5442: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => PM,
      f: () => aM,
      g: () => OM,
      j: () => JM,
      k: () => LM,
      o: () => SM,
      q: () => jM,
      t: () => QM,
      w: () => zM,
      z: () => mM
    });
    const OM = 5;

    function SM(MM) {
      return MM === OM
    }

    function jM(MM) {
      return [...MM.features]
    }
    const aM = 262144,
      PM = 256,
      nM = 256;

    function QM(MM) {
      if ("object" !== typeof MM || null === MM || Array.isArray(MM)) return "The pack has no files.";
      const rM = [];
      for (const [iM, OM] of Object.entries(MM)) {
        if ("string" !== typeof OM) return `${iM} isn't text.`;
        rM.push({
          path: iM,
          source: OM
        })
      }
      return rM.sort(((MM, rM) => LM(MM.path, rM.path))),
        function(MM) {
          if (0 === MM.length) return "The pack has no .wgsl files.";
          if (MM.length > PM) return `The pack has more than ${PM} .wgsl files.`;
          const rM = new Set;
          for (const {
              path: iM
            }
            of MM) {
            const MM = HM(iM);
            if (null !== MM) return MM;
            if (rM.has(iM)) return `The pack has two files at ${iM}.`;
            rM.add(iM)
          }
          return mM(MM) > aM ? `The pack's .wgsl files are over ${aM/1024} KB in total.` : null
        }(rM) ?? rM
    }

    function zM(MM) {
      const rM = {};
      for (const iM of MM) rM[iM.path] = iM.source;
      return rM
    }

    function LM(MM, rM) {
      return MM < rM ? -1 : MM > rM ? 1 : 0
    }

    function mM(MM) {
      const rM = new TextEncoder;
      let iM = 0;
      for (const {
          source: OM
        }
        of MM) iM += rM.encode(OM).byteLength;
      return iM
    }

    function HM(MM) {
      if (!MM.toLowerCase().endsWith(".wgsl")) return `${MM} isn't a .wgsl file.`;
      if (MM.length > nM) return `A file path is over ${nM} characters.`;
      if (MM.includes("\\") || /[\u0000-\u001f]/.test(MM)) return `${MM} isn't a valid file path.`;
      return MM.split("/").some((MM => "" === MM || "." === MM || ".." === MM)) ? `${MM} isn't a valid file path.` : null
    }
    const hM = /^(.*)\[rot\[([1-4])$/;

    function JM(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const OM = new Map;
      rM.forEach(((MM, rM) => {
        let {
          numAnimStates: iM,
          animStartIdx: SM
        } = MM;
        for (let jM = 1; jM < iM; jM++) OM.set(SM + jM - 1, rM)
      }));
      const SM = Object.entries(MM),
        jM = new Map;
      for (const [JM, dM] of SM) {
        const MM = hM.exec(JM);
        "1" === MM?.[2] && jM.set(MM[1], dM + 1)
      }
      const aM = MM => {
          const rM = hM.exec(MM);
          return rM && jM.has(rM[1]) ? {
            root: rM[1],
            rotation: Number(rM[2]) - 1
          } : null
        },
        PM = new Set(SM.map((MM => {
          let [rM] = MM;
          return aM(rM)?.root ?? rM
        }))),
        nM = (MM, iM) => {
          const OM = MM.replace(/_?0$/, "");
          return (rM[iM]?.numAnimStates ?? 0) > 1 && !PM.has(OM) ? OM : MM
        },
        QM = new Map;
      for (const [hM, JM] of SM) QM.set(JM, nM(aM(hM)?.root ?? hM, JM));
      const zM = SM.reduce(((MM, rM) => {
          let [, iM] = rM;
          return Math.max(MM, iM + 1)
        }), 0),
        LM = Array.from({
          length: zM
        }, ((MM, rM) => ({
          id: rM + 1,
          rotation: 0
        }))),
        mM = new Map,
        HM = new Map;
      for (const [hM, JM] of SM) {
        const MM = aM(hM),
          rM = OM.get(JM);
        if (void 0 !== rM) {
          const iM = QM.get(rM);
          HM.set(hM, {
            name: hM,
            texture: iM,
            kind: "frame"
          }), MM && !HM.has(MM.root) && HM.set(MM.root, {
            name: MM.root,
            texture: iM,
            kind: "frame"
          });
          continue
        }
        const iM = QM.get(JM),
          SM = MM?.root ?? hM;
        if (iM !== SM && HM.set(SM, {
            name: SM,
            texture: iM,
            kind: "frame"
          }), MM) {
          const rM = jM.get(MM.root);
          LM[JM] = {
            id: rM,
            rotation: MM.rotation
          }, mM.set(iM, rM), HM.set(hM, {
            name: hM,
            texture: iM,
            kind: "rotation"
          })
        } else mM.set(iM, JM + 1)
      }
      for (const hM of mM.keys()) HM.delete(hM);
      for (const [hM, JM] of iM) {
        const MM = mM.get(JM);
        void 0 === MM || mM.has(hM) || (mM.set(hM, MM), HM.delete(hM))
      }
      return {
        named: [...mM].sort(((MM, rM) => {
          let [iM] = MM, [OM] = rM;
          return iM < OM ? -1 : iM > OM ? 1 : 0
        })).map((MM => {
          let [rM, iM] = MM;
          return {
            name: rM,
            id: iM
          }
        })),
        aliases: [...HM.values()],
        layers: LM
      }
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);