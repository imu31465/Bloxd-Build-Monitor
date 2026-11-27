export const id = 120;
export const ids = [120];
export const modules = {
  5751: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => xr,
      i: () => pr,
      m: () => mr
    });
    Qr(5753);
    var Zr = Qr(1251),
      Wr = Qr(1155),
      ar = Qr.n(Wr),
      jr = Qr(1489),
      Ir = (Qr(72), Qr(5065)),
      fr = Qr(1448),
      Er = Qr(1338);

    function pr(rr) {
      let {
        children: Sr,
        label: Qr,
        className: Wr,
        circleInfoText: Ir,
        disabled: pr,
        onLabelClick: xr
      } = rr;
      const {
        t: mr
      } = (0, Zr.E)(), Nr = (0, Er.jsxs)("div", {
        className: ar()("Label", {
          ClickableLabel: void 0 !== xr
        }),
        onClick: xr,
        children: [mr(Qr), Ir && (0, Er.jsx)(fr.c, {
          name: "circle-info"
        })]
      });
      return (0, Er.jsxs)("div", {
        className: ar()("LabeledInput", {
          [Wr]: Wr,
          DisabledLabelInput: pr
        }),
        children: [Ir && (0, Er.jsx)(jr.f, {
          tooltipInner: (0, Er.jsx)("div", {
            className: "LabeledInputTooltip",
            children: mr(Ir)
          }),
          children: Nr
        }), !Ir && Nr, Sr]
      })
    }

    function xr(rr) {
      let {
        checked: Sr,
        setChecked: Qr,
        disabled: Zr = !1
      } = rr;
      return (0, Er.jsx)("div", {
        className: "OtherInput ClickableOtherInput",
        "data-pad-focusable": !0,
        "aria-disabled": Zr || void 0,
        onClick: rr => {
          Zr || Qr(!Sr)
        },
        children: (0, Er.jsx)(Ir.e, {
          checked: Sr,
          onChange: rr => {
            Qr(rr.target.checked)
          },
          disabled: Zr
        })
      })
    }

    function mr(rr) {
      let {
        checked: Sr,
        setChecked: Qr,
        disabled: Zr
      } = rr;
      return (0, Er.jsx)("div", {
        className: ar()("SwitchContainer", {
          SwitchContainerDisabled: Zr
        }),
        onClick: () => {
          Zr || Qr(!Sr)
        },
        children: (0, Er.jsx)(Ir.e, {
          className: "SwitchCheckbox",
          checked: Sr,
          onChange: rr => {
            Qr(rr.target.checked)
          },
          disabled: !!Zr
        })
      })
    }
  },
  5762: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Er
    });
    var Zr = Qr(1155),
      Wr = Qr.n(Zr),
      ar = Qr(5384),
      jr = Qr(1251),
      Ir = Qr(1338);
    const fr = [...ar.i, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function Er(rr) {
      const {
        disabled: Sr,
        hideWrapper: Qr
      } = rr, {
        t: Zr
      } = (0, jr.E)(), Er = rr.advancedMode ? fr.map((Sr => [Sr, rr.callbacks[Sr]])) : ar.i.map((Sr => [Sr, rr.callbacks[Sr]])), xr = (0, Ir.jsx)("div", {
        className: Wr()("PluginsGrid", {
          SectionBody: !Qr
        }),
        children: Er.map((rr => {
          let [Qr, Zr] = rr;
          return (0, Ir.jsx)(pr, {
            plugin: Qr,
            callbacks: Zr,
            disabled: Sr
          }, Qr)
        }))
      });
      return Qr ? xr : (0, Ir.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, Ir.jsx)("div", {
          className: "SectionTitle",
          children: Zr("worldBuilder:pluginsSection")
        }), xr]
      })
    }

    function pr(rr) {
      let {
        plugin: Sr,
        callbacks: {
          isEnabled: Qr,
          VK: Zr
        },
        disabled: ar
      } = rr;
      const {
        t: fr
      } = (0, jr.E)(), Er = Qr();
      return (0, Ir.jsxs)("div", {
        className: Wr()("PluginCard", {
          PluginCardEnabled: Er,
          PluginCardDisabledForm: ar
        }),
        "data-pad-focusable": !0,
        "aria-disabled": ar || void 0,
        onClick: () => {
          ar || Zr(!Er)
        },
        children: [(0, Ir.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, Ir.jsx)("img", {
            src: `/textures/games/classic/customGames/${Sr}.png`,
            alt: Sr
          })
        }), (0, Ir.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, Ir.jsx)("div", {
            className: "PluginCardTitle",
            children: fr(xr[Sr])
          }), (0, Ir.jsx)("div", {
            className: "PluginCardDescription",
            children: fr(mr[Sr])
          })]
        }), (0, Ir.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: fr(Er ? "general:on" : "general:off")
        })]
      })
    }
    const xr = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      mr = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  5906: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Er
    });
    var Zr = Qr(1155),
      Wr = Qr.n(Zr),
      ar = Qr(1251),
      jr = Qr(1448),
      Ir = Qr(1338);

    function fr(rr) {
      let {
        textKey: Sr,
        allowed: Qr
      } = rr;
      const {
        t: Zr
      } = (0, ar.E)();
      return (0, Ir.jsxs)("li", {
        className: Wr()("PolicyListItem", Qr ? "Allowed" : "NotAllowed"),
        children: [(0, Ir.jsx)(jr.c, {
          name: Qr ? "check" : "x"
        }), (0, Ir.jsx)("span", {
          children: Zr(Sr)
        })]
      })
    }

    function Er(rr) {
      let {
        allowed: Sr,
        notAllowed: Qr
      } = rr;
      return (0, Ir.jsxs)("ul", {
        className: "PolicyList",
        children: [Sr.map((rr => (0, Ir.jsx)(fr, {
          textKey: rr,
          allowed: !0
        }, rr))), Qr.map((rr => (0, Ir.jsx)(fr, {
          textKey: rr,
          allowed: !1
        }, rr)))]
      })
    }
  },
  5901: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => er,
      f: () => Kr
    });
    var Zr = Qr(72),
      Wr = Qr(1155),
      ar = Qr.n(Wr),
      jr = Qr(92),
      Ir = Qr(2991),
      fr = Qr(1251),
      Er = Qr(5751),
      pr = Qr(1448),
      xr = Qr(1481),
      mr = Qr(1576),
      Nr = Qr(5338),
      Ur = Qr(5906),
      tr = Qr(1338);

    function hr(rr) {
      return (0, jr.createPortal)((0, tr.jsx)(xr.e, {
        ...rr
      }), document.body)
    }
    const zr = Ir.y.map((rr => `worldBuilder:publishingPolicy_${rr}`)),
      Yr = Object.keys(Ir.A).map((rr => `worldBuilder:publishingPolicy_${rr}`));

    function nr(rr) {
      let {
        onScrolledToEnd: Sr
      } = rr;
      const Qr = (0, Zr.useRef)(null),
        {
          after: Wr
        } = (0, Nr.b)(Qr, "y");
      return (0, Zr.useEffect)((() => {
        Wr || null === Sr || void 0 === Sr || Sr()
      }), [Wr, Sr]), (0, tr.jsx)("div", {
        ref: Qr,
        className: ar()("PublishingPolicyRows", {
          PublishingPolicyRowsMoreBelow: Wr
        }),
        tabIndex: 0,
        "data-pad-focusable": !0,
        children: (0, tr.jsx)(Ur.c, {
          allowed: zr,
          notAllowed: Yr
        })
      })
    }

    function er(rr) {
      let {
        onAnswer: Sr
      } = rr;
      const [Qr, Wr] = (0, Zr.useState)(!1), [ar, jr] = (0, Zr.useState)(!1), Ir = (0, Zr.useCallback)((() => {
        jr(!0)
      }), []);
      return (0, tr.jsx)(hr, {
        close: () => {
          Sr(!1)
        },
        disableExitButton: !0,
        body: (0, tr.jsxs)(xr.j, {
          className: "PublishingPolicyPopup",
          title: "worldBuilder:publishingPolicy",
          padStartsOn: "content",
          confirm: {
            text: "worldBuilder:publishAsGame",
            disabled: !Qr,
            onClick: () => {
              Sr(!0)
            }
          },
          cancel: {
            text: "general:cancel",
            onClick: () => {
              Sr(!1)
            }
          },
          children: [(0, tr.jsx)(nr, {
            onScrolledToEnd: Ir
          }), (0, tr.jsx)(Er.i, {
            className: "PublishingPolicyAgree",
            label: ar ? "worldBuilder:agreeToPublishingPolicy" : "worldBuilder:scrollToAgreeToPublishingPolicy",
            disabled: !ar,
            onLabelClick: () => {
              Wr(!Qr)
            },
            children: (0, tr.jsx)(Er.e, {
              checked: Qr,
              setChecked: Wr,
              disabled: !ar
            })
          })]
        })
      })
    }

    function Kr() {
      const {
        t: rr
      } = (0, fr.E)(), [Sr, Qr] = (0, Zr.useState)(!1);
      return (0, tr.jsxs)(tr.Fragment, {
        children: [(0, tr.jsxs)(mr.U, {
          className: "PublishingPolicyLink",
          onClick: () => {
            Qr(!0)
          },
          children: [(0, tr.jsx)(pr.c, {
            name: "shield-halved"
          }), " ", rr("worldBuilder:publishingPolicy")]
        }), Sr && (0, tr.jsx)(hr, {
          close: () => {
            Qr(!1)
          },
          body: (0, tr.jsx)(xr.j, {
            className: "PublishingPolicyPopup",
            title: "worldBuilder:publishingPolicy",
            children: (0, tr.jsx)(nr, {})
          })
        })]
      })
    }
  },
  5745: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      f: () => mS,
      c: () => xS,
      e: () => pS,
      h: () => NS
    });
    var Zr = Qr(72),
      Wr = Qr(1475),
      ar = Qr(1576),
      jr = Qr(1804),
      Ir = Qr(1251),
      fr = Qr(1444),
      Er = Qr(1489),
      pr = Qr(1448),
      xr = Qr(1279),
      mr = Qr(1155),
      Nr = Qr.n(mr),
      Ur = Qr(360),
      tr = Qr(5384),
      hr = Qr(5767),
      zr = Qr(1287),
      Yr = Qr(5751),
      nr = Qr(4323),
      er = Qr(5762),
      Kr = Qr(1338);

    function yr(rr) {
      let {
        icon: Sr,
        title: Qr,
        disabled: Zr,
        children: Wr
      } = rr;
      return (0, Kr.jsxs)("div", {
        className: Nr()("ManageCard", {
          ManageCardDisabled: Zr
        }),
        children: [(0, Kr.jsxs)("div", {
          className: "ManageCardHead",
          children: [(0, Kr.jsx)("div", {
            className: "ManageCardIcon",
            children: (0, Kr.jsx)(pr.c, {
              name: Sr
            })
          }), (0, Kr.jsx)("div", {
            children: (0, Kr.jsx)("h2", {
              className: "ManageCardTitle",
              children: Qr
            })
          })]
        }), (0, Kr.jsxs)("div", {
          className: "ManageCardBody",
          children: [Wr, Zr && (0, Kr.jsx)("div", {
            className: "ManageCardDisabledOverlay"
          })]
        })]
      })
    }

    function Br(rr) {
      let {
        label: Sr,
        caption: Qr,
        children: Zr
      } = rr;
      return (0, Kr.jsxs)("div", {
        className: "ManageStackedField",
        children: [(0, Kr.jsx)("div", {
          className: "ManageStackedFieldLabel",
          children: Sr
        }), Zr, Qr && (0, Kr.jsx)("div", {
          className: "ManageStackedFieldCaption",
          children: Qr
        })]
      })
    }

    function Tr(rr) {
      let {
        label: Sr,
        caption: Qr,
        disabled: Zr,
        children: Wr
      } = rr;
      return (0, Kr.jsxs)("div", {
        className: Nr()("ManageField", {
          ManageFieldDisabled: Zr
        }),
        children: [(0, Kr.jsxs)("div", {
          className: "ManageFieldText",
          children: [(0, Kr.jsx)("div", {
            className: "ManageFieldLabel",
            children: Sr
          }), (0, Kr.jsx)("div", {
            className: "ManageFieldCaption",
            children: Qr
          })]
        }), (0, Kr.jsx)("div", {
          className: "ManageFieldControl",
          children: Wr
        })]
      })
    }

    function vr(rr) {
      var Sr, Qr;
      let {
        schematicData: Zr,
        updateSchematicData: Wr,
        publishFormEnabled: ar,
        formEnabled: jr
      } = rr;
      const {
        t: fr
      } = (0, Ir.E)(), Er = !ar, pr = {
        tpRequests: {
          isEnabled: () => !Zr.disableTpRequests,
          VK: rr => Wr("disableTpRequests", !rr)
        },
        spawnProtection: {
          isEnabled: () => !Zr.disableSpawnProtection,
          VK: rr => Wr("disableSpawnProtection", !rr)
        },
        spawnReset: {
          isEnabled: () => !!Zr.enableSpawnReset,
          VK: rr => Wr("enableSpawnReset", rr)
        },
        smpMarketplace: {
          isEnabled: () => !!Zr.enableSmpMarketplace,
          VK: rr => Wr("enableSmpMarketplace", rr)
        },
        survivalGuns: {
          isEnabled: () => !!Zr.enableSurvivalGuns,
          VK: rr => Wr("enableSurvivalGuns", rr)
        },
        fallDamage: {
          isEnabled: () => !Zr.disableFallDamage,
          VK: rr => Wr("disableFallDamage", !rr)
        },
        dayNight: {
          isEnabled: () => !!Zr.enableDayNight,
          VK: rr => Wr("enableDayNight", rr)
        }
      };
      return (0, Kr.jsxs)(Kr.Fragment, {
        children: [!1 === Zr.schematicContainsSpawnBlock && (0, Kr.jsx)("div", {
          className: "ManageWarningBanner",
          children: fr("worldBuilder:mustContainSpawnBlock")
        }), (0, Kr.jsxs)("div", {
          className: "ManageSettingsGrid",
          children: [(0, Kr.jsxs)(yr, {
            icon: "globe",
            title: fr("worldBuilder:worldRulesSection"),
            disabled: !jr,
            children: [(0, Kr.jsx)(Tr, {
              label: fr("classic:defaultGamemode"),
              caption: fr("classic:defaultGamemodeDescription"),
              disabled: Er,
              children: (0, Kr.jsx)(nr.c, {
                controlClassName: "ManageDropdown",
                options: tr.A.map((rr => ({
                  value: rr,
                  label: Ur.t[rr]
                }))),
                value: Zr.defaultGamemode,
                onChange: rr => Wr("defaultGamemode", rr.value)
              })
            }), (0, Kr.jsx)(Tr, {
              label: fr("classic:voidDeathHeight"),
              caption: fr("classic:voidDeathHeightDescription"),
              disabled: Er,
              children: (0, Kr.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, Kr.jsx)("input", {
                  type: "number",
                  max: zr.K,
                  value: null !== (Sr = Zr.voidDeathHeight) && void 0 !== Sr ? Sr : "",
                  onChange: rr => {
                    const Sr = parseInt(rr.target.value);
                    Wr("voidDeathHeight", Sr)
                  }
                }), (0, Kr.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: fr("worldBuilder:blocksUnit")
                })]
              })
            }), (0, Kr.jsx)(Tr, {
              label: fr("classic:worldBorder"),
              caption: fr("classic:worldBorderDescription"),
              disabled: Er,
              children: (0, Kr.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, Kr.jsx)("input", {
                  type: "number",
                  min: zr.V,
                  max: zr.O,
                  placeholder: fr("worldBuilder:noWorldBorderLimit"),
                  value: null !== (Qr = Zr.worldBorder) && void 0 !== Qr ? Qr : "",
                  onChange: rr => {
                    const Sr = parseInt(rr.target.value);
                    Wr("worldBorder", isNaN(Sr) ? null : Sr)
                  }
                }), (0, Kr.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: fr("worldBuilder:blocksUnit")
                })]
              })
            }), (0, Kr.jsx)(Tr, {
              label: fr("classic:disableMobs"),
              caption: fr("classic:disableMobsDescription"),
              disabled: Er,
              children: (0, Kr.jsx)(Yr.m, {
                checked: Zr.disableMobs,
                setChecked: rr => Wr("disableMobs", rr),
                disabled: Er
              })
            })]
          }), (0, Kr.jsxs)(yr, {
            icon: "user-group",
            title: fr("worldBuilder:playerAndLobbySection"),
            disabled: !jr,
            children: [(0, Kr.jsx)(Tr, {
              label: fr("classic:disableKeepInventory"),
              caption: fr("classic:disableKeepInventoryDescription"),
              disabled: Er,
              children: (0, Kr.jsx)(Yr.m, {
                checked: Zr.disableKeepInventory,
                setChecked: rr => Wr("disableKeepInventory", rr),
                disabled: Er
              })
            }), (0, Kr.jsx)(Tr, {
              label: fr("classic:persistInventory"),
              caption: fr("classic:persistInventoryDescription"),
              disabled: Er,
              children: (0, Kr.jsx)(nr.c, {
                controlClassName: "ManageDropdown",
                options: tr.m.map((rr => ({
                  value: rr,
                  label: Ur.i[rr]
                }))),
                value: Zr.persistInventory,
                onChange: rr => Wr("persistInventory", rr.value)
              })
            }), (0, Kr.jsx)(Tr, {
              label: fr("classic:persistWorld"),
              caption: fr("classic:persistWorldDescription"),
              disabled: Er,
              children: (0, Kr.jsx)(Yr.m, {
                checked: Zr.persistWorld,
                setChecked: rr => Wr("persistWorld", rr),
                disabled: Er
              })
            }), hr.e && Zr.persistWorld && (0, Kr.jsx)(Tr, {
              label: fr("classic:fluidFlow"),
              caption: fr("classic:fluidFlowDescription"),
              disabled: Er,
              children: (0, Kr.jsx)(Yr.m, {
                checked: Zr.enableFluidFlow,
                setChecked: rr => Wr("enableFluidFlow", rr),
                disabled: Er
              })
            }), (0, Kr.jsx)(Tr, {
              label: fr("classic:disableLobbySpawn"),
              caption: fr("classic:disableLobbySpawnDescription"),
              disabled: Er,
              children: (0, Kr.jsx)(Yr.m, {
                checked: Zr.disableLobbySpawn,
                setChecked: rr => Wr("disableLobbySpawn", rr),
                disabled: Er
              })
            }), (0, Kr.jsx)(Tr, {
              label: fr("classic:hideLobbyCode"),
              caption: fr("classic:hideLobbyCodeDescription"),
              disabled: Er,
              children: (0, Kr.jsx)(Yr.m, {
                checked: Zr.hideLobbyCode,
                setChecked: rr => Wr("hideLobbyCode", rr),
                disabled: Er
              })
            })]
          })]
        }), (0, Kr.jsx)(yr, {
          icon: "layer-group",
          title: fr("worldBuilder:pluginsSection"),
          disabled: !jr,
          children: (0, Kr.jsx)(er.d, {
            callbacks: pr,
            disabled: Er,
            advancedMode: !0,
            hideWrapper: !0
          })
        })]
      })
    }
    var Or = Qr(5895),
      Lr = Qr(1710),
      lr = Qr(1629),
      Xr = Qr(4746),
      Pr = Qr(1181),
      Hr = Qr(5731),
      qr = Qr(5919),
      Rr = Qr(1578),
      gr = Qr(5910),
      Cr = Qr(5906);
    const Mr = 50,
      Gr = .3;
    async function kr(rr) {
      const Sr = await
      function(rr) {
        return new Promise(((Sr, Qr) => {
          const Zr = new FileReader;
          Zr.onload = () => Sr(Zr.result), Zr.onerror = Qr, Zr.readAsDataURL(rr)
        }))
      }(rr), Qr = await
      function(rr) {
        return new Promise(((Sr, Qr) => {
          const Zr = new Image;
          Zr.onload = () => Sr(Zr), Zr.onerror = () => Qr(new Error("Failed to load image")), Zr.src = rr
        }))
      }(Sr);
      if (Qr.naturalHeight > Qr.naturalWidth) throw new Ar;
      const Zr = 1024 * Mr,
        {
          dataUrl: Wr,
          finalQuality: ar
        } = function(rr, Sr) {
          const Qr = document.createElement("canvas");
          Qr.width = rr.naturalWidth, Qr.height = rr.naturalHeight, Qr.getContext("2d").drawImage(rr, 0, 0);
          let Zr = .92,
            Wr = Qr.toDataURL("image/jpeg", Zr);
          for (; .75 * Wr.length > Sr && Zr > .05;) Zr -= .05, Wr = Qr.toDataURL("image/jpeg", Zr);
          return {
            dataUrl: Wr,
            finalQuality: Zr
          }
        }(Qr, Zr);
      if (Math.ceil(.75 * Wr.length) > Zr) throw new Vr;
      return {
        base64Jpg: Wr,
        heavilyCompressed: ar < Gr
      }
    }
    class Ar extends Error {}
    class Vr extends Error {}

    function ir(rr) {
      var Sr;
      let {
        schematicId: Qr,
        hasReadUploadPolicy: Wr,
        onPolicyValidationError: fr,
        onThumbnailReady: Er
      } = rr;
      const {
        t: mr
      } = (0, Ir.E)(), [Ur, tr] = (0, Zr.useState)(null), [hr, zr] = (0, Zr.useState)(""), [Yr, nr] = (0, Zr.useState)(""), [er, yr] = (0, Zr.useState)(!0), [Br, Tr] = (0, Zr.useState)(!1), vr = (0, Zr.useRef)(!1), [Or, Lr] = (0, Zr.useState)(null), [lr, Xr] = (0, Zr.useState)(!1), [Pr, Hr] = (0, Zr.useState)(!1), Rr = (0, Zr.useRef)(0), {
        getRootProps: gr,
        getInputProps: Cr,
        isDragActive: Mr
      } = (0, qr.b)({
        accept: {
          "image/*": [".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp"]
        },
        multiple: !1,
        onDrop: async rr => {
          if (0 === rr.length) return;
          const Sr = rr[0],
            Qr = ++Rr.current;
          Lr(null), Xr(!1), tr(null), zr(Sr.name);
          try {
            const rr = await kr(Sr);
            if (Qr !== Rr.current) return;
            tr(rr), Xr(rr.heavilyCompressed)
          } catch (Zr) {
            if (Qr !== Rr.current) return;
            Lr(mr(Zr instanceof Ar ? "thumbnail:portraitImagesNotAllowed" : Zr instanceof Vr ? "thumbnail:couldNotCompressImage" : "thumbnail:failedToUploadImage"))
          }
        },
        useFsAccessApi: !1
      }), Gr = hr.length <= 30 ? hr : `${hr.slice(0,27)}...`, ir = null !== (Sr = null === Ur || void 0 === Ur ? void 0 : Ur.base64Jpg) && void 0 !== Sr ? Sr : null, wr = Yr.trim(), cr = wr.length >= xr.o && wr.length <= xr.n, Fr = Pr && !Ur && !Or, or = Pr && !cr;
      return (0, Kr.jsxs)("div", {
        className: "ThumbnailUploadContainer",
        children: [(0, Kr.jsxs)("div", {
          ...gr({
            className: Nr()("ThumbnailUploadDropzone", {
              ActiveDrag: Mr,
              ValidationError: Fr
            })
          }),
          children: [(0, Kr.jsx)("input", {
            ...Cr()
          }), !Mr && ir ? (0, Kr.jsxs)(Kr.Fragment, {
            children: [(0, Kr.jsxs)("div", {
              className: "ThumbnailAspectPreviews",
              children: [(0, Kr.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, Kr.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "1:1"
                }), (0, Kr.jsx)("div", {
                  className: "ThumbnailAspectFrame Square",
                  children: (0, Kr.jsx)("img", {
                    src: ir,
                    alt: "1:1 preview"
                  })
                })]
              }), (0, Kr.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, Kr.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "16:9"
                }), (0, Kr.jsx)("div", {
                  className: "ThumbnailAspectFrame Wide",
                  children: (0, Kr.jsx)("img", {
                    src: ir,
                    alt: "16:9 preview"
                  })
                })]
              })]
            }), (0, Kr.jsxs)("div", {
              children: [(0, Kr.jsx)("div", {
                className: "ThumbnailUploadInstructions Active",
                children: Gr
              }), (0, Kr.jsx)("div", {
                className: "ThumbnailUploadInstructions Preview",
                children: mr("thumbnail:preview")
              })]
            })]
          }) : (0, Kr.jsxs)(Kr.Fragment, {
            children: [(0, Kr.jsx)("div", {
              className: "ThumbnailUploadIcon",
              children: (0, Kr.jsx)(pr.c, {
                name: "image"
              })
            }), (0, Kr.jsx)("div", {
              className: "ThumbnailUploadInstructions",
              children: mr("thumbnail:dragImageHere")
            })]
          })]
        }), Fr && (0, Kr.jsx)("div", {
          className: "ThumbnailUploadError",
          children: mr("thumbnail:imageRequired")
        }), (0, Kr.jsx)(jr.b, {
          className: Nr()("ThumbnailUploadNameInput", {
            ValidationError: or
          }),
          placeholderText: mr("thumbnail:thumbnailName"),
          defaultValue: Yr,
          onValueChange: rr => {
            nr(rr)
          },
          maxLength: xr.n
        }), or && (0, Kr.jsx)("div", {
          className: "ThumbnailUploadError",
          children: mr("thumbnail:nameRequired", {
            min: xr.o,
            max: xr.n
          })
        }), (0, Kr.jsxs)("label", {
          className: "ThumbnailUploadCheckbox",
          children: [(0, Kr.jsx)("input", {
            type: "checkbox",
            checked: er,
            onChange: rr => {
              yr(rr.target.checked)
            }
          }), mr("thumbnail:setAsThumbnailOnceApproved")]
        }), lr && (0, Kr.jsx)("div", {
          className: "ThumbnailUploadWarning",
          children: mr("thumbnail:heavyCompressionWarning")
        }), Or && (0, Kr.jsx)("div", {
          className: "ThumbnailUploadError",
          children: Or
        }), (0, Kr.jsx)(ar.p, {
          disabled: Br,
          className: "ThumbnailUploadButton",
          onClick: async () => {
            if (Hr(!0), !vr.current && Ur && cr && Wr) {
              vr.current = !0, Tr(!0), Lr(null);
              try {
                await Er(Ur.base64Jpg, wr, er ? Qr : null)
              } catch (rr) {
                Lr(rr.errorMessageForUser ? mr(rr.errorMessageForUser, rr.errorMessageTranslationParams) : mr("thumbnail:failedToUploadImage"))
              } finally {
                vr.current = !1, Tr(!1)
              }
            } else Wr || fr()
          },
          children: mr(Br ? "thumbnail:processing" : "thumbnail:uploadThumbnail")
        })]
      })
    }
    const wr = 2e3;

    function cr(rr) {
      let {
        schematicId: Sr,
        ownedThumbnailCount: Qr,
        onClose: Wr,
        onThumbnailReady: ar
      } = rr;
      const {
        t: jr
      } = (0, Ir.E)(), {
        userContext: Er
      } = (0, Pr.c)(), [mr, Ur] = (0, Zr.useState)(!1), [tr, hr] = (0, Zr.useState)(!1), [zr, Yr] = (0, Zr.useState)(!1), nr = (0, Zr.useRef)(), {
        loading: er,
        eligibility: yr
      } = (0, gr.e)(), Br = (0, gr.g)();
      (0, Zr.useEffect)((() => () => {
        clearTimeout(nr.current)
      }), []);
      const Tr = [];
      Er.isLoggedIn() || Tr.push(jr("thumbnail:mustBeLoggedInToUpload")), Qr >= xr.Z && Tr.push(jr("thumbnail:thumbnailLimitReachedPleaseDelete", {
        max: xr.Z
      }));
      const vr = null === yr || void 0 === yr ? void 0 : yr.thumbnailUploadWait;
      if (vr && Tr.push(Br("accountAge" === vr.reason ? "thumbnail:accountTooNewUntil" : "thumbnail:uploadCooldownUntil", vr.until)), !mr && Tr.length > 0) return (0, Kr.jsxs)("div", {
        className: "ThumbnailUploaderInner",
        children: [(0, Kr.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: jr("thumbnail:cannotUploadThumbnail")
        }), Tr.map((rr => (0, Kr.jsxs)("div", {
          className: "CannotUploadThumbnailItem",
          children: [(0, Kr.jsx)(pr.c, {
            name: "triangle-exclamation"
          }), (0, Kr.jsx)("span", {
            children: rr
          })]
        }, rr)))]
      });
      if (er) return (0, Kr.jsx)("div", {
        className: "ThumbnailUploaderInner",
        children: (0, Kr.jsx)(fr.c, {})
      });
      return (0, Kr.jsxs)("div", {
        className: Nr()("ThumbnailUploaderInner", {
          ThumbnailUploaderSuccess: mr
        }),
        children: [mr && (0, Kr.jsxs)("div", {
          className: "ThumbnailUploadSuccessOverlay",
          children: [(0, Kr.jsxs)("div", {
            className: "ThumbnailUploadSuccessIcon FullyFancyText AnimFadeInScaleUp",
            children: [(0, Kr.jsx)(pr.c, {
              name: "check"
            }), (0, Kr.jsx)(Rr.e, {})]
          }), (0, Kr.jsx)("div", {
            className: "ThumbnailUploadSuccessText AnimFadeInScaleUp",
            children: jr("thumbnail:thumbnailUploaded")
          })]
        }), (0, Kr.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: jr("thumbnail:uploadThumbnail")
        }), (0, Kr.jsxs)("div", {
          className: "ThumbnailUploaderBody",
          children: [(0, Kr.jsxs)("div", {
            className: "ThumbnailUploaderLeft",
            children: [(0, Kr.jsx)("h3", {
              className: "SchematicPopupSubtitle",
              children: jr("thumbnail:chooseImage", {
                maxSizeKb: Mr
              })
            }), (0, Kr.jsx)(ir, {
              schematicId: Sr,
              hasReadUploadPolicy: tr,
              onPolicyValidationError: () => {
                Yr(!0)
              },
              onThumbnailReady: async (rr, Sr, Qr) => {
                await ar(rr, Sr, Qr), Ur(!0), nr.current = setTimeout(Wr, wr)
              }
            })]
          }), (0, Kr.jsxs)("div", {
            className: "ThumbnailUploadPolicy",
            children: [(0, Kr.jsx)("h3", {
              className: "ThumbnailUploadPolicyTitle",
              children: jr("thumbnail:uploadPolicy")
            }), (0, Kr.jsx)(Cr.c, {
              allowed: ["thumbnail:policyFollowGuidelines", "thumbnail:policyInGameAssets", "thumbnail:policyLimitText"],
              notAllowed: ["thumbnail:policyCopyrightContent", "thumbnail:policyOutOfGameAssets", "thumbnail:policyBloxdTags", "thumbnail:policyMustReflectGame"]
            }), (0, Kr.jsxs)("label", {
              className: Nr()("ThumbnailUploadCheckbox Policy", {
                ValidationError: zr && !tr
              }),
              children: [(0, Kr.jsx)("input", {
                type: "checkbox",
                checked: tr,
                onChange: rr => {
                  hr(rr.target.checked)
                }
              }), jr("thumbnail:agreeToUploadPolicy")]
            }), zr && !tr && (0, Kr.jsx)("div", {
              className: "ThumbnailPolicyError",
              children: jr("thumbnail:policyRequired")
            })]
          })]
        })]
      })
    }

    function Fr(rr) {
      let {
        imageUrl: Sr,
        thumbnailName: Qr,
        onClose: Zr
      } = rr;
      const {
        t: Wr
      } = (0, Ir.E)();
      return (0, Kr.jsxs)("div", {
        className: "ThumbnailDeleteConfirm",
        children: [(0, Kr.jsx)("div", {
          className: "ThumbnailDeleteConfirmTitle",
          children: Wr("thumbnail:deleteThumbnail")
        }), (0, Kr.jsxs)("div", {
          className: "ThumbnailDeleteConfirmImageContainer",
          children: [null !== Sr && (0, Kr.jsx)("img", {
            className: "ThumbnailDeleteConfirmImage",
            src: Sr,
            alt: Qr
          }), (0, Kr.jsx)("div", {
            className: "ThumbnailGridItemLabel",
            children: Qr
          })]
        }), (0, Kr.jsx)("div", {
          className: "ThumbnailDeleteConfirmSubtitle",
          children: Wr("thumbnail:deleteThumbnailConfirmation")
        }), (0, Kr.jsxs)("div", {
          className: "ThumbnailDeleteConfirmButtons",
          children: [(0, Kr.jsxs)(ar.L, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => Zr(!0),
            children: [(0, Kr.jsx)(pr.c, {
              name: "trash-can"
            }), " ", Wr("general:delete")]
          }), (0, Kr.jsx)(ar.k, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => Zr(!1),
            children: Wr("general:cancel")
          })]
        })]
      })
    }
    var or = Qr(215);
    const br = ["thumbnail:policyFollowGuidelines"],
      Jr = {
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
          policyRows: br,
          example: "thumbnail:rejectionSexualExample",
          fix: "thumbnail:rejectionSexualFix"
        },
        "thumbnail-substances-content": {
          policyRows: br,
          example: "thumbnail:rejectionSubstancesExample",
          fix: "thumbnail:rejectionSubstancesFix"
        },
        "thumbnail-violent-gore-content": {
          policyRows: br,
          example: "thumbnail:rejectionViolenceExample",
          fix: "thumbnail:rejectionViolenceFix"
        }
      };

    function Dr(rr) {
      let {
        rejectedThumbnails: Sr,
        isAcknowledging: Qr,
        onAcknowledge: Zr
      } = rr;
      const {
        t: Wr
      } = (0, Ir.E)();
      return (0, Kr.jsxs)("div", {
        className: "ManageWarningBanner ThumbnailRejectionNotice",
        children: [(0, Kr.jsx)("div", {
          className: "ThumbnailRejectionNoticeTitle",
          children: Wr("thumbnail:rejectedByModerators")
        }), Sr.map((rr => (0, Kr.jsx)(dr, {
          rejected: rr
        }, rr.thumbnail.id))), (0, Kr.jsx)(ar.p, {
          className: "ThumbnailRejectionNoticeButton",
          onClick: Zr,
          disabled: Qr,
          children: Qr ? (0, Kr.jsx)(fr.c, {}) : Wr("thumbnail:gotIt")
        })]
      })
    }

    function dr(rr) {
      var Sr;
      let {
        rejected: {
          thumbnail: Qr,
          rejection: Zr
        }
      } = rr;
      const {
        t: Wr
      } = (0, Ir.E)(), ar = null !== (Sr = (0, or.b)(Jr, Zr.policyId)) && void 0 !== Sr ? Sr : Jr["custom-game-bad-thumbnail"], jr = new Date(Zr.at).toLocaleDateString();
      return (0, Kr.jsxs)("div", {
        className: "RejectedThumbnail",
        children: [(0, Kr.jsxs)("div", {
          className: "RejectedThumbnailImage",
          children: [null !== Qr.preview && (0, Kr.jsx)("img", {
            src: Qr.preview,
            alt: Qr.name
          }), null === Qr.preview && (0, Kr.jsx)(pr.c, {
            name: "image-slash"
          })]
        }), (0, Kr.jsxs)("div", {
          className: "RejectedThumbnailDetails",
          children: [(0, Kr.jsx)("div", {
            className: "RejectedThumbnailName",
            children: Qr.name
          }), (0, Kr.jsx)("div", {
            children: null !== Zr.gameName ? Wr("thumbnail:rejectedGameAndDate", {
              game: Zr.gameName,
              date: jr
            }) : jr
          }), null !== Zr.reason && (0, Kr.jsx)("div", {
            children: Wr("creatorModeration:moderatorNote", {
              reason: Zr.reason
            })
          }), ar.policyRows.length > 0 && (0, Kr.jsx)("ul", {
            className: "RejectedThumbnailPolicyRows",
            children: ar.policyRows.map((rr => (0, Kr.jsxs)("li", {
              children: [(0, Kr.jsx)(pr.c, {
                name: "x"
              }), (0, Kr.jsx)("span", {
                children: Wr(rr)
              })]
            }, rr)))
          }), (0, Kr.jsxs)("div", {
            children: [null !== ar.example && null === Zr.reason && `${Wr(ar.example)} `, Wr(ar.fix)]
          })]
        })]
      })
    }
    var sr = Qr(1262);

    function ur(rr) {
      return null !== rr.preview ? rr.preview : rr.approved ? `${sr.clientSideServerUrls.s3Url}/${(0,Lr.g)(rr.id)}` : null
    }

    function rS(rr) {
      return null !== rr.pendingKey ? {
        pendingKey: rr.pendingKey
      } : {
        thumbnailId: rr.id
      }
    }

    function SS(rr) {
      var Sr, Qr;
      let {
        schematicData: jr,
        updateSchematicData: Er,
        publishFormEnabled: xr,
        onClose: mr
      } = rr;
      const {
        t: Ur
      } = (0, Ir.E)(), {
        userContext: tr,
        isUserContextUpdating: hr
      } = (0, Pr.c)(), zr = (0, Xr.b)(), [Yr, nr] = (0, Zr.useState)([]), [er, yr] = (0, Zr.useState)([]), [Br, Tr] = (0, Zr.useState)(!0), [vr, Or] = (0, Zr.useState)(!1), [Lr, qr] = (0, Zr.useState)(null !== (Sr = jr.customThumbnailId) && void 0 !== Sr ? Sr : null), [Rr, gr] = (0, Zr.useState)(null), Cr = (0, Zr.useRef)(null !== (Qr = jr.customThumbnailId) && void 0 !== Qr ? Qr : null), Mr = (0, Zr.useRef)(0), Gr = (0, Zr.useRef)(null), kr = (0, Zr.useRef)(null), Ar = (0, Zr.useRef)(null), Vr = (0, Zr.useRef)(!1);

      function ir(rr, Sr) {
        Ar.current && (clearTimeout(Ar.current), Ar.current = null), gr(rr), null !== rr && Sr && (Ar.current = setTimeout((() => {
          gr(null), Ar.current = null
        }), 5e3))
      }(0, Zr.useEffect)((() => () => {
        clearTimeout(kr.current), clearTimeout(Ar.current)
      }), []);
      const wr = (0, Zr.useCallback)((() => {
        Tr(!0), lr.c.getOwnedThumbnails(tr).then((rr => {
          const Sr = [],
            Qr = [];
          for (const Zr of rr.thumbnails) Zr.rejection ? Sr.push({
            thumbnail: Zr,
            rejection: Zr.rejection
          }) : Qr.push(Zr);
          Sr.sort(((rr, Sr) => Sr.rejection.at - rr.rejection.at)), Qr.sort(((rr, Sr) => {
            const Qr = rr.approved ? 1 : 0,
              Zr = (Sr.approved ? 1 : 0) - Qr;
            return 0 !== Zr ? Zr : Sr.lastUpdatedAt - rr.lastUpdatedAt
          })), yr(Sr), nr(Qr)
        })).catch((rr => {
          console.error("Failed to fetch thumbnails:", rr)
        })).finally((() => {
          Tr(!1)
        }))
      }), [tr]);
      async function or(rr, Sr, Qr) {
        return lr.c.uploadSchematicThumbnail(tr, rr, Sr, Qr).then((() => {
          ir({
            text: Ur("thumbnail:uploadedAwaitingModeration"),
            type: "success"
          }, !0), wr()
        }))
      }

      function br() {
        Mr.current = Date.now(), kr.current = null;
        const rr = Gr.current;
        Gr.current = null, ir({
          text: Ur("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), lr.c.setSchematicThumbnail(tr, jr.schematicId, rr).then((() => {
          zr.current && (ir({
            text: Ur("thumbnail:thumbnailUpdated"),
            type: "success"
          }, !0), Cr.current = rr, Er("customThumbnailId", rr), Er("customThumbnailBlurhash", void 0), Er("customThumbnailVariants", void 0))
        })).catch((rr => {
          zr.current && (ir({
            text: rr.errorMessageForUser ? Ur(rr.errorMessageForUser, rr.errorMessageTranslationParams) : Ur("thumbnail:failedToSetThumbnail"),
            type: "error"
          }, !0), qr(Cr.current))
        }))
      }

      function Jr(rr) {
        qr(rr), Gr.current = rr;
        const Sr = Date.now() - Mr.current;
        Sr >= 1e3 ? br() : (ir({
          text: Ur("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), kr.current || (kr.current = setTimeout((() => {
          br()
        }), 1e3 - Sr)))
      }
      return (0, Zr.useEffect)((() => {
        !1 === hr && wr()
      }), [hr, wr]), (0, Kr.jsxs)("div", {
        className: "BloxdForm ThumbnailSection",
        children: [(0, Kr.jsxs)("div", {
          className: "SectionTitle",
          children: [Ur("thumbnail:gameThumbnail"), Rr && (0, Kr.jsx)("span", {
            className: Nr()("ThumbnailActionMsg", `ThumbnailActionMsg--${Rr.type}`),
            children: Rr.text
          })]
        }), (0, Kr.jsxs)("div", {
          className: "SectionBody",
          children: [er.length > 0 && (0, Kr.jsx)(Dr, {
            rejectedThumbnails: er,
            isAcknowledging: vr,
            onAcknowledge: async function() {
              Or(!0);
              const rr = await Promise.allSettled(er.map((rr => {
                let {
                  thumbnail: Sr
                } = rr;
                return lr.c.deleteSchematicThumbnail(tr, rS(Sr))
              })));
              if (!zr.current) return;
              Or(!1);
              const Sr = rr.filter((rr => "rejected" === rr.status));
              Sr.length > 0 && (console.error("Failed to acknowledge some thumbnail rejections:", Sr), ir({
                text: Ur("thumbnail:failedToHideRejections"),
                type: "error"
              }, !0)), wr()
            }
          }), (0, Kr.jsxs)("div", {
            className: "ThumbnailGrid",
            children: [(0, Kr.jsxs)("div", {
              className: Nr()("ThumbnailGridItem ThumbnailGridItemDefault", {
                ThumbnailGridItemSelected: null === Lr
              }),
              onClick: () => Jr(null),
              children: [(0, Kr.jsx)(Hr.e, {
                game: {
                  schematicId: jr.schematicId,
                  imageBlurhash: jr.imageBlurhash
                }
              }), (0, Kr.jsx)("div", {
                className: "ThumbnailGridItemLabel ThumbnailDefaultLabel",
                children: Ur("general:default")
              })]
            }), Br && (0, Kr.jsx)(fr.c, {}), Yr.map((rr => {
              var Sr;
              const Qr = ur(rr);
              return (0, Kr.jsxs)("div", {
                className: Nr()("ThumbnailGridItem", {
                  ThumbnailGridItemSelected: rr.approved && Lr === rr.id,
                  ThumbnailGridItemPending: !rr.approved
                }),
                onClick: () => {
                  rr.approved && Jr(rr.id)
                },
                children: [null !== Qr && (0, Kr.jsx)("img", {
                  src: Qr,
                  alt: rr.name
                }), (0, Kr.jsx)(ar.L, {
                  className: "ThumbnailDeleteButton",
                  onClick: Sr => async function(rr, Sr) {
                    rr.stopPropagation();
                    const Qr = await Wr.NotificationProvider.showCustomPopup({
                        body: rr => (0, Kr.jsx)(Fr, {
                          imageUrl: ur(Sr),
                          thumbnailName: Sr.name,
                          onClose: Sr => {
                            Sr && (Vr.current = !0), rr()
                          }
                        }),
                        middleScreenPopupClassName: "ThumbnailDeleteConfirmPopup",
                        onClose: mr
                      }).getResult(),
                      Zr = Vr.current;
                    Vr.current = !1, Zr && !0 === Qr && (zr.current && ir({
                      text: Ur("thumbnail:deletingThumbnail"),
                      type: "info"
                    }, !1), lr.c.deleteSchematicThumbnail(tr, rS(Sr)).then((() => {
                      zr.current && (ir({
                        text: Ur("thumbnail:thumbnailDeleted"),
                        type: "success"
                      }, !0), null !== Sr.id && Cr.current === Sr.id && Jr(null), wr())
                    })).catch((rr => {
                      zr.current && ir({
                        text: rr.errorMessageForUser ? Ur(rr.errorMessageForUser, rr.errorMessageTranslationParams) : Ur("thumbnail:failedToDeleteThumbnail"),
                        type: "error"
                      }, !0)
                    })))
                  }(Sr, rr),
                  children: (0, Kr.jsx)(pr.c, {
                    name: "trash-can"
                  })
                }), rr.approved && (0, Kr.jsx)("div", {
                  className: "ThumbnailGridItemLabel",
                  children: rr.name
                }), !rr.approved && (0, Kr.jsx)("div", {
                  className: "ThumbnailUnapprovedIcon",
                  children: (0, Kr.jsx)(pr.c, {
                    name: "hourglass-clock"
                  })
                }), !rr.approved && (0, Kr.jsxs)("div", {
                  className: "ThumbnailGridItemLabel ThumbnailPendingLabel",
                  children: [rr.name, (0, Kr.jsx)("br", {}), Ur("thumbnail:pendingApproval")]
                })]
              }, null !== (Sr = rr.id) && void 0 !== Sr ? Sr : rr.pendingKey)
            })), (0, Kr.jsxs)("div", {
              className: Nr()("ThumbnailGridItem ThumbnailUploadTile", {
                ThumbnailUploadTileDisabled: !xr
              }),
              onClick: () => {
                xr && function(rr) {
                  let {
                    schematicId: Sr,
                    ownedThumbnailCount: Qr,
                    onThumbnailReady: Zr,
                    onClose: ar
                  } = rr;
                  Wr.NotificationProvider.showCustomPopup({
                    body: rr => (0, Kr.jsx)(cr, {
                      schematicId: Sr,
                      ownedThumbnailCount: Qr,
                      onClose: rr,
                      onThumbnailReady: Zr
                    }),
                    middleScreenPopupClassName: "SchematicThumbnailPopup",
                    onClose: ar,
                    unlockPointerKey: "schematicThumbnailUploaderPopup"
                  })
                }({
                  schematicId: jr.schematicId,
                  ownedThumbnailCount: Yr.length,
                  onThumbnailReady: or,
                  onClose: mr
                })
              },
              children: [(0, Kr.jsx)(pr.c, {
                name: "plus"
              }), (0, Kr.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: Ur("thumbnail:uploadThumbnail")
              })]
            })]
          })]
        })]
      })
    }
    var QS = Qr(2325),
      ZS = Qr(5943),
      WS = Qr(5945),
      aS = Qr(5991);

    function jS(rr) {
      let {
        schematicData: Sr,
        setTexturePack: Qr,
        initializeTexturePack: Wr,
        publishFormEnabled: ar
      } = rr;
      const {
        t: jr
      } = (0, Ir.E)(), [fr, Er] = (0, Zr.useState)(null), [pr, xr] = (0, Zr.useState)(null), [mr, Ur] = (0, Zr.useState)(!1), tr = (0, Xr.b)(), hr = ar && !mr, zr = Sr.customTexturePackKey;

      function Yr(rr) {
        var Sr;
        Er(rr.metaData.id), xr(null !== (Sr = rr.metaData.fromFolderName) && void 0 !== Sr ? Sr : null), (rr.metaData.id !== QS.o.CUSTOM || rr.metaData.fromFolderName) && Qr(rr)
      }
      return (0, Zr.useEffect)((() => {
        zr && (Ur(!0), (0, ZS.b)(zr).then((rr => {
          var Sr;
          tr.current && (rr ? (Er(rr.metaData.id), xr(null !== (Sr = rr.metaData.fromFolderName) && void 0 !== Sr ? Sr : null), Wr(rr)) : console.error(`No texture pack at ${zr}`))
        })).catch((rr => {
          console.error("Error fetching texture pack: ", rr)
        })).finally((() => {
          Ur(!1)
        })))
      }), [zr, Wr, tr]), (0, Kr.jsxs)("div", {
        className: "BloxdForm TexturePackSection",
        children: [(0, Kr.jsx)("div", {
          className: "SectionTitle",
          children: jr("customTexturePack:customTexturePack")
        }), (0, Kr.jsxs)("div", {
          className: "TexturePackList",
          children: [(0, Kr.jsx)("div", {
            className: Nr()("TexturePack", {
              Selected: null === fr && !mr,
              Disabled: !hr
            }),
            onClick: () => {
              hr && (Er(null), Qr(null), xr(null))
            },
            children: (0, Kr.jsx)("div", {
              className: "TexturePackName",
              children: "No Override"
            })
          }), Object.values(QS.o).map((rr => (0, Kr.jsx)(WS.g, {
            id: rr,
            isSelected: rr === fr,
            setSelected: Yr,
            disabled: !hr
          }, rr)))]
        }), fr === QS.o.CUSTOM && (0, Kr.jsx)(aS.b, {
          folderName: pr,
          onTexturePackUpdated: Yr,
          disabled: !hr,
          maxFileSizeMb: 25,
          packOwner: "customGame"
        })]
      })
    }
    var IS = Qr(6026);

    function fS(rr) {
      var Sr;
      let {
        gameCategory: Qr,
        setGameCategory: Zr,
        disabled: Wr
      } = rr;
      const jr = null !== (Sr = (0, Ur.nb)(Qr)) && void 0 !== Sr ? Sr : "other";
      return (0, Kr.jsxs)("div", {
        className: "GameCategoryPicker",
        children: [(0, Kr.jsx)(Yr.i, {
          label: "worldBuilder:gameCategoryGroup",
          className: "GameCategoryGroup",
          disabled: Wr,
          children: (0, Kr.jsx)(nr.c, {
            options: Ur.bb.map((rr => ({
              value: rr,
              label: Ur.Z[rr]
            }))),
            value: jr,
            onChange: rr => {
              rr.value !== jr && Zr(Ur.U[rr.value][0])
            }
          })
        }), (0, Kr.jsx)(Yr.i, {
          label: "worldBuilder:gameCategory",
          className: "GameCategory",
          disabled: Wr,
          children: (0, Kr.jsx)("div", {
            className: "GameCategoryOptions",
            children: Ur.U[jr].map((rr => (0, Kr.jsx)(ar.U, {
              active: rr === Qr,
              onClick: () => {
                Zr(rr)
              },
              children: (0, Ur.jb)(rr)
            }, rr)))
          })
        })]
      })
    }
    var ES = Qr(5901);

    function pS(rr) {
      let {
        editor: Sr,
        onClose: Qr
      } = rr;
      const {
        t: Zr
      } = (0, Ir.E)(), {
        schematicData: Wr,
        updateSchematicData: ar,
        publishFormEnabled: fr,
        formEnabled: Er
      } = Sr;
      return (0, Kr.jsxs)(Kr.Fragment, {
        children: [(0, Kr.jsxs)(yr, {
          icon: "pen-to-square",
          title: Zr("worldBuilder:basicsSection"),
          disabled: !Er,
          children: [(0, Kr.jsx)(Br, {
            label: Zr("general:name"),
            caption: Zr("worldBuilder:schematicNameTagsHint"),
            children: (0, Kr.jsx)(jr.b, {
              className: "SchematicPageName",
              defaultValue: Wr.name,
              onValueChange: rr => ar("name", rr),
              placeholderText: Zr("worldBuilder:schematicNamePlaceholder"),
              maxLength: xr.sb
            })
          }), (0, Kr.jsx)(Br, {
            label: Zr("general:description"),
            children: (0, Kr.jsx)(jr.b, {
              className: "SchematicPageDescription",
              useTextarea: !0,
              defaultValue: Wr.description,
              onValueChange: rr => ar("description", rr),
              placeholderText: Zr("worldBuilder:schematicDescriptionPlaceholder"),
              maxLength: xr.qb
            })
          }), (0, Kr.jsx)(fS, {
            gameCategory: Wr.gameCategory,
            setGameCategory: rr => ar("gameCategory", rr),
            disabled: !fr
          }), !0 === Wr.gamePublished && (0, Kr.jsx)(SS, {
            schematicData: Wr,
            updateSchematicData: ar,
            publishFormEnabled: fr,
            onClose: function() {
              null === Qr || void 0 === Qr || Qr()
            }
          }), (0, Kr.jsx)(ES.f, {})]
        }), (0, Kr.jsx)(vr, {
          schematicData: Wr,
          updateSchematicData: ar,
          publishFormEnabled: fr,
          formEnabled: Er
        }), !0 === Wr.gamePublished && (0, Kr.jsx)(yr, {
          icon: "palette",
          title: Zr("worldBuilder:texturePackSection"),
          disabled: !Er,
          children: (0, Kr.jsx)(jS, {
            schematicData: Wr,
            setTexturePack: Sr.setTexturePack,
            initializeTexturePack: Sr.initializeTexturePack,
            publishFormEnabled: fr
          })
        })]
      })
    }

    function xS(rr) {
      let {
        editor: Sr
      } = rr;
      const {
        t: Qr
      } = (0, Ir.E)(), {
        schematicData: Zr,
        formEnabled: Wr,
        hasUnsavedChanges: jr,
        publishSuspendedUntil: xr
      } = Sr, mr = (0, gr.j)(), Nr = !0 === Zr.gamePublished ? xr : null, Ur = Wr && jr && null === Nr;
      return (0, Kr.jsxs)("footer", {
        className: "SchematicPageFooter",
        children: [null !== Nr && (0, Kr.jsx)("div", {
          className: "SchematicPageFooterNotice",
          children: mr(Nr)
        }), Wr && jr && null === Nr && (0, Kr.jsxs)("div", {
          className: "SchematicPageFooterStatus",
          children: [(0, Kr.jsx)("span", {
            className: "SchematicPageFooterStatusDot"
          }), Qr("worldBuilder:unsavedChanges")]
        }), (0, Kr.jsx)(Er.f, {
          tooltipInner: (0, Kr.jsx)("div", {
            className: "SaveButtonTooltip",
            children: Qr(Wr && !jr ? "worldBuilder:saveChangesNoneDescription" : "worldBuilder:saveChangesDescription")
          }),
          children: (0, Kr.jsxs)(ar.h, {
            className: "SaveChangesButton",
            onClick: () => Sr.saveSchematic(Zr.gamePublished),
            disabled: !Ur,
            children: [(0, Kr.jsxs)("span", {
              className: Wr ? "" : "SaveChangesButtonBodyHidden",
              children: [(0, Kr.jsx)(pr.c, {
                name: "wrench"
              }), " ", Qr("worldBuilder:saveChanges")]
            }), !Wr && (0, Kr.jsx)(fr.c, {})]
          })
        })]
      })
    }

    function mS(rr) {
      let {
        schematic: Sr,
        onSchematicUpdate: Qr,
        onClose: Wr,
        inSourceWorld: jr
      } = rr;
      const {
        t: fr
      } = (0, Ir.E)();

      function Er() {
        null === Wr || void 0 === Wr || Wr()
      }
      const pr = (0, IS.c)(Sr, {
        onNavigateAway: Er,
        inSourceWorld: jr
      });
      return (0, Zr.useEffect)((() => {
        null === Qr || void 0 === Qr || Qr(pr.schematicData)
      }), [pr.schematicData, Qr]), (0, Kr.jsxs)("div", {
        className: "SchematicPage SchematicPagePopupVariant",
        children: [(0, Kr.jsxs)("div", {
          className: "SchematicPageBody",
          children: [(0, Kr.jsx)(ar.d, {
            onClick: Er,
            children: fr("worldBuilder:back")
          }), (0, Kr.jsx)(yr, {
            icon: "rocket-launch",
            title: fr("worldBuilder:actionsSection"),
            disabled: !pr.formEnabled,
            children: (0, Kr.jsx)(Or.c, {
              editor: pr
            })
          }), (0, Kr.jsx)(pS, {
            editor: pr,
            onClose: Er
          })]
        }), (0, Kr.jsx)(xS, {
          editor: pr
        })]
      })
    }

    function NS(rr) {
      let {
        schematic: Sr,
        onSchematicUpdate: Qr,
        onClose: Zr,
        inSourceWorld: ar
      } = rr;
      Wr.NotificationProvider.showCustomPopup({
        body: rr => (0, Kr.jsx)(mS, {
          schematic: Sr,
          onSchematicUpdate: Qr,
          onClose: rr,
          inSourceWorld: ar
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: Zr,
        unlockPointerKey: "schematicPagePopup"
      })
    }
  },
  5895: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Nr
    });
    var Zr = Qr(1155),
      Wr = Qr.n(Zr),
      ar = Qr(1251),
      jr = Qr(1448),
      Ir = Qr(1576),
      fr = Qr(1489),
      Er = Qr(1444),
      pr = Qr(5901),
      xr = Qr(5910),
      mr = Qr(1338);

    function Nr(rr) {
      let {
        editor: Sr,
        className: Qr,
        publishRefusal: Zr = null
      } = rr;
      const {
        t: Nr
      } = (0, ar.E)(), {
        schematicData: Ur,
        formEnabled: tr,
        publishFormEnabled: hr,
        publishSuspendedUntil: zr
      } = Sr, Yr = !tr || !hr, nr = (0, xr.j)();
      return (0, mr.jsxs)("div", {
        className: Wr()("PublishButtonContainer", Qr),
        children: [Sr.canEditSourceWorld && (0, mr.jsxs)(Ir.h, {
          onClick: Sr.editSourceWorld,
          disabled: Yr,
          children: [(0, mr.jsx)(jr.c, {
            name: "edit"
          }), " ", Nr("worldBuilder:editSourceWorld")]
        }), !Ur.gamePublished && (0, mr.jsx)(fr.f, {
          tooltipInner: (0, mr.jsx)("div", {
            className: "PublishButtonTooltip",
            children: null !== Zr && void 0 !== Zr ? Zr : Nr("worldBuilder:publishAsGameDescription")
          }),
          children: (0, mr.jsxs)(Ir.p, {
            onClick: () => Sr.saveSchematic(!0),
            disabled: Yr || null !== Zr || null !== zr,
            children: [(0, mr.jsx)(jr.c, {
              name: "rocket-launch"
            }), " ", Nr("worldBuilder:publishAsGame"), " ", (0, mr.jsx)(jr.c, {
              name: "info-circle"
            })]
          })
        }), !0 === Ur.gamePublished && (0, mr.jsxs)(mr.Fragment, {
          children: [(0, mr.jsx)(fr.f, {
            tooltipInner: (0, mr.jsx)("div", {
              className: "PublishButtonTooltip",
              children: Nr("worldBuilder:unpublishAsGameDescription")
            }),
            children: (0, mr.jsxs)(Ir.L, {
              onClick: Sr.unpublishSchematic,
              disabled: Yr,
              children: [(0, mr.jsx)(jr.c, {
                name: "rocket-launch"
              }), " ", Nr("worldBuilder:unpublishAsGame"), " ", (0, mr.jsx)(jr.c, {
                name: "info-circle"
              })]
            })
          }), (0, mr.jsxs)(Ir.h, {
            onClick: Sr.playGame,
            disabled: Yr,
            children: [(0, mr.jsx)(jr.c, {
              name: "joystick"
            }), " ", Nr("general:playGame")]
          })]
        }), !tr && (0, mr.jsx)(Er.c, {
          loaderType: "Secondary"
        }), !Ur.gamePublished && null !== zr && (0, mr.jsx)("div", {
          className: "PublishSuspendedNotice",
          children: nr(zr)
        }), Sr.askingPublishingPolicy && (0, mr.jsx)(pr.b, {
          onAnswer: Sr.answerPublishingPolicy
        })]
      })
    }
  },
  5943: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Wr
    });
    var Zr = Qr(1262);
    async function Wr(rr) {
      const Sr = await fetch(`${Zr.clientSideServerUrls.s3Url}/${rr}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === Sr.status || 403 === Sr.status) return null;
      if (!Sr.ok) throw new Error(`Failed to download the texture pack (${Sr.status})`);
      return await Sr.json()
    }
  },
  5910: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Ir,
      g: () => fr,
      j: () => Er
    });
    var Zr = Qr(72),
      Wr = Qr(1629),
      ar = Qr(1251),
      jr = Qr(1181);

    function Ir() {
      let rr = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      const {
        userContext: Sr
      } = (0, jr.c)(), [Qr, ar] = (0, Zr.useState)((() => ({
        loading: rr && Sr.isLoggedIn(),
        eligibility: null
      })));
      if ((0, Zr.useEffect)((() => {
          if (!rr || !Sr.isLoggedIn()) return void ar({
            loading: !1,
            eligibility: null
          });
          let Qr = !1;
          return Wr.c.getCreatorEligibility(Sr).then((rr => {
            Qr || ar({
              loading: !1,
              eligibility: rr
            })
          })).catch((rr => {
            console.warn("Failed to load creator eligibility", rr), Qr || ar({
              loading: !1,
              eligibility: null
            })
          })), () => {
            Qr = !0
          }
        }), [Sr, rr]), null === Qr.eligibility) return Qr;
      const Ir = Date.now(),
        {
          thumbnailUploadWait: fr,
          publishSuspendedUntil: Er
        } = Qr.eligibility;
      return {
        loading: Qr.loading,
        eligibility: {
          thumbnailUploadWait: null !== fr && fr.until > Ir ? fr : null,
          publishSuspendedUntil: null !== Er && Er > Ir ? Er : null
        }
      }
    }

    function fr() {
      const {
        t: rr,
        selectedLanguage: Sr
      } = (0, ar.E)();
      return (Qr, Zr) => rr(Qr, {
        date: (0, ar.f)(Sr.code, Qr, Zr, {
          dateStyle: "medium",
          timeStyle: "short"
        })
      })
    }

    function Er() {
      const {
        t: rr,
        selectedLanguage: Sr
      } = (0, ar.E)();
      return Qr => {
        const Zr = "worldBuilder:publishSuspended";
        return rr(Zr, {
          date: (0, ar.f)(Sr.code, Zr, Qr, {
            dateStyle: "medium",
            timeStyle: "short",
            timeZone: "UTC"
          })
        })
      }
    }
  },
  6026: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => nr
    });
    var Zr = Qr(72),
      Wr = Qr(1433),
      ar = Qr(1127),
      jr = Qr(161),
      Ir = Qr(2991),
      fr = Qr(1675),
      Er = Qr(26),
      pr = Qr(2089),
      xr = Qr(1629),
      mr = Qr(5347),
      Nr = Qr(1475),
      Ur = Qr(2015),
      tr = Qr(1181),
      hr = Qr(1644),
      zr = Qr(5910);

    function Yr(rr, Sr) {
      return {
        schematicId: rr.schematicId,
        name: rr.name,
        description: rr.description,
        gamePublished: Sr,
        gameCategory: rr.gameCategory,
        defaultGamemode: rr.defaultGamemode,
        voidDeathHeight: rr.voidDeathHeight,
        disableKeepInventory: rr.disableKeepInventory,
        disableTpRequests: rr.disableTpRequests,
        disableLobbySpawn: rr.disableLobbySpawn,
        disableMobs: rr.disableMobs,
        disableSpawnProtection: rr.disableSpawnProtection,
        disableFallDamage: rr.disableFallDamage,
        worldBorder: rr.worldBorder,
        hideLobbyCode: rr.hideLobbyCode,
        enableSmpMarketplace: rr.enableSmpMarketplace,
        enableSurvivalGuns: rr.enableSurvivalGuns,
        enableSpawnReset: rr.enableSpawnReset,
        enableDayNight: rr.enableDayNight,
        persistWorld: rr.persistWorld,
        persistInventory: rr.persistInventory,
        enableFluidFlow: rr.enableFluidFlow
      }
    }

    function nr(rr) {
      var Sr, Qr;
      let {
        onNavigateAway: nr,
        inSourceWorld: er = !1,
        canManage: Kr = !0
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const {
        userContext: yr
      } = (0, tr.c)(), Br = (0, hr.useNavigatePreserveSearch)(), [Tr, vr] = (0, Zr.useState)({
        ...rr
      }), [Or, Lr] = (0, Zr.useState)("Enter"), [lr, Xr] = (0, Zr.useState)(void 0), [Pr, Hr] = (0, Zr.useState)(!1), qr = (0, Zr.useRef)(Yr(rr, rr.gamePublished)), Rr = (0, Zr.useRef)(void 0), gr = "Enter" === Or, Cr = null !== (Sr = null === (Qr = (0, zr.e)(Kr).eligibility) || void 0 === Qr ? void 0 : Qr.publishSuspendedUntil) && void 0 !== Sr ? Sr : null, Mr = yr.playerHasRank("developer") || yr.playerHasRank("admin") || "Enter" === Or && !1 !== Tr.schematicContainsSpawnBlock, Gr = void 0 !== lr && lr !== Rr.current || JSON.stringify(Yr(Tr, Tr.gamePublished)) !== JSON.stringify(qr.current);

      function kr(rr, Sr) {
        vr((Qr => ({
          ...Qr,
          [rr]: Sr
        })))
      }
      const Ar = (0, Zr.useCallback)((rr => {
        Rr.current = rr, Xr(rr)
      }), []);

      function Vr() {
        return (0, fr.A)((0, ar.v)(Tr.schematicId), Tr)
      }

      function ir(rr, Sr) {
        Lr("Loading");
        const Qr = Yr(Tr, rr),
          Zr = lr !== Rr.current ? lr : void 0;
        xr.c.updateSchematic(yr, Qr, Zr, Sr).then((Sr => {
          let {
            customTexturePackKey: Zr
          } = Sr;
          Lr("Success"), kr("customTexturePackKey", Zr), qr.current = Qr, Rr.current = void 0, Xr(void 0), !rr || Tr.gamePublished || nr || Ur.h.showGamePublished(Tr.name, Vr()), setTimeout((() => {
            kr("gamePublished", rr), Lr("Enter")
          }), 1e3)
        })).catch((rr => {
          if (rr instanceof jr.b && rr.errorMessageForUser === Ir.B && void 0 === Sr) return Lr("Enter"), void Hr(!0);
          var Qr;
          (console.error("Failed to save schematic:", rr), Lr("Error"), rr instanceof jr.b && rr.errorMessageForUser) && Nr.NotificationProvider.showAlertPopup({
            title: "worldBuilder:changesNotSaved",
            subtitle: rr.errorMessageForUser,
            textOpts: {
              subtitle: null !== (Qr = rr.errorMessageTranslationParams) && void 0 !== Qr ? Qr : void 0
            },
            confirmText: "general:ok"
          });
          setTimeout((() => {
            Lr("Enter")
          }), 1e3)
        }))
      }
      return {
        schematicData: Tr,
        updateSchematicData: kr,
        setTexturePack: Xr,
        initializeTexturePack: Ar,
        updateState: Or,
        formEnabled: gr,
        publishFormEnabled: Mr,
        hasUnsavedChanges: Gr,
        publishSuspendedUntil: Cr,
        canEditSourceWorld: !er,
        saveSchematic: ir,
        unpublishSchematic: function() {
          Nr.NotificationProvider.showPromptPopup({
            icon: "rocket-launch",
            title: "worldBuilder:unpublishAsGameConfirmTitle",
            subtitle: "worldBuilder:unpublishAsGameConfirmSubtitle",
            confirmText: "worldBuilder:unpublishAsGame",
            cancelText: "general:cancel",
            destructive: !0,
            unlockPointerKey: "unpublishGamePrompt"
          }).getResult().then((rr => {
            !0 === rr && ir(!1)
          }))
        },
        askingPublishingPolicy: Pr,
        answerPublishingPolicy: function(rr) {
          Hr(!1), rr && ir(!0, Ir.F)
        },
        editSourceWorld: function() {
          Lr("Loading"), mr.c.getSourceWorld(Tr.schematicId).then((rr => {
            pr.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, Er.m)("other"), Br((0, Wr.c)("classic", rr)), null === nr || void 0 === nr || nr()
          })).catch((rr => {
            console.error("Failed to get source world:", rr), Lr("Error"), setTimeout((() => {
              Lr("Enter")
            }), 1e3)
          }))
        },
        playGame: function() {
          pr.gameBridge.send("leaveGame", {
            reloadPath: "/"
          }), Br(Vr()), null === nr || void 0 === nr || nr()
        }
      }
    }
  },
  5767: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => ar,
      h: () => mr,
      l: () => fr,
      o: () => Ur,
      q: () => Er,
      t: () => Nr
    });
    var Zr = Qr(5774),
      Wr = Qr(5779);
    const ar = !1,
      jr = Zr.i.map((rr => {
        const Sr = [];
        for (let ar = 1; ar <= rr.reach; ar++) Sr.push(Wr.j[(0, Zr.e)(rr.source, ar)].id);
        const Qr = "water" === rr.family;
        return Object.freeze({
          name: rr.kind,
          family: rr.family,
          reach: rr.reach,
          stepTicks: Qr ? 5 : 10,
          slopeDistance: Qr ? 4 : 2,
          sourceId: Wr.j[rr.source].id,
          fallingId: Wr.j[(0, Zr.b)(rr.source)].id,
          flowingIds: Object.freeze(Sr),
          makesSources: Qr,
          stillId: Wr.j[rr.still].id
        })
      })),
      Ir = new Map;
    for (const tr of jr) Ir.set(tr.sourceId, Object.freeze({
      kind: tr,
      state: "source",
      distance: 0
    })), Ir.set(tr.fallingId, Object.freeze({
      kind: tr,
      state: "falling",
      distance: 0
    })), tr.flowingIds.forEach(((rr, Sr) => {
      Ir.set(rr, Object.freeze({
        kind: tr,
        state: "flowing",
        distance: Sr + 1
      }))
    }));

    function fr(rr) {
      return jr.find((Sr => Sr.name === rr))
    }

    function Er(rr) {
      return null === rr ? void 0 : Ir.get(rr)
    }
    const pr = new Uint8Array(65536);
    for (const [tr, hr] of Ir) pr[tr] = "source" === hr.state ? 1 : 2;
    const xr = new Map;
    for (const tr of jr) xr.set(tr.stillId, tr.family);

    function mr(rr) {
      var Sr, Qr;
      return null !== (Sr = null === (Qr = Er(rr)) || void 0 === Qr ? void 0 : Qr.kind.family) && void 0 !== Sr ? Sr : Nr(rr)
    }

    function Nr(rr) {
      var Sr;
      return null === rr ? null : null !== (Sr = xr.get(rr)) && void 0 !== Sr ? Sr : null
    }
    Wr.j.Obsidian.id, Wr.j["Messy Stone"].id;

    function Ur() {
      let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {
        let rr = 0;
        for (const Sr of jr) rr = Math.max(rr, Sr.stillId, Sr.sourceId, Sr.fallingId, ...Sr.flowingIds);
        return rr
      }() + 1;
      const Sr = new Uint8Array(rr);
      for (const Qr of jr) {
        const Zr = ("water" === Qr.family ? 1 : 2) << 4;
        for (const Wr of [Qr.stillId, Qr.sourceId, Qr.fallingId, ...Qr.flowingIds]) Wr < rr && (Sr[Wr] = Zr)
      }
      return Sr
    }
  },
  5753: () => {}
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);