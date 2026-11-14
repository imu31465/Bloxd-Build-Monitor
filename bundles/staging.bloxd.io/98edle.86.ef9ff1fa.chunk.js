export const id = 86;
export const ids = [86];
export const modules = {
  3919: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => BW,
      e: () => eW,
      g: () => tR
    });
    var wW = MW(1027),
      CW = MW(897),
      zR = MW.n(CW),
      AW = MW(1180),
      bR = (MW(75), MW(3458)),
      yR = MW(904),
      NW = MW(940);

    function eW(WW) {
      let {
        children: RW,
        label: MW,
        className: CW,
        circleInfoText: bR,
        disabled: eW
      } = WW;
      const {
        t: BW
      } = (0, wW.C)();
      return (0, NW.jsxs)("div", {
        className: zR()("LabeledInput", {
          [CW]: CW,
          DisabledLabelInput: eW
        }),
        children: [bR && (0, NW.jsx)(AW.e, {
          tooltipInner: (0, NW.jsx)("div", {
            className: "LabeledInputTooltip",
            children: BW(bR)
          }),
          children: (0, NW.jsxs)("div", {
            className: "Label",
            children: [BW(MW), (0, NW.jsx)(yR.e, {
              name: "circle-info"
            })]
          })
        }), !bR && (0, NW.jsx)("div", {
          className: "Label",
          children: BW(MW)
        }), RW]
      })
    }

    function BW(WW) {
      let {
        checked: RW,
        setChecked: MW
      } = WW;
      return (0, NW.jsx)("div", {
        className: "OtherInput ClickableOtherInput",
        "data-pad-focusable": !0,
        onClick: WW => {
          MW(!RW)
        },
        children: (0, NW.jsx)(bR.e, {
          checked: RW,
          onChange: WW => {
            MW(WW.target.checked)
          },
          disabled: !1
        })
      })
    }

    function tR(WW) {
      let {
        checked: RW,
        setChecked: MW,
        disabled: wW
      } = WW;
      return (0, NW.jsx)("div", {
        className: zR()("SwitchContainer", {
          SwitchContainerDisabled: wW
        }),
        onClick: () => {
          wW || MW(!RW)
        },
        children: (0, NW.jsx)(bR.e, {
          className: "SwitchCheckbox",
          checked: RW,
          onChange: WW => {
            MW(WW.target.checked)
          },
          disabled: !!wW
        })
      })
    }
  },
  3922: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => NW
    });
    var wW = MW(897),
      CW = MW.n(wW),
      zR = MW(1027),
      AW = MW(940);
    const bR = ["tpRequests", "spawnProtection", "spawnReset", "smpMarketplace", "survivalGuns", "fallDamage", "dayNight"],
      yR = ["survivalGuns", "fallDamage", "dayNight"];

    function NW(WW) {
      let {
        callbacks: RW,
        disabled: MW,
        advancedMode: wW,
        hideWrapper: NW
      } = WW;
      const {
        t: BW
      } = (0, zR.C)(), tR = (0, AW.jsx)("div", {
        className: CW()("PluginsGrid", {
          SectionBody: !NW
        }),
        children: (wW ? bR : yR).map((WW => (0, AW.jsx)(eW, {
          plugin: WW,
          callbacks: RW[WW],
          disabled: MW
        }, WW)))
      });
      return NW ? tR : (0, AW.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, AW.jsx)("div", {
          className: "SectionTitle",
          children: BW("worldBuilder:pluginsSection")
        }), tR]
      })
    }

    function eW(WW) {
      let {
        plugin: RW,
        callbacks: {
          isEnabled: MW,
          kMW: wW
        },
        disabled: bR
      } = WW;
      const {
        t: yR
      } = (0, zR.C)(), NW = MW();
      return (0, AW.jsxs)("div", {
        className: CW()("PluginCard", {
          PluginCardEnabled: NW,
          PluginCardDisabledForm: bR
        }),
        "data-pad-focusable": !0,
        "aria-disabled": bR || void 0,
        onClick: () => {
          bR || wW(!NW)
        },
        children: [(0, AW.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, AW.jsx)("img", {
            src: `/textures/games/classic/customGames/${RW}.png`,
            alt: RW
          })
        }), (0, AW.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, AW.jsx)("div", {
            className: "PluginCardTitle",
            children: yR(BW[RW])
          }), (0, AW.jsx)("div", {
            className: "PluginCardDescription",
            children: yR(tR[RW])
          })]
        }), (0, AW.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: yR(NW ? "general:on" : "general:off")
        })]
      })
    }
    const BW = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      tR = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  3911: (WW, RW, MW) => {
    MW.d(RW, {
      h: () => CR,
      e: () => wR,
      g: () => MR,
      i: () => zM
    });
    var wW = MW(75),
      CW = MW(1166),
      zR = MW(1255),
      AW = MW(1489),
      bR = MW(1027),
      yR = MW(1157),
      NW = MW(1180),
      eW = MW(904),
      BW = MW(1053),
      tR = MW(897),
      TW = MW.n(tR),
      gR = MW(232),
      iR = MW(3926),
      YW = MW(1066),
      JW = MW(3919),
      PW = MW(2273),
      IW = MW(3922),
      oW = MW(940);

    function lW(WW) {
      let {
        icon: RW,
        title: MW,
        disabled: wW,
        children: CW
      } = WW;
      return (0, oW.jsxs)("div", {
        className: TW()("ManageCard", {
          ManageCardDisabled: wW
        }),
        children: [(0, oW.jsxs)("div", {
          className: "ManageCardHead",
          children: [(0, oW.jsx)("div", {
            className: "ManageCardIcon",
            children: (0, oW.jsx)(eW.e, {
              name: RW
            })
          }), (0, oW.jsx)("div", {
            children: (0, oW.jsx)("h2", {
              className: "ManageCardTitle",
              children: MW
            })
          })]
        }), (0, oW.jsxs)("div", {
          className: "ManageCardBody",
          children: [CW, wW && (0, oW.jsx)("div", {
            className: "ManageCardDisabledOverlay"
          })]
        })]
      })
    }

    function FW(WW) {
      let {
        label: RW,
        caption: MW,
        children: wW
      } = WW;
      return (0, oW.jsxs)("div", {
        className: "ManageStackedField",
        children: [(0, oW.jsx)("div", {
          className: "ManageStackedFieldLabel",
          children: RW
        }), wW, MW && (0, oW.jsx)("div", {
          className: "ManageStackedFieldCaption",
          children: MW
        })]
      })
    }

    function fW(WW) {
      let {
        label: RW,
        caption: MW,
        disabled: wW,
        children: CW
      } = WW;
      return (0, oW.jsxs)("div", {
        className: TW()("ManageField", {
          ManageFieldDisabled: wW
        }),
        children: [(0, oW.jsxs)("div", {
          className: "ManageFieldText",
          children: [(0, oW.jsx)("div", {
            className: "ManageFieldLabel",
            children: RW
          }), (0, oW.jsx)("div", {
            className: "ManageFieldCaption",
            children: MW
          })]
        }), (0, oW.jsx)("div", {
          className: "ManageFieldControl",
          children: CW
        })]
      })
    }

    function QW(WW) {
      var RW, MW;
      let {
        schematicData: wW,
        updateSchematicData: CW,
        publishFormEnabled: zR,
        formEnabled: AW
      } = WW;
      const {
        t: yR
      } = (0, bR.C)(), NW = !zR, eW = {
        tpRequests: {
          isEnabled: () => !wW.disableTpRequests,
          kMW: WW => CW("disableTpRequests", !WW)
        },
        spawnProtection: {
          isEnabled: () => !wW.disableSpawnProtection,
          kMW: WW => CW("disableSpawnProtection", !WW)
        },
        spawnReset: {
          isEnabled: () => !!wW.enableSpawnReset,
          kMW: WW => CW("enableSpawnReset", WW)
        },
        smpMarketplace: {
          isEnabled: () => !!wW.enableSmpMarketplace,
          kMW: WW => CW("enableSmpMarketplace", WW)
        },
        survivalGuns: {
          isEnabled: () => !!wW.enableSurvivalGuns,
          kMW: WW => CW("enableSurvivalGuns", WW)
        },
        fallDamage: {
          isEnabled: () => !wW.disableFallDamage,
          kMW: WW => CW("disableFallDamage", !WW)
        },
        dayNight: {
          isEnabled: () => !!wW.enableDayNight,
          kMW: WW => CW("enableDayNight", WW)
        }
      };
      return (0, oW.jsxs)(oW.Fragment, {
        children: [!1 === wW.schematicContainsSpawnBlock && (0, oW.jsx)("div", {
          className: "ManageWarningBanner",
          children: yR("worldBuilder:mustContainSpawnBlock")
        }), (0, oW.jsxs)("div", {
          className: "ManageSettingsGrid",
          children: [(0, oW.jsxs)(lW, {
            icon: "globe",
            title: yR("worldBuilder:worldRulesSection"),
            disabled: !AW,
            children: [(0, oW.jsx)(fW, {
              label: yR("classic:defaultGamemode"),
              caption: yR("classic:defaultGamemodeDescription"),
              disabled: NW,
              children: (0, oW.jsx)(PW.b, {
                controlClassName: "ManageDropdown",
                options: iR.o.map((WW => ({
                  value: WW,
                  label: gR.u[WW]
                }))),
                value: wW.defaultGamemode,
                onChange: WW => CW("defaultGamemode", WW.value)
              })
            }), (0, oW.jsx)(fW, {
              label: yR("classic:voidDeathHeight"),
              caption: yR("classic:voidDeathHeightDescription"),
              disabled: NW,
              children: (0, oW.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, oW.jsx)("input", {
                  type: "number",
                  max: YW.K,
                  value: null !== (RW = wW.voidDeathHeight) && void 0 !== RW ? RW : "",
                  onChange: WW => {
                    const RW = parseInt(WW.target.value);
                    CW("voidDeathHeight", RW)
                  }
                }), (0, oW.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: yR("worldBuilder:blocksUnit")
                })]
              })
            }), (0, oW.jsx)(fW, {
              label: yR("classic:worldBorder"),
              caption: yR("classic:worldBorderDescription"),
              disabled: NW,
              children: (0, oW.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, oW.jsx)("input", {
                  type: "number",
                  min: YW.U,
                  max: YW.M,
                  placeholder: yR("worldBuilder:noWorldBorderLimit"),
                  value: null !== (MW = wW.worldBorder) && void 0 !== MW ? MW : "",
                  onChange: WW => {
                    const RW = parseInt(WW.target.value);
                    CW("worldBorder", isNaN(RW) ? null : RW)
                  }
                }), (0, oW.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: yR("worldBuilder:blocksUnit")
                })]
              })
            }), (0, oW.jsx)(fW, {
              label: yR("classic:disableMobs"),
              caption: yR("classic:disableMobsDescription"),
              disabled: NW,
              children: (0, oW.jsx)(JW.g, {
                checked: wW.disableMobs,
                setChecked: WW => CW("disableMobs", WW),
                disabled: NW
              })
            })]
          }), (0, oW.jsxs)(lW, {
            icon: "user-group",
            title: yR("worldBuilder:playerAndLobbySection"),
            disabled: !AW,
            children: [(0, oW.jsx)(fW, {
              label: yR("classic:disableKeepInventory"),
              caption: yR("classic:disableKeepInventoryDescription"),
              disabled: NW,
              children: (0, oW.jsx)(JW.g, {
                checked: wW.disableKeepInventory,
                setChecked: WW => CW("disableKeepInventory", WW),
                disabled: NW
              })
            }), (0, oW.jsx)(fW, {
              label: yR("classic:persistInventory"),
              caption: yR("classic:persistInventoryDescription"),
              disabled: NW,
              children: (0, oW.jsx)(PW.b, {
                controlClassName: "ManageDropdown",
                options: iR.g.map((WW => ({
                  value: WW,
                  label: gR.j[WW]
                }))),
                value: wW.persistInventory,
                onChange: WW => CW("persistInventory", WW.value)
              })
            }), (0, oW.jsx)(fW, {
              label: yR("classic:persistWorld"),
              caption: yR("classic:persistWorldDescription"),
              disabled: NW,
              children: (0, oW.jsx)(JW.g, {
                checked: wW.persistWorld,
                setChecked: WW => CW("persistWorld", WW),
                disabled: NW
              })
            }), (0, oW.jsx)(fW, {
              label: yR("classic:disableLobbySpawn"),
              caption: yR("classic:disableLobbySpawnDescription"),
              disabled: NW,
              children: (0, oW.jsx)(JW.g, {
                checked: wW.disableLobbySpawn,
                setChecked: WW => CW("disableLobbySpawn", WW),
                disabled: NW
              })
            }), (0, oW.jsx)(fW, {
              label: yR("classic:hideLobbyCode"),
              caption: yR("classic:hideLobbyCodeDescription"),
              disabled: NW,
              children: (0, oW.jsx)(JW.g, {
                checked: wW.hideLobbyCode,
                setChecked: WW => CW("hideLobbyCode", WW),
                disabled: NW
              })
            })]
          })]
        }), (0, oW.jsx)(lW, {
          icon: "layer-group",
          title: yR("worldBuilder:pluginsSection"),
          disabled: !AW,
          children: (0, oW.jsx)(IW.d, {
            callbacks: eW,
            disabled: NW,
            advancedMode: !0,
            hideWrapper: !0
          })
        })]
      })
    }
    var rR = MW(3928),
      cR = MW(3458),
      XW = MW(1314),
      jR = MW(2592),
      kR = MW(969),
      aR = MW(3893),
      sW = MW(3933),
      dW = MW(1264);
    const pW = 50,
      hW = .3;
    async function UW(WW) {
      const RW = await
      function(WW) {
        return new Promise(((RW, MW) => {
          const wW = new FileReader;
          wW.onload = () => RW(wW.result), wW.onerror = MW, wW.readAsDataURL(WW)
        }))
      }(WW), MW = await
      function(WW) {
        return new Promise(((RW, MW) => {
          const wW = new Image;
          wW.onload = () => RW(wW), wW.onerror = () => MW(new Error("Failed to load image")), wW.src = WW
        }))
      }(RW);
      if (MW.naturalHeight > MW.naturalWidth) throw new EW;
      const wW = 1024 * pW,
        {
          dataUrl: CW,
          finalQuality: zR
        } = function(WW, RW) {
          const MW = document.createElement("canvas");
          MW.width = WW.naturalWidth, MW.height = WW.naturalHeight, MW.getContext("2d").drawImage(WW, 0, 0);
          let wW = .92,
            CW = MW.toDataURL("image/jpeg", wW);
          for (; .75 * CW.length > RW && wW > .05;) wW -= .05, CW = MW.toDataURL("image/jpeg", wW);
          return {
            dataUrl: CW,
            finalQuality: wW
          }
        }(MW, wW);
      if (Math.ceil(.75 * CW.length) > wW) throw new VW;
      return {
        base64Jpg: CW,
        heavilyCompressed: zR < hW
      }
    }
    class EW extends Error {}
    class VW extends Error {}
    var mR = function(WW) {
      return WW[WW.NOT_LOGGED_IN = 0] = "NOT_LOGGED_IN", WW[WW.THUMBNAIL_LIMIT_REACHED = 1] = "THUMBNAIL_LIMIT_REACHED", WW
    }(mR || {});

    function xR(WW) {
      var RW;
      let {
        schematicId: MW,
        hasReadUploadPolicy: CW,
        onPolicyValidationError: yR,
        onThumbnailReady: NW
      } = WW;
      const {
        t: tR
      } = (0, bR.C)(), [gR, iR] = (0, wW.useState)(null), [YW, JW] = (0, wW.useState)(""), [PW, IW] = (0, wW.useState)(""), [lW, FW] = (0, wW.useState)(!0), [fW, QW] = (0, wW.useState)(!1), rR = (0, wW.useRef)(!1), [cR, XW] = (0, wW.useState)(null), [jR, kR] = (0, wW.useState)(!1), [aR, dW] = (0, wW.useState)(!1), pW = (0, wW.useRef)(0), {
        getRootProps: hW,
        getInputProps: mR,
        isDragActive: xR
      } = (0, sW.d)({
        accept: {
          "image/*": [".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp"]
        },
        multiple: !1,
        onDrop: async WW => {
          if (0 === WW.length) return;
          const RW = WW[0],
            MW = ++pW.current;
          XW(null), kR(!1), iR(null), JW(RW.name);
          try {
            const WW = await UW(RW);
            if (MW !== pW.current) return;
            iR(WW), kR(WW.heavilyCompressed)
          } catch (wW) {
            if (MW !== pW.current) return;
            XW(tR(wW instanceof EW ? "thumbnail:portraitImagesNotAllowed" : wW instanceof VW ? "thumbnail:couldNotCompressImage" : "thumbnail:failedToUploadImage"))
          }
        },
        useFsAccessApi: !1
      }), vR = YW.length <= 30 ? YW : `${YW.slice(0,27)}...`, KW = null !== (RW = null === gR || void 0 === gR ? void 0 : gR.base64Jpg) && void 0 !== RW ? RW : null, uW = PW.trim(), OW = uW.length >= BW.h && uW.length <= BW.g, nW = aR && !gR && !cR, GW = aR && !OW;
      return (0, oW.jsxs)("div", {
        className: "ThumbnailUploadContainer",
        children: [(0, oW.jsxs)("div", {
          ...hW({
            className: TW()("ThumbnailUploadDropzone", {
              ActiveDrag: xR,
              ValidationError: nW
            })
          }),
          children: [(0, oW.jsx)("input", {
            ...mR()
          }), !xR && KW ? (0, oW.jsxs)(oW.Fragment, {
            children: [(0, oW.jsxs)("div", {
              className: "ThumbnailAspectPreviews",
              children: [(0, oW.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, oW.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "1:1"
                }), (0, oW.jsx)("div", {
                  className: "ThumbnailAspectFrame Square",
                  children: (0, oW.jsx)("img", {
                    src: KW,
                    alt: "1:1 preview"
                  })
                })]
              }), (0, oW.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, oW.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "16:9"
                }), (0, oW.jsx)("div", {
                  className: "ThumbnailAspectFrame Wide",
                  children: (0, oW.jsx)("img", {
                    src: KW,
                    alt: "16:9 preview"
                  })
                })]
              })]
            }), (0, oW.jsxs)("div", {
              children: [(0, oW.jsx)("div", {
                className: "ThumbnailUploadInstructions Active",
                children: vR
              }), (0, oW.jsx)("div", {
                className: "ThumbnailUploadInstructions Preview",
                children: tR("thumbnail:preview")
              })]
            })]
          }) : (0, oW.jsxs)(oW.Fragment, {
            children: [(0, oW.jsx)("div", {
              className: "ThumbnailUploadIcon",
              children: (0, oW.jsx)(eW.e, {
                name: "image"
              })
            }), (0, oW.jsx)("div", {
              className: "ThumbnailUploadInstructions",
              children: tR("thumbnail:dragImageHere")
            })]
          })]
        }), nW && (0, oW.jsx)("div", {
          className: "ThumbnailUploadError",
          children: tR("thumbnail:imageRequired")
        }), (0, oW.jsx)(AW.e, {
          className: TW()("ThumbnailUploadNameInput", {
            ValidationError: GW
          }),
          placeholderText: tR("thumbnail:thumbnailName"),
          defaultValue: PW,
          onValueChange: WW => {
            IW(WW)
          },
          maxLength: BW.g
        }), GW && (0, oW.jsx)("div", {
          className: "ThumbnailUploadError",
          children: tR("thumbnail:nameRequired", {
            min: BW.h,
            max: BW.g
          })
        }), (0, oW.jsxs)("label", {
          className: "ThumbnailUploadCheckbox",
          children: [(0, oW.jsx)("input", {
            type: "checkbox",
            checked: lW,
            onChange: WW => {
              FW(WW.target.checked)
            }
          }), tR("thumbnail:setAsThumbnailOnceApproved")]
        }), jR && (0, oW.jsx)("div", {
          className: "ThumbnailUploadWarning",
          children: tR("thumbnail:heavyCompressionWarning")
        }), cR && (0, oW.jsx)("div", {
          className: "ThumbnailUploadError",
          children: cR
        }), (0, oW.jsx)(zR.m, {
          disabled: fW,
          className: "ThumbnailUploadButton",
          onClick: async () => {
            if (dW(!0), !rR.current && gR && OW && CW) {
              rR.current = !0, QW(!0), XW(null);
              try {
                await NW(gR.base64Jpg, uW, lW ? MW : null)
              } catch (WW) {
                XW(WW.errorMessageForUser ? tR(WW.errorMessageForUser, WW.errorMessageTranslationParams) : tR("thumbnail:failedToUploadImage"))
              } finally {
                rR.current = !1, QW(!1)
              }
            } else CW || yR()
          },
          children: tR(fW ? "thumbnail:processing" : "thumbnail:uploadThumbnail")
        })]
      })
    }
    const vR = 2e3;

    function KW(WW) {
      let {
        schematicId: RW,
        ownedThumbnailCount: MW,
        onClose: CW,
        onThumbnailReady: zR
      } = WW;
      const {
        t: AW
      } = (0, bR.C)(), {
        userContext: yR
      } = (0, kR.c)(), [NW, tR] = (0, wW.useState)(!1), [gR, iR] = (0, wW.useState)(!1), [YW, JW] = (0, wW.useState)(!1), PW = (0, wW.useRef)();
      (0, wW.useEffect)((() => () => {
        clearTimeout(PW.current)
      }), []);
      const IW = function(WW, RW) {
        const MW = [];
        return WW.isLoggedIn() || MW.push(mR.NOT_LOGGED_IN), RW >= BW.Q && MW.push(mR.THUMBNAIL_LIMIT_REACHED), MW
      }(yR, MW);
      if (IW.length > 0) {
        const WW = {
          [mR.NOT_LOGGED_IN]: {
            key: "thumbnail:mustBeLoggedInToUpload"
          },
          [mR.THUMBNAIL_LIMIT_REACHED]: {
            key: "thumbnail:thumbnailLimitReachedPleaseDelete",
            params: {
              max: BW.Q
            }
          }
        };
        return (0, oW.jsxs)("div", {
          className: "ThumbnailUploaderInner",
          children: [(0, oW.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: AW("thumbnail:cannotUploadThumbnail")
          }), IW.map(((RW, MW) => {
            const wW = WW[RW];
            return (0, oW.jsxs)("div", {
              className: "CannotUploadThumbnailItem",
              children: [(0, oW.jsx)(eW.e, {
                name: "triangle-exclamation"
              }), (0, oW.jsx)("span", {
                children: AW(wW.key, wW.params)
              })]
            }, MW)
          }))]
        })
      }
      return (0, oW.jsxs)("div", {
        className: TW()("ThumbnailUploaderInner", {
          ThumbnailUploaderSuccess: NW
        }),
        children: [NW && (0, oW.jsxs)("div", {
          className: "ThumbnailUploadSuccessOverlay",
          children: [(0, oW.jsxs)("div", {
            className: "ThumbnailUploadSuccessIcon FullyFancyText AnimFadeInScaleUp",
            children: [(0, oW.jsx)(eW.e, {
              name: "check"
            }), (0, oW.jsx)(dW.b, {})]
          }), (0, oW.jsx)("div", {
            className: "ThumbnailUploadSuccessText AnimFadeInScaleUp",
            children: AW("thumbnail:thumbnailUploaded")
          })]
        }), (0, oW.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: AW("thumbnail:uploadThumbnail")
        }), (0, oW.jsxs)("div", {
          className: "ThumbnailUploaderBody",
          children: [(0, oW.jsxs)("div", {
            className: "ThumbnailUploaderLeft",
            children: [(0, oW.jsx)("h3", {
              className: "SchematicPopupSubtitle",
              children: AW("thumbnail:chooseImage", {
                maxSizeKb: pW
              })
            }), (0, oW.jsx)(xR, {
              schematicId: RW,
              hasReadUploadPolicy: gR,
              onPolicyValidationError: () => {
                JW(!0)
              },
              onThumbnailReady: async (WW, RW, MW) => {
                await zR(WW, RW, MW), tR(!0), PW.current = setTimeout(CW, vR)
              }
            })]
          }), (0, oW.jsxs)("div", {
            className: "ThumbnailUploadPolicy",
            children: [(0, oW.jsx)("h3", {
              className: "ThumbnailUploadPolicyTitle",
              children: AW("thumbnail:uploadPolicy")
            }), (0, oW.jsxs)("ul", {
              className: "ThumbnailUploadPolicyList",
              children: [(0, oW.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, oW.jsx)(eW.e, {
                  name: "check"
                }), (0, oW.jsx)("span", {
                  children: AW("thumbnail:policyFollowGuidelines")
                })]
              }), (0, oW.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, oW.jsx)(eW.e, {
                  name: "check"
                }), (0, oW.jsx)("span", {
                  children: AW("thumbnail:policyInGameAssets")
                })]
              }), (0, oW.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, oW.jsx)(eW.e, {
                  name: "check"
                }), (0, oW.jsx)("span", {
                  children: AW("thumbnail:policyLimitText")
                })]
              }), (0, oW.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, oW.jsx)(eW.e, {
                  name: "x"
                }), (0, oW.jsx)("span", {
                  children: AW("thumbnail:policyCopyrightContent")
                })]
              }), (0, oW.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, oW.jsx)(eW.e, {
                  name: "x"
                }), (0, oW.jsx)("span", {
                  children: AW("thumbnail:policyOutOfGameAssets")
                })]
              }), (0, oW.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, oW.jsx)(eW.e, {
                  name: "x"
                }), (0, oW.jsx)("span", {
                  children: AW("thumbnail:policyBloxdTags")
                })]
              }), (0, oW.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, oW.jsx)(eW.e, {
                  name: "x"
                }), (0, oW.jsx)("span", {
                  children: AW("thumbnail:policyMustReflectGame")
                })]
              })]
            }), (0, oW.jsxs)("label", {
              className: TW()("ThumbnailUploadCheckbox Policy", {
                ValidationError: YW && !gR
              }),
              children: [(0, oW.jsx)("input", {
                type: "checkbox",
                checked: gR,
                onChange: WW => {
                  iR(WW.target.checked)
                }
              }), AW("thumbnail:agreeToUploadPolicy")]
            }), YW && !gR && (0, oW.jsx)("div", {
              className: "ThumbnailPolicyError",
              children: AW("thumbnail:policyRequired")
            })]
          })]
        })]
      })
    }
    var uW = MW(1033);
    const OW = {
      "custom-game-bad-thumbnail": {
        reason: "thumbnail:rejectionInappropriate",
        tips: ["thumbnail:rejectionInappropriateTip1", "thumbnail:rejectionInappropriateTip2", "thumbnail:rejectionInappropriateTip3"]
      },
      "thumbnail-copyright-content": {
        reason: "thumbnail:rejectionCopyright",
        tips: ["thumbnail:rejectionCopyrightTip1", "thumbnail:rejectionCopyrightTip2", "thumbnail:rejectionCopyrightTip3"]
      },
      "thumbnail-random-irrelevant-content": {
        reason: "thumbnail:rejectionIrrelevant",
        tips: ["thumbnail:rejectionIrrelevantTip1", "thumbnail:rejectionIrrelevantTip2", "thumbnail:rejectionIrrelevantTip3"]
      },
      "thumbnail-sexual-content": {
        reason: "thumbnail:rejectionSexual",
        tips: ["thumbnail:rejectionSexualTip1", "thumbnail:rejectionSexualTip2", "thumbnail:rejectionSexualTip3"]
      },
      "thumbnail-substances-content": {
        reason: "thumbnail:rejectionSubstances",
        tips: ["thumbnail:rejectionSubstancesTip1", "thumbnail:rejectionSubstancesTip2"]
      },
      "thumbnail-unauthorized-bloxd-branding": {
        reason: "thumbnail:rejectionUnauthorisedBranding",
        tips: ["thumbnail:rejectionUnauthorisedBrandingTip1", "thumbnail:rejectionUnauthorisedBrandingTip2", "thumbnail:rejectionUnauthorisedBrandingTip3", "thumbnail:rejectionUnauthorisedBrandingTip4"]
      },
      "thumbnail-violent-gore-content": {
        reason: "thumbnail:rejectionViolence",
        tips: ["thumbnail:rejectionViolenceTip1", "thumbnail:rejectionViolenceTip2", "thumbnail:rejectionViolenceTip3", "thumbnail:rejectionViolenceTip4"]
      }
    };

    function nW(WW) {
      var RW, MW;
      let {
        schematicData: AW,
        updateSchematicData: NW,
        publishFormEnabled: BW,
        onClose: tR
      } = WW;
      const {
        t: gR
      } = (0, bR.C)(), {
        userContext: iR,
        isUserContextUpdating: YW
      } = (0, kR.c)(), JW = (0, jR.e)(), [PW, IW] = (0, wW.useState)([]), [lW, FW] = (0, wW.useState)([]), [fW, QW] = (0, wW.useState)(!0), [rR, cR] = (0, wW.useState)(null !== (RW = AW.customThumbnailId) && void 0 !== RW ? RW : null), [sW, dW] = (0, wW.useState)(null), pW = (0, wW.useRef)(null !== (MW = AW.customThumbnailId) && void 0 !== MW ? MW : null), hW = (0, wW.useRef)(0), UW = (0, wW.useRef)(null), EW = (0, wW.useRef)(null), VW = (0, wW.useRef)(null), mR = (0, wW.useRef)(!1);

      function xR(WW, RW) {
        VW.current && (clearTimeout(VW.current), VW.current = null), dW(WW), null !== WW && RW && (VW.current = setTimeout((() => {
          dW(null), VW.current = null
        }), 5e3))
      }(0, wW.useEffect)((() => () => {
        clearTimeout(EW.current), clearTimeout(VW.current)
      }), []);
      const vR = (0, wW.useCallback)((() => {
        QW(!0), XW.c.getOwnedThumbnails(iR).then((WW => {
          const RW = [],
            MW = [];
          for (const wW of WW.thumbnails) wW.rejectionPolicyId ? RW.push(wW) : MW.push(wW);
          RW.sort(((WW, RW) => WW.lastUpdatedAt - RW.lastUpdatedAt)), MW.sort(((WW, RW) => {
            const MW = WW.approved ? 1 : 0,
              wW = (RW.approved ? 1 : 0) - MW;
            return 0 !== wW ? wW : RW.lastUpdatedAt - WW.lastUpdatedAt
          })), FW(RW), IW(MW)
        })).catch((WW => {
          console.error("Failed to fetch thumbnails:", WW)
        })).finally((() => {
          QW(!1)
        }))
      }), [iR]);
      async function OW(WW, RW, MW) {
        return XW.c.uploadSchematicThumbnail(iR, WW, RW, MW).then((() => {
          xR({
            text: gR("thumbnail:uploadedAwaitingModeration"),
            type: "success"
          }, !0), vR()
        }))
      }

      function nW() {
        hW.current = Date.now(), EW.current = null;
        const WW = UW.current;
        UW.current = null, xR({
          text: gR("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), XW.c.setSchematicThumbnail(iR, AW.schematicId, WW).then((() => {
          JW.current && (xR({
            text: gR("thumbnail:thumbnailUpdated"),
            type: "success"
          }, !0), pW.current = WW, NW("customThumbnailId", WW), NW("customThumbnailBlurhash", void 0), NW("customThumbnailVariants", void 0))
        })).catch((WW => {
          JW.current && (xR({
            text: WW.errorMessageForUser ? gR(WW.errorMessageForUser, WW.errorMessageTranslationParams) : gR("thumbnail:failedToSetThumbnail"),
            type: "error"
          }, !0), cR(pW.current))
        }))
      }

      function HW(WW) {
        cR(WW), UW.current = WW;
        const RW = Date.now() - hW.current;
        RW >= 1e3 ? nW() : (xR({
          text: gR("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), EW.current || (EW.current = setTimeout((() => {
          nW()
        }), 1e3 - RW)))
      }
      return (0, wW.useEffect)((() => {
        !1 === YW && vR()
      }), [YW, vR]), lW.length > 0 ? (0, oW.jsx)(GW, {
        rejectedThumbnails: lW,
        userContext: iR,
        isMountedRef: JW,
        onAcknowledged: vR
      }) : (0, oW.jsxs)("div", {
        className: "BloxdForm ThumbnailSection",
        children: [(0, oW.jsxs)("div", {
          className: "SectionTitle",
          children: [gR("thumbnail:gameThumbnail"), sW && (0, oW.jsx)("span", {
            className: TW()("ThumbnailActionMsg", `ThumbnailActionMsg--${sW.type}`),
            children: sW.text
          })]
        }), (0, oW.jsx)("div", {
          className: "SectionBody",
          children: (0, oW.jsxs)("div", {
            className: "ThumbnailGrid",
            children: [(0, oW.jsxs)("div", {
              className: TW()("ThumbnailGridItem ThumbnailGridItemDefault", {
                ThumbnailGridItemSelected: null === rR
              }),
              onClick: () => HW(null),
              children: [(0, oW.jsx)(aR.e, {
                game: {
                  schematicId: AW.schematicId,
                  imageBlurhash: AW.imageBlurhash
                }
              }), (0, oW.jsx)("div", {
                className: "ThumbnailGridItemLabel ThumbnailDefaultLabel",
                children: gR("general:default")
              })]
            }), fW && (0, oW.jsx)(yR.d, {}), PW.map(((WW, RW) => (0, oW.jsxs)("div", {
              className: TW()("ThumbnailGridItem", {
                ThumbnailGridItemSelected: rR === WW.id,
                ThumbnailGridItemPending: !WW.approved
              }),
              onClick: () => {
                WW.approved && HW(WW.id)
              },
              children: [WW.approved && (0, oW.jsx)("img", {
                src: `${uW.clientSideServerUrls.s3Url}/customThumbnails/${WW.id}.jpg`,
                alt: "Thumbnail"
              }), WW.approved && (0, oW.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: WW.name
              }), WW.id && (0, oW.jsx)(zR.E, {
                className: "ThumbnailDeleteButton",
                onClick: RW => async function(WW, RW, MW) {
                  WW.stopPropagation();
                  const wW = await CW.NotificationProvider.showCustomPopup({
                      body: WW => (0, oW.jsx)(LW, {
                        thumbnailId: RW,
                        thumbnailName: MW,
                        onClose: RW => {
                          RW && (mR.current = !0), WW()
                        }
                      }),
                      middleScreenPopupClassName: "ThumbnailDeleteConfirmPopup",
                      onClose: tR
                    }).getResult(),
                    zR = mR.current;
                  mR.current = !1, zR && !0 === wW && (JW.current && xR({
                    text: gR("thumbnail:deletingThumbnail"),
                    type: "info"
                  }, !1), XW.c.deleteSchematicThumbnail(iR, RW).then((() => {
                    JW.current && (xR({
                      text: gR("thumbnail:thumbnailDeleted"),
                      type: "success"
                    }, !0), pW.current === RW && HW(null), vR())
                  })).catch((WW => {
                    JW.current && xR({
                      text: WW.errorMessageForUser ? gR(WW.errorMessageForUser, WW.errorMessageTranslationParams) : gR("thumbnail:failedToDeleteThumbnail"),
                      type: "error"
                    }, !0)
                  })))
                }(RW, WW.id, WW.name),
                children: (0, oW.jsx)(eW.e, {
                  name: "trash-can"
                })
              }), !WW.approved && (0, oW.jsx)("div", {
                className: "ThumbnailUnapprovedIcon",
                children: (0, oW.jsx)(eW.e, {
                  name: "hourglass-clock"
                })
              }), !WW.approved && (0, oW.jsxs)("div", {
                className: "ThumbnailGridItemLabel ThumbnailPendingLabel",
                children: [WW.name, (0, oW.jsx)("br", {}), gR("thumbnail:pendingApproval")]
              })]
            }, RW))), (0, oW.jsxs)("div", {
              className: TW()("ThumbnailGridItem ThumbnailUploadTile", {
                ThumbnailUploadTileDisabled: !BW
              }),
              onClick: () => {
                BW && function(WW) {
                  let {
                    schematicId: RW,
                    ownedThumbnailCount: MW,
                    onThumbnailReady: wW,
                    onClose: zR
                  } = WW;
                  CW.NotificationProvider.showCustomPopup({
                    body: WW => (0, oW.jsx)(KW, {
                      schematicId: RW,
                      ownedThumbnailCount: MW,
                      onClose: WW,
                      onThumbnailReady: wW
                    }),
                    middleScreenPopupClassName: "SchematicThumbnailPopup",
                    onClose: zR,
                    unlockPointerKey: "schematicThumbnailUploaderPopup"
                  })
                }({
                  schematicId: AW.schematicId,
                  ownedThumbnailCount: PW.length,
                  onThumbnailReady: OW,
                  onClose: tR
                })
              },
              children: [(0, oW.jsx)(eW.e, {
                name: "plus"
              }), (0, oW.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: gR("thumbnail:uploadThumbnail")
              })]
            })]
          })
        })]
      })
    }

    function GW(WW) {
      let {
        rejectedThumbnails: RW,
        userContext: MW,
        isMountedRef: CW,
        onAcknowledged: AW
      } = WW;
      const {
        t: NW
      } = (0, bR.C)(), [BW, tR] = (0, wW.useState)(!1), [TW, gR] = (0, wW.useState)(!1), iR = function(WW) {
        const RW = new Map;
        for (const MW of WW) {
          const WW = MW.rejectionPolicyId,
            wW = RW.get(WW);
          wW ? wW.push(MW) : RW.set(WW, [MW])
        }
        return RW
      }(RW);
      return (0, oW.jsxs)("div", {
        className: "ThumbnailRejectionNotice",
        children: [(0, oW.jsxs)("div", {
          className: "ThumbnailRejectionNoticeTitle",
          children: [(0, oW.jsx)(eW.e, {
            name: "triangle-exclamation"
          }), " ", NW("thumbnail:thumbnailsRejected"), " ", (0, oW.jsx)(eW.e, {
            name: "triangle-exclamation"
          })]
        }), (0, oW.jsx)("div", {
          className: "ThumbnailRejectionNoticeSubtitle",
          children: NW("thumbnail:thumbnailsRejectedDescription")
        }), (0, oW.jsx)("div", {
          className: "ThumbnailRejectionNoticeList",
          children: [...iR.entries()].map((WW => {
            let [RW, MW] = WW;
            const wW = OW[RW];
            return (0, oW.jsxs)("div", {
              className: "ThumbnailRejectionNoticeGroup",
              children: [(0, oW.jsx)("div", {
                className: "ThumbnailRejectionNoticeItems",
                children: MW.map((WW => (0, oW.jsxs)("div", {
                  className: "ThumbnailRejectionNoticeItem",
                  children: [(0, oW.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemIcon",
                    children: (0, oW.jsx)(eW.e, {
                      name: "image-slash"
                    })
                  }), (0, oW.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemDetails",
                    children: (0, oW.jsx)("div", {
                      className: "ThumbnailRejectionNoticeItemName",
                      children: WW.name
                    })
                  })]
                }, WW.id)))
              }), (0, oW.jsxs)("div", {
                className: "ThumbnailRejectionNoticeGroupReason",
                children: [NW("thumbnail:rejectionReason"), " ", wW ? NW(wW.reason) : RW]
              }), wW && (0, oW.jsx)("ul", {
                className: "ThumbnailRejectionNoticeGroupTips",
                children: wW.tips.map((WW => (0, oW.jsx)("li", {
                  children: NW(WW)
                }, WW)))
              })]
            }, RW)
          }))
        }), (0, oW.jsxs)("label", {
          className: "ThumbnailRejectionNoticeCheckbox",
          children: [(0, oW.jsx)(cR.e, {
            checked: BW,
            onChange: WW => tR(WW.target.checked),
            disabled: TW
          }), (0, oW.jsx)("span", {
            children: NW("thumbnail:haveReadRejectionReasons")
          })]
        }), (0, oW.jsx)(zR.m, {
          onClick: async function() {
            gR(!0);
            const WW = await Promise.allSettled(RW.map((WW => XW.c.deleteSchematicThumbnail(MW, WW.id))));
            if (!CW.current) return;
            const wW = WW.filter((WW => "rejected" === WW.status));
            wW.length > 0 && console.error("Some rejected thumbnails failed to delete:", wW), AW()
          },
          disabled: !BW || TW,
          className: "ThumbnailRejectionNoticeAcceptButton",
          children: TW ? (0, oW.jsx)(yR.d, {}) : NW("general:accept")
        })]
      })
    }

    function LW(WW) {
      let {
        thumbnailId: RW,
        thumbnailName: MW,
        onClose: wW
      } = WW;
      const {
        t: CW
      } = (0, bR.C)();
      return (0, oW.jsxs)("div", {
        className: "ThumbnailDeleteConfirm",
        children: [(0, oW.jsx)("div", {
          className: "ThumbnailDeleteConfirmTitle",
          children: CW("thumbnail:deleteThumbnail")
        }), (0, oW.jsxs)("div", {
          className: "ThumbnailDeleteConfirmImageContainer",
          children: [(0, oW.jsx)("img", {
            className: "ThumbnailDeleteConfirmImage",
            src: `${uW.clientSideServerUrls.s3Url}/customThumbnails/${RW}.jpg`,
            alt: "Thumbnail to delete"
          }), (0, oW.jsx)("div", {
            className: "ThumbnailGridItemLabel",
            children: MW
          })]
        }), (0, oW.jsx)("div", {
          className: "ThumbnailDeleteConfirmSubtitle",
          children: CW("thumbnail:deleteThumbnailConfirmation")
        }), (0, oW.jsxs)("div", {
          className: "ThumbnailDeleteConfirmButtons",
          children: [(0, oW.jsxs)(zR.E, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => wW(!0),
            children: [(0, oW.jsx)(eW.e, {
              name: "trash-can"
            }), " ", CW("general:delete")]
          }), (0, oW.jsx)(zR.j, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => wW(!1),
            children: CW("general:cancel")
          })]
        })]
      })
    }
    var HW = MW(2301),
      DW = MW(3955),
      qR = MW(3959),
      ZW = MW(4e3);

    function SW(WW) {
      let {
        schematicData: RW,
        setTexturePack: MW,
        initializeTexturePack: CW,
        publishFormEnabled: zR
      } = WW;
      const {
        t: AW
      } = (0, bR.C)(), [yR, NW] = (0, wW.useState)(null), [eW, BW] = (0, wW.useState)(null), [tR, gR] = (0, wW.useState)(!1), iR = (0, jR.e)(), YW = zR && !tR, JW = RW.customTexturePackKey;

      function PW(WW) {
        var RW;
        NW(WW.metaData.id), BW(null !== (RW = WW.metaData.fromFolderName) && void 0 !== RW ? RW : null), (WW.metaData.id !== HW.n.CUSTOM || WW.metaData.fromFolderName) && MW(WW)
      }
      return (0, wW.useEffect)((() => {
        JW && (gR(!0), (0, DW.b)(JW).then((WW => {
          var RW;
          iR.current && (WW ? (NW(WW.metaData.id), BW(null !== (RW = WW.metaData.fromFolderName) && void 0 !== RW ? RW : null), CW(WW)) : console.error(`No texture pack at ${JW}`))
        })).catch((WW => {
          console.error("Error fetching texture pack: ", WW)
        })).finally((() => {
          gR(!1)
        })))
      }), [JW, CW, iR]), (0, oW.jsxs)("div", {
        className: "BloxdForm TexturePackSection",
        children: [(0, oW.jsx)("div", {
          className: "SectionTitle",
          children: AW("customTexturePack:customTexturePack")
        }), (0, oW.jsxs)("div", {
          className: "TexturePackList",
          children: [(0, oW.jsx)("div", {
            className: TW()("TexturePack", {
              Selected: null === yR && !tR,
              Disabled: !YW
            }),
            onClick: () => {
              YW && (NW(null), MW(null), BW(null))
            },
            children: (0, oW.jsx)("div", {
              className: "TexturePackName",
              children: "No Override"
            })
          }), Object.values(HW.n).map((WW => (0, oW.jsx)(qR.g, {
            id: WW,
            isSelected: WW === yR,
            setSelected: PW,
            disabled: !YW
          }, WW)))]
        }), yR === HW.n.CUSTOM && (0, oW.jsx)(ZW.d, {
          folderName: eW,
          onTexturePackUpdated: PW,
          disabled: !YW,
          maxFileSizeMb: 25,
          packOwner: "customGame"
        })]
      })
    }
    var WR = MW(4004);

    function RR(WW) {
      var RW;
      let {
        gameCategory: MW,
        setGameCategory: wW,
        disabled: CW
      } = WW;
      const AW = null !== (RW = (0, gR.gb)(MW)) && void 0 !== RW ? RW : "other";
      return (0, oW.jsxs)("div", {
        className: "GameCategoryPicker",
        children: [(0, oW.jsx)(JW.e, {
          label: "worldBuilder:gameCategoryGroup",
          className: "GameCategoryGroup",
          disabled: CW,
          children: (0, oW.jsx)(PW.b, {
            options: gR.Y.map((WW => ({
              value: WW,
              label: gR.V[WW]
            }))),
            value: AW,
            onChange: WW => {
              WW.value !== AW && wW(gR.R[WW.value][0])
            }
          })
        }), (0, oW.jsx)(JW.e, {
          label: "worldBuilder:gameCategory",
          className: "GameCategory",
          disabled: CW,
          children: (0, oW.jsx)("div", {
            className: "GameCategoryOptions",
            children: gR.R[AW].map((WW => (0, oW.jsx)(zR.O, {
              active: WW === MW,
              onClick: () => {
                wW(WW)
              },
              children: (0, gR.fb)(WW)
            }, WW)))
          })
        })]
      })
    }

    function MR(WW) {
      let {
        editor: RW,
        onClose: MW
      } = WW;
      const {
        t: wW
      } = (0, bR.C)(), {
        schematicData: CW,
        updateSchematicData: zR,
        publishFormEnabled: yR,
        formEnabled: NW
      } = RW;
      return (0, oW.jsxs)(oW.Fragment, {
        children: [(0, oW.jsxs)(lW, {
          icon: "pen-to-square",
          title: wW("worldBuilder:basicsSection"),
          disabled: !NW,
          children: [(0, oW.jsx)(FW, {
            label: wW("general:name"),
            caption: wW("worldBuilder:schematicNameTagsHint"),
            children: (0, oW.jsx)(AW.e, {
              className: "SchematicPageName",
              defaultValue: CW.name,
              onValueChange: WW => zR("name", WW),
              placeholderText: wW("worldBuilder:schematicNamePlaceholder"),
              maxLength: BW.ib
            })
          }), (0, oW.jsx)(FW, {
            label: wW("general:description"),
            children: (0, oW.jsx)(AW.e, {
              className: "SchematicPageDescription",
              useTextarea: !0,
              defaultValue: CW.description,
              onValueChange: WW => zR("description", WW),
              placeholderText: wW("worldBuilder:schematicDescriptionPlaceholder"),
              maxLength: BW.gb
            })
          }), (0, oW.jsx)(RR, {
            gameCategory: CW.gameCategory,
            setGameCategory: WW => zR("gameCategory", WW),
            disabled: !yR
          }), !0 === CW.gamePublished && (0, oW.jsx)(nW, {
            schematicData: CW,
            updateSchematicData: zR,
            publishFormEnabled: yR,
            onClose: function() {
              null === MW || void 0 === MW || MW()
            }
          })]
        }), (0, oW.jsx)(QW, {
          schematicData: CW,
          updateSchematicData: zR,
          publishFormEnabled: yR,
          formEnabled: NW
        }), !0 === CW.gamePublished && (0, oW.jsx)(lW, {
          icon: "palette",
          title: wW("worldBuilder:texturePackSection"),
          disabled: !NW,
          children: (0, oW.jsx)(SW, {
            schematicData: CW,
            setTexturePack: RW.setTexturePack,
            initializeTexturePack: RW.initializeTexturePack,
            publishFormEnabled: yR
          })
        })]
      })
    }

    function wR(WW) {
      let {
        editor: RW
      } = WW;
      const {
        t: MW
      } = (0, bR.C)(), {
        schematicData: wW,
        formEnabled: CW,
        hasUnsavedChanges: AW
      } = RW, BW = CW && AW;
      return (0, oW.jsxs)("footer", {
        className: "SchematicPageFooter",
        children: [CW && AW && (0, oW.jsxs)("div", {
          className: "SchematicPageFooterStatus",
          children: [(0, oW.jsx)("span", {
            className: "SchematicPageFooterStatusDot"
          }), MW("worldBuilder:unsavedChanges")]
        }), (0, oW.jsx)(NW.e, {
          tooltipInner: (0, oW.jsx)("div", {
            className: "SaveButtonTooltip",
            children: MW(CW && !AW ? "worldBuilder:saveChangesNoneDescription" : "worldBuilder:saveChangesDescription")
          }),
          children: (0, oW.jsxs)(zR.h, {
            className: "SaveChangesButton",
            onClick: () => RW.saveSchematic(wW.gamePublished),
            disabled: !BW,
            children: [(0, oW.jsxs)("span", {
              className: CW ? "" : "SaveChangesButtonBodyHidden",
              children: [(0, oW.jsx)(eW.e, {
                name: "wrench"
              }), " ", MW("worldBuilder:saveChanges")]
            }), !CW && (0, oW.jsx)(yR.d, {})]
          })
        })]
      })
    }

    function CR(WW) {
      let {
        schematic: RW,
        onSchematicUpdate: MW,
        onClose: CW,
        inSourceWorld: AW
      } = WW;
      const {
        t: yR
      } = (0, bR.C)();

      function NW() {
        null === CW || void 0 === CW || CW()
      }
      const eW = (0, WR.b)(RW, {
        onNavigateAway: NW,
        inSourceWorld: AW
      });
      return (0, wW.useEffect)((() => {
        null === MW || void 0 === MW || MW(eW.schematicData)
      }), [eW.schematicData, MW]), (0, oW.jsxs)("div", {
        className: "SchematicPage SchematicPagePopupVariant",
        children: [(0, oW.jsxs)("div", {
          className: "SchematicPageBody",
          children: [(0, oW.jsx)(zR.d, {
            onClick: NW,
            children: yR("worldBuilder:back")
          }), (0, oW.jsx)(lW, {
            icon: "rocket-launch",
            title: yR("worldBuilder:actionsSection"),
            disabled: !eW.formEnabled,
            children: (0, oW.jsx)(rR.c, {
              editor: eW
            })
          }), (0, oW.jsx)(MR, {
            editor: eW,
            onClose: NW
          })]
        }), (0, oW.jsx)(wR, {
          editor: eW
        })]
      })
    }

    function zM(WW) {
      let {
        schematic: RW,
        onSchematicUpdate: MW,
        onClose: wW,
        inSourceWorld: zR
      } = WW;
      CW.NotificationProvider.showCustomPopup({
        body: WW => (0, oW.jsx)(CR, {
          schematic: RW,
          onSchematicUpdate: MW,
          onClose: WW,
          inSourceWorld: zR
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: wW,
        unlockPointerKey: "schematicPagePopup"
      })
    }
  },
  3928: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => BW
    });
    var wW = MW(897),
      CW = MW.n(wW),
      zR = MW(1027),
      AW = MW(904),
      bR = MW(1255),
      yR = MW(1180),
      NW = MW(1157),
      eW = MW(940);

    function BW(WW) {
      let {
        editor: RW,
        className: MW
      } = WW;
      const {
        t: wW
      } = (0, zR.C)(), {
        schematicData: BW,
        formEnabled: tR,
        publishFormEnabled: TW
      } = RW, gR = !tR || !TW;
      return (0, eW.jsxs)("div", {
        className: CW()("PublishButtonContainer", MW),
        children: [RW.canEditSourceWorld && (0, eW.jsxs)(bR.h, {
          onClick: RW.editSourceWorld,
          disabled: gR,
          children: [(0, eW.jsx)(AW.e, {
            name: "edit"
          }), " ", wW("worldBuilder:editSourceWorld")]
        }), !BW.gamePublished && (0, eW.jsx)(yR.e, {
          tooltipInner: (0, eW.jsx)("div", {
            className: "PublishButtonTooltip",
            children: wW("worldBuilder:publishAsGameDescription")
          }),
          children: (0, eW.jsxs)(bR.m, {
            onClick: () => RW.saveSchematic(!0),
            disabled: gR,
            children: [(0, eW.jsx)(AW.e, {
              name: "rocket-launch"
            }), " ", wW("worldBuilder:publishAsGame"), " ", (0, eW.jsx)(AW.e, {
              name: "info-circle"
            })]
          })
        }), !0 === BW.gamePublished && (0, eW.jsxs)(eW.Fragment, {
          children: [(0, eW.jsx)(yR.e, {
            tooltipInner: (0, eW.jsx)("div", {
              className: "PublishButtonTooltip",
              children: wW("worldBuilder:unpublishAsGameDescription")
            }),
            children: (0, eW.jsxs)(bR.E, {
              onClick: RW.unpublishSchematic,
              disabled: gR,
              children: [(0, eW.jsx)(AW.e, {
                name: "rocket-launch"
              }), " ", wW("worldBuilder:unpublishAsGame"), " ", (0, eW.jsx)(AW.e, {
                name: "info-circle"
              })]
            })
          }), (0, eW.jsxs)(bR.h, {
            onClick: RW.playGame,
            disabled: gR,
            children: [(0, eW.jsx)(AW.e, {
              name: "joystick"
            }), " ", wW("general:playGame")]
          })]
        }), !tR && (0, eW.jsx)(NW.d, {
          loaderType: "Secondary"
        })]
      })
    }
  },
  3893: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => tR
    });
    var wW = MW(897),
      CW = MW.n(wW),
      zR = MW(904),
      AW = MW(1157),
      bR = MW(2601),
      yR = MW(151),
      NW = MW(2640),
      eW = MW(2628),
      BW = MW(940);

    function tR(WW) {
      let {
        game: RW
      } = WW;
      const MW = (0, yR.n)() ? "large" : "small",
        wW = (0, NW.f)(RW, MW),
        tR = (0, bR.c)(wW),
        TW = void 0 !== tR.blurhash;
      return (0, BW.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [tR.isLoading && !TW && (0, BW.jsx)(AW.d, {
          loaderType: "Secondary"
        }), !tR.failed && (null !== tR.src || TW) && (0, BW.jsx)("div", {
          className: CW()("SchematicImage", eW.g, {
            SchematicImageFadeIn: tR.fadeIn && !TW
          }),
          style: (0, eW.c)(tR),
          children: (0, BW.jsx)(eW.b, {
            image: tR
          })
        }), tR.failed && (0, BW.jsx)("div", {
          className: "SchematicImageError",
          children: (0, BW.jsx)(zR.e, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  3955: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => CW
    });
    var wW = MW(1033);
    async function CW(WW) {
      const RW = await fetch(`${wW.clientSideServerUrls.s3Url}/${WW}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === RW.status || 403 === RW.status) return null;
      if (!RW.ok) throw new Error(`Failed to download the texture pack (${RW.status})`);
      return await RW.json()
    }
  },
  4004: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => YW
    });
    var wW = MW(75),
      CW = MW(1379),
      zR = MW(860),
      AW = MW(156),
      bR = MW(1371),
      yR = MW(27),
      NW = MW(1544),
      eW = MW(1314),
      BW = MW(3618),
      tR = MW(1166),
      TW = MW(969),
      gR = MW(1330);

    function iR(WW, RW) {
      return {
        schematicId: WW.schematicId,
        name: WW.name,
        description: WW.description,
        gamePublished: RW,
        gameCategory: WW.gameCategory,
        defaultGamemode: WW.defaultGamemode,
        voidDeathHeight: WW.voidDeathHeight,
        disableKeepInventory: WW.disableKeepInventory,
        disableTpRequests: WW.disableTpRequests,
        disableLobbySpawn: WW.disableLobbySpawn,
        disableMobs: WW.disableMobs,
        disableSpawnProtection: WW.disableSpawnProtection,
        disableFallDamage: WW.disableFallDamage,
        worldBorder: WW.worldBorder,
        hideLobbyCode: WW.hideLobbyCode,
        enableSmpMarketplace: WW.enableSmpMarketplace,
        enableSurvivalGuns: WW.enableSurvivalGuns,
        enableSpawnReset: WW.enableSpawnReset,
        enableDayNight: WW.enableDayNight,
        persistWorld: WW.persistWorld,
        persistInventory: WW.persistInventory
      }
    }

    function YW(WW) {
      let {
        onNavigateAway: RW,
        inSourceWorld: MW = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const {
        userContext: YW
      } = (0, TW.c)(), JW = (0, gR.useNavigatePreserveSearch)(), [PW, IW] = (0, wW.useState)({
        ...WW
      }), [oW, lW] = (0, wW.useState)("Enter"), [FW, fW] = (0, wW.useState)(void 0), QW = (0, wW.useRef)(iR(WW, WW.gamePublished)), rR = (0, wW.useRef)(void 0), cR = "Enter" === oW, XW = YW.playerHasRank("developer") || YW.playerHasRank("admin") || "Enter" === oW && !1 !== PW.schematicContainsSpawnBlock, jR = void 0 !== FW && FW !== rR.current || JSON.stringify(iR(PW, PW.gamePublished)) !== JSON.stringify(QW.current);

      function kR(WW, RW) {
        IW((MW => ({
          ...MW,
          [WW]: RW
        })))
      }
      const aR = (0, wW.useCallback)((WW => {
        rR.current = WW, fW(WW)
      }), []);

      function sW(WW) {
        lW("Loading");
        const RW = iR(PW, WW),
          MW = FW !== rR.current ? FW : void 0;
        eW.c.updateSchematic(YW, RW, MW).then((MW => {
          let {
            customTexturePackKey: wW
          } = MW;
          lW("Success"), kR("customTexturePackKey", wW), QW.current = RW, rR.current = void 0, fW(void 0), setTimeout((() => {
            kR("gamePublished", WW), lW("Enter")
          }), 1e3)
        })).catch((WW => {
          var RW;
          (console.error("Failed to save schematic:", WW), lW("Error"), WW instanceof AW.d && WW.errorMessageForUser) && tR.NotificationProvider.showAlertPopup({
            title: "worldBuilder:changesNotSaved",
            subtitle: WW.errorMessageForUser,
            textOpts: {
              subtitle: null !== (RW = WW.errorMessageTranslationParams) && void 0 !== RW ? RW : void 0
            },
            confirmText: "general:ok"
          });
          setTimeout((() => {
            lW("Enter")
          }), 1e3)
        }))
      }
      return {
        schematicData: PW,
        updateSchematicData: kR,
        setTexturePack: fW,
        initializeTexturePack: aR,
        updateState: oW,
        formEnabled: cR,
        publishFormEnabled: XW,
        hasUnsavedChanges: jR,
        canEditSourceWorld: !MW,
        saveSchematic: sW,
        unpublishSchematic: function() {
          tR.NotificationProvider.showPromptPopup({
            icon: "rocket-launch",
            title: "worldBuilder:unpublishAsGameConfirmTitle",
            subtitle: "worldBuilder:unpublishAsGameConfirmSubtitle",
            confirmText: "worldBuilder:unpublishAsGame",
            cancelText: "general:cancel",
            unlockPointerKey: "unpublishGamePrompt"
          }).getResult().then((WW => {
            !0 === WW && sW(!1)
          }))
        },
        editSourceWorld: function() {
          lW("Loading"), BW.d.getSourceWorld(PW.schematicId).then((WW => {
            NW.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, yR.f)("other"), JW((0, CW.d)("classic", WW)), null === RW || void 0 === RW || RW()
          })).catch((WW => {
            console.error("Failed to get source world:", WW), lW("Error"), setTimeout((() => {
              lW("Enter")
            }), 1e3)
          }))
        },
        playGame: function() {
          NW.gameBridge.send("leaveGame", {
            reloadPath: "/"
          }), JW((0, bR.z)((0, zR.q)(PW.schematicId), PW)), null === RW || void 0 === RW || RW()
        }
      }
    }
  },
  4e3: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => TW
    });
    var wW = MW(75),
      CW = MW(897),
      zR = MW.n(CW),
      AW = MW(3933),
      bR = MW(1157),
      yR = MW(1027),
      NW = MW(2295),
      eW = MW(2420),
      BW = MW(904),
      tR = MW(940);

    function TW(WW) {
      let {
        folderName: RW,
        onTexturePackUpdated: CW,
        disabled: TW = !1,
        maxFileSizeMb: gR,
        packOwner: iR
      } = WW;
      const {
        t: YW
      } = (0, yR.C)(), [JW, PW] = (0, wW.useState)(!1), [IW, oW] = (0, wW.useState)(null), [lW, FW] = (0, wW.useState)(null), fW = (0, wW.useRef)(null);
      const {
        getRootProps: QW,
        getInputProps: rR,
        isDragActive: cR
      } = (0, AW.d)({
        onDrop: async function(WW) {
          PW(!0);
          try {
            const RW = await (0, NW.n)(WW);
            if ("customGame" === iR && (0, eW.h)(RW)) return void oW(YW(eW.c));
            if (void 0 !== gR) {
              const WW = JSON.stringify(RW).length / 1048576;
              if (WW > gR) return void oW(`File size is too large. Max size is ${gR}MB. Current size is ${WW}MB.`)
            }
            oW(null), FW(null), CW(RW), fW.current = RW,
              function(WW, RW) {
                const wW = WW.modelOverrides;
                wW && Promise.all([MW.e(181), MW.e(180)]).then((() => MW(32642))).then((MW => {
                  let {
                    packDisplayName: CW,
                    refusedPackModels: zR,
                    packModelSummary: AW
                  } = MW;
                  const bR = CW(WW.metaData);
                  RW(AW(bR, zR(bR, wW, !1)))
                })).catch((WW => {
                  console.error("Checking the texture pack's models failed:", WW)
                }))
              }(RW, (WW => {
                fW.current === RW && FW(WW)
              }))
          } catch {
            oW("Invalid Texture Pack Folder")
          } finally {
            PW(!1)
          }
        },
        useFsAccessApi: !1,
        disabled: TW
      });
      return (0, tR.jsxs)("div", {
        className: "CustomTexturePackContainer",
        children: [(0, tR.jsxs)("div", {
          className: "CustomTextureWarning",
          children: [YW("settingsMenu:customTextureWarning"), ".", (0, tR.jsx)("br", {}), YW("settingsMenu:viewDocumentation"), ":", " ", (0, tR.jsx)("a", {
            href: "https://github.com/Bloxdy/texturePacks",
            target: "_blank",
            rel: "noreferrer",
            children: "github.com/Bloxdy/texturePacks"
          })]
        }), IW && (0, tR.jsxs)("div", {
          className: "CustomTextureError",
          children: [YW("general:error"), ": ", IW]
        }), lW && (0, tR.jsx)("div", {
          className: "CustomTextureError",
          children: lW
        }), (0, tR.jsxs)("div", {
          ...QW({
            className: zR()("CustomTextureFolderUpload", {
              ActiveDrag: cR,
              Disabled: TW
            })
          }),
          children: [(0, tR.jsx)("input", {
            ...rR({
              webkitdirectory: "true"
            })
          }), JW && (0, tR.jsx)("div", {
            className: "CustomTextureFolderUploadLoading",
            children: (0, tR.jsx)(bR.d, {})
          }), !JW && !cR && RW && (0, tR.jsxs)(tR.Fragment, {
            children: [(0, tR.jsx)("div", {
              className: "CustomTextureFolderUploadIcon Active",
              children: (0, tR.jsx)(BW.e, {
                name: "folder-image"
              })
            }), (0, tR.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions Active",
              children: RW
            })]
          }), !JW && (cR || !RW) && (0, tR.jsxs)(tR.Fragment, {
            children: [(0, tR.jsx)("div", {
              className: "CustomTextureFolderUploadIcon",
              children: (0, tR.jsx)(BW.e, {
                name: "up-from-bracket"
              })
            }), (0, tR.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions",
              children: "Drag and drop a Texture Pack folder here"
            })]
          })]
        })]
      })
    }
  },
  3965: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => gR,
      f: () => PW,
      g: () => iR,
      i: () => JW
    });
    var wW = MW(75),
      CW = MW(3974),
      zR = MW(3458),
      AW = MW(1180),
      bR = MW(3991),
      yR = MW(897),
      NW = MW.n(yR),
      eW = MW(1166),
      BW = MW(1495),
      tR = MW(3994),
      TW = MW(940);

    function gR(WW) {
      let {
        label: RW,
        onClick: MW,
        checked: wW,
        circleInfoText: CW,
        className: bR,
        disabled: yR
      } = WW;
      return (0, TW.jsx)("div", {
        "aria-disabled": yR || void 0,
        "data-pad-focusable": !0,
        className: NW()("SettingBox CheckboxContainer", {
          [bR]: bR,
          SettingBoxDisabled: yR
        }),
        onClick: () => {
          yR || MW(!wW)
        },
        children: (0, TW.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, TW.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, TW.jsx)(zR.e, {
              className: "SettingsCheckbox",
              checked: wW,
              disabled: yR,
              onChange: () => {}
            })
          }), (0, TW.jsxs)("div", {
            className: "CheckboxText",
            children: [RW, CW && (0, TW.jsx)("span", {
              onClick: WW => WW.stopPropagation(),
              children: (0, TW.jsx)(AW.b, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: CW
              })
            })]
          })]
        })
      })
    }

    function iR(WW) {
      let {
        name: RW,
        onChange: MW,
        min: CW,
        max: zR,
        step: bR,
        initValue: yR,
        circleInfoText: eW,
        format: BW,
        className: tR,
        padStep: gR,
        disabled: iR = !1,
        selectableMax: JW,
        cappedNote: PW
      } = WW;
      const [IW, oW] = (0, wW.useState)(yR);
      (0, wW.useEffect)((() => {
        oW(yR)
      }), [yR]);
      const lW = void 0 !== JW && JW < zR,
        FW = lW ? {
          "--slider-selectable": (JW - CW) / (zR - CW)
        } : void 0;
      return (0, TW.jsxs)("div", {
        className: NW()("SettingBox SettingsSliderDiv", {
          [tR]: tR,
          SettingBoxDisabled: iR,
          SliderCapped: lW
        }),
        style: FW,
        children: [(0, TW.jsxs)("div", {
          className: "SliderText",
          children: [`${RW}: ${BW?BW(IW):IW}`, eW && (0, TW.jsx)(AW.b, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: eW
          })]
        }), (0, TW.jsx)("div", {
          className: "SliderDiv",
          children: (0, TW.jsx)(YW, {
            value: IW,
            min: CW,
            max: zR,
            step: bR,
            onChange: WW => {
              if (lW && WW >= JW && IW === JW) return;
              const RW = lW ? Math.min(WW, JW) : WW;
              oW(RW), MW(RW)
            },
            format: BW,
            padStep: gR,
            disabled: iR
          })
        }), lW && PW && (0, TW.jsx)("div", {
          className: "SliderNote",
          children: PW
        })]
      })
    }

    function YW(WW) {
      var RW;
      let {
        value: MW,
        min: zR,
        max: AW,
        step: bR,
        onChange: yR,
        orientation: NW,
        reverse: eW,
        setIsChanging: BW,
        tooltip: gR,
        labels: iR,
        handleLabel: YW,
        format: JW,
        onChangeStart: PW,
        onChangeComplete: IW,
        padStep: oW,
        disabled: lW = !1
      } = WW;
      const FW = (0, wW.useRef)(null),
        fW = (0, wW.useRef)(null);
      (0, wW.useLayoutEffect)((() => {
        var WW, RW, MW;
        const wW = null !== (WW = null === (RW = FW.current) || void 0 === RW ? void 0 : RW.querySelector(".rangeslider")) && void 0 !== WW ? WW : null;
        null === wW || void 0 === wW || wW.setAttribute("data-pad-slider", ""), null === wW || void 0 === wW || wW.setAttribute("data-pad-focusable", ""), null === wW || void 0 === wW || null === (MW = wW.querySelector(".rangeslider__handle")) || void 0 === MW || MW.setAttribute("data-pad-slider-handle", ""), fW.current = wW
      }), []), (0, wW.useLayoutEffect)((() => {
        var WW, RW;
        lW ? null === (WW = fW.current) || void 0 === WW || WW.setAttribute("aria-disabled", "true") : null === (RW = fW.current) || void 0 === RW || RW.removeAttribute("aria-disabled")
      }), [lW]);
      const QW = (null !== (RW = String(bR).split(".")[1]) && void 0 !== RW ? RW : "").length,
        rR = WW => {
          const RW = Number((Math.round((WW - zR) / bR) * bR + zR).toFixed(QW));
          return Math.min(AW, Math.max(zR, RW))
        },
        cR = (0, wW.useRef)(!1);
      return (0, tR.i)(fW, {
        adjust: WW => {
          if (lW) return;
          const RW = null !== oW && void 0 !== oW ? oW : Math.max(bR, Math.round((AW - zR) / 20 / bR) * bR),
            wW = rR(MW + WW * RW * (eW ? -1 : 1));
          wW !== MW && (null === PW || void 0 === PW || PW(), yR(wW), null === IW || void 0 === IW || IW())
        },
        setFraction: WW => {
          if (lW) return;
          const RW = rR(zR + (eW ? 1 - WW : WW) * (AW - zR));
          RW !== MW && (cR.current || (cR.current = !0, null === PW || void 0 === PW || PW()), yR(RW))
        },
        endDrag: () => {
          cR.current && (cR.current = !1, null === IW || void 0 === IW || IW())
        }
      }), (0, TW.jsx)("div", {
        ref: FW,
        style: {
          display: "contents"
        },
        children: (0, TW.jsx)(CW.e, {
          value: MW,
          min: zR,
          max: AW,
          step: bR,
          onChange: yR,
          orientation: NW,
          reverse: eW,
          tooltip: gR,
          labels: iR,
          handleLabel: YW,
          format: JW,
          onChangeStart: () => {
            null === PW || void 0 === PW || PW(), null === BW || void 0 === BW || BW(!0)
          },
          onChangeComplete: () => {
            null === BW || void 0 === BW || BW(!1), null === IW || void 0 === IW || IW()
          }
        })
      })
    }
    async function JW() {
      const WW = eW.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await WW.getResult() && (0, BW.reloadBloxd)()
    }

    function PW(WW) {
      let {
        label: RW,
        options: MW,
        value: wW,
        onChange: CW,
        circleInfoText: zR
      } = WW;
      return (0, TW.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, TW.jsxs)("div", {
          className: "SliderText",
          children: [RW, zR && (0, TW.jsx)(AW.b, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: zR
          })]
        }), (0, TW.jsx)(bR.c, {
          ariaLabel: RW,
          options: MW,
          value: wW,
          onChange: CW
        })]
      })
    }
  },
  3959: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => gR,
      g: () => iR
    });
    var wW = MW(2295),
      CW = MW(2301),
      zR = MW(75),
      AW = MW(897),
      bR = MW.n(AW),
      yR = MW(1157),
      NW = MW(2289),
      eW = MW(1166),
      BW = MW(3965),
      tR = MW(4e3),
      TW = MW(940);

    function gR(WW) {
      var RW;
      let {
        setApplySettingsCallback: MW
      } = WW;
      const [, AW] = (0, zR.useReducer)((WW => WW + 1), 0), bR = (0, zR.useRef)(!1), yR = (0, zR.useRef)(null);

      function gR() {
        yR.current !== NW.d.getId() || NW.d.getId() === CW.n.CUSTOM && bR.current ? MW((() => BW.i)) : MW(null)
      }
      async function YW(WW) {
        if (NW.d.getId() !== WW.metaData.id) {
          if (NW.d.getId() === CW.n.CUSTOM && NW.d.getFromFolderName()) {
            const WW = eW.NotificationProvider.showPromptPopup({
              title: "settingsMenu:loseChangesTitle",
              subtitle: "settingsMenu:loseChangesSubtitle",
              confirmText: "general:continue",
              destructive: !0,
              confirmTooltip: "",
              cancelText: "general:cancel",
              cancelTooltip: ""
            });
            if (!0 !== await WW.getResult()) return
          }
          NW.d.setFromJson(WW, "player"), NW.d.saveTexturePack(), gR(), AW()
        }
      }(0, zR.useEffect)((() => {
        yR.current = NW.d.getId()
      }), []);
      const JW = wW.d,
        PW = [JW, ...Object.values(CW.n).filter((WW => WW !== JW))];
      return (0, TW.jsx)(TW.Fragment, {
        children: (0, TW.jsxs)("div", {
          className: "TexturePackCategory SettingsMenuRightInner",
          children: [(0, TW.jsx)("div", {
            className: "TexturePackList",
            children: PW.map((WW => (0, TW.jsx)(iR, {
              id: WW,
              isSelected: WW === NW.d.getId(),
              setSelected: YW
            }, WW)))
          }), NW.d.getId() === CW.n.CUSTOM && (0, TW.jsx)(tR.d, {
            folderName: null !== (RW = NW.d.getFromFolderName()) && void 0 !== RW ? RW : null,
            onTexturePackUpdated: function(WW) {
              NW.d.setFromJson(WW, "player"), NW.d.saveTexturePack(), bR.current = !0, gR(), AW()
            },
            packOwner: "player"
          })]
        })
      })
    }

    function iR(WW) {
      let {
        id: RW,
        isSelected: MW,
        setSelected: AW,
        disabled: NW = !1
      } = WW;
      const [eW, BW] = (0, zR.useState)(!0), [tR, gR] = (0, zR.useState)(""), [iR, YW] = (0, zR.useState)(""), [JW, PW] = (0, zR.useState)(""), IW = (0, zR.useRef)({});
      return (0, zR.useEffect)((() => {
        (0, wW.m)(RW).then((WW => {
          var RW;
          WW && (IW.current = WW, BW(!1), gR(IW.current.metaData.name), YW(IW.current.metaData.author), PW(null !== (RW = IW.current.metaData.previewImage) && void 0 !== RW ? RW : ""))
        })).catch((WW => {
          console.warn(`Failed to fetch texture pack ${RW}`, WW)
        }))
      }), [RW]), (0, TW.jsxs)("div", {
        "data-pad-focusable": !0,
        "aria-disabled": NW || void 0,
        className: bR()("TexturePack", {
          Selected: MW,
          Custom: RW === CW.n.CUSTOM,
          Disabled: NW
        }),
        onClick: () => {
          eW || NW || AW(IW.current)
        },
        children: [(0, TW.jsx)("div", {
          className: "TexturePackBg",
          style: {
            backgroundImage: JW ? `url(${JW})` : void 0
          }
        }), eW && (0, TW.jsx)("div", {
          className: "TexturePackName",
          children: (0, TW.jsx)(yR.d, {})
        }), !eW && tR && (0, TW.jsx)("div", {
          className: "TexturePackName",
          children: tR
        }), !eW && iR && (0, TW.jsx)("div", {
          className: "TexturePackAuthor",
          children: iR
        })]
      })
    }
  },
  3991: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => AW
    });
    var wW = MW(897),
      CW = MW.n(wW),
      zR = MW(940);

    function AW(WW) {
      let {
        options: RW,
        value: MW,
        onChange: wW,
        ariaLabel: AW
      } = WW;
      return (0, zR.jsx)("div", {
        className: "SegmentedToggle",
        role: "group",
        "aria-label": AW,
        children: RW.map((WW => {
          const RW = WW.value === MW;
          return (0, zR.jsx)("button", {
            type: "button",
            "aria-pressed": RW,
            className: CW()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: RW
            }),
            onClick: () => {
              RW || wW(WW.value)
            },
            children: WW.label
          }, WW.value)
        }))
      })
    }
  },
  3994: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => zR,
      i: () => AW
    });
    var wW = MW(75);
    const CW = new WeakMap,
      zR = WW => {
        var RW;
        const MW = WW.closest("[data-pad-slider]");
        return MW && null !== (RW = CW.get(MW)) && void 0 !== RW ? RW : null
      },
      AW = (WW, RW) => {
        const MW = (0, wW.useRef)(RW);
        MW.current = RW, (0, wW.useEffect)((() => {
          if (WW.current) return ((WW, RW) => (CW.set(WW, RW), () => {
            CW.get(WW) === RW && CW.delete(WW)
          }))(WW.current, {
            adjust: WW => {
              MW.current.adjust(WW)
            },
            setFraction: WW => {
              MW.current.setFraction(WW)
            },
            endDrag: () => {
              MW.current.endDrag()
            }
          })
        }), [WW])
      }
  },
  3926: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => CW,
      g: () => yR,
      j: () => AW,
      m: () => wW,
      o: () => zR,
      p: () => bR
    });
    const wW = ["public", "unlisted", "private"],
      CW = {
        public: "Public",
        unlisted: "Unlisted",
        private: "Private"
      },
      zR = ["survival", "peaceful", "creative", "survivaladventure", "peacefuladventure", "spectator"],
      AW = ["default", "customSchematic"],
      bR = ["default", "flat", "twoDimensions", "skyGrid", "customSchematic"],
      yR = ["global", "perLobby", "none"]
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);