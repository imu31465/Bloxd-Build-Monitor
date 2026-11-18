export const id = 97;
export const ids = [97];
export const modules = {
  4339: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => kB,
      g: () => oB,
      i: () => LB
    });
    dB(4346);
    var VB = dB(1078),
      yB = dB(933),
      pB = dB.n(yB),
      lB = dB(1249),
      JB = (dB(62), dB(3821)),
      YB = dB(946),
      gB = dB(980);

    function oB(BB) {
      let {
        children: TB,
        label: dB,
        className: yB,
        circleInfoText: JB,
        disabled: oB,
        onLabelClick: kB
      } = BB;
      const {
        t: LB
      } = (0, VB.z)(), OB = (0, gB.jsxs)("div", {
        className: pB()("Label", {
          ClickableLabel: void 0 !== kB
        }),
        onClick: kB,
        children: [LB(dB), JB && (0, gB.jsx)(YB.e, {
          name: "circle-info"
        })]
      });
      return (0, gB.jsxs)("div", {
        className: pB()("LabeledInput", {
          [yB]: yB,
          DisabledLabelInput: oB
        }),
        children: [JB && (0, gB.jsx)(lB.h, {
          tooltipInner: (0, gB.jsx)("div", {
            className: "LabeledInputTooltip",
            children: LB(JB)
          }),
          children: OB
        }), !JB && OB, TB]
      })
    }

    function kB(BB) {
      let {
        checked: TB,
        setChecked: dB
      } = BB;
      return (0, gB.jsx)("div", {
        className: "OtherInput ClickableOtherInput",
        "data-pad-focusable": !0,
        onClick: BB => {
          dB(!TB)
        },
        children: (0, gB.jsx)(JB.b, {
          checked: TB,
          onChange: BB => {
            dB(BB.target.checked)
          },
          disabled: !1
        })
      })
    }

    function LB(BB) {
      let {
        checked: TB,
        setChecked: dB,
        disabled: VB
      } = BB;
      return (0, gB.jsx)("div", {
        className: pB()("SwitchContainer", {
          SwitchContainerDisabled: VB
        }),
        onClick: () => {
          VB || dB(!TB)
        },
        children: (0, gB.jsx)(JB.b, {
          className: "SwitchCheckbox",
          checked: TB,
          onChange: BB => {
            dB(BB.target.checked)
          },
          disabled: !!VB
        })
      })
    }
  },
  4354: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => gB
    });
    var VB = dB(933),
      yB = dB.n(VB),
      pB = dB(4027),
      lB = dB(1078),
      JB = dB(980);
    const YB = [...pB.f, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function gB(BB) {
      const {
        disabled: TB,
        hideWrapper: dB
      } = BB, {
        t: VB
      } = (0, lB.z)(), gB = BB.advancedMode ? YB.map((TB => [TB, BB.callbacks[TB]])) : pB.f.map((TB => [TB, BB.callbacks[TB]])), kB = (0, JB.jsx)("div", {
        className: yB()("PluginsGrid", {
          SectionBody: !dB
        }),
        children: gB.map((BB => {
          let [dB, VB] = BB;
          return (0, JB.jsx)(oB, {
            plugin: dB,
            callbacks: VB,
            disabled: TB
          }, dB)
        }))
      });
      return dB ? kB : (0, JB.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, JB.jsx)("div", {
          className: "SectionTitle",
          children: VB("worldBuilder:pluginsSection")
        }), kB]
      })
    }

    function oB(BB) {
      let {
        plugin: TB,
        callbacks: {
          isEnabled: dB,
          hN: VB
        },
        disabled: pB
      } = BB;
      const {
        t: YB
      } = (0, lB.z)(), gB = dB();
      return (0, JB.jsxs)("div", {
        className: yB()("PluginCard", {
          PluginCardEnabled: gB,
          PluginCardDisabledForm: pB
        }),
        "data-pad-focusable": !0,
        "aria-disabled": pB || void 0,
        onClick: () => {
          pB || VB(!gB)
        },
        children: [(0, JB.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, JB.jsx)("img", {
            src: `/textures/games/classic/customGames/${TB}.png`,
            alt: TB
          })
        }), (0, JB.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, JB.jsx)("div", {
            className: "PluginCardTitle",
            children: YB(kB[TB])
          }), (0, JB.jsx)("div", {
            className: "PluginCardDescription",
            children: YB(LB[TB])
          })]
        }), (0, JB.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: YB(gB ? "general:on" : "general:off")
        })]
      })
    }
    const kB = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      LB = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  4334: (BB, TB, dB) => {
    dB.d(TB, {
      h: () => yT,
      e: () => VT,
      g: () => dT,
      i: () => pT
    });
    var VB = dB(62),
      yB = dB(1235),
      pB = dB(1324),
      lB = dB(1555),
      JB = dB(1078),
      YB = dB(1225),
      gB = dB(1249),
      oB = dB(946),
      kB = dB(1105),
      LB = dB(933),
      OB = dB.n(LB),
      DB = dB(270),
      uB = dB(4027),
      HB = dB(1117),
      EB = dB(4339),
      vB = dB(2602),
      mB = dB(4354),
      iB = dB(980);

    function NB(BB) {
      let {
        icon: TB,
        title: dB,
        disabled: VB,
        children: yB
      } = BB;
      return (0, iB.jsxs)("div", {
        className: OB()("ManageCard", {
          ManageCardDisabled: VB
        }),
        children: [(0, iB.jsxs)("div", {
          className: "ManageCardHead",
          children: [(0, iB.jsx)("div", {
            className: "ManageCardIcon",
            children: (0, iB.jsx)(oB.e, {
              name: TB
            })
          }), (0, iB.jsx)("div", {
            children: (0, iB.jsx)("h2", {
              className: "ManageCardTitle",
              children: dB
            })
          })]
        }), (0, iB.jsxs)("div", {
          className: "ManageCardBody",
          children: [yB, VB && (0, iB.jsx)("div", {
            className: "ManageCardDisabledOverlay"
          })]
        })]
      })
    }

    function tB(BB) {
      let {
        label: TB,
        caption: dB,
        children: VB
      } = BB;
      return (0, iB.jsxs)("div", {
        className: "ManageStackedField",
        children: [(0, iB.jsx)("div", {
          className: "ManageStackedFieldLabel",
          children: TB
        }), VB, dB && (0, iB.jsx)("div", {
          className: "ManageStackedFieldCaption",
          children: dB
        })]
      })
    }

    function fB(BB) {
      let {
        label: TB,
        caption: dB,
        disabled: VB,
        children: yB
      } = BB;
      return (0, iB.jsxs)("div", {
        className: OB()("ManageField", {
          ManageFieldDisabled: VB
        }),
        children: [(0, iB.jsxs)("div", {
          className: "ManageFieldText",
          children: [(0, iB.jsx)("div", {
            className: "ManageFieldLabel",
            children: TB
          }), (0, iB.jsx)("div", {
            className: "ManageFieldCaption",
            children: dB
          })]
        }), (0, iB.jsx)("div", {
          className: "ManageFieldControl",
          children: yB
        })]
      })
    }

    function sB(BB) {
      var TB, dB;
      let {
        schematicData: VB,
        updateSchematicData: yB,
        publishFormEnabled: pB,
        formEnabled: lB
      } = BB;
      const {
        t: YB
      } = (0, JB.z)(), gB = !pB, oB = {
        tpRequests: {
          isEnabled: () => !VB.disableTpRequests,
          hN: BB => yB("disableTpRequests", !BB)
        },
        spawnProtection: {
          isEnabled: () => !VB.disableSpawnProtection,
          hN: BB => yB("disableSpawnProtection", !BB)
        },
        spawnReset: {
          isEnabled: () => !!VB.enableSpawnReset,
          hN: BB => yB("enableSpawnReset", BB)
        },
        smpMarketplace: {
          isEnabled: () => !!VB.enableSmpMarketplace,
          hN: BB => yB("enableSmpMarketplace", BB)
        },
        survivalGuns: {
          isEnabled: () => !!VB.enableSurvivalGuns,
          hN: BB => yB("enableSurvivalGuns", BB)
        },
        fallDamage: {
          isEnabled: () => !VB.disableFallDamage,
          hN: BB => yB("disableFallDamage", !BB)
        },
        dayNight: {
          isEnabled: () => !!VB.enableDayNight,
          hN: BB => yB("enableDayNight", BB)
        }
      };
      return (0, iB.jsxs)(iB.Fragment, {
        children: [!1 === VB.schematicContainsSpawnBlock && (0, iB.jsx)("div", {
          className: "ManageWarningBanner",
          children: YB("worldBuilder:mustContainSpawnBlock")
        }), (0, iB.jsxs)("div", {
          className: "ManageSettingsGrid",
          children: [(0, iB.jsxs)(NB, {
            icon: "globe",
            title: YB("worldBuilder:worldRulesSection"),
            disabled: !lB,
            children: [(0, iB.jsx)(fB, {
              label: YB("classic:defaultGamemode"),
              caption: YB("classic:defaultGamemodeDescription"),
              disabled: gB,
              children: (0, iB.jsx)(vB.e, {
                controlClassName: "ManageDropdown",
                options: uB.z.map((BB => ({
                  value: BB,
                  label: DB.n[BB]
                }))),
                value: VB.defaultGamemode,
                onChange: BB => yB("defaultGamemode", BB.value)
              })
            }), (0, iB.jsx)(fB, {
              label: YB("classic:voidDeathHeight"),
              caption: YB("classic:voidDeathHeightDescription"),
              disabled: gB,
              children: (0, iB.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, iB.jsx)("input", {
                  type: "number",
                  max: HB.z,
                  value: null !== (TB = VB.voidDeathHeight) && void 0 !== TB ? TB : "",
                  onChange: BB => {
                    const TB = parseInt(BB.target.value);
                    yB("voidDeathHeight", TB)
                  }
                }), (0, iB.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: YB("worldBuilder:blocksUnit")
                })]
              })
            }), (0, iB.jsx)(fB, {
              label: YB("classic:worldBorder"),
              caption: YB("classic:worldBorderDescription"),
              disabled: gB,
              children: (0, iB.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, iB.jsx)("input", {
                  type: "number",
                  min: HB.F,
                  max: HB.A,
                  placeholder: YB("worldBuilder:noWorldBorderLimit"),
                  value: null !== (dB = VB.worldBorder) && void 0 !== dB ? dB : "",
                  onChange: BB => {
                    const TB = parseInt(BB.target.value);
                    yB("worldBorder", isNaN(TB) ? null : TB)
                  }
                }), (0, iB.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: YB("worldBuilder:blocksUnit")
                })]
              })
            }), (0, iB.jsx)(fB, {
              label: YB("classic:disableMobs"),
              caption: YB("classic:disableMobsDescription"),
              disabled: gB,
              children: (0, iB.jsx)(EB.i, {
                checked: VB.disableMobs,
                setChecked: BB => yB("disableMobs", BB),
                disabled: gB
              })
            })]
          }), (0, iB.jsxs)(NB, {
            icon: "user-group",
            title: YB("worldBuilder:playerAndLobbySection"),
            disabled: !lB,
            children: [(0, iB.jsx)(fB, {
              label: YB("classic:disableKeepInventory"),
              caption: YB("classic:disableKeepInventoryDescription"),
              disabled: gB,
              children: (0, iB.jsx)(EB.i, {
                checked: VB.disableKeepInventory,
                setChecked: BB => yB("disableKeepInventory", BB),
                disabled: gB
              })
            }), (0, iB.jsx)(fB, {
              label: YB("classic:persistInventory"),
              caption: YB("classic:persistInventoryDescription"),
              disabled: gB,
              children: (0, iB.jsx)(vB.e, {
                controlClassName: "ManageDropdown",
                options: uB.i.map((BB => ({
                  value: BB,
                  label: DB.j[BB]
                }))),
                value: VB.persistInventory,
                onChange: BB => yB("persistInventory", BB.value)
              })
            }), (0, iB.jsx)(fB, {
              label: YB("classic:persistWorld"),
              caption: YB("classic:persistWorldDescription"),
              disabled: gB,
              children: (0, iB.jsx)(EB.i, {
                checked: VB.persistWorld,
                setChecked: BB => yB("persistWorld", BB),
                disabled: gB
              })
            }), (0, iB.jsx)(fB, {
              label: YB("classic:disableLobbySpawn"),
              caption: YB("classic:disableLobbySpawnDescription"),
              disabled: gB,
              children: (0, iB.jsx)(EB.i, {
                checked: VB.disableLobbySpawn,
                setChecked: BB => yB("disableLobbySpawn", BB),
                disabled: gB
              })
            }), (0, iB.jsx)(fB, {
              label: YB("classic:hideLobbyCode"),
              caption: YB("classic:hideLobbyCodeDescription"),
              disabled: gB,
              children: (0, iB.jsx)(EB.i, {
                checked: VB.hideLobbyCode,
                setChecked: BB => yB("hideLobbyCode", BB),
                disabled: gB
              })
            })]
          })]
        }), (0, iB.jsx)(NB, {
          icon: "layer-group",
          title: YB("worldBuilder:pluginsSection"),
          disabled: !lB,
          children: (0, iB.jsx)(mB.b, {
            callbacks: oB,
            disabled: gB,
            advancedMode: !0,
            hideWrapper: !0
          })
        })]
      })
    }
    var MB = dB(4362),
      zB = dB(3821),
      wB = dB(1393),
      UB = dB(2983),
      FB = dB(1011),
      KB = dB(4312),
      rB = dB(4367),
      IB = dB(1330);
    const cB = 50,
      SB = .3;
    async function PB(BB) {
      const TB = await
      function(BB) {
        return new Promise(((TB, dB) => {
          const VB = new FileReader;
          VB.onload = () => TB(VB.result), VB.onerror = dB, VB.readAsDataURL(BB)
        }))
      }(BB), dB = await
      function(BB) {
        return new Promise(((TB, dB) => {
          const VB = new Image;
          VB.onload = () => TB(VB), VB.onerror = () => dB(new Error("Failed to load image")), VB.src = BB
        }))
      }(TB);
      if (dB.naturalHeight > dB.naturalWidth) throw new QB;
      const VB = 1024 * cB,
        {
          dataUrl: yB,
          finalQuality: pB
        } = function(BB, TB) {
          const dB = document.createElement("canvas");
          dB.width = BB.naturalWidth, dB.height = BB.naturalHeight, dB.getContext("2d").drawImage(BB, 0, 0);
          let VB = .92,
            yB = dB.toDataURL("image/jpeg", VB);
          for (; .75 * yB.length > TB && VB > .05;) VB -= .05, yB = dB.toDataURL("image/jpeg", VB);
          return {
            dataUrl: yB,
            finalQuality: VB
          }
        }(dB, VB);
      if (Math.ceil(.75 * yB.length) > VB) throw new RB;
      return {
        base64Jpg: yB,
        heavilyCompressed: pB < SB
      }
    }
    class QB extends Error {}
    class RB extends Error {}
    var aB = function(BB) {
      return BB[BB.NOT_LOGGED_IN = 0] = "NOT_LOGGED_IN", BB[BB.THUMBNAIL_LIMIT_REACHED = 1] = "THUMBNAIL_LIMIT_REACHED", BB
    }(aB || {});

    function ZB(BB) {
      var TB;
      let {
        schematicId: dB,
        hasReadUploadPolicy: yB,
        onPolicyValidationError: YB,
        onThumbnailReady: gB
      } = BB;
      const {
        t: LB
      } = (0, JB.z)(), [DB, uB] = (0, VB.useState)(null), [HB, EB] = (0, VB.useState)(""), [vB, mB] = (0, VB.useState)(""), [NB, tB] = (0, VB.useState)(!0), [fB, sB] = (0, VB.useState)(!1), MB = (0, VB.useRef)(!1), [zB, wB] = (0, VB.useState)(null), [UB, FB] = (0, VB.useState)(!1), [KB, IB] = (0, VB.useState)(!1), cB = (0, VB.useRef)(0), {
        getRootProps: SB,
        getInputProps: aB,
        isDragActive: ZB
      } = (0, rB.c)({
        accept: {
          "image/*": [".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp"]
        },
        multiple: !1,
        onDrop: async BB => {
          if (0 === BB.length) return;
          const TB = BB[0],
            dB = ++cB.current;
          wB(null), FB(!1), uB(null), EB(TB.name);
          try {
            const BB = await PB(TB);
            if (dB !== cB.current) return;
            uB(BB), FB(BB.heavilyCompressed)
          } catch (VB) {
            if (dB !== cB.current) return;
            wB(LB(VB instanceof QB ? "thumbnail:portraitImagesNotAllowed" : VB instanceof RB ? "thumbnail:couldNotCompressImage" : "thumbnail:failedToUploadImage"))
          }
        },
        useFsAccessApi: !1
      }), XB = HB.length <= 30 ? HB : `${HB.slice(0,27)}...`, WB = null !== (TB = null === DB || void 0 === DB ? void 0 : DB.base64Jpg) && void 0 !== TB ? TB : null, hB = vB.trim(), CB = hB.length >= kB.r && hB.length <= kB.n, GB = KB && !DB && !zB, qB = KB && !CB;
      return (0, iB.jsxs)("div", {
        className: "ThumbnailUploadContainer",
        children: [(0, iB.jsxs)("div", {
          ...SB({
            className: OB()("ThumbnailUploadDropzone", {
              ActiveDrag: ZB,
              ValidationError: GB
            })
          }),
          children: [(0, iB.jsx)("input", {
            ...aB()
          }), !ZB && WB ? (0, iB.jsxs)(iB.Fragment, {
            children: [(0, iB.jsxs)("div", {
              className: "ThumbnailAspectPreviews",
              children: [(0, iB.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, iB.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "1:1"
                }), (0, iB.jsx)("div", {
                  className: "ThumbnailAspectFrame Square",
                  children: (0, iB.jsx)("img", {
                    src: WB,
                    alt: "1:1 preview"
                  })
                })]
              }), (0, iB.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, iB.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "16:9"
                }), (0, iB.jsx)("div", {
                  className: "ThumbnailAspectFrame Wide",
                  children: (0, iB.jsx)("img", {
                    src: WB,
                    alt: "16:9 preview"
                  })
                })]
              })]
            }), (0, iB.jsxs)("div", {
              children: [(0, iB.jsx)("div", {
                className: "ThumbnailUploadInstructions Active",
                children: XB
              }), (0, iB.jsx)("div", {
                className: "ThumbnailUploadInstructions Preview",
                children: LB("thumbnail:preview")
              })]
            })]
          }) : (0, iB.jsxs)(iB.Fragment, {
            children: [(0, iB.jsx)("div", {
              className: "ThumbnailUploadIcon",
              children: (0, iB.jsx)(oB.e, {
                name: "image"
              })
            }), (0, iB.jsx)("div", {
              className: "ThumbnailUploadInstructions",
              children: LB("thumbnail:dragImageHere")
            })]
          })]
        }), GB && (0, iB.jsx)("div", {
          className: "ThumbnailUploadError",
          children: LB("thumbnail:imageRequired")
        }), (0, iB.jsx)(lB.e, {
          className: OB()("ThumbnailUploadNameInput", {
            ValidationError: qB
          }),
          placeholderText: LB("thumbnail:thumbnailName"),
          defaultValue: vB,
          onValueChange: BB => {
            mB(BB)
          },
          maxLength: kB.n
        }), qB && (0, iB.jsx)("div", {
          className: "ThumbnailUploadError",
          children: LB("thumbnail:nameRequired", {
            min: kB.r,
            max: kB.n
          })
        }), (0, iB.jsxs)("label", {
          className: "ThumbnailUploadCheckbox",
          children: [(0, iB.jsx)("input", {
            type: "checkbox",
            checked: NB,
            onChange: BB => {
              tB(BB.target.checked)
            }
          }), LB("thumbnail:setAsThumbnailOnceApproved")]
        }), UB && (0, iB.jsx)("div", {
          className: "ThumbnailUploadWarning",
          children: LB("thumbnail:heavyCompressionWarning")
        }), zB && (0, iB.jsx)("div", {
          className: "ThumbnailUploadError",
          children: zB
        }), (0, iB.jsx)(pB.k, {
          disabled: fB,
          className: "ThumbnailUploadButton",
          onClick: async () => {
            if (IB(!0), !MB.current && DB && CB && yB) {
              MB.current = !0, sB(!0), wB(null);
              try {
                await gB(DB.base64Jpg, hB, NB ? dB : null)
              } catch (BB) {
                wB(BB.errorMessageForUser ? LB(BB.errorMessageForUser, BB.errorMessageTranslationParams) : LB("thumbnail:failedToUploadImage"))
              } finally {
                MB.current = !1, sB(!1)
              }
            } else yB || YB()
          },
          children: LB(fB ? "thumbnail:processing" : "thumbnail:uploadThumbnail")
        })]
      })
    }
    const XB = 2e3;

    function WB(BB) {
      let {
        schematicId: TB,
        ownedThumbnailCount: dB,
        onClose: yB,
        onThumbnailReady: pB
      } = BB;
      const {
        t: lB
      } = (0, JB.z)(), {
        userContext: YB
      } = (0, FB.b)(), [gB, LB] = (0, VB.useState)(!1), [DB, uB] = (0, VB.useState)(!1), [HB, EB] = (0, VB.useState)(!1), vB = (0, VB.useRef)();
      (0, VB.useEffect)((() => () => {
        clearTimeout(vB.current)
      }), []);
      const mB = function(BB, TB) {
        const dB = [];
        return BB.isLoggedIn() || dB.push(aB.NOT_LOGGED_IN), TB >= kB.Z && dB.push(aB.THUMBNAIL_LIMIT_REACHED), dB
      }(YB, dB);
      if (mB.length > 0) {
        const BB = {
          [aB.NOT_LOGGED_IN]: {
            key: "thumbnail:mustBeLoggedInToUpload"
          },
          [aB.THUMBNAIL_LIMIT_REACHED]: {
            key: "thumbnail:thumbnailLimitReachedPleaseDelete",
            params: {
              max: kB.Z
            }
          }
        };
        return (0, iB.jsxs)("div", {
          className: "ThumbnailUploaderInner",
          children: [(0, iB.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: lB("thumbnail:cannotUploadThumbnail")
          }), mB.map(((TB, dB) => {
            const VB = BB[TB];
            return (0, iB.jsxs)("div", {
              className: "CannotUploadThumbnailItem",
              children: [(0, iB.jsx)(oB.e, {
                name: "triangle-exclamation"
              }), (0, iB.jsx)("span", {
                children: lB(VB.key, VB.params)
              })]
            }, dB)
          }))]
        })
      }
      return (0, iB.jsxs)("div", {
        className: OB()("ThumbnailUploaderInner", {
          ThumbnailUploaderSuccess: gB
        }),
        children: [gB && (0, iB.jsxs)("div", {
          className: "ThumbnailUploadSuccessOverlay",
          children: [(0, iB.jsxs)("div", {
            className: "ThumbnailUploadSuccessIcon FullyFancyText AnimFadeInScaleUp",
            children: [(0, iB.jsx)(oB.e, {
              name: "check"
            }), (0, iB.jsx)(IB.c, {})]
          }), (0, iB.jsx)("div", {
            className: "ThumbnailUploadSuccessText AnimFadeInScaleUp",
            children: lB("thumbnail:thumbnailUploaded")
          })]
        }), (0, iB.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: lB("thumbnail:uploadThumbnail")
        }), (0, iB.jsxs)("div", {
          className: "ThumbnailUploaderBody",
          children: [(0, iB.jsxs)("div", {
            className: "ThumbnailUploaderLeft",
            children: [(0, iB.jsx)("h3", {
              className: "SchematicPopupSubtitle",
              children: lB("thumbnail:chooseImage", {
                maxSizeKb: cB
              })
            }), (0, iB.jsx)(ZB, {
              schematicId: TB,
              hasReadUploadPolicy: DB,
              onPolicyValidationError: () => {
                EB(!0)
              },
              onThumbnailReady: async (BB, TB, dB) => {
                await pB(BB, TB, dB), LB(!0), vB.current = setTimeout(yB, XB)
              }
            })]
          }), (0, iB.jsxs)("div", {
            className: "ThumbnailUploadPolicy",
            children: [(0, iB.jsx)("h3", {
              className: "ThumbnailUploadPolicyTitle",
              children: lB("thumbnail:uploadPolicy")
            }), (0, iB.jsxs)("ul", {
              className: "ThumbnailUploadPolicyList",
              children: [(0, iB.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, iB.jsx)(oB.e, {
                  name: "check"
                }), (0, iB.jsx)("span", {
                  children: lB("thumbnail:policyFollowGuidelines")
                })]
              }), (0, iB.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, iB.jsx)(oB.e, {
                  name: "check"
                }), (0, iB.jsx)("span", {
                  children: lB("thumbnail:policyInGameAssets")
                })]
              }), (0, iB.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, iB.jsx)(oB.e, {
                  name: "check"
                }), (0, iB.jsx)("span", {
                  children: lB("thumbnail:policyLimitText")
                })]
              }), (0, iB.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, iB.jsx)(oB.e, {
                  name: "x"
                }), (0, iB.jsx)("span", {
                  children: lB("thumbnail:policyCopyrightContent")
                })]
              }), (0, iB.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, iB.jsx)(oB.e, {
                  name: "x"
                }), (0, iB.jsx)("span", {
                  children: lB("thumbnail:policyOutOfGameAssets")
                })]
              }), (0, iB.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, iB.jsx)(oB.e, {
                  name: "x"
                }), (0, iB.jsx)("span", {
                  children: lB("thumbnail:policyBloxdTags")
                })]
              }), (0, iB.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, iB.jsx)(oB.e, {
                  name: "x"
                }), (0, iB.jsx)("span", {
                  children: lB("thumbnail:policyMustReflectGame")
                })]
              })]
            }), (0, iB.jsxs)("label", {
              className: OB()("ThumbnailUploadCheckbox Policy", {
                ValidationError: HB && !DB
              }),
              children: [(0, iB.jsx)("input", {
                type: "checkbox",
                checked: DB,
                onChange: BB => {
                  uB(BB.target.checked)
                }
              }), lB("thumbnail:agreeToUploadPolicy")]
            }), HB && !DB && (0, iB.jsx)("div", {
              className: "ThumbnailPolicyError",
              children: lB("thumbnail:policyRequired")
            })]
          })]
        })]
      })
    }
    var hB = dB(1089);
    const CB = {
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

    function GB(BB) {
      var TB, dB;
      let {
        schematicData: lB,
        updateSchematicData: gB,
        publishFormEnabled: kB,
        onClose: LB
      } = BB;
      const {
        t: DB
      } = (0, JB.z)(), {
        userContext: uB,
        isUserContextUpdating: HB
      } = (0, FB.b)(), EB = (0, UB.b)(), [vB, mB] = (0, VB.useState)([]), [NB, tB] = (0, VB.useState)([]), [fB, sB] = (0, VB.useState)(!0), [MB, zB] = (0, VB.useState)(null !== (TB = lB.customThumbnailId) && void 0 !== TB ? TB : null), [rB, IB] = (0, VB.useState)(null), cB = (0, VB.useRef)(null !== (dB = lB.customThumbnailId) && void 0 !== dB ? dB : null), SB = (0, VB.useRef)(0), PB = (0, VB.useRef)(null), QB = (0, VB.useRef)(null), RB = (0, VB.useRef)(null), aB = (0, VB.useRef)(!1);

      function ZB(BB, TB) {
        RB.current && (clearTimeout(RB.current), RB.current = null), IB(BB), null !== BB && TB && (RB.current = setTimeout((() => {
          IB(null), RB.current = null
        }), 5e3))
      }(0, VB.useEffect)((() => () => {
        clearTimeout(QB.current), clearTimeout(RB.current)
      }), []);
      const XB = (0, VB.useCallback)((() => {
        sB(!0), wB.c.getOwnedThumbnails(uB).then((BB => {
          const TB = [],
            dB = [];
          for (const VB of BB.thumbnails) VB.rejectionPolicyId ? TB.push(VB) : dB.push(VB);
          TB.sort(((BB, TB) => BB.lastUpdatedAt - TB.lastUpdatedAt)), dB.sort(((BB, TB) => {
            const dB = BB.approved ? 1 : 0,
              VB = (TB.approved ? 1 : 0) - dB;
            return 0 !== VB ? VB : TB.lastUpdatedAt - BB.lastUpdatedAt
          })), tB(TB), mB(dB)
        })).catch((BB => {
          console.error("Failed to fetch thumbnails:", BB)
        })).finally((() => {
          sB(!1)
        }))
      }), [uB]);
      async function CB(BB, TB, dB) {
        return wB.c.uploadSchematicThumbnail(uB, BB, TB, dB).then((() => {
          ZB({
            text: DB("thumbnail:uploadedAwaitingModeration"),
            type: "success"
          }, !0), XB()
        }))
      }

      function GB() {
        SB.current = Date.now(), QB.current = null;
        const BB = PB.current;
        PB.current = null, ZB({
          text: DB("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), wB.c.setSchematicThumbnail(uB, lB.schematicId, BB).then((() => {
          EB.current && (ZB({
            text: DB("thumbnail:thumbnailUpdated"),
            type: "success"
          }, !0), cB.current = BB, gB("customThumbnailId", BB), gB("customThumbnailBlurhash", void 0), gB("customThumbnailVariants", void 0))
        })).catch((BB => {
          EB.current && (ZB({
            text: BB.errorMessageForUser ? DB(BB.errorMessageForUser, BB.errorMessageTranslationParams) : DB("thumbnail:failedToSetThumbnail"),
            type: "error"
          }, !0), zB(cB.current))
        }))
      }

      function jB(BB) {
        zB(BB), PB.current = BB;
        const TB = Date.now() - SB.current;
        TB >= 1e3 ? GB() : (ZB({
          text: DB("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), QB.current || (QB.current = setTimeout((() => {
          GB()
        }), 1e3 - TB)))
      }
      return (0, VB.useEffect)((() => {
        !1 === HB && XB()
      }), [HB, XB]), NB.length > 0 ? (0, iB.jsx)(qB, {
        rejectedThumbnails: NB,
        userContext: uB,
        isMountedRef: EB,
        onAcknowledged: XB
      }) : (0, iB.jsxs)("div", {
        className: "BloxdForm ThumbnailSection",
        children: [(0, iB.jsxs)("div", {
          className: "SectionTitle",
          children: [DB("thumbnail:gameThumbnail"), rB && (0, iB.jsx)("span", {
            className: OB()("ThumbnailActionMsg", `ThumbnailActionMsg--${rB.type}`),
            children: rB.text
          })]
        }), (0, iB.jsx)("div", {
          className: "SectionBody",
          children: (0, iB.jsxs)("div", {
            className: "ThumbnailGrid",
            children: [(0, iB.jsxs)("div", {
              className: OB()("ThumbnailGridItem ThumbnailGridItemDefault", {
                ThumbnailGridItemSelected: null === MB
              }),
              onClick: () => jB(null),
              children: [(0, iB.jsx)(KB.e, {
                game: {
                  schematicId: lB.schematicId,
                  imageBlurhash: lB.imageBlurhash
                }
              }), (0, iB.jsx)("div", {
                className: "ThumbnailGridItemLabel ThumbnailDefaultLabel",
                children: DB("general:default")
              })]
            }), fB && (0, iB.jsx)(YB.b, {}), vB.map(((BB, TB) => (0, iB.jsxs)("div", {
              className: OB()("ThumbnailGridItem", {
                ThumbnailGridItemSelected: MB === BB.id,
                ThumbnailGridItemPending: !BB.approved
              }),
              onClick: () => {
                BB.approved && jB(BB.id)
              },
              children: [BB.approved && (0, iB.jsx)("img", {
                src: `${hB.clientSideServerUrls.s3Url}/customThumbnails/${BB.id}.jpg`,
                alt: "Thumbnail"
              }), BB.approved && (0, iB.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: BB.name
              }), BB.id && (0, iB.jsx)(pB.K, {
                className: "ThumbnailDeleteButton",
                onClick: TB => async function(BB, TB, dB) {
                  BB.stopPropagation();
                  const VB = await yB.NotificationProvider.showCustomPopup({
                      body: BB => (0, iB.jsx)(xB, {
                        thumbnailId: TB,
                        thumbnailName: dB,
                        onClose: TB => {
                          TB && (aB.current = !0), BB()
                        }
                      }),
                      middleScreenPopupClassName: "ThumbnailDeleteConfirmPopup",
                      onClose: LB
                    }).getResult(),
                    pB = aB.current;
                  aB.current = !1, pB && !0 === VB && (EB.current && ZB({
                    text: DB("thumbnail:deletingThumbnail"),
                    type: "info"
                  }, !1), wB.c.deleteSchematicThumbnail(uB, TB).then((() => {
                    EB.current && (ZB({
                      text: DB("thumbnail:thumbnailDeleted"),
                      type: "success"
                    }, !0), cB.current === TB && jB(null), XB())
                  })).catch((BB => {
                    EB.current && ZB({
                      text: BB.errorMessageForUser ? DB(BB.errorMessageForUser, BB.errorMessageTranslationParams) : DB("thumbnail:failedToDeleteThumbnail"),
                      type: "error"
                    }, !0)
                  })))
                }(TB, BB.id, BB.name),
                children: (0, iB.jsx)(oB.e, {
                  name: "trash-can"
                })
              }), !BB.approved && (0, iB.jsx)("div", {
                className: "ThumbnailUnapprovedIcon",
                children: (0, iB.jsx)(oB.e, {
                  name: "hourglass-clock"
                })
              }), !BB.approved && (0, iB.jsxs)("div", {
                className: "ThumbnailGridItemLabel ThumbnailPendingLabel",
                children: [BB.name, (0, iB.jsx)("br", {}), DB("thumbnail:pendingApproval")]
              })]
            }, TB))), (0, iB.jsxs)("div", {
              className: OB()("ThumbnailGridItem ThumbnailUploadTile", {
                ThumbnailUploadTileDisabled: !kB
              }),
              onClick: () => {
                kB && function(BB) {
                  let {
                    schematicId: TB,
                    ownedThumbnailCount: dB,
                    onThumbnailReady: VB,
                    onClose: pB
                  } = BB;
                  yB.NotificationProvider.showCustomPopup({
                    body: BB => (0, iB.jsx)(WB, {
                      schematicId: TB,
                      ownedThumbnailCount: dB,
                      onClose: BB,
                      onThumbnailReady: VB
                    }),
                    middleScreenPopupClassName: "SchematicThumbnailPopup",
                    onClose: pB,
                    unlockPointerKey: "schematicThumbnailUploaderPopup"
                  })
                }({
                  schematicId: lB.schematicId,
                  ownedThumbnailCount: vB.length,
                  onThumbnailReady: CB,
                  onClose: LB
                })
              },
              children: [(0, iB.jsx)(oB.e, {
                name: "plus"
              }), (0, iB.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: DB("thumbnail:uploadThumbnail")
              })]
            })]
          })
        })]
      })
    }

    function qB(BB) {
      let {
        rejectedThumbnails: TB,
        userContext: dB,
        isMountedRef: yB,
        onAcknowledged: lB
      } = BB;
      const {
        t: gB
      } = (0, JB.z)(), [kB, LB] = (0, VB.useState)(!1), [OB, DB] = (0, VB.useState)(!1), uB = function(BB) {
        const TB = new Map;
        for (const dB of BB) {
          const BB = dB.rejectionPolicyId,
            VB = TB.get(BB);
          VB ? VB.push(dB) : TB.set(BB, [dB])
        }
        return TB
      }(TB);
      return (0, iB.jsxs)("div", {
        className: "ThumbnailRejectionNotice",
        children: [(0, iB.jsxs)("div", {
          className: "ThumbnailRejectionNoticeTitle",
          children: [(0, iB.jsx)(oB.e, {
            name: "triangle-exclamation"
          }), " ", gB("thumbnail:thumbnailsRejected"), " ", (0, iB.jsx)(oB.e, {
            name: "triangle-exclamation"
          })]
        }), (0, iB.jsx)("div", {
          className: "ThumbnailRejectionNoticeSubtitle",
          children: gB("thumbnail:thumbnailsRejectedDescription")
        }), (0, iB.jsx)("div", {
          className: "ThumbnailRejectionNoticeList",
          children: [...uB.entries()].map((BB => {
            let [TB, dB] = BB;
            const VB = CB[TB];
            return (0, iB.jsxs)("div", {
              className: "ThumbnailRejectionNoticeGroup",
              children: [(0, iB.jsx)("div", {
                className: "ThumbnailRejectionNoticeItems",
                children: dB.map((BB => (0, iB.jsxs)("div", {
                  className: "ThumbnailRejectionNoticeItem",
                  children: [(0, iB.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemIcon",
                    children: (0, iB.jsx)(oB.e, {
                      name: "image-slash"
                    })
                  }), (0, iB.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemDetails",
                    children: (0, iB.jsx)("div", {
                      className: "ThumbnailRejectionNoticeItemName",
                      children: BB.name
                    })
                  })]
                }, BB.id)))
              }), (0, iB.jsxs)("div", {
                className: "ThumbnailRejectionNoticeGroupReason",
                children: [gB("thumbnail:rejectionReason"), " ", VB ? gB(VB.reason) : TB]
              }), VB && (0, iB.jsx)("ul", {
                className: "ThumbnailRejectionNoticeGroupTips",
                children: VB.tips.map((BB => (0, iB.jsx)("li", {
                  children: gB(BB)
                }, BB)))
              })]
            }, TB)
          }))
        }), (0, iB.jsxs)("label", {
          className: "ThumbnailRejectionNoticeCheckbox",
          children: [(0, iB.jsx)(zB.b, {
            checked: kB,
            onChange: BB => LB(BB.target.checked),
            disabled: OB
          }), (0, iB.jsx)("span", {
            children: gB("thumbnail:haveReadRejectionReasons")
          })]
        }), (0, iB.jsx)(pB.k, {
          onClick: async function() {
            DB(!0);
            const BB = await Promise.allSettled(TB.map((BB => wB.c.deleteSchematicThumbnail(dB, BB.id))));
            if (!yB.current) return;
            const VB = BB.filter((BB => "rejected" === BB.status));
            VB.length > 0 && console.error("Some rejected thumbnails failed to delete:", VB), lB()
          },
          disabled: !kB || OB,
          className: "ThumbnailRejectionNoticeAcceptButton",
          children: OB ? (0, iB.jsx)(YB.b, {}) : gB("general:accept")
        })]
      })
    }

    function xB(BB) {
      let {
        thumbnailId: TB,
        thumbnailName: dB,
        onClose: VB
      } = BB;
      const {
        t: yB
      } = (0, JB.z)();
      return (0, iB.jsxs)("div", {
        className: "ThumbnailDeleteConfirm",
        children: [(0, iB.jsx)("div", {
          className: "ThumbnailDeleteConfirmTitle",
          children: yB("thumbnail:deleteThumbnail")
        }), (0, iB.jsxs)("div", {
          className: "ThumbnailDeleteConfirmImageContainer",
          children: [(0, iB.jsx)("img", {
            className: "ThumbnailDeleteConfirmImage",
            src: `${hB.clientSideServerUrls.s3Url}/customThumbnails/${TB}.jpg`,
            alt: "Thumbnail to delete"
          }), (0, iB.jsx)("div", {
            className: "ThumbnailGridItemLabel",
            children: dB
          })]
        }), (0, iB.jsx)("div", {
          className: "ThumbnailDeleteConfirmSubtitle",
          children: yB("thumbnail:deleteThumbnailConfirmation")
        }), (0, iB.jsxs)("div", {
          className: "ThumbnailDeleteConfirmButtons",
          children: [(0, iB.jsxs)(pB.K, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => VB(!0),
            children: [(0, iB.jsx)(oB.e, {
              name: "trash-can"
            }), " ", yB("general:delete")]
          }), (0, iB.jsx)(pB.g, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => VB(!1),
            children: yB("general:cancel")
          })]
        })]
      })
    }
    var jB = dB(2626),
      AB = dB(4400),
      bB = dB(4408),
      nB = dB(4451);

    function eB(BB) {
      let {
        schematicData: TB,
        setTexturePack: dB,
        initializeTexturePack: yB,
        publishFormEnabled: pB
      } = BB;
      const {
        t: lB
      } = (0, JB.z)(), [YB, gB] = (0, VB.useState)(null), [oB, kB] = (0, VB.useState)(null), [LB, DB] = (0, VB.useState)(!1), uB = (0, UB.b)(), HB = pB && !LB, EB = TB.customTexturePackKey;

      function vB(BB) {
        var TB;
        gB(BB.metaData.id), kB(null !== (TB = BB.metaData.fromFolderName) && void 0 !== TB ? TB : null), (BB.metaData.id !== jB.r.CUSTOM || BB.metaData.fromFolderName) && dB(BB)
      }
      return (0, VB.useEffect)((() => {
        EB && (DB(!0), (0, AB.c)(EB).then((BB => {
          var TB;
          uB.current && (BB ? (gB(BB.metaData.id), kB(null !== (TB = BB.metaData.fromFolderName) && void 0 !== TB ? TB : null), yB(BB)) : console.error(`No texture pack at ${EB}`))
        })).catch((BB => {
          console.error("Error fetching texture pack: ", BB)
        })).finally((() => {
          DB(!1)
        })))
      }), [EB, yB, uB]), (0, iB.jsxs)("div", {
        className: "BloxdForm TexturePackSection",
        children: [(0, iB.jsx)("div", {
          className: "SectionTitle",
          children: lB("customTexturePack:customTexturePack")
        }), (0, iB.jsxs)("div", {
          className: "TexturePackList",
          children: [(0, iB.jsx)("div", {
            className: OB()("TexturePack", {
              Selected: null === YB && !LB,
              Disabled: !HB
            }),
            onClick: () => {
              HB && (gB(null), dB(null), kB(null))
            },
            children: (0, iB.jsx)("div", {
              className: "TexturePackName",
              children: "No Override"
            })
          }), Object.values(jB.r).map((BB => (0, iB.jsx)(bB.d, {
            id: BB,
            isSelected: BB === YB,
            setSelected: vB,
            disabled: !HB
          }, BB)))]
        }), YB === jB.r.CUSTOM && (0, iB.jsx)(nB.e, {
          folderName: oB,
          onTexturePackUpdated: vB,
          disabled: !HB,
          maxFileSizeMb: 25,
          packOwner: "customGame"
        })]
      })
    }
    var BT = dB(4470);

    function TT(BB) {
      var TB;
      let {
        gameCategory: dB,
        setGameCategory: VB,
        disabled: yB
      } = BB;
      const lB = null !== (TB = (0, DB.hb)(dB)) && void 0 !== TB ? TB : "other";
      return (0, iB.jsxs)("div", {
        className: "GameCategoryPicker",
        children: [(0, iB.jsx)(EB.g, {
          label: "worldBuilder:gameCategoryGroup",
          className: "GameCategoryGroup",
          disabled: yB,
          children: (0, iB.jsx)(vB.e, {
            options: DB.W.map((BB => ({
              value: BB,
              label: DB.U[BB]
            }))),
            value: lB,
            onChange: BB => {
              BB.value !== lB && VB(DB.P[BB.value][0])
            }
          })
        }), (0, iB.jsx)(EB.g, {
          label: "worldBuilder:gameCategory",
          className: "GameCategory",
          disabled: yB,
          children: (0, iB.jsx)("div", {
            className: "GameCategoryOptions",
            children: DB.P[lB].map((BB => (0, iB.jsx)(pB.T, {
              active: BB === dB,
              onClick: () => {
                VB(BB)
              },
              children: (0, DB.db)(BB)
            }, BB)))
          })
        })]
      })
    }

    function dT(BB) {
      let {
        editor: TB,
        onClose: dB
      } = BB;
      const {
        t: VB
      } = (0, JB.z)(), {
        schematicData: yB,
        updateSchematicData: pB,
        publishFormEnabled: YB,
        formEnabled: gB
      } = TB;
      return (0, iB.jsxs)(iB.Fragment, {
        children: [(0, iB.jsxs)(NB, {
          icon: "pen-to-square",
          title: VB("worldBuilder:basicsSection"),
          disabled: !gB,
          children: [(0, iB.jsx)(tB, {
            label: VB("general:name"),
            caption: VB("worldBuilder:schematicNameTagsHint"),
            children: (0, iB.jsx)(lB.e, {
              className: "SchematicPageName",
              defaultValue: yB.name,
              onValueChange: BB => pB("name", BB),
              placeholderText: VB("worldBuilder:schematicNamePlaceholder"),
              maxLength: kB.wb
            })
          }), (0, iB.jsx)(tB, {
            label: VB("general:description"),
            children: (0, iB.jsx)(lB.e, {
              className: "SchematicPageDescription",
              useTextarea: !0,
              defaultValue: yB.description,
              onValueChange: BB => pB("description", BB),
              placeholderText: VB("worldBuilder:schematicDescriptionPlaceholder"),
              maxLength: kB.vb
            })
          }), (0, iB.jsx)(TT, {
            gameCategory: yB.gameCategory,
            setGameCategory: BB => pB("gameCategory", BB),
            disabled: !YB
          }), !0 === yB.gamePublished && (0, iB.jsx)(GB, {
            schematicData: yB,
            updateSchematicData: pB,
            publishFormEnabled: YB,
            onClose: function() {
              null === dB || void 0 === dB || dB()
            }
          })]
        }), (0, iB.jsx)(sB, {
          schematicData: yB,
          updateSchematicData: pB,
          publishFormEnabled: YB,
          formEnabled: gB
        }), !0 === yB.gamePublished && (0, iB.jsx)(NB, {
          icon: "palette",
          title: VB("worldBuilder:texturePackSection"),
          disabled: !gB,
          children: (0, iB.jsx)(eB, {
            schematicData: yB,
            setTexturePack: TB.setTexturePack,
            initializeTexturePack: TB.initializeTexturePack,
            publishFormEnabled: YB
          })
        })]
      })
    }

    function VT(BB) {
      let {
        editor: TB
      } = BB;
      const {
        t: dB
      } = (0, JB.z)(), {
        schematicData: VB,
        formEnabled: yB,
        hasUnsavedChanges: lB
      } = TB, kB = yB && lB;
      return (0, iB.jsxs)("footer", {
        className: "SchematicPageFooter",
        children: [yB && lB && (0, iB.jsxs)("div", {
          className: "SchematicPageFooterStatus",
          children: [(0, iB.jsx)("span", {
            className: "SchematicPageFooterStatusDot"
          }), dB("worldBuilder:unsavedChanges")]
        }), (0, iB.jsx)(gB.h, {
          tooltipInner: (0, iB.jsx)("div", {
            className: "SaveButtonTooltip",
            children: dB(yB && !lB ? "worldBuilder:saveChangesNoneDescription" : "worldBuilder:saveChangesDescription")
          }),
          children: (0, iB.jsxs)(pB.d, {
            className: "SaveChangesButton",
            onClick: () => TB.saveSchematic(VB.gamePublished),
            disabled: !kB,
            children: [(0, iB.jsxs)("span", {
              className: yB ? "" : "SaveChangesButtonBodyHidden",
              children: [(0, iB.jsx)(oB.e, {
                name: "wrench"
              }), " ", dB("worldBuilder:saveChanges")]
            }), !yB && (0, iB.jsx)(YB.b, {})]
          })
        })]
      })
    }

    function yT(BB) {
      let {
        schematic: TB,
        onSchematicUpdate: dB,
        onClose: yB,
        inSourceWorld: lB
      } = BB;
      const {
        t: YB
      } = (0, JB.z)();

      function gB() {
        null === yB || void 0 === yB || yB()
      }
      const oB = (0, BT.e)(TB, {
        onNavigateAway: gB,
        inSourceWorld: lB
      });
      return (0, VB.useEffect)((() => {
        null === dB || void 0 === dB || dB(oB.schematicData)
      }), [oB.schematicData, dB]), (0, iB.jsxs)("div", {
        className: "SchematicPage SchematicPagePopupVariant",
        children: [(0, iB.jsxs)("div", {
          className: "SchematicPageBody",
          children: [(0, iB.jsx)(pB.b, {
            onClick: gB,
            children: YB("worldBuilder:back")
          }), (0, iB.jsx)(NB, {
            icon: "rocket-launch",
            title: YB("worldBuilder:actionsSection"),
            disabled: !oB.formEnabled,
            children: (0, iB.jsx)(MB.b, {
              editor: oB
            })
          }), (0, iB.jsx)(dT, {
            editor: oB,
            onClose: gB
          })]
        }), (0, iB.jsx)(VT, {
          editor: oB
        })]
      })
    }

    function pT(BB) {
      let {
        schematic: TB,
        onSchematicUpdate: dB,
        onClose: VB,
        inSourceWorld: pB
      } = BB;
      yB.NotificationProvider.showCustomPopup({
        body: BB => (0, iB.jsx)(yT, {
          schematic: TB,
          onSchematicUpdate: dB,
          onClose: BB,
          inSourceWorld: pB
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: VB,
        unlockPointerKey: "schematicPagePopup"
      })
    }
  },
  4362: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => kB
    });
    var VB = dB(933),
      yB = dB.n(VB),
      pB = dB(1078),
      lB = dB(946),
      JB = dB(1324),
      YB = dB(1249),
      gB = dB(1225),
      oB = dB(980);

    function kB(BB) {
      let {
        editor: TB,
        className: dB
      } = BB;
      const {
        t: VB
      } = (0, pB.z)(), {
        schematicData: kB,
        formEnabled: LB,
        publishFormEnabled: OB
      } = TB, DB = !LB || !OB;
      return (0, oB.jsxs)("div", {
        className: yB()("PublishButtonContainer", dB),
        children: [TB.canEditSourceWorld && (0, oB.jsxs)(JB.d, {
          onClick: TB.editSourceWorld,
          disabled: DB,
          children: [(0, oB.jsx)(lB.e, {
            name: "edit"
          }), " ", VB("worldBuilder:editSourceWorld")]
        }), !kB.gamePublished && (0, oB.jsx)(YB.h, {
          tooltipInner: (0, oB.jsx)("div", {
            className: "PublishButtonTooltip",
            children: VB("worldBuilder:publishAsGameDescription")
          }),
          children: (0, oB.jsxs)(JB.k, {
            onClick: () => TB.saveSchematic(!0),
            disabled: DB,
            children: [(0, oB.jsx)(lB.e, {
              name: "rocket-launch"
            }), " ", VB("worldBuilder:publishAsGame"), " ", (0, oB.jsx)(lB.e, {
              name: "info-circle"
            })]
          })
        }), !0 === kB.gamePublished && (0, oB.jsxs)(oB.Fragment, {
          children: [(0, oB.jsx)(YB.h, {
            tooltipInner: (0, oB.jsx)("div", {
              className: "PublishButtonTooltip",
              children: VB("worldBuilder:unpublishAsGameDescription")
            }),
            children: (0, oB.jsxs)(JB.K, {
              onClick: TB.unpublishSchematic,
              disabled: DB,
              children: [(0, oB.jsx)(lB.e, {
                name: "rocket-launch"
              }), " ", VB("worldBuilder:unpublishAsGame"), " ", (0, oB.jsx)(lB.e, {
                name: "info-circle"
              })]
            })
          }), (0, oB.jsxs)(JB.d, {
            onClick: TB.playGame,
            disabled: DB,
            children: [(0, oB.jsx)(lB.e, {
              name: "joystick"
            }), " ", VB("general:playGame")]
          })]
        }), !LB && (0, oB.jsx)(gB.b, {
          loaderType: "Secondary"
        })]
      })
    }
  },
  4400: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => yB
    });
    var VB = dB(1089);
    async function yB(BB) {
      const TB = await fetch(`${VB.clientSideServerUrls.s3Url}/${BB}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === TB.status || 403 === TB.status) return null;
      if (!TB.ok) throw new Error(`Failed to download the texture pack (${TB.status})`);
      return await TB.json()
    }
  },
  4470: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => HB
    });
    var VB = dB(62),
      yB = dB(1214),
      pB = dB(900),
      lB = dB(163),
      JB = dB(1445),
      YB = dB(21),
      gB = dB(1679),
      oB = dB(1393),
      kB = dB(3993),
      LB = dB(1235),
      OB = dB(1011),
      DB = dB(1407);

    function uB(BB, TB) {
      return {
        schematicId: BB.schematicId,
        name: BB.name,
        description: BB.description,
        gamePublished: TB,
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

    function HB(BB) {
      let {
        onNavigateAway: TB,
        inSourceWorld: dB = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const {
        userContext: HB
      } = (0, OB.b)(), EB = (0, DB.useNavigatePreserveSearch)(), [vB, mB] = (0, VB.useState)({
        ...BB
      }), [iB, NB] = (0, VB.useState)("Enter"), [tB, fB] = (0, VB.useState)(void 0), sB = (0, VB.useRef)(uB(BB, BB.gamePublished)), MB = (0, VB.useRef)(void 0), zB = "Enter" === iB, wB = HB.playerHasRank("developer") || HB.playerHasRank("admin") || "Enter" === iB && !1 !== vB.schematicContainsSpawnBlock, UB = void 0 !== tB && tB !== MB.current || JSON.stringify(uB(vB, vB.gamePublished)) !== JSON.stringify(sB.current);

      function FB(BB, TB) {
        mB((dB => ({
          ...dB,
          [BB]: TB
        })))
      }
      const KB = (0, VB.useCallback)((BB => {
        MB.current = BB, fB(BB)
      }), []);

      function rB(BB) {
        NB("Loading");
        const TB = uB(vB, BB),
          dB = tB !== MB.current ? tB : void 0;
        oB.c.updateSchematic(HB, TB, dB).then((dB => {
          let {
            customTexturePackKey: VB
          } = dB;
          NB("Success"), FB("customTexturePackKey", VB), sB.current = TB, MB.current = void 0, fB(void 0), setTimeout((() => {
            FB("gamePublished", BB), NB("Enter")
          }), 1e3)
        })).catch((BB => {
          var TB;
          (console.error("Failed to save schematic:", BB), NB("Error"), BB instanceof lB.b && BB.errorMessageForUser) && LB.NotificationProvider.showAlertPopup({
            title: "worldBuilder:changesNotSaved",
            subtitle: BB.errorMessageForUser,
            textOpts: {
              subtitle: null !== (TB = BB.errorMessageTranslationParams) && void 0 !== TB ? TB : void 0
            },
            confirmText: "general:ok"
          });
          setTimeout((() => {
            NB("Enter")
          }), 1e3)
        }))
      }
      return {
        schematicData: vB,
        updateSchematicData: FB,
        setTexturePack: fB,
        initializeTexturePack: KB,
        updateState: iB,
        formEnabled: zB,
        publishFormEnabled: wB,
        hasUnsavedChanges: UB,
        canEditSourceWorld: !dB,
        saveSchematic: rB,
        unpublishSchematic: function() {
          LB.NotificationProvider.showPromptPopup({
            icon: "rocket-launch",
            title: "worldBuilder:unpublishAsGameConfirmTitle",
            subtitle: "worldBuilder:unpublishAsGameConfirmSubtitle",
            confirmText: "worldBuilder:unpublishAsGame",
            cancelText: "general:cancel",
            unlockPointerKey: "unpublishGamePrompt"
          }).getResult().then((BB => {
            !0 === BB && rB(!1)
          }))
        },
        editSourceWorld: function() {
          NB("Loading"), kB.e.getSourceWorld(vB.schematicId).then((BB => {
            gB.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, YB.i)("other"), EB((0, yB.b)("classic", BB)), null === TB || void 0 === TB || TB()
          })).catch((BB => {
            console.error("Failed to get source world:", BB), NB("Error"), setTimeout((() => {
              NB("Enter")
            }), 1e3)
          }))
        },
        playGame: function() {
          gB.gameBridge.send("leaveGame", {
            reloadPath: "/"
          }), EB((0, JB.z)((0, pB.t)(vB.schematicId), vB)), null === TB || void 0 === TB || TB()
        }
      }
    }
  },
  4346: () => {}
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);