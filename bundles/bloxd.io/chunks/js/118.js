export const id = 118;
export const ids = [118];
export const modules = {
  5792: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => wR
    });
    var yR = GR(1163),
      tR = GR.n(yR),
      uR = GR(1468),
      ZR = GR(1465),
      qR = GR(4850),
      iR = GR(134),
      fR = GR(4889),
      VR = GR(4881),
      KR = GR(1378);

    function wR(RR) {
      let {
        game: JR
      } = RR;
      const GR = (0, iR.is99NightsCrazyGamesBundle)() ? "large" : "small",
        yR = (0, fR.d)(JR, GR),
        wR = (0, qR.h)(yR),
        rR = void 0 !== wR.blurhash;
      return (0, KR.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [wR.isLoading && !rR && (0, KR.jsx)(ZR.d, {
          loaderType: "Secondary"
        }), !wR.failed && (null !== wR.src || rR) && (0, KR.jsx)("div", {
          className: tR()("SchematicImage", VR.f, {
            SchematicImageFadeIn: wR.fadeIn && !rR
          }),
          style: (0, VR.c)(wR),
          children: (0, KR.jsx)(VR.b, {
            image: wR
          })
        }), wR.failed && (0, KR.jsx)("div", {
          className: "SchematicImageError",
          children: (0, KR.jsx)(uR.d, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  6072: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => LR
    });
    var yR = GR(66),
      tR = GR(1163),
      uR = GR.n(tR),
      ZR = GR(6003),
      qR = GR(1465),
      iR = GR(1270),
      fR = GR(4428),
      VR = GR(4571),
      KR = GR(1468),
      wR = GR(4436),
      rR = GR(6076),
      eR = GR(6092),
      aR = GR(1378);

    function LR(RR) {
      let {
        folderName: JR,
        onTexturePackUpdated: tR,
        disabled: LR = !1,
        maxFileSizeMb: nR,
        packOwner: UR
      } = RR;
      const {
        t: WR
      } = (0, iR.A)(), [AR, CR] = (0, yR.useState)(!1), [XR, MR] = (0, yR.useState)(null), [BR, lR] = (0, yR.useState)(null), pR = (0, yR.useRef)(null);
      async function gR(RR) {
        CR(!0);
        try {
          const JR = await (0, fR.t)(RR);
          if ("customGame" === UR && (0, VR.k)(JR)) return void MR(WR(VR.b));
          if (void 0 !== nR) {
            const RR = JSON.stringify(JR).length / 1048576;
            if (RR > nR) return void MR(WR("customTexturePack:packTooBig", {
              size: RR.toFixed(1),
              max: nR
            }))
          }
          MR(null), lR(null), tR(JR), pR.current = JR,
            function(RR, JR) {
              const yR = RR.modelOverrides;
              yR && Promise.all([GR.e(233), GR.e(232)]).then((() => GR(35238))).then((GR => {
                let {
                  packDisplayName: tR,
                  refusedPackModels: uR,
                  packModelSummary: ZR
                } = GR;
                const qR = tR(RR.metaData);
                JR(ZR(qR, uR(qR, yR, !1)))
              })).catch((RR => {
                console.error("Checking the texture pack's models failed:", RR)
              }))
            }(JR, (RR => {
              pR.current === JR && lR(RR)
            }))
        } catch (JR) {
          if (JR instanceof wR.c) {
            const RR = "customTexturePack:invalidPack" !== JR.translationKey || (0, eR.g)() ? JR.translationKey : "customTexturePack:invalidPackZip";
            MR((0, rR.d)(WR, RR, JR.params))
          } else console.error("Couldn't read the texture pack", JR), MR(WR("customTexturePack:errorTitle"))
        } finally {
          CR(!1)
        }
      }
      const {
        getRootProps: bR,
        getInputProps: vR,
        isDragActive: OR,
        open: xR
      } = (0, ZR.e)({
        onDrop: gR,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: LR
      });
      return (0, aR.jsxs)("div", {
        className: "CustomTexturePackContainer",
        children: [(0, aR.jsxs)("div", {
          className: "CustomTextureWarning",
          children: [WR("settingsMenu:customTextureWarning"), ".", (0, aR.jsx)("br", {}), WR("settingsMenu:viewDocumentation"), ":", " ", (0, aR.jsx)("a", {
            href: "https://github.com/Bloxdy/texturePacks",
            target: "_blank",
            rel: "noreferrer",
            children: "github.com/Bloxdy/texturePacks"
          })]
        }), XR && (0, aR.jsxs)("div", {
          className: "CustomTextureError",
          children: [WR("general:error"), ": ", XR]
        }), BR && (0, aR.jsx)("div", {
          className: "CustomTextureError",
          children: BR
        }), (0, aR.jsxs)("div", {
          ...bR({
            className: uR()("CustomTextureFolderUpload", {
              ActiveDrag: OR,
              Disabled: LR
            })
          }),
          children: [(0, aR.jsx)("input", {
            ...vR({
              webkitdirectory: "true"
            })
          }), AR && (0, aR.jsx)("div", {
            className: "CustomTextureFolderUploadLoading",
            children: (0, aR.jsx)(qR.d, {})
          }), !AR && !OR && JR && (0, aR.jsxs)(aR.Fragment, {
            children: [(0, aR.jsx)("div", {
              className: "CustomTextureFolderUploadIcon Active",
              children: (0, aR.jsx)(KR.d, {
                name: "folder-image"
              })
            }), (0, aR.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions Active",
              children: JR
            })]
          }), !AR && (OR || !JR) && (0, aR.jsxs)(aR.Fragment, {
            children: [(0, aR.jsx)("div", {
              className: "CustomTextureFolderUploadIcon",
              children: (0, aR.jsx)(KR.d, {
                name: "up-from-bracket"
              })
            }), (0, aR.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions",
              children: WR((0, eR.g)() ? "customTexturePack:dropHere" : "customTexturePack:chooseZipInstructions")
            })]
          }), !AR && (0, aR.jsx)(eR.c, {
            disabled: LR,
            openFolderPicker: xR,
            onFiles: RR => {
              gR(RR)
            }
          })]
        })]
      })
    }
  },
  6092: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => VR,
      g: () => fR
    });
    var yR = GR(66),
      tR = GR(1590),
      uR = GR(1270),
      ZR = GR(103),
      qR = GR(4385),
      iR = GR(1378);

    function fR() {
      return !(0, ZR.isMobile)()
    }

    function VR(RR) {
      let {
        disabled: JR,
        openFolderPicker: GR,
        onFiles: ZR
      } = RR;
      const {
        t: VR
      } = (0, uR.A)(), KR = (0, yR.useRef)(null);
      return (0, iR.jsxs)("div", {
        className: "PackPickButtons",
        "data-pad-mouse-only": !0,
        children: [(0, iR.jsx)("input", {
          ref: KR,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(RR) {
            const JR = Array.from(RR.target.files);
            RR.target.value = "", ZR(JR)
          }
        }), fR() && (0, iR.jsx)(tR.g, {
          disabled: JR,
          onClick: GR,
          children: VR("general:chooseFolder")
        }), (0, iR.jsx)(tR.g, {
          disabled: JR,
          onClick: () => {
            (0, qR.e)(KR.current)
          },
          children: VR("general:chooseZip")
        })]
      })
    }
  },
  6037: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => eR,
      g: () => AR,
      i: () => aR,
      m: () => WR
    });
    var yR = GR(66),
      tR = GR(6041),
      uR = GR(5141),
      ZR = GR(1501),
      qR = GR(4250),
      iR = GR(1163),
      fR = GR.n(iR),
      VR = GR(1493),
      KR = GR(1943),
      wR = GR(6063),
      rR = GR(1378);

    function eR(RR) {
      let {
        label: JR,
        onClick: GR,
        checked: yR,
        circleInfoText: tR,
        className: qR,
        disabled: iR,
        note: VR
      } = RR;
      return (0, rR.jsxs)("div", {
        "aria-disabled": iR || void 0,
        "data-pad-focusable": !0,
        className: fR()("SettingBox CheckboxContainer", {
          [qR]: qR,
          SettingBoxDisabled: iR
        }),
        onClick: () => {
          iR || GR(!yR)
        },
        children: [(0, rR.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, rR.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, rR.jsx)(uR.d, {
              className: "SettingsCheckbox",
              checked: yR,
              disabled: iR,
              onChange: () => {}
            })
          }), (0, rR.jsxs)("div", {
            className: "CheckboxText",
            children: [JR, tR && (0, rR.jsx)("span", {
              onClick: RR => RR.stopPropagation(),
              children: (0, rR.jsx)(ZR.e, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: tR
              })
            })]
          })]
        }), VR && (0, rR.jsx)("div", {
          className: "SettingNote",
          children: VR
        })]
      })
    }

    function aR(RR) {
      let {
        name: JR,
        onChange: GR,
        min: tR,
        max: uR,
        step: qR,
        initValue: iR,
        circleInfoText: VR,
        format: KR,
        className: wR,
        padStep: eR,
        disabled: aR = !1,
        selectableMax: LR,
        cappedNote: nR,
        note: WR,
        onChangeComplete: AR
      } = RR;
      const [CR, XR] = (0, yR.useState)(iR), MR = (0, yR.useRef)(iR);
      (0, yR.useEffect)((() => {
        MR.current = iR, XR(iR)
      }), [iR]);
      const BR = void 0 !== LR && LR < uR,
        lR = BR ? {
          "--slider-selectable": (LR - tR) / (uR - tR)
        } : void 0,
        pR = BR && nR ? nR : WR;
      return (0, rR.jsxs)("div", {
        className: fR()("SettingBox SettingsSliderDiv", {
          [wR]: wR,
          SettingBoxDisabled: aR,
          SliderCapped: BR
        }),
        style: lR,
        children: [(0, rR.jsxs)("div", {
          className: "SliderText",
          children: [`${JR}: ${KR?KR(CR):CR}`, VR && (0, rR.jsx)(ZR.e, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: VR
          })]
        }), (0, rR.jsx)("div", {
          className: "SliderDiv",
          children: (0, rR.jsx)(UR, {
            value: CR,
            min: tR,
            max: uR,
            step: qR,
            onChange: RR => {
              if (BR && RR >= LR && CR === LR) return;
              const JR = BR ? Math.min(RR, LR) : RR;
              MR.current = JR, XR(JR), GR(JR)
            },
            onChangeComplete: AR && (() => {
              AR(MR.current)
            }),
            format: KR,
            padStep: eR,
            disabled: aR
          })
        }), pR && (0, rR.jsx)("div", {
          className: "SettingNote",
          children: pR
        })]
      })
    }
    const LR = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function nR(RR) {
      var JR;
      return (null !== (JR = String(RR).split(".")[1]) && void 0 !== JR ? JR : "").length
    }

    function UR(RR) {
      let {
        value: JR,
        min: GR,
        max: uR,
        step: ZR,
        onChange: qR,
        orientation: iR,
        reverse: fR,
        setIsChanging: VR,
        tooltip: KR,
        labels: eR,
        handleLabel: aR,
        format: UR,
        onChangeStart: WR,
        onChangeComplete: AR,
        padStep: CR,
        disabled: XR = !1
      } = RR;
      const MR = (0, yR.useRef)(null),
        BR = (0, yR.useRef)(null);
      (0, yR.useLayoutEffect)((() => {
        var RR, JR, GR;
        const yR = null !== (RR = null === (JR = MR.current) || void 0 === JR ? void 0 : JR.querySelector(".rangeslider")) && void 0 !== RR ? RR : null;
        null === yR || void 0 === yR || yR.setAttribute("data-pad-slider", ""), null === yR || void 0 === yR || yR.setAttribute("data-pad-focusable", ""), null === yR || void 0 === yR || null === (GR = yR.querySelector(".rangeslider__handle")) || void 0 === GR || GR.setAttribute("data-pad-slider-handle", ""), BR.current = yR
      }), []), (0, yR.useLayoutEffect)((() => {
        var RR, JR;
        XR ? null === (RR = BR.current) || void 0 === RR || RR.setAttribute("aria-disabled", "true") : null === (JR = BR.current) || void 0 === JR || JR.removeAttribute("aria-disabled")
      }), [XR]);
      const lR = Math.max(nR(ZR), nR(GR)),
        pR = RR => {
          if (RR >= uR) return uR;
          if (RR <= GR) return GR;
          const JR = Number((Math.round((RR - GR) / ZR) * ZR + GR).toFixed(lR));
          return Math.min(uR, Math.max(GR, JR))
        },
        gR = (0, yR.useRef)(AR);
      gR.current = AR, (0, yR.useEffect)((() => {
        const RR = MR.current;
        if (!RR) return;
        const JR = RR => {
          var JR;
          LR.has(RR.key) && (null === (JR = gR.current) || void 0 === JR || JR.call(gR))
        };
        return RR.addEventListener("keyup", JR), () => {
          RR.removeEventListener("keyup", JR)
        }
      }), []);
      const bR = (0, yR.useRef)(!1);
      return (0, wR.i)(BR, {
        adjust: RR => {
          if (XR) return;
          const yR = null !== CR && void 0 !== CR ? CR : Math.max(ZR, Math.round((uR - GR) / 20 / ZR) * ZR),
            tR = pR(JR + RR * yR * (fR ? -1 : 1));
          tR !== JR && (null === WR || void 0 === WR || WR(), qR(tR), null === AR || void 0 === AR || AR())
        },
        setFraction: RR => {
          if (XR) return;
          const yR = pR(GR + (fR ? 1 - RR : RR) * (uR - GR));
          yR !== JR && (bR.current || (bR.current = !0, null === WR || void 0 === WR || WR()), qR(yR))
        },
        endDrag: () => {
          bR.current && (bR.current = !1, null === AR || void 0 === AR || AR())
        }
      }), (0, rR.jsx)("div", {
        ref: MR,
        style: {
          display: "contents"
        },
        children: (0, rR.jsx)(tR.b, {
          value: JR,
          min: GR,
          max: uR,
          step: ZR,
          onChange: RR => {
            qR(pR(RR))
          },
          orientation: iR,
          reverse: fR,
          tooltip: KR,
          labels: eR,
          handleLabel: aR,
          format: UR,
          onChangeStart: () => {
            null === WR || void 0 === WR || WR(), null === VR || void 0 === VR || VR(!0)
          },
          onChangeComplete: () => {
            null === VR || void 0 === VR || VR(!1), null === AR || void 0 === AR || AR()
          }
        })
      })
    }
    async function WR() {
      const RR = VR.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await RR.getResult() && (0, KR.reloadBloxd)()
    }

    function AR(RR) {
      let {
        label: JR,
        options: GR,
        value: yR,
        onChange: tR,
        circleInfoText: uR
      } = RR;
      return (0, rR.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, rR.jsxs)("div", {
          className: "SliderText",
          children: [JR, uR && (0, rR.jsx)(ZR.e, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: uR
          })]
        }), (0, rR.jsx)(qR.c, {
          ariaLabel: JR,
          options: GR,
          value: yR,
          onChange: tR
        })]
      })
    }
  },
  6035: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => LR,
      i: () => nR
    });
    var yR = GR(4428),
      tR = GR(2374),
      uR = GR(66),
      ZR = GR(1163),
      qR = GR.n(ZR),
      iR = GR(1465),
      fR = GR(4422),
      VR = GR(1493),
      KR = GR(6037),
      wR = GR(6072),
      rR = GR(709),
      eR = GR(6101),
      aR = GR(1378);

    function LR(RR) {
      var JR;
      let {
        setApplySettingsCallback: GR
      } = RR;
      const [, ZR] = (0, uR.useReducer)((RR => RR + 1), 0), qR = (0, uR.useRef)(!1), iR = (0, uR.useRef)(null);

      function LR(RR, JR) {
        fR.b.setFromJson(RR, "player");
        const yR = fR.b.saveTexturePack();
        if (rR.G) {
          const RR = fR.b.toJson();
          yR.then((JR => {
            JR && (0, eR.b)(RR)
          }))
        } else qR.current ||= JR, iR.current !== fR.b.getId() || fR.b.getId() === tR.q.CUSTOM && qR.current ? GR((() => KR.m)) : GR(null);
        ZR()
      }
      async function UR(RR) {
        if (fR.b.getId() !== RR.metaData.id) {
          if (fR.b.getId() === tR.q.CUSTOM && fR.b.getFromFolderName()) {
            const RR = VR.NotificationProvider.showPromptPopup({
              title: "settingsMenu:loseChangesTitle",
              subtitle: "settingsMenu:loseChangesSubtitle",
              confirmText: "general:continue",
              destructive: !0,
              confirmTooltip: "",
              cancelText: "general:cancel",
              cancelTooltip: ""
            });
            if (!0 !== await RR.getResult()) return
          }
          LR(RR, !1)
        }
      }(0, uR.useEffect)((() => {
        iR.current = fR.b.getId()
      }), []);
      const WR = yR.e,
        AR = [WR, ...Object.values(tR.q).filter((RR => RR !== WR))];
      return (0, aR.jsx)(aR.Fragment, {
        children: (0, aR.jsxs)("div", {
          className: "TexturePackCategory SettingsMenuRightInner",
          children: [(0, aR.jsx)("div", {
            className: "TexturePackList",
            children: AR.map((RR => (0, aR.jsx)(nR, {
              id: RR,
              isSelected: RR === fR.b.getId(),
              setSelected: UR
            }, RR)))
          }), fR.b.getId() === tR.q.CUSTOM && (0, aR.jsx)(wR.e, {
            folderName: null !== (JR = fR.b.getFromFolderName()) && void 0 !== JR ? JR : null,
            onTexturePackUpdated: function(RR) {
              LR(RR, !0)
            },
            packOwner: "player"
          })]
        })
      })
    }

    function nR(RR) {
      let {
        id: JR,
        isSelected: GR,
        setSelected: ZR,
        disabled: fR = !1
      } = RR;
      const [VR, KR] = (0, uR.useState)(!0), [wR, rR] = (0, uR.useState)(""), [eR, LR] = (0, uR.useState)(""), [nR, UR] = (0, uR.useState)(""), WR = (0, uR.useRef)({});
      return (0, uR.useEffect)((() => {
        (0, yR.p)(JR).then((RR => {
          var JR;
          RR && (WR.current = RR, KR(!1), rR(WR.current.metaData.name), LR(WR.current.metaData.author), UR(null !== (JR = WR.current.metaData.previewImage) && void 0 !== JR ? JR : ""))
        })).catch((RR => {
          console.warn(`Failed to fetch texture pack ${JR}`, RR)
        }))
      }), [JR]), (0, aR.jsxs)("div", {
        "data-pad-focusable": !0,
        "aria-disabled": fR || void 0,
        className: qR()("TexturePack", {
          Selected: GR,
          Custom: JR === tR.q.CUSTOM,
          Disabled: fR
        }),
        onClick: () => {
          VR || fR || ZR(WR.current)
        },
        children: [(0, aR.jsx)("div", {
          className: "TexturePackBg",
          style: {
            backgroundImage: nR ? `url(${nR})` : void 0
          }
        }), VR && (0, aR.jsx)("div", {
          className: "TexturePackName",
          children: (0, aR.jsx)(iR.d, {})
        }), !VR && wR && (0, aR.jsx)("div", {
          className: "TexturePackName",
          children: wR
        }), !VR && eR && (0, aR.jsx)("div", {
          className: "TexturePackAuthor",
          children: eR
        })]
      })
    }
  },
  6076: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => qR,
      c: () => ZR,
      d: () => uR
    });
    var yR = GR(6080);
    const tR = [RR => RR.strict ? "strict" : "nonStrict", RR => RR.program];

    function uR(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const yR = {};
      for (const tR in GR) yR[tR] = `\0${tR}\0`;
      return RR(JR, yR).replace(/\0(\w+)\0/g, ((RR, JR) => GR[JR]))
    }

    function ZR(RR) {
      return null === RR.file ? null : RR.line > 0 ? `${RR.file}:${RR.line}` : RR.file
    }

    function qR(RR) {
      const JR = new Map(RR.map((RR => [iR(RR).join("."), RR])));
      if (0 === JR.size) return [];
      const GR = VR([...JR.values()]);
      return 0 === GR[0].length ? [] : GR
    }

    function iR(RR) {
      return tR.map((JR => JR(RR)))
    }
    const fR = tR.map((RR => new Set(yR.g.map(RR)).size));

    function VR(RR) {
      const JR = tR.map((JR => new Set(RR.map(JR)))),
        GR = JR.reduce(((RR, JR) => RR * JR.size), 1),
        yR = JR.every(((RR, JR) => 1 === RR.size || RR.size === fR[JR]));
      if (GR === RR.length && yR) return [tR.filter(((RR, GR) => 1 === JR[GR].size)).map((JR => JR(RR[0])))];
      let uR = null;
      for (let ZR = 0; ZR < tR.length; ZR++) {
        if (1 === JR[ZR].size) continue;
        const GR = KR(RR, tR[ZR]).flatMap(VR);
        (null === uR || GR.length < uR.length) && (uR = GR)
      }
      return uR
    }

    function KR(RR, JR) {
      const GR = new Map;
      for (const tR of RR) {
        var yR;
        const RR = JR(tR);
        GR.set(RR, [...null !== (yR = GR.get(RR)) && void 0 !== yR ? yR : [], tR])
      }
      return [...GR.values()]
    }
  },
  6063: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => uR,
      i: () => ZR
    });
    var yR = GR(66);
    const tR = new WeakMap,
      uR = RR => {
        var JR;
        const GR = RR.closest("[data-pad-slider]");
        return GR && null !== (JR = tR.get(GR)) && void 0 !== JR ? JR : null
      },
      ZR = (RR, JR) => {
        const GR = (0, yR.useRef)(JR);
        GR.current = JR, (0, yR.useEffect)((() => {
          if (RR.current) return ((RR, JR) => (tR.set(RR, JR), () => {
            tR.get(RR) === JR && tR.delete(RR)
          }))(RR.current, {
            adjust: RR => {
              GR.current.adjust(RR)
            },
            setFraction: RR => {
              GR.current.setFraction(RR)
            },
            endDrag: () => {
              GR.current.endDrag()
            }
          })
        }), [RR])
      }
  },
  6080: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => yR.f,
      g: () => tR,
      i: () => yR.o
    });
    var yR = GR(6084);
    const tR = [!1, !0].flatMap((RR => ["terrain", "liquid", "model"].map((JR => ({
      strict: RR,
      program: JR
    })))))
  },
  6103: (RR, JR, GR) => {
    function yR(RR, JR) {
      return tR(RR, JR)
    }

    function tR(RR, JR) {
      if (RR === JR) return !0;
      if ("object" !== typeof RR || "object" !== typeof JR || null === RR || null === JR || Array.isArray(RR) !== Array.isArray(JR)) return !1;
      const GR = RR,
        yR = JR,
        uR = Object.keys(GR);
      return uR.length === Object.keys(yR).length && uR.every((RR => Object.prototype.hasOwnProperty.call(yR, RR) && tR(GR[RR], yR[RR])))
    }
    GR.d(JR, {
      d: () => yR
    })
  },
  6101: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => ZR,
      c: () => qR
    });
    var yR = GR(2374),
      tR = GR(6103);
    let uR = null;

    function ZR(RR) {
      uR = {
        pack: RR.metaData.id === yR.e ? null : RR
      }
    }

    function qR(RR) {
      return !(null === uR || !(0, tR.d)(uR.pack, RR)) && (uR = null, !0)
    }
  },
  6084: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => qR,
      e: () => ZR,
      f: () => yR,
      j: () => aR,
      l: () => KR,
      o: () => tR,
      r: () => uR,
      t: () => fR,
      x: () => VR,
      z: () => wR
    });
    const yR = 5;

    function tR(RR) {
      return RR === yR
    }

    function uR(RR) {
      return [...RR.features]
    }
    const ZR = 262144,
      qR = 256,
      iR = 256;

    function fR(RR) {
      if ("object" !== typeof RR || null === RR || Array.isArray(RR)) return "The pack has no files.";
      const JR = [];
      for (const [GR, yR] of Object.entries(RR)) {
        if ("string" !== typeof yR) return `${GR} isn't text.`;
        JR.push({
          path: GR,
          source: yR
        })
      }
      return JR.sort(((RR, JR) => KR(RR.path, JR.path))),
        function(RR) {
          if (0 === RR.length) return "The pack has no .wgsl files.";
          if (RR.length > qR) return `The pack has more than ${qR} .wgsl files.`;
          const JR = new Set;
          for (const {
              path: GR
            }
            of RR) {
            const RR = rR(GR);
            if (null !== RR) return RR;
            if (JR.has(GR)) return `The pack has two files at ${GR}.`;
            JR.add(GR)
          }
          return wR(RR) > ZR ? `The pack's .wgsl files are over ${ZR/1024} KB in total.` : null
        }(JR) ?? JR
    }

    function VR(RR) {
      const JR = {};
      for (const GR of RR) JR[GR.path] = GR.source;
      return JR
    }

    function KR(RR, JR) {
      return RR < JR ? -1 : RR > JR ? 1 : 0
    }

    function wR(RR) {
      const JR = new TextEncoder;
      let GR = 0;
      for (const {
          source: yR
        }
        of RR) GR += JR.encode(yR).byteLength;
      return GR
    }

    function rR(RR) {
      if (!RR.toLowerCase().endsWith(".wgsl")) return `${RR} isn't a .wgsl file.`;
      if (RR.length > iR) return `A file path is over ${iR} characters.`;
      if (RR.includes("\\") || /[\u0000-\u001f]/.test(RR)) return `${RR} isn't a valid file path.`;
      return RR.split("/").some((RR => "" === RR || "." === RR || ".." === RR)) ? `${RR} isn't a valid file path.` : null
    }
    const eR = /^(.*)\[rot\[([1-4])$/;

    function aR(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const yR = new Map;
      JR.forEach(((RR, JR) => {
        let {
          numAnimStates: GR,
          animStartIdx: tR
        } = RR;
        for (let uR = 1; uR < GR; uR++) yR.set(tR + uR - 1, JR)
      }));
      const tR = Object.entries(RR),
        uR = new Map;
      for (const [aR, LR] of tR) {
        const RR = eR.exec(aR);
        "1" === RR?.[2] && uR.set(RR[1], LR + 1)
      }
      const ZR = RR => {
          const JR = eR.exec(RR);
          return JR && uR.has(JR[1]) ? {
            root: JR[1],
            rotation: Number(JR[2]) - 1
          } : null
        },
        qR = new Set(tR.map((RR => {
          let [JR] = RR;
          return ZR(JR)?.root ?? JR
        }))),
        iR = (RR, GR) => {
          const yR = RR.replace(/_?0$/, "");
          return (JR[GR]?.numAnimStates ?? 0) > 1 && !qR.has(yR) ? yR : RR
        },
        fR = new Map;
      for (const [eR, aR] of tR) fR.set(aR, iR(ZR(eR)?.root ?? eR, aR));
      const VR = tR.reduce(((RR, JR) => {
          let [, GR] = JR;
          return Math.max(RR, GR + 1)
        }), 0),
        KR = Array.from({
          length: VR
        }, ((RR, JR) => ({
          id: JR + 1,
          rotation: 0
        }))),
        wR = new Map,
        rR = new Map;
      for (const [eR, aR] of tR) {
        const RR = ZR(eR),
          JR = yR.get(aR);
        if (void 0 !== JR) {
          const GR = fR.get(JR);
          rR.set(eR, {
            name: eR,
            texture: GR,
            kind: "frame"
          }), RR && !rR.has(RR.root) && rR.set(RR.root, {
            name: RR.root,
            texture: GR,
            kind: "frame"
          });
          continue
        }
        const GR = fR.get(aR),
          tR = RR?.root ?? eR;
        if (GR !== tR && rR.set(tR, {
            name: tR,
            texture: GR,
            kind: "frame"
          }), RR) {
          const JR = uR.get(RR.root);
          KR[aR] = {
            id: JR,
            rotation: RR.rotation
          }, wR.set(GR, JR), rR.set(eR, {
            name: eR,
            texture: GR,
            kind: "rotation"
          })
        } else wR.set(GR, aR + 1)
      }
      for (const eR of wR.keys()) rR.delete(eR);
      for (const [eR, aR] of GR) {
        const RR = wR.get(aR);
        void 0 === RR || wR.has(eR) || (wR.set(eR, RR), rR.delete(eR))
      }
      return {
        named: [...wR].sort(((RR, JR) => {
          let [GR] = RR, [yR] = JR;
          return GR < yR ? -1 : GR > yR ? 1 : 0
        })).map((RR => {
          let [JR, GR] = RR;
          return {
            name: JR,
            id: GR
          }
        })),
        aliases: [...rR.values()],
        layers: KR
      }
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);