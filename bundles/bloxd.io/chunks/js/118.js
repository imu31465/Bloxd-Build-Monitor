export const id = 118;
export const ids = [118];
export const modules = {
  5405: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => XH,
      g: () => EH,
      i: () => GH
    });
    LH(5410);
    var AH = LH(1123),
      rH = LH(1038),
      SH = LH.n(rH),
      hH = LH(1365),
      tH = (LH(45), LH(4745)),
      zH = LH(1315),
      CH = LH(1225);

    function EH(HH) {
      let {
        children: BH,
        label: LH,
        className: rH,
        circleInfoText: tH,
        disabled: EH,
        onLabelClick: XH
      } = HH;
      const {
        t: GH
      } = (0, AH.B)(), YH = (0, CH.jsxs)("div", {
        className: SH()("Label", {
          ClickableLabel: void 0 !== XH
        }),
        onClick: XH,
        children: [GH(LH), tH && (0, CH.jsx)(zH.c, {
          name: "circle-info"
        })]
      });
      return (0, CH.jsxs)("div", {
        className: SH()("LabeledInput", {
          [rH]: rH,
          DisabledLabelInput: EH
        }),
        children: [tH && (0, CH.jsx)(hH.g, {
          tooltipInner: (0, CH.jsx)("div", {
            className: "LabeledInputTooltip",
            children: GH(tH)
          }),
          children: YH
        }), !tH && YH, BH]
      })
    }

    function XH(HH) {
      let {
        checked: BH,
        setChecked: LH,
        disabled: AH = !1
      } = HH;
      return (0, CH.jsx)("div", {
        className: "OtherInput ClickableOtherInput",
        "data-pad-focusable": !0,
        "aria-disabled": AH || void 0,
        onClick: HH => {
          AH || LH(!BH)
        },
        children: (0, CH.jsx)(tH.d, {
          checked: BH,
          onChange: HH => {
            LH(HH.target.checked)
          },
          disabled: AH
        })
      })
    }

    function GH(HH) {
      let {
        checked: BH,
        setChecked: LH,
        disabled: AH
      } = HH;
      return (0, CH.jsx)("div", {
        className: SH()("SwitchContainer", {
          SwitchContainerDisabled: AH
        }),
        onClick: () => {
          AH || LH(!BH)
        },
        children: (0, CH.jsx)(tH.d, {
          className: "SwitchCheckbox",
          checked: BH,
          onChange: HH => {
            LH(HH.target.checked)
          },
          disabled: !!AH
        })
      })
    }
  },
  5418: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => CH
    });
    var AH = LH(1038),
      rH = LH.n(AH),
      SH = LH(5037),
      hH = LH(1123),
      tH = LH(1225);
    const zH = [...SH.n, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function CH(HH) {
      const {
        disabled: BH,
        hideWrapper: LH
      } = HH, {
        t: AH
      } = (0, hH.B)(), CH = HH.advancedMode ? zH.map((BH => [BH, HH.callbacks[BH]])) : SH.n.map((BH => [BH, HH.callbacks[BH]])), XH = (0, tH.jsx)("div", {
        className: rH()("PluginsGrid", {
          SectionBody: !LH
        }),
        children: CH.map((HH => {
          let [LH, AH] = HH;
          return (0, tH.jsx)(EH, {
            plugin: LH,
            callbacks: AH,
            disabled: BH
          }, LH)
        }))
      });
      return LH ? XH : (0, tH.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, tH.jsx)("div", {
          className: "SectionTitle",
          children: AH("worldBuilder:pluginsSection")
        }), XH]
      })
    }

    function EH(HH) {
      let {
        plugin: BH,
        callbacks: {
          isEnabled: LH,
          vI: AH
        },
        disabled: SH
      } = HH;
      const {
        t: zH
      } = (0, hH.B)(), CH = LH();
      return (0, tH.jsxs)("div", {
        className: rH()("PluginCard", {
          PluginCardEnabled: CH,
          PluginCardDisabledForm: SH
        }),
        "data-pad-focusable": !0,
        "aria-disabled": SH || void 0,
        onClick: () => {
          SH || AH(!CH)
        },
        children: [(0, tH.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, tH.jsx)("img", {
            src: `/textures/games/classic/customGames/${BH}.png`,
            alt: BH
          })
        }), (0, tH.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, tH.jsx)("div", {
            className: "PluginCardTitle",
            children: zH(XH[BH])
          }), (0, tH.jsx)("div", {
            className: "PluginCardDescription",
            children: zH(GH[BH])
          })]
        }), (0, tH.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: zH(CH ? "general:on" : "general:off")
        })]
      })
    }
    const XH = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      GH = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  5436: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => CH
    });
    var AH = LH(1038),
      rH = LH.n(AH),
      SH = LH(1123),
      hH = LH(1315),
      tH = LH(1225);

    function zH(HH) {
      let {
        textKey: BH,
        allowed: LH
      } = HH;
      const {
        t: AH
      } = (0, SH.B)();
      return (0, tH.jsxs)("li", {
        className: rH()("PolicyListItem", LH ? "Allowed" : "NotAllowed"),
        children: [(0, tH.jsx)(hH.c, {
          name: LH ? "check" : "x"
        }), (0, tH.jsx)("span", {
          children: AH(BH)
        })]
      })
    }

    function CH(HH) {
      let {
        allowed: BH,
        notAllowed: LH
      } = HH;
      return (0, tH.jsxs)("ul", {
        className: "PolicyList",
        children: [BH.map((HH => (0, tH.jsx)(zH, {
          textKey: HH,
          allowed: !0
        }, HH))), LH.map((HH => (0, tH.jsx)(zH, {
          textKey: HH,
          allowed: !1
        }, HH)))]
      })
    }
  },
  5431: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => PH,
      e: () => TH
    });
    var AH = LH(45),
      rH = LH(1038),
      SH = LH.n(rH),
      hH = LH(69),
      tH = LH(2363),
      zH = LH(1123),
      CH = LH(5405),
      EH = LH(1315),
      XH = LH(1361),
      GH = LH(1455),
      YH = LH(4978),
      uH = LH(5436),
      QH = LH(1225);

    function WH(HH) {
      return (0, hH.createPortal)((0, QH.jsx)(XH.e, {
        ...HH
      }), document.body)
    }
    const MH = tH.u.map((HH => `worldBuilder:publishingPolicy_${HH}`)),
      xH = Object.keys(tH.y).map((HH => `worldBuilder:publishingPolicy_${HH}`));

    function vH(HH) {
      let {
        onScrolledToEnd: BH
      } = HH;
      const LH = (0, AH.useRef)(null),
        {
          after: rH
        } = (0, YH.d)(LH, "y");
      return (0, AH.useEffect)((() => {
        rH || null === BH || void 0 === BH || BH()
      }), [rH, BH]), (0, QH.jsx)("div", {
        ref: LH,
        className: SH()("PublishingPolicyRows", {
          PublishingPolicyRowsMoreBelow: rH
        }),
        tabIndex: 0,
        "data-pad-focusable": !0,
        children: (0, QH.jsx)(uH.e, {
          allowed: MH,
          notAllowed: xH
        })
      })
    }

    function PH(HH) {
      let {
        onAnswer: BH
      } = HH;
      const [LH, rH] = (0, AH.useState)(!1), [SH, hH] = (0, AH.useState)(!1), tH = (0, AH.useCallback)((() => {
        hH(!0)
      }), []);
      return (0, QH.jsx)(WH, {
        close: () => {
          BH(!1)
        },
        disableExitButton: !0,
        body: (0, QH.jsxs)(XH.m, {
          className: "PublishingPolicyPopup",
          title: "worldBuilder:publishingPolicy",
          padStartsOn: "content",
          confirm: {
            text: "worldBuilder:publishAsGame",
            disabled: !LH,
            onClick: () => {
              BH(!0)
            }
          },
          cancel: {
            text: "general:cancel",
            onClick: () => {
              BH(!1)
            }
          },
          children: [(0, QH.jsx)(vH, {
            onScrolledToEnd: tH
          }), (0, QH.jsx)(CH.g, {
            className: "PublishingPolicyAgree",
            label: SH ? "worldBuilder:agreeToPublishingPolicy" : "worldBuilder:scrollToAgreeToPublishingPolicy",
            disabled: !SH,
            onLabelClick: () => {
              rH(!LH)
            },
            children: (0, QH.jsx)(CH.e, {
              checked: LH,
              setChecked: rH,
              disabled: !SH
            })
          })]
        })
      })
    }

    function TH() {
      const {
        t: HH
      } = (0, zH.B)(), [BH, LH] = (0, AH.useState)(!1);
      return (0, QH.jsxs)(QH.Fragment, {
        children: [(0, QH.jsxs)(GH.W, {
          className: "PublishingPolicyLink",
          onClick: () => {
            LH(!0)
          },
          children: [(0, QH.jsx)(EH.c, {
            name: "shield-halved"
          }), " ", HH("worldBuilder:publishingPolicy")]
        }), BH && (0, QH.jsx)(WH, {
          close: () => {
            LH(!1)
          },
          body: (0, QH.jsx)(XH.m, {
            className: "PublishingPolicyPopup",
            title: "worldBuilder:publishingPolicy",
            children: (0, QH.jsx)(vH, {})
          })
        })]
      })
    }
  },
  5399: (HH, BH, LH) => {
    LH.d(BH, {
      h: () => XB,
      b: () => EB,
      f: () => CB,
      k: () => GB
    });
    var AH = LH(45),
      rH = LH(1352),
      SH = LH(1455),
      hH = LH(1706),
      tH = LH(1123),
      zH = LH(1313),
      CH = LH(1365),
      EH = LH(1315),
      XH = LH(1168),
      GH = LH(1038),
      YH = LH.n(GH),
      uH = LH(304),
      QH = LH(5037),
      WH = LH(1182),
      MH = LH(5405),
      xH = LH(3473),
      vH = LH(5418),
      PH = LH(1225);

    function TH(HH) {
      let {
        icon: BH,
        title: LH,
        disabled: AH,
        children: rH
      } = HH;
      return (0, PH.jsxs)("div", {
        className: YH()("ManageCard", {
          ManageCardDisabled: AH
        }),
        children: [(0, PH.jsxs)("div", {
          className: "ManageCardHead",
          children: [(0, PH.jsx)("div", {
            className: "ManageCardIcon",
            children: (0, PH.jsx)(EH.c, {
              name: BH
            })
          }), (0, PH.jsx)("div", {
            children: (0, PH.jsx)("h2", {
              className: "ManageCardTitle",
              children: LH
            })
          })]
        }), (0, PH.jsxs)("div", {
          className: "ManageCardBody",
          children: [rH, AH && (0, PH.jsx)("div", {
            className: "ManageCardDisabledOverlay"
          })]
        })]
      })
    }

    function UH(HH) {
      let {
        label: BH,
        caption: LH,
        children: AH
      } = HH;
      return (0, PH.jsxs)("div", {
        className: "ManageStackedField",
        children: [(0, PH.jsx)("div", {
          className: "ManageStackedFieldLabel",
          children: BH
        }), AH, LH && (0, PH.jsx)("div", {
          className: "ManageStackedFieldCaption",
          children: LH
        })]
      })
    }

    function VH(HH) {
      let {
        label: BH,
        caption: LH,
        disabled: AH,
        children: rH
      } = HH;
      return (0, PH.jsxs)("div", {
        className: YH()("ManageField", {
          ManageFieldDisabled: AH
        }),
        children: [(0, PH.jsxs)("div", {
          className: "ManageFieldText",
          children: [(0, PH.jsx)("div", {
            className: "ManageFieldLabel",
            children: BH
          }), (0, PH.jsx)("div", {
            className: "ManageFieldCaption",
            children: LH
          })]
        }), (0, PH.jsx)("div", {
          className: "ManageFieldControl",
          children: rH
        })]
      })
    }

    function OH(HH) {
      var BH, LH;
      let {
        schematicData: AH,
        updateSchematicData: rH,
        publishFormEnabled: SH,
        formEnabled: hH
      } = HH;
      const {
        t: zH
      } = (0, tH.B)(), CH = !SH, EH = {
        tpRequests: {
          isEnabled: () => !AH.disableTpRequests,
          vI: HH => rH("disableTpRequests", !HH)
        },
        spawnProtection: {
          isEnabled: () => !AH.disableSpawnProtection,
          vI: HH => rH("disableSpawnProtection", !HH)
        },
        spawnReset: {
          isEnabled: () => !!AH.enableSpawnReset,
          vI: HH => rH("enableSpawnReset", HH)
        },
        smpMarketplace: {
          isEnabled: () => !!AH.enableSmpMarketplace,
          vI: HH => rH("enableSmpMarketplace", HH)
        },
        survivalGuns: {
          isEnabled: () => !!AH.enableSurvivalGuns,
          vI: HH => rH("enableSurvivalGuns", HH)
        },
        fallDamage: {
          isEnabled: () => !AH.disableFallDamage,
          vI: HH => rH("disableFallDamage", !HH)
        },
        dayNight: {
          isEnabled: () => !!AH.enableDayNight,
          vI: HH => rH("enableDayNight", HH)
        }
      };
      return (0, PH.jsxs)(PH.Fragment, {
        children: [!1 === AH.schematicContainsSpawnBlock && (0, PH.jsx)("div", {
          className: "ManageWarningBanner",
          children: zH("worldBuilder:mustContainSpawnBlock")
        }), (0, PH.jsxs)("div", {
          className: "ManageSettingsGrid",
          children: [(0, PH.jsxs)(TH, {
            icon: "globe",
            title: zH("worldBuilder:worldRulesSection"),
            disabled: !hH,
            children: [(0, PH.jsx)(VH, {
              label: zH("classic:defaultGamemode"),
              caption: zH("classic:defaultGamemodeDescription"),
              disabled: CH,
              children: (0, PH.jsx)(xH.b, {
                controlClassName: "ManageDropdown",
                options: QH.H.map((HH => ({
                  value: HH,
                  label: uH.s[HH]
                }))),
                value: AH.defaultGamemode,
                onChange: HH => rH("defaultGamemode", HH.value)
              })
            }), (0, PH.jsx)(VH, {
              label: zH("classic:voidDeathHeight"),
              caption: zH("classic:voidDeathHeightDescription"),
              disabled: CH,
              children: (0, PH.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, PH.jsx)("input", {
                  type: "number",
                  max: WH.B,
                  value: null !== (BH = AH.voidDeathHeight) && void 0 !== BH ? BH : "",
                  onChange: HH => {
                    const BH = parseInt(HH.target.value);
                    rH("voidDeathHeight", BH)
                  }
                }), (0, PH.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: zH("worldBuilder:blocksUnit")
                })]
              })
            }), (0, PH.jsx)(VH, {
              label: zH("classic:worldBorder"),
              caption: zH("classic:worldBorderDescription"),
              disabled: CH,
              children: (0, PH.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, PH.jsx)("input", {
                  type: "number",
                  min: WH.I,
                  max: WH.F,
                  placeholder: zH("worldBuilder:noWorldBorderLimit"),
                  value: null !== (LH = AH.worldBorder) && void 0 !== LH ? LH : "",
                  onChange: HH => {
                    const BH = parseInt(HH.target.value);
                    rH("worldBorder", isNaN(BH) ? null : BH)
                  }
                }), (0, PH.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: zH("worldBuilder:blocksUnit")
                })]
              })
            }), (0, PH.jsx)(VH, {
              label: zH("classic:disableMobs"),
              caption: zH("classic:disableMobsDescription"),
              disabled: CH,
              children: (0, PH.jsx)(MH.i, {
                checked: AH.disableMobs,
                setChecked: HH => rH("disableMobs", HH),
                disabled: CH
              })
            })]
          }), (0, PH.jsxs)(TH, {
            icon: "user-group",
            title: zH("worldBuilder:playerAndLobbySection"),
            disabled: !hH,
            children: [(0, PH.jsx)(VH, {
              label: zH("classic:disableKeepInventory"),
              caption: zH("classic:disableKeepInventoryDescription"),
              disabled: CH,
              children: (0, PH.jsx)(MH.i, {
                checked: AH.disableKeepInventory,
                setChecked: HH => rH("disableKeepInventory", HH),
                disabled: CH
              })
            }), (0, PH.jsx)(VH, {
              label: zH("classic:persistInventory"),
              caption: zH("classic:persistInventoryDescription"),
              disabled: CH,
              children: (0, PH.jsx)(xH.b, {
                controlClassName: "ManageDropdown",
                options: QH.o.map((HH => ({
                  value: HH,
                  label: uH.i[HH]
                }))),
                value: AH.persistInventory,
                onChange: HH => rH("persistInventory", HH.value)
              })
            }), (0, PH.jsx)(VH, {
              label: zH("classic:persistWorld"),
              caption: zH("classic:persistWorldDescription"),
              disabled: CH,
              children: (0, PH.jsx)(MH.i, {
                checked: AH.persistWorld,
                setChecked: HH => rH("persistWorld", HH),
                disabled: CH
              })
            }), (0, PH.jsx)(VH, {
              label: zH("classic:disableLobbySpawn"),
              caption: zH("classic:disableLobbySpawnDescription"),
              disabled: CH,
              children: (0, PH.jsx)(MH.i, {
                checked: AH.disableLobbySpawn,
                setChecked: HH => rH("disableLobbySpawn", HH),
                disabled: CH
              })
            }), (0, PH.jsx)(VH, {
              label: zH("classic:hideLobbyCode"),
              caption: zH("classic:hideLobbyCodeDescription"),
              disabled: CH,
              children: (0, PH.jsx)(MH.i, {
                checked: AH.hideLobbyCode,
                setChecked: HH => rH("hideLobbyCode", HH),
                disabled: CH
              })
            })]
          })]
        }), (0, PH.jsx)(TH, {
          icon: "layer-group",
          title: zH("worldBuilder:pluginsSection"),
          disabled: !hH,
          children: (0, PH.jsx)(vH.d, {
            callbacks: EH,
            disabled: CH,
            advancedMode: !0,
            hideWrapper: !0
          })
        })]
      })
    }
    var bH = LH(5426),
      kH = LH(1594),
      mH = LH(1502),
      oH = LH(3879),
      IH = LH(1061),
      fH = LH(5383),
      lH = LH(5446),
      KH = LH(1457),
      cH = LH(5438),
      eH = LH(5436);
    const qH = 50,
      gH = .3;
    async function NH(HH) {
      const BH = await
      function(HH) {
        return new Promise(((BH, LH) => {
          const AH = new FileReader;
          AH.onload = () => BH(AH.result), AH.onerror = LH, AH.readAsDataURL(HH)
        }))
      }(HH), LH = await
      function(HH) {
        return new Promise(((BH, LH) => {
          const AH = new Image;
          AH.onload = () => BH(AH), AH.onerror = () => LH(new Error("Failed to load image")), AH.src = HH
        }))
      }(BH);
      if (LH.naturalHeight > LH.naturalWidth) throw new RH;
      const AH = 1024 * qH,
        {
          dataUrl: rH,
          finalQuality: SH
        } = function(HH, BH) {
          const LH = document.createElement("canvas");
          LH.width = HH.naturalWidth, LH.height = HH.naturalHeight, LH.getContext("2d").drawImage(HH, 0, 0);
          let AH = .92,
            rH = LH.toDataURL("image/jpeg", AH);
          for (; .75 * rH.length > BH && AH > .05;) AH -= .05, rH = LH.toDataURL("image/jpeg", AH);
          return {
            dataUrl: rH,
            finalQuality: AH
          }
        }(LH, AH);
      if (Math.ceil(.75 * rH.length) > AH) throw new jH;
      return {
        base64Jpg: rH,
        heavilyCompressed: SH < gH
      }
    }
    class RH extends Error {}
    class jH extends Error {}

    function nH(HH) {
      var BH;
      let {
        schematicId: LH,
        hasReadUploadPolicy: rH,
        onPolicyValidationError: zH,
        onThumbnailReady: CH
      } = HH;
      const {
        t: GH
      } = (0, tH.B)(), [uH, QH] = (0, AH.useState)(null), [WH, MH] = (0, AH.useState)(""), [xH, vH] = (0, AH.useState)(""), [TH, UH] = (0, AH.useState)(!0), [VH, OH] = (0, AH.useState)(!1), bH = (0, AH.useRef)(!1), [kH, mH] = (0, AH.useState)(null), [oH, IH] = (0, AH.useState)(!1), [fH, KH] = (0, AH.useState)(!1), cH = (0, AH.useRef)(0), {
        getRootProps: eH,
        getInputProps: qH,
        isDragActive: gH
      } = (0, lH.c)({
        accept: {
          "image/*": [".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp"]
        },
        multiple: !1,
        onDrop: async HH => {
          if (0 === HH.length) return;
          const BH = HH[0],
            LH = ++cH.current;
          mH(null), IH(!1), QH(null), MH(BH.name);
          try {
            const HH = await NH(BH);
            if (LH !== cH.current) return;
            QH(HH), IH(HH.heavilyCompressed)
          } catch (AH) {
            if (LH !== cH.current) return;
            mH(GH(AH instanceof RH ? "thumbnail:portraitImagesNotAllowed" : AH instanceof jH ? "thumbnail:couldNotCompressImage" : "thumbnail:failedToUploadImage"))
          }
        },
        useFsAccessApi: !1
      }), nH = WH.length <= 30 ? WH : `${WH.slice(0,27)}...`, FH = null !== (BH = null === uH || void 0 === uH ? void 0 : uH.base64Jpg) && void 0 !== BH ? BH : null, DH = xH.trim(), wH = DH.length >= XH.l && DH.length <= XH.j, ZH = fH && !uH && !kH, dH = fH && !wH;
      return (0, PH.jsxs)("div", {
        className: "ThumbnailUploadContainer",
        children: [(0, PH.jsxs)("div", {
          ...eH({
            className: YH()("ThumbnailUploadDropzone", {
              ActiveDrag: gH,
              ValidationError: ZH
            })
          }),
          children: [(0, PH.jsx)("input", {
            ...qH()
          }), !gH && FH ? (0, PH.jsxs)(PH.Fragment, {
            children: [(0, PH.jsxs)("div", {
              className: "ThumbnailAspectPreviews",
              children: [(0, PH.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, PH.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "1:1"
                }), (0, PH.jsx)("div", {
                  className: "ThumbnailAspectFrame Square",
                  children: (0, PH.jsx)("img", {
                    src: FH,
                    alt: "1:1 preview"
                  })
                })]
              }), (0, PH.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, PH.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "16:9"
                }), (0, PH.jsx)("div", {
                  className: "ThumbnailAspectFrame Wide",
                  children: (0, PH.jsx)("img", {
                    src: FH,
                    alt: "16:9 preview"
                  })
                })]
              })]
            }), (0, PH.jsxs)("div", {
              children: [(0, PH.jsx)("div", {
                className: "ThumbnailUploadInstructions Active",
                children: nH
              }), (0, PH.jsx)("div", {
                className: "ThumbnailUploadInstructions Preview",
                children: GH("thumbnail:preview")
              })]
            })]
          }) : (0, PH.jsxs)(PH.Fragment, {
            children: [(0, PH.jsx)("div", {
              className: "ThumbnailUploadIcon",
              children: (0, PH.jsx)(EH.c, {
                name: "image"
              })
            }), (0, PH.jsx)("div", {
              className: "ThumbnailUploadInstructions",
              children: GH("thumbnail:dragImageHere")
            })]
          })]
        }), ZH && (0, PH.jsx)("div", {
          className: "ThumbnailUploadError",
          children: GH("thumbnail:imageRequired")
        }), (0, PH.jsx)(hH.e, {
          className: YH()("ThumbnailUploadNameInput", {
            ValidationError: dH
          }),
          placeholderText: GH("thumbnail:thumbnailName"),
          defaultValue: xH,
          onValueChange: HH => {
            vH(HH)
          },
          maxLength: XH.j
        }), dH && (0, PH.jsx)("div", {
          className: "ThumbnailUploadError",
          children: GH("thumbnail:nameRequired", {
            min: XH.l,
            max: XH.j
          })
        }), (0, PH.jsxs)("label", {
          className: "ThumbnailUploadCheckbox",
          children: [(0, PH.jsx)("input", {
            type: "checkbox",
            checked: TH,
            onChange: HH => {
              UH(HH.target.checked)
            }
          }), GH("thumbnail:setAsThumbnailOnceApproved")]
        }), oH && (0, PH.jsx)("div", {
          className: "ThumbnailUploadWarning",
          children: GH("thumbnail:heavyCompressionWarning")
        }), kH && (0, PH.jsx)("div", {
          className: "ThumbnailUploadError",
          children: kH
        }), (0, PH.jsx)(SH.u, {
          disabled: VH,
          className: "ThumbnailUploadButton",
          onClick: async () => {
            if (KH(!0), !bH.current && uH && wH && rH) {
              bH.current = !0, OH(!0), mH(null);
              try {
                await CH(uH.base64Jpg, DH, TH ? LH : null)
              } catch (HH) {
                mH(HH.errorMessageForUser ? GH(HH.errorMessageForUser, HH.errorMessageTranslationParams) : GH("thumbnail:failedToUploadImage"))
              } finally {
                bH.current = !1, OH(!1)
              }
            } else rH || zH()
          },
          children: GH(VH ? "thumbnail:processing" : "thumbnail:uploadThumbnail")
        })]
      })
    }
    const FH = 2e3;

    function DH(HH) {
      let {
        schematicId: BH,
        ownedThumbnailCount: LH,
        onClose: rH,
        onThumbnailReady: SH
      } = HH;
      const {
        t: hH
      } = (0, tH.B)(), {
        userContext: CH
      } = (0, IH.e)(), [GH, uH] = (0, AH.useState)(!1), [QH, WH] = (0, AH.useState)(!1), [MH, xH] = (0, AH.useState)(!1), vH = (0, AH.useRef)(), {
        loading: TH,
        eligibility: UH
      } = (0, cH.c)(), VH = (0, cH.d)();
      (0, AH.useEffect)((() => () => {
        clearTimeout(vH.current)
      }), []);
      const OH = [];
      CH.isLoggedIn() || OH.push(hH("thumbnail:mustBeLoggedInToUpload")), LH >= XH.Y && OH.push(hH("thumbnail:thumbnailLimitReachedPleaseDelete", {
        max: XH.Y
      }));
      const bH = null === UH || void 0 === UH ? void 0 : UH.thumbnailUploadWait;
      if (bH && OH.push(VH("accountAge" === bH.reason ? "thumbnail:accountTooNewUntil" : "thumbnail:uploadCooldownUntil", bH.until)), !GH && OH.length > 0) return (0, PH.jsxs)("div", {
        className: "ThumbnailUploaderInner",
        children: [(0, PH.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: hH("thumbnail:cannotUploadThumbnail")
        }), OH.map((HH => (0, PH.jsxs)("div", {
          className: "CannotUploadThumbnailItem",
          children: [(0, PH.jsx)(EH.c, {
            name: "triangle-exclamation"
          }), (0, PH.jsx)("span", {
            children: HH
          })]
        }, HH)))]
      });
      if (TH) return (0, PH.jsx)("div", {
        className: "ThumbnailUploaderInner",
        children: (0, PH.jsx)(zH.d, {})
      });
      return (0, PH.jsxs)("div", {
        className: YH()("ThumbnailUploaderInner", {
          ThumbnailUploaderSuccess: GH
        }),
        children: [GH && (0, PH.jsxs)("div", {
          className: "ThumbnailUploadSuccessOverlay",
          children: [(0, PH.jsxs)("div", {
            className: "ThumbnailUploadSuccessIcon FullyFancyText AnimFadeInScaleUp",
            children: [(0, PH.jsx)(EH.c, {
              name: "check"
            }), (0, PH.jsx)(KH.e, {})]
          }), (0, PH.jsx)("div", {
            className: "ThumbnailUploadSuccessText AnimFadeInScaleUp",
            children: hH("thumbnail:thumbnailUploaded")
          })]
        }), (0, PH.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: hH("thumbnail:uploadThumbnail")
        }), (0, PH.jsxs)("div", {
          className: "ThumbnailUploaderBody",
          children: [(0, PH.jsxs)("div", {
            className: "ThumbnailUploaderLeft",
            children: [(0, PH.jsx)("h3", {
              className: "SchematicPopupSubtitle",
              children: hH("thumbnail:chooseImage", {
                maxSizeKb: qH
              })
            }), (0, PH.jsx)(nH, {
              schematicId: BH,
              hasReadUploadPolicy: QH,
              onPolicyValidationError: () => {
                xH(!0)
              },
              onThumbnailReady: async (HH, BH, LH) => {
                await SH(HH, BH, LH), uH(!0), vH.current = setTimeout(rH, FH)
              }
            })]
          }), (0, PH.jsxs)("div", {
            className: "ThumbnailUploadPolicy",
            children: [(0, PH.jsx)("h3", {
              className: "ThumbnailUploadPolicyTitle",
              children: hH("thumbnail:uploadPolicy")
            }), (0, PH.jsx)(eH.e, {
              allowed: ["thumbnail:policyFollowGuidelines", "thumbnail:policyInGameAssets", "thumbnail:policyLimitText"],
              notAllowed: ["thumbnail:policyCopyrightContent", "thumbnail:policyOutOfGameAssets", "thumbnail:policyBloxdTags", "thumbnail:policyMustReflectGame"]
            }), (0, PH.jsxs)("label", {
              className: YH()("ThumbnailUploadCheckbox Policy", {
                ValidationError: MH && !QH
              }),
              children: [(0, PH.jsx)("input", {
                type: "checkbox",
                checked: QH,
                onChange: HH => {
                  WH(HH.target.checked)
                }
              }), hH("thumbnail:agreeToUploadPolicy")]
            }), MH && !QH && (0, PH.jsx)("div", {
              className: "ThumbnailPolicyError",
              children: hH("thumbnail:policyRequired")
            })]
          })]
        })]
      })
    }

    function wH(HH) {
      let {
        imageUrl: BH,
        thumbnailName: LH,
        onClose: AH
      } = HH;
      const {
        t: rH
      } = (0, tH.B)();
      return (0, PH.jsxs)("div", {
        className: "ThumbnailDeleteConfirm",
        children: [(0, PH.jsx)("div", {
          className: "ThumbnailDeleteConfirmTitle",
          children: rH("thumbnail:deleteThumbnail")
        }), (0, PH.jsxs)("div", {
          className: "ThumbnailDeleteConfirmImageContainer",
          children: [null !== BH && (0, PH.jsx)("img", {
            className: "ThumbnailDeleteConfirmImage",
            src: BH,
            alt: LH
          }), (0, PH.jsx)("div", {
            className: "ThumbnailGridItemLabel",
            children: LH
          })]
        }), (0, PH.jsx)("div", {
          className: "ThumbnailDeleteConfirmSubtitle",
          children: rH("thumbnail:deleteThumbnailConfirmation")
        }), (0, PH.jsxs)("div", {
          className: "ThumbnailDeleteConfirmButtons",
          children: [(0, PH.jsxs)(SH.O, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => AH(!0),
            children: [(0, PH.jsx)(EH.c, {
              name: "trash-can"
            }), " ", rH("general:delete")]
          }), (0, PH.jsx)(SH.m, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => AH(!1),
            children: rH("general:cancel")
          })]
        })]
      })
    }
    var ZH = LH(186);
    const dH = ["thumbnail:policyFollowGuidelines"],
      aH = {
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
          policyRows: dH,
          example: "thumbnail:rejectionSexualExample",
          fix: "thumbnail:rejectionSexualFix"
        },
        "thumbnail-substances-content": {
          policyRows: dH,
          example: "thumbnail:rejectionSubstancesExample",
          fix: "thumbnail:rejectionSubstancesFix"
        },
        "thumbnail-violent-gore-content": {
          policyRows: dH,
          example: "thumbnail:rejectionViolenceExample",
          fix: "thumbnail:rejectionViolenceFix"
        }
      };

    function sH(HH) {
      let {
        rejectedThumbnails: BH,
        isAcknowledging: LH,
        onAcknowledge: AH
      } = HH;
      const {
        t: rH
      } = (0, tH.B)();
      return (0, PH.jsxs)("div", {
        className: "ManageWarningBanner ThumbnailRejectionNotice",
        children: [(0, PH.jsx)("div", {
          className: "ThumbnailRejectionNoticeTitle",
          children: rH("thumbnail:rejectedByModerators")
        }), BH.map((HH => (0, PH.jsx)(JH, {
          rejected: HH
        }, HH.thumbnail.id))), (0, PH.jsx)(SH.u, {
          className: "ThumbnailRejectionNoticeButton",
          onClick: AH,
          disabled: LH,
          children: LH ? (0, PH.jsx)(zH.d, {}) : rH("thumbnail:gotIt")
        })]
      })
    }

    function JH(HH) {
      var BH;
      let {
        rejected: {
          thumbnail: LH,
          rejection: AH
        }
      } = HH;
      const {
        t: rH
      } = (0, tH.B)(), SH = null !== (BH = (0, ZH.d)(aH, AH.policyId)) && void 0 !== BH ? BH : aH["custom-game-bad-thumbnail"], hH = new Date(AH.at).toLocaleDateString();
      return (0, PH.jsxs)("div", {
        className: "RejectedThumbnail",
        children: [(0, PH.jsxs)("div", {
          className: "RejectedThumbnailImage",
          children: [null !== LH.preview && (0, PH.jsx)("img", {
            src: LH.preview,
            alt: LH.name
          }), null === LH.preview && (0, PH.jsx)(EH.c, {
            name: "image-slash"
          })]
        }), (0, PH.jsxs)("div", {
          className: "RejectedThumbnailDetails",
          children: [(0, PH.jsx)("div", {
            className: "RejectedThumbnailName",
            children: LH.name
          }), (0, PH.jsx)("div", {
            children: null !== AH.gameName ? rH("thumbnail:rejectedGameAndDate", {
              game: AH.gameName,
              date: hH
            }) : hH
          }), null !== AH.reason && (0, PH.jsx)("div", {
            children: rH("creatorModeration:moderatorNote", {
              reason: AH.reason
            })
          }), SH.policyRows.length > 0 && (0, PH.jsx)("ul", {
            className: "RejectedThumbnailPolicyRows",
            children: SH.policyRows.map((HH => (0, PH.jsxs)("li", {
              children: [(0, PH.jsx)(EH.c, {
                name: "x"
              }), (0, PH.jsx)("span", {
                children: rH(HH)
              })]
            }, HH)))
          }), (0, PH.jsxs)("div", {
            children: [null !== SH.example && null === AH.reason && `${rH(SH.example)} `, rH(SH.fix)]
          })]
        })]
      })
    }
    var iH = LH(1131);

    function pH(HH) {
      return null !== HH.preview ? HH.preview : HH.approved ? `${iH.clientSideServerUrls.s3Url}/${(0,kH.c)(HH.id)}` : null
    }

    function yH(HH) {
      return null !== HH.pendingKey ? {
        pendingKey: HH.pendingKey
      } : {
        thumbnailId: HH.id
      }
    }

    function HB(HH) {
      var BH, LH;
      let {
        schematicData: hH,
        updateSchematicData: CH,
        publishFormEnabled: XH,
        onClose: GH
      } = HH;
      const {
        t: uH
      } = (0, tH.B)(), {
        userContext: QH,
        isUserContextUpdating: WH
      } = (0, IH.e)(), MH = (0, oH.c)(), [xH, vH] = (0, AH.useState)([]), [TH, UH] = (0, AH.useState)([]), [VH, OH] = (0, AH.useState)(!0), [bH, kH] = (0, AH.useState)(!1), [lH, KH] = (0, AH.useState)(null !== (BH = hH.customThumbnailId) && void 0 !== BH ? BH : null), [cH, eH] = (0, AH.useState)(null), qH = (0, AH.useRef)(null !== (LH = hH.customThumbnailId) && void 0 !== LH ? LH : null), gH = (0, AH.useRef)(0), NH = (0, AH.useRef)(null), RH = (0, AH.useRef)(null), jH = (0, AH.useRef)(null), nH = (0, AH.useRef)(!1);

      function FH(HH, BH) {
        jH.current && (clearTimeout(jH.current), jH.current = null), eH(HH), null !== HH && BH && (jH.current = setTimeout((() => {
          eH(null), jH.current = null
        }), 5e3))
      }(0, AH.useEffect)((() => () => {
        clearTimeout(RH.current), clearTimeout(jH.current)
      }), []);
      const ZH = (0, AH.useCallback)((() => {
        OH(!0), mH.d.getOwnedThumbnails(QH).then((HH => {
          const BH = [],
            LH = [];
          for (const AH of HH.thumbnails) AH.rejection ? BH.push({
            thumbnail: AH,
            rejection: AH.rejection
          }) : LH.push(AH);
          BH.sort(((HH, BH) => BH.rejection.at - HH.rejection.at)), LH.sort(((HH, BH) => {
            const LH = HH.approved ? 1 : 0,
              AH = (BH.approved ? 1 : 0) - LH;
            return 0 !== AH ? AH : BH.lastUpdatedAt - HH.lastUpdatedAt
          })), UH(BH), vH(LH)
        })).catch((HH => {
          console.error("Failed to fetch thumbnails:", HH)
        })).finally((() => {
          OH(!1)
        }))
      }), [QH]);
      async function dH(HH, BH, LH) {
        return mH.d.uploadSchematicThumbnail(QH, HH, BH, LH).then((() => {
          FH({
            text: uH("thumbnail:uploadedAwaitingModeration"),
            type: "success"
          }, !0), ZH()
        }))
      }

      function aH() {
        gH.current = Date.now(), RH.current = null;
        const HH = NH.current;
        NH.current = null, FH({
          text: uH("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), mH.d.setSchematicThumbnail(QH, hH.schematicId, HH).then((() => {
          MH.current && (FH({
            text: uH("thumbnail:thumbnailUpdated"),
            type: "success"
          }, !0), qH.current = HH, CH("customThumbnailId", HH), CH("customThumbnailBlurhash", void 0), CH("customThumbnailVariants", void 0))
        })).catch((HH => {
          MH.current && (FH({
            text: HH.errorMessageForUser ? uH(HH.errorMessageForUser, HH.errorMessageTranslationParams) : uH("thumbnail:failedToSetThumbnail"),
            type: "error"
          }, !0), KH(qH.current))
        }))
      }

      function JH(HH) {
        KH(HH), NH.current = HH;
        const BH = Date.now() - gH.current;
        BH >= 1e3 ? aH() : (FH({
          text: uH("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), RH.current || (RH.current = setTimeout((() => {
          aH()
        }), 1e3 - BH)))
      }
      return (0, AH.useEffect)((() => {
        !1 === WH && ZH()
      }), [WH, ZH]), (0, PH.jsxs)("div", {
        className: "BloxdForm ThumbnailSection",
        children: [(0, PH.jsxs)("div", {
          className: "SectionTitle",
          children: [uH("thumbnail:gameThumbnail"), cH && (0, PH.jsx)("span", {
            className: YH()("ThumbnailActionMsg", `ThumbnailActionMsg--${cH.type}`),
            children: cH.text
          })]
        }), (0, PH.jsxs)("div", {
          className: "SectionBody",
          children: [TH.length > 0 && (0, PH.jsx)(sH, {
            rejectedThumbnails: TH,
            isAcknowledging: bH,
            onAcknowledge: async function() {
              kH(!0);
              const HH = await Promise.allSettled(TH.map((HH => {
                let {
                  thumbnail: BH
                } = HH;
                return mH.d.deleteSchematicThumbnail(QH, yH(BH))
              })));
              if (!MH.current) return;
              kH(!1);
              const BH = HH.filter((HH => "rejected" === HH.status));
              BH.length > 0 && (console.error("Failed to acknowledge some thumbnail rejections:", BH), FH({
                text: uH("thumbnail:failedToHideRejections"),
                type: "error"
              }, !0)), ZH()
            }
          }), (0, PH.jsxs)("div", {
            className: "ThumbnailGrid",
            children: [(0, PH.jsxs)("div", {
              className: YH()("ThumbnailGridItem ThumbnailGridItemDefault", {
                ThumbnailGridItemSelected: null === lH
              }),
              onClick: () => JH(null),
              children: [(0, PH.jsx)(fH.b, {
                game: {
                  schematicId: hH.schematicId,
                  imageBlurhash: hH.imageBlurhash
                }
              }), (0, PH.jsx)("div", {
                className: "ThumbnailGridItemLabel ThumbnailDefaultLabel",
                children: uH("general:default")
              })]
            }), VH && (0, PH.jsx)(zH.d, {}), xH.map((HH => {
              var BH;
              const LH = pH(HH);
              return (0, PH.jsxs)("div", {
                className: YH()("ThumbnailGridItem", {
                  ThumbnailGridItemSelected: HH.approved && lH === HH.id,
                  ThumbnailGridItemPending: !HH.approved
                }),
                onClick: () => {
                  HH.approved && JH(HH.id)
                },
                children: [null !== LH && (0, PH.jsx)("img", {
                  src: LH,
                  alt: HH.name
                }), (0, PH.jsx)(SH.O, {
                  className: "ThumbnailDeleteButton",
                  onClick: BH => async function(HH, BH) {
                    HH.stopPropagation();
                    const LH = await rH.NotificationProvider.showCustomPopup({
                        body: HH => (0, PH.jsx)(wH, {
                          imageUrl: pH(BH),
                          thumbnailName: BH.name,
                          onClose: BH => {
                            BH && (nH.current = !0), HH()
                          }
                        }),
                        middleScreenPopupClassName: "ThumbnailDeleteConfirmPopup",
                        onClose: GH
                      }).getResult(),
                      AH = nH.current;
                    nH.current = !1, AH && !0 === LH && (MH.current && FH({
                      text: uH("thumbnail:deletingThumbnail"),
                      type: "info"
                    }, !1), mH.d.deleteSchematicThumbnail(QH, yH(BH)).then((() => {
                      MH.current && (FH({
                        text: uH("thumbnail:thumbnailDeleted"),
                        type: "success"
                      }, !0), null !== BH.id && qH.current === BH.id && JH(null), ZH())
                    })).catch((HH => {
                      MH.current && FH({
                        text: HH.errorMessageForUser ? uH(HH.errorMessageForUser, HH.errorMessageTranslationParams) : uH("thumbnail:failedToDeleteThumbnail"),
                        type: "error"
                      }, !0)
                    })))
                  }(BH, HH),
                  children: (0, PH.jsx)(EH.c, {
                    name: "trash-can"
                  })
                }), HH.approved && (0, PH.jsx)("div", {
                  className: "ThumbnailGridItemLabel",
                  children: HH.name
                }), !HH.approved && (0, PH.jsx)("div", {
                  className: "ThumbnailUnapprovedIcon",
                  children: (0, PH.jsx)(EH.c, {
                    name: "hourglass-clock"
                  })
                }), !HH.approved && (0, PH.jsxs)("div", {
                  className: "ThumbnailGridItemLabel ThumbnailPendingLabel",
                  children: [HH.name, (0, PH.jsx)("br", {}), uH("thumbnail:pendingApproval")]
                })]
              }, null !== (BH = HH.id) && void 0 !== BH ? BH : HH.pendingKey)
            })), (0, PH.jsxs)("div", {
              className: YH()("ThumbnailGridItem ThumbnailUploadTile", {
                ThumbnailUploadTileDisabled: !XH
              }),
              onClick: () => {
                XH && function(HH) {
                  let {
                    schematicId: BH,
                    ownedThumbnailCount: LH,
                    onThumbnailReady: AH,
                    onClose: SH
                  } = HH;
                  rH.NotificationProvider.showCustomPopup({
                    body: HH => (0, PH.jsx)(DH, {
                      schematicId: BH,
                      ownedThumbnailCount: LH,
                      onClose: HH,
                      onThumbnailReady: AH
                    }),
                    middleScreenPopupClassName: "SchematicThumbnailPopup",
                    onClose: SH,
                    unlockPointerKey: "schematicThumbnailUploaderPopup"
                  })
                }({
                  schematicId: hH.schematicId,
                  ownedThumbnailCount: xH.length,
                  onThumbnailReady: dH,
                  onClose: GH
                })
              },
              children: [(0, PH.jsx)(EH.c, {
                name: "plus"
              }), (0, PH.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: uH("thumbnail:uploadThumbnail")
              })]
            })]
          })]
        })]
      })
    }
    var BB = LH(2227),
      LB = LH(5473),
      AB = LH(5476),
      rB = LH(5517);

    function SB(HH) {
      let {
        schematicData: BH,
        setTexturePack: LH,
        initializeTexturePack: rH,
        publishFormEnabled: SH
      } = HH;
      const {
        t: hH
      } = (0, tH.B)(), [zH, CH] = (0, AH.useState)(null), [EH, XH] = (0, AH.useState)(null), [GH, uH] = (0, AH.useState)(!1), QH = (0, oH.c)(), WH = SH && !GH, MH = BH.customTexturePackKey;

      function xH(HH) {
        var BH;
        CH(HH.metaData.id), XH(null !== (BH = HH.metaData.fromFolderName) && void 0 !== BH ? BH : null), (HH.metaData.id !== BB.l.CUSTOM || HH.metaData.fromFolderName) && LH(HH)
      }
      return (0, AH.useEffect)((() => {
        MH && (uH(!0), (0, LB.b)(MH).then((HH => {
          var BH;
          QH.current && (HH ? (CH(HH.metaData.id), XH(null !== (BH = HH.metaData.fromFolderName) && void 0 !== BH ? BH : null), rH(HH)) : console.error(`No texture pack at ${MH}`))
        })).catch((HH => {
          console.error("Error fetching texture pack: ", HH)
        })).finally((() => {
          uH(!1)
        })))
      }), [MH, rH, QH]), (0, PH.jsxs)("div", {
        className: "BloxdForm TexturePackSection",
        children: [(0, PH.jsx)("div", {
          className: "SectionTitle",
          children: hH("customTexturePack:customTexturePack")
        }), (0, PH.jsxs)("div", {
          className: "TexturePackList",
          children: [(0, PH.jsx)("div", {
            className: YH()("TexturePack", {
              Selected: null === zH && !GH,
              Disabled: !WH
            }),
            onClick: () => {
              WH && (CH(null), LH(null), XH(null))
            },
            children: (0, PH.jsx)("div", {
              className: "TexturePackName",
              children: "No Override"
            })
          }), Object.values(BB.l).map((HH => (0, PH.jsx)(AB.g, {
            id: HH,
            isSelected: HH === zH,
            setSelected: xH,
            disabled: !WH
          }, HH)))]
        }), zH === BB.l.CUSTOM && (0, PH.jsx)(rB.b, {
          folderName: EH,
          onTexturePackUpdated: xH,
          disabled: !WH,
          maxFileSizeMb: 25,
          packOwner: "customGame"
        })]
      })
    }
    var hB = LH(5560);

    function tB(HH) {
      var BH;
      let {
        gameCategory: LH,
        setGameCategory: AH,
        disabled: rH
      } = HH;
      const hH = null !== (BH = (0, uH.nb)(LH)) && void 0 !== BH ? BH : "other";
      return (0, PH.jsxs)("div", {
        className: "GameCategoryPicker",
        children: [(0, PH.jsx)(MH.g, {
          label: "worldBuilder:gameCategoryGroup",
          className: "GameCategoryGroup",
          disabled: rH,
          children: (0, PH.jsx)(xH.b, {
            options: uH.bb.map((HH => ({
              value: HH,
              label: uH.ab[HH]
            }))),
            value: hH,
            onChange: HH => {
              HH.value !== hH && AH(uH.X[HH.value][0])
            }
          })
        }), (0, PH.jsx)(MH.g, {
          label: "worldBuilder:gameCategory",
          className: "GameCategory",
          disabled: rH,
          children: (0, PH.jsx)("div", {
            className: "GameCategoryOptions",
            children: uH.X[hH].map((HH => (0, PH.jsx)(SH.W, {
              active: HH === LH,
              onClick: () => {
                AH(HH)
              },
              children: (0, uH.mb)(HH)
            }, HH)))
          })
        })]
      })
    }
    var zB = LH(5431);

    function CB(HH) {
      let {
        editor: BH,
        onClose: LH
      } = HH;
      const {
        t: AH
      } = (0, tH.B)(), {
        schematicData: rH,
        updateSchematicData: SH,
        publishFormEnabled: zH,
        formEnabled: CH
      } = BH;
      return (0, PH.jsxs)(PH.Fragment, {
        children: [(0, PH.jsxs)(TH, {
          icon: "pen-to-square",
          title: AH("worldBuilder:basicsSection"),
          disabled: !CH,
          children: [(0, PH.jsx)(UH, {
            label: AH("general:name"),
            caption: AH("worldBuilder:schematicNameTagsHint"),
            children: (0, PH.jsx)(hH.e, {
              className: "SchematicPageName",
              defaultValue: rH.name,
              onValueChange: HH => SH("name", HH),
              placeholderText: AH("worldBuilder:schematicNamePlaceholder"),
              maxLength: XH.qb
            })
          }), (0, PH.jsx)(UH, {
            label: AH("general:description"),
            children: (0, PH.jsx)(hH.e, {
              className: "SchematicPageDescription",
              useTextarea: !0,
              defaultValue: rH.description,
              onValueChange: HH => SH("description", HH),
              placeholderText: AH("worldBuilder:schematicDescriptionPlaceholder"),
              maxLength: XH.nb
            })
          }), (0, PH.jsx)(tB, {
            gameCategory: rH.gameCategory,
            setGameCategory: HH => SH("gameCategory", HH),
            disabled: !zH
          }), !0 === rH.gamePublished && (0, PH.jsx)(HB, {
            schematicData: rH,
            updateSchematicData: SH,
            publishFormEnabled: zH,
            onClose: function() {
              null === LH || void 0 === LH || LH()
            }
          }), (0, PH.jsx)(zB.e, {})]
        }), (0, PH.jsx)(OH, {
          schematicData: rH,
          updateSchematicData: SH,
          publishFormEnabled: zH,
          formEnabled: CH
        }), !0 === rH.gamePublished && (0, PH.jsx)(TH, {
          icon: "palette",
          title: AH("worldBuilder:texturePackSection"),
          disabled: !CH,
          children: (0, PH.jsx)(SB, {
            schematicData: rH,
            setTexturePack: BH.setTexturePack,
            initializeTexturePack: BH.initializeTexturePack,
            publishFormEnabled: zH
          })
        })]
      })
    }

    function EB(HH) {
      let {
        editor: BH
      } = HH;
      const {
        t: LH
      } = (0, tH.B)(), {
        schematicData: AH,
        formEnabled: rH,
        hasUnsavedChanges: hH,
        publishSuspendedUntil: XH
      } = BH, GH = (0, cH.g)(), YH = !0 === AH.gamePublished ? XH : null, uH = rH && hH && null === YH;
      return (0, PH.jsxs)("footer", {
        className: "SchematicPageFooter",
        children: [null !== YH && (0, PH.jsx)("div", {
          className: "SchematicPageFooterNotice",
          children: GH(YH)
        }), rH && hH && null === YH && (0, PH.jsxs)("div", {
          className: "SchematicPageFooterStatus",
          children: [(0, PH.jsx)("span", {
            className: "SchematicPageFooterStatusDot"
          }), LH("worldBuilder:unsavedChanges")]
        }), (0, PH.jsx)(CH.g, {
          tooltipInner: (0, PH.jsx)("div", {
            className: "SaveButtonTooltip",
            children: LH(rH && !hH ? "worldBuilder:saveChangesNoneDescription" : "worldBuilder:saveChangesDescription")
          }),
          children: (0, PH.jsxs)(SH.i, {
            className: "SaveChangesButton",
            onClick: () => BH.saveSchematic(AH.gamePublished),
            disabled: !uH,
            children: [(0, PH.jsxs)("span", {
              className: rH ? "" : "SaveChangesButtonBodyHidden",
              children: [(0, PH.jsx)(EH.c, {
                name: "wrench"
              }), " ", LH("worldBuilder:saveChanges")]
            }), !rH && (0, PH.jsx)(zH.d, {})]
          })
        })]
      })
    }

    function XB(HH) {
      let {
        schematic: BH,
        onSchematicUpdate: LH,
        onClose: rH,
        inSourceWorld: hH
      } = HH;
      const {
        t: zH
      } = (0, tH.B)();

      function CH() {
        null === rH || void 0 === rH || rH()
      }
      const EH = (0, hB.d)(BH, {
        onNavigateAway: CH,
        inSourceWorld: hH
      });
      return (0, AH.useEffect)((() => {
        null === LH || void 0 === LH || LH(EH.schematicData)
      }), [EH.schematicData, LH]), (0, PH.jsxs)("div", {
        className: "SchematicPage SchematicPagePopupVariant",
        children: [(0, PH.jsxs)("div", {
          className: "SchematicPageBody",
          children: [(0, PH.jsx)(SH.e, {
            onClick: CH,
            children: zH("worldBuilder:back")
          }), (0, PH.jsx)(TH, {
            icon: "rocket-launch",
            title: zH("worldBuilder:actionsSection"),
            disabled: !EH.formEnabled,
            children: (0, PH.jsx)(bH.c, {
              editor: EH
            })
          }), (0, PH.jsx)(CB, {
            editor: EH,
            onClose: CH
          })]
        }), (0, PH.jsx)(EB, {
          editor: EH
        })]
      })
    }

    function GB(HH) {
      let {
        schematic: BH,
        onSchematicUpdate: LH,
        onClose: AH,
        inSourceWorld: SH
      } = HH;
      rH.NotificationProvider.showCustomPopup({
        body: HH => (0, PH.jsx)(XB, {
          schematic: BH,
          onSchematicUpdate: LH,
          onClose: HH,
          inSourceWorld: SH
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: AH,
        unlockPointerKey: "schematicPagePopup"
      })
    }
  },
  5426: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => YH
    });
    var AH = LH(1038),
      rH = LH.n(AH),
      SH = LH(1123),
      hH = LH(1315),
      tH = LH(1455),
      zH = LH(1365),
      CH = LH(1313),
      EH = LH(5431),
      XH = LH(5438),
      GH = LH(1225);

    function YH(HH) {
      let {
        editor: BH,
        className: LH,
        publishRefusal: AH = null
      } = HH;
      const {
        t: YH
      } = (0, SH.B)(), {
        schematicData: uH,
        formEnabled: QH,
        publishFormEnabled: WH,
        publishSuspendedUntil: MH
      } = BH, xH = !QH || !WH, vH = (0, XH.g)();
      return (0, GH.jsxs)("div", {
        className: rH()("PublishButtonContainer", LH),
        children: [BH.canEditSourceWorld && (0, GH.jsxs)(tH.i, {
          onClick: BH.editSourceWorld,
          disabled: xH,
          children: [(0, GH.jsx)(hH.c, {
            name: "edit"
          }), " ", YH("worldBuilder:editSourceWorld")]
        }), !uH.gamePublished && (0, GH.jsx)(zH.g, {
          tooltipInner: (0, GH.jsx)("div", {
            className: "PublishButtonTooltip",
            children: null !== AH && void 0 !== AH ? AH : YH("worldBuilder:publishAsGameDescription")
          }),
          children: (0, GH.jsxs)(tH.u, {
            onClick: () => BH.saveSchematic(!0),
            disabled: xH || null !== AH || null !== MH,
            children: [(0, GH.jsx)(hH.c, {
              name: "rocket-launch"
            }), " ", YH("worldBuilder:publishAsGame"), " ", (0, GH.jsx)(hH.c, {
              name: "info-circle"
            })]
          })
        }), !0 === uH.gamePublished && (0, GH.jsxs)(GH.Fragment, {
          children: [(0, GH.jsx)(zH.g, {
            tooltipInner: (0, GH.jsx)("div", {
              className: "PublishButtonTooltip",
              children: YH("worldBuilder:unpublishAsGameDescription")
            }),
            children: (0, GH.jsxs)(tH.O, {
              onClick: BH.unpublishSchematic,
              disabled: xH,
              children: [(0, GH.jsx)(hH.c, {
                name: "rocket-launch"
              }), " ", YH("worldBuilder:unpublishAsGame"), " ", (0, GH.jsx)(hH.c, {
                name: "info-circle"
              })]
            })
          }), (0, GH.jsxs)(tH.i, {
            onClick: BH.playGame,
            disabled: xH,
            children: [(0, GH.jsx)(hH.c, {
              name: "joystick"
            }), " ", YH("general:playGame")]
          })]
        }), !QH && (0, GH.jsx)(CH.d, {
          loaderType: "Secondary"
        }), !uH.gamePublished && null !== MH && (0, GH.jsx)("div", {
          className: "PublishSuspendedNotice",
          children: vH(MH)
        }), BH.askingPublishingPolicy && (0, GH.jsx)(EH.c, {
          onAnswer: BH.answerPublishingPolicy
        })]
      })
    }
  },
  5473: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => rH
    });
    var AH = LH(1131);
    async function rH(HH) {
      const BH = await fetch(`${AH.clientSideServerUrls.s3Url}/${HH}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === BH.status || 403 === BH.status) return null;
      if (!BH.ok) throw new Error(`Failed to download the texture pack (${BH.status})`);
      return await BH.json()
    }
  },
  5438: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => tH,
      d: () => zH,
      g: () => CH
    });
    var AH = LH(45),
      rH = LH(1502),
      SH = LH(1123),
      hH = LH(1061);

    function tH() {
      let HH = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      const {
        userContext: BH
      } = (0, hH.e)(), [LH, SH] = (0, AH.useState)((() => ({
        loading: HH && BH.isLoggedIn(),
        eligibility: null
      })));
      if ((0, AH.useEffect)((() => {
          if (!HH || !BH.isLoggedIn()) return void SH({
            loading: !1,
            eligibility: null
          });
          let LH = !1;
          return rH.d.getCreatorEligibility(BH).then((HH => {
            LH || SH({
              loading: !1,
              eligibility: HH
            })
          })).catch((HH => {
            console.warn("Failed to load creator eligibility", HH), LH || SH({
              loading: !1,
              eligibility: null
            })
          })), () => {
            LH = !0
          }
        }), [BH, HH]), null === LH.eligibility) return LH;
      const tH = Date.now(),
        {
          thumbnailUploadWait: zH,
          publishSuspendedUntil: CH
        } = LH.eligibility;
      return {
        loading: LH.loading,
        eligibility: {
          thumbnailUploadWait: null !== zH && zH.until > tH ? zH : null,
          publishSuspendedUntil: null !== CH && CH > tH ? CH : null
        }
      }
    }

    function zH() {
      const {
        t: HH,
        selectedLanguage: BH
      } = (0, SH.B)();
      return (LH, AH) => HH(LH, {
        date: (0, SH.h)(BH.code, LH, AH, {
          dateStyle: "medium",
          timeStyle: "short"
        })
      })
    }

    function CH() {
      const {
        t: HH,
        selectedLanguage: BH
      } = (0, SH.B)();
      return LH => {
        const AH = "worldBuilder:publishSuspended";
        return HH(AH, {
          date: (0, SH.h)(BH.code, AH, LH, {
            dateStyle: "medium",
            timeStyle: "short",
            timeZone: "UTC"
          })
        })
      }
    }
  },
  5560: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => vH
    });
    var AH = LH(45),
      rH = LH(1306),
      SH = LH(1005),
      hH = LH(152),
      tH = LH(2363),
      zH = LH(1543),
      CH = LH(15),
      EH = LH(1998),
      XH = LH(1502),
      GH = LH(4991),
      YH = LH(1352),
      uH = LH(1922),
      QH = LH(1061),
      WH = LH(1509),
      MH = LH(5438);

    function xH(HH, BH) {
      return {
        schematicId: HH.schematicId,
        name: HH.name,
        description: HH.description,
        gamePublished: BH,
        gameCategory: HH.gameCategory,
        defaultGamemode: HH.defaultGamemode,
        voidDeathHeight: HH.voidDeathHeight,
        disableKeepInventory: HH.disableKeepInventory,
        disableTpRequests: HH.disableTpRequests,
        disableLobbySpawn: HH.disableLobbySpawn,
        disableMobs: HH.disableMobs,
        disableSpawnProtection: HH.disableSpawnProtection,
        disableFallDamage: HH.disableFallDamage,
        worldBorder: HH.worldBorder,
        hideLobbyCode: HH.hideLobbyCode,
        enableSmpMarketplace: HH.enableSmpMarketplace,
        enableSurvivalGuns: HH.enableSurvivalGuns,
        enableSpawnReset: HH.enableSpawnReset,
        enableDayNight: HH.enableDayNight,
        persistWorld: HH.persistWorld,
        persistInventory: HH.persistInventory
      }
    }

    function vH(HH) {
      var BH, LH;
      let {
        onNavigateAway: vH,
        inSourceWorld: PH = !1,
        canManage: TH = !0
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const {
        userContext: UH
      } = (0, QH.e)(), VH = (0, WH.useNavigatePreserveSearch)(), [OH, bH] = (0, AH.useState)({
        ...HH
      }), [kH, mH] = (0, AH.useState)("Enter"), [oH, IH] = (0, AH.useState)(void 0), [fH, lH] = (0, AH.useState)(!1), KH = (0, AH.useRef)(xH(HH, HH.gamePublished)), cH = (0, AH.useRef)(void 0), eH = "Enter" === kH, qH = null !== (BH = null === (LH = (0, MH.c)(TH).eligibility) || void 0 === LH ? void 0 : LH.publishSuspendedUntil) && void 0 !== BH ? BH : null, gH = UH.playerHasRank("developer") || UH.playerHasRank("admin") || "Enter" === kH && !1 !== OH.schematicContainsSpawnBlock, NH = void 0 !== oH && oH !== cH.current || JSON.stringify(xH(OH, OH.gamePublished)) !== JSON.stringify(KH.current);

      function RH(HH, BH) {
        bH((LH => ({
          ...LH,
          [HH]: BH
        })))
      }
      const jH = (0, AH.useCallback)((HH => {
        cH.current = HH, IH(HH)
      }), []);

      function nH() {
        return (0, zH.z)((0, SH.t)(OH.schematicId), OH)
      }

      function FH(HH, BH) {
        mH("Loading");
        const LH = xH(OH, HH),
          AH = oH !== cH.current ? oH : void 0;
        XH.d.updateSchematic(UH, LH, AH, BH).then((BH => {
          let {
            customTexturePackKey: AH
          } = BH;
          mH("Success"), RH("customTexturePackKey", AH), KH.current = LH, cH.current = void 0, IH(void 0), !HH || OH.gamePublished || vH || uH.h.showGamePublished(OH.name, nH()), setTimeout((() => {
            RH("gamePublished", HH), mH("Enter")
          }), 1e3)
        })).catch((HH => {
          if (HH instanceof hH.e && HH.errorMessageForUser === tH.C && void 0 === BH) return mH("Enter"), void lH(!0);
          var LH;
          (console.error("Failed to save schematic:", HH), mH("Error"), HH instanceof hH.e && HH.errorMessageForUser) && YH.NotificationProvider.showAlertPopup({
            title: "worldBuilder:changesNotSaved",
            subtitle: HH.errorMessageForUser,
            textOpts: {
              subtitle: null !== (LH = HH.errorMessageTranslationParams) && void 0 !== LH ? LH : void 0
            },
            confirmText: "general:ok"
          });
          setTimeout((() => {
            mH("Enter")
          }), 1e3)
        }))
      }
      return {
        schematicData: OH,
        updateSchematicData: RH,
        setTexturePack: IH,
        initializeTexturePack: jH,
        updateState: kH,
        formEnabled: eH,
        publishFormEnabled: gH,
        hasUnsavedChanges: NH,
        publishSuspendedUntil: qH,
        canEditSourceWorld: !PH,
        saveSchematic: FH,
        unpublishSchematic: function() {
          YH.NotificationProvider.showPromptPopup({
            icon: "rocket-launch",
            title: "worldBuilder:unpublishAsGameConfirmTitle",
            subtitle: "worldBuilder:unpublishAsGameConfirmSubtitle",
            confirmText: "worldBuilder:unpublishAsGame",
            cancelText: "general:cancel",
            destructive: !0,
            unlockPointerKey: "unpublishGamePrompt"
          }).getResult().then((HH => {
            !0 === HH && FH(!1)
          }))
        },
        askingPublishingPolicy: fH,
        answerPublishingPolicy: function(HH) {
          lH(!1), HH && FH(!0, tH.D)
        },
        editSourceWorld: function() {
          mH("Loading"), GH.e.getSourceWorld(OH.schematicId).then((HH => {
            EH.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, CH.l)("other"), VH((0, rH.b)("classic", HH)), null === vH || void 0 === vH || vH()
          })).catch((HH => {
            console.error("Failed to get source world:", HH), mH("Error"), setTimeout((() => {
              mH("Enter")
            }), 1e3)
          }))
        },
        playGame: function() {
          EH.gameBridge.send("leaveGame", {
            reloadPath: "/"
          }), VH(nH()), null === vH || void 0 === vH || vH()
        }
      }
    }
  },
  5410: () => {}
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);