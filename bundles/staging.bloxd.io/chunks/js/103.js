export const id = 103;
export const ids = [103];
export const modules = {
  4713: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => BD,
      e: () => SD,
      f: () => yD
    });
    cD(4720);
    var ID = cD(1192),
      pD = cD(1049),
      iD = cD.n(pD),
      fD = cD(1356),
      bD = (cD(53), cD(4182)),
      QD = cD(1064),
      wD = cD(1093);

    function SD(DD) {
      let {
        children: CD,
        label: cD,
        className: pD,
        circleInfoText: bD,
        disabled: SD,
        onLabelClick: BD
      } = DD;
      const {
        t: yD
      } = (0, ID.F)(), MD = (0, wD.jsxs)("div", {
        className: iD()("Label", {
          ClickableLabel: void 0 !== BD
        }),
        onClick: BD,
        children: [yD(cD), bD && (0, wD.jsx)(QD.c, {
          name: "circle-info"
        })]
      });
      return (0, wD.jsxs)("div", {
        className: iD()("LabeledInput", {
          [pD]: pD,
          DisabledLabelInput: SD
        }),
        children: [bD && (0, wD.jsx)(fD.f, {
          tooltipInner: (0, wD.jsx)("div", {
            className: "LabeledInputTooltip",
            children: yD(bD)
          }),
          children: MD
        }), !bD && MD, CD]
      })
    }

    function BD(DD) {
      let {
        checked: CD,
        setChecked: cD
      } = DD;
      return (0, wD.jsx)("div", {
        className: "OtherInput ClickableOtherInput",
        "data-pad-focusable": !0,
        onClick: DD => {
          cD(!CD)
        },
        children: (0, wD.jsx)(bD.e, {
          checked: CD,
          onChange: DD => {
            cD(DD.target.checked)
          },
          disabled: !1
        })
      })
    }

    function yD(DD) {
      let {
        checked: CD,
        setChecked: cD,
        disabled: ID
      } = DD;
      return (0, wD.jsx)("div", {
        className: iD()("SwitchContainer", {
          SwitchContainerDisabled: ID
        }),
        onClick: () => {
          ID || cD(!CD)
        },
        children: (0, wD.jsx)(bD.e, {
          className: "SwitchCheckbox",
          checked: CD,
          onChange: DD => {
            cD(DD.target.checked)
          },
          disabled: !!ID
        })
      })
    }
  },
  4727: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => wD
    });
    var ID = cD(1049),
      pD = cD.n(ID),
      iD = cD(4431),
      fD = cD(1192),
      bD = cD(1093);
    const QD = [...iD.j, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function wD(DD) {
      const {
        disabled: CD,
        hideWrapper: cD
      } = DD, {
        t: ID
      } = (0, fD.F)(), wD = DD.advancedMode ? QD.map((CD => [CD, DD.callbacks[CD]])) : iD.j.map((CD => [CD, DD.callbacks[CD]])), BD = (0, bD.jsx)("div", {
        className: pD()("PluginsGrid", {
          SectionBody: !cD
        }),
        children: wD.map((DD => {
          let [cD, ID] = DD;
          return (0, bD.jsx)(SD, {
            plugin: cD,
            callbacks: ID,
            disabled: CD
          }, cD)
        }))
      });
      return cD ? BD : (0, bD.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, bD.jsx)("div", {
          className: "SectionTitle",
          children: ID("worldBuilder:pluginsSection")
        }), BD]
      })
    }

    function SD(DD) {
      let {
        plugin: CD,
        callbacks: {
          isEnabled: cD,
          lH: ID
        },
        disabled: iD
      } = DD;
      const {
        t: QD
      } = (0, fD.F)(), wD = cD();
      return (0, bD.jsxs)("div", {
        className: pD()("PluginCard", {
          PluginCardEnabled: wD,
          PluginCardDisabledForm: iD
        }),
        "data-pad-focusable": !0,
        "aria-disabled": iD || void 0,
        onClick: () => {
          iD || ID(!wD)
        },
        children: [(0, bD.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, bD.jsx)("img", {
            src: `/textures/games/classic/customGames/${CD}.png`,
            alt: CD
          })
        }), (0, bD.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, bD.jsx)("div", {
            className: "PluginCardTitle",
            children: QD(BD[CD])
          }), (0, bD.jsx)("div", {
            className: "PluginCardDescription",
            children: QD(yD[CD])
          })]
        }), (0, bD.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: QD(wD ? "general:on" : "general:off")
        })]
      })
    }
    const BD = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      yD = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  4704: (DD, CD, cD) => {
    cD.d(CD, {
      i: () => pC,
      e: () => IC,
      h: () => cC,
      l: () => iC
    });
    var ID = cD(53),
      pD = cD(1340),
      iD = cD(1442),
      fD = cD(1655),
      bD = cD(1192),
      QD = cD(1328),
      wD = cD(1356),
      SD = cD(1064),
      BD = cD(1221),
      yD = cD(1049),
      MD = cD.n(yD),
      tD = cD(312),
      ZD = cD(4431),
      oD = cD(1240),
      vD = cD(4713),
      ND = cD(2921),
      gD = cD(4727),
      XD = cD(1093);

    function mD(DD) {
      let {
        icon: CD,
        title: cD,
        disabled: ID,
        children: pD
      } = DD;
      return (0, XD.jsxs)("div", {
        className: MD()("ManageCard", {
          ManageCardDisabled: ID
        }),
        children: [(0, XD.jsxs)("div", {
          className: "ManageCardHead",
          children: [(0, XD.jsx)("div", {
            className: "ManageCardIcon",
            children: (0, XD.jsx)(SD.c, {
              name: CD
            })
          }), (0, XD.jsx)("div", {
            children: (0, XD.jsx)("h2", {
              className: "ManageCardTitle",
              children: cD
            })
          })]
        }), (0, XD.jsxs)("div", {
          className: "ManageCardBody",
          children: [pD, ID && (0, XD.jsx)("div", {
            className: "ManageCardDisabledOverlay"
          })]
        })]
      })
    }

    function nD(DD) {
      let {
        label: CD,
        caption: cD,
        children: ID
      } = DD;
      return (0, XD.jsxs)("div", {
        className: "ManageStackedField",
        children: [(0, XD.jsx)("div", {
          className: "ManageStackedFieldLabel",
          children: CD
        }), ID, cD && (0, XD.jsx)("div", {
          className: "ManageStackedFieldCaption",
          children: cD
        })]
      })
    }

    function OD(DD) {
      let {
        label: CD,
        caption: cD,
        disabled: ID,
        children: pD
      } = DD;
      return (0, XD.jsxs)("div", {
        className: MD()("ManageField", {
          ManageFieldDisabled: ID
        }),
        children: [(0, XD.jsxs)("div", {
          className: "ManageFieldText",
          children: [(0, XD.jsx)("div", {
            className: "ManageFieldLabel",
            children: CD
          }), (0, XD.jsx)("div", {
            className: "ManageFieldCaption",
            children: cD
          })]
        }), (0, XD.jsx)("div", {
          className: "ManageFieldControl",
          children: pD
        })]
      })
    }

    function PD(DD) {
      var CD, cD;
      let {
        schematicData: ID,
        updateSchematicData: pD,
        publishFormEnabled: iD,
        formEnabled: fD
      } = DD;
      const {
        t: QD
      } = (0, bD.F)(), wD = !iD, SD = {
        tpRequests: {
          isEnabled: () => !ID.disableTpRequests,
          lH: DD => pD("disableTpRequests", !DD)
        },
        spawnProtection: {
          isEnabled: () => !ID.disableSpawnProtection,
          lH: DD => pD("disableSpawnProtection", !DD)
        },
        spawnReset: {
          isEnabled: () => !!ID.enableSpawnReset,
          lH: DD => pD("enableSpawnReset", DD)
        },
        smpMarketplace: {
          isEnabled: () => !!ID.enableSmpMarketplace,
          lH: DD => pD("enableSmpMarketplace", DD)
        },
        survivalGuns: {
          isEnabled: () => !!ID.enableSurvivalGuns,
          lH: DD => pD("enableSurvivalGuns", DD)
        },
        fallDamage: {
          isEnabled: () => !ID.disableFallDamage,
          lH: DD => pD("disableFallDamage", !DD)
        },
        dayNight: {
          isEnabled: () => !!ID.enableDayNight,
          lH: DD => pD("enableDayNight", DD)
        }
      };
      return (0, XD.jsxs)(XD.Fragment, {
        children: [!1 === ID.schematicContainsSpawnBlock && (0, XD.jsx)("div", {
          className: "ManageWarningBanner",
          children: QD("worldBuilder:mustContainSpawnBlock")
        }), (0, XD.jsxs)("div", {
          className: "ManageSettingsGrid",
          children: [(0, XD.jsxs)(mD, {
            icon: "globe",
            title: QD("worldBuilder:worldRulesSection"),
            disabled: !fD,
            children: [(0, XD.jsx)(OD, {
              label: QD("classic:defaultGamemode"),
              caption: QD("classic:defaultGamemodeDescription"),
              disabled: wD,
              children: (0, XD.jsx)(ND.b, {
                controlClassName: "ManageDropdown",
                options: ZD.C.map((DD => ({
                  value: DD,
                  label: tD.s[DD]
                }))),
                value: ID.defaultGamemode,
                onChange: DD => pD("defaultGamemode", DD.value)
              })
            }), (0, XD.jsx)(OD, {
              label: QD("classic:voidDeathHeight"),
              caption: QD("classic:voidDeathHeightDescription"),
              disabled: wD,
              children: (0, XD.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, XD.jsx)("input", {
                  type: "number",
                  max: oD.D,
                  value: null !== (CD = ID.voidDeathHeight) && void 0 !== CD ? CD : "",
                  onChange: DD => {
                    const CD = parseInt(DD.target.value);
                    pD("voidDeathHeight", CD)
                  }
                }), (0, XD.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: QD("worldBuilder:blocksUnit")
                })]
              })
            }), (0, XD.jsx)(OD, {
              label: QD("classic:worldBorder"),
              caption: QD("classic:worldBorderDescription"),
              disabled: wD,
              children: (0, XD.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, XD.jsx)("input", {
                  type: "number",
                  min: oD.M,
                  max: oD.H,
                  placeholder: QD("worldBuilder:noWorldBorderLimit"),
                  value: null !== (cD = ID.worldBorder) && void 0 !== cD ? cD : "",
                  onChange: DD => {
                    const CD = parseInt(DD.target.value);
                    pD("worldBorder", isNaN(CD) ? null : CD)
                  }
                }), (0, XD.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: QD("worldBuilder:blocksUnit")
                })]
              })
            }), (0, XD.jsx)(OD, {
              label: QD("classic:disableMobs"),
              caption: QD("classic:disableMobsDescription"),
              disabled: wD,
              children: (0, XD.jsx)(vD.f, {
                checked: ID.disableMobs,
                setChecked: DD => pD("disableMobs", DD),
                disabled: wD
              })
            })]
          }), (0, XD.jsxs)(mD, {
            icon: "user-group",
            title: QD("worldBuilder:playerAndLobbySection"),
            disabled: !fD,
            children: [(0, XD.jsx)(OD, {
              label: QD("classic:disableKeepInventory"),
              caption: QD("classic:disableKeepInventoryDescription"),
              disabled: wD,
              children: (0, XD.jsx)(vD.f, {
                checked: ID.disableKeepInventory,
                setChecked: DD => pD("disableKeepInventory", DD),
                disabled: wD
              })
            }), (0, XD.jsx)(OD, {
              label: QD("classic:persistInventory"),
              caption: QD("classic:persistInventoryDescription"),
              disabled: wD,
              children: (0, XD.jsx)(ND.b, {
                controlClassName: "ManageDropdown",
                options: ZD.m.map((DD => ({
                  value: DD,
                  label: tD.k[DD]
                }))),
                value: ID.persistInventory,
                onChange: DD => pD("persistInventory", DD.value)
              })
            }), (0, XD.jsx)(OD, {
              label: QD("classic:persistWorld"),
              caption: QD("classic:persistWorldDescription"),
              disabled: wD,
              children: (0, XD.jsx)(vD.f, {
                checked: ID.persistWorld,
                setChecked: DD => pD("persistWorld", DD),
                disabled: wD
              })
            }), (0, XD.jsx)(OD, {
              label: QD("classic:disableLobbySpawn"),
              caption: QD("classic:disableLobbySpawnDescription"),
              disabled: wD,
              children: (0, XD.jsx)(vD.f, {
                checked: ID.disableLobbySpawn,
                setChecked: DD => pD("disableLobbySpawn", DD),
                disabled: wD
              })
            }), (0, XD.jsx)(OD, {
              label: QD("classic:hideLobbyCode"),
              caption: QD("classic:hideLobbyCodeDescription"),
              disabled: wD,
              children: (0, XD.jsx)(vD.f, {
                checked: ID.hideLobbyCode,
                setChecked: DD => pD("hideLobbyCode", DD),
                disabled: wD
              })
            })]
          })]
        }), (0, XD.jsx)(mD, {
          icon: "layer-group",
          title: QD("worldBuilder:pluginsSection"),
          disabled: !fD,
          children: (0, XD.jsx)(gD.e, {
            callbacks: SD,
            disabled: wD,
            advancedMode: !0,
            hideWrapper: !0
          })
        })]
      })
    }
    var HD = cD(4732),
      UD = cD(4182),
      xD = cD(1497),
      qD = cD(3306),
      JD = cD(1120),
      KD = cD(4677),
      aD = cD(4734),
      VD = cD(1444);
    const zD = 50,
      jD = .3;
    async function lD(DD) {
      const CD = await
      function(DD) {
        return new Promise(((CD, cD) => {
          const ID = new FileReader;
          ID.onload = () => CD(ID.result), ID.onerror = cD, ID.readAsDataURL(DD)
        }))
      }(DD), cD = await
      function(DD) {
        return new Promise(((CD, cD) => {
          const ID = new Image;
          ID.onload = () => CD(ID), ID.onerror = () => cD(new Error("Failed to load image")), ID.src = DD
        }))
      }(CD);
      if (cD.naturalHeight > cD.naturalWidth) throw new LD;
      const ID = 1024 * zD,
        {
          dataUrl: pD,
          finalQuality: iD
        } = function(DD, CD) {
          const cD = document.createElement("canvas");
          cD.width = DD.naturalWidth, cD.height = DD.naturalHeight, cD.getContext("2d").drawImage(DD, 0, 0);
          let ID = .92,
            pD = cD.toDataURL("image/jpeg", ID);
          for (; .75 * pD.length > CD && ID > .05;) ID -= .05, pD = cD.toDataURL("image/jpeg", ID);
          return {
            dataUrl: pD,
            finalQuality: ID
          }
        }(cD, ID);
      if (Math.ceil(.75 * pD.length) > ID) throw new TD;
      return {
        base64Jpg: pD,
        heavilyCompressed: iD < jD
      }
    }
    class LD extends Error {}
    class TD extends Error {}
    var GD = function(DD) {
      return DD[DD.NOT_LOGGED_IN = 0] = "NOT_LOGGED_IN", DD[DD.THUMBNAIL_LIMIT_REACHED = 1] = "THUMBNAIL_LIMIT_REACHED", DD
    }(GD || {});

    function RD(DD) {
      var CD;
      let {
        schematicId: cD,
        hasReadUploadPolicy: pD,
        onPolicyValidationError: QD,
        onThumbnailReady: wD
      } = DD;
      const {
        t: yD
      } = (0, bD.F)(), [tD, ZD] = (0, ID.useState)(null), [oD, vD] = (0, ID.useState)(""), [ND, gD] = (0, ID.useState)(""), [mD, nD] = (0, ID.useState)(!0), [OD, PD] = (0, ID.useState)(!1), HD = (0, ID.useRef)(!1), [UD, xD] = (0, ID.useState)(null), [qD, JD] = (0, ID.useState)(!1), [KD, VD] = (0, ID.useState)(!1), zD = (0, ID.useRef)(0), {
        getRootProps: jD,
        getInputProps: GD,
        isDragActive: RD
      } = (0, aD.b)({
        accept: {
          "image/*": [".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp"]
        },
        multiple: !1,
        onDrop: async DD => {
          if (0 === DD.length) return;
          const CD = DD[0],
            cD = ++zD.current;
          xD(null), JD(!1), ZD(null), vD(CD.name);
          try {
            const DD = await lD(CD);
            if (cD !== zD.current) return;
            ZD(DD), JD(DD.heavilyCompressed)
          } catch (ID) {
            if (cD !== zD.current) return;
            xD(yD(ID instanceof LD ? "thumbnail:portraitImagesNotAllowed" : ID instanceof TD ? "thumbnail:couldNotCompressImage" : "thumbnail:failedToUploadImage"))
          }
        },
        useFsAccessApi: !1
      }), kD = oD.length <= 30 ? oD : `${oD.slice(0,27)}...`, dD = null !== (CD = null === tD || void 0 === tD ? void 0 : tD.base64Jpg) && void 0 !== CD ? CD : null, YD = ND.trim(), WD = YD.length >= BD.i && YD.length <= BD.h, sD = KD && !tD && !UD, ED = KD && !WD;
      return (0, XD.jsxs)("div", {
        className: "ThumbnailUploadContainer",
        children: [(0, XD.jsxs)("div", {
          ...jD({
            className: MD()("ThumbnailUploadDropzone", {
              ActiveDrag: RD,
              ValidationError: sD
            })
          }),
          children: [(0, XD.jsx)("input", {
            ...GD()
          }), !RD && dD ? (0, XD.jsxs)(XD.Fragment, {
            children: [(0, XD.jsxs)("div", {
              className: "ThumbnailAspectPreviews",
              children: [(0, XD.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, XD.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "1:1"
                }), (0, XD.jsx)("div", {
                  className: "ThumbnailAspectFrame Square",
                  children: (0, XD.jsx)("img", {
                    src: dD,
                    alt: "1:1 preview"
                  })
                })]
              }), (0, XD.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, XD.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "16:9"
                }), (0, XD.jsx)("div", {
                  className: "ThumbnailAspectFrame Wide",
                  children: (0, XD.jsx)("img", {
                    src: dD,
                    alt: "16:9 preview"
                  })
                })]
              })]
            }), (0, XD.jsxs)("div", {
              children: [(0, XD.jsx)("div", {
                className: "ThumbnailUploadInstructions Active",
                children: kD
              }), (0, XD.jsx)("div", {
                className: "ThumbnailUploadInstructions Preview",
                children: yD("thumbnail:preview")
              })]
            })]
          }) : (0, XD.jsxs)(XD.Fragment, {
            children: [(0, XD.jsx)("div", {
              className: "ThumbnailUploadIcon",
              children: (0, XD.jsx)(SD.c, {
                name: "image"
              })
            }), (0, XD.jsx)("div", {
              className: "ThumbnailUploadInstructions",
              children: yD("thumbnail:dragImageHere")
            })]
          })]
        }), sD && (0, XD.jsx)("div", {
          className: "ThumbnailUploadError",
          children: yD("thumbnail:imageRequired")
        }), (0, XD.jsx)(fD.b, {
          className: MD()("ThumbnailUploadNameInput", {
            ValidationError: ED
          }),
          placeholderText: yD("thumbnail:thumbnailName"),
          defaultValue: ND,
          onValueChange: DD => {
            gD(DD)
          },
          maxLength: BD.h
        }), ED && (0, XD.jsx)("div", {
          className: "ThumbnailUploadError",
          children: yD("thumbnail:nameRequired", {
            min: BD.i,
            max: BD.h
          })
        }), (0, XD.jsxs)("label", {
          className: "ThumbnailUploadCheckbox",
          children: [(0, XD.jsx)("input", {
            type: "checkbox",
            checked: mD,
            onChange: DD => {
              nD(DD.target.checked)
            }
          }), yD("thumbnail:setAsThumbnailOnceApproved")]
        }), qD && (0, XD.jsx)("div", {
          className: "ThumbnailUploadWarning",
          children: yD("thumbnail:heavyCompressionWarning")
        }), UD && (0, XD.jsx)("div", {
          className: "ThumbnailUploadError",
          children: UD
        }), (0, XD.jsx)(iD.o, {
          disabled: OD,
          className: "ThumbnailUploadButton",
          onClick: async () => {
            if (VD(!0), !HD.current && tD && WD && pD) {
              HD.current = !0, PD(!0), xD(null);
              try {
                await wD(tD.base64Jpg, YD, mD ? cD : null)
              } catch (DD) {
                xD(DD.errorMessageForUser ? yD(DD.errorMessageForUser, DD.errorMessageTranslationParams) : yD("thumbnail:failedToUploadImage"))
              } finally {
                HD.current = !1, PD(!1)
              }
            } else pD || QD()
          },
          children: yD(OD ? "thumbnail:processing" : "thumbnail:uploadThumbnail")
        })]
      })
    }
    const kD = 2e3;

    function dD(DD) {
      let {
        schematicId: CD,
        ownedThumbnailCount: cD,
        onClose: pD,
        onThumbnailReady: iD
      } = DD;
      const {
        t: fD
      } = (0, bD.F)(), {
        userContext: QD
      } = (0, JD.c)(), [wD, yD] = (0, ID.useState)(!1), [tD, ZD] = (0, ID.useState)(!1), [oD, vD] = (0, ID.useState)(!1), ND = (0, ID.useRef)();
      (0, ID.useEffect)((() => () => {
        clearTimeout(ND.current)
      }), []);
      const gD = function(DD, CD) {
        const cD = [];
        return DD.isLoggedIn() || cD.push(GD.NOT_LOGGED_IN), CD >= BD.W && cD.push(GD.THUMBNAIL_LIMIT_REACHED), cD
      }(QD, cD);
      if (gD.length > 0) {
        const DD = {
          [GD.NOT_LOGGED_IN]: {
            key: "thumbnail:mustBeLoggedInToUpload"
          },
          [GD.THUMBNAIL_LIMIT_REACHED]: {
            key: "thumbnail:thumbnailLimitReachedPleaseDelete",
            params: {
              max: BD.W
            }
          }
        };
        return (0, XD.jsxs)("div", {
          className: "ThumbnailUploaderInner",
          children: [(0, XD.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: fD("thumbnail:cannotUploadThumbnail")
          }), gD.map(((CD, cD) => {
            const ID = DD[CD];
            return (0, XD.jsxs)("div", {
              className: "CannotUploadThumbnailItem",
              children: [(0, XD.jsx)(SD.c, {
                name: "triangle-exclamation"
              }), (0, XD.jsx)("span", {
                children: fD(ID.key, ID.params)
              })]
            }, cD)
          }))]
        })
      }
      return (0, XD.jsxs)("div", {
        className: MD()("ThumbnailUploaderInner", {
          ThumbnailUploaderSuccess: wD
        }),
        children: [wD && (0, XD.jsxs)("div", {
          className: "ThumbnailUploadSuccessOverlay",
          children: [(0, XD.jsxs)("div", {
            className: "ThumbnailUploadSuccessIcon FullyFancyText AnimFadeInScaleUp",
            children: [(0, XD.jsx)(SD.c, {
              name: "check"
            }), (0, XD.jsx)(VD.c, {})]
          }), (0, XD.jsx)("div", {
            className: "ThumbnailUploadSuccessText AnimFadeInScaleUp",
            children: fD("thumbnail:thumbnailUploaded")
          })]
        }), (0, XD.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: fD("thumbnail:uploadThumbnail")
        }), (0, XD.jsxs)("div", {
          className: "ThumbnailUploaderBody",
          children: [(0, XD.jsxs)("div", {
            className: "ThumbnailUploaderLeft",
            children: [(0, XD.jsx)("h3", {
              className: "SchematicPopupSubtitle",
              children: fD("thumbnail:chooseImage", {
                maxSizeKb: zD
              })
            }), (0, XD.jsx)(RD, {
              schematicId: CD,
              hasReadUploadPolicy: tD,
              onPolicyValidationError: () => {
                vD(!0)
              },
              onThumbnailReady: async (DD, CD, cD) => {
                await iD(DD, CD, cD), yD(!0), ND.current = setTimeout(pD, kD)
              }
            })]
          }), (0, XD.jsxs)("div", {
            className: "ThumbnailUploadPolicy",
            children: [(0, XD.jsx)("h3", {
              className: "ThumbnailUploadPolicyTitle",
              children: fD("thumbnail:uploadPolicy")
            }), (0, XD.jsxs)("ul", {
              className: "ThumbnailUploadPolicyList",
              children: [(0, XD.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, XD.jsx)(SD.c, {
                  name: "check"
                }), (0, XD.jsx)("span", {
                  children: fD("thumbnail:policyFollowGuidelines")
                })]
              }), (0, XD.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, XD.jsx)(SD.c, {
                  name: "check"
                }), (0, XD.jsx)("span", {
                  children: fD("thumbnail:policyInGameAssets")
                })]
              }), (0, XD.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, XD.jsx)(SD.c, {
                  name: "check"
                }), (0, XD.jsx)("span", {
                  children: fD("thumbnail:policyLimitText")
                })]
              }), (0, XD.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, XD.jsx)(SD.c, {
                  name: "x"
                }), (0, XD.jsx)("span", {
                  children: fD("thumbnail:policyCopyrightContent")
                })]
              }), (0, XD.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, XD.jsx)(SD.c, {
                  name: "x"
                }), (0, XD.jsx)("span", {
                  children: fD("thumbnail:policyOutOfGameAssets")
                })]
              }), (0, XD.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, XD.jsx)(SD.c, {
                  name: "x"
                }), (0, XD.jsx)("span", {
                  children: fD("thumbnail:policyBloxdTags")
                })]
              }), (0, XD.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, XD.jsx)(SD.c, {
                  name: "x"
                }), (0, XD.jsx)("span", {
                  children: fD("thumbnail:policyMustReflectGame")
                })]
              })]
            }), (0, XD.jsxs)("label", {
              className: MD()("ThumbnailUploadCheckbox Policy", {
                ValidationError: oD && !tD
              }),
              children: [(0, XD.jsx)("input", {
                type: "checkbox",
                checked: tD,
                onChange: DD => {
                  ZD(DD.target.checked)
                }
              }), fD("thumbnail:agreeToUploadPolicy")]
            }), oD && !tD && (0, XD.jsx)("div", {
              className: "ThumbnailPolicyError",
              children: fD("thumbnail:policyRequired")
            })]
          })]
        })]
      })
    }
    var YD = cD(1199);
    const WD = {
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

    function sD(DD) {
      var CD, cD;
      let {
        schematicData: fD,
        updateSchematicData: wD,
        publishFormEnabled: BD,
        onClose: yD
      } = DD;
      const {
        t: tD
      } = (0, bD.F)(), {
        userContext: ZD,
        isUserContextUpdating: oD
      } = (0, JD.c)(), vD = (0, qD.d)(), [ND, gD] = (0, ID.useState)([]), [mD, nD] = (0, ID.useState)([]), [OD, PD] = (0, ID.useState)(!0), [HD, UD] = (0, ID.useState)(null !== (CD = fD.customThumbnailId) && void 0 !== CD ? CD : null), [aD, VD] = (0, ID.useState)(null), zD = (0, ID.useRef)(null !== (cD = fD.customThumbnailId) && void 0 !== cD ? cD : null), jD = (0, ID.useRef)(0), lD = (0, ID.useRef)(null), LD = (0, ID.useRef)(null), TD = (0, ID.useRef)(null), GD = (0, ID.useRef)(!1);

      function RD(DD, CD) {
        TD.current && (clearTimeout(TD.current), TD.current = null), VD(DD), null !== DD && CD && (TD.current = setTimeout((() => {
          VD(null), TD.current = null
        }), 5e3))
      }(0, ID.useEffect)((() => () => {
        clearTimeout(LD.current), clearTimeout(TD.current)
      }), []);
      const kD = (0, ID.useCallback)((() => {
        PD(!0), xD.c.getOwnedThumbnails(ZD).then((DD => {
          const CD = [],
            cD = [];
          for (const ID of DD.thumbnails) ID.rejectionPolicyId ? CD.push(ID) : cD.push(ID);
          CD.sort(((DD, CD) => DD.lastUpdatedAt - CD.lastUpdatedAt)), cD.sort(((DD, CD) => {
            const cD = DD.approved ? 1 : 0,
              ID = (CD.approved ? 1 : 0) - cD;
            return 0 !== ID ? ID : CD.lastUpdatedAt - DD.lastUpdatedAt
          })), nD(CD), gD(cD)
        })).catch((DD => {
          console.error("Failed to fetch thumbnails:", DD)
        })).finally((() => {
          PD(!1)
        }))
      }), [ZD]);
      async function WD(DD, CD, cD) {
        return xD.c.uploadSchematicThumbnail(ZD, DD, CD, cD).then((() => {
          RD({
            text: tD("thumbnail:uploadedAwaitingModeration"),
            type: "success"
          }, !0), kD()
        }))
      }

      function sD() {
        jD.current = Date.now(), LD.current = null;
        const DD = lD.current;
        lD.current = null, RD({
          text: tD("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), xD.c.setSchematicThumbnail(ZD, fD.schematicId, DD).then((() => {
          vD.current && (RD({
            text: tD("thumbnail:thumbnailUpdated"),
            type: "success"
          }, !0), zD.current = DD, wD("customThumbnailId", DD), wD("customThumbnailBlurhash", void 0), wD("customThumbnailVariants", void 0))
        })).catch((DD => {
          vD.current && (RD({
            text: DD.errorMessageForUser ? tD(DD.errorMessageForUser, DD.errorMessageTranslationParams) : tD("thumbnail:failedToSetThumbnail"),
            type: "error"
          }, !0), UD(zD.current))
        }))
      }

      function uD(DD) {
        UD(DD), lD.current = DD;
        const CD = Date.now() - jD.current;
        CD >= 1e3 ? sD() : (RD({
          text: tD("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), LD.current || (LD.current = setTimeout((() => {
          sD()
        }), 1e3 - CD)))
      }
      return (0, ID.useEffect)((() => {
        !1 === oD && kD()
      }), [oD, kD]), mD.length > 0 ? (0, XD.jsx)(ED, {
        rejectedThumbnails: mD,
        userContext: ZD,
        isMountedRef: vD,
        onAcknowledged: kD
      }) : (0, XD.jsxs)("div", {
        className: "BloxdForm ThumbnailSection",
        children: [(0, XD.jsxs)("div", {
          className: "SectionTitle",
          children: [tD("thumbnail:gameThumbnail"), aD && (0, XD.jsx)("span", {
            className: MD()("ThumbnailActionMsg", `ThumbnailActionMsg--${aD.type}`),
            children: aD.text
          })]
        }), (0, XD.jsx)("div", {
          className: "SectionBody",
          children: (0, XD.jsxs)("div", {
            className: "ThumbnailGrid",
            children: [(0, XD.jsxs)("div", {
              className: MD()("ThumbnailGridItem ThumbnailGridItemDefault", {
                ThumbnailGridItemSelected: null === HD
              }),
              onClick: () => uD(null),
              children: [(0, XD.jsx)(KD.e, {
                game: {
                  schematicId: fD.schematicId,
                  imageBlurhash: fD.imageBlurhash
                }
              }), (0, XD.jsx)("div", {
                className: "ThumbnailGridItemLabel ThumbnailDefaultLabel",
                children: tD("general:default")
              })]
            }), OD && (0, XD.jsx)(QD.e, {}), ND.map(((DD, CD) => (0, XD.jsxs)("div", {
              className: MD()("ThumbnailGridItem", {
                ThumbnailGridItemSelected: HD === DD.id,
                ThumbnailGridItemPending: !DD.approved
              }),
              onClick: () => {
                DD.approved && uD(DD.id)
              },
              children: [DD.approved && (0, XD.jsx)("img", {
                src: `${YD.clientSideServerUrls.s3Url}/customThumbnails/${DD.id}.jpg`,
                alt: "Thumbnail"
              }), DD.approved && (0, XD.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: DD.name
              }), DD.id && (0, XD.jsx)(iD.J, {
                className: "ThumbnailDeleteButton",
                onClick: CD => async function(DD, CD, cD) {
                  DD.stopPropagation();
                  const ID = await pD.NotificationProvider.showCustomPopup({
                      body: DD => (0, XD.jsx)(eD, {
                        thumbnailId: CD,
                        thumbnailName: cD,
                        onClose: CD => {
                          CD && (GD.current = !0), DD()
                        }
                      }),
                      middleScreenPopupClassName: "ThumbnailDeleteConfirmPopup",
                      onClose: yD
                    }).getResult(),
                    iD = GD.current;
                  GD.current = !1, iD && !0 === ID && (vD.current && RD({
                    text: tD("thumbnail:deletingThumbnail"),
                    type: "info"
                  }, !1), xD.c.deleteSchematicThumbnail(ZD, CD).then((() => {
                    vD.current && (RD({
                      text: tD("thumbnail:thumbnailDeleted"),
                      type: "success"
                    }, !0), zD.current === CD && uD(null), kD())
                  })).catch((DD => {
                    vD.current && RD({
                      text: DD.errorMessageForUser ? tD(DD.errorMessageForUser, DD.errorMessageTranslationParams) : tD("thumbnail:failedToDeleteThumbnail"),
                      type: "error"
                    }, !0)
                  })))
                }(CD, DD.id, DD.name),
                children: (0, XD.jsx)(SD.c, {
                  name: "trash-can"
                })
              }), !DD.approved && (0, XD.jsx)("div", {
                className: "ThumbnailUnapprovedIcon",
                children: (0, XD.jsx)(SD.c, {
                  name: "hourglass-clock"
                })
              }), !DD.approved && (0, XD.jsxs)("div", {
                className: "ThumbnailGridItemLabel ThumbnailPendingLabel",
                children: [DD.name, (0, XD.jsx)("br", {}), tD("thumbnail:pendingApproval")]
              })]
            }, CD))), (0, XD.jsxs)("div", {
              className: MD()("ThumbnailGridItem ThumbnailUploadTile", {
                ThumbnailUploadTileDisabled: !BD
              }),
              onClick: () => {
                BD && function(DD) {
                  let {
                    schematicId: CD,
                    ownedThumbnailCount: cD,
                    onThumbnailReady: ID,
                    onClose: iD
                  } = DD;
                  pD.NotificationProvider.showCustomPopup({
                    body: DD => (0, XD.jsx)(dD, {
                      schematicId: CD,
                      ownedThumbnailCount: cD,
                      onClose: DD,
                      onThumbnailReady: ID
                    }),
                    middleScreenPopupClassName: "SchematicThumbnailPopup",
                    onClose: iD,
                    unlockPointerKey: "schematicThumbnailUploaderPopup"
                  })
                }({
                  schematicId: fD.schematicId,
                  ownedThumbnailCount: ND.length,
                  onThumbnailReady: WD,
                  onClose: yD
                })
              },
              children: [(0, XD.jsx)(SD.c, {
                name: "plus"
              }), (0, XD.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: tD("thumbnail:uploadThumbnail")
              })]
            })]
          })
        })]
      })
    }

    function ED(DD) {
      let {
        rejectedThumbnails: CD,
        userContext: cD,
        isMountedRef: pD,
        onAcknowledged: fD
      } = DD;
      const {
        t: wD
      } = (0, bD.F)(), [BD, yD] = (0, ID.useState)(!1), [MD, tD] = (0, ID.useState)(!1), ZD = function(DD) {
        const CD = new Map;
        for (const cD of DD) {
          const DD = cD.rejectionPolicyId,
            ID = CD.get(DD);
          ID ? ID.push(cD) : CD.set(DD, [cD])
        }
        return CD
      }(CD);
      return (0, XD.jsxs)("div", {
        className: "ThumbnailRejectionNotice",
        children: [(0, XD.jsxs)("div", {
          className: "ThumbnailRejectionNoticeTitle",
          children: [(0, XD.jsx)(SD.c, {
            name: "triangle-exclamation"
          }), " ", wD("thumbnail:thumbnailsRejected"), " ", (0, XD.jsx)(SD.c, {
            name: "triangle-exclamation"
          })]
        }), (0, XD.jsx)("div", {
          className: "ThumbnailRejectionNoticeSubtitle",
          children: wD("thumbnail:thumbnailsRejectedDescription")
        }), (0, XD.jsx)("div", {
          className: "ThumbnailRejectionNoticeList",
          children: [...ZD.entries()].map((DD => {
            let [CD, cD] = DD;
            const ID = WD[CD];
            return (0, XD.jsxs)("div", {
              className: "ThumbnailRejectionNoticeGroup",
              children: [(0, XD.jsx)("div", {
                className: "ThumbnailRejectionNoticeItems",
                children: cD.map((DD => (0, XD.jsxs)("div", {
                  className: "ThumbnailRejectionNoticeItem",
                  children: [(0, XD.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemIcon",
                    children: (0, XD.jsx)(SD.c, {
                      name: "image-slash"
                    })
                  }), (0, XD.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemDetails",
                    children: (0, XD.jsx)("div", {
                      className: "ThumbnailRejectionNoticeItemName",
                      children: DD.name
                    })
                  })]
                }, DD.id)))
              }), (0, XD.jsxs)("div", {
                className: "ThumbnailRejectionNoticeGroupReason",
                children: [wD("thumbnail:rejectionReason"), " ", ID ? wD(ID.reason) : CD]
              }), ID && (0, XD.jsx)("ul", {
                className: "ThumbnailRejectionNoticeGroupTips",
                children: ID.tips.map((DD => (0, XD.jsx)("li", {
                  children: wD(DD)
                }, DD)))
              })]
            }, CD)
          }))
        }), (0, XD.jsxs)("label", {
          className: "ThumbnailRejectionNoticeCheckbox",
          children: [(0, XD.jsx)(UD.e, {
            checked: BD,
            onChange: DD => yD(DD.target.checked),
            disabled: MD
          }), (0, XD.jsx)("span", {
            children: wD("thumbnail:haveReadRejectionReasons")
          })]
        }), (0, XD.jsx)(iD.o, {
          onClick: async function() {
            tD(!0);
            const DD = await Promise.allSettled(CD.map((DD => xD.c.deleteSchematicThumbnail(cD, DD.id))));
            if (!pD.current) return;
            const ID = DD.filter((DD => "rejected" === DD.status));
            ID.length > 0 && console.error("Some rejected thumbnails failed to delete:", ID), fD()
          },
          disabled: !BD || MD,
          className: "ThumbnailRejectionNoticeAcceptButton",
          children: MD ? (0, XD.jsx)(QD.e, {}) : wD("general:accept")
        })]
      })
    }

    function eD(DD) {
      let {
        thumbnailId: CD,
        thumbnailName: cD,
        onClose: ID
      } = DD;
      const {
        t: pD
      } = (0, bD.F)();
      return (0, XD.jsxs)("div", {
        className: "ThumbnailDeleteConfirm",
        children: [(0, XD.jsx)("div", {
          className: "ThumbnailDeleteConfirmTitle",
          children: pD("thumbnail:deleteThumbnail")
        }), (0, XD.jsxs)("div", {
          className: "ThumbnailDeleteConfirmImageContainer",
          children: [(0, XD.jsx)("img", {
            className: "ThumbnailDeleteConfirmImage",
            src: `${YD.clientSideServerUrls.s3Url}/customThumbnails/${CD}.jpg`,
            alt: "Thumbnail to delete"
          }), (0, XD.jsx)("div", {
            className: "ThumbnailGridItemLabel",
            children: cD
          })]
        }), (0, XD.jsx)("div", {
          className: "ThumbnailDeleteConfirmSubtitle",
          children: pD("thumbnail:deleteThumbnailConfirmation")
        }), (0, XD.jsxs)("div", {
          className: "ThumbnailDeleteConfirmButtons",
          children: [(0, XD.jsxs)(iD.J, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => ID(!0),
            children: [(0, XD.jsx)(SD.c, {
              name: "trash-can"
            }), " ", pD("general:delete")]
          }), (0, XD.jsx)(iD.k, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => ID(!1),
            children: pD("general:cancel")
          })]
        })]
      })
    }
    var uD = cD(2952),
      hD = cD(4762),
      rD = cD(4767),
      AD = cD(4808);

    function FD(DD) {
      let {
        schematicData: CD,
        setTexturePack: cD,
        initializeTexturePack: pD,
        publishFormEnabled: iD
      } = DD;
      const {
        t: fD
      } = (0, bD.F)(), [QD, wD] = (0, ID.useState)(null), [SD, BD] = (0, ID.useState)(null), [yD, tD] = (0, ID.useState)(!1), ZD = (0, qD.d)(), oD = iD && !yD, vD = CD.customTexturePackKey;

      function ND(DD) {
        var CD;
        wD(DD.metaData.id), BD(null !== (CD = DD.metaData.fromFolderName) && void 0 !== CD ? CD : null), (DD.metaData.id !== uD.r.CUSTOM || DD.metaData.fromFolderName) && cD(DD)
      }
      return (0, ID.useEffect)((() => {
        vD && (tD(!0), (0, hD.c)(vD).then((DD => {
          var CD;
          ZD.current && (DD ? (wD(DD.metaData.id), BD(null !== (CD = DD.metaData.fromFolderName) && void 0 !== CD ? CD : null), pD(DD)) : console.error(`No texture pack at ${vD}`))
        })).catch((DD => {
          console.error("Error fetching texture pack: ", DD)
        })).finally((() => {
          tD(!1)
        })))
      }), [vD, pD, ZD]), (0, XD.jsxs)("div", {
        className: "BloxdForm TexturePackSection",
        children: [(0, XD.jsx)("div", {
          className: "SectionTitle",
          children: fD("customTexturePack:customTexturePack")
        }), (0, XD.jsxs)("div", {
          className: "TexturePackList",
          children: [(0, XD.jsx)("div", {
            className: MD()("TexturePack", {
              Selected: null === QD && !yD,
              Disabled: !oD
            }),
            onClick: () => {
              oD && (wD(null), cD(null), BD(null))
            },
            children: (0, XD.jsx)("div", {
              className: "TexturePackName",
              children: "No Override"
            })
          }), Object.values(uD.r).map((DD => (0, XD.jsx)(rD.f, {
            id: DD,
            isSelected: DD === QD,
            setSelected: ND,
            disabled: !oD
          }, DD)))]
        }), QD === uD.r.CUSTOM && (0, XD.jsx)(AD.d, {
          folderName: SD,
          onTexturePackUpdated: ND,
          disabled: !oD,
          maxFileSizeMb: 25,
          packOwner: "customGame"
        })]
      })
    }
    var DC = cD(4826);

    function CC(DD) {
      var CD;
      let {
        gameCategory: cD,
        setGameCategory: ID,
        disabled: pD
      } = DD;
      const fD = null !== (CD = (0, tD.eb)(cD)) && void 0 !== CD ? CD : "other";
      return (0, XD.jsxs)("div", {
        className: "GameCategoryPicker",
        children: [(0, XD.jsx)(vD.e, {
          label: "worldBuilder:gameCategoryGroup",
          className: "GameCategoryGroup",
          disabled: pD,
          children: (0, XD.jsx)(ND.b, {
            options: tD.V.map((DD => ({
              value: DD,
              label: tD.U[DD]
            }))),
            value: fD,
            onChange: DD => {
              DD.value !== fD && ID(tD.Q[DD.value][0])
            }
          })
        }), (0, XD.jsx)(vD.e, {
          label: "worldBuilder:gameCategory",
          className: "GameCategory",
          disabled: pD,
          children: (0, XD.jsx)("div", {
            className: "GameCategoryOptions",
            children: tD.Q[fD].map((DD => (0, XD.jsx)(iD.P, {
              active: DD === cD,
              onClick: () => {
                ID(DD)
              },
              children: (0, tD.ab)(DD)
            }, DD)))
          })
        })]
      })
    }

    function cC(DD) {
      let {
        editor: CD,
        onClose: cD
      } = DD;
      const {
        t: ID
      } = (0, bD.F)(), {
        schematicData: pD,
        updateSchematicData: iD,
        publishFormEnabled: QD,
        formEnabled: wD
      } = CD;
      return (0, XD.jsxs)(XD.Fragment, {
        children: [(0, XD.jsxs)(mD, {
          icon: "pen-to-square",
          title: ID("worldBuilder:basicsSection"),
          disabled: !wD,
          children: [(0, XD.jsx)(nD, {
            label: ID("general:name"),
            caption: ID("worldBuilder:schematicNameTagsHint"),
            children: (0, XD.jsx)(fD.b, {
              className: "SchematicPageName",
              defaultValue: pD.name,
              onValueChange: DD => iD("name", DD),
              placeholderText: ID("worldBuilder:schematicNamePlaceholder"),
              maxLength: BD.qb
            })
          }), (0, XD.jsx)(nD, {
            label: ID("general:description"),
            children: (0, XD.jsx)(fD.b, {
              className: "SchematicPageDescription",
              useTextarea: !0,
              defaultValue: pD.description,
              onValueChange: DD => iD("description", DD),
              placeholderText: ID("worldBuilder:schematicDescriptionPlaceholder"),
              maxLength: BD.nb
            })
          }), (0, XD.jsx)(CC, {
            gameCategory: pD.gameCategory,
            setGameCategory: DD => iD("gameCategory", DD),
            disabled: !QD
          }), !0 === pD.gamePublished && (0, XD.jsx)(sD, {
            schematicData: pD,
            updateSchematicData: iD,
            publishFormEnabled: QD,
            onClose: function() {
              null === cD || void 0 === cD || cD()
            }
          })]
        }), (0, XD.jsx)(PD, {
          schematicData: pD,
          updateSchematicData: iD,
          publishFormEnabled: QD,
          formEnabled: wD
        }), !0 === pD.gamePublished && (0, XD.jsx)(mD, {
          icon: "palette",
          title: ID("worldBuilder:texturePackSection"),
          disabled: !wD,
          children: (0, XD.jsx)(FD, {
            schematicData: pD,
            setTexturePack: CD.setTexturePack,
            initializeTexturePack: CD.initializeTexturePack,
            publishFormEnabled: QD
          })
        })]
      })
    }

    function IC(DD) {
      let {
        editor: CD
      } = DD;
      const {
        t: cD
      } = (0, bD.F)(), {
        schematicData: ID,
        formEnabled: pD,
        hasUnsavedChanges: fD
      } = CD, BD = pD && fD;
      return (0, XD.jsxs)("footer", {
        className: "SchematicPageFooter",
        children: [pD && fD && (0, XD.jsxs)("div", {
          className: "SchematicPageFooterStatus",
          children: [(0, XD.jsx)("span", {
            className: "SchematicPageFooterStatusDot"
          }), cD("worldBuilder:unsavedChanges")]
        }), (0, XD.jsx)(wD.f, {
          tooltipInner: (0, XD.jsx)("div", {
            className: "SaveButtonTooltip",
            children: cD(pD && !fD ? "worldBuilder:saveChangesNoneDescription" : "worldBuilder:saveChangesDescription")
          }),
          children: (0, XD.jsxs)(iD.i, {
            className: "SaveChangesButton",
            onClick: () => CD.saveSchematic(ID.gamePublished),
            disabled: !BD,
            children: [(0, XD.jsxs)("span", {
              className: pD ? "" : "SaveChangesButtonBodyHidden",
              children: [(0, XD.jsx)(SD.c, {
                name: "wrench"
              }), " ", cD("worldBuilder:saveChanges")]
            }), !pD && (0, XD.jsx)(QD.e, {})]
          })
        })]
      })
    }

    function pC(DD) {
      let {
        schematic: CD,
        onSchematicUpdate: cD,
        onClose: pD,
        inSourceWorld: fD
      } = DD;
      const {
        t: QD
      } = (0, bD.F)();

      function wD() {
        null === pD || void 0 === pD || pD()
      }
      const SD = (0, DC.d)(CD, {
        onNavigateAway: wD,
        inSourceWorld: fD
      });
      return (0, ID.useEffect)((() => {
        null === cD || void 0 === cD || cD(SD.schematicData)
      }), [SD.schematicData, cD]), (0, XD.jsxs)("div", {
        className: "SchematicPage SchematicPagePopupVariant",
        children: [(0, XD.jsxs)("div", {
          className: "SchematicPageBody",
          children: [(0, XD.jsx)(iD.e, {
            onClick: wD,
            children: QD("worldBuilder:back")
          }), (0, XD.jsx)(mD, {
            icon: "rocket-launch",
            title: QD("worldBuilder:actionsSection"),
            disabled: !SD.formEnabled,
            children: (0, XD.jsx)(HD.d, {
              editor: SD
            })
          }), (0, XD.jsx)(cC, {
            editor: SD,
            onClose: wD
          })]
        }), (0, XD.jsx)(IC, {
          editor: SD
        })]
      })
    }

    function iC(DD) {
      let {
        schematic: CD,
        onSchematicUpdate: cD,
        onClose: ID,
        inSourceWorld: iD
      } = DD;
      pD.NotificationProvider.showCustomPopup({
        body: DD => (0, XD.jsx)(pC, {
          schematic: CD,
          onSchematicUpdate: cD,
          onClose: DD,
          inSourceWorld: iD
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: ID,
        unlockPointerKey: "schematicPagePopup"
      })
    }
  },
  4732: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => BD
    });
    var ID = cD(1049),
      pD = cD.n(ID),
      iD = cD(1192),
      fD = cD(1064),
      bD = cD(1442),
      QD = cD(1356),
      wD = cD(1328),
      SD = cD(1093);

    function BD(DD) {
      let {
        editor: CD,
        className: cD
      } = DD;
      const {
        t: ID
      } = (0, iD.F)(), {
        schematicData: BD,
        formEnabled: yD,
        publishFormEnabled: MD
      } = CD, tD = !yD || !MD;
      return (0, SD.jsxs)("div", {
        className: pD()("PublishButtonContainer", cD),
        children: [CD.canEditSourceWorld && (0, SD.jsxs)(bD.i, {
          onClick: CD.editSourceWorld,
          disabled: tD,
          children: [(0, SD.jsx)(fD.c, {
            name: "edit"
          }), " ", ID("worldBuilder:editSourceWorld")]
        }), !BD.gamePublished && (0, SD.jsx)(QD.f, {
          tooltipInner: (0, SD.jsx)("div", {
            className: "PublishButtonTooltip",
            children: ID("worldBuilder:publishAsGameDescription")
          }),
          children: (0, SD.jsxs)(bD.o, {
            onClick: () => CD.saveSchematic(!0),
            disabled: tD,
            children: [(0, SD.jsx)(fD.c, {
              name: "rocket-launch"
            }), " ", ID("worldBuilder:publishAsGame"), " ", (0, SD.jsx)(fD.c, {
              name: "info-circle"
            })]
          })
        }), !0 === BD.gamePublished && (0, SD.jsxs)(SD.Fragment, {
          children: [(0, SD.jsx)(QD.f, {
            tooltipInner: (0, SD.jsx)("div", {
              className: "PublishButtonTooltip",
              children: ID("worldBuilder:unpublishAsGameDescription")
            }),
            children: (0, SD.jsxs)(bD.J, {
              onClick: CD.unpublishSchematic,
              disabled: tD,
              children: [(0, SD.jsx)(fD.c, {
                name: "rocket-launch"
              }), " ", ID("worldBuilder:unpublishAsGame"), " ", (0, SD.jsx)(fD.c, {
                name: "info-circle"
              })]
            })
          }), (0, SD.jsxs)(bD.i, {
            onClick: CD.playGame,
            disabled: tD,
            children: [(0, SD.jsx)(fD.c, {
              name: "joystick"
            }), " ", ID("general:playGame")]
          })]
        }), !yD && (0, SD.jsx)(wD.e, {
          loaderType: "Secondary"
        })]
      })
    }
  },
  4762: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => pD
    });
    var ID = cD(1199);
    async function pD(DD) {
      const CD = await fetch(`${ID.clientSideServerUrls.s3Url}/${DD}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === CD.status || 403 === CD.status) return null;
      if (!CD.ok) throw new Error(`Failed to download the texture pack (${CD.status})`);
      return await CD.json()
    }
  },
  4826: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => oD
    });
    var ID = cD(53),
      pD = cD(1319),
      iD = cD(1011),
      fD = cD(162),
      bD = cD(1540),
      QD = cD(16),
      wD = cD(1905),
      SD = cD(1497),
      BD = cD(4388),
      yD = cD(1340),
      MD = cD(1120),
      tD = cD(1508);

    function ZD(DD, CD) {
      return {
        schematicId: DD.schematicId,
        name: DD.name,
        description: DD.description,
        gamePublished: CD,
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

    function oD(DD) {
      let {
        onNavigateAway: CD,
        inSourceWorld: cD = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const {
        userContext: oD
      } = (0, MD.c)(), vD = (0, tD.useNavigatePreserveSearch)(), [ND, gD] = (0, ID.useState)({
        ...DD
      }), [XD, mD] = (0, ID.useState)("Enter"), [nD, OD] = (0, ID.useState)(void 0), PD = (0, ID.useRef)(ZD(DD, DD.gamePublished)), HD = (0, ID.useRef)(void 0), UD = "Enter" === XD, xD = oD.playerHasRank("developer") || oD.playerHasRank("admin") || "Enter" === XD && !1 !== ND.schematicContainsSpawnBlock, qD = void 0 !== nD && nD !== HD.current || JSON.stringify(ZD(ND, ND.gamePublished)) !== JSON.stringify(PD.current);

      function JD(DD, CD) {
        gD((cD => ({
          ...cD,
          [DD]: CD
        })))
      }
      const KD = (0, ID.useCallback)((DD => {
        HD.current = DD, OD(DD)
      }), []);

      function aD(DD) {
        mD("Loading");
        const CD = ZD(ND, DD),
          cD = nD !== HD.current ? nD : void 0;
        SD.c.updateSchematic(oD, CD, cD).then((cD => {
          let {
            customTexturePackKey: ID
          } = cD;
          mD("Success"), JD("customTexturePackKey", ID), PD.current = CD, HD.current = void 0, OD(void 0), setTimeout((() => {
            JD("gamePublished", DD), mD("Enter")
          }), 1e3)
        })).catch((DD => {
          var CD;
          (console.error("Failed to save schematic:", DD), mD("Error"), DD instanceof fD.d && DD.errorMessageForUser) && yD.NotificationProvider.showAlertPopup({
            title: "worldBuilder:changesNotSaved",
            subtitle: DD.errorMessageForUser,
            textOpts: {
              subtitle: null !== (CD = DD.errorMessageTranslationParams) && void 0 !== CD ? CD : void 0
            },
            confirmText: "general:ok"
          });
          setTimeout((() => {
            mD("Enter")
          }), 1e3)
        }))
      }
      return {
        schematicData: ND,
        updateSchematicData: JD,
        setTexturePack: OD,
        initializeTexturePack: KD,
        updateState: XD,
        formEnabled: UD,
        publishFormEnabled: xD,
        hasUnsavedChanges: qD,
        canEditSourceWorld: !cD,
        saveSchematic: aD,
        unpublishSchematic: function() {
          yD.NotificationProvider.showPromptPopup({
            icon: "rocket-launch",
            title: "worldBuilder:unpublishAsGameConfirmTitle",
            subtitle: "worldBuilder:unpublishAsGameConfirmSubtitle",
            confirmText: "worldBuilder:unpublishAsGame",
            cancelText: "general:cancel",
            unlockPointerKey: "unpublishGamePrompt"
          }).getResult().then((DD => {
            !0 === DD && aD(!1)
          }))
        },
        editSourceWorld: function() {
          mD("Loading"), BD.b.getSourceWorld(ND.schematicId).then((DD => {
            wD.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, QD.k)("other"), vD((0, pD.b)("classic", DD)), null === CD || void 0 === CD || CD()
          })).catch((DD => {
            console.error("Failed to get source world:", DD), mD("Error"), setTimeout((() => {
              mD("Enter")
            }), 1e3)
          }))
        },
        playGame: function() {
          wD.gameBridge.send("leaveGame", {
            reloadPath: "/"
          }), vD((0, bD.A)((0, iD.v)(ND.schematicId), ND)), null === CD || void 0 === CD || CD()
        }
      }
    }
  },
  4720: () => {}
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);