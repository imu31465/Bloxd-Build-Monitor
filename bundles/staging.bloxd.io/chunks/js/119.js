export const id = 119;
export const ids = [119];
export const modules = {
  5428: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => ZV,
      i: () => wV,
      k: () => vV
    });
    xV(5433);
    var JV = xV(1220),
      YV = xV(1146),
      UV = xV.n(YV),
      yV = xV(1446),
      pV = (xV(62), xV(4795)),
      QV = xV(1414),
      nV = xV(1321);

    function wV(VV) {
      let {
        children: eV,
        label: xV,
        className: YV,
        circleInfoText: pV,
        disabled: wV,
        onLabelClick: ZV
      } = VV;
      const {
        t: vV
      } = (0, JV.A)(), rV = (0, nV.jsxs)("div", {
        className: UV()("Label", {
          ClickableLabel: void 0 !== ZV
        }),
        onClick: ZV,
        children: [vV(xV), pV && (0, nV.jsx)(QV.b, {
          name: "circle-info"
        })]
      });
      return (0, nV.jsxs)("div", {
        className: UV()("LabeledInput", {
          [YV]: YV,
          DisabledLabelInput: wV
        }),
        children: [pV && (0, nV.jsx)(yV.d, {
          tooltipInner: (0, nV.jsx)("div", {
            className: "LabeledInputTooltip",
            children: vV(pV)
          }),
          children: rV
        }), !pV && rV, eV]
      })
    }

    function ZV(VV) {
      let {
        checked: eV,
        setChecked: xV
      } = VV;
      return (0, nV.jsx)("div", {
        className: "OtherInput ClickableOtherInput",
        "data-pad-focusable": !0,
        onClick: VV => {
          xV(!eV)
        },
        children: (0, nV.jsx)(pV.b, {
          checked: eV,
          onChange: VV => {
            xV(VV.target.checked)
          },
          disabled: !1
        })
      })
    }

    function vV(VV) {
      let {
        checked: eV,
        setChecked: xV,
        disabled: JV
      } = VV;
      return (0, nV.jsx)("div", {
        className: UV()("SwitchContainer", {
          SwitchContainerDisabled: JV
        }),
        onClick: () => {
          JV || xV(!eV)
        },
        children: (0, nV.jsx)(pV.b, {
          className: "SwitchCheckbox",
          checked: eV,
          onChange: VV => {
            xV(VV.target.checked)
          },
          disabled: !!JV
        })
      })
    }
  },
  5442: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => nV
    });
    var JV = xV(1146),
      YV = xV.n(JV),
      UV = xV(5103),
      yV = xV(1220),
      pV = xV(1321);
    const QV = [...UV.i, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function nV(VV) {
      const {
        disabled: eV,
        hideWrapper: xV
      } = VV, {
        t: JV
      } = (0, yV.A)(), nV = VV.advancedMode ? QV.map((eV => [eV, VV.callbacks[eV]])) : UV.i.map((eV => [eV, VV.callbacks[eV]])), ZV = (0, pV.jsx)("div", {
        className: YV()("PluginsGrid", {
          SectionBody: !xV
        }),
        children: nV.map((VV => {
          let [xV, JV] = VV;
          return (0, pV.jsx)(wV, {
            plugin: xV,
            callbacks: JV,
            disabled: eV
          }, xV)
        }))
      });
      return xV ? ZV : (0, pV.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, pV.jsx)("div", {
          className: "SectionTitle",
          children: JV("worldBuilder:pluginsSection")
        }), ZV]
      })
    }

    function wV(VV) {
      let {
        plugin: eV,
        callbacks: {
          isEnabled: xV,
          pW: JV
        },
        disabled: UV
      } = VV;
      const {
        t: QV
      } = (0, yV.A)(), nV = xV();
      return (0, pV.jsxs)("div", {
        className: YV()("PluginCard", {
          PluginCardEnabled: nV,
          PluginCardDisabledForm: UV
        }),
        "data-pad-focusable": !0,
        "aria-disabled": UV || void 0,
        onClick: () => {
          UV || JV(!nV)
        },
        children: [(0, pV.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, pV.jsx)("img", {
            src: `/textures/games/classic/customGames/${eV}.png`,
            alt: eV
          })
        }), (0, pV.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, pV.jsx)("div", {
            className: "PluginCardTitle",
            children: QV(ZV[eV])
          }), (0, pV.jsx)("div", {
            className: "PluginCardDescription",
            children: QV(vV[eV])
          })]
        }), (0, pV.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: QV(nV ? "general:on" : "general:off")
        })]
      })
    }
    const ZV = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      vV = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  5425: (VV, eV, xV) => {
    xV.d(eV, {
      i: () => Ye,
      c: () => Je,
      f: () => xe,
      k: () => Ue
    });
    var JV = xV(62),
      YV = xV(1439),
      UV = xV(1551),
      yV = xV(1772),
      pV = xV(1220),
      QV = xV(1408),
      nV = xV(1446),
      wV = xV(1414),
      ZV = xV(1252),
      vV = xV(1146),
      rV = xV.n(vV),
      kV = xV(364),
      bV = xV(5103),
      EV = xV(1269),
      BV = xV(5428),
      jV = xV(3551),
      qV = xV(5442),
      tV = xV(1321);

    function FV(VV) {
      let {
        icon: eV,
        title: xV,
        disabled: JV,
        children: YV
      } = VV;
      return (0, tV.jsxs)("div", {
        className: rV()("ManageCard", {
          ManageCardDisabled: JV
        }),
        children: [(0, tV.jsxs)("div", {
          className: "ManageCardHead",
          children: [(0, tV.jsx)("div", {
            className: "ManageCardIcon",
            children: (0, tV.jsx)(wV.b, {
              name: eV
            })
          }), (0, tV.jsx)("div", {
            children: (0, tV.jsx)("h2", {
              className: "ManageCardTitle",
              children: xV
            })
          })]
        }), (0, tV.jsxs)("div", {
          className: "ManageCardBody",
          children: [YV, JV && (0, tV.jsx)("div", {
            className: "ManageCardDisabledOverlay"
          })]
        })]
      })
    }

    function TV(VV) {
      let {
        label: eV,
        caption: xV,
        children: JV
      } = VV;
      return (0, tV.jsxs)("div", {
        className: "ManageStackedField",
        children: [(0, tV.jsx)("div", {
          className: "ManageStackedFieldLabel",
          children: eV
        }), JV, xV && (0, tV.jsx)("div", {
          className: "ManageStackedFieldCaption",
          children: xV
        })]
      })
    }

    function PV(VV) {
      let {
        label: eV,
        caption: xV,
        disabled: JV,
        children: YV
      } = VV;
      return (0, tV.jsxs)("div", {
        className: rV()("ManageField", {
          ManageFieldDisabled: JV
        }),
        children: [(0, tV.jsxs)("div", {
          className: "ManageFieldText",
          children: [(0, tV.jsx)("div", {
            className: "ManageFieldLabel",
            children: eV
          }), (0, tV.jsx)("div", {
            className: "ManageFieldCaption",
            children: xV
          })]
        }), (0, tV.jsx)("div", {
          className: "ManageFieldControl",
          children: YV
        })]
      })
    }

    function AV(VV) {
      var eV, xV;
      let {
        schematicData: JV,
        updateSchematicData: YV,
        publishFormEnabled: UV,
        formEnabled: yV
      } = VV;
      const {
        t: QV
      } = (0, pV.A)(), nV = !UV, wV = {
        tpRequests: {
          isEnabled: () => !JV.disableTpRequests,
          pW: VV => YV("disableTpRequests", !VV)
        },
        spawnProtection: {
          isEnabled: () => !JV.disableSpawnProtection,
          pW: VV => YV("disableSpawnProtection", !VV)
        },
        spawnReset: {
          isEnabled: () => !!JV.enableSpawnReset,
          pW: VV => YV("enableSpawnReset", VV)
        },
        smpMarketplace: {
          isEnabled: () => !!JV.enableSmpMarketplace,
          pW: VV => YV("enableSmpMarketplace", VV)
        },
        survivalGuns: {
          isEnabled: () => !!JV.enableSurvivalGuns,
          pW: VV => YV("enableSurvivalGuns", VV)
        },
        fallDamage: {
          isEnabled: () => !JV.disableFallDamage,
          pW: VV => YV("disableFallDamage", !VV)
        },
        dayNight: {
          isEnabled: () => !!JV.enableDayNight,
          pW: VV => YV("enableDayNight", VV)
        }
      };
      return (0, tV.jsxs)(tV.Fragment, {
        children: [!1 === JV.schematicContainsSpawnBlock && (0, tV.jsx)("div", {
          className: "ManageWarningBanner",
          children: QV("worldBuilder:mustContainSpawnBlock")
        }), (0, tV.jsxs)("div", {
          className: "ManageSettingsGrid",
          children: [(0, tV.jsxs)(FV, {
            icon: "globe",
            title: QV("worldBuilder:worldRulesSection"),
            disabled: !yV,
            children: [(0, tV.jsx)(PV, {
              label: QV("classic:defaultGamemode"),
              caption: QV("classic:defaultGamemodeDescription"),
              disabled: nV,
              children: (0, tV.jsx)(jV.c, {
                controlClassName: "ManageDropdown",
                options: bV.A.map((VV => ({
                  value: VV,
                  label: kV.r[VV]
                }))),
                value: JV.defaultGamemode,
                onChange: VV => YV("defaultGamemode", VV.value)
              })
            }), (0, tV.jsx)(PV, {
              label: QV("classic:voidDeathHeight"),
              caption: QV("classic:voidDeathHeightDescription"),
              disabled: nV,
              children: (0, tV.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, tV.jsx)("input", {
                  type: "number",
                  max: EV.H,
                  value: null !== (eV = JV.voidDeathHeight) && void 0 !== eV ? eV : "",
                  onChange: VV => {
                    const eV = parseInt(VV.target.value);
                    YV("voidDeathHeight", eV)
                  }
                }), (0, tV.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: QV("worldBuilder:blocksUnit")
                })]
              })
            }), (0, tV.jsx)(PV, {
              label: QV("classic:worldBorder"),
              caption: QV("classic:worldBorderDescription"),
              disabled: nV,
              children: (0, tV.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, tV.jsx)("input", {
                  type: "number",
                  min: EV.M,
                  max: EV.J,
                  placeholder: QV("worldBuilder:noWorldBorderLimit"),
                  value: null !== (xV = JV.worldBorder) && void 0 !== xV ? xV : "",
                  onChange: VV => {
                    const eV = parseInt(VV.target.value);
                    YV("worldBorder", isNaN(eV) ? null : eV)
                  }
                }), (0, tV.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: QV("worldBuilder:blocksUnit")
                })]
              })
            }), (0, tV.jsx)(PV, {
              label: QV("classic:disableMobs"),
              caption: QV("classic:disableMobsDescription"),
              disabled: nV,
              children: (0, tV.jsx)(BV.k, {
                checked: JV.disableMobs,
                setChecked: VV => YV("disableMobs", VV),
                disabled: nV
              })
            })]
          }), (0, tV.jsxs)(FV, {
            icon: "user-group",
            title: QV("worldBuilder:playerAndLobbySection"),
            disabled: !yV,
            children: [(0, tV.jsx)(PV, {
              label: QV("classic:disableKeepInventory"),
              caption: QV("classic:disableKeepInventoryDescription"),
              disabled: nV,
              children: (0, tV.jsx)(BV.k, {
                checked: JV.disableKeepInventory,
                setChecked: VV => YV("disableKeepInventory", VV),
                disabled: nV
              })
            }), (0, tV.jsx)(PV, {
              label: QV("classic:persistInventory"),
              caption: QV("classic:persistInventoryDescription"),
              disabled: nV,
              children: (0, tV.jsx)(jV.c, {
                controlClassName: "ManageDropdown",
                options: bV.j.map((VV => ({
                  value: VV,
                  label: kV.f[VV]
                }))),
                value: JV.persistInventory,
                onChange: VV => YV("persistInventory", VV.value)
              })
            }), (0, tV.jsx)(PV, {
              label: QV("classic:persistWorld"),
              caption: QV("classic:persistWorldDescription"),
              disabled: nV,
              children: (0, tV.jsx)(BV.k, {
                checked: JV.persistWorld,
                setChecked: VV => YV("persistWorld", VV),
                disabled: nV
              })
            }), (0, tV.jsx)(PV, {
              label: QV("classic:disableLobbySpawn"),
              caption: QV("classic:disableLobbySpawnDescription"),
              disabled: nV,
              children: (0, tV.jsx)(BV.k, {
                checked: JV.disableLobbySpawn,
                setChecked: VV => YV("disableLobbySpawn", VV),
                disabled: nV
              })
            }), (0, tV.jsx)(PV, {
              label: QV("classic:hideLobbyCode"),
              caption: QV("classic:hideLobbyCodeDescription"),
              disabled: nV,
              children: (0, tV.jsx)(BV.k, {
                checked: JV.hideLobbyCode,
                setChecked: VV => YV("hideLobbyCode", VV),
                disabled: nV
              })
            })]
          })]
        }), (0, tV.jsx)(FV, {
          icon: "layer-group",
          title: QV("worldBuilder:pluginsSection"),
          disabled: !yV,
          children: (0, tV.jsx)(qV.e, {
            callbacks: wV,
            disabled: nV,
            advancedMode: !0,
            hideWrapper: !0
          })
        })]
      })
    }
    var NV = xV(5446),
      XV = xV(4795),
      MV = xV(1603),
      zV = xV(3931),
      GV = xV(1168),
      WV = xV(5404),
      RV = xV(5448),
      gV = xV(1557);
    const DV = 50,
      iV = .3;
    async function CV(VV) {
      const eV = await
      function(VV) {
        return new Promise(((eV, xV) => {
          const JV = new FileReader;
          JV.onload = () => eV(JV.result), JV.onerror = xV, JV.readAsDataURL(VV)
        }))
      }(VV), xV = await
      function(VV) {
        return new Promise(((eV, xV) => {
          const JV = new Image;
          JV.onload = () => eV(JV), JV.onerror = () => xV(new Error("Failed to load image")), JV.src = VV
        }))
      }(eV);
      if (xV.naturalHeight > xV.naturalWidth) throw new aV;
      const JV = 1024 * DV,
        {
          dataUrl: YV,
          finalQuality: UV
        } = function(VV, eV) {
          const xV = document.createElement("canvas");
          xV.width = VV.naturalWidth, xV.height = VV.naturalHeight, xV.getContext("2d").drawImage(VV, 0, 0);
          let JV = .92,
            YV = xV.toDataURL("image/jpeg", JV);
          for (; .75 * YV.length > eV && JV > .05;) JV -= .05, YV = xV.toDataURL("image/jpeg", JV);
          return {
            dataUrl: YV,
            finalQuality: JV
          }
        }(xV, JV);
      if (Math.ceil(.75 * YV.length) > JV) throw new oV;
      return {
        base64Jpg: YV,
        heavilyCompressed: UV < iV
      }
    }
    class aV extends Error {}
    class oV extends Error {}
    var cV = function(VV) {
      return VV[VV.NOT_LOGGED_IN = 0] = "NOT_LOGGED_IN", VV[VV.THUMBNAIL_LIMIT_REACHED = 1] = "THUMBNAIL_LIMIT_REACHED", VV
    }(cV || {});

    function hV(VV) {
      var eV;
      let {
        schematicId: xV,
        hasReadUploadPolicy: YV,
        onPolicyValidationError: QV,
        onThumbnailReady: nV
      } = VV;
      const {
        t: vV
      } = (0, pV.A)(), [kV, bV] = (0, JV.useState)(null), [EV, BV] = (0, JV.useState)(""), [jV, qV] = (0, JV.useState)(""), [FV, TV] = (0, JV.useState)(!0), [PV, AV] = (0, JV.useState)(!1), NV = (0, JV.useRef)(!1), [XV, MV] = (0, JV.useState)(null), [zV, GV] = (0, JV.useState)(!1), [WV, gV] = (0, JV.useState)(!1), DV = (0, JV.useRef)(0), {
        getRootProps: iV,
        getInputProps: cV,
        isDragActive: hV
      } = (0, RV.e)({
        accept: {
          "image/*": [".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp"]
        },
        multiple: !1,
        onDrop: async VV => {
          if (0 === VV.length) return;
          const eV = VV[0],
            xV = ++DV.current;
          MV(null), GV(!1), bV(null), BV(eV.name);
          try {
            const VV = await CV(eV);
            if (xV !== DV.current) return;
            bV(VV), GV(VV.heavilyCompressed)
          } catch (JV) {
            if (xV !== DV.current) return;
            MV(vV(JV instanceof aV ? "thumbnail:portraitImagesNotAllowed" : JV instanceof oV ? "thumbnail:couldNotCompressImage" : "thumbnail:failedToUploadImage"))
          }
        },
        useFsAccessApi: !1
      }), lV = EV.length <= 30 ? EV : `${EV.slice(0,27)}...`, LV = null !== (eV = null === kV || void 0 === kV ? void 0 : kV.base64Jpg) && void 0 !== eV ? eV : null, fV = jV.trim(), mV = fV.length >= ZV.k && fV.length <= ZV.j, KV = WV && !kV && !XV, HV = WV && !mV;
      return (0, tV.jsxs)("div", {
        className: "ThumbnailUploadContainer",
        children: [(0, tV.jsxs)("div", {
          ...iV({
            className: rV()("ThumbnailUploadDropzone", {
              ActiveDrag: hV,
              ValidationError: KV
            })
          }),
          children: [(0, tV.jsx)("input", {
            ...cV()
          }), !hV && LV ? (0, tV.jsxs)(tV.Fragment, {
            children: [(0, tV.jsxs)("div", {
              className: "ThumbnailAspectPreviews",
              children: [(0, tV.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, tV.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "1:1"
                }), (0, tV.jsx)("div", {
                  className: "ThumbnailAspectFrame Square",
                  children: (0, tV.jsx)("img", {
                    src: LV,
                    alt: "1:1 preview"
                  })
                })]
              }), (0, tV.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, tV.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "16:9"
                }), (0, tV.jsx)("div", {
                  className: "ThumbnailAspectFrame Wide",
                  children: (0, tV.jsx)("img", {
                    src: LV,
                    alt: "16:9 preview"
                  })
                })]
              })]
            }), (0, tV.jsxs)("div", {
              children: [(0, tV.jsx)("div", {
                className: "ThumbnailUploadInstructions Active",
                children: lV
              }), (0, tV.jsx)("div", {
                className: "ThumbnailUploadInstructions Preview",
                children: vV("thumbnail:preview")
              })]
            })]
          }) : (0, tV.jsxs)(tV.Fragment, {
            children: [(0, tV.jsx)("div", {
              className: "ThumbnailUploadIcon",
              children: (0, tV.jsx)(wV.b, {
                name: "image"
              })
            }), (0, tV.jsx)("div", {
              className: "ThumbnailUploadInstructions",
              children: vV("thumbnail:dragImageHere")
            })]
          })]
        }), KV && (0, tV.jsx)("div", {
          className: "ThumbnailUploadError",
          children: vV("thumbnail:imageRequired")
        }), (0, tV.jsx)(yV.d, {
          className: rV()("ThumbnailUploadNameInput", {
            ValidationError: HV
          }),
          placeholderText: vV("thumbnail:thumbnailName"),
          defaultValue: jV,
          onValueChange: VV => {
            qV(VV)
          },
          maxLength: ZV.j
        }), HV && (0, tV.jsx)("div", {
          className: "ThumbnailUploadError",
          children: vV("thumbnail:nameRequired", {
            min: ZV.k,
            max: ZV.j
          })
        }), (0, tV.jsxs)("label", {
          className: "ThumbnailUploadCheckbox",
          children: [(0, tV.jsx)("input", {
            type: "checkbox",
            checked: FV,
            onChange: VV => {
              TV(VV.target.checked)
            }
          }), vV("thumbnail:setAsThumbnailOnceApproved")]
        }), zV && (0, tV.jsx)("div", {
          className: "ThumbnailUploadWarning",
          children: vV("thumbnail:heavyCompressionWarning")
        }), XV && (0, tV.jsx)("div", {
          className: "ThumbnailUploadError",
          children: XV
        }), (0, tV.jsx)(UV.m, {
          disabled: PV,
          className: "ThumbnailUploadButton",
          onClick: async () => {
            if (gV(!0), !NV.current && kV && mV && YV) {
              NV.current = !0, AV(!0), MV(null);
              try {
                await nV(kV.base64Jpg, fV, FV ? xV : null)
              } catch (VV) {
                MV(VV.errorMessageForUser ? vV(VV.errorMessageForUser, VV.errorMessageTranslationParams) : vV("thumbnail:failedToUploadImage"))
              } finally {
                NV.current = !1, AV(!1)
              }
            } else YV || QV()
          },
          children: vV(PV ? "thumbnail:processing" : "thumbnail:uploadThumbnail")
        })]
      })
    }
    const lV = 2e3;

    function LV(VV) {
      let {
        schematicId: eV,
        ownedThumbnailCount: xV,
        onClose: YV,
        onThumbnailReady: UV
      } = VV;
      const {
        t: yV
      } = (0, pV.A)(), {
        userContext: QV
      } = (0, GV.d)(), [nV, vV] = (0, JV.useState)(!1), [kV, bV] = (0, JV.useState)(!1), [EV, BV] = (0, JV.useState)(!1), jV = (0, JV.useRef)();
      (0, JV.useEffect)((() => () => {
        clearTimeout(jV.current)
      }), []);
      const qV = function(VV, eV) {
        const xV = [];
        return VV.isLoggedIn() || xV.push(cV.NOT_LOGGED_IN), eV >= ZV.Q && xV.push(cV.THUMBNAIL_LIMIT_REACHED), xV
      }(QV, xV);
      if (qV.length > 0) {
        const VV = {
          [cV.NOT_LOGGED_IN]: {
            key: "thumbnail:mustBeLoggedInToUpload"
          },
          [cV.THUMBNAIL_LIMIT_REACHED]: {
            key: "thumbnail:thumbnailLimitReachedPleaseDelete",
            params: {
              max: ZV.Q
            }
          }
        };
        return (0, tV.jsxs)("div", {
          className: "ThumbnailUploaderInner",
          children: [(0, tV.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: yV("thumbnail:cannotUploadThumbnail")
          }), qV.map(((eV, xV) => {
            const JV = VV[eV];
            return (0, tV.jsxs)("div", {
              className: "CannotUploadThumbnailItem",
              children: [(0, tV.jsx)(wV.b, {
                name: "triangle-exclamation"
              }), (0, tV.jsx)("span", {
                children: yV(JV.key, JV.params)
              })]
            }, xV)
          }))]
        })
      }
      return (0, tV.jsxs)("div", {
        className: rV()("ThumbnailUploaderInner", {
          ThumbnailUploaderSuccess: nV
        }),
        children: [nV && (0, tV.jsxs)("div", {
          className: "ThumbnailUploadSuccessOverlay",
          children: [(0, tV.jsxs)("div", {
            className: "ThumbnailUploadSuccessIcon FullyFancyText AnimFadeInScaleUp",
            children: [(0, tV.jsx)(wV.b, {
              name: "check"
            }), (0, tV.jsx)(gV.b, {})]
          }), (0, tV.jsx)("div", {
            className: "ThumbnailUploadSuccessText AnimFadeInScaleUp",
            children: yV("thumbnail:thumbnailUploaded")
          })]
        }), (0, tV.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: yV("thumbnail:uploadThumbnail")
        }), (0, tV.jsxs)("div", {
          className: "ThumbnailUploaderBody",
          children: [(0, tV.jsxs)("div", {
            className: "ThumbnailUploaderLeft",
            children: [(0, tV.jsx)("h3", {
              className: "SchematicPopupSubtitle",
              children: yV("thumbnail:chooseImage", {
                maxSizeKb: DV
              })
            }), (0, tV.jsx)(hV, {
              schematicId: eV,
              hasReadUploadPolicy: kV,
              onPolicyValidationError: () => {
                BV(!0)
              },
              onThumbnailReady: async (VV, eV, xV) => {
                await UV(VV, eV, xV), vV(!0), jV.current = setTimeout(YV, lV)
              }
            })]
          }), (0, tV.jsxs)("div", {
            className: "ThumbnailUploadPolicy",
            children: [(0, tV.jsx)("h3", {
              className: "ThumbnailUploadPolicyTitle",
              children: yV("thumbnail:uploadPolicy")
            }), (0, tV.jsxs)("ul", {
              className: "ThumbnailUploadPolicyList",
              children: [(0, tV.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, tV.jsx)(wV.b, {
                  name: "check"
                }), (0, tV.jsx)("span", {
                  children: yV("thumbnail:policyFollowGuidelines")
                })]
              }), (0, tV.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, tV.jsx)(wV.b, {
                  name: "check"
                }), (0, tV.jsx)("span", {
                  children: yV("thumbnail:policyInGameAssets")
                })]
              }), (0, tV.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, tV.jsx)(wV.b, {
                  name: "check"
                }), (0, tV.jsx)("span", {
                  children: yV("thumbnail:policyLimitText")
                })]
              }), (0, tV.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, tV.jsx)(wV.b, {
                  name: "x"
                }), (0, tV.jsx)("span", {
                  children: yV("thumbnail:policyCopyrightContent")
                })]
              }), (0, tV.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, tV.jsx)(wV.b, {
                  name: "x"
                }), (0, tV.jsx)("span", {
                  children: yV("thumbnail:policyOutOfGameAssets")
                })]
              }), (0, tV.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, tV.jsx)(wV.b, {
                  name: "x"
                }), (0, tV.jsx)("span", {
                  children: yV("thumbnail:policyBloxdTags")
                })]
              }), (0, tV.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, tV.jsx)(wV.b, {
                  name: "x"
                }), (0, tV.jsx)("span", {
                  children: yV("thumbnail:policyMustReflectGame")
                })]
              })]
            }), (0, tV.jsxs)("label", {
              className: rV()("ThumbnailUploadCheckbox Policy", {
                ValidationError: EV && !kV
              }),
              children: [(0, tV.jsx)("input", {
                type: "checkbox",
                checked: kV,
                onChange: VV => {
                  bV(VV.target.checked)
                }
              }), yV("thumbnail:agreeToUploadPolicy")]
            }), EV && !kV && (0, tV.jsx)("div", {
              className: "ThumbnailPolicyError",
              children: yV("thumbnail:policyRequired")
            })]
          })]
        })]
      })
    }
    var fV = xV(1230);
    const mV = {
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

    function KV(VV) {
      var eV, xV;
      let {
        schematicData: yV,
        updateSchematicData: nV,
        publishFormEnabled: ZV,
        onClose: vV
      } = VV;
      const {
        t: kV
      } = (0, pV.A)(), {
        userContext: bV,
        isUserContextUpdating: EV
      } = (0, GV.d)(), BV = (0, zV.e)(), [jV, qV] = (0, JV.useState)([]), [FV, TV] = (0, JV.useState)([]), [PV, AV] = (0, JV.useState)(!0), [NV, XV] = (0, JV.useState)(null !== (eV = yV.customThumbnailId) && void 0 !== eV ? eV : null), [RV, gV] = (0, JV.useState)(null), DV = (0, JV.useRef)(null !== (xV = yV.customThumbnailId) && void 0 !== xV ? xV : null), iV = (0, JV.useRef)(0), CV = (0, JV.useRef)(null), aV = (0, JV.useRef)(null), oV = (0, JV.useRef)(null), cV = (0, JV.useRef)(!1);

      function hV(VV, eV) {
        oV.current && (clearTimeout(oV.current), oV.current = null), gV(VV), null !== VV && eV && (oV.current = setTimeout((() => {
          gV(null), oV.current = null
        }), 5e3))
      }(0, JV.useEffect)((() => () => {
        clearTimeout(aV.current), clearTimeout(oV.current)
      }), []);
      const lV = (0, JV.useCallback)((() => {
        AV(!0), MV.b.getOwnedThumbnails(bV).then((VV => {
          const eV = [],
            xV = [];
          for (const JV of VV.thumbnails) JV.rejectionPolicyId ? eV.push(JV) : xV.push(JV);
          eV.sort(((VV, eV) => VV.lastUpdatedAt - eV.lastUpdatedAt)), xV.sort(((VV, eV) => {
            const xV = VV.approved ? 1 : 0,
              JV = (eV.approved ? 1 : 0) - xV;
            return 0 !== JV ? JV : eV.lastUpdatedAt - VV.lastUpdatedAt
          })), TV(eV), qV(xV)
        })).catch((VV => {
          console.error("Failed to fetch thumbnails:", VV)
        })).finally((() => {
          AV(!1)
        }))
      }), [bV]);
      async function mV(VV, eV, xV) {
        return MV.b.uploadSchematicThumbnail(bV, VV, eV, xV).then((() => {
          hV({
            text: kV("thumbnail:uploadedAwaitingModeration"),
            type: "success"
          }, !0), lV()
        }))
      }

      function KV() {
        iV.current = Date.now(), aV.current = null;
        const VV = CV.current;
        CV.current = null, hV({
          text: kV("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), MV.b.setSchematicThumbnail(bV, yV.schematicId, VV).then((() => {
          BV.current && (hV({
            text: kV("thumbnail:thumbnailUpdated"),
            type: "success"
          }, !0), DV.current = VV, nV("customThumbnailId", VV), nV("customThumbnailBlurhash", void 0), nV("customThumbnailVariants", void 0))
        })).catch((VV => {
          BV.current && (hV({
            text: VV.errorMessageForUser ? kV(VV.errorMessageForUser, VV.errorMessageTranslationParams) : kV("thumbnail:failedToSetThumbnail"),
            type: "error"
          }, !0), XV(DV.current))
        }))
      }

      function sV(VV) {
        XV(VV), CV.current = VV;
        const eV = Date.now() - iV.current;
        eV >= 1e3 ? KV() : (hV({
          text: kV("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), aV.current || (aV.current = setTimeout((() => {
          KV()
        }), 1e3 - eV)))
      }
      return (0, JV.useEffect)((() => {
        !1 === EV && lV()
      }), [EV, lV]), FV.length > 0 ? (0, tV.jsx)(HV, {
        rejectedThumbnails: FV,
        userContext: bV,
        isMountedRef: BV,
        onAcknowledged: lV
      }) : (0, tV.jsxs)("div", {
        className: "BloxdForm ThumbnailSection",
        children: [(0, tV.jsxs)("div", {
          className: "SectionTitle",
          children: [kV("thumbnail:gameThumbnail"), RV && (0, tV.jsx)("span", {
            className: rV()("ThumbnailActionMsg", `ThumbnailActionMsg--${RV.type}`),
            children: RV.text
          })]
        }), (0, tV.jsx)("div", {
          className: "SectionBody",
          children: (0, tV.jsxs)("div", {
            className: "ThumbnailGrid",
            children: [(0, tV.jsxs)("div", {
              className: rV()("ThumbnailGridItem ThumbnailGridItemDefault", {
                ThumbnailGridItemSelected: null === NV
              }),
              onClick: () => sV(null),
              children: [(0, tV.jsx)(WV.d, {
                game: {
                  schematicId: yV.schematicId,
                  imageBlurhash: yV.imageBlurhash
                }
              }), (0, tV.jsx)("div", {
                className: "ThumbnailGridItemLabel ThumbnailDefaultLabel",
                children: kV("general:default")
              })]
            }), PV && (0, tV.jsx)(QV.d, {}), jV.map(((VV, eV) => (0, tV.jsxs)("div", {
              className: rV()("ThumbnailGridItem", {
                ThumbnailGridItemSelected: NV === VV.id,
                ThumbnailGridItemPending: !VV.approved
              }),
              onClick: () => {
                VV.approved && sV(VV.id)
              },
              children: [VV.approved && (0, tV.jsx)("img", {
                src: `${fV.clientSideServerUrls.s3Url}/customThumbnails/${VV.id}.jpg`,
                alt: "Thumbnail"
              }), VV.approved && (0, tV.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: VV.name
              }), VV.id && (0, tV.jsx)(UV.E, {
                className: "ThumbnailDeleteButton",
                onClick: eV => async function(VV, eV, xV) {
                  VV.stopPropagation();
                  const JV = await YV.NotificationProvider.showCustomPopup({
                      body: VV => (0, tV.jsx)(uV, {
                        thumbnailId: eV,
                        thumbnailName: xV,
                        onClose: eV => {
                          eV && (cV.current = !0), VV()
                        }
                      }),
                      middleScreenPopupClassName: "ThumbnailDeleteConfirmPopup",
                      onClose: vV
                    }).getResult(),
                    UV = cV.current;
                  cV.current = !1, UV && !0 === JV && (BV.current && hV({
                    text: kV("thumbnail:deletingThumbnail"),
                    type: "info"
                  }, !1), MV.b.deleteSchematicThumbnail(bV, eV).then((() => {
                    BV.current && (hV({
                      text: kV("thumbnail:thumbnailDeleted"),
                      type: "success"
                    }, !0), DV.current === eV && sV(null), lV())
                  })).catch((VV => {
                    BV.current && hV({
                      text: VV.errorMessageForUser ? kV(VV.errorMessageForUser, VV.errorMessageTranslationParams) : kV("thumbnail:failedToDeleteThumbnail"),
                      type: "error"
                    }, !0)
                  })))
                }(eV, VV.id, VV.name),
                children: (0, tV.jsx)(wV.b, {
                  name: "trash-can"
                })
              }), !VV.approved && (0, tV.jsx)("div", {
                className: "ThumbnailUnapprovedIcon",
                children: (0, tV.jsx)(wV.b, {
                  name: "hourglass-clock"
                })
              }), !VV.approved && (0, tV.jsxs)("div", {
                className: "ThumbnailGridItemLabel ThumbnailPendingLabel",
                children: [VV.name, (0, tV.jsx)("br", {}), kV("thumbnail:pendingApproval")]
              })]
            }, eV))), (0, tV.jsxs)("div", {
              className: rV()("ThumbnailGridItem ThumbnailUploadTile", {
                ThumbnailUploadTileDisabled: !ZV
              }),
              onClick: () => {
                ZV && function(VV) {
                  let {
                    schematicId: eV,
                    ownedThumbnailCount: xV,
                    onThumbnailReady: JV,
                    onClose: UV
                  } = VV;
                  YV.NotificationProvider.showCustomPopup({
                    body: VV => (0, tV.jsx)(LV, {
                      schematicId: eV,
                      ownedThumbnailCount: xV,
                      onClose: VV,
                      onThumbnailReady: JV
                    }),
                    middleScreenPopupClassName: "SchematicThumbnailPopup",
                    onClose: UV,
                    unlockPointerKey: "schematicThumbnailUploaderPopup"
                  })
                }({
                  schematicId: yV.schematicId,
                  ownedThumbnailCount: jV.length,
                  onThumbnailReady: mV,
                  onClose: vV
                })
              },
              children: [(0, tV.jsx)(wV.b, {
                name: "plus"
              }), (0, tV.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: kV("thumbnail:uploadThumbnail")
              })]
            })]
          })
        })]
      })
    }

    function HV(VV) {
      let {
        rejectedThumbnails: eV,
        userContext: xV,
        isMountedRef: YV,
        onAcknowledged: yV
      } = VV;
      const {
        t: nV
      } = (0, pV.A)(), [ZV, vV] = (0, JV.useState)(!1), [rV, kV] = (0, JV.useState)(!1), bV = function(VV) {
        const eV = new Map;
        for (const xV of VV) {
          const VV = xV.rejectionPolicyId,
            JV = eV.get(VV);
          JV ? JV.push(xV) : eV.set(VV, [xV])
        }
        return eV
      }(eV);
      return (0, tV.jsxs)("div", {
        className: "ThumbnailRejectionNotice",
        children: [(0, tV.jsxs)("div", {
          className: "ThumbnailRejectionNoticeTitle",
          children: [(0, tV.jsx)(wV.b, {
            name: "triangle-exclamation"
          }), " ", nV("thumbnail:thumbnailsRejected"), " ", (0, tV.jsx)(wV.b, {
            name: "triangle-exclamation"
          })]
        }), (0, tV.jsx)("div", {
          className: "ThumbnailRejectionNoticeSubtitle",
          children: nV("thumbnail:thumbnailsRejectedDescription")
        }), (0, tV.jsx)("div", {
          className: "ThumbnailRejectionNoticeList",
          children: [...bV.entries()].map((VV => {
            let [eV, xV] = VV;
            const JV = mV[eV];
            return (0, tV.jsxs)("div", {
              className: "ThumbnailRejectionNoticeGroup",
              children: [(0, tV.jsx)("div", {
                className: "ThumbnailRejectionNoticeItems",
                children: xV.map((VV => (0, tV.jsxs)("div", {
                  className: "ThumbnailRejectionNoticeItem",
                  children: [(0, tV.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemIcon",
                    children: (0, tV.jsx)(wV.b, {
                      name: "image-slash"
                    })
                  }), (0, tV.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemDetails",
                    children: (0, tV.jsx)("div", {
                      className: "ThumbnailRejectionNoticeItemName",
                      children: VV.name
                    })
                  })]
                }, VV.id)))
              }), (0, tV.jsxs)("div", {
                className: "ThumbnailRejectionNoticeGroupReason",
                children: [nV("thumbnail:rejectionReason"), " ", JV ? nV(JV.reason) : eV]
              }), JV && (0, tV.jsx)("ul", {
                className: "ThumbnailRejectionNoticeGroupTips",
                children: JV.tips.map((VV => (0, tV.jsx)("li", {
                  children: nV(VV)
                }, VV)))
              })]
            }, eV)
          }))
        }), (0, tV.jsxs)("label", {
          className: "ThumbnailRejectionNoticeCheckbox",
          children: [(0, tV.jsx)(XV.b, {
            checked: ZV,
            onChange: VV => vV(VV.target.checked),
            disabled: rV
          }), (0, tV.jsx)("span", {
            children: nV("thumbnail:haveReadRejectionReasons")
          })]
        }), (0, tV.jsx)(UV.m, {
          onClick: async function() {
            kV(!0);
            const VV = await Promise.allSettled(eV.map((VV => MV.b.deleteSchematicThumbnail(xV, VV.id))));
            if (!YV.current) return;
            const JV = VV.filter((VV => "rejected" === VV.status));
            JV.length > 0 && console.error("Some rejected thumbnails failed to delete:", JV), yV()
          },
          disabled: !ZV || rV,
          className: "ThumbnailRejectionNoticeAcceptButton",
          children: rV ? (0, tV.jsx)(QV.d, {}) : nV("general:accept")
        })]
      })
    }

    function uV(VV) {
      let {
        thumbnailId: eV,
        thumbnailName: xV,
        onClose: JV
      } = VV;
      const {
        t: YV
      } = (0, pV.A)();
      return (0, tV.jsxs)("div", {
        className: "ThumbnailDeleteConfirm",
        children: [(0, tV.jsx)("div", {
          className: "ThumbnailDeleteConfirmTitle",
          children: YV("thumbnail:deleteThumbnail")
        }), (0, tV.jsxs)("div", {
          className: "ThumbnailDeleteConfirmImageContainer",
          children: [(0, tV.jsx)("img", {
            className: "ThumbnailDeleteConfirmImage",
            src: `${fV.clientSideServerUrls.s3Url}/customThumbnails/${eV}.jpg`,
            alt: "Thumbnail to delete"
          }), (0, tV.jsx)("div", {
            className: "ThumbnailGridItemLabel",
            children: xV
          })]
        }), (0, tV.jsx)("div", {
          className: "ThumbnailDeleteConfirmSubtitle",
          children: YV("thumbnail:deleteThumbnailConfirmation")
        }), (0, tV.jsxs)("div", {
          className: "ThumbnailDeleteConfirmButtons",
          children: [(0, tV.jsxs)(UV.E, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => JV(!0),
            children: [(0, tV.jsx)(wV.b, {
              name: "trash-can"
            }), " ", YV("general:delete")]
          }), (0, tV.jsx)(UV.j, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => JV(!1),
            children: YV("general:cancel")
          })]
        })]
      })
    }
    var sV = xV(2277),
      SV = xV(5486),
      IV = xV(5494),
      dV = xV(5542);

    function OV(VV) {
      let {
        schematicData: eV,
        setTexturePack: xV,
        initializeTexturePack: YV,
        publishFormEnabled: UV
      } = VV;
      const {
        t: yV
      } = (0, pV.A)(), [QV, nV] = (0, JV.useState)(null), [wV, ZV] = (0, JV.useState)(null), [vV, kV] = (0, JV.useState)(!1), bV = (0, zV.e)(), EV = UV && !vV, BV = eV.customTexturePackKey;

      function jV(VV) {
        var eV;
        nV(VV.metaData.id), ZV(null !== (eV = VV.metaData.fromFolderName) && void 0 !== eV ? eV : null), (VV.metaData.id !== sV.r.CUSTOM || VV.metaData.fromFolderName) && xV(VV)
      }
      return (0, JV.useEffect)((() => {
        BV && (kV(!0), (0, SV.d)(BV).then((VV => {
          var eV;
          bV.current && (VV ? (nV(VV.metaData.id), ZV(null !== (eV = VV.metaData.fromFolderName) && void 0 !== eV ? eV : null), YV(VV)) : console.error(`No texture pack at ${BV}`))
        })).catch((VV => {
          console.error("Error fetching texture pack: ", VV)
        })).finally((() => {
          kV(!1)
        })))
      }), [BV, YV, bV]), (0, tV.jsxs)("div", {
        className: "BloxdForm TexturePackSection",
        children: [(0, tV.jsx)("div", {
          className: "SectionTitle",
          children: yV("customTexturePack:customTexturePack")
        }), (0, tV.jsxs)("div", {
          className: "TexturePackList",
          children: [(0, tV.jsx)("div", {
            className: rV()("TexturePack", {
              Selected: null === QV && !vV,
              Disabled: !EV
            }),
            onClick: () => {
              EV && (nV(null), xV(null), ZV(null))
            },
            children: (0, tV.jsx)("div", {
              className: "TexturePackName",
              children: "No Override"
            })
          }), Object.values(sV.r).map((VV => (0, tV.jsx)(IV.h, {
            id: VV,
            isSelected: VV === QV,
            setSelected: jV,
            disabled: !EV
          }, VV)))]
        }), QV === sV.r.CUSTOM && (0, tV.jsx)(dV.c, {
          folderName: wV,
          onTexturePackUpdated: jV,
          disabled: !EV,
          maxFileSizeMb: 25,
          packOwner: "customGame"
        })]
      })
    }
    var Ve = xV(5581);

    function ee(VV) {
      var eV;
      let {
        gameCategory: xV,
        setGameCategory: JV,
        disabled: YV
      } = VV;
      const yV = null !== (eV = (0, kV.jb)(xV)) && void 0 !== eV ? eV : "other";
      return (0, tV.jsxs)("div", {
        className: "GameCategoryPicker",
        children: [(0, tV.jsx)(BV.i, {
          label: "worldBuilder:gameCategoryGroup",
          className: "GameCategoryGroup",
          disabled: YV,
          children: (0, tV.jsx)(jV.c, {
            options: kV.bb.map((VV => ({
              value: VV,
              label: kV.Z[VV]
            }))),
            value: yV,
            onChange: VV => {
              VV.value !== yV && JV(kV.U[VV.value][0])
            }
          })
        }), (0, tV.jsx)(BV.i, {
          label: "worldBuilder:gameCategory",
          className: "GameCategory",
          disabled: YV,
          children: (0, tV.jsx)("div", {
            className: "GameCategoryOptions",
            children: kV.U[yV].map((VV => (0, tV.jsx)(UV.M, {
              active: VV === xV,
              onClick: () => {
                JV(VV)
              },
              children: (0, kV.gb)(VV)
            }, VV)))
          })
        })]
      })
    }

    function xe(VV) {
      let {
        editor: eV,
        onClose: xV
      } = VV;
      const {
        t: JV
      } = (0, pV.A)(), {
        schematicData: YV,
        updateSchematicData: UV,
        publishFormEnabled: QV,
        formEnabled: nV
      } = eV;
      return (0, tV.jsxs)(tV.Fragment, {
        children: [(0, tV.jsxs)(FV, {
          icon: "pen-to-square",
          title: JV("worldBuilder:basicsSection"),
          disabled: !nV,
          children: [(0, tV.jsx)(TV, {
            label: JV("general:name"),
            caption: JV("worldBuilder:schematicNameTagsHint"),
            children: (0, tV.jsx)(yV.d, {
              className: "SchematicPageName",
              defaultValue: YV.name,
              onValueChange: VV => UV("name", VV),
              placeholderText: JV("worldBuilder:schematicNamePlaceholder"),
              maxLength: ZV.mb
            })
          }), (0, tV.jsx)(TV, {
            label: JV("general:description"),
            children: (0, tV.jsx)(yV.d, {
              className: "SchematicPageDescription",
              useTextarea: !0,
              defaultValue: YV.description,
              onValueChange: VV => UV("description", VV),
              placeholderText: JV("worldBuilder:schematicDescriptionPlaceholder"),
              maxLength: ZV.ib
            })
          }), (0, tV.jsx)(ee, {
            gameCategory: YV.gameCategory,
            setGameCategory: VV => UV("gameCategory", VV),
            disabled: !QV
          }), !0 === YV.gamePublished && (0, tV.jsx)(KV, {
            schematicData: YV,
            updateSchematicData: UV,
            publishFormEnabled: QV,
            onClose: function() {
              null === xV || void 0 === xV || xV()
            }
          })]
        }), (0, tV.jsx)(AV, {
          schematicData: YV,
          updateSchematicData: UV,
          publishFormEnabled: QV,
          formEnabled: nV
        }), !0 === YV.gamePublished && (0, tV.jsx)(FV, {
          icon: "palette",
          title: JV("worldBuilder:texturePackSection"),
          disabled: !nV,
          children: (0, tV.jsx)(OV, {
            schematicData: YV,
            setTexturePack: eV.setTexturePack,
            initializeTexturePack: eV.initializeTexturePack,
            publishFormEnabled: QV
          })
        })]
      })
    }

    function Je(VV) {
      let {
        editor: eV
      } = VV;
      const {
        t: xV
      } = (0, pV.A)(), {
        schematicData: JV,
        formEnabled: YV,
        hasUnsavedChanges: yV
      } = eV, ZV = YV && yV;
      return (0, tV.jsxs)("footer", {
        className: "SchematicPageFooter",
        children: [YV && yV && (0, tV.jsxs)("div", {
          className: "SchematicPageFooterStatus",
          children: [(0, tV.jsx)("span", {
            className: "SchematicPageFooterStatusDot"
          }), xV("worldBuilder:unsavedChanges")]
        }), (0, tV.jsx)(nV.d, {
          tooltipInner: (0, tV.jsx)("div", {
            className: "SaveButtonTooltip",
            children: xV(YV && !yV ? "worldBuilder:saveChangesNoneDescription" : "worldBuilder:saveChangesDescription")
          }),
          children: (0, tV.jsxs)(UV.f, {
            className: "SaveChangesButton",
            onClick: () => eV.saveSchematic(JV.gamePublished),
            disabled: !ZV,
            children: [(0, tV.jsxs)("span", {
              className: YV ? "" : "SaveChangesButtonBodyHidden",
              children: [(0, tV.jsx)(wV.b, {
                name: "wrench"
              }), " ", xV("worldBuilder:saveChanges")]
            }), !YV && (0, tV.jsx)(QV.d, {})]
          })
        })]
      })
    }

    function Ye(VV) {
      let {
        schematic: eV,
        onSchematicUpdate: xV,
        onClose: YV,
        inSourceWorld: yV
      } = VV;
      const {
        t: QV
      } = (0, pV.A)();

      function nV() {
        null === YV || void 0 === YV || YV()
      }
      const wV = (0, Ve.d)(eV, {
        onNavigateAway: nV,
        inSourceWorld: yV
      });
      return (0, JV.useEffect)((() => {
        null === xV || void 0 === xV || xV(wV.schematicData)
      }), [wV.schematicData, xV]), (0, tV.jsxs)("div", {
        className: "SchematicPage SchematicPagePopupVariant",
        children: [(0, tV.jsxs)("div", {
          className: "SchematicPageBody",
          children: [(0, tV.jsx)(UV.b, {
            onClick: nV,
            children: QV("worldBuilder:back")
          }), (0, tV.jsx)(FV, {
            icon: "rocket-launch",
            title: QV("worldBuilder:actionsSection"),
            disabled: !wV.formEnabled,
            children: (0, tV.jsx)(NV.b, {
              editor: wV
            })
          }), (0, tV.jsx)(xe, {
            editor: wV,
            onClose: nV
          })]
        }), (0, tV.jsx)(Je, {
          editor: wV
        })]
      })
    }

    function Ue(VV) {
      let {
        schematic: eV,
        onSchematicUpdate: xV,
        onClose: JV,
        inSourceWorld: UV
      } = VV;
      YV.NotificationProvider.showCustomPopup({
        body: VV => (0, tV.jsx)(Ye, {
          schematic: eV,
          onSchematicUpdate: xV,
          onClose: VV,
          inSourceWorld: UV
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: JV,
        unlockPointerKey: "schematicPagePopup"
      })
    }
  },
  5446: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => ZV
    });
    var JV = xV(1146),
      YV = xV.n(JV),
      UV = xV(1220),
      yV = xV(1414),
      pV = xV(1551),
      QV = xV(1446),
      nV = xV(1408),
      wV = xV(1321);

    function ZV(VV) {
      let {
        editor: eV,
        className: xV
      } = VV;
      const {
        t: JV
      } = (0, UV.A)(), {
        schematicData: ZV,
        formEnabled: vV,
        publishFormEnabled: rV
      } = eV, kV = !vV || !rV;
      return (0, wV.jsxs)("div", {
        className: YV()("PublishButtonContainer", xV),
        children: [eV.canEditSourceWorld && (0, wV.jsxs)(pV.f, {
          onClick: eV.editSourceWorld,
          disabled: kV,
          children: [(0, wV.jsx)(yV.b, {
            name: "edit"
          }), " ", JV("worldBuilder:editSourceWorld")]
        }), !ZV.gamePublished && (0, wV.jsx)(QV.d, {
          tooltipInner: (0, wV.jsx)("div", {
            className: "PublishButtonTooltip",
            children: JV("worldBuilder:publishAsGameDescription")
          }),
          children: (0, wV.jsxs)(pV.m, {
            onClick: () => eV.saveSchematic(!0),
            disabled: kV,
            children: [(0, wV.jsx)(yV.b, {
              name: "rocket-launch"
            }), " ", JV("worldBuilder:publishAsGame"), " ", (0, wV.jsx)(yV.b, {
              name: "info-circle"
            })]
          })
        }), !0 === ZV.gamePublished && (0, wV.jsxs)(wV.Fragment, {
          children: [(0, wV.jsx)(QV.d, {
            tooltipInner: (0, wV.jsx)("div", {
              className: "PublishButtonTooltip",
              children: JV("worldBuilder:unpublishAsGameDescription")
            }),
            children: (0, wV.jsxs)(pV.E, {
              onClick: eV.unpublishSchematic,
              disabled: kV,
              children: [(0, wV.jsx)(yV.b, {
                name: "rocket-launch"
              }), " ", JV("worldBuilder:unpublishAsGame"), " ", (0, wV.jsx)(yV.b, {
                name: "info-circle"
              })]
            })
          }), (0, wV.jsxs)(pV.f, {
            onClick: eV.playGame,
            disabled: kV,
            children: [(0, wV.jsx)(yV.b, {
              name: "joystick"
            }), " ", JV("general:playGame")]
          })]
        }), !vV && (0, wV.jsx)(nV.d, {
          loaderType: "Secondary"
        })]
      })
    }
  },
  5486: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => YV
    });
    var JV = xV(1230);
    async function YV(VV) {
      const eV = await fetch(`${JV.clientSideServerUrls.s3Url}/${VV}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === eV.status || 403 === eV.status) return null;
      if (!eV.ok) throw new Error(`Failed to download the texture pack (${eV.status})`);
      return await eV.json()
    }
  },
  5581: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => EV
    });
    var JV = xV(62),
      YV = xV(1397),
      UV = xV(1099),
      yV = xV(165),
      pV = xV(1643),
      QV = xV(27),
      nV = xV(2051),
      wV = xV(1603),
      ZV = xV(5056),
      vV = xV(1439),
      rV = xV(1168),
      kV = xV(1612);

    function bV(VV, eV) {
      return {
        schematicId: VV.schematicId,
        name: VV.name,
        description: VV.description,
        gamePublished: eV,
        gameCategory: VV.gameCategory,
        defaultGamemode: VV.defaultGamemode,
        voidDeathHeight: VV.voidDeathHeight,
        disableKeepInventory: VV.disableKeepInventory,
        disableTpRequests: VV.disableTpRequests,
        disableLobbySpawn: VV.disableLobbySpawn,
        disableMobs: VV.disableMobs,
        disableSpawnProtection: VV.disableSpawnProtection,
        disableFallDamage: VV.disableFallDamage,
        worldBorder: VV.worldBorder,
        hideLobbyCode: VV.hideLobbyCode,
        enableSmpMarketplace: VV.enableSmpMarketplace,
        enableSurvivalGuns: VV.enableSurvivalGuns,
        enableSpawnReset: VV.enableSpawnReset,
        enableDayNight: VV.enableDayNight,
        persistWorld: VV.persistWorld,
        persistInventory: VV.persistInventory
      }
    }

    function EV(VV) {
      let {
        onNavigateAway: eV,
        inSourceWorld: xV = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const {
        userContext: EV
      } = (0, rV.d)(), BV = (0, kV.useNavigatePreserveSearch)(), [jV, qV] = (0, JV.useState)({
        ...VV
      }), [tV, FV] = (0, JV.useState)("Enter"), [TV, PV] = (0, JV.useState)(void 0), AV = (0, JV.useRef)(bV(VV, VV.gamePublished)), NV = (0, JV.useRef)(void 0), XV = "Enter" === tV, MV = EV.playerHasRank("developer") || EV.playerHasRank("admin") || "Enter" === tV && !1 !== jV.schematicContainsSpawnBlock, zV = void 0 !== TV && TV !== NV.current || JSON.stringify(bV(jV, jV.gamePublished)) !== JSON.stringify(AV.current);

      function GV(VV, eV) {
        qV((xV => ({
          ...xV,
          [VV]: eV
        })))
      }
      const WV = (0, JV.useCallback)((VV => {
        NV.current = VV, PV(VV)
      }), []);

      function RV(VV) {
        FV("Loading");
        const eV = bV(jV, VV),
          xV = TV !== NV.current ? TV : void 0;
        wV.b.updateSchematic(EV, eV, xV).then((xV => {
          let {
            customTexturePackKey: JV
          } = xV;
          FV("Success"), GV("customTexturePackKey", JV), AV.current = eV, NV.current = void 0, PV(void 0), setTimeout((() => {
            GV("gamePublished", VV), FV("Enter")
          }), 1e3)
        })).catch((VV => {
          var eV;
          (console.error("Failed to save schematic:", VV), FV("Error"), VV instanceof yV.b && VV.errorMessageForUser) && vV.NotificationProvider.showAlertPopup({
            title: "worldBuilder:changesNotSaved",
            subtitle: VV.errorMessageForUser,
            textOpts: {
              subtitle: null !== (eV = VV.errorMessageTranslationParams) && void 0 !== eV ? eV : void 0
            },
            confirmText: "general:ok"
          });
          setTimeout((() => {
            FV("Enter")
          }), 1e3)
        }))
      }
      return {
        schematicData: jV,
        updateSchematicData: GV,
        setTexturePack: PV,
        initializeTexturePack: WV,
        updateState: tV,
        formEnabled: XV,
        publishFormEnabled: MV,
        hasUnsavedChanges: zV,
        canEditSourceWorld: !xV,
        saveSchematic: RV,
        unpublishSchematic: function() {
          vV.NotificationProvider.showPromptPopup({
            icon: "rocket-launch",
            title: "worldBuilder:unpublishAsGameConfirmTitle",
            subtitle: "worldBuilder:unpublishAsGameConfirmSubtitle",
            confirmText: "worldBuilder:unpublishAsGame",
            cancelText: "general:cancel",
            unlockPointerKey: "unpublishGamePrompt"
          }).getResult().then((VV => {
            !0 === VV && RV(!1)
          }))
        },
        editSourceWorld: function() {
          FV("Loading"), ZV.e.getSourceWorld(jV.schematicId).then((VV => {
            nV.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, QV.h)("other"), BV((0, YV.c)("classic", VV)), null === eV || void 0 === eV || eV()
          })).catch((VV => {
            console.error("Failed to get source world:", VV), FV("Error"), setTimeout((() => {
              FV("Enter")
            }), 1e3)
          }))
        },
        playGame: function() {
          nV.gameBridge.send("leaveGame", {
            reloadPath: "/"
          }), BV((0, pV.x)((0, UV.t)(jV.schematicId), jV)), null === eV || void 0 === eV || eV()
        }
      }
    }
  },
  5433: () => {}
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);