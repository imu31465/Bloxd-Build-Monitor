export const id = 98;
export const ids = [98, 185];
export const modules = {
  8880: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      EverythingMenu: () => gp
    });
    var hv = Pv(52),
      Sv = Pv(1035),
      ev = Pv.n(Sv),
      gv = Pv(1175),
      pv = Pv(1042),
      dv = Pv(2008),
      Nv = Pv(1442),
      lv = Pv(1095),
      Tv = Pv(1082);

    function Wv(vv) {
      let {
        items: zv,
        link: Pv,
        onClick: hv,
        selectedItemId: Sv,
        className: Wv,
        padStartsOnTab: wv = !0
      } = vv;
      const {
        t: av
      } = (0, gv.x)(), sv = (0, lv.i)(), Cv = [];
      for (const ev of zv) {
        var iv;
        const vv = Cv[Cv.length - 1];
        var cv;
        if (vv && vv.title === (null !== (iv = ev.section) && void 0 !== iv ? iv : null)) vv.items.push(ev);
        else Cv.push({
          title: null !== (cv = ev.section) && void 0 !== cv ? cv : null,
          items: [ev]
        })
      }
      return (0, Tv.jsxs)("div", {
        className: ev()("MenuSideBarBody", Wv),
        "data-pad-tabs": "2",
        children: [Cv.map(((vv, zv) => {
          var Pv;
          return (0, Tv.jsxs)("div", {
            className: "MenuSideBarSection",
            children: [vv.title && (0, Tv.jsx)("div", {
              className: "MenuSideBarSectionTitle",
              children: av(vv.title)
            }), vv.items.map((vv => {
              var zv;
              const Pv = !!vv.iconElement || !!vv.faIcon;
              return (0, Tv.jsxs)("div", {
                "data-pad-tab": !0,
                "data-pad-selected": Sv === vv.id ? "true" : void 0,
                "data-pad-default-focus": wv && Sv === vv.id || void 0,
                className: ev()("MenuSideBarBodyTab", {
                  ActiveMenuSideBarBodyTab: Sv === vv.id
                }),
                onClick: () => {
                  hv(vv.id)
                },
                children: [Pv && (0, Tv.jsx)("div", {
                  className: "MenuSideBarBodyTabIcon",
                  children: null !== (zv = vv.iconElement) && void 0 !== zv ? zv : (0, Tv.jsx)(pv.b, {
                    name: vv.faIcon
                  })
                }), (!sv || !Pv) && (0, Tv.jsx)("div", {
                  children: av(vv.title)
                }), vv.redDot && (0, Tv.jsx)(dv.d, {
                  top: "-0.2rem",
                  right: "-1rem"
                })]
              }, vv.id)
            }))]
          }, null !== (Pv = vv.title) && void 0 !== Pv ? Pv : zv)
        })), Pv && (0, Tv.jsxs)("div", {
          ...(0, Nv.U)(),
          "data-pad-destructive": !0,
          className: "MenuSideBarBodyTab MenuSideBarLink",
          onClick: Pv.onClick,
          children: [(0, Tv.jsx)("div", {
            className: "MenuSideBarBodyTabIcon",
            children: (0, Tv.jsx)(pv.b, {
              name: Pv.faIcon
            })
          }), (0, Tv.jsx)("div", {
            children: av(Pv.title)
          }), (0, Tv.jsx)(pv.b, {
            name: "arrow-right",
            className: "MenuSideBarLinkArrow"
          })]
        })]
      })
    }
    var wv = Pv(2775),
      av = Pv(1108),
      sv = Pv(2324),
      Cv = Pv(2899),
      iv = Pv(73),
      cv = Pv(1876),
      Gv = Pv(2191),
      mv = Pv(2197),
      jv = Pv(1647),
      fv = Pv(1327),
      Fv = Pv(4732),
      Yv = Pv(22),
      nv = Pv(8882);

    function Ov(vv) {
      let {
        setApplySettingsCallback: zv
      } = vv;
      const {
        clientEscMenuOptions: Pv
      } = (0, Yv.i)(["clientEscMenuOptions"]), [Sv, ev] = (0, hv.useState)(!1), [gv, pv] = (0, hv.useState)(!1), [dv, lv] = (0, hv.useState)(6400), [Wv, wv] = (0, hv.useState)(3600), [av, sv] = (0, hv.useState)(!1), [Cv, iv] = (0, hv.useState)(!1);

      function cv(vv) {
        const zv = "screenshot" === vv ? pv : ev;
        zv(!0);
        const Pv = av ? "normals" : Cv ? "depth" : null;
        nv.devTools.downloadScene(vv, {
          width: dv,
          height: Wv,
          colouring: Pv
        }).catch((vv => {
          console.error("Couldn't download the scene", vv)
        })).finally((() => {
          zv(!1)
        }))
      }
      return (0, Tv.jsxs)("div", {
        className: "DeveloperToolsCategory",
        children: [(0, Tv.jsx)(Fv.e, {
          label: "Disable Ambient Occlusion",
          checked: Pv.disableAmbientOcclusion,
          onClick: vv => {
            Yv.c.setClientEscMenuOptions({
              disableAmbientOcclusion: vv
            }), zv((() => Fv.l))
          },
          circleInfoText: "Disables ambient occlusion which is the shadow effect that makes corners and crevices darker."
        }), nv.devTools.supports("ambientLight") && (0, Tv.jsx)(Fv.i, {
          name: "Ambient Lighting Intensity",
          min: 0,
          max: 1,
          step: .01,
          initValue: Pv.ambientLightIntensity,
          onChange: vv => {
            nv.devTools.setAmbientLightIntensity(vv).then((() => {
              Yv.c.setClientEscMenuOptions({
                ambientLightIntensity: vv
              })
            })).catch((vv => {
              console.error("Couldn't set the ambient light", vv)
            }))
          },
          circleInfoText: "Sets the intensity of the white ambient light in the scene. The default is 0.5."
        }), nv.devTools.supports("weaponRaycasts") && (0, Tv.jsx)(Fv.e, {
          label: "Show Weapon Raycasts",
          checked: Pv.showWeaponRaycasts,
          onClick: vv => {
            Yv.c.setClientEscMenuOptions({
              showWeaponRaycasts: vv
            })
          },
          circleInfoText: "Draws debug lines for the raw raycasts used by locally fired weapons."
        }), nv.devTools.supports("sceneDownload") && (0, Tv.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, Tv.jsxs)("div", {
            className: "SettingBox WarningBorder",
            children: [(0, Tv.jsx)(Fv.e, {
              label: "Apply normal-based coloring",
              checked: av,
              onClick: vv => {
                sv(vv), vv && iv(!1)
              },
              circleInfoText: "Colors faces based on their normal direction (red=X, green=Y, blue=Z)."
            }), (0, Tv.jsx)(Fv.e, {
              label: "Apply depth-based coloring",
              checked: Cv,
              onClick: vv => {
                iv(vv), vv && sv(!1)
              },
              circleInfoText: "Colors from white (near) to black (far) based on distance from camera. Only works for screenshot export."
            }), (0, Tv.jsxs)("div", {
              className: "SettingBox DeveloperToolsCategoryScreenshotSettings",
              children: [(0, Tv.jsx)("div", {
                className: "SettingLabel",
                children: "Screenshot size in pixels (width x height)"
              }), (0, Tv.jsx)(jv.c, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (vv, zv) => {
                  const Pv = parseInt(vv) || 6400;
                  lv(Pv)
                },
                placeholderText: "width",
                maxLength: 10,
                defaultValue: dv.toString()
              }), (0, Tv.jsx)("span", {
                children: "X"
              }), (0, Tv.jsx)(jv.c, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (vv, zv) => {
                  const Pv = parseInt(vv) || 3600;
                  wv(Pv)
                },
                placeholderText: "height",
                maxLength: 10,
                defaultValue: Wv.toString()
              })]
            }), (0, Tv.jsxs)("div", {
              className: "DeveloperToolsCategoryExportButtons",
              children: [(0, Tv.jsxs)(Nv.d, {
                onClick: () => {
                  cv("screenshot")
                },
                disabled: gv,
                children: [gv && (0, Tv.jsx)(fv.c, {}), "Download Screenshot"]
              }), (0, Tv.jsxs)(Nv.d, {
                onClick: () => {
                  cv("glb")
                },
                disabled: Sv,
                children: [Sv && (0, Tv.jsx)(fv.c, {}), "Download GLB"]
              })]
            })]
          }), (0, Tv.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: 'To download GLB of scene with textures you need to "Disable Block Texture Atlas" in graphic settings first (you will need to reload the page to apply the setting).'
          })]
        })]
      })
    }
    var Dv = Pv(108),
      Kv = Pv(1114),
      Vv = Pv(1184),
      Uv = Pv(2779),
      Rv = Pv(1492),
      xv = Pv(1250),
      tv = Pv(1221),
      qv = Pv(2865),
      Iv = Pv(1985),
      Qv = Pv(1482),
      Zv = Pv(312),
      Av = Pv(2200),
      Lv = Pv(2209),
      Hv = Pv(2531),
      Mv = Pv(1612),
      yv = Pv(2834),
      Bv = Pv(2813),
      Jv = Pv(2872),
      Ev = Pv(202);

    function ov(vv) {
      const {
        t: zv,
        selectedLanguage: Pv
      } = (0, gv.x)(), {
        userContext: Sv
      } = (0, av.d)(), {
        superRankInfo: ev
      } = Sv, pv = vv && ((0, Zv.qc)(ev) || Sv.ranksMayChange) && (0, Lv.purchasesAllowed)(), {
        accountId: dv,
        data: Nv
      } = (0, Hv.d)(yv.c, pv);
      if ((0, hv.useEffect)((() => {
          if (pv) return yv.c.watchAccount(), Mv.d.addRefetchListener("billing", (vv => {
            "reconnected" === vv ? yv.c.refreshAfterReconnect() : yv.c.refresh()
          }))
        }), [pv]), !pv || !(0, Zv.qc)(ev) || null === Nv || dv !== Sv.whamm) return null;
      const lv = function(vv, zv, Pv) {
        const hv = Jv.k[(0, Jv.c)(Jv.k, zv)],
          Sv = void 0 === hv ? void 0 : (0, Ev.b)(vv.entitlements, hv.entitlementId);
        return void 0 === Sv || null === Sv.expiresAt || (0, Bv.e)(Sv) <= Pv ? null : Sv.willRenew && null === Sv.billingIssueDetectedAt ? {
          renews: !0,
          at: Math.max(Sv.expiresAt, Pv)
        } : {
          renews: !1,
          at: (0, Bv.e)(Sv)
        }
      }(Nv, ev.tier, Date.now());
      if (null === lv) return null;
      const Tv = lv.renews ? "store:renewsOn" : "store:endsOn";
      return zv(Tv, {
        date: new Date(lv.at).toLocaleDateString((0, gv.g)(Pv.code, Tv), {
          year: "numeric",
          month: "short",
          day: "numeric"
        })
      })
    }
    var bv = Pv(1344),
      rv = Pv(1200),
      kv = Pv(4635),
      Xv = Pv(1465),
      uv = Pv(3414),
      vz = Pv(2185);

    function zz(vv) {
      let {
        showing: zv
      } = vv;
      const {
        t: Pv
      } = (0, gv.x)(), {
        data: hv,
        failed: Sv
      } = (0, Hv.d)(uv.i, zv);
      return 0 === (null === hv || void 0 === hv ? void 0 : hv.length) || null === hv && !Sv ? null : (0, Tv.jsxs)("div", {
        className: "SettingBox AccountSettingsPaymentHistory",
        children: [(0, Tv.jsx)("div", {
          className: "AccountSettingsLabel",
          children: Pv("paymentHistory:title")
        }), null === hv && Sv && (0, Tv.jsx)("div", {
          className: "AccountSettingsPaymentHistoryError",
          children: Pv("paymentHistory:loadFailed")
        }), null !== hv && (0, Tv.jsx)("ul", {
          className: "PaymentHistoryList",
          children: hv.map((vv => (0, Tv.jsxs)("li", {
            className: "PaymentHistoryEntry",
            children: [(0, Tv.jsx)(vz.d, {
              entry: vv
            }), (0, Tv.jsxs)("div", {
              className: "PaymentHistoryEntryText",
              children: [(0, Tv.jsx)("div", {
                children: (0, vz.j)(Pv, vv)
              }), (0, Tv.jsxs)("div", {
                className: "PaymentHistoryEntryDate",
                children: [new Date(vv.at).toLocaleDateString(), "number" === typeof vv.orderId && ` \xb7 ${Pv("paymentHistory:order",{orderId:vv.orderId})}`]
              })]
            })]
          }, (0, uv.e)(vv))))
        })]
      })
    }
    var Pz = Pv(1850),
      hz = Pv(1230),
      Sz = Pv(1336),
      ez = Pv(1295),
      gz = Pv(1748),
      pz = Pv(2798);
    async function dz() {
      try {
        return function(vv) {
          const zv = new Map;
          for (const {
              store: Pv,
              status: hv,
              autoRenewStatus: Sv,
              managementUrl: ev
            }
            of Object.values(vv.subscriptions)) !(0, Bv.h)(Pv) || (0, Bv.k)(hv) || "willNotRenew" === Sv || zv.has(Pv) || zv.set(Pv, null !== ev && void 0 !== ev ? ev : Bv.l[Pv]);
          return Array.from(zv, (vv => {
            let [zv, Pv] = vv;
            return {
              store: zv,
              managementUrl: Pv
            }
          }))
        }(await (0, gz.j)((0, pz.f)().getCustomerInfo(), 5e3, "CustomerInfo got no answer in 5 s"))
      } catch (vv) {
        return console.error("Billing: loading CustomerInfo for the player's store subscriptions failed:", vv), null
      }
    }
    var Nz = Pv(302),
      lz = Pv(2378);
    const Tz = {
      appStore: {
        name: "App Store",
        ...Nz.Lb.appStore
      },
      googlePlay: {
        name: "Google Play",
        ...Nz.Lb.googlePlay
      },
      discord: {
        name: "Discord",
        ...Nz.Lb.discord
      }
    };

    function Wz(vv) {
      let {
        warning: zv,
        subscriptions: Pv
      } = vv;
      const {
        t: hv
      } = (0, gv.x)();
      return null !== Pv && 0 === Pv.length ? (0, Tv.jsx)(Tv.Fragment, {
        children: hv(zv)
      }) : (0, Tv.jsxs)("div", {
        className: "DeleteAccountSubtitle",
        children: [hv(zv), null === Pv && (0, Tv.jsx)("div", {
          className: "DeleteAccountSubtitleNote",
          children: hv("auth:deleteAccountSubscriptionsLoadFailed")
        }), null !== Pv && (0, Tv.jsxs)(Tv.Fragment, {
          children: [(0, Tv.jsx)("div", {
            className: "DeleteAccountSubtitleNote",
            children: hv("auth:deleteAccountStoreSubscriptions")
          }), (0, Tv.jsx)(lz.c, {
            className: "DeleteAccountSubtitleLinks",
            links: Pv.map((vv => {
              let {
                store: zv,
                managementUrl: Pv
              } = vv;
              return {
                ...Tz[zv],
                url: Pv
              }
            }))
          })]
        })]
      })
    }

    function wz(vv) {
      let {
        showing: zv
      } = vv;
      const {
        userContext: Pv,
        isUserContextUpdating: Sv
      } = (0, av.d)(), {
        t: ev
      } = (0, gv.x)(), [pv, dv] = (0, hv.useState)(!1), [lv, Wv] = (0, hv.useState)(null), wv = (0, hv.useRef)(zv);
      (0, hv.useEffect)((() => (wv.current = zv, () => {
        wv.current = !1
      })), [zv]);
      const sv = Sv || pv;
      async function Cv() {
        const vv = function(vv) {
            if ((0, Dv.b)()) return "auth:discordActivityDeleteAccountLossWarning";
            return vv ? "auth:deleteAccountLossWarning" : "auth:deleteGuestAccountWarning"
          }(Pv.isLoggedIn()),
          zv = (0, Pz.e)(Pv.availableUserContextTypes) ? await dz() : [];
        if (!wv.current) return hz.e.ok();
        if (!0 !== await Sz.NotificationProvider.showPromptPopup({
            title: "auth:deleteAccountPopupTitleNamed",
            textOpts: {
              title: {
                playerName: (0, xv.c)(Pv.getPlayerName(), !iv.featureFlags.canSeeRealPlayerNames)
              }
            },
            subtitle: (0, Tv.jsx)(Wz, {
              warning: vv,
              subscriptions: zv
            }),
            confirmText: "auth:deleteAccount",
            destructive: !0,
            confirmTooltip: "auth:deleteAccountPopupConfirmTooltip",
            cancelText: "general:cancel",
            cancelTooltip: "auth:deleteAccountPopupCancelTooltip"
          }).getResult()) return hz.e.ok();
        const hv = await (0, Kv.postJsonWithMetricsCookiesAndJsonResponse)(`${Vv.clientSideServerUrls.indexUrl}/index/metrics/revoke-cookies`, {
          gameState: Yv.c.get("gameState")
        }, {
          retries: 3
        }, Pv.getMetricsCookies());
        if (hv.error) return hz.e.error(hv.error);
        if ((0, Dv.b)()) {
          (await ez.o.discordActivity()).exit("User deleted their account")
        }
        return (0, Kv.forgetStoredGuestAccount)(Pv.whamm), (0, Kv.forceGlobalSignOut)(!0), hz.e.ok()
      }
      return (0, Tv.jsxs)("div", {
        className: "AccountSettingsDeleteAccountButtonContainer",
        children: [(0, Tv.jsxs)(Nv.A, {
          onClick: async function() {
            if (!pv) {
              dv(!0);
              try {
                const vv = await Cv(),
                  zv = vv.isError() ? vv.asError().message : null;
                Wv(zv)
              } catch (vv) {
                console.error("Failed to delete account:", vv), Wv(ev("auth:genericDeleteAccountError"))
              }
              dv(!1)
            }
          },
          className: "AccountSettingsDeleteAccountButton",
          disabled: sv,
          children: [sv && (0, Tv.jsx)("div", {
            className: "DeletingAccountLoader",
            children: (0, Tv.jsx)(fv.c, {})
          }), ev("auth:deleteAccount")]
        }), lv && (0, Tv.jsx)("div", {
          className: "DeleteAccountError",
          children: lv
        })]
      })
    }
    var az = Pv(3342),
      sz = Pv(3364),
      Cz = Pv(3356);

    function iz(vv) {
      let {
        showing: zv
      } = vv;
      const {
        t: Pv
      } = (0, gv.x)(), {
        data: hv,
        failed: Sv
      } = (0, Hv.d)(az.c, zv), ev = null === hv ? null : (0, az.f)(hv);
      return (0, Tv.jsxs)("div", {
        className: "SettingBox BlockedAndIgnoredPlayers",
        children: [(0, Tv.jsx)("div", {
          className: "AccountSettingsLabel",
          children: Pv("settingsMenu:blockedAndIgnoredPlayers")
        }), null === ev && !Sv && (0, Tv.jsx)(fv.c, {}), null === ev && Sv && (0, Tv.jsxs)("div", {
          className: "BlockedAndIgnoredPlayersError",
          children: [Pv("settingsMenu:blockedAndIgnoredPlayersLoadFailed"), (0, Tv.jsx)(Nv.d, {
            className: "SmallTextLight",
            onClick: () => {
              az.c.refresh()
            },
            children: Pv("general:tryAgain")
          })]
        }), 0 === (null === ev || void 0 === ev ? void 0 : ev.length) && (0, Tv.jsx)("div", {
          className: "BlockedAndIgnoredPlayersEmpty",
          children: Pv("settingsMenu:noBlockedOrIgnoredPlayers")
        }), null !== ev && ev.length > 0 && (0, Tv.jsx)("ul", {
          className: "BlockedAndIgnoredPlayersList",
          children: ev.map((vv => {
            let {
              name: zv,
              exclusion: hv
            } = vv;
            const Sv = Cz.d[hv];
            return (0, Tv.jsxs)("li", {
              className: "BlockedAndIgnoredPlayer",
              children: [(0, Tv.jsx)("div", {
                className: "BlockedAndIgnoredPlayerName",
                children: zv
              }), (0, Tv.jsx)(Nv.e, {
                className: "SmallTextLight",
                onClick: () => {
                  (0, sz.e)(Sv, zv, {
                    chatMessage: null
                  })
                },
                children: Pv(Cz.e[Sv].text)
              })]
            }, zv)
          }))
        })]
      })
    }
    const cz = (0, hv.memo)((function(vv) {
      var zv;
      let {
        showing: Pv,
        inGame: Sv
      } = vv;
      const {
        t: dv,
        selectedLanguage: lv
      } = (0, gv.x)(), {
        hideSocialLocationFrom: Wv
      } = (0, Yv.i)(["hideSocialLocationFrom"]), sv = (0, wv.d)(), {
        userContext: Cv,
        isUserContextUpdating: cv
      } = (0, av.d)(), [Gv, mv] = (0, hv.useState)(null !== (zv = Cv.getPlayerName()) && void 0 !== zv ? zv : ""), [nv, Ov] = (0, hv.useState)(null), {
        purchasing: Hv,
        outcome: Mv,
        purchase: yv
      } = (0, Uv.e)("/super-rank-welcome"), Bv = (0, Zv.ac)((0, gv.g)(lv.code, "general:timeLeft"), Cv.superRankInfo), Jv = ov(Pv), Ev = Bv ? dv("general:timeLeft", {
        time: Bv
      }) : Jv, [uv, vz] = (0, hv.useState)(!1), [Pz, hz] = (0, hv.useState)(!1), Sz = (0, hv.useRef)(null), ez = (0, hv.useRef)(null), gz = (0, Iv.h)({
        showProgressUpdateMessage: !0,
        enabled: !0
      }), pz = null === gz, dz = null !== gz && void 0 !== gz ? gz : [], Nz = Cv !== Kv.NULL_USER_CONTEXT && !Cv.isLoggedIn(), lz = Nz && 0 !== (null === gz || void 0 === gz ? void 0 : gz.length), [Tz, Wz] = (0, hv.useState)([]), [az, sz] = (0, hv.useState)(!1), Cz = Cv.playerHasRank("youtuber"), cz = (0, hv.useCallback)((() => Qv.e.getPlayerProfile(Cv, {
        lowerCaseName: Cv.getPlayerName().toLowerCase()
      }).then((vv => {
        Wz(vv.socialLinks)
      })).catch((vv => {
        console.error("Failed to refresh social links", vv)
      }))), [Cv]);

      function mz(vv) {
        vv !== Gv && ((0, xv.l)(vv) ? (vv = (0, xv.m)(vv), Ov("Only letters, numbers, and _")) : Ov(null), Sz.current && (Sz.current.value = vv), mv(vv))
      }
      return (0, hv.useEffect)((() => (!0 === Pv ? (clearInterval(ez.current), ez.current = setInterval(sv, 1e3)) : clearInterval(ez.current), () => {
        clearInterval(ez.current)
      })), [Pv, sv]), (0, hv.useEffect)((() => {
        var vv;
        mv(null !== (vv = Cv.getPlayerName()) && void 0 !== vv ? vv : "")
      }), [Cv]), (0, hv.useEffect)((() => {
        if (!Pv || !Cz || cv) return;
        let vv = !1;
        return sz(!0), Wz([]), Qv.e.getPlayerProfile(Cv, {
          lowerCaseName: Cv.getPlayerName().toLowerCase()
        }).then((zv => {
          vv || Wz(zv.socialLinks)
        })).catch((vv => {
          console.error("Failed to load social links", vv)
        })).finally((() => {
          vv || sz(!1)
        })), () => {
          vv = !0
        }
      }), [Pv, Cz, cv, Cv]), (0, Tv.jsxs)("div", {
        className: ev()("SettingsMenuRightInner AccountSettings", {
          AccountSettingsLocked: Sv
        }),
        children: [Sv && (0, Tv.jsx)("div", {
          className: "AccountSettingsInGameWarning",
          children: dv("settingsMenu:accountSettingsInGameWarning")
        }), (0, Tv.jsxs)("div", {
          className: "SettingBox SetAccountNameDiv SmallTextLight",
          children: [(0, Tv.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsNameLabel",
            children: [dv("homePage:discordNamePopupTitle"), (0, Tv.jsxs)(Rv.LinkPreserveSearch, {
              className: "AccountSettingsViewProfile",
              to: (0, tv.g)({
                name: Cv.getPlayerName()
              }),
              onClick: () => {
                Yv.c.set({
                  openEverythingMenuName: null
                })
              },
              children: [(0, Tv.jsx)(pv.b, {
                name: "arrow-up-right-from-square"
              }), " ", dv("profileCard:viewProfile")]
            })]
          }), (0, Tv.jsxs)("div", {
            className: "EnterAccNameDivWrapper",
            "data-pad-initial-area": !0,
            children: [(0, Tv.jsxs)("div", {
              className: "EnterAccNameInputRow",
              children: [iv.featureFlags.canChangeName && (0, Tv.jsx)(jv.c, {
                className: "EnterName",
                placeholderText: dv("homePage:enterName"),
                maxLength: xv.f,
                defaultValue: Gv,
                onValueChange: vv => {
                  mz(vv)
                },
                forcedText: uv || !iv.featureFlags.canChangeName ? Gv : null,
                blurOnEnter: !0,
                domRef: Sz
              }), (0, Tv.jsx)(Nv.d, {
                className: "ChooseRandomNameButton",
                onClick: () => {
                  mz((0, xv.e)())
                },
                children: (0, Tv.jsx)(pv.b, {
                  name: "dice",
                  className: "ChooseRandomNameIcon"
                })
              }), !iv.featureFlags.canChangeName && (0, Tv.jsx)("div", {
                className: "EnterName NoInput",
                children: (0, xv.c)(Gv, !iv.featureFlags.canSeeRealPlayerNames)
              })]
            }), (0, Tv.jsx)(Nv.d, {
              className: "ChooseNameButton",
              disabled: uv || Gv === Cv.getPlayerName(),
              onClick: () => {
                Gv.length < xv.h ? Ov(dv("homePage:changeNameMinLengthError", {
                  length: xv.h
                })) : Gv.length > xv.f ? Ov(dv("homePage:changeNameMaxLengthError", {
                  length: xv.f
                })) : (vz(!0), Ov(null), async function(vv, zv, Pv, hv) {
                  const Sv = await (0, Kv.postJsonWithMetricsCookiesAndJsonResponse)(`${Vv.clientSideServerUrls.indexUrl}/index/name/update`, {
                    name: vv
                  }, {
                    retries: 3
                  }, zv.getMetricsCookies()).catch((vv => (console.error("Bad response from the server when trying to update name:", vv), {
                    err: "An error occurred trying to change your name! Please report on discord what steps you took to get this error message."
                  })));
                  Sv.err ? (console.error("Error when trying to get with new name from DB", Sv.err), hv(Sv.err)) : !0 === Sv.nameExists ? hv("Name is already taken") : Pv(vv)
                }(Gv, Cv, (vv => {
                  Cv.setPlayerName(vv), vz(!1)
                }), (vv => {
                  Ov(vv), vz(!1)
                })))
              },
              children: dv("general:choose")
            })]
          }), nv && (0, Tv.jsx)("div", {
            className: "ChooseAccNameError",
            children: nv
          })]
        }), (0, Tv.jsx)(Fv.e, {
          label: (() => {
            if ((0, rv.o)(Wv)) {
              const vv = (0, gv.g)(lv.code, "general:timeLeft"),
                zv = (0, Zv.gb)(vv, Date.now(), Wv + rv.l);
              return `${dv("settingsMenu:hideSocialLocation")} (${dv("general:timeLeft",{time:zv})})`
            }
            return dv("settingsMenu:hideSocialLocation")
          })(),
          onClick: () => {
            const vv = !(0, rv.o)(Wv);
            (0, Xv.reportAnalyticsClick)({
              id: "social.hide_location",
              value: vv ? "on" : "off"
            }), hz(!0), Qv.e.setHideSocialLocation(Cv, vv).then((() => {
              Yv.c.set({
                hideSocialLocationFrom: vv ? Date.now() : null
              })
            })).finally((() => {
              hz(!1)
            }))
          },
          checked: (0, rv.o)(Wv),
          disabled: Pz
        }), Cz && (0, Tv.jsxs)("div", {
          className: "SettingBox AccountSettingsSocialLinks",
          children: [(0, Tv.jsx)("div", {
            className: "AccountSettingsLabel",
            children: dv("settingsMenu:socialLinks")
          }), az && (0, Tv.jsx)(fv.c, {}), !az && (0, Tv.jsx)(kv.d, {
            socialLinks: Tz,
            editable: !0,
            userContext: Cv,
            onLinksUpdated: cz
          })]
        }), (0, Tv.jsxs)("div", {
          className: "SettingBox",
          children: [(0, Tv.jsx)("div", {
            className: "AccountSettingsLabel",
            children: dv(lz ? "auth:loginOrSwitchAccount" : "auth:login")
          }), pz && (0, Tv.jsx)(fv.c, {}), !pz && 0 === dz.length && (0, Tv.jsx)("div", {
            className: "NoLoginOptions",
            children: dv("auth:noLoginOptions")
          }), !pz && dz.length > 0 && "crazygames" !== Dv.o && (0, Tv.jsx)("div", {
            className: "AccountSettingsLoginButtons",
            children: dz
          }), !pz && dz.length > 0 && "crazygames" === Dv.o && (0, Tv.jsxs)("div", {
            className: "AccountSettingsLoginButtons",
            children: [dz[0], dz.length > 1 && (0, Tv.jsxs)(Tv.Fragment, {
              children: [(0, Tv.jsxs)("div", {
                className: "LegacyLoginOptionsHeader",
                children: [(0, Tv.jsx)("span", {
                  className: "LegacyLoginOptionsTitle",
                  children: dv("auth:legacyLoginOptions")
                }), (0, Tv.jsx)(bv.d, {
                  className: "LegacyLoginOptionsInfoIcon",
                  hoverInfo: dv("auth:legacyLoginOptionsInfo")
                })]
              }), (0, Tv.jsx)("div", {
                className: "LegacyAccountSettingsLoginButtons",
                children: dz.slice(1)
              })]
            })]
          }), iv.featureFlags.useLogin && (null !== Cv.loggedInInfo || Cv.isLoggedIn()) && (0, Tv.jsxs)(Tv.Fragment, {
            children: [(0, Tv.jsx)("div", {
              className: "AccountSettingsLoginDivider"
            }), (0, Tv.jsxs)(Nv.A, {
              onClick: () => {
                (0, Kv.forceGlobalSignOut)()
              },
              className: "AccountSettingsSignedInButton",
              children: [(0, Tv.jsx)(pv.b, {
                name: "right-from-bracket"
              }), dv("auth:signOut")]
            })]
          })]
        }), !Cv.playerHasRank("super") && (0, Lv.purchasesAllowed)() && (0, Tv.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, Tv.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, Tv.jsx)(pv.b, {
              name: "bolt"
            }), dv("homePage:superRank")]
          }), (0, Tv.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [(0, Tv.jsxs)(Nv.j, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, Av.s)({
                  mode: "self",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, Tv.jsx)(pv.b, {
                name: "bolt"
              }), dv("homePage:getSuperRank")]
            }), (0, Tv.jsxs)(Nv.j, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, Av.s)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, Tv.jsx)(pv.b, {
                name: "bolt"
              }), dv("homePage:giftSuperRank")]
            })]
          })]
        }), Cv.playerHasRank("super") && (0, Tv.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, Tv.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, Tv.jsx)(pv.b, {
              name: "bolt"
            }), dv("homePage:superRank"), Ev && (0, Tv.jsxs)("div", {
              className: "AccountSettingsSuperRankTimeLeft",
              children: ["(", Ev, ")"]
            })]
          }), (0, Lv.purchasesAllowed)() && (0, Tv.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [!(0, Zv.qc)(Cv.superRankInfo) && (0, Tv.jsxs)(Nv.j, {
              className: "AccountSettingsSuperRankProlong",
              loading: Hv,
              onClick: () => {
                yv(qv.k.id, null)
              },
              children: [(0, Tv.jsx)(pv.b, {
                name: "bolt"
              }), dv("settingsMenu:getSuperRankAdditionalDaysPremiumCurrency", {
                days: qv.k.product.days,
                price: qv.k.price
              })]
            }), (0, Tv.jsxs)(Nv.j, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, Av.s)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, Tv.jsx)(pv.b, {
                name: "bolt"
              }), dv("homePage:giftSuperRank")]
            })]
          }), Mv && (0, Tv.jsx)("div", {
            className: "AccountSettingsSuperRankProlongError SmallTextBold",
            children: dv(Mv.translationKey)
          })]
        }), (0, Tv.jsx)(zz, {
          showing: Pv
        }), iv.featureFlags.useSocialFeatures && (0, Tv.jsx)(iz, {
          showing: Pv
        }), (0, Tv.jsxs)("div", {
          className: "SettingBoxGroup AccountSettingsDeleteAccountGroup",
          children: [(0, Tv.jsxs)("div", {
            className: "SettingBox AccountSettingsDeleteAccount SettingBoxWarning",
            children: [(0, Tv.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: dv(Gz(Nz, lz))
            }), (0, Dv.b)() && (0, Tv.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: dv("auth:discordActivityKickWarning")
            }), (0, Tv.jsx)(wz, {
              showing: Pv
            })]
          }), (0, Tv.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: dv("auth:deleteAccountWarning")
          })]
        })]
      })
    }));

    function Gz(vv, zv) {
      return vv ? zv ? "auth:deleteGuestAccountButtonTitle" : "auth:deleteGuestAccountWarning" : "auth:deleteAccountButtonTitle"
    }
    var mz = Pv(8895),
      jz = Pv(2917),
      fz = Pv(1234),
      Fz = Pv(1426);
    const Yz = (0, hv.memo)((function(vv) {
        let {
          inGame: zv
        } = vv;
        const {
          t: Pv,
          selectedLanguage: hv
        } = (0, gv.x)(), {
          clientEscMenuOptions: Sv,
          showDebugOverlay: ev
        } = (0, Yv.i)(["clientEscMenuOptions", "showDebugOverlay"]), pv = (0, sv.i)("hideCoordinates");
        let dv = "settingsMenu:showCoordinates",
          Nv = "settingsMenu:showChunkCoordinates";

        function lv(vv) {
          const zv = new Intl.DisplayNames([vv], {
            type: "language"
          }).of(vv);
          return zv.charAt(0).toUpperCase() + zv.slice(1)
        }
        return pv && (dv = "settingsMenu:showCoordinatesHidden", Nv = "settingsMenu:showChunkCoordinatesHidden"), (0, Tv.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [zv && iv.featureFlags.canUseInviteLinks && (0, Tv.jsxs)("div", {
            className: "SettingBox",
            children: [(0, Tv.jsx)("div", {
              className: "SettingsMenuInviteHeader",
              children: Pv("settingsMenu:inviteLink")
            }), (0, Tv.jsx)(mz.h, {})]
          }), (0, Tv.jsxs)("div", {
            className: "SettingBox",
            children: [(0, Tv.jsx)("div", {
              className: "SliderText",
              style: {
                marginBottom: "10px"
              },
              children: Pv("settingsMenu:language")
            }), (0, Tv.jsx)(jz.e, {
              options: Object.entries(gv.e).map((vv => {
                let [zv, Pv] = vv;
                return {
                  label: (0, Tv.jsxs)("div", {
                    className: "SettingsMenuLanguageOption",
                    children: [(0, Tv.jsx)("img", {
                      src: Pv.flagImg,
                      alt: "flag"
                    }), (0, Tv.jsxs)("span", {
                      children: [lv(zv), " ", (0, Tv.jsxs)("span", {
                        className: "SettingsMenuLanguageOptionCode",
                        children: ["(", zv, ")"]
                      })]
                    })]
                  }),
                  value: zv
                }
              })),
              value: hv.code,
              onChange: vv => {
                fz.f.get().setCurrentLanguage(vv.value)
              }
            })]
          }), !(0, iv.isMobileApp)() && (0, Fz.d)() && iv.featureFlags.useForceRotateForceFullscreenOverlay && (0, Tv.jsx)(Fv.e, {
            label: Pv("settingsMenu:disableFullscreenMode"),
            checked: Sv.disableFullscreen,
            onClick: vv => {
              Yv.c.setClientEscMenuOptions({
                disableFullscreen: vv
              })
            }
          }), (0, Tv.jsx)(Fv.e, {
            label: Pv(dv),
            checked: Sv.showCoordinates,
            onClick: vv => {
              Yv.c.setClientEscMenuOptions({
                showCoordinates: vv
              })
            },
            disabled: pv
          }), (0, Tv.jsx)(Fv.e, {
            label: Pv(Nv),
            checked: Sv.showChunkCoordinates,
            onClick: vv => {
              Yv.c.setClientEscMenuOptions({
                showChunkCoordinates: vv
              })
            },
            disabled: pv
          }), (0, Tv.jsx)(Fv.e, {
            label: Pv("settingsMenu:showFps"),
            checked: Sv.showFPS,
            onClick: vv => {
              Yv.c.setClientEscMenuOptions({
                showFPS: vv
              })
            }
          }), (0, Tv.jsx)(Fv.e, {
            label: Pv("settingsMenu:disableBunnyHopping"),
            checked: Sv.disableBunnyHopping,
            onClick: vv => {
              Yv.c.setClientEscMenuOptions({
                disableBunnyHopping: vv
              })
            }
          }), (0, ez.E)() && (0, Tv.jsx)(Fv.e, {
            label: Pv("settingsMenu:showChat"),
            checked: Sv.showChat,
            onClick: vv => {
              Yv.c.setClientEscMenuOptions({
                showChat: vv
              })
            }
          }), (0, Tv.jsx)(Fv.e, {
            label: Pv("settingsMenu:showDebugOverlay"),
            checked: ev,
            onClick: vv => {
              Yv.c.set({
                showDebugOverlay: vv
              })
            }
          }), iv.featureFlags.useSocialFeatures && (0, Tv.jsx)(Fv.e, {
            label: Pv("settingsMenu:showFriendOnlineToasts"),
            checked: Sv.showFriendOnlineToasts,
            onClick: vv => {
              Yv.c.setClientEscMenuOptions({
                showFriendOnlineToasts: vv
              })
            }
          }), (0, Tv.jsx)(Fv.e, {
            label: Pv("settingsMenu:showNewItemIndicator"),
            checked: Sv.showNewItemIndicator,
            onClick: vv => {
              Yv.c.setClientEscMenuOptions({
                showNewItemIndicator: vv
              })
            }
          })]
        })
      })),
      nz = (0, hv.memo)((function() {
        const {
          t: vv
        } = (0, gv.x)(), {
          soundVolume: zv,
          musicVolume: Pv
        } = (0, Yv.i)(["soundVolume", "musicVolume"]);
        return (0, Tv.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, Tv.jsx)(Fv.i, {
            name: vv("settingsMenu:musicVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: Pv,
            onChange: vv => {
              Yv.c.set({
                musicVolume: Math.round(100 * vv) / 100
              })
            },
            format: vv => vv.toFixed(2)
          }), (0, Tv.jsx)(Fv.i, {
            name: vv("settingsMenu:soundEffectsVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: zv,
            onChange: vv => {
              Yv.c.set({
                soundVolume: Math.round(100 * vv) / 100
              })
            },
            format: vv => vv.toFixed(2)
          })]
        })
      }));
    var Oz = Pv(707),
      Dz = Pv(1439),
      Kz = Pv(3424),
      Vz = Pv(8898),
      Uz = Pv(3247);
    const Rz = {
      app: "notificationSettings:pushTargetsApp",
      browser: "notificationSettings:pushTargetsBrowser",
      msnPlay: "notificationSettings:pushTargetsMsnPlay"
    };

    function xz() {
      const {
        t: vv
      } = (0, gv.x)(), zv = (0, Uz.b)(), {
        mobilePushNotificationsCanAsk: Pv
      } = (0, Yv.i)(["mobilePushNotificationsCanAsk"]), [Sv, ev] = (0, hv.useState)(null), [pv, dv] = (0, hv.useState)(!1), [lv, Wv] = (0, hv.useState)(null), [wv, av] = (0, hv.useState)(!1), sv = (0, hv.useCallback)((() => {
        (0, Kz.e)().then((vv => {
          zv.current && (ev(vv), dv(!1))
        })).catch((vv => {
          console.error("Failed to load push notification targets:", vv), zv.current && dv(!0)
        }))
      }), [zv]), Cv = (0, hv.useCallback)((() => {
        (0, Vz.c)().then((vv => {
          zv.current && Wv((() => vv))
        }))
      }), [zv]);
      (0, hv.useEffect)((() => {
        sv()
      }), [sv]), (0, hv.useEffect)((() => {
        Cv()
      }), [Cv, Pv]), (0, Dz.g)(Kz.j, sv);
      const iv = null === Sv ? [] : Object.keys(Rz).filter((vv => Sv[vv] > 0));
      return (0, Tv.jsxs)("div", {
        className: "SettingBox PushNotificationSettings",
        children: [(0, Tv.jsx)("div", {
          className: "SliderText",
          children: vv("notificationSettings:pushNotifications")
        }), null === Sv && pv && (0, Tv.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: vv("notificationSettings:pushTargetsLoadFailed")
        }), null !== Sv && 0 === iv.length && (0, Tv.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: vv("notificationSettings:pushTargetsNone")
        }), iv.length > 0 && (0, Tv.jsx)("ul", {
          className: "PushNotificationSettingsTargets",
          children: iv.map((zv => {
            var Pv;
            return (0, Tv.jsx)("li", {
              children: vv(Rz[zv], {
                count: null !== (Pv = null === Sv || void 0 === Sv ? void 0 : Sv[zv]) && void 0 !== Pv ? Pv : 0
              })
            }, zv)
          }))
        }), null !== lv && (0, Tv.jsx)(Nv.d, {
          className: "PushNotificationSettingsButton",
          loading: wv,
          onClick: () => {
            av(!0), lv().catch((vv => {
              console.error("Failed to turn on push notifications:", vv)
            })).finally((() => {
              zv.current && (av(!1), Cv())
            }))
          },
          children: vv("notificationSettings:pushTurnOn")
        })]
      })
    }
    const tz = {
        toastAndTray: {
          label: "notificationSettings:friendRequestsAll",
          info: "notificationSettings:friendRequestsAllInfo"
        },
        trayOnly: {
          label: "notificationSettings:friendRequestsQuiet",
          info: "notificationSettings:friendRequestsQuietInfo"
        },
        off: {
          label: "notificationSettings:friendRequestsOff",
          info: "notificationSettings:friendRequestsOffInfo"
        }
      },
      qz = (0, hv.memo)((function() {
        const {
          t: vv
        } = (0, gv.x)(), {
          clientEscMenuOptions: zv
        } = (0, Yv.i)(["clientEscMenuOptions"]);
        return (0, Tv.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, Tv.jsx)(Fv.f, {
            label: vv("notificationSettings:friendRequests"),
            options: Oz.c.map((zv => ({
              value: zv,
              label: vv(tz[zv].label)
            }))),
            value: zv.friendRequestNotifications,
            onChange: vv => {
              Yv.c.setClientEscMenuOptions({
                friendRequestNotifications: vv
              })
            },
            circleInfoText: (0, Tv.jsx)("div", {
              className: "NotificationSettingLevelsInfo",
              children: Oz.c.map((zv => (0, Tv.jsxs)("div", {
                children: [(0, Tv.jsx)("b", {
                  children: vv(tz[zv].label)
                }), ": ", vv(tz[zv].info)]
              }, zv)))
            })
          }), (0, Tv.jsx)(xz, {})]
        })
      }));
    var Iz = Pv(4260),
      Qz = Pv(185),
      Zz = Pv(278),
      Az = Pv(6377),
      Lz = Pv(3201),
      Hz = Pv(8904),
      Mz = Pv(626),
      yz = Pv(26);
    var Bz = Pv(635),
      Jz = Pv(39),
      Ez = Pv(4138);
    const oz = new Map([
      ["chunkHorizAddDist", "horizontal"],
      ["chunkVertAddDist", "vertical"]
    ]);

    function bz(vv) {
      return oz.has(vv) ? cv.gameBridge.lookup("Wm", null) : null
    }

    function rz(vv) {
      if (!(0, Mz.N)(Yv.c.get("clientEscMenuOptions")[vv])) return Yv.c.get("clientEscMenuOptions")[vv];
      const zv = bz(vv);
      return null !== zv ? zv[oz.get(vv)] : Jz.h.getItem(vv)
    }

    function kz(vv, zv) {
      if ("useTouchControls" === vv) return void(0, Ez.b)(zv);
      vv in Yv.c.get("clientEscMenuOptions") && Yv.c.setClientEscMenuOptions({
        [vv]: zv
      });
      const Pv = bz(vv);
      null !== Pv && cv.gameBridge.send("setChunkAddDistance", {
        ...Pv,
        [oz.get(vv)]: zv
      }), Jz.h.setItem(vv, zv)
    }
    var Xz = Pv(4176),
      uz = Pv(8909),
      vP = Pv(8914),
      zP = Pv(4255);

    function PP(vv) {
      var zv, Sv, pv, dv;
      let {
        minChunkAddDist: Nv,
        getValue: lv,
        onChange: Wv,
        setApplySettingsCallback: wv
      } = vv;
      const {
        t: av
      } = (0, gv.x)(), {
        clientEscMenuOptions: Cv
      } = (0, Yv.i)(["clientEscMenuOptions", "showDistantNametags"]), cv = (0, hv.useRef)(lv("showFog")), Gv = (0, hv.useRef)(Cv.antiAliasing), mv = (0, hv.useRef)(Cv.useWebGpu), [jv, fv] = (0, hv.useState)(null), [Ov, Dv] = (0, hv.useState)((() => (0, Lz.e)(iv.featureFlags.settings.canUseShaderPacks))), [Kv] = (0, hv.useState)((() => Yv.c.isWebGpuDefaultOff())), [Vv] = (0, hv.useState)(Zz.g);
      (0, hv.useEffect)((() => {
        let vv = !1;
        return (0, iv.hasUsableWebGpuAdapter)().then((zv => {
          vv || fv(zv)
        })), (0, Lz.j)(iv.featureFlags.settings.canUseShaderPacks) && (0, Az.g)().then((async zv => {
          const hv = null !== zv && await async function(vv) {
            const [{
              isShaderPackActive: zv
            }, {
              loadPageShaderPackCompiler: hv
            }] = await Promise.all([Pv.e(127).then((() => Pv(6369))), Promise.all([Pv.e(75), Pv.e(131), Pv.e(130)]).then((() => Pv(6339)))]);
            return zv(vv, await hv())
          }(zv);
          vv || Dv(hv)
        })), () => {
          vv = !0
        }
      }), []);
      const Uv = function(vv, zv, Pv, hv, Sv) {
          return (0, Hz.e)(Pv, hv) && !0 === zv ? {
            translationKey: "settingsMenu:newWebGpuForcedOnByShaderPack",
            checked: !0,
            disabled: !0
          } : {
            translationKey: !1 !== zv ? "settingsMenu:newWebGpu" : Sv ? "settingsMenu:newWebGpuDisabledUntilRestart" : "settingsMenu:newWebGpuUnsupported",
            checked: vv && !1 !== zv,
            disabled: !0 !== zv
          }
        }(Cv.useWebGpu, jv, Ov, Kv, Vv),
        Rv = (Cv.useWebGpu || (0, Hz.e)(Ov, Kv)) && Ov && !0 === jv,
        xv = (0, sv.i)("lightingOverride"),
        tv = !(0, Mz.N)(xv);
      let qv = "settingsMenu:enableLighting";
      tv && (qv = xv ? "settingsMenu:enableLightingForcedOn" : "settingsMenu:enableLightingForcedOff");
      const Iv = vv => {
          var zv, Pv, hv;
          const Sv = null !== (zv = vv.showFog) && void 0 !== zv ? zv : lv("showFog"),
            ev = null !== (Pv = vv.antiAliasing) && void 0 !== Pv ? Pv : Cv.antiAliasing,
            gv = null !== (hv = vv.useWebGpu) && void 0 !== hv ? hv : Cv.useWebGpu,
            pv = !Bz.r && Sv !== cv.current || ev !== Gv.current || gv !== mv.current;
          wv(pv ? () => Fv.l : null)
        },
        Qv = (0, sv.i)("fogChunkDistanceOverride"),
        Zv = (0, sv.i)("fogBlockDistanceOverride"),
        Av = !(0, Mz.N)(Qv) || !(0, Mz.N)(Zv),
        Lv = Av ? "settingsMenu:showFogForcedOn" : "settingsMenu:showFog",
        [Hv, Mv] = (0, Iz.f)(Nv),
        [yv, Bv] = (0, zP.h)(Nv),
        Jv = av("settingsMenu:chunkLoadDistanceDeviceLimit"),
        Ev = yv < Hv,
        ov = Math.min(null !== (zv = lv("chunkHorizAddDist")) && void 0 !== zv ? zv : Nv[0], yv),
        bv = !Av && function(vv, zv) {
          return !0 === vv.showFog && vv.fogChunkDistance > zv
        }(Cv, ov);
      return (0, Tv.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [(0, Tv.jsx)(Fv.i, {
          name: av("settingsMenu:horizontalChunkLoadDistance"),
          min: Nv[0],
          max: Hv,
          selectableMax: yv,
          cappedNote: Jv,
          step: 1,
          initValue: ov,
          onChange: vv => {
            !0 === lv("showFog") && vv < lv("fogChunkDistance") && Wv("fogChunkDistance", vv), Wv("chunkHorizAddDist", vv), yz.j.zC("updatedChunkLoadDist")
          },
          circleInfoText: av("settingsMenu:chunkLoadDistanceInfo")
        }), (0, Tv.jsx)(Fv.i, {
          name: av("settingsMenu:verticalChunkLoadDistance"),
          min: Nv[1],
          max: Mv,
          selectableMax: Bv,
          cappedNote: Ev ? void 0 : Jv,
          step: 1,
          initValue: Math.min(null !== (Sv = lv("chunkVertAddDist")) && void 0 !== Sv ? Sv : Nv[1], Bv),
          onChange: vv => {
            Wv("chunkVertAddDist", vv), yz.j.zC("updatedChunkLoadDist")
          },
          circleInfoText: av("settingsMenu:chunkLoadDistanceInfo"),
          className: "VerticalChunkLoadSlider"
        }), (0, Tv.jsx)(Fv.e, {
          label: av("settingsMenu:chunkFadeIn"),
          checked: Cv.chunkFadeIn,
          onClick: vv => {
            Yv.c.setClientEscMenuOptions({
              chunkFadeIn: vv
            })
          },
          circleInfoText: av("settingsMenu:chunkFadeInInfo")
        }), nv.devTools.supports("chunkBorders") && (0, Tv.jsx)(Fv.e, {
          label: av("settingsMenu:showChunkBorders"),
          checked: Cv.showChunkBorders,
          onClick: vv => {
            Yv.c.setClientEscMenuOptions({
              showChunkBorders: vv
            })
          },
          circleInfoText: av("settingsMenu:showChunkBordersInfo")
        }), (0, Tv.jsx)(Fv.e, {
          label: av(qv),
          checked: Cv.enableLighting,
          onClick: vv => {
            Yv.c.setClientEscMenuOptions({
              enableLighting: vv
            })
          },
          disabled: tv
        }), (0, Tv.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, Tv.jsx)(Fv.e, {
            label: av(Lv),
            checked: Cv.showFog,
            onClick: vv => {
              Iv({
                showFog: vv
              }), Yv.c.setClientEscMenuOptions({
                showFog: vv
              })
            },
            disabled: Av,
            className: ev()({
              SettingBoxWarning: bv
            })
          }), (0, Tv.jsx)(Fv.i, {
            name: av("settingsMenu:fogChunkDistance"),
            min: Nv[0],
            max: Qz.f.maxChunkHorizAddDistance,
            step: 1,
            initValue: null !== (pv = Cv.fogChunkDistance) && void 0 !== pv ? pv : Nv[0],
            onChange: vv => {
              Yv.c.setClientEscMenuOptions({
                fogChunkDistance: vv
              }), yz.j.zC("fogChunkDistanceChanged", vv)
            },
            circleInfoText: av("settingsMenu:fogChunkDistanceInfo"),
            disabled: Av || !1 === lv("showFog"),
            className: ev()({
              SettingBoxWarning: bv
            })
          }), bv && (0, Tv.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: av("settingsMenu:fogChunkDistanceInfo")
          })]
        }), !Bz.r && (0, Tv.jsx)(Fv.e, {
          label: av(Rv ? "settingsMenu:disableBlockTextureAtlasUnavailableWithShaderPack" : "settingsMenu:disableBlockTextureAtlas"),
          checked: !Rv && Cv.disableTexAtlas,
          onClick: vv => {
            Yv.c.setClientEscMenuOptions({
              disableTexAtlas: vv
            })
          },
          circleInfoText: av("settingsMenu:disableBlockTextureAtlasInfo"),
          disabled: Rv
        }), (0, Tv.jsx)(Fv.i, {
          name: av("settingsMenu:fieldOfView"),
          min: 50,
          max: 160,
          step: 1,
          initValue: Cv.cameraFOV,
          onChange: vv => {
            Yv.c.setClientEscMenuOptions({
              cameraFOV: vv
            })
          }
        }), (0, Tv.jsx)(Fv.e, {
          label: av("settingsMenu:disableViewBobbing"),
          checked: Cv.disableBobbing,
          onClick: vv => {
            Yv.c.setClientEscMenuOptions({
              disableBobbing: vv
            })
          },
          circleInfoText: av("settingsMenu:disableViewBobbingInfo")
        }), (0, Tv.jsx)(Fv.e, {
          label: av("settingsMenu:antiAliasing"),
          checked: Cv.antiAliasing,
          onClick: vv => {
            Iv({
              antiAliasing: vv
            }), (0, Xz.d)("antiAliasing"), Yv.c.setClientEscMenuOptions({
              antiAliasing: vv
            })
          },
          circleInfoText: av("settingsMenu:antiAliasingInfo")
        }), (0, Tv.jsx)(Fv.i, {
          name: av("settingsMenu:pixelScale"),
          min: 1,
          max: 8,
          step: 1,
          initValue: null !== (dv = Cv.pixelScale) && void 0 !== dv ? dv : 1,
          onChange: vv => {
            (vv !== Yv.c.get("clientEscMenuOptions").pixelScale || (0, vP.x)()) && (0, Xz.d)("pixelScale"), Yv.c.setClientEscMenuOptions({
              pixelScale: vv
            })
          },
          circleInfoText: av("settingsMenu:pixelScaleInfo"),
          format: vv => `${vv}x`
        }), (0, Tv.jsx)(Fv.e, {
          label: av("settingsMenu:pixelSmoothing"),
          checked: Cv.pixelSmoothing,
          onClick: vv => {
            Yv.c.setClientEscMenuOptions({
              pixelSmoothing: vv
            })
          },
          circleInfoText: av("settingsMenu:pixelSmoothingInfo")
        }), Bz.r && (0, Tv.jsx)(Fv.e, {
          label: av("settingsMenu:distantNametags"),
          checked: (0, uz.e)(),
          onClick: vv => {
            Yv.c.set({
              showDistantNametags: vv
            })
          },
          circleInfoText: av("settingsMenu:distantNametagsInfo")
        }), (0, Tv.jsx)(Fv.e, {
          label: av(Uv.translationKey),
          checked: Uv.checked,
          onClick: vv => {
            Iv({
              useWebGpu: vv
            }), Yv.c.setClientEscMenuOptions({
              useWebGpu: vv
            })
          },
          circleInfoText: av("settingsMenu:newWebGpuInfo"),
          disabled: Uv.disabled
        })]
      })
    }
    var hP = Pv(4174),
      SP = Pv(8545),
      eP = Pv(8931),
      gP = Pv(8557),
      pP = Pv(8940);
    const dP = {
        color: 16777215,
        name: "white"
      },
      NP = {
        color: 0,
        name: "black"
      },
      lP = [dP, {
        color: 5046092,
        name: "green"
      }, {
        color: 16776960,
        name: "yellow"
      }, {
        color: 65535,
        name: "cyan"
      }, {
        color: 16731391,
        name: "pink"
      }, {
        color: 16726843,
        name: "red"
      }, NP],
      TP = [NP, dP];

    function WP(vv) {
      return `${vv} px`
    }

    function wP(vv) {
      return `${vv}%`
    }

    function aP(vv) {
      let {
        label: zv,
        value: Pv,
        swatches: hv,
        onChange: Sv
      } = vv;
      const {
        t: pv
      } = (0, gv.x)(), dv = !hv.some((vv => vv.color === Pv));
      return (0, Tv.jsxs)("div", {
        className: "SettingBox CrosshairColorRow",
        children: [(0, Tv.jsx)("div", {
          className: "SliderText",
          children: zv
        }), (0, Tv.jsxs)("div", {
          className: "CrosshairSwatches",
          role: "radiogroup",
          "aria-label": zv,
          children: [hv.map((vv => {
            let {
              color: zv,
              name: hv
            } = vv;
            return (0, Tv.jsx)("button", {
              type: "button",
              role: "radio",
              "aria-checked": zv === Pv,
              "aria-label": pv(`crosshairSettings:color_${hv}`),
              "data-pad-focusable": !0,
              className: ev()("CrosshairSwatch", {
                Selected: zv === Pv
              }),
              style: {
                background: (0, pP.m)(zv)
              },
              onClick: () => {
                Sv(zv)
              }
            }, zv)
          })), (0, Tv.jsx)("label", {
            className: ev()("CrosshairSwatch CrosshairSwatchCustom", {
              Selected: dv
            }),
            style: dv ? {
              background: (0, pP.m)(Pv)
            } : void 0,
            title: pv("crosshairSettings:customColor"),
            "data-pad-focusable": !0,
            children: (0, Tv.jsx)("input", {
              type: "color",
              "aria-label": pv("crosshairSettings:customColor"),
              value: (0, pP.m)(Pv),
              onChange: vv => {
                const zv = (0, pP.t)(vv.target.value);
                null !== zv && Sv(zv)
              }
            })
          })]
        })]
      })
    }

    function sP(vv) {
      let {
        settings: zv,
        onChange: Pv
      } = vv;
      const {
        t: hv
      } = (0, gv.x)(), Sv = (vv, hv) => {
        Pv((0, pP.x)(zv, vv, hv))
      }, ev = function(vv, Pv) {
        let hv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : WP;
        const {
          min: ev,
          max: gv,
          step: pv
        } = pP.e[vv];
        return (0, Tv.jsx)(Fv.i, {
          name: Pv,
          min: ev,
          max: gv,
          step: pv,
          initValue: zv[vv],
          format: hv,
          onChange: zv => {
            Sv(vv, zv)
          }
        }, vv)
      }, pv = ["lines", "dot", "circle"].filter((vv => zv[vv])), dv = (vv, Pv, hv) => (0, Tv.jsx)(Fv.e, {
        label: Pv,
        checked: zv[vv],
        disabled: 1 === pv.length && pv[0] === vv,
        circleInfoText: hv,
        onClick: zv => {
          Sv(vv, zv)
        }
      }, vv), Nv = "shapes" === zv.style;
      return (0, Tv.jsxs)(Tv.Fragment, {
        children: [(0, Tv.jsx)(Fv.f, {
          label: hv("crosshairSettings:style"),
          options: [{
            value: "classic",
            label: hv("crosshairSettings:styleClassic")
          }, {
            value: "shapes",
            label: hv("crosshairSettings:styleShapes")
          }],
          value: zv.style,
          onChange: vv => {
            Sv("style", vv)
          }
        }), (0, Tv.jsx)(aP, {
          label: hv("crosshairSettings:color"),
          value: zv.color,
          swatches: lP,
          onChange: vv => {
            Sv("color", vv)
          }
        }), ev("opacity", hv("crosshairSettings:opacity"), wP), !Nv && ev("size", hv("crosshairSettings:size"), wP), Nv && (0, Tv.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [dv("lines", hv("crosshairSettings:lines")), zv.lines && ev("lineLength", hv("crosshairSettings:lineLength")), zv.lines && ev("lineThickness", hv("crosshairSettings:lineThickness")), zv.lines && ev("gap", hv("crosshairSettings:gap")), zv.lines && dv("tStyle", hv("crosshairSettings:tStyle"))]
        }), Nv && (0, Tv.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [dv("dot", hv("crosshairSettings:dot")), zv.dot && ev("dotSize", hv("crosshairSettings:dotSize"))]
        }), Nv && (0, Tv.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [dv("circle", hv("crosshairSettings:circle")), zv.circle && ev("circleRadius", hv("crosshairSettings:circleRadius")), zv.circle && ev("circleThickness", hv("crosshairSettings:circleThickness"))]
        }), (0, Tv.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [ev("outline", hv("crosshairSettings:outline"), (vv => vv > 0 ? WP(vv) : hv("crosshairSettings:off"))), zv.outline > 0 && (0, Tv.jsx)(aP, {
            label: hv("crosshairSettings:outlineColor"),
            value: zv.outlineColor,
            swatches: TP,
            onChange: vv => {
              Sv("outlineColor", vv)
            }
          })]
        }), dv("growOnClick", hv("crosshairSettings:growOnClick")), Nv && dv("forGuns", hv("crosshairSettings:forGuns"), hv("crosshairSettings:forGunsInfo"))]
      })
    }
    var CP = Pv(62),
      iP = Pv(1265),
      cP = Pv(8945),
      GP = Pv(8950),
      mP = Pv(8957),
      jP = Pv(8963);
    const fP = ["sky", "grass", "stone", "sand", "snow", "night"],
      FP = "4rem";

    function YP(vv) {
      return {
        backgroundImage: `url(${vv})`,
        backgroundSize: `${FP} ${FP}`,
        backgroundRepeat: "repeat",
        imageRendering: "pixelated"
      }
    }

    function nP(vv) {
      return {
        ...(() => {
          switch (vv) {
            case "sky":
              return {
                backgroundImage: "linear-gradient(#3d8fe0 0%, #8cc8f5 45%, #d6eefc 58%, #6fae4a 58.01%, #4f8a33 100%)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              };
            case "grass":
              return YP(cP);
            case "stone":
              return YP(GP);
            case "sand":
              return YP(mP);
            case "snow":
              return YP(jP);
            case "night":
              return {
                backgroundImage: "radial-gradient(circle at 50% 50%, #1e2a4a 0%, #070b16 100vmax)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              }
          }
        })(),
        backgroundPosition: "center"
      }
    }

    function OP(vv) {
      return Object.freeze({
        ...pP.f,
        style: "shapes",
        outline: 1,
        lines: !1,
        ...vv
      })
    }
    const DP = [{
        id: "default",
        settings: pP.f
      }, {
        id: "cross",
        settings: OP({
          color: 5046092,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3
        })
      }, {
        id: "crossDot",
        settings: OP({
          color: 65535,
          lines: !0,
          lineLength: 6,
          lineThickness: 2,
          gap: 4,
          dot: !0,
          dotSize: 2
        })
      }, {
        id: "dot",
        settings: OP({
          dot: !0,
          dotSize: 4
        })
      }, {
        id: "circle",
        settings: OP({
          circle: !0,
          circleRadius: 12,
          circleThickness: 1.5,
          dot: !0,
          dotSize: 2
        })
      }, {
        id: "tShape",
        settings: OP({
          color: 16731391,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3,
          tStyle: !0
        })
      }, {
        id: "tiny",
        settings: OP({
          color: 16776960,
          lines: !0,
          lineLength: 3,
          lineThickness: 1,
          gap: 2
        })
      }, {
        id: "bold",
        settings: OP({
          lines: !0,
          lineLength: 10,
          lineThickness: 3,
          gap: 0,
          outline: 1.5
        })
      }],
      KP = ["growOnClick", "forGuns"];
    var VP = Pv(8970);

    function UP(vv) {
      let {
        label: zv,
        selected: Pv,
        onClick: hv,
        className: Sv,
        style: gv,
        children: pv
      } = vv;
      return (0, Tv.jsx)("button", {
        type: "button",
        role: "radio",
        "aria-checked": Pv,
        title: zv,
        "aria-label": zv,
        "data-pad-focusable": !0,
        className: ev()("CrosshairBackdropSwatch", Sv, {
          Selected: Pv
        }),
        style: gv,
        onClick: hv,
        children: pv
      })
    }

    function RP(vv) {
      let {
        backdrop: zv,
        onChange: Pv,
        game: hv
      } = vv;
      const {
        t: Sv
      } = (0, gv.x)();
      return (0, Tv.jsxs)("div", {
        className: "CrosshairBackdrops",
        role: "radiogroup",
        "aria-label": Sv("crosshairSettings:background"),
        children: [hv && (0, Tv.jsx)(UP, {
          label: Sv("crosshairSettings:bg_game"),
          selected: hv.selected,
          onClick: hv.onSelect,
          className: "CrosshairGameSwatch",
          children: (0, Tv.jsx)(pv.b, {
            name: "cube"
          })
        }), fP.map((vv => (0, Tv.jsx)(UP, {
          label: Sv(`crosshairSettings:bg_${vv}`),
          selected: !(null !== hv && void 0 !== hv && hv.selected) && vv === zv,
          style: nP(vv),
          onClick: () => {
            Pv(vv)
          }
        }, vv)))]
      })
    }

    function xP(vv) {
      let {
        settings: zv,
        touch: Pv,
        backdrop: hv,
        onChange: Sv
      } = vv;
      const {
        t: pv
      } = (0, gv.x)(), dv = function(vv) {
        var zv;
        return null !== (zv = DP.find((zv => (0, pP.v)(zv.settings, vv, KP)))) && void 0 !== zv ? zv : null
      }(zv);
      return (0, Tv.jsx)("div", {
        className: "CrosshairPresets",
        role: "radiogroup",
        "aria-label": pv("crosshairSettings:presets"),
        children: DP.map((vv => {
          const gv = (null === dv || void 0 === dv ? void 0 : dv.id) === vv.id;
          return (0, Tv.jsxs)("button", {
            type: "button",
            role: "radio",
            "aria-checked": gv,
            "data-pad-focusable": !0,
            className: ev()("CrosshairPreset", {
              Selected: gv
            }),
            onClick: () => {
              Sv(function(vv, zv) {
                return {
                  ...zv.settings,
                  growOnClick: vv.growOnClick,
                  forGuns: vv.forGuns
                }
              }(zv, vv))
            },
            children: [(0, Tv.jsx)("div", {
              className: "CrosshairPresetStage",
              style: nP(hv),
              children: (0, Tv.jsx)(VP.b, {
                settings: vv.settings,
                touch: Pv,
                inPreview: !0
              })
            }), (0, Tv.jsx)("div", {
              className: "CrosshairPresetName",
              children: pv(`crosshairSettings:preset_${vv.id}`)
            })]
          }, vv.id)
        }))
      })
    }
    var tP = Pv(1638);

    function qP(vv, zv) {
      const [Pv, Sv] = (0, hv.useState)(!1), ev = () => {
        Sv(!1)
      }, [gv, pv] = (0, hv.useState)(!1), dv = (0, hv.useRef)({
        growOnClick: vv.growOnClick,
        forGuns: vv.forGuns
      });
      (0, hv.useEffect)((() => {
        const zv = dv.current;
        dv.current = {
          growOnClick: vv.growOnClick,
          forGuns: vv.forGuns
        }, (vv.growOnClick && !zv.growOnClick || vv.forGuns && !zv.forGuns) && pv(!0)
      }), [vv.growOnClick, vv.forGuns]), (0, hv.useEffect)((() => {
        if (!gv) return;
        const vv = setTimeout((() => {
          pv(!1)
        }), 600);
        return () => {
          clearTimeout(vv)
        }
      }), [gv]);
      const Nv = Pv || gv;
      return {
        view: {
          pressed: Nv,
          spread: Nv && vv.forGuns && !vv.growOnClick ? 6 : 0
        },
        handlers: {
          onPointerDown: vv => {
            !vv.target.closest(zv) && (0, tP.b)(vv.currentTarget, vv.pointerId) && Sv(!0)
          },
          onPointerUp: ev,
          onPointerCancel: ev,
          onLostPointerCapture: ev
        }
      }
    }

    function IP(vv) {
      let {
        settings: zv,
        touch: Pv,
        backdrop: hv,
        className: Sv,
        children: gv,
        label: pv
      } = vv;
      const dv = qP(zv, ".CrosshairStageControls");
      return (0, Tv.jsxs)("div", {
        className: ev()("CrosshairStage", Sv),
        style: nP(hv),
        ...dv.handlers,
        children: [(0, Tv.jsx)("div", {
          className: "CrosshairStageHold",
          role: "img",
          "aria-label": pv,
          children: (0, Tv.jsx)(VP.b, {
            settings: zv,
            touch: Pv,
            inPreview: !0,
            ...dv.view
          })
        }), gv]
      })
    }
    const QP = "crosshairFullScreen";

    function ZP(vv) {
      let {
        settings: zv,
        touch: Pv,
        backdrop: Sv,
        onBackdrop: dv,
        inGame: lv,
        onChange: Wv,
        onClose: wv
      } = vv;
      const {
        t: av
      } = (0, gv.x)(), sv = (0, hv.useRef)(null);
      (0, iP.q)("popup", sv, wv),
      function(vv) {
        const zv = (0, hv.useRef)(vv);
        zv.current = vv, (0, hv.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [QP]: !0
          }, "");
          let vv = !1;
          const Pv = () => {
            vv = !0, zv.current()
          };
          return window.addEventListener("popstate", Pv), () => {
            var zv;
            window.removeEventListener("popstate", Pv), !vv && null !== (zv = window.history.state) && void 0 !== zv && zv[QP] && window.history.back()
          }
        }), [])
      }(wv);
      const Cv = (0, hv.useRef)(wv);
      Cv.current = wv, (0, hv.useEffect)((() => {
        function vv(vv) {
          "Escape" === vv.key && (vv.stopPropagation(), Cv.current())
        }
        return window.addEventListener("keydown", vv, !0), () => {
          window.removeEventListener("keydown", vv, !0)
        }
      }), []);
      const iv = qP(zv, ".CrosshairFullScreenPanel"),
        [cv, Gv] = (0, hv.useState)(!0),
        mv = cv && lv;
      (0, hv.useEffect)((() => {
        if (mv) return Yv.c.set({
          crosshairGameView: !0
        }), () => {
          Yv.c.set({
            crosshairGameView: !1
          })
        }
      }), [mv]);
      const [jv, fv] = (0, hv.useState)(!0);
      return (0, CP.createPortal)((0, Tv.jsxs)("div", {
        ref: sv,
        className: "CrosshairFullScreen",
        style: mv ? void 0 : nP(Sv),
        ...iv.handlers,
        children: [(0, Tv.jsx)(VP.b, {
          settings: zv,
          touch: Pv,
          inEditor: !0,
          ...iv.view
        }), (0, Tv.jsxs)("div", {
          className: ev()("CrosshairFullScreenPanel", {
            Collapsed: !jv
          }),
          children: [(0, Tv.jsxs)("div", {
            className: "CrosshairFullScreenBar",
            children: [(0, Tv.jsx)(RP, {
              backdrop: Sv,
              onChange: vv => {
                Gv(!1), dv(vv)
              },
              game: lv ? {
                selected: mv,
                onSelect: () => {
                  Gv(!0)
                }
              } : void 0
            }), (0, Tv.jsx)(Nv.K, {
              className: "CrosshairPanelToggle",
              ariaLabel: av(jv ? "crosshairSettings:hideEditor" : "crosshairSettings:showEditor"),
              onClick: () => {
                fv(!jv)
              },
              children: (0, Tv.jsx)(pv.b, {
                name: jv ? "caret-up" : "pen"
              })
            }), (0, Tv.jsx)(Nv.d, {
              className: "CrosshairFullScreenDone",
              onClick: wv,
              padDefaultFocus: !0,
              children: av("crosshairSettings:done")
            })]
          }), jv && (0, Tv.jsxs)("div", {
            className: "CrosshairFullScreenFields",
            children: [(0, Tv.jsx)(xP, {
              settings: zv,
              touch: Pv,
              backdrop: Sv,
              onChange: Wv
            }), (0, Tv.jsx)(sP, {
              settings: zv,
              onChange: Wv
            })]
          })]
        })]
      }), document.body)
    }
    var AP = Pv(2511),
      LP = Pv(8983);

    function HP(vv) {
      let {
        settings: zv,
        onChange: Pv
      } = vv;
      const {
        t: Sv
      } = (0, gv.x)(), dv = (0, LP.k)(zv), [lv, Wv] = (0, AP.i)(), [wv, av] = (0, hv.useState)(!1), sv = (0, hv.useRef)(null), [Cv, iv] = (0, AP.i)(), [cv, Gv] = (0, hv.useState)(!1);
      return (0, Tv.jsxs)("div", {
        className: "SettingBox CrosshairShare",
        children: [(0, Tv.jsxs)("div", {
          className: "CrosshairShareRow",
          children: [(0, Tv.jsxs)(Nv.K, {
            className: ev()("CrosshairCopy", {
              ActiveSecondaryButton: lv
            }),
            onClick: () => {
              (0, AP.g)(dv, {
                useShareSheet: !1,
                onOutcome: vv => {
                  av("failed" === vv), "copied" === vv && Wv()
                }
              })
            },
            children: [(0, Tv.jsx)(pv.b, {
              name: lv ? "check" : "copy"
            }), " ", Sv(lv ? "general:copied" : "crosshairSettings:copy")]
          }), (0, Tv.jsx)(jv.c, {
            className: "CrosshairPaste",
            domRef: sv,
            ariaLabel: Sv("crosshairSettings:paste"),
            placeholderText: Sv("crosshairSettings:paste"),
            onValueChange: vv => {
              const zv = (0, LP.h)(vv);
              Gv(!zv && vv.trim().length >= LP.d), zv && (Pv(zv), sv.current.value = "", iv())
            }
          })]
        }), wv && (0, Tv.jsx)("input", {
          className: "CrosshairCode",
          readOnly: !0,
          value: dv,
          "aria-label": Sv("crosshairSettings:copy"),
          onFocus: vv => {
            vv.currentTarget.select()
          }
        }), (0, Tv.jsxs)("div", {
          "aria-live": "polite",
          children: [cv && (0, Tv.jsx)("div", {
            className: "CrosshairShareNote Error",
            children: Sv("crosshairSettings:pasteInvalid")
          }), Cv && !cv && (0, Tv.jsx)("div", {
            className: "CrosshairShareNote",
            children: Sv("crosshairSettings:applied")
          })]
        })]
      })
    }
    var MP = Pv(8987);
    let yP = "sky";

    function BP(vv) {
      let {
        showing: zv
      } = vv;
      const {
        t: Pv
      } = (0, gv.x)(), {
        isTouchScreen: Sv,
        gameState: ev,
        clientEscMenuOptions: dv
      } = (0, Yv.i)(["isTouchScreen", "gameState", "clientEscMenuOptions"]), lv = (0, MP.f)(), [Wv, wv] = (0, hv.useState)(yP), av = vv => {
        yP = vv, wv(vv)
      }, [sv, Cv] = (0, hv.useState)(!1);
      return (0, hv.useEffect)((() => {
        zv || Cv(!1)
      }), [zv]), (0, Tv.jsxs)("div", {
        className: "SettingsMenuRightInner CrosshairCategory",
        children: [(0, Tv.jsx)("div", {
          className: "CrosshairPreviewSticky",
          children: (0, Tv.jsx)(IP, {
            className: "CrosshairPreviewStage",
            settings: lv,
            touch: Sv,
            backdrop: Wv,
            label: Pv("crosshairSettings:preview"),
            children: (0, Tv.jsxs)("div", {
              className: "CrosshairPreviewBar CrosshairStageControls",
              children: [(0, Tv.jsx)(RP, {
                backdrop: Wv,
                onChange: av
              }), (0, Tv.jsxs)(Nv.K, {
                className: "CrosshairFullScreenButton",
                onClick: () => {
                  Cv(!0)
                },
                children: [(0, Tv.jsx)(pv.b, {
                  name: "expand"
                }), " ", Pv("crosshairSettings:fullScreen")]
              })]
            })
          })
        }), (0, Tv.jsx)("div", {
          className: "SettingBox",
          children: (0, Tv.jsx)(xP, {
            settings: lv,
            touch: Sv,
            backdrop: Wv,
            onChange: MP.d
          })
        }), (0, Tv.jsx)(HP, {
          settings: lv,
          onChange: MP.d
        }), Sv && (0, Tv.jsx)(gP.b, {
          note: (0, eP.f)(Sv, dv.touchActionButtons) ? Pv("crosshairSettings:touchNote") : void 0
        }), (0, Tv.jsx)(sP, {
          settings: lv,
          onChange: MP.d
        }), sv && (0, Tv.jsx)(ZP, {
          settings: lv,
          touch: Sv,
          backdrop: Wv,
          onBackdrop: av,
          inGame: "inGame" === ev,
          onChange: MP.d,
          onClose: () => {
            Cv(!1)
          }
        })]
      })
    }
    var JP = Pv(8549),
      EP = Pv(1380),
      oP = Pv(4727),
      bP = Pv(8991),
      rP = Pv(1923),
      kP = Pv(4058),
      XP = Pv(1927),
      uP = Pv(713);
    const vh = (0, hv.memo)((function() {
      const {
        clientEscMenuOptions: vv
      } = (0, Yv.i)(["clientEscMenuOptions"]), {
        recording: zv,
        clipping: Pv,
        hasClipBuffer: Sv
      } = (0, rP.h)("replayRecorder"), gv = (0, rP.g)("connectedGame", (vv => vv.replay)), pv = (0, kP.l)(), dv = !1 === (0, sv.i)("canRecordReplays");
      (0, hv.useEffect)((() => {
        cv.gameBridge.send("setRecorderPrefs", {
          clipping: vv.enableClipping,
          clipSeconds: vv.clipDurationSeconds
        })
      }), [vv.enableClipping, vv.clipDurationSeconds]);
      const lv = pv || gv,
        Wv = !lv && !dv,
        wv = zv || Wv,
        av = Wv,
        Cv = av && Pv && !zv;

      function iv() {
        wv && cv.gameBridge.send("toggleRecording", null)
      }
      return (0, Tv.jsxs)("div", {
        className: "SettingsMenuRightInner ReplayViewerCategory",
        children: [(0, Tv.jsxs)("div", {
          className: "SettingBox",
          children: [(0, Tv.jsx)("div", {
            className: "ReplayViewerCategoryRecordingRow",
            children: zv ? (0, Tv.jsxs)(Tv.Fragment, {
              children: [(0, Tv.jsxs)(Nv.A, {
                className: "ReplayViewerCategoryButton",
                onClick: iv,
                disabled: !wv,
                children: [(0, Tv.jsx)("span", {
                  children: "Stop Recording"
                }), (0, Tv.jsx)(XP.e, {
                  noaAction: "recordGame"
                })]
              }), (0, Tv.jsx)(bP.e, {
                className: "ReplayViewerCategoryRecordingIndicator"
              })]
            }) : (0, Tv.jsxs)(Nv.d, {
              className: "ReplayViewerCategoryButton",
              onClick: iv,
              disabled: !wv,
              children: [(0, Tv.jsx)("span", {
                children: "Start Recording"
              }), (0, Tv.jsx)(XP.e, {
                noaAction: "recordGame"
              })]
            })
          }), dv && (0, Tv.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Recording is turned off in this game."
          }), lv && !zv && (0, Tv.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Close Replay Mode to start recording."
          })]
        }), (0, Tv.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, Tv.jsx)(Fv.e, {
            label: "Enable clipping",
            checked: vv.enableClipping,
            disabled: !av,
            onClick: function(vv) {
              av && Yv.c.setClientEscMenuOptions({
                enableClipping: vv
              })
            },
            className: ev()({
              SettingBoxDisabled: !av
            })
          }), (0, Tv.jsx)(Fv.i, {
            name: "Clip duration (seconds)",
            min: uP.o,
            max: uP.m,
            step: uP.e,
            initValue: vv.clipDurationSeconds,
            onChange: function(vv) {
              Yv.c.setClientEscMenuOptions({
                clipDurationSeconds: vv
              })
            },
            circleInfoText: "Longer clip durations use more memory and may affect performance.",
            disabled: !av || !vv.enableClipping
          })]
        }), (0, Tv.jsxs)("div", {
          className: "SettingBox",
          children: [(0, Tv.jsxs)(Nv.d, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              Cv && cv.gameBridge.send("saveClip", null)
            },
            disabled: !Cv,
            children: [(0, Tv.jsx)("span", {
              children: "Record clip"
            }), (0, Tv.jsx)(XP.e, {
              noaAction: "recordClip"
            })]
          }), vv.enableClipping && !Sv && av && !zv && (0, Tv.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clip buffer is filling \u2014 play for a moment, then save."
          }), zv && (0, Tv.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clipping pauses while a full recording is active."
          })]
        }), (0, Tv.jsxs)("div", {
          className: "SettingBox",
          children: [(0, Tv.jsxs)(Nv.d, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              (0, kP.i)(!0), Yv.c.set({
                openEverythingMenuName: null
              })
            },
            disabled: pv,
            children: [(0, Tv.jsx)("span", {
              children: "Open Replay Mode"
            }), (0, Tv.jsx)(XP.e, {
              noaAction: "replayViewerOpen"
            })]
          }), pv && (0, Tv.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Replay Mode is already open."
          })]
        }), (0, Tv.jsxs)("div", {
          className: "SettingBox",
          children: [(0, Tv.jsx)("div", {
            className: "ReplayViewerCategoryTutorialTitle",
            children: "How to use Replay Mode"
          }), (0, Tv.jsx)("iframe", {
            className: "ReplayViewerCategoryTutorial",
            src: "https://www.youtube.com/embed/-FsT0rNSuYA?playsinline=1&rel=0",
            title: "How to use Replay Mode",
            allow: "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
            allowFullScreen: !0,
            loading: "lazy"
          })]
        })]
      })
    }));
    var zh = Pv(1855);
    const Ph = {
      account: {
        icon: "fa-solid fa-user",
        displayName: "homePage:account"
      },
      general: {
        icon: "fa-solid fa-gear",
        displayName: "settingsMenu:general"
      },
      audio: {
        icon: "fa-solid fa-volume",
        displayName: "settingsMenu:audio"
      },
      notifications: {
        icon: "fa-solid fa-bell",
        displayName: "notificationSettings:notifications"
      },
      graphics: {
        icon: "fa-solid fa-cube",
        displayName: "settingsMenu:graphics"
      },
      controls: {
        icon: () => (0, Tv.jsx)("svg", {
          className: "svg-inline--fa",
          viewBox: "0 0 640 512",
          "aria-hidden": "true",
          children: (0, Tv.jsx)("path", {
            fill: "currentColor",
            d: "M256 20H384A36 36 0 0 1 420 56V208A36 36 0 0 1 384 244H256A36 36 0 0 1 220 208V56A36 36 0 0 1 256 20ZM262 166L378 166L320 90ZM36 268H164A36 36 0 0 1 200 304V456A36 36 0 0 1 164 492H36A36 36 0 0 1 0 456V304A36 36 0 0 1 36 268ZM134 438L134 322L58 380ZM256 268H384A36 36 0 0 1 420 304V456A36 36 0 0 1 384 492H256A36 36 0 0 1 220 456V304A36 36 0 0 1 256 268ZM378 346L262 346L320 422ZM476 268H604A36 36 0 0 1 640 304V456A36 36 0 0 1 604 492H476A36 36 0 0 1 440 456V304A36 36 0 0 1 476 268ZM506 322L506 438L582 380Z"
          })
        }),
        displayName: "settingsMenu:controls"
      },
      crosshair: {
        icon: "fa-solid fa-crosshairs",
        displayName: "crosshairSettings:tab"
      },
      controller: {
        icon: "fa-solid fa-gamepad",
        displayName: "gamepadSettings:tab"
      },
      texturePack: {
        icon: "fa-solid fa-folder-image",
        displayName: "settingsMenu:texturePack"
      },
      Bw: {
        icon: "fa-solid fa-sparkle",
        displayName: "settingsMenu:shaderPack"
      },
      updateLog: {
        icon: "fa-solid fa-clock-rotate-left",
        displayName: "homePage:updateLog"
      },
      information: {
        icon: "fa-solid fa-circle-info",
        displayName: "homePage:info"
      },
      alternativeDomains: {
        icon: "fa-solid fa-globe",
        displayName: "settingsMenu:unblockedDomains"
      },
      replayViewer: {
        icon: "fa-solid fa-video",
        displayName: "Replay Mode"
      },
      developerTools: {
        icon: "fa-solid fa-terminal",
        displayName: "Developer Tools"
      }
    };

    function hh() {
      return Promise.all([Pv.e(75), Pv.e(131), Pv.e(125), Pv.e(122)]).then((() => Pv(40369))).then((vv => ({
        default: vv.ShaderPackCategory
      })), (vv => (console.error("Failed to load the shader pack settings", vv), {
        default: Sh
      })))
    }

    function Sh() {
      const {
        t: vv
      } = (0, gv.x)();
      return (0, Tv.jsx)("div", {
        className: "SettingsMenuRightInner",
        children: vv("shaderPack:tabLoadFailed")
      })
    }
    var eh = Pv(1374);
    const gh = (0, hv.lazy)((() => Pv.e(264).then((() => Pv(40356))).then((vv => ({
        default: vv.BloxdInformation
      }))))),
      ph = (0, hv.lazy)(hh);

    function dh(vv) {
      return vv ? "general" : "account"
    }
    const Nh = new Map,
      lh = (0, hv.memo)((function(vv) {
        let {
          show: zv,
          setBeforeResumeCallback: Pv
        } = vv;
        (0, Cv.d)();
        const {
          gameState: Sv,
          openSettingsCategory: ev
        } = (0, Yv.i)(["gameState", "openSettingsCategory"]), {
          userContext: dv
        } = (0, av.d)(), {
          t: lv
        } = (0, gv.x)(), jv = (0, wv.d)(), fv = (0, sv.i)("minChunkAddDist"), Fv = "inGame" === Sv, [nv, Kv] = (0, hv.useState)(dh(Fv)), [Vv, Uv] = (0, hv.useState)(null), [Rv, xv] = (0, hv.useState)([]), tv = (0, hv.useRef)(function() {
          const vv = new Date,
            zv = 6 * (vv.getMonth() + vv.getDate()) % Nz.t.length;
          return [...Nz.t, ...Nz.t].slice(zv, zv + 6)
        }()), qv = (0, hv.useRef)(null), Iv = (0, Dz.j)(EP.j, (0, EP.d)()), Qv = Object.keys(Ph).filter((vv => {
          switch (vv) {
            case "replayViewer":
              return Fv;
            case "developerTools":
              return dv.playerHasRank("developer") || !1;
            case "texturePack":
              return iv.featureFlags.settings.canChangeTexturePack;
            case "Bw":
              return iv.featureFlags.settings.canUseShaderPacks;
            case "notifications":
              return iv.featureFlags.useSocialFeatures;
            case "alternativeDomains":
              return "crazygames" !== Dv.o;
            case "controller":
              return iv.featureFlags.useControllerSupport && (Iv || "controller" === nv);
            default:
              return !0
          }
        }));
        (0, Dz.g)("toggleFullCoordinateOverlay", (() => {
          const vv = rz("showCoordinates") && rz("showChunkCoordinates") && rz("showFPS");
          kz("showCoordinates", !vv), kz("showChunkCoordinates", !vv), kz("showFPS", !vv), jv()
        })), (0, Dz.g)("updatedChunkLoadDist", (() => {
          jv()
        })), (0, hv.useEffect)((() => {
          if (Uv(null), null === Yv.c.get("openSettingsCategory")) {
            const vv = (0, eh.d)() ? Nh.get(Fv) : void 0;
            Kv(vv && Qv.includes(vv) ? vv : dh(Fv))
          }
        }), [zv]), (0, hv.useEffect)((() => {
          null !== ev && (Kv(ev), Nh.set(Fv, ev), Yv.c.set({
            openSettingsCategory: null
          }))
        }), [ev, Fv]), (0, hv.useLayoutEffect)((() => {
          qv.current && (qv.current.scrollTop = 0)
        }), [nv, zv]), (0, hv.useEffect)((() => {
          "updateLog" === nv && (0, mv.b)().then(xv)
        }), [nv]), (0, hv.useEffect)((() => {
          if ((0, Mz.N)(fv)) return;
          const [vv, zv] = (0, hP.d)(), [Pv, hv] = (0, Iz.f)(fv), Sv = (0, zh.e)(fv[0], vv, Pv), ev = (0, zh.e)(fv[1], zv, hv);
          cv.gameBridge.send("setChunkAddDistance", {
            horizontal: Sv,
            vertical: ev
          })
        }), [fv]);
        const Zv = (0, hv.useCallback)((async () => {
          Vv && (await Vv(), Uv(null))
        }), [Vv]);

        function Av() {
          Yv.c.set({
            openEverythingMenuName: null
          })
        }
        return (0, hv.useEffect)((() => {
          Pv((() => Zv))
        }), [Zv, Pv]), (0, Tv.jsxs)("div", {
          className: "SettingsMenu Menu",
          style: zv ? {} : {
            display: "none"
          },
          children: [(0, Tv.jsx)("div", {
            className: "MenuSideBar",
            children: (0, Tv.jsx)("div", {
              className: "MenuSideBarBody",
              children: (0, Tv.jsx)(Wv, {
                items: Qv.map((vv => {
                  const zv = Ph[vv].icon;
                  return {
                    id: vv,
                    faIcon: "string" === typeof zv ? zv : void 0,
                    iconElement: "string" === typeof zv ? void 0 : (0, Tv.jsx)(zv, {}),
                    title: lv(Ph[vv].displayName),
                    redDot: !1
                  }
                })),
                selectedItemId: nv,
                onClick: vv => {
                  !async function(vv) {
                    await Zv(), Kv(vv), Nh.set(Fv, vv)
                  }(vv)
                }
              })
            })
          }), (0, Tv.jsxs)("div", {
            ref: qv,
            className: "MenuBody SettingsMenuRight",
            children: ["account" === nv && (0, Tv.jsx)(cz, {
              showing: zv,
              inGame: Fv
            }), "general" === nv && (0, Tv.jsx)(Yz, {
              inGame: Fv
            }), "audio" === nv && (0, Tv.jsx)(nz, {}), "notifications" === nv && (0, Tv.jsx)(qz, {}), "graphics" === nv && (0, Tv.jsx)(PP, {
              minChunkAddDist: null !== fv && void 0 !== fv ? fv : [2, 2],
              getValue: rz,
              onChange: kz,
              setApplySettingsCallback: Uv
            }), "controls" === nv && (0, Tv.jsx)(SP.f, {}), "crosshair" === nv && (0, Tv.jsx)(BP, {
              showing: zv
            }), "controller" === nv && iv.featureFlags.useControllerSupport && (0, Tv.jsx)(JP.d, {}), iv.featureFlags.settings.canChangeTexturePack && "texturePack" === nv && (0, Tv.jsx)(oP.d, {
              setApplySettingsCallback: Uv
            }), iv.featureFlags.settings.canUseShaderPacks && "Bw" === nv && (0, Tv.jsx)(hv.Suspense, {
              fallback: null,
              children: (0, Tv.jsx)(ph, {
                setApplySettingsCallback: Uv
              })
            }), "updateLog" === nv && (0, Tv.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, Tv.jsx)("div", {
                className: "UpdateLogsContainer",
                children: Rv.map(((vv, zv) => (0, Tv.jsx)(Gv.c, {
                  updateLog: vv,
                  index: zv,
                  close: Av
                }, zv)))
              })
            }), "information" === nv && (0, Tv.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, Tv.jsx)(hv.Suspense, {
                fallback: null,
                children: (0, Tv.jsx)(gh, {})
              })
            }), "alternativeDomains" === nv && (0, Tv.jsxs)("div", {
              className: "SettingsMenuRightInner",
              children: [(0, Tv.jsx)("div", {
                className: "AlternativeDomainsTitle",
                children: lv("settingsMenu:unblockedDomainsDescription")
              }), (0, Tv.jsx)("div", {
                className: "AlternativeDomainsList",
                children: tv.current.map((vv => (0, Tv.jsxs)(Nv.d, {
                  onClick: () => {
                    window.open(`https://${vv}`)
                  },
                  children: [(0, Tv.jsx)(pv.b, {
                    name: "arrow-up-right-from-square"
                  }), " ", vv]
                }, vv)))
              })]
            }), "replayViewer" === nv && (0, Tv.jsx)(vh, {}), "developerTools" === nv && (0, Tv.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, Tv.jsx)(Ov, {
                setApplySettingsCallback: Uv
              })
            }), null !== Vv && (0, Tv.jsx)("div", {
              className: "SettingsMenuRightFooter",
              children: (0, Tv.jsx)(Nv.d, {
                className: "SettingsMenuRightFooterButton",
                onClick: Zv,
                children: lv("general:apply")
              })
            })]
          })]
        })
      }));
    var Th = Pv(2450);
    const Wh = ["characters", "emote", "skin", "hat", "head", "eyebrows", "eyes", "back", "body", "legs", "shoes", "profileEffect", "cape", "nameColour"],
      wh = (0, hv.lazy)((() => Promise.resolve().then((() => Pv(4420))).then((vv => {
        vv.needGameClientAfterPaint();
        const zv = vv.matchmakingLibrariesPromise.then((vv => (0, Th.b)(vv.loadCharacterCustomisationUI(), (vv => vv.CharacterCustomisationUI))));
        return Promise.all([vv.ensureGameSetup(), zv]).then((vv => {
          let [, zv] = vv;
          return zv
        }))
      }))));

    function ah(vv) {
      let {
        show: zv
      } = vv;
      const {
        userContext: Pv
      } = (0, av.d)(), [Sv, ev] = (0, hv.useState)("characters");
      if (!zv) return null;
      const gv = Wh.filter((vv => "cape" !== vv && "nameColour" !== vv || Pv.getPlayerRanks().includes("super") || (0, Lv.purchasesAllowed)())).map((vv => ({
        id: vv,
        faIcon: Nz.B[vv],
        title: Nz.C[vv],
        redDot: !1
      })));
      return (0, Tv.jsxs)("div", {
        className: "Menu CharCustomisation",
        children: [(0, Tv.jsx)("div", {
          className: "MenuSideBar",
          children: (0, Tv.jsx)(Wv, {
            items: gv,
            selectedItemId: Sv,
            onClick: vv => {
              ev(vv)
            }
          })
        }), (0, Tv.jsx)("div", {
          className: "MenuBody",
          children: (0, Tv.jsx)(hv.Suspense, {
            fallback: (0, Tv.jsx)("div", {
              className: "CharacterCustomisationLoading",
              children: (0, Tv.jsx)(fv.c, {})
            }),
            children: (0, Tv.jsx)(wh, {
              selectedTab: Sv
            })
          })
        })]
      })
    }
    var sh = Pv(1453),
      Ch = Pv(1457),
      ih = Pv(8997),
      ch = Pv(4285),
      Gh = Pv(3164),
      mh = Pv(3209),
      jh = Pv(9027),
      fh = Pv(8470),
      Fh = Pv(9003),
      Yh = Pv(9013),
      nh = Pv(1871),
      Oh = Pv(1858),
      Dh = Pv(4653),
      Kh = Pv(1243),
      Vh = Pv(1209),
      Uh = Pv(1630),
      Rh = Pv(8531),
      xh = Pv(2331),
      th = Pv(2337);

    function qh(vv) {
      return vv ? Object.keys(vv).sort(((zv, Pv) => {
        var hv, Sv, ev, gv;
        const pv = (null !== (hv = null === (Sv = vv[Pv]) || void 0 === Sv ? void 0 : Sv.sortPriority) && void 0 !== hv ? hv : 0) - (null !== (ev = null === (gv = vv[zv]) || void 0 === gv ? void 0 : gv.sortPriority) && void 0 !== ev ? ev : 0);
        return 0 !== pv ? pv : zv.localeCompare(Pv)
      })) : []
    }
    const Ih = [{
      threshold: 1e12,
      suffix: "T"
    }, {
      threshold: 1e9,
      suffix: "B"
    }, {
      threshold: 1e6,
      suffix: "M"
    }, {
      threshold: 1e3,
      suffix: "K"
    }];

    function Qh(vv) {
      for (const {
          threshold: zv,
          suffix: Pv
        }
        of Ih)
        if (vv >= zv) {
          const hv = vv / zv;
          return hv >= 100 ? `${Math.floor(hv)}${Pv}` : hv >= 10 ? `${hv.toFixed(1).replace(/\.0$/,"")}${Pv}` : `${hv.toFixed(2).replace(/\.?0+$/,"")}${Pv}`
        } return String(vv)
    }
    var Zh = Pv(4765);
    const Ah = {
        normal: "0.8em",
        big: "1em"
      },
      Lh = (0, hv.memo)((function(vv) {
        let {
          item: zv,
          amount: Pv = 0,
          size: hv = "normal",
          tier: Sv = null
        } = vv;
        return (0, Tv.jsx)("div", {
          className: ev()("SmpSlot", `SmpSlot-${hv}`),
          children: zv && (0, Tv.jsx)(nh.b, {
            itemName: zv,
            amount: Pv > 1 ? Pv : 0,
            amountFontSize: Ah[hv],
            enchantmentTier: Sv
          })
        })
      }));

    function Hh(vv) {
      let {
        amount: zv,
        exact: Pv = !1,
        className: hv
      } = vv;
      return (0, Tv.jsxs)("span", {
        className: ev()("SmpGold", hv),
        children: [(0, Tv.jsx)("span", {
          className: "SmpCoin",
          children: (0, Tv.jsx)(nh.b, {
            itemName: "Gold Coin",
            amount: 0
          })
        }), Pv ? zv.toLocaleString("en-US") : Qh(zv)]
      })
    }

    function Mh(vv) {
      let {
        count: zv = 5,
        grid: Pv = !1
      } = vv;
      return (0, Tv.jsx)("div", {
        className: Pv ? "SmpCardGrid" : "SmpList",
        "aria-hidden": "true",
        children: Array.from({
          length: zv
        }, ((vv, zv) => (0, Tv.jsxs)("div", {
          className: ev()(Pv ? "SmpListingCard" : "SmpRow", "SmpSkeleton"),
          children: [(0, Tv.jsx)("div", {
            className: ev()("SmpSlot", Pv ? "SmpSlot-big" : "SmpSlot-normal")
          }), (0, Tv.jsxs)("div", {
            className: "SmpRowText",
            children: [(0, Tv.jsx)("b", {}), (0, Tv.jsx)("small", {})]
          }), (0, Tv.jsx)("div", {
            className: "SmpSkeletonButton"
          })]
        }, zv)))
      })
    }

    function yh(vv) {
      let {
        title: zv,
        children: Pv
      } = vv;
      return (0, Tv.jsxs)("div", {
        className: "SmpEmpty",
        children: [(0, Tv.jsx)("b", {
          children: zv
        }), Pv && (0, Tv.jsx)("small", {
          children: Pv
        })]
      })
    }

    function Bh(vv) {
      let {
        entry: zv
      } = vv;
      return (0, Tv.jsx)(yh, {
        title: (0, Tv.jsx)(Oh.c, {
          text: zv.item.customTitle
        }),
        children: (0, Tv.jsx)(Oh.c, {
          text: zv.item.description
        })
      })
    }

    function Jh(vv) {
      return (0, Tv.jsx)(Zh.c, {
        ...vv,
        className: ev()("SmpChoice", vv.className),
        reselectable: !0
      })
    }

    function Eh() {
      return (0, Tv.jsx)("span", {
        className: "SmpLoader",
        children: (0, Tv.jsx)(fv.c, {})
      })
    }

    function oh(vv) {
      let {
        value: zv,
        onChange: Pv,
        min: Sv = 1,
        max: ev,
        step: gv = 1,
        label: pv
      } = vv;
      const dv = (0, hv.useRef)(null),
        Nv = (0, hv.useRef)(zv);
      Nv.current = zv;
      const [lv, Wv] = (0, hv.useState)(null), wv = vv => Math.max(Sv, Math.min(ev, Math.floor(vv))), av = vv => {
        const zv = Nv.current,
          hv = "function" === typeof gv ? gv(zv, vv) : gv,
          Sv = wv(zv + hv * vv);
        Nv.current = Sv, Pv(Sv)
      };
      (0, hv.useEffect)((() => {
        if (null === lv) return;
        let vv;
        const zv = () => {
            Wv(null)
          },
          Pv = setTimeout((() => {
            vv = setInterval((() => {
              av(lv);
              const vv = Nv.current;
              (lv > 0 ? vv >= ev : vv <= Sv) && zv()
            }), 70)
          }), 380);
        return window.addEventListener("pointerup", zv), window.addEventListener("pointercancel", zv), window.addEventListener("blur", zv), () => {
          clearTimeout(Pv), clearInterval(vv), window.removeEventListener("pointerup", zv), window.removeEventListener("pointercancel", zv), window.removeEventListener("blur", zv)
        }
      }), [lv]), (0, hv.useEffect)((() => {
        const vv = dv.current;
        vv && document.activeElement !== vv && vv.value !== String(zv) && (vv.value = String(zv))
      }), [zv]), (0, hv.useEffect)((() => {
        const vv = dv.current;
        if (!vv) return;
        const zv = () => {
          vv.value = String(Nv.current)
        };
        return vv.addEventListener("blur", zv), () => {
          vv.removeEventListener("blur", zv)
        }
      }), []);
      const sv = vv => (0, Tv.jsx)("button", {
        type: "button",
        className: "SmpStepButton",
        "aria-label": `${vv>0?"More":"Less"} ${pv}`,
        disabled: vv > 0 ? zv >= ev : zv <= Sv,
        onPointerDown: zv => {
          0 === zv.button && (av(vv), Wv(vv))
        },
        onKeyDown: zv => {
          "Enter" !== zv.key && " " !== zv.key || av(vv)
        },
        onContextMenu: vv => {
          vv.preventDefault()
        },
        children: vv > 0 ? "+" : "\u2212"
      });
      return (0, Tv.jsxs)("div", {
        className: "SmpStepper",
        children: [sv(-1), (0, Tv.jsx)(jv.c, {
          className: "SmpStepperInput",
          domRef: dv,
          defaultValue: String(zv),
          ariaLabel: pv,
          type: "text",
          blurOnEnter: !0,
          onValueChange: vv => {
            const zv = vv.replace(/[^\d]/g, "");
            dv.current && zv !== vv && (dv.current.value = zv), "" !== zv && Pv(wv(Number(zv)))
          }
        }), sv(1)]
      })
    }

    function bh(vv) {
      return Math.max(1, 10 ** Math.max(0, Math.floor(Math.log10(Math.max(1, vv))) - 1))
    }
    var rh = Pv(9019),
      kh = Pv(1226);
    const Xh = ["building", "colours", "nature", "decoration", "utility", "tools", "combat", "food", "mobs", "materials", "worldTools"];
    kh.y, Zv.yc.length;
    new Map;
    var uh = Pv(3037);

    function vS(vv, zv) {
      var Pv;
      return zv && (null === (Pv = vv[zv]) || void 0 === Pv ? void 0 : Pv.smp) || null
    }

    function zS(vv, zv) {
      const Pv = [];
      for (const Sv of qh(vv)) {
        var hv;
        const ev = vv[Sv];
        (null === (hv = ev.smp) || void 0 === hv ? void 0 : hv.kind) === zv && Pv.push({
          key: Sv,
          item: ev,
          meta: ev.smp
        })
      }
      return Pv
    }

    function PS(vv, zv) {
      var Pv;
      return null !== (Pv = zS(vv, zv)[0]) && void 0 !== Pv ? Pv : null
    }
    const hS = "50% 0% 50% 0%",
      SS = [{
        divisor: 864e5,
        suffix: "d"
      }, {
        divisor: 36e5,
        suffix: "h"
      }, {
        divisor: 6e4,
        suffix: "m"
      }, {
        divisor: 1e3,
        suffix: "s"
      }];

    function eS(vv) {
      const zv = vv - (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now());
      for (const {
          divisor: Pv,
          suffix: hv
        }
        of SS)
        if (zv >= Pv) return `${Math.floor(zv/Pv)}${hv}`;
      return "<1s"
    }

    function gS(vv) {
      const zv = vv.map(fh.f),
        Pv = [];
      return zv.forEach(((vv, hv) => {
        const Sv = function(vv) {
            const zv = vv.match(/\d+/);
            return zv ? Number(zv[0]) : 0
          }(vv),
          ev = hv === zv.length - 1;
        (ev || 1 === Sv || 10 === Sv || 100 === Sv) && Pv.push({
          label: vv,
          quantity: Sv,
          isAll: ev
        })
      })), Pv
    }
    let pS = null;

    function dS(vv, zv) {
      const Pv = zv.trim().toLowerCase();
      if (!Pv) return [];
      const hv = vv => {
          if (vv === Pv) return 0;
          if (vv.startsWith(Pv)) return 1;
          const zv = vv.indexOf(Pv);
          return -1 === zv ? -1 : 2 + zv
        },
        Sv = [];
      for (const pv of vv) {
        const vv = [hv(pv.lowerLabel), hv(pv.lowerName)].filter((vv => -1 !== vv));
        vv.length && Sv.push({
          item: pv,
          rank: Math.min(...vv)
        })
      }
      if (Sv.length > 0) return Sv.sort(((vv, zv) => vv.rank - zv.rank)).map((vv => vv.item));
      const ev = [...Pv],
        gv = vv => {
          let zv = 0;
          for (const Pv of ev) {
            if (zv = vv.indexOf(Pv, zv), -1 === zv) return !1;
            zv++
          }
          return !0
        };
      return vv.filter((vv => gv(vv.lowerLabel) || gv(vv.lowerName)))
    }

    function NS(vv, zv) {
      var Pv;
      return null !== (Pv = null === vv || void 0 === vv ? void 0 : vv[zv]) && void 0 !== Pv ? Pv : zv
    }

    function lS(vv, zv) {
      const Pv = vv.userInput;
      return void 0 !== zv && "dropdown" === (null === Pv || void 0 === Pv ? void 0 : Pv.type) && Pv.dropdownOptions.map(fh.f).includes(zv) ? zv : function(vv) {
        const zv = vv.userInput;
        if ("dropdown" !== (null === zv || void 0 === zv ? void 0 : zv.type) || 0 === zv.dropdownOptions.length) return null;
        const Pv = zv.dropdownOptions.map(fh.f);
        return zv.initialValue && Pv.includes(zv.initialValue) ? zv.initialValue : Pv[Pv.length - 1]
      }(vv)
    }

    function TS(vv) {
      return void 0 === vv ? "" : JSON.stringify(vv)
    }
    const WS = (0, hv.createContext)(null);

    function wS() {
      return (0, hv.useContext)(WS)
    }
    var aS = Pv(2540);
    const sS = (0, hv.memo)((function(vv) {
        let {
          name: zv,
          label: Pv,
          onPick: hv
        } = vv;
        return (0, Tv.jsxs)("button", {
          type: "button",
          className: "SmpCatalogueTile",
          title: Pv,
          onClick: () => {
            hv(zv)
          },
          children: [(0, Tv.jsx)(Lh, {
            item: zv,
            size: "big"
          }), (0, Tv.jsx)("span", {
            children: Pv
          })]
        })
      })),
      CS = (0, hv.memo)((function(vv) {
        let {
          items: zv,
          query: Pv,
          onPick: Sv
        } = vv;
        const {
          t: ev
        } = (0, gv.x)(), [pv, dv] = (0, hv.useState)(new Set), Nv = (0, hv.useMemo)((() => function(vv) {
          const zv = new Map;
          for (const Pv of vv) {
            let vv = zv.get(Pv.category);
            vv || (vv = [], zv.set(Pv.category, vv)), vv.push(Pv)
          }
          return [...Xh, "other"].filter((vv => zv.has(vv))).map((vv => ({
            category: vv,
            items: zv.get(vv)
          })))
        }(zv)), [zv]), lv = (0, hv.useMemo)((() => dS(zv, Pv).slice(0, 60)), [zv, Pv]);
        return Pv.trim() ? 0 === lv.length ? (0, Tv.jsx)(yh, {
          title: ev("smpShop:noItemsFound", {
            query: Pv.trim()
          }),
          children: ev("smpShop:tryShorterName")
        }) : (0, Tv.jsx)(aS.b, {
          lazyLoadedClassName: "SmpCatalogueGrid",
          observerRoot: "SmpBody",
          rootMargin: hS,
          observerUpdateDeps: [Pv],
          children: lv.map((vv => (0, Tv.jsx)(sS, {
            name: vv.name,
            label: vv.label,
            onPick: Sv
          }, vv.name)))
        }) : (0, Tv.jsx)(Tv.Fragment, {
          children: Nv.map((vv => {
            let {
              category: zv,
              items: Pv
            } = vv;
            const hv = pv.has(zv) || Pv.length <= 48,
              gv = hv ? Pv : Pv.slice(0, 48);
            return (0, Tv.jsxs)("section", {
              className: "SmpCatalogueSection",
              children: [(0, Tv.jsxs)("h4", {
                children: [ev("other" === zv ? "smpShop:otherItems" : `creativeInventory:${zv}`), !hv && (0, Tv.jsx)("button", {
                  type: "button",
                  className: "SmpLink",
                  onClick: () => {
                    dv(new Set([...pv, zv]))
                  },
                  children: ev("smpShop:showAll", {
                    count: Pv.length
                  })
                })]
              }), (0, Tv.jsx)(aS.b, {
                lazyLoadedClassName: "SmpCatalogueGrid",
                observerRoot: "SmpBody",
                rootMargin: hS,
                observerUpdateDeps: [hv],
                children: gv.map((vv => (0, Tv.jsx)(sS, {
                  name: vv.name,
                  label: vv.label,
                  onPick: Sv
                }, vv.name)))
              })]
            }, zv)
          }))
        })
      }));

    function iS(vv, zv) {
      const {
        searched: Pv,
        shown: Sv,
        searchFor: ev,
        loading: gv
      } = function(vv, zv) {
        var Pv;
        const Sv = wS(),
          [ev, gv] = (0, hv.useState)(void 0),
          pv = (0, hv.useRef)(void 0),
          dv = (0, hv.useRef)(0),
          Nv = (0, hv.useRef)(void 0),
          lv = null !== (Pv = null === vv || void 0 === vv ? void 0 : vv.meta.item) && void 0 !== Pv ? Pv : null,
          Tv = !!vv && Sv.isPending(vv.key);
        (0, hv.useEffect)((() => {
          if (!vv || Tv || !zv || void 0 === ev || ev === lv) return;
          const Pv = ev === pv.current && Sv.gaveUpAt(vv.key) > dv.current && Nv.current !== ev;
          (ev !== pv.current || Pv) && Sv.act(vv.key, null !== ev && void 0 !== ev ? ev : "*", Pv) && (Pv && (Nv.current = ev), pv.current = ev, dv.current = Date.now())
        }), [vv, Tv, zv, ev, lv, Sv]);
        const Wv = (0, hv.useCallback)((vv => {
            pv.current = void 0, Nv.current = void 0, gv(vv)
          }), []),
          wv = void 0 !== ev && ev !== lv && (Tv || pv.current !== ev);
        return {
          searched: lv,
          shown: wv ? ev : lv,
          searchFor: Wv,
          loading: wv || Tv || null !== lv && !zv
        }
      }(vv, zv), pv = (0, hv.useMemo)((() => function() {
        var vv;
        let zv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          Pv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          hv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const Sv = `${(0,uh.f)()}\x1f${zv.join("\x1e")}\x1f${Pv.join("\x1e")}\x1f${JSON.stringify(hv)}`;
        if ((null === (vv = pS) || void 0 === vv ? void 0 : vv.key) === Sv) return pS.items;
        const ev = new Set(Pv),
          gv = new Set,
          pv = [],
          dv = (vv, zv) => {
            var Pv;
            if (!vv || gv.has(vv) || ev.has(vv)) return;
            gv.add(vv);
            const Sv = null !== (Pv = hv[vv]) && void 0 !== Pv ? Pv : vv;
            pv.push({
              name: vv,
              label: Sv,
              lowerLabel: Sv.toLowerCase(),
              lowerName: vv.toLowerCase(),
              category: zv
            })
          };
        for (const lv of (0, rh.creativeItemIds)()) {
          var Nv;
          (0, rh.itemIsDisabled)(lv, !0, !0, !1) || (0, rh.showOnlyInCreativeSearch)(lv) || dv((0, uh.e)(lv), null !== (Nv = (0, rh.creativeCategoryOf)(lv)) && void 0 !== Nv ? Nv : "other")
        }
        for (const lv of zv) dv(lv, "other");
        return pS = {
          key: Sv,
          items: pv
        }, pv
      }(null === vv || void 0 === vv ? void 0 : vv.meta.extra, null === vv || void 0 === vv ? void 0 : vv.meta.excluded, null === vv || void 0 === vv ? void 0 : vv.meta.names)), [null === vv || void 0 === vv ? void 0 : vv.meta.extra, null === vv || void 0 === vv ? void 0 : vv.meta.excluded, null === vv || void 0 === vv ? void 0 : vv.meta.names]), [dv, Nv] = (0, hv.useState)(""), [lv, Tv] = (0, hv.useState)(0), [Wv, wv] = (0, hv.useState)("recent"), av = (0, hv.useCallback)((vv => {
        Nv(""), Tv((vv => vv + 1)), ev(vv)
      }), [ev]), sv = "browse" === Wv || "" !== dv.trim();
      return {
        searched: Pv,
        shown: Sv,
        searchFor: ev,
        loading: gv,
        catalogue: pv,
        names: null === vv || void 0 === vv ? void 0 : vv.meta.names,
        query: dv,
        setQuery: Nv,
        searchBoxKey: lv,
        pickItem: av,
        setView: wv,
        browsing: sv
      }
    }

    function cS(vv) {
      let {
        browser: zv,
        children: Pv
      } = vv;
      const {
        t: hv
      } = (0, gv.x)(), Sv = wS();
      return (0, Tv.jsxs)("div", {
        className: "SmpTopBar",
        children: [(0, Tv.jsx)("div", {
          className: "SmpSearch",
          children: (0, Tv.jsx)(jv.c, {
            className: "SmpSearchInput",
            placeholderText: hv("smpShop:searchPlaceholder"),
            defaultValue: zv.query,
            onValueChange: vv => {
              zv.setQuery(vv), zv.searched && vv.trim() && zv.searchFor(null)
            },
            blurOnEnter: !0,
            onEnter: () => {
              const vv = dS(zv.catalogue, zv.query)[0];
              vv ? zv.pickItem(vv.name) : zv.query.trim() && Sv.notify(hv("smpShop:noItemsFound", {
                query: zv.query.trim()
              }))
            }
          }, zv.searchBoxKey)
        }), Pv]
      })
    }

    function GS(vv) {
      let {
        browser: zv,
        recentLabel: Pv,
        children: hv
      } = vv;
      const {
        t: Sv
      } = (0, gv.x)();
      return (0, Tv.jsxs)("div", {
        className: "SmpViewBar",
        children: [(0, Tv.jsx)(Jh, {
          options: [{
            value: "recent",
            label: Pv
          }, {
            value: "browse",
            label: Sv("smpShop:browseItems")
          }],
          value: zv.browsing ? "browse" : "recent",
          onChange: zv.setView,
          ariaLabel: Sv("smpShop:show")
        }), !zv.browsing && hv]
      })
    }

    function mS(vv) {
      let {
        item: zv,
        names: Pv,
        summary: hv,
        onBack: Sv,
        children: ev
      } = vv;
      const {
        t: pv
      } = (0, gv.x)();
      return (0, Tv.jsxs)("div", {
        className: "SmpItemHeader",
        children: [(0, Tv.jsx)(Nv.b, {
          className: "SmpBackButton",
          onClick: Sv,
          children: pv("general:back")
        }), (0, Tv.jsx)(Lh, {
          item: zv,
          size: "big"
        }), (0, Tv.jsxs)("div", {
          className: "SmpItemHeaderText",
          children: [(0, Tv.jsx)("b", {
            children: NS(Pv, zv)
          }), hv && (0, Tv.jsx)("small", {
            children: hv
          })]
        }), ev]
      })
    }

    function jS(vv) {
      let {
        browser: zv,
        className: Pv,
        action: hv,
        above: Sv,
        list: gv,
        summary: pv,
        recentLabel: dv,
        listControls: Nv,
        onBack: lv
      } = vv;
      return (0, Tv.jsxs)("div", {
        className: ev()("SmpScreen", Pv),
        children: [(0, Tv.jsx)(cS, {
          browser: zv,
          children: hv
        }), zv.shown && (0, Tv.jsx)(mS, {
          item: zv.shown,
          names: zv.names,
          summary: !zv.loading && pv,
          onBack: () => {
            null === lv || void 0 === lv || lv(), zv.searchFor(null)
          },
          children: Nv
        }), Sv, zv.shown ? gv : (0, Tv.jsxs)(Tv.Fragment, {
          children: [(0, Tv.jsx)(GS, {
            browser: zv,
            recentLabel: dv,
            children: Nv
          }), zv.browsing ? (0, Tv.jsx)(CS, {
            items: zv.catalogue,
            query: zv.query,
            onPick: zv.pickItem
          }) : gv]
        })]
      })
    }

    function fS(vv, zv) {
      const Pv = vv.map((vv => {
        let {
          meta: zv
        } = vv;
        return zv.pricePerItem
      }));
      return "min" === zv ? Math.min(...Pv) : Math.max(...Pv)
    }
    var FS = Pv(6287);
    const YS = (0, hv.memo)((function(vv) {
      var zv;
      const {
        t: Pv
      } = (0, gv.x)(), hv = null === vv.seller, Sv = vv.quantity * vv.pricePerItem;
      return (0, Tv.jsxs)("div", {
        className: vv.grid ? "SmpListingCard" : "SmpRow SmpListingRow",
        children: [(0, Tv.jsx)(Lh, {
          item: vv.item,
          amount: vv.quantity,
          size: vv.grid ? "big" : "normal",
          tier: vv.tier
        }), (0, Tv.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, Tv.jsx)("b", {
            children: (0, Tv.jsx)(Oh.c, {
              text: null !== (zv = vv.title) && void 0 !== zv ? zv : `${vv.quantity}x ${vv.item}`
            })
          }), (0, Tv.jsxs)("small", {
            className: "SmpListingFacts",
            children: [(0, Tv.jsx)("span", {
              children: hv ? Pv("smpShop:you") : (0, Tv.jsx)(Oh.c, {
                text: [{
                  entityName: vv.seller
                }]
              })
            }), (0, Tv.jsx)("span", {
              children: Pv("smpShop:timeLeft", {
                time: eS(vv.expiresAt)
              })
            })]
          })]
        }), (0, Tv.jsxs)("div", {
          className: "SmpRowPrice",
          children: [(0, Tv.jsx)(Hh, {
            amount: vv.pricePerItem
          }), (0, Tv.jsx)("small", {
            children: Pv("smpShop:each")
          })]
        }), (0, Tv.jsx)(Nv.d, {
          className: "SmpBuyButton",
          disabled: hv || !vv.canAfford && !vv.busy,
          loading: vv.busy,
          onClick: () => {
            vv.onBuy(vv.itemKey)
          },
          children: hv ? Pv("smpShop:yours") : (0, Tv.jsx)(Hh, {
            amount: Sv
          })
        })]
      })
    }));

    function nS(vv) {
      let {
        view: zv,
        onChange: Pv
      } = vv;
      const {
        t: hv
      } = (0, gv.x)();
      return (0, Tv.jsx)(Zh.c, {
        className: "SmpChoice SmpViewToggle",
        ariaLabel: hv("smpShop:layout"),
        options: [{
          value: "list",
          label: (0, Tv.jsx)(pv.b, {
            name: "list"
          }),
          ariaLabel: hv("smpShop:listView")
        }, {
          value: "grid",
          label: (0, Tv.jsx)(pv.b, {
            name: "grid-2"
          }),
          ariaLabel: hv("smpShop:gridView")
        }],
        value: zv,
        onChange: Pv
      })
    }

    function OS(vv) {
      let {
        entries: zv,
        view: Pv
      } = vv;
      const {
        t: hv
      } = (0, gv.x)(), Sv = wS(), ev = "grid" === Pv;
      return (0, Tv.jsxs)(Tv.Fragment, {
        children: [!ev && (0, Tv.jsxs)("div", {
          className: "SmpColumns",
          "aria-hidden": "true",
          children: [(0, Tv.jsx)("span", {}), (0, Tv.jsx)("span", {
            children: hv("smpShop:columnItem")
          }), (0, Tv.jsx)("span", {
            children: hv("smpShop:columnPriceEach")
          }), (0, Tv.jsx)("span", {
            children: hv("smpShop:columnTotal")
          })]
        }), (0, Tv.jsx)(aS.b, {
          lazyLoadedClassName: ev ? "SmpCardGrid" : "SmpList",
          observerRoot: "SmpBody",
          rootMargin: hS,
          observerUpdateDeps: [zv.length],
          children: zv.map((vv => {
            var zv, Pv;
            let {
              key: hv,
              item: gv,
              meta: pv
            } = vv;
            const dv = pv.quantity * pv.pricePerItem;
            return (0, Tv.jsx)(YS, {
              itemKey: hv,
              item: pv.item,
              title: gv.customTitle,
              quantity: pv.quantity,
              pricePerItem: pv.pricePerItem,
              seller: pv.seller,
              expiresAt: pv.expiresAt,
              tier: null !== (zv = null === (Pv = gv.enchant) || void 0 === Pv ? void 0 : Pv.tier) && void 0 !== zv ? zv : null,
              busy: Sv.isPending(hv) || null !== pv.seller && !1 === gv.canBuy,
              canAfford: Sv.canAfford(gv, dv),
              grid: ev,
              onBuy: Sv.act
            }, hv)
          }))
        }, Pv)]
      })
    }
    const DS = [1, 10, 100],
      KS = [1, 10, 100, 999];

    function VS(vv) {
      var zv, Pv, Sv, dv, lv, Wv, wv, av, sv, Cv;
      const {
        t: iv
      } = (0, gv.x)(), cv = wS(), {
        creator: Gv,
        mode: mv
      } = vv, [fv, Fv] = (0, hv.useState)(null !== (zv = null === Gv || void 0 === Gv ? void 0 : Gv.meta.item) && void 0 !== zv ? zv : null), [Yv, nv] = (0, hv.useState)(1), [Ov, Dv] = (0, hv.useState)(0), [Kv, Vv] = (0, hv.useState)(""), [Uv, Rv] = (0, hv.useState)(0), xv = (0, hv.useRef)(fv), tv = (0, hv.useRef)(!1), [qv, Iv] = (0, hv.useState)(!1), Qv = null !== (Pv = null === Gv || void 0 === Gv ? void 0 : Gv.meta.item) && void 0 !== Pv ? Pv : null, Zv = null !== (Sv = null === Gv || void 0 === Gv ? void 0 : Gv.meta.owned) && void 0 !== Sv ? Sv : 0;
      (0, hv.useEffect)((() => {
        vv.searching || null === Qv || Qv === xv.current || (xv.current = Qv, tv.current = !1, Fv(Qv), Dv(0), nv("list" === mv ? Math.max(1, Zv) : 1))
      }), [Qv, vv.searching]);
      const Av = !!Gv && !!fv && Gv.meta.item === fv,
        Lv = Av ? Gv.meta.owned : null !== (dv = null === (lv = vv.inventory) || void 0 === lv || null === (Wv = lv.find((vv => vv.item === fv))) || void 0 === Wv ? void 0 : Wv.quantity) && void 0 !== dv ? dv : 0,
        Hv = "list" === mv ? Math.max(1, Lv) : 45954,
        Mv = null !== (wv = vv.prices[0]) && void 0 !== wv ? wv : null,
        yv = vv.prices.length ? Math.round(vv.prices.reduce(((vv, zv) => vv + zv), 0) / vv.prices.length) : null,
        Bv = null === (av = vv.inventory) || void 0 === av || null === (sv = av.find((vv => vv.item === fv))) || void 0 === sv ? void 0 : sv.sellPrice;
      (0, hv.useEffect)((() => {
        var vv;
        Av && (nv((vv => "list" === mv ? Math.min(Math.max(1, vv), Math.max(1, Lv)) : vv)), tv.current || Dv(null !== (vv = null !== Mv && void 0 !== Mv ? Mv : yv) && void 0 !== vv ? vv : Math.max(1, null !== Bv && void 0 !== Bv ? Bv : 1)))
      }), [Av, Lv, fv, Mv, yv]);
      const Jv = vv => {
          tv.current = !0, Dv(vv)
        },
        Ev = zv => {
          var Pv, hv, Sv;
          xv.current = zv, tv.current = !1, Iv(!1), Vv(""), Rv((vv => vv + 1)), Fv(zv), Dv(0), nv("list" === mv && null !== (Pv = null === (hv = vv.inventory) || void 0 === hv || null === (Sv = hv.find((vv => vv.item === zv))) || void 0 === Sv ? void 0 : Sv.quantity) && void 0 !== Pv ? Pv : 1), (null === Gv || void 0 === Gv ? void 0 : Gv.meta.item) !== zv && vv.onPickItem(zv)
        },
        ov = Yv * Ov,
        bv = "list" === mv && null !== Gv && void 0 !== Gv && Gv.meta.fee ? function(vv, zv) {
          const Pv = Math.max(0, zv - vv.taxFreeAllowance);
          return Math.ceil(Math.round(Pv * vv.rate * 1e6) / 1e6)
        }(Gv.meta.fee, ov) : 0,
        rv = !!Gv && cv.isPending(Gv.key),
        kv = Av && !vv.searching && Yv >= 1 && Ov >= 1 && ("order" === mv || Lv >= Yv) && !rv,
        Xv = !!fv && !Av && !vv.searching && Yv >= 1 && Ov >= 1,
        uv = () => {
          kv ? cv.act(Gv.key, `${Yv}|${Ov}`) : Xv && (vv.onPickItem(fv), Iv(!0))
        };
      (0, hv.useEffect)((() => {
        qv && Av && !vv.searching && (Iv(!1), uv())
      }), [qv, Av, vv.searching]);
      const vz = !!fv && !Av && (vv.searching || qv),
        zz = fv ? NS(vv.names, fv) : "",
        Pz = (0, hv.useMemo)((() => dS(vv.catalogue, Kv).slice(0, 8)), [vv.catalogue, Kv]),
        hz = ("list" === mv ? DS.filter((vv => vv < Lv)) : KS).map((vv => ({
          value: vv,
          label: String(vv)
        })));
      "list" === mv && Lv > 0 && hz.push({
        value: Lv,
        label: iv("smpShop:all", {
          count: Lv
        })
      });
      const Sz = [];
      return null !== Mv && (Mv > 1 && Sz.push({
        value: Mv - 1,
        label: iv("smpShop:undercut", {
          price: Qh(Mv - 1)
        })
      }), Sz.push({
        value: Mv,
        label: iv("smpShop:lowest", {
          price: Qh(Mv)
        })
      })), null !== yv && yv !== Mv && Sz.push({
        value: yv,
        label: iv("smpShop:average", {
          price: Qh(yv)
        })
      }), (0, Tv.jsxs)("div", {
        className: "SmpTradeForm",
        children: [(0, Tv.jsxs)("div", {
          className: "SmpTradeFormHead",
          children: [(0, Tv.jsx)("b", {
            children: iv("list" === mv ? "smpShop:sellOnMarket" : "smpShop:createOrder")
          }), (0, Tv.jsx)("button", {
            type: "button",
            className: "SmpIconButton",
            "aria-label": iv("smpShop:close"),
            onClick: vv.onClose,
            children: (0, Tv.jsx)(pv.b, {
              name: "xmark"
            })
          })]
        }), "list" === mv && (0, Tv.jsx)("div", {
          className: "SmpPicker",
          role: "listbox",
          children: null !== (Cv = vv.inventory) && void 0 !== Cv && Cv.length ? vv.inventory.map((vv => {
            let {
              item: zv,
              quantity: Pv
            } = vv;
            return (0, Tv.jsx)("button", {
              type: "button",
              title: zv,
              className: ev()("SmpPickerSlot", {
                SmpPickerSlotOn: zv === fv
              }),
              onClick: () => {
                Ev(zv)
              },
              children: (0, Tv.jsx)(Lh, {
                item: zv,
                amount: Pv
              })
            }, zv)
          })) : (0, Tv.jsx)("span", {
            className: "SmpMuted",
            children: iv("smpShop:nothingToList")
          })
        }), ("list" === mv || !fv) && (0, Tv.jsxs)("div", {
          className: "SmpItemSearch",
          children: [(0, Tv.jsx)(jv.c, {
            className: "SmpSearchInput",
            placeholderText: iv("list" === mv ? "smpShop:listSearchPlaceholder" : "smpShop:orderSearchPlaceholder"),
            defaultValue: Kv,
            onValueChange: Vv,
            blurOnEnter: !0,
            onEnter: () => {
              Pz[0] && Ev(Pz[0].name)
            }
          }, Uv), Pz.length > 0 && (0, Tv.jsx)("div", {
            className: "SmpPicker",
            children: Pz.map((vv => {
              let {
                name: zv
              } = vv;
              return (0, Tv.jsx)("button", {
                type: "button",
                title: zv,
                className: ev()("SmpPickerSlot", {
                  SmpPickerSlotOn: zv === fv
                }),
                onClick: () => {
                  Ev(zv)
                },
                children: (0, Tv.jsx)(Lh, {
                  item: zv
                })
              }, zv)
            }))
          })]
        }), fv && (0, Tv.jsxs)(Tv.Fragment, {
          children: [(0, Tv.jsxs)("div", {
            className: "SmpPickedName",
            children: [zz, vz && (0, Tv.jsx)(Eh, {})]
          }), (0, Tv.jsxs)("div", {
            className: "SmpFormGrid",
            children: [(0, Tv.jsxs)("div", {
              className: "SmpField",
              children: [(0, Tv.jsxs)("span", {
                children: [iv("smpShop:quantity"), "list" === mv && Av && (0, Tv.jsx)("small", {
                  children: iv("smpShop:youHave", {
                    count: Lv
                  })
                })]
              }), (0, Tv.jsx)(oh, {
                value: Yv,
                onChange: nv,
                max: Hv,
                label: iv("smpShop:quantity")
              }), (0, Tv.jsx)(Jh, {
                options: hz,
                value: Yv,
                onChange: nv,
                ariaLabel: iv("smpShop:quantity")
              })]
            }), (0, Tv.jsxs)("div", {
              className: "SmpField",
              children: [(0, Tv.jsx)("span", {
                children: iv("smpShop:pricePerItem")
              }), (0, Tv.jsx)(oh, {
                value: Math.max(1, Ov),
                onChange: Jv,
                max: 9999999,
                step: bh,
                label: iv("smpShop:pricePerItem")
              }), (0, Tv.jsx)(Jh, {
                options: Sz,
                value: Ov,
                onChange: Jv,
                ariaLabel: iv("smpShop:pricePerItem")
              })]
            })]
          }), "list" === mv && (0, Tv.jsxs)("div", {
            className: "SmpTradeSummary",
            children: [(0, Tv.jsxs)("span", {
              children: [iv("smpShop:youGet"), " ", (0, Tv.jsx)(Hh, {
                amount: Math.max(0, ov - bv),
                exact: !0
              })]
            }), (0, Tv.jsx)("small", {
              children: bv > 0 ? iv("smpShop:listingFee", {
                fee: bv.toLocaleString("en-US")
              }) : iv("smpShop:listingRules")
            })]
          }), (0, Tv.jsx)(Nv.l, {
            className: "SmpSubmit",
            disabled: !kv && !Xv && !rv,
            loading: rv || vz || Av && vv.searching,
            onClick: uv,
            children: "list" === mv ? iv("smpShop:listButton", {
              count: Yv,
              item: zz
            }) : (0, Tv.jsxs)(Tv.Fragment, {
              children: [iv("smpShop:orderButton", {
                count: Yv,
                item: zz
              }), " ", Ov >= 1 && (0, Tv.jsx)(Hh, {
                amount: ov
              })]
            })
          })]
        })]
      })
    }

    function US() {
      var vv;
      const {
        t: zv
      } = (0, gv.x)(), Pv = wS(), Sv = null === (vv = Pv.shopInfo[Pv.categoryKey]) || void 0 === vv ? void 0 : vv.items, ev = PS(Sv, "search"), pv = PS(Sv, "creator"), dv = zS(Sv, "enchantedCreator"), lv = zS(Sv, "listing"), Wv = PS(Sv, "empty"), wv = iS(ev, lv.length > 0 || null !== Wv), {
        searched: av,
        shown: sv,
        loading: Cv
      } = wv, [iv, cv] = (0, hv.useState)(!1), [Gv, mv] = function() {
        const [vv, zv] = (0, FS.d)("smpMarketView", "list");
        return ["grid" === vv ? "grid" : "list", zv]
      }(), jv = "grid" === Gv, fv = (0, hv.useMemo)((() => lv.filter((vv => {
        let {
          meta: zv
        } = vv;
        return null !== zv.seller && zv.item === av
      })).map((vv => {
        let {
          meta: zv
        } = vv;
        return zv.pricePerItem
      })).sort(((vv, zv) => vv - zv))), [lv, av]), Fv = (0, hv.useMemo)((() => {
        const vv = new Set(wv.catalogue.map((vv => {
          let {
            name: zv
          } = vv;
          return zv
        })));
        return function(vv) {
          for (const zv in vv)
            if ("sell" === vv[zv].smp) return zS(vv[zv].items, "sell").filter((vv => {
              let {
                item: zv
              } = vv;
              return !zv.enchant
            })).map((vv => {
              let {
                meta: zv
              } = vv;
              return {
                item: zv.item,
                quantity: zv.quantity,
                sellPrice: zv.pricePerItem
              }
            }));
          return []
        }(Pv.shopInfo).filter((zv => {
          let {
            item: Pv
          } = zv;
          return vv.has(Pv)
        }))
      }), [Pv.shopInfo, wv.catalogue]);
      return (0, Tv.jsx)(jS, {
        browser: wv,
        className: "SmpMarketTab",
        recentLabel: zv("smpShop:recentlyListed"),
        action: (0, Tv.jsx)(Nv.l, {
          className: "SmpSellButton",
          onClick: () => {
            cv((vv => !vv))
          },
          children: zv("smpShop:sell")
        }),
        above: iv && (0, Tv.jsxs)(Tv.Fragment, {
          children: [(0, Tv.jsx)(VS, {
            mode: "list",
            creator: pv,
            inventory: Fv,
            catalogue: wv.catalogue,
            names: wv.names,
            searching: Cv,
            prices: fv,
            onPickItem: wv.searchFor,
            onClose: () => {
              cv(!1)
            }
          }), dv.length > 0 && (0, Tv.jsx)(RS, {
            entries: dv
          })]
        }),
        listControls: (0, Tv.jsx)(nS, {
          view: Gv,
          onChange: mv
        }),
        summary: sv && (lv.length > 0 ? zv(1 === lv.length ? "smpShop:listingSummaryOne" : "smpShop:listingSummary", {
          count: lv.length,
          price: Qh(fS(lv, "min"))
        }) : zv("smpShop:noOneSelling", {
          item: NS(wv.names, sv)
        })),
        list: Cv ? (0, Tv.jsx)(Mh, {
          grid: jv
        }) : lv.length > 0 ? (0, Tv.jsx)(OS, {
          entries: lv,
          view: Gv
        }) : Wv ? (0, Tv.jsx)(Bh, {
          entry: Wv
        }) : (0, Tv.jsx)(Mh, {
          count: 3,
          grid: jv
        })
      })
    }

    function RS(vv) {
      let {
        entries: zv
      } = vv;
      const {
        t: Pv
      } = (0, gv.x)(), Sv = wS(), [ev, pv] = (0, hv.useState)({});
      return (0, Tv.jsx)("div", {
        className: "SmpList",
        children: zv.map((vv => {
          var zv, hv, gv;
          let {
            key: dv,
            item: lv,
            meta: Wv
          } = vv;
          const wv = null !== (zv = ev[dv]) && void 0 !== zv ? zv : 1;
          return (0, Tv.jsxs)("div", {
            className: "SmpRow",
            children: [(0, Tv.jsx)(Lh, {
              item: Wv.item,
              amount: Wv.quantity,
              tier: null !== (hv = null === (gv = lv.enchant) || void 0 === gv ? void 0 : gv.tier) && void 0 !== hv ? hv : null
            }), (0, Tv.jsxs)("div", {
              className: "SmpRowText",
              children: [(0, Tv.jsx)("b", {
                children: (0, Tv.jsx)(Oh.c, {
                  text: lv.customTitle
                })
              }), (0, Tv.jsx)("small", {
                children: Pv("smpShop:enchantedListing")
              })]
            }), (0, Tv.jsx)(oh, {
              value: wv,
              onChange: vv => {
                pv({
                  ...ev,
                  [dv]: vv
                })
              },
              max: 9999999,
              step: bh,
              label: Pv("smpShop:pricePerItem")
            }), (0, Tv.jsxs)(Nv.l, {
              loading: Sv.isPending(dv),
              onClick: () => {
                Sv.act(dv, String(wv))
              },
              children: [Pv("smpShop:list"), " ", (0, Tv.jsx)(Hh, {
                amount: wv
              })]
            })]
          }, dv)
        }))
      })
    }
    const xS = (0, hv.memo)((function(vv) {
      let {
        itemKey: zv,
        item: Pv,
        quantity: hv,
        pricePerItem: Sv,
        tier: gv,
        selected: pv,
        onSelect: dv
      } = vv;
      return (0, Tv.jsxs)("button", {
        type: "button",
        className: ev()("SmpInventorySlot", {
          SmpInventorySlotOn: pv
        }),
        title: Pv,
        onClick: () => {
          dv(zv)
        },
        children: [(0, Tv.jsx)(Lh, {
          item: Pv,
          amount: hv,
          tier: gv
        }), (0, Tv.jsx)(Hh, {
          amount: Sv
        })]
      })
    }));

    function tS() {
      var vv;
      const {
        t: zv
      } = (0, gv.x)(), Pv = wS(), Sv = null === (vv = Pv.shopInfo[Pv.categoryKey]) || void 0 === vv ? void 0 : vv.items, pv = zS(Sv, "sell"), dv = PS(Sv, "empty"), [Nv, lv] = (0, hv.useState)(null), [Wv, wv] = (0, hv.useState)({}), av = pv.find((vv => {
        let {
          key: zv
        } = vv;
        return zv === Nv
      }));
      return 0 === pv.length ? (0, Tv.jsx)("div", {
        className: "SmpScreen",
        children: (0, Tv.jsx)(yh, {
          title: dv ? (0, Tv.jsx)(Oh.c, {
            text: dv.item.customTitle
          }) : zv("smpShop:nothingToSell"),
          children: dv && (0, Tv.jsx)(Oh.c, {
            text: dv.item.description
          })
        })
      }) : (0, Tv.jsxs)("div", {
        className: "SmpScreen SmpInstantSellTab",
        children: [(0, Tv.jsx)("div", {
          className: "SmpInventoryGrid",
          children: pv.map((vv => {
            var zv, Pv;
            let {
              key: hv,
              item: Sv,
              meta: ev
            } = vv;
            return (0, Tv.jsx)(xS, {
              itemKey: hv,
              item: ev.item,
              quantity: ev.quantity,
              pricePerItem: ev.pricePerItem,
              tier: null !== (zv = null === (Pv = Sv.enchant) || void 0 === Pv ? void 0 : Pv.tier) && void 0 !== zv ? zv : null,
              selected: hv === Nv,
              onSelect: lv
            }, hv)
          }))
        }), (0, Tv.jsx)("div", {
          className: ev()("SmpSellBar", {
            SmpSellBarIdle: !av
          }),
          children: av ? (0, Tv.jsx)(qS, {
            entry: av,
            choice: lS(av.item, Wv[av.key]),
            onChoose: vv => {
              wv({
                ...Wv,
                [av.key]: vv
              })
            }
          }) : (0, Tv.jsx)("span", {
            className: "SmpMuted",
            children: zv("smpShop:tapToSell")
          })
        })]
      })
    }

    function qS(vv) {
      var zv, Pv, hv, Sv;
      let {
        entry: ev,
        choice: pv,
        onChoose: dv
      } = vv;
      const {
        t: lv
      } = (0, gv.x)(), Wv = wS(), {
        key: wv,
        item: av,
        meta: sv
      } = ev, Cv = gS("dropdown" === (null === (zv = av.userInput) || void 0 === zv ? void 0 : zv.type) ? av.userInput.dropdownOptions : []), iv = null === pv ? 0 : -(0, fh.d)(av, pv);
      return (0, Tv.jsxs)(Tv.Fragment, {
        children: [(0, Tv.jsx)(Lh, {
          item: sv.item,
          amount: sv.quantity,
          tier: null !== (Pv = null === (hv = av.enchant) || void 0 === hv ? void 0 : hv.tier) && void 0 !== Pv ? Pv : null
        }), (0, Tv.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, Tv.jsx)("b", {
            children: (0, Tv.jsx)(Oh.c, {
              text: null !== (Sv = av.customTitle) && void 0 !== Sv ? Sv : sv.item
            })
          }), (0, Tv.jsx)("small", {
            children: lv("smpShop:sellEach", {
              count: sv.quantity
            })
          })]
        }), (0, Tv.jsx)(Jh, {
          options: Cv.map((vv => {
            let {
              label: zv,
              quantity: Pv,
              isAll: hv
            } = vv;
            return {
              value: zv,
              label: hv ? lv("smpShop:all", {
                count: Pv
              }) : String(Pv)
            }
          })),
          value: pv,
          onChange: dv,
          ariaLabel: lv("smpShop:quantity")
        }), (0, Tv.jsxs)(Nv.l, {
          loading: Wv.isPending(wv),
          disabled: null === pv,
          onClick: () => {
            Wv.act(wv, pv)
          },
          children: [lv("smpShop:sellButton"), " ", (0, Tv.jsx)(Hh, {
            amount: iv
          })]
        })]
      })
    }

    function IS() {
      var vv;
      const {
        t: zv
      } = (0, gv.x)(), Pv = wS(), hv = null === (vv = Pv.shopInfo[Pv.categoryKey]) || void 0 === vv ? void 0 : vv.items, Sv = zS(hv, "collect"), ev = zS(hv, "myListing"), pv = (vv, zv) => Pv.isPending(vv) || !1 === zv.canBuy;
      return (0, Tv.jsxs)("div", {
        className: "SmpScreen",
        children: [(0, Tv.jsx)("h3", {
          className: "SmpSectionTitle",
          children: zv("smpShop:readyToCollect")
        }), Sv.length > 0 ? (0, Tv.jsx)("div", {
          className: "SmpList",
          children: Sv.map((vv => {
            var hv, Sv;
            let {
              key: ev,
              item: gv,
              meta: dv
            } = vv;
            return (0, Tv.jsxs)("div", {
              className: "SmpRow",
              children: [(0, Tv.jsx)(Lh, {
                item: "sold" === dv.type ? "Gold Coin" : dv.item,
                amount: "sold" === dv.type ? 0 : dv.quantity,
                tier: null !== (hv = null === (Sv = gv.enchant) || void 0 === Sv ? void 0 : Sv.tier) && void 0 !== hv ? hv : null
              }), (0, Tv.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, Tv.jsx)("b", {
                  children: (0, Tv.jsx)(Oh.c, {
                    text: gv.customTitle
                  })
                }), (0, Tv.jsx)("small", {
                  children: (0, Tv.jsx)(Oh.c, {
                    text: gv.description
                  })
                })]
              }), (0, Tv.jsx)(Nv.j, {
                loading: pv(ev, gv),
                onClick: () => {
                  Pv.act(ev)
                },
                children: zv("smpShop:collect")
              })]
            }, ev)
          }))
        }) : (0, Tv.jsx)(yh, {
          title: zv("smpShop:nothingToCollect"),
          children: zv("smpShop:nothingToCollectHint")
        }), (0, Tv.jsx)("h3", {
          className: "SmpSectionTitle",
          children: zv("smpShop:activeListings", {
            count: ev.length
          })
        }), ev.length > 0 ? (0, Tv.jsx)("div", {
          className: "SmpList",
          children: ev.map((vv => {
            var hv, Sv;
            let {
              key: ev,
              item: gv,
              meta: dv
            } = vv;
            return (0, Tv.jsxs)("div", {
              className: "SmpRow",
              children: [(0, Tv.jsx)(Lh, {
                item: dv.item,
                amount: dv.quantity,
                tier: null !== (hv = null === (Sv = gv.enchant) || void 0 === Sv ? void 0 : Sv.tier) && void 0 !== hv ? hv : null
              }), (0, Tv.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, Tv.jsx)("b", {
                  children: (0, Tv.jsx)(Oh.c, {
                    text: gv.customTitle
                  })
                }), (0, Tv.jsx)("small", {
                  children: zv("smpShop:timeLeft", {
                    time: eS(dv.expiresAt)
                  })
                })]
              }), (0, Tv.jsxs)("div", {
                className: "SmpRowPrice",
                children: [(0, Tv.jsx)(Hh, {
                  amount: dv.pricePerItem
                }), (0, Tv.jsx)("small", {
                  children: zv("smpShop:each")
                })]
              }), (0, Tv.jsx)(Nv.A, {
                loading: pv(ev, gv),
                onClick: () => {
                  Pv.act(ev)
                },
                children: zv("smpShop:cancel")
              })]
            }, ev)
          }))
        }) : (0, Tv.jsx)(yh, {
          title: zv("smpShop:noActiveListings"),
          children: zv("smpShop:noActiveListingsHint")
        })]
      })
    }

    function QS(vv) {
      let {
        done: zv,
        of: Pv
      } = vv;
      return (0, Tv.jsx)("span", {
        className: "SmpProgress",
        children: (0, Tv.jsx)("i", {
          style: {
            width: `${Math.min(100,zv/Math.max(1,Pv)*100)}%`
          }
        })
      })
    }

    function ZS(vv) {
      var zv, Pv, hv;
      let {
        entry: Sv,
        choice: ev,
        onChoose: pv
      } = vv;
      const {
        t: dv
      } = (0, gv.x)(), lv = wS(), {
        key: Wv,
        item: wv,
        meta: av
      } = Sv, sv = "dropdown" === (null === (zv = wv.userInput) || void 0 === zv ? void 0 : zv.type) ? wv.userInput.dropdownOptions : [], Cv = !0 === av.processing, iv = null !== av.creator && (av.owned > 0 || Cv), cv = iv && av.owned > 0 ? gS(sv) : [], Gv = null === ev ? 0 : null !== (Pv = null === (hv = cv.find((vv => vv.label === ev))) || void 0 === hv ? void 0 : hv.quantity) && void 0 !== Pv ? Pv : 0;
      return (0, Tv.jsxs)("div", {
        className: "SmpRow SmpOrderRow",
        children: [(0, Tv.jsx)(Lh, {
          item: av.item
        }), (0, Tv.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, Tv.jsx)("b", {
            children: (0, Tv.jsx)(Oh.c, {
              text: wv.customTitle
            })
          }), (0, Tv.jsxs)("small", {
            children: [(0, Tv.jsx)(Hh, {
              amount: av.pricePerItem
            }), " ", dv("smpShop:each"), " \xb7", " ", null === av.creator ? dv("smpShop:you") : (0, Tv.jsx)(Oh.c, {
              text: [{
                entityName: av.creator
              }]
            })]
          }), (0, Tv.jsx)(QS, {
            done: av.delivered,
            of: av.wanted
          })]
        }), iv ? (0, Tv.jsxs)(Tv.Fragment, {
          children: [(0, Tv.jsx)(Jh, {
            options: cv.map((vv => {
              let {
                label: zv,
                quantity: Pv,
                isAll: hv
              } = vv;
              return {
                value: zv,
                label: hv ? dv("smpShop:max", {
                  count: Pv
                }) : String(Pv)
              }
            })),
            value: ev,
            onChange: pv,
            ariaLabel: dv("smpShop:quantity")
          }), (0, Tv.jsxs)(Nv.l, {
            loading: lv.isPending(Wv) || Cv,
            disabled: null === ev,
            onClick: () => {
              lv.act(Wv, ev)
            },
            children: [dv("smpShop:deliver"), " ", (0, Tv.jsx)(Hh, {
              amount: Gv * av.pricePerItem
            })]
          })]
        }) : (0, Tv.jsx)("span", {
          className: "SmpMuted SmpRowNote",
          children: null === av.creator ? dv("smpShop:yourOrder") : dv("smpShop:youHave", {
            count: 0
          })
        })]
      })
    }

    function AS() {
      var vv;
      const {
        t: zv
      } = (0, gv.x)(), Pv = wS(), Sv = null === (vv = Pv.shopInfo[Pv.categoryKey]) || void 0 === vv ? void 0 : vv.items, ev = PS(Sv, "search"), pv = PS(Sv, "creator"), dv = zS(Sv, "order"), lv = PS(Sv, "empty"), Wv = iS(ev, dv.length > 0 || null !== lv), [wv, av] = (0, hv.useState)(!1), [sv, Cv] = (0, hv.useState)({});
      return (0, Tv.jsx)(jS, {
        browser: Wv,
        recentLabel: zv("smpShop:recentOrders"),
        action: (0, Tv.jsx)(Nv.l, {
          onClick: () => {
            av((vv => !vv))
          },
          children: zv("smpShop:createOrder")
        }),
        above: wv && (0, Tv.jsx)(VS, {
          mode: "order",
          creator: pv,
          catalogue: Wv.catalogue,
          names: Wv.names,
          searching: Wv.loading,
          prices: [],
          onPickItem: Wv.searchFor,
          onClose: () => {
            av(!1)
          }
        }),
        onBack: () => {
          av(!1)
        },
        summary: dv.length > 0 && zv(1 === dv.length ? "smpShop:orderSummaryOne" : "smpShop:orderSummary", {
          count: dv.length,
          price: Qh(fS(dv, "max"))
        }),
        list: Wv.loading ? (0, Tv.jsx)(Mh, {}) : dv.length > 0 ? (0, Tv.jsx)(aS.b, {
          lazyLoadedClassName: "SmpList",
          observerRoot: "SmpBody",
          rootMargin: hS,
          observerUpdateDeps: [dv.length],
          children: dv.map((vv => (0, Tv.jsx)(ZS, {
            entry: vv,
            choice: lS(vv.item, sv[vv.key]),
            onChoose: zv => {
              Cv({
                ...sv,
                [vv.key]: zv
              })
            }
          }, vv.key)))
        }) : lv ? (0, Tv.jsx)(Bh, {
          entry: lv
        }) : (0, Tv.jsx)(Mh, {
          count: 3
        })
      })
    }

    function LS() {
      var vv;
      const {
        t: zv
      } = (0, gv.x)(), Pv = wS(), hv = zS(null === (vv = Pv.shopInfo[Pv.categoryKey]) || void 0 === vv ? void 0 : vv.items, "myOrder");
      return 0 === hv.length ? (0, Tv.jsx)("div", {
        className: "SmpScreen",
        children: (0, Tv.jsx)(yh, {
          title: zv("smpShop:noOrders"),
          children: zv("smpShop:noOrdersHint")
        })
      }) : (0, Tv.jsx)("div", {
        className: "SmpScreen",
        children: (0, Tv.jsx)("div", {
          className: "SmpList",
          children: hv.map((vv => {
            let {
              key: hv,
              item: Sv,
              meta: ev
            } = vv;
            const gv = Pv.isPending(hv) || !1 === Sv.canBuy;
            return (0, Tv.jsxs)("div", {
              className: "SmpRow",
              children: [(0, Tv.jsx)(Lh, {
                item: ev.item,
                amount: ev.collectable
              }), (0, Tv.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, Tv.jsx)("b", {
                  children: (0, Tv.jsx)(Oh.c, {
                    text: Sv.customTitle
                  })
                }), (0, Tv.jsxs)("small", {
                  children: [(0, Tv.jsx)(Hh, {
                    amount: ev.pricePerItem
                  }), " ", zv("smpShop:each"), ev.collectable > 0 && ` \xb7 ${zv("smpShop:readyCount",{count:ev.collectable})}`]
                }), (0, Tv.jsx)(QS, {
                  done: ev.delivered,
                  of: ev.wanted
                })]
              }), ev.collectable > 0 ? (0, Tv.jsx)(Nv.j, {
                loading: gv,
                onClick: () => {
                  Pv.act(hv)
                },
                children: zv("smpShop:collectCount", {
                  count: ev.collectable
                })
              }) : (0, Tv.jsx)(Nv.A, {
                loading: gv,
                onClick: () => {
                  Pv.act(hv)
                },
                children: zv("smpShop:cancel")
              })]
            }, hv)
          }))
        })
      })
    }
    const HS = new Set(["search", "creator", "enchantedCreator", "collect", "myOrder", "order"]),
      MS = {
        sell: "coins",
        market: "store",
        collect: "backpack",
        orders: "file-clipboard",
        myOrders: "location-check"
      };

    function yS(vv, zv) {
      let Pv = !1;
      const hv = {};
      for (const Sv in vv) zv(Sv, vv[Sv]) ? hv[Sv] = vv[Sv] : Pv = !0;
      return Pv ? hv : vv
    }

    function BS(vv) {
      var zv, Pv, Sv, dv;
      const {
        show: Nv,
        shopInfo: lv,
        selectedCategoryKey: Wv
      } = vv, {
        t: wv
      } = (0, gv.x)(), av = null !== Wv && void 0 !== Wv ? Wv : "", sv = vS(lv, av), Cv = null === (zv = lv[av]) || void 0 === zv ? void 0 : zv.items, iv = null !== sv, [cv, Gv] = (0, hv.useState)({}), [mv, jv] = (0, hv.useState)([]), [fv, Fv] = (0, hv.useState)(!1), [Yv, nv] = (0, hv.useState)(null), [, Ov] = (0, hv.useState)(0), Dv = (0, hv.useRef)(0), Kv = (0, hv.useRef)({}), Vv = (0, hv.useRef)({
        items: Cv,
        pending: cv,
        shopInfo: lv,
        active: iv,
        canAfford: vv.canAfford,
        buy: vv.buy
      });
      Vv.current = {
        items: Cv,
        pending: cv,
        shopInfo: lv,
        active: iv,
        canAfford: vv.canAfford,
        buy: vv.buy
      };
      const Uv = (0, hv.useCallback)((vv => {
        Dv.current++;
        const zv = Dv.current;
        jv((Pv => [{
          id: zv,
          text: vv
        }, ...Pv].slice(0, 8))), nv(zv)
      }), []);
      (0, hv.useEffect)((() => {
        if (null === Yv) return;
        const vv = setTimeout((() => {
          nv(null)
        }), 3e3);
        return () => {
          clearTimeout(vv)
        }
      }), [Yv]), (0, hv.useEffect)((() => {
        const zv = vv.message;
        if (!zv) return;
        const {
          shopInfo: Pv,
          active: hv,
          items: Sv
        } = Vv.current, ev = null !== zv.categoryKey ? null !== vS(Pv, zv.categoryKey) : hv;
        (ev || hv) && Uv(zv.text), ev && Gv((vv => yS(vv, (vv => {
          var zv, Pv;
          return !HS.has(null === Sv || void 0 === Sv || null === (zv = Sv[vv]) || void 0 === zv || null === (Pv = zv.smp) || void 0 === Pv ? void 0 : Pv.kind)
        }))))
      }), [vv.message, Uv]), (0, hv.useEffect)((() => {
        Gv((vv => yS(vv, ((vv, zv) => TS(null === Cv || void 0 === Cv ? void 0 : Cv[vv]) === zv.snapshot))))
      }), [lv, Cv]);
      const Rv = Object.keys(cv).length > 0;
      (0, hv.useEffect)((() => {
        if (!Rv) return;
        const vv = setInterval((() => {
          Ov((vv => vv + 1));
          const vv = Date.now(),
            {
              pending: zv,
              items: Pv
            } = Vv.current,
            hv = Object.keys(zv).filter((Pv => vv - zv[Pv].at >= 12e3));
          if (0 === hv.length) return;
          const Sv = hv.some((vv => {
            var hv, Sv;
            return "search" !== (null === Pv || void 0 === Pv || null === (hv = Pv[vv]) || void 0 === hv || null === (Sv = hv.smp) || void 0 === Sv ? void 0 : Sv.kind) || zv[vv].resend
          }));
          for (const ev of hv) Kv.current[ev] = vv;
          Gv((vv => yS(vv, (vv => !hv.includes(vv))))), Sv && Uv(wv("smpShop:noAnswer"))
        }), 500);
        return () => {
          clearInterval(vv)
        }
      }), [Rv]), (0, hv.useEffect)((() => {
        Gv({})
      }), [av]), (0, hv.useEffect)((() => {
        Nv || Fv(!1)
      }), [Nv]);
      const xv = (0, hv.useCallback)((function(vv, zv) {
          let Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            items: hv,
            pending: Sv,
            canAfford: ev,
            buy: gv
          } = Vv.current, pv = null === hv || void 0 === hv ? void 0 : hv[vv];
          if (!pv || vv in Sv || !1 === pv.canBuy) return !1;
          if (!ev(pv, (0, fh.d)(pv, zv))) return !1;
          gv(vv, pv, zv);
          const dv = {
            snapshot: TS(pv),
            at: Date.now(),
            resend: Pv
          };
          return Vv.current.pending = {
            ...Vv.current.pending,
            [vv]: dv
          }, Gv((zv => ({
            ...zv,
            [vv]: dv
          }))), !0
        }), []),
        tv = (0, hv.useMemo)((() => ({
          shopInfo: lv,
          categoryKey: av,
          canAfford: vv.canAfford,
          isPending: vv => vv in cv,
          gaveUpAt: vv => {
            var zv;
            return null !== (zv = Kv.current[vv]) && void 0 !== zv ? zv : 0
          },
          act: xv,
          notify: Uv
        })), [lv, av, vv.canAfford, cv, xv, Uv]),
        qv = Math.min(...Object.values(cv).map((vv => vv.at))),
        Iv = Rv && Date.now() - qv > 1500,
        Qv = mv.length > 1,
        Zv = null !== (Pv = null === (Sv = lv[av]) || void 0 === Sv ? void 0 : Sv.customTitle) && void 0 !== Pv ? Pv : av,
        Av = null === (dv = lv[av]) || void 0 === dv ? void 0 : dv.description;
      let Lv = null;
      return "market" === sv ? Lv = (0, Tv.jsx)(US, {}) : "sell" === sv ? Lv = (0, Tv.jsx)(tS, {}) : "collect" === sv ? Lv = (0, Tv.jsx)(IS, {}) : "orders" === sv ? Lv = (0, Tv.jsx)(AS, {}) : "myOrders" === sv && (Lv = (0, Tv.jsx)(LS, {})), (0, Tv.jsx)(WS.Provider, {
        value: tv,
        children: (0, Tv.jsx)("div", {
          className: "SmpShopHost",
          hidden: !iv,
          children: (0, Tv.jsxs)("div", {
            className: "SmpShop",
            children: [(0, Tv.jsx)("header", {
              className: "SmpHeader",
              children: (0, Tv.jsxs)("div", {
                className: "SmpHeaderTitle",
                children: [(0, Tv.jsxs)("h2", {
                  children: [sv && (0, Tv.jsx)(pv.b, {
                    name: MS[sv]
                  }), wv(Zv)]
                }), Av && (0, Tv.jsx)("p", {
                  children: (0, Tv.jsx)(Oh.c, {
                    text: Av
                  })
                })]
              })
            }), (0, Tv.jsx)("main", {
              className: "SmpBody",
              "data-pad-initial-area": !0,
              children: Nv && Lv
            }), (0, Tv.jsxs)("button", {
              type: "button",
              className: ev()("SmpStatus", {
                SmpStatusWaiting: Rv,
                SmpStatusFresh: !Rv && null !== Yv,
                SmpStatusHasHistory: Qv
              }),
              "aria-live": "polite",
              "aria-expanded": Qv ? fv : void 0,
              onClick: () => {
                Qv && Fv((vv => !vv))
              },
              children: [Rv ? (0, Tv.jsxs)("span", {
                className: "SmpStatusText",
                children: [(0, Tv.jsx)(Eh, {}), wv(Iv ? "smpShop:slowConnection" : "smpShop:waiting")]
              }) : mv[0] ? (0, Tv.jsx)("span", {
                className: "SmpStatusText",
                children: (0, Tv.jsx)(Oh.c, {
                  text: mv[0].text
                })
              }, mv[0].id) : (0, Tv.jsx)("span", {
                className: "SmpStatusText SmpMuted",
                children: wv("smpShop:ready")
              }), Qv && (0, Tv.jsx)("small", {
                children: wv("smpShop:recentMessages", {
                  count: mv.length
                })
              })]
            }), fv && Qv && (0, Tv.jsx)("div", {
              className: "SmpStatusHistory",
              children: mv.map((vv => (0, Tv.jsx)("div", {
                children: (0, Tv.jsx)(Oh.c, {
                  text: vv.text
                })
              }, vv.id)))
            })]
          })
        })
      })
    }
    class JS {
      constructor(vv) {
        this.info = vv
      }
      static fromShopInfo(vv) {
        const zv = {};
        for (const Pv in vv) {
          const hv = !0 === vv[Pv].redDot && !0 !== vv[Pv].forceRemoveRedDot;
          zv[Pv] = {
            redDot: hv,
            items: {}
          };
          for (const Sv in vv[Pv].items) {
            const hv = vv[Pv].items[Sv],
              ev = !0 === hv.redDot && !0 !== hv.forceRemoveRedDot;
            zv[Pv].items[Sv] = {
              redDot: ev
            }
          }
        }
        return new JS(zv)
      }
      anyCategoryHasRedDots() {
        for (const vv in this.info)
          if (this.categoryHasRedDot(vv)) return !0;
        return !1
      }
      doesCategoryExist(vv) {
        return !(0, Mz.N)(this.info[vv])
      }
      categoryHasRedDot(vv) {
        return !0 === this.info[vv].redDot
      }
      updateCategoryRedDot(vv, zv) {
        this.info[vv].redDot = zv
      }
      doesItemExist(vv, zv) {
        return this.doesCategoryExist(vv) && !(0, Mz.N)(this.info[vv].items[zv])
      }
      itemHasRedDot(vv, zv) {
        return !0 === this.info[vv].items[zv].redDot
      }
      updateItemRedDot(vv, zv, Pv) {
        this.info[vv].items[zv].redDot = Pv
      }
      shallowCopy() {
        return new JS(this.info)
      }
    }

    function ES(vv, zv) {
      return `${vv}\x1f${zv}`
    }

    function oS(vv, zv) {
      return !(0, Mz.N)(zv) && !(0, Mz.N)(vv) && zv in vv
    }
    const bS = (0, hv.memo)((function(vv) {
      var zv, Pv;
      let {
        show: Sv
      } = vv;
      const gv = (0, rP.g)("players", ze),
        pv = (0, rP.g)("players", Pe),
        lv = (0, xh.e)(),
        [wv, av] = (0, hv.useState)({
          shopInfo: {},
          userInputsPerItem: {},
          redDotInfo: JS.fromShopInfo({}),
          currencyAmounts: {},
          selectedCategoryKey: null,
          onBoughtInfo: null,
          awaitingPurchase: !1
        }),
        Cv = (0, hv.useRef)(""),
        iv = (0, hv.useRef)(null),
        Gv = (0, hv.useRef)(null),
        mv = (0, hv.useRef)(0),
        jv = (0, hv.useRef)(void 0),
        fv = (0, hv.useRef)(null),
        Fv = (0, hv.useRef)(wv),
        nv = wv.redDotInfo.anyCategoryHasRedDots(),
        [Ov, Kv] = (0, hv.useState)(null),
        Vv = (0, hv.useRef)(!1);
      let Uv = !1,
        Rv = 0,
        xv = 0;
      if (wv.currencyAmounts) {
        for (const vv in wv.currencyAmounts) {
          var tv;
          const zv = wv.currencyAmounts[vv];
          zv.hidden || (Rv++, (null === (tv = zv.subtext) || void 0 === tv ? void 0 : tv.length) > 0 && xv++)
        }
        Uv = Rv + xv > 4
      }(0, hv.useEffect)((() => {
        yz.j.zC("showShopIconRedDot", nv, !0)
      }), [nv]), (0, hv.useEffect)((() => {
        cv.gameBridge.send("setShopOpen", Sv), Sv || (clearTimeout(jv.current), av((vv => vv.awaitingPurchase ? {
          ...vv,
          awaitingPurchase: !1
        } : vv)))
      }), [Sv]), (0, hv.useEffect)((() => () => {
        cv.gameBridge.send("setShopOpen", !1), clearTimeout(jv.current)
      }), []), (0, hv.useEffect)((() => {
        Fv.current = wv
      }), [wv]), (0, hv.useEffect)((() => {
        if (null === Ov) return;
        return (0, Uh.b)("pointerdown", (vv => {
          const zv = vv.target;
          null !== zv && void 0 !== zv && zv.closest(".ShopItem") || Kv(null)
        }))
      }), [Ov]);
      const qv = vv => {
          av((zv => ({
            ...zv,
            ...vv
          })))
        },
        Iv = vv => {
          var zv;
          clearTimeout(null === (zv = wv.onBoughtInfo) || void 0 === zv ? void 0 : zv.timeout);
          const Pv = setTimeout((() => {
            qv({
              onBoughtInfo: null
            })
          }), 3e3);
          Cv.current = vv, qv({
            onBoughtInfo: {
              text: vv,
              timeout: Pv,
              categoryKey: iv.current
            }
          })
        },
        Qv = vv => {
          const {
            shopInfo: zv,
            userInputsPerItem: Pv,
            redDotInfo: hv,
            autoSelectCategory: ev
          } = function(vv, zv, Pv, hv, Sv, ev) {
            if ((0, Mz.N)(vv) || 0 === Object.keys(vv).length) return {
              shopInfo: {},
              userInputsPerItem: {},
              redDotInfo: JS.fromShopInfo({}),
              autoSelectCategory: null
            };
            const gv = Dv.k[Dv.o].adConfig.showRewardedAds,
              pv = {};
            let dv = null;
            for (const Cv in vv) {
              const zv = vv[Cv],
                Pv = {};
              let hv = !1;
              for (const vv in zv.items) {
                const Sv = zv.items[vv];
                (0, fh.k)(Sv, gv) && (Pv[vv] = Sv, hv = !0)
              }
              hv && (pv[Cv] = {
                ...zv,
                items: Pv
              }, !0 === zv.autoSelectCategory && (dv = Cv))
            }
            const Nv = {},
              lv = (vv, zv, hv, gv) => {
                var pv, dv;
                const lv = ES(vv, zv),
                  Tv = null !== (pv = Pv[lv]) && void 0 !== pv ? pv : Pv[zv];
                if (null !== (dv = gv.userInput) && void 0 !== dv && dv.type) switch (gv.userInput.type) {
                  case "dropdown": {
                    var Wv;
                    const vv = !Tv || !gv.userInput.dropdownOptions.some((vv => (0, fh.f)(vv) === Tv)),
                      zv = gv.userInput.shouldResetSelectionOnOptionsChange && ("dropdown" !== (null === hv || void 0 === hv || null === (Wv = hv.userInput) || void 0 === Wv ? void 0 : Wv.type) || JSON.stringify(hv.userInput.dropdownOptions) !== JSON.stringify(gv.userInput.dropdownOptions)),
                      Pv = gv.userInput,
                      Sv = !(0, Mz.N)(Pv.initialValue) && Pv.dropdownOptions.some((vv => (0, fh.f)(vv) === Pv.initialValue));
                    var wv;
                    return void(vv || zv ? Sv ? Nv[lv] = null !== (wv = gv.userInput.initialValue) && void 0 !== wv ? wv : null : gv.userInput.dropdownOptions.length > 0 ? Nv[lv] = (0, fh.f)(gv.userInput.dropdownOptions[0]) : Nv[lv] = null : Nv[lv] = Tv)
                  }
                  case "text":
                  case "number":
                    var av, sv, Cv;
                    return void((null === hv || void 0 === hv ? void 0 : hv.userInput) !== gv.userInput ? Nv[lv] = null !== (av = null !== (sv = gv.userInput.initialValue) && void 0 !== sv ? sv : Tv) && void 0 !== av ? av : "" : Nv[lv] = null !== (Cv = null !== Tv && void 0 !== Tv ? Tv : gv.userInput.initialValue) && void 0 !== Cv ? Cv : "");
                  case "color":
                    var iv, cv, Gv;
                    return void((null === hv || void 0 === hv ? void 0 : hv.userInput) !== gv.userInput ? Nv[lv] = null !== (iv = null !== (cv = gv.userInput.initialValue) && void 0 !== cv ? cv : Tv) && void 0 !== iv ? iv : "#000000" : Nv[lv] = null !== (Gv = null !== Tv && void 0 !== Tv ? Tv : gv.userInput.initialValue) && void 0 !== Gv ? Gv : "#000000");
                  case "player": {
                    const vv = (0, fh.h)(Sv, ev, gv.userInput);
                    return void(Tv && vv.includes(Tv) ? Nv[lv] = Tv : Nv[lv] = vv.length > 0 ? vv[0] : null)
                  }
                }
              };
            for (const Cv in pv)
              for (const vv in pv[Cv].items) {
                var Tv;
                const Pv = pv[Cv].items[vv];
                lv(Cv, vv, null === (Tv = zv[Cv]) || void 0 === Tv ? void 0 : Tv.items[vv], Pv)
              }
            const Wv = JS.fromShopInfo(pv);
            for (const Cv in pv) {
              var wv;
              if (hv.doesCategoryExist(Cv)) {
                (null === (wv = zv[Cv]) || void 0 === wv ? void 0 : wv.redDot) === pv[Cv].redDot && Wv.updateCategoryRedDot(Cv, hv.categoryHasRedDot(Cv));
                for (const vv in pv[Cv].items) {
                  var av, sv;
                  hv.doesItemExist(Cv, vv) && (null === (av = zv[Cv]) || void 0 === av || null === (sv = av.items[vv]) || void 0 === sv ? void 0 : sv.redDot) === pv[Cv].items[vv].redDot && Wv.updateItemRedDot(Cv, vv, hv.itemHasRedDot(Cv, vv))
                }
              }
            }
            return {
              shopInfo: pv,
              userInputsPerItem: Nv,
              redDotInfo: Wv,
              autoSelectCategory: dv
            }
          }(vv, wv.shopInfo, wv.userInputsPerItem, wv.redDotInfo, gv, pv), dv = {
            shopInfo: zv,
            userInputsPerItem: Pv,
            redDotInfo: hv
          };
          if (null === ev || Sv)
            if (zv[wv.selectedCategoryKey]) dv.selectedCategoryKey = wv.selectedCategoryKey;
            else {
              const vv = qh(zv);
              dv.selectedCategoryKey = vv.length > 0 ? vv[0] : null
            }
          else dv.selectedCategoryKey = ev;
          return 0 === Object.keys(zv).length && Sv && Yv.c.set({
            openEverythingMenuName: null
          }), dv
        },
        Av = (vv, zv, Pv) => {
          const hv = wv.selectedCategoryKey,
            Sv = ES(hv, vv),
            ev = null !== Pv && void 0 !== Pv ? Pv : wv.userInputsPerItem[Sv],
            gv = {
              categoryKey: hv,
              itemKey: vv,
              userInput: ev
            };
          if (iv.current = hv, zv.isRewardedAd) {
            if (Date.now() - mv.current < 5e3) return;
            (0, ez.ab)((() => {
              var Pv, hv, ev;
              console.log("bought rewarded ad");
              const pv = gv.categoryKey ? null === (Pv = Fv.current.shopInfo[gv.categoryKey]) || void 0 === Pv ? void 0 : Pv.items[vv] : null;
              if (!pv || !pv.isRewardedAd) return void console.warn("Shop item no longer valid or a rewarded ad, early out");
              (null === (hv = zv.userInput) || void 0 === hv ? void 0 : hv.type) === (null === pv || void 0 === pv || null === (ev = pv.userInput) || void 0 === ev ? void 0 : ev.type) ? (gv.userInput = Fv.current.userInputsPerItem[Sv], cv.gameBridge.send("buyShopItem", gv), zv.onBoughtMessage && Iv(zv.onBoughtMessage)) : console.warn("Shop item input type changed, early out")
            })), mv.current = Date.now()
          } else {
            cv.gameBridge.send("buyShopItem", gv), qv({
              awaitingPurchase: !0
            }), clearTimeout(jv.current), jv.current = setTimeout((() => {
              fv.current = null, qv({
                awaitingPurchase: !1
              })
            }), 1e3);
            const vv = (0, fh.d)(zv, ev);
            if (fv.current = null, !isNaN(vv) && oS(wv.currencyAmounts, zv.currency)) {
              0 !== vv && (fv.current = {
                currency: zv.currency,
                amountBefore: wv.currencyAmounts[zv.currency].amount
              });
              const Pv = {
                ...wv.currencyAmounts
              };
              Pv[zv.currency].amount -= vv, qv({
                currencyAmounts: Pv
              })
            }
            zv.onBoughtMessage && Iv(zv.onBoughtMessage)
          }
        },
        Lv = (vv, zv) => {
          if (null === zv || !vv.shopInfo[zv]) return vv;
          let Pv = vv.redDotInfo;
          return Pv.categoryHasRedDot(zv) && (Pv.updateCategoryRedDot(zv, !1), Pv = Pv.shallowCopy()), {
            ...vv,
            selectedCategoryKey: zv,
            redDotInfo: Pv
          }
        },
        Hv = vv => {
          av((zv => Lv(zv, vv)))
        };
      (0, Dz.g)(Rh.l, (() => {
        av((vv => {
          const zv = (0, Rh.m)(qh(vv.shopInfo), vv.selectedCategoryKey, (zv => (0, Rh.i)(vv.shopInfo[zv].items)));
          return zv === vv.selectedCategoryKey ? vv : Lv(vv, zv)
        }))
      })), (0, Dz.g)("showShopFromServer", (vv => {
        let {
          toggle: zv,
          pz: Pv
        } = vv;
        Pv && Hv(Pv), 0 === Object.keys(wv.shopInfo).length || zv && Sv ? Yv.c.set({
          openEverythingMenuName: null
        }) : Yv.c.set({
          openEverythingMenuName: Nz.o.SHOP
        })
      })), (0, Dz.g)("closeShopOnDamaged", (() => {
        Sv && Yv.c.set({
          openEverythingMenuName: null
        })
      })), (0, Dz.g)("overShopInfo", (vv => {
        Iv(vv)
      })), (0, sv.e)("currencyAmounts", (vv => {
        var zv;
        const Pv = fv.current;
        Pv && (null === vv || void 0 === vv || null === (zv = vv[Pv.currency]) || void 0 === zv ? void 0 : zv.amount) === Pv.amountBefore ? qv({
          currencyAmounts: vv
        }) : (fv.current = null, qv({
          currencyAmounts: vv,
          awaitingPurchase: !1
        }))
      })), (0, sv.e)("shopInfo", (vv => {
        qv({
          ...Qv(vv),
          awaitingPurchase: !1
        })
      }));
      const Mv = (0, hv.useRef)({
        playerIds: gv,
        localPlayerId: pv
      });
      (0, hv.useEffect)((() => {
        Mv.current.playerIds === gv && Mv.current.localPlayerId === pv || (Mv.current = {
          playerIds: gv,
          localPlayerId: pv
        }, av((vv => {
          const zv = Qv(vv.shopInfo);
          return {
            ...vv,
            ...zv
          }
        })))
      }), [gv, pv]);
      const yv = wv.selectedCategoryKey,
        Bv = (vv, zv) => {
          var Pv, hv;
          return (isNaN(zv) || (0, Mz.N)(vv.currency) || oS(wv.currencyAmounts, vv.currency) && zv <= wv.currencyAmounts[vv.currency].amount) && (null === (Pv = vv.canBuy) || void 0 === Pv || Pv) && !(null !== (hv = vv.hidden) && void 0 !== hv && hv)
        },
        Jv = (vv, zv) => {
          var Pv, hv, Sv;
          const gv = ES(yv, vv),
            pv = wv.shopInfo[yv].items[vv],
            lv = wv.userInputsPerItem[gv],
            Wv = (0, fh.d)(pv, lv),
            av = Bv(pv, Wv),
            sv = pv.enchant,
            Cv = sv ? (0, Zv.sb)(null !== (Pv = pv.customTitle) && void 0 !== Pv ? Pv : vv, {
              colour: Zv.nb[sv.tier]
            }) : null !== (hv = pv.customTitle) && void 0 !== hv ? hv : vv,
            iv = zv => {
              const Pv = null !== zv && void 0 !== zv ? zv : lv,
                hv = void 0 !== zv ? (0, fh.d)(pv, zv) : Wv;
              Bv(pv, hv) && null !== Pv && Av(vv, pv, zv);
              let Sv = wv.redDotInfo;
              Sv.itemHasRedDot(yv, vv) && (Sv.updateItemRedDot(yv, vv, !1), Sv = Sv.shallowCopy()), qv({
                redDotInfo: Sv
              })
            };
          return (0, Tv.jsxs)("div", {
            className: ev()("ShopItem", {
              ShopItemNoInput: !pv.userInput,
              ShopItemNoInputCanBuy: !pv.userInput && av,
              ShopItemNoInputSelected: pv.isSelected,
              ShopItemEnchant: !!sv
            }),
            "data-pad-focusable": !pv.userInput || void 0,
            "data-pad-unavailable": !pv.userInput && !av || void 0,
            "data-pad-repeat": null !== (Sv = (0, Rh.d)(pv)) && void 0 !== Sv ? Sv : void 0,
            "data-pad-repeat-wait": wv.awaitingPurchase || void 0,
            onClick: () => {
              if (sv && Vv.current) {
                if (Ov !== gv) return void Kv(gv);
                Kv(null)
              }
              pv.userInput || iv()
            },
            onPointerDown: vv => {
              sv && (Vv.current = (0, Yh.x)(vv))
            },
            onPointerEnter: vv => {
              sv && !(0, Yh.x)(vv) && Kv(gv)
            },
            onPointerLeave: vv => {
              sv && !(0, Yh.x)(vv) && Kv((vv => vv === gv ? null : vv))
            },
            style: {
              zIndex: Object.keys(wv.shopInfo[yv].items).length - zv
            },
            children: [wv.redDotInfo.itemHasRedDot(yv, vv) && (0, Tv.jsx)(dv.d, {
              top: "-6px",
              right: "-6px"
            }), pv.badge && (0, Tv.jsx)("div", {
              className: "ShopBadgeContainer",
              children: (0, Tv.jsx)("div", {
                className: ev()("ShopBadgeMain", pv.badge.type),
                children: (0, Tv.jsx)(Oh.c, {
                  text: pv.badge.text
                })
              })
            }), (0, Tv.jsx)("div", {
              className: "ShopItemLeft",
              children: pv.image && (0, Tv.jsx)(rS, {
                item: pv,
                minWidth: 5,
                minHeight: 4.8
              })
            }), (0, Tv.jsxs)("div", {
              className: "ShopItemRight",
              children: [(0, Tv.jsxs)("div", {
                className: "ShopItemHeader",
                children: [(0, Tv.jsx)("div", {
                  className: "ShopItemHeaderTitle",
                  children: (0, Tv.jsx)(Oh.c, {
                    text: Cv
                  })
                }), (0, Tv.jsx)("div", {
                  className: "ShopItemHeaderDescription",
                  children: (0, Tv.jsx)(Oh.c, {
                    text: pv.description
                  })
                })]
              }), pv.userInput && (0, Tv.jsxs)("div", {
                className: "ShopItemInputsContainer",
                onClick: vv => {
                  vv.stopPropagation()
                },
                children: [(0, Tv.jsx)(uS, {
                  item: pv,
                  currInput: lv,
                  updateInput: zv => {
                    ((vv, zv, Pv) => {
                      const hv = ES(vv, zv),
                        Sv = {
                          ...wv.userInputsPerItem
                        };
                      Sv[hv] = Pv, qv({
                        userInputsPerItem: Sv
                      })
                    })(yv, vv, zv)
                  },
                  onSubmit: vv => {
                    iv(vv)
                  }
                }), ("dropdown" !== pv.userInput.type || !pv.userInput.autoSubmit) && (0, Tv.jsx)(Nv.d, {
                  className: "ItemCostButton",
                  disabled: !av && null !== lv,
                  onClick: () => {
                    iv()
                  },
                  children: (0, Tv.jsx)(XS, {
                    item: pv,
                    cost: Wv,
                    currencyAmounts: wv.currencyAmounts
                  })
                })]
              })]
            }), !pv.userInput && (0, Tv.jsx)("div", {
              className: "ShopItemNoInputCost",
              children: (0, Tv.jsx)(XS, {
                item: pv,
                cost: Wv,
                currencyAmounts: wv.currencyAmounts
              })
            }), sv && Ov === gv && (0, Tv.jsxs)("div", {
              className: "ShopItemEnchantInfo SmallTextBold",
              children: [(0, Tv.jsx)(Oh.c, {
                text: Cv
              }), (0, Tv.jsx)("div", {
                className: "ShopItemEnchantInfoDescription",
                children: (0, Tv.jsx)(Oh.c, {
                  text: (0, Fh.e)("", sv.enchantments, sv.enchantmentData)
                })
              })]
            })]
          }, gv)
        },
        Ev = function(vv) {
          for (const zv in vv)
            if (vv[zv].smp) return !0;
          return !1
        }(wv.shopInfo),
        ov = vS(wv.shopInfo, yv);
      return (0, Tv.jsx)(Gh.b, {
        className: "Menu ShopBody",
        show: Sv,
        children: 0 !== Object.keys(wv.shopInfo).length && (0, Tv.jsxs)(Tv.Fragment, {
          children: [(0, Tv.jsxs)("div", {
            className: "MenuSideBar",
            children: [(0, Tv.jsx)(Wv, {
              items: qh(wv.shopInfo).map((vv => {
                var zv;
                return {
                  id: vv,
                  title: null !== (zv = wv.shopInfo[vv].customTitle) && void 0 !== zv ? zv : vv,
                  redDot: wv.redDotInfo.categoryHasRedDot(vv)
                }
              })),
              link: lv ? {
                faIcon: "users-gear",
                title: "lobbyManageEntry:manageLobby",
                onClick: () => {
                  (0, th.f)({
                    page: (0, th.d)(),
                    source: "shop"
                  })
                }
              } : void 0,
              selectedItemId: yv,
              onClick: Hv,
              padStartsOnTab: (0, Rh.g)(yv)
            }), (0, Tv.jsx)("div", {
              className: "MenuSideBarFooter",
              children: wv.currencyAmounts && Object.keys(wv.currencyAmounts).map((vv => {
                var zv;
                const Pv = wv.currencyAmounts[vv];
                return Pv.hidden ? null : (0, Tv.jsxs)("div", {
                  className: "ShopCurrencyDiv " + (Uv ? "SmallText" : ""),
                  children: [(0, Tv.jsxs)("div", {
                    className: "ShopCurrencyDetails",
                    children: [(0, Tv.jsx)("div", {
                      className: "ShopCurrencyAmtIcon",
                      style: {
                        color: Pv.iconColour
                      },
                      children: (0, Tv.jsx)(he, {
                        iconName: Pv.icon
                      })
                    }), "\xa0", (0, jh.d)(Pv.amount, 6)]
                  }), (null === (zv = Pv.subtext) || void 0 === zv ? void 0 : zv.length) > 0 && (0, Tv.jsx)("div", {
                    className: "ShopCurrencySubtext",
                    children: (0, Tv.jsx)(Oh.c, {
                      text: Pv.subtext
                    })
                  })]
                }, vv)
              }))
            })]
          }), (0, Tv.jsxs)("div", {
            className: "MenuBody ShopMenuBody",
            children: [Ev && (0, Tv.jsx)(BS, {
              show: Sv,
              shopInfo: wv.shopInfo,
              selectedCategoryKey: yv,
              buy: (vv, zv, Pv) => {
                Av(vv, zv, Pv)
              },
              canAfford: Bv,
              message: wv.onBoughtInfo
            }), null === ov && (0, Tv.jsxs)(Tv.Fragment, {
              children: [(0, Tv.jsx)("div", {
                className: ev()("ShopOnBoughtInfo", {
                  ShopOnBoughtInfoShow: null !== wv.onBoughtInfo
                }),
                children: (0, Tv.jsx)(Oh.c, {
                  text: Cv.current
                })
              }), (0, Tv.jsx)("div", {
                className: "ShopItemsWrapper",
                children: (0, Tv.jsxs)("div", {
                  className: "ShopItemsInner",
                  children: [(null === (zv = wv.shopInfo[yv]) || void 0 === zv ? void 0 : zv.description) && (0, Tv.jsx)("div", {
                    className: "ShopCategoryDescription",
                    children: (0, Tv.jsx)(Oh.c, {
                      text: wv.shopInfo[yv].description
                    })
                  }), Sv && (0, Tv.jsx)("div", {
                    className: "ShopItems",
                    ref: Gv,
                    "data-pad-initial-area": !0,
                    children: qh(null === (Pv = wv.shopInfo[yv]) || void 0 === Pv ? void 0 : Pv.items).map(((vv, zv) => Jv(vv, zv)))
                  })]
                })
              })]
            })]
          })]
        })
      })
    }));

    function rS(vv) {
      let {
        item: zv,
        minWidth: Pv,
        minHeight: hv
      } = vv;
      const {
        image: Sv,
        schematicId: ev,
        imageColour: gv
      } = zv;
      if (ev) return (0, Tv.jsx)("div", {
        className: "ShopSchematic",
        style: {
          width: `${Pv}rem`,
          height: `${hv}rem`
        },
        children: (0, Tv.jsx)(Dh.e, {
          game: {
            schematicId: ev
          }
        })
      });
      var dv, Nv;
      if ((0, nh.d)(Sv)) return (0, Tv.jsx)("div", {
        className: "ShopBlock",
        style: {
          minWidth: `${Pv}rem`,
          height: "0",
          minHeight: `${hv}rem`
        },
        children: (0, Tv.jsx)(nh.b, {
          itemName: Sv,
          amount: null !== (dv = zv.amount) && void 0 !== dv ? dv : 0,
          amountFontSize: hv / 4 + "rem",
          enchantmentTier: null === (Nv = zv.enchant) || void 0 === Nv ? void 0 : Nv.tier
        })
      });
      const lv = Sv.slice(-4);
      return ".jpg" === lv || ".png" === lv ? (0, Tv.jsx)(kS, {
        image: Sv,
        minWidth: Pv
      }) : (0, Tv.jsx)(pv.b, {
        name: Sv,
        className: "SelectedItemImage",
        style: {
          color: gv
        }
      })
    }

    function kS(vv) {
      let {
        image: zv,
        minWidth: Pv
      } = vv;
      const {
        gameNameWithVariation: hv
      } = (0, rP.h)("connectedGame"), Sv = zv.endsWith(".jpg");
      return (0, Tv.jsx)("img", {
        className: ev()({
          ShopPixelImage: !Sv
        }),
        style: {
          width: `${Sv?1.6*Pv:Pv}rem`,
          height: "auto",
          fontSize: "1.25rem"
        },
        src: `/textures/games/${(0,Zv.Pb)(hv)}/${zv}`,
        alt: zv,
        draggable: !1
      })
    }

    function XS(vv) {
      let {
        item: zv,
        cost: Pv,
        currencyAmounts: hv
      } = vv;
      const Sv = !isNaN(Pv) && 0 !== Pv && oS(hv, zv.currency);
      let ev = null;
      return zv.buyButtonText ? ev = zv.buyButtonText : Sv ? (ev = Pv, zv.sell && (ev = -1 * Pv), ev = ev.toString()) : 0 === Pv ? ev = "Free" : zv.isRewardedAd && (ev = "Watch ad"), (0, Mz.N)(ev) || " " === ev ? null : (0, Tv.jsxs)("div", {
        className: "BuyItemCostAndIcon",
        children: [Sv && (0, Tv.jsx)("div", {
          style: {
            color: hv[zv.currency].iconColour
          },
          className: "BuyItemIcon",
          children: (0, Tv.jsx)(he, {
            iconName: hv[zv.currency].icon
          })
        }), (0, Tv.jsx)("div", {
          className: "BuyItemCost",
          children: (0, Tv.jsx)(Oh.c, {
            text: ev
          })
        })]
      })
    }

    function uS(vv) {
      let {
        item: zv,
        currInput: Pv,
        updateInput: Sv,
        onSubmit: ev
      } = vv;
      const {
        t: pv
      } = (0, gv.x)(), dv = (0, hv.useRef)(null);
      if ((0, hv.useEffect)((() => {
          const vv = dv.current;
          vv && vv.value !== Pv && document.activeElement !== vv && (vv.value = null !== Pv && void 0 !== Pv ? Pv : "")
        }), [Pv]), !zv.userInput) return null;
      let Nv = zv.userInput;
      if (iv.featureFlags.sanitizeShopInput && "text" === zv.userInput.type && (Nv = {
          type: "number",
          placeholderText: "Numbers Only"
        }), "text" === Nv.type || "number" === Nv.type) {
        var lv, Wv;
        console.assert(void 0 !== Pv, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(zv)}`);
        const vv = "text" === Nv.type && Nv.wordCharsOnly;
        return (0, Tv.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputTextWrapper",
          children: (0, Tv.jsx)(jv.c, {
            className: "ShopItemUserInputText",
            placeholderText: pv(Nv.placeholderText),
            defaultValue: Pv,
            domRef: dv,
            onValueChange: (zv, Pv) => {
              !0 === vv && (zv = (0, Vh.kb)(zv)), dv.current.value = zv, Sv(zv)
            },
            onEnter: ev,
            type: Nv.type
          }, (null !== (lv = Nv.initialValue) && void 0 !== lv ? lv : "") + (null !== (Wv = Nv.placeholderText) && void 0 !== Wv ? Wv : ""))
        })
      }
      if ("dropdown" === Nv.type) {
        console.assert(void 0 !== Pv, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(zv)}`);
        const vv = Nv.autoSubmit;
        return (0, Tv.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputDropdown",
          children: (0, Tv.jsx)(jz.e, {
            options: Nv.dropdownOptions.map((vv => (0, fh.f)(vv))),
            value: Pv,
            onChange: zv => {
              let {
                value: Pv
              } = zv;
              Sv(Pv), vv && ev(Pv)
            }
          })
        })
      }
      return "player" === Nv.type ? (0, Tv.jsx)(ve, {
        userInput: Nv,
        currInput: Pv,
        updateInput: Sv
      }) : "color" === Nv.type ? (0, Tv.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputColor",
        children: (0, Tv.jsx)("input", {
          type: "color",
          value: Pv,
          onChange: vv => {
            Sv(vv.target.value)
          }
        })
      }) : null
    }

    function ve(vv) {
      let {
        userInput: zv,
        currInput: Pv,
        updateInput: hv
      } = vv;
      const Sv = (0, rP.h)("players"),
        ev = (0, rP.h)("hiddenPlayerNames"),
        gv = (0, fh.h)(Sv.ids, Sv.localId, zv);
      return (0, Tv.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputDropdown",
        children: (0, Tv.jsx)(jz.e, {
          options: gv.map((vv => {
            const {
              name: zv
            } = Sv.byId[vv];
            return {
              value: vv,
              label: null === zv ? "" : (0, Kh.f)(zv, ev)
            }
          })),
          value: Pv,
          onChange: vv => {
            let {
              value: zv
            } = vv;
            hv(zv)
          }
        })
      })
    }

    function ze(vv) {
      let {
        ids: zv
      } = vv;
      return zv
    }

    function Pe(vv) {
      let {
        localId: zv
      } = vv;
      return zv
    }

    function he(vv) {
      let {
        iconName: zv
      } = vv;
      return cv.gameBridge.lookup("isItemName", zv) ? (0, Tv.jsx)(nh.b, {
        itemName: zv,
        amount: 1
      }) : (0, Tv.jsx)(pv.b, {
        name: zv,
        className: "2x"
      })
    }
    var Se = Pv(1610);
    const ee = (0, Pv(1387).i)((vv => vv.PadLobbyShortcuts)),
      ge = (0, hv.lazy)((() => Promise.resolve().then((() => Pv(4420))).then((vv => ({
        default: vv.Lobbyleaderboard
      }))))),
      pe = (0, hv.lazy)((() => Pv.e(214).then((() => Pv(40372))).then((vv => ({
        default: vv.LobbyManageView
      })))));

    function de(vv) {
      let {
        show: zv
      } = vv;
      return zv ? (0, Tv.jsx)(Ne, {}) : null
    }

    function Ne() {
      const vv = (0, xh.e)();
      return (0, Tv.jsxs)(Tv.Fragment, {
        children: [(0, Tv.jsx)(ee, {}), (0, Tv.jsxs)(hv.Suspense, {
          fallback: (0, Tv.jsx)("div", {
            className: "CharacterCustomisationLoading",
            children: (0, Tv.jsx)(fv.c, {})
          }),
          children: [vv && (0, Tv.jsx)(pe, {
            leaderboard: (0, Tv.jsx)(ge, {})
          }), !vv && (0, Tv.jsx)(ge, {})]
        })]
      })
    }
    var le = Pv(1542),
      Te = Pv(2793),
      We = Pv(1692),
      we = Pv(2845),
      ae = Pv(2522),
      se = Pv(1475),
      Ce = Pv(1445),
      ie = Pv(2769),
      ce = Pv(2787),
      Ge = Pv(2253);
    const me = "storeRecentGiftRecipients",
      je = new Map;

    function fe() {
      try {
        const vv = Jz.h.getItem(me);
        return Array.isArray(vv) ? vv.filter((vv => "string" === typeof(null === vv || void 0 === vv ? void 0 : vv.name) && vv.name.length > 0)).map((vv => ({
          name: vv.name,
          cosmetics: vv.cosmetics && "object" === typeof vv.cosmetics ? vv.cosmetics : null
        }))) : []
      } catch {
        return []
      }
    }

    function Fe(vv) {
      var zv;
      const [Pv, Sv] = (0, hv.useState)(""), [ev, gv] = (0, hv.useState)("search"), [pv, dv] = (0, hv.useState)(null), [Nv, lv] = (0, hv.useState)(null), Tv = (0, hv.useRef)(null), Wv = (0, hv.useRef)(null);
      (0, hv.useEffect)((() => () => {
        Tv.current && clearTimeout(Tv.current)
      }), []);
      const wv = null !== (zv = null === pv || void 0 === pv ? void 0 : pv.name) && void 0 !== zv ? zv : null;

      function av() {
        Tv.current && (clearTimeout(Tv.current), Tv.current = null)
      }(0, hv.useEffect)((() => {
        if (null === wv || vv === Kv.NULL_USER_CONTEXT) return;
        const zv = wv.toLowerCase();
        if (zv === vv.getPlayerName().toLowerCase()) return void lv({
          name: wv,
          result: {
            giftRecipientFound: !1,
            giftRecipientError: "store:giftRecipientIsYou"
          }
        });
        const Pv = je.get(zv);
        if (Pv) return void lv({
          name: wv,
          result: Pv
        });
        let hv = !1;
        return async function(vv, zv) {
          try {
            const Pv = await (0, Kv.postJsonWithMetricsCookiesAndJsonResponse)(`${Vv.clientSideServerUrls.indexUrl}/index/store/gift-recipient`, {
              giftRecipientName: zv
            }, {
              retries: 1
            }, vv.getMetricsCookies());
            if ("boolean" !== typeof(null === Pv || void 0 === Pv ? void 0 : Pv.giftRecipientFound)) throw new Error(`Unexpected gift recipient lookup response: ${JSON.stringify(Pv)}`);
            return Pv
          } catch (Pv) {
            return console.error("Failed to look up gift recipient:", Pv), {
              giftRecipientFound: !1,
              giftRecipientError: "store:giftRecipientLookupFailed"
            }
          }
        }(vv, wv).catch((vv => (console.error("Gift recipient lookup failed:", vv), {
          giftRecipientFound: !1,
          giftRecipientError: "store:giftRecipientLookupFailed"
        }))).then((vv => {
          !0 !== vv.giftRecipientFound && "store:giftRecipientLookupFailed" === vv.giftRecipientError || je.set(zv, vv), hv || lv({
            name: wv,
            result: vv
          })
        })), () => {
          hv = !0
        }
      }), [wv, vv]);
      const sv = (0, hv.useMemo)((() => {
        const vv = Pv.trim();
        if (!vv) return {
          status: "none"
        };
        if (!pv || pv.name !== vv || (null === Nv || void 0 === Nv ? void 0 : Nv.name) !== pv.name) return {
          status: "pending",
          name: vv
        };
        const zv = Nv.result;
        return !1 === zv.giftRecipientFound ? {
          status: "error",
          name: pv.name,
          error: zv.giftRecipientError
        } : {
          status: "found",
          name: zv.giftRecipientName,
          ownedPacks: zv.giftRecipientOwnedPacks,
          hasSuperRank: zv.giftRecipientHasSuperRank,
          isSubscriber: zv.giftRecipientIsSubscriber
        }
      }), [Pv, pv, Nv]);
      (0, hv.useEffect)((() => {
        "found" === sv.status && "typed" === (null === pv || void 0 === pv ? void 0 : pv.source) && Wv.current !== sv.name && (Wv.current = sv.name, (0, Xv.reportAnalyticsClick)({
          id: "store.gift_recipient",
          value: "typed"
        }))
      }), [sv, pv]);
      const Cv = (null === Nv || void 0 === Nv ? void 0 : Nv.name) === (null === pv || void 0 === pv ? void 0 : pv.name) ? null === Nv || void 0 === Nv ? void 0 : Nv.result : null,
        iv = !0 === (null === Cv || void 0 === Cv ? void 0 : Cv.giftRecipientFound) ? Cv.giftRecipientCosmetics : null;
      return {
        query: Pv,
        via: ev,
        recipient: sv,
        recipientCosmetics: iv,
        type: function(vv) {
          Sv(vv), gv("search"), av();
          const zv = vv.trim();
          zv ? Tv.current = setTimeout((() => {
            dv({
              name: zv,
              source: "typed"
            })
          }), 400) : dv(null)
        },
        choose: function(vv, zv) {
          av(), Sv(vv), gv("typed" === zv ? "search" : "prefilled" === zv ? "prefilled" : "suggestion"), dv({
            name: vv,
            source: zv
          }), "typed" !== zv && "prefilled" !== zv && (0, Xv.reportAnalyticsClick)({
            id: "store.gift_recipient",
            value: zv
          })
        },
        clear: function() {
          av(), Sv(""), gv("search"), dv(null)
        },
        recordGift: function(vv, zv) {
          ! function(vv) {
            je.delete(vv.toLowerCase())
          }(vv), lv((Pv => {
            if (!Pv || Pv.name.toLowerCase() !== vv.toLowerCase() || !0 !== Pv.result.giftRecipientFound || "superRank" === zv) return Pv;
            const hv = Pv.result.giftRecipientOwnedPacks;
            return {
              ...Pv,
              result: {
                ...Pv.result,
                giftRecipientOwnedPacks: hv.includes(zv) ? hv : [...hv, zv]
              }
            }
          }))
        }
      }
    }
    var Ye = Pv(2251),
      ne = Pv(4426),
      Oe = Pv(250),
      De = Pv(2904);
    const Ke = ["pointerdown", "pointermove", "keydown", "wheel", "touchstart", "scroll", "blur", "focus"];
    var Ve = Pv(2205),
      Ue = Pv(602),
      Re = Pv(2279),
      xe = Pv(2432);

    function te(vv) {
      let {
        cosmetics: zv
      } = vv;
      return (0, Tv.jsx)("span", {
        className: "StoreRecipientAvatar",
        children: (0, Tv.jsx)(Re.e, {
          cosmetics: zv
        })
      })
    }

    function qe(vv, zv) {
      var Pv, hv;
      const Sv = null !== (Pv = vv.friend) && void 0 !== Pv ? Pv : {
        isError: !1,
        name: vv.name,
        ranks: [],
        cosmetics: null !== (hv = vv.cosmetics) && void 0 !== hv ? hv : {},
        nameColour: Ue.d,
        location: {
          status: "noGamePlayed"
        }
      };
      return zv ? {
        ...Sv,
        cosmetics: zv
      } : Sv
    }

    function Ie(vv) {
      let {
        pending: zv
      } = vv;
      return (0, Tv.jsx)("span", {
        className: "StoreRecipientLoader",
        children: zv && (0, Tv.jsx)(fv.c, {})
      })
    }

    function Qe(vv) {
      var zv;
      let {
        selfName: Pv,
        giftRecipient: Sv,
        suggestionsVersion: dv,
        pulseSignal: lv,
        disabled: Wv
      } = vv;
      const {
        t: wv
      } = (0, gv.x)(), av = (0, Mv.l)(), sv = (0, hv.useRef)(null), Cv = (0, hv.useRef)(null), {
        query: cv,
        via: Gv,
        recipient: mv,
        recipientCosmetics: fv
      } = Sv, Fv = (0, Ge.k)(cv), Yv = (0, hv.useMemo)((() => {
        const vv = iv.featureFlags.useSocialFeatures ? av.friends.filter((vv => !vv.isError)) : [];
        return (0, Ge.e)({
          onlineFriends: (0, Mv.g)(vv),
          recentRecipients: fe(),
          friends: vv,
          selfName: Pv,
          max: 8
        })
      }), [av.friends, Pv, dv]), nv = cv.trim().toLowerCase(), Ov = "search" !== Gv && nv ? Yv.find((vv => vv.name.toLowerCase() === nv)) : void 0, Dv = Ov && "prefilled" === Gv ? [Ov, ...Yv.filter((vv => vv !== Ov))] : Yv, Kv = "" !== nv && !Ov, Vv = Kv ? cv : "", Uv = Dv.length > 0;
      (0, hv.useEffect)((() => {
        sv.current && sv.current.value !== Vv && (sv.current.value = Vv)
      }), [Vv]), (0, hv.useEffect)((() => {
        sv.current && (sv.current.disabled = Wv)
      }), [Wv, lv]);
      const Rv = (0, hv.useRef)(0);

      function tv() {
        "self" !== Fv && (0, Xv.reportAnalyticsClick)({
          id: "store.mode",
          value: "self"
        }), Sv.clear()
      }

      function qv(vv) {
        var zv, Pv;
        if (Wv) return;
        if (" " === vv.key || "Enter" === vv.key) return vv.preventDefault(), void vv.currentTarget.click();
        const hv = Array.from(null !== (zv = null === (Pv = Cv.current) || void 0 === Pv ? void 0 : Pv.querySelectorAll("[role=radio]")) && void 0 !== zv ? zv : []),
          Sv = hv.indexOf(vv.currentTarget);
        let ev;
        "ArrowRight" === vv.key || "ArrowDown" === vv.key ? ev = hv[(Sv + 1) % hv.length] : "ArrowLeft" === vv.key || "ArrowUp" === vv.key ? ev = hv[(Sv - 1 + hv.length) % hv.length] : "Home" === vv.key ? ev = hv[0] : "End" === vv.key && (ev = hv[hv.length - 1]), ev && (vv.preventDefault(), ev.focus(), ev.click())
      }(0, hv.useEffect)((() => {
        var vv;
        lv > Rv.current && !Wv && (Rv.current = lv, null === (vv = sv.current) || void 0 === vv || vv.focus())
      }), [lv, Wv]);
      const Iv = "self" === Fv,
        Qv = null !== (zv = null === Ov || void 0 === Ov ? void 0 : Ov.name) && void 0 !== zv ? zv : null,
        Zv = "error" === mv.status ? mv.error : null,
        Av = "store:giftRecipientLookupFailed" === Zv;
      return (0, Tv.jsxs)("div", {
        className: ev()("StoreRecipientStrip", {
          StoreRecipientStripDisabled: Wv,
          StoreRecipientStripNoChips: !Uv
        }),
        children: [(0, Tv.jsx)("span", {
          className: "StoreRecipientLabel",
          "aria-hidden": !0,
          children: wv("store:buyingFor")
        }), (0, Tv.jsxs)("div", {
          ref: Cv,
          className: "StoreRecipientRadios",
          role: "radiogroup",
          "aria-label": wv("store:whoIsItFor"),
          children: [(0, Tv.jsxs)("div", {
            role: "radio",
            "data-pad-focusable": !0,
            "aria-checked": Iv,
            tabIndex: Wv || !Iv && null !== Qv ? -1 : 0,
            className: ev()("StoreRecipientMe", {
              StoreRecipientChecked: Iv
            }),
            onClick: () => {
              Wv || tv()
            },
            onKeyDown: qv,
            children: [(0, Tv.jsx)(pv.b, {
              name: "user"
            }), " ", wv("store:me")]
          }), Uv && (0, Tv.jsx)("div", {
            className: "StoreRecipientChips",
            children: Dv.map((vv => {
              const zv = vv === Ov;
              return (0, Tv.jsx)("div", {
                role: "radio",
                "data-pad-focusable": !0,
                "aria-checked": zv,
                tabIndex: !Wv && zv ? 0 : -1,
                title: vv.name,
                className: ev()("StoreRecipientChip", {
                  StoreRecipientChecked: zv
                }),
                onClick: () => {
                  Wv || function(vv) {
                    "gift" !== Fv && (0, Xv.reportAnalyticsClick)({
                      id: "store.mode",
                      value: "gift"
                    }), Sv.choose(vv.name, vv.kind)
                  }(vv)
                },
                onKeyDown: qv,
                children: (0, Tv.jsx)(xe.e, {
                  playerSocialPreview: qe(vv, zv ? fv : null),
                  opensProfileCard: !1,
                  isFriend: null !== vv.friend,
                  hideFriendBadge: !0,
                  showLocation: null !== vv.friend,
                  status: null === vv.friend ? null : void 0,
                  trailing: zv ? (0, Tv.jsx)(Ie, {
                    pending: "pending" === mv.status
                  }) : void 0
                })
              }, vv.name)
            }))
          })]
        }), (0, Tv.jsxs)("div", {
          className: ev()("StoreRecipientSearch", {
            StoreRecipientChecked: Kv,
            StoreRecipientSearchPulse: lv > 0 && !Kv,
            StoreRecipientSearchError: null !== Zv && !Av
          }),
          onClick: () => {
            var vv;
            null === (vv = sv.current) || void 0 === vv || vv.focus()
          },
          children: [Kv && "found" === mv.status && fv && (0, Tv.jsx)(te, {
            cosmetics: fv
          }), !(Kv && "found" === mv.status && fv) && (0, Tv.jsx)(pv.b, {
            name: "magnifying-glass",
            className: "StoreRecipientSearchIcon"
          }), (0, Tv.jsx)(jv.c, {
            className: "StoreRecipientSearchInput",
            domRef: sv,
            placeholderText: wv("store:searchName"),
            defaultValue: Vv,
            maxLength: xv.f,
            onValueChange: function(vv) {
              "gift" !== Fv && vv.trim() && (0, Xv.reportAnalyticsClick)({
                id: "store.mode",
                value: "gift"
              }), Sv.type(vv)
            },
            onEnter: () => {
              var vv;
              const zv = null === (vv = sv.current) || void 0 === vv ? void 0 : vv.value.trim();
              zv && Sv.choose(zv, "typed")
            },
            blurOnEnter: !0
          }), Kv && (0, Tv.jsx)(Ie, {
            pending: "pending" === mv.status
          }), Kv && (0, Tv.jsx)("div", {
            ...(0, Nv.U)({
              disabled: Wv
            }),
            "aria-label": wv("store:clearRecipient"),
            title: wv("store:clearRecipient"),
            className: "StoreRecipientClear",
            onClick: vv => {
              vv.stopPropagation(), Wv || tv()
            },
            children: (0, Tv.jsx)(pv.b, {
              name: "xmark"
            })
          })]
        }, lv), Zv && (0, Tv.jsx)("div", {
          className: ev()("StoreRecipientPopover", {
            StoreRecipientPopoverSoft: Av
          }),
          role: "status",
          children: wv(Zv)
        })]
      })
    }
    var Ze = Pv(2248),
      Ae = Pv(2189),
      Le = Pv(3334),
      He = Pv(2910),
      Me = Pv(2213);
    const ye = Pv.p + "static/media/superRankPreviewPoster.e64783181b692cc31e08.webp";

    function Be() {
      (0, Me.j)(ye, {
        lowPriority: !1
      })
    }

    function Je(vv) {
      let {
        onBack: zv,
        cta: Pv,
        recipient: Sv,
        afterCta: ev
      } = vv;
      const {
        t: dv
      } = (0, gv.x)(), [lv, Wv] = (0, hv.useState)("starting"), wv = (0, hv.useRef)(null), av = (0, Uz.b)(), sv = (0, hv.useRef)(null), Cv = (0, hv.useCallback)((() => {
        const vv = wv.current;
        null !== vv.error && vv.load();
        const zv = vv.play();
        sv.current = zv, zv.catch((vv => {
          (0, Le.d)("Failed to play Super Rank video", vv), av.current && sv.current === zv && Wv("failed")
        }))
      }), [av]);
      return (0, hv.useEffect)((() => {
        const vv = wv.current;
        let zv;

        function Pv() {
          clearTimeout(zv), zv = setTimeout(Cv, 3e3)
        }
        return Cv(), vv.addEventListener("ended", Pv), () => {
          clearTimeout(zv), vv.removeEventListener("ended", Pv)
        }
      }), [Cv]), (0, Tv.jsxs)("div", {
        className: "StoreSuperRankDetail",
        children: [(0, Tv.jsxs)("div", {
          className: "StoreDetailHeader",
          children: [(0, Tv.jsx)(Nv.b, {
            className: "StoreDetailBackButton",
            onClick: zv,
            padBack: !0,
            children: dv("general:back")
          }), (0, Tv.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, Tv.jsx)(pv.b, {
              name: "bolt"
            }), " ", dv("homePage:superRank")]
          }), Sv]
        }), (0, Tv.jsxs)("div", {
          className: "StoreSuperRankDetailBody",
          children: [(0, Tv.jsxs)("div", {
            className: "StoreSuperRankVideo",
            children: [(0, Tv.jsx)("video", {
              ref: wv,
              src: `${Vv.clientSideServerUrls.staticUrl}/videos/SuperRankPreview.mp4`,
              poster: ye,
              muted: !0,
              playsInline: !0,
              controls: "playing" === lv,
              onPlaying: () => {
                Wv("playing")
              },
              onError: () => {
                Wv("failed")
              }
            }), ("failed" === lv || "loading" === lv) && (0, Tv.jsx)("div", {
              className: "StoreSuperRankPlay",
              children: (0, Tv.jsx)(Nv.d, {
                ariaLabel: dv("general:play"),
                loading: "loading" === lv,
                onClick: () => {
                  Wv("loading"), Cv()
                },
                touchPressOn: "pointerup",
                children: (0, Tv.jsx)(pv.b, {
                  name: "play"
                })
              })
            })]
          }), (0, Tv.jsxs)("div", {
            className: "StoreSuperRankDetailSide",
            children: [(0, Tv.jsx)("div", {
              className: "StoreSuperRankDetailTable",
              children: (0, Tv.jsx)(He.e, {})
            }), (0, Tv.jsxs)("div", {
              className: "StoreTileActions",
              children: [Pv, ev]
            })]
          })]
        })]
      })
    }
    var Ee = Pv(2448),
      oe = Pv(3295),
      be = Pv(2885),
      re = Pv(2892);
    const ke = [Ue.s.yellow, Ue.s.green, Ue.s.aqua, Ue.s.blue, Ue.s.purple, Ue.s.red];

    function Xe(vv) {
      return "needsRecipient" === vv || "lookingUp" === vv || "gift" === vv || "recipientOwns" === vv || "recipientSharesOwned" === vv || "recipientSubscribed" === vv
    }

    function ue(vv) {
      const {
        onKeyDown: zv,
        ...Pv
      } = (0, Nv.U)();
      return {
        ...Pv,
        "aria-label": vv,
        onKeyDown: vv => {
          vv.target === vv.currentTarget && (null === zv || void 0 === zv || zv(vv))
        }
      }
    }

    function vg(vv) {
      let {
        text: zv
      } = vv;
      return (0, Tv.jsx)("span", {
        className: "StoreRainbowText",
        children: Array.from(zv).map(((vv, zv) => (0, Tv.jsx)("span", {
          style: {
            color: ke[zv % ke.length]
          },
          children: vv
        }, zv)))
      })
    }
    const zg = {
      recipientOwns: "store:alreadyOwns",
      sharesOwned: "store:sharesOwned",
      recipientSharesOwned: "store:recipientSharesOwned",
      subscribed: "store:subscribed",
      recipientSubscribed: "store:recipientSubscribed"
    };

    function Pg(vv) {
      let {
        state: zv,
        item: Pv,
        price: hv,
        busy: Sv,
        highlight: dv = !1,
        onAct: lv,
        onNeedRecipient: Wv,
        onLogin: wv
      } = vv;
      const {
        t: av
      } = (0, gv.x)(), sv = "superRank" === Pv ? qv.k.product.days : null, Cv = vv => null === sv ? av(vv ? "general:gift" : "general:buy") : av(vv ? "store:giftDays" : "store:buyDays", {
        days: sv
      }), iv = (vv, zv) => {
        const Pv = (0, Tv.jsxs)(Tv.Fragment, {
          children: [null === vv && (0, Tv.jsx)("span", {
            className: "StoreCtaLabel StoreCtaLabelPending"
          }), null !== vv && (0, Tv.jsx)("span", {
            className: "StoreCtaLabel",
            title: vv,
            children: vv
          })]
        });
        return null !== sv ? (0, Tv.jsxs)(Tv.Fragment, {
          children: [zv && (0, Tv.jsx)("span", {
            className: "StoreCtaIcon",
            children: zv
          }), Pv, (0, Tv.jsxs)("span", {
            className: "StoreCtaPrice",
            children: ["\xb7", (0, Tv.jsx)(Ae.e, {
              amount: hv
            })]
          })]
        }) : (0, Tv.jsxs)(Tv.Fragment, {
          children: [(0, Tv.jsxs)("span", {
            className: "StoreCtaLead",
            children: [Pv, "\xb7"]
          }), (0, Tv.jsxs)("span", {
            className: "StoreCtaPrice",
            children: [zv, (0, Tv.jsx)(Ae.e, {
              amount: hv
            })]
          })]
        })
      };
      let cv;
      switch (zv) {
        case "pending":
          cv = (0, Tv.jsx)(Nv.j, {
            className: "StoreCtaButton",
            disabled: !0,
            children: iv(null)
          });
          break;
        case "login":
          cv = (0, Tv.jsx)(Nv.j, {
            className: "StoreCtaButton",
            onClick: wv,
            children: iv(Cv(!1))
          });
          break;
        case "owned":
          cv = (0, Tv.jsx)(Nv.e, {
            className: "StoreCtaButton",
            onClick: () => {
              Yv.c.set({
                openEverythingMenuName: Nz.o.CUSTOMISATION
              })
            },
            children: (0, Tv.jsxs)("span", {
              className: "StoreCtaLabel",
              children: [(0, Tv.jsx)(pv.b, {
                name: "shirt"
              }), " ", av("store:equip")]
            })
          });
          break;
        case "recipientOwns":
        case "sharesOwned":
        case "recipientSharesOwned":
        case "subscribed":
        case "recipientSubscribed":
          cv = (0, Tv.jsx)(Nv.j, {
            className: "StoreCtaButton",
            disabled: !0,
            children: (0, Tv.jsx)("span", {
              className: "StoreCtaLabel",
              children: av(zg[zv])
            })
          });
          break;
        case "needsRecipient":
        case "lookingUp":
        case "gift":
          cv = (0, Tv.jsx)(Nv.j, {
            className: "StoreCtaButton",
            disabled: "needsRecipient" === zv || null === hv,
            loading: "lookingUp" === zv || Sv,
            onClick: lv,
            analyticsClick: {
              id: "store.gift",
              value: Pv
            },
            children: iv(Cv(!0), Ge.b)
          });
          break;
        case "buy":
        case "recharge":
          cv = (0, Tv.jsx)(Nv.j, {
            className: "StoreCtaButton",
            loading: Sv,
            disabled: null === hv,
            onClick: lv,
            analyticsClick: {
              id: "store.buy",
              value: Pv
            },
            children: iv(Cv(!1))
          })
      }
      return (0, Tv.jsx)("div", {
        className: ev()("StoreCta", {
          StoreCtaHighlight: dv,
          StoreCtaLabelFirst: null !== sv
        }),
        onClick: vv => {
          vv.stopPropagation(), "needsRecipient" === zv && Wv()
        },
        children: cv
      })
    }

    function hg() {
      const {
        t: vv
      } = (0, gv.x)();
      return (0, Tv.jsxs)("ul", {
        className: "StorePerks",
        children: [(0, Tv.jsxs)("li", {
          children: [(0, Tv.jsx)(pv.b, {
            name: "check"
          }), (0, Tv.jsx)(vg, {
            text: vv("store:colourfulNames")
          })]
        }), (0, Tv.jsxs)("li", {
          children: [(0, Tv.jsx)(pv.b, {
            name: "check"
          }), vv("store:perkCapes")]
        }), (0, Tv.jsxs)("li", {
          children: [(0, Tv.jsx)(pv.b, {
            name: "check"
          }), vv("store:perkNoAdverts")]
        }), (0, Tv.jsxs)("li", {
          children: [(0, Tv.jsx)(pv.b, {
            name: "check"
          }), vv("store:perkFriends", {
            count: (0, rv.d)(["super"])
          })]
        })]
      })
    }

    function Sg(vv) {
      let {
        daysLeft: zv,
        totalDays: Pv,
        urgent: hv
      } = vv;
      const {
        t: Sv
      } = (0, gv.x)(), pv = Pv > 0 ? Math.min(1, Math.max(.03, zv / Pv)) : 1;
      return (0, Tv.jsxs)("div", {
        className: ev()("StoreSuperRankMeterArea", {
          StoreSuperRankMeterUrgent: hv
        }),
        children: [(0, Tv.jsx)("span", {
          className: "StoreSuperRankDaysLeft",
          children: 1 === zv ? Sv("store:oneDayLeft") : Sv("store:daysLeft", {
            days: zv
          })
        }), (0, Tv.jsx)("div", {
          className: "StoreSuperRankMeter",
          children: (0, Tv.jsx)("i", {
            style: {
              width: 100 * pv + "%"
            }
          })
        })]
      })
    }

    function eg(vv) {
      let {
        state: zv,
        urgent: Pv,
        daysLeft: hv,
        totalDays: Sv,
        recipientHasSuperRank: dv,
        busy: Nv,
        highlight: lv,
        onOpen: Wv,
        onAct: wv,
        onNeedRecipient: av,
        onLogin: sv
      } = vv;
      const {
        t: Cv
      } = (0, gv.x)(), iv = Xe(zv), {
        days: cv
      } = qv.k.product, Gv = Cv("store:recipientHasSuperRank", {
        giftDays: cv
      }), mv = ov("subscribed" === zv);
      return (0, Tv.jsxs)("div", {
        className: ev()("StoreTile StoreSuperRankTile", {
          StoreTileGift: iv,
          StoreSuperRankTileUrgent: "recharge" === zv && Pv,
          StoreSuperRankTileWithChip: dv,
          StoreSuperRankTileGiftReady: "gift" === zv
        }),
        ...ue(Cv("homePage:superRank")),
        "data-store-item": "superRank",
        onPointerEnter: Be,
        onFocus: Be,
        onClick: Wv,
        children: [(0, Tv.jsx)("div", {
          className: "StoreSuperRankArt",
          style: {
            backgroundImage: `url(${Ve.f})`
          }
        }), iv && (0, Tv.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, Tv.jsxs)("div", {
          className: "StoreTileContent",
          children: [dv && (0, Tv.jsx)("span", {
            className: "StoreChip StoreChipGift",
            title: Gv,
            children: Gv
          }), (0, Tv.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, Tv.jsx)(pv.b, {
              name: "bolt"
            }), " ", Cv("homePage:superRank")]
          }), iv && (0, Tv.jsx)("div", {
            className: "StoreTilePitch",
            children: Cv("store:giftPitch", {
              days: cv
            })
          }), "recharge" === zv && (0, Tv.jsx)(Sg, {
            daysLeft: hv,
            totalDays: Sv,
            urgent: Pv
          }), mv && (0, Tv.jsx)("div", {
            className: "StoreSuperRankMeterArea",
            children: (0, Tv.jsx)("span", {
              className: "StoreSuperRankDaysLeft",
              children: mv
            })
          }), (0, Tv.jsx)(hg, {}), (0, Tv.jsxs)("div", {
            className: "StoreTileActions",
            children: [(0, Tv.jsx)(Pg, {
              state: zv,
              item: "superRank",
              price: qv.k.price,
              busy: Nv,
              highlight: lv,
              onAct: wv,
              onNeedRecipient: av,
              onLogin: sv
            }), "needsRecipient" === zv && (0, Tv.jsx)("span", {
              className: "StoreTileNote StoreTileNoteGift",
              children: Cv("store:pickRecipientFirst")
            }), "recharge" === zv && Pv && (0, Tv.jsx)("span", {
              className: "StoreTileNote StoreSuperRankEnding",
              children: 1 === hv ? Cv("store:endsInOneDay") : Cv("store:endsInDays", {
                days: hv
              })
            })]
          })]
        })]
      })
    }
    const gg = {
      common: "StorePackTileCommon",
      rare: "StorePackTileRare",
      epic: "StorePackTileEpic",
      legendary: "StorePackTileLegendary",
      mythic: "StorePackTileMythic"
    };

    function pg(vv) {
      var zv;
      let {
        pack: Pv,
        state: Sv,
        busy: dv,
        onOpen: Nv,
        onAct: lv,
        onNeedRecipient: Wv,
        onLogin: wv
      } = vv;
      const {
        t: av
      } = (0, gv.x)(), sv = le.b[Pv], Cv = ie.k[Pv], iv = (0, Ve.p)(Pv), cv = (0, hv.useRef)(null);
      (0, be.m)(Pv, cv);
      const Gv = Xe(Sv),
        mv = null !== (zv = sv.displayName) && void 0 !== zv ? zv : Pv,
        jv = (0, oe.c)((() => {
          (0, Ee.f)();
          const vv = (0, be.f)(Pv);
          void 0 !== vv && (0, Me.j)((0, be.e)(vv))
        })),
        [fv] = (0, hv.useState)(De.j);
      return (0, Tv.jsxs)("div", {
        className: ev()("StoreTile StorePackTile", gg[sv.tier], {
          StorePackTileOwned: "owned" === Sv,
          StorePackTileRecipientOwns: "recipientOwns" === Sv,
          StoreTileGift: Gv
        }),
        ...ue(mv),
        ref: cv,
        "data-store-item": Pv,
        onClick: Nv,
        onPointerMove: vv => {
          "mouse" !== vv.pointerType || 0 === vv.movementX && 0 === vv.movementY || fv || jv.start()
        },
        onPointerLeave: jv.cancel,
        children: [Cv && (0, Tv.jsx)(Cv, {}), (0, Tv.jsx)("div", {
          className: "StorePackCharacters",
          children: iv.map((vv => (0, Tv.jsx)("div", {
            className: "StorePackCharacter",
            style: {
              backgroundImage: `url(${(0,Ve.j)(vv)})`
            }
          }, vv)))
        }), (0, Tv.jsx)("div", {
          className: "StoreTileScrim"
        }), Gv && (0, Tv.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, Tv.jsxs)("div", {
          className: "StoreTileContent",
          children: [(0, Tv.jsx)("div", {
            className: "StoreTileTitle",
            children: mv
          }), (0, Tv.jsxs)("div", {
            className: "StoreTileMeta",
            children: [(0, Tv.jsx)(re.e, {
              tier: sv.tier
            }), " \xb7 ", av("store:itemCount", {
              count: (0, Ze.e)(Pv)
            }), "owned" === Sv && (0, Tv.jsxs)("span", {
              className: "StoreTileOwned",
              children: [" \xb7 ", (0, Tv.jsx)(pv.b, {
                name: "check"
              }), " ", av("general:owned")]
            })]
          }), (0, Tv.jsx)(Pg, {
            state: Sv,
            item: Pv,
            price: (0, qv.f)(Pv),
            busy: dv,
            onAct: lv,
            onNeedRecipient: Wv,
            onLogin: wv
          })]
        })]
      })
    }
    var dg = Pv(2852),
      Ng = Pv(1540),
      lg = Pv(1447),
      Tg = Pv(3316);

    function Wg() {
      return (0, Tv.jsx)("span", {
        className: "NewBadge",
        children: "NEW"
      })
    }
    var wg = Pv(1329),
      ag = Pv(1548),
      sg = Pv(9044);

    function Cg(vv) {
      let {
        character: zv,
        drawn: Pv,
        onDrawn: Sv
      } = vv;
      const gv = (0, hv.useRef)(null),
        pv = (0, sg.i)(zv);
      return (0, Tv.jsx)("div", {
        className: ev()("StoreCharacterLive", {
          StoreCharacterLiveDrawn: Pv
        }),
        children: (0, Tv.jsx)(hv.Suspense, {
          fallback: null,
          children: (0, Tv.jsx)(Ee.d, {
            ref: gv,
            framing: "store",
            turntableFromYaw: Pv ? pv.yaw : null,
            onReady: () => {
              var vv, Pv;
              null === (vv = gv.current) || void 0 === vv || vv.setOrbit(pv), null === (Pv = gv.current) || void 0 === Pv || Pv.setAllCosmetics(ag.b[zv].cosmetics)
            },
            onDrawn: Sv
          })
        })
      })
    }
    const ig = {
        common: "StoreCharacterCardCommon",
        rare: "StoreCharacterCardRare",
        epic: "StoreCharacterCardEpic",
        legendary: "StoreCharacterCardLegendary",
        mythic: "StoreCharacterCardMythic"
      },
      cg = new Set(["wildSpirits"]);

    function Gg(vv) {
      var zv;
      let {
        tile: Pv,
        design: Sv,
        canGoLive: dv,
        live: Nv,
        busy: lv,
        highlight: Wv,
        onLiveStart: wv,
        onLiveEnd: av,
        onOpen: sv,
        onAct: Cv,
        onNeedRecipient: iv,
        onLogin: cv
      } = vv;
      const {
        t: Gv
      } = (0, gv.x)(), {
        pack: mv,
        state: jv
      } = Pv, fv = le.b[mv], Fv = (0, le.d)(mv), Yv = (0, Ve.m)(mv), nv = ie.k[Yv], Ov = cg.has(Yv), {
        tier: Dv
      } = fv, Kv = "legendary" === Dv || "mythic" === Dv, Vv = (0, hv.useRef)(null);
      (0, wg.d)(Vv, "epic" === Dv || Kv || Ov);
      const [Uv, xv] = (0, hv.useState)(!1);
      return !Nv && Uv && xv(!1), (0, Tv.jsxs)("div", {
        ref: Vv,
        className: ev()("StoreCharacterCard", `StoreCharacterCard${Sv}`, ig[Dv], {
          StoreCharacterCardOwned: "owned" === jv || "recipientOwns" === jv,
          StoreCharacterCardGift: Xe(jv),
          StoreCharacterCardItem: void 0 === Fv
        }),
        onPointerMove: vv => {
          "mouse" !== vv.pointerType || 0 === vv.movementX && 0 === vv.movementY || !dv || Nv || void 0 === Fv || wv()
        },
        onPointerLeave: av,
        children: [(0, Tv.jsx)("div", {
          className: "StoreCharacterBackdrop",
          children: nv && (0, Tv.jsx)(nv, {
            simple: !0
          })
        }), Kv && (0, Tv.jsx)("div", {
          className: "StoreCharacterRays"
        }), (0, Tv.jsxs)(Rv.LinkPreserveSearch, {
          className: "StoreCharacterLink",
          to: (0, Ng.d)({
            kind: "pack",
            pack: mv
          }),
          "data-store-item": mv,
          onClick: vv => {
            (0, lg.b)(vv) && (vv.preventDefault(), sv())
          },
          children: [(0, Tv.jsxs)("div", {
            className: "StoreCharacterStage",
            children: [(0, Tv.jsx)("div", {
              className: "StoreCharacterHalo"
            }), (0, Tv.jsx)("div", {
              className: ev()("StoreCharacterFigure", {
                StoreCharacterFigureCovered: Uv
              }),
              style: {
                backgroundImage: `url(${(0,Ve.s)(mv)})`
              }
            }), Nv && void 0 !== Fv && (0, Tv.jsx)(Cg, {
              character: Fv,
              drawn: Uv,
              onDrawn: () => {
                xv(!0)
              }
            })]
          }), (0, Tv.jsx)("div", {
            className: "StoreCharacterName",
            children: null !== (zv = fv.displayName) && void 0 !== zv ? zv : mv
          }), (0, Tv.jsx)(re.e, {
            tier: Dv,
            className: "StoreCharacterTier"
          })]
        }), (0, Tv.jsx)("div", {
          className: "StoreCharacterScrim"
        }), Ov && (0, Tv.jsx)("span", {
          className: "StoreCharacterNew",
          children: (0, Tv.jsx)(Wg, {})
        }), "owned" === jv && (0, Tv.jsx)("span", {
          className: "StoreCharacterOwned",
          title: Gv("general:owned"),
          "aria-label": Gv("general:owned"),
          children: (0, Tv.jsx)(pv.b, {
            name: "check"
          })
        }), (0, Tv.jsx)("div", {
          className: "StoreCharacterPlate",
          children: (0, Tv.jsx)(Pg, {
            state: jv,
            item: mv,
            price: (0, qv.f)(mv),
            busy: lv,
            highlight: Wv,
            onAct: Cv,
            onNeedRecipient: iv,
            onLogin: cv
          })
        })]
      })
    }

    function mg(vv) {
      let {
        tiles: zv,
        busy: Pv,
        highlightItem: Sv,
        onOpen: ev,
        onAct: gv,
        onNeedRecipient: pv,
        onLogin: dv
      } = vv;
      const Nv = (0, Tg.l)("storeCharacterCardFoil"),
        lv = (0, Tg.l)("storeCharacterCardSpotlight"),
        Wv = Nv ? "Foil" : lv ? "Spotlight" : "Showcase",
        [wv] = (0, hv.useState)(De.j),
        [av, sv] = (0, hv.useState)(null);
      return (0, Tv.jsx)("div", {
        className: "StoreCharacterGrid",
        children: zv.map((vv => (0, Tv.jsx)(Gg, {
          tile: vv,
          design: Wv,
          canGoLive: !wv,
          live: av === vv.pack,
          busy: Pv,
          highlight: Sv === vv.pack,
          onLiveStart: () => {
            sv(vv.pack)
          },
          onLiveEnd: () => {
            sv((zv => zv === vv.pack ? null : zv))
          },
          onOpen: () => {
            ev(vv.pack)
          },
          onAct: () => {
            gv(vv.pack)
          },
          onNeedRecipient: pv,
          onLogin: () => {
            dv(vv.pack)
          }
        }, vv.pack)))
      })
    }
    var jg = Pv(9054);

    function fg(vv) {
      let {
        title: zv
      } = vv;
      return (0, Tv.jsx)("h2", {
        className: "StoreSectionDivider",
        children: (0, Tv.jsx)("span", {
          className: "StoreSectionDividerTitle",
          children: zv
        })
      })
    }

    function Fg(vv) {
      let {
        mountAtOnce: zv,
        children: Pv
      } = vv;
      const Sv = (0, hv.useRef)(null),
        [ev, gv] = (0, hv.useState)(zv),
        pv = (0, jg.c)();
      return (0, hv.useLayoutEffect)((() => {
        const vv = Sv.current;
        vv && vv.getBoundingClientRect().top < vv.parentElement.getBoundingClientRect().bottom && gv(!0)
      }), []), ev || pv ? (0, Tv.jsx)(Tv.Fragment, {
        children: Pv
      }) : (0, Tv.jsx)("div", {
        ref: Sv
      })
    }

    function Yg(vv) {
      let {
        layout: zv,
        mountAtOnce: Pv,
        bundleGift: hv,
        superRankTotalDays: Sv,
        busy: ev,
        highlightItem: pv,
        onOpen: dv,
        onAct: Nv,
        onNeedRecipient: lv,
        onLogin: Wv
      } = vv;
      const {
        t: wv
      } = (0, gv.x)(), av = zv.packs.filter((vv => void 0 === (0, le.d)(vv.pack) && !(0, le.i)(vv.pack))), sv = zv.packs.filter((vv => void 0 !== (0, le.d)(vv.pack))), Cv = zv.packs.filter((vv => (0, le.i)(vv.pack)));
      return (0, Tv.jsxs)(Tv.Fragment, {
        children: [(0, Tv.jsx)(dg.c, {
          className: "StoreSuperGems",
          gift: hv,
          highlightSku: pv
        }), (0, Tv.jsx)(fg, {
          title: wv("store:rank")
        }), (0, Tv.jsx)(eg, {
          state: zv.superRank.state,
          urgent: zv.superRank.urgent,
          daysLeft: zv.superRankDaysLeft,
          totalDays: Sv,
          recipientHasSuperRank: zv.recipientHasSuperRank,
          busy: ev,
          highlight: "superRank" === pv,
          onOpen: () => {
            dv("superRank")
          },
          onAct: () => {
            Nv("superRank")
          },
          onNeedRecipient: lv,
          onLogin: () => {
            Wv("superRank")
          }
        }), (0, Tv.jsxs)(Fg, {
          mountAtOnce: Pv,
          children: [(0, Tv.jsx)(fg, {
            title: wv("store:bundles")
          }), (0, Tv.jsx)("div", {
            className: "StorePackGrid",
            children: av.map((vv => (0, Tv.jsx)(pg, {
              pack: vv.pack,
              state: vv.state,
              busy: ev,
              onOpen: () => {
                dv(vv.pack)
              },
              onAct: () => {
                Nv(vv.pack)
              },
              onNeedRecipient: lv,
              onLogin: () => {
                Wv(vv.pack)
              }
            }, vv.pack)))
          }), (0, Tv.jsxs)(Fg, {
            mountAtOnce: Pv,
            children: [(0, Tv.jsx)(fg, {
              title: wv("store:characters")
            }), (0, Tv.jsx)(mg, {
              tiles: sv,
              busy: ev,
              highlightItem: pv,
              onOpen: dv,
              onAct: Nv,
              onNeedRecipient: lv,
              onLogin: Wv
            }), Cv.length > 0 && (0, Tv.jsxs)(Tv.Fragment, {
              children: [(0, Tv.jsx)(fg, {
                title: wv("store:premiumItems")
              }), (0, Tv.jsx)(mg, {
                tiles: Cv,
                busy: ev,
                highlightItem: pv,
                onOpen: dv,
                onAct: Nv,
                onNeedRecipient: lv,
                onLogin: Wv
              })]
            })]
          })]
        })]
      })
    }

    function ng(vv) {
      let {
        state: zv,
        mode: Pv,
        giftName: hv,
        busy: Sv,
        highlight: ev,
        purchaseError: pv,
        onBack: dv,
        onChooseRecipient: lv,
        onAct: Wv,
        onLogin: wv
      } = vv;
      const {
        t: av
      } = (0, gv.x)(), sv = ov("gift" !== Pv);
      return (0, Tv.jsx)(Je, {
        onBack: dv,
        recipient: "gift" === Pv && (0, Tv.jsxs)(Tv.Fragment, {
          children: [hv && (0, Tv.jsxs)("span", {
            className: "StoreDetailRecipient",
            title: av("store:giftFor", {
              name: hv
            }),
            children: [Ge.b, " ", av("store:giftFor", {
              name: hv
            })]
          }), !hv && (0, Tv.jsxs)("div", {
            ...(0, Nv.U)(),
            className: "StoreDetailRecipient StoreDetailRecipientChoose",
            onClick: lv,
            children: [Ge.b, " ", av("store:chooseRecipient")]
          })]
        }),
        cta: (0, Tv.jsx)(Pg, {
          state: zv,
          item: "superRank",
          price: qv.k.price,
          busy: Sv,
          highlight: ev,
          onAct: Wv,
          onNeedRecipient: lv,
          onLogin: wv
        }),
        afterCta: (0, Tv.jsxs)(Tv.Fragment, {
          children: [sv && (0, Tv.jsx)("span", {
            className: "StoreTileNote",
            children: sv
          }), pv && (0, Tv.jsx)("span", {
            className: "StoreTileNote StoreTileNoteError",
            children: av(pv)
          })]
        })
      })
    }
    var Og = Pv(122);
    const Dg = Og.k("kind", [Og.C({
      kind: Og.s("refused"),
      heldTierId: Og.Q(),
      until: Og.w()
    }), Og.C({
      kind: Og.s("refund"),
      tierId: Og.Q(),
      refundedMs: Og.w(),
      forfeitedMs: Og.w(),
      premiumCurrency: Og.w()
    }), Og.C({
      kind: Og.s("none")
    })]);
    async function Kg(vv) {
      const zv = await (0, Kv.postJsonWithMetricsCookiesAndJsonResponse)(`${Vv.clientSideServerUrls.indexUrl}/index/ranks/subscribe-preview`, {
        productId: vv
      }, {
        retries: 1
      });
      return Dg.parse(zv)
    }
    var Vg = Pv(2818),
      Ug = Pv(2859);

    function Rg(vv, zv) {
      const Pv = Math.max(1, Math.round(zv / Zv.k));
      return [1 === Pv ? `${vv}OneDay` : vv, {
        days: Pv.toLocaleString()
      }]
    }

    function xg() {
      return "true" === new URLSearchParams(window.location.search).get("tempSubscription") && (0, Lv.purchasesAllowed)() ? (0, Tv.jsx)(tg, {}) : null
    }

    function tg() {
      const {
        t: vv
      } = (0, gv.x)(), {
        userContext: zv
      } = (0, av.d)(), {
        purchaseUnderWay: Pv,
        notice: Sv,
        subscribe: ev
      } = (0, Vg.e)(), [pv, dv] = (0, hv.useState)(null), [lv, Wv] = (0, hv.useState)(0), [wv, sv] = (0, hv.useState)(!1), Cv = (0, hv.useRef)(!0), iv = zv !== Kv.NULL_USER_CONTEXT, cv = null !== pv && pv.loadedFor === zv ? pv.offer : null, Gv = null === Sv || void 0 === Sv ? void 0 : Sv.pendingIntentId, mv = (0, hv.useRef)(Gv);

      function jv() {
        Wv((vv => vv + 1))
      }
      async function fv(vv) {
        sv(!1), await ev(vv), Cv.current && jv()
      }
      if ((0, hv.useEffect)((() => (Cv.current = !0, () => {
          Cv.current = !1
        })), []), (0, hv.useEffect)((() => {
          void 0 !== mv.current && void 0 === Gv && jv(), mv.current = Gv
        }), [Gv]), (0, hv.useEffect)((() => {
          if (!iv) return;
          let vv = !1;
          return sv(!1), async function() {
            const {
              offering: vv
            } = await (0, pz.f)().getOfferings("superRankPage"), zv = null === vv || void 0 === vv ? void 0 : vv.packages.find((vv => null !== vv.price));
            return void 0 === zv ? {
              kind: "unavailable"
            } : {
              kind: "loaded",
              pkg: zv,
              preview: await Kg(zv.productId)
            }
          }().catch((vv => (console.error("Billing: loading the Super Rank subscription or its preview failed:", vv), {
            kind: "loadFailed"
          }))).then((Pv => {
            vv || dv((vv => "loadFailed" === Pv.kind && (null === vv || void 0 === vv ? void 0 : vv.loadedFor) === zv ? vv : {
              loadedFor: zv,
              offer: Pv
            }))
          })), () => {
            vv = !0
          }
        }), [zv, iv, lv]), null === cv) return null;
      if ("loaded" !== cv.kind) return (0, Tv.jsx)(Ug.g, {
        notice: {
          kind: "error",
          key: "unavailable" === cv.kind ? "payments:subscriptionUnavailable" : "payments:subscriptionLoadFailed"
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const {
        pkg: Fv,
        preview: Yv
      } = cv;
      if ("refused" === Yv.kind) return (0, Tv.jsx)(Ug.g, {
        notice: {
          kind: "error",
          key: "payments:subscribeRefusedGemRank",
          values: {
            date: new Date(Yv.until).toLocaleDateString()
          }
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const nv = (0, dg.g)(Fv.price);
      if (wv && "refund" === Yv.kind) {
        const {
          refundedMs: zv,
          forfeitedMs: hv,
          premiumCurrency: Sv
        } = Yv, ev = hv + (0 === Sv ? zv : 0), [gv, pv] = Rg("payments:subscribeRefundsGemRank", zv), [dv, lv] = Rg("payments:subscribeForfeitsGemRank", ev);
        return (0, Tv.jsxs)("div", {
          className: "StoreTempSubscribe SmallTextBold",
          children: [(0, Tv.jsx)("div", {
            children: vv("payments:subscribeEndsGemRank")
          }), Sv > 0 && (0, Tv.jsx)("div", {
            children: vv(gv, {
              ...pv,
              amount: Sv.toLocaleString()
            })
          }), ev > 0 && (0, Tv.jsx)("div", {
            children: vv(dv, lv)
          }), (0, Tv.jsxs)("div", {
            className: "StoreTempSubscribeButtons",
            children: [(0, Tv.jsx)(Nv.e, {
              onClick: () => {
                sv(!1)
              },
              children: vv("general:cancel")
            }), (0, Tv.jsx)(Nv.j, {
              onClick: () => {
                fv(Fv)
              },
              loading: Pv,
              children: vv("payments:subscribeContinue", {
                price: nv
              })
            })]
          })]
        })
      }
      return (0, Tv.jsxs)("div", {
        className: "StoreTempSubscribe",
        children: [(0, Tv.jsx)(Ug.g, {
          notice: Sv,
          className: "SmallTextBold"
        }), (0, Tv.jsx)(Ug.c, {
          className: "SmallTextBold"
        }), (0, Tv.jsx)(Nv.j, {
          onClick: () => {
            "refund" === Yv.kind ? sv(!0) : fv(Fv)
          },
          disabled: void 0 !== Gv,
          loading: Pv,
          children: vv("payments:subscribeToSuperRank", {
            price: nv
          })
        })]
      })
    }
    const qg = {
      kind: "board"
    };
    let Ig = !1;

    function Qg(vv) {
      return "found" === vv.status || "error" === vv.status && "store:giftRecipientLookupFailed" === vv.error ? vv.name : null
    }(0, Av.y)(Te.prefetchBillingOfferings);
    const Zg = (0, hv.memo)((function(vv) {
      var zv;
      let {
        show: Sv
      } = vv;
      const {
        t: pv
      } = (0, gv.x)(), {
        userContext: dv
      } = (0, av.d)(), Nv = dv !== Kv.NULL_USER_CONTEXT, lv = Fe(dv), [Wv, wv] = (0, Cv.d)(), {
        page: sv,
        urlMode: iv,
        goTo: cv
      } = (0, Ye.g)(), Gv = function(vv) {
        return "superRank" === vv.kind ? "superRank" : "pack" === vv.kind ? vv.pack : null
      }(sv), {
        openEverythingMenuName: mv,
        gameState: jv
      } = (0, Yv.i)(["openEverythingMenuName", "gameState"]), fv = null !== mv;
      ! function(vv, zv) {
        const [Sv] = (0, hv.useState)(De.j), [ev, gv] = (0, hv.useState)(!1);
        Sv && zv && !ev && gv(!0);
        const pv = (0, eh.m)(),
          dv = Sv && ev && vv && !pv;
        (0, hv.useEffect)((() => {
          if (!dv) return;
          let vv = null,
            zv = null,
            hv = null;
          const Sv = () => !document.hasFocus() || document.activeElement instanceof HTMLIFrameElement || (0, pz.f)().purchaseUnderWay,
            ev = () => {
              var Pv;
              null === (Pv = hv) || void 0 === Pv || Pv(), hv = null, null !== vv && (clearTimeout(vv), vv = null), null !== zv && (clearTimeout(zv), zv = null)
            },
            gv = () => {
              (0, ne.r)(!1), (0, ne.o)(!1), ev(), vv = setTimeout((() => {
                vv = null, hv = (0, Oe.e)((() => {
                  hv = null, Sv() ? gv() : ((0, ne.r)(!0), zv = setTimeout((() => {
                    zv = null, hv = (0, Oe.e)((() => {
                      hv = null, Sv() ? gv() : (0, ne.o)(!0)
                    }))
                  }), 3e3), Promise.resolve().then((() => Pv(4420))).then((vv => {
                    vv.startBackgroundGameSetup()
                  }), (vv => {
                    console.warn("Background game setup: its chunk failed to load", vv)
                  })))
                }))
              }), 2e3)
            };
          for (const Pv of Ke) window.addEventListener(Pv, gv, {
            capture: !0,
            passive: !0
          });
          return gv(), () => {
            for (const vv of Ke) window.removeEventListener(vv, gv, {
              capture: !0
            });
            ev(), (0, ne.r)(!1), (0, ne.o)(!1)
          }
        }), [dv])
      }(Sv && fv, "pack" === sv.kind);
      const Fv = "landingPage" === jv;
      (0, hv.useEffect)((() => {
        fv && (0, Te.prefetchBillingOfferings)()
      }), [fv]), (0, hv.useEffect)((() => {
        fv && !Sv && Fv && (0, Ve.u)()
      }), [fv, Sv, Fv]);
      const [nv, Ov] = (0, hv.useState)(0), [Dv, Vv] = (0, hv.useState)(null), [Uv, Rv] = (0, hv.useState)(null), [xv, tv] = (0, hv.useState)(null), [Iv, Qv] = (0, hv.useState)(null), Zv = (0, hv.useRef)(null), Hv = (0, hv.useRef)(null), Mv = (0, hv.useRef)(null), yv = (0, hv.useRef)(!1), Bv = (0, Av.H)(), Jv = (0, hv.useRef)(0), Ev = (0, hv.useRef)(!1);

      function ov() {
        Ov((vv => vv + 1))
      }(0, hv.useEffect)((() => {
        if (Sv) {
          if (Ig = !0, (0, Av.p)(), Bv && Bv.seq !== Jv.current) {
            var vv;
            Jv.current = Bv.seq, "loginResume" !== Bv.source && (0, Av.E)();
            const zv = (0, Av.e)(Bv);
            iv || cv(zv), Qv(null !== (vv = Bv.highlight) && void 0 !== vv ? vv : null), Rv(null), "gift" === Bv.mode && Bv.giftRecipientName ? lv.choose(Bv.giftRecipientName, "prefilled") : "current" !== Bv.mode && lv.clear(), "gift" !== Bv.mode || Bv.giftRecipientName || ov(), (0, Xv.reportAnalyticsClick)({
              id: "store.open",
              value: Bv.source
            })
          } else Ev.current || (0, Xv.reportAnalyticsClick)({
            id: "store.open",
            value: "menuTab"
          });
          Ev.current = !0
        } else Ev.current = !1
      }), [Sv, Bv]), (0, hv.useEffect)((() => {
        if (!Iv) return;
        const vv = setTimeout((() => {
          Qv(null)
        }), 4e3);
        return () => {
          clearTimeout(vv)
        }
      }), [Iv]), (0, hv.useLayoutEffect)((() => {
        const vv = Zv.current;
        if (!Sv || !vv) return Hv.current = null, void(Mv.current = null);
        var zv;
        if (Gv) Hv.current = Gv, null === (zv = vv.querySelector(".StoreDetailBackButton, .CosmeticShopDetailBackButton")) || void 0 === zv || zv.focus();
        else if (Hv.current) {
          const zv = Mv.current;
          null !== zv && (vv.scrollTop = zv);
          const Pv = vv.querySelector(`[data-store-item="${Hv.current}"]`);
          if (Pv) {
            const hv = Pv.getBoundingClientRect(),
              Sv = vv.getBoundingClientRect();
            Pv.focus({
              preventScroll: null !== zv && hv.bottom > Sv.top && hv.top < Sv.bottom
            })
          }
          Hv.current = null
        }
      }), [Gv, Sv]), (0, hv.useEffect)((() => {
        Rv(null)
      }), [lv.query]), (0, hv.useEffect)((() => {
        if (!xv) return;
        const vv = setTimeout((() => {
          tv(null)
        }), 8e3);
        return () => {
          clearTimeout(vv)
        }
      }), [xv]);
      const bv = dv.superRankInfo,
        rv = dv.isLoggedIn() || (0, Lv.guestsMayBuy)(),
        kv = dv.getOwnedCosmeticPacks(),
        uv = (0, Ge.k)(lv.query),
        vz = (0, Ge.c)({
          mode: uv,
          loggedIn: Nv ? rv : null,
          superRankInfo: bv,
          now: Date.now(),
          ownedPacks: kv,
          packs: le.p,
          recipient: lv.recipient
        });
      (0, hv.useEffect)((() => {
        if (!rv || !Sv) return;
        const vv = (0, Av.E)(),
          zv = vv && (0, Ge.i)(vv, le.p);
        vv && zv && ((0, Xv.reportAnalyticsClick)({
          id: "store.login_resume",
          value: vv.item
        }), (0, Av.s)(zv))
      }), [rv, Sv]);
      const zz = (0, Ge.n)({
        superRankDaysLeft: vz.superRankDaysLeft,
        openedThisSession: Ig || Sv,
        seenNewItems: (0, Av.m)()
      });
      if ((0, hv.useEffect)((() => {
          (0, Av.C)(zz)
        }), [zz]), !Sv || !(0, Lv.purchasesAllowed)()) return null;
      const Pz = wv > Wv && Wv <= 700,
        hz = !Pz && wv <= 420,
        Sz = "gift" === uv ? Qg(lv.recipient) : null,
        ez = null !== Dv;

      function gz(vv) {
        (0, we.b)(vv, "gift" === uv ? lv.query.trim() : null)
      }

      function dz(vv, zv) {
        (0, Xv.reportAnalyticsClick)({
          id: "store.purchase_done",
          value: `${zv?"gift":"self"}:${vv}`
        }), zv && (lv.recordGift(zv.name, vv), Nz(zv))
      }

      function Nz(vv) {
        ! function(vv) {
          try {
            Jz.h.setItem(me, (0, Ge.t)(fe(), vv))
          } catch {}
        }({
          name: vv.name,
          cosmetics: vv.cosmetics
        }), cv(qg), tv((zv => {
          var Pv;
          return {
            name: vv.name,
            seq: (null !== (Pv = null === zv || void 0 === zv ? void 0 : zv.seq) && void 0 !== Pv ? Pv : 0) + 1
          }
        }))
      }
      async function lz(vv) {
        var zv, Pv;
        if (yv.current) return;
        if (!rv) return void gz(vv);
        Rv(null), Qv(null);
        const hv = "gift" === uv ? {
          name: Qg(lv.recipient),
          cosmetics: lv.recipientCosmetics
        } : null;
        if (hv && !hv.name) return void ov();
        const Sv = "superRank" === vv ? qv.k.id : (0, qv.b)(vv);
        yv.current = !0;
        const ev = await (0, ce.d)(Sv, null !== (zv = null === hv || void 0 === hv ? void 0 : hv.name) && void 0 !== zv ? zv : null);
        if (yv.current = !1, !ev) return;
        Vv(vv);
        const gv = await ae.b.purchase(Sv, null !== (Pv = null === hv || void 0 === hv ? void 0 : hv.name) && void 0 !== Pv ? Pv : null);
        Vv(null), gv ? Rv(gv) : (dz(vv, hv), hv || (await (0, se.flushClientAnalyticsEvents)(), (0, We.refreshWithoutConfirmation)("superRank" === vv ? "/super-rank-welcome" : `/pack-welcome/${vv}`)))
      }
      const Tz = ev()("Store", {
        StoreGift: "gift" === uv,
        StorePortrait: Pz,
        StoreCompact: hz
      });
      if ("pack" === sv.kind) {
        const vv = sv.pack,
          zv = vz.packs.find((zv => zv.pack === vv));
        return (0, Tv.jsx)("div", {
          ref: Zv,
          className: "CosmeticShopContainer",
          children: (0, Tv.jsx)(ie.g, {
            pack: vv,
            onBack: () => {
              cv(qg)
            },
            onPurchased: zv => {
              dz(vv, zv ? {
                name: zv,
                cosmetics: null
              } : null)
            },
            giftCta: "gift" === uv && Sz && zv && (0, Tv.jsxs)(Tv.Fragment, {
              children: [(0, Tv.jsx)(Pg, {
                state: zv.state,
                item: vv,
                price: (Wz = vv, "superRank" === Wz ? qv.k.price : (0, qv.f)(Wz)),
                busy: ez,
                onAct: () => {
                  lz(vv)
                },
                onNeedRecipient: () => {
                  cv(qg), ov()
                },
                onLogin: () => {
                  gz(vv)
                },
                highlight: Iv === vv
              }), Uv && (0, Tv.jsx)("span", {
                className: "CosmeticShopGiftError SmallTextBold",
                children: pv(Uv)
              })]
            }),
            ownedPacks: kv,
            startAsGift: "gift" === uv,
            initialGiftRecipient: "gift" === uv ? null !== Sz && void 0 !== Sz ? Sz : lv.query.trim() : "",
            highlightCta: Iv === vv
          }, vv)
        })
      }
      var Wz;
      return "superRank" === sv.kind ? (0, Tv.jsx)("div", {
        ref: Zv,
        className: ev()(Tz, "StoreDetailView"),
        children: (0, Tv.jsx)(ng, {
          state: vz.superRank.state,
          mode: uv,
          giftName: Sz,
          busy: ez,
          highlight: "superRank" === Iv,
          purchaseError: Uv,
          onBack: () => {
            cv(qg)
          },
          onChooseRecipient: () => {
            cv(qg), ov()
          },
          onAct: () => {
            lz("superRank")
          },
          onLogin: () => {
            gz("superRank")
          }
        })
      }) : (0, Tv.jsxs)("div", {
        ref: Zv,
        className: Tz,
        onScroll: vv => {
          Mv.current = vv.currentTarget.scrollTop
        },
        children: [(0, Tv.jsx)("div", {
          className: "StoreTopRow",
          children: (0, Tv.jsx)(Qe, {
            selfName: Nv ? dv.getPlayerName() : "",
            giftRecipient: lv,
            suggestionsVersion: null !== (zv = null === xv || void 0 === xv ? void 0 : xv.seq) && void 0 !== zv ? zv : 0,
            pulseSignal: nv,
            disabled: ez || !Nv
          })
        }), xv && (0, Tv.jsxs)("div", {
          className: "StoreNotice StoreNoticeGiftSent",
          onClick: () => {
            tv(null)
          },
          children: [(0, Tv.jsx)(Ce.d, {
            showSignal: xv.seq
          }), Ge.b, " ", pv("store:giftSent", {
            name: xv.name
          })]
        }, xv.seq), !xv && Uv && (0, Tv.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: pv(Uv)
        }), (0, Tv.jsx)(Yg, {
          layout: vz,
          mountAtOnce: null !== Hv.current,
          bundleGift: "gift" === uv ? {
            recipientName: Sz,
            lookingUp: "pending" === lv.recipient.status,
            busy: ez,
            onNeedRecipient: ov,
            onSent: vv => {
              (0, Xv.reportAnalyticsClick)({
                id: "store.purchase_done",
                value: "gift:superGems"
              }), Nz({
                name: vv,
                cosmetics: lv.recipientCosmetics
              })
            }
          } : null,
          superRankTotalDays: (0, Ge.o)(bv),
          busy: ez,
          highlightItem: Iv,
          onOpen: function(vv) {
            (0, Xv.reportAnalyticsClick)({
              id: "store.item_open",
              value: vv
            }), cv((0, Av.i)(vv))
          },
          onAct: lz,
          onNeedRecipient: ov,
          onLogin: gz
        }), "gift" !== uv && (0, Tv.jsx)(xg, {})]
      })
    }));
    var Ag = Pv(2520),
      Lg = Pv(8529),
      Hg = Pv(8352),
      Mg = Pv(2577),
      yg = Pv(2424),
      Bg = Pv(2466),
      Jg = Pv(2472),
      Eg = Pv(2480),
      og = Pv(2568),
      bg = Pv(2547),
      rg = Pv(2266),
      kg = Pv(2298),
      Xg = Pv(2284),
      ug = Pv(1980),
      vp = Pv(2487),
      zp = Pv(2301);

    function Pp(vv) {
      let {
        show: zv
      } = vv;
      return zv ? (0, Tv.jsx)(hp, {}) : null
    }

    function hp() {
      const {
        t: vv
      } = (0, gv.x)(), {
        followsLeader: zv
      } = (0, yg.h)(), {
        loading: Pv,
        friends: Sv,
        requests: dv,
        invites: lv
      } = (0, Mv.l)(), {
        userContext: Wv
      } = (0, av.d)(), [wv, sv] = (0, hv.useState)(zp.m);
      (0, hv.useEffect)((() => {
        (0, zp.e)()
      }), []);
      const Cv = dv.map((vv => vv.name)),
        {
          state: iv,
          recentRequesters: cv
        } = (0, bg.k)(),
        Gv = new Map([...("loaded" === iv.status ? iv.recentPlayers : []).map((vv => [vv.preview.name, vv])), ...cv.map((vv => [vv.name, vv]))]),
        mv = (0, hv.useRef)(null),
        [Fv, Yv] = (0, hv.useState)(""),
        [nv, Ov] = (0, hv.useState)("Enter"),
        [Dv, Kv] = (0, hv.useState)(null);

      function Vv() {
        Fv && (Ov("Loading"), (0, Xg.g)(Fv, "social_menu").then((vv => {
          if (mv.current) switch (vv.kind) {
            case "sent":
              Ov("Success");
              break;
            case "becameFriends":
              Ov("BecameFriends");
              break;
            case "failed":
              Kv(vv.message), Ov("Error")
          }
        })))
      }
      return (0, hv.useEffect)((() => {
        if ("Enter" === nv || "Loading" === nv) return;
        const vv = setTimeout((() => {
          mv.current.value = "", Yv(""), Ov("Enter")
        }), "Success" === nv ? 1e3 : 4e3);
        return () => {
          clearTimeout(vv)
        }
      }), [nv]), (0, Tv.jsx)("div", {
        className: "SocialMenu",
        children: (0, Tv.jsxs)("div", {
          className: "SocialMenuInner",
          children: [(0, Tv.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, Tv.jsxs)("div", {
              className: "SocialMenuBox SocialMenuAddFriend",
              children: [(0, Tv.jsx)(Eg.b, {
                label: vv("socialBar:addFriend")
              }), (0, Tv.jsxs)("div", {
                className: "AddFriendBody",
                children: [(0, Tv.jsxs)("div", {
                  className: ev()("AddFriendBodyOverlay", {
                    [`AddFriendBodyOverlay${nv}`]: !0
                  }),
                  children: ["Loading" === nv && (0, Tv.jsx)(fv.c, {}), "Success" === nv && (0, Tv.jsx)(pv.b, {
                    name: "check"
                  }), "BecameFriends" === nv && (0, Tv.jsx)(Tv.Fragment, {
                    children: vv("socialBar:nowFriends", {
                      playerName: Fv
                    })
                  }), "Error" === nv && Dv && (0, Tv.jsx)(Tv.Fragment, {
                    children: vv(Dv.translationKey, Dv.params)
                  })]
                }), (0, Tv.jsxs)("div", {
                  className: "PlayerSearch",
                  children: [(0, Tv.jsx)(jv.c, {
                    className: "PlayerSearchInput",
                    placeholderText: vv("socialBar:enterPlayerName"),
                    domRef: mv,
                    onValueChange: vv => {
                      Yv((0, xv.m)(vv)), mv.current.value = (0, xv.m)(vv)
                    },
                    onEnter: () => {
                      Fv && (0, Xv.reportAnalyticsClick)({
                        id: "social.add_friend",
                        value: "social_menu"
                      }), Vv()
                    }
                  }), (0, Tv.jsxs)(Nv.d, {
                    className: "PlayerSearchInputButton SmallTextLight",
                    onClick: () => {
                      Vv()
                    },
                    analyticsClick: {
                      id: "social.add_friend",
                      value: "social_menu"
                    },
                    children: [(0, Tv.jsx)(pv.b, {
                      name: "user-plus"
                    }), " ", vv("socialBar:sendRequest")]
                  })]
                })]
              }), (0, Tv.jsx)(vp.e, {
                surface: "social_menu",
                prefetchOnMount: !0
              })]
            }), lv.length > 0 && (0, Tv.jsxs)("div", {
              className: "SocialMenuBox SocialMenuInvites",
              children: [(0, Tv.jsx)(Eg.b, {
                label: vv("socialBar:invites"),
                meta: lv.length
              }), lv.map((zv => (0, Tv.jsxs)("div", {
                className: "SocialMenuInvite",
                children: [(0, Tv.jsx)("div", {
                  className: "SocialMenuInviteIcon",
                  children: (0, Tv.jsx)(rg.d, {
                    invite: zv
                  })
                }), (0, Tv.jsx)("div", {
                  className: "SocialMenuInviteText",
                  children: (0, Tv.jsx)(rg.e, {
                    invite: zv
                  })
                }), (0, Tv.jsx)(Nv.j, {
                  className: "SocialMenuInviteJoin SmallTextLight",
                  onClick: () => {
                    (0, kg.g)(zv)
                  },
                  analyticsClick: {
                    id: "social.accept_invite",
                    value: `social_menu:${zv.destination.kind}`
                  },
                  children: vv("general:join")
                }), (0, Tv.jsx)(bv.h, {
                  tooltipInner: (0, Tv.jsx)(Tv.Fragment, {
                    children: vv("general:decline")
                  }),
                  delayShow: 0,
                  children: (0, Tv.jsx)(Nv.e, {
                    className: "SocialMenuInviteDecline",
                    padDefaultFocus: "invite" === (null === wv || void 0 === wv ? void 0 : wv.kind) && wv.inviteId === zv.id,
                    onClick: () => {
                      Mv.d.declineInvite(zv.id)
                    },
                    analyticsClick: {
                      id: "social.decline_invite",
                      value: `social_menu:${zv.destination.kind}`
                    },
                    children: (0, Tv.jsx)(pv.b, {
                      name: "xmark"
                    })
                  })
                })]
              }, zv.id)))]
            }), (0, Tv.jsxs)("div", {
              className: ev()("SocialMenuBox SocialMenuRequests", {
                SocialMenuBoxEmpty: !Pv && 0 === dv.length
              }),
              children: [(0, Tv.jsx)(Eg.b, {
                label: (0, Tv.jsxs)(Tv.Fragment, {
                  children: [(0, Tv.jsx)(pv.b, {
                    name: ug.g
                  }), " ", vv("socialBar:requests")]
                }),
                meta: (0, Tv.jsxs)(Tv.Fragment, {
                  children: [dv.length, dv.length === rv.s && (0, Tv.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: vv("socialBar:limitReached")
                  })]
                })
              }), Pv && (0, Tv.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, Tv.jsx)(fv.c, {})
              }), !Pv && 0 === dv.length && (0, Tv.jsx)("div", {
                className: "SocialMenuEmpty",
                children: vv("socialBar:noFriendRequests")
              }), !Pv && dv.length > 0 && (0, Tv.jsx)("div", {
                className: "PlayerRows",
                children: (0, Tv.jsx)(aS.b, {
                  lazyLoadedClassName: "SocialMenuRequestsLazy",
                  observerUpdateDeps: [dv],
                  children: dv.map(((zv, Pv) => {
                    const hv = Gv.get(zv.name);
                    return (0, Tv.jsxs)(Jg.f, {
                      playerSocialPreview: zv,
                      zIndex: dv.length - Pv,
                      padDefaultFocus: (0, zp.j)(wv, zv.name, Pv),
                      status: hv && (0, Tv.jsx)(og.d, {
                        gameNameWithVariation: hv.gameNameWithVariation,
                        isPrivateLobby: hv.isPrivateLobby
                      }),
                      children: [(0, Tv.jsx)(bv.h, {
                        tooltipInner: (0, Tv.jsx)(Tv.Fragment, {
                          children: vv("general:accept")
                        }),
                        delayShow: 0,
                        children: (0, Tv.jsx)(Nv.d, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            sv((0, zp.h)(Cv, Pv)), (0, Xg.f)(zv.name, !0, {
                              source: "social_menu",
                              announceFriend: !1
                            })
                          },
                          analyticsClick: {
                            id: "social.accept_friend_request",
                            value: "social_menu"
                          },
                          children: (0, Tv.jsx)(pv.b, {
                            name: "check"
                          })
                        })
                      }), (0, Tv.jsx)(bv.h, {
                        tooltipInner: (0, Tv.jsx)(Tv.Fragment, {
                          children: vv("general:decline")
                        }),
                        delayShow: 0,
                        children: (0, Tv.jsx)(Nv.e, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            sv((0, zp.h)(Cv, Pv)), (0, Xg.f)(zv.name, !1, {
                              source: "social_menu"
                            })
                          },
                          analyticsClick: {
                            id: "social.decline_friend_request",
                            value: "social_menu"
                          },
                          children: (0, Tv.jsx)(pv.b, {
                            name: "xmark"
                          })
                        })
                      })]
                    }, `${zv.name}_${zv.isError}`)
                  }))
                })
              })]
            }), (0, Tv.jsx)(og.l, {})]
          }), (0, Tv.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, Tv.jsxs)("div", {
              className: "SocialMenuBox SocialMenuParty",
              children: [(0, Tv.jsx)(Eg.b, {
                label: vv("socialBar:party")
              }), (0, Tv.jsx)(Bg.c, {})]
            }), (0, Tv.jsxs)("div", {
              className: "SocialMenuBox SocialMenuFriends",
              children: [(0, Tv.jsx)(Eg.b, {
                label: (0, Tv.jsxs)(Tv.Fragment, {
                  children: [(0, Tv.jsx)(pv.b, {
                    name: ug.e
                  }), " ", vv("socialBar:friends")]
                }),
                meta: (0, Tv.jsxs)(Tv.Fragment, {
                  children: [Sv.length, Sv.length >= (0, rv.d)(Wv.getPlayerRanks()) && (0, Tv.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: vv("socialBar:limitReached")
                  })]
                })
              }), Pv && (0, Tv.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, Tv.jsx)(fv.c, {})
              }), !Pv && 0 === Sv.length && (0, Tv.jsx)("div", {
                className: "SocialMenuEmpty",
                children: vv("socialBar:noFriends")
              }), !Pv && Sv.length > 0 && (0, Tv.jsx)("div", {
                className: "PlayerRows",
                children: (0, Tv.jsx)(aS.b, {
                  lazyLoadedClassName: "SocialMenuFriendsLazy",
                  observerUpdateDeps: [Sv],
                  children: Sv.map(((vv, Pv) => (0, Tv.jsx)(Jg.f, {
                    playerSocialPreview: vv,
                    isFriend: !0,
                    hideFriendBadge: !0,
                    onFriendRemoved: vv => {
                      Mv.d.removeFriendFromState(vv)
                    },
                    zIndex: Sv.length - Pv,
                    children: (0, Tv.jsx)(Jg.e, {
                      friend: vv,
                      followsLeader: zv,
                      analyticsSurface: "social_menu"
                    })
                  }, `${vv.name}_${vv.isError}`)))
                })
              })]
            })]
          })]
        })
      })
    }
    var Sp = Pv(2407);
    const ep = vv => {
        let {
          action: zv,
          padAction: Pv
        } = vv;
        const {
          isTouchScreen: hv
        } = (0, Yv.i)(["isTouchScreen"]), Sv = (0, eh.m)();
        return hv && !Sv ? null : (0, Tv.jsx)(XP.e, {
          className: "EverythingMenuTabKey",
          noaAction: zv,
          padHidesKey: !0,
          padMenuShortcut: Pv
        })
      },
      gp = (0, hv.memo)((function() {
        const {
          t: vv
        } = (0, gv.x)(), {
          gameState: zv,
          openEverythingMenuName: Pv,
          initSdkSelectorFinished: Sv,
          crosshairGameView: pv
        } = (0, Yv.i)(["gameState", "openEverythingMenuName", "initSdkSelectorFinished", "crosshairGameView"]), {
          userContext: dv
        } = (0, av.d)(), lv = (0, Lv.purchasesAllowed)(), Wv = (0, Av.K)(), wv = (vv, zv) => (0, Tv.jsx)(ep, {
          action: vv,
          padAction: zv
        }), [sv, Cv] = (0, hv.useState)(null), cv = (0, hv.useRef)(null), Gv = {
          ..."inGame" === zv ? {} : (0, Nv.U)({
            focusOnClick: !1
          }),
          ...sh.f
        }, mv = vv => {
          const zv = (0, Ch.g)((zv => {
            (0, Nv.R)(zv.currentTarget), Yv.c.set({
              openEverythingMenuName: vv
            })
          }), "pointerup");
          return {
            ...Gv,
            onPointerDown: vv => {
              Gv.onPointerDown(vv), zv.onPointerDown(vv)
            },
            onPointerUp: vv => {
              Gv.onPointerUp(vv), zv.onPointerUp(vv)
            },
            onClick: zv.onClick
          }
        }, jv = null !== Pv, fv = Pv !== Nz.o.COSMETIC_SHOP && !pv;
        async function Fv() {
          await async function() {
            if (!sv) return;
            await sv(), Cv(null)
          }(), Yv.c.set({
            openEverythingMenuName: null
          })
        }
        const nv = (0, hv.useRef)(null),
          Ov = (0, hv.useCallback)((() => null !== nv.current && (0, Hg.f)(nv.current)), []);

        function Kv() {
          Ov() || Fv()
        }(0, hv.useEffect)((() => (0, Se.r)(Ov)), [Ov]);
        const Vv = (0, hv.useMemo)((() => "inGame" === zv ? {
          text: vv("settingsMenu:exitGame"),
          onClick: () => {
            (0, Lg.e)()
          }
        } : (0, Dv.b)() ? {
          text: vv("settingsMenu:exitGame"),
          onClick: () => {
            ez.o.discordActivity().then((vv => {
              vv.exit("User exited the game")
            }))
          }
        } : null), [zv, vv]);
        const Uv = (0, Tv.jsx)("div", {
          className: "EverythingMenuCloseButtonClickZone",
          onClick: Kv,
          children: (0, Tv.jsx)(Nv.i, {
            className: "EverythingMenuCloseButton"
          })
        });
        return (0, Tv.jsx)(ih.d, {
          showing: jv,
          globallyUniqueKey: "EverythingMenu",
          alwaysMountChildren: !0,
          keepsMovement: Pv === Nz.o.SHOP,
          doGameplayStartStopOnShow: "inGame" === zv,
          children: (0, Tv.jsx)(Gh.b, {
            className: "EverythingMenuContainer",
            show: jv && !pv,
            children: (0, Tv.jsx)(ch.c, {
              close: Kv,
              togglePointerLock: !1,
              children: (0, Tv.jsxs)("div", {
                className: "EverythingMenu",
                children: [!(0, Se.k)(Pv) && (0, Tv.jsxs)("div", {
                  className: "EverythingMenuTabList",
                  children: [(0, Tv.jsxs)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerStart",
                    children: [Vv && (0, Tv.jsx)(Nv.b, {
                      className: "EverythingMenuBackButton",
                      padDestructive: !0,
                      onClick: () => {
                        Vv.onClick()
                      },
                      children: Vv.text
                    }), jv && lv && (0, Tv.jsx)("div", {
                      ...Gv,
                      className: "EverythingMenuWallet",
                      title: vv("homePage:getPremiumCurrency"),
                      onClick: () => {
                        (0, Av.s)({
                          mode: "current",
                          source: "menuWallet"
                        })
                      },
                      children: (0, Tv.jsx)(Ag.h, {})
                    })]
                  }), (0, Tv.jsxs)("div", {
                    className: "EverythingMenuTabListInner",
                    "data-pad-tabs": "1",
                    children: [(0, Tv.jsxs)("div", {
                      ...mv(Nz.o.SETTINGS),
                      "data-pad-tab": !0,
                      "data-pad-selected": Pv === Nz.o.SETTINGS ? "true" : void 0,
                      className: ev()("EverythingMenuTab", {
                        EverythingMenuTabActive: Pv === Nz.o.SETTINGS
                      }),
                      children: [vv("general:settings"), wv("OpenSettings", "pause")]
                    }), (0, Tv.jsxs)("div", {
                      ...mv(Nz.o.CUSTOMISATION),
                      "data-pad-tab": !0,
                      "data-pad-selected": Pv === Nz.o.CUSTOMISATION ? "true" : void 0,
                      className: ev()("EverythingMenuTab", {
                        EverythingMenuTabActive: Pv === Nz.o.CUSTOMISATION
                      }),
                      children: [vv("general:player"), wv("OpenCharacterCustomization")]
                    }), iv.featureFlags.useSocialFeatures && (0, Tv.jsxs)("div", {
                      ...mv(Nz.o.SOCIAL),
                      "data-pad-tab": !0,
                      "data-pad-selected": Pv === Nz.o.SOCIAL ? "true" : void 0,
                      className: ev()("EverythingMenuTab", {
                        EverythingMenuTabActive: Pv === Nz.o.SOCIAL
                      }),
                      ...(0, Xv.b)({
                        id: "social.open_menu",
                        value: "menu_tab"
                      }, Pv === Nz.o.SOCIAL),
                      children: [vv("socialBar:social"), (0, Tv.jsx)(Sp.b, {})]
                    }), lv && (0, Tv.jsxs)("div", {
                      ...mv(Nz.o.COSMETIC_SHOP),
                      "data-pad-tab": !0,
                      "data-pad-selected": Pv === Nz.o.COSMETIC_SHOP ? "true" : void 0,
                      className: ev()("EverythingMenuTab EverythingMenuTabCosmeticShop", {
                        EverythingMenuTabActive: Pv === Nz.o.COSMETIC_SHOP
                      }),
                      children: [(0, Tv.jsx)("span", {
                        className: "EverythingMenuTabCosmeticShopText",
                        children: vv("store:title")
                      }), "new" === Wv && (0, Tv.jsx)(Wg, {}), "dot" === Wv && (0, Tv.jsx)("span", {
                        className: "EverythingMenuTabStoreBadge EverythingMenuTabStoreDot"
                      })]
                    }), "inGame" === zv && (0, Tv.jsxs)("div", {
                      ...mv(Nz.o.LOBBY_LEADERBOARD),
                      "data-pad-tab": !0,
                      "data-pad-selected": Pv === Nz.o.LOBBY_LEADERBOARD ? "true" : void 0,
                      className: ev()("EverythingMenuTab", {
                        EverythingMenuTabActive: Pv === Nz.o.LOBBY_LEADERBOARD
                      }),
                      children: [vv("general:lobby"), wv("OpenLobbyLeaderboard", "leaderboard")]
                    })]
                  }), (0, Tv.jsx)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerEnd",
                    children: Uv
                  })]
                }), (0, Se.k)(Pv) && Uv, (0, Tv.jsxs)("div", {
                  ref: nv,
                  className: "EverythingMenuBody",
                  "data-pad-initial-area": !0,
                  style: {
                    "--everythingMenuBodyBackgroundOpacity": "inGame" === zv ? "0.85" : "1"
                  },
                  children: [(0, Tv.jsx)(lh, {
                    show: Pv === Nz.o.SETTINGS,
                    setBeforeResumeCallback: Cv
                  }), (0, Tv.jsx)(ah, {
                    show: Pv === Nz.o.CUSTOMISATION
                  }), (0, Tv.jsx)(hv.Suspense, {
                    fallback: null,
                    children: (0, Tv.jsx)(bS, {
                      show: Pv === Nz.o.SHOP
                    })
                  }), (0, Tv.jsx)(de, {
                    show: Pv === Nz.o.LOBBY_LEADERBOARD
                  }), (0, Tv.jsx)(Zg, {
                    show: Pv === Nz.o.COSMETIC_SHOP
                  }), (0, Tv.jsx)(Pp, {
                    show: Pv === Nz.o.SOCIAL
                  })]
                }), !(0, iv.isMobileApp)() && (0, mh.g)(dv.getPlayerRanks()) && (0, Tv.jsx)(Gh.b, {
                  ref: cv,
                  className: "EverythingMenuBannerDiv",
                  show: fv,
                  "data-pad-hint-bar-avoid": !0,
                  "data-pad-no-step-in": !0,
                  children: (0, Tv.jsx)(Mg.d, {
                    info: {
                      adId: 2,
                      adType: "leaderboard",
                      adAlias: "banner_shop"
                    },
                    sizeInfo: {
                      parentRef: cv
                    },
                    showing: jv && fv,
                    verticalAlign: "center",
                    horizontalAlign: "center",
                    noFillShowBloxdAdProbability: 1
                  })
                })]
              })
            })
          })
        })
      }))
  },
  9003: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => ev
    });
    var hv = Pv(312),
      Sv = Pv(9011);

    function ev(vv, zv, Pv) {
      const ev = Object.entries(zv).sort(((vv, zv) => zv[1] - vv[1])),
        gv = (0, hv.sb)(vv);
      gv.push(vv ? "\n\n" : "\n");
      for (const [Sv, av] of ev) {
        var pv, dv, Nv;
        const vv = null !== (pv = null === Pv || void 0 === Pv || null === (dv = Pv[Sv]) || void 0 === dv ? void 0 : dv.icon) && void 0 !== pv ? pv : `${Sv} Enchantment`;
        gv.push({
          icon: vv,
          style: {
            fontSize: "1.5rem"
          }
        }), gv.push({
          str: `${Sv} ${null!==(Nv=(0,hv.S)(av))&&void 0!==Nv?Nv:av}\n`
        })
      }
      gv.push({
        str: "\n"
      });
      for (const [hv, av] of ev) {
        var lv, Tv, Wv, wv;
        const vv = null !== (lv = null === Pv || void 0 === Pv || null === (Tv = Pv[hv]) || void 0 === Tv ? void 0 : Tv.icon) && void 0 !== lv ? lv : `${hv} Enchantment`,
          zv = null !== (Wv = null === Pv || void 0 === Pv || null === (wv = Pv[hv]) || void 0 === wv ? void 0 : wv.description) && void 0 !== Wv ? Wv : (0, Sv.n)(hv);
        gv.push({
          icon: vv,
          style: {
            fontSize: "1.25rem",
            opacity: .75
          }
        }), gv.push({
          str: zv,
          style: {
            fontSize: "0.8em",
            fontWeight: "normal",
            opacity: .75
          }
        }), gv.push({
          str: "\n"
        })
      }
      return gv
    }
  },
  9013: (vv, zv, Pv) => {
    Pv.d(zv, {
      A: () => Tv,
      e: () => Nv,
      i: () => cv,
      m: () => Cv,
      n: () => dv,
      r: () => iv,
      u: () => lv,
      x: () => Wv,
      z: () => sv
    });
    var hv = Pv(302),
      Sv = Pv(626),
      ev = Pv(312),
      gv = Pv(4008),
      pv = Pv(9003);

    function dv(vv, zv) {
      var Pv;
      let {
        player: hv,
        chestOrCreative: Sv
      } = vv;
      var ev;
      return zv < hv.length ? null !== (ev = hv[zv]) && void 0 !== ev ? ev : null : null !== (Pv = Sv[zv - hv.length]) && void 0 !== Pv ? Pv : null
    }

    function Nv(vv) {
      var zv;
      return null !== (zv = vv.amount) && void 0 !== zv ? zv : 0
    }

    function lv(vv) {
      return 0 === vv.button || void 0 === vv.button
    }

    function Tv(vv) {
      return !!vv.shiftKey
    }

    function Wv(vv) {
      return "touches" in vv || "touch" === vv.pointerType || "pen" === vv.pointerType
    }
    const wv = new Set,
      av = 50;

    function sv(vv, zv) {
      var Pv;
      const hv = null === (Pv = vv[zv]) || void 0 === Pv ? void 0 : Pv.displayName;
      return (0, Sv.N)(hv) ? "string" !== typeof zv ? "" : (!wv.has(zv) && wv.size < av && (wv.add(zv), console.warn(`No item called "${zv}", so its hover shows the name as given`)), zv) : hv
    }

    function Cv(vv, zv, Pv) {
      var dv, Nv, lv, Tv, Wv, wv, av, Cv, iv, cv, Gv, mv, jv, fv;
      const Fv = vv.attributes,
        Yv = null !== (dv = null === (Nv = zv[vv.name]) || void 0 === Nv ? void 0 : Nv.rootName) && void 0 !== dv ? dv : vv.name,
        nv = null !== (lv = null !== (Tv = Fv.customDisplayName) && void 0 !== Tv ? Tv : null === (Wv = zv[vv.name]) || void 0 === Wv ? void 0 : Wv.displayName) && void 0 !== lv ? lv : sv(zv, Yv);
      let Ov = nv;
      const Dv = null === (wv = Fv.customAttributes) || void 0 === wv ? void 0 : wv.enchantmentTier;
      Dv && (Ov = (0, ev.sb)(nv, {
        colour: ev.nb[Dv]
      }));
      const Kv = null !== (av = null !== (Cv = null !== (iv = function(vv, zv) {
        var Pv;
        if (void 0 === vv || null !== (Pv = zv.customAttributes) && void 0 !== Pv && Pv.author) return vv;
        const Sv = (0, hv.Vb)(vv);
        return Sv.every((vv => "string" === typeof vv)) ? vv : Sv.map((vv => "string" === typeof vv ? vv : {
          icon: vv.icon,
          style: {
            fontSize: "1.5em"
          }
        }))
      }(Fv.customDescription, Fv)) && void 0 !== iv ? iv : null === (cv = zv[vv.name]) || void 0 === cv ? void 0 : cv.description) && void 0 !== Cv ? Cv : null === (Gv = zv[Yv]) || void 0 === Gv ? void 0 : Gv.description) && void 0 !== av ? av : "";
      let Vv = Kv;
      if (null !== (mv = Fv.customAttributes) && void 0 !== mv && mv.enchantments) Vv = (0, pv.e)(Kv, Fv.customAttributes.enchantments, Fv.customAttributes.enchantmentData);
      else if (Pv[Yv]) Vv = (0, ev.sb)(Kv), Vv.push({
        str: "\n"
      }), Vv.push({
        str: "Enchantable",
        style: {
          fontSize: "0.8em",
          fontWeight: "normal",
          opacity: .4
        }
      });
      else if (null !== (jv = Fv.customAttributes) && void 0 !== jv && jv.mobSettings) {
        var Uv, Rv;
        const vv = Fv.customAttributes.mobSettings;
        var xv, tv;
        if (Vv = [], (0, Sv.N)(Fv.customAttributes.health) || (Vv.push({
            str: "\n"
          }), Vv.push({
            icon: "Health",
            style: {
              fontSize: "1.5em"
            }
          }), Vv.push({
            str: " "
          }), Vv.push({
            str: Fv.customAttributes.health.toString()
          }), (0, Sv.N)(vv.maxHealth) || (Vv.push({
            str: "/"
          }), Vv.push({
            str: vv.maxHealth.toString()
          }))), !(0, Sv.N)(vv.attackDamage) && vv.attackDamage > 0 && (Vv.push({
            str: "\n"
          }), Vv.push({
            icon: "Iron Sword",
            style: {
              fontSize: "1.5em"
            }
          }), Vv.push({
            str: " "
          }), Vv.push({
            str: vv.attackDamage.toString()
          })), !(0, Sv.N)(vv.secondaryAttackDamage) && vv.secondaryAttackDamage > 0 && (Vv.push({
            str: "\n"
          }), Vv.push({
            icon: "Stone Crossbow",
            style: {
              fontSize: "1.5em"
            }
          }), Vv.push({
            str: " "
          }), Vv.push({
            str: vv.secondaryAttackDamage.toString()
          })), (0, Sv.N)(vv.baseRunningSpeed) || (Vv.push({
            str: "\n"
          }), Vv.push({
            icon: "Speed",
            style: {
              fontSize: "1.5em"
            }
          }), Vv.push({
            str: " "
          }), Vv.push({
            str: vv.baseRunningSpeed.toFixed(2)
          })), "Saddled" === vv.metaInfo) Vv.push({
          str: "\n"
        }), Vv.push({
          str: {
            translationKey: "general:has"
          }
        }), Vv.push({
          str: " "
        }), Vv.push({
          icon: null !== (xv = null === (tv = vv.tameInfo) || void 0 === tv ? void 0 : tv.saddleItemName) && void 0 !== xv ? xv : "Saddle",
          style: {
            fontSize: "1.5em"
          }
        });
        if (Vv.push({
            str: "\n"
          }), Vv.push({
            str: "\n"
          }), vv.petInfo && null !== (Uv = vv.tameInfo) && void 0 !== Uv && Uv.supportsFriendship) {
          const zv = gv.d.getIconsFromFriendshipPoints(vv.petInfo.friendshipPoints);
          for (const vv of zv) Vv.push({
            icon: vv,
            style: {
              fontSize: "1.5em"
            }
          });
          Vv.push({
            str: "\n"
          });
          const Pv = gv.d.getMobHungerLevel(vv.petInfo.lastFedAt);
          for (const vv of gv.d.hungerLevelIcons[Pv]) Vv.push({
            icon: vv,
            style: {
              fontSize: "1.5em"
            }
          });
          Vv.push({
            str: " "
          }), Vv.push({
            str: gv.d.hungerLevelTranslations[Pv],
            style: {
              fontWeight: "bolder"
            }
          })
        }
        if (vv.tameInfo && null !== (Rv = vv.tameInfo) && void 0 !== Rv && Rv.supportsFriendship) {
          var qv, Iv;
          let zv = null !== (qv = vv.tameInfo.likedFoods) && void 0 !== qv ? qv : [];
          Vv.push({
            str: "\n"
          }), Vv.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: gv.d.feedTextColours[gv.d.MobFoodType.Superliked]
            }
          }), Vv.push({
            str: " "
          }), null !== (Iv = vv.petInfo) && void 0 !== Iv && Iv.superlikedFoodKnown ? (Vv.push({
            icon: vv.petInfo.superlikedFood,
            style: {
              fontSize: "1.5em"
            }
          }), zv = zv.filter((zv => zv !== vv.petInfo.superlikedFood))) : Vv.push({
            icon: "Question Mark",
            style: {
              fontSize: "1.5em"
            }
          }), Vv.push({
            str: "\n"
          }), Vv.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: gv.d.feedTextColours[gv.d.MobFoodType.Liked]
            }
          }), Vv.push({
            str: " "
          });
          for (const vv of zv) Vv.push({
            icon: vv,
            style: {
              fontSize: "1.5em"
            }
          });
          Vv.push({
            str: "\n"
          }), Vv.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: gv.d.feedTextColours[gv.d.MobFoodType.Neutral]
            }
          }), Vv.push({
            str: " "
          });
          for (const Pv of null !== (Qv = vv.tameInfo.neutralFoods) && void 0 !== Qv ? Qv : []) {
            var Qv;
            Vv.push({
              icon: Pv,
              style: {
                fontSize: "1.5em"
              }
            })
          }
          Vv.push({
            str: "\n"
          }), Vv.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: gv.d.feedTextColours[gv.d.MobFoodType.Disliked]
            }
          }), Vv.push({
            str: " "
          });
          for (const Pv of null !== (Zv = vv.tameInfo.dislikedFoods) && void 0 !== Zv ? Zv : []) {
            var Zv;
            Vv.push({
              icon: Pv,
              style: {
                fontSize: "1.5em"
              }
            })
          }
        }
        Vv.length > 0 ? (Vv.shift(), Vv.unshift(...(0, ev.sb)(Kv))) : Vv = (0, ev.sb)(Kv)
      }
      return {
        name: Ov,
        desc: Vv,
        fontStyle: null !== (fv = Fv.customAttributes) && void 0 !== fv && fv.author ? "italic" : "normal"
      }
    }

    function iv(vv, zv, Pv, hv) {
      const Sv = dv(vv, Pv),
        ev = dv(vv, hv);
      if (!Sv) return !1;
      const gv = zv[Sv.name].armourReduction,
        pv = zv[ev.name].armourReduction;
      if (pv === gv) {
        var Nv, lv, Tv, Wv;
        const vv = null !== (Nv = null === (lv = Sv.attributes.customAttributes) || void 0 === lv ? void 0 : lv.enchantmentTier) && void 0 !== Nv ? Nv : "Tier 0",
          zv = null !== (Tv = null === (Wv = ev.attributes.customAttributes) || void 0 === Wv ? void 0 : Wv.enchantmentTier) && void 0 !== Tv ? Tv : "Tier 0";
        return parseInt(vv.replace("Tier ", "")) >= parseInt(zv.replace("Tier ", ""))
      }
      return gv > pv
    }

    function cv(vv) {
      let zv;
      if ("number" === typeof vv) {
        const Pv = document.querySelector(`[data-inven-idx="${vv}"]`);
        if (!Pv) return null;
        zv = Pv.getBoundingClientRect()
      } else zv = vv.getBoundingClientRect();
      return {
        x: zv.left + zv.width / 2,
        y: zv.top + zv.height / 2
      }
    }
  },
  8895: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => wv,
      h: () => av,
      k: () => sv
    });
    var hv = Pv(1442),
      Sv = Pv(52),
      ev = Pv(1295),
      gv = Pv(4285),
      pv = Pv(2273),
      dv = Pv(1175),
      Nv = Pv(73),
      lv = Pv(1923),
      Tv = Pv(1327),
      Wv = Pv(1082);

    function wv(vv) {
      let {
        show: zv,
        onClose: Pv
      } = vv;
      const {
        requestedGameNameWithVariation: hv,
        lobbyName: Sv,
        shownLobbyName: ev
      } = (0, lv.h)("connectedGame"), dv = (0, pv.d)(hv, Sv, !1);
      return Nv.featureFlags.canUseInviteLinks && (0, Wv.jsx)(gv.c, {
        show: zv,
        close: Pv,
        padShowsHud: !0,
        togglePointerLock: !1,
        globallyUniqueKey: "InviteLinkBox",
        doGameplayStartStopOnShow: !0,
        children: (0, Wv.jsxs)("div", {
          className: "InviteLinkBox AnimFadeInScaleUp",
          children: [(0, Wv.jsx)("div", {
            className: "InviteLinkBoxHeader SmallTextBold",
            children: "Invite Friends"
          }), (0, Wv.jsxs)("div", {
            className: "InviteLinkBoxDescription SmallTextLight",
            children: [(0, Wv.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: '"Join Lobby Name" Button Info'
            }), "Game: ", null === dv ? (0, Wv.jsx)(Tv.c, {}) : dv, (0, Wv.jsx)("br", {}), "Lobby Name: ", ev, (0, Wv.jsx)("br", {}), (0, Wv.jsx)("br", {}), (0, Wv.jsx)("br", {}), (0, Wv.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: "Link"
            })]
          }), (0, Wv.jsx)(av, {})]
        })
      })
    }

    function av() {
      var vv;
      const {
        t: zv
      } = (0, dv.x)(), Pv = null !== (vv = sv(Nv.featureFlags.canUseInviteLinks)) && void 0 !== vv ? vv : "Loading Link...", [ev, gv] = (0, Sv.useState)(0), [pv, lv] = (0, Sv.useReducer)((vv => vv + 1), 0);
      return (0, Sv.useEffect)((() => {
        const vv = setTimeout((() => {
          lv()
        }), 1100);
        return () => {
          clearTimeout(vv)
        }
      }), [ev]), Nv.featureFlags.canUseInviteLinks && (0, Wv.jsxs)("div", {
        className: "InviteLinkInnerWrapper",
        children: [(0, Wv.jsx)("div", {
          className: "InviteLinkInner",
          children: Pv
        }), (0, Wv.jsx)(hv.d, {
          className: "InviteLinkCopyButton",
          onClick: () => {
            navigator.clipboard.writeText(Pv).catch((vv => {
              console.error("Failed to copy invite link:", vv)
            })), gv(Date.now())
          },
          disabled: Date.now() - ev < 1e3,
          children: Date.now() - ev < 1e3 ? zv("general:copied") : zv("general:copy")
        })]
      })
    }

    function sv(vv) {
      const [zv, Pv] = (0, Sv.useState)(null);
      return (0, Sv.useEffect)((() => {
        if (!vv) return;
        let zv = !0;
        return (0, ev.F)().then((vv => {
          zv && Pv(vv)
        })).catch((vv => {
          console.error("Failed to get invite link:", vv)
        })), () => {
          zv = !1
        }
      }), [vv]), zv
    }
  },
  8991: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Nv
    });
    var hv = Pv(52),
      Sv = Pv(1035),
      ev = Pv.n(Sv),
      gv = Pv(1923),
      pv = Pv(1082);

    function dv(vv) {
      const zv = Math.floor(vv / 3600),
        Pv = Math.floor(vv % 3600 / 60),
        hv = Math.floor(vv % 60),
        Sv = `${Pv.toString().padStart(2,"0")}:${hv.toString().padStart(2,"0")}`;
      return zv > 0 ? `${zv}:${Sv}` : Sv
    }
    const Nv = (0, hv.memo)((function(vv) {
      let {
        className: zv
      } = vv;
      const {
        recording: Pv,
        seconds: hv
      } = (0, gv.h)("replayRecorder");
      return Pv ? (0, pv.jsxs)("div", {
        className: ev()("RecordingIndicator", zv),
        children: [(0, pv.jsx)("span", {
          className: "RecordingIndicatorDot"
        }), (0, pv.jsx)("span", {
          className: "RecordingIndicatorLabel",
          children: "REC"
        }), (0, pv.jsx)("span", {
          className: "RecordingIndicatorTime",
          children: dv(hv)
        })]
      }) : null
    }))
  },
  4635: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => Cv
    });
    var hv = Pv(1035),
      Sv = Pv.n(hv),
      ev = Pv(4398),
      gv = Pv(1175),
      pv = Pv(1042),
      dv = Pv(1442),
      Nv = Pv(1482),
      lv = Pv(1336),
      Tv = Pv(2384),
      Wv = Pv(1082);
    const wv = {
      youtube: {
        icon: "youtube",
        color: "#FF0033",
        name: "YouTube"
      },
      tiktok: {
        icon: "tiktok",
        color: "#0F0F0F",
        name: "TikTok"
      },
      instagram: {
        icon: "instagram",
        color: "#E1306C",
        name: "Instagram"
      },
      twitter: {
        icon: "x-twitter",
        color: "#0F0F0F",
        name: "X"
      },
      twitch: {
        icon: "twitch",
        color: "#9146FF",
        name: "Twitch"
      }
    };

    function av(vv) {
      let {
        platform: zv
      } = vv;
      const Pv = "youtube" === zv;
      return (0, Wv.jsxs)("span", {
        className: Sv()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: Pv
        }),
        children: [Pv && (0, Wv.jsx)(Tv.e, {
          variant: "white"
        }), !Pv && (0, Wv.jsx)(pv.b, {
          name: wv[zv].icon,
          kit: "brands"
        })]
      })
    }

    function sv(vv) {
      let {
        platform: zv,
        link: Pv,
        editable: hv,
        userContext: Sv,
        onLinksUpdated: Tv
      } = vv;
      const {
        t: sv
      } = (0, gv.x)(), Cv = wv[zv];
      if (!Pv && !hv) return null;

      function iv() {
        var vv;
        if (!Sv || !Tv) return;
        lv.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: Cv.name
            }
          },
          prefixText: ev.q[zv],
          placeholderText: "playBloxd",
          initialValue: null !== (vv = null === Pv || void 0 === Pv ? void 0 : Pv.handle) && void 0 !== vv ? vv : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: Pv ? "general:remove" : void 0
        }).getResult().then((async vv => {
          if ("notificationTornDown" !== vv && null !== vv) try {
            "submit" === vv.type ? await Nv.e.setSocialLink(Sv, zv, vv.value) : await Nv.e.clearSocialLink(Sv, zv), Tv()
          } catch (Pv) {
            console.error("Failed to update social link", Pv), lv.NotificationProvider.showAlertPopup({
              title: Pv.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (Pv) {
        const vv = `@${Pv.handle}`;
        return (0, Wv.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: Cv.color
          },
          href: Pv.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, Wv.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, Wv.jsx)(av, {
              platform: zv
            }), (0, Wv.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, Wv.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: vv
              })
            })]
          }), hv && (0, Wv.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, dv.U)({
              stopPropagation: !0
            }),
            onClick: vv => {
              vv.stopPropagation(), vv.preventDefault(), iv()
            },
            children: (0, Wv.jsx)(pv.b, {
              name: "pen-to-square"
            })
          }), !hv && (0, Wv.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, Wv.jsx)(pv.b, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, Wv.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: Cv.color
        },
        ...(0, dv.U)(),
        onClick: () => {
          iv()
        },
        children: [(0, Wv.jsx)(av, {
          platform: zv
        }), (0, Wv.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, Wv.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: Cv.name
          }), (0, Wv.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: sv("homePage:profileSocialLinkAdd")
          })]
        }), (0, Wv.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, Wv.jsx)(pv.b, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function Cv(vv) {
      let {
        socialLinks: zv,
        editable: Pv = !1,
        userContext: hv,
        onLinksUpdated: Sv
      } = vv;
      if (!Pv && 0 === zv.length) return null;
      const gv = new Map(zv.map((vv => [vv.platform, vv]))),
        pv = Pv ? ev.n : zv.map((vv => vv.platform));
      return (0, Wv.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, Wv.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: pv.map((vv => (0, Wv.jsx)(sv, {
            platform: vv,
            link: gv.get(vv),
            editable: Pv,
            userContext: hv,
            onLinksUpdated: Sv
          }, vv)))
        })
      })
    }
  },
  8997: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => ev
    });
    var hv = Pv(4287),
      Sv = Pv(4292);

    function ev(vv) {
      let {
        children: zv,
        showing: Pv,
        globallyUniqueKey: ev,
        alwaysMountChildren: gv = !1,
        doGameplayStartStopOnShow: pv = !0,
        keepsMovement: dv = !1
      } = vv;
      return (0, Sv.e)(!0, Pv, ev, dv), (0, hv.b)(pv, Pv), Pv || gv ? zv : null
    }
  },
  9054: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => ev
    });
    var hv = Pv(52),
      Sv = Pv(3329);

    function ev() {
      const [vv, zv] = (0, hv.useState)(!1);
      return (0, hv.useLayoutEffect)((() => {
        let vv = !0;
        return (0, Sv.e)().then((() => {
          vv && zv(!0)
        })), () => {
          vv = !1
        }
      }), []), vv
    }
  },
  6287: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => ev
    });
    var hv = Pv(52),
      Sv = Pv(39);

    function ev(vv, zv) {
      var Pv;
      const [ev, gv] = (0, hv.useState)(null !== (Pv = Sv.h.getItem(vv)) && void 0 !== Pv ? Pv : zv);
      return [ev, zv => {
        Sv.h.setItem(vv, zv), gv(zv)
      }]
    }
  },
  8970: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => sv,
      c: () => av
    });
    Pv(8975);
    var hv = Pv(1035),
      Sv = Pv.n(hv),
      ev = Pv(52),
      gv = Pv(8940);

    function pv(vv, zv) {
      return Math.max(1, Math.round(vv * zv))
    }

    function dv(vv, zv) {
      const Pv = zv * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
        hv = function(vv, zv) {
          if (vv.lines) return pv(vv.lineThickness, zv) % 2;
          if (vv.dot) return pv(vv.dotSize, zv) % 2;
          return Nv(vv, zv) % 2
        }(vv, zv),
        Sv = lv(vv.lineThickness * Pv, hv),
        ev = pv(vv.lineLength, Pv),
        gv = Math.round(vv.gap * Pv),
        dv = vv.outline > 0 ? pv(vv.outline, Pv) : 0,
        Wv = [];
      if (vv.lines && (Wv.push({
          x: Sv + gv,
          y: 0,
          w: ev,
          h: Sv,
          arm: "right"
        }), Wv.push({
          x: -gv - ev,
          y: 0,
          w: ev,
          h: Sv,
          arm: "left"
        }), Wv.push({
          x: 0,
          y: Sv + gv,
          w: Sv,
          h: ev,
          arm: "down"
        }), vv.tStyle || Wv.push({
          x: 0,
          y: -gv - ev,
          w: Sv,
          h: ev,
          arm: "up"
        }), 0 === gv && Wv.push({
          x: 0,
          y: 0,
          w: Sv,
          h: Sv
        })), vv.dot) {
        const zv = lv(vv.dotSize * Pv, hv),
          ev = vv.lines && 0 === gv && vv.dotSize > vv.lineThickness ? Math.max(zv, Sv + 2) : zv,
          pv = (Sv - ev) / 2;
        Wv.push({
          x: pv,
          y: pv,
          w: ev,
          h: ev
        })
      }
      const wv = Wv.map((vv => ({
        ...vv,
        x: vv.x - dv,
        y: vv.y - dv,
        w: vv.w + 2 * dv,
        h: vv.h + 2 * dv
      })));
      let av = null,
        sv = null;
      if (vv.circle) {
        const zv = pv(vv.circleThickness, Pv),
          ev = function(vv, zv) {
            return vv + (vv % 2 === zv ? 0 : 1)
          }(Nv(vv, Pv), hv),
          gv = (Sv - ev) / 2;
        av = Tv(gv, ev, zv), dv > 0 && (sv = Tv(gv - dv, ev + 2 * dv, zv + 2 * dv))
      }
      return {
        cell: Sv,
        fills: Wv,
        outlines: dv > 0 ? wv : [],
        ring: av,
        ringOutline: sv
      }
    }

    function Nv(vv, zv) {
      return Math.round(vv.circleRadius * zv * 2 + pv(vv.circleThickness, zv))
    }

    function lv(vv, zv) {
      return Math.max(2 - zv, 2 * Math.round((vv - zv) / 2) + zv)
    }

    function Tv(vv, zv, Pv) {
      const hv = 2 * Pv >= zv - 1;
      return {
        x: vv,
        y: vv,
        size: zv,
        border: Math.min(Pv, Math.floor(zv / 2)),
        filled: hv
      }
    }
    var Wv = Pv(1082);
    const wv = 1.4;

    function av(vv, zv) {
      return vv && zv ? `scale(${wv})` : "scale(1)"
    }

    function sv(vv) {
      return "classic" === vv.settings.style ? (0, Wv.jsx)(cv, {
        ...vv
      }) : (0, Wv.jsx)(nv, {
        ...vv
      })
    }
    const Cv = .125;

    function iv(vv, zv) {
      const Pv = {};
      if (vv.color !== gv.f.color && (Pv.color = (0, gv.m)(vv.color)), vv.opacity !== gv.f.opacity && (Pv.opacity = vv.opacity / 100), vv.outline !== gv.f.outline || vv.outlineColor !== gv.f.outlineColor) {
        const zv = vv.outline,
          hv = (0, gv.m)(vv.outlineColor);
        Pv.textShadow = zv > 0 ? `-${zv}px 0 ${hv}, 0 ${zv}px ${hv}, ${zv}px 0 ${hv}, 0 -${zv}px ${hv}` : "none"
      }
      if (vv.size !== gv.f.size) {
        const hv = vv.size / 100;
        Pv.fontSize = zv ? `calc(max(1.3rem, 18px) * ${hv})` : `calc(1.3rem * ${hv})`, Pv.marginTop = `-${Cv}em`, Pv.transformOrigin = `50% calc(50% + ${Cv}em)`
      }
      return Pv
    }

    function cv(vv) {
      let {
        settings: zv,
        touch: Pv,
        inPreview: hv,
        inEditor: ev,
        pressed: gv = !1,
        pressRef: pv
      } = vv;
      return (0, Wv.jsx)("div", {
        className: Sv()("Crosshair", {
          Touch: Pv,
          CrosshairInPreview: hv,
          CrosshairInEditor: ev || hv
        }),
        ref: pv,
        style: {
          transform: av(gv, zv.growOnClick),
          ...iv(zv, Pv)
        },
        children: "+"
      })
    }

    function Gv(vv, zv) {
      return vv / zv + "px"
    }

    function mv(vv, zv, Pv, hv) {
      return {
        ...Fv(vv, zv, Pv),
        width: Gv(vv.w, Pv),
        height: Gv(vv.h, Pv),
        background: hv
      }
    }

    function jv(vv, zv, Pv) {
      return {
        left: Gv(vv.x, zv),
        top: Gv(vv.y, zv),
        width: Gv(vv.size, zv),
        height: Gv(vv.size, zv),
        borderWidth: Gv(vv.border, zv),
        borderColor: Pv,
        background: vv.filled ? Pv : void 0
      }
    }
    const fv = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function Fv(vv, zv, Pv) {
      const [hv, Sv] = vv.arm ? fv[vv.arm] : [0, 0], ev = Math.round(zv * Pv);
      return {
        left: Gv(vv.x + hv * ev, Pv),
        top: Gv(vv.y + Sv * ev, Pv)
      }
    }

    function Yv(vv) {
      return vv.arm ? {
        "data-arm": vv.arm,
        "data-x": vv.x,
        "data-y": vv.y
      } : {}
    }

    function nv(vv) {
      let {
        settings: zv,
        inPreview: Pv,
        inEditor: hv,
        pressed: pv = !1,
        spread: Nv,
        spreadRef: lv
      } = vv;
      const Tv = (0, ev.useRef)(null),
        {
          box: av,
          dpr: sv
        } = function(vv) {
          const [zv, Pv] = (0, ev.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, ev.useLayoutEffect)((() => {
            const zv = vv.current;
            if (!zv) return;
            const hv = () => {
              const vv = zv.getBoundingClientRect(),
                hv = window.devicePixelRatio || 1;
              Pv((zv => zv.dpr === hv && zv.box.left === vv.left && zv.box.top === vv.top && zv.box.width === vv.width && zv.box.height === vv.height ? zv : {
                box: {
                  left: vv.left,
                  top: vv.top,
                  width: vv.width,
                  height: vv.height
                },
                dpr: hv
              }))
            };
            hv();
            const Sv = new ResizeObserver(hv);
            return Sv.observe(zv), window.addEventListener("resize", hv), window.addEventListener("scroll", hv, !0), () => {
              Sv.disconnect(), window.removeEventListener("resize", hv), window.removeEventListener("scroll", hv, !0)
            }
          }), [vv]), zv
        }(Tv),
        Cv = (0, ev.useRef)(sv);
      Cv.current = sv;
      const iv = dv(zv, sv, pv && zv.growOnClick ? wv : 1),
        cv = function(vv, zv, Pv) {
          const hv = Math.round((vv.left + vv.width / 2) * Pv - zv / 2),
            Sv = Math.round((vv.top + vv.height / 2) * Pv - zv / 2);
          return {
            x: hv / Pv - vv.left,
            y: Sv / Pv - vv.top
          }
        }(av, iv.cell, sv),
        Gv = (0, gv.m)(zv.color),
        fv = (0, gv.m)(zv.outlineColor),
        nv = (0, ev.useRef)(0);
      (0, ev.useLayoutEffect)((() => {
        if (lv) return lv.current = vv => {
          var zv;
          nv.current = vv, null === (zv = Tv.current) || void 0 === zv || zv.querySelectorAll("[data-arm]").forEach((zv => {
            Object.assign(zv.style, Fv(function(vv) {
              return {
                x: Number(vv.dataset.x),
                y: Number(vv.dataset.y),
                arm: vv.dataset.arm
              }
            }(zv), vv, Cv.current))
          }))
        }, () => {
          lv.current = null
        }
      }), [lv]);
      const Ov = null !== Nv && void 0 !== Nv ? Nv : nv.current;
      return (0, Wv.jsx)("div", {
        ref: Tv,
        className: Sv()("CrosshairShapes", {
          CrosshairInPreview: Pv,
          CrosshairInEditor: hv || Pv,
          CrosshairSpreads: void 0 !== lv
        }),
        children: (0, Wv.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: cv.x,
            top: cv.y,
            opacity: zv.opacity / 100
          },
          children: (0, Wv.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [iv.ringOutline && (0, Wv.jsx)("div", {
              className: "CrosshairRing",
              style: jv(iv.ringOutline, sv, fv)
            }), iv.outlines.map(((vv, zv) => (0, Wv.jsx)("div", {
              className: "CrosshairPart",
              ...Yv(vv),
              style: mv(vv, Ov, sv, fv)
            }, `o${zv}`))), iv.ring && (0, Wv.jsx)("div", {
              className: "CrosshairRing",
              style: jv(iv.ring, sv, Gv)
            }), iv.fills.map(((vv, zv) => (0, Wv.jsx)("div", {
              className: "CrosshairPart",
              ...Yv(vv),
              style: mv(vv, Ov, sv, Gv)
            }, `f${zv}`)))]
          })
        })
      })
    }
  },
  8983: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => lv,
      h: () => Cv,
      k: () => sv
    });
    var hv = Pv(8940);
    const Sv = "XH1-",
      ev = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      gv = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      pv = ["color", "outlineColor"],
      dv = 1 + 3 * pv.length + gv.length + 1,
      Nv = Math.ceil(8 * dv / Math.log2(62)),
      lv = Sv.length + Nv;

    function Tv(vv) {
      let zv = 90;
      for (const Pv of vv) zv = 31 * zv + Pv & 255;
      return zv
    }
    const Wv = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      wv = BigInt(Wv.length);

    function av(vv, zv) {
      let Pv = 0n;
      for (const Sv of vv) {
        const vv = Wv.indexOf(Sv);
        if (vv < 0) return null;
        Pv = Pv * wv + BigInt(vv)
      }
      if (Pv >> BigInt(8 * zv) !== 0n) return null;
      const hv = [];
      for (let Sv = 0; Sv < zv; Sv++) hv.unshift(Number(0xffn & Pv)), Pv >>= 8n;
      return hv
    }

    function sv(vv) {
      let zv = "shapes" === vv.style ? 1 : 0;
      ev.forEach(((Pv, hv) => {
        vv[Pv] && (zv |= 1 << hv + 1)
      }));
      const Pv = [zv];
      for (const Sv of pv) {
        const zv = (0, hv.i)(Sv, vv[Sv]);
        Pv.push(zv >> 16 & 255, zv >> 8 & 255, 255 & zv)
      }
      for (const Sv of gv) {
        const {
          min: zv,
          step: ev
        } = hv.e[Sv];
        Pv.push(Math.round(((0, hv.i)(Sv, vv[Sv]) - zv) / ev))
      }
      return Pv.push(Tv(Pv)), Sv + function(vv, zv) {
        let Pv = 0n;
        for (const Sv of vv) Pv = Pv << 8n | BigInt(Sv);
        let hv = "";
        for (let Sv = 0; Sv < zv; Sv++) hv = Wv[Number(Pv % wv)] + hv, Pv /= wv;
        return hv
      }(Pv, Nv)
    }

    function Cv(vv) {
      for (const zv of vv.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${Nv}})`, "gi"))) {
        const vv = iv(av(zv[1], dv));
        if (vv) return vv
      }
      return null
    }

    function iv(vv) {
      if (!vv || vv.length !== dv || Tv(vv.slice(0, -1)) !== vv[vv.length - 1]) return null;
      const zv = vv[0],
        Pv = {
          ...hv.f,
          style: 1 & zv ? "shapes" : "classic"
        };
      ev.forEach(((vv, hv) => {
        Pv[vv] = 0 !== (zv & 1 << hv + 1)
      }));
      let Sv = 1;
      for (const hv of pv) Pv[hv] = vv[Sv] << 16 | vv[Sv + 1] << 8 | vv[Sv + 2], Sv += 3;
      for (const ev of gv) {
        const {
          min: zv,
          step: gv
        } = hv.e[ev];
        Pv[ev] = (0, hv.i)(ev, zv + vv[Sv] * gv), Sv++
      }
      return Pv
    }
  },
  8940: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => hv,
      f: () => Sv,
      i: () => ev,
      m: () => Nv,
      p: () => dv,
      t: () => lv,
      v: () => pv,
      x: () => gv
    });
    const hv = {
        opacity: {
          min: 5,
          max: 100,
          step: 1
        },
        outline: {
          min: 0,
          max: 4,
          step: .1
        },
        size: {
          min: 25,
          max: 400,
          step: 5
        },
        lineLength: {
          min: .5,
          max: 40,
          step: .5
        },
        lineThickness: {
          min: .5,
          max: 10,
          step: .5
        },
        gap: {
          min: 0,
          max: 40,
          step: .5
        },
        dotSize: {
          min: .5,
          max: 12,
          step: .5
        },
        circleRadius: {
          min: 1,
          max: 60,
          step: .5
        },
        circleThickness: {
          min: .5,
          max: 6,
          step: .5
        },
        color: {
          min: 0,
          max: 16777215,
          step: 1
        },
        outlineColor: {
          min: 0,
          max: 16777215,
          step: 1
        }
      },
      Sv = Object.freeze({
        style: "classic",
        color: 16777215,
        opacity: 100,
        outline: 1.2,
        outlineColor: 0,
        growOnClick: !0,
        size: 100,
        lines: !0,
        lineLength: 6,
        lineThickness: 2,
        gap: 3,
        tStyle: !1,
        dot: !1,
        dotSize: 2,
        circle: !1,
        circleRadius: 10,
        circleThickness: 1,
        forGuns: !1
      });

    function ev(vv, zv) {
      var Pv;
      const {
        min: ev,
        max: gv,
        step: pv
      } = hv[vv];
      if (!Number.isFinite(zv)) return Sv[vv];
      const dv = (null !== (Pv = String(pv).split(".")[1]) && void 0 !== Pv ? Pv : "").length,
        Nv = Number((Math.round(zv / pv) * pv).toFixed(dv));
      return Math.min(gv, Math.max(ev, Nv))
    }

    function gv(vv, zv, Pv) {
      const hv = "number" === typeof Pv ? ev(zv, Pv) : Pv;
      return {
        ...vv,
        [zv]: hv
      }
    }

    function pv(vv, zv) {
      let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(Sv).every((hv => Pv.includes(hv) || vv[hv] === zv[hv]))
    }

    function dv(vv) {
      return pv(vv, Sv)
    }

    function Nv(vv) {
      return `#${vv.toString(16).padStart(6,"0")}`
    }

    function lv(vv) {
      const zv = /^#?([0-9a-f]{6})$/i.exec(vv.trim());
      return zv ? parseInt(zv[1], 16) : null
    }
  },
  8987: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => Tv,
      f: () => Wv
    });
    var hv = Pv(52),
      Sv = Pv(39),
      ev = Pv(8983),
      gv = Pv(8940);
    const pv = "crosshairCode";
    let dv = null;
    const Nv = new Set;

    function lv() {
      if (null === dv) {
        var vv;
        const zv = Sv.h.getItem(pv);
        dv = null !== (vv = "string" === typeof zv ? (0, ev.h)(zv) : null) && void 0 !== vv ? vv : gv.f
      }
      return dv
    }

    function Tv(vv) {
      dv = vv, (0, gv.p)(vv) ? Sv.h.removeItem(pv) : Sv.h.setItem(pv, (0, ev.k)(vv));
      for (const zv of Nv) zv()
    }

    function Wv() {
      const [vv, zv] = (0, hv.useState)(lv);
      return (0, hv.useEffect)((() => {
        const vv = () => {
          zv(lv())
        };
        return vv(), Pv = vv, Nv.add(Pv), () => {
          Nv.delete(Pv)
        };
        var Pv
      }), []), vv
    }
  },
  8563: (vv, zv, Pv) => {
    function hv(vv) {
      return {
        x: (vv.left + vv.right) / 2,
        y: (vv.top + vv.bottom) / 2
      }
    }

    function Sv(vv) {
      return 0 === vv.length ? null : vv.reduce(((vv, zv) => ({
        left: Math.min(vv.left, zv.left),
        top: Math.min(vv.top, zv.top),
        right: Math.max(vv.right, zv.right),
        bottom: Math.max(vv.bottom, zv.bottom)
      })))
    }

    function ev(vv, zv) {
      const Pv = Math.max(0, (zv - (vv.right - vv.left)) / 2),
        hv = Math.max(0, (zv - (vv.bottom - vv.top)) / 2);
      return {
        left: vv.left - Pv,
        top: vv.top - hv,
        right: vv.right + Pv,
        bottom: vv.bottom + hv
      }
    }

    function gv(vv, zv) {
      return zv.x >= vv.left && zv.x <= vv.right && zv.y >= vv.top && zv.y <= vv.bottom
    }

    function pv(vv, zv, Pv) {
      let Sv = null,
        pv = 1 / 0;
      for (const {
          id: hv,
          box: ev
        }
        of zv) {
        const zv = (ev.right - ev.left) * (ev.bottom - ev.top);
        gv(ev, vv) && zv < pv && (pv = zv, Sv = hv)
      }
      if (null !== Sv) return Sv;
      let dv = 1 / 0;
      for (const {
          id: Nv,
          box: lv
        }
        of zv) {
        if (!gv(ev(lv, Pv), vv)) continue;
        const zv = hv(lv),
          pv = Math.hypot(vv.x - zv.x, vv.y - zv.y);
        pv < dv && (dv = pv, Sv = Nv)
      }
      return Sv
    }

    function dv(vv, zv, Pv) {
      return {
        left: Pv.left,
        top: Pv.top,
        right: vv - Pv.right,
        bottom: zv - Pv.bottom
      }
    }

    function Nv(vv, zv, Pv, hv) {
      const Sv = (vv, zv, Pv) => Math.max(Math.min(zv, 0), Math.min(Math.max(Pv, 0), vv));
      return {
        x: Sv(zv, hv.left - vv.left, hv.right - vv.right),
        y: Sv(Pv, hv.top - vv.top, hv.bottom - vv.bottom)
      }
    }

    function lv(vv, zv, Pv, hv, Sv) {
      const ev = vv.dx * hv + zv,
        gv = vv.dy * Sv + Pv,
        pv = vv => Math.max(-1, Math.min(1, vv));
      return {
        dx: pv(ev / hv),
        dy: pv(gv / Sv)
      }
    }

    function Tv(vv, zv, Pv, hv) {
      return zv <= 0 || Pv <= 0 ? 1 : Math.max(.05, Math.min(1, vv / zv, hv / Pv))
    }

    function Wv(vv, zv, Pv) {
      return Math.min(vv.right, zv.right) - Math.max(vv.left, zv.left) > Pv && Math.min(vv.bottom, zv.bottom) - Math.max(vv.top, zv.top) > Pv
    }

    function wv(vv, zv) {
      const Pv = (vv, zv, Pv, hv) => zv - vv > hv - Pv ? Pv - vv > zv - hv ? hv - zv : Pv - vv : vv < Pv ? Pv - vv : zv > hv ? hv - zv : 0;
      return {
        x: Pv(vv.left, vv.right, zv.left, zv.right),
        y: Pv(vv.top, vv.bottom, zv.top, zv.bottom)
      }
    }

    function av(vv, zv) {
      let {
        avoid: Pv = null,
        bounds: hv = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, Sv = 0, ev = 1 / 0;
      return vv.forEach(((vv, gv) => {
        const pv = zv.filter((zv => Wv(vv, zv, 0))).length,
          dv = null !== hv && (vv.left < hv.left || vv.top < hv.top || vv.right > hv.right || vv.bottom > hv.bottom),
          Nv = pv + (Pv && Wv(vv, Pv, 0) ? 1e3 : 0) + (dv ? 1e6 : 0);
        Nv < ev && (Sv = gv, ev = Nv)
      })), Sv
    }
    Pv.d(zv, {
      C: () => wv,
      F: () => Sv,
      b: () => hv,
      f: () => gv,
      h: () => Wv,
      j: () => Nv,
      m: () => ev,
      p: () => av,
      s: () => lv,
      u: () => pv,
      v: () => Tv,
      z: () => dv
    })
  },
  8931: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => ev,
      f: () => Sv
    });
    var hv = Pv(22);

    function Sv(vv, zv) {
      return vv && !zv
    }

    function ev() {
      return Sv(hv.c.get("isTouchScreen"), hv.c.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  8359: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => Sv,
      d: () => hv
    });
    const hv = "controllerOpenKeyboard",
      Sv = "controllerKeyboardVisible"
  },
  8888: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => hv
    });
    const hv = new Set(["chunkBorders"])
  },
  8882: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      ALL_DEV_TOOLS: () => gv,
      coreDevTools: () => Nv,
      devTools: () => dv
    });
    var hv = Pv(635),
      Sv = Pv(1285),
      ev = Pv(8888);
    const gv = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function pv() {
      const {
        noaDevTools: vv
      } = await Pv.e(231).then((() => Pv(40363)));
      return vv
    }
    const dv = new class {
        constructor() {
          this.loadHost = pv, this.tools = gv
        }
        setHost(vv) {
          this.tools = null === vv ? gv : vv.tools, this.loadHost = null === vv ? pv : async () => vv
        }
        supports(vv) {
          return this.tools.has(vv)
        }
        async downloadScene(vv, zv) {
          const Pv = await this.loadHost();
          await Pv.downloadScene(vv, zv)
        }
        async setAmbientLightIntensity(vv) {
          const zv = await this.loadHost();
          await zv.setAmbientLightIntensity(vv)
        }
      },
      Nv = {
        tools: ev.e,
        downloadScene: async () => {
          throw new Error("This client can't download the scene")
        },
        setAmbientLightIntensity: async () => {
          throw new Error("This client can't set the ambient light")
        }
      };
    hv.r && dv.setHost(Nv), (0, Sv.z)((() => {
      dv.setHost(Nv)
    }))
  },
  9049: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => gv,
      g: () => Sv,
      k: () => lv
    });
    var hv = Pv(1548);

    function Sv(vv) {
      var zv;
      return {
        ...gv.store,
        yaw: gv.store.yaw + (null !== (zv = hv.b[vv].previewYaw) && void 0 !== zv ? zv : 0)
      }
    }
    const ev = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      gv = {
        player: ev,
        store: {
          ...ev,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function pv(vv, zv) {
      vv instanceof Promise ? vv.then(zv).catch((vv => {
        console.error("Couldn't open the preview", vv)
      })) : zv(vv)
    }
    class dv {
      constructor(vv) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, pv(vv, (vv => {
          this.closed ? vv.close() : (this.opened = vv, null !== this.size && vv.resize(this.size.width, this.size.height), null !== this.view && vv.show(this.view))
        }))
      }
      show(vv) {
        var zv;
        this.view = vv, null === (zv = this.opened) || void 0 === zv || zv.show(vv)
      }
      resize(vv, zv) {
        var Pv;
        this.size = {
          width: vv,
          height: zv
        }, null === (Pv = this.opened) || void 0 === Pv || Pv.resize(vv, zv)
      }
      close() {
        var vv;
        this.closed = !0, null === (vv = this.opened) || void 0 === vv || vv.close(), this.opened = null
      }
    }
    class Nv {
      constructor(vv) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(vv).then((vv => vv.ready)), pv(vv, (vv => {
          this.closed ? vv.close() : (this.opened = vv, null !== this.size && vv.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var vv, zv;
        return null !== (vv = null === (zv = this.opened) || void 0 === zv ? void 0 : zv.isReady()) && void 0 !== vv && vv
      }
      setCosmetic(vv, zv) {
        var Pv;
        null === (Pv = this.opened) || void 0 === Pv || Pv.setCosmetic(vv, zv)
      }
      playEmote(vv) {
        var zv;
        null === (zv = this.opened) || void 0 === zv || zv.playEmote(vv)
      }
      setOrbit(vv) {
        var zv;
        null === (zv = this.opened) || void 0 === zv || zv.setOrbit(vv)
      }
      resetCamera() {
        var vv;
        null === (vv = this.opened) || void 0 === vv || vv.resetCamera()
      }
      async untilDrawn(vv) {
        var zv;
        await this.ready, await (null === (zv = this.opened) || void 0 === zv ? void 0 : zv.untilDrawn(vv))
      }
      resize(vv, zv) {
        var Pv;
        this.size = {
          width: vv,
          height: zv
        }, null === (Pv = this.opened) || void 0 === Pv || Pv.resize(vv, zv)
      }
      close() {
        var vv;
        this.closed = !0, null === (vv = this.opened) || void 0 === vv || vv.close(), this.opened = null
      }
    }
    const lv = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(vv) {
        this.host = vv
      }
      setDefaultHost(vv) {
        this.makeDefault = vv
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(vv) {
        return new dv(this.current().openMob(vv))
      }
      openPet(vv) {
        return new dv(this.current().openPet(vv))
      }
      openMobLineup(vv) {
        return new dv(this.current().openMobLineup(vv))
      }
      openCharacter(vv, zv) {
        return new Nv(this.current().openCharacter(vv, zv))
      }
    }
  },
  9044: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => hv.e,
      i: () => hv.g,
      j: () => hv.k
    });
    var hv = Pv(9049);
    class Sv {
      constructor(vv) {
        this.load = vv, this.loaded = null, this.loading = null
      }
      run(vv) {
        return null !== this.loaded ? vv(this.loaded) : (this.loading ??= this.load().then((vv => (this.loaded = vv, vv)), (vv => {
          throw this.loading = null, vv
        })), this.loading.then(vv))
      }
    }
    class ev {
      constructor() {
        this.mobScene = new Sv((() => Promise.all([Pv.e(70), Pv.e(227), Pv.e(226), Pv.e(246), Pv.e(95), Pv.e(247), Pv.e(73), Pv.e(72), Pv.e(244), Pv.e(71), Pv.e(254), Pv.e(248), Pv.e(253), Pv.e(251), Pv.e(243), Pv.e(219), Pv.e(265), Pv.e(223), Pv.e(238), Pv.e(249), Pv.e(252), Pv.e(75), Pv.e(196), Pv.e(216), Pv.e(94), Pv.e(220), Pv.e(235), Pv.e(113), Pv.e(236), Pv.e(74), Pv.e(154)]).then((() => Pv(40376))))), this.characterScene = new Sv((() => Promise.all([Pv.e(70), Pv.e(227), Pv.e(226), Pv.e(246), Pv.e(95), Pv.e(247), Pv.e(73), Pv.e(72), Pv.e(244), Pv.e(71), Pv.e(254), Pv.e(248), Pv.e(253), Pv.e(251), Pv.e(243), Pv.e(219), Pv.e(265), Pv.e(223), Pv.e(238), Pv.e(249), Pv.e(252), Pv.e(75), Pv.e(196), Pv.e(216), Pv.e(94), Pv.e(220), Pv.e(235), Pv.e(113), Pv.e(236), Pv.e(74), Pv.e(153)]).then((() => Pv(40476)))))
      }
      openMob(vv) {
        return this.mobScene.run((zv => zv.openMobPreview(vv)))
      }
      openPet(vv) {
        return this.mobScene.run((zv => zv.openPetPreview(vv)))
      }
      openMobLineup(vv) {
        return this.mobScene.run((zv => zv.openMobLineupPreview(vv)))
      }
      openCharacter(vv, zv) {
        return this.characterScene.run((Pv => Pv.openCharacterPreview(vv, zv)))
      }
    }
    hv.k.setDefaultHost((() => new ev))
  },
  6377: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Sv,
      g: () => ev
    });
    var hv = Pv(39);
    const Sv = "shaderPack";
    async function ev() {
      var vv;
      let zv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (vv = await hv.f.getItem(Sv, zv)) && void 0 !== vv ? vv : null
    }
  },
  8904: (vv, zv, Pv) => {
    function hv(vv, zv) {
      return vv && !zv
    }
    Pv.d(zv, {
      e: () => hv
    })
  },
  8924: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => ev
    });
    var hv = Pv(1056);

    function Sv() {
      var vv, zv;
      return null !== (vv = null === (zv = screen.orientation) || void 0 === zv ? void 0 : zv.type) && void 0 !== vv ? vv : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const ev = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && Sv() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = Sv(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, hv.ws)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const vv of this.resizers) vv()
          }
        }), 1e3)
      }
      heldSizer(vv) {
        let zv = !1;
        return () => {
          if (zv && this.isHeld()) return null;
          const Pv = vv();
          return zv ||= null !== Pv, Pv
        }
      }
      onRelease(vv) {
        return this.resizers.add(vv), () => {
          this.resizers.delete(vv)
        }
      }
    }
  },
  8561: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => pv,
      e: () => dv
    });
    var hv = Pv(22),
      Sv = Pv(1306),
      ev = Pv(73);
    const gv = {
      blockMined: {
        pattern: [18],
        priority: 1,
        minGapMs: 120
      },
      hitLanded: {
        pattern: [20],
        priority: 2,
        minGapMs: 80
      },
      damageTaken: {
        pattern: [45],
        priority: 3,
        minGapMs: 250
      },
      fishBite: {
        pattern: null,
        priority: 3,
        minGapMs: 0
      },
      death: {
        pattern: [60, 70, 120],
        priority: 4,
        minGapMs: 0
      },
      lockReady: {
        pattern: [8],
        priority: 2,
        minGapMs: 0
      },
      lockLocked: {
        pattern: [15, 50, 15],
        priority: 2,
        minGapMs: 0
      },
      autorunLedgeStop: {
        pattern: [40],
        priority: 3,
        minGapMs: 0
      }
    };

    function pv() {
      return (0, ev.isMobile)() && "function" === typeof navigator.vibrate
    }
    const dv = new class {
      constructor(vv) {
        this.deps = vv, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(vv, zv) {
        var Pv;
        if (!this.deps.enabled()) return;
        const hv = gv[vv],
          Sv = null !== zv && void 0 !== zv ? zv : hv.pattern;
        if (null === Sv) return void console.warn("No vibration pattern for", vv);
        const ev = this.deps.now();
        ev - this.lastAnyAt < 40 && hv.priority < this.playingPriority || ev - (null !== (Pv = this.lastAt.get(vv)) && void 0 !== Pv ? Pv : -1 / 0) < hv.minGapMs || ev < this.playingUntil && hv.priority < this.playingPriority || (this.lastAt.set(vv, ev), this.lastAnyAt = ev, this.playingUntil = ev + Sv.reduce(((vv, zv) => vv + zv), 0), this.playingPriority = hv.priority, this.deps.vibrate(Sv))
      }
    }({
      vibrate: vv => {
        navigator.vibrate([...vv])
      },
      now: () => performance.now(),
      enabled: () => pv() && hv.c.get("isTouchScreen") && hv.c.get("clientEscMenuOptions").vibration && !(0, Sv.g)()
    })
  },
  8898: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => wv,
      f: () => Wv
    });
    var hv = Pv(22),
      Sv = Pv(1657),
      ev = Pv(39),
      gv = Pv(1336),
      pv = Pv(3417),
      dv = Pv(1465),
      Nv = Pv(1374);
    const lv = 2592e5,
      Tv = "notificationOptInLastPromptedAt";
    async function Wv() {
      var vv;
      const zv = await wv();
      if (null === zv) return;
      const Pv = null !== (vv = ev.h.getItem(Tv)) && void 0 !== vv ? vv : 0;
      if (Date.now() - Pv < lv) return;
      if ((0, Nv.d)()) return;
      const hv = await gv.NotificationProvider.showPromptPopup({
        icon: "bell",
        title: "mobilePushNotifications:optInTitle",
        subtitle: Sv.d.supports("notifications") ? "mobilePushNotifications:optInSubtitle" : "mobilePushNotifications:optInSubtitleBrowser",
        confirmText: "mobilePushNotifications:optInConfirm",
        cancelText: "mobilePushNotifications:optInCancel",
        padStartsOn: "cancel"
      }).getResult();
      "notificationTornDown" !== hv && (ev.h.setItem(Tv, Date.now()), (0, dv.reportAnalyticsClick)({
        id: !0 === hv ? "push.allow" : "push.deny",
        value: Sv.d.supports("notifications") ? "app" : "browser"
      }), !0 === hv && zv().catch((vv => {
        console.error("Failed to ask for push notifications:", vv)
      })))
    }
    async function wv() {
      return await Sv.d.ready, Sv.d.supports("notifications") ? hv.c.get("mobilePushNotificationsCanAsk") ? async () => {
        Sv.d.request("notifications.requestPermission", {}).then((vv => {
          let {
            canAsk: zv
          } = vv;
          hv.c.set({
            mobilePushNotificationsCanAsk: zv
          })
        }), (vv => {
          console.error("The app couldn't ask for push notifications:", vv)
        }))
      }: null: await pv.b.canAsk() ? () => pv.b.requestPermission() : null
    }
  },
  8909: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => pv,
      f: () => dv
    });
    var hv = Pv(22);
    const Sv = 24,
      ev = "farNametags",
      gv = 1e5;

    function pv() {
      var vv;
      return null === (vv = hv.c.get("showDistantNametags")) || void 0 === vv || vv
    }

    function dv() {
      var vv;
      return null !== (vv = function() {
        const vv = new URLSearchParams(window.location.search).get(ev),
          zv = null === vv || "" === vv ? NaN : Number(vv);
        return Number.isFinite(zv) && zv >= 0 ? Math.min(zv, gv) : null
      }()) && void 0 !== vv ? vv : pv() ? 0 : Sv
    }
  },
  9027: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => Sv,
      f: () => gv
    });
    const hv = [{
      threshold: 10n ** 180n,
      suffix: "NoQig"
    }, {
      threshold: 10n ** 177n,
      suffix: "OcQig"
    }, {
      threshold: 10n ** 174n,
      suffix: "SpQig"
    }, {
      threshold: 10n ** 171n,
      suffix: "SQig"
    }, {
      threshold: 10n ** 168n,
      suffix: "QiQig"
    }, {
      threshold: 10n ** 165n,
      suffix: "QaQig"
    }, {
      threshold: 10n ** 162n,
      suffix: "TQig"
    }, {
      threshold: 10n ** 159n,
      suffix: "DQig"
    }, {
      threshold: 10n ** 156n,
      suffix: "UQig"
    }, {
      threshold: 10n ** 153n,
      suffix: "Qig"
    }, {
      threshold: 10n ** 150n,
      suffix: "NoQag"
    }, {
      threshold: 10n ** 147n,
      suffix: "OcQag"
    }, {
      threshold: 10n ** 144n,
      suffix: "SpQag"
    }, {
      threshold: 10n ** 141n,
      suffix: "SQag"
    }, {
      threshold: 10n ** 138n,
      suffix: "QiQag"
    }, {
      threshold: 10n ** 135n,
      suffix: "QaQag"
    }, {
      threshold: 10n ** 132n,
      suffix: "TQag"
    }, {
      threshold: 10n ** 129n,
      suffix: "DQag"
    }, {
      threshold: 10n ** 126n,
      suffix: "UQag"
    }, {
      threshold: 10n ** 123n,
      suffix: "Qag"
    }, {
      threshold: 10n ** 120n,
      suffix: "NoTg"
    }, {
      threshold: 10n ** 117n,
      suffix: "OcTg"
    }, {
      threshold: 10n ** 114n,
      suffix: "SpTg"
    }, {
      threshold: 10n ** 111n,
      suffix: "STg"
    }, {
      threshold: 10n ** 108n,
      suffix: "QiTg"
    }, {
      threshold: 10n ** 105n,
      suffix: "QaTg"
    }, {
      threshold: 10n ** 102n,
      suffix: "TTg"
    }, {
      threshold: 10n ** 99n,
      suffix: "DTg"
    }, {
      threshold: 10n ** 96n,
      suffix: "UTg"
    }, {
      threshold: 10n ** 93n,
      suffix: "Tg"
    }, {
      threshold: 10n ** 90n,
      suffix: "NoVg"
    }, {
      threshold: 10n ** 87n,
      suffix: "OcVg"
    }, {
      threshold: 10n ** 84n,
      suffix: "SpVg"
    }, {
      threshold: 10n ** 81n,
      suffix: "SVg"
    }, {
      threshold: 10n ** 78n,
      suffix: "QiVg"
    }, {
      threshold: 10n ** 75n,
      suffix: "QaVg"
    }, {
      threshold: 10n ** 72n,
      suffix: "TVg"
    }, {
      threshold: 10n ** 69n,
      suffix: "DVg"
    }, {
      threshold: 10n ** 66n,
      suffix: "UVg"
    }, {
      threshold: 10n ** 63n,
      suffix: "Vg"
    }, {
      threshold: 10n ** 60n,
      suffix: "NoD"
    }, {
      threshold: 10n ** 57n,
      suffix: "OcD"
    }, {
      threshold: 10n ** 54n,
      suffix: "SpD"
    }, {
      threshold: 10n ** 51n,
      suffix: "SD"
    }, {
      threshold: 10n ** 48n,
      suffix: "QiD"
    }, {
      threshold: 10n ** 45n,
      suffix: "QaD"
    }, {
      threshold: 10n ** 42n,
      suffix: "TD"
    }, {
      threshold: 10n ** 39n,
      suffix: "DD"
    }, {
      threshold: 10n ** 36n,
      suffix: "UD"
    }, {
      threshold: 10n ** 33n,
      suffix: "D"
    }, {
      threshold: 10n ** 30n,
      suffix: "No"
    }, {
      threshold: 10n ** 27n,
      suffix: "Oc"
    }, {
      threshold: 10n ** 24n,
      suffix: "Sep"
    }, {
      threshold: 10n ** 21n,
      suffix: "S"
    }, {
      threshold: 10n ** 18n,
      suffix: "Qi"
    }, {
      threshold: 10n ** 15n,
      suffix: "Qa"
    }, {
      threshold: 10n ** 12n,
      suffix: "T"
    }, {
      threshold: 10n ** 9n,
      suffix: "B"
    }, {
      threshold: 10n ** 6n,
      suffix: "M"
    }, {
      threshold: 1000n,
      suffix: "K"
    }];

    function Sv(vv) {
      let zv, Pv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof vv) {
        if (!Number.isFinite(vv)) return "0";
        if (Math.abs(vv) < 100) {
          const zv = vv < 0 ? "-" : "",
            Pv = Math.abs(vv);
          return Pv >= 10 ? `${zv}${Pv.toFixed(1).replace(/\.0$/,"")}` : `${zv}${Pv.toFixed(2).replace(/\.?0+$/,"")}`
        }
        zv = BigInt(Math.floor(vv))
      } else zv = vv;
      const Sv = zv < 0n ? -zv : zv,
        ev = zv < 0n ? "-" : "",
        gv = Sv.toString();
      if (gv.length <= Pv) return `${ev}${gv}`;
      const pv = 3 * Math.floor((gv.length - 1) / 3);
      if (pv < 3) return `${ev}${gv}`;
      if (pv > 3 * hv.length) {
        const vv = gv[0],
          zv = gv.slice(1, 3).replace(/0+$/, "");
        return `${ev}${zv?`${vv}.${zv}`:vv}e${gv.length-1}`
      }
      const {
        threshold: dv,
        suffix: Nv
      } = hv[hv.length - pv / 3], lv = Sv / dv, Tv = Number(1000n * (Sv % dv) / dv), Wv = Number(lv) + Tv / 1e3;
      let wv;
      return wv = Wv >= 100 ? Math.floor(Wv).toString() : Wv >= 10 ? Wv.toFixed(1).replace(/\.0$/, "") : Wv.toFixed(2).replace(/\.?0+$/, ""), `${ev}${wv}${Nv}`
    }
    const ev = hv.map((vv => {
      let {
        threshold: zv,
        suffix: Pv
      } = vv;
      return {
        threshold: Number(zv),
        suffix: Pv
      }
    })).filter((vv => {
      let {
        threshold: zv
      } = vv;
      return Number.isFinite(zv)
    }));

    function gv(vv) {
      const zv = Math.abs(vv),
        Pv = vv < 0 ? "-" : "";
      for (const {
          threshold: hv,
          suffix: Sv
        }
        of ev)
        if (zv >= hv) {
          const vv = zv / hv;
          if (vv >= 1e3) return `${Pv}${zv.toExponential(2).replace("e+","e")}`;
          let ev;
          return ev = vv >= 100 ? Math.floor(vv).toString() : vv >= 10 ? vv.toFixed(1).replace(/\.0$/, "") : vv.toFixed(2).replace(/\.?0+$/, ""), `${Pv}${ev}${Sv}`
        } return `${Pv}${zv}`
    }
  },
  9011: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => lv,
      g: () => Wv,
      k: () => Tv,
      n: () => gv,
      p: () => Nv,
      t: () => dv
    });
    var hv = Pv(312);
    const Sv = ["Wood Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table"],
      ev = {
        Damage: {
          translationKey: "enchantments:damageDescription"
        },
        "Attack Speed": {
          translationKey: "enchantments:attackSpeedDescription"
        },
        "Critical Damage": {
          translationKey: "enchantments:criticalDamageDescription"
        },
        Protection: {
          translationKey: "enchantments:protectionDescription"
        },
        Health: {
          translationKey: "enchantments:healthDescription"
        },
        "Health Regen": {
          translationKey: "enchantments:healthRegenDescription"
        },
        "Stomp Damage": {
          translationKey: "enchantments:stompDamageDescription"
        },
        "Knockback Resist": {
          translationKey: "enchantments:knockbackResistDescription"
        },
        "Arrow Speed": {
          translationKey: "enchantments:arrowSpeedDescription"
        },
        "Arrow Damage": {
          translationKey: "enchantments:arrowDamageDescription"
        },
        "Quick Charge": {
          translationKey: "enchantments:quickChargeDescription"
        },
        "Break Speed": {
          translationKey: "enchantments:breakSpeedDescription"
        },
        Momentum: {
          translationKey: "enchantments:momentumDescription"
        },
        "Mining Yield": {
          translationKey: "enchantments:miningYieldDescription"
        },
        "Farming Yield": {
          translationKey: "enchantments:farmingYieldDescription"
        },
        "Mining Aura": {
          translationKey: "enchantments:miningAuraDescription"
        },
        "Digging Aura": {
          translationKey: "enchantments:diggingAuraDescription"
        },
        "Lumber Aura": {
          translationKey: "enchantments:lumberAuraDescription"
        },
        "Farming Aura": {
          translationKey: "enchantments:farmingAuraDescription"
        },
        "Horizontal Knockback": {
          translationKey: "enchantments:horizontalKnockbackDescription"
        },
        "Vertical Knockback": {
          translationKey: "enchantments:verticalKnockbackDescription"
        },
        "Firecracker Cooldown": {
          translationKey: "enchantments:firecrackerCooldownDescription"
        },
        "Firecracker Boost": {
          translationKey: "enchantments:firecrackerBoostDescription"
        },
        "Gliding Speed": {
          translationKey: "enchantments:glidingSpeedDescription"
        }
      };

    function gv(vv) {
      var zv;
      return null !== (zv = ev[vv]) && void 0 !== zv ? zv : {
        translationKey: ""
      }
    }
    const pv = {
      "Wood Enchanting Table": [{
        min: 1,
        max: 2
      }, {
        min: 3,
        max: 4
      }, {
        min: 5,
        max: 6
      }],
      "Stone Enchanting Table": [{
        min: 2,
        max: 4
      }, {
        min: 5,
        max: 10
      }, {
        min: 11,
        max: 15
      }],
      "Iron Enchanting Table": [{
        min: 5,
        max: 10
      }, {
        min: 11,
        max: 20
      }, {
        min: 21,
        max: 30
      }],
      "Gold Enchanting Table": [{
        min: 20,
        max: 30
      }, {
        min: 31,
        max: 40
      }, {
        min: 41,
        max: 50
      }],
      "Diamond Enchanting Table": [{
        min: 40,
        max: 50
      }, {
        min: 50,
        max: 70
      }, {
        min: 71,
        max: 80
      }]
    };

    function dv(vv) {
      return Sv.includes(vv)
    }

    function Nv(vv) {
      var zv;
      return !0 === (null === vv || void 0 === vv || null === (zv = vv.customAttributes) || void 0 === zv ? void 0 : zv.cannotEnchant)
    }

    function lv(vv, zv) {
      const {
        max: Pv
      } = pv[vv].at(-1);
      return zv <= Pv
    }

    function Tv(vv) {
      const zv = Math.sin(vv / 80),
        Pv = vv => {
          if (vv <= 0) return 0;
          if (vv > 1) return 1;
          let zv = 0;
          const Pv = [1, 7, 21, 35, 35, 21, 7, 1];
          for (let hv = 0; hv < Pv.length; hv++) {
            zv += (hv % 2 === 0 ? 1 : -1) * Pv[hv] * Math.pow(vv, 2 + hv) / (2 + hv)
          }
          return 72 * zv
        },
        hv = .3 - .78 * zv,
        Sv = .5 - .78 * zv,
        ev = .6 - .7 * zv,
        gv = .8 - .6 * zv;
      let pv = Pv(hv),
        dv = Pv(Sv) - pv,
        Nv = Pv(ev) - dv - pv,
        lv = Pv(gv) - Nv - dv - pv;
      hv < .041 && (dv /= 1 - pv, Nv /= 1 - pv, lv /= 1 - pv, pv = 0), Sv < .041 && (pv /= 1 - dv, Nv /= 1 - dv, lv /= 1 - dv, dv = 0), ev < .041 && (pv /= 1 - Nv, dv /= 1 - Nv, lv /= 1 - Nv, Nv = 0), gv < .041 && (pv /= 1 - lv, dv /= 1 - lv, Nv /= 1 - lv, lv = 0);
      return {
        commonProb: pv,
        uncommonProb: dv,
        rareProb: Nv,
        epicProb: lv,
        legendaryProb: 1 - (lv + Nv + dv + pv)
      }
    }

    function Wv(vv, zv) {
      const {
        min: Pv,
        max: Sv
      } = pv[vv][zv], ev = hv.d.sampleUniformIntDistribution(Pv, Sv, "includeMax");
      return {
        ...Tv(ev),
        level: ev
      }
    }
  },
  8470: (vv, zv, Pv) => {
    function hv(vv, zv) {
      return !vv.hidden && (zv || !vv.isRewardedAd)
    }

    function Sv(vv) {
      return "object" === typeof vv ? vv.option : vv
    }

    function ev(vv, zv) {
      var Pv;
      if ("dropdown" === (null === (Pv = vv.userInput) || void 0 === Pv ? void 0 : Pv.type) && "object" === typeof vv.userInput.dropdownOptions[0]) {
        for (const Pv of vv.userInput.dropdownOptions)
          if (Sv(Pv) === zv) return "object" === typeof Pv ? Pv.cost : vv.cost;
        console.error("Didn't find matching option for dropdown item. Item:", vv, "input:", zv)
      }
      return vv.cost
    }

    function gv(vv, zv, Pv) {
      var hv;
      const Sv = null !== (hv = Pv.excludedPlayers) && void 0 !== hv ? hv : [zv];
      return vv.filter((vv => !Sv.includes(vv)))
    }
    Pv.d(zv, {
      d: () => ev,
      f: () => Sv,
      h: () => gv,
      k: () => hv
    })
  },
  8975: () => {},
  8945: vv => {
    vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAaUlEQVR4AWyOQQ6AIAwECwGNr/HkYzz4Hy9+WEkq01BDDCRDy3ZbGo9rU2c/V+1Bj9JOeW7RokaTBO0zpDxJXmYJKXjdohlwOqbWi4YaJFIgcYEIaGAT+JvHCDNQ8El9ziQz/BdzE00vAAAA//+cTXaSAAAABklEQVQDAHI9N5g1NM74AAAAAElFTkSuQmCC"
  },
  8950: vv => {
    vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAGBJREFUGJVNjjEOxEAIA+dW22Rpk2+nSndPZFtMewU6FBdIjJHx536+ABARUl7XCbjvyV9mJqX7BtY6RkS0t9bRc0op5ZuaGTAqtPZCpfG+AqSs8FFlulh7s6j7rh9d9wclFjd0V4Z2HAAAAABJRU5ErkJggg=="
  },
  8957: vv => {
    vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAbUlEQVR4nESOSwqAMAxEow0pive/gIcTBBdSsZh+NG20DlnkM8MLhnXuzHSnAwBaI8LIV2RXOiIkaGfMKfXGyByZparbyQZpGNUV/KaHGrWowZKVgSx8Qr8vzdXgAkYFCIn9mZP7E8pQ1Q9fzAMAAP//PTNTFgAAAAZJREFUAwAk1D9dXrbJngAAAABJRU5ErkJggg=="
  },
  8963: vv => {
    vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAE1JREFUGJVNjsEOwDAIQp/GZv3/j+xx5zVbsh0wZFxEImCsc88RRwHsB5OaI8SA636hjwosNXSUWuRTphxp5iahHX+pozQs+Yt0rU1SPg0CIfgDMgomAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);