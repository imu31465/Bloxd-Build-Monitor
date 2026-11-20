export const id = 104;
export const ids = [104];
export const modules = {
  4773: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Bq,
      c: () => uq,
      d: () => Wq
    });
    gq(4781);
    var Yq = gq(1183),
      lq = gq(1018),
      Oq = gq.n(lq),
      mq = gq(1341),
      xq = (gq(57), gq(4195)),
      Aq = gq(1025),
      cq = gq(1070);

    function uq(qq) {
      let {
        children: Eq,
        label: gq,
        className: lq,
        circleInfoText: xq,
        disabled: uq,
        onLabelClick: Bq
      } = qq;
      const {
        t: Wq
      } = (0, Yq.v)(), Nq = (0, cq.jsxs)("div", {
        className: Oq()("Label", {
          ClickableLabel: void 0 !== Bq
        }),
        onClick: Bq,
        children: [Wq(gq), xq && (0, cq.jsx)(Aq.d, {
          name: "circle-info"
        })]
      });
      return (0, cq.jsxs)("div", {
        className: Oq()("LabeledInput", {
          [lq]: lq,
          DisabledLabelInput: uq
        }),
        children: [xq && (0, cq.jsx)(mq.e, {
          tooltipInner: (0, cq.jsx)("div", {
            className: "LabeledInputTooltip",
            children: Wq(xq)
          }),
          children: Nq
        }), !xq && Nq, Eq]
      })
    }

    function Bq(qq) {
      let {
        checked: Eq,
        setChecked: gq
      } = qq;
      return (0, cq.jsx)("div", {
        className: "OtherInput ClickableOtherInput",
        "data-pad-focusable": !0,
        onClick: qq => {
          gq(!Eq)
        },
        children: (0, cq.jsx)(xq.b, {
          checked: Eq,
          onChange: qq => {
            gq(qq.target.checked)
          },
          disabled: !1
        })
      })
    }

    function Wq(qq) {
      let {
        checked: Eq,
        setChecked: gq,
        disabled: Yq
      } = qq;
      return (0, cq.jsx)("div", {
        className: Oq()("SwitchContainer", {
          SwitchContainerDisabled: Yq
        }),
        onClick: () => {
          Yq || gq(!Eq)
        },
        children: (0, cq.jsx)(xq.b, {
          className: "SwitchCheckbox",
          checked: Eq,
          onChange: qq => {
            gq(qq.target.checked)
          },
          disabled: !!Yq
        })
      })
    }
  },
  4786: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => cq
    });
    var Yq = gq(1018),
      lq = gq.n(Yq),
      Oq = gq(4456),
      mq = gq(1183),
      xq = gq(1070);
    const Aq = [...Oq.i, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function cq(qq) {
      const {
        disabled: Eq,
        hideWrapper: gq
      } = qq, {
        t: Yq
      } = (0, mq.v)(), cq = qq.advancedMode ? Aq.map((Eq => [Eq, qq.callbacks[Eq]])) : Oq.i.map((Eq => [Eq, qq.callbacks[Eq]])), Bq = (0, xq.jsx)("div", {
        className: lq()("PluginsGrid", {
          SectionBody: !gq
        }),
        children: cq.map((qq => {
          let [gq, Yq] = qq;
          return (0, xq.jsx)(uq, {
            plugin: gq,
            callbacks: Yq,
            disabled: Eq
          }, gq)
        }))
      });
      return gq ? Bq : (0, xq.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, xq.jsx)("div", {
          className: "SectionTitle",
          children: Yq("worldBuilder:pluginsSection")
        }), Bq]
      })
    }

    function uq(qq) {
      let {
        plugin: Eq,
        callbacks: {
          isEnabled: gq,
          hG: Yq
        },
        disabled: Oq
      } = qq;
      const {
        t: Aq
      } = (0, mq.v)(), cq = gq();
      return (0, xq.jsxs)("div", {
        className: lq()("PluginCard", {
          PluginCardEnabled: cq,
          PluginCardDisabledForm: Oq
        }),
        "data-pad-focusable": !0,
        "aria-disabled": Oq || void 0,
        onClick: () => {
          Oq || Yq(!cq)
        },
        children: [(0, xq.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, xq.jsx)("img", {
            src: `/textures/games/classic/customGames/${Eq}.png`,
            alt: Eq
          })
        }), (0, xq.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, xq.jsx)("div", {
            className: "PluginCardTitle",
            children: Aq(Bq[Eq])
          }), (0, xq.jsx)("div", {
            className: "PluginCardDescription",
            children: Aq(Wq[Eq])
          })]
        }), (0, xq.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: Aq(cq ? "general:on" : "general:off")
        })]
      })
    }
    const Bq = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      Wq = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  4764: (qq, Eq, gq) => {
    gq.d(Eq, {
      i: () => lE,
      c: () => YE,
      e: () => gE,
      m: () => OE
    });
    var Yq = gq(57),
      lq = gq(1336),
      Oq = gq(1422),
      mq = gq(1659),
      xq = gq(1183),
      Aq = gq(1326),
      cq = gq(1341),
      uq = gq(1025),
      Bq = gq(1214),
      Wq = gq(1018),
      Nq = gq.n(Wq),
      aq = gq(296),
      Vq = gq(4456),
      dq = gq(1226),
      jq = gq(4773),
      Hq = gq(3040),
      oq = gq(4786),
      Pq = gq(1070);

    function Qq(qq) {
      let {
        icon: Eq,
        title: gq,
        disabled: Yq,
        children: lq
      } = qq;
      return (0, Pq.jsxs)("div", {
        className: Nq()("ManageCard", {
          ManageCardDisabled: Yq
        }),
        children: [(0, Pq.jsxs)("div", {
          className: "ManageCardHead",
          children: [(0, Pq.jsx)("div", {
            className: "ManageCardIcon",
            children: (0, Pq.jsx)(uq.d, {
              name: Eq
            })
          }), (0, Pq.jsx)("div", {
            children: (0, Pq.jsx)("h2", {
              className: "ManageCardTitle",
              children: gq
            })
          })]
        }), (0, Pq.jsxs)("div", {
          className: "ManageCardBody",
          children: [lq, Yq && (0, Pq.jsx)("div", {
            className: "ManageCardDisabledOverlay"
          })]
        })]
      })
    }

    function yq(qq) {
      let {
        label: Eq,
        caption: gq,
        children: Yq
      } = qq;
      return (0, Pq.jsxs)("div", {
        className: "ManageStackedField",
        children: [(0, Pq.jsx)("div", {
          className: "ManageStackedFieldLabel",
          children: Eq
        }), Yq, gq && (0, Pq.jsx)("div", {
          className: "ManageStackedFieldCaption",
          children: gq
        })]
      })
    }

    function tq(qq) {
      let {
        label: Eq,
        caption: gq,
        disabled: Yq,
        children: lq
      } = qq;
      return (0, Pq.jsxs)("div", {
        className: Nq()("ManageField", {
          ManageFieldDisabled: Yq
        }),
        children: [(0, Pq.jsxs)("div", {
          className: "ManageFieldText",
          children: [(0, Pq.jsx)("div", {
            className: "ManageFieldLabel",
            children: Eq
          }), (0, Pq.jsx)("div", {
            className: "ManageFieldCaption",
            children: gq
          })]
        }), (0, Pq.jsx)("div", {
          className: "ManageFieldControl",
          children: lq
        })]
      })
    }

    function rq(qq) {
      var Eq, gq;
      let {
        schematicData: Yq,
        updateSchematicData: lq,
        publishFormEnabled: Oq,
        formEnabled: mq
      } = qq;
      const {
        t: Aq
      } = (0, xq.v)(), cq = !Oq, uq = {
        tpRequests: {
          isEnabled: () => !Yq.disableTpRequests,
          hG: qq => lq("disableTpRequests", !qq)
        },
        spawnProtection: {
          isEnabled: () => !Yq.disableSpawnProtection,
          hG: qq => lq("disableSpawnProtection", !qq)
        },
        spawnReset: {
          isEnabled: () => !!Yq.enableSpawnReset,
          hG: qq => lq("enableSpawnReset", qq)
        },
        smpMarketplace: {
          isEnabled: () => !!Yq.enableSmpMarketplace,
          hG: qq => lq("enableSmpMarketplace", qq)
        },
        survivalGuns: {
          isEnabled: () => !!Yq.enableSurvivalGuns,
          hG: qq => lq("enableSurvivalGuns", qq)
        },
        fallDamage: {
          isEnabled: () => !Yq.disableFallDamage,
          hG: qq => lq("disableFallDamage", !qq)
        },
        dayNight: {
          isEnabled: () => !!Yq.enableDayNight,
          hG: qq => lq("enableDayNight", qq)
        }
      };
      return (0, Pq.jsxs)(Pq.Fragment, {
        children: [!1 === Yq.schematicContainsSpawnBlock && (0, Pq.jsx)("div", {
          className: "ManageWarningBanner",
          children: Aq("worldBuilder:mustContainSpawnBlock")
        }), (0, Pq.jsxs)("div", {
          className: "ManageSettingsGrid",
          children: [(0, Pq.jsxs)(Qq, {
            icon: "globe",
            title: Aq("worldBuilder:worldRulesSection"),
            disabled: !mq,
            children: [(0, Pq.jsx)(tq, {
              label: Aq("classic:defaultGamemode"),
              caption: Aq("classic:defaultGamemodeDescription"),
              disabled: cq,
              children: (0, Pq.jsx)(Hq.d, {
                controlClassName: "ManageDropdown",
                options: Vq.A.map((qq => ({
                  value: qq,
                  label: aq.r[qq]
                }))),
                value: Yq.defaultGamemode,
                onChange: qq => lq("defaultGamemode", qq.value)
              })
            }), (0, Pq.jsx)(tq, {
              label: Aq("classic:voidDeathHeight"),
              caption: Aq("classic:voidDeathHeightDescription"),
              disabled: cq,
              children: (0, Pq.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, Pq.jsx)("input", {
                  type: "number",
                  max: dq.I,
                  value: null !== (Eq = Yq.voidDeathHeight) && void 0 !== Eq ? Eq : "",
                  onChange: qq => {
                    const Eq = parseInt(qq.target.value);
                    lq("voidDeathHeight", Eq)
                  }
                }), (0, Pq.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: Aq("worldBuilder:blocksUnit")
                })]
              })
            }), (0, Pq.jsx)(tq, {
              label: Aq("classic:worldBorder"),
              caption: Aq("classic:worldBorderDescription"),
              disabled: cq,
              children: (0, Pq.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, Pq.jsx)("input", {
                  type: "number",
                  min: dq.O,
                  max: dq.K,
                  placeholder: Aq("worldBuilder:noWorldBorderLimit"),
                  value: null !== (gq = Yq.worldBorder) && void 0 !== gq ? gq : "",
                  onChange: qq => {
                    const Eq = parseInt(qq.target.value);
                    lq("worldBorder", isNaN(Eq) ? null : Eq)
                  }
                }), (0, Pq.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: Aq("worldBuilder:blocksUnit")
                })]
              })
            }), (0, Pq.jsx)(tq, {
              label: Aq("classic:disableMobs"),
              caption: Aq("classic:disableMobsDescription"),
              disabled: cq,
              children: (0, Pq.jsx)(jq.d, {
                checked: Yq.disableMobs,
                setChecked: qq => lq("disableMobs", qq),
                disabled: cq
              })
            })]
          }), (0, Pq.jsxs)(Qq, {
            icon: "user-group",
            title: Aq("worldBuilder:playerAndLobbySection"),
            disabled: !mq,
            children: [(0, Pq.jsx)(tq, {
              label: Aq("classic:disableKeepInventory"),
              caption: Aq("classic:disableKeepInventoryDescription"),
              disabled: cq,
              children: (0, Pq.jsx)(jq.d, {
                checked: Yq.disableKeepInventory,
                setChecked: qq => lq("disableKeepInventory", qq),
                disabled: cq
              })
            }), (0, Pq.jsx)(tq, {
              label: Aq("classic:persistInventory"),
              caption: Aq("classic:persistInventoryDescription"),
              disabled: cq,
              children: (0, Pq.jsx)(Hq.d, {
                controlClassName: "ManageDropdown",
                options: Vq.l.map((qq => ({
                  value: qq,
                  label: aq.j[qq]
                }))),
                value: Yq.persistInventory,
                onChange: qq => lq("persistInventory", qq.value)
              })
            }), (0, Pq.jsx)(tq, {
              label: Aq("classic:persistWorld"),
              caption: Aq("classic:persistWorldDescription"),
              disabled: cq,
              children: (0, Pq.jsx)(jq.d, {
                checked: Yq.persistWorld,
                setChecked: qq => lq("persistWorld", qq),
                disabled: cq
              })
            }), (0, Pq.jsx)(tq, {
              label: Aq("classic:disableLobbySpawn"),
              caption: Aq("classic:disableLobbySpawnDescription"),
              disabled: cq,
              children: (0, Pq.jsx)(jq.d, {
                checked: Yq.disableLobbySpawn,
                setChecked: qq => lq("disableLobbySpawn", qq),
                disabled: cq
              })
            }), (0, Pq.jsx)(tq, {
              label: Aq("classic:hideLobbyCode"),
              caption: Aq("classic:hideLobbyCodeDescription"),
              disabled: cq,
              children: (0, Pq.jsx)(jq.d, {
                checked: Yq.hideLobbyCode,
                setChecked: qq => lq("hideLobbyCode", qq),
                disabled: cq
              })
            })]
          })]
        }), (0, Pq.jsx)(Qq, {
          icon: "layer-group",
          title: Aq("worldBuilder:pluginsSection"),
          disabled: !mq,
          children: (0, Pq.jsx)(oq.e, {
            callbacks: uq,
            disabled: cq,
            advancedMode: !0,
            hideWrapper: !0
          })
        })]
      })
    }
    var vq = gq(4788),
      hq = gq(4195),
      nq = gq(1477),
      bq = gq(3369),
      iq = gq(1101),
      Zq = gq(4739),
      fq = gq(4792),
      Mq = gq(1431);
    const Tq = 50,
      zq = .3;
    async function Sq(qq) {
      const Eq = await
      function(qq) {
        return new Promise(((Eq, gq) => {
          const Yq = new FileReader;
          Yq.onload = () => Eq(Yq.result), Yq.onerror = gq, Yq.readAsDataURL(qq)
        }))
      }(qq), gq = await
      function(qq) {
        return new Promise(((Eq, gq) => {
          const Yq = new Image;
          Yq.onload = () => Eq(Yq), Yq.onerror = () => gq(new Error("Failed to load image")), Yq.src = qq
        }))
      }(Eq);
      if (gq.naturalHeight > gq.naturalWidth) throw new pq;
      const Yq = 1024 * Tq,
        {
          dataUrl: lq,
          finalQuality: Oq
        } = function(qq, Eq) {
          const gq = document.createElement("canvas");
          gq.width = qq.naturalWidth, gq.height = qq.naturalHeight, gq.getContext("2d").drawImage(qq, 0, 0);
          let Yq = .92,
            lq = gq.toDataURL("image/jpeg", Yq);
          for (; .75 * lq.length > Eq && Yq > .05;) Yq -= .05, lq = gq.toDataURL("image/jpeg", Yq);
          return {
            dataUrl: lq,
            finalQuality: Yq
          }
        }(gq, Yq);
      if (Math.ceil(.75 * lq.length) > Yq) throw new Gq;
      return {
        base64Jpg: lq,
        heavilyCompressed: Oq < zq
      }
    }
    class pq extends Error {}
    class Gq extends Error {}
    var Lq = function(qq) {
      return qq[qq.NOT_LOGGED_IN = 0] = "NOT_LOGGED_IN", qq[qq.THUMBNAIL_LIMIT_REACHED = 1] = "THUMBNAIL_LIMIT_REACHED", qq
    }(Lq || {});

    function Jq(qq) {
      var Eq;
      let {
        schematicId: gq,
        hasReadUploadPolicy: lq,
        onPolicyValidationError: Aq,
        onThumbnailReady: cq
      } = qq;
      const {
        t: Wq
      } = (0, xq.v)(), [aq, Vq] = (0, Yq.useState)(null), [dq, jq] = (0, Yq.useState)(""), [Hq, oq] = (0, Yq.useState)(""), [Qq, yq] = (0, Yq.useState)(!0), [tq, rq] = (0, Yq.useState)(!1), vq = (0, Yq.useRef)(!1), [hq, nq] = (0, Yq.useState)(null), [bq, iq] = (0, Yq.useState)(!1), [Zq, Mq] = (0, Yq.useState)(!1), Tq = (0, Yq.useRef)(0), {
        getRootProps: zq,
        getInputProps: Lq,
        isDragActive: Jq
      } = (0, fq.e)({
        accept: {
          "image/*": [".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp"]
        },
        multiple: !1,
        onDrop: async qq => {
          if (0 === qq.length) return;
          const Eq = qq[0],
            gq = ++Tq.current;
          nq(null), iq(!1), Vq(null), jq(Eq.name);
          try {
            const qq = await Sq(Eq);
            if (gq !== Tq.current) return;
            Vq(qq), iq(qq.heavilyCompressed)
          } catch (Yq) {
            if (gq !== Tq.current) return;
            nq(Wq(Yq instanceof pq ? "thumbnail:portraitImagesNotAllowed" : Yq instanceof Gq ? "thumbnail:couldNotCompressImage" : "thumbnail:failedToUploadImage"))
          }
        },
        useFsAccessApi: !1
      }), kq = dq.length <= 30 ? dq : `${dq.slice(0,27)}...`, Rq = null !== (Eq = null === aq || void 0 === aq ? void 0 : aq.base64Jpg) && void 0 !== Eq ? Eq : null, Uq = Hq.trim(), Fq = Uq.length >= Bq.m && Uq.length <= Bq.j, sq = Zq && !aq && !hq, Xq = Zq && !Fq;
      return (0, Pq.jsxs)("div", {
        className: "ThumbnailUploadContainer",
        children: [(0, Pq.jsxs)("div", {
          ...zq({
            className: Nq()("ThumbnailUploadDropzone", {
              ActiveDrag: Jq,
              ValidationError: sq
            })
          }),
          children: [(0, Pq.jsx)("input", {
            ...Lq()
          }), !Jq && Rq ? (0, Pq.jsxs)(Pq.Fragment, {
            children: [(0, Pq.jsxs)("div", {
              className: "ThumbnailAspectPreviews",
              children: [(0, Pq.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, Pq.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "1:1"
                }), (0, Pq.jsx)("div", {
                  className: "ThumbnailAspectFrame Square",
                  children: (0, Pq.jsx)("img", {
                    src: Rq,
                    alt: "1:1 preview"
                  })
                })]
              }), (0, Pq.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, Pq.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "16:9"
                }), (0, Pq.jsx)("div", {
                  className: "ThumbnailAspectFrame Wide",
                  children: (0, Pq.jsx)("img", {
                    src: Rq,
                    alt: "16:9 preview"
                  })
                })]
              })]
            }), (0, Pq.jsxs)("div", {
              children: [(0, Pq.jsx)("div", {
                className: "ThumbnailUploadInstructions Active",
                children: kq
              }), (0, Pq.jsx)("div", {
                className: "ThumbnailUploadInstructions Preview",
                children: Wq("thumbnail:preview")
              })]
            })]
          }) : (0, Pq.jsxs)(Pq.Fragment, {
            children: [(0, Pq.jsx)("div", {
              className: "ThumbnailUploadIcon",
              children: (0, Pq.jsx)(uq.d, {
                name: "image"
              })
            }), (0, Pq.jsx)("div", {
              className: "ThumbnailUploadInstructions",
              children: Wq("thumbnail:dragImageHere")
            })]
          })]
        }), sq && (0, Pq.jsx)("div", {
          className: "ThumbnailUploadError",
          children: Wq("thumbnail:imageRequired")
        }), (0, Pq.jsx)(mq.b, {
          className: Nq()("ThumbnailUploadNameInput", {
            ValidationError: Xq
          }),
          placeholderText: Wq("thumbnail:thumbnailName"),
          defaultValue: Hq,
          onValueChange: qq => {
            oq(qq)
          },
          maxLength: Bq.j
        }), Xq && (0, Pq.jsx)("div", {
          className: "ThumbnailUploadError",
          children: Wq("thumbnail:nameRequired", {
            min: Bq.m,
            max: Bq.j
          })
        }), (0, Pq.jsxs)("label", {
          className: "ThumbnailUploadCheckbox",
          children: [(0, Pq.jsx)("input", {
            type: "checkbox",
            checked: Qq,
            onChange: qq => {
              yq(qq.target.checked)
            }
          }), Wq("thumbnail:setAsThumbnailOnceApproved")]
        }), bq && (0, Pq.jsx)("div", {
          className: "ThumbnailUploadWarning",
          children: Wq("thumbnail:heavyCompressionWarning")
        }), hq && (0, Pq.jsx)("div", {
          className: "ThumbnailUploadError",
          children: hq
        }), (0, Pq.jsx)(Oq.p, {
          disabled: tq,
          className: "ThumbnailUploadButton",
          onClick: async () => {
            if (Mq(!0), !vq.current && aq && Fq && lq) {
              vq.current = !0, rq(!0), nq(null);
              try {
                await cq(aq.base64Jpg, Uq, Qq ? gq : null)
              } catch (qq) {
                nq(qq.errorMessageForUser ? Wq(qq.errorMessageForUser, qq.errorMessageTranslationParams) : Wq("thumbnail:failedToUploadImage"))
              } finally {
                vq.current = !1, rq(!1)
              }
            } else lq || Aq()
          },
          children: Wq(tq ? "thumbnail:processing" : "thumbnail:uploadThumbnail")
        })]
      })
    }
    const kq = 2e3;

    function Rq(qq) {
      let {
        schematicId: Eq,
        ownedThumbnailCount: gq,
        onClose: lq,
        onThumbnailReady: Oq
      } = qq;
      const {
        t: mq
      } = (0, xq.v)(), {
        userContext: Aq
      } = (0, iq.c)(), [cq, Wq] = (0, Yq.useState)(!1), [aq, Vq] = (0, Yq.useState)(!1), [dq, jq] = (0, Yq.useState)(!1), Hq = (0, Yq.useRef)();
      (0, Yq.useEffect)((() => () => {
        clearTimeout(Hq.current)
      }), []);
      const oq = function(qq, Eq) {
        const gq = [];
        return qq.isLoggedIn() || gq.push(Lq.NOT_LOGGED_IN), Eq >= Bq._ && gq.push(Lq.THUMBNAIL_LIMIT_REACHED), gq
      }(Aq, gq);
      if (oq.length > 0) {
        const qq = {
          [Lq.NOT_LOGGED_IN]: {
            key: "thumbnail:mustBeLoggedInToUpload"
          },
          [Lq.THUMBNAIL_LIMIT_REACHED]: {
            key: "thumbnail:thumbnailLimitReachedPleaseDelete",
            params: {
              max: Bq._
            }
          }
        };
        return (0, Pq.jsxs)("div", {
          className: "ThumbnailUploaderInner",
          children: [(0, Pq.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: mq("thumbnail:cannotUploadThumbnail")
          }), oq.map(((Eq, gq) => {
            const Yq = qq[Eq];
            return (0, Pq.jsxs)("div", {
              className: "CannotUploadThumbnailItem",
              children: [(0, Pq.jsx)(uq.d, {
                name: "triangle-exclamation"
              }), (0, Pq.jsx)("span", {
                children: mq(Yq.key, Yq.params)
              })]
            }, gq)
          }))]
        })
      }
      return (0, Pq.jsxs)("div", {
        className: Nq()("ThumbnailUploaderInner", {
          ThumbnailUploaderSuccess: cq
        }),
        children: [cq && (0, Pq.jsxs)("div", {
          className: "ThumbnailUploadSuccessOverlay",
          children: [(0, Pq.jsxs)("div", {
            className: "ThumbnailUploadSuccessIcon FullyFancyText AnimFadeInScaleUp",
            children: [(0, Pq.jsx)(uq.d, {
              name: "check"
            }), (0, Pq.jsx)(Mq.b, {})]
          }), (0, Pq.jsx)("div", {
            className: "ThumbnailUploadSuccessText AnimFadeInScaleUp",
            children: mq("thumbnail:thumbnailUploaded")
          })]
        }), (0, Pq.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: mq("thumbnail:uploadThumbnail")
        }), (0, Pq.jsxs)("div", {
          className: "ThumbnailUploaderBody",
          children: [(0, Pq.jsxs)("div", {
            className: "ThumbnailUploaderLeft",
            children: [(0, Pq.jsx)("h3", {
              className: "SchematicPopupSubtitle",
              children: mq("thumbnail:chooseImage", {
                maxSizeKb: Tq
              })
            }), (0, Pq.jsx)(Jq, {
              schematicId: Eq,
              hasReadUploadPolicy: aq,
              onPolicyValidationError: () => {
                jq(!0)
              },
              onThumbnailReady: async (qq, Eq, gq) => {
                await Oq(qq, Eq, gq), Wq(!0), Hq.current = setTimeout(lq, kq)
              }
            })]
          }), (0, Pq.jsxs)("div", {
            className: "ThumbnailUploadPolicy",
            children: [(0, Pq.jsx)("h3", {
              className: "ThumbnailUploadPolicyTitle",
              children: mq("thumbnail:uploadPolicy")
            }), (0, Pq.jsxs)("ul", {
              className: "ThumbnailUploadPolicyList",
              children: [(0, Pq.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, Pq.jsx)(uq.d, {
                  name: "check"
                }), (0, Pq.jsx)("span", {
                  children: mq("thumbnail:policyFollowGuidelines")
                })]
              }), (0, Pq.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, Pq.jsx)(uq.d, {
                  name: "check"
                }), (0, Pq.jsx)("span", {
                  children: mq("thumbnail:policyInGameAssets")
                })]
              }), (0, Pq.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, Pq.jsx)(uq.d, {
                  name: "check"
                }), (0, Pq.jsx)("span", {
                  children: mq("thumbnail:policyLimitText")
                })]
              }), (0, Pq.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, Pq.jsx)(uq.d, {
                  name: "x"
                }), (0, Pq.jsx)("span", {
                  children: mq("thumbnail:policyCopyrightContent")
                })]
              }), (0, Pq.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, Pq.jsx)(uq.d, {
                  name: "x"
                }), (0, Pq.jsx)("span", {
                  children: mq("thumbnail:policyOutOfGameAssets")
                })]
              }), (0, Pq.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, Pq.jsx)(uq.d, {
                  name: "x"
                }), (0, Pq.jsx)("span", {
                  children: mq("thumbnail:policyBloxdTags")
                })]
              }), (0, Pq.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, Pq.jsx)(uq.d, {
                  name: "x"
                }), (0, Pq.jsx)("span", {
                  children: mq("thumbnail:policyMustReflectGame")
                })]
              })]
            }), (0, Pq.jsxs)("label", {
              className: Nq()("ThumbnailUploadCheckbox Policy", {
                ValidationError: dq && !aq
              }),
              children: [(0, Pq.jsx)("input", {
                type: "checkbox",
                checked: aq,
                onChange: qq => {
                  Vq(qq.target.checked)
                }
              }), mq("thumbnail:agreeToUploadPolicy")]
            }), dq && !aq && (0, Pq.jsx)("div", {
              className: "ThumbnailPolicyError",
              children: mq("thumbnail:policyRequired")
            })]
          })]
        })]
      })
    }
    var Uq = gq(1195);
    const Fq = {
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

    function sq(qq) {
      var Eq, gq;
      let {
        schematicData: mq,
        updateSchematicData: cq,
        publishFormEnabled: Bq,
        onClose: Wq
      } = qq;
      const {
        t: aq
      } = (0, xq.v)(), {
        userContext: Vq,
        isUserContextUpdating: dq
      } = (0, iq.c)(), jq = (0, bq.c)(), [Hq, oq] = (0, Yq.useState)([]), [Qq, yq] = (0, Yq.useState)([]), [tq, rq] = (0, Yq.useState)(!0), [vq, hq] = (0, Yq.useState)(null !== (Eq = mq.customThumbnailId) && void 0 !== Eq ? Eq : null), [fq, Mq] = (0, Yq.useState)(null), Tq = (0, Yq.useRef)(null !== (gq = mq.customThumbnailId) && void 0 !== gq ? gq : null), zq = (0, Yq.useRef)(0), Sq = (0, Yq.useRef)(null), pq = (0, Yq.useRef)(null), Gq = (0, Yq.useRef)(null), Lq = (0, Yq.useRef)(!1);

      function Jq(qq, Eq) {
        Gq.current && (clearTimeout(Gq.current), Gq.current = null), Mq(qq), null !== qq && Eq && (Gq.current = setTimeout((() => {
          Mq(null), Gq.current = null
        }), 5e3))
      }(0, Yq.useEffect)((() => () => {
        clearTimeout(pq.current), clearTimeout(Gq.current)
      }), []);
      const kq = (0, Yq.useCallback)((() => {
        rq(!0), nq.e.getOwnedThumbnails(Vq).then((qq => {
          const Eq = [],
            gq = [];
          for (const Yq of qq.thumbnails) Yq.rejectionPolicyId ? Eq.push(Yq) : gq.push(Yq);
          Eq.sort(((qq, Eq) => qq.lastUpdatedAt - Eq.lastUpdatedAt)), gq.sort(((qq, Eq) => {
            const gq = qq.approved ? 1 : 0,
              Yq = (Eq.approved ? 1 : 0) - gq;
            return 0 !== Yq ? Yq : Eq.lastUpdatedAt - qq.lastUpdatedAt
          })), yq(Eq), oq(gq)
        })).catch((qq => {
          console.error("Failed to fetch thumbnails:", qq)
        })).finally((() => {
          rq(!1)
        }))
      }), [Vq]);
      async function Fq(qq, Eq, gq) {
        return nq.e.uploadSchematicThumbnail(Vq, qq, Eq, gq).then((() => {
          Jq({
            text: aq("thumbnail:uploadedAwaitingModeration"),
            type: "success"
          }, !0), kq()
        }))
      }

      function sq() {
        zq.current = Date.now(), pq.current = null;
        const qq = Sq.current;
        Sq.current = null, Jq({
          text: aq("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), nq.e.setSchematicThumbnail(Vq, mq.schematicId, qq).then((() => {
          jq.current && (Jq({
            text: aq("thumbnail:thumbnailUpdated"),
            type: "success"
          }, !0), Tq.current = qq, cq("customThumbnailId", qq), cq("customThumbnailBlurhash", void 0), cq("customThumbnailVariants", void 0))
        })).catch((qq => {
          jq.current && (Jq({
            text: qq.errorMessageForUser ? aq(qq.errorMessageForUser, qq.errorMessageTranslationParams) : aq("thumbnail:failedToSetThumbnail"),
            type: "error"
          }, !0), hq(Tq.current))
        }))
      }

      function Kq(qq) {
        hq(qq), Sq.current = qq;
        const Eq = Date.now() - zq.current;
        Eq >= 1e3 ? sq() : (Jq({
          text: aq("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), pq.current || (pq.current = setTimeout((() => {
          sq()
        }), 1e3 - Eq)))
      }
      return (0, Yq.useEffect)((() => {
        !1 === dq && kq()
      }), [dq, kq]), Qq.length > 0 ? (0, Pq.jsx)(Xq, {
        rejectedThumbnails: Qq,
        userContext: Vq,
        isMountedRef: jq,
        onAcknowledged: kq
      }) : (0, Pq.jsxs)("div", {
        className: "BloxdForm ThumbnailSection",
        children: [(0, Pq.jsxs)("div", {
          className: "SectionTitle",
          children: [aq("thumbnail:gameThumbnail"), fq && (0, Pq.jsx)("span", {
            className: Nq()("ThumbnailActionMsg", `ThumbnailActionMsg--${fq.type}`),
            children: fq.text
          })]
        }), (0, Pq.jsx)("div", {
          className: "SectionBody",
          children: (0, Pq.jsxs)("div", {
            className: "ThumbnailGrid",
            children: [(0, Pq.jsxs)("div", {
              className: Nq()("ThumbnailGridItem ThumbnailGridItemDefault", {
                ThumbnailGridItemSelected: null === vq
              }),
              onClick: () => Kq(null),
              children: [(0, Pq.jsx)(Zq.d, {
                game: {
                  schematicId: mq.schematicId,
                  imageBlurhash: mq.imageBlurhash
                }
              }), (0, Pq.jsx)("div", {
                className: "ThumbnailGridItemLabel ThumbnailDefaultLabel",
                children: aq("general:default")
              })]
            }), tq && (0, Pq.jsx)(Aq.e, {}), Hq.map(((qq, Eq) => (0, Pq.jsxs)("div", {
              className: Nq()("ThumbnailGridItem", {
                ThumbnailGridItemSelected: vq === qq.id,
                ThumbnailGridItemPending: !qq.approved
              }),
              onClick: () => {
                qq.approved && Kq(qq.id)
              },
              children: [qq.approved && (0, Pq.jsx)("img", {
                src: `${Uq.clientSideServerUrls.s3Url}/customThumbnails/${qq.id}.jpg`,
                alt: "Thumbnail"
              }), qq.approved && (0, Pq.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: qq.name
              }), qq.id && (0, Pq.jsx)(Oq.K, {
                className: "ThumbnailDeleteButton",
                onClick: Eq => async function(qq, Eq, gq) {
                  qq.stopPropagation();
                  const Yq = await lq.NotificationProvider.showCustomPopup({
                      body: qq => (0, Pq.jsx)(wq, {
                        thumbnailId: Eq,
                        thumbnailName: gq,
                        onClose: Eq => {
                          Eq && (Lq.current = !0), qq()
                        }
                      }),
                      middleScreenPopupClassName: "ThumbnailDeleteConfirmPopup",
                      onClose: Wq
                    }).getResult(),
                    Oq = Lq.current;
                  Lq.current = !1, Oq && !0 === Yq && (jq.current && Jq({
                    text: aq("thumbnail:deletingThumbnail"),
                    type: "info"
                  }, !1), nq.e.deleteSchematicThumbnail(Vq, Eq).then((() => {
                    jq.current && (Jq({
                      text: aq("thumbnail:thumbnailDeleted"),
                      type: "success"
                    }, !0), Tq.current === Eq && Kq(null), kq())
                  })).catch((qq => {
                    jq.current && Jq({
                      text: qq.errorMessageForUser ? aq(qq.errorMessageForUser, qq.errorMessageTranslationParams) : aq("thumbnail:failedToDeleteThumbnail"),
                      type: "error"
                    }, !0)
                  })))
                }(Eq, qq.id, qq.name),
                children: (0, Pq.jsx)(uq.d, {
                  name: "trash-can"
                })
              }), !qq.approved && (0, Pq.jsx)("div", {
                className: "ThumbnailUnapprovedIcon",
                children: (0, Pq.jsx)(uq.d, {
                  name: "hourglass-clock"
                })
              }), !qq.approved && (0, Pq.jsxs)("div", {
                className: "ThumbnailGridItemLabel ThumbnailPendingLabel",
                children: [qq.name, (0, Pq.jsx)("br", {}), aq("thumbnail:pendingApproval")]
              })]
            }, Eq))), (0, Pq.jsxs)("div", {
              className: Nq()("ThumbnailGridItem ThumbnailUploadTile", {
                ThumbnailUploadTileDisabled: !Bq
              }),
              onClick: () => {
                Bq && function(qq) {
                  let {
                    schematicId: Eq,
                    ownedThumbnailCount: gq,
                    onThumbnailReady: Yq,
                    onClose: Oq
                  } = qq;
                  lq.NotificationProvider.showCustomPopup({
                    body: qq => (0, Pq.jsx)(Rq, {
                      schematicId: Eq,
                      ownedThumbnailCount: gq,
                      onClose: qq,
                      onThumbnailReady: Yq
                    }),
                    middleScreenPopupClassName: "SchematicThumbnailPopup",
                    onClose: Oq,
                    unlockPointerKey: "schematicThumbnailUploaderPopup"
                  })
                }({
                  schematicId: mq.schematicId,
                  ownedThumbnailCount: Hq.length,
                  onThumbnailReady: Fq,
                  onClose: Wq
                })
              },
              children: [(0, Pq.jsx)(uq.d, {
                name: "plus"
              }), (0, Pq.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: aq("thumbnail:uploadThumbnail")
              })]
            })]
          })
        })]
      })
    }

    function Xq(qq) {
      let {
        rejectedThumbnails: Eq,
        userContext: gq,
        isMountedRef: lq,
        onAcknowledged: mq
      } = qq;
      const {
        t: cq
      } = (0, xq.v)(), [Bq, Wq] = (0, Yq.useState)(!1), [Nq, aq] = (0, Yq.useState)(!1), Vq = function(qq) {
        const Eq = new Map;
        for (const gq of qq) {
          const qq = gq.rejectionPolicyId,
            Yq = Eq.get(qq);
          Yq ? Yq.push(gq) : Eq.set(qq, [gq])
        }
        return Eq
      }(Eq);
      return (0, Pq.jsxs)("div", {
        className: "ThumbnailRejectionNotice",
        children: [(0, Pq.jsxs)("div", {
          className: "ThumbnailRejectionNoticeTitle",
          children: [(0, Pq.jsx)(uq.d, {
            name: "triangle-exclamation"
          }), " ", cq("thumbnail:thumbnailsRejected"), " ", (0, Pq.jsx)(uq.d, {
            name: "triangle-exclamation"
          })]
        }), (0, Pq.jsx)("div", {
          className: "ThumbnailRejectionNoticeSubtitle",
          children: cq("thumbnail:thumbnailsRejectedDescription")
        }), (0, Pq.jsx)("div", {
          className: "ThumbnailRejectionNoticeList",
          children: [...Vq.entries()].map((qq => {
            let [Eq, gq] = qq;
            const Yq = Fq[Eq];
            return (0, Pq.jsxs)("div", {
              className: "ThumbnailRejectionNoticeGroup",
              children: [(0, Pq.jsx)("div", {
                className: "ThumbnailRejectionNoticeItems",
                children: gq.map((qq => (0, Pq.jsxs)("div", {
                  className: "ThumbnailRejectionNoticeItem",
                  children: [(0, Pq.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemIcon",
                    children: (0, Pq.jsx)(uq.d, {
                      name: "image-slash"
                    })
                  }), (0, Pq.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemDetails",
                    children: (0, Pq.jsx)("div", {
                      className: "ThumbnailRejectionNoticeItemName",
                      children: qq.name
                    })
                  })]
                }, qq.id)))
              }), (0, Pq.jsxs)("div", {
                className: "ThumbnailRejectionNoticeGroupReason",
                children: [cq("thumbnail:rejectionReason"), " ", Yq ? cq(Yq.reason) : Eq]
              }), Yq && (0, Pq.jsx)("ul", {
                className: "ThumbnailRejectionNoticeGroupTips",
                children: Yq.tips.map((qq => (0, Pq.jsx)("li", {
                  children: cq(qq)
                }, qq)))
              })]
            }, Eq)
          }))
        }), (0, Pq.jsxs)("label", {
          className: "ThumbnailRejectionNoticeCheckbox",
          children: [(0, Pq.jsx)(hq.b, {
            checked: Bq,
            onChange: qq => Wq(qq.target.checked),
            disabled: Nq
          }), (0, Pq.jsx)("span", {
            children: cq("thumbnail:haveReadRejectionReasons")
          })]
        }), (0, Pq.jsx)(Oq.p, {
          onClick: async function() {
            aq(!0);
            const qq = await Promise.allSettled(Eq.map((qq => nq.e.deleteSchematicThumbnail(gq, qq.id))));
            if (!lq.current) return;
            const Yq = qq.filter((qq => "rejected" === qq.status));
            Yq.length > 0 && console.error("Some rejected thumbnails failed to delete:", Yq), mq()
          },
          disabled: !Bq || Nq,
          className: "ThumbnailRejectionNoticeAcceptButton",
          children: Nq ? (0, Pq.jsx)(Aq.e, {}) : cq("general:accept")
        })]
      })
    }

    function wq(qq) {
      let {
        thumbnailId: Eq,
        thumbnailName: gq,
        onClose: Yq
      } = qq;
      const {
        t: lq
      } = (0, xq.v)();
      return (0, Pq.jsxs)("div", {
        className: "ThumbnailDeleteConfirm",
        children: [(0, Pq.jsx)("div", {
          className: "ThumbnailDeleteConfirmTitle",
          children: lq("thumbnail:deleteThumbnail")
        }), (0, Pq.jsxs)("div", {
          className: "ThumbnailDeleteConfirmImageContainer",
          children: [(0, Pq.jsx)("img", {
            className: "ThumbnailDeleteConfirmImage",
            src: `${Uq.clientSideServerUrls.s3Url}/customThumbnails/${Eq}.jpg`,
            alt: "Thumbnail to delete"
          }), (0, Pq.jsx)("div", {
            className: "ThumbnailGridItemLabel",
            children: gq
          })]
        }), (0, Pq.jsx)("div", {
          className: "ThumbnailDeleteConfirmSubtitle",
          children: lq("thumbnail:deleteThumbnailConfirmation")
        }), (0, Pq.jsxs)("div", {
          className: "ThumbnailDeleteConfirmButtons",
          children: [(0, Pq.jsxs)(Oq.K, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => Yq(!0),
            children: [(0, Pq.jsx)(uq.d, {
              name: "trash-can"
            }), " ", lq("general:delete")]
          }), (0, Pq.jsx)(Oq.i, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => Yq(!1),
            children: lq("general:cancel")
          })]
        })]
      })
    }
    var Kq = gq(3067),
      Cq = gq(4821),
      Iq = gq(4826),
      eq = gq(4875);

    function Dq(qq) {
      let {
        schematicData: Eq,
        setTexturePack: gq,
        initializeTexturePack: lq,
        publishFormEnabled: Oq
      } = qq;
      const {
        t: mq
      } = (0, xq.v)(), [Aq, cq] = (0, Yq.useState)(null), [uq, Bq] = (0, Yq.useState)(null), [Wq, aq] = (0, Yq.useState)(!1), Vq = (0, bq.c)(), dq = Oq && !Wq, jq = Eq.customTexturePackKey;

      function Hq(qq) {
        var Eq;
        cq(qq.metaData.id), Bq(null !== (Eq = qq.metaData.fromFolderName) && void 0 !== Eq ? Eq : null), (qq.metaData.id !== Kq.n.CUSTOM || qq.metaData.fromFolderName) && gq(qq)
      }
      return (0, Yq.useEffect)((() => {
        jq && (aq(!0), (0, Cq.e)(jq).then((qq => {
          var Eq;
          Vq.current && (qq ? (cq(qq.metaData.id), Bq(null !== (Eq = qq.metaData.fromFolderName) && void 0 !== Eq ? Eq : null), lq(qq)) : console.error(`No texture pack at ${jq}`))
        })).catch((qq => {
          console.error("Error fetching texture pack: ", qq)
        })).finally((() => {
          aq(!1)
        })))
      }), [jq, lq, Vq]), (0, Pq.jsxs)("div", {
        className: "BloxdForm TexturePackSection",
        children: [(0, Pq.jsx)("div", {
          className: "SectionTitle",
          children: mq("customTexturePack:customTexturePack")
        }), (0, Pq.jsxs)("div", {
          className: "TexturePackList",
          children: [(0, Pq.jsx)("div", {
            className: Nq()("TexturePack", {
              Selected: null === Aq && !Wq,
              Disabled: !dq
            }),
            onClick: () => {
              dq && (cq(null), gq(null), Bq(null))
            },
            children: (0, Pq.jsx)("div", {
              className: "TexturePackName",
              children: "No Override"
            })
          }), Object.values(Kq.n).map((qq => (0, Pq.jsx)(Iq.d, {
            id: qq,
            isSelected: qq === Aq,
            setSelected: Hq,
            disabled: !dq
          }, qq)))]
        }), Aq === Kq.n.CUSTOM && (0, Pq.jsx)(eq.e, {
          folderName: uq,
          onTexturePackUpdated: Hq,
          disabled: !dq,
          maxFileSizeMb: 25,
          packOwner: "customGame"
        })]
      })
    }
    var qE = gq(4899);

    function EE(qq) {
      var Eq;
      let {
        gameCategory: gq,
        setGameCategory: Yq,
        disabled: lq
      } = qq;
      const mq = null !== (Eq = (0, aq.hb)(gq)) && void 0 !== Eq ? Eq : "other";
      return (0, Pq.jsxs)("div", {
        className: "GameCategoryPicker",
        children: [(0, Pq.jsx)(jq.c, {
          label: "worldBuilder:gameCategoryGroup",
          className: "GameCategoryGroup",
          disabled: lq,
          children: (0, Pq.jsx)(Hq.d, {
            options: aq.Y.map((qq => ({
              value: qq,
              label: aq.V[qq]
            }))),
            value: mq,
            onChange: qq => {
              qq.value !== mq && Yq(aq.R[qq.value][0])
            }
          })
        }), (0, Pq.jsx)(jq.c, {
          label: "worldBuilder:gameCategory",
          className: "GameCategory",
          disabled: lq,
          children: (0, Pq.jsx)("div", {
            className: "GameCategoryOptions",
            children: aq.R[mq].map((qq => (0, Pq.jsx)(Oq.Q, {
              active: qq === gq,
              onClick: () => {
                Yq(qq)
              },
              children: (0, aq.eb)(qq)
            }, qq)))
          })
        })]
      })
    }

    function gE(qq) {
      let {
        editor: Eq,
        onClose: gq
      } = qq;
      const {
        t: Yq
      } = (0, xq.v)(), {
        schematicData: lq,
        updateSchematicData: Oq,
        publishFormEnabled: Aq,
        formEnabled: cq
      } = Eq;
      return (0, Pq.jsxs)(Pq.Fragment, {
        children: [(0, Pq.jsxs)(Qq, {
          icon: "pen-to-square",
          title: Yq("worldBuilder:basicsSection"),
          disabled: !cq,
          children: [(0, Pq.jsx)(yq, {
            label: Yq("general:name"),
            caption: Yq("worldBuilder:schematicNameTagsHint"),
            children: (0, Pq.jsx)(mq.b, {
              className: "SchematicPageName",
              defaultValue: lq.name,
              onValueChange: qq => Oq("name", qq),
              placeholderText: Yq("worldBuilder:schematicNamePlaceholder"),
              maxLength: Bq.zb
            })
          }), (0, Pq.jsx)(yq, {
            label: Yq("general:description"),
            children: (0, Pq.jsx)(mq.b, {
              className: "SchematicPageDescription",
              useTextarea: !0,
              defaultValue: lq.description,
              onValueChange: qq => Oq("description", qq),
              placeholderText: Yq("worldBuilder:schematicDescriptionPlaceholder"),
              maxLength: Bq.yb
            })
          }), (0, Pq.jsx)(EE, {
            gameCategory: lq.gameCategory,
            setGameCategory: qq => Oq("gameCategory", qq),
            disabled: !Aq
          }), !0 === lq.gamePublished && (0, Pq.jsx)(sq, {
            schematicData: lq,
            updateSchematicData: Oq,
            publishFormEnabled: Aq,
            onClose: function() {
              null === gq || void 0 === gq || gq()
            }
          })]
        }), (0, Pq.jsx)(rq, {
          schematicData: lq,
          updateSchematicData: Oq,
          publishFormEnabled: Aq,
          formEnabled: cq
        }), !0 === lq.gamePublished && (0, Pq.jsx)(Qq, {
          icon: "palette",
          title: Yq("worldBuilder:texturePackSection"),
          disabled: !cq,
          children: (0, Pq.jsx)(Dq, {
            schematicData: lq,
            setTexturePack: Eq.setTexturePack,
            initializeTexturePack: Eq.initializeTexturePack,
            publishFormEnabled: Aq
          })
        })]
      })
    }

    function YE(qq) {
      let {
        editor: Eq
      } = qq;
      const {
        t: gq
      } = (0, xq.v)(), {
        schematicData: Yq,
        formEnabled: lq,
        hasUnsavedChanges: mq
      } = Eq, Bq = lq && mq;
      return (0, Pq.jsxs)("footer", {
        className: "SchematicPageFooter",
        children: [lq && mq && (0, Pq.jsxs)("div", {
          className: "SchematicPageFooterStatus",
          children: [(0, Pq.jsx)("span", {
            className: "SchematicPageFooterStatusDot"
          }), gq("worldBuilder:unsavedChanges")]
        }), (0, Pq.jsx)(cq.e, {
          tooltipInner: (0, Pq.jsx)("div", {
            className: "SaveButtonTooltip",
            children: gq(lq && !mq ? "worldBuilder:saveChangesNoneDescription" : "worldBuilder:saveChangesDescription")
          }),
          children: (0, Pq.jsxs)(Oq.g, {
            className: "SaveChangesButton",
            onClick: () => Eq.saveSchematic(Yq.gamePublished),
            disabled: !Bq,
            children: [(0, Pq.jsxs)("span", {
              className: lq ? "" : "SaveChangesButtonBodyHidden",
              children: [(0, Pq.jsx)(uq.d, {
                name: "wrench"
              }), " ", gq("worldBuilder:saveChanges")]
            }), !lq && (0, Pq.jsx)(Aq.e, {})]
          })
        })]
      })
    }

    function lE(qq) {
      let {
        schematic: Eq,
        onSchematicUpdate: gq,
        onClose: lq,
        inSourceWorld: mq
      } = qq;
      const {
        t: Aq
      } = (0, xq.v)();

      function cq() {
        null === lq || void 0 === lq || lq()
      }
      const uq = (0, qE.b)(Eq, {
        onNavigateAway: cq,
        inSourceWorld: mq
      });
      return (0, Yq.useEffect)((() => {
        null === gq || void 0 === gq || gq(uq.schematicData)
      }), [uq.schematicData, gq]), (0, Pq.jsxs)("div", {
        className: "SchematicPage SchematicPagePopupVariant",
        children: [(0, Pq.jsxs)("div", {
          className: "SchematicPageBody",
          children: [(0, Pq.jsx)(Oq.d, {
            onClick: cq,
            children: Aq("worldBuilder:back")
          }), (0, Pq.jsx)(Qq, {
            icon: "rocket-launch",
            title: Aq("worldBuilder:actionsSection"),
            disabled: !uq.formEnabled,
            children: (0, Pq.jsx)(vq.b, {
              editor: uq
            })
          }), (0, Pq.jsx)(gE, {
            editor: uq,
            onClose: cq
          })]
        }), (0, Pq.jsx)(YE, {
          editor: uq
        })]
      })
    }

    function OE(qq) {
      let {
        schematic: Eq,
        onSchematicUpdate: gq,
        onClose: Yq,
        inSourceWorld: Oq
      } = qq;
      lq.NotificationProvider.showCustomPopup({
        body: qq => (0, Pq.jsx)(lE, {
          schematic: Eq,
          onSchematicUpdate: gq,
          onClose: qq,
          inSourceWorld: Oq
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: Yq,
        unlockPointerKey: "schematicPagePopup"
      })
    }
  },
  4788: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Bq
    });
    var Yq = gq(1018),
      lq = gq.n(Yq),
      Oq = gq(1183),
      mq = gq(1025),
      xq = gq(1422),
      Aq = gq(1341),
      cq = gq(1326),
      uq = gq(1070);

    function Bq(qq) {
      let {
        editor: Eq,
        className: gq
      } = qq;
      const {
        t: Yq
      } = (0, Oq.v)(), {
        schematicData: Bq,
        formEnabled: Wq,
        publishFormEnabled: Nq
      } = Eq, aq = !Wq || !Nq;
      return (0, uq.jsxs)("div", {
        className: lq()("PublishButtonContainer", gq),
        children: [Eq.canEditSourceWorld && (0, uq.jsxs)(xq.g, {
          onClick: Eq.editSourceWorld,
          disabled: aq,
          children: [(0, uq.jsx)(mq.d, {
            name: "edit"
          }), " ", Yq("worldBuilder:editSourceWorld")]
        }), !Bq.gamePublished && (0, uq.jsx)(Aq.e, {
          tooltipInner: (0, uq.jsx)("div", {
            className: "PublishButtonTooltip",
            children: Yq("worldBuilder:publishAsGameDescription")
          }),
          children: (0, uq.jsxs)(xq.p, {
            onClick: () => Eq.saveSchematic(!0),
            disabled: aq,
            children: [(0, uq.jsx)(mq.d, {
              name: "rocket-launch"
            }), " ", Yq("worldBuilder:publishAsGame"), " ", (0, uq.jsx)(mq.d, {
              name: "info-circle"
            })]
          })
        }), !0 === Bq.gamePublished && (0, uq.jsxs)(uq.Fragment, {
          children: [(0, uq.jsx)(Aq.e, {
            tooltipInner: (0, uq.jsx)("div", {
              className: "PublishButtonTooltip",
              children: Yq("worldBuilder:unpublishAsGameDescription")
            }),
            children: (0, uq.jsxs)(xq.K, {
              onClick: Eq.unpublishSchematic,
              disabled: aq,
              children: [(0, uq.jsx)(mq.d, {
                name: "rocket-launch"
              }), " ", Yq("worldBuilder:unpublishAsGame"), " ", (0, uq.jsx)(mq.d, {
                name: "info-circle"
              })]
            })
          }), (0, uq.jsxs)(xq.g, {
            onClick: Eq.playGame,
            disabled: aq,
            children: [(0, uq.jsx)(mq.d, {
              name: "joystick"
            }), " ", Yq("general:playGame")]
          })]
        }), !Wq && (0, uq.jsx)(cq.e, {
          loaderType: "Secondary"
        })]
      })
    }
  },
  4821: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => lq
    });
    var Yq = gq(1195);
    async function lq(qq) {
      const Eq = await fetch(`${Yq.clientSideServerUrls.s3Url}/${qq}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === Eq.status || 403 === Eq.status) return null;
      if (!Eq.ok) throw new Error(`Failed to download the texture pack (${Eq.status})`);
      return await Eq.json()
    }
  },
  4899: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => dq
    });
    var Yq = gq(57),
      lq = gq(1313),
      Oq = gq(987),
      mq = gq(163),
      xq = gq(1532),
      Aq = gq(24),
      cq = gq(1904),
      uq = gq(1477),
      Bq = gq(4413),
      Wq = gq(1336),
      Nq = gq(1101),
      aq = gq(1498);

    function Vq(qq, Eq) {
      return {
        schematicId: qq.schematicId,
        name: qq.name,
        description: qq.description,
        gamePublished: Eq,
        gameCategory: qq.gameCategory,
        defaultGamemode: qq.defaultGamemode,
        voidDeathHeight: qq.voidDeathHeight,
        disableKeepInventory: qq.disableKeepInventory,
        disableTpRequests: qq.disableTpRequests,
        disableLobbySpawn: qq.disableLobbySpawn,
        disableMobs: qq.disableMobs,
        disableSpawnProtection: qq.disableSpawnProtection,
        disableFallDamage: qq.disableFallDamage,
        worldBorder: qq.worldBorder,
        hideLobbyCode: qq.hideLobbyCode,
        enableSmpMarketplace: qq.enableSmpMarketplace,
        enableSurvivalGuns: qq.enableSurvivalGuns,
        enableSpawnReset: qq.enableSpawnReset,
        enableDayNight: qq.enableDayNight,
        persistWorld: qq.persistWorld,
        persistInventory: qq.persistInventory
      }
    }

    function dq(qq) {
      let {
        onNavigateAway: Eq,
        inSourceWorld: gq = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const {
        userContext: dq
      } = (0, Nq.c)(), jq = (0, aq.useNavigatePreserveSearch)(), [Hq, oq] = (0, Yq.useState)({
        ...qq
      }), [Pq, Qq] = (0, Yq.useState)("Enter"), [yq, tq] = (0, Yq.useState)(void 0), rq = (0, Yq.useRef)(Vq(qq, qq.gamePublished)), vq = (0, Yq.useRef)(void 0), hq = "Enter" === Pq, nq = dq.playerHasRank("developer") || dq.playerHasRank("admin") || "Enter" === Pq && !1 !== Hq.schematicContainsSpawnBlock, bq = void 0 !== yq && yq !== vq.current || JSON.stringify(Vq(Hq, Hq.gamePublished)) !== JSON.stringify(rq.current);

      function iq(qq, Eq) {
        oq((gq => ({
          ...gq,
          [qq]: Eq
        })))
      }
      const Zq = (0, Yq.useCallback)((qq => {
        vq.current = qq, tq(qq)
      }), []);

      function fq(qq) {
        Qq("Loading");
        const Eq = Vq(Hq, qq),
          gq = yq !== vq.current ? yq : void 0;
        uq.e.updateSchematic(dq, Eq, gq).then((gq => {
          let {
            customTexturePackKey: Yq
          } = gq;
          Qq("Success"), iq("customTexturePackKey", Yq), rq.current = Eq, vq.current = void 0, tq(void 0), setTimeout((() => {
            iq("gamePublished", qq), Qq("Enter")
          }), 1e3)
        })).catch((qq => {
          var Eq;
          (console.error("Failed to save schematic:", qq), Qq("Error"), qq instanceof mq.b && qq.errorMessageForUser) && Wq.NotificationProvider.showAlertPopup({
            title: "worldBuilder:changesNotSaved",
            subtitle: qq.errorMessageForUser,
            textOpts: {
              subtitle: null !== (Eq = qq.errorMessageTranslationParams) && void 0 !== Eq ? Eq : void 0
            },
            confirmText: "general:ok"
          });
          setTimeout((() => {
            Qq("Enter")
          }), 1e3)
        }))
      }
      return {
        schematicData: Hq,
        updateSchematicData: iq,
        setTexturePack: tq,
        initializeTexturePack: Zq,
        updateState: Pq,
        formEnabled: hq,
        publishFormEnabled: nq,
        hasUnsavedChanges: bq,
        canEditSourceWorld: !gq,
        saveSchematic: fq,
        unpublishSchematic: function() {
          Wq.NotificationProvider.showPromptPopup({
            icon: "rocket-launch",
            title: "worldBuilder:unpublishAsGameConfirmTitle",
            subtitle: "worldBuilder:unpublishAsGameConfirmSubtitle",
            confirmText: "worldBuilder:unpublishAsGame",
            cancelText: "general:cancel",
            unlockPointerKey: "unpublishGamePrompt"
          }).getResult().then((qq => {
            !0 === qq && fq(!1)
          }))
        },
        editSourceWorld: function() {
          Qq("Loading"), Bq.d.getSourceWorld(Hq.schematicId).then((qq => {
            cq.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, Aq.f)("other"), jq((0, lq.e)("classic", qq)), null === Eq || void 0 === Eq || Eq()
          })).catch((qq => {
            console.error("Failed to get source world:", qq), Qq("Error"), setTimeout((() => {
              Qq("Enter")
            }), 1e3)
          }))
        },
        playGame: function() {
          cq.gameBridge.send("leaveGame", {
            reloadPath: "/"
          }), jq((0, xq.x)((0, Oq.q)(Hq.schematicId), Hq)), null === Eq || void 0 === Eq || Eq()
        }
      }
    }
  },
  4781: () => {}
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);