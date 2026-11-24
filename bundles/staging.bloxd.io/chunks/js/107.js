export const id = 107;
export const ids = [107];
export const modules = {
  5052: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Ap,
      i: () => Dp,
      l: () => Pp
    });
    cp(5054);
    var Op = cp(1201),
      op = cp(1049),
      Ip = cp.n(op),
      Sp = cp(1387),
      xp = (cp(62), cp(4462)),
      Lp = cp(1060),
      Yp = cp(1112);

    function Dp(pp) {
      let {
        children: ip,
        label: cp,
        className: op,
        circleInfoText: xp,
        disabled: Dp,
        onLabelClick: Ap
      } = pp;
      const {
        t: Pp
      } = (0, Op.H)(), Wp = (0, Yp.jsxs)("div", {
        className: Ip()("Label", {
          ClickableLabel: void 0 !== Ap
        }),
        onClick: Ap,
        children: [Pp(cp), xp && (0, Yp.jsx)(Lp.d, {
          name: "circle-info"
        })]
      });
      return (0, Yp.jsxs)("div", {
        className: Ip()("LabeledInput", {
          [op]: op,
          DisabledLabelInput: Dp
        }),
        children: [xp && (0, Yp.jsx)(Sp.f, {
          tooltipInner: (0, Yp.jsx)("div", {
            className: "LabeledInputTooltip",
            children: Pp(xp)
          }),
          children: Wp
        }), !xp && Wp, ip]
      })
    }

    function Ap(pp) {
      let {
        checked: ip,
        setChecked: cp
      } = pp;
      return (0, Yp.jsx)("div", {
        className: "OtherInput ClickableOtherInput",
        "data-pad-focusable": !0,
        onClick: pp => {
          cp(!ip)
        },
        children: (0, Yp.jsx)(xp.b, {
          checked: ip,
          onChange: pp => {
            cp(pp.target.checked)
          },
          disabled: !1
        })
      })
    }

    function Pp(pp) {
      let {
        checked: ip,
        setChecked: cp,
        disabled: Op
      } = pp;
      return (0, Yp.jsx)("div", {
        className: Ip()("SwitchContainer", {
          SwitchContainerDisabled: Op
        }),
        onClick: () => {
          Op || cp(!ip)
        },
        children: (0, Yp.jsx)(xp.b, {
          className: "SwitchCheckbox",
          checked: ip,
          onChange: pp => {
            cp(pp.target.checked)
          },
          disabled: !!Op
        })
      })
    }
  },
  5061: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Yp
    });
    var Op = cp(1049),
      op = cp.n(Op),
      Ip = cp(4719),
      Sp = cp(1201),
      xp = cp(1112);
    const Lp = [...Ip.h, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function Yp(pp) {
      const {
        disabled: ip,
        hideWrapper: cp
      } = pp, {
        t: Op
      } = (0, Sp.H)(), Yp = pp.advancedMode ? Lp.map((ip => [ip, pp.callbacks[ip]])) : Ip.h.map((ip => [ip, pp.callbacks[ip]])), Ap = (0, xp.jsx)("div", {
        className: op()("PluginsGrid", {
          SectionBody: !cp
        }),
        children: Yp.map((pp => {
          let [cp, Op] = pp;
          return (0, xp.jsx)(Dp, {
            plugin: cp,
            callbacks: Op,
            disabled: ip
          }, cp)
        }))
      });
      return cp ? Ap : (0, xp.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, xp.jsx)("div", {
          className: "SectionTitle",
          children: Op("worldBuilder:pluginsSection")
        }), Ap]
      })
    }

    function Dp(pp) {
      let {
        plugin: ip,
        callbacks: {
          isEnabled: cp,
          eC: Op
        },
        disabled: Ip
      } = pp;
      const {
        t: Lp
      } = (0, Sp.H)(), Yp = cp();
      return (0, xp.jsxs)("div", {
        className: op()("PluginCard", {
          PluginCardEnabled: Yp,
          PluginCardDisabledForm: Ip
        }),
        "data-pad-focusable": !0,
        "aria-disabled": Ip || void 0,
        onClick: () => {
          Ip || Op(!Yp)
        },
        children: [(0, xp.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, xp.jsx)("img", {
            src: `/textures/games/classic/customGames/${ip}.png`,
            alt: ip
          })
        }), (0, xp.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, xp.jsx)("div", {
            className: "PluginCardTitle",
            children: Lp(Ap[ip])
          }), (0, xp.jsx)("div", {
            className: "PluginCardDescription",
            children: Lp(Pp[ip])
          })]
        }), (0, xp.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: Lp(Yp ? "general:on" : "general:off")
        })]
      })
    }
    const Ap = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      Pp = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  5048: (pp, ip, cp) => {
    cp.d(ip, {
      j: () => Si,
      d: () => Ii,
      f: () => oi,
      k: () => xi
    });
    var Op = cp(62),
      op = cp(1372),
      Ip = cp(1480),
      Sp = cp(1692),
      xp = cp(1201),
      Lp = cp(1361),
      Yp = cp(1387),
      Dp = cp(1060),
      Ap = cp(1234),
      Pp = cp(1049),
      Wp = cp.n(Pp),
      yp = cp(322),
      Up = cp(4719),
      wp = cp(1251),
      vp = cp(5052),
      tp = cp(3224),
      Hp = cp(5061),
      dp = cp(1112);

    function ep(pp) {
      let {
        icon: ip,
        title: cp,
        disabled: Op,
        children: op
      } = pp;
      return (0, dp.jsxs)("div", {
        className: Wp()("ManageCard", {
          ManageCardDisabled: Op
        }),
        children: [(0, dp.jsxs)("div", {
          className: "ManageCardHead",
          children: [(0, dp.jsx)("div", {
            className: "ManageCardIcon",
            children: (0, dp.jsx)(Dp.d, {
              name: ip
            })
          }), (0, dp.jsx)("div", {
            children: (0, dp.jsx)("h2", {
              className: "ManageCardTitle",
              children: cp
            })
          })]
        }), (0, dp.jsxs)("div", {
          className: "ManageCardBody",
          children: [op, Op && (0, dp.jsx)("div", {
            className: "ManageCardDisabledOverlay"
          })]
        })]
      })
    }

    function jp(pp) {
      let {
        label: ip,
        caption: cp,
        children: Op
      } = pp;
      return (0, dp.jsxs)("div", {
        className: "ManageStackedField",
        children: [(0, dp.jsx)("div", {
          className: "ManageStackedFieldLabel",
          children: ip
        }), Op, cp && (0, dp.jsx)("div", {
          className: "ManageStackedFieldCaption",
          children: cp
        })]
      })
    }

    function kp(pp) {
      let {
        label: ip,
        caption: cp,
        disabled: Op,
        children: op
      } = pp;
      return (0, dp.jsxs)("div", {
        className: Wp()("ManageField", {
          ManageFieldDisabled: Op
        }),
        children: [(0, dp.jsxs)("div", {
          className: "ManageFieldText",
          children: [(0, dp.jsx)("div", {
            className: "ManageFieldLabel",
            children: ip
          }), (0, dp.jsx)("div", {
            className: "ManageFieldCaption",
            children: cp
          })]
        }), (0, dp.jsx)("div", {
          className: "ManageFieldControl",
          children: op
        })]
      })
    }

    function mp(pp) {
      var ip, cp;
      let {
        schematicData: Op,
        updateSchematicData: op,
        publishFormEnabled: Ip,
        formEnabled: Sp
      } = pp;
      const {
        t: Lp
      } = (0, xp.H)(), Yp = !Ip, Dp = {
        tpRequests: {
          isEnabled: () => !Op.disableTpRequests,
          eC: pp => op("disableTpRequests", !pp)
        },
        spawnProtection: {
          isEnabled: () => !Op.disableSpawnProtection,
          eC: pp => op("disableSpawnProtection", !pp)
        },
        spawnReset: {
          isEnabled: () => !!Op.enableSpawnReset,
          eC: pp => op("enableSpawnReset", pp)
        },
        smpMarketplace: {
          isEnabled: () => !!Op.enableSmpMarketplace,
          eC: pp => op("enableSmpMarketplace", pp)
        },
        survivalGuns: {
          isEnabled: () => !!Op.enableSurvivalGuns,
          eC: pp => op("enableSurvivalGuns", pp)
        },
        fallDamage: {
          isEnabled: () => !Op.disableFallDamage,
          eC: pp => op("disableFallDamage", !pp)
        },
        dayNight: {
          isEnabled: () => !!Op.enableDayNight,
          eC: pp => op("enableDayNight", pp)
        }
      };
      return (0, dp.jsxs)(dp.Fragment, {
        children: [!1 === Op.schematicContainsSpawnBlock && (0, dp.jsx)("div", {
          className: "ManageWarningBanner",
          children: Lp("worldBuilder:mustContainSpawnBlock")
        }), (0, dp.jsxs)("div", {
          className: "ManageSettingsGrid",
          children: [(0, dp.jsxs)(ep, {
            icon: "globe",
            title: Lp("worldBuilder:worldRulesSection"),
            disabled: !Sp,
            children: [(0, dp.jsx)(kp, {
              label: Lp("classic:defaultGamemode"),
              caption: Lp("classic:defaultGamemodeDescription"),
              disabled: Yp,
              children: (0, dp.jsx)(tp.d, {
                controlClassName: "ManageDropdown",
                options: Up.E.map((pp => ({
                  value: pp,
                  label: yp.o[pp]
                }))),
                value: Op.defaultGamemode,
                onChange: pp => op("defaultGamemode", pp.value)
              })
            }), (0, dp.jsx)(kp, {
              label: Lp("classic:voidDeathHeight"),
              caption: Lp("classic:voidDeathHeightDescription"),
              disabled: Yp,
              children: (0, dp.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, dp.jsx)("input", {
                  type: "number",
                  max: wp.F,
                  value: null !== (ip = Op.voidDeathHeight) && void 0 !== ip ? ip : "",
                  onChange: pp => {
                    const ip = parseInt(pp.target.value);
                    op("voidDeathHeight", ip)
                  }
                }), (0, dp.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: Lp("worldBuilder:blocksUnit")
                })]
              })
            }), (0, dp.jsx)(kp, {
              label: Lp("classic:worldBorder"),
              caption: Lp("classic:worldBorderDescription"),
              disabled: Yp,
              children: (0, dp.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, dp.jsx)("input", {
                  type: "number",
                  min: wp.L,
                  max: wp.G,
                  placeholder: Lp("worldBuilder:noWorldBorderLimit"),
                  value: null !== (cp = Op.worldBorder) && void 0 !== cp ? cp : "",
                  onChange: pp => {
                    const ip = parseInt(pp.target.value);
                    op("worldBorder", isNaN(ip) ? null : ip)
                  }
                }), (0, dp.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: Lp("worldBuilder:blocksUnit")
                })]
              })
            }), (0, dp.jsx)(kp, {
              label: Lp("classic:disableMobs"),
              caption: Lp("classic:disableMobsDescription"),
              disabled: Yp,
              children: (0, dp.jsx)(vp.l, {
                checked: Op.disableMobs,
                setChecked: pp => op("disableMobs", pp),
                disabled: Yp
              })
            })]
          }), (0, dp.jsxs)(ep, {
            icon: "user-group",
            title: Lp("worldBuilder:playerAndLobbySection"),
            disabled: !Sp,
            children: [(0, dp.jsx)(kp, {
              label: Lp("classic:disableKeepInventory"),
              caption: Lp("classic:disableKeepInventoryDescription"),
              disabled: Yp,
              children: (0, dp.jsx)(vp.l, {
                checked: Op.disableKeepInventory,
                setChecked: pp => op("disableKeepInventory", pp),
                disabled: Yp
              })
            }), (0, dp.jsx)(kp, {
              label: Lp("classic:persistInventory"),
              caption: Lp("classic:persistInventoryDescription"),
              disabled: Yp,
              children: (0, dp.jsx)(tp.d, {
                controlClassName: "ManageDropdown",
                options: Up.k.map((pp => ({
                  value: pp,
                  label: yp.d[pp]
                }))),
                value: Op.persistInventory,
                onChange: pp => op("persistInventory", pp.value)
              })
            }), (0, dp.jsx)(kp, {
              label: Lp("classic:persistWorld"),
              caption: Lp("classic:persistWorldDescription"),
              disabled: Yp,
              children: (0, dp.jsx)(vp.l, {
                checked: Op.persistWorld,
                setChecked: pp => op("persistWorld", pp),
                disabled: Yp
              })
            }), (0, dp.jsx)(kp, {
              label: Lp("classic:disableLobbySpawn"),
              caption: Lp("classic:disableLobbySpawnDescription"),
              disabled: Yp,
              children: (0, dp.jsx)(vp.l, {
                checked: Op.disableLobbySpawn,
                setChecked: pp => op("disableLobbySpawn", pp),
                disabled: Yp
              })
            }), (0, dp.jsx)(kp, {
              label: Lp("classic:hideLobbyCode"),
              caption: Lp("classic:hideLobbyCodeDescription"),
              disabled: Yp,
              children: (0, dp.jsx)(vp.l, {
                checked: Op.hideLobbyCode,
                setChecked: pp => op("hideLobbyCode", pp),
                disabled: Yp
              })
            })]
          })]
        }), (0, dp.jsx)(ep, {
          icon: "layer-group",
          title: Lp("worldBuilder:pluginsSection"),
          disabled: !Sp,
          children: (0, dp.jsx)(Hp.e, {
            callbacks: Dp,
            disabled: Yp,
            advancedMode: !0,
            hideWrapper: !0
          })
        })]
      })
    }
    var Rp = cp(5067),
      qp = cp(4462),
      Mp = cp(1520),
      Cp = cp(3587),
      Ep = cp(1141),
      Xp = cp(5025),
      lp = cp(5076),
      Qp = cp(1482);
    const Jp = 50,
      Bp = .3;
    async function Np(pp) {
      const ip = await
      function(pp) {
        return new Promise(((ip, cp) => {
          const Op = new FileReader;
          Op.onload = () => ip(Op.result), Op.onerror = cp, Op.readAsDataURL(pp)
        }))
      }(pp), cp = await
      function(pp) {
        return new Promise(((ip, cp) => {
          const Op = new Image;
          Op.onload = () => ip(Op), Op.onerror = () => cp(new Error("Failed to load image")), Op.src = pp
        }))
      }(ip);
      if (cp.naturalHeight > cp.naturalWidth) throw new Tp;
      const Op = 1024 * Jp,
        {
          dataUrl: op,
          finalQuality: Ip
        } = function(pp, ip) {
          const cp = document.createElement("canvas");
          cp.width = pp.naturalWidth, cp.height = pp.naturalHeight, cp.getContext("2d").drawImage(pp, 0, 0);
          let Op = .92,
            op = cp.toDataURL("image/jpeg", Op);
          for (; .75 * op.length > ip && Op > .05;) Op -= .05, op = cp.toDataURL("image/jpeg", Op);
          return {
            dataUrl: op,
            finalQuality: Op
          }
        }(cp, Op);
      if (Math.ceil(.75 * op.length) > Op) throw new fp;
      return {
        base64Jpg: op,
        heavilyCompressed: Ip < Bp
      }
    }
    class Tp extends Error {}
    class fp extends Error {}
    var bp = function(pp) {
      return pp[pp.NOT_LOGGED_IN = 0] = "NOT_LOGGED_IN", pp[pp.THUMBNAIL_LIMIT_REACHED = 1] = "THUMBNAIL_LIMIT_REACHED", pp
    }(bp || {});

    function hp(pp) {
      var ip;
      let {
        schematicId: cp,
        hasReadUploadPolicy: op,
        onPolicyValidationError: Lp,
        onThumbnailReady: Yp
      } = pp;
      const {
        t: Pp
      } = (0, xp.H)(), [yp, Up] = (0, Op.useState)(null), [wp, vp] = (0, Op.useState)(""), [tp, Hp] = (0, Op.useState)(""), [ep, jp] = (0, Op.useState)(!0), [kp, mp] = (0, Op.useState)(!1), Rp = (0, Op.useRef)(!1), [qp, Mp] = (0, Op.useState)(null), [Cp, Ep] = (0, Op.useState)(!1), [Xp, Qp] = (0, Op.useState)(!1), Jp = (0, Op.useRef)(0), {
        getRootProps: Bp,
        getInputProps: bp,
        isDragActive: hp
      } = (0, lp.c)({
        accept: {
          "image/*": [".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp"]
        },
        multiple: !1,
        onDrop: async pp => {
          if (0 === pp.length) return;
          const ip = pp[0],
            cp = ++Jp.current;
          Mp(null), Ep(!1), Up(null), vp(ip.name);
          try {
            const pp = await Np(ip);
            if (cp !== Jp.current) return;
            Up(pp), Ep(pp.heavilyCompressed)
          } catch (Op) {
            if (cp !== Jp.current) return;
            Mp(Pp(Op instanceof Tp ? "thumbnail:portraitImagesNotAllowed" : Op instanceof fp ? "thumbnail:couldNotCompressImage" : "thumbnail:failedToUploadImage"))
          }
        },
        useFsAccessApi: !1
      }), ap = wp.length <= 30 ? wp : `${wp.slice(0,27)}...`, np = null !== (ip = null === yp || void 0 === yp ? void 0 : yp.base64Jpg) && void 0 !== ip ? ip : null, Fp = tp.trim(), gp = Fp.length >= Ap.m && Fp.length <= Ap.k, Gp = Xp && !yp && !qp, rp = Xp && !gp;
      return (0, dp.jsxs)("div", {
        className: "ThumbnailUploadContainer",
        children: [(0, dp.jsxs)("div", {
          ...Bp({
            className: Wp()("ThumbnailUploadDropzone", {
              ActiveDrag: hp,
              ValidationError: Gp
            })
          }),
          children: [(0, dp.jsx)("input", {
            ...bp()
          }), !hp && np ? (0, dp.jsxs)(dp.Fragment, {
            children: [(0, dp.jsxs)("div", {
              className: "ThumbnailAspectPreviews",
              children: [(0, dp.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, dp.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "1:1"
                }), (0, dp.jsx)("div", {
                  className: "ThumbnailAspectFrame Square",
                  children: (0, dp.jsx)("img", {
                    src: np,
                    alt: "1:1 preview"
                  })
                })]
              }), (0, dp.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, dp.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "16:9"
                }), (0, dp.jsx)("div", {
                  className: "ThumbnailAspectFrame Wide",
                  children: (0, dp.jsx)("img", {
                    src: np,
                    alt: "16:9 preview"
                  })
                })]
              })]
            }), (0, dp.jsxs)("div", {
              children: [(0, dp.jsx)("div", {
                className: "ThumbnailUploadInstructions Active",
                children: ap
              }), (0, dp.jsx)("div", {
                className: "ThumbnailUploadInstructions Preview",
                children: Pp("thumbnail:preview")
              })]
            })]
          }) : (0, dp.jsxs)(dp.Fragment, {
            children: [(0, dp.jsx)("div", {
              className: "ThumbnailUploadIcon",
              children: (0, dp.jsx)(Dp.d, {
                name: "image"
              })
            }), (0, dp.jsx)("div", {
              className: "ThumbnailUploadInstructions",
              children: Pp("thumbnail:dragImageHere")
            })]
          })]
        }), Gp && (0, dp.jsx)("div", {
          className: "ThumbnailUploadError",
          children: Pp("thumbnail:imageRequired")
        }), (0, dp.jsx)(Sp.c, {
          className: Wp()("ThumbnailUploadNameInput", {
            ValidationError: rp
          }),
          placeholderText: Pp("thumbnail:thumbnailName"),
          defaultValue: tp,
          onValueChange: pp => {
            Hp(pp)
          },
          maxLength: Ap.k
        }), rp && (0, dp.jsx)("div", {
          className: "ThumbnailUploadError",
          children: Pp("thumbnail:nameRequired", {
            min: Ap.m,
            max: Ap.k
          })
        }), (0, dp.jsxs)("label", {
          className: "ThumbnailUploadCheckbox",
          children: [(0, dp.jsx)("input", {
            type: "checkbox",
            checked: ep,
            onChange: pp => {
              jp(pp.target.checked)
            }
          }), Pp("thumbnail:setAsThumbnailOnceApproved")]
        }), Cp && (0, dp.jsx)("div", {
          className: "ThumbnailUploadWarning",
          children: Pp("thumbnail:heavyCompressionWarning")
        }), qp && (0, dp.jsx)("div", {
          className: "ThumbnailUploadError",
          children: qp
        }), (0, dp.jsx)(Ip.o, {
          disabled: kp,
          className: "ThumbnailUploadButton",
          onClick: async () => {
            if (Qp(!0), !Rp.current && yp && gp && op) {
              Rp.current = !0, mp(!0), Mp(null);
              try {
                await Yp(yp.base64Jpg, Fp, ep ? cp : null)
              } catch (pp) {
                Mp(pp.errorMessageForUser ? Pp(pp.errorMessageForUser, pp.errorMessageTranslationParams) : Pp("thumbnail:failedToUploadImage"))
              } finally {
                Rp.current = !1, mp(!1)
              }
            } else op || Lp()
          },
          children: Pp(kp ? "thumbnail:processing" : "thumbnail:uploadThumbnail")
        })]
      })
    }
    const ap = 2e3;

    function np(pp) {
      let {
        schematicId: ip,
        ownedThumbnailCount: cp,
        onClose: op,
        onThumbnailReady: Ip
      } = pp;
      const {
        t: Sp
      } = (0, xp.H)(), {
        userContext: Lp
      } = (0, Ep.b)(), [Yp, Pp] = (0, Op.useState)(!1), [yp, Up] = (0, Op.useState)(!1), [wp, vp] = (0, Op.useState)(!1), tp = (0, Op.useRef)();
      (0, Op.useEffect)((() => () => {
        clearTimeout(tp.current)
      }), []);
      const Hp = function(pp, ip) {
        const cp = [];
        return pp.isLoggedIn() || cp.push(bp.NOT_LOGGED_IN), ip >= Ap.T && cp.push(bp.THUMBNAIL_LIMIT_REACHED), cp
      }(Lp, cp);
      if (Hp.length > 0) {
        const pp = {
          [bp.NOT_LOGGED_IN]: {
            key: "thumbnail:mustBeLoggedInToUpload"
          },
          [bp.THUMBNAIL_LIMIT_REACHED]: {
            key: "thumbnail:thumbnailLimitReachedPleaseDelete",
            params: {
              max: Ap.T
            }
          }
        };
        return (0, dp.jsxs)("div", {
          className: "ThumbnailUploaderInner",
          children: [(0, dp.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: Sp("thumbnail:cannotUploadThumbnail")
          }), Hp.map(((ip, cp) => {
            const Op = pp[ip];
            return (0, dp.jsxs)("div", {
              className: "CannotUploadThumbnailItem",
              children: [(0, dp.jsx)(Dp.d, {
                name: "triangle-exclamation"
              }), (0, dp.jsx)("span", {
                children: Sp(Op.key, Op.params)
              })]
            }, cp)
          }))]
        })
      }
      return (0, dp.jsxs)("div", {
        className: Wp()("ThumbnailUploaderInner", {
          ThumbnailUploaderSuccess: Yp
        }),
        children: [Yp && (0, dp.jsxs)("div", {
          className: "ThumbnailUploadSuccessOverlay",
          children: [(0, dp.jsxs)("div", {
            className: "ThumbnailUploadSuccessIcon FullyFancyText AnimFadeInScaleUp",
            children: [(0, dp.jsx)(Dp.d, {
              name: "check"
            }), (0, dp.jsx)(Qp.b, {})]
          }), (0, dp.jsx)("div", {
            className: "ThumbnailUploadSuccessText AnimFadeInScaleUp",
            children: Sp("thumbnail:thumbnailUploaded")
          })]
        }), (0, dp.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: Sp("thumbnail:uploadThumbnail")
        }), (0, dp.jsxs)("div", {
          className: "ThumbnailUploaderBody",
          children: [(0, dp.jsxs)("div", {
            className: "ThumbnailUploaderLeft",
            children: [(0, dp.jsx)("h3", {
              className: "SchematicPopupSubtitle",
              children: Sp("thumbnail:chooseImage", {
                maxSizeKb: Jp
              })
            }), (0, dp.jsx)(hp, {
              schematicId: ip,
              hasReadUploadPolicy: yp,
              onPolicyValidationError: () => {
                vp(!0)
              },
              onThumbnailReady: async (pp, ip, cp) => {
                await Ip(pp, ip, cp), Pp(!0), tp.current = setTimeout(op, ap)
              }
            })]
          }), (0, dp.jsxs)("div", {
            className: "ThumbnailUploadPolicy",
            children: [(0, dp.jsx)("h3", {
              className: "ThumbnailUploadPolicyTitle",
              children: Sp("thumbnail:uploadPolicy")
            }), (0, dp.jsxs)("ul", {
              className: "ThumbnailUploadPolicyList",
              children: [(0, dp.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, dp.jsx)(Dp.d, {
                  name: "check"
                }), (0, dp.jsx)("span", {
                  children: Sp("thumbnail:policyFollowGuidelines")
                })]
              }), (0, dp.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, dp.jsx)(Dp.d, {
                  name: "check"
                }), (0, dp.jsx)("span", {
                  children: Sp("thumbnail:policyInGameAssets")
                })]
              }), (0, dp.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, dp.jsx)(Dp.d, {
                  name: "check"
                }), (0, dp.jsx)("span", {
                  children: Sp("thumbnail:policyLimitText")
                })]
              }), (0, dp.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, dp.jsx)(Dp.d, {
                  name: "x"
                }), (0, dp.jsx)("span", {
                  children: Sp("thumbnail:policyCopyrightContent")
                })]
              }), (0, dp.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, dp.jsx)(Dp.d, {
                  name: "x"
                }), (0, dp.jsx)("span", {
                  children: Sp("thumbnail:policyOutOfGameAssets")
                })]
              }), (0, dp.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, dp.jsx)(Dp.d, {
                  name: "x"
                }), (0, dp.jsx)("span", {
                  children: Sp("thumbnail:policyBloxdTags")
                })]
              }), (0, dp.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, dp.jsx)(Dp.d, {
                  name: "x"
                }), (0, dp.jsx)("span", {
                  children: Sp("thumbnail:policyMustReflectGame")
                })]
              })]
            }), (0, dp.jsxs)("label", {
              className: Wp()("ThumbnailUploadCheckbox Policy", {
                ValidationError: wp && !yp
              }),
              children: [(0, dp.jsx)("input", {
                type: "checkbox",
                checked: yp,
                onChange: pp => {
                  Up(pp.target.checked)
                }
              }), Sp("thumbnail:agreeToUploadPolicy")]
            }), wp && !yp && (0, dp.jsx)("div", {
              className: "ThumbnailPolicyError",
              children: Sp("thumbnail:policyRequired")
            })]
          })]
        })]
      })
    }
    var Fp = cp(1211);
    const gp = {
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

    function Gp(pp) {
      var ip, cp;
      let {
        schematicData: Sp,
        updateSchematicData: Yp,
        publishFormEnabled: Ap,
        onClose: Pp
      } = pp;
      const {
        t: yp
      } = (0, xp.H)(), {
        userContext: Up,
        isUserContextUpdating: wp
      } = (0, Ep.b)(), vp = (0, Cp.b)(), [tp, Hp] = (0, Op.useState)([]), [ep, jp] = (0, Op.useState)([]), [kp, mp] = (0, Op.useState)(!0), [Rp, qp] = (0, Op.useState)(null !== (ip = Sp.customThumbnailId) && void 0 !== ip ? ip : null), [lp, Qp] = (0, Op.useState)(null), Jp = (0, Op.useRef)(null !== (cp = Sp.customThumbnailId) && void 0 !== cp ? cp : null), Bp = (0, Op.useRef)(0), Np = (0, Op.useRef)(null), Tp = (0, Op.useRef)(null), fp = (0, Op.useRef)(null), bp = (0, Op.useRef)(!1);

      function hp(pp, ip) {
        fp.current && (clearTimeout(fp.current), fp.current = null), Qp(pp), null !== pp && ip && (fp.current = setTimeout((() => {
          Qp(null), fp.current = null
        }), 5e3))
      }(0, Op.useEffect)((() => () => {
        clearTimeout(Tp.current), clearTimeout(fp.current)
      }), []);
      const ap = (0, Op.useCallback)((() => {
        mp(!0), Mp.b.getOwnedThumbnails(Up).then((pp => {
          const ip = [],
            cp = [];
          for (const Op of pp.thumbnails) Op.rejectionPolicyId ? ip.push(Op) : cp.push(Op);
          ip.sort(((pp, ip) => pp.lastUpdatedAt - ip.lastUpdatedAt)), cp.sort(((pp, ip) => {
            const cp = pp.approved ? 1 : 0,
              Op = (ip.approved ? 1 : 0) - cp;
            return 0 !== Op ? Op : ip.lastUpdatedAt - pp.lastUpdatedAt
          })), jp(ip), Hp(cp)
        })).catch((pp => {
          console.error("Failed to fetch thumbnails:", pp)
        })).finally((() => {
          mp(!1)
        }))
      }), [Up]);
      async function gp(pp, ip, cp) {
        return Mp.b.uploadSchematicThumbnail(Up, pp, ip, cp).then((() => {
          hp({
            text: yp("thumbnail:uploadedAwaitingModeration"),
            type: "success"
          }, !0), ap()
        }))
      }

      function Gp() {
        Bp.current = Date.now(), Tp.current = null;
        const pp = Np.current;
        Np.current = null, hp({
          text: yp("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), Mp.b.setSchematicThumbnail(Up, Sp.schematicId, pp).then((() => {
          vp.current && (hp({
            text: yp("thumbnail:thumbnailUpdated"),
            type: "success"
          }, !0), Jp.current = pp, Yp("customThumbnailId", pp), Yp("customThumbnailBlurhash", void 0), Yp("customThumbnailVariants", void 0))
        })).catch((pp => {
          vp.current && (hp({
            text: pp.errorMessageForUser ? yp(pp.errorMessageForUser, pp.errorMessageTranslationParams) : yp("thumbnail:failedToSetThumbnail"),
            type: "error"
          }, !0), qp(Jp.current))
        }))
      }

      function zp(pp) {
        qp(pp), Np.current = pp;
        const ip = Date.now() - Bp.current;
        ip >= 1e3 ? Gp() : (hp({
          text: yp("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), Tp.current || (Tp.current = setTimeout((() => {
          Gp()
        }), 1e3 - ip)))
      }
      return (0, Op.useEffect)((() => {
        !1 === wp && ap()
      }), [wp, ap]), ep.length > 0 ? (0, dp.jsx)(rp, {
        rejectedThumbnails: ep,
        userContext: Up,
        isMountedRef: vp,
        onAcknowledged: ap
      }) : (0, dp.jsxs)("div", {
        className: "BloxdForm ThumbnailSection",
        children: [(0, dp.jsxs)("div", {
          className: "SectionTitle",
          children: [yp("thumbnail:gameThumbnail"), lp && (0, dp.jsx)("span", {
            className: Wp()("ThumbnailActionMsg", `ThumbnailActionMsg--${lp.type}`),
            children: lp.text
          })]
        }), (0, dp.jsx)("div", {
          className: "SectionBody",
          children: (0, dp.jsxs)("div", {
            className: "ThumbnailGrid",
            children: [(0, dp.jsxs)("div", {
              className: Wp()("ThumbnailGridItem ThumbnailGridItemDefault", {
                ThumbnailGridItemSelected: null === Rp
              }),
              onClick: () => zp(null),
              children: [(0, dp.jsx)(Xp.b, {
                game: {
                  schematicId: Sp.schematicId,
                  imageBlurhash: Sp.imageBlurhash
                }
              }), (0, dp.jsx)("div", {
                className: "ThumbnailGridItemLabel ThumbnailDefaultLabel",
                children: yp("general:default")
              })]
            }), kp && (0, dp.jsx)(Lp.c, {}), tp.map(((pp, ip) => (0, dp.jsxs)("div", {
              className: Wp()("ThumbnailGridItem", {
                ThumbnailGridItemSelected: Rp === pp.id,
                ThumbnailGridItemPending: !pp.approved
              }),
              onClick: () => {
                pp.approved && zp(pp.id)
              },
              children: [pp.approved && (0, dp.jsx)("img", {
                src: `${Fp.clientSideServerUrls.s3Url}/customThumbnails/${pp.id}.jpg`,
                alt: "Thumbnail"
              }), pp.approved && (0, dp.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: pp.name
              }), pp.id && (0, dp.jsx)(Ip.K, {
                className: "ThumbnailDeleteButton",
                onClick: ip => async function(pp, ip, cp) {
                  pp.stopPropagation();
                  const Op = await op.NotificationProvider.showCustomPopup({
                      body: pp => (0, dp.jsx)(Zp, {
                        thumbnailId: ip,
                        thumbnailName: cp,
                        onClose: ip => {
                          ip && (bp.current = !0), pp()
                        }
                      }),
                      middleScreenPopupClassName: "ThumbnailDeleteConfirmPopup",
                      onClose: Pp
                    }).getResult(),
                    Ip = bp.current;
                  bp.current = !1, Ip && !0 === Op && (vp.current && hp({
                    text: yp("thumbnail:deletingThumbnail"),
                    type: "info"
                  }, !1), Mp.b.deleteSchematicThumbnail(Up, ip).then((() => {
                    vp.current && (hp({
                      text: yp("thumbnail:thumbnailDeleted"),
                      type: "success"
                    }, !0), Jp.current === ip && zp(null), ap())
                  })).catch((pp => {
                    vp.current && hp({
                      text: pp.errorMessageForUser ? yp(pp.errorMessageForUser, pp.errorMessageTranslationParams) : yp("thumbnail:failedToDeleteThumbnail"),
                      type: "error"
                    }, !0)
                  })))
                }(ip, pp.id, pp.name),
                children: (0, dp.jsx)(Dp.d, {
                  name: "trash-can"
                })
              }), !pp.approved && (0, dp.jsx)("div", {
                className: "ThumbnailUnapprovedIcon",
                children: (0, dp.jsx)(Dp.d, {
                  name: "hourglass-clock"
                })
              }), !pp.approved && (0, dp.jsxs)("div", {
                className: "ThumbnailGridItemLabel ThumbnailPendingLabel",
                children: [pp.name, (0, dp.jsx)("br", {}), yp("thumbnail:pendingApproval")]
              })]
            }, ip))), (0, dp.jsxs)("div", {
              className: Wp()("ThumbnailGridItem ThumbnailUploadTile", {
                ThumbnailUploadTileDisabled: !Ap
              }),
              onClick: () => {
                Ap && function(pp) {
                  let {
                    schematicId: ip,
                    ownedThumbnailCount: cp,
                    onThumbnailReady: Op,
                    onClose: Ip
                  } = pp;
                  op.NotificationProvider.showCustomPopup({
                    body: pp => (0, dp.jsx)(np, {
                      schematicId: ip,
                      ownedThumbnailCount: cp,
                      onClose: pp,
                      onThumbnailReady: Op
                    }),
                    middleScreenPopupClassName: "SchematicThumbnailPopup",
                    onClose: Ip,
                    unlockPointerKey: "schematicThumbnailUploaderPopup"
                  })
                }({
                  schematicId: Sp.schematicId,
                  ownedThumbnailCount: tp.length,
                  onThumbnailReady: gp,
                  onClose: Pp
                })
              },
              children: [(0, dp.jsx)(Dp.d, {
                name: "plus"
              }), (0, dp.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: yp("thumbnail:uploadThumbnail")
              })]
            })]
          })
        })]
      })
    }

    function rp(pp) {
      let {
        rejectedThumbnails: ip,
        userContext: cp,
        isMountedRef: op,
        onAcknowledged: Sp
      } = pp;
      const {
        t: Yp
      } = (0, xp.H)(), [Ap, Pp] = (0, Op.useState)(!1), [Wp, yp] = (0, Op.useState)(!1), Up = function(pp) {
        const ip = new Map;
        for (const cp of pp) {
          const pp = cp.rejectionPolicyId,
            Op = ip.get(pp);
          Op ? Op.push(cp) : ip.set(pp, [cp])
        }
        return ip
      }(ip);
      return (0, dp.jsxs)("div", {
        className: "ThumbnailRejectionNotice",
        children: [(0, dp.jsxs)("div", {
          className: "ThumbnailRejectionNoticeTitle",
          children: [(0, dp.jsx)(Dp.d, {
            name: "triangle-exclamation"
          }), " ", Yp("thumbnail:thumbnailsRejected"), " ", (0, dp.jsx)(Dp.d, {
            name: "triangle-exclamation"
          })]
        }), (0, dp.jsx)("div", {
          className: "ThumbnailRejectionNoticeSubtitle",
          children: Yp("thumbnail:thumbnailsRejectedDescription")
        }), (0, dp.jsx)("div", {
          className: "ThumbnailRejectionNoticeList",
          children: [...Up.entries()].map((pp => {
            let [ip, cp] = pp;
            const Op = gp[ip];
            return (0, dp.jsxs)("div", {
              className: "ThumbnailRejectionNoticeGroup",
              children: [(0, dp.jsx)("div", {
                className: "ThumbnailRejectionNoticeItems",
                children: cp.map((pp => (0, dp.jsxs)("div", {
                  className: "ThumbnailRejectionNoticeItem",
                  children: [(0, dp.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemIcon",
                    children: (0, dp.jsx)(Dp.d, {
                      name: "image-slash"
                    })
                  }), (0, dp.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemDetails",
                    children: (0, dp.jsx)("div", {
                      className: "ThumbnailRejectionNoticeItemName",
                      children: pp.name
                    })
                  })]
                }, pp.id)))
              }), (0, dp.jsxs)("div", {
                className: "ThumbnailRejectionNoticeGroupReason",
                children: [Yp("thumbnail:rejectionReason"), " ", Op ? Yp(Op.reason) : ip]
              }), Op && (0, dp.jsx)("ul", {
                className: "ThumbnailRejectionNoticeGroupTips",
                children: Op.tips.map((pp => (0, dp.jsx)("li", {
                  children: Yp(pp)
                }, pp)))
              })]
            }, ip)
          }))
        }), (0, dp.jsxs)("label", {
          className: "ThumbnailRejectionNoticeCheckbox",
          children: [(0, dp.jsx)(qp.b, {
            checked: Ap,
            onChange: pp => Pp(pp.target.checked),
            disabled: Wp
          }), (0, dp.jsx)("span", {
            children: Yp("thumbnail:haveReadRejectionReasons")
          })]
        }), (0, dp.jsx)(Ip.o, {
          onClick: async function() {
            yp(!0);
            const pp = await Promise.allSettled(ip.map((pp => Mp.b.deleteSchematicThumbnail(cp, pp.id))));
            if (!op.current) return;
            const Op = pp.filter((pp => "rejected" === pp.status));
            Op.length > 0 && console.error("Some rejected thumbnails failed to delete:", Op), Sp()
          },
          disabled: !Ap || Wp,
          className: "ThumbnailRejectionNoticeAcceptButton",
          children: Wp ? (0, dp.jsx)(Lp.c, {}) : Yp("general:accept")
        })]
      })
    }

    function Zp(pp) {
      let {
        thumbnailId: ip,
        thumbnailName: cp,
        onClose: Op
      } = pp;
      const {
        t: op
      } = (0, xp.H)();
      return (0, dp.jsxs)("div", {
        className: "ThumbnailDeleteConfirm",
        children: [(0, dp.jsx)("div", {
          className: "ThumbnailDeleteConfirmTitle",
          children: op("thumbnail:deleteThumbnail")
        }), (0, dp.jsxs)("div", {
          className: "ThumbnailDeleteConfirmImageContainer",
          children: [(0, dp.jsx)("img", {
            className: "ThumbnailDeleteConfirmImage",
            src: `${Fp.clientSideServerUrls.s3Url}/customThumbnails/${ip}.jpg`,
            alt: "Thumbnail to delete"
          }), (0, dp.jsx)("div", {
            className: "ThumbnailGridItemLabel",
            children: cp
          })]
        }), (0, dp.jsx)("div", {
          className: "ThumbnailDeleteConfirmSubtitle",
          children: op("thumbnail:deleteThumbnailConfirmation")
        }), (0, dp.jsxs)("div", {
          className: "ThumbnailDeleteConfirmButtons",
          children: [(0, dp.jsxs)(Ip.K, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => Op(!0),
            children: [(0, dp.jsx)(Dp.d, {
              name: "trash-can"
            }), " ", op("general:delete")]
          }), (0, dp.jsx)(Ip.j, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => Op(!1),
            children: op("general:cancel")
          })]
        })]
      })
    }
    var zp = cp(2187),
      sp = cp(5103),
      Kp = cp(5107),
      Vp = cp(5152);

    function ii(pp) {
      let {
        schematicData: ip,
        setTexturePack: cp,
        initializeTexturePack: op,
        publishFormEnabled: Ip
      } = pp;
      const {
        t: Sp
      } = (0, xp.H)(), [Lp, Yp] = (0, Op.useState)(null), [Dp, Ap] = (0, Op.useState)(null), [Pp, yp] = (0, Op.useState)(!1), Up = (0, Cp.b)(), wp = Ip && !Pp, vp = ip.customTexturePackKey;

      function tp(pp) {
        var ip;
        Yp(pp.metaData.id), Ap(null !== (ip = pp.metaData.fromFolderName) && void 0 !== ip ? ip : null), (pp.metaData.id !== zp.q.CUSTOM || pp.metaData.fromFolderName) && cp(pp)
      }
      return (0, Op.useEffect)((() => {
        vp && (yp(!0), (0, sp.d)(vp).then((pp => {
          var ip;
          Up.current && (pp ? (Yp(pp.metaData.id), Ap(null !== (ip = pp.metaData.fromFolderName) && void 0 !== ip ? ip : null), op(pp)) : console.error(`No texture pack at ${vp}`))
        })).catch((pp => {
          console.error("Error fetching texture pack: ", pp)
        })).finally((() => {
          yp(!1)
        })))
      }), [vp, op, Up]), (0, dp.jsxs)("div", {
        className: "BloxdForm TexturePackSection",
        children: [(0, dp.jsx)("div", {
          className: "SectionTitle",
          children: Sp("customTexturePack:customTexturePack")
        }), (0, dp.jsxs)("div", {
          className: "TexturePackList",
          children: [(0, dp.jsx)("div", {
            className: Wp()("TexturePack", {
              Selected: null === Lp && !Pp,
              Disabled: !wp
            }),
            onClick: () => {
              wp && (Yp(null), cp(null), Ap(null))
            },
            children: (0, dp.jsx)("div", {
              className: "TexturePackName",
              children: "No Override"
            })
          }), Object.values(zp.q).map((pp => (0, dp.jsx)(Kp.f, {
            id: pp,
            isSelected: pp === Lp,
            setSelected: tp,
            disabled: !wp
          }, pp)))]
        }), Lp === zp.q.CUSTOM && (0, dp.jsx)(Vp.b, {
          folderName: Dp,
          onTexturePackUpdated: tp,
          disabled: !wp,
          maxFileSizeMb: 25,
          packOwner: "customGame"
        })]
      })
    }
    var ci = cp(5188);

    function Oi(pp) {
      var ip;
      let {
        gameCategory: cp,
        setGameCategory: Op,
        disabled: op
      } = pp;
      const Sp = null !== (ip = (0, yp.ob)(cp)) && void 0 !== ip ? ip : "other";
      return (0, dp.jsxs)("div", {
        className: "GameCategoryPicker",
        children: [(0, dp.jsx)(vp.i, {
          label: "worldBuilder:gameCategoryGroup",
          className: "GameCategoryGroup",
          disabled: op,
          children: (0, dp.jsx)(tp.d, {
            options: yp.db.map((pp => ({
              value: pp,
              label: yp.cb[pp]
            }))),
            value: Sp,
            onChange: pp => {
              pp.value !== Sp && Op(yp.X[pp.value][0])
            }
          })
        }), (0, dp.jsx)(vp.i, {
          label: "worldBuilder:gameCategory",
          className: "GameCategory",
          disabled: op,
          children: (0, dp.jsx)("div", {
            className: "GameCategoryOptions",
            children: yp.X[Sp].map((pp => (0, dp.jsx)(Ip.S, {
              active: pp === cp,
              onClick: () => {
                Op(pp)
              },
              children: (0, yp.nb)(pp)
            }, pp)))
          })
        })]
      })
    }

    function oi(pp) {
      let {
        editor: ip,
        onClose: cp
      } = pp;
      const {
        t: Op
      } = (0, xp.H)(), {
        schematicData: op,
        updateSchematicData: Ip,
        publishFormEnabled: Lp,
        formEnabled: Yp
      } = ip;
      return (0, dp.jsxs)(dp.Fragment, {
        children: [(0, dp.jsxs)(ep, {
          icon: "pen-to-square",
          title: Op("worldBuilder:basicsSection"),
          disabled: !Yp,
          children: [(0, dp.jsx)(jp, {
            label: Op("general:name"),
            caption: Op("worldBuilder:schematicNameTagsHint"),
            children: (0, dp.jsx)(Sp.c, {
              className: "SchematicPageName",
              defaultValue: op.name,
              onValueChange: pp => Ip("name", pp),
              placeholderText: Op("worldBuilder:schematicNamePlaceholder"),
              maxLength: Ap.qb
            })
          }), (0, dp.jsx)(jp, {
            label: Op("general:description"),
            children: (0, dp.jsx)(Sp.c, {
              className: "SchematicPageDescription",
              useTextarea: !0,
              defaultValue: op.description,
              onValueChange: pp => Ip("description", pp),
              placeholderText: Op("worldBuilder:schematicDescriptionPlaceholder"),
              maxLength: Ap.ob
            })
          }), (0, dp.jsx)(Oi, {
            gameCategory: op.gameCategory,
            setGameCategory: pp => Ip("gameCategory", pp),
            disabled: !Lp
          }), !0 === op.gamePublished && (0, dp.jsx)(Gp, {
            schematicData: op,
            updateSchematicData: Ip,
            publishFormEnabled: Lp,
            onClose: function() {
              null === cp || void 0 === cp || cp()
            }
          })]
        }), (0, dp.jsx)(mp, {
          schematicData: op,
          updateSchematicData: Ip,
          publishFormEnabled: Lp,
          formEnabled: Yp
        }), !0 === op.gamePublished && (0, dp.jsx)(ep, {
          icon: "palette",
          title: Op("worldBuilder:texturePackSection"),
          disabled: !Yp,
          children: (0, dp.jsx)(ii, {
            schematicData: op,
            setTexturePack: ip.setTexturePack,
            initializeTexturePack: ip.initializeTexturePack,
            publishFormEnabled: Lp
          })
        })]
      })
    }

    function Ii(pp) {
      let {
        editor: ip
      } = pp;
      const {
        t: cp
      } = (0, xp.H)(), {
        schematicData: Op,
        formEnabled: op,
        hasUnsavedChanges: Sp
      } = ip, Ap = op && Sp;
      return (0, dp.jsxs)("footer", {
        className: "SchematicPageFooter",
        children: [op && Sp && (0, dp.jsxs)("div", {
          className: "SchematicPageFooterStatus",
          children: [(0, dp.jsx)("span", {
            className: "SchematicPageFooterStatusDot"
          }), cp("worldBuilder:unsavedChanges")]
        }), (0, dp.jsx)(Yp.f, {
          tooltipInner: (0, dp.jsx)("div", {
            className: "SaveButtonTooltip",
            children: cp(op && !Sp ? "worldBuilder:saveChangesNoneDescription" : "worldBuilder:saveChangesDescription")
          }),
          children: (0, dp.jsxs)(Ip.f, {
            className: "SaveChangesButton",
            onClick: () => ip.saveSchematic(Op.gamePublished),
            disabled: !Ap,
            children: [(0, dp.jsxs)("span", {
              className: op ? "" : "SaveChangesButtonBodyHidden",
              children: [(0, dp.jsx)(Dp.d, {
                name: "wrench"
              }), " ", cp("worldBuilder:saveChanges")]
            }), !op && (0, dp.jsx)(Lp.c, {})]
          })
        })]
      })
    }

    function Si(pp) {
      let {
        schematic: ip,
        onSchematicUpdate: cp,
        onClose: op,
        inSourceWorld: Sp
      } = pp;
      const {
        t: Lp
      } = (0, xp.H)();

      function Yp() {
        null === op || void 0 === op || op()
      }
      const Dp = (0, ci.b)(ip, {
        onNavigateAway: Yp,
        inSourceWorld: Sp
      });
      return (0, Op.useEffect)((() => {
        null === cp || void 0 === cp || cp(Dp.schematicData)
      }), [Dp.schematicData, cp]), (0, dp.jsxs)("div", {
        className: "SchematicPage SchematicPagePopupVariant",
        children: [(0, dp.jsxs)("div", {
          className: "SchematicPageBody",
          children: [(0, dp.jsx)(Ip.d, {
            onClick: Yp,
            children: Lp("worldBuilder:back")
          }), (0, dp.jsx)(ep, {
            icon: "rocket-launch",
            title: Lp("worldBuilder:actionsSection"),
            disabled: !Dp.formEnabled,
            children: (0, dp.jsx)(Rp.e, {
              editor: Dp
            })
          }), (0, dp.jsx)(oi, {
            editor: Dp,
            onClose: Yp
          })]
        }), (0, dp.jsx)(Ii, {
          editor: Dp
        })]
      })
    }

    function xi(pp) {
      let {
        schematic: ip,
        onSchematicUpdate: cp,
        onClose: Op,
        inSourceWorld: Ip
      } = pp;
      op.NotificationProvider.showCustomPopup({
        body: pp => (0, dp.jsx)(Si, {
          schematic: ip,
          onSchematicUpdate: cp,
          onClose: pp,
          inSourceWorld: Ip
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: Op,
        unlockPointerKey: "schematicPagePopup"
      })
    }
  },
  5067: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Ap
    });
    var Op = cp(1049),
      op = cp.n(Op),
      Ip = cp(1201),
      Sp = cp(1060),
      xp = cp(1480),
      Lp = cp(1387),
      Yp = cp(1361),
      Dp = cp(1112);

    function Ap(pp) {
      let {
        editor: ip,
        className: cp
      } = pp;
      const {
        t: Op
      } = (0, Ip.H)(), {
        schematicData: Ap,
        formEnabled: Pp,
        publishFormEnabled: Wp
      } = ip, yp = !Pp || !Wp;
      return (0, Dp.jsxs)("div", {
        className: op()("PublishButtonContainer", cp),
        children: [ip.canEditSourceWorld && (0, Dp.jsxs)(xp.f, {
          onClick: ip.editSourceWorld,
          disabled: yp,
          children: [(0, Dp.jsx)(Sp.d, {
            name: "edit"
          }), " ", Op("worldBuilder:editSourceWorld")]
        }), !Ap.gamePublished && (0, Dp.jsx)(Lp.f, {
          tooltipInner: (0, Dp.jsx)("div", {
            className: "PublishButtonTooltip",
            children: Op("worldBuilder:publishAsGameDescription")
          }),
          children: (0, Dp.jsxs)(xp.o, {
            onClick: () => ip.saveSchematic(!0),
            disabled: yp,
            children: [(0, Dp.jsx)(Sp.d, {
              name: "rocket-launch"
            }), " ", Op("worldBuilder:publishAsGame"), " ", (0, Dp.jsx)(Sp.d, {
              name: "info-circle"
            })]
          })
        }), !0 === Ap.gamePublished && (0, Dp.jsxs)(Dp.Fragment, {
          children: [(0, Dp.jsx)(Lp.f, {
            tooltipInner: (0, Dp.jsx)("div", {
              className: "PublishButtonTooltip",
              children: Op("worldBuilder:unpublishAsGameDescription")
            }),
            children: (0, Dp.jsxs)(xp.K, {
              onClick: ip.unpublishSchematic,
              disabled: yp,
              children: [(0, Dp.jsx)(Sp.d, {
                name: "rocket-launch"
              }), " ", Op("worldBuilder:unpublishAsGame"), " ", (0, Dp.jsx)(Sp.d, {
                name: "info-circle"
              })]
            })
          }), (0, Dp.jsxs)(xp.f, {
            onClick: ip.playGame,
            disabled: yp,
            children: [(0, Dp.jsx)(Sp.d, {
              name: "joystick"
            }), " ", Op("general:playGame")]
          })]
        }), !Pp && (0, Dp.jsx)(Yp.c, {
          loaderType: "Secondary"
        })]
      })
    }
  },
  5103: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => op
    });
    var Op = cp(1211);
    async function op(pp) {
      const ip = await fetch(`${Op.clientSideServerUrls.s3Url}/${pp}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === ip.status || 403 === ip.status) return null;
      if (!ip.ok) throw new Error(`Failed to download the texture pack (${ip.status})`);
      return await ip.json()
    }
  },
  5188: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => wp
    });
    var Op = cp(62),
      op = cp(1356),
      Ip = cp(1014),
      Sp = cp(156),
      xp = cp(1569),
      Lp = cp(25),
      Yp = cp(1956),
      Dp = cp(1520),
      Ap = cp(4677),
      Pp = cp(1372),
      Wp = cp(1141),
      yp = cp(1538);

    function Up(pp, ip) {
      return {
        schematicId: pp.schematicId,
        name: pp.name,
        description: pp.description,
        gamePublished: ip,
        gameCategory: pp.gameCategory,
        defaultGamemode: pp.defaultGamemode,
        voidDeathHeight: pp.voidDeathHeight,
        disableKeepInventory: pp.disableKeepInventory,
        disableTpRequests: pp.disableTpRequests,
        disableLobbySpawn: pp.disableLobbySpawn,
        disableMobs: pp.disableMobs,
        disableSpawnProtection: pp.disableSpawnProtection,
        disableFallDamage: pp.disableFallDamage,
        worldBorder: pp.worldBorder,
        hideLobbyCode: pp.hideLobbyCode,
        enableSmpMarketplace: pp.enableSmpMarketplace,
        enableSurvivalGuns: pp.enableSurvivalGuns,
        enableSpawnReset: pp.enableSpawnReset,
        enableDayNight: pp.enableDayNight,
        persistWorld: pp.persistWorld,
        persistInventory: pp.persistInventory
      }
    }

    function wp(pp) {
      let {
        onNavigateAway: ip,
        inSourceWorld: cp = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const {
        userContext: wp
      } = (0, Wp.b)(), vp = (0, yp.useNavigatePreserveSearch)(), [tp, Hp] = (0, Op.useState)({
        ...pp
      }), [dp, ep] = (0, Op.useState)("Enter"), [jp, kp] = (0, Op.useState)(void 0), mp = (0, Op.useRef)(Up(pp, pp.gamePublished)), Rp = (0, Op.useRef)(void 0), qp = "Enter" === dp, Mp = wp.playerHasRank("developer") || wp.playerHasRank("admin") || "Enter" === dp && !1 !== tp.schematicContainsSpawnBlock, Cp = void 0 !== jp && jp !== Rp.current || JSON.stringify(Up(tp, tp.gamePublished)) !== JSON.stringify(mp.current);

      function Ep(pp, ip) {
        Hp((cp => ({
          ...cp,
          [pp]: ip
        })))
      }
      const Xp = (0, Op.useCallback)((pp => {
        Rp.current = pp, kp(pp)
      }), []);

      function lp(pp) {
        ep("Loading");
        const ip = Up(tp, pp),
          cp = jp !== Rp.current ? jp : void 0;
        Dp.b.updateSchematic(wp, ip, cp).then((cp => {
          let {
            customTexturePackKey: Op
          } = cp;
          ep("Success"), Ep("customTexturePackKey", Op), mp.current = ip, Rp.current = void 0, kp(void 0), setTimeout((() => {
            Ep("gamePublished", pp), ep("Enter")
          }), 1e3)
        })).catch((pp => {
          var ip;
          (console.error("Failed to save schematic:", pp), ep("Error"), pp instanceof Sp.e && pp.errorMessageForUser) && Pp.NotificationProvider.showAlertPopup({
            title: "worldBuilder:changesNotSaved",
            subtitle: pp.errorMessageForUser,
            textOpts: {
              subtitle: null !== (ip = pp.errorMessageTranslationParams) && void 0 !== ip ? ip : void 0
            },
            confirmText: "general:ok"
          });
          setTimeout((() => {
            ep("Enter")
          }), 1e3)
        }))
      }
      return {
        schematicData: tp,
        updateSchematicData: Ep,
        setTexturePack: kp,
        initializeTexturePack: Xp,
        updateState: dp,
        formEnabled: qp,
        publishFormEnabled: Mp,
        hasUnsavedChanges: Cp,
        canEditSourceWorld: !cp,
        saveSchematic: lp,
        unpublishSchematic: function() {
          Pp.NotificationProvider.showPromptPopup({
            icon: "rocket-launch",
            title: "worldBuilder:unpublishAsGameConfirmTitle",
            subtitle: "worldBuilder:unpublishAsGameConfirmSubtitle",
            confirmText: "worldBuilder:unpublishAsGame",
            cancelText: "general:cancel",
            unlockPointerKey: "unpublishGamePrompt"
          }).getResult().then((pp => {
            !0 === pp && lp(!1)
          }))
        },
        editSourceWorld: function() {
          ep("Loading"), Ap.b.getSourceWorld(tp.schematicId).then((pp => {
            Yp.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, Lp.k)("other"), vp((0, op.c)("classic", pp)), null === ip || void 0 === ip || ip()
          })).catch((pp => {
            console.error("Failed to get source world:", pp), ep("Error"), setTimeout((() => {
              ep("Enter")
            }), 1e3)
          }))
        },
        playGame: function() {
          Yp.gameBridge.send("leaveGame", {
            reloadPath: "/"
          }), vp((0, xp.u)((0, Ip.t)(tp.schematicId), tp)), null === ip || void 0 === ip || ip()
        }
      }
    }
  },
  5054: () => {}
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);