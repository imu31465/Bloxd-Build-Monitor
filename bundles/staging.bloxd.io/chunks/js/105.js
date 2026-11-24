export const id = 105;
export const ids = [105];
export const modules = {
  5093: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => fS,
      d: () => IS,
      g: () => kS
    });
    gS(5099);
    var tS = gS(1281),
      bS = gS(1121),
      XS = gS.n(bS),
      xS = gS(1444),
      NS = (gS(64), gS(4489)),
      qS = gS(1127),
      uS = gS(1181);

    function IS(SS) {
      let {
        children: HS,
        label: gS,
        className: bS,
        circleInfoText: NS,
        disabled: IS,
        onLabelClick: fS
      } = SS;
      const {
        t: kS
      } = (0, tS.F)(), aS = (0, uS.jsxs)("div", {
        className: XS()("Label", {
          ClickableLabel: void 0 !== fS
        }),
        onClick: fS,
        children: [kS(gS), NS && (0, uS.jsx)(qS.d, {
          name: "circle-info"
        })]
      });
      return (0, uS.jsxs)("div", {
        className: XS()("LabeledInput", {
          [bS]: bS,
          DisabledLabelInput: IS
        }),
        children: [NS && (0, uS.jsx)(xS.h, {
          tooltipInner: (0, uS.jsx)("div", {
            className: "LabeledInputTooltip",
            children: kS(NS)
          }),
          children: aS
        }), !NS && aS, HS]
      })
    }

    function fS(SS) {
      let {
        checked: HS,
        setChecked: gS
      } = SS;
      return (0, uS.jsx)("div", {
        className: "OtherInput ClickableOtherInput",
        "data-pad-focusable": !0,
        onClick: SS => {
          gS(!HS)
        },
        children: (0, uS.jsx)(NS.c, {
          checked: HS,
          onChange: SS => {
            gS(SS.target.checked)
          },
          disabled: !1
        })
      })
    }

    function kS(SS) {
      let {
        checked: HS,
        setChecked: gS,
        disabled: tS
      } = SS;
      return (0, uS.jsx)("div", {
        className: XS()("SwitchContainer", {
          SwitchContainerDisabled: tS
        }),
        onClick: () => {
          tS || gS(!HS)
        },
        children: (0, uS.jsx)(NS.c, {
          className: "SwitchCheckbox",
          checked: HS,
          onChange: SS => {
            gS(SS.target.checked)
          },
          disabled: !!tS
        })
      })
    }
  },
  5103: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => uS
    });
    var tS = gS(1121),
      bS = gS.n(tS),
      XS = gS(4749),
      xS = gS(1281),
      NS = gS(1181);
    const qS = [...XS.p, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function uS(SS) {
      const {
        disabled: HS,
        hideWrapper: gS
      } = SS, {
        t: tS
      } = (0, xS.F)(), uS = SS.advancedMode ? qS.map((HS => [HS, SS.callbacks[HS]])) : XS.p.map((HS => [HS, SS.callbacks[HS]])), fS = (0, NS.jsx)("div", {
        className: bS()("PluginsGrid", {
          SectionBody: !gS
        }),
        children: uS.map((SS => {
          let [gS, tS] = SS;
          return (0, NS.jsx)(IS, {
            plugin: gS,
            callbacks: tS,
            disabled: HS
          }, gS)
        }))
      });
      return gS ? fS : (0, NS.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, NS.jsx)("div", {
          className: "SectionTitle",
          children: tS("worldBuilder:pluginsSection")
        }), fS]
      })
    }

    function IS(SS) {
      let {
        plugin: HS,
        callbacks: {
          isEnabled: gS,
          MJ: tS
        },
        disabled: XS
      } = SS;
      const {
        t: qS
      } = (0, xS.F)(), uS = gS();
      return (0, NS.jsxs)("div", {
        className: bS()("PluginCard", {
          PluginCardEnabled: uS,
          PluginCardDisabledForm: XS
        }),
        "data-pad-focusable": !0,
        "aria-disabled": XS || void 0,
        onClick: () => {
          XS || tS(!uS)
        },
        children: [(0, NS.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, NS.jsx)("img", {
            src: `/textures/games/classic/customGames/${HS}.png`,
            alt: HS
          })
        }), (0, NS.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, NS.jsx)("div", {
            className: "PluginCardTitle",
            children: qS(fS[HS])
          }), (0, NS.jsx)("div", {
            className: "PluginCardDescription",
            children: qS(kS[HS])
          })]
        }), (0, NS.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: qS(uS ? "general:on" : "general:off")
        })]
      })
    }
    const fS = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      kS = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  5089: (SS, HS, gS) => {
    gS.d(HS, {
      j: () => bH,
      c: () => tH,
      f: () => gH,
      k: () => XH
    });
    var tS = gS(64),
      bS = gS(1435),
      XS = gS(1528),
      xS = gS(1774),
      NS = gS(1281),
      qS = gS(1419),
      uS = gS(1444),
      IS = gS(1127),
      fS = gS(1309),
      kS = gS(1121),
      aS = gS.n(kS),
      KS = gS(369),
      jS = gS(4749),
      GS = gS(1327),
      CS = gS(5093),
      nS = gS(3300),
      PS = gS(5103),
      QS = gS(1181);

    function DS(SS) {
      let {
        icon: HS,
        title: gS,
        disabled: tS,
        children: bS
      } = SS;
      return (0, QS.jsxs)("div", {
        className: aS()("ManageCard", {
          ManageCardDisabled: tS
        }),
        children: [(0, QS.jsxs)("div", {
          className: "ManageCardHead",
          children: [(0, QS.jsx)("div", {
            className: "ManageCardIcon",
            children: (0, QS.jsx)(IS.d, {
              name: HS
            })
          }), (0, QS.jsx)("div", {
            children: (0, QS.jsx)("h2", {
              className: "ManageCardTitle",
              children: gS
            })
          })]
        }), (0, QS.jsxs)("div", {
          className: "ManageCardBody",
          children: [bS, tS && (0, QS.jsx)("div", {
            className: "ManageCardDisabledOverlay"
          })]
        })]
      })
    }

    function wS(SS) {
      let {
        label: HS,
        caption: gS,
        children: tS
      } = SS;
      return (0, QS.jsxs)("div", {
        className: "ManageStackedField",
        children: [(0, QS.jsx)("div", {
          className: "ManageStackedFieldLabel",
          children: HS
        }), tS, gS && (0, QS.jsx)("div", {
          className: "ManageStackedFieldCaption",
          children: gS
        })]
      })
    }

    function hS(SS) {
      let {
        label: HS,
        caption: gS,
        disabled: tS,
        children: bS
      } = SS;
      return (0, QS.jsxs)("div", {
        className: aS()("ManageField", {
          ManageFieldDisabled: tS
        }),
        children: [(0, QS.jsxs)("div", {
          className: "ManageFieldText",
          children: [(0, QS.jsx)("div", {
            className: "ManageFieldLabel",
            children: HS
          }), (0, QS.jsx)("div", {
            className: "ManageFieldCaption",
            children: gS
          })]
        }), (0, QS.jsx)("div", {
          className: "ManageFieldControl",
          children: bS
        })]
      })
    }

    function ZS(SS) {
      var HS, gS;
      let {
        schematicData: tS,
        updateSchematicData: bS,
        publishFormEnabled: XS,
        formEnabled: xS
      } = SS;
      const {
        t: qS
      } = (0, NS.F)(), uS = !XS, IS = {
        tpRequests: {
          isEnabled: () => !tS.disableTpRequests,
          MJ: SS => bS("disableTpRequests", !SS)
        },
        spawnProtection: {
          isEnabled: () => !tS.disableSpawnProtection,
          MJ: SS => bS("disableSpawnProtection", !SS)
        },
        spawnReset: {
          isEnabled: () => !!tS.enableSpawnReset,
          MJ: SS => bS("enableSpawnReset", SS)
        },
        smpMarketplace: {
          isEnabled: () => !!tS.enableSmpMarketplace,
          MJ: SS => bS("enableSmpMarketplace", SS)
        },
        survivalGuns: {
          isEnabled: () => !!tS.enableSurvivalGuns,
          MJ: SS => bS("enableSurvivalGuns", SS)
        },
        fallDamage: {
          isEnabled: () => !tS.disableFallDamage,
          MJ: SS => bS("disableFallDamage", !SS)
        },
        dayNight: {
          isEnabled: () => !!tS.enableDayNight,
          MJ: SS => bS("enableDayNight", SS)
        }
      };
      return (0, QS.jsxs)(QS.Fragment, {
        children: [!1 === tS.schematicContainsSpawnBlock && (0, QS.jsx)("div", {
          className: "ManageWarningBanner",
          children: qS("worldBuilder:mustContainSpawnBlock")
        }), (0, QS.jsxs)("div", {
          className: "ManageSettingsGrid",
          children: [(0, QS.jsxs)(DS, {
            icon: "globe",
            title: qS("worldBuilder:worldRulesSection"),
            disabled: !xS,
            children: [(0, QS.jsx)(hS, {
              label: qS("classic:defaultGamemode"),
              caption: qS("classic:defaultGamemodeDescription"),
              disabled: uS,
              children: (0, QS.jsx)(nS.e, {
                controlClassName: "ManageDropdown",
                options: jS.O.map((SS => ({
                  value: SS,
                  label: KS.t[SS]
                }))),
                value: tS.defaultGamemode,
                onChange: SS => bS("defaultGamemode", SS.value)
              })
            }), (0, QS.jsx)(hS, {
              label: qS("classic:voidDeathHeight"),
              caption: qS("classic:voidDeathHeightDescription"),
              disabled: uS,
              children: (0, QS.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, QS.jsx)("input", {
                  type: "number",
                  max: GS.G,
                  value: null !== (HS = tS.voidDeathHeight) && void 0 !== HS ? HS : "",
                  onChange: SS => {
                    const HS = parseInt(SS.target.value);
                    bS("voidDeathHeight", HS)
                  }
                }), (0, QS.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: qS("worldBuilder:blocksUnit")
                })]
              })
            }), (0, QS.jsx)(hS, {
              label: qS("classic:worldBorder"),
              caption: qS("classic:worldBorderDescription"),
              disabled: uS,
              children: (0, QS.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, QS.jsx)("input", {
                  type: "number",
                  min: GS.K,
                  max: GS.I,
                  placeholder: qS("worldBuilder:noWorldBorderLimit"),
                  value: null !== (gS = tS.worldBorder) && void 0 !== gS ? gS : "",
                  onChange: SS => {
                    const HS = parseInt(SS.target.value);
                    bS("worldBorder", isNaN(HS) ? null : HS)
                  }
                }), (0, QS.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: qS("worldBuilder:blocksUnit")
                })]
              })
            }), (0, QS.jsx)(hS, {
              label: qS("classic:disableMobs"),
              caption: qS("classic:disableMobsDescription"),
              disabled: uS,
              children: (0, QS.jsx)(CS.g, {
                checked: tS.disableMobs,
                setChecked: SS => bS("disableMobs", SS),
                disabled: uS
              })
            })]
          }), (0, QS.jsxs)(DS, {
            icon: "user-group",
            title: qS("worldBuilder:playerAndLobbySection"),
            disabled: !xS,
            children: [(0, QS.jsx)(hS, {
              label: qS("classic:disableKeepInventory"),
              caption: qS("classic:disableKeepInventoryDescription"),
              disabled: uS,
              children: (0, QS.jsx)(CS.g, {
                checked: tS.disableKeepInventory,
                setChecked: SS => bS("disableKeepInventory", SS),
                disabled: uS
              })
            }), (0, QS.jsx)(hS, {
              label: qS("classic:persistInventory"),
              caption: qS("classic:persistInventoryDescription"),
              disabled: uS,
              children: (0, QS.jsx)(nS.e, {
                controlClassName: "ManageDropdown",
                options: jS.t.map((SS => ({
                  value: SS,
                  label: KS.j[SS]
                }))),
                value: tS.persistInventory,
                onChange: SS => bS("persistInventory", SS.value)
              })
            }), (0, QS.jsx)(hS, {
              label: qS("classic:persistWorld"),
              caption: qS("classic:persistWorldDescription"),
              disabled: uS,
              children: (0, QS.jsx)(CS.g, {
                checked: tS.persistWorld,
                setChecked: SS => bS("persistWorld", SS),
                disabled: uS
              })
            }), (0, QS.jsx)(hS, {
              label: qS("classic:disableLobbySpawn"),
              caption: qS("classic:disableLobbySpawnDescription"),
              disabled: uS,
              children: (0, QS.jsx)(CS.g, {
                checked: tS.disableLobbySpawn,
                setChecked: SS => bS("disableLobbySpawn", SS),
                disabled: uS
              })
            }), (0, QS.jsx)(hS, {
              label: qS("classic:hideLobbyCode"),
              caption: qS("classic:hideLobbyCodeDescription"),
              disabled: uS,
              children: (0, QS.jsx)(CS.g, {
                checked: tS.hideLobbyCode,
                setChecked: SS => bS("hideLobbyCode", SS),
                disabled: uS
              })
            })]
          })]
        }), (0, QS.jsx)(DS, {
          icon: "layer-group",
          title: qS("worldBuilder:pluginsSection"),
          disabled: !xS,
          children: (0, QS.jsx)(PS.e, {
            callbacks: IS,
            disabled: uS,
            advancedMode: !0,
            hideWrapper: !0
          })
        })]
      })
    }
    var JS = gS(5107),
      OS = gS(4489),
      dS = gS(1588),
      cS = gS(3623),
      vS = gS(1211),
      ES = gS(5065),
      LS = gS(5114),
      YS = gS(1534);
    const AS = 50,
      yS = .3;
    async function VS(SS) {
      const HS = await
      function(SS) {
        return new Promise(((HS, gS) => {
          const tS = new FileReader;
          tS.onload = () => HS(tS.result), tS.onerror = gS, tS.readAsDataURL(SS)
        }))
      }(SS), gS = await
      function(SS) {
        return new Promise(((HS, gS) => {
          const tS = new Image;
          tS.onload = () => HS(tS), tS.onerror = () => gS(new Error("Failed to load image")), tS.src = SS
        }))
      }(HS);
      if (gS.naturalHeight > gS.naturalWidth) throw new iS;
      const tS = 1024 * AS,
        {
          dataUrl: bS,
          finalQuality: XS
        } = function(SS, HS) {
          const gS = document.createElement("canvas");
          gS.width = SS.naturalWidth, gS.height = SS.naturalHeight, gS.getContext("2d").drawImage(SS, 0, 0);
          let tS = .92,
            bS = gS.toDataURL("image/jpeg", tS);
          for (; .75 * bS.length > HS && tS > .05;) tS -= .05, bS = gS.toDataURL("image/jpeg", tS);
          return {
            dataUrl: bS,
            finalQuality: tS
          }
        }(gS, tS);
      if (Math.ceil(.75 * bS.length) > tS) throw new WS;
      return {
        base64Jpg: bS,
        heavilyCompressed: XS < yS
      }
    }
    class iS extends Error {}
    class WS extends Error {}
    var zS = function(SS) {
      return SS[SS.NOT_LOGGED_IN = 0] = "NOT_LOGGED_IN", SS[SS.THUMBNAIL_LIMIT_REACHED = 1] = "THUMBNAIL_LIMIT_REACHED", SS
    }(zS || {});

    function US(SS) {
      var HS;
      let {
        schematicId: gS,
        hasReadUploadPolicy: bS,
        onPolicyValidationError: qS,
        onThumbnailReady: uS
      } = SS;
      const {
        t: kS
      } = (0, NS.F)(), [KS, jS] = (0, tS.useState)(null), [GS, CS] = (0, tS.useState)(""), [nS, PS] = (0, tS.useState)(""), [DS, wS] = (0, tS.useState)(!0), [hS, ZS] = (0, tS.useState)(!1), JS = (0, tS.useRef)(!1), [OS, dS] = (0, tS.useState)(null), [cS, vS] = (0, tS.useState)(!1), [ES, YS] = (0, tS.useState)(!1), AS = (0, tS.useRef)(0), {
        getRootProps: yS,
        getInputProps: zS,
        isDragActive: US
      } = (0, LS.b)({
        accept: {
          "image/*": [".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp"]
        },
        multiple: !1,
        onDrop: async SS => {
          if (0 === SS.length) return;
          const HS = SS[0],
            gS = ++AS.current;
          dS(null), vS(!1), jS(null), CS(HS.name);
          try {
            const SS = await VS(HS);
            if (gS !== AS.current) return;
            jS(SS), vS(SS.heavilyCompressed)
          } catch (tS) {
            if (gS !== AS.current) return;
            dS(kS(tS instanceof iS ? "thumbnail:portraitImagesNotAllowed" : tS instanceof WS ? "thumbnail:couldNotCompressImage" : "thumbnail:failedToUploadImage"))
          }
        },
        useFsAccessApi: !1
      }), pS = GS.length <= 30 ? GS : `${GS.slice(0,27)}...`, sS = null !== (HS = null === KS || void 0 === KS ? void 0 : KS.base64Jpg) && void 0 !== HS ? HS : null, BS = nS.trim(), MS = BS.length >= fS.m && BS.length <= fS.i, FS = ES && !KS && !OS, RS = ES && !MS;
      return (0, QS.jsxs)("div", {
        className: "ThumbnailUploadContainer",
        children: [(0, QS.jsxs)("div", {
          ...yS({
            className: aS()("ThumbnailUploadDropzone", {
              ActiveDrag: US,
              ValidationError: FS
            })
          }),
          children: [(0, QS.jsx)("input", {
            ...zS()
          }), !US && sS ? (0, QS.jsxs)(QS.Fragment, {
            children: [(0, QS.jsxs)("div", {
              className: "ThumbnailAspectPreviews",
              children: [(0, QS.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, QS.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "1:1"
                }), (0, QS.jsx)("div", {
                  className: "ThumbnailAspectFrame Square",
                  children: (0, QS.jsx)("img", {
                    src: sS,
                    alt: "1:1 preview"
                  })
                })]
              }), (0, QS.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, QS.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "16:9"
                }), (0, QS.jsx)("div", {
                  className: "ThumbnailAspectFrame Wide",
                  children: (0, QS.jsx)("img", {
                    src: sS,
                    alt: "16:9 preview"
                  })
                })]
              })]
            }), (0, QS.jsxs)("div", {
              children: [(0, QS.jsx)("div", {
                className: "ThumbnailUploadInstructions Active",
                children: pS
              }), (0, QS.jsx)("div", {
                className: "ThumbnailUploadInstructions Preview",
                children: kS("thumbnail:preview")
              })]
            })]
          }) : (0, QS.jsxs)(QS.Fragment, {
            children: [(0, QS.jsx)("div", {
              className: "ThumbnailUploadIcon",
              children: (0, QS.jsx)(IS.d, {
                name: "image"
              })
            }), (0, QS.jsx)("div", {
              className: "ThumbnailUploadInstructions",
              children: kS("thumbnail:dragImageHere")
            })]
          })]
        }), FS && (0, QS.jsx)("div", {
          className: "ThumbnailUploadError",
          children: kS("thumbnail:imageRequired")
        }), (0, QS.jsx)(xS.e, {
          className: aS()("ThumbnailUploadNameInput", {
            ValidationError: RS
          }),
          placeholderText: kS("thumbnail:thumbnailName"),
          defaultValue: nS,
          onValueChange: SS => {
            PS(SS)
          },
          maxLength: fS.i
        }), RS && (0, QS.jsx)("div", {
          className: "ThumbnailUploadError",
          children: kS("thumbnail:nameRequired", {
            min: fS.m,
            max: fS.i
          })
        }), (0, QS.jsxs)("label", {
          className: "ThumbnailUploadCheckbox",
          children: [(0, QS.jsx)("input", {
            type: "checkbox",
            checked: DS,
            onChange: SS => {
              wS(SS.target.checked)
            }
          }), kS("thumbnail:setAsThumbnailOnceApproved")]
        }), cS && (0, QS.jsx)("div", {
          className: "ThumbnailUploadWarning",
          children: kS("thumbnail:heavyCompressionWarning")
        }), OS && (0, QS.jsx)("div", {
          className: "ThumbnailUploadError",
          children: OS
        }), (0, QS.jsx)(XS.p, {
          disabled: hS,
          className: "ThumbnailUploadButton",
          onClick: async () => {
            if (YS(!0), !JS.current && KS && MS && bS) {
              JS.current = !0, ZS(!0), dS(null);
              try {
                await uS(KS.base64Jpg, BS, DS ? gS : null)
              } catch (SS) {
                dS(SS.errorMessageForUser ? kS(SS.errorMessageForUser, SS.errorMessageTranslationParams) : kS("thumbnail:failedToUploadImage"))
              } finally {
                JS.current = !1, ZS(!1)
              }
            } else bS || qS()
          },
          children: kS(hS ? "thumbnail:processing" : "thumbnail:uploadThumbnail")
        })]
      })
    }
    const pS = 2e3;

    function sS(SS) {
      let {
        schematicId: HS,
        ownedThumbnailCount: gS,
        onClose: bS,
        onThumbnailReady: XS
      } = SS;
      const {
        t: xS
      } = (0, NS.F)(), {
        userContext: qS
      } = (0, vS.b)(), [uS, kS] = (0, tS.useState)(!1), [KS, jS] = (0, tS.useState)(!1), [GS, CS] = (0, tS.useState)(!1), nS = (0, tS.useRef)();
      (0, tS.useEffect)((() => () => {
        clearTimeout(nS.current)
      }), []);
      const PS = function(SS, HS) {
        const gS = [];
        return SS.isLoggedIn() || gS.push(zS.NOT_LOGGED_IN), HS >= fS.W && gS.push(zS.THUMBNAIL_LIMIT_REACHED), gS
      }(qS, gS);
      if (PS.length > 0) {
        const SS = {
          [zS.NOT_LOGGED_IN]: {
            key: "thumbnail:mustBeLoggedInToUpload"
          },
          [zS.THUMBNAIL_LIMIT_REACHED]: {
            key: "thumbnail:thumbnailLimitReachedPleaseDelete",
            params: {
              max: fS.W
            }
          }
        };
        return (0, QS.jsxs)("div", {
          className: "ThumbnailUploaderInner",
          children: [(0, QS.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: xS("thumbnail:cannotUploadThumbnail")
          }), PS.map(((HS, gS) => {
            const tS = SS[HS];
            return (0, QS.jsxs)("div", {
              className: "CannotUploadThumbnailItem",
              children: [(0, QS.jsx)(IS.d, {
                name: "triangle-exclamation"
              }), (0, QS.jsx)("span", {
                children: xS(tS.key, tS.params)
              })]
            }, gS)
          }))]
        })
      }
      return (0, QS.jsxs)("div", {
        className: aS()("ThumbnailUploaderInner", {
          ThumbnailUploaderSuccess: uS
        }),
        children: [uS && (0, QS.jsxs)("div", {
          className: "ThumbnailUploadSuccessOverlay",
          children: [(0, QS.jsxs)("div", {
            className: "ThumbnailUploadSuccessIcon FullyFancyText AnimFadeInScaleUp",
            children: [(0, QS.jsx)(IS.d, {
              name: "check"
            }), (0, QS.jsx)(YS.d, {})]
          }), (0, QS.jsx)("div", {
            className: "ThumbnailUploadSuccessText AnimFadeInScaleUp",
            children: xS("thumbnail:thumbnailUploaded")
          })]
        }), (0, QS.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: xS("thumbnail:uploadThumbnail")
        }), (0, QS.jsxs)("div", {
          className: "ThumbnailUploaderBody",
          children: [(0, QS.jsxs)("div", {
            className: "ThumbnailUploaderLeft",
            children: [(0, QS.jsx)("h3", {
              className: "SchematicPopupSubtitle",
              children: xS("thumbnail:chooseImage", {
                maxSizeKb: AS
              })
            }), (0, QS.jsx)(US, {
              schematicId: HS,
              hasReadUploadPolicy: KS,
              onPolicyValidationError: () => {
                CS(!0)
              },
              onThumbnailReady: async (SS, HS, gS) => {
                await XS(SS, HS, gS), kS(!0), nS.current = setTimeout(bS, pS)
              }
            })]
          }), (0, QS.jsxs)("div", {
            className: "ThumbnailUploadPolicy",
            children: [(0, QS.jsx)("h3", {
              className: "ThumbnailUploadPolicyTitle",
              children: xS("thumbnail:uploadPolicy")
            }), (0, QS.jsxs)("ul", {
              className: "ThumbnailUploadPolicyList",
              children: [(0, QS.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, QS.jsx)(IS.d, {
                  name: "check"
                }), (0, QS.jsx)("span", {
                  children: xS("thumbnail:policyFollowGuidelines")
                })]
              }), (0, QS.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, QS.jsx)(IS.d, {
                  name: "check"
                }), (0, QS.jsx)("span", {
                  children: xS("thumbnail:policyInGameAssets")
                })]
              }), (0, QS.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, QS.jsx)(IS.d, {
                  name: "check"
                }), (0, QS.jsx)("span", {
                  children: xS("thumbnail:policyLimitText")
                })]
              }), (0, QS.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, QS.jsx)(IS.d, {
                  name: "x"
                }), (0, QS.jsx)("span", {
                  children: xS("thumbnail:policyCopyrightContent")
                })]
              }), (0, QS.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, QS.jsx)(IS.d, {
                  name: "x"
                }), (0, QS.jsx)("span", {
                  children: xS("thumbnail:policyOutOfGameAssets")
                })]
              }), (0, QS.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, QS.jsx)(IS.d, {
                  name: "x"
                }), (0, QS.jsx)("span", {
                  children: xS("thumbnail:policyBloxdTags")
                })]
              }), (0, QS.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, QS.jsx)(IS.d, {
                  name: "x"
                }), (0, QS.jsx)("span", {
                  children: xS("thumbnail:policyMustReflectGame")
                })]
              })]
            }), (0, QS.jsxs)("label", {
              className: aS()("ThumbnailUploadCheckbox Policy", {
                ValidationError: GS && !KS
              }),
              children: [(0, QS.jsx)("input", {
                type: "checkbox",
                checked: KS,
                onChange: SS => {
                  jS(SS.target.checked)
                }
              }), xS("thumbnail:agreeToUploadPolicy")]
            }), GS && !KS && (0, QS.jsx)("div", {
              className: "ThumbnailPolicyError",
              children: xS("thumbnail:policyRequired")
            })]
          })]
        })]
      })
    }
    var BS = gS(1286);
    const MS = {
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

    function FS(SS) {
      var HS, gS;
      let {
        schematicData: xS,
        updateSchematicData: uS,
        publishFormEnabled: fS,
        onClose: kS
      } = SS;
      const {
        t: KS
      } = (0, NS.F)(), {
        userContext: jS,
        isUserContextUpdating: GS
      } = (0, vS.b)(), CS = (0, cS.b)(), [nS, PS] = (0, tS.useState)([]), [DS, wS] = (0, tS.useState)([]), [hS, ZS] = (0, tS.useState)(!0), [JS, OS] = (0, tS.useState)(null !== (HS = xS.customThumbnailId) && void 0 !== HS ? HS : null), [LS, YS] = (0, tS.useState)(null), AS = (0, tS.useRef)(null !== (gS = xS.customThumbnailId) && void 0 !== gS ? gS : null), yS = (0, tS.useRef)(0), VS = (0, tS.useRef)(null), iS = (0, tS.useRef)(null), WS = (0, tS.useRef)(null), zS = (0, tS.useRef)(!1);

      function US(SS, HS) {
        WS.current && (clearTimeout(WS.current), WS.current = null), YS(SS), null !== SS && HS && (WS.current = setTimeout((() => {
          YS(null), WS.current = null
        }), 5e3))
      }(0, tS.useEffect)((() => () => {
        clearTimeout(iS.current), clearTimeout(WS.current)
      }), []);
      const pS = (0, tS.useCallback)((() => {
        ZS(!0), dS.b.getOwnedThumbnails(jS).then((SS => {
          const HS = [],
            gS = [];
          for (const tS of SS.thumbnails) tS.rejectionPolicyId ? HS.push(tS) : gS.push(tS);
          HS.sort(((SS, HS) => SS.lastUpdatedAt - HS.lastUpdatedAt)), gS.sort(((SS, HS) => {
            const gS = SS.approved ? 1 : 0,
              tS = (HS.approved ? 1 : 0) - gS;
            return 0 !== tS ? tS : HS.lastUpdatedAt - SS.lastUpdatedAt
          })), wS(HS), PS(gS)
        })).catch((SS => {
          console.error("Failed to fetch thumbnails:", SS)
        })).finally((() => {
          ZS(!1)
        }))
      }), [jS]);
      async function MS(SS, HS, gS) {
        return dS.b.uploadSchematicThumbnail(jS, SS, HS, gS).then((() => {
          US({
            text: KS("thumbnail:uploadedAwaitingModeration"),
            type: "success"
          }, !0), pS()
        }))
      }

      function FS() {
        yS.current = Date.now(), iS.current = null;
        const SS = VS.current;
        VS.current = null, US({
          text: KS("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), dS.b.setSchematicThumbnail(jS, xS.schematicId, SS).then((() => {
          CS.current && (US({
            text: KS("thumbnail:thumbnailUpdated"),
            type: "success"
          }, !0), AS.current = SS, uS("customThumbnailId", SS), uS("customThumbnailBlurhash", void 0), uS("customThumbnailVariants", void 0))
        })).catch((SS => {
          CS.current && (US({
            text: SS.errorMessageForUser ? KS(SS.errorMessageForUser, SS.errorMessageTranslationParams) : KS("thumbnail:failedToSetThumbnail"),
            type: "error"
          }, !0), OS(AS.current))
        }))
      }

      function oS(SS) {
        OS(SS), VS.current = SS;
        const HS = Date.now() - yS.current;
        HS >= 1e3 ? FS() : (US({
          text: KS("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), iS.current || (iS.current = setTimeout((() => {
          FS()
        }), 1e3 - HS)))
      }
      return (0, tS.useEffect)((() => {
        !1 === GS && pS()
      }), [GS, pS]), DS.length > 0 ? (0, QS.jsx)(RS, {
        rejectedThumbnails: DS,
        userContext: jS,
        isMountedRef: CS,
        onAcknowledged: pS
      }) : (0, QS.jsxs)("div", {
        className: "BloxdForm ThumbnailSection",
        children: [(0, QS.jsxs)("div", {
          className: "SectionTitle",
          children: [KS("thumbnail:gameThumbnail"), LS && (0, QS.jsx)("span", {
            className: aS()("ThumbnailActionMsg", `ThumbnailActionMsg--${LS.type}`),
            children: LS.text
          })]
        }), (0, QS.jsx)("div", {
          className: "SectionBody",
          children: (0, QS.jsxs)("div", {
            className: "ThumbnailGrid",
            children: [(0, QS.jsxs)("div", {
              className: aS()("ThumbnailGridItem ThumbnailGridItemDefault", {
                ThumbnailGridItemSelected: null === JS
              }),
              onClick: () => oS(null),
              children: [(0, QS.jsx)(ES.d, {
                game: {
                  schematicId: xS.schematicId,
                  imageBlurhash: xS.imageBlurhash
                }
              }), (0, QS.jsx)("div", {
                className: "ThumbnailGridItemLabel ThumbnailDefaultLabel",
                children: KS("general:default")
              })]
            }), hS && (0, QS.jsx)(qS.c, {}), nS.map(((SS, HS) => (0, QS.jsxs)("div", {
              className: aS()("ThumbnailGridItem", {
                ThumbnailGridItemSelected: JS === SS.id,
                ThumbnailGridItemPending: !SS.approved
              }),
              onClick: () => {
                SS.approved && oS(SS.id)
              },
              children: [SS.approved && (0, QS.jsx)("img", {
                src: `${BS.clientSideServerUrls.s3Url}/customThumbnails/${SS.id}.jpg`,
                alt: "Thumbnail"
              }), SS.approved && (0, QS.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: SS.name
              }), SS.id && (0, QS.jsx)(XS.L, {
                className: "ThumbnailDeleteButton",
                onClick: HS => async function(SS, HS, gS) {
                  SS.stopPropagation();
                  const tS = await bS.NotificationProvider.showCustomPopup({
                      body: SS => (0, QS.jsx)(TS, {
                        thumbnailId: HS,
                        thumbnailName: gS,
                        onClose: HS => {
                          HS && (zS.current = !0), SS()
                        }
                      }),
                      middleScreenPopupClassName: "ThumbnailDeleteConfirmPopup",
                      onClose: kS
                    }).getResult(),
                    XS = zS.current;
                  zS.current = !1, XS && !0 === tS && (CS.current && US({
                    text: KS("thumbnail:deletingThumbnail"),
                    type: "info"
                  }, !1), dS.b.deleteSchematicThumbnail(jS, HS).then((() => {
                    CS.current && (US({
                      text: KS("thumbnail:thumbnailDeleted"),
                      type: "success"
                    }, !0), AS.current === HS && oS(null), pS())
                  })).catch((SS => {
                    CS.current && US({
                      text: SS.errorMessageForUser ? KS(SS.errorMessageForUser, SS.errorMessageTranslationParams) : KS("thumbnail:failedToDeleteThumbnail"),
                      type: "error"
                    }, !0)
                  })))
                }(HS, SS.id, SS.name),
                children: (0, QS.jsx)(IS.d, {
                  name: "trash-can"
                })
              }), !SS.approved && (0, QS.jsx)("div", {
                className: "ThumbnailUnapprovedIcon",
                children: (0, QS.jsx)(IS.d, {
                  name: "hourglass-clock"
                })
              }), !SS.approved && (0, QS.jsxs)("div", {
                className: "ThumbnailGridItemLabel ThumbnailPendingLabel",
                children: [SS.name, (0, QS.jsx)("br", {}), KS("thumbnail:pendingApproval")]
              })]
            }, HS))), (0, QS.jsxs)("div", {
              className: aS()("ThumbnailGridItem ThumbnailUploadTile", {
                ThumbnailUploadTileDisabled: !fS
              }),
              onClick: () => {
                fS && function(SS) {
                  let {
                    schematicId: HS,
                    ownedThumbnailCount: gS,
                    onThumbnailReady: tS,
                    onClose: XS
                  } = SS;
                  bS.NotificationProvider.showCustomPopup({
                    body: SS => (0, QS.jsx)(sS, {
                      schematicId: HS,
                      ownedThumbnailCount: gS,
                      onClose: SS,
                      onThumbnailReady: tS
                    }),
                    middleScreenPopupClassName: "SchematicThumbnailPopup",
                    onClose: XS,
                    unlockPointerKey: "schematicThumbnailUploaderPopup"
                  })
                }({
                  schematicId: xS.schematicId,
                  ownedThumbnailCount: nS.length,
                  onThumbnailReady: MS,
                  onClose: kS
                })
              },
              children: [(0, QS.jsx)(IS.d, {
                name: "plus"
              }), (0, QS.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: KS("thumbnail:uploadThumbnail")
              })]
            })]
          })
        })]
      })
    }

    function RS(SS) {
      let {
        rejectedThumbnails: HS,
        userContext: gS,
        isMountedRef: bS,
        onAcknowledged: xS
      } = SS;
      const {
        t: uS
      } = (0, NS.F)(), [fS, kS] = (0, tS.useState)(!1), [aS, KS] = (0, tS.useState)(!1), jS = function(SS) {
        const HS = new Map;
        for (const gS of SS) {
          const SS = gS.rejectionPolicyId,
            tS = HS.get(SS);
          tS ? tS.push(gS) : HS.set(SS, [gS])
        }
        return HS
      }(HS);
      return (0, QS.jsxs)("div", {
        className: "ThumbnailRejectionNotice",
        children: [(0, QS.jsxs)("div", {
          className: "ThumbnailRejectionNoticeTitle",
          children: [(0, QS.jsx)(IS.d, {
            name: "triangle-exclamation"
          }), " ", uS("thumbnail:thumbnailsRejected"), " ", (0, QS.jsx)(IS.d, {
            name: "triangle-exclamation"
          })]
        }), (0, QS.jsx)("div", {
          className: "ThumbnailRejectionNoticeSubtitle",
          children: uS("thumbnail:thumbnailsRejectedDescription")
        }), (0, QS.jsx)("div", {
          className: "ThumbnailRejectionNoticeList",
          children: [...jS.entries()].map((SS => {
            let [HS, gS] = SS;
            const tS = MS[HS];
            return (0, QS.jsxs)("div", {
              className: "ThumbnailRejectionNoticeGroup",
              children: [(0, QS.jsx)("div", {
                className: "ThumbnailRejectionNoticeItems",
                children: gS.map((SS => (0, QS.jsxs)("div", {
                  className: "ThumbnailRejectionNoticeItem",
                  children: [(0, QS.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemIcon",
                    children: (0, QS.jsx)(IS.d, {
                      name: "image-slash"
                    })
                  }), (0, QS.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemDetails",
                    children: (0, QS.jsx)("div", {
                      className: "ThumbnailRejectionNoticeItemName",
                      children: SS.name
                    })
                  })]
                }, SS.id)))
              }), (0, QS.jsxs)("div", {
                className: "ThumbnailRejectionNoticeGroupReason",
                children: [uS("thumbnail:rejectionReason"), " ", tS ? uS(tS.reason) : HS]
              }), tS && (0, QS.jsx)("ul", {
                className: "ThumbnailRejectionNoticeGroupTips",
                children: tS.tips.map((SS => (0, QS.jsx)("li", {
                  children: uS(SS)
                }, SS)))
              })]
            }, HS)
          }))
        }), (0, QS.jsxs)("label", {
          className: "ThumbnailRejectionNoticeCheckbox",
          children: [(0, QS.jsx)(OS.c, {
            checked: fS,
            onChange: SS => kS(SS.target.checked),
            disabled: aS
          }), (0, QS.jsx)("span", {
            children: uS("thumbnail:haveReadRejectionReasons")
          })]
        }), (0, QS.jsx)(XS.p, {
          onClick: async function() {
            KS(!0);
            const SS = await Promise.allSettled(HS.map((SS => dS.b.deleteSchematicThumbnail(gS, SS.id))));
            if (!bS.current) return;
            const tS = SS.filter((SS => "rejected" === SS.status));
            tS.length > 0 && console.error("Some rejected thumbnails failed to delete:", tS), xS()
          },
          disabled: !fS || aS,
          className: "ThumbnailRejectionNoticeAcceptButton",
          children: aS ? (0, QS.jsx)(qS.c, {}) : uS("general:accept")
        })]
      })
    }

    function TS(SS) {
      let {
        thumbnailId: HS,
        thumbnailName: gS,
        onClose: tS
      } = SS;
      const {
        t: bS
      } = (0, NS.F)();
      return (0, QS.jsxs)("div", {
        className: "ThumbnailDeleteConfirm",
        children: [(0, QS.jsx)("div", {
          className: "ThumbnailDeleteConfirmTitle",
          children: bS("thumbnail:deleteThumbnail")
        }), (0, QS.jsxs)("div", {
          className: "ThumbnailDeleteConfirmImageContainer",
          children: [(0, QS.jsx)("img", {
            className: "ThumbnailDeleteConfirmImage",
            src: `${BS.clientSideServerUrls.s3Url}/customThumbnails/${HS}.jpg`,
            alt: "Thumbnail to delete"
          }), (0, QS.jsx)("div", {
            className: "ThumbnailGridItemLabel",
            children: gS
          })]
        }), (0, QS.jsx)("div", {
          className: "ThumbnailDeleteConfirmSubtitle",
          children: bS("thumbnail:deleteThumbnailConfirmation")
        }), (0, QS.jsxs)("div", {
          className: "ThumbnailDeleteConfirmButtons",
          children: [(0, QS.jsxs)(XS.L, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => tS(!0),
            children: [(0, QS.jsx)(IS.d, {
              name: "trash-can"
            }), " ", bS("general:delete")]
          }), (0, QS.jsx)(XS.j, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => tS(!1),
            children: bS("general:cancel")
          })]
        })]
      })
    }
    var oS = gS(2256),
      lS = gS(5133),
      mS = gS(5142),
      eS = gS(5195);

    function rS(SS) {
      let {
        schematicData: HS,
        setTexturePack: gS,
        initializeTexturePack: bS,
        publishFormEnabled: XS
      } = SS;
      const {
        t: xS
      } = (0, NS.F)(), [qS, uS] = (0, tS.useState)(null), [IS, fS] = (0, tS.useState)(null), [kS, KS] = (0, tS.useState)(!1), jS = (0, cS.b)(), GS = XS && !kS, CS = HS.customTexturePackKey;

      function nS(SS) {
        var HS;
        uS(SS.metaData.id), fS(null !== (HS = SS.metaData.fromFolderName) && void 0 !== HS ? HS : null), (SS.metaData.id !== oS.q.CUSTOM || SS.metaData.fromFolderName) && gS(SS)
      }
      return (0, tS.useEffect)((() => {
        CS && (KS(!0), (0, lS.e)(CS).then((SS => {
          var HS;
          jS.current && (SS ? (uS(SS.metaData.id), fS(null !== (HS = SS.metaData.fromFolderName) && void 0 !== HS ? HS : null), bS(SS)) : console.error(`No texture pack at ${CS}`))
        })).catch((SS => {
          console.error("Error fetching texture pack: ", SS)
        })).finally((() => {
          KS(!1)
        })))
      }), [CS, bS, jS]), (0, QS.jsxs)("div", {
        className: "BloxdForm TexturePackSection",
        children: [(0, QS.jsx)("div", {
          className: "SectionTitle",
          children: xS("customTexturePack:customTexturePack")
        }), (0, QS.jsxs)("div", {
          className: "TexturePackList",
          children: [(0, QS.jsx)("div", {
            className: aS()("TexturePack", {
              Selected: null === qS && !kS,
              Disabled: !GS
            }),
            onClick: () => {
              GS && (uS(null), gS(null), fS(null))
            },
            children: (0, QS.jsx)("div", {
              className: "TexturePackName",
              children: "No Override"
            })
          }), Object.values(oS.q).map((SS => (0, QS.jsx)(mS.c, {
            id: SS,
            isSelected: SS === qS,
            setSelected: nS,
            disabled: !GS
          }, SS)))]
        }), qS === oS.q.CUSTOM && (0, QS.jsx)(eS.d, {
          folderName: IS,
          onTexturePackUpdated: nS,
          disabled: !GS,
          maxFileSizeMb: 25,
          packOwner: "customGame"
        })]
      })
    }
    var SH = gS(5244);

    function HH(SS) {
      var HS;
      let {
        gameCategory: gS,
        setGameCategory: tS,
        disabled: bS
      } = SS;
      const xS = null !== (HS = (0, KS.kb)(gS)) && void 0 !== HS ? HS : "other";
      return (0, QS.jsxs)("div", {
        className: "GameCategoryPicker",
        children: [(0, QS.jsx)(CS.d, {
          label: "worldBuilder:gameCategoryGroup",
          className: "GameCategoryGroup",
          disabled: bS,
          children: (0, QS.jsx)(nS.e, {
            options: KS.$.map((SS => ({
              value: SS,
              label: KS.Z[SS]
            }))),
            value: xS,
            onChange: SS => {
              SS.value !== xS && tS(KS.U[SS.value][0])
            }
          })
        }), (0, QS.jsx)(CS.d, {
          label: "worldBuilder:gameCategory",
          className: "GameCategory",
          disabled: bS,
          children: (0, QS.jsx)("div", {
            className: "GameCategoryOptions",
            children: KS.U[xS].map((SS => (0, QS.jsx)(XS.P, {
              active: SS === gS,
              onClick: () => {
                tS(SS)
              },
              children: (0, KS.hb)(SS)
            }, SS)))
          })
        })]
      })
    }

    function gH(SS) {
      let {
        editor: HS,
        onClose: gS
      } = SS;
      const {
        t: tS
      } = (0, NS.F)(), {
        schematicData: bS,
        updateSchematicData: XS,
        publishFormEnabled: qS,
        formEnabled: uS
      } = HS;
      return (0, QS.jsxs)(QS.Fragment, {
        children: [(0, QS.jsxs)(DS, {
          icon: "pen-to-square",
          title: tS("worldBuilder:basicsSection"),
          disabled: !uS,
          children: [(0, QS.jsx)(wS, {
            label: tS("general:name"),
            caption: tS("worldBuilder:schematicNameTagsHint"),
            children: (0, QS.jsx)(xS.e, {
              className: "SchematicPageName",
              defaultValue: bS.name,
              onValueChange: SS => XS("name", SS),
              placeholderText: tS("worldBuilder:schematicNamePlaceholder"),
              maxLength: fS.mb
            })
          }), (0, QS.jsx)(wS, {
            label: tS("general:description"),
            children: (0, QS.jsx)(xS.e, {
              className: "SchematicPageDescription",
              useTextarea: !0,
              defaultValue: bS.description,
              onValueChange: SS => XS("description", SS),
              placeholderText: tS("worldBuilder:schematicDescriptionPlaceholder"),
              maxLength: fS.kb
            })
          }), (0, QS.jsx)(HH, {
            gameCategory: bS.gameCategory,
            setGameCategory: SS => XS("gameCategory", SS),
            disabled: !qS
          }), !0 === bS.gamePublished && (0, QS.jsx)(FS, {
            schematicData: bS,
            updateSchematicData: XS,
            publishFormEnabled: qS,
            onClose: function() {
              null === gS || void 0 === gS || gS()
            }
          })]
        }), (0, QS.jsx)(ZS, {
          schematicData: bS,
          updateSchematicData: XS,
          publishFormEnabled: qS,
          formEnabled: uS
        }), !0 === bS.gamePublished && (0, QS.jsx)(DS, {
          icon: "palette",
          title: tS("worldBuilder:texturePackSection"),
          disabled: !uS,
          children: (0, QS.jsx)(rS, {
            schematicData: bS,
            setTexturePack: HS.setTexturePack,
            initializeTexturePack: HS.initializeTexturePack,
            publishFormEnabled: qS
          })
        })]
      })
    }

    function tH(SS) {
      let {
        editor: HS
      } = SS;
      const {
        t: gS
      } = (0, NS.F)(), {
        schematicData: tS,
        formEnabled: bS,
        hasUnsavedChanges: xS
      } = HS, fS = bS && xS;
      return (0, QS.jsxs)("footer", {
        className: "SchematicPageFooter",
        children: [bS && xS && (0, QS.jsxs)("div", {
          className: "SchematicPageFooterStatus",
          children: [(0, QS.jsx)("span", {
            className: "SchematicPageFooterStatusDot"
          }), gS("worldBuilder:unsavedChanges")]
        }), (0, QS.jsx)(uS.h, {
          tooltipInner: (0, QS.jsx)("div", {
            className: "SaveButtonTooltip",
            children: gS(bS && !xS ? "worldBuilder:saveChangesNoneDescription" : "worldBuilder:saveChangesDescription")
          }),
          children: (0, QS.jsxs)(XS.g, {
            className: "SaveChangesButton",
            onClick: () => HS.saveSchematic(tS.gamePublished),
            disabled: !fS,
            children: [(0, QS.jsxs)("span", {
              className: bS ? "" : "SaveChangesButtonBodyHidden",
              children: [(0, QS.jsx)(IS.d, {
                name: "wrench"
              }), " ", gS("worldBuilder:saveChanges")]
            }), !bS && (0, QS.jsx)(qS.c, {})]
          })
        })]
      })
    }

    function bH(SS) {
      let {
        schematic: HS,
        onSchematicUpdate: gS,
        onClose: bS,
        inSourceWorld: xS
      } = SS;
      const {
        t: qS
      } = (0, NS.F)();

      function uS() {
        null === bS || void 0 === bS || bS()
      }
      const IS = (0, SH.e)(HS, {
        onNavigateAway: uS,
        inSourceWorld: xS
      });
      return (0, tS.useEffect)((() => {
        null === gS || void 0 === gS || gS(IS.schematicData)
      }), [IS.schematicData, gS]), (0, QS.jsxs)("div", {
        className: "SchematicPage SchematicPagePopupVariant",
        children: [(0, QS.jsxs)("div", {
          className: "SchematicPageBody",
          children: [(0, QS.jsx)(XS.d, {
            onClick: uS,
            children: qS("worldBuilder:back")
          }), (0, QS.jsx)(DS, {
            icon: "rocket-launch",
            title: qS("worldBuilder:actionsSection"),
            disabled: !IS.formEnabled,
            children: (0, QS.jsx)(JS.b, {
              editor: IS
            })
          }), (0, QS.jsx)(gH, {
            editor: IS,
            onClose: uS
          })]
        }), (0, QS.jsx)(tH, {
          editor: IS
        })]
      })
    }

    function XH(SS) {
      let {
        schematic: HS,
        onSchematicUpdate: gS,
        onClose: tS,
        inSourceWorld: XS
      } = SS;
      bS.NotificationProvider.showCustomPopup({
        body: SS => (0, QS.jsx)(bH, {
          schematic: HS,
          onSchematicUpdate: gS,
          onClose: SS,
          inSourceWorld: XS
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: tS,
        unlockPointerKey: "schematicPagePopup"
      })
    }
  },
  5107: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => fS
    });
    var tS = gS(1121),
      bS = gS.n(tS),
      XS = gS(1281),
      xS = gS(1127),
      NS = gS(1528),
      qS = gS(1444),
      uS = gS(1419),
      IS = gS(1181);

    function fS(SS) {
      let {
        editor: HS,
        className: gS
      } = SS;
      const {
        t: tS
      } = (0, XS.F)(), {
        schematicData: fS,
        formEnabled: kS,
        publishFormEnabled: aS
      } = HS, KS = !kS || !aS;
      return (0, IS.jsxs)("div", {
        className: bS()("PublishButtonContainer", gS),
        children: [HS.canEditSourceWorld && (0, IS.jsxs)(NS.g, {
          onClick: HS.editSourceWorld,
          disabled: KS,
          children: [(0, IS.jsx)(xS.d, {
            name: "edit"
          }), " ", tS("worldBuilder:editSourceWorld")]
        }), !fS.gamePublished && (0, IS.jsx)(qS.h, {
          tooltipInner: (0, IS.jsx)("div", {
            className: "PublishButtonTooltip",
            children: tS("worldBuilder:publishAsGameDescription")
          }),
          children: (0, IS.jsxs)(NS.p, {
            onClick: () => HS.saveSchematic(!0),
            disabled: KS,
            children: [(0, IS.jsx)(xS.d, {
              name: "rocket-launch"
            }), " ", tS("worldBuilder:publishAsGame"), " ", (0, IS.jsx)(xS.d, {
              name: "info-circle"
            })]
          })
        }), !0 === fS.gamePublished && (0, IS.jsxs)(IS.Fragment, {
          children: [(0, IS.jsx)(qS.h, {
            tooltipInner: (0, IS.jsx)("div", {
              className: "PublishButtonTooltip",
              children: tS("worldBuilder:unpublishAsGameDescription")
            }),
            children: (0, IS.jsxs)(NS.L, {
              onClick: HS.unpublishSchematic,
              disabled: KS,
              children: [(0, IS.jsx)(xS.d, {
                name: "rocket-launch"
              }), " ", tS("worldBuilder:unpublishAsGame"), " ", (0, IS.jsx)(xS.d, {
                name: "info-circle"
              })]
            })
          }), (0, IS.jsxs)(NS.g, {
            onClick: HS.playGame,
            disabled: KS,
            children: [(0, IS.jsx)(xS.d, {
              name: "joystick"
            }), " ", tS("general:playGame")]
          })]
        }), !kS && (0, IS.jsx)(uS.c, {
          loaderType: "Secondary"
        })]
      })
    }
  },
  5133: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => bS
    });
    var tS = gS(1286);
    async function bS(SS) {
      const HS = await fetch(`${tS.clientSideServerUrls.s3Url}/${SS}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === HS.status || 403 === HS.status) return null;
      if (!HS.ok) throw new Error(`Failed to download the texture pack (${HS.status})`);
      return await HS.json()
    }
  },
  5244: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => GS
    });
    var tS = gS(64),
      bS = gS(1406),
      XS = gS(1087),
      xS = gS(160),
      NS = gS(1647),
      qS = gS(24),
      uS = gS(2060),
      IS = gS(1588),
      fS = gS(4712),
      kS = gS(1435),
      aS = gS(1211),
      KS = gS(1608);

    function jS(SS, HS) {
      return {
        schematicId: SS.schematicId,
        name: SS.name,
        description: SS.description,
        gamePublished: HS,
        gameCategory: SS.gameCategory,
        defaultGamemode: SS.defaultGamemode,
        voidDeathHeight: SS.voidDeathHeight,
        disableKeepInventory: SS.disableKeepInventory,
        disableTpRequests: SS.disableTpRequests,
        disableLobbySpawn: SS.disableLobbySpawn,
        disableMobs: SS.disableMobs,
        disableSpawnProtection: SS.disableSpawnProtection,
        disableFallDamage: SS.disableFallDamage,
        worldBorder: SS.worldBorder,
        hideLobbyCode: SS.hideLobbyCode,
        enableSmpMarketplace: SS.enableSmpMarketplace,
        enableSurvivalGuns: SS.enableSurvivalGuns,
        enableSpawnReset: SS.enableSpawnReset,
        enableDayNight: SS.enableDayNight,
        persistWorld: SS.persistWorld,
        persistInventory: SS.persistInventory
      }
    }

    function GS(SS) {
      let {
        onNavigateAway: HS,
        inSourceWorld: gS = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const {
        userContext: GS
      } = (0, aS.b)(), CS = (0, KS.useNavigatePreserveSearch)(), [nS, PS] = (0, tS.useState)({
        ...SS
      }), [QS, DS] = (0, tS.useState)("Enter"), [wS, hS] = (0, tS.useState)(void 0), ZS = (0, tS.useRef)(jS(SS, SS.gamePublished)), JS = (0, tS.useRef)(void 0), OS = "Enter" === QS, dS = GS.playerHasRank("developer") || GS.playerHasRank("admin") || "Enter" === QS && !1 !== nS.schematicContainsSpawnBlock, cS = void 0 !== wS && wS !== JS.current || JSON.stringify(jS(nS, nS.gamePublished)) !== JSON.stringify(ZS.current);

      function vS(SS, HS) {
        PS((gS => ({
          ...gS,
          [SS]: HS
        })))
      }
      const ES = (0, tS.useCallback)((SS => {
        JS.current = SS, hS(SS)
      }), []);

      function LS(SS) {
        DS("Loading");
        const HS = jS(nS, SS),
          gS = wS !== JS.current ? wS : void 0;
        IS.b.updateSchematic(GS, HS, gS).then((gS => {
          let {
            customTexturePackKey: tS
          } = gS;
          DS("Success"), vS("customTexturePackKey", tS), ZS.current = HS, JS.current = void 0, hS(void 0), setTimeout((() => {
            vS("gamePublished", SS), DS("Enter")
          }), 1e3)
        })).catch((SS => {
          var HS;
          (console.error("Failed to save schematic:", SS), DS("Error"), SS instanceof xS.b && SS.errorMessageForUser) && kS.NotificationProvider.showAlertPopup({
            title: "worldBuilder:changesNotSaved",
            subtitle: SS.errorMessageForUser,
            textOpts: {
              subtitle: null !== (HS = SS.errorMessageTranslationParams) && void 0 !== HS ? HS : void 0
            },
            confirmText: "general:ok"
          });
          setTimeout((() => {
            DS("Enter")
          }), 1e3)
        }))
      }
      return {
        schematicData: nS,
        updateSchematicData: vS,
        setTexturePack: hS,
        initializeTexturePack: ES,
        updateState: QS,
        formEnabled: OS,
        publishFormEnabled: dS,
        hasUnsavedChanges: cS,
        canEditSourceWorld: !gS,
        saveSchematic: LS,
        unpublishSchematic: function() {
          kS.NotificationProvider.showPromptPopup({
            icon: "rocket-launch",
            title: "worldBuilder:unpublishAsGameConfirmTitle",
            subtitle: "worldBuilder:unpublishAsGameConfirmSubtitle",
            confirmText: "worldBuilder:unpublishAsGame",
            cancelText: "general:cancel",
            unlockPointerKey: "unpublishGamePrompt"
          }).getResult().then((SS => {
            !0 === SS && LS(!1)
          }))
        },
        editSourceWorld: function() {
          DS("Loading"), fS.e.getSourceWorld(nS.schematicId).then((SS => {
            uS.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, qS.k)("other"), CS((0, bS.d)("classic", SS)), null === HS || void 0 === HS || HS()
          })).catch((SS => {
            console.error("Failed to get source world:", SS), DS("Error"), setTimeout((() => {
              DS("Enter")
            }), 1e3)
          }))
        },
        playGame: function() {
          uS.gameBridge.send("leaveGame", {
            reloadPath: "/"
          }), CS((0, NS.z)((0, XS.y)(nS.schematicId), nS)), null === HS || void 0 === HS || HS()
        }
      }
    }
  },
  5099: () => {}
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);