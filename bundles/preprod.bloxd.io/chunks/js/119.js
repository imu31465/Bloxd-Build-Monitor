export const id = 119;
export const ids = [119];
export const modules = {
  5343: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => LM,
      d: () => zM,
      f: () => mM
    });
    iM(5348);
    var OM = iM(1188),
      SM = iM(1116),
      jM = iM.n(SM),
      aM = iM(1440),
      PM = (iM(44), iM(4720)),
      nM = iM(1398),
      QM = iM(1303);

    function zM(MM) {
      let {
        children: rM,
        label: iM,
        className: SM,
        circleInfoText: PM,
        disabled: zM,
        onLabelClick: LM
      } = MM;
      const {
        t: mM
      } = (0, OM.A)(), HM = (0, QM.jsxs)("div", {
        className: jM()("Label", {
          ClickableLabel: void 0 !== LM
        }),
        onClick: LM,
        children: [mM(iM), PM && (0, QM.jsx)(nM.b, {
          name: "circle-info"
        })]
      });
      return (0, QM.jsxs)("div", {
        className: jM()("LabeledInput", {
          [SM]: SM,
          DisabledLabelInput: zM
        }),
        children: [PM && (0, QM.jsx)(aM.i, {
          tooltipInner: (0, QM.jsx)("div", {
            className: "LabeledInputTooltip",
            children: mM(PM)
          }),
          children: HM
        }), !PM && HM, rM]
      })
    }

    function LM(MM) {
      let {
        checked: rM,
        setChecked: iM
      } = MM;
      return (0, QM.jsx)("div", {
        className: "OtherInput ClickableOtherInput",
        "data-pad-focusable": !0,
        onClick: MM => {
          iM(!rM)
        },
        children: (0, QM.jsx)(PM.c, {
          checked: rM,
          onChange: MM => {
            iM(MM.target.checked)
          },
          disabled: !1
        })
      })
    }

    function mM(MM) {
      let {
        checked: rM,
        setChecked: iM,
        disabled: OM
      } = MM;
      return (0, QM.jsx)("div", {
        className: jM()("SwitchContainer", {
          SwitchContainerDisabled: OM
        }),
        onClick: () => {
          OM || iM(!rM)
        },
        children: (0, QM.jsx)(PM.c, {
          className: "SwitchCheckbox",
          checked: rM,
          onChange: MM => {
            iM(MM.target.checked)
          },
          disabled: !!OM
        })
      })
    }
  },
  5356: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => QM
    });
    var OM = iM(1116),
      SM = iM.n(OM),
      jM = iM(5003),
      aM = iM(1188),
      PM = iM(1303);
    const nM = [...jM.m, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function QM(MM) {
      const {
        disabled: rM,
        hideWrapper: iM
      } = MM, {
        t: OM
      } = (0, aM.A)(), QM = MM.advancedMode ? nM.map((rM => [rM, MM.callbacks[rM]])) : jM.m.map((rM => [rM, MM.callbacks[rM]])), LM = (0, PM.jsx)("div", {
        className: SM()("PluginsGrid", {
          SectionBody: !iM
        }),
        children: QM.map((MM => {
          let [iM, OM] = MM;
          return (0, PM.jsx)(zM, {
            plugin: iM,
            callbacks: OM,
            disabled: rM
          }, iM)
        }))
      });
      return iM ? LM : (0, PM.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, PM.jsx)("div", {
          className: "SectionTitle",
          children: OM("worldBuilder:pluginsSection")
        }), LM]
      })
    }

    function zM(MM) {
      let {
        plugin: rM,
        callbacks: {
          isEnabled: iM,
          kR: OM
        },
        disabled: jM
      } = MM;
      const {
        t: nM
      } = (0, aM.A)(), QM = iM();
      return (0, PM.jsxs)("div", {
        className: SM()("PluginCard", {
          PluginCardEnabled: QM,
          PluginCardDisabledForm: jM
        }),
        "data-pad-focusable": !0,
        "aria-disabled": jM || void 0,
        onClick: () => {
          jM || OM(!QM)
        },
        children: [(0, PM.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, PM.jsx)("img", {
            src: `/textures/games/classic/customGames/${rM}.png`,
            alt: rM
          })
        }), (0, PM.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, PM.jsx)("div", {
            className: "PluginCardTitle",
            children: nM(LM[rM])
          }), (0, PM.jsx)("div", {
            className: "PluginCardDescription",
            children: nM(mM[rM])
          })]
        }), (0, PM.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: nM(QM ? "general:on" : "general:off")
        })]
      })
    }
    const LM = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      mM = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  5335: (MM, rM, iM) => {
    iM.d(rM, {
      g: () => Sr,
      d: () => Or,
      f: () => ir,
      j: () => jr
    });
    var OM = iM(44),
      SM = iM(1429),
      jM = iM(1520),
      aM = iM(1763),
      PM = iM(1188),
      nM = iM(1396),
      QM = iM(1440),
      zM = iM(1398),
      LM = iM(1229),
      mM = iM(1116),
      HM = iM.n(mM),
      hM = iM(313),
      JM = iM(5003),
      dM = iM(1242),
      yM = iM(5343),
      lM = iM(3530),
      EM = iM(5356),
      UM = iM(1303);

    function GM(MM) {
      let {
        icon: rM,
        title: iM,
        disabled: OM,
        children: SM
      } = MM;
      return (0, UM.jsxs)("div", {
        className: HM()("ManageCard", {
          ManageCardDisabled: OM
        }),
        children: [(0, UM.jsxs)("div", {
          className: "ManageCardHead",
          children: [(0, UM.jsx)("div", {
            className: "ManageCardIcon",
            children: (0, UM.jsx)(zM.b, {
              name: rM
            })
          }), (0, UM.jsx)("div", {
            children: (0, UM.jsx)("h2", {
              className: "ManageCardTitle",
              children: iM
            })
          })]
        }), (0, UM.jsxs)("div", {
          className: "ManageCardBody",
          children: [SM, OM && (0, UM.jsx)("div", {
            className: "ManageCardDisabledOverlay"
          })]
        })]
      })
    }

    function CM(MM) {
      let {
        label: rM,
        caption: iM,
        children: OM
      } = MM;
      return (0, UM.jsxs)("div", {
        className: "ManageStackedField",
        children: [(0, UM.jsx)("div", {
          className: "ManageStackedFieldLabel",
          children: rM
        }), OM, iM && (0, UM.jsx)("div", {
          className: "ManageStackedFieldCaption",
          children: iM
        })]
      })
    }

    function eM(MM) {
      let {
        label: rM,
        caption: iM,
        disabled: OM,
        children: SM
      } = MM;
      return (0, UM.jsxs)("div", {
        className: HM()("ManageField", {
          ManageFieldDisabled: OM
        }),
        children: [(0, UM.jsxs)("div", {
          className: "ManageFieldText",
          children: [(0, UM.jsx)("div", {
            className: "ManageFieldLabel",
            children: rM
          }), (0, UM.jsx)("div", {
            className: "ManageFieldCaption",
            children: iM
          })]
        }), (0, UM.jsx)("div", {
          className: "ManageFieldControl",
          children: SM
        })]
      })
    }

    function bM(MM) {
      var rM, iM;
      let {
        schematicData: OM,
        updateSchematicData: SM,
        publishFormEnabled: jM,
        formEnabled: aM
      } = MM;
      const {
        t: nM
      } = (0, PM.A)(), QM = !jM, zM = {
        tpRequests: {
          isEnabled: () => !OM.disableTpRequests,
          kR: MM => SM("disableTpRequests", !MM)
        },
        spawnProtection: {
          isEnabled: () => !OM.disableSpawnProtection,
          kR: MM => SM("disableSpawnProtection", !MM)
        },
        spawnReset: {
          isEnabled: () => !!OM.enableSpawnReset,
          kR: MM => SM("enableSpawnReset", MM)
        },
        smpMarketplace: {
          isEnabled: () => !!OM.enableSmpMarketplace,
          kR: MM => SM("enableSmpMarketplace", MM)
        },
        survivalGuns: {
          isEnabled: () => !!OM.enableSurvivalGuns,
          kR: MM => SM("enableSurvivalGuns", MM)
        },
        fallDamage: {
          isEnabled: () => !OM.disableFallDamage,
          kR: MM => SM("disableFallDamage", !MM)
        },
        dayNight: {
          isEnabled: () => !!OM.enableDayNight,
          kR: MM => SM("enableDayNight", MM)
        }
      };
      return (0, UM.jsxs)(UM.Fragment, {
        children: [!1 === OM.schematicContainsSpawnBlock && (0, UM.jsx)("div", {
          className: "ManageWarningBanner",
          children: nM("worldBuilder:mustContainSpawnBlock")
        }), (0, UM.jsxs)("div", {
          className: "ManageSettingsGrid",
          children: [(0, UM.jsxs)(GM, {
            icon: "globe",
            title: nM("worldBuilder:worldRulesSection"),
            disabled: !aM,
            children: [(0, UM.jsx)(eM, {
              label: nM("classic:defaultGamemode"),
              caption: nM("classic:defaultGamemodeDescription"),
              disabled: QM,
              children: (0, UM.jsx)(lM.e, {
                controlClassName: "ManageDropdown",
                options: JM.C.map((MM => ({
                  value: MM,
                  label: hM.p[MM]
                }))),
                value: OM.defaultGamemode,
                onChange: MM => SM("defaultGamemode", MM.value)
              })
            }), (0, UM.jsx)(eM, {
              label: nM("classic:voidDeathHeight"),
              caption: nM("classic:voidDeathHeightDescription"),
              disabled: QM,
              children: (0, UM.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, UM.jsx)("input", {
                  type: "number",
                  max: dM.E,
                  value: null !== (rM = OM.voidDeathHeight) && void 0 !== rM ? rM : "",
                  onChange: MM => {
                    const rM = parseInt(MM.target.value);
                    SM("voidDeathHeight", rM)
                  }
                }), (0, UM.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: nM("worldBuilder:blocksUnit")
                })]
              })
            }), (0, UM.jsx)(eM, {
              label: nM("classic:worldBorder"),
              caption: nM("classic:worldBorderDescription"),
              disabled: QM,
              children: (0, UM.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, UM.jsx)("input", {
                  type: "number",
                  min: dM.M,
                  max: dM.H,
                  placeholder: nM("worldBuilder:noWorldBorderLimit"),
                  value: null !== (iM = OM.worldBorder) && void 0 !== iM ? iM : "",
                  onChange: MM => {
                    const rM = parseInt(MM.target.value);
                    SM("worldBorder", isNaN(rM) ? null : rM)
                  }
                }), (0, UM.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: nM("worldBuilder:blocksUnit")
                })]
              })
            }), (0, UM.jsx)(eM, {
              label: nM("classic:disableMobs"),
              caption: nM("classic:disableMobsDescription"),
              disabled: QM,
              children: (0, UM.jsx)(yM.f, {
                checked: OM.disableMobs,
                setChecked: MM => SM("disableMobs", MM),
                disabled: QM
              })
            })]
          }), (0, UM.jsxs)(GM, {
            icon: "user-group",
            title: nM("worldBuilder:playerAndLobbySection"),
            disabled: !aM,
            children: [(0, UM.jsx)(eM, {
              label: nM("classic:disableKeepInventory"),
              caption: nM("classic:disableKeepInventoryDescription"),
              disabled: QM,
              children: (0, UM.jsx)(yM.f, {
                checked: OM.disableKeepInventory,
                setChecked: MM => SM("disableKeepInventory", MM),
                disabled: QM
              })
            }), (0, UM.jsx)(eM, {
              label: nM("classic:persistInventory"),
              caption: nM("classic:persistInventoryDescription"),
              disabled: QM,
              children: (0, UM.jsx)(lM.e, {
                controlClassName: "ManageDropdown",
                options: JM.n.map((MM => ({
                  value: MM,
                  label: hM.h[MM]
                }))),
                value: OM.persistInventory,
                onChange: MM => SM("persistInventory", MM.value)
              })
            }), (0, UM.jsx)(eM, {
              label: nM("classic:persistWorld"),
              caption: nM("classic:persistWorldDescription"),
              disabled: QM,
              children: (0, UM.jsx)(yM.f, {
                checked: OM.persistWorld,
                setChecked: MM => SM("persistWorld", MM),
                disabled: QM
              })
            }), (0, UM.jsx)(eM, {
              label: nM("classic:disableLobbySpawn"),
              caption: nM("classic:disableLobbySpawnDescription"),
              disabled: QM,
              children: (0, UM.jsx)(yM.f, {
                checked: OM.disableLobbySpawn,
                setChecked: MM => SM("disableLobbySpawn", MM),
                disabled: QM
              })
            }), (0, UM.jsx)(eM, {
              label: nM("classic:hideLobbyCode"),
              caption: nM("classic:hideLobbyCodeDescription"),
              disabled: QM,
              children: (0, UM.jsx)(yM.f, {
                checked: OM.hideLobbyCode,
                setChecked: MM => SM("hideLobbyCode", MM),
                disabled: QM
              })
            })]
          })]
        }), (0, UM.jsx)(GM, {
          icon: "layer-group",
          title: nM("worldBuilder:pluginsSection"),
          disabled: !aM,
          children: (0, UM.jsx)(EM.b, {
            callbacks: zM,
            disabled: QM,
            advancedMode: !0,
            hideWrapper: !0
          })
        })]
      })
    }
    var wM = iM(5362),
      tM = iM(4720),
      gM = iM(1573),
      uM = iM(3881),
      RM = iM(1142),
      pM = iM(5306),
      WM = iM(5364),
      sM = iM(1522);
    const DM = 50,
      kM = .3;
    async function ZM(MM) {
      const rM = await
      function(MM) {
        return new Promise(((rM, iM) => {
          const OM = new FileReader;
          OM.onload = () => rM(OM.result), OM.onerror = iM, OM.readAsDataURL(MM)
        }))
      }(MM), iM = await
      function(MM) {
        return new Promise(((rM, iM) => {
          const OM = new Image;
          OM.onload = () => rM(OM), OM.onerror = () => iM(new Error("Failed to load image")), OM.src = MM
        }))
      }(rM);
      if (iM.naturalHeight > iM.naturalWidth) throw new oM;
      const OM = 1024 * DM,
        {
          dataUrl: SM,
          finalQuality: jM
        } = function(MM, rM) {
          const iM = document.createElement("canvas");
          iM.width = MM.naturalWidth, iM.height = MM.naturalHeight, iM.getContext("2d").drawImage(MM, 0, 0);
          let OM = .92,
            SM = iM.toDataURL("image/jpeg", OM);
          for (; .75 * SM.length > rM && OM > .05;) OM -= .05, SM = iM.toDataURL("image/jpeg", OM);
          return {
            dataUrl: SM,
            finalQuality: OM
          }
        }(iM, OM);
      if (Math.ceil(.75 * SM.length) > OM) throw new fM;
      return {
        base64Jpg: SM,
        heavilyCompressed: jM < kM
      }
    }
    class oM extends Error {}
    class fM extends Error {}
    var YM = function(MM) {
      return MM[MM.NOT_LOGGED_IN = 0] = "NOT_LOGGED_IN", MM[MM.THUMBNAIL_LIMIT_REACHED = 1] = "THUMBNAIL_LIMIT_REACHED", MM
    }(YM || {});

    function NM(MM) {
      var rM;
      let {
        schematicId: iM,
        hasReadUploadPolicy: SM,
        onPolicyValidationError: nM,
        onThumbnailReady: QM
      } = MM;
      const {
        t: mM
      } = (0, PM.A)(), [hM, JM] = (0, OM.useState)(null), [dM, yM] = (0, OM.useState)(""), [lM, EM] = (0, OM.useState)(""), [GM, CM] = (0, OM.useState)(!0), [eM, bM] = (0, OM.useState)(!1), wM = (0, OM.useRef)(!1), [tM, gM] = (0, OM.useState)(null), [uM, RM] = (0, OM.useState)(!1), [pM, sM] = (0, OM.useState)(!1), DM = (0, OM.useRef)(0), {
        getRootProps: kM,
        getInputProps: YM,
        isDragActive: NM
      } = (0, WM.e)({
        accept: {
          "image/*": [".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp"]
        },
        multiple: !1,
        onDrop: async MM => {
          if (0 === MM.length) return;
          const rM = MM[0],
            iM = ++DM.current;
          gM(null), RM(!1), JM(null), yM(rM.name);
          try {
            const MM = await ZM(rM);
            if (iM !== DM.current) return;
            JM(MM), RM(MM.heavilyCompressed)
          } catch (OM) {
            if (iM !== DM.current) return;
            gM(mM(OM instanceof oM ? "thumbnail:portraitImagesNotAllowed" : OM instanceof fM ? "thumbnail:couldNotCompressImage" : "thumbnail:failedToUploadImage"))
          }
        },
        useFsAccessApi: !1
      }), AM = dM.length <= 30 ? dM : `${dM.slice(0,27)}...`, xM = null !== (rM = null === hM || void 0 === hM ? void 0 : hM.base64Jpg) && void 0 !== rM ? rM : null, vM = lM.trim(), FM = vM.length >= LM.q && vM.length <= LM.p, BM = pM && !hM && !tM, XM = pM && !FM;
      return (0, UM.jsxs)("div", {
        className: "ThumbnailUploadContainer",
        children: [(0, UM.jsxs)("div", {
          ...kM({
            className: HM()("ThumbnailUploadDropzone", {
              ActiveDrag: NM,
              ValidationError: BM
            })
          }),
          children: [(0, UM.jsx)("input", {
            ...YM()
          }), !NM && xM ? (0, UM.jsxs)(UM.Fragment, {
            children: [(0, UM.jsxs)("div", {
              className: "ThumbnailAspectPreviews",
              children: [(0, UM.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, UM.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "1:1"
                }), (0, UM.jsx)("div", {
                  className: "ThumbnailAspectFrame Square",
                  children: (0, UM.jsx)("img", {
                    src: xM,
                    alt: "1:1 preview"
                  })
                })]
              }), (0, UM.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, UM.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "16:9"
                }), (0, UM.jsx)("div", {
                  className: "ThumbnailAspectFrame Wide",
                  children: (0, UM.jsx)("img", {
                    src: xM,
                    alt: "16:9 preview"
                  })
                })]
              })]
            }), (0, UM.jsxs)("div", {
              children: [(0, UM.jsx)("div", {
                className: "ThumbnailUploadInstructions Active",
                children: AM
              }), (0, UM.jsx)("div", {
                className: "ThumbnailUploadInstructions Preview",
                children: mM("thumbnail:preview")
              })]
            })]
          }) : (0, UM.jsxs)(UM.Fragment, {
            children: [(0, UM.jsx)("div", {
              className: "ThumbnailUploadIcon",
              children: (0, UM.jsx)(zM.b, {
                name: "image"
              })
            }), (0, UM.jsx)("div", {
              className: "ThumbnailUploadInstructions",
              children: mM("thumbnail:dragImageHere")
            })]
          })]
        }), BM && (0, UM.jsx)("div", {
          className: "ThumbnailUploadError",
          children: mM("thumbnail:imageRequired")
        }), (0, UM.jsx)(aM.b, {
          className: HM()("ThumbnailUploadNameInput", {
            ValidationError: XM
          }),
          placeholderText: mM("thumbnail:thumbnailName"),
          defaultValue: lM,
          onValueChange: MM => {
            EM(MM)
          },
          maxLength: LM.p
        }), XM && (0, UM.jsx)("div", {
          className: "ThumbnailUploadError",
          children: mM("thumbnail:nameRequired", {
            min: LM.q,
            max: LM.p
          })
        }), (0, UM.jsxs)("label", {
          className: "ThumbnailUploadCheckbox",
          children: [(0, UM.jsx)("input", {
            type: "checkbox",
            checked: GM,
            onChange: MM => {
              CM(MM.target.checked)
            }
          }), mM("thumbnail:setAsThumbnailOnceApproved")]
        }), uM && (0, UM.jsx)("div", {
          className: "ThumbnailUploadWarning",
          children: mM("thumbnail:heavyCompressionWarning")
        }), tM && (0, UM.jsx)("div", {
          className: "ThumbnailUploadError",
          children: tM
        }), (0, UM.jsx)(jM.p, {
          disabled: eM,
          className: "ThumbnailUploadButton",
          onClick: async () => {
            if (sM(!0), !wM.current && hM && FM && SM) {
              wM.current = !0, bM(!0), gM(null);
              try {
                await QM(hM.base64Jpg, vM, GM ? iM : null)
              } catch (MM) {
                gM(MM.errorMessageForUser ? mM(MM.errorMessageForUser, MM.errorMessageTranslationParams) : mM("thumbnail:failedToUploadImage"))
              } finally {
                wM.current = !1, bM(!1)
              }
            } else SM || nM()
          },
          children: mM(eM ? "thumbnail:processing" : "thumbnail:uploadThumbnail")
        })]
      })
    }
    const AM = 2e3;

    function xM(MM) {
      let {
        schematicId: rM,
        ownedThumbnailCount: iM,
        onClose: SM,
        onThumbnailReady: jM
      } = MM;
      const {
        t: aM
      } = (0, PM.A)(), {
        userContext: nM
      } = (0, RM.b)(), [QM, mM] = (0, OM.useState)(!1), [hM, JM] = (0, OM.useState)(!1), [dM, yM] = (0, OM.useState)(!1), lM = (0, OM.useRef)();
      (0, OM.useEffect)((() => () => {
        clearTimeout(lM.current)
      }), []);
      const EM = function(MM, rM) {
        const iM = [];
        return MM.isLoggedIn() || iM.push(YM.NOT_LOGGED_IN), rM >= LM.X && iM.push(YM.THUMBNAIL_LIMIT_REACHED), iM
      }(nM, iM);
      if (EM.length > 0) {
        const MM = {
          [YM.NOT_LOGGED_IN]: {
            key: "thumbnail:mustBeLoggedInToUpload"
          },
          [YM.THUMBNAIL_LIMIT_REACHED]: {
            key: "thumbnail:thumbnailLimitReachedPleaseDelete",
            params: {
              max: LM.X
            }
          }
        };
        return (0, UM.jsxs)("div", {
          className: "ThumbnailUploaderInner",
          children: [(0, UM.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: aM("thumbnail:cannotUploadThumbnail")
          }), EM.map(((rM, iM) => {
            const OM = MM[rM];
            return (0, UM.jsxs)("div", {
              className: "CannotUploadThumbnailItem",
              children: [(0, UM.jsx)(zM.b, {
                name: "triangle-exclamation"
              }), (0, UM.jsx)("span", {
                children: aM(OM.key, OM.params)
              })]
            }, iM)
          }))]
        })
      }
      return (0, UM.jsxs)("div", {
        className: HM()("ThumbnailUploaderInner", {
          ThumbnailUploaderSuccess: QM
        }),
        children: [QM && (0, UM.jsxs)("div", {
          className: "ThumbnailUploadSuccessOverlay",
          children: [(0, UM.jsxs)("div", {
            className: "ThumbnailUploadSuccessIcon FullyFancyText AnimFadeInScaleUp",
            children: [(0, UM.jsx)(zM.b, {
              name: "check"
            }), (0, UM.jsx)(sM.d, {})]
          }), (0, UM.jsx)("div", {
            className: "ThumbnailUploadSuccessText AnimFadeInScaleUp",
            children: aM("thumbnail:thumbnailUploaded")
          })]
        }), (0, UM.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: aM("thumbnail:uploadThumbnail")
        }), (0, UM.jsxs)("div", {
          className: "ThumbnailUploaderBody",
          children: [(0, UM.jsxs)("div", {
            className: "ThumbnailUploaderLeft",
            children: [(0, UM.jsx)("h3", {
              className: "SchematicPopupSubtitle",
              children: aM("thumbnail:chooseImage", {
                maxSizeKb: DM
              })
            }), (0, UM.jsx)(NM, {
              schematicId: rM,
              hasReadUploadPolicy: hM,
              onPolicyValidationError: () => {
                yM(!0)
              },
              onThumbnailReady: async (MM, rM, iM) => {
                await jM(MM, rM, iM), mM(!0), lM.current = setTimeout(SM, AM)
              }
            })]
          }), (0, UM.jsxs)("div", {
            className: "ThumbnailUploadPolicy",
            children: [(0, UM.jsx)("h3", {
              className: "ThumbnailUploadPolicyTitle",
              children: aM("thumbnail:uploadPolicy")
            }), (0, UM.jsxs)("ul", {
              className: "ThumbnailUploadPolicyList",
              children: [(0, UM.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, UM.jsx)(zM.b, {
                  name: "check"
                }), (0, UM.jsx)("span", {
                  children: aM("thumbnail:policyFollowGuidelines")
                })]
              }), (0, UM.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, UM.jsx)(zM.b, {
                  name: "check"
                }), (0, UM.jsx)("span", {
                  children: aM("thumbnail:policyInGameAssets")
                })]
              }), (0, UM.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, UM.jsx)(zM.b, {
                  name: "check"
                }), (0, UM.jsx)("span", {
                  children: aM("thumbnail:policyLimitText")
                })]
              }), (0, UM.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, UM.jsx)(zM.b, {
                  name: "x"
                }), (0, UM.jsx)("span", {
                  children: aM("thumbnail:policyCopyrightContent")
                })]
              }), (0, UM.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, UM.jsx)(zM.b, {
                  name: "x"
                }), (0, UM.jsx)("span", {
                  children: aM("thumbnail:policyOutOfGameAssets")
                })]
              }), (0, UM.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, UM.jsx)(zM.b, {
                  name: "x"
                }), (0, UM.jsx)("span", {
                  children: aM("thumbnail:policyBloxdTags")
                })]
              }), (0, UM.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, UM.jsx)(zM.b, {
                  name: "x"
                }), (0, UM.jsx)("span", {
                  children: aM("thumbnail:policyMustReflectGame")
                })]
              })]
            }), (0, UM.jsxs)("label", {
              className: HM()("ThumbnailUploadCheckbox Policy", {
                ValidationError: dM && !hM
              }),
              children: [(0, UM.jsx)("input", {
                type: "checkbox",
                checked: hM,
                onChange: MM => {
                  JM(MM.target.checked)
                }
              }), aM("thumbnail:agreeToUploadPolicy")]
            }), dM && !hM && (0, UM.jsx)("div", {
              className: "ThumbnailPolicyError",
              children: aM("thumbnail:policyRequired")
            })]
          })]
        })]
      })
    }
    var vM = iM(1202);
    const FM = {
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

    function BM(MM) {
      var rM, iM;
      let {
        schematicData: aM,
        updateSchematicData: QM,
        publishFormEnabled: LM,
        onClose: mM
      } = MM;
      const {
        t: hM
      } = (0, PM.A)(), {
        userContext: JM,
        isUserContextUpdating: dM
      } = (0, RM.b)(), yM = (0, uM.b)(), [lM, EM] = (0, OM.useState)([]), [GM, CM] = (0, OM.useState)([]), [eM, bM] = (0, OM.useState)(!0), [wM, tM] = (0, OM.useState)(null !== (rM = aM.customThumbnailId) && void 0 !== rM ? rM : null), [WM, sM] = (0, OM.useState)(null), DM = (0, OM.useRef)(null !== (iM = aM.customThumbnailId) && void 0 !== iM ? iM : null), kM = (0, OM.useRef)(0), ZM = (0, OM.useRef)(null), oM = (0, OM.useRef)(null), fM = (0, OM.useRef)(null), YM = (0, OM.useRef)(!1);

      function NM(MM, rM) {
        fM.current && (clearTimeout(fM.current), fM.current = null), sM(MM), null !== MM && rM && (fM.current = setTimeout((() => {
          sM(null), fM.current = null
        }), 5e3))
      }(0, OM.useEffect)((() => () => {
        clearTimeout(oM.current), clearTimeout(fM.current)
      }), []);
      const AM = (0, OM.useCallback)((() => {
        bM(!0), gM.c.getOwnedThumbnails(JM).then((MM => {
          const rM = [],
            iM = [];
          for (const OM of MM.thumbnails) OM.rejectionPolicyId ? rM.push(OM) : iM.push(OM);
          rM.sort(((MM, rM) => MM.lastUpdatedAt - rM.lastUpdatedAt)), iM.sort(((MM, rM) => {
            const iM = MM.approved ? 1 : 0,
              OM = (rM.approved ? 1 : 0) - iM;
            return 0 !== OM ? OM : rM.lastUpdatedAt - MM.lastUpdatedAt
          })), CM(rM), EM(iM)
        })).catch((MM => {
          console.error("Failed to fetch thumbnails:", MM)
        })).finally((() => {
          bM(!1)
        }))
      }), [JM]);
      async function FM(MM, rM, iM) {
        return gM.c.uploadSchematicThumbnail(JM, MM, rM, iM).then((() => {
          NM({
            text: hM("thumbnail:uploadedAwaitingModeration"),
            type: "success"
          }, !0), AM()
        }))
      }

      function BM() {
        kM.current = Date.now(), oM.current = null;
        const MM = ZM.current;
        ZM.current = null, NM({
          text: hM("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), gM.c.setSchematicThumbnail(JM, aM.schematicId, MM).then((() => {
          yM.current && (NM({
            text: hM("thumbnail:thumbnailUpdated"),
            type: "success"
          }, !0), DM.current = MM, QM("customThumbnailId", MM), QM("customThumbnailBlurhash", void 0), QM("customThumbnailVariants", void 0))
        })).catch((MM => {
          yM.current && (NM({
            text: MM.errorMessageForUser ? hM(MM.errorMessageForUser, MM.errorMessageTranslationParams) : hM("thumbnail:failedToSetThumbnail"),
            type: "error"
          }, !0), tM(DM.current))
        }))
      }

      function KM(MM) {
        tM(MM), ZM.current = MM;
        const rM = Date.now() - kM.current;
        rM >= 1e3 ? BM() : (NM({
          text: hM("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), oM.current || (oM.current = setTimeout((() => {
          BM()
        }), 1e3 - rM)))
      }
      return (0, OM.useEffect)((() => {
        !1 === dM && AM()
      }), [dM, AM]), GM.length > 0 ? (0, UM.jsx)(XM, {
        rejectedThumbnails: GM,
        userContext: JM,
        isMountedRef: yM,
        onAcknowledged: AM
      }) : (0, UM.jsxs)("div", {
        className: "BloxdForm ThumbnailSection",
        children: [(0, UM.jsxs)("div", {
          className: "SectionTitle",
          children: [hM("thumbnail:gameThumbnail"), WM && (0, UM.jsx)("span", {
            className: HM()("ThumbnailActionMsg", `ThumbnailActionMsg--${WM.type}`),
            children: WM.text
          })]
        }), (0, UM.jsx)("div", {
          className: "SectionBody",
          children: (0, UM.jsxs)("div", {
            className: "ThumbnailGrid",
            children: [(0, UM.jsxs)("div", {
              className: HM()("ThumbnailGridItem ThumbnailGridItemDefault", {
                ThumbnailGridItemSelected: null === wM
              }),
              onClick: () => KM(null),
              children: [(0, UM.jsx)(pM.b, {
                game: {
                  schematicId: aM.schematicId,
                  imageBlurhash: aM.imageBlurhash
                }
              }), (0, UM.jsx)("div", {
                className: "ThumbnailGridItemLabel ThumbnailDefaultLabel",
                children: hM("general:default")
              })]
            }), eM && (0, UM.jsx)(nM.d, {}), lM.map(((MM, rM) => (0, UM.jsxs)("div", {
              className: HM()("ThumbnailGridItem", {
                ThumbnailGridItemSelected: wM === MM.id,
                ThumbnailGridItemPending: !MM.approved
              }),
              onClick: () => {
                MM.approved && KM(MM.id)
              },
              children: [MM.approved && (0, UM.jsx)("img", {
                src: `${vM.clientSideServerUrls.s3Url}/customThumbnails/${MM.id}.jpg`,
                alt: "Thumbnail"
              }), MM.approved && (0, UM.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: MM.name
              }), MM.id && (0, UM.jsx)(jM.J, {
                className: "ThumbnailDeleteButton",
                onClick: rM => async function(MM, rM, iM) {
                  MM.stopPropagation();
                  const OM = await SM.NotificationProvider.showCustomPopup({
                      body: MM => (0, UM.jsx)(IM, {
                        thumbnailId: rM,
                        thumbnailName: iM,
                        onClose: rM => {
                          rM && (YM.current = !0), MM()
                        }
                      }),
                      middleScreenPopupClassName: "ThumbnailDeleteConfirmPopup",
                      onClose: mM
                    }).getResult(),
                    jM = YM.current;
                  YM.current = !1, jM && !0 === OM && (yM.current && NM({
                    text: hM("thumbnail:deletingThumbnail"),
                    type: "info"
                  }, !1), gM.c.deleteSchematicThumbnail(JM, rM).then((() => {
                    yM.current && (NM({
                      text: hM("thumbnail:thumbnailDeleted"),
                      type: "success"
                    }, !0), DM.current === rM && KM(null), AM())
                  })).catch((MM => {
                    yM.current && NM({
                      text: MM.errorMessageForUser ? hM(MM.errorMessageForUser, MM.errorMessageTranslationParams) : hM("thumbnail:failedToDeleteThumbnail"),
                      type: "error"
                    }, !0)
                  })))
                }(rM, MM.id, MM.name),
                children: (0, UM.jsx)(zM.b, {
                  name: "trash-can"
                })
              }), !MM.approved && (0, UM.jsx)("div", {
                className: "ThumbnailUnapprovedIcon",
                children: (0, UM.jsx)(zM.b, {
                  name: "hourglass-clock"
                })
              }), !MM.approved && (0, UM.jsxs)("div", {
                className: "ThumbnailGridItemLabel ThumbnailPendingLabel",
                children: [MM.name, (0, UM.jsx)("br", {}), hM("thumbnail:pendingApproval")]
              })]
            }, rM))), (0, UM.jsxs)("div", {
              className: HM()("ThumbnailGridItem ThumbnailUploadTile", {
                ThumbnailUploadTileDisabled: !LM
              }),
              onClick: () => {
                LM && function(MM) {
                  let {
                    schematicId: rM,
                    ownedThumbnailCount: iM,
                    onThumbnailReady: OM,
                    onClose: jM
                  } = MM;
                  SM.NotificationProvider.showCustomPopup({
                    body: MM => (0, UM.jsx)(xM, {
                      schematicId: rM,
                      ownedThumbnailCount: iM,
                      onClose: MM,
                      onThumbnailReady: OM
                    }),
                    middleScreenPopupClassName: "SchematicThumbnailPopup",
                    onClose: jM,
                    unlockPointerKey: "schematicThumbnailUploaderPopup"
                  })
                }({
                  schematicId: aM.schematicId,
                  ownedThumbnailCount: lM.length,
                  onThumbnailReady: FM,
                  onClose: mM
                })
              },
              children: [(0, UM.jsx)(zM.b, {
                name: "plus"
              }), (0, UM.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: hM("thumbnail:uploadThumbnail")
              })]
            })]
          })
        })]
      })
    }

    function XM(MM) {
      let {
        rejectedThumbnails: rM,
        userContext: iM,
        isMountedRef: SM,
        onAcknowledged: aM
      } = MM;
      const {
        t: QM
      } = (0, PM.A)(), [LM, mM] = (0, OM.useState)(!1), [HM, hM] = (0, OM.useState)(!1), JM = function(MM) {
        const rM = new Map;
        for (const iM of MM) {
          const MM = iM.rejectionPolicyId,
            OM = rM.get(MM);
          OM ? OM.push(iM) : rM.set(MM, [iM])
        }
        return rM
      }(rM);
      return (0, UM.jsxs)("div", {
        className: "ThumbnailRejectionNotice",
        children: [(0, UM.jsxs)("div", {
          className: "ThumbnailRejectionNoticeTitle",
          children: [(0, UM.jsx)(zM.b, {
            name: "triangle-exclamation"
          }), " ", QM("thumbnail:thumbnailsRejected"), " ", (0, UM.jsx)(zM.b, {
            name: "triangle-exclamation"
          })]
        }), (0, UM.jsx)("div", {
          className: "ThumbnailRejectionNoticeSubtitle",
          children: QM("thumbnail:thumbnailsRejectedDescription")
        }), (0, UM.jsx)("div", {
          className: "ThumbnailRejectionNoticeList",
          children: [...JM.entries()].map((MM => {
            let [rM, iM] = MM;
            const OM = FM[rM];
            return (0, UM.jsxs)("div", {
              className: "ThumbnailRejectionNoticeGroup",
              children: [(0, UM.jsx)("div", {
                className: "ThumbnailRejectionNoticeItems",
                children: iM.map((MM => (0, UM.jsxs)("div", {
                  className: "ThumbnailRejectionNoticeItem",
                  children: [(0, UM.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemIcon",
                    children: (0, UM.jsx)(zM.b, {
                      name: "image-slash"
                    })
                  }), (0, UM.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemDetails",
                    children: (0, UM.jsx)("div", {
                      className: "ThumbnailRejectionNoticeItemName",
                      children: MM.name
                    })
                  })]
                }, MM.id)))
              }), (0, UM.jsxs)("div", {
                className: "ThumbnailRejectionNoticeGroupReason",
                children: [QM("thumbnail:rejectionReason"), " ", OM ? QM(OM.reason) : rM]
              }), OM && (0, UM.jsx)("ul", {
                className: "ThumbnailRejectionNoticeGroupTips",
                children: OM.tips.map((MM => (0, UM.jsx)("li", {
                  children: QM(MM)
                }, MM)))
              })]
            }, rM)
          }))
        }), (0, UM.jsxs)("label", {
          className: "ThumbnailRejectionNoticeCheckbox",
          children: [(0, UM.jsx)(tM.c, {
            checked: LM,
            onChange: MM => mM(MM.target.checked),
            disabled: HM
          }), (0, UM.jsx)("span", {
            children: QM("thumbnail:haveReadRejectionReasons")
          })]
        }), (0, UM.jsx)(jM.p, {
          onClick: async function() {
            hM(!0);
            const MM = await Promise.allSettled(rM.map((MM => gM.c.deleteSchematicThumbnail(iM, MM.id))));
            if (!SM.current) return;
            const OM = MM.filter((MM => "rejected" === MM.status));
            OM.length > 0 && console.error("Some rejected thumbnails failed to delete:", OM), aM()
          },
          disabled: !LM || HM,
          className: "ThumbnailRejectionNoticeAcceptButton",
          children: HM ? (0, UM.jsx)(nM.d, {}) : QM("general:accept")
        })]
      })
    }

    function IM(MM) {
      let {
        thumbnailId: rM,
        thumbnailName: iM,
        onClose: OM
      } = MM;
      const {
        t: SM
      } = (0, PM.A)();
      return (0, UM.jsxs)("div", {
        className: "ThumbnailDeleteConfirm",
        children: [(0, UM.jsx)("div", {
          className: "ThumbnailDeleteConfirmTitle",
          children: SM("thumbnail:deleteThumbnail")
        }), (0, UM.jsxs)("div", {
          className: "ThumbnailDeleteConfirmImageContainer",
          children: [(0, UM.jsx)("img", {
            className: "ThumbnailDeleteConfirmImage",
            src: `${vM.clientSideServerUrls.s3Url}/customThumbnails/${rM}.jpg`,
            alt: "Thumbnail to delete"
          }), (0, UM.jsx)("div", {
            className: "ThumbnailGridItemLabel",
            children: iM
          })]
        }), (0, UM.jsx)("div", {
          className: "ThumbnailDeleteConfirmSubtitle",
          children: SM("thumbnail:deleteThumbnailConfirmation")
        }), (0, UM.jsxs)("div", {
          className: "ThumbnailDeleteConfirmButtons",
          children: [(0, UM.jsxs)(jM.J, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => OM(!0),
            children: [(0, UM.jsx)(zM.b, {
              name: "trash-can"
            }), " ", SM("general:delete")]
          }), (0, UM.jsx)(jM.i, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => OM(!1),
            children: SM("general:cancel")
          })]
        })]
      })
    }
    var KM = iM(2263),
      qM = iM(5388),
      TM = iM(5393),
      VM = iM(5424);

    function cM(MM) {
      let {
        schematicData: rM,
        setTexturePack: iM,
        initializeTexturePack: SM,
        publishFormEnabled: jM
      } = MM;
      const {
        t: aM
      } = (0, PM.A)(), [nM, QM] = (0, OM.useState)(null), [zM, LM] = (0, OM.useState)(null), [mM, hM] = (0, OM.useState)(!1), JM = (0, uM.b)(), dM = jM && !mM, yM = rM.customTexturePackKey;

      function lM(MM) {
        var rM;
        QM(MM.metaData.id), LM(null !== (rM = MM.metaData.fromFolderName) && void 0 !== rM ? rM : null), (MM.metaData.id !== KM.o.CUSTOM || MM.metaData.fromFolderName) && iM(MM)
      }
      return (0, OM.useEffect)((() => {
        yM && (hM(!0), (0, qM.d)(yM).then((MM => {
          var rM;
          JM.current && (MM ? (QM(MM.metaData.id), LM(null !== (rM = MM.metaData.fromFolderName) && void 0 !== rM ? rM : null), SM(MM)) : console.error(`No texture pack at ${yM}`))
        })).catch((MM => {
          console.error("Error fetching texture pack: ", MM)
        })).finally((() => {
          hM(!1)
        })))
      }), [yM, SM, JM]), (0, UM.jsxs)("div", {
        className: "BloxdForm TexturePackSection",
        children: [(0, UM.jsx)("div", {
          className: "SectionTitle",
          children: aM("customTexturePack:customTexturePack")
        }), (0, UM.jsxs)("div", {
          className: "TexturePackList",
          children: [(0, UM.jsx)("div", {
            className: HM()("TexturePack", {
              Selected: null === nM && !mM,
              Disabled: !dM
            }),
            onClick: () => {
              dM && (QM(null), iM(null), LM(null))
            },
            children: (0, UM.jsx)("div", {
              className: "TexturePackName",
              children: "No Override"
            })
          }), Object.values(KM.o).map((MM => (0, UM.jsx)(TM.e, {
            id: MM,
            isSelected: MM === nM,
            setSelected: lM,
            disabled: !dM
          }, MM)))]
        }), nM === KM.o.CUSTOM && (0, UM.jsx)(VM.e, {
          folderName: zM,
          onTexturePackUpdated: lM,
          disabled: !dM,
          maxFileSizeMb: 25,
          packOwner: "customGame"
        })]
      })
    }
    var Mr = iM(5468);

    function rr(MM) {
      var rM;
      let {
        gameCategory: iM,
        setGameCategory: OM,
        disabled: SM
      } = MM;
      const aM = null !== (rM = (0, hM._)(iM)) && void 0 !== rM ? rM : "other";
      return (0, UM.jsxs)("div", {
        className: "GameCategoryPicker",
        children: [(0, UM.jsx)(yM.d, {
          label: "worldBuilder:gameCategoryGroup",
          className: "GameCategoryGroup",
          disabled: SM,
          children: (0, UM.jsx)(lM.e, {
            options: hM.P.map((MM => ({
              value: MM,
              label: hM.O[MM]
            }))),
            value: aM,
            onChange: MM => {
              MM.value !== aM && OM(hM.M[MM.value][0])
            }
          })
        }), (0, UM.jsx)(yM.d, {
          label: "worldBuilder:gameCategory",
          className: "GameCategory",
          disabled: SM,
          children: (0, UM.jsx)("div", {
            className: "GameCategoryOptions",
            children: hM.M[aM].map((MM => (0, UM.jsx)(jM.V, {
              active: MM === iM,
              onClick: () => {
                OM(MM)
              },
              children: (0, hM.W)(MM)
            }, MM)))
          })
        })]
      })
    }

    function ir(MM) {
      let {
        editor: rM,
        onClose: iM
      } = MM;
      const {
        t: OM
      } = (0, PM.A)(), {
        schematicData: SM,
        updateSchematicData: jM,
        publishFormEnabled: nM,
        formEnabled: QM
      } = rM;
      return (0, UM.jsxs)(UM.Fragment, {
        children: [(0, UM.jsxs)(GM, {
          icon: "pen-to-square",
          title: OM("worldBuilder:basicsSection"),
          disabled: !QM,
          children: [(0, UM.jsx)(CM, {
            label: OM("general:name"),
            caption: OM("worldBuilder:schematicNameTagsHint"),
            children: (0, UM.jsx)(aM.b, {
              className: "SchematicPageName",
              defaultValue: SM.name,
              onValueChange: MM => jM("name", MM),
              placeholderText: OM("worldBuilder:schematicNamePlaceholder"),
              maxLength: LM.sb
            })
          }), (0, UM.jsx)(CM, {
            label: OM("general:description"),
            children: (0, UM.jsx)(aM.b, {
              className: "SchematicPageDescription",
              useTextarea: !0,
              defaultValue: SM.description,
              onValueChange: MM => jM("description", MM),
              placeholderText: OM("worldBuilder:schematicDescriptionPlaceholder"),
              maxLength: LM.pb
            })
          }), (0, UM.jsx)(rr, {
            gameCategory: SM.gameCategory,
            setGameCategory: MM => jM("gameCategory", MM),
            disabled: !nM
          }), !0 === SM.gamePublished && (0, UM.jsx)(BM, {
            schematicData: SM,
            updateSchematicData: jM,
            publishFormEnabled: nM,
            onClose: function() {
              null === iM || void 0 === iM || iM()
            }
          })]
        }), (0, UM.jsx)(bM, {
          schematicData: SM,
          updateSchematicData: jM,
          publishFormEnabled: nM,
          formEnabled: QM
        }), !0 === SM.gamePublished && (0, UM.jsx)(GM, {
          icon: "palette",
          title: OM("worldBuilder:texturePackSection"),
          disabled: !QM,
          children: (0, UM.jsx)(cM, {
            schematicData: SM,
            setTexturePack: rM.setTexturePack,
            initializeTexturePack: rM.initializeTexturePack,
            publishFormEnabled: nM
          })
        })]
      })
    }

    function Or(MM) {
      let {
        editor: rM
      } = MM;
      const {
        t: iM
      } = (0, PM.A)(), {
        schematicData: OM,
        formEnabled: SM,
        hasUnsavedChanges: aM
      } = rM, LM = SM && aM;
      return (0, UM.jsxs)("footer", {
        className: "SchematicPageFooter",
        children: [SM && aM && (0, UM.jsxs)("div", {
          className: "SchematicPageFooterStatus",
          children: [(0, UM.jsx)("span", {
            className: "SchematicPageFooterStatusDot"
          }), iM("worldBuilder:unsavedChanges")]
        }), (0, UM.jsx)(QM.i, {
          tooltipInner: (0, UM.jsx)("div", {
            className: "SaveButtonTooltip",
            children: iM(SM && !aM ? "worldBuilder:saveChangesNoneDescription" : "worldBuilder:saveChangesDescription")
          }),
          children: (0, UM.jsxs)(jM.e, {
            className: "SaveChangesButton",
            onClick: () => rM.saveSchematic(OM.gamePublished),
            disabled: !LM,
            children: [(0, UM.jsxs)("span", {
              className: SM ? "" : "SaveChangesButtonBodyHidden",
              children: [(0, UM.jsx)(zM.b, {
                name: "wrench"
              }), " ", iM("worldBuilder:saveChanges")]
            }), !SM && (0, UM.jsx)(nM.d, {})]
          })
        })]
      })
    }

    function Sr(MM) {
      let {
        schematic: rM,
        onSchematicUpdate: iM,
        onClose: SM,
        inSourceWorld: aM
      } = MM;
      const {
        t: nM
      } = (0, PM.A)();

      function QM() {
        null === SM || void 0 === SM || SM()
      }
      const zM = (0, Mr.d)(rM, {
        onNavigateAway: QM,
        inSourceWorld: aM
      });
      return (0, OM.useEffect)((() => {
        null === iM || void 0 === iM || iM(zM.schematicData)
      }), [zM.schematicData, iM]), (0, UM.jsxs)("div", {
        className: "SchematicPage SchematicPagePopupVariant",
        children: [(0, UM.jsxs)("div", {
          className: "SchematicPageBody",
          children: [(0, UM.jsx)(jM.c, {
            onClick: QM,
            children: nM("worldBuilder:back")
          }), (0, UM.jsx)(GM, {
            icon: "rocket-launch",
            title: nM("worldBuilder:actionsSection"),
            disabled: !zM.formEnabled,
            children: (0, UM.jsx)(wM.b, {
              editor: zM
            })
          }), (0, UM.jsx)(ir, {
            editor: zM,
            onClose: QM
          })]
        }), (0, UM.jsx)(Or, {
          editor: zM
        })]
      })
    }

    function jr(MM) {
      let {
        schematic: rM,
        onSchematicUpdate: iM,
        onClose: OM,
        inSourceWorld: jM
      } = MM;
      SM.NotificationProvider.showCustomPopup({
        body: MM => (0, UM.jsx)(Sr, {
          schematic: rM,
          onSchematicUpdate: iM,
          onClose: MM,
          inSourceWorld: jM
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: OM,
        unlockPointerKey: "schematicPagePopup"
      })
    }
  },
  5362: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => LM
    });
    var OM = iM(1116),
      SM = iM.n(OM),
      jM = iM(1188),
      aM = iM(1398),
      PM = iM(1520),
      nM = iM(1440),
      QM = iM(1396),
      zM = iM(1303);

    function LM(MM) {
      let {
        editor: rM,
        className: iM
      } = MM;
      const {
        t: OM
      } = (0, jM.A)(), {
        schematicData: LM,
        formEnabled: mM,
        publishFormEnabled: HM
      } = rM, hM = !mM || !HM;
      return (0, zM.jsxs)("div", {
        className: SM()("PublishButtonContainer", iM),
        children: [rM.canEditSourceWorld && (0, zM.jsxs)(PM.e, {
          onClick: rM.editSourceWorld,
          disabled: hM,
          children: [(0, zM.jsx)(aM.b, {
            name: "edit"
          }), " ", OM("worldBuilder:editSourceWorld")]
        }), !LM.gamePublished && (0, zM.jsx)(nM.i, {
          tooltipInner: (0, zM.jsx)("div", {
            className: "PublishButtonTooltip",
            children: OM("worldBuilder:publishAsGameDescription")
          }),
          children: (0, zM.jsxs)(PM.p, {
            onClick: () => rM.saveSchematic(!0),
            disabled: hM,
            children: [(0, zM.jsx)(aM.b, {
              name: "rocket-launch"
            }), " ", OM("worldBuilder:publishAsGame"), " ", (0, zM.jsx)(aM.b, {
              name: "info-circle"
            })]
          })
        }), !0 === LM.gamePublished && (0, zM.jsxs)(zM.Fragment, {
          children: [(0, zM.jsx)(nM.i, {
            tooltipInner: (0, zM.jsx)("div", {
              className: "PublishButtonTooltip",
              children: OM("worldBuilder:unpublishAsGameDescription")
            }),
            children: (0, zM.jsxs)(PM.J, {
              onClick: rM.unpublishSchematic,
              disabled: hM,
              children: [(0, zM.jsx)(aM.b, {
                name: "rocket-launch"
              }), " ", OM("worldBuilder:unpublishAsGame"), " ", (0, zM.jsx)(aM.b, {
                name: "info-circle"
              })]
            })
          }), (0, zM.jsxs)(PM.e, {
            onClick: rM.playGame,
            disabled: hM,
            children: [(0, zM.jsx)(aM.b, {
              name: "joystick"
            }), " ", OM("general:playGame")]
          })]
        }), !mM && (0, zM.jsx)(QM.d, {
          loaderType: "Secondary"
        })]
      })
    }
  },
  5388: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => SM
    });
    var OM = iM(1202);
    async function SM(MM) {
      const rM = await fetch(`${OM.clientSideServerUrls.s3Url}/${MM}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === rM.status || 403 === rM.status) return null;
      if (!rM.ok) throw new Error(`Failed to download the texture pack (${rM.status})`);
      return await rM.json()
    }
  },
  5468: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => dM
    });
    var OM = iM(44),
      SM = iM(1382),
      jM = iM(1073),
      aM = iM(143),
      PM = iM(1630),
      nM = iM(19),
      QM = iM(2039),
      zM = iM(1573),
      LM = iM(4961),
      mM = iM(1429),
      HM = iM(1142),
      hM = iM(1591);

    function JM(MM, rM) {
      return {
        schematicId: MM.schematicId,
        name: MM.name,
        description: MM.description,
        gamePublished: rM,
        gameCategory: MM.gameCategory,
        defaultGamemode: MM.defaultGamemode,
        voidDeathHeight: MM.voidDeathHeight,
        disableKeepInventory: MM.disableKeepInventory,
        disableTpRequests: MM.disableTpRequests,
        disableLobbySpawn: MM.disableLobbySpawn,
        disableMobs: MM.disableMobs,
        disableSpawnProtection: MM.disableSpawnProtection,
        disableFallDamage: MM.disableFallDamage,
        worldBorder: MM.worldBorder,
        hideLobbyCode: MM.hideLobbyCode,
        enableSmpMarketplace: MM.enableSmpMarketplace,
        enableSurvivalGuns: MM.enableSurvivalGuns,
        enableSpawnReset: MM.enableSpawnReset,
        enableDayNight: MM.enableDayNight,
        persistWorld: MM.persistWorld,
        persistInventory: MM.persistInventory
      }
    }

    function dM(MM) {
      let {
        onNavigateAway: rM,
        inSourceWorld: iM = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const {
        userContext: dM
      } = (0, HM.b)(), yM = (0, hM.useNavigatePreserveSearch)(), [lM, EM] = (0, OM.useState)({
        ...MM
      }), [UM, GM] = (0, OM.useState)("Enter"), [CM, eM] = (0, OM.useState)(void 0), bM = (0, OM.useRef)(JM(MM, MM.gamePublished)), wM = (0, OM.useRef)(void 0), tM = "Enter" === UM, gM = dM.playerHasRank("developer") || dM.playerHasRank("admin") || "Enter" === UM && !1 !== lM.schematicContainsSpawnBlock, uM = void 0 !== CM && CM !== wM.current || JSON.stringify(JM(lM, lM.gamePublished)) !== JSON.stringify(bM.current);

      function RM(MM, rM) {
        EM((iM => ({
          ...iM,
          [MM]: rM
        })))
      }
      const pM = (0, OM.useCallback)((MM => {
        wM.current = MM, eM(MM)
      }), []);

      function WM(MM) {
        GM("Loading");
        const rM = JM(lM, MM),
          iM = CM !== wM.current ? CM : void 0;
        zM.c.updateSchematic(dM, rM, iM).then((iM => {
          let {
            customTexturePackKey: OM
          } = iM;
          GM("Success"), RM("customTexturePackKey", OM), bM.current = rM, wM.current = void 0, eM(void 0), setTimeout((() => {
            RM("gamePublished", MM), GM("Enter")
          }), 1e3)
        })).catch((MM => {
          var rM;
          (console.error("Failed to save schematic:", MM), GM("Error"), MM instanceof aM.e && MM.errorMessageForUser) && mM.NotificationProvider.showAlertPopup({
            title: "worldBuilder:changesNotSaved",
            subtitle: MM.errorMessageForUser,
            textOpts: {
              subtitle: null !== (rM = MM.errorMessageTranslationParams) && void 0 !== rM ? rM : void 0
            },
            confirmText: "general:ok"
          });
          setTimeout((() => {
            GM("Enter")
          }), 1e3)
        }))
      }
      return {
        schematicData: lM,
        updateSchematicData: RM,
        setTexturePack: eM,
        initializeTexturePack: pM,
        updateState: UM,
        formEnabled: tM,
        publishFormEnabled: gM,
        hasUnsavedChanges: uM,
        canEditSourceWorld: !iM,
        saveSchematic: WM,
        unpublishSchematic: function() {
          mM.NotificationProvider.showPromptPopup({
            icon: "rocket-launch",
            title: "worldBuilder:unpublishAsGameConfirmTitle",
            subtitle: "worldBuilder:unpublishAsGameConfirmSubtitle",
            confirmText: "worldBuilder:unpublishAsGame",
            cancelText: "general:cancel",
            unlockPointerKey: "unpublishGamePrompt"
          }).getResult().then((MM => {
            !0 === MM && WM(!1)
          }))
        },
        editSourceWorld: function() {
          GM("Loading"), LM.b.getSourceWorld(lM.schematicId).then((MM => {
            QM.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, nM.j)("other"), yM((0, SM.b)("classic", MM)), null === rM || void 0 === rM || rM()
          })).catch((MM => {
            console.error("Failed to get source world:", MM), GM("Error"), setTimeout((() => {
              GM("Enter")
            }), 1e3)
          }))
        },
        playGame: function() {
          QM.gameBridge.send("leaveGame", {
            reloadPath: "/"
          }), yM((0, PM.x)((0, jM.w)(lM.schematicId), lM)), null === rM || void 0 === rM || rM()
        }
      }
    }
  },
  5348: () => {}
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);