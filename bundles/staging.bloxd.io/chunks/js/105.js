export const id = 105;
export const ids = [105];
export const modules = {
  4954: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => AD,
      e: () => RD,
      i: () => UD
    });
    wD(4959);
    var pD = wD(1200),
      sD = wD(1044),
      KD = wD.n(sD),
      rD = wD(1366),
      LD = (wD(58), wD(4395)),
      cD = wD(1057),
      gD = wD(1096);

    function RD(DD) {
      let {
        children: zD,
        label: wD,
        className: sD,
        circleInfoText: LD,
        disabled: RD,
        onLabelClick: AD
      } = DD;
      const {
        t: UD
      } = (0, pD.E)(), fD = (0, gD.jsxs)("div", {
        className: KD()("Label", {
          ClickableLabel: void 0 !== AD
        }),
        onClick: AD,
        children: [UD(wD), LD && (0, gD.jsx)(cD.e, {
          name: "circle-info"
        })]
      });
      return (0, gD.jsxs)("div", {
        className: KD()("LabeledInput", {
          [sD]: sD,
          DisabledLabelInput: RD
        }),
        children: [LD && (0, gD.jsx)(rD.f, {
          tooltipInner: (0, gD.jsx)("div", {
            className: "LabeledInputTooltip",
            children: UD(LD)
          }),
          children: fD
        }), !LD && fD, zD]
      })
    }

    function AD(DD) {
      let {
        checked: zD,
        setChecked: wD
      } = DD;
      return (0, gD.jsx)("div", {
        className: "OtherInput ClickableOtherInput",
        "data-pad-focusable": !0,
        onClick: DD => {
          wD(!zD)
        },
        children: (0, gD.jsx)(LD.d, {
          checked: zD,
          onChange: DD => {
            wD(DD.target.checked)
          },
          disabled: !1
        })
      })
    }

    function UD(DD) {
      let {
        checked: zD,
        setChecked: wD,
        disabled: pD
      } = DD;
      return (0, gD.jsx)("div", {
        className: KD()("SwitchContainer", {
          SwitchContainerDisabled: pD
        }),
        onClick: () => {
          pD || wD(!zD)
        },
        children: (0, gD.jsx)(LD.d, {
          className: "SwitchCheckbox",
          checked: zD,
          onChange: DD => {
            wD(DD.target.checked)
          },
          disabled: !!pD
        })
      })
    }
  },
  4963: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => gD
    });
    var pD = wD(1044),
      sD = wD.n(pD),
      KD = wD(4657),
      rD = wD(1200),
      LD = wD(1096);
    const cD = [...KD.j, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function gD(DD) {
      const {
        disabled: zD,
        hideWrapper: wD
      } = DD, {
        t: pD
      } = (0, rD.E)(), gD = DD.advancedMode ? cD.map((zD => [zD, DD.callbacks[zD]])) : KD.j.map((zD => [zD, DD.callbacks[zD]])), AD = (0, LD.jsx)("div", {
        className: sD()("PluginsGrid", {
          SectionBody: !wD
        }),
        children: gD.map((DD => {
          let [wD, pD] = DD;
          return (0, LD.jsx)(RD, {
            plugin: wD,
            callbacks: pD,
            disabled: zD
          }, wD)
        }))
      });
      return wD ? AD : (0, LD.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, LD.jsx)("div", {
          className: "SectionTitle",
          children: pD("worldBuilder:pluginsSection")
        }), AD]
      })
    }

    function RD(DD) {
      let {
        plugin: zD,
        callbacks: {
          isEnabled: wD,
          nC: pD
        },
        disabled: KD
      } = DD;
      const {
        t: cD
      } = (0, rD.E)(), gD = wD();
      return (0, LD.jsxs)("div", {
        className: sD()("PluginCard", {
          PluginCardEnabled: gD,
          PluginCardDisabledForm: KD
        }),
        "data-pad-focusable": !0,
        "aria-disabled": KD || void 0,
        onClick: () => {
          KD || pD(!gD)
        },
        children: [(0, LD.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, LD.jsx)("img", {
            src: `/textures/games/classic/customGames/${zD}.png`,
            alt: zD
          })
        }), (0, LD.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, LD.jsx)("div", {
            className: "PluginCardTitle",
            children: cD(AD[zD])
          }), (0, LD.jsx)("div", {
            className: "PluginCardDescription",
            children: cD(UD[zD])
          })]
        }), (0, LD.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: cD(gD ? "general:on" : "general:off")
        })]
      })
    }
    const AD = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      UD = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  4948: (DD, zD, wD) => {
    wD.d(zD, {
      j: () => sz,
      d: () => pz,
      f: () => wz,
      m: () => Kz
    });
    var pD = wD(58),
      sD = wD(1355),
      KD = wD(1447),
      rD = wD(1687),
      LD = wD(1200),
      cD = wD(1346),
      gD = wD(1366),
      RD = wD(1057),
      AD = wD(1232),
      UD = wD(1044),
      fD = wD.n(UD),
      ID = wD(338),
      BD = wD(4657),
      GD = wD(1245),
      hD = wD(4954),
      nD = wD(3115),
      MD = wD(4963),
      OD = wD(1096);

    function JD(DD) {
      let {
        icon: zD,
        title: wD,
        disabled: pD,
        children: sD
      } = DD;
      return (0, OD.jsxs)("div", {
        className: fD()("ManageCard", {
          ManageCardDisabled: pD
        }),
        children: [(0, OD.jsxs)("div", {
          className: "ManageCardHead",
          children: [(0, OD.jsx)("div", {
            className: "ManageCardIcon",
            children: (0, OD.jsx)(RD.e, {
              name: zD
            })
          }), (0, OD.jsx)("div", {
            children: (0, OD.jsx)("h2", {
              className: "ManageCardTitle",
              children: wD
            })
          })]
        }), (0, OD.jsxs)("div", {
          className: "ManageCardBody",
          children: [sD, pD && (0, OD.jsx)("div", {
            className: "ManageCardDisabledOverlay"
          })]
        })]
      })
    }

    function ED(DD) {
      let {
        label: zD,
        caption: wD,
        children: pD
      } = DD;
      return (0, OD.jsxs)("div", {
        className: "ManageStackedField",
        children: [(0, OD.jsx)("div", {
          className: "ManageStackedFieldLabel",
          children: zD
        }), pD, wD && (0, OD.jsx)("div", {
          className: "ManageStackedFieldCaption",
          children: wD
        })]
      })
    }

    function QD(DD) {
      let {
        label: zD,
        caption: wD,
        disabled: pD,
        children: sD
      } = DD;
      return (0, OD.jsxs)("div", {
        className: fD()("ManageField", {
          ManageFieldDisabled: pD
        }),
        children: [(0, OD.jsxs)("div", {
          className: "ManageFieldText",
          children: [(0, OD.jsx)("div", {
            className: "ManageFieldLabel",
            children: zD
          }), (0, OD.jsx)("div", {
            className: "ManageFieldCaption",
            children: wD
          })]
        }), (0, OD.jsx)("div", {
          className: "ManageFieldControl",
          children: sD
        })]
      })
    }

    function XD(DD) {
      var zD, wD;
      let {
        schematicData: pD,
        updateSchematicData: sD,
        publishFormEnabled: KD,
        formEnabled: rD
      } = DD;
      const {
        t: cD
      } = (0, LD.E)(), gD = !KD, RD = {
        tpRequests: {
          isEnabled: () => !pD.disableTpRequests,
          nC: DD => sD("disableTpRequests", !DD)
        },
        spawnProtection: {
          isEnabled: () => !pD.disableSpawnProtection,
          nC: DD => sD("disableSpawnProtection", !DD)
        },
        spawnReset: {
          isEnabled: () => !!pD.enableSpawnReset,
          nC: DD => sD("enableSpawnReset", DD)
        },
        smpMarketplace: {
          isEnabled: () => !!pD.enableSmpMarketplace,
          nC: DD => sD("enableSmpMarketplace", DD)
        },
        survivalGuns: {
          isEnabled: () => !!pD.enableSurvivalGuns,
          nC: DD => sD("enableSurvivalGuns", DD)
        },
        fallDamage: {
          isEnabled: () => !pD.disableFallDamage,
          nC: DD => sD("disableFallDamage", !DD)
        },
        dayNight: {
          isEnabled: () => !!pD.enableDayNight,
          nC: DD => sD("enableDayNight", DD)
        }
      };
      return (0, OD.jsxs)(OD.Fragment, {
        children: [!1 === pD.schematicContainsSpawnBlock && (0, OD.jsx)("div", {
          className: "ManageWarningBanner",
          children: cD("worldBuilder:mustContainSpawnBlock")
        }), (0, OD.jsxs)("div", {
          className: "ManageSettingsGrid",
          children: [(0, OD.jsxs)(JD, {
            icon: "globe",
            title: cD("worldBuilder:worldRulesSection"),
            disabled: !rD,
            children: [(0, OD.jsx)(QD, {
              label: cD("classic:defaultGamemode"),
              caption: cD("classic:defaultGamemodeDescription"),
              disabled: gD,
              children: (0, OD.jsx)(nD.c, {
                controlClassName: "ManageDropdown",
                options: BD.z.map((DD => ({
                  value: DD,
                  label: ID.o[DD]
                }))),
                value: pD.defaultGamemode,
                onChange: DD => sD("defaultGamemode", DD.value)
              })
            }), (0, OD.jsx)(QD, {
              label: cD("classic:voidDeathHeight"),
              caption: cD("classic:voidDeathHeightDescription"),
              disabled: gD,
              children: (0, OD.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, OD.jsx)("input", {
                  type: "number",
                  max: GD.F,
                  value: null !== (zD = pD.voidDeathHeight) && void 0 !== zD ? zD : "",
                  onChange: DD => {
                    const zD = parseInt(DD.target.value);
                    sD("voidDeathHeight", zD)
                  }
                }), (0, OD.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: cD("worldBuilder:blocksUnit")
                })]
              })
            }), (0, OD.jsx)(QD, {
              label: cD("classic:worldBorder"),
              caption: cD("classic:worldBorderDescription"),
              disabled: gD,
              children: (0, OD.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, OD.jsx)("input", {
                  type: "number",
                  min: GD.P,
                  max: GD.I,
                  placeholder: cD("worldBuilder:noWorldBorderLimit"),
                  value: null !== (wD = pD.worldBorder) && void 0 !== wD ? wD : "",
                  onChange: DD => {
                    const zD = parseInt(DD.target.value);
                    sD("worldBorder", isNaN(zD) ? null : zD)
                  }
                }), (0, OD.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: cD("worldBuilder:blocksUnit")
                })]
              })
            }), (0, OD.jsx)(QD, {
              label: cD("classic:disableMobs"),
              caption: cD("classic:disableMobsDescription"),
              disabled: gD,
              children: (0, OD.jsx)(hD.i, {
                checked: pD.disableMobs,
                setChecked: DD => sD("disableMobs", DD),
                disabled: gD
              })
            })]
          }), (0, OD.jsxs)(JD, {
            icon: "user-group",
            title: cD("worldBuilder:playerAndLobbySection"),
            disabled: !rD,
            children: [(0, OD.jsx)(QD, {
              label: cD("classic:disableKeepInventory"),
              caption: cD("classic:disableKeepInventoryDescription"),
              disabled: gD,
              children: (0, OD.jsx)(hD.i, {
                checked: pD.disableKeepInventory,
                setChecked: DD => sD("disableKeepInventory", DD),
                disabled: gD
              })
            }), (0, OD.jsx)(QD, {
              label: cD("classic:persistInventory"),
              caption: cD("classic:persistInventoryDescription"),
              disabled: gD,
              children: (0, OD.jsx)(nD.c, {
                controlClassName: "ManageDropdown",
                options: BD.m.map((DD => ({
                  value: DD,
                  label: ID.e[DD]
                }))),
                value: pD.persistInventory,
                onChange: DD => sD("persistInventory", DD.value)
              })
            }), (0, OD.jsx)(QD, {
              label: cD("classic:persistWorld"),
              caption: cD("classic:persistWorldDescription"),
              disabled: gD,
              children: (0, OD.jsx)(hD.i, {
                checked: pD.persistWorld,
                setChecked: DD => sD("persistWorld", DD),
                disabled: gD
              })
            }), (0, OD.jsx)(QD, {
              label: cD("classic:disableLobbySpawn"),
              caption: cD("classic:disableLobbySpawnDescription"),
              disabled: gD,
              children: (0, OD.jsx)(hD.i, {
                checked: pD.disableLobbySpawn,
                setChecked: DD => sD("disableLobbySpawn", DD),
                disabled: gD
              })
            }), (0, OD.jsx)(QD, {
              label: cD("classic:hideLobbyCode"),
              caption: cD("classic:hideLobbyCodeDescription"),
              disabled: gD,
              children: (0, OD.jsx)(hD.i, {
                checked: pD.hideLobbyCode,
                setChecked: DD => sD("hideLobbyCode", DD),
                disabled: gD
              })
            })]
          })]
        }), (0, OD.jsx)(JD, {
          icon: "layer-group",
          title: cD("worldBuilder:pluginsSection"),
          disabled: !rD,
          children: (0, OD.jsx)(MD.b, {
            callbacks: RD,
            disabled: gD,
            advancedMode: !0,
            hideWrapper: !0
          })
        })]
      })
    }
    var VD = wD(4970),
      PD = wD(4395),
      CD = wD(1495),
      xD = wD(3482),
      TD = wD(1127),
      bD = wD(4920),
      jD = wD(4974),
      dD = wD(1453);
    const SD = 50,
      iD = .3;
    async function lD(DD) {
      const zD = await
      function(DD) {
        return new Promise(((zD, wD) => {
          const pD = new FileReader;
          pD.onload = () => zD(pD.result), pD.onerror = wD, pD.readAsDataURL(DD)
        }))
      }(DD), wD = await
      function(DD) {
        return new Promise(((zD, wD) => {
          const pD = new Image;
          pD.onload = () => zD(pD), pD.onerror = () => wD(new Error("Failed to load image")), pD.src = DD
        }))
      }(zD);
      if (wD.naturalHeight > wD.naturalWidth) throw new WD;
      const pD = 1024 * SD,
        {
          dataUrl: sD,
          finalQuality: KD
        } = function(DD, zD) {
          const wD = document.createElement("canvas");
          wD.width = DD.naturalWidth, wD.height = DD.naturalHeight, wD.getContext("2d").drawImage(DD, 0, 0);
          let pD = .92,
            sD = wD.toDataURL("image/jpeg", pD);
          for (; .75 * sD.length > zD && pD > .05;) pD -= .05, sD = wD.toDataURL("image/jpeg", pD);
          return {
            dataUrl: sD,
            finalQuality: pD
          }
        }(wD, pD);
      if (Math.ceil(.75 * sD.length) > pD) throw new ND;
      return {
        base64Jpg: sD,
        heavilyCompressed: KD < iD
      }
    }
    class WD extends Error {}
    class ND extends Error {}
    var ZD = function(DD) {
      return DD[DD.NOT_LOGGED_IN = 0] = "NOT_LOGGED_IN", DD[DD.THUMBNAIL_LIMIT_REACHED = 1] = "THUMBNAIL_LIMIT_REACHED", DD
    }(ZD || {});

    function yD(DD) {
      var zD;
      let {
        schematicId: wD,
        hasReadUploadPolicy: sD,
        onPolicyValidationError: cD,
        onThumbnailReady: gD
      } = DD;
      const {
        t: UD
      } = (0, LD.E)(), [ID, BD] = (0, pD.useState)(null), [GD, hD] = (0, pD.useState)(""), [nD, MD] = (0, pD.useState)(""), [JD, ED] = (0, pD.useState)(!0), [QD, XD] = (0, pD.useState)(!1), VD = (0, pD.useRef)(!1), [PD, CD] = (0, pD.useState)(null), [xD, TD] = (0, pD.useState)(!1), [bD, dD] = (0, pD.useState)(!1), SD = (0, pD.useRef)(0), {
        getRootProps: iD,
        getInputProps: ZD,
        isDragActive: yD
      } = (0, jD.c)({
        accept: {
          "image/*": [".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp"]
        },
        multiple: !1,
        onDrop: async DD => {
          if (0 === DD.length) return;
          const zD = DD[0],
            wD = ++SD.current;
          CD(null), TD(!1), BD(null), hD(zD.name);
          try {
            const DD = await lD(zD);
            if (wD !== SD.current) return;
            BD(DD), TD(DD.heavilyCompressed)
          } catch (pD) {
            if (wD !== SD.current) return;
            CD(UD(pD instanceof WD ? "thumbnail:portraitImagesNotAllowed" : pD instanceof ND ? "thumbnail:couldNotCompressImage" : "thumbnail:failedToUploadImage"))
          }
        },
        useFsAccessApi: !1
      }), kD = GD.length <= 30 ? GD : `${GD.slice(0,27)}...`, mD = null !== (zD = null === ID || void 0 === ID ? void 0 : ID.base64Jpg) && void 0 !== zD ? zD : null, eD = nD.trim(), oD = eD.length >= AD.k && eD.length <= AD.h, aD = bD && !ID && !PD, uD = bD && !oD;
      return (0, OD.jsxs)("div", {
        className: "ThumbnailUploadContainer",
        children: [(0, OD.jsxs)("div", {
          ...iD({
            className: fD()("ThumbnailUploadDropzone", {
              ActiveDrag: yD,
              ValidationError: aD
            })
          }),
          children: [(0, OD.jsx)("input", {
            ...ZD()
          }), !yD && mD ? (0, OD.jsxs)(OD.Fragment, {
            children: [(0, OD.jsxs)("div", {
              className: "ThumbnailAspectPreviews",
              children: [(0, OD.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, OD.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "1:1"
                }), (0, OD.jsx)("div", {
                  className: "ThumbnailAspectFrame Square",
                  children: (0, OD.jsx)("img", {
                    src: mD,
                    alt: "1:1 preview"
                  })
                })]
              }), (0, OD.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, OD.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "16:9"
                }), (0, OD.jsx)("div", {
                  className: "ThumbnailAspectFrame Wide",
                  children: (0, OD.jsx)("img", {
                    src: mD,
                    alt: "16:9 preview"
                  })
                })]
              })]
            }), (0, OD.jsxs)("div", {
              children: [(0, OD.jsx)("div", {
                className: "ThumbnailUploadInstructions Active",
                children: kD
              }), (0, OD.jsx)("div", {
                className: "ThumbnailUploadInstructions Preview",
                children: UD("thumbnail:preview")
              })]
            })]
          }) : (0, OD.jsxs)(OD.Fragment, {
            children: [(0, OD.jsx)("div", {
              className: "ThumbnailUploadIcon",
              children: (0, OD.jsx)(RD.e, {
                name: "image"
              })
            }), (0, OD.jsx)("div", {
              className: "ThumbnailUploadInstructions",
              children: UD("thumbnail:dragImageHere")
            })]
          })]
        }), aD && (0, OD.jsx)("div", {
          className: "ThumbnailUploadError",
          children: UD("thumbnail:imageRequired")
        }), (0, OD.jsx)(rD.e, {
          className: fD()("ThumbnailUploadNameInput", {
            ValidationError: uD
          }),
          placeholderText: UD("thumbnail:thumbnailName"),
          defaultValue: nD,
          onValueChange: DD => {
            MD(DD)
          },
          maxLength: AD.h
        }), uD && (0, OD.jsx)("div", {
          className: "ThumbnailUploadError",
          children: UD("thumbnail:nameRequired", {
            min: AD.k,
            max: AD.h
          })
        }), (0, OD.jsxs)("label", {
          className: "ThumbnailUploadCheckbox",
          children: [(0, OD.jsx)("input", {
            type: "checkbox",
            checked: JD,
            onChange: DD => {
              ED(DD.target.checked)
            }
          }), UD("thumbnail:setAsThumbnailOnceApproved")]
        }), xD && (0, OD.jsx)("div", {
          className: "ThumbnailUploadWarning",
          children: UD("thumbnail:heavyCompressionWarning")
        }), PD && (0, OD.jsx)("div", {
          className: "ThumbnailUploadError",
          children: PD
        }), (0, OD.jsx)(KD.o, {
          disabled: QD,
          className: "ThumbnailUploadButton",
          onClick: async () => {
            if (dD(!0), !VD.current && ID && oD && sD) {
              VD.current = !0, XD(!0), CD(null);
              try {
                await gD(ID.base64Jpg, eD, JD ? wD : null)
              } catch (DD) {
                CD(DD.errorMessageForUser ? UD(DD.errorMessageForUser, DD.errorMessageTranslationParams) : UD("thumbnail:failedToUploadImage"))
              } finally {
                VD.current = !1, XD(!1)
              }
            } else sD || cD()
          },
          children: UD(QD ? "thumbnail:processing" : "thumbnail:uploadThumbnail")
        })]
      })
    }
    const kD = 2e3;

    function mD(DD) {
      let {
        schematicId: zD,
        ownedThumbnailCount: wD,
        onClose: sD,
        onThumbnailReady: KD
      } = DD;
      const {
        t: rD
      } = (0, LD.E)(), {
        userContext: cD
      } = (0, TD.c)(), [gD, UD] = (0, pD.useState)(!1), [ID, BD] = (0, pD.useState)(!1), [GD, hD] = (0, pD.useState)(!1), nD = (0, pD.useRef)();
      (0, pD.useEffect)((() => () => {
        clearTimeout(nD.current)
      }), []);
      const MD = function(DD, zD) {
        const wD = [];
        return DD.isLoggedIn() || wD.push(ZD.NOT_LOGGED_IN), zD >= AD.Q && wD.push(ZD.THUMBNAIL_LIMIT_REACHED), wD
      }(cD, wD);
      if (MD.length > 0) {
        const DD = {
          [ZD.NOT_LOGGED_IN]: {
            key: "thumbnail:mustBeLoggedInToUpload"
          },
          [ZD.THUMBNAIL_LIMIT_REACHED]: {
            key: "thumbnail:thumbnailLimitReachedPleaseDelete",
            params: {
              max: AD.Q
            }
          }
        };
        return (0, OD.jsxs)("div", {
          className: "ThumbnailUploaderInner",
          children: [(0, OD.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: rD("thumbnail:cannotUploadThumbnail")
          }), MD.map(((zD, wD) => {
            const pD = DD[zD];
            return (0, OD.jsxs)("div", {
              className: "CannotUploadThumbnailItem",
              children: [(0, OD.jsx)(RD.e, {
                name: "triangle-exclamation"
              }), (0, OD.jsx)("span", {
                children: rD(pD.key, pD.params)
              })]
            }, wD)
          }))]
        })
      }
      return (0, OD.jsxs)("div", {
        className: fD()("ThumbnailUploaderInner", {
          ThumbnailUploaderSuccess: gD
        }),
        children: [gD && (0, OD.jsxs)("div", {
          className: "ThumbnailUploadSuccessOverlay",
          children: [(0, OD.jsxs)("div", {
            className: "ThumbnailUploadSuccessIcon FullyFancyText AnimFadeInScaleUp",
            children: [(0, OD.jsx)(RD.e, {
              name: "check"
            }), (0, OD.jsx)(dD.b, {})]
          }), (0, OD.jsx)("div", {
            className: "ThumbnailUploadSuccessText AnimFadeInScaleUp",
            children: rD("thumbnail:thumbnailUploaded")
          })]
        }), (0, OD.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: rD("thumbnail:uploadThumbnail")
        }), (0, OD.jsxs)("div", {
          className: "ThumbnailUploaderBody",
          children: [(0, OD.jsxs)("div", {
            className: "ThumbnailUploaderLeft",
            children: [(0, OD.jsx)("h3", {
              className: "SchematicPopupSubtitle",
              children: rD("thumbnail:chooseImage", {
                maxSizeKb: SD
              })
            }), (0, OD.jsx)(yD, {
              schematicId: zD,
              hasReadUploadPolicy: ID,
              onPolicyValidationError: () => {
                hD(!0)
              },
              onThumbnailReady: async (DD, zD, wD) => {
                await KD(DD, zD, wD), UD(!0), nD.current = setTimeout(sD, kD)
              }
            })]
          }), (0, OD.jsxs)("div", {
            className: "ThumbnailUploadPolicy",
            children: [(0, OD.jsx)("h3", {
              className: "ThumbnailUploadPolicyTitle",
              children: rD("thumbnail:uploadPolicy")
            }), (0, OD.jsxs)("ul", {
              className: "ThumbnailUploadPolicyList",
              children: [(0, OD.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, OD.jsx)(RD.e, {
                  name: "check"
                }), (0, OD.jsx)("span", {
                  children: rD("thumbnail:policyFollowGuidelines")
                })]
              }), (0, OD.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, OD.jsx)(RD.e, {
                  name: "check"
                }), (0, OD.jsx)("span", {
                  children: rD("thumbnail:policyInGameAssets")
                })]
              }), (0, OD.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, OD.jsx)(RD.e, {
                  name: "check"
                }), (0, OD.jsx)("span", {
                  children: rD("thumbnail:policyLimitText")
                })]
              }), (0, OD.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, OD.jsx)(RD.e, {
                  name: "x"
                }), (0, OD.jsx)("span", {
                  children: rD("thumbnail:policyCopyrightContent")
                })]
              }), (0, OD.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, OD.jsx)(RD.e, {
                  name: "x"
                }), (0, OD.jsx)("span", {
                  children: rD("thumbnail:policyOutOfGameAssets")
                })]
              }), (0, OD.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, OD.jsx)(RD.e, {
                  name: "x"
                }), (0, OD.jsx)("span", {
                  children: rD("thumbnail:policyBloxdTags")
                })]
              }), (0, OD.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, OD.jsx)(RD.e, {
                  name: "x"
                }), (0, OD.jsx)("span", {
                  children: rD("thumbnail:policyMustReflectGame")
                })]
              })]
            }), (0, OD.jsxs)("label", {
              className: fD()("ThumbnailUploadCheckbox Policy", {
                ValidationError: GD && !ID
              }),
              children: [(0, OD.jsx)("input", {
                type: "checkbox",
                checked: ID,
                onChange: DD => {
                  BD(DD.target.checked)
                }
              }), rD("thumbnail:agreeToUploadPolicy")]
            }), GD && !ID && (0, OD.jsx)("div", {
              className: "ThumbnailPolicyError",
              children: rD("thumbnail:policyRequired")
            })]
          })]
        })]
      })
    }
    var eD = wD(1211);
    const oD = {
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

    function aD(DD) {
      var zD, wD;
      let {
        schematicData: rD,
        updateSchematicData: gD,
        publishFormEnabled: AD,
        onClose: UD
      } = DD;
      const {
        t: ID
      } = (0, LD.E)(), {
        userContext: BD,
        isUserContextUpdating: GD
      } = (0, TD.c)(), hD = (0, xD.c)(), [nD, MD] = (0, pD.useState)([]), [JD, ED] = (0, pD.useState)([]), [QD, XD] = (0, pD.useState)(!0), [VD, PD] = (0, pD.useState)(null !== (zD = rD.customThumbnailId) && void 0 !== zD ? zD : null), [jD, dD] = (0, pD.useState)(null), SD = (0, pD.useRef)(null !== (wD = rD.customThumbnailId) && void 0 !== wD ? wD : null), iD = (0, pD.useRef)(0), lD = (0, pD.useRef)(null), WD = (0, pD.useRef)(null), ND = (0, pD.useRef)(null), ZD = (0, pD.useRef)(!1);

      function yD(DD, zD) {
        ND.current && (clearTimeout(ND.current), ND.current = null), dD(DD), null !== DD && zD && (ND.current = setTimeout((() => {
          dD(null), ND.current = null
        }), 5e3))
      }(0, pD.useEffect)((() => () => {
        clearTimeout(WD.current), clearTimeout(ND.current)
      }), []);
      const kD = (0, pD.useCallback)((() => {
        XD(!0), CD.d.getOwnedThumbnails(BD).then((DD => {
          const zD = [],
            wD = [];
          for (const pD of DD.thumbnails) pD.rejectionPolicyId ? zD.push(pD) : wD.push(pD);
          zD.sort(((DD, zD) => DD.lastUpdatedAt - zD.lastUpdatedAt)), wD.sort(((DD, zD) => {
            const wD = DD.approved ? 1 : 0,
              pD = (zD.approved ? 1 : 0) - wD;
            return 0 !== pD ? pD : zD.lastUpdatedAt - DD.lastUpdatedAt
          })), ED(zD), MD(wD)
        })).catch((DD => {
          console.error("Failed to fetch thumbnails:", DD)
        })).finally((() => {
          XD(!1)
        }))
      }), [BD]);
      async function oD(DD, zD, wD) {
        return CD.d.uploadSchematicThumbnail(BD, DD, zD, wD).then((() => {
          yD({
            text: ID("thumbnail:uploadedAwaitingModeration"),
            type: "success"
          }, !0), kD()
        }))
      }

      function aD() {
        iD.current = Date.now(), WD.current = null;
        const DD = lD.current;
        lD.current = null, yD({
          text: ID("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), CD.d.setSchematicThumbnail(BD, rD.schematicId, DD).then((() => {
          hD.current && (yD({
            text: ID("thumbnail:thumbnailUpdated"),
            type: "success"
          }, !0), SD.current = DD, gD("customThumbnailId", DD), gD("customThumbnailBlurhash", void 0), gD("customThumbnailVariants", void 0))
        })).catch((DD => {
          hD.current && (yD({
            text: DD.errorMessageForUser ? ID(DD.errorMessageForUser, DD.errorMessageTranslationParams) : ID("thumbnail:failedToSetThumbnail"),
            type: "error"
          }, !0), PD(SD.current))
        }))
      }

      function tD(DD) {
        PD(DD), lD.current = DD;
        const zD = Date.now() - iD.current;
        zD >= 1e3 ? aD() : (yD({
          text: ID("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), WD.current || (WD.current = setTimeout((() => {
          aD()
        }), 1e3 - zD)))
      }
      return (0, pD.useEffect)((() => {
        !1 === GD && kD()
      }), [GD, kD]), JD.length > 0 ? (0, OD.jsx)(uD, {
        rejectedThumbnails: JD,
        userContext: BD,
        isMountedRef: hD,
        onAcknowledged: kD
      }) : (0, OD.jsxs)("div", {
        className: "BloxdForm ThumbnailSection",
        children: [(0, OD.jsxs)("div", {
          className: "SectionTitle",
          children: [ID("thumbnail:gameThumbnail"), jD && (0, OD.jsx)("span", {
            className: fD()("ThumbnailActionMsg", `ThumbnailActionMsg--${jD.type}`),
            children: jD.text
          })]
        }), (0, OD.jsx)("div", {
          className: "SectionBody",
          children: (0, OD.jsxs)("div", {
            className: "ThumbnailGrid",
            children: [(0, OD.jsxs)("div", {
              className: fD()("ThumbnailGridItem ThumbnailGridItemDefault", {
                ThumbnailGridItemSelected: null === VD
              }),
              onClick: () => tD(null),
              children: [(0, OD.jsx)(bD.e, {
                game: {
                  schematicId: rD.schematicId,
                  imageBlurhash: rD.imageBlurhash
                }
              }), (0, OD.jsx)("div", {
                className: "ThumbnailGridItemLabel ThumbnailDefaultLabel",
                children: ID("general:default")
              })]
            }), QD && (0, OD.jsx)(cD.e, {}), nD.map(((DD, zD) => (0, OD.jsxs)("div", {
              className: fD()("ThumbnailGridItem", {
                ThumbnailGridItemSelected: VD === DD.id,
                ThumbnailGridItemPending: !DD.approved
              }),
              onClick: () => {
                DD.approved && tD(DD.id)
              },
              children: [DD.approved && (0, OD.jsx)("img", {
                src: `${eD.clientSideServerUrls.s3Url}/customThumbnails/${DD.id}.jpg`,
                alt: "Thumbnail"
              }), DD.approved && (0, OD.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: DD.name
              }), DD.id && (0, OD.jsx)(KD.R, {
                className: "ThumbnailDeleteButton",
                onClick: zD => async function(DD, zD, wD) {
                  DD.stopPropagation();
                  const pD = await sD.NotificationProvider.showCustomPopup({
                      body: DD => (0, OD.jsx)(vD, {
                        thumbnailId: zD,
                        thumbnailName: wD,
                        onClose: zD => {
                          zD && (ZD.current = !0), DD()
                        }
                      }),
                      middleScreenPopupClassName: "ThumbnailDeleteConfirmPopup",
                      onClose: UD
                    }).getResult(),
                    KD = ZD.current;
                  ZD.current = !1, KD && !0 === pD && (hD.current && yD({
                    text: ID("thumbnail:deletingThumbnail"),
                    type: "info"
                  }, !1), CD.d.deleteSchematicThumbnail(BD, zD).then((() => {
                    hD.current && (yD({
                      text: ID("thumbnail:thumbnailDeleted"),
                      type: "success"
                    }, !0), SD.current === zD && tD(null), kD())
                  })).catch((DD => {
                    hD.current && yD({
                      text: DD.errorMessageForUser ? ID(DD.errorMessageForUser, DD.errorMessageTranslationParams) : ID("thumbnail:failedToDeleteThumbnail"),
                      type: "error"
                    }, !0)
                  })))
                }(zD, DD.id, DD.name),
                children: (0, OD.jsx)(RD.e, {
                  name: "trash-can"
                })
              }), !DD.approved && (0, OD.jsx)("div", {
                className: "ThumbnailUnapprovedIcon",
                children: (0, OD.jsx)(RD.e, {
                  name: "hourglass-clock"
                })
              }), !DD.approved && (0, OD.jsxs)("div", {
                className: "ThumbnailGridItemLabel ThumbnailPendingLabel",
                children: [DD.name, (0, OD.jsx)("br", {}), ID("thumbnail:pendingApproval")]
              })]
            }, zD))), (0, OD.jsxs)("div", {
              className: fD()("ThumbnailGridItem ThumbnailUploadTile", {
                ThumbnailUploadTileDisabled: !AD
              }),
              onClick: () => {
                AD && function(DD) {
                  let {
                    schematicId: zD,
                    ownedThumbnailCount: wD,
                    onThumbnailReady: pD,
                    onClose: KD
                  } = DD;
                  sD.NotificationProvider.showCustomPopup({
                    body: DD => (0, OD.jsx)(mD, {
                      schematicId: zD,
                      ownedThumbnailCount: wD,
                      onClose: DD,
                      onThumbnailReady: pD
                    }),
                    middleScreenPopupClassName: "SchematicThumbnailPopup",
                    onClose: KD,
                    unlockPointerKey: "schematicThumbnailUploaderPopup"
                  })
                }({
                  schematicId: rD.schematicId,
                  ownedThumbnailCount: nD.length,
                  onThumbnailReady: oD,
                  onClose: UD
                })
              },
              children: [(0, OD.jsx)(RD.e, {
                name: "plus"
              }), (0, OD.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: ID("thumbnail:uploadThumbnail")
              })]
            })]
          })
        })]
      })
    }

    function uD(DD) {
      let {
        rejectedThumbnails: zD,
        userContext: wD,
        isMountedRef: sD,
        onAcknowledged: rD
      } = DD;
      const {
        t: gD
      } = (0, LD.E)(), [AD, UD] = (0, pD.useState)(!1), [fD, ID] = (0, pD.useState)(!1), BD = function(DD) {
        const zD = new Map;
        for (const wD of DD) {
          const DD = wD.rejectionPolicyId,
            pD = zD.get(DD);
          pD ? pD.push(wD) : zD.set(DD, [wD])
        }
        return zD
      }(zD);
      return (0, OD.jsxs)("div", {
        className: "ThumbnailRejectionNotice",
        children: [(0, OD.jsxs)("div", {
          className: "ThumbnailRejectionNoticeTitle",
          children: [(0, OD.jsx)(RD.e, {
            name: "triangle-exclamation"
          }), " ", gD("thumbnail:thumbnailsRejected"), " ", (0, OD.jsx)(RD.e, {
            name: "triangle-exclamation"
          })]
        }), (0, OD.jsx)("div", {
          className: "ThumbnailRejectionNoticeSubtitle",
          children: gD("thumbnail:thumbnailsRejectedDescription")
        }), (0, OD.jsx)("div", {
          className: "ThumbnailRejectionNoticeList",
          children: [...BD.entries()].map((DD => {
            let [zD, wD] = DD;
            const pD = oD[zD];
            return (0, OD.jsxs)("div", {
              className: "ThumbnailRejectionNoticeGroup",
              children: [(0, OD.jsx)("div", {
                className: "ThumbnailRejectionNoticeItems",
                children: wD.map((DD => (0, OD.jsxs)("div", {
                  className: "ThumbnailRejectionNoticeItem",
                  children: [(0, OD.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemIcon",
                    children: (0, OD.jsx)(RD.e, {
                      name: "image-slash"
                    })
                  }), (0, OD.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemDetails",
                    children: (0, OD.jsx)("div", {
                      className: "ThumbnailRejectionNoticeItemName",
                      children: DD.name
                    })
                  })]
                }, DD.id)))
              }), (0, OD.jsxs)("div", {
                className: "ThumbnailRejectionNoticeGroupReason",
                children: [gD("thumbnail:rejectionReason"), " ", pD ? gD(pD.reason) : zD]
              }), pD && (0, OD.jsx)("ul", {
                className: "ThumbnailRejectionNoticeGroupTips",
                children: pD.tips.map((DD => (0, OD.jsx)("li", {
                  children: gD(DD)
                }, DD)))
              })]
            }, zD)
          }))
        }), (0, OD.jsxs)("label", {
          className: "ThumbnailRejectionNoticeCheckbox",
          children: [(0, OD.jsx)(PD.d, {
            checked: AD,
            onChange: DD => UD(DD.target.checked),
            disabled: fD
          }), (0, OD.jsx)("span", {
            children: gD("thumbnail:haveReadRejectionReasons")
          })]
        }), (0, OD.jsx)(KD.o, {
          onClick: async function() {
            ID(!0);
            const DD = await Promise.allSettled(zD.map((DD => CD.d.deleteSchematicThumbnail(wD, DD.id))));
            if (!sD.current) return;
            const pD = DD.filter((DD => "rejected" === DD.status));
            pD.length > 0 && console.error("Some rejected thumbnails failed to delete:", pD), rD()
          },
          disabled: !AD || fD,
          className: "ThumbnailRejectionNoticeAcceptButton",
          children: fD ? (0, OD.jsx)(cD.e, {}) : gD("general:accept")
        })]
      })
    }

    function vD(DD) {
      let {
        thumbnailId: zD,
        thumbnailName: wD,
        onClose: pD
      } = DD;
      const {
        t: sD
      } = (0, LD.E)();
      return (0, OD.jsxs)("div", {
        className: "ThumbnailDeleteConfirm",
        children: [(0, OD.jsx)("div", {
          className: "ThumbnailDeleteConfirmTitle",
          children: sD("thumbnail:deleteThumbnail")
        }), (0, OD.jsxs)("div", {
          className: "ThumbnailDeleteConfirmImageContainer",
          children: [(0, OD.jsx)("img", {
            className: "ThumbnailDeleteConfirmImage",
            src: `${eD.clientSideServerUrls.s3Url}/customThumbnails/${zD}.jpg`,
            alt: "Thumbnail to delete"
          }), (0, OD.jsx)("div", {
            className: "ThumbnailGridItemLabel",
            children: wD
          })]
        }), (0, OD.jsx)("div", {
          className: "ThumbnailDeleteConfirmSubtitle",
          children: sD("thumbnail:deleteThumbnailConfirmation")
        }), (0, OD.jsxs)("div", {
          className: "ThumbnailDeleteConfirmButtons",
          children: [(0, OD.jsxs)(KD.R, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => pD(!0),
            children: [(0, OD.jsx)(RD.e, {
              name: "trash-can"
            }), " ", sD("general:delete")]
          }), (0, OD.jsx)(KD.g, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => pD(!1),
            children: sD("general:cancel")
          })]
        })]
      })
    }
    var tD = wD(2130),
      FD = wD(5011),
      YD = wD(5014),
      HD = wD(5063);

    function qD(DD) {
      let {
        schematicData: zD,
        setTexturePack: wD,
        initializeTexturePack: sD,
        publishFormEnabled: KD
      } = DD;
      const {
        t: rD
      } = (0, LD.E)(), [cD, gD] = (0, pD.useState)(null), [RD, AD] = (0, pD.useState)(null), [UD, ID] = (0, pD.useState)(!1), BD = (0, xD.c)(), GD = KD && !UD, hD = zD.customTexturePackKey;

      function nD(DD) {
        var zD;
        gD(DD.metaData.id), AD(null !== (zD = DD.metaData.fromFolderName) && void 0 !== zD ? zD : null), (DD.metaData.id !== tD.m.CUSTOM || DD.metaData.fromFolderName) && wD(DD)
      }
      return (0, pD.useEffect)((() => {
        hD && (ID(!0), (0, FD.c)(hD).then((DD => {
          var zD;
          BD.current && (DD ? (gD(DD.metaData.id), AD(null !== (zD = DD.metaData.fromFolderName) && void 0 !== zD ? zD : null), sD(DD)) : console.error(`No texture pack at ${hD}`))
        })).catch((DD => {
          console.error("Error fetching texture pack: ", DD)
        })).finally((() => {
          ID(!1)
        })))
      }), [hD, sD, BD]), (0, OD.jsxs)("div", {
        className: "BloxdForm TexturePackSection",
        children: [(0, OD.jsx)("div", {
          className: "SectionTitle",
          children: rD("customTexturePack:customTexturePack")
        }), (0, OD.jsxs)("div", {
          className: "TexturePackList",
          children: [(0, OD.jsx)("div", {
            className: fD()("TexturePack", {
              Selected: null === cD && !UD,
              Disabled: !GD
            }),
            onClick: () => {
              GD && (gD(null), wD(null), AD(null))
            },
            children: (0, OD.jsx)("div", {
              className: "TexturePackName",
              children: "No Override"
            })
          }), Object.values(tD.m).map((DD => (0, OD.jsx)(YD.i, {
            id: DD,
            isSelected: DD === cD,
            setSelected: nD,
            disabled: !GD
          }, DD)))]
        }), cD === tD.m.CUSTOM && (0, OD.jsx)(HD.b, {
          folderName: RD,
          onTexturePackUpdated: nD,
          disabled: !GD,
          maxFileSizeMb: 25,
          packOwner: "customGame"
        })]
      })
    }
    var Dz = wD(5106);

    function zz(DD) {
      var zD;
      let {
        gameCategory: wD,
        setGameCategory: pD,
        disabled: sD
      } = DD;
      const rD = null !== (zD = (0, ID.cb)(wD)) && void 0 !== zD ? zD : "other";
      return (0, OD.jsxs)("div", {
        className: "GameCategoryPicker",
        children: [(0, OD.jsx)(hD.e, {
          label: "worldBuilder:gameCategoryGroup",
          className: "GameCategoryGroup",
          disabled: sD,
          children: (0, OD.jsx)(nD.c, {
            options: ID.Y.map((DD => ({
              value: DD,
              label: ID.X[DD]
            }))),
            value: rD,
            onChange: DD => {
              DD.value !== rD && pD(ID.V[DD.value][0])
            }
          })
        }), (0, OD.jsx)(hD.e, {
          label: "worldBuilder:gameCategory",
          className: "GameCategory",
          disabled: sD,
          children: (0, OD.jsx)("div", {
            className: "GameCategoryOptions",
            children: ID.V[rD].map((DD => (0, OD.jsx)(KD.Y, {
              active: DD === wD,
              onClick: () => {
                pD(DD)
              },
              children: (0, ID.bb)(DD)
            }, DD)))
          })
        })]
      })
    }

    function wz(DD) {
      let {
        editor: zD,
        onClose: wD
      } = DD;
      const {
        t: pD
      } = (0, LD.E)(), {
        schematicData: sD,
        updateSchematicData: KD,
        publishFormEnabled: cD,
        formEnabled: gD
      } = zD;
      return (0, OD.jsxs)(OD.Fragment, {
        children: [(0, OD.jsxs)(JD, {
          icon: "pen-to-square",
          title: pD("worldBuilder:basicsSection"),
          disabled: !gD,
          children: [(0, OD.jsx)(ED, {
            label: pD("general:name"),
            caption: pD("worldBuilder:schematicNameTagsHint"),
            children: (0, OD.jsx)(rD.e, {
              className: "SchematicPageName",
              defaultValue: sD.name,
              onValueChange: DD => KD("name", DD),
              placeholderText: pD("worldBuilder:schematicNamePlaceholder"),
              maxLength: AD.jb
            })
          }), (0, OD.jsx)(ED, {
            label: pD("general:description"),
            children: (0, OD.jsx)(rD.e, {
              className: "SchematicPageDescription",
              useTextarea: !0,
              defaultValue: sD.description,
              onValueChange: DD => KD("description", DD),
              placeholderText: pD("worldBuilder:schematicDescriptionPlaceholder"),
              maxLength: AD.ib
            })
          }), (0, OD.jsx)(zz, {
            gameCategory: sD.gameCategory,
            setGameCategory: DD => KD("gameCategory", DD),
            disabled: !cD
          }), !0 === sD.gamePublished && (0, OD.jsx)(aD, {
            schematicData: sD,
            updateSchematicData: KD,
            publishFormEnabled: cD,
            onClose: function() {
              null === wD || void 0 === wD || wD()
            }
          })]
        }), (0, OD.jsx)(XD, {
          schematicData: sD,
          updateSchematicData: KD,
          publishFormEnabled: cD,
          formEnabled: gD
        }), !0 === sD.gamePublished && (0, OD.jsx)(JD, {
          icon: "palette",
          title: pD("worldBuilder:texturePackSection"),
          disabled: !gD,
          children: (0, OD.jsx)(qD, {
            schematicData: sD,
            setTexturePack: zD.setTexturePack,
            initializeTexturePack: zD.initializeTexturePack,
            publishFormEnabled: cD
          })
        })]
      })
    }

    function pz(DD) {
      let {
        editor: zD
      } = DD;
      const {
        t: wD
      } = (0, LD.E)(), {
        schematicData: pD,
        formEnabled: sD,
        hasUnsavedChanges: rD
      } = zD, AD = sD && rD;
      return (0, OD.jsxs)("footer", {
        className: "SchematicPageFooter",
        children: [sD && rD && (0, OD.jsxs)("div", {
          className: "SchematicPageFooterStatus",
          children: [(0, OD.jsx)("span", {
            className: "SchematicPageFooterStatusDot"
          }), wD("worldBuilder:unsavedChanges")]
        }), (0, OD.jsx)(gD.f, {
          tooltipInner: (0, OD.jsx)("div", {
            className: "SaveButtonTooltip",
            children: wD(sD && !rD ? "worldBuilder:saveChangesNoneDescription" : "worldBuilder:saveChangesDescription")
          }),
          children: (0, OD.jsxs)(KD.f, {
            className: "SaveChangesButton",
            onClick: () => zD.saveSchematic(pD.gamePublished),
            disabled: !AD,
            children: [(0, OD.jsxs)("span", {
              className: sD ? "" : "SaveChangesButtonBodyHidden",
              children: [(0, OD.jsx)(RD.e, {
                name: "wrench"
              }), " ", wD("worldBuilder:saveChanges")]
            }), !sD && (0, OD.jsx)(cD.e, {})]
          })
        })]
      })
    }

    function sz(DD) {
      let {
        schematic: zD,
        onSchematicUpdate: wD,
        onClose: sD,
        inSourceWorld: rD
      } = DD;
      const {
        t: cD
      } = (0, LD.E)();

      function gD() {
        null === sD || void 0 === sD || sD()
      }
      const RD = (0, Dz.d)(zD, {
        onNavigateAway: gD,
        inSourceWorld: rD
      });
      return (0, pD.useEffect)((() => {
        null === wD || void 0 === wD || wD(RD.schematicData)
      }), [RD.schematicData, wD]), (0, OD.jsxs)("div", {
        className: "SchematicPage SchematicPagePopupVariant",
        children: [(0, OD.jsxs)("div", {
          className: "SchematicPageBody",
          children: [(0, OD.jsx)(KD.d, {
            onClick: gD,
            children: cD("worldBuilder:back")
          }), (0, OD.jsx)(JD, {
            icon: "rocket-launch",
            title: cD("worldBuilder:actionsSection"),
            disabled: !RD.formEnabled,
            children: (0, OD.jsx)(VD.c, {
              editor: RD
            })
          }), (0, OD.jsx)(wz, {
            editor: RD,
            onClose: gD
          })]
        }), (0, OD.jsx)(pz, {
          editor: RD
        })]
      })
    }

    function Kz(DD) {
      let {
        schematic: zD,
        onSchematicUpdate: wD,
        onClose: pD,
        inSourceWorld: KD
      } = DD;
      sD.NotificationProvider.showCustomPopup({
        body: DD => (0, OD.jsx)(sz, {
          schematic: zD,
          onSchematicUpdate: wD,
          onClose: DD,
          inSourceWorld: KD
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: pD,
        unlockPointerKey: "schematicPagePopup"
      })
    }
  },
  4970: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => AD
    });
    var pD = wD(1044),
      sD = wD.n(pD),
      KD = wD(1200),
      rD = wD(1057),
      LD = wD(1447),
      cD = wD(1366),
      gD = wD(1346),
      RD = wD(1096);

    function AD(DD) {
      let {
        editor: zD,
        className: wD
      } = DD;
      const {
        t: pD
      } = (0, KD.E)(), {
        schematicData: AD,
        formEnabled: UD,
        publishFormEnabled: fD
      } = zD, ID = !UD || !fD;
      return (0, RD.jsxs)("div", {
        className: sD()("PublishButtonContainer", wD),
        children: [zD.canEditSourceWorld && (0, RD.jsxs)(LD.f, {
          onClick: zD.editSourceWorld,
          disabled: ID,
          children: [(0, RD.jsx)(rD.e, {
            name: "edit"
          }), " ", pD("worldBuilder:editSourceWorld")]
        }), !AD.gamePublished && (0, RD.jsx)(cD.f, {
          tooltipInner: (0, RD.jsx)("div", {
            className: "PublishButtonTooltip",
            children: pD("worldBuilder:publishAsGameDescription")
          }),
          children: (0, RD.jsxs)(LD.o, {
            onClick: () => zD.saveSchematic(!0),
            disabled: ID,
            children: [(0, RD.jsx)(rD.e, {
              name: "rocket-launch"
            }), " ", pD("worldBuilder:publishAsGame"), " ", (0, RD.jsx)(rD.e, {
              name: "info-circle"
            })]
          })
        }), !0 === AD.gamePublished && (0, RD.jsxs)(RD.Fragment, {
          children: [(0, RD.jsx)(cD.f, {
            tooltipInner: (0, RD.jsx)("div", {
              className: "PublishButtonTooltip",
              children: pD("worldBuilder:unpublishAsGameDescription")
            }),
            children: (0, RD.jsxs)(LD.R, {
              onClick: zD.unpublishSchematic,
              disabled: ID,
              children: [(0, RD.jsx)(rD.e, {
                name: "rocket-launch"
              }), " ", pD("worldBuilder:unpublishAsGame"), " ", (0, RD.jsx)(rD.e, {
                name: "info-circle"
              })]
            })
          }), (0, RD.jsxs)(LD.f, {
            onClick: zD.playGame,
            disabled: ID,
            children: [(0, RD.jsx)(rD.e, {
              name: "joystick"
            }), " ", pD("general:playGame")]
          })]
        }), !UD && (0, RD.jsx)(gD.e, {
          loaderType: "Secondary"
        })]
      })
    }
  },
  5011: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => sD
    });
    var pD = wD(1211);
    async function sD(DD) {
      const zD = await fetch(`${pD.clientSideServerUrls.s3Url}/${DD}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === zD.status || 403 === zD.status) return null;
      if (!zD.ok) throw new Error(`Failed to download the texture pack (${zD.status})`);
      return await zD.json()
    }
  },
  5106: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => GD
    });
    var pD = wD(58),
      sD = wD(1339),
      KD = wD(1008),
      rD = wD(157),
      LD = wD(1548),
      cD = wD(20),
      gD = wD(1925),
      RD = wD(1495),
      AD = wD(4612),
      UD = wD(1355),
      fD = wD(1127),
      ID = wD(1511);

    function BD(DD, zD) {
      return {
        schematicId: DD.schematicId,
        name: DD.name,
        description: DD.description,
        gamePublished: zD,
        gameCategory: DD.gameCategory,
        defaultGamemode: DD.defaultGamemode,
        voidDeathHeight: DD.voidDeathHeight,
        disableKeepInventory: DD.disableKeepInventory,
        disableTpRequests: DD.disableTpRequests,
        disableLobbySpawn: DD.disableLobbySpawn,
        disableMobs: DD.disableMobs,
        disableSpawnProtection: DD.disableSpawnProtection,
        disableFallDamage: DD.disableFallDamage,
        worldBorder: DD.worldBorder,
        hideLobbyCode: DD.hideLobbyCode,
        enableSmpMarketplace: DD.enableSmpMarketplace,
        enableSurvivalGuns: DD.enableSurvivalGuns,
        enableSpawnReset: DD.enableSpawnReset,
        enableDayNight: DD.enableDayNight,
        persistWorld: DD.persistWorld,
        persistInventory: DD.persistInventory
      }
    }

    function GD(DD) {
      let {
        onNavigateAway: zD,
        inSourceWorld: wD = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const {
        userContext: GD
      } = (0, fD.c)(), hD = (0, ID.useNavigatePreserveSearch)(), [nD, MD] = (0, pD.useState)({
        ...DD
      }), [OD, JD] = (0, pD.useState)("Enter"), [ED, QD] = (0, pD.useState)(void 0), XD = (0, pD.useRef)(BD(DD, DD.gamePublished)), VD = (0, pD.useRef)(void 0), PD = "Enter" === OD, CD = GD.playerHasRank("developer") || GD.playerHasRank("admin") || "Enter" === OD && !1 !== nD.schematicContainsSpawnBlock, xD = void 0 !== ED && ED !== VD.current || JSON.stringify(BD(nD, nD.gamePublished)) !== JSON.stringify(XD.current);

      function TD(DD, zD) {
        MD((wD => ({
          ...wD,
          [DD]: zD
        })))
      }
      const bD = (0, pD.useCallback)((DD => {
        VD.current = DD, QD(DD)
      }), []);

      function jD(DD) {
        JD("Loading");
        const zD = BD(nD, DD),
          wD = ED !== VD.current ? ED : void 0;
        RD.d.updateSchematic(GD, zD, wD).then((wD => {
          let {
            customTexturePackKey: pD
          } = wD;
          JD("Success"), TD("customTexturePackKey", pD), XD.current = zD, VD.current = void 0, QD(void 0), setTimeout((() => {
            TD("gamePublished", DD), JD("Enter")
          }), 1e3)
        })).catch((DD => {
          var zD;
          (console.error("Failed to save schematic:", DD), JD("Error"), DD instanceof rD.c && DD.errorMessageForUser) && UD.NotificationProvider.showAlertPopup({
            title: "worldBuilder:changesNotSaved",
            subtitle: DD.errorMessageForUser,
            textOpts: {
              subtitle: null !== (zD = DD.errorMessageTranslationParams) && void 0 !== zD ? zD : void 0
            },
            confirmText: "general:ok"
          });
          setTimeout((() => {
            JD("Enter")
          }), 1e3)
        }))
      }
      return {
        schematicData: nD,
        updateSchematicData: TD,
        setTexturePack: QD,
        initializeTexturePack: bD,
        updateState: OD,
        formEnabled: PD,
        publishFormEnabled: CD,
        hasUnsavedChanges: xD,
        canEditSourceWorld: !wD,
        saveSchematic: jD,
        unpublishSchematic: function() {
          UD.NotificationProvider.showPromptPopup({
            icon: "rocket-launch",
            title: "worldBuilder:unpublishAsGameConfirmTitle",
            subtitle: "worldBuilder:unpublishAsGameConfirmSubtitle",
            confirmText: "worldBuilder:unpublishAsGame",
            cancelText: "general:cancel",
            unlockPointerKey: "unpublishGamePrompt"
          }).getResult().then((DD => {
            !0 === DD && jD(!1)
          }))
        },
        editSourceWorld: function() {
          JD("Loading"), AD.d.getSourceWorld(nD.schematicId).then((DD => {
            gD.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, cD.k)("other"), hD((0, sD.c)("classic", DD)), null === zD || void 0 === zD || zD()
          })).catch((DD => {
            console.error("Failed to get source world:", DD), JD("Error"), setTimeout((() => {
              JD("Enter")
            }), 1e3)
          }))
        },
        playGame: function() {
          gD.gameBridge.send("leaveGame", {
            reloadPath: "/"
          }), hD((0, LD.y)((0, KD.t)(nD.schematicId), nD)), null === zD || void 0 === zD || zD()
        }
      }
    }
  },
  4959: () => {}
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);