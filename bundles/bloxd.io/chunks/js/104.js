export const id = 104;
export const ids = [104];
export const modules = {
  4414: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => DT,
      h: () => ST,
      k: () => LT
    });
    IT(4418);
    var iT = IT(1171),
      zT = IT(1042),
      kT = IT.n(zT),
      WT = IT(1337),
      XT = (IT(46), IT(3899)),
      BT = IT(1055),
      FT = IT(1083);

    function ST(TT) {
      let {
        children: oT,
        label: IT,
        className: zT,
        circleInfoText: XT,
        disabled: ST,
        onLabelClick: DT
      } = TT;
      const {
        t: LT
      } = (0, iT.t)(), xT = (0, FT.jsxs)("div", {
        className: kT()("Label", {
          ClickableLabel: void 0 !== DT
        }),
        onClick: DT,
        children: [LT(IT), XT && (0, FT.jsx)(BT.e, {
          name: "circle-info"
        })]
      });
      return (0, FT.jsxs)("div", {
        className: kT()("LabeledInput", {
          [zT]: zT,
          DisabledLabelInput: ST
        }),
        children: [XT && (0, FT.jsx)(WT.e, {
          tooltipInner: (0, FT.jsx)("div", {
            className: "LabeledInputTooltip",
            children: LT(XT)
          }),
          children: xT
        }), !XT && xT, oT]
      })
    }

    function DT(TT) {
      let {
        checked: oT,
        setChecked: IT
      } = TT;
      return (0, FT.jsx)("div", {
        className: "OtherInput ClickableOtherInput",
        "data-pad-focusable": !0,
        onClick: TT => {
          IT(!oT)
        },
        children: (0, FT.jsx)(XT.d, {
          checked: oT,
          onChange: TT => {
            IT(TT.target.checked)
          },
          disabled: !1
        })
      })
    }

    function LT(TT) {
      let {
        checked: oT,
        setChecked: IT,
        disabled: iT
      } = TT;
      return (0, FT.jsx)("div", {
        className: kT()("SwitchContainer", {
          SwitchContainerDisabled: iT
        }),
        onClick: () => {
          iT || IT(!oT)
        },
        children: (0, FT.jsx)(XT.d, {
          className: "SwitchCheckbox",
          checked: oT,
          onChange: TT => {
            IT(TT.target.checked)
          },
          disabled: !!iT
        })
      })
    }
  },
  4422: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => FT
    });
    var iT = IT(1042),
      zT = IT.n(iT),
      kT = IT(4137),
      WT = IT(1171),
      XT = IT(1083);
    const BT = [...kT.i, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function FT(TT) {
      const {
        disabled: oT,
        hideWrapper: IT
      } = TT, {
        t: iT
      } = (0, WT.t)(), FT = TT.advancedMode ? BT.map((oT => [oT, TT.callbacks[oT]])) : kT.i.map((oT => [oT, TT.callbacks[oT]])), DT = (0, XT.jsx)("div", {
        className: zT()("PluginsGrid", {
          SectionBody: !IT
        }),
        children: FT.map((TT => {
          let [IT, iT] = TT;
          return (0, XT.jsx)(ST, {
            plugin: IT,
            callbacks: iT,
            disabled: oT
          }, IT)
        }))
      });
      return IT ? DT : (0, XT.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, XT.jsx)("div", {
          className: "SectionTitle",
          children: iT("worldBuilder:pluginsSection")
        }), DT]
      })
    }

    function ST(TT) {
      let {
        plugin: oT,
        callbacks: {
          isEnabled: IT,
          Fv: iT
        },
        disabled: kT
      } = TT;
      const {
        t: BT
      } = (0, WT.t)(), FT = IT();
      return (0, XT.jsxs)("div", {
        className: zT()("PluginCard", {
          PluginCardEnabled: FT,
          PluginCardDisabledForm: kT
        }),
        "data-pad-focusable": !0,
        "aria-disabled": kT || void 0,
        onClick: () => {
          kT || iT(!FT)
        },
        children: [(0, XT.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, XT.jsx)("img", {
            src: `/textures/games/classic/customGames/${oT}.png`,
            alt: oT
          })
        }), (0, XT.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, XT.jsx)("div", {
            className: "PluginCardTitle",
            children: BT(DT[oT])
          }), (0, XT.jsx)("div", {
            className: "PluginCardDescription",
            children: BT(LT[oT])
          })]
        }), (0, XT.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: BT(FT ? "general:on" : "general:off")
        })]
      })
    }
    const DT = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      LT = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  4410: (TT, oT, IT) => {
    IT.d(oT, {
      f: () => zo,
      d: () => io,
      e: () => Io,
      g: () => ko
    });
    var iT = IT(46),
      zT = IT(1325),
      kT = IT(1408),
      WT = IT(1624),
      XT = IT(1171),
      BT = IT(1310),
      FT = IT(1337),
      ST = IT(1055),
      DT = IT(1193),
      LT = IT(1042),
      xT = IT.n(LT),
      cT = IT(306),
      KT = IT(4137),
      MT = IT(1214),
      rT = IT(4414),
      AT = IT(2695),
      gT = IT(4422),
      hT = IT(1083);

    function wT(TT) {
      let {
        icon: oT,
        title: IT,
        disabled: iT,
        children: zT
      } = TT;
      return (0, hT.jsxs)("div", {
        className: xT()("ManageCard", {
          ManageCardDisabled: iT
        }),
        children: [(0, hT.jsxs)("div", {
          className: "ManageCardHead",
          children: [(0, hT.jsx)("div", {
            className: "ManageCardIcon",
            children: (0, hT.jsx)(ST.e, {
              name: oT
            })
          }), (0, hT.jsx)("div", {
            children: (0, hT.jsx)("h2", {
              className: "ManageCardTitle",
              children: IT
            })
          })]
        }), (0, hT.jsxs)("div", {
          className: "ManageCardBody",
          children: [zT, iT && (0, hT.jsx)("div", {
            className: "ManageCardDisabledOverlay"
          })]
        })]
      })
    }

    function mT(TT) {
      let {
        label: oT,
        caption: IT,
        children: iT
      } = TT;
      return (0, hT.jsxs)("div", {
        className: "ManageStackedField",
        children: [(0, hT.jsx)("div", {
          className: "ManageStackedFieldLabel",
          children: oT
        }), iT, IT && (0, hT.jsx)("div", {
          className: "ManageStackedFieldCaption",
          children: IT
        })]
      })
    }

    function eT(TT) {
      let {
        label: oT,
        caption: IT,
        disabled: iT,
        children: zT
      } = TT;
      return (0, hT.jsxs)("div", {
        className: xT()("ManageField", {
          ManageFieldDisabled: iT
        }),
        children: [(0, hT.jsxs)("div", {
          className: "ManageFieldText",
          children: [(0, hT.jsx)("div", {
            className: "ManageFieldLabel",
            children: oT
          }), (0, hT.jsx)("div", {
            className: "ManageFieldCaption",
            children: IT
          })]
        }), (0, hT.jsx)("div", {
          className: "ManageFieldControl",
          children: zT
        })]
      })
    }

    function RT(TT) {
      var oT, IT;
      let {
        schematicData: iT,
        updateSchematicData: zT,
        publishFormEnabled: kT,
        formEnabled: WT
      } = TT;
      const {
        t: BT
      } = (0, XT.t)(), FT = !kT, ST = {
        tpRequests: {
          isEnabled: () => !iT.disableTpRequests,
          Fv: TT => zT("disableTpRequests", !TT)
        },
        spawnProtection: {
          isEnabled: () => !iT.disableSpawnProtection,
          Fv: TT => zT("disableSpawnProtection", !TT)
        },
        spawnReset: {
          isEnabled: () => !!iT.enableSpawnReset,
          Fv: TT => zT("enableSpawnReset", TT)
        },
        smpMarketplace: {
          isEnabled: () => !!iT.enableSmpMarketplace,
          Fv: TT => zT("enableSmpMarketplace", TT)
        },
        survivalGuns: {
          isEnabled: () => !!iT.enableSurvivalGuns,
          Fv: TT => zT("enableSurvivalGuns", TT)
        },
        fallDamage: {
          isEnabled: () => !iT.disableFallDamage,
          Fv: TT => zT("disableFallDamage", !TT)
        },
        dayNight: {
          isEnabled: () => !!iT.enableDayNight,
          Fv: TT => zT("enableDayNight", TT)
        }
      };
      return (0, hT.jsxs)(hT.Fragment, {
        children: [!1 === iT.schematicContainsSpawnBlock && (0, hT.jsx)("div", {
          className: "ManageWarningBanner",
          children: BT("worldBuilder:mustContainSpawnBlock")
        }), (0, hT.jsxs)("div", {
          className: "ManageSettingsGrid",
          children: [(0, hT.jsxs)(wT, {
            icon: "globe",
            title: BT("worldBuilder:worldRulesSection"),
            disabled: !WT,
            children: [(0, hT.jsx)(eT, {
              label: BT("classic:defaultGamemode"),
              caption: BT("classic:defaultGamemodeDescription"),
              disabled: FT,
              children: (0, hT.jsx)(AT.d, {
                controlClassName: "ManageDropdown",
                options: KT.z.map((TT => ({
                  value: TT,
                  label: cT.t[TT]
                }))),
                value: iT.defaultGamemode,
                onChange: TT => zT("defaultGamemode", TT.value)
              })
            }), (0, hT.jsx)(eT, {
              label: BT("classic:voidDeathHeight"),
              caption: BT("classic:voidDeathHeightDescription"),
              disabled: FT,
              children: (0, hT.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, hT.jsx)("input", {
                  type: "number",
                  max: MT.B,
                  value: null !== (oT = iT.voidDeathHeight) && void 0 !== oT ? oT : "",
                  onChange: TT => {
                    const oT = parseInt(TT.target.value);
                    zT("voidDeathHeight", oT)
                  }
                }), (0, hT.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: BT("worldBuilder:blocksUnit")
                })]
              })
            }), (0, hT.jsx)(eT, {
              label: BT("classic:worldBorder"),
              caption: BT("classic:worldBorderDescription"),
              disabled: FT,
              children: (0, hT.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, hT.jsx)("input", {
                  type: "number",
                  min: MT.I,
                  max: MT.D,
                  placeholder: BT("worldBuilder:noWorldBorderLimit"),
                  value: null !== (IT = iT.worldBorder) && void 0 !== IT ? IT : "",
                  onChange: TT => {
                    const oT = parseInt(TT.target.value);
                    zT("worldBorder", isNaN(oT) ? null : oT)
                  }
                }), (0, hT.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: BT("worldBuilder:blocksUnit")
                })]
              })
            }), (0, hT.jsx)(eT, {
              label: BT("classic:disableMobs"),
              caption: BT("classic:disableMobsDescription"),
              disabled: FT,
              children: (0, hT.jsx)(rT.k, {
                checked: iT.disableMobs,
                setChecked: TT => zT("disableMobs", TT),
                disabled: FT
              })
            })]
          }), (0, hT.jsxs)(wT, {
            icon: "user-group",
            title: BT("worldBuilder:playerAndLobbySection"),
            disabled: !WT,
            children: [(0, hT.jsx)(eT, {
              label: BT("classic:disableKeepInventory"),
              caption: BT("classic:disableKeepInventoryDescription"),
              disabled: FT,
              children: (0, hT.jsx)(rT.k, {
                checked: iT.disableKeepInventory,
                setChecked: TT => zT("disableKeepInventory", TT),
                disabled: FT
              })
            }), (0, hT.jsx)(eT, {
              label: BT("classic:persistInventory"),
              caption: BT("classic:persistInventoryDescription"),
              disabled: FT,
              children: (0, hT.jsx)(AT.d, {
                controlClassName: "ManageDropdown",
                options: KT.j.map((TT => ({
                  value: TT,
                  label: cT.h[TT]
                }))),
                value: iT.persistInventory,
                onChange: TT => zT("persistInventory", TT.value)
              })
            }), (0, hT.jsx)(eT, {
              label: BT("classic:persistWorld"),
              caption: BT("classic:persistWorldDescription"),
              disabled: FT,
              children: (0, hT.jsx)(rT.k, {
                checked: iT.persistWorld,
                setChecked: TT => zT("persistWorld", TT),
                disabled: FT
              })
            }), (0, hT.jsx)(eT, {
              label: BT("classic:disableLobbySpawn"),
              caption: BT("classic:disableLobbySpawnDescription"),
              disabled: FT,
              children: (0, hT.jsx)(rT.k, {
                checked: iT.disableLobbySpawn,
                setChecked: TT => zT("disableLobbySpawn", TT),
                disabled: FT
              })
            }), (0, hT.jsx)(eT, {
              label: BT("classic:hideLobbyCode"),
              caption: BT("classic:hideLobbyCodeDescription"),
              disabled: FT,
              children: (0, hT.jsx)(rT.k, {
                checked: iT.hideLobbyCode,
                setChecked: TT => zT("hideLobbyCode", TT),
                disabled: FT
              })
            })]
          })]
        }), (0, hT.jsx)(wT, {
          icon: "layer-group",
          title: BT("worldBuilder:pluginsSection"),
          disabled: !WT,
          children: (0, hT.jsx)(gT.e, {
            callbacks: ST,
            disabled: FT,
            advancedMode: !0,
            hideWrapper: !0
          })
        })]
      })
    }
    var uT = IT(4430),
      vT = IT(3899),
      ET = IT(1451),
      fT = IT(3049),
      CT = IT(1110),
      jT = IT(4398),
      JT = IT(4439),
      UT = IT(1412);
    const aT = 50,
      YT = .3;
    async function QT(TT) {
      const oT = await
      function(TT) {
        return new Promise(((oT, IT) => {
          const iT = new FileReader;
          iT.onload = () => oT(iT.result), iT.onerror = IT, iT.readAsDataURL(TT)
        }))
      }(TT), IT = await
      function(TT) {
        return new Promise(((oT, IT) => {
          const iT = new Image;
          iT.onload = () => oT(iT), iT.onerror = () => IT(new Error("Failed to load image")), iT.src = TT
        }))
      }(oT);
      if (IT.naturalHeight > IT.naturalWidth) throw new OT;
      const iT = 1024 * aT,
        {
          dataUrl: zT,
          finalQuality: kT
        } = function(TT, oT) {
          const IT = document.createElement("canvas");
          IT.width = TT.naturalWidth, IT.height = TT.naturalHeight, IT.getContext("2d").drawImage(TT, 0, 0);
          let iT = .92,
            zT = IT.toDataURL("image/jpeg", iT);
          for (; .75 * zT.length > oT && iT > .05;) iT -= .05, zT = IT.toDataURL("image/jpeg", iT);
          return {
            dataUrl: zT,
            finalQuality: iT
          }
        }(IT, iT);
      if (Math.ceil(.75 * zT.length) > iT) throw new HT;
      return {
        base64Jpg: zT,
        heavilyCompressed: kT < YT
      }
    }
    class OT extends Error {}
    class HT extends Error {}
    var nT = function(TT) {
      return TT[TT.NOT_LOGGED_IN = 0] = "NOT_LOGGED_IN", TT[TT.THUMBNAIL_LIMIT_REACHED = 1] = "THUMBNAIL_LIMIT_REACHED", TT
    }(nT || {});

    function qT(TT) {
      var oT;
      let {
        schematicId: IT,
        hasReadUploadPolicy: zT,
        onPolicyValidationError: BT,
        onThumbnailReady: FT
      } = TT;
      const {
        t: LT
      } = (0, XT.t)(), [cT, KT] = (0, iT.useState)(null), [MT, rT] = (0, iT.useState)(""), [AT, gT] = (0, iT.useState)(""), [wT, mT] = (0, iT.useState)(!0), [eT, RT] = (0, iT.useState)(!1), uT = (0, iT.useRef)(!1), [vT, ET] = (0, iT.useState)(null), [fT, CT] = (0, iT.useState)(!1), [jT, UT] = (0, iT.useState)(!1), aT = (0, iT.useRef)(0), {
        getRootProps: YT,
        getInputProps: nT,
        isDragActive: qT
      } = (0, JT.e)({
        accept: {
          "image/*": [".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp"]
        },
        multiple: !1,
        onDrop: async TT => {
          if (0 === TT.length) return;
          const oT = TT[0],
            IT = ++aT.current;
          ET(null), CT(!1), KT(null), rT(oT.name);
          try {
            const TT = await QT(oT);
            if (IT !== aT.current) return;
            KT(TT), CT(TT.heavilyCompressed)
          } catch (iT) {
            if (IT !== aT.current) return;
            ET(LT(iT instanceof OT ? "thumbnail:portraitImagesNotAllowed" : iT instanceof HT ? "thumbnail:couldNotCompressImage" : "thumbnail:failedToUploadImage"))
          }
        },
        useFsAccessApi: !1
      }), ZT = MT.length <= 30 ? MT : `${MT.slice(0,27)}...`, lT = null !== (oT = null === cT || void 0 === cT ? void 0 : cT.base64Jpg) && void 0 !== oT ? oT : null, sT = AT.trim(), tT = sT.length >= DT.m && sT.length <= DT.k, GT = jT && !cT && !vT, pT = jT && !tT;
      return (0, hT.jsxs)("div", {
        className: "ThumbnailUploadContainer",
        children: [(0, hT.jsxs)("div", {
          ...YT({
            className: xT()("ThumbnailUploadDropzone", {
              ActiveDrag: qT,
              ValidationError: GT
            })
          }),
          children: [(0, hT.jsx)("input", {
            ...nT()
          }), !qT && lT ? (0, hT.jsxs)(hT.Fragment, {
            children: [(0, hT.jsxs)("div", {
              className: "ThumbnailAspectPreviews",
              children: [(0, hT.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, hT.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "1:1"
                }), (0, hT.jsx)("div", {
                  className: "ThumbnailAspectFrame Square",
                  children: (0, hT.jsx)("img", {
                    src: lT,
                    alt: "1:1 preview"
                  })
                })]
              }), (0, hT.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, hT.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "16:9"
                }), (0, hT.jsx)("div", {
                  className: "ThumbnailAspectFrame Wide",
                  children: (0, hT.jsx)("img", {
                    src: lT,
                    alt: "16:9 preview"
                  })
                })]
              })]
            }), (0, hT.jsxs)("div", {
              children: [(0, hT.jsx)("div", {
                className: "ThumbnailUploadInstructions Active",
                children: ZT
              }), (0, hT.jsx)("div", {
                className: "ThumbnailUploadInstructions Preview",
                children: LT("thumbnail:preview")
              })]
            })]
          }) : (0, hT.jsxs)(hT.Fragment, {
            children: [(0, hT.jsx)("div", {
              className: "ThumbnailUploadIcon",
              children: (0, hT.jsx)(ST.e, {
                name: "image"
              })
            }), (0, hT.jsx)("div", {
              className: "ThumbnailUploadInstructions",
              children: LT("thumbnail:dragImageHere")
            })]
          })]
        }), GT && (0, hT.jsx)("div", {
          className: "ThumbnailUploadError",
          children: LT("thumbnail:imageRequired")
        }), (0, hT.jsx)(WT.e, {
          className: xT()("ThumbnailUploadNameInput", {
            ValidationError: pT
          }),
          placeholderText: LT("thumbnail:thumbnailName"),
          defaultValue: AT,
          onValueChange: TT => {
            gT(TT)
          },
          maxLength: DT.k
        }), pT && (0, hT.jsx)("div", {
          className: "ThumbnailUploadError",
          children: LT("thumbnail:nameRequired", {
            min: DT.m,
            max: DT.k
          })
        }), (0, hT.jsxs)("label", {
          className: "ThumbnailUploadCheckbox",
          children: [(0, hT.jsx)("input", {
            type: "checkbox",
            checked: wT,
            onChange: TT => {
              mT(TT.target.checked)
            }
          }), LT("thumbnail:setAsThumbnailOnceApproved")]
        }), fT && (0, hT.jsx)("div", {
          className: "ThumbnailUploadWarning",
          children: LT("thumbnail:heavyCompressionWarning")
        }), vT && (0, hT.jsx)("div", {
          className: "ThumbnailUploadError",
          children: vT
        }), (0, hT.jsx)(kT.m, {
          disabled: eT,
          className: "ThumbnailUploadButton",
          onClick: async () => {
            if (UT(!0), !uT.current && cT && tT && zT) {
              uT.current = !0, RT(!0), ET(null);
              try {
                await FT(cT.base64Jpg, sT, wT ? IT : null)
              } catch (TT) {
                ET(TT.errorMessageForUser ? LT(TT.errorMessageForUser, TT.errorMessageTranslationParams) : LT("thumbnail:failedToUploadImage"))
              } finally {
                uT.current = !1, RT(!1)
              }
            } else zT || BT()
          },
          children: LT(eT ? "thumbnail:processing" : "thumbnail:uploadThumbnail")
        })]
      })
    }
    const ZT = 2e3;

    function lT(TT) {
      let {
        schematicId: oT,
        ownedThumbnailCount: IT,
        onClose: zT,
        onThumbnailReady: kT
      } = TT;
      const {
        t: WT
      } = (0, XT.t)(), {
        userContext: BT
      } = (0, CT.b)(), [FT, LT] = (0, iT.useState)(!1), [cT, KT] = (0, iT.useState)(!1), [MT, rT] = (0, iT.useState)(!1), AT = (0, iT.useRef)();
      (0, iT.useEffect)((() => () => {
        clearTimeout(AT.current)
      }), []);
      const gT = function(TT, oT) {
        const IT = [];
        return TT.isLoggedIn() || IT.push(nT.NOT_LOGGED_IN), oT >= DT.Y && IT.push(nT.THUMBNAIL_LIMIT_REACHED), IT
      }(BT, IT);
      if (gT.length > 0) {
        const TT = {
          [nT.NOT_LOGGED_IN]: {
            key: "thumbnail:mustBeLoggedInToUpload"
          },
          [nT.THUMBNAIL_LIMIT_REACHED]: {
            key: "thumbnail:thumbnailLimitReachedPleaseDelete",
            params: {
              max: DT.Y
            }
          }
        };
        return (0, hT.jsxs)("div", {
          className: "ThumbnailUploaderInner",
          children: [(0, hT.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: WT("thumbnail:cannotUploadThumbnail")
          }), gT.map(((oT, IT) => {
            const iT = TT[oT];
            return (0, hT.jsxs)("div", {
              className: "CannotUploadThumbnailItem",
              children: [(0, hT.jsx)(ST.e, {
                name: "triangle-exclamation"
              }), (0, hT.jsx)("span", {
                children: WT(iT.key, iT.params)
              })]
            }, IT)
          }))]
        })
      }
      return (0, hT.jsxs)("div", {
        className: xT()("ThumbnailUploaderInner", {
          ThumbnailUploaderSuccess: FT
        }),
        children: [FT && (0, hT.jsxs)("div", {
          className: "ThumbnailUploadSuccessOverlay",
          children: [(0, hT.jsxs)("div", {
            className: "ThumbnailUploadSuccessIcon FullyFancyText AnimFadeInScaleUp",
            children: [(0, hT.jsx)(ST.e, {
              name: "check"
            }), (0, hT.jsx)(UT.d, {})]
          }), (0, hT.jsx)("div", {
            className: "ThumbnailUploadSuccessText AnimFadeInScaleUp",
            children: WT("thumbnail:thumbnailUploaded")
          })]
        }), (0, hT.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: WT("thumbnail:uploadThumbnail")
        }), (0, hT.jsxs)("div", {
          className: "ThumbnailUploaderBody",
          children: [(0, hT.jsxs)("div", {
            className: "ThumbnailUploaderLeft",
            children: [(0, hT.jsx)("h3", {
              className: "SchematicPopupSubtitle",
              children: WT("thumbnail:chooseImage", {
                maxSizeKb: aT
              })
            }), (0, hT.jsx)(qT, {
              schematicId: oT,
              hasReadUploadPolicy: cT,
              onPolicyValidationError: () => {
                rT(!0)
              },
              onThumbnailReady: async (TT, oT, IT) => {
                await kT(TT, oT, IT), LT(!0), AT.current = setTimeout(zT, ZT)
              }
            })]
          }), (0, hT.jsxs)("div", {
            className: "ThumbnailUploadPolicy",
            children: [(0, hT.jsx)("h3", {
              className: "ThumbnailUploadPolicyTitle",
              children: WT("thumbnail:uploadPolicy")
            }), (0, hT.jsxs)("ul", {
              className: "ThumbnailUploadPolicyList",
              children: [(0, hT.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, hT.jsx)(ST.e, {
                  name: "check"
                }), (0, hT.jsx)("span", {
                  children: WT("thumbnail:policyFollowGuidelines")
                })]
              }), (0, hT.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, hT.jsx)(ST.e, {
                  name: "check"
                }), (0, hT.jsx)("span", {
                  children: WT("thumbnail:policyInGameAssets")
                })]
              }), (0, hT.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, hT.jsx)(ST.e, {
                  name: "check"
                }), (0, hT.jsx)("span", {
                  children: WT("thumbnail:policyLimitText")
                })]
              }), (0, hT.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, hT.jsx)(ST.e, {
                  name: "x"
                }), (0, hT.jsx)("span", {
                  children: WT("thumbnail:policyCopyrightContent")
                })]
              }), (0, hT.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, hT.jsx)(ST.e, {
                  name: "x"
                }), (0, hT.jsx)("span", {
                  children: WT("thumbnail:policyOutOfGameAssets")
                })]
              }), (0, hT.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, hT.jsx)(ST.e, {
                  name: "x"
                }), (0, hT.jsx)("span", {
                  children: WT("thumbnail:policyBloxdTags")
                })]
              }), (0, hT.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, hT.jsx)(ST.e, {
                  name: "x"
                }), (0, hT.jsx)("span", {
                  children: WT("thumbnail:policyMustReflectGame")
                })]
              })]
            }), (0, hT.jsxs)("label", {
              className: xT()("ThumbnailUploadCheckbox Policy", {
                ValidationError: MT && !cT
              }),
              children: [(0, hT.jsx)("input", {
                type: "checkbox",
                checked: cT,
                onChange: TT => {
                  KT(TT.target.checked)
                }
              }), WT("thumbnail:agreeToUploadPolicy")]
            }), MT && !cT && (0, hT.jsx)("div", {
              className: "ThumbnailPolicyError",
              children: WT("thumbnail:policyRequired")
            })]
          })]
        })]
      })
    }
    var sT = IT(1183);
    const tT = {
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

    function GT(TT) {
      var oT, IT;
      let {
        schematicData: WT,
        updateSchematicData: FT,
        publishFormEnabled: DT,
        onClose: LT
      } = TT;
      const {
        t: cT
      } = (0, XT.t)(), {
        userContext: KT,
        isUserContextUpdating: MT
      } = (0, CT.b)(), rT = (0, fT.c)(), [AT, gT] = (0, iT.useState)([]), [wT, mT] = (0, iT.useState)([]), [eT, RT] = (0, iT.useState)(!0), [uT, vT] = (0, iT.useState)(null !== (oT = WT.customThumbnailId) && void 0 !== oT ? oT : null), [JT, UT] = (0, iT.useState)(null), aT = (0, iT.useRef)(null !== (IT = WT.customThumbnailId) && void 0 !== IT ? IT : null), YT = (0, iT.useRef)(0), QT = (0, iT.useRef)(null), OT = (0, iT.useRef)(null), HT = (0, iT.useRef)(null), nT = (0, iT.useRef)(!1);

      function qT(TT, oT) {
        HT.current && (clearTimeout(HT.current), HT.current = null), UT(TT), null !== TT && oT && (HT.current = setTimeout((() => {
          UT(null), HT.current = null
        }), 5e3))
      }(0, iT.useEffect)((() => () => {
        clearTimeout(OT.current), clearTimeout(HT.current)
      }), []);
      const ZT = (0, iT.useCallback)((() => {
        RT(!0), ET.e.getOwnedThumbnails(KT).then((TT => {
          const oT = [],
            IT = [];
          for (const iT of TT.thumbnails) iT.rejectionPolicyId ? oT.push(iT) : IT.push(iT);
          oT.sort(((TT, oT) => TT.lastUpdatedAt - oT.lastUpdatedAt)), IT.sort(((TT, oT) => {
            const IT = TT.approved ? 1 : 0,
              iT = (oT.approved ? 1 : 0) - IT;
            return 0 !== iT ? iT : oT.lastUpdatedAt - TT.lastUpdatedAt
          })), mT(oT), gT(IT)
        })).catch((TT => {
          console.error("Failed to fetch thumbnails:", TT)
        })).finally((() => {
          RT(!1)
        }))
      }), [KT]);
      async function tT(TT, oT, IT) {
        return ET.e.uploadSchematicThumbnail(KT, TT, oT, IT).then((() => {
          qT({
            text: cT("thumbnail:uploadedAwaitingModeration"),
            type: "success"
          }, !0), ZT()
        }))
      }

      function GT() {
        YT.current = Date.now(), OT.current = null;
        const TT = QT.current;
        QT.current = null, qT({
          text: cT("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), ET.e.setSchematicThumbnail(KT, WT.schematicId, TT).then((() => {
          rT.current && (qT({
            text: cT("thumbnail:thumbnailUpdated"),
            type: "success"
          }, !0), aT.current = TT, FT("customThumbnailId", TT), FT("customThumbnailBlurhash", void 0), FT("customThumbnailVariants", void 0))
        })).catch((TT => {
          rT.current && (qT({
            text: TT.errorMessageForUser ? cT(TT.errorMessageForUser, TT.errorMessageTranslationParams) : cT("thumbnail:failedToSetThumbnail"),
            type: "error"
          }, !0), vT(aT.current))
        }))
      }

      function yT(TT) {
        vT(TT), QT.current = TT;
        const oT = Date.now() - YT.current;
        oT >= 1e3 ? GT() : (qT({
          text: cT("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), OT.current || (OT.current = setTimeout((() => {
          GT()
        }), 1e3 - oT)))
      }
      return (0, iT.useEffect)((() => {
        !1 === MT && ZT()
      }), [MT, ZT]), wT.length > 0 ? (0, hT.jsx)(pT, {
        rejectedThumbnails: wT,
        userContext: KT,
        isMountedRef: rT,
        onAcknowledged: ZT
      }) : (0, hT.jsxs)("div", {
        className: "BloxdForm ThumbnailSection",
        children: [(0, hT.jsxs)("div", {
          className: "SectionTitle",
          children: [cT("thumbnail:gameThumbnail"), JT && (0, hT.jsx)("span", {
            className: xT()("ThumbnailActionMsg", `ThumbnailActionMsg--${JT.type}`),
            children: JT.text
          })]
        }), (0, hT.jsx)("div", {
          className: "SectionBody",
          children: (0, hT.jsxs)("div", {
            className: "ThumbnailGrid",
            children: [(0, hT.jsxs)("div", {
              className: xT()("ThumbnailGridItem ThumbnailGridItemDefault", {
                ThumbnailGridItemSelected: null === uT
              }),
              onClick: () => yT(null),
              children: [(0, hT.jsx)(jT.e, {
                game: {
                  schematicId: WT.schematicId,
                  imageBlurhash: WT.imageBlurhash
                }
              }), (0, hT.jsx)("div", {
                className: "ThumbnailGridItemLabel ThumbnailDefaultLabel",
                children: cT("general:default")
              })]
            }), eT && (0, hT.jsx)(BT.d, {}), AT.map(((TT, oT) => (0, hT.jsxs)("div", {
              className: xT()("ThumbnailGridItem", {
                ThumbnailGridItemSelected: uT === TT.id,
                ThumbnailGridItemPending: !TT.approved
              }),
              onClick: () => {
                TT.approved && yT(TT.id)
              },
              children: [TT.approved && (0, hT.jsx)("img", {
                src: `${sT.clientSideServerUrls.s3Url}/customThumbnails/${TT.id}.jpg`,
                alt: "Thumbnail"
              }), TT.approved && (0, hT.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: TT.name
              }), TT.id && (0, hT.jsx)(kT.C, {
                className: "ThumbnailDeleteButton",
                onClick: oT => async function(TT, oT, IT) {
                  TT.stopPropagation();
                  const iT = await zT.NotificationProvider.showCustomPopup({
                      body: TT => (0, hT.jsx)(bT, {
                        thumbnailId: oT,
                        thumbnailName: IT,
                        onClose: oT => {
                          oT && (nT.current = !0), TT()
                        }
                      }),
                      middleScreenPopupClassName: "ThumbnailDeleteConfirmPopup",
                      onClose: LT
                    }).getResult(),
                    kT = nT.current;
                  nT.current = !1, kT && !0 === iT && (rT.current && qT({
                    text: cT("thumbnail:deletingThumbnail"),
                    type: "info"
                  }, !1), ET.e.deleteSchematicThumbnail(KT, oT).then((() => {
                    rT.current && (qT({
                      text: cT("thumbnail:thumbnailDeleted"),
                      type: "success"
                    }, !0), aT.current === oT && yT(null), ZT())
                  })).catch((TT => {
                    rT.current && qT({
                      text: TT.errorMessageForUser ? cT(TT.errorMessageForUser, TT.errorMessageTranslationParams) : cT("thumbnail:failedToDeleteThumbnail"),
                      type: "error"
                    }, !0)
                  })))
                }(oT, TT.id, TT.name),
                children: (0, hT.jsx)(ST.e, {
                  name: "trash-can"
                })
              }), !TT.approved && (0, hT.jsx)("div", {
                className: "ThumbnailUnapprovedIcon",
                children: (0, hT.jsx)(ST.e, {
                  name: "hourglass-clock"
                })
              }), !TT.approved && (0, hT.jsxs)("div", {
                className: "ThumbnailGridItemLabel ThumbnailPendingLabel",
                children: [TT.name, (0, hT.jsx)("br", {}), cT("thumbnail:pendingApproval")]
              })]
            }, oT))), (0, hT.jsxs)("div", {
              className: xT()("ThumbnailGridItem ThumbnailUploadTile", {
                ThumbnailUploadTileDisabled: !DT
              }),
              onClick: () => {
                DT && function(TT) {
                  let {
                    schematicId: oT,
                    ownedThumbnailCount: IT,
                    onThumbnailReady: iT,
                    onClose: kT
                  } = TT;
                  zT.NotificationProvider.showCustomPopup({
                    body: TT => (0, hT.jsx)(lT, {
                      schematicId: oT,
                      ownedThumbnailCount: IT,
                      onClose: TT,
                      onThumbnailReady: iT
                    }),
                    middleScreenPopupClassName: "SchematicThumbnailPopup",
                    onClose: kT,
                    unlockPointerKey: "schematicThumbnailUploaderPopup"
                  })
                }({
                  schematicId: WT.schematicId,
                  ownedThumbnailCount: AT.length,
                  onThumbnailReady: tT,
                  onClose: LT
                })
              },
              children: [(0, hT.jsx)(ST.e, {
                name: "plus"
              }), (0, hT.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: cT("thumbnail:uploadThumbnail")
              })]
            })]
          })
        })]
      })
    }

    function pT(TT) {
      let {
        rejectedThumbnails: oT,
        userContext: IT,
        isMountedRef: zT,
        onAcknowledged: WT
      } = TT;
      const {
        t: FT
      } = (0, XT.t)(), [DT, LT] = (0, iT.useState)(!1), [xT, cT] = (0, iT.useState)(!1), KT = function(TT) {
        const oT = new Map;
        for (const IT of TT) {
          const TT = IT.rejectionPolicyId,
            iT = oT.get(TT);
          iT ? iT.push(IT) : oT.set(TT, [IT])
        }
        return oT
      }(oT);
      return (0, hT.jsxs)("div", {
        className: "ThumbnailRejectionNotice",
        children: [(0, hT.jsxs)("div", {
          className: "ThumbnailRejectionNoticeTitle",
          children: [(0, hT.jsx)(ST.e, {
            name: "triangle-exclamation"
          }), " ", FT("thumbnail:thumbnailsRejected"), " ", (0, hT.jsx)(ST.e, {
            name: "triangle-exclamation"
          })]
        }), (0, hT.jsx)("div", {
          className: "ThumbnailRejectionNoticeSubtitle",
          children: FT("thumbnail:thumbnailsRejectedDescription")
        }), (0, hT.jsx)("div", {
          className: "ThumbnailRejectionNoticeList",
          children: [...KT.entries()].map((TT => {
            let [oT, IT] = TT;
            const iT = tT[oT];
            return (0, hT.jsxs)("div", {
              className: "ThumbnailRejectionNoticeGroup",
              children: [(0, hT.jsx)("div", {
                className: "ThumbnailRejectionNoticeItems",
                children: IT.map((TT => (0, hT.jsxs)("div", {
                  className: "ThumbnailRejectionNoticeItem",
                  children: [(0, hT.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemIcon",
                    children: (0, hT.jsx)(ST.e, {
                      name: "image-slash"
                    })
                  }), (0, hT.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemDetails",
                    children: (0, hT.jsx)("div", {
                      className: "ThumbnailRejectionNoticeItemName",
                      children: TT.name
                    })
                  })]
                }, TT.id)))
              }), (0, hT.jsxs)("div", {
                className: "ThumbnailRejectionNoticeGroupReason",
                children: [FT("thumbnail:rejectionReason"), " ", iT ? FT(iT.reason) : oT]
              }), iT && (0, hT.jsx)("ul", {
                className: "ThumbnailRejectionNoticeGroupTips",
                children: iT.tips.map((TT => (0, hT.jsx)("li", {
                  children: FT(TT)
                }, TT)))
              })]
            }, oT)
          }))
        }), (0, hT.jsxs)("label", {
          className: "ThumbnailRejectionNoticeCheckbox",
          children: [(0, hT.jsx)(vT.d, {
            checked: DT,
            onChange: TT => LT(TT.target.checked),
            disabled: xT
          }), (0, hT.jsx)("span", {
            children: FT("thumbnail:haveReadRejectionReasons")
          })]
        }), (0, hT.jsx)(kT.m, {
          onClick: async function() {
            cT(!0);
            const TT = await Promise.allSettled(oT.map((TT => ET.e.deleteSchematicThumbnail(IT, TT.id))));
            if (!zT.current) return;
            const iT = TT.filter((TT => "rejected" === TT.status));
            iT.length > 0 && console.error("Some rejected thumbnails failed to delete:", iT), WT()
          },
          disabled: !DT || xT,
          className: "ThumbnailRejectionNoticeAcceptButton",
          children: xT ? (0, hT.jsx)(BT.d, {}) : FT("general:accept")
        })]
      })
    }

    function bT(TT) {
      let {
        thumbnailId: oT,
        thumbnailName: IT,
        onClose: iT
      } = TT;
      const {
        t: zT
      } = (0, XT.t)();
      return (0, hT.jsxs)("div", {
        className: "ThumbnailDeleteConfirm",
        children: [(0, hT.jsx)("div", {
          className: "ThumbnailDeleteConfirmTitle",
          children: zT("thumbnail:deleteThumbnail")
        }), (0, hT.jsxs)("div", {
          className: "ThumbnailDeleteConfirmImageContainer",
          children: [(0, hT.jsx)("img", {
            className: "ThumbnailDeleteConfirmImage",
            src: `${sT.clientSideServerUrls.s3Url}/customThumbnails/${oT}.jpg`,
            alt: "Thumbnail to delete"
          }), (0, hT.jsx)("div", {
            className: "ThumbnailGridItemLabel",
            children: IT
          })]
        }), (0, hT.jsx)("div", {
          className: "ThumbnailDeleteConfirmSubtitle",
          children: zT("thumbnail:deleteThumbnailConfirmation")
        }), (0, hT.jsxs)("div", {
          className: "ThumbnailDeleteConfirmButtons",
          children: [(0, hT.jsxs)(kT.C, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => iT(!0),
            children: [(0, hT.jsx)(ST.e, {
              name: "trash-can"
            }), " ", zT("general:delete")]
          }), (0, hT.jsx)(kT.i, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => iT(!1),
            children: zT("general:cancel")
          })]
        })]
      })
    }
    var yT = IT(2715),
      NT = IT(4465),
      PT = IT(4473),
      dT = IT(4517);

    function VT(TT) {
      let {
        schematicData: oT,
        setTexturePack: IT,
        initializeTexturePack: zT,
        publishFormEnabled: kT
      } = TT;
      const {
        t: WT
      } = (0, XT.t)(), [BT, FT] = (0, iT.useState)(null), [ST, DT] = (0, iT.useState)(null), [LT, cT] = (0, iT.useState)(!1), KT = (0, fT.c)(), MT = kT && !LT, rT = oT.customTexturePackKey;

      function AT(TT) {
        var oT;
        FT(TT.metaData.id), DT(null !== (oT = TT.metaData.fromFolderName) && void 0 !== oT ? oT : null), (TT.metaData.id !== yT.n.CUSTOM || TT.metaData.fromFolderName) && IT(TT)
      }
      return (0, iT.useEffect)((() => {
        rT && (cT(!0), (0, NT.c)(rT).then((TT => {
          var oT;
          KT.current && (TT ? (FT(TT.metaData.id), DT(null !== (oT = TT.metaData.fromFolderName) && void 0 !== oT ? oT : null), zT(TT)) : console.error(`No texture pack at ${rT}`))
        })).catch((TT => {
          console.error("Error fetching texture pack: ", TT)
        })).finally((() => {
          cT(!1)
        })))
      }), [rT, zT, KT]), (0, hT.jsxs)("div", {
        className: "BloxdForm TexturePackSection",
        children: [(0, hT.jsx)("div", {
          className: "SectionTitle",
          children: WT("customTexturePack:customTexturePack")
        }), (0, hT.jsxs)("div", {
          className: "TexturePackList",
          children: [(0, hT.jsx)("div", {
            className: xT()("TexturePack", {
              Selected: null === BT && !LT,
              Disabled: !MT
            }),
            onClick: () => {
              MT && (FT(null), IT(null), DT(null))
            },
            children: (0, hT.jsx)("div", {
              className: "TexturePackName",
              children: "No Override"
            })
          }), Object.values(yT.n).map((TT => (0, hT.jsx)(PT.f, {
            id: TT,
            isSelected: TT === BT,
            setSelected: AT,
            disabled: !MT
          }, TT)))]
        }), BT === yT.n.CUSTOM && (0, hT.jsx)(dT.e, {
          folderName: ST,
          onTexturePackUpdated: AT,
          disabled: !MT,
          maxFileSizeMb: 25,
          packOwner: "customGame"
        })]
      })
    }
    var To = IT(4529);

    function oo(TT) {
      var oT;
      let {
        gameCategory: IT,
        setGameCategory: iT,
        disabled: zT
      } = TT;
      const WT = null !== (oT = (0, cT.ib)(IT)) && void 0 !== oT ? oT : "other";
      return (0, hT.jsxs)("div", {
        className: "GameCategoryPicker",
        children: [(0, hT.jsx)(rT.h, {
          label: "worldBuilder:gameCategoryGroup",
          className: "GameCategoryGroup",
          disabled: zT,
          children: (0, hT.jsx)(AT.d, {
            options: cT.Z.map((TT => ({
              value: TT,
              label: cT.W[TT]
            }))),
            value: WT,
            onChange: TT => {
              TT.value !== WT && iT(cT.R[TT.value][0])
            }
          })
        }), (0, hT.jsx)(rT.h, {
          label: "worldBuilder:gameCategory",
          className: "GameCategory",
          disabled: zT,
          children: (0, hT.jsx)("div", {
            className: "GameCategoryOptions",
            children: cT.R[WT].map((TT => (0, hT.jsx)(kT.J, {
              active: TT === IT,
              onClick: () => {
                iT(TT)
              },
              children: (0, cT.eb)(TT)
            }, TT)))
          })
        })]
      })
    }

    function Io(TT) {
      let {
        editor: oT,
        onClose: IT
      } = TT;
      const {
        t: iT
      } = (0, XT.t)(), {
        schematicData: zT,
        updateSchematicData: kT,
        publishFormEnabled: BT,
        formEnabled: FT
      } = oT;
      return (0, hT.jsxs)(hT.Fragment, {
        children: [(0, hT.jsxs)(wT, {
          icon: "pen-to-square",
          title: iT("worldBuilder:basicsSection"),
          disabled: !FT,
          children: [(0, hT.jsx)(mT, {
            label: iT("general:name"),
            caption: iT("worldBuilder:schematicNameTagsHint"),
            children: (0, hT.jsx)(WT.e, {
              className: "SchematicPageName",
              defaultValue: zT.name,
              onValueChange: TT => kT("name", TT),
              placeholderText: iT("worldBuilder:schematicNamePlaceholder"),
              maxLength: DT.zb
            })
          }), (0, hT.jsx)(mT, {
            label: iT("general:description"),
            children: (0, hT.jsx)(WT.e, {
              className: "SchematicPageDescription",
              useTextarea: !0,
              defaultValue: zT.description,
              onValueChange: TT => kT("description", TT),
              placeholderText: iT("worldBuilder:schematicDescriptionPlaceholder"),
              maxLength: DT.vb
            })
          }), (0, hT.jsx)(oo, {
            gameCategory: zT.gameCategory,
            setGameCategory: TT => kT("gameCategory", TT),
            disabled: !BT
          }), !0 === zT.gamePublished && (0, hT.jsx)(GT, {
            schematicData: zT,
            updateSchematicData: kT,
            publishFormEnabled: BT,
            onClose: function() {
              null === IT || void 0 === IT || IT()
            }
          })]
        }), (0, hT.jsx)(RT, {
          schematicData: zT,
          updateSchematicData: kT,
          publishFormEnabled: BT,
          formEnabled: FT
        }), !0 === zT.gamePublished && (0, hT.jsx)(wT, {
          icon: "palette",
          title: iT("worldBuilder:texturePackSection"),
          disabled: !FT,
          children: (0, hT.jsx)(VT, {
            schematicData: zT,
            setTexturePack: oT.setTexturePack,
            initializeTexturePack: oT.initializeTexturePack,
            publishFormEnabled: BT
          })
        })]
      })
    }

    function io(TT) {
      let {
        editor: oT
      } = TT;
      const {
        t: IT
      } = (0, XT.t)(), {
        schematicData: iT,
        formEnabled: zT,
        hasUnsavedChanges: WT
      } = oT, DT = zT && WT;
      return (0, hT.jsxs)("footer", {
        className: "SchematicPageFooter",
        children: [zT && WT && (0, hT.jsxs)("div", {
          className: "SchematicPageFooterStatus",
          children: [(0, hT.jsx)("span", {
            className: "SchematicPageFooterStatusDot"
          }), IT("worldBuilder:unsavedChanges")]
        }), (0, hT.jsx)(FT.e, {
          tooltipInner: (0, hT.jsx)("div", {
            className: "SaveButtonTooltip",
            children: IT(zT && !WT ? "worldBuilder:saveChangesNoneDescription" : "worldBuilder:saveChangesDescription")
          }),
          children: (0, hT.jsxs)(kT.e, {
            className: "SaveChangesButton",
            onClick: () => oT.saveSchematic(iT.gamePublished),
            disabled: !DT,
            children: [(0, hT.jsxs)("span", {
              className: zT ? "" : "SaveChangesButtonBodyHidden",
              children: [(0, hT.jsx)(ST.e, {
                name: "wrench"
              }), " ", IT("worldBuilder:saveChanges")]
            }), !zT && (0, hT.jsx)(BT.d, {})]
          })
        })]
      })
    }

    function zo(TT) {
      let {
        schematic: oT,
        onSchematicUpdate: IT,
        onClose: zT,
        inSourceWorld: WT
      } = TT;
      const {
        t: BT
      } = (0, XT.t)();

      function FT() {
        null === zT || void 0 === zT || zT()
      }
      const ST = (0, To.b)(oT, {
        onNavigateAway: FT,
        inSourceWorld: WT
      });
      return (0, iT.useEffect)((() => {
        null === IT || void 0 === IT || IT(ST.schematicData)
      }), [ST.schematicData, IT]), (0, hT.jsxs)("div", {
        className: "SchematicPage SchematicPagePopupVariant",
        children: [(0, hT.jsxs)("div", {
          className: "SchematicPageBody",
          children: [(0, hT.jsx)(kT.c, {
            onClick: FT,
            children: BT("worldBuilder:back")
          }), (0, hT.jsx)(wT, {
            icon: "rocket-launch",
            title: BT("worldBuilder:actionsSection"),
            disabled: !ST.formEnabled,
            children: (0, hT.jsx)(uT.d, {
              editor: ST
            })
          }), (0, hT.jsx)(Io, {
            editor: ST,
            onClose: FT
          })]
        }), (0, hT.jsx)(io, {
          editor: ST
        })]
      })
    }

    function ko(TT) {
      let {
        schematic: oT,
        onSchematicUpdate: IT,
        onClose: iT,
        inSourceWorld: kT
      } = TT;
      zT.NotificationProvider.showCustomPopup({
        body: TT => (0, hT.jsx)(zo, {
          schematic: oT,
          onSchematicUpdate: IT,
          onClose: TT,
          inSourceWorld: kT
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: iT,
        unlockPointerKey: "schematicPagePopup"
      })
    }
  },
  4430: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => DT
    });
    var iT = IT(1042),
      zT = IT.n(iT),
      kT = IT(1171),
      WT = IT(1055),
      XT = IT(1408),
      BT = IT(1337),
      FT = IT(1310),
      ST = IT(1083);

    function DT(TT) {
      let {
        editor: oT,
        className: IT
      } = TT;
      const {
        t: iT
      } = (0, kT.t)(), {
        schematicData: DT,
        formEnabled: LT,
        publishFormEnabled: xT
      } = oT, cT = !LT || !xT;
      return (0, ST.jsxs)("div", {
        className: zT()("PublishButtonContainer", IT),
        children: [oT.canEditSourceWorld && (0, ST.jsxs)(XT.e, {
          onClick: oT.editSourceWorld,
          disabled: cT,
          children: [(0, ST.jsx)(WT.e, {
            name: "edit"
          }), " ", iT("worldBuilder:editSourceWorld")]
        }), !DT.gamePublished && (0, ST.jsx)(BT.e, {
          tooltipInner: (0, ST.jsx)("div", {
            className: "PublishButtonTooltip",
            children: iT("worldBuilder:publishAsGameDescription")
          }),
          children: (0, ST.jsxs)(XT.m, {
            onClick: () => oT.saveSchematic(!0),
            disabled: cT,
            children: [(0, ST.jsx)(WT.e, {
              name: "rocket-launch"
            }), " ", iT("worldBuilder:publishAsGame"), " ", (0, ST.jsx)(WT.e, {
              name: "info-circle"
            })]
          })
        }), !0 === DT.gamePublished && (0, ST.jsxs)(ST.Fragment, {
          children: [(0, ST.jsx)(BT.e, {
            tooltipInner: (0, ST.jsx)("div", {
              className: "PublishButtonTooltip",
              children: iT("worldBuilder:unpublishAsGameDescription")
            }),
            children: (0, ST.jsxs)(XT.C, {
              onClick: oT.unpublishSchematic,
              disabled: cT,
              children: [(0, ST.jsx)(WT.e, {
                name: "rocket-launch"
              }), " ", iT("worldBuilder:unpublishAsGame"), " ", (0, ST.jsx)(WT.e, {
                name: "info-circle"
              })]
            })
          }), (0, ST.jsxs)(XT.e, {
            onClick: oT.playGame,
            disabled: cT,
            children: [(0, ST.jsx)(WT.e, {
              name: "joystick"
            }), " ", iT("general:playGame")]
          })]
        }), !LT && (0, ST.jsx)(FT.d, {
          loaderType: "Secondary"
        })]
      })
    }
  },
  4465: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => zT
    });
    var iT = IT(1183);
    async function zT(TT) {
      const oT = await fetch(`${iT.clientSideServerUrls.s3Url}/${TT}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === oT.status || 403 === oT.status) return null;
      if (!oT.ok) throw new Error(`Failed to download the texture pack (${oT.status})`);
      return await oT.json()
    }
  },
  4529: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => MT
    });
    var iT = IT(46),
      zT = IT(1296),
      kT = IT(1007),
      WT = IT(159),
      XT = IT(1501),
      BT = IT(12),
      FT = IT(1751),
      ST = IT(1451),
      DT = IT(4098),
      LT = IT(1325),
      xT = IT(1110),
      cT = IT(1468);

    function KT(TT, oT) {
      return {
        schematicId: TT.schematicId,
        name: TT.name,
        description: TT.description,
        gamePublished: oT,
        gameCategory: TT.gameCategory,
        defaultGamemode: TT.defaultGamemode,
        voidDeathHeight: TT.voidDeathHeight,
        disableKeepInventory: TT.disableKeepInventory,
        disableTpRequests: TT.disableTpRequests,
        disableLobbySpawn: TT.disableLobbySpawn,
        disableMobs: TT.disableMobs,
        disableSpawnProtection: TT.disableSpawnProtection,
        disableFallDamage: TT.disableFallDamage,
        worldBorder: TT.worldBorder,
        hideLobbyCode: TT.hideLobbyCode,
        enableSmpMarketplace: TT.enableSmpMarketplace,
        enableSurvivalGuns: TT.enableSurvivalGuns,
        enableSpawnReset: TT.enableSpawnReset,
        enableDayNight: TT.enableDayNight,
        persistWorld: TT.persistWorld,
        persistInventory: TT.persistInventory
      }
    }

    function MT(TT) {
      let {
        onNavigateAway: oT,
        inSourceWorld: IT = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const {
        userContext: MT
      } = (0, xT.b)(), rT = (0, cT.useNavigatePreserveSearch)(), [AT, gT] = (0, iT.useState)({
        ...TT
      }), [hT, wT] = (0, iT.useState)("Enter"), [mT, eT] = (0, iT.useState)(void 0), RT = (0, iT.useRef)(KT(TT, TT.gamePublished)), uT = (0, iT.useRef)(void 0), vT = "Enter" === hT, ET = MT.playerHasRank("developer") || MT.playerHasRank("admin") || "Enter" === hT && !1 !== AT.schematicContainsSpawnBlock, fT = void 0 !== mT && mT !== uT.current || JSON.stringify(KT(AT, AT.gamePublished)) !== JSON.stringify(RT.current);

      function CT(TT, oT) {
        gT((IT => ({
          ...IT,
          [TT]: oT
        })))
      }
      const jT = (0, iT.useCallback)((TT => {
        uT.current = TT, eT(TT)
      }), []);

      function JT(TT) {
        wT("Loading");
        const oT = KT(AT, TT),
          IT = mT !== uT.current ? mT : void 0;
        ST.e.updateSchematic(MT, oT, IT).then((IT => {
          let {
            customTexturePackKey: iT
          } = IT;
          wT("Success"), CT("customTexturePackKey", iT), RT.current = oT, uT.current = void 0, eT(void 0), setTimeout((() => {
            CT("gamePublished", TT), wT("Enter")
          }), 1e3)
        })).catch((TT => {
          var oT;
          (console.error("Failed to save schematic:", TT), wT("Error"), TT instanceof WT.d && TT.errorMessageForUser) && LT.NotificationProvider.showAlertPopup({
            title: "worldBuilder:changesNotSaved",
            subtitle: TT.errorMessageForUser,
            textOpts: {
              subtitle: null !== (oT = TT.errorMessageTranslationParams) && void 0 !== oT ? oT : void 0
            },
            confirmText: "general:ok"
          });
          setTimeout((() => {
            wT("Enter")
          }), 1e3)
        }))
      }
      return {
        schematicData: AT,
        updateSchematicData: CT,
        setTexturePack: eT,
        initializeTexturePack: jT,
        updateState: hT,
        formEnabled: vT,
        publishFormEnabled: ET,
        hasUnsavedChanges: fT,
        canEditSourceWorld: !IT,
        saveSchematic: JT,
        unpublishSchematic: function() {
          LT.NotificationProvider.showPromptPopup({
            icon: "rocket-launch",
            title: "worldBuilder:unpublishAsGameConfirmTitle",
            subtitle: "worldBuilder:unpublishAsGameConfirmSubtitle",
            confirmText: "worldBuilder:unpublishAsGame",
            cancelText: "general:cancel",
            unlockPointerKey: "unpublishGamePrompt"
          }).getResult().then((TT => {
            !0 === TT && JT(!1)
          }))
        },
        editSourceWorld: function() {
          wT("Loading"), DT.e.getSourceWorld(AT.schematicId).then((TT => {
            FT.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, BT.h)("other"), rT((0, zT.c)("classic", TT)), null === oT || void 0 === oT || oT()
          })).catch((TT => {
            console.error("Failed to get source world:", TT), wT("Error"), setTimeout((() => {
              wT("Enter")
            }), 1e3)
          }))
        },
        playGame: function() {
          FT.gameBridge.send("leaveGame", {
            reloadPath: "/"
          }), rT((0, XT.z)((0, kT.s)(AT.schematicId), AT)), null === oT || void 0 === oT || oT()
        }
      }
    }
  },
  4418: () => {}
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);