export const id = 120;
export const ids = [120];
export const modules = {
  5817: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => KR,
      g: () => VR,
      h: () => wR
    });
    GR(5820);
    var yR = GR(1270),
      tR = GR(1163),
      uR = GR.n(tR),
      ZR = GR(1501),
      qR = (GR(66), GR(5141)),
      iR = GR(1468),
      fR = GR(1378);

    function VR(RR) {
      let {
        children: JR,
        label: GR,
        className: tR,
        circleInfoText: qR,
        disabled: VR,
        onLabelClick: KR
      } = RR;
      const {
        t: wR
      } = (0, yR.A)(), rR = (0, fR.jsxs)("div", {
        className: uR()("Label", {
          ClickableLabel: void 0 !== KR
        }),
        onClick: KR,
        children: [wR(GR), qR && (0, fR.jsx)(iR.d, {
          name: "circle-info"
        })]
      });
      return (0, fR.jsxs)("div", {
        className: uR()("LabeledInput", {
          [tR]: tR,
          DisabledLabelInput: VR
        }),
        children: [qR && (0, fR.jsx)(ZR.h, {
          tooltipInner: (0, fR.jsx)("div", {
            className: "LabeledInputTooltip",
            children: wR(qR)
          }),
          children: rR
        }), !qR && rR, JR]
      })
    }

    function KR(RR) {
      let {
        checked: JR,
        setChecked: GR,
        disabled: yR = !1
      } = RR;
      return (0, fR.jsx)("div", {
        className: "OtherInput ClickableOtherInput",
        "data-pad-focusable": !0,
        "aria-disabled": yR || void 0,
        onClick: RR => {
          yR || GR(!JR)
        },
        children: (0, fR.jsx)(qR.d, {
          checked: JR,
          onChange: RR => {
            GR(RR.target.checked)
          },
          disabled: yR
        })
      })
    }

    function wR(RR) {
      let {
        checked: JR,
        setChecked: GR,
        disabled: yR
      } = RR;
      return (0, fR.jsx)("div", {
        className: uR()("SwitchContainer", {
          SwitchContainerDisabled: yR
        }),
        onClick: () => {
          yR || GR(!JR)
        },
        children: (0, fR.jsx)(qR.d, {
          className: "SwitchCheckbox",
          checked: JR,
          onChange: RR => {
            GR(RR.target.checked)
          },
          disabled: !!yR
        })
      })
    }
  },
  5828: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => fR
    });
    var yR = GR(1163),
      tR = GR.n(yR),
      uR = GR(5425),
      ZR = GR(1270),
      qR = GR(1378);
    const iR = [...uR.j, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function fR(RR) {
      const {
        disabled: JR,
        hideWrapper: GR
      } = RR, {
        t: yR
      } = (0, ZR.A)(), fR = RR.advancedMode ? iR.map((JR => [JR, RR.callbacks[JR]])) : uR.j.map((JR => [JR, RR.callbacks[JR]])), KR = (0, qR.jsx)("div", {
        className: tR()("PluginsGrid", {
          SectionBody: !GR
        }),
        children: fR.map((RR => {
          let [GR, yR] = RR;
          return (0, qR.jsx)(VR, {
            plugin: GR,
            callbacks: yR,
            disabled: JR
          }, GR)
        }))
      });
      return GR ? KR : (0, qR.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, qR.jsx)("div", {
          className: "SectionTitle",
          children: yR("worldBuilder:pluginsSection")
        }), KR]
      })
    }

    function VR(RR) {
      let {
        plugin: JR,
        callbacks: {
          isEnabled: GR,
          JA: yR
        },
        disabled: uR
      } = RR;
      const {
        t: iR
      } = (0, ZR.A)(), fR = GR();
      return (0, qR.jsxs)("div", {
        className: tR()("PluginCard", {
          PluginCardEnabled: fR,
          PluginCardDisabledForm: uR
        }),
        "data-pad-focusable": !0,
        "aria-disabled": uR || void 0,
        onClick: () => {
          uR || yR(!fR)
        },
        children: [(0, qR.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, qR.jsx)("img", {
            src: `/textures/games/classic/customGames/${JR}.png`,
            alt: JR
          })
        }), (0, qR.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, qR.jsx)("div", {
            className: "PluginCardTitle",
            children: iR(KR[JR])
          }), (0, qR.jsx)("div", {
            className: "PluginCardDescription",
            children: iR(wR[JR])
          })]
        }), (0, qR.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: iR(fR ? "general:on" : "general:off")
        })]
      })
    }
    const KR = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      wR = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  5987: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => fR
    });
    var yR = GR(1163),
      tR = GR.n(yR),
      uR = GR(1270),
      ZR = GR(1468),
      qR = GR(1378);

    function iR(RR) {
      let {
        textKey: JR,
        allowed: GR
      } = RR;
      const {
        t: yR
      } = (0, uR.A)();
      return (0, qR.jsxs)("li", {
        className: tR()("PolicyListItem", GR ? "Allowed" : "NotAllowed"),
        children: [(0, qR.jsx)(ZR.d, {
          name: GR ? "check" : "x"
        }), (0, qR.jsx)("span", {
          children: yR(JR)
        })]
      })
    }

    function fR(RR) {
      let {
        allowed: JR,
        notAllowed: GR
      } = RR;
      return (0, qR.jsxs)("ul", {
        className: "PolicyList",
        children: [JR.map((RR => (0, qR.jsx)(iR, {
          textKey: RR,
          allowed: !0
        }, RR))), GR.map((RR => (0, qR.jsx)(iR, {
          textKey: RR,
          allowed: !1
        }, RR)))]
      })
    }
  },
  5982: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => AR,
      f: () => CR
    });
    var yR = GR(66),
      tR = GR(1163),
      uR = GR.n(tR),
      ZR = GR(83),
      qR = GR(3029),
      iR = GR(1270),
      fR = GR(5817),
      VR = GR(1468),
      KR = GR(1496),
      wR = GR(1590),
      rR = GR(5383),
      eR = GR(5987),
      aR = GR(1378);

    function LR(RR) {
      return (0, ZR.createPortal)((0, aR.jsx)(KR.b, {
        ...RR
      }), document.body)
    }
    const nR = qR.B.map((RR => `worldBuilder:publishingPolicy_${RR}`)),
      UR = Object.keys(qR.C).map((RR => `worldBuilder:publishingPolicy_${RR}`));

    function WR(RR) {
      let {
        onScrolledToEnd: JR
      } = RR;
      const GR = (0, yR.useRef)(null),
        {
          after: tR
        } = (0, rR.b)(GR, "y");
      return (0, yR.useEffect)((() => {
        tR || null === JR || void 0 === JR || JR()
      }), [tR, JR]), (0, aR.jsx)("div", {
        ref: GR,
        className: uR()("PublishingPolicyRows", {
          PublishingPolicyRowsMoreBelow: tR
        }),
        tabIndex: 0,
        "data-pad-focusable": !0,
        children: (0, aR.jsx)(eR.e, {
          allowed: nR,
          notAllowed: UR
        })
      })
    }

    function AR(RR) {
      let {
        onAnswer: JR
      } = RR;
      const [GR, tR] = (0, yR.useState)(!1), [uR, ZR] = (0, yR.useState)(!1), qR = (0, yR.useCallback)((() => {
        ZR(!0)
      }), []);
      return (0, aR.jsx)(LR, {
        close: () => {
          JR(!1)
        },
        disableExitButton: !0,
        body: (0, aR.jsxs)(KR.g, {
          className: "PublishingPolicyPopup",
          title: "worldBuilder:publishingPolicy",
          padStartsOn: "content",
          confirm: {
            text: "worldBuilder:publishAsGame",
            disabled: !GR,
            onClick: () => {
              JR(!0)
            }
          },
          cancel: {
            text: "general:cancel",
            onClick: () => {
              JR(!1)
            }
          },
          children: [(0, aR.jsx)(WR, {
            onScrolledToEnd: qR
          }), (0, aR.jsx)(fR.g, {
            className: "PublishingPolicyAgree",
            label: uR ? "worldBuilder:agreeToPublishingPolicy" : "worldBuilder:scrollToAgreeToPublishingPolicy",
            disabled: !uR,
            onLabelClick: () => {
              tR(!GR)
            },
            children: (0, aR.jsx)(fR.c, {
              checked: GR,
              setChecked: tR,
              disabled: !uR
            })
          })]
        })
      })
    }

    function CR() {
      const {
        t: RR
      } = (0, iR.A)(), [JR, GR] = (0, yR.useState)(!1);
      return (0, aR.jsxs)(aR.Fragment, {
        children: [(0, aR.jsxs)(wR.U, {
          className: "PublishingPolicyLink",
          onClick: () => {
            GR(!0)
          },
          children: [(0, aR.jsx)(VR.d, {
            name: "shield-halved"
          }), " ", RR("worldBuilder:publishingPolicy")]
        }), JR && (0, aR.jsx)(LR, {
          close: () => {
            GR(!1)
          },
          body: (0, aR.jsx)(KR.g, {
            className: "PublishingPolicyPopup",
            title: "worldBuilder:publishingPolicy",
            children: (0, aR.jsx)(WR, {})
          })
        })]
      })
    }
  },
  5814: (RR, JR, GR) => {
    GR.d(JR, {
      g: () => wJ,
      c: () => KJ,
      e: () => VJ,
      h: () => rJ
    });
    var yR = GR(66),
      tR = GR(1493),
      uR = GR(1590),
      ZR = GR(1867),
      qR = GR(1270),
      iR = GR(1465),
      fR = GR(1501),
      VR = GR(1468),
      KR = GR(1317),
      wR = GR(1163),
      rR = GR.n(wR),
      eR = GR(359),
      aR = GR(5425),
      LR = GR(5836),
      nR = GR(1336),
      UR = GR(5817),
      WR = GR(4375),
      AR = GR(5828),
      CR = GR(1378);

    function XR(RR) {
      let {
        icon: JR,
        title: GR,
        disabled: yR,
        children: tR
      } = RR;
      return (0, CR.jsxs)("div", {
        className: rR()("ManageCard", {
          ManageCardDisabled: yR
        }),
        children: [(0, CR.jsxs)("div", {
          className: "ManageCardHead",
          children: [(0, CR.jsx)("div", {
            className: "ManageCardIcon",
            children: (0, CR.jsx)(VR.d, {
              name: JR
            })
          }), (0, CR.jsx)("div", {
            children: (0, CR.jsx)("h2", {
              className: "ManageCardTitle",
              children: GR
            })
          })]
        }), (0, CR.jsxs)("div", {
          className: "ManageCardBody",
          children: [tR, yR && (0, CR.jsx)("div", {
            className: "ManageCardDisabledOverlay"
          })]
        })]
      })
    }

    function MR(RR) {
      let {
        label: JR,
        caption: GR,
        children: yR
      } = RR;
      return (0, CR.jsxs)("div", {
        className: "ManageStackedField",
        children: [(0, CR.jsx)("div", {
          className: "ManageStackedFieldLabel",
          children: JR
        }), yR, GR && (0, CR.jsx)("div", {
          className: "ManageStackedFieldCaption",
          children: GR
        })]
      })
    }

    function BR(RR) {
      let {
        label: JR,
        caption: GR,
        disabled: yR,
        children: tR
      } = RR;
      return (0, CR.jsxs)("div", {
        className: rR()("ManageField", {
          ManageFieldDisabled: yR
        }),
        children: [(0, CR.jsxs)("div", {
          className: "ManageFieldText",
          children: [(0, CR.jsx)("div", {
            className: "ManageFieldLabel",
            children: JR
          }), (0, CR.jsx)("div", {
            className: "ManageFieldCaption",
            children: GR
          })]
        }), (0, CR.jsx)("div", {
          className: "ManageFieldControl",
          children: tR
        })]
      })
    }

    function lR(RR) {
      var JR, GR;
      let {
        schematicData: yR,
        updateSchematicData: tR,
        publishFormEnabled: uR,
        formEnabled: ZR
      } = RR;
      const {
        t: iR
      } = (0, qR.A)(), fR = !uR, VR = {
        tpRequests: {
          isEnabled: () => !yR.disableTpRequests,
          JA: RR => tR("disableTpRequests", !RR)
        },
        spawnProtection: {
          isEnabled: () => !yR.disableSpawnProtection,
          JA: RR => tR("disableSpawnProtection", !RR)
        },
        spawnReset: {
          isEnabled: () => !!yR.enableSpawnReset,
          JA: RR => tR("enableSpawnReset", RR)
        },
        smpMarketplace: {
          isEnabled: () => !!yR.enableSmpMarketplace,
          JA: RR => tR("enableSmpMarketplace", RR)
        },
        survivalGuns: {
          isEnabled: () => !!yR.enableSurvivalGuns,
          JA: RR => tR("enableSurvivalGuns", RR)
        },
        fallDamage: {
          isEnabled: () => !yR.disableFallDamage,
          JA: RR => tR("disableFallDamage", !RR)
        },
        dayNight: {
          isEnabled: () => !!yR.enableDayNight,
          JA: RR => tR("enableDayNight", RR)
        }
      };
      return (0, CR.jsxs)(CR.Fragment, {
        children: [!1 === yR.schematicContainsSpawnBlock && (0, CR.jsx)("div", {
          className: "ManageWarningBanner",
          children: iR("worldBuilder:mustContainSpawnBlock")
        }), (0, CR.jsxs)("div", {
          className: "ManageSettingsGrid",
          children: [(0, CR.jsxs)(XR, {
            icon: "globe",
            title: iR("worldBuilder:worldRulesSection"),
            disabled: !ZR,
            children: [(0, CR.jsx)(BR, {
              label: iR("classic:defaultGamemode"),
              caption: iR("classic:defaultGamemodeDescription"),
              disabled: fR,
              children: (0, CR.jsx)(WR.e, {
                controlClassName: "ManageDropdown",
                options: aR.B.map((RR => ({
                  value: RR,
                  label: eR.s[RR]
                }))),
                value: yR.defaultGamemode,
                onChange: RR => tR("defaultGamemode", RR.value)
              })
            }), (0, CR.jsx)(BR, {
              label: iR("classic:voidDeathHeight"),
              caption: iR("classic:voidDeathHeightDescription"),
              disabled: fR,
              children: (0, CR.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, CR.jsx)("input", {
                  type: "number",
                  max: nR.I,
                  value: null !== (JR = yR.voidDeathHeight) && void 0 !== JR ? JR : "",
                  onChange: RR => {
                    const JR = parseInt(RR.target.value);
                    tR("voidDeathHeight", JR)
                  }
                }), (0, CR.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: iR("worldBuilder:blocksUnit")
                })]
              })
            }), (0, CR.jsx)(BR, {
              label: iR("classic:worldBorder"),
              caption: iR("classic:worldBorderDescription"),
              disabled: fR,
              children: (0, CR.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, CR.jsx)("input", {
                  type: "number",
                  min: nR.N,
                  max: nR.J,
                  placeholder: iR("worldBuilder:noWorldBorderLimit"),
                  value: null !== (GR = yR.worldBorder) && void 0 !== GR ? GR : "",
                  onChange: RR => {
                    const JR = parseInt(RR.target.value);
                    tR("worldBorder", isNaN(JR) ? null : JR)
                  }
                }), (0, CR.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: iR("worldBuilder:blocksUnit")
                })]
              })
            }), (0, CR.jsx)(BR, {
              label: iR("classic:disableMobs"),
              caption: iR("classic:disableMobsDescription"),
              disabled: fR,
              children: (0, CR.jsx)(UR.h, {
                checked: yR.disableMobs,
                setChecked: RR => tR("disableMobs", RR),
                disabled: fR
              })
            })]
          }), (0, CR.jsxs)(XR, {
            icon: "user-group",
            title: iR("worldBuilder:playerAndLobbySection"),
            disabled: !ZR,
            children: [(0, CR.jsx)(BR, {
              label: iR("classic:disableKeepInventory"),
              caption: iR("classic:disableKeepInventoryDescription"),
              disabled: fR,
              children: (0, CR.jsx)(UR.h, {
                checked: yR.disableKeepInventory,
                setChecked: RR => tR("disableKeepInventory", RR),
                disabled: fR
              })
            }), (0, CR.jsx)(BR, {
              label: iR("classic:persistInventory"),
              caption: iR("classic:persistInventoryDescription"),
              disabled: fR,
              children: (0, CR.jsx)(WR.e, {
                controlClassName: "ManageDropdown",
                options: aR.m.map((RR => ({
                  value: RR,
                  label: eR.i[RR]
                }))),
                value: yR.persistInventory,
                onChange: RR => tR("persistInventory", RR.value)
              })
            }), (0, CR.jsx)(BR, {
              label: iR("classic:persistWorld"),
              caption: iR("classic:persistWorldDescription"),
              disabled: fR,
              children: (0, CR.jsx)(UR.h, {
                checked: yR.persistWorld,
                setChecked: RR => tR("persistWorld", RR),
                disabled: fR
              })
            }), LR.c && yR.persistWorld && (0, CR.jsx)(BR, {
              label: iR("classic:fluidFlow"),
              caption: iR("classic:fluidFlowDescription"),
              disabled: fR,
              children: (0, CR.jsx)(UR.h, {
                checked: yR.enableFluidFlow,
                setChecked: RR => tR("enableFluidFlow", RR),
                disabled: fR
              })
            }), (0, CR.jsx)(BR, {
              label: iR("classic:disableLobbySpawn"),
              caption: iR("classic:disableLobbySpawnDescription"),
              disabled: fR,
              children: (0, CR.jsx)(UR.h, {
                checked: yR.disableLobbySpawn,
                setChecked: RR => tR("disableLobbySpawn", RR),
                disabled: fR
              })
            }), (0, CR.jsx)(BR, {
              label: iR("classic:hideLobbyCode"),
              caption: iR("classic:hideLobbyCodeDescription"),
              disabled: fR,
              children: (0, CR.jsx)(UR.h, {
                checked: yR.hideLobbyCode,
                setChecked: RR => tR("hideLobbyCode", RR),
                disabled: fR
              })
            })]
          })]
        }), (0, CR.jsx)(XR, {
          icon: "layer-group",
          title: iR("worldBuilder:pluginsSection"),
          disabled: !ZR,
          children: (0, CR.jsx)(AR.b, {
            callbacks: VR,
            disabled: fR,
            advancedMode: !0,
            hideWrapper: !0
          })
        })]
      })
    }
    var pR = GR(5976),
      gR = GR(1740),
      bR = GR(1647),
      vR = GR(4829),
      OR = GR(1196),
      xR = GR(5792),
      NR = GR(6003),
      DR = GR(1594),
      HR = GR(5996),
      oR = GR(5987);
    const cR = 50,
      PR = .3;
    async function IR(RR) {
      const JR = await
      function(RR) {
        return new Promise(((JR, GR) => {
          const yR = new FileReader;
          yR.onload = () => JR(yR.result), yR.onerror = GR, yR.readAsDataURL(RR)
        }))
      }(RR), GR = await
      function(RR) {
        return new Promise(((JR, GR) => {
          const yR = new Image;
          yR.onload = () => JR(yR), yR.onerror = () => GR(new Error("Failed to load image")), yR.src = RR
        }))
      }(JR);
      if (GR.naturalHeight > GR.naturalWidth) throw new mR;
      const yR = 1024 * cR,
        {
          dataUrl: tR,
          finalQuality: uR
        } = function(RR, JR) {
          const GR = document.createElement("canvas");
          GR.width = RR.naturalWidth, GR.height = RR.naturalHeight, GR.getContext("2d").drawImage(RR, 0, 0);
          let yR = .92,
            tR = GR.toDataURL("image/jpeg", yR);
          for (; .75 * tR.length > JR && yR > .05;) yR -= .05, tR = GR.toDataURL("image/jpeg", yR);
          return {
            dataUrl: tR,
            finalQuality: yR
          }
        }(GR, yR);
      if (Math.ceil(.75 * tR.length) > yR) throw new zR;
      return {
        base64Jpg: tR,
        heavilyCompressed: uR < PR
      }
    }
    class mR extends Error {}
    class zR extends Error {}

    function SR(RR) {
      var JR;
      let {
        schematicId: GR,
        hasReadUploadPolicy: tR,
        onPolicyValidationError: iR,
        onThumbnailReady: fR
      } = RR;
      const {
        t: wR
      } = (0, qR.A)(), [eR, aR] = (0, yR.useState)(null), [LR, nR] = (0, yR.useState)(""), [UR, WR] = (0, yR.useState)(""), [AR, XR] = (0, yR.useState)(!0), [MR, BR] = (0, yR.useState)(!1), lR = (0, yR.useRef)(!1), [pR, gR] = (0, yR.useState)(null), [bR, vR] = (0, yR.useState)(!1), [OR, xR] = (0, yR.useState)(!1), DR = (0, yR.useRef)(0), {
        getRootProps: HR,
        getInputProps: oR,
        isDragActive: cR
      } = (0, NR.e)({
        accept: {
          "image/*": [".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp"]
        },
        multiple: !1,
        onDrop: async RR => {
          if (0 === RR.length) return;
          const JR = RR[0],
            GR = ++DR.current;
          gR(null), vR(!1), aR(null), nR(JR.name);
          try {
            const RR = await IR(JR);
            if (GR !== DR.current) return;
            aR(RR), vR(RR.heavilyCompressed)
          } catch (yR) {
            if (GR !== DR.current) return;
            gR(wR(yR instanceof mR ? "thumbnail:portraitImagesNotAllowed" : yR instanceof zR ? "thumbnail:couldNotCompressImage" : "thumbnail:failedToUploadImage"))
          }
        },
        useFsAccessApi: !1
      }), PR = LR.length <= 30 ? LR : `${LR.slice(0,27)}...`, SR = null !== (JR = null === eR || void 0 === eR ? void 0 : eR.base64Jpg) && void 0 !== JR ? JR : null, jR = UR.trim(), dR = jR.length >= KR.h && jR.length <= KR.f, ER = OR && !eR && !pR, YR = OR && !dR;
      return (0, CR.jsxs)("div", {
        className: "ThumbnailUploadContainer",
        children: [(0, CR.jsxs)("div", {
          ...HR({
            className: rR()("ThumbnailUploadDropzone", {
              ActiveDrag: cR,
              ValidationError: ER
            })
          }),
          children: [(0, CR.jsx)("input", {
            ...oR()
          }), !cR && SR ? (0, CR.jsxs)(CR.Fragment, {
            children: [(0, CR.jsxs)("div", {
              className: "ThumbnailAspectPreviews",
              children: [(0, CR.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, CR.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "1:1"
                }), (0, CR.jsx)("div", {
                  className: "ThumbnailAspectFrame Square",
                  children: (0, CR.jsx)("img", {
                    src: SR,
                    alt: "1:1 preview"
                  })
                })]
              }), (0, CR.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, CR.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "16:9"
                }), (0, CR.jsx)("div", {
                  className: "ThumbnailAspectFrame Wide",
                  children: (0, CR.jsx)("img", {
                    src: SR,
                    alt: "16:9 preview"
                  })
                })]
              })]
            }), (0, CR.jsxs)("div", {
              children: [(0, CR.jsx)("div", {
                className: "ThumbnailUploadInstructions Active",
                children: PR
              }), (0, CR.jsx)("div", {
                className: "ThumbnailUploadInstructions Preview",
                children: wR("thumbnail:preview")
              })]
            })]
          }) : (0, CR.jsxs)(CR.Fragment, {
            children: [(0, CR.jsx)("div", {
              className: "ThumbnailUploadIcon",
              children: (0, CR.jsx)(VR.d, {
                name: "image"
              })
            }), (0, CR.jsx)("div", {
              className: "ThumbnailUploadInstructions",
              children: wR("thumbnail:dragImageHere")
            })]
          })]
        }), ER && (0, CR.jsx)("div", {
          className: "ThumbnailUploadError",
          children: wR("thumbnail:imageRequired")
        }), (0, CR.jsx)(ZR.b, {
          className: rR()("ThumbnailUploadNameInput", {
            ValidationError: YR
          }),
          placeholderText: wR("thumbnail:thumbnailName"),
          defaultValue: UR,
          onValueChange: RR => {
            WR(RR)
          },
          maxLength: KR.f
        }), YR && (0, CR.jsx)("div", {
          className: "ThumbnailUploadError",
          children: wR("thumbnail:nameRequired", {
            min: KR.h,
            max: KR.f
          })
        }), (0, CR.jsxs)("label", {
          className: "ThumbnailUploadCheckbox",
          children: [(0, CR.jsx)("input", {
            type: "checkbox",
            checked: AR,
            onChange: RR => {
              XR(RR.target.checked)
            }
          }), wR("thumbnail:setAsThumbnailOnceApproved")]
        }), bR && (0, CR.jsx)("div", {
          className: "ThumbnailUploadWarning",
          children: wR("thumbnail:heavyCompressionWarning")
        }), pR && (0, CR.jsx)("div", {
          className: "ThumbnailUploadError",
          children: pR
        }), (0, CR.jsx)(uR.n, {
          disabled: MR,
          className: "ThumbnailUploadButton",
          onClick: async () => {
            if (xR(!0), !lR.current && eR && dR && tR) {
              lR.current = !0, BR(!0), gR(null);
              try {
                await fR(eR.base64Jpg, jR, AR ? GR : null)
              } catch (RR) {
                gR(RR.errorMessageForUser ? wR(RR.errorMessageForUser, RR.errorMessageTranslationParams) : wR("thumbnail:failedToUploadImage"))
              } finally {
                lR.current = !1, BR(!1)
              }
            } else tR || iR()
          },
          children: wR(MR ? "thumbnail:processing" : "thumbnail:uploadThumbnail")
        })]
      })
    }
    const jR = 2e3;

    function dR(RR) {
      let {
        schematicId: JR,
        ownedThumbnailCount: GR,
        onClose: tR,
        onThumbnailReady: uR
      } = RR;
      const {
        t: ZR
      } = (0, qR.A)(), {
        userContext: fR
      } = (0, OR.d)(), [wR, eR] = (0, yR.useState)(!1), [aR, LR] = (0, yR.useState)(!1), [nR, UR] = (0, yR.useState)(!1), WR = (0, yR.useRef)(), {
        loading: AR,
        eligibility: XR
      } = (0, HR.e)(), MR = (0, HR.f)();
      (0, yR.useEffect)((() => () => {
        clearTimeout(WR.current)
      }), []);
      const BR = [];
      fR.isLoggedIn() || BR.push(ZR("thumbnail:mustBeLoggedInToUpload")), GR >= KR.O && BR.push(ZR("thumbnail:thumbnailLimitReachedPleaseDelete", {
        max: KR.O
      }));
      const lR = null === XR || void 0 === XR ? void 0 : XR.thumbnailUploadWait;
      if (lR && BR.push(MR("accountAge" === lR.reason ? "thumbnail:accountTooNewUntil" : "thumbnail:uploadCooldownUntil", lR.until)), !wR && BR.length > 0) return (0, CR.jsxs)("div", {
        className: "ThumbnailUploaderInner",
        children: [(0, CR.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: ZR("thumbnail:cannotUploadThumbnail")
        }), BR.map((RR => (0, CR.jsxs)("div", {
          className: "CannotUploadThumbnailItem",
          children: [(0, CR.jsx)(VR.d, {
            name: "triangle-exclamation"
          }), (0, CR.jsx)("span", {
            children: RR
          })]
        }, RR)))]
      });
      if (AR) return (0, CR.jsx)("div", {
        className: "ThumbnailUploaderInner",
        children: (0, CR.jsx)(iR.d, {})
      });
      return (0, CR.jsxs)("div", {
        className: rR()("ThumbnailUploaderInner", {
          ThumbnailUploaderSuccess: wR
        }),
        children: [wR && (0, CR.jsxs)("div", {
          className: "ThumbnailUploadSuccessOverlay",
          children: [(0, CR.jsxs)("div", {
            className: "ThumbnailUploadSuccessIcon FullyFancyText AnimFadeInScaleUp",
            children: [(0, CR.jsx)(VR.d, {
              name: "check"
            }), (0, CR.jsx)(DR.b, {})]
          }), (0, CR.jsx)("div", {
            className: "ThumbnailUploadSuccessText AnimFadeInScaleUp",
            children: ZR("thumbnail:thumbnailUploaded")
          })]
        }), (0, CR.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: ZR("thumbnail:uploadThumbnail")
        }), (0, CR.jsxs)("div", {
          className: "ThumbnailUploaderBody",
          children: [(0, CR.jsxs)("div", {
            className: "ThumbnailUploaderLeft",
            children: [(0, CR.jsx)("h3", {
              className: "SchematicPopupSubtitle",
              children: ZR("thumbnail:chooseImage", {
                maxSizeKb: cR
              })
            }), (0, CR.jsx)(SR, {
              schematicId: JR,
              hasReadUploadPolicy: aR,
              onPolicyValidationError: () => {
                UR(!0)
              },
              onThumbnailReady: async (RR, JR, GR) => {
                await uR(RR, JR, GR), eR(!0), WR.current = setTimeout(tR, jR)
              }
            })]
          }), (0, CR.jsxs)("div", {
            className: "ThumbnailUploadPolicy",
            children: [(0, CR.jsx)("h3", {
              className: "ThumbnailUploadPolicyTitle",
              children: ZR("thumbnail:uploadPolicy")
            }), (0, CR.jsx)(oR.e, {
              allowed: ["thumbnail:policyFollowGuidelines", "thumbnail:policyInGameAssets", "thumbnail:policyLimitText"],
              notAllowed: ["thumbnail:policyCopyrightContent", "thumbnail:policyOutOfGameAssets", "thumbnail:policyBloxdTags", "thumbnail:policyMustReflectGame"]
            }), (0, CR.jsxs)("label", {
              className: rR()("ThumbnailUploadCheckbox Policy", {
                ValidationError: nR && !aR
              }),
              children: [(0, CR.jsx)("input", {
                type: "checkbox",
                checked: aR,
                onChange: RR => {
                  LR(RR.target.checked)
                }
              }), ZR("thumbnail:agreeToUploadPolicy")]
            }), nR && !aR && (0, CR.jsx)("div", {
              className: "ThumbnailPolicyError",
              children: ZR("thumbnail:policyRequired")
            })]
          })]
        })]
      })
    }

    function ER(RR) {
      let {
        imageUrl: JR,
        thumbnailName: GR,
        onClose: yR
      } = RR;
      const {
        t: tR
      } = (0, qR.A)();
      return (0, CR.jsxs)("div", {
        className: "ThumbnailDeleteConfirm",
        children: [(0, CR.jsx)("div", {
          className: "ThumbnailDeleteConfirmTitle",
          children: tR("thumbnail:deleteThumbnail")
        }), (0, CR.jsxs)("div", {
          className: "ThumbnailDeleteConfirmImageContainer",
          children: [null !== JR && (0, CR.jsx)("img", {
            className: "ThumbnailDeleteConfirmImage",
            src: JR,
            alt: GR
          }), (0, CR.jsx)("div", {
            className: "ThumbnailGridItemLabel",
            children: GR
          })]
        }), (0, CR.jsx)("div", {
          className: "ThumbnailDeleteConfirmSubtitle",
          children: tR("thumbnail:deleteThumbnailConfirmation")
        }), (0, CR.jsxs)("div", {
          className: "ThumbnailDeleteConfirmButtons",
          children: [(0, CR.jsxs)(uR.M, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => yR(!0),
            children: [(0, CR.jsx)(VR.d, {
              name: "trash-can"
            }), " ", tR("general:delete")]
          }), (0, CR.jsx)(uR.i, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => yR(!1),
            children: tR("general:cancel")
          })]
        })]
      })
    }
    var YR = GR(216);
    const kR = ["thumbnail:policyFollowGuidelines"],
      QR = {
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
          policyRows: kR,
          example: "thumbnail:rejectionSexualExample",
          fix: "thumbnail:rejectionSexualFix"
        },
        "thumbnail-substances-content": {
          policyRows: kR,
          example: "thumbnail:rejectionSubstancesExample",
          fix: "thumbnail:rejectionSubstancesFix"
        },
        "thumbnail-violent-gore-content": {
          policyRows: kR,
          example: "thumbnail:rejectionViolenceExample",
          fix: "thumbnail:rejectionViolenceFix"
        }
      };

    function FR(RR) {
      let {
        rejectedThumbnails: JR,
        isAcknowledging: GR,
        onAcknowledge: yR
      } = RR;
      const {
        t: tR
      } = (0, qR.A)();
      return (0, CR.jsxs)("div", {
        className: "ManageWarningBanner ThumbnailRejectionNotice",
        children: [(0, CR.jsx)("div", {
          className: "ThumbnailRejectionNoticeTitle",
          children: tR("thumbnail:rejectedByModerators")
        }), JR.map((RR => (0, CR.jsx)(TR, {
          rejected: RR
        }, RR.thumbnail.id))), (0, CR.jsx)(uR.n, {
          className: "ThumbnailRejectionNoticeButton",
          onClick: yR,
          disabled: GR,
          children: GR ? (0, CR.jsx)(iR.d, {}) : tR("thumbnail:gotIt")
        })]
      })
    }

    function TR(RR) {
      var JR;
      let {
        rejected: {
          thumbnail: GR,
          rejection: yR
        }
      } = RR;
      const {
        t: tR
      } = (0, qR.A)(), uR = null !== (JR = (0, YR.b)(QR, yR.policyId)) && void 0 !== JR ? JR : QR["custom-game-bad-thumbnail"], ZR = new Date(yR.at).toLocaleDateString();
      return (0, CR.jsxs)("div", {
        className: "RejectedThumbnail",
        children: [(0, CR.jsxs)("div", {
          className: "RejectedThumbnailImage",
          children: [null !== GR.preview && (0, CR.jsx)("img", {
            src: GR.preview,
            alt: GR.name
          }), null === GR.preview && (0, CR.jsx)(VR.d, {
            name: "image-slash"
          })]
        }), (0, CR.jsxs)("div", {
          className: "RejectedThumbnailDetails",
          children: [(0, CR.jsx)("div", {
            className: "RejectedThumbnailName",
            children: GR.name
          }), (0, CR.jsx)("div", {
            children: null !== yR.gameName ? tR("thumbnail:rejectedGameAndDate", {
              game: yR.gameName,
              date: ZR
            }) : ZR
          }), null !== yR.reason && (0, CR.jsx)("div", {
            children: tR("creatorModeration:moderatorNote", {
              reason: yR.reason
            })
          }), uR.policyRows.length > 0 && (0, CR.jsx)("ul", {
            className: "RejectedThumbnailPolicyRows",
            children: uR.policyRows.map((RR => (0, CR.jsxs)("li", {
              children: [(0, CR.jsx)(VR.d, {
                name: "x"
              }), (0, CR.jsx)("span", {
                children: tR(RR)
              })]
            }, RR)))
          }), (0, CR.jsxs)("div", {
            children: [null !== uR.example && null === yR.reason && `${tR(uR.example)} `, tR(uR.fix)]
          })]
        })]
      })
    }
    var sR = GR(1282);

    function hR(RR) {
      return null !== RR.preview ? RR.preview : RR.approved ? `${sR.clientSideServerUrls.s3Url}/${(0,gR.i)(RR.id)}` : null
    }

    function RJ(RR) {
      return null !== RR.pendingKey ? {
        pendingKey: RR.pendingKey
      } : {
        thumbnailId: RR.id
      }
    }

    function JJ(RR) {
      var JR, GR;
      let {
        schematicData: ZR,
        updateSchematicData: fR,
        publishFormEnabled: KR,
        onClose: wR
      } = RR;
      const {
        t: eR
      } = (0, qR.A)(), {
        userContext: aR,
        isUserContextUpdating: LR
      } = (0, OR.d)(), nR = (0, vR.d)(), [UR, WR] = (0, yR.useState)([]), [AR, XR] = (0, yR.useState)([]), [MR, BR] = (0, yR.useState)(!0), [lR, pR] = (0, yR.useState)(!1), [gR, NR] = (0, yR.useState)(null !== (JR = ZR.customThumbnailId) && void 0 !== JR ? JR : null), [DR, HR] = (0, yR.useState)(null), oR = (0, yR.useRef)(null !== (GR = ZR.customThumbnailId) && void 0 !== GR ? GR : null), cR = (0, yR.useRef)(0), PR = (0, yR.useRef)(null), IR = (0, yR.useRef)(null), mR = (0, yR.useRef)(null), zR = (0, yR.useRef)(!1);

      function SR(RR, JR) {
        mR.current && (clearTimeout(mR.current), mR.current = null), HR(RR), null !== RR && JR && (mR.current = setTimeout((() => {
          HR(null), mR.current = null
        }), 5e3))
      }(0, yR.useEffect)((() => () => {
        clearTimeout(IR.current), clearTimeout(mR.current)
      }), []);
      const jR = (0, yR.useCallback)((() => {
        BR(!0), bR.c.getOwnedThumbnails(aR).then((RR => {
          const JR = [],
            GR = [];
          for (const yR of RR.thumbnails) yR.rejection ? JR.push({
            thumbnail: yR,
            rejection: yR.rejection
          }) : GR.push(yR);
          JR.sort(((RR, JR) => JR.rejection.at - RR.rejection.at)), GR.sort(((RR, JR) => {
            const GR = RR.approved ? 1 : 0,
              yR = (JR.approved ? 1 : 0) - GR;
            return 0 !== yR ? yR : JR.lastUpdatedAt - RR.lastUpdatedAt
          })), XR(JR), WR(GR)
        })).catch((RR => {
          console.error("Failed to fetch thumbnails:", RR)
        })).finally((() => {
          BR(!1)
        }))
      }), [aR]);
      async function YR(RR, JR, GR) {
        return bR.c.uploadSchematicThumbnail(aR, RR, JR, GR).then((() => {
          SR({
            text: eR("thumbnail:uploadedAwaitingModeration"),
            type: "success"
          }, !0), jR()
        }))
      }

      function kR() {
        cR.current = Date.now(), IR.current = null;
        const RR = PR.current;
        PR.current = null, SR({
          text: eR("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), bR.c.setSchematicThumbnail(aR, ZR.schematicId, RR).then((() => {
          nR.current && (SR({
            text: eR("thumbnail:thumbnailUpdated"),
            type: "success"
          }, !0), oR.current = RR, fR("customThumbnailId", RR), fR("customThumbnailBlurhash", void 0), fR("customThumbnailVariants", void 0))
        })).catch((RR => {
          nR.current && (SR({
            text: RR.errorMessageForUser ? eR(RR.errorMessageForUser, RR.errorMessageTranslationParams) : eR("thumbnail:failedToSetThumbnail"),
            type: "error"
          }, !0), NR(oR.current))
        }))
      }

      function QR(RR) {
        NR(RR), PR.current = RR;
        const JR = Date.now() - cR.current;
        JR >= 1e3 ? kR() : (SR({
          text: eR("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), IR.current || (IR.current = setTimeout((() => {
          kR()
        }), 1e3 - JR)))
      }
      return (0, yR.useEffect)((() => {
        !1 === LR && jR()
      }), [LR, jR]), (0, CR.jsxs)("div", {
        className: "BloxdForm ThumbnailSection",
        children: [(0, CR.jsxs)("div", {
          className: "SectionTitle",
          children: [eR("thumbnail:gameThumbnail"), DR && (0, CR.jsx)("span", {
            className: rR()("ThumbnailActionMsg", `ThumbnailActionMsg--${DR.type}`),
            children: DR.text
          })]
        }), (0, CR.jsxs)("div", {
          className: "SectionBody",
          children: [AR.length > 0 && (0, CR.jsx)(FR, {
            rejectedThumbnails: AR,
            isAcknowledging: lR,
            onAcknowledge: async function() {
              pR(!0);
              const RR = await Promise.allSettled(AR.map((RR => {
                let {
                  thumbnail: JR
                } = RR;
                return bR.c.deleteSchematicThumbnail(aR, RJ(JR))
              })));
              if (!nR.current) return;
              pR(!1);
              const JR = RR.filter((RR => "rejected" === RR.status));
              JR.length > 0 && (console.error("Failed to acknowledge some thumbnail rejections:", JR), SR({
                text: eR("thumbnail:failedToHideRejections"),
                type: "error"
              }, !0)), jR()
            }
          }), (0, CR.jsxs)("div", {
            className: "ThumbnailGrid",
            children: [(0, CR.jsxs)("div", {
              className: rR()("ThumbnailGridItem ThumbnailGridItemDefault", {
                ThumbnailGridItemSelected: null === gR
              }),
              onClick: () => QR(null),
              children: [(0, CR.jsx)(xR.e, {
                game: {
                  schematicId: ZR.schematicId,
                  imageBlurhash: ZR.imageBlurhash
                }
              }), (0, CR.jsx)("div", {
                className: "ThumbnailGridItemLabel ThumbnailDefaultLabel",
                children: eR("general:default")
              })]
            }), MR && (0, CR.jsx)(iR.d, {}), UR.map((RR => {
              var JR;
              const GR = hR(RR);
              return (0, CR.jsxs)("div", {
                className: rR()("ThumbnailGridItem", {
                  ThumbnailGridItemSelected: RR.approved && gR === RR.id,
                  ThumbnailGridItemPending: !RR.approved
                }),
                onClick: () => {
                  RR.approved && QR(RR.id)
                },
                children: [null !== GR && (0, CR.jsx)("img", {
                  src: GR,
                  alt: RR.name
                }), (0, CR.jsx)(uR.M, {
                  className: "ThumbnailDeleteButton",
                  onClick: JR => async function(RR, JR) {
                    RR.stopPropagation();
                    const GR = await tR.NotificationProvider.showCustomPopup({
                        body: RR => (0, CR.jsx)(ER, {
                          imageUrl: hR(JR),
                          thumbnailName: JR.name,
                          onClose: JR => {
                            JR && (zR.current = !0), RR()
                          }
                        }),
                        middleScreenPopupClassName: "ThumbnailDeleteConfirmPopup",
                        onClose: wR
                      }).getResult(),
                      yR = zR.current;
                    zR.current = !1, yR && !0 === GR && (nR.current && SR({
                      text: eR("thumbnail:deletingThumbnail"),
                      type: "info"
                    }, !1), bR.c.deleteSchematicThumbnail(aR, RJ(JR)).then((() => {
                      nR.current && (SR({
                        text: eR("thumbnail:thumbnailDeleted"),
                        type: "success"
                      }, !0), null !== JR.id && oR.current === JR.id && QR(null), jR())
                    })).catch((RR => {
                      nR.current && SR({
                        text: RR.errorMessageForUser ? eR(RR.errorMessageForUser, RR.errorMessageTranslationParams) : eR("thumbnail:failedToDeleteThumbnail"),
                        type: "error"
                      }, !0)
                    })))
                  }(JR, RR),
                  children: (0, CR.jsx)(VR.d, {
                    name: "trash-can"
                  })
                }), RR.approved && (0, CR.jsx)("div", {
                  className: "ThumbnailGridItemLabel",
                  children: RR.name
                }), !RR.approved && (0, CR.jsx)("div", {
                  className: "ThumbnailUnapprovedIcon",
                  children: (0, CR.jsx)(VR.d, {
                    name: "hourglass-clock"
                  })
                }), !RR.approved && (0, CR.jsxs)("div", {
                  className: "ThumbnailGridItemLabel ThumbnailPendingLabel",
                  children: [RR.name, (0, CR.jsx)("br", {}), eR("thumbnail:pendingApproval")]
                })]
              }, null !== (JR = RR.id) && void 0 !== JR ? JR : RR.pendingKey)
            })), (0, CR.jsxs)("div", {
              className: rR()("ThumbnailGridItem ThumbnailUploadTile", {
                ThumbnailUploadTileDisabled: !KR
              }),
              onClick: () => {
                KR && function(RR) {
                  let {
                    schematicId: JR,
                    ownedThumbnailCount: GR,
                    onThumbnailReady: yR,
                    onClose: uR
                  } = RR;
                  tR.NotificationProvider.showCustomPopup({
                    body: RR => (0, CR.jsx)(dR, {
                      schematicId: JR,
                      ownedThumbnailCount: GR,
                      onClose: RR,
                      onThumbnailReady: yR
                    }),
                    middleScreenPopupClassName: "SchematicThumbnailPopup",
                    onClose: uR,
                    unlockPointerKey: "schematicThumbnailUploaderPopup"
                  })
                }({
                  schematicId: ZR.schematicId,
                  ownedThumbnailCount: UR.length,
                  onThumbnailReady: YR,
                  onClose: wR
                })
              },
              children: [(0, CR.jsx)(VR.d, {
                name: "plus"
              }), (0, CR.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: eR("thumbnail:uploadThumbnail")
              })]
            })]
          })]
        })]
      })
    }
    var GJ = GR(2374),
      yJ = GR(6028),
      tJ = GR(6035),
      uJ = GR(6072);

    function ZJ(RR) {
      let {
        schematicData: JR,
        setTexturePack: GR,
        initializeTexturePack: tR,
        publishFormEnabled: uR
      } = RR;
      const {
        t: ZR
      } = (0, qR.A)(), [iR, fR] = (0, yR.useState)(null), [VR, KR] = (0, yR.useState)(null), [wR, eR] = (0, yR.useState)(!1), aR = (0, vR.d)(), LR = uR && !wR, nR = JR.customTexturePackKey;

      function UR(RR) {
        var JR;
        fR(RR.metaData.id), KR(null !== (JR = RR.metaData.fromFolderName) && void 0 !== JR ? JR : null), (RR.metaData.id !== GJ.q.CUSTOM || RR.metaData.fromFolderName) && GR(RR)
      }
      return (0, yR.useEffect)((() => {
        nR && (eR(!0), (0, yJ.c)(nR).then((RR => {
          var JR;
          aR.current && (RR ? (fR(RR.metaData.id), KR(null !== (JR = RR.metaData.fromFolderName) && void 0 !== JR ? JR : null), tR(RR)) : console.error(`No texture pack at ${nR}`))
        })).catch((RR => {
          console.error("Error fetching texture pack: ", RR)
        })).finally((() => {
          eR(!1)
        })))
      }), [nR, tR, aR]), (0, CR.jsxs)("div", {
        className: "BloxdForm TexturePackSection",
        children: [(0, CR.jsx)("div", {
          className: "SectionTitle",
          children: ZR("customTexturePack:customTexturePack")
        }), (0, CR.jsxs)("div", {
          className: "TexturePackList",
          children: [(0, CR.jsx)("div", {
            className: rR()("TexturePack", {
              Selected: null === iR && !wR,
              Disabled: !LR
            }),
            onClick: () => {
              LR && (fR(null), GR(null), KR(null))
            },
            children: (0, CR.jsx)("div", {
              className: "TexturePackName",
              children: "No Override"
            })
          }), Object.values(GJ.q).map((RR => (0, CR.jsx)(tJ.i, {
            id: RR,
            isSelected: RR === iR,
            setSelected: UR,
            disabled: !LR
          }, RR)))]
        }), iR === GJ.q.CUSTOM && (0, CR.jsx)(uJ.e, {
          folderName: VR,
          onTexturePackUpdated: UR,
          disabled: !LR,
          maxFileSizeMb: 25,
          packOwner: "customGame"
        })]
      })
    }
    var qJ = GR(6105);

    function iJ(RR) {
      var JR;
      let {
        gameCategory: GR,
        setGameCategory: yR,
        disabled: tR
      } = RR;
      const ZR = null !== (JR = (0, eR.fb)(GR)) && void 0 !== JR ? JR : "other";
      return (0, CR.jsxs)("div", {
        className: "GameCategoryPicker",
        children: [(0, CR.jsx)(UR.g, {
          label: "worldBuilder:gameCategoryGroup",
          className: "GameCategoryGroup",
          disabled: tR,
          children: (0, CR.jsx)(WR.e, {
            options: eR.Z.map((RR => ({
              value: RR,
              label: eR.X[RR]
            }))),
            value: ZR,
            onChange: RR => {
              RR.value !== ZR && yR(eR.U[RR.value][0])
            }
          })
        }), (0, CR.jsx)(UR.g, {
          label: "worldBuilder:gameCategory",
          className: "GameCategory",
          disabled: tR,
          children: (0, CR.jsx)("div", {
            className: "GameCategoryOptions",
            children: eR.U[ZR].map((RR => (0, CR.jsx)(uR.U, {
              active: RR === GR,
              onClick: () => {
                yR(RR)
              },
              children: (0, eR.eb)(RR)
            }, RR)))
          })
        })]
      })
    }
    var fJ = GR(5982);

    function VJ(RR) {
      let {
        editor: JR,
        onClose: GR
      } = RR;
      const {
        t: yR
      } = (0, qR.A)(), {
        schematicData: tR,
        updateSchematicData: uR,
        publishFormEnabled: iR,
        formEnabled: fR
      } = JR;
      return (0, CR.jsxs)(CR.Fragment, {
        children: [(0, CR.jsxs)(XR, {
          icon: "pen-to-square",
          title: yR("worldBuilder:basicsSection"),
          disabled: !fR,
          children: [(0, CR.jsx)(MR, {
            label: yR("general:name"),
            caption: yR("worldBuilder:schematicNameTagsHint"),
            children: (0, CR.jsx)(ZR.b, {
              className: "SchematicPageName",
              defaultValue: tR.name,
              onValueChange: RR => uR("name", RR),
              placeholderText: yR("worldBuilder:schematicNamePlaceholder"),
              maxLength: KR.fb
            })
          }), (0, CR.jsx)(MR, {
            label: yR("general:description"),
            children: (0, CR.jsx)(ZR.b, {
              className: "SchematicPageDescription",
              useTextarea: !0,
              defaultValue: tR.description,
              onValueChange: RR => uR("description", RR),
              placeholderText: yR("worldBuilder:schematicDescriptionPlaceholder"),
              maxLength: KR.eb
            })
          }), (0, CR.jsx)(iJ, {
            gameCategory: tR.gameCategory,
            setGameCategory: RR => uR("gameCategory", RR),
            disabled: !iR
          }), !0 === tR.gamePublished && (0, CR.jsx)(JJ, {
            schematicData: tR,
            updateSchematicData: uR,
            publishFormEnabled: iR,
            onClose: function() {
              null === GR || void 0 === GR || GR()
            }
          }), (0, CR.jsx)(fJ.f, {})]
        }), (0, CR.jsx)(lR, {
          schematicData: tR,
          updateSchematicData: uR,
          publishFormEnabled: iR,
          formEnabled: fR
        }), !0 === tR.gamePublished && (0, CR.jsx)(XR, {
          icon: "palette",
          title: yR("worldBuilder:texturePackSection"),
          disabled: !fR,
          children: (0, CR.jsx)(ZJ, {
            schematicData: tR,
            setTexturePack: JR.setTexturePack,
            initializeTexturePack: JR.initializeTexturePack,
            publishFormEnabled: iR
          })
        })]
      })
    }

    function KJ(RR) {
      let {
        editor: JR
      } = RR;
      const {
        t: GR
      } = (0, qR.A)(), {
        schematicData: yR,
        formEnabled: tR,
        hasUnsavedChanges: ZR,
        publishSuspendedUntil: KR
      } = JR, wR = (0, HR.h)(), rR = !0 === yR.gamePublished ? KR : null, eR = tR && ZR && null === rR;
      return (0, CR.jsxs)("footer", {
        className: "SchematicPageFooter",
        children: [null !== rR && (0, CR.jsx)("div", {
          className: "SchematicPageFooterNotice",
          children: wR(rR)
        }), tR && ZR && null === rR && (0, CR.jsxs)("div", {
          className: "SchematicPageFooterStatus",
          children: [(0, CR.jsx)("span", {
            className: "SchematicPageFooterStatusDot"
          }), GR("worldBuilder:unsavedChanges")]
        }), (0, CR.jsx)(fR.h, {
          tooltipInner: (0, CR.jsx)("div", {
            className: "SaveButtonTooltip",
            children: GR(tR && !ZR ? "worldBuilder:saveChangesNoneDescription" : "worldBuilder:saveChangesDescription")
          }),
          children: (0, CR.jsxs)(uR.g, {
            className: "SaveChangesButton",
            onClick: () => JR.saveSchematic(yR.gamePublished),
            disabled: !eR,
            children: [(0, CR.jsxs)("span", {
              className: tR ? "" : "SaveChangesButtonBodyHidden",
              children: [(0, CR.jsx)(VR.d, {
                name: "wrench"
              }), " ", GR("worldBuilder:saveChanges")]
            }), !tR && (0, CR.jsx)(iR.d, {})]
          })
        })]
      })
    }

    function wJ(RR) {
      let {
        schematic: JR,
        onSchematicUpdate: GR,
        onClose: tR,
        inSourceWorld: ZR
      } = RR;
      const {
        t: iR
      } = (0, qR.A)();

      function fR() {
        null === tR || void 0 === tR || tR()
      }
      const VR = (0, qJ.d)(JR, {
        onNavigateAway: fR,
        inSourceWorld: ZR
      });
      return (0, yR.useEffect)((() => {
        null === GR || void 0 === GR || GR(VR.schematicData)
      }), [VR.schematicData, GR]), (0, CR.jsxs)("div", {
        className: "SchematicPage SchematicPagePopupVariant",
        children: [(0, CR.jsxs)("div", {
          className: "SchematicPageBody",
          children: [(0, CR.jsx)(uR.d, {
            onClick: fR,
            children: iR("worldBuilder:back")
          }), (0, CR.jsx)(XR, {
            icon: "rocket-launch",
            title: iR("worldBuilder:actionsSection"),
            disabled: !VR.formEnabled,
            children: (0, CR.jsx)(pR.b, {
              editor: VR
            })
          }), (0, CR.jsx)(VJ, {
            editor: VR,
            onClose: fR
          })]
        }), (0, CR.jsx)(KJ, {
          editor: VR
        })]
      })
    }

    function rJ(RR) {
      let {
        schematic: JR,
        onSchematicUpdate: GR,
        onClose: yR,
        inSourceWorld: uR
      } = RR;
      tR.NotificationProvider.showCustomPopup({
        body: RR => (0, CR.jsx)(wJ, {
          schematic: JR,
          onSchematicUpdate: GR,
          onClose: RR,
          inSourceWorld: uR
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: yR,
        unlockPointerKey: "schematicPagePopup"
      })
    }
  },
  5976: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => rR
    });
    var yR = GR(1163),
      tR = GR.n(yR),
      uR = GR(1270),
      ZR = GR(1468),
      qR = GR(1590),
      iR = GR(1501),
      fR = GR(1465),
      VR = GR(5982),
      KR = GR(5996),
      wR = GR(1378);

    function rR(RR) {
      let {
        editor: JR,
        className: GR,
        publishRefusal: yR = null
      } = RR;
      const {
        t: rR
      } = (0, uR.A)(), {
        schematicData: eR,
        formEnabled: aR,
        publishFormEnabled: LR,
        publishSuspendedUntil: nR
      } = JR, UR = !aR || !LR, WR = (0, KR.h)();
      return (0, wR.jsxs)("div", {
        className: tR()("PublishButtonContainer", GR),
        children: [JR.canEditSourceWorld && (0, wR.jsxs)(qR.g, {
          onClick: JR.editSourceWorld,
          disabled: UR,
          children: [(0, wR.jsx)(ZR.d, {
            name: "edit"
          }), " ", rR("worldBuilder:editSourceWorld")]
        }), !eR.gamePublished && (0, wR.jsx)(iR.h, {
          tooltipInner: (0, wR.jsx)("div", {
            className: "PublishButtonTooltip",
            children: null !== yR && void 0 !== yR ? yR : rR("worldBuilder:publishAsGameDescription")
          }),
          children: (0, wR.jsxs)(qR.n, {
            onClick: () => JR.saveSchematic(!0),
            disabled: UR || null !== yR || null !== nR,
            children: [(0, wR.jsx)(ZR.d, {
              name: "rocket-launch"
            }), " ", rR("worldBuilder:publishAsGame"), " ", (0, wR.jsx)(ZR.d, {
              name: "info-circle"
            })]
          })
        }), !0 === eR.gamePublished && (0, wR.jsxs)(wR.Fragment, {
          children: [(0, wR.jsx)(iR.h, {
            tooltipInner: (0, wR.jsx)("div", {
              className: "PublishButtonTooltip",
              children: rR("worldBuilder:unpublishAsGameDescription")
            }),
            children: (0, wR.jsxs)(qR.M, {
              onClick: JR.unpublishSchematic,
              disabled: UR,
              children: [(0, wR.jsx)(ZR.d, {
                name: "rocket-launch"
              }), " ", rR("worldBuilder:unpublishAsGame"), " ", (0, wR.jsx)(ZR.d, {
                name: "info-circle"
              })]
            })
          }), (0, wR.jsxs)(qR.g, {
            onClick: JR.playGame,
            disabled: UR,
            children: [(0, wR.jsx)(ZR.d, {
              name: "joystick"
            }), " ", rR("general:playGame")]
          })]
        }), !aR && (0, wR.jsx)(fR.d, {
          loaderType: "Secondary"
        }), !eR.gamePublished && null !== nR && (0, wR.jsx)("div", {
          className: "PublishSuspendedNotice",
          children: WR(nR)
        }), JR.askingPublishingPolicy && (0, wR.jsx)(VR.b, {
          onAnswer: JR.answerPublishingPolicy
        })]
      })
    }
  },
  6028: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => tR
    });
    var yR = GR(1282);
    async function tR(RR) {
      const JR = await fetch(`${yR.clientSideServerUrls.s3Url}/${RR}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === JR.status || 403 === JR.status) return null;
      if (!JR.ok) throw new Error(`Failed to download the texture pack (${JR.status})`);
      return await JR.json()
    }
  },
  5996: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => qR,
      f: () => iR,
      h: () => fR
    });
    var yR = GR(66),
      tR = GR(1647),
      uR = GR(1270),
      ZR = GR(1196);

    function qR() {
      let RR = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      const {
        userContext: JR
      } = (0, ZR.d)(), [GR, uR] = (0, yR.useState)((() => ({
        loading: RR && JR.isLoggedIn(),
        eligibility: null
      })));
      if ((0, yR.useEffect)((() => {
          if (!RR || !JR.isLoggedIn()) return void uR({
            loading: !1,
            eligibility: null
          });
          let GR = !1;
          return tR.c.getCreatorEligibility(JR).then((RR => {
            GR || uR({
              loading: !1,
              eligibility: RR
            })
          })).catch((RR => {
            console.warn("Failed to load creator eligibility", RR), GR || uR({
              loading: !1,
              eligibility: null
            })
          })), () => {
            GR = !0
          }
        }), [JR, RR]), null === GR.eligibility) return GR;
      const qR = Date.now(),
        {
          thumbnailUploadWait: iR,
          publishSuspendedUntil: fR
        } = GR.eligibility;
      return {
        loading: GR.loading,
        eligibility: {
          thumbnailUploadWait: null !== iR && iR.until > qR ? iR : null,
          publishSuspendedUntil: null !== fR && fR > qR ? fR : null
        }
      }
    }

    function iR() {
      const {
        t: RR,
        selectedLanguage: JR
      } = (0, uR.A)();
      return (GR, yR) => RR(GR, {
        date: (0, uR.f)(JR.code, GR, yR, {
          dateStyle: "medium",
          timeStyle: "short"
        })
      })
    }

    function fR() {
      const {
        t: RR,
        selectedLanguage: JR
      } = (0, uR.A)();
      return GR => {
        const yR = "worldBuilder:publishSuspended";
        return RR(yR, {
          date: (0, uR.f)(JR.code, yR, GR, {
            dateStyle: "medium",
            timeStyle: "short",
            timeZone: "UTC"
          })
        })
      }
    }
  },
  6105: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => WR
    });
    var yR = GR(66),
      tR = GR(1459),
      uR = GR(1127),
      ZR = GR(163),
      qR = GR(3029),
      iR = GR(1701),
      fR = GR(25),
      VR = GR(2134),
      KR = GR(1647),
      wR = GR(5392),
      rR = GR(1493),
      eR = GR(2068),
      aR = GR(1196),
      LR = GR(1663),
      nR = GR(5996);

    function UR(RR, JR) {
      return {
        schematicId: RR.schematicId,
        name: RR.name,
        description: RR.description,
        gamePublished: JR,
        gameCategory: RR.gameCategory,
        defaultGamemode: RR.defaultGamemode,
        voidDeathHeight: RR.voidDeathHeight,
        disableKeepInventory: RR.disableKeepInventory,
        disableTpRequests: RR.disableTpRequests,
        disableLobbySpawn: RR.disableLobbySpawn,
        disableMobs: RR.disableMobs,
        disableSpawnProtection: RR.disableSpawnProtection,
        disableFallDamage: RR.disableFallDamage,
        worldBorder: RR.worldBorder,
        hideLobbyCode: RR.hideLobbyCode,
        enableSmpMarketplace: RR.enableSmpMarketplace,
        enableSurvivalGuns: RR.enableSurvivalGuns,
        enableSpawnReset: RR.enableSpawnReset,
        enableDayNight: RR.enableDayNight,
        persistWorld: RR.persistWorld,
        persistInventory: RR.persistInventory,
        enableFluidFlow: RR.enableFluidFlow
      }
    }

    function WR(RR) {
      var JR, GR;
      let {
        onNavigateAway: WR,
        inSourceWorld: AR = !1,
        canManage: CR = !0
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const {
        userContext: XR
      } = (0, aR.d)(), MR = (0, LR.useNavigatePreserveSearch)(), [BR, lR] = (0, yR.useState)({
        ...RR
      }), [pR, gR] = (0, yR.useState)("Enter"), [bR, vR] = (0, yR.useState)(void 0), [OR, xR] = (0, yR.useState)(!1), NR = (0, yR.useRef)(UR(RR, RR.gamePublished)), DR = (0, yR.useRef)(void 0), HR = "Enter" === pR, oR = null !== (JR = null === (GR = (0, nR.e)(CR).eligibility) || void 0 === GR ? void 0 : GR.publishSuspendedUntil) && void 0 !== JR ? JR : null, cR = XR.playerHasRank("developer") || XR.playerHasRank("admin") || "Enter" === pR && !1 !== BR.schematicContainsSpawnBlock, PR = void 0 !== bR && bR !== DR.current || JSON.stringify(UR(BR, BR.gamePublished)) !== JSON.stringify(NR.current);

      function IR(RR, JR) {
        lR((GR => ({
          ...GR,
          [RR]: JR
        })))
      }
      const mR = (0, yR.useCallback)((RR => {
        DR.current = RR, vR(RR)
      }), []);

      function zR() {
        return (0, iR.z)((0, uR.w)(BR.schematicId), BR)
      }

      function SR(RR, JR) {
        gR("Loading");
        const GR = UR(BR, RR),
          yR = bR !== DR.current ? bR : void 0;
        KR.c.updateSchematic(XR, GR, yR, JR).then((JR => {
          let {
            customTexturePackKey: yR
          } = JR;
          gR("Success"), IR("customTexturePackKey", yR), NR.current = GR, DR.current = void 0, vR(void 0), !RR || BR.gamePublished || WR || eR.j.showGamePublished(BR.name, zR()), setTimeout((() => {
            IR("gamePublished", RR), gR("Enter")
          }), 1e3)
        })).catch((RR => {
          if (RR instanceof ZR.d && RR.errorMessageForUser === qR.E && void 0 === JR) return gR("Enter"), void xR(!0);
          var GR;
          (console.error("Failed to save schematic:", RR), gR("Error"), RR instanceof ZR.d && RR.errorMessageForUser) && rR.NotificationProvider.showAlertPopup({
            title: "worldBuilder:changesNotSaved",
            subtitle: RR.errorMessageForUser,
            textOpts: {
              subtitle: null !== (GR = RR.errorMessageTranslationParams) && void 0 !== GR ? GR : void 0
            },
            confirmText: "general:ok"
          });
          setTimeout((() => {
            gR("Enter")
          }), 1e3)
        }))
      }
      return {
        schematicData: BR,
        updateSchematicData: IR,
        setTexturePack: vR,
        initializeTexturePack: mR,
        updateState: pR,
        formEnabled: HR,
        publishFormEnabled: cR,
        hasUnsavedChanges: PR,
        publishSuspendedUntil: oR,
        canEditSourceWorld: !AR,
        saveSchematic: SR,
        unpublishSchematic: function() {
          rR.NotificationProvider.showPromptPopup({
            icon: "rocket-launch",
            title: "worldBuilder:unpublishAsGameConfirmTitle",
            subtitle: "worldBuilder:unpublishAsGameConfirmSubtitle",
            confirmText: "worldBuilder:unpublishAsGame",
            cancelText: "general:cancel",
            destructive: !0,
            unlockPointerKey: "unpublishGamePrompt"
          }).getResult().then((RR => {
            !0 === RR && SR(!1)
          }))
        },
        askingPublishingPolicy: OR,
        answerPublishingPolicy: function(RR) {
          xR(!1), RR && SR(!0, qR.H)
        },
        editSourceWorld: function() {
          gR("Loading"), wR.c.getSourceWorld(BR.schematicId).then((RR => {
            VR.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, fR.k)("other"), MR((0, tR.e)("classic", RR)), null === WR || void 0 === WR || WR()
          })).catch((RR => {
            console.error("Failed to get source world:", RR), gR("Error"), setTimeout((() => {
              gR("Enter")
            }), 1e3)
          }))
        },
        playGame: function() {
          VR.gameBridge.send("leaveGame", {
            reloadPath: "/"
          }), MR(zR()), null === WR || void 0 === WR || WR()
        }
      }
    }
  },
  5836: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => uR,
      f: () => wR,
      g: () => iR,
      i: () => eR,
      j: () => fR,
      k: () => rR
    });
    var yR = GR(5839),
      tR = GR(5844);
    const uR = !1,
      ZR = yR.j.map((RR => {
        const JR = [];
        for (let uR = 1; uR <= RR.reach; uR++) JR.push(tR.l[(0, yR.h)(RR.source, uR)].id);
        const GR = "water" === RR.family;
        return Object.freeze({
          name: RR.kind,
          family: RR.family,
          reach: RR.reach,
          stepTicks: GR ? 5 : 10,
          slopeDistance: GR ? 4 : 2,
          sourceId: tR.l[RR.source].id,
          fallingId: tR.l[(0, yR.d)(RR.source)].id,
          flowingIds: Object.freeze(JR),
          makesSources: GR,
          stillId: tR.l[RR.still].id
        })
      })),
      qR = new Map;
    for (const aR of ZR) qR.set(aR.sourceId, Object.freeze({
      kind: aR,
      state: "source",
      distance: 0
    })), qR.set(aR.fallingId, Object.freeze({
      kind: aR,
      state: "falling",
      distance: 0
    })), aR.flowingIds.forEach(((RR, JR) => {
      qR.set(RR, Object.freeze({
        kind: aR,
        state: "flowing",
        distance: JR + 1
      }))
    }));

    function iR(RR) {
      return ZR.find((JR => JR.name === RR))
    }

    function fR(RR) {
      return null === RR ? void 0 : qR.get(RR)
    }
    const VR = new Uint8Array(65536);
    for (const [aR, LR] of qR) VR[aR] = "source" === LR.state ? 1 : 2;
    const KR = new Map;
    for (const aR of ZR) KR.set(aR.stillId, aR.family);

    function wR(RR) {
      var JR, GR;
      return null !== (JR = null === (GR = fR(RR)) || void 0 === GR ? void 0 : GR.kind.family) && void 0 !== JR ? JR : rR(RR)
    }

    function rR(RR) {
      var JR;
      return null === RR ? null : null !== (JR = KR.get(RR)) && void 0 !== JR ? JR : null
    }
    tR.l.Obsidian.id, tR.l["Messy Stone"].id;

    function eR() {
      let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {
        let RR = 0;
        for (const JR of ZR) RR = Math.max(RR, JR.stillId, JR.sourceId, JR.fallingId, ...JR.flowingIds);
        return RR
      }() + 1;
      const JR = new Uint8Array(RR);
      for (const GR of ZR) {
        const yR = ("water" === GR.family ? 1 : 2) << 4;
        for (const tR of [GR.stillId, GR.sourceId, GR.fallingId, ...GR.flowingIds]) tR < RR && (JR[tR] = yR)
      }
      return JR
    }
  },
  5820: () => {}
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);