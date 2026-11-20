export const id = 103;
export const ids = [103];
export const modules = {
  4598: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => GU,
      g: () => cU,
      j: () => jU
    });
    gU(4604);
    var tU = gU(1181),
      pU = gU(1037),
      EU = gU.n(pU),
      PU = gU(1344),
      TU = (gU(56), gU(4040)),
      qU = gU(1049),
      KU = gU(1090);

    function cU(UU) {
      let {
        children: RU,
        label: gU,
        className: pU,
        circleInfoText: TU,
        disabled: cU,
        onLabelClick: GU
      } = UU;
      const {
        t: jU
      } = (0, tU.B)(), uU = (0, KU.jsxs)("div", {
        className: EU()("Label", {
          ClickableLabel: void 0 !== GU
        }),
        onClick: GU,
        children: [jU(gU), TU && (0, KU.jsx)(qU.c, {
          name: "circle-info"
        })]
      });
      return (0, KU.jsxs)("div", {
        className: EU()("LabeledInput", {
          [pU]: pU,
          DisabledLabelInput: cU
        }),
        children: [TU && (0, KU.jsx)(PU.g, {
          tooltipInner: (0, KU.jsx)("div", {
            className: "LabeledInputTooltip",
            children: jU(TU)
          }),
          children: uU
        }), !TU && uU, RU]
      })
    }

    function GU(UU) {
      let {
        checked: RU,
        setChecked: gU
      } = UU;
      return (0, KU.jsx)("div", {
        className: "OtherInput ClickableOtherInput",
        "data-pad-focusable": !0,
        onClick: UU => {
          gU(!RU)
        },
        children: (0, KU.jsx)(TU.d, {
          checked: RU,
          onChange: UU => {
            gU(UU.target.checked)
          },
          disabled: !1
        })
      })
    }

    function jU(UU) {
      let {
        checked: RU,
        setChecked: gU,
        disabled: tU
      } = UU;
      return (0, KU.jsx)("div", {
        className: EU()("SwitchContainer", {
          SwitchContainerDisabled: tU
        }),
        onClick: () => {
          tU || gU(!RU)
        },
        children: (0, KU.jsx)(TU.d, {
          className: "SwitchCheckbox",
          checked: RU,
          onChange: UU => {
            gU(UU.target.checked)
          },
          disabled: !!tU
        })
      })
    }
  },
  4608: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => KU
    });
    var tU = gU(1037),
      pU = gU.n(tU),
      EU = gU(4293),
      PU = gU(1181),
      TU = gU(1090);
    const qU = [...EU.i, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function KU(UU) {
      const {
        disabled: RU,
        hideWrapper: gU
      } = UU, {
        t: tU
      } = (0, PU.B)(), KU = UU.advancedMode ? qU.map((RU => [RU, UU.callbacks[RU]])) : EU.i.map((RU => [RU, UU.callbacks[RU]])), GU = (0, TU.jsx)("div", {
        className: pU()("PluginsGrid", {
          SectionBody: !gU
        }),
        children: KU.map((UU => {
          let [gU, tU] = UU;
          return (0, TU.jsx)(cU, {
            plugin: gU,
            callbacks: tU,
            disabled: RU
          }, gU)
        }))
      });
      return gU ? GU : (0, TU.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, TU.jsx)("div", {
          className: "SectionTitle",
          children: tU("worldBuilder:pluginsSection")
        }), GU]
      })
    }

    function cU(UU) {
      let {
        plugin: RU,
        callbacks: {
          isEnabled: gU,
          GJ: tU
        },
        disabled: EU
      } = UU;
      const {
        t: qU
      } = (0, PU.B)(), KU = gU();
      return (0, TU.jsxs)("div", {
        className: pU()("PluginCard", {
          PluginCardEnabled: KU,
          PluginCardDisabledForm: EU
        }),
        "data-pad-focusable": !0,
        "aria-disabled": EU || void 0,
        onClick: () => {
          EU || tU(!KU)
        },
        children: [(0, TU.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, TU.jsx)("img", {
            src: `/textures/games/classic/customGames/${RU}.png`,
            alt: RU
          })
        }), (0, TU.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, TU.jsx)("div", {
            className: "PluginCardTitle",
            children: qU(GU[RU])
          }), (0, TU.jsx)("div", {
            className: "PluginCardDescription",
            children: qU(jU[RU])
          })]
        }), (0, TU.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: qU(KU ? "general:on" : "general:off")
        })]
      })
    }
    const GU = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      jU = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  4593: (UU, RU, gU) => {
    gU.d(RU, {
      f: () => pR,
      c: () => tR,
      d: () => gR,
      h: () => ER
    });
    var tU = gU(56),
      pU = gU(1333),
      EU = gU(1412),
      PU = gU(1602),
      TU = gU(1181),
      qU = gU(1326),
      KU = gU(1344),
      cU = gU(1049),
      GU = gU(1217),
      jU = gU(1037),
      uU = gU.n(jU),
      CU = gU(299),
      hU = gU(4293),
      QU = gU(1238),
      eU = gU(4598),
      WU = gU(2825),
      fU = gU(4608),
      xU = gU(1090);

    function mU(UU) {
      let {
        icon: RU,
        title: gU,
        disabled: tU,
        children: pU
      } = UU;
      return (0, xU.jsxs)("div", {
        className: uU()("ManageCard", {
          ManageCardDisabled: tU
        }),
        children: [(0, xU.jsxs)("div", {
          className: "ManageCardHead",
          children: [(0, xU.jsx)("div", {
            className: "ManageCardIcon",
            children: (0, xU.jsx)(cU.c, {
              name: RU
            })
          }), (0, xU.jsx)("div", {
            children: (0, xU.jsx)("h2", {
              className: "ManageCardTitle",
              children: gU
            })
          })]
        }), (0, xU.jsxs)("div", {
          className: "ManageCardBody",
          children: [pU, tU && (0, xU.jsx)("div", {
            className: "ManageCardDisabledOverlay"
          })]
        })]
      })
    }

    function IU(UU) {
      let {
        label: RU,
        caption: gU,
        children: tU
      } = UU;
      return (0, xU.jsxs)("div", {
        className: "ManageStackedField",
        children: [(0, xU.jsx)("div", {
          className: "ManageStackedFieldLabel",
          children: RU
        }), tU, gU && (0, xU.jsx)("div", {
          className: "ManageStackedFieldCaption",
          children: gU
        })]
      })
    }

    function JU(UU) {
      let {
        label: RU,
        caption: gU,
        disabled: tU,
        children: pU
      } = UU;
      return (0, xU.jsxs)("div", {
        className: uU()("ManageField", {
          ManageFieldDisabled: tU
        }),
        children: [(0, xU.jsxs)("div", {
          className: "ManageFieldText",
          children: [(0, xU.jsx)("div", {
            className: "ManageFieldLabel",
            children: RU
          }), (0, xU.jsx)("div", {
            className: "ManageFieldCaption",
            children: gU
          })]
        }), (0, xU.jsx)("div", {
          className: "ManageFieldControl",
          children: pU
        })]
      })
    }

    function wU(UU) {
      var RU, gU;
      let {
        schematicData: tU,
        updateSchematicData: pU,
        publishFormEnabled: EU,
        formEnabled: PU
      } = UU;
      const {
        t: qU
      } = (0, TU.B)(), KU = !EU, cU = {
        tpRequests: {
          isEnabled: () => !tU.disableTpRequests,
          GJ: UU => pU("disableTpRequests", !UU)
        },
        spawnProtection: {
          isEnabled: () => !tU.disableSpawnProtection,
          GJ: UU => pU("disableSpawnProtection", !UU)
        },
        spawnReset: {
          isEnabled: () => !!tU.enableSpawnReset,
          GJ: UU => pU("enableSpawnReset", UU)
        },
        smpMarketplace: {
          isEnabled: () => !!tU.enableSmpMarketplace,
          GJ: UU => pU("enableSmpMarketplace", UU)
        },
        survivalGuns: {
          isEnabled: () => !!tU.enableSurvivalGuns,
          GJ: UU => pU("enableSurvivalGuns", UU)
        },
        fallDamage: {
          isEnabled: () => !tU.disableFallDamage,
          GJ: UU => pU("disableFallDamage", !UU)
        },
        dayNight: {
          isEnabled: () => !!tU.enableDayNight,
          GJ: UU => pU("enableDayNight", UU)
        }
      };
      return (0, xU.jsxs)(xU.Fragment, {
        children: [!1 === tU.schematicContainsSpawnBlock && (0, xU.jsx)("div", {
          className: "ManageWarningBanner",
          children: qU("worldBuilder:mustContainSpawnBlock")
        }), (0, xU.jsxs)("div", {
          className: "ManageSettingsGrid",
          children: [(0, xU.jsxs)(mU, {
            icon: "globe",
            title: qU("worldBuilder:worldRulesSection"),
            disabled: !PU,
            children: [(0, xU.jsx)(JU, {
              label: qU("classic:defaultGamemode"),
              caption: qU("classic:defaultGamemodeDescription"),
              disabled: KU,
              children: (0, xU.jsx)(WU.c, {
                controlClassName: "ManageDropdown",
                options: hU.C.map((UU => ({
                  value: UU,
                  label: CU.r[UU]
                }))),
                value: tU.defaultGamemode,
                onChange: UU => pU("defaultGamemode", UU.value)
              })
            }), (0, xU.jsx)(JU, {
              label: qU("classic:voidDeathHeight"),
              caption: qU("classic:voidDeathHeightDescription"),
              disabled: KU,
              children: (0, xU.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, xU.jsx)("input", {
                  type: "number",
                  max: QU.C,
                  value: null !== (RU = tU.voidDeathHeight) && void 0 !== RU ? RU : "",
                  onChange: UU => {
                    const RU = parseInt(UU.target.value);
                    pU("voidDeathHeight", RU)
                  }
                }), (0, xU.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: qU("worldBuilder:blocksUnit")
                })]
              })
            }), (0, xU.jsx)(JU, {
              label: qU("classic:worldBorder"),
              caption: qU("classic:worldBorderDescription"),
              disabled: KU,
              children: (0, xU.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, xU.jsx)("input", {
                  type: "number",
                  min: QU.M,
                  max: QU.G,
                  placeholder: qU("worldBuilder:noWorldBorderLimit"),
                  value: null !== (gU = tU.worldBorder) && void 0 !== gU ? gU : "",
                  onChange: UU => {
                    const RU = parseInt(UU.target.value);
                    pU("worldBorder", isNaN(RU) ? null : RU)
                  }
                }), (0, xU.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: qU("worldBuilder:blocksUnit")
                })]
              })
            }), (0, xU.jsx)(JU, {
              label: qU("classic:disableMobs"),
              caption: qU("classic:disableMobsDescription"),
              disabled: KU,
              children: (0, xU.jsx)(eU.j, {
                checked: tU.disableMobs,
                setChecked: UU => pU("disableMobs", UU),
                disabled: KU
              })
            })]
          }), (0, xU.jsxs)(mU, {
            icon: "user-group",
            title: qU("worldBuilder:playerAndLobbySection"),
            disabled: !PU,
            children: [(0, xU.jsx)(JU, {
              label: qU("classic:disableKeepInventory"),
              caption: qU("classic:disableKeepInventoryDescription"),
              disabled: KU,
              children: (0, xU.jsx)(eU.j, {
                checked: tU.disableKeepInventory,
                setChecked: UU => pU("disableKeepInventory", UU),
                disabled: KU
              })
            }), (0, xU.jsx)(JU, {
              label: qU("classic:persistInventory"),
              caption: qU("classic:persistInventoryDescription"),
              disabled: KU,
              children: (0, xU.jsx)(WU.c, {
                controlClassName: "ManageDropdown",
                options: hU.k.map((UU => ({
                  value: UU,
                  label: CU.i[UU]
                }))),
                value: tU.persistInventory,
                onChange: UU => pU("persistInventory", UU.value)
              })
            }), (0, xU.jsx)(JU, {
              label: qU("classic:persistWorld"),
              caption: qU("classic:persistWorldDescription"),
              disabled: KU,
              children: (0, xU.jsx)(eU.j, {
                checked: tU.persistWorld,
                setChecked: UU => pU("persistWorld", UU),
                disabled: KU
              })
            }), (0, xU.jsx)(JU, {
              label: qU("classic:disableLobbySpawn"),
              caption: qU("classic:disableLobbySpawnDescription"),
              disabled: KU,
              children: (0, xU.jsx)(eU.j, {
                checked: tU.disableLobbySpawn,
                setChecked: UU => pU("disableLobbySpawn", UU),
                disabled: KU
              })
            }), (0, xU.jsx)(JU, {
              label: qU("classic:hideLobbyCode"),
              caption: qU("classic:hideLobbyCodeDescription"),
              disabled: KU,
              children: (0, xU.jsx)(eU.j, {
                checked: tU.hideLobbyCode,
                setChecked: UU => pU("hideLobbyCode", UU),
                disabled: KU
              })
            })]
          })]
        }), (0, xU.jsx)(mU, {
          icon: "layer-group",
          title: qU("worldBuilder:pluginsSection"),
          disabled: !PU,
          children: (0, xU.jsx)(fU.c, {
            callbacks: cU,
            disabled: KU,
            advancedMode: !0,
            hideWrapper: !0
          })
        })]
      })
    }
    var nU = gU(4614),
      bU = gU(4040),
      oU = gU(1461),
      ZU = gU(3182),
      aU = gU(1112),
      YU = gU(4569),
      BU = gU(4623),
      VU = gU(1420);
    const rU = 50,
      XU = .3;
    async function vU(UU) {
      const RU = await
      function(UU) {
        return new Promise(((RU, gU) => {
          const tU = new FileReader;
          tU.onload = () => RU(tU.result), tU.onerror = gU, tU.readAsDataURL(UU)
        }))
      }(UU), gU = await
      function(UU) {
        return new Promise(((RU, gU) => {
          const tU = new Image;
          tU.onload = () => RU(tU), tU.onerror = () => gU(new Error("Failed to load image")), tU.src = UU
        }))
      }(RU);
      if (gU.naturalHeight > gU.naturalWidth) throw new dU;
      const tU = 1024 * rU,
        {
          dataUrl: pU,
          finalQuality: EU
        } = function(UU, RU) {
          const gU = document.createElement("canvas");
          gU.width = UU.naturalWidth, gU.height = UU.naturalHeight, gU.getContext("2d").drawImage(UU, 0, 0);
          let tU = .92,
            pU = gU.toDataURL("image/jpeg", tU);
          for (; .75 * pU.length > RU && tU > .05;) tU -= .05, pU = gU.toDataURL("image/jpeg", tU);
          return {
            dataUrl: pU,
            finalQuality: tU
          }
        }(gU, tU);
      if (Math.ceil(.75 * pU.length) > tU) throw new HU;
      return {
        base64Jpg: pU,
        heavilyCompressed: EU < XU
      }
    }
    class dU extends Error {}
    class HU extends Error {}
    var SU = function(UU) {
      return UU[UU.NOT_LOGGED_IN = 0] = "NOT_LOGGED_IN", UU[UU.THUMBNAIL_LIMIT_REACHED = 1] = "THUMBNAIL_LIMIT_REACHED", UU
    }(SU || {});

    function sU(UU) {
      var RU;
      let {
        schematicId: gU,
        hasReadUploadPolicy: pU,
        onPolicyValidationError: qU,
        onThumbnailReady: KU
      } = UU;
      const {
        t: jU
      } = (0, TU.B)(), [CU, hU] = (0, tU.useState)(null), [QU, eU] = (0, tU.useState)(""), [WU, fU] = (0, tU.useState)(""), [mU, IU] = (0, tU.useState)(!0), [JU, wU] = (0, tU.useState)(!1), nU = (0, tU.useRef)(!1), [bU, oU] = (0, tU.useState)(null), [ZU, aU] = (0, tU.useState)(!1), [YU, VU] = (0, tU.useState)(!1), rU = (0, tU.useRef)(0), {
        getRootProps: XU,
        getInputProps: SU,
        isDragActive: sU
      } = (0, BU.e)({
        accept: {
          "image/*": [".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp"]
        },
        multiple: !1,
        onDrop: async UU => {
          if (0 === UU.length) return;
          const RU = UU[0],
            gU = ++rU.current;
          oU(null), aU(!1), hU(null), eU(RU.name);
          try {
            const UU = await vU(RU);
            if (gU !== rU.current) return;
            hU(UU), aU(UU.heavilyCompressed)
          } catch (tU) {
            if (gU !== rU.current) return;
            oU(jU(tU instanceof dU ? "thumbnail:portraitImagesNotAllowed" : tU instanceof HU ? "thumbnail:couldNotCompressImage" : "thumbnail:failedToUploadImage"))
          }
        },
        useFsAccessApi: !1
      }), yU = QU.length <= 30 ? QU : `${QU.slice(0,27)}...`, kU = null !== (RU = null === CU || void 0 === CU ? void 0 : CU.base64Jpg) && void 0 !== RU ? RU : null, FU = WU.trim(), iU = FU.length >= GU.n && FU.length <= GU.l, AU = YU && !CU && !bU, zU = YU && !iU;
      return (0, xU.jsxs)("div", {
        className: "ThumbnailUploadContainer",
        children: [(0, xU.jsxs)("div", {
          ...XU({
            className: uU()("ThumbnailUploadDropzone", {
              ActiveDrag: sU,
              ValidationError: AU
            })
          }),
          children: [(0, xU.jsx)("input", {
            ...SU()
          }), !sU && kU ? (0, xU.jsxs)(xU.Fragment, {
            children: [(0, xU.jsxs)("div", {
              className: "ThumbnailAspectPreviews",
              children: [(0, xU.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, xU.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "1:1"
                }), (0, xU.jsx)("div", {
                  className: "ThumbnailAspectFrame Square",
                  children: (0, xU.jsx)("img", {
                    src: kU,
                    alt: "1:1 preview"
                  })
                })]
              }), (0, xU.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, xU.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "16:9"
                }), (0, xU.jsx)("div", {
                  className: "ThumbnailAspectFrame Wide",
                  children: (0, xU.jsx)("img", {
                    src: kU,
                    alt: "16:9 preview"
                  })
                })]
              })]
            }), (0, xU.jsxs)("div", {
              children: [(0, xU.jsx)("div", {
                className: "ThumbnailUploadInstructions Active",
                children: yU
              }), (0, xU.jsx)("div", {
                className: "ThumbnailUploadInstructions Preview",
                children: jU("thumbnail:preview")
              })]
            })]
          }) : (0, xU.jsxs)(xU.Fragment, {
            children: [(0, xU.jsx)("div", {
              className: "ThumbnailUploadIcon",
              children: (0, xU.jsx)(cU.c, {
                name: "image"
              })
            }), (0, xU.jsx)("div", {
              className: "ThumbnailUploadInstructions",
              children: jU("thumbnail:dragImageHere")
            })]
          })]
        }), AU && (0, xU.jsx)("div", {
          className: "ThumbnailUploadError",
          children: jU("thumbnail:imageRequired")
        }), (0, xU.jsx)(PU.d, {
          className: uU()("ThumbnailUploadNameInput", {
            ValidationError: zU
          }),
          placeholderText: jU("thumbnail:thumbnailName"),
          defaultValue: WU,
          onValueChange: UU => {
            fU(UU)
          },
          maxLength: GU.l
        }), zU && (0, xU.jsx)("div", {
          className: "ThumbnailUploadError",
          children: jU("thumbnail:nameRequired", {
            min: GU.n,
            max: GU.l
          })
        }), (0, xU.jsxs)("label", {
          className: "ThumbnailUploadCheckbox",
          children: [(0, xU.jsx)("input", {
            type: "checkbox",
            checked: mU,
            onChange: UU => {
              IU(UU.target.checked)
            }
          }), jU("thumbnail:setAsThumbnailOnceApproved")]
        }), ZU && (0, xU.jsx)("div", {
          className: "ThumbnailUploadWarning",
          children: jU("thumbnail:heavyCompressionWarning")
        }), bU && (0, xU.jsx)("div", {
          className: "ThumbnailUploadError",
          children: bU
        }), (0, xU.jsx)(EU.j, {
          disabled: JU,
          className: "ThumbnailUploadButton",
          onClick: async () => {
            if (VU(!0), !nU.current && CU && iU && pU) {
              nU.current = !0, wU(!0), oU(null);
              try {
                await KU(CU.base64Jpg, FU, mU ? gU : null)
              } catch (UU) {
                oU(UU.errorMessageForUser ? jU(UU.errorMessageForUser, UU.errorMessageTranslationParams) : jU("thumbnail:failedToUploadImage"))
              } finally {
                nU.current = !1, wU(!1)
              }
            } else pU || qU()
          },
          children: jU(JU ? "thumbnail:processing" : "thumbnail:uploadThumbnail")
        })]
      })
    }
    const yU = 2e3;

    function kU(UU) {
      let {
        schematicId: RU,
        ownedThumbnailCount: gU,
        onClose: pU,
        onThumbnailReady: EU
      } = UU;
      const {
        t: PU
      } = (0, TU.B)(), {
        userContext: qU
      } = (0, aU.e)(), [KU, jU] = (0, tU.useState)(!1), [CU, hU] = (0, tU.useState)(!1), [QU, eU] = (0, tU.useState)(!1), WU = (0, tU.useRef)();
      (0, tU.useEffect)((() => () => {
        clearTimeout(WU.current)
      }), []);
      const fU = function(UU, RU) {
        const gU = [];
        return UU.isLoggedIn() || gU.push(SU.NOT_LOGGED_IN), RU >= GU.V && gU.push(SU.THUMBNAIL_LIMIT_REACHED), gU
      }(qU, gU);
      if (fU.length > 0) {
        const UU = {
          [SU.NOT_LOGGED_IN]: {
            key: "thumbnail:mustBeLoggedInToUpload"
          },
          [SU.THUMBNAIL_LIMIT_REACHED]: {
            key: "thumbnail:thumbnailLimitReachedPleaseDelete",
            params: {
              max: GU.V
            }
          }
        };
        return (0, xU.jsxs)("div", {
          className: "ThumbnailUploaderInner",
          children: [(0, xU.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: PU("thumbnail:cannotUploadThumbnail")
          }), fU.map(((RU, gU) => {
            const tU = UU[RU];
            return (0, xU.jsxs)("div", {
              className: "CannotUploadThumbnailItem",
              children: [(0, xU.jsx)(cU.c, {
                name: "triangle-exclamation"
              }), (0, xU.jsx)("span", {
                children: PU(tU.key, tU.params)
              })]
            }, gU)
          }))]
        })
      }
      return (0, xU.jsxs)("div", {
        className: uU()("ThumbnailUploaderInner", {
          ThumbnailUploaderSuccess: KU
        }),
        children: [KU && (0, xU.jsxs)("div", {
          className: "ThumbnailUploadSuccessOverlay",
          children: [(0, xU.jsxs)("div", {
            className: "ThumbnailUploadSuccessIcon FullyFancyText AnimFadeInScaleUp",
            children: [(0, xU.jsx)(cU.c, {
              name: "check"
            }), (0, xU.jsx)(VU.c, {})]
          }), (0, xU.jsx)("div", {
            className: "ThumbnailUploadSuccessText AnimFadeInScaleUp",
            children: PU("thumbnail:thumbnailUploaded")
          })]
        }), (0, xU.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: PU("thumbnail:uploadThumbnail")
        }), (0, xU.jsxs)("div", {
          className: "ThumbnailUploaderBody",
          children: [(0, xU.jsxs)("div", {
            className: "ThumbnailUploaderLeft",
            children: [(0, xU.jsx)("h3", {
              className: "SchematicPopupSubtitle",
              children: PU("thumbnail:chooseImage", {
                maxSizeKb: rU
              })
            }), (0, xU.jsx)(sU, {
              schematicId: RU,
              hasReadUploadPolicy: CU,
              onPolicyValidationError: () => {
                eU(!0)
              },
              onThumbnailReady: async (UU, RU, gU) => {
                await EU(UU, RU, gU), jU(!0), WU.current = setTimeout(pU, yU)
              }
            })]
          }), (0, xU.jsxs)("div", {
            className: "ThumbnailUploadPolicy",
            children: [(0, xU.jsx)("h3", {
              className: "ThumbnailUploadPolicyTitle",
              children: PU("thumbnail:uploadPolicy")
            }), (0, xU.jsxs)("ul", {
              className: "ThumbnailUploadPolicyList",
              children: [(0, xU.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, xU.jsx)(cU.c, {
                  name: "check"
                }), (0, xU.jsx)("span", {
                  children: PU("thumbnail:policyFollowGuidelines")
                })]
              }), (0, xU.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, xU.jsx)(cU.c, {
                  name: "check"
                }), (0, xU.jsx)("span", {
                  children: PU("thumbnail:policyInGameAssets")
                })]
              }), (0, xU.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, xU.jsx)(cU.c, {
                  name: "check"
                }), (0, xU.jsx)("span", {
                  children: PU("thumbnail:policyLimitText")
                })]
              }), (0, xU.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, xU.jsx)(cU.c, {
                  name: "x"
                }), (0, xU.jsx)("span", {
                  children: PU("thumbnail:policyCopyrightContent")
                })]
              }), (0, xU.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, xU.jsx)(cU.c, {
                  name: "x"
                }), (0, xU.jsx)("span", {
                  children: PU("thumbnail:policyOutOfGameAssets")
                })]
              }), (0, xU.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, xU.jsx)(cU.c, {
                  name: "x"
                }), (0, xU.jsx)("span", {
                  children: PU("thumbnail:policyBloxdTags")
                })]
              }), (0, xU.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, xU.jsx)(cU.c, {
                  name: "x"
                }), (0, xU.jsx)("span", {
                  children: PU("thumbnail:policyMustReflectGame")
                })]
              })]
            }), (0, xU.jsxs)("label", {
              className: uU()("ThumbnailUploadCheckbox Policy", {
                ValidationError: QU && !CU
              }),
              children: [(0, xU.jsx)("input", {
                type: "checkbox",
                checked: CU,
                onChange: UU => {
                  hU(UU.target.checked)
                }
              }), PU("thumbnail:agreeToUploadPolicy")]
            }), QU && !CU && (0, xU.jsx)("div", {
              className: "ThumbnailPolicyError",
              children: PU("thumbnail:policyRequired")
            })]
          })]
        })]
      })
    }
    var FU = gU(1196);
    const iU = {
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

    function AU(UU) {
      var RU, gU;
      let {
        schematicData: PU,
        updateSchematicData: KU,
        publishFormEnabled: GU,
        onClose: jU
      } = UU;
      const {
        t: CU
      } = (0, TU.B)(), {
        userContext: hU,
        isUserContextUpdating: QU
      } = (0, aU.e)(), eU = (0, ZU.b)(), [WU, fU] = (0, tU.useState)([]), [mU, IU] = (0, tU.useState)([]), [JU, wU] = (0, tU.useState)(!0), [nU, bU] = (0, tU.useState)(null !== (RU = PU.customThumbnailId) && void 0 !== RU ? RU : null), [BU, VU] = (0, tU.useState)(null), rU = (0, tU.useRef)(null !== (gU = PU.customThumbnailId) && void 0 !== gU ? gU : null), XU = (0, tU.useRef)(0), vU = (0, tU.useRef)(null), dU = (0, tU.useRef)(null), HU = (0, tU.useRef)(null), SU = (0, tU.useRef)(!1);

      function sU(UU, RU) {
        HU.current && (clearTimeout(HU.current), HU.current = null), VU(UU), null !== UU && RU && (HU.current = setTimeout((() => {
          VU(null), HU.current = null
        }), 5e3))
      }(0, tU.useEffect)((() => () => {
        clearTimeout(dU.current), clearTimeout(HU.current)
      }), []);
      const yU = (0, tU.useCallback)((() => {
        wU(!0), oU.c.getOwnedThumbnails(hU).then((UU => {
          const RU = [],
            gU = [];
          for (const tU of UU.thumbnails) tU.rejectionPolicyId ? RU.push(tU) : gU.push(tU);
          RU.sort(((UU, RU) => UU.lastUpdatedAt - RU.lastUpdatedAt)), gU.sort(((UU, RU) => {
            const gU = UU.approved ? 1 : 0,
              tU = (RU.approved ? 1 : 0) - gU;
            return 0 !== tU ? tU : RU.lastUpdatedAt - UU.lastUpdatedAt
          })), IU(RU), fU(gU)
        })).catch((UU => {
          console.error("Failed to fetch thumbnails:", UU)
        })).finally((() => {
          wU(!1)
        }))
      }), [hU]);
      async function iU(UU, RU, gU) {
        return oU.c.uploadSchematicThumbnail(hU, UU, RU, gU).then((() => {
          sU({
            text: CU("thumbnail:uploadedAwaitingModeration"),
            type: "success"
          }, !0), yU()
        }))
      }

      function AU() {
        XU.current = Date.now(), dU.current = null;
        const UU = vU.current;
        vU.current = null, sU({
          text: CU("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), oU.c.setSchematicThumbnail(hU, PU.schematicId, UU).then((() => {
          eU.current && (sU({
            text: CU("thumbnail:thumbnailUpdated"),
            type: "success"
          }, !0), rU.current = UU, KU("customThumbnailId", UU), KU("customThumbnailBlurhash", void 0), KU("customThumbnailVariants", void 0))
        })).catch((UU => {
          eU.current && (sU({
            text: UU.errorMessageForUser ? CU(UU.errorMessageForUser, UU.errorMessageTranslationParams) : CU("thumbnail:failedToSetThumbnail"),
            type: "error"
          }, !0), bU(rU.current))
        }))
      }

      function DU(UU) {
        bU(UU), vU.current = UU;
        const RU = Date.now() - XU.current;
        RU >= 1e3 ? AU() : (sU({
          text: CU("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), dU.current || (dU.current = setTimeout((() => {
          AU()
        }), 1e3 - RU)))
      }
      return (0, tU.useEffect)((() => {
        !1 === QU && yU()
      }), [QU, yU]), mU.length > 0 ? (0, xU.jsx)(zU, {
        rejectedThumbnails: mU,
        userContext: hU,
        isMountedRef: eU,
        onAcknowledged: yU
      }) : (0, xU.jsxs)("div", {
        className: "BloxdForm ThumbnailSection",
        children: [(0, xU.jsxs)("div", {
          className: "SectionTitle",
          children: [CU("thumbnail:gameThumbnail"), BU && (0, xU.jsx)("span", {
            className: uU()("ThumbnailActionMsg", `ThumbnailActionMsg--${BU.type}`),
            children: BU.text
          })]
        }), (0, xU.jsx)("div", {
          className: "SectionBody",
          children: (0, xU.jsxs)("div", {
            className: "ThumbnailGrid",
            children: [(0, xU.jsxs)("div", {
              className: uU()("ThumbnailGridItem ThumbnailGridItemDefault", {
                ThumbnailGridItemSelected: null === nU
              }),
              onClick: () => DU(null),
              children: [(0, xU.jsx)(YU.c, {
                game: {
                  schematicId: PU.schematicId,
                  imageBlurhash: PU.imageBlurhash
                }
              }), (0, xU.jsx)("div", {
                className: "ThumbnailGridItemLabel ThumbnailDefaultLabel",
                children: CU("general:default")
              })]
            }), JU && (0, xU.jsx)(qU.d, {}), WU.map(((UU, RU) => (0, xU.jsxs)("div", {
              className: uU()("ThumbnailGridItem", {
                ThumbnailGridItemSelected: nU === UU.id,
                ThumbnailGridItemPending: !UU.approved
              }),
              onClick: () => {
                UU.approved && DU(UU.id)
              },
              children: [UU.approved && (0, xU.jsx)("img", {
                src: `${FU.clientSideServerUrls.s3Url}/customThumbnails/${UU.id}.jpg`,
                alt: "Thumbnail"
              }), UU.approved && (0, xU.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: UU.name
              }), UU.id && (0, xU.jsx)(EU.E, {
                className: "ThumbnailDeleteButton",
                onClick: RU => async function(UU, RU, gU) {
                  UU.stopPropagation();
                  const tU = await pU.NotificationProvider.showCustomPopup({
                      body: UU => (0, xU.jsx)(MU, {
                        thumbnailId: RU,
                        thumbnailName: gU,
                        onClose: RU => {
                          RU && (SU.current = !0), UU()
                        }
                      }),
                      middleScreenPopupClassName: "ThumbnailDeleteConfirmPopup",
                      onClose: jU
                    }).getResult(),
                    EU = SU.current;
                  SU.current = !1, EU && !0 === tU && (eU.current && sU({
                    text: CU("thumbnail:deletingThumbnail"),
                    type: "info"
                  }, !1), oU.c.deleteSchematicThumbnail(hU, RU).then((() => {
                    eU.current && (sU({
                      text: CU("thumbnail:thumbnailDeleted"),
                      type: "success"
                    }, !0), rU.current === RU && DU(null), yU())
                  })).catch((UU => {
                    eU.current && sU({
                      text: UU.errorMessageForUser ? CU(UU.errorMessageForUser, UU.errorMessageTranslationParams) : CU("thumbnail:failedToDeleteThumbnail"),
                      type: "error"
                    }, !0)
                  })))
                }(RU, UU.id, UU.name),
                children: (0, xU.jsx)(cU.c, {
                  name: "trash-can"
                })
              }), !UU.approved && (0, xU.jsx)("div", {
                className: "ThumbnailUnapprovedIcon",
                children: (0, xU.jsx)(cU.c, {
                  name: "hourglass-clock"
                })
              }), !UU.approved && (0, xU.jsxs)("div", {
                className: "ThumbnailGridItemLabel ThumbnailPendingLabel",
                children: [UU.name, (0, xU.jsx)("br", {}), CU("thumbnail:pendingApproval")]
              })]
            }, RU))), (0, xU.jsxs)("div", {
              className: uU()("ThumbnailGridItem ThumbnailUploadTile", {
                ThumbnailUploadTileDisabled: !GU
              }),
              onClick: () => {
                GU && function(UU) {
                  let {
                    schematicId: RU,
                    ownedThumbnailCount: gU,
                    onThumbnailReady: tU,
                    onClose: EU
                  } = UU;
                  pU.NotificationProvider.showCustomPopup({
                    body: UU => (0, xU.jsx)(kU, {
                      schematicId: RU,
                      ownedThumbnailCount: gU,
                      onClose: UU,
                      onThumbnailReady: tU
                    }),
                    middleScreenPopupClassName: "SchematicThumbnailPopup",
                    onClose: EU,
                    unlockPointerKey: "schematicThumbnailUploaderPopup"
                  })
                }({
                  schematicId: PU.schematicId,
                  ownedThumbnailCount: WU.length,
                  onThumbnailReady: iU,
                  onClose: jU
                })
              },
              children: [(0, xU.jsx)(cU.c, {
                name: "plus"
              }), (0, xU.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: CU("thumbnail:uploadThumbnail")
              })]
            })]
          })
        })]
      })
    }

    function zU(UU) {
      let {
        rejectedThumbnails: RU,
        userContext: gU,
        isMountedRef: pU,
        onAcknowledged: PU
      } = UU;
      const {
        t: KU
      } = (0, TU.B)(), [GU, jU] = (0, tU.useState)(!1), [uU, CU] = (0, tU.useState)(!1), hU = function(UU) {
        const RU = new Map;
        for (const gU of UU) {
          const UU = gU.rejectionPolicyId,
            tU = RU.get(UU);
          tU ? tU.push(gU) : RU.set(UU, [gU])
        }
        return RU
      }(RU);
      return (0, xU.jsxs)("div", {
        className: "ThumbnailRejectionNotice",
        children: [(0, xU.jsxs)("div", {
          className: "ThumbnailRejectionNoticeTitle",
          children: [(0, xU.jsx)(cU.c, {
            name: "triangle-exclamation"
          }), " ", KU("thumbnail:thumbnailsRejected"), " ", (0, xU.jsx)(cU.c, {
            name: "triangle-exclamation"
          })]
        }), (0, xU.jsx)("div", {
          className: "ThumbnailRejectionNoticeSubtitle",
          children: KU("thumbnail:thumbnailsRejectedDescription")
        }), (0, xU.jsx)("div", {
          className: "ThumbnailRejectionNoticeList",
          children: [...hU.entries()].map((UU => {
            let [RU, gU] = UU;
            const tU = iU[RU];
            return (0, xU.jsxs)("div", {
              className: "ThumbnailRejectionNoticeGroup",
              children: [(0, xU.jsx)("div", {
                className: "ThumbnailRejectionNoticeItems",
                children: gU.map((UU => (0, xU.jsxs)("div", {
                  className: "ThumbnailRejectionNoticeItem",
                  children: [(0, xU.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemIcon",
                    children: (0, xU.jsx)(cU.c, {
                      name: "image-slash"
                    })
                  }), (0, xU.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemDetails",
                    children: (0, xU.jsx)("div", {
                      className: "ThumbnailRejectionNoticeItemName",
                      children: UU.name
                    })
                  })]
                }, UU.id)))
              }), (0, xU.jsxs)("div", {
                className: "ThumbnailRejectionNoticeGroupReason",
                children: [KU("thumbnail:rejectionReason"), " ", tU ? KU(tU.reason) : RU]
              }), tU && (0, xU.jsx)("ul", {
                className: "ThumbnailRejectionNoticeGroupTips",
                children: tU.tips.map((UU => (0, xU.jsx)("li", {
                  children: KU(UU)
                }, UU)))
              })]
            }, RU)
          }))
        }), (0, xU.jsxs)("label", {
          className: "ThumbnailRejectionNoticeCheckbox",
          children: [(0, xU.jsx)(bU.d, {
            checked: GU,
            onChange: UU => jU(UU.target.checked),
            disabled: uU
          }), (0, xU.jsx)("span", {
            children: KU("thumbnail:haveReadRejectionReasons")
          })]
        }), (0, xU.jsx)(EU.j, {
          onClick: async function() {
            CU(!0);
            const UU = await Promise.allSettled(RU.map((UU => oU.c.deleteSchematicThumbnail(gU, UU.id))));
            if (!pU.current) return;
            const tU = UU.filter((UU => "rejected" === UU.status));
            tU.length > 0 && console.error("Some rejected thumbnails failed to delete:", tU), PU()
          },
          disabled: !GU || uU,
          className: "ThumbnailRejectionNoticeAcceptButton",
          children: uU ? (0, xU.jsx)(qU.d, {}) : KU("general:accept")
        })]
      })
    }

    function MU(UU) {
      let {
        thumbnailId: RU,
        thumbnailName: gU,
        onClose: tU
      } = UU;
      const {
        t: pU
      } = (0, TU.B)();
      return (0, xU.jsxs)("div", {
        className: "ThumbnailDeleteConfirm",
        children: [(0, xU.jsx)("div", {
          className: "ThumbnailDeleteConfirmTitle",
          children: pU("thumbnail:deleteThumbnail")
        }), (0, xU.jsxs)("div", {
          className: "ThumbnailDeleteConfirmImageContainer",
          children: [(0, xU.jsx)("img", {
            className: "ThumbnailDeleteConfirmImage",
            src: `${FU.clientSideServerUrls.s3Url}/customThumbnails/${RU}.jpg`,
            alt: "Thumbnail to delete"
          }), (0, xU.jsx)("div", {
            className: "ThumbnailGridItemLabel",
            children: gU
          })]
        }), (0, xU.jsx)("div", {
          className: "ThumbnailDeleteConfirmSubtitle",
          children: pU("thumbnail:deleteThumbnailConfirmation")
        }), (0, xU.jsxs)("div", {
          className: "ThumbnailDeleteConfirmButtons",
          children: [(0, xU.jsxs)(EU.E, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => tU(!0),
            children: [(0, xU.jsx)(cU.c, {
              name: "trash-can"
            }), " ", pU("general:delete")]
          }), (0, xU.jsx)(EU.g, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => tU(!1),
            children: pU("general:cancel")
          })]
        })]
      })
    }
    var DU = gU(2850),
      LU = gU(4657),
      NU = gU(4663),
      lU = gU(4706);

    function OU(UU) {
      let {
        schematicData: RU,
        setTexturePack: gU,
        initializeTexturePack: pU,
        publishFormEnabled: EU
      } = UU;
      const {
        t: PU
      } = (0, TU.B)(), [qU, KU] = (0, tU.useState)(null), [cU, GU] = (0, tU.useState)(null), [jU, CU] = (0, tU.useState)(!1), hU = (0, ZU.b)(), QU = EU && !jU, eU = RU.customTexturePackKey;

      function WU(UU) {
        var RU;
        KU(UU.metaData.id), GU(null !== (RU = UU.metaData.fromFolderName) && void 0 !== RU ? RU : null), (UU.metaData.id !== DU.s.CUSTOM || UU.metaData.fromFolderName) && gU(UU)
      }
      return (0, tU.useEffect)((() => {
        eU && (CU(!0), (0, LU.c)(eU).then((UU => {
          var RU;
          hU.current && (UU ? (KU(UU.metaData.id), GU(null !== (RU = UU.metaData.fromFolderName) && void 0 !== RU ? RU : null), pU(UU)) : console.error(`No texture pack at ${eU}`))
        })).catch((UU => {
          console.error("Error fetching texture pack: ", UU)
        })).finally((() => {
          CU(!1)
        })))
      }), [eU, pU, hU]), (0, xU.jsxs)("div", {
        className: "BloxdForm TexturePackSection",
        children: [(0, xU.jsx)("div", {
          className: "SectionTitle",
          children: PU("customTexturePack:customTexturePack")
        }), (0, xU.jsxs)("div", {
          className: "TexturePackList",
          children: [(0, xU.jsx)("div", {
            className: uU()("TexturePack", {
              Selected: null === qU && !jU,
              Disabled: !QU
            }),
            onClick: () => {
              QU && (KU(null), gU(null), GU(null))
            },
            children: (0, xU.jsx)("div", {
              className: "TexturePackName",
              children: "No Override"
            })
          }), Object.values(DU.s).map((UU => (0, xU.jsx)(NU.h, {
            id: UU,
            isSelected: UU === qU,
            setSelected: WU,
            disabled: !QU
          }, UU)))]
        }), qU === DU.s.CUSTOM && (0, xU.jsx)(lU.d, {
          folderName: cU,
          onTexturePackUpdated: WU,
          disabled: !QU,
          maxFileSizeMb: 25,
          packOwner: "customGame"
        })]
      })
    }
    var UR = gU(4722);

    function RR(UU) {
      var RU;
      let {
        gameCategory: gU,
        setGameCategory: tU,
        disabled: pU
      } = UU;
      const PU = null !== (RU = (0, CU.jb)(gU)) && void 0 !== RU ? RU : "other";
      return (0, xU.jsxs)("div", {
        className: "GameCategoryPicker",
        children: [(0, xU.jsx)(eU.g, {
          label: "worldBuilder:gameCategoryGroup",
          className: "GameCategoryGroup",
          disabled: pU,
          children: (0, xU.jsx)(WU.c, {
            options: CU.bb.map((UU => ({
              value: UU,
              label: CU.Z[UU]
            }))),
            value: PU,
            onChange: UU => {
              UU.value !== PU && tU(CU.W[UU.value][0])
            }
          })
        }), (0, xU.jsx)(eU.g, {
          label: "worldBuilder:gameCategory",
          className: "GameCategory",
          disabled: pU,
          children: (0, xU.jsx)("div", {
            className: "GameCategoryOptions",
            children: CU.W[PU].map((UU => (0, xU.jsx)(EU.M, {
              active: UU === gU,
              onClick: () => {
                tU(UU)
              },
              children: (0, CU.ib)(UU)
            }, UU)))
          })
        })]
      })
    }

    function gR(UU) {
      let {
        editor: RU,
        onClose: gU
      } = UU;
      const {
        t: tU
      } = (0, TU.B)(), {
        schematicData: pU,
        updateSchematicData: EU,
        publishFormEnabled: qU,
        formEnabled: KU
      } = RU;
      return (0, xU.jsxs)(xU.Fragment, {
        children: [(0, xU.jsxs)(mU, {
          icon: "pen-to-square",
          title: tU("worldBuilder:basicsSection"),
          disabled: !KU,
          children: [(0, xU.jsx)(IU, {
            label: tU("general:name"),
            caption: tU("worldBuilder:schematicNameTagsHint"),
            children: (0, xU.jsx)(PU.d, {
              className: "SchematicPageName",
              defaultValue: pU.name,
              onValueChange: UU => EU("name", UU),
              placeholderText: tU("worldBuilder:schematicNamePlaceholder"),
              maxLength: GU.qb
            })
          }), (0, xU.jsx)(IU, {
            label: tU("general:description"),
            children: (0, xU.jsx)(PU.d, {
              className: "SchematicPageDescription",
              useTextarea: !0,
              defaultValue: pU.description,
              onValueChange: UU => EU("description", UU),
              placeholderText: tU("worldBuilder:schematicDescriptionPlaceholder"),
              maxLength: GU.mb
            })
          }), (0, xU.jsx)(RR, {
            gameCategory: pU.gameCategory,
            setGameCategory: UU => EU("gameCategory", UU),
            disabled: !qU
          }), !0 === pU.gamePublished && (0, xU.jsx)(AU, {
            schematicData: pU,
            updateSchematicData: EU,
            publishFormEnabled: qU,
            onClose: function() {
              null === gU || void 0 === gU || gU()
            }
          })]
        }), (0, xU.jsx)(wU, {
          schematicData: pU,
          updateSchematicData: EU,
          publishFormEnabled: qU,
          formEnabled: KU
        }), !0 === pU.gamePublished && (0, xU.jsx)(mU, {
          icon: "palette",
          title: tU("worldBuilder:texturePackSection"),
          disabled: !KU,
          children: (0, xU.jsx)(OU, {
            schematicData: pU,
            setTexturePack: RU.setTexturePack,
            initializeTexturePack: RU.initializeTexturePack,
            publishFormEnabled: qU
          })
        })]
      })
    }

    function tR(UU) {
      let {
        editor: RU
      } = UU;
      const {
        t: gU
      } = (0, TU.B)(), {
        schematicData: tU,
        formEnabled: pU,
        hasUnsavedChanges: PU
      } = RU, GU = pU && PU;
      return (0, xU.jsxs)("footer", {
        className: "SchematicPageFooter",
        children: [pU && PU && (0, xU.jsxs)("div", {
          className: "SchematicPageFooterStatus",
          children: [(0, xU.jsx)("span", {
            className: "SchematicPageFooterStatusDot"
          }), gU("worldBuilder:unsavedChanges")]
        }), (0, xU.jsx)(KU.g, {
          tooltipInner: (0, xU.jsx)("div", {
            className: "SaveButtonTooltip",
            children: gU(pU && !PU ? "worldBuilder:saveChangesNoneDescription" : "worldBuilder:saveChangesDescription")
          }),
          children: (0, xU.jsxs)(EU.e, {
            className: "SaveChangesButton",
            onClick: () => RU.saveSchematic(tU.gamePublished),
            disabled: !GU,
            children: [(0, xU.jsxs)("span", {
              className: pU ? "" : "SaveChangesButtonBodyHidden",
              children: [(0, xU.jsx)(cU.c, {
                name: "wrench"
              }), " ", gU("worldBuilder:saveChanges")]
            }), !pU && (0, xU.jsx)(qU.d, {})]
          })
        })]
      })
    }

    function pR(UU) {
      let {
        schematic: RU,
        onSchematicUpdate: gU,
        onClose: pU,
        inSourceWorld: PU
      } = UU;
      const {
        t: qU
      } = (0, TU.B)();

      function KU() {
        null === pU || void 0 === pU || pU()
      }
      const cU = (0, UR.c)(RU, {
        onNavigateAway: KU,
        inSourceWorld: PU
      });
      return (0, tU.useEffect)((() => {
        null === gU || void 0 === gU || gU(cU.schematicData)
      }), [cU.schematicData, gU]), (0, xU.jsxs)("div", {
        className: "SchematicPage SchematicPagePopupVariant",
        children: [(0, xU.jsxs)("div", {
          className: "SchematicPageBody",
          children: [(0, xU.jsx)(EU.d, {
            onClick: KU,
            children: qU("worldBuilder:back")
          }), (0, xU.jsx)(mU, {
            icon: "rocket-launch",
            title: qU("worldBuilder:actionsSection"),
            disabled: !cU.formEnabled,
            children: (0, xU.jsx)(nU.c, {
              editor: cU
            })
          }), (0, xU.jsx)(gR, {
            editor: cU,
            onClose: KU
          })]
        }), (0, xU.jsx)(tR, {
          editor: cU
        })]
      })
    }

    function ER(UU) {
      let {
        schematic: RU,
        onSchematicUpdate: gU,
        onClose: tU,
        inSourceWorld: EU
      } = UU;
      pU.NotificationProvider.showCustomPopup({
        body: UU => (0, xU.jsx)(pR, {
          schematic: RU,
          onSchematicUpdate: gU,
          onClose: UU,
          inSourceWorld: EU
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: tU,
        unlockPointerKey: "schematicPagePopup"
      })
    }
  },
  4614: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => GU
    });
    var tU = gU(1037),
      pU = gU.n(tU),
      EU = gU(1181),
      PU = gU(1049),
      TU = gU(1412),
      qU = gU(1344),
      KU = gU(1326),
      cU = gU(1090);

    function GU(UU) {
      let {
        editor: RU,
        className: gU
      } = UU;
      const {
        t: tU
      } = (0, EU.B)(), {
        schematicData: GU,
        formEnabled: jU,
        publishFormEnabled: uU
      } = RU, CU = !jU || !uU;
      return (0, cU.jsxs)("div", {
        className: pU()("PublishButtonContainer", gU),
        children: [RU.canEditSourceWorld && (0, cU.jsxs)(TU.e, {
          onClick: RU.editSourceWorld,
          disabled: CU,
          children: [(0, cU.jsx)(PU.c, {
            name: "edit"
          }), " ", tU("worldBuilder:editSourceWorld")]
        }), !GU.gamePublished && (0, cU.jsx)(qU.g, {
          tooltipInner: (0, cU.jsx)("div", {
            className: "PublishButtonTooltip",
            children: tU("worldBuilder:publishAsGameDescription")
          }),
          children: (0, cU.jsxs)(TU.j, {
            onClick: () => RU.saveSchematic(!0),
            disabled: CU,
            children: [(0, cU.jsx)(PU.c, {
              name: "rocket-launch"
            }), " ", tU("worldBuilder:publishAsGame"), " ", (0, cU.jsx)(PU.c, {
              name: "info-circle"
            })]
          })
        }), !0 === GU.gamePublished && (0, cU.jsxs)(cU.Fragment, {
          children: [(0, cU.jsx)(qU.g, {
            tooltipInner: (0, cU.jsx)("div", {
              className: "PublishButtonTooltip",
              children: tU("worldBuilder:unpublishAsGameDescription")
            }),
            children: (0, cU.jsxs)(TU.E, {
              onClick: RU.unpublishSchematic,
              disabled: CU,
              children: [(0, cU.jsx)(PU.c, {
                name: "rocket-launch"
              }), " ", tU("worldBuilder:unpublishAsGame"), " ", (0, cU.jsx)(PU.c, {
                name: "info-circle"
              })]
            })
          }), (0, cU.jsxs)(TU.e, {
            onClick: RU.playGame,
            disabled: CU,
            children: [(0, cU.jsx)(PU.c, {
              name: "joystick"
            }), " ", tU("general:playGame")]
          })]
        }), !jU && (0, cU.jsx)(KU.d, {
          loaderType: "Secondary"
        })]
      })
    }
  },
  4657: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => pU
    });
    var tU = gU(1196);
    async function pU(UU) {
      const RU = await fetch(`${tU.clientSideServerUrls.s3Url}/${UU}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === RU.status || 403 === RU.status) return null;
      if (!RU.ok) throw new Error(`Failed to download the texture pack (${RU.status})`);
      return await RU.json()
    }
  },
  4722: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => QU
    });
    var tU = gU(56),
      pU = gU(1320),
      EU = gU(994),
      PU = gU(165),
      TU = gU(1501),
      qU = gU(21),
      KU = gU(1800),
      cU = gU(1461),
      GU = gU(4248),
      jU = gU(1333),
      uU = gU(1112),
      CU = gU(1475);

    function hU(UU, RU) {
      return {
        schematicId: UU.schematicId,
        name: UU.name,
        description: UU.description,
        gamePublished: RU,
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

    function QU(UU) {
      let {
        onNavigateAway: RU,
        inSourceWorld: gU = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const {
        userContext: QU
      } = (0, uU.e)(), eU = (0, CU.useNavigatePreserveSearch)(), [WU, fU] = (0, tU.useState)({
        ...UU
      }), [xU, mU] = (0, tU.useState)("Enter"), [IU, JU] = (0, tU.useState)(void 0), wU = (0, tU.useRef)(hU(UU, UU.gamePublished)), nU = (0, tU.useRef)(void 0), bU = "Enter" === xU, oU = QU.playerHasRank("developer") || QU.playerHasRank("admin") || "Enter" === xU && !1 !== WU.schematicContainsSpawnBlock, ZU = void 0 !== IU && IU !== nU.current || JSON.stringify(hU(WU, WU.gamePublished)) !== JSON.stringify(wU.current);

      function aU(UU, RU) {
        fU((gU => ({
          ...gU,
          [UU]: RU
        })))
      }
      const YU = (0, tU.useCallback)((UU => {
        nU.current = UU, JU(UU)
      }), []);

      function BU(UU) {
        mU("Loading");
        const RU = hU(WU, UU),
          gU = IU !== nU.current ? IU : void 0;
        cU.c.updateSchematic(QU, RU, gU).then((gU => {
          let {
            customTexturePackKey: tU
          } = gU;
          mU("Success"), aU("customTexturePackKey", tU), wU.current = RU, nU.current = void 0, JU(void 0), setTimeout((() => {
            aU("gamePublished", UU), mU("Enter")
          }), 1e3)
        })).catch((UU => {
          var RU;
          (console.error("Failed to save schematic:", UU), mU("Error"), UU instanceof PU.e && UU.errorMessageForUser) && jU.NotificationProvider.showAlertPopup({
            title: "worldBuilder:changesNotSaved",
            subtitle: UU.errorMessageForUser,
            textOpts: {
              subtitle: null !== (RU = UU.errorMessageTranslationParams) && void 0 !== RU ? RU : void 0
            },
            confirmText: "general:ok"
          });
          setTimeout((() => {
            mU("Enter")
          }), 1e3)
        }))
      }
      return {
        schematicData: WU,
        updateSchematicData: aU,
        setTexturePack: JU,
        initializeTexturePack: YU,
        updateState: xU,
        formEnabled: bU,
        publishFormEnabled: oU,
        hasUnsavedChanges: ZU,
        canEditSourceWorld: !gU,
        saveSchematic: BU,
        unpublishSchematic: function() {
          jU.NotificationProvider.showPromptPopup({
            icon: "rocket-launch",
            title: "worldBuilder:unpublishAsGameConfirmTitle",
            subtitle: "worldBuilder:unpublishAsGameConfirmSubtitle",
            confirmText: "worldBuilder:unpublishAsGame",
            cancelText: "general:cancel",
            unlockPointerKey: "unpublishGamePrompt"
          }).getResult().then((UU => {
            !0 === UU && BU(!1)
          }))
        },
        editSourceWorld: function() {
          mU("Loading"), GU.e.getSourceWorld(WU.schematicId).then((UU => {
            KU.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, qU.h)("other"), eU((0, pU.e)("classic", UU)), null === RU || void 0 === RU || RU()
          })).catch((UU => {
            console.error("Failed to get source world:", UU), mU("Error"), setTimeout((() => {
              mU("Enter")
            }), 1e3)
          }))
        },
        playGame: function() {
          KU.gameBridge.send("leaveGame", {
            reloadPath: "/"
          }), eU((0, TU.v)((0, EU.x)(WU.schematicId), WU)), null === RU || void 0 === RU || RU()
        }
      }
    }
  },
  4604: () => {}
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);