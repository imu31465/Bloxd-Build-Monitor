export const id = 118;
export const ids = [118];
export const modules = {
  5418: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => PB,
      d: () => MB,
      e: () => zB
    });
    GB(5426);
    var YB = GB(1175),
      DB = GB(1090),
      QB = GB.n(DB),
      oB = GB(1405),
      jB = (GB(56), GB(4777)),
      yB = GB(1383),
      JB = GB(1282);

    function MB(BB) {
      let {
        children: OB,
        label: GB,
        className: DB,
        circleInfoText: jB,
        disabled: MB,
        onLabelClick: PB
      } = BB;
      const {
        t: zB
      } = (0, YB.H)(), lB = (0, JB.jsxs)("div", {
        className: QB()("Label", {
          ClickableLabel: void 0 !== PB
        }),
        onClick: PB,
        children: [zB(GB), jB && (0, JB.jsx)(yB.b, {
          name: "circle-info"
        })]
      });
      return (0, JB.jsxs)("div", {
        className: QB()("LabeledInput", {
          [DB]: DB,
          DisabledLabelInput: MB
        }),
        children: [jB && (0, JB.jsx)(oB.g, {
          tooltipInner: (0, JB.jsx)("div", {
            className: "LabeledInputTooltip",
            children: zB(jB)
          }),
          children: lB
        }), !jB && lB, OB]
      })
    }

    function PB(BB) {
      let {
        checked: OB,
        setChecked: GB,
        disabled: YB = !1
      } = BB;
      return (0, JB.jsx)("div", {
        className: "OtherInput ClickableOtherInput",
        "data-pad-focusable": !0,
        "aria-disabled": YB || void 0,
        onClick: BB => {
          YB || GB(!OB)
        },
        children: (0, JB.jsx)(jB.e, {
          checked: OB,
          onChange: BB => {
            GB(BB.target.checked)
          },
          disabled: YB
        })
      })
    }

    function zB(BB) {
      let {
        checked: OB,
        setChecked: GB,
        disabled: YB
      } = BB;
      return (0, JB.jsx)("div", {
        className: QB()("SwitchContainer", {
          SwitchContainerDisabled: YB
        }),
        onClick: () => {
          YB || GB(!OB)
        },
        children: (0, JB.jsx)(jB.e, {
          className: "SwitchCheckbox",
          checked: OB,
          onChange: BB => {
            GB(BB.target.checked)
          },
          disabled: !!YB
        })
      })
    }
  },
  5430: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => JB
    });
    var YB = GB(1090),
      DB = GB.n(YB),
      QB = GB(5047),
      oB = GB(1175),
      jB = GB(1282);
    const yB = [...QB.k, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function JB(BB) {
      const {
        disabled: OB,
        hideWrapper: GB
      } = BB, {
        t: YB
      } = (0, oB.H)(), JB = BB.advancedMode ? yB.map((OB => [OB, BB.callbacks[OB]])) : QB.k.map((OB => [OB, BB.callbacks[OB]])), PB = (0, jB.jsx)("div", {
        className: DB()("PluginsGrid", {
          SectionBody: !GB
        }),
        children: JB.map((BB => {
          let [GB, YB] = BB;
          return (0, jB.jsx)(MB, {
            plugin: GB,
            callbacks: YB,
            disabled: OB
          }, GB)
        }))
      });
      return GB ? PB : (0, jB.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, jB.jsx)("div", {
          className: "SectionTitle",
          children: YB("worldBuilder:pluginsSection")
        }), PB]
      })
    }

    function MB(BB) {
      let {
        plugin: OB,
        callbacks: {
          isEnabled: GB,
          Zk: YB
        },
        disabled: QB
      } = BB;
      const {
        t: yB
      } = (0, oB.H)(), JB = GB();
      return (0, jB.jsxs)("div", {
        className: DB()("PluginCard", {
          PluginCardEnabled: JB,
          PluginCardDisabledForm: QB
        }),
        "data-pad-focusable": !0,
        "aria-disabled": QB || void 0,
        onClick: () => {
          QB || YB(!JB)
        },
        children: [(0, jB.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, jB.jsx)("img", {
            src: `/textures/games/classic/customGames/${OB}.png`,
            alt: OB
          })
        }), (0, jB.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, jB.jsx)("div", {
            className: "PluginCardTitle",
            children: yB(PB[OB])
          }), (0, jB.jsx)("div", {
            className: "PluginCardDescription",
            children: yB(zB[OB])
          })]
        }), (0, jB.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: yB(JB ? "general:on" : "general:off")
        })]
      })
    }
    const PB = {
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
  5447: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => JB
    });
    var YB = GB(1090),
      DB = GB.n(YB),
      QB = GB(1175),
      oB = GB(1383),
      jB = GB(1282);

    function yB(BB) {
      let {
        textKey: OB,
        allowed: GB
      } = BB;
      const {
        t: YB
      } = (0, QB.H)();
      return (0, jB.jsxs)("li", {
        className: DB()("PolicyListItem", GB ? "Allowed" : "NotAllowed"),
        children: [(0, jB.jsx)(oB.b, {
          name: GB ? "check" : "x"
        }), (0, jB.jsx)("span", {
          children: YB(OB)
        })]
      })
    }

    function JB(BB) {
      let {
        allowed: OB,
        notAllowed: GB
      } = BB;
      return (0, jB.jsxs)("ul", {
        className: "PolicyList",
        children: [OB.map((BB => (0, jB.jsx)(yB, {
          textKey: BB,
          allowed: !0
        }, BB))), GB.map((BB => (0, jB.jsx)(yB, {
          textKey: BB,
          allowed: !1
        }, BB)))]
      })
    }
  },
  5441: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => AB,
      h: () => VB
    });
    var YB = GB(56),
      DB = GB(1090),
      QB = GB.n(DB),
      oB = GB(70),
      jB = GB(2417),
      yB = GB(1175),
      JB = GB(5418),
      MB = GB(1383),
      PB = GB(1403),
      zB = GB(1485),
      lB = GB(4998),
      pB = GB(5447),
      qB = GB(1282);

    function ZB(BB) {
      return (0, oB.createPortal)((0, qB.jsx)(PB.c, {
        ...BB
      }), document.body)
    }
    const NB = jB.t.map((BB => `worldBuilder:publishingPolicy_${BB}`)),
      RB = Object.keys(jB.w).map((BB => `worldBuilder:publishingPolicy_${BB}`));

    function WB(BB) {
      let {
        onScrolledToEnd: OB
      } = BB;
      const GB = (0, YB.useRef)(null),
        {
          after: DB
        } = (0, lB.d)(GB, "y");
      return (0, YB.useEffect)((() => {
        DB || null === OB || void 0 === OB || OB()
      }), [DB, OB]), (0, qB.jsx)("div", {
        ref: GB,
        className: QB()("PublishingPolicyRows", {
          PublishingPolicyRowsMoreBelow: DB
        }),
        tabIndex: 0,
        "data-pad-focusable": !0,
        children: (0, qB.jsx)(pB.e, {
          allowed: NB,
          notAllowed: RB
        })
      })
    }

    function AB(BB) {
      let {
        onAnswer: OB
      } = BB;
      const [GB, DB] = (0, YB.useState)(!1), [QB, oB] = (0, YB.useState)(!1), jB = (0, YB.useCallback)((() => {
        oB(!0)
      }), []);
      return (0, qB.jsx)(ZB, {
        close: () => {
          OB(!1)
        },
        disableExitButton: !0,
        body: (0, qB.jsxs)(PB.g, {
          className: "PublishingPolicyPopup",
          title: "worldBuilder:publishingPolicy",
          padStartsOn: "content",
          confirm: {
            text: "worldBuilder:publishAsGame",
            disabled: !GB,
            onClick: () => {
              OB(!0)
            }
          },
          cancel: {
            text: "general:cancel",
            onClick: () => {
              OB(!1)
            }
          },
          children: [(0, qB.jsx)(WB, {
            onScrolledToEnd: jB
          }), (0, qB.jsx)(JB.d, {
            className: "PublishingPolicyAgree",
            label: QB ? "worldBuilder:agreeToPublishingPolicy" : "worldBuilder:scrollToAgreeToPublishingPolicy",
            disabled: !QB,
            onLabelClick: () => {
              DB(!GB)
            },
            children: (0, qB.jsx)(JB.b, {
              checked: GB,
              setChecked: DB,
              disabled: !QB
            })
          })]
        })
      })
    }

    function VB() {
      const {
        t: BB
      } = (0, yB.H)(), [OB, GB] = (0, YB.useState)(!1);
      return (0, qB.jsxs)(qB.Fragment, {
        children: [(0, qB.jsxs)(zB.Z, {
          className: "PublishingPolicyLink",
          onClick: () => {
            GB(!0)
          },
          children: [(0, qB.jsx)(MB.b, {
            name: "shield-halved"
          }), " ", BB("worldBuilder:publishingPolicy")]
        }), OB && (0, qB.jsx)(ZB, {
          close: () => {
            GB(!1)
          },
          body: (0, qB.jsx)(PB.g, {
            className: "PublishingPolicyPopup",
            title: "worldBuilder:publishingPolicy",
            children: (0, qB.jsx)(WB, {})
          })
        })]
      })
    }
  },
  5414: (BB, OB, GB) => {
    GB.d(OB, {
      k: () => PO,
      d: () => MO,
      g: () => JO,
      m: () => zO
    });
    var YB = GB(56),
      DB = GB(1400),
      QB = GB(1485),
      oB = GB(1735),
      jB = GB(1175),
      yB = GB(1375),
      JB = GB(1405),
      MB = GB(1383),
      PB = GB(1217),
      zB = GB(1090),
      lB = GB.n(zB),
      pB = GB(331),
      qB = GB(5047),
      ZB = GB(1238),
      NB = GB(5418),
      RB = GB(3544),
      WB = GB(5430),
      AB = GB(1282);

    function VB(BB) {
      let {
        icon: OB,
        title: GB,
        disabled: YB,
        children: DB
      } = BB;
      return (0, AB.jsxs)("div", {
        className: lB()("ManageCard", {
          ManageCardDisabled: YB
        }),
        children: [(0, AB.jsxs)("div", {
          className: "ManageCardHead",
          children: [(0, AB.jsx)("div", {
            className: "ManageCardIcon",
            children: (0, AB.jsx)(MB.b, {
              name: OB
            })
          }), (0, AB.jsx)("div", {
            children: (0, AB.jsx)("h2", {
              className: "ManageCardTitle",
              children: GB
            })
          })]
        }), (0, AB.jsxs)("div", {
          className: "ManageCardBody",
          children: [DB, YB && (0, AB.jsx)("div", {
            className: "ManageCardDisabledOverlay"
          })]
        })]
      })
    }

    function SB(BB) {
      let {
        label: OB,
        caption: GB,
        children: YB
      } = BB;
      return (0, AB.jsxs)("div", {
        className: "ManageStackedField",
        children: [(0, AB.jsx)("div", {
          className: "ManageStackedFieldLabel",
          children: OB
        }), YB, GB && (0, AB.jsx)("div", {
          className: "ManageStackedFieldCaption",
          children: GB
        })]
      })
    }

    function nB(BB) {
      let {
        label: OB,
        caption: GB,
        disabled: YB,
        children: DB
      } = BB;
      return (0, AB.jsxs)("div", {
        className: lB()("ManageField", {
          ManageFieldDisabled: YB
        }),
        children: [(0, AB.jsxs)("div", {
          className: "ManageFieldText",
          children: [(0, AB.jsx)("div", {
            className: "ManageFieldLabel",
            children: OB
          }), (0, AB.jsx)("div", {
            className: "ManageFieldCaption",
            children: GB
          })]
        }), (0, AB.jsx)("div", {
          className: "ManageFieldControl",
          children: DB
        })]
      })
    }

    function UB(BB) {
      var OB, GB;
      let {
        schematicData: YB,
        updateSchematicData: DB,
        publishFormEnabled: QB,
        formEnabled: oB
      } = BB;
      const {
        t: yB
      } = (0, jB.H)(), JB = !QB, MB = {
        tpRequests: {
          isEnabled: () => !YB.disableTpRequests,
          Zk: BB => DB("disableTpRequests", !BB)
        },
        spawnProtection: {
          isEnabled: () => !YB.disableSpawnProtection,
          Zk: BB => DB("disableSpawnProtection", !BB)
        },
        spawnReset: {
          isEnabled: () => !!YB.enableSpawnReset,
          Zk: BB => DB("enableSpawnReset", BB)
        },
        smpMarketplace: {
          isEnabled: () => !!YB.enableSmpMarketplace,
          Zk: BB => DB("enableSmpMarketplace", BB)
        },
        survivalGuns: {
          isEnabled: () => !!YB.enableSurvivalGuns,
          Zk: BB => DB("enableSurvivalGuns", BB)
        },
        fallDamage: {
          isEnabled: () => !YB.disableFallDamage,
          Zk: BB => DB("disableFallDamage", !BB)
        },
        dayNight: {
          isEnabled: () => !!YB.enableDayNight,
          Zk: BB => DB("enableDayNight", BB)
        }
      };
      return (0, AB.jsxs)(AB.Fragment, {
        children: [!1 === YB.schematicContainsSpawnBlock && (0, AB.jsx)("div", {
          className: "ManageWarningBanner",
          children: yB("worldBuilder:mustContainSpawnBlock")
        }), (0, AB.jsxs)("div", {
          className: "ManageSettingsGrid",
          children: [(0, AB.jsxs)(VB, {
            icon: "globe",
            title: yB("worldBuilder:worldRulesSection"),
            disabled: !oB,
            children: [(0, AB.jsx)(nB, {
              label: yB("classic:defaultGamemode"),
              caption: yB("classic:defaultGamemodeDescription"),
              disabled: JB,
              children: (0, AB.jsx)(RB.c, {
                controlClassName: "ManageDropdown",
                options: qB.F.map((BB => ({
                  value: BB,
                  label: pB.t[BB]
                }))),
                value: YB.defaultGamemode,
                onChange: BB => DB("defaultGamemode", BB.value)
              })
            }), (0, AB.jsx)(nB, {
              label: yB("classic:voidDeathHeight"),
              caption: yB("classic:voidDeathHeightDescription"),
              disabled: JB,
              children: (0, AB.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, AB.jsx)("input", {
                  type: "number",
                  max: ZB.D,
                  value: null !== (OB = YB.voidDeathHeight) && void 0 !== OB ? OB : "",
                  onChange: BB => {
                    const OB = parseInt(BB.target.value);
                    DB("voidDeathHeight", OB)
                  }
                }), (0, AB.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: yB("worldBuilder:blocksUnit")
                })]
              })
            }), (0, AB.jsx)(nB, {
              label: yB("classic:worldBorder"),
              caption: yB("classic:worldBorderDescription"),
              disabled: JB,
              children: (0, AB.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, AB.jsx)("input", {
                  type: "number",
                  min: ZB.M,
                  max: ZB.H,
                  placeholder: yB("worldBuilder:noWorldBorderLimit"),
                  value: null !== (GB = YB.worldBorder) && void 0 !== GB ? GB : "",
                  onChange: BB => {
                    const OB = parseInt(BB.target.value);
                    DB("worldBorder", isNaN(OB) ? null : OB)
                  }
                }), (0, AB.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: yB("worldBuilder:blocksUnit")
                })]
              })
            }), (0, AB.jsx)(nB, {
              label: yB("classic:disableMobs"),
              caption: yB("classic:disableMobsDescription"),
              disabled: JB,
              children: (0, AB.jsx)(NB.e, {
                checked: YB.disableMobs,
                setChecked: BB => DB("disableMobs", BB),
                disabled: JB
              })
            })]
          }), (0, AB.jsxs)(VB, {
            icon: "user-group",
            title: yB("worldBuilder:playerAndLobbySection"),
            disabled: !oB,
            children: [(0, AB.jsx)(nB, {
              label: yB("classic:disableKeepInventory"),
              caption: yB("classic:disableKeepInventoryDescription"),
              disabled: JB,
              children: (0, AB.jsx)(NB.e, {
                checked: YB.disableKeepInventory,
                setChecked: BB => DB("disableKeepInventory", BB),
                disabled: JB
              })
            }), (0, AB.jsx)(nB, {
              label: yB("classic:persistInventory"),
              caption: yB("classic:persistInventoryDescription"),
              disabled: JB,
              children: (0, AB.jsx)(RB.c, {
                controlClassName: "ManageDropdown",
                options: qB.n.map((BB => ({
                  value: BB,
                  label: pB.h[BB]
                }))),
                value: YB.persistInventory,
                onChange: BB => DB("persistInventory", BB.value)
              })
            }), (0, AB.jsx)(nB, {
              label: yB("classic:persistWorld"),
              caption: yB("classic:persistWorldDescription"),
              disabled: JB,
              children: (0, AB.jsx)(NB.e, {
                checked: YB.persistWorld,
                setChecked: BB => DB("persistWorld", BB),
                disabled: JB
              })
            }), (0, AB.jsx)(nB, {
              label: yB("classic:disableLobbySpawn"),
              caption: yB("classic:disableLobbySpawnDescription"),
              disabled: JB,
              children: (0, AB.jsx)(NB.e, {
                checked: YB.disableLobbySpawn,
                setChecked: BB => DB("disableLobbySpawn", BB),
                disabled: JB
              })
            }), (0, AB.jsx)(nB, {
              label: yB("classic:hideLobbyCode"),
              caption: yB("classic:hideLobbyCodeDescription"),
              disabled: JB,
              children: (0, AB.jsx)(NB.e, {
                checked: YB.hideLobbyCode,
                setChecked: BB => DB("hideLobbyCode", BB),
                disabled: JB
              })
            })]
          })]
        }), (0, AB.jsx)(VB, {
          icon: "layer-group",
          title: yB("worldBuilder:pluginsSection"),
          disabled: !oB,
          children: (0, AB.jsx)(WB.d, {
            callbacks: MB,
            disabled: JB,
            advancedMode: !0,
            hideWrapper: !0
          })
        })]
      })
    }
    var fB = GB(5437),
      kB = GB(1636),
      dB = GB(1540),
      KB = GB(3928),
      uB = GB(1112),
      mB = GB(5392),
      IB = GB(5452),
      FB = GB(1493),
      iB = GB(5449),
      LB = GB(5447);
    const gB = 50,
      rB = .3;
    async function XB(BB) {
      const OB = await
      function(BB) {
        return new Promise(((OB, GB) => {
          const YB = new FileReader;
          YB.onload = () => OB(YB.result), YB.onerror = GB, YB.readAsDataURL(BB)
        }))
      }(BB), GB = await
      function(BB) {
        return new Promise(((OB, GB) => {
          const YB = new Image;
          YB.onload = () => OB(YB), YB.onerror = () => GB(new Error("Failed to load image")), YB.src = BB
        }))
      }(OB);
      if (GB.naturalHeight > GB.naturalWidth) throw new wB;
      const YB = 1024 * gB,
        {
          dataUrl: DB,
          finalQuality: QB
        } = function(BB, OB) {
          const GB = document.createElement("canvas");
          GB.width = BB.naturalWidth, GB.height = BB.naturalHeight, GB.getContext("2d").drawImage(BB, 0, 0);
          let YB = .92,
            DB = GB.toDataURL("image/jpeg", YB);
          for (; .75 * DB.length > OB && YB > .05;) YB -= .05, DB = GB.toDataURL("image/jpeg", YB);
          return {
            dataUrl: DB,
            finalQuality: YB
          }
        }(GB, YB);
      if (Math.ceil(.75 * DB.length) > YB) throw new EB;
      return {
        base64Jpg: DB,
        heavilyCompressed: QB < rB
      }
    }
    class wB extends Error {}
    class EB extends Error {}

    function cB(BB) {
      var OB;
      let {
        schematicId: GB,
        hasReadUploadPolicy: DB,
        onPolicyValidationError: yB,
        onThumbnailReady: JB
      } = BB;
      const {
        t: zB
      } = (0, jB.H)(), [pB, qB] = (0, YB.useState)(null), [ZB, NB] = (0, YB.useState)(""), [RB, WB] = (0, YB.useState)(""), [VB, SB] = (0, YB.useState)(!0), [nB, UB] = (0, YB.useState)(!1), fB = (0, YB.useRef)(!1), [kB, dB] = (0, YB.useState)(null), [KB, uB] = (0, YB.useState)(!1), [mB, FB] = (0, YB.useState)(!1), iB = (0, YB.useRef)(0), {
        getRootProps: LB,
        getInputProps: gB,
        isDragActive: rB
      } = (0, IB.e)({
        accept: {
          "image/*": [".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp"]
        },
        multiple: !1,
        onDrop: async BB => {
          if (0 === BB.length) return;
          const OB = BB[0],
            GB = ++iB.current;
          dB(null), uB(!1), qB(null), NB(OB.name);
          try {
            const BB = await XB(OB);
            if (GB !== iB.current) return;
            qB(BB), uB(BB.heavilyCompressed)
          } catch (YB) {
            if (GB !== iB.current) return;
            dB(zB(YB instanceof wB ? "thumbnail:portraitImagesNotAllowed" : YB instanceof EB ? "thumbnail:couldNotCompressImage" : "thumbnail:failedToUploadImage"))
          }
        },
        useFsAccessApi: !1
      }), cB = ZB.length <= 30 ? ZB : `${ZB.slice(0,27)}...`, hB = null !== (OB = null === pB || void 0 === pB ? void 0 : pB.base64Jpg) && void 0 !== OB ? OB : null, aB = RB.trim(), eB = aB.length >= PB.p && aB.length <= PB.l, TB = mB && !pB && !kB, bB = mB && !eB;
      return (0, AB.jsxs)("div", {
        className: "ThumbnailUploadContainer",
        children: [(0, AB.jsxs)("div", {
          ...LB({
            className: lB()("ThumbnailUploadDropzone", {
              ActiveDrag: rB,
              ValidationError: TB
            })
          }),
          children: [(0, AB.jsx)("input", {
            ...gB()
          }), !rB && hB ? (0, AB.jsxs)(AB.Fragment, {
            children: [(0, AB.jsxs)("div", {
              className: "ThumbnailAspectPreviews",
              children: [(0, AB.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, AB.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "1:1"
                }), (0, AB.jsx)("div", {
                  className: "ThumbnailAspectFrame Square",
                  children: (0, AB.jsx)("img", {
                    src: hB,
                    alt: "1:1 preview"
                  })
                })]
              }), (0, AB.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, AB.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "16:9"
                }), (0, AB.jsx)("div", {
                  className: "ThumbnailAspectFrame Wide",
                  children: (0, AB.jsx)("img", {
                    src: hB,
                    alt: "16:9 preview"
                  })
                })]
              })]
            }), (0, AB.jsxs)("div", {
              children: [(0, AB.jsx)("div", {
                className: "ThumbnailUploadInstructions Active",
                children: cB
              }), (0, AB.jsx)("div", {
                className: "ThumbnailUploadInstructions Preview",
                children: zB("thumbnail:preview")
              })]
            })]
          }) : (0, AB.jsxs)(AB.Fragment, {
            children: [(0, AB.jsx)("div", {
              className: "ThumbnailUploadIcon",
              children: (0, AB.jsx)(MB.b, {
                name: "image"
              })
            }), (0, AB.jsx)("div", {
              className: "ThumbnailUploadInstructions",
              children: zB("thumbnail:dragImageHere")
            })]
          })]
        }), TB && (0, AB.jsx)("div", {
          className: "ThumbnailUploadError",
          children: zB("thumbnail:imageRequired")
        }), (0, AB.jsx)(oB.b, {
          className: lB()("ThumbnailUploadNameInput", {
            ValidationError: bB
          }),
          placeholderText: zB("thumbnail:thumbnailName"),
          defaultValue: RB,
          onValueChange: BB => {
            WB(BB)
          },
          maxLength: PB.l
        }), bB && (0, AB.jsx)("div", {
          className: "ThumbnailUploadError",
          children: zB("thumbnail:nameRequired", {
            min: PB.p,
            max: PB.l
          })
        }), (0, AB.jsxs)("label", {
          className: "ThumbnailUploadCheckbox",
          children: [(0, AB.jsx)("input", {
            type: "checkbox",
            checked: VB,
            onChange: BB => {
              SB(BB.target.checked)
            }
          }), zB("thumbnail:setAsThumbnailOnceApproved")]
        }), KB && (0, AB.jsx)("div", {
          className: "ThumbnailUploadWarning",
          children: zB("thumbnail:heavyCompressionWarning")
        }), kB && (0, AB.jsx)("div", {
          className: "ThumbnailUploadError",
          children: kB
        }), (0, AB.jsx)(QB.q, {
          disabled: nB,
          className: "ThumbnailUploadButton",
          onClick: async () => {
            if (FB(!0), !fB.current && pB && eB && DB) {
              fB.current = !0, UB(!0), dB(null);
              try {
                await JB(pB.base64Jpg, aB, VB ? GB : null)
              } catch (BB) {
                dB(BB.errorMessageForUser ? zB(BB.errorMessageForUser, BB.errorMessageTranslationParams) : zB("thumbnail:failedToUploadImage"))
              } finally {
                fB.current = !1, UB(!1)
              }
            } else DB || yB()
          },
          children: zB(nB ? "thumbnail:processing" : "thumbnail:uploadThumbnail")
        })]
      })
    }
    const hB = 2e3;

    function aB(BB) {
      let {
        schematicId: OB,
        ownedThumbnailCount: GB,
        onClose: DB,
        onThumbnailReady: QB
      } = BB;
      const {
        t: oB
      } = (0, jB.H)(), {
        userContext: JB
      } = (0, uB.d)(), [zB, pB] = (0, YB.useState)(!1), [qB, ZB] = (0, YB.useState)(!1), [NB, RB] = (0, YB.useState)(!1), WB = (0, YB.useRef)(), {
        loading: VB,
        eligibility: SB
      } = (0, iB.c)(), nB = (0, iB.f)();
      (0, YB.useEffect)((() => () => {
        clearTimeout(WB.current)
      }), []);
      const UB = [];
      JB.isLoggedIn() || UB.push(oB("thumbnail:mustBeLoggedInToUpload")), GB >= PB.$ && UB.push(oB("thumbnail:thumbnailLimitReachedPleaseDelete", {
        max: PB.$
      }));
      const fB = null === SB || void 0 === SB ? void 0 : SB.thumbnailUploadWait;
      if (fB && UB.push(nB("accountAge" === fB.reason ? "thumbnail:accountTooNewUntil" : "thumbnail:uploadCooldownUntil", fB.until)), !zB && UB.length > 0) return (0, AB.jsxs)("div", {
        className: "ThumbnailUploaderInner",
        children: [(0, AB.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: oB("thumbnail:cannotUploadThumbnail")
        }), UB.map((BB => (0, AB.jsxs)("div", {
          className: "CannotUploadThumbnailItem",
          children: [(0, AB.jsx)(MB.b, {
            name: "triangle-exclamation"
          }), (0, AB.jsx)("span", {
            children: BB
          })]
        }, BB)))]
      });
      if (VB) return (0, AB.jsx)("div", {
        className: "ThumbnailUploaderInner",
        children: (0, AB.jsx)(yB.b, {})
      });
      return (0, AB.jsxs)("div", {
        className: lB()("ThumbnailUploaderInner", {
          ThumbnailUploaderSuccess: zB
        }),
        children: [zB && (0, AB.jsxs)("div", {
          className: "ThumbnailUploadSuccessOverlay",
          children: [(0, AB.jsxs)("div", {
            className: "ThumbnailUploadSuccessIcon FullyFancyText AnimFadeInScaleUp",
            children: [(0, AB.jsx)(MB.b, {
              name: "check"
            }), (0, AB.jsx)(FB.c, {})]
          }), (0, AB.jsx)("div", {
            className: "ThumbnailUploadSuccessText AnimFadeInScaleUp",
            children: oB("thumbnail:thumbnailUploaded")
          })]
        }), (0, AB.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: oB("thumbnail:uploadThumbnail")
        }), (0, AB.jsxs)("div", {
          className: "ThumbnailUploaderBody",
          children: [(0, AB.jsxs)("div", {
            className: "ThumbnailUploaderLeft",
            children: [(0, AB.jsx)("h3", {
              className: "SchematicPopupSubtitle",
              children: oB("thumbnail:chooseImage", {
                maxSizeKb: gB
              })
            }), (0, AB.jsx)(cB, {
              schematicId: OB,
              hasReadUploadPolicy: qB,
              onPolicyValidationError: () => {
                RB(!0)
              },
              onThumbnailReady: async (BB, OB, GB) => {
                await QB(BB, OB, GB), pB(!0), WB.current = setTimeout(DB, hB)
              }
            })]
          }), (0, AB.jsxs)("div", {
            className: "ThumbnailUploadPolicy",
            children: [(0, AB.jsx)("h3", {
              className: "ThumbnailUploadPolicyTitle",
              children: oB("thumbnail:uploadPolicy")
            }), (0, AB.jsx)(LB.e, {
              allowed: ["thumbnail:policyFollowGuidelines", "thumbnail:policyInGameAssets", "thumbnail:policyLimitText"],
              notAllowed: ["thumbnail:policyCopyrightContent", "thumbnail:policyOutOfGameAssets", "thumbnail:policyBloxdTags", "thumbnail:policyMustReflectGame"]
            }), (0, AB.jsxs)("label", {
              className: lB()("ThumbnailUploadCheckbox Policy", {
                ValidationError: NB && !qB
              }),
              children: [(0, AB.jsx)("input", {
                type: "checkbox",
                checked: qB,
                onChange: BB => {
                  ZB(BB.target.checked)
                }
              }), oB("thumbnail:agreeToUploadPolicy")]
            }), NB && !qB && (0, AB.jsx)("div", {
              className: "ThumbnailPolicyError",
              children: oB("thumbnail:policyRequired")
            })]
          })]
        })]
      })
    }

    function eB(BB) {
      let {
        imageUrl: OB,
        thumbnailName: GB,
        onClose: YB
      } = BB;
      const {
        t: DB
      } = (0, jB.H)();
      return (0, AB.jsxs)("div", {
        className: "ThumbnailDeleteConfirm",
        children: [(0, AB.jsx)("div", {
          className: "ThumbnailDeleteConfirmTitle",
          children: DB("thumbnail:deleteThumbnail")
        }), (0, AB.jsxs)("div", {
          className: "ThumbnailDeleteConfirmImageContainer",
          children: [null !== OB && (0, AB.jsx)("img", {
            className: "ThumbnailDeleteConfirmImage",
            src: OB,
            alt: GB
          }), (0, AB.jsx)("div", {
            className: "ThumbnailGridItemLabel",
            children: GB
          })]
        }), (0, AB.jsx)("div", {
          className: "ThumbnailDeleteConfirmSubtitle",
          children: DB("thumbnail:deleteThumbnailConfirmation")
        }), (0, AB.jsxs)("div", {
          className: "ThumbnailDeleteConfirmButtons",
          children: [(0, AB.jsxs)(QB.Q, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => YB(!0),
            children: [(0, AB.jsx)(MB.b, {
              name: "trash-can"
            }), " ", DB("general:delete")]
          }), (0, AB.jsx)(QB.j, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => YB(!1),
            children: DB("general:cancel")
          })]
        })]
      })
    }
    var TB = GB(204);
    const bB = ["thumbnail:policyFollowGuidelines"],
      CB = {
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
          policyRows: bB,
          example: "thumbnail:rejectionSexualExample",
          fix: "thumbnail:rejectionSexualFix"
        },
        "thumbnail-substances-content": {
          policyRows: bB,
          example: "thumbnail:rejectionSubstancesExample",
          fix: "thumbnail:rejectionSubstancesFix"
        },
        "thumbnail-violent-gore-content": {
          policyRows: bB,
          example: "thumbnail:rejectionViolenceExample",
          fix: "thumbnail:rejectionViolenceFix"
        }
      };

    function HB(BB) {
      let {
        rejectedThumbnails: OB,
        isAcknowledging: GB,
        onAcknowledge: YB
      } = BB;
      const {
        t: DB
      } = (0, jB.H)();
      return (0, AB.jsxs)("div", {
        className: "ManageWarningBanner ThumbnailRejectionNotice",
        children: [(0, AB.jsx)("div", {
          className: "ThumbnailRejectionNoticeTitle",
          children: DB("thumbnail:rejectedByModerators")
        }), OB.map((BB => (0, AB.jsx)(vB, {
          rejected: BB
        }, BB.thumbnail.id))), (0, AB.jsx)(QB.q, {
          className: "ThumbnailRejectionNoticeButton",
          onClick: YB,
          disabled: GB,
          children: GB ? (0, AB.jsx)(yB.b, {}) : DB("thumbnail:gotIt")
        })]
      })
    }

    function vB(BB) {
      var OB;
      let {
        rejected: {
          thumbnail: GB,
          rejection: YB
        }
      } = BB;
      const {
        t: DB
      } = (0, jB.H)(), QB = null !== (OB = (0, TB.c)(CB, YB.policyId)) && void 0 !== OB ? OB : CB["custom-game-bad-thumbnail"], oB = new Date(YB.at).toLocaleDateString();
      return (0, AB.jsxs)("div", {
        className: "RejectedThumbnail",
        children: [(0, AB.jsxs)("div", {
          className: "RejectedThumbnailImage",
          children: [null !== GB.preview && (0, AB.jsx)("img", {
            src: GB.preview,
            alt: GB.name
          }), null === GB.preview && (0, AB.jsx)(MB.b, {
            name: "image-slash"
          })]
        }), (0, AB.jsxs)("div", {
          className: "RejectedThumbnailDetails",
          children: [(0, AB.jsx)("div", {
            className: "RejectedThumbnailName",
            children: GB.name
          }), (0, AB.jsx)("div", {
            children: null !== YB.gameName ? DB("thumbnail:rejectedGameAndDate", {
              game: YB.gameName,
              date: oB
            }) : oB
          }), null !== YB.reason && (0, AB.jsx)("div", {
            children: DB("creatorModeration:moderatorNote", {
              reason: YB.reason
            })
          }), QB.policyRows.length > 0 && (0, AB.jsx)("ul", {
            className: "RejectedThumbnailPolicyRows",
            children: QB.policyRows.map((BB => (0, AB.jsxs)("li", {
              children: [(0, AB.jsx)(MB.b, {
                name: "x"
              }), (0, AB.jsx)("span", {
                children: DB(BB)
              })]
            }, BB)))
          }), (0, AB.jsxs)("div", {
            children: [null !== QB.example && null === YB.reason && `${DB(QB.example)} `, DB(QB.fix)]
          })]
        })]
      })
    }
    var sB = GB(1186);

    function xB(BB) {
      return null !== BB.preview ? BB.preview : BB.approved ? `${sB.clientSideServerUrls.s3Url}/${(0,kB.e)(BB.id)}` : null
    }

    function tB(BB) {
      return null !== BB.pendingKey ? {
        pendingKey: BB.pendingKey
      } : {
        thumbnailId: BB.id
      }
    }

    function BO(BB) {
      var OB, GB;
      let {
        schematicData: oB,
        updateSchematicData: JB,
        publishFormEnabled: PB,
        onClose: zB
      } = BB;
      const {
        t: pB
      } = (0, jB.H)(), {
        userContext: qB,
        isUserContextUpdating: ZB
      } = (0, uB.d)(), NB = (0, KB.c)(), [RB, WB] = (0, YB.useState)([]), [VB, SB] = (0, YB.useState)([]), [nB, UB] = (0, YB.useState)(!0), [fB, kB] = (0, YB.useState)(!1), [IB, FB] = (0, YB.useState)(null !== (OB = oB.customThumbnailId) && void 0 !== OB ? OB : null), [iB, LB] = (0, YB.useState)(null), gB = (0, YB.useRef)(null !== (GB = oB.customThumbnailId) && void 0 !== GB ? GB : null), rB = (0, YB.useRef)(0), XB = (0, YB.useRef)(null), wB = (0, YB.useRef)(null), EB = (0, YB.useRef)(null), cB = (0, YB.useRef)(!1);

      function hB(BB, OB) {
        EB.current && (clearTimeout(EB.current), EB.current = null), LB(BB), null !== BB && OB && (EB.current = setTimeout((() => {
          LB(null), EB.current = null
        }), 5e3))
      }(0, YB.useEffect)((() => () => {
        clearTimeout(wB.current), clearTimeout(EB.current)
      }), []);
      const TB = (0, YB.useCallback)((() => {
        UB(!0), dB.b.getOwnedThumbnails(qB).then((BB => {
          const OB = [],
            GB = [];
          for (const YB of BB.thumbnails) YB.rejection ? OB.push({
            thumbnail: YB,
            rejection: YB.rejection
          }) : GB.push(YB);
          OB.sort(((BB, OB) => OB.rejection.at - BB.rejection.at)), GB.sort(((BB, OB) => {
            const GB = BB.approved ? 1 : 0,
              YB = (OB.approved ? 1 : 0) - GB;
            return 0 !== YB ? YB : OB.lastUpdatedAt - BB.lastUpdatedAt
          })), SB(OB), WB(GB)
        })).catch((BB => {
          console.error("Failed to fetch thumbnails:", BB)
        })).finally((() => {
          UB(!1)
        }))
      }), [qB]);
      async function bB(BB, OB, GB) {
        return dB.b.uploadSchematicThumbnail(qB, BB, OB, GB).then((() => {
          hB({
            text: pB("thumbnail:uploadedAwaitingModeration"),
            type: "success"
          }, !0), TB()
        }))
      }

      function CB() {
        rB.current = Date.now(), wB.current = null;
        const BB = XB.current;
        XB.current = null, hB({
          text: pB("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), dB.b.setSchematicThumbnail(qB, oB.schematicId, BB).then((() => {
          NB.current && (hB({
            text: pB("thumbnail:thumbnailUpdated"),
            type: "success"
          }, !0), gB.current = BB, JB("customThumbnailId", BB), JB("customThumbnailBlurhash", void 0), JB("customThumbnailVariants", void 0))
        })).catch((BB => {
          NB.current && (hB({
            text: BB.errorMessageForUser ? pB(BB.errorMessageForUser, BB.errorMessageTranslationParams) : pB("thumbnail:failedToSetThumbnail"),
            type: "error"
          }, !0), FB(gB.current))
        }))
      }

      function vB(BB) {
        FB(BB), XB.current = BB;
        const OB = Date.now() - rB.current;
        OB >= 1e3 ? CB() : (hB({
          text: pB("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), wB.current || (wB.current = setTimeout((() => {
          CB()
        }), 1e3 - OB)))
      }
      return (0, YB.useEffect)((() => {
        !1 === ZB && TB()
      }), [ZB, TB]), (0, AB.jsxs)("div", {
        className: "BloxdForm ThumbnailSection",
        children: [(0, AB.jsxs)("div", {
          className: "SectionTitle",
          children: [pB("thumbnail:gameThumbnail"), iB && (0, AB.jsx)("span", {
            className: lB()("ThumbnailActionMsg", `ThumbnailActionMsg--${iB.type}`),
            children: iB.text
          })]
        }), (0, AB.jsxs)("div", {
          className: "SectionBody",
          children: [VB.length > 0 && (0, AB.jsx)(HB, {
            rejectedThumbnails: VB,
            isAcknowledging: fB,
            onAcknowledge: async function() {
              kB(!0);
              const BB = await Promise.allSettled(VB.map((BB => {
                let {
                  thumbnail: OB
                } = BB;
                return dB.b.deleteSchematicThumbnail(qB, tB(OB))
              })));
              if (!NB.current) return;
              kB(!1);
              const OB = BB.filter((BB => "rejected" === BB.status));
              OB.length > 0 && (console.error("Failed to acknowledge some thumbnail rejections:", OB), hB({
                text: pB("thumbnail:failedToHideRejections"),
                type: "error"
              }, !0)), TB()
            }
          }), (0, AB.jsxs)("div", {
            className: "ThumbnailGrid",
            children: [(0, AB.jsxs)("div", {
              className: lB()("ThumbnailGridItem ThumbnailGridItemDefault", {
                ThumbnailGridItemSelected: null === IB
              }),
              onClick: () => vB(null),
              children: [(0, AB.jsx)(mB.d, {
                game: {
                  schematicId: oB.schematicId,
                  imageBlurhash: oB.imageBlurhash
                }
              }), (0, AB.jsx)("div", {
                className: "ThumbnailGridItemLabel ThumbnailDefaultLabel",
                children: pB("general:default")
              })]
            }), nB && (0, AB.jsx)(yB.b, {}), RB.map((BB => {
              var OB;
              const GB = xB(BB);
              return (0, AB.jsxs)("div", {
                className: lB()("ThumbnailGridItem", {
                  ThumbnailGridItemSelected: BB.approved && IB === BB.id,
                  ThumbnailGridItemPending: !BB.approved
                }),
                onClick: () => {
                  BB.approved && vB(BB.id)
                },
                children: [null !== GB && (0, AB.jsx)("img", {
                  src: GB,
                  alt: BB.name
                }), (0, AB.jsx)(QB.Q, {
                  className: "ThumbnailDeleteButton",
                  onClick: OB => async function(BB, OB) {
                    BB.stopPropagation();
                    const GB = await DB.NotificationProvider.showCustomPopup({
                        body: BB => (0, AB.jsx)(eB, {
                          imageUrl: xB(OB),
                          thumbnailName: OB.name,
                          onClose: OB => {
                            OB && (cB.current = !0), BB()
                          }
                        }),
                        middleScreenPopupClassName: "ThumbnailDeleteConfirmPopup",
                        onClose: zB
                      }).getResult(),
                      YB = cB.current;
                    cB.current = !1, YB && !0 === GB && (NB.current && hB({
                      text: pB("thumbnail:deletingThumbnail"),
                      type: "info"
                    }, !1), dB.b.deleteSchematicThumbnail(qB, tB(OB)).then((() => {
                      NB.current && (hB({
                        text: pB("thumbnail:thumbnailDeleted"),
                        type: "success"
                      }, !0), null !== OB.id && gB.current === OB.id && vB(null), TB())
                    })).catch((BB => {
                      NB.current && hB({
                        text: BB.errorMessageForUser ? pB(BB.errorMessageForUser, BB.errorMessageTranslationParams) : pB("thumbnail:failedToDeleteThumbnail"),
                        type: "error"
                      }, !0)
                    })))
                  }(OB, BB),
                  children: (0, AB.jsx)(MB.b, {
                    name: "trash-can"
                  })
                }), BB.approved && (0, AB.jsx)("div", {
                  className: "ThumbnailGridItemLabel",
                  children: BB.name
                }), !BB.approved && (0, AB.jsx)("div", {
                  className: "ThumbnailUnapprovedIcon",
                  children: (0, AB.jsx)(MB.b, {
                    name: "hourglass-clock"
                  })
                }), !BB.approved && (0, AB.jsxs)("div", {
                  className: "ThumbnailGridItemLabel ThumbnailPendingLabel",
                  children: [BB.name, (0, AB.jsx)("br", {}), pB("thumbnail:pendingApproval")]
                })]
              }, null !== (OB = BB.id) && void 0 !== OB ? OB : BB.pendingKey)
            })), (0, AB.jsxs)("div", {
              className: lB()("ThumbnailGridItem ThumbnailUploadTile", {
                ThumbnailUploadTileDisabled: !PB
              }),
              onClick: () => {
                PB && function(BB) {
                  let {
                    schematicId: OB,
                    ownedThumbnailCount: GB,
                    onThumbnailReady: YB,
                    onClose: QB
                  } = BB;
                  DB.NotificationProvider.showCustomPopup({
                    body: BB => (0, AB.jsx)(aB, {
                      schematicId: OB,
                      ownedThumbnailCount: GB,
                      onClose: BB,
                      onThumbnailReady: YB
                    }),
                    middleScreenPopupClassName: "SchematicThumbnailPopup",
                    onClose: QB,
                    unlockPointerKey: "schematicThumbnailUploaderPopup"
                  })
                }({
                  schematicId: oB.schematicId,
                  ownedThumbnailCount: RB.length,
                  onThumbnailReady: bB,
                  onClose: zB
                })
              },
              children: [(0, AB.jsx)(MB.b, {
                name: "plus"
              }), (0, AB.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: pB("thumbnail:uploadThumbnail")
              })]
            })]
          })]
        })]
      })
    }
    var OO = GB(2272),
      GO = GB(5473),
      YO = GB(5478),
      DO = GB(5524);

    function QO(BB) {
      let {
        schematicData: OB,
        setTexturePack: GB,
        initializeTexturePack: DB,
        publishFormEnabled: QB
      } = BB;
      const {
        t: oB
      } = (0, jB.H)(), [yB, JB] = (0, YB.useState)(null), [MB, PB] = (0, YB.useState)(null), [zB, pB] = (0, YB.useState)(!1), qB = (0, KB.c)(), ZB = QB && !zB, NB = OB.customTexturePackKey;

      function RB(BB) {
        var OB;
        JB(BB.metaData.id), PB(null !== (OB = BB.metaData.fromFolderName) && void 0 !== OB ? OB : null), (BB.metaData.id !== OO.t.CUSTOM || BB.metaData.fromFolderName) && GB(BB)
      }
      return (0, YB.useEffect)((() => {
        NB && (pB(!0), (0, GO.e)(NB).then((BB => {
          var OB;
          qB.current && (BB ? (JB(BB.metaData.id), PB(null !== (OB = BB.metaData.fromFolderName) && void 0 !== OB ? OB : null), DB(BB)) : console.error(`No texture pack at ${NB}`))
        })).catch((BB => {
          console.error("Error fetching texture pack: ", BB)
        })).finally((() => {
          pB(!1)
        })))
      }), [NB, DB, qB]), (0, AB.jsxs)("div", {
        className: "BloxdForm TexturePackSection",
        children: [(0, AB.jsx)("div", {
          className: "SectionTitle",
          children: oB("customTexturePack:customTexturePack")
        }), (0, AB.jsxs)("div", {
          className: "TexturePackList",
          children: [(0, AB.jsx)("div", {
            className: lB()("TexturePack", {
              Selected: null === yB && !zB,
              Disabled: !ZB
            }),
            onClick: () => {
              ZB && (JB(null), GB(null), PB(null))
            },
            children: (0, AB.jsx)("div", {
              className: "TexturePackName",
              children: "No Override"
            })
          }), Object.values(OO.t).map((BB => (0, AB.jsx)(YO.g, {
            id: BB,
            isSelected: BB === yB,
            setSelected: RB,
            disabled: !ZB
          }, BB)))]
        }), yB === OO.t.CUSTOM && (0, AB.jsx)(DO.b, {
          folderName: MB,
          onTexturePackUpdated: RB,
          disabled: !ZB,
          maxFileSizeMb: 25,
          packOwner: "customGame"
        })]
      })
    }
    var oO = GB(5563);

    function jO(BB) {
      var OB;
      let {
        gameCategory: GB,
        setGameCategory: YB,
        disabled: DB
      } = BB;
      const oB = null !== (OB = (0, pB.jb)(GB)) && void 0 !== OB ? OB : "other";
      return (0, AB.jsxs)("div", {
        className: "GameCategoryPicker",
        children: [(0, AB.jsx)(NB.d, {
          label: "worldBuilder:gameCategoryGroup",
          className: "GameCategoryGroup",
          disabled: DB,
          children: (0, AB.jsx)(RB.c, {
            options: pB.ab.map((BB => ({
              value: BB,
              label: pB._[BB]
            }))),
            value: oB,
            onChange: BB => {
              BB.value !== oB && YB(pB.U[BB.value][0])
            }
          })
        }), (0, AB.jsx)(NB.d, {
          label: "worldBuilder:gameCategory",
          className: "GameCategory",
          disabled: DB,
          children: (0, AB.jsx)("div", {
            className: "GameCategoryOptions",
            children: pB.U[oB].map((BB => (0, AB.jsx)(QB.Z, {
              active: BB === GB,
              onClick: () => {
                YB(BB)
              },
              children: (0, pB.hb)(BB)
            }, BB)))
          })
        })]
      })
    }
    var yO = GB(5441);

    function JO(BB) {
      let {
        editor: OB,
        onClose: GB
      } = BB;
      const {
        t: YB
      } = (0, jB.H)(), {
        schematicData: DB,
        updateSchematicData: QB,
        publishFormEnabled: yB,
        formEnabled: JB
      } = OB;
      return (0, AB.jsxs)(AB.Fragment, {
        children: [(0, AB.jsxs)(VB, {
          icon: "pen-to-square",
          title: YB("worldBuilder:basicsSection"),
          disabled: !JB,
          children: [(0, AB.jsx)(SB, {
            label: YB("general:name"),
            caption: YB("worldBuilder:schematicNameTagsHint"),
            children: (0, AB.jsx)(oB.b, {
              className: "SchematicPageName",
              defaultValue: DB.name,
              onValueChange: BB => QB("name", BB),
              placeholderText: YB("worldBuilder:schematicNamePlaceholder"),
              maxLength: PB.rb
            })
          }), (0, AB.jsx)(SB, {
            label: YB("general:description"),
            children: (0, AB.jsx)(oB.b, {
              className: "SchematicPageDescription",
              useTextarea: !0,
              defaultValue: DB.description,
              onValueChange: BB => QB("description", BB),
              placeholderText: YB("worldBuilder:schematicDescriptionPlaceholder"),
              maxLength: PB.qb
            })
          }), (0, AB.jsx)(jO, {
            gameCategory: DB.gameCategory,
            setGameCategory: BB => QB("gameCategory", BB),
            disabled: !yB
          }), !0 === DB.gamePublished && (0, AB.jsx)(BO, {
            schematicData: DB,
            updateSchematicData: QB,
            publishFormEnabled: yB,
            onClose: function() {
              null === GB || void 0 === GB || GB()
            }
          }), (0, AB.jsx)(yO.h, {})]
        }), (0, AB.jsx)(UB, {
          schematicData: DB,
          updateSchematicData: QB,
          publishFormEnabled: yB,
          formEnabled: JB
        }), !0 === DB.gamePublished && (0, AB.jsx)(VB, {
          icon: "palette",
          title: YB("worldBuilder:texturePackSection"),
          disabled: !JB,
          children: (0, AB.jsx)(QO, {
            schematicData: DB,
            setTexturePack: OB.setTexturePack,
            initializeTexturePack: OB.initializeTexturePack,
            publishFormEnabled: yB
          })
        })]
      })
    }

    function MO(BB) {
      let {
        editor: OB
      } = BB;
      const {
        t: GB
      } = (0, jB.H)(), {
        schematicData: YB,
        formEnabled: DB,
        hasUnsavedChanges: oB,
        publishSuspendedUntil: PB
      } = OB, zB = (0, iB.j)(), lB = !0 === YB.gamePublished ? PB : null, pB = DB && oB && null === lB;
      return (0, AB.jsxs)("footer", {
        className: "SchematicPageFooter",
        children: [null !== lB && (0, AB.jsx)("div", {
          className: "SchematicPageFooterNotice",
          children: zB(lB)
        }), DB && oB && null === lB && (0, AB.jsxs)("div", {
          className: "SchematicPageFooterStatus",
          children: [(0, AB.jsx)("span", {
            className: "SchematicPageFooterStatusDot"
          }), GB("worldBuilder:unsavedChanges")]
        }), (0, AB.jsx)(JB.g, {
          tooltipInner: (0, AB.jsx)("div", {
            className: "SaveButtonTooltip",
            children: GB(DB && !oB ? "worldBuilder:saveChangesNoneDescription" : "worldBuilder:saveChangesDescription")
          }),
          children: (0, AB.jsxs)(QB.f, {
            className: "SaveChangesButton",
            onClick: () => OB.saveSchematic(YB.gamePublished),
            disabled: !pB,
            children: [(0, AB.jsxs)("span", {
              className: DB ? "" : "SaveChangesButtonBodyHidden",
              children: [(0, AB.jsx)(MB.b, {
                name: "wrench"
              }), " ", GB("worldBuilder:saveChanges")]
            }), !DB && (0, AB.jsx)(yB.b, {})]
          })
        })]
      })
    }

    function PO(BB) {
      let {
        schematic: OB,
        onSchematicUpdate: GB,
        onClose: DB,
        inSourceWorld: oB
      } = BB;
      const {
        t: yB
      } = (0, jB.H)();

      function JB() {
        null === DB || void 0 === DB || DB()
      }
      const MB = (0, oO.c)(OB, {
        onNavigateAway: JB,
        inSourceWorld: oB
      });
      return (0, YB.useEffect)((() => {
        null === GB || void 0 === GB || GB(MB.schematicData)
      }), [MB.schematicData, GB]), (0, AB.jsxs)("div", {
        className: "SchematicPage SchematicPagePopupVariant",
        children: [(0, AB.jsxs)("div", {
          className: "SchematicPageBody",
          children: [(0, AB.jsx)(QB.c, {
            onClick: JB,
            children: yB("worldBuilder:back")
          }), (0, AB.jsx)(VB, {
            icon: "rocket-launch",
            title: yB("worldBuilder:actionsSection"),
            disabled: !MB.formEnabled,
            children: (0, AB.jsx)(fB.b, {
              editor: MB
            })
          }), (0, AB.jsx)(JO, {
            editor: MB,
            onClose: JB
          })]
        }), (0, AB.jsx)(MO, {
          editor: MB
        })]
      })
    }

    function zO(BB) {
      let {
        schematic: OB,
        onSchematicUpdate: GB,
        onClose: YB,
        inSourceWorld: QB
      } = BB;
      DB.NotificationProvider.showCustomPopup({
        body: BB => (0, AB.jsx)(PO, {
          schematic: OB,
          onSchematicUpdate: GB,
          onClose: BB,
          inSourceWorld: QB
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: YB,
        unlockPointerKey: "schematicPagePopup"
      })
    }
  },
  5437: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => lB
    });
    var YB = GB(1090),
      DB = GB.n(YB),
      QB = GB(1175),
      oB = GB(1383),
      jB = GB(1485),
      yB = GB(1405),
      JB = GB(1375),
      MB = GB(5441),
      PB = GB(5449),
      zB = GB(1282);

    function lB(BB) {
      let {
        editor: OB,
        className: GB,
        publishRefusal: YB = null
      } = BB;
      const {
        t: lB
      } = (0, QB.H)(), {
        schematicData: pB,
        formEnabled: qB,
        publishFormEnabled: ZB,
        publishSuspendedUntil: NB
      } = OB, RB = !qB || !ZB, WB = (0, PB.j)();
      return (0, zB.jsxs)("div", {
        className: DB()("PublishButtonContainer", GB),
        children: [OB.canEditSourceWorld && (0, zB.jsxs)(jB.f, {
          onClick: OB.editSourceWorld,
          disabled: RB,
          children: [(0, zB.jsx)(oB.b, {
            name: "edit"
          }), " ", lB("worldBuilder:editSourceWorld")]
        }), !pB.gamePublished && (0, zB.jsx)(yB.g, {
          tooltipInner: (0, zB.jsx)("div", {
            className: "PublishButtonTooltip",
            children: null !== YB && void 0 !== YB ? YB : lB("worldBuilder:publishAsGameDescription")
          }),
          children: (0, zB.jsxs)(jB.q, {
            onClick: () => OB.saveSchematic(!0),
            disabled: RB || null !== YB || null !== NB,
            children: [(0, zB.jsx)(oB.b, {
              name: "rocket-launch"
            }), " ", lB("worldBuilder:publishAsGame"), " ", (0, zB.jsx)(oB.b, {
              name: "info-circle"
            })]
          })
        }), !0 === pB.gamePublished && (0, zB.jsxs)(zB.Fragment, {
          children: [(0, zB.jsx)(yB.g, {
            tooltipInner: (0, zB.jsx)("div", {
              className: "PublishButtonTooltip",
              children: lB("worldBuilder:unpublishAsGameDescription")
            }),
            children: (0, zB.jsxs)(jB.Q, {
              onClick: OB.unpublishSchematic,
              disabled: RB,
              children: [(0, zB.jsx)(oB.b, {
                name: "rocket-launch"
              }), " ", lB("worldBuilder:unpublishAsGame"), " ", (0, zB.jsx)(oB.b, {
                name: "info-circle"
              })]
            })
          }), (0, zB.jsxs)(jB.f, {
            onClick: OB.playGame,
            disabled: RB,
            children: [(0, zB.jsx)(oB.b, {
              name: "joystick"
            }), " ", lB("general:playGame")]
          })]
        }), !qB && (0, zB.jsx)(JB.b, {
          loaderType: "Secondary"
        }), !pB.gamePublished && null !== NB && (0, zB.jsx)("div", {
          className: "PublishSuspendedNotice",
          children: WB(NB)
        }), OB.askingPublishingPolicy && (0, zB.jsx)(MB.d, {
          onAnswer: OB.answerPublishingPolicy
        })]
      })
    }
  },
  5473: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => DB
    });
    var YB = GB(1186);
    async function DB(BB) {
      const OB = await fetch(`${YB.clientSideServerUrls.s3Url}/${BB}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === OB.status || 403 === OB.status) return null;
      if (!OB.ok) throw new Error(`Failed to download the texture pack (${OB.status})`);
      return await OB.json()
    }
  },
  5449: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => jB,
      f: () => yB,
      j: () => JB
    });
    var YB = GB(56),
      DB = GB(1540),
      QB = GB(1175),
      oB = GB(1112);

    function jB() {
      let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      const {
        userContext: OB
      } = (0, oB.d)(), [GB, QB] = (0, YB.useState)((() => ({
        loading: BB && OB.isLoggedIn(),
        eligibility: null
      })));
      if ((0, YB.useEffect)((() => {
          if (!BB || !OB.isLoggedIn()) return void QB({
            loading: !1,
            eligibility: null
          });
          let GB = !1;
          return DB.b.getCreatorEligibility(OB).then((BB => {
            GB || QB({
              loading: !1,
              eligibility: BB
            })
          })).catch((BB => {
            console.warn("Failed to load creator eligibility", BB), GB || QB({
              loading: !1,
              eligibility: null
            })
          })), () => {
            GB = !0
          }
        }), [OB, BB]), null === GB.eligibility) return GB;
      const jB = Date.now(),
        {
          thumbnailUploadWait: yB,
          publishSuspendedUntil: JB
        } = GB.eligibility;
      return {
        loading: GB.loading,
        eligibility: {
          thumbnailUploadWait: null !== yB && yB.until > jB ? yB : null,
          publishSuspendedUntil: null !== JB && JB > jB ? JB : null
        }
      }
    }

    function yB() {
      const {
        t: BB,
        selectedLanguage: OB
      } = (0, QB.H)();
      return (GB, YB) => BB(GB, {
        date: (0, QB.f)(OB.code, GB, YB, {
          dateStyle: "medium",
          timeStyle: "short"
        })
      })
    }

    function JB() {
      const {
        t: BB,
        selectedLanguage: OB
      } = (0, QB.H)();
      return GB => {
        const YB = "worldBuilder:publishSuspended";
        return BB(YB, {
          date: (0, QB.f)(OB.code, YB, GB, {
            dateStyle: "medium",
            timeStyle: "short",
            timeZone: "UTC"
          })
        })
      }
    }
  },
  5563: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => WB
    });
    var YB = GB(56),
      DB = GB(1360),
      QB = GB(1049),
      oB = GB(162),
      jB = GB(2417),
      yB = GB(1591),
      JB = GB(16),
      MB = GB(2023),
      PB = GB(1540),
      zB = GB(5011),
      lB = GB(1400),
      pB = GB(1964),
      qB = GB(1112),
      ZB = GB(1560),
      NB = GB(5449);

    function RB(BB, OB) {
      return {
        schematicId: BB.schematicId,
        name: BB.name,
        description: BB.description,
        gamePublished: OB,
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

    function WB(BB) {
      var OB, GB;
      let {
        onNavigateAway: WB,
        inSourceWorld: AB = !1,
        canManage: VB = !0
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const {
        userContext: SB
      } = (0, qB.d)(), nB = (0, ZB.useNavigatePreserveSearch)(), [UB, fB] = (0, YB.useState)({
        ...BB
      }), [kB, dB] = (0, YB.useState)("Enter"), [KB, uB] = (0, YB.useState)(void 0), [mB, IB] = (0, YB.useState)(!1), FB = (0, YB.useRef)(RB(BB, BB.gamePublished)), iB = (0, YB.useRef)(void 0), LB = "Enter" === kB, gB = null !== (OB = null === (GB = (0, NB.c)(VB).eligibility) || void 0 === GB ? void 0 : GB.publishSuspendedUntil) && void 0 !== OB ? OB : null, rB = SB.playerHasRank("developer") || SB.playerHasRank("admin") || "Enter" === kB && !1 !== UB.schematicContainsSpawnBlock, XB = void 0 !== KB && KB !== iB.current || JSON.stringify(RB(UB, UB.gamePublished)) !== JSON.stringify(FB.current);

      function wB(BB, OB) {
        fB((GB => ({
          ...GB,
          [BB]: OB
        })))
      }
      const EB = (0, YB.useCallback)((BB => {
        iB.current = BB, uB(BB)
      }), []);

      function cB() {
        return (0, yB.p)((0, QB.v)(UB.schematicId), UB)
      }

      function hB(BB, OB) {
        dB("Loading");
        const GB = RB(UB, BB),
          YB = KB !== iB.current ? KB : void 0;
        PB.b.updateSchematic(SB, GB, YB, OB).then((OB => {
          let {
            customTexturePackKey: YB
          } = OB;
          dB("Success"), wB("customTexturePackKey", YB), FB.current = GB, iB.current = void 0, uB(void 0), !BB || UB.gamePublished || WB || pB.d.showGamePublished(UB.name, cB()), setTimeout((() => {
            wB("gamePublished", BB), dB("Enter")
          }), 1e3)
        })).catch((BB => {
          if (BB instanceof oB.d && BB.errorMessageForUser === jB.x && void 0 === OB) return dB("Enter"), void IB(!0);
          var GB;
          (console.error("Failed to save schematic:", BB), dB("Error"), BB instanceof oB.d && BB.errorMessageForUser) && lB.NotificationProvider.showAlertPopup({
            title: "worldBuilder:changesNotSaved",
            subtitle: BB.errorMessageForUser,
            textOpts: {
              subtitle: null !== (GB = BB.errorMessageTranslationParams) && void 0 !== GB ? GB : void 0
            },
            confirmText: "general:ok"
          });
          setTimeout((() => {
            dB("Enter")
          }), 1e3)
        }))
      }
      return {
        schematicData: UB,
        updateSchematicData: wB,
        setTexturePack: uB,
        initializeTexturePack: EB,
        updateState: kB,
        formEnabled: LB,
        publishFormEnabled: rB,
        hasUnsavedChanges: XB,
        publishSuspendedUntil: gB,
        canEditSourceWorld: !AB,
        saveSchematic: hB,
        unpublishSchematic: function() {
          lB.NotificationProvider.showPromptPopup({
            icon: "rocket-launch",
            title: "worldBuilder:unpublishAsGameConfirmTitle",
            subtitle: "worldBuilder:unpublishAsGameConfirmSubtitle",
            confirmText: "worldBuilder:unpublishAsGame",
            cancelText: "general:cancel",
            destructive: !0,
            unlockPointerKey: "unpublishGamePrompt"
          }).getResult().then((BB => {
            !0 === BB && hB(!1)
          }))
        },
        askingPublishingPolicy: mB,
        answerPublishingPolicy: function(BB) {
          IB(!1), BB && hB(!0, jB.B)
        },
        editSourceWorld: function() {
          dB("Loading"), zB.c.getSourceWorld(UB.schematicId).then((BB => {
            MB.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, JB.m)("other"), nB((0, DB.c)("classic", BB)), null === WB || void 0 === WB || WB()
          })).catch((BB => {
            console.error("Failed to get source world:", BB), dB("Error"), setTimeout((() => {
              dB("Enter")
            }), 1e3)
          }))
        },
        playGame: function() {
          MB.gameBridge.send("leaveGame", {
            reloadPath: "/"
          }), nB(cB()), null === WB || void 0 === WB || WB()
        }
      }
    }
  },
  5426: () => {}
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);