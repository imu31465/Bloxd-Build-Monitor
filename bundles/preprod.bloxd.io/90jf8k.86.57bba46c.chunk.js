export const id = 86;
export const ids = [86];
export const modules = {
  3933: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => iW,
      d: () => RF,
      e: () => eF
    });
    var CF = SF(1046),
      AF = SF(918),
      uF = SF.n(AF),
      hF = SF(1198),
      bW = (SF(46), SF(3517)),
      dF = SF(929),
      PF = SF(971);

    function RF(FF) {
      let {
        children: WF,
        label: SF,
        className: AF,
        circleInfoText: bW,
        disabled: RF
      } = FF;
      const {
        t: iW
      } = (0, CF.B)();
      return (0, PF.jsxs)("div", {
        className: uF()("LabeledInput", {
          [AF]: AF,
          DisabledLabelInput: RF
        }),
        children: [bW && (0, PF.jsx)(hF.g, {
          tooltipInner: (0, PF.jsx)("div", {
            className: "LabeledInputTooltip",
            children: iW(bW)
          }),
          children: (0, PF.jsxs)("div", {
            className: "Label",
            children: [iW(SF), (0, PF.jsx)(dF.e, {
              name: "circle-info"
            })]
          })
        }), !bW && (0, PF.jsx)("div", {
          className: "Label",
          children: iW(SF)
        }), WF]
      })
    }

    function iW(FF) {
      let {
        checked: WF,
        setChecked: SF
      } = FF;
      return (0, PF.jsx)("div", {
        className: "OtherInput ClickableOtherInput",
        "data-pad-focusable": !0,
        onClick: FF => {
          SF(!WF)
        },
        children: (0, PF.jsx)(bW.b, {
          checked: WF,
          onChange: FF => {
            SF(FF.target.checked)
          },
          disabled: !1
        })
      })
    }

    function eF(FF) {
      let {
        checked: WF,
        setChecked: SF,
        disabled: CF
      } = FF;
      return (0, PF.jsx)("div", {
        className: uF()("SwitchContainer", {
          SwitchContainerDisabled: CF
        }),
        onClick: () => {
          CF || SF(!WF)
        },
        children: (0, PF.jsx)(bW.b, {
          className: "SwitchCheckbox",
          checked: WF,
          onChange: FF => {
            SF(FF.target.checked)
          },
          disabled: !!CF
        })
      })
    }
  },
  3942: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => PF
    });
    var CF = SF(918),
      AF = SF.n(CF),
      uF = SF(1046),
      hF = SF(971);
    const bW = ["tpRequests", "spawnProtection", "spawnReset", "smpMarketplace", "survivalGuns", "fallDamage", "dayNight"],
      dF = ["survivalGuns", "fallDamage", "dayNight"];

    function PF(FF) {
      let {
        callbacks: WF,
        disabled: SF,
        advancedMode: CF,
        hideWrapper: PF
      } = FF;
      const {
        t: iW
      } = (0, uF.B)(), eF = (0, hF.jsx)("div", {
        className: AF()("PluginsGrid", {
          SectionBody: !PF
        }),
        children: (CF ? bW : dF).map((FF => (0, hF.jsx)(RF, {
          plugin: FF,
          callbacks: WF[FF],
          disabled: SF
        }, FF)))
      });
      return PF ? eF : (0, hF.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, hF.jsx)("div", {
          className: "SectionTitle",
          children: iW("worldBuilder:pluginsSection")
        }), eF]
      })
    }

    function RF(FF) {
      let {
        plugin: WF,
        callbacks: {
          isEnabled: SF,
          MWF: CF
        },
        disabled: bW
      } = FF;
      const {
        t: dF
      } = (0, uF.B)(), PF = SF();
      return (0, hF.jsxs)("div", {
        className: AF()("PluginCard", {
          PluginCardEnabled: PF,
          PluginCardDisabledForm: bW
        }),
        "data-pad-focusable": !0,
        "aria-disabled": bW || void 0,
        onClick: () => {
          bW || CF(!PF)
        },
        children: [(0, hF.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, hF.jsx)("img", {
            src: `/textures/games/classic/customGames/${WF}.png`,
            alt: WF
          })
        }), (0, hF.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, hF.jsx)("div", {
            className: "PluginCardTitle",
            children: dF(iW[WF])
          }), (0, hF.jsx)("div", {
            className: "PluginCardDescription",
            children: dF(eF[WF])
          })]
        }), (0, hF.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: dF(PF ? "general:on" : "general:off")
        })]
      })
    }
    const iW = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      eF = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  3924: (FF, WF, SF) => {
    SF.d(WF, {
      g: () => AW,
      c: () => CW,
      f: () => SW,
      h: () => uW
    });
    var CF = SF(46),
      AF = SF(1189),
      uF = SF(1266),
      hF = SF(1504),
      bW = SF(1046),
      dF = SF(1186),
      PF = SF(1198),
      RF = SF(929),
      iW = SF(1085),
      eF = SF(918),
      EF = SF.n(eF),
      QF = SF(220),
      rW = SF(3951),
      gW = SF(1101),
      tW = SF(3933),
      TF = SF(2332),
      aW = SF(3942),
      kW = SF(971);

    function qW(FF) {
      let {
        icon: WF,
        title: SF,
        disabled: CF,
        children: AF
      } = FF;
      return (0, kW.jsxs)("div", {
        className: EF()("ManageCard", {
          ManageCardDisabled: CF
        }),
        children: [(0, kW.jsxs)("div", {
          className: "ManageCardHead",
          children: [(0, kW.jsx)("div", {
            className: "ManageCardIcon",
            children: (0, kW.jsx)(RF.e, {
              name: WF
            })
          }), (0, kW.jsx)("div", {
            children: (0, kW.jsx)("h2", {
              className: "ManageCardTitle",
              children: SF
            })
          })]
        }), (0, kW.jsxs)("div", {
          className: "ManageCardBody",
          children: [AF, CF && (0, kW.jsx)("div", {
            className: "ManageCardDisabledOverlay"
          })]
        })]
      })
    }

    function VF(FF) {
      let {
        label: WF,
        caption: SF,
        children: CF
      } = FF;
      return (0, kW.jsxs)("div", {
        className: "ManageStackedField",
        children: [(0, kW.jsx)("div", {
          className: "ManageStackedFieldLabel",
          children: WF
        }), CF, SF && (0, kW.jsx)("div", {
          className: "ManageStackedFieldCaption",
          children: SF
        })]
      })
    }

    function NF(FF) {
      let {
        label: WF,
        caption: SF,
        disabled: CF,
        children: AF
      } = FF;
      return (0, kW.jsxs)("div", {
        className: EF()("ManageField", {
          ManageFieldDisabled: CF
        }),
        children: [(0, kW.jsxs)("div", {
          className: "ManageFieldText",
          children: [(0, kW.jsx)("div", {
            className: "ManageFieldLabel",
            children: WF
          }), (0, kW.jsx)("div", {
            className: "ManageFieldCaption",
            children: SF
          })]
        }), (0, kW.jsx)("div", {
          className: "ManageFieldControl",
          children: AF
        })]
      })
    }

    function DF(FF) {
      var WF, SF;
      let {
        schematicData: CF,
        updateSchematicData: AF,
        publishFormEnabled: uF,
        formEnabled: hF
      } = FF;
      const {
        t: dF
      } = (0, bW.B)(), PF = !uF, RF = {
        tpRequests: {
          isEnabled: () => !CF.disableTpRequests,
          MWF: FF => AF("disableTpRequests", !FF)
        },
        spawnProtection: {
          isEnabled: () => !CF.disableSpawnProtection,
          MWF: FF => AF("disableSpawnProtection", !FF)
        },
        spawnReset: {
          isEnabled: () => !!CF.enableSpawnReset,
          MWF: FF => AF("enableSpawnReset", FF)
        },
        smpMarketplace: {
          isEnabled: () => !!CF.enableSmpMarketplace,
          MWF: FF => AF("enableSmpMarketplace", FF)
        },
        survivalGuns: {
          isEnabled: () => !!CF.enableSurvivalGuns,
          MWF: FF => AF("enableSurvivalGuns", FF)
        },
        fallDamage: {
          isEnabled: () => !CF.disableFallDamage,
          MWF: FF => AF("disableFallDamage", !FF)
        },
        dayNight: {
          isEnabled: () => !!CF.enableDayNight,
          MWF: FF => AF("enableDayNight", FF)
        }
      };
      return (0, kW.jsxs)(kW.Fragment, {
        children: [!1 === CF.schematicContainsSpawnBlock && (0, kW.jsx)("div", {
          className: "ManageWarningBanner",
          children: dF("worldBuilder:mustContainSpawnBlock")
        }), (0, kW.jsxs)("div", {
          className: "ManageSettingsGrid",
          children: [(0, kW.jsxs)(qW, {
            icon: "globe",
            title: dF("worldBuilder:worldRulesSection"),
            disabled: !hF,
            children: [(0, kW.jsx)(NF, {
              label: dF("classic:defaultGamemode"),
              caption: dF("classic:defaultGamemodeDescription"),
              disabled: PF,
              children: (0, kW.jsx)(TF.c, {
                controlClassName: "ManageDropdown",
                options: rW.j.map((FF => ({
                  value: FF,
                  label: QF.o[FF]
                }))),
                value: CF.defaultGamemode,
                onChange: FF => AF("defaultGamemode", FF.value)
              })
            }), (0, kW.jsx)(NF, {
              label: dF("classic:voidDeathHeight"),
              caption: dF("classic:voidDeathHeightDescription"),
              disabled: PF,
              children: (0, kW.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, kW.jsx)("input", {
                  type: "number",
                  max: gW.H,
                  value: null !== (WF = CF.voidDeathHeight) && void 0 !== WF ? WF : "",
                  onChange: FF => {
                    const WF = parseInt(FF.target.value);
                    AF("voidDeathHeight", WF)
                  }
                }), (0, kW.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: dF("worldBuilder:blocksUnit")
                })]
              })
            }), (0, kW.jsx)(NF, {
              label: dF("classic:worldBorder"),
              caption: dF("classic:worldBorderDescription"),
              disabled: PF,
              children: (0, kW.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, kW.jsx)("input", {
                  type: "number",
                  min: gW.O,
                  max: gW.J,
                  placeholder: dF("worldBuilder:noWorldBorderLimit"),
                  value: null !== (SF = CF.worldBorder) && void 0 !== SF ? SF : "",
                  onChange: FF => {
                    const WF = parseInt(FF.target.value);
                    AF("worldBorder", isNaN(WF) ? null : WF)
                  }
                }), (0, kW.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: dF("worldBuilder:blocksUnit")
                })]
              })
            }), (0, kW.jsx)(NF, {
              label: dF("classic:disableMobs"),
              caption: dF("classic:disableMobsDescription"),
              disabled: PF,
              children: (0, kW.jsx)(tW.e, {
                checked: CF.disableMobs,
                setChecked: FF => AF("disableMobs", FF),
                disabled: PF
              })
            })]
          }), (0, kW.jsxs)(qW, {
            icon: "user-group",
            title: dF("worldBuilder:playerAndLobbySection"),
            disabled: !hF,
            children: [(0, kW.jsx)(NF, {
              label: dF("classic:disableKeepInventory"),
              caption: dF("classic:disableKeepInventoryDescription"),
              disabled: PF,
              children: (0, kW.jsx)(tW.e, {
                checked: CF.disableKeepInventory,
                setChecked: FF => AF("disableKeepInventory", FF),
                disabled: PF
              })
            }), (0, kW.jsx)(NF, {
              label: dF("classic:persistInventory"),
              caption: dF("classic:persistInventoryDescription"),
              disabled: PF,
              children: (0, kW.jsx)(TF.c, {
                controlClassName: "ManageDropdown",
                options: rW.d.map((FF => ({
                  value: FF,
                  label: QF.h[FF]
                }))),
                value: CF.persistInventory,
                onChange: FF => AF("persistInventory", FF.value)
              })
            }), (0, kW.jsx)(NF, {
              label: dF("classic:persistWorld"),
              caption: dF("classic:persistWorldDescription"),
              disabled: PF,
              children: (0, kW.jsx)(tW.e, {
                checked: CF.persistWorld,
                setChecked: FF => AF("persistWorld", FF),
                disabled: PF
              })
            }), (0, kW.jsx)(NF, {
              label: dF("classic:disableLobbySpawn"),
              caption: dF("classic:disableLobbySpawnDescription"),
              disabled: PF,
              children: (0, kW.jsx)(tW.e, {
                checked: CF.disableLobbySpawn,
                setChecked: FF => AF("disableLobbySpawn", FF),
                disabled: PF
              })
            }), (0, kW.jsx)(NF, {
              label: dF("classic:hideLobbyCode"),
              caption: dF("classic:hideLobbyCodeDescription"),
              disabled: PF,
              children: (0, kW.jsx)(tW.e, {
                checked: CF.hideLobbyCode,
                setChecked: FF => AF("hideLobbyCode", FF),
                disabled: PF
              })
            })]
          })]
        }), (0, kW.jsx)(qW, {
          icon: "layer-group",
          title: dF("worldBuilder:pluginsSection"),
          disabled: !hF,
          children: (0, kW.jsx)(aW.d, {
            callbacks: RF,
            disabled: PF,
            advancedMode: !0,
            hideWrapper: !0
          })
        })]
      })
    }
    var LF = SF(3954),
      mW = SF(3517),
      OF = SF(1336),
      xW = SF(2663),
      ZF = SF(996),
      oF = SF(3902),
      YF = SF(3957),
      MF = SF(1273);
    const cW = 50,
      GF = .3;
    async function zW(FF) {
      const WF = await
      function(FF) {
        return new Promise(((WF, SF) => {
          const CF = new FileReader;
          CF.onload = () => WF(CF.result), CF.onerror = SF, CF.readAsDataURL(FF)
        }))
      }(FF), SF = await
      function(FF) {
        return new Promise(((WF, SF) => {
          const CF = new Image;
          CF.onload = () => WF(CF), CF.onerror = () => SF(new Error("Failed to load image")), CF.src = FF
        }))
      }(WF);
      if (SF.naturalHeight > SF.naturalWidth) throw new IF;
      const CF = 1024 * cW,
        {
          dataUrl: AF,
          finalQuality: uF
        } = function(FF, WF) {
          const SF = document.createElement("canvas");
          SF.width = FF.naturalWidth, SF.height = FF.naturalHeight, SF.getContext("2d").drawImage(FF, 0, 0);
          let CF = .92,
            AF = SF.toDataURL("image/jpeg", CF);
          for (; .75 * AF.length > WF && CF > .05;) CF -= .05, AF = SF.toDataURL("image/jpeg", CF);
          return {
            dataUrl: AF,
            finalQuality: CF
          }
        }(SF, CF);
      if (Math.ceil(.75 * AF.length) > CF) throw new fF;
      return {
        base64Jpg: AF,
        heavilyCompressed: uF < GF
      }
    }
    class IF extends Error {}
    class fF extends Error {}
    var yW = function(FF) {
      return FF[FF.NOT_LOGGED_IN = 0] = "NOT_LOGGED_IN", FF[FF.THUMBNAIL_LIMIT_REACHED = 1] = "THUMBNAIL_LIMIT_REACHED", FF
    }(yW || {});

    function sF(FF) {
      var WF;
      let {
        schematicId: SF,
        hasReadUploadPolicy: AF,
        onPolicyValidationError: dF,
        onThumbnailReady: PF
      } = FF;
      const {
        t: eF
      } = (0, bW.B)(), [QF, rW] = (0, CF.useState)(null), [gW, tW] = (0, CF.useState)(""), [TF, aW] = (0, CF.useState)(""), [qW, VF] = (0, CF.useState)(!0), [NF, DF] = (0, CF.useState)(!1), LF = (0, CF.useRef)(!1), [mW, OF] = (0, CF.useState)(null), [xW, ZF] = (0, CF.useState)(!1), [oF, MF] = (0, CF.useState)(!1), cW = (0, CF.useRef)(0), {
        getRootProps: GF,
        getInputProps: yW,
        isDragActive: sF
      } = (0, YF.c)({
        accept: {
          "image/*": [".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp"]
        },
        multiple: !1,
        onDrop: async FF => {
          if (0 === FF.length) return;
          const WF = FF[0],
            SF = ++cW.current;
          OF(null), ZF(!1), rW(null), tW(WF.name);
          try {
            const FF = await zW(WF);
            if (SF !== cW.current) return;
            rW(FF), ZF(FF.heavilyCompressed)
          } catch (CF) {
            if (SF !== cW.current) return;
            OF(eF(CF instanceof IF ? "thumbnail:portraitImagesNotAllowed" : CF instanceof fF ? "thumbnail:couldNotCompressImage" : "thumbnail:failedToUploadImage"))
          }
        },
        useFsAccessApi: !1
      }), nF = gW.length <= 30 ? gW : `${gW.slice(0,27)}...`, HF = null !== (WF = null === QF || void 0 === QF ? void 0 : QF.base64Jpg) && void 0 !== WF ? WF : null, KF = TF.trim(), wF = KF.length >= iW.j && KF.length <= iW.h, XF = oF && !QF && !mW, UF = oF && !wF;
      return (0, kW.jsxs)("div", {
        className: "ThumbnailUploadContainer",
        children: [(0, kW.jsxs)("div", {
          ...GF({
            className: EF()("ThumbnailUploadDropzone", {
              ActiveDrag: sF,
              ValidationError: XF
            })
          }),
          children: [(0, kW.jsx)("input", {
            ...yW()
          }), !sF && HF ? (0, kW.jsxs)(kW.Fragment, {
            children: [(0, kW.jsxs)("div", {
              className: "ThumbnailAspectPreviews",
              children: [(0, kW.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, kW.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "1:1"
                }), (0, kW.jsx)("div", {
                  className: "ThumbnailAspectFrame Square",
                  children: (0, kW.jsx)("img", {
                    src: HF,
                    alt: "1:1 preview"
                  })
                })]
              }), (0, kW.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, kW.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "16:9"
                }), (0, kW.jsx)("div", {
                  className: "ThumbnailAspectFrame Wide",
                  children: (0, kW.jsx)("img", {
                    src: HF,
                    alt: "16:9 preview"
                  })
                })]
              })]
            }), (0, kW.jsxs)("div", {
              children: [(0, kW.jsx)("div", {
                className: "ThumbnailUploadInstructions Active",
                children: nF
              }), (0, kW.jsx)("div", {
                className: "ThumbnailUploadInstructions Preview",
                children: eF("thumbnail:preview")
              })]
            })]
          }) : (0, kW.jsxs)(kW.Fragment, {
            children: [(0, kW.jsx)("div", {
              className: "ThumbnailUploadIcon",
              children: (0, kW.jsx)(RF.e, {
                name: "image"
              })
            }), (0, kW.jsx)("div", {
              className: "ThumbnailUploadInstructions",
              children: eF("thumbnail:dragImageHere")
            })]
          })]
        }), XF && (0, kW.jsx)("div", {
          className: "ThumbnailUploadError",
          children: eF("thumbnail:imageRequired")
        }), (0, kW.jsx)(hF.d, {
          className: EF()("ThumbnailUploadNameInput", {
            ValidationError: UF
          }),
          placeholderText: eF("thumbnail:thumbnailName"),
          defaultValue: TF,
          onValueChange: FF => {
            aW(FF)
          },
          maxLength: iW.h
        }), UF && (0, kW.jsx)("div", {
          className: "ThumbnailUploadError",
          children: eF("thumbnail:nameRequired", {
            min: iW.j,
            max: iW.h
          })
        }), (0, kW.jsxs)("label", {
          className: "ThumbnailUploadCheckbox",
          children: [(0, kW.jsx)("input", {
            type: "checkbox",
            checked: qW,
            onChange: FF => {
              VF(FF.target.checked)
            }
          }), eF("thumbnail:setAsThumbnailOnceApproved")]
        }), xW && (0, kW.jsx)("div", {
          className: "ThumbnailUploadWarning",
          children: eF("thumbnail:heavyCompressionWarning")
        }), mW && (0, kW.jsx)("div", {
          className: "ThumbnailUploadError",
          children: mW
        }), (0, kW.jsx)(uF.k, {
          disabled: NF,
          className: "ThumbnailUploadButton",
          onClick: async () => {
            if (MF(!0), !LF.current && QF && wF && AF) {
              LF.current = !0, DF(!0), OF(null);
              try {
                await PF(QF.base64Jpg, KF, qW ? SF : null)
              } catch (FF) {
                OF(FF.errorMessageForUser ? eF(FF.errorMessageForUser, FF.errorMessageTranslationParams) : eF("thumbnail:failedToUploadImage"))
              } finally {
                LF.current = !1, DF(!1)
              }
            } else AF || dF()
          },
          children: eF(NF ? "thumbnail:processing" : "thumbnail:uploadThumbnail")
        })]
      })
    }
    const nF = 2e3;

    function HF(FF) {
      let {
        schematicId: WF,
        ownedThumbnailCount: SF,
        onClose: AF,
        onThumbnailReady: uF
      } = FF;
      const {
        t: hF
      } = (0, bW.B)(), {
        userContext: dF
      } = (0, ZF.b)(), [PF, eF] = (0, CF.useState)(!1), [QF, rW] = (0, CF.useState)(!1), [gW, tW] = (0, CF.useState)(!1), TF = (0, CF.useRef)();
      (0, CF.useEffect)((() => () => {
        clearTimeout(TF.current)
      }), []);
      const aW = function(FF, WF) {
        const SF = [];
        return FF.isLoggedIn() || SF.push(yW.NOT_LOGGED_IN), WF >= iW.Y && SF.push(yW.THUMBNAIL_LIMIT_REACHED), SF
      }(dF, SF);
      if (aW.length > 0) {
        const FF = {
          [yW.NOT_LOGGED_IN]: {
            key: "thumbnail:mustBeLoggedInToUpload"
          },
          [yW.THUMBNAIL_LIMIT_REACHED]: {
            key: "thumbnail:thumbnailLimitReachedPleaseDelete",
            params: {
              max: iW.Y
            }
          }
        };
        return (0, kW.jsxs)("div", {
          className: "ThumbnailUploaderInner",
          children: [(0, kW.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: hF("thumbnail:cannotUploadThumbnail")
          }), aW.map(((WF, SF) => {
            const CF = FF[WF];
            return (0, kW.jsxs)("div", {
              className: "CannotUploadThumbnailItem",
              children: [(0, kW.jsx)(RF.e, {
                name: "triangle-exclamation"
              }), (0, kW.jsx)("span", {
                children: hF(CF.key, CF.params)
              })]
            }, SF)
          }))]
        })
      }
      return (0, kW.jsxs)("div", {
        className: EF()("ThumbnailUploaderInner", {
          ThumbnailUploaderSuccess: PF
        }),
        children: [PF && (0, kW.jsxs)("div", {
          className: "ThumbnailUploadSuccessOverlay",
          children: [(0, kW.jsxs)("div", {
            className: "ThumbnailUploadSuccessIcon FullyFancyText AnimFadeInScaleUp",
            children: [(0, kW.jsx)(RF.e, {
              name: "check"
            }), (0, kW.jsx)(MF.e, {})]
          }), (0, kW.jsx)("div", {
            className: "ThumbnailUploadSuccessText AnimFadeInScaleUp",
            children: hF("thumbnail:thumbnailUploaded")
          })]
        }), (0, kW.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: hF("thumbnail:uploadThumbnail")
        }), (0, kW.jsxs)("div", {
          className: "ThumbnailUploaderBody",
          children: [(0, kW.jsxs)("div", {
            className: "ThumbnailUploaderLeft",
            children: [(0, kW.jsx)("h3", {
              className: "SchematicPopupSubtitle",
              children: hF("thumbnail:chooseImage", {
                maxSizeKb: cW
              })
            }), (0, kW.jsx)(sF, {
              schematicId: WF,
              hasReadUploadPolicy: QF,
              onPolicyValidationError: () => {
                tW(!0)
              },
              onThumbnailReady: async (FF, WF, SF) => {
                await uF(FF, WF, SF), eF(!0), TF.current = setTimeout(AF, nF)
              }
            })]
          }), (0, kW.jsxs)("div", {
            className: "ThumbnailUploadPolicy",
            children: [(0, kW.jsx)("h3", {
              className: "ThumbnailUploadPolicyTitle",
              children: hF("thumbnail:uploadPolicy")
            }), (0, kW.jsxs)("ul", {
              className: "ThumbnailUploadPolicyList",
              children: [(0, kW.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, kW.jsx)(RF.e, {
                  name: "check"
                }), (0, kW.jsx)("span", {
                  children: hF("thumbnail:policyFollowGuidelines")
                })]
              }), (0, kW.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, kW.jsx)(RF.e, {
                  name: "check"
                }), (0, kW.jsx)("span", {
                  children: hF("thumbnail:policyInGameAssets")
                })]
              }), (0, kW.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, kW.jsx)(RF.e, {
                  name: "check"
                }), (0, kW.jsx)("span", {
                  children: hF("thumbnail:policyLimitText")
                })]
              }), (0, kW.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, kW.jsx)(RF.e, {
                  name: "x"
                }), (0, kW.jsx)("span", {
                  children: hF("thumbnail:policyCopyrightContent")
                })]
              }), (0, kW.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, kW.jsx)(RF.e, {
                  name: "x"
                }), (0, kW.jsx)("span", {
                  children: hF("thumbnail:policyOutOfGameAssets")
                })]
              }), (0, kW.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, kW.jsx)(RF.e, {
                  name: "x"
                }), (0, kW.jsx)("span", {
                  children: hF("thumbnail:policyBloxdTags")
                })]
              }), (0, kW.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, kW.jsx)(RF.e, {
                  name: "x"
                }), (0, kW.jsx)("span", {
                  children: hF("thumbnail:policyMustReflectGame")
                })]
              })]
            }), (0, kW.jsxs)("label", {
              className: EF()("ThumbnailUploadCheckbox Policy", {
                ValidationError: gW && !QF
              }),
              children: [(0, kW.jsx)("input", {
                type: "checkbox",
                checked: QF,
                onChange: FF => {
                  rW(FF.target.checked)
                }
              }), hF("thumbnail:agreeToUploadPolicy")]
            }), gW && !QF && (0, kW.jsx)("div", {
              className: "ThumbnailPolicyError",
              children: hF("thumbnail:policyRequired")
            })]
          })]
        })]
      })
    }
    var KF = SF(1056);
    const wF = {
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

    function XF(FF) {
      var WF, SF;
      let {
        schematicData: hF,
        updateSchematicData: PF,
        publishFormEnabled: iW,
        onClose: eF
      } = FF;
      const {
        t: QF
      } = (0, bW.B)(), {
        userContext: rW,
        isUserContextUpdating: gW
      } = (0, ZF.b)(), tW = (0, xW.d)(), [TF, aW] = (0, CF.useState)([]), [qW, VF] = (0, CF.useState)([]), [NF, DF] = (0, CF.useState)(!0), [LF, mW] = (0, CF.useState)(null !== (WF = hF.customThumbnailId) && void 0 !== WF ? WF : null), [YF, MF] = (0, CF.useState)(null), cW = (0, CF.useRef)(null !== (SF = hF.customThumbnailId) && void 0 !== SF ? SF : null), GF = (0, CF.useRef)(0), zW = (0, CF.useRef)(null), IF = (0, CF.useRef)(null), fF = (0, CF.useRef)(null), yW = (0, CF.useRef)(!1);

      function sF(FF, WF) {
        fF.current && (clearTimeout(fF.current), fF.current = null), MF(FF), null !== FF && WF && (fF.current = setTimeout((() => {
          MF(null), fF.current = null
        }), 5e3))
      }(0, CF.useEffect)((() => () => {
        clearTimeout(IF.current), clearTimeout(fF.current)
      }), []);
      const nF = (0, CF.useCallback)((() => {
        DF(!0), OF.b.getOwnedThumbnails(rW).then((FF => {
          const WF = [],
            SF = [];
          for (const CF of FF.thumbnails) CF.rejectionPolicyId ? WF.push(CF) : SF.push(CF);
          WF.sort(((FF, WF) => FF.lastUpdatedAt - WF.lastUpdatedAt)), SF.sort(((FF, WF) => {
            const SF = FF.approved ? 1 : 0,
              CF = (WF.approved ? 1 : 0) - SF;
            return 0 !== CF ? CF : WF.lastUpdatedAt - FF.lastUpdatedAt
          })), VF(WF), aW(SF)
        })).catch((FF => {
          console.error("Failed to fetch thumbnails:", FF)
        })).finally((() => {
          DF(!1)
        }))
      }), [rW]);
      async function wF(FF, WF, SF) {
        return OF.b.uploadSchematicThumbnail(rW, FF, WF, SF).then((() => {
          sF({
            text: QF("thumbnail:uploadedAwaitingModeration"),
            type: "success"
          }, !0), nF()
        }))
      }

      function XF() {
        GF.current = Date.now(), IF.current = null;
        const FF = zW.current;
        zW.current = null, sF({
          text: QF("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), OF.b.setSchematicThumbnail(rW, hF.schematicId, FF).then((() => {
          tW.current && (sF({
            text: QF("thumbnail:thumbnailUpdated"),
            type: "success"
          }, !0), cW.current = FF, PF("customThumbnailId", FF), PF("customThumbnailBlurhash", void 0), PF("customThumbnailVariants", void 0))
        })).catch((FF => {
          tW.current && (sF({
            text: FF.errorMessageForUser ? QF(FF.errorMessageForUser, FF.errorMessageTranslationParams) : QF("thumbnail:failedToSetThumbnail"),
            type: "error"
          }, !0), mW(cW.current))
        }))
      }

      function jW(FF) {
        mW(FF), zW.current = FF;
        const WF = Date.now() - GF.current;
        WF >= 1e3 ? XF() : (sF({
          text: QF("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), IF.current || (IF.current = setTimeout((() => {
          XF()
        }), 1e3 - WF)))
      }
      return (0, CF.useEffect)((() => {
        !1 === gW && nF()
      }), [gW, nF]), qW.length > 0 ? (0, kW.jsx)(UF, {
        rejectedThumbnails: qW,
        userContext: rW,
        isMountedRef: tW,
        onAcknowledged: nF
      }) : (0, kW.jsxs)("div", {
        className: "BloxdForm ThumbnailSection",
        children: [(0, kW.jsxs)("div", {
          className: "SectionTitle",
          children: [QF("thumbnail:gameThumbnail"), YF && (0, kW.jsx)("span", {
            className: EF()("ThumbnailActionMsg", `ThumbnailActionMsg--${YF.type}`),
            children: YF.text
          })]
        }), (0, kW.jsx)("div", {
          className: "SectionBody",
          children: (0, kW.jsxs)("div", {
            className: "ThumbnailGrid",
            children: [(0, kW.jsxs)("div", {
              className: EF()("ThumbnailGridItem ThumbnailGridItemDefault", {
                ThumbnailGridItemSelected: null === LF
              }),
              onClick: () => jW(null),
              children: [(0, kW.jsx)(oF.c, {
                game: {
                  schematicId: hF.schematicId,
                  imageBlurhash: hF.imageBlurhash
                }
              }), (0, kW.jsx)("div", {
                className: "ThumbnailGridItemLabel ThumbnailDefaultLabel",
                children: QF("general:default")
              })]
            }), NF && (0, kW.jsx)(dF.c, {}), TF.map(((FF, WF) => (0, kW.jsxs)("div", {
              className: EF()("ThumbnailGridItem", {
                ThumbnailGridItemSelected: LF === FF.id,
                ThumbnailGridItemPending: !FF.approved
              }),
              onClick: () => {
                FF.approved && jW(FF.id)
              },
              children: [FF.approved && (0, kW.jsx)("img", {
                src: `${KF.clientSideServerUrls.s3Url}/customThumbnails/${FF.id}.jpg`,
                alt: "Thumbnail"
              }), FF.approved && (0, kW.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: FF.name
              }), FF.id && (0, kW.jsx)(uF.E, {
                className: "ThumbnailDeleteButton",
                onClick: WF => async function(FF, WF, SF) {
                  FF.stopPropagation();
                  const CF = await AF.NotificationProvider.showCustomPopup({
                      body: FF => (0, kW.jsx)(BF, {
                        thumbnailId: WF,
                        thumbnailName: SF,
                        onClose: WF => {
                          WF && (yW.current = !0), FF()
                        }
                      }),
                      middleScreenPopupClassName: "ThumbnailDeleteConfirmPopup",
                      onClose: eF
                    }).getResult(),
                    uF = yW.current;
                  yW.current = !1, uF && !0 === CF && (tW.current && sF({
                    text: QF("thumbnail:deletingThumbnail"),
                    type: "info"
                  }, !1), OF.b.deleteSchematicThumbnail(rW, WF).then((() => {
                    tW.current && (sF({
                      text: QF("thumbnail:thumbnailDeleted"),
                      type: "success"
                    }, !0), cW.current === WF && jW(null), nF())
                  })).catch((FF => {
                    tW.current && sF({
                      text: FF.errorMessageForUser ? QF(FF.errorMessageForUser, FF.errorMessageTranslationParams) : QF("thumbnail:failedToDeleteThumbnail"),
                      type: "error"
                    }, !0)
                  })))
                }(WF, FF.id, FF.name),
                children: (0, kW.jsx)(RF.e, {
                  name: "trash-can"
                })
              }), !FF.approved && (0, kW.jsx)("div", {
                className: "ThumbnailUnapprovedIcon",
                children: (0, kW.jsx)(RF.e, {
                  name: "hourglass-clock"
                })
              }), !FF.approved && (0, kW.jsxs)("div", {
                className: "ThumbnailGridItemLabel ThumbnailPendingLabel",
                children: [FF.name, (0, kW.jsx)("br", {}), QF("thumbnail:pendingApproval")]
              })]
            }, WF))), (0, kW.jsxs)("div", {
              className: EF()("ThumbnailGridItem ThumbnailUploadTile", {
                ThumbnailUploadTileDisabled: !iW
              }),
              onClick: () => {
                iW && function(FF) {
                  let {
                    schematicId: WF,
                    ownedThumbnailCount: SF,
                    onThumbnailReady: CF,
                    onClose: uF
                  } = FF;
                  AF.NotificationProvider.showCustomPopup({
                    body: FF => (0, kW.jsx)(HF, {
                      schematicId: WF,
                      ownedThumbnailCount: SF,
                      onClose: FF,
                      onThumbnailReady: CF
                    }),
                    middleScreenPopupClassName: "SchematicThumbnailPopup",
                    onClose: uF,
                    unlockPointerKey: "schematicThumbnailUploaderPopup"
                  })
                }({
                  schematicId: hF.schematicId,
                  ownedThumbnailCount: TF.length,
                  onThumbnailReady: wF,
                  onClose: eF
                })
              },
              children: [(0, kW.jsx)(RF.e, {
                name: "plus"
              }), (0, kW.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: QF("thumbnail:uploadThumbnail")
              })]
            })]
          })
        })]
      })
    }

    function UF(FF) {
      let {
        rejectedThumbnails: WF,
        userContext: SF,
        isMountedRef: AF,
        onAcknowledged: hF
      } = FF;
      const {
        t: PF
      } = (0, bW.B)(), [iW, eF] = (0, CF.useState)(!1), [EF, QF] = (0, CF.useState)(!1), rW = function(FF) {
        const WF = new Map;
        for (const SF of FF) {
          const FF = SF.rejectionPolicyId,
            CF = WF.get(FF);
          CF ? CF.push(SF) : WF.set(FF, [SF])
        }
        return WF
      }(WF);
      return (0, kW.jsxs)("div", {
        className: "ThumbnailRejectionNotice",
        children: [(0, kW.jsxs)("div", {
          className: "ThumbnailRejectionNoticeTitle",
          children: [(0, kW.jsx)(RF.e, {
            name: "triangle-exclamation"
          }), " ", PF("thumbnail:thumbnailsRejected"), " ", (0, kW.jsx)(RF.e, {
            name: "triangle-exclamation"
          })]
        }), (0, kW.jsx)("div", {
          className: "ThumbnailRejectionNoticeSubtitle",
          children: PF("thumbnail:thumbnailsRejectedDescription")
        }), (0, kW.jsx)("div", {
          className: "ThumbnailRejectionNoticeList",
          children: [...rW.entries()].map((FF => {
            let [WF, SF] = FF;
            const CF = wF[WF];
            return (0, kW.jsxs)("div", {
              className: "ThumbnailRejectionNoticeGroup",
              children: [(0, kW.jsx)("div", {
                className: "ThumbnailRejectionNoticeItems",
                children: SF.map((FF => (0, kW.jsxs)("div", {
                  className: "ThumbnailRejectionNoticeItem",
                  children: [(0, kW.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemIcon",
                    children: (0, kW.jsx)(RF.e, {
                      name: "image-slash"
                    })
                  }), (0, kW.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemDetails",
                    children: (0, kW.jsx)("div", {
                      className: "ThumbnailRejectionNoticeItemName",
                      children: FF.name
                    })
                  })]
                }, FF.id)))
              }), (0, kW.jsxs)("div", {
                className: "ThumbnailRejectionNoticeGroupReason",
                children: [PF("thumbnail:rejectionReason"), " ", CF ? PF(CF.reason) : WF]
              }), CF && (0, kW.jsx)("ul", {
                className: "ThumbnailRejectionNoticeGroupTips",
                children: CF.tips.map((FF => (0, kW.jsx)("li", {
                  children: PF(FF)
                }, FF)))
              })]
            }, WF)
          }))
        }), (0, kW.jsxs)("label", {
          className: "ThumbnailRejectionNoticeCheckbox",
          children: [(0, kW.jsx)(mW.b, {
            checked: iW,
            onChange: FF => eF(FF.target.checked),
            disabled: EF
          }), (0, kW.jsx)("span", {
            children: PF("thumbnail:haveReadRejectionReasons")
          })]
        }), (0, kW.jsx)(uF.k, {
          onClick: async function() {
            QF(!0);
            const FF = await Promise.allSettled(WF.map((FF => OF.b.deleteSchematicThumbnail(SF, FF.id))));
            if (!AF.current) return;
            const CF = FF.filter((FF => "rejected" === FF.status));
            CF.length > 0 && console.error("Some rejected thumbnails failed to delete:", CF), hF()
          },
          disabled: !iW || EF,
          className: "ThumbnailRejectionNoticeAcceptButton",
          children: EF ? (0, kW.jsx)(dF.c, {}) : PF("general:accept")
        })]
      })
    }

    function BF(FF) {
      let {
        thumbnailId: WF,
        thumbnailName: SF,
        onClose: CF
      } = FF;
      const {
        t: AF
      } = (0, bW.B)();
      return (0, kW.jsxs)("div", {
        className: "ThumbnailDeleteConfirm",
        children: [(0, kW.jsx)("div", {
          className: "ThumbnailDeleteConfirmTitle",
          children: AF("thumbnail:deleteThumbnail")
        }), (0, kW.jsxs)("div", {
          className: "ThumbnailDeleteConfirmImageContainer",
          children: [(0, kW.jsx)("img", {
            className: "ThumbnailDeleteConfirmImage",
            src: `${KF.clientSideServerUrls.s3Url}/customThumbnails/${WF}.jpg`,
            alt: "Thumbnail to delete"
          }), (0, kW.jsx)("div", {
            className: "ThumbnailGridItemLabel",
            children: SF
          })]
        }), (0, kW.jsx)("div", {
          className: "ThumbnailDeleteConfirmSubtitle",
          children: AF("thumbnail:deleteThumbnailConfirmation")
        }), (0, kW.jsxs)("div", {
          className: "ThumbnailDeleteConfirmButtons",
          children: [(0, kW.jsxs)(uF.E, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => CF(!0),
            children: [(0, kW.jsx)(RF.e, {
              name: "trash-can"
            }), " ", AF("general:delete")]
          }), (0, kW.jsx)(uF.f, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => CF(!1),
            children: AF("general:cancel")
          })]
        })]
      })
    }
    var jW = SF(2357),
      vW = SF(3987),
      JF = SF(3989),
      pF = SF(4042);

    function lF(FF) {
      let {
        schematicData: WF,
        setTexturePack: SF,
        initializeTexturePack: AF,
        publishFormEnabled: uF
      } = FF;
      const {
        t: hF
      } = (0, bW.B)(), [dF, PF] = (0, CF.useState)(null), [RF, iW] = (0, CF.useState)(null), [eF, QF] = (0, CF.useState)(!1), rW = (0, xW.d)(), gW = uF && !eF, tW = WF.customTexturePackKey;

      function TF(FF) {
        var WF;
        PF(FF.metaData.id), iW(null !== (WF = FF.metaData.fromFolderName) && void 0 !== WF ? WF : null), (FF.metaData.id !== jW.q.CUSTOM || FF.metaData.fromFolderName) && SF(FF)
      }
      return (0, CF.useEffect)((() => {
        tW && (QF(!0), (0, vW.e)(tW).then((FF => {
          var WF;
          rW.current && (FF ? (PF(FF.metaData.id), iW(null !== (WF = FF.metaData.fromFolderName) && void 0 !== WF ? WF : null), AF(FF)) : console.error(`No texture pack at ${tW}`))
        })).catch((FF => {
          console.error("Error fetching texture pack: ", FF)
        })).finally((() => {
          QF(!1)
        })))
      }), [tW, AF, rW]), (0, kW.jsxs)("div", {
        className: "BloxdForm TexturePackSection",
        children: [(0, kW.jsx)("div", {
          className: "SectionTitle",
          children: hF("customTexturePack:customTexturePack")
        }), (0, kW.jsxs)("div", {
          className: "TexturePackList",
          children: [(0, kW.jsx)("div", {
            className: EF()("TexturePack", {
              Selected: null === dF && !eF,
              Disabled: !gW
            }),
            onClick: () => {
              gW && (PF(null), SF(null), iW(null))
            },
            children: (0, kW.jsx)("div", {
              className: "TexturePackName",
              children: "No Override"
            })
          }), Object.values(jW.q).map((FF => (0, kW.jsx)(JF.d, {
            id: FF,
            isSelected: FF === dF,
            setSelected: TF,
            disabled: !gW
          }, FF)))]
        }), dF === jW.q.CUSTOM && (0, kW.jsx)(pF.e, {
          folderName: RF,
          onTexturePackUpdated: TF,
          disabled: !gW,
          maxFileSizeMb: 25,
          packOwner: "customGame"
        })]
      })
    }
    var FW = SF(4050);

    function WW(FF) {
      var WF;
      let {
        gameCategory: SF,
        setGameCategory: CF,
        disabled: AF
      } = FF;
      const hF = null !== (WF = (0, QF.jb)(SF)) && void 0 !== WF ? WF : "other";
      return (0, kW.jsxs)("div", {
        className: "GameCategoryPicker",
        children: [(0, kW.jsx)(tW.d, {
          label: "worldBuilder:gameCategoryGroup",
          className: "GameCategoryGroup",
          disabled: AF,
          children: (0, kW.jsx)(TF.c, {
            options: QF.ab.map((FF => ({
              value: FF,
              label: QF.Y[FF]
            }))),
            value: hF,
            onChange: FF => {
              FF.value !== hF && CF(QF.U[FF.value][0])
            }
          })
        }), (0, kW.jsx)(tW.d, {
          label: "worldBuilder:gameCategory",
          className: "GameCategory",
          disabled: AF,
          children: (0, kW.jsx)("div", {
            className: "GameCategoryOptions",
            children: QF.U[hF].map((FF => (0, kW.jsx)(uF.N, {
              active: FF === SF,
              onClick: () => {
                CF(FF)
              },
              children: (0, QF.gb)(FF)
            }, FF)))
          })
        })]
      })
    }

    function SW(FF) {
      let {
        editor: WF,
        onClose: SF
      } = FF;
      const {
        t: CF
      } = (0, bW.B)(), {
        schematicData: AF,
        updateSchematicData: uF,
        publishFormEnabled: dF,
        formEnabled: PF
      } = WF;
      return (0, kW.jsxs)(kW.Fragment, {
        children: [(0, kW.jsxs)(qW, {
          icon: "pen-to-square",
          title: CF("worldBuilder:basicsSection"),
          disabled: !PF,
          children: [(0, kW.jsx)(VF, {
            label: CF("general:name"),
            caption: CF("worldBuilder:schematicNameTagsHint"),
            children: (0, kW.jsx)(hF.d, {
              className: "SchematicPageName",
              defaultValue: AF.name,
              onValueChange: FF => uF("name", FF),
              placeholderText: CF("worldBuilder:schematicNamePlaceholder"),
              maxLength: iW.vb
            })
          }), (0, kW.jsx)(VF, {
            label: CF("general:description"),
            children: (0, kW.jsx)(hF.d, {
              className: "SchematicPageDescription",
              useTextarea: !0,
              defaultValue: AF.description,
              onValueChange: FF => uF("description", FF),
              placeholderText: CF("worldBuilder:schematicDescriptionPlaceholder"),
              maxLength: iW.sb
            })
          }), (0, kW.jsx)(WW, {
            gameCategory: AF.gameCategory,
            setGameCategory: FF => uF("gameCategory", FF),
            disabled: !dF
          }), !0 === AF.gamePublished && (0, kW.jsx)(XF, {
            schematicData: AF,
            updateSchematicData: uF,
            publishFormEnabled: dF,
            onClose: function() {
              null === SF || void 0 === SF || SF()
            }
          })]
        }), (0, kW.jsx)(DF, {
          schematicData: AF,
          updateSchematicData: uF,
          publishFormEnabled: dF,
          formEnabled: PF
        }), !0 === AF.gamePublished && (0, kW.jsx)(qW, {
          icon: "palette",
          title: CF("worldBuilder:texturePackSection"),
          disabled: !PF,
          children: (0, kW.jsx)(lF, {
            schematicData: AF,
            setTexturePack: WF.setTexturePack,
            initializeTexturePack: WF.initializeTexturePack,
            publishFormEnabled: dF
          })
        })]
      })
    }

    function CW(FF) {
      let {
        editor: WF
      } = FF;
      const {
        t: SF
      } = (0, bW.B)(), {
        schematicData: CF,
        formEnabled: AF,
        hasUnsavedChanges: hF
      } = WF, iW = AF && hF;
      return (0, kW.jsxs)("footer", {
        className: "SchematicPageFooter",
        children: [AF && hF && (0, kW.jsxs)("div", {
          className: "SchematicPageFooterStatus",
          children: [(0, kW.jsx)("span", {
            className: "SchematicPageFooterStatusDot"
          }), SF("worldBuilder:unsavedChanges")]
        }), (0, kW.jsx)(PF.g, {
          tooltipInner: (0, kW.jsx)("div", {
            className: "SaveButtonTooltip",
            children: SF(AF && !hF ? "worldBuilder:saveChangesNoneDescription" : "worldBuilder:saveChangesDescription")
          }),
          children: (0, kW.jsxs)(uF.e, {
            className: "SaveChangesButton",
            onClick: () => WF.saveSchematic(CF.gamePublished),
            disabled: !iW,
            children: [(0, kW.jsxs)("span", {
              className: AF ? "" : "SaveChangesButtonBodyHidden",
              children: [(0, kW.jsx)(RF.e, {
                name: "wrench"
              }), " ", SF("worldBuilder:saveChanges")]
            }), !AF && (0, kW.jsx)(dF.c, {})]
          })
        })]
      })
    }

    function AW(FF) {
      let {
        schematic: WF,
        onSchematicUpdate: SF,
        onClose: AF,
        inSourceWorld: hF
      } = FF;
      const {
        t: dF
      } = (0, bW.B)();

      function PF() {
        null === AF || void 0 === AF || AF()
      }
      const RF = (0, FW.b)(WF, {
        onNavigateAway: PF,
        inSourceWorld: hF
      });
      return (0, CF.useEffect)((() => {
        null === SF || void 0 === SF || SF(RF.schematicData)
      }), [RF.schematicData, SF]), (0, kW.jsxs)("div", {
        className: "SchematicPage SchematicPagePopupVariant",
        children: [(0, kW.jsxs)("div", {
          className: "SchematicPageBody",
          children: [(0, kW.jsx)(uF.c, {
            onClick: PF,
            children: dF("worldBuilder:back")
          }), (0, kW.jsx)(qW, {
            icon: "rocket-launch",
            title: dF("worldBuilder:actionsSection"),
            disabled: !RF.formEnabled,
            children: (0, kW.jsx)(LF.d, {
              editor: RF
            })
          }), (0, kW.jsx)(SW, {
            editor: RF,
            onClose: PF
          })]
        }), (0, kW.jsx)(CW, {
          editor: RF
        })]
      })
    }

    function uW(FF) {
      let {
        schematic: WF,
        onSchematicUpdate: SF,
        onClose: CF,
        inSourceWorld: uF
      } = FF;
      AF.NotificationProvider.showCustomPopup({
        body: FF => (0, kW.jsx)(AW, {
          schematic: WF,
          onSchematicUpdate: SF,
          onClose: FF,
          inSourceWorld: uF
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: CF,
        unlockPointerKey: "schematicPagePopup"
      })
    }
  },
  3954: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => iW
    });
    var CF = SF(918),
      AF = SF.n(CF),
      uF = SF(1046),
      hF = SF(929),
      bW = SF(1266),
      dF = SF(1198),
      PF = SF(1186),
      RF = SF(971);

    function iW(FF) {
      let {
        editor: WF,
        className: SF
      } = FF;
      const {
        t: CF
      } = (0, uF.B)(), {
        schematicData: iW,
        formEnabled: eF,
        publishFormEnabled: EF
      } = WF, QF = !eF || !EF;
      return (0, RF.jsxs)("div", {
        className: AF()("PublishButtonContainer", SF),
        children: [WF.canEditSourceWorld && (0, RF.jsxs)(bW.e, {
          onClick: WF.editSourceWorld,
          disabled: QF,
          children: [(0, RF.jsx)(hF.e, {
            name: "edit"
          }), " ", CF("worldBuilder:editSourceWorld")]
        }), !iW.gamePublished && (0, RF.jsx)(dF.g, {
          tooltipInner: (0, RF.jsx)("div", {
            className: "PublishButtonTooltip",
            children: CF("worldBuilder:publishAsGameDescription")
          }),
          children: (0, RF.jsxs)(bW.k, {
            onClick: () => WF.saveSchematic(!0),
            disabled: QF,
            children: [(0, RF.jsx)(hF.e, {
              name: "rocket-launch"
            }), " ", CF("worldBuilder:publishAsGame"), " ", (0, RF.jsx)(hF.e, {
              name: "info-circle"
            })]
          })
        }), !0 === iW.gamePublished && (0, RF.jsxs)(RF.Fragment, {
          children: [(0, RF.jsx)(dF.g, {
            tooltipInner: (0, RF.jsx)("div", {
              className: "PublishButtonTooltip",
              children: CF("worldBuilder:unpublishAsGameDescription")
            }),
            children: (0, RF.jsxs)(bW.E, {
              onClick: WF.unpublishSchematic,
              disabled: QF,
              children: [(0, RF.jsx)(hF.e, {
                name: "rocket-launch"
              }), " ", CF("worldBuilder:unpublishAsGame"), " ", (0, RF.jsx)(hF.e, {
                name: "info-circle"
              })]
            })
          }), (0, RF.jsxs)(bW.e, {
            onClick: WF.playGame,
            disabled: QF,
            children: [(0, RF.jsx)(hF.e, {
              name: "joystick"
            }), " ", CF("general:playGame")]
          })]
        }), !eF && (0, RF.jsx)(PF.c, {
          loaderType: "Secondary"
        })]
      })
    }
  },
  3902: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => eF
    });
    var CF = SF(918),
      AF = SF.n(CF),
      uF = SF(929),
      hF = SF(1186),
      bW = SF(2679),
      dF = SF(132),
      PF = SF(2726),
      RF = SF(2716),
      iW = SF(971);

    function eF(FF) {
      let {
        game: WF
      } = FF;
      const SF = (0, dF.l)() ? "large" : "small",
        CF = (0, PF.e)(WF, SF),
        eF = (0, bW.e)(CF),
        EF = void 0 !== eF.blurhash;
      return (0, iW.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [eF.isLoading && !EF && (0, iW.jsx)(hF.c, {
          loaderType: "Secondary"
        }), !eF.failed && (null !== eF.src || EF) && (0, iW.jsx)("div", {
          className: AF()("SchematicImage", RF.j, {
            SchematicImageFadeIn: eF.fadeIn && !EF
          }),
          style: (0, RF.f)(eF),
          children: (0, iW.jsx)(RF.d, {
            image: eF
          })
        }), eF.failed && (0, iW.jsx)("div", {
          className: "SchematicImageError",
          children: (0, iW.jsx)(uF.e, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  3987: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => AF
    });
    var CF = SF(1056);
    async function AF(FF) {
      const WF = await fetch(`${CF.clientSideServerUrls.s3Url}/${FF}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === WF.status || 403 === WF.status) return null;
      if (!WF.ok) throw new Error(`Failed to download the texture pack (${WF.status})`);
      return await WF.json()
    }
  },
  4050: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => gW
    });
    var CF = SF(46),
      AF = SF(1392),
      uF = SF(874),
      hF = SF(138),
      bW = SF(1385),
      dF = SF(11),
      PF = SF(1576),
      RF = SF(1336),
      iW = SF(3649),
      eF = SF(1189),
      EF = SF(996),
      QF = SF(1352);

    function rW(FF, WF) {
      return {
        schematicId: FF.schematicId,
        name: FF.name,
        description: FF.description,
        gamePublished: WF,
        gameCategory: FF.gameCategory,
        defaultGamemode: FF.defaultGamemode,
        voidDeathHeight: FF.voidDeathHeight,
        disableKeepInventory: FF.disableKeepInventory,
        disableTpRequests: FF.disableTpRequests,
        disableLobbySpawn: FF.disableLobbySpawn,
        disableMobs: FF.disableMobs,
        disableSpawnProtection: FF.disableSpawnProtection,
        disableFallDamage: FF.disableFallDamage,
        worldBorder: FF.worldBorder,
        hideLobbyCode: FF.hideLobbyCode,
        enableSmpMarketplace: FF.enableSmpMarketplace,
        enableSurvivalGuns: FF.enableSurvivalGuns,
        enableSpawnReset: FF.enableSpawnReset,
        enableDayNight: FF.enableDayNight,
        persistWorld: FF.persistWorld,
        persistInventory: FF.persistInventory
      }
    }

    function gW(FF) {
      let {
        onNavigateAway: WF,
        inSourceWorld: SF = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const {
        userContext: gW
      } = (0, EF.b)(), tW = (0, QF.useNavigatePreserveSearch)(), [TF, aW] = (0, CF.useState)({
        ...FF
      }), [kW, qW] = (0, CF.useState)("Enter"), [VF, NF] = (0, CF.useState)(void 0), DF = (0, CF.useRef)(rW(FF, FF.gamePublished)), LF = (0, CF.useRef)(void 0), mW = "Enter" === kW, OF = gW.playerHasRank("developer") || gW.playerHasRank("admin") || "Enter" === kW && !1 !== TF.schematicContainsSpawnBlock, xW = void 0 !== VF && VF !== LF.current || JSON.stringify(rW(TF, TF.gamePublished)) !== JSON.stringify(DF.current);

      function ZF(FF, WF) {
        aW((SF => ({
          ...SF,
          [FF]: WF
        })))
      }
      const oF = (0, CF.useCallback)((FF => {
        LF.current = FF, NF(FF)
      }), []);

      function YF(FF) {
        qW("Loading");
        const WF = rW(TF, FF),
          SF = VF !== LF.current ? VF : void 0;
        RF.b.updateSchematic(gW, WF, SF).then((SF => {
          let {
            customTexturePackKey: CF
          } = SF;
          qW("Success"), ZF("customTexturePackKey", CF), DF.current = WF, LF.current = void 0, NF(void 0), setTimeout((() => {
            ZF("gamePublished", FF), qW("Enter")
          }), 1e3)
        })).catch((FF => {
          var WF;
          (console.error("Failed to save schematic:", FF), qW("Error"), FF instanceof hF.c && FF.errorMessageForUser) && eF.NotificationProvider.showAlertPopup({
            title: "worldBuilder:changesNotSaved",
            subtitle: FF.errorMessageForUser,
            textOpts: {
              subtitle: null !== (WF = FF.errorMessageTranslationParams) && void 0 !== WF ? WF : void 0
            },
            confirmText: "general:ok"
          });
          setTimeout((() => {
            qW("Enter")
          }), 1e3)
        }))
      }
      return {
        schematicData: TF,
        updateSchematicData: ZF,
        setTexturePack: NF,
        initializeTexturePack: oF,
        updateState: kW,
        formEnabled: mW,
        publishFormEnabled: OF,
        hasUnsavedChanges: xW,
        canEditSourceWorld: !SF,
        saveSchematic: YF,
        unpublishSchematic: function() {
          eF.NotificationProvider.showPromptPopup({
            icon: "rocket-launch",
            title: "worldBuilder:unpublishAsGameConfirmTitle",
            subtitle: "worldBuilder:unpublishAsGameConfirmSubtitle",
            confirmText: "worldBuilder:unpublishAsGame",
            cancelText: "general:cancel",
            unlockPointerKey: "unpublishGamePrompt"
          }).getResult().then((FF => {
            !0 === FF && YF(!1)
          }))
        },
        editSourceWorld: function() {
          qW("Loading"), iW.d.getSourceWorld(TF.schematicId).then((FF => {
            PF.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, dF.c)("other"), tW((0, AF.c)("classic", FF)), null === WF || void 0 === WF || WF()
          })).catch((FF => {
            console.error("Failed to get source world:", FF), qW("Error"), setTimeout((() => {
              qW("Enter")
            }), 1e3)
          }))
        },
        playGame: function() {
          PF.gameBridge.send("leaveGame", {
            reloadPath: "/"
          }), tW((0, bW.y)((0, uF.s)(TF.schematicId), TF)), null === WF || void 0 === WF || WF()
        }
      }
    }
  },
  4042: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => EF
    });
    var CF = SF(46),
      AF = SF(918),
      uF = SF.n(AF),
      hF = SF(3957),
      bW = SF(1186),
      dF = SF(1046),
      PF = SF(2350),
      RF = SF(2488),
      iW = SF(929),
      eF = SF(971);

    function EF(FF) {
      let {
        folderName: WF,
        onTexturePackUpdated: AF,
        disabled: EF = !1,
        maxFileSizeMb: QF,
        packOwner: rW
      } = FF;
      const {
        t: gW
      } = (0, dF.B)(), [tW, TF] = (0, CF.useState)(!1), [aW, kW] = (0, CF.useState)(null), [qW, VF] = (0, CF.useState)(null), NF = (0, CF.useRef)(null);
      const {
        getRootProps: DF,
        getInputProps: LF,
        isDragActive: mW
      } = (0, hF.c)({
        onDrop: async function(FF) {
          TF(!0);
          try {
            const WF = await (0, PF.r)(FF);
            if ("customGame" === rW && (0, RF.h)(WF)) return void kW(gW(RF.c));
            if (void 0 !== QF) {
              const FF = JSON.stringify(WF).length / 1048576;
              if (FF > QF) return void kW(`File size is too large. Max size is ${QF}MB. Current size is ${FF}MB.`)
            }
            kW(null), VF(null), AF(WF), NF.current = WF,
              function(FF, WF) {
                const CF = FF.modelOverrides;
                CF && Promise.all([SF.e(181), SF.e(180)]).then((() => SF(32956))).then((SF => {
                  let {
                    packDisplayName: AF,
                    refusedPackModels: uF,
                    packModelSummary: hF
                  } = SF;
                  const bW = AF(FF.metaData);
                  WF(hF(bW, uF(bW, CF, !1)))
                })).catch((FF => {
                  console.error("Checking the texture pack's models failed:", FF)
                }))
              }(WF, (FF => {
                NF.current === WF && VF(FF)
              }))
          } catch {
            kW("Invalid Texture Pack Folder")
          } finally {
            TF(!1)
          }
        },
        useFsAccessApi: !1,
        disabled: EF
      });
      return (0, eF.jsxs)("div", {
        className: "CustomTexturePackContainer",
        children: [(0, eF.jsxs)("div", {
          className: "CustomTextureWarning",
          children: [gW("settingsMenu:customTextureWarning"), ".", (0, eF.jsx)("br", {}), gW("settingsMenu:viewDocumentation"), ":", " ", (0, eF.jsx)("a", {
            href: "https://github.com/Bloxdy/texturePacks",
            target: "_blank",
            rel: "noreferrer",
            children: "github.com/Bloxdy/texturePacks"
          })]
        }), aW && (0, eF.jsxs)("div", {
          className: "CustomTextureError",
          children: [gW("general:error"), ": ", aW]
        }), qW && (0, eF.jsx)("div", {
          className: "CustomTextureError",
          children: qW
        }), (0, eF.jsxs)("div", {
          ...DF({
            className: uF()("CustomTextureFolderUpload", {
              ActiveDrag: mW,
              Disabled: EF
            })
          }),
          children: [(0, eF.jsx)("input", {
            ...LF({
              webkitdirectory: "true"
            })
          }), tW && (0, eF.jsx)("div", {
            className: "CustomTextureFolderUploadLoading",
            children: (0, eF.jsx)(bW.c, {})
          }), !tW && !mW && WF && (0, eF.jsxs)(eF.Fragment, {
            children: [(0, eF.jsx)("div", {
              className: "CustomTextureFolderUploadIcon Active",
              children: (0, eF.jsx)(iW.e, {
                name: "folder-image"
              })
            }), (0, eF.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions Active",
              children: WF
            })]
          }), !tW && (mW || !WF) && (0, eF.jsxs)(eF.Fragment, {
            children: [(0, eF.jsx)("div", {
              className: "CustomTextureFolderUploadIcon",
              children: (0, eF.jsx)(iW.e, {
                name: "up-from-bracket"
              })
            }), (0, eF.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions",
              children: "Drag and drop a Texture Pack folder here"
            })]
          })]
        })]
      })
    }
  },
  3997: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => QF,
      f: () => TF,
      j: () => rW,
      k: () => tW
    });
    var CF = SF(46),
      AF = SF(4003),
      uF = SF(3517),
      hF = SF(1198),
      bW = SF(4027),
      dF = SF(918),
      PF = SF.n(dF),
      RF = SF(1189),
      iW = SF(1510),
      eF = SF(4034),
      EF = SF(971);

    function QF(FF) {
      let {
        label: WF,
        onClick: SF,
        checked: CF,
        circleInfoText: AF,
        className: bW,
        disabled: dF
      } = FF;
      return (0, EF.jsx)("div", {
        "aria-disabled": dF || void 0,
        "data-pad-focusable": !0,
        className: PF()("SettingBox CheckboxContainer", {
          [bW]: bW,
          SettingBoxDisabled: dF
        }),
        onClick: () => {
          dF || SF(!CF)
        },
        children: (0, EF.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, EF.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, EF.jsx)(uF.b, {
              className: "SettingsCheckbox",
              checked: CF,
              disabled: dF,
              onChange: () => {}
            })
          }), (0, EF.jsxs)("div", {
            className: "CheckboxText",
            children: [WF, AF && (0, EF.jsx)("span", {
              onClick: FF => FF.stopPropagation(),
              children: (0, EF.jsx)(hF.e, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: AF
              })
            })]
          })]
        })
      })
    }

    function rW(FF) {
      let {
        name: WF,
        onChange: SF,
        min: AF,
        max: uF,
        step: bW,
        initValue: dF,
        circleInfoText: RF,
        format: iW,
        className: eF,
        padStep: QF,
        disabled: rW = !1,
        selectableMax: tW,
        cappedNote: TF
      } = FF;
      const [aW, kW] = (0, CF.useState)(dF);
      (0, CF.useEffect)((() => {
        kW(dF)
      }), [dF]);
      const qW = void 0 !== tW && tW < uF,
        VF = qW ? {
          "--slider-selectable": (tW - AF) / (uF - AF)
        } : void 0;
      return (0, EF.jsxs)("div", {
        className: PF()("SettingBox SettingsSliderDiv", {
          [eF]: eF,
          SettingBoxDisabled: rW,
          SliderCapped: qW
        }),
        style: VF,
        children: [(0, EF.jsxs)("div", {
          className: "SliderText",
          children: [`${WF}: ${iW?iW(aW):aW}`, RF && (0, EF.jsx)(hF.e, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: RF
          })]
        }), (0, EF.jsx)("div", {
          className: "SliderDiv",
          children: (0, EF.jsx)(gW, {
            value: aW,
            min: AF,
            max: uF,
            step: bW,
            onChange: FF => {
              if (qW && FF >= tW && aW === tW) return;
              const WF = qW ? Math.min(FF, tW) : FF;
              kW(WF), SF(WF)
            },
            format: iW,
            padStep: QF,
            disabled: rW
          })
        }), qW && TF && (0, EF.jsx)("div", {
          className: "SliderNote",
          children: TF
        })]
      })
    }

    function gW(FF) {
      var WF;
      let {
        value: SF,
        min: uF,
        max: hF,
        step: bW,
        onChange: dF,
        orientation: PF,
        reverse: RF,
        setIsChanging: iW,
        tooltip: QF,
        labels: rW,
        handleLabel: gW,
        format: tW,
        onChangeStart: TF,
        onChangeComplete: aW,
        padStep: kW,
        disabled: qW = !1
      } = FF;
      const VF = (0, CF.useRef)(null),
        NF = (0, CF.useRef)(null);
      (0, CF.useLayoutEffect)((() => {
        var FF, WF, SF;
        const CF = null !== (FF = null === (WF = VF.current) || void 0 === WF ? void 0 : WF.querySelector(".rangeslider")) && void 0 !== FF ? FF : null;
        null === CF || void 0 === CF || CF.setAttribute("data-pad-slider", ""), null === CF || void 0 === CF || CF.setAttribute("data-pad-focusable", ""), null === CF || void 0 === CF || null === (SF = CF.querySelector(".rangeslider__handle")) || void 0 === SF || SF.setAttribute("data-pad-slider-handle", ""), NF.current = CF
      }), []), (0, CF.useLayoutEffect)((() => {
        var FF, WF;
        qW ? null === (FF = NF.current) || void 0 === FF || FF.setAttribute("aria-disabled", "true") : null === (WF = NF.current) || void 0 === WF || WF.removeAttribute("aria-disabled")
      }), [qW]);
      const DF = (null !== (WF = String(bW).split(".")[1]) && void 0 !== WF ? WF : "").length,
        LF = FF => {
          const WF = Number((Math.round((FF - uF) / bW) * bW + uF).toFixed(DF));
          return Math.min(hF, Math.max(uF, WF))
        },
        mW = (0, CF.useRef)(!1);
      return (0, eF.c)(NF, {
        adjust: FF => {
          if (qW) return;
          const WF = null !== kW && void 0 !== kW ? kW : Math.max(bW, Math.round((hF - uF) / 20 / bW) * bW),
            CF = LF(SF + FF * WF * (RF ? -1 : 1));
          CF !== SF && (null === TF || void 0 === TF || TF(), dF(CF), null === aW || void 0 === aW || aW())
        },
        setFraction: FF => {
          if (qW) return;
          const WF = LF(uF + (RF ? 1 - FF : FF) * (hF - uF));
          WF !== SF && (mW.current || (mW.current = !0, null === TF || void 0 === TF || TF()), dF(WF))
        },
        endDrag: () => {
          mW.current && (mW.current = !1, null === aW || void 0 === aW || aW())
        }
      }), (0, EF.jsx)("div", {
        ref: VF,
        style: {
          display: "contents"
        },
        children: (0, EF.jsx)(AF.c, {
          value: SF,
          min: uF,
          max: hF,
          step: bW,
          onChange: dF,
          orientation: PF,
          reverse: RF,
          tooltip: QF,
          labels: rW,
          handleLabel: gW,
          format: tW,
          onChangeStart: () => {
            null === TF || void 0 === TF || TF(), null === iW || void 0 === iW || iW(!0)
          },
          onChangeComplete: () => {
            null === iW || void 0 === iW || iW(!1), null === aW || void 0 === aW || aW()
          }
        })
      })
    }
    async function tW() {
      const FF = RF.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await FF.getResult() && (0, iW.reloadBloxd)()
    }

    function TF(FF) {
      let {
        label: WF,
        options: SF,
        value: CF,
        onChange: AF,
        circleInfoText: uF
      } = FF;
      return (0, EF.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, EF.jsxs)("div", {
          className: "SliderText",
          children: [WF, uF && (0, EF.jsx)(hF.e, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: uF
          })]
        }), (0, EF.jsx)(bW.b, {
          ariaLabel: WF,
          options: SF,
          value: CF,
          onChange: AF
        })]
      })
    }
  },
  3989: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => QF,
      d: () => rW
    });
    var CF = SF(2350),
      AF = SF(2357),
      uF = SF(46),
      hF = SF(918),
      bW = SF.n(hF),
      dF = SF(1186),
      PF = SF(2344),
      RF = SF(1189),
      iW = SF(3997),
      eF = SF(4042),
      EF = SF(971);

    function QF(FF) {
      var WF;
      let {
        setApplySettingsCallback: SF
      } = FF;
      const [, hF] = (0, uF.useReducer)((FF => FF + 1), 0), bW = (0, uF.useRef)(!1), dF = (0, uF.useRef)(null);

      function QF() {
        dF.current !== PF.e.getId() || PF.e.getId() === AF.q.CUSTOM && bW.current ? SF((() => iW.k)) : SF(null)
      }
      async function gW(FF) {
        if (PF.e.getId() !== FF.metaData.id) {
          if (PF.e.getId() === AF.q.CUSTOM && PF.e.getFromFolderName()) {
            const FF = RF.NotificationProvider.showPromptPopup({
              title: "settingsMenu:loseChangesTitle",
              subtitle: "settingsMenu:loseChangesSubtitle",
              confirmText: "general:continue",
              destructive: !0,
              confirmTooltip: "",
              cancelText: "general:cancel",
              cancelTooltip: ""
            });
            if (!0 !== await FF.getResult()) return
          }
          PF.e.setFromJson(FF, "player"), PF.e.saveTexturePack(), QF(), hF()
        }
      }(0, uF.useEffect)((() => {
        dF.current = PF.e.getId()
      }), []);
      const tW = CF.e,
        TF = [tW, ...Object.values(AF.q).filter((FF => FF !== tW))];
      return (0, EF.jsx)(EF.Fragment, {
        children: (0, EF.jsxs)("div", {
          className: "TexturePackCategory SettingsMenuRightInner",
          children: [(0, EF.jsx)("div", {
            className: "TexturePackList",
            children: TF.map((FF => (0, EF.jsx)(rW, {
              id: FF,
              isSelected: FF === PF.e.getId(),
              setSelected: gW
            }, FF)))
          }), PF.e.getId() === AF.q.CUSTOM && (0, EF.jsx)(eF.e, {
            folderName: null !== (WF = PF.e.getFromFolderName()) && void 0 !== WF ? WF : null,
            onTexturePackUpdated: function(FF) {
              PF.e.setFromJson(FF, "player"), PF.e.saveTexturePack(), bW.current = !0, QF(), hF()
            },
            packOwner: "player"
          })]
        })
      })
    }

    function rW(FF) {
      let {
        id: WF,
        isSelected: SF,
        setSelected: hF,
        disabled: PF = !1
      } = FF;
      const [RF, iW] = (0, uF.useState)(!0), [eF, QF] = (0, uF.useState)(""), [rW, gW] = (0, uF.useState)(""), [tW, TF] = (0, uF.useState)(""), aW = (0, uF.useRef)({});
      return (0, uF.useEffect)((() => {
        (0, CF.p)(WF).then((FF => {
          var WF;
          FF && (aW.current = FF, iW(!1), QF(aW.current.metaData.name), gW(aW.current.metaData.author), TF(null !== (WF = aW.current.metaData.previewImage) && void 0 !== WF ? WF : ""))
        })).catch((FF => {
          console.warn(`Failed to fetch texture pack ${WF}`, FF)
        }))
      }), [WF]), (0, EF.jsxs)("div", {
        "data-pad-focusable": !0,
        "aria-disabled": PF || void 0,
        className: bW()("TexturePack", {
          Selected: SF,
          Custom: WF === AF.q.CUSTOM,
          Disabled: PF
        }),
        onClick: () => {
          RF || PF || hF(aW.current)
        },
        children: [(0, EF.jsx)("div", {
          className: "TexturePackBg",
          style: {
            backgroundImage: tW ? `url(${tW})` : void 0
          }
        }), RF && (0, EF.jsx)("div", {
          className: "TexturePackName",
          children: (0, EF.jsx)(dF.c, {})
        }), !RF && eF && (0, EF.jsx)("div", {
          className: "TexturePackName",
          children: eF
        }), !RF && rW && (0, EF.jsx)("div", {
          className: "TexturePackAuthor",
          children: rW
        })]
      })
    }
  },
  4027: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => hF
    });
    var CF = SF(918),
      AF = SF.n(CF),
      uF = SF(971);

    function hF(FF) {
      let {
        options: WF,
        value: SF,
        onChange: CF,
        ariaLabel: hF
      } = FF;
      return (0, uF.jsx)("div", {
        className: "SegmentedToggle",
        role: "group",
        "aria-label": hF,
        children: WF.map((FF => {
          const WF = FF.value === SF;
          return (0, uF.jsx)("button", {
            type: "button",
            "aria-pressed": WF,
            className: AF()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: WF
            }),
            onClick: () => {
              WF || CF(FF.value)
            },
            children: FF.label
          }, FF.value)
        }))
      })
    }
  },
  4034: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => uF,
      c: () => hF
    });
    var CF = SF(46);
    const AF = new WeakMap,
      uF = FF => {
        var WF;
        const SF = FF.closest("[data-pad-slider]");
        return SF && null !== (WF = AF.get(SF)) && void 0 !== WF ? WF : null
      },
      hF = (FF, WF) => {
        const SF = (0, CF.useRef)(WF);
        SF.current = WF, (0, CF.useEffect)((() => {
          if (FF.current) return ((FF, WF) => (AF.set(FF, WF), () => {
            AF.get(FF) === WF && AF.delete(FF)
          }))(FF.current, {
            adjust: FF => {
              SF.current.adjust(FF)
            },
            setFraction: FF => {
              SF.current.setFraction(FF)
            },
            endDrag: () => {
              SF.current.endDrag()
            }
          })
        }), [FF])
      }
  },
  3951: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => AF,
      d: () => dF,
      e: () => hF,
      h: () => CF,
      j: () => uF,
      l: () => bW
    });
    const CF = ["public", "unlisted", "private"],
      AF = {
        public: "Public",
        unlisted: "Unlisted",
        private: "Private"
      },
      uF = ["survival", "peaceful", "creative", "survivaladventure", "peacefuladventure", "spectator"],
      hF = ["default", "customSchematic"],
      bW = ["default", "flat", "twoDimensions", "skyGrid", "customSchematic"],
      dF = ["global", "perLobby", "none"]
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);