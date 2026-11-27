export const id = 120;
export const ids = [120];
export const modules = {
  5693: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => ZW,
      e: () => tW,
      f: () => xW
    });
    OW(5701);
    var mW = OW(1172),
      EW = OW(1089),
      NW = OW.n(EW),
      PW = OW(1434),
      LW = (OW(62), OW(5041)),
      cW = OW(1391),
      wW = OW(1283);

    function tW(WW) {
      let {
        children: iW,
        label: OW,
        className: EW,
        circleInfoText: LW,
        disabled: tW,
        onLabelClick: ZW
      } = WW;
      const {
        t: xW
      } = (0, mW.B)(), lW = (0, wW.jsxs)("div", {
        className: NW()("Label", {
          ClickableLabel: void 0 !== ZW
        }),
        onClick: ZW,
        children: [xW(OW), LW && (0, wW.jsx)(cW.c, {
          name: "circle-info"
        })]
      });
      return (0, wW.jsxs)("div", {
        className: NW()("LabeledInput", {
          [EW]: EW,
          DisabledLabelInput: tW
        }),
        children: [LW && (0, wW.jsx)(PW.f, {
          tooltipInner: (0, wW.jsx)("div", {
            className: "LabeledInputTooltip",
            children: xW(LW)
          }),
          children: lW
        }), !LW && lW, iW]
      })
    }

    function ZW(WW) {
      let {
        checked: iW,
        setChecked: OW,
        disabled: mW = !1
      } = WW;
      return (0, wW.jsx)("div", {
        className: "OtherInput ClickableOtherInput",
        "data-pad-focusable": !0,
        "aria-disabled": mW || void 0,
        onClick: WW => {
          mW || OW(!iW)
        },
        children: (0, wW.jsx)(LW.e, {
          checked: iW,
          onChange: WW => {
            OW(WW.target.checked)
          },
          disabled: mW
        })
      })
    }

    function xW(WW) {
      let {
        checked: iW,
        setChecked: OW,
        disabled: mW
      } = WW;
      return (0, wW.jsx)("div", {
        className: NW()("SwitchContainer", {
          SwitchContainerDisabled: mW
        }),
        onClick: () => {
          mW || OW(!iW)
        },
        children: (0, wW.jsx)(LW.e, {
          className: "SwitchCheckbox",
          checked: iW,
          onChange: WW => {
            OW(WW.target.checked)
          },
          disabled: !!mW
        })
      })
    }
  },
  5706: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => wW
    });
    var mW = OW(1089),
      EW = OW.n(mW),
      NW = OW(5318),
      PW = OW(1172),
      LW = OW(1283);
    const cW = [...NW.n, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function wW(WW) {
      const {
        disabled: iW,
        hideWrapper: OW
      } = WW, {
        t: mW
      } = (0, PW.B)(), wW = WW.advancedMode ? cW.map((iW => [iW, WW.callbacks[iW]])) : NW.n.map((iW => [iW, WW.callbacks[iW]])), ZW = (0, LW.jsx)("div", {
        className: EW()("PluginsGrid", {
          SectionBody: !OW
        }),
        children: wW.map((WW => {
          let [OW, mW] = WW;
          return (0, LW.jsx)(tW, {
            plugin: OW,
            callbacks: mW,
            disabled: iW
          }, OW)
        }))
      });
      return OW ? ZW : (0, LW.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, LW.jsx)("div", {
          className: "SectionTitle",
          children: mW("worldBuilder:pluginsSection")
        }), ZW]
      })
    }

    function tW(WW) {
      let {
        plugin: iW,
        callbacks: {
          isEnabled: OW,
          WK: mW
        },
        disabled: NW
      } = WW;
      const {
        t: cW
      } = (0, PW.B)(), wW = OW();
      return (0, LW.jsxs)("div", {
        className: EW()("PluginCard", {
          PluginCardEnabled: wW,
          PluginCardDisabledForm: NW
        }),
        "data-pad-focusable": !0,
        "aria-disabled": NW || void 0,
        onClick: () => {
          NW || mW(!wW)
        },
        children: [(0, LW.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, LW.jsx)("img", {
            src: `/textures/games/classic/customGames/${iW}.png`,
            alt: iW
          })
        }), (0, LW.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, LW.jsx)("div", {
            className: "PluginCardTitle",
            children: cW(ZW[iW])
          }), (0, LW.jsx)("div", {
            className: "PluginCardDescription",
            children: cW(xW[iW])
          })]
        }), (0, LW.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: cW(wW ? "general:on" : "general:off")
        })]
      })
    }
    const ZW = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      xW = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  5848: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => wW
    });
    var mW = OW(1089),
      EW = OW.n(mW),
      NW = OW(1172),
      PW = OW(1391),
      LW = OW(1283);

    function cW(WW) {
      let {
        textKey: iW,
        allowed: OW
      } = WW;
      const {
        t: mW
      } = (0, NW.B)();
      return (0, LW.jsxs)("li", {
        className: EW()("PolicyListItem", OW ? "Allowed" : "NotAllowed"),
        children: [(0, LW.jsx)(PW.c, {
          name: OW ? "check" : "x"
        }), (0, LW.jsx)("span", {
          children: mW(iW)
        })]
      })
    }

    function wW(WW) {
      let {
        allowed: iW,
        notAllowed: OW
      } = WW;
      return (0, LW.jsxs)("ul", {
        className: "PolicyList",
        children: [iW.map((WW => (0, LW.jsx)(cW, {
          textKey: WW,
          allowed: !0
        }, WW))), OW.map((WW => (0, LW.jsx)(cW, {
          textKey: WW,
          allowed: !1
        }, WW)))]
      })
    }
  },
  5839: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => MW,
      e: () => KW
    });
    var mW = OW(62),
      EW = OW(1089),
      NW = OW.n(EW),
      PW = OW(80),
      LW = OW(2953),
      cW = OW(1172),
      wW = OW(5693),
      tW = OW(1391),
      ZW = OW(1427),
      xW = OW(1532),
      lW = OW(5277),
      AW = OW(5848),
      bW = OW(1283);

    function jW(WW) {
      return (0, PW.createPortal)((0, bW.jsx)(ZW.d, {
        ...WW
      }), document.body)
    }
    const UW = LW.y.map((WW => `worldBuilder:publishingPolicy_${WW}`)),
      kW = Object.keys(LW.z).map((WW => `worldBuilder:publishingPolicy_${WW}`));

    function sW(WW) {
      let {
        onScrolledToEnd: iW
      } = WW;
      const OW = (0, mW.useRef)(null),
        {
          after: EW
        } = (0, lW.d)(OW, "y");
      return (0, mW.useEffect)((() => {
        EW || null === iW || void 0 === iW || iW()
      }), [EW, iW]), (0, bW.jsx)("div", {
        ref: OW,
        className: NW()("PublishingPolicyRows", {
          PublishingPolicyRowsMoreBelow: EW
        }),
        tabIndex: 0,
        "data-pad-focusable": !0,
        children: (0, bW.jsx)(AW.c, {
          allowed: UW,
          notAllowed: kW
        })
      })
    }

    function MW(WW) {
      let {
        onAnswer: iW
      } = WW;
      const [OW, EW] = (0, mW.useState)(!1), [NW, PW] = (0, mW.useState)(!1), LW = (0, mW.useCallback)((() => {
        PW(!0)
      }), []);
      return (0, bW.jsx)(jW, {
        close: () => {
          iW(!1)
        },
        disableExitButton: !0,
        body: (0, bW.jsxs)(ZW.i, {
          className: "PublishingPolicyPopup",
          title: "worldBuilder:publishingPolicy",
          padStartsOn: "content",
          confirm: {
            text: "worldBuilder:publishAsGame",
            disabled: !OW,
            onClick: () => {
              iW(!0)
            }
          },
          cancel: {
            text: "general:cancel",
            onClick: () => {
              iW(!1)
            }
          },
          children: [(0, bW.jsx)(sW, {
            onScrolledToEnd: LW
          }), (0, bW.jsx)(wW.e, {
            className: "PublishingPolicyAgree",
            label: NW ? "worldBuilder:agreeToPublishingPolicy" : "worldBuilder:scrollToAgreeToPublishingPolicy",
            disabled: !NW,
            onLabelClick: () => {
              EW(!OW)
            },
            children: (0, bW.jsx)(wW.d, {
              checked: OW,
              setChecked: EW,
              disabled: !NW
            })
          })]
        })
      })
    }

    function KW() {
      const {
        t: WW
      } = (0, cW.B)(), [iW, OW] = (0, mW.useState)(!1);
      return (0, bW.jsxs)(bW.Fragment, {
        children: [(0, bW.jsxs)(xW.Z, {
          className: "PublishingPolicyLink",
          onClick: () => {
            OW(!0)
          },
          children: [(0, bW.jsx)(tW.c, {
            name: "shield-halved"
          }), " ", WW("worldBuilder:publishingPolicy")]
        }), iW && (0, bW.jsx)(jW, {
          close: () => {
            OW(!1)
          },
          body: (0, bW.jsx)(ZW.i, {
            className: "PublishingPolicyPopup",
            title: "worldBuilder:publishingPolicy",
            children: (0, bW.jsx)(sW, {})
          })
        })]
      })
    }
  },
  5686: (WW, iW, OW) => {
    OW.d(iW, {
      h: () => xi,
      d: () => Zi,
      g: () => ti,
      j: () => li
    });
    var mW = OW(62),
      EW = OW(1422),
      NW = OW(1532),
      PW = OW(1782),
      LW = OW(1172),
      cW = OW(1383),
      wW = OW(1434),
      tW = OW(1391),
      ZW = OW(1217),
      xW = OW(1089),
      lW = OW.n(xW),
      AW = OW(327),
      bW = OW(5318),
      jW = OW(5713),
      UW = OW(1230),
      kW = OW(5693),
      sW = OW(4292),
      MW = OW(5706),
      KW = OW(1283);

    function SW(WW) {
      let {
        icon: iW,
        title: OW,
        disabled: mW,
        children: EW
      } = WW;
      return (0, KW.jsxs)("div", {
        className: lW()("ManageCard", {
          ManageCardDisabled: mW
        }),
        children: [(0, KW.jsxs)("div", {
          className: "ManageCardHead",
          children: [(0, KW.jsx)("div", {
            className: "ManageCardIcon",
            children: (0, KW.jsx)(tW.c, {
              name: iW
            })
          }), (0, KW.jsx)("div", {
            children: (0, KW.jsx)("h2", {
              className: "ManageCardTitle",
              children: OW
            })
          })]
        }), (0, KW.jsxs)("div", {
          className: "ManageCardBody",
          children: [EW, mW && (0, KW.jsx)("div", {
            className: "ManageCardDisabledOverlay"
          })]
        })]
      })
    }

    function YW(WW) {
      let {
        label: iW,
        caption: OW,
        children: mW
      } = WW;
      return (0, KW.jsxs)("div", {
        className: "ManageStackedField",
        children: [(0, KW.jsx)("div", {
          className: "ManageStackedFieldLabel",
          children: iW
        }), mW, OW && (0, KW.jsx)("div", {
          className: "ManageStackedFieldCaption",
          children: OW
        })]
      })
    }

    function yW(WW) {
      let {
        label: iW,
        caption: OW,
        disabled: mW,
        children: EW
      } = WW;
      return (0, KW.jsxs)("div", {
        className: lW()("ManageField", {
          ManageFieldDisabled: mW
        }),
        children: [(0, KW.jsxs)("div", {
          className: "ManageFieldText",
          children: [(0, KW.jsx)("div", {
            className: "ManageFieldLabel",
            children: iW
          }), (0, KW.jsx)("div", {
            className: "ManageFieldCaption",
            children: OW
          })]
        }), (0, KW.jsx)("div", {
          className: "ManageFieldControl",
          children: EW
        })]
      })
    }

    function TW(WW) {
      var iW, OW;
      let {
        schematicData: mW,
        updateSchematicData: EW,
        publishFormEnabled: NW,
        formEnabled: PW
      } = WW;
      const {
        t: cW
      } = (0, LW.B)(), wW = !NW, tW = {
        tpRequests: {
          isEnabled: () => !mW.disableTpRequests,
          WK: WW => EW("disableTpRequests", !WW)
        },
        spawnProtection: {
          isEnabled: () => !mW.disableSpawnProtection,
          WK: WW => EW("disableSpawnProtection", !WW)
        },
        spawnReset: {
          isEnabled: () => !!mW.enableSpawnReset,
          WK: WW => EW("enableSpawnReset", WW)
        },
        smpMarketplace: {
          isEnabled: () => !!mW.enableSmpMarketplace,
          WK: WW => EW("enableSmpMarketplace", WW)
        },
        survivalGuns: {
          isEnabled: () => !!mW.enableSurvivalGuns,
          WK: WW => EW("enableSurvivalGuns", WW)
        },
        fallDamage: {
          isEnabled: () => !mW.disableFallDamage,
          WK: WW => EW("disableFallDamage", !WW)
        },
        dayNight: {
          isEnabled: () => !!mW.enableDayNight,
          WK: WW => EW("enableDayNight", WW)
        }
      };
      return (0, KW.jsxs)(KW.Fragment, {
        children: [!1 === mW.schematicContainsSpawnBlock && (0, KW.jsx)("div", {
          className: "ManageWarningBanner",
          children: cW("worldBuilder:mustContainSpawnBlock")
        }), (0, KW.jsxs)("div", {
          className: "ManageSettingsGrid",
          children: [(0, KW.jsxs)(SW, {
            icon: "globe",
            title: cW("worldBuilder:worldRulesSection"),
            disabled: !PW,
            children: [(0, KW.jsx)(yW, {
              label: cW("classic:defaultGamemode"),
              caption: cW("classic:defaultGamemodeDescription"),
              disabled: wW,
              children: (0, KW.jsx)(sW.e, {
                controlClassName: "ManageDropdown",
                options: bW.M.map((WW => ({
                  value: WW,
                  label: AW.p[WW]
                }))),
                value: mW.defaultGamemode,
                onChange: WW => EW("defaultGamemode", WW.value)
              })
            }), (0, KW.jsx)(yW, {
              label: cW("classic:voidDeathHeight"),
              caption: cW("classic:voidDeathHeightDescription"),
              disabled: wW,
              children: (0, KW.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, KW.jsx)("input", {
                  type: "number",
                  max: UW.v,
                  value: null !== (iW = mW.voidDeathHeight) && void 0 !== iW ? iW : "",
                  onChange: WW => {
                    const iW = parseInt(WW.target.value);
                    EW("voidDeathHeight", iW)
                  }
                }), (0, KW.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: cW("worldBuilder:blocksUnit")
                })]
              })
            }), (0, KW.jsx)(yW, {
              label: cW("classic:worldBorder"),
              caption: cW("classic:worldBorderDescription"),
              disabled: wW,
              children: (0, KW.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, KW.jsx)("input", {
                  type: "number",
                  min: UW.D,
                  max: UW.z,
                  placeholder: cW("worldBuilder:noWorldBorderLimit"),
                  value: null !== (OW = mW.worldBorder) && void 0 !== OW ? OW : "",
                  onChange: WW => {
                    const iW = parseInt(WW.target.value);
                    EW("worldBorder", isNaN(iW) ? null : iW)
                  }
                }), (0, KW.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: cW("worldBuilder:blocksUnit")
                })]
              })
            }), (0, KW.jsx)(yW, {
              label: cW("classic:disableMobs"),
              caption: cW("classic:disableMobsDescription"),
              disabled: wW,
              children: (0, KW.jsx)(kW.f, {
                checked: mW.disableMobs,
                setChecked: WW => EW("disableMobs", WW),
                disabled: wW
              })
            })]
          }), (0, KW.jsxs)(SW, {
            icon: "user-group",
            title: cW("worldBuilder:playerAndLobbySection"),
            disabled: !PW,
            children: [(0, KW.jsx)(yW, {
              label: cW("classic:disableKeepInventory"),
              caption: cW("classic:disableKeepInventoryDescription"),
              disabled: wW,
              children: (0, KW.jsx)(kW.f, {
                checked: mW.disableKeepInventory,
                setChecked: WW => EW("disableKeepInventory", WW),
                disabled: wW
              })
            }), (0, KW.jsx)(yW, {
              label: cW("classic:persistInventory"),
              caption: cW("classic:persistInventoryDescription"),
              disabled: wW,
              children: (0, KW.jsx)(sW.e, {
                controlClassName: "ManageDropdown",
                options: bW.r.map((WW => ({
                  value: WW,
                  label: AW.g[WW]
                }))),
                value: mW.persistInventory,
                onChange: WW => EW("persistInventory", WW.value)
              })
            }), (0, KW.jsx)(yW, {
              label: cW("classic:persistWorld"),
              caption: cW("classic:persistWorldDescription"),
              disabled: wW,
              children: (0, KW.jsx)(kW.f, {
                checked: mW.persistWorld,
                setChecked: WW => EW("persistWorld", WW),
                disabled: wW
              })
            }), jW.d && mW.persistWorld && (0, KW.jsx)(yW, {
              label: cW("classic:fluidFlow"),
              caption: cW("classic:fluidFlowDescription"),
              disabled: wW,
              children: (0, KW.jsx)(kW.f, {
                checked: mW.enableFluidFlow,
                setChecked: WW => EW("enableFluidFlow", WW),
                disabled: wW
              })
            }), (0, KW.jsx)(yW, {
              label: cW("classic:disableLobbySpawn"),
              caption: cW("classic:disableLobbySpawnDescription"),
              disabled: wW,
              children: (0, KW.jsx)(kW.f, {
                checked: mW.disableLobbySpawn,
                setChecked: WW => EW("disableLobbySpawn", WW),
                disabled: wW
              })
            }), (0, KW.jsx)(yW, {
              label: cW("classic:hideLobbyCode"),
              caption: cW("classic:hideLobbyCodeDescription"),
              disabled: wW,
              children: (0, KW.jsx)(kW.f, {
                checked: mW.hideLobbyCode,
                setChecked: WW => EW("hideLobbyCode", WW),
                disabled: wW
              })
            })]
          })]
        }), (0, KW.jsx)(SW, {
          icon: "layer-group",
          title: cW("worldBuilder:pluginsSection"),
          disabled: !PW,
          children: (0, KW.jsx)(MW.b, {
            callbacks: tW,
            disabled: wW,
            advancedMode: !0,
            hideWrapper: !0
          })
        })]
      })
    }
    var JW = OW(5832),
      hW = OW(1673),
      HW = OW(1584),
      nW = OW(4723),
      uW = OW(1107),
      oW = OW(5668),
      dW = OW(5864),
      eW = OW(1536),
      vW = OW(5856),
      gW = OW(5848);
    const DW = 50,
      VW = .3;
    async function pW(WW) {
      const iW = await
      function(WW) {
        return new Promise(((iW, OW) => {
          const mW = new FileReader;
          mW.onload = () => iW(mW.result), mW.onerror = OW, mW.readAsDataURL(WW)
        }))
      }(WW), OW = await
      function(WW) {
        return new Promise(((iW, OW) => {
          const mW = new Image;
          mW.onload = () => iW(mW), mW.onerror = () => OW(new Error("Failed to load image")), mW.src = WW
        }))
      }(iW);
      if (OW.naturalHeight > OW.naturalWidth) throw new fW;
      const mW = 1024 * DW,
        {
          dataUrl: EW,
          finalQuality: NW
        } = function(WW, iW) {
          const OW = document.createElement("canvas");
          OW.width = WW.naturalWidth, OW.height = WW.naturalHeight, OW.getContext("2d").drawImage(WW, 0, 0);
          let mW = .92,
            EW = OW.toDataURL("image/jpeg", mW);
          for (; .75 * EW.length > iW && mW > .05;) mW -= .05, EW = OW.toDataURL("image/jpeg", mW);
          return {
            dataUrl: EW,
            finalQuality: mW
          }
        }(OW, mW);
      if (Math.ceil(.75 * EW.length) > mW) throw new CW;
      return {
        base64Jpg: EW,
        heavilyCompressed: NW < VW
      }
    }
    class fW extends Error {}
    class CW extends Error {}

    function XW(WW) {
      var iW;
      let {
        schematicId: OW,
        hasReadUploadPolicy: EW,
        onPolicyValidationError: cW,
        onThumbnailReady: wW
      } = WW;
      const {
        t: xW
      } = (0, LW.B)(), [AW, bW] = (0, mW.useState)(null), [jW, UW] = (0, mW.useState)(""), [kW, sW] = (0, mW.useState)(""), [MW, SW] = (0, mW.useState)(!0), [YW, yW] = (0, mW.useState)(!1), TW = (0, mW.useRef)(!1), [JW, hW] = (0, mW.useState)(null), [HW, nW] = (0, mW.useState)(!1), [uW, oW] = (0, mW.useState)(!1), eW = (0, mW.useRef)(0), {
        getRootProps: vW,
        getInputProps: gW,
        isDragActive: DW
      } = (0, dW.e)({
        accept: {
          "image/*": [".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp"]
        },
        multiple: !1,
        onDrop: async WW => {
          if (0 === WW.length) return;
          const iW = WW[0],
            OW = ++eW.current;
          hW(null), nW(!1), bW(null), UW(iW.name);
          try {
            const WW = await pW(iW);
            if (OW !== eW.current) return;
            bW(WW), nW(WW.heavilyCompressed)
          } catch (mW) {
            if (OW !== eW.current) return;
            hW(xW(mW instanceof fW ? "thumbnail:portraitImagesNotAllowed" : mW instanceof CW ? "thumbnail:couldNotCompressImage" : "thumbnail:failedToUploadImage"))
          }
        },
        useFsAccessApi: !1
      }), VW = jW.length <= 30 ? jW : `${jW.slice(0,27)}...`, XW = null !== (iW = null === AW || void 0 === AW ? void 0 : AW.base64Jpg) && void 0 !== iW ? iW : null, BW = kW.trim(), qW = BW.length >= ZW.o && BW.length <= ZW.n, RW = uW && !AW && !JW, GW = uW && !qW;
      return (0, KW.jsxs)("div", {
        className: "ThumbnailUploadContainer",
        children: [(0, KW.jsxs)("div", {
          ...vW({
            className: lW()("ThumbnailUploadDropzone", {
              ActiveDrag: DW,
              ValidationError: RW
            })
          }),
          children: [(0, KW.jsx)("input", {
            ...gW()
          }), !DW && XW ? (0, KW.jsxs)(KW.Fragment, {
            children: [(0, KW.jsxs)("div", {
              className: "ThumbnailAspectPreviews",
              children: [(0, KW.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, KW.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "1:1"
                }), (0, KW.jsx)("div", {
                  className: "ThumbnailAspectFrame Square",
                  children: (0, KW.jsx)("img", {
                    src: XW,
                    alt: "1:1 preview"
                  })
                })]
              }), (0, KW.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, KW.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "16:9"
                }), (0, KW.jsx)("div", {
                  className: "ThumbnailAspectFrame Wide",
                  children: (0, KW.jsx)("img", {
                    src: XW,
                    alt: "16:9 preview"
                  })
                })]
              })]
            }), (0, KW.jsxs)("div", {
              children: [(0, KW.jsx)("div", {
                className: "ThumbnailUploadInstructions Active",
                children: VW
              }), (0, KW.jsx)("div", {
                className: "ThumbnailUploadInstructions Preview",
                children: xW("thumbnail:preview")
              })]
            })]
          }) : (0, KW.jsxs)(KW.Fragment, {
            children: [(0, KW.jsx)("div", {
              className: "ThumbnailUploadIcon",
              children: (0, KW.jsx)(tW.c, {
                name: "image"
              })
            }), (0, KW.jsx)("div", {
              className: "ThumbnailUploadInstructions",
              children: xW("thumbnail:dragImageHere")
            })]
          })]
        }), RW && (0, KW.jsx)("div", {
          className: "ThumbnailUploadError",
          children: xW("thumbnail:imageRequired")
        }), (0, KW.jsx)(PW.b, {
          className: lW()("ThumbnailUploadNameInput", {
            ValidationError: GW
          }),
          placeholderText: xW("thumbnail:thumbnailName"),
          defaultValue: kW,
          onValueChange: WW => {
            sW(WW)
          },
          maxLength: ZW.n
        }), GW && (0, KW.jsx)("div", {
          className: "ThumbnailUploadError",
          children: xW("thumbnail:nameRequired", {
            min: ZW.o,
            max: ZW.n
          })
        }), (0, KW.jsxs)("label", {
          className: "ThumbnailUploadCheckbox",
          children: [(0, KW.jsx)("input", {
            type: "checkbox",
            checked: MW,
            onChange: WW => {
              SW(WW.target.checked)
            }
          }), xW("thumbnail:setAsThumbnailOnceApproved")]
        }), HW && (0, KW.jsx)("div", {
          className: "ThumbnailUploadWarning",
          children: xW("thumbnail:heavyCompressionWarning")
        }), JW && (0, KW.jsx)("div", {
          className: "ThumbnailUploadError",
          children: JW
        }), (0, KW.jsx)(NW.n, {
          disabled: YW,
          className: "ThumbnailUploadButton",
          onClick: async () => {
            if (oW(!0), !TW.current && AW && qW && EW) {
              TW.current = !0, yW(!0), hW(null);
              try {
                await wW(AW.base64Jpg, BW, MW ? OW : null)
              } catch (WW) {
                hW(WW.errorMessageForUser ? xW(WW.errorMessageForUser, WW.errorMessageTranslationParams) : xW("thumbnail:failedToUploadImage"))
              } finally {
                TW.current = !1, yW(!1)
              }
            } else EW || cW()
          },
          children: xW(YW ? "thumbnail:processing" : "thumbnail:uploadThumbnail")
        })]
      })
    }
    const BW = 2e3;

    function qW(WW) {
      let {
        schematicId: iW,
        ownedThumbnailCount: OW,
        onClose: EW,
        onThumbnailReady: NW
      } = WW;
      const {
        t: PW
      } = (0, LW.B)(), {
        userContext: wW
      } = (0, uW.e)(), [xW, AW] = (0, mW.useState)(!1), [bW, jW] = (0, mW.useState)(!1), [UW, kW] = (0, mW.useState)(!1), sW = (0, mW.useRef)(), {
        loading: MW,
        eligibility: SW
      } = (0, vW.b)(), YW = (0, vW.e)();
      (0, mW.useEffect)((() => () => {
        clearTimeout(sW.current)
      }), []);
      const yW = [];
      wW.isLoggedIn() || yW.push(PW("thumbnail:mustBeLoggedInToUpload")), OW >= ZW.bb && yW.push(PW("thumbnail:thumbnailLimitReachedPleaseDelete", {
        max: ZW.bb
      }));
      const TW = null === SW || void 0 === SW ? void 0 : SW.thumbnailUploadWait;
      if (TW && yW.push(YW("accountAge" === TW.reason ? "thumbnail:accountTooNewUntil" : "thumbnail:uploadCooldownUntil", TW.until)), !xW && yW.length > 0) return (0, KW.jsxs)("div", {
        className: "ThumbnailUploaderInner",
        children: [(0, KW.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: PW("thumbnail:cannotUploadThumbnail")
        }), yW.map((WW => (0, KW.jsxs)("div", {
          className: "CannotUploadThumbnailItem",
          children: [(0, KW.jsx)(tW.c, {
            name: "triangle-exclamation"
          }), (0, KW.jsx)("span", {
            children: WW
          })]
        }, WW)))]
      });
      if (MW) return (0, KW.jsx)("div", {
        className: "ThumbnailUploaderInner",
        children: (0, KW.jsx)(cW.d, {})
      });
      return (0, KW.jsxs)("div", {
        className: lW()("ThumbnailUploaderInner", {
          ThumbnailUploaderSuccess: xW
        }),
        children: [xW && (0, KW.jsxs)("div", {
          className: "ThumbnailUploadSuccessOverlay",
          children: [(0, KW.jsxs)("div", {
            className: "ThumbnailUploadSuccessIcon FullyFancyText AnimFadeInScaleUp",
            children: [(0, KW.jsx)(tW.c, {
              name: "check"
            }), (0, KW.jsx)(eW.d, {})]
          }), (0, KW.jsx)("div", {
            className: "ThumbnailUploadSuccessText AnimFadeInScaleUp",
            children: PW("thumbnail:thumbnailUploaded")
          })]
        }), (0, KW.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: PW("thumbnail:uploadThumbnail")
        }), (0, KW.jsxs)("div", {
          className: "ThumbnailUploaderBody",
          children: [(0, KW.jsxs)("div", {
            className: "ThumbnailUploaderLeft",
            children: [(0, KW.jsx)("h3", {
              className: "SchematicPopupSubtitle",
              children: PW("thumbnail:chooseImage", {
                maxSizeKb: DW
              })
            }), (0, KW.jsx)(XW, {
              schematicId: iW,
              hasReadUploadPolicy: bW,
              onPolicyValidationError: () => {
                kW(!0)
              },
              onThumbnailReady: async (WW, iW, OW) => {
                await NW(WW, iW, OW), AW(!0), sW.current = setTimeout(EW, BW)
              }
            })]
          }), (0, KW.jsxs)("div", {
            className: "ThumbnailUploadPolicy",
            children: [(0, KW.jsx)("h3", {
              className: "ThumbnailUploadPolicyTitle",
              children: PW("thumbnail:uploadPolicy")
            }), (0, KW.jsx)(gW.c, {
              allowed: ["thumbnail:policyFollowGuidelines", "thumbnail:policyInGameAssets", "thumbnail:policyLimitText"],
              notAllowed: ["thumbnail:policyCopyrightContent", "thumbnail:policyOutOfGameAssets", "thumbnail:policyBloxdTags", "thumbnail:policyMustReflectGame"]
            }), (0, KW.jsxs)("label", {
              className: lW()("ThumbnailUploadCheckbox Policy", {
                ValidationError: UW && !bW
              }),
              children: [(0, KW.jsx)("input", {
                type: "checkbox",
                checked: bW,
                onChange: WW => {
                  jW(WW.target.checked)
                }
              }), PW("thumbnail:agreeToUploadPolicy")]
            }), UW && !bW && (0, KW.jsx)("div", {
              className: "ThumbnailPolicyError",
              children: PW("thumbnail:policyRequired")
            })]
          })]
        })]
      })
    }

    function RW(WW) {
      let {
        imageUrl: iW,
        thumbnailName: OW,
        onClose: mW
      } = WW;
      const {
        t: EW
      } = (0, LW.B)();
      return (0, KW.jsxs)("div", {
        className: "ThumbnailDeleteConfirm",
        children: [(0, KW.jsx)("div", {
          className: "ThumbnailDeleteConfirmTitle",
          children: EW("thumbnail:deleteThumbnail")
        }), (0, KW.jsxs)("div", {
          className: "ThumbnailDeleteConfirmImageContainer",
          children: [null !== iW && (0, KW.jsx)("img", {
            className: "ThumbnailDeleteConfirmImage",
            src: iW,
            alt: OW
          }), (0, KW.jsx)("div", {
            className: "ThumbnailGridItemLabel",
            children: OW
          })]
        }), (0, KW.jsx)("div", {
          className: "ThumbnailDeleteConfirmSubtitle",
          children: EW("thumbnail:deleteThumbnailConfirmation")
        }), (0, KW.jsxs)("div", {
          className: "ThumbnailDeleteConfirmButtons",
          children: [(0, KW.jsxs)(NW.O, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => mW(!0),
            children: [(0, KW.jsx)(tW.c, {
              name: "trash-can"
            }), " ", EW("general:delete")]
          }), (0, KW.jsx)(NW.h, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => mW(!1),
            children: EW("general:cancel")
          })]
        })]
      })
    }
    var GW = OW(192);
    const IW = ["thumbnail:policyFollowGuidelines"],
      aW = {
        "custom-game-bad-thumbnail": {
          policyRows: ["thumbnail:rejectionBreaksUploadPolicy"],
          example: null,
          fix: "thumbnail:rejectionBadThumbnailFix"
        },
        "thumbnail-random-irrelevant-content": {
          policyRows: ["thumbnail:policyMustReflectGame"],
          example: "thumbnail:rejectionIrrelevantExample",
          fix: "thumbnail:rejectionIrrelevantFix"
        },
        "thumbnail-copyright-content": {
          policyRows: ["thumbnail:policyCopyrightContent"],
          example: "thumbnail:rejectionCopyrightExample",
          fix: "thumbnail:rejectionCopyrightFix"
        },
        "thumbnail-unauthorized-bloxd-branding": {
          policyRows: ["thumbnail:policyOutOfGameAssets", "thumbnail:policyBloxdTags"],
          example: "thumbnail:rejectionUnauthorisedBrandingExample",
          fix: "thumbnail:rejectionUnauthorisedBrandingFix"
        },
        "thumbnail-sexual-content": {
          policyRows: IW,
          example: "thumbnail:rejectionSexualExample",
          fix: "thumbnail:rejectionSexualFix"
        },
        "thumbnail-substances-content": {
          policyRows: IW,
          example: "thumbnail:rejectionSubstancesExample",
          fix: "thumbnail:rejectionSubstancesFix"
        },
        "thumbnail-violent-gore-content": {
          policyRows: IW,
          example: "thumbnail:rejectionViolenceExample",
          fix: "thumbnail:rejectionViolenceFix"
        }
      };

    function rW(WW) {
      let {
        rejectedThumbnails: iW,
        isAcknowledging: OW,
        onAcknowledge: mW
      } = WW;
      const {
        t: EW
      } = (0, LW.B)();
      return (0, KW.jsxs)("div", {
        className: "ManageWarningBanner ThumbnailRejectionNotice",
        children: [(0, KW.jsx)("div", {
          className: "ThumbnailRejectionNoticeTitle",
          children: EW("thumbnail:rejectedByModerators")
        }), iW.map((WW => (0, KW.jsx)(zW, {
          rejected: WW
        }, WW.thumbnail.id))), (0, KW.jsx)(NW.n, {
          className: "ThumbnailRejectionNoticeButton",
          onClick: mW,
          disabled: OW,
          children: OW ? (0, KW.jsx)(cW.d, {}) : EW("thumbnail:gotIt")
        })]
      })
    }

    function zW(WW) {
      var iW;
      let {
        rejected: {
          thumbnail: OW,
          rejection: mW
        }
      } = WW;
      const {
        t: EW
      } = (0, LW.B)(), NW = null !== (iW = (0, GW.c)(aW, mW.policyId)) && void 0 !== iW ? iW : aW["custom-game-bad-thumbnail"], PW = new Date(mW.at).toLocaleDateString();
      return (0, KW.jsxs)("div", {
        className: "RejectedThumbnail",
        children: [(0, KW.jsxs)("div", {
          className: "RejectedThumbnailImage",
          children: [null !== OW.preview && (0, KW.jsx)("img", {
            src: OW.preview,
            alt: OW.name
          }), null === OW.preview && (0, KW.jsx)(tW.c, {
            name: "image-slash"
          })]
        }), (0, KW.jsxs)("div", {
          className: "RejectedThumbnailDetails",
          children: [(0, KW.jsx)("div", {
            className: "RejectedThumbnailName",
            children: OW.name
          }), (0, KW.jsx)("div", {
            children: null !== mW.gameName ? EW("thumbnail:rejectedGameAndDate", {
              game: mW.gameName,
              date: PW
            }) : PW
          }), null !== mW.reason && (0, KW.jsx)("div", {
            children: EW("creatorModeration:moderatorNote", {
              reason: mW.reason
            })
          }), NW.policyRows.length > 0 && (0, KW.jsx)("ul", {
            className: "RejectedThumbnailPolicyRows",
            children: NW.policyRows.map((WW => (0, KW.jsxs)("li", {
              children: [(0, KW.jsx)(tW.c, {
                name: "x"
              }), (0, KW.jsx)("span", {
                children: EW(WW)
              })]
            }, WW)))
          }), (0, KW.jsxs)("div", {
            children: [null !== NW.example && null === mW.reason && `${EW(NW.example)} `, EW(NW.fix)]
          })]
        })]
      })
    }
    var FW = OW(1185);

    function QW(WW) {
      return null !== WW.preview ? WW.preview : WW.approved ? `${FW.clientSideServerUrls.s3Url}/${(0,hW.h)(WW.id)}` : null
    }

    function Wi(WW) {
      return null !== WW.pendingKey ? {
        pendingKey: WW.pendingKey
      } : {
        thumbnailId: WW.id
      }
    }

    function ii(WW) {
      var iW, OW;
      let {
        schematicData: PW,
        updateSchematicData: wW,
        publishFormEnabled: ZW,
        onClose: xW
      } = WW;
      const {
        t: AW
      } = (0, LW.B)(), {
        userContext: bW,
        isUserContextUpdating: jW
      } = (0, uW.e)(), UW = (0, nW.c)(), [kW, sW] = (0, mW.useState)([]), [MW, SW] = (0, mW.useState)([]), [YW, yW] = (0, mW.useState)(!0), [TW, JW] = (0, mW.useState)(!1), [hW, dW] = (0, mW.useState)(null !== (iW = PW.customThumbnailId) && void 0 !== iW ? iW : null), [eW, vW] = (0, mW.useState)(null), gW = (0, mW.useRef)(null !== (OW = PW.customThumbnailId) && void 0 !== OW ? OW : null), DW = (0, mW.useRef)(0), VW = (0, mW.useRef)(null), pW = (0, mW.useRef)(null), fW = (0, mW.useRef)(null), CW = (0, mW.useRef)(!1);

      function XW(WW, iW) {
        fW.current && (clearTimeout(fW.current), fW.current = null), vW(WW), null !== WW && iW && (fW.current = setTimeout((() => {
          vW(null), fW.current = null
        }), 5e3))
      }(0, mW.useEffect)((() => () => {
        clearTimeout(pW.current), clearTimeout(fW.current)
      }), []);
      const BW = (0, mW.useCallback)((() => {
        yW(!0), HW.e.getOwnedThumbnails(bW).then((WW => {
          const iW = [],
            OW = [];
          for (const mW of WW.thumbnails) mW.rejection ? iW.push({
            thumbnail: mW,
            rejection: mW.rejection
          }) : OW.push(mW);
          iW.sort(((WW, iW) => iW.rejection.at - WW.rejection.at)), OW.sort(((WW, iW) => {
            const OW = WW.approved ? 1 : 0,
              mW = (iW.approved ? 1 : 0) - OW;
            return 0 !== mW ? mW : iW.lastUpdatedAt - WW.lastUpdatedAt
          })), SW(iW), sW(OW)
        })).catch((WW => {
          console.error("Failed to fetch thumbnails:", WW)
        })).finally((() => {
          yW(!1)
        }))
      }), [bW]);
      async function GW(WW, iW, OW) {
        return HW.e.uploadSchematicThumbnail(bW, WW, iW, OW).then((() => {
          XW({
            text: AW("thumbnail:uploadedAwaitingModeration"),
            type: "success"
          }, !0), BW()
        }))
      }

      function IW() {
        DW.current = Date.now(), pW.current = null;
        const WW = VW.current;
        VW.current = null, XW({
          text: AW("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), HW.e.setSchematicThumbnail(bW, PW.schematicId, WW).then((() => {
          UW.current && (XW({
            text: AW("thumbnail:thumbnailUpdated"),
            type: "success"
          }, !0), gW.current = WW, wW("customThumbnailId", WW), wW("customThumbnailBlurhash", void 0), wW("customThumbnailVariants", void 0))
        })).catch((WW => {
          UW.current && (XW({
            text: WW.errorMessageForUser ? AW(WW.errorMessageForUser, WW.errorMessageTranslationParams) : AW("thumbnail:failedToSetThumbnail"),
            type: "error"
          }, !0), dW(gW.current))
        }))
      }

      function aW(WW) {
        dW(WW), VW.current = WW;
        const iW = Date.now() - DW.current;
        iW >= 1e3 ? IW() : (XW({
          text: AW("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), pW.current || (pW.current = setTimeout((() => {
          IW()
        }), 1e3 - iW)))
      }
      return (0, mW.useEffect)((() => {
        !1 === jW && BW()
      }), [jW, BW]), (0, KW.jsxs)("div", {
        className: "BloxdForm ThumbnailSection",
        children: [(0, KW.jsxs)("div", {
          className: "SectionTitle",
          children: [AW("thumbnail:gameThumbnail"), eW && (0, KW.jsx)("span", {
            className: lW()("ThumbnailActionMsg", `ThumbnailActionMsg--${eW.type}`),
            children: eW.text
          })]
        }), (0, KW.jsxs)("div", {
          className: "SectionBody",
          children: [MW.length > 0 && (0, KW.jsx)(rW, {
            rejectedThumbnails: MW,
            isAcknowledging: TW,
            onAcknowledge: async function() {
              JW(!0);
              const WW = await Promise.allSettled(MW.map((WW => {
                let {
                  thumbnail: iW
                } = WW;
                return HW.e.deleteSchematicThumbnail(bW, Wi(iW))
              })));
              if (!UW.current) return;
              JW(!1);
              const iW = WW.filter((WW => "rejected" === WW.status));
              iW.length > 0 && (console.error("Failed to acknowledge some thumbnail rejections:", iW), XW({
                text: AW("thumbnail:failedToHideRejections"),
                type: "error"
              }, !0)), BW()
            }
          }), (0, KW.jsxs)("div", {
            className: "ThumbnailGrid",
            children: [(0, KW.jsxs)("div", {
              className: lW()("ThumbnailGridItem ThumbnailGridItemDefault", {
                ThumbnailGridItemSelected: null === hW
              }),
              onClick: () => aW(null),
              children: [(0, KW.jsx)(oW.b, {
                game: {
                  schematicId: PW.schematicId,
                  imageBlurhash: PW.imageBlurhash
                }
              }), (0, KW.jsx)("div", {
                className: "ThumbnailGridItemLabel ThumbnailDefaultLabel",
                children: AW("general:default")
              })]
            }), YW && (0, KW.jsx)(cW.d, {}), kW.map((WW => {
              var iW;
              const OW = QW(WW);
              return (0, KW.jsxs)("div", {
                className: lW()("ThumbnailGridItem", {
                  ThumbnailGridItemSelected: WW.approved && hW === WW.id,
                  ThumbnailGridItemPending: !WW.approved
                }),
                onClick: () => {
                  WW.approved && aW(WW.id)
                },
                children: [null !== OW && (0, KW.jsx)("img", {
                  src: OW,
                  alt: WW.name
                }), (0, KW.jsx)(NW.O, {
                  className: "ThumbnailDeleteButton",
                  onClick: iW => async function(WW, iW) {
                    WW.stopPropagation();
                    const OW = await EW.NotificationProvider.showCustomPopup({
                        body: WW => (0, KW.jsx)(RW, {
                          imageUrl: QW(iW),
                          thumbnailName: iW.name,
                          onClose: iW => {
                            iW && (CW.current = !0), WW()
                          }
                        }),
                        middleScreenPopupClassName: "ThumbnailDeleteConfirmPopup",
                        onClose: xW
                      }).getResult(),
                      mW = CW.current;
                    CW.current = !1, mW && !0 === OW && (UW.current && XW({
                      text: AW("thumbnail:deletingThumbnail"),
                      type: "info"
                    }, !1), HW.e.deleteSchematicThumbnail(bW, Wi(iW)).then((() => {
                      UW.current && (XW({
                        text: AW("thumbnail:thumbnailDeleted"),
                        type: "success"
                      }, !0), null !== iW.id && gW.current === iW.id && aW(null), BW())
                    })).catch((WW => {
                      UW.current && XW({
                        text: WW.errorMessageForUser ? AW(WW.errorMessageForUser, WW.errorMessageTranslationParams) : AW("thumbnail:failedToDeleteThumbnail"),
                        type: "error"
                      }, !0)
                    })))
                  }(iW, WW),
                  children: (0, KW.jsx)(tW.c, {
                    name: "trash-can"
                  })
                }), WW.approved && (0, KW.jsx)("div", {
                  className: "ThumbnailGridItemLabel",
                  children: WW.name
                }), !WW.approved && (0, KW.jsx)("div", {
                  className: "ThumbnailUnapprovedIcon",
                  children: (0, KW.jsx)(tW.c, {
                    name: "hourglass-clock"
                  })
                }), !WW.approved && (0, KW.jsxs)("div", {
                  className: "ThumbnailGridItemLabel ThumbnailPendingLabel",
                  children: [WW.name, (0, KW.jsx)("br", {}), AW("thumbnail:pendingApproval")]
                })]
              }, null !== (iW = WW.id) && void 0 !== iW ? iW : WW.pendingKey)
            })), (0, KW.jsxs)("div", {
              className: lW()("ThumbnailGridItem ThumbnailUploadTile", {
                ThumbnailUploadTileDisabled: !ZW
              }),
              onClick: () => {
                ZW && function(WW) {
                  let {
                    schematicId: iW,
                    ownedThumbnailCount: OW,
                    onThumbnailReady: mW,
                    onClose: NW
                  } = WW;
                  EW.NotificationProvider.showCustomPopup({
                    body: WW => (0, KW.jsx)(qW, {
                      schematicId: iW,
                      ownedThumbnailCount: OW,
                      onClose: WW,
                      onThumbnailReady: mW
                    }),
                    middleScreenPopupClassName: "SchematicThumbnailPopup",
                    onClose: NW,
                    unlockPointerKey: "schematicThumbnailUploaderPopup"
                  })
                }({
                  schematicId: PW.schematicId,
                  ownedThumbnailCount: kW.length,
                  onThumbnailReady: GW,
                  onClose: xW
                })
              },
              children: [(0, KW.jsx)(tW.c, {
                name: "plus"
              }), (0, KW.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: AW("thumbnail:uploadThumbnail")
              })]
            })]
          })]
        })]
      })
    }
    var Oi = OW(2300),
      mi = OW(5897),
      Ei = OW(5903),
      Ni = OW(5947);

    function Pi(WW) {
      let {
        schematicData: iW,
        setTexturePack: OW,
        initializeTexturePack: EW,
        publishFormEnabled: NW
      } = WW;
      const {
        t: PW
      } = (0, LW.B)(), [cW, wW] = (0, mW.useState)(null), [tW, ZW] = (0, mW.useState)(null), [xW, AW] = (0, mW.useState)(!1), bW = (0, nW.c)(), jW = NW && !xW, UW = iW.customTexturePackKey;

      function kW(WW) {
        var iW;
        wW(WW.metaData.id), ZW(null !== (iW = WW.metaData.fromFolderName) && void 0 !== iW ? iW : null), (WW.metaData.id !== Oi.n.CUSTOM || WW.metaData.fromFolderName) && OW(WW)
      }
      return (0, mW.useEffect)((() => {
        UW && (AW(!0), (0, mi.b)(UW).then((WW => {
          var iW;
          bW.current && (WW ? (wW(WW.metaData.id), ZW(null !== (iW = WW.metaData.fromFolderName) && void 0 !== iW ? iW : null), EW(WW)) : console.error(`No texture pack at ${UW}`))
        })).catch((WW => {
          console.error("Error fetching texture pack: ", WW)
        })).finally((() => {
          AW(!1)
        })))
      }), [UW, EW, bW]), (0, KW.jsxs)("div", {
        className: "BloxdForm TexturePackSection",
        children: [(0, KW.jsx)("div", {
          className: "SectionTitle",
          children: PW("customTexturePack:customTexturePack")
        }), (0, KW.jsxs)("div", {
          className: "TexturePackList",
          children: [(0, KW.jsx)("div", {
            className: lW()("TexturePack", {
              Selected: null === cW && !xW,
              Disabled: !jW
            }),
            onClick: () => {
              jW && (wW(null), OW(null), ZW(null))
            },
            children: (0, KW.jsx)("div", {
              className: "TexturePackName",
              children: "No Override"
            })
          }), Object.values(Oi.n).map((WW => (0, KW.jsx)(Ei.d, {
            id: WW,
            isSelected: WW === cW,
            setSelected: kW,
            disabled: !jW
          }, WW)))]
        }), cW === Oi.n.CUSTOM && (0, KW.jsx)(Ni.c, {
          folderName: tW,
          onTexturePackUpdated: kW,
          disabled: !jW,
          maxFileSizeMb: 25,
          packOwner: "customGame"
        })]
      })
    }
    var Li = OW(5990);

    function ci(WW) {
      var iW;
      let {
        gameCategory: OW,
        setGameCategory: mW,
        disabled: EW
      } = WW;
      const PW = null !== (iW = (0, AW.jb)(OW)) && void 0 !== iW ? iW : "other";
      return (0, KW.jsxs)("div", {
        className: "GameCategoryPicker",
        children: [(0, KW.jsx)(kW.e, {
          label: "worldBuilder:gameCategoryGroup",
          className: "GameCategoryGroup",
          disabled: EW,
          children: (0, KW.jsx)(sW.e, {
            options: AW.$.map((WW => ({
              value: WW,
              label: AW.X[WW]
            }))),
            value: PW,
            onChange: WW => {
              WW.value !== PW && mW(AW.Q[WW.value][0])
            }
          })
        }), (0, KW.jsx)(kW.e, {
          label: "worldBuilder:gameCategory",
          className: "GameCategory",
          disabled: EW,
          children: (0, KW.jsx)("div", {
            className: "GameCategoryOptions",
            children: AW.Q[PW].map((WW => (0, KW.jsx)(NW.Z, {
              active: WW === OW,
              onClick: () => {
                mW(WW)
              },
              children: (0, AW.gb)(WW)
            }, WW)))
          })
        })]
      })
    }
    var wi = OW(5839);

    function ti(WW) {
      let {
        editor: iW,
        onClose: OW
      } = WW;
      const {
        t: mW
      } = (0, LW.B)(), {
        schematicData: EW,
        updateSchematicData: NW,
        publishFormEnabled: cW,
        formEnabled: wW
      } = iW;
      return (0, KW.jsxs)(KW.Fragment, {
        children: [(0, KW.jsxs)(SW, {
          icon: "pen-to-square",
          title: mW("worldBuilder:basicsSection"),
          disabled: !wW,
          children: [(0, KW.jsx)(YW, {
            label: mW("general:name"),
            caption: mW("worldBuilder:schematicNameTagsHint"),
            children: (0, KW.jsx)(PW.b, {
              className: "SchematicPageName",
              defaultValue: EW.name,
              onValueChange: WW => NW("name", WW),
              placeholderText: mW("worldBuilder:schematicNamePlaceholder"),
              maxLength: ZW.zb
            })
          }), (0, KW.jsx)(YW, {
            label: mW("general:description"),
            children: (0, KW.jsx)(PW.b, {
              className: "SchematicPageDescription",
              useTextarea: !0,
              defaultValue: EW.description,
              onValueChange: WW => NW("description", WW),
              placeholderText: mW("worldBuilder:schematicDescriptionPlaceholder"),
              maxLength: ZW.xb
            })
          }), (0, KW.jsx)(ci, {
            gameCategory: EW.gameCategory,
            setGameCategory: WW => NW("gameCategory", WW),
            disabled: !cW
          }), !0 === EW.gamePublished && (0, KW.jsx)(ii, {
            schematicData: EW,
            updateSchematicData: NW,
            publishFormEnabled: cW,
            onClose: function() {
              null === OW || void 0 === OW || OW()
            }
          }), (0, KW.jsx)(wi.e, {})]
        }), (0, KW.jsx)(TW, {
          schematicData: EW,
          updateSchematicData: NW,
          publishFormEnabled: cW,
          formEnabled: wW
        }), !0 === EW.gamePublished && (0, KW.jsx)(SW, {
          icon: "palette",
          title: mW("worldBuilder:texturePackSection"),
          disabled: !wW,
          children: (0, KW.jsx)(Pi, {
            schematicData: EW,
            setTexturePack: iW.setTexturePack,
            initializeTexturePack: iW.initializeTexturePack,
            publishFormEnabled: cW
          })
        })]
      })
    }

    function Zi(WW) {
      let {
        editor: iW
      } = WW;
      const {
        t: OW
      } = (0, LW.B)(), {
        schematicData: mW,
        formEnabled: EW,
        hasUnsavedChanges: PW,
        publishSuspendedUntil: ZW
      } = iW, xW = (0, vW.i)(), lW = !0 === mW.gamePublished ? ZW : null, AW = EW && PW && null === lW;
      return (0, KW.jsxs)("footer", {
        className: "SchematicPageFooter",
        children: [null !== lW && (0, KW.jsx)("div", {
          className: "SchematicPageFooterNotice",
          children: xW(lW)
        }), EW && PW && null === lW && (0, KW.jsxs)("div", {
          className: "SchematicPageFooterStatus",
          children: [(0, KW.jsx)("span", {
            className: "SchematicPageFooterStatusDot"
          }), OW("worldBuilder:unsavedChanges")]
        }), (0, KW.jsx)(wW.f, {
          tooltipInner: (0, KW.jsx)("div", {
            className: "SaveButtonTooltip",
            children: OW(EW && !PW ? "worldBuilder:saveChangesNoneDescription" : "worldBuilder:saveChangesDescription")
          }),
          children: (0, KW.jsxs)(NW.f, {
            className: "SaveChangesButton",
            onClick: () => iW.saveSchematic(mW.gamePublished),
            disabled: !AW,
            children: [(0, KW.jsxs)("span", {
              className: EW ? "" : "SaveChangesButtonBodyHidden",
              children: [(0, KW.jsx)(tW.c, {
                name: "wrench"
              }), " ", OW("worldBuilder:saveChanges")]
            }), !EW && (0, KW.jsx)(cW.d, {})]
          })
        })]
      })
    }

    function xi(WW) {
      let {
        schematic: iW,
        onSchematicUpdate: OW,
        onClose: EW,
        inSourceWorld: PW
      } = WW;
      const {
        t: cW
      } = (0, LW.B)();

      function wW() {
        null === EW || void 0 === EW || EW()
      }
      const tW = (0, Li.c)(iW, {
        onNavigateAway: wW,
        inSourceWorld: PW
      });
      return (0, mW.useEffect)((() => {
        null === OW || void 0 === OW || OW(tW.schematicData)
      }), [tW.schematicData, OW]), (0, KW.jsxs)("div", {
        className: "SchematicPage SchematicPagePopupVariant",
        children: [(0, KW.jsxs)("div", {
          className: "SchematicPageBody",
          children: [(0, KW.jsx)(NW.b, {
            onClick: wW,
            children: cW("worldBuilder:back")
          }), (0, KW.jsx)(SW, {
            icon: "rocket-launch",
            title: cW("worldBuilder:actionsSection"),
            disabled: !tW.formEnabled,
            children: (0, KW.jsx)(JW.d, {
              editor: tW
            })
          }), (0, KW.jsx)(ti, {
            editor: tW,
            onClose: wW
          })]
        }), (0, KW.jsx)(Zi, {
          editor: tW
        })]
      })
    }

    function li(WW) {
      let {
        schematic: iW,
        onSchematicUpdate: OW,
        onClose: mW,
        inSourceWorld: NW
      } = WW;
      EW.NotificationProvider.showCustomPopup({
        body: WW => (0, KW.jsx)(xi, {
          schematic: iW,
          onSchematicUpdate: OW,
          onClose: WW,
          inSourceWorld: NW
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: mW,
        unlockPointerKey: "schematicPagePopup"
      })
    }
  },
  5832: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => lW
    });
    var mW = OW(1089),
      EW = OW.n(mW),
      NW = OW(1172),
      PW = OW(1391),
      LW = OW(1532),
      cW = OW(1434),
      wW = OW(1383),
      tW = OW(5839),
      ZW = OW(5856),
      xW = OW(1283);

    function lW(WW) {
      let {
        editor: iW,
        className: OW,
        publishRefusal: mW = null
      } = WW;
      const {
        t: lW
      } = (0, NW.B)(), {
        schematicData: AW,
        formEnabled: bW,
        publishFormEnabled: jW,
        publishSuspendedUntil: UW
      } = iW, kW = !bW || !jW, sW = (0, ZW.i)();
      return (0, xW.jsxs)("div", {
        className: EW()("PublishButtonContainer", OW),
        children: [iW.canEditSourceWorld && (0, xW.jsxs)(LW.f, {
          onClick: iW.editSourceWorld,
          disabled: kW,
          children: [(0, xW.jsx)(PW.c, {
            name: "edit"
          }), " ", lW("worldBuilder:editSourceWorld")]
        }), !AW.gamePublished && (0, xW.jsx)(cW.f, {
          tooltipInner: (0, xW.jsx)("div", {
            className: "PublishButtonTooltip",
            children: null !== mW && void 0 !== mW ? mW : lW("worldBuilder:publishAsGameDescription")
          }),
          children: (0, xW.jsxs)(LW.n, {
            onClick: () => iW.saveSchematic(!0),
            disabled: kW || null !== mW || null !== UW,
            children: [(0, xW.jsx)(PW.c, {
              name: "rocket-launch"
            }), " ", lW("worldBuilder:publishAsGame"), " ", (0, xW.jsx)(PW.c, {
              name: "info-circle"
            })]
          })
        }), !0 === AW.gamePublished && (0, xW.jsxs)(xW.Fragment, {
          children: [(0, xW.jsx)(cW.f, {
            tooltipInner: (0, xW.jsx)("div", {
              className: "PublishButtonTooltip",
              children: lW("worldBuilder:unpublishAsGameDescription")
            }),
            children: (0, xW.jsxs)(LW.O, {
              onClick: iW.unpublishSchematic,
              disabled: kW,
              children: [(0, xW.jsx)(PW.c, {
                name: "rocket-launch"
              }), " ", lW("worldBuilder:unpublishAsGame"), " ", (0, xW.jsx)(PW.c, {
                name: "info-circle"
              })]
            })
          }), (0, xW.jsxs)(LW.f, {
            onClick: iW.playGame,
            disabled: kW,
            children: [(0, xW.jsx)(PW.c, {
              name: "joystick"
            }), " ", lW("general:playGame")]
          })]
        }), !bW && (0, xW.jsx)(wW.d, {
          loaderType: "Secondary"
        }), !AW.gamePublished && null !== UW && (0, xW.jsx)("div", {
          className: "PublishSuspendedNotice",
          children: sW(UW)
        }), iW.askingPublishingPolicy && (0, xW.jsx)(tW.b, {
          onAnswer: iW.answerPublishingPolicy
        })]
      })
    }
  },
  5897: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => EW
    });
    var mW = OW(1185);
    async function EW(WW) {
      const iW = await fetch(`${mW.clientSideServerUrls.s3Url}/${WW}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === iW.status || 403 === iW.status) return null;
      if (!iW.ok) throw new Error(`Failed to download the texture pack (${iW.status})`);
      return await iW.json()
    }
  },
  5856: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => LW,
      e: () => cW,
      i: () => wW
    });
    var mW = OW(62),
      EW = OW(1584),
      NW = OW(1172),
      PW = OW(1107);

    function LW() {
      let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      const {
        userContext: iW
      } = (0, PW.e)(), [OW, NW] = (0, mW.useState)((() => ({
        loading: WW && iW.isLoggedIn(),
        eligibility: null
      })));
      if ((0, mW.useEffect)((() => {
          if (!WW || !iW.isLoggedIn()) return void NW({
            loading: !1,
            eligibility: null
          });
          let OW = !1;
          return EW.e.getCreatorEligibility(iW).then((WW => {
            OW || NW({
              loading: !1,
              eligibility: WW
            })
          })).catch((WW => {
            console.warn("Failed to load creator eligibility", WW), OW || NW({
              loading: !1,
              eligibility: null
            })
          })), () => {
            OW = !0
          }
        }), [iW, WW]), null === OW.eligibility) return OW;
      const LW = Date.now(),
        {
          thumbnailUploadWait: cW,
          publishSuspendedUntil: wW
        } = OW.eligibility;
      return {
        loading: OW.loading,
        eligibility: {
          thumbnailUploadWait: null !== cW && cW.until > LW ? cW : null,
          publishSuspendedUntil: null !== wW && wW > LW ? wW : null
        }
      }
    }

    function cW() {
      const {
        t: WW,
        selectedLanguage: iW
      } = (0, NW.B)();
      return (OW, mW) => WW(OW, {
        date: (0, NW.e)(iW.code, OW, mW, {
          dateStyle: "medium",
          timeStyle: "short"
        })
      })
    }

    function wW() {
      const {
        t: WW,
        selectedLanguage: iW
      } = (0, NW.B)();
      return OW => {
        const mW = "worldBuilder:publishSuspended";
        return WW(mW, {
          date: (0, NW.e)(iW.code, mW, OW, {
            dateStyle: "medium",
            timeStyle: "short",
            timeZone: "UTC"
          })
        })
      }
    }
  },
  5990: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => sW
    });
    var mW = OW(62),
      EW = OW(1365),
      NW = OW(1052),
      PW = OW(154),
      LW = OW(2953),
      cW = OW(1642),
      wW = OW(25),
      tW = OW(2037),
      ZW = OW(1584),
      xW = OW(5282),
      lW = OW(1422),
      AW = OW(1977),
      bW = OW(1107),
      jW = OW(1605),
      UW = OW(5856);

    function kW(WW, iW) {
      return {
        schematicId: WW.schematicId,
        name: WW.name,
        description: WW.description,
        gamePublished: iW,
        gameCategory: WW.gameCategory,
        defaultGamemode: WW.defaultGamemode,
        voidDeathHeight: WW.voidDeathHeight,
        disableKeepInventory: WW.disableKeepInventory,
        disableTpRequests: WW.disableTpRequests,
        disableLobbySpawn: WW.disableLobbySpawn,
        disableMobs: WW.disableMobs,
        disableSpawnProtection: WW.disableSpawnProtection,
        disableFallDamage: WW.disableFallDamage,
        worldBorder: WW.worldBorder,
        hideLobbyCode: WW.hideLobbyCode,
        enableSmpMarketplace: WW.enableSmpMarketplace,
        enableSurvivalGuns: WW.enableSurvivalGuns,
        enableSpawnReset: WW.enableSpawnReset,
        enableDayNight: WW.enableDayNight,
        persistWorld: WW.persistWorld,
        persistInventory: WW.persistInventory,
        enableFluidFlow: WW.enableFluidFlow
      }
    }

    function sW(WW) {
      var iW, OW;
      let {
        onNavigateAway: sW,
        inSourceWorld: MW = !1,
        canManage: KW = !0
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const {
        userContext: SW
      } = (0, bW.e)(), YW = (0, jW.useNavigatePreserveSearch)(), [yW, TW] = (0, mW.useState)({
        ...WW
      }), [JW, hW] = (0, mW.useState)("Enter"), [HW, nW] = (0, mW.useState)(void 0), [uW, oW] = (0, mW.useState)(!1), dW = (0, mW.useRef)(kW(WW, WW.gamePublished)), eW = (0, mW.useRef)(void 0), vW = "Enter" === JW, gW = null !== (iW = null === (OW = (0, UW.b)(KW).eligibility) || void 0 === OW ? void 0 : OW.publishSuspendedUntil) && void 0 !== iW ? iW : null, DW = SW.playerHasRank("developer") || SW.playerHasRank("admin") || "Enter" === JW && !1 !== yW.schematicContainsSpawnBlock, VW = void 0 !== HW && HW !== eW.current || JSON.stringify(kW(yW, yW.gamePublished)) !== JSON.stringify(dW.current);

      function pW(WW, iW) {
        TW((OW => ({
          ...OW,
          [WW]: iW
        })))
      }
      const fW = (0, mW.useCallback)((WW => {
        eW.current = WW, nW(WW)
      }), []);

      function CW() {
        return (0, cW.w)((0, NW.r)(yW.schematicId), yW)
      }

      function XW(WW, iW) {
        hW("Loading");
        const OW = kW(yW, WW),
          mW = HW !== eW.current ? HW : void 0;
        ZW.e.updateSchematic(SW, OW, mW, iW).then((iW => {
          let {
            customTexturePackKey: mW
          } = iW;
          hW("Success"), pW("customTexturePackKey", mW), dW.current = OW, eW.current = void 0, nW(void 0), !WW || yW.gamePublished || sW || AW.g.showGamePublished(yW.name, CW()), setTimeout((() => {
            pW("gamePublished", WW), hW("Enter")
          }), 1e3)
        })).catch((WW => {
          if (WW instanceof PW.c && WW.errorMessageForUser === LW.A && void 0 === iW) return hW("Enter"), void oW(!0);
          var OW;
          (console.error("Failed to save schematic:", WW), hW("Error"), WW instanceof PW.c && WW.errorMessageForUser) && lW.NotificationProvider.showAlertPopup({
            title: "worldBuilder:changesNotSaved",
            subtitle: WW.errorMessageForUser,
            textOpts: {
              subtitle: null !== (OW = WW.errorMessageTranslationParams) && void 0 !== OW ? OW : void 0
            },
            confirmText: "general:ok"
          });
          setTimeout((() => {
            hW("Enter")
          }), 1e3)
        }))
      }
      return {
        schematicData: yW,
        updateSchematicData: pW,
        setTexturePack: nW,
        initializeTexturePack: fW,
        updateState: JW,
        formEnabled: vW,
        publishFormEnabled: DW,
        hasUnsavedChanges: VW,
        publishSuspendedUntil: gW,
        canEditSourceWorld: !MW,
        saveSchematic: XW,
        unpublishSchematic: function() {
          lW.NotificationProvider.showPromptPopup({
            icon: "rocket-launch",
            title: "worldBuilder:unpublishAsGameConfirmTitle",
            subtitle: "worldBuilder:unpublishAsGameConfirmSubtitle",
            confirmText: "worldBuilder:unpublishAsGame",
            cancelText: "general:cancel",
            destructive: !0,
            unlockPointerKey: "unpublishGamePrompt"
          }).getResult().then((WW => {
            !0 === WW && XW(!1)
          }))
        },
        askingPublishingPolicy: uW,
        answerPublishingPolicy: function(WW) {
          oW(!1), WW && XW(!0, LW.B)
        },
        editSourceWorld: function() {
          hW("Loading"), xW.b.getSourceWorld(yW.schematicId).then((WW => {
            tW.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, wW.l)("other"), YW((0, EW.e)("classic", WW)), null === sW || void 0 === sW || sW()
          })).catch((WW => {
            console.error("Failed to get source world:", WW), hW("Error"), setTimeout((() => {
              hW("Enter")
            }), 1e3)
          }))
        },
        playGame: function() {
          tW.gameBridge.send("leaveGame", {
            reloadPath: "/"
          }), YW(CW()), null === sW || void 0 === sW || sW()
        }
      }
    }
  },
  5713: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => NW,
      e: () => xW,
      i: () => cW,
      m: () => AW,
      o: () => wW,
      p: () => lW
    });
    var mW = OW(5721),
      EW = OW(5725);
    const NW = !1,
      PW = mW.h.map((WW => {
        const iW = [];
        for (let NW = 1; NW <= WW.reach; NW++) iW.push(EW.j[(0, mW.d)(WW.source, NW)].id);
        const OW = "water" === WW.family;
        return Object.freeze({
          name: WW.kind,
          family: WW.family,
          reach: WW.reach,
          stepTicks: OW ? 5 : 10,
          slopeDistance: OW ? 4 : 2,
          sourceId: EW.j[WW.source].id,
          fallingId: EW.j[(0, mW.b)(WW.source)].id,
          flowingIds: Object.freeze(iW),
          makesSources: OW,
          stillId: EW.j[WW.still].id
        })
      })),
      LW = new Map;
    for (const bW of PW) LW.set(bW.sourceId, Object.freeze({
      kind: bW,
      state: "source",
      distance: 0
    })), LW.set(bW.fallingId, Object.freeze({
      kind: bW,
      state: "falling",
      distance: 0
    })), bW.flowingIds.forEach(((WW, iW) => {
      LW.set(WW, Object.freeze({
        kind: bW,
        state: "flowing",
        distance: iW + 1
      }))
    }));

    function cW(WW) {
      return PW.find((iW => iW.name === WW))
    }

    function wW(WW) {
      return null === WW ? void 0 : LW.get(WW)
    }
    const tW = new Uint8Array(65536);
    for (const [bW, jW] of LW) tW[bW] = "source" === jW.state ? 1 : 2;
    const ZW = new Map;
    for (const bW of PW) ZW.set(bW.stillId, bW.family);

    function xW(WW) {
      var iW, OW;
      return null !== (iW = null === (OW = wW(WW)) || void 0 === OW ? void 0 : OW.kind.family) && void 0 !== iW ? iW : lW(WW)
    }

    function lW(WW) {
      var iW;
      return null === WW ? null : null !== (iW = ZW.get(WW)) && void 0 !== iW ? iW : null
    }
    EW.j.Obsidian.id, EW.j["Messy Stone"].id;

    function AW() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {
        let WW = 0;
        for (const iW of PW) WW = Math.max(WW, iW.stillId, iW.sourceId, iW.fallingId, ...iW.flowingIds);
        return WW
      }() + 1;
      const iW = new Uint8Array(WW);
      for (const OW of PW) {
        const mW = ("water" === OW.family ? 1 : 2) << 4;
        for (const EW of [OW.stillId, OW.sourceId, OW.fallingId, ...OW.flowingIds]) EW < WW && (iW[EW] = mW)
      }
      return iW
    }
  },
  5701: () => {}
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);