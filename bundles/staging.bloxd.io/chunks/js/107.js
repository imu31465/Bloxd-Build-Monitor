export const id = 107;
export const ids = [107];
export const modules = {
  5029: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => pB,
      f: () => aB,
      h: () => rB
    });
    zB(5031);
    var QB = zB(1240),
      nB = zB(1091),
      dB = zB.n(nB),
      IB = zB(1388),
      NB = (zB(62), zB(4478)),
      uB = zB(1108),
      UB = zB(1148);

    function aB(BB) {
      let {
        children: jB,
        label: zB,
        className: nB,
        circleInfoText: NB,
        disabled: aB,
        onLabelClick: pB
      } = BB;
      const {
        t: rB
      } = (0, QB.D)(), sB = (0, UB.jsxs)("div", {
        className: dB()("Label", {
          ClickableLabel: void 0 !== pB
        }),
        onClick: pB,
        children: [rB(zB), NB && (0, UB.jsx)(uB.c, {
          name: "circle-info"
        })]
      });
      return (0, UB.jsxs)("div", {
        className: dB()("LabeledInput", {
          [nB]: nB,
          DisabledLabelInput: aB
        }),
        children: [NB && (0, UB.jsx)(IB.g, {
          tooltipInner: (0, UB.jsx)("div", {
            className: "LabeledInputTooltip",
            children: rB(NB)
          }),
          children: sB
        }), !NB && sB, jB]
      })
    }

    function pB(BB) {
      let {
        checked: jB,
        setChecked: zB
      } = BB;
      return (0, UB.jsx)("div", {
        className: "OtherInput ClickableOtherInput",
        "data-pad-focusable": !0,
        onClick: BB => {
          zB(!jB)
        },
        children: (0, UB.jsx)(NB.e, {
          checked: jB,
          onChange: BB => {
            zB(BB.target.checked)
          },
          disabled: !1
        })
      })
    }

    function rB(BB) {
      let {
        checked: jB,
        setChecked: zB,
        disabled: QB
      } = BB;
      return (0, UB.jsx)("div", {
        className: dB()("SwitchContainer", {
          SwitchContainerDisabled: QB
        }),
        onClick: () => {
          QB || zB(!jB)
        },
        children: (0, UB.jsx)(NB.e, {
          className: "SwitchCheckbox",
          checked: jB,
          onChange: BB => {
            zB(BB.target.checked)
          },
          disabled: !!QB
        })
      })
    }
  },
  5036: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => UB
    });
    var QB = zB(1091),
      nB = zB.n(QB),
      dB = zB(4729),
      IB = zB(1240),
      NB = zB(1148);
    const uB = [...dB.e, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function UB(BB) {
      const {
        disabled: jB,
        hideWrapper: zB
      } = BB, {
        t: QB
      } = (0, IB.D)(), UB = BB.advancedMode ? uB.map((jB => [jB, BB.callbacks[jB]])) : dB.e.map((jB => [jB, BB.callbacks[jB]])), pB = (0, NB.jsx)("div", {
        className: nB()("PluginsGrid", {
          SectionBody: !zB
        }),
        children: UB.map((BB => {
          let [zB, QB] = BB;
          return (0, NB.jsx)(aB, {
            plugin: zB,
            callbacks: QB,
            disabled: jB
          }, zB)
        }))
      });
      return zB ? pB : (0, NB.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, NB.jsx)("div", {
          className: "SectionTitle",
          children: QB("worldBuilder:pluginsSection")
        }), pB]
      })
    }

    function aB(BB) {
      let {
        plugin: jB,
        callbacks: {
          isEnabled: zB,
          mH: QB
        },
        disabled: dB
      } = BB;
      const {
        t: uB
      } = (0, IB.D)(), UB = zB();
      return (0, NB.jsxs)("div", {
        className: nB()("PluginCard", {
          PluginCardEnabled: UB,
          PluginCardDisabledForm: dB
        }),
        "data-pad-focusable": !0,
        "aria-disabled": dB || void 0,
        onClick: () => {
          dB || QB(!UB)
        },
        children: [(0, NB.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, NB.jsx)("img", {
            src: `/textures/games/classic/customGames/${jB}.png`,
            alt: jB
          })
        }), (0, NB.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, NB.jsx)("div", {
            className: "PluginCardTitle",
            children: uB(pB[jB])
          }), (0, NB.jsx)("div", {
            className: "PluginCardDescription",
            children: uB(rB[jB])
          })]
        }), (0, NB.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: uB(UB ? "general:on" : "general:off")
        })]
      })
    }
    const pB = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      rB = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  5026: (BB, jB, zB) => {
    zB.d(jB, {
      h: () => nj,
      b: () => Qj,
      e: () => zj,
      k: () => dj
    });
    var QB = zB(62),
      nB = zB(1381),
      dB = zB(1478),
      IB = zB(1710),
      NB = zB(1240),
      uB = zB(1369),
      UB = zB(1388),
      aB = zB(1108),
      pB = zB(1263),
      rB = zB(1091),
      sB = zB.n(rB),
      JB = zB(363),
      mB = zB(4729),
      yB = zB(1270),
      kB = zB(5029),
      GB = zB(3252),
      LB = zB(5036),
      gB = zB(1148);

    function tB(BB) {
      let {
        icon: jB,
        title: zB,
        disabled: QB,
        children: nB
      } = BB;
      return (0, gB.jsxs)("div", {
        className: sB()("ManageCard", {
          ManageCardDisabled: QB
        }),
        children: [(0, gB.jsxs)("div", {
          className: "ManageCardHead",
          children: [(0, gB.jsx)("div", {
            className: "ManageCardIcon",
            children: (0, gB.jsx)(aB.c, {
              name: jB
            })
          }), (0, gB.jsx)("div", {
            children: (0, gB.jsx)("h2", {
              className: "ManageCardTitle",
              children: zB
            })
          })]
        }), (0, gB.jsxs)("div", {
          className: "ManageCardBody",
          children: [nB, QB && (0, gB.jsx)("div", {
            className: "ManageCardDisabledOverlay"
          })]
        })]
      })
    }

    function SB(BB) {
      let {
        label: jB,
        caption: zB,
        children: QB
      } = BB;
      return (0, gB.jsxs)("div", {
        className: "ManageStackedField",
        children: [(0, gB.jsx)("div", {
          className: "ManageStackedFieldLabel",
          children: jB
        }), QB, zB && (0, gB.jsx)("div", {
          className: "ManageStackedFieldCaption",
          children: zB
        })]
      })
    }

    function MB(BB) {
      let {
        label: jB,
        caption: zB,
        disabled: QB,
        children: nB
      } = BB;
      return (0, gB.jsxs)("div", {
        className: sB()("ManageField", {
          ManageFieldDisabled: QB
        }),
        children: [(0, gB.jsxs)("div", {
          className: "ManageFieldText",
          children: [(0, gB.jsx)("div", {
            className: "ManageFieldLabel",
            children: jB
          }), (0, gB.jsx)("div", {
            className: "ManageFieldCaption",
            children: zB
          })]
        }), (0, gB.jsx)("div", {
          className: "ManageFieldControl",
          children: nB
        })]
      })
    }

    function EB(BB) {
      var jB, zB;
      let {
        schematicData: QB,
        updateSchematicData: nB,
        publishFormEnabled: dB,
        formEnabled: IB
      } = BB;
      const {
        t: uB
      } = (0, NB.D)(), UB = !dB, aB = {
        tpRequests: {
          isEnabled: () => !QB.disableTpRequests,
          mH: BB => nB("disableTpRequests", !BB)
        },
        spawnProtection: {
          isEnabled: () => !QB.disableSpawnProtection,
          mH: BB => nB("disableSpawnProtection", !BB)
        },
        spawnReset: {
          isEnabled: () => !!QB.enableSpawnReset,
          mH: BB => nB("enableSpawnReset", BB)
        },
        smpMarketplace: {
          isEnabled: () => !!QB.enableSmpMarketplace,
          mH: BB => nB("enableSmpMarketplace", BB)
        },
        survivalGuns: {
          isEnabled: () => !!QB.enableSurvivalGuns,
          mH: BB => nB("enableSurvivalGuns", BB)
        },
        fallDamage: {
          isEnabled: () => !QB.disableFallDamage,
          mH: BB => nB("disableFallDamage", !BB)
        },
        dayNight: {
          isEnabled: () => !!QB.enableDayNight,
          mH: BB => nB("enableDayNight", BB)
        }
      };
      return (0, gB.jsxs)(gB.Fragment, {
        children: [!1 === QB.schematicContainsSpawnBlock && (0, gB.jsx)("div", {
          className: "ManageWarningBanner",
          children: uB("worldBuilder:mustContainSpawnBlock")
        }), (0, gB.jsxs)("div", {
          className: "ManageSettingsGrid",
          children: [(0, gB.jsxs)(tB, {
            icon: "globe",
            title: uB("worldBuilder:worldRulesSection"),
            disabled: !IB,
            children: [(0, gB.jsx)(MB, {
              label: uB("classic:defaultGamemode"),
              caption: uB("classic:defaultGamemodeDescription"),
              disabled: UB,
              children: (0, gB.jsx)(GB.e, {
                controlClassName: "ManageDropdown",
                options: mB.y.map((BB => ({
                  value: BB,
                  label: JB.r[BB]
                }))),
                value: QB.defaultGamemode,
                onChange: BB => nB("defaultGamemode", BB.value)
              })
            }), (0, gB.jsx)(MB, {
              label: uB("classic:voidDeathHeight"),
              caption: uB("classic:voidDeathHeightDescription"),
              disabled: UB,
              children: (0, gB.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, gB.jsx)("input", {
                  type: "number",
                  max: yB.G,
                  value: null !== (jB = QB.voidDeathHeight) && void 0 !== jB ? jB : "",
                  onChange: BB => {
                    const jB = parseInt(BB.target.value);
                    nB("voidDeathHeight", jB)
                  }
                }), (0, gB.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: uB("worldBuilder:blocksUnit")
                })]
              })
            }), (0, gB.jsx)(MB, {
              label: uB("classic:worldBorder"),
              caption: uB("classic:worldBorderDescription"),
              disabled: UB,
              children: (0, gB.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, gB.jsx)("input", {
                  type: "number",
                  min: yB.O,
                  max: yB.K,
                  placeholder: uB("worldBuilder:noWorldBorderLimit"),
                  value: null !== (zB = QB.worldBorder) && void 0 !== zB ? zB : "",
                  onChange: BB => {
                    const jB = parseInt(BB.target.value);
                    nB("worldBorder", isNaN(jB) ? null : jB)
                  }
                }), (0, gB.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: uB("worldBuilder:blocksUnit")
                })]
              })
            }), (0, gB.jsx)(MB, {
              label: uB("classic:disableMobs"),
              caption: uB("classic:disableMobsDescription"),
              disabled: UB,
              children: (0, gB.jsx)(kB.h, {
                checked: QB.disableMobs,
                setChecked: BB => nB("disableMobs", BB),
                disabled: UB
              })
            })]
          }), (0, gB.jsxs)(tB, {
            icon: "user-group",
            title: uB("worldBuilder:playerAndLobbySection"),
            disabled: !IB,
            children: [(0, gB.jsx)(MB, {
              label: uB("classic:disableKeepInventory"),
              caption: uB("classic:disableKeepInventoryDescription"),
              disabled: UB,
              children: (0, gB.jsx)(kB.h, {
                checked: QB.disableKeepInventory,
                setChecked: BB => nB("disableKeepInventory", BB),
                disabled: UB
              })
            }), (0, gB.jsx)(MB, {
              label: uB("classic:persistInventory"),
              caption: uB("classic:persistInventoryDescription"),
              disabled: UB,
              children: (0, gB.jsx)(GB.e, {
                controlClassName: "ManageDropdown",
                options: mB.h.map((BB => ({
                  value: BB,
                  label: JB.l[BB]
                }))),
                value: QB.persistInventory,
                onChange: BB => nB("persistInventory", BB.value)
              })
            }), (0, gB.jsx)(MB, {
              label: uB("classic:persistWorld"),
              caption: uB("classic:persistWorldDescription"),
              disabled: UB,
              children: (0, gB.jsx)(kB.h, {
                checked: QB.persistWorld,
                setChecked: BB => nB("persistWorld", BB),
                disabled: UB
              })
            }), (0, gB.jsx)(MB, {
              label: uB("classic:disableLobbySpawn"),
              caption: uB("classic:disableLobbySpawnDescription"),
              disabled: UB,
              children: (0, gB.jsx)(kB.h, {
                checked: QB.disableLobbySpawn,
                setChecked: BB => nB("disableLobbySpawn", BB),
                disabled: UB
              })
            }), (0, gB.jsx)(MB, {
              label: uB("classic:hideLobbyCode"),
              caption: uB("classic:hideLobbyCodeDescription"),
              disabled: UB,
              children: (0, gB.jsx)(kB.h, {
                checked: QB.hideLobbyCode,
                setChecked: BB => nB("hideLobbyCode", BB),
                disabled: UB
              })
            })]
          })]
        }), (0, gB.jsx)(tB, {
          icon: "layer-group",
          title: uB("worldBuilder:pluginsSection"),
          disabled: !IB,
          children: (0, gB.jsx)(LB.b, {
            callbacks: aB,
            disabled: UB,
            advancedMode: !0,
            hideWrapper: !0
          })
        })]
      })
    }
    var iB = zB(5039),
      qB = zB(4478),
      fB = zB(1532),
      oB = zB(3593),
      HB = zB(1169),
      DB = zB(5002),
      FB = zB(5041),
      YB = zB(1487);
    const VB = 50,
      hB = .3;
    async function XB(BB) {
      const jB = await
      function(BB) {
        return new Promise(((jB, zB) => {
          const QB = new FileReader;
          QB.onload = () => jB(QB.result), QB.onerror = zB, QB.readAsDataURL(BB)
        }))
      }(BB), zB = await
      function(BB) {
        return new Promise(((jB, zB) => {
          const QB = new Image;
          QB.onload = () => jB(QB), QB.onerror = () => zB(new Error("Failed to load image")), QB.src = BB
        }))
      }(jB);
      if (zB.naturalHeight > zB.naturalWidth) throw new ZB;
      const QB = 1024 * VB,
        {
          dataUrl: nB,
          finalQuality: dB
        } = function(BB, jB) {
          const zB = document.createElement("canvas");
          zB.width = BB.naturalWidth, zB.height = BB.naturalHeight, zB.getContext("2d").drawImage(BB, 0, 0);
          let QB = .92,
            nB = zB.toDataURL("image/jpeg", QB);
          for (; .75 * nB.length > jB && QB > .05;) QB -= .05, nB = zB.toDataURL("image/jpeg", QB);
          return {
            dataUrl: nB,
            finalQuality: QB
          }
        }(zB, QB);
      if (Math.ceil(.75 * nB.length) > QB) throw new AB;
      return {
        base64Jpg: nB,
        heavilyCompressed: dB < hB
      }
    }
    class ZB extends Error {}
    class AB extends Error {}
    var TB = function(BB) {
      return BB[BB.NOT_LOGGED_IN = 0] = "NOT_LOGGED_IN", BB[BB.THUMBNAIL_LIMIT_REACHED = 1] = "THUMBNAIL_LIMIT_REACHED", BB
    }(TB || {});

    function PB(BB) {
      var jB;
      let {
        schematicId: zB,
        hasReadUploadPolicy: nB,
        onPolicyValidationError: uB,
        onThumbnailReady: UB
      } = BB;
      const {
        t: rB
      } = (0, NB.D)(), [JB, mB] = (0, QB.useState)(null), [yB, kB] = (0, QB.useState)(""), [GB, LB] = (0, QB.useState)(""), [tB, SB] = (0, QB.useState)(!0), [MB, EB] = (0, QB.useState)(!1), iB = (0, QB.useRef)(!1), [qB, fB] = (0, QB.useState)(null), [oB, HB] = (0, QB.useState)(!1), [DB, YB] = (0, QB.useState)(!1), VB = (0, QB.useRef)(0), {
        getRootProps: hB,
        getInputProps: TB,
        isDragActive: PB
      } = (0, FB.d)({
        accept: {
          "image/*": [".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp"]
        },
        multiple: !1,
        onDrop: async BB => {
          if (0 === BB.length) return;
          const jB = BB[0],
            zB = ++VB.current;
          fB(null), HB(!1), mB(null), kB(jB.name);
          try {
            const BB = await XB(jB);
            if (zB !== VB.current) return;
            mB(BB), HB(BB.heavilyCompressed)
          } catch (QB) {
            if (zB !== VB.current) return;
            fB(rB(QB instanceof ZB ? "thumbnail:portraitImagesNotAllowed" : QB instanceof AB ? "thumbnail:couldNotCompressImage" : "thumbnail:failedToUploadImage"))
          }
        },
        useFsAccessApi: !1
      }), WB = yB.length <= 30 ? yB : `${yB.slice(0,27)}...`, eB = null !== (jB = null === JB || void 0 === JB ? void 0 : JB.base64Jpg) && void 0 !== jB ? jB : null, lB = GB.trim(), wB = lB.length >= pB.i && lB.length <= pB.g, xB = DB && !JB && !qB, KB = DB && !wB;
      return (0, gB.jsxs)("div", {
        className: "ThumbnailUploadContainer",
        children: [(0, gB.jsxs)("div", {
          ...hB({
            className: sB()("ThumbnailUploadDropzone", {
              ActiveDrag: PB,
              ValidationError: xB
            })
          }),
          children: [(0, gB.jsx)("input", {
            ...TB()
          }), !PB && eB ? (0, gB.jsxs)(gB.Fragment, {
            children: [(0, gB.jsxs)("div", {
              className: "ThumbnailAspectPreviews",
              children: [(0, gB.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, gB.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "1:1"
                }), (0, gB.jsx)("div", {
                  className: "ThumbnailAspectFrame Square",
                  children: (0, gB.jsx)("img", {
                    src: eB,
                    alt: "1:1 preview"
                  })
                })]
              }), (0, gB.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, gB.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "16:9"
                }), (0, gB.jsx)("div", {
                  className: "ThumbnailAspectFrame Wide",
                  children: (0, gB.jsx)("img", {
                    src: eB,
                    alt: "16:9 preview"
                  })
                })]
              })]
            }), (0, gB.jsxs)("div", {
              children: [(0, gB.jsx)("div", {
                className: "ThumbnailUploadInstructions Active",
                children: WB
              }), (0, gB.jsx)("div", {
                className: "ThumbnailUploadInstructions Preview",
                children: rB("thumbnail:preview")
              })]
            })]
          }) : (0, gB.jsxs)(gB.Fragment, {
            children: [(0, gB.jsx)("div", {
              className: "ThumbnailUploadIcon",
              children: (0, gB.jsx)(aB.c, {
                name: "image"
              })
            }), (0, gB.jsx)("div", {
              className: "ThumbnailUploadInstructions",
              children: rB("thumbnail:dragImageHere")
            })]
          })]
        }), xB && (0, gB.jsx)("div", {
          className: "ThumbnailUploadError",
          children: rB("thumbnail:imageRequired")
        }), (0, gB.jsx)(IB.d, {
          className: sB()("ThumbnailUploadNameInput", {
            ValidationError: KB
          }),
          placeholderText: rB("thumbnail:thumbnailName"),
          defaultValue: GB,
          onValueChange: BB => {
            LB(BB)
          },
          maxLength: pB.g
        }), KB && (0, gB.jsx)("div", {
          className: "ThumbnailUploadError",
          children: rB("thumbnail:nameRequired", {
            min: pB.i,
            max: pB.g
          })
        }), (0, gB.jsxs)("label", {
          className: "ThumbnailUploadCheckbox",
          children: [(0, gB.jsx)("input", {
            type: "checkbox",
            checked: tB,
            onChange: BB => {
              SB(BB.target.checked)
            }
          }), rB("thumbnail:setAsThumbnailOnceApproved")]
        }), oB && (0, gB.jsx)("div", {
          className: "ThumbnailUploadWarning",
          children: rB("thumbnail:heavyCompressionWarning")
        }), qB && (0, gB.jsx)("div", {
          className: "ThumbnailUploadError",
          children: qB
        }), (0, gB.jsx)(dB.m, {
          disabled: MB,
          className: "ThumbnailUploadButton",
          onClick: async () => {
            if (YB(!0), !iB.current && JB && wB && nB) {
              iB.current = !0, EB(!0), fB(null);
              try {
                await UB(JB.base64Jpg, lB, tB ? zB : null)
              } catch (BB) {
                fB(BB.errorMessageForUser ? rB(BB.errorMessageForUser, BB.errorMessageTranslationParams) : rB("thumbnail:failedToUploadImage"))
              } finally {
                iB.current = !1, EB(!1)
              }
            } else nB || uB()
          },
          children: rB(MB ? "thumbnail:processing" : "thumbnail:uploadThumbnail")
        })]
      })
    }
    const WB = 2e3;

    function eB(BB) {
      let {
        schematicId: jB,
        ownedThumbnailCount: zB,
        onClose: nB,
        onThumbnailReady: dB
      } = BB;
      const {
        t: IB
      } = (0, NB.D)(), {
        userContext: uB
      } = (0, HB.d)(), [UB, rB] = (0, QB.useState)(!1), [JB, mB] = (0, QB.useState)(!1), [yB, kB] = (0, QB.useState)(!1), GB = (0, QB.useRef)();
      (0, QB.useEffect)((() => () => {
        clearTimeout(GB.current)
      }), []);
      const LB = function(BB, jB) {
        const zB = [];
        return BB.isLoggedIn() || zB.push(TB.NOT_LOGGED_IN), jB >= pB.L && zB.push(TB.THUMBNAIL_LIMIT_REACHED), zB
      }(uB, zB);
      if (LB.length > 0) {
        const BB = {
          [TB.NOT_LOGGED_IN]: {
            key: "thumbnail:mustBeLoggedInToUpload"
          },
          [TB.THUMBNAIL_LIMIT_REACHED]: {
            key: "thumbnail:thumbnailLimitReachedPleaseDelete",
            params: {
              max: pB.L
            }
          }
        };
        return (0, gB.jsxs)("div", {
          className: "ThumbnailUploaderInner",
          children: [(0, gB.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: IB("thumbnail:cannotUploadThumbnail")
          }), LB.map(((jB, zB) => {
            const QB = BB[jB];
            return (0, gB.jsxs)("div", {
              className: "CannotUploadThumbnailItem",
              children: [(0, gB.jsx)(aB.c, {
                name: "triangle-exclamation"
              }), (0, gB.jsx)("span", {
                children: IB(QB.key, QB.params)
              })]
            }, zB)
          }))]
        })
      }
      return (0, gB.jsxs)("div", {
        className: sB()("ThumbnailUploaderInner", {
          ThumbnailUploaderSuccess: UB
        }),
        children: [UB && (0, gB.jsxs)("div", {
          className: "ThumbnailUploadSuccessOverlay",
          children: [(0, gB.jsxs)("div", {
            className: "ThumbnailUploadSuccessIcon FullyFancyText AnimFadeInScaleUp",
            children: [(0, gB.jsx)(aB.c, {
              name: "check"
            }), (0, gB.jsx)(YB.b, {})]
          }), (0, gB.jsx)("div", {
            className: "ThumbnailUploadSuccessText AnimFadeInScaleUp",
            children: IB("thumbnail:thumbnailUploaded")
          })]
        }), (0, gB.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: IB("thumbnail:uploadThumbnail")
        }), (0, gB.jsxs)("div", {
          className: "ThumbnailUploaderBody",
          children: [(0, gB.jsxs)("div", {
            className: "ThumbnailUploaderLeft",
            children: [(0, gB.jsx)("h3", {
              className: "SchematicPopupSubtitle",
              children: IB("thumbnail:chooseImage", {
                maxSizeKb: VB
              })
            }), (0, gB.jsx)(PB, {
              schematicId: jB,
              hasReadUploadPolicy: JB,
              onPolicyValidationError: () => {
                kB(!0)
              },
              onThumbnailReady: async (BB, jB, zB) => {
                await dB(BB, jB, zB), rB(!0), GB.current = setTimeout(nB, WB)
              }
            })]
          }), (0, gB.jsxs)("div", {
            className: "ThumbnailUploadPolicy",
            children: [(0, gB.jsx)("h3", {
              className: "ThumbnailUploadPolicyTitle",
              children: IB("thumbnail:uploadPolicy")
            }), (0, gB.jsxs)("ul", {
              className: "ThumbnailUploadPolicyList",
              children: [(0, gB.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, gB.jsx)(aB.c, {
                  name: "check"
                }), (0, gB.jsx)("span", {
                  children: IB("thumbnail:policyFollowGuidelines")
                })]
              }), (0, gB.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, gB.jsx)(aB.c, {
                  name: "check"
                }), (0, gB.jsx)("span", {
                  children: IB("thumbnail:policyInGameAssets")
                })]
              }), (0, gB.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, gB.jsx)(aB.c, {
                  name: "check"
                }), (0, gB.jsx)("span", {
                  children: IB("thumbnail:policyLimitText")
                })]
              }), (0, gB.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, gB.jsx)(aB.c, {
                  name: "x"
                }), (0, gB.jsx)("span", {
                  children: IB("thumbnail:policyCopyrightContent")
                })]
              }), (0, gB.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, gB.jsx)(aB.c, {
                  name: "x"
                }), (0, gB.jsx)("span", {
                  children: IB("thumbnail:policyOutOfGameAssets")
                })]
              }), (0, gB.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, gB.jsx)(aB.c, {
                  name: "x"
                }), (0, gB.jsx)("span", {
                  children: IB("thumbnail:policyBloxdTags")
                })]
              }), (0, gB.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, gB.jsx)(aB.c, {
                  name: "x"
                }), (0, gB.jsx)("span", {
                  children: IB("thumbnail:policyMustReflectGame")
                })]
              })]
            }), (0, gB.jsxs)("label", {
              className: sB()("ThumbnailUploadCheckbox Policy", {
                ValidationError: yB && !JB
              }),
              children: [(0, gB.jsx)("input", {
                type: "checkbox",
                checked: JB,
                onChange: BB => {
                  mB(BB.target.checked)
                }
              }), IB("thumbnail:agreeToUploadPolicy")]
            }), yB && !JB && (0, gB.jsx)("div", {
              className: "ThumbnailPolicyError",
              children: IB("thumbnail:policyRequired")
            })]
          })]
        })]
      })
    }
    var lB = zB(1244);
    const wB = {
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

    function xB(BB) {
      var jB, zB;
      let {
        schematicData: IB,
        updateSchematicData: UB,
        publishFormEnabled: pB,
        onClose: rB
      } = BB;
      const {
        t: JB
      } = (0, NB.D)(), {
        userContext: mB,
        isUserContextUpdating: yB
      } = (0, HB.d)(), kB = (0, oB.d)(), [GB, LB] = (0, QB.useState)([]), [tB, SB] = (0, QB.useState)([]), [MB, EB] = (0, QB.useState)(!0), [iB, qB] = (0, QB.useState)(null !== (jB = IB.customThumbnailId) && void 0 !== jB ? jB : null), [FB, YB] = (0, QB.useState)(null), VB = (0, QB.useRef)(null !== (zB = IB.customThumbnailId) && void 0 !== zB ? zB : null), hB = (0, QB.useRef)(0), XB = (0, QB.useRef)(null), ZB = (0, QB.useRef)(null), AB = (0, QB.useRef)(null), TB = (0, QB.useRef)(!1);

      function PB(BB, jB) {
        AB.current && (clearTimeout(AB.current), AB.current = null), YB(BB), null !== BB && jB && (AB.current = setTimeout((() => {
          YB(null), AB.current = null
        }), 5e3))
      }(0, QB.useEffect)((() => () => {
        clearTimeout(ZB.current), clearTimeout(AB.current)
      }), []);
      const WB = (0, QB.useCallback)((() => {
        EB(!0), fB.b.getOwnedThumbnails(mB).then((BB => {
          const jB = [],
            zB = [];
          for (const QB of BB.thumbnails) QB.rejectionPolicyId ? jB.push(QB) : zB.push(QB);
          jB.sort(((BB, jB) => BB.lastUpdatedAt - jB.lastUpdatedAt)), zB.sort(((BB, jB) => {
            const zB = BB.approved ? 1 : 0,
              QB = (jB.approved ? 1 : 0) - zB;
            return 0 !== QB ? QB : jB.lastUpdatedAt - BB.lastUpdatedAt
          })), SB(jB), LB(zB)
        })).catch((BB => {
          console.error("Failed to fetch thumbnails:", BB)
        })).finally((() => {
          EB(!1)
        }))
      }), [mB]);
      async function wB(BB, jB, zB) {
        return fB.b.uploadSchematicThumbnail(mB, BB, jB, zB).then((() => {
          PB({
            text: JB("thumbnail:uploadedAwaitingModeration"),
            type: "success"
          }, !0), WB()
        }))
      }

      function xB() {
        hB.current = Date.now(), ZB.current = null;
        const BB = XB.current;
        XB.current = null, PB({
          text: JB("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), fB.b.setSchematicThumbnail(mB, IB.schematicId, BB).then((() => {
          kB.current && (PB({
            text: JB("thumbnail:thumbnailUpdated"),
            type: "success"
          }, !0), VB.current = BB, UB("customThumbnailId", BB), UB("customThumbnailBlurhash", void 0), UB("customThumbnailVariants", void 0))
        })).catch((BB => {
          kB.current && (PB({
            text: BB.errorMessageForUser ? JB(BB.errorMessageForUser, BB.errorMessageTranslationParams) : JB("thumbnail:failedToSetThumbnail"),
            type: "error"
          }, !0), qB(VB.current))
        }))
      }

      function cB(BB) {
        qB(BB), XB.current = BB;
        const jB = Date.now() - hB.current;
        jB >= 1e3 ? xB() : (PB({
          text: JB("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), ZB.current || (ZB.current = setTimeout((() => {
          xB()
        }), 1e3 - jB)))
      }
      return (0, QB.useEffect)((() => {
        !1 === yB && WB()
      }), [yB, WB]), tB.length > 0 ? (0, gB.jsx)(KB, {
        rejectedThumbnails: tB,
        userContext: mB,
        isMountedRef: kB,
        onAcknowledged: WB
      }) : (0, gB.jsxs)("div", {
        className: "BloxdForm ThumbnailSection",
        children: [(0, gB.jsxs)("div", {
          className: "SectionTitle",
          children: [JB("thumbnail:gameThumbnail"), FB && (0, gB.jsx)("span", {
            className: sB()("ThumbnailActionMsg", `ThumbnailActionMsg--${FB.type}`),
            children: FB.text
          })]
        }), (0, gB.jsx)("div", {
          className: "SectionBody",
          children: (0, gB.jsxs)("div", {
            className: "ThumbnailGrid",
            children: [(0, gB.jsxs)("div", {
              className: sB()("ThumbnailGridItem ThumbnailGridItemDefault", {
                ThumbnailGridItemSelected: null === iB
              }),
              onClick: () => cB(null),
              children: [(0, gB.jsx)(DB.c, {
                game: {
                  schematicId: IB.schematicId,
                  imageBlurhash: IB.imageBlurhash
                }
              }), (0, gB.jsx)("div", {
                className: "ThumbnailGridItemLabel ThumbnailDefaultLabel",
                children: JB("general:default")
              })]
            }), MB && (0, gB.jsx)(uB.e, {}), GB.map(((BB, jB) => (0, gB.jsxs)("div", {
              className: sB()("ThumbnailGridItem", {
                ThumbnailGridItemSelected: iB === BB.id,
                ThumbnailGridItemPending: !BB.approved
              }),
              onClick: () => {
                BB.approved && cB(BB.id)
              },
              children: [BB.approved && (0, gB.jsx)("img", {
                src: `${lB.clientSideServerUrls.s3Url}/customThumbnails/${BB.id}.jpg`,
                alt: "Thumbnail"
              }), BB.approved && (0, gB.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: BB.name
              }), BB.id && (0, gB.jsx)(dB.G, {
                className: "ThumbnailDeleteButton",
                onClick: jB => async function(BB, jB, zB) {
                  BB.stopPropagation();
                  const QB = await nB.NotificationProvider.showCustomPopup({
                      body: BB => (0, gB.jsx)(CB, {
                        thumbnailId: jB,
                        thumbnailName: zB,
                        onClose: jB => {
                          jB && (TB.current = !0), BB()
                        }
                      }),
                      middleScreenPopupClassName: "ThumbnailDeleteConfirmPopup",
                      onClose: rB
                    }).getResult(),
                    dB = TB.current;
                  TB.current = !1, dB && !0 === QB && (kB.current && PB({
                    text: JB("thumbnail:deletingThumbnail"),
                    type: "info"
                  }, !1), fB.b.deleteSchematicThumbnail(mB, jB).then((() => {
                    kB.current && (PB({
                      text: JB("thumbnail:thumbnailDeleted"),
                      type: "success"
                    }, !0), VB.current === jB && cB(null), WB())
                  })).catch((BB => {
                    kB.current && PB({
                      text: BB.errorMessageForUser ? JB(BB.errorMessageForUser, BB.errorMessageTranslationParams) : JB("thumbnail:failedToDeleteThumbnail"),
                      type: "error"
                    }, !0)
                  })))
                }(jB, BB.id, BB.name),
                children: (0, gB.jsx)(aB.c, {
                  name: "trash-can"
                })
              }), !BB.approved && (0, gB.jsx)("div", {
                className: "ThumbnailUnapprovedIcon",
                children: (0, gB.jsx)(aB.c, {
                  name: "hourglass-clock"
                })
              }), !BB.approved && (0, gB.jsxs)("div", {
                className: "ThumbnailGridItemLabel ThumbnailPendingLabel",
                children: [BB.name, (0, gB.jsx)("br", {}), JB("thumbnail:pendingApproval")]
              })]
            }, jB))), (0, gB.jsxs)("div", {
              className: sB()("ThumbnailGridItem ThumbnailUploadTile", {
                ThumbnailUploadTileDisabled: !pB
              }),
              onClick: () => {
                pB && function(BB) {
                  let {
                    schematicId: jB,
                    ownedThumbnailCount: zB,
                    onThumbnailReady: QB,
                    onClose: dB
                  } = BB;
                  nB.NotificationProvider.showCustomPopup({
                    body: BB => (0, gB.jsx)(eB, {
                      schematicId: jB,
                      ownedThumbnailCount: zB,
                      onClose: BB,
                      onThumbnailReady: QB
                    }),
                    middleScreenPopupClassName: "SchematicThumbnailPopup",
                    onClose: dB,
                    unlockPointerKey: "schematicThumbnailUploaderPopup"
                  })
                }({
                  schematicId: IB.schematicId,
                  ownedThumbnailCount: GB.length,
                  onThumbnailReady: wB,
                  onClose: rB
                })
              },
              children: [(0, gB.jsx)(aB.c, {
                name: "plus"
              }), (0, gB.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: JB("thumbnail:uploadThumbnail")
              })]
            })]
          })
        })]
      })
    }

    function KB(BB) {
      let {
        rejectedThumbnails: jB,
        userContext: zB,
        isMountedRef: nB,
        onAcknowledged: IB
      } = BB;
      const {
        t: UB
      } = (0, NB.D)(), [pB, rB] = (0, QB.useState)(!1), [sB, JB] = (0, QB.useState)(!1), mB = function(BB) {
        const jB = new Map;
        for (const zB of BB) {
          const BB = zB.rejectionPolicyId,
            QB = jB.get(BB);
          QB ? QB.push(zB) : jB.set(BB, [zB])
        }
        return jB
      }(jB);
      return (0, gB.jsxs)("div", {
        className: "ThumbnailRejectionNotice",
        children: [(0, gB.jsxs)("div", {
          className: "ThumbnailRejectionNoticeTitle",
          children: [(0, gB.jsx)(aB.c, {
            name: "triangle-exclamation"
          }), " ", UB("thumbnail:thumbnailsRejected"), " ", (0, gB.jsx)(aB.c, {
            name: "triangle-exclamation"
          })]
        }), (0, gB.jsx)("div", {
          className: "ThumbnailRejectionNoticeSubtitle",
          children: UB("thumbnail:thumbnailsRejectedDescription")
        }), (0, gB.jsx)("div", {
          className: "ThumbnailRejectionNoticeList",
          children: [...mB.entries()].map((BB => {
            let [jB, zB] = BB;
            const QB = wB[jB];
            return (0, gB.jsxs)("div", {
              className: "ThumbnailRejectionNoticeGroup",
              children: [(0, gB.jsx)("div", {
                className: "ThumbnailRejectionNoticeItems",
                children: zB.map((BB => (0, gB.jsxs)("div", {
                  className: "ThumbnailRejectionNoticeItem",
                  children: [(0, gB.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemIcon",
                    children: (0, gB.jsx)(aB.c, {
                      name: "image-slash"
                    })
                  }), (0, gB.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemDetails",
                    children: (0, gB.jsx)("div", {
                      className: "ThumbnailRejectionNoticeItemName",
                      children: BB.name
                    })
                  })]
                }, BB.id)))
              }), (0, gB.jsxs)("div", {
                className: "ThumbnailRejectionNoticeGroupReason",
                children: [UB("thumbnail:rejectionReason"), " ", QB ? UB(QB.reason) : jB]
              }), QB && (0, gB.jsx)("ul", {
                className: "ThumbnailRejectionNoticeGroupTips",
                children: QB.tips.map((BB => (0, gB.jsx)("li", {
                  children: UB(BB)
                }, BB)))
              })]
            }, jB)
          }))
        }), (0, gB.jsxs)("label", {
          className: "ThumbnailRejectionNoticeCheckbox",
          children: [(0, gB.jsx)(qB.e, {
            checked: pB,
            onChange: BB => rB(BB.target.checked),
            disabled: sB
          }), (0, gB.jsx)("span", {
            children: UB("thumbnail:haveReadRejectionReasons")
          })]
        }), (0, gB.jsx)(dB.m, {
          onClick: async function() {
            JB(!0);
            const BB = await Promise.allSettled(jB.map((BB => fB.b.deleteSchematicThumbnail(zB, BB.id))));
            if (!nB.current) return;
            const QB = BB.filter((BB => "rejected" === BB.status));
            QB.length > 0 && console.error("Some rejected thumbnails failed to delete:", QB), IB()
          },
          disabled: !pB || sB,
          className: "ThumbnailRejectionNoticeAcceptButton",
          children: sB ? (0, gB.jsx)(uB.e, {}) : UB("general:accept")
        })]
      })
    }

    function CB(BB) {
      let {
        thumbnailId: jB,
        thumbnailName: zB,
        onClose: QB
      } = BB;
      const {
        t: nB
      } = (0, NB.D)();
      return (0, gB.jsxs)("div", {
        className: "ThumbnailDeleteConfirm",
        children: [(0, gB.jsx)("div", {
          className: "ThumbnailDeleteConfirmTitle",
          children: nB("thumbnail:deleteThumbnail")
        }), (0, gB.jsxs)("div", {
          className: "ThumbnailDeleteConfirmImageContainer",
          children: [(0, gB.jsx)("img", {
            className: "ThumbnailDeleteConfirmImage",
            src: `${lB.clientSideServerUrls.s3Url}/customThumbnails/${jB}.jpg`,
            alt: "Thumbnail to delete"
          }), (0, gB.jsx)("div", {
            className: "ThumbnailGridItemLabel",
            children: zB
          })]
        }), (0, gB.jsx)("div", {
          className: "ThumbnailDeleteConfirmSubtitle",
          children: nB("thumbnail:deleteThumbnailConfirmation")
        }), (0, gB.jsxs)("div", {
          className: "ThumbnailDeleteConfirmButtons",
          children: [(0, gB.jsxs)(dB.G, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => QB(!0),
            children: [(0, gB.jsx)(aB.c, {
              name: "trash-can"
            }), " ", nB("general:delete")]
          }), (0, gB.jsx)(dB.h, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => QB(!1),
            children: nB("general:cancel")
          })]
        })]
      })
    }
    var cB = zB(2206),
      bB = zB(5066),
      vB = zB(5075),
      RB = zB(5104);

    function OB(BB) {
      let {
        schematicData: jB,
        setTexturePack: zB,
        initializeTexturePack: nB,
        publishFormEnabled: dB
      } = BB;
      const {
        t: IB
      } = (0, NB.D)(), [uB, UB] = (0, QB.useState)(null), [aB, pB] = (0, QB.useState)(null), [rB, JB] = (0, QB.useState)(!1), mB = (0, oB.d)(), yB = dB && !rB, kB = jB.customTexturePackKey;

      function GB(BB) {
        var jB;
        UB(BB.metaData.id), pB(null !== (jB = BB.metaData.fromFolderName) && void 0 !== jB ? jB : null), (BB.metaData.id !== cB.o.CUSTOM || BB.metaData.fromFolderName) && zB(BB)
      }
      return (0, QB.useEffect)((() => {
        kB && (JB(!0), (0, bB.e)(kB).then((BB => {
          var jB;
          mB.current && (BB ? (UB(BB.metaData.id), pB(null !== (jB = BB.metaData.fromFolderName) && void 0 !== jB ? jB : null), nB(BB)) : console.error(`No texture pack at ${kB}`))
        })).catch((BB => {
          console.error("Error fetching texture pack: ", BB)
        })).finally((() => {
          JB(!1)
        })))
      }), [kB, nB, mB]), (0, gB.jsxs)("div", {
        className: "BloxdForm TexturePackSection",
        children: [(0, gB.jsx)("div", {
          className: "SectionTitle",
          children: IB("customTexturePack:customTexturePack")
        }), (0, gB.jsxs)("div", {
          className: "TexturePackList",
          children: [(0, gB.jsx)("div", {
            className: sB()("TexturePack", {
              Selected: null === uB && !rB,
              Disabled: !yB
            }),
            onClick: () => {
              yB && (UB(null), zB(null), pB(null))
            },
            children: (0, gB.jsx)("div", {
              className: "TexturePackName",
              children: "No Override"
            })
          }), Object.values(cB.o).map((BB => (0, gB.jsx)(vB.d, {
            id: BB,
            isSelected: BB === uB,
            setSelected: GB,
            disabled: !yB
          }, BB)))]
        }), uB === cB.o.CUSTOM && (0, gB.jsx)(RB.d, {
          folderName: aB,
          onTexturePackUpdated: GB,
          disabled: !yB,
          maxFileSizeMb: 25,
          packOwner: "customGame"
        })]
      })
    }
    var Bj = zB(5139);

    function jj(BB) {
      var jB;
      let {
        gameCategory: zB,
        setGameCategory: QB,
        disabled: nB
      } = BB;
      const IB = null !== (jB = (0, JB.cb)(zB)) && void 0 !== jB ? jB : "other";
      return (0, gB.jsxs)("div", {
        className: "GameCategoryPicker",
        children: [(0, gB.jsx)(kB.f, {
          label: "worldBuilder:gameCategoryGroup",
          className: "GameCategoryGroup",
          disabled: nB,
          children: (0, gB.jsx)(GB.e, {
            options: JB.S.map((BB => ({
              value: BB,
              label: JB.R[BB]
            }))),
            value: IB,
            onChange: BB => {
              BB.value !== IB && QB(JB.O[BB.value][0])
            }
          })
        }), (0, gB.jsx)(kB.f, {
          label: "worldBuilder:gameCategory",
          className: "GameCategory",
          disabled: nB,
          children: (0, gB.jsx)("div", {
            className: "GameCategoryOptions",
            children: JB.O[IB].map((BB => (0, gB.jsx)(dB.M, {
              active: BB === zB,
              onClick: () => {
                QB(BB)
              },
              children: (0, JB.$)(BB)
            }, BB)))
          })
        })]
      })
    }

    function zj(BB) {
      let {
        editor: jB,
        onClose: zB
      } = BB;
      const {
        t: QB
      } = (0, NB.D)(), {
        schematicData: nB,
        updateSchematicData: dB,
        publishFormEnabled: uB,
        formEnabled: UB
      } = jB;
      return (0, gB.jsxs)(gB.Fragment, {
        children: [(0, gB.jsxs)(tB, {
          icon: "pen-to-square",
          title: QB("worldBuilder:basicsSection"),
          disabled: !UB,
          children: [(0, gB.jsx)(SB, {
            label: QB("general:name"),
            caption: QB("worldBuilder:schematicNameTagsHint"),
            children: (0, gB.jsx)(IB.d, {
              className: "SchematicPageName",
              defaultValue: nB.name,
              onValueChange: BB => dB("name", BB),
              placeholderText: QB("worldBuilder:schematicNamePlaceholder"),
              maxLength: pB.bb
            })
          }), (0, gB.jsx)(SB, {
            label: QB("general:description"),
            children: (0, gB.jsx)(IB.d, {
              className: "SchematicPageDescription",
              useTextarea: !0,
              defaultValue: nB.description,
              onValueChange: BB => dB("description", BB),
              placeholderText: QB("worldBuilder:schematicDescriptionPlaceholder"),
              maxLength: pB.ab
            })
          }), (0, gB.jsx)(jj, {
            gameCategory: nB.gameCategory,
            setGameCategory: BB => dB("gameCategory", BB),
            disabled: !uB
          }), !0 === nB.gamePublished && (0, gB.jsx)(xB, {
            schematicData: nB,
            updateSchematicData: dB,
            publishFormEnabled: uB,
            onClose: function() {
              null === zB || void 0 === zB || zB()
            }
          })]
        }), (0, gB.jsx)(EB, {
          schematicData: nB,
          updateSchematicData: dB,
          publishFormEnabled: uB,
          formEnabled: UB
        }), !0 === nB.gamePublished && (0, gB.jsx)(tB, {
          icon: "palette",
          title: QB("worldBuilder:texturePackSection"),
          disabled: !UB,
          children: (0, gB.jsx)(OB, {
            schematicData: nB,
            setTexturePack: jB.setTexturePack,
            initializeTexturePack: jB.initializeTexturePack,
            publishFormEnabled: uB
          })
        })]
      })
    }

    function Qj(BB) {
      let {
        editor: jB
      } = BB;
      const {
        t: zB
      } = (0, NB.D)(), {
        schematicData: QB,
        formEnabled: nB,
        hasUnsavedChanges: IB
      } = jB, pB = nB && IB;
      return (0, gB.jsxs)("footer", {
        className: "SchematicPageFooter",
        children: [nB && IB && (0, gB.jsxs)("div", {
          className: "SchematicPageFooterStatus",
          children: [(0, gB.jsx)("span", {
            className: "SchematicPageFooterStatusDot"
          }), zB("worldBuilder:unsavedChanges")]
        }), (0, gB.jsx)(UB.g, {
          tooltipInner: (0, gB.jsx)("div", {
            className: "SaveButtonTooltip",
            children: zB(nB && !IB ? "worldBuilder:saveChangesNoneDescription" : "worldBuilder:saveChangesDescription")
          }),
          children: (0, gB.jsxs)(dB.f, {
            className: "SaveChangesButton",
            onClick: () => jB.saveSchematic(QB.gamePublished),
            disabled: !pB,
            children: [(0, gB.jsxs)("span", {
              className: nB ? "" : "SaveChangesButtonBodyHidden",
              children: [(0, gB.jsx)(aB.c, {
                name: "wrench"
              }), " ", zB("worldBuilder:saveChanges")]
            }), !nB && (0, gB.jsx)(uB.e, {})]
          })
        })]
      })
    }

    function nj(BB) {
      let {
        schematic: jB,
        onSchematicUpdate: zB,
        onClose: nB,
        inSourceWorld: IB
      } = BB;
      const {
        t: uB
      } = (0, NB.D)();

      function UB() {
        null === nB || void 0 === nB || nB()
      }
      const aB = (0, Bj.b)(jB, {
        onNavigateAway: UB,
        inSourceWorld: IB
      });
      return (0, QB.useEffect)((() => {
        null === zB || void 0 === zB || zB(aB.schematicData)
      }), [aB.schematicData, zB]), (0, gB.jsxs)("div", {
        className: "SchematicPage SchematicPagePopupVariant",
        children: [(0, gB.jsxs)("div", {
          className: "SchematicPageBody",
          children: [(0, gB.jsx)(dB.c, {
            onClick: UB,
            children: uB("worldBuilder:back")
          }), (0, gB.jsx)(tB, {
            icon: "rocket-launch",
            title: uB("worldBuilder:actionsSection"),
            disabled: !aB.formEnabled,
            children: (0, gB.jsx)(iB.b, {
              editor: aB
            })
          }), (0, gB.jsx)(zj, {
            editor: aB,
            onClose: UB
          })]
        }), (0, gB.jsx)(Qj, {
          editor: aB
        })]
      })
    }

    function dj(BB) {
      let {
        schematic: jB,
        onSchematicUpdate: zB,
        onClose: QB,
        inSourceWorld: dB
      } = BB;
      nB.NotificationProvider.showCustomPopup({
        body: BB => (0, gB.jsx)(nj, {
          schematic: jB,
          onSchematicUpdate: zB,
          onClose: BB,
          inSourceWorld: dB
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: QB,
        unlockPointerKey: "schematicPagePopup"
      })
    }
  },
  5039: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => pB
    });
    var QB = zB(1091),
      nB = zB.n(QB),
      dB = zB(1240),
      IB = zB(1108),
      NB = zB(1478),
      uB = zB(1388),
      UB = zB(1369),
      aB = zB(1148);

    function pB(BB) {
      let {
        editor: jB,
        className: zB
      } = BB;
      const {
        t: QB
      } = (0, dB.D)(), {
        schematicData: pB,
        formEnabled: rB,
        publishFormEnabled: sB
      } = jB, JB = !rB || !sB;
      return (0, aB.jsxs)("div", {
        className: nB()("PublishButtonContainer", zB),
        children: [jB.canEditSourceWorld && (0, aB.jsxs)(NB.f, {
          onClick: jB.editSourceWorld,
          disabled: JB,
          children: [(0, aB.jsx)(IB.c, {
            name: "edit"
          }), " ", QB("worldBuilder:editSourceWorld")]
        }), !pB.gamePublished && (0, aB.jsx)(uB.g, {
          tooltipInner: (0, aB.jsx)("div", {
            className: "PublishButtonTooltip",
            children: QB("worldBuilder:publishAsGameDescription")
          }),
          children: (0, aB.jsxs)(NB.m, {
            onClick: () => jB.saveSchematic(!0),
            disabled: JB,
            children: [(0, aB.jsx)(IB.c, {
              name: "rocket-launch"
            }), " ", QB("worldBuilder:publishAsGame"), " ", (0, aB.jsx)(IB.c, {
              name: "info-circle"
            })]
          })
        }), !0 === pB.gamePublished && (0, aB.jsxs)(aB.Fragment, {
          children: [(0, aB.jsx)(uB.g, {
            tooltipInner: (0, aB.jsx)("div", {
              className: "PublishButtonTooltip",
              children: QB("worldBuilder:unpublishAsGameDescription")
            }),
            children: (0, aB.jsxs)(NB.G, {
              onClick: jB.unpublishSchematic,
              disabled: JB,
              children: [(0, aB.jsx)(IB.c, {
                name: "rocket-launch"
              }), " ", QB("worldBuilder:unpublishAsGame"), " ", (0, aB.jsx)(IB.c, {
                name: "info-circle"
              })]
            })
          }), (0, aB.jsxs)(NB.f, {
            onClick: jB.playGame,
            disabled: JB,
            children: [(0, aB.jsx)(IB.c, {
              name: "joystick"
            }), " ", QB("general:playGame")]
          })]
        }), !rB && (0, aB.jsx)(UB.e, {
          loaderType: "Secondary"
        })]
      })
    }
  },
  5066: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => nB
    });
    var QB = zB(1244);
    async function nB(BB) {
      const jB = await fetch(`${QB.clientSideServerUrls.s3Url}/${BB}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === jB.status || 403 === jB.status) return null;
      if (!jB.ok) throw new Error(`Failed to download the texture pack (${jB.status})`);
      return await jB.json()
    }
  },
  5139: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => yB
    });
    var QB = zB(62),
      nB = zB(1359),
      dB = zB(1067),
      IB = zB(174),
      NB = zB(1570),
      uB = zB(28),
      UB = zB(1982),
      aB = zB(1532),
      pB = zB(4696),
      rB = zB(1381),
      sB = zB(1169),
      JB = zB(1543);

    function mB(BB, jB) {
      return {
        schematicId: BB.schematicId,
        name: BB.name,
        description: BB.description,
        gamePublished: jB,
        gameCategory: BB.gameCategory,
        defaultGamemode: BB.defaultGamemode,
        voidDeathHeight: BB.voidDeathHeight,
        disableKeepInventory: BB.disableKeepInventory,
        disableTpRequests: BB.disableTpRequests,
        disableLobbySpawn: BB.disableLobbySpawn,
        disableMobs: BB.disableMobs,
        disableSpawnProtection: BB.disableSpawnProtection,
        disableFallDamage: BB.disableFallDamage,
        worldBorder: BB.worldBorder,
        hideLobbyCode: BB.hideLobbyCode,
        enableSmpMarketplace: BB.enableSmpMarketplace,
        enableSurvivalGuns: BB.enableSurvivalGuns,
        enableSpawnReset: BB.enableSpawnReset,
        enableDayNight: BB.enableDayNight,
        persistWorld: BB.persistWorld,
        persistInventory: BB.persistInventory
      }
    }

    function yB(BB) {
      let {
        onNavigateAway: jB,
        inSourceWorld: zB = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const {
        userContext: yB
      } = (0, sB.d)(), kB = (0, JB.useNavigatePreserveSearch)(), [GB, LB] = (0, QB.useState)({
        ...BB
      }), [gB, tB] = (0, QB.useState)("Enter"), [SB, MB] = (0, QB.useState)(void 0), EB = (0, QB.useRef)(mB(BB, BB.gamePublished)), iB = (0, QB.useRef)(void 0), qB = "Enter" === gB, fB = yB.playerHasRank("developer") || yB.playerHasRank("admin") || "Enter" === gB && !1 !== GB.schematicContainsSpawnBlock, oB = void 0 !== SB && SB !== iB.current || JSON.stringify(mB(GB, GB.gamePublished)) !== JSON.stringify(EB.current);

      function HB(BB, jB) {
        LB((zB => ({
          ...zB,
          [BB]: jB
        })))
      }
      const DB = (0, QB.useCallback)((BB => {
        iB.current = BB, MB(BB)
      }), []);

      function FB(BB) {
        tB("Loading");
        const jB = mB(GB, BB),
          zB = SB !== iB.current ? SB : void 0;
        aB.b.updateSchematic(yB, jB, zB).then((zB => {
          let {
            customTexturePackKey: QB
          } = zB;
          tB("Success"), HB("customTexturePackKey", QB), EB.current = jB, iB.current = void 0, MB(void 0), setTimeout((() => {
            HB("gamePublished", BB), tB("Enter")
          }), 1e3)
        })).catch((BB => {
          var jB;
          (console.error("Failed to save schematic:", BB), tB("Error"), BB instanceof IB.c && BB.errorMessageForUser) && rB.NotificationProvider.showAlertPopup({
            title: "worldBuilder:changesNotSaved",
            subtitle: BB.errorMessageForUser,
            textOpts: {
              subtitle: null !== (jB = BB.errorMessageTranslationParams) && void 0 !== jB ? jB : void 0
            },
            confirmText: "general:ok"
          });
          setTimeout((() => {
            tB("Enter")
          }), 1e3)
        }))
      }
      return {
        schematicData: GB,
        updateSchematicData: HB,
        setTexturePack: MB,
        initializeTexturePack: DB,
        updateState: gB,
        formEnabled: qB,
        publishFormEnabled: fB,
        hasUnsavedChanges: oB,
        canEditSourceWorld: !zB,
        saveSchematic: FB,
        unpublishSchematic: function() {
          rB.NotificationProvider.showPromptPopup({
            icon: "rocket-launch",
            title: "worldBuilder:unpublishAsGameConfirmTitle",
            subtitle: "worldBuilder:unpublishAsGameConfirmSubtitle",
            confirmText: "worldBuilder:unpublishAsGame",
            cancelText: "general:cancel",
            unlockPointerKey: "unpublishGamePrompt"
          }).getResult().then((BB => {
            !0 === BB && FB(!1)
          }))
        },
        editSourceWorld: function() {
          tB("Loading"), pB.b.getSourceWorld(GB.schematicId).then((BB => {
            UB.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, uB.i)("other"), kB((0, nB.e)("classic", BB)), null === jB || void 0 === jB || jB()
          })).catch((BB => {
            console.error("Failed to get source world:", BB), tB("Error"), setTimeout((() => {
              tB("Enter")
            }), 1e3)
          }))
        },
        playGame: function() {
          UB.gameBridge.send("leaveGame", {
            reloadPath: "/"
          }), kB((0, NB.p)((0, dB.y)(GB.schematicId), GB)), null === jB || void 0 === jB || jB()
        }
      }
    }
  },
  5031: () => {}
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);