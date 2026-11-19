export const id = 104;
export const ids = [104];
export const modules = {
  4516: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => uY,
      f: () => vY,
      j: () => sY
    });
    DY(4523);
    var FY = DY(1211),
      AY = DY(1092),
      IY = DY.n(AY),
      RY = DY(1354),
      OY = (DY(61), DY(3920)),
      gY = DY(1098),
      aY = DY(1125);

    function vY(YY) {
      let {
        children: rY,
        label: DY,
        className: AY,
        circleInfoText: OY,
        disabled: vY,
        onLabelClick: uY
      } = YY;
      const {
        t: sY
      } = (0, FY.C)(), iY = (0, aY.jsxs)("div", {
        className: IY()("Label", {
          ClickableLabel: void 0 !== uY
        }),
        onClick: uY,
        children: [sY(DY), OY && (0, aY.jsx)(gY.e, {
          name: "circle-info"
        })]
      });
      return (0, aY.jsxs)("div", {
        className: IY()("LabeledInput", {
          [AY]: AY,
          DisabledLabelInput: vY
        }),
        children: [OY && (0, aY.jsx)(RY.g, {
          tooltipInner: (0, aY.jsx)("div", {
            className: "LabeledInputTooltip",
            children: sY(OY)
          }),
          children: iY
        }), !OY && iY, rY]
      })
    }

    function uY(YY) {
      let {
        checked: rY,
        setChecked: DY
      } = YY;
      return (0, aY.jsx)("div", {
        className: "OtherInput ClickableOtherInput",
        "data-pad-focusable": !0,
        onClick: YY => {
          DY(!rY)
        },
        children: (0, aY.jsx)(OY.d, {
          checked: rY,
          onChange: YY => {
            DY(YY.target.checked)
          },
          disabled: !1
        })
      })
    }

    function sY(YY) {
      let {
        checked: rY,
        setChecked: DY,
        disabled: FY
      } = YY;
      return (0, aY.jsx)("div", {
        className: IY()("SwitchContainer", {
          SwitchContainerDisabled: FY
        }),
        onClick: () => {
          FY || DY(!rY)
        },
        children: (0, aY.jsx)(OY.d, {
          className: "SwitchCheckbox",
          checked: rY,
          onChange: YY => {
            DY(YY.target.checked)
          },
          disabled: !!FY
        })
      })
    }
  },
  4529: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => aY
    });
    var FY = DY(1092),
      AY = DY.n(FY),
      IY = DY(4201),
      RY = DY(1211),
      OY = DY(1125);
    const gY = [...IY.l, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function aY(YY) {
      const {
        disabled: rY,
        hideWrapper: DY
      } = YY, {
        t: FY
      } = (0, RY.C)(), aY = YY.advancedMode ? gY.map((rY => [rY, YY.callbacks[rY]])) : IY.l.map((rY => [rY, YY.callbacks[rY]])), uY = (0, OY.jsx)("div", {
        className: AY()("PluginsGrid", {
          SectionBody: !DY
        }),
        children: aY.map((YY => {
          let [DY, FY] = YY;
          return (0, OY.jsx)(vY, {
            plugin: DY,
            callbacks: FY,
            disabled: rY
          }, DY)
        }))
      });
      return DY ? uY : (0, OY.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, OY.jsx)("div", {
          className: "SectionTitle",
          children: FY("worldBuilder:pluginsSection")
        }), uY]
      })
    }

    function vY(YY) {
      let {
        plugin: rY,
        callbacks: {
          isEnabled: DY,
          mV: FY
        },
        disabled: IY
      } = YY;
      const {
        t: gY
      } = (0, RY.C)(), aY = DY();
      return (0, OY.jsxs)("div", {
        className: AY()("PluginCard", {
          PluginCardEnabled: aY,
          PluginCardDisabledForm: IY
        }),
        "data-pad-focusable": !0,
        "aria-disabled": IY || void 0,
        onClick: () => {
          IY || FY(!aY)
        },
        children: [(0, OY.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, OY.jsx)("img", {
            src: `/textures/games/classic/customGames/${rY}.png`,
            alt: rY
          })
        }), (0, OY.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, OY.jsx)("div", {
            className: "PluginCardTitle",
            children: gY(uY[rY])
          }), (0, OY.jsx)("div", {
            className: "PluginCardDescription",
            children: gY(sY[rY])
          })]
        }), (0, OY.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: gY(aY ? "general:on" : "general:off")
        })]
      })
    }
    const uY = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      sY = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  4507: (YY, rY, DY) => {
    DY.d(rY, {
      g: () => Ar,
      d: () => Fr,
      f: () => Dr,
      k: () => Ir
    });
    var FY = DY(61),
      AY = DY(1346),
      IY = DY(1437),
      RY = DY(1654),
      OY = DY(1211),
      gY = DY(1337),
      aY = DY(1354),
      vY = DY(1098),
      uY = DY(1231),
      sY = DY(1092),
      iY = DY.n(sY),
      yY = DY(332),
      QY = DY(4201),
      oY = DY(1244),
      WY = DY(4516),
      EY = DY(2722),
      mY = DY(4529),
      VY = DY(1125);

    function SY(YY) {
      let {
        icon: rY,
        title: DY,
        disabled: FY,
        children: AY
      } = YY;
      return (0, VY.jsxs)("div", {
        className: iY()("ManageCard", {
          ManageCardDisabled: FY
        }),
        children: [(0, VY.jsxs)("div", {
          className: "ManageCardHead",
          children: [(0, VY.jsx)("div", {
            className: "ManageCardIcon",
            children: (0, VY.jsx)(vY.e, {
              name: rY
            })
          }), (0, VY.jsx)("div", {
            children: (0, VY.jsx)("h2", {
              className: "ManageCardTitle",
              children: DY
            })
          })]
        }), (0, VY.jsxs)("div", {
          className: "ManageCardBody",
          children: [AY, FY && (0, VY.jsx)("div", {
            className: "ManageCardDisabledOverlay"
          })]
        })]
      })
    }

    function lY(YY) {
      let {
        label: rY,
        caption: DY,
        children: FY
      } = YY;
      return (0, VY.jsxs)("div", {
        className: "ManageStackedField",
        children: [(0, VY.jsx)("div", {
          className: "ManageStackedFieldLabel",
          children: rY
        }), FY, DY && (0, VY.jsx)("div", {
          className: "ManageStackedFieldCaption",
          children: DY
        })]
      })
    }

    function TY(YY) {
      let {
        label: rY,
        caption: DY,
        disabled: FY,
        children: AY
      } = YY;
      return (0, VY.jsxs)("div", {
        className: iY()("ManageField", {
          ManageFieldDisabled: FY
        }),
        children: [(0, VY.jsxs)("div", {
          className: "ManageFieldText",
          children: [(0, VY.jsx)("div", {
            className: "ManageFieldLabel",
            children: rY
          }), (0, VY.jsx)("div", {
            className: "ManageFieldCaption",
            children: DY
          })]
        }), (0, VY.jsx)("div", {
          className: "ManageFieldControl",
          children: AY
        })]
      })
    }

    function eY(YY) {
      var rY, DY;
      let {
        schematicData: FY,
        updateSchematicData: AY,
        publishFormEnabled: IY,
        formEnabled: RY
      } = YY;
      const {
        t: gY
      } = (0, OY.C)(), aY = !IY, vY = {
        tpRequests: {
          isEnabled: () => !FY.disableTpRequests,
          mV: YY => AY("disableTpRequests", !YY)
        },
        spawnProtection: {
          isEnabled: () => !FY.disableSpawnProtection,
          mV: YY => AY("disableSpawnProtection", !YY)
        },
        spawnReset: {
          isEnabled: () => !!FY.enableSpawnReset,
          mV: YY => AY("enableSpawnReset", YY)
        },
        smpMarketplace: {
          isEnabled: () => !!FY.enableSmpMarketplace,
          mV: YY => AY("enableSmpMarketplace", YY)
        },
        survivalGuns: {
          isEnabled: () => !!FY.enableSurvivalGuns,
          mV: YY => AY("enableSurvivalGuns", YY)
        },
        fallDamage: {
          isEnabled: () => !FY.disableFallDamage,
          mV: YY => AY("disableFallDamage", !YY)
        },
        dayNight: {
          isEnabled: () => !!FY.enableDayNight,
          mV: YY => AY("enableDayNight", YY)
        }
      };
      return (0, VY.jsxs)(VY.Fragment, {
        children: [!1 === FY.schematicContainsSpawnBlock && (0, VY.jsx)("div", {
          className: "ManageWarningBanner",
          children: gY("worldBuilder:mustContainSpawnBlock")
        }), (0, VY.jsxs)("div", {
          className: "ManageSettingsGrid",
          children: [(0, VY.jsxs)(SY, {
            icon: "globe",
            title: gY("worldBuilder:worldRulesSection"),
            disabled: !RY,
            children: [(0, VY.jsx)(TY, {
              label: gY("classic:defaultGamemode"),
              caption: gY("classic:defaultGamemodeDescription"),
              disabled: aY,
              children: (0, VY.jsx)(EY.b, {
                controlClassName: "ManageDropdown",
                options: QY.D.map((YY => ({
                  value: YY,
                  label: yY.u[YY]
                }))),
                value: FY.defaultGamemode,
                onChange: YY => AY("defaultGamemode", YY.value)
              })
            }), (0, VY.jsx)(TY, {
              label: gY("classic:voidDeathHeight"),
              caption: gY("classic:voidDeathHeightDescription"),
              disabled: aY,
              children: (0, VY.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, VY.jsx)("input", {
                  type: "number",
                  max: oY.E,
                  value: null !== (rY = FY.voidDeathHeight) && void 0 !== rY ? rY : "",
                  onChange: YY => {
                    const rY = parseInt(YY.target.value);
                    AY("voidDeathHeight", rY)
                  }
                }), (0, VY.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: gY("worldBuilder:blocksUnit")
                })]
              })
            }), (0, VY.jsx)(TY, {
              label: gY("classic:worldBorder"),
              caption: gY("classic:worldBorderDescription"),
              disabled: aY,
              children: (0, VY.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, VY.jsx)("input", {
                  type: "number",
                  min: oY.K,
                  max: oY.G,
                  placeholder: gY("worldBuilder:noWorldBorderLimit"),
                  value: null !== (DY = FY.worldBorder) && void 0 !== DY ? DY : "",
                  onChange: YY => {
                    const rY = parseInt(YY.target.value);
                    AY("worldBorder", isNaN(rY) ? null : rY)
                  }
                }), (0, VY.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: gY("worldBuilder:blocksUnit")
                })]
              })
            }), (0, VY.jsx)(TY, {
              label: gY("classic:disableMobs"),
              caption: gY("classic:disableMobsDescription"),
              disabled: aY,
              children: (0, VY.jsx)(WY.j, {
                checked: FY.disableMobs,
                setChecked: YY => AY("disableMobs", YY),
                disabled: aY
              })
            })]
          }), (0, VY.jsxs)(SY, {
            icon: "user-group",
            title: gY("worldBuilder:playerAndLobbySection"),
            disabled: !RY,
            children: [(0, VY.jsx)(TY, {
              label: gY("classic:disableKeepInventory"),
              caption: gY("classic:disableKeepInventoryDescription"),
              disabled: aY,
              children: (0, VY.jsx)(WY.j, {
                checked: FY.disableKeepInventory,
                setChecked: YY => AY("disableKeepInventory", YY),
                disabled: aY
              })
            }), (0, VY.jsx)(TY, {
              label: gY("classic:persistInventory"),
              caption: gY("classic:persistInventoryDescription"),
              disabled: aY,
              children: (0, VY.jsx)(EY.b, {
                controlClassName: "ManageDropdown",
                options: QY.m.map((YY => ({
                  value: YY,
                  label: yY.l[YY]
                }))),
                value: FY.persistInventory,
                onChange: YY => AY("persistInventory", YY.value)
              })
            }), (0, VY.jsx)(TY, {
              label: gY("classic:persistWorld"),
              caption: gY("classic:persistWorldDescription"),
              disabled: aY,
              children: (0, VY.jsx)(WY.j, {
                checked: FY.persistWorld,
                setChecked: YY => AY("persistWorld", YY),
                disabled: aY
              })
            }), (0, VY.jsx)(TY, {
              label: gY("classic:disableLobbySpawn"),
              caption: gY("classic:disableLobbySpawnDescription"),
              disabled: aY,
              children: (0, VY.jsx)(WY.j, {
                checked: FY.disableLobbySpawn,
                setChecked: YY => AY("disableLobbySpawn", YY),
                disabled: aY
              })
            }), (0, VY.jsx)(TY, {
              label: gY("classic:hideLobbyCode"),
              caption: gY("classic:hideLobbyCodeDescription"),
              disabled: aY,
              children: (0, VY.jsx)(WY.j, {
                checked: FY.hideLobbyCode,
                setChecked: YY => AY("hideLobbyCode", YY),
                disabled: aY
              })
            })]
          })]
        }), (0, VY.jsx)(SY, {
          icon: "layer-group",
          title: gY("worldBuilder:pluginsSection"),
          disabled: !RY,
          children: (0, VY.jsx)(mY.c, {
            callbacks: vY,
            disabled: aY,
            advancedMode: !0,
            hideWrapper: !0
          })
        })]
      })
    }
    var NY = DY(4534),
      BY = DY(3920),
      cY = DY(1471),
      KY = DY(3069),
      HY = DY(1152),
      zY = DY(4483),
      ZY = DY(4536),
      CY = DY(1441);
    const fY = 50,
      jY = .3;
    async function hY(YY) {
      const rY = await
      function(YY) {
        return new Promise(((rY, DY) => {
          const FY = new FileReader;
          FY.onload = () => rY(FY.result), FY.onerror = DY, FY.readAsDataURL(YY)
        }))
      }(YY), DY = await
      function(YY) {
        return new Promise(((rY, DY) => {
          const FY = new Image;
          FY.onload = () => rY(FY), FY.onerror = () => DY(new Error("Failed to load image")), FY.src = YY
        }))
      }(rY);
      if (DY.naturalHeight > DY.naturalWidth) throw new dY;
      const FY = 1024 * fY,
        {
          dataUrl: AY,
          finalQuality: IY
        } = function(YY, rY) {
          const DY = document.createElement("canvas");
          DY.width = YY.naturalWidth, DY.height = YY.naturalHeight, DY.getContext("2d").drawImage(YY, 0, 0);
          let FY = .92,
            AY = DY.toDataURL("image/jpeg", FY);
          for (; .75 * AY.length > rY && FY > .05;) FY -= .05, AY = DY.toDataURL("image/jpeg", FY);
          return {
            dataUrl: AY,
            finalQuality: FY
          }
        }(DY, FY);
      if (Math.ceil(.75 * AY.length) > FY) throw new JY;
      return {
        base64Jpg: AY,
        heavilyCompressed: IY < jY
      }
    }
    class dY extends Error {}
    class JY extends Error {}
    var MY = function(YY) {
      return YY[YY.NOT_LOGGED_IN = 0] = "NOT_LOGGED_IN", YY[YY.THUMBNAIL_LIMIT_REACHED = 1] = "THUMBNAIL_LIMIT_REACHED", YY
    }(MY || {});

    function wY(YY) {
      var rY;
      let {
        schematicId: DY,
        hasReadUploadPolicy: AY,
        onPolicyValidationError: gY,
        onThumbnailReady: aY
      } = YY;
      const {
        t: sY
      } = (0, OY.C)(), [yY, QY] = (0, FY.useState)(null), [oY, WY] = (0, FY.useState)(""), [EY, mY] = (0, FY.useState)(""), [SY, lY] = (0, FY.useState)(!0), [TY, eY] = (0, FY.useState)(!1), NY = (0, FY.useRef)(!1), [BY, cY] = (0, FY.useState)(null), [KY, HY] = (0, FY.useState)(!1), [zY, CY] = (0, FY.useState)(!1), fY = (0, FY.useRef)(0), {
        getRootProps: jY,
        getInputProps: MY,
        isDragActive: wY
      } = (0, ZY.d)({
        accept: {
          "image/*": [".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp"]
        },
        multiple: !1,
        onDrop: async YY => {
          if (0 === YY.length) return;
          const rY = YY[0],
            DY = ++fY.current;
          cY(null), HY(!1), QY(null), WY(rY.name);
          try {
            const YY = await hY(rY);
            if (DY !== fY.current) return;
            QY(YY), HY(YY.heavilyCompressed)
          } catch (FY) {
            if (DY !== fY.current) return;
            cY(sY(FY instanceof dY ? "thumbnail:portraitImagesNotAllowed" : FY instanceof JY ? "thumbnail:couldNotCompressImage" : "thumbnail:failedToUploadImage"))
          }
        },
        useFsAccessApi: !1
      }), bY = oY.length <= 30 ? oY : `${oY.slice(0,27)}...`, XY = null !== (rY = null === yY || void 0 === yY ? void 0 : yY.base64Jpg) && void 0 !== rY ? rY : null, qY = EY.trim(), pY = qY.length >= uY.n && qY.length <= uY.k, kY = zY && !yY && !BY, GY = zY && !pY;
      return (0, VY.jsxs)("div", {
        className: "ThumbnailUploadContainer",
        children: [(0, VY.jsxs)("div", {
          ...jY({
            className: iY()("ThumbnailUploadDropzone", {
              ActiveDrag: wY,
              ValidationError: kY
            })
          }),
          children: [(0, VY.jsx)("input", {
            ...MY()
          }), !wY && XY ? (0, VY.jsxs)(VY.Fragment, {
            children: [(0, VY.jsxs)("div", {
              className: "ThumbnailAspectPreviews",
              children: [(0, VY.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, VY.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "1:1"
                }), (0, VY.jsx)("div", {
                  className: "ThumbnailAspectFrame Square",
                  children: (0, VY.jsx)("img", {
                    src: XY,
                    alt: "1:1 preview"
                  })
                })]
              }), (0, VY.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, VY.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "16:9"
                }), (0, VY.jsx)("div", {
                  className: "ThumbnailAspectFrame Wide",
                  children: (0, VY.jsx)("img", {
                    src: XY,
                    alt: "16:9 preview"
                  })
                })]
              })]
            }), (0, VY.jsxs)("div", {
              children: [(0, VY.jsx)("div", {
                className: "ThumbnailUploadInstructions Active",
                children: bY
              }), (0, VY.jsx)("div", {
                className: "ThumbnailUploadInstructions Preview",
                children: sY("thumbnail:preview")
              })]
            })]
          }) : (0, VY.jsxs)(VY.Fragment, {
            children: [(0, VY.jsx)("div", {
              className: "ThumbnailUploadIcon",
              children: (0, VY.jsx)(vY.e, {
                name: "image"
              })
            }), (0, VY.jsx)("div", {
              className: "ThumbnailUploadInstructions",
              children: sY("thumbnail:dragImageHere")
            })]
          })]
        }), kY && (0, VY.jsx)("div", {
          className: "ThumbnailUploadError",
          children: sY("thumbnail:imageRequired")
        }), (0, VY.jsx)(RY.d, {
          className: iY()("ThumbnailUploadNameInput", {
            ValidationError: GY
          }),
          placeholderText: sY("thumbnail:thumbnailName"),
          defaultValue: EY,
          onValueChange: YY => {
            mY(YY)
          },
          maxLength: uY.k
        }), GY && (0, VY.jsx)("div", {
          className: "ThumbnailUploadError",
          children: sY("thumbnail:nameRequired", {
            min: uY.n,
            max: uY.k
          })
        }), (0, VY.jsxs)("label", {
          className: "ThumbnailUploadCheckbox",
          children: [(0, VY.jsx)("input", {
            type: "checkbox",
            checked: SY,
            onChange: YY => {
              lY(YY.target.checked)
            }
          }), sY("thumbnail:setAsThumbnailOnceApproved")]
        }), KY && (0, VY.jsx)("div", {
          className: "ThumbnailUploadWarning",
          children: sY("thumbnail:heavyCompressionWarning")
        }), BY && (0, VY.jsx)("div", {
          className: "ThumbnailUploadError",
          children: BY
        }), (0, VY.jsx)(IY.n, {
          disabled: TY,
          className: "ThumbnailUploadButton",
          onClick: async () => {
            if (CY(!0), !NY.current && yY && pY && AY) {
              NY.current = !0, eY(!0), cY(null);
              try {
                await aY(yY.base64Jpg, qY, SY ? DY : null)
              } catch (YY) {
                cY(YY.errorMessageForUser ? sY(YY.errorMessageForUser, YY.errorMessageTranslationParams) : sY("thumbnail:failedToUploadImage"))
              } finally {
                NY.current = !1, eY(!1)
              }
            } else AY || gY()
          },
          children: sY(TY ? "thumbnail:processing" : "thumbnail:uploadThumbnail")
        })]
      })
    }
    const bY = 2e3;

    function XY(YY) {
      let {
        schematicId: rY,
        ownedThumbnailCount: DY,
        onClose: AY,
        onThumbnailReady: IY
      } = YY;
      const {
        t: RY
      } = (0, OY.C)(), {
        userContext: gY
      } = (0, HY.d)(), [aY, sY] = (0, FY.useState)(!1), [yY, QY] = (0, FY.useState)(!1), [oY, WY] = (0, FY.useState)(!1), EY = (0, FY.useRef)();
      (0, FY.useEffect)((() => () => {
        clearTimeout(EY.current)
      }), []);
      const mY = function(YY, rY) {
        const DY = [];
        return YY.isLoggedIn() || DY.push(MY.NOT_LOGGED_IN), rY >= uY.X && DY.push(MY.THUMBNAIL_LIMIT_REACHED), DY
      }(gY, DY);
      if (mY.length > 0) {
        const YY = {
          [MY.NOT_LOGGED_IN]: {
            key: "thumbnail:mustBeLoggedInToUpload"
          },
          [MY.THUMBNAIL_LIMIT_REACHED]: {
            key: "thumbnail:thumbnailLimitReachedPleaseDelete",
            params: {
              max: uY.X
            }
          }
        };
        return (0, VY.jsxs)("div", {
          className: "ThumbnailUploaderInner",
          children: [(0, VY.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: RY("thumbnail:cannotUploadThumbnail")
          }), mY.map(((rY, DY) => {
            const FY = YY[rY];
            return (0, VY.jsxs)("div", {
              className: "CannotUploadThumbnailItem",
              children: [(0, VY.jsx)(vY.e, {
                name: "triangle-exclamation"
              }), (0, VY.jsx)("span", {
                children: RY(FY.key, FY.params)
              })]
            }, DY)
          }))]
        })
      }
      return (0, VY.jsxs)("div", {
        className: iY()("ThumbnailUploaderInner", {
          ThumbnailUploaderSuccess: aY
        }),
        children: [aY && (0, VY.jsxs)("div", {
          className: "ThumbnailUploadSuccessOverlay",
          children: [(0, VY.jsxs)("div", {
            className: "ThumbnailUploadSuccessIcon FullyFancyText AnimFadeInScaleUp",
            children: [(0, VY.jsx)(vY.e, {
              name: "check"
            }), (0, VY.jsx)(CY.b, {})]
          }), (0, VY.jsx)("div", {
            className: "ThumbnailUploadSuccessText AnimFadeInScaleUp",
            children: RY("thumbnail:thumbnailUploaded")
          })]
        }), (0, VY.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: RY("thumbnail:uploadThumbnail")
        }), (0, VY.jsxs)("div", {
          className: "ThumbnailUploaderBody",
          children: [(0, VY.jsxs)("div", {
            className: "ThumbnailUploaderLeft",
            children: [(0, VY.jsx)("h3", {
              className: "SchematicPopupSubtitle",
              children: RY("thumbnail:chooseImage", {
                maxSizeKb: fY
              })
            }), (0, VY.jsx)(wY, {
              schematicId: rY,
              hasReadUploadPolicy: yY,
              onPolicyValidationError: () => {
                WY(!0)
              },
              onThumbnailReady: async (YY, rY, DY) => {
                await IY(YY, rY, DY), sY(!0), EY.current = setTimeout(AY, bY)
              }
            })]
          }), (0, VY.jsxs)("div", {
            className: "ThumbnailUploadPolicy",
            children: [(0, VY.jsx)("h3", {
              className: "ThumbnailUploadPolicyTitle",
              children: RY("thumbnail:uploadPolicy")
            }), (0, VY.jsxs)("ul", {
              className: "ThumbnailUploadPolicyList",
              children: [(0, VY.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, VY.jsx)(vY.e, {
                  name: "check"
                }), (0, VY.jsx)("span", {
                  children: RY("thumbnail:policyFollowGuidelines")
                })]
              }), (0, VY.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, VY.jsx)(vY.e, {
                  name: "check"
                }), (0, VY.jsx)("span", {
                  children: RY("thumbnail:policyInGameAssets")
                })]
              }), (0, VY.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, VY.jsx)(vY.e, {
                  name: "check"
                }), (0, VY.jsx)("span", {
                  children: RY("thumbnail:policyLimitText")
                })]
              }), (0, VY.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, VY.jsx)(vY.e, {
                  name: "x"
                }), (0, VY.jsx)("span", {
                  children: RY("thumbnail:policyCopyrightContent")
                })]
              }), (0, VY.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, VY.jsx)(vY.e, {
                  name: "x"
                }), (0, VY.jsx)("span", {
                  children: RY("thumbnail:policyOutOfGameAssets")
                })]
              }), (0, VY.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, VY.jsx)(vY.e, {
                  name: "x"
                }), (0, VY.jsx)("span", {
                  children: RY("thumbnail:policyBloxdTags")
                })]
              }), (0, VY.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, VY.jsx)(vY.e, {
                  name: "x"
                }), (0, VY.jsx)("span", {
                  children: RY("thumbnail:policyMustReflectGame")
                })]
              })]
            }), (0, VY.jsxs)("label", {
              className: iY()("ThumbnailUploadCheckbox Policy", {
                ValidationError: oY && !yY
              }),
              children: [(0, VY.jsx)("input", {
                type: "checkbox",
                checked: yY,
                onChange: YY => {
                  QY(YY.target.checked)
                }
              }), RY("thumbnail:agreeToUploadPolicy")]
            }), oY && !yY && (0, VY.jsx)("div", {
              className: "ThumbnailPolicyError",
              children: RY("thumbnail:policyRequired")
            })]
          })]
        })]
      })
    }
    var qY = DY(1222);
    const pY = {
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

    function kY(YY) {
      var rY, DY;
      let {
        schematicData: RY,
        updateSchematicData: aY,
        publishFormEnabled: uY,
        onClose: sY
      } = YY;
      const {
        t: yY
      } = (0, OY.C)(), {
        userContext: QY,
        isUserContextUpdating: oY
      } = (0, HY.d)(), WY = (0, KY.b)(), [EY, mY] = (0, FY.useState)([]), [SY, lY] = (0, FY.useState)([]), [TY, eY] = (0, FY.useState)(!0), [NY, BY] = (0, FY.useState)(null !== (rY = RY.customThumbnailId) && void 0 !== rY ? rY : null), [ZY, CY] = (0, FY.useState)(null), fY = (0, FY.useRef)(null !== (DY = RY.customThumbnailId) && void 0 !== DY ? DY : null), jY = (0, FY.useRef)(0), hY = (0, FY.useRef)(null), dY = (0, FY.useRef)(null), JY = (0, FY.useRef)(null), MY = (0, FY.useRef)(!1);

      function wY(YY, rY) {
        JY.current && (clearTimeout(JY.current), JY.current = null), CY(YY), null !== YY && rY && (JY.current = setTimeout((() => {
          CY(null), JY.current = null
        }), 5e3))
      }(0, FY.useEffect)((() => () => {
        clearTimeout(dY.current), clearTimeout(JY.current)
      }), []);
      const bY = (0, FY.useCallback)((() => {
        eY(!0), cY.e.getOwnedThumbnails(QY).then((YY => {
          const rY = [],
            DY = [];
          for (const FY of YY.thumbnails) FY.rejectionPolicyId ? rY.push(FY) : DY.push(FY);
          rY.sort(((YY, rY) => YY.lastUpdatedAt - rY.lastUpdatedAt)), DY.sort(((YY, rY) => {
            const DY = YY.approved ? 1 : 0,
              FY = (rY.approved ? 1 : 0) - DY;
            return 0 !== FY ? FY : rY.lastUpdatedAt - YY.lastUpdatedAt
          })), lY(rY), mY(DY)
        })).catch((YY => {
          console.error("Failed to fetch thumbnails:", YY)
        })).finally((() => {
          eY(!1)
        }))
      }), [QY]);
      async function pY(YY, rY, DY) {
        return cY.e.uploadSchematicThumbnail(QY, YY, rY, DY).then((() => {
          wY({
            text: yY("thumbnail:uploadedAwaitingModeration"),
            type: "success"
          }, !0), bY()
        }))
      }

      function kY() {
        jY.current = Date.now(), dY.current = null;
        const YY = hY.current;
        hY.current = null, wY({
          text: yY("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), cY.e.setSchematicThumbnail(QY, RY.schematicId, YY).then((() => {
          WY.current && (wY({
            text: yY("thumbnail:thumbnailUpdated"),
            type: "success"
          }, !0), fY.current = YY, aY("customThumbnailId", YY), aY("customThumbnailBlurhash", void 0), aY("customThumbnailVariants", void 0))
        })).catch((YY => {
          WY.current && (wY({
            text: YY.errorMessageForUser ? yY(YY.errorMessageForUser, YY.errorMessageTranslationParams) : yY("thumbnail:failedToSetThumbnail"),
            type: "error"
          }, !0), BY(fY.current))
        }))
      }

      function nY(YY) {
        BY(YY), hY.current = YY;
        const rY = Date.now() - jY.current;
        rY >= 1e3 ? kY() : (wY({
          text: yY("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), dY.current || (dY.current = setTimeout((() => {
          kY()
        }), 1e3 - rY)))
      }
      return (0, FY.useEffect)((() => {
        !1 === oY && bY()
      }), [oY, bY]), SY.length > 0 ? (0, VY.jsx)(GY, {
        rejectedThumbnails: SY,
        userContext: QY,
        isMountedRef: WY,
        onAcknowledged: bY
      }) : (0, VY.jsxs)("div", {
        className: "BloxdForm ThumbnailSection",
        children: [(0, VY.jsxs)("div", {
          className: "SectionTitle",
          children: [yY("thumbnail:gameThumbnail"), ZY && (0, VY.jsx)("span", {
            className: iY()("ThumbnailActionMsg", `ThumbnailActionMsg--${ZY.type}`),
            children: ZY.text
          })]
        }), (0, VY.jsx)("div", {
          className: "SectionBody",
          children: (0, VY.jsxs)("div", {
            className: "ThumbnailGrid",
            children: [(0, VY.jsxs)("div", {
              className: iY()("ThumbnailGridItem ThumbnailGridItemDefault", {
                ThumbnailGridItemSelected: null === NY
              }),
              onClick: () => nY(null),
              children: [(0, VY.jsx)(zY.e, {
                game: {
                  schematicId: RY.schematicId,
                  imageBlurhash: RY.imageBlurhash
                }
              }), (0, VY.jsx)("div", {
                className: "ThumbnailGridItemLabel ThumbnailDefaultLabel",
                children: yY("general:default")
              })]
            }), TY && (0, VY.jsx)(gY.c, {}), EY.map(((YY, rY) => (0, VY.jsxs)("div", {
              className: iY()("ThumbnailGridItem", {
                ThumbnailGridItemSelected: NY === YY.id,
                ThumbnailGridItemPending: !YY.approved
              }),
              onClick: () => {
                YY.approved && nY(YY.id)
              },
              children: [YY.approved && (0, VY.jsx)("img", {
                src: `${qY.clientSideServerUrls.s3Url}/customThumbnails/${YY.id}.jpg`,
                alt: "Thumbnail"
              }), YY.approved && (0, VY.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: YY.name
              }), YY.id && (0, VY.jsx)(IY.D, {
                className: "ThumbnailDeleteButton",
                onClick: rY => async function(YY, rY, DY) {
                  YY.stopPropagation();
                  const FY = await AY.NotificationProvider.showCustomPopup({
                      body: YY => (0, VY.jsx)(xY, {
                        thumbnailId: rY,
                        thumbnailName: DY,
                        onClose: rY => {
                          rY && (MY.current = !0), YY()
                        }
                      }),
                      middleScreenPopupClassName: "ThumbnailDeleteConfirmPopup",
                      onClose: sY
                    }).getResult(),
                    IY = MY.current;
                  MY.current = !1, IY && !0 === FY && (WY.current && wY({
                    text: yY("thumbnail:deletingThumbnail"),
                    type: "info"
                  }, !1), cY.e.deleteSchematicThumbnail(QY, rY).then((() => {
                    WY.current && (wY({
                      text: yY("thumbnail:thumbnailDeleted"),
                      type: "success"
                    }, !0), fY.current === rY && nY(null), bY())
                  })).catch((YY => {
                    WY.current && wY({
                      text: YY.errorMessageForUser ? yY(YY.errorMessageForUser, YY.errorMessageTranslationParams) : yY("thumbnail:failedToDeleteThumbnail"),
                      type: "error"
                    }, !0)
                  })))
                }(rY, YY.id, YY.name),
                children: (0, VY.jsx)(vY.e, {
                  name: "trash-can"
                })
              }), !YY.approved && (0, VY.jsx)("div", {
                className: "ThumbnailUnapprovedIcon",
                children: (0, VY.jsx)(vY.e, {
                  name: "hourglass-clock"
                })
              }), !YY.approved && (0, VY.jsxs)("div", {
                className: "ThumbnailGridItemLabel ThumbnailPendingLabel",
                children: [YY.name, (0, VY.jsx)("br", {}), yY("thumbnail:pendingApproval")]
              })]
            }, rY))), (0, VY.jsxs)("div", {
              className: iY()("ThumbnailGridItem ThumbnailUploadTile", {
                ThumbnailUploadTileDisabled: !uY
              }),
              onClick: () => {
                uY && function(YY) {
                  let {
                    schematicId: rY,
                    ownedThumbnailCount: DY,
                    onThumbnailReady: FY,
                    onClose: IY
                  } = YY;
                  AY.NotificationProvider.showCustomPopup({
                    body: YY => (0, VY.jsx)(XY, {
                      schematicId: rY,
                      ownedThumbnailCount: DY,
                      onClose: YY,
                      onThumbnailReady: FY
                    }),
                    middleScreenPopupClassName: "SchematicThumbnailPopup",
                    onClose: IY,
                    unlockPointerKey: "schematicThumbnailUploaderPopup"
                  })
                }({
                  schematicId: RY.schematicId,
                  ownedThumbnailCount: EY.length,
                  onThumbnailReady: pY,
                  onClose: sY
                })
              },
              children: [(0, VY.jsx)(vY.e, {
                name: "plus"
              }), (0, VY.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: yY("thumbnail:uploadThumbnail")
              })]
            })]
          })
        })]
      })
    }

    function GY(YY) {
      let {
        rejectedThumbnails: rY,
        userContext: DY,
        isMountedRef: AY,
        onAcknowledged: RY
      } = YY;
      const {
        t: aY
      } = (0, OY.C)(), [uY, sY] = (0, FY.useState)(!1), [iY, yY] = (0, FY.useState)(!1), QY = function(YY) {
        const rY = new Map;
        for (const DY of YY) {
          const YY = DY.rejectionPolicyId,
            FY = rY.get(YY);
          FY ? FY.push(DY) : rY.set(YY, [DY])
        }
        return rY
      }(rY);
      return (0, VY.jsxs)("div", {
        className: "ThumbnailRejectionNotice",
        children: [(0, VY.jsxs)("div", {
          className: "ThumbnailRejectionNoticeTitle",
          children: [(0, VY.jsx)(vY.e, {
            name: "triangle-exclamation"
          }), " ", aY("thumbnail:thumbnailsRejected"), " ", (0, VY.jsx)(vY.e, {
            name: "triangle-exclamation"
          })]
        }), (0, VY.jsx)("div", {
          className: "ThumbnailRejectionNoticeSubtitle",
          children: aY("thumbnail:thumbnailsRejectedDescription")
        }), (0, VY.jsx)("div", {
          className: "ThumbnailRejectionNoticeList",
          children: [...QY.entries()].map((YY => {
            let [rY, DY] = YY;
            const FY = pY[rY];
            return (0, VY.jsxs)("div", {
              className: "ThumbnailRejectionNoticeGroup",
              children: [(0, VY.jsx)("div", {
                className: "ThumbnailRejectionNoticeItems",
                children: DY.map((YY => (0, VY.jsxs)("div", {
                  className: "ThumbnailRejectionNoticeItem",
                  children: [(0, VY.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemIcon",
                    children: (0, VY.jsx)(vY.e, {
                      name: "image-slash"
                    })
                  }), (0, VY.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemDetails",
                    children: (0, VY.jsx)("div", {
                      className: "ThumbnailRejectionNoticeItemName",
                      children: YY.name
                    })
                  })]
                }, YY.id)))
              }), (0, VY.jsxs)("div", {
                className: "ThumbnailRejectionNoticeGroupReason",
                children: [aY("thumbnail:rejectionReason"), " ", FY ? aY(FY.reason) : rY]
              }), FY && (0, VY.jsx)("ul", {
                className: "ThumbnailRejectionNoticeGroupTips",
                children: FY.tips.map((YY => (0, VY.jsx)("li", {
                  children: aY(YY)
                }, YY)))
              })]
            }, rY)
          }))
        }), (0, VY.jsxs)("label", {
          className: "ThumbnailRejectionNoticeCheckbox",
          children: [(0, VY.jsx)(BY.d, {
            checked: uY,
            onChange: YY => sY(YY.target.checked),
            disabled: iY
          }), (0, VY.jsx)("span", {
            children: aY("thumbnail:haveReadRejectionReasons")
          })]
        }), (0, VY.jsx)(IY.n, {
          onClick: async function() {
            yY(!0);
            const YY = await Promise.allSettled(rY.map((YY => cY.e.deleteSchematicThumbnail(DY, YY.id))));
            if (!AY.current) return;
            const FY = YY.filter((YY => "rejected" === YY.status));
            FY.length > 0 && console.error("Some rejected thumbnails failed to delete:", FY), RY()
          },
          disabled: !uY || iY,
          className: "ThumbnailRejectionNoticeAcceptButton",
          children: iY ? (0, VY.jsx)(gY.c, {}) : aY("general:accept")
        })]
      })
    }

    function xY(YY) {
      let {
        thumbnailId: rY,
        thumbnailName: DY,
        onClose: FY
      } = YY;
      const {
        t: AY
      } = (0, OY.C)();
      return (0, VY.jsxs)("div", {
        className: "ThumbnailDeleteConfirm",
        children: [(0, VY.jsx)("div", {
          className: "ThumbnailDeleteConfirmTitle",
          children: AY("thumbnail:deleteThumbnail")
        }), (0, VY.jsxs)("div", {
          className: "ThumbnailDeleteConfirmImageContainer",
          children: [(0, VY.jsx)("img", {
            className: "ThumbnailDeleteConfirmImage",
            src: `${qY.clientSideServerUrls.s3Url}/customThumbnails/${rY}.jpg`,
            alt: "Thumbnail to delete"
          }), (0, VY.jsx)("div", {
            className: "ThumbnailGridItemLabel",
            children: DY
          })]
        }), (0, VY.jsx)("div", {
          className: "ThumbnailDeleteConfirmSubtitle",
          children: AY("thumbnail:deleteThumbnailConfirmation")
        }), (0, VY.jsxs)("div", {
          className: "ThumbnailDeleteConfirmButtons",
          children: [(0, VY.jsxs)(IY.D, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => FY(!0),
            children: [(0, VY.jsx)(vY.e, {
              name: "trash-can"
            }), " ", AY("general:delete")]
          }), (0, VY.jsx)(IY.j, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => FY(!1),
            children: AY("general:cancel")
          })]
        })]
      })
    }
    var nY = DY(2755),
      PY = DY(4569),
      UY = DY(4578),
      LY = DY(4615);

    function tY(YY) {
      let {
        schematicData: rY,
        setTexturePack: DY,
        initializeTexturePack: AY,
        publishFormEnabled: IY
      } = YY;
      const {
        t: RY
      } = (0, OY.C)(), [gY, aY] = (0, FY.useState)(null), [vY, uY] = (0, FY.useState)(null), [sY, yY] = (0, FY.useState)(!1), QY = (0, KY.b)(), oY = IY && !sY, WY = rY.customTexturePackKey;

      function EY(YY) {
        var rY;
        aY(YY.metaData.id), uY(null !== (rY = YY.metaData.fromFolderName) && void 0 !== rY ? rY : null), (YY.metaData.id !== nY.o.CUSTOM || YY.metaData.fromFolderName) && DY(YY)
      }
      return (0, FY.useEffect)((() => {
        WY && (yY(!0), (0, PY.d)(WY).then((YY => {
          var rY;
          QY.current && (YY ? (aY(YY.metaData.id), uY(null !== (rY = YY.metaData.fromFolderName) && void 0 !== rY ? rY : null), AY(YY)) : console.error(`No texture pack at ${WY}`))
        })).catch((YY => {
          console.error("Error fetching texture pack: ", YY)
        })).finally((() => {
          yY(!1)
        })))
      }), [WY, AY, QY]), (0, VY.jsxs)("div", {
        className: "BloxdForm TexturePackSection",
        children: [(0, VY.jsx)("div", {
          className: "SectionTitle",
          children: RY("customTexturePack:customTexturePack")
        }), (0, VY.jsxs)("div", {
          className: "TexturePackList",
          children: [(0, VY.jsx)("div", {
            className: iY()("TexturePack", {
              Selected: null === gY && !sY,
              Disabled: !oY
            }),
            onClick: () => {
              oY && (aY(null), DY(null), uY(null))
            },
            children: (0, VY.jsx)("div", {
              className: "TexturePackName",
              children: "No Override"
            })
          }), Object.values(nY.o).map((YY => (0, VY.jsx)(UY.e, {
            id: YY,
            isSelected: YY === gY,
            setSelected: EY,
            disabled: !oY
          }, YY)))]
        }), gY === nY.o.CUSTOM && (0, VY.jsx)(LY.e, {
          folderName: vY,
          onTexturePackUpdated: EY,
          disabled: !oY,
          maxFileSizeMb: 25,
          packOwner: "customGame"
        })]
      })
    }
    var Yr = DY(4629);

    function rr(YY) {
      var rY;
      let {
        gameCategory: DY,
        setGameCategory: FY,
        disabled: AY
      } = YY;
      const RY = null !== (rY = (0, yY.jb)(DY)) && void 0 !== rY ? rY : "other";
      return (0, VY.jsxs)("div", {
        className: "GameCategoryPicker",
        children: [(0, VY.jsx)(WY.f, {
          label: "worldBuilder:gameCategoryGroup",
          className: "GameCategoryGroup",
          disabled: AY,
          children: (0, VY.jsx)(EY.b, {
            options: yY._.map((YY => ({
              value: YY,
              label: yY.Y[YY]
            }))),
            value: RY,
            onChange: YY => {
              YY.value !== RY && FY(yY.U[YY.value][0])
            }
          })
        }), (0, VY.jsx)(WY.f, {
          label: "worldBuilder:gameCategory",
          className: "GameCategory",
          disabled: AY,
          children: (0, VY.jsx)("div", {
            className: "GameCategoryOptions",
            children: yY.U[RY].map((YY => (0, VY.jsx)(IY.J, {
              active: YY === DY,
              onClick: () => {
                FY(YY)
              },
              children: (0, yY.fb)(YY)
            }, YY)))
          })
        })]
      })
    }

    function Dr(YY) {
      let {
        editor: rY,
        onClose: DY
      } = YY;
      const {
        t: FY
      } = (0, OY.C)(), {
        schematicData: AY,
        updateSchematicData: IY,
        publishFormEnabled: gY,
        formEnabled: aY
      } = rY;
      return (0, VY.jsxs)(VY.Fragment, {
        children: [(0, VY.jsxs)(SY, {
          icon: "pen-to-square",
          title: FY("worldBuilder:basicsSection"),
          disabled: !aY,
          children: [(0, VY.jsx)(lY, {
            label: FY("general:name"),
            caption: FY("worldBuilder:schematicNameTagsHint"),
            children: (0, VY.jsx)(RY.d, {
              className: "SchematicPageName",
              defaultValue: AY.name,
              onValueChange: YY => IY("name", YY),
              placeholderText: FY("worldBuilder:schematicNamePlaceholder"),
              maxLength: uY.sb
            })
          }), (0, VY.jsx)(lY, {
            label: FY("general:description"),
            children: (0, VY.jsx)(RY.d, {
              className: "SchematicPageDescription",
              useTextarea: !0,
              defaultValue: AY.description,
              onValueChange: YY => IY("description", YY),
              placeholderText: FY("worldBuilder:schematicDescriptionPlaceholder"),
              maxLength: uY.qb
            })
          }), (0, VY.jsx)(rr, {
            gameCategory: AY.gameCategory,
            setGameCategory: YY => IY("gameCategory", YY),
            disabled: !gY
          }), !0 === AY.gamePublished && (0, VY.jsx)(kY, {
            schematicData: AY,
            updateSchematicData: IY,
            publishFormEnabled: gY,
            onClose: function() {
              null === DY || void 0 === DY || DY()
            }
          })]
        }), (0, VY.jsx)(eY, {
          schematicData: AY,
          updateSchematicData: IY,
          publishFormEnabled: gY,
          formEnabled: aY
        }), !0 === AY.gamePublished && (0, VY.jsx)(SY, {
          icon: "palette",
          title: FY("worldBuilder:texturePackSection"),
          disabled: !aY,
          children: (0, VY.jsx)(tY, {
            schematicData: AY,
            setTexturePack: rY.setTexturePack,
            initializeTexturePack: rY.initializeTexturePack,
            publishFormEnabled: gY
          })
        })]
      })
    }

    function Fr(YY) {
      let {
        editor: rY
      } = YY;
      const {
        t: DY
      } = (0, OY.C)(), {
        schematicData: FY,
        formEnabled: AY,
        hasUnsavedChanges: RY
      } = rY, uY = AY && RY;
      return (0, VY.jsxs)("footer", {
        className: "SchematicPageFooter",
        children: [AY && RY && (0, VY.jsxs)("div", {
          className: "SchematicPageFooterStatus",
          children: [(0, VY.jsx)("span", {
            className: "SchematicPageFooterStatusDot"
          }), DY("worldBuilder:unsavedChanges")]
        }), (0, VY.jsx)(aY.g, {
          tooltipInner: (0, VY.jsx)("div", {
            className: "SaveButtonTooltip",
            children: DY(AY && !RY ? "worldBuilder:saveChangesNoneDescription" : "worldBuilder:saveChangesDescription")
          }),
          children: (0, VY.jsxs)(IY.f, {
            className: "SaveChangesButton",
            onClick: () => rY.saveSchematic(FY.gamePublished),
            disabled: !uY,
            children: [(0, VY.jsxs)("span", {
              className: AY ? "" : "SaveChangesButtonBodyHidden",
              children: [(0, VY.jsx)(vY.e, {
                name: "wrench"
              }), " ", DY("worldBuilder:saveChanges")]
            }), !AY && (0, VY.jsx)(gY.c, {})]
          })
        })]
      })
    }

    function Ar(YY) {
      let {
        schematic: rY,
        onSchematicUpdate: DY,
        onClose: AY,
        inSourceWorld: RY
      } = YY;
      const {
        t: gY
      } = (0, OY.C)();

      function aY() {
        null === AY || void 0 === AY || AY()
      }
      const vY = (0, Yr.d)(rY, {
        onNavigateAway: aY,
        inSourceWorld: RY
      });
      return (0, FY.useEffect)((() => {
        null === DY || void 0 === DY || DY(vY.schematicData)
      }), [vY.schematicData, DY]), (0, VY.jsxs)("div", {
        className: "SchematicPage SchematicPagePopupVariant",
        children: [(0, VY.jsxs)("div", {
          className: "SchematicPageBody",
          children: [(0, VY.jsx)(IY.b, {
            onClick: aY,
            children: gY("worldBuilder:back")
          }), (0, VY.jsx)(SY, {
            icon: "rocket-launch",
            title: gY("worldBuilder:actionsSection"),
            disabled: !vY.formEnabled,
            children: (0, VY.jsx)(NY.c, {
              editor: vY
            })
          }), (0, VY.jsx)(Dr, {
            editor: vY,
            onClose: aY
          })]
        }), (0, VY.jsx)(Fr, {
          editor: vY
        })]
      })
    }

    function Ir(YY) {
      let {
        schematic: rY,
        onSchematicUpdate: DY,
        onClose: FY,
        inSourceWorld: IY
      } = YY;
      AY.NotificationProvider.showCustomPopup({
        body: YY => (0, VY.jsx)(Ar, {
          schematic: rY,
          onSchematicUpdate: DY,
          onClose: YY,
          inSourceWorld: IY
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: FY,
        unlockPointerKey: "schematicPagePopup"
      })
    }
  },
  4534: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => uY
    });
    var FY = DY(1092),
      AY = DY.n(FY),
      IY = DY(1211),
      RY = DY(1098),
      OY = DY(1437),
      gY = DY(1354),
      aY = DY(1337),
      vY = DY(1125);

    function uY(YY) {
      let {
        editor: rY,
        className: DY
      } = YY;
      const {
        t: FY
      } = (0, IY.C)(), {
        schematicData: uY,
        formEnabled: sY,
        publishFormEnabled: iY
      } = rY, yY = !sY || !iY;
      return (0, vY.jsxs)("div", {
        className: AY()("PublishButtonContainer", DY),
        children: [rY.canEditSourceWorld && (0, vY.jsxs)(OY.f, {
          onClick: rY.editSourceWorld,
          disabled: yY,
          children: [(0, vY.jsx)(RY.e, {
            name: "edit"
          }), " ", FY("worldBuilder:editSourceWorld")]
        }), !uY.gamePublished && (0, vY.jsx)(gY.g, {
          tooltipInner: (0, vY.jsx)("div", {
            className: "PublishButtonTooltip",
            children: FY("worldBuilder:publishAsGameDescription")
          }),
          children: (0, vY.jsxs)(OY.n, {
            onClick: () => rY.saveSchematic(!0),
            disabled: yY,
            children: [(0, vY.jsx)(RY.e, {
              name: "rocket-launch"
            }), " ", FY("worldBuilder:publishAsGame"), " ", (0, vY.jsx)(RY.e, {
              name: "info-circle"
            })]
          })
        }), !0 === uY.gamePublished && (0, vY.jsxs)(vY.Fragment, {
          children: [(0, vY.jsx)(gY.g, {
            tooltipInner: (0, vY.jsx)("div", {
              className: "PublishButtonTooltip",
              children: FY("worldBuilder:unpublishAsGameDescription")
            }),
            children: (0, vY.jsxs)(OY.D, {
              onClick: rY.unpublishSchematic,
              disabled: yY,
              children: [(0, vY.jsx)(RY.e, {
                name: "rocket-launch"
              }), " ", FY("worldBuilder:unpublishAsGame"), " ", (0, vY.jsx)(RY.e, {
                name: "info-circle"
              })]
            })
          }), (0, vY.jsxs)(OY.f, {
            onClick: rY.playGame,
            disabled: yY,
            children: [(0, vY.jsx)(RY.e, {
              name: "joystick"
            }), " ", FY("general:playGame")]
          })]
        }), !sY && (0, vY.jsx)(aY.c, {
          loaderType: "Secondary"
        })]
      })
    }
  },
  4569: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => AY
    });
    var FY = DY(1222);
    async function AY(YY) {
      const rY = await fetch(`${FY.clientSideServerUrls.s3Url}/${YY}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === rY.status || 403 === rY.status) return null;
      if (!rY.ok) throw new Error(`Failed to download the texture pack (${rY.status})`);
      return await rY.json()
    }
  },
  4629: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => oY
    });
    var FY = DY(61),
      AY = DY(1330),
      IY = DY(1057),
      RY = DY(183),
      OY = DY(1526),
      gY = DY(19),
      aY = DY(1808),
      vY = DY(1471),
      uY = DY(4147),
      sY = DY(1346),
      iY = DY(1152),
      yY = DY(1488);

    function QY(YY, rY) {
      return {
        schematicId: YY.schematicId,
        name: YY.name,
        description: YY.description,
        gamePublished: rY,
        gameCategory: YY.gameCategory,
        defaultGamemode: YY.defaultGamemode,
        voidDeathHeight: YY.voidDeathHeight,
        disableKeepInventory: YY.disableKeepInventory,
        disableTpRequests: YY.disableTpRequests,
        disableLobbySpawn: YY.disableLobbySpawn,
        disableMobs: YY.disableMobs,
        disableSpawnProtection: YY.disableSpawnProtection,
        disableFallDamage: YY.disableFallDamage,
        worldBorder: YY.worldBorder,
        hideLobbyCode: YY.hideLobbyCode,
        enableSmpMarketplace: YY.enableSmpMarketplace,
        enableSurvivalGuns: YY.enableSurvivalGuns,
        enableSpawnReset: YY.enableSpawnReset,
        enableDayNight: YY.enableDayNight,
        persistWorld: YY.persistWorld,
        persistInventory: YY.persistInventory
      }
    }

    function oY(YY) {
      let {
        onNavigateAway: rY,
        inSourceWorld: DY = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const {
        userContext: oY
      } = (0, iY.d)(), WY = (0, yY.useNavigatePreserveSearch)(), [EY, mY] = (0, FY.useState)({
        ...YY
      }), [VY, SY] = (0, FY.useState)("Enter"), [lY, TY] = (0, FY.useState)(void 0), eY = (0, FY.useRef)(QY(YY, YY.gamePublished)), NY = (0, FY.useRef)(void 0), BY = "Enter" === VY, cY = oY.playerHasRank("developer") || oY.playerHasRank("admin") || "Enter" === VY && !1 !== EY.schematicContainsSpawnBlock, KY = void 0 !== lY && lY !== NY.current || JSON.stringify(QY(EY, EY.gamePublished)) !== JSON.stringify(eY.current);

      function HY(YY, rY) {
        mY((DY => ({
          ...DY,
          [YY]: rY
        })))
      }
      const zY = (0, FY.useCallback)((YY => {
        NY.current = YY, TY(YY)
      }), []);

      function ZY(YY) {
        SY("Loading");
        const rY = QY(EY, YY),
          DY = lY !== NY.current ? lY : void 0;
        vY.e.updateSchematic(oY, rY, DY).then((DY => {
          let {
            customTexturePackKey: FY
          } = DY;
          SY("Success"), HY("customTexturePackKey", FY), eY.current = rY, NY.current = void 0, TY(void 0), setTimeout((() => {
            HY("gamePublished", YY), SY("Enter")
          }), 1e3)
        })).catch((YY => {
          var rY;
          (console.error("Failed to save schematic:", YY), SY("Error"), YY instanceof RY.e && YY.errorMessageForUser) && sY.NotificationProvider.showAlertPopup({
            title: "worldBuilder:changesNotSaved",
            subtitle: YY.errorMessageForUser,
            textOpts: {
              subtitle: null !== (rY = YY.errorMessageTranslationParams) && void 0 !== rY ? rY : void 0
            },
            confirmText: "general:ok"
          });
          setTimeout((() => {
            SY("Enter")
          }), 1e3)
        }))
      }
      return {
        schematicData: EY,
        updateSchematicData: HY,
        setTexturePack: TY,
        initializeTexturePack: zY,
        updateState: VY,
        formEnabled: BY,
        publishFormEnabled: cY,
        hasUnsavedChanges: KY,
        canEditSourceWorld: !DY,
        saveSchematic: ZY,
        unpublishSchematic: function() {
          sY.NotificationProvider.showPromptPopup({
            icon: "rocket-launch",
            title: "worldBuilder:unpublishAsGameConfirmTitle",
            subtitle: "worldBuilder:unpublishAsGameConfirmSubtitle",
            confirmText: "worldBuilder:unpublishAsGame",
            cancelText: "general:cancel",
            unlockPointerKey: "unpublishGamePrompt"
          }).getResult().then((YY => {
            !0 === YY && ZY(!1)
          }))
        },
        editSourceWorld: function() {
          SY("Loading"), uY.e.getSourceWorld(EY.schematicId).then((YY => {
            aY.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, gY.g)("other"), WY((0, AY.d)("classic", YY)), null === rY || void 0 === rY || rY()
          })).catch((YY => {
            console.error("Failed to get source world:", YY), SY("Error"), setTimeout((() => {
              SY("Enter")
            }), 1e3)
          }))
        },
        playGame: function() {
          aY.gameBridge.send("leaveGame", {
            reloadPath: "/"
          }), WY((0, OY.t)((0, IY.y)(EY.schematicId), EY)), null === rY || void 0 === rY || rY()
        }
      }
    }
  },
  4523: () => {}
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);