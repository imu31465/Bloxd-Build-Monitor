export const id = 120;
export const ids = [120];
export const modules = {
  5714: (dd, Od, md) => {
    md.d(Od, {
      d: () => td,
      g: () => Qd,
      k: () => od
    });
    md(5716);
    var Wd = md(1238),
      Fd = md(1155),
      Rd = md.n(Fd),
      Xd = md(1471),
      Kd = (md(66), md(5003)),
      hd = md(1443),
      vd = md(1341);

    function Qd(dd) {
      let {
        children: Od,
        label: md,
        className: Fd,
        circleInfoText: Kd,
        disabled: Qd,
        onLabelClick: td
      } = dd;
      const {
        t: od
      } = (0, Wd.G)(), Nd = (0, vd.jsxs)("div", {
        className: Rd()("Label", {
          ClickableLabel: void 0 !== td
        }),
        onClick: td,
        children: [od(md), Kd && (0, vd.jsx)(hd.c, {
          name: "circle-info"
        })]
      });
      return (0, vd.jsxs)("div", {
        className: Rd()("LabeledInput", {
          [Fd]: Fd,
          DisabledLabelInput: Qd
        }),
        children: [Kd && (0, vd.jsx)(Xd.g, {
          tooltipInner: (0, vd.jsx)("div", {
            className: "LabeledInputTooltip",
            children: od(Kd)
          }),
          children: Nd
        }), !Kd && Nd, Od]
      })
    }

    function td(dd) {
      let {
        checked: Od,
        setChecked: md,
        disabled: Wd = !1
      } = dd;
      return (0, vd.jsx)("div", {
        className: "OtherInput ClickableOtherInput",
        "data-pad-focusable": !0,
        "aria-disabled": Wd || void 0,
        onClick: dd => {
          Wd || md(!Od)
        },
        children: (0, vd.jsx)(Kd.d, {
          checked: Od,
          onChange: dd => {
            md(dd.target.checked)
          },
          disabled: Wd
        })
      })
    }

    function od(dd) {
      let {
        checked: Od,
        setChecked: md,
        disabled: Wd
      } = dd;
      return (0, vd.jsx)("div", {
        className: Rd()("SwitchContainer", {
          SwitchContainerDisabled: Wd
        }),
        onClick: () => {
          Wd || md(!Od)
        },
        children: (0, vd.jsx)(Kd.d, {
          className: "SwitchCheckbox",
          checked: Od,
          onChange: dd => {
            md(dd.target.checked)
          },
          disabled: !!Wd
        })
      })
    }
  },
  5719: (dd, Od, md) => {
    md.d(Od, {
      b: () => vd
    });
    var Wd = md(1155),
      Fd = md.n(Wd),
      Rd = md(5294),
      Xd = md(1238),
      Kd = md(1341);
    const hd = [...Rd.l, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function vd(dd) {
      const {
        disabled: Od,
        hideWrapper: md
      } = dd, {
        t: Wd
      } = (0, Xd.G)(), vd = dd.advancedMode ? hd.map((Od => [Od, dd.callbacks[Od]])) : Rd.l.map((Od => [Od, dd.callbacks[Od]])), td = (0, Kd.jsx)("div", {
        className: Fd()("PluginsGrid", {
          SectionBody: !md
        }),
        children: vd.map((dd => {
          let [md, Wd] = dd;
          return (0, Kd.jsx)(Qd, {
            plugin: md,
            callbacks: Wd,
            disabled: Od
          }, md)
        }))
      });
      return md ? td : (0, Kd.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, Kd.jsx)("div", {
          className: "SectionTitle",
          children: Wd("worldBuilder:pluginsSection")
        }), td]
      })
    }

    function Qd(dd) {
      let {
        plugin: Od,
        callbacks: {
          isEnabled: md,
          rY: Wd
        },
        disabled: Rd
      } = dd;
      const {
        t: hd
      } = (0, Xd.G)(), vd = md();
      return (0, Kd.jsxs)("div", {
        className: Fd()("PluginCard", {
          PluginCardEnabled: vd,
          PluginCardDisabledForm: Rd
        }),
        "data-pad-focusable": !0,
        "aria-disabled": Rd || void 0,
        onClick: () => {
          Rd || Wd(!vd)
        },
        children: [(0, Kd.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, Kd.jsx)("img", {
            src: `/textures/games/classic/customGames/${Od}.png`,
            alt: Od
          })
        }), (0, Kd.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, Kd.jsx)("div", {
            className: "PluginCardTitle",
            children: hd(td[Od])
          }), (0, Kd.jsx)("div", {
            className: "PluginCardDescription",
            children: hd(od[Od])
          })]
        }), (0, Kd.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: hd(vd ? "general:on" : "general:off")
        })]
      })
    }
    const td = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      od = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  5853: (dd, Od, md) => {
    md.d(Od, {
      c: () => vd
    });
    var Wd = md(1155),
      Fd = md.n(Wd),
      Rd = md(1238),
      Xd = md(1443),
      Kd = md(1341);

    function hd(dd) {
      let {
        textKey: Od,
        allowed: md
      } = dd;
      const {
        t: Wd
      } = (0, Rd.G)();
      return (0, Kd.jsxs)("li", {
        className: Fd()("PolicyListItem", md ? "Allowed" : "NotAllowed"),
        children: [(0, Kd.jsx)(Xd.c, {
          name: md ? "check" : "x"
        }), (0, Kd.jsx)("span", {
          children: Wd(Od)
        })]
      })
    }

    function vd(dd) {
      let {
        allowed: Od,
        notAllowed: md
      } = dd;
      return (0, Kd.jsxs)("ul", {
        className: "PolicyList",
        children: [Od.map((dd => (0, Kd.jsx)(hd, {
          textKey: dd,
          allowed: !0
        }, dd))), md.map((dd => (0, Kd.jsx)(hd, {
          textKey: dd,
          allowed: !1
        }, dd)))]
      })
    }
  },
  5849: (dd, Od, md) => {
    md.d(Od, {
      e: () => Yd,
      h: () => gd
    });
    var Wd = md(66),
      Fd = md(1155),
      Rd = md.n(Fd),
      Xd = md(86),
      Kd = md(3e3),
      hd = md(1238),
      vd = md(5714),
      Qd = md(1443),
      td = md(1466),
      od = md(1572),
      Nd = md(5241),
      qd = md(5853),
      Hd = md(1341);

    function yd(dd) {
      return (0, Xd.createPortal)((0, Hd.jsx)(td.e, {
        ...dd
      }), document.body)
    }
    const bd = Kd.u.map((dd => `worldBuilder:publishingPolicy_${dd}`)),
      Td = Object.keys(Kd.y).map((dd => `worldBuilder:publishingPolicy_${dd}`));

    function pd(dd) {
      let {
        onScrolledToEnd: Od
      } = dd;
      const md = (0, Wd.useRef)(null),
        {
          after: Fd
        } = (0, Nd.b)(md, "y");
      return (0, Wd.useEffect)((() => {
        Fd || null === Od || void 0 === Od || Od()
      }), [Fd, Od]), (0, Hd.jsx)("div", {
        ref: md,
        className: Rd()("PublishingPolicyRows", {
          PublishingPolicyRowsMoreBelow: Fd
        }),
        tabIndex: 0,
        "data-pad-focusable": !0,
        children: (0, Hd.jsx)(qd.c, {
          allowed: bd,
          notAllowed: Td
        })
      })
    }

    function Yd(dd) {
      let {
        onAnswer: Od
      } = dd;
      const [md, Fd] = (0, Wd.useState)(!1), [Rd, Xd] = (0, Wd.useState)(!1), Kd = (0, Wd.useCallback)((() => {
        Xd(!0)
      }), []);
      return (0, Hd.jsx)(yd, {
        close: () => {
          Od(!1)
        },
        disableExitButton: !0,
        body: (0, Hd.jsxs)(td.j, {
          className: "PublishingPolicyPopup",
          title: "worldBuilder:publishingPolicy",
          padStartsOn: "content",
          confirm: {
            text: "worldBuilder:publishAsGame",
            disabled: !md,
            onClick: () => {
              Od(!0)
            }
          },
          cancel: {
            text: "general:cancel",
            onClick: () => {
              Od(!1)
            }
          },
          children: [(0, Hd.jsx)(pd, {
            onScrolledToEnd: Kd
          }), (0, Hd.jsx)(vd.g, {
            className: "PublishingPolicyAgree",
            label: Rd ? "worldBuilder:agreeToPublishingPolicy" : "worldBuilder:scrollToAgreeToPublishingPolicy",
            disabled: !Rd,
            onLabelClick: () => {
              Fd(!md)
            },
            children: (0, Hd.jsx)(vd.d, {
              checked: md,
              setChecked: Fd,
              disabled: !Rd
            })
          })]
        })
      })
    }

    function gd() {
      const {
        t: dd
      } = (0, hd.G)(), [Od, md] = (0, Wd.useState)(!1);
      return (0, Hd.jsxs)(Hd.Fragment, {
        children: [(0, Hd.jsxs)(od.S, {
          className: "PublishingPolicyLink",
          onClick: () => {
            md(!0)
          },
          children: [(0, Hd.jsx)(Qd.c, {
            name: "shield-halved"
          }), " ", dd("worldBuilder:publishingPolicy")]
        }), Od && (0, Hd.jsx)(yd, {
          close: () => {
            md(!1)
          },
          body: (0, Hd.jsx)(td.j, {
            className: "PublishingPolicyPopup",
            title: "worldBuilder:publishingPolicy",
            children: (0, Hd.jsx)(pd, {})
          })
        })]
      })
    }
  },
  5706: (dd, Od, md) => {
    md.d(Od, {
      h: () => qO,
      e: () => NO,
      f: () => oO,
      l: () => HO
    });
    var Wd = md(66),
      Fd = md(1462),
      Rd = md(1572),
      Xd = md(1808),
      Kd = md(1238),
      hd = md(1436),
      vd = md(1471),
      Qd = md(1443),
      td = md(1286),
      od = md(1155),
      Nd = md.n(od),
      qd = md(387),
      Hd = md(5294),
      yd = md(5725),
      bd = md(1300),
      Td = md(5714),
      pd = md(4327),
      Yd = md(5719),
      gd = md(1341);

    function wd(dd) {
      let {
        icon: Od,
        title: md,
        disabled: Wd,
        children: Fd
      } = dd;
      return (0, gd.jsxs)("div", {
        className: Nd()("ManageCard", {
          ManageCardDisabled: Wd
        }),
        children: [(0, gd.jsxs)("div", {
          className: "ManageCardHead",
          children: [(0, gd.jsx)("div", {
            className: "ManageCardIcon",
            children: (0, gd.jsx)(Qd.c, {
              name: Od
            })
          }), (0, gd.jsx)("div", {
            children: (0, gd.jsx)("h2", {
              className: "ManageCardTitle",
              children: md
            })
          })]
        }), (0, gd.jsxs)("div", {
          className: "ManageCardBody",
          children: [Fd, Wd && (0, gd.jsx)("div", {
            className: "ManageCardDisabledOverlay"
          })]
        })]
      })
    }

    function Ed(dd) {
      let {
        label: Od,
        caption: md,
        children: Wd
      } = dd;
      return (0, gd.jsxs)("div", {
        className: "ManageStackedField",
        children: [(0, gd.jsx)("div", {
          className: "ManageStackedFieldLabel",
          children: Od
        }), Wd, md && (0, gd.jsx)("div", {
          className: "ManageStackedFieldCaption",
          children: md
        })]
      })
    }

    function Jd(dd) {
      let {
        label: Od,
        caption: md,
        disabled: Wd,
        children: Fd
      } = dd;
      return (0, gd.jsxs)("div", {
        className: Nd()("ManageField", {
          ManageFieldDisabled: Wd
        }),
        children: [(0, gd.jsxs)("div", {
          className: "ManageFieldText",
          children: [(0, gd.jsx)("div", {
            className: "ManageFieldLabel",
            children: Od
          }), (0, gd.jsx)("div", {
            className: "ManageFieldCaption",
            children: md
          })]
        }), (0, gd.jsx)("div", {
          className: "ManageFieldControl",
          children: Fd
        })]
      })
    }

    function Ud(dd) {
      var Od, md;
      let {
        schematicData: Wd,
        updateSchematicData: Fd,
        publishFormEnabled: Rd,
        formEnabled: Xd
      } = dd;
      const {
        t: hd
      } = (0, Kd.G)(), vd = !Rd, Qd = {
        tpRequests: {
          isEnabled: () => !Wd.disableTpRequests,
          rY: dd => Fd("disableTpRequests", !dd)
        },
        spawnProtection: {
          isEnabled: () => !Wd.disableSpawnProtection,
          rY: dd => Fd("disableSpawnProtection", !dd)
        },
        spawnReset: {
          isEnabled: () => !!Wd.enableSpawnReset,
          rY: dd => Fd("enableSpawnReset", dd)
        },
        smpMarketplace: {
          isEnabled: () => !!Wd.enableSmpMarketplace,
          rY: dd => Fd("enableSmpMarketplace", dd)
        },
        survivalGuns: {
          isEnabled: () => !!Wd.enableSurvivalGuns,
          rY: dd => Fd("enableSurvivalGuns", dd)
        },
        fallDamage: {
          isEnabled: () => !Wd.disableFallDamage,
          rY: dd => Fd("disableFallDamage", !dd)
        },
        dayNight: {
          isEnabled: () => !!Wd.enableDayNight,
          rY: dd => Fd("enableDayNight", dd)
        }
      };
      return (0, gd.jsxs)(gd.Fragment, {
        children: [!1 === Wd.schematicContainsSpawnBlock && (0, gd.jsx)("div", {
          className: "ManageWarningBanner",
          children: hd("worldBuilder:mustContainSpawnBlock")
        }), (0, gd.jsxs)("div", {
          className: "ManageSettingsGrid",
          children: [(0, gd.jsxs)(wd, {
            icon: "globe",
            title: hd("worldBuilder:worldRulesSection"),
            disabled: !Xd,
            children: [(0, gd.jsx)(Jd, {
              label: hd("classic:defaultGamemode"),
              caption: hd("classic:defaultGamemodeDescription"),
              disabled: vd,
              children: (0, gd.jsx)(pd.e, {
                controlClassName: "ManageDropdown",
                options: Hd.F.map((dd => ({
                  value: dd,
                  label: qd.p[dd]
                }))),
                value: Wd.defaultGamemode,
                onChange: dd => Fd("defaultGamemode", dd.value)
              })
            }), (0, gd.jsx)(Jd, {
              label: hd("classic:voidDeathHeight"),
              caption: hd("classic:voidDeathHeightDescription"),
              disabled: vd,
              children: (0, gd.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, gd.jsx)("input", {
                  type: "number",
                  max: bd.D,
                  value: null !== (Od = Wd.voidDeathHeight) && void 0 !== Od ? Od : "",
                  onChange: dd => {
                    const Od = parseInt(dd.target.value);
                    Fd("voidDeathHeight", Od)
                  }
                }), (0, gd.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: hd("worldBuilder:blocksUnit")
                })]
              })
            }), (0, gd.jsx)(Jd, {
              label: hd("classic:worldBorder"),
              caption: hd("classic:worldBorderDescription"),
              disabled: vd,
              children: (0, gd.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, gd.jsx)("input", {
                  type: "number",
                  min: bd.J,
                  max: bd.E,
                  placeholder: hd("worldBuilder:noWorldBorderLimit"),
                  value: null !== (md = Wd.worldBorder) && void 0 !== md ? md : "",
                  onChange: dd => {
                    const Od = parseInt(dd.target.value);
                    Fd("worldBorder", isNaN(Od) ? null : Od)
                  }
                }), (0, gd.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: hd("worldBuilder:blocksUnit")
                })]
              })
            }), (0, gd.jsx)(Jd, {
              label: hd("classic:disableMobs"),
              caption: hd("classic:disableMobsDescription"),
              disabled: vd,
              children: (0, gd.jsx)(Td.k, {
                checked: Wd.disableMobs,
                setChecked: dd => Fd("disableMobs", dd),
                disabled: vd
              })
            })]
          }), (0, gd.jsxs)(wd, {
            icon: "user-group",
            title: hd("worldBuilder:playerAndLobbySection"),
            disabled: !Xd,
            children: [(0, gd.jsx)(Jd, {
              label: hd("classic:disableKeepInventory"),
              caption: hd("classic:disableKeepInventoryDescription"),
              disabled: vd,
              children: (0, gd.jsx)(Td.k, {
                checked: Wd.disableKeepInventory,
                setChecked: dd => Fd("disableKeepInventory", dd),
                disabled: vd
              })
            }), (0, gd.jsx)(Jd, {
              label: hd("classic:persistInventory"),
              caption: hd("classic:persistInventoryDescription"),
              disabled: vd,
              children: (0, gd.jsx)(pd.e, {
                controlClassName: "ManageDropdown",
                options: Hd.p.map((dd => ({
                  value: dd,
                  label: qd.g[dd]
                }))),
                value: Wd.persistInventory,
                onChange: dd => Fd("persistInventory", dd.value)
              })
            }), (0, gd.jsx)(Jd, {
              label: hd("classic:persistWorld"),
              caption: hd("classic:persistWorldDescription"),
              disabled: vd,
              children: (0, gd.jsx)(Td.k, {
                checked: Wd.persistWorld,
                setChecked: dd => Fd("persistWorld", dd),
                disabled: vd
              })
            }), yd.c && Wd.persistWorld && (0, gd.jsx)(Jd, {
              label: hd("classic:fluidFlow"),
              caption: hd("classic:fluidFlowDescription"),
              disabled: vd,
              children: (0, gd.jsx)(Td.k, {
                checked: Wd.enableFluidFlow,
                setChecked: dd => Fd("enableFluidFlow", dd),
                disabled: vd
              })
            }), (0, gd.jsx)(Jd, {
              label: hd("classic:disableLobbySpawn"),
              caption: hd("classic:disableLobbySpawnDescription"),
              disabled: vd,
              children: (0, gd.jsx)(Td.k, {
                checked: Wd.disableLobbySpawn,
                setChecked: dd => Fd("disableLobbySpawn", dd),
                disabled: vd
              })
            }), (0, gd.jsx)(Jd, {
              label: hd("classic:hideLobbyCode"),
              caption: hd("classic:hideLobbyCodeDescription"),
              disabled: vd,
              children: (0, gd.jsx)(Td.k, {
                checked: Wd.hideLobbyCode,
                setChecked: dd => Fd("hideLobbyCode", dd),
                disabled: vd
              })
            })]
          })]
        }), (0, gd.jsx)(wd, {
          icon: "layer-group",
          title: hd("worldBuilder:pluginsSection"),
          disabled: !Xd,
          children: (0, gd.jsx)(Yd.b, {
            callbacks: Qd,
            disabled: vd,
            advancedMode: !0,
            hideWrapper: !0
          })
        })]
      })
    }
    var xd = md(5844),
      Bd = md(1705),
      Sd = md(1627),
      sd = md(4717),
      ud = md(1186),
      Vd = md(5691),
      Ad = md(5861),
      rd = md(1580),
      Gd = md(5855),
      nd = md(5853);
    const Ld = 50,
      Pd = .3;
    async function zd(dd) {
      const Od = await
      function(dd) {
        return new Promise(((Od, md) => {
          const Wd = new FileReader;
          Wd.onload = () => Od(Wd.result), Wd.onerror = md, Wd.readAsDataURL(dd)
        }))
      }(dd), md = await
      function(dd) {
        return new Promise(((Od, md) => {
          const Wd = new Image;
          Wd.onload = () => Od(Wd), Wd.onerror = () => md(new Error("Failed to load image")), Wd.src = dd
        }))
      }(Od);
      if (md.naturalHeight > md.naturalWidth) throw new cd;
      const Wd = 1024 * Ld,
        {
          dataUrl: Fd,
          finalQuality: Rd
        } = function(dd, Od) {
          const md = document.createElement("canvas");
          md.width = dd.naturalWidth, md.height = dd.naturalHeight, md.getContext("2d").drawImage(dd, 0, 0);
          let Wd = .92,
            Fd = md.toDataURL("image/jpeg", Wd);
          for (; .75 * Fd.length > Od && Wd > .05;) Wd -= .05, Fd = md.toDataURL("image/jpeg", Wd);
          return {
            dataUrl: Fd,
            finalQuality: Wd
          }
        }(md, Wd);
      if (Math.ceil(.75 * Fd.length) > Wd) throw new jd;
      return {
        base64Jpg: Fd,
        heavilyCompressed: Rd < Pd
      }
    }
    class cd extends Error {}
    class jd extends Error {}

    function Dd(dd) {
      var Od;
      let {
        schematicId: md,
        hasReadUploadPolicy: Fd,
        onPolicyValidationError: hd,
        onThumbnailReady: vd
      } = dd;
      const {
        t: od
      } = (0, Kd.G)(), [qd, Hd] = (0, Wd.useState)(null), [yd, bd] = (0, Wd.useState)(""), [Td, pd] = (0, Wd.useState)(""), [Yd, wd] = (0, Wd.useState)(!0), [Ed, Jd] = (0, Wd.useState)(!1), Ud = (0, Wd.useRef)(!1), [xd, Bd] = (0, Wd.useState)(null), [Sd, sd] = (0, Wd.useState)(!1), [ud, Vd] = (0, Wd.useState)(!1), rd = (0, Wd.useRef)(0), {
        getRootProps: Gd,
        getInputProps: nd,
        isDragActive: Ld
      } = (0, Ad.b)({
        accept: {
          "image/*": [".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp"]
        },
        multiple: !1,
        onDrop: async dd => {
          if (0 === dd.length) return;
          const Od = dd[0],
            md = ++rd.current;
          Bd(null), sd(!1), Hd(null), bd(Od.name);
          try {
            const dd = await zd(Od);
            if (md !== rd.current) return;
            Hd(dd), sd(dd.heavilyCompressed)
          } catch (Wd) {
            if (md !== rd.current) return;
            Bd(od(Wd instanceof cd ? "thumbnail:portraitImagesNotAllowed" : Wd instanceof jd ? "thumbnail:couldNotCompressImage" : "thumbnail:failedToUploadImage"))
          }
        },
        useFsAccessApi: !1
      }), Pd = yd.length <= 30 ? yd : `${yd.slice(0,27)}...`, Dd = null !== (Od = null === qd || void 0 === qd ? void 0 : qd.base64Jpg) && void 0 !== Od ? Od : null, ed = Td.trim(), Id = ed.length >= td.p && ed.length <= td.l, ld = ud && !qd && !xd, Cd = ud && !Id;
      return (0, gd.jsxs)("div", {
        className: "ThumbnailUploadContainer",
        children: [(0, gd.jsxs)("div", {
          ...Gd({
            className: Nd()("ThumbnailUploadDropzone", {
              ActiveDrag: Ld,
              ValidationError: ld
            })
          }),
          children: [(0, gd.jsx)("input", {
            ...nd()
          }), !Ld && Dd ? (0, gd.jsxs)(gd.Fragment, {
            children: [(0, gd.jsxs)("div", {
              className: "ThumbnailAspectPreviews",
              children: [(0, gd.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, gd.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "1:1"
                }), (0, gd.jsx)("div", {
                  className: "ThumbnailAspectFrame Square",
                  children: (0, gd.jsx)("img", {
                    src: Dd,
                    alt: "1:1 preview"
                  })
                })]
              }), (0, gd.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, gd.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "16:9"
                }), (0, gd.jsx)("div", {
                  className: "ThumbnailAspectFrame Wide",
                  children: (0, gd.jsx)("img", {
                    src: Dd,
                    alt: "16:9 preview"
                  })
                })]
              })]
            }), (0, gd.jsxs)("div", {
              children: [(0, gd.jsx)("div", {
                className: "ThumbnailUploadInstructions Active",
                children: Pd
              }), (0, gd.jsx)("div", {
                className: "ThumbnailUploadInstructions Preview",
                children: od("thumbnail:preview")
              })]
            })]
          }) : (0, gd.jsxs)(gd.Fragment, {
            children: [(0, gd.jsx)("div", {
              className: "ThumbnailUploadIcon",
              children: (0, gd.jsx)(Qd.c, {
                name: "image"
              })
            }), (0, gd.jsx)("div", {
              className: "ThumbnailUploadInstructions",
              children: od("thumbnail:dragImageHere")
            })]
          })]
        }), ld && (0, gd.jsx)("div", {
          className: "ThumbnailUploadError",
          children: od("thumbnail:imageRequired")
        }), (0, gd.jsx)(Xd.c, {
          className: Nd()("ThumbnailUploadNameInput", {
            ValidationError: Cd
          }),
          placeholderText: od("thumbnail:thumbnailName"),
          defaultValue: Td,
          onValueChange: dd => {
            pd(dd)
          },
          maxLength: td.l
        }), Cd && (0, gd.jsx)("div", {
          className: "ThumbnailUploadError",
          children: od("thumbnail:nameRequired", {
            min: td.p,
            max: td.l
          })
        }), (0, gd.jsxs)("label", {
          className: "ThumbnailUploadCheckbox",
          children: [(0, gd.jsx)("input", {
            type: "checkbox",
            checked: Yd,
            onChange: dd => {
              wd(dd.target.checked)
            }
          }), od("thumbnail:setAsThumbnailOnceApproved")]
        }), Sd && (0, gd.jsx)("div", {
          className: "ThumbnailUploadWarning",
          children: od("thumbnail:heavyCompressionWarning")
        }), xd && (0, gd.jsx)("div", {
          className: "ThumbnailUploadError",
          children: xd
        }), (0, gd.jsx)(Rd.m, {
          disabled: Ed,
          className: "ThumbnailUploadButton",
          onClick: async () => {
            if (Vd(!0), !Ud.current && qd && Id && Fd) {
              Ud.current = !0, Jd(!0), Bd(null);
              try {
                await vd(qd.base64Jpg, ed, Yd ? md : null)
              } catch (dd) {
                Bd(dd.errorMessageForUser ? od(dd.errorMessageForUser, dd.errorMessageTranslationParams) : od("thumbnail:failedToUploadImage"))
              } finally {
                Ud.current = !1, Jd(!1)
              }
            } else Fd || hd()
          },
          children: od(Ed ? "thumbnail:processing" : "thumbnail:uploadThumbnail")
        })]
      })
    }
    const ed = 2e3;

    function Id(dd) {
      let {
        schematicId: Od,
        ownedThumbnailCount: md,
        onClose: Fd,
        onThumbnailReady: Rd
      } = dd;
      const {
        t: Xd
      } = (0, Kd.G)(), {
        userContext: vd
      } = (0, ud.d)(), [od, qd] = (0, Wd.useState)(!1), [Hd, yd] = (0, Wd.useState)(!1), [bd, Td] = (0, Wd.useState)(!1), pd = (0, Wd.useRef)(), {
        loading: Yd,
        eligibility: wd
      } = (0, Gd.b)(), Ed = (0, Gd.f)();
      (0, Wd.useEffect)((() => () => {
        clearTimeout(pd.current)
      }), []);
      const Jd = [];
      vd.isLoggedIn() || Jd.push(Xd("thumbnail:mustBeLoggedInToUpload")), md >= td.S && Jd.push(Xd("thumbnail:thumbnailLimitReachedPleaseDelete", {
        max: td.S
      }));
      const Ud = null === wd || void 0 === wd ? void 0 : wd.thumbnailUploadWait;
      if (Ud && Jd.push(Ed("accountAge" === Ud.reason ? "thumbnail:accountTooNewUntil" : "thumbnail:uploadCooldownUntil", Ud.until)), !od && Jd.length > 0) return (0, gd.jsxs)("div", {
        className: "ThumbnailUploaderInner",
        children: [(0, gd.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: Xd("thumbnail:cannotUploadThumbnail")
        }), Jd.map((dd => (0, gd.jsxs)("div", {
          className: "CannotUploadThumbnailItem",
          children: [(0, gd.jsx)(Qd.c, {
            name: "triangle-exclamation"
          }), (0, gd.jsx)("span", {
            children: dd
          })]
        }, dd)))]
      });
      if (Yd) return (0, gd.jsx)("div", {
        className: "ThumbnailUploaderInner",
        children: (0, gd.jsx)(hd.c, {})
      });
      return (0, gd.jsxs)("div", {
        className: Nd()("ThumbnailUploaderInner", {
          ThumbnailUploaderSuccess: od
        }),
        children: [od && (0, gd.jsxs)("div", {
          className: "ThumbnailUploadSuccessOverlay",
          children: [(0, gd.jsxs)("div", {
            className: "ThumbnailUploadSuccessIcon FullyFancyText AnimFadeInScaleUp",
            children: [(0, gd.jsx)(Qd.c, {
              name: "check"
            }), (0, gd.jsx)(rd.e, {})]
          }), (0, gd.jsx)("div", {
            className: "ThumbnailUploadSuccessText AnimFadeInScaleUp",
            children: Xd("thumbnail:thumbnailUploaded")
          })]
        }), (0, gd.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: Xd("thumbnail:uploadThumbnail")
        }), (0, gd.jsxs)("div", {
          className: "ThumbnailUploaderBody",
          children: [(0, gd.jsxs)("div", {
            className: "ThumbnailUploaderLeft",
            children: [(0, gd.jsx)("h3", {
              className: "SchematicPopupSubtitle",
              children: Xd("thumbnail:chooseImage", {
                maxSizeKb: Ld
              })
            }), (0, gd.jsx)(Dd, {
              schematicId: Od,
              hasReadUploadPolicy: Hd,
              onPolicyValidationError: () => {
                Td(!0)
              },
              onThumbnailReady: async (dd, Od, md) => {
                await Rd(dd, Od, md), qd(!0), pd.current = setTimeout(Fd, ed)
              }
            })]
          }), (0, gd.jsxs)("div", {
            className: "ThumbnailUploadPolicy",
            children: [(0, gd.jsx)("h3", {
              className: "ThumbnailUploadPolicyTitle",
              children: Xd("thumbnail:uploadPolicy")
            }), (0, gd.jsx)(nd.c, {
              allowed: ["thumbnail:policyFollowGuidelines", "thumbnail:policyInGameAssets", "thumbnail:policyLimitText"],
              notAllowed: ["thumbnail:policyCopyrightContent", "thumbnail:policyOutOfGameAssets", "thumbnail:policyBloxdTags", "thumbnail:policyMustReflectGame"]
            }), (0, gd.jsxs)("label", {
              className: Nd()("ThumbnailUploadCheckbox Policy", {
                ValidationError: bd && !Hd
              }),
              children: [(0, gd.jsx)("input", {
                type: "checkbox",
                checked: Hd,
                onChange: dd => {
                  yd(dd.target.checked)
                }
              }), Xd("thumbnail:agreeToUploadPolicy")]
            }), bd && !Hd && (0, gd.jsx)("div", {
              className: "ThumbnailPolicyError",
              children: Xd("thumbnail:policyRequired")
            })]
          })]
        })]
      })
    }

    function ld(dd) {
      let {
        imageUrl: Od,
        thumbnailName: md,
        onClose: Wd
      } = dd;
      const {
        t: Fd
      } = (0, Kd.G)();
      return (0, gd.jsxs)("div", {
        className: "ThumbnailDeleteConfirm",
        children: [(0, gd.jsx)("div", {
          className: "ThumbnailDeleteConfirmTitle",
          children: Fd("thumbnail:deleteThumbnail")
        }), (0, gd.jsxs)("div", {
          className: "ThumbnailDeleteConfirmImageContainer",
          children: [null !== Od && (0, gd.jsx)("img", {
            className: "ThumbnailDeleteConfirmImage",
            src: Od,
            alt: md
          }), (0, gd.jsx)("div", {
            className: "ThumbnailGridItemLabel",
            children: md
          })]
        }), (0, gd.jsx)("div", {
          className: "ThumbnailDeleteConfirmSubtitle",
          children: Fd("thumbnail:deleteThumbnailConfirmation")
        }), (0, gd.jsxs)("div", {
          className: "ThumbnailDeleteConfirmButtons",
          children: [(0, gd.jsxs)(Rd.G, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => Wd(!0),
            children: [(0, gd.jsx)(Qd.c, {
              name: "trash-can"
            }), " ", Fd("general:delete")]
          }), (0, gd.jsx)(Rd.i, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => Wd(!1),
            children: Fd("general:cancel")
          })]
        })]
      })
    }
    var Cd = md(231);
    const Zd = ["thumbnail:policyFollowGuidelines"],
      kd = {
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
          policyRows: Zd,
          example: "thumbnail:rejectionSexualExample",
          fix: "thumbnail:rejectionSexualFix"
        },
        "thumbnail-substances-content": {
          policyRows: Zd,
          example: "thumbnail:rejectionSubstancesExample",
          fix: "thumbnail:rejectionSubstancesFix"
        },
        "thumbnail-violent-gore-content": {
          policyRows: Zd,
          example: "thumbnail:rejectionViolenceExample",
          fix: "thumbnail:rejectionViolenceFix"
        }
      };

    function fd(dd) {
      let {
        rejectedThumbnails: Od,
        isAcknowledging: md,
        onAcknowledge: Wd
      } = dd;
      const {
        t: Fd
      } = (0, Kd.G)();
      return (0, gd.jsxs)("div", {
        className: "ManageWarningBanner ThumbnailRejectionNotice",
        children: [(0, gd.jsx)("div", {
          className: "ThumbnailRejectionNoticeTitle",
          children: Fd("thumbnail:rejectedByModerators")
        }), Od.map((dd => (0, gd.jsx)(Md, {
          rejected: dd
        }, dd.thumbnail.id))), (0, gd.jsx)(Rd.m, {
          className: "ThumbnailRejectionNoticeButton",
          onClick: Wd,
          disabled: md,
          children: md ? (0, gd.jsx)(hd.c, {}) : Fd("thumbnail:gotIt")
        })]
      })
    }

    function Md(dd) {
      var Od;
      let {
        rejected: {
          thumbnail: md,
          rejection: Wd
        }
      } = dd;
      const {
        t: Fd
      } = (0, Kd.G)(), Rd = null !== (Od = (0, Cd.b)(kd, Wd.policyId)) && void 0 !== Od ? Od : kd["custom-game-bad-thumbnail"], Xd = new Date(Wd.at).toLocaleDateString();
      return (0, gd.jsxs)("div", {
        className: "RejectedThumbnail",
        children: [(0, gd.jsxs)("div", {
          className: "RejectedThumbnailImage",
          children: [null !== md.preview && (0, gd.jsx)("img", {
            src: md.preview,
            alt: md.name
          }), null === md.preview && (0, gd.jsx)(Qd.c, {
            name: "image-slash"
          })]
        }), (0, gd.jsxs)("div", {
          className: "RejectedThumbnailDetails",
          children: [(0, gd.jsx)("div", {
            className: "RejectedThumbnailName",
            children: md.name
          }), (0, gd.jsx)("div", {
            children: null !== Wd.gameName ? Fd("thumbnail:rejectedGameAndDate", {
              game: Wd.gameName,
              date: Xd
            }) : Xd
          }), null !== Wd.reason && (0, gd.jsx)("div", {
            children: Fd("creatorModeration:moderatorNote", {
              reason: Wd.reason
            })
          }), Rd.policyRows.length > 0 && (0, gd.jsx)("ul", {
            className: "RejectedThumbnailPolicyRows",
            children: Rd.policyRows.map((dd => (0, gd.jsxs)("li", {
              children: [(0, gd.jsx)(Qd.c, {
                name: "x"
              }), (0, gd.jsx)("span", {
                children: Fd(dd)
              })]
            }, dd)))
          }), (0, gd.jsxs)("div", {
            children: [null !== Rd.example && null === Wd.reason && `${Fd(Rd.example)} `, Fd(Rd.fix)]
          })]
        })]
      })
    }
    var dO = md(1253);

    function OO(dd) {
      return null !== dd.preview ? dd.preview : dd.approved ? `${dO.clientSideServerUrls.s3Url}/${(0,Bd.g)(dd.id)}` : null
    }

    function mO(dd) {
      return null !== dd.pendingKey ? {
        pendingKey: dd.pendingKey
      } : {
        thumbnailId: dd.id
      }
    }

    function WO(dd) {
      var Od, md;
      let {
        schematicData: Xd,
        updateSchematicData: vd,
        publishFormEnabled: td,
        onClose: od
      } = dd;
      const {
        t: qd
      } = (0, Kd.G)(), {
        userContext: Hd,
        isUserContextUpdating: yd
      } = (0, ud.d)(), bd = (0, sd.b)(), [Td, pd] = (0, Wd.useState)([]), [Yd, wd] = (0, Wd.useState)([]), [Ed, Jd] = (0, Wd.useState)(!0), [Ud, xd] = (0, Wd.useState)(!1), [Bd, Ad] = (0, Wd.useState)(null !== (Od = Xd.customThumbnailId) && void 0 !== Od ? Od : null), [rd, Gd] = (0, Wd.useState)(null), nd = (0, Wd.useRef)(null !== (md = Xd.customThumbnailId) && void 0 !== md ? md : null), Ld = (0, Wd.useRef)(0), Pd = (0, Wd.useRef)(null), zd = (0, Wd.useRef)(null), cd = (0, Wd.useRef)(null), jd = (0, Wd.useRef)(!1);

      function Dd(dd, Od) {
        cd.current && (clearTimeout(cd.current), cd.current = null), Gd(dd), null !== dd && Od && (cd.current = setTimeout((() => {
          Gd(null), cd.current = null
        }), 5e3))
      }(0, Wd.useEffect)((() => () => {
        clearTimeout(zd.current), clearTimeout(cd.current)
      }), []);
      const ed = (0, Wd.useCallback)((() => {
        Jd(!0), Sd.e.getOwnedThumbnails(Hd).then((dd => {
          const Od = [],
            md = [];
          for (const Wd of dd.thumbnails) Wd.rejection ? Od.push({
            thumbnail: Wd,
            rejection: Wd.rejection
          }) : md.push(Wd);
          Od.sort(((dd, Od) => Od.rejection.at - dd.rejection.at)), md.sort(((dd, Od) => {
            const md = dd.approved ? 1 : 0,
              Wd = (Od.approved ? 1 : 0) - md;
            return 0 !== Wd ? Wd : Od.lastUpdatedAt - dd.lastUpdatedAt
          })), wd(Od), pd(md)
        })).catch((dd => {
          console.error("Failed to fetch thumbnails:", dd)
        })).finally((() => {
          Jd(!1)
        }))
      }), [Hd]);
      async function Cd(dd, Od, md) {
        return Sd.e.uploadSchematicThumbnail(Hd, dd, Od, md).then((() => {
          Dd({
            text: qd("thumbnail:uploadedAwaitingModeration"),
            type: "success"
          }, !0), ed()
        }))
      }

      function Zd() {
        Ld.current = Date.now(), zd.current = null;
        const dd = Pd.current;
        Pd.current = null, Dd({
          text: qd("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), Sd.e.setSchematicThumbnail(Hd, Xd.schematicId, dd).then((() => {
          bd.current && (Dd({
            text: qd("thumbnail:thumbnailUpdated"),
            type: "success"
          }, !0), nd.current = dd, vd("customThumbnailId", dd), vd("customThumbnailBlurhash", void 0), vd("customThumbnailVariants", void 0))
        })).catch((dd => {
          bd.current && (Dd({
            text: dd.errorMessageForUser ? qd(dd.errorMessageForUser, dd.errorMessageTranslationParams) : qd("thumbnail:failedToSetThumbnail"),
            type: "error"
          }, !0), Ad(nd.current))
        }))
      }

      function kd(dd) {
        Ad(dd), Pd.current = dd;
        const Od = Date.now() - Ld.current;
        Od >= 1e3 ? Zd() : (Dd({
          text: qd("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), zd.current || (zd.current = setTimeout((() => {
          Zd()
        }), 1e3 - Od)))
      }
      return (0, Wd.useEffect)((() => {
        !1 === yd && ed()
      }), [yd, ed]), (0, gd.jsxs)("div", {
        className: "BloxdForm ThumbnailSection",
        children: [(0, gd.jsxs)("div", {
          className: "SectionTitle",
          children: [qd("thumbnail:gameThumbnail"), rd && (0, gd.jsx)("span", {
            className: Nd()("ThumbnailActionMsg", `ThumbnailActionMsg--${rd.type}`),
            children: rd.text
          })]
        }), (0, gd.jsxs)("div", {
          className: "SectionBody",
          children: [Yd.length > 0 && (0, gd.jsx)(fd, {
            rejectedThumbnails: Yd,
            isAcknowledging: Ud,
            onAcknowledge: async function() {
              xd(!0);
              const dd = await Promise.allSettled(Yd.map((dd => {
                let {
                  thumbnail: Od
                } = dd;
                return Sd.e.deleteSchematicThumbnail(Hd, mO(Od))
              })));
              if (!bd.current) return;
              xd(!1);
              const Od = dd.filter((dd => "rejected" === dd.status));
              Od.length > 0 && (console.error("Failed to acknowledge some thumbnail rejections:", Od), Dd({
                text: qd("thumbnail:failedToHideRejections"),
                type: "error"
              }, !0)), ed()
            }
          }), (0, gd.jsxs)("div", {
            className: "ThumbnailGrid",
            children: [(0, gd.jsxs)("div", {
              className: Nd()("ThumbnailGridItem ThumbnailGridItemDefault", {
                ThumbnailGridItemSelected: null === Bd
              }),
              onClick: () => kd(null),
              children: [(0, gd.jsx)(Vd.e, {
                game: {
                  schematicId: Xd.schematicId,
                  imageBlurhash: Xd.imageBlurhash
                }
              }), (0, gd.jsx)("div", {
                className: "ThumbnailGridItemLabel ThumbnailDefaultLabel",
                children: qd("general:default")
              })]
            }), Ed && (0, gd.jsx)(hd.c, {}), Td.map((dd => {
              var Od;
              const md = OO(dd);
              return (0, gd.jsxs)("div", {
                className: Nd()("ThumbnailGridItem", {
                  ThumbnailGridItemSelected: dd.approved && Bd === dd.id,
                  ThumbnailGridItemPending: !dd.approved
                }),
                onClick: () => {
                  dd.approved && kd(dd.id)
                },
                children: [null !== md && (0, gd.jsx)("img", {
                  src: md,
                  alt: dd.name
                }), (0, gd.jsx)(Rd.G, {
                  className: "ThumbnailDeleteButton",
                  onClick: Od => async function(dd, Od) {
                    dd.stopPropagation();
                    const md = await Fd.NotificationProvider.showCustomPopup({
                        body: dd => (0, gd.jsx)(ld, {
                          imageUrl: OO(Od),
                          thumbnailName: Od.name,
                          onClose: Od => {
                            Od && (jd.current = !0), dd()
                          }
                        }),
                        middleScreenPopupClassName: "ThumbnailDeleteConfirmPopup",
                        onClose: od
                      }).getResult(),
                      Wd = jd.current;
                    jd.current = !1, Wd && !0 === md && (bd.current && Dd({
                      text: qd("thumbnail:deletingThumbnail"),
                      type: "info"
                    }, !1), Sd.e.deleteSchematicThumbnail(Hd, mO(Od)).then((() => {
                      bd.current && (Dd({
                        text: qd("thumbnail:thumbnailDeleted"),
                        type: "success"
                      }, !0), null !== Od.id && nd.current === Od.id && kd(null), ed())
                    })).catch((dd => {
                      bd.current && Dd({
                        text: dd.errorMessageForUser ? qd(dd.errorMessageForUser, dd.errorMessageTranslationParams) : qd("thumbnail:failedToDeleteThumbnail"),
                        type: "error"
                      }, !0)
                    })))
                  }(Od, dd),
                  children: (0, gd.jsx)(Qd.c, {
                    name: "trash-can"
                  })
                }), dd.approved && (0, gd.jsx)("div", {
                  className: "ThumbnailGridItemLabel",
                  children: dd.name
                }), !dd.approved && (0, gd.jsx)("div", {
                  className: "ThumbnailUnapprovedIcon",
                  children: (0, gd.jsx)(Qd.c, {
                    name: "hourglass-clock"
                  })
                }), !dd.approved && (0, gd.jsxs)("div", {
                  className: "ThumbnailGridItemLabel ThumbnailPendingLabel",
                  children: [dd.name, (0, gd.jsx)("br", {}), qd("thumbnail:pendingApproval")]
                })]
              }, null !== (Od = dd.id) && void 0 !== Od ? Od : dd.pendingKey)
            })), (0, gd.jsxs)("div", {
              className: Nd()("ThumbnailGridItem ThumbnailUploadTile", {
                ThumbnailUploadTileDisabled: !td
              }),
              onClick: () => {
                td && function(dd) {
                  let {
                    schematicId: Od,
                    ownedThumbnailCount: md,
                    onThumbnailReady: Wd,
                    onClose: Rd
                  } = dd;
                  Fd.NotificationProvider.showCustomPopup({
                    body: dd => (0, gd.jsx)(Id, {
                      schematicId: Od,
                      ownedThumbnailCount: md,
                      onClose: dd,
                      onThumbnailReady: Wd
                    }),
                    middleScreenPopupClassName: "SchematicThumbnailPopup",
                    onClose: Rd,
                    unlockPointerKey: "schematicThumbnailUploaderPopup"
                  })
                }({
                  schematicId: Xd.schematicId,
                  ownedThumbnailCount: Td.length,
                  onThumbnailReady: Cd,
                  onClose: od
                })
              },
              children: [(0, gd.jsx)(Qd.c, {
                name: "plus"
              }), (0, gd.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: qd("thumbnail:uploadThumbnail")
              })]
            })]
          })]
        })]
      })
    }
    var FO = md(2337),
      RO = md(5889),
      XO = md(5895),
      KO = md(5944);

    function hO(dd) {
      let {
        schematicData: Od,
        setTexturePack: md,
        initializeTexturePack: Fd,
        publishFormEnabled: Rd
      } = dd;
      const {
        t: Xd
      } = (0, Kd.G)(), [hd, vd] = (0, Wd.useState)(null), [Qd, td] = (0, Wd.useState)(null), [od, qd] = (0, Wd.useState)(!1), Hd = (0, sd.b)(), yd = Rd && !od, bd = Od.customTexturePackKey;

      function Td(dd) {
        var Od;
        vd(dd.metaData.id), td(null !== (Od = dd.metaData.fromFolderName) && void 0 !== Od ? Od : null), (dd.metaData.id !== FO.n.CUSTOM || dd.metaData.fromFolderName) && md(dd)
      }
      return (0, Wd.useEffect)((() => {
        bd && (qd(!0), (0, RO.b)(bd).then((dd => {
          var Od;
          Hd.current && (dd ? (vd(dd.metaData.id), td(null !== (Od = dd.metaData.fromFolderName) && void 0 !== Od ? Od : null), Fd(dd)) : console.error(`No texture pack at ${bd}`))
        })).catch((dd => {
          console.error("Error fetching texture pack: ", dd)
        })).finally((() => {
          qd(!1)
        })))
      }), [bd, Fd, Hd]), (0, gd.jsxs)("div", {
        className: "BloxdForm TexturePackSection",
        children: [(0, gd.jsx)("div", {
          className: "SectionTitle",
          children: Xd("customTexturePack:customTexturePack")
        }), (0, gd.jsxs)("div", {
          className: "TexturePackList",
          children: [(0, gd.jsx)("div", {
            className: Nd()("TexturePack", {
              Selected: null === hd && !od,
              Disabled: !yd
            }),
            onClick: () => {
              yd && (vd(null), md(null), td(null))
            },
            children: (0, gd.jsx)("div", {
              className: "TexturePackName",
              children: "No Override"
            })
          }), Object.values(FO.n).map((dd => (0, gd.jsx)(XO.g, {
            id: dd,
            isSelected: dd === hd,
            setSelected: Td,
            disabled: !yd
          }, dd)))]
        }), hd === FO.n.CUSTOM && (0, gd.jsx)(KO.e, {
          folderName: Qd,
          onTexturePackUpdated: Td,
          disabled: !yd,
          maxFileSizeMb: 25,
          packOwner: "customGame"
        })]
      })
    }
    var vO = md(5980);

    function QO(dd) {
      var Od;
      let {
        gameCategory: md,
        setGameCategory: Wd,
        disabled: Fd
      } = dd;
      const Xd = null !== (Od = (0, qd.hb)(md)) && void 0 !== Od ? Od : "other";
      return (0, gd.jsxs)("div", {
        className: "GameCategoryPicker",
        children: [(0, gd.jsx)(Td.g, {
          label: "worldBuilder:gameCategoryGroup",
          className: "GameCategoryGroup",
          disabled: Fd,
          children: (0, gd.jsx)(pd.e, {
            options: qd.$.map((dd => ({
              value: dd,
              label: qd.X[dd]
            }))),
            value: Xd,
            onChange: dd => {
              dd.value !== Xd && Wd(qd.R[dd.value][0])
            }
          })
        }), (0, gd.jsx)(Td.g, {
          label: "worldBuilder:gameCategory",
          className: "GameCategory",
          disabled: Fd,
          children: (0, gd.jsx)("div", {
            className: "GameCategoryOptions",
            children: qd.R[Xd].map((dd => (0, gd.jsx)(Rd.S, {
              active: dd === md,
              onClick: () => {
                Wd(dd)
              },
              children: (0, qd.fb)(dd)
            }, dd)))
          })
        })]
      })
    }
    var tO = md(5849);

    function oO(dd) {
      let {
        editor: Od,
        onClose: md
      } = dd;
      const {
        t: Wd
      } = (0, Kd.G)(), {
        schematicData: Fd,
        updateSchematicData: Rd,
        publishFormEnabled: hd,
        formEnabled: vd
      } = Od;
      return (0, gd.jsxs)(gd.Fragment, {
        children: [(0, gd.jsxs)(wd, {
          icon: "pen-to-square",
          title: Wd("worldBuilder:basicsSection"),
          disabled: !vd,
          children: [(0, gd.jsx)(Ed, {
            label: Wd("general:name"),
            caption: Wd("worldBuilder:schematicNameTagsHint"),
            children: (0, gd.jsx)(Xd.c, {
              className: "SchematicPageName",
              defaultValue: Fd.name,
              onValueChange: dd => Rd("name", dd),
              placeholderText: Wd("worldBuilder:schematicNamePlaceholder"),
              maxLength: td.ob
            })
          }), (0, gd.jsx)(Ed, {
            label: Wd("general:description"),
            children: (0, gd.jsx)(Xd.c, {
              className: "SchematicPageDescription",
              useTextarea: !0,
              defaultValue: Fd.description,
              onValueChange: dd => Rd("description", dd),
              placeholderText: Wd("worldBuilder:schematicDescriptionPlaceholder"),
              maxLength: td.kb
            })
          }), (0, gd.jsx)(QO, {
            gameCategory: Fd.gameCategory,
            setGameCategory: dd => Rd("gameCategory", dd),
            disabled: !hd
          }), !0 === Fd.gamePublished && (0, gd.jsx)(WO, {
            schematicData: Fd,
            updateSchematicData: Rd,
            publishFormEnabled: hd,
            onClose: function() {
              null === md || void 0 === md || md()
            }
          }), (0, gd.jsx)(tO.h, {})]
        }), (0, gd.jsx)(Ud, {
          schematicData: Fd,
          updateSchematicData: Rd,
          publishFormEnabled: hd,
          formEnabled: vd
        }), !0 === Fd.gamePublished && (0, gd.jsx)(wd, {
          icon: "palette",
          title: Wd("worldBuilder:texturePackSection"),
          disabled: !vd,
          children: (0, gd.jsx)(hO, {
            schematicData: Fd,
            setTexturePack: Od.setTexturePack,
            initializeTexturePack: Od.initializeTexturePack,
            publishFormEnabled: hd
          })
        })]
      })
    }

    function NO(dd) {
      let {
        editor: Od
      } = dd;
      const {
        t: md
      } = (0, Kd.G)(), {
        schematicData: Wd,
        formEnabled: Fd,
        hasUnsavedChanges: Xd,
        publishSuspendedUntil: td
      } = Od, od = (0, Gd.i)(), Nd = !0 === Wd.gamePublished ? td : null, qd = Fd && Xd && null === Nd;
      return (0, gd.jsxs)("footer", {
        className: "SchematicPageFooter",
        children: [null !== Nd && (0, gd.jsx)("div", {
          className: "SchematicPageFooterNotice",
          children: od(Nd)
        }), Fd && Xd && null === Nd && (0, gd.jsxs)("div", {
          className: "SchematicPageFooterStatus",
          children: [(0, gd.jsx)("span", {
            className: "SchematicPageFooterStatusDot"
          }), md("worldBuilder:unsavedChanges")]
        }), (0, gd.jsx)(vd.g, {
          tooltipInner: (0, gd.jsx)("div", {
            className: "SaveButtonTooltip",
            children: md(Fd && !Xd ? "worldBuilder:saveChangesNoneDescription" : "worldBuilder:saveChangesDescription")
          }),
          children: (0, gd.jsxs)(Rd.g, {
            className: "SaveChangesButton",
            onClick: () => Od.saveSchematic(Wd.gamePublished),
            disabled: !qd,
            children: [(0, gd.jsxs)("span", {
              className: Fd ? "" : "SaveChangesButtonBodyHidden",
              children: [(0, gd.jsx)(Qd.c, {
                name: "wrench"
              }), " ", md("worldBuilder:saveChanges")]
            }), !Fd && (0, gd.jsx)(hd.c, {})]
          })
        })]
      })
    }

    function qO(dd) {
      let {
        schematic: Od,
        onSchematicUpdate: md,
        onClose: Fd,
        inSourceWorld: Xd
      } = dd;
      const {
        t: hd
      } = (0, Kd.G)();

      function vd() {
        null === Fd || void 0 === Fd || Fd()
      }
      const Qd = (0, vO.d)(Od, {
        onNavigateAway: vd,
        inSourceWorld: Xd
      });
      return (0, Wd.useEffect)((() => {
        null === md || void 0 === md || md(Qd.schematicData)
      }), [Qd.schematicData, md]), (0, gd.jsxs)("div", {
        className: "SchematicPage SchematicPagePopupVariant",
        children: [(0, gd.jsxs)("div", {
          className: "SchematicPageBody",
          children: [(0, gd.jsx)(Rd.d, {
            onClick: vd,
            children: hd("worldBuilder:back")
          }), (0, gd.jsx)(wd, {
            icon: "rocket-launch",
            title: hd("worldBuilder:actionsSection"),
            disabled: !Qd.formEnabled,
            children: (0, gd.jsx)(xd.b, {
              editor: Qd
            })
          }), (0, gd.jsx)(oO, {
            editor: Qd,
            onClose: vd
          })]
        }), (0, gd.jsx)(NO, {
          editor: Qd
        })]
      })
    }

    function HO(dd) {
      let {
        schematic: Od,
        onSchematicUpdate: md,
        onClose: Wd,
        inSourceWorld: Rd
      } = dd;
      Fd.NotificationProvider.showCustomPopup({
        body: dd => (0, gd.jsx)(qO, {
          schematic: Od,
          onSchematicUpdate: md,
          onClose: dd,
          inSourceWorld: Rd
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: Wd,
        unlockPointerKey: "schematicPagePopup"
      })
    }
  },
  5844: (dd, Od, md) => {
    md.d(Od, {
      b: () => Nd
    });
    var Wd = md(1155),
      Fd = md.n(Wd),
      Rd = md(1238),
      Xd = md(1443),
      Kd = md(1572),
      hd = md(1471),
      vd = md(1436),
      Qd = md(5849),
      td = md(5855),
      od = md(1341);

    function Nd(dd) {
      let {
        editor: Od,
        className: md,
        publishRefusal: Wd = null
      } = dd;
      const {
        t: Nd
      } = (0, Rd.G)(), {
        schematicData: qd,
        formEnabled: Hd,
        publishFormEnabled: yd,
        publishSuspendedUntil: bd
      } = Od, Td = !Hd || !yd, pd = (0, td.i)();
      return (0, od.jsxs)("div", {
        className: Fd()("PublishButtonContainer", md),
        children: [Od.canEditSourceWorld && (0, od.jsxs)(Kd.g, {
          onClick: Od.editSourceWorld,
          disabled: Td,
          children: [(0, od.jsx)(Xd.c, {
            name: "edit"
          }), " ", Nd("worldBuilder:editSourceWorld")]
        }), !qd.gamePublished && (0, od.jsx)(hd.g, {
          tooltipInner: (0, od.jsx)("div", {
            className: "PublishButtonTooltip",
            children: null !== Wd && void 0 !== Wd ? Wd : Nd("worldBuilder:publishAsGameDescription")
          }),
          children: (0, od.jsxs)(Kd.m, {
            onClick: () => Od.saveSchematic(!0),
            disabled: Td || null !== Wd || null !== bd,
            children: [(0, od.jsx)(Xd.c, {
              name: "rocket-launch"
            }), " ", Nd("worldBuilder:publishAsGame"), " ", (0, od.jsx)(Xd.c, {
              name: "info-circle"
            })]
          })
        }), !0 === qd.gamePublished && (0, od.jsxs)(od.Fragment, {
          children: [(0, od.jsx)(hd.g, {
            tooltipInner: (0, od.jsx)("div", {
              className: "PublishButtonTooltip",
              children: Nd("worldBuilder:unpublishAsGameDescription")
            }),
            children: (0, od.jsxs)(Kd.G, {
              onClick: Od.unpublishSchematic,
              disabled: Td,
              children: [(0, od.jsx)(Xd.c, {
                name: "rocket-launch"
              }), " ", Nd("worldBuilder:unpublishAsGame"), " ", (0, od.jsx)(Xd.c, {
                name: "info-circle"
              })]
            })
          }), (0, od.jsxs)(Kd.g, {
            onClick: Od.playGame,
            disabled: Td,
            children: [(0, od.jsx)(Xd.c, {
              name: "joystick"
            }), " ", Nd("general:playGame")]
          })]
        }), !Hd && (0, od.jsx)(vd.c, {
          loaderType: "Secondary"
        }), !qd.gamePublished && null !== bd && (0, od.jsx)("div", {
          className: "PublishSuspendedNotice",
          children: pd(bd)
        }), Od.askingPublishingPolicy && (0, od.jsx)(Qd.e, {
          onAnswer: Od.answerPublishingPolicy
        })]
      })
    }
  },
  5889: (dd, Od, md) => {
    md.d(Od, {
      b: () => Fd
    });
    var Wd = md(1253);
    async function Fd(dd) {
      const Od = await fetch(`${Wd.clientSideServerUrls.s3Url}/${dd}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === Od.status || 403 === Od.status) return null;
      if (!Od.ok) throw new Error(`Failed to download the texture pack (${Od.status})`);
      return await Od.json()
    }
  },
  5855: (dd, Od, md) => {
    md.d(Od, {
      b: () => Kd,
      f: () => hd,
      i: () => vd
    });
    var Wd = md(66),
      Fd = md(1627),
      Rd = md(1238),
      Xd = md(1186);

    function Kd() {
      let dd = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      const {
        userContext: Od
      } = (0, Xd.d)(), [md, Rd] = (0, Wd.useState)((() => ({
        loading: dd && Od.isLoggedIn(),
        eligibility: null
      })));
      if ((0, Wd.useEffect)((() => {
          if (!dd || !Od.isLoggedIn()) return void Rd({
            loading: !1,
            eligibility: null
          });
          let md = !1;
          return Fd.e.getCreatorEligibility(Od).then((dd => {
            md || Rd({
              loading: !1,
              eligibility: dd
            })
          })).catch((dd => {
            console.warn("Failed to load creator eligibility", dd), md || Rd({
              loading: !1,
              eligibility: null
            })
          })), () => {
            md = !0
          }
        }), [Od, dd]), null === md.eligibility) return md;
      const Kd = Date.now(),
        {
          thumbnailUploadWait: hd,
          publishSuspendedUntil: vd
        } = md.eligibility;
      return {
        loading: md.loading,
        eligibility: {
          thumbnailUploadWait: null !== hd && hd.until > Kd ? hd : null,
          publishSuspendedUntil: null !== vd && vd > Kd ? vd : null
        }
      }
    }

    function hd() {
      const {
        t: dd,
        selectedLanguage: Od
      } = (0, Rd.G)();
      return (md, Wd) => dd(md, {
        date: (0, Rd.f)(Od.code, md, Wd, {
          dateStyle: "medium",
          timeStyle: "short"
        })
      })
    }

    function vd() {
      const {
        t: dd,
        selectedLanguage: Od
      } = (0, Rd.G)();
      return md => {
        const Wd = "worldBuilder:publishSuspended";
        return dd(Wd, {
          date: (0, Rd.f)(Od.code, Wd, md, {
            dateStyle: "medium",
            timeStyle: "short",
            timeZone: "UTC"
          })
        })
      }
    }
  },
  5980: (dd, Od, md) => {
    md.d(Od, {
      d: () => pd
    });
    var Wd = md(66),
      Fd = md(1424),
      Rd = md(1122),
      Xd = md(180),
      Kd = md(3e3),
      hd = md(1670),
      vd = md(29),
      Qd = md(2092),
      td = md(1627),
      od = md(5255),
      Nd = md(1462),
      qd = md(2010),
      Hd = md(1186),
      yd = md(1641),
      bd = md(5855);

    function Td(dd, Od) {
      return {
        schematicId: dd.schematicId,
        name: dd.name,
        description: dd.description,
        gamePublished: Od,
        gameCategory: dd.gameCategory,
        defaultGamemode: dd.defaultGamemode,
        voidDeathHeight: dd.voidDeathHeight,
        disableKeepInventory: dd.disableKeepInventory,
        disableTpRequests: dd.disableTpRequests,
        disableLobbySpawn: dd.disableLobbySpawn,
        disableMobs: dd.disableMobs,
        disableSpawnProtection: dd.disableSpawnProtection,
        disableFallDamage: dd.disableFallDamage,
        worldBorder: dd.worldBorder,
        hideLobbyCode: dd.hideLobbyCode,
        enableSmpMarketplace: dd.enableSmpMarketplace,
        enableSurvivalGuns: dd.enableSurvivalGuns,
        enableSpawnReset: dd.enableSpawnReset,
        enableDayNight: dd.enableDayNight,
        persistWorld: dd.persistWorld,
        persistInventory: dd.persistInventory,
        enableFluidFlow: dd.enableFluidFlow
      }
    }

    function pd(dd) {
      var Od, md;
      let {
        onNavigateAway: pd,
        inSourceWorld: Yd = !1,
        canManage: gd = !0
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const {
        userContext: wd
      } = (0, Hd.d)(), Ed = (0, yd.useNavigatePreserveSearch)(), [Jd, Ud] = (0, Wd.useState)({
        ...dd
      }), [xd, Bd] = (0, Wd.useState)("Enter"), [Sd, sd] = (0, Wd.useState)(void 0), [ud, Vd] = (0, Wd.useState)(!1), Ad = (0, Wd.useRef)(Td(dd, dd.gamePublished)), rd = (0, Wd.useRef)(void 0), Gd = "Enter" === xd, nd = null !== (Od = null === (md = (0, bd.b)(gd).eligibility) || void 0 === md ? void 0 : md.publishSuspendedUntil) && void 0 !== Od ? Od : null, Ld = wd.playerHasRank("developer") || wd.playerHasRank("admin") || "Enter" === xd && !1 !== Jd.schematicContainsSpawnBlock, Pd = void 0 !== Sd && Sd !== rd.current || JSON.stringify(Td(Jd, Jd.gamePublished)) !== JSON.stringify(Ad.current);

      function zd(dd, Od) {
        Ud((md => ({
          ...md,
          [dd]: Od
        })))
      }
      const cd = (0, Wd.useCallback)((dd => {
        rd.current = dd, sd(dd)
      }), []);

      function jd() {
        return (0, hd.z)((0, Rd.w)(Jd.schematicId), Jd)
      }

      function Dd(dd, Od) {
        Bd("Loading");
        const md = Td(Jd, dd),
          Wd = Sd !== rd.current ? Sd : void 0;
        td.e.updateSchematic(wd, md, Wd, Od).then((Od => {
          let {
            customTexturePackKey: Wd
          } = Od;
          Bd("Success"), zd("customTexturePackKey", Wd), Ad.current = md, rd.current = void 0, sd(void 0), !dd || Jd.gamePublished || pd || qd.g.showGamePublished(Jd.name, jd()), setTimeout((() => {
            zd("gamePublished", dd), Bd("Enter")
          }), 1e3)
        })).catch((dd => {
          if (dd instanceof Xd.e && dd.errorMessageForUser === Kd.B && void 0 === Od) return Bd("Enter"), void Vd(!0);
          var md;
          (console.error("Failed to save schematic:", dd), Bd("Error"), dd instanceof Xd.e && dd.errorMessageForUser) && Nd.NotificationProvider.showAlertPopup({
            title: "worldBuilder:changesNotSaved",
            subtitle: dd.errorMessageForUser,
            textOpts: {
              subtitle: null !== (md = dd.errorMessageTranslationParams) && void 0 !== md ? md : void 0
            },
            confirmText: "general:ok"
          });
          setTimeout((() => {
            Bd("Enter")
          }), 1e3)
        }))
      }
      return {
        schematicData: Jd,
        updateSchematicData: zd,
        setTexturePack: sd,
        initializeTexturePack: cd,
        updateState: xd,
        formEnabled: Gd,
        publishFormEnabled: Ld,
        hasUnsavedChanges: Pd,
        publishSuspendedUntil: nd,
        canEditSourceWorld: !Yd,
        saveSchematic: Dd,
        unpublishSchematic: function() {
          Nd.NotificationProvider.showPromptPopup({
            icon: "rocket-launch",
            title: "worldBuilder:unpublishAsGameConfirmTitle",
            subtitle: "worldBuilder:unpublishAsGameConfirmSubtitle",
            confirmText: "worldBuilder:unpublishAsGame",
            cancelText: "general:cancel",
            destructive: !0,
            unlockPointerKey: "unpublishGamePrompt"
          }).getResult().then((dd => {
            !0 === dd && Dd(!1)
          }))
        },
        askingPublishingPolicy: ud,
        answerPublishingPolicy: function(dd) {
          Vd(!1), dd && Dd(!0, Kd.D)
        },
        editSourceWorld: function() {
          Bd("Loading"), od.e.getSourceWorld(Jd.schematicId).then((dd => {
            Qd.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, vd.l)("other"), Ed((0, Fd.c)("classic", dd)), null === pd || void 0 === pd || pd()
          })).catch((dd => {
            console.error("Failed to get source world:", dd), Bd("Error"), setTimeout((() => {
              Bd("Enter")
            }), 1e3)
          }))
        },
        playGame: function() {
          Qd.gameBridge.send("leaveGame", {
            reloadPath: "/"
          }), Ed(jd()), null === pd || void 0 === pd || pd()
        }
      }
    }
  },
  5725: (dd, Od, md) => {
    md.d(Od, {
      c: () => Rd,
      f: () => od,
      j: () => hd,
      k: () => qd,
      n: () => vd,
      r: () => Nd
    });
    var Wd = md(5729),
      Fd = md(5733);
    const Rd = !1,
      Xd = Wd.m.map((dd => {
        const Od = [];
        for (let Rd = 1; Rd <= dd.reach; Rd++) Od.push(Fd.i[(0, Wd.i)(dd.source, Rd)].id);
        const md = "water" === dd.family;
        return Object.freeze({
          name: dd.kind,
          family: dd.family,
          reach: dd.reach,
          stepTicks: md ? 5 : 10,
          slopeDistance: md ? 4 : 2,
          sourceId: Fd.i[dd.source].id,
          fallingId: Fd.i[(0, Wd.e)(dd.source)].id,
          flowingIds: Object.freeze(Od),
          makesSources: md,
          stillId: Fd.i[dd.still].id
        })
      })),
      Kd = new Map;
    for (const Hd of Xd) Kd.set(Hd.sourceId, Object.freeze({
      kind: Hd,
      state: "source",
      distance: 0
    })), Kd.set(Hd.fallingId, Object.freeze({
      kind: Hd,
      state: "falling",
      distance: 0
    })), Hd.flowingIds.forEach(((dd, Od) => {
      Kd.set(dd, Object.freeze({
        kind: Hd,
        state: "flowing",
        distance: Od + 1
      }))
    }));

    function hd(dd) {
      return Xd.find((Od => Od.name === dd))
    }

    function vd(dd) {
      return null === dd ? void 0 : Kd.get(dd)
    }
    const Qd = new Uint8Array(65536);
    for (const [Hd, yd] of Kd) Qd[Hd] = "source" === yd.state ? 1 : 2;
    const td = new Map;
    for (const Hd of Xd) td.set(Hd.stillId, Hd.family);

    function od(dd) {
      var Od, md;
      return null !== (Od = null === (md = vd(dd)) || void 0 === md ? void 0 : md.kind.family) && void 0 !== Od ? Od : Nd(dd)
    }

    function Nd(dd) {
      var Od;
      return null === dd ? null : null !== (Od = td.get(dd)) && void 0 !== Od ? Od : null
    }
    Fd.i.Obsidian.id, Fd.i["Messy Stone"].id;

    function qd() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {
        let dd = 0;
        for (const Od of Xd) dd = Math.max(dd, Od.stillId, Od.sourceId, Od.fallingId, ...Od.flowingIds);
        return dd
      }() + 1;
      const Od = new Uint8Array(dd);
      for (const md of Xd) {
        const Wd = ("water" === md.family ? 1 : 2) << 4;
        for (const Fd of [md.stillId, md.sourceId, md.fallingId, ...md.flowingIds]) Fd < dd && (Od[Fd] = Wd)
      }
      return Od
    }
  },
  5716: () => {}
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);