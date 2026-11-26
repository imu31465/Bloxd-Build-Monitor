export const id = 118;
export const ids = [118];
export const modules = {
  5458: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => YU,
      g: () => EU,
      j: () => NU
    });
    zU(5465);
    var cU = zU(1193),
      yU = zU(1106),
      QU = zU.n(yU),
      AU = zU(1420),
      FU = (zU(61), zU(4775)),
      oU = zU(1390),
      DU = zU(1305);

    function EU(UU) {
      let {
        children: XU,
        label: zU,
        className: yU,
        circleInfoText: FU,
        disabled: EU,
        onLabelClick: YU
      } = UU;
      const {
        t: NU
      } = (0, cU.I)(), IU = (0, DU.jsxs)("div", {
        className: QU()("Label", {
          ClickableLabel: void 0 !== YU
        }),
        onClick: YU,
        children: [NU(zU), FU && (0, DU.jsx)(oU.d, {
          name: "circle-info"
        })]
      });
      return (0, DU.jsxs)("div", {
        className: QU()("LabeledInput", {
          [yU]: yU,
          DisabledLabelInput: EU
        }),
        children: [FU && (0, DU.jsx)(AU.d, {
          tooltipInner: (0, DU.jsx)("div", {
            className: "LabeledInputTooltip",
            children: NU(FU)
          }),
          children: IU
        }), !FU && IU, XU]
      })
    }

    function YU(UU) {
      let {
        checked: XU,
        setChecked: zU
      } = UU;
      return (0, DU.jsx)("div", {
        className: "OtherInput ClickableOtherInput",
        "data-pad-focusable": !0,
        onClick: UU => {
          zU(!XU)
        },
        children: (0, DU.jsx)(FU.d, {
          checked: XU,
          onChange: UU => {
            zU(UU.target.checked)
          },
          disabled: !1
        })
      })
    }

    function NU(UU) {
      let {
        checked: XU,
        setChecked: zU,
        disabled: cU
      } = UU;
      return (0, DU.jsx)("div", {
        className: QU()("SwitchContainer", {
          SwitchContainerDisabled: cU
        }),
        onClick: () => {
          cU || zU(!XU)
        },
        children: (0, DU.jsx)(FU.d, {
          className: "SwitchCheckbox",
          checked: XU,
          onChange: UU => {
            zU(UU.target.checked)
          },
          disabled: !!cU
        })
      })
    }
  },
  5471: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => DU
    });
    var cU = zU(1106),
      yU = zU.n(cU),
      QU = zU(5057),
      AU = zU(1193),
      FU = zU(1305);
    const oU = [...QU.j, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function DU(UU) {
      const {
        disabled: XU,
        hideWrapper: zU
      } = UU, {
        t: cU
      } = (0, AU.I)(), DU = UU.advancedMode ? oU.map((XU => [XU, UU.callbacks[XU]])) : QU.j.map((XU => [XU, UU.callbacks[XU]])), YU = (0, FU.jsx)("div", {
        className: yU()("PluginsGrid", {
          SectionBody: !zU
        }),
        children: DU.map((UU => {
          let [zU, cU] = UU;
          return (0, FU.jsx)(EU, {
            plugin: zU,
            callbacks: cU,
            disabled: XU
          }, zU)
        }))
      });
      return zU ? YU : (0, FU.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, FU.jsx)("div", {
          className: "SectionTitle",
          children: cU("worldBuilder:pluginsSection")
        }), YU]
      })
    }

    function EU(UU) {
      let {
        plugin: XU,
        callbacks: {
          isEnabled: zU,
          YC: cU
        },
        disabled: QU
      } = UU;
      const {
        t: oU
      } = (0, AU.I)(), DU = zU();
      return (0, FU.jsxs)("div", {
        className: yU()("PluginCard", {
          PluginCardEnabled: DU,
          PluginCardDisabledForm: QU
        }),
        "data-pad-focusable": !0,
        "aria-disabled": QU || void 0,
        onClick: () => {
          QU || cU(!DU)
        },
        children: [(0, FU.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, FU.jsx)("img", {
            src: `/textures/games/classic/customGames/${XU}.png`,
            alt: XU
          })
        }), (0, FU.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, FU.jsx)("div", {
            className: "PluginCardTitle",
            children: oU(YU[XU])
          }), (0, FU.jsx)("div", {
            className: "PluginCardDescription",
            children: oU(NU[XU])
          })]
        }), (0, FU.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: oU(DU ? "general:on" : "general:off")
        })]
      })
    }
    const YU = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      NU = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  5454: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => DX,
      c: () => oX,
      d: () => FX,
      f: () => EX
    });
    var cU = zU(61),
      yU = zU(1410),
      QU = zU(1494),
      AU = zU(1726),
      FU = zU(1193),
      oU = zU(1384),
      DU = zU(1420),
      EU = zU(1390),
      YU = zU(1236),
      NU = zU(1106),
      IU = zU.n(NU),
      pU = zU(320),
      aU = zU(5057),
      tU = zU(1258),
      gU = zU(5458),
      kU = zU(3490),
      GU = zU(5471),
      BU = zU(1305);

    function ZU(UU) {
      let {
        icon: XU,
        title: zU,
        disabled: cU,
        children: yU
      } = UU;
      return (0, BU.jsxs)("div", {
        className: IU()("ManageCard", {
          ManageCardDisabled: cU
        }),
        children: [(0, BU.jsxs)("div", {
          className: "ManageCardHead",
          children: [(0, BU.jsx)("div", {
            className: "ManageCardIcon",
            children: (0, BU.jsx)(EU.d, {
              name: XU
            })
          }), (0, BU.jsx)("div", {
            children: (0, BU.jsx)("h2", {
              className: "ManageCardTitle",
              children: zU
            })
          })]
        }), (0, BU.jsxs)("div", {
          className: "ManageCardBody",
          children: [yU, cU && (0, BU.jsx)("div", {
            className: "ManageCardDisabledOverlay"
          })]
        })]
      })
    }

    function RU(UU) {
      let {
        label: XU,
        caption: zU,
        children: cU
      } = UU;
      return (0, BU.jsxs)("div", {
        className: "ManageStackedField",
        children: [(0, BU.jsx)("div", {
          className: "ManageStackedFieldLabel",
          children: XU
        }), cU, zU && (0, BU.jsx)("div", {
          className: "ManageStackedFieldCaption",
          children: zU
        })]
      })
    }

    function PU(UU) {
      let {
        label: XU,
        caption: zU,
        disabled: cU,
        children: yU
      } = UU;
      return (0, BU.jsxs)("div", {
        className: IU()("ManageField", {
          ManageFieldDisabled: cU
        }),
        children: [(0, BU.jsxs)("div", {
          className: "ManageFieldText",
          children: [(0, BU.jsx)("div", {
            className: "ManageFieldLabel",
            children: XU
          }), (0, BU.jsx)("div", {
            className: "ManageFieldCaption",
            children: zU
          })]
        }), (0, BU.jsx)("div", {
          className: "ManageFieldControl",
          children: yU
        })]
      })
    }

    function WU(UU) {
      var XU, zU;
      let {
        schematicData: cU,
        updateSchematicData: yU,
        publishFormEnabled: QU,
        formEnabled: AU
      } = UU;
      const {
        t: oU
      } = (0, FU.I)(), DU = !QU, EU = {
        tpRequests: {
          isEnabled: () => !cU.disableTpRequests,
          YC: UU => yU("disableTpRequests", !UU)
        },
        spawnProtection: {
          isEnabled: () => !cU.disableSpawnProtection,
          YC: UU => yU("disableSpawnProtection", !UU)
        },
        spawnReset: {
          isEnabled: () => !!cU.enableSpawnReset,
          YC: UU => yU("enableSpawnReset", UU)
        },
        smpMarketplace: {
          isEnabled: () => !!cU.enableSmpMarketplace,
          YC: UU => yU("enableSmpMarketplace", UU)
        },
        survivalGuns: {
          isEnabled: () => !!cU.enableSurvivalGuns,
          YC: UU => yU("enableSurvivalGuns", UU)
        },
        fallDamage: {
          isEnabled: () => !cU.disableFallDamage,
          YC: UU => yU("disableFallDamage", !UU)
        },
        dayNight: {
          isEnabled: () => !!cU.enableDayNight,
          YC: UU => yU("enableDayNight", UU)
        }
      };
      return (0, BU.jsxs)(BU.Fragment, {
        children: [!1 === cU.schematicContainsSpawnBlock && (0, BU.jsx)("div", {
          className: "ManageWarningBanner",
          children: oU("worldBuilder:mustContainSpawnBlock")
        }), (0, BU.jsxs)("div", {
          className: "ManageSettingsGrid",
          children: [(0, BU.jsxs)(ZU, {
            icon: "globe",
            title: oU("worldBuilder:worldRulesSection"),
            disabled: !AU,
            children: [(0, BU.jsx)(PU, {
              label: oU("classic:defaultGamemode"),
              caption: oU("classic:defaultGamemodeDescription"),
              disabled: DU,
              children: (0, BU.jsx)(kU.d, {
                controlClassName: "ManageDropdown",
                options: aU.E.map((UU => ({
                  value: UU,
                  label: pU.u[UU]
                }))),
                value: cU.defaultGamemode,
                onChange: UU => yU("defaultGamemode", UU.value)
              })
            }), (0, BU.jsx)(PU, {
              label: oU("classic:voidDeathHeight"),
              caption: oU("classic:voidDeathHeightDescription"),
              disabled: DU,
              children: (0, BU.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, BU.jsx)("input", {
                  type: "number",
                  max: tU.D,
                  value: null !== (XU = cU.voidDeathHeight) && void 0 !== XU ? XU : "",
                  onChange: UU => {
                    const XU = parseInt(UU.target.value);
                    yU("voidDeathHeight", XU)
                  }
                }), (0, BU.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: oU("worldBuilder:blocksUnit")
                })]
              })
            }), (0, BU.jsx)(PU, {
              label: oU("classic:worldBorder"),
              caption: oU("classic:worldBorderDescription"),
              disabled: DU,
              children: (0, BU.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, BU.jsx)("input", {
                  type: "number",
                  min: tU.J,
                  max: tU.F,
                  placeholder: oU("worldBuilder:noWorldBorderLimit"),
                  value: null !== (zU = cU.worldBorder) && void 0 !== zU ? zU : "",
                  onChange: UU => {
                    const XU = parseInt(UU.target.value);
                    yU("worldBorder", isNaN(XU) ? null : XU)
                  }
                }), (0, BU.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: oU("worldBuilder:blocksUnit")
                })]
              })
            }), (0, BU.jsx)(PU, {
              label: oU("classic:disableMobs"),
              caption: oU("classic:disableMobsDescription"),
              disabled: DU,
              children: (0, BU.jsx)(gU.j, {
                checked: cU.disableMobs,
                setChecked: UU => yU("disableMobs", UU),
                disabled: DU
              })
            })]
          }), (0, BU.jsxs)(ZU, {
            icon: "user-group",
            title: oU("worldBuilder:playerAndLobbySection"),
            disabled: !AU,
            children: [(0, BU.jsx)(PU, {
              label: oU("classic:disableKeepInventory"),
              caption: oU("classic:disableKeepInventoryDescription"),
              disabled: DU,
              children: (0, BU.jsx)(gU.j, {
                checked: cU.disableKeepInventory,
                setChecked: UU => yU("disableKeepInventory", UU),
                disabled: DU
              })
            }), (0, BU.jsx)(PU, {
              label: oU("classic:persistInventory"),
              caption: oU("classic:persistInventoryDescription"),
              disabled: DU,
              children: (0, BU.jsx)(kU.d, {
                controlClassName: "ManageDropdown",
                options: aU.n.map((UU => ({
                  value: UU,
                  label: pU.k[UU]
                }))),
                value: cU.persistInventory,
                onChange: UU => yU("persistInventory", UU.value)
              })
            }), (0, BU.jsx)(PU, {
              label: oU("classic:persistWorld"),
              caption: oU("classic:persistWorldDescription"),
              disabled: DU,
              children: (0, BU.jsx)(gU.j, {
                checked: cU.persistWorld,
                setChecked: UU => yU("persistWorld", UU),
                disabled: DU
              })
            }), (0, BU.jsx)(PU, {
              label: oU("classic:disableLobbySpawn"),
              caption: oU("classic:disableLobbySpawnDescription"),
              disabled: DU,
              children: (0, BU.jsx)(gU.j, {
                checked: cU.disableLobbySpawn,
                setChecked: UU => yU("disableLobbySpawn", UU),
                disabled: DU
              })
            }), (0, BU.jsx)(PU, {
              label: oU("classic:hideLobbyCode"),
              caption: oU("classic:hideLobbyCodeDescription"),
              disabled: DU,
              children: (0, BU.jsx)(gU.j, {
                checked: cU.hideLobbyCode,
                setChecked: UU => yU("hideLobbyCode", UU),
                disabled: DU
              })
            })]
          })]
        }), (0, BU.jsx)(ZU, {
          icon: "layer-group",
          title: oU("worldBuilder:pluginsSection"),
          disabled: !AU,
          children: (0, BU.jsx)(GU.b, {
            callbacks: EU,
            disabled: DU,
            advancedMode: !0,
            hideWrapper: !0
          })
        })]
      })
    }
    var dU = zU(5478),
      LU = zU(1624),
      eU = zU(1545),
      CU = zU(3873),
      wU = zU(1129),
      qU = zU(5424),
      OU = zU(5490),
      SU = zU(1498),
      rU = zU(5487);
    const uU = 50,
      fU = .3;
    async function iU(UU) {
      const XU = await
      function(UU) {
        return new Promise(((XU, zU) => {
          const cU = new FileReader;
          cU.onload = () => XU(cU.result), cU.onerror = zU, cU.readAsDataURL(UU)
        }))
      }(UU), zU = await
      function(UU) {
        return new Promise(((XU, zU) => {
          const cU = new Image;
          cU.onload = () => XU(cU), cU.onerror = () => zU(new Error("Failed to load image")), cU.src = UU
        }))
      }(XU);
      if (zU.naturalHeight > zU.naturalWidth) throw new HU;
      const cU = 1024 * uU,
        {
          dataUrl: yU,
          finalQuality: QU
        } = function(UU, XU) {
          const zU = document.createElement("canvas");
          zU.width = UU.naturalWidth, zU.height = UU.naturalHeight, zU.getContext("2d").drawImage(UU, 0, 0);
          let cU = .92,
            yU = zU.toDataURL("image/jpeg", cU);
          for (; .75 * yU.length > XU && cU > .05;) cU -= .05, yU = zU.toDataURL("image/jpeg", cU);
          return {
            dataUrl: yU,
            finalQuality: cU
          }
        }(zU, cU);
      if (Math.ceil(.75 * yU.length) > cU) throw new MU;
      return {
        base64Jpg: yU,
        heavilyCompressed: QU < fU
      }
    }
    class HU extends Error {}
    class MU extends Error {}

    function vU(UU) {
      var XU;
      let {
        schematicId: zU,
        hasReadUploadPolicy: yU,
        onPolicyValidationError: oU,
        onThumbnailReady: DU
      } = UU;
      const {
        t: NU
      } = (0, FU.I)(), [pU, aU] = (0, cU.useState)(null), [tU, gU] = (0, cU.useState)(""), [kU, GU] = (0, cU.useState)(""), [ZU, RU] = (0, cU.useState)(!0), [PU, WU] = (0, cU.useState)(!1), dU = (0, cU.useRef)(!1), [LU, eU] = (0, cU.useState)(null), [CU, wU] = (0, cU.useState)(!1), [qU, SU] = (0, cU.useState)(!1), rU = (0, cU.useRef)(0), {
        getRootProps: uU,
        getInputProps: fU,
        isDragActive: vU
      } = (0, OU.b)({
        accept: {
          "image/*": [".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp"]
        },
        multiple: !1,
        onDrop: async UU => {
          if (0 === UU.length) return;
          const XU = UU[0],
            zU = ++rU.current;
          eU(null), wU(!1), aU(null), gU(XU.name);
          try {
            const UU = await iU(XU);
            if (zU !== rU.current) return;
            aU(UU), wU(UU.heavilyCompressed)
          } catch (cU) {
            if (zU !== rU.current) return;
            eU(NU(cU instanceof HU ? "thumbnail:portraitImagesNotAllowed" : cU instanceof MU ? "thumbnail:couldNotCompressImage" : "thumbnail:failedToUploadImage"))
          }
        },
        useFsAccessApi: !1
      }), VU = tU.length <= 30 ? tU : `${tU.slice(0,27)}...`, sU = null !== (XU = null === pU || void 0 === pU ? void 0 : pU.base64Jpg) && void 0 !== XU ? XU : null, nU = kU.trim(), mU = nU.length >= YU.j && nU.length <= YU.i, lU = qU && !pU && !LU, xU = qU && !mU;
      return (0, BU.jsxs)("div", {
        className: "ThumbnailUploadContainer",
        children: [(0, BU.jsxs)("div", {
          ...uU({
            className: IU()("ThumbnailUploadDropzone", {
              ActiveDrag: vU,
              ValidationError: lU
            })
          }),
          children: [(0, BU.jsx)("input", {
            ...fU()
          }), !vU && sU ? (0, BU.jsxs)(BU.Fragment, {
            children: [(0, BU.jsxs)("div", {
              className: "ThumbnailAspectPreviews",
              children: [(0, BU.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, BU.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "1:1"
                }), (0, BU.jsx)("div", {
                  className: "ThumbnailAspectFrame Square",
                  children: (0, BU.jsx)("img", {
                    src: sU,
                    alt: "1:1 preview"
                  })
                })]
              }), (0, BU.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, BU.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "16:9"
                }), (0, BU.jsx)("div", {
                  className: "ThumbnailAspectFrame Wide",
                  children: (0, BU.jsx)("img", {
                    src: sU,
                    alt: "16:9 preview"
                  })
                })]
              })]
            }), (0, BU.jsxs)("div", {
              children: [(0, BU.jsx)("div", {
                className: "ThumbnailUploadInstructions Active",
                children: VU
              }), (0, BU.jsx)("div", {
                className: "ThumbnailUploadInstructions Preview",
                children: NU("thumbnail:preview")
              })]
            })]
          }) : (0, BU.jsxs)(BU.Fragment, {
            children: [(0, BU.jsx)("div", {
              className: "ThumbnailUploadIcon",
              children: (0, BU.jsx)(EU.d, {
                name: "image"
              })
            }), (0, BU.jsx)("div", {
              className: "ThumbnailUploadInstructions",
              children: NU("thumbnail:dragImageHere")
            })]
          })]
        }), lU && (0, BU.jsx)("div", {
          className: "ThumbnailUploadError",
          children: NU("thumbnail:imageRequired")
        }), (0, BU.jsx)(AU.e, {
          className: IU()("ThumbnailUploadNameInput", {
            ValidationError: xU
          }),
          placeholderText: NU("thumbnail:thumbnailName"),
          defaultValue: kU,
          onValueChange: UU => {
            GU(UU)
          },
          maxLength: YU.i
        }), xU && (0, BU.jsx)("div", {
          className: "ThumbnailUploadError",
          children: NU("thumbnail:nameRequired", {
            min: YU.j,
            max: YU.i
          })
        }), (0, BU.jsxs)("label", {
          className: "ThumbnailUploadCheckbox",
          children: [(0, BU.jsx)("input", {
            type: "checkbox",
            checked: ZU,
            onChange: UU => {
              RU(UU.target.checked)
            }
          }), NU("thumbnail:setAsThumbnailOnceApproved")]
        }), CU && (0, BU.jsx)("div", {
          className: "ThumbnailUploadWarning",
          children: NU("thumbnail:heavyCompressionWarning")
        }), LU && (0, BU.jsx)("div", {
          className: "ThumbnailUploadError",
          children: LU
        }), (0, BU.jsx)(QU.l, {
          disabled: PU,
          className: "ThumbnailUploadButton",
          onClick: async () => {
            if (SU(!0), !dU.current && pU && mU && yU) {
              dU.current = !0, WU(!0), eU(null);
              try {
                await DU(pU.base64Jpg, nU, ZU ? zU : null)
              } catch (UU) {
                eU(UU.errorMessageForUser ? NU(UU.errorMessageForUser, UU.errorMessageTranslationParams) : NU("thumbnail:failedToUploadImage"))
              } finally {
                dU.current = !1, WU(!1)
              }
            } else yU || oU()
          },
          children: NU(PU ? "thumbnail:processing" : "thumbnail:uploadThumbnail")
        })]
      })
    }
    const VU = 2e3;

    function sU(UU) {
      let {
        schematicId: XU,
        ownedThumbnailCount: zU,
        onClose: yU,
        onThumbnailReady: QU
      } = UU;
      const {
        t: AU
      } = (0, FU.I)(), {
        userContext: DU
      } = (0, wU.d)(), [NU, pU] = (0, cU.useState)(!1), [aU, tU] = (0, cU.useState)(!1), [gU, kU] = (0, cU.useState)(!1), GU = (0, cU.useRef)(), {
        loading: ZU,
        eligibility: RU
      } = (0, rU.e)(), PU = (0, rU.h)();
      (0, cU.useEffect)((() => () => {
        clearTimeout(GU.current)
      }), []);
      const WU = [];
      DU.isLoggedIn() || WU.push(AU("thumbnail:mustBeLoggedInToUpload")), zU >= YU.N && WU.push(AU("thumbnail:thumbnailLimitReachedPleaseDelete", {
        max: YU.N
      }));
      const dU = null === RU || void 0 === RU ? void 0 : RU.thumbnailUploadWait;
      if (dU && WU.push(PU("accountAge" === dU.reason ? "thumbnail:accountTooNewUntil" : "thumbnail:uploadCooldownUntil", dU.until)), !NU && WU.length > 0) return (0, BU.jsxs)("div", {
        className: "ThumbnailUploaderInner",
        children: [(0, BU.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: AU("thumbnail:cannotUploadThumbnail")
        }), WU.map((UU => (0, BU.jsxs)("div", {
          className: "CannotUploadThumbnailItem",
          children: [(0, BU.jsx)(EU.d, {
            name: "triangle-exclamation"
          }), (0, BU.jsx)("span", {
            children: UU
          })]
        }, UU)))]
      });
      if (ZU) return (0, BU.jsx)("div", {
        className: "ThumbnailUploaderInner",
        children: (0, BU.jsx)(oU.b, {})
      });
      return (0, BU.jsxs)("div", {
        className: IU()("ThumbnailUploaderInner", {
          ThumbnailUploaderSuccess: NU
        }),
        children: [NU && (0, BU.jsxs)("div", {
          className: "ThumbnailUploadSuccessOverlay",
          children: [(0, BU.jsxs)("div", {
            className: "ThumbnailUploadSuccessIcon FullyFancyText AnimFadeInScaleUp",
            children: [(0, BU.jsx)(EU.d, {
              name: "check"
            }), (0, BU.jsx)(SU.e, {})]
          }), (0, BU.jsx)("div", {
            className: "ThumbnailUploadSuccessText AnimFadeInScaleUp",
            children: AU("thumbnail:thumbnailUploaded")
          })]
        }), (0, BU.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: AU("thumbnail:uploadThumbnail")
        }), (0, BU.jsxs)("div", {
          className: "ThumbnailUploaderBody",
          children: [(0, BU.jsxs)("div", {
            className: "ThumbnailUploaderLeft",
            children: [(0, BU.jsx)("h3", {
              className: "SchematicPopupSubtitle",
              children: AU("thumbnail:chooseImage", {
                maxSizeKb: uU
              })
            }), (0, BU.jsx)(vU, {
              schematicId: XU,
              hasReadUploadPolicy: aU,
              onPolicyValidationError: () => {
                kU(!0)
              },
              onThumbnailReady: async (UU, XU, zU) => {
                await QU(UU, XU, zU), pU(!0), GU.current = setTimeout(yU, VU)
              }
            })]
          }), (0, BU.jsxs)("div", {
            className: "ThumbnailUploadPolicy",
            children: [(0, BU.jsx)("h3", {
              className: "ThumbnailUploadPolicyTitle",
              children: AU("thumbnail:uploadPolicy")
            }), (0, BU.jsxs)("ul", {
              className: "ThumbnailUploadPolicyList",
              children: [(0, BU.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, BU.jsx)(EU.d, {
                  name: "check"
                }), (0, BU.jsx)("span", {
                  children: AU("thumbnail:policyFollowGuidelines")
                })]
              }), (0, BU.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, BU.jsx)(EU.d, {
                  name: "check"
                }), (0, BU.jsx)("span", {
                  children: AU("thumbnail:policyInGameAssets")
                })]
              }), (0, BU.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, BU.jsx)(EU.d, {
                  name: "check"
                }), (0, BU.jsx)("span", {
                  children: AU("thumbnail:policyLimitText")
                })]
              }), (0, BU.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, BU.jsx)(EU.d, {
                  name: "x"
                }), (0, BU.jsx)("span", {
                  children: AU("thumbnail:policyCopyrightContent")
                })]
              }), (0, BU.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, BU.jsx)(EU.d, {
                  name: "x"
                }), (0, BU.jsx)("span", {
                  children: AU("thumbnail:policyOutOfGameAssets")
                })]
              }), (0, BU.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, BU.jsx)(EU.d, {
                  name: "x"
                }), (0, BU.jsx)("span", {
                  children: AU("thumbnail:policyBloxdTags")
                })]
              }), (0, BU.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, BU.jsx)(EU.d, {
                  name: "x"
                }), (0, BU.jsx)("span", {
                  children: AU("thumbnail:policyMustReflectGame")
                })]
              })]
            }), (0, BU.jsxs)("label", {
              className: IU()("ThumbnailUploadCheckbox Policy", {
                ValidationError: gU && !aU
              }),
              children: [(0, BU.jsx)("input", {
                type: "checkbox",
                checked: aU,
                onChange: UU => {
                  tU(UU.target.checked)
                }
              }), AU("thumbnail:agreeToUploadPolicy")]
            }), gU && !aU && (0, BU.jsx)("div", {
              className: "ThumbnailPolicyError",
              children: AU("thumbnail:policyRequired")
            })]
          })]
        })]
      })
    }

    function nU(UU) {
      let {
        imageUrl: XU,
        thumbnailName: zU,
        onClose: cU
      } = UU;
      const {
        t: yU
      } = (0, FU.I)();
      return (0, BU.jsxs)("div", {
        className: "ThumbnailDeleteConfirm",
        children: [(0, BU.jsx)("div", {
          className: "ThumbnailDeleteConfirmTitle",
          children: yU("thumbnail:deleteThumbnail")
        }), (0, BU.jsxs)("div", {
          className: "ThumbnailDeleteConfirmImageContainer",
          children: [null !== XU && (0, BU.jsx)("img", {
            className: "ThumbnailDeleteConfirmImage",
            src: XU,
            alt: zU
          }), (0, BU.jsx)("div", {
            className: "ThumbnailGridItemLabel",
            children: zU
          })]
        }), (0, BU.jsx)("div", {
          className: "ThumbnailDeleteConfirmSubtitle",
          children: yU("thumbnail:deleteThumbnailConfirmation")
        }), (0, BU.jsxs)("div", {
          className: "ThumbnailDeleteConfirmButtons",
          children: [(0, BU.jsxs)(QU.G, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => cU(!0),
            children: [(0, BU.jsx)(EU.d, {
              name: "trash-can"
            }), " ", yU("general:delete")]
          }), (0, BU.jsx)(QU.j, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => cU(!1),
            children: yU("general:cancel")
          })]
        })]
      })
    }
    var mU = zU(220);
    const lU = ["thumbnail:policyFollowGuidelines"],
      xU = {
        "custom-game-bad-thumbnail": {
          policyRows: ["thumbnail:rejectionBreaksUploadPolicy"],
          example: null,
          fix: "thumbnail:rejectionBadThumbnailFix"
        },
        "thumbnail-random-irrelevant-content": {
          policyRows: ["thumbnail:policyMustReflectGame"],
          example: "thumbnail:rejectionIrrelevantExample",
          fix: "thumbnail:rejectionIrrelevantFix"
        },
        "thumbnail-copyright-content": {
          policyRows: ["thumbnail:policyCopyrightContent"],
          example: "thumbnail:rejectionCopyrightExample",
          fix: "thumbnail:rejectionCopyrightFix"
        },
        "thumbnail-unauthorized-bloxd-branding": {
          policyRows: ["thumbnail:policyOutOfGameAssets", "thumbnail:policyBloxdTags"],
          example: "thumbnail:rejectionUnauthorisedBrandingExample",
          fix: "thumbnail:rejectionUnauthorisedBrandingFix"
        },
        "thumbnail-sexual-content": {
          policyRows: lU,
          example: "thumbnail:rejectionSexualExample",
          fix: "thumbnail:rejectionSexualFix"
        },
        "thumbnail-substances-content": {
          policyRows: lU,
          example: "thumbnail:rejectionSubstancesExample",
          fix: "thumbnail:rejectionSubstancesFix"
        },
        "thumbnail-violent-gore-content": {
          policyRows: lU,
          example: "thumbnail:rejectionViolenceExample",
          fix: "thumbnail:rejectionViolenceFix"
        }
      };

    function JU(UU) {
      let {
        rejectedThumbnails: XU,
        isAcknowledging: zU,
        onAcknowledge: cU
      } = UU;
      const {
        t: yU
      } = (0, FU.I)();
      return (0, BU.jsxs)("div", {
        className: "ManageWarningBanner ThumbnailRejectionNotice",
        children: [(0, BU.jsx)("div", {
          className: "ThumbnailRejectionNoticeTitle",
          children: yU("thumbnail:rejectedByModerators")
        }), XU.map((UU => (0, BU.jsx)(jU, {
          rejected: UU
        }, UU.thumbnail.id))), (0, BU.jsx)(QU.l, {
          className: "ThumbnailRejectionNoticeButton",
          onClick: cU,
          disabled: zU,
          children: zU ? (0, BU.jsx)(oU.b, {}) : yU("thumbnail:gotIt")
        })]
      })
    }

    function jU(UU) {
      var XU;
      let {
        rejected: {
          thumbnail: zU,
          rejection: cU
        }
      } = UU;
      const {
        t: yU
      } = (0, FU.I)(), QU = null !== (XU = (0, mU.b)(xU, cU.policyId)) && void 0 !== XU ? XU : xU["custom-game-bad-thumbnail"], AU = new Date(cU.at).toLocaleDateString();
      return (0, BU.jsxs)("div", {
        className: "RejectedThumbnail",
        children: [(0, BU.jsxs)("div", {
          className: "RejectedThumbnailImage",
          children: [null !== zU.preview && (0, BU.jsx)("img", {
            src: zU.preview,
            alt: zU.name
          }), null === zU.preview && (0, BU.jsx)(EU.d, {
            name: "image-slash"
          })]
        }), (0, BU.jsxs)("div", {
          className: "RejectedThumbnailDetails",
          children: [(0, BU.jsx)("div", {
            className: "RejectedThumbnailName",
            children: zU.name
          }), (0, BU.jsx)("div", {
            children: null !== cU.gameName ? yU("thumbnail:rejectedGameAndDate", {
              game: cU.gameName,
              date: AU
            }) : AU
          }), null !== cU.reason && (0, BU.jsx)("div", {
            children: yU("creatorModeration:moderatorNote", {
              reason: cU.reason
            })
          }), QU.policyRows.length > 0 && (0, BU.jsx)("ul", {
            className: "RejectedThumbnailPolicyRows",
            children: QU.policyRows.map((UU => (0, BU.jsxs)("li", {
              children: [(0, BU.jsx)(EU.d, {
                name: "x"
              }), (0, BU.jsx)("span", {
                children: yU(UU)
              })]
            }, UU)))
          }), (0, BU.jsxs)("div", {
            children: [null !== QU.example && null === cU.reason && `${yU(QU.example)} `, yU(QU.fix)]
          })]
        })]
      })
    }
    var KU = zU(1203);

    function bU(UU) {
      return null !== UU.preview ? UU.preview : UU.approved ? `${KU.clientSideServerUrls.s3Url}/${(0,LU.d)(UU.id)}` : null
    }

    function TU(UU) {
      return null !== UU.pendingKey ? {
        pendingKey: UU.pendingKey
      } : {
        thumbnailId: UU.id
      }
    }

    function hU(UU) {
      var XU, zU;
      let {
        schematicData: AU,
        updateSchematicData: DU,
        publishFormEnabled: YU,
        onClose: NU
      } = UU;
      const {
        t: pU
      } = (0, FU.I)(), {
        userContext: aU,
        isUserContextUpdating: tU
      } = (0, wU.d)(), gU = (0, CU.b)(), [kU, GU] = (0, cU.useState)([]), [ZU, RU] = (0, cU.useState)([]), [PU, WU] = (0, cU.useState)(!0), [dU, LU] = (0, cU.useState)(!1), [OU, SU] = (0, cU.useState)(null !== (XU = AU.customThumbnailId) && void 0 !== XU ? XU : null), [rU, uU] = (0, cU.useState)(null), fU = (0, cU.useRef)(null !== (zU = AU.customThumbnailId) && void 0 !== zU ? zU : null), iU = (0, cU.useRef)(0), HU = (0, cU.useRef)(null), MU = (0, cU.useRef)(null), vU = (0, cU.useRef)(null), VU = (0, cU.useRef)(!1);

      function mU(UU, XU) {
        vU.current && (clearTimeout(vU.current), vU.current = null), uU(UU), null !== UU && XU && (vU.current = setTimeout((() => {
          uU(null), vU.current = null
        }), 5e3))
      }(0, cU.useEffect)((() => () => {
        clearTimeout(MU.current), clearTimeout(vU.current)
      }), []);
      const lU = (0, cU.useCallback)((() => {
        WU(!0), eU.c.getOwnedThumbnails(aU).then((UU => {
          const XU = [],
            zU = [];
          for (const cU of UU.thumbnails) cU.rejection ? XU.push({
            thumbnail: cU,
            rejection: cU.rejection
          }) : zU.push(cU);
          XU.sort(((UU, XU) => XU.rejection.at - UU.rejection.at)), zU.sort(((UU, XU) => {
            const zU = UU.approved ? 1 : 0,
              cU = (XU.approved ? 1 : 0) - zU;
            return 0 !== cU ? cU : XU.lastUpdatedAt - UU.lastUpdatedAt
          })), RU(XU), GU(zU)
        })).catch((UU => {
          console.error("Failed to fetch thumbnails:", UU)
        })).finally((() => {
          WU(!1)
        }))
      }), [aU]);
      async function xU(UU, XU, zU) {
        return eU.c.uploadSchematicThumbnail(aU, UU, XU, zU).then((() => {
          mU({
            text: pU("thumbnail:uploadedAwaitingModeration"),
            type: "success"
          }, !0), lU()
        }))
      }

      function jU() {
        iU.current = Date.now(), MU.current = null;
        const UU = HU.current;
        HU.current = null, mU({
          text: pU("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), eU.c.setSchematicThumbnail(aU, AU.schematicId, UU).then((() => {
          gU.current && (mU({
            text: pU("thumbnail:thumbnailUpdated"),
            type: "success"
          }, !0), fU.current = UU, DU("customThumbnailId", UU), DU("customThumbnailBlurhash", void 0), DU("customThumbnailVariants", void 0))
        })).catch((UU => {
          gU.current && (mU({
            text: UU.errorMessageForUser ? pU(UU.errorMessageForUser, UU.errorMessageTranslationParams) : pU("thumbnail:failedToSetThumbnail"),
            type: "error"
          }, !0), SU(fU.current))
        }))
      }

      function KU(UU) {
        SU(UU), HU.current = UU;
        const XU = Date.now() - iU.current;
        XU >= 1e3 ? jU() : (mU({
          text: pU("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), MU.current || (MU.current = setTimeout((() => {
          jU()
        }), 1e3 - XU)))
      }
      return (0, cU.useEffect)((() => {
        !1 === tU && lU()
      }), [tU, lU]), (0, BU.jsxs)("div", {
        className: "BloxdForm ThumbnailSection",
        children: [(0, BU.jsxs)("div", {
          className: "SectionTitle",
          children: [pU("thumbnail:gameThumbnail"), rU && (0, BU.jsx)("span", {
            className: IU()("ThumbnailActionMsg", `ThumbnailActionMsg--${rU.type}`),
            children: rU.text
          })]
        }), (0, BU.jsxs)("div", {
          className: "SectionBody",
          children: [ZU.length > 0 && (0, BU.jsx)(JU, {
            rejectedThumbnails: ZU,
            isAcknowledging: dU,
            onAcknowledge: async function() {
              LU(!0);
              const UU = await Promise.allSettled(ZU.map((UU => {
                let {
                  thumbnail: XU
                } = UU;
                return eU.c.deleteSchematicThumbnail(aU, TU(XU))
              })));
              if (!gU.current) return;
              LU(!1);
              const XU = UU.filter((UU => "rejected" === UU.status));
              XU.length > 0 && (console.error("Failed to acknowledge some thumbnail rejections:", XU), mU({
                text: pU("thumbnail:failedToHideRejections"),
                type: "error"
              }, !0)), lU()
            }
          }), (0, BU.jsxs)("div", {
            className: "ThumbnailGrid",
            children: [(0, BU.jsxs)("div", {
              className: IU()("ThumbnailGridItem ThumbnailGridItemDefault", {
                ThumbnailGridItemSelected: null === OU
              }),
              onClick: () => KU(null),
              children: [(0, BU.jsx)(qU.d, {
                game: {
                  schematicId: AU.schematicId,
                  imageBlurhash: AU.imageBlurhash
                }
              }), (0, BU.jsx)("div", {
                className: "ThumbnailGridItemLabel ThumbnailDefaultLabel",
                children: pU("general:default")
              })]
            }), PU && (0, BU.jsx)(oU.b, {}), kU.map((UU => {
              var XU;
              const zU = bU(UU);
              return (0, BU.jsxs)("div", {
                className: IU()("ThumbnailGridItem", {
                  ThumbnailGridItemSelected: UU.approved && OU === UU.id,
                  ThumbnailGridItemPending: !UU.approved
                }),
                onClick: () => {
                  UU.approved && KU(UU.id)
                },
                children: [null !== zU && (0, BU.jsx)("img", {
                  src: zU,
                  alt: UU.name
                }), (0, BU.jsx)(QU.G, {
                  className: "ThumbnailDeleteButton",
                  onClick: XU => async function(UU, XU) {
                    UU.stopPropagation();
                    const zU = await yU.NotificationProvider.showCustomPopup({
                        body: UU => (0, BU.jsx)(nU, {
                          imageUrl: bU(XU),
                          thumbnailName: XU.name,
                          onClose: XU => {
                            XU && (VU.current = !0), UU()
                          }
                        }),
                        middleScreenPopupClassName: "ThumbnailDeleteConfirmPopup",
                        onClose: NU
                      }).getResult(),
                      cU = VU.current;
                    VU.current = !1, cU && !0 === zU && (gU.current && mU({
                      text: pU("thumbnail:deletingThumbnail"),
                      type: "info"
                    }, !1), eU.c.deleteSchematicThumbnail(aU, TU(XU)).then((() => {
                      gU.current && (mU({
                        text: pU("thumbnail:thumbnailDeleted"),
                        type: "success"
                      }, !0), null !== XU.id && fU.current === XU.id && KU(null), lU())
                    })).catch((UU => {
                      gU.current && mU({
                        text: UU.errorMessageForUser ? pU(UU.errorMessageForUser, UU.errorMessageTranslationParams) : pU("thumbnail:failedToDeleteThumbnail"),
                        type: "error"
                      }, !0)
                    })))
                  }(XU, UU),
                  children: (0, BU.jsx)(EU.d, {
                    name: "trash-can"
                  })
                }), UU.approved && (0, BU.jsx)("div", {
                  className: "ThumbnailGridItemLabel",
                  children: UU.name
                }), !UU.approved && (0, BU.jsx)("div", {
                  className: "ThumbnailUnapprovedIcon",
                  children: (0, BU.jsx)(EU.d, {
                    name: "hourglass-clock"
                  })
                }), !UU.approved && (0, BU.jsxs)("div", {
                  className: "ThumbnailGridItemLabel ThumbnailPendingLabel",
                  children: [UU.name, (0, BU.jsx)("br", {}), pU("thumbnail:pendingApproval")]
                })]
              }, null !== (XU = UU.id) && void 0 !== XU ? XU : UU.pendingKey)
            })), (0, BU.jsxs)("div", {
              className: IU()("ThumbnailGridItem ThumbnailUploadTile", {
                ThumbnailUploadTileDisabled: !YU
              }),
              onClick: () => {
                YU && function(UU) {
                  let {
                    schematicId: XU,
                    ownedThumbnailCount: zU,
                    onThumbnailReady: cU,
                    onClose: QU
                  } = UU;
                  yU.NotificationProvider.showCustomPopup({
                    body: UU => (0, BU.jsx)(sU, {
                      schematicId: XU,
                      ownedThumbnailCount: zU,
                      onClose: UU,
                      onThumbnailReady: cU
                    }),
                    middleScreenPopupClassName: "SchematicThumbnailPopup",
                    onClose: QU,
                    unlockPointerKey: "schematicThumbnailUploaderPopup"
                  })
                }({
                  schematicId: AU.schematicId,
                  ownedThumbnailCount: kU.length,
                  onThumbnailReady: xU,
                  onClose: NU
                })
              },
              children: [(0, BU.jsx)(EU.d, {
                name: "plus"
              }), (0, BU.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: pU("thumbnail:uploadThumbnail")
              })]
            })]
          })]
        })]
      })
    }
    var UX = zU(2219),
      XX = zU(5527),
      zX = zU(5536),
      cX = zU(5593);

    function yX(UU) {
      let {
        schematicData: XU,
        setTexturePack: zU,
        initializeTexturePack: yU,
        publishFormEnabled: QU
      } = UU;
      const {
        t: AU
      } = (0, FU.I)(), [oU, DU] = (0, cU.useState)(null), [EU, YU] = (0, cU.useState)(null), [NU, pU] = (0, cU.useState)(!1), aU = (0, CU.b)(), tU = QU && !NU, gU = XU.customTexturePackKey;

      function kU(UU) {
        var XU;
        DU(UU.metaData.id), YU(null !== (XU = UU.metaData.fromFolderName) && void 0 !== XU ? XU : null), (UU.metaData.id !== UX.p.CUSTOM || UU.metaData.fromFolderName) && zU(UU)
      }
      return (0, cU.useEffect)((() => {
        gU && (pU(!0), (0, XX.c)(gU).then((UU => {
          var XU;
          aU.current && (UU ? (DU(UU.metaData.id), YU(null !== (XU = UU.metaData.fromFolderName) && void 0 !== XU ? XU : null), yU(UU)) : console.error(`No texture pack at ${gU}`))
        })).catch((UU => {
          console.error("Error fetching texture pack: ", UU)
        })).finally((() => {
          pU(!1)
        })))
      }), [gU, yU, aU]), (0, BU.jsxs)("div", {
        className: "BloxdForm TexturePackSection",
        children: [(0, BU.jsx)("div", {
          className: "SectionTitle",
          children: AU("customTexturePack:customTexturePack")
        }), (0, BU.jsxs)("div", {
          className: "TexturePackList",
          children: [(0, BU.jsx)("div", {
            className: IU()("TexturePack", {
              Selected: null === oU && !NU,
              Disabled: !tU
            }),
            onClick: () => {
              tU && (DU(null), zU(null), YU(null))
            },
            children: (0, BU.jsx)("div", {
              className: "TexturePackName",
              children: "No Override"
            })
          }), Object.values(UX.p).map((UU => (0, BU.jsx)(zX.h, {
            id: UU,
            isSelected: UU === oU,
            setSelected: kU,
            disabled: !tU
          }, UU)))]
        }), oU === UX.p.CUSTOM && (0, BU.jsx)(cX.b, {
          folderName: EU,
          onTexturePackUpdated: kU,
          disabled: !tU,
          maxFileSizeMb: 25,
          packOwner: "customGame"
        })]
      })
    }
    var QX = zU(5632);

    function AX(UU) {
      var XU;
      let {
        gameCategory: zU,
        setGameCategory: cU,
        disabled: yU
      } = UU;
      const AU = null !== (XU = (0, pU.ib)(zU)) && void 0 !== XU ? XU : "other";
      return (0, BU.jsxs)("div", {
        className: "GameCategoryPicker",
        children: [(0, BU.jsx)(gU.g, {
          label: "worldBuilder:gameCategoryGroup",
          className: "GameCategoryGroup",
          disabled: yU,
          children: (0, BU.jsx)(kU.d, {
            options: pU.Y.map((UU => ({
              value: UU,
              label: pU.X[UU]
            }))),
            value: AU,
            onChange: UU => {
              UU.value !== AU && cU(pU.S[UU.value][0])
            }
          })
        }), (0, BU.jsx)(gU.g, {
          label: "worldBuilder:gameCategory",
          className: "GameCategory",
          disabled: yU,
          children: (0, BU.jsx)("div", {
            className: "GameCategoryOptions",
            children: pU.S[AU].map((UU => (0, BU.jsx)(QU.O, {
              active: UU === zU,
              onClick: () => {
                cU(UU)
              },
              children: (0, pU.gb)(UU)
            }, UU)))
          })
        })]
      })
    }

    function FX(UU) {
      let {
        editor: XU,
        onClose: zU
      } = UU;
      const {
        t: cU
      } = (0, FU.I)(), {
        schematicData: yU,
        updateSchematicData: QU,
        publishFormEnabled: oU,
        formEnabled: DU
      } = XU;
      return (0, BU.jsxs)(BU.Fragment, {
        children: [(0, BU.jsxs)(ZU, {
          icon: "pen-to-square",
          title: cU("worldBuilder:basicsSection"),
          disabled: !DU,
          children: [(0, BU.jsx)(RU, {
            label: cU("general:name"),
            caption: cU("worldBuilder:schematicNameTagsHint"),
            children: (0, BU.jsx)(AU.e, {
              className: "SchematicPageName",
              defaultValue: yU.name,
              onValueChange: UU => QU("name", UU),
              placeholderText: cU("worldBuilder:schematicNamePlaceholder"),
              maxLength: YU.eb
            })
          }), (0, BU.jsx)(RU, {
            label: cU("general:description"),
            children: (0, BU.jsx)(AU.e, {
              className: "SchematicPageDescription",
              useTextarea: !0,
              defaultValue: yU.description,
              onValueChange: UU => QU("description", UU),
              placeholderText: cU("worldBuilder:schematicDescriptionPlaceholder"),
              maxLength: YU.cb
            })
          }), (0, BU.jsx)(AX, {
            gameCategory: yU.gameCategory,
            setGameCategory: UU => QU("gameCategory", UU),
            disabled: !oU
          }), !0 === yU.gamePublished && (0, BU.jsx)(hU, {
            schematicData: yU,
            updateSchematicData: QU,
            publishFormEnabled: oU,
            onClose: function() {
              null === zU || void 0 === zU || zU()
            }
          })]
        }), (0, BU.jsx)(WU, {
          schematicData: yU,
          updateSchematicData: QU,
          publishFormEnabled: oU,
          formEnabled: DU
        }), !0 === yU.gamePublished && (0, BU.jsx)(ZU, {
          icon: "palette",
          title: cU("worldBuilder:texturePackSection"),
          disabled: !DU,
          children: (0, BU.jsx)(yX, {
            schematicData: yU,
            setTexturePack: XU.setTexturePack,
            initializeTexturePack: XU.initializeTexturePack,
            publishFormEnabled: oU
          })
        })]
      })
    }

    function oX(UU) {
      let {
        editor: XU
      } = UU;
      const {
        t: zU
      } = (0, FU.I)(), {
        schematicData: cU,
        formEnabled: yU,
        hasUnsavedChanges: AU,
        publishSuspendedUntil: YU
      } = XU, NU = (0, rU.l)(), IU = !0 === cU.gamePublished ? YU : null, pU = yU && AU && null === IU;
      return (0, BU.jsxs)("footer", {
        className: "SchematicPageFooter",
        children: [null !== IU && (0, BU.jsx)("div", {
          className: "SchematicPageFooterNotice",
          children: NU(IU)
        }), yU && AU && null === IU && (0, BU.jsxs)("div", {
          className: "SchematicPageFooterStatus",
          children: [(0, BU.jsx)("span", {
            className: "SchematicPageFooterStatusDot"
          }), zU("worldBuilder:unsavedChanges")]
        }), (0, BU.jsx)(DU.d, {
          tooltipInner: (0, BU.jsx)("div", {
            className: "SaveButtonTooltip",
            children: zU(yU && !AU ? "worldBuilder:saveChangesNoneDescription" : "worldBuilder:saveChangesDescription")
          }),
          children: (0, BU.jsxs)(QU.f, {
            className: "SaveChangesButton",
            onClick: () => XU.saveSchematic(cU.gamePublished),
            disabled: !pU,
            children: [(0, BU.jsxs)("span", {
              className: yU ? "" : "SaveChangesButtonBodyHidden",
              children: [(0, BU.jsx)(EU.d, {
                name: "wrench"
              }), " ", zU("worldBuilder:saveChanges")]
            }), !yU && (0, BU.jsx)(oU.b, {})]
          })
        })]
      })
    }

    function DX(UU) {
      let {
        schematic: XU,
        onSchematicUpdate: zU,
        onClose: yU,
        inSourceWorld: AU
      } = UU;
      const {
        t: oU
      } = (0, FU.I)();

      function DU() {
        null === yU || void 0 === yU || yU()
      }
      const EU = (0, QX.b)(XU, {
        onNavigateAway: DU,
        inSourceWorld: AU
      });
      return (0, cU.useEffect)((() => {
        null === zU || void 0 === zU || zU(EU.schematicData)
      }), [EU.schematicData, zU]), (0, BU.jsxs)("div", {
        className: "SchematicPage SchematicPagePopupVariant",
        children: [(0, BU.jsxs)("div", {
          className: "SchematicPageBody",
          children: [(0, BU.jsx)(QU.e, {
            onClick: DU,
            children: oU("worldBuilder:back")
          }), (0, BU.jsx)(ZU, {
            icon: "rocket-launch",
            title: oU("worldBuilder:actionsSection"),
            disabled: !EU.formEnabled,
            children: (0, BU.jsx)(dU.e, {
              editor: EU
            })
          }), (0, BU.jsx)(FX, {
            editor: EU,
            onClose: DU
          })]
        }), (0, BU.jsx)(oX, {
          editor: EU
        })]
      })
    }

    function EX(UU) {
      let {
        schematic: XU,
        onSchematicUpdate: zU,
        onClose: cU,
        inSourceWorld: QU
      } = UU;
      yU.NotificationProvider.showCustomPopup({
        body: UU => (0, BU.jsx)(DX, {
          schematic: XU,
          onSchematicUpdate: zU,
          onClose: UU,
          inSourceWorld: QU
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: cU,
        unlockPointerKey: "schematicPagePopup"
      })
    }
  },
  5478: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => NU
    });
    var cU = zU(1106),
      yU = zU.n(cU),
      QU = zU(1193),
      AU = zU(1390),
      FU = zU(1494),
      oU = zU(1420),
      DU = zU(1384),
      EU = zU(5487),
      YU = zU(1305);

    function NU(UU) {
      let {
        editor: XU,
        className: zU,
        publishRefusal: cU = null
      } = UU;
      const {
        t: NU
      } = (0, QU.I)(), {
        schematicData: IU,
        formEnabled: pU,
        publishFormEnabled: aU,
        publishSuspendedUntil: tU
      } = XU, gU = !pU || !aU, kU = (0, EU.l)();
      return (0, YU.jsxs)("div", {
        className: yU()("PublishButtonContainer", zU),
        children: [XU.canEditSourceWorld && (0, YU.jsxs)(FU.f, {
          onClick: XU.editSourceWorld,
          disabled: gU,
          children: [(0, YU.jsx)(AU.d, {
            name: "edit"
          }), " ", NU("worldBuilder:editSourceWorld")]
        }), !IU.gamePublished && (0, YU.jsx)(oU.d, {
          tooltipInner: (0, YU.jsx)("div", {
            className: "PublishButtonTooltip",
            children: null !== cU && void 0 !== cU ? cU : NU("worldBuilder:publishAsGameDescription")
          }),
          children: (0, YU.jsxs)(FU.l, {
            onClick: () => XU.saveSchematic(!0),
            disabled: gU || null !== cU || null !== tU,
            children: [(0, YU.jsx)(AU.d, {
              name: "rocket-launch"
            }), " ", NU("worldBuilder:publishAsGame"), " ", (0, YU.jsx)(AU.d, {
              name: "info-circle"
            })]
          })
        }), !0 === IU.gamePublished && (0, YU.jsxs)(YU.Fragment, {
          children: [(0, YU.jsx)(oU.d, {
            tooltipInner: (0, YU.jsx)("div", {
              className: "PublishButtonTooltip",
              children: NU("worldBuilder:unpublishAsGameDescription")
            }),
            children: (0, YU.jsxs)(FU.G, {
              onClick: XU.unpublishSchematic,
              disabled: gU,
              children: [(0, YU.jsx)(AU.d, {
                name: "rocket-launch"
              }), " ", NU("worldBuilder:unpublishAsGame"), " ", (0, YU.jsx)(AU.d, {
                name: "info-circle"
              })]
            })
          }), (0, YU.jsxs)(FU.f, {
            onClick: XU.playGame,
            disabled: gU,
            children: [(0, YU.jsx)(AU.d, {
              name: "joystick"
            }), " ", NU("general:playGame")]
          })]
        }), !pU && (0, YU.jsx)(DU.b, {
          loaderType: "Secondary"
        }), !IU.gamePublished && null !== tU && (0, YU.jsx)("div", {
          className: "PublishSuspendedNotice",
          children: kU(tU)
        })]
      })
    }
  },
  5527: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => yU
    });
    var cU = zU(1203);
    async function yU(UU) {
      const XU = await fetch(`${cU.clientSideServerUrls.s3Url}/${UU}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === XU.status || 403 === XU.status) return null;
      if (!XU.ok) throw new Error(`Failed to download the texture pack (${XU.status})`);
      return await XU.json()
    }
  },
  5487: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => FU,
      h: () => oU,
      l: () => DU
    });
    var cU = zU(61),
      yU = zU(1545),
      QU = zU(1193),
      AU = zU(1129);

    function FU() {
      let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      const {
        userContext: XU
      } = (0, AU.d)(), [zU, QU] = (0, cU.useState)((() => ({
        loading: UU && XU.isLoggedIn(),
        eligibility: null
      })));
      if ((0, cU.useEffect)((() => {
          if (!UU || !XU.isLoggedIn()) return void QU({
            loading: !1,
            eligibility: null
          });
          let zU = !1;
          return yU.c.getCreatorEligibility(XU).then((UU => {
            zU || QU({
              loading: !1,
              eligibility: UU
            })
          })).catch((UU => {
            console.warn("Failed to load creator eligibility", UU), zU || QU({
              loading: !1,
              eligibility: null
            })
          })), () => {
            zU = !0
          }
        }), [XU, UU]), null === zU.eligibility) return zU;
      const FU = Date.now(),
        {
          thumbnailUploadWait: oU,
          publishSuspendedUntil: DU
        } = zU.eligibility;
      return {
        loading: zU.loading,
        eligibility: {
          thumbnailUploadWait: null !== oU && oU.until > FU ? oU : null,
          publishSuspendedUntil: null !== DU && DU > FU ? DU : null
        }
      }
    }

    function oU() {
      const {
        t: UU,
        selectedLanguage: XU
      } = (0, QU.I)();
      return (zU, cU) => UU(zU, {
        date: (0, QU.f)(XU.code, zU, cU, {
          dateStyle: "medium",
          timeStyle: "short"
        })
      })
    }

    function DU() {
      const {
        t: UU,
        selectedLanguage: XU
      } = (0, QU.I)();
      return zU => {
        const cU = "worldBuilder:publishSuspended";
        return UU(cU, {
          date: (0, QU.f)(XU.code, cU, zU, {
            dateStyle: "medium",
            timeStyle: "short",
            timeZone: "UTC"
          })
        })
      }
    }
  },
  5632: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => kU
    });
    var cU = zU(61),
      yU = zU(1376),
      QU = zU(1079),
      AU = zU(173),
      FU = zU(1596),
      oU = zU(27),
      DU = zU(2005),
      EU = zU(1545),
      YU = zU(5026),
      NU = zU(1410),
      IU = zU(1936),
      pU = zU(1129),
      aU = zU(1568),
      tU = zU(5487);

    function gU(UU, XU) {
      return {
        schematicId: UU.schematicId,
        name: UU.name,
        description: UU.description,
        gamePublished: XU,
        gameCategory: UU.gameCategory,
        defaultGamemode: UU.defaultGamemode,
        voidDeathHeight: UU.voidDeathHeight,
        disableKeepInventory: UU.disableKeepInventory,
        disableTpRequests: UU.disableTpRequests,
        disableLobbySpawn: UU.disableLobbySpawn,
        disableMobs: UU.disableMobs,
        disableSpawnProtection: UU.disableSpawnProtection,
        disableFallDamage: UU.disableFallDamage,
        worldBorder: UU.worldBorder,
        hideLobbyCode: UU.hideLobbyCode,
        enableSmpMarketplace: UU.enableSmpMarketplace,
        enableSurvivalGuns: UU.enableSurvivalGuns,
        enableSpawnReset: UU.enableSpawnReset,
        enableDayNight: UU.enableDayNight,
        persistWorld: UU.persistWorld,
        persistInventory: UU.persistInventory
      }
    }

    function kU(UU) {
      var XU, zU;
      let {
        onNavigateAway: kU,
        inSourceWorld: GU = !1,
        canManage: BU = !0
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const {
        userContext: ZU
      } = (0, pU.d)(), RU = (0, aU.useNavigatePreserveSearch)(), [PU, WU] = (0, cU.useState)({
        ...UU
      }), [dU, LU] = (0, cU.useState)("Enter"), [eU, CU] = (0, cU.useState)(void 0), wU = (0, cU.useRef)(gU(UU, UU.gamePublished)), qU = (0, cU.useRef)(void 0), OU = "Enter" === dU, SU = null !== (XU = null === (zU = (0, tU.e)(BU).eligibility) || void 0 === zU ? void 0 : zU.publishSuspendedUntil) && void 0 !== XU ? XU : null, rU = ZU.playerHasRank("developer") || ZU.playerHasRank("admin") || "Enter" === dU && !1 !== PU.schematicContainsSpawnBlock, uU = void 0 !== eU && eU !== qU.current || JSON.stringify(gU(PU, PU.gamePublished)) !== JSON.stringify(wU.current);

      function fU(UU, XU) {
        WU((zU => ({
          ...zU,
          [UU]: XU
        })))
      }
      const iU = (0, cU.useCallback)((UU => {
        qU.current = UU, CU(UU)
      }), []);

      function HU() {
        return (0, FU.A)((0, QU.w)(PU.schematicId), PU)
      }

      function MU(UU) {
        LU("Loading");
        const XU = gU(PU, UU),
          zU = eU !== qU.current ? eU : void 0;
        EU.c.updateSchematic(ZU, XU, zU).then((zU => {
          let {
            customTexturePackKey: cU
          } = zU;
          LU("Success"), fU("customTexturePackKey", cU), wU.current = XU, qU.current = void 0, CU(void 0), !UU || PU.gamePublished || kU || IU.f.showGamePublished(PU.name, HU()), setTimeout((() => {
            fU("gamePublished", UU), LU("Enter")
          }), 1e3)
        })).catch((UU => {
          var XU;
          (console.error("Failed to save schematic:", UU), LU("Error"), UU instanceof AU.e && UU.errorMessageForUser) && NU.NotificationProvider.showAlertPopup({
            title: "worldBuilder:changesNotSaved",
            subtitle: UU.errorMessageForUser,
            textOpts: {
              subtitle: null !== (XU = UU.errorMessageTranslationParams) && void 0 !== XU ? XU : void 0
            },
            confirmText: "general:ok"
          });
          setTimeout((() => {
            LU("Enter")
          }), 1e3)
        }))
      }
      return {
        schematicData: PU,
        updateSchematicData: fU,
        setTexturePack: CU,
        initializeTexturePack: iU,
        updateState: dU,
        formEnabled: OU,
        publishFormEnabled: rU,
        hasUnsavedChanges: uU,
        publishSuspendedUntil: SU,
        canEditSourceWorld: !GU,
        saveSchematic: MU,
        unpublishSchematic: function() {
          NU.NotificationProvider.showPromptPopup({
            icon: "rocket-launch",
            title: "worldBuilder:unpublishAsGameConfirmTitle",
            subtitle: "worldBuilder:unpublishAsGameConfirmSubtitle",
            confirmText: "worldBuilder:unpublishAsGame",
            cancelText: "general:cancel",
            destructive: !0,
            unlockPointerKey: "unpublishGamePrompt"
          }).getResult().then((UU => {
            !0 === UU && MU(!1)
          }))
        },
        editSourceWorld: function() {
          LU("Loading"), YU.d.getSourceWorld(PU.schematicId).then((UU => {
            DU.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, oU.n)("other"), RU((0, yU.b)("classic", UU)), null === kU || void 0 === kU || kU()
          })).catch((UU => {
            console.error("Failed to get source world:", UU), LU("Error"), setTimeout((() => {
              LU("Enter")
            }), 1e3)
          }))
        },
        playGame: function() {
          DU.gameBridge.send("leaveGame", {
            reloadPath: "/"
          }), RU(HU()), null === kU || void 0 === kU || kU()
        }
      }
    }
  },
  5465: () => {}
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);