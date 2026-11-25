export const id = 107;
export const ids = [107];
export const modules = {
  4959: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => pG,
      e: () => VG,
      g: () => fG
    });
    ZG(4967);
    var wG = ZG(1151),
      SG = ZG(1006),
      LG = ZG.n(SG),
      yG = ZG(1320),
      kG = (ZG(51), ZG(4396)),
      UG = ZG(1016),
      YG = ZG(1067);

    function VG(GG) {
      let {
        children: bG,
        label: ZG,
        className: SG,
        circleInfoText: kG,
        disabled: VG,
        onLabelClick: pG
      } = GG;
      const {
        t: fG
      } = (0, wG.w)(), QG = (0, YG.jsxs)("div", {
        className: LG()("Label", {
          ClickableLabel: void 0 !== pG
        }),
        onClick: pG,
        children: [fG(ZG), kG && (0, YG.jsx)(UG.c, {
          name: "circle-info"
        })]
      });
      return (0, YG.jsxs)("div", {
        className: LG()("LabeledInput", {
          [SG]: SG,
          DisabledLabelInput: VG
        }),
        children: [kG && (0, YG.jsx)(yG.h, {
          tooltipInner: (0, YG.jsx)("div", {
            className: "LabeledInputTooltip",
            children: fG(kG)
          }),
          children: QG
        }), !kG && QG, bG]
      })
    }

    function pG(GG) {
      let {
        checked: bG,
        setChecked: ZG
      } = GG;
      return (0, YG.jsx)("div", {
        className: "OtherInput ClickableOtherInput",
        "data-pad-focusable": !0,
        onClick: GG => {
          ZG(!bG)
        },
        children: (0, YG.jsx)(kG.e, {
          checked: bG,
          onChange: GG => {
            ZG(GG.target.checked)
          },
          disabled: !1
        })
      })
    }

    function fG(GG) {
      let {
        checked: bG,
        setChecked: ZG,
        disabled: wG
      } = GG;
      return (0, YG.jsx)("div", {
        className: LG()("SwitchContainer", {
          SwitchContainerDisabled: wG
        }),
        onClick: () => {
          wG || ZG(!bG)
        },
        children: (0, YG.jsx)(kG.e, {
          className: "SwitchCheckbox",
          checked: bG,
          onChange: GG => {
            ZG(GG.target.checked)
          },
          disabled: !!wG
        })
      })
    }
  },
  4973: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => YG
    });
    var wG = ZG(1006),
      SG = ZG.n(wG),
      LG = ZG(4655),
      yG = ZG(1151),
      kG = ZG(1067);
    const UG = [...LG.i, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function YG(GG) {
      const {
        disabled: bG,
        hideWrapper: ZG
      } = GG, {
        t: wG
      } = (0, yG.w)(), YG = GG.advancedMode ? UG.map((bG => [bG, GG.callbacks[bG]])) : LG.i.map((bG => [bG, GG.callbacks[bG]])), pG = (0, kG.jsx)("div", {
        className: SG()("PluginsGrid", {
          SectionBody: !ZG
        }),
        children: YG.map((GG => {
          let [ZG, wG] = GG;
          return (0, kG.jsx)(VG, {
            plugin: ZG,
            callbacks: wG,
            disabled: bG
          }, ZG)
        }))
      });
      return ZG ? pG : (0, kG.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, kG.jsx)("div", {
          className: "SectionTitle",
          children: wG("worldBuilder:pluginsSection")
        }), pG]
      })
    }

    function VG(GG) {
      let {
        plugin: bG,
        callbacks: {
          isEnabled: ZG,
          DW: wG
        },
        disabled: LG
      } = GG;
      const {
        t: UG
      } = (0, yG.w)(), YG = ZG();
      return (0, kG.jsxs)("div", {
        className: SG()("PluginCard", {
          PluginCardEnabled: YG,
          PluginCardDisabledForm: LG
        }),
        "data-pad-focusable": !0,
        "aria-disabled": LG || void 0,
        onClick: () => {
          LG || wG(!YG)
        },
        children: [(0, kG.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, kG.jsx)("img", {
            src: `/textures/games/classic/customGames/${bG}.png`,
            alt: bG
          })
        }), (0, kG.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, kG.jsx)("div", {
            className: "PluginCardTitle",
            children: UG(pG[bG])
          }), (0, kG.jsx)("div", {
            className: "PluginCardDescription",
            children: UG(fG[bG])
          })]
        }), (0, kG.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: UG(YG ? "general:on" : "general:off")
        })]
      })
    }
    const pG = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      fG = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  4955: (GG, bG, ZG) => {
    ZG.d(bG, {
      i: () => Sb,
      d: () => wb,
      g: () => Zb,
      m: () => Lb
    });
    var wG = ZG(51),
      SG = ZG(1311),
      LG = ZG(1393),
      yG = ZG(1621),
      kG = ZG(1151),
      UG = ZG(1302),
      YG = ZG(1320),
      VG = ZG(1016),
      pG = ZG(1177),
      fG = ZG(1006),
      QG = ZG.n(fG),
      KG = ZG(333),
      hG = ZG(4655),
      dG = ZG(1198),
      JG = ZG(4959),
      rG = ZG(3113),
      zG = ZG(4973),
      EG = ZG(1067);

    function oG(GG) {
      let {
        icon: bG,
        title: ZG,
        disabled: wG,
        children: SG
      } = GG;
      return (0, EG.jsxs)("div", {
        className: QG()("ManageCard", {
          ManageCardDisabled: wG
        }),
        children: [(0, EG.jsxs)("div", {
          className: "ManageCardHead",
          children: [(0, EG.jsx)("div", {
            className: "ManageCardIcon",
            children: (0, EG.jsx)(VG.c, {
              name: bG
            })
          }), (0, EG.jsx)("div", {
            children: (0, EG.jsx)("h2", {
              className: "ManageCardTitle",
              children: ZG
            })
          })]
        }), (0, EG.jsxs)("div", {
          className: "ManageCardBody",
          children: [SG, wG && (0, EG.jsx)("div", {
            className: "ManageCardDisabledOverlay"
          })]
        })]
      })
    }

    function XG(GG) {
      let {
        label: bG,
        caption: ZG,
        children: wG
      } = GG;
      return (0, EG.jsxs)("div", {
        className: "ManageStackedField",
        children: [(0, EG.jsx)("div", {
          className: "ManageStackedFieldLabel",
          children: bG
        }), wG, ZG && (0, EG.jsx)("div", {
          className: "ManageStackedFieldCaption",
          children: ZG
        })]
      })
    }

    function uG(GG) {
      let {
        label: bG,
        caption: ZG,
        disabled: wG,
        children: SG
      } = GG;
      return (0, EG.jsxs)("div", {
        className: QG()("ManageField", {
          ManageFieldDisabled: wG
        }),
        children: [(0, EG.jsxs)("div", {
          className: "ManageFieldText",
          children: [(0, EG.jsx)("div", {
            className: "ManageFieldLabel",
            children: bG
          }), (0, EG.jsx)("div", {
            className: "ManageFieldCaption",
            children: ZG
          })]
        }), (0, EG.jsx)("div", {
          className: "ManageFieldControl",
          children: SG
        })]
      })
    }

    function iG(GG) {
      var bG, ZG;
      let {
        schematicData: wG,
        updateSchematicData: SG,
        publishFormEnabled: LG,
        formEnabled: yG
      } = GG;
      const {
        t: UG
      } = (0, kG.w)(), YG = !LG, VG = {
        tpRequests: {
          isEnabled: () => !wG.disableTpRequests,
          DW: GG => SG("disableTpRequests", !GG)
        },
        spawnProtection: {
          isEnabled: () => !wG.disableSpawnProtection,
          DW: GG => SG("disableSpawnProtection", !GG)
        },
        spawnReset: {
          isEnabled: () => !!wG.enableSpawnReset,
          DW: GG => SG("enableSpawnReset", GG)
        },
        smpMarketplace: {
          isEnabled: () => !!wG.enableSmpMarketplace,
          DW: GG => SG("enableSmpMarketplace", GG)
        },
        survivalGuns: {
          isEnabled: () => !!wG.enableSurvivalGuns,
          DW: GG => SG("enableSurvivalGuns", GG)
        },
        fallDamage: {
          isEnabled: () => !wG.disableFallDamage,
          DW: GG => SG("disableFallDamage", !GG)
        },
        dayNight: {
          isEnabled: () => !!wG.enableDayNight,
          DW: GG => SG("enableDayNight", GG)
        }
      };
      return (0, EG.jsxs)(EG.Fragment, {
        children: [!1 === wG.schematicContainsSpawnBlock && (0, EG.jsx)("div", {
          className: "ManageWarningBanner",
          children: UG("worldBuilder:mustContainSpawnBlock")
        }), (0, EG.jsxs)("div", {
          className: "ManageSettingsGrid",
          children: [(0, EG.jsxs)(oG, {
            icon: "globe",
            title: UG("worldBuilder:worldRulesSection"),
            disabled: !yG,
            children: [(0, EG.jsx)(uG, {
              label: UG("classic:defaultGamemode"),
              caption: UG("classic:defaultGamemodeDescription"),
              disabled: YG,
              children: (0, EG.jsx)(rG.b, {
                controlClassName: "ManageDropdown",
                options: hG.F.map((GG => ({
                  value: GG,
                  label: KG.y[GG]
                }))),
                value: wG.defaultGamemode,
                onChange: GG => SG("defaultGamemode", GG.value)
              })
            }), (0, EG.jsx)(uG, {
              label: UG("classic:voidDeathHeight"),
              caption: UG("classic:voidDeathHeightDescription"),
              disabled: YG,
              children: (0, EG.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, EG.jsx)("input", {
                  type: "number",
                  max: dG.F,
                  value: null !== (bG = wG.voidDeathHeight) && void 0 !== bG ? bG : "",
                  onChange: GG => {
                    const bG = parseInt(GG.target.value);
                    SG("voidDeathHeight", bG)
                  }
                }), (0, EG.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: UG("worldBuilder:blocksUnit")
                })]
              })
            }), (0, EG.jsx)(uG, {
              label: UG("classic:worldBorder"),
              caption: UG("classic:worldBorderDescription"),
              disabled: YG,
              children: (0, EG.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, EG.jsx)("input", {
                  type: "number",
                  min: dG.N,
                  max: dG.I,
                  placeholder: UG("worldBuilder:noWorldBorderLimit"),
                  value: null !== (ZG = wG.worldBorder) && void 0 !== ZG ? ZG : "",
                  onChange: GG => {
                    const bG = parseInt(GG.target.value);
                    SG("worldBorder", isNaN(bG) ? null : bG)
                  }
                }), (0, EG.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: UG("worldBuilder:blocksUnit")
                })]
              })
            }), (0, EG.jsx)(uG, {
              label: UG("classic:disableMobs"),
              caption: UG("classic:disableMobsDescription"),
              disabled: YG,
              children: (0, EG.jsx)(JG.g, {
                checked: wG.disableMobs,
                setChecked: GG => SG("disableMobs", GG),
                disabled: YG
              })
            })]
          }), (0, EG.jsxs)(oG, {
            icon: "user-group",
            title: UG("worldBuilder:playerAndLobbySection"),
            disabled: !yG,
            children: [(0, EG.jsx)(uG, {
              label: UG("classic:disableKeepInventory"),
              caption: UG("classic:disableKeepInventoryDescription"),
              disabled: YG,
              children: (0, EG.jsx)(JG.g, {
                checked: wG.disableKeepInventory,
                setChecked: GG => SG("disableKeepInventory", GG),
                disabled: YG
              })
            }), (0, EG.jsx)(uG, {
              label: UG("classic:persistInventory"),
              caption: UG("classic:persistInventoryDescription"),
              disabled: YG,
              children: (0, EG.jsx)(rG.b, {
                controlClassName: "ManageDropdown",
                options: hG.l.map((GG => ({
                  value: GG,
                  label: KG.k[GG]
                }))),
                value: wG.persistInventory,
                onChange: GG => SG("persistInventory", GG.value)
              })
            }), (0, EG.jsx)(uG, {
              label: UG("classic:persistWorld"),
              caption: UG("classic:persistWorldDescription"),
              disabled: YG,
              children: (0, EG.jsx)(JG.g, {
                checked: wG.persistWorld,
                setChecked: GG => SG("persistWorld", GG),
                disabled: YG
              })
            }), (0, EG.jsx)(uG, {
              label: UG("classic:disableLobbySpawn"),
              caption: UG("classic:disableLobbySpawnDescription"),
              disabled: YG,
              children: (0, EG.jsx)(JG.g, {
                checked: wG.disableLobbySpawn,
                setChecked: GG => SG("disableLobbySpawn", GG),
                disabled: YG
              })
            }), (0, EG.jsx)(uG, {
              label: UG("classic:hideLobbyCode"),
              caption: UG("classic:hideLobbyCodeDescription"),
              disabled: YG,
              children: (0, EG.jsx)(JG.g, {
                checked: wG.hideLobbyCode,
                setChecked: GG => SG("hideLobbyCode", GG),
                disabled: YG
              })
            })]
          })]
        }), (0, EG.jsx)(oG, {
          icon: "layer-group",
          title: UG("worldBuilder:pluginsSection"),
          disabled: !yG,
          children: (0, EG.jsx)(zG.d, {
            callbacks: VG,
            disabled: YG,
            advancedMode: !0,
            hideWrapper: !0
          })
        })]
      })
    }
    var CG = ZG(4975),
      WG = ZG(4396),
      mG = ZG(1431),
      IG = ZG(3465),
      FG = ZG(1092),
      vG = ZG(4933),
      aG = ZG(4977),
      cG = ZG(1396);
    const lG = 50,
      jG = .3;
    async function PG(GG) {
      const bG = await
      function(GG) {
        return new Promise(((bG, ZG) => {
          const wG = new FileReader;
          wG.onload = () => bG(wG.result), wG.onerror = ZG, wG.readAsDataURL(GG)
        }))
      }(GG), ZG = await
      function(GG) {
        return new Promise(((bG, ZG) => {
          const wG = new Image;
          wG.onload = () => bG(wG), wG.onerror = () => ZG(new Error("Failed to load image")), wG.src = GG
        }))
      }(bG);
      if (ZG.naturalHeight > ZG.naturalWidth) throw new MG;
      const wG = 1024 * lG,
        {
          dataUrl: SG,
          finalQuality: LG
        } = function(GG, bG) {
          const ZG = document.createElement("canvas");
          ZG.width = GG.naturalWidth, ZG.height = GG.naturalHeight, ZG.getContext("2d").drawImage(GG, 0, 0);
          let wG = .92,
            SG = ZG.toDataURL("image/jpeg", wG);
          for (; .75 * SG.length > bG && wG > .05;) wG -= .05, SG = ZG.toDataURL("image/jpeg", wG);
          return {
            dataUrl: SG,
            finalQuality: wG
          }
        }(ZG, wG);
      if (Math.ceil(.75 * SG.length) > wG) throw new AG;
      return {
        base64Jpg: SG,
        heavilyCompressed: LG < jG
      }
    }
    class MG extends Error {}
    class AG extends Error {}
    var sG = function(GG) {
      return GG[GG.NOT_LOGGED_IN = 0] = "NOT_LOGGED_IN", GG[GG.THUMBNAIL_LIMIT_REACHED = 1] = "THUMBNAIL_LIMIT_REACHED", GG
    }(sG || {});

    function qG(GG) {
      var bG;
      let {
        schematicId: ZG,
        hasReadUploadPolicy: SG,
        onPolicyValidationError: UG,
        onThumbnailReady: YG
      } = GG;
      const {
        t: fG
      } = (0, kG.w)(), [KG, hG] = (0, wG.useState)(null), [dG, JG] = (0, wG.useState)(""), [rG, zG] = (0, wG.useState)(""), [oG, XG] = (0, wG.useState)(!0), [uG, iG] = (0, wG.useState)(!1), CG = (0, wG.useRef)(!1), [WG, mG] = (0, wG.useState)(null), [IG, FG] = (0, wG.useState)(!1), [vG, cG] = (0, wG.useState)(!1), lG = (0, wG.useRef)(0), {
        getRootProps: jG,
        getInputProps: sG,
        isDragActive: qG
      } = (0, aG.c)({
        accept: {
          "image/*": [".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp"]
        },
        multiple: !1,
        onDrop: async GG => {
          if (0 === GG.length) return;
          const bG = GG[0],
            ZG = ++lG.current;
          mG(null), FG(!1), hG(null), JG(bG.name);
          try {
            const GG = await PG(bG);
            if (ZG !== lG.current) return;
            hG(GG), FG(GG.heavilyCompressed)
          } catch (wG) {
            if (ZG !== lG.current) return;
            mG(fG(wG instanceof MG ? "thumbnail:portraitImagesNotAllowed" : wG instanceof AG ? "thumbnail:couldNotCompressImage" : "thumbnail:failedToUploadImage"))
          }
        },
        useFsAccessApi: !1
      }), nG = dG.length <= 30 ? dG : `${dG.slice(0,27)}...`, gG = null !== (bG = null === KG || void 0 === KG ? void 0 : KG.base64Jpg) && void 0 !== bG ? bG : null, eG = rG.trim(), RG = eG.length >= pG.k && eG.length <= pG.j, TG = vG && !KG && !WG, HG = vG && !RG;
      return (0, EG.jsxs)("div", {
        className: "ThumbnailUploadContainer",
        children: [(0, EG.jsxs)("div", {
          ...jG({
            className: QG()("ThumbnailUploadDropzone", {
              ActiveDrag: qG,
              ValidationError: TG
            })
          }),
          children: [(0, EG.jsx)("input", {
            ...sG()
          }), !qG && gG ? (0, EG.jsxs)(EG.Fragment, {
            children: [(0, EG.jsxs)("div", {
              className: "ThumbnailAspectPreviews",
              children: [(0, EG.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, EG.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "1:1"
                }), (0, EG.jsx)("div", {
                  className: "ThumbnailAspectFrame Square",
                  children: (0, EG.jsx)("img", {
                    src: gG,
                    alt: "1:1 preview"
                  })
                })]
              }), (0, EG.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, EG.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "16:9"
                }), (0, EG.jsx)("div", {
                  className: "ThumbnailAspectFrame Wide",
                  children: (0, EG.jsx)("img", {
                    src: gG,
                    alt: "16:9 preview"
                  })
                })]
              })]
            }), (0, EG.jsxs)("div", {
              children: [(0, EG.jsx)("div", {
                className: "ThumbnailUploadInstructions Active",
                children: nG
              }), (0, EG.jsx)("div", {
                className: "ThumbnailUploadInstructions Preview",
                children: fG("thumbnail:preview")
              })]
            })]
          }) : (0, EG.jsxs)(EG.Fragment, {
            children: [(0, EG.jsx)("div", {
              className: "ThumbnailUploadIcon",
              children: (0, EG.jsx)(VG.c, {
                name: "image"
              })
            }), (0, EG.jsx)("div", {
              className: "ThumbnailUploadInstructions",
              children: fG("thumbnail:dragImageHere")
            })]
          })]
        }), TG && (0, EG.jsx)("div", {
          className: "ThumbnailUploadError",
          children: fG("thumbnail:imageRequired")
        }), (0, EG.jsx)(yG.b, {
          className: QG()("ThumbnailUploadNameInput", {
            ValidationError: HG
          }),
          placeholderText: fG("thumbnail:thumbnailName"),
          defaultValue: rG,
          onValueChange: GG => {
            zG(GG)
          },
          maxLength: pG.j
        }), HG && (0, EG.jsx)("div", {
          className: "ThumbnailUploadError",
          children: fG("thumbnail:nameRequired", {
            min: pG.k,
            max: pG.j
          })
        }), (0, EG.jsxs)("label", {
          className: "ThumbnailUploadCheckbox",
          children: [(0, EG.jsx)("input", {
            type: "checkbox",
            checked: oG,
            onChange: GG => {
              XG(GG.target.checked)
            }
          }), fG("thumbnail:setAsThumbnailOnceApproved")]
        }), IG && (0, EG.jsx)("div", {
          className: "ThumbnailUploadWarning",
          children: fG("thumbnail:heavyCompressionWarning")
        }), WG && (0, EG.jsx)("div", {
          className: "ThumbnailUploadError",
          children: WG
        }), (0, EG.jsx)(LG.k, {
          disabled: uG,
          className: "ThumbnailUploadButton",
          onClick: async () => {
            if (cG(!0), !CG.current && KG && RG && SG) {
              CG.current = !0, iG(!0), mG(null);
              try {
                await YG(KG.base64Jpg, eG, oG ? ZG : null)
              } catch (GG) {
                mG(GG.errorMessageForUser ? fG(GG.errorMessageForUser, GG.errorMessageTranslationParams) : fG("thumbnail:failedToUploadImage"))
              } finally {
                CG.current = !1, iG(!1)
              }
            } else SG || UG()
          },
          children: fG(uG ? "thumbnail:processing" : "thumbnail:uploadThumbnail")
        })]
      })
    }
    const nG = 2e3;

    function gG(GG) {
      let {
        schematicId: bG,
        ownedThumbnailCount: ZG,
        onClose: SG,
        onThumbnailReady: LG
      } = GG;
      const {
        t: yG
      } = (0, kG.w)(), {
        userContext: UG
      } = (0, FG.e)(), [YG, fG] = (0, wG.useState)(!1), [KG, hG] = (0, wG.useState)(!1), [dG, JG] = (0, wG.useState)(!1), rG = (0, wG.useRef)();
      (0, wG.useEffect)((() => () => {
        clearTimeout(rG.current)
      }), []);
      const zG = function(GG, bG) {
        const ZG = [];
        return GG.isLoggedIn() || ZG.push(sG.NOT_LOGGED_IN), bG >= pG.S && ZG.push(sG.THUMBNAIL_LIMIT_REACHED), ZG
      }(UG, ZG);
      if (zG.length > 0) {
        const GG = {
          [sG.NOT_LOGGED_IN]: {
            key: "thumbnail:mustBeLoggedInToUpload"
          },
          [sG.THUMBNAIL_LIMIT_REACHED]: {
            key: "thumbnail:thumbnailLimitReachedPleaseDelete",
            params: {
              max: pG.S
            }
          }
        };
        return (0, EG.jsxs)("div", {
          className: "ThumbnailUploaderInner",
          children: [(0, EG.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: yG("thumbnail:cannotUploadThumbnail")
          }), zG.map(((bG, ZG) => {
            const wG = GG[bG];
            return (0, EG.jsxs)("div", {
              className: "CannotUploadThumbnailItem",
              children: [(0, EG.jsx)(VG.c, {
                name: "triangle-exclamation"
              }), (0, EG.jsx)("span", {
                children: yG(wG.key, wG.params)
              })]
            }, ZG)
          }))]
        })
      }
      return (0, EG.jsxs)("div", {
        className: QG()("ThumbnailUploaderInner", {
          ThumbnailUploaderSuccess: YG
        }),
        children: [YG && (0, EG.jsxs)("div", {
          className: "ThumbnailUploadSuccessOverlay",
          children: [(0, EG.jsxs)("div", {
            className: "ThumbnailUploadSuccessIcon FullyFancyText AnimFadeInScaleUp",
            children: [(0, EG.jsx)(VG.c, {
              name: "check"
            }), (0, EG.jsx)(cG.d, {})]
          }), (0, EG.jsx)("div", {
            className: "ThumbnailUploadSuccessText AnimFadeInScaleUp",
            children: yG("thumbnail:thumbnailUploaded")
          })]
        }), (0, EG.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: yG("thumbnail:uploadThumbnail")
        }), (0, EG.jsxs)("div", {
          className: "ThumbnailUploaderBody",
          children: [(0, EG.jsxs)("div", {
            className: "ThumbnailUploaderLeft",
            children: [(0, EG.jsx)("h3", {
              className: "SchematicPopupSubtitle",
              children: yG("thumbnail:chooseImage", {
                maxSizeKb: lG
              })
            }), (0, EG.jsx)(qG, {
              schematicId: bG,
              hasReadUploadPolicy: KG,
              onPolicyValidationError: () => {
                JG(!0)
              },
              onThumbnailReady: async (GG, bG, ZG) => {
                await LG(GG, bG, ZG), fG(!0), rG.current = setTimeout(SG, nG)
              }
            })]
          }), (0, EG.jsxs)("div", {
            className: "ThumbnailUploadPolicy",
            children: [(0, EG.jsx)("h3", {
              className: "ThumbnailUploadPolicyTitle",
              children: yG("thumbnail:uploadPolicy")
            }), (0, EG.jsxs)("ul", {
              className: "ThumbnailUploadPolicyList",
              children: [(0, EG.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, EG.jsx)(VG.c, {
                  name: "check"
                }), (0, EG.jsx)("span", {
                  children: yG("thumbnail:policyFollowGuidelines")
                })]
              }), (0, EG.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, EG.jsx)(VG.c, {
                  name: "check"
                }), (0, EG.jsx)("span", {
                  children: yG("thumbnail:policyInGameAssets")
                })]
              }), (0, EG.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, EG.jsx)(VG.c, {
                  name: "check"
                }), (0, EG.jsx)("span", {
                  children: yG("thumbnail:policyLimitText")
                })]
              }), (0, EG.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, EG.jsx)(VG.c, {
                  name: "x"
                }), (0, EG.jsx)("span", {
                  children: yG("thumbnail:policyCopyrightContent")
                })]
              }), (0, EG.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, EG.jsx)(VG.c, {
                  name: "x"
                }), (0, EG.jsx)("span", {
                  children: yG("thumbnail:policyOutOfGameAssets")
                })]
              }), (0, EG.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, EG.jsx)(VG.c, {
                  name: "x"
                }), (0, EG.jsx)("span", {
                  children: yG("thumbnail:policyBloxdTags")
                })]
              }), (0, EG.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, EG.jsx)(VG.c, {
                  name: "x"
                }), (0, EG.jsx)("span", {
                  children: yG("thumbnail:policyMustReflectGame")
                })]
              })]
            }), (0, EG.jsxs)("label", {
              className: QG()("ThumbnailUploadCheckbox Policy", {
                ValidationError: dG && !KG
              }),
              children: [(0, EG.jsx)("input", {
                type: "checkbox",
                checked: KG,
                onChange: GG => {
                  hG(GG.target.checked)
                }
              }), yG("thumbnail:agreeToUploadPolicy")]
            }), dG && !KG && (0, EG.jsx)("div", {
              className: "ThumbnailPolicyError",
              children: yG("thumbnail:policyRequired")
            })]
          })]
        })]
      })
    }
    var eG = ZG(1163);
    const RG = {
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

    function TG(GG) {
      var bG, ZG;
      let {
        schematicData: yG,
        updateSchematicData: YG,
        publishFormEnabled: pG,
        onClose: fG
      } = GG;
      const {
        t: KG
      } = (0, kG.w)(), {
        userContext: hG,
        isUserContextUpdating: dG
      } = (0, FG.e)(), JG = (0, IG.c)(), [rG, zG] = (0, wG.useState)([]), [oG, XG] = (0, wG.useState)([]), [uG, iG] = (0, wG.useState)(!0), [CG, WG] = (0, wG.useState)(null !== (bG = yG.customThumbnailId) && void 0 !== bG ? bG : null), [aG, cG] = (0, wG.useState)(null), lG = (0, wG.useRef)(null !== (ZG = yG.customThumbnailId) && void 0 !== ZG ? ZG : null), jG = (0, wG.useRef)(0), PG = (0, wG.useRef)(null), MG = (0, wG.useRef)(null), AG = (0, wG.useRef)(null), sG = (0, wG.useRef)(!1);

      function qG(GG, bG) {
        AG.current && (clearTimeout(AG.current), AG.current = null), cG(GG), null !== GG && bG && (AG.current = setTimeout((() => {
          cG(null), AG.current = null
        }), 5e3))
      }(0, wG.useEffect)((() => () => {
        clearTimeout(MG.current), clearTimeout(AG.current)
      }), []);
      const nG = (0, wG.useCallback)((() => {
        iG(!0), mG.d.getOwnedThumbnails(hG).then((GG => {
          const bG = [],
            ZG = [];
          for (const wG of GG.thumbnails) wG.rejectionPolicyId ? bG.push(wG) : ZG.push(wG);
          bG.sort(((GG, bG) => GG.lastUpdatedAt - bG.lastUpdatedAt)), ZG.sort(((GG, bG) => {
            const ZG = GG.approved ? 1 : 0,
              wG = (bG.approved ? 1 : 0) - ZG;
            return 0 !== wG ? wG : bG.lastUpdatedAt - GG.lastUpdatedAt
          })), XG(bG), zG(ZG)
        })).catch((GG => {
          console.error("Failed to fetch thumbnails:", GG)
        })).finally((() => {
          iG(!1)
        }))
      }), [hG]);
      async function RG(GG, bG, ZG) {
        return mG.d.uploadSchematicThumbnail(hG, GG, bG, ZG).then((() => {
          qG({
            text: KG("thumbnail:uploadedAwaitingModeration"),
            type: "success"
          }, !0), nG()
        }))
      }

      function TG() {
        jG.current = Date.now(), MG.current = null;
        const GG = PG.current;
        PG.current = null, qG({
          text: KG("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), mG.d.setSchematicThumbnail(hG, yG.schematicId, GG).then((() => {
          JG.current && (qG({
            text: KG("thumbnail:thumbnailUpdated"),
            type: "success"
          }, !0), lG.current = GG, YG("customThumbnailId", GG), YG("customThumbnailBlurhash", void 0), YG("customThumbnailVariants", void 0))
        })).catch((GG => {
          JG.current && (qG({
            text: GG.errorMessageForUser ? KG(GG.errorMessageForUser, GG.errorMessageTranslationParams) : KG("thumbnail:failedToSetThumbnail"),
            type: "error"
          }, !0), WG(lG.current))
        }))
      }

      function DG(GG) {
        WG(GG), PG.current = GG;
        const bG = Date.now() - jG.current;
        bG >= 1e3 ? TG() : (qG({
          text: KG("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), MG.current || (MG.current = setTimeout((() => {
          TG()
        }), 1e3 - bG)))
      }
      return (0, wG.useEffect)((() => {
        !1 === dG && nG()
      }), [dG, nG]), oG.length > 0 ? (0, EG.jsx)(HG, {
        rejectedThumbnails: oG,
        userContext: hG,
        isMountedRef: JG,
        onAcknowledged: nG
      }) : (0, EG.jsxs)("div", {
        className: "BloxdForm ThumbnailSection",
        children: [(0, EG.jsxs)("div", {
          className: "SectionTitle",
          children: [KG("thumbnail:gameThumbnail"), aG && (0, EG.jsx)("span", {
            className: QG()("ThumbnailActionMsg", `ThumbnailActionMsg--${aG.type}`),
            children: aG.text
          })]
        }), (0, EG.jsx)("div", {
          className: "SectionBody",
          children: (0, EG.jsxs)("div", {
            className: "ThumbnailGrid",
            children: [(0, EG.jsxs)("div", {
              className: QG()("ThumbnailGridItem ThumbnailGridItemDefault", {
                ThumbnailGridItemSelected: null === CG
              }),
              onClick: () => DG(null),
              children: [(0, EG.jsx)(vG.e, {
                game: {
                  schematicId: yG.schematicId,
                  imageBlurhash: yG.imageBlurhash
                }
              }), (0, EG.jsx)("div", {
                className: "ThumbnailGridItemLabel ThumbnailDefaultLabel",
                children: KG("general:default")
              })]
            }), uG && (0, EG.jsx)(UG.b, {}), rG.map(((GG, bG) => (0, EG.jsxs)("div", {
              className: QG()("ThumbnailGridItem", {
                ThumbnailGridItemSelected: CG === GG.id,
                ThumbnailGridItemPending: !GG.approved
              }),
              onClick: () => {
                GG.approved && DG(GG.id)
              },
              children: [GG.approved && (0, EG.jsx)("img", {
                src: `${eG.clientSideServerUrls.s3Url}/customThumbnails/${GG.id}.jpg`,
                alt: "Thumbnail"
              }), GG.approved && (0, EG.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: GG.name
              }), GG.id && (0, EG.jsx)(LG.C, {
                className: "ThumbnailDeleteButton",
                onClick: bG => async function(GG, bG, ZG) {
                  GG.stopPropagation();
                  const wG = await SG.NotificationProvider.showCustomPopup({
                      body: GG => (0, EG.jsx)(tG, {
                        thumbnailId: bG,
                        thumbnailName: ZG,
                        onClose: bG => {
                          bG && (sG.current = !0), GG()
                        }
                      }),
                      middleScreenPopupClassName: "ThumbnailDeleteConfirmPopup",
                      onClose: fG
                    }).getResult(),
                    LG = sG.current;
                  sG.current = !1, LG && !0 === wG && (JG.current && qG({
                    text: KG("thumbnail:deletingThumbnail"),
                    type: "info"
                  }, !1), mG.d.deleteSchematicThumbnail(hG, bG).then((() => {
                    JG.current && (qG({
                      text: KG("thumbnail:thumbnailDeleted"),
                      type: "success"
                    }, !0), lG.current === bG && DG(null), nG())
                  })).catch((GG => {
                    JG.current && qG({
                      text: GG.errorMessageForUser ? KG(GG.errorMessageForUser, GG.errorMessageTranslationParams) : KG("thumbnail:failedToDeleteThumbnail"),
                      type: "error"
                    }, !0)
                  })))
                }(bG, GG.id, GG.name),
                children: (0, EG.jsx)(VG.c, {
                  name: "trash-can"
                })
              }), !GG.approved && (0, EG.jsx)("div", {
                className: "ThumbnailUnapprovedIcon",
                children: (0, EG.jsx)(VG.c, {
                  name: "hourglass-clock"
                })
              }), !GG.approved && (0, EG.jsxs)("div", {
                className: "ThumbnailGridItemLabel ThumbnailPendingLabel",
                children: [GG.name, (0, EG.jsx)("br", {}), KG("thumbnail:pendingApproval")]
              })]
            }, bG))), (0, EG.jsxs)("div", {
              className: QG()("ThumbnailGridItem ThumbnailUploadTile", {
                ThumbnailUploadTileDisabled: !pG
              }),
              onClick: () => {
                pG && function(GG) {
                  let {
                    schematicId: bG,
                    ownedThumbnailCount: ZG,
                    onThumbnailReady: wG,
                    onClose: LG
                  } = GG;
                  SG.NotificationProvider.showCustomPopup({
                    body: GG => (0, EG.jsx)(gG, {
                      schematicId: bG,
                      ownedThumbnailCount: ZG,
                      onClose: GG,
                      onThumbnailReady: wG
                    }),
                    middleScreenPopupClassName: "SchematicThumbnailPopup",
                    onClose: LG,
                    unlockPointerKey: "schematicThumbnailUploaderPopup"
                  })
                }({
                  schematicId: yG.schematicId,
                  ownedThumbnailCount: rG.length,
                  onThumbnailReady: RG,
                  onClose: fG
                })
              },
              children: [(0, EG.jsx)(VG.c, {
                name: "plus"
              }), (0, EG.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: KG("thumbnail:uploadThumbnail")
              })]
            })]
          })
        })]
      })
    }

    function HG(GG) {
      let {
        rejectedThumbnails: bG,
        userContext: ZG,
        isMountedRef: SG,
        onAcknowledged: yG
      } = GG;
      const {
        t: YG
      } = (0, kG.w)(), [pG, fG] = (0, wG.useState)(!1), [QG, KG] = (0, wG.useState)(!1), hG = function(GG) {
        const bG = new Map;
        for (const ZG of GG) {
          const GG = ZG.rejectionPolicyId,
            wG = bG.get(GG);
          wG ? wG.push(ZG) : bG.set(GG, [ZG])
        }
        return bG
      }(bG);
      return (0, EG.jsxs)("div", {
        className: "ThumbnailRejectionNotice",
        children: [(0, EG.jsxs)("div", {
          className: "ThumbnailRejectionNoticeTitle",
          children: [(0, EG.jsx)(VG.c, {
            name: "triangle-exclamation"
          }), " ", YG("thumbnail:thumbnailsRejected"), " ", (0, EG.jsx)(VG.c, {
            name: "triangle-exclamation"
          })]
        }), (0, EG.jsx)("div", {
          className: "ThumbnailRejectionNoticeSubtitle",
          children: YG("thumbnail:thumbnailsRejectedDescription")
        }), (0, EG.jsx)("div", {
          className: "ThumbnailRejectionNoticeList",
          children: [...hG.entries()].map((GG => {
            let [bG, ZG] = GG;
            const wG = RG[bG];
            return (0, EG.jsxs)("div", {
              className: "ThumbnailRejectionNoticeGroup",
              children: [(0, EG.jsx)("div", {
                className: "ThumbnailRejectionNoticeItems",
                children: ZG.map((GG => (0, EG.jsxs)("div", {
                  className: "ThumbnailRejectionNoticeItem",
                  children: [(0, EG.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemIcon",
                    children: (0, EG.jsx)(VG.c, {
                      name: "image-slash"
                    })
                  }), (0, EG.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemDetails",
                    children: (0, EG.jsx)("div", {
                      className: "ThumbnailRejectionNoticeItemName",
                      children: GG.name
                    })
                  })]
                }, GG.id)))
              }), (0, EG.jsxs)("div", {
                className: "ThumbnailRejectionNoticeGroupReason",
                children: [YG("thumbnail:rejectionReason"), " ", wG ? YG(wG.reason) : bG]
              }), wG && (0, EG.jsx)("ul", {
                className: "ThumbnailRejectionNoticeGroupTips",
                children: wG.tips.map((GG => (0, EG.jsx)("li", {
                  children: YG(GG)
                }, GG)))
              })]
            }, bG)
          }))
        }), (0, EG.jsxs)("label", {
          className: "ThumbnailRejectionNoticeCheckbox",
          children: [(0, EG.jsx)(WG.e, {
            checked: pG,
            onChange: GG => fG(GG.target.checked),
            disabled: QG
          }), (0, EG.jsx)("span", {
            children: YG("thumbnail:haveReadRejectionReasons")
          })]
        }), (0, EG.jsx)(LG.k, {
          onClick: async function() {
            KG(!0);
            const GG = await Promise.allSettled(bG.map((GG => mG.d.deleteSchematicThumbnail(ZG, GG.id))));
            if (!SG.current) return;
            const wG = GG.filter((GG => "rejected" === GG.status));
            wG.length > 0 && console.error("Some rejected thumbnails failed to delete:", wG), yG()
          },
          disabled: !pG || QG,
          className: "ThumbnailRejectionNoticeAcceptButton",
          children: QG ? (0, EG.jsx)(UG.b, {}) : YG("general:accept")
        })]
      })
    }

    function tG(GG) {
      let {
        thumbnailId: bG,
        thumbnailName: ZG,
        onClose: wG
      } = GG;
      const {
        t: SG
      } = (0, kG.w)();
      return (0, EG.jsxs)("div", {
        className: "ThumbnailDeleteConfirm",
        children: [(0, EG.jsx)("div", {
          className: "ThumbnailDeleteConfirmTitle",
          children: SG("thumbnail:deleteThumbnail")
        }), (0, EG.jsxs)("div", {
          className: "ThumbnailDeleteConfirmImageContainer",
          children: [(0, EG.jsx)("img", {
            className: "ThumbnailDeleteConfirmImage",
            src: `${eG.clientSideServerUrls.s3Url}/customThumbnails/${bG}.jpg`,
            alt: "Thumbnail to delete"
          }), (0, EG.jsx)("div", {
            className: "ThumbnailGridItemLabel",
            children: ZG
          })]
        }), (0, EG.jsx)("div", {
          className: "ThumbnailDeleteConfirmSubtitle",
          children: SG("thumbnail:deleteThumbnailConfirmation")
        }), (0, EG.jsxs)("div", {
          className: "ThumbnailDeleteConfirmButtons",
          children: [(0, EG.jsxs)(LG.C, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => wG(!0),
            children: [(0, EG.jsx)(VG.c, {
              name: "trash-can"
            }), " ", SG("general:delete")]
          }), (0, EG.jsx)(LG.h, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => wG(!1),
            children: SG("general:cancel")
          })]
        })]
      })
    }
    var DG = ZG(2138),
      NG = ZG(5008),
      OG = ZG(5012),
      xG = ZG(5044);

    function BG(GG) {
      let {
        schematicData: bG,
        setTexturePack: ZG,
        initializeTexturePack: SG,
        publishFormEnabled: LG
      } = GG;
      const {
        t: yG
      } = (0, kG.w)(), [UG, YG] = (0, wG.useState)(null), [VG, pG] = (0, wG.useState)(null), [fG, KG] = (0, wG.useState)(!1), hG = (0, IG.c)(), dG = LG && !fG, JG = bG.customTexturePackKey;

      function rG(GG) {
        var bG;
        YG(GG.metaData.id), pG(null !== (bG = GG.metaData.fromFolderName) && void 0 !== bG ? bG : null), (GG.metaData.id !== DG.q.CUSTOM || GG.metaData.fromFolderName) && ZG(GG)
      }
      return (0, wG.useEffect)((() => {
        JG && (KG(!0), (0, NG.e)(JG).then((GG => {
          var bG;
          hG.current && (GG ? (YG(GG.metaData.id), pG(null !== (bG = GG.metaData.fromFolderName) && void 0 !== bG ? bG : null), SG(GG)) : console.error(`No texture pack at ${JG}`))
        })).catch((GG => {
          console.error("Error fetching texture pack: ", GG)
        })).finally((() => {
          KG(!1)
        })))
      }), [JG, SG, hG]), (0, EG.jsxs)("div", {
        className: "BloxdForm TexturePackSection",
        children: [(0, EG.jsx)("div", {
          className: "SectionTitle",
          children: yG("customTexturePack:customTexturePack")
        }), (0, EG.jsxs)("div", {
          className: "TexturePackList",
          children: [(0, EG.jsx)("div", {
            className: QG()("TexturePack", {
              Selected: null === UG && !fG,
              Disabled: !dG
            }),
            onClick: () => {
              dG && (YG(null), ZG(null), pG(null))
            },
            children: (0, EG.jsx)("div", {
              className: "TexturePackName",
              children: "No Override"
            })
          }), Object.values(DG.q).map((GG => (0, EG.jsx)(OG.f, {
            id: GG,
            isSelected: GG === UG,
            setSelected: rG,
            disabled: !dG
          }, GG)))]
        }), UG === DG.q.CUSTOM && (0, EG.jsx)(xG.e, {
          folderName: VG,
          onTexturePackUpdated: rG,
          disabled: !dG,
          maxFileSizeMb: 25,
          packOwner: "customGame"
        })]
      })
    }
    var Gb = ZG(5080);

    function bb(GG) {
      var bG;
      let {
        gameCategory: ZG,
        setGameCategory: wG,
        disabled: SG
      } = GG;
      const yG = null !== (bG = (0, KG.Bb)(ZG)) && void 0 !== bG ? bG : "other";
      return (0, EG.jsxs)("div", {
        className: "GameCategoryPicker",
        children: [(0, EG.jsx)(JG.e, {
          label: "worldBuilder:gameCategoryGroup",
          className: "GameCategoryGroup",
          disabled: SG,
          children: (0, EG.jsx)(rG.b, {
            options: KG.ob.map((GG => ({
              value: GG,
              label: KG.lb[GG]
            }))),
            value: yG,
            onChange: GG => {
              GG.value !== yG && wG(KG.gb[GG.value][0])
            }
          })
        }), (0, EG.jsx)(JG.e, {
          label: "worldBuilder:gameCategory",
          className: "GameCategory",
          disabled: SG,
          children: (0, EG.jsx)("div", {
            className: "GameCategoryOptions",
            children: KG.gb[yG].map((GG => (0, EG.jsx)(LG.K, {
              active: GG === ZG,
              onClick: () => {
                wG(GG)
              },
              children: (0, KG.yb)(GG)
            }, GG)))
          })
        })]
      })
    }

    function Zb(GG) {
      let {
        editor: bG,
        onClose: ZG
      } = GG;
      const {
        t: wG
      } = (0, kG.w)(), {
        schematicData: SG,
        updateSchematicData: LG,
        publishFormEnabled: UG,
        formEnabled: YG
      } = bG;
      return (0, EG.jsxs)(EG.Fragment, {
        children: [(0, EG.jsxs)(oG, {
          icon: "pen-to-square",
          title: wG("worldBuilder:basicsSection"),
          disabled: !YG,
          children: [(0, EG.jsx)(XG, {
            label: wG("general:name"),
            caption: wG("worldBuilder:schematicNameTagsHint"),
            children: (0, EG.jsx)(yG.b, {
              className: "SchematicPageName",
              defaultValue: SG.name,
              onValueChange: GG => LG("name", GG),
              placeholderText: wG("worldBuilder:schematicNamePlaceholder"),
              maxLength: pG.tb
            })
          }), (0, EG.jsx)(XG, {
            label: wG("general:description"),
            children: (0, EG.jsx)(yG.b, {
              className: "SchematicPageDescription",
              useTextarea: !0,
              defaultValue: SG.description,
              onValueChange: GG => LG("description", GG),
              placeholderText: wG("worldBuilder:schematicDescriptionPlaceholder"),
              maxLength: pG.pb
            })
          }), (0, EG.jsx)(bb, {
            gameCategory: SG.gameCategory,
            setGameCategory: GG => LG("gameCategory", GG),
            disabled: !UG
          }), !0 === SG.gamePublished && (0, EG.jsx)(TG, {
            schematicData: SG,
            updateSchematicData: LG,
            publishFormEnabled: UG,
            onClose: function() {
              null === ZG || void 0 === ZG || ZG()
            }
          })]
        }), (0, EG.jsx)(iG, {
          schematicData: SG,
          updateSchematicData: LG,
          publishFormEnabled: UG,
          formEnabled: YG
        }), !0 === SG.gamePublished && (0, EG.jsx)(oG, {
          icon: "palette",
          title: wG("worldBuilder:texturePackSection"),
          disabled: !YG,
          children: (0, EG.jsx)(BG, {
            schematicData: SG,
            setTexturePack: bG.setTexturePack,
            initializeTexturePack: bG.initializeTexturePack,
            publishFormEnabled: UG
          })
        })]
      })
    }

    function wb(GG) {
      let {
        editor: bG
      } = GG;
      const {
        t: ZG
      } = (0, kG.w)(), {
        schematicData: wG,
        formEnabled: SG,
        hasUnsavedChanges: yG
      } = bG, pG = SG && yG;
      return (0, EG.jsxs)("footer", {
        className: "SchematicPageFooter",
        children: [SG && yG && (0, EG.jsxs)("div", {
          className: "SchematicPageFooterStatus",
          children: [(0, EG.jsx)("span", {
            className: "SchematicPageFooterStatusDot"
          }), ZG("worldBuilder:unsavedChanges")]
        }), (0, EG.jsx)(YG.h, {
          tooltipInner: (0, EG.jsx)("div", {
            className: "SaveButtonTooltip",
            children: ZG(SG && !yG ? "worldBuilder:saveChangesNoneDescription" : "worldBuilder:saveChangesDescription")
          }),
          children: (0, EG.jsxs)(LG.d, {
            className: "SaveChangesButton",
            onClick: () => bG.saveSchematic(wG.gamePublished),
            disabled: !pG,
            children: [(0, EG.jsxs)("span", {
              className: SG ? "" : "SaveChangesButtonBodyHidden",
              children: [(0, EG.jsx)(VG.c, {
                name: "wrench"
              }), " ", ZG("worldBuilder:saveChanges")]
            }), !SG && (0, EG.jsx)(UG.b, {})]
          })
        })]
      })
    }

    function Sb(GG) {
      let {
        schematic: bG,
        onSchematicUpdate: ZG,
        onClose: SG,
        inSourceWorld: yG
      } = GG;
      const {
        t: UG
      } = (0, kG.w)();

      function YG() {
        null === SG || void 0 === SG || SG()
      }
      const VG = (0, Gb.b)(bG, {
        onNavigateAway: YG,
        inSourceWorld: yG
      });
      return (0, wG.useEffect)((() => {
        null === ZG || void 0 === ZG || ZG(VG.schematicData)
      }), [VG.schematicData, ZG]), (0, EG.jsxs)("div", {
        className: "SchematicPage SchematicPagePopupVariant",
        children: [(0, EG.jsxs)("div", {
          className: "SchematicPageBody",
          children: [(0, EG.jsx)(LG.b, {
            onClick: YG,
            children: UG("worldBuilder:back")
          }), (0, EG.jsx)(oG, {
            icon: "rocket-launch",
            title: UG("worldBuilder:actionsSection"),
            disabled: !VG.formEnabled,
            children: (0, EG.jsx)(CG.d, {
              editor: VG
            })
          }), (0, EG.jsx)(Zb, {
            editor: VG,
            onClose: YG
          })]
        }), (0, EG.jsx)(wb, {
          editor: VG
        })]
      })
    }

    function Lb(GG) {
      let {
        schematic: bG,
        onSchematicUpdate: ZG,
        onClose: wG,
        inSourceWorld: LG
      } = GG;
      SG.NotificationProvider.showCustomPopup({
        body: GG => (0, EG.jsx)(Sb, {
          schematic: bG,
          onSchematicUpdate: ZG,
          onClose: GG,
          inSourceWorld: LG
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: wG,
        unlockPointerKey: "schematicPagePopup"
      })
    }
  },
  4975: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => pG
    });
    var wG = ZG(1006),
      SG = ZG.n(wG),
      LG = ZG(1151),
      yG = ZG(1016),
      kG = ZG(1393),
      UG = ZG(1320),
      YG = ZG(1302),
      VG = ZG(1067);

    function pG(GG) {
      let {
        editor: bG,
        className: ZG
      } = GG;
      const {
        t: wG
      } = (0, LG.w)(), {
        schematicData: pG,
        formEnabled: fG,
        publishFormEnabled: QG
      } = bG, KG = !fG || !QG;
      return (0, VG.jsxs)("div", {
        className: SG()("PublishButtonContainer", ZG),
        children: [bG.canEditSourceWorld && (0, VG.jsxs)(kG.d, {
          onClick: bG.editSourceWorld,
          disabled: KG,
          children: [(0, VG.jsx)(yG.c, {
            name: "edit"
          }), " ", wG("worldBuilder:editSourceWorld")]
        }), !pG.gamePublished && (0, VG.jsx)(UG.h, {
          tooltipInner: (0, VG.jsx)("div", {
            className: "PublishButtonTooltip",
            children: wG("worldBuilder:publishAsGameDescription")
          }),
          children: (0, VG.jsxs)(kG.k, {
            onClick: () => bG.saveSchematic(!0),
            disabled: KG,
            children: [(0, VG.jsx)(yG.c, {
              name: "rocket-launch"
            }), " ", wG("worldBuilder:publishAsGame"), " ", (0, VG.jsx)(yG.c, {
              name: "info-circle"
            })]
          })
        }), !0 === pG.gamePublished && (0, VG.jsxs)(VG.Fragment, {
          children: [(0, VG.jsx)(UG.h, {
            tooltipInner: (0, VG.jsx)("div", {
              className: "PublishButtonTooltip",
              children: wG("worldBuilder:unpublishAsGameDescription")
            }),
            children: (0, VG.jsxs)(kG.C, {
              onClick: bG.unpublishSchematic,
              disabled: KG,
              children: [(0, VG.jsx)(yG.c, {
                name: "rocket-launch"
              }), " ", wG("worldBuilder:unpublishAsGame"), " ", (0, VG.jsx)(yG.c, {
                name: "info-circle"
              })]
            })
          }), (0, VG.jsxs)(kG.d, {
            onClick: bG.playGame,
            disabled: KG,
            children: [(0, VG.jsx)(yG.c, {
              name: "joystick"
            }), " ", wG("general:playGame")]
          })]
        }), !fG && (0, VG.jsx)(YG.b, {
          loaderType: "Secondary"
        })]
      })
    }
  },
  5008: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => SG
    });
    var wG = ZG(1163);
    async function SG(GG) {
      const bG = await fetch(`${wG.clientSideServerUrls.s3Url}/${GG}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === bG.status || 403 === bG.status) return null;
      if (!bG.ok) throw new Error(`Failed to download the texture pack (${bG.status})`);
      return await bG.json()
    }
  },
  5080: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => dG
    });
    var wG = ZG(51),
      SG = ZG(1290),
      LG = ZG(982),
      yG = ZG(140),
      kG = ZG(1490),
      UG = ZG(17),
      YG = ZG(1895),
      VG = ZG(1431),
      pG = ZG(4611),
      fG = ZG(1311),
      QG = ZG(1092),
      KG = ZG(1444);

    function hG(GG, bG) {
      return {
        schematicId: GG.schematicId,
        name: GG.name,
        description: GG.description,
        gamePublished: bG,
        gameCategory: GG.gameCategory,
        defaultGamemode: GG.defaultGamemode,
        voidDeathHeight: GG.voidDeathHeight,
        disableKeepInventory: GG.disableKeepInventory,
        disableTpRequests: GG.disableTpRequests,
        disableLobbySpawn: GG.disableLobbySpawn,
        disableMobs: GG.disableMobs,
        disableSpawnProtection: GG.disableSpawnProtection,
        disableFallDamage: GG.disableFallDamage,
        worldBorder: GG.worldBorder,
        hideLobbyCode: GG.hideLobbyCode,
        enableSmpMarketplace: GG.enableSmpMarketplace,
        enableSurvivalGuns: GG.enableSurvivalGuns,
        enableSpawnReset: GG.enableSpawnReset,
        enableDayNight: GG.enableDayNight,
        persistWorld: GG.persistWorld,
        persistInventory: GG.persistInventory
      }
    }

    function dG(GG) {
      let {
        onNavigateAway: bG,
        inSourceWorld: ZG = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const {
        userContext: dG
      } = (0, QG.e)(), JG = (0, KG.useNavigatePreserveSearch)(), [rG, zG] = (0, wG.useState)({
        ...GG
      }), [EG, oG] = (0, wG.useState)("Enter"), [XG, uG] = (0, wG.useState)(void 0), iG = (0, wG.useRef)(hG(GG, GG.gamePublished)), CG = (0, wG.useRef)(void 0), WG = "Enter" === EG, mG = dG.playerHasRank("developer") || dG.playerHasRank("admin") || "Enter" === EG && !1 !== rG.schematicContainsSpawnBlock, IG = void 0 !== XG && XG !== CG.current || JSON.stringify(hG(rG, rG.gamePublished)) !== JSON.stringify(iG.current);

      function FG(GG, bG) {
        zG((ZG => ({
          ...ZG,
          [GG]: bG
        })))
      }
      const vG = (0, wG.useCallback)((GG => {
        CG.current = GG, uG(GG)
      }), []);

      function aG(GG) {
        oG("Loading");
        const bG = hG(rG, GG),
          ZG = XG !== CG.current ? XG : void 0;
        VG.d.updateSchematic(dG, bG, ZG).then((ZG => {
          let {
            customTexturePackKey: wG
          } = ZG;
          oG("Success"), FG("customTexturePackKey", wG), iG.current = bG, CG.current = void 0, uG(void 0), setTimeout((() => {
            FG("gamePublished", GG), oG("Enter")
          }), 1e3)
        })).catch((GG => {
          var bG;
          (console.error("Failed to save schematic:", GG), oG("Error"), GG instanceof yG.b && GG.errorMessageForUser) && fG.NotificationProvider.showAlertPopup({
            title: "worldBuilder:changesNotSaved",
            subtitle: GG.errorMessageForUser,
            textOpts: {
              subtitle: null !== (bG = GG.errorMessageTranslationParams) && void 0 !== bG ? bG : void 0
            },
            confirmText: "general:ok"
          });
          setTimeout((() => {
            oG("Enter")
          }), 1e3)
        }))
      }
      return {
        schematicData: rG,
        updateSchematicData: FG,
        setTexturePack: uG,
        initializeTexturePack: vG,
        updateState: EG,
        formEnabled: WG,
        publishFormEnabled: mG,
        hasUnsavedChanges: IG,
        canEditSourceWorld: !ZG,
        saveSchematic: aG,
        unpublishSchematic: function() {
          fG.NotificationProvider.showPromptPopup({
            icon: "rocket-launch",
            title: "worldBuilder:unpublishAsGameConfirmTitle",
            subtitle: "worldBuilder:unpublishAsGameConfirmSubtitle",
            confirmText: "worldBuilder:unpublishAsGame",
            cancelText: "general:cancel",
            unlockPointerKey: "unpublishGamePrompt"
          }).getResult().then((GG => {
            !0 === GG && aG(!1)
          }))
        },
        editSourceWorld: function() {
          oG("Loading"), pG.d.getSourceWorld(rG.schematicId).then((GG => {
            YG.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, UG.n)("other"), JG((0, SG.d)("classic", GG)), null === bG || void 0 === bG || bG()
          })).catch((GG => {
            console.error("Failed to get source world:", GG), oG("Error"), setTimeout((() => {
              oG("Enter")
            }), 1e3)
          }))
        },
        playGame: function() {
          YG.gameBridge.send("leaveGame", {
            reloadPath: "/"
          }), JG((0, kG.B)((0, LG.n)(rG.schematicId), rG)), null === bG || void 0 === bG || bG()
        }
      }
    }
  },
  4967: () => {}
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);