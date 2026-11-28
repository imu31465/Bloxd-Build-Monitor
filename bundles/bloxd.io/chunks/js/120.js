export const id = 120;
export const ids = [120];
export const modules = {
  5845: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Ob,
      e: () => Ib,
      h: () => Ub
    });
    Mb(5850);
    var eb = Mb(1259),
      Hb = Mb(1159),
      pb = Mb.n(Hb),
      Vb = Mb(1516),
      gb = (Mb(64), Mb(5193)),
      lb = Mb(1475),
      Lb = Mb(1364);

    function Ib(bb) {
      let {
        children: wb,
        label: Mb,
        className: Hb,
        circleInfoText: gb,
        disabled: Ib,
        onLabelClick: Ob
      } = bb;
      const {
        t: Ub
      } = (0, eb.C)(), tb = (0, Lb.jsxs)("div", {
        className: pb()("Label", {
          ClickableLabel: void 0 !== Ob
        }),
        onClick: Ob,
        children: [Ub(Mb), gb && (0, Lb.jsx)(lb.b, {
          name: "circle-info"
        })]
      });
      return (0, Lb.jsxs)("div", {
        className: pb()("LabeledInput", {
          [Hb]: Hb,
          DisabledLabelInput: Ib
        }),
        children: [gb && (0, Lb.jsx)(Vb.d, {
          tooltipInner: (0, Lb.jsx)("div", {
            className: "LabeledInputTooltip",
            children: Ub(gb)
          }),
          children: tb
        }), !gb && tb, wb]
      })
    }

    function Ob(bb) {
      let {
        checked: wb,
        setChecked: Mb,
        disabled: eb = !1
      } = bb;
      return (0, Lb.jsx)("div", {
        className: "OtherInput ClickableOtherInput",
        "data-pad-focusable": !0,
        "aria-disabled": eb || void 0,
        onClick: bb => {
          eb || Mb(!wb)
        },
        children: (0, Lb.jsx)(gb.c, {
          checked: wb,
          onChange: bb => {
            Mb(bb.target.checked)
          },
          disabled: eb
        })
      })
    }

    function Ub(bb) {
      let {
        checked: wb,
        setChecked: Mb,
        disabled: eb
      } = bb;
      return (0, Lb.jsx)("div", {
        className: pb()("SwitchContainer", {
          SwitchContainerDisabled: eb
        }),
        onClick: () => {
          eb || Mb(!wb)
        },
        children: (0, Lb.jsx)(gb.c, {
          className: "SwitchCheckbox",
          checked: wb,
          onChange: bb => {
            Mb(bb.target.checked)
          },
          disabled: !!eb
        })
      })
    }
  },
  5853: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Lb
    });
    var eb = Mb(1159),
      Hb = Mb.n(eb),
      pb = Mb(5472),
      Vb = Mb(1259),
      gb = Mb(1364);
    const lb = [...pb.i, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function Lb(bb) {
      const {
        disabled: wb,
        hideWrapper: Mb
      } = bb, {
        t: eb
      } = (0, Vb.C)(), Lb = bb.advancedMode ? lb.map((wb => [wb, bb.callbacks[wb]])) : pb.i.map((wb => [wb, bb.callbacks[wb]])), Ob = (0, gb.jsx)("div", {
        className: Hb()("PluginsGrid", {
          SectionBody: !Mb
        }),
        children: Lb.map((bb => {
          let [Mb, eb] = bb;
          return (0, gb.jsx)(Ib, {
            plugin: Mb,
            callbacks: eb,
            disabled: wb
          }, Mb)
        }))
      });
      return Mb ? Ob : (0, gb.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, gb.jsx)("div", {
          className: "SectionTitle",
          children: eb("worldBuilder:pluginsSection")
        }), Ob]
      })
    }

    function Ib(bb) {
      let {
        plugin: wb,
        callbacks: {
          isEnabled: Mb,
          Bx: eb
        },
        disabled: pb
      } = bb;
      const {
        t: lb
      } = (0, Vb.C)(), Lb = Mb();
      return (0, gb.jsxs)("div", {
        className: Hb()("PluginCard", {
          PluginCardEnabled: Lb,
          PluginCardDisabledForm: pb
        }),
        "data-pad-focusable": !0,
        "aria-disabled": pb || void 0,
        onClick: () => {
          pb || eb(!Lb)
        },
        children: [(0, gb.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, gb.jsx)("img", {
            src: `/textures/games/classic/customGames/${wb}.png`,
            alt: wb
          })
        }), (0, gb.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, gb.jsx)("div", {
            className: "PluginCardTitle",
            children: lb(Ob[wb])
          }), (0, gb.jsx)("div", {
            className: "PluginCardDescription",
            children: lb(Ub[wb])
          })]
        }), (0, gb.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: lb(Lb ? "general:on" : "general:off")
        })]
      })
    }
    const Ob = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      Ub = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  6002: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Lb
    });
    var eb = Mb(1159),
      Hb = Mb.n(eb),
      pb = Mb(1259),
      Vb = Mb(1475),
      gb = Mb(1364);

    function lb(bb) {
      let {
        textKey: wb,
        allowed: Mb
      } = bb;
      const {
        t: eb
      } = (0, pb.C)();
      return (0, gb.jsxs)("li", {
        className: Hb()("PolicyListItem", Mb ? "Allowed" : "NotAllowed"),
        children: [(0, gb.jsx)(Vb.b, {
          name: Mb ? "check" : "x"
        }), (0, gb.jsx)("span", {
          children: eb(wb)
        })]
      })
    }

    function Lb(bb) {
      let {
        allowed: wb,
        notAllowed: Mb
      } = bb;
      return (0, gb.jsxs)("ul", {
        className: "PolicyList",
        children: [wb.map((bb => (0, gb.jsx)(lb, {
          textKey: bb,
          allowed: !0
        }, bb))), Mb.map((bb => (0, gb.jsx)(lb, {
          textKey: bb,
          allowed: !1
        }, bb)))]
      })
    }
  },
  5995: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => hb,
      d: () => zb
    });
    var eb = Mb(64),
      Hb = Mb(1159),
      pb = Mb.n(Hb),
      Vb = Mb(81),
      gb = Mb(3072),
      lb = Mb(1259),
      Lb = Mb(5845),
      Ib = Mb(1475),
      Ob = Mb(1507),
      Ub = Mb(1616),
      tb = Mb(5430),
      Cb = Mb(6002),
      Eb = Mb(1364);

    function Fb(bb) {
      return (0, Vb.createPortal)((0, Eb.jsx)(Ob.c, {
        ...bb
      }), document.body)
    }
    const Bb = gb.z.map((bb => `worldBuilder:publishingPolicy_${bb}`)),
      sb = Object.keys(gb.D).map((bb => `worldBuilder:publishingPolicy_${bb}`));

    function mb(bb) {
      let {
        onScrolledToEnd: wb
      } = bb;
      const Mb = (0, eb.useRef)(null),
        {
          after: Hb
        } = (0, tb.e)(Mb, "y");
      return (0, eb.useEffect)((() => {
        Hb || null === wb || void 0 === wb || wb()
      }), [Hb, wb]), (0, Eb.jsx)("div", {
        ref: Mb,
        className: pb()("PublishingPolicyRows", {
          PublishingPolicyRowsMoreBelow: Hb
        }),
        tabIndex: 0,
        "data-pad-focusable": !0,
        children: (0, Eb.jsx)(Cb.c, {
          allowed: Bb,
          notAllowed: sb
        })
      })
    }

    function hb(bb) {
      let {
        onAnswer: wb
      } = bb;
      const [Mb, Hb] = (0, eb.useState)(!1), [pb, Vb] = (0, eb.useState)(!1), gb = (0, eb.useCallback)((() => {
        Vb(!0)
      }), []);
      return (0, Eb.jsx)(Fb, {
        close: () => {
          wb(!1)
        },
        disableExitButton: !0,
        body: (0, Eb.jsxs)(Ob.g, {
          className: "PublishingPolicyPopup",
          title: "worldBuilder:publishingPolicy",
          padStartsOn: "content",
          confirm: {
            text: "worldBuilder:publishAsGame",
            disabled: !Mb,
            onClick: () => {
              wb(!0)
            }
          },
          cancel: {
            text: "general:cancel",
            onClick: () => {
              wb(!1)
            }
          },
          children: [(0, Eb.jsx)(mb, {
            onScrolledToEnd: gb
          }), (0, Eb.jsx)(Lb.e, {
            className: "PublishingPolicyAgree",
            label: pb ? "worldBuilder:agreeToPublishingPolicy" : "worldBuilder:scrollToAgreeToPublishingPolicy",
            disabled: !pb,
            onLabelClick: () => {
              Hb(!Mb)
            },
            children: (0, Eb.jsx)(Lb.d, {
              checked: Mb,
              setChecked: Hb,
              disabled: !pb
            })
          })]
        })
      })
    }

    function zb() {
      const {
        t: bb
      } = (0, lb.C)(), [wb, Mb] = (0, eb.useState)(!1);
      return (0, Eb.jsxs)(Eb.Fragment, {
        children: [(0, Eb.jsxs)(Ub.Y, {
          className: "PublishingPolicyLink",
          onClick: () => {
            Mb(!0)
          },
          children: [(0, Eb.jsx)(Ib.b, {
            name: "shield-halved"
          }), " ", bb("worldBuilder:publishingPolicy")]
        }), wb && (0, Eb.jsx)(Fb, {
          close: () => {
            Mb(!1)
          },
          body: (0, Eb.jsx)(Ob.g, {
            className: "PublishingPolicyPopup",
            title: "worldBuilder:publishingPolicy",
            children: (0, Eb.jsx)(mb, {})
          })
        })]
      })
    }
  },
  5836: (bb, wb, Mb) => {
    Mb.d(wb, {
      g: () => Uw,
      c: () => Ow,
      d: () => Iw,
      h: () => tw
    });
    var eb = Mb(64),
      Hb = Mb(1504),
      pb = Mb(1616),
      Vb = Mb(1876),
      gb = Mb(1259),
      lb = Mb(1468),
      Lb = Mb(1516),
      Ib = Mb(1475),
      Ob = Mb(1301),
      Ub = Mb(1159),
      tb = Mb.n(Ub),
      Cb = Mb(366),
      Eb = Mb(5472),
      Fb = Mb(5857),
      Bb = Mb(1313),
      sb = Mb(5845),
      mb = Mb(4490),
      hb = Mb(5853),
      zb = Mb(1364);

    function Xb(bb) {
      let {
        icon: wb,
        title: Mb,
        disabled: eb,
        children: Hb
      } = bb;
      return (0, zb.jsxs)("div", {
        className: tb()("ManageCard", {
          ManageCardDisabled: eb
        }),
        children: [(0, zb.jsxs)("div", {
          className: "ManageCardHead",
          children: [(0, zb.jsx)("div", {
            className: "ManageCardIcon",
            children: (0, zb.jsx)(Ib.b, {
              name: wb
            })
          }), (0, zb.jsx)("div", {
            children: (0, zb.jsx)("h2", {
              className: "ManageCardTitle",
              children: Mb
            })
          })]
        }), (0, zb.jsxs)("div", {
          className: "ManageCardBody",
          children: [Hb, eb && (0, zb.jsx)("div", {
            className: "ManageCardDisabledOverlay"
          })]
        })]
      })
    }

    function xb(bb) {
      let {
        label: wb,
        caption: Mb,
        children: eb
      } = bb;
      return (0, zb.jsxs)("div", {
        className: "ManageStackedField",
        children: [(0, zb.jsx)("div", {
          className: "ManageStackedFieldLabel",
          children: wb
        }), eb, Mb && (0, zb.jsx)("div", {
          className: "ManageStackedFieldCaption",
          children: Mb
        })]
      })
    }

    function jb(bb) {
      let {
        label: wb,
        caption: Mb,
        disabled: eb,
        children: Hb
      } = bb;
      return (0, zb.jsxs)("div", {
        className: tb()("ManageField", {
          ManageFieldDisabled: eb
        }),
        children: [(0, zb.jsxs)("div", {
          className: "ManageFieldText",
          children: [(0, zb.jsx)("div", {
            className: "ManageFieldLabel",
            children: wb
          }), (0, zb.jsx)("div", {
            className: "ManageFieldCaption",
            children: Mb
          })]
        }), (0, zb.jsx)("div", {
          className: "ManageFieldControl",
          children: Hb
        })]
      })
    }

    function Kb(bb) {
      var wb, Mb;
      let {
        schematicData: eb,
        updateSchematicData: Hb,
        publishFormEnabled: pb,
        formEnabled: Vb
      } = bb;
      const {
        t: lb
      } = (0, gb.C)(), Lb = !pb, Ib = {
        tpRequests: {
          isEnabled: () => !eb.disableTpRequests,
          Bx: bb => Hb("disableTpRequests", !bb)
        },
        spawnProtection: {
          isEnabled: () => !eb.disableSpawnProtection,
          Bx: bb => Hb("disableSpawnProtection", !bb)
        },
        spawnReset: {
          isEnabled: () => !!eb.enableSpawnReset,
          Bx: bb => Hb("enableSpawnReset", bb)
        },
        smpMarketplace: {
          isEnabled: () => !!eb.enableSmpMarketplace,
          Bx: bb => Hb("enableSmpMarketplace", bb)
        },
        survivalGuns: {
          isEnabled: () => !!eb.enableSurvivalGuns,
          Bx: bb => Hb("enableSurvivalGuns", bb)
        },
        fallDamage: {
          isEnabled: () => !eb.disableFallDamage,
          Bx: bb => Hb("disableFallDamage", !bb)
        },
        dayNight: {
          isEnabled: () => !!eb.enableDayNight,
          Bx: bb => Hb("enableDayNight", bb)
        }
      };
      return (0, zb.jsxs)(zb.Fragment, {
        children: [!1 === eb.schematicContainsSpawnBlock && (0, zb.jsx)("div", {
          className: "ManageWarningBanner",
          children: lb("worldBuilder:mustContainSpawnBlock")
        }), (0, zb.jsxs)("div", {
          className: "ManageSettingsGrid",
          children: [(0, zb.jsxs)(Xb, {
            icon: "globe",
            title: lb("worldBuilder:worldRulesSection"),
            disabled: !Vb,
            children: [(0, zb.jsx)(jb, {
              label: lb("classic:defaultGamemode"),
              caption: lb("classic:defaultGamemodeDescription"),
              disabled: Lb,
              children: (0, zb.jsx)(mb.c, {
                controlClassName: "ManageDropdown",
                options: Eb.y.map((bb => ({
                  value: bb,
                  label: Cb.o[bb]
                }))),
                value: eb.defaultGamemode,
                onChange: bb => Hb("defaultGamemode", bb.value)
              })
            }), (0, zb.jsx)(jb, {
              label: lb("classic:voidDeathHeight"),
              caption: lb("classic:voidDeathHeightDescription"),
              disabled: Lb,
              children: (0, zb.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, zb.jsx)("input", {
                  type: "number",
                  max: Bb.D,
                  value: null !== (wb = eb.voidDeathHeight) && void 0 !== wb ? wb : "",
                  onChange: bb => {
                    const wb = parseInt(bb.target.value);
                    Hb("voidDeathHeight", wb)
                  }
                }), (0, zb.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: lb("worldBuilder:blocksUnit")
                })]
              })
            }), (0, zb.jsx)(jb, {
              label: lb("classic:worldBorder"),
              caption: lb("classic:worldBorderDescription"),
              disabled: Lb,
              children: (0, zb.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, zb.jsx)("input", {
                  type: "number",
                  min: Bb.J,
                  max: Bb.E,
                  placeholder: lb("worldBuilder:noWorldBorderLimit"),
                  value: null !== (Mb = eb.worldBorder) && void 0 !== Mb ? Mb : "",
                  onChange: bb => {
                    const wb = parseInt(bb.target.value);
                    Hb("worldBorder", isNaN(wb) ? null : wb)
                  }
                }), (0, zb.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: lb("worldBuilder:blocksUnit")
                })]
              })
            }), (0, zb.jsx)(jb, {
              label: lb("classic:disableMobs"),
              caption: lb("classic:disableMobsDescription"),
              disabled: Lb,
              children: (0, zb.jsx)(sb.h, {
                checked: eb.disableMobs,
                setChecked: bb => Hb("disableMobs", bb),
                disabled: Lb
              })
            })]
          }), (0, zb.jsxs)(Xb, {
            icon: "user-group",
            title: lb("worldBuilder:playerAndLobbySection"),
            disabled: !Vb,
            children: [(0, zb.jsx)(jb, {
              label: lb("classic:disableKeepInventory"),
              caption: lb("classic:disableKeepInventoryDescription"),
              disabled: Lb,
              children: (0, zb.jsx)(sb.h, {
                checked: eb.disableKeepInventory,
                setChecked: bb => Hb("disableKeepInventory", bb),
                disabled: Lb
              })
            }), (0, zb.jsx)(jb, {
              label: lb("classic:persistInventory"),
              caption: lb("classic:persistInventoryDescription"),
              disabled: Lb,
              children: (0, zb.jsx)(mb.c, {
                controlClassName: "ManageDropdown",
                options: Eb.m.map((bb => ({
                  value: bb,
                  label: Cb.i[bb]
                }))),
                value: eb.persistInventory,
                onChange: bb => Hb("persistInventory", bb.value)
              })
            }), (0, zb.jsx)(jb, {
              label: lb("classic:persistWorld"),
              caption: lb("classic:persistWorldDescription"),
              disabled: Lb,
              children: (0, zb.jsx)(sb.h, {
                checked: eb.persistWorld,
                setChecked: bb => Hb("persistWorld", bb),
                disabled: Lb
              })
            }), Fb.c && eb.persistWorld && (0, zb.jsx)(jb, {
              label: lb("classic:fluidFlow"),
              caption: lb("classic:fluidFlowDescription"),
              disabled: Lb,
              children: (0, zb.jsx)(sb.h, {
                checked: eb.enableFluidFlow,
                setChecked: bb => Hb("enableFluidFlow", bb),
                disabled: Lb
              })
            }), (0, zb.jsx)(jb, {
              label: lb("classic:disableLobbySpawn"),
              caption: lb("classic:disableLobbySpawnDescription"),
              disabled: Lb,
              children: (0, zb.jsx)(sb.h, {
                checked: eb.disableLobbySpawn,
                setChecked: bb => Hb("disableLobbySpawn", bb),
                disabled: Lb
              })
            }), (0, zb.jsx)(jb, {
              label: lb("classic:hideLobbyCode"),
              caption: lb("classic:hideLobbyCodeDescription"),
              disabled: Lb,
              children: (0, zb.jsx)(sb.h, {
                checked: eb.hideLobbyCode,
                setChecked: bb => Hb("hideLobbyCode", bb),
                disabled: Lb
              })
            })]
          })]
        }), (0, zb.jsx)(Xb, {
          icon: "layer-group",
          title: lb("worldBuilder:pluginsSection"),
          disabled: !Vb,
          children: (0, zb.jsx)(hb.d, {
            callbacks: Ib,
            disabled: Lb,
            advancedMode: !0,
            hideWrapper: !0
          })
        })]
      })
    }
    var rb = Mb(5992),
      Rb = Mb(1757),
      Db = Mb(1677),
      cb = Mb(4883),
      Yb = Mb(1179),
      Zb = Mb(5817),
      fb = Mb(6014),
      Ab = Mb(1624),
      Wb = Mb(6005),
      Jb = Mb(6002);
    const Sb = 50,
      Nb = .3;
    async function vb(bb) {
      const wb = await
      function(bb) {
        return new Promise(((wb, Mb) => {
          const eb = new FileReader;
          eb.onload = () => wb(eb.result), eb.onerror = Mb, eb.readAsDataURL(bb)
        }))
      }(bb), Mb = await
      function(bb) {
        return new Promise(((wb, Mb) => {
          const eb = new Image;
          eb.onload = () => wb(eb), eb.onerror = () => Mb(new Error("Failed to load image")), eb.src = bb
        }))
      }(wb);
      if (Mb.naturalHeight > Mb.naturalWidth) throw new Qb;
      const eb = 1024 * Sb,
        {
          dataUrl: Hb,
          finalQuality: pb
        } = function(bb, wb) {
          const Mb = document.createElement("canvas");
          Mb.width = bb.naturalWidth, Mb.height = bb.naturalHeight, Mb.getContext("2d").drawImage(bb, 0, 0);
          let eb = .92,
            Hb = Mb.toDataURL("image/jpeg", eb);
          for (; .75 * Hb.length > wb && eb > .05;) eb -= .05, Hb = Mb.toDataURL("image/jpeg", eb);
          return {
            dataUrl: Hb,
            finalQuality: eb
          }
        }(Mb, eb);
      if (Math.ceil(.75 * Hb.length) > eb) throw new Gb;
      return {
        base64Jpg: Hb,
        heavilyCompressed: pb < Nb
      }
    }
    class Qb extends Error {}
    class Gb extends Error {}

    function qb(bb) {
      var wb;
      let {
        schematicId: Mb,
        hasReadUploadPolicy: Hb,
        onPolicyValidationError: lb,
        onThumbnailReady: Lb
      } = bb;
      const {
        t: Ub
      } = (0, gb.C)(), [Cb, Eb] = (0, eb.useState)(null), [Fb, Bb] = (0, eb.useState)(""), [sb, mb] = (0, eb.useState)(""), [hb, Xb] = (0, eb.useState)(!0), [xb, jb] = (0, eb.useState)(!1), Kb = (0, eb.useRef)(!1), [rb, Rb] = (0, eb.useState)(null), [Db, cb] = (0, eb.useState)(!1), [Yb, Zb] = (0, eb.useState)(!1), Ab = (0, eb.useRef)(0), {
        getRootProps: Wb,
        getInputProps: Jb,
        isDragActive: Sb
      } = (0, fb.c)({
        accept: {
          "image/*": [".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp"]
        },
        multiple: !1,
        onDrop: async bb => {
          if (0 === bb.length) return;
          const wb = bb[0],
            Mb = ++Ab.current;
          Rb(null), cb(!1), Eb(null), Bb(wb.name);
          try {
            const bb = await vb(wb);
            if (Mb !== Ab.current) return;
            Eb(bb), cb(bb.heavilyCompressed)
          } catch (eb) {
            if (Mb !== Ab.current) return;
            Rb(Ub(eb instanceof Qb ? "thumbnail:portraitImagesNotAllowed" : eb instanceof Gb ? "thumbnail:couldNotCompressImage" : "thumbnail:failedToUploadImage"))
          }
        },
        useFsAccessApi: !1
      }), Nb = Fb.length <= 30 ? Fb : `${Fb.slice(0,27)}...`, qb = null !== (wb = null === Cb || void 0 === Cb ? void 0 : Cb.base64Jpg) && void 0 !== wb ? wb : null, ab = sb.trim(), ib = ab.length >= Ob.h && ab.length <= Ob.g, ub = Yb && !Cb && !rb, db = Yb && !ib;
      return (0, zb.jsxs)("div", {
        className: "ThumbnailUploadContainer",
        children: [(0, zb.jsxs)("div", {
          ...Wb({
            className: tb()("ThumbnailUploadDropzone", {
              ActiveDrag: Sb,
              ValidationError: ub
            })
          }),
          children: [(0, zb.jsx)("input", {
            ...Jb()
          }), !Sb && qb ? (0, zb.jsxs)(zb.Fragment, {
            children: [(0, zb.jsxs)("div", {
              className: "ThumbnailAspectPreviews",
              children: [(0, zb.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, zb.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "1:1"
                }), (0, zb.jsx)("div", {
                  className: "ThumbnailAspectFrame Square",
                  children: (0, zb.jsx)("img", {
                    src: qb,
                    alt: "1:1 preview"
                  })
                })]
              }), (0, zb.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, zb.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "16:9"
                }), (0, zb.jsx)("div", {
                  className: "ThumbnailAspectFrame Wide",
                  children: (0, zb.jsx)("img", {
                    src: qb,
                    alt: "16:9 preview"
                  })
                })]
              })]
            }), (0, zb.jsxs)("div", {
              children: [(0, zb.jsx)("div", {
                className: "ThumbnailUploadInstructions Active",
                children: Nb
              }), (0, zb.jsx)("div", {
                className: "ThumbnailUploadInstructions Preview",
                children: Ub("thumbnail:preview")
              })]
            })]
          }) : (0, zb.jsxs)(zb.Fragment, {
            children: [(0, zb.jsx)("div", {
              className: "ThumbnailUploadIcon",
              children: (0, zb.jsx)(Ib.b, {
                name: "image"
              })
            }), (0, zb.jsx)("div", {
              className: "ThumbnailUploadInstructions",
              children: Ub("thumbnail:dragImageHere")
            })]
          })]
        }), ub && (0, zb.jsx)("div", {
          className: "ThumbnailUploadError",
          children: Ub("thumbnail:imageRequired")
        }), (0, zb.jsx)(Vb.d, {
          className: tb()("ThumbnailUploadNameInput", {
            ValidationError: db
          }),
          placeholderText: Ub("thumbnail:thumbnailName"),
          defaultValue: sb,
          onValueChange: bb => {
            mb(bb)
          },
          maxLength: Ob.g
        }), db && (0, zb.jsx)("div", {
          className: "ThumbnailUploadError",
          children: Ub("thumbnail:nameRequired", {
            min: Ob.h,
            max: Ob.g
          })
        }), (0, zb.jsxs)("label", {
          className: "ThumbnailUploadCheckbox",
          children: [(0, zb.jsx)("input", {
            type: "checkbox",
            checked: hb,
            onChange: bb => {
              Xb(bb.target.checked)
            }
          }), Ub("thumbnail:setAsThumbnailOnceApproved")]
        }), Db && (0, zb.jsx)("div", {
          className: "ThumbnailUploadWarning",
          children: Ub("thumbnail:heavyCompressionWarning")
        }), rb && (0, zb.jsx)("div", {
          className: "ThumbnailUploadError",
          children: rb
        }), (0, zb.jsx)(pb.p, {
          disabled: xb,
          className: "ThumbnailUploadButton",
          onClick: async () => {
            if (Zb(!0), !Kb.current && Cb && ib && Hb) {
              Kb.current = !0, jb(!0), Rb(null);
              try {
                await Lb(Cb.base64Jpg, ab, hb ? Mb : null)
              } catch (bb) {
                Rb(bb.errorMessageForUser ? Ub(bb.errorMessageForUser, bb.errorMessageTranslationParams) : Ub("thumbnail:failedToUploadImage"))
              } finally {
                Kb.current = !1, jb(!1)
              }
            } else Hb || lb()
          },
          children: Ub(xb ? "thumbnail:processing" : "thumbnail:uploadThumbnail")
        })]
      })
    }
    const ab = 2e3;

    function ib(bb) {
      let {
        schematicId: wb,
        ownedThumbnailCount: Mb,
        onClose: Hb,
        onThumbnailReady: pb
      } = bb;
      const {
        t: Vb
      } = (0, gb.C)(), {
        userContext: Lb
      } = (0, Yb.e)(), [Ub, Cb] = (0, eb.useState)(!1), [Eb, Fb] = (0, eb.useState)(!1), [Bb, sb] = (0, eb.useState)(!1), mb = (0, eb.useRef)(), {
        loading: hb,
        eligibility: Xb
      } = (0, Wb.b)(), xb = (0, Wb.e)();
      (0, eb.useEffect)((() => () => {
        clearTimeout(mb.current)
      }), []);
      const jb = [];
      Lb.isLoggedIn() || jb.push(Vb("thumbnail:mustBeLoggedInToUpload")), Mb >= Ob.S && jb.push(Vb("thumbnail:thumbnailLimitReachedPleaseDelete", {
        max: Ob.S
      }));
      const Kb = null === Xb || void 0 === Xb ? void 0 : Xb.thumbnailUploadWait;
      if (Kb && jb.push(xb("accountAge" === Kb.reason ? "thumbnail:accountTooNewUntil" : "thumbnail:uploadCooldownUntil", Kb.until)), !Ub && jb.length > 0) return (0, zb.jsxs)("div", {
        className: "ThumbnailUploaderInner",
        children: [(0, zb.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: Vb("thumbnail:cannotUploadThumbnail")
        }), jb.map((bb => (0, zb.jsxs)("div", {
          className: "CannotUploadThumbnailItem",
          children: [(0, zb.jsx)(Ib.b, {
            name: "triangle-exclamation"
          }), (0, zb.jsx)("span", {
            children: bb
          })]
        }, bb)))]
      });
      if (hb) return (0, zb.jsx)("div", {
        className: "ThumbnailUploaderInner",
        children: (0, zb.jsx)(lb.c, {})
      });
      return (0, zb.jsxs)("div", {
        className: tb()("ThumbnailUploaderInner", {
          ThumbnailUploaderSuccess: Ub
        }),
        children: [Ub && (0, zb.jsxs)("div", {
          className: "ThumbnailUploadSuccessOverlay",
          children: [(0, zb.jsxs)("div", {
            className: "ThumbnailUploadSuccessIcon FullyFancyText AnimFadeInScaleUp",
            children: [(0, zb.jsx)(Ib.b, {
              name: "check"
            }), (0, zb.jsx)(Ab.e, {})]
          }), (0, zb.jsx)("div", {
            className: "ThumbnailUploadSuccessText AnimFadeInScaleUp",
            children: Vb("thumbnail:thumbnailUploaded")
          })]
        }), (0, zb.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: Vb("thumbnail:uploadThumbnail")
        }), (0, zb.jsxs)("div", {
          className: "ThumbnailUploaderBody",
          children: [(0, zb.jsxs)("div", {
            className: "ThumbnailUploaderLeft",
            children: [(0, zb.jsx)("h3", {
              className: "SchematicPopupSubtitle",
              children: Vb("thumbnail:chooseImage", {
                maxSizeKb: Sb
              })
            }), (0, zb.jsx)(qb, {
              schematicId: wb,
              hasReadUploadPolicy: Eb,
              onPolicyValidationError: () => {
                sb(!0)
              },
              onThumbnailReady: async (bb, wb, Mb) => {
                await pb(bb, wb, Mb), Cb(!0), mb.current = setTimeout(Hb, ab)
              }
            })]
          }), (0, zb.jsxs)("div", {
            className: "ThumbnailUploadPolicy",
            children: [(0, zb.jsx)("h3", {
              className: "ThumbnailUploadPolicyTitle",
              children: Vb("thumbnail:uploadPolicy")
            }), (0, zb.jsx)(Jb.c, {
              allowed: ["thumbnail:policyFollowGuidelines", "thumbnail:policyInGameAssets", "thumbnail:policyLimitText"],
              notAllowed: ["thumbnail:policyCopyrightContent", "thumbnail:policyOutOfGameAssets", "thumbnail:policyBloxdTags", "thumbnail:policyMustReflectGame"]
            }), (0, zb.jsxs)("label", {
              className: tb()("ThumbnailUploadCheckbox Policy", {
                ValidationError: Bb && !Eb
              }),
              children: [(0, zb.jsx)("input", {
                type: "checkbox",
                checked: Eb,
                onChange: bb => {
                  Fb(bb.target.checked)
                }
              }), Vb("thumbnail:agreeToUploadPolicy")]
            }), Bb && !Eb && (0, zb.jsx)("div", {
              className: "ThumbnailPolicyError",
              children: Vb("thumbnail:policyRequired")
            })]
          })]
        })]
      })
    }

    function ub(bb) {
      let {
        imageUrl: wb,
        thumbnailName: Mb,
        onClose: eb
      } = bb;
      const {
        t: Hb
      } = (0, gb.C)();
      return (0, zb.jsxs)("div", {
        className: "ThumbnailDeleteConfirm",
        children: [(0, zb.jsx)("div", {
          className: "ThumbnailDeleteConfirmTitle",
          children: Hb("thumbnail:deleteThumbnail")
        }), (0, zb.jsxs)("div", {
          className: "ThumbnailDeleteConfirmImageContainer",
          children: [null !== wb && (0, zb.jsx)("img", {
            className: "ThumbnailDeleteConfirmImage",
            src: wb,
            alt: Mb
          }), (0, zb.jsx)("div", {
            className: "ThumbnailGridItemLabel",
            children: Mb
          })]
        }), (0, zb.jsx)("div", {
          className: "ThumbnailDeleteConfirmSubtitle",
          children: Hb("thumbnail:deleteThumbnailConfirmation")
        }), (0, zb.jsxs)("div", {
          className: "ThumbnailDeleteConfirmButtons",
          children: [(0, zb.jsxs)(pb.Q, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => eb(!0),
            children: [(0, zb.jsx)(Ib.b, {
              name: "trash-can"
            }), " ", Hb("general:delete")]
          }), (0, zb.jsx)(pb.j, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => eb(!1),
            children: Hb("general:cancel")
          })]
        })]
      })
    }
    var db = Mb(236);
    const Pb = ["thumbnail:policyFollowGuidelines"],
      nb = {
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
          policyRows: Pb,
          example: "thumbnail:rejectionSexualExample",
          fix: "thumbnail:rejectionSexualFix"
        },
        "thumbnail-substances-content": {
          policyRows: Pb,
          example: "thumbnail:rejectionSubstancesExample",
          fix: "thumbnail:rejectionSubstancesFix"
        },
        "thumbnail-violent-gore-content": {
          policyRows: Pb,
          example: "thumbnail:rejectionViolenceExample",
          fix: "thumbnail:rejectionViolenceFix"
        }
      };

    function yb(bb) {
      let {
        rejectedThumbnails: wb,
        isAcknowledging: Mb,
        onAcknowledge: eb
      } = bb;
      const {
        t: Hb
      } = (0, gb.C)();
      return (0, zb.jsxs)("div", {
        className: "ManageWarningBanner ThumbnailRejectionNotice",
        children: [(0, zb.jsx)("div", {
          className: "ThumbnailRejectionNoticeTitle",
          children: Hb("thumbnail:rejectedByModerators")
        }), wb.map((bb => (0, zb.jsx)(ob, {
          rejected: bb
        }, bb.thumbnail.id))), (0, zb.jsx)(pb.p, {
          className: "ThumbnailRejectionNoticeButton",
          onClick: eb,
          disabled: Mb,
          children: Mb ? (0, zb.jsx)(lb.c, {}) : Hb("thumbnail:gotIt")
        })]
      })
    }

    function ob(bb) {
      var wb;
      let {
        rejected: {
          thumbnail: Mb,
          rejection: eb
        }
      } = bb;
      const {
        t: Hb
      } = (0, gb.C)(), pb = null !== (wb = (0, db.c)(nb, eb.policyId)) && void 0 !== wb ? wb : nb["custom-game-bad-thumbnail"], Vb = new Date(eb.at).toLocaleDateString();
      return (0, zb.jsxs)("div", {
        className: "RejectedThumbnail",
        children: [(0, zb.jsxs)("div", {
          className: "RejectedThumbnailImage",
          children: [null !== Mb.preview && (0, zb.jsx)("img", {
            src: Mb.preview,
            alt: Mb.name
          }), null === Mb.preview && (0, zb.jsx)(Ib.b, {
            name: "image-slash"
          })]
        }), (0, zb.jsxs)("div", {
          className: "RejectedThumbnailDetails",
          children: [(0, zb.jsx)("div", {
            className: "RejectedThumbnailName",
            children: Mb.name
          }), (0, zb.jsx)("div", {
            children: null !== eb.gameName ? Hb("thumbnail:rejectedGameAndDate", {
              game: eb.gameName,
              date: Vb
            }) : Vb
          }), null !== eb.reason && (0, zb.jsx)("div", {
            children: Hb("creatorModeration:moderatorNote", {
              reason: eb.reason
            })
          }), pb.policyRows.length > 0 && (0, zb.jsx)("ul", {
            className: "RejectedThumbnailPolicyRows",
            children: pb.policyRows.map((bb => (0, zb.jsxs)("li", {
              children: [(0, zb.jsx)(Ib.b, {
                name: "x"
              }), (0, zb.jsx)("span", {
                children: Hb(bb)
              })]
            }, bb)))
          }), (0, zb.jsxs)("div", {
            children: [null !== pb.example && null === eb.reason && `${Hb(pb.example)} `, Hb(pb.fix)]
          })]
        })]
      })
    }
    var Tb = Mb(1271);

    function kb(bb) {
      return null !== bb.preview ? bb.preview : bb.approved ? `${Tb.clientSideServerUrls.s3Url}/${(0,Rb.h)(bb.id)}` : null
    }

    function bw(bb) {
      return null !== bb.pendingKey ? {
        pendingKey: bb.pendingKey
      } : {
        thumbnailId: bb.id
      }
    }

    function ww(bb) {
      var wb, Mb;
      let {
        schematicData: Vb,
        updateSchematicData: Lb,
        publishFormEnabled: Ob,
        onClose: Ub
      } = bb;
      const {
        t: Cb
      } = (0, gb.C)(), {
        userContext: Eb,
        isUserContextUpdating: Fb
      } = (0, Yb.e)(), Bb = (0, cb.d)(), [sb, mb] = (0, eb.useState)([]), [hb, Xb] = (0, eb.useState)([]), [xb, jb] = (0, eb.useState)(!0), [Kb, rb] = (0, eb.useState)(!1), [Rb, fb] = (0, eb.useState)(null !== (wb = Vb.customThumbnailId) && void 0 !== wb ? wb : null), [Ab, Wb] = (0, eb.useState)(null), Jb = (0, eb.useRef)(null !== (Mb = Vb.customThumbnailId) && void 0 !== Mb ? Mb : null), Sb = (0, eb.useRef)(0), Nb = (0, eb.useRef)(null), vb = (0, eb.useRef)(null), Qb = (0, eb.useRef)(null), Gb = (0, eb.useRef)(!1);

      function qb(bb, wb) {
        Qb.current && (clearTimeout(Qb.current), Qb.current = null), Wb(bb), null !== bb && wb && (Qb.current = setTimeout((() => {
          Wb(null), Qb.current = null
        }), 5e3))
      }(0, eb.useEffect)((() => () => {
        clearTimeout(vb.current), clearTimeout(Qb.current)
      }), []);
      const ab = (0, eb.useCallback)((() => {
        jb(!0), Db.e.getOwnedThumbnails(Eb).then((bb => {
          const wb = [],
            Mb = [];
          for (const eb of bb.thumbnails) eb.rejection ? wb.push({
            thumbnail: eb,
            rejection: eb.rejection
          }) : Mb.push(eb);
          wb.sort(((bb, wb) => wb.rejection.at - bb.rejection.at)), Mb.sort(((bb, wb) => {
            const Mb = bb.approved ? 1 : 0,
              eb = (wb.approved ? 1 : 0) - Mb;
            return 0 !== eb ? eb : wb.lastUpdatedAt - bb.lastUpdatedAt
          })), Xb(wb), mb(Mb)
        })).catch((bb => {
          console.error("Failed to fetch thumbnails:", bb)
        })).finally((() => {
          jb(!1)
        }))
      }), [Eb]);
      async function db(bb, wb, Mb) {
        return Db.e.uploadSchematicThumbnail(Eb, bb, wb, Mb).then((() => {
          qb({
            text: Cb("thumbnail:uploadedAwaitingModeration"),
            type: "success"
          }, !0), ab()
        }))
      }

      function Pb() {
        Sb.current = Date.now(), vb.current = null;
        const bb = Nb.current;
        Nb.current = null, qb({
          text: Cb("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), Db.e.setSchematicThumbnail(Eb, Vb.schematicId, bb).then((() => {
          Bb.current && (qb({
            text: Cb("thumbnail:thumbnailUpdated"),
            type: "success"
          }, !0), Jb.current = bb, Lb("customThumbnailId", bb), Lb("customThumbnailBlurhash", void 0), Lb("customThumbnailVariants", void 0))
        })).catch((bb => {
          Bb.current && (qb({
            text: bb.errorMessageForUser ? Cb(bb.errorMessageForUser, bb.errorMessageTranslationParams) : Cb("thumbnail:failedToSetThumbnail"),
            type: "error"
          }, !0), fb(Jb.current))
        }))
      }

      function nb(bb) {
        fb(bb), Nb.current = bb;
        const wb = Date.now() - Sb.current;
        wb >= 1e3 ? Pb() : (qb({
          text: Cb("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), vb.current || (vb.current = setTimeout((() => {
          Pb()
        }), 1e3 - wb)))
      }
      return (0, eb.useEffect)((() => {
        !1 === Fb && ab()
      }), [Fb, ab]), (0, zb.jsxs)("div", {
        className: "BloxdForm ThumbnailSection",
        children: [(0, zb.jsxs)("div", {
          className: "SectionTitle",
          children: [Cb("thumbnail:gameThumbnail"), Ab && (0, zb.jsx)("span", {
            className: tb()("ThumbnailActionMsg", `ThumbnailActionMsg--${Ab.type}`),
            children: Ab.text
          })]
        }), (0, zb.jsxs)("div", {
          className: "SectionBody",
          children: [hb.length > 0 && (0, zb.jsx)(yb, {
            rejectedThumbnails: hb,
            isAcknowledging: Kb,
            onAcknowledge: async function() {
              rb(!0);
              const bb = await Promise.allSettled(hb.map((bb => {
                let {
                  thumbnail: wb
                } = bb;
                return Db.e.deleteSchematicThumbnail(Eb, bw(wb))
              })));
              if (!Bb.current) return;
              rb(!1);
              const wb = bb.filter((bb => "rejected" === bb.status));
              wb.length > 0 && (console.error("Failed to acknowledge some thumbnail rejections:", wb), qb({
                text: Cb("thumbnail:failedToHideRejections"),
                type: "error"
              }, !0)), ab()
            }
          }), (0, zb.jsxs)("div", {
            className: "ThumbnailGrid",
            children: [(0, zb.jsxs)("div", {
              className: tb()("ThumbnailGridItem ThumbnailGridItemDefault", {
                ThumbnailGridItemSelected: null === Rb
              }),
              onClick: () => nb(null),
              children: [(0, zb.jsx)(Zb.e, {
                game: {
                  schematicId: Vb.schematicId,
                  imageBlurhash: Vb.imageBlurhash
                }
              }), (0, zb.jsx)("div", {
                className: "ThumbnailGridItemLabel ThumbnailDefaultLabel",
                children: Cb("general:default")
              })]
            }), xb && (0, zb.jsx)(lb.c, {}), sb.map((bb => {
              var wb;
              const Mb = kb(bb);
              return (0, zb.jsxs)("div", {
                className: tb()("ThumbnailGridItem", {
                  ThumbnailGridItemSelected: bb.approved && Rb === bb.id,
                  ThumbnailGridItemPending: !bb.approved
                }),
                onClick: () => {
                  bb.approved && nb(bb.id)
                },
                children: [null !== Mb && (0, zb.jsx)("img", {
                  src: Mb,
                  alt: bb.name
                }), (0, zb.jsx)(pb.Q, {
                  className: "ThumbnailDeleteButton",
                  onClick: wb => async function(bb, wb) {
                    bb.stopPropagation();
                    const Mb = await Hb.NotificationProvider.showCustomPopup({
                        body: bb => (0, zb.jsx)(ub, {
                          imageUrl: kb(wb),
                          thumbnailName: wb.name,
                          onClose: wb => {
                            wb && (Gb.current = !0), bb()
                          }
                        }),
                        middleScreenPopupClassName: "ThumbnailDeleteConfirmPopup",
                        onClose: Ub
                      }).getResult(),
                      eb = Gb.current;
                    Gb.current = !1, eb && !0 === Mb && (Bb.current && qb({
                      text: Cb("thumbnail:deletingThumbnail"),
                      type: "info"
                    }, !1), Db.e.deleteSchematicThumbnail(Eb, bw(wb)).then((() => {
                      Bb.current && (qb({
                        text: Cb("thumbnail:thumbnailDeleted"),
                        type: "success"
                      }, !0), null !== wb.id && Jb.current === wb.id && nb(null), ab())
                    })).catch((bb => {
                      Bb.current && qb({
                        text: bb.errorMessageForUser ? Cb(bb.errorMessageForUser, bb.errorMessageTranslationParams) : Cb("thumbnail:failedToDeleteThumbnail"),
                        type: "error"
                      }, !0)
                    })))
                  }(wb, bb),
                  children: (0, zb.jsx)(Ib.b, {
                    name: "trash-can"
                  })
                }), bb.approved && (0, zb.jsx)("div", {
                  className: "ThumbnailGridItemLabel",
                  children: bb.name
                }), !bb.approved && (0, zb.jsx)("div", {
                  className: "ThumbnailUnapprovedIcon",
                  children: (0, zb.jsx)(Ib.b, {
                    name: "hourglass-clock"
                  })
                }), !bb.approved && (0, zb.jsxs)("div", {
                  className: "ThumbnailGridItemLabel ThumbnailPendingLabel",
                  children: [bb.name, (0, zb.jsx)("br", {}), Cb("thumbnail:pendingApproval")]
                })]
              }, null !== (wb = bb.id) && void 0 !== wb ? wb : bb.pendingKey)
            })), (0, zb.jsxs)("div", {
              className: tb()("ThumbnailGridItem ThumbnailUploadTile", {
                ThumbnailUploadTileDisabled: !Ob
              }),
              onClick: () => {
                Ob && function(bb) {
                  let {
                    schematicId: wb,
                    ownedThumbnailCount: Mb,
                    onThumbnailReady: eb,
                    onClose: pb
                  } = bb;
                  Hb.NotificationProvider.showCustomPopup({
                    body: bb => (0, zb.jsx)(ib, {
                      schematicId: wb,
                      ownedThumbnailCount: Mb,
                      onClose: bb,
                      onThumbnailReady: eb
                    }),
                    middleScreenPopupClassName: "SchematicThumbnailPopup",
                    onClose: pb,
                    unlockPointerKey: "schematicThumbnailUploaderPopup"
                  })
                }({
                  schematicId: Vb.schematicId,
                  ownedThumbnailCount: sb.length,
                  onThumbnailReady: db,
                  onClose: Ub
                })
              },
              children: [(0, zb.jsx)(Ib.b, {
                name: "plus"
              }), (0, zb.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: Cb("thumbnail:uploadThumbnail")
              })]
            })]
          })]
        })]
      })
    }
    var Mw = Mb(2380),
      ew = Mb(6039),
      Hw = Mb(6045),
      pw = Mb(6092);

    function Vw(bb) {
      let {
        schematicData: wb,
        setTexturePack: Mb,
        initializeTexturePack: Hb,
        publishFormEnabled: pb
      } = bb;
      const {
        t: Vb
      } = (0, gb.C)(), [lb, Lb] = (0, eb.useState)(null), [Ib, Ob] = (0, eb.useState)(null), [Ub, Cb] = (0, eb.useState)(!1), Eb = (0, cb.d)(), Fb = pb && !Ub, Bb = wb.customTexturePackKey;

      function sb(bb) {
        var wb;
        Lb(bb.metaData.id), Ob(null !== (wb = bb.metaData.fromFolderName) && void 0 !== wb ? wb : null), (bb.metaData.id !== Mw.t.CUSTOM || bb.metaData.fromFolderName) && Mb(bb)
      }
      return (0, eb.useEffect)((() => {
        Bb && (Cb(!0), (0, ew.e)(Bb).then((bb => {
          var wb;
          Eb.current && (bb ? (Lb(bb.metaData.id), Ob(null !== (wb = bb.metaData.fromFolderName) && void 0 !== wb ? wb : null), Hb(bb)) : console.error(`No texture pack at ${Bb}`))
        })).catch((bb => {
          console.error("Error fetching texture pack: ", bb)
        })).finally((() => {
          Cb(!1)
        })))
      }), [Bb, Hb, Eb]), (0, zb.jsxs)("div", {
        className: "BloxdForm TexturePackSection",
        children: [(0, zb.jsx)("div", {
          className: "SectionTitle",
          children: Vb("customTexturePack:customTexturePack")
        }), (0, zb.jsxs)("div", {
          className: "TexturePackList",
          children: [(0, zb.jsx)("div", {
            className: tb()("TexturePack", {
              Selected: null === lb && !Ub,
              Disabled: !Fb
            }),
            onClick: () => {
              Fb && (Lb(null), Mb(null), Ob(null))
            },
            children: (0, zb.jsx)("div", {
              className: "TexturePackName",
              children: "No Override"
            })
          }), Object.values(Mw.t).map((bb => (0, zb.jsx)(Hw.c, {
            id: bb,
            isSelected: bb === lb,
            setSelected: sb,
            disabled: !Fb
          }, bb)))]
        }), lb === Mw.t.CUSTOM && (0, zb.jsx)(pw.d, {
          folderName: Ib,
          onTexturePackUpdated: sb,
          disabled: !Fb,
          maxFileSizeMb: 25,
          packOwner: "customGame"
        })]
      })
    }
    var gw = Mb(6134);

    function lw(bb) {
      var wb;
      let {
        gameCategory: Mb,
        setGameCategory: eb,
        disabled: Hb
      } = bb;
      const Vb = null !== (wb = (0, Cb.fb)(Mb)) && void 0 !== wb ? wb : "other";
      return (0, zb.jsxs)("div", {
        className: "GameCategoryPicker",
        children: [(0, zb.jsx)(sb.e, {
          label: "worldBuilder:gameCategoryGroup",
          className: "GameCategoryGroup",
          disabled: Hb,
          children: (0, zb.jsx)(mb.c, {
            options: Cb.X.map((bb => ({
              value: bb,
              label: Cb.V[bb]
            }))),
            value: Vb,
            onChange: bb => {
              bb.value !== Vb && eb(Cb.O[bb.value][0])
            }
          })
        }), (0, zb.jsx)(sb.e, {
          label: "worldBuilder:gameCategory",
          className: "GameCategory",
          disabled: Hb,
          children: (0, zb.jsx)("div", {
            className: "GameCategoryOptions",
            children: Cb.O[Vb].map((bb => (0, zb.jsx)(pb.Y, {
              active: bb === Mb,
              onClick: () => {
                eb(bb)
              },
              children: (0, Cb.eb)(bb)
            }, bb)))
          })
        })]
      })
    }
    var Lw = Mb(5995);

    function Iw(bb) {
      let {
        editor: wb,
        onClose: Mb
      } = bb;
      const {
        t: eb
      } = (0, gb.C)(), {
        schematicData: Hb,
        updateSchematicData: pb,
        publishFormEnabled: lb,
        formEnabled: Lb
      } = wb;
      return (0, zb.jsxs)(zb.Fragment, {
        children: [(0, zb.jsxs)(Xb, {
          icon: "pen-to-square",
          title: eb("worldBuilder:basicsSection"),
          disabled: !Lb,
          children: [(0, zb.jsx)(xb, {
            label: eb("general:name"),
            caption: eb("worldBuilder:schematicNameTagsHint"),
            children: (0, zb.jsx)(Vb.d, {
              className: "SchematicPageName",
              defaultValue: Hb.name,
              onValueChange: bb => pb("name", bb),
              placeholderText: eb("worldBuilder:schematicNamePlaceholder"),
              maxLength: Ob.ib
            })
          }), (0, zb.jsx)(xb, {
            label: eb("general:description"),
            children: (0, zb.jsx)(Vb.d, {
              className: "SchematicPageDescription",
              useTextarea: !0,
              defaultValue: Hb.description,
              onValueChange: bb => pb("description", bb),
              placeholderText: eb("worldBuilder:schematicDescriptionPlaceholder"),
              maxLength: Ob.hb
            })
          }), (0, zb.jsx)(lw, {
            gameCategory: Hb.gameCategory,
            setGameCategory: bb => pb("gameCategory", bb),
            disabled: !lb
          }), !0 === Hb.gamePublished && (0, zb.jsx)(ww, {
            schematicData: Hb,
            updateSchematicData: pb,
            publishFormEnabled: lb,
            onClose: function() {
              null === Mb || void 0 === Mb || Mb()
            }
          }), (0, zb.jsx)(Lw.d, {})]
        }), (0, zb.jsx)(Kb, {
          schematicData: Hb,
          updateSchematicData: pb,
          publishFormEnabled: lb,
          formEnabled: Lb
        }), !0 === Hb.gamePublished && (0, zb.jsx)(Xb, {
          icon: "palette",
          title: eb("worldBuilder:texturePackSection"),
          disabled: !Lb,
          children: (0, zb.jsx)(Vw, {
            schematicData: Hb,
            setTexturePack: wb.setTexturePack,
            initializeTexturePack: wb.initializeTexturePack,
            publishFormEnabled: lb
          })
        })]
      })
    }

    function Ow(bb) {
      let {
        editor: wb
      } = bb;
      const {
        t: Mb
      } = (0, gb.C)(), {
        schematicData: eb,
        formEnabled: Hb,
        hasUnsavedChanges: Vb,
        publishSuspendedUntil: Ob
      } = wb, Ub = (0, Wb.f)(), tb = !0 === eb.gamePublished ? Ob : null, Cb = Hb && Vb && null === tb;
      return (0, zb.jsxs)("footer", {
        className: "SchematicPageFooter",
        children: [null !== tb && (0, zb.jsx)("div", {
          className: "SchematicPageFooterNotice",
          children: Ub(tb)
        }), Hb && Vb && null === tb && (0, zb.jsxs)("div", {
          className: "SchematicPageFooterStatus",
          children: [(0, zb.jsx)("span", {
            className: "SchematicPageFooterStatusDot"
          }), Mb("worldBuilder:unsavedChanges")]
        }), (0, zb.jsx)(Lb.d, {
          tooltipInner: (0, zb.jsx)("div", {
            className: "SaveButtonTooltip",
            children: Mb(Hb && !Vb ? "worldBuilder:saveChangesNoneDescription" : "worldBuilder:saveChangesDescription")
          }),
          children: (0, zb.jsxs)(pb.f, {
            className: "SaveChangesButton",
            onClick: () => wb.saveSchematic(eb.gamePublished),
            disabled: !Cb,
            children: [(0, zb.jsxs)("span", {
              className: Hb ? "" : "SaveChangesButtonBodyHidden",
              children: [(0, zb.jsx)(Ib.b, {
                name: "wrench"
              }), " ", Mb("worldBuilder:saveChanges")]
            }), !Hb && (0, zb.jsx)(lb.c, {})]
          })
        })]
      })
    }

    function Uw(bb) {
      let {
        schematic: wb,
        onSchematicUpdate: Mb,
        onClose: Hb,
        inSourceWorld: Vb
      } = bb;
      const {
        t: lb
      } = (0, gb.C)();

      function Lb() {
        null === Hb || void 0 === Hb || Hb()
      }
      const Ib = (0, gw.e)(wb, {
        onNavigateAway: Lb,
        inSourceWorld: Vb
      });
      return (0, eb.useEffect)((() => {
        null === Mb || void 0 === Mb || Mb(Ib.schematicData)
      }), [Ib.schematicData, Mb]), (0, zb.jsxs)("div", {
        className: "SchematicPage SchematicPagePopupVariant",
        children: [(0, zb.jsxs)("div", {
          className: "SchematicPageBody",
          children: [(0, zb.jsx)(pb.b, {
            onClick: Lb,
            children: lb("worldBuilder:back")
          }), (0, zb.jsx)(Xb, {
            icon: "rocket-launch",
            title: lb("worldBuilder:actionsSection"),
            disabled: !Ib.formEnabled,
            children: (0, zb.jsx)(rb.e, {
              editor: Ib
            })
          }), (0, zb.jsx)(Iw, {
            editor: Ib,
            onClose: Lb
          })]
        }), (0, zb.jsx)(Ow, {
          editor: Ib
        })]
      })
    }

    function tw(bb) {
      let {
        schematic: wb,
        onSchematicUpdate: Mb,
        onClose: eb,
        inSourceWorld: pb
      } = bb;
      Hb.NotificationProvider.showCustomPopup({
        body: bb => (0, zb.jsx)(Uw, {
          schematic: wb,
          onSchematicUpdate: Mb,
          onClose: bb,
          inSourceWorld: pb
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: eb,
        unlockPointerKey: "schematicPagePopup"
      })
    }
  },
  5992: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => tb
    });
    var eb = Mb(1159),
      Hb = Mb.n(eb),
      pb = Mb(1259),
      Vb = Mb(1475),
      gb = Mb(1616),
      lb = Mb(1516),
      Lb = Mb(1468),
      Ib = Mb(5995),
      Ob = Mb(6005),
      Ub = Mb(1364);

    function tb(bb) {
      let {
        editor: wb,
        className: Mb,
        publishRefusal: eb = null
      } = bb;
      const {
        t: tb
      } = (0, pb.C)(), {
        schematicData: Cb,
        formEnabled: Eb,
        publishFormEnabled: Fb,
        publishSuspendedUntil: Bb
      } = wb, sb = !Eb || !Fb, mb = (0, Ob.f)();
      return (0, Ub.jsxs)("div", {
        className: Hb()("PublishButtonContainer", Mb),
        children: [wb.canEditSourceWorld && (0, Ub.jsxs)(gb.f, {
          onClick: wb.editSourceWorld,
          disabled: sb,
          children: [(0, Ub.jsx)(Vb.b, {
            name: "edit"
          }), " ", tb("worldBuilder:editSourceWorld")]
        }), !Cb.gamePublished && (0, Ub.jsx)(lb.d, {
          tooltipInner: (0, Ub.jsx)("div", {
            className: "PublishButtonTooltip",
            children: null !== eb && void 0 !== eb ? eb : tb("worldBuilder:publishAsGameDescription")
          }),
          children: (0, Ub.jsxs)(gb.p, {
            onClick: () => wb.saveSchematic(!0),
            disabled: sb || null !== eb || null !== Bb,
            children: [(0, Ub.jsx)(Vb.b, {
              name: "rocket-launch"
            }), " ", tb("worldBuilder:publishAsGame"), " ", (0, Ub.jsx)(Vb.b, {
              name: "info-circle"
            })]
          })
        }), !0 === Cb.gamePublished && (0, Ub.jsxs)(Ub.Fragment, {
          children: [(0, Ub.jsx)(lb.d, {
            tooltipInner: (0, Ub.jsx)("div", {
              className: "PublishButtonTooltip",
              children: tb("worldBuilder:unpublishAsGameDescription")
            }),
            children: (0, Ub.jsxs)(gb.Q, {
              onClick: wb.unpublishSchematic,
              disabled: sb,
              children: [(0, Ub.jsx)(Vb.b, {
                name: "rocket-launch"
              }), " ", tb("worldBuilder:unpublishAsGame"), " ", (0, Ub.jsx)(Vb.b, {
                name: "info-circle"
              })]
            })
          }), (0, Ub.jsxs)(gb.f, {
            onClick: wb.playGame,
            disabled: sb,
            children: [(0, Ub.jsx)(Vb.b, {
              name: "joystick"
            }), " ", tb("general:playGame")]
          })]
        }), !Eb && (0, Ub.jsx)(Lb.c, {
          loaderType: "Secondary"
        }), !Cb.gamePublished && null !== Bb && (0, Ub.jsx)("div", {
          className: "PublishSuspendedNotice",
          children: mb(Bb)
        }), wb.askingPublishingPolicy && (0, Ub.jsx)(Ib.b, {
          onAnswer: wb.answerPublishingPolicy
        })]
      })
    }
  },
  6039: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Hb
    });
    var eb = Mb(1271);
    async function Hb(bb) {
      const wb = await fetch(`${eb.clientSideServerUrls.s3Url}/${bb}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === wb.status || 403 === wb.status) return null;
      if (!wb.ok) throw new Error(`Failed to download the texture pack (${wb.status})`);
      return await wb.json()
    }
  },
  6005: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => gb,
      e: () => lb,
      f: () => Lb
    });
    var eb = Mb(64),
      Hb = Mb(1677),
      pb = Mb(1259),
      Vb = Mb(1179);

    function gb() {
      let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      const {
        userContext: wb
      } = (0, Vb.e)(), [Mb, pb] = (0, eb.useState)((() => ({
        loading: bb && wb.isLoggedIn(),
        eligibility: null
      })));
      if ((0, eb.useEffect)((() => {
          if (!bb || !wb.isLoggedIn()) return void pb({
            loading: !1,
            eligibility: null
          });
          let Mb = !1;
          return Hb.e.getCreatorEligibility(wb).then((bb => {
            Mb || pb({
              loading: !1,
              eligibility: bb
            })
          })).catch((bb => {
            console.warn("Failed to load creator eligibility", bb), Mb || pb({
              loading: !1,
              eligibility: null
            })
          })), () => {
            Mb = !0
          }
        }), [wb, bb]), null === Mb.eligibility) return Mb;
      const gb = Date.now(),
        {
          thumbnailUploadWait: lb,
          publishSuspendedUntil: Lb
        } = Mb.eligibility;
      return {
        loading: Mb.loading,
        eligibility: {
          thumbnailUploadWait: null !== lb && lb.until > gb ? lb : null,
          publishSuspendedUntil: null !== Lb && Lb > gb ? Lb : null
        }
      }
    }

    function lb() {
      const {
        t: bb,
        selectedLanguage: wb
      } = (0, pb.C)();
      return (Mb, eb) => bb(Mb, {
        date: (0, pb.e)(wb.code, Mb, eb, {
          dateStyle: "medium",
          timeStyle: "short"
        })
      })
    }

    function Lb() {
      const {
        t: bb,
        selectedLanguage: wb
      } = (0, pb.C)();
      return Mb => {
        const eb = "worldBuilder:publishSuspended";
        return bb(eb, {
          date: (0, pb.e)(wb.code, eb, Mb, {
            dateStyle: "medium",
            timeStyle: "short",
            timeZone: "UTC"
          })
        })
      }
    }
  },
  6134: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => mb
    });
    var eb = Mb(64),
      Hb = Mb(1455),
      pb = Mb(1126),
      Vb = Mb(192),
      gb = Mb(3072),
      lb = Mb(1720),
      Lb = Mb(26),
      Ib = Mb(2142),
      Ob = Mb(1677),
      Ub = Mb(5436),
      tb = Mb(1504),
      Cb = Mb(2062),
      Eb = Mb(1179),
      Fb = Mb(1686),
      Bb = Mb(6005);

    function sb(bb, wb) {
      return {
        schematicId: bb.schematicId,
        name: bb.name,
        description: bb.description,
        gamePublished: wb,
        gameCategory: bb.gameCategory,
        defaultGamemode: bb.defaultGamemode,
        voidDeathHeight: bb.voidDeathHeight,
        disableKeepInventory: bb.disableKeepInventory,
        disableTpRequests: bb.disableTpRequests,
        disableLobbySpawn: bb.disableLobbySpawn,
        disableMobs: bb.disableMobs,
        disableSpawnProtection: bb.disableSpawnProtection,
        disableFallDamage: bb.disableFallDamage,
        worldBorder: bb.worldBorder,
        hideLobbyCode: bb.hideLobbyCode,
        enableSmpMarketplace: bb.enableSmpMarketplace,
        enableSurvivalGuns: bb.enableSurvivalGuns,
        enableSpawnReset: bb.enableSpawnReset,
        enableDayNight: bb.enableDayNight,
        persistWorld: bb.persistWorld,
        persistInventory: bb.persistInventory,
        enableFluidFlow: bb.enableFluidFlow
      }
    }

    function mb(bb) {
      var wb, Mb;
      let {
        onNavigateAway: mb,
        inSourceWorld: hb = !1,
        canManage: zb = !0
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const {
        userContext: Xb
      } = (0, Eb.e)(), xb = (0, Fb.useNavigatePreserveSearch)(), [jb, Kb] = (0, eb.useState)({
        ...bb
      }), [rb, Rb] = (0, eb.useState)("Enter"), [Db, cb] = (0, eb.useState)(void 0), [Yb, Zb] = (0, eb.useState)(!1), fb = (0, eb.useRef)(sb(bb, bb.gamePublished)), Ab = (0, eb.useRef)(void 0), Wb = "Enter" === rb, Jb = null !== (wb = null === (Mb = (0, Bb.b)(zb).eligibility) || void 0 === Mb ? void 0 : Mb.publishSuspendedUntil) && void 0 !== wb ? wb : null, Sb = Xb.playerHasRank("developer") || Xb.playerHasRank("admin") || "Enter" === rb && !1 !== jb.schematicContainsSpawnBlock, Nb = void 0 !== Db && Db !== Ab.current || JSON.stringify(sb(jb, jb.gamePublished)) !== JSON.stringify(fb.current);

      function vb(bb, wb) {
        Kb((Mb => ({
          ...Mb,
          [bb]: wb
        })))
      }
      const Qb = (0, eb.useCallback)((bb => {
        Ab.current = bb, cb(bb)
      }), []);

      function Gb() {
        return (0, lb.v)((0, pb.t)(jb.schematicId), jb)
      }

      function qb(bb, wb) {
        Rb("Loading");
        const Mb = sb(jb, bb),
          eb = Db !== Ab.current ? Db : void 0;
        Ob.e.updateSchematic(Xb, Mb, eb, wb).then((wb => {
          let {
            customTexturePackKey: eb
          } = wb;
          Rb("Success"), vb("customTexturePackKey", eb), fb.current = Mb, Ab.current = void 0, cb(void 0), !bb || jb.gamePublished || mb || Cb.j.showGamePublished(jb.name, Gb()), setTimeout((() => {
            vb("gamePublished", bb), Rb("Enter")
          }), 1e3)
        })).catch((bb => {
          if (bb instanceof Vb.b && bb.errorMessageForUser === gb.H && void 0 === wb) return Rb("Enter"), void Zb(!0);
          var Mb;
          (console.error("Failed to save schematic:", bb), Rb("Error"), bb instanceof Vb.b && bb.errorMessageForUser) && tb.NotificationProvider.showAlertPopup({
            title: "worldBuilder:changesNotSaved",
            subtitle: bb.errorMessageForUser,
            textOpts: {
              subtitle: null !== (Mb = bb.errorMessageTranslationParams) && void 0 !== Mb ? Mb : void 0
            },
            confirmText: "general:ok"
          });
          setTimeout((() => {
            Rb("Enter")
          }), 1e3)
        }))
      }
      return {
        schematicData: jb,
        updateSchematicData: vb,
        setTexturePack: cb,
        initializeTexturePack: Qb,
        updateState: rb,
        formEnabled: Wb,
        publishFormEnabled: Sb,
        hasUnsavedChanges: Nb,
        publishSuspendedUntil: Jb,
        canEditSourceWorld: !hb,
        saveSchematic: qb,
        unpublishSchematic: function() {
          tb.NotificationProvider.showPromptPopup({
            icon: "rocket-launch",
            title: "worldBuilder:unpublishAsGameConfirmTitle",
            subtitle: "worldBuilder:unpublishAsGameConfirmSubtitle",
            confirmText: "worldBuilder:unpublishAsGame",
            cancelText: "general:cancel",
            destructive: !0,
            unlockPointerKey: "unpublishGamePrompt"
          }).getResult().then((bb => {
            !0 === bb && qb(!1)
          }))
        },
        askingPublishingPolicy: Yb,
        answerPublishingPolicy: function(bb) {
          Zb(!1), bb && qb(!0, gb.K)
        },
        editSourceWorld: function() {
          Rb("Loading"), Ub.c.getSourceWorld(jb.schematicId).then((bb => {
            Ib.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, Lb.k)("other"), xb((0, Hb.b)("classic", bb)), null === mb || void 0 === mb || mb()
          })).catch((bb => {
            console.error("Failed to get source world:", bb), Rb("Error"), setTimeout((() => {
              Rb("Enter")
            }), 1e3)
          }))
        },
        playGame: function() {
          Ib.gameBridge.send("leaveGame", {
            reloadPath: "/"
          }), xb(Gb()), null === mb || void 0 === mb || mb()
        }
      }
    }
  },
  5857: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => pb,
      e: () => Ub,
      g: () => lb,
      h: () => Cb,
      i: () => Lb,
      j: () => tb
    });
    var eb = Mb(5859),
      Hb = Mb(5868);
    const pb = !1,
      Vb = eb.k.map((bb => {
        const wb = [];
        for (let pb = 1; pb <= bb.reach; pb++) wb.push(Hb.g[(0, eb.h)(bb.source, pb)].id);
        const Mb = "water" === bb.family;
        return Object.freeze({
          name: bb.kind,
          family: bb.family,
          reach: bb.reach,
          stepTicks: Mb ? 5 : 10,
          slopeDistance: Mb ? 4 : 2,
          sourceId: Hb.g[bb.source].id,
          fallingId: Hb.g[(0, eb.e)(bb.source)].id,
          flowingIds: Object.freeze(wb),
          makesSources: Mb,
          stillId: Hb.g[bb.still].id
        })
      })),
      gb = new Map;
    for (const Eb of Vb) gb.set(Eb.sourceId, Object.freeze({
      kind: Eb,
      state: "source",
      distance: 0
    })), gb.set(Eb.fallingId, Object.freeze({
      kind: Eb,
      state: "falling",
      distance: 0
    })), Eb.flowingIds.forEach(((bb, wb) => {
      gb.set(bb, Object.freeze({
        kind: Eb,
        state: "flowing",
        distance: wb + 1
      }))
    }));

    function lb(bb) {
      return Vb.find((wb => wb.name === bb))
    }

    function Lb(bb) {
      return null === bb ? void 0 : gb.get(bb)
    }
    const Ib = new Uint8Array(65536);
    for (const [Eb, Fb] of gb) Ib[Eb] = "source" === Fb.state ? 1 : 2;
    const Ob = new Map;
    for (const Eb of Vb) Ob.set(Eb.stillId, Eb.family);

    function Ub(bb) {
      var wb, Mb;
      return null !== (wb = null === (Mb = Lb(bb)) || void 0 === Mb ? void 0 : Mb.kind.family) && void 0 !== wb ? wb : tb(bb)
    }

    function tb(bb) {
      var wb;
      return null === bb ? null : null !== (wb = Ob.get(bb)) && void 0 !== wb ? wb : null
    }
    Hb.g.Obsidian.id, Hb.g["Messy Stone"].id;

    function Cb() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {
        let bb = 0;
        for (const wb of Vb) bb = Math.max(bb, wb.stillId, wb.sourceId, wb.fallingId, ...wb.flowingIds);
        return bb
      }() + 1;
      const wb = new Uint8Array(bb);
      for (const Mb of Vb) {
        const eb = ("water" === Mb.family ? 1 : 2) << 4;
        for (const Hb of [Mb.stillId, Mb.sourceId, Mb.fallingId, ...Mb.flowingIds]) Hb < bb && (wb[Hb] = eb)
      }
      return wb
    }
  },
  5850: () => {}
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);