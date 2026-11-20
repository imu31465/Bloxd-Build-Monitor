export const id = 97;
export const ids = [97, 185];
export const modules = {
  8717: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      EverythingMenu: () => Fo
    });
    var Fz = sz(65),
      Wz = sz(1020),
      Xz = sz.n(Wz),
      Oz = sz(1173),
      oz = sz(1036),
      vz = sz(1997),
      Uz = sz(1106),
      Kz = sz(1087);

    function uz(zz) {
      let {
        items: tz,
        onClick: sz,
        selectedItemId: Fz,
        className: Wz,
        padStartsOnTab: uz = !0
      } = zz;
      const {
        t: Nz
      } = (0, Oz.B)(), bz = (0, Uz.i)(), wz = [];
      for (const Xz of tz) {
        var Dz;
        const zz = wz[wz.length - 1];
        var gz;
        if (zz && zz.title === (null !== (Dz = Xz.section) && void 0 !== Dz ? Dz : null)) zz.items.push(Xz);
        else wz.push({
          title: null !== (gz = Xz.section) && void 0 !== gz ? gz : null,
          items: [Xz]
        })
      }
      return (0, Kz.jsx)("div", {
        className: Xz()("MenuSideBarBody", Wz),
        "data-pad-tabs": "2",
        children: wz.map(((zz, tz) => {
          var Wz;
          return (0, Kz.jsxs)("div", {
            className: "MenuSideBarSection",
            children: [zz.title && (0, Kz.jsx)("div", {
              className: "MenuSideBarSectionTitle",
              children: Nz(zz.title)
            }), zz.items.map((zz => {
              var tz;
              const Wz = !!zz.iconElement || !!zz.faIcon;
              return (0, Kz.jsxs)("div", {
                "data-pad-tab": !0,
                "data-pad-selected": Fz === zz.id ? "true" : void 0,
                "data-pad-default-focus": uz && Fz === zz.id || void 0,
                className: Xz()("MenuSideBarBodyTab", {
                  ActiveMenuSideBarBodyTab: Fz === zz.id
                }),
                onClick: () => {
                  sz(zz.id)
                },
                children: [Wz && (0, Kz.jsx)("div", {
                  className: "MenuSideBarBodyTabIcon",
                  children: null !== (tz = zz.iconElement) && void 0 !== tz ? tz : (0, Kz.jsx)(oz.c, {
                    name: zz.faIcon
                  })
                }), (!bz || !Wz) && (0, Kz.jsx)("div", {
                  children: Nz(zz.title)
                }), zz.redDot && (0, Kz.jsx)(vz.c, {
                  top: "-0.2rem",
                  right: "-1rem"
                })]
              }, zz.id)
            }))]
          }, null !== (Wz = zz.title) && void 0 !== Wz ? Wz : tz)
        }))
      })
    }
    var Nz = sz(2735),
      bz = sz(1116),
      wz = sz(2290),
      Dz = sz(1113),
      gz = sz(1419),
      Hz = sz(106),
      Bz = sz(1857),
      Pz = sz(2164),
      rz = sz(2168),
      Yz = sz(1622),
      xz = sz(1306),
      mz = sz(4609),
      Jz = sz(30),
      Iz = sz(8723);

    function Cz(zz) {
      let {
        setApplySettingsCallback: tz
      } = zz;
      const {
        clientEscMenuOptions: sz
      } = (0, Jz.h)(["clientEscMenuOptions"]), [Wz, Xz] = (0, Fz.useState)(!1), [Oz, oz] = (0, Fz.useState)(!1), [vz, Uz] = (0, Fz.useState)(6400), [uz, Nz] = (0, Fz.useState)(3600), [bz, wz] = (0, Fz.useState)(!1), [Dz, Hz] = (0, Fz.useState)(!1);

      function Bz(zz) {
        const tz = "screenshot" === zz ? oz : Xz;
        tz(!0);
        const sz = bz ? "normals" : Dz ? "depth" : null;
        Iz.devTools.downloadScene(zz, {
          width: vz,
          height: uz,
          colouring: sz
        }).catch((zz => {
          console.error("Couldn't download the scene", zz)
        })).finally((() => {
          tz(!1)
        }))
      }
      return (0, Kz.jsxs)("div", {
        className: "DeveloperToolsCategory",
        children: [(0, Kz.jsx)(mz.b, {
          label: "Disable Ambient Occlusion",
          checked: sz.disableAmbientOcclusion,
          onClick: zz => {
            Jz.b.setClientEscMenuOptions({
              disableAmbientOcclusion: zz
            }), tz((() => mz.h))
          },
          circleInfoText: "Disables ambient occlusion which is the shadow effect that makes corners and crevices darker."
        }), Iz.devTools.supports("ambientLight") && (0, Kz.jsx)(mz.g, {
          name: "Ambient Lighting Intensity",
          min: 0,
          max: 1,
          step: .01,
          initValue: sz.ambientLightIntensity,
          onChange: zz => {
            Iz.devTools.setAmbientLightIntensity(zz).then((() => {
              Jz.b.setClientEscMenuOptions({
                ambientLightIntensity: zz
              })
            })).catch((zz => {
              console.error("Couldn't set the ambient light", zz)
            }))
          },
          circleInfoText: "Sets the intensity of the white ambient light in the scene. The default is 0.5."
        }), Iz.devTools.supports("weaponRaycasts") && (0, Kz.jsx)(mz.b, {
          label: "Show Weapon Raycasts",
          checked: sz.showWeaponRaycasts,
          onClick: zz => {
            Jz.b.setClientEscMenuOptions({
              showWeaponRaycasts: zz
            })
          },
          circleInfoText: "Draws debug lines for the raw raycasts used by locally fired weapons."
        }), Iz.devTools.supports("sceneDownload") && (0, Kz.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, Kz.jsxs)("div", {
            className: "SettingBox WarningBorder",
            children: [(0, Kz.jsx)(mz.b, {
              label: "Apply normal-based coloring",
              checked: bz,
              onClick: zz => {
                wz(zz), zz && Hz(!1)
              },
              circleInfoText: "Colors faces based on their normal direction (red=X, green=Y, blue=Z)."
            }), (0, Kz.jsx)(mz.b, {
              label: "Apply depth-based coloring",
              checked: Dz,
              onClick: zz => {
                Hz(zz), zz && wz(!1)
              },
              circleInfoText: "Colors from white (near) to black (far) based on distance from camera. Only works for screenshot export."
            }), (0, Kz.jsxs)("div", {
              className: "SettingBox DeveloperToolsCategoryScreenshotSettings",
              children: [(0, Kz.jsx)("div", {
                className: "SettingLabel",
                children: "Screenshot size in pixels (width x height)"
              }), (0, Kz.jsx)(Yz.d, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (zz, tz) => {
                  const sz = parseInt(zz) || 6400;
                  Uz(sz)
                },
                placeholderText: "width",
                maxLength: 10,
                defaultValue: vz.toString()
              }), (0, Kz.jsx)("span", {
                children: "X"
              }), (0, Kz.jsx)(Yz.d, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (zz, tz) => {
                  const sz = parseInt(zz) || 3600;
                  Nz(sz)
                },
                placeholderText: "height",
                maxLength: 10,
                defaultValue: uz.toString()
              })]
            }), (0, Kz.jsxs)("div", {
              className: "DeveloperToolsCategoryExportButtons",
              children: [(0, Kz.jsxs)(gz.h, {
                onClick: () => {
                  Bz("screenshot")
                },
                disabled: Oz,
                children: [Oz && (0, Kz.jsx)(xz.d, {}), "Download Screenshot"]
              }), (0, Kz.jsxs)(gz.h, {
                onClick: () => {
                  Bz("glb")
                },
                disabled: Wz,
                children: [Wz && (0, Kz.jsx)(xz.d, {}), "Download GLB"]
              })]
            })]
          }), (0, Kz.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: 'To download GLB of scene with textures you need to "Disable Block Texture Atlas" in graphic settings first (you will need to reload the page to apply the setting).'
          })]
        })]
      })
    }
    var ez = sz(133),
      Zz = sz(1120),
      Gz = sz(1191),
      Tz = sz(2737),
      cz = sz(1483),
      jz = sz(1253),
      Az = sz(1220),
      yz = sz(2824),
      Mz = sz(1975),
      dz = sz(1466),
      hz = sz(321),
      Qz = sz(2175),
      kz = sz(2187),
      iz = sz(2487),
      Lz = sz(1577),
      lz = sz(2793),
      nz = sz(2774),
      az = sz(2827),
      qz = sz(214);

    function Sz(zz) {
      const {
        t: tz,
        selectedLanguage: sz
      } = (0, Oz.B)(), {
        userContext: Wz
      } = (0, bz.b)(), {
        superRankInfo: Xz
      } = Wz, oz = zz && ((0, hz.vc)(Xz) || Wz.ranksMayChange) && (0, kz.purchasesAllowed)(), {
        accountId: vz,
        data: Uz
      } = (0, iz.j)(lz.d, oz);
      if ((0, Fz.useEffect)((() => {
          if (oz) return lz.d.watchAccount(), Lz.d.addRefetchListener("billing", (zz => {
            "reconnected" === zz ? lz.d.refreshAfterReconnect() : lz.d.refresh()
          }))
        }), [oz]), !oz || !(0, hz.vc)(Xz) || null === Uz || vz !== Wz.whamm) return null;
      const Kz = function(zz, tz, sz) {
        const Fz = az.h[(0, az.b)(az.h, tz)],
          Wz = void 0 === Fz ? void 0 : (0, qz.e)(zz.entitlements, Fz.entitlementId);
        return void 0 === Wz || null === Wz.expiresAt || (0, nz.d)(Wz) <= sz ? null : Wz.willRenew && null === Wz.billingIssueDetectedAt ? {
          renews: !0,
          at: Math.max(Wz.expiresAt, sz)
        } : {
          renews: !1,
          at: (0, nz.d)(Wz)
        }
      }(Uz, Xz.tier, Date.now());
      if (null === Kz) return null;
      const uz = Kz.renews ? "store:renewsOn" : "store:endsOn";
      return tz(uz, {
        date: new Date(Kz.at).toLocaleDateString((0, Oz.o)(sz.code, uz), {
          year: "numeric",
          month: "short",
          day: "numeric"
        })
      })
    }
    var Vz = sz(1333),
      Rz = sz(1207),
      pz = sz(4514),
      fz = sz(1447),
      Ez = sz(3325),
      zt = sz(2152);

    function tt(zz) {
      let {
        showing: tz
      } = zz;
      const {
        t: sz
      } = (0, Oz.B)(), {
        data: Fz,
        failed: Wz
      } = (0, iz.j)(Ez.f, tz);
      return 0 === (null === Fz || void 0 === Fz ? void 0 : Fz.length) || null === Fz && !Wz ? null : (0, Kz.jsxs)("div", {
        className: "SettingBox AccountSettingsPaymentHistory",
        children: [(0, Kz.jsx)("div", {
          className: "AccountSettingsLabel",
          children: sz("paymentHistory:title")
        }), null === Fz && Wz && (0, Kz.jsx)("div", {
          className: "AccountSettingsPaymentHistoryError",
          children: sz("paymentHistory:loadFailed")
        }), null !== Fz && (0, Kz.jsx)("ul", {
          className: "PaymentHistoryList",
          children: Fz.map((zz => (0, Kz.jsxs)("li", {
            className: "PaymentHistoryEntry",
            children: [(0, Kz.jsx)(zt.b, {
              entry: zz
            }), (0, Kz.jsxs)("div", {
              className: "PaymentHistoryEntryText",
              children: [(0, Kz.jsx)("div", {
                children: (0, zt.d)(sz, zz)
              }), (0, Kz.jsxs)("div", {
                className: "PaymentHistoryEntryDate",
                children: [new Date(zz.at).toLocaleDateString(), "number" === typeof zz.orderId && ` \xb7 ${sz("paymentHistory:order",{orderId:zz.orderId})}`]
              })]
            })]
          }, (0, Ez.c)(zz))))
        })]
      })
    }
    var st = sz(1815),
      Ft = sz(1230),
      Wt = sz(1319),
      Xt = sz(1287),
      Ot = sz(1715),
      ot = sz(2762);
    async function vt() {
      try {
        return function(zz) {
          const tz = new Map;
          for (const {
              store: sz,
              status: Fz,
              autoRenewStatus: Wz,
              managementUrl: Xz
            }
            of Object.values(zz.subscriptions)) !(0, nz.e)(sz) || (0, nz.h)(Fz) || "willNotRenew" === Wz || tz.has(sz) || tz.set(sz, null !== Xz && void 0 !== Xz ? Xz : nz.l[sz]);
          return Array.from(tz, (zz => {
            let [tz, sz] = zz;
            return {
              store: tz,
              managementUrl: sz
            }
          }))
        }(await (0, Ot.f)((0, ot.f)().getCustomerInfo(), 5e3, "CustomerInfo got no answer in 5 s"))
      } catch (zz) {
        return console.error("Billing: loading CustomerInfo for the player's store subscriptions failed:", zz), null
      }
    }
    var Ut = sz(308),
      Kt = sz(2334);
    const ut = {
      appStore: {
        name: "App Store",
        ...Ut.Vb.appStore
      },
      googlePlay: {
        name: "Google Play",
        ...Ut.Vb.googlePlay
      },
      discord: {
        name: "Discord",
        ...Ut.Vb.discord
      }
    };

    function Nt(zz) {
      let {
        warning: tz,
        subscriptions: sz
      } = zz;
      const {
        t: Fz
      } = (0, Oz.B)();
      return null !== sz && 0 === sz.length ? (0, Kz.jsx)(Kz.Fragment, {
        children: Fz(tz)
      }) : (0, Kz.jsxs)("div", {
        className: "DeleteAccountSubtitle",
        children: [Fz(tz), null === sz && (0, Kz.jsx)("div", {
          className: "DeleteAccountSubtitleNote",
          children: Fz("auth:deleteAccountSubscriptionsLoadFailed")
        }), null !== sz && (0, Kz.jsxs)(Kz.Fragment, {
          children: [(0, Kz.jsx)("div", {
            className: "DeleteAccountSubtitleNote",
            children: Fz("auth:deleteAccountStoreSubscriptions")
          }), (0, Kz.jsx)(Kt.e, {
            className: "DeleteAccountSubtitleLinks",
            links: sz.map((zz => {
              let {
                store: tz,
                managementUrl: sz
              } = zz;
              return {
                ...ut[tz],
                url: sz
              }
            }))
          })]
        })]
      })
    }

    function bt(zz) {
      let {
        showing: tz
      } = zz;
      const {
        userContext: sz,
        isUserContextUpdating: Wz
      } = (0, bz.b)(), {
        t: Xz
      } = (0, Oz.B)(), [oz, vz] = (0, Fz.useState)(!1), [Uz, uz] = (0, Fz.useState)(null), Nz = (0, Fz.useRef)(tz);
      (0, Fz.useEffect)((() => (Nz.current = tz, () => {
        Nz.current = !1
      })), [tz]);
      const wz = Wz || oz;
      async function Dz() {
        const zz = function(zz) {
            if ((0, ez.e)()) return "auth:discordActivityDeleteAccountWarning";
            return zz ? "auth:deleteAccountWarning" : "auth:deleteGuestAccountWarning"
          }(sz.isLoggedIn()),
          tz = (0, st.d)(sz.availableUserContextTypes) ? await vt() : [];
        if (!Nz.current) return Ft.e.ok();
        if (!0 !== await Wt.NotificationProvider.showPromptPopup({
            title: "auth:deleteAccountPopupTitleNamed",
            textOpts: {
              title: {
                playerName: (0, jz.c)(sz.getPlayerName(), !Hz.featureFlags.canSeeRealPlayerNames)
              }
            },
            subtitle: (0, Kz.jsx)(Nt, {
              warning: zz,
              subscriptions: tz
            }),
            confirmText: "auth:deleteAccount",
            destructive: !0,
            confirmTooltip: "auth:deleteAccountPopupConfirmTooltip",
            cancelText: "general:cancel",
            cancelTooltip: "auth:deleteAccountPopupCancelTooltip"
          }).getResult()) return Ft.e.ok();
        const Fz = await (0, Zz.postJsonWithMetricsCookiesAndJsonResponse)(`${Gz.clientSideServerUrls.indexUrl}/index/metrics/revoke-cookies`, {
          gameState: Jz.b.get("gameState")
        }, {
          retries: 3
        }, sz.getMetricsCookies());
        if (Fz.error) return Ft.e.error(Fz.error);
        if ((0, ez.e)()) {
          (await Xt.k.discordActivity()).exit("User deleted their account")
        }
        return (0, Zz.forgetStoredGuestAccount)(sz.whamm), (0, Zz.forceGlobalSignOut)(!0), Ft.e.ok()
      }
      return (0, Kz.jsxs)("div", {
        className: "AccountSettingsDeleteAccountButtonContainer",
        children: [(0, Kz.jsxs)(gz.H, {
          onClick: async function() {
            if (!oz) {
              vz(!0);
              try {
                const zz = await Dz(),
                  tz = zz.isError() ? zz.asError().message : null;
                uz(tz)
              } catch (zz) {
                console.error("Failed to delete account:", zz), uz(Xz("auth:genericDeleteAccountError"))
              }
              vz(!1)
            }
          },
          className: "AccountSettingsDeleteAccountButton",
          disabled: wz,
          children: [wz && (0, Kz.jsx)("div", {
            className: "DeletingAccountLoader",
            children: (0, Kz.jsx)(xz.d, {})
          }), Xz("auth:deleteAccount")]
        }), Uz && (0, Kz.jsx)("div", {
          className: "DeleteAccountError",
          children: Uz
        })]
      })
    }
    var wt = sz(3260),
      Dt = sz(3275),
      gt = sz(3271);

    function Ht(zz) {
      let {
        showing: tz
      } = zz;
      const {
        t: sz
      } = (0, Oz.B)(), {
        data: Fz,
        failed: Wz
      } = (0, iz.j)(wt.b, tz), Xz = null === Fz ? null : (0, wt.d)(Fz);
      return (0, Kz.jsxs)("div", {
        className: "SettingBox BlockedAndIgnoredPlayers",
        children: [(0, Kz.jsx)("div", {
          className: "AccountSettingsLabel",
          children: sz("settingsMenu:blockedAndIgnoredPlayers")
        }), null === Xz && !Wz && (0, Kz.jsx)(xz.d, {}), null === Xz && Wz && (0, Kz.jsxs)("div", {
          className: "BlockedAndIgnoredPlayersError",
          children: [sz("settingsMenu:blockedAndIgnoredPlayersLoadFailed"), (0, Kz.jsx)(gz.h, {
            className: "SmallTextLight",
            onClick: () => {
              wt.b.refresh()
            },
            children: sz("general:tryAgain")
          })]
        }), 0 === (null === Xz || void 0 === Xz ? void 0 : Xz.length) && (0, Kz.jsx)("div", {
          className: "BlockedAndIgnoredPlayersEmpty",
          children: sz("settingsMenu:noBlockedOrIgnoredPlayers")
        }), null !== Xz && Xz.length > 0 && (0, Kz.jsx)("ul", {
          className: "BlockedAndIgnoredPlayersList",
          children: Xz.map((zz => {
            let {
              name: tz,
              exclusion: Fz
            } = zz;
            const Wz = gt.f[Fz];
            return (0, Kz.jsxs)("li", {
              className: "BlockedAndIgnoredPlayer",
              children: [(0, Kz.jsx)("div", {
                className: "BlockedAndIgnoredPlayerName",
                children: tz
              }), (0, Kz.jsx)(gz.l, {
                className: "SmallTextLight",
                onClick: () => {
                  (0, Dt.h)(Wz, tz, {
                    chatMessage: null
                  })
                },
                children: sz(gt.i[Wz].text)
              })]
            }, tz)
          }))
        })]
      })
    }
    const Bt = (0, Fz.memo)((function(zz) {
      var tz;
      let {
        showing: sz,
        inGame: Wz
      } = zz;
      const {
        t: vz,
        selectedLanguage: Uz
      } = (0, Oz.B)(), {
        hideSocialLocationFrom: uz
      } = (0, Jz.h)(["hideSocialLocationFrom"]), wz = (0, Nz.b)(), {
        userContext: Dz,
        isUserContextUpdating: Bz
      } = (0, bz.b)(), [Pz, rz] = (0, Fz.useState)(null !== (tz = Dz.getPlayerName()) && void 0 !== tz ? tz : ""), [Iz, Cz] = (0, Fz.useState)(null), {
        purchasing: iz,
        outcome: Lz,
        purchase: lz
      } = (0, Tz.b)("/super-rank-welcome"), nz = (0, hz.cc)((0, Oz.o)(Uz.code, "general:timeLeft"), Dz.superRankInfo), az = Sz(sz), qz = nz ? vz("general:timeLeft", {
        time: nz
      }) : az, [Ez, zt] = (0, Fz.useState)(!1), [st, Ft] = (0, Fz.useState)(!1), Wt = (0, Fz.useRef)(null), Xt = (0, Fz.useRef)(null), Ot = (0, Mz.f)({
        showProgressUpdateMessage: !0,
        enabled: !0
      }), ot = null === Ot, vt = null !== Ot && void 0 !== Ot ? Ot : [], Ut = Dz !== Zz.NULL_USER_CONTEXT && !Dz.isLoggedIn(), Kt = Ut && 0 !== (null === Ot || void 0 === Ot ? void 0 : Ot.length), [ut, Nt] = (0, Fz.useState)([]), [wt, Dt] = (0, Fz.useState)(!1), gt = Dz.playerHasRank("youtuber"), Bt = (0, Fz.useCallback)((() => dz.d.getPlayerProfile(Dz, {
        lowerCaseName: Dz.getPlayerName().toLowerCase()
      }).then((zz => {
        Nt(zz.socialLinks)
      })).catch((zz => {
        console.error("Failed to refresh social links", zz)
      }))), [Dz]);

      function rt(zz) {
        zz !== Pz && ((0, jz.l)(zz) ? (zz = (0, jz.p)(zz), Cz("Only letters, numbers, and _")) : Cz(null), Wt.current && (Wt.current.value = zz), rz(zz))
      }
      return (0, Fz.useEffect)((() => (!0 === sz ? (clearInterval(Xt.current), Xt.current = setInterval(wz, 1e3)) : clearInterval(Xt.current), () => {
        clearInterval(Xt.current)
      })), [sz, wz]), (0, Fz.useEffect)((() => {
        var zz;
        rz(null !== (zz = Dz.getPlayerName()) && void 0 !== zz ? zz : "")
      }), [Dz]), (0, Fz.useEffect)((() => {
        if (!sz || !gt || Bz) return;
        let zz = !1;
        return Dt(!0), Nt([]), dz.d.getPlayerProfile(Dz, {
          lowerCaseName: Dz.getPlayerName().toLowerCase()
        }).then((tz => {
          zz || Nt(tz.socialLinks)
        })).catch((zz => {
          console.error("Failed to load social links", zz)
        })).finally((() => {
          zz || Dt(!1)
        })), () => {
          zz = !0
        }
      }), [sz, gt, Bz, Dz]), (0, Kz.jsxs)("div", {
        className: Xz()("SettingsMenuRightInner AccountSettings", {
          AccountSettingsLocked: Wz
        }),
        children: [Wz && (0, Kz.jsx)("div", {
          className: "AccountSettingsInGameWarning",
          children: vz("settingsMenu:accountSettingsInGameWarning")
        }), (0, Kz.jsxs)("div", {
          className: "SettingBox SetAccountNameDiv SmallTextLight",
          children: [(0, Kz.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsNameLabel",
            children: [vz("homePage:discordNamePopupTitle"), (0, Kz.jsxs)(cz.LinkPreserveSearch, {
              className: "AccountSettingsViewProfile",
              to: (0, Az.h)({
                name: Dz.getPlayerName()
              }),
              onClick: () => {
                Jz.b.set({
                  openEverythingMenuName: null
                })
              },
              children: [(0, Kz.jsx)(oz.c, {
                name: "arrow-up-right-from-square"
              }), " ", vz("profileCard:viewProfile")]
            })]
          }), (0, Kz.jsxs)("div", {
            className: "EnterAccNameDivWrapper",
            "data-pad-initial-area": !0,
            children: [(0, Kz.jsxs)("div", {
              className: "EnterAccNameInputRow",
              children: [Hz.featureFlags.canChangeName && (0, Kz.jsx)(Yz.d, {
                className: "EnterName",
                placeholderText: vz("homePage:enterName"),
                maxLength: jz.i,
                defaultValue: Pz,
                onValueChange: zz => {
                  rt(zz)
                },
                forcedText: Ez || !Hz.featureFlags.canChangeName ? Pz : null,
                blurOnEnter: !0,
                domRef: Wt
              }), (0, Kz.jsx)(gz.h, {
                className: "ChooseRandomNameButton",
                onClick: () => {
                  rt((0, jz.f)())
                },
                children: (0, Kz.jsx)(oz.c, {
                  name: "dice",
                  className: "ChooseRandomNameIcon"
                })
              }), !Hz.featureFlags.canChangeName && (0, Kz.jsx)("div", {
                className: "EnterName NoInput",
                children: (0, jz.c)(Pz, !Hz.featureFlags.canSeeRealPlayerNames)
              })]
            }), (0, Kz.jsx)(gz.h, {
              className: "ChooseNameButton",
              disabled: Ez || Pz === Dz.getPlayerName(),
              onClick: () => {
                Pz.length < jz.k ? Cz(vz("homePage:changeNameMinLengthError", {
                  length: jz.k
                })) : Pz.length > jz.i ? Cz(vz("homePage:changeNameMaxLengthError", {
                  length: jz.i
                })) : (zt(!0), Cz(null), async function(zz, tz, sz, Fz) {
                  const Wz = await (0, Zz.postJsonWithMetricsCookiesAndJsonResponse)(`${Gz.clientSideServerUrls.indexUrl}/index/name/update`, {
                    name: zz
                  }, {
                    retries: 3
                  }, tz.getMetricsCookies()).catch((zz => (console.error("Bad response from the server when trying to update name:", zz), {
                    err: "An error occurred trying to change your name! Please report on discord what steps you took to get this error message."
                  })));
                  Wz.err ? (console.error("Error when trying to get with new name from DB", Wz.err), Fz(Wz.err)) : !0 === Wz.nameExists ? Fz("Name is already taken") : sz(zz)
                }(Pz, Dz, (zz => {
                  Dz.setPlayerName(zz), zt(!1)
                }), (zz => {
                  Cz(zz), zt(!1)
                })))
              },
              children: vz("general:choose")
            })]
          }), Iz && (0, Kz.jsx)("div", {
            className: "ChooseAccNameError",
            children: Iz
          })]
        }), (0, Kz.jsx)(mz.b, {
          label: (() => {
            if ((0, Rz.n)(uz)) {
              const zz = (0, Oz.o)(Uz.code, "general:timeLeft"),
                tz = (0, hz.bb)(zz, Date.now(), uz + Rz.m);
              return `${vz("settingsMenu:hideSocialLocation")} (${vz("general:timeLeft",{time:tz})})`
            }
            return vz("settingsMenu:hideSocialLocation")
          })(),
          onClick: () => {
            const zz = !(0, Rz.n)(uz);
            (0, fz.reportAnalyticsClick)({
              id: "social.hide_location",
              value: zz ? "on" : "off"
            }), Ft(!0), dz.d.setHideSocialLocation(Dz, zz).then((() => {
              Jz.b.set({
                hideSocialLocationFrom: zz ? Date.now() : null
              })
            })).finally((() => {
              Ft(!1)
            }))
          },
          checked: (0, Rz.n)(uz),
          disabled: st
        }), gt && (0, Kz.jsxs)("div", {
          className: "SettingBox AccountSettingsSocialLinks",
          children: [(0, Kz.jsx)("div", {
            className: "AccountSettingsLabel",
            children: vz("settingsMenu:socialLinks")
          }), wt && (0, Kz.jsx)(xz.d, {}), !wt && (0, Kz.jsx)(pz.d, {
            socialLinks: ut,
            editable: !0,
            userContext: Dz,
            onLinksUpdated: Bt
          })]
        }), (0, Kz.jsxs)("div", {
          className: "SettingBox",
          children: [(0, Kz.jsx)("div", {
            className: "AccountSettingsLabel",
            children: vz(Kt ? "auth:loginOrSwitchAccount" : "auth:login")
          }), ot && (0, Kz.jsx)(xz.d, {}), !ot && 0 === vt.length && (0, Kz.jsx)("div", {
            className: "NoLoginOptions",
            children: vz("auth:noLoginOptions")
          }), !ot && vt.length > 0 && "crazygames" !== ez.t && (0, Kz.jsx)("div", {
            className: "AccountSettingsLoginButtons",
            children: vt
          }), !ot && vt.length > 0 && "crazygames" === ez.t && (0, Kz.jsxs)("div", {
            className: "AccountSettingsLoginButtons",
            children: [vt[0], vt.length > 1 && (0, Kz.jsxs)(Kz.Fragment, {
              children: [(0, Kz.jsxs)("div", {
                className: "LegacyLoginOptionsHeader",
                children: [(0, Kz.jsx)("span", {
                  className: "LegacyLoginOptionsTitle",
                  children: vz("auth:legacyLoginOptions")
                }), (0, Kz.jsx)(Vz.d, {
                  className: "LegacyLoginOptionsInfoIcon",
                  hoverInfo: vz("auth:legacyLoginOptionsInfo")
                })]
              }), (0, Kz.jsx)("div", {
                className: "LegacyAccountSettingsLoginButtons",
                children: vt.slice(1)
              })]
            })]
          }), Hz.featureFlags.useLogin && (null !== Dz.loggedInInfo || Dz.isLoggedIn()) && (0, Kz.jsxs)(Kz.Fragment, {
            children: [(0, Kz.jsx)("div", {
              className: "AccountSettingsLoginDivider"
            }), (0, Kz.jsxs)(gz.H, {
              onClick: () => {
                (0, Zz.forceGlobalSignOut)()
              },
              className: "AccountSettingsSignedInButton",
              children: [(0, Kz.jsx)(oz.c, {
                name: "right-from-bracket"
              }), vz("auth:signOut")]
            })]
          })]
        }), !Dz.playerHasRank("super") && (0, kz.purchasesAllowed)() && (0, Kz.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, Kz.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, Kz.jsx)(oz.c, {
              name: "bolt"
            }), vz("homePage:superRank")]
          }), (0, Kz.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [(0, Kz.jsxs)(gz.p, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, Qz.p)({
                  mode: "self",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, Kz.jsx)(oz.c, {
                name: "bolt"
              }), vz("homePage:getSuperRank")]
            }), (0, Kz.jsxs)(gz.p, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, Qz.p)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, Kz.jsx)(oz.c, {
                name: "bolt"
              }), vz("homePage:giftSuperRank")]
            })]
          })]
        }), Dz.playerHasRank("super") && (0, Kz.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, Kz.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, Kz.jsx)(oz.c, {
              name: "bolt"
            }), vz("homePage:superRank"), qz && (0, Kz.jsxs)("div", {
              className: "AccountSettingsSuperRankTimeLeft",
              children: ["(", qz, ")"]
            })]
          }), (0, kz.purchasesAllowed)() && (0, Kz.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [!(0, hz.vc)(Dz.superRankInfo) && (0, Kz.jsxs)(gz.p, {
              className: "AccountSettingsSuperRankProlong",
              loading: iz,
              onClick: () => {
                lz(yz.f.id, null)
              },
              children: [(0, Kz.jsx)(oz.c, {
                name: "bolt"
              }), vz("settingsMenu:getSuperRankAdditionalDaysPremiumCurrency", {
                days: yz.f.product.days,
                price: yz.f.price
              })]
            }), (0, Kz.jsxs)(gz.p, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, Qz.p)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, Kz.jsx)(oz.c, {
                name: "bolt"
              }), vz("homePage:giftSuperRank")]
            })]
          }), Lz && (0, Kz.jsx)("div", {
            className: "AccountSettingsSuperRankProlongError SmallTextBold",
            children: vz(Lz.translationKey)
          })]
        }), (0, Kz.jsx)(tt, {
          showing: sz
        }), Hz.featureFlags.useSocialFeatures && (0, Kz.jsx)(Ht, {
          showing: sz
        }), (0, Kz.jsxs)("div", {
          className: "SettingBoxGroup AccountSettingsDeleteAccountGroup",
          children: [(0, Kz.jsxs)("div", {
            className: "SettingBox AccountSettingsDeleteAccount SettingBoxWarning",
            children: [(0, Kz.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: vz(Pt(Ut, Kt))
            }), (0, ez.e)() && (0, Kz.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: vz("auth:discordActivityKickWarning")
            }), (0, Kz.jsx)(bt, {
              showing: sz
            })]
          }), (0, Kz.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: vz("auth:deleteAccountWarning")
          })]
        })]
      })
    }));

    function Pt(zz, tz) {
      return zz ? tz ? "auth:deleteGuestAccountButtonTitle" : "auth:deleteGuestAccountWarning" : "auth:deleteAccountButtonTitle"
    }
    var rt = sz(8739),
      Yt = sz(2862),
      xt = sz(1237),
      mt = sz(1401);
    const Jt = (0, Fz.memo)((function(zz) {
        let {
          inGame: tz
        } = zz;
        const {
          t: sz,
          selectedLanguage: Fz
        } = (0, Oz.B)(), {
          clientEscMenuOptions: Wz,
          showDebugOverlay: Xz
        } = (0, Jz.h)(["clientEscMenuOptions", "showDebugOverlay"]), oz = (0, wz.e)("hideCoordinates");
        let vz = "settingsMenu:showCoordinates",
          Uz = "settingsMenu:showChunkCoordinates";

        function uz(zz) {
          const tz = new Intl.DisplayNames([zz], {
            type: "language"
          }).of(zz);
          return tz.charAt(0).toUpperCase() + tz.slice(1)
        }
        return oz && (vz = "settingsMenu:showCoordinatesHidden", Uz = "settingsMenu:showChunkCoordinatesHidden"), (0, Kz.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [tz && Hz.featureFlags.canUseInviteLinks && (0, Kz.jsxs)("div", {
            className: "SettingBox",
            children: [(0, Kz.jsx)("div", {
              className: "SettingsMenuInviteHeader",
              children: sz("settingsMenu:inviteLink")
            }), (0, Kz.jsx)(rt.h, {})]
          }), (0, Kz.jsxs)("div", {
            className: "SettingBox",
            children: [(0, Kz.jsx)("div", {
              className: "SliderText",
              style: {
                marginBottom: "10px"
              },
              children: sz("settingsMenu:language")
            }), (0, Kz.jsx)(Yt.d, {
              options: Object.entries(Oz.i).map((zz => {
                let [tz, sz] = zz;
                return {
                  label: (0, Kz.jsxs)("div", {
                    className: "SettingsMenuLanguageOption",
                    children: [(0, Kz.jsx)("img", {
                      src: sz.flagImg,
                      alt: "flag"
                    }), (0, Kz.jsxs)("span", {
                      children: [uz(tz), " ", (0, Kz.jsxs)("span", {
                        className: "SettingsMenuLanguageOptionCode",
                        children: ["(", tz, ")"]
                      })]
                    })]
                  }),
                  value: tz
                }
              })),
              value: Fz.code,
              onChange: zz => {
                xt.g.get().setCurrentLanguage(zz.value)
              }
            })]
          }), !(0, Hz.isMobileApp)() && (0, mt.h)() && Hz.featureFlags.useForceRotateForceFullscreenOverlay && (0, Kz.jsx)(mz.b, {
            label: sz("settingsMenu:disableFullscreenMode"),
            checked: Wz.disableFullscreen,
            onClick: zz => {
              Jz.b.setClientEscMenuOptions({
                disableFullscreen: zz
              })
            }
          }), (0, Kz.jsx)(mz.b, {
            label: sz(vz),
            checked: Wz.showCoordinates,
            onClick: zz => {
              Jz.b.setClientEscMenuOptions({
                showCoordinates: zz
              })
            },
            disabled: oz
          }), (0, Kz.jsx)(mz.b, {
            label: sz(Uz),
            checked: Wz.showChunkCoordinates,
            onClick: zz => {
              Jz.b.setClientEscMenuOptions({
                showChunkCoordinates: zz
              })
            },
            disabled: oz
          }), (0, Kz.jsx)(mz.b, {
            label: sz("settingsMenu:showFps"),
            checked: Wz.showFPS,
            onClick: zz => {
              Jz.b.setClientEscMenuOptions({
                showFPS: zz
              })
            }
          }), (0, Kz.jsx)(mz.b, {
            label: sz("settingsMenu:disableBunnyHopping"),
            checked: Wz.disableBunnyHopping,
            onClick: zz => {
              Jz.b.setClientEscMenuOptions({
                disableBunnyHopping: zz
              })
            }
          }), (0, Xt.A)() && (0, Kz.jsx)(mz.b, {
            label: sz("settingsMenu:showChat"),
            checked: Wz.showChat,
            onClick: zz => {
              Jz.b.setClientEscMenuOptions({
                showChat: zz
              })
            }
          }), (0, Kz.jsx)(mz.b, {
            label: sz("settingsMenu:showDebugOverlay"),
            checked: Xz,
            onClick: zz => {
              Jz.b.set({
                showDebugOverlay: zz
              })
            }
          }), Hz.featureFlags.useSocialFeatures && (0, Kz.jsx)(mz.b, {
            label: sz("settingsMenu:showFriendOnlineToasts"),
            checked: Wz.showFriendOnlineToasts,
            onClick: zz => {
              Jz.b.setClientEscMenuOptions({
                showFriendOnlineToasts: zz
              })
            }
          }), (0, Kz.jsx)(mz.b, {
            label: sz("settingsMenu:showNewItemIndicator"),
            checked: Wz.showNewItemIndicator,
            onClick: zz => {
              Jz.b.setClientEscMenuOptions({
                showNewItemIndicator: zz
              })
            }
          })]
        })
      })),
      It = (0, Fz.memo)((function() {
        const {
          t: zz
        } = (0, Oz.B)(), {
          soundVolume: tz,
          musicVolume: sz
        } = (0, Jz.h)(["soundVolume", "musicVolume"]);
        return (0, Kz.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, Kz.jsx)(mz.g, {
            name: zz("settingsMenu:musicVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: sz,
            onChange: zz => {
              Jz.b.set({
                musicVolume: Math.round(100 * zz) / 100
              })
            },
            format: zz => zz.toFixed(2)
          }), (0, Kz.jsx)(mz.g, {
            name: zz("settingsMenu:soundEffectsVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: tz,
            onChange: zz => {
              Jz.b.set({
                soundVolume: Math.round(100 * zz) / 100
              })
            },
            format: zz => zz.toFixed(2)
          })]
        })
      }));
    var Ct = sz(686),
      et = sz(1416),
      Zt = sz(3336),
      Gt = sz(8744),
      Tt = sz(3163);
    const ct = {
      app: "notificationSettings:pushTargetsApp",
      browser: "notificationSettings:pushTargetsBrowser",
      msnPlay: "notificationSettings:pushTargetsMsnPlay"
    };

    function jt() {
      const {
        t: zz
      } = (0, Oz.B)(), tz = (0, Tt.d)(), {
        mobilePushNotificationsCanAsk: sz
      } = (0, Jz.h)(["mobilePushNotificationsCanAsk"]), [Wz, Xz] = (0, Fz.useState)(null), [oz, vz] = (0, Fz.useState)(!1), [Uz, uz] = (0, Fz.useState)(null), [Nz, bz] = (0, Fz.useState)(!1), wz = (0, Fz.useCallback)((() => {
        (0, Zt.d)().then((zz => {
          tz.current && (Xz(zz), vz(!1))
        })).catch((zz => {
          console.error("Failed to load push notification targets:", zz), tz.current && vz(!0)
        }))
      }), [tz]), Dz = (0, Fz.useCallback)((() => {
        (0, Gt.b)().then((zz => {
          tz.current && uz((() => zz))
        }))
      }), [tz]);
      (0, Fz.useEffect)((() => {
        wz()
      }), [wz]), (0, Fz.useEffect)((() => {
        Dz()
      }), [Dz, sz]), (0, et.g)(Zt.j, wz);
      const Hz = null === Wz ? [] : Object.keys(ct).filter((zz => Wz[zz] > 0));
      return (0, Kz.jsxs)("div", {
        className: "SettingBox PushNotificationSettings",
        children: [(0, Kz.jsx)("div", {
          className: "SliderText",
          children: zz("notificationSettings:pushNotifications")
        }), null === Wz && oz && (0, Kz.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: zz("notificationSettings:pushTargetsLoadFailed")
        }), null !== Wz && 0 === Hz.length && (0, Kz.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: zz("notificationSettings:pushTargetsNone")
        }), Hz.length > 0 && (0, Kz.jsx)("ul", {
          className: "PushNotificationSettingsTargets",
          children: Hz.map((tz => {
            var sz;
            return (0, Kz.jsx)("li", {
              children: zz(ct[tz], {
                count: null !== (sz = null === Wz || void 0 === Wz ? void 0 : Wz[tz]) && void 0 !== sz ? sz : 0
              })
            }, tz)
          }))
        }), null !== Uz && (0, Kz.jsx)(gz.h, {
          className: "PushNotificationSettingsButton",
          loading: Nz,
          onClick: () => {
            bz(!0), Uz().catch((zz => {
              console.error("Failed to turn on push notifications:", zz)
            })).finally((() => {
              tz.current && (bz(!1), Dz())
            }))
          },
          children: zz("notificationSettings:pushTurnOn")
        })]
      })
    }
    const At = {
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
      yt = (0, Fz.memo)((function() {
        const {
          t: zz
        } = (0, Oz.B)(), {
          clientEscMenuOptions: tz
        } = (0, Jz.h)(["clientEscMenuOptions"]);
        return (0, Kz.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, Kz.jsx)(mz.d, {
            label: zz("notificationSettings:friendRequests"),
            options: Ct.b.map((tz => ({
              value: tz,
              label: zz(At[tz].label)
            }))),
            value: tz.friendRequestNotifications,
            onChange: zz => {
              Jz.b.setClientEscMenuOptions({
                friendRequestNotifications: zz
              })
            },
            circleInfoText: (0, Kz.jsx)("div", {
              className: "NotificationSettingLevelsInfo",
              children: Ct.b.map((tz => (0, Kz.jsxs)("div", {
                children: [(0, Kz.jsx)("b", {
                  children: zz(At[tz].label)
                }), ": ", zz(At[tz].info)]
              }, tz)))
            })
          }), (0, Kz.jsx)(jt, {})]
        })
      }));
    var Mt = sz(4145),
      dt = sz(201),
      ht = sz(290),
      Qt = sz(6237),
      kt = sz(3133),
      it = sz(8752),
      Lt = sz(580),
      lt = sz(34);
    var nt = sz(601),
      qt = sz(44),
      St = sz(4027);
    const Vt = new Map([
      ["chunkHorizAddDist", "horizontal"],
      ["chunkVertAddDist", "vertical"]
    ]);

    function Rt(zz) {
      return Vt.has(zz) ? Bz.gameBridge.lookup("RP", null) : null
    }

    function pt(zz) {
      if (!(0, Lt.G)(Jz.b.get("clientEscMenuOptions")[zz])) return Jz.b.get("clientEscMenuOptions")[zz];
      const tz = Rt(zz);
      return null !== tz ? tz[Vt.get(zz)] : qt.f.getItem(zz)
    }

    function ft(zz, tz) {
      if ("useTouchControls" === zz) return void(0, St.c)(tz);
      zz in Jz.b.get("clientEscMenuOptions") && Jz.b.setClientEscMenuOptions({
        [zz]: tz
      });
      const sz = Rt(zz);
      null !== sz && Bz.gameBridge.send("setChunkAddDistance", {
        ...sz,
        [Vt.get(zz)]: tz
      }), qt.f.setItem(zz, tz)
    }
    var Et = sz(4063),
      zs = sz(8755),
      ts = sz(8757),
      ss = sz(4142);

    function Fs(zz) {
      var tz, Wz, oz, vz;
      let {
        minChunkAddDist: Uz,
        getValue: uz,
        onChange: Nz,
        setApplySettingsCallback: bz
      } = zz;
      const {
        t: Dz
      } = (0, Oz.B)(), {
        clientEscMenuOptions: gz
      } = (0, Jz.h)(["clientEscMenuOptions", "showDistantNametags"]), Bz = (0, Fz.useRef)(uz("showFog")), Pz = (0, Fz.useRef)(gz.antiAliasing), rz = (0, Fz.useRef)(gz.useWebGpu), [Yz, xz] = (0, Fz.useState)(null), [Cz, ez] = (0, Fz.useState)((() => (0, kt.f)(Hz.featureFlags.settings.canUseShaderPacks))), [Zz] = (0, Fz.useState)((() => Jz.b.isWebGpuDefaultOff())), [Gz] = (0, Fz.useState)(ht.g);
      (0, Fz.useEffect)((() => {
        let zz = !1;
        return (0, Hz.hasUsableWebGpuAdapter)().then((tz => {
          zz || xz(tz)
        })), (0, kt.k)(Hz.featureFlags.settings.canUseShaderPacks) && (0, Qt.g)().then((async tz => {
          const Fz = null !== tz && await async function(zz) {
            const [{
              isShaderPackActive: tz
            }, {
              loadPageShaderPackCompiler: Fz
            }] = await Promise.all([sz.e(127).then((() => sz(6234))), Promise.all([sz.e(74), sz.e(131), sz.e(130)]).then((() => sz(6193)))]);
            return tz(zz, await Fz())
          }(tz);
          zz || ez(Fz)
        })), () => {
          zz = !0
        }
      }), []);
      const Tz = function(zz, tz, sz, Fz, Wz) {
          return (0, it.d)(sz, Fz) && !0 === tz ? {
            translationKey: "settingsMenu:newWebGpuForcedOnByShaderPack",
            checked: !0,
            disabled: !0
          } : {
            translationKey: !1 !== tz ? "settingsMenu:newWebGpu" : Wz ? "settingsMenu:newWebGpuDisabledUntilRestart" : "settingsMenu:newWebGpuUnsupported",
            checked: zz && !1 !== tz,
            disabled: !0 !== tz
          }
        }(gz.useWebGpu, Yz, Cz, Zz, Gz),
        cz = (gz.useWebGpu || (0, it.d)(Cz, Zz)) && Cz && !0 === Yz,
        jz = (0, wz.e)("lightingOverride"),
        Az = !(0, Lt.G)(jz);
      let yz = "settingsMenu:enableLighting";
      Az && (yz = jz ? "settingsMenu:enableLightingForcedOn" : "settingsMenu:enableLightingForcedOff");
      const Mz = zz => {
          var tz, sz, Fz;
          const Wz = null !== (tz = zz.showFog) && void 0 !== tz ? tz : uz("showFog"),
            Xz = null !== (sz = zz.antiAliasing) && void 0 !== sz ? sz : gz.antiAliasing,
            Oz = null !== (Fz = zz.useWebGpu) && void 0 !== Fz ? Fz : gz.useWebGpu,
            oz = !nt.p && Wz !== Bz.current || Xz !== Pz.current || Oz !== rz.current;
          bz(oz ? () => mz.h : null)
        },
        dz = (0, wz.e)("fogChunkDistanceOverride"),
        hz = (0, wz.e)("fogBlockDistanceOverride"),
        Qz = !(0, Lt.G)(dz) || !(0, Lt.G)(hz),
        kz = Qz ? "settingsMenu:showFogForcedOn" : "settingsMenu:showFog",
        [iz, Lz] = (0, Mt.c)(Uz),
        [lz, nz] = (0, ss.j)(Uz),
        az = Dz("settingsMenu:chunkLoadDistanceDeviceLimit"),
        qz = lz < iz,
        Sz = Math.min(null !== (tz = uz("chunkHorizAddDist")) && void 0 !== tz ? tz : Uz[0], lz),
        Vz = !Qz && function(zz, tz) {
          return !0 === zz.showFog && zz.fogChunkDistance > tz
        }(gz, Sz);
      return (0, Kz.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [(0, Kz.jsx)(mz.g, {
          name: Dz("settingsMenu:horizontalChunkLoadDistance"),
          min: Uz[0],
          max: iz,
          selectableMax: lz,
          cappedNote: az,
          step: 1,
          initValue: Sz,
          onChange: zz => {
            !0 === uz("showFog") && zz < uz("fogChunkDistance") && Nz("fogChunkDistance", zz), Nz("chunkHorizAddDist", zz), lt.o.Yg("updatedChunkLoadDist")
          },
          circleInfoText: Dz("settingsMenu:chunkLoadDistanceInfo")
        }), (0, Kz.jsx)(mz.g, {
          name: Dz("settingsMenu:verticalChunkLoadDistance"),
          min: Uz[1],
          max: Lz,
          selectableMax: nz,
          cappedNote: qz ? void 0 : az,
          step: 1,
          initValue: Math.min(null !== (Wz = uz("chunkVertAddDist")) && void 0 !== Wz ? Wz : Uz[1], nz),
          onChange: zz => {
            Nz("chunkVertAddDist", zz), lt.o.Yg("updatedChunkLoadDist")
          },
          circleInfoText: Dz("settingsMenu:chunkLoadDistanceInfo"),
          className: "VerticalChunkLoadSlider"
        }), (0, Kz.jsx)(mz.b, {
          label: Dz("settingsMenu:chunkFadeIn"),
          checked: gz.chunkFadeIn,
          onClick: zz => {
            Jz.b.setClientEscMenuOptions({
              chunkFadeIn: zz
            })
          },
          circleInfoText: Dz("settingsMenu:chunkFadeInInfo")
        }), Iz.devTools.supports("chunkBorders") && (0, Kz.jsx)(mz.b, {
          label: Dz("settingsMenu:showChunkBorders"),
          checked: gz.showChunkBorders,
          onClick: zz => {
            Jz.b.setClientEscMenuOptions({
              showChunkBorders: zz
            })
          },
          circleInfoText: Dz("settingsMenu:showChunkBordersInfo")
        }), (0, Kz.jsx)(mz.b, {
          label: Dz(yz),
          checked: gz.enableLighting,
          onClick: zz => {
            Jz.b.setClientEscMenuOptions({
              enableLighting: zz
            })
          },
          disabled: Az
        }), (0, Kz.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, Kz.jsx)(mz.b, {
            label: Dz(kz),
            checked: gz.showFog,
            onClick: zz => {
              Mz({
                showFog: zz
              }), Jz.b.setClientEscMenuOptions({
                showFog: zz
              })
            },
            disabled: Qz,
            className: Xz()({
              SettingBoxWarning: Vz
            })
          }), (0, Kz.jsx)(mz.g, {
            name: Dz("settingsMenu:fogChunkDistance"),
            min: Uz[0],
            max: dt.d.maxChunkHorizAddDistance,
            step: 1,
            initValue: null !== (oz = gz.fogChunkDistance) && void 0 !== oz ? oz : Uz[0],
            onChange: zz => {
              Jz.b.setClientEscMenuOptions({
                fogChunkDistance: zz
              }), lt.o.Yg("fogChunkDistanceChanged", zz)
            },
            circleInfoText: Dz("settingsMenu:fogChunkDistanceInfo"),
            disabled: Qz || !1 === uz("showFog"),
            className: Xz()({
              SettingBoxWarning: Vz
            })
          }), Vz && (0, Kz.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: Dz("settingsMenu:fogChunkDistanceInfo")
          })]
        }), !nt.p && (0, Kz.jsx)(mz.b, {
          label: Dz(cz ? "settingsMenu:disableBlockTextureAtlasUnavailableWithShaderPack" : "settingsMenu:disableBlockTextureAtlas"),
          checked: !cz && gz.disableTexAtlas,
          onClick: zz => {
            Jz.b.setClientEscMenuOptions({
              disableTexAtlas: zz
            })
          },
          circleInfoText: Dz("settingsMenu:disableBlockTextureAtlasInfo"),
          disabled: cz
        }), (0, Kz.jsx)(mz.g, {
          name: Dz("settingsMenu:fieldOfView"),
          min: 50,
          max: 160,
          step: 1,
          initValue: gz.cameraFOV,
          onChange: zz => {
            Jz.b.setClientEscMenuOptions({
              cameraFOV: zz
            })
          }
        }), (0, Kz.jsx)(mz.b, {
          label: Dz("settingsMenu:disableViewBobbing"),
          checked: gz.disableBobbing,
          onClick: zz => {
            Jz.b.setClientEscMenuOptions({
              disableBobbing: zz
            })
          },
          circleInfoText: Dz("settingsMenu:disableViewBobbingInfo")
        }), (0, Kz.jsx)(mz.b, {
          label: Dz("settingsMenu:antiAliasing"),
          checked: gz.antiAliasing,
          onClick: zz => {
            Mz({
              antiAliasing: zz
            }), (0, Et.g)("antiAliasing"), Jz.b.setClientEscMenuOptions({
              antiAliasing: zz
            })
          },
          circleInfoText: Dz("settingsMenu:antiAliasingInfo")
        }), (0, Kz.jsx)(mz.g, {
          name: Dz("settingsMenu:pixelScale"),
          min: 1,
          max: 8,
          step: 1,
          initValue: null !== (vz = gz.pixelScale) && void 0 !== vz ? vz : 1,
          onChange: zz => {
            (zz !== Jz.b.get("clientEscMenuOptions").pixelScale || (0, ts.r)()) && (0, Et.g)("pixelScale"), Jz.b.setClientEscMenuOptions({
              pixelScale: zz
            })
          },
          circleInfoText: Dz("settingsMenu:pixelScaleInfo"),
          format: zz => `${zz}x`
        }), (0, Kz.jsx)(mz.b, {
          label: Dz("settingsMenu:pixelSmoothing"),
          checked: gz.pixelSmoothing,
          onClick: zz => {
            Jz.b.setClientEscMenuOptions({
              pixelSmoothing: zz
            })
          },
          circleInfoText: Dz("settingsMenu:pixelSmoothingInfo")
        }), nt.p && (0, Kz.jsx)(mz.b, {
          label: Dz("settingsMenu:distantNametags"),
          checked: (0, zs.e)(),
          onClick: zz => {
            Jz.b.set({
              showDistantNametags: zz
            })
          },
          circleInfoText: Dz("settingsMenu:distantNametagsInfo")
        }), (0, Kz.jsx)(mz.b, {
          label: Dz(Tz.translationKey),
          checked: Tz.checked,
          onClick: zz => {
            Mz({
              useWebGpu: zz
            }), Jz.b.setClientEscMenuOptions({
              useWebGpu: zz
            })
          },
          circleInfoText: Dz("settingsMenu:newWebGpuInfo"),
          disabled: Tz.disabled
        })]
      })
    }
    var Ws = sz(4057),
      Xs = sz(8361),
      Os = sz(8779),
      os = sz(8374),
      vs = sz(8785);
    const Us = {
        color: 16777215,
        name: "white"
      },
      Ks = {
        color: 0,
        name: "black"
      },
      us = [Us, {
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
      }, Ks],
      Ns = [Ks, Us];

    function bs(zz) {
      return `${zz} px`
    }

    function ws(zz) {
      return `${zz}%`
    }

    function Ds(zz) {
      let {
        label: tz,
        value: sz,
        swatches: Fz,
        onChange: Wz
      } = zz;
      const {
        t: oz
      } = (0, Oz.B)(), vz = !Fz.some((zz => zz.color === sz));
      return (0, Kz.jsxs)("div", {
        className: "SettingBox CrosshairColorRow",
        children: [(0, Kz.jsx)("div", {
          className: "SliderText",
          children: tz
        }), (0, Kz.jsxs)("div", {
          className: "CrosshairSwatches",
          role: "radiogroup",
          "aria-label": tz,
          children: [Fz.map((zz => {
            let {
              color: tz,
              name: Fz
            } = zz;
            return (0, Kz.jsx)("button", {
              type: "button",
              role: "radio",
              "aria-checked": tz === sz,
              "aria-label": oz(`crosshairSettings:color_${Fz}`),
              "data-pad-focusable": !0,
              className: Xz()("CrosshairSwatch", {
                Selected: tz === sz
              }),
              style: {
                background: (0, vs.n)(tz)
              },
              onClick: () => {
                Wz(tz)
              }
            }, tz)
          })), (0, Kz.jsx)("label", {
            className: Xz()("CrosshairSwatch CrosshairSwatchCustom", {
              Selected: vz
            }),
            style: vz ? {
              background: (0, vs.n)(sz)
            } : void 0,
            title: oz("crosshairSettings:customColor"),
            "data-pad-focusable": !0,
            children: (0, Kz.jsx)("input", {
              type: "color",
              "aria-label": oz("crosshairSettings:customColor"),
              value: (0, vs.n)(sz),
              onChange: zz => {
                const tz = (0, vs.u)(zz.target.value);
                null !== tz && Wz(tz)
              }
            })
          })]
        })]
      })
    }

    function gs(zz) {
      let {
        settings: tz,
        onChange: sz
      } = zz;
      const {
        t: Fz
      } = (0, Oz.B)(), Wz = (zz, Fz) => {
        sz((0, vs.y)(tz, zz, Fz))
      }, Xz = function(zz, sz) {
        let Fz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : bs;
        const {
          min: Xz,
          max: Oz,
          step: oz
        } = vs.e[zz];
        return (0, Kz.jsx)(mz.g, {
          name: sz,
          min: Xz,
          max: Oz,
          step: oz,
          initValue: tz[zz],
          format: Fz,
          onChange: tz => {
            Wz(zz, tz)
          }
        }, zz)
      }, oz = ["lines", "dot", "circle"].filter((zz => tz[zz])), vz = (zz, sz, Fz) => (0, Kz.jsx)(mz.b, {
        label: sz,
        checked: tz[zz],
        disabled: 1 === oz.length && oz[0] === zz,
        circleInfoText: Fz,
        onClick: tz => {
          Wz(zz, tz)
        }
      }, zz), Uz = "shapes" === tz.style;
      return (0, Kz.jsxs)(Kz.Fragment, {
        children: [(0, Kz.jsx)(mz.d, {
          label: Fz("crosshairSettings:style"),
          options: [{
            value: "classic",
            label: Fz("crosshairSettings:styleClassic")
          }, {
            value: "shapes",
            label: Fz("crosshairSettings:styleShapes")
          }],
          value: tz.style,
          onChange: zz => {
            Wz("style", zz)
          }
        }), (0, Kz.jsx)(Ds, {
          label: Fz("crosshairSettings:color"),
          value: tz.color,
          swatches: us,
          onChange: zz => {
            Wz("color", zz)
          }
        }), Xz("opacity", Fz("crosshairSettings:opacity"), ws), !Uz && Xz("size", Fz("crosshairSettings:size"), ws), Uz && (0, Kz.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [vz("lines", Fz("crosshairSettings:lines")), tz.lines && Xz("lineLength", Fz("crosshairSettings:lineLength")), tz.lines && Xz("lineThickness", Fz("crosshairSettings:lineThickness")), tz.lines && Xz("gap", Fz("crosshairSettings:gap")), tz.lines && vz("tStyle", Fz("crosshairSettings:tStyle"))]
        }), Uz && (0, Kz.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [vz("dot", Fz("crosshairSettings:dot")), tz.dot && Xz("dotSize", Fz("crosshairSettings:dotSize"))]
        }), Uz && (0, Kz.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [vz("circle", Fz("crosshairSettings:circle")), tz.circle && Xz("circleRadius", Fz("crosshairSettings:circleRadius")), tz.circle && Xz("circleThickness", Fz("crosshairSettings:circleThickness"))]
        }), (0, Kz.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [Xz("outline", Fz("crosshairSettings:outline"), (zz => zz > 0 ? bs(zz) : Fz("crosshairSettings:off"))), tz.outline > 0 && (0, Kz.jsx)(Ds, {
            label: Fz("crosshairSettings:outlineColor"),
            value: tz.outlineColor,
            swatches: Ns,
            onChange: zz => {
              Wz("outlineColor", zz)
            }
          })]
        }), vz("growOnClick", Fz("crosshairSettings:growOnClick")), Uz && vz("forGuns", Fz("crosshairSettings:forGuns"), Fz("crosshairSettings:forGunsInfo"))]
      })
    }
    var Hs = sz(78),
      Bs = sz(1264),
      Ps = sz(8794),
      rs = sz(8799),
      Ys = sz(8804),
      xs = sz(8809);
    const ms = ["sky", "grass", "stone", "sand", "snow", "night"],
      Is = "4rem";

    function Cs(zz) {
      return {
        backgroundImage: `url(${zz})`,
        backgroundSize: `${Is} ${Is}`,
        backgroundRepeat: "repeat",
        imageRendering: "pixelated"
      }
    }

    function es(zz) {
      return {
        ...(() => {
          switch (zz) {
            case "sky":
              return {
                backgroundImage: "linear-gradient(#3d8fe0 0%, #8cc8f5 45%, #d6eefc 58%, #6fae4a 58.01%, #4f8a33 100%)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              };
            case "grass":
              return Cs(Ps);
            case "stone":
              return Cs(rs);
            case "sand":
              return Cs(Ys);
            case "snow":
              return Cs(xs);
            case "night":
              return {
                backgroundImage: "radial-gradient(circle at 50% 50%, #1e2a4a 0%, #070b16 100vmax)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              }
          }
        })(),
        backgroundPosition: "center"
      }
    }

    function Zs(zz) {
      return Object.freeze({
        ...vs.h,
        style: "shapes",
        outline: 1,
        lines: !1,
        ...zz
      })
    }
    const Gs = [{
        id: "default",
        settings: vs.h
      }, {
        id: "cross",
        settings: Zs({
          color: 5046092,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3
        })
      }, {
        id: "crossDot",
        settings: Zs({
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
        settings: Zs({
          dot: !0,
          dotSize: 4
        })
      }, {
        id: "circle",
        settings: Zs({
          circle: !0,
          circleRadius: 12,
          circleThickness: 1.5,
          dot: !0,
          dotSize: 2
        })
      }, {
        id: "tShape",
        settings: Zs({
          color: 16731391,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3,
          tStyle: !0
        })
      }, {
        id: "tiny",
        settings: Zs({
          color: 16776960,
          lines: !0,
          lineLength: 3,
          lineThickness: 1,
          gap: 2
        })
      }, {
        id: "bold",
        settings: Zs({
          lines: !0,
          lineLength: 10,
          lineThickness: 3,
          gap: 0,
          outline: 1.5
        })
      }],
      Ts = ["growOnClick", "forGuns"];
    var cs = sz(8813);

    function As(zz) {
      let {
        label: tz,
        selected: sz,
        onClick: Fz,
        className: Wz,
        style: Oz,
        children: oz
      } = zz;
      return (0, Kz.jsx)("button", {
        type: "button",
        role: "radio",
        "aria-checked": sz,
        title: tz,
        "aria-label": tz,
        "data-pad-focusable": !0,
        className: Xz()("CrosshairBackdropSwatch", Wz, {
          Selected: sz
        }),
        style: Oz,
        onClick: Fz,
        children: oz
      })
    }

    function ys(zz) {
      let {
        backdrop: tz,
        onChange: sz,
        game: Fz
      } = zz;
      const {
        t: Wz
      } = (0, Oz.B)();
      return (0, Kz.jsxs)("div", {
        className: "CrosshairBackdrops",
        role: "radiogroup",
        "aria-label": Wz("crosshairSettings:background"),
        children: [Fz && (0, Kz.jsx)(As, {
          label: Wz("crosshairSettings:bg_game"),
          selected: Fz.selected,
          onClick: Fz.onSelect,
          className: "CrosshairGameSwatch",
          children: (0, Kz.jsx)(oz.c, {
            name: "cube"
          })
        }), ms.map((zz => (0, Kz.jsx)(As, {
          label: Wz(`crosshairSettings:bg_${zz}`),
          selected: !(null !== Fz && void 0 !== Fz && Fz.selected) && zz === tz,
          style: es(zz),
          onClick: () => {
            sz(zz)
          }
        }, zz)))]
      })
    }

    function Ms(zz) {
      let {
        settings: tz,
        touch: sz,
        backdrop: Fz,
        onChange: Wz
      } = zz;
      const {
        t: oz
      } = (0, Oz.B)(), vz = function(zz) {
        var tz;
        return null !== (tz = Gs.find((tz => (0, vs.v)(tz.settings, zz, Ts)))) && void 0 !== tz ? tz : null
      }(tz);
      return (0, Kz.jsx)("div", {
        className: "CrosshairPresets",
        role: "radiogroup",
        "aria-label": oz("crosshairSettings:presets"),
        children: Gs.map((zz => {
          const Oz = (null === vz || void 0 === vz ? void 0 : vz.id) === zz.id;
          return (0, Kz.jsxs)("button", {
            type: "button",
            role: "radio",
            "aria-checked": Oz,
            "data-pad-focusable": !0,
            className: Xz()("CrosshairPreset", {
              Selected: Oz
            }),
            onClick: () => {
              Wz(function(zz, tz) {
                return {
                  ...tz.settings,
                  growOnClick: zz.growOnClick,
                  forGuns: zz.forGuns
                }
              }(tz, zz))
            },
            children: [(0, Kz.jsx)("div", {
              className: "CrosshairPresetStage",
              style: es(Fz),
              children: (0, Kz.jsx)(cs.d, {
                settings: zz.settings,
                touch: sz,
                inPreview: !0
              })
            }), (0, Kz.jsx)("div", {
              className: "CrosshairPresetName",
              children: oz(`crosshairSettings:preset_${zz.id}`)
            })]
          }, zz.id)
        }))
      })
    }
    var ds = sz(1613);

    function hs(zz, tz) {
      const [sz, Wz] = (0, Fz.useState)(!1), Xz = () => {
        Wz(!1)
      }, [Oz, oz] = (0, Fz.useState)(!1), vz = (0, Fz.useRef)({
        growOnClick: zz.growOnClick,
        forGuns: zz.forGuns
      });
      (0, Fz.useEffect)((() => {
        const tz = vz.current;
        vz.current = {
          growOnClick: zz.growOnClick,
          forGuns: zz.forGuns
        }, (zz.growOnClick && !tz.growOnClick || zz.forGuns && !tz.forGuns) && oz(!0)
      }), [zz.growOnClick, zz.forGuns]), (0, Fz.useEffect)((() => {
        if (!Oz) return;
        const zz = setTimeout((() => {
          oz(!1)
        }), 600);
        return () => {
          clearTimeout(zz)
        }
      }), [Oz]);
      const Uz = sz || Oz;
      return {
        view: {
          pressed: Uz,
          spread: Uz && zz.forGuns && !zz.growOnClick ? 6 : 0
        },
        handlers: {
          onPointerDown: zz => {
            !zz.target.closest(tz) && (0, ds.c)(zz.currentTarget, zz.pointerId) && Wz(!0)
          },
          onPointerUp: Xz,
          onPointerCancel: Xz,
          onLostPointerCapture: Xz
        }
      }
    }

    function Qs(zz) {
      let {
        settings: tz,
        touch: sz,
        backdrop: Fz,
        className: Wz,
        children: Oz,
        label: oz
      } = zz;
      const vz = hs(tz, ".CrosshairStageControls");
      return (0, Kz.jsxs)("div", {
        className: Xz()("CrosshairStage", Wz),
        style: es(Fz),
        ...vz.handlers,
        children: [(0, Kz.jsx)("div", {
          className: "CrosshairStageHold",
          role: "img",
          "aria-label": oz,
          children: (0, Kz.jsx)(cs.d, {
            settings: tz,
            touch: sz,
            inPreview: !0,
            ...vz.view
          })
        }), Oz]
      })
    }
    const ks = "crosshairFullScreen";

    function is(zz) {
      let {
        settings: tz,
        touch: sz,
        backdrop: Wz,
        onBackdrop: vz,
        inGame: Uz,
        onChange: uz,
        onClose: Nz
      } = zz;
      const {
        t: bz
      } = (0, Oz.B)(), wz = (0, Fz.useRef)(null);
      (0, Bs.s)("popup", wz, Nz),
      function(zz) {
        const tz = (0, Fz.useRef)(zz);
        tz.current = zz, (0, Fz.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [ks]: !0
          }, "");
          let zz = !1;
          const sz = () => {
            zz = !0, tz.current()
          };
          return window.addEventListener("popstate", sz), () => {
            var tz;
            window.removeEventListener("popstate", sz), !zz && null !== (tz = window.history.state) && void 0 !== tz && tz[ks] && window.history.back()
          }
        }), [])
      }(Nz);
      const Dz = (0, Fz.useRef)(Nz);
      Dz.current = Nz, (0, Fz.useEffect)((() => {
        function zz(zz) {
          "Escape" === zz.key && (zz.stopPropagation(), Dz.current())
        }
        return window.addEventListener("keydown", zz, !0), () => {
          window.removeEventListener("keydown", zz, !0)
        }
      }), []);
      const Hz = hs(tz, ".CrosshairFullScreenPanel"),
        [Bz, Pz] = (0, Fz.useState)(!0),
        rz = Bz && Uz;
      (0, Fz.useEffect)((() => {
        if (rz) return Jz.b.set({
          crosshairGameView: !0
        }), () => {
          Jz.b.set({
            crosshairGameView: !1
          })
        }
      }), [rz]);
      const [Yz, xz] = (0, Fz.useState)(!0);
      return (0, Hs.createPortal)((0, Kz.jsxs)("div", {
        ref: wz,
        className: "CrosshairFullScreen",
        style: rz ? void 0 : es(Wz),
        ...Hz.handlers,
        children: [(0, Kz.jsx)(cs.d, {
          settings: tz,
          touch: sz,
          inEditor: !0,
          ...Hz.view
        }), (0, Kz.jsxs)("div", {
          className: Xz()("CrosshairFullScreenPanel", {
            Collapsed: !Yz
          }),
          children: [(0, Kz.jsxs)("div", {
            className: "CrosshairFullScreenBar",
            children: [(0, Kz.jsx)(ys, {
              backdrop: Wz,
              onChange: zz => {
                Pz(!1), vz(zz)
              },
              game: Uz ? {
                selected: rz,
                onSelect: () => {
                  Pz(!0)
                }
              } : void 0
            }), (0, Kz.jsx)(gz.Q, {
              className: "CrosshairPanelToggle",
              ariaLabel: bz(Yz ? "crosshairSettings:hideEditor" : "crosshairSettings:showEditor"),
              onClick: () => {
                xz(!Yz)
              },
              children: (0, Kz.jsx)(oz.c, {
                name: Yz ? "caret-up" : "pen"
              })
            }), (0, Kz.jsx)(gz.h, {
              className: "CrosshairFullScreenDone",
              onClick: Nz,
              padDefaultFocus: !0,
              children: bz("crosshairSettings:done")
            })]
          }), Yz && (0, Kz.jsxs)("div", {
            className: "CrosshairFullScreenFields",
            children: [(0, Kz.jsx)(Ms, {
              settings: tz,
              touch: sz,
              backdrop: Wz,
              onChange: uz
            }), (0, Kz.jsx)(gs, {
              settings: tz,
              onChange: uz
            })]
          })]
        })]
      }), document.body)
    }
    var Ls = sz(2477),
      ls = sz(8823);

    function ns(zz) {
      let {
        settings: tz,
        onChange: sz
      } = zz;
      const {
        t: Wz
      } = (0, Oz.B)(), vz = (0, ls.k)(tz), [Uz, uz] = (0, Ls.g)(), [Nz, bz] = (0, Fz.useState)(!1), wz = (0, Fz.useRef)(null), [Dz, Hz] = (0, Ls.g)(), [Bz, Pz] = (0, Fz.useState)(!1);
      return (0, Kz.jsxs)("div", {
        className: "SettingBox CrosshairShare",
        children: [(0, Kz.jsxs)("div", {
          className: "CrosshairShareRow",
          children: [(0, Kz.jsxs)(gz.Q, {
            className: Xz()("CrosshairCopy", {
              ActiveSecondaryButton: Uz
            }),
            onClick: () => {
              (0, Ls.e)(vz, {
                useShareSheet: !1,
                onOutcome: zz => {
                  bz("failed" === zz), "copied" === zz && uz()
                }
              })
            },
            children: [(0, Kz.jsx)(oz.c, {
              name: Uz ? "check" : "copy"
            }), " ", Wz(Uz ? "general:copied" : "crosshairSettings:copy")]
          }), (0, Kz.jsx)(Yz.d, {
            className: "CrosshairPaste",
            domRef: wz,
            ariaLabel: Wz("crosshairSettings:paste"),
            placeholderText: Wz("crosshairSettings:paste"),
            onValueChange: zz => {
              const tz = (0, ls.g)(zz);
              Pz(!tz && zz.trim().length >= ls.c), tz && (sz(tz), wz.current.value = "", Hz())
            }
          })]
        }), Nz && (0, Kz.jsx)("input", {
          className: "CrosshairCode",
          readOnly: !0,
          value: vz,
          "aria-label": Wz("crosshairSettings:copy"),
          onFocus: zz => {
            zz.currentTarget.select()
          }
        }), (0, Kz.jsxs)("div", {
          "aria-live": "polite",
          children: [Bz && (0, Kz.jsx)("div", {
            className: "CrosshairShareNote Error",
            children: Wz("crosshairSettings:pasteInvalid")
          }), Dz && !Bz && (0, Kz.jsx)("div", {
            className: "CrosshairShareNote",
            children: Wz("crosshairSettings:applied")
          })]
        })]
      })
    }
    var as = sz(8826);
    let qs = "sky";

    function Ss(zz) {
      let {
        showing: tz
      } = zz;
      const {
        t: sz
      } = (0, Oz.B)(), {
        isTouchScreen: Wz,
        gameState: Xz,
        clientEscMenuOptions: vz
      } = (0, Jz.h)(["isTouchScreen", "gameState", "clientEscMenuOptions"]), Uz = (0, as.f)(), [uz, Nz] = (0, Fz.useState)(qs), bz = zz => {
        qs = zz, Nz(zz)
      }, [wz, Dz] = (0, Fz.useState)(!1);
      return (0, Fz.useEffect)((() => {
        tz || Dz(!1)
      }), [tz]), (0, Kz.jsxs)("div", {
        className: "SettingsMenuRightInner CrosshairCategory",
        children: [(0, Kz.jsx)("div", {
          className: "CrosshairPreviewSticky",
          children: (0, Kz.jsx)(Qs, {
            className: "CrosshairPreviewStage",
            settings: Uz,
            touch: Wz,
            backdrop: uz,
            label: sz("crosshairSettings:preview"),
            children: (0, Kz.jsxs)("div", {
              className: "CrosshairPreviewBar CrosshairStageControls",
              children: [(0, Kz.jsx)(ys, {
                backdrop: uz,
                onChange: bz
              }), (0, Kz.jsxs)(gz.Q, {
                className: "CrosshairFullScreenButton",
                onClick: () => {
                  Dz(!0)
                },
                children: [(0, Kz.jsx)(oz.c, {
                  name: "expand"
                }), " ", sz("crosshairSettings:fullScreen")]
              })]
            })
          })
        }), (0, Kz.jsx)("div", {
          className: "SettingBox",
          children: (0, Kz.jsx)(Ms, {
            settings: Uz,
            touch: Wz,
            backdrop: uz,
            onChange: as.d
          })
        }), (0, Kz.jsx)(ns, {
          settings: Uz,
          onChange: as.d
        }), Wz && (0, Kz.jsx)(os.b, {
          note: (0, Os.i)(Wz, vz.touchActionButtons) ? sz("crosshairSettings:touchNote") : void 0
        }), (0, Kz.jsx)(gs, {
          settings: Uz,
          onChange: as.d
        }), wz && (0, Kz.jsx)(is, {
          settings: Uz,
          touch: Wz,
          backdrop: uz,
          onBackdrop: bz,
          inGame: "inGame" === Xz,
          onChange: as.d,
          onClose: () => {
            Dz(!1)
          }
        })]
      })
    }
    var Vs = sz(8367),
      Rs = sz(1367),
      ps = sz(4607),
      fs = sz(8834),
      Es = sz(1901),
      zF = sz(3967),
      tF = sz(1904),
      sF = sz(689);
    const FF = (0, Fz.memo)((function() {
      const {
        clientEscMenuOptions: zz
      } = (0, Jz.h)(["clientEscMenuOptions"]), {
        recording: tz,
        clipping: sz,
        hasClipBuffer: Wz
      } = (0, Es.l)("replayRecorder"), Oz = (0, Es.h)("connectedGame", (zz => zz.replay)), oz = (0, zF.n)(), vz = !1 === (0, wz.e)("canRecordReplays");
      (0, Fz.useEffect)((() => {
        Bz.gameBridge.send("setRecorderPrefs", {
          clipping: zz.enableClipping,
          clipSeconds: zz.clipDurationSeconds
        })
      }), [zz.enableClipping, zz.clipDurationSeconds]);
      const Uz = oz || Oz,
        uz = !Uz && !vz,
        Nz = tz || uz,
        bz = uz,
        Dz = bz && sz && !tz;

      function Hz() {
        Nz && Bz.gameBridge.send("toggleRecording", null)
      }
      return (0, Kz.jsxs)("div", {
        className: "SettingsMenuRightInner ReplayViewerCategory",
        children: [(0, Kz.jsxs)("div", {
          className: "SettingBox",
          children: [(0, Kz.jsx)("div", {
            className: "ReplayViewerCategoryRecordingRow",
            children: tz ? (0, Kz.jsxs)(Kz.Fragment, {
              children: [(0, Kz.jsxs)(gz.H, {
                className: "ReplayViewerCategoryButton",
                onClick: Hz,
                disabled: !Nz,
                children: [(0, Kz.jsx)("span", {
                  children: "Stop Recording"
                }), (0, Kz.jsx)(tF.b, {
                  noaAction: "recordGame"
                })]
              }), (0, Kz.jsx)(fs.e, {
                className: "ReplayViewerCategoryRecordingIndicator"
              })]
            }) : (0, Kz.jsxs)(gz.h, {
              className: "ReplayViewerCategoryButton",
              onClick: Hz,
              disabled: !Nz,
              children: [(0, Kz.jsx)("span", {
                children: "Start Recording"
              }), (0, Kz.jsx)(tF.b, {
                noaAction: "recordGame"
              })]
            })
          }), vz && (0, Kz.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Recording is turned off in this game."
          }), Uz && !tz && (0, Kz.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Close Replay Mode to start recording."
          })]
        }), (0, Kz.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, Kz.jsx)(mz.b, {
            label: "Enable clipping",
            checked: zz.enableClipping,
            disabled: !bz,
            onClick: function(zz) {
              bz && Jz.b.setClientEscMenuOptions({
                enableClipping: zz
              })
            },
            className: Xz()({
              SettingBoxDisabled: !bz
            })
          }), (0, Kz.jsx)(mz.g, {
            name: "Clip duration (seconds)",
            min: sF.g,
            max: sF.f,
            step: sF.d,
            initValue: zz.clipDurationSeconds,
            onChange: function(zz) {
              Jz.b.setClientEscMenuOptions({
                clipDurationSeconds: zz
              })
            },
            circleInfoText: "Longer clip durations use more memory and may affect performance.",
            disabled: !bz || !zz.enableClipping
          })]
        }), (0, Kz.jsxs)("div", {
          className: "SettingBox",
          children: [(0, Kz.jsxs)(gz.h, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              Dz && Bz.gameBridge.send("saveClip", null)
            },
            disabled: !Dz,
            children: [(0, Kz.jsx)("span", {
              children: "Record clip"
            }), (0, Kz.jsx)(tF.b, {
              noaAction: "recordClip"
            })]
          }), zz.enableClipping && !Wz && bz && !tz && (0, Kz.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clip buffer is filling \u2014 play for a moment, then save."
          }), tz && (0, Kz.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clipping pauses while a full recording is active."
          })]
        }), (0, Kz.jsxs)("div", {
          className: "SettingBox",
          children: [(0, Kz.jsxs)(gz.h, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              (0, zF.k)(!0), Jz.b.set({
                openEverythingMenuName: null
              })
            },
            disabled: oz,
            children: [(0, Kz.jsx)("span", {
              children: "Open Replay Mode"
            }), (0, Kz.jsx)(tF.b, {
              noaAction: "replayViewerOpen"
            })]
          }), oz && (0, Kz.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Replay Mode is already open."
          })]
        }), (0, Kz.jsxs)("div", {
          className: "SettingBox",
          children: [(0, Kz.jsx)("div", {
            className: "ReplayViewerCategoryTutorialTitle",
            children: "How to use Replay Mode"
          }), (0, Kz.jsx)("iframe", {
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
    var WF = sz(1824);
    const XF = {
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
        icon: () => (0, Kz.jsx)("svg", {
          className: "svg-inline--fa",
          viewBox: "0 0 640 512",
          "aria-hidden": "true",
          children: (0, Kz.jsx)("path", {
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
      Cw: {
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

    function OF() {
      return Promise.all([sz.e(74), sz.e(131), sz.e(125), sz.e(122)]).then((() => sz(40169))).then((zz => ({
        default: zz.ShaderPackCategory
      })), (zz => (console.error("Failed to load the shader pack settings", zz), {
        default: oF
      })))
    }

    function oF() {
      const {
        t: zz
      } = (0, Oz.B)();
      return (0, Kz.jsx)("div", {
        className: "SettingsMenuRightInner",
        children: zz("shaderPack:tabLoadFailed")
      })
    }
    var vF = sz(1358);
    const UF = (0, Fz.lazy)((() => sz.e(263).then((() => sz(40151))).then((zz => ({
        default: zz.BloxdInformation
      }))))),
      KF = (0, Fz.lazy)(OF);

    function uF(zz) {
      return zz ? "general" : "account"
    }
    const NF = new Map,
      bF = (0, Fz.memo)((function(zz) {
        let {
          show: tz,
          setBeforeResumeCallback: sz
        } = zz;
        (0, Dz.c)();
        const {
          gameState: Wz,
          openSettingsCategory: Xz
        } = (0, Jz.h)(["gameState", "openSettingsCategory"]), {
          userContext: vz
        } = (0, bz.b)(), {
          t: Uz
        } = (0, Oz.B)(), Yz = (0, Nz.b)(), xz = (0, wz.e)("minChunkAddDist"), mz = "inGame" === Wz, [Iz, Zz] = (0, Fz.useState)(uF(mz)), [Gz, Tz] = (0, Fz.useState)(null), [cz, jz] = (0, Fz.useState)([]), Az = (0, Fz.useRef)(function() {
          const zz = new Date,
            tz = 6 * (zz.getMonth() + zz.getDate()) % Ut.A.length;
          return [...Ut.A, ...Ut.A].slice(tz, tz + 6)
        }()), yz = (0, Fz.useRef)(null), Mz = (0, et.h)(Rs.k, (0, Rs.e)()), dz = Object.keys(XF).filter((zz => {
          switch (zz) {
            case "replayViewer":
              return mz;
            case "developerTools":
              return vz.playerHasRank("developer") || !1;
            case "texturePack":
              return Hz.featureFlags.settings.canChangeTexturePack;
            case "Cw":
              return Hz.featureFlags.settings.canUseShaderPacks;
            case "notifications":
              return Hz.featureFlags.useSocialFeatures;
            case "alternativeDomains":
              return "crazygames" !== ez.t;
            case "controller":
              return Hz.featureFlags.useControllerSupport && (Mz || "controller" === Iz);
            default:
              return !0
          }
        }));
        (0, et.g)("toggleFullCoordinateOverlay", (() => {
          const zz = pt("showCoordinates") && pt("showChunkCoordinates") && pt("showFPS");
          ft("showCoordinates", !zz), ft("showChunkCoordinates", !zz), ft("showFPS", !zz), Yz()
        })), (0, et.g)("updatedChunkLoadDist", (() => {
          Yz()
        })), (0, Fz.useEffect)((() => {
          if (Tz(null), null === Jz.b.get("openSettingsCategory")) {
            const zz = (0, vF.c)() ? NF.get(mz) : void 0;
            Zz(zz && dz.includes(zz) ? zz : uF(mz))
          }
        }), [tz]), (0, Fz.useEffect)((() => {
          null !== Xz && (Zz(Xz), NF.set(mz, Xz), Jz.b.set({
            openSettingsCategory: null
          }))
        }), [Xz, mz]), (0, Fz.useLayoutEffect)((() => {
          yz.current && (yz.current.scrollTop = 0)
        }), [Iz, tz]), (0, Fz.useEffect)((() => {
          "updateLog" === Iz && (0, rz.b)().then(jz)
        }), [Iz]), (0, Fz.useEffect)((() => {
          if ((0, Lt.G)(xz)) return;
          const [zz, tz] = (0, Ws.f)(), [sz, Fz] = (0, Mt.c)(xz), Wz = (0, WF.f)(xz[0], zz, sz), Xz = (0, WF.f)(xz[1], tz, Fz);
          Bz.gameBridge.send("setChunkAddDistance", {
            horizontal: Wz,
            vertical: Xz
          })
        }), [xz]);
        const hz = (0, Fz.useCallback)((async () => {
          Gz && (await Gz(), Tz(null))
        }), [Gz]);

        function Qz() {
          Jz.b.set({
            openEverythingMenuName: null
          })
        }
        return (0, Fz.useEffect)((() => {
          sz((() => hz))
        }), [hz, sz]), (0, Kz.jsxs)("div", {
          className: "SettingsMenu Menu",
          style: tz ? {} : {
            display: "none"
          },
          children: [(0, Kz.jsx)("div", {
            className: "MenuSideBar",
            children: (0, Kz.jsx)("div", {
              className: "MenuSideBarBody",
              children: (0, Kz.jsx)(uz, {
                items: dz.map((zz => {
                  const tz = XF[zz].icon;
                  return {
                    id: zz,
                    faIcon: "string" === typeof tz ? tz : void 0,
                    iconElement: "string" === typeof tz ? void 0 : (0, Kz.jsx)(tz, {}),
                    title: Uz(XF[zz].displayName),
                    redDot: !1
                  }
                })),
                selectedItemId: Iz,
                onClick: zz => {
                  !async function(zz) {
                    await hz(), Zz(zz), NF.set(mz, zz)
                  }(zz)
                }
              })
            })
          }), (0, Kz.jsxs)("div", {
            ref: yz,
            className: "MenuBody SettingsMenuRight",
            children: ["account" === Iz && (0, Kz.jsx)(Bt, {
              showing: tz,
              inGame: mz
            }), "general" === Iz && (0, Kz.jsx)(Jt, {
              inGame: mz
            }), "audio" === Iz && (0, Kz.jsx)(It, {}), "notifications" === Iz && (0, Kz.jsx)(yt, {}), "graphics" === Iz && (0, Kz.jsx)(Fs, {
              minChunkAddDist: null !== xz && void 0 !== xz ? xz : [2, 2],
              getValue: pt,
              onChange: ft,
              setApplySettingsCallback: Tz
            }), "controls" === Iz && (0, Kz.jsx)(Xs.d, {}), "crosshair" === Iz && (0, Kz.jsx)(Ss, {
              showing: tz
            }), "controller" === Iz && Hz.featureFlags.useControllerSupport && (0, Kz.jsx)(Vs.e, {}), Hz.featureFlags.settings.canChangeTexturePack && "texturePack" === Iz && (0, Kz.jsx)(ps.b, {
              setApplySettingsCallback: Tz
            }), Hz.featureFlags.settings.canUseShaderPacks && "Cw" === Iz && (0, Kz.jsx)(Fz.Suspense, {
              fallback: null,
              children: (0, Kz.jsx)(KF, {
                setApplySettingsCallback: Tz
              })
            }), "updateLog" === Iz && (0, Kz.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, Kz.jsx)("div", {
                className: "UpdateLogsContainer",
                children: cz.map(((zz, tz) => (0, Kz.jsx)(Pz.d, {
                  updateLog: zz,
                  index: tz,
                  close: Qz
                }, tz)))
              })
            }), "information" === Iz && (0, Kz.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, Kz.jsx)(Fz.Suspense, {
                fallback: null,
                children: (0, Kz.jsx)(UF, {})
              })
            }), "alternativeDomains" === Iz && (0, Kz.jsxs)("div", {
              className: "SettingsMenuRightInner",
              children: [(0, Kz.jsx)("div", {
                className: "AlternativeDomainsTitle",
                children: Uz("settingsMenu:unblockedDomainsDescription")
              }), (0, Kz.jsx)("div", {
                className: "AlternativeDomainsList",
                children: Az.current.map((zz => (0, Kz.jsxs)(gz.h, {
                  onClick: () => {
                    window.open(`https://${zz}`)
                  },
                  children: [(0, Kz.jsx)(oz.c, {
                    name: "arrow-up-right-from-square"
                  }), " ", zz]
                }, zz)))
              })]
            }), "replayViewer" === Iz && (0, Kz.jsx)(FF, {}), "developerTools" === Iz && (0, Kz.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, Kz.jsx)(Cz, {
                setApplySettingsCallback: Tz
              })
            }), null !== Gz && (0, Kz.jsx)("div", {
              className: "SettingsMenuRightFooter",
              children: (0, Kz.jsx)(gz.h, {
                className: "SettingsMenuRightFooterButton",
                onClick: hz,
                children: Uz("general:apply")
              })
            })]
          })]
        })
      }));
    var wF = sz(2414);
    const DF = ["characters", "emote", "skin", "hat", "head", "eyebrows", "eyes", "back", "body", "legs", "shoes", "profileEffect", "cape", "nameColour"],
      gF = (0, Fz.lazy)((() => Promise.resolve().then((() => sz(4304))).then((zz => {
        zz.needGameClientAfterPaint();
        const tz = zz.matchmakingLibrariesPromise.then((zz => (0, wF.d)(zz.loadCharacterCustomisationUI(), (zz => zz.CharacterCustomisationUI))));
        return Promise.all([zz.ensureGameSetup(), tz]).then((zz => {
          let [, tz] = zz;
          return tz
        }))
      }))));

    function HF(zz) {
      let {
        show: tz
      } = zz;
      const {
        userContext: sz
      } = (0, bz.b)(), [Wz, Xz] = (0, Fz.useState)("characters");
      if (!tz) return null;
      const Oz = DF.filter((zz => "cape" !== zz && "nameColour" !== zz || sz.getPlayerRanks().includes("super") || (0, kz.purchasesAllowed)())).map((zz => ({
        id: zz,
        faIcon: Ut.I[zz],
        title: Ut.L[zz],
        redDot: !1
      })));
      return (0, Kz.jsxs)("div", {
        className: "Menu CharCustomisation",
        children: [(0, Kz.jsx)("div", {
          className: "MenuSideBar",
          children: (0, Kz.jsx)(uz, {
            items: Oz,
            selectedItemId: Wz,
            onClick: zz => {
              Xz(zz)
            }
          })
        }), (0, Kz.jsx)("div", {
          className: "MenuBody",
          children: (0, Kz.jsx)(Fz.Suspense, {
            fallback: (0, Kz.jsx)("div", {
              className: "CharacterCustomisationLoading",
              children: (0, Kz.jsx)(xz.d, {})
            }),
            children: (0, Kz.jsx)(gF, {
              selectedTab: Wz
            })
          })
        })]
      })
    }
    var BF = sz(1435),
      PF = sz(8843),
      rF = sz(4175),
      YF = sz(3080),
      xF = sz(3137),
      mF = sz(8874),
      JF = sz(8279),
      IF = sz(8848),
      CF = sz(8863),
      eF = sz(1845),
      ZF = sz(1831),
      GF = sz(4539),
      TF = sz(1244),
      cF = sz(1213),
      jF = sz(1608),
      AF = sz(8345);

    function yF(zz) {
      return zz ? Object.keys(zz).sort(((tz, sz) => {
        var Fz, Wz, Xz, Oz;
        const oz = (null !== (Fz = null === (Wz = zz[sz]) || void 0 === Wz ? void 0 : Wz.sortPriority) && void 0 !== Fz ? Fz : 0) - (null !== (Xz = null === (Oz = zz[tz]) || void 0 === Oz ? void 0 : Oz.sortPriority) && void 0 !== Xz ? Xz : 0);
        return 0 !== oz ? oz : tz.localeCompare(sz)
      })) : []
    }
    const MF = [{
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

    function dF(zz) {
      for (const {
          threshold: tz,
          suffix: sz
        }
        of MF)
        if (zz >= tz) {
          const Fz = zz / tz;
          return Fz >= 100 ? `${Math.floor(Fz)}${sz}` : Fz >= 10 ? `${Fz.toFixed(1).replace(/\.0$/,"")}${sz}` : `${Fz.toFixed(2).replace(/\.?0+$/,"")}${sz}`
        } return String(zz)
    }
    var hF = sz(4636);
    const QF = {
        normal: "0.8em",
        big: "1em"
      },
      kF = (0, Fz.memo)((function(zz) {
        let {
          item: tz,
          amount: sz = 0,
          size: Fz = "normal",
          tier: Wz = null
        } = zz;
        return (0, Kz.jsx)("div", {
          className: Xz()("SmpSlot", `SmpSlot-${Fz}`),
          children: tz && (0, Kz.jsx)(eF.c, {
            itemName: tz,
            amount: sz > 1 ? sz : 0,
            amountFontSize: QF[Fz],
            enchantmentTier: Wz
          })
        })
      }));

    function iF(zz) {
      let {
        amount: tz,
        exact: sz = !1,
        className: Fz
      } = zz;
      return (0, Kz.jsxs)("span", {
        className: Xz()("SmpGold", Fz),
        children: [(0, Kz.jsx)("span", {
          className: "SmpCoin",
          children: (0, Kz.jsx)(eF.c, {
            itemName: "Gold Coin",
            amount: 0
          })
        }), sz ? tz.toLocaleString("en-US") : dF(tz)]
      })
    }

    function LF(zz) {
      let {
        count: tz = 5,
        grid: sz = !1
      } = zz;
      return (0, Kz.jsx)("div", {
        className: sz ? "SmpCardGrid" : "SmpList",
        "aria-hidden": "true",
        children: Array.from({
          length: tz
        }, ((zz, tz) => (0, Kz.jsxs)("div", {
          className: Xz()(sz ? "SmpListingCard" : "SmpRow", "SmpSkeleton"),
          children: [(0, Kz.jsx)("div", {
            className: Xz()("SmpSlot", sz ? "SmpSlot-big" : "SmpSlot-normal")
          }), (0, Kz.jsxs)("div", {
            className: "SmpRowText",
            children: [(0, Kz.jsx)("b", {}), (0, Kz.jsx)("small", {})]
          }), (0, Kz.jsx)("div", {
            className: "SmpSkeletonButton"
          })]
        }, tz)))
      })
    }

    function lF(zz) {
      let {
        title: tz,
        children: sz
      } = zz;
      return (0, Kz.jsxs)("div", {
        className: "SmpEmpty",
        children: [(0, Kz.jsx)("b", {
          children: tz
        }), sz && (0, Kz.jsx)("small", {
          children: sz
        })]
      })
    }

    function nF(zz) {
      let {
        entry: tz
      } = zz;
      return (0, Kz.jsx)(lF, {
        title: (0, Kz.jsx)(ZF.c, {
          text: tz.item.customTitle
        }),
        children: (0, Kz.jsx)(ZF.c, {
          text: tz.item.description
        })
      })
    }

    function aF(zz) {
      return (0, Kz.jsx)(hF.b, {
        ...zz,
        className: Xz()("SmpChoice", zz.className),
        reselectable: !0
      })
    }

    function qF() {
      return (0, Kz.jsx)("span", {
        className: "SmpLoader",
        children: (0, Kz.jsx)(xz.d, {})
      })
    }

    function SF(zz) {
      let {
        value: tz,
        onChange: sz,
        min: Wz = 1,
        max: Xz,
        step: Oz = 1,
        label: oz
      } = zz;
      const vz = (0, Fz.useRef)(null),
        Uz = (0, Fz.useRef)(tz);
      Uz.current = tz;
      const [uz, Nz] = (0, Fz.useState)(null), bz = zz => Math.max(Wz, Math.min(Xz, Math.floor(zz))), wz = zz => {
        const tz = Uz.current,
          Fz = "function" === typeof Oz ? Oz(tz, zz) : Oz,
          Wz = bz(tz + Fz * zz);
        Uz.current = Wz, sz(Wz)
      };
      (0, Fz.useEffect)((() => {
        if (null === uz) return;
        let zz;
        const tz = () => {
            Nz(null)
          },
          sz = setTimeout((() => {
            zz = setInterval((() => {
              wz(uz);
              const zz = Uz.current;
              (uz > 0 ? zz >= Xz : zz <= Wz) && tz()
            }), 70)
          }), 380);
        return window.addEventListener("pointerup", tz), window.addEventListener("pointercancel", tz), window.addEventListener("blur", tz), () => {
          clearTimeout(sz), clearInterval(zz), window.removeEventListener("pointerup", tz), window.removeEventListener("pointercancel", tz), window.removeEventListener("blur", tz)
        }
      }), [uz]), (0, Fz.useEffect)((() => {
        const zz = vz.current;
        zz && document.activeElement !== zz && zz.value !== String(tz) && (zz.value = String(tz))
      }), [tz]), (0, Fz.useEffect)((() => {
        const zz = vz.current;
        if (!zz) return;
        const tz = () => {
          zz.value = String(Uz.current)
        };
        return zz.addEventListener("blur", tz), () => {
          zz.removeEventListener("blur", tz)
        }
      }), []);
      const Dz = zz => (0, Kz.jsx)("button", {
        type: "button",
        className: "SmpStepButton",
        "aria-label": `${zz>0?"More":"Less"} ${oz}`,
        disabled: zz > 0 ? tz >= Xz : tz <= Wz,
        onPointerDown: tz => {
          0 === tz.button && (wz(zz), Nz(zz))
        },
        onKeyDown: tz => {
          "Enter" !== tz.key && " " !== tz.key || wz(zz)
        },
        onContextMenu: zz => {
          zz.preventDefault()
        },
        children: zz > 0 ? "+" : "\u2212"
      });
      return (0, Kz.jsxs)("div", {
        className: "SmpStepper",
        children: [Dz(-1), (0, Kz.jsx)(Yz.d, {
          className: "SmpStepperInput",
          domRef: vz,
          defaultValue: String(tz),
          ariaLabel: oz,
          type: "text",
          blurOnEnter: !0,
          onValueChange: zz => {
            const tz = zz.replace(/[^\d]/g, "");
            vz.current && tz !== zz && (vz.current.value = tz), "" !== tz && sz(bz(Number(tz)))
          }
        }), Dz(1)]
      })
    }

    function VF(zz) {
      return Math.max(1, 10 ** Math.max(0, Math.floor(Math.log10(Math.max(1, zz))) - 1))
    }
    var RF = sz(8866),
      pF = sz(1223);
    const fF = ["building", "colours", "nature", "decoration", "utility", "tools", "combat", "food", "mobs", "materials", "worldTools"];
    pF.y, hz.Cc.length;
    new Map;
    var EF = sz(2965);

    function zW(zz, tz) {
      var sz;
      return tz && (null === (sz = zz[tz]) || void 0 === sz ? void 0 : sz.smp) || null
    }

    function tW(zz, tz) {
      const sz = [];
      for (const Wz of yF(zz)) {
        var Fz;
        const Xz = zz[Wz];
        (null === (Fz = Xz.smp) || void 0 === Fz ? void 0 : Fz.kind) === tz && sz.push({
          key: Wz,
          item: Xz,
          meta: Xz.smp
        })
      }
      return sz
    }

    function sW(zz, tz) {
      var sz;
      return null !== (sz = tW(zz, tz)[0]) && void 0 !== sz ? sz : null
    }
    const FW = "50% 0% 50% 0%",
      WW = [{
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

    function XW(zz) {
      const tz = zz - (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now());
      for (const {
          divisor: sz,
          suffix: Fz
        }
        of WW)
        if (tz >= sz) return `${Math.floor(tz/sz)}${Fz}`;
      return "<1s"
    }

    function OW(zz) {
      const tz = zz.map(JF.e),
        sz = [];
      return tz.forEach(((zz, Fz) => {
        const Wz = function(zz) {
            const tz = zz.match(/\d+/);
            return tz ? Number(tz[0]) : 0
          }(zz),
          Xz = Fz === tz.length - 1;
        (Xz || 1 === Wz || 10 === Wz || 100 === Wz) && sz.push({
          label: zz,
          quantity: Wz,
          isAll: Xz
        })
      })), sz
    }
    let oW = null;

    function vW(zz, tz) {
      const sz = tz.trim().toLowerCase();
      if (!sz) return [];
      const Fz = zz => {
          if (zz === sz) return 0;
          if (zz.startsWith(sz)) return 1;
          const tz = zz.indexOf(sz);
          return -1 === tz ? -1 : 2 + tz
        },
        Wz = [];
      for (const oz of zz) {
        const zz = [Fz(oz.lowerLabel), Fz(oz.lowerName)].filter((zz => -1 !== zz));
        zz.length && Wz.push({
          item: oz,
          rank: Math.min(...zz)
        })
      }
      if (Wz.length > 0) return Wz.sort(((zz, tz) => zz.rank - tz.rank)).map((zz => zz.item));
      const Xz = [...sz],
        Oz = zz => {
          let tz = 0;
          for (const sz of Xz) {
            if (tz = zz.indexOf(sz, tz), -1 === tz) return !1;
            tz++
          }
          return !0
        };
      return zz.filter((zz => Oz(zz.lowerLabel) || Oz(zz.lowerName)))
    }

    function UW(zz, tz) {
      var sz;
      return null !== (sz = null === zz || void 0 === zz ? void 0 : zz[tz]) && void 0 !== sz ? sz : tz
    }

    function KW(zz, tz) {
      const sz = zz.userInput;
      return void 0 !== tz && "dropdown" === (null === sz || void 0 === sz ? void 0 : sz.type) && sz.dropdownOptions.map(JF.e).includes(tz) ? tz : function(zz) {
        const tz = zz.userInput;
        if ("dropdown" !== (null === tz || void 0 === tz ? void 0 : tz.type) || 0 === tz.dropdownOptions.length) return null;
        const sz = tz.dropdownOptions.map(JF.e);
        return tz.initialValue && sz.includes(tz.initialValue) ? tz.initialValue : sz[sz.length - 1]
      }(zz)
    }

    function uW(zz) {
      return void 0 === zz ? "" : JSON.stringify(zz)
    }
    const NW = (0, Fz.createContext)(null);

    function bW() {
      return (0, Fz.useContext)(NW)
    }
    var wW = sz(2495);
    const DW = (0, Fz.memo)((function(zz) {
        let {
          name: tz,
          label: sz,
          onPick: Fz
        } = zz;
        return (0, Kz.jsxs)("button", {
          type: "button",
          className: "SmpCatalogueTile",
          title: sz,
          onClick: () => {
            Fz(tz)
          },
          children: [(0, Kz.jsx)(kF, {
            item: tz,
            size: "big"
          }), (0, Kz.jsx)("span", {
            children: sz
          })]
        })
      })),
      gW = (0, Fz.memo)((function(zz) {
        let {
          items: tz,
          query: sz,
          onPick: Wz
        } = zz;
        const {
          t: Xz
        } = (0, Oz.B)(), [oz, vz] = (0, Fz.useState)(new Set), Uz = (0, Fz.useMemo)((() => function(zz) {
          const tz = new Map;
          for (const sz of zz) {
            let zz = tz.get(sz.category);
            zz || (zz = [], tz.set(sz.category, zz)), zz.push(sz)
          }
          return [...fF, "other"].filter((zz => tz.has(zz))).map((zz => ({
            category: zz,
            items: tz.get(zz)
          })))
        }(tz)), [tz]), uz = (0, Fz.useMemo)((() => vW(tz, sz).slice(0, 60)), [tz, sz]);
        return sz.trim() ? 0 === uz.length ? (0, Kz.jsx)(lF, {
          title: Xz("smpShop:noItemsFound", {
            query: sz.trim()
          }),
          children: Xz("smpShop:tryShorterName")
        }) : (0, Kz.jsx)(wW.c, {
          lazyLoadedClassName: "SmpCatalogueGrid",
          observerRoot: "SmpBody",
          rootMargin: FW,
          observerUpdateDeps: [sz],
          children: uz.map((zz => (0, Kz.jsx)(DW, {
            name: zz.name,
            label: zz.label,
            onPick: Wz
          }, zz.name)))
        }) : (0, Kz.jsx)(Kz.Fragment, {
          children: Uz.map((zz => {
            let {
              category: tz,
              items: sz
            } = zz;
            const Fz = oz.has(tz) || sz.length <= 48,
              Oz = Fz ? sz : sz.slice(0, 48);
            return (0, Kz.jsxs)("section", {
              className: "SmpCatalogueSection",
              children: [(0, Kz.jsxs)("h4", {
                children: [Xz("other" === tz ? "smpShop:otherItems" : `creativeInventory:${tz}`), !Fz && (0, Kz.jsx)("button", {
                  type: "button",
                  className: "SmpLink",
                  onClick: () => {
                    vz(new Set([...oz, tz]))
                  },
                  children: Xz("smpShop:showAll", {
                    count: sz.length
                  })
                })]
              }), (0, Kz.jsx)(wW.c, {
                lazyLoadedClassName: "SmpCatalogueGrid",
                observerRoot: "SmpBody",
                rootMargin: FW,
                observerUpdateDeps: [Fz],
                children: Oz.map((zz => (0, Kz.jsx)(DW, {
                  name: zz.name,
                  label: zz.label,
                  onPick: Wz
                }, zz.name)))
              })]
            }, tz)
          }))
        })
      }));

    function HW(zz, tz) {
      const {
        searched: sz,
        shown: Wz,
        searchFor: Xz,
        loading: Oz
      } = function(zz, tz) {
        var sz;
        const Wz = bW(),
          [Xz, Oz] = (0, Fz.useState)(void 0),
          oz = (0, Fz.useRef)(void 0),
          vz = (0, Fz.useRef)(0),
          Uz = (0, Fz.useRef)(void 0),
          Kz = null !== (sz = null === zz || void 0 === zz ? void 0 : zz.meta.item) && void 0 !== sz ? sz : null,
          uz = !!zz && Wz.isPending(zz.key);
        (0, Fz.useEffect)((() => {
          if (!zz || uz || !tz || void 0 === Xz || Xz === Kz) return;
          const sz = Xz === oz.current && Wz.gaveUpAt(zz.key) > vz.current && Uz.current !== Xz;
          (Xz !== oz.current || sz) && Wz.act(zz.key, null !== Xz && void 0 !== Xz ? Xz : "*", sz) && (sz && (Uz.current = Xz), oz.current = Xz, vz.current = Date.now())
        }), [zz, uz, tz, Xz, Kz, Wz]);
        const Nz = (0, Fz.useCallback)((zz => {
            oz.current = void 0, Uz.current = void 0, Oz(zz)
          }), []),
          bz = void 0 !== Xz && Xz !== Kz && (uz || oz.current !== Xz);
        return {
          searched: Kz,
          shown: bz ? Xz : Kz,
          searchFor: Nz,
          loading: bz || uz || null !== Kz && !tz
        }
      }(zz, tz), oz = (0, Fz.useMemo)((() => function() {
        var zz;
        let tz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          sz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          Fz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const Wz = `${(0,EF.h)()}\x1f${tz.join("\x1e")}\x1f${sz.join("\x1e")}\x1f${JSON.stringify(Fz)}`;
        if ((null === (zz = oW) || void 0 === zz ? void 0 : zz.key) === Wz) return oW.items;
        const Xz = new Set(sz),
          Oz = new Set,
          oz = [],
          vz = (zz, tz) => {
            var sz;
            if (!zz || Oz.has(zz) || Xz.has(zz)) return;
            Oz.add(zz);
            const Wz = null !== (sz = Fz[zz]) && void 0 !== sz ? sz : zz;
            oz.push({
              name: zz,
              label: Wz,
              lowerLabel: Wz.toLowerCase(),
              lowerName: zz.toLowerCase(),
              category: tz
            })
          };
        for (const Kz of (0, RF.creativeItemIds)()) {
          var Uz;
          (0, RF.itemIsDisabled)(Kz, !0, !0, !1) || (0, RF.showOnlyInCreativeSearch)(Kz) || vz((0, EF.d)(Kz), null !== (Uz = (0, RF.creativeCategoryOf)(Kz)) && void 0 !== Uz ? Uz : "other")
        }
        for (const Kz of tz) vz(Kz, "other");
        return oW = {
          key: Wz,
          items: oz
        }, oz
      }(null === zz || void 0 === zz ? void 0 : zz.meta.extra, null === zz || void 0 === zz ? void 0 : zz.meta.excluded, null === zz || void 0 === zz ? void 0 : zz.meta.names)), [null === zz || void 0 === zz ? void 0 : zz.meta.extra, null === zz || void 0 === zz ? void 0 : zz.meta.excluded, null === zz || void 0 === zz ? void 0 : zz.meta.names]), [vz, Uz] = (0, Fz.useState)(""), [Kz, uz] = (0, Fz.useState)(0), [Nz, bz] = (0, Fz.useState)("recent"), wz = (0, Fz.useCallback)((zz => {
        Uz(""), uz((zz => zz + 1)), Xz(zz)
      }), [Xz]), Dz = "browse" === Nz || "" !== vz.trim();
      return {
        searched: sz,
        shown: Wz,
        searchFor: Xz,
        loading: Oz,
        catalogue: oz,
        names: null === zz || void 0 === zz ? void 0 : zz.meta.names,
        query: vz,
        setQuery: Uz,
        searchBoxKey: Kz,
        pickItem: wz,
        setView: bz,
        browsing: Dz
      }
    }

    function BW(zz) {
      let {
        browser: tz,
        children: sz
      } = zz;
      const {
        t: Fz
      } = (0, Oz.B)(), Wz = bW();
      return (0, Kz.jsxs)("div", {
        className: "SmpTopBar",
        children: [(0, Kz.jsx)("div", {
          className: "SmpSearch",
          children: (0, Kz.jsx)(Yz.d, {
            className: "SmpSearchInput",
            placeholderText: Fz("smpShop:searchPlaceholder"),
            defaultValue: tz.query,
            onValueChange: zz => {
              tz.setQuery(zz), tz.searched && zz.trim() && tz.searchFor(null)
            },
            blurOnEnter: !0,
            onEnter: () => {
              const zz = vW(tz.catalogue, tz.query)[0];
              zz ? tz.pickItem(zz.name) : tz.query.trim() && Wz.notify(Fz("smpShop:noItemsFound", {
                query: tz.query.trim()
              }))
            }
          }, tz.searchBoxKey)
        }), sz]
      })
    }

    function PW(zz) {
      let {
        browser: tz,
        recentLabel: sz,
        children: Fz
      } = zz;
      const {
        t: Wz
      } = (0, Oz.B)();
      return (0, Kz.jsxs)("div", {
        className: "SmpViewBar",
        children: [(0, Kz.jsx)(aF, {
          options: [{
            value: "recent",
            label: sz
          }, {
            value: "browse",
            label: Wz("smpShop:browseItems")
          }],
          value: tz.browsing ? "browse" : "recent",
          onChange: tz.setView,
          ariaLabel: Wz("smpShop:show")
        }), !tz.browsing && Fz]
      })
    }

    function rW(zz) {
      let {
        item: tz,
        names: sz,
        summary: Fz,
        onBack: Wz,
        children: Xz
      } = zz;
      const {
        t: oz
      } = (0, Oz.B)();
      return (0, Kz.jsxs)("div", {
        className: "SmpItemHeader",
        children: [(0, Kz.jsx)(gz.e, {
          className: "SmpBackButton",
          onClick: Wz,
          children: oz("general:back")
        }), (0, Kz.jsx)(kF, {
          item: tz,
          size: "big"
        }), (0, Kz.jsxs)("div", {
          className: "SmpItemHeaderText",
          children: [(0, Kz.jsx)("b", {
            children: UW(sz, tz)
          }), Fz && (0, Kz.jsx)("small", {
            children: Fz
          })]
        }), Xz]
      })
    }

    function YW(zz) {
      let {
        browser: tz,
        className: sz,
        action: Fz,
        above: Wz,
        list: Oz,
        summary: oz,
        recentLabel: vz,
        listControls: Uz,
        onBack: uz
      } = zz;
      return (0, Kz.jsxs)("div", {
        className: Xz()("SmpScreen", sz),
        children: [(0, Kz.jsx)(BW, {
          browser: tz,
          children: Fz
        }), tz.shown && (0, Kz.jsx)(rW, {
          item: tz.shown,
          names: tz.names,
          summary: !tz.loading && oz,
          onBack: () => {
            null === uz || void 0 === uz || uz(), tz.searchFor(null)
          },
          children: Uz
        }), Wz, tz.shown ? Oz : (0, Kz.jsxs)(Kz.Fragment, {
          children: [(0, Kz.jsx)(PW, {
            browser: tz,
            recentLabel: vz,
            children: Uz
          }), tz.browsing ? (0, Kz.jsx)(gW, {
            items: tz.catalogue,
            query: tz.query,
            onPick: tz.pickItem
          }) : Oz]
        })]
      })
    }

    function xW(zz, tz) {
      const sz = zz.map((zz => {
        let {
          meta: tz
        } = zz;
        return tz.pricePerItem
      }));
      return "min" === tz ? Math.min(...sz) : Math.max(...sz)
    }
    var mW = sz(6151);
    const JW = (0, Fz.memo)((function(zz) {
      var tz;
      const {
        t: sz
      } = (0, Oz.B)(), Fz = null === zz.seller, Wz = zz.quantity * zz.pricePerItem;
      return (0, Kz.jsxs)("div", {
        className: zz.grid ? "SmpListingCard" : "SmpRow SmpListingRow",
        children: [(0, Kz.jsx)(kF, {
          item: zz.item,
          amount: zz.quantity,
          size: zz.grid ? "big" : "normal",
          tier: zz.tier
        }), (0, Kz.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, Kz.jsx)("b", {
            children: (0, Kz.jsx)(ZF.c, {
              text: null !== (tz = zz.title) && void 0 !== tz ? tz : `${zz.quantity}x ${zz.item}`
            })
          }), (0, Kz.jsxs)("small", {
            className: "SmpListingFacts",
            children: [(0, Kz.jsx)("span", {
              children: Fz ? sz("smpShop:you") : (0, Kz.jsx)(ZF.c, {
                text: [{
                  entityName: zz.seller
                }]
              })
            }), (0, Kz.jsx)("span", {
              children: sz("smpShop:timeLeft", {
                time: XW(zz.expiresAt)
              })
            })]
          })]
        }), (0, Kz.jsxs)("div", {
          className: "SmpRowPrice",
          children: [(0, Kz.jsx)(iF, {
            amount: zz.pricePerItem
          }), (0, Kz.jsx)("small", {
            children: sz("smpShop:each")
          })]
        }), (0, Kz.jsx)(gz.h, {
          className: "SmpBuyButton",
          disabled: Fz || !zz.canAfford && !zz.busy,
          loading: zz.busy,
          onClick: () => {
            zz.onBuy(zz.itemKey)
          },
          children: Fz ? sz("smpShop:yours") : (0, Kz.jsx)(iF, {
            amount: Wz
          })
        })]
      })
    }));

    function IW(zz) {
      let {
        view: tz,
        onChange: sz
      } = zz;
      const {
        t: Fz
      } = (0, Oz.B)();
      return (0, Kz.jsx)(hF.b, {
        className: "SmpChoice SmpViewToggle",
        ariaLabel: Fz("smpShop:layout"),
        options: [{
          value: "list",
          label: (0, Kz.jsx)(oz.c, {
            name: "list"
          }),
          ariaLabel: Fz("smpShop:listView")
        }, {
          value: "grid",
          label: (0, Kz.jsx)(oz.c, {
            name: "grid-2"
          }),
          ariaLabel: Fz("smpShop:gridView")
        }],
        value: tz,
        onChange: sz
      })
    }

    function CW(zz) {
      let {
        entries: tz,
        view: sz
      } = zz;
      const {
        t: Fz
      } = (0, Oz.B)(), Wz = bW(), Xz = "grid" === sz;
      return (0, Kz.jsxs)(Kz.Fragment, {
        children: [!Xz && (0, Kz.jsxs)("div", {
          className: "SmpColumns",
          "aria-hidden": "true",
          children: [(0, Kz.jsx)("span", {}), (0, Kz.jsx)("span", {
            children: Fz("smpShop:columnItem")
          }), (0, Kz.jsx)("span", {
            children: Fz("smpShop:columnPriceEach")
          }), (0, Kz.jsx)("span", {
            children: Fz("smpShop:columnTotal")
          })]
        }), (0, Kz.jsx)(wW.c, {
          lazyLoadedClassName: Xz ? "SmpCardGrid" : "SmpList",
          observerRoot: "SmpBody",
          rootMargin: FW,
          observerUpdateDeps: [tz.length],
          children: tz.map((zz => {
            var tz, sz;
            let {
              key: Fz,
              item: Oz,
              meta: oz
            } = zz;
            const vz = oz.quantity * oz.pricePerItem;
            return (0, Kz.jsx)(JW, {
              itemKey: Fz,
              item: oz.item,
              title: Oz.customTitle,
              quantity: oz.quantity,
              pricePerItem: oz.pricePerItem,
              seller: oz.seller,
              expiresAt: oz.expiresAt,
              tier: null !== (tz = null === (sz = Oz.enchant) || void 0 === sz ? void 0 : sz.tier) && void 0 !== tz ? tz : null,
              busy: Wz.isPending(Fz) || null !== oz.seller && !1 === Oz.canBuy,
              canAfford: Wz.canAfford(Oz, vz),
              grid: Xz,
              onBuy: Wz.act
            }, Fz)
          }))
        }, sz)]
      })
    }
    const eW = [1, 10, 100],
      ZW = [1, 10, 100, 999];

    function GW(zz) {
      var tz, sz, Wz, vz, Uz, uz, Nz, bz, wz, Dz;
      const {
        t: Hz
      } = (0, Oz.B)(), Bz = bW(), {
        creator: Pz,
        mode: rz
      } = zz, [xz, mz] = (0, Fz.useState)(null !== (tz = null === Pz || void 0 === Pz ? void 0 : Pz.meta.item) && void 0 !== tz ? tz : null), [Jz, Iz] = (0, Fz.useState)(1), [Cz, ez] = (0, Fz.useState)(0), [Zz, Gz] = (0, Fz.useState)(""), [Tz, cz] = (0, Fz.useState)(0), jz = (0, Fz.useRef)(xz), Az = (0, Fz.useRef)(!1), [yz, Mz] = (0, Fz.useState)(!1), dz = null !== (sz = null === Pz || void 0 === Pz ? void 0 : Pz.meta.item) && void 0 !== sz ? sz : null, hz = null !== (Wz = null === Pz || void 0 === Pz ? void 0 : Pz.meta.po) && void 0 !== Wz ? Wz : 0;
      (0, Fz.useEffect)((() => {
        zz.searching || null === dz || dz === jz.current || (jz.current = dz, Az.current = !1, mz(dz), ez(0), Iz("list" === rz ? Math.max(1, hz) : 1))
      }), [dz, zz.searching]);
      const Qz = !!Pz && !!xz && Pz.meta.item === xz,
        kz = Qz ? Pz.meta.po : null !== (vz = null === (Uz = zz.inventory) || void 0 === Uz || null === (uz = Uz.find((zz => zz.item === xz))) || void 0 === uz ? void 0 : uz.quantity) && void 0 !== vz ? vz : 0,
        iz = "list" === rz ? Math.max(1, kz) : 45954,
        Lz = null !== (Nz = zz.prices[0]) && void 0 !== Nz ? Nz : null,
        lz = zz.prices.length ? Math.round(zz.prices.reduce(((zz, tz) => zz + tz), 0) / zz.prices.length) : null,
        nz = null === (bz = zz.inventory) || void 0 === bz || null === (wz = bz.find((zz => zz.item === xz))) || void 0 === wz ? void 0 : wz.sellPrice;
      (0, Fz.useEffect)((() => {
        var zz;
        Qz && (Iz((zz => "list" === rz ? Math.min(Math.max(1, zz), Math.max(1, kz)) : zz)), Az.current || ez(null !== (zz = null !== Lz && void 0 !== Lz ? Lz : lz) && void 0 !== zz ? zz : Math.max(1, null !== nz && void 0 !== nz ? nz : 1)))
      }), [Qz, kz, xz, Lz, lz]);
      const az = zz => {
          Az.current = !0, ez(zz)
        },
        qz = tz => {
          var sz, Fz, Wz;
          jz.current = tz, Az.current = !1, Mz(!1), Gz(""), cz((zz => zz + 1)), mz(tz), ez(0), Iz("list" === rz && null !== (sz = null === (Fz = zz.inventory) || void 0 === Fz || null === (Wz = Fz.find((zz => zz.item === tz))) || void 0 === Wz ? void 0 : Wz.quantity) && void 0 !== sz ? sz : 1), (null === Pz || void 0 === Pz ? void 0 : Pz.meta.item) !== tz && zz.onPickItem(tz)
        },
        Sz = Jz * Cz,
        Vz = "list" === rz && null !== Pz && void 0 !== Pz && Pz.meta.fee ? function(zz, tz) {
          const sz = Math.max(0, tz - zz.taxFreeAllowance);
          return Math.ceil(Math.round(sz * zz.rate * 1e6) / 1e6)
        }(Pz.meta.fee, Sz) : 0,
        Rz = !!Pz && Bz.isPending(Pz.key),
        pz = Qz && !zz.searching && Jz >= 1 && Cz >= 1 && ("order" === rz || kz >= Jz) && !Rz,
        fz = !!xz && !Qz && !zz.searching && Jz >= 1 && Cz >= 1,
        Ez = () => {
          pz ? Bz.act(Pz.key, `${Jz}|${Cz}`) : fz && (zz.onPickItem(xz), Mz(!0))
        };
      (0, Fz.useEffect)((() => {
        yz && Qz && !zz.searching && (Mz(!1), Ez())
      }), [yz, Qz, zz.searching]);
      const zt = !!xz && !Qz && (zz.searching || yz),
        tt = xz ? UW(zz.names, xz) : "",
        st = (0, Fz.useMemo)((() => vW(zz.catalogue, Zz).slice(0, 8)), [zz.catalogue, Zz]),
        Ft = ("list" === rz ? eW.filter((zz => zz < kz)) : ZW).map((zz => ({
          value: zz,
          label: String(zz)
        })));
      "list" === rz && kz > 0 && Ft.push({
        value: kz,
        label: Hz("smpShop:all", {
          count: kz
        })
      });
      const Wt = [];
      return null !== Lz && (Lz > 1 && Wt.push({
        value: Lz - 1,
        label: Hz("smpShop:undercut", {
          price: dF(Lz - 1)
        })
      }), Wt.push({
        value: Lz,
        label: Hz("smpShop:lowest", {
          price: dF(Lz)
        })
      })), null !== lz && lz !== Lz && Wt.push({
        value: lz,
        label: Hz("smpShop:average", {
          price: dF(lz)
        })
      }), (0, Kz.jsxs)("div", {
        className: "SmpTradeForm",
        children: [(0, Kz.jsxs)("div", {
          className: "SmpTradeFormHead",
          children: [(0, Kz.jsx)("b", {
            children: Hz("list" === rz ? "smpShop:sellOnMarket" : "smpShop:createOrder")
          }), (0, Kz.jsx)("button", {
            type: "button",
            className: "SmpIconButton",
            "aria-label": Hz("smpShop:close"),
            onClick: zz.onClose,
            children: (0, Kz.jsx)(oz.c, {
              name: "xmark"
            })
          })]
        }), "list" === rz && (0, Kz.jsx)("div", {
          className: "SmpPicker",
          role: "listbox",
          children: null !== (Dz = zz.inventory) && void 0 !== Dz && Dz.length ? zz.inventory.map((zz => {
            let {
              item: tz,
              quantity: sz
            } = zz;
            return (0, Kz.jsx)("button", {
              type: "button",
              title: tz,
              className: Xz()("SmpPickerSlot", {
                SmpPickerSlotOn: tz === xz
              }),
              onClick: () => {
                qz(tz)
              },
              children: (0, Kz.jsx)(kF, {
                item: tz,
                amount: sz
              })
            }, tz)
          })) : (0, Kz.jsx)("span", {
            className: "SmpMuted",
            children: Hz("smpShop:nothingToList")
          })
        }), ("list" === rz || !xz) && (0, Kz.jsxs)("div", {
          className: "SmpItemSearch",
          children: [(0, Kz.jsx)(Yz.d, {
            className: "SmpSearchInput",
            placeholderText: Hz("list" === rz ? "smpShop:listSearchPlaceholder" : "smpShop:orderSearchPlaceholder"),
            defaultValue: Zz,
            onValueChange: Gz,
            blurOnEnter: !0,
            onEnter: () => {
              st[0] && qz(st[0].name)
            }
          }, Tz), st.length > 0 && (0, Kz.jsx)("div", {
            className: "SmpPicker",
            children: st.map((zz => {
              let {
                name: tz
              } = zz;
              return (0, Kz.jsx)("button", {
                type: "button",
                title: tz,
                className: Xz()("SmpPickerSlot", {
                  SmpPickerSlotOn: tz === xz
                }),
                onClick: () => {
                  qz(tz)
                },
                children: (0, Kz.jsx)(kF, {
                  item: tz
                })
              }, tz)
            }))
          })]
        }), xz && (0, Kz.jsxs)(Kz.Fragment, {
          children: [(0, Kz.jsxs)("div", {
            className: "SmpPickedName",
            children: [tt, zt && (0, Kz.jsx)(qF, {})]
          }), (0, Kz.jsxs)("div", {
            className: "SmpFormGrid",
            children: [(0, Kz.jsxs)("div", {
              className: "SmpField",
              children: [(0, Kz.jsxs)("span", {
                children: [Hz("smpShop:quantity"), "list" === rz && Qz && (0, Kz.jsx)("small", {
                  children: Hz("smpShop:youHave", {
                    count: kz
                  })
                })]
              }), (0, Kz.jsx)(SF, {
                value: Jz,
                onChange: Iz,
                max: iz,
                label: Hz("smpShop:quantity")
              }), (0, Kz.jsx)(aF, {
                options: Ft,
                value: Jz,
                onChange: Iz,
                ariaLabel: Hz("smpShop:quantity")
              })]
            }), (0, Kz.jsxs)("div", {
              className: "SmpField",
              children: [(0, Kz.jsx)("span", {
                children: Hz("smpShop:pricePerItem")
              }), (0, Kz.jsx)(SF, {
                value: Math.max(1, Cz),
                onChange: az,
                max: 9999999,
                step: VF,
                label: Hz("smpShop:pricePerItem")
              }), (0, Kz.jsx)(aF, {
                options: Wt,
                value: Cz,
                onChange: az,
                ariaLabel: Hz("smpShop:pricePerItem")
              })]
            })]
          }), "list" === rz && (0, Kz.jsxs)("div", {
            className: "SmpTradeSummary",
            children: [(0, Kz.jsxs)("span", {
              children: [Hz("smpShop:youGet"), " ", (0, Kz.jsx)(iF, {
                amount: Math.max(0, Sz - Vz),
                exact: !0
              })]
            }), (0, Kz.jsx)("small", {
              children: Vz > 0 ? Hz("smpShop:listingFee", {
                fee: Vz.toLocaleString("en-US")
              }) : Hz("smpShop:listingRules")
            })]
          }), (0, Kz.jsx)(gz.t, {
            className: "SmpSubmit",
            disabled: !pz && !fz && !Rz,
            loading: Rz || zt || Qz && zz.searching,
            onClick: Ez,
            children: "list" === rz ? Hz("smpShop:listButton", {
              count: Jz,
              item: tt
            }) : (0, Kz.jsxs)(Kz.Fragment, {
              children: [Hz("smpShop:orderButton", {
                count: Jz,
                item: tt
              }), " ", Cz >= 1 && (0, Kz.jsx)(iF, {
                amount: Sz
              })]
            })
          })]
        })]
      })
    }

    function TW() {
      var zz;
      const {
        t: tz
      } = (0, Oz.B)(), sz = bW(), Wz = null === (zz = sz.shopInfo[sz.categoryKey]) || void 0 === zz ? void 0 : zz.items, Xz = sW(Wz, "search"), oz = sW(Wz, "creator"), vz = tW(Wz, "enchantedCreator"), Uz = tW(Wz, "listing"), uz = sW(Wz, "empty"), Nz = HW(Xz, Uz.length > 0 || null !== uz), {
        searched: bz,
        shown: wz,
        loading: Dz
      } = Nz, [Hz, Bz] = (0, Fz.useState)(!1), [Pz, rz] = function() {
        const [zz, tz] = (0, mW.c)("smpMarketView", "list");
        return ["grid" === zz ? "grid" : "list", tz]
      }(), Yz = "grid" === Pz, xz = (0, Fz.useMemo)((() => Uz.filter((zz => {
        let {
          meta: tz
        } = zz;
        return null !== tz.seller && tz.item === bz
      })).map((zz => {
        let {
          meta: tz
        } = zz;
        return tz.pricePerItem
      })).sort(((zz, tz) => zz - tz))), [Uz, bz]), mz = (0, Fz.useMemo)((() => {
        const zz = new Set(Nz.catalogue.map((zz => {
          let {
            name: tz
          } = zz;
          return tz
        })));
        return function(zz) {
          for (const tz in zz)
            if ("sell" === zz[tz].smp) return tW(zz[tz].items, "sell").filter((zz => {
              let {
                item: tz
              } = zz;
              return !tz.enchant
            })).map((zz => {
              let {
                meta: tz
              } = zz;
              return {
                item: tz.item,
                quantity: tz.quantity,
                sellPrice: tz.pricePerItem
              }
            }));
          return []
        }(sz.shopInfo).filter((tz => {
          let {
            item: sz
          } = tz;
          return zz.has(sz)
        }))
      }), [sz.shopInfo, Nz.catalogue]);
      return (0, Kz.jsx)(YW, {
        browser: Nz,
        className: "SmpMarketTab",
        recentLabel: tz("smpShop:recentlyListed"),
        action: (0, Kz.jsx)(gz.t, {
          className: "SmpSellButton",
          onClick: () => {
            Bz((zz => !zz))
          },
          children: tz("smpShop:sell")
        }),
        above: Hz && (0, Kz.jsxs)(Kz.Fragment, {
          children: [(0, Kz.jsx)(GW, {
            mode: "list",
            creator: oz,
            inventory: mz,
            catalogue: Nz.catalogue,
            names: Nz.names,
            searching: Dz,
            prices: xz,
            onPickItem: Nz.searchFor,
            onClose: () => {
              Bz(!1)
            }
          }), vz.length > 0 && (0, Kz.jsx)(cW, {
            entries: vz
          })]
        }),
        listControls: (0, Kz.jsx)(IW, {
          view: Pz,
          onChange: rz
        }),
        summary: wz && (Uz.length > 0 ? tz(1 === Uz.length ? "smpShop:listingSummaryOne" : "smpShop:listingSummary", {
          count: Uz.length,
          price: dF(xW(Uz, "min"))
        }) : tz("smpShop:noOneSelling", {
          item: UW(Nz.names, wz)
        })),
        list: Dz ? (0, Kz.jsx)(LF, {
          grid: Yz
        }) : Uz.length > 0 ? (0, Kz.jsx)(CW, {
          entries: Uz,
          view: Pz
        }) : uz ? (0, Kz.jsx)(nF, {
          entry: uz
        }) : (0, Kz.jsx)(LF, {
          count: 3,
          grid: Yz
        })
      })
    }

    function cW(zz) {
      let {
        entries: tz
      } = zz;
      const {
        t: sz
      } = (0, Oz.B)(), Wz = bW(), [Xz, oz] = (0, Fz.useState)({});
      return (0, Kz.jsx)("div", {
        className: "SmpList",
        children: tz.map((zz => {
          var tz, Fz, Oz;
          let {
            key: vz,
            item: Uz,
            meta: uz
          } = zz;
          const Nz = null !== (tz = Xz[vz]) && void 0 !== tz ? tz : 1;
          return (0, Kz.jsxs)("div", {
            className: "SmpRow",
            children: [(0, Kz.jsx)(kF, {
              item: uz.item,
              amount: uz.quantity,
              tier: null !== (Fz = null === (Oz = Uz.enchant) || void 0 === Oz ? void 0 : Oz.tier) && void 0 !== Fz ? Fz : null
            }), (0, Kz.jsxs)("div", {
              className: "SmpRowText",
              children: [(0, Kz.jsx)("b", {
                children: (0, Kz.jsx)(ZF.c, {
                  text: Uz.customTitle
                })
              }), (0, Kz.jsx)("small", {
                children: sz("smpShop:enchantedListing")
              })]
            }), (0, Kz.jsx)(SF, {
              value: Nz,
              onChange: zz => {
                oz({
                  ...Xz,
                  [vz]: zz
                })
              },
              max: 9999999,
              step: VF,
              label: sz("smpShop:pricePerItem")
            }), (0, Kz.jsxs)(gz.t, {
              loading: Wz.isPending(vz),
              onClick: () => {
                Wz.act(vz, String(Nz))
              },
              children: [sz("smpShop:list"), " ", (0, Kz.jsx)(iF, {
                amount: Nz
              })]
            })]
          }, vz)
        }))
      })
    }
    const jW = (0, Fz.memo)((function(zz) {
      let {
        itemKey: tz,
        item: sz,
        quantity: Fz,
        pricePerItem: Wz,
        tier: Oz,
        selected: oz,
        onSelect: vz
      } = zz;
      return (0, Kz.jsxs)("button", {
        type: "button",
        className: Xz()("SmpInventorySlot", {
          SmpInventorySlotOn: oz
        }),
        title: sz,
        onClick: () => {
          vz(tz)
        },
        children: [(0, Kz.jsx)(kF, {
          item: sz,
          amount: Fz,
          tier: Oz
        }), (0, Kz.jsx)(iF, {
          amount: Wz
        })]
      })
    }));

    function AW() {
      var zz;
      const {
        t: tz
      } = (0, Oz.B)(), sz = bW(), Wz = null === (zz = sz.shopInfo[sz.categoryKey]) || void 0 === zz ? void 0 : zz.items, oz = tW(Wz, "sell"), vz = sW(Wz, "empty"), [Uz, uz] = (0, Fz.useState)(null), [Nz, bz] = (0, Fz.useState)({}), wz = oz.find((zz => {
        let {
          key: tz
        } = zz;
        return tz === Uz
      }));
      return 0 === oz.length ? (0, Kz.jsx)("div", {
        className: "SmpScreen",
        children: (0, Kz.jsx)(lF, {
          title: vz ? (0, Kz.jsx)(ZF.c, {
            text: vz.item.customTitle
          }) : tz("smpShop:nothingToSell"),
          children: vz && (0, Kz.jsx)(ZF.c, {
            text: vz.item.description
          })
        })
      }) : (0, Kz.jsxs)("div", {
        className: "SmpScreen SmpInstantSellTab",
        children: [(0, Kz.jsx)("div", {
          className: "SmpInventoryGrid",
          children: oz.map((zz => {
            var tz, sz;
            let {
              key: Fz,
              item: Wz,
              meta: Xz
            } = zz;
            return (0, Kz.jsx)(jW, {
              itemKey: Fz,
              item: Xz.item,
              quantity: Xz.quantity,
              pricePerItem: Xz.pricePerItem,
              tier: null !== (tz = null === (sz = Wz.enchant) || void 0 === sz ? void 0 : sz.tier) && void 0 !== tz ? tz : null,
              selected: Fz === Uz,
              onSelect: uz
            }, Fz)
          }))
        }), (0, Kz.jsx)("div", {
          className: Xz()("SmpSellBar", {
            SmpSellBarIdle: !wz
          }),
          children: wz ? (0, Kz.jsx)(yW, {
            entry: wz,
            choice: KW(wz.item, Nz[wz.key]),
            onChoose: zz => {
              bz({
                ...Nz,
                [wz.key]: zz
              })
            }
          }) : (0, Kz.jsx)("span", {
            className: "SmpMuted",
            children: tz("smpShop:tapToSell")
          })
        })]
      })
    }

    function yW(zz) {
      var tz, sz, Fz, Wz;
      let {
        entry: Xz,
        choice: oz,
        onChoose: vz
      } = zz;
      const {
        t: Uz
      } = (0, Oz.B)(), uz = bW(), {
        key: Nz,
        item: bz,
        meta: wz
      } = Xz, Dz = OW("dropdown" === (null === (tz = bz.userInput) || void 0 === tz ? void 0 : tz.type) ? bz.userInput.dropdownOptions : []), Hz = null === oz ? 0 : -(0, JF.b)(bz, oz);
      return (0, Kz.jsxs)(Kz.Fragment, {
        children: [(0, Kz.jsx)(kF, {
          item: wz.item,
          amount: wz.quantity,
          tier: null !== (sz = null === (Fz = bz.enchant) || void 0 === Fz ? void 0 : Fz.tier) && void 0 !== sz ? sz : null
        }), (0, Kz.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, Kz.jsx)("b", {
            children: (0, Kz.jsx)(ZF.c, {
              text: null !== (Wz = bz.customTitle) && void 0 !== Wz ? Wz : wz.item
            })
          }), (0, Kz.jsx)("small", {
            children: Uz("smpShop:sellEach", {
              count: wz.quantity
            })
          })]
        }), (0, Kz.jsx)(aF, {
          options: Dz.map((zz => {
            let {
              label: tz,
              quantity: sz,
              isAll: Fz
            } = zz;
            return {
              value: tz,
              label: Fz ? Uz("smpShop:all", {
                count: sz
              }) : String(sz)
            }
          })),
          value: oz,
          onChange: vz,
          ariaLabel: Uz("smpShop:quantity")
        }), (0, Kz.jsxs)(gz.t, {
          loading: uz.isPending(Nz),
          disabled: null === oz,
          onClick: () => {
            uz.act(Nz, oz)
          },
          children: [Uz("smpShop:sellButton"), " ", (0, Kz.jsx)(iF, {
            amount: Hz
          })]
        })]
      })
    }

    function MW() {
      var zz;
      const {
        t: tz
      } = (0, Oz.B)(), sz = bW(), Fz = null === (zz = sz.shopInfo[sz.categoryKey]) || void 0 === zz ? void 0 : zz.items, Wz = tW(Fz, "collect"), Xz = tW(Fz, "myListing"), oz = (zz, tz) => sz.isPending(zz) || !1 === tz.canBuy;
      return (0, Kz.jsxs)("div", {
        className: "SmpScreen",
        children: [(0, Kz.jsx)("h3", {
          className: "SmpSectionTitle",
          children: tz("smpShop:readyToCollect")
        }), Wz.length > 0 ? (0, Kz.jsx)("div", {
          className: "SmpList",
          children: Wz.map((zz => {
            var Fz, Wz;
            let {
              key: Xz,
              item: Oz,
              meta: vz
            } = zz;
            return (0, Kz.jsxs)("div", {
              className: "SmpRow",
              children: [(0, Kz.jsx)(kF, {
                item: "sold" === vz.type ? "Gold Coin" : vz.item,
                amount: "sold" === vz.type ? 0 : vz.quantity,
                tier: null !== (Fz = null === (Wz = Oz.enchant) || void 0 === Wz ? void 0 : Wz.tier) && void 0 !== Fz ? Fz : null
              }), (0, Kz.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, Kz.jsx)("b", {
                  children: (0, Kz.jsx)(ZF.c, {
                    text: Oz.customTitle
                  })
                }), (0, Kz.jsx)("small", {
                  children: (0, Kz.jsx)(ZF.c, {
                    text: Oz.description
                  })
                })]
              }), (0, Kz.jsx)(gz.p, {
                loading: oz(Xz, Oz),
                onClick: () => {
                  sz.act(Xz)
                },
                children: tz("smpShop:collect")
              })]
            }, Xz)
          }))
        }) : (0, Kz.jsx)(lF, {
          title: tz("smpShop:nothingToCollect"),
          children: tz("smpShop:nothingToCollectHint")
        }), (0, Kz.jsx)("h3", {
          className: "SmpSectionTitle",
          children: tz("smpShop:activeListings", {
            count: Xz.length
          })
        }), Xz.length > 0 ? (0, Kz.jsx)("div", {
          className: "SmpList",
          children: Xz.map((zz => {
            var Fz, Wz;
            let {
              key: Xz,
              item: Oz,
              meta: vz
            } = zz;
            return (0, Kz.jsxs)("div", {
              className: "SmpRow",
              children: [(0, Kz.jsx)(kF, {
                item: vz.item,
                amount: vz.quantity,
                tier: null !== (Fz = null === (Wz = Oz.enchant) || void 0 === Wz ? void 0 : Wz.tier) && void 0 !== Fz ? Fz : null
              }), (0, Kz.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, Kz.jsx)("b", {
                  children: (0, Kz.jsx)(ZF.c, {
                    text: Oz.customTitle
                  })
                }), (0, Kz.jsx)("small", {
                  children: tz("smpShop:timeLeft", {
                    time: XW(vz.expiresAt)
                  })
                })]
              }), (0, Kz.jsxs)("div", {
                className: "SmpRowPrice",
                children: [(0, Kz.jsx)(iF, {
                  amount: vz.pricePerItem
                }), (0, Kz.jsx)("small", {
                  children: tz("smpShop:each")
                })]
              }), (0, Kz.jsx)(gz.H, {
                loading: oz(Xz, Oz),
                onClick: () => {
                  sz.act(Xz)
                },
                children: tz("smpShop:cancel")
              })]
            }, Xz)
          }))
        }) : (0, Kz.jsx)(lF, {
          title: tz("smpShop:noActiveListings"),
          children: tz("smpShop:noActiveListingsHint")
        })]
      })
    }

    function dW(zz) {
      let {
        done: tz,
        of: sz
      } = zz;
      return (0, Kz.jsx)("span", {
        className: "SmpProgress",
        children: (0, Kz.jsx)("i", {
          style: {
            width: `${Math.min(100,tz/Math.max(1,sz)*100)}%`
          }
        })
      })
    }

    function hW(zz) {
      var tz, sz, Fz;
      let {
        entry: Wz,
        choice: Xz,
        onChoose: oz
      } = zz;
      const {
        t: vz
      } = (0, Oz.B)(), Uz = bW(), {
        key: uz,
        item: Nz,
        meta: bz
      } = Wz, wz = "dropdown" === (null === (tz = Nz.userInput) || void 0 === tz ? void 0 : tz.type) ? Nz.userInput.dropdownOptions : [], Dz = !0 === bz.processing, Hz = null !== bz.creator && (bz.po > 0 || Dz), Bz = Hz && bz.po > 0 ? OW(wz) : [], Pz = null === Xz ? 0 : null !== (sz = null === (Fz = Bz.find((zz => zz.label === Xz))) || void 0 === Fz ? void 0 : Fz.quantity) && void 0 !== sz ? sz : 0;
      return (0, Kz.jsxs)("div", {
        className: "SmpRow SmpOrderRow",
        children: [(0, Kz.jsx)(kF, {
          item: bz.item
        }), (0, Kz.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, Kz.jsx)("b", {
            children: (0, Kz.jsx)(ZF.c, {
              text: Nz.customTitle
            })
          }), (0, Kz.jsxs)("small", {
            children: [(0, Kz.jsx)(iF, {
              amount: bz.pricePerItem
            }), " ", vz("smpShop:each"), " \xb7", " ", null === bz.creator ? vz("smpShop:you") : (0, Kz.jsx)(ZF.c, {
              text: [{
                entityName: bz.creator
              }]
            })]
          }), (0, Kz.jsx)(dW, {
            done: bz.delivered,
            of: bz.wanted
          })]
        }), Hz ? (0, Kz.jsxs)(Kz.Fragment, {
          children: [(0, Kz.jsx)(aF, {
            options: Bz.map((zz => {
              let {
                label: tz,
                quantity: sz,
                isAll: Fz
              } = zz;
              return {
                value: tz,
                label: Fz ? vz("smpShop:max", {
                  count: sz
                }) : String(sz)
              }
            })),
            value: Xz,
            onChange: oz,
            ariaLabel: vz("smpShop:quantity")
          }), (0, Kz.jsxs)(gz.t, {
            loading: Uz.isPending(uz) || Dz,
            disabled: null === Xz,
            onClick: () => {
              Uz.act(uz, Xz)
            },
            children: [vz("smpShop:deliver"), " ", (0, Kz.jsx)(iF, {
              amount: Pz * bz.pricePerItem
            })]
          })]
        }) : (0, Kz.jsx)("span", {
          className: "SmpMuted SmpRowNote",
          children: null === bz.creator ? vz("smpShop:yourOrder") : vz("smpShop:youHave", {
            count: 0
          })
        })]
      })
    }

    function QW() {
      var zz;
      const {
        t: tz
      } = (0, Oz.B)(), sz = bW(), Wz = null === (zz = sz.shopInfo[sz.categoryKey]) || void 0 === zz ? void 0 : zz.items, Xz = sW(Wz, "search"), oz = sW(Wz, "creator"), vz = tW(Wz, "order"), Uz = sW(Wz, "empty"), uz = HW(Xz, vz.length > 0 || null !== Uz), [Nz, bz] = (0, Fz.useState)(!1), [wz, Dz] = (0, Fz.useState)({});
      return (0, Kz.jsx)(YW, {
        browser: uz,
        recentLabel: tz("smpShop:recentOrders"),
        action: (0, Kz.jsx)(gz.t, {
          onClick: () => {
            bz((zz => !zz))
          },
          children: tz("smpShop:createOrder")
        }),
        above: Nz && (0, Kz.jsx)(GW, {
          mode: "order",
          creator: oz,
          catalogue: uz.catalogue,
          names: uz.names,
          searching: uz.loading,
          prices: [],
          onPickItem: uz.searchFor,
          onClose: () => {
            bz(!1)
          }
        }),
        onBack: () => {
          bz(!1)
        },
        summary: vz.length > 0 && tz(1 === vz.length ? "smpShop:orderSummaryOne" : "smpShop:orderSummary", {
          count: vz.length,
          price: dF(xW(vz, "max"))
        }),
        list: uz.loading ? (0, Kz.jsx)(LF, {}) : vz.length > 0 ? (0, Kz.jsx)(wW.c, {
          lazyLoadedClassName: "SmpList",
          observerRoot: "SmpBody",
          rootMargin: FW,
          observerUpdateDeps: [vz.length],
          children: vz.map((zz => (0, Kz.jsx)(hW, {
            entry: zz,
            choice: KW(zz.item, wz[zz.key]),
            onChoose: tz => {
              Dz({
                ...wz,
                [zz.key]: tz
              })
            }
          }, zz.key)))
        }) : Uz ? (0, Kz.jsx)(nF, {
          entry: Uz
        }) : (0, Kz.jsx)(LF, {
          count: 3
        })
      })
    }

    function kW() {
      var zz;
      const {
        t: tz
      } = (0, Oz.B)(), sz = bW(), Fz = tW(null === (zz = sz.shopInfo[sz.categoryKey]) || void 0 === zz ? void 0 : zz.items, "myOrder");
      return 0 === Fz.length ? (0, Kz.jsx)("div", {
        className: "SmpScreen",
        children: (0, Kz.jsx)(lF, {
          title: tz("smpShop:noOrders"),
          children: tz("smpShop:noOrdersHint")
        })
      }) : (0, Kz.jsx)("div", {
        className: "SmpScreen",
        children: (0, Kz.jsx)("div", {
          className: "SmpList",
          children: Fz.map((zz => {
            let {
              key: Fz,
              item: Wz,
              meta: Xz
            } = zz;
            const Oz = sz.isPending(Fz) || !1 === Wz.canBuy;
            return (0, Kz.jsxs)("div", {
              className: "SmpRow",
              children: [(0, Kz.jsx)(kF, {
                item: Xz.item,
                amount: Xz.collectable
              }), (0, Kz.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, Kz.jsx)("b", {
                  children: (0, Kz.jsx)(ZF.c, {
                    text: Wz.customTitle
                  })
                }), (0, Kz.jsxs)("small", {
                  children: [(0, Kz.jsx)(iF, {
                    amount: Xz.pricePerItem
                  }), " ", tz("smpShop:each"), Xz.collectable > 0 && ` \xb7 ${tz("smpShop:readyCount",{count:Xz.collectable})}`]
                }), (0, Kz.jsx)(dW, {
                  done: Xz.delivered,
                  of: Xz.wanted
                })]
              }), Xz.collectable > 0 ? (0, Kz.jsx)(gz.p, {
                loading: Oz,
                onClick: () => {
                  sz.act(Fz)
                },
                children: tz("smpShop:collectCount", {
                  count: Xz.collectable
                })
              }) : (0, Kz.jsx)(gz.H, {
                loading: Oz,
                onClick: () => {
                  sz.act(Fz)
                },
                children: tz("smpShop:cancel")
              })]
            }, Fz)
          }))
        })
      })
    }
    const iW = new Set(["search", "creator", "enchantedCreator", "collect", "myOrder", "order"]),
      LW = {
        sell: "coins",
        market: "store",
        collect: "backpack",
        orders: "file-clipboard",
        myOrders: "location-check"
      };

    function lW(zz, tz) {
      let sz = !1;
      const Fz = {};
      for (const Wz in zz) tz(Wz, zz[Wz]) ? Fz[Wz] = zz[Wz] : sz = !0;
      return sz ? Fz : zz
    }

    function nW(zz) {
      var tz, sz, Wz, vz;
      const {
        show: Uz,
        shopInfo: uz,
        selectedCategoryKey: Nz
      } = zz, {
        t: bz
      } = (0, Oz.B)(), wz = null !== Nz && void 0 !== Nz ? Nz : "", Dz = zW(uz, wz), gz = null === (tz = uz[wz]) || void 0 === tz ? void 0 : tz.items, Hz = null !== Dz, [Bz, Pz] = (0, Fz.useState)({}), [rz, Yz] = (0, Fz.useState)([]), [xz, mz] = (0, Fz.useState)(!1), [Jz, Iz] = (0, Fz.useState)(null), [, Cz] = (0, Fz.useState)(0), ez = (0, Fz.useRef)(0), Zz = (0, Fz.useRef)({}), Gz = (0, Fz.useRef)({
        items: gz,
        pending: Bz,
        shopInfo: uz,
        active: Hz,
        canAfford: zz.canAfford,
        buy: zz.buy
      });
      Gz.current = {
        items: gz,
        pending: Bz,
        shopInfo: uz,
        active: Hz,
        canAfford: zz.canAfford,
        buy: zz.buy
      };
      const Tz = (0, Fz.useCallback)((zz => {
        ez.current++;
        const tz = ez.current;
        Yz((sz => [{
          id: tz,
          text: zz
        }, ...sz].slice(0, 8))), Iz(tz)
      }), []);
      (0, Fz.useEffect)((() => {
        if (null === Jz) return;
        const zz = setTimeout((() => {
          Iz(null)
        }), 3e3);
        return () => {
          clearTimeout(zz)
        }
      }), [Jz]), (0, Fz.useEffect)((() => {
        const tz = zz.message;
        if (!tz) return;
        const {
          shopInfo: sz,
          active: Fz,
          items: Wz
        } = Gz.current, Xz = null !== tz.categoryKey ? null !== zW(sz, tz.categoryKey) : Fz;
        (Xz || Fz) && Tz(tz.text), Xz && Pz((zz => lW(zz, (zz => {
          var tz, sz;
          return !iW.has(null === Wz || void 0 === Wz || null === (tz = Wz[zz]) || void 0 === tz || null === (sz = tz.smp) || void 0 === sz ? void 0 : sz.kind)
        }))))
      }), [zz.message, Tz]), (0, Fz.useEffect)((() => {
        Pz((zz => lW(zz, ((zz, tz) => uW(null === gz || void 0 === gz ? void 0 : gz[zz]) === tz.snapshot))))
      }), [uz, gz]);
      const cz = Object.keys(Bz).length > 0;
      (0, Fz.useEffect)((() => {
        if (!cz) return;
        const zz = setInterval((() => {
          Cz((zz => zz + 1));
          const zz = Date.now(),
            {
              pending: tz,
              items: sz
            } = Gz.current,
            Fz = Object.keys(tz).filter((sz => zz - tz[sz].at >= 12e3));
          if (0 === Fz.length) return;
          const Wz = Fz.some((zz => {
            var Fz, Wz;
            return "search" !== (null === sz || void 0 === sz || null === (Fz = sz[zz]) || void 0 === Fz || null === (Wz = Fz.smp) || void 0 === Wz ? void 0 : Wz.kind) || tz[zz].resend
          }));
          for (const Xz of Fz) Zz.current[Xz] = zz;
          Pz((zz => lW(zz, (zz => !Fz.includes(zz))))), Wz && Tz(bz("smpShop:noAnswer"))
        }), 500);
        return () => {
          clearInterval(zz)
        }
      }), [cz]), (0, Fz.useEffect)((() => {
        Pz({})
      }), [wz]), (0, Fz.useEffect)((() => {
        Uz || mz(!1)
      }), [Uz]);
      const jz = (0, Fz.useCallback)((function(zz, tz) {
          let sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            items: Fz,
            pending: Wz,
            canAfford: Xz,
            buy: Oz
          } = Gz.current, oz = null === Fz || void 0 === Fz ? void 0 : Fz[zz];
          if (!oz || zz in Wz || !1 === oz.canBuy) return !1;
          if (!Xz(oz, (0, JF.b)(oz, tz))) return !1;
          Oz(zz, oz, tz);
          const vz = {
            snapshot: uW(oz),
            at: Date.now(),
            resend: sz
          };
          return Gz.current.pending = {
            ...Gz.current.pending,
            [zz]: vz
          }, Pz((tz => ({
            ...tz,
            [zz]: vz
          }))), !0
        }), []),
        Az = (0, Fz.useMemo)((() => ({
          shopInfo: uz,
          categoryKey: wz,
          canAfford: zz.canAfford,
          isPending: zz => zz in Bz,
          gaveUpAt: zz => {
            var tz;
            return null !== (tz = Zz.current[zz]) && void 0 !== tz ? tz : 0
          },
          act: jz,
          notify: Tz
        })), [uz, wz, zz.canAfford, Bz, jz, Tz]),
        yz = Math.min(...Object.values(Bz).map((zz => zz.at))),
        Mz = cz && Date.now() - yz > 1500,
        dz = rz.length > 1,
        hz = null !== (sz = null === (Wz = uz[wz]) || void 0 === Wz ? void 0 : Wz.customTitle) && void 0 !== sz ? sz : wz,
        Qz = null === (vz = uz[wz]) || void 0 === vz ? void 0 : vz.description;
      let kz = null;
      return "market" === Dz ? kz = (0, Kz.jsx)(TW, {}) : "sell" === Dz ? kz = (0, Kz.jsx)(AW, {}) : "collect" === Dz ? kz = (0, Kz.jsx)(MW, {}) : "orders" === Dz ? kz = (0, Kz.jsx)(QW, {}) : "myOrders" === Dz && (kz = (0, Kz.jsx)(kW, {})), (0, Kz.jsx)(NW.Provider, {
        value: Az,
        children: (0, Kz.jsx)("div", {
          className: "SmpShopHost",
          hidden: !Hz,
          children: (0, Kz.jsxs)("div", {
            className: "SmpShop",
            children: [(0, Kz.jsx)("header", {
              className: "SmpHeader",
              children: (0, Kz.jsxs)("div", {
                className: "SmpHeaderTitle",
                children: [(0, Kz.jsxs)("h2", {
                  children: [Dz && (0, Kz.jsx)(oz.c, {
                    name: LW[Dz]
                  }), bz(hz)]
                }), Qz && (0, Kz.jsx)("p", {
                  children: (0, Kz.jsx)(ZF.c, {
                    text: Qz
                  })
                })]
              })
            }), (0, Kz.jsx)("main", {
              className: "SmpBody",
              "data-pad-initial-area": !0,
              children: Uz && kz
            }), (0, Kz.jsxs)("button", {
              type: "button",
              className: Xz()("SmpStatus", {
                SmpStatusWaiting: cz,
                SmpStatusFresh: !cz && null !== Jz,
                SmpStatusHasHistory: dz
              }),
              "aria-live": "polite",
              "aria-expanded": dz ? xz : void 0,
              onClick: () => {
                dz && mz((zz => !zz))
              },
              children: [cz ? (0, Kz.jsxs)("span", {
                className: "SmpStatusText",
                children: [(0, Kz.jsx)(qF, {}), bz(Mz ? "smpShop:slowConnection" : "smpShop:waiting")]
              }) : rz[0] ? (0, Kz.jsx)("span", {
                className: "SmpStatusText",
                children: (0, Kz.jsx)(ZF.c, {
                  text: rz[0].text
                })
              }, rz[0].id) : (0, Kz.jsx)("span", {
                className: "SmpStatusText SmpMuted",
                children: bz("smpShop:ready")
              }), dz && (0, Kz.jsx)("small", {
                children: bz("smpShop:recentMessages", {
                  count: rz.length
                })
              })]
            }), xz && dz && (0, Kz.jsx)("div", {
              className: "SmpStatusHistory",
              children: rz.map((zz => (0, Kz.jsx)("div", {
                children: (0, Kz.jsx)(ZF.c, {
                  text: zz.text
                })
              }, zz.id)))
            })]
          })
        })
      })
    }
    class aW {
      constructor(zz) {
        this.info = zz
      }
      static fromShopInfo(zz) {
        const tz = {};
        for (const sz in zz) {
          const Fz = !0 === zz[sz].redDot && !0 !== zz[sz].forceRemoveRedDot;
          tz[sz] = {
            redDot: Fz,
            items: {}
          };
          for (const Wz in zz[sz].items) {
            const Fz = zz[sz].items[Wz],
              Xz = !0 === Fz.redDot && !0 !== Fz.forceRemoveRedDot;
            tz[sz].items[Wz] = {
              redDot: Xz
            }
          }
        }
        return new aW(tz)
      }
      anyCategoryHasRedDots() {
        for (const zz in this.info)
          if (this.categoryHasRedDot(zz)) return !0;
        return !1
      }
      doesCategoryExist(zz) {
        return !(0, Lt.G)(this.info[zz])
      }
      categoryHasRedDot(zz) {
        return !0 === this.info[zz].redDot
      }
      updateCategoryRedDot(zz, tz) {
        this.info[zz].redDot = tz
      }
      doesItemExist(zz, tz) {
        return this.doesCategoryExist(zz) && !(0, Lt.G)(this.info[zz].items[tz])
      }
      itemHasRedDot(zz, tz) {
        return !0 === this.info[zz].items[tz].redDot
      }
      updateItemRedDot(zz, tz, sz) {
        this.info[zz].items[tz].redDot = sz
      }
      shallowCopy() {
        return new aW(this.info)
      }
    }

    function qW(zz, tz) {
      return `${zz}\x1f${tz}`
    }

    function SW(zz, tz) {
      return !(0, Lt.G)(tz) && !(0, Lt.G)(zz) && tz in zz
    }
    const VW = (0, Fz.memo)((function(zz) {
      var tz, sz;
      let {
        show: Wz
      } = zz;
      const Oz = (0, Es.h)("players", tX),
        oz = (0, Es.h)("players", sX),
        [Uz, Nz] = (0, Fz.useState)({
          shopInfo: {},
          userInputsPerItem: {},
          redDotInfo: aW.fromShopInfo({}),
          currencyAmounts: {},
          selectedCategoryKey: null,
          onBoughtInfo: null,
          awaitingPurchase: !1
        }),
        bz = (0, Fz.useRef)(""),
        Dz = (0, Fz.useRef)(null),
        Hz = (0, Fz.useRef)(null),
        Pz = (0, Fz.useRef)(0),
        rz = (0, Fz.useRef)(void 0),
        Yz = (0, Fz.useRef)(null),
        xz = (0, Fz.useRef)(Uz),
        mz = Uz.redDotInfo.anyCategoryHasRedDots(),
        [Iz, Cz] = (0, Fz.useState)(null),
        Zz = (0, Fz.useRef)(!1);
      let Gz = !1,
        Tz = 0,
        cz = 0;
      if (Uz.currencyAmounts) {
        for (const zz in Uz.currencyAmounts) {
          var jz;
          const tz = Uz.currencyAmounts[zz];
          tz.hidden || (Tz++, (null === (jz = tz.subtext) || void 0 === jz ? void 0 : jz.length) > 0 && cz++)
        }
        Gz = Tz + cz > 4
      }(0, Fz.useEffect)((() => {
        lt.o.Yg("showShopIconRedDot", mz, !0)
      }), [mz]), (0, Fz.useEffect)((() => {
        Bz.gameBridge.send("setShopOpen", Wz), Wz || (clearTimeout(rz.current), Nz((zz => zz.awaitingPurchase ? {
          ...zz,
          awaitingPurchase: !1
        } : zz)))
      }), [Wz]), (0, Fz.useEffect)((() => () => {
        Bz.gameBridge.send("setShopOpen", !1), clearTimeout(rz.current)
      }), []), (0, Fz.useEffect)((() => {
        xz.current = Uz
      }), [Uz]), (0, Fz.useEffect)((() => {
        if (null === Iz) return;
        return (0, jF.d)("pointerdown", (zz => {
          const tz = zz.target;
          null !== tz && void 0 !== tz && tz.closest(".ShopItem") || Cz(null)
        }))
      }), [Iz]);
      const Az = zz => {
          Nz((tz => ({
            ...tz,
            ...zz
          })))
        },
        yz = zz => {
          var tz;
          clearTimeout(null === (tz = Uz.onBoughtInfo) || void 0 === tz ? void 0 : tz.timeout);
          const sz = setTimeout((() => {
            Az({
              onBoughtInfo: null
            })
          }), 3e3);
          bz.current = zz, Az({
            onBoughtInfo: {
              text: zz,
              timeout: sz,
              categoryKey: Dz.current
            }
          })
        },
        Mz = zz => {
          const {
            shopInfo: tz,
            userInputsPerItem: sz,
            redDotInfo: Fz,
            autoSelectCategory: Xz
          } = function(zz, tz, sz, Fz, Wz, Xz) {
            if ((0, Lt.G)(zz) || 0 === Object.keys(zz).length) return {
              shopInfo: {},
              userInputsPerItem: {},
              redDotInfo: aW.fromShopInfo({}),
              autoSelectCategory: null
            };
            const Oz = ez.r[ez.t].adConfig.showRewardedAds,
              oz = {};
            let vz = null;
            for (const gz in zz) {
              const tz = zz[gz],
                sz = {};
              let Fz = !1;
              for (const zz in tz.items) {
                const Wz = tz.items[zz];
                (0, JF.k)(Wz, Oz) && (sz[zz] = Wz, Fz = !0)
              }
              Fz && (oz[gz] = {
                ...tz,
                items: sz
              }, !0 === tz.autoSelectCategory && (vz = gz))
            }
            const Uz = {},
              Kz = (zz, tz, Fz, Oz) => {
                var oz, vz;
                const Kz = qW(zz, tz),
                  uz = null !== (oz = sz[Kz]) && void 0 !== oz ? oz : sz[tz];
                if (null !== (vz = Oz.userInput) && void 0 !== vz && vz.type) switch (Oz.userInput.type) {
                  case "dropdown": {
                    var Nz;
                    const zz = !uz || !Oz.userInput.dropdownOptions.some((zz => (0, JF.e)(zz) === uz)),
                      tz = Oz.userInput.shouldResetSelectionOnOptionsChange && ("dropdown" !== (null === Fz || void 0 === Fz || null === (Nz = Fz.userInput) || void 0 === Nz ? void 0 : Nz.type) || JSON.stringify(Fz.userInput.dropdownOptions) !== JSON.stringify(Oz.userInput.dropdownOptions)),
                      sz = Oz.userInput,
                      Wz = !(0, Lt.G)(sz.initialValue) && sz.dropdownOptions.some((zz => (0, JF.e)(zz) === sz.initialValue));
                    var bz;
                    return void(zz || tz ? Wz ? Uz[Kz] = null !== (bz = Oz.userInput.initialValue) && void 0 !== bz ? bz : null : Oz.userInput.dropdownOptions.length > 0 ? Uz[Kz] = (0, JF.e)(Oz.userInput.dropdownOptions[0]) : Uz[Kz] = null : Uz[Kz] = uz)
                  }
                  case "text":
                  case "number":
                    var wz, Dz, gz;
                    return void((null === Fz || void 0 === Fz ? void 0 : Fz.userInput) !== Oz.userInput ? Uz[Kz] = null !== (wz = null !== (Dz = Oz.userInput.initialValue) && void 0 !== Dz ? Dz : uz) && void 0 !== wz ? wz : "" : Uz[Kz] = null !== (gz = null !== uz && void 0 !== uz ? uz : Oz.userInput.initialValue) && void 0 !== gz ? gz : "");
                  case "color":
                    var Hz, Bz, Pz;
                    return void((null === Fz || void 0 === Fz ? void 0 : Fz.userInput) !== Oz.userInput ? Uz[Kz] = null !== (Hz = null !== (Bz = Oz.userInput.initialValue) && void 0 !== Bz ? Bz : uz) && void 0 !== Hz ? Hz : "#000000" : Uz[Kz] = null !== (Pz = null !== uz && void 0 !== uz ? uz : Oz.userInput.initialValue) && void 0 !== Pz ? Pz : "#000000");
                  case "player": {
                    const zz = (0, JF.i)(Wz, Xz, Oz.userInput);
                    return void(uz && zz.includes(uz) ? Uz[Kz] = uz : Uz[Kz] = zz.length > 0 ? zz[0] : null)
                  }
                }
              };
            for (const gz in oz)
              for (const zz in oz[gz].items) {
                var uz;
                const sz = oz[gz].items[zz];
                Kz(gz, zz, null === (uz = tz[gz]) || void 0 === uz ? void 0 : uz.items[zz], sz)
              }
            const Nz = aW.fromShopInfo(oz);
            for (const gz in oz) {
              var bz;
              if (Fz.doesCategoryExist(gz)) {
                (null === (bz = tz[gz]) || void 0 === bz ? void 0 : bz.redDot) === oz[gz].redDot && Nz.updateCategoryRedDot(gz, Fz.categoryHasRedDot(gz));
                for (const zz in oz[gz].items) {
                  var wz, Dz;
                  Fz.doesItemExist(gz, zz) && (null === (wz = tz[gz]) || void 0 === wz || null === (Dz = wz.items[zz]) || void 0 === Dz ? void 0 : Dz.redDot) === oz[gz].items[zz].redDot && Nz.updateItemRedDot(gz, zz, Fz.itemHasRedDot(gz, zz))
                }
              }
            }
            return {
              shopInfo: oz,
              userInputsPerItem: Uz,
              redDotInfo: Nz,
              autoSelectCategory: vz
            }
          }(zz, Uz.shopInfo, Uz.userInputsPerItem, Uz.redDotInfo, Oz, oz), vz = {
            shopInfo: tz,
            userInputsPerItem: sz,
            redDotInfo: Fz
          };
          if (null === Xz || Wz)
            if (tz[Uz.selectedCategoryKey]) vz.selectedCategoryKey = Uz.selectedCategoryKey;
            else {
              const zz = yF(tz);
              vz.selectedCategoryKey = zz.length > 0 ? zz[0] : null
            }
          else vz.selectedCategoryKey = Xz;
          return 0 === Object.keys(tz).length && Wz && Jz.b.set({
            openEverythingMenuName: null
          }), vz
        },
        dz = (zz, tz, sz) => {
          const Fz = Uz.selectedCategoryKey,
            Wz = qW(Fz, zz),
            Xz = null !== sz && void 0 !== sz ? sz : Uz.userInputsPerItem[Wz],
            Oz = {
              categoryKey: Fz,
              itemKey: zz,
              userInput: Xz
            };
          if (Dz.current = Fz, tz.isRewardedAd) {
            if (Date.now() - Pz.current < 5e3) return;
            (0, Xt.gb)((() => {
              var sz, Fz, Xz;
              console.log("bought rewarded ad");
              const oz = Oz.categoryKey ? null === (sz = xz.current.shopInfo[Oz.categoryKey]) || void 0 === sz ? void 0 : sz.items[zz] : null;
              if (!oz || !oz.isRewardedAd) return void console.warn("Shop item no longer valid or a rewarded ad, early out");
              (null === (Fz = tz.userInput) || void 0 === Fz ? void 0 : Fz.type) === (null === oz || void 0 === oz || null === (Xz = oz.userInput) || void 0 === Xz ? void 0 : Xz.type) ? (Oz.userInput = xz.current.userInputsPerItem[Wz], Bz.gameBridge.send("buyShopItem", Oz), tz.onBoughtMessage && yz(tz.onBoughtMessage)) : console.warn("Shop item input type changed, early out")
            })), Pz.current = Date.now()
          } else {
            Bz.gameBridge.send("buyShopItem", Oz), Az({
              awaitingPurchase: !0
            }), clearTimeout(rz.current), rz.current = setTimeout((() => {
              Yz.current = null, Az({
                awaitingPurchase: !1
              })
            }), 1e3);
            const zz = (0, JF.b)(tz, Xz);
            if (Yz.current = null, !isNaN(zz) && SW(Uz.currencyAmounts, tz.currency)) {
              0 !== zz && (Yz.current = {
                currency: tz.currency,
                amountBefore: Uz.currencyAmounts[tz.currency].amount
              });
              const sz = {
                ...Uz.currencyAmounts
              };
              sz[tz.currency].amount -= zz, Az({
                currencyAmounts: sz
              })
            }
            tz.onBoughtMessage && yz(tz.onBoughtMessage)
          }
        },
        Qz = (zz, tz) => {
          if (null === tz || !zz.shopInfo[tz]) return zz;
          let sz = zz.redDotInfo;
          return sz.categoryHasRedDot(tz) && (sz.updateCategoryRedDot(tz, !1), sz = sz.shallowCopy()), {
            ...zz,
            selectedCategoryKey: tz,
            redDotInfo: sz
          }
        },
        kz = zz => {
          Nz((tz => Qz(tz, zz)))
        };
      (0, et.g)(AF.i, (() => {
        Nz((zz => {
          const tz = (0, AF.k)(yF(zz.shopInfo), zz.selectedCategoryKey, (tz => (0, AF.f)(zz.shopInfo[tz].items)));
          return tz === zz.selectedCategoryKey ? zz : Qz(zz, tz)
        }))
      })), (0, et.g)("showShopFromServer", (zz => {
        let {
          toggle: tz,
          Ht: sz
        } = zz;
        sz && kz(sz), 0 === Object.keys(Uz.shopInfo).length || tz && Wz ? Jz.b.set({
          openEverythingMenuName: null
        }) : Jz.b.set({
          openEverythingMenuName: Ut.r.SHOP
        })
      })), (0, et.g)("closeShopOnDamaged", (() => {
        Wz && Jz.b.set({
          openEverythingMenuName: null
        })
      })), (0, et.g)("overShopInfo", (zz => {
        yz(zz)
      })), (0, wz.d)("currencyAmounts", (zz => {
        var tz;
        const sz = Yz.current;
        sz && (null === zz || void 0 === zz || null === (tz = zz[sz.currency]) || void 0 === tz ? void 0 : tz.amount) === sz.amountBefore ? Az({
          currencyAmounts: zz
        }) : (Yz.current = null, Az({
          currencyAmounts: zz,
          awaitingPurchase: !1
        }))
      })), (0, wz.d)("shopInfo", (zz => {
        Az({
          ...Mz(zz),
          awaitingPurchase: !1
        })
      }));
      const iz = (0, Fz.useRef)({
        playerIds: Oz,
        localPlayerId: oz
      });
      (0, Fz.useEffect)((() => {
        iz.current.playerIds === Oz && iz.current.localPlayerId === oz || (iz.current = {
          playerIds: Oz,
          localPlayerId: oz
        }, Nz((zz => {
          const tz = Mz(zz.shopInfo);
          return {
            ...zz,
            ...tz
          }
        })))
      }), [Oz, oz]);
      const Lz = Uz.selectedCategoryKey,
        lz = (zz, tz) => {
          var sz, Fz;
          return (isNaN(tz) || (0, Lt.G)(zz.currency) || SW(Uz.currencyAmounts, zz.currency) && tz <= Uz.currencyAmounts[zz.currency].amount) && (null === (sz = zz.canBuy) || void 0 === sz || sz) && !(null !== (Fz = zz.hidden) && void 0 !== Fz && Fz)
        },
        nz = (zz, tz) => {
          var sz, Fz, Wz;
          const Oz = qW(Lz, zz),
            oz = Uz.shopInfo[Lz].items[zz],
            uz = Uz.userInputsPerItem[Oz],
            Nz = (0, JF.b)(oz, uz),
            bz = lz(oz, Nz),
            wz = oz.enchant,
            Dz = wz ? (0, hz.sb)(null !== (sz = oz.customTitle) && void 0 !== sz ? sz : zz, {
              colour: hz.lb[wz.tier]
            }) : null !== (Fz = oz.customTitle) && void 0 !== Fz ? Fz : zz,
            Hz = tz => {
              const sz = null !== tz && void 0 !== tz ? tz : uz,
                Fz = void 0 !== tz ? (0, JF.b)(oz, tz) : Nz;
              lz(oz, Fz) && null !== sz && dz(zz, oz, tz);
              let Wz = Uz.redDotInfo;
              Wz.itemHasRedDot(Lz, zz) && (Wz.updateItemRedDot(Lz, zz, !1), Wz = Wz.shallowCopy()), Az({
                redDotInfo: Wz
              })
            };
          return (0, Kz.jsxs)("div", {
            className: Xz()("ShopItem", {
              ShopItemNoInput: !oz.userInput,
              ShopItemNoInputCanBuy: !oz.userInput && bz,
              ShopItemNoInputSelected: oz.isSelected,
              ShopItemEnchant: !!wz
            }),
            "data-pad-focusable": !oz.userInput || void 0,
            "data-pad-unavailable": !oz.userInput && !bz || void 0,
            "data-pad-repeat": null !== (Wz = (0, AF.c)(oz)) && void 0 !== Wz ? Wz : void 0,
            "data-pad-repeat-wait": Uz.awaitingPurchase || void 0,
            onClick: () => {
              if (wz && Zz.current) {
                if (Iz !== Oz) return void Cz(Oz);
                Cz(null)
              }
              oz.userInput || Hz()
            },
            onPointerDown: zz => {
              wz && (Zz.current = (0, CF.j)(zz))
            },
            onPointerEnter: zz => {
              wz && !(0, CF.j)(zz) && Cz(Oz)
            },
            onPointerLeave: zz => {
              wz && !(0, CF.j)(zz) && Cz((zz => zz === Oz ? null : zz))
            },
            style: {
              zIndex: Object.keys(Uz.shopInfo[Lz].items).length - tz
            },
            children: [Uz.redDotInfo.itemHasRedDot(Lz, zz) && (0, Kz.jsx)(vz.c, {
              top: "-6px",
              right: "-6px"
            }), oz.badge && (0, Kz.jsx)("div", {
              className: "ShopBadgeContainer",
              children: (0, Kz.jsx)("div", {
                className: Xz()("ShopBadgeMain", oz.badge.type),
                children: (0, Kz.jsx)(ZF.c, {
                  text: oz.badge.text
                })
              })
            }), (0, Kz.jsx)("div", {
              className: "ShopItemLeft",
              children: oz.image && (0, Kz.jsx)(RW, {
                item: oz,
                minWidth: 5,
                minHeight: 4.8
              })
            }), (0, Kz.jsxs)("div", {
              className: "ShopItemRight",
              children: [(0, Kz.jsxs)("div", {
                className: "ShopItemHeader",
                children: [(0, Kz.jsx)("div", {
                  className: "ShopItemHeaderTitle",
                  children: (0, Kz.jsx)(ZF.c, {
                    text: Dz
                  })
                }), (0, Kz.jsx)("div", {
                  className: "ShopItemHeaderDescription",
                  children: (0, Kz.jsx)(ZF.c, {
                    text: oz.description
                  })
                })]
              }), oz.userInput && (0, Kz.jsxs)("div", {
                className: "ShopItemInputsContainer",
                onClick: zz => {
                  zz.stopPropagation()
                },
                children: [(0, Kz.jsx)(EW, {
                  item: oz,
                  currInput: uz,
                  updateInput: tz => {
                    ((zz, tz, sz) => {
                      const Fz = qW(zz, tz),
                        Wz = {
                          ...Uz.userInputsPerItem
                        };
                      Wz[Fz] = sz, Az({
                        userInputsPerItem: Wz
                      })
                    })(Lz, zz, tz)
                  },
                  onSubmit: zz => {
                    Hz(zz)
                  }
                }), ("dropdown" !== oz.userInput.type || !oz.userInput.autoSubmit) && (0, Kz.jsx)(gz.h, {
                  className: "ItemCostButton",
                  disabled: !bz && null !== uz,
                  onClick: () => {
                    Hz()
                  },
                  children: (0, Kz.jsx)(fW, {
                    item: oz,
                    cost: Nz,
                    currencyAmounts: Uz.currencyAmounts
                  })
                })]
              })]
            }), !oz.userInput && (0, Kz.jsx)("div", {
              className: "ShopItemNoInputCost",
              children: (0, Kz.jsx)(fW, {
                item: oz,
                cost: Nz,
                currencyAmounts: Uz.currencyAmounts
              })
            }), wz && Iz === Oz && (0, Kz.jsxs)("div", {
              className: "ShopItemEnchantInfo SmallTextBold",
              children: [(0, Kz.jsx)(ZF.c, {
                text: Dz
              }), (0, Kz.jsx)("div", {
                className: "ShopItemEnchantInfoDescription",
                children: (0, Kz.jsx)(ZF.c, {
                  text: (0, IF.c)("", wz.enchantments, wz.enchantmentData)
                })
              })]
            })]
          }, Oz)
        },
        az = function(zz) {
          for (const tz in zz)
            if (zz[tz].smp) return !0;
          return !1
        }(Uz.shopInfo),
        qz = zW(Uz.shopInfo, Lz);
      return (0, Kz.jsx)(YF.d, {
        className: "Menu ShopBody",
        show: Wz,
        children: 0 !== Object.keys(Uz.shopInfo).length && (0, Kz.jsxs)(Kz.Fragment, {
          children: [(0, Kz.jsxs)("div", {
            className: "MenuSideBar",
            children: [(0, Kz.jsx)(uz, {
              items: yF(Uz.shopInfo).map((zz => {
                var tz;
                return {
                  id: zz,
                  title: null !== (tz = Uz.shopInfo[zz].customTitle) && void 0 !== tz ? tz : zz,
                  redDot: Uz.redDotInfo.categoryHasRedDot(zz)
                }
              })),
              selectedItemId: Lz,
              onClick: kz,
              padStartsOnTab: (0, AF.e)(Lz)
            }), (0, Kz.jsx)("div", {
              className: "MenuSideBarFooter",
              children: Uz.currencyAmounts && Object.keys(Uz.currencyAmounts).map((zz => {
                var tz;
                const sz = Uz.currencyAmounts[zz];
                return sz.hidden ? null : (0, Kz.jsxs)("div", {
                  className: "ShopCurrencyDiv " + (Gz ? "SmallText" : ""),
                  children: [(0, Kz.jsxs)("div", {
                    className: "ShopCurrencyDetails",
                    children: [(0, Kz.jsx)("div", {
                      className: "ShopCurrencyAmtIcon",
                      style: {
                        color: sz.iconColour
                      },
                      children: (0, Kz.jsx)(FX, {
                        iconName: sz.icon
                      })
                    }), "\xa0", (0, mF.e)(sz.amount, 6)]
                  }), (null === (tz = sz.subtext) || void 0 === tz ? void 0 : tz.length) > 0 && (0, Kz.jsx)("div", {
                    className: "ShopCurrencySubtext",
                    children: (0, Kz.jsx)(ZF.c, {
                      text: sz.subtext
                    })
                  })]
                }, zz)
              }))
            })]
          }), (0, Kz.jsxs)("div", {
            className: "MenuBody ShopMenuBody",
            children: [az && (0, Kz.jsx)(nW, {
              show: Wz,
              shopInfo: Uz.shopInfo,
              selectedCategoryKey: Lz,
              buy: (zz, tz, sz) => {
                dz(zz, tz, sz)
              },
              canAfford: lz,
              message: Uz.onBoughtInfo
            }), null === qz && (0, Kz.jsxs)(Kz.Fragment, {
              children: [(0, Kz.jsx)("div", {
                className: Xz()("ShopOnBoughtInfo", {
                  ShopOnBoughtInfoShow: null !== Uz.onBoughtInfo
                }),
                children: (0, Kz.jsx)(ZF.c, {
                  text: bz.current
                })
              }), (0, Kz.jsx)("div", {
                className: "ShopItemsWrapper",
                children: (0, Kz.jsxs)("div", {
                  className: "ShopItemsInner",
                  children: [(null === (tz = Uz.shopInfo[Lz]) || void 0 === tz ? void 0 : tz.description) && (0, Kz.jsx)("div", {
                    className: "ShopCategoryDescription",
                    children: (0, Kz.jsx)(ZF.c, {
                      text: Uz.shopInfo[Lz].description
                    })
                  }), Wz && (0, Kz.jsx)("div", {
                    className: "ShopItems",
                    ref: Hz,
                    "data-pad-initial-area": !0,
                    children: yF(null === (sz = Uz.shopInfo[Lz]) || void 0 === sz ? void 0 : sz.items).map(((zz, tz) => nz(zz, tz)))
                  })]
                })
              })]
            })]
          })]
        })
      })
    }));

    function RW(zz) {
      let {
        item: tz,
        minWidth: sz,
        minHeight: Fz
      } = zz;
      const {
        image: Wz,
        schematicId: Xz,
        imageColour: Oz
      } = tz;
      if (Xz) return (0, Kz.jsx)("div", {
        className: "ShopSchematic",
        style: {
          width: `${sz}rem`,
          height: `${Fz}rem`
        },
        children: (0, Kz.jsx)(GF.c, {
          game: {
            schematicId: Xz
          }
        })
      });
      var vz, Uz;
      if ((0, eF.f)(Wz)) return (0, Kz.jsx)("div", {
        className: "ShopBlock",
        style: {
          minWidth: `${sz}rem`,
          height: "0",
          minHeight: `${Fz}rem`
        },
        children: (0, Kz.jsx)(eF.c, {
          itemName: Wz,
          amount: null !== (vz = tz.amount) && void 0 !== vz ? vz : 0,
          amountFontSize: Fz / 4 + "rem",
          enchantmentTier: null === (Uz = tz.enchant) || void 0 === Uz ? void 0 : Uz.tier
        })
      });
      const uz = Wz.slice(-4);
      return ".jpg" === uz || ".png" === uz ? (0, Kz.jsx)(pW, {
        image: Wz,
        minWidth: sz
      }) : (0, Kz.jsx)(oz.c, {
        name: Wz,
        className: "SelectedItemImage",
        style: {
          color: Oz
        }
      })
    }

    function pW(zz) {
      let {
        image: tz,
        minWidth: sz
      } = zz;
      const {
        gameNameWithVariation: Fz
      } = (0, Es.l)("connectedGame"), Wz = tz.endsWith(".jpg");
      return (0, Kz.jsx)("img", {
        className: Xz()({
          ShopPixelImage: !Wz
        }),
        style: {
          width: `${Wz?1.6*sz:sz}rem`,
          height: "auto",
          fontSize: "1.25rem"
        },
        src: `/textures/games/${(0,hz.Tb)(Fz)}/${tz}`,
        alt: tz,
        draggable: !1
      })
    }

    function fW(zz) {
      let {
        item: tz,
        cost: sz,
        currencyAmounts: Fz
      } = zz;
      const Wz = !isNaN(sz) && 0 !== sz && SW(Fz, tz.currency);
      let Xz = null;
      return tz.buyButtonText ? Xz = tz.buyButtonText : Wz ? (Xz = sz, tz.sell && (Xz = -1 * sz), Xz = Xz.toString()) : 0 === sz ? Xz = "Free" : tz.isRewardedAd && (Xz = "Watch ad"), (0, Lt.G)(Xz) || " " === Xz ? null : (0, Kz.jsxs)("div", {
        className: "BuyItemCostAndIcon",
        children: [Wz && (0, Kz.jsx)("div", {
          style: {
            color: Fz[tz.currency].iconColour
          },
          className: "BuyItemIcon",
          children: (0, Kz.jsx)(FX, {
            iconName: Fz[tz.currency].icon
          })
        }), (0, Kz.jsx)("div", {
          className: "BuyItemCost",
          children: (0, Kz.jsx)(ZF.c, {
            text: Xz
          })
        })]
      })
    }

    function EW(zz) {
      let {
        item: tz,
        currInput: sz,
        updateInput: Wz,
        onSubmit: Xz
      } = zz;
      const {
        t: oz
      } = (0, Oz.B)(), vz = (0, Fz.useRef)(null);
      if ((0, Fz.useEffect)((() => {
          const zz = vz.current;
          zz && zz.value !== sz && document.activeElement !== zz && (zz.value = null !== sz && void 0 !== sz ? sz : "")
        }), [sz]), !tz.userInput) return null;
      let Uz = tz.userInput;
      if (Hz.featureFlags.sanitizeShopInput && "text" === tz.userInput.type && (Uz = {
          type: "number",
          placeholderText: "Numbers Only"
        }), "text" === Uz.type || "number" === Uz.type) {
        var uz, Nz;
        console.assert(void 0 !== sz, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(tz)}`);
        const zz = "text" === Uz.type && Uz.wordCharsOnly;
        return (0, Kz.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputTextWrapper",
          children: (0, Kz.jsx)(Yz.d, {
            className: "ShopItemUserInputText",
            placeholderText: oz(Uz.placeholderText),
            defaultValue: sz,
            domRef: vz,
            onValueChange: (tz, sz) => {
              !0 === zz && (tz = (0, cF.mb)(tz)), vz.current.value = tz, Wz(tz)
            },
            onEnter: Xz,
            type: Uz.type
          }, (null !== (uz = Uz.initialValue) && void 0 !== uz ? uz : "") + (null !== (Nz = Uz.placeholderText) && void 0 !== Nz ? Nz : ""))
        })
      }
      if ("dropdown" === Uz.type) {
        console.assert(void 0 !== sz, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(tz)}`);
        const zz = Uz.autoSubmit;
        return (0, Kz.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputDropdown",
          children: (0, Kz.jsx)(Yt.d, {
            options: Uz.dropdownOptions.map((zz => (0, JF.e)(zz))),
            value: sz,
            onChange: tz => {
              let {
                value: sz
              } = tz;
              Wz(sz), zz && Xz(sz)
            }
          })
        })
      }
      return "player" === Uz.type ? (0, Kz.jsx)(zX, {
        userInput: Uz,
        currInput: sz,
        updateInput: Wz
      }) : "color" === Uz.type ? (0, Kz.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputColor",
        children: (0, Kz.jsx)("input", {
          type: "color",
          value: sz,
          onChange: zz => {
            Wz(zz.target.value)
          }
        })
      }) : null
    }

    function zX(zz) {
      let {
        userInput: tz,
        currInput: sz,
        updateInput: Fz
      } = zz;
      const Wz = (0, Es.l)("players"),
        Xz = (0, Es.l)("hiddenPlayerNames"),
        Oz = (0, JF.i)(Wz.ids, Wz.localId, tz);
      return (0, Kz.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputDropdown",
        children: (0, Kz.jsx)(Yt.d, {
          options: Oz.map((zz => {
            const {
              name: tz
            } = Wz.byId[zz];
            return {
              value: zz,
              label: null === tz ? "" : (0, TF.g)(tz, Xz)
            }
          })),
          value: sz,
          onChange: zz => {
            let {
              value: tz
            } = zz;
            Fz(tz)
          }
        })
      })
    }

    function tX(zz) {
      let {
        ids: tz
      } = zz;
      return tz
    }

    function sX(zz) {
      let {
        localId: tz
      } = zz;
      return tz
    }

    function FX(zz) {
      let {
        iconName: tz
      } = zz;
      return Bz.gameBridge.lookup("isItemName", tz) ? (0, Kz.jsx)(eF.c, {
        itemName: tz,
        amount: 1
      }) : (0, Kz.jsx)(oz.c, {
        name: tz,
        className: "2x"
      })
    }
    var WX = sz(1571);
    const XX = (0, sz(1375).g)((zz => zz.PadLobbyShortcuts)),
      OX = (0, Fz.lazy)((() => Promise.resolve().then((() => sz(4304))).then((zz => ({
        default: zz.Lobbyleaderboard
      })))));

    function oX(zz) {
      let {
        show: tz
      } = zz;
      return tz ? (0, Kz.jsxs)(Kz.Fragment, {
        children: [(0, Kz.jsx)(XX, {}), (0, Kz.jsx)(Fz.Suspense, {
          fallback: (0, Kz.jsx)("div", {
            className: "CharacterCustomisationLoading",
            children: (0, Kz.jsx)(xz.d, {})
          }),
          children: (0, Kz.jsx)(OX, {})
        })]
      }) : null
    }
    var vX = sz(1518),
      UX = sz(2754),
      KX = sz(1664),
      uX = sz(2800),
      NX = sz(2483),
      bX = sz(1464),
      wX = sz(1423),
      DX = sz(2728),
      gX = sz(2746),
      HX = sz(2225);
    const BX = "storeRecentGiftRecipients",
      PX = new Map;

    function rX() {
      try {
        const zz = qt.f.getItem(BX);
        return Array.isArray(zz) ? zz.filter((zz => "string" === typeof(null === zz || void 0 === zz ? void 0 : zz.name) && zz.name.length > 0)).map((zz => ({
          name: zz.name,
          cosmetics: zz.cosmetics && "object" === typeof zz.cosmetics ? zz.cosmetics : null
        }))) : []
      } catch {
        return []
      }
    }

    function YX(zz) {
      var tz;
      const [sz, Wz] = (0, Fz.useState)(""), [Xz, Oz] = (0, Fz.useState)("search"), [oz, vz] = (0, Fz.useState)(null), [Uz, Kz] = (0, Fz.useState)(null), uz = (0, Fz.useRef)(null), Nz = (0, Fz.useRef)(null);
      (0, Fz.useEffect)((() => () => {
        uz.current && clearTimeout(uz.current)
      }), []);
      const bz = null !== (tz = null === oz || void 0 === oz ? void 0 : oz.name) && void 0 !== tz ? tz : null;

      function wz() {
        uz.current && (clearTimeout(uz.current), uz.current = null)
      }(0, Fz.useEffect)((() => {
        if (null === bz || zz === Zz.NULL_USER_CONTEXT) return;
        const tz = bz.toLowerCase();
        if (tz === zz.getPlayerName().toLowerCase()) return void Kz({
          name: bz,
          result: {
            giftRecipientFound: !1,
            giftRecipientError: "store:giftRecipientIsYou"
          }
        });
        const sz = PX.get(tz);
        if (sz) return void Kz({
          name: bz,
          result: sz
        });
        let Fz = !1;
        return async function(zz, tz) {
          try {
            const sz = await (0, Zz.postJsonWithMetricsCookiesAndJsonResponse)(`${Gz.clientSideServerUrls.indexUrl}/index/store/gift-recipient`, {
              giftRecipientName: tz
            }, {
              retries: 1
            }, zz.getMetricsCookies());
            if ("boolean" !== typeof(null === sz || void 0 === sz ? void 0 : sz.giftRecipientFound)) throw new Error(`Unexpected gift recipient lookup response: ${JSON.stringify(sz)}`);
            return sz
          } catch (sz) {
            return console.error("Failed to look up gift recipient:", sz), {
              giftRecipientFound: !1,
              giftRecipientError: "store:giftRecipientLookupFailed"
            }
          }
        }(zz, bz).catch((zz => (console.error("Gift recipient lookup failed:", zz), {
          giftRecipientFound: !1,
          giftRecipientError: "store:giftRecipientLookupFailed"
        }))).then((zz => {
          !0 !== zz.giftRecipientFound && "store:giftRecipientLookupFailed" === zz.giftRecipientError || PX.set(tz, zz), Fz || Kz({
            name: bz,
            result: zz
          })
        })), () => {
          Fz = !0
        }
      }), [bz, zz]);
      const Dz = (0, Fz.useMemo)((() => {
        const zz = sz.trim();
        if (!zz) return {
          status: "none"
        };
        if (!oz || oz.name !== zz || (null === Uz || void 0 === Uz ? void 0 : Uz.name) !== oz.name) return {
          status: "pending",
          name: zz
        };
        const tz = Uz.result;
        return !1 === tz.giftRecipientFound ? {
          status: "error",
          name: oz.name,
          error: tz.giftRecipientError
        } : {
          status: "found",
          name: tz.giftRecipientName,
          ownedPacks: tz.giftRecipientOwnedPacks,
          hasSuperRank: tz.giftRecipientHasSuperRank,
          isSubscriber: tz.giftRecipientIsSubscriber
        }
      }), [sz, oz, Uz]);
      (0, Fz.useEffect)((() => {
        "found" === Dz.status && "typed" === (null === oz || void 0 === oz ? void 0 : oz.source) && Nz.current !== Dz.name && (Nz.current = Dz.name, (0, fz.reportAnalyticsClick)({
          id: "store.gift_recipient",
          value: "typed"
        }))
      }), [Dz, oz]);
      const gz = (null === Uz || void 0 === Uz ? void 0 : Uz.name) === (null === oz || void 0 === oz ? void 0 : oz.name) ? null === Uz || void 0 === Uz ? void 0 : Uz.result : null,
        Hz = !0 === (null === gz || void 0 === gz ? void 0 : gz.giftRecipientFound) ? gz.giftRecipientCosmetics : null;
      return {
        query: sz,
        via: Xz,
        recipient: Dz,
        recipientCosmetics: Hz,
        type: function(zz) {
          Wz(zz), Oz("search"), wz();
          const tz = zz.trim();
          tz ? uz.current = setTimeout((() => {
            vz({
              name: tz,
              source: "typed"
            })
          }), 400) : vz(null)
        },
        choose: function(zz, tz) {
          wz(), Wz(zz), Oz("typed" === tz ? "search" : "prefilled" === tz ? "prefilled" : "suggestion"), vz({
            name: zz,
            source: tz
          }), "typed" !== tz && "prefilled" !== tz && (0, fz.reportAnalyticsClick)({
            id: "store.gift_recipient",
            value: tz
          })
        },
        clear: function() {
          wz(), Wz(""), Oz("search"), vz(null)
        },
        recordGift: function(zz, tz) {
          ! function(zz) {
            PX.delete(zz.toLowerCase())
          }(zz), Kz((sz => {
            if (!sz || sz.name.toLowerCase() !== zz.toLowerCase() || !0 !== sz.result.giftRecipientFound || "superRank" === tz) return sz;
            const Fz = sz.result.giftRecipientOwnedPacks;
            return {
              ...sz,
              result: {
                ...sz.result,
                giftRecipientOwnedPacks: Fz.includes(tz) ? Fz : [...Fz, tz]
              }
            }
          }))
        }
      }
    }
    var xX = sz(2223),
      mX = sz(4312),
      JX = sz(263),
      IX = sz(2844);
    const CX = ["pointerdown", "pointermove", "keydown", "wheel", "touchstart", "scroll", "blur", "focus"];
    var eX = sz(2181),
      ZX = sz(571),
      GX = sz(2257),
      TX = sz(2391);

    function cX(zz) {
      let {
        cosmetics: tz
      } = zz;
      return (0, Kz.jsx)("span", {
        className: "StoreRecipientAvatar",
        children: (0, Kz.jsx)(GX.e, {
          cosmetics: tz
        })
      })
    }

    function jX(zz, tz) {
      var sz, Fz;
      const Wz = null !== (sz = zz.friend) && void 0 !== sz ? sz : {
        isError: !1,
        name: zz.name,
        ranks: [],
        cosmetics: null !== (Fz = zz.cosmetics) && void 0 !== Fz ? Fz : {},
        nameColour: ZX.e,
        location: {
          status: "noGamePlayed"
        }
      };
      return tz ? {
        ...Wz,
        cosmetics: tz
      } : Wz
    }

    function AX(zz) {
      let {
        recipient: tz
      } = zz;
      return "pending" === tz.status ? (0, Kz.jsx)("span", {
        className: "StoreRecipientStatus",
        children: (0, Kz.jsx)(xz.d, {})
      }) : "found" === tz.status ? (0, Kz.jsx)(oz.c, {
        name: "check",
        className: "StoreRecipientStatus StoreRecipientStatusFound"
      }) : null
    }

    function yX(zz) {
      var tz;
      let {
        selfName: sz,
        giftRecipient: Wz,
        suggestionsVersion: vz,
        pulseSignal: Uz,
        disabled: uz
      } = zz;
      const {
        t: Nz
      } = (0, Oz.B)(), bz = (0, Lz.k)(), wz = (0, Fz.useRef)(null), Dz = (0, Fz.useRef)(null), {
        query: Bz,
        via: Pz,
        recipient: rz,
        recipientCosmetics: xz
      } = Wz, mz = (0, HX.p)(Bz), Jz = (0, Fz.useMemo)((() => {
        const zz = Hz.featureFlags.useSocialFeatures ? bz.friends.filter((zz => !zz.isError)) : [];
        return (0, HX.i)({
          onlineFriends: (0, Lz.g)(zz),
          recentRecipients: rX(),
          friends: zz,
          selfName: sz,
          max: 8
        })
      }), [bz.friends, sz, vz]), Iz = Bz.trim().toLowerCase(), Cz = "search" !== Pz && Iz ? Jz.find((zz => zz.name.toLowerCase() === Iz)) : void 0, ez = Cz && "prefilled" === Pz ? [Cz, ...Jz.filter((zz => zz !== Cz))] : Jz, Zz = "" !== Iz && !Cz, Gz = Zz ? Bz : "", Tz = ez.length > 0;
      (0, Fz.useEffect)((() => {
        wz.current && wz.current.value !== Gz && (wz.current.value = Gz)
      }), [Gz]), (0, Fz.useEffect)((() => {
        wz.current && (wz.current.disabled = uz)
      }), [uz, Uz]);
      const cz = (0, Fz.useRef)(0);

      function Az() {
        "self" !== mz && (0, fz.reportAnalyticsClick)({
          id: "store.mode",
          value: "self"
        }), Wz.clear()
      }

      function yz(zz) {
        var tz, sz;
        if (uz) return;
        if (" " === zz.key || "Enter" === zz.key) return zz.preventDefault(), void zz.currentTarget.click();
        const Fz = Array.from(null !== (tz = null === (sz = Dz.current) || void 0 === sz ? void 0 : sz.querySelectorAll("[role=radio]")) && void 0 !== tz ? tz : []),
          Wz = Fz.indexOf(zz.currentTarget);
        let Xz;
        "ArrowRight" === zz.key || "ArrowDown" === zz.key ? Xz = Fz[(Wz + 1) % Fz.length] : "ArrowLeft" === zz.key || "ArrowUp" === zz.key ? Xz = Fz[(Wz - 1 + Fz.length) % Fz.length] : "Home" === zz.key ? Xz = Fz[0] : "End" === zz.key && (Xz = Fz[Fz.length - 1]), Xz && (zz.preventDefault(), Xz.focus(), Xz.click())
      }(0, Fz.useEffect)((() => {
        var zz;
        Uz > cz.current && !uz && (cz.current = Uz, null === (zz = wz.current) || void 0 === zz || zz.focus())
      }), [Uz, uz]);
      const Mz = "self" === mz,
        dz = null !== (tz = null === Cz || void 0 === Cz ? void 0 : Cz.name) && void 0 !== tz ? tz : null,
        hz = "error" === rz.status ? rz.error : null,
        Qz = "store:giftRecipientLookupFailed" === hz;
      return (0, Kz.jsxs)("div", {
        className: Xz()("StoreRecipientStrip", {
          StoreRecipientStripDisabled: uz,
          StoreRecipientStripNoChips: !Tz
        }),
        children: [(0, Kz.jsx)("span", {
          className: "StoreRecipientLabel",
          "aria-hidden": !0,
          children: Nz("store:buyingFor")
        }), (0, Kz.jsxs)("div", {
          ref: Dz,
          className: "StoreRecipientRadios",
          role: "radiogroup",
          "aria-label": Nz("store:whoIsItFor"),
          children: [(0, Kz.jsxs)("div", {
            role: "radio",
            "data-pad-focusable": !0,
            "aria-checked": Mz,
            tabIndex: uz || !Mz && null !== dz ? -1 : 0,
            className: Xz()("StoreRecipientMe", {
              StoreRecipientChecked: Mz
            }),
            onClick: () => {
              uz || Az()
            },
            onKeyDown: yz,
            children: [(0, Kz.jsx)(oz.c, {
              name: "user"
            }), " ", Nz("store:me")]
          }), Tz && (0, Kz.jsx)("div", {
            className: "StoreRecipientChips",
            children: ez.map((zz => {
              const tz = zz === Cz;
              return (0, Kz.jsx)("div", {
                role: "radio",
                "data-pad-focusable": !0,
                "aria-checked": tz,
                tabIndex: !uz && tz ? 0 : -1,
                title: zz.name,
                className: Xz()("StoreRecipientChip", {
                  StoreRecipientChecked: tz
                }),
                onClick: () => {
                  uz || function(zz) {
                    "gift" !== mz && (0, fz.reportAnalyticsClick)({
                      id: "store.mode",
                      value: "gift"
                    }), Wz.choose(zz.name, zz.kind)
                  }(zz)
                },
                onKeyDown: yz,
                children: (0, Kz.jsx)(TX.g, {
                  playerSocialPreview: jX(zz, tz ? xz : null),
                  opensProfileCard: !1,
                  isFriend: null !== zz.friend,
                  hideFriendBadge: !0,
                  showLocation: null !== zz.friend,
                  status: null === zz.friend ? null : void 0,
                  trailing: tz ? (0, Kz.jsx)(AX, {
                    recipient: rz
                  }) : void 0
                })
              }, zz.name)
            }))
          })]
        }), (0, Kz.jsxs)("div", {
          className: Xz()("StoreRecipientSearch", {
            StoreRecipientChecked: Zz,
            StoreRecipientSearchPulse: Uz > 0 && !Zz,
            StoreRecipientSearchError: null !== hz && !Qz
          }),
          onClick: () => {
            var zz;
            null === (zz = wz.current) || void 0 === zz || zz.focus()
          },
          children: [Zz && "found" === rz.status && xz && (0, Kz.jsx)(cX, {
            cosmetics: xz
          }), !(Zz && "found" === rz.status && xz) && (0, Kz.jsx)(oz.c, {
            name: "magnifying-glass",
            className: "StoreRecipientSearchIcon"
          }), (0, Kz.jsx)(Yz.d, {
            className: "StoreRecipientSearchInput",
            domRef: wz,
            placeholderText: Nz("store:searchName"),
            defaultValue: Gz,
            maxLength: jz.i,
            onValueChange: function(zz) {
              "gift" !== mz && zz.trim() && (0, fz.reportAnalyticsClick)({
                id: "store.mode",
                value: "gift"
              }), Wz.type(zz)
            },
            onEnter: () => {
              var zz;
              const tz = null === (zz = wz.current) || void 0 === zz ? void 0 : zz.value.trim();
              tz && Wz.choose(tz, "typed")
            },
            blurOnEnter: !0
          }), Zz && (0, Kz.jsx)(AX, {
            recipient: rz
          }), Zz && (0, Kz.jsx)("div", {
            ...(0, gz.T)({
              disabled: uz
            }),
            "aria-label": Nz("store:clearRecipient"),
            title: Nz("store:clearRecipient"),
            className: "StoreRecipientClear",
            onClick: zz => {
              zz.stopPropagation(), uz || Az()
            },
            children: (0, Kz.jsx)(oz.c, {
              name: "xmark"
            })
          })]
        }, Uz), hz && (0, Kz.jsx)("div", {
          className: Xz()("StoreRecipientPopover", {
            StoreRecipientPopoverSoft: Qz
          }),
          role: "status",
          children: Nz(hz)
        })]
      })
    }
    var MX = sz(2214),
      dX = sz(2157),
      hX = sz(3256),
      QX = sz(2849),
      kX = sz(2189);
    const iX = sz.p + "static/media/superRankPreviewPoster.e64783181b692cc31e08.webp";

    function LX() {
      (0, kX.f)(iX, {
        lowPriority: !1
      })
    }

    function lX(zz) {
      let {
        onBack: tz,
        cta: sz,
        recipient: Wz,
        afterCta: Xz
      } = zz;
      const {
        t: vz
      } = (0, Oz.B)(), [Uz, uz] = (0, Fz.useState)("starting"), Nz = (0, Fz.useRef)(null), bz = (0, Tt.d)(), wz = (0, Fz.useRef)(null), Dz = (0, Fz.useCallback)((() => {
        const zz = Nz.current;
        null !== zz.error && zz.load();
        const tz = zz.play();
        wz.current = tz, tz.catch((zz => {
          (0, hX.e)("Failed to play Super Rank video", zz), bz.current && wz.current === tz && uz("failed")
        }))
      }), [bz]);
      return (0, Fz.useEffect)((() => {
        const zz = Nz.current;
        let tz;

        function sz() {
          clearTimeout(tz), tz = setTimeout(Dz, 3e3)
        }
        return Dz(), zz.addEventListener("ended", sz), () => {
          clearTimeout(tz), zz.removeEventListener("ended", sz)
        }
      }), [Dz]), (0, Kz.jsxs)("div", {
        className: "StoreSuperRankDetail",
        children: [(0, Kz.jsxs)("div", {
          className: "StoreDetailHeader",
          children: [(0, Kz.jsx)(gz.e, {
            className: "StoreDetailBackButton",
            onClick: tz,
            padBack: !0,
            children: vz("general:back")
          }), (0, Kz.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, Kz.jsx)(oz.c, {
              name: "bolt"
            }), " ", vz("homePage:superRank")]
          }), Wz]
        }), (0, Kz.jsxs)("div", {
          className: "StoreSuperRankDetailBody",
          children: [(0, Kz.jsxs)("div", {
            className: "StoreSuperRankVideo",
            children: [(0, Kz.jsx)("video", {
              ref: Nz,
              src: `${Gz.clientSideServerUrls.staticUrl}/videos/SuperRankPreview.mp4`,
              poster: iX,
              muted: !0,
              playsInline: !0,
              controls: "playing" === Uz,
              onPlaying: () => {
                uz("playing")
              },
              onError: () => {
                uz("failed")
              }
            }), ("failed" === Uz || "loading" === Uz) && (0, Kz.jsx)("div", {
              className: "StoreSuperRankPlay",
              children: (0, Kz.jsx)(gz.h, {
                ariaLabel: vz("general:play"),
                loading: "loading" === Uz,
                onClick: () => {
                  uz("loading"), Dz()
                },
                touchPressOn: "pointerup",
                children: (0, Kz.jsx)(oz.c, {
                  name: "play"
                })
              })
            })]
          }), (0, Kz.jsxs)("div", {
            className: "StoreSuperRankDetailSide",
            children: [(0, Kz.jsx)("div", {
              className: "StoreSuperRankDetailTable",
              children: (0, Kz.jsx)(QX.e, {})
            }), (0, Kz.jsxs)("div", {
              className: "StoreTileActions",
              children: [sz, Xz]
            })]
          })]
        })]
      })
    }
    var nX = sz(2411),
      aX = sz(3208),
      qX = sz(2835),
      SX = sz(2840);
    const VX = [ZX.v.yellow, ZX.v.green, ZX.v.aqua, ZX.v.blue, ZX.v.purple, ZX.v.red];

    function RX(zz) {
      return "needsRecipient" === zz || "lookingUp" === zz || "gift" === zz || "recipientOwns" === zz || "recipientSharesOwned" === zz || "recipientSubscribed" === zz
    }

    function pX(zz) {
      const {
        onKeyDown: tz,
        ...sz
      } = (0, gz.T)();
      return {
        ...sz,
        "aria-label": zz,
        onKeyDown: zz => {
          zz.target === zz.currentTarget && (null === tz || void 0 === tz || tz(zz))
        }
      }
    }

    function fX(zz) {
      let {
        text: tz
      } = zz;
      return (0, Kz.jsx)("span", {
        className: "StoreRainbowText",
        children: Array.from(tz).map(((zz, tz) => (0, Kz.jsx)("span", {
          style: {
            color: VX[tz % VX.length]
          },
          children: zz
        }, tz)))
      })
    }
    const EX = {
      recipientOwns: "store:alreadyOwns",
      sharesOwned: "store:sharesOwned",
      recipientSharesOwned: "store:recipientSharesOwned",
      subscribed: "store:subscribed",
      recipientSubscribed: "store:recipientSubscribed"
    };

    function zO(zz) {
      let {
        state: tz,
        item: sz,
        price: Fz,
        busy: Wz,
        highlight: vz = !1,
        onAct: Uz,
        onNeedRecipient: uz,
        onLogin: Nz
      } = zz;
      const {
        t: bz
      } = (0, Oz.B)(), wz = "superRank" === sz ? yz.f.product.days : null, Dz = zz => null === wz ? bz(zz ? "general:gift" : "general:buy") : bz(zz ? "store:giftDays" : "store:buyDays", {
        days: wz
      }), Hz = (zz, tz) => (0, Kz.jsxs)(Kz.Fragment, {
        children: [tz && (0, Kz.jsx)("span", {
          className: "StoreCtaIcon",
          children: tz
        }), null === zz && (0, Kz.jsx)("span", {
          className: "StoreCtaLabel StoreCtaLabelPending"
        }), null !== zz && (0, Kz.jsx)("span", {
          className: "StoreCtaLabel",
          title: zz,
          children: zz
        }), (0, Kz.jsxs)("span", {
          className: "StoreCtaPrice",
          children: ["\xb7", (0, Kz.jsx)(dX.e, {
            amount: Fz
          })]
        })]
      });
      let Bz;
      switch (tz) {
        case "pending":
          Bz = (0, Kz.jsx)(gz.p, {
            className: "StoreCtaButton",
            disabled: !0,
            children: Hz(null)
          });
          break;
        case "login":
          Bz = (0, Kz.jsx)(gz.p, {
            className: "StoreCtaButton",
            onClick: Nz,
            children: Hz(Dz(!1))
          });
          break;
        case "owned":
          Bz = (0, Kz.jsx)(gz.l, {
            className: "StoreCtaButton",
            onClick: () => {
              Jz.b.set({
                openEverythingMenuName: Ut.r.CUSTOMISATION
              })
            },
            children: (0, Kz.jsxs)("span", {
              className: "StoreCtaLabel",
              children: [(0, Kz.jsx)(oz.c, {
                name: "shirt"
              }), " ", bz("store:equip")]
            })
          });
          break;
        case "recipientOwns":
        case "sharesOwned":
        case "recipientSharesOwned":
        case "subscribed":
        case "recipientSubscribed":
          Bz = (0, Kz.jsx)(gz.p, {
            className: "StoreCtaButton",
            disabled: !0,
            children: (0, Kz.jsx)("span", {
              className: "StoreCtaLabel",
              children: bz(EX[tz])
            })
          });
          break;
        case "needsRecipient":
        case "lookingUp":
        case "gift":
          Bz = (0, Kz.jsx)(gz.p, {
            className: "StoreCtaButton",
            disabled: "needsRecipient" === tz || null === Fz,
            loading: "lookingUp" === tz || Wz,
            onClick: Uz,
            analyticsClick: {
              id: "store.gift",
              value: sz
            },
            children: Hz(Dz(!0), HX.e)
          });
          break;
        case "buy":
        case "recharge":
          Bz = (0, Kz.jsx)(gz.p, {
            className: "StoreCtaButton",
            loading: Wz,
            disabled: null === Fz,
            onClick: Uz,
            analyticsClick: {
              id: "store.buy",
              value: sz
            },
            children: Hz(Dz(!1))
          })
      }
      return (0, Kz.jsx)("div", {
        className: Xz()("StoreCta", {
          StoreCtaHighlight: vz
        }),
        onClick: zz => {
          zz.stopPropagation(), "needsRecipient" === tz && uz()
        },
        children: Bz
      })
    }

    function tO() {
      const {
        t: zz
      } = (0, Oz.B)();
      return (0, Kz.jsxs)("ul", {
        className: "StorePerks",
        children: [(0, Kz.jsxs)("li", {
          children: [(0, Kz.jsx)(oz.c, {
            name: "check"
          }), (0, Kz.jsx)(fX, {
            text: zz("store:colourfulNames")
          })]
        }), (0, Kz.jsxs)("li", {
          children: [(0, Kz.jsx)(oz.c, {
            name: "check"
          }), zz("store:perkCapes")]
        }), (0, Kz.jsxs)("li", {
          children: [(0, Kz.jsx)(oz.c, {
            name: "check"
          }), zz("store:perkNoAdverts")]
        }), (0, Kz.jsxs)("li", {
          children: [(0, Kz.jsx)(oz.c, {
            name: "check"
          }), zz("store:perkFriends", {
            count: (0, Rz.d)(["super"])
          })]
        })]
      })
    }

    function sO(zz) {
      let {
        daysLeft: tz,
        totalDays: sz,
        urgent: Fz
      } = zz;
      const {
        t: Wz
      } = (0, Oz.B)(), oz = sz > 0 ? Math.min(1, Math.max(.03, tz / sz)) : 1;
      return (0, Kz.jsxs)("div", {
        className: Xz()("StoreSuperRankMeterArea", {
          StoreSuperRankMeterUrgent: Fz
        }),
        children: [(0, Kz.jsx)("span", {
          className: "StoreSuperRankDaysLeft",
          children: 1 === tz ? Wz("store:oneDayLeft") : Wz("store:daysLeft", {
            days: tz
          })
        }), (0, Kz.jsx)("div", {
          className: "StoreSuperRankMeter",
          children: (0, Kz.jsx)("i", {
            style: {
              width: 100 * oz + "%"
            }
          })
        })]
      })
    }

    function FO(zz) {
      let {
        state: tz,
        urgent: sz,
        daysLeft: Fz,
        totalDays: Wz,
        recipientHasSuperRank: vz,
        busy: Uz,
        highlight: uz,
        onOpen: Nz,
        onAct: bz,
        onNeedRecipient: wz,
        onLogin: Dz
      } = zz;
      const {
        t: gz
      } = (0, Oz.B)(), Hz = RX(tz), {
        days: Bz
      } = yz.f.product, Pz = gz("store:recipientHasSuperRank", {
        giftDays: Bz
      }), rz = Sz("subscribed" === tz);
      return (0, Kz.jsxs)("div", {
        className: Xz()("StoreTile StoreSuperRankTile", {
          StoreTileGift: Hz,
          StoreSuperRankTileUrgent: "recharge" === tz && sz,
          StoreSuperRankTileWithChip: vz,
          StoreSuperRankTileGiftReady: "gift" === tz
        }),
        ...pX(gz("homePage:superRank")),
        "data-store-item": "superRank",
        onPointerEnter: LX,
        onFocus: LX,
        onClick: Nz,
        children: [(0, Kz.jsx)("div", {
          className: "StoreSuperRankArt",
          style: {
            backgroundImage: `url(${eX.e})`
          }
        }), Hz && (0, Kz.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, Kz.jsxs)("div", {
          className: "StoreTileContent",
          children: [vz && (0, Kz.jsx)("span", {
            className: "StoreChip StoreChipGift",
            title: Pz,
            children: Pz
          }), (0, Kz.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, Kz.jsx)(oz.c, {
              name: "bolt"
            }), " ", gz("homePage:superRank")]
          }), Hz && (0, Kz.jsx)("div", {
            className: "StoreTilePitch",
            children: gz("store:giftPitch", {
              days: Bz
            })
          }), "recharge" === tz && (0, Kz.jsx)(sO, {
            daysLeft: Fz,
            totalDays: Wz,
            urgent: sz
          }), rz && (0, Kz.jsx)("div", {
            className: "StoreSuperRankMeterArea",
            children: (0, Kz.jsx)("span", {
              className: "StoreSuperRankDaysLeft",
              children: rz
            })
          }), (0, Kz.jsx)(tO, {}), (0, Kz.jsxs)("div", {
            className: "StoreTileActions",
            children: [(0, Kz.jsx)(zO, {
              state: tz,
              item: "superRank",
              price: yz.f.price,
              busy: Uz,
              highlight: uz,
              onAct: bz,
              onNeedRecipient: wz,
              onLogin: Dz
            }), "needsRecipient" === tz && (0, Kz.jsx)("span", {
              className: "StoreTileNote StoreTileNoteGift",
              children: gz("store:pickRecipientFirst")
            }), "recharge" === tz && sz && (0, Kz.jsx)("span", {
              className: "StoreTileNote StoreSuperRankEnding",
              children: 1 === Fz ? gz("store:endsInOneDay") : gz("store:endsInDays", {
                days: Fz
              })
            })]
          })]
        })]
      })
    }
    const WO = {
      common: "StorePackTileCommon",
      rare: "StorePackTileRare",
      epic: "StorePackTileEpic",
      legendary: "StorePackTileLegendary",
      mythic: "StorePackTileMythic"
    };

    function XO(zz) {
      var tz;
      let {
        pack: sz,
        state: Wz,
        busy: vz,
        onOpen: Uz,
        onAct: uz,
        onNeedRecipient: Nz,
        onLogin: bz
      } = zz;
      const {
        t: wz
      } = (0, Oz.B)(), Dz = vX.e[sz], gz = DX.k[sz], Hz = (0, eX.l)(sz), Bz = (0, Fz.useRef)(null);
      (0, qX.n)(sz, Bz);
      const Pz = RX(Wz),
        rz = null !== (tz = Dz.displayName) && void 0 !== tz ? tz : sz,
        Yz = (0, aX.e)((() => {
          (0, nX.f)();
          const zz = (0, qX.g)(sz);
          void 0 !== zz && (0, kX.f)((0, qX.e)(zz))
        })),
        [xz] = (0, Fz.useState)(IX.f);
      return (0, Kz.jsxs)("div", {
        className: Xz()("StoreTile StorePackTile", WO[Dz.tier], {
          StorePackTileOwned: "owned" === Wz,
          StorePackTileRecipientOwns: "recipientOwns" === Wz,
          StoreTileGift: Pz
        }),
        ...pX(rz),
        ref: Bz,
        "data-store-item": sz,
        onClick: Uz,
        onPointerMove: zz => {
          "mouse" !== zz.pointerType || 0 === zz.movementX && 0 === zz.movementY || xz || Yz.start()
        },
        onPointerLeave: Yz.cancel,
        children: [gz && (0, Kz.jsx)(gz, {}), (0, Kz.jsx)("div", {
          className: "StorePackCharacters",
          children: Hz.map((zz => (0, Kz.jsx)("div", {
            className: "StorePackCharacter",
            style: {
              backgroundImage: `url(${(0,eX.i)(zz)})`
            }
          }, zz)))
        }), (0, Kz.jsx)("div", {
          className: "StoreTileScrim"
        }), Pz && (0, Kz.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, Kz.jsxs)("div", {
          className: "StoreTileContent",
          children: [(0, Kz.jsx)("div", {
            className: "StoreTileTitle",
            children: rz
          }), (0, Kz.jsxs)("div", {
            className: "StoreTileMeta",
            children: [(0, Kz.jsx)(SX.b, {
              tier: Dz.tier
            }), " \xb7 ", wz("store:itemCount", {
              count: (0, MX.c)(sz)
            }), "owned" === Wz && (0, Kz.jsxs)("span", {
              className: "StoreTileOwned",
              children: [" \xb7 ", (0, Kz.jsx)(oz.c, {
                name: "check"
              }), " ", wz("general:owned")]
            })]
          }), (0, Kz.jsx)(zO, {
            state: Wz,
            item: sz,
            price: (0, yz.c)(sz),
            busy: vz,
            onAct: uz,
            onNeedRecipient: Nz,
            onLogin: bz
          })]
        })]
      })
    }
    var OO = sz(2809),
      oO = sz(1516),
      vO = sz(1430),
      UO = sz(3236);

    function KO() {
      return (0, Kz.jsx)("span", {
        className: "NewBadge",
        children: "NEW"
      })
    }
    var uO = sz(1314),
      NO = sz(1521),
      bO = sz(8891);

    function wO(zz) {
      let {
        character: tz,
        drawn: sz,
        onDrawn: Wz
      } = zz;
      const Oz = (0, Fz.useRef)(null),
        oz = (0, bO.c)(tz);
      return (0, Kz.jsx)("div", {
        className: Xz()("StoreCharacterLive", {
          StoreCharacterLiveDrawn: sz
        }),
        children: (0, Kz.jsx)(Fz.Suspense, {
          fallback: null,
          children: (0, Kz.jsx)(nX.b, {
            ref: Oz,
            framing: "store",
            turntableFromYaw: sz ? oz.yaw : null,
            onReady: () => {
              var zz, sz;
              null === (zz = Oz.current) || void 0 === zz || zz.setOrbit(oz), null === (sz = Oz.current) || void 0 === sz || sz.setAllCosmetics(NO.d[tz].cosmetics)
            },
            onDrawn: Wz
          })
        })
      })
    }
    const DO = {
        common: "StoreCharacterCardCommon",
        rare: "StoreCharacterCardRare",
        epic: "StoreCharacterCardEpic",
        legendary: "StoreCharacterCardLegendary",
        mythic: "StoreCharacterCardMythic"
      },
      gO = new Set(["wildSpirits"]);

    function HO(zz) {
      var tz;
      let {
        tile: sz,
        design: Wz,
        canGoLive: vz,
        live: Uz,
        busy: uz,
        highlight: Nz,
        onLiveStart: bz,
        onLiveEnd: wz,
        onOpen: Dz,
        onAct: gz,
        onNeedRecipient: Hz,
        onLogin: Bz
      } = zz;
      const {
        t: Pz
      } = (0, Oz.B)(), {
        pack: rz,
        state: Yz
      } = sz, xz = vX.e[rz], mz = (0, vX.i)(rz), Jz = (0, eX.j)(rz), Iz = DX.k[Jz], Cz = gO.has(Jz), {
        tier: ez
      } = xz, Zz = "legendary" === ez || "mythic" === ez, Gz = (0, Fz.useRef)(null);
      (0, uO.b)(Gz, "epic" === ez || Zz || Cz);
      const [Tz, jz] = (0, Fz.useState)(!1);
      return !Uz && Tz && jz(!1), (0, Kz.jsxs)("div", {
        ref: Gz,
        className: Xz()("StoreCharacterCard", `StoreCharacterCard${Wz}`, DO[ez], {
          StoreCharacterCardOwned: "owned" === Yz || "recipientOwns" === Yz,
          StoreCharacterCardGift: RX(Yz),
          StoreCharacterCardItem: void 0 === mz
        }),
        onPointerMove: zz => {
          "mouse" !== zz.pointerType || 0 === zz.movementX && 0 === zz.movementY || !vz || Uz || void 0 === mz || bz()
        },
        onPointerLeave: wz,
        children: [(0, Kz.jsx)("div", {
          className: "StoreCharacterBackdrop",
          children: Iz && (0, Kz.jsx)(Iz, {
            simple: !0
          })
        }), Zz && (0, Kz.jsx)("div", {
          className: "StoreCharacterRays"
        }), (0, Kz.jsxs)(cz.LinkPreserveSearch, {
          className: "StoreCharacterLink",
          to: (0, oO.h)({
            kind: "pack",
            pack: rz
          }),
          "data-store-item": rz,
          onClick: zz => {
            (0, vO.c)(zz) && (zz.preventDefault(), Dz())
          },
          children: [(0, Kz.jsxs)("div", {
            className: "StoreCharacterStage",
            children: [(0, Kz.jsx)("div", {
              className: "StoreCharacterHalo"
            }), (0, Kz.jsx)("div", {
              className: Xz()("StoreCharacterFigure", {
                StoreCharacterFigureCovered: Tz
              }),
              style: {
                backgroundImage: `url(${(0,eX.n)(rz)})`
              }
            }), Uz && void 0 !== mz && (0, Kz.jsx)(wO, {
              character: mz,
              drawn: Tz,
              onDrawn: () => {
                jz(!0)
              }
            })]
          }), (0, Kz.jsx)("div", {
            className: "StoreCharacterName",
            children: null !== (tz = xz.displayName) && void 0 !== tz ? tz : rz
          }), (0, Kz.jsx)(SX.b, {
            tier: ez,
            className: "StoreCharacterTier"
          })]
        }), (0, Kz.jsx)("div", {
          className: "StoreCharacterScrim"
        }), Cz && (0, Kz.jsx)("span", {
          className: "StoreCharacterNew",
          children: (0, Kz.jsx)(KO, {})
        }), "owned" === Yz && (0, Kz.jsx)("span", {
          className: "StoreCharacterOwned",
          title: Pz("general:owned"),
          "aria-label": Pz("general:owned"),
          children: (0, Kz.jsx)(oz.c, {
            name: "check"
          })
        }), (0, Kz.jsx)("div", {
          className: "StoreCharacterPlate",
          children: (0, Kz.jsx)(zO, {
            state: Yz,
            item: rz,
            price: (0, yz.c)(rz),
            busy: uz,
            highlight: Nz,
            onAct: gz,
            onNeedRecipient: Hz,
            onLogin: Bz
          })
        })]
      })
    }

    function BO(zz) {
      let {
        tiles: tz,
        busy: sz,
        highlightItem: Wz,
        onOpen: Xz,
        onAct: Oz,
        onNeedRecipient: oz,
        onLogin: vz
      } = zz;
      const Uz = (0, UO.m)("storeCharacterCardFoil"),
        uz = (0, UO.m)("storeCharacterCardSpotlight"),
        Nz = Uz ? "Foil" : uz ? "Spotlight" : "Showcase",
        [bz] = (0, Fz.useState)(IX.f),
        [wz, Dz] = (0, Fz.useState)(null);
      return (0, Kz.jsx)("div", {
        className: "StoreCharacterGrid",
        children: tz.map((zz => (0, Kz.jsx)(HO, {
          tile: zz,
          design: Nz,
          canGoLive: !bz,
          live: wz === zz.pack,
          busy: sz,
          highlight: Wz === zz.pack,
          onLiveStart: () => {
            Dz(zz.pack)
          },
          onLiveEnd: () => {
            Dz((tz => tz === zz.pack ? null : tz))
          },
          onOpen: () => {
            Xz(zz.pack)
          },
          onAct: () => {
            Oz(zz.pack)
          },
          onNeedRecipient: oz,
          onLogin: () => {
            vz(zz.pack)
          }
        }, zz.pack)))
      })
    }
    var PO = sz(8900);

    function rO(zz) {
      let {
        title: tz
      } = zz;
      return (0, Kz.jsx)("h2", {
        className: "StoreSectionDivider",
        children: (0, Kz.jsx)("span", {
          className: "StoreSectionDividerTitle",
          children: tz
        })
      })
    }

    function YO(zz) {
      let {
        mountAtOnce: tz,
        children: sz
      } = zz;
      const Wz = (0, Fz.useRef)(null),
        [Xz, Oz] = (0, Fz.useState)(tz),
        oz = (0, PO.e)();
      return (0, Fz.useLayoutEffect)((() => {
        const zz = Wz.current;
        zz && zz.getBoundingClientRect().top < zz.parentElement.getBoundingClientRect().bottom && Oz(!0)
      }), []), Xz || oz ? (0, Kz.jsx)(Kz.Fragment, {
        children: sz
      }) : (0, Kz.jsx)("div", {
        ref: Wz
      })
    }

    function xO(zz) {
      let {
        layout: tz,
        mountAtOnce: sz,
        bundleGift: Fz,
        superRankTotalDays: Wz,
        busy: Xz,
        highlightItem: oz,
        onOpen: vz,
        onAct: Uz,
        onNeedRecipient: uz,
        onLogin: Nz
      } = zz;
      const {
        t: bz
      } = (0, Oz.B)(), wz = tz.packs.filter((zz => void 0 === (0, vX.i)(zz.pack) && !(0, vX.m)(zz.pack))), Dz = tz.packs.filter((zz => void 0 !== (0, vX.i)(zz.pack))), gz = tz.packs.filter((zz => (0, vX.m)(zz.pack)));
      return (0, Kz.jsxs)(Kz.Fragment, {
        children: [(0, Kz.jsx)(OO.c, {
          className: "StoreSuperGems",
          gift: Fz,
          highlightSku: oz
        }), (0, Kz.jsx)(rO, {
          title: bz("store:rank")
        }), (0, Kz.jsx)(FO, {
          state: tz.superRank.state,
          urgent: tz.superRank.urgent,
          daysLeft: tz.superRankDaysLeft,
          totalDays: Wz,
          recipientHasSuperRank: tz.recipientHasSuperRank,
          busy: Xz,
          highlight: "superRank" === oz,
          onOpen: () => {
            vz("superRank")
          },
          onAct: () => {
            Uz("superRank")
          },
          onNeedRecipient: uz,
          onLogin: () => {
            Nz("superRank")
          }
        }), (0, Kz.jsxs)(YO, {
          mountAtOnce: sz,
          children: [(0, Kz.jsx)(rO, {
            title: bz("store:bundles")
          }), (0, Kz.jsx)("div", {
            className: "StorePackGrid",
            children: wz.map((zz => (0, Kz.jsx)(XO, {
              pack: zz.pack,
              state: zz.state,
              busy: Xz,
              onOpen: () => {
                vz(zz.pack)
              },
              onAct: () => {
                Uz(zz.pack)
              },
              onNeedRecipient: uz,
              onLogin: () => {
                Nz(zz.pack)
              }
            }, zz.pack)))
          }), (0, Kz.jsxs)(YO, {
            mountAtOnce: sz,
            children: [(0, Kz.jsx)(rO, {
              title: bz("store:characters")
            }), (0, Kz.jsx)(BO, {
              tiles: Dz,
              busy: Xz,
              highlightItem: oz,
              onOpen: vz,
              onAct: Uz,
              onNeedRecipient: uz,
              onLogin: Nz
            }), gz.length > 0 && (0, Kz.jsxs)(Kz.Fragment, {
              children: [(0, Kz.jsx)(rO, {
                title: bz("store:premiumItems")
              }), (0, Kz.jsx)(BO, {
                tiles: gz,
                busy: Xz,
                highlightItem: oz,
                onOpen: vz,
                onAct: Uz,
                onNeedRecipient: uz,
                onLogin: Nz
              })]
            })]
          })]
        })]
      })
    }

    function mO(zz) {
      let {
        state: tz,
        mode: sz,
        giftName: Fz,
        busy: Wz,
        highlight: Xz,
        purchaseError: oz,
        onBack: vz,
        onChooseRecipient: Uz,
        onAct: uz,
        onLogin: Nz
      } = zz;
      const {
        t: bz
      } = (0, Oz.B)(), wz = Sz("gift" !== sz);
      return (0, Kz.jsx)(lX, {
        onBack: vz,
        recipient: "gift" === sz && (0, Kz.jsxs)(Kz.Fragment, {
          children: [Fz && (0, Kz.jsxs)("span", {
            className: "StoreDetailRecipient",
            title: bz("store:giftFor", {
              name: Fz
            }),
            children: [HX.e, " ", bz("store:giftFor", {
              name: Fz
            })]
          }), !Fz && (0, Kz.jsxs)("div", {
            ...(0, gz.T)(),
            className: "StoreDetailRecipient StoreDetailRecipientChoose",
            onClick: Uz,
            children: [HX.e, " ", bz("store:chooseRecipient")]
          })]
        }),
        cta: (0, Kz.jsx)(zO, {
          state: tz,
          item: "superRank",
          price: yz.f.price,
          busy: Wz,
          highlight: Xz,
          onAct: uz,
          onNeedRecipient: Uz,
          onLogin: Nz
        }),
        afterCta: (0, Kz.jsxs)(Kz.Fragment, {
          children: [wz && (0, Kz.jsx)("span", {
            className: "StoreTileNote",
            children: wz
          }), oz && (0, Kz.jsx)("span", {
            className: "StoreTileNote StoreTileNoteError",
            children: bz(oz)
          })]
        })
      })
    }
    var JO = sz(149);
    const IO = JO.h("kind", [JO.u({
      kind: JO.n("refused"),
      heldTierId: JO.M(),
      until: JO.t()
    }), JO.u({
      kind: JO.n("refund"),
      tierId: JO.M(),
      refundedMs: JO.t(),
      forfeitedMs: JO.t(),
      premiumCurrency: JO.t()
    }), JO.u({
      kind: JO.n("none")
    })]);
    async function CO(zz) {
      const tz = await (0, Zz.postJsonWithMetricsCookiesAndJsonResponse)(`${Gz.clientSideServerUrls.indexUrl}/index/ranks/subscribe-preview`, {
        productId: zz
      }, {
        retries: 1
      });
      return IO.parse(tz)
    }
    var eO = sz(2782),
      ZO = sz(2816);

    function GO(zz, tz) {
      const sz = Math.max(1, Math.round(tz / hz.h));
      return [1 === sz ? `${zz}OneDay` : zz, {
        days: sz.toLocaleString()
      }]
    }

    function TO() {
      return "true" === new URLSearchParams(window.location.search).get("tempSubscription") && (0, kz.purchasesAllowed)() ? (0, Kz.jsx)(cO, {}) : null
    }

    function cO() {
      const {
        t: zz
      } = (0, Oz.B)(), {
        userContext: tz
      } = (0, bz.b)(), {
        purchaseUnderWay: sz,
        notice: Wz,
        subscribe: Xz
      } = (0, eO.c)(), [oz, vz] = (0, Fz.useState)(null), [Uz, uz] = (0, Fz.useState)(0), [Nz, wz] = (0, Fz.useState)(!1), Dz = (0, Fz.useRef)(!0), Hz = tz !== Zz.NULL_USER_CONTEXT, Bz = null !== oz && oz.loadedFor === tz ? oz.offer : null, Pz = null === Wz || void 0 === Wz ? void 0 : Wz.pendingIntentId, rz = (0, Fz.useRef)(Pz);

      function Yz() {
        uz((zz => zz + 1))
      }
      async function xz(zz) {
        wz(!1), await Xz(zz), Dz.current && Yz()
      }
      if ((0, Fz.useEffect)((() => (Dz.current = !0, () => {
          Dz.current = !1
        })), []), (0, Fz.useEffect)((() => {
          void 0 !== rz.current && void 0 === Pz && Yz(), rz.current = Pz
        }), [Pz]), (0, Fz.useEffect)((() => {
          if (!Hz) return;
          let zz = !1;
          return wz(!1), async function() {
            const {
              offering: zz
            } = await (0, ot.f)().getOfferings("superRankPage"), tz = null === zz || void 0 === zz ? void 0 : zz.packages.find((zz => null !== zz.price));
            return void 0 === tz ? {
              kind: "unavailable"
            } : {
              kind: "loaded",
              pkg: tz,
              preview: await CO(tz.productId)
            }
          }().catch((zz => (console.error("Billing: loading the Super Rank subscription or its preview failed:", zz), {
            kind: "loadFailed"
          }))).then((sz => {
            zz || vz((zz => "loadFailed" === sz.kind && (null === zz || void 0 === zz ? void 0 : zz.loadedFor) === tz ? zz : {
              loadedFor: tz,
              offer: sz
            }))
          })), () => {
            zz = !0
          }
        }), [tz, Hz, Uz]), null === Bz) return null;
      if ("loaded" !== Bz.kind) return (0, Kz.jsx)(ZO.l, {
        notice: {
          kind: "error",
          key: "unavailable" === Bz.kind ? "payments:subscriptionUnavailable" : "payments:subscriptionLoadFailed"
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const {
        pkg: mz,
        preview: Jz
      } = Bz;
      if ("refused" === Jz.kind) return (0, Kz.jsx)(ZO.l, {
        notice: {
          kind: "error",
          key: "payments:subscribeRefusedGemRank",
          values: {
            date: new Date(Jz.until).toLocaleDateString()
          }
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const Iz = (0, OO.g)(mz.price);
      if (Nz && "refund" === Jz.kind) {
        const {
          refundedMs: tz,
          forfeitedMs: Fz,
          premiumCurrency: Wz
        } = Jz, Xz = Fz + (0 === Wz ? tz : 0), [Oz, oz] = GO("payments:subscribeRefundsGemRank", tz), [vz, Uz] = GO("payments:subscribeForfeitsGemRank", Xz);
        return (0, Kz.jsxs)("div", {
          className: "StoreTempSubscribe SmallTextBold",
          children: [(0, Kz.jsx)("div", {
            children: zz("payments:subscribeEndsGemRank")
          }), Wz > 0 && (0, Kz.jsx)("div", {
            children: zz(Oz, {
              ...oz,
              amount: Wz.toLocaleString()
            })
          }), Xz > 0 && (0, Kz.jsx)("div", {
            children: zz(vz, Uz)
          }), (0, Kz.jsxs)("div", {
            className: "StoreTempSubscribeButtons",
            children: [(0, Kz.jsx)(gz.l, {
              onClick: () => {
                wz(!1)
              },
              children: zz("general:cancel")
            }), (0, Kz.jsx)(gz.p, {
              onClick: () => {
                xz(mz)
              },
              loading: sz,
              children: zz("payments:subscribeContinue", {
                price: Iz
              })
            })]
          })]
        })
      }
      return (0, Kz.jsxs)("div", {
        className: "StoreTempSubscribe",
        children: [(0, Kz.jsx)(ZO.l, {
          notice: Wz,
          className: "SmallTextBold"
        }), (0, Kz.jsx)(ZO.e, {
          className: "SmallTextBold"
        }), (0, Kz.jsx)(gz.p, {
          onClick: () => {
            "refund" === Jz.kind ? wz(!0) : xz(mz)
          },
          disabled: void 0 !== Pz,
          loading: sz,
          children: zz("payments:subscribeToSuperRank", {
            price: Iz
          })
        })]
      })
    }
    const jO = {
      kind: "board"
    };
    let AO = !1;

    function yO(zz) {
      return "found" === zz.status || "error" === zz.status && "store:giftRecipientLookupFailed" === zz.error ? zz.name : null
    }(0, Qz.A)(UX.prefetchBillingOfferings);
    const MO = (0, Fz.memo)((function(zz) {
      var tz;
      let {
        show: Wz
      } = zz;
      const {
        t: oz
      } = (0, Oz.B)(), {
        userContext: vz
      } = (0, bz.b)(), Uz = vz !== Zz.NULL_USER_CONTEXT, uz = YX(vz), [Nz, wz] = (0, Dz.c)(), {
        page: gz,
        urlMode: Hz,
        goTo: Bz
      } = (0, xX.f)(), Pz = function(zz) {
        return "superRank" === zz.kind ? "superRank" : "pack" === zz.kind ? zz.pack : null
      }(gz), {
        openEverythingMenuName: rz,
        gameState: Yz
      } = (0, Jz.h)(["openEverythingMenuName", "gameState"]), xz = null !== rz;
      ! function(zz, tz) {
        const [Wz] = (0, Fz.useState)(IX.f), [Xz, Oz] = (0, Fz.useState)(!1);
        Wz && tz && !Xz && Oz(!0);
        const oz = (0, vF.j)(),
          vz = Wz && Xz && zz && !oz;
        (0, Fz.useEffect)((() => {
          if (!vz) return;
          let zz = null,
            tz = null,
            Fz = null;
          const Wz = () => !document.hasFocus() || document.activeElement instanceof HTMLIFrameElement || (0, ot.f)().purchaseUnderWay,
            Xz = () => {
              var sz;
              null === (sz = Fz) || void 0 === sz || sz(), Fz = null, null !== zz && (clearTimeout(zz), zz = null), null !== tz && (clearTimeout(tz), tz = null)
            },
            Oz = () => {
              (0, mX.k)(!1), (0, mX.j)(!1), Xz(), zz = setTimeout((() => {
                zz = null, Fz = (0, JX.c)((() => {
                  Fz = null, Wz() ? Oz() : ((0, mX.k)(!0), tz = setTimeout((() => {
                    tz = null, Fz = (0, JX.c)((() => {
                      Fz = null, Wz() ? Oz() : (0, mX.j)(!0)
                    }))
                  }), 3e3), Promise.resolve().then((() => sz(4304))).then((zz => {
                    zz.startBackgroundGameSetup()
                  }), (zz => {
                    console.warn("Background game setup: its chunk failed to load", zz)
                  })))
                }))
              }), 2e3)
            };
          for (const sz of CX) window.addEventListener(sz, Oz, {
            capture: !0,
            passive: !0
          });
          return Oz(), () => {
            for (const zz of CX) window.removeEventListener(zz, Oz, {
              capture: !0
            });
            Xz(), (0, mX.k)(!1), (0, mX.j)(!1)
          }
        }), [vz])
      }(Wz && xz, "pack" === gz.kind);
      const mz = "landingPage" === Yz;
      (0, Fz.useEffect)((() => {
        xz && (0, UX.prefetchBillingOfferings)()
      }), [xz]), (0, Fz.useEffect)((() => {
        xz && !Wz && mz && (0, eX.r)()
      }), [xz, Wz, mz]);
      const [Iz, Cz] = (0, Fz.useState)(0), [ez, Gz] = (0, Fz.useState)(null), [Tz, cz] = (0, Fz.useState)(null), [jz, Az] = (0, Fz.useState)(null), [Mz, dz] = (0, Fz.useState)(null), hz = (0, Fz.useRef)(null), iz = (0, Fz.useRef)(null), Lz = (0, Fz.useRef)(!1), lz = (0, Qz.I)(), nz = (0, Fz.useRef)(0), az = (0, Fz.useRef)(!1);

      function qz() {
        Cz((zz => zz + 1))
      }(0, Fz.useEffect)((() => {
        if (Wz) {
          if (AO = !0, (0, Qz.m)(), lz && lz.seq !== nz.current) {
            var zz;
            nz.current = lz.seq, "loginResume" !== lz.source && (0, Qz.G)();
            const tz = (0, Qz.c)(lz);
            Hz || Bz(tz), dz(null !== (zz = lz.highlight) && void 0 !== zz ? zz : null), cz(null), "gift" === lz.mode && lz.giftRecipientName ? uz.choose(lz.giftRecipientName, "prefilled") : "current" !== lz.mode && uz.clear(), "gift" !== lz.mode || lz.giftRecipientName || qz(), (0, fz.reportAnalyticsClick)({
              id: "store.open",
              value: lz.source
            })
          } else az.current || (0, fz.reportAnalyticsClick)({
            id: "store.open",
            value: "menuTab"
          });
          az.current = !0
        } else az.current = !1
      }), [Wz, lz]), (0, Fz.useEffect)((() => {
        if (!Mz) return;
        const zz = setTimeout((() => {
          dz(null)
        }), 4e3);
        return () => {
          clearTimeout(zz)
        }
      }), [Mz]), (0, Fz.useEffect)((() => {
        const zz = hz.current;
        var tz;
        if (Wz && zz) {
          if (Pz) iz.current = Pz, null === (tz = zz.querySelector(".StoreDetailBackButton, .CosmeticShopDetailBackButton")) || void 0 === tz || tz.focus();
          else if (iz.current) {
            var sz;
            null === (sz = zz.querySelector(`[data-store-item="${iz.current}"]`)) || void 0 === sz || sz.focus(), iz.current = null
          }
        } else iz.current = null
      }), [Pz, Wz]), (0, Fz.useEffect)((() => {
        cz(null)
      }), [uz.query]), (0, Fz.useEffect)((() => {
        if (!jz) return;
        const zz = setTimeout((() => {
          Az(null)
        }), 8e3);
        return () => {
          clearTimeout(zz)
        }
      }), [jz]);
      const Sz = vz.superRankInfo,
        Vz = vz.isLoggedIn() || (0, kz.guestsMayBuy)(),
        Rz = vz.getOwnedCosmeticPacks(),
        pz = (0, HX.p)(uz.query),
        Ez = (0, HX.f)({
          mode: pz,
          loggedIn: Uz ? Vz : null,
          superRankInfo: Sz,
          now: Date.now(),
          ownedPacks: Rz,
          packs: vX.x,
          recipient: uz.recipient
        });
      (0, Fz.useEffect)((() => {
        if (!Vz || !Wz) return;
        const zz = (0, Qz.G)(),
          tz = zz && (0, HX.l)(zz, vX.x);
        zz && tz && ((0, fz.reportAnalyticsClick)({
          id: "store.login_resume",
          value: zz.item
        }), (0, Qz.p)(tz))
      }), [Vz, Wz]);
      const zt = (0, HX.t)({
        superRankDaysLeft: Ez.superRankDaysLeft,
        openedThisSession: AO || Wz,
        seenNewItems: (0, Qz.j)()
      });
      if ((0, Fz.useEffect)((() => {
          (0, Qz.D)(zt)
        }), [zt]), !Wz || !(0, kz.purchasesAllowed)()) return null;
      const tt = wz > Nz && Nz <= 700,
        st = !tt && wz <= 420,
        Ft = "gift" === pz ? yO(uz.recipient) : null,
        Wt = null !== ez;

      function Xt(zz) {
        (0, uX.e)(zz, "gift" === pz ? uz.query.trim() : null)
      }

      function Ot(zz, tz) {
        (0, fz.reportAnalyticsClick)({
          id: "store.purchase_done",
          value: `${tz?"gift":"self"}:${zz}`
        }), tz && (uz.recordGift(tz.name, zz), vt(tz))
      }

      function vt(zz) {
        ! function(zz) {
          try {
            qt.f.setItem(BX, (0, HX.y)(rX(), zz))
          } catch {}
        }({
          name: zz.name,
          cosmetics: zz.cosmetics
        }), Bz(jO), Az((tz => {
          var sz;
          return {
            name: zz.name,
            seq: (null !== (sz = null === tz || void 0 === tz ? void 0 : tz.seq) && void 0 !== sz ? sz : 0) + 1
          }
        }))
      }
      async function Ut(zz) {
        var tz, sz;
        if (Lz.current) return;
        if (!Vz) return void Xt(zz);
        cz(null), dz(null);
        const Fz = "gift" === pz ? {
          name: yO(uz.recipient),
          cosmetics: uz.recipientCosmetics
        } : null;
        if (Fz && !Fz.name) return void qz();
        const Wz = "superRank" === zz ? yz.f.id : (0, yz.b)(zz);
        Lz.current = !0;
        const Xz = await (0, gX.d)(Wz, null !== (tz = null === Fz || void 0 === Fz ? void 0 : Fz.name) && void 0 !== tz ? tz : null);
        if (Lz.current = !1, !Xz) return;
        Gz(zz);
        const Oz = await NX.b.purchase(Wz, null !== (sz = null === Fz || void 0 === Fz ? void 0 : Fz.name) && void 0 !== sz ? sz : null);
        Gz(null), Oz ? cz(Oz) : (Ot(zz, Fz), Fz || (await (0, bX.flushClientAnalyticsEvents)(), (0, KX.refreshWithoutConfirmation)("superRank" === zz ? "/super-rank-welcome" : `/pack-welcome/${zz}`)))
      }
      const Kt = Xz()("Store", {
        StoreGift: "gift" === pz,
        StorePortrait: tt,
        StoreCompact: st
      });
      if ("pack" === gz.kind) {
        const zz = gz.pack,
          tz = Ez.packs.find((tz => tz.pack === zz));
        return (0, Kz.jsx)("div", {
          ref: hz,
          className: "CosmeticShopContainer",
          children: (0, Kz.jsx)(DX.g, {
            pack: zz,
            onBack: () => {
              Bz(jO)
            },
            onPurchased: tz => {
              Ot(zz, tz ? {
                name: tz,
                cosmetics: null
              } : null)
            },
            giftCta: "gift" === pz && Ft && tz && (0, Kz.jsxs)(Kz.Fragment, {
              children: [(0, Kz.jsx)(zO, {
                state: tz.state,
                item: zz,
                price: (ut = zz, "superRank" === ut ? yz.f.price : (0, yz.c)(ut)),
                busy: Wt,
                onAct: () => {
                  Ut(zz)
                },
                onNeedRecipient: () => {
                  Bz(jO), qz()
                },
                onLogin: () => {
                  Xt(zz)
                },
                highlight: Mz === zz
              }), Tz && (0, Kz.jsx)("span", {
                className: "CosmeticShopGiftError SmallTextBold",
                children: oz(Tz)
              })]
            }),
            ownedPacks: Rz,
            startAsGift: "gift" === pz,
            initialGiftRecipient: "gift" === pz ? null !== Ft && void 0 !== Ft ? Ft : uz.query.trim() : "",
            highlightCta: Mz === zz
          }, zz)
        })
      }
      var ut;
      return "superRank" === gz.kind ? (0, Kz.jsx)("div", {
        ref: hz,
        className: Xz()(Kt, "StoreDetailView"),
        children: (0, Kz.jsx)(mO, {
          state: Ez.superRank.state,
          mode: pz,
          giftName: Ft,
          busy: Wt,
          highlight: "superRank" === Mz,
          purchaseError: Tz,
          onBack: () => {
            Bz(jO)
          },
          onChooseRecipient: () => {
            Bz(jO), qz()
          },
          onAct: () => {
            Ut("superRank")
          },
          onLogin: () => {
            Xt("superRank")
          }
        })
      }) : (0, Kz.jsxs)("div", {
        ref: hz,
        className: Kt,
        children: [(0, Kz.jsx)("div", {
          className: "StoreTopRow",
          children: (0, Kz.jsx)(yX, {
            selfName: Uz ? vz.getPlayerName() : "",
            giftRecipient: uz,
            suggestionsVersion: null !== (tz = null === jz || void 0 === jz ? void 0 : jz.seq) && void 0 !== tz ? tz : 0,
            pulseSignal: Iz,
            disabled: Wt || !Uz
          })
        }), jz && (0, Kz.jsxs)("div", {
          className: "StoreNotice StoreNoticeGiftSent",
          onClick: () => {
            Az(null)
          },
          children: [(0, Kz.jsx)(wX.e, {
            showSignal: jz.seq
          }), HX.e, " ", oz("store:giftSent", {
            name: jz.name
          })]
        }, jz.seq), !jz && Tz && (0, Kz.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: oz(Tz)
        }), (0, Kz.jsx)(xO, {
          layout: Ez,
          mountAtOnce: null !== iz.current,
          bundleGift: "gift" === pz ? {
            recipientName: Ft,
            lookingUp: "pending" === uz.recipient.status,
            busy: Wt,
            onNeedRecipient: qz,
            onSent: zz => {
              (0, fz.reportAnalyticsClick)({
                id: "store.purchase_done",
                value: "gift:superGems"
              }), vt({
                name: zz,
                cosmetics: uz.recipientCosmetics
              })
            }
          } : null,
          superRankTotalDays: (0, HX.u)(Sz),
          busy: Wt,
          highlightItem: Mz,
          onOpen: function(zz) {
            (0, fz.reportAnalyticsClick)({
              id: "store.item_open",
              value: zz
            }), Bz((0, Qz.f)(zz))
          },
          onAct: Ut,
          onNeedRecipient: qz,
          onLogin: Xt
        }), "gift" !== pz && (0, Kz.jsx)(TO, {})]
      })
    }));
    var dO = sz(2479),
      hO = sz(8337),
      QO = sz(2530),
      kO = sz(2379),
      iO = sz(2432),
      LO = sz(2444),
      lO = sz(2446),
      nO = sz(2524),
      aO = sz(2507),
      qO = sz(2243),
      SO = sz(2268),
      VO = sz(2260),
      RO = sz(1966),
      pO = sz(2455),
      fO = sz(2270);

    function EO(zz) {
      let {
        show: tz
      } = zz;
      return tz ? (0, Kz.jsx)(zo, {}) : null
    }

    function zo() {
      const {
        t: zz
      } = (0, Oz.B)(), {
        followsLeader: tz
      } = (0, kO.i)(), {
        loading: sz,
        friends: Wz,
        requests: vz,
        invites: Uz
      } = (0, Lz.k)(), {
        userContext: uz
      } = (0, bz.b)(), [Nz, wz] = (0, Fz.useState)(fO.l);
      (0, Fz.useEffect)((() => {
        (0, fO.e)()
      }), []);
      const Dz = vz.map((zz => zz.name)),
        {
          state: Hz,
          recentRequesters: Bz
        } = (0, aO.r)(),
        Pz = new Map([...("loaded" === Hz.status ? Hz.recentPlayers : []).map((zz => [zz.preview.name, zz])), ...Bz.map((zz => [zz.name, zz]))]),
        rz = (0, Fz.useRef)(null),
        [mz, Jz] = (0, Fz.useState)(""),
        [Iz, Cz] = (0, Fz.useState)("Enter"),
        [ez, Zz] = (0, Fz.useState)(null);

      function Gz() {
        mz && (Cz("Loading"), (0, VO.d)(mz, "social_menu").then((zz => {
          if (rz.current) switch (zz.kind) {
            case "sent":
              Cz("Success");
              break;
            case "becameFriends":
              Cz("BecameFriends");
              break;
            case "failed":
              Zz(zz.message), Cz("Error")
          }
        })))
      }
      return (0, Fz.useEffect)((() => {
        if ("Enter" === Iz || "Loading" === Iz) return;
        const zz = setTimeout((() => {
          rz.current.value = "", Jz(""), Cz("Enter")
        }), "Success" === Iz ? 1e3 : 4e3);
        return () => {
          clearTimeout(zz)
        }
      }), [Iz]), (0, Kz.jsx)("div", {
        className: "SocialMenu",
        children: (0, Kz.jsxs)("div", {
          className: "SocialMenuInner",
          children: [(0, Kz.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, Kz.jsxs)("div", {
              className: "SocialMenuBox SocialMenuAddFriend",
              children: [(0, Kz.jsx)(lO.e, {
                label: zz("socialBar:addFriend")
              }), (0, Kz.jsxs)("div", {
                className: "AddFriendBody",
                children: [(0, Kz.jsxs)("div", {
                  className: Xz()("AddFriendBodyOverlay", {
                    [`AddFriendBodyOverlay${Iz}`]: !0
                  }),
                  children: ["Loading" === Iz && (0, Kz.jsx)(xz.d, {}), "Success" === Iz && (0, Kz.jsx)(oz.c, {
                    name: "check"
                  }), "BecameFriends" === Iz && (0, Kz.jsx)(Kz.Fragment, {
                    children: zz("socialBar:nowFriends", {
                      playerName: mz
                    })
                  }), "Error" === Iz && ez && (0, Kz.jsx)(Kz.Fragment, {
                    children: zz(ez.translationKey, ez.params)
                  })]
                }), (0, Kz.jsxs)("div", {
                  className: "PlayerSearch",
                  children: [(0, Kz.jsx)(Yz.d, {
                    className: "PlayerSearchInput",
                    placeholderText: zz("socialBar:enterPlayerName"),
                    domRef: rz,
                    onValueChange: zz => {
                      Jz((0, jz.p)(zz)), rz.current.value = (0, jz.p)(zz)
                    },
                    onEnter: () => {
                      mz && (0, fz.reportAnalyticsClick)({
                        id: "social.add_friend",
                        value: "social_menu"
                      }), Gz()
                    }
                  }), (0, Kz.jsxs)(gz.h, {
                    className: "PlayerSearchInputButton SmallTextLight",
                    onClick: () => {
                      Gz()
                    },
                    analyticsClick: {
                      id: "social.add_friend",
                      value: "social_menu"
                    },
                    children: [(0, Kz.jsx)(oz.c, {
                      name: "user-plus"
                    }), " ", zz("socialBar:sendRequest")]
                  })]
                })]
              }), (0, Kz.jsx)(pO.e, {
                surface: "social_menu",
                prefetchOnMount: !0
              })]
            }), Uz.length > 0 && (0, Kz.jsxs)("div", {
              className: "SocialMenuBox SocialMenuInvites",
              children: [(0, Kz.jsx)(lO.e, {
                label: zz("socialBar:invites"),
                meta: Uz.length
              }), Uz.map((tz => (0, Kz.jsxs)("div", {
                className: "SocialMenuInvite",
                children: [(0, Kz.jsx)("div", {
                  className: "SocialMenuInviteIcon",
                  children: (0, Kz.jsx)(qO.b, {
                    invite: tz
                  })
                }), (0, Kz.jsx)("div", {
                  className: "SocialMenuInviteText",
                  children: (0, Kz.jsx)(qO.d, {
                    invite: tz
                  })
                }), (0, Kz.jsx)(gz.p, {
                  className: "SocialMenuInviteJoin SmallTextLight",
                  onClick: () => {
                    (0, SO.d)(tz)
                  },
                  analyticsClick: {
                    id: "social.accept_invite",
                    value: `social_menu:${tz.destination.kind}`
                  },
                  children: zz("general:join")
                }), (0, Kz.jsx)(Vz.h, {
                  tooltipInner: (0, Kz.jsx)(Kz.Fragment, {
                    children: zz("general:decline")
                  }),
                  delayShow: 0,
                  children: (0, Kz.jsx)(gz.l, {
                    className: "SocialMenuInviteDecline",
                    padDefaultFocus: "invite" === (null === Nz || void 0 === Nz ? void 0 : Nz.kind) && Nz.inviteId === tz.id,
                    onClick: () => {
                      Lz.d.declineInvite(tz.id)
                    },
                    analyticsClick: {
                      id: "social.decline_invite",
                      value: `social_menu:${tz.destination.kind}`
                    },
                    children: (0, Kz.jsx)(oz.c, {
                      name: "xmark"
                    })
                  })
                })]
              }, tz.id)))]
            }), (0, Kz.jsxs)("div", {
              className: Xz()("SocialMenuBox SocialMenuRequests", {
                SocialMenuBoxEmpty: !sz && 0 === vz.length
              }),
              children: [(0, Kz.jsx)(lO.e, {
                label: (0, Kz.jsxs)(Kz.Fragment, {
                  children: [(0, Kz.jsx)(oz.c, {
                    name: RO.f
                  }), " ", zz("socialBar:requests")]
                }),
                meta: (0, Kz.jsxs)(Kz.Fragment, {
                  children: [vz.length, vz.length === Rz.p && (0, Kz.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: zz("socialBar:limitReached")
                  })]
                })
              }), sz && (0, Kz.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, Kz.jsx)(xz.d, {})
              }), !sz && 0 === vz.length && (0, Kz.jsx)("div", {
                className: "SocialMenuEmpty",
                children: zz("socialBar:noFriendRequests")
              }), !sz && vz.length > 0 && (0, Kz.jsx)("div", {
                className: "PlayerRows",
                children: (0, Kz.jsx)(wW.c, {
                  lazyLoadedClassName: "SocialMenuRequestsLazy",
                  observerUpdateDeps: [vz],
                  children: vz.map(((tz, sz) => {
                    const Fz = Pz.get(tz.name);
                    return (0, Kz.jsxs)(LO.d, {
                      playerSocialPreview: tz,
                      zIndex: vz.length - sz,
                      padDefaultFocus: (0, fO.j)(Nz, tz.name, sz),
                      status: Fz && (0, Kz.jsx)(nO.c, {
                        gameNameWithVariation: Fz.gameNameWithVariation,
                        isPrivateLobby: Fz.isPrivateLobby
                      }),
                      children: [(0, Kz.jsx)(Vz.h, {
                        tooltipInner: (0, Kz.jsx)(Kz.Fragment, {
                          children: zz("general:accept")
                        }),
                        delayShow: 0,
                        children: (0, Kz.jsx)(gz.h, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            wz((0, fO.g)(Dz, sz)), (0, VO.c)(tz.name, !0, {
                              source: "social_menu",
                              announceFriend: !1
                            })
                          },
                          analyticsClick: {
                            id: "social.accept_friend_request",
                            value: "social_menu"
                          },
                          children: (0, Kz.jsx)(oz.c, {
                            name: "check"
                          })
                        })
                      }), (0, Kz.jsx)(Vz.h, {
                        tooltipInner: (0, Kz.jsx)(Kz.Fragment, {
                          children: zz("general:decline")
                        }),
                        delayShow: 0,
                        children: (0, Kz.jsx)(gz.l, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            wz((0, fO.g)(Dz, sz)), (0, VO.c)(tz.name, !1, {
                              source: "social_menu"
                            })
                          },
                          analyticsClick: {
                            id: "social.decline_friend_request",
                            value: "social_menu"
                          },
                          children: (0, Kz.jsx)(oz.c, {
                            name: "xmark"
                          })
                        })
                      })]
                    }, `${tz.name}_${tz.isError}`)
                  }))
                })
              })]
            }), (0, Kz.jsx)(nO.g, {})]
          }), (0, Kz.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, Kz.jsxs)("div", {
              className: "SocialMenuBox SocialMenuParty",
              children: [(0, Kz.jsx)(lO.e, {
                label: zz("socialBar:party")
              }), (0, Kz.jsx)(iO.e, {})]
            }), (0, Kz.jsxs)("div", {
              className: "SocialMenuBox SocialMenuFriends",
              children: [(0, Kz.jsx)(lO.e, {
                label: (0, Kz.jsxs)(Kz.Fragment, {
                  children: [(0, Kz.jsx)(oz.c, {
                    name: RO.e
                  }), " ", zz("socialBar:friends")]
                }),
                meta: (0, Kz.jsxs)(Kz.Fragment, {
                  children: [Wz.length, Wz.length >= (0, Rz.d)(uz.getPlayerRanks()) && (0, Kz.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: zz("socialBar:limitReached")
                  })]
                })
              }), sz && (0, Kz.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, Kz.jsx)(xz.d, {})
              }), !sz && 0 === Wz.length && (0, Kz.jsx)("div", {
                className: "SocialMenuEmpty",
                children: zz("socialBar:noFriends")
              }), !sz && Wz.length > 0 && (0, Kz.jsx)("div", {
                className: "PlayerRows",
                children: (0, Kz.jsx)(wW.c, {
                  lazyLoadedClassName: "SocialMenuFriendsLazy",
                  observerUpdateDeps: [Wz],
                  children: Wz.map(((zz, sz) => (0, Kz.jsx)(LO.d, {
                    playerSocialPreview: zz,
                    isFriend: !0,
                    hideFriendBadge: !0,
                    onFriendRemoved: zz => {
                      Lz.d.removeFriendFromState(zz)
                    },
                    zIndex: Wz.length - sz,
                    children: (0, Kz.jsx)(LO.c, {
                      friend: zz,
                      followsLeader: tz,
                      analyticsSurface: "social_menu"
                    })
                  }, `${zz.name}_${zz.isError}`)))
                })
              })]
            })]
          })]
        })
      })
    }
    var to = sz(2368);
    const so = zz => {
        let {
          action: tz,
          padAction: sz
        } = zz;
        const {
          isTouchScreen: Fz
        } = (0, Jz.h)(["isTouchScreen"]), Wz = (0, vF.j)();
        return Fz && !Wz ? null : (0, Kz.jsx)(tF.b, {
          className: "EverythingMenuTabKey",
          noaAction: tz,
          padHidesKey: !0,
          padMenuShortcut: sz
        })
      },
      Fo = (0, Fz.memo)((function() {
        const {
          t: zz
        } = (0, Oz.B)(), {
          gameState: tz,
          openEverythingMenuName: sz,
          initSdkSelectorFinished: Wz,
          crosshairGameView: oz
        } = (0, Jz.h)(["gameState", "openEverythingMenuName", "initSdkSelectorFinished", "crosshairGameView"]), {
          userContext: vz
        } = (0, bz.b)(), Uz = (0, kz.purchasesAllowed)(), uz = (0, Qz.M)(), Nz = (zz, tz) => (0, Kz.jsx)(so, {
          action: zz,
          padAction: tz
        }), [wz, Dz] = (0, Fz.useState)(null), Bz = (0, Fz.useRef)(null), Pz = {
          ..."inGame" === tz ? {} : (0, gz.T)({
            focusOnClick: !1
          }),
          ...BF.g
        }, rz = null !== sz, Yz = sz !== Ut.r.COSMETIC_SHOP && !oz;
        async function xz() {
          await async function() {
            if (!wz) return;
            await wz(), Dz(null)
          }(), Jz.b.set({
            openEverythingMenuName: null
          })
        }
        const mz = (0, Fz.useMemo)((() => "inGame" === tz ? {
          text: zz("settingsMenu:exitGame"),
          onClick: () => {
            (0, hO.e)()
          }
        } : (0, ez.e)() ? {
          text: zz("settingsMenu:exitGame"),
          onClick: () => {
            Xt.k.discordActivity().then((zz => {
              zz.exit("User exited the game")
            }))
          }
        } : null), [tz, zz]);
        const Iz = (0, Kz.jsx)("div", {
          className: "EverythingMenuCloseButtonClickZone",
          onClick: () => {
            xz()
          },
          children: (0, Kz.jsx)(gz.n, {
            className: "EverythingMenuCloseButton"
          })
        });
        return (0, Kz.jsx)(PF.c, {
          showing: rz,
          globallyUniqueKey: "EverythingMenu",
          alwaysMountChildren: !0,
          keepsMovement: sz === Ut.r.SHOP,
          doGameplayStartStopOnShow: "inGame" === tz,
          children: (0, Kz.jsx)(YF.d, {
            className: "EverythingMenuContainer",
            show: rz && !oz,
            children: (0, Kz.jsx)(rF.b, {
              close: () => {
                xz()
              },
              togglePointerLock: !1,
              children: (0, Kz.jsxs)("div", {
                className: "EverythingMenu",
                children: [!(0, WX.m)(sz) && (0, Kz.jsxs)("div", {
                  className: "EverythingMenuTabList",
                  children: [(0, Kz.jsxs)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerStart",
                    children: [mz && (0, Kz.jsx)(gz.e, {
                      className: "EverythingMenuBackButton",
                      padDestructive: !0,
                      onClick: () => {
                        mz.onClick()
                      },
                      children: mz.text
                    }), rz && Uz && (0, Kz.jsx)("div", {
                      ...Pz,
                      className: "EverythingMenuWallet",
                      title: zz("homePage:getPremiumCurrency"),
                      onClick: () => {
                        (0, Qz.p)({
                          mode: "current",
                          source: "menuWallet"
                        })
                      },
                      children: (0, Kz.jsx)(dO.i, {})
                    })]
                  }), (0, Kz.jsxs)("div", {
                    className: "EverythingMenuTabListInner",
                    "data-pad-tabs": "1",
                    children: [(0, Kz.jsxs)("div", {
                      ...Pz,
                      "data-pad-tab": !0,
                      "data-pad-selected": sz === Ut.r.SETTINGS ? "true" : void 0,
                      className: Xz()("EverythingMenuTab", {
                        EverythingMenuTabActive: sz === Ut.r.SETTINGS
                      }),
                      onClick: () => {
                        Jz.b.set({
                          openEverythingMenuName: Ut.r.SETTINGS
                        })
                      },
                      children: [zz("general:settings"), Nz("OpenSettings", "pause")]
                    }), (0, Kz.jsxs)("div", {
                      ...Pz,
                      "data-pad-tab": !0,
                      "data-pad-selected": sz === Ut.r.CUSTOMISATION ? "true" : void 0,
                      className: Xz()("EverythingMenuTab", {
                        EverythingMenuTabActive: sz === Ut.r.CUSTOMISATION
                      }),
                      onClick: () => {
                        Jz.b.set({
                          openEverythingMenuName: Ut.r.CUSTOMISATION
                        })
                      },
                      children: [zz("general:player"), Nz("OpenCharacterCustomization")]
                    }), Hz.featureFlags.useSocialFeatures && (0, Kz.jsxs)("div", {
                      ...Pz,
                      "data-pad-tab": !0,
                      "data-pad-selected": sz === Ut.r.SOCIAL ? "true" : void 0,
                      className: Xz()("EverythingMenuTab", {
                        EverythingMenuTabActive: sz === Ut.r.SOCIAL
                      }),
                      ...(0, fz.d)({
                        id: "social.open_menu",
                        value: "menu_tab"
                      }, sz === Ut.r.SOCIAL),
                      onClick: () => {
                        Jz.b.set({
                          openEverythingMenuName: Ut.r.SOCIAL
                        })
                      },
                      children: [zz("socialBar:social"), (0, Kz.jsx)(to.b, {})]
                    }), Uz && (0, Kz.jsxs)("div", {
                      ...Pz,
                      "data-pad-tab": !0,
                      "data-pad-selected": sz === Ut.r.COSMETIC_SHOP ? "true" : void 0,
                      className: Xz()("EverythingMenuTab EverythingMenuTabCosmeticShop", {
                        EverythingMenuTabActive: sz === Ut.r.COSMETIC_SHOP
                      }),
                      onClick: () => {
                        Jz.b.set({
                          openEverythingMenuName: Ut.r.COSMETIC_SHOP
                        })
                      },
                      children: [(0, Kz.jsx)("span", {
                        className: "EverythingMenuTabCosmeticShopText",
                        children: zz("store:title")
                      }), "new" === uz && (0, Kz.jsx)(KO, {}), "dot" === uz && (0, Kz.jsx)("span", {
                        className: "EverythingMenuTabStoreBadge EverythingMenuTabStoreDot"
                      })]
                    }), "inGame" === tz && (0, Kz.jsxs)("div", {
                      ...Pz,
                      "data-pad-tab": !0,
                      "data-pad-selected": sz === Ut.r.LOBBY_LEADERBOARD ? "true" : void 0,
                      className: Xz()("EverythingMenuTab", {
                        EverythingMenuTabActive: sz === Ut.r.LOBBY_LEADERBOARD
                      }),
                      onClick: () => {
                        Jz.b.set({
                          openEverythingMenuName: Ut.r.LOBBY_LEADERBOARD
                        })
                      },
                      children: [zz("general:lobby"), Nz("OpenLobbyLeaderboard", "leaderboard")]
                    })]
                  }), (0, Kz.jsx)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerEnd",
                    children: Iz
                  })]
                }), (0, WX.m)(sz) && Iz, (0, Kz.jsxs)("div", {
                  className: "EverythingMenuBody",
                  "data-pad-initial-area": !0,
                  style: {
                    "--everythingMenuBodyBackgroundOpacity": "inGame" === tz ? "0.85" : "1"
                  },
                  children: [(0, Kz.jsx)(bF, {
                    show: sz === Ut.r.SETTINGS,
                    setBeforeResumeCallback: Dz
                  }), (0, Kz.jsx)(HF, {
                    show: sz === Ut.r.CUSTOMISATION
                  }), (0, Kz.jsx)(Fz.Suspense, {
                    fallback: null,
                    children: (0, Kz.jsx)(VW, {
                      show: sz === Ut.r.SHOP
                    })
                  }), (0, Kz.jsx)(oX, {
                    show: sz === Ut.r.LOBBY_LEADERBOARD
                  }), (0, Kz.jsx)(MO, {
                    show: sz === Ut.r.COSMETIC_SHOP
                  }), (0, Kz.jsx)(EO, {
                    show: sz === Ut.r.SOCIAL
                  })]
                }), !(0, Hz.isMobileApp)() && (0, xF.e)(vz.getPlayerRanks()) && (0, Kz.jsx)(YF.d, {
                  ref: Bz,
                  className: "EverythingMenuBannerDiv",
                  show: Yz,
                  "data-pad-hint-bar-avoid": !0,
                  "data-pad-no-step-in": !0,
                  children: (0, Kz.jsx)(QO.c, {
                    info: {
                      adId: 2,
                      adType: "leaderboard",
                      adAlias: "banner_shop"
                    },
                    sizeInfo: {
                      parentRef: Bz
                    },
                    showing: rz && Yz,
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
  8848: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Xz
    });
    var Fz = sz(321),
      Wz = sz(8856);

    function Xz(zz, tz, sz) {
      const Xz = Object.entries(tz).sort(((zz, tz) => tz[1] - zz[1])),
        Oz = (0, Fz.sb)(zz);
      Oz.push(zz ? "\n\n" : "\n");
      for (const [Wz, wz] of Xz) {
        var oz, vz, Uz;
        const zz = null !== (oz = null === sz || void 0 === sz || null === (vz = sz[Wz]) || void 0 === vz ? void 0 : vz.icon) && void 0 !== oz ? oz : `${Wz} Enchantment`;
        Oz.push({
          icon: zz,
          style: {
            fontSize: "1.5rem"
          }
        }), Oz.push({
          str: `${Wz} ${null!==(Uz=(0,Fz.S)(wz))&&void 0!==Uz?Uz:wz}\n`
        })
      }
      Oz.push({
        str: "\n"
      });
      for (const [Fz, wz] of Xz) {
        var Kz, uz, Nz, bz;
        const zz = null !== (Kz = null === sz || void 0 === sz || null === (uz = sz[Fz]) || void 0 === uz ? void 0 : uz.icon) && void 0 !== Kz ? Kz : `${Fz} Enchantment`,
          tz = null !== (Nz = null === sz || void 0 === sz || null === (bz = sz[Fz]) || void 0 === bz ? void 0 : bz.description) && void 0 !== Nz ? Nz : (0, Wz.o)(Fz);
        Oz.push({
          icon: zz,
          style: {
            fontSize: "1.25rem",
            opacity: .75
          }
        }), Oz.push({
          str: tz,
          style: {
            fontSize: "0.8em",
            fontWeight: "normal",
            opacity: .75
          }
        }), Oz.push({
          str: "\n"
        })
      }
      return Oz
    }
  },
  8863: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Uz,
      e: () => Bz,
      f: () => gz,
      g: () => vz,
      h: () => Hz,
      i: () => Kz,
      j: () => Nz,
      k: () => Dz,
      o: () => uz
    });
    var Fz = sz(308),
      Wz = sz(580),
      Xz = sz(321),
      Oz = sz(3919),
      oz = sz(8848);

    function vz(zz, tz) {
      var sz;
      let {
        player: Fz,
        chestOrCreative: Wz
      } = zz;
      var Xz;
      return tz < Fz.length ? null !== (Xz = Fz[tz]) && void 0 !== Xz ? Xz : null : null !== (sz = Wz[tz - Fz.length]) && void 0 !== sz ? sz : null
    }

    function Uz(zz) {
      var tz;
      return null !== (tz = zz.amount) && void 0 !== tz ? tz : 0
    }

    function Kz(zz) {
      return 0 === zz.button || void 0 === zz.button
    }

    function uz(zz) {
      return !!zz.shiftKey
    }

    function Nz(zz) {
      return "touches" in zz || "touch" === zz.pointerType || "pen" === zz.pointerType
    }
    const bz = new Set,
      wz = 50;

    function Dz(zz, tz) {
      var sz;
      const Fz = null === (sz = zz[tz]) || void 0 === sz ? void 0 : sz.displayName;
      return (0, Wz.G)(Fz) ? "string" !== typeof tz ? "" : (!bz.has(tz) && bz.size < wz && (bz.add(tz), console.warn(`No item called "${tz}", so its hover shows the name as given`)), tz) : Fz
    }

    function gz(zz, tz, sz) {
      var vz, Uz, Kz, uz, Nz, bz, wz, gz, Hz, Bz, Pz, rz, Yz, xz;
      const mz = zz.attributes,
        Jz = null !== (vz = null === (Uz = tz[zz.name]) || void 0 === Uz ? void 0 : Uz.rootName) && void 0 !== vz ? vz : zz.name,
        Iz = null !== (Kz = null !== (uz = mz.customDisplayName) && void 0 !== uz ? uz : null === (Nz = tz[zz.name]) || void 0 === Nz ? void 0 : Nz.displayName) && void 0 !== Kz ? Kz : Dz(tz, Jz);
      let Cz = Iz;
      const ez = null === (bz = mz.customAttributes) || void 0 === bz ? void 0 : bz.enchantmentTier;
      ez && (Cz = (0, Xz.sb)(Iz, {
        colour: Xz.lb[ez]
      }));
      const Zz = null !== (wz = null !== (gz = null !== (Hz = function(zz, tz) {
        var sz;
        if (void 0 === zz || null !== (sz = tz.customAttributes) && void 0 !== sz && sz.author) return zz;
        const Wz = (0, Fz.bc)(zz);
        return Wz.every((zz => "string" === typeof zz)) ? zz : Wz.map((zz => "string" === typeof zz ? zz : {
          icon: zz.icon,
          style: {
            fontSize: "1.5em"
          }
        }))
      }(mz.customDescription, mz)) && void 0 !== Hz ? Hz : null === (Bz = tz[zz.name]) || void 0 === Bz ? void 0 : Bz.description) && void 0 !== gz ? gz : null === (Pz = tz[Jz]) || void 0 === Pz ? void 0 : Pz.description) && void 0 !== wz ? wz : "";
      let Gz = Zz;
      if (null !== (rz = mz.customAttributes) && void 0 !== rz && rz.enchantments) Gz = (0, oz.c)(Zz, mz.customAttributes.enchantments, mz.customAttributes.enchantmentData);
      else if (sz[Jz]) Gz = (0, Xz.sb)(Zz), Gz.push({
        str: "\n"
      }), Gz.push({
        str: "Enchantable",
        style: {
          fontSize: "0.8em",
          fontWeight: "normal",
          opacity: .4
        }
      });
      else if (null !== (Yz = mz.customAttributes) && void 0 !== Yz && Yz.mobSettings) {
        var Tz, cz;
        const zz = mz.customAttributes.mobSettings;
        var jz, Az;
        if (Gz = [], (0, Wz.G)(mz.customAttributes.health) || (Gz.push({
            str: "\n"
          }), Gz.push({
            icon: "Health",
            style: {
              fontSize: "1.5em"
            }
          }), Gz.push({
            str: " "
          }), Gz.push({
            str: mz.customAttributes.health.toString()
          }), (0, Wz.G)(zz.maxHealth) || (Gz.push({
            str: "/"
          }), Gz.push({
            str: zz.maxHealth.toString()
          }))), !(0, Wz.G)(zz.attackDamage) && zz.attackDamage > 0 && (Gz.push({
            str: "\n"
          }), Gz.push({
            icon: "Iron Sword",
            style: {
              fontSize: "1.5em"
            }
          }), Gz.push({
            str: " "
          }), Gz.push({
            str: zz.attackDamage.toString()
          })), !(0, Wz.G)(zz.secondaryAttackDamage) && zz.secondaryAttackDamage > 0 && (Gz.push({
            str: "\n"
          }), Gz.push({
            icon: "Stone Crossbow",
            style: {
              fontSize: "1.5em"
            }
          }), Gz.push({
            str: " "
          }), Gz.push({
            str: zz.secondaryAttackDamage.toString()
          })), (0, Wz.G)(zz.baseRunningSpeed) || (Gz.push({
            str: "\n"
          }), Gz.push({
            icon: "Speed",
            style: {
              fontSize: "1.5em"
            }
          }), Gz.push({
            str: " "
          }), Gz.push({
            str: zz.baseRunningSpeed.toFixed(2)
          })), "Saddled" === zz.metaInfo) Gz.push({
          str: "\n"
        }), Gz.push({
          str: {
            translationKey: "general:has"
          }
        }), Gz.push({
          str: " "
        }), Gz.push({
          icon: null !== (jz = null === (Az = zz.tameInfo) || void 0 === Az ? void 0 : Az.saddleItemName) && void 0 !== jz ? jz : "Saddle",
          style: {
            fontSize: "1.5em"
          }
        });
        if (Gz.push({
            str: "\n"
          }), Gz.push({
            str: "\n"
          }), zz.petInfo && null !== (Tz = zz.tameInfo) && void 0 !== Tz && Tz.supportsFriendship) {
          const tz = Oz.e.getIconsFromFriendshipPoints(zz.petInfo.friendshipPoints);
          for (const zz of tz) Gz.push({
            icon: zz,
            style: {
              fontSize: "1.5em"
            }
          });
          Gz.push({
            str: "\n"
          });
          const sz = Oz.e.getMobHungerLevel(zz.petInfo.lastFedAt);
          for (const zz of Oz.e.hungerLevelIcons[sz]) Gz.push({
            icon: zz,
            style: {
              fontSize: "1.5em"
            }
          });
          Gz.push({
            str: " "
          }), Gz.push({
            str: Oz.e.hungerLevelTranslations[sz],
            style: {
              fontWeight: "bolder"
            }
          })
        }
        if (zz.tameInfo && null !== (cz = zz.tameInfo) && void 0 !== cz && cz.supportsFriendship) {
          var yz, Mz;
          let tz = null !== (yz = zz.tameInfo.likedFoods) && void 0 !== yz ? yz : [];
          Gz.push({
            str: "\n"
          }), Gz.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Oz.e.feedTextColours[Oz.e.MobFoodType.Superliked]
            }
          }), Gz.push({
            str: " "
          }), null !== (Mz = zz.petInfo) && void 0 !== Mz && Mz.superlikedFoodKnown ? (Gz.push({
            icon: zz.petInfo.superlikedFood,
            style: {
              fontSize: "1.5em"
            }
          }), tz = tz.filter((tz => tz !== zz.petInfo.superlikedFood))) : Gz.push({
            icon: "Question Mark",
            style: {
              fontSize: "1.5em"
            }
          }), Gz.push({
            str: "\n"
          }), Gz.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Oz.e.feedTextColours[Oz.e.MobFoodType.Liked]
            }
          }), Gz.push({
            str: " "
          });
          for (const zz of tz) Gz.push({
            icon: zz,
            style: {
              fontSize: "1.5em"
            }
          });
          Gz.push({
            str: "\n"
          }), Gz.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Oz.e.feedTextColours[Oz.e.MobFoodType.Neutral]
            }
          }), Gz.push({
            str: " "
          });
          for (const sz of null !== (dz = zz.tameInfo.neutralFoods) && void 0 !== dz ? dz : []) {
            var dz;
            Gz.push({
              icon: sz,
              style: {
                fontSize: "1.5em"
              }
            })
          }
          Gz.push({
            str: "\n"
          }), Gz.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Oz.e.feedTextColours[Oz.e.MobFoodType.Disliked]
            }
          }), Gz.push({
            str: " "
          });
          for (const sz of null !== (hz = zz.tameInfo.dislikedFoods) && void 0 !== hz ? hz : []) {
            var hz;
            Gz.push({
              icon: sz,
              style: {
                fontSize: "1.5em"
              }
            })
          }
        }
        Gz.length > 0 ? (Gz.shift(), Gz.unshift(...(0, Xz.sb)(Zz))) : Gz = (0, Xz.sb)(Zz)
      }
      return {
        name: Cz,
        desc: Gz,
        fontStyle: null !== (xz = mz.customAttributes) && void 0 !== xz && xz.author ? "italic" : "normal"
      }
    }

    function Hz(zz, tz, sz, Fz) {
      const Wz = vz(zz, sz),
        Xz = vz(zz, Fz);
      if (!Wz) return !1;
      const Oz = tz[Wz.name].armourReduction,
        oz = tz[Xz.name].armourReduction;
      if (oz === Oz) {
        var Uz, Kz, uz, Nz;
        const zz = null !== (Uz = null === (Kz = Wz.attributes.customAttributes) || void 0 === Kz ? void 0 : Kz.enchantmentTier) && void 0 !== Uz ? Uz : "Tier 0",
          tz = null !== (uz = null === (Nz = Xz.attributes.customAttributes) || void 0 === Nz ? void 0 : Nz.enchantmentTier) && void 0 !== uz ? uz : "Tier 0";
        return parseInt(zz.replace("Tier ", "")) >= parseInt(tz.replace("Tier ", ""))
      }
      return Oz > oz
    }

    function Bz(zz) {
      let tz;
      if ("number" === typeof zz) {
        const sz = document.querySelector(`[data-inven-idx="${zz}"]`);
        if (!sz) return null;
        tz = sz.getBoundingClientRect()
      } else tz = zz.getBoundingClientRect();
      return {
        x: tz.left + tz.width / 2,
        y: tz.top + tz.height / 2
      }
    }
  },
  8739: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => bz,
      h: () => wz,
      k: () => Dz
    });
    var Fz = sz(1419),
      Wz = sz(65),
      Xz = sz(1287),
      Oz = sz(4175),
      oz = sz(2250),
      vz = sz(1173),
      Uz = sz(106),
      Kz = sz(1901),
      uz = sz(1306),
      Nz = sz(1087);

    function bz(zz) {
      let {
        show: tz,
        onClose: sz
      } = zz;
      const {
        requestedGameNameWithVariation: Fz,
        lobbyName: Wz,
        shownLobbyName: Xz
      } = (0, Kz.l)("connectedGame"), vz = (0, oz.c)(Fz, Wz, !1);
      return Uz.featureFlags.canUseInviteLinks && (0, Nz.jsx)(Oz.b, {
        show: tz,
        close: sz,
        padShowsHud: !0,
        togglePointerLock: !1,
        globallyUniqueKey: "InviteLinkBox",
        doGameplayStartStopOnShow: !0,
        children: (0, Nz.jsxs)("div", {
          className: "InviteLinkBox AnimFadeInScaleUp",
          children: [(0, Nz.jsx)("div", {
            className: "InviteLinkBoxHeader SmallTextBold",
            children: "Invite Friends"
          }), (0, Nz.jsxs)("div", {
            className: "InviteLinkBoxDescription SmallTextLight",
            children: [(0, Nz.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: '"Join Lobby Name" Button Info'
            }), "Game: ", null === vz ? (0, Nz.jsx)(uz.d, {}) : vz, (0, Nz.jsx)("br", {}), "Lobby Name: ", Xz, (0, Nz.jsx)("br", {}), (0, Nz.jsx)("br", {}), (0, Nz.jsx)("br", {}), (0, Nz.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: "Link"
            })]
          }), (0, Nz.jsx)(wz, {})]
        })
      })
    }

    function wz() {
      var zz;
      const {
        t: tz
      } = (0, vz.B)(), sz = null !== (zz = Dz(Uz.featureFlags.canUseInviteLinks)) && void 0 !== zz ? zz : "Loading Link...", [Xz, Oz] = (0, Wz.useState)(0), [oz, Kz] = (0, Wz.useReducer)((zz => zz + 1), 0);
      return (0, Wz.useEffect)((() => {
        const zz = setTimeout((() => {
          Kz()
        }), 1100);
        return () => {
          clearTimeout(zz)
        }
      }), [Xz]), Uz.featureFlags.canUseInviteLinks && (0, Nz.jsxs)("div", {
        className: "InviteLinkInnerWrapper",
        children: [(0, Nz.jsx)("div", {
          className: "InviteLinkInner",
          children: sz
        }), (0, Nz.jsx)(Fz.h, {
          className: "InviteLinkCopyButton",
          onClick: () => {
            navigator.clipboard.writeText(sz).catch((zz => {
              console.error("Failed to copy invite link:", zz)
            })), Oz(Date.now())
          },
          disabled: Date.now() - Xz < 1e3,
          children: Date.now() - Xz < 1e3 ? tz("general:copied") : tz("general:copy")
        })]
      })
    }

    function Dz(zz) {
      const [tz, sz] = (0, Wz.useState)(null);
      return (0, Wz.useEffect)((() => {
        if (!zz) return;
        let tz = !0;
        return (0, Xz.E)().then((zz => {
          tz && sz(zz)
        })).catch((zz => {
          console.error("Failed to get invite link:", zz)
        })), () => {
          tz = !1
        }
      }), [zz]), tz
    }
  },
  8834: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Uz
    });
    var Fz = sz(65),
      Wz = sz(1020),
      Xz = sz.n(Wz),
      Oz = sz(1901),
      oz = sz(1087);

    function vz(zz) {
      const tz = Math.floor(zz / 3600),
        sz = Math.floor(zz % 3600 / 60),
        Fz = Math.floor(zz % 60),
        Wz = `${sz.toString().padStart(2,"0")}:${Fz.toString().padStart(2,"0")}`;
      return tz > 0 ? `${tz}:${Wz}` : Wz
    }
    const Uz = (0, Fz.memo)((function(zz) {
      let {
        className: tz
      } = zz;
      const {
        recording: sz,
        seconds: Fz
      } = (0, Oz.l)("replayRecorder");
      return sz ? (0, oz.jsxs)("div", {
        className: Xz()("RecordingIndicator", tz),
        children: [(0, oz.jsx)("span", {
          className: "RecordingIndicatorDot"
        }), (0, oz.jsx)("span", {
          className: "RecordingIndicatorLabel",
          children: "REC"
        }), (0, oz.jsx)("span", {
          className: "RecordingIndicatorTime",
          children: vz(Fz)
        })]
      }) : null
    }))
  },
  4514: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => gz
    });
    var Fz = sz(1020),
      Wz = sz.n(Fz),
      Xz = sz(4295),
      Oz = sz(1173),
      oz = sz(1036),
      vz = sz(1419),
      Uz = sz(1466),
      Kz = sz(1319),
      uz = sz(2341),
      Nz = sz(1087);
    const bz = {
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

    function wz(zz) {
      let {
        platform: tz
      } = zz;
      const sz = "youtube" === tz;
      return (0, Nz.jsxs)("span", {
        className: Wz()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: sz
        }),
        children: [sz && (0, Nz.jsx)(uz.c, {
          variant: "white"
        }), !sz && (0, Nz.jsx)(oz.c, {
          name: bz[tz].icon,
          kit: "brands"
        })]
      })
    }

    function Dz(zz) {
      let {
        platform: tz,
        link: sz,
        editable: Fz,
        userContext: Wz,
        onLinksUpdated: uz
      } = zz;
      const {
        t: Dz
      } = (0, Oz.B)(), gz = bz[tz];
      if (!sz && !Fz) return null;

      function Hz() {
        var zz;
        if (!Wz || !uz) return;
        Kz.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: gz.name
            }
          },
          prefixText: Xz.p[tz],
          placeholderText: "playBloxd",
          initialValue: null !== (zz = null === sz || void 0 === sz ? void 0 : sz.handle) && void 0 !== zz ? zz : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: sz ? "general:remove" : void 0
        }).getResult().then((async zz => {
          if ("notificationTornDown" !== zz && null !== zz) try {
            "submit" === zz.type ? await Uz.d.setSocialLink(Wz, tz, zz.value) : await Uz.d.clearSocialLink(Wz, tz), uz()
          } catch (sz) {
            console.error("Failed to update social link", sz), Kz.NotificationProvider.showAlertPopup({
              title: sz.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (sz) {
        const zz = `@${sz.handle}`;
        return (0, Nz.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: gz.color
          },
          href: sz.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, Nz.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, Nz.jsx)(wz, {
              platform: tz
            }), (0, Nz.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, Nz.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: zz
              })
            })]
          }), Fz && (0, Nz.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, vz.T)({
              stopPropagation: !0
            }),
            onClick: zz => {
              zz.stopPropagation(), zz.preventDefault(), Hz()
            },
            children: (0, Nz.jsx)(oz.c, {
              name: "pen-to-square"
            })
          }), !Fz && (0, Nz.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, Nz.jsx)(oz.c, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, Nz.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: gz.color
        },
        ...(0, vz.T)(),
        onClick: () => {
          Hz()
        },
        children: [(0, Nz.jsx)(wz, {
          platform: tz
        }), (0, Nz.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, Nz.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: gz.name
          }), (0, Nz.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: Dz("homePage:profileSocialLinkAdd")
          })]
        }), (0, Nz.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, Nz.jsx)(oz.c, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function gz(zz) {
      let {
        socialLinks: tz,
        editable: sz = !1,
        userContext: Fz,
        onLinksUpdated: Wz
      } = zz;
      if (!sz && 0 === tz.length) return null;
      const Oz = new Map(tz.map((zz => [zz.platform, zz]))),
        oz = sz ? Xz.n : tz.map((zz => zz.platform));
      return (0, Nz.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, Nz.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: oz.map((zz => (0, Nz.jsx)(Dz, {
            platform: zz,
            link: Oz.get(zz),
            editable: sz,
            userContext: Fz,
            onLinksUpdated: Wz
          }, zz)))
        })
      })
    }
  },
  8843: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Xz
    });
    var Fz = sz(4178),
      Wz = sz(4180);

    function Xz(zz) {
      let {
        children: tz,
        showing: sz,
        globallyUniqueKey: Xz,
        alwaysMountChildren: Oz = !1,
        doGameplayStartStopOnShow: oz = !0,
        keepsMovement: vz = !1
      } = zz;
      return (0, Wz.b)(!0, sz, Xz, vz), (0, Fz.e)(oz, sz), sz || Oz ? tz : null
    }
  },
  8900: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Xz
    });
    var Fz = sz(65),
      Wz = sz(3252);

    function Xz() {
      const [zz, tz] = (0, Fz.useState)(!1);
      return (0, Fz.useLayoutEffect)((() => {
        let zz = !0;
        return (0, Wz.d)().then((() => {
          zz && tz(!0)
        })), () => {
          zz = !1
        }
      }), []), zz
    }
  },
  6151: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Xz
    });
    var Fz = sz(65),
      Wz = sz(44);

    function Xz(zz, tz) {
      var sz;
      const [Xz, Oz] = (0, Fz.useState)(null !== (sz = Wz.f.getItem(zz)) && void 0 !== sz ? sz : tz);
      return [Xz, tz => {
        Wz.f.setItem(zz, tz), Oz(tz)
      }]
    }
  },
  8813: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Nz,
      f: () => uz
    });
    sz(8821);
    var Fz = sz(1020),
      Wz = sz.n(Fz),
      Xz = sz(65),
      Oz = sz(8785);

    function oz(zz, tz) {
      return Math.max(1, Math.round(zz * tz))
    }

    function vz(zz, tz, sz) {
      const Fz = 2 * sz >= tz - 1;
      return {
        x: zz,
        y: zz,
        size: tz,
        border: Math.min(sz, Math.floor(tz / 2)),
        filled: Fz
      }
    }
    var Uz = sz(1087);
    const Kz = 1.4;

    function uz(zz, tz) {
      return zz && tz ? `scale(${Kz})` : "scale(1)"
    }

    function Nz(zz) {
      return "classic" === zz.settings.style ? (0, Uz.jsx)(Dz, {
        ...zz
      }) : (0, Uz.jsx)(xz, {
        ...zz
      })
    }
    const bz = .125;

    function wz(zz, tz) {
      const sz = {};
      if (zz.color !== Oz.h.color && (sz.color = (0, Oz.n)(zz.color)), zz.opacity !== Oz.h.opacity && (sz.opacity = zz.opacity / 100), zz.outline !== Oz.h.outline || zz.outlineColor !== Oz.h.outlineColor) {
        const tz = zz.outline,
          Fz = (0, Oz.n)(zz.outlineColor);
        sz.textShadow = tz > 0 ? `-${tz}px 0 ${Fz}, 0 ${tz}px ${Fz}, ${tz}px 0 ${Fz}, 0 -${tz}px ${Fz}` : "none"
      }
      if (zz.size !== Oz.h.size) {
        const Fz = zz.size / 100;
        sz.fontSize = tz ? `calc(max(1.3rem, 18px) * ${Fz})` : `calc(1.3rem * ${Fz})`, sz.marginTop = `-${bz}em`, sz.transformOrigin = `50% calc(50% + ${bz}em)`
      }
      return sz
    }

    function Dz(zz) {
      let {
        settings: tz,
        touch: sz,
        inPreview: Fz,
        inEditor: Xz,
        pressed: Oz = !1,
        pressRef: oz
      } = zz;
      return (0, Uz.jsx)("div", {
        className: Wz()("Crosshair", {
          Touch: sz,
          CrosshairInPreview: Fz,
          CrosshairInEditor: Xz || Fz
        }),
        ref: oz,
        style: {
          transform: uz(Oz, tz.growOnClick),
          ...wz(tz, sz)
        },
        children: "+"
      })
    }

    function gz(zz, tz) {
      return zz / tz + "px"
    }

    function Hz(zz, tz, sz, Fz) {
      return {
        ...rz(zz, tz, sz),
        width: gz(zz.w, sz),
        height: gz(zz.h, sz),
        background: Fz
      }
    }

    function Bz(zz, tz, sz) {
      return {
        left: gz(zz.x, tz),
        top: gz(zz.y, tz),
        width: gz(zz.size, tz),
        height: gz(zz.size, tz),
        borderWidth: gz(zz.border, tz),
        borderColor: sz,
        background: zz.filled ? sz : void 0
      }
    }
    const Pz = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function rz(zz, tz, sz) {
      const [Fz, Wz] = zz.arm ? Pz[zz.arm] : [0, 0], Xz = Math.round(tz * sz);
      return {
        left: gz(zz.x + Fz * Xz, sz),
        top: gz(zz.y + Wz * Xz, sz)
      }
    }

    function Yz(zz) {
      return zz.arm ? {
        "data-arm": zz.arm,
        "data-x": zz.x,
        "data-y": zz.y
      } : {}
    }

    function xz(zz) {
      let {
        settings: tz,
        inPreview: sz,
        inEditor: Fz,
        pressed: uz = !1,
        spread: Nz,
        spreadRef: bz
      } = zz;
      const wz = (0, Xz.useRef)(null),
        {
          box: Dz,
          dpr: gz
        } = function(zz) {
          const [tz, sz] = (0, Xz.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, Xz.useLayoutEffect)((() => {
            const tz = zz.current;
            if (!tz) return;
            const Fz = () => {
              const zz = tz.getBoundingClientRect(),
                Fz = window.devicePixelRatio || 1;
              sz((tz => tz.dpr === Fz && tz.box.left === zz.left && tz.box.top === zz.top && tz.box.width === zz.width && tz.box.height === zz.height ? tz : {
                box: {
                  left: zz.left,
                  top: zz.top,
                  width: zz.width,
                  height: zz.height
                },
                dpr: Fz
              }))
            };
            Fz();
            const Wz = new ResizeObserver(Fz);
            return Wz.observe(tz), window.addEventListener("resize", Fz), window.addEventListener("scroll", Fz, !0), () => {
              Wz.disconnect(), window.removeEventListener("resize", Fz), window.removeEventListener("scroll", Fz, !0)
            }
          }), [zz]), tz
        }(wz),
        Pz = (0, Xz.useRef)(gz);
      Pz.current = gz;
      const xz = function(zz, tz) {
          const sz = oz(zz.lineThickness, tz),
            Fz = oz(zz.lineLength, tz),
            Wz = Math.round(zz.gap * tz),
            Xz = oz(zz.dotSize, tz),
            Oz = zz.outline > 0 ? oz(zz.outline, tz) : 0,
            Uz = oz(zz.circleThickness, tz),
            Kz = zz.circle ? Math.round(zz.circleRadius * tz * 2 + Uz) : 0,
            uz = function(zz, tz, sz, Fz) {
              return zz.lines ? tz : zz.dot ? sz : zz.circle && Fz % 2 === 0 ? 2 : 1
            }(zz, sz, Xz, Kz),
            Nz = [];
          if (zz.lines && (Nz.push({
              x: uz + Wz,
              y: 0,
              w: Fz,
              h: sz,
              arm: "right"
            }), Nz.push({
              x: -Wz - Fz,
              y: 0,
              w: Fz,
              h: sz,
              arm: "left"
            }), Nz.push({
              x: 0,
              y: uz + Wz,
              w: sz,
              h: Fz,
              arm: "down"
            }), zz.tStyle || Nz.push({
              x: 0,
              y: -Wz - Fz,
              w: sz,
              h: Fz,
              arm: "up"
            }), 0 === Wz && Nz.push({
              x: 0,
              y: 0,
              w: sz,
              h: sz
            })), zz.dot) {
            const zz = Math.floor((uz - Xz) / 2);
            Nz.push({
              x: zz,
              y: zz,
              w: Xz,
              h: Xz
            })
          }
          const bz = Nz.map((zz => ({
            ...zz,
            x: zz.x - Oz,
            y: zz.y - Oz,
            w: zz.w + 2 * Oz,
            h: zz.h + 2 * Oz
          })));
          let wz = null,
            Dz = null;
          if (zz.circle) {
            const zz = Kz + ((Kz - uz) % 2 === 0 ? 0 : 1),
              tz = (uz - zz) / 2;
            wz = vz(tz, zz, Uz), Oz > 0 && (Dz = vz(tz - Oz, zz + 2 * Oz, Uz + 2 * Oz))
          }
          return {
            cell: uz,
            fills: Nz,
            outlines: Oz > 0 ? bz : [],
            ring: wz,
            ringOutline: Dz
          }
        }(uz && tz.growOnClick ? function(zz, tz) {
          return {
            ...zz,
            outline: zz.outline * tz,
            lineLength: zz.lineLength * tz,
            lineThickness: zz.lineThickness * tz,
            gap: zz.gap * tz,
            dotSize: zz.dotSize * tz,
            circleRadius: zz.circleRadius * tz,
            circleThickness: zz.circleThickness * tz
          }
        }(tz, Kz) : tz, gz),
        mz = function(zz, tz, sz) {
          const Fz = Math.round((zz.left + zz.width / 2) * sz - tz / 2),
            Wz = Math.round((zz.top + zz.height / 2) * sz - tz / 2);
          return {
            x: Fz / sz - zz.left,
            y: Wz / sz - zz.top
          }
        }(Dz, xz.cell, gz),
        Jz = (0, Oz.n)(tz.color),
        Iz = (0, Oz.n)(tz.outlineColor),
        Cz = (0, Xz.useRef)(0);
      (0, Xz.useLayoutEffect)((() => {
        if (bz) return bz.current = zz => {
          var tz;
          Cz.current = zz, null === (tz = wz.current) || void 0 === tz || tz.querySelectorAll("[data-arm]").forEach((tz => {
            Object.assign(tz.style, rz(function(zz) {
              return {
                x: Number(zz.dataset.x),
                y: Number(zz.dataset.y),
                arm: zz.dataset.arm
              }
            }(tz), zz, Pz.current))
          }))
        }, () => {
          bz.current = null
        }
      }), [bz]);
      const ez = null !== Nz && void 0 !== Nz ? Nz : Cz.current;
      return (0, Uz.jsx)("div", {
        ref: wz,
        className: Wz()("CrosshairShapes", {
          CrosshairInPreview: sz,
          CrosshairInEditor: Fz || sz,
          CrosshairSpreads: void 0 !== bz
        }),
        children: (0, Uz.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: mz.x,
            top: mz.y,
            opacity: tz.opacity / 100
          },
          children: (0, Uz.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [xz.ringOutline && (0, Uz.jsx)("div", {
              className: "CrosshairRing",
              style: Bz(xz.ringOutline, gz, Iz)
            }), xz.outlines.map(((zz, tz) => (0, Uz.jsx)("div", {
              className: "CrosshairPart",
              ...Yz(zz),
              style: Hz(zz, ez, gz, Iz)
            }, `o${tz}`))), xz.ring && (0, Uz.jsx)("div", {
              className: "CrosshairRing",
              style: Bz(xz.ring, gz, Jz)
            }), xz.fills.map(((zz, tz) => (0, Uz.jsx)("div", {
              className: "CrosshairPart",
              ...Yz(zz),
              style: Hz(zz, ez, gz, Jz)
            }, `f${tz}`)))]
          })
        })
      })
    }
  },
  8823: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Kz,
      g: () => gz,
      k: () => Dz
    });
    var Fz = sz(8785);
    const Wz = "XH1-",
      Xz = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      Oz = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      oz = ["color", "outlineColor"],
      vz = 1 + 3 * oz.length + Oz.length + 1,
      Uz = Math.ceil(8 * vz / Math.log2(62)),
      Kz = Wz.length + Uz;

    function uz(zz) {
      let tz = 90;
      for (const sz of zz) tz = 31 * tz + sz & 255;
      return tz
    }
    const Nz = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      bz = BigInt(Nz.length);

    function wz(zz, tz) {
      let sz = 0n;
      for (const Wz of zz) {
        const zz = Nz.indexOf(Wz);
        if (zz < 0) return null;
        sz = sz * bz + BigInt(zz)
      }
      if (sz >> BigInt(8 * tz) !== 0n) return null;
      const Fz = [];
      for (let Wz = 0; Wz < tz; Wz++) Fz.unshift(Number(0xffn & sz)), sz >>= 8n;
      return Fz
    }

    function Dz(zz) {
      let tz = "shapes" === zz.style ? 1 : 0;
      Xz.forEach(((sz, Fz) => {
        zz[sz] && (tz |= 1 << Fz + 1)
      }));
      const sz = [tz];
      for (const Wz of oz) {
        const tz = (0, Fz.l)(Wz, zz[Wz]);
        sz.push(tz >> 16 & 255, tz >> 8 & 255, 255 & tz)
      }
      for (const Wz of Oz) {
        const {
          min: tz,
          step: Xz
        } = Fz.e[Wz];
        sz.push(Math.round(((0, Fz.l)(Wz, zz[Wz]) - tz) / Xz))
      }
      return sz.push(uz(sz)), Wz + function(zz, tz) {
        let sz = 0n;
        for (const Wz of zz) sz = sz << 8n | BigInt(Wz);
        let Fz = "";
        for (let Wz = 0; Wz < tz; Wz++) Fz = Nz[Number(sz % bz)] + Fz, sz /= bz;
        return Fz
      }(sz, Uz)
    }

    function gz(zz) {
      for (const tz of zz.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${Uz}})`, "gi"))) {
        const zz = Hz(wz(tz[1], vz));
        if (zz) return zz
      }
      return null
    }

    function Hz(zz) {
      if (!zz || zz.length !== vz || uz(zz.slice(0, -1)) !== zz[zz.length - 1]) return null;
      const tz = zz[0],
        sz = {
          ...Fz.h,
          style: 1 & tz ? "shapes" : "classic"
        };
      Xz.forEach(((zz, Fz) => {
        sz[zz] = 0 !== (tz & 1 << Fz + 1)
      }));
      let Wz = 1;
      for (const Fz of oz) sz[Fz] = zz[Wz] << 16 | zz[Wz + 1] << 8 | zz[Wz + 2], Wz += 3;
      for (const Xz of Oz) {
        const {
          min: tz,
          step: Oz
        } = Fz.e[Xz];
        sz[Xz] = (0, Fz.l)(Xz, tz + zz[Wz] * Oz), Wz++
      }
      return sz
    }
  },
  8785: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Fz,
      h: () => Wz,
      l: () => Xz,
      n: () => Uz,
      q: () => vz,
      u: () => Kz,
      v: () => oz,
      y: () => Oz
    });
    const Fz = {
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
      Wz = Object.freeze({
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

    function Xz(zz, tz) {
      var sz;
      const {
        min: Xz,
        max: Oz,
        step: oz
      } = Fz[zz];
      if (!Number.isFinite(tz)) return Wz[zz];
      const vz = (null !== (sz = String(oz).split(".")[1]) && void 0 !== sz ? sz : "").length,
        Uz = Number((Math.round(tz / oz) * oz).toFixed(vz));
      return Math.min(Oz, Math.max(Xz, Uz))
    }

    function Oz(zz, tz, sz) {
      const Fz = "number" === typeof sz ? Xz(tz, sz) : sz;
      return {
        ...zz,
        [tz]: Fz
      }
    }

    function oz(zz, tz) {
      let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(Wz).every((Fz => sz.includes(Fz) || zz[Fz] === tz[Fz]))
    }

    function vz(zz) {
      return oz(zz, Wz)
    }

    function Uz(zz) {
      return `#${zz.toString(16).padStart(6,"0")}`
    }

    function Kz(zz) {
      const tz = /^#?([0-9a-f]{6})$/i.exec(zz.trim());
      return tz ? parseInt(tz[1], 16) : null
    }
  },
  8826: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => uz,
      f: () => Nz
    });
    var Fz = sz(65),
      Wz = sz(44),
      Xz = sz(8823),
      Oz = sz(8785);
    const oz = "crosshairCode";
    let vz = null;
    const Uz = new Set;

    function Kz() {
      if (null === vz) {
        var zz;
        const tz = Wz.f.getItem(oz);
        vz = null !== (zz = "string" === typeof tz ? (0, Xz.g)(tz) : null) && void 0 !== zz ? zz : Oz.h
      }
      return vz
    }

    function uz(zz) {
      vz = zz, (0, Oz.q)(zz) ? Wz.f.removeItem(oz) : Wz.f.setItem(oz, (0, Xz.k)(zz));
      for (const tz of Uz) tz()
    }

    function Nz() {
      const [zz, tz] = (0, Fz.useState)(Kz);
      return (0, Fz.useEffect)((() => {
        const zz = () => {
          tz(Kz())
        };
        return zz(), sz = zz, Uz.add(sz), () => {
          Uz.delete(sz)
        };
        var sz
      }), []), zz
    }
  },
  8381: (zz, tz, sz) => {
    function Fz(zz) {
      return {
        x: (zz.left + zz.right) / 2,
        y: (zz.top + zz.bottom) / 2
      }
    }

    function Wz(zz) {
      return 0 === zz.length ? null : zz.reduce(((zz, tz) => ({
        left: Math.min(zz.left, tz.left),
        top: Math.min(zz.top, tz.top),
        right: Math.max(zz.right, tz.right),
        bottom: Math.max(zz.bottom, tz.bottom)
      })))
    }

    function Xz(zz, tz) {
      const sz = Math.max(0, (tz - (zz.right - zz.left)) / 2),
        Fz = Math.max(0, (tz - (zz.bottom - zz.top)) / 2);
      return {
        left: zz.left - sz,
        top: zz.top - Fz,
        right: zz.right + sz,
        bottom: zz.bottom + Fz
      }
    }

    function Oz(zz, tz) {
      return tz.x >= zz.left && tz.x <= zz.right && tz.y >= zz.top && tz.y <= zz.bottom
    }

    function oz(zz, tz, sz) {
      let Wz = null,
        oz = 1 / 0;
      for (const {
          id: Fz,
          box: Xz
        }
        of tz) {
        const tz = (Xz.right - Xz.left) * (Xz.bottom - Xz.top);
        Oz(Xz, zz) && tz < oz && (oz = tz, Wz = Fz)
      }
      if (null !== Wz) return Wz;
      let vz = 1 / 0;
      for (const {
          id: Uz,
          box: Kz
        }
        of tz) {
        if (!Oz(Xz(Kz, sz), zz)) continue;
        const tz = Fz(Kz),
          oz = Math.hypot(zz.x - tz.x, zz.y - tz.y);
        oz < vz && (vz = oz, Wz = Uz)
      }
      return Wz
    }

    function vz(zz, tz, sz) {
      return {
        left: sz.left,
        top: sz.top,
        right: zz - sz.right,
        bottom: tz - sz.bottom
      }
    }

    function Uz(zz, tz, sz, Fz) {
      const Wz = (zz, tz, sz) => Math.max(Math.min(tz, 0), Math.min(Math.max(sz, 0), zz));
      return {
        x: Wz(tz, Fz.left - zz.left, Fz.right - zz.right),
        y: Wz(sz, Fz.top - zz.top, Fz.bottom - zz.bottom)
      }
    }

    function Kz(zz, tz, sz, Fz, Wz) {
      const Xz = zz.dx * Fz + tz,
        Oz = zz.dy * Wz + sz,
        oz = zz => Math.max(-1, Math.min(1, zz));
      return {
        dx: oz(Xz / Fz),
        dy: oz(Oz / Wz)
      }
    }

    function uz(zz, tz, sz, Fz) {
      return tz <= 0 || sz <= 0 ? 1 : Math.max(.05, Math.min(1, zz / tz, Fz / sz))
    }

    function Nz(zz, tz, sz) {
      return Math.min(zz.right, tz.right) - Math.max(zz.left, tz.left) > sz && Math.min(zz.bottom, tz.bottom) - Math.max(zz.top, tz.top) > sz
    }

    function bz(zz, tz) {
      const sz = (zz, tz, sz, Fz) => tz - zz > Fz - sz ? sz - zz > tz - Fz ? Fz - tz : sz - zz : zz < sz ? sz - zz : tz > Fz ? Fz - tz : 0;
      return {
        x: sz(zz.left, zz.right, tz.left, tz.right),
        y: sz(zz.top, zz.bottom, tz.top, tz.bottom)
      }
    }

    function wz(zz, tz) {
      let {
        avoid: sz = null,
        bounds: Fz = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, Wz = 0, Xz = 1 / 0;
      return zz.forEach(((zz, Oz) => {
        const oz = tz.filter((tz => Nz(zz, tz, 0))).length,
          vz = null !== Fz && (zz.left < Fz.left || zz.top < Fz.top || zz.right > Fz.right || zz.bottom > Fz.bottom),
          Uz = oz + (sz && Nz(zz, sz, 0) ? 1e3 : 0) + (vz ? 1e6 : 0);
        Uz < Xz && (Wz = Oz, Xz = Uz)
      })), Wz
    }
    sz.d(tz, {
      B: () => Wz,
      c: () => Fz,
      d: () => Oz,
      f: () => Nz,
      h: () => Uz,
      k: () => Xz,
      l: () => wz,
      p: () => Kz,
      r: () => oz,
      v: () => uz,
      w: () => vz,
      y: () => bz
    })
  },
  8779: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Xz,
      i: () => Wz
    });
    var Fz = sz(30);

    function Wz(zz, tz) {
      return zz && !tz
    }

    function Xz() {
      return Wz(Fz.b.get("isTouchScreen"), Fz.b.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  8732: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Fz
    });
    const Fz = new Set(["chunkBorders"])
  },
  8723: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      ALL_DEV_TOOLS: () => Oz,
      coreDevTools: () => Uz,
      devTools: () => vz
    });
    var Fz = sz(601),
      Wz = sz(1279),
      Xz = sz(8732);
    const Oz = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function oz() {
      const {
        noaDevTools: zz
      } = await sz.e(230).then((() => sz(40160)));
      return zz
    }
    const vz = new class {
        constructor() {
          this.loadHost = oz, this.tools = Oz
        }
        setHost(zz) {
          this.tools = null === zz ? Oz : zz.tools, this.loadHost = null === zz ? oz : async () => zz
        }
        supports(zz) {
          return this.tools.has(zz)
        }
        async downloadScene(zz, tz) {
          const sz = await this.loadHost();
          await sz.downloadScene(zz, tz)
        }
        async setAmbientLightIntensity(zz) {
          const tz = await this.loadHost();
          await tz.setAmbientLightIntensity(zz)
        }
      },
      Uz = {
        tools: Xz.e,
        downloadScene: async () => {
          throw new Error("This client can't download the scene")
        },
        setAmbientLightIntensity: async () => {
          throw new Error("This client can't set the ambient light")
        }
      };
    Fz.p && vz.setHost(Uz), (0, Wz.t)((() => {
      vz.setHost(Uz)
    }))
  },
  8897: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Oz,
      d: () => Wz,
      e: () => Kz
    });
    var Fz = sz(1521);

    function Wz(zz) {
      var tz;
      return {
        ...Oz.store,
        yaw: Oz.store.yaw + (null !== (tz = Fz.d[zz].previewYaw) && void 0 !== tz ? tz : 0)
      }
    }
    const Xz = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      Oz = {
        player: Xz,
        store: {
          ...Xz,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function oz(zz, tz) {
      zz instanceof Promise ? zz.then(tz).catch((zz => {
        console.error("Couldn't open the preview", zz)
      })) : tz(zz)
    }
    class vz {
      constructor(zz) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, oz(zz, (zz => {
          this.closed ? zz.close() : (this.opened = zz, null !== this.size && zz.resize(this.size.width, this.size.height), null !== this.view && zz.show(this.view))
        }))
      }
      show(zz) {
        var tz;
        this.view = zz, null === (tz = this.opened) || void 0 === tz || tz.show(zz)
      }
      resize(zz, tz) {
        var sz;
        this.size = {
          width: zz,
          height: tz
        }, null === (sz = this.opened) || void 0 === sz || sz.resize(zz, tz)
      }
      close() {
        var zz;
        this.closed = !0, null === (zz = this.opened) || void 0 === zz || zz.close(), this.opened = null
      }
    }
    class Uz {
      constructor(zz) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(zz).then((zz => zz.ready)), oz(zz, (zz => {
          this.closed ? zz.close() : (this.opened = zz, null !== this.size && zz.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var zz, tz;
        return null !== (zz = null === (tz = this.opened) || void 0 === tz ? void 0 : tz.isReady()) && void 0 !== zz && zz
      }
      setCosmetic(zz, tz) {
        var sz;
        null === (sz = this.opened) || void 0 === sz || sz.setCosmetic(zz, tz)
      }
      playEmote(zz) {
        var tz;
        null === (tz = this.opened) || void 0 === tz || tz.playEmote(zz)
      }
      setOrbit(zz) {
        var tz;
        null === (tz = this.opened) || void 0 === tz || tz.setOrbit(zz)
      }
      resetCamera() {
        var zz;
        null === (zz = this.opened) || void 0 === zz || zz.resetCamera()
      }
      async untilDrawn(zz) {
        var tz;
        await this.ready, await (null === (tz = this.opened) || void 0 === tz ? void 0 : tz.untilDrawn(zz))
      }
      resize(zz, tz) {
        var sz;
        this.size = {
          width: zz,
          height: tz
        }, null === (sz = this.opened) || void 0 === sz || sz.resize(zz, tz)
      }
      close() {
        var zz;
        this.closed = !0, null === (zz = this.opened) || void 0 === zz || zz.close(), this.opened = null
      }
    }
    const Kz = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(zz) {
        this.host = zz
      }
      setDefaultHost(zz) {
        this.makeDefault = zz
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(zz) {
        return new vz(this.current().openMob(zz))
      }
      openPet(zz) {
        return new vz(this.current().openPet(zz))
      }
      openMobLineup(zz) {
        return new vz(this.current().openMobLineup(zz))
      }
      openCharacter(zz, tz) {
        return new Uz(this.current().openCharacter(zz, tz))
      }
    }
  },
  8891: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Fz.b,
      c: () => Fz.d,
      f: () => Fz.e
    });
    var Fz = sz(8897);
    class Wz {
      constructor(zz) {
        this.load = zz, this.loaded = null, this.loading = null
      }
      run(zz) {
        return null !== this.loaded ? zz(this.loaded) : (this.loading ??= this.load().then((zz => (this.loaded = zz, zz)), (zz => {
          throw this.loading = null, zz
        })), this.loading.then(zz))
      }
    }
    class Xz {
      constructor() {
        this.mobScene = new Wz((() => Promise.all([sz.e(69), sz.e(226), sz.e(225), sz.e(244), sz.e(94), sz.e(245), sz.e(72), sz.e(71), sz.e(242), sz.e(70), sz.e(252), sz.e(246), sz.e(251), sz.e(249), sz.e(241), sz.e(218), sz.e(264), sz.e(222), sz.e(236), sz.e(247), sz.e(250), sz.e(74), sz.e(196), sz.e(215), sz.e(219), sz.e(93), sz.e(113), sz.e(234), sz.e(73), sz.e(112), sz.e(153)]).then((() => sz(40173))))), this.characterScene = new Wz((() => Promise.all([sz.e(69), sz.e(226), sz.e(225), sz.e(244), sz.e(94), sz.e(245), sz.e(72), sz.e(71), sz.e(242), sz.e(70), sz.e(252), sz.e(246), sz.e(251), sz.e(249), sz.e(241), sz.e(218), sz.e(264), sz.e(222), sz.e(236), sz.e(247), sz.e(250), sz.e(74), sz.e(196), sz.e(215), sz.e(219), sz.e(93), sz.e(113), sz.e(234), sz.e(73), sz.e(112), sz.e(152)]).then((() => sz(40255)))))
      }
      openMob(zz) {
        return this.mobScene.run((tz => tz.openMobPreview(zz)))
      }
      openPet(zz) {
        return this.mobScene.run((tz => tz.openPetPreview(zz)))
      }
      openMobLineup(zz) {
        return this.mobScene.run((tz => tz.openMobLineupPreview(zz)))
      }
      openCharacter(zz, tz) {
        return this.characterScene.run((sz => sz.openCharacterPreview(zz, tz)))
      }
    }
    Fz.e.setDefaultHost((() => new Xz))
  },
  6237: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Wz,
      g: () => Xz
    });
    var Fz = sz(44);
    const Wz = "shaderPack";
    async function Xz() {
      var zz;
      let tz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (zz = await Fz.e.getItem(Wz, tz)) && void 0 !== zz ? zz : null
    }
  },
  8752: (zz, tz, sz) => {
    function Fz(zz, tz) {
      return zz && !tz
    }
    sz.d(tz, {
      d: () => Fz
    })
  },
  8771: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Xz
    });
    var Fz = sz(1060);

    function Wz() {
      var zz, tz;
      return null !== (zz = null === (tz = screen.orientation) || void 0 === tz ? void 0 : tz.type) && void 0 !== zz ? zz : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const Xz = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && Wz() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = Wz(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, Fz.SD)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const zz of this.resizers) zz()
          }
        }), 1e3)
      }
      heldSizer(zz) {
        let tz = !1;
        return () => {
          if (tz && this.isHeld()) return null;
          const sz = zz();
          return tz ||= null !== sz, sz
        }
      }
      onRelease(zz) {
        return this.resizers.add(zz), () => {
          this.resizers.delete(zz)
        }
      }
    }
  },
  8376: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => oz,
      e: () => vz
    });
    var Fz = sz(30),
      Wz = sz(1293),
      Xz = sz(106);
    const Oz = {
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

    function oz() {
      return (0, Xz.isMobile)() && "function" === typeof navigator.vibrate
    }
    const vz = new class {
      constructor(zz) {
        this.deps = zz, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(zz, tz) {
        var sz;
        if (!this.deps.enabled()) return;
        const Fz = Oz[zz],
          Wz = null !== tz && void 0 !== tz ? tz : Fz.pattern;
        if (null === Wz) return void console.warn("No vibration pattern for", zz);
        const Xz = this.deps.now();
        Xz - this.lastAnyAt < 40 && Fz.priority < this.playingPriority || Xz - (null !== (sz = this.lastAt.get(zz)) && void 0 !== sz ? sz : -1 / 0) < Fz.minGapMs || Xz < this.playingUntil && Fz.priority < this.playingPriority || (this.lastAt.set(zz, Xz), this.lastAnyAt = Xz, this.playingUntil = Xz + Wz.reduce(((zz, tz) => zz + tz), 0), this.playingPriority = Fz.priority, this.deps.vibrate(Wz))
      }
    }({
      vibrate: zz => {
        navigator.vibrate([...zz])
      },
      now: () => performance.now(),
      enabled: () => oz() && Fz.b.get("isTouchScreen") && Fz.b.get("clientEscMenuOptions").vibration && !(0, Wz.e)()
    })
  },
  8744: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => bz,
      e: () => Nz
    });
    var Fz = sz(30),
      Wz = sz(1636),
      Xz = sz(44),
      Oz = sz(1319),
      oz = sz(3330),
      vz = sz(1447),
      Uz = sz(1358);
    const Kz = 2592e5,
      uz = "notificationOptInLastPromptedAt";
    async function Nz() {
      var zz;
      const tz = await bz();
      if (null === tz) return;
      const sz = null !== (zz = Xz.f.getItem(uz)) && void 0 !== zz ? zz : 0;
      if (Date.now() - sz < Kz) return;
      if ((0, Uz.c)()) return;
      const Fz = await Oz.NotificationProvider.showPromptPopup({
        icon: "bell",
        title: "mobilePushNotifications:optInTitle",
        subtitle: Wz.c.supports("notifications") ? "mobilePushNotifications:optInSubtitle" : "mobilePushNotifications:optInSubtitleBrowser",
        confirmText: "mobilePushNotifications:optInConfirm",
        cancelText: "mobilePushNotifications:optInCancel",
        padStartsOn: "cancel"
      }).getResult();
      "notificationTornDown" !== Fz && (Xz.f.setItem(uz, Date.now()), (0, vz.reportAnalyticsClick)({
        id: !0 === Fz ? "push.allow" : "push.deny",
        value: Wz.c.supports("notifications") ? "app" : "browser"
      }), !0 === Fz && tz().catch((zz => {
        console.error("Failed to ask for push notifications:", zz)
      })))
    }
    async function bz() {
      return await Wz.c.ready, Wz.c.supports("notifications") ? Fz.b.get("mobilePushNotificationsCanAsk") ? async () => {
        Wz.c.request("notifications.requestPermission", {}).then((zz => {
          let {
            canAsk: tz
          } = zz;
          Fz.b.set({
            mobilePushNotificationsCanAsk: tz
          })
        }), (zz => {
          console.error("The app couldn't ask for push notifications:", zz)
        }))
      }: null: await oz.e.canAsk() ? () => oz.e.requestPermission() : null
    }
  },
  8755: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => oz,
      g: () => vz
    });
    var Fz = sz(30);
    const Wz = 24,
      Xz = "farNametags",
      Oz = 1e5;

    function oz() {
      var zz;
      return null === (zz = Fz.b.get("showDistantNametags")) || void 0 === zz || zz
    }

    function vz() {
      var zz;
      return null !== (zz = function() {
        const zz = new URLSearchParams(window.location.search).get(Xz),
          tz = null === zz || "" === zz ? NaN : Number(zz);
        return Number.isFinite(tz) && tz >= 0 ? Math.min(tz, Oz) : null
      }()) && void 0 !== zz ? zz : oz() ? 0 : Wz
    }
  },
  8874: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Wz,
      f: () => Oz
    });
    const Fz = [{
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

    function Wz(zz) {
      let tz, sz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof zz) {
        if (!Number.isFinite(zz)) return "0";
        if (Math.abs(zz) < 100) {
          const tz = zz < 0 ? "-" : "",
            sz = Math.abs(zz);
          return sz >= 10 ? `${tz}${sz.toFixed(1).replace(/\.0$/,"")}` : `${tz}${sz.toFixed(2).replace(/\.?0+$/,"")}`
        }
        tz = BigInt(Math.floor(zz))
      } else tz = zz;
      const Wz = tz < 0n ? -tz : tz,
        Xz = tz < 0n ? "-" : "",
        Oz = Wz.toString();
      if (Oz.length <= sz) return `${Xz}${Oz}`;
      const oz = 3 * Math.floor((Oz.length - 1) / 3);
      if (oz < 3) return `${Xz}${Oz}`;
      if (oz > 3 * Fz.length) {
        const zz = Oz[0],
          tz = Oz.slice(1, 3).replace(/0+$/, "");
        return `${Xz}${tz?`${zz}.${tz}`:zz}e${Oz.length-1}`
      }
      const {
        threshold: vz,
        suffix: Uz
      } = Fz[Fz.length - oz / 3], Kz = Wz / vz, uz = Number(1000n * (Wz % vz) / vz), Nz = Number(Kz) + uz / 1e3;
      let bz;
      return bz = Nz >= 100 ? Math.floor(Nz).toString() : Nz >= 10 ? Nz.toFixed(1).replace(/\.0$/, "") : Nz.toFixed(2).replace(/\.?0+$/, ""), `${Xz}${bz}${Uz}`
    }
    const Xz = Fz.map((zz => {
      let {
        threshold: tz,
        suffix: sz
      } = zz;
      return {
        threshold: Number(tz),
        suffix: sz
      }
    })).filter((zz => {
      let {
        threshold: tz
      } = zz;
      return Number.isFinite(tz)
    }));

    function Oz(zz) {
      const tz = Math.abs(zz),
        sz = zz < 0 ? "-" : "";
      for (const {
          threshold: Fz,
          suffix: Wz
        }
        of Xz)
        if (tz >= Fz) {
          const zz = tz / Fz;
          if (zz >= 1e3) return `${sz}${tz.toExponential(2).replace("e+","e")}`;
          let Xz;
          return Xz = zz >= 100 ? Math.floor(zz).toString() : zz >= 10 ? zz.toFixed(1).replace(/\.0$/, "") : zz.toFixed(2).replace(/\.?0+$/, ""), `${sz}${Xz}${Wz}`
        } return `${sz}${tz}`
    }
  },
  8856: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Kz,
      g: () => Nz,
      k: () => uz,
      o: () => Oz,
      r: () => Uz,
      u: () => vz
    });
    var Fz = sz(321);
    const Wz = ["Wood Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table"],
      Xz = {
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

    function Oz(zz) {
      var tz;
      return null !== (tz = Xz[zz]) && void 0 !== tz ? tz : {
        translationKey: ""
      }
    }
    const oz = {
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

    function vz(zz) {
      return Wz.includes(zz)
    }

    function Uz(zz) {
      var tz;
      return !0 === (null === zz || void 0 === zz || null === (tz = zz.customAttributes) || void 0 === tz ? void 0 : tz.cannotEnchant)
    }

    function Kz(zz, tz) {
      const {
        max: sz
      } = oz[zz].at(-1);
      return tz <= sz
    }

    function uz(zz) {
      const tz = Math.sin(zz / 80),
        sz = zz => {
          if (zz <= 0) return 0;
          if (zz > 1) return 1;
          let tz = 0;
          const sz = [1, 7, 21, 35, 35, 21, 7, 1];
          for (let Fz = 0; Fz < sz.length; Fz++) {
            tz += (Fz % 2 === 0 ? 1 : -1) * sz[Fz] * Math.pow(zz, 2 + Fz) / (2 + Fz)
          }
          return 72 * tz
        },
        Fz = .3 - .78 * tz,
        Wz = .5 - .78 * tz,
        Xz = .6 - .7 * tz,
        Oz = .8 - .6 * tz;
      let oz = sz(Fz),
        vz = sz(Wz) - oz,
        Uz = sz(Xz) - vz - oz,
        Kz = sz(Oz) - Uz - vz - oz;
      Fz < .041 && (vz /= 1 - oz, Uz /= 1 - oz, Kz /= 1 - oz, oz = 0), Wz < .041 && (oz /= 1 - vz, Uz /= 1 - vz, Kz /= 1 - vz, vz = 0), Xz < .041 && (oz /= 1 - Uz, vz /= 1 - Uz, Kz /= 1 - Uz, Uz = 0), Oz < .041 && (oz /= 1 - Kz, vz /= 1 - Kz, Uz /= 1 - Kz, Kz = 0);
      return {
        commonProb: oz,
        uncommonProb: vz,
        rareProb: Uz,
        epicProb: Kz,
        legendaryProb: 1 - (Kz + Uz + vz + oz)
      }
    }

    function Nz(zz, tz) {
      const {
        min: sz,
        max: Wz
      } = oz[zz][tz], Xz = Fz.c.sampleUniformIntDistribution(sz, Wz, "includeMax");
      return {
        ...uz(Xz),
        level: Xz
      }
    }
  },
  8279: (zz, tz, sz) => {
    function Fz(zz, tz) {
      return !zz.hidden && (tz || !zz.isRewardedAd)
    }

    function Wz(zz) {
      return "object" === typeof zz ? zz.option : zz
    }

    function Xz(zz, tz) {
      var sz;
      if ("dropdown" === (null === (sz = zz.userInput) || void 0 === sz ? void 0 : sz.type) && "object" === typeof zz.userInput.dropdownOptions[0]) {
        for (const sz of zz.userInput.dropdownOptions)
          if (Wz(sz) === tz) return "object" === typeof sz ? sz.cost : zz.cost;
        console.error("Didn't find matching option for dropdown item. Item:", zz, "input:", tz)
      }
      return zz.cost
    }

    function Oz(zz, tz, sz) {
      var Fz;
      const Wz = null !== (Fz = sz.excludedPlayers) && void 0 !== Fz ? Fz : [tz];
      return zz.filter((zz => !Wz.includes(zz)))
    }
    sz.d(tz, {
      b: () => Xz,
      e: () => Wz,
      i: () => Oz,
      k: () => Fz
    })
  },
  8821: () => {},
  8794: zz => {
    zz.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAaUlEQVR4AWyOQQ6AIAwECwGNr/HkYzz4Hy9+WEkq01BDDCRDy3ZbGo9rU2c/V+1Bj9JOeW7RokaTBO0zpDxJXmYJKXjdohlwOqbWi4YaJFIgcYEIaGAT+JvHCDNQ8El9ziQz/BdzE00vAAAA//+cTXaSAAAABklEQVQDAHI9N5g1NM74AAAAAElFTkSuQmCC"
  },
  8799: zz => {
    zz.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAGBJREFUGJVNjjEOxEAIA+dW22Rpk2+nSndPZFtMewU6FBdIjJHx536+ABARUl7XCbjvyV9mJqX7BtY6RkS0t9bRc0op5ZuaGTAqtPZCpfG+AqSs8FFlulh7s6j7rh9d9wclFjd0V4Z2HAAAAABJRU5ErkJggg=="
  },
  8804: zz => {
    zz.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAbUlEQVR4nESOSwqAMAxEow0pive/gIcTBBdSsZh+NG20DlnkM8MLhnXuzHSnAwBaI8LIV2RXOiIkaGfMKfXGyByZparbyQZpGNUV/KaHGrWowZKVgSx8Qr8vzdXgAkYFCIn9mZP7E8pQ1Q9fzAMAAP//PTNTFgAAAAZJREFUAwAk1D9dXrbJngAAAABJRU5ErkJggg=="
  },
  8809: zz => {
    zz.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAE1JREFUGJVNjsEOwDAIQp/GZv3/j+xx5zVbsh0wZFxEImCsc88RRwHsB5OaI8SA636hjwosNXSUWuRTphxp5iahHX+pozQs+Yt0rU1SPg0CIfgDMgomAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);