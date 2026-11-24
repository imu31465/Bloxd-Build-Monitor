export const id = 107;
export const ids = [107];
export const modules = {
  5090: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => hB,
      c: () => nB,
      e: () => zB
    });
    ZB(5093);
    var TB = ZB(1248),
      JB = ZB(1091),
      oB = ZB.n(JB),
      GB = ZB(1421),
      vB = (ZB(63), ZB(4545)),
      kB = ZB(1102),
      cB = ZB(1153);

    function nB(BB) {
      let {
        children: IB,
        label: ZB,
        className: JB,
        circleInfoText: vB,
        disabled: nB,
        onLabelClick: hB
      } = BB;
      const {
        t: zB
      } = (0, TB.G)(), FB = (0, cB.jsxs)("div", {
        className: oB()("Label", {
          ClickableLabel: void 0 !== hB
        }),
        onClick: hB,
        children: [zB(ZB), vB && (0, cB.jsx)(kB.d, {
          name: "circle-info"
        })]
      });
      return (0, cB.jsxs)("div", {
        className: oB()("LabeledInput", {
          [JB]: JB,
          DisabledLabelInput: nB
        }),
        children: [vB && (0, cB.jsx)(GB.e, {
          tooltipInner: (0, cB.jsx)("div", {
            className: "LabeledInputTooltip",
            children: zB(vB)
          }),
          children: FB
        }), !vB && FB, IB]
      })
    }

    function hB(BB) {
      let {
        checked: IB,
        setChecked: ZB
      } = BB;
      return (0, cB.jsx)("div", {
        className: "OtherInput ClickableOtherInput",
        "data-pad-focusable": !0,
        onClick: BB => {
          ZB(!IB)
        },
        children: (0, cB.jsx)(vB.d, {
          checked: IB,
          onChange: BB => {
            ZB(BB.target.checked)
          },
          disabled: !1
        })
      })
    }

    function zB(BB) {
      let {
        checked: IB,
        setChecked: ZB,
        disabled: TB
      } = BB;
      return (0, cB.jsx)("div", {
        className: oB()("SwitchContainer", {
          SwitchContainerDisabled: TB
        }),
        onClick: () => {
          TB || ZB(!IB)
        },
        children: (0, cB.jsx)(vB.d, {
          className: "SwitchCheckbox",
          checked: IB,
          onChange: BB => {
            ZB(BB.target.checked)
          },
          disabled: !!TB
        })
      })
    }
  },
  5101: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => cB
    });
    var TB = ZB(1091),
      JB = ZB.n(TB),
      oB = ZB(4802),
      GB = ZB(1248),
      vB = ZB(1153);
    const kB = [...oB.f, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function cB(BB) {
      const {
        disabled: IB,
        hideWrapper: ZB
      } = BB, {
        t: TB
      } = (0, GB.G)(), cB = BB.advancedMode ? kB.map((IB => [IB, BB.callbacks[IB]])) : oB.f.map((IB => [IB, BB.callbacks[IB]])), hB = (0, vB.jsx)("div", {
        className: JB()("PluginsGrid", {
          SectionBody: !ZB
        }),
        children: cB.map((BB => {
          let [ZB, TB] = BB;
          return (0, vB.jsx)(nB, {
            plugin: ZB,
            callbacks: TB,
            disabled: IB
          }, ZB)
        }))
      });
      return ZB ? hB : (0, vB.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, vB.jsx)("div", {
          className: "SectionTitle",
          children: TB("worldBuilder:pluginsSection")
        }), hB]
      })
    }

    function nB(BB) {
      let {
        plugin: IB,
        callbacks: {
          isEnabled: ZB,
          qY: TB
        },
        disabled: oB
      } = BB;
      const {
        t: kB
      } = (0, GB.G)(), cB = ZB();
      return (0, vB.jsxs)("div", {
        className: JB()("PluginCard", {
          PluginCardEnabled: cB,
          PluginCardDisabledForm: oB
        }),
        "data-pad-focusable": !0,
        "aria-disabled": oB || void 0,
        onClick: () => {
          oB || TB(!cB)
        },
        children: [(0, vB.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, vB.jsx)("img", {
            src: `/textures/games/classic/customGames/${IB}.png`,
            alt: IB
          })
        }), (0, vB.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, vB.jsx)("div", {
            className: "PluginCardTitle",
            children: kB(hB[IB])
          }), (0, vB.jsx)("div", {
            className: "PluginCardDescription",
            children: kB(zB[IB])
          })]
        }), (0, vB.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: kB(cB ? "general:on" : "general:off")
        })]
      })
    }
    const hB = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      zB = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  5084: (BB, IB, ZB) => {
    ZB.d(IB, {
      i: () => JI,
      d: () => TI,
      f: () => ZI,
      m: () => oI
    });
    var TB = ZB(63),
      JB = ZB(1403),
      oB = ZB(1516),
      GB = ZB(1746),
      vB = ZB(1248),
      kB = ZB(1397),
      cB = ZB(1421),
      nB = ZB(1102),
      hB = ZB(1281),
      zB = ZB(1091),
      FB = ZB.n(zB),
      NB = ZB(342),
      gB = ZB(4802),
      qB = ZB(1300),
      yB = ZB(5090),
      UB = ZB(3294),
      WB = ZB(5101),
      dB = ZB(1153);

    function CB(BB) {
      let {
        icon: IB,
        title: ZB,
        disabled: TB,
        children: JB
      } = BB;
      return (0, dB.jsxs)("div", {
        className: FB()("ManageCard", {
          ManageCardDisabled: TB
        }),
        children: [(0, dB.jsxs)("div", {
          className: "ManageCardHead",
          children: [(0, dB.jsx)("div", {
            className: "ManageCardIcon",
            children: (0, dB.jsx)(nB.d, {
              name: IB
            })
          }), (0, dB.jsx)("div", {
            children: (0, dB.jsx)("h2", {
              className: "ManageCardTitle",
              children: ZB
            })
          })]
        }), (0, dB.jsxs)("div", {
          className: "ManageCardBody",
          children: [JB, TB && (0, dB.jsx)("div", {
            className: "ManageCardDisabledOverlay"
          })]
        })]
      })
    }

    function QB(BB) {
      let {
        label: IB,
        caption: ZB,
        children: TB
      } = BB;
      return (0, dB.jsxs)("div", {
        className: "ManageStackedField",
        children: [(0, dB.jsx)("div", {
          className: "ManageStackedFieldLabel",
          children: IB
        }), TB, ZB && (0, dB.jsx)("div", {
          className: "ManageStackedFieldCaption",
          children: ZB
        })]
      })
    }

    function sB(BB) {
      let {
        label: IB,
        caption: ZB,
        disabled: TB,
        children: JB
      } = BB;
      return (0, dB.jsxs)("div", {
        className: FB()("ManageField", {
          ManageFieldDisabled: TB
        }),
        children: [(0, dB.jsxs)("div", {
          className: "ManageFieldText",
          children: [(0, dB.jsx)("div", {
            className: "ManageFieldLabel",
            children: IB
          }), (0, dB.jsx)("div", {
            className: "ManageFieldCaption",
            children: ZB
          })]
        }), (0, dB.jsx)("div", {
          className: "ManageFieldControl",
          children: JB
        })]
      })
    }

    function wB(BB) {
      var IB, ZB;
      let {
        schematicData: TB,
        updateSchematicData: JB,
        publishFormEnabled: oB,
        formEnabled: GB
      } = BB;
      const {
        t: kB
      } = (0, vB.G)(), cB = !oB, nB = {
        tpRequests: {
          isEnabled: () => !TB.disableTpRequests,
          qY: BB => JB("disableTpRequests", !BB)
        },
        spawnProtection: {
          isEnabled: () => !TB.disableSpawnProtection,
          qY: BB => JB("disableSpawnProtection", !BB)
        },
        spawnReset: {
          isEnabled: () => !!TB.enableSpawnReset,
          qY: BB => JB("enableSpawnReset", BB)
        },
        smpMarketplace: {
          isEnabled: () => !!TB.enableSmpMarketplace,
          qY: BB => JB("enableSmpMarketplace", BB)
        },
        survivalGuns: {
          isEnabled: () => !!TB.enableSurvivalGuns,
          qY: BB => JB("enableSurvivalGuns", BB)
        },
        fallDamage: {
          isEnabled: () => !TB.disableFallDamage,
          qY: BB => JB("disableFallDamage", !BB)
        },
        dayNight: {
          isEnabled: () => !!TB.enableDayNight,
          qY: BB => JB("enableDayNight", BB)
        }
      };
      return (0, dB.jsxs)(dB.Fragment, {
        children: [!1 === TB.schematicContainsSpawnBlock && (0, dB.jsx)("div", {
          className: "ManageWarningBanner",
          children: kB("worldBuilder:mustContainSpawnBlock")
        }), (0, dB.jsxs)("div", {
          className: "ManageSettingsGrid",
          children: [(0, dB.jsxs)(CB, {
            icon: "globe",
            title: kB("worldBuilder:worldRulesSection"),
            disabled: !GB,
            children: [(0, dB.jsx)(sB, {
              label: kB("classic:defaultGamemode"),
              caption: kB("classic:defaultGamemodeDescription"),
              disabled: cB,
              children: (0, dB.jsx)(UB.c, {
                controlClassName: "ManageDropdown",
                options: gB.E.map((BB => ({
                  value: BB,
                  label: NB.u[BB]
                }))),
                value: TB.defaultGamemode,
                onChange: BB => JB("defaultGamemode", BB.value)
              })
            }), (0, dB.jsx)(sB, {
              label: kB("classic:voidDeathHeight"),
              caption: kB("classic:voidDeathHeightDescription"),
              disabled: cB,
              children: (0, dB.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, dB.jsx)("input", {
                  type: "number",
                  max: qB.J,
                  value: null !== (IB = TB.voidDeathHeight) && void 0 !== IB ? IB : "",
                  onChange: BB => {
                    const IB = parseInt(BB.target.value);
                    JB("voidDeathHeight", IB)
                  }
                }), (0, dB.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: kB("worldBuilder:blocksUnit")
                })]
              })
            }), (0, dB.jsx)(sB, {
              label: kB("classic:worldBorder"),
              caption: kB("classic:worldBorderDescription"),
              disabled: cB,
              children: (0, dB.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, dB.jsx)("input", {
                  type: "number",
                  min: qB.T,
                  max: qB.N,
                  placeholder: kB("worldBuilder:noWorldBorderLimit"),
                  value: null !== (ZB = TB.worldBorder) && void 0 !== ZB ? ZB : "",
                  onChange: BB => {
                    const IB = parseInt(BB.target.value);
                    JB("worldBorder", isNaN(IB) ? null : IB)
                  }
                }), (0, dB.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: kB("worldBuilder:blocksUnit")
                })]
              })
            }), (0, dB.jsx)(sB, {
              label: kB("classic:disableMobs"),
              caption: kB("classic:disableMobsDescription"),
              disabled: cB,
              children: (0, dB.jsx)(yB.e, {
                checked: TB.disableMobs,
                setChecked: BB => JB("disableMobs", BB),
                disabled: cB
              })
            })]
          }), (0, dB.jsxs)(CB, {
            icon: "user-group",
            title: kB("worldBuilder:playerAndLobbySection"),
            disabled: !GB,
            children: [(0, dB.jsx)(sB, {
              label: kB("classic:disableKeepInventory"),
              caption: kB("classic:disableKeepInventoryDescription"),
              disabled: cB,
              children: (0, dB.jsx)(yB.e, {
                checked: TB.disableKeepInventory,
                setChecked: BB => JB("disableKeepInventory", BB),
                disabled: cB
              })
            }), (0, dB.jsx)(sB, {
              label: kB("classic:persistInventory"),
              caption: kB("classic:persistInventoryDescription"),
              disabled: cB,
              children: (0, dB.jsx)(UB.c, {
                controlClassName: "ManageDropdown",
                options: gB.h.map((BB => ({
                  value: BB,
                  label: NB.l[BB]
                }))),
                value: TB.persistInventory,
                onChange: BB => JB("persistInventory", BB.value)
              })
            }), (0, dB.jsx)(sB, {
              label: kB("classic:persistWorld"),
              caption: kB("classic:persistWorldDescription"),
              disabled: cB,
              children: (0, dB.jsx)(yB.e, {
                checked: TB.persistWorld,
                setChecked: BB => JB("persistWorld", BB),
                disabled: cB
              })
            }), (0, dB.jsx)(sB, {
              label: kB("classic:disableLobbySpawn"),
              caption: kB("classic:disableLobbySpawnDescription"),
              disabled: cB,
              children: (0, dB.jsx)(yB.e, {
                checked: TB.disableLobbySpawn,
                setChecked: BB => JB("disableLobbySpawn", BB),
                disabled: cB
              })
            }), (0, dB.jsx)(sB, {
              label: kB("classic:hideLobbyCode"),
              caption: kB("classic:hideLobbyCodeDescription"),
              disabled: cB,
              children: (0, dB.jsx)(yB.e, {
                checked: TB.hideLobbyCode,
                setChecked: BB => JB("hideLobbyCode", BB),
                disabled: cB
              })
            })]
          })]
        }), (0, dB.jsx)(CB, {
          icon: "layer-group",
          title: kB("worldBuilder:pluginsSection"),
          disabled: !GB,
          children: (0, dB.jsx)(WB.e, {
            callbacks: nB,
            disabled: cB,
            advancedMode: !0,
            hideWrapper: !0
          })
        })]
      })
    }
    var OB = ZB(5103),
      YB = ZB(4545),
      iB = ZB(1561),
      pB = ZB(3668),
      aB = ZB(1179),
      HB = ZB(5057),
      MB = ZB(5112),
      jB = ZB(1519);
    const PB = 50,
      RB = .3;
    async function rB(BB) {
      const IB = await
      function(BB) {
        return new Promise(((IB, ZB) => {
          const TB = new FileReader;
          TB.onload = () => IB(TB.result), TB.onerror = ZB, TB.readAsDataURL(BB)
        }))
      }(BB), ZB = await
      function(BB) {
        return new Promise(((IB, ZB) => {
          const TB = new Image;
          TB.onload = () => IB(TB), TB.onerror = () => ZB(new Error("Failed to load image")), TB.src = BB
        }))
      }(IB);
      if (ZB.naturalHeight > ZB.naturalWidth) throw new mB;
      const TB = 1024 * PB,
        {
          dataUrl: JB,
          finalQuality: oB
        } = function(BB, IB) {
          const ZB = document.createElement("canvas");
          ZB.width = BB.naturalWidth, ZB.height = BB.naturalHeight, ZB.getContext("2d").drawImage(BB, 0, 0);
          let TB = .92,
            JB = ZB.toDataURL("image/jpeg", TB);
          for (; .75 * JB.length > IB && TB > .05;) TB -= .05, JB = ZB.toDataURL("image/jpeg", TB);
          return {
            dataUrl: JB,
            finalQuality: TB
          }
        }(ZB, TB);
      if (Math.ceil(.75 * JB.length) > TB) throw new XB;
      return {
        base64Jpg: JB,
        heavilyCompressed: oB < RB
      }
    }
    class mB extends Error {}
    class XB extends Error {}
    var LB = function(BB) {
      return BB[BB.NOT_LOGGED_IN = 0] = "NOT_LOGGED_IN", BB[BB.THUMBNAIL_LIMIT_REACHED = 1] = "THUMBNAIL_LIMIT_REACHED", BB
    }(LB || {});

    function eB(BB) {
      var IB;
      let {
        schematicId: ZB,
        hasReadUploadPolicy: JB,
        onPolicyValidationError: kB,
        onThumbnailReady: cB
      } = BB;
      const {
        t: zB
      } = (0, vB.G)(), [NB, gB] = (0, TB.useState)(null), [qB, yB] = (0, TB.useState)(""), [UB, WB] = (0, TB.useState)(""), [CB, QB] = (0, TB.useState)(!0), [sB, wB] = (0, TB.useState)(!1), OB = (0, TB.useRef)(!1), [YB, iB] = (0, TB.useState)(null), [pB, aB] = (0, TB.useState)(!1), [HB, jB] = (0, TB.useState)(!1), PB = (0, TB.useRef)(0), {
        getRootProps: RB,
        getInputProps: LB,
        isDragActive: eB
      } = (0, MB.d)({
        accept: {
          "image/*": [".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp"]
        },
        multiple: !1,
        onDrop: async BB => {
          if (0 === BB.length) return;
          const IB = BB[0],
            ZB = ++PB.current;
          iB(null), aB(!1), gB(null), yB(IB.name);
          try {
            const BB = await rB(IB);
            if (ZB !== PB.current) return;
            gB(BB), aB(BB.heavilyCompressed)
          } catch (TB) {
            if (ZB !== PB.current) return;
            iB(zB(TB instanceof mB ? "thumbnail:portraitImagesNotAllowed" : TB instanceof XB ? "thumbnail:couldNotCompressImage" : "thumbnail:failedToUploadImage"))
          }
        },
        useFsAccessApi: !1
      }), uB = qB.length <= 30 ? qB : `${qB.slice(0,27)}...`, fB = null !== (IB = null === NB || void 0 === NB ? void 0 : NB.base64Jpg) && void 0 !== IB ? IB : null, lB = UB.trim(), AB = lB.length >= hB.h && lB.length <= hB.f, tB = HB && !NB && !YB, bB = HB && !AB;
      return (0, dB.jsxs)("div", {
        className: "ThumbnailUploadContainer",
        children: [(0, dB.jsxs)("div", {
          ...RB({
            className: FB()("ThumbnailUploadDropzone", {
              ActiveDrag: eB,
              ValidationError: tB
            })
          }),
          children: [(0, dB.jsx)("input", {
            ...LB()
          }), !eB && fB ? (0, dB.jsxs)(dB.Fragment, {
            children: [(0, dB.jsxs)("div", {
              className: "ThumbnailAspectPreviews",
              children: [(0, dB.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, dB.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "1:1"
                }), (0, dB.jsx)("div", {
                  className: "ThumbnailAspectFrame Square",
                  children: (0, dB.jsx)("img", {
                    src: fB,
                    alt: "1:1 preview"
                  })
                })]
              }), (0, dB.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, dB.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "16:9"
                }), (0, dB.jsx)("div", {
                  className: "ThumbnailAspectFrame Wide",
                  children: (0, dB.jsx)("img", {
                    src: fB,
                    alt: "16:9 preview"
                  })
                })]
              })]
            }), (0, dB.jsxs)("div", {
              children: [(0, dB.jsx)("div", {
                className: "ThumbnailUploadInstructions Active",
                children: uB
              }), (0, dB.jsx)("div", {
                className: "ThumbnailUploadInstructions Preview",
                children: zB("thumbnail:preview")
              })]
            })]
          }) : (0, dB.jsxs)(dB.Fragment, {
            children: [(0, dB.jsx)("div", {
              className: "ThumbnailUploadIcon",
              children: (0, dB.jsx)(nB.d, {
                name: "image"
              })
            }), (0, dB.jsx)("div", {
              className: "ThumbnailUploadInstructions",
              children: zB("thumbnail:dragImageHere")
            })]
          })]
        }), tB && (0, dB.jsx)("div", {
          className: "ThumbnailUploadError",
          children: zB("thumbnail:imageRequired")
        }), (0, dB.jsx)(GB.c, {
          className: FB()("ThumbnailUploadNameInput", {
            ValidationError: bB
          }),
          placeholderText: zB("thumbnail:thumbnailName"),
          defaultValue: UB,
          onValueChange: BB => {
            WB(BB)
          },
          maxLength: hB.f
        }), bB && (0, dB.jsx)("div", {
          className: "ThumbnailUploadError",
          children: zB("thumbnail:nameRequired", {
            min: hB.h,
            max: hB.f
          })
        }), (0, dB.jsxs)("label", {
          className: "ThumbnailUploadCheckbox",
          children: [(0, dB.jsx)("input", {
            type: "checkbox",
            checked: CB,
            onChange: BB => {
              QB(BB.target.checked)
            }
          }), zB("thumbnail:setAsThumbnailOnceApproved")]
        }), pB && (0, dB.jsx)("div", {
          className: "ThumbnailUploadWarning",
          children: zB("thumbnail:heavyCompressionWarning")
        }), YB && (0, dB.jsx)("div", {
          className: "ThumbnailUploadError",
          children: YB
        }), (0, dB.jsx)(oB.p, {
          disabled: sB,
          className: "ThumbnailUploadButton",
          onClick: async () => {
            if (jB(!0), !OB.current && NB && AB && JB) {
              OB.current = !0, wB(!0), iB(null);
              try {
                await cB(NB.base64Jpg, lB, CB ? ZB : null)
              } catch (BB) {
                iB(BB.errorMessageForUser ? zB(BB.errorMessageForUser, BB.errorMessageTranslationParams) : zB("thumbnail:failedToUploadImage"))
              } finally {
                OB.current = !1, wB(!1)
              }
            } else JB || kB()
          },
          children: zB(sB ? "thumbnail:processing" : "thumbnail:uploadThumbnail")
        })]
      })
    }
    const uB = 2e3;

    function fB(BB) {
      let {
        schematicId: IB,
        ownedThumbnailCount: ZB,
        onClose: JB,
        onThumbnailReady: oB
      } = BB;
      const {
        t: GB
      } = (0, vB.G)(), {
        userContext: kB
      } = (0, aB.d)(), [cB, zB] = (0, TB.useState)(!1), [NB, gB] = (0, TB.useState)(!1), [qB, yB] = (0, TB.useState)(!1), UB = (0, TB.useRef)();
      (0, TB.useEffect)((() => () => {
        clearTimeout(UB.current)
      }), []);
      const WB = function(BB, IB) {
        const ZB = [];
        return BB.isLoggedIn() || ZB.push(LB.NOT_LOGGED_IN), IB >= hB.O && ZB.push(LB.THUMBNAIL_LIMIT_REACHED), ZB
      }(kB, ZB);
      if (WB.length > 0) {
        const BB = {
          [LB.NOT_LOGGED_IN]: {
            key: "thumbnail:mustBeLoggedInToUpload"
          },
          [LB.THUMBNAIL_LIMIT_REACHED]: {
            key: "thumbnail:thumbnailLimitReachedPleaseDelete",
            params: {
              max: hB.O
            }
          }
        };
        return (0, dB.jsxs)("div", {
          className: "ThumbnailUploaderInner",
          children: [(0, dB.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: GB("thumbnail:cannotUploadThumbnail")
          }), WB.map(((IB, ZB) => {
            const TB = BB[IB];
            return (0, dB.jsxs)("div", {
              className: "CannotUploadThumbnailItem",
              children: [(0, dB.jsx)(nB.d, {
                name: "triangle-exclamation"
              }), (0, dB.jsx)("span", {
                children: GB(TB.key, TB.params)
              })]
            }, ZB)
          }))]
        })
      }
      return (0, dB.jsxs)("div", {
        className: FB()("ThumbnailUploaderInner", {
          ThumbnailUploaderSuccess: cB
        }),
        children: [cB && (0, dB.jsxs)("div", {
          className: "ThumbnailUploadSuccessOverlay",
          children: [(0, dB.jsxs)("div", {
            className: "ThumbnailUploadSuccessIcon FullyFancyText AnimFadeInScaleUp",
            children: [(0, dB.jsx)(nB.d, {
              name: "check"
            }), (0, dB.jsx)(jB.d, {})]
          }), (0, dB.jsx)("div", {
            className: "ThumbnailUploadSuccessText AnimFadeInScaleUp",
            children: GB("thumbnail:thumbnailUploaded")
          })]
        }), (0, dB.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: GB("thumbnail:uploadThumbnail")
        }), (0, dB.jsxs)("div", {
          className: "ThumbnailUploaderBody",
          children: [(0, dB.jsxs)("div", {
            className: "ThumbnailUploaderLeft",
            children: [(0, dB.jsx)("h3", {
              className: "SchematicPopupSubtitle",
              children: GB("thumbnail:chooseImage", {
                maxSizeKb: PB
              })
            }), (0, dB.jsx)(eB, {
              schematicId: IB,
              hasReadUploadPolicy: NB,
              onPolicyValidationError: () => {
                yB(!0)
              },
              onThumbnailReady: async (BB, IB, ZB) => {
                await oB(BB, IB, ZB), zB(!0), UB.current = setTimeout(JB, uB)
              }
            })]
          }), (0, dB.jsxs)("div", {
            className: "ThumbnailUploadPolicy",
            children: [(0, dB.jsx)("h3", {
              className: "ThumbnailUploadPolicyTitle",
              children: GB("thumbnail:uploadPolicy")
            }), (0, dB.jsxs)("ul", {
              className: "ThumbnailUploadPolicyList",
              children: [(0, dB.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, dB.jsx)(nB.d, {
                  name: "check"
                }), (0, dB.jsx)("span", {
                  children: GB("thumbnail:policyFollowGuidelines")
                })]
              }), (0, dB.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, dB.jsx)(nB.d, {
                  name: "check"
                }), (0, dB.jsx)("span", {
                  children: GB("thumbnail:policyInGameAssets")
                })]
              }), (0, dB.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, dB.jsx)(nB.d, {
                  name: "check"
                }), (0, dB.jsx)("span", {
                  children: GB("thumbnail:policyLimitText")
                })]
              }), (0, dB.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, dB.jsx)(nB.d, {
                  name: "x"
                }), (0, dB.jsx)("span", {
                  children: GB("thumbnail:policyCopyrightContent")
                })]
              }), (0, dB.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, dB.jsx)(nB.d, {
                  name: "x"
                }), (0, dB.jsx)("span", {
                  children: GB("thumbnail:policyOutOfGameAssets")
                })]
              }), (0, dB.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, dB.jsx)(nB.d, {
                  name: "x"
                }), (0, dB.jsx)("span", {
                  children: GB("thumbnail:policyBloxdTags")
                })]
              }), (0, dB.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, dB.jsx)(nB.d, {
                  name: "x"
                }), (0, dB.jsx)("span", {
                  children: GB("thumbnail:policyMustReflectGame")
                })]
              })]
            }), (0, dB.jsxs)("label", {
              className: FB()("ThumbnailUploadCheckbox Policy", {
                ValidationError: qB && !NB
              }),
              children: [(0, dB.jsx)("input", {
                type: "checkbox",
                checked: NB,
                onChange: BB => {
                  gB(BB.target.checked)
                }
              }), GB("thumbnail:agreeToUploadPolicy")]
            }), qB && !NB && (0, dB.jsx)("div", {
              className: "ThumbnailPolicyError",
              children: GB("thumbnail:policyRequired")
            })]
          })]
        })]
      })
    }
    var lB = ZB(1258);
    const AB = {
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

    function tB(BB) {
      var IB, ZB;
      let {
        schematicData: GB,
        updateSchematicData: cB,
        publishFormEnabled: hB,
        onClose: zB
      } = BB;
      const {
        t: NB
      } = (0, vB.G)(), {
        userContext: gB,
        isUserContextUpdating: qB
      } = (0, aB.d)(), yB = (0, pB.d)(), [UB, WB] = (0, TB.useState)([]), [CB, QB] = (0, TB.useState)([]), [sB, wB] = (0, TB.useState)(!0), [OB, YB] = (0, TB.useState)(null !== (IB = GB.customThumbnailId) && void 0 !== IB ? IB : null), [MB, jB] = (0, TB.useState)(null), PB = (0, TB.useRef)(null !== (ZB = GB.customThumbnailId) && void 0 !== ZB ? ZB : null), RB = (0, TB.useRef)(0), rB = (0, TB.useRef)(null), mB = (0, TB.useRef)(null), XB = (0, TB.useRef)(null), LB = (0, TB.useRef)(!1);

      function eB(BB, IB) {
        XB.current && (clearTimeout(XB.current), XB.current = null), jB(BB), null !== BB && IB && (XB.current = setTimeout((() => {
          jB(null), XB.current = null
        }), 5e3))
      }(0, TB.useEffect)((() => () => {
        clearTimeout(mB.current), clearTimeout(XB.current)
      }), []);
      const uB = (0, TB.useCallback)((() => {
        wB(!0), iB.c.getOwnedThumbnails(gB).then((BB => {
          const IB = [],
            ZB = [];
          for (const TB of BB.thumbnails) TB.rejectionPolicyId ? IB.push(TB) : ZB.push(TB);
          IB.sort(((BB, IB) => BB.lastUpdatedAt - IB.lastUpdatedAt)), ZB.sort(((BB, IB) => {
            const ZB = BB.approved ? 1 : 0,
              TB = (IB.approved ? 1 : 0) - ZB;
            return 0 !== TB ? TB : IB.lastUpdatedAt - BB.lastUpdatedAt
          })), QB(IB), WB(ZB)
        })).catch((BB => {
          console.error("Failed to fetch thumbnails:", BB)
        })).finally((() => {
          wB(!1)
        }))
      }), [gB]);
      async function AB(BB, IB, ZB) {
        return iB.c.uploadSchematicThumbnail(gB, BB, IB, ZB).then((() => {
          eB({
            text: NB("thumbnail:uploadedAwaitingModeration"),
            type: "success"
          }, !0), uB()
        }))
      }

      function tB() {
        RB.current = Date.now(), mB.current = null;
        const BB = rB.current;
        rB.current = null, eB({
          text: NB("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), iB.c.setSchematicThumbnail(gB, GB.schematicId, BB).then((() => {
          yB.current && (eB({
            text: NB("thumbnail:thumbnailUpdated"),
            type: "success"
          }, !0), PB.current = BB, cB("customThumbnailId", BB), cB("customThumbnailBlurhash", void 0), cB("customThumbnailVariants", void 0))
        })).catch((BB => {
          yB.current && (eB({
            text: BB.errorMessageForUser ? NB(BB.errorMessageForUser, BB.errorMessageTranslationParams) : NB("thumbnail:failedToSetThumbnail"),
            type: "error"
          }, !0), YB(PB.current))
        }))
      }

      function EB(BB) {
        YB(BB), rB.current = BB;
        const IB = Date.now() - RB.current;
        IB >= 1e3 ? tB() : (eB({
          text: NB("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), mB.current || (mB.current = setTimeout((() => {
          tB()
        }), 1e3 - IB)))
      }
      return (0, TB.useEffect)((() => {
        !1 === qB && uB()
      }), [qB, uB]), CB.length > 0 ? (0, dB.jsx)(bB, {
        rejectedThumbnails: CB,
        userContext: gB,
        isMountedRef: yB,
        onAcknowledged: uB
      }) : (0, dB.jsxs)("div", {
        className: "BloxdForm ThumbnailSection",
        children: [(0, dB.jsxs)("div", {
          className: "SectionTitle",
          children: [NB("thumbnail:gameThumbnail"), MB && (0, dB.jsx)("span", {
            className: FB()("ThumbnailActionMsg", `ThumbnailActionMsg--${MB.type}`),
            children: MB.text
          })]
        }), (0, dB.jsx)("div", {
          className: "SectionBody",
          children: (0, dB.jsxs)("div", {
            className: "ThumbnailGrid",
            children: [(0, dB.jsxs)("div", {
              className: FB()("ThumbnailGridItem ThumbnailGridItemDefault", {
                ThumbnailGridItemSelected: null === OB
              }),
              onClick: () => EB(null),
              children: [(0, dB.jsx)(HB.d, {
                game: {
                  schematicId: GB.schematicId,
                  imageBlurhash: GB.imageBlurhash
                }
              }), (0, dB.jsx)("div", {
                className: "ThumbnailGridItemLabel ThumbnailDefaultLabel",
                children: NB("general:default")
              })]
            }), sB && (0, dB.jsx)(kB.d, {}), UB.map(((BB, IB) => (0, dB.jsxs)("div", {
              className: FB()("ThumbnailGridItem", {
                ThumbnailGridItemSelected: OB === BB.id,
                ThumbnailGridItemPending: !BB.approved
              }),
              onClick: () => {
                BB.approved && EB(BB.id)
              },
              children: [BB.approved && (0, dB.jsx)("img", {
                src: `${lB.clientSideServerUrls.s3Url}/customThumbnails/${BB.id}.jpg`,
                alt: "Thumbnail"
              }), BB.approved && (0, dB.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: BB.name
              }), BB.id && (0, dB.jsx)(oB.M, {
                className: "ThumbnailDeleteButton",
                onClick: IB => async function(BB, IB, ZB) {
                  BB.stopPropagation();
                  const TB = await JB.NotificationProvider.showCustomPopup({
                      body: BB => (0, dB.jsx)(xB, {
                        thumbnailId: IB,
                        thumbnailName: ZB,
                        onClose: IB => {
                          IB && (LB.current = !0), BB()
                        }
                      }),
                      middleScreenPopupClassName: "ThumbnailDeleteConfirmPopup",
                      onClose: zB
                    }).getResult(),
                    oB = LB.current;
                  LB.current = !1, oB && !0 === TB && (yB.current && eB({
                    text: NB("thumbnail:deletingThumbnail"),
                    type: "info"
                  }, !1), iB.c.deleteSchematicThumbnail(gB, IB).then((() => {
                    yB.current && (eB({
                      text: NB("thumbnail:thumbnailDeleted"),
                      type: "success"
                    }, !0), PB.current === IB && EB(null), uB())
                  })).catch((BB => {
                    yB.current && eB({
                      text: BB.errorMessageForUser ? NB(BB.errorMessageForUser, BB.errorMessageTranslationParams) : NB("thumbnail:failedToDeleteThumbnail"),
                      type: "error"
                    }, !0)
                  })))
                }(IB, BB.id, BB.name),
                children: (0, dB.jsx)(nB.d, {
                  name: "trash-can"
                })
              }), !BB.approved && (0, dB.jsx)("div", {
                className: "ThumbnailUnapprovedIcon",
                children: (0, dB.jsx)(nB.d, {
                  name: "hourglass-clock"
                })
              }), !BB.approved && (0, dB.jsxs)("div", {
                className: "ThumbnailGridItemLabel ThumbnailPendingLabel",
                children: [BB.name, (0, dB.jsx)("br", {}), NB("thumbnail:pendingApproval")]
              })]
            }, IB))), (0, dB.jsxs)("div", {
              className: FB()("ThumbnailGridItem ThumbnailUploadTile", {
                ThumbnailUploadTileDisabled: !hB
              }),
              onClick: () => {
                hB && function(BB) {
                  let {
                    schematicId: IB,
                    ownedThumbnailCount: ZB,
                    onThumbnailReady: TB,
                    onClose: oB
                  } = BB;
                  JB.NotificationProvider.showCustomPopup({
                    body: BB => (0, dB.jsx)(fB, {
                      schematicId: IB,
                      ownedThumbnailCount: ZB,
                      onClose: BB,
                      onThumbnailReady: TB
                    }),
                    middleScreenPopupClassName: "SchematicThumbnailPopup",
                    onClose: oB,
                    unlockPointerKey: "schematicThumbnailUploaderPopup"
                  })
                }({
                  schematicId: GB.schematicId,
                  ownedThumbnailCount: UB.length,
                  onThumbnailReady: AB,
                  onClose: zB
                })
              },
              children: [(0, dB.jsx)(nB.d, {
                name: "plus"
              }), (0, dB.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: NB("thumbnail:uploadThumbnail")
              })]
            })]
          })
        })]
      })
    }

    function bB(BB) {
      let {
        rejectedThumbnails: IB,
        userContext: ZB,
        isMountedRef: JB,
        onAcknowledged: GB
      } = BB;
      const {
        t: cB
      } = (0, vB.G)(), [hB, zB] = (0, TB.useState)(!1), [FB, NB] = (0, TB.useState)(!1), gB = function(BB) {
        const IB = new Map;
        for (const ZB of BB) {
          const BB = ZB.rejectionPolicyId,
            TB = IB.get(BB);
          TB ? TB.push(ZB) : IB.set(BB, [ZB])
        }
        return IB
      }(IB);
      return (0, dB.jsxs)("div", {
        className: "ThumbnailRejectionNotice",
        children: [(0, dB.jsxs)("div", {
          className: "ThumbnailRejectionNoticeTitle",
          children: [(0, dB.jsx)(nB.d, {
            name: "triangle-exclamation"
          }), " ", cB("thumbnail:thumbnailsRejected"), " ", (0, dB.jsx)(nB.d, {
            name: "triangle-exclamation"
          })]
        }), (0, dB.jsx)("div", {
          className: "ThumbnailRejectionNoticeSubtitle",
          children: cB("thumbnail:thumbnailsRejectedDescription")
        }), (0, dB.jsx)("div", {
          className: "ThumbnailRejectionNoticeList",
          children: [...gB.entries()].map((BB => {
            let [IB, ZB] = BB;
            const TB = AB[IB];
            return (0, dB.jsxs)("div", {
              className: "ThumbnailRejectionNoticeGroup",
              children: [(0, dB.jsx)("div", {
                className: "ThumbnailRejectionNoticeItems",
                children: ZB.map((BB => (0, dB.jsxs)("div", {
                  className: "ThumbnailRejectionNoticeItem",
                  children: [(0, dB.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemIcon",
                    children: (0, dB.jsx)(nB.d, {
                      name: "image-slash"
                    })
                  }), (0, dB.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemDetails",
                    children: (0, dB.jsx)("div", {
                      className: "ThumbnailRejectionNoticeItemName",
                      children: BB.name
                    })
                  })]
                }, BB.id)))
              }), (0, dB.jsxs)("div", {
                className: "ThumbnailRejectionNoticeGroupReason",
                children: [cB("thumbnail:rejectionReason"), " ", TB ? cB(TB.reason) : IB]
              }), TB && (0, dB.jsx)("ul", {
                className: "ThumbnailRejectionNoticeGroupTips",
                children: TB.tips.map((BB => (0, dB.jsx)("li", {
                  children: cB(BB)
                }, BB)))
              })]
            }, IB)
          }))
        }), (0, dB.jsxs)("label", {
          className: "ThumbnailRejectionNoticeCheckbox",
          children: [(0, dB.jsx)(YB.d, {
            checked: hB,
            onChange: BB => zB(BB.target.checked),
            disabled: FB
          }), (0, dB.jsx)("span", {
            children: cB("thumbnail:haveReadRejectionReasons")
          })]
        }), (0, dB.jsx)(oB.p, {
          onClick: async function() {
            NB(!0);
            const BB = await Promise.allSettled(IB.map((BB => iB.c.deleteSchematicThumbnail(ZB, BB.id))));
            if (!JB.current) return;
            const TB = BB.filter((BB => "rejected" === BB.status));
            TB.length > 0 && console.error("Some rejected thumbnails failed to delete:", TB), GB()
          },
          disabled: !hB || FB,
          className: "ThumbnailRejectionNoticeAcceptButton",
          children: FB ? (0, dB.jsx)(kB.d, {}) : cB("general:accept")
        })]
      })
    }

    function xB(BB) {
      let {
        thumbnailId: IB,
        thumbnailName: ZB,
        onClose: TB
      } = BB;
      const {
        t: JB
      } = (0, vB.G)();
      return (0, dB.jsxs)("div", {
        className: "ThumbnailDeleteConfirm",
        children: [(0, dB.jsx)("div", {
          className: "ThumbnailDeleteConfirmTitle",
          children: JB("thumbnail:deleteThumbnail")
        }), (0, dB.jsxs)("div", {
          className: "ThumbnailDeleteConfirmImageContainer",
          children: [(0, dB.jsx)("img", {
            className: "ThumbnailDeleteConfirmImage",
            src: `${lB.clientSideServerUrls.s3Url}/customThumbnails/${IB}.jpg`,
            alt: "Thumbnail to delete"
          }), (0, dB.jsx)("div", {
            className: "ThumbnailGridItemLabel",
            children: ZB
          })]
        }), (0, dB.jsx)("div", {
          className: "ThumbnailDeleteConfirmSubtitle",
          children: JB("thumbnail:deleteThumbnailConfirmation")
        }), (0, dB.jsxs)("div", {
          className: "ThumbnailDeleteConfirmButtons",
          children: [(0, dB.jsxs)(oB.M, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => TB(!0),
            children: [(0, dB.jsx)(nB.d, {
              name: "trash-can"
            }), " ", JB("general:delete")]
          }), (0, dB.jsx)(oB.k, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => TB(!1),
            children: JB("general:cancel")
          })]
        })]
      })
    }
    var EB = ZB(2236),
      DB = ZB(5134),
      KB = ZB(5140),
      VB = ZB(5189);

    function SB(BB) {
      let {
        schematicData: IB,
        setTexturePack: ZB,
        initializeTexturePack: JB,
        publishFormEnabled: oB
      } = BB;
      const {
        t: GB
      } = (0, vB.G)(), [kB, cB] = (0, TB.useState)(null), [nB, hB] = (0, TB.useState)(null), [zB, NB] = (0, TB.useState)(!1), gB = (0, pB.d)(), qB = oB && !zB, yB = IB.customTexturePackKey;

      function UB(BB) {
        var IB;
        cB(BB.metaData.id), hB(null !== (IB = BB.metaData.fromFolderName) && void 0 !== IB ? IB : null), (BB.metaData.id !== EB.q.CUSTOM || BB.metaData.fromFolderName) && ZB(BB)
      }
      return (0, TB.useEffect)((() => {
        yB && (NB(!0), (0, DB.c)(yB).then((BB => {
          var IB;
          gB.current && (BB ? (cB(BB.metaData.id), hB(null !== (IB = BB.metaData.fromFolderName) && void 0 !== IB ? IB : null), JB(BB)) : console.error(`No texture pack at ${yB}`))
        })).catch((BB => {
          console.error("Error fetching texture pack: ", BB)
        })).finally((() => {
          NB(!1)
        })))
      }), [yB, JB, gB]), (0, dB.jsxs)("div", {
        className: "BloxdForm TexturePackSection",
        children: [(0, dB.jsx)("div", {
          className: "SectionTitle",
          children: GB("customTexturePack:customTexturePack")
        }), (0, dB.jsxs)("div", {
          className: "TexturePackList",
          children: [(0, dB.jsx)("div", {
            className: FB()("TexturePack", {
              Selected: null === kB && !zB,
              Disabled: !qB
            }),
            onClick: () => {
              qB && (cB(null), ZB(null), hB(null))
            },
            children: (0, dB.jsx)("div", {
              className: "TexturePackName",
              children: "No Override"
            })
          }), Object.values(EB.q).map((BB => (0, dB.jsx)(KB.f, {
            id: BB,
            isSelected: BB === kB,
            setSelected: UB,
            disabled: !qB
          }, BB)))]
        }), kB === EB.q.CUSTOM && (0, dB.jsx)(VB.b, {
          folderName: nB,
          onTexturePackUpdated: UB,
          disabled: !qB,
          maxFileSizeMb: 25,
          packOwner: "customGame"
        })]
      })
    }
    var BI = ZB(5234);

    function II(BB) {
      var IB;
      let {
        gameCategory: ZB,
        setGameCategory: TB,
        disabled: JB
      } = BB;
      const GB = null !== (IB = (0, NB.sb)(ZB)) && void 0 !== IB ? IB : "other";
      return (0, dB.jsxs)("div", {
        className: "GameCategoryPicker",
        children: [(0, dB.jsx)(yB.c, {
          label: "worldBuilder:gameCategoryGroup",
          className: "GameCategoryGroup",
          disabled: JB,
          children: (0, dB.jsx)(UB.c, {
            options: NB.gb.map((BB => ({
              value: BB,
              label: NB.db[BB]
            }))),
            value: GB,
            onChange: BB => {
              BB.value !== GB && TB(NB.Y[BB.value][0])
            }
          })
        }), (0, dB.jsx)(yB.c, {
          label: "worldBuilder:gameCategory",
          className: "GameCategory",
          disabled: JB,
          children: (0, dB.jsx)("div", {
            className: "GameCategoryOptions",
            children: NB.Y[GB].map((BB => (0, dB.jsx)(oB.V, {
              active: BB === ZB,
              onClick: () => {
                TB(BB)
              },
              children: (0, NB.pb)(BB)
            }, BB)))
          })
        })]
      })
    }

    function ZI(BB) {
      let {
        editor: IB,
        onClose: ZB
      } = BB;
      const {
        t: TB
      } = (0, vB.G)(), {
        schematicData: JB,
        updateSchematicData: oB,
        publishFormEnabled: kB,
        formEnabled: cB
      } = IB;
      return (0, dB.jsxs)(dB.Fragment, {
        children: [(0, dB.jsxs)(CB, {
          icon: "pen-to-square",
          title: TB("worldBuilder:basicsSection"),
          disabled: !cB,
          children: [(0, dB.jsx)(QB, {
            label: TB("general:name"),
            caption: TB("worldBuilder:schematicNameTagsHint"),
            children: (0, dB.jsx)(GB.c, {
              className: "SchematicPageName",
              defaultValue: JB.name,
              onValueChange: BB => oB("name", BB),
              placeholderText: TB("worldBuilder:schematicNamePlaceholder"),
              maxLength: hB.fb
            })
          }), (0, dB.jsx)(QB, {
            label: TB("general:description"),
            children: (0, dB.jsx)(GB.c, {
              className: "SchematicPageDescription",
              useTextarea: !0,
              defaultValue: JB.description,
              onValueChange: BB => oB("description", BB),
              placeholderText: TB("worldBuilder:schematicDescriptionPlaceholder"),
              maxLength: hB.eb
            })
          }), (0, dB.jsx)(II, {
            gameCategory: JB.gameCategory,
            setGameCategory: BB => oB("gameCategory", BB),
            disabled: !kB
          }), !0 === JB.gamePublished && (0, dB.jsx)(tB, {
            schematicData: JB,
            updateSchematicData: oB,
            publishFormEnabled: kB,
            onClose: function() {
              null === ZB || void 0 === ZB || ZB()
            }
          })]
        }), (0, dB.jsx)(wB, {
          schematicData: JB,
          updateSchematicData: oB,
          publishFormEnabled: kB,
          formEnabled: cB
        }), !0 === JB.gamePublished && (0, dB.jsx)(CB, {
          icon: "palette",
          title: TB("worldBuilder:texturePackSection"),
          disabled: !cB,
          children: (0, dB.jsx)(SB, {
            schematicData: JB,
            setTexturePack: IB.setTexturePack,
            initializeTexturePack: IB.initializeTexturePack,
            publishFormEnabled: kB
          })
        })]
      })
    }

    function TI(BB) {
      let {
        editor: IB
      } = BB;
      const {
        t: ZB
      } = (0, vB.G)(), {
        schematicData: TB,
        formEnabled: JB,
        hasUnsavedChanges: GB
      } = IB, hB = JB && GB;
      return (0, dB.jsxs)("footer", {
        className: "SchematicPageFooter",
        children: [JB && GB && (0, dB.jsxs)("div", {
          className: "SchematicPageFooterStatus",
          children: [(0, dB.jsx)("span", {
            className: "SchematicPageFooterStatusDot"
          }), ZB("worldBuilder:unsavedChanges")]
        }), (0, dB.jsx)(cB.e, {
          tooltipInner: (0, dB.jsx)("div", {
            className: "SaveButtonTooltip",
            children: ZB(JB && !GB ? "worldBuilder:saveChangesNoneDescription" : "worldBuilder:saveChangesDescription")
          }),
          children: (0, dB.jsxs)(oB.g, {
            className: "SaveChangesButton",
            onClick: () => IB.saveSchematic(TB.gamePublished),
            disabled: !hB,
            children: [(0, dB.jsxs)("span", {
              className: JB ? "" : "SaveChangesButtonBodyHidden",
              children: [(0, dB.jsx)(nB.d, {
                name: "wrench"
              }), " ", ZB("worldBuilder:saveChanges")]
            }), !JB && (0, dB.jsx)(kB.d, {})]
          })
        })]
      })
    }

    function JI(BB) {
      let {
        schematic: IB,
        onSchematicUpdate: ZB,
        onClose: JB,
        inSourceWorld: GB
      } = BB;
      const {
        t: kB
      } = (0, vB.G)();

      function cB() {
        null === JB || void 0 === JB || JB()
      }
      const nB = (0, BI.b)(IB, {
        onNavigateAway: cB,
        inSourceWorld: GB
      });
      return (0, TB.useEffect)((() => {
        null === ZB || void 0 === ZB || ZB(nB.schematicData)
      }), [nB.schematicData, ZB]), (0, dB.jsxs)("div", {
        className: "SchematicPage SchematicPagePopupVariant",
        children: [(0, dB.jsxs)("div", {
          className: "SchematicPageBody",
          children: [(0, dB.jsx)(oB.c, {
            onClick: cB,
            children: kB("worldBuilder:back")
          }), (0, dB.jsx)(CB, {
            icon: "rocket-launch",
            title: kB("worldBuilder:actionsSection"),
            disabled: !nB.formEnabled,
            children: (0, dB.jsx)(OB.c, {
              editor: nB
            })
          }), (0, dB.jsx)(ZI, {
            editor: nB,
            onClose: cB
          })]
        }), (0, dB.jsx)(TI, {
          editor: nB
        })]
      })
    }

    function oI(BB) {
      let {
        schematic: IB,
        onSchematicUpdate: ZB,
        onClose: TB,
        inSourceWorld: oB
      } = BB;
      JB.NotificationProvider.showCustomPopup({
        body: BB => (0, dB.jsx)(JI, {
          schematic: IB,
          onSchematicUpdate: ZB,
          onClose: BB,
          inSourceWorld: oB
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: TB,
        unlockPointerKey: "schematicPagePopup"
      })
    }
  },
  5103: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => hB
    });
    var TB = ZB(1091),
      JB = ZB.n(TB),
      oB = ZB(1248),
      GB = ZB(1102),
      vB = ZB(1516),
      kB = ZB(1421),
      cB = ZB(1397),
      nB = ZB(1153);

    function hB(BB) {
      let {
        editor: IB,
        className: ZB
      } = BB;
      const {
        t: TB
      } = (0, oB.G)(), {
        schematicData: hB,
        formEnabled: zB,
        publishFormEnabled: FB
      } = IB, NB = !zB || !FB;
      return (0, nB.jsxs)("div", {
        className: JB()("PublishButtonContainer", ZB),
        children: [IB.canEditSourceWorld && (0, nB.jsxs)(vB.g, {
          onClick: IB.editSourceWorld,
          disabled: NB,
          children: [(0, nB.jsx)(GB.d, {
            name: "edit"
          }), " ", TB("worldBuilder:editSourceWorld")]
        }), !hB.gamePublished && (0, nB.jsx)(kB.e, {
          tooltipInner: (0, nB.jsx)("div", {
            className: "PublishButtonTooltip",
            children: TB("worldBuilder:publishAsGameDescription")
          }),
          children: (0, nB.jsxs)(vB.p, {
            onClick: () => IB.saveSchematic(!0),
            disabled: NB,
            children: [(0, nB.jsx)(GB.d, {
              name: "rocket-launch"
            }), " ", TB("worldBuilder:publishAsGame"), " ", (0, nB.jsx)(GB.d, {
              name: "info-circle"
            })]
          })
        }), !0 === hB.gamePublished && (0, nB.jsxs)(nB.Fragment, {
          children: [(0, nB.jsx)(kB.e, {
            tooltipInner: (0, nB.jsx)("div", {
              className: "PublishButtonTooltip",
              children: TB("worldBuilder:unpublishAsGameDescription")
            }),
            children: (0, nB.jsxs)(vB.M, {
              onClick: IB.unpublishSchematic,
              disabled: NB,
              children: [(0, nB.jsx)(GB.d, {
                name: "rocket-launch"
              }), " ", TB("worldBuilder:unpublishAsGame"), " ", (0, nB.jsx)(GB.d, {
                name: "info-circle"
              })]
            })
          }), (0, nB.jsxs)(vB.g, {
            onClick: IB.playGame,
            disabled: NB,
            children: [(0, nB.jsx)(GB.d, {
              name: "joystick"
            }), " ", TB("general:playGame")]
          })]
        }), !zB && (0, nB.jsx)(cB.d, {
          loaderType: "Secondary"
        })]
      })
    }
  },
  5134: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => JB
    });
    var TB = ZB(1258);
    async function JB(BB) {
      const IB = await fetch(`${TB.clientSideServerUrls.s3Url}/${BB}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === IB.status || 403 === IB.status) return null;
      if (!IB.ok) throw new Error(`Failed to download the texture pack (${IB.status})`);
      return await IB.json()
    }
  },
  5234: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => qB
    });
    var TB = ZB(63),
      JB = ZB(1385),
      oB = ZB(1058),
      GB = ZB(168),
      vB = ZB(1614),
      kB = ZB(20),
      cB = ZB(1995),
      nB = ZB(1561),
      hB = ZB(4768),
      zB = ZB(1403),
      FB = ZB(1179),
      NB = ZB(1579);

    function gB(BB, IB) {
      return {
        schematicId: BB.schematicId,
        name: BB.name,
        description: BB.description,
        gamePublished: IB,
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

    function qB(BB) {
      let {
        onNavigateAway: IB,
        inSourceWorld: ZB = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const {
        userContext: qB
      } = (0, FB.d)(), yB = (0, NB.useNavigatePreserveSearch)(), [UB, WB] = (0, TB.useState)({
        ...BB
      }), [dB, CB] = (0, TB.useState)("Enter"), [QB, sB] = (0, TB.useState)(void 0), wB = (0, TB.useRef)(gB(BB, BB.gamePublished)), OB = (0, TB.useRef)(void 0), YB = "Enter" === dB, iB = qB.playerHasRank("developer") || qB.playerHasRank("admin") || "Enter" === dB && !1 !== UB.schematicContainsSpawnBlock, pB = void 0 !== QB && QB !== OB.current || JSON.stringify(gB(UB, UB.gamePublished)) !== JSON.stringify(wB.current);

      function aB(BB, IB) {
        WB((ZB => ({
          ...ZB,
          [BB]: IB
        })))
      }
      const HB = (0, TB.useCallback)((BB => {
        OB.current = BB, sB(BB)
      }), []);

      function MB(BB) {
        CB("Loading");
        const IB = gB(UB, BB),
          ZB = QB !== OB.current ? QB : void 0;
        nB.c.updateSchematic(qB, IB, ZB).then((ZB => {
          let {
            customTexturePackKey: TB
          } = ZB;
          CB("Success"), aB("customTexturePackKey", TB), wB.current = IB, OB.current = void 0, sB(void 0), setTimeout((() => {
            aB("gamePublished", BB), CB("Enter")
          }), 1e3)
        })).catch((BB => {
          var IB;
          (console.error("Failed to save schematic:", BB), CB("Error"), BB instanceof GB.d && BB.errorMessageForUser) && zB.NotificationProvider.showAlertPopup({
            title: "worldBuilder:changesNotSaved",
            subtitle: BB.errorMessageForUser,
            textOpts: {
              subtitle: null !== (IB = BB.errorMessageTranslationParams) && void 0 !== IB ? IB : void 0
            },
            confirmText: "general:ok"
          });
          setTimeout((() => {
            CB("Enter")
          }), 1e3)
        }))
      }
      return {
        schematicData: UB,
        updateSchematicData: aB,
        setTexturePack: sB,
        initializeTexturePack: HB,
        updateState: dB,
        formEnabled: YB,
        publishFormEnabled: iB,
        hasUnsavedChanges: pB,
        canEditSourceWorld: !ZB,
        saveSchematic: MB,
        unpublishSchematic: function() {
          zB.NotificationProvider.showPromptPopup({
            icon: "rocket-launch",
            title: "worldBuilder:unpublishAsGameConfirmTitle",
            subtitle: "worldBuilder:unpublishAsGameConfirmSubtitle",
            confirmText: "worldBuilder:unpublishAsGame",
            cancelText: "general:cancel",
            unlockPointerKey: "unpublishGamePrompt"
          }).getResult().then((BB => {
            !0 === BB && MB(!1)
          }))
        },
        editSourceWorld: function() {
          CB("Loading"), hB.d.getSourceWorld(UB.schematicId).then((BB => {
            cB.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, kB.m)("other"), yB((0, JB.b)("classic", BB)), null === IB || void 0 === IB || IB()
          })).catch((BB => {
            console.error("Failed to get source world:", BB), CB("Error"), setTimeout((() => {
              CB("Enter")
            }), 1e3)
          }))
        },
        playGame: function() {
          cB.gameBridge.send("leaveGame", {
            reloadPath: "/"
          }), yB((0, vB.A)((0, oB.o)(UB.schematicId), UB)), null === IB || void 0 === IB || IB()
        }
      }
    }
  },
  5093: () => {}
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);