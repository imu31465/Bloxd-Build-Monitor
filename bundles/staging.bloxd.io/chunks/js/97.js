export const id = 97;
export const ids = [97];
export const modules = {
  4345: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => hJ,
      g: () => YJ,
      k: () => DJ
    });
    ZJ(4351);
    var FJ = ZJ(1086),
      UJ = ZJ(926),
      eJ = ZJ.n(UJ),
      XJ = ZJ(1259),
      AJ = (ZJ(47), ZJ(3826)),
      qJ = ZJ(942),
      jJ = ZJ(990);

    function YJ(JJ) {
      let {
        children: cJ,
        label: ZJ,
        className: UJ,
        circleInfoText: AJ,
        disabled: YJ,
        onLabelClick: hJ
      } = JJ;
      const {
        t: DJ
      } = (0, FJ.F)(), sJ = (0, jJ.jsxs)("div", {
        className: eJ()("Label", {
          ClickableLabel: void 0 !== hJ
        }),
        onClick: hJ,
        children: [DJ(ZJ), AJ && (0, jJ.jsx)(qJ.c, {
          name: "circle-info"
        })]
      });
      return (0, jJ.jsxs)("div", {
        className: eJ()("LabeledInput", {
          [UJ]: UJ,
          DisabledLabelInput: YJ
        }),
        children: [AJ && (0, jJ.jsx)(XJ.g, {
          tooltipInner: (0, jJ.jsx)("div", {
            className: "LabeledInputTooltip",
            children: DJ(AJ)
          }),
          children: sJ
        }), !AJ && sJ, cJ]
      })
    }

    function hJ(JJ) {
      let {
        checked: cJ,
        setChecked: ZJ
      } = JJ;
      return (0, jJ.jsx)("div", {
        className: "OtherInput ClickableOtherInput",
        "data-pad-focusable": !0,
        onClick: JJ => {
          ZJ(!cJ)
        },
        children: (0, jJ.jsx)(AJ.e, {
          checked: cJ,
          onChange: JJ => {
            ZJ(JJ.target.checked)
          },
          disabled: !1
        })
      })
    }

    function DJ(JJ) {
      let {
        checked: cJ,
        setChecked: ZJ,
        disabled: FJ
      } = JJ;
      return (0, jJ.jsx)("div", {
        className: eJ()("SwitchContainer", {
          SwitchContainerDisabled: FJ
        }),
        onClick: () => {
          FJ || ZJ(!cJ)
        },
        children: (0, jJ.jsx)(AJ.e, {
          className: "SwitchCheckbox",
          checked: cJ,
          onChange: JJ => {
            ZJ(JJ.target.checked)
          },
          disabled: !!FJ
        })
      })
    }
  },
  4359: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => jJ
    });
    var FJ = ZJ(926),
      UJ = ZJ.n(FJ),
      eJ = ZJ(4049),
      XJ = ZJ(1086),
      AJ = ZJ(990);
    const qJ = [...eJ.m, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function jJ(JJ) {
      const {
        disabled: cJ,
        hideWrapper: ZJ
      } = JJ, {
        t: FJ
      } = (0, XJ.F)(), jJ = JJ.advancedMode ? qJ.map((cJ => [cJ, JJ.callbacks[cJ]])) : eJ.m.map((cJ => [cJ, JJ.callbacks[cJ]])), hJ = (0, AJ.jsx)("div", {
        className: UJ()("PluginsGrid", {
          SectionBody: !ZJ
        }),
        children: jJ.map((JJ => {
          let [ZJ, FJ] = JJ;
          return (0, AJ.jsx)(YJ, {
            plugin: ZJ,
            callbacks: FJ,
            disabled: cJ
          }, ZJ)
        }))
      });
      return ZJ ? hJ : (0, AJ.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, AJ.jsx)("div", {
          className: "SectionTitle",
          children: FJ("worldBuilder:pluginsSection")
        }), hJ]
      })
    }

    function YJ(JJ) {
      let {
        plugin: cJ,
        callbacks: {
          isEnabled: ZJ,
          GV: FJ
        },
        disabled: eJ
      } = JJ;
      const {
        t: qJ
      } = (0, XJ.F)(), jJ = ZJ();
      return (0, AJ.jsxs)("div", {
        className: UJ()("PluginCard", {
          PluginCardEnabled: jJ,
          PluginCardDisabledForm: eJ
        }),
        "data-pad-focusable": !0,
        "aria-disabled": eJ || void 0,
        onClick: () => {
          eJ || FJ(!jJ)
        },
        children: [(0, AJ.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, AJ.jsx)("img", {
            src: `/textures/games/classic/customGames/${cJ}.png`,
            alt: cJ
          })
        }), (0, AJ.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, AJ.jsx)("div", {
            className: "PluginCardTitle",
            children: qJ(hJ[cJ])
          }), (0, AJ.jsx)("div", {
            className: "PluginCardDescription",
            children: qJ(DJ[cJ])
          })]
        }), (0, AJ.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: qJ(jJ ? "general:on" : "general:off")
        })]
      })
    }
    const hJ = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      DJ = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  4340: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      h: () => Uc,
      b: () => Fc,
      f: () => Zc,
      j: () => ec
    });
    var FJ = ZJ(47),
      UJ = ZJ(1247),
      eJ = ZJ(1329),
      XJ = ZJ(1566),
      AJ = ZJ(1086),
      qJ = ZJ(1232),
      jJ = ZJ(1259),
      YJ = ZJ(942),
      hJ = ZJ(1122),
      DJ = ZJ(926),
      sJ = ZJ.n(DJ),
      nJ = ZJ(227),
      GJ = ZJ(4049),
      fJ = ZJ(1137),
      xJ = ZJ(4345),
      rJ = ZJ(2623),
      vJ = ZJ(4359),
      mJ = ZJ(990);

    function QJ(JJ) {
      let {
        icon: cJ,
        title: ZJ,
        disabled: FJ,
        children: UJ
      } = JJ;
      return (0, mJ.jsxs)("div", {
        className: sJ()("ManageCard", {
          ManageCardDisabled: FJ
        }),
        children: [(0, mJ.jsxs)("div", {
          className: "ManageCardHead",
          children: [(0, mJ.jsx)("div", {
            className: "ManageCardIcon",
            children: (0, mJ.jsx)(YJ.c, {
              name: cJ
            })
          }), (0, mJ.jsx)("div", {
            children: (0, mJ.jsx)("h2", {
              className: "ManageCardTitle",
              children: ZJ
            })
          })]
        }), (0, mJ.jsxs)("div", {
          className: "ManageCardBody",
          children: [UJ, FJ && (0, mJ.jsx)("div", {
            className: "ManageCardDisabledOverlay"
          })]
        })]
      })
    }

    function EJ(JJ) {
      let {
        label: cJ,
        caption: ZJ,
        children: FJ
      } = JJ;
      return (0, mJ.jsxs)("div", {
        className: "ManageStackedField",
        children: [(0, mJ.jsx)("div", {
          className: "ManageStackedFieldLabel",
          children: cJ
        }), FJ, ZJ && (0, mJ.jsx)("div", {
          className: "ManageStackedFieldCaption",
          children: ZJ
        })]
      })
    }

    function VJ(JJ) {
      let {
        label: cJ,
        caption: ZJ,
        disabled: FJ,
        children: UJ
      } = JJ;
      return (0, mJ.jsxs)("div", {
        className: sJ()("ManageField", {
          ManageFieldDisabled: FJ
        }),
        children: [(0, mJ.jsxs)("div", {
          className: "ManageFieldText",
          children: [(0, mJ.jsx)("div", {
            className: "ManageFieldLabel",
            children: cJ
          }), (0, mJ.jsx)("div", {
            className: "ManageFieldCaption",
            children: ZJ
          })]
        }), (0, mJ.jsx)("div", {
          className: "ManageFieldControl",
          children: UJ
        })]
      })
    }

    function KJ(JJ) {
      var cJ, ZJ;
      let {
        schematicData: FJ,
        updateSchematicData: UJ,
        publishFormEnabled: eJ,
        formEnabled: XJ
      } = JJ;
      const {
        t: qJ
      } = (0, AJ.F)(), jJ = !eJ, YJ = {
        tpRequests: {
          isEnabled: () => !FJ.disableTpRequests,
          GV: JJ => UJ("disableTpRequests", !JJ)
        },
        spawnProtection: {
          isEnabled: () => !FJ.disableSpawnProtection,
          GV: JJ => UJ("disableSpawnProtection", !JJ)
        },
        spawnReset: {
          isEnabled: () => !!FJ.enableSpawnReset,
          GV: JJ => UJ("enableSpawnReset", JJ)
        },
        smpMarketplace: {
          isEnabled: () => !!FJ.enableSmpMarketplace,
          GV: JJ => UJ("enableSmpMarketplace", JJ)
        },
        survivalGuns: {
          isEnabled: () => !!FJ.enableSurvivalGuns,
          GV: JJ => UJ("enableSurvivalGuns", JJ)
        },
        fallDamage: {
          isEnabled: () => !FJ.disableFallDamage,
          GV: JJ => UJ("disableFallDamage", !JJ)
        },
        dayNight: {
          isEnabled: () => !!FJ.enableDayNight,
          GV: JJ => UJ("enableDayNight", JJ)
        }
      };
      return (0, mJ.jsxs)(mJ.Fragment, {
        children: [!1 === FJ.schematicContainsSpawnBlock && (0, mJ.jsx)("div", {
          className: "ManageWarningBanner",
          children: qJ("worldBuilder:mustContainSpawnBlock")
        }), (0, mJ.jsxs)("div", {
          className: "ManageSettingsGrid",
          children: [(0, mJ.jsxs)(QJ, {
            icon: "globe",
            title: qJ("worldBuilder:worldRulesSection"),
            disabled: !XJ,
            children: [(0, mJ.jsx)(VJ, {
              label: qJ("classic:defaultGamemode"),
              caption: qJ("classic:defaultGamemodeDescription"),
              disabled: jJ,
              children: (0, mJ.jsx)(rJ.d, {
                controlClassName: "ManageDropdown",
                options: GJ.B.map((JJ => ({
                  value: JJ,
                  label: nJ.p[JJ]
                }))),
                value: FJ.defaultGamemode,
                onChange: JJ => UJ("defaultGamemode", JJ.value)
              })
            }), (0, mJ.jsx)(VJ, {
              label: qJ("classic:voidDeathHeight"),
              caption: qJ("classic:voidDeathHeightDescription"),
              disabled: jJ,
              children: (0, mJ.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, mJ.jsx)("input", {
                  type: "number",
                  max: fJ.B,
                  value: null !== (cJ = FJ.voidDeathHeight) && void 0 !== cJ ? cJ : "",
                  onChange: JJ => {
                    const cJ = parseInt(JJ.target.value);
                    UJ("voidDeathHeight", cJ)
                  }
                }), (0, mJ.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: qJ("worldBuilder:blocksUnit")
                })]
              })
            }), (0, mJ.jsx)(VJ, {
              label: qJ("classic:worldBorder"),
              caption: qJ("classic:worldBorderDescription"),
              disabled: jJ,
              children: (0, mJ.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, mJ.jsx)("input", {
                  type: "number",
                  min: fJ.J,
                  max: fJ.C,
                  placeholder: qJ("worldBuilder:noWorldBorderLimit"),
                  value: null !== (ZJ = FJ.worldBorder) && void 0 !== ZJ ? ZJ : "",
                  onChange: JJ => {
                    const cJ = parseInt(JJ.target.value);
                    UJ("worldBorder", isNaN(cJ) ? null : cJ)
                  }
                }), (0, mJ.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: qJ("worldBuilder:blocksUnit")
                })]
              })
            }), (0, mJ.jsx)(VJ, {
              label: qJ("classic:disableMobs"),
              caption: qJ("classic:disableMobsDescription"),
              disabled: jJ,
              children: (0, mJ.jsx)(xJ.k, {
                checked: FJ.disableMobs,
                setChecked: JJ => UJ("disableMobs", JJ),
                disabled: jJ
              })
            })]
          }), (0, mJ.jsxs)(QJ, {
            icon: "user-group",
            title: qJ("worldBuilder:playerAndLobbySection"),
            disabled: !XJ,
            children: [(0, mJ.jsx)(VJ, {
              label: qJ("classic:disableKeepInventory"),
              caption: qJ("classic:disableKeepInventoryDescription"),
              disabled: jJ,
              children: (0, mJ.jsx)(xJ.k, {
                checked: FJ.disableKeepInventory,
                setChecked: JJ => UJ("disableKeepInventory", JJ),
                disabled: jJ
              })
            }), (0, mJ.jsx)(VJ, {
              label: qJ("classic:persistInventory"),
              caption: qJ("classic:persistInventoryDescription"),
              disabled: jJ,
              children: (0, mJ.jsx)(rJ.d, {
                controlClassName: "ManageDropdown",
                options: GJ.n.map((JJ => ({
                  value: JJ,
                  label: nJ.g[JJ]
                }))),
                value: FJ.persistInventory,
                onChange: JJ => UJ("persistInventory", JJ.value)
              })
            }), (0, mJ.jsx)(VJ, {
              label: qJ("classic:persistWorld"),
              caption: qJ("classic:persistWorldDescription"),
              disabled: jJ,
              children: (0, mJ.jsx)(xJ.k, {
                checked: FJ.persistWorld,
                setChecked: JJ => UJ("persistWorld", JJ),
                disabled: jJ
              })
            }), (0, mJ.jsx)(VJ, {
              label: qJ("classic:disableLobbySpawn"),
              caption: qJ("classic:disableLobbySpawnDescription"),
              disabled: jJ,
              children: (0, mJ.jsx)(xJ.k, {
                checked: FJ.disableLobbySpawn,
                setChecked: JJ => UJ("disableLobbySpawn", JJ),
                disabled: jJ
              })
            }), (0, mJ.jsx)(VJ, {
              label: qJ("classic:hideLobbyCode"),
              caption: qJ("classic:hideLobbyCodeDescription"),
              disabled: jJ,
              children: (0, mJ.jsx)(xJ.k, {
                checked: FJ.hideLobbyCode,
                setChecked: JJ => UJ("hideLobbyCode", JJ),
                disabled: jJ
              })
            })]
          })]
        }), (0, mJ.jsx)(QJ, {
          icon: "layer-group",
          title: qJ("worldBuilder:pluginsSection"),
          disabled: !XJ,
          children: (0, mJ.jsx)(vJ.b, {
            callbacks: YJ,
            disabled: jJ,
            advancedMode: !0,
            hideWrapper: !0
          })
        })]
      })
    }
    var yJ = ZJ(4362),
      SJ = ZJ(3826),
      IJ = ZJ(1389),
      MJ = ZJ(2975),
      bJ = ZJ(1022),
      wJ = ZJ(4323),
      WJ = ZJ(4365),
      gJ = ZJ(1335);
    const HJ = 50,
      PJ = .3;
    async function kJ(JJ) {
      const cJ = await
      function(JJ) {
        return new Promise(((cJ, ZJ) => {
          const FJ = new FileReader;
          FJ.onload = () => cJ(FJ.result), FJ.onerror = ZJ, FJ.readAsDataURL(JJ)
        }))
      }(JJ), ZJ = await
      function(JJ) {
        return new Promise(((cJ, ZJ) => {
          const FJ = new Image;
          FJ.onload = () => cJ(FJ), FJ.onerror = () => ZJ(new Error("Failed to load image")), FJ.src = JJ
        }))
      }(cJ);
      if (ZJ.naturalHeight > ZJ.naturalWidth) throw new pJ;
      const FJ = 1024 * HJ,
        {
          dataUrl: UJ,
          finalQuality: eJ
        } = function(JJ, cJ) {
          const ZJ = document.createElement("canvas");
          ZJ.width = JJ.naturalWidth, ZJ.height = JJ.naturalHeight, ZJ.getContext("2d").drawImage(JJ, 0, 0);
          let FJ = .92,
            UJ = ZJ.toDataURL("image/jpeg", FJ);
          for (; .75 * UJ.length > cJ && FJ > .05;) FJ -= .05, UJ = ZJ.toDataURL("image/jpeg", FJ);
          return {
            dataUrl: UJ,
            finalQuality: FJ
          }
        }(ZJ, FJ);
      if (Math.ceil(.75 * UJ.length) > FJ) throw new dJ;
      return {
        base64Jpg: UJ,
        heavilyCompressed: eJ < PJ
      }
    }
    class pJ extends Error {}
    class dJ extends Error {}
    var zJ = function(JJ) {
      return JJ[JJ.NOT_LOGGED_IN = 0] = "NOT_LOGGED_IN", JJ[JJ.THUMBNAIL_LIMIT_REACHED = 1] = "THUMBNAIL_LIMIT_REACHED", JJ
    }(zJ || {});

    function NJ(JJ) {
      var cJ;
      let {
        schematicId: ZJ,
        hasReadUploadPolicy: UJ,
        onPolicyValidationError: qJ,
        onThumbnailReady: jJ
      } = JJ;
      const {
        t: DJ
      } = (0, AJ.F)(), [nJ, GJ] = (0, FJ.useState)(null), [fJ, xJ] = (0, FJ.useState)(""), [rJ, vJ] = (0, FJ.useState)(""), [QJ, EJ] = (0, FJ.useState)(!0), [VJ, KJ] = (0, FJ.useState)(!1), yJ = (0, FJ.useRef)(!1), [SJ, IJ] = (0, FJ.useState)(null), [MJ, bJ] = (0, FJ.useState)(!1), [wJ, gJ] = (0, FJ.useState)(!1), HJ = (0, FJ.useRef)(0), {
        getRootProps: PJ,
        getInputProps: zJ,
        isDragActive: NJ
      } = (0, WJ.c)({
        accept: {
          "image/*": [".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp"]
        },
        multiple: !1,
        onDrop: async JJ => {
          if (0 === JJ.length) return;
          const cJ = JJ[0],
            ZJ = ++HJ.current;
          IJ(null), bJ(!1), GJ(null), xJ(cJ.name);
          try {
            const JJ = await kJ(cJ);
            if (ZJ !== HJ.current) return;
            GJ(JJ), bJ(JJ.heavilyCompressed)
          } catch (FJ) {
            if (ZJ !== HJ.current) return;
            IJ(DJ(FJ instanceof pJ ? "thumbnail:portraitImagesNotAllowed" : FJ instanceof dJ ? "thumbnail:couldNotCompressImage" : "thumbnail:failedToUploadImage"))
          }
        },
        useFsAccessApi: !1
      }), OJ = fJ.length <= 30 ? fJ : `${fJ.slice(0,27)}...`, TJ = null !== (cJ = null === nJ || void 0 === nJ ? void 0 : nJ.base64Jpg) && void 0 !== cJ ? cJ : null, CJ = rJ.trim(), uJ = CJ.length >= hJ.m && CJ.length <= hJ.k, iJ = wJ && !nJ && !SJ, RJ = wJ && !uJ;
      return (0, mJ.jsxs)("div", {
        className: "ThumbnailUploadContainer",
        children: [(0, mJ.jsxs)("div", {
          ...PJ({
            className: sJ()("ThumbnailUploadDropzone", {
              ActiveDrag: NJ,
              ValidationError: iJ
            })
          }),
          children: [(0, mJ.jsx)("input", {
            ...zJ()
          }), !NJ && TJ ? (0, mJ.jsxs)(mJ.Fragment, {
            children: [(0, mJ.jsxs)("div", {
              className: "ThumbnailAspectPreviews",
              children: [(0, mJ.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, mJ.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "1:1"
                }), (0, mJ.jsx)("div", {
                  className: "ThumbnailAspectFrame Square",
                  children: (0, mJ.jsx)("img", {
                    src: TJ,
                    alt: "1:1 preview"
                  })
                })]
              }), (0, mJ.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, mJ.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "16:9"
                }), (0, mJ.jsx)("div", {
                  className: "ThumbnailAspectFrame Wide",
                  children: (0, mJ.jsx)("img", {
                    src: TJ,
                    alt: "16:9 preview"
                  })
                })]
              })]
            }), (0, mJ.jsxs)("div", {
              children: [(0, mJ.jsx)("div", {
                className: "ThumbnailUploadInstructions Active",
                children: OJ
              }), (0, mJ.jsx)("div", {
                className: "ThumbnailUploadInstructions Preview",
                children: DJ("thumbnail:preview")
              })]
            })]
          }) : (0, mJ.jsxs)(mJ.Fragment, {
            children: [(0, mJ.jsx)("div", {
              className: "ThumbnailUploadIcon",
              children: (0, mJ.jsx)(YJ.c, {
                name: "image"
              })
            }), (0, mJ.jsx)("div", {
              className: "ThumbnailUploadInstructions",
              children: DJ("thumbnail:dragImageHere")
            })]
          })]
        }), iJ && (0, mJ.jsx)("div", {
          className: "ThumbnailUploadError",
          children: DJ("thumbnail:imageRequired")
        }), (0, mJ.jsx)(XJ.e, {
          className: sJ()("ThumbnailUploadNameInput", {
            ValidationError: RJ
          }),
          placeholderText: DJ("thumbnail:thumbnailName"),
          defaultValue: rJ,
          onValueChange: JJ => {
            vJ(JJ)
          },
          maxLength: hJ.k
        }), RJ && (0, mJ.jsx)("div", {
          className: "ThumbnailUploadError",
          children: DJ("thumbnail:nameRequired", {
            min: hJ.m,
            max: hJ.k
          })
        }), (0, mJ.jsxs)("label", {
          className: "ThumbnailUploadCheckbox",
          children: [(0, mJ.jsx)("input", {
            type: "checkbox",
            checked: QJ,
            onChange: JJ => {
              EJ(JJ.target.checked)
            }
          }), DJ("thumbnail:setAsThumbnailOnceApproved")]
        }), MJ && (0, mJ.jsx)("div", {
          className: "ThumbnailUploadWarning",
          children: DJ("thumbnail:heavyCompressionWarning")
        }), SJ && (0, mJ.jsx)("div", {
          className: "ThumbnailUploadError",
          children: SJ
        }), (0, mJ.jsx)(eJ.m, {
          disabled: VJ,
          className: "ThumbnailUploadButton",
          onClick: async () => {
            if (gJ(!0), !yJ.current && nJ && uJ && UJ) {
              yJ.current = !0, KJ(!0), IJ(null);
              try {
                await jJ(nJ.base64Jpg, CJ, QJ ? ZJ : null)
              } catch (JJ) {
                IJ(JJ.errorMessageForUser ? DJ(JJ.errorMessageForUser, JJ.errorMessageTranslationParams) : DJ("thumbnail:failedToUploadImage"))
              } finally {
                yJ.current = !1, KJ(!1)
              }
            } else UJ || qJ()
          },
          children: DJ(VJ ? "thumbnail:processing" : "thumbnail:uploadThumbnail")
        })]
      })
    }
    const OJ = 2e3;

    function TJ(JJ) {
      let {
        schematicId: cJ,
        ownedThumbnailCount: ZJ,
        onClose: UJ,
        onThumbnailReady: eJ
      } = JJ;
      const {
        t: XJ
      } = (0, AJ.F)(), {
        userContext: qJ
      } = (0, bJ.d)(), [jJ, DJ] = (0, FJ.useState)(!1), [nJ, GJ] = (0, FJ.useState)(!1), [fJ, xJ] = (0, FJ.useState)(!1), rJ = (0, FJ.useRef)();
      (0, FJ.useEffect)((() => () => {
        clearTimeout(rJ.current)
      }), []);
      const vJ = function(JJ, cJ) {
        const ZJ = [];
        return JJ.isLoggedIn() || ZJ.push(zJ.NOT_LOGGED_IN), cJ >= hJ.W && ZJ.push(zJ.THUMBNAIL_LIMIT_REACHED), ZJ
      }(qJ, ZJ);
      if (vJ.length > 0) {
        const JJ = {
          [zJ.NOT_LOGGED_IN]: {
            key: "thumbnail:mustBeLoggedInToUpload"
          },
          [zJ.THUMBNAIL_LIMIT_REACHED]: {
            key: "thumbnail:thumbnailLimitReachedPleaseDelete",
            params: {
              max: hJ.W
            }
          }
        };
        return (0, mJ.jsxs)("div", {
          className: "ThumbnailUploaderInner",
          children: [(0, mJ.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: XJ("thumbnail:cannotUploadThumbnail")
          }), vJ.map(((cJ, ZJ) => {
            const FJ = JJ[cJ];
            return (0, mJ.jsxs)("div", {
              className: "CannotUploadThumbnailItem",
              children: [(0, mJ.jsx)(YJ.c, {
                name: "triangle-exclamation"
              }), (0, mJ.jsx)("span", {
                children: XJ(FJ.key, FJ.params)
              })]
            }, ZJ)
          }))]
        })
      }
      return (0, mJ.jsxs)("div", {
        className: sJ()("ThumbnailUploaderInner", {
          ThumbnailUploaderSuccess: jJ
        }),
        children: [jJ && (0, mJ.jsxs)("div", {
          className: "ThumbnailUploadSuccessOverlay",
          children: [(0, mJ.jsxs)("div", {
            className: "ThumbnailUploadSuccessIcon FullyFancyText AnimFadeInScaleUp",
            children: [(0, mJ.jsx)(YJ.c, {
              name: "check"
            }), (0, mJ.jsx)(gJ.c, {})]
          }), (0, mJ.jsx)("div", {
            className: "ThumbnailUploadSuccessText AnimFadeInScaleUp",
            children: XJ("thumbnail:thumbnailUploaded")
          })]
        }), (0, mJ.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: XJ("thumbnail:uploadThumbnail")
        }), (0, mJ.jsxs)("div", {
          className: "ThumbnailUploaderBody",
          children: [(0, mJ.jsxs)("div", {
            className: "ThumbnailUploaderLeft",
            children: [(0, mJ.jsx)("h3", {
              className: "SchematicPopupSubtitle",
              children: XJ("thumbnail:chooseImage", {
                maxSizeKb: HJ
              })
            }), (0, mJ.jsx)(NJ, {
              schematicId: cJ,
              hasReadUploadPolicy: nJ,
              onPolicyValidationError: () => {
                xJ(!0)
              },
              onThumbnailReady: async (JJ, cJ, ZJ) => {
                await eJ(JJ, cJ, ZJ), DJ(!0), rJ.current = setTimeout(UJ, OJ)
              }
            })]
          }), (0, mJ.jsxs)("div", {
            className: "ThumbnailUploadPolicy",
            children: [(0, mJ.jsx)("h3", {
              className: "ThumbnailUploadPolicyTitle",
              children: XJ("thumbnail:uploadPolicy")
            }), (0, mJ.jsxs)("ul", {
              className: "ThumbnailUploadPolicyList",
              children: [(0, mJ.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, mJ.jsx)(YJ.c, {
                  name: "check"
                }), (0, mJ.jsx)("span", {
                  children: XJ("thumbnail:policyFollowGuidelines")
                })]
              }), (0, mJ.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, mJ.jsx)(YJ.c, {
                  name: "check"
                }), (0, mJ.jsx)("span", {
                  children: XJ("thumbnail:policyInGameAssets")
                })]
              }), (0, mJ.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, mJ.jsx)(YJ.c, {
                  name: "check"
                }), (0, mJ.jsx)("span", {
                  children: XJ("thumbnail:policyLimitText")
                })]
              }), (0, mJ.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, mJ.jsx)(YJ.c, {
                  name: "x"
                }), (0, mJ.jsx)("span", {
                  children: XJ("thumbnail:policyCopyrightContent")
                })]
              }), (0, mJ.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, mJ.jsx)(YJ.c, {
                  name: "x"
                }), (0, mJ.jsx)("span", {
                  children: XJ("thumbnail:policyOutOfGameAssets")
                })]
              }), (0, mJ.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, mJ.jsx)(YJ.c, {
                  name: "x"
                }), (0, mJ.jsx)("span", {
                  children: XJ("thumbnail:policyBloxdTags")
                })]
              }), (0, mJ.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, mJ.jsx)(YJ.c, {
                  name: "x"
                }), (0, mJ.jsx)("span", {
                  children: XJ("thumbnail:policyMustReflectGame")
                })]
              })]
            }), (0, mJ.jsxs)("label", {
              className: sJ()("ThumbnailUploadCheckbox Policy", {
                ValidationError: fJ && !nJ
              }),
              children: [(0, mJ.jsx)("input", {
                type: "checkbox",
                checked: nJ,
                onChange: JJ => {
                  GJ(JJ.target.checked)
                }
              }), XJ("thumbnail:agreeToUploadPolicy")]
            }), fJ && !nJ && (0, mJ.jsx)("div", {
              className: "ThumbnailPolicyError",
              children: XJ("thumbnail:policyRequired")
            })]
          })]
        })]
      })
    }
    var CJ = ZJ(1098);
    const uJ = {
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

    function iJ(JJ) {
      var cJ, ZJ;
      let {
        schematicData: XJ,
        updateSchematicData: jJ,
        publishFormEnabled: hJ,
        onClose: DJ
      } = JJ;
      const {
        t: nJ
      } = (0, AJ.F)(), {
        userContext: GJ,
        isUserContextUpdating: fJ
      } = (0, bJ.d)(), xJ = (0, MJ.e)(), [rJ, vJ] = (0, FJ.useState)([]), [QJ, EJ] = (0, FJ.useState)([]), [VJ, KJ] = (0, FJ.useState)(!0), [yJ, SJ] = (0, FJ.useState)(null !== (cJ = XJ.customThumbnailId) && void 0 !== cJ ? cJ : null), [WJ, gJ] = (0, FJ.useState)(null), HJ = (0, FJ.useRef)(null !== (ZJ = XJ.customThumbnailId) && void 0 !== ZJ ? ZJ : null), PJ = (0, FJ.useRef)(0), kJ = (0, FJ.useRef)(null), pJ = (0, FJ.useRef)(null), dJ = (0, FJ.useRef)(null), zJ = (0, FJ.useRef)(!1);

      function NJ(JJ, cJ) {
        dJ.current && (clearTimeout(dJ.current), dJ.current = null), gJ(JJ), null !== JJ && cJ && (dJ.current = setTimeout((() => {
          gJ(null), dJ.current = null
        }), 5e3))
      }(0, FJ.useEffect)((() => () => {
        clearTimeout(pJ.current), clearTimeout(dJ.current)
      }), []);
      const OJ = (0, FJ.useCallback)((() => {
        KJ(!0), IJ.c.getOwnedThumbnails(GJ).then((JJ => {
          const cJ = [],
            ZJ = [];
          for (const FJ of JJ.thumbnails) FJ.rejectionPolicyId ? cJ.push(FJ) : ZJ.push(FJ);
          cJ.sort(((JJ, cJ) => JJ.lastUpdatedAt - cJ.lastUpdatedAt)), ZJ.sort(((JJ, cJ) => {
            const ZJ = JJ.approved ? 1 : 0,
              FJ = (cJ.approved ? 1 : 0) - ZJ;
            return 0 !== FJ ? FJ : cJ.lastUpdatedAt - JJ.lastUpdatedAt
          })), EJ(cJ), vJ(ZJ)
        })).catch((JJ => {
          console.error("Failed to fetch thumbnails:", JJ)
        })).finally((() => {
          KJ(!1)
        }))
      }), [GJ]);
      async function uJ(JJ, cJ, ZJ) {
        return IJ.c.uploadSchematicThumbnail(GJ, JJ, cJ, ZJ).then((() => {
          NJ({
            text: nJ("thumbnail:uploadedAwaitingModeration"),
            type: "success"
          }, !0), OJ()
        }))
      }

      function iJ() {
        PJ.current = Date.now(), pJ.current = null;
        const JJ = kJ.current;
        kJ.current = null, NJ({
          text: nJ("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), IJ.c.setSchematicThumbnail(GJ, XJ.schematicId, JJ).then((() => {
          xJ.current && (NJ({
            text: nJ("thumbnail:thumbnailUpdated"),
            type: "success"
          }, !0), HJ.current = JJ, jJ("customThumbnailId", JJ), jJ("customThumbnailBlurhash", void 0), jJ("customThumbnailVariants", void 0))
        })).catch((JJ => {
          xJ.current && (NJ({
            text: JJ.errorMessageForUser ? nJ(JJ.errorMessageForUser, JJ.errorMessageTranslationParams) : nJ("thumbnail:failedToSetThumbnail"),
            type: "error"
          }, !0), SJ(HJ.current))
        }))
      }

      function aJ(JJ) {
        SJ(JJ), kJ.current = JJ;
        const cJ = Date.now() - PJ.current;
        cJ >= 1e3 ? iJ() : (NJ({
          text: nJ("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), pJ.current || (pJ.current = setTimeout((() => {
          iJ()
        }), 1e3 - cJ)))
      }
      return (0, FJ.useEffect)((() => {
        !1 === fJ && OJ()
      }), [fJ, OJ]), QJ.length > 0 ? (0, mJ.jsx)(RJ, {
        rejectedThumbnails: QJ,
        userContext: GJ,
        isMountedRef: xJ,
        onAcknowledged: OJ
      }) : (0, mJ.jsxs)("div", {
        className: "BloxdForm ThumbnailSection",
        children: [(0, mJ.jsxs)("div", {
          className: "SectionTitle",
          children: [nJ("thumbnail:gameThumbnail"), WJ && (0, mJ.jsx)("span", {
            className: sJ()("ThumbnailActionMsg", `ThumbnailActionMsg--${WJ.type}`),
            children: WJ.text
          })]
        }), (0, mJ.jsx)("div", {
          className: "SectionBody",
          children: (0, mJ.jsxs)("div", {
            className: "ThumbnailGrid",
            children: [(0, mJ.jsxs)("div", {
              className: sJ()("ThumbnailGridItem ThumbnailGridItemDefault", {
                ThumbnailGridItemSelected: null === yJ
              }),
              onClick: () => aJ(null),
              children: [(0, mJ.jsx)(wJ.e, {
                game: {
                  schematicId: XJ.schematicId,
                  imageBlurhash: XJ.imageBlurhash
                }
              }), (0, mJ.jsx)("div", {
                className: "ThumbnailGridItemLabel ThumbnailDefaultLabel",
                children: nJ("general:default")
              })]
            }), VJ && (0, mJ.jsx)(qJ.c, {}), rJ.map(((JJ, cJ) => (0, mJ.jsxs)("div", {
              className: sJ()("ThumbnailGridItem", {
                ThumbnailGridItemSelected: yJ === JJ.id,
                ThumbnailGridItemPending: !JJ.approved
              }),
              onClick: () => {
                JJ.approved && aJ(JJ.id)
              },
              children: [JJ.approved && (0, mJ.jsx)("img", {
                src: `${CJ.clientSideServerUrls.s3Url}/customThumbnails/${JJ.id}.jpg`,
                alt: "Thumbnail"
              }), JJ.approved && (0, mJ.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: JJ.name
              }), JJ.id && (0, mJ.jsx)(eJ.I, {
                className: "ThumbnailDeleteButton",
                onClick: cJ => async function(JJ, cJ, ZJ) {
                  JJ.stopPropagation();
                  const FJ = await UJ.NotificationProvider.showCustomPopup({
                      body: JJ => (0, mJ.jsx)(LJ, {
                        thumbnailId: cJ,
                        thumbnailName: ZJ,
                        onClose: cJ => {
                          cJ && (zJ.current = !0), JJ()
                        }
                      }),
                      middleScreenPopupClassName: "ThumbnailDeleteConfirmPopup",
                      onClose: DJ
                    }).getResult(),
                    eJ = zJ.current;
                  zJ.current = !1, eJ && !0 === FJ && (xJ.current && NJ({
                    text: nJ("thumbnail:deletingThumbnail"),
                    type: "info"
                  }, !1), IJ.c.deleteSchematicThumbnail(GJ, cJ).then((() => {
                    xJ.current && (NJ({
                      text: nJ("thumbnail:thumbnailDeleted"),
                      type: "success"
                    }, !0), HJ.current === cJ && aJ(null), OJ())
                  })).catch((JJ => {
                    xJ.current && NJ({
                      text: JJ.errorMessageForUser ? nJ(JJ.errorMessageForUser, JJ.errorMessageTranslationParams) : nJ("thumbnail:failedToDeleteThumbnail"),
                      type: "error"
                    }, !0)
                  })))
                }(cJ, JJ.id, JJ.name),
                children: (0, mJ.jsx)(YJ.c, {
                  name: "trash-can"
                })
              }), !JJ.approved && (0, mJ.jsx)("div", {
                className: "ThumbnailUnapprovedIcon",
                children: (0, mJ.jsx)(YJ.c, {
                  name: "hourglass-clock"
                })
              }), !JJ.approved && (0, mJ.jsxs)("div", {
                className: "ThumbnailGridItemLabel ThumbnailPendingLabel",
                children: [JJ.name, (0, mJ.jsx)("br", {}), nJ("thumbnail:pendingApproval")]
              })]
            }, cJ))), (0, mJ.jsxs)("div", {
              className: sJ()("ThumbnailGridItem ThumbnailUploadTile", {
                ThumbnailUploadTileDisabled: !hJ
              }),
              onClick: () => {
                hJ && function(JJ) {
                  let {
                    schematicId: cJ,
                    ownedThumbnailCount: ZJ,
                    onThumbnailReady: FJ,
                    onClose: eJ
                  } = JJ;
                  UJ.NotificationProvider.showCustomPopup({
                    body: JJ => (0, mJ.jsx)(TJ, {
                      schematicId: cJ,
                      ownedThumbnailCount: ZJ,
                      onClose: JJ,
                      onThumbnailReady: FJ
                    }),
                    middleScreenPopupClassName: "SchematicThumbnailPopup",
                    onClose: eJ,
                    unlockPointerKey: "schematicThumbnailUploaderPopup"
                  })
                }({
                  schematicId: XJ.schematicId,
                  ownedThumbnailCount: rJ.length,
                  onThumbnailReady: uJ,
                  onClose: DJ
                })
              },
              children: [(0, mJ.jsx)(YJ.c, {
                name: "plus"
              }), (0, mJ.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: nJ("thumbnail:uploadThumbnail")
              })]
            })]
          })
        })]
      })
    }

    function RJ(JJ) {
      let {
        rejectedThumbnails: cJ,
        userContext: ZJ,
        isMountedRef: UJ,
        onAcknowledged: XJ
      } = JJ;
      const {
        t: jJ
      } = (0, AJ.F)(), [hJ, DJ] = (0, FJ.useState)(!1), [sJ, nJ] = (0, FJ.useState)(!1), GJ = function(JJ) {
        const cJ = new Map;
        for (const ZJ of JJ) {
          const JJ = ZJ.rejectionPolicyId,
            FJ = cJ.get(JJ);
          FJ ? FJ.push(ZJ) : cJ.set(JJ, [ZJ])
        }
        return cJ
      }(cJ);
      return (0, mJ.jsxs)("div", {
        className: "ThumbnailRejectionNotice",
        children: [(0, mJ.jsxs)("div", {
          className: "ThumbnailRejectionNoticeTitle",
          children: [(0, mJ.jsx)(YJ.c, {
            name: "triangle-exclamation"
          }), " ", jJ("thumbnail:thumbnailsRejected"), " ", (0, mJ.jsx)(YJ.c, {
            name: "triangle-exclamation"
          })]
        }), (0, mJ.jsx)("div", {
          className: "ThumbnailRejectionNoticeSubtitle",
          children: jJ("thumbnail:thumbnailsRejectedDescription")
        }), (0, mJ.jsx)("div", {
          className: "ThumbnailRejectionNoticeList",
          children: [...GJ.entries()].map((JJ => {
            let [cJ, ZJ] = JJ;
            const FJ = uJ[cJ];
            return (0, mJ.jsxs)("div", {
              className: "ThumbnailRejectionNoticeGroup",
              children: [(0, mJ.jsx)("div", {
                className: "ThumbnailRejectionNoticeItems",
                children: ZJ.map((JJ => (0, mJ.jsxs)("div", {
                  className: "ThumbnailRejectionNoticeItem",
                  children: [(0, mJ.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemIcon",
                    children: (0, mJ.jsx)(YJ.c, {
                      name: "image-slash"
                    })
                  }), (0, mJ.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemDetails",
                    children: (0, mJ.jsx)("div", {
                      className: "ThumbnailRejectionNoticeItemName",
                      children: JJ.name
                    })
                  })]
                }, JJ.id)))
              }), (0, mJ.jsxs)("div", {
                className: "ThumbnailRejectionNoticeGroupReason",
                children: [jJ("thumbnail:rejectionReason"), " ", FJ ? jJ(FJ.reason) : cJ]
              }), FJ && (0, mJ.jsx)("ul", {
                className: "ThumbnailRejectionNoticeGroupTips",
                children: FJ.tips.map((JJ => (0, mJ.jsx)("li", {
                  children: jJ(JJ)
                }, JJ)))
              })]
            }, cJ)
          }))
        }), (0, mJ.jsxs)("label", {
          className: "ThumbnailRejectionNoticeCheckbox",
          children: [(0, mJ.jsx)(SJ.e, {
            checked: hJ,
            onChange: JJ => DJ(JJ.target.checked),
            disabled: sJ
          }), (0, mJ.jsx)("span", {
            children: jJ("thumbnail:haveReadRejectionReasons")
          })]
        }), (0, mJ.jsx)(eJ.m, {
          onClick: async function() {
            nJ(!0);
            const JJ = await Promise.allSettled(cJ.map((JJ => IJ.c.deleteSchematicThumbnail(ZJ, JJ.id))));
            if (!UJ.current) return;
            const FJ = JJ.filter((JJ => "rejected" === JJ.status));
            FJ.length > 0 && console.error("Some rejected thumbnails failed to delete:", FJ), XJ()
          },
          disabled: !hJ || sJ,
          className: "ThumbnailRejectionNoticeAcceptButton",
          children: sJ ? (0, mJ.jsx)(qJ.c, {}) : jJ("general:accept")
        })]
      })
    }

    function LJ(JJ) {
      let {
        thumbnailId: cJ,
        thumbnailName: ZJ,
        onClose: FJ
      } = JJ;
      const {
        t: UJ
      } = (0, AJ.F)();
      return (0, mJ.jsxs)("div", {
        className: "ThumbnailDeleteConfirm",
        children: [(0, mJ.jsx)("div", {
          className: "ThumbnailDeleteConfirmTitle",
          children: UJ("thumbnail:deleteThumbnail")
        }), (0, mJ.jsxs)("div", {
          className: "ThumbnailDeleteConfirmImageContainer",
          children: [(0, mJ.jsx)("img", {
            className: "ThumbnailDeleteConfirmImage",
            src: `${CJ.clientSideServerUrls.s3Url}/customThumbnails/${cJ}.jpg`,
            alt: "Thumbnail to delete"
          }), (0, mJ.jsx)("div", {
            className: "ThumbnailGridItemLabel",
            children: ZJ
          })]
        }), (0, mJ.jsx)("div", {
          className: "ThumbnailDeleteConfirmSubtitle",
          children: UJ("thumbnail:deleteThumbnailConfirmation")
        }), (0, mJ.jsxs)("div", {
          className: "ThumbnailDeleteConfirmButtons",
          children: [(0, mJ.jsxs)(eJ.I, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => FJ(!0),
            children: [(0, mJ.jsx)(YJ.c, {
              name: "trash-can"
            }), " ", UJ("general:delete")]
          }), (0, mJ.jsx)(eJ.g, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => FJ(!1),
            children: UJ("general:cancel")
          })]
        })]
      })
    }
    var aJ = ZJ(2651),
      BJ = ZJ(4392),
      tJ = ZJ(4397),
      oJ = ZJ(4439);

    function lJ(JJ) {
      let {
        schematicData: cJ,
        setTexturePack: ZJ,
        initializeTexturePack: UJ,
        publishFormEnabled: eJ
      } = JJ;
      const {
        t: XJ
      } = (0, AJ.F)(), [qJ, jJ] = (0, FJ.useState)(null), [YJ, hJ] = (0, FJ.useState)(null), [DJ, nJ] = (0, FJ.useState)(!1), GJ = (0, MJ.e)(), fJ = eJ && !DJ, xJ = cJ.customTexturePackKey;

      function rJ(JJ) {
        var cJ;
        jJ(JJ.metaData.id), hJ(null !== (cJ = JJ.metaData.fromFolderName) && void 0 !== cJ ? cJ : null), (JJ.metaData.id !== aJ.r.CUSTOM || JJ.metaData.fromFolderName) && ZJ(JJ)
      }
      return (0, FJ.useEffect)((() => {
        xJ && (nJ(!0), (0, BJ.d)(xJ).then((JJ => {
          var cJ;
          GJ.current && (JJ ? (jJ(JJ.metaData.id), hJ(null !== (cJ = JJ.metaData.fromFolderName) && void 0 !== cJ ? cJ : null), UJ(JJ)) : console.error(`No texture pack at ${xJ}`))
        })).catch((JJ => {
          console.error("Error fetching texture pack: ", JJ)
        })).finally((() => {
          nJ(!1)
        })))
      }), [xJ, UJ, GJ]), (0, mJ.jsxs)("div", {
        className: "BloxdForm TexturePackSection",
        children: [(0, mJ.jsx)("div", {
          className: "SectionTitle",
          children: XJ("customTexturePack:customTexturePack")
        }), (0, mJ.jsxs)("div", {
          className: "TexturePackList",
          children: [(0, mJ.jsx)("div", {
            className: sJ()("TexturePack", {
              Selected: null === qJ && !DJ,
              Disabled: !fJ
            }),
            onClick: () => {
              fJ && (jJ(null), ZJ(null), hJ(null))
            },
            children: (0, mJ.jsx)("div", {
              className: "TexturePackName",
              children: "No Override"
            })
          }), Object.values(aJ.r).map((JJ => (0, mJ.jsx)(tJ.f, {
            id: JJ,
            isSelected: JJ === qJ,
            setSelected: rJ,
            disabled: !fJ
          }, JJ)))]
        }), qJ === aJ.r.CUSTOM && (0, mJ.jsx)(oJ.e, {
          folderName: YJ,
          onTexturePackUpdated: rJ,
          disabled: !fJ,
          maxFileSizeMb: 25,
          packOwner: "customGame"
        })]
      })
    }
    var Jc = ZJ(4456);

    function cc(JJ) {
      var cJ;
      let {
        gameCategory: ZJ,
        setGameCategory: FJ,
        disabled: UJ
      } = JJ;
      const XJ = null !== (cJ = (0, nJ.X)(ZJ)) && void 0 !== cJ ? cJ : "other";
      return (0, mJ.jsxs)("div", {
        className: "GameCategoryPicker",
        children: [(0, mJ.jsx)(xJ.g, {
          label: "worldBuilder:gameCategoryGroup",
          className: "GameCategoryGroup",
          disabled: UJ,
          children: (0, mJ.jsx)(rJ.d, {
            options: nJ.N.map((JJ => ({
              value: JJ,
              label: nJ.L[JJ]
            }))),
            value: XJ,
            onChange: JJ => {
              JJ.value !== XJ && FJ(nJ.H[JJ.value][0])
            }
          })
        }), (0, mJ.jsx)(xJ.g, {
          label: "worldBuilder:gameCategory",
          className: "GameCategory",
          disabled: UJ,
          children: (0, mJ.jsx)("div", {
            className: "GameCategoryOptions",
            children: nJ.H[XJ].map((JJ => (0, mJ.jsx)(eJ.O, {
              active: JJ === ZJ,
              onClick: () => {
                FJ(JJ)
              },
              children: (0, nJ.T)(JJ)
            }, JJ)))
          })
        })]
      })
    }

    function Zc(JJ) {
      let {
        editor: cJ,
        onClose: ZJ
      } = JJ;
      const {
        t: FJ
      } = (0, AJ.F)(), {
        schematicData: UJ,
        updateSchematicData: eJ,
        publishFormEnabled: qJ,
        formEnabled: jJ
      } = cJ;
      return (0, mJ.jsxs)(mJ.Fragment, {
        children: [(0, mJ.jsxs)(QJ, {
          icon: "pen-to-square",
          title: FJ("worldBuilder:basicsSection"),
          disabled: !jJ,
          children: [(0, mJ.jsx)(EJ, {
            label: FJ("general:name"),
            caption: FJ("worldBuilder:schematicNameTagsHint"),
            children: (0, mJ.jsx)(XJ.e, {
              className: "SchematicPageName",
              defaultValue: UJ.name,
              onValueChange: JJ => eJ("name", JJ),
              placeholderText: FJ("worldBuilder:schematicNamePlaceholder"),
              maxLength: hJ.qb
            })
          }), (0, mJ.jsx)(EJ, {
            label: FJ("general:description"),
            children: (0, mJ.jsx)(XJ.e, {
              className: "SchematicPageDescription",
              useTextarea: !0,
              defaultValue: UJ.description,
              onValueChange: JJ => eJ("description", JJ),
              placeholderText: FJ("worldBuilder:schematicDescriptionPlaceholder"),
              maxLength: hJ.nb
            })
          }), (0, mJ.jsx)(cc, {
            gameCategory: UJ.gameCategory,
            setGameCategory: JJ => eJ("gameCategory", JJ),
            disabled: !qJ
          }), !0 === UJ.gamePublished && (0, mJ.jsx)(iJ, {
            schematicData: UJ,
            updateSchematicData: eJ,
            publishFormEnabled: qJ,
            onClose: function() {
              null === ZJ || void 0 === ZJ || ZJ()
            }
          })]
        }), (0, mJ.jsx)(KJ, {
          schematicData: UJ,
          updateSchematicData: eJ,
          publishFormEnabled: qJ,
          formEnabled: jJ
        }), !0 === UJ.gamePublished && (0, mJ.jsx)(QJ, {
          icon: "palette",
          title: FJ("worldBuilder:texturePackSection"),
          disabled: !jJ,
          children: (0, mJ.jsx)(lJ, {
            schematicData: UJ,
            setTexturePack: cJ.setTexturePack,
            initializeTexturePack: cJ.initializeTexturePack,
            publishFormEnabled: qJ
          })
        })]
      })
    }

    function Fc(JJ) {
      let {
        editor: cJ
      } = JJ;
      const {
        t: ZJ
      } = (0, AJ.F)(), {
        schematicData: FJ,
        formEnabled: UJ,
        hasUnsavedChanges: XJ
      } = cJ, hJ = UJ && XJ;
      return (0, mJ.jsxs)("footer", {
        className: "SchematicPageFooter",
        children: [UJ && XJ && (0, mJ.jsxs)("div", {
          className: "SchematicPageFooterStatus",
          children: [(0, mJ.jsx)("span", {
            className: "SchematicPageFooterStatusDot"
          }), ZJ("worldBuilder:unsavedChanges")]
        }), (0, mJ.jsx)(jJ.g, {
          tooltipInner: (0, mJ.jsx)("div", {
            className: "SaveButtonTooltip",
            children: ZJ(UJ && !XJ ? "worldBuilder:saveChangesNoneDescription" : "worldBuilder:saveChangesDescription")
          }),
          children: (0, mJ.jsxs)(eJ.d, {
            className: "SaveChangesButton",
            onClick: () => cJ.saveSchematic(FJ.gamePublished),
            disabled: !hJ,
            children: [(0, mJ.jsxs)("span", {
              className: UJ ? "" : "SaveChangesButtonBodyHidden",
              children: [(0, mJ.jsx)(YJ.c, {
                name: "wrench"
              }), " ", ZJ("worldBuilder:saveChanges")]
            }), !UJ && (0, mJ.jsx)(qJ.c, {})]
          })
        })]
      })
    }

    function Uc(JJ) {
      let {
        schematic: cJ,
        onSchematicUpdate: ZJ,
        onClose: UJ,
        inSourceWorld: XJ
      } = JJ;
      const {
        t: qJ
      } = (0, AJ.F)();

      function jJ() {
        null === UJ || void 0 === UJ || UJ()
      }
      const YJ = (0, Jc.e)(cJ, {
        onNavigateAway: jJ,
        inSourceWorld: XJ
      });
      return (0, FJ.useEffect)((() => {
        null === ZJ || void 0 === ZJ || ZJ(YJ.schematicData)
      }), [YJ.schematicData, ZJ]), (0, mJ.jsxs)("div", {
        className: "SchematicPage SchematicPagePopupVariant",
        children: [(0, mJ.jsxs)("div", {
          className: "SchematicPageBody",
          children: [(0, mJ.jsx)(eJ.b, {
            onClick: jJ,
            children: qJ("worldBuilder:back")
          }), (0, mJ.jsx)(QJ, {
            icon: "rocket-launch",
            title: qJ("worldBuilder:actionsSection"),
            disabled: !YJ.formEnabled,
            children: (0, mJ.jsx)(yJ.d, {
              editor: YJ
            })
          }), (0, mJ.jsx)(Zc, {
            editor: YJ,
            onClose: jJ
          })]
        }), (0, mJ.jsx)(Fc, {
          editor: YJ
        })]
      })
    }

    function ec(JJ) {
      let {
        schematic: cJ,
        onSchematicUpdate: ZJ,
        onClose: FJ,
        inSourceWorld: eJ
      } = JJ;
      UJ.NotificationProvider.showCustomPopup({
        body: JJ => (0, mJ.jsx)(Uc, {
          schematic: cJ,
          onSchematicUpdate: ZJ,
          onClose: JJ,
          inSourceWorld: eJ
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: FJ,
        unlockPointerKey: "schematicPagePopup"
      })
    }
  },
  4362: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => hJ
    });
    var FJ = ZJ(926),
      UJ = ZJ.n(FJ),
      eJ = ZJ(1086),
      XJ = ZJ(942),
      AJ = ZJ(1329),
      qJ = ZJ(1259),
      jJ = ZJ(1232),
      YJ = ZJ(990);

    function hJ(JJ) {
      let {
        editor: cJ,
        className: ZJ
      } = JJ;
      const {
        t: FJ
      } = (0, eJ.F)(), {
        schematicData: hJ,
        formEnabled: DJ,
        publishFormEnabled: sJ
      } = cJ, nJ = !DJ || !sJ;
      return (0, YJ.jsxs)("div", {
        className: UJ()("PublishButtonContainer", ZJ),
        children: [cJ.canEditSourceWorld && (0, YJ.jsxs)(AJ.d, {
          onClick: cJ.editSourceWorld,
          disabled: nJ,
          children: [(0, YJ.jsx)(XJ.c, {
            name: "edit"
          }), " ", FJ("worldBuilder:editSourceWorld")]
        }), !hJ.gamePublished && (0, YJ.jsx)(qJ.g, {
          tooltipInner: (0, YJ.jsx)("div", {
            className: "PublishButtonTooltip",
            children: FJ("worldBuilder:publishAsGameDescription")
          }),
          children: (0, YJ.jsxs)(AJ.m, {
            onClick: () => cJ.saveSchematic(!0),
            disabled: nJ,
            children: [(0, YJ.jsx)(XJ.c, {
              name: "rocket-launch"
            }), " ", FJ("worldBuilder:publishAsGame"), " ", (0, YJ.jsx)(XJ.c, {
              name: "info-circle"
            })]
          })
        }), !0 === hJ.gamePublished && (0, YJ.jsxs)(YJ.Fragment, {
          children: [(0, YJ.jsx)(qJ.g, {
            tooltipInner: (0, YJ.jsx)("div", {
              className: "PublishButtonTooltip",
              children: FJ("worldBuilder:unpublishAsGameDescription")
            }),
            children: (0, YJ.jsxs)(AJ.I, {
              onClick: cJ.unpublishSchematic,
              disabled: nJ,
              children: [(0, YJ.jsx)(XJ.c, {
                name: "rocket-launch"
              }), " ", FJ("worldBuilder:unpublishAsGame"), " ", (0, YJ.jsx)(XJ.c, {
                name: "info-circle"
              })]
            })
          }), (0, YJ.jsxs)(AJ.d, {
            onClick: cJ.playGame,
            disabled: nJ,
            children: [(0, YJ.jsx)(XJ.c, {
              name: "joystick"
            }), " ", FJ("general:playGame")]
          })]
        }), !DJ && (0, YJ.jsx)(jJ.c, {
          loaderType: "Secondary"
        })]
      })
    }
  },
  4392: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => UJ
    });
    var FJ = ZJ(1098);
    async function UJ(JJ) {
      const cJ = await fetch(`${FJ.clientSideServerUrls.s3Url}/${JJ}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === cJ.status || 403 === cJ.status) return null;
      if (!cJ.ok) throw new Error(`Failed to download the texture pack (${cJ.status})`);
      return await cJ.json()
    }
  },
  4456: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => fJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(1221),
      eJ = ZJ(889),
      XJ = ZJ(143),
      AJ = ZJ(1447),
      qJ = ZJ(13),
      jJ = ZJ(1703),
      YJ = ZJ(1389),
      hJ = ZJ(4006),
      DJ = ZJ(1247),
      sJ = ZJ(1022),
      nJ = ZJ(1406);

    function GJ(JJ, cJ) {
      return {
        schematicId: JJ.schematicId,
        name: JJ.name,
        description: JJ.description,
        gamePublished: cJ,
        gameCategory: JJ.gameCategory,
        defaultGamemode: JJ.defaultGamemode,
        voidDeathHeight: JJ.voidDeathHeight,
        disableKeepInventory: JJ.disableKeepInventory,
        disableTpRequests: JJ.disableTpRequests,
        disableLobbySpawn: JJ.disableLobbySpawn,
        disableMobs: JJ.disableMobs,
        disableSpawnProtection: JJ.disableSpawnProtection,
        disableFallDamage: JJ.disableFallDamage,
        worldBorder: JJ.worldBorder,
        hideLobbyCode: JJ.hideLobbyCode,
        enableSmpMarketplace: JJ.enableSmpMarketplace,
        enableSurvivalGuns: JJ.enableSurvivalGuns,
        enableSpawnReset: JJ.enableSpawnReset,
        enableDayNight: JJ.enableDayNight,
        persistWorld: JJ.persistWorld,
        persistInventory: JJ.persistInventory
      }
    }

    function fJ(JJ) {
      let {
        onNavigateAway: cJ,
        inSourceWorld: ZJ = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const {
        userContext: fJ
      } = (0, sJ.d)(), xJ = (0, nJ.useNavigatePreserveSearch)(), [rJ, vJ] = (0, FJ.useState)({
        ...JJ
      }), [mJ, QJ] = (0, FJ.useState)("Enter"), [EJ, VJ] = (0, FJ.useState)(void 0), KJ = (0, FJ.useRef)(GJ(JJ, JJ.gamePublished)), yJ = (0, FJ.useRef)(void 0), SJ = "Enter" === mJ, IJ = fJ.playerHasRank("developer") || fJ.playerHasRank("admin") || "Enter" === mJ && !1 !== rJ.schematicContainsSpawnBlock, MJ = void 0 !== EJ && EJ !== yJ.current || JSON.stringify(GJ(rJ, rJ.gamePublished)) !== JSON.stringify(KJ.current);

      function bJ(JJ, cJ) {
        vJ((ZJ => ({
          ...ZJ,
          [JJ]: cJ
        })))
      }
      const wJ = (0, FJ.useCallback)((JJ => {
        yJ.current = JJ, VJ(JJ)
      }), []);

      function WJ(JJ) {
        QJ("Loading");
        const cJ = GJ(rJ, JJ),
          ZJ = EJ !== yJ.current ? EJ : void 0;
        YJ.c.updateSchematic(fJ, cJ, ZJ).then((ZJ => {
          let {
            customTexturePackKey: FJ
          } = ZJ;
          QJ("Success"), bJ("customTexturePackKey", FJ), KJ.current = cJ, yJ.current = void 0, VJ(void 0), setTimeout((() => {
            bJ("gamePublished", JJ), QJ("Enter")
          }), 1e3)
        })).catch((JJ => {
          var cJ;
          (console.error("Failed to save schematic:", JJ), QJ("Error"), JJ instanceof XJ.b && JJ.errorMessageForUser) && DJ.NotificationProvider.showAlertPopup({
            title: "worldBuilder:changesNotSaved",
            subtitle: JJ.errorMessageForUser,
            textOpts: {
              subtitle: null !== (cJ = JJ.errorMessageTranslationParams) && void 0 !== cJ ? cJ : void 0
            },
            confirmText: "general:ok"
          });
          setTimeout((() => {
            QJ("Enter")
          }), 1e3)
        }))
      }
      return {
        schematicData: rJ,
        updateSchematicData: bJ,
        setTexturePack: VJ,
        initializeTexturePack: wJ,
        updateState: mJ,
        formEnabled: SJ,
        publishFormEnabled: IJ,
        hasUnsavedChanges: MJ,
        canEditSourceWorld: !ZJ,
        saveSchematic: WJ,
        unpublishSchematic: function() {
          DJ.NotificationProvider.showPromptPopup({
            icon: "rocket-launch",
            title: "worldBuilder:unpublishAsGameConfirmTitle",
            subtitle: "worldBuilder:unpublishAsGameConfirmSubtitle",
            confirmText: "worldBuilder:unpublishAsGame",
            cancelText: "general:cancel",
            unlockPointerKey: "unpublishGamePrompt"
          }).getResult().then((JJ => {
            !0 === JJ && WJ(!1)
          }))
        },
        editSourceWorld: function() {
          QJ("Loading"), hJ.e.getSourceWorld(rJ.schematicId).then((JJ => {
            jJ.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, qJ.h)("other"), xJ((0, UJ.c)("classic", JJ)), null === cJ || void 0 === cJ || cJ()
          })).catch((JJ => {
            console.error("Failed to get source world:", JJ), QJ("Error"), setTimeout((() => {
              QJ("Enter")
            }), 1e3)
          }))
        },
        playGame: function() {
          jJ.gameBridge.send("leaveGame", {
            reloadPath: "/"
          }), xJ((0, AJ.t)((0, eJ.p)(rJ.schematicId), rJ)), null === cJ || void 0 === cJ || cJ()
        }
      }
    }
  },
  4351: () => {}
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);