export const id = 97;
export const ids = [97, 185];
export const modules = {
  8877: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      EverythingMenu: () => iM
    });
    var Ez = bz(56),
      nz = bz(1038),
      iz = bz.n(nz),
      lz = bz(1181),
      Mz = bz(1047),
      tz = bz(1998),
      Hz = bz(1102),
      Oz = bz(1089);

    function pz(zz) {
      let {
        items: uz,
        onClick: bz,
        selectedItemId: Ez,
        className: nz,
        padStartsOnTab: pz = !0
      } = zz;
      const {
        t: dz
      } = (0, lz.F)(), Fz = (0, Hz.n)(), Zz = [];
      for (const iz of uz) {
        var Rz;
        const zz = Zz[Zz.length - 1];
        var Kz;
        if (zz && zz.title === (null !== (Rz = iz.section) && void 0 !== Rz ? Rz : null)) zz.items.push(iz);
        else Zz.push({
          title: null !== (Kz = iz.section) && void 0 !== Kz ? Kz : null,
          items: [iz]
        })
      }
      return (0, Oz.jsx)("div", {
        className: iz()("MenuSideBarBody", nz),
        "data-pad-tabs": "2",
        children: Zz.map(((zz, uz) => {
          var nz;
          return (0, Oz.jsxs)("div", {
            className: "MenuSideBarSection",
            children: [zz.title && (0, Oz.jsx)("div", {
              className: "MenuSideBarSectionTitle",
              children: dz(zz.title)
            }), zz.items.map((zz => {
              var uz;
              const nz = !!zz.iconElement || !!zz.faIcon;
              return (0, Oz.jsxs)("div", {
                "data-pad-tab": !0,
                "data-pad-selected": Ez === zz.id ? "true" : void 0,
                "data-pad-default-focus": pz && Ez === zz.id || void 0,
                className: iz()("MenuSideBarBodyTab", {
                  ActiveMenuSideBarBodyTab: Ez === zz.id
                }),
                onClick: () => {
                  bz(zz.id)
                },
                children: [nz && (0, Oz.jsx)("div", {
                  className: "MenuSideBarBodyTabIcon",
                  children: null !== (uz = zz.iconElement) && void 0 !== uz ? uz : (0, Oz.jsx)(Mz.c, {
                    name: zz.faIcon
                  })
                }), (!Fz || !nz) && (0, Oz.jsx)("div", {
                  children: dz(zz.title)
                }), zz.redDot && (0, Oz.jsx)(tz.b, {
                  top: "-0.2rem",
                  right: "-1rem"
                })]
              }, zz.id)
            }))]
          }, null !== (nz = zz.title) && void 0 !== nz ? nz : uz)
        }))
      })
    }
    var dz = bz(2756),
      Fz = bz(1114),
      Zz = bz(2313),
      Rz = bz(1108),
      Kz = bz(1419),
      wz = bz(96),
      Xz = bz(1871),
      fz = bz(2158),
      sz = bz(2166),
      rz = bz(1628),
      oz = bz(1305),
      Nz = bz(4746),
      vz = bz(20),
      xz = bz(8886);

    function Jz(zz) {
      let {
        setApplySettingsCallback: uz
      } = zz;
      const {
        clientEscMenuOptions: bz
      } = (0, vz.m)(["clientEscMenuOptions"]), [nz, iz] = (0, Ez.useState)(!1), [lz, Mz] = (0, Ez.useState)(!1), [tz, Hz] = (0, Ez.useState)(6400), [pz, dz] = (0, Ez.useState)(3600), [Fz, Zz] = (0, Ez.useState)(!1), [Rz, wz] = (0, Ez.useState)(!1);

      function Xz(zz) {
        const uz = "screenshot" === zz ? Mz : iz;
        uz(!0);
        const bz = Fz ? "normals" : Rz ? "depth" : null;
        xz.devTools.downloadScene(zz, {
          width: tz,
          height: pz,
          colouring: bz
        }).catch((zz => {
          console.error("Couldn't download the scene", zz)
        })).finally((() => {
          uz(!1)
        }))
      }
      return (0, Oz.jsxs)("div", {
        className: "DeveloperToolsCategory",
        children: [(0, Oz.jsx)(Nz.b, {
          label: "Disable Ambient Occlusion",
          checked: bz.disableAmbientOcclusion,
          onClick: zz => {
            vz.e.setClientEscMenuOptions({
              disableAmbientOcclusion: zz
            }), uz((() => Nz.j))
          },
          circleInfoText: "Disables ambient occlusion which is the shadow effect that makes corners and crevices darker."
        }), xz.devTools.supports("ambientLight") && (0, Oz.jsx)(Nz.f, {
          name: "Ambient Lighting Intensity",
          min: 0,
          max: 1,
          step: .01,
          initValue: bz.ambientLightIntensity,
          onChange: zz => {
            xz.devTools.setAmbientLightIntensity(zz).then((() => {
              vz.e.setClientEscMenuOptions({
                ambientLightIntensity: zz
              })
            })).catch((zz => {
              console.error("Couldn't set the ambient light", zz)
            }))
          },
          circleInfoText: "Sets the intensity of the white ambient light in the scene. The default is 0.5."
        }), xz.devTools.supports("weaponRaycasts") && (0, Oz.jsx)(Nz.b, {
          label: "Show Weapon Raycasts",
          checked: bz.showWeaponRaycasts,
          onClick: zz => {
            vz.e.setClientEscMenuOptions({
              showWeaponRaycasts: zz
            })
          },
          circleInfoText: "Draws debug lines for the raw raycasts used by locally fired weapons."
        }), xz.devTools.supports("sceneDownload") && (0, Oz.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, Oz.jsxs)("div", {
            className: "SettingBox WarningBorder",
            children: [(0, Oz.jsx)(Nz.b, {
              label: "Apply normal-based coloring",
              checked: Fz,
              onClick: zz => {
                Zz(zz), zz && wz(!1)
              },
              circleInfoText: "Colors faces based on their normal direction (red=X, green=Y, blue=Z)."
            }), (0, Oz.jsx)(Nz.b, {
              label: "Apply depth-based coloring",
              checked: Rz,
              onClick: zz => {
                wz(zz), zz && Zz(!1)
              },
              circleInfoText: "Colors from white (near) to black (far) based on distance from camera. Only works for screenshot export."
            }), (0, Oz.jsxs)("div", {
              className: "SettingBox DeveloperToolsCategoryScreenshotSettings",
              children: [(0, Oz.jsx)("div", {
                className: "SettingLabel",
                children: "Screenshot size in pixels (width x height)"
              }), (0, Oz.jsx)(rz.d, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (zz, uz) => {
                  const bz = parseInt(zz) || 6400;
                  Hz(bz)
                },
                placeholderText: "width",
                maxLength: 10,
                defaultValue: tz.toString()
              }), (0, Oz.jsx)("span", {
                children: "X"
              }), (0, Oz.jsx)(rz.d, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (zz, uz) => {
                  const bz = parseInt(zz) || 3600;
                  dz(bz)
                },
                placeholderText: "height",
                maxLength: 10,
                defaultValue: pz.toString()
              })]
            }), (0, Oz.jsxs)("div", {
              className: "DeveloperToolsCategoryExportButtons",
              children: [(0, Oz.jsxs)(Kz.f, {
                onClick: () => {
                  Xz("screenshot")
                },
                disabled: lz,
                children: [lz && (0, Oz.jsx)(oz.c, {}), "Download Screenshot"]
              }), (0, Oz.jsxs)(Kz.f, {
                onClick: () => {
                  Xz("glb")
                },
                disabled: nz,
                children: [nz && (0, Oz.jsx)(oz.c, {}), "Download GLB"]
              })]
            })]
          }), (0, Oz.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: 'To download GLB of scene with textures you need to "Disable Block Texture Atlas" in graphic settings first (you will need to reload the page to apply the setting).'
          })]
        })]
      })
    }
    var Az = bz(128),
      Tz = bz(1118),
      Lz = bz(1195),
      Pz = bz(2763),
      Gz = bz(1482),
      az = bz(1256),
      Vz = bz(1222),
      mz = bz(2852),
      qz = bz(1973),
      hz = bz(1473),
      Uz = bz(328),
      cz = bz(2171),
      gz = bz(2178),
      Sz = bz(2532),
      yz = bz(1597),
      Dz = bz(2828),
      Qz = bz(2795),
      Wz = bz(2856),
      ez = bz(206);

    function jz(zz) {
      const {
        t: uz,
        selectedLanguage: bz
      } = (0, lz.F)(), {
        userContext: nz
      } = (0, Fz.c)(), {
        superRankInfo: iz
      } = nz, Mz = zz && ((0, Uz.Bc)(iz) || nz.ranksMayChange) && (0, gz.purchasesAllowed)(), {
        accountId: tz,
        data: Hz
      } = (0, Sz.g)(Dz.d, Mz);
      if ((0, Ez.useEffect)((() => {
          if (Mz) return Dz.d.watchAccount(), yz.b.addRefetchListener("billing", (zz => {
            "reconnected" === zz ? Dz.d.refreshAfterReconnect() : Dz.d.refresh()
          }))
        }), [Mz]), !Mz || !(0, Uz.Bc)(iz) || null === Hz || tz !== nz.whamm) return null;
      const Oz = function(zz, uz, bz) {
        const Ez = Wz.k[(0, Wz.d)(Wz.k, uz)],
          nz = void 0 === Ez ? void 0 : (0, ez.e)(zz.entitlements, Ez.entitlementId);
        return void 0 === nz || null === nz.expiresAt || (0, Qz.f)(nz) <= bz ? null : nz.willRenew && null === nz.billingIssueDetectedAt ? {
          renews: !0,
          at: Math.max(nz.expiresAt, bz)
        } : {
          renews: !1,
          at: (0, Qz.f)(nz)
        }
      }(Hz, iz.tier, Date.now());
      if (null === Oz) return null;
      const pz = Oz.renews ? "store:renewsOn" : "store:endsOn";
      return uz(pz, {
        date: new Date(Oz.at).toLocaleDateString((0, lz.p)(bz.code, pz), {
          year: "numeric",
          month: "short",
          day: "numeric"
        })
      })
    }
    var Iz = bz(1332),
      Bz = bz(1202),
      Cz = bz(4648),
      Yz = bz(1448),
      kz = bz(3405),
      zu = bz(2150);

    function uu(zz) {
      let {
        showing: uz
      } = zz;
      const {
        t: bz
      } = (0, lz.F)(), {
        data: Ez,
        failed: nz
      } = (0, Sz.g)(kz.h, uz);
      return 0 === (null === Ez || void 0 === Ez ? void 0 : Ez.length) || null === Ez && !nz ? null : (0, Oz.jsxs)("div", {
        className: "SettingBox AccountSettingsPaymentHistory",
        children: [(0, Oz.jsx)("div", {
          className: "AccountSettingsLabel",
          children: bz("paymentHistory:title")
        }), null === Ez && nz && (0, Oz.jsx)("div", {
          className: "AccountSettingsPaymentHistoryError",
          children: bz("paymentHistory:loadFailed")
        }), null !== Ez && (0, Oz.jsx)("ul", {
          className: "PaymentHistoryList",
          children: Ez.map((zz => (0, Oz.jsxs)("li", {
            className: "PaymentHistoryEntry",
            children: [(0, Oz.jsx)(zu.c, {
              entry: zz
            }), (0, Oz.jsxs)("div", {
              className: "PaymentHistoryEntryText",
              children: [(0, Oz.jsx)("div", {
                children: (0, zu.i)(bz, zz)
              }), (0, Oz.jsxs)("div", {
                className: "PaymentHistoryEntryDate",
                children: [new Date(zz.at).toLocaleDateString(), "number" === typeof zz.orderId && ` \xb7 ${bz("paymentHistory:order",{orderId:zz.orderId})}`]
              })]
            })]
          }, (0, kz.d)(zz))))
        })]
      })
    }
    var bu = bz(1833),
      Eu = bz(1232),
      nu = bz(1322),
      iu = bz(1283),
      lu = bz(1732),
      Mu = bz(2782);
    async function tu() {
      try {
        return function(zz) {
          const uz = new Map;
          for (const {
              store: bz,
              status: Ez,
              autoRenewStatus: nz,
              managementUrl: iz
            }
            of Object.values(zz.subscriptions)) !(0, Qz.i)(bz) || (0, Qz.j)(Ez) || "willNotRenew" === nz || uz.has(bz) || uz.set(bz, null !== iz && void 0 !== iz ? iz : Qz.m[bz]);
          return Array.from(uz, (zz => {
            let [uz, bz] = zz;
            return {
              store: uz,
              managementUrl: bz
            }
          }))
        }(await (0, lu.l)((0, Mu.e)().getCustomerInfo(), 5e3, "CustomerInfo got no answer in 5 s"))
      } catch (zz) {
        return console.error("Billing: loading CustomerInfo for the player's store subscriptions failed:", zz), null
      }
    }
    var Hu = bz(316),
      Ou = bz(2379);
    const pu = {
      appStore: {
        name: "App Store",
        ...Hu.hc.appStore
      },
      googlePlay: {
        name: "Google Play",
        ...Hu.hc.googlePlay
      },
      discord: {
        name: "Discord",
        ...Hu.hc.discord
      }
    };

    function du(zz) {
      let {
        warning: uz,
        subscriptions: bz
      } = zz;
      const {
        t: Ez
      } = (0, lz.F)();
      return null !== bz && 0 === bz.length ? (0, Oz.jsx)(Oz.Fragment, {
        children: Ez(uz)
      }) : (0, Oz.jsxs)("div", {
        className: "DeleteAccountSubtitle",
        children: [Ez(uz), null === bz && (0, Oz.jsx)("div", {
          className: "DeleteAccountSubtitleNote",
          children: Ez("auth:deleteAccountSubscriptionsLoadFailed")
        }), null !== bz && (0, Oz.jsxs)(Oz.Fragment, {
          children: [(0, Oz.jsx)("div", {
            className: "DeleteAccountSubtitleNote",
            children: Ez("auth:deleteAccountStoreSubscriptions")
          }), (0, Oz.jsx)(Ou.d, {
            className: "DeleteAccountSubtitleLinks",
            links: bz.map((zz => {
              let {
                store: uz,
                managementUrl: bz
              } = zz;
              return {
                ...pu[uz],
                url: bz
              }
            }))
          })]
        })]
      })
    }

    function Fu(zz) {
      let {
        showing: uz
      } = zz;
      const {
        userContext: bz,
        isUserContextUpdating: nz
      } = (0, Fz.c)(), {
        t: iz
      } = (0, lz.F)(), [Mz, tz] = (0, Ez.useState)(!1), [Hz, pz] = (0, Ez.useState)(null), dz = (0, Ez.useRef)(uz);
      (0, Ez.useEffect)((() => (dz.current = uz, () => {
        dz.current = !1
      })), [uz]);
      const Zz = nz || Mz;
      async function Rz() {
        const zz = function(zz) {
            if ((0, Az.d)()) return "auth:discordActivityDeleteAccountWarning";
            return zz ? "auth:deleteAccountWarning" : "auth:deleteGuestAccountWarning"
          }(bz.isLoggedIn()),
          uz = (0, bu.c)(bz.availableUserContextTypes) ? await tu() : [];
        if (!dz.current) return Eu.b.ok();
        if (!0 !== await nu.NotificationProvider.showPromptPopup({
            title: "auth:deleteAccountPopupTitleNamed",
            textOpts: {
              title: {
                playerName: (0, az.b)(bz.getPlayerName(), !wz.featureFlags.canSeeRealPlayerNames)
              }
            },
            subtitle: (0, Oz.jsx)(du, {
              warning: zz,
              subscriptions: uz
            }),
            confirmText: "auth:deleteAccount",
            destructive: !0,
            confirmTooltip: "auth:deleteAccountPopupConfirmTooltip",
            cancelText: "general:cancel",
            cancelTooltip: "auth:deleteAccountPopupCancelTooltip"
          }).getResult()) return Eu.b.ok();
        const Ez = await (0, Tz.postJsonWithMetricsCookiesAndJsonResponse)(`${Lz.clientSideServerUrls.indexUrl}/index/metrics/revoke-cookies`, {
          gameState: vz.e.get("gameState")
        }, {
          retries: 3
        }, bz.getMetricsCookies());
        if (Ez.error) return Eu.b.error(Ez.error);
        if ((0, Az.d)()) {
          (await iu.l.discordActivity()).exit("User deleted their account")
        }
        return (0, Tz.forgetStoredGuestAccount)(bz.whamm), (0, Tz.forceGlobalSignOut)(!0), Eu.b.ok()
      }
      return (0, Oz.jsxs)("div", {
        className: "AccountSettingsDeleteAccountButtonContainer",
        children: [(0, Oz.jsxs)(Kz.K, {
          onClick: async function() {
            if (!Mz) {
              tz(!0);
              try {
                const zz = await Rz(),
                  uz = zz.isError() ? zz.asError().message : null;
                pz(uz)
              } catch (zz) {
                console.error("Failed to delete account:", zz), pz(iz("auth:genericDeleteAccountError"))
              }
              tz(!1)
            }
          },
          className: "AccountSettingsDeleteAccountButton",
          disabled: Zz,
          children: [Zz && (0, Oz.jsx)("div", {
            className: "DeletingAccountLoader",
            children: (0, Oz.jsx)(oz.c, {})
          }), iz("auth:deleteAccount")]
        }), Hz && (0, Oz.jsx)("div", {
          className: "DeleteAccountError",
          children: Hz
        })]
      })
    }
    var Zu = bz(3344),
      Ru = bz(3355),
      Ku = bz(3351);

    function wu(zz) {
      let {
        showing: uz
      } = zz;
      const {
        t: bz
      } = (0, lz.F)(), {
        data: Ez,
        failed: nz
      } = (0, Sz.g)(Zu.b, uz), iz = null === Ez ? null : (0, Zu.d)(Ez);
      return (0, Oz.jsxs)("div", {
        className: "SettingBox BlockedAndIgnoredPlayers",
        children: [(0, Oz.jsx)("div", {
          className: "AccountSettingsLabel",
          children: bz("settingsMenu:blockedAndIgnoredPlayers")
        }), null === iz && !nz && (0, Oz.jsx)(oz.c, {}), null === iz && nz && (0, Oz.jsxs)("div", {
          className: "BlockedAndIgnoredPlayersError",
          children: [bz("settingsMenu:blockedAndIgnoredPlayersLoadFailed"), (0, Oz.jsx)(Kz.f, {
            className: "SmallTextLight",
            onClick: () => {
              Zu.b.refresh()
            },
            children: bz("general:tryAgain")
          })]
        }), 0 === (null === iz || void 0 === iz ? void 0 : iz.length) && (0, Oz.jsx)("div", {
          className: "BlockedAndIgnoredPlayersEmpty",
          children: bz("settingsMenu:noBlockedOrIgnoredPlayers")
        }), null !== iz && iz.length > 0 && (0, Oz.jsx)("ul", {
          className: "BlockedAndIgnoredPlayersList",
          children: iz.map((zz => {
            let {
              name: uz,
              exclusion: Ez
            } = zz;
            const nz = Ku.f[Ez];
            return (0, Oz.jsxs)("li", {
              className: "BlockedAndIgnoredPlayer",
              children: [(0, Oz.jsx)("div", {
                className: "BlockedAndIgnoredPlayerName",
                children: uz
              }), (0, Oz.jsx)(Kz.j, {
                className: "SmallTextLight",
                onClick: () => {
                  (0, Ru.g)(nz, uz, {
                    chatMessage: null
                  })
                },
                children: bz(Ku.h[nz].text)
              })]
            }, uz)
          }))
        })]
      })
    }
    const Xu = (0, Ez.memo)((function(zz) {
      var uz;
      let {
        showing: bz,
        inGame: nz
      } = zz;
      const {
        t: tz,
        selectedLanguage: Hz
      } = (0, lz.F)(), {
        hideSocialLocationFrom: pz
      } = (0, vz.m)(["hideSocialLocationFrom"]), Zz = (0, dz.c)(), {
        userContext: Rz,
        isUserContextUpdating: Xz
      } = (0, Fz.c)(), [fz, sz] = (0, Ez.useState)(null !== (uz = Rz.getPlayerName()) && void 0 !== uz ? uz : ""), [xz, Jz] = (0, Ez.useState)(null), {
        purchasing: Sz,
        outcome: yz,
        purchase: Dz
      } = (0, Pz.b)("/super-rank-welcome"), Qz = (0, Uz.ic)((0, lz.p)(Hz.code, "general:timeLeft"), Rz.superRankInfo), Wz = jz(bz), ez = Qz ? tz("general:timeLeft", {
        time: Qz
      }) : Wz, [kz, zu] = (0, Ez.useState)(!1), [bu, Eu] = (0, Ez.useState)(!1), nu = (0, Ez.useRef)(null), iu = (0, Ez.useRef)(null), lu = (0, qz.g)({
        showProgressUpdateMessage: !0,
        enabled: !0
      }), Mu = null === lu, tu = null !== lu && void 0 !== lu ? lu : [], Hu = Rz !== Tz.NULL_USER_CONTEXT && !Rz.isLoggedIn(), Ou = Hu && 0 !== (null === lu || void 0 === lu ? void 0 : lu.length), [pu, du] = (0, Ez.useState)([]), [Zu, Ru] = (0, Ez.useState)(!1), Ku = Rz.playerHasRank("youtuber"), Xu = (0, Ez.useCallback)((() => hz.c.getPlayerProfile(Rz, {
        lowerCaseName: Rz.getPlayerName().toLowerCase()
      }).then((zz => {
        du(zz.socialLinks)
      })).catch((zz => {
        console.error("Failed to refresh social links", zz)
      }))), [Rz]);

      function su(zz) {
        zz !== fz && ((0, az.l)(zz) ? (zz = (0, az.p)(zz), Jz("Only letters, numbers, and _")) : Jz(null), nu.current && (nu.current.value = zz), sz(zz))
      }
      return (0, Ez.useEffect)((() => (!0 === bz ? (clearInterval(iu.current), iu.current = setInterval(Zz, 1e3)) : clearInterval(iu.current), () => {
        clearInterval(iu.current)
      })), [bz, Zz]), (0, Ez.useEffect)((() => {
        var zz;
        sz(null !== (zz = Rz.getPlayerName()) && void 0 !== zz ? zz : "")
      }), [Rz]), (0, Ez.useEffect)((() => {
        if (!bz || !Ku || Xz) return;
        let zz = !1;
        return Ru(!0), du([]), hz.c.getPlayerProfile(Rz, {
          lowerCaseName: Rz.getPlayerName().toLowerCase()
        }).then((uz => {
          zz || du(uz.socialLinks)
        })).catch((zz => {
          console.error("Failed to load social links", zz)
        })).finally((() => {
          zz || Ru(!1)
        })), () => {
          zz = !0
        }
      }), [bz, Ku, Xz, Rz]), (0, Oz.jsxs)("div", {
        className: iz()("SettingsMenuRightInner AccountSettings", {
          AccountSettingsLocked: nz
        }),
        children: [nz && (0, Oz.jsx)("div", {
          className: "AccountSettingsInGameWarning",
          children: tz("settingsMenu:accountSettingsInGameWarning")
        }), (0, Oz.jsxs)("div", {
          className: "SettingBox SetAccountNameDiv SmallTextLight",
          children: [(0, Oz.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsNameLabel",
            children: [tz("homePage:discordNamePopupTitle"), (0, Oz.jsxs)(Gz.LinkPreserveSearch, {
              className: "AccountSettingsViewProfile",
              to: (0, Vz.j)({
                name: Rz.getPlayerName()
              }),
              onClick: () => {
                vz.e.set({
                  openEverythingMenuName: null
                })
              },
              children: [(0, Oz.jsx)(Mz.c, {
                name: "arrow-up-right-from-square"
              }), " ", tz("profileCard:viewProfile")]
            })]
          }), (0, Oz.jsxs)("div", {
            className: "EnterAccNameDivWrapper",
            "data-pad-initial-area": !0,
            children: [(0, Oz.jsxs)("div", {
              className: "EnterAccNameInputRow",
              children: [wz.featureFlags.canChangeName && (0, Oz.jsx)(rz.d, {
                className: "EnterName",
                placeholderText: tz("homePage:enterName"),
                maxLength: az.g,
                defaultValue: fz,
                onValueChange: zz => {
                  su(zz)
                },
                forcedText: kz || !wz.featureFlags.canChangeName ? fz : null,
                blurOnEnter: !0,
                domRef: nu
              }), (0, Oz.jsx)(Kz.f, {
                className: "ChooseRandomNameButton",
                onClick: () => {
                  su((0, az.c)())
                },
                children: (0, Oz.jsx)(Mz.c, {
                  name: "dice",
                  className: "ChooseRandomNameIcon"
                })
              }), !wz.featureFlags.canChangeName && (0, Oz.jsx)("div", {
                className: "EnterName NoInput",
                children: (0, az.b)(fz, !wz.featureFlags.canSeeRealPlayerNames)
              })]
            }), (0, Oz.jsx)(Kz.f, {
              className: "ChooseNameButton",
              disabled: kz || fz === Rz.getPlayerName(),
              onClick: () => {
                fz.length < az.i ? Jz(tz("homePage:changeNameMinLengthError", {
                  length: az.i
                })) : fz.length > az.g ? Jz(tz("homePage:changeNameMaxLengthError", {
                  length: az.g
                })) : (zu(!0), Jz(null), async function(zz, uz, bz, Ez) {
                  const nz = await (0, Tz.postJsonWithMetricsCookiesAndJsonResponse)(`${Lz.clientSideServerUrls.indexUrl}/index/name/update`, {
                    name: zz
                  }, {
                    retries: 3
                  }, uz.getMetricsCookies()).catch((zz => (console.error("Bad response from the server when trying to update name:", zz), {
                    err: "An error occurred trying to change your name! Please report on discord what steps you took to get this error message."
                  })));
                  nz.err ? (console.error("Error when trying to get with new name from DB", nz.err), Ez(nz.err)) : !0 === nz.nameExists ? Ez("Name is already taken") : bz(zz)
                }(fz, Rz, (zz => {
                  Rz.setPlayerName(zz), zu(!1)
                }), (zz => {
                  Jz(zz), zu(!1)
                })))
              },
              children: tz("general:choose")
            })]
          }), xz && (0, Oz.jsx)("div", {
            className: "ChooseAccNameError",
            children: xz
          })]
        }), (0, Oz.jsx)(Nz.b, {
          label: (() => {
            if ((0, Bz.n)(pz)) {
              const zz = (0, lz.p)(Hz.code, "general:timeLeft"),
                uz = (0, Uz.fb)(zz, Date.now(), pz + Bz.k);
              return `${tz("settingsMenu:hideSocialLocation")} (${tz("general:timeLeft",{time:uz})})`
            }
            return tz("settingsMenu:hideSocialLocation")
          })(),
          onClick: () => {
            const zz = !(0, Bz.n)(pz);
            (0, Yz.reportAnalyticsClick)({
              id: "social.hide_location",
              value: zz ? "on" : "off"
            }), Eu(!0), hz.c.setHideSocialLocation(Rz, zz).then((() => {
              vz.e.set({
                hideSocialLocationFrom: zz ? Date.now() : null
              })
            })).finally((() => {
              Eu(!1)
            }))
          },
          checked: (0, Bz.n)(pz),
          disabled: bu
        }), Ku && (0, Oz.jsxs)("div", {
          className: "SettingBox AccountSettingsSocialLinks",
          children: [(0, Oz.jsx)("div", {
            className: "AccountSettingsLabel",
            children: tz("settingsMenu:socialLinks")
          }), Zu && (0, Oz.jsx)(oz.c, {}), !Zu && (0, Oz.jsx)(Cz.e, {
            socialLinks: pu,
            editable: !0,
            userContext: Rz,
            onLinksUpdated: Xu
          })]
        }), (0, Oz.jsxs)("div", {
          className: "SettingBox",
          children: [(0, Oz.jsx)("div", {
            className: "AccountSettingsLabel",
            children: tz(Ou ? "auth:loginOrSwitchAccount" : "auth:login")
          }), Mu && (0, Oz.jsx)(oz.c, {}), !Mu && 0 === tu.length && (0, Oz.jsx)("div", {
            className: "NoLoginOptions",
            children: tz("auth:noLoginOptions")
          }), !Mu && tu.length > 0 && "crazygames" !== Az.x && (0, Oz.jsx)("div", {
            className: "AccountSettingsLoginButtons",
            children: tu
          }), !Mu && tu.length > 0 && "crazygames" === Az.x && (0, Oz.jsxs)("div", {
            className: "AccountSettingsLoginButtons",
            children: [tu[0], tu.length > 1 && (0, Oz.jsxs)(Oz.Fragment, {
              children: [(0, Oz.jsxs)("div", {
                className: "LegacyLoginOptionsHeader",
                children: [(0, Oz.jsx)("span", {
                  className: "LegacyLoginOptionsTitle",
                  children: tz("auth:legacyLoginOptions")
                }), (0, Oz.jsx)(Iz.b, {
                  className: "LegacyLoginOptionsInfoIcon",
                  hoverInfo: tz("auth:legacyLoginOptionsInfo")
                })]
              }), (0, Oz.jsx)("div", {
                className: "LegacyAccountSettingsLoginButtons",
                children: tu.slice(1)
              })]
            })]
          }), wz.featureFlags.useLogin && (null !== Rz.loggedInInfo || Rz.isLoggedIn()) && (0, Oz.jsxs)(Oz.Fragment, {
            children: [(0, Oz.jsx)("div", {
              className: "AccountSettingsLoginDivider"
            }), (0, Oz.jsxs)(Kz.K, {
              onClick: () => {
                (0, Tz.forceGlobalSignOut)()
              },
              className: "AccountSettingsSignedInButton",
              children: [(0, Oz.jsx)(Mz.c, {
                name: "right-from-bracket"
              }), tz("auth:signOut")]
            })]
          })]
        }), !Rz.playerHasRank("super") && (0, gz.purchasesAllowed)() && (0, Oz.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, Oz.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, Oz.jsx)(Mz.c, {
              name: "bolt"
            }), tz("homePage:superRank")]
          }), (0, Oz.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [(0, Oz.jsxs)(Kz.q, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, cz.o)({
                  mode: "self",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, Oz.jsx)(Mz.c, {
                name: "bolt"
              }), tz("homePage:getSuperRank")]
            }), (0, Oz.jsxs)(Kz.q, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, cz.o)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, Oz.jsx)(Mz.c, {
                name: "bolt"
              }), tz("homePage:giftSuperRank")]
            })]
          })]
        }), Rz.playerHasRank("super") && (0, Oz.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, Oz.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, Oz.jsx)(Mz.c, {
              name: "bolt"
            }), tz("homePage:superRank"), ez && (0, Oz.jsxs)("div", {
              className: "AccountSettingsSuperRankTimeLeft",
              children: ["(", ez, ")"]
            })]
          }), (0, gz.purchasesAllowed)() && (0, Oz.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [!(0, Uz.Bc)(Rz.superRankInfo) && (0, Oz.jsxs)(Kz.q, {
              className: "AccountSettingsSuperRankProlong",
              loading: Sz,
              onClick: () => {
                Dz(mz.h.id, null)
              },
              children: [(0, Oz.jsx)(Mz.c, {
                name: "bolt"
              }), tz("settingsMenu:getSuperRankAdditionalDaysPremiumCurrency", {
                days: mz.h.product.days,
                price: mz.h.price
              })]
            }), (0, Oz.jsxs)(Kz.q, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, cz.o)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, Oz.jsx)(Mz.c, {
                name: "bolt"
              }), tz("homePage:giftSuperRank")]
            })]
          }), yz && (0, Oz.jsx)("div", {
            className: "AccountSettingsSuperRankProlongError SmallTextBold",
            children: tz(yz.translationKey)
          })]
        }), (0, Oz.jsx)(uu, {
          showing: bz
        }), wz.featureFlags.useSocialFeatures && (0, Oz.jsx)(wu, {
          showing: bz
        }), (0, Oz.jsxs)("div", {
          className: "SettingBoxGroup AccountSettingsDeleteAccountGroup",
          children: [(0, Oz.jsxs)("div", {
            className: "SettingBox AccountSettingsDeleteAccount SettingBoxWarning",
            children: [(0, Oz.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: tz(fu(Hu, Ou))
            }), (0, Az.d)() && (0, Oz.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: tz("auth:discordActivityKickWarning")
            }), (0, Oz.jsx)(Fu, {
              showing: bz
            })]
          }), (0, Oz.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: tz("auth:deleteAccountWarning")
          })]
        })]
      })
    }));

    function fu(zz, uz) {
      return zz ? uz ? "auth:deleteGuestAccountButtonTitle" : "auth:deleteGuestAccountWarning" : "auth:deleteAccountButtonTitle"
    }
    var su = bz(8892),
      ru = bz(2882),
      ou = bz(1241),
      Nu = bz(1405);
    const vu = (0, Ez.memo)((function(zz) {
        let {
          inGame: uz
        } = zz;
        const {
          t: bz,
          selectedLanguage: Ez
        } = (0, lz.F)(), {
          clientEscMenuOptions: nz,
          showDebugOverlay: iz
        } = (0, vz.m)(["clientEscMenuOptions", "showDebugOverlay"]), Mz = (0, Zz.g)("hideCoordinates");
        let tz = "settingsMenu:showCoordinates",
          Hz = "settingsMenu:showChunkCoordinates";

        function pz(zz) {
          const uz = new Intl.DisplayNames([zz], {
            type: "language"
          }).of(zz);
          return uz.charAt(0).toUpperCase() + uz.slice(1)
        }
        return Mz && (tz = "settingsMenu:showCoordinatesHidden", Hz = "settingsMenu:showChunkCoordinatesHidden"), (0, Oz.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [uz && wz.featureFlags.canUseInviteLinks && (0, Oz.jsxs)("div", {
            className: "SettingBox",
            children: [(0, Oz.jsx)("div", {
              className: "SettingsMenuInviteHeader",
              children: bz("settingsMenu:inviteLink")
            }), (0, Oz.jsx)(su.e, {})]
          }), (0, Oz.jsxs)("div", {
            className: "SettingBox",
            children: [(0, Oz.jsx)("div", {
              className: "SliderText",
              style: {
                marginBottom: "10px"
              },
              children: bz("settingsMenu:language")
            }), (0, Oz.jsx)(ru.d, {
              options: Object.entries(lz.j).map((zz => {
                let [uz, bz] = zz;
                return {
                  label: (0, Oz.jsxs)("div", {
                    className: "SettingsMenuLanguageOption",
                    children: [(0, Oz.jsx)("img", {
                      src: bz.flagImg,
                      alt: "flag"
                    }), (0, Oz.jsxs)("span", {
                      children: [pz(uz), " ", (0, Oz.jsxs)("span", {
                        className: "SettingsMenuLanguageOptionCode",
                        children: ["(", uz, ")"]
                      })]
                    })]
                  }),
                  value: uz
                }
              })),
              value: Ez.code,
              onChange: zz => {
                ou.h.get().setCurrentLanguage(zz.value)
              }
            })]
          }), !(0, wz.isMobileApp)() && (0, Nu.g)() && wz.featureFlags.useForceRotateForceFullscreenOverlay && (0, Oz.jsx)(Nz.b, {
            label: bz("settingsMenu:disableFullscreenMode"),
            checked: nz.disableFullscreen,
            onClick: zz => {
              vz.e.setClientEscMenuOptions({
                disableFullscreen: zz
              })
            }
          }), (0, Oz.jsx)(Nz.b, {
            label: bz(tz),
            checked: nz.showCoordinates,
            onClick: zz => {
              vz.e.setClientEscMenuOptions({
                showCoordinates: zz
              })
            },
            disabled: Mz
          }), (0, Oz.jsx)(Nz.b, {
            label: bz(Hz),
            checked: nz.showChunkCoordinates,
            onClick: zz => {
              vz.e.setClientEscMenuOptions({
                showChunkCoordinates: zz
              })
            },
            disabled: Mz
          }), (0, Oz.jsx)(Nz.b, {
            label: bz("settingsMenu:showFps"),
            checked: nz.showFPS,
            onClick: zz => {
              vz.e.setClientEscMenuOptions({
                showFPS: zz
              })
            }
          }), (0, Oz.jsx)(Nz.b, {
            label: bz("settingsMenu:disableBunnyHopping"),
            checked: nz.disableBunnyHopping,
            onClick: zz => {
              vz.e.setClientEscMenuOptions({
                disableBunnyHopping: zz
              })
            }
          }), (0, iu.s)() && (0, Oz.jsx)(Nz.b, {
            label: bz("settingsMenu:showChat"),
            checked: nz.showChat,
            onClick: zz => {
              vz.e.setClientEscMenuOptions({
                showChat: zz
              })
            }
          }), (0, Oz.jsx)(Nz.b, {
            label: bz("settingsMenu:showDebugOverlay"),
            checked: iz,
            onClick: zz => {
              vz.e.set({
                showDebugOverlay: zz
              })
            }
          }), wz.featureFlags.useSocialFeatures && (0, Oz.jsx)(Nz.b, {
            label: bz("settingsMenu:showFriendOnlineToasts"),
            checked: nz.showFriendOnlineToasts,
            onClick: zz => {
              vz.e.setClientEscMenuOptions({
                showFriendOnlineToasts: zz
              })
            }
          }), (0, Oz.jsx)(Nz.b, {
            label: bz("settingsMenu:showNewItemIndicator"),
            checked: nz.showNewItemIndicator,
            onClick: zz => {
              vz.e.setClientEscMenuOptions({
                showNewItemIndicator: zz
              })
            }
          })]
        })
      })),
      xu = (0, Ez.memo)((function() {
        const {
          t: zz
        } = (0, lz.F)(), {
          soundVolume: uz,
          musicVolume: bz
        } = (0, vz.m)(["soundVolume", "musicVolume"]);
        return (0, Oz.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, Oz.jsx)(Nz.f, {
            name: zz("settingsMenu:musicVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: bz,
            onChange: zz => {
              vz.e.set({
                musicVolume: Math.round(100 * zz) / 100
              })
            },
            format: zz => zz.toFixed(2)
          }), (0, Oz.jsx)(Nz.f, {
            name: zz("settingsMenu:soundEffectsVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: uz,
            onChange: zz => {
              vz.e.set({
                soundVolume: Math.round(100 * zz) / 100
              })
            },
            format: zz => zz.toFixed(2)
          })]
        })
      }));
    var Ju = bz(686),
      Au = bz(1417),
      Tu = bz(3411),
      Lu = bz(8896),
      Pu = bz(3238);
    const Gu = {
      app: "notificationSettings:pushTargetsApp",
      browser: "notificationSettings:pushTargetsBrowser",
      msnPlay: "notificationSettings:pushTargetsMsnPlay"
    };

    function au() {
      const {
        t: zz
      } = (0, lz.F)(), uz = (0, Pu.e)(), {
        mobilePushNotificationsCanAsk: bz
      } = (0, vz.m)(["mobilePushNotificationsCanAsk"]), [nz, iz] = (0, Ez.useState)(null), [Mz, tz] = (0, Ez.useState)(!1), [Hz, pz] = (0, Ez.useState)(null), [dz, Fz] = (0, Ez.useState)(!1), Zz = (0, Ez.useCallback)((() => {
        (0, Tu.d)().then((zz => {
          uz.current && (iz(zz), tz(!1))
        })).catch((zz => {
          console.error("Failed to load push notification targets:", zz), uz.current && tz(!0)
        }))
      }), [uz]), Rz = (0, Ez.useCallback)((() => {
        (0, Lu.b)().then((zz => {
          uz.current && pz((() => zz))
        }))
      }), [uz]);
      (0, Ez.useEffect)((() => {
        Zz()
      }), [Zz]), (0, Ez.useEffect)((() => {
        Rz()
      }), [Rz, bz]), (0, Au.g)(Tu.k, Zz);
      const wz = null === nz ? [] : Object.keys(Gu).filter((zz => nz[zz] > 0));
      return (0, Oz.jsxs)("div", {
        className: "SettingBox PushNotificationSettings",
        children: [(0, Oz.jsx)("div", {
          className: "SliderText",
          children: zz("notificationSettings:pushNotifications")
        }), null === nz && Mz && (0, Oz.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: zz("notificationSettings:pushTargetsLoadFailed")
        }), null !== nz && 0 === wz.length && (0, Oz.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: zz("notificationSettings:pushTargetsNone")
        }), wz.length > 0 && (0, Oz.jsx)("ul", {
          className: "PushNotificationSettingsTargets",
          children: wz.map((uz => {
            var bz;
            return (0, Oz.jsx)("li", {
              children: zz(Gu[uz], {
                count: null !== (bz = null === nz || void 0 === nz ? void 0 : nz[uz]) && void 0 !== bz ? bz : 0
              })
            }, uz)
          }))
        }), null !== Hz && (0, Oz.jsx)(Kz.f, {
          className: "PushNotificationSettingsButton",
          loading: dz,
          onClick: () => {
            Fz(!0), Hz().catch((zz => {
              console.error("Failed to turn on push notifications:", zz)
            })).finally((() => {
              uz.current && (Fz(!1), Rz())
            }))
          },
          children: zz("notificationSettings:pushTurnOn")
        })]
      })
    }
    const Vu = {
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
      mu = (0, Ez.memo)((function() {
        const {
          t: zz
        } = (0, lz.F)(), {
          clientEscMenuOptions: uz
        } = (0, vz.m)(["clientEscMenuOptions"]);
        return (0, Oz.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, Oz.jsx)(Nz.e, {
            label: zz("notificationSettings:friendRequests"),
            options: Ju.d.map((uz => ({
              value: uz,
              label: zz(Vu[uz].label)
            }))),
            value: uz.friendRequestNotifications,
            onChange: zz => {
              vz.e.setClientEscMenuOptions({
                friendRequestNotifications: zz
              })
            },
            circleInfoText: (0, Oz.jsx)("div", {
              className: "NotificationSettingLevelsInfo",
              children: Ju.d.map((uz => (0, Oz.jsxs)("div", {
                children: [(0, Oz.jsx)("b", {
                  children: zz(Vu[uz].label)
                }), ": ", zz(Vu[uz].info)]
              }, uz)))
            })
          }), (0, Oz.jsx)(au, {})]
        })
      }));
    var qu = bz(4274),
      hu = bz(195),
      Uu = bz(298),
      cu = bz(6382),
      gu = bz(3198),
      Su = bz(8902),
      yu = bz(588),
      Du = bz(22);
    var Qu = bz(606),
      Wu = bz(33),
      eu = bz(4150);
    const ju = new Map([
      ["chunkHorizAddDist", "horizontal"],
      ["chunkVertAddDist", "vertical"]
    ]);

    function Iu(zz) {
      return ju.has(zz) ? Xz.gameBridge.lookup("Kr", null) : null
    }

    function Bu(zz) {
      if (!(0, yu.F)(vz.e.get("clientEscMenuOptions")[zz])) return vz.e.get("clientEscMenuOptions")[zz];
      const uz = Iu(zz);
      return null !== uz ? uz[ju.get(zz)] : Wu.g.getItem(zz)
    }

    function Cu(zz, uz) {
      if ("useTouchControls" === zz) return void(0, eu.d)(uz);
      zz in vz.e.get("clientEscMenuOptions") && vz.e.setClientEscMenuOptions({
        [zz]: uz
      });
      const bz = Iu(zz);
      null !== bz && Xz.gameBridge.send("setChunkAddDistance", {
        ...bz,
        [ju.get(zz)]: uz
      }), Wu.g.setItem(zz, uz)
    }
    var Yu = bz(4193),
      ku = bz(8908),
      zb = bz(8911),
      ub = bz(4266);

    function bb(zz) {
      var uz, nz, Mz, tz;
      let {
        minChunkAddDist: Hz,
        getValue: pz,
        onChange: dz,
        setApplySettingsCallback: Fz
      } = zz;
      const {
        t: Rz
      } = (0, lz.F)(), {
        clientEscMenuOptions: Kz
      } = (0, vz.m)(["clientEscMenuOptions", "showDistantNametags"]), Xz = (0, Ez.useRef)(pz("showFog")), fz = (0, Ez.useRef)(Kz.antiAliasing), sz = (0, Ez.useRef)(Kz.useWebGpu), [rz, oz] = (0, Ez.useState)(null), [Jz, Az] = (0, Ez.useState)((() => (0, gu.c)(wz.featureFlags.settings.canUseShaderPacks))), [Tz] = (0, Ez.useState)((() => vz.e.isWebGpuDefaultOff())), [Lz] = (0, Ez.useState)(Uu.g);
      (0, Ez.useEffect)((() => {
        let zz = !1;
        return (0, wz.hasUsableWebGpuAdapter)().then((uz => {
          zz || oz(uz)
        })), (0, gu.h)(wz.featureFlags.settings.canUseShaderPacks) && (0, cu.e)().then((async uz => {
          const Ez = null !== uz && await async function(zz) {
            const [{
              isShaderPackActive: uz
            }, {
              loadPageShaderPackCompiler: Ez
            }] = await Promise.all([bz.e(127).then((() => bz(6379))), Promise.all([bz.e(74), bz.e(131), bz.e(130)]).then((() => bz(6340)))]);
            return uz(zz, await Ez())
          }(uz);
          zz || Az(Ez)
        })), () => {
          zz = !0
        }
      }), []);
      const Pz = function(zz, uz, bz, Ez, nz) {
          return (0, Su.b)(bz, Ez) && !0 === uz ? {
            translationKey: "settingsMenu:newWebGpuForcedOnByShaderPack",
            checked: !0,
            disabled: !0
          } : {
            translationKey: !1 !== uz ? "settingsMenu:newWebGpu" : nz ? "settingsMenu:newWebGpuDisabledUntilRestart" : "settingsMenu:newWebGpuUnsupported",
            checked: zz && !1 !== uz,
            disabled: !0 !== uz
          }
        }(Kz.useWebGpu, rz, Jz, Tz, Lz),
        Gz = (Kz.useWebGpu || (0, Su.b)(Jz, Tz)) && Jz && !0 === rz,
        az = (0, Zz.g)("lightingOverride"),
        Vz = !(0, yu.F)(az);
      let mz = "settingsMenu:enableLighting";
      Vz && (mz = az ? "settingsMenu:enableLightingForcedOn" : "settingsMenu:enableLightingForcedOff");
      const qz = zz => {
          var uz, bz, Ez;
          const nz = null !== (uz = zz.showFog) && void 0 !== uz ? uz : pz("showFog"),
            iz = null !== (bz = zz.antiAliasing) && void 0 !== bz ? bz : Kz.antiAliasing,
            lz = null !== (Ez = zz.useWebGpu) && void 0 !== Ez ? Ez : Kz.useWebGpu,
            Mz = !Qu.x && nz !== Xz.current || iz !== fz.current || lz !== sz.current;
          Fz(Mz ? () => Nz.j : null)
        },
        hz = (0, Zz.g)("fogChunkDistanceOverride"),
        Uz = (0, Zz.g)("fogBlockDistanceOverride"),
        cz = !(0, yu.F)(hz) || !(0, yu.F)(Uz),
        gz = cz ? "settingsMenu:showFogForcedOn" : "settingsMenu:showFog",
        [Sz, yz] = (0, qu.g)(Hz),
        [Dz, Qz] = (0, ub.e)(Hz),
        Wz = Rz("settingsMenu:chunkLoadDistanceDeviceLimit"),
        ez = Dz < Sz,
        jz = Math.min(null !== (uz = pz("chunkHorizAddDist")) && void 0 !== uz ? uz : Hz[0], Dz),
        Iz = !cz && function(zz, uz) {
          return !0 === zz.showFog && zz.fogChunkDistance > uz
        }(Kz, jz);
      return (0, Oz.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [(0, Oz.jsx)(Nz.f, {
          name: Rz("settingsMenu:horizontalChunkLoadDistance"),
          min: Hz[0],
          max: Sz,
          selectableMax: Dz,
          cappedNote: Wz,
          step: 1,
          initValue: jz,
          onChange: zz => {
            !0 === pz("showFog") && zz < pz("fogChunkDistance") && dz("fogChunkDistance", zz), dz("chunkHorizAddDist", zz), Du.k.sK("updatedChunkLoadDist")
          },
          circleInfoText: Rz("settingsMenu:chunkLoadDistanceInfo")
        }), (0, Oz.jsx)(Nz.f, {
          name: Rz("settingsMenu:verticalChunkLoadDistance"),
          min: Hz[1],
          max: yz,
          selectableMax: Qz,
          cappedNote: ez ? void 0 : Wz,
          step: 1,
          initValue: Math.min(null !== (nz = pz("chunkVertAddDist")) && void 0 !== nz ? nz : Hz[1], Qz),
          onChange: zz => {
            dz("chunkVertAddDist", zz), Du.k.sK("updatedChunkLoadDist")
          },
          circleInfoText: Rz("settingsMenu:chunkLoadDistanceInfo"),
          className: "VerticalChunkLoadSlider"
        }), (0, Oz.jsx)(Nz.b, {
          label: Rz("settingsMenu:chunkFadeIn"),
          checked: Kz.chunkFadeIn,
          onClick: zz => {
            vz.e.setClientEscMenuOptions({
              chunkFadeIn: zz
            })
          },
          circleInfoText: Rz("settingsMenu:chunkFadeInInfo")
        }), xz.devTools.supports("chunkBorders") && (0, Oz.jsx)(Nz.b, {
          label: Rz("settingsMenu:showChunkBorders"),
          checked: Kz.showChunkBorders,
          onClick: zz => {
            vz.e.setClientEscMenuOptions({
              showChunkBorders: zz
            })
          },
          circleInfoText: Rz("settingsMenu:showChunkBordersInfo")
        }), (0, Oz.jsx)(Nz.b, {
          label: Rz(mz),
          checked: Kz.enableLighting,
          onClick: zz => {
            vz.e.setClientEscMenuOptions({
              enableLighting: zz
            })
          },
          disabled: Vz
        }), (0, Oz.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, Oz.jsx)(Nz.b, {
            label: Rz(gz),
            checked: Kz.showFog,
            onClick: zz => {
              qz({
                showFog: zz
              }), vz.e.setClientEscMenuOptions({
                showFog: zz
              })
            },
            disabled: cz,
            className: iz()({
              SettingBoxWarning: Iz
            })
          }), (0, Oz.jsx)(Nz.f, {
            name: Rz("settingsMenu:fogChunkDistance"),
            min: Hz[0],
            max: hu.e.maxChunkHorizAddDistance,
            step: 1,
            initValue: null !== (Mz = Kz.fogChunkDistance) && void 0 !== Mz ? Mz : Hz[0],
            onChange: zz => {
              vz.e.setClientEscMenuOptions({
                fogChunkDistance: zz
              }), Du.k.sK("fogChunkDistanceChanged", zz)
            },
            circleInfoText: Rz("settingsMenu:fogChunkDistanceInfo"),
            disabled: cz || !1 === pz("showFog"),
            className: iz()({
              SettingBoxWarning: Iz
            })
          }), Iz && (0, Oz.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: Rz("settingsMenu:fogChunkDistanceInfo")
          })]
        }), !Qu.x && (0, Oz.jsx)(Nz.b, {
          label: Rz(Gz ? "settingsMenu:disableBlockTextureAtlasUnavailableWithShaderPack" : "settingsMenu:disableBlockTextureAtlas"),
          checked: !Gz && Kz.disableTexAtlas,
          onClick: zz => {
            vz.e.setClientEscMenuOptions({
              disableTexAtlas: zz
            })
          },
          circleInfoText: Rz("settingsMenu:disableBlockTextureAtlasInfo"),
          disabled: Gz
        }), (0, Oz.jsx)(Nz.f, {
          name: Rz("settingsMenu:fieldOfView"),
          min: 50,
          max: 160,
          step: 1,
          initValue: Kz.cameraFOV,
          onChange: zz => {
            vz.e.setClientEscMenuOptions({
              cameraFOV: zz
            })
          }
        }), (0, Oz.jsx)(Nz.b, {
          label: Rz("settingsMenu:disableViewBobbing"),
          checked: Kz.disableBobbing,
          onClick: zz => {
            vz.e.setClientEscMenuOptions({
              disableBobbing: zz
            })
          },
          circleInfoText: Rz("settingsMenu:disableViewBobbingInfo")
        }), (0, Oz.jsx)(Nz.b, {
          label: Rz("settingsMenu:antiAliasing"),
          checked: Kz.antiAliasing,
          onClick: zz => {
            qz({
              antiAliasing: zz
            }), (0, Yu.i)("antiAliasing"), vz.e.setClientEscMenuOptions({
              antiAliasing: zz
            })
          },
          circleInfoText: Rz("settingsMenu:antiAliasingInfo")
        }), (0, Oz.jsx)(Nz.f, {
          name: Rz("settingsMenu:pixelScale"),
          min: 1,
          max: 8,
          step: 1,
          initValue: null !== (tz = Kz.pixelScale) && void 0 !== tz ? tz : 1,
          onChange: zz => {
            (zz !== vz.e.get("clientEscMenuOptions").pixelScale || (0, zb.q)()) && (0, Yu.i)("pixelScale"), vz.e.setClientEscMenuOptions({
              pixelScale: zz
            })
          },
          circleInfoText: Rz("settingsMenu:pixelScaleInfo"),
          format: zz => `${zz}x`
        }), (0, Oz.jsx)(Nz.b, {
          label: Rz("settingsMenu:pixelSmoothing"),
          checked: Kz.pixelSmoothing,
          onClick: zz => {
            vz.e.setClientEscMenuOptions({
              pixelSmoothing: zz
            })
          },
          circleInfoText: Rz("settingsMenu:pixelSmoothingInfo")
        }), Qu.x && (0, Oz.jsx)(Nz.b, {
          label: Rz("settingsMenu:distantNametags"),
          checked: (0, ku.c)(),
          onClick: zz => {
            vz.e.set({
              showDistantNametags: zz
            })
          },
          circleInfoText: Rz("settingsMenu:distantNametagsInfo")
        }), (0, Oz.jsx)(Nz.b, {
          label: Rz(Pz.translationKey),
          checked: Pz.checked,
          onClick: zz => {
            qz({
              useWebGpu: zz
            }), vz.e.setClientEscMenuOptions({
              useWebGpu: zz
            })
          },
          circleInfoText: Rz("settingsMenu:newWebGpuInfo"),
          disabled: Pz.disabled
        })]
      })
    }
    var Eb = bz(4185),
      nb = bz(8539),
      ib = bz(8920),
      lb = bz(8546),
      Mb = bz(8928);
    const tb = {
        color: 16777215,
        name: "white"
      },
      Hb = {
        color: 0,
        name: "black"
      },
      Ob = [tb, {
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
      }, Hb],
      pb = [Hb, tb];

    function db(zz) {
      return `${zz} px`
    }

    function Fb(zz) {
      return `${zz}%`
    }

    function Zb(zz) {
      let {
        label: uz,
        value: bz,
        swatches: Ez,
        onChange: nz
      } = zz;
      const {
        t: Mz
      } = (0, lz.F)(), tz = !Ez.some((zz => zz.color === bz));
      return (0, Oz.jsxs)("div", {
        className: "SettingBox CrosshairColorRow",
        children: [(0, Oz.jsx)("div", {
          className: "SliderText",
          children: uz
        }), (0, Oz.jsxs)("div", {
          className: "CrosshairSwatches",
          role: "radiogroup",
          "aria-label": uz,
          children: [Ez.map((zz => {
            let {
              color: uz,
              name: Ez
            } = zz;
            return (0, Oz.jsx)("button", {
              type: "button",
              role: "radio",
              "aria-checked": uz === bz,
              "aria-label": Mz(`crosshairSettings:color_${Ez}`),
              "data-pad-focusable": !0,
              className: iz()("CrosshairSwatch", {
                Selected: uz === bz
              }),
              style: {
                background: (0, Mb.m)(uz)
              },
              onClick: () => {
                nz(uz)
              }
            }, uz)
          })), (0, Oz.jsx)("label", {
            className: iz()("CrosshairSwatch CrosshairSwatchCustom", {
              Selected: tz
            }),
            style: tz ? {
              background: (0, Mb.m)(bz)
            } : void 0,
            title: Mz("crosshairSettings:customColor"),
            "data-pad-focusable": !0,
            children: (0, Oz.jsx)("input", {
              type: "color",
              "aria-label": Mz("crosshairSettings:customColor"),
              value: (0, Mb.m)(bz),
              onChange: zz => {
                const uz = (0, Mb.p)(zz.target.value);
                null !== uz && nz(uz)
              }
            })
          })]
        })]
      })
    }

    function Rb(zz) {
      let {
        settings: uz,
        onChange: bz
      } = zz;
      const {
        t: Ez
      } = (0, lz.F)(), nz = (zz, Ez) => {
        bz((0, Mb.u)(uz, zz, Ez))
      }, iz = function(zz, bz) {
        let Ez = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : db;
        const {
          min: iz,
          max: lz,
          step: Mz
        } = Mb.b[zz];
        return (0, Oz.jsx)(Nz.f, {
          name: bz,
          min: iz,
          max: lz,
          step: Mz,
          initValue: uz[zz],
          format: Ez,
          onChange: uz => {
            nz(zz, uz)
          }
        }, zz)
      }, Mz = ["lines", "dot", "circle"].filter((zz => uz[zz])), tz = (zz, bz, Ez) => (0, Oz.jsx)(Nz.b, {
        label: bz,
        checked: uz[zz],
        disabled: 1 === Mz.length && Mz[0] === zz,
        circleInfoText: Ez,
        onClick: uz => {
          nz(zz, uz)
        }
      }, zz), Hz = "shapes" === uz.style;
      return (0, Oz.jsxs)(Oz.Fragment, {
        children: [(0, Oz.jsx)(Nz.e, {
          label: Ez("crosshairSettings:style"),
          options: [{
            value: "classic",
            label: Ez("crosshairSettings:styleClassic")
          }, {
            value: "shapes",
            label: Ez("crosshairSettings:styleShapes")
          }],
          value: uz.style,
          onChange: zz => {
            nz("style", zz)
          }
        }), (0, Oz.jsx)(Zb, {
          label: Ez("crosshairSettings:color"),
          value: uz.color,
          swatches: Ob,
          onChange: zz => {
            nz("color", zz)
          }
        }), iz("opacity", Ez("crosshairSettings:opacity"), Fb), !Hz && iz("size", Ez("crosshairSettings:size"), Fb), Hz && (0, Oz.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [tz("lines", Ez("crosshairSettings:lines")), uz.lines && iz("lineLength", Ez("crosshairSettings:lineLength")), uz.lines && iz("lineThickness", Ez("crosshairSettings:lineThickness")), uz.lines && iz("gap", Ez("crosshairSettings:gap")), uz.lines && tz("tStyle", Ez("crosshairSettings:tStyle"))]
        }), Hz && (0, Oz.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [tz("dot", Ez("crosshairSettings:dot")), uz.dot && iz("dotSize", Ez("crosshairSettings:dotSize"))]
        }), Hz && (0, Oz.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [tz("circle", Ez("crosshairSettings:circle")), uz.circle && iz("circleRadius", Ez("crosshairSettings:circleRadius")), uz.circle && iz("circleThickness", Ez("crosshairSettings:circleThickness"))]
        }), (0, Oz.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [iz("outline", Ez("crosshairSettings:outline"), (zz => zz > 0 ? db(zz) : Ez("crosshairSettings:off"))), uz.outline > 0 && (0, Oz.jsx)(Zb, {
            label: Ez("crosshairSettings:outlineColor"),
            value: uz.outlineColor,
            swatches: pb,
            onChange: zz => {
              nz("outlineColor", zz)
            }
          })]
        }), tz("growOnClick", Ez("crosshairSettings:growOnClick")), Hz && tz("forGuns", Ez("crosshairSettings:forGuns"), Ez("crosshairSettings:forGunsInfo"))]
      })
    }
    var Kb = bz(79),
      wb = bz(1266),
      Xb = bz(8936),
      fb = bz(8938),
      sb = bz(8942),
      rb = bz(8947);
    const ob = ["sky", "grass", "stone", "sand", "snow", "night"],
      Nb = "4rem";

    function vb(zz) {
      return {
        backgroundImage: `url(${zz})`,
        backgroundSize: `${Nb} ${Nb}`,
        backgroundRepeat: "repeat",
        imageRendering: "pixelated"
      }
    }

    function xb(zz) {
      return {
        ...(() => {
          switch (zz) {
            case "sky":
              return {
                backgroundImage: "linear-gradient(#3d8fe0 0%, #8cc8f5 45%, #d6eefc 58%, #6fae4a 58.01%, #4f8a33 100%)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              };
            case "grass":
              return vb(Xb);
            case "stone":
              return vb(fb);
            case "sand":
              return vb(sb);
            case "snow":
              return vb(rb);
            case "night":
              return {
                backgroundImage: "radial-gradient(circle at 50% 50%, #1e2a4a 0%, #070b16 100vmax)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              }
          }
        })(),
        backgroundPosition: "center"
      }
    }

    function Jb(zz) {
      return Object.freeze({
        ...Mb.f,
        style: "shapes",
        outline: 1,
        lines: !1,
        ...zz
      })
    }
    const Ab = [{
        id: "default",
        settings: Mb.f
      }, {
        id: "cross",
        settings: Jb({
          color: 5046092,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3
        })
      }, {
        id: "crossDot",
        settings: Jb({
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
        settings: Jb({
          dot: !0,
          dotSize: 4
        })
      }, {
        id: "circle",
        settings: Jb({
          circle: !0,
          circleRadius: 12,
          circleThickness: 1.5,
          dot: !0,
          dotSize: 2
        })
      }, {
        id: "tShape",
        settings: Jb({
          color: 16731391,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3,
          tStyle: !0
        })
      }, {
        id: "tiny",
        settings: Jb({
          color: 16776960,
          lines: !0,
          lineLength: 3,
          lineThickness: 1,
          gap: 2
        })
      }, {
        id: "bold",
        settings: Jb({
          lines: !0,
          lineLength: 10,
          lineThickness: 3,
          gap: 0,
          outline: 1.5
        })
      }],
      Tb = ["growOnClick", "forGuns"];
    var Lb = bz(8954);

    function Pb(zz) {
      let {
        label: uz,
        selected: bz,
        onClick: Ez,
        className: nz,
        style: lz,
        children: Mz
      } = zz;
      return (0, Oz.jsx)("button", {
        type: "button",
        role: "radio",
        "aria-checked": bz,
        title: uz,
        "aria-label": uz,
        "data-pad-focusable": !0,
        className: iz()("CrosshairBackdropSwatch", nz, {
          Selected: bz
        }),
        style: lz,
        onClick: Ez,
        children: Mz
      })
    }

    function Gb(zz) {
      let {
        backdrop: uz,
        onChange: bz,
        game: Ez
      } = zz;
      const {
        t: nz
      } = (0, lz.F)();
      return (0, Oz.jsxs)("div", {
        className: "CrosshairBackdrops",
        role: "radiogroup",
        "aria-label": nz("crosshairSettings:background"),
        children: [Ez && (0, Oz.jsx)(Pb, {
          label: nz("crosshairSettings:bg_game"),
          selected: Ez.selected,
          onClick: Ez.onSelect,
          className: "CrosshairGameSwatch",
          children: (0, Oz.jsx)(Mz.c, {
            name: "cube"
          })
        }), ob.map((zz => (0, Oz.jsx)(Pb, {
          label: nz(`crosshairSettings:bg_${zz}`),
          selected: !(null !== Ez && void 0 !== Ez && Ez.selected) && zz === uz,
          style: xb(zz),
          onClick: () => {
            bz(zz)
          }
        }, zz)))]
      })
    }

    function ab(zz) {
      let {
        settings: uz,
        touch: bz,
        backdrop: Ez,
        onChange: nz
      } = zz;
      const {
        t: Mz
      } = (0, lz.F)(), tz = function(zz) {
        var uz;
        return null !== (uz = Ab.find((uz => (0, Mb.t)(uz.settings, zz, Tb)))) && void 0 !== uz ? uz : null
      }(uz);
      return (0, Oz.jsx)("div", {
        className: "CrosshairPresets",
        role: "radiogroup",
        "aria-label": Mz("crosshairSettings:presets"),
        children: Ab.map((zz => {
          const lz = (null === tz || void 0 === tz ? void 0 : tz.id) === zz.id;
          return (0, Oz.jsxs)("button", {
            type: "button",
            role: "radio",
            "aria-checked": lz,
            "data-pad-focusable": !0,
            className: iz()("CrosshairPreset", {
              Selected: lz
            }),
            onClick: () => {
              nz(function(zz, uz) {
                return {
                  ...uz.settings,
                  growOnClick: zz.growOnClick,
                  forGuns: zz.forGuns
                }
              }(uz, zz))
            },
            children: [(0, Oz.jsx)("div", {
              className: "CrosshairPresetStage",
              style: xb(Ez),
              children: (0, Oz.jsx)(Lb.c, {
                settings: zz.settings,
                touch: bz,
                inPreview: !0
              })
            }), (0, Oz.jsx)("div", {
              className: "CrosshairPresetName",
              children: Mz(`crosshairSettings:preset_${zz.id}`)
            })]
          }, zz.id)
        }))
      })
    }
    var Vb = bz(1619);

    function mb(zz, uz) {
      const [bz, nz] = (0, Ez.useState)(!1), iz = () => {
        nz(!1)
      }, [lz, Mz] = (0, Ez.useState)(!1), tz = (0, Ez.useRef)({
        growOnClick: zz.growOnClick,
        forGuns: zz.forGuns
      });
      (0, Ez.useEffect)((() => {
        const uz = tz.current;
        tz.current = {
          growOnClick: zz.growOnClick,
          forGuns: zz.forGuns
        }, (zz.growOnClick && !uz.growOnClick || zz.forGuns && !uz.forGuns) && Mz(!0)
      }), [zz.growOnClick, zz.forGuns]), (0, Ez.useEffect)((() => {
        if (!lz) return;
        const zz = setTimeout((() => {
          Mz(!1)
        }), 600);
        return () => {
          clearTimeout(zz)
        }
      }), [lz]);
      const Hz = bz || lz;
      return {
        view: {
          pressed: Hz,
          spread: Hz && zz.forGuns && !zz.growOnClick ? 6 : 0
        },
        handlers: {
          onPointerDown: zz => {
            !zz.target.closest(uz) && (0, Vb.c)(zz.currentTarget, zz.pointerId) && nz(!0)
          },
          onPointerUp: iz,
          onPointerCancel: iz,
          onLostPointerCapture: iz
        }
      }
    }

    function qb(zz) {
      let {
        settings: uz,
        touch: bz,
        backdrop: Ez,
        className: nz,
        children: lz,
        label: Mz
      } = zz;
      const tz = mb(uz, ".CrosshairStageControls");
      return (0, Oz.jsxs)("div", {
        className: iz()("CrosshairStage", nz),
        style: xb(Ez),
        ...tz.handlers,
        children: [(0, Oz.jsx)("div", {
          className: "CrosshairStageHold",
          role: "img",
          "aria-label": Mz,
          children: (0, Oz.jsx)(Lb.c, {
            settings: uz,
            touch: bz,
            inPreview: !0,
            ...tz.view
          })
        }), lz]
      })
    }
    const hb = "crosshairFullScreen";

    function Ub(zz) {
      let {
        settings: uz,
        touch: bz,
        backdrop: nz,
        onBackdrop: tz,
        inGame: Hz,
        onChange: pz,
        onClose: dz
      } = zz;
      const {
        t: Fz
      } = (0, lz.F)(), Zz = (0, Ez.useRef)(null);
      (0, wb.u)("popup", Zz, dz),
      function(zz) {
        const uz = (0, Ez.useRef)(zz);
        uz.current = zz, (0, Ez.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [hb]: !0
          }, "");
          let zz = !1;
          const bz = () => {
            zz = !0, uz.current()
          };
          return window.addEventListener("popstate", bz), () => {
            var uz;
            window.removeEventListener("popstate", bz), !zz && null !== (uz = window.history.state) && void 0 !== uz && uz[hb] && window.history.back()
          }
        }), [])
      }(dz);
      const Rz = (0, Ez.useRef)(dz);
      Rz.current = dz, (0, Ez.useEffect)((() => {
        function zz(zz) {
          "Escape" === zz.key && (zz.stopPropagation(), Rz.current())
        }
        return window.addEventListener("keydown", zz, !0), () => {
          window.removeEventListener("keydown", zz, !0)
        }
      }), []);
      const wz = mb(uz, ".CrosshairFullScreenPanel"),
        [Xz, fz] = (0, Ez.useState)(!0),
        sz = Xz && Hz;
      (0, Ez.useEffect)((() => {
        if (sz) return vz.e.set({
          crosshairGameView: !0
        }), () => {
          vz.e.set({
            crosshairGameView: !1
          })
        }
      }), [sz]);
      const [rz, oz] = (0, Ez.useState)(!0);
      return (0, Kb.createPortal)((0, Oz.jsxs)("div", {
        ref: Zz,
        className: "CrosshairFullScreen",
        style: sz ? void 0 : xb(nz),
        ...wz.handlers,
        children: [(0, Oz.jsx)(Lb.c, {
          settings: uz,
          touch: bz,
          inEditor: !0,
          ...wz.view
        }), (0, Oz.jsxs)("div", {
          className: iz()("CrosshairFullScreenPanel", {
            Collapsed: !rz
          }),
          children: [(0, Oz.jsxs)("div", {
            className: "CrosshairFullScreenBar",
            children: [(0, Oz.jsx)(Gb, {
              backdrop: nz,
              onChange: zz => {
                fz(!1), tz(zz)
              },
              game: Hz ? {
                selected: sz,
                onSelect: () => {
                  fz(!0)
                }
              } : void 0
            }), (0, Oz.jsx)(Kz.V, {
              className: "CrosshairPanelToggle",
              ariaLabel: Fz(rz ? "crosshairSettings:hideEditor" : "crosshairSettings:showEditor"),
              onClick: () => {
                oz(!rz)
              },
              children: (0, Oz.jsx)(Mz.c, {
                name: rz ? "caret-up" : "pen"
              })
            }), (0, Oz.jsx)(Kz.f, {
              className: "CrosshairFullScreenDone",
              onClick: dz,
              padDefaultFocus: !0,
              children: Fz("crosshairSettings:done")
            })]
          }), rz && (0, Oz.jsxs)("div", {
            className: "CrosshairFullScreenFields",
            children: [(0, Oz.jsx)(ab, {
              settings: uz,
              touch: bz,
              backdrop: nz,
              onChange: pz
            }), (0, Oz.jsx)(Rb, {
              settings: uz,
              onChange: pz
            })]
          })]
        })]
      }), document.body)
    }
    var cb = bz(2523),
      gb = bz(8962);

    function Sb(zz) {
      let {
        settings: uz,
        onChange: bz
      } = zz;
      const {
        t: nz
      } = (0, lz.F)(), tz = (0, gb.h)(uz), [Hz, pz] = (0, cb.e)(), [dz, Fz] = (0, Ez.useState)(!1), Zz = (0, Ez.useRef)(null), [Rz, wz] = (0, cb.e)(), [Xz, fz] = (0, Ez.useState)(!1);
      return (0, Oz.jsxs)("div", {
        className: "SettingBox CrosshairShare",
        children: [(0, Oz.jsxs)("div", {
          className: "CrosshairShareRow",
          children: [(0, Oz.jsxs)(Kz.V, {
            className: iz()("CrosshairCopy", {
              ActiveSecondaryButton: Hz
            }),
            onClick: () => {
              (0, cb.d)(tz, {
                useShareSheet: !1,
                onOutcome: zz => {
                  Fz("failed" === zz), "copied" === zz && pz()
                }
              })
            },
            children: [(0, Oz.jsx)(Mz.c, {
              name: Hz ? "check" : "copy"
            }), " ", nz(Hz ? "general:copied" : "crosshairSettings:copy")]
          }), (0, Oz.jsx)(rz.d, {
            className: "CrosshairPaste",
            domRef: Zz,
            ariaLabel: nz("crosshairSettings:paste"),
            placeholderText: nz("crosshairSettings:paste"),
            onValueChange: zz => {
              const uz = (0, gb.g)(zz);
              fz(!uz && zz.trim().length >= gb.e), uz && (bz(uz), Zz.current.value = "", wz())
            }
          })]
        }), dz && (0, Oz.jsx)("input", {
          className: "CrosshairCode",
          readOnly: !0,
          value: tz,
          "aria-label": nz("crosshairSettings:copy"),
          onFocus: zz => {
            zz.currentTarget.select()
          }
        }), (0, Oz.jsxs)("div", {
          "aria-live": "polite",
          children: [Xz && (0, Oz.jsx)("div", {
            className: "CrosshairShareNote Error",
            children: nz("crosshairSettings:pasteInvalid")
          }), Rz && !Xz && (0, Oz.jsx)("div", {
            className: "CrosshairShareNote",
            children: nz("crosshairSettings:applied")
          })]
        })]
      })
    }
    var yb = bz(8970);
    let Db = "sky";

    function Qb(zz) {
      let {
        showing: uz
      } = zz;
      const {
        t: bz
      } = (0, lz.F)(), {
        isTouchScreen: nz,
        gameState: iz,
        clientEscMenuOptions: tz
      } = (0, vz.m)(["isTouchScreen", "gameState", "clientEscMenuOptions"]), Hz = (0, yb.f)(), [pz, dz] = (0, Ez.useState)(Db), Fz = zz => {
        Db = zz, dz(zz)
      }, [Zz, Rz] = (0, Ez.useState)(!1);
      return (0, Ez.useEffect)((() => {
        uz || Rz(!1)
      }), [uz]), (0, Oz.jsxs)("div", {
        className: "SettingsMenuRightInner CrosshairCategory",
        children: [(0, Oz.jsx)("div", {
          className: "CrosshairPreviewSticky",
          children: (0, Oz.jsx)(qb, {
            className: "CrosshairPreviewStage",
            settings: Hz,
            touch: nz,
            backdrop: pz,
            label: bz("crosshairSettings:preview"),
            children: (0, Oz.jsxs)("div", {
              className: "CrosshairPreviewBar CrosshairStageControls",
              children: [(0, Oz.jsx)(Gb, {
                backdrop: pz,
                onChange: Fz
              }), (0, Oz.jsxs)(Kz.V, {
                className: "CrosshairFullScreenButton",
                onClick: () => {
                  Rz(!0)
                },
                children: [(0, Oz.jsx)(Mz.c, {
                  name: "expand"
                }), " ", bz("crosshairSettings:fullScreen")]
              })]
            })
          })
        }), (0, Oz.jsx)("div", {
          className: "SettingBox",
          children: (0, Oz.jsx)(ab, {
            settings: Hz,
            touch: nz,
            backdrop: pz,
            onChange: yb.d
          })
        }), (0, Oz.jsx)(Sb, {
          settings: Hz,
          onChange: yb.d
        }), nz && (0, Oz.jsx)(lb.c, {
          note: (0, ib.g)(nz, tz.touchActionButtons) ? bz("crosshairSettings:touchNote") : void 0
        }), (0, Oz.jsx)(Rb, {
          settings: Hz,
          onChange: yb.d
        }), Zz && (0, Oz.jsx)(Ub, {
          settings: Hz,
          touch: nz,
          backdrop: pz,
          onBackdrop: Fz,
          inGame: "inGame" === iz,
          onChange: yb.d,
          onClose: () => {
            Rz(!1)
          }
        })]
      })
    }
    var Wb = bz(8541),
      eb = bz(1371),
      jb = bz(4744),
      Ib = bz(8979),
      Bb = bz(1912),
      Cb = bz(4078),
      Yb = bz(1920),
      kb = bz(694);
    const zE = (0, Ez.memo)((function() {
      const {
        clientEscMenuOptions: zz
      } = (0, vz.m)(["clientEscMenuOptions"]), {
        recording: uz,
        clipping: bz,
        hasClipBuffer: nz
      } = (0, Bb.h)("replayRecorder"), lz = (0, Bb.e)("connectedGame", (zz => zz.replay)), Mz = (0, Cb.j)(), tz = !1 === (0, Zz.g)("canRecordReplays");
      (0, Ez.useEffect)((() => {
        Xz.gameBridge.send("setRecorderPrefs", {
          clipping: zz.enableClipping,
          clipSeconds: zz.clipDurationSeconds
        })
      }), [zz.enableClipping, zz.clipDurationSeconds]);
      const Hz = Mz || lz,
        pz = !Hz && !tz,
        dz = uz || pz,
        Fz = pz,
        Rz = Fz && bz && !uz;

      function wz() {
        dz && Xz.gameBridge.send("toggleRecording", null)
      }
      return (0, Oz.jsxs)("div", {
        className: "SettingsMenuRightInner ReplayViewerCategory",
        children: [(0, Oz.jsxs)("div", {
          className: "SettingBox",
          children: [(0, Oz.jsx)("div", {
            className: "ReplayViewerCategoryRecordingRow",
            children: uz ? (0, Oz.jsxs)(Oz.Fragment, {
              children: [(0, Oz.jsxs)(Kz.K, {
                className: "ReplayViewerCategoryButton",
                onClick: wz,
                disabled: !dz,
                children: [(0, Oz.jsx)("span", {
                  children: "Stop Recording"
                }), (0, Oz.jsx)(Yb.e, {
                  noaAction: "recordGame"
                })]
              }), (0, Oz.jsx)(Ib.d, {
                className: "ReplayViewerCategoryRecordingIndicator"
              })]
            }) : (0, Oz.jsxs)(Kz.f, {
              className: "ReplayViewerCategoryButton",
              onClick: wz,
              disabled: !dz,
              children: [(0, Oz.jsx)("span", {
                children: "Start Recording"
              }), (0, Oz.jsx)(Yb.e, {
                noaAction: "recordGame"
              })]
            })
          }), tz && (0, Oz.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Recording is turned off in this game."
          }), Hz && !uz && (0, Oz.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Close Replay Mode to start recording."
          })]
        }), (0, Oz.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, Oz.jsx)(Nz.b, {
            label: "Enable clipping",
            checked: zz.enableClipping,
            disabled: !Fz,
            onClick: function(zz) {
              Fz && vz.e.setClientEscMenuOptions({
                enableClipping: zz
              })
            },
            className: iz()({
              SettingBoxDisabled: !Fz
            })
          }), (0, Oz.jsx)(Nz.f, {
            name: "Clip duration (seconds)",
            min: kb.k,
            max: kb.h,
            step: kb.c,
            initValue: zz.clipDurationSeconds,
            onChange: function(zz) {
              vz.e.setClientEscMenuOptions({
                clipDurationSeconds: zz
              })
            },
            circleInfoText: "Longer clip durations use more memory and may affect performance.",
            disabled: !Fz || !zz.enableClipping
          })]
        }), (0, Oz.jsxs)("div", {
          className: "SettingBox",
          children: [(0, Oz.jsxs)(Kz.f, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              Rz && Xz.gameBridge.send("saveClip", null)
            },
            disabled: !Rz,
            children: [(0, Oz.jsx)("span", {
              children: "Record clip"
            }), (0, Oz.jsx)(Yb.e, {
              noaAction: "recordClip"
            })]
          }), zz.enableClipping && !nz && Fz && !uz && (0, Oz.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clip buffer is filling \u2014 play for a moment, then save."
          }), uz && (0, Oz.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clipping pauses while a full recording is active."
          })]
        }), (0, Oz.jsxs)("div", {
          className: "SettingBox",
          children: [(0, Oz.jsxs)(Kz.f, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              (0, Cb.i)(!0), vz.e.set({
                openEverythingMenuName: null
              })
            },
            disabled: Mz,
            children: [(0, Oz.jsx)("span", {
              children: "Open Replay Mode"
            }), (0, Oz.jsx)(Yb.e, {
              noaAction: "replayViewerOpen"
            })]
          }), Mz && (0, Oz.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Replay Mode is already open."
          })]
        }), (0, Oz.jsxs)("div", {
          className: "SettingBox",
          children: [(0, Oz.jsx)("div", {
            className: "ReplayViewerCategoryTutorialTitle",
            children: "How to use Replay Mode"
          }), (0, Oz.jsx)("iframe", {
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
    var uE = bz(1840);
    const bE = {
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
        icon: () => (0, Oz.jsx)("svg", {
          className: "svg-inline--fa",
          viewBox: "0 0 640 512",
          "aria-hidden": "true",
          children: (0, Oz.jsx)("path", {
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
      JZ: {
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

    function EE() {
      return Promise.all([bz.e(74), bz.e(131), bz.e(125), bz.e(122)]).then((() => bz(40266))).then((zz => ({
        default: zz.ShaderPackCategory
      })), (zz => (console.error("Failed to load the shader pack settings", zz), {
        default: nE
      })))
    }

    function nE() {
      const {
        t: zz
      } = (0, lz.F)();
      return (0, Oz.jsx)("div", {
        className: "SettingsMenuRightInner",
        children: zz("shaderPack:tabLoadFailed")
      })
    }
    var iE = bz(1362);
    const lE = (0, Ez.lazy)((() => bz.e(263).then((() => bz(40251))).then((zz => ({
        default: zz.BloxdInformation
      }))))),
      ME = (0, Ez.lazy)(EE);

    function tE(zz) {
      return zz ? "general" : "account"
    }
    const HE = new Map,
      OE = (0, Ez.memo)((function(zz) {
        let {
          show: uz,
          setBeforeResumeCallback: bz
        } = zz;
        (0, Rz.b)();
        const {
          gameState: nz,
          openSettingsCategory: iz
        } = (0, vz.m)(["gameState", "openSettingsCategory"]), {
          userContext: tz
        } = (0, Fz.c)(), {
          t: Hz
        } = (0, lz.F)(), rz = (0, dz.c)(), oz = (0, Zz.g)("minChunkAddDist"), Nz = "inGame" === nz, [xz, Tz] = (0, Ez.useState)(tE(Nz)), [Lz, Pz] = (0, Ez.useState)(null), [Gz, az] = (0, Ez.useState)([]), Vz = (0, Ez.useRef)(function() {
          const zz = new Date,
            uz = 6 * (zz.getMonth() + zz.getDate()) % Hu.C.length;
          return [...Hu.C, ...Hu.C].slice(uz, uz + 6)
        }()), mz = (0, Ez.useRef)(null), qz = (0, Au.h)(eb.j, (0, eb.b)()), hz = Object.keys(bE).filter((zz => {
          switch (zz) {
            case "replayViewer":
              return Nz;
            case "developerTools":
              return tz.playerHasRank("developer") || !1;
            case "texturePack":
              return wz.featureFlags.settings.canChangeTexturePack;
            case "JZ":
              return wz.featureFlags.settings.canUseShaderPacks;
            case "notifications":
              return wz.featureFlags.useSocialFeatures;
            case "alternativeDomains":
              return "crazygames" !== Az.x;
            case "controller":
              return wz.featureFlags.useControllerSupport && (qz || "controller" === xz);
            default:
              return !0
          }
        }));
        (0, Au.g)("toggleFullCoordinateOverlay", (() => {
          const zz = Bu("showCoordinates") && Bu("showChunkCoordinates") && Bu("showFPS");
          Cu("showCoordinates", !zz), Cu("showChunkCoordinates", !zz), Cu("showFPS", !zz), rz()
        })), (0, Au.g)("updatedChunkLoadDist", (() => {
          rz()
        })), (0, Ez.useEffect)((() => {
          if (Pz(null), null === vz.e.get("openSettingsCategory")) {
            const zz = (0, iE.f)() ? HE.get(Nz) : void 0;
            Tz(zz && hz.includes(zz) ? zz : tE(Nz))
          }
        }), [uz]), (0, Ez.useEffect)((() => {
          null !== iz && (Tz(iz), HE.set(Nz, iz), vz.e.set({
            openSettingsCategory: null
          }))
        }), [iz, Nz]), (0, Ez.useLayoutEffect)((() => {
          mz.current && (mz.current.scrollTop = 0)
        }), [xz, uz]), (0, Ez.useEffect)((() => {
          "updateLog" === xz && (0, sz.d)().then(az)
        }), [xz]), (0, Ez.useEffect)((() => {
          if ((0, yu.F)(oz)) return;
          const [zz, uz] = (0, Eb.e)(), [bz, Ez] = (0, qu.g)(oz), nz = (0, uE.f)(oz[0], zz, bz), iz = (0, uE.f)(oz[1], uz, Ez);
          Xz.gameBridge.send("setChunkAddDistance", {
            horizontal: nz,
            vertical: iz
          })
        }), [oz]);
        const Uz = (0, Ez.useCallback)((async () => {
          Lz && (await Lz(), Pz(null))
        }), [Lz]);

        function cz() {
          vz.e.set({
            openEverythingMenuName: null
          })
        }
        return (0, Ez.useEffect)((() => {
          bz((() => Uz))
        }), [Uz, bz]), (0, Oz.jsxs)("div", {
          className: "SettingsMenu Menu",
          style: uz ? {} : {
            display: "none"
          },
          children: [(0, Oz.jsx)("div", {
            className: "MenuSideBar",
            children: (0, Oz.jsx)("div", {
              className: "MenuSideBarBody",
              children: (0, Oz.jsx)(pz, {
                items: hz.map((zz => {
                  const uz = bE[zz].icon;
                  return {
                    id: zz,
                    faIcon: "string" === typeof uz ? uz : void 0,
                    iconElement: "string" === typeof uz ? void 0 : (0, Oz.jsx)(uz, {}),
                    title: Hz(bE[zz].displayName),
                    redDot: !1
                  }
                })),
                selectedItemId: xz,
                onClick: zz => {
                  !async function(zz) {
                    await Uz(), Tz(zz), HE.set(Nz, zz)
                  }(zz)
                }
              })
            })
          }), (0, Oz.jsxs)("div", {
            ref: mz,
            className: "MenuBody SettingsMenuRight",
            children: ["account" === xz && (0, Oz.jsx)(Xu, {
              showing: uz,
              inGame: Nz
            }), "general" === xz && (0, Oz.jsx)(vu, {
              inGame: Nz
            }), "audio" === xz && (0, Oz.jsx)(xu, {}), "notifications" === xz && (0, Oz.jsx)(mu, {}), "graphics" === xz && (0, Oz.jsx)(bb, {
              minChunkAddDist: null !== oz && void 0 !== oz ? oz : [2, 2],
              getValue: Bu,
              onChange: Cu,
              setApplySettingsCallback: Pz
            }), "controls" === xz && (0, Oz.jsx)(nb.f, {}), "crosshair" === xz && (0, Oz.jsx)(Qb, {
              showing: uz
            }), "controller" === xz && wz.featureFlags.useControllerSupport && (0, Oz.jsx)(Wb.e, {}), wz.featureFlags.settings.canChangeTexturePack && "texturePack" === xz && (0, Oz.jsx)(jb.c, {
              setApplySettingsCallback: Pz
            }), wz.featureFlags.settings.canUseShaderPacks && "JZ" === xz && (0, Oz.jsx)(Ez.Suspense, {
              fallback: null,
              children: (0, Oz.jsx)(ME, {
                setApplySettingsCallback: Pz
              })
            }), "updateLog" === xz && (0, Oz.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, Oz.jsx)("div", {
                className: "UpdateLogsContainer",
                children: Gz.map(((zz, uz) => (0, Oz.jsx)(fz.b, {
                  updateLog: zz,
                  index: uz,
                  close: cz
                }, uz)))
              })
            }), "information" === xz && (0, Oz.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, Oz.jsx)(Ez.Suspense, {
                fallback: null,
                children: (0, Oz.jsx)(lE, {})
              })
            }), "alternativeDomains" === xz && (0, Oz.jsxs)("div", {
              className: "SettingsMenuRightInner",
              children: [(0, Oz.jsx)("div", {
                className: "AlternativeDomainsTitle",
                children: Hz("settingsMenu:unblockedDomainsDescription")
              }), (0, Oz.jsx)("div", {
                className: "AlternativeDomainsList",
                children: Vz.current.map((zz => (0, Oz.jsxs)(Kz.f, {
                  onClick: () => {
                    window.open(`https://${zz}`)
                  },
                  children: [(0, Oz.jsx)(Mz.c, {
                    name: "arrow-up-right-from-square"
                  }), " ", zz]
                }, zz)))
              })]
            }), "replayViewer" === xz && (0, Oz.jsx)(zE, {}), "developerTools" === xz && (0, Oz.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, Oz.jsx)(Jz, {
                setApplySettingsCallback: Pz
              })
            }), null !== Lz && (0, Oz.jsx)("div", {
              className: "SettingsMenuRightFooter",
              children: (0, Oz.jsx)(Kz.f, {
                className: "SettingsMenuRightFooterButton",
                onClick: Uz,
                children: Hz("general:apply")
              })
            })]
          })]
        })
      }));
    var pE = bz(2471);
    const dE = ["characters", "emote", "skin", "hat", "head", "eyebrows", "eyes", "back", "body", "legs", "shoes", "profileEffect", "cape", "nameColour"],
      FE = (0, Ez.lazy)((() => Promise.resolve().then((() => bz(4407))).then((zz => {
        zz.needGameClientAfterPaint();
        const uz = zz.matchmakingLibrariesPromise.then((zz => (0, pE.d)(zz.loadCharacterCustomisationUI(), (zz => zz.CharacterCustomisationUI))));
        return Promise.all([zz.ensureGameSetup(), uz]).then((zz => {
          let [, uz] = zz;
          return uz
        }))
      }))));

    function ZE(zz) {
      let {
        show: uz
      } = zz;
      const {
        userContext: bz
      } = (0, Fz.c)(), [nz, iz] = (0, Ez.useState)("characters");
      if (!uz) return null;
      const lz = dE.filter((zz => "cape" !== zz && "nameColour" !== zz || bz.getPlayerRanks().includes("super") || (0, gz.purchasesAllowed)())).map((zz => ({
        id: zz,
        faIcon: Hu.K[zz],
        title: Hu.O[zz],
        redDot: !1
      })));
      return (0, Oz.jsxs)("div", {
        className: "Menu CharCustomisation",
        children: [(0, Oz.jsx)("div", {
          className: "MenuSideBar",
          children: (0, Oz.jsx)(pz, {
            items: lz,
            selectedItemId: nz,
            onClick: zz => {
              iz(zz)
            }
          })
        }), (0, Oz.jsx)("div", {
          className: "MenuBody",
          children: (0, Oz.jsx)(Ez.Suspense, {
            fallback: (0, Oz.jsx)("div", {
              className: "CharacterCustomisationLoading",
              children: (0, Oz.jsx)(oz.c, {})
            }),
            children: (0, Oz.jsx)(FE, {
              selectedTab: nz
            })
          })
        })]
      })
    }
    var RE = bz(1434),
      KE = bz(8982),
      wE = bz(4292),
      XE = bz(3169),
      fE = bz(3210),
      sE = bz(9013),
      rE = bz(8434),
      oE = bz(8987),
      NE = bz(8999),
      vE = bz(1856),
      xE = bz(1846),
      JE = bz(4670),
      AE = bz(1249),
      TE = bz(1212),
      LE = bz(1613),
      PE = bz(8524);

    function GE(zz) {
      return zz ? Object.keys(zz).sort(((uz, bz) => {
        var Ez, nz, iz, lz;
        const Mz = (null !== (Ez = null === (nz = zz[bz]) || void 0 === nz ? void 0 : nz.sortPriority) && void 0 !== Ez ? Ez : 0) - (null !== (iz = null === (lz = zz[uz]) || void 0 === lz ? void 0 : lz.sortPriority) && void 0 !== iz ? iz : 0);
        return 0 !== Mz ? Mz : uz.localeCompare(bz)
      })) : []
    }
    const aE = [{
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

    function VE(zz) {
      for (const {
          threshold: uz,
          suffix: bz
        }
        of aE)
        if (zz >= uz) {
          const Ez = zz / uz;
          return Ez >= 100 ? `${Math.floor(Ez)}${bz}` : Ez >= 10 ? `${Ez.toFixed(1).replace(/\.0$/,"")}${bz}` : `${Ez.toFixed(2).replace(/\.?0+$/,"")}${bz}`
        } return String(zz)
    }
    var mE = bz(4770);
    const qE = {
        normal: "0.8em",
        big: "1em"
      },
      hE = (0, Ez.memo)((function(zz) {
        let {
          item: uz,
          amount: bz = 0,
          size: Ez = "normal",
          tier: nz = null
        } = zz;
        return (0, Oz.jsx)("div", {
          className: iz()("SmpSlot", `SmpSlot-${Ez}`),
          children: uz && (0, Oz.jsx)(vE.c, {
            itemName: uz,
            amount: bz > 1 ? bz : 0,
            amountFontSize: qE[Ez],
            enchantmentTier: nz
          })
        })
      }));

    function UE(zz) {
      let {
        amount: uz,
        exact: bz = !1,
        className: Ez
      } = zz;
      return (0, Oz.jsxs)("span", {
        className: iz()("SmpGold", Ez),
        children: [(0, Oz.jsx)("span", {
          className: "SmpCoin",
          children: (0, Oz.jsx)(vE.c, {
            itemName: "Gold Coin",
            amount: 0
          })
        }), bz ? uz.toLocaleString("en-US") : VE(uz)]
      })
    }

    function cE(zz) {
      let {
        count: uz = 5,
        grid: bz = !1
      } = zz;
      return (0, Oz.jsx)("div", {
        className: bz ? "SmpCardGrid" : "SmpList",
        "aria-hidden": "true",
        children: Array.from({
          length: uz
        }, ((zz, uz) => (0, Oz.jsxs)("div", {
          className: iz()(bz ? "SmpListingCard" : "SmpRow", "SmpSkeleton"),
          children: [(0, Oz.jsx)("div", {
            className: iz()("SmpSlot", bz ? "SmpSlot-big" : "SmpSlot-normal")
          }), (0, Oz.jsxs)("div", {
            className: "SmpRowText",
            children: [(0, Oz.jsx)("b", {}), (0, Oz.jsx)("small", {})]
          }), (0, Oz.jsx)("div", {
            className: "SmpSkeletonButton"
          })]
        }, uz)))
      })
    }

    function gE(zz) {
      let {
        title: uz,
        children: bz
      } = zz;
      return (0, Oz.jsxs)("div", {
        className: "SmpEmpty",
        children: [(0, Oz.jsx)("b", {
          children: uz
        }), bz && (0, Oz.jsx)("small", {
          children: bz
        })]
      })
    }

    function SE(zz) {
      let {
        entry: uz
      } = zz;
      return (0, Oz.jsx)(gE, {
        title: (0, Oz.jsx)(xE.b, {
          text: uz.item.customTitle
        }),
        children: (0, Oz.jsx)(xE.b, {
          text: uz.item.description
        })
      })
    }

    function yE(zz) {
      return (0, Oz.jsx)(mE.d, {
        ...zz,
        className: iz()("SmpChoice", zz.className),
        reselectable: !0
      })
    }

    function DE() {
      return (0, Oz.jsx)("span", {
        className: "SmpLoader",
        children: (0, Oz.jsx)(oz.c, {})
      })
    }

    function QE(zz) {
      let {
        value: uz,
        onChange: bz,
        min: nz = 1,
        max: iz,
        step: lz = 1,
        label: Mz
      } = zz;
      const tz = (0, Ez.useRef)(null),
        Hz = (0, Ez.useRef)(uz);
      Hz.current = uz;
      const [pz, dz] = (0, Ez.useState)(null), Fz = zz => Math.max(nz, Math.min(iz, Math.floor(zz))), Zz = zz => {
        const uz = Hz.current,
          Ez = "function" === typeof lz ? lz(uz, zz) : lz,
          nz = Fz(uz + Ez * zz);
        Hz.current = nz, bz(nz)
      };
      (0, Ez.useEffect)((() => {
        if (null === pz) return;
        let zz;
        const uz = () => {
            dz(null)
          },
          bz = setTimeout((() => {
            zz = setInterval((() => {
              Zz(pz);
              const zz = Hz.current;
              (pz > 0 ? zz >= iz : zz <= nz) && uz()
            }), 70)
          }), 380);
        return window.addEventListener("pointerup", uz), window.addEventListener("pointercancel", uz), window.addEventListener("blur", uz), () => {
          clearTimeout(bz), clearInterval(zz), window.removeEventListener("pointerup", uz), window.removeEventListener("pointercancel", uz), window.removeEventListener("blur", uz)
        }
      }), [pz]), (0, Ez.useEffect)((() => {
        const zz = tz.current;
        zz && document.activeElement !== zz && zz.value !== String(uz) && (zz.value = String(uz))
      }), [uz]), (0, Ez.useEffect)((() => {
        const zz = tz.current;
        if (!zz) return;
        const uz = () => {
          zz.value = String(Hz.current)
        };
        return zz.addEventListener("blur", uz), () => {
          zz.removeEventListener("blur", uz)
        }
      }), []);
      const Rz = zz => (0, Oz.jsx)("button", {
        type: "button",
        className: "SmpStepButton",
        "aria-label": `${zz>0?"More":"Less"} ${Mz}`,
        disabled: zz > 0 ? uz >= iz : uz <= nz,
        onPointerDown: uz => {
          0 === uz.button && (Zz(zz), dz(zz))
        },
        onKeyDown: uz => {
          "Enter" !== uz.key && " " !== uz.key || Zz(zz)
        },
        onContextMenu: zz => {
          zz.preventDefault()
        },
        children: zz > 0 ? "+" : "\u2212"
      });
      return (0, Oz.jsxs)("div", {
        className: "SmpStepper",
        children: [Rz(-1), (0, Oz.jsx)(rz.d, {
          className: "SmpStepperInput",
          domRef: tz,
          defaultValue: String(uz),
          ariaLabel: Mz,
          type: "text",
          blurOnEnter: !0,
          onValueChange: zz => {
            const uz = zz.replace(/[^\d]/g, "");
            tz.current && uz !== zz && (tz.current.value = uz), "" !== uz && bz(Fz(Number(uz)))
          }
        }), Rz(1)]
      })
    }

    function WE(zz) {
      return Math.max(1, 10 ** Math.max(0, Math.floor(Math.log10(Math.max(1, zz))) - 1))
    }
    var eE = bz(9007),
      jE = bz(1226);
    const IE = ["building", "colours", "nature", "decoration", "utility", "tools", "combat", "food", "mobs", "materials", "worldTools"];
    jE.w, Uz.Jc.length;
    new Map;
    var BE = bz(3043);

    function CE(zz, uz) {
      var bz;
      return uz && (null === (bz = zz[uz]) || void 0 === bz ? void 0 : bz.smp) || null
    }

    function YE(zz, uz) {
      const bz = [];
      for (const nz of GE(zz)) {
        var Ez;
        const iz = zz[nz];
        (null === (Ez = iz.smp) || void 0 === Ez ? void 0 : Ez.kind) === uz && bz.push({
          key: nz,
          item: iz,
          meta: iz.smp
        })
      }
      return bz
    }

    function kE(zz, uz) {
      var bz;
      return null !== (bz = YE(zz, uz)[0]) && void 0 !== bz ? bz : null
    }
    const zn = "50% 0% 50% 0%",
      un = [{
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

    function bn(zz) {
      const uz = zz - (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now());
      for (const {
          divisor: bz,
          suffix: Ez
        }
        of un)
        if (uz >= bz) return `${Math.floor(uz/bz)}${Ez}`;
      return "<1s"
    }

    function En(zz) {
      const uz = zz.map(rE.e),
        bz = [];
      return uz.forEach(((zz, Ez) => {
        const nz = function(zz) {
            const uz = zz.match(/\d+/);
            return uz ? Number(uz[0]) : 0
          }(zz),
          iz = Ez === uz.length - 1;
        (iz || 1 === nz || 10 === nz || 100 === nz) && bz.push({
          label: zz,
          quantity: nz,
          isAll: iz
        })
      })), bz
    }
    let nn = null;

    function Mn(zz, uz) {
      const bz = uz.trim().toLowerCase();
      if (!bz) return [];
      const Ez = zz => {
          if (zz === bz) return 0;
          if (zz.startsWith(bz)) return 1;
          const uz = zz.indexOf(bz);
          return -1 === uz ? -1 : 2 + uz
        },
        nz = [];
      for (const Mz of zz) {
        const zz = [Ez(Mz.lowerLabel), Ez(Mz.lowerName)].filter((zz => -1 !== zz));
        zz.length && nz.push({
          item: Mz,
          rank: Math.min(...zz)
        })
      }
      if (nz.length > 0) return nz.sort(((zz, uz) => zz.rank - uz.rank)).map((zz => zz.item));
      const iz = [...bz],
        lz = zz => {
          let uz = 0;
          for (const bz of iz) {
            if (uz = zz.indexOf(bz, uz), -1 === uz) return !1;
            uz++
          }
          return !0
        };
      return zz.filter((zz => lz(zz.lowerLabel) || lz(zz.lowerName)))
    }

    function tn(zz, uz) {
      var bz;
      return null !== (bz = null === zz || void 0 === zz ? void 0 : zz[uz]) && void 0 !== bz ? bz : uz
    }

    function Hn(zz, uz) {
      const bz = zz.userInput;
      return void 0 !== uz && "dropdown" === (null === bz || void 0 === bz ? void 0 : bz.type) && bz.dropdownOptions.map(rE.e).includes(uz) ? uz : function(zz) {
        const uz = zz.userInput;
        if ("dropdown" !== (null === uz || void 0 === uz ? void 0 : uz.type) || 0 === uz.dropdownOptions.length) return null;
        const bz = uz.dropdownOptions.map(rE.e);
        return uz.initialValue && bz.includes(uz.initialValue) ? uz.initialValue : bz[bz.length - 1]
      }(zz)
    }

    function On(zz) {
      return void 0 === zz ? "" : JSON.stringify(zz)
    }
    const pn = (0, Ez.createContext)(null);

    function dn() {
      return (0, Ez.useContext)(pn)
    }
    var Fn = bz(2548);
    const Zn = (0, Ez.memo)((function(zz) {
        let {
          name: uz,
          label: bz,
          onPick: Ez
        } = zz;
        return (0, Oz.jsxs)("button", {
          type: "button",
          className: "SmpCatalogueTile",
          title: bz,
          onClick: () => {
            Ez(uz)
          },
          children: [(0, Oz.jsx)(hE, {
            item: uz,
            size: "big"
          }), (0, Oz.jsx)("span", {
            children: bz
          })]
        })
      })),
      Rn = (0, Ez.memo)((function(zz) {
        let {
          items: uz,
          query: bz,
          onPick: nz
        } = zz;
        const {
          t: iz
        } = (0, lz.F)(), [Mz, tz] = (0, Ez.useState)(new Set), Hz = (0, Ez.useMemo)((() => function(zz) {
          const uz = new Map;
          for (const bz of zz) {
            let zz = uz.get(bz.category);
            zz || (zz = [], uz.set(bz.category, zz)), zz.push(bz)
          }
          return [...IE, "other"].filter((zz => uz.has(zz))).map((zz => ({
            category: zz,
            items: uz.get(zz)
          })))
        }(uz)), [uz]), pz = (0, Ez.useMemo)((() => Mn(uz, bz).slice(0, 60)), [uz, bz]);
        return bz.trim() ? 0 === pz.length ? (0, Oz.jsx)(gE, {
          title: iz("smpShop:noItemsFound", {
            query: bz.trim()
          }),
          children: iz("smpShop:tryShorterName")
        }) : (0, Oz.jsx)(Fn.b, {
          lazyLoadedClassName: "SmpCatalogueGrid",
          observerRoot: "SmpBody",
          rootMargin: zn,
          observerUpdateDeps: [bz],
          children: pz.map((zz => (0, Oz.jsx)(Zn, {
            name: zz.name,
            label: zz.label,
            onPick: nz
          }, zz.name)))
        }) : (0, Oz.jsx)(Oz.Fragment, {
          children: Hz.map((zz => {
            let {
              category: uz,
              items: bz
            } = zz;
            const Ez = Mz.has(uz) || bz.length <= 48,
              lz = Ez ? bz : bz.slice(0, 48);
            return (0, Oz.jsxs)("section", {
              className: "SmpCatalogueSection",
              children: [(0, Oz.jsxs)("h4", {
                children: [iz("other" === uz ? "smpShop:otherItems" : `creativeInventory:${uz}`), !Ez && (0, Oz.jsx)("button", {
                  type: "button",
                  className: "SmpLink",
                  onClick: () => {
                    tz(new Set([...Mz, uz]))
                  },
                  children: iz("smpShop:showAll", {
                    count: bz.length
                  })
                })]
              }), (0, Oz.jsx)(Fn.b, {
                lazyLoadedClassName: "SmpCatalogueGrid",
                observerRoot: "SmpBody",
                rootMargin: zn,
                observerUpdateDeps: [Ez],
                children: lz.map((zz => (0, Oz.jsx)(Zn, {
                  name: zz.name,
                  label: zz.label,
                  onPick: nz
                }, zz.name)))
              })]
            }, uz)
          }))
        })
      }));

    function Kn(zz, uz) {
      const {
        searched: bz,
        shown: nz,
        searchFor: iz,
        loading: lz
      } = function(zz, uz) {
        var bz;
        const nz = dn(),
          [iz, lz] = (0, Ez.useState)(void 0),
          Mz = (0, Ez.useRef)(void 0),
          tz = (0, Ez.useRef)(0),
          Hz = (0, Ez.useRef)(void 0),
          Oz = null !== (bz = null === zz || void 0 === zz ? void 0 : zz.meta.item) && void 0 !== bz ? bz : null,
          pz = !!zz && nz.isPending(zz.key);
        (0, Ez.useEffect)((() => {
          if (!zz || pz || !uz || void 0 === iz || iz === Oz) return;
          const bz = iz === Mz.current && nz.gaveUpAt(zz.key) > tz.current && Hz.current !== iz;
          (iz !== Mz.current || bz) && nz.act(zz.key, null !== iz && void 0 !== iz ? iz : "*", bz) && (bz && (Hz.current = iz), Mz.current = iz, tz.current = Date.now())
        }), [zz, pz, uz, iz, Oz, nz]);
        const dz = (0, Ez.useCallback)((zz => {
            Mz.current = void 0, Hz.current = void 0, lz(zz)
          }), []),
          Fz = void 0 !== iz && iz !== Oz && (pz || Mz.current !== iz);
        return {
          searched: Oz,
          shown: Fz ? iz : Oz,
          searchFor: dz,
          loading: Fz || pz || null !== Oz && !uz
        }
      }(zz, uz), Mz = (0, Ez.useMemo)((() => function() {
        var zz;
        let uz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          bz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          Ez = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const nz = `${(0,BE.k)()}\x1f${uz.join("\x1e")}\x1f${bz.join("\x1e")}\x1f${JSON.stringify(Ez)}`;
        if ((null === (zz = nn) || void 0 === zz ? void 0 : zz.key) === nz) return nn.items;
        const iz = new Set(bz),
          lz = new Set,
          Mz = [],
          tz = (zz, uz) => {
            var bz;
            if (!zz || lz.has(zz) || iz.has(zz)) return;
            lz.add(zz);
            const nz = null !== (bz = Ez[zz]) && void 0 !== bz ? bz : zz;
            Mz.push({
              name: zz,
              label: nz,
              lowerLabel: nz.toLowerCase(),
              lowerName: zz.toLowerCase(),
              category: uz
            })
          };
        for (const Oz of (0, eE.creativeItemIds)()) {
          var Hz;
          (0, eE.itemIsDisabled)(Oz, !0, !0, !1) || (0, eE.showOnlyInCreativeSearch)(Oz) || tz((0, BE.g)(Oz), null !== (Hz = (0, eE.creativeCategoryOf)(Oz)) && void 0 !== Hz ? Hz : "other")
        }
        for (const Oz of uz) tz(Oz, "other");
        return nn = {
          key: nz,
          items: Mz
        }, Mz
      }(null === zz || void 0 === zz ? void 0 : zz.meta.extra, null === zz || void 0 === zz ? void 0 : zz.meta.excluded, null === zz || void 0 === zz ? void 0 : zz.meta.names)), [null === zz || void 0 === zz ? void 0 : zz.meta.extra, null === zz || void 0 === zz ? void 0 : zz.meta.excluded, null === zz || void 0 === zz ? void 0 : zz.meta.names]), [tz, Hz] = (0, Ez.useState)(""), [Oz, pz] = (0, Ez.useState)(0), [dz, Fz] = (0, Ez.useState)("recent"), Zz = (0, Ez.useCallback)((zz => {
        Hz(""), pz((zz => zz + 1)), iz(zz)
      }), [iz]), Rz = "browse" === dz || "" !== tz.trim();
      return {
        searched: bz,
        shown: nz,
        searchFor: iz,
        loading: lz,
        catalogue: Mz,
        names: null === zz || void 0 === zz ? void 0 : zz.meta.names,
        query: tz,
        setQuery: Hz,
        searchBoxKey: Oz,
        pickItem: Zz,
        setView: Fz,
        browsing: Rz
      }
    }

    function wn(zz) {
      let {
        browser: uz,
        children: bz
      } = zz;
      const {
        t: Ez
      } = (0, lz.F)(), nz = dn();
      return (0, Oz.jsxs)("div", {
        className: "SmpTopBar",
        children: [(0, Oz.jsx)("div", {
          className: "SmpSearch",
          children: (0, Oz.jsx)(rz.d, {
            className: "SmpSearchInput",
            placeholderText: Ez("smpShop:searchPlaceholder"),
            defaultValue: uz.query,
            onValueChange: zz => {
              uz.setQuery(zz), uz.searched && zz.trim() && uz.searchFor(null)
            },
            blurOnEnter: !0,
            onEnter: () => {
              const zz = Mn(uz.catalogue, uz.query)[0];
              zz ? uz.pickItem(zz.name) : uz.query.trim() && nz.notify(Ez("smpShop:noItemsFound", {
                query: uz.query.trim()
              }))
            }
          }, uz.searchBoxKey)
        }), bz]
      })
    }

    function Xn(zz) {
      let {
        browser: uz,
        recentLabel: bz,
        children: Ez
      } = zz;
      const {
        t: nz
      } = (0, lz.F)();
      return (0, Oz.jsxs)("div", {
        className: "SmpViewBar",
        children: [(0, Oz.jsx)(yE, {
          options: [{
            value: "recent",
            label: bz
          }, {
            value: "browse",
            label: nz("smpShop:browseItems")
          }],
          value: uz.browsing ? "browse" : "recent",
          onChange: uz.setView,
          ariaLabel: nz("smpShop:show")
        }), !uz.browsing && Ez]
      })
    }

    function fn(zz) {
      let {
        item: uz,
        names: bz,
        summary: Ez,
        onBack: nz,
        children: iz
      } = zz;
      const {
        t: Mz
      } = (0, lz.F)();
      return (0, Oz.jsxs)("div", {
        className: "SmpItemHeader",
        children: [(0, Oz.jsx)(Kz.d, {
          className: "SmpBackButton",
          onClick: nz,
          children: Mz("general:back")
        }), (0, Oz.jsx)(hE, {
          item: uz,
          size: "big"
        }), (0, Oz.jsxs)("div", {
          className: "SmpItemHeaderText",
          children: [(0, Oz.jsx)("b", {
            children: tn(bz, uz)
          }), Ez && (0, Oz.jsx)("small", {
            children: Ez
          })]
        }), iz]
      })
    }

    function sn(zz) {
      let {
        browser: uz,
        className: bz,
        action: Ez,
        above: nz,
        list: lz,
        summary: Mz,
        recentLabel: tz,
        listControls: Hz,
        onBack: pz
      } = zz;
      return (0, Oz.jsxs)("div", {
        className: iz()("SmpScreen", bz),
        children: [(0, Oz.jsx)(wn, {
          browser: uz,
          children: Ez
        }), uz.shown && (0, Oz.jsx)(fn, {
          item: uz.shown,
          names: uz.names,
          summary: !uz.loading && Mz,
          onBack: () => {
            null === pz || void 0 === pz || pz(), uz.searchFor(null)
          },
          children: Hz
        }), nz, uz.shown ? lz : (0, Oz.jsxs)(Oz.Fragment, {
          children: [(0, Oz.jsx)(Xn, {
            browser: uz,
            recentLabel: tz,
            children: Hz
          }), uz.browsing ? (0, Oz.jsx)(Rn, {
            items: uz.catalogue,
            query: uz.query,
            onPick: uz.pickItem
          }) : lz]
        })]
      })
    }

    function rn(zz, uz) {
      const bz = zz.map((zz => {
        let {
          meta: uz
        } = zz;
        return uz.pricePerItem
      }));
      return "min" === uz ? Math.min(...bz) : Math.max(...bz)
    }
    var Nn = bz(6291);
    const vn = (0, Ez.memo)((function(zz) {
      var uz;
      const {
        t: bz
      } = (0, lz.F)(), Ez = null === zz.seller, nz = zz.quantity * zz.pricePerItem;
      return (0, Oz.jsxs)("div", {
        className: zz.grid ? "SmpListingCard" : "SmpRow SmpListingRow",
        children: [(0, Oz.jsx)(hE, {
          item: zz.item,
          amount: zz.quantity,
          size: zz.grid ? "big" : "normal",
          tier: zz.tier
        }), (0, Oz.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, Oz.jsx)("b", {
            children: (0, Oz.jsx)(xE.b, {
              text: null !== (uz = zz.title) && void 0 !== uz ? uz : `${zz.quantity}x ${zz.item}`
            })
          }), (0, Oz.jsxs)("small", {
            className: "SmpListingFacts",
            children: [(0, Oz.jsx)("span", {
              children: Ez ? bz("smpShop:you") : (0, Oz.jsx)(xE.b, {
                text: [{
                  entityName: zz.seller
                }]
              })
            }), (0, Oz.jsx)("span", {
              children: bz("smpShop:timeLeft", {
                time: bn(zz.expiresAt)
              })
            })]
          })]
        }), (0, Oz.jsxs)("div", {
          className: "SmpRowPrice",
          children: [(0, Oz.jsx)(UE, {
            amount: zz.pricePerItem
          }), (0, Oz.jsx)("small", {
            children: bz("smpShop:each")
          })]
        }), (0, Oz.jsx)(Kz.f, {
          className: "SmpBuyButton",
          disabled: Ez || !zz.canAfford && !zz.busy,
          loading: zz.busy,
          onClick: () => {
            zz.onBuy(zz.itemKey)
          },
          children: Ez ? bz("smpShop:yours") : (0, Oz.jsx)(UE, {
            amount: nz
          })
        })]
      })
    }));

    function xn(zz) {
      let {
        view: uz,
        onChange: bz
      } = zz;
      const {
        t: Ez
      } = (0, lz.F)();
      return (0, Oz.jsx)(mE.d, {
        className: "SmpChoice SmpViewToggle",
        ariaLabel: Ez("smpShop:layout"),
        options: [{
          value: "list",
          label: (0, Oz.jsx)(Mz.c, {
            name: "list"
          }),
          ariaLabel: Ez("smpShop:listView")
        }, {
          value: "grid",
          label: (0, Oz.jsx)(Mz.c, {
            name: "grid-2"
          }),
          ariaLabel: Ez("smpShop:gridView")
        }],
        value: uz,
        onChange: bz
      })
    }

    function Jn(zz) {
      let {
        entries: uz,
        view: bz
      } = zz;
      const {
        t: Ez
      } = (0, lz.F)(), nz = dn(), iz = "grid" === bz;
      return (0, Oz.jsxs)(Oz.Fragment, {
        children: [!iz && (0, Oz.jsxs)("div", {
          className: "SmpColumns",
          "aria-hidden": "true",
          children: [(0, Oz.jsx)("span", {}), (0, Oz.jsx)("span", {
            children: Ez("smpShop:columnItem")
          }), (0, Oz.jsx)("span", {
            children: Ez("smpShop:columnPriceEach")
          }), (0, Oz.jsx)("span", {
            children: Ez("smpShop:columnTotal")
          })]
        }), (0, Oz.jsx)(Fn.b, {
          lazyLoadedClassName: iz ? "SmpCardGrid" : "SmpList",
          observerRoot: "SmpBody",
          rootMargin: zn,
          observerUpdateDeps: [uz.length],
          children: uz.map((zz => {
            var uz, bz;
            let {
              key: Ez,
              item: lz,
              meta: Mz
            } = zz;
            const tz = Mz.quantity * Mz.pricePerItem;
            return (0, Oz.jsx)(vn, {
              itemKey: Ez,
              item: Mz.item,
              title: lz.customTitle,
              quantity: Mz.quantity,
              pricePerItem: Mz.pricePerItem,
              seller: Mz.seller,
              expiresAt: Mz.expiresAt,
              tier: null !== (uz = null === (bz = lz.enchant) || void 0 === bz ? void 0 : bz.tier) && void 0 !== uz ? uz : null,
              busy: nz.isPending(Ez) || null !== Mz.seller && !1 === lz.canBuy,
              canAfford: nz.canAfford(lz, tz),
              grid: iz,
              onBuy: nz.act
            }, Ez)
          }))
        }, bz)]
      })
    }
    const An = [1, 10, 100],
      Tn = [1, 10, 100, 999];

    function Ln(zz) {
      var uz, bz, nz, tz, Hz, pz, dz, Fz, Zz, Rz;
      const {
        t: wz
      } = (0, lz.F)(), Xz = dn(), {
        creator: fz,
        mode: sz
      } = zz, [oz, Nz] = (0, Ez.useState)(null !== (uz = null === fz || void 0 === fz ? void 0 : fz.meta.item) && void 0 !== uz ? uz : null), [vz, xz] = (0, Ez.useState)(1), [Jz, Az] = (0, Ez.useState)(0), [Tz, Lz] = (0, Ez.useState)(""), [Pz, Gz] = (0, Ez.useState)(0), az = (0, Ez.useRef)(oz), Vz = (0, Ez.useRef)(!1), [mz, qz] = (0, Ez.useState)(!1), hz = null !== (bz = null === fz || void 0 === fz ? void 0 : fz.meta.item) && void 0 !== bz ? bz : null, Uz = null !== (nz = null === fz || void 0 === fz ? void 0 : fz.meta.yM) && void 0 !== nz ? nz : 0;
      (0, Ez.useEffect)((() => {
        zz.searching || null === hz || hz === az.current || (az.current = hz, Vz.current = !1, Nz(hz), Az(0), xz("list" === sz ? Math.max(1, Uz) : 1))
      }), [hz, zz.searching]);
      const cz = !!fz && !!oz && fz.meta.item === oz,
        gz = cz ? fz.meta.yM : null !== (tz = null === (Hz = zz.inventory) || void 0 === Hz || null === (pz = Hz.find((zz => zz.item === oz))) || void 0 === pz ? void 0 : pz.quantity) && void 0 !== tz ? tz : 0,
        Sz = "list" === sz ? Math.max(1, gz) : 45954,
        yz = null !== (dz = zz.prices[0]) && void 0 !== dz ? dz : null,
        Dz = zz.prices.length ? Math.round(zz.prices.reduce(((zz, uz) => zz + uz), 0) / zz.prices.length) : null,
        Qz = null === (Fz = zz.inventory) || void 0 === Fz || null === (Zz = Fz.find((zz => zz.item === oz))) || void 0 === Zz ? void 0 : Zz.sellPrice;
      (0, Ez.useEffect)((() => {
        var zz;
        cz && (xz((zz => "list" === sz ? Math.min(Math.max(1, zz), Math.max(1, gz)) : zz)), Vz.current || Az(null !== (zz = null !== yz && void 0 !== yz ? yz : Dz) && void 0 !== zz ? zz : Math.max(1, null !== Qz && void 0 !== Qz ? Qz : 1)))
      }), [cz, gz, oz, yz, Dz]);
      const Wz = zz => {
          Vz.current = !0, Az(zz)
        },
        ez = uz => {
          var bz, Ez, nz;
          az.current = uz, Vz.current = !1, qz(!1), Lz(""), Gz((zz => zz + 1)), Nz(uz), Az(0), xz("list" === sz && null !== (bz = null === (Ez = zz.inventory) || void 0 === Ez || null === (nz = Ez.find((zz => zz.item === uz))) || void 0 === nz ? void 0 : nz.quantity) && void 0 !== bz ? bz : 1), (null === fz || void 0 === fz ? void 0 : fz.meta.item) !== uz && zz.onPickItem(uz)
        },
        jz = vz * Jz,
        Iz = "list" === sz && null !== fz && void 0 !== fz && fz.meta.fee ? function(zz, uz) {
          const bz = Math.max(0, uz - zz.taxFreeAllowance);
          return Math.ceil(Math.round(bz * zz.rate * 1e6) / 1e6)
        }(fz.meta.fee, jz) : 0,
        Bz = !!fz && Xz.isPending(fz.key),
        Cz = cz && !zz.searching && vz >= 1 && Jz >= 1 && ("order" === sz || gz >= vz) && !Bz,
        Yz = !!oz && !cz && !zz.searching && vz >= 1 && Jz >= 1,
        kz = () => {
          Cz ? Xz.act(fz.key, `${vz}|${Jz}`) : Yz && (zz.onPickItem(oz), qz(!0))
        };
      (0, Ez.useEffect)((() => {
        mz && cz && !zz.searching && (qz(!1), kz())
      }), [mz, cz, zz.searching]);
      const zu = !!oz && !cz && (zz.searching || mz),
        uu = oz ? tn(zz.names, oz) : "",
        bu = (0, Ez.useMemo)((() => Mn(zz.catalogue, Tz).slice(0, 8)), [zz.catalogue, Tz]),
        Eu = ("list" === sz ? An.filter((zz => zz < gz)) : Tn).map((zz => ({
          value: zz,
          label: String(zz)
        })));
      "list" === sz && gz > 0 && Eu.push({
        value: gz,
        label: wz("smpShop:all", {
          count: gz
        })
      });
      const nu = [];
      return null !== yz && (yz > 1 && nu.push({
        value: yz - 1,
        label: wz("smpShop:undercut", {
          price: VE(yz - 1)
        })
      }), nu.push({
        value: yz,
        label: wz("smpShop:lowest", {
          price: VE(yz)
        })
      })), null !== Dz && Dz !== yz && nu.push({
        value: Dz,
        label: wz("smpShop:average", {
          price: VE(Dz)
        })
      }), (0, Oz.jsxs)("div", {
        className: "SmpTradeForm",
        children: [(0, Oz.jsxs)("div", {
          className: "SmpTradeFormHead",
          children: [(0, Oz.jsx)("b", {
            children: wz("list" === sz ? "smpShop:sellOnMarket" : "smpShop:createOrder")
          }), (0, Oz.jsx)("button", {
            type: "button",
            className: "SmpIconButton",
            "aria-label": wz("smpShop:close"),
            onClick: zz.onClose,
            children: (0, Oz.jsx)(Mz.c, {
              name: "xmark"
            })
          })]
        }), "list" === sz && (0, Oz.jsx)("div", {
          className: "SmpPicker",
          role: "listbox",
          children: null !== (Rz = zz.inventory) && void 0 !== Rz && Rz.length ? zz.inventory.map((zz => {
            let {
              item: uz,
              quantity: bz
            } = zz;
            return (0, Oz.jsx)("button", {
              type: "button",
              title: uz,
              className: iz()("SmpPickerSlot", {
                SmpPickerSlotOn: uz === oz
              }),
              onClick: () => {
                ez(uz)
              },
              children: (0, Oz.jsx)(hE, {
                item: uz,
                amount: bz
              })
            }, uz)
          })) : (0, Oz.jsx)("span", {
            className: "SmpMuted",
            children: wz("smpShop:nothingToList")
          })
        }), ("list" === sz || !oz) && (0, Oz.jsxs)("div", {
          className: "SmpItemSearch",
          children: [(0, Oz.jsx)(rz.d, {
            className: "SmpSearchInput",
            placeholderText: wz("list" === sz ? "smpShop:listSearchPlaceholder" : "smpShop:orderSearchPlaceholder"),
            defaultValue: Tz,
            onValueChange: Lz,
            blurOnEnter: !0,
            onEnter: () => {
              bu[0] && ez(bu[0].name)
            }
          }, Pz), bu.length > 0 && (0, Oz.jsx)("div", {
            className: "SmpPicker",
            children: bu.map((zz => {
              let {
                name: uz
              } = zz;
              return (0, Oz.jsx)("button", {
                type: "button",
                title: uz,
                className: iz()("SmpPickerSlot", {
                  SmpPickerSlotOn: uz === oz
                }),
                onClick: () => {
                  ez(uz)
                },
                children: (0, Oz.jsx)(hE, {
                  item: uz
                })
              }, uz)
            }))
          })]
        }), oz && (0, Oz.jsxs)(Oz.Fragment, {
          children: [(0, Oz.jsxs)("div", {
            className: "SmpPickedName",
            children: [uu, zu && (0, Oz.jsx)(DE, {})]
          }), (0, Oz.jsxs)("div", {
            className: "SmpFormGrid",
            children: [(0, Oz.jsxs)("div", {
              className: "SmpField",
              children: [(0, Oz.jsxs)("span", {
                children: [wz("smpShop:quantity"), "list" === sz && cz && (0, Oz.jsx)("small", {
                  children: wz("smpShop:youHave", {
                    count: gz
                  })
                })]
              }), (0, Oz.jsx)(QE, {
                value: vz,
                onChange: xz,
                max: Sz,
                label: wz("smpShop:quantity")
              }), (0, Oz.jsx)(yE, {
                options: Eu,
                value: vz,
                onChange: xz,
                ariaLabel: wz("smpShop:quantity")
              })]
            }), (0, Oz.jsxs)("div", {
              className: "SmpField",
              children: [(0, Oz.jsx)("span", {
                children: wz("smpShop:pricePerItem")
              }), (0, Oz.jsx)(QE, {
                value: Math.max(1, Jz),
                onChange: Wz,
                max: 9999999,
                step: WE,
                label: wz("smpShop:pricePerItem")
              }), (0, Oz.jsx)(yE, {
                options: nu,
                value: Jz,
                onChange: Wz,
                ariaLabel: wz("smpShop:pricePerItem")
              })]
            })]
          }), "list" === sz && (0, Oz.jsxs)("div", {
            className: "SmpTradeSummary",
            children: [(0, Oz.jsxs)("span", {
              children: [wz("smpShop:youGet"), " ", (0, Oz.jsx)(UE, {
                amount: Math.max(0, jz - Iz),
                exact: !0
              })]
            }), (0, Oz.jsx)("small", {
              children: Iz > 0 ? wz("smpShop:listingFee", {
                fee: Iz.toLocaleString("en-US")
              }) : wz("smpShop:listingRules")
            })]
          }), (0, Oz.jsx)(Kz.v, {
            className: "SmpSubmit",
            disabled: !Cz && !Yz && !Bz,
            loading: Bz || zu || cz && zz.searching,
            onClick: kz,
            children: "list" === sz ? wz("smpShop:listButton", {
              count: vz,
              item: uu
            }) : (0, Oz.jsxs)(Oz.Fragment, {
              children: [wz("smpShop:orderButton", {
                count: vz,
                item: uu
              }), " ", Jz >= 1 && (0, Oz.jsx)(UE, {
                amount: jz
              })]
            })
          })]
        })]
      })
    }

    function Pn() {
      var zz;
      const {
        t: uz
      } = (0, lz.F)(), bz = dn(), nz = null === (zz = bz.shopInfo[bz.categoryKey]) || void 0 === zz ? void 0 : zz.items, iz = kE(nz, "search"), Mz = kE(nz, "creator"), tz = YE(nz, "enchantedCreator"), Hz = YE(nz, "listing"), pz = kE(nz, "empty"), dz = Kn(iz, Hz.length > 0 || null !== pz), {
        searched: Fz,
        shown: Zz,
        loading: Rz
      } = dz, [wz, Xz] = (0, Ez.useState)(!1), [fz, sz] = function() {
        const [zz, uz] = (0, Nn.d)("smpMarketView", "list");
        return ["grid" === zz ? "grid" : "list", uz]
      }(), rz = "grid" === fz, oz = (0, Ez.useMemo)((() => Hz.filter((zz => {
        let {
          meta: uz
        } = zz;
        return null !== uz.seller && uz.item === Fz
      })).map((zz => {
        let {
          meta: uz
        } = zz;
        return uz.pricePerItem
      })).sort(((zz, uz) => zz - uz))), [Hz, Fz]), Nz = (0, Ez.useMemo)((() => {
        const zz = new Set(dz.catalogue.map((zz => {
          let {
            name: uz
          } = zz;
          return uz
        })));
        return function(zz) {
          for (const uz in zz)
            if ("sell" === zz[uz].smp) return YE(zz[uz].items, "sell").filter((zz => {
              let {
                item: uz
              } = zz;
              return !uz.enchant
            })).map((zz => {
              let {
                meta: uz
              } = zz;
              return {
                item: uz.item,
                quantity: uz.quantity,
                sellPrice: uz.pricePerItem
              }
            }));
          return []
        }(bz.shopInfo).filter((uz => {
          let {
            item: bz
          } = uz;
          return zz.has(bz)
        }))
      }), [bz.shopInfo, dz.catalogue]);
      return (0, Oz.jsx)(sn, {
        browser: dz,
        className: "SmpMarketTab",
        recentLabel: uz("smpShop:recentlyListed"),
        action: (0, Oz.jsx)(Kz.v, {
          className: "SmpSellButton",
          onClick: () => {
            Xz((zz => !zz))
          },
          children: uz("smpShop:sell")
        }),
        above: wz && (0, Oz.jsxs)(Oz.Fragment, {
          children: [(0, Oz.jsx)(Ln, {
            mode: "list",
            creator: Mz,
            inventory: Nz,
            catalogue: dz.catalogue,
            names: dz.names,
            searching: Rz,
            prices: oz,
            onPickItem: dz.searchFor,
            onClose: () => {
              Xz(!1)
            }
          }), tz.length > 0 && (0, Oz.jsx)(Gn, {
            entries: tz
          })]
        }),
        listControls: (0, Oz.jsx)(xn, {
          view: fz,
          onChange: sz
        }),
        summary: Zz && (Hz.length > 0 ? uz(1 === Hz.length ? "smpShop:listingSummaryOne" : "smpShop:listingSummary", {
          count: Hz.length,
          price: VE(rn(Hz, "min"))
        }) : uz("smpShop:noOneSelling", {
          item: tn(dz.names, Zz)
        })),
        list: Rz ? (0, Oz.jsx)(cE, {
          grid: rz
        }) : Hz.length > 0 ? (0, Oz.jsx)(Jn, {
          entries: Hz,
          view: fz
        }) : pz ? (0, Oz.jsx)(SE, {
          entry: pz
        }) : (0, Oz.jsx)(cE, {
          count: 3,
          grid: rz
        })
      })
    }

    function Gn(zz) {
      let {
        entries: uz
      } = zz;
      const {
        t: bz
      } = (0, lz.F)(), nz = dn(), [iz, Mz] = (0, Ez.useState)({});
      return (0, Oz.jsx)("div", {
        className: "SmpList",
        children: uz.map((zz => {
          var uz, Ez, lz;
          let {
            key: tz,
            item: Hz,
            meta: pz
          } = zz;
          const dz = null !== (uz = iz[tz]) && void 0 !== uz ? uz : 1;
          return (0, Oz.jsxs)("div", {
            className: "SmpRow",
            children: [(0, Oz.jsx)(hE, {
              item: pz.item,
              amount: pz.quantity,
              tier: null !== (Ez = null === (lz = Hz.enchant) || void 0 === lz ? void 0 : lz.tier) && void 0 !== Ez ? Ez : null
            }), (0, Oz.jsxs)("div", {
              className: "SmpRowText",
              children: [(0, Oz.jsx)("b", {
                children: (0, Oz.jsx)(xE.b, {
                  text: Hz.customTitle
                })
              }), (0, Oz.jsx)("small", {
                children: bz("smpShop:enchantedListing")
              })]
            }), (0, Oz.jsx)(QE, {
              value: dz,
              onChange: zz => {
                Mz({
                  ...iz,
                  [tz]: zz
                })
              },
              max: 9999999,
              step: WE,
              label: bz("smpShop:pricePerItem")
            }), (0, Oz.jsxs)(Kz.v, {
              loading: nz.isPending(tz),
              onClick: () => {
                nz.act(tz, String(dz))
              },
              children: [bz("smpShop:list"), " ", (0, Oz.jsx)(UE, {
                amount: dz
              })]
            })]
          }, tz)
        }))
      })
    }
    const an = (0, Ez.memo)((function(zz) {
      let {
        itemKey: uz,
        item: bz,
        quantity: Ez,
        pricePerItem: nz,
        tier: lz,
        selected: Mz,
        onSelect: tz
      } = zz;
      return (0, Oz.jsxs)("button", {
        type: "button",
        className: iz()("SmpInventorySlot", {
          SmpInventorySlotOn: Mz
        }),
        title: bz,
        onClick: () => {
          tz(uz)
        },
        children: [(0, Oz.jsx)(hE, {
          item: bz,
          amount: Ez,
          tier: lz
        }), (0, Oz.jsx)(UE, {
          amount: nz
        })]
      })
    }));

    function Vn() {
      var zz;
      const {
        t: uz
      } = (0, lz.F)(), bz = dn(), nz = null === (zz = bz.shopInfo[bz.categoryKey]) || void 0 === zz ? void 0 : zz.items, Mz = YE(nz, "sell"), tz = kE(nz, "empty"), [Hz, pz] = (0, Ez.useState)(null), [dz, Fz] = (0, Ez.useState)({}), Zz = Mz.find((zz => {
        let {
          key: uz
        } = zz;
        return uz === Hz
      }));
      return 0 === Mz.length ? (0, Oz.jsx)("div", {
        className: "SmpScreen",
        children: (0, Oz.jsx)(gE, {
          title: tz ? (0, Oz.jsx)(xE.b, {
            text: tz.item.customTitle
          }) : uz("smpShop:nothingToSell"),
          children: tz && (0, Oz.jsx)(xE.b, {
            text: tz.item.description
          })
        })
      }) : (0, Oz.jsxs)("div", {
        className: "SmpScreen SmpInstantSellTab",
        children: [(0, Oz.jsx)("div", {
          className: "SmpInventoryGrid",
          children: Mz.map((zz => {
            var uz, bz;
            let {
              key: Ez,
              item: nz,
              meta: iz
            } = zz;
            return (0, Oz.jsx)(an, {
              itemKey: Ez,
              item: iz.item,
              quantity: iz.quantity,
              pricePerItem: iz.pricePerItem,
              tier: null !== (uz = null === (bz = nz.enchant) || void 0 === bz ? void 0 : bz.tier) && void 0 !== uz ? uz : null,
              selected: Ez === Hz,
              onSelect: pz
            }, Ez)
          }))
        }), (0, Oz.jsx)("div", {
          className: iz()("SmpSellBar", {
            SmpSellBarIdle: !Zz
          }),
          children: Zz ? (0, Oz.jsx)(mn, {
            entry: Zz,
            choice: Hn(Zz.item, dz[Zz.key]),
            onChoose: zz => {
              Fz({
                ...dz,
                [Zz.key]: zz
              })
            }
          }) : (0, Oz.jsx)("span", {
            className: "SmpMuted",
            children: uz("smpShop:tapToSell")
          })
        })]
      })
    }

    function mn(zz) {
      var uz, bz, Ez, nz;
      let {
        entry: iz,
        choice: Mz,
        onChoose: tz
      } = zz;
      const {
        t: Hz
      } = (0, lz.F)(), pz = dn(), {
        key: dz,
        item: Fz,
        meta: Zz
      } = iz, Rz = En("dropdown" === (null === (uz = Fz.userInput) || void 0 === uz ? void 0 : uz.type) ? Fz.userInput.dropdownOptions : []), wz = null === Mz ? 0 : -(0, rE.b)(Fz, Mz);
      return (0, Oz.jsxs)(Oz.Fragment, {
        children: [(0, Oz.jsx)(hE, {
          item: Zz.item,
          amount: Zz.quantity,
          tier: null !== (bz = null === (Ez = Fz.enchant) || void 0 === Ez ? void 0 : Ez.tier) && void 0 !== bz ? bz : null
        }), (0, Oz.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, Oz.jsx)("b", {
            children: (0, Oz.jsx)(xE.b, {
              text: null !== (nz = Fz.customTitle) && void 0 !== nz ? nz : Zz.item
            })
          }), (0, Oz.jsx)("small", {
            children: Hz("smpShop:sellEach", {
              count: Zz.quantity
            })
          })]
        }), (0, Oz.jsx)(yE, {
          options: Rz.map((zz => {
            let {
              label: uz,
              quantity: bz,
              isAll: Ez
            } = zz;
            return {
              value: uz,
              label: Ez ? Hz("smpShop:all", {
                count: bz
              }) : String(bz)
            }
          })),
          value: Mz,
          onChange: tz,
          ariaLabel: Hz("smpShop:quantity")
        }), (0, Oz.jsxs)(Kz.v, {
          loading: pz.isPending(dz),
          disabled: null === Mz,
          onClick: () => {
            pz.act(dz, Mz)
          },
          children: [Hz("smpShop:sellButton"), " ", (0, Oz.jsx)(UE, {
            amount: wz
          })]
        })]
      })
    }

    function qn() {
      var zz;
      const {
        t: uz
      } = (0, lz.F)(), bz = dn(), Ez = null === (zz = bz.shopInfo[bz.categoryKey]) || void 0 === zz ? void 0 : zz.items, nz = YE(Ez, "collect"), iz = YE(Ez, "myListing"), Mz = (zz, uz) => bz.isPending(zz) || !1 === uz.canBuy;
      return (0, Oz.jsxs)("div", {
        className: "SmpScreen",
        children: [(0, Oz.jsx)("h3", {
          className: "SmpSectionTitle",
          children: uz("smpShop:readyToCollect")
        }), nz.length > 0 ? (0, Oz.jsx)("div", {
          className: "SmpList",
          children: nz.map((zz => {
            var Ez, nz;
            let {
              key: iz,
              item: lz,
              meta: tz
            } = zz;
            return (0, Oz.jsxs)("div", {
              className: "SmpRow",
              children: [(0, Oz.jsx)(hE, {
                item: "sold" === tz.type ? "Gold Coin" : tz.item,
                amount: "sold" === tz.type ? 0 : tz.quantity,
                tier: null !== (Ez = null === (nz = lz.enchant) || void 0 === nz ? void 0 : nz.tier) && void 0 !== Ez ? Ez : null
              }), (0, Oz.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, Oz.jsx)("b", {
                  children: (0, Oz.jsx)(xE.b, {
                    text: lz.customTitle
                  })
                }), (0, Oz.jsx)("small", {
                  children: (0, Oz.jsx)(xE.b, {
                    text: lz.description
                  })
                })]
              }), (0, Oz.jsx)(Kz.q, {
                loading: Mz(iz, lz),
                onClick: () => {
                  bz.act(iz)
                },
                children: uz("smpShop:collect")
              })]
            }, iz)
          }))
        }) : (0, Oz.jsx)(gE, {
          title: uz("smpShop:nothingToCollect"),
          children: uz("smpShop:nothingToCollectHint")
        }), (0, Oz.jsx)("h3", {
          className: "SmpSectionTitle",
          children: uz("smpShop:activeListings", {
            count: iz.length
          })
        }), iz.length > 0 ? (0, Oz.jsx)("div", {
          className: "SmpList",
          children: iz.map((zz => {
            var Ez, nz;
            let {
              key: iz,
              item: lz,
              meta: tz
            } = zz;
            return (0, Oz.jsxs)("div", {
              className: "SmpRow",
              children: [(0, Oz.jsx)(hE, {
                item: tz.item,
                amount: tz.quantity,
                tier: null !== (Ez = null === (nz = lz.enchant) || void 0 === nz ? void 0 : nz.tier) && void 0 !== Ez ? Ez : null
              }), (0, Oz.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, Oz.jsx)("b", {
                  children: (0, Oz.jsx)(xE.b, {
                    text: lz.customTitle
                  })
                }), (0, Oz.jsx)("small", {
                  children: uz("smpShop:timeLeft", {
                    time: bn(tz.expiresAt)
                  })
                })]
              }), (0, Oz.jsxs)("div", {
                className: "SmpRowPrice",
                children: [(0, Oz.jsx)(UE, {
                  amount: tz.pricePerItem
                }), (0, Oz.jsx)("small", {
                  children: uz("smpShop:each")
                })]
              }), (0, Oz.jsx)(Kz.K, {
                loading: Mz(iz, lz),
                onClick: () => {
                  bz.act(iz)
                },
                children: uz("smpShop:cancel")
              })]
            }, iz)
          }))
        }) : (0, Oz.jsx)(gE, {
          title: uz("smpShop:noActiveListings"),
          children: uz("smpShop:noActiveListingsHint")
        })]
      })
    }

    function hn(zz) {
      let {
        done: uz,
        of: bz
      } = zz;
      return (0, Oz.jsx)("span", {
        className: "SmpProgress",
        children: (0, Oz.jsx)("i", {
          style: {
            width: `${Math.min(100,uz/Math.max(1,bz)*100)}%`
          }
        })
      })
    }

    function Un(zz) {
      var uz, bz, Ez;
      let {
        entry: nz,
        choice: iz,
        onChoose: Mz
      } = zz;
      const {
        t: tz
      } = (0, lz.F)(), Hz = dn(), {
        key: pz,
        item: dz,
        meta: Fz
      } = nz, Zz = "dropdown" === (null === (uz = dz.userInput) || void 0 === uz ? void 0 : uz.type) ? dz.userInput.dropdownOptions : [], Rz = !0 === Fz.processing, wz = null !== Fz.creator && (Fz.yM > 0 || Rz), Xz = wz && Fz.yM > 0 ? En(Zz) : [], fz = null === iz ? 0 : null !== (bz = null === (Ez = Xz.find((zz => zz.label === iz))) || void 0 === Ez ? void 0 : Ez.quantity) && void 0 !== bz ? bz : 0;
      return (0, Oz.jsxs)("div", {
        className: "SmpRow SmpOrderRow",
        children: [(0, Oz.jsx)(hE, {
          item: Fz.item
        }), (0, Oz.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, Oz.jsx)("b", {
            children: (0, Oz.jsx)(xE.b, {
              text: dz.customTitle
            })
          }), (0, Oz.jsxs)("small", {
            children: [(0, Oz.jsx)(UE, {
              amount: Fz.pricePerItem
            }), " ", tz("smpShop:each"), " \xb7", " ", null === Fz.creator ? tz("smpShop:you") : (0, Oz.jsx)(xE.b, {
              text: [{
                entityName: Fz.creator
              }]
            })]
          }), (0, Oz.jsx)(hn, {
            done: Fz.delivered,
            of: Fz.wanted
          })]
        }), wz ? (0, Oz.jsxs)(Oz.Fragment, {
          children: [(0, Oz.jsx)(yE, {
            options: Xz.map((zz => {
              let {
                label: uz,
                quantity: bz,
                isAll: Ez
              } = zz;
              return {
                value: uz,
                label: Ez ? tz("smpShop:max", {
                  count: bz
                }) : String(bz)
              }
            })),
            value: iz,
            onChange: Mz,
            ariaLabel: tz("smpShop:quantity")
          }), (0, Oz.jsxs)(Kz.v, {
            loading: Hz.isPending(pz) || Rz,
            disabled: null === iz,
            onClick: () => {
              Hz.act(pz, iz)
            },
            children: [tz("smpShop:deliver"), " ", (0, Oz.jsx)(UE, {
              amount: fz * Fz.pricePerItem
            })]
          })]
        }) : (0, Oz.jsx)("span", {
          className: "SmpMuted SmpRowNote",
          children: null === Fz.creator ? tz("smpShop:yourOrder") : tz("smpShop:youHave", {
            count: 0
          })
        })]
      })
    }

    function cn() {
      var zz;
      const {
        t: uz
      } = (0, lz.F)(), bz = dn(), nz = null === (zz = bz.shopInfo[bz.categoryKey]) || void 0 === zz ? void 0 : zz.items, iz = kE(nz, "search"), Mz = kE(nz, "creator"), tz = YE(nz, "order"), Hz = kE(nz, "empty"), pz = Kn(iz, tz.length > 0 || null !== Hz), [dz, Fz] = (0, Ez.useState)(!1), [Zz, Rz] = (0, Ez.useState)({});
      return (0, Oz.jsx)(sn, {
        browser: pz,
        recentLabel: uz("smpShop:recentOrders"),
        action: (0, Oz.jsx)(Kz.v, {
          onClick: () => {
            Fz((zz => !zz))
          },
          children: uz("smpShop:createOrder")
        }),
        above: dz && (0, Oz.jsx)(Ln, {
          mode: "order",
          creator: Mz,
          catalogue: pz.catalogue,
          names: pz.names,
          searching: pz.loading,
          prices: [],
          onPickItem: pz.searchFor,
          onClose: () => {
            Fz(!1)
          }
        }),
        onBack: () => {
          Fz(!1)
        },
        summary: tz.length > 0 && uz(1 === tz.length ? "smpShop:orderSummaryOne" : "smpShop:orderSummary", {
          count: tz.length,
          price: VE(rn(tz, "max"))
        }),
        list: pz.loading ? (0, Oz.jsx)(cE, {}) : tz.length > 0 ? (0, Oz.jsx)(Fn.b, {
          lazyLoadedClassName: "SmpList",
          observerRoot: "SmpBody",
          rootMargin: zn,
          observerUpdateDeps: [tz.length],
          children: tz.map((zz => (0, Oz.jsx)(Un, {
            entry: zz,
            choice: Hn(zz.item, Zz[zz.key]),
            onChoose: uz => {
              Rz({
                ...Zz,
                [zz.key]: uz
              })
            }
          }, zz.key)))
        }) : Hz ? (0, Oz.jsx)(SE, {
          entry: Hz
        }) : (0, Oz.jsx)(cE, {
          count: 3
        })
      })
    }

    function gn() {
      var zz;
      const {
        t: uz
      } = (0, lz.F)(), bz = dn(), Ez = YE(null === (zz = bz.shopInfo[bz.categoryKey]) || void 0 === zz ? void 0 : zz.items, "myOrder");
      return 0 === Ez.length ? (0, Oz.jsx)("div", {
        className: "SmpScreen",
        children: (0, Oz.jsx)(gE, {
          title: uz("smpShop:noOrders"),
          children: uz("smpShop:noOrdersHint")
        })
      }) : (0, Oz.jsx)("div", {
        className: "SmpScreen",
        children: (0, Oz.jsx)("div", {
          className: "SmpList",
          children: Ez.map((zz => {
            let {
              key: Ez,
              item: nz,
              meta: iz
            } = zz;
            const lz = bz.isPending(Ez) || !1 === nz.canBuy;
            return (0, Oz.jsxs)("div", {
              className: "SmpRow",
              children: [(0, Oz.jsx)(hE, {
                item: iz.item,
                amount: iz.collectable
              }), (0, Oz.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, Oz.jsx)("b", {
                  children: (0, Oz.jsx)(xE.b, {
                    text: nz.customTitle
                  })
                }), (0, Oz.jsxs)("small", {
                  children: [(0, Oz.jsx)(UE, {
                    amount: iz.pricePerItem
                  }), " ", uz("smpShop:each"), iz.collectable > 0 && ` \xb7 ${uz("smpShop:readyCount",{count:iz.collectable})}`]
                }), (0, Oz.jsx)(hn, {
                  done: iz.delivered,
                  of: iz.wanted
                })]
              }), iz.collectable > 0 ? (0, Oz.jsx)(Kz.q, {
                loading: lz,
                onClick: () => {
                  bz.act(Ez)
                },
                children: uz("smpShop:collectCount", {
                  count: iz.collectable
                })
              }) : (0, Oz.jsx)(Kz.K, {
                loading: lz,
                onClick: () => {
                  bz.act(Ez)
                },
                children: uz("smpShop:cancel")
              })]
            }, Ez)
          }))
        })
      })
    }
    const Sn = new Set(["search", "creator", "enchantedCreator", "collect", "myOrder", "order"]),
      yn = {
        sell: "coins",
        market: "store",
        collect: "backpack",
        orders: "file-clipboard",
        myOrders: "location-check"
      };

    function Dn(zz, uz) {
      let bz = !1;
      const Ez = {};
      for (const nz in zz) uz(nz, zz[nz]) ? Ez[nz] = zz[nz] : bz = !0;
      return bz ? Ez : zz
    }

    function Qn(zz) {
      var uz, bz, nz, tz;
      const {
        show: Hz,
        shopInfo: pz,
        selectedCategoryKey: dz
      } = zz, {
        t: Fz
      } = (0, lz.F)(), Zz = null !== dz && void 0 !== dz ? dz : "", Rz = CE(pz, Zz), Kz = null === (uz = pz[Zz]) || void 0 === uz ? void 0 : uz.items, wz = null !== Rz, [Xz, fz] = (0, Ez.useState)({}), [sz, rz] = (0, Ez.useState)([]), [oz, Nz] = (0, Ez.useState)(!1), [vz, xz] = (0, Ez.useState)(null), [, Jz] = (0, Ez.useState)(0), Az = (0, Ez.useRef)(0), Tz = (0, Ez.useRef)({}), Lz = (0, Ez.useRef)({
        items: Kz,
        pending: Xz,
        shopInfo: pz,
        active: wz,
        canAfford: zz.canAfford,
        buy: zz.buy
      });
      Lz.current = {
        items: Kz,
        pending: Xz,
        shopInfo: pz,
        active: wz,
        canAfford: zz.canAfford,
        buy: zz.buy
      };
      const Pz = (0, Ez.useCallback)((zz => {
        Az.current++;
        const uz = Az.current;
        rz((bz => [{
          id: uz,
          text: zz
        }, ...bz].slice(0, 8))), xz(uz)
      }), []);
      (0, Ez.useEffect)((() => {
        if (null === vz) return;
        const zz = setTimeout((() => {
          xz(null)
        }), 3e3);
        return () => {
          clearTimeout(zz)
        }
      }), [vz]), (0, Ez.useEffect)((() => {
        const uz = zz.message;
        if (!uz) return;
        const {
          shopInfo: bz,
          active: Ez,
          items: nz
        } = Lz.current, iz = null !== uz.categoryKey ? null !== CE(bz, uz.categoryKey) : Ez;
        (iz || Ez) && Pz(uz.text), iz && fz((zz => Dn(zz, (zz => {
          var uz, bz;
          return !Sn.has(null === nz || void 0 === nz || null === (uz = nz[zz]) || void 0 === uz || null === (bz = uz.smp) || void 0 === bz ? void 0 : bz.kind)
        }))))
      }), [zz.message, Pz]), (0, Ez.useEffect)((() => {
        fz((zz => Dn(zz, ((zz, uz) => On(null === Kz || void 0 === Kz ? void 0 : Kz[zz]) === uz.snapshot))))
      }), [pz, Kz]);
      const Gz = Object.keys(Xz).length > 0;
      (0, Ez.useEffect)((() => {
        if (!Gz) return;
        const zz = setInterval((() => {
          Jz((zz => zz + 1));
          const zz = Date.now(),
            {
              pending: uz,
              items: bz
            } = Lz.current,
            Ez = Object.keys(uz).filter((bz => zz - uz[bz].at >= 12e3));
          if (0 === Ez.length) return;
          const nz = Ez.some((zz => {
            var Ez, nz;
            return "search" !== (null === bz || void 0 === bz || null === (Ez = bz[zz]) || void 0 === Ez || null === (nz = Ez.smp) || void 0 === nz ? void 0 : nz.kind) || uz[zz].resend
          }));
          for (const iz of Ez) Tz.current[iz] = zz;
          fz((zz => Dn(zz, (zz => !Ez.includes(zz))))), nz && Pz(Fz("smpShop:noAnswer"))
        }), 500);
        return () => {
          clearInterval(zz)
        }
      }), [Gz]), (0, Ez.useEffect)((() => {
        fz({})
      }), [Zz]), (0, Ez.useEffect)((() => {
        Hz || Nz(!1)
      }), [Hz]);
      const az = (0, Ez.useCallback)((function(zz, uz) {
          let bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            items: Ez,
            pending: nz,
            canAfford: iz,
            buy: lz
          } = Lz.current, Mz = null === Ez || void 0 === Ez ? void 0 : Ez[zz];
          if (!Mz || zz in nz || !1 === Mz.canBuy) return !1;
          if (!iz(Mz, (0, rE.b)(Mz, uz))) return !1;
          lz(zz, Mz, uz);
          const tz = {
            snapshot: On(Mz),
            at: Date.now(),
            resend: bz
          };
          return Lz.current.pending = {
            ...Lz.current.pending,
            [zz]: tz
          }, fz((uz => ({
            ...uz,
            [zz]: tz
          }))), !0
        }), []),
        Vz = (0, Ez.useMemo)((() => ({
          shopInfo: pz,
          categoryKey: Zz,
          canAfford: zz.canAfford,
          isPending: zz => zz in Xz,
          gaveUpAt: zz => {
            var uz;
            return null !== (uz = Tz.current[zz]) && void 0 !== uz ? uz : 0
          },
          act: az,
          notify: Pz
        })), [pz, Zz, zz.canAfford, Xz, az, Pz]),
        mz = Math.min(...Object.values(Xz).map((zz => zz.at))),
        qz = Gz && Date.now() - mz > 1500,
        hz = sz.length > 1,
        Uz = null !== (bz = null === (nz = pz[Zz]) || void 0 === nz ? void 0 : nz.customTitle) && void 0 !== bz ? bz : Zz,
        cz = null === (tz = pz[Zz]) || void 0 === tz ? void 0 : tz.description;
      let gz = null;
      return "market" === Rz ? gz = (0, Oz.jsx)(Pn, {}) : "sell" === Rz ? gz = (0, Oz.jsx)(Vn, {}) : "collect" === Rz ? gz = (0, Oz.jsx)(qn, {}) : "orders" === Rz ? gz = (0, Oz.jsx)(cn, {}) : "myOrders" === Rz && (gz = (0, Oz.jsx)(gn, {})), (0, Oz.jsx)(pn.Provider, {
        value: Vz,
        children: (0, Oz.jsx)("div", {
          className: "SmpShopHost",
          hidden: !wz,
          children: (0, Oz.jsxs)("div", {
            className: "SmpShop",
            children: [(0, Oz.jsx)("header", {
              className: "SmpHeader",
              children: (0, Oz.jsxs)("div", {
                className: "SmpHeaderTitle",
                children: [(0, Oz.jsxs)("h2", {
                  children: [Rz && (0, Oz.jsx)(Mz.c, {
                    name: yn[Rz]
                  }), Fz(Uz)]
                }), cz && (0, Oz.jsx)("p", {
                  children: (0, Oz.jsx)(xE.b, {
                    text: cz
                  })
                })]
              })
            }), (0, Oz.jsx)("main", {
              className: "SmpBody",
              "data-pad-initial-area": !0,
              children: Hz && gz
            }), (0, Oz.jsxs)("button", {
              type: "button",
              className: iz()("SmpStatus", {
                SmpStatusWaiting: Gz,
                SmpStatusFresh: !Gz && null !== vz,
                SmpStatusHasHistory: hz
              }),
              "aria-live": "polite",
              "aria-expanded": hz ? oz : void 0,
              onClick: () => {
                hz && Nz((zz => !zz))
              },
              children: [Gz ? (0, Oz.jsxs)("span", {
                className: "SmpStatusText",
                children: [(0, Oz.jsx)(DE, {}), Fz(qz ? "smpShop:slowConnection" : "smpShop:waiting")]
              }) : sz[0] ? (0, Oz.jsx)("span", {
                className: "SmpStatusText",
                children: (0, Oz.jsx)(xE.b, {
                  text: sz[0].text
                })
              }, sz[0].id) : (0, Oz.jsx)("span", {
                className: "SmpStatusText SmpMuted",
                children: Fz("smpShop:ready")
              }), hz && (0, Oz.jsx)("small", {
                children: Fz("smpShop:recentMessages", {
                  count: sz.length
                })
              })]
            }), oz && hz && (0, Oz.jsx)("div", {
              className: "SmpStatusHistory",
              children: sz.map((zz => (0, Oz.jsx)("div", {
                children: (0, Oz.jsx)(xE.b, {
                  text: zz.text
                })
              }, zz.id)))
            })]
          })
        })
      })
    }
    class Wn {
      constructor(zz) {
        this.info = zz
      }
      static fromShopInfo(zz) {
        const uz = {};
        for (const bz in zz) {
          const Ez = !0 === zz[bz].redDot && !0 !== zz[bz].forceRemoveRedDot;
          uz[bz] = {
            redDot: Ez,
            items: {}
          };
          for (const nz in zz[bz].items) {
            const Ez = zz[bz].items[nz],
              iz = !0 === Ez.redDot && !0 !== Ez.forceRemoveRedDot;
            uz[bz].items[nz] = {
              redDot: iz
            }
          }
        }
        return new Wn(uz)
      }
      anyCategoryHasRedDots() {
        for (const zz in this.info)
          if (this.categoryHasRedDot(zz)) return !0;
        return !1
      }
      doesCategoryExist(zz) {
        return !(0, yu.F)(this.info[zz])
      }
      categoryHasRedDot(zz) {
        return !0 === this.info[zz].redDot
      }
      updateCategoryRedDot(zz, uz) {
        this.info[zz].redDot = uz
      }
      doesItemExist(zz, uz) {
        return this.doesCategoryExist(zz) && !(0, yu.F)(this.info[zz].items[uz])
      }
      itemHasRedDot(zz, uz) {
        return !0 === this.info[zz].items[uz].redDot
      }
      updateItemRedDot(zz, uz, bz) {
        this.info[zz].items[uz].redDot = bz
      }
      shallowCopy() {
        return new Wn(this.info)
      }
    }

    function en(zz, uz) {
      return `${zz}\x1f${uz}`
    }

    function jn(zz, uz) {
      return !(0, yu.F)(uz) && !(0, yu.F)(zz) && uz in zz
    }
    const In = (0, Ez.memo)((function(zz) {
      var uz, bz;
      let {
        show: nz
      } = zz;
      const lz = (0, Bb.e)("players", ui),
        Mz = (0, Bb.e)("players", bi),
        [Hz, dz] = (0, Ez.useState)({
          shopInfo: {},
          userInputsPerItem: {},
          redDotInfo: Wn.fromShopInfo({}),
          currencyAmounts: {},
          selectedCategoryKey: null,
          onBoughtInfo: null,
          awaitingPurchase: !1
        }),
        Fz = (0, Ez.useRef)(""),
        Rz = (0, Ez.useRef)(null),
        wz = (0, Ez.useRef)(null),
        fz = (0, Ez.useRef)(0),
        sz = (0, Ez.useRef)(void 0),
        rz = (0, Ez.useRef)(null),
        oz = (0, Ez.useRef)(Hz),
        Nz = Hz.redDotInfo.anyCategoryHasRedDots(),
        [xz, Jz] = (0, Ez.useState)(null),
        Tz = (0, Ez.useRef)(!1);
      let Lz = !1,
        Pz = 0,
        Gz = 0;
      if (Hz.currencyAmounts) {
        for (const zz in Hz.currencyAmounts) {
          var az;
          const uz = Hz.currencyAmounts[zz];
          uz.hidden || (Pz++, (null === (az = uz.subtext) || void 0 === az ? void 0 : az.length) > 0 && Gz++)
        }
        Lz = Pz + Gz > 4
      }(0, Ez.useEffect)((() => {
        Du.k.sK("showShopIconRedDot", Nz, !0)
      }), [Nz]), (0, Ez.useEffect)((() => {
        Xz.gameBridge.send("setShopOpen", nz), nz || (clearTimeout(sz.current), dz((zz => zz.awaitingPurchase ? {
          ...zz,
          awaitingPurchase: !1
        } : zz)))
      }), [nz]), (0, Ez.useEffect)((() => () => {
        Xz.gameBridge.send("setShopOpen", !1), clearTimeout(sz.current)
      }), []), (0, Ez.useEffect)((() => {
        oz.current = Hz
      }), [Hz]), (0, Ez.useEffect)((() => {
        if (null === xz) return;
        return (0, LE.e)("pointerdown", (zz => {
          const uz = zz.target;
          null !== uz && void 0 !== uz && uz.closest(".ShopItem") || Jz(null)
        }))
      }), [xz]);
      const Vz = zz => {
          dz((uz => ({
            ...uz,
            ...zz
          })))
        },
        mz = zz => {
          var uz;
          clearTimeout(null === (uz = Hz.onBoughtInfo) || void 0 === uz ? void 0 : uz.timeout);
          const bz = setTimeout((() => {
            Vz({
              onBoughtInfo: null
            })
          }), 3e3);
          Fz.current = zz, Vz({
            onBoughtInfo: {
              text: zz,
              timeout: bz,
              categoryKey: Rz.current
            }
          })
        },
        qz = zz => {
          const {
            shopInfo: uz,
            userInputsPerItem: bz,
            redDotInfo: Ez,
            autoSelectCategory: iz
          } = function(zz, uz, bz, Ez, nz, iz) {
            if ((0, yu.F)(zz) || 0 === Object.keys(zz).length) return {
              shopInfo: {},
              userInputsPerItem: {},
              redDotInfo: Wn.fromShopInfo({}),
              autoSelectCategory: null
            };
            const lz = Az.r[Az.x].adConfig.showRewardedAds,
              Mz = {};
            let tz = null;
            for (const Kz in zz) {
              const uz = zz[Kz],
                bz = {};
              let Ez = !1;
              for (const zz in uz.items) {
                const nz = uz.items[zz];
                (0, rE.j)(nz, lz) && (bz[zz] = nz, Ez = !0)
              }
              Ez && (Mz[Kz] = {
                ...uz,
                items: bz
              }, !0 === uz.autoSelectCategory && (tz = Kz))
            }
            const Hz = {},
              Oz = (zz, uz, Ez, lz) => {
                var Mz, tz;
                const Oz = en(zz, uz),
                  pz = null !== (Mz = bz[Oz]) && void 0 !== Mz ? Mz : bz[uz];
                if (null !== (tz = lz.userInput) && void 0 !== tz && tz.type) switch (lz.userInput.type) {
                  case "dropdown": {
                    var dz;
                    const zz = !pz || !lz.userInput.dropdownOptions.some((zz => (0, rE.e)(zz) === pz)),
                      uz = lz.userInput.shouldResetSelectionOnOptionsChange && ("dropdown" !== (null === Ez || void 0 === Ez || null === (dz = Ez.userInput) || void 0 === dz ? void 0 : dz.type) || JSON.stringify(Ez.userInput.dropdownOptions) !== JSON.stringify(lz.userInput.dropdownOptions)),
                      bz = lz.userInput,
                      nz = !(0, yu.F)(bz.initialValue) && bz.dropdownOptions.some((zz => (0, rE.e)(zz) === bz.initialValue));
                    var Fz;
                    return void(zz || uz ? nz ? Hz[Oz] = null !== (Fz = lz.userInput.initialValue) && void 0 !== Fz ? Fz : null : lz.userInput.dropdownOptions.length > 0 ? Hz[Oz] = (0, rE.e)(lz.userInput.dropdownOptions[0]) : Hz[Oz] = null : Hz[Oz] = pz)
                  }
                  case "text":
                  case "number":
                    var Zz, Rz, Kz;
                    return void((null === Ez || void 0 === Ez ? void 0 : Ez.userInput) !== lz.userInput ? Hz[Oz] = null !== (Zz = null !== (Rz = lz.userInput.initialValue) && void 0 !== Rz ? Rz : pz) && void 0 !== Zz ? Zz : "" : Hz[Oz] = null !== (Kz = null !== pz && void 0 !== pz ? pz : lz.userInput.initialValue) && void 0 !== Kz ? Kz : "");
                  case "color":
                    var wz, Xz, fz;
                    return void((null === Ez || void 0 === Ez ? void 0 : Ez.userInput) !== lz.userInput ? Hz[Oz] = null !== (wz = null !== (Xz = lz.userInput.initialValue) && void 0 !== Xz ? Xz : pz) && void 0 !== wz ? wz : "#000000" : Hz[Oz] = null !== (fz = null !== pz && void 0 !== pz ? pz : lz.userInput.initialValue) && void 0 !== fz ? fz : "#000000");
                  case "player": {
                    const zz = (0, rE.f)(nz, iz, lz.userInput);
                    return void(pz && zz.includes(pz) ? Hz[Oz] = pz : Hz[Oz] = zz.length > 0 ? zz[0] : null)
                  }
                }
              };
            for (const Kz in Mz)
              for (const zz in Mz[Kz].items) {
                var pz;
                const bz = Mz[Kz].items[zz];
                Oz(Kz, zz, null === (pz = uz[Kz]) || void 0 === pz ? void 0 : pz.items[zz], bz)
              }
            const dz = Wn.fromShopInfo(Mz);
            for (const Kz in Mz) {
              var Fz;
              if (Ez.doesCategoryExist(Kz)) {
                (null === (Fz = uz[Kz]) || void 0 === Fz ? void 0 : Fz.redDot) === Mz[Kz].redDot && dz.updateCategoryRedDot(Kz, Ez.categoryHasRedDot(Kz));
                for (const zz in Mz[Kz].items) {
                  var Zz, Rz;
                  Ez.doesItemExist(Kz, zz) && (null === (Zz = uz[Kz]) || void 0 === Zz || null === (Rz = Zz.items[zz]) || void 0 === Rz ? void 0 : Rz.redDot) === Mz[Kz].items[zz].redDot && dz.updateItemRedDot(Kz, zz, Ez.itemHasRedDot(Kz, zz))
                }
              }
            }
            return {
              shopInfo: Mz,
              userInputsPerItem: Hz,
              redDotInfo: dz,
              autoSelectCategory: tz
            }
          }(zz, Hz.shopInfo, Hz.userInputsPerItem, Hz.redDotInfo, lz, Mz), tz = {
            shopInfo: uz,
            userInputsPerItem: bz,
            redDotInfo: Ez
          };
          if (null === iz || nz)
            if (uz[Hz.selectedCategoryKey]) tz.selectedCategoryKey = Hz.selectedCategoryKey;
            else {
              const zz = GE(uz);
              tz.selectedCategoryKey = zz.length > 0 ? zz[0] : null
            }
          else tz.selectedCategoryKey = iz;
          return 0 === Object.keys(uz).length && nz && vz.e.set({
            openEverythingMenuName: null
          }), tz
        },
        hz = (zz, uz, bz) => {
          const Ez = Hz.selectedCategoryKey,
            nz = en(Ez, zz),
            iz = null !== bz && void 0 !== bz ? bz : Hz.userInputsPerItem[nz],
            lz = {
              categoryKey: Ez,
              itemKey: zz,
              userInput: iz
            };
          if (Rz.current = Ez, uz.isRewardedAd) {
            if (Date.now() - fz.current < 5e3) return;
            (0, iu.Y)((() => {
              var bz, Ez, iz;
              console.log("bought rewarded ad");
              const Mz = lz.categoryKey ? null === (bz = oz.current.shopInfo[lz.categoryKey]) || void 0 === bz ? void 0 : bz.items[zz] : null;
              if (!Mz || !Mz.isRewardedAd) return void console.warn("Shop item no longer valid or a rewarded ad, early out");
              (null === (Ez = uz.userInput) || void 0 === Ez ? void 0 : Ez.type) === (null === Mz || void 0 === Mz || null === (iz = Mz.userInput) || void 0 === iz ? void 0 : iz.type) ? (lz.userInput = oz.current.userInputsPerItem[nz], Xz.gameBridge.send("buyShopItem", lz), uz.onBoughtMessage && mz(uz.onBoughtMessage)) : console.warn("Shop item input type changed, early out")
            })), fz.current = Date.now()
          } else {
            Xz.gameBridge.send("buyShopItem", lz), Vz({
              awaitingPurchase: !0
            }), clearTimeout(sz.current), sz.current = setTimeout((() => {
              rz.current = null, Vz({
                awaitingPurchase: !1
              })
            }), 1e3);
            const zz = (0, rE.b)(uz, iz);
            if (rz.current = null, !isNaN(zz) && jn(Hz.currencyAmounts, uz.currency)) {
              0 !== zz && (rz.current = {
                currency: uz.currency,
                amountBefore: Hz.currencyAmounts[uz.currency].amount
              });
              const bz = {
                ...Hz.currencyAmounts
              };
              bz[uz.currency].amount -= zz, Vz({
                currencyAmounts: bz
              })
            }
            uz.onBoughtMessage && mz(uz.onBoughtMessage)
          }
        },
        cz = (zz, uz) => {
          if (null === uz || !zz.shopInfo[uz]) return zz;
          let bz = zz.redDotInfo;
          return bz.categoryHasRedDot(uz) && (bz.updateCategoryRedDot(uz, !1), bz = bz.shallowCopy()), {
            ...zz,
            selectedCategoryKey: uz,
            redDotInfo: bz
          }
        },
        gz = zz => {
          dz((uz => cz(uz, zz)))
        };
      (0, Au.g)(PE.l, (() => {
        dz((zz => {
          const uz = (0, PE.p)(GE(zz.shopInfo), zz.selectedCategoryKey, (uz => (0, PE.j)(zz.shopInfo[uz].items)));
          return uz === zz.selectedCategoryKey ? zz : cz(zz, uz)
        }))
      })), (0, Au.g)("showShopFromServer", (zz => {
        let {
          toggle: uz,
          Ku: bz
        } = zz;
        bz && gz(bz), 0 === Object.keys(Hz.shopInfo).length || uz && nz ? vz.e.set({
          openEverythingMenuName: null
        }) : vz.e.set({
          openEverythingMenuName: Hu.r.SHOP
        })
      })), (0, Au.g)("closeShopOnDamaged", (() => {
        nz && vz.e.set({
          openEverythingMenuName: null
        })
      })), (0, Au.g)("overShopInfo", (zz => {
        mz(zz)
      })), (0, Zz.f)("currencyAmounts", (zz => {
        var uz;
        const bz = rz.current;
        bz && (null === zz || void 0 === zz || null === (uz = zz[bz.currency]) || void 0 === uz ? void 0 : uz.amount) === bz.amountBefore ? Vz({
          currencyAmounts: zz
        }) : (rz.current = null, Vz({
          currencyAmounts: zz,
          awaitingPurchase: !1
        }))
      })), (0, Zz.f)("shopInfo", (zz => {
        Vz({
          ...qz(zz),
          awaitingPurchase: !1
        })
      }));
      const Sz = (0, Ez.useRef)({
        playerIds: lz,
        localPlayerId: Mz
      });
      (0, Ez.useEffect)((() => {
        Sz.current.playerIds === lz && Sz.current.localPlayerId === Mz || (Sz.current = {
          playerIds: lz,
          localPlayerId: Mz
        }, dz((zz => {
          const uz = qz(zz.shopInfo);
          return {
            ...zz,
            ...uz
          }
        })))
      }), [lz, Mz]);
      const yz = Hz.selectedCategoryKey,
        Dz = (zz, uz) => {
          var bz, Ez;
          return (isNaN(uz) || (0, yu.F)(zz.currency) || jn(Hz.currencyAmounts, zz.currency) && uz <= Hz.currencyAmounts[zz.currency].amount) && (null === (bz = zz.canBuy) || void 0 === bz || bz) && !(null !== (Ez = zz.hidden) && void 0 !== Ez && Ez)
        },
        Qz = (zz, uz) => {
          var bz, Ez, nz;
          const lz = en(yz, zz),
            Mz = Hz.shopInfo[yz].items[zz],
            pz = Hz.userInputsPerItem[lz],
            dz = (0, rE.b)(Mz, pz),
            Fz = Dz(Mz, dz),
            Zz = Mz.enchant,
            Rz = Zz ? (0, Uz.vb)(null !== (bz = Mz.customTitle) && void 0 !== bz ? bz : zz, {
              colour: Uz.rb[Zz.tier]
            }) : null !== (Ez = Mz.customTitle) && void 0 !== Ez ? Ez : zz,
            wz = uz => {
              const bz = null !== uz && void 0 !== uz ? uz : pz,
                Ez = void 0 !== uz ? (0, rE.b)(Mz, uz) : dz;
              Dz(Mz, Ez) && null !== bz && hz(zz, Mz, uz);
              let nz = Hz.redDotInfo;
              nz.itemHasRedDot(yz, zz) && (nz.updateItemRedDot(yz, zz, !1), nz = nz.shallowCopy()), Vz({
                redDotInfo: nz
              })
            };
          return (0, Oz.jsxs)("div", {
            className: iz()("ShopItem", {
              ShopItemNoInput: !Mz.userInput,
              ShopItemNoInputCanBuy: !Mz.userInput && Fz,
              ShopItemNoInputSelected: Mz.isSelected,
              ShopItemEnchant: !!Zz
            }),
            "data-pad-focusable": !Mz.userInput || void 0,
            "data-pad-unavailable": !Mz.userInput && !Fz || void 0,
            "data-pad-repeat": null !== (nz = (0, PE.e)(Mz)) && void 0 !== nz ? nz : void 0,
            "data-pad-repeat-wait": Hz.awaitingPurchase || void 0,
            onClick: () => {
              if (Zz && Tz.current) {
                if (xz !== lz) return void Jz(lz);
                Jz(null)
              }
              Mz.userInput || wz()
            },
            onPointerDown: zz => {
              Zz && (Tz.current = (0, NE.q)(zz))
            },
            onPointerEnter: zz => {
              Zz && !(0, NE.q)(zz) && Jz(lz)
            },
            onPointerLeave: zz => {
              Zz && !(0, NE.q)(zz) && Jz((zz => zz === lz ? null : zz))
            },
            style: {
              zIndex: Object.keys(Hz.shopInfo[yz].items).length - uz
            },
            children: [Hz.redDotInfo.itemHasRedDot(yz, zz) && (0, Oz.jsx)(tz.b, {
              top: "-6px",
              right: "-6px"
            }), Mz.badge && (0, Oz.jsx)("div", {
              className: "ShopBadgeContainer",
              children: (0, Oz.jsx)("div", {
                className: iz()("ShopBadgeMain", Mz.badge.type),
                children: (0, Oz.jsx)(xE.b, {
                  text: Mz.badge.text
                })
              })
            }), (0, Oz.jsx)("div", {
              className: "ShopItemLeft",
              children: Mz.image && (0, Oz.jsx)(Bn, {
                item: Mz,
                minWidth: 5,
                minHeight: 4.8
              })
            }), (0, Oz.jsxs)("div", {
              className: "ShopItemRight",
              children: [(0, Oz.jsxs)("div", {
                className: "ShopItemHeader",
                children: [(0, Oz.jsx)("div", {
                  className: "ShopItemHeaderTitle",
                  children: (0, Oz.jsx)(xE.b, {
                    text: Rz
                  })
                }), (0, Oz.jsx)("div", {
                  className: "ShopItemHeaderDescription",
                  children: (0, Oz.jsx)(xE.b, {
                    text: Mz.description
                  })
                })]
              }), Mz.userInput && (0, Oz.jsxs)("div", {
                className: "ShopItemInputsContainer",
                onClick: zz => {
                  zz.stopPropagation()
                },
                children: [(0, Oz.jsx)(kn, {
                  item: Mz,
                  currInput: pz,
                  updateInput: uz => {
                    ((zz, uz, bz) => {
                      const Ez = en(zz, uz),
                        nz = {
                          ...Hz.userInputsPerItem
                        };
                      nz[Ez] = bz, Vz({
                        userInputsPerItem: nz
                      })
                    })(yz, zz, uz)
                  },
                  onSubmit: zz => {
                    wz(zz)
                  }
                }), ("dropdown" !== Mz.userInput.type || !Mz.userInput.autoSubmit) && (0, Oz.jsx)(Kz.f, {
                  className: "ItemCostButton",
                  disabled: !Fz && null !== pz,
                  onClick: () => {
                    wz()
                  },
                  children: (0, Oz.jsx)(Yn, {
                    item: Mz,
                    cost: dz,
                    currencyAmounts: Hz.currencyAmounts
                  })
                })]
              })]
            }), !Mz.userInput && (0, Oz.jsx)("div", {
              className: "ShopItemNoInputCost",
              children: (0, Oz.jsx)(Yn, {
                item: Mz,
                cost: dz,
                currencyAmounts: Hz.currencyAmounts
              })
            }), Zz && xz === lz && (0, Oz.jsxs)("div", {
              className: "ShopItemEnchantInfo SmallTextBold",
              children: [(0, Oz.jsx)(xE.b, {
                text: Rz
              }), (0, Oz.jsx)("div", {
                className: "ShopItemEnchantInfoDescription",
                children: (0, Oz.jsx)(xE.b, {
                  text: (0, oE.c)("", Zz.enchantments, Zz.enchantmentData)
                })
              })]
            })]
          }, lz)
        },
        Wz = function(zz) {
          for (const uz in zz)
            if (zz[uz].smp) return !0;
          return !1
        }(Hz.shopInfo),
        ez = CE(Hz.shopInfo, yz);
      return (0, Oz.jsx)(XE.e, {
        className: "Menu ShopBody",
        show: nz,
        children: 0 !== Object.keys(Hz.shopInfo).length && (0, Oz.jsxs)(Oz.Fragment, {
          children: [(0, Oz.jsxs)("div", {
            className: "MenuSideBar",
            children: [(0, Oz.jsx)(pz, {
              items: GE(Hz.shopInfo).map((zz => {
                var uz;
                return {
                  id: zz,
                  title: null !== (uz = Hz.shopInfo[zz].customTitle) && void 0 !== uz ? uz : zz,
                  redDot: Hz.redDotInfo.categoryHasRedDot(zz)
                }
              })),
              selectedItemId: yz,
              onClick: gz,
              padStartsOnTab: (0, PE.i)(yz)
            }), (0, Oz.jsx)("div", {
              className: "MenuSideBarFooter",
              children: Hz.currencyAmounts && Object.keys(Hz.currencyAmounts).map((zz => {
                var uz;
                const bz = Hz.currencyAmounts[zz];
                return bz.hidden ? null : (0, Oz.jsxs)("div", {
                  className: "ShopCurrencyDiv " + (Lz ? "SmallText" : ""),
                  children: [(0, Oz.jsxs)("div", {
                    className: "ShopCurrencyDetails",
                    children: [(0, Oz.jsx)("div", {
                      className: "ShopCurrencyAmtIcon",
                      style: {
                        color: bz.iconColour
                      },
                      children: (0, Oz.jsx)(Ei, {
                        iconName: bz.icon
                      })
                    }), "\xa0", (0, sE.b)(bz.amount, 6)]
                  }), (null === (uz = bz.subtext) || void 0 === uz ? void 0 : uz.length) > 0 && (0, Oz.jsx)("div", {
                    className: "ShopCurrencySubtext",
                    children: (0, Oz.jsx)(xE.b, {
                      text: bz.subtext
                    })
                  })]
                }, zz)
              }))
            })]
          }), (0, Oz.jsxs)("div", {
            className: "MenuBody ShopMenuBody",
            children: [Wz && (0, Oz.jsx)(Qn, {
              show: nz,
              shopInfo: Hz.shopInfo,
              selectedCategoryKey: yz,
              buy: (zz, uz, bz) => {
                hz(zz, uz, bz)
              },
              canAfford: Dz,
              message: Hz.onBoughtInfo
            }), null === ez && (0, Oz.jsxs)(Oz.Fragment, {
              children: [(0, Oz.jsx)("div", {
                className: iz()("ShopOnBoughtInfo", {
                  ShopOnBoughtInfoShow: null !== Hz.onBoughtInfo
                }),
                children: (0, Oz.jsx)(xE.b, {
                  text: Fz.current
                })
              }), (0, Oz.jsx)("div", {
                className: "ShopItemsWrapper",
                children: (0, Oz.jsxs)("div", {
                  className: "ShopItemsInner",
                  children: [(null === (uz = Hz.shopInfo[yz]) || void 0 === uz ? void 0 : uz.description) && (0, Oz.jsx)("div", {
                    className: "ShopCategoryDescription",
                    children: (0, Oz.jsx)(xE.b, {
                      text: Hz.shopInfo[yz].description
                    })
                  }), nz && (0, Oz.jsx)("div", {
                    className: "ShopItems",
                    ref: wz,
                    "data-pad-initial-area": !0,
                    children: GE(null === (bz = Hz.shopInfo[yz]) || void 0 === bz ? void 0 : bz.items).map(((zz, uz) => Qz(zz, uz)))
                  })]
                })
              })]
            })]
          })]
        })
      })
    }));

    function Bn(zz) {
      let {
        item: uz,
        minWidth: bz,
        minHeight: Ez
      } = zz;
      const {
        image: nz,
        schematicId: iz,
        imageColour: lz
      } = uz;
      if (iz) return (0, Oz.jsx)("div", {
        className: "ShopSchematic",
        style: {
          width: `${bz}rem`,
          height: `${Ez}rem`
        },
        children: (0, Oz.jsx)(JE.b, {
          game: {
            schematicId: iz
          }
        })
      });
      var tz, Hz;
      if ((0, vE.d)(nz)) return (0, Oz.jsx)("div", {
        className: "ShopBlock",
        style: {
          minWidth: `${bz}rem`,
          height: "0",
          minHeight: `${Ez}rem`
        },
        children: (0, Oz.jsx)(vE.c, {
          itemName: nz,
          amount: null !== (tz = uz.amount) && void 0 !== tz ? tz : 0,
          amountFontSize: Ez / 4 + "rem",
          enchantmentTier: null === (Hz = uz.enchant) || void 0 === Hz ? void 0 : Hz.tier
        })
      });
      const pz = nz.slice(-4);
      return ".jpg" === pz || ".png" === pz ? (0, Oz.jsx)(Cn, {
        image: nz,
        minWidth: bz
      }) : (0, Oz.jsx)(Mz.c, {
        name: nz,
        className: "SelectedItemImage",
        style: {
          color: lz
        }
      })
    }

    function Cn(zz) {
      let {
        image: uz,
        minWidth: bz
      } = zz;
      const {
        gameNameWithVariation: Ez
      } = (0, Bb.h)("connectedGame"), nz = uz.endsWith(".jpg");
      return (0, Oz.jsx)("img", {
        className: iz()({
          ShopPixelImage: !nz
        }),
        style: {
          width: `${nz?1.6*bz:bz}rem`,
          height: "auto",
          fontSize: "1.25rem"
        },
        src: `/textures/games/${(0,Uz.Sb)(Ez)}/${uz}`,
        alt: uz,
        draggable: !1
      })
    }

    function Yn(zz) {
      let {
        item: uz,
        cost: bz,
        currencyAmounts: Ez
      } = zz;
      const nz = !isNaN(bz) && 0 !== bz && jn(Ez, uz.currency);
      let iz = null;
      return uz.buyButtonText ? iz = uz.buyButtonText : nz ? (iz = bz, uz.sell && (iz = -1 * bz), iz = iz.toString()) : 0 === bz ? iz = "Free" : uz.isRewardedAd && (iz = "Watch ad"), (0, yu.F)(iz) || " " === iz ? null : (0, Oz.jsxs)("div", {
        className: "BuyItemCostAndIcon",
        children: [nz && (0, Oz.jsx)("div", {
          style: {
            color: Ez[uz.currency].iconColour
          },
          className: "BuyItemIcon",
          children: (0, Oz.jsx)(Ei, {
            iconName: Ez[uz.currency].icon
          })
        }), (0, Oz.jsx)("div", {
          className: "BuyItemCost",
          children: (0, Oz.jsx)(xE.b, {
            text: iz
          })
        })]
      })
    }

    function kn(zz) {
      let {
        item: uz,
        currInput: bz,
        updateInput: nz,
        onSubmit: iz
      } = zz;
      const {
        t: Mz
      } = (0, lz.F)(), tz = (0, Ez.useRef)(null);
      if ((0, Ez.useEffect)((() => {
          const zz = tz.current;
          zz && zz.value !== bz && document.activeElement !== zz && (zz.value = null !== bz && void 0 !== bz ? bz : "")
        }), [bz]), !uz.userInput) return null;
      let Hz = uz.userInput;
      if (wz.featureFlags.sanitizeShopInput && "text" === uz.userInput.type && (Hz = {
          type: "number",
          placeholderText: "Numbers Only"
        }), "text" === Hz.type || "number" === Hz.type) {
        var pz, dz;
        console.assert(void 0 !== bz, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(uz)}`);
        const zz = "text" === Hz.type && Hz.wordCharsOnly;
        return (0, Oz.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputTextWrapper",
          children: (0, Oz.jsx)(rz.d, {
            className: "ShopItemUserInputText",
            placeholderText: Mz(Hz.placeholderText),
            defaultValue: bz,
            domRef: tz,
            onValueChange: (uz, bz) => {
              !0 === zz && (uz = (0, TE.ob)(uz)), tz.current.value = uz, nz(uz)
            },
            onEnter: iz,
            type: Hz.type
          }, (null !== (pz = Hz.initialValue) && void 0 !== pz ? pz : "") + (null !== (dz = Hz.placeholderText) && void 0 !== dz ? dz : ""))
        })
      }
      if ("dropdown" === Hz.type) {
        console.assert(void 0 !== bz, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(uz)}`);
        const zz = Hz.autoSubmit;
        return (0, Oz.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputDropdown",
          children: (0, Oz.jsx)(ru.d, {
            options: Hz.dropdownOptions.map((zz => (0, rE.e)(zz))),
            value: bz,
            onChange: uz => {
              let {
                value: bz
              } = uz;
              nz(bz), zz && iz(bz)
            }
          })
        })
      }
      return "player" === Hz.type ? (0, Oz.jsx)(zi, {
        userInput: Hz,
        currInput: bz,
        updateInput: nz
      }) : "color" === Hz.type ? (0, Oz.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputColor",
        children: (0, Oz.jsx)("input", {
          type: "color",
          value: bz,
          onChange: zz => {
            nz(zz.target.value)
          }
        })
      }) : null
    }

    function zi(zz) {
      let {
        userInput: uz,
        currInput: bz,
        updateInput: Ez
      } = zz;
      const nz = (0, Bb.h)("players"),
        iz = (0, Bb.h)("hiddenPlayerNames"),
        lz = (0, rE.f)(nz.ids, nz.localId, uz);
      return (0, Oz.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputDropdown",
        children: (0, Oz.jsx)(ru.d, {
          options: lz.map((zz => {
            const {
              name: uz
            } = nz.byId[zz];
            return {
              value: zz,
              label: null === uz ? "" : (0, AE.c)(uz, iz)
            }
          })),
          value: bz,
          onChange: zz => {
            let {
              value: uz
            } = zz;
            Ez(uz)
          }
        })
      })
    }

    function ui(zz) {
      let {
        ids: uz
      } = zz;
      return uz
    }

    function bi(zz) {
      let {
        localId: uz
      } = zz;
      return uz
    }

    function Ei(zz) {
      let {
        iconName: uz
      } = zz;
      return Xz.gameBridge.lookup("isItemName", uz) ? (0, Oz.jsx)(vE.c, {
        itemName: uz,
        amount: 1
      }) : (0, Oz.jsx)(Mz.c, {
        name: uz,
        className: "2x"
      })
    }
    var ni = bz(1595);
    const ii = (0, bz(1377).j)((zz => zz.PadLobbyShortcuts)),
      li = (0, Ez.lazy)((() => Promise.resolve().then((() => bz(4407))).then((zz => ({
        default: zz.Lobbyleaderboard
      })))));

    function Mi(zz) {
      let {
        show: uz
      } = zz;
      return uz ? (0, Oz.jsxs)(Oz.Fragment, {
        children: [(0, Oz.jsx)(ii, {}), (0, Oz.jsx)(Ez.Suspense, {
          fallback: (0, Oz.jsx)("div", {
            className: "CharacterCustomisationLoading",
            children: (0, Oz.jsx)(oz.c, {})
          }),
          children: (0, Oz.jsx)(li, {})
        })]
      }) : null
    }
    var ti = bz(1527),
      Hi = bz(2773),
      Oi = bz(1673),
      di = bz(2837),
      Fi = bz(2530),
      Zi = bz(1468),
      Ri = bz(1424),
      Ki = bz(2754),
      wi = bz(2765),
      Xi = bz(2235);
    const fi = "storeRecentGiftRecipients",
      si = new Map;

    function ri() {
      try {
        const zz = Wu.g.getItem(fi);
        return Array.isArray(zz) ? zz.filter((zz => "string" === typeof(null === zz || void 0 === zz ? void 0 : zz.name) && zz.name.length > 0)).map((zz => ({
          name: zz.name,
          cosmetics: zz.cosmetics && "object" === typeof zz.cosmetics ? zz.cosmetics : null
        }))) : []
      } catch {
        return []
      }
    }

    function oi(zz) {
      var uz;
      const [bz, nz] = (0, Ez.useState)(""), [iz, lz] = (0, Ez.useState)("search"), [Mz, tz] = (0, Ez.useState)(null), [Hz, Oz] = (0, Ez.useState)(null), pz = (0, Ez.useRef)(null), dz = (0, Ez.useRef)(null);
      (0, Ez.useEffect)((() => () => {
        pz.current && clearTimeout(pz.current)
      }), []);
      const Fz = null !== (uz = null === Mz || void 0 === Mz ? void 0 : Mz.name) && void 0 !== uz ? uz : null;

      function Zz() {
        pz.current && (clearTimeout(pz.current), pz.current = null)
      }(0, Ez.useEffect)((() => {
        if (null === Fz || zz === Tz.NULL_USER_CONTEXT) return;
        const uz = Fz.toLowerCase();
        if (uz === zz.getPlayerName().toLowerCase()) return void Oz({
          name: Fz,
          result: {
            giftRecipientFound: !1,
            giftRecipientError: "store:giftRecipientIsYou"
          }
        });
        const bz = si.get(uz);
        if (bz) return void Oz({
          name: Fz,
          result: bz
        });
        let Ez = !1;
        return async function(zz, uz) {
          try {
            const bz = await (0, Tz.postJsonWithMetricsCookiesAndJsonResponse)(`${Lz.clientSideServerUrls.indexUrl}/index/store/gift-recipient`, {
              giftRecipientName: uz
            }, {
              retries: 1
            }, zz.getMetricsCookies());
            if ("boolean" !== typeof(null === bz || void 0 === bz ? void 0 : bz.giftRecipientFound)) throw new Error(`Unexpected gift recipient lookup response: ${JSON.stringify(bz)}`);
            return bz
          } catch (bz) {
            return console.error("Failed to look up gift recipient:", bz), {
              giftRecipientFound: !1,
              giftRecipientError: "store:giftRecipientLookupFailed"
            }
          }
        }(zz, Fz).catch((zz => (console.error("Gift recipient lookup failed:", zz), {
          giftRecipientFound: !1,
          giftRecipientError: "store:giftRecipientLookupFailed"
        }))).then((zz => {
          !0 !== zz.giftRecipientFound && "store:giftRecipientLookupFailed" === zz.giftRecipientError || si.set(uz, zz), Ez || Oz({
            name: Fz,
            result: zz
          })
        })), () => {
          Ez = !0
        }
      }), [Fz, zz]);
      const Rz = (0, Ez.useMemo)((() => {
        const zz = bz.trim();
        if (!zz) return {
          status: "none"
        };
        if (!Mz || Mz.name !== zz || (null === Hz || void 0 === Hz ? void 0 : Hz.name) !== Mz.name) return {
          status: "pending",
          name: zz
        };
        const uz = Hz.result;
        return !1 === uz.giftRecipientFound ? {
          status: "error",
          name: Mz.name,
          error: uz.giftRecipientError
        } : {
          status: "found",
          name: uz.giftRecipientName,
          ownedPacks: uz.giftRecipientOwnedPacks,
          hasSuperRank: uz.giftRecipientHasSuperRank,
          isSubscriber: uz.giftRecipientIsSubscriber
        }
      }), [bz, Mz, Hz]);
      (0, Ez.useEffect)((() => {
        "found" === Rz.status && "typed" === (null === Mz || void 0 === Mz ? void 0 : Mz.source) && dz.current !== Rz.name && (dz.current = Rz.name, (0, Yz.reportAnalyticsClick)({
          id: "store.gift_recipient",
          value: "typed"
        }))
      }), [Rz, Mz]);
      const Kz = (null === Hz || void 0 === Hz ? void 0 : Hz.name) === (null === Mz || void 0 === Mz ? void 0 : Mz.name) ? null === Hz || void 0 === Hz ? void 0 : Hz.result : null,
        wz = !0 === (null === Kz || void 0 === Kz ? void 0 : Kz.giftRecipientFound) ? Kz.giftRecipientCosmetics : null;
      return {
        query: bz,
        via: iz,
        recipient: Rz,
        recipientCosmetics: wz,
        type: function(zz) {
          nz(zz), lz("search"), Zz();
          const uz = zz.trim();
          uz ? pz.current = setTimeout((() => {
            tz({
              name: uz,
              source: "typed"
            })
          }), 400) : tz(null)
        },
        choose: function(zz, uz) {
          Zz(), nz(zz), lz("typed" === uz ? "search" : "prefilled" === uz ? "prefilled" : "suggestion"), tz({
            name: zz,
            source: uz
          }), "typed" !== uz && "prefilled" !== uz && (0, Yz.reportAnalyticsClick)({
            id: "store.gift_recipient",
            value: uz
          })
        },
        clear: function() {
          Zz(), nz(""), lz("search"), tz(null)
        },
        recordGift: function(zz, uz) {
          ! function(zz) {
            si.delete(zz.toLowerCase())
          }(zz), Oz((bz => {
            if (!bz || bz.name.toLowerCase() !== zz.toLowerCase() || !0 !== bz.result.giftRecipientFound || "superRank" === uz) return bz;
            const Ez = bz.result.giftRecipientOwnedPacks;
            return {
              ...bz,
              result: {
                ...bz.result,
                giftRecipientOwnedPacks: Ez.includes(uz) ? Ez : [...Ez, uz]
              }
            }
          }))
        }
      }
    }
    var Ni = bz(2227),
      vi = bz(4410),
      xi = bz(262),
      Ji = bz(2866);
    const Ai = ["pointerdown", "pointermove", "keydown", "wheel", "touchstart", "scroll", "blur", "focus"];
    var Ti = bz(2175),
      Li = bz(577),
      Pi = bz(2261),
      Gi = bz(2455);

    function ai(zz) {
      let {
        cosmetics: uz
      } = zz;
      return (0, Oz.jsx)("span", {
        className: "StoreRecipientAvatar",
        children: (0, Oz.jsx)(Pi.e, {
          cosmetics: uz
        })
      })
    }

    function Vi(zz, uz) {
      var bz, Ez;
      const nz = null !== (bz = zz.friend) && void 0 !== bz ? bz : {
        isError: !1,
        name: zz.name,
        ranks: [],
        cosmetics: null !== (Ez = zz.cosmetics) && void 0 !== Ez ? Ez : {},
        nameColour: Li.b,
        location: {
          status: "noGamePlayed"
        }
      };
      return uz ? {
        ...nz,
        cosmetics: uz
      } : nz
    }

    function mi(zz) {
      let {
        recipient: uz
      } = zz;
      return "pending" === uz.status ? (0, Oz.jsx)("span", {
        className: "StoreRecipientStatus",
        children: (0, Oz.jsx)(oz.c, {})
      }) : "found" === uz.status ? (0, Oz.jsx)(Mz.c, {
        name: "check",
        className: "StoreRecipientStatus StoreRecipientStatusFound"
      }) : null
    }

    function qi(zz) {
      var uz;
      let {
        selfName: bz,
        giftRecipient: nz,
        suggestionsVersion: tz,
        pulseSignal: Hz,
        disabled: pz
      } = zz;
      const {
        t: dz
      } = (0, lz.F)(), Fz = (0, yz.l)(), Zz = (0, Ez.useRef)(null), Rz = (0, Ez.useRef)(null), {
        query: Xz,
        via: fz,
        recipient: sz,
        recipientCosmetics: oz
      } = nz, Nz = (0, Xi.l)(Xz), vz = (0, Ez.useMemo)((() => {
        const zz = wz.featureFlags.useSocialFeatures ? Fz.friends.filter((zz => !zz.isError)) : [];
        return (0, Xi.i)({
          onlineFriends: (0, yz.e)(zz),
          recentRecipients: ri(),
          friends: zz,
          selfName: bz,
          max: 8
        })
      }), [Fz.friends, bz, tz]), xz = Xz.trim().toLowerCase(), Jz = "search" !== fz && xz ? vz.find((zz => zz.name.toLowerCase() === xz)) : void 0, Az = Jz && "prefilled" === fz ? [Jz, ...vz.filter((zz => zz !== Jz))] : vz, Tz = "" !== xz && !Jz, Lz = Tz ? Xz : "", Pz = Az.length > 0;
      (0, Ez.useEffect)((() => {
        Zz.current && Zz.current.value !== Lz && (Zz.current.value = Lz)
      }), [Lz]), (0, Ez.useEffect)((() => {
        Zz.current && (Zz.current.disabled = pz)
      }), [pz, Hz]);
      const Gz = (0, Ez.useRef)(0);

      function Vz() {
        "self" !== Nz && (0, Yz.reportAnalyticsClick)({
          id: "store.mode",
          value: "self"
        }), nz.clear()
      }

      function mz(zz) {
        var uz, bz;
        if (pz) return;
        if (" " === zz.key || "Enter" === zz.key) return zz.preventDefault(), void zz.currentTarget.click();
        const Ez = Array.from(null !== (uz = null === (bz = Rz.current) || void 0 === bz ? void 0 : bz.querySelectorAll("[role=radio]")) && void 0 !== uz ? uz : []),
          nz = Ez.indexOf(zz.currentTarget);
        let iz;
        "ArrowRight" === zz.key || "ArrowDown" === zz.key ? iz = Ez[(nz + 1) % Ez.length] : "ArrowLeft" === zz.key || "ArrowUp" === zz.key ? iz = Ez[(nz - 1 + Ez.length) % Ez.length] : "Home" === zz.key ? iz = Ez[0] : "End" === zz.key && (iz = Ez[Ez.length - 1]), iz && (zz.preventDefault(), iz.focus(), iz.click())
      }(0, Ez.useEffect)((() => {
        var zz;
        Hz > Gz.current && !pz && (Gz.current = Hz, null === (zz = Zz.current) || void 0 === zz || zz.focus())
      }), [Hz, pz]);
      const qz = "self" === Nz,
        hz = null !== (uz = null === Jz || void 0 === Jz ? void 0 : Jz.name) && void 0 !== uz ? uz : null,
        Uz = "error" === sz.status ? sz.error : null,
        cz = "store:giftRecipientLookupFailed" === Uz;
      return (0, Oz.jsxs)("div", {
        className: iz()("StoreRecipientStrip", {
          StoreRecipientStripDisabled: pz,
          StoreRecipientStripNoChips: !Pz
        }),
        children: [(0, Oz.jsx)("span", {
          className: "StoreRecipientLabel",
          "aria-hidden": !0,
          children: dz("store:buyingFor")
        }), (0, Oz.jsxs)("div", {
          ref: Rz,
          className: "StoreRecipientRadios",
          role: "radiogroup",
          "aria-label": dz("store:whoIsItFor"),
          children: [(0, Oz.jsxs)("div", {
            role: "radio",
            "data-pad-focusable": !0,
            "aria-checked": qz,
            tabIndex: pz || !qz && null !== hz ? -1 : 0,
            className: iz()("StoreRecipientMe", {
              StoreRecipientChecked: qz
            }),
            onClick: () => {
              pz || Vz()
            },
            onKeyDown: mz,
            children: [(0, Oz.jsx)(Mz.c, {
              name: "user"
            }), " ", dz("store:me")]
          }), Pz && (0, Oz.jsx)("div", {
            className: "StoreRecipientChips",
            children: Az.map((zz => {
              const uz = zz === Jz;
              return (0, Oz.jsx)("div", {
                role: "radio",
                "data-pad-focusable": !0,
                "aria-checked": uz,
                tabIndex: !pz && uz ? 0 : -1,
                title: zz.name,
                className: iz()("StoreRecipientChip", {
                  StoreRecipientChecked: uz
                }),
                onClick: () => {
                  pz || function(zz) {
                    "gift" !== Nz && (0, Yz.reportAnalyticsClick)({
                      id: "store.mode",
                      value: "gift"
                    }), nz.choose(zz.name, zz.kind)
                  }(zz)
                },
                onKeyDown: mz,
                children: (0, Oz.jsx)(Gi.i, {
                  playerSocialPreview: Vi(zz, uz ? oz : null),
                  opensProfileCard: !1,
                  isFriend: null !== zz.friend,
                  hideFriendBadge: !0,
                  showLocation: null !== zz.friend,
                  status: null === zz.friend ? null : void 0,
                  trailing: uz ? (0, Oz.jsx)(mi, {
                    recipient: sz
                  }) : void 0
                })
              }, zz.name)
            }))
          })]
        }), (0, Oz.jsxs)("div", {
          className: iz()("StoreRecipientSearch", {
            StoreRecipientChecked: Tz,
            StoreRecipientSearchPulse: Hz > 0 && !Tz,
            StoreRecipientSearchError: null !== Uz && !cz
          }),
          onClick: () => {
            var zz;
            null === (zz = Zz.current) || void 0 === zz || zz.focus()
          },
          children: [Tz && "found" === sz.status && oz && (0, Oz.jsx)(ai, {
            cosmetics: oz
          }), !(Tz && "found" === sz.status && oz) && (0, Oz.jsx)(Mz.c, {
            name: "magnifying-glass",
            className: "StoreRecipientSearchIcon"
          }), (0, Oz.jsx)(rz.d, {
            className: "StoreRecipientSearchInput",
            domRef: Zz,
            placeholderText: dz("store:searchName"),
            defaultValue: Lz,
            maxLength: az.g,
            onValueChange: function(zz) {
              "gift" !== Nz && zz.trim() && (0, Yz.reportAnalyticsClick)({
                id: "store.mode",
                value: "gift"
              }), nz.type(zz)
            },
            onEnter: () => {
              var zz;
              const uz = null === (zz = Zz.current) || void 0 === zz ? void 0 : zz.value.trim();
              uz && nz.choose(uz, "typed")
            },
            blurOnEnter: !0
          }), Tz && (0, Oz.jsx)(mi, {
            recipient: sz
          }), Tz && (0, Oz.jsx)("div", {
            ...(0, Kz.ab)({
              disabled: pz
            }),
            "aria-label": dz("store:clearRecipient"),
            title: dz("store:clearRecipient"),
            className: "StoreRecipientClear",
            onClick: zz => {
              zz.stopPropagation(), pz || Vz()
            },
            children: (0, Oz.jsx)(Mz.c, {
              name: "xmark"
            })
          })]
        }, Hz), Uz && (0, Oz.jsx)("div", {
          className: iz()("StoreRecipientPopover", {
            StoreRecipientPopoverSoft: cz
          }),
          role: "status",
          children: dz(Uz)
        })]
      })
    }
    var Ui = bz(2222),
      ci = bz(2155),
      gi = bz(3337),
      Si = bz(2872),
      yi = bz(2181);
    const Di = bz.p + "static/media/superRankPreviewPoster.e64783181b692cc31e08.webp";

    function Qi() {
      (0, yi.j)(Di, {
        lowPriority: !1
      })
    }

    function Wi(zz) {
      let {
        onBack: uz,
        cta: bz,
        recipient: nz,
        afterCta: iz
      } = zz;
      const {
        t: tz
      } = (0, lz.F)(), [Hz, pz] = (0, Ez.useState)("starting"), dz = (0, Ez.useRef)(null), Fz = (0, Pu.e)(), Zz = (0, Ez.useRef)(null), Rz = (0, Ez.useCallback)((() => {
        const zz = dz.current;
        null !== zz.error && zz.load();
        const uz = zz.play();
        Zz.current = uz, uz.catch((zz => {
          (0, gi.b)("Failed to play Super Rank video", zz), Fz.current && Zz.current === uz && pz("failed")
        }))
      }), [Fz]);
      return (0, Ez.useEffect)((() => {
        const zz = dz.current;
        let uz;

        function bz() {
          clearTimeout(uz), uz = setTimeout(Rz, 3e3)
        }
        return Rz(), zz.addEventListener("ended", bz), () => {
          clearTimeout(uz), zz.removeEventListener("ended", bz)
        }
      }), [Rz]), (0, Oz.jsxs)("div", {
        className: "StoreSuperRankDetail",
        children: [(0, Oz.jsxs)("div", {
          className: "StoreDetailHeader",
          children: [(0, Oz.jsx)(Kz.d, {
            className: "StoreDetailBackButton",
            onClick: uz,
            padBack: !0,
            children: tz("general:back")
          }), (0, Oz.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, Oz.jsx)(Mz.c, {
              name: "bolt"
            }), " ", tz("homePage:superRank")]
          }), nz]
        }), (0, Oz.jsxs)("div", {
          className: "StoreSuperRankDetailBody",
          children: [(0, Oz.jsxs)("div", {
            className: "StoreSuperRankVideo",
            children: [(0, Oz.jsx)("video", {
              ref: dz,
              src: `${Lz.clientSideServerUrls.staticUrl}/videos/SuperRankPreview.mp4`,
              poster: Di,
              muted: !0,
              playsInline: !0,
              controls: "playing" === Hz,
              onPlaying: () => {
                pz("playing")
              },
              onError: () => {
                pz("failed")
              }
            }), ("failed" === Hz || "loading" === Hz) && (0, Oz.jsx)("div", {
              className: "StoreSuperRankPlay",
              children: (0, Oz.jsx)(Kz.f, {
                ariaLabel: tz("general:play"),
                loading: "loading" === Hz,
                onClick: () => {
                  pz("loading"), Rz()
                },
                touchPressOn: "pointerup",
                children: (0, Oz.jsx)(Mz.c, {
                  name: "play"
                })
              })
            })]
          }), (0, Oz.jsxs)("div", {
            className: "StoreSuperRankDetailSide",
            children: [(0, Oz.jsx)("div", {
              className: "StoreSuperRankDetailTable",
              children: (0, Oz.jsx)(Si.e, {})
            }), (0, Oz.jsxs)("div", {
              className: "StoreTileActions",
              children: [bz, iz]
            })]
          })]
        })]
      })
    }
    var ei = bz(2469),
      ji = bz(3290),
      Ii = bz(2860),
      Bi = bz(2862);
    const Ci = [Li.n.yellow, Li.n.green, Li.n.aqua, Li.n.blue, Li.n.purple, Li.n.red];

    function Yi(zz) {
      return "needsRecipient" === zz || "lookingUp" === zz || "gift" === zz || "recipientOwns" === zz || "recipientSharesOwned" === zz || "recipientSubscribed" === zz
    }

    function ki(zz) {
      const {
        onKeyDown: uz,
        ...bz
      } = (0, Kz.ab)();
      return {
        ...bz,
        "aria-label": zz,
        onKeyDown: zz => {
          zz.target === zz.currentTarget && (null === uz || void 0 === uz || uz(zz))
        }
      }
    }

    function zl(zz) {
      let {
        text: uz
      } = zz;
      return (0, Oz.jsx)("span", {
        className: "StoreRainbowText",
        children: Array.from(uz).map(((zz, uz) => (0, Oz.jsx)("span", {
          style: {
            color: Ci[uz % Ci.length]
          },
          children: zz
        }, uz)))
      })
    }
    const ul = {
      recipientOwns: "store:alreadyOwns",
      sharesOwned: "store:sharesOwned",
      recipientSharesOwned: "store:recipientSharesOwned",
      subscribed: "store:subscribed",
      recipientSubscribed: "store:recipientSubscribed"
    };

    function bl(zz) {
      let {
        state: uz,
        item: bz,
        price: Ez,
        busy: nz,
        highlight: tz = !1,
        onAct: Hz,
        onNeedRecipient: pz,
        onLogin: dz
      } = zz;
      const {
        t: Fz
      } = (0, lz.F)(), Zz = "superRank" === bz ? mz.h.product.days : null, Rz = zz => null === Zz ? Fz(zz ? "general:gift" : "general:buy") : Fz(zz ? "store:giftDays" : "store:buyDays", {
        days: Zz
      }), wz = (zz, uz) => (0, Oz.jsxs)(Oz.Fragment, {
        children: [uz && (0, Oz.jsx)("span", {
          className: "StoreCtaIcon",
          children: uz
        }), null === zz && (0, Oz.jsx)("span", {
          className: "StoreCtaLabel StoreCtaLabelPending"
        }), null !== zz && (0, Oz.jsx)("span", {
          className: "StoreCtaLabel",
          title: zz,
          children: zz
        }), (0, Oz.jsxs)("span", {
          className: "StoreCtaPrice",
          children: ["\xb7", (0, Oz.jsx)(ci.d, {
            amount: Ez
          })]
        })]
      });
      let Xz;
      switch (uz) {
        case "pending":
          Xz = (0, Oz.jsx)(Kz.q, {
            className: "StoreCtaButton",
            disabled: !0,
            children: wz(null)
          });
          break;
        case "login":
          Xz = (0, Oz.jsx)(Kz.q, {
            className: "StoreCtaButton",
            onClick: dz,
            children: wz(Rz(!1))
          });
          break;
        case "owned":
          Xz = (0, Oz.jsx)(Kz.j, {
            className: "StoreCtaButton",
            onClick: () => {
              vz.e.set({
                openEverythingMenuName: Hu.r.CUSTOMISATION
              })
            },
            children: (0, Oz.jsxs)("span", {
              className: "StoreCtaLabel",
              children: [(0, Oz.jsx)(Mz.c, {
                name: "shirt"
              }), " ", Fz("store:equip")]
            })
          });
          break;
        case "recipientOwns":
        case "sharesOwned":
        case "recipientSharesOwned":
        case "subscribed":
        case "recipientSubscribed":
          Xz = (0, Oz.jsx)(Kz.q, {
            className: "StoreCtaButton",
            disabled: !0,
            children: (0, Oz.jsx)("span", {
              className: "StoreCtaLabel",
              children: Fz(ul[uz])
            })
          });
          break;
        case "needsRecipient":
        case "lookingUp":
        case "gift":
          Xz = (0, Oz.jsx)(Kz.q, {
            className: "StoreCtaButton",
            disabled: "needsRecipient" === uz || null === Ez,
            loading: "lookingUp" === uz || nz,
            onClick: Hz,
            analyticsClick: {
              id: "store.gift",
              value: bz
            },
            children: wz(Rz(!0), Xi.b)
          });
          break;
        case "buy":
        case "recharge":
          Xz = (0, Oz.jsx)(Kz.q, {
            className: "StoreCtaButton",
            loading: nz,
            disabled: null === Ez,
            onClick: Hz,
            analyticsClick: {
              id: "store.buy",
              value: bz
            },
            children: wz(Rz(!1))
          })
      }
      return (0, Oz.jsx)("div", {
        className: iz()("StoreCta", {
          StoreCtaHighlight: tz
        }),
        onClick: zz => {
          zz.stopPropagation(), "needsRecipient" === uz && pz()
        },
        children: Xz
      })
    }

    function El() {
      const {
        t: zz
      } = (0, lz.F)();
      return (0, Oz.jsxs)("ul", {
        className: "StorePerks",
        children: [(0, Oz.jsxs)("li", {
          children: [(0, Oz.jsx)(Mz.c, {
            name: "check"
          }), (0, Oz.jsx)(zl, {
            text: zz("store:colourfulNames")
          })]
        }), (0, Oz.jsxs)("li", {
          children: [(0, Oz.jsx)(Mz.c, {
            name: "check"
          }), zz("store:perkCapes")]
        }), (0, Oz.jsxs)("li", {
          children: [(0, Oz.jsx)(Mz.c, {
            name: "check"
          }), zz("store:perkNoAdverts")]
        }), (0, Oz.jsxs)("li", {
          children: [(0, Oz.jsx)(Mz.c, {
            name: "check"
          }), zz("store:perkFriends", {
            count: (0, Bz.c)(["super"])
          })]
        })]
      })
    }

    function nl(zz) {
      let {
        daysLeft: uz,
        totalDays: bz,
        urgent: Ez
      } = zz;
      const {
        t: nz
      } = (0, lz.F)(), Mz = bz > 0 ? Math.min(1, Math.max(.03, uz / bz)) : 1;
      return (0, Oz.jsxs)("div", {
        className: iz()("StoreSuperRankMeterArea", {
          StoreSuperRankMeterUrgent: Ez
        }),
        children: [(0, Oz.jsx)("span", {
          className: "StoreSuperRankDaysLeft",
          children: 1 === uz ? nz("store:oneDayLeft") : nz("store:daysLeft", {
            days: uz
          })
        }), (0, Oz.jsx)("div", {
          className: "StoreSuperRankMeter",
          children: (0, Oz.jsx)("i", {
            style: {
              width: 100 * Mz + "%"
            }
          })
        })]
      })
    }

    function il(zz) {
      let {
        state: uz,
        urgent: bz,
        daysLeft: Ez,
        totalDays: nz,
        recipientHasSuperRank: tz,
        busy: Hz,
        highlight: pz,
        onOpen: dz,
        onAct: Fz,
        onNeedRecipient: Zz,
        onLogin: Rz
      } = zz;
      const {
        t: Kz
      } = (0, lz.F)(), wz = Yi(uz), {
        days: Xz
      } = mz.h.product, fz = Kz("store:recipientHasSuperRank", {
        giftDays: Xz
      }), sz = jz("subscribed" === uz);
      return (0, Oz.jsxs)("div", {
        className: iz()("StoreTile StoreSuperRankTile", {
          StoreTileGift: wz,
          StoreSuperRankTileUrgent: "recharge" === uz && bz,
          StoreSuperRankTileWithChip: tz,
          StoreSuperRankTileGiftReady: "gift" === uz
        }),
        ...ki(Kz("homePage:superRank")),
        "data-store-item": "superRank",
        onPointerEnter: Qi,
        onFocus: Qi,
        onClick: dz,
        children: [(0, Oz.jsx)("div", {
          className: "StoreSuperRankArt",
          style: {
            backgroundImage: `url(${Ti.f})`
          }
        }), wz && (0, Oz.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, Oz.jsxs)("div", {
          className: "StoreTileContent",
          children: [tz && (0, Oz.jsx)("span", {
            className: "StoreChip StoreChipGift",
            title: fz,
            children: fz
          }), (0, Oz.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, Oz.jsx)(Mz.c, {
              name: "bolt"
            }), " ", Kz("homePage:superRank")]
          }), wz && (0, Oz.jsx)("div", {
            className: "StoreTilePitch",
            children: Kz("store:giftPitch", {
              days: Xz
            })
          }), "recharge" === uz && (0, Oz.jsx)(nl, {
            daysLeft: Ez,
            totalDays: nz,
            urgent: bz
          }), sz && (0, Oz.jsx)("div", {
            className: "StoreSuperRankMeterArea",
            children: (0, Oz.jsx)("span", {
              className: "StoreSuperRankDaysLeft",
              children: sz
            })
          }), (0, Oz.jsx)(El, {}), (0, Oz.jsxs)("div", {
            className: "StoreTileActions",
            children: [(0, Oz.jsx)(bl, {
              state: uz,
              item: "superRank",
              price: mz.h.price,
              busy: Hz,
              highlight: pz,
              onAct: Fz,
              onNeedRecipient: Zz,
              onLogin: Rz
            }), "needsRecipient" === uz && (0, Oz.jsx)("span", {
              className: "StoreTileNote StoreTileNoteGift",
              children: Kz("store:pickRecipientFirst")
            }), "recharge" === uz && bz && (0, Oz.jsx)("span", {
              className: "StoreTileNote StoreSuperRankEnding",
              children: 1 === Ez ? Kz("store:endsInOneDay") : Kz("store:endsInDays", {
                days: Ez
              })
            })]
          })]
        })]
      })
    }
    const ll = {
      common: "StorePackTileCommon",
      rare: "StorePackTileRare",
      epic: "StorePackTileEpic",
      legendary: "StorePackTileLegendary",
      mythic: "StorePackTileMythic"
    };

    function Ml(zz) {
      var uz;
      let {
        pack: bz,
        state: nz,
        busy: tz,
        onOpen: Hz,
        onAct: pz,
        onNeedRecipient: dz,
        onLogin: Fz
      } = zz;
      const {
        t: Zz
      } = (0, lz.F)(), Rz = ti.e[bz], Kz = Ki.h[bz], wz = (0, Ti.n)(bz), Xz = (0, Ez.useRef)(null);
      (0, Ii.m)(bz, Xz);
      const fz = Yi(nz),
        sz = null !== (uz = Rz.displayName) && void 0 !== uz ? uz : bz,
        rz = (0, ji.e)((() => {
          (0, ei.i)();
          const zz = (0, Ii.f)(bz);
          void 0 !== zz && (0, yi.j)((0, Ii.c)(zz))
        })),
        [oz] = (0, Ez.useState)(Ji.e);
      return (0, Oz.jsxs)("div", {
        className: iz()("StoreTile StorePackTile", ll[Rz.tier], {
          StorePackTileOwned: "owned" === nz,
          StorePackTileRecipientOwns: "recipientOwns" === nz,
          StoreTileGift: fz
        }),
        ...ki(sz),
        ref: Xz,
        "data-store-item": bz,
        onClick: Hz,
        onPointerMove: zz => {
          "mouse" !== zz.pointerType || 0 === zz.movementX && 0 === zz.movementY || oz || rz.start()
        },
        onPointerLeave: rz.cancel,
        children: [Kz && (0, Oz.jsx)(Kz, {}), (0, Oz.jsx)("div", {
          className: "StorePackCharacters",
          children: wz.map((zz => (0, Oz.jsx)("div", {
            className: "StorePackCharacter",
            style: {
              backgroundImage: `url(${(0,Ti.h)(zz)})`
            }
          }, zz)))
        }), (0, Oz.jsx)("div", {
          className: "StoreTileScrim"
        }), fz && (0, Oz.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, Oz.jsxs)("div", {
          className: "StoreTileContent",
          children: [(0, Oz.jsx)("div", {
            className: "StoreTileTitle",
            children: sz
          }), (0, Oz.jsxs)("div", {
            className: "StoreTileMeta",
            children: [(0, Oz.jsx)(Bi.b, {
              tier: Rz.tier
            }), " \xb7 ", Zz("store:itemCount", {
              count: (0, Ui.g)(bz)
            }), "owned" === nz && (0, Oz.jsxs)("span", {
              className: "StoreTileOwned",
              children: [" \xb7 ", (0, Oz.jsx)(Mz.c, {
                name: "check"
              }), " ", Zz("general:owned")]
            })]
          }), (0, Oz.jsx)(bl, {
            state: nz,
            item: bz,
            price: (0, mz.f)(bz),
            busy: tz,
            onAct: pz,
            onNeedRecipient: dz,
            onLogin: Fz
          })]
        })]
      })
    }
    var tl = bz(2844),
      Hl = bz(1525),
      Ol = bz(1429),
      pl = bz(3319);

    function dl() {
      return (0, Oz.jsx)("span", {
        className: "NewBadge",
        children: "NEW"
      })
    }
    var Fl = bz(1313),
      Zl = bz(1531),
      Rl = bz(9020);

    function Kl(zz) {
      let {
        character: uz,
        drawn: bz,
        onDrawn: nz
      } = zz;
      const lz = (0, Ez.useRef)(null),
        Mz = (0, Rl.g)(uz);
      return (0, Oz.jsx)("div", {
        className: iz()("StoreCharacterLive", {
          StoreCharacterLiveDrawn: bz
        }),
        children: (0, Oz.jsx)(Ez.Suspense, {
          fallback: null,
          children: (0, Oz.jsx)(ei.e, {
            ref: lz,
            framing: "store",
            turntableFromYaw: bz ? Mz.yaw : null,
            onReady: () => {
              var zz, bz;
              null === (zz = lz.current) || void 0 === zz || zz.setOrbit(Mz), null === (bz = lz.current) || void 0 === bz || bz.setAllCosmetics(Zl.c[uz].cosmetics)
            },
            onDrawn: nz
          })
        })
      })
    }
    const wl = {
        common: "StoreCharacterCardCommon",
        rare: "StoreCharacterCardRare",
        epic: "StoreCharacterCardEpic",
        legendary: "StoreCharacterCardLegendary",
        mythic: "StoreCharacterCardMythic"
      },
      Xl = new Set(["wildSpirits"]);

    function fl(zz) {
      var uz;
      let {
        tile: bz,
        design: nz,
        canGoLive: tz,
        live: Hz,
        busy: pz,
        highlight: dz,
        onLiveStart: Fz,
        onLiveEnd: Zz,
        onOpen: Rz,
        onAct: Kz,
        onNeedRecipient: wz,
        onLogin: Xz
      } = zz;
      const {
        t: fz
      } = (0, lz.F)(), {
        pack: sz,
        state: rz
      } = bz, oz = ti.e[sz], Nz = (0, ti.g)(sz), vz = (0, Ti.j)(sz), xz = Ki.h[vz], Jz = Xl.has(vz), {
        tier: Az
      } = oz, Tz = "legendary" === Az || "mythic" === Az, Lz = (0, Ez.useRef)(null);
      (0, Fl.b)(Lz, "epic" === Az || Tz || Jz);
      const [Pz, az] = (0, Ez.useState)(!1);
      return !Hz && Pz && az(!1), (0, Oz.jsxs)("div", {
        ref: Lz,
        className: iz()("StoreCharacterCard", `StoreCharacterCard${nz}`, wl[Az], {
          StoreCharacterCardOwned: "owned" === rz || "recipientOwns" === rz,
          StoreCharacterCardGift: Yi(rz),
          StoreCharacterCardItem: void 0 === Nz
        }),
        onPointerMove: zz => {
          "mouse" !== zz.pointerType || 0 === zz.movementX && 0 === zz.movementY || !tz || Hz || void 0 === Nz || Fz()
        },
        onPointerLeave: Zz,
        children: [(0, Oz.jsx)("div", {
          className: "StoreCharacterBackdrop",
          children: xz && (0, Oz.jsx)(xz, {
            simple: !0
          })
        }), Tz && (0, Oz.jsx)("div", {
          className: "StoreCharacterRays"
        }), (0, Oz.jsxs)(Gz.LinkPreserveSearch, {
          className: "StoreCharacterLink",
          to: (0, Hl.f)({
            kind: "pack",
            pack: sz
          }),
          "data-store-item": sz,
          onClick: zz => {
            (0, Ol.e)(zz) && (zz.preventDefault(), Rz())
          },
          children: [(0, Oz.jsxs)("div", {
            className: "StoreCharacterStage",
            children: [(0, Oz.jsx)("div", {
              className: "StoreCharacterHalo"
            }), (0, Oz.jsx)("div", {
              className: iz()("StoreCharacterFigure", {
                StoreCharacterFigureCovered: Pz
              }),
              style: {
                backgroundImage: `url(${(0,Ti.s)(sz)})`
              }
            }), Hz && void 0 !== Nz && (0, Oz.jsx)(Kl, {
              character: Nz,
              drawn: Pz,
              onDrawn: () => {
                az(!0)
              }
            })]
          }), (0, Oz.jsx)("div", {
            className: "StoreCharacterName",
            children: null !== (uz = oz.displayName) && void 0 !== uz ? uz : sz
          }), (0, Oz.jsx)(Bi.b, {
            tier: Az,
            className: "StoreCharacterTier"
          })]
        }), (0, Oz.jsx)("div", {
          className: "StoreCharacterScrim"
        }), Jz && (0, Oz.jsx)("span", {
          className: "StoreCharacterNew",
          children: (0, Oz.jsx)(dl, {})
        }), "owned" === rz && (0, Oz.jsx)("span", {
          className: "StoreCharacterOwned",
          title: fz("general:owned"),
          "aria-label": fz("general:owned"),
          children: (0, Oz.jsx)(Mz.c, {
            name: "check"
          })
        }), (0, Oz.jsx)("div", {
          className: "StoreCharacterPlate",
          children: (0, Oz.jsx)(bl, {
            state: rz,
            item: sz,
            price: (0, mz.f)(sz),
            busy: pz,
            highlight: dz,
            onAct: Kz,
            onNeedRecipient: wz,
            onLogin: Xz
          })
        })]
      })
    }

    function sl(zz) {
      let {
        tiles: uz,
        busy: bz,
        highlightItem: nz,
        onOpen: iz,
        onAct: lz,
        onNeedRecipient: Mz,
        onLogin: tz
      } = zz;
      const Hz = (0, pl.l)("storeCharacterCardFoil"),
        pz = (0, pl.l)("storeCharacterCardSpotlight"),
        dz = Hz ? "Foil" : pz ? "Spotlight" : "Showcase",
        [Fz] = (0, Ez.useState)(Ji.e),
        [Zz, Rz] = (0, Ez.useState)(null);
      return (0, Oz.jsx)("div", {
        className: "StoreCharacterGrid",
        children: uz.map((zz => (0, Oz.jsx)(fl, {
          tile: zz,
          design: dz,
          canGoLive: !Fz,
          live: Zz === zz.pack,
          busy: bz,
          highlight: nz === zz.pack,
          onLiveStart: () => {
            Rz(zz.pack)
          },
          onLiveEnd: () => {
            Rz((uz => uz === zz.pack ? null : uz))
          },
          onOpen: () => {
            iz(zz.pack)
          },
          onAct: () => {
            lz(zz.pack)
          },
          onNeedRecipient: Mz,
          onLogin: () => {
            tz(zz.pack)
          }
        }, zz.pack)))
      })
    }
    var rl = bz(9035);

    function ol(zz) {
      let {
        title: uz
      } = zz;
      return (0, Oz.jsx)("h2", {
        className: "StoreSectionDivider",
        children: (0, Oz.jsx)("span", {
          className: "StoreSectionDividerTitle",
          children: uz
        })
      })
    }

    function Nl(zz) {
      let {
        mountAtOnce: uz,
        children: bz
      } = zz;
      const nz = (0, Ez.useRef)(null),
        [iz, lz] = (0, Ez.useState)(uz),
        Mz = (0, rl.b)();
      return (0, Ez.useLayoutEffect)((() => {
        const zz = nz.current;
        zz && zz.getBoundingClientRect().top < zz.parentElement.getBoundingClientRect().bottom && lz(!0)
      }), []), iz || Mz ? (0, Oz.jsx)(Oz.Fragment, {
        children: bz
      }) : (0, Oz.jsx)("div", {
        ref: nz
      })
    }

    function vl(zz) {
      let {
        layout: uz,
        mountAtOnce: bz,
        bundleGift: Ez,
        superRankTotalDays: nz,
        busy: iz,
        highlightItem: Mz,
        onOpen: tz,
        onAct: Hz,
        onNeedRecipient: pz,
        onLogin: dz
      } = zz;
      const {
        t: Fz
      } = (0, lz.F)(), Zz = uz.packs.filter((zz => void 0 === (0, ti.g)(zz.pack) && !(0, ti.j)(zz.pack))), Rz = uz.packs.filter((zz => void 0 !== (0, ti.g)(zz.pack))), Kz = uz.packs.filter((zz => (0, ti.j)(zz.pack)));
      return (0, Oz.jsxs)(Oz.Fragment, {
        children: [(0, Oz.jsx)(tl.d, {
          className: "StoreSuperGems",
          gift: Ez,
          highlightSku: Mz
        }), (0, Oz.jsx)(ol, {
          title: Fz("store:rank")
        }), (0, Oz.jsx)(il, {
          state: uz.superRank.state,
          urgent: uz.superRank.urgent,
          daysLeft: uz.superRankDaysLeft,
          totalDays: nz,
          recipientHasSuperRank: uz.recipientHasSuperRank,
          busy: iz,
          highlight: "superRank" === Mz,
          onOpen: () => {
            tz("superRank")
          },
          onAct: () => {
            Hz("superRank")
          },
          onNeedRecipient: pz,
          onLogin: () => {
            dz("superRank")
          }
        }), (0, Oz.jsxs)(Nl, {
          mountAtOnce: bz,
          children: [(0, Oz.jsx)(ol, {
            title: Fz("store:bundles")
          }), (0, Oz.jsx)("div", {
            className: "StorePackGrid",
            children: Zz.map((zz => (0, Oz.jsx)(Ml, {
              pack: zz.pack,
              state: zz.state,
              busy: iz,
              onOpen: () => {
                tz(zz.pack)
              },
              onAct: () => {
                Hz(zz.pack)
              },
              onNeedRecipient: pz,
              onLogin: () => {
                dz(zz.pack)
              }
            }, zz.pack)))
          }), (0, Oz.jsxs)(Nl, {
            mountAtOnce: bz,
            children: [(0, Oz.jsx)(ol, {
              title: Fz("store:characters")
            }), (0, Oz.jsx)(sl, {
              tiles: Rz,
              busy: iz,
              highlightItem: Mz,
              onOpen: tz,
              onAct: Hz,
              onNeedRecipient: pz,
              onLogin: dz
            }), Kz.length > 0 && (0, Oz.jsxs)(Oz.Fragment, {
              children: [(0, Oz.jsx)(ol, {
                title: Fz("store:premiumItems")
              }), (0, Oz.jsx)(sl, {
                tiles: Kz,
                busy: iz,
                highlightItem: Mz,
                onOpen: tz,
                onAct: Hz,
                onNeedRecipient: pz,
                onLogin: dz
              })]
            })]
          })]
        })]
      })
    }

    function xl(zz) {
      let {
        state: uz,
        mode: bz,
        giftName: Ez,
        busy: nz,
        highlight: iz,
        purchaseError: Mz,
        onBack: tz,
        onChooseRecipient: Hz,
        onAct: pz,
        onLogin: dz
      } = zz;
      const {
        t: Fz
      } = (0, lz.F)(), Zz = jz("gift" !== bz);
      return (0, Oz.jsx)(Wi, {
        onBack: tz,
        recipient: "gift" === bz && (0, Oz.jsxs)(Oz.Fragment, {
          children: [Ez && (0, Oz.jsxs)("span", {
            className: "StoreDetailRecipient",
            title: Fz("store:giftFor", {
              name: Ez
            }),
            children: [Xi.b, " ", Fz("store:giftFor", {
              name: Ez
            })]
          }), !Ez && (0, Oz.jsxs)("div", {
            ...(0, Kz.ab)(),
            className: "StoreDetailRecipient StoreDetailRecipientChoose",
            onClick: Hz,
            children: [Xi.b, " ", Fz("store:chooseRecipient")]
          })]
        }),
        cta: (0, Oz.jsx)(bl, {
          state: uz,
          item: "superRank",
          price: mz.h.price,
          busy: nz,
          highlight: iz,
          onAct: pz,
          onNeedRecipient: Hz,
          onLogin: dz
        }),
        afterCta: (0, Oz.jsxs)(Oz.Fragment, {
          children: [Zz && (0, Oz.jsx)("span", {
            className: "StoreTileNote",
            children: Zz
          }), Mz && (0, Oz.jsx)("span", {
            className: "StoreTileNote StoreTileNoteError",
            children: Fz(Mz)
          })]
        })
      })
    }
    var Jl = bz(140);
    const Al = Jl.k("kind", [Jl.s({
      kind: Jl.p("refused"),
      heldTierId: Jl.K(),
      until: Jl.r()
    }), Jl.s({
      kind: Jl.p("refund"),
      tierId: Jl.K(),
      refundedMs: Jl.r(),
      forfeitedMs: Jl.r(),
      premiumCurrency: Jl.r()
    }), Jl.s({
      kind: Jl.p("none")
    })]);
    async function Tl(zz) {
      const uz = await (0, Tz.postJsonWithMetricsCookiesAndJsonResponse)(`${Lz.clientSideServerUrls.indexUrl}/index/ranks/subscribe-preview`, {
        productId: zz
      }, {
        retries: 1
      });
      return Al.parse(uz)
    }
    var Ll = bz(2812),
      Pl = bz(2849);

    function Gl(zz, uz) {
      const bz = Math.max(1, Math.round(uz / Uz.j));
      return [1 === bz ? `${zz}OneDay` : zz, {
        days: bz.toLocaleString()
      }]
    }

    function al() {
      return "true" === new URLSearchParams(window.location.search).get("tempSubscription") && (0, gz.purchasesAllowed)() ? (0, Oz.jsx)(Vl, {}) : null
    }

    function Vl() {
      const {
        t: zz
      } = (0, lz.F)(), {
        userContext: uz
      } = (0, Fz.c)(), {
        purchaseUnderWay: bz,
        notice: nz,
        subscribe: iz
      } = (0, Ll.b)(), [Mz, tz] = (0, Ez.useState)(null), [Hz, pz] = (0, Ez.useState)(0), [dz, Zz] = (0, Ez.useState)(!1), Rz = (0, Ez.useRef)(!0), wz = uz !== Tz.NULL_USER_CONTEXT, Xz = null !== Mz && Mz.loadedFor === uz ? Mz.offer : null, fz = null === nz || void 0 === nz ? void 0 : nz.pendingIntentId, sz = (0, Ez.useRef)(fz);

      function rz() {
        pz((zz => zz + 1))
      }
      async function oz(zz) {
        Zz(!1), await iz(zz), Rz.current && rz()
      }
      if ((0, Ez.useEffect)((() => (Rz.current = !0, () => {
          Rz.current = !1
        })), []), (0, Ez.useEffect)((() => {
          void 0 !== sz.current && void 0 === fz && rz(), sz.current = fz
        }), [fz]), (0, Ez.useEffect)((() => {
          if (!wz) return;
          let zz = !1;
          return Zz(!1), async function() {
            const {
              offering: zz
            } = await (0, Mu.e)().getOfferings("superRankPage"), uz = null === zz || void 0 === zz ? void 0 : zz.packages.find((zz => null !== zz.price));
            return void 0 === uz ? {
              kind: "unavailable"
            } : {
              kind: "loaded",
              pkg: uz,
              preview: await Tl(uz.productId)
            }
          }().catch((zz => (console.error("Billing: loading the Super Rank subscription or its preview failed:", zz), {
            kind: "loadFailed"
          }))).then((bz => {
            zz || tz((zz => "loadFailed" === bz.kind && (null === zz || void 0 === zz ? void 0 : zz.loadedFor) === uz ? zz : {
              loadedFor: uz,
              offer: bz
            }))
          })), () => {
            zz = !0
          }
        }), [uz, wz, Hz]), null === Xz) return null;
      if ("loaded" !== Xz.kind) return (0, Oz.jsx)(Pl.i, {
        notice: {
          kind: "error",
          key: "unavailable" === Xz.kind ? "payments:subscriptionUnavailable" : "payments:subscriptionLoadFailed"
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const {
        pkg: Nz,
        preview: vz
      } = Xz;
      if ("refused" === vz.kind) return (0, Oz.jsx)(Pl.i, {
        notice: {
          kind: "error",
          key: "payments:subscribeRefusedGemRank",
          values: {
            date: new Date(vz.until).toLocaleDateString()
          }
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const xz = (0, tl.f)(Nz.price);
      if (dz && "refund" === vz.kind) {
        const {
          refundedMs: uz,
          forfeitedMs: Ez,
          premiumCurrency: nz
        } = vz, iz = Ez + (0 === nz ? uz : 0), [lz, Mz] = Gl("payments:subscribeRefundsGemRank", uz), [tz, Hz] = Gl("payments:subscribeForfeitsGemRank", iz);
        return (0, Oz.jsxs)("div", {
          className: "StoreTempSubscribe SmallTextBold",
          children: [(0, Oz.jsx)("div", {
            children: zz("payments:subscribeEndsGemRank")
          }), nz > 0 && (0, Oz.jsx)("div", {
            children: zz(lz, {
              ...Mz,
              amount: nz.toLocaleString()
            })
          }), iz > 0 && (0, Oz.jsx)("div", {
            children: zz(tz, Hz)
          }), (0, Oz.jsxs)("div", {
            className: "StoreTempSubscribeButtons",
            children: [(0, Oz.jsx)(Kz.j, {
              onClick: () => {
                Zz(!1)
              },
              children: zz("general:cancel")
            }), (0, Oz.jsx)(Kz.q, {
              onClick: () => {
                oz(Nz)
              },
              loading: bz,
              children: zz("payments:subscribeContinue", {
                price: xz
              })
            })]
          })]
        })
      }
      return (0, Oz.jsxs)("div", {
        className: "StoreTempSubscribe",
        children: [(0, Oz.jsx)(Pl.i, {
          notice: nz,
          className: "SmallTextBold"
        }), (0, Oz.jsx)(Pl.c, {
          className: "SmallTextBold"
        }), (0, Oz.jsx)(Kz.q, {
          onClick: () => {
            "refund" === vz.kind ? Zz(!0) : oz(Nz)
          },
          disabled: void 0 !== fz,
          loading: bz,
          children: zz("payments:subscribeToSuperRank", {
            price: xz
          })
        })]
      })
    }
    const ml = {
      kind: "board"
    };
    let ql = !1;

    function hl(zz) {
      return "found" === zz.status || "error" === zz.status && "store:giftRecipientLookupFailed" === zz.error ? zz.name : null
    }(0, cz.u)(Hi.prefetchBillingOfferings);
    const Ul = (0, Ez.memo)((function(zz) {
      var uz;
      let {
        show: nz
      } = zz;
      const {
        t: Mz
      } = (0, lz.F)(), {
        userContext: tz
      } = (0, Fz.c)(), Hz = tz !== Tz.NULL_USER_CONTEXT, pz = oi(tz), [dz, Zz] = (0, Rz.b)(), {
        page: Kz,
        urlMode: wz,
        goTo: Xz
      } = (0, Ni.h)(), fz = function(zz) {
        return "superRank" === zz.kind ? "superRank" : "pack" === zz.kind ? zz.pack : null
      }(Kz), {
        openEverythingMenuName: sz,
        gameState: rz
      } = (0, vz.m)(["openEverythingMenuName", "gameState"]), oz = null !== sz;
      ! function(zz, uz) {
        const [nz] = (0, Ez.useState)(Ji.e), [iz, lz] = (0, Ez.useState)(!1);
        nz && uz && !iz && lz(!0);
        const Mz = (0, iE.p)(),
          tz = nz && iz && zz && !Mz;
        (0, Ez.useEffect)((() => {
          if (!tz) return;
          let zz = null,
            uz = null,
            Ez = null;
          const nz = () => !document.hasFocus() || document.activeElement instanceof HTMLIFrameElement || (0, Mu.e)().purchaseUnderWay,
            iz = () => {
              var bz;
              null === (bz = Ez) || void 0 === bz || bz(), Ez = null, null !== zz && (clearTimeout(zz), zz = null), null !== uz && (clearTimeout(uz), uz = null)
            },
            lz = () => {
              (0, vi.k)(!1), (0, vi.j)(!1), iz(), zz = setTimeout((() => {
                zz = null, Ez = (0, xi.d)((() => {
                  Ez = null, nz() ? lz() : ((0, vi.k)(!0), uz = setTimeout((() => {
                    uz = null, Ez = (0, xi.d)((() => {
                      Ez = null, nz() ? lz() : (0, vi.j)(!0)
                    }))
                  }), 3e3), Promise.resolve().then((() => bz(4407))).then((zz => {
                    zz.startBackgroundGameSetup()
                  }), (zz => {
                    console.warn("Background game setup: its chunk failed to load", zz)
                  })))
                }))
              }), 2e3)
            };
          for (const bz of Ai) window.addEventListener(bz, lz, {
            capture: !0,
            passive: !0
          });
          return lz(), () => {
            for (const zz of Ai) window.removeEventListener(zz, lz, {
              capture: !0
            });
            iz(), (0, vi.k)(!1), (0, vi.j)(!1)
          }
        }), [tz])
      }(nz && oz, "pack" === Kz.kind);
      const Nz = "landingPage" === rz;
      (0, Ez.useEffect)((() => {
        oz && (0, Hi.prefetchBillingOfferings)()
      }), [oz]), (0, Ez.useEffect)((() => {
        oz && !nz && Nz && (0, Ti.u)()
      }), [oz, nz, Nz]);
      const [xz, Jz] = (0, Ez.useState)(0), [Az, Lz] = (0, Ez.useState)(null), [Pz, Gz] = (0, Ez.useState)(null), [az, Vz] = (0, Ez.useState)(null), [qz, hz] = (0, Ez.useState)(null), Uz = (0, Ez.useRef)(null), Sz = (0, Ez.useRef)(null), yz = (0, Ez.useRef)(!1), Dz = (0, cz.z)(), Qz = (0, Ez.useRef)(0), Wz = (0, Ez.useRef)(!1);

      function ez() {
        Jz((zz => zz + 1))
      }(0, Ez.useEffect)((() => {
        if (nz) {
          if (ql = !0, (0, cz.n)(), Dz && Dz.seq !== Qz.current) {
            var zz;
            Qz.current = Dz.seq, "loginResume" !== Dz.source && (0, cz.y)();
            const uz = (0, cz.d)(Dz);
            wz || Xz(uz), hz(null !== (zz = Dz.highlight) && void 0 !== zz ? zz : null), Gz(null), "gift" === Dz.mode && Dz.giftRecipientName ? pz.choose(Dz.giftRecipientName, "prefilled") : "current" !== Dz.mode && pz.clear(), "gift" !== Dz.mode || Dz.giftRecipientName || ez(), (0, Yz.reportAnalyticsClick)({
              id: "store.open",
              value: Dz.source
            })
          } else Wz.current || (0, Yz.reportAnalyticsClick)({
            id: "store.open",
            value: "menuTab"
          });
          Wz.current = !0
        } else Wz.current = !1
      }), [nz, Dz]), (0, Ez.useEffect)((() => {
        if (!qz) return;
        const zz = setTimeout((() => {
          hz(null)
        }), 4e3);
        return () => {
          clearTimeout(zz)
        }
      }), [qz]), (0, Ez.useEffect)((() => {
        const zz = Uz.current;
        var uz;
        if (nz && zz) {
          if (fz) Sz.current = fz, null === (uz = zz.querySelector(".StoreDetailBackButton, .CosmeticShopDetailBackButton")) || void 0 === uz || uz.focus();
          else if (Sz.current) {
            var bz;
            null === (bz = zz.querySelector(`[data-store-item="${Sz.current}"]`)) || void 0 === bz || bz.focus(), Sz.current = null
          }
        } else Sz.current = null
      }), [fz, nz]), (0, Ez.useEffect)((() => {
        Gz(null)
      }), [pz.query]), (0, Ez.useEffect)((() => {
        if (!az) return;
        const zz = setTimeout((() => {
          Vz(null)
        }), 8e3);
        return () => {
          clearTimeout(zz)
        }
      }), [az]);
      const jz = tz.superRankInfo,
        Iz = tz.isLoggedIn() || (0, gz.guestsMayBuy)(),
        Bz = tz.getOwnedCosmeticPacks(),
        Cz = (0, Xi.l)(pz.query),
        kz = (0, Xi.f)({
          mode: Cz,
          loggedIn: Hz ? Iz : null,
          superRankInfo: jz,
          now: Date.now(),
          ownedPacks: Bz,
          packs: ti.p,
          recipient: pz.recipient
        });
      (0, Ez.useEffect)((() => {
        if (!Iz || !nz) return;
        const zz = (0, cz.y)(),
          uz = zz && (0, Xi.j)(zz, ti.p);
        zz && uz && ((0, Yz.reportAnalyticsClick)({
          id: "store.login_resume",
          value: zz.item
        }), (0, cz.o)(uz))
      }), [Iz, nz]);
      const zu = (0, Xi.p)({
        superRankDaysLeft: kz.superRankDaysLeft,
        openedThisSession: ql || nz,
        seenNewItems: (0, cz.j)()
      });
      if ((0, Ez.useEffect)((() => {
          (0, cz.x)(zu)
        }), [zu]), !nz || !(0, gz.purchasesAllowed)()) return null;
      const uu = Zz > dz && dz <= 700,
        bu = !uu && Zz <= 420,
        Eu = "gift" === Cz ? hl(pz.recipient) : null,
        nu = null !== Az;

      function iu(zz) {
        (0, di.b)(zz, "gift" === Cz ? pz.query.trim() : null)
      }

      function lu(zz, uz) {
        (0, Yz.reportAnalyticsClick)({
          id: "store.purchase_done",
          value: `${uz?"gift":"self"}:${zz}`
        }), uz && (pz.recordGift(uz.name, zz), tu(uz))
      }

      function tu(zz) {
        ! function(zz) {
          try {
            Wu.g.setItem(fi, (0, Xi.x)(ri(), zz))
          } catch {}
        }({
          name: zz.name,
          cosmetics: zz.cosmetics
        }), Xz(ml), Vz((uz => {
          var bz;
          return {
            name: zz.name,
            seq: (null !== (bz = null === uz || void 0 === uz ? void 0 : uz.seq) && void 0 !== bz ? bz : 0) + 1
          }
        }))
      }
      async function Hu(zz) {
        var uz, bz;
        if (yz.current) return;
        if (!Iz) return void iu(zz);
        Gz(null), hz(null);
        const Ez = "gift" === Cz ? {
          name: hl(pz.recipient),
          cosmetics: pz.recipientCosmetics
        } : null;
        if (Ez && !Ez.name) return void ez();
        const nz = "superRank" === zz ? mz.h.id : (0, mz.d)(zz);
        yz.current = !0;
        const iz = await (0, wi.e)(nz, null !== (uz = null === Ez || void 0 === Ez ? void 0 : Ez.name) && void 0 !== uz ? uz : null);
        if (yz.current = !1, !iz) return;
        Lz(zz);
        const lz = await Fi.e.purchase(nz, null !== (bz = null === Ez || void 0 === Ez ? void 0 : Ez.name) && void 0 !== bz ? bz : null);
        Lz(null), lz ? Gz(lz) : (lu(zz, Ez), Ez || (await (0, Zi.flushClientAnalyticsEvents)(), (0, Oi.refreshWithoutConfirmation)("superRank" === zz ? "/super-rank-welcome" : `/pack-welcome/${zz}`)))
      }
      const Ou = iz()("Store", {
        StoreGift: "gift" === Cz,
        StorePortrait: uu,
        StoreCompact: bu
      });
      if ("pack" === Kz.kind) {
        const zz = Kz.pack,
          uz = kz.packs.find((uz => uz.pack === zz));
        return (0, Oz.jsx)("div", {
          ref: Uz,
          className: "CosmeticShopContainer",
          children: (0, Oz.jsx)(Ki.d, {
            pack: zz,
            onBack: () => {
              Xz(ml)
            },
            onPurchased: uz => {
              lu(zz, uz ? {
                name: uz,
                cosmetics: null
              } : null)
            },
            giftCta: "gift" === Cz && Eu && uz && (0, Oz.jsxs)(Oz.Fragment, {
              children: [(0, Oz.jsx)(bl, {
                state: uz.state,
                item: zz,
                price: (pu = zz, "superRank" === pu ? mz.h.price : (0, mz.f)(pu)),
                busy: nu,
                onAct: () => {
                  Hu(zz)
                },
                onNeedRecipient: () => {
                  Xz(ml), ez()
                },
                onLogin: () => {
                  iu(zz)
                },
                highlight: qz === zz
              }), Pz && (0, Oz.jsx)("span", {
                className: "CosmeticShopGiftError SmallTextBold",
                children: Mz(Pz)
              })]
            }),
            ownedPacks: Bz,
            startAsGift: "gift" === Cz,
            initialGiftRecipient: "gift" === Cz ? null !== Eu && void 0 !== Eu ? Eu : pz.query.trim() : "",
            highlightCta: qz === zz
          }, zz)
        })
      }
      var pu;
      return "superRank" === Kz.kind ? (0, Oz.jsx)("div", {
        ref: Uz,
        className: iz()(Ou, "StoreDetailView"),
        children: (0, Oz.jsx)(xl, {
          state: kz.superRank.state,
          mode: Cz,
          giftName: Eu,
          busy: nu,
          highlight: "superRank" === qz,
          purchaseError: Pz,
          onBack: () => {
            Xz(ml)
          },
          onChooseRecipient: () => {
            Xz(ml), ez()
          },
          onAct: () => {
            Hu("superRank")
          },
          onLogin: () => {
            iu("superRank")
          }
        })
      }) : (0, Oz.jsxs)("div", {
        ref: Uz,
        className: Ou,
        children: [(0, Oz.jsx)("div", {
          className: "StoreTopRow",
          children: (0, Oz.jsx)(qi, {
            selfName: Hz ? tz.getPlayerName() : "",
            giftRecipient: pz,
            suggestionsVersion: null !== (uz = null === az || void 0 === az ? void 0 : az.seq) && void 0 !== uz ? uz : 0,
            pulseSignal: xz,
            disabled: nu || !Hz
          })
        }), az && (0, Oz.jsxs)("div", {
          className: "StoreNotice StoreNoticeGiftSent",
          onClick: () => {
            Vz(null)
          },
          children: [(0, Oz.jsx)(Ri.c, {
            showSignal: az.seq
          }), Xi.b, " ", Mz("store:giftSent", {
            name: az.name
          })]
        }, az.seq), !az && Pz && (0, Oz.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: Mz(Pz)
        }), (0, Oz.jsx)(vl, {
          layout: kz,
          mountAtOnce: null !== Sz.current,
          bundleGift: "gift" === Cz ? {
            recipientName: Eu,
            lookingUp: "pending" === pz.recipient.status,
            busy: nu,
            onNeedRecipient: ez,
            onSent: zz => {
              (0, Yz.reportAnalyticsClick)({
                id: "store.purchase_done",
                value: "gift:superGems"
              }), tu({
                name: zz,
                cosmetics: pz.recipientCosmetics
              })
            }
          } : null,
          superRankTotalDays: (0, Xi.s)(jz),
          busy: nu,
          highlightItem: qz,
          onOpen: function(zz) {
            (0, Yz.reportAnalyticsClick)({
              id: "store.item_open",
              value: zz
            }), Xz((0, cz.f)(zz))
          },
          onAct: Hu,
          onNeedRecipient: ez,
          onLogin: iu
        }), "gift" !== Cz && (0, Oz.jsx)(al, {})]
      })
    }));
    var cl = bz(2527),
      gl = bz(8519),
      Sl = bz(2594),
      yl = bz(2442),
      Dl = bz(2493),
      Ql = bz(2503),
      Wl = bz(2510),
      el = bz(2584),
      jl = bz(2558),
      Il = bz(2253),
      Bl = bz(2276),
      Cl = bz(2264),
      Yl = bz(1968),
      kl = bz(2516),
      zM = bz(2284);

    function uM(zz) {
      let {
        show: uz
      } = zz;
      return uz ? (0, Oz.jsx)(bM, {}) : null
    }

    function bM() {
      const {
        t: zz
      } = (0, lz.F)(), {
        followsLeader: uz
      } = (0, yl.f)(), {
        loading: bz,
        friends: nz,
        requests: tz,
        invites: Hz
      } = (0, yz.l)(), {
        userContext: pz
      } = (0, Fz.c)(), [dz, Zz] = (0, Ez.useState)(zM.h);
      (0, Ez.useEffect)((() => {
        (0, zM.b)()
      }), []);
      const Rz = tz.map((zz => zz.name)),
        {
          state: wz,
          recentRequesters: Xz
        } = (0, jl.j)(),
        fz = new Map([...("loaded" === wz.status ? wz.recentPlayers : []).map((zz => [zz.preview.name, zz])), ...Xz.map((zz => [zz.name, zz]))]),
        sz = (0, Ez.useRef)(null),
        [Nz, vz] = (0, Ez.useState)(""),
        [xz, Jz] = (0, Ez.useState)("Enter"),
        [Az, Tz] = (0, Ez.useState)(null);

      function Lz() {
        Nz && (Jz("Loading"), (0, Cl.f)(Nz, "social_menu").then((zz => {
          if (sz.current) switch (zz.kind) {
            case "sent":
              Jz("Success");
              break;
            case "becameFriends":
              Jz("BecameFriends");
              break;
            case "failed":
              Tz(zz.message), Jz("Error")
          }
        })))
      }
      return (0, Ez.useEffect)((() => {
        if ("Enter" === xz || "Loading" === xz) return;
        const zz = setTimeout((() => {
          sz.current.value = "", vz(""), Jz("Enter")
        }), "Success" === xz ? 1e3 : 4e3);
        return () => {
          clearTimeout(zz)
        }
      }), [xz]), (0, Oz.jsx)("div", {
        className: "SocialMenu",
        children: (0, Oz.jsxs)("div", {
          className: "SocialMenuInner",
          children: [(0, Oz.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, Oz.jsxs)("div", {
              className: "SocialMenuBox SocialMenuAddFriend",
              children: [(0, Oz.jsx)(Wl.c, {
                label: zz("socialBar:addFriend")
              }), (0, Oz.jsxs)("div", {
                className: "AddFriendBody",
                children: [(0, Oz.jsxs)("div", {
                  className: iz()("AddFriendBodyOverlay", {
                    [`AddFriendBodyOverlay${xz}`]: !0
                  }),
                  children: ["Loading" === xz && (0, Oz.jsx)(oz.c, {}), "Success" === xz && (0, Oz.jsx)(Mz.c, {
                    name: "check"
                  }), "BecameFriends" === xz && (0, Oz.jsx)(Oz.Fragment, {
                    children: zz("socialBar:nowFriends", {
                      playerName: Nz
                    })
                  }), "Error" === xz && Az && (0, Oz.jsx)(Oz.Fragment, {
                    children: zz(Az.translationKey, Az.params)
                  })]
                }), (0, Oz.jsxs)("div", {
                  className: "PlayerSearch",
                  children: [(0, Oz.jsx)(rz.d, {
                    className: "PlayerSearchInput",
                    placeholderText: zz("socialBar:enterPlayerName"),
                    domRef: sz,
                    onValueChange: zz => {
                      vz((0, az.p)(zz)), sz.current.value = (0, az.p)(zz)
                    },
                    onEnter: () => {
                      Nz && (0, Yz.reportAnalyticsClick)({
                        id: "social.add_friend",
                        value: "social_menu"
                      }), Lz()
                    }
                  }), (0, Oz.jsxs)(Kz.f, {
                    className: "PlayerSearchInputButton SmallTextLight",
                    onClick: () => {
                      Lz()
                    },
                    analyticsClick: {
                      id: "social.add_friend",
                      value: "social_menu"
                    },
                    children: [(0, Oz.jsx)(Mz.c, {
                      name: "user-plus"
                    }), " ", zz("socialBar:sendRequest")]
                  })]
                })]
              }), (0, Oz.jsx)(kl.d, {
                surface: "social_menu",
                prefetchOnMount: !0
              })]
            }), Hz.length > 0 && (0, Oz.jsxs)("div", {
              className: "SocialMenuBox SocialMenuInvites",
              children: [(0, Oz.jsx)(Wl.c, {
                label: zz("socialBar:invites"),
                meta: Hz.length
              }), Hz.map((uz => (0, Oz.jsxs)("div", {
                className: "SocialMenuInvite",
                children: [(0, Oz.jsx)("div", {
                  className: "SocialMenuInviteIcon",
                  children: (0, Oz.jsx)(Il.e, {
                    invite: uz
                  })
                }), (0, Oz.jsx)("div", {
                  className: "SocialMenuInviteText",
                  children: (0, Oz.jsx)(Il.i, {
                    invite: uz
                  })
                }), (0, Oz.jsx)(Kz.q, {
                  className: "SocialMenuInviteJoin SmallTextLight",
                  onClick: () => {
                    (0, Bl.f)(uz)
                  },
                  analyticsClick: {
                    id: "social.accept_invite",
                    value: `social_menu:${uz.destination.kind}`
                  },
                  children: zz("general:join")
                }), (0, Oz.jsx)(Iz.f, {
                  tooltipInner: (0, Oz.jsx)(Oz.Fragment, {
                    children: zz("general:decline")
                  }),
                  delayShow: 0,
                  children: (0, Oz.jsx)(Kz.j, {
                    className: "SocialMenuInviteDecline",
                    padDefaultFocus: "invite" === (null === dz || void 0 === dz ? void 0 : dz.kind) && dz.inviteId === uz.id,
                    onClick: () => {
                      yz.b.declineInvite(uz.id)
                    },
                    analyticsClick: {
                      id: "social.decline_invite",
                      value: `social_menu:${uz.destination.kind}`
                    },
                    children: (0, Oz.jsx)(Mz.c, {
                      name: "xmark"
                    })
                  })
                })]
              }, uz.id)))]
            }), (0, Oz.jsxs)("div", {
              className: iz()("SocialMenuBox SocialMenuRequests", {
                SocialMenuBoxEmpty: !bz && 0 === tz.length
              }),
              children: [(0, Oz.jsx)(Wl.c, {
                label: (0, Oz.jsxs)(Oz.Fragment, {
                  children: [(0, Oz.jsx)(Mz.c, {
                    name: Yl.f
                  }), " ", zz("socialBar:requests")]
                }),
                meta: (0, Oz.jsxs)(Oz.Fragment, {
                  children: [tz.length, tz.length === Bz.p && (0, Oz.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: zz("socialBar:limitReached")
                  })]
                })
              }), bz && (0, Oz.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, Oz.jsx)(oz.c, {})
              }), !bz && 0 === tz.length && (0, Oz.jsx)("div", {
                className: "SocialMenuEmpty",
                children: zz("socialBar:noFriendRequests")
              }), !bz && tz.length > 0 && (0, Oz.jsx)("div", {
                className: "PlayerRows",
                children: (0, Oz.jsx)(Fn.b, {
                  lazyLoadedClassName: "SocialMenuRequestsLazy",
                  observerUpdateDeps: [tz],
                  children: tz.map(((uz, bz) => {
                    const Ez = fz.get(uz.name);
                    return (0, Oz.jsxs)(Ql.d, {
                      playerSocialPreview: uz,
                      zIndex: tz.length - bz,
                      padDefaultFocus: (0, zM.e)(dz, uz.name, bz),
                      status: Ez && (0, Oz.jsx)(el.b, {
                        gameNameWithVariation: Ez.gameNameWithVariation,
                        isPrivateLobby: Ez.isPrivateLobby
                      }),
                      children: [(0, Oz.jsx)(Iz.f, {
                        tooltipInner: (0, Oz.jsx)(Oz.Fragment, {
                          children: zz("general:accept")
                        }),
                        delayShow: 0,
                        children: (0, Oz.jsx)(Kz.f, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            Zz((0, zM.c)(Rz, bz)), (0, Cl.c)(uz.name, !0, {
                              source: "social_menu",
                              announceFriend: !1
                            })
                          },
                          analyticsClick: {
                            id: "social.accept_friend_request",
                            value: "social_menu"
                          },
                          children: (0, Oz.jsx)(Mz.c, {
                            name: "check"
                          })
                        })
                      }), (0, Oz.jsx)(Iz.f, {
                        tooltipInner: (0, Oz.jsx)(Oz.Fragment, {
                          children: zz("general:decline")
                        }),
                        delayShow: 0,
                        children: (0, Oz.jsx)(Kz.j, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            Zz((0, zM.c)(Rz, bz)), (0, Cl.c)(uz.name, !1, {
                              source: "social_menu"
                            })
                          },
                          analyticsClick: {
                            id: "social.decline_friend_request",
                            value: "social_menu"
                          },
                          children: (0, Oz.jsx)(Mz.c, {
                            name: "xmark"
                          })
                        })
                      })]
                    }, `${uz.name}_${uz.isError}`)
                  }))
                })
              })]
            }), (0, Oz.jsx)(el.f, {})]
          }), (0, Oz.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, Oz.jsxs)("div", {
              className: "SocialMenuBox SocialMenuParty",
              children: [(0, Oz.jsx)(Wl.c, {
                label: zz("socialBar:party")
              }), (0, Oz.jsx)(Dl.b, {})]
            }), (0, Oz.jsxs)("div", {
              className: "SocialMenuBox SocialMenuFriends",
              children: [(0, Oz.jsx)(Wl.c, {
                label: (0, Oz.jsxs)(Oz.Fragment, {
                  children: [(0, Oz.jsx)(Mz.c, {
                    name: Yl.b
                  }), " ", zz("socialBar:friends")]
                }),
                meta: (0, Oz.jsxs)(Oz.Fragment, {
                  children: [nz.length, nz.length >= (0, Bz.c)(pz.getPlayerRanks()) && (0, Oz.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: zz("socialBar:limitReached")
                  })]
                })
              }), bz && (0, Oz.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, Oz.jsx)(oz.c, {})
              }), !bz && 0 === nz.length && (0, Oz.jsx)("div", {
                className: "SocialMenuEmpty",
                children: zz("socialBar:noFriends")
              }), !bz && nz.length > 0 && (0, Oz.jsx)("div", {
                className: "PlayerRows",
                children: (0, Oz.jsx)(Fn.b, {
                  lazyLoadedClassName: "SocialMenuFriendsLazy",
                  observerUpdateDeps: [nz],
                  children: nz.map(((zz, bz) => (0, Oz.jsx)(Ql.d, {
                    playerSocialPreview: zz,
                    isFriend: !0,
                    hideFriendBadge: !0,
                    onFriendRemoved: zz => {
                      yz.b.removeFriendFromState(zz)
                    },
                    zIndex: nz.length - bz,
                    children: (0, Oz.jsx)(Ql.b, {
                      friend: zz,
                      followsLeader: uz,
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
    var EM = bz(2419);
    const nM = zz => {
        let {
          action: uz,
          padAction: bz
        } = zz;
        const {
          isTouchScreen: Ez
        } = (0, vz.m)(["isTouchScreen"]), nz = (0, iE.p)();
        return Ez && !nz ? null : (0, Oz.jsx)(Yb.e, {
          className: "EverythingMenuTabKey",
          noaAction: uz,
          padHidesKey: !0,
          padMenuShortcut: bz
        })
      },
      iM = (0, Ez.memo)((function() {
        const {
          t: zz
        } = (0, lz.F)(), {
          gameState: uz,
          openEverythingMenuName: bz,
          initSdkSelectorFinished: nz,
          crosshairGameView: Mz
        } = (0, vz.m)(["gameState", "openEverythingMenuName", "initSdkSelectorFinished", "crosshairGameView"]), {
          userContext: tz
        } = (0, Fz.c)(), Hz = (0, gz.purchasesAllowed)(), pz = (0, cz.B)(), dz = (zz, uz) => (0, Oz.jsx)(nM, {
          action: zz,
          padAction: uz
        }), [Zz, Rz] = (0, Ez.useState)(null), Xz = (0, Ez.useRef)(null), fz = {
          ..."inGame" === uz ? {} : (0, Kz.ab)({
            focusOnClick: !1
          }),
          ...RE.i
        }, sz = null !== bz, rz = bz !== Hu.r.COSMETIC_SHOP && !Mz;
        async function oz() {
          await async function() {
            if (!Zz) return;
            await Zz(), Rz(null)
          }(), vz.e.set({
            openEverythingMenuName: null
          })
        }
        const Nz = (0, Ez.useMemo)((() => "inGame" === uz ? {
          text: zz("settingsMenu:exitGame"),
          onClick: () => {
            (0, gl.b)()
          }
        } : (0, Az.d)() ? {
          text: zz("settingsMenu:exitGame"),
          onClick: () => {
            iu.l.discordActivity().then((zz => {
              zz.exit("User exited the game")
            }))
          }
        } : null), [uz, zz]);
        const xz = (0, Oz.jsx)("div", {
          className: "EverythingMenuCloseButtonClickZone",
          onClick: () => {
            oz()
          },
          children: (0, Oz.jsx)(Kz.m, {
            className: "EverythingMenuCloseButton"
          })
        });
        return (0, Oz.jsx)(KE.d, {
          showing: sz,
          globallyUniqueKey: "EverythingMenu",
          alwaysMountChildren: !0,
          keepsMovement: bz === Hu.r.SHOP,
          doGameplayStartStopOnShow: "inGame" === uz,
          children: (0, Oz.jsx)(XE.e, {
            className: "EverythingMenuContainer",
            show: sz && !Mz,
            children: (0, Oz.jsx)(wE.d, {
              close: () => {
                oz()
              },
              togglePointerLock: !1,
              children: (0, Oz.jsxs)("div", {
                className: "EverythingMenu",
                children: [!(0, ni.f)(bz) && (0, Oz.jsxs)("div", {
                  className: "EverythingMenuTabList",
                  children: [(0, Oz.jsxs)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerStart",
                    children: [Nz && (0, Oz.jsx)(Kz.d, {
                      className: "EverythingMenuBackButton",
                      padDestructive: !0,
                      onClick: () => {
                        Nz.onClick()
                      },
                      children: Nz.text
                    }), sz && Hz && (0, Oz.jsx)("div", {
                      ...fz,
                      className: "EverythingMenuWallet",
                      title: zz("homePage:getPremiumCurrency"),
                      onClick: () => {
                        (0, cz.o)({
                          mode: "current",
                          source: "menuWallet"
                        })
                      },
                      children: (0, Oz.jsx)(cl.i, {})
                    })]
                  }), (0, Oz.jsxs)("div", {
                    className: "EverythingMenuTabListInner",
                    "data-pad-tabs": "1",
                    children: [(0, Oz.jsxs)("div", {
                      ...fz,
                      "data-pad-tab": !0,
                      "data-pad-selected": bz === Hu.r.SETTINGS ? "true" : void 0,
                      className: iz()("EverythingMenuTab", {
                        EverythingMenuTabActive: bz === Hu.r.SETTINGS
                      }),
                      onClick: () => {
                        vz.e.set({
                          openEverythingMenuName: Hu.r.SETTINGS
                        })
                      },
                      children: [zz("general:settings"), dz("OpenSettings", "pause")]
                    }), (0, Oz.jsxs)("div", {
                      ...fz,
                      "data-pad-tab": !0,
                      "data-pad-selected": bz === Hu.r.CUSTOMISATION ? "true" : void 0,
                      className: iz()("EverythingMenuTab", {
                        EverythingMenuTabActive: bz === Hu.r.CUSTOMISATION
                      }),
                      onClick: () => {
                        vz.e.set({
                          openEverythingMenuName: Hu.r.CUSTOMISATION
                        })
                      },
                      children: [zz("general:player"), dz("OpenCharacterCustomization")]
                    }), wz.featureFlags.useSocialFeatures && (0, Oz.jsxs)("div", {
                      ...fz,
                      "data-pad-tab": !0,
                      "data-pad-selected": bz === Hu.r.SOCIAL ? "true" : void 0,
                      className: iz()("EverythingMenuTab", {
                        EverythingMenuTabActive: bz === Hu.r.SOCIAL
                      }),
                      ...(0, Yz.d)({
                        id: "social.open_menu",
                        value: "menu_tab"
                      }, bz === Hu.r.SOCIAL),
                      onClick: () => {
                        vz.e.set({
                          openEverythingMenuName: Hu.r.SOCIAL
                        })
                      },
                      children: [zz("socialBar:social"), (0, Oz.jsx)(EM.e, {})]
                    }), Hz && (0, Oz.jsxs)("div", {
                      ...fz,
                      "data-pad-tab": !0,
                      "data-pad-selected": bz === Hu.r.COSMETIC_SHOP ? "true" : void 0,
                      className: iz()("EverythingMenuTab EverythingMenuTabCosmeticShop", {
                        EverythingMenuTabActive: bz === Hu.r.COSMETIC_SHOP
                      }),
                      onClick: () => {
                        vz.e.set({
                          openEverythingMenuName: Hu.r.COSMETIC_SHOP
                        })
                      },
                      children: [(0, Oz.jsx)("span", {
                        className: "EverythingMenuTabCosmeticShopText",
                        children: zz("store:title")
                      }), "new" === pz && (0, Oz.jsx)(dl, {}), "dot" === pz && (0, Oz.jsx)("span", {
                        className: "EverythingMenuTabStoreBadge EverythingMenuTabStoreDot"
                      })]
                    }), "inGame" === uz && (0, Oz.jsxs)("div", {
                      ...fz,
                      "data-pad-tab": !0,
                      "data-pad-selected": bz === Hu.r.LOBBY_LEADERBOARD ? "true" : void 0,
                      className: iz()("EverythingMenuTab", {
                        EverythingMenuTabActive: bz === Hu.r.LOBBY_LEADERBOARD
                      }),
                      onClick: () => {
                        vz.e.set({
                          openEverythingMenuName: Hu.r.LOBBY_LEADERBOARD
                        })
                      },
                      children: [zz("general:lobby"), dz("OpenLobbyLeaderboard", "leaderboard")]
                    })]
                  }), (0, Oz.jsx)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerEnd",
                    children: xz
                  })]
                }), (0, ni.f)(bz) && xz, (0, Oz.jsxs)("div", {
                  className: "EverythingMenuBody",
                  "data-pad-initial-area": !0,
                  style: {
                    "--everythingMenuBodyBackgroundOpacity": "inGame" === uz ? "0.85" : "1"
                  },
                  children: [(0, Oz.jsx)(OE, {
                    show: bz === Hu.r.SETTINGS,
                    setBeforeResumeCallback: Rz
                  }), (0, Oz.jsx)(ZE, {
                    show: bz === Hu.r.CUSTOMISATION
                  }), (0, Oz.jsx)(Ez.Suspense, {
                    fallback: null,
                    children: (0, Oz.jsx)(In, {
                      show: bz === Hu.r.SHOP
                    })
                  }), (0, Oz.jsx)(Mi, {
                    show: bz === Hu.r.LOBBY_LEADERBOARD
                  }), (0, Oz.jsx)(Ul, {
                    show: bz === Hu.r.COSMETIC_SHOP
                  }), (0, Oz.jsx)(uM, {
                    show: bz === Hu.r.SOCIAL
                  })]
                }), !(0, wz.isMobileApp)() && (0, fE.g)(tz.getPlayerRanks()) && (0, Oz.jsx)(XE.e, {
                  ref: Xz,
                  className: "EverythingMenuBannerDiv",
                  show: rz,
                  "data-pad-hint-bar-avoid": !0,
                  "data-pad-no-step-in": !0,
                  children: (0, Oz.jsx)(Sl.e, {
                    info: {
                      adId: 2,
                      adType: "leaderboard",
                      adAlias: "banner_shop"
                    },
                    sizeInfo: {
                      parentRef: Xz
                    },
                    showing: sz && rz,
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
  8987: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => iz
    });
    var Ez = bz(328),
      nz = bz(8994);

    function iz(zz, uz, bz) {
      const iz = Object.entries(uz).sort(((zz, uz) => uz[1] - zz[1])),
        lz = (0, Ez.vb)(zz);
      lz.push(zz ? "\n\n" : "\n");
      for (const [nz, Zz] of iz) {
        var Mz, tz, Hz;
        const zz = null !== (Mz = null === bz || void 0 === bz || null === (tz = bz[nz]) || void 0 === tz ? void 0 : tz.icon) && void 0 !== Mz ? Mz : `${nz} Enchantment`;
        lz.push({
          icon: zz,
          style: {
            fontSize: "1.5rem"
          }
        }), lz.push({
          str: `${nz} ${null!==(Hz=(0,Ez.X)(Zz))&&void 0!==Hz?Hz:Zz}\n`
        })
      }
      lz.push({
        str: "\n"
      });
      for (const [Ez, Zz] of iz) {
        var Oz, pz, dz, Fz;
        const zz = null !== (Oz = null === bz || void 0 === bz || null === (pz = bz[Ez]) || void 0 === pz ? void 0 : pz.icon) && void 0 !== Oz ? Oz : `${Ez} Enchantment`,
          uz = null !== (dz = null === bz || void 0 === bz || null === (Fz = bz[Ez]) || void 0 === Fz ? void 0 : Fz.description) && void 0 !== dz ? dz : (0, nz.i)(Ez);
        lz.push({
          icon: zz,
          style: {
            fontSize: "1.25rem",
            opacity: .75
          }
        }), lz.push({
          str: uz,
          style: {
            fontSize: "0.8em",
            fontWeight: "normal",
            opacity: .75
          }
        }), lz.push({
          str: "\n"
        })
      }
      return lz
    }
  },
  8999: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Hz,
      d: () => Xz,
      h: () => Kz,
      i: () => tz,
      m: () => wz,
      p: () => Oz,
      q: () => dz,
      t: () => Rz,
      w: () => pz
    });
    var Ez = bz(316),
      nz = bz(588),
      iz = bz(328),
      lz = bz(4027),
      Mz = bz(8987);

    function tz(zz, uz) {
      var bz;
      let {
        player: Ez,
        chestOrCreative: nz
      } = zz;
      var iz;
      return uz < Ez.length ? null !== (iz = Ez[uz]) && void 0 !== iz ? iz : null : null !== (bz = nz[uz - Ez.length]) && void 0 !== bz ? bz : null
    }

    function Hz(zz) {
      var uz;
      return null !== (uz = zz.amount) && void 0 !== uz ? uz : 0
    }

    function Oz(zz) {
      return 0 === zz.button || void 0 === zz.button
    }

    function pz(zz) {
      return !!zz.shiftKey
    }

    function dz(zz) {
      return "touches" in zz || "touch" === zz.pointerType || "pen" === zz.pointerType
    }
    const Fz = new Set,
      Zz = 50;

    function Rz(zz, uz) {
      var bz;
      const Ez = null === (bz = zz[uz]) || void 0 === bz ? void 0 : bz.displayName;
      return (0, nz.F)(Ez) ? "string" !== typeof uz ? "" : (!Fz.has(uz) && Fz.size < Zz && (Fz.add(uz), console.warn(`No item called "${uz}", so its hover shows the name as given`)), uz) : Ez
    }

    function Kz(zz, uz, bz) {
      var tz, Hz, Oz, pz, dz, Fz, Zz, Kz, wz, Xz, fz, sz, rz, oz;
      const Nz = zz.attributes,
        vz = null !== (tz = null === (Hz = uz[zz.name]) || void 0 === Hz ? void 0 : Hz.rootName) && void 0 !== tz ? tz : zz.name,
        xz = null !== (Oz = null !== (pz = Nz.customDisplayName) && void 0 !== pz ? pz : null === (dz = uz[zz.name]) || void 0 === dz ? void 0 : dz.displayName) && void 0 !== Oz ? Oz : Rz(uz, vz);
      let Jz = xz;
      const Az = null === (Fz = Nz.customAttributes) || void 0 === Fz ? void 0 : Fz.enchantmentTier;
      Az && (Jz = (0, iz.vb)(xz, {
        colour: iz.rb[Az]
      }));
      const Tz = null !== (Zz = null !== (Kz = null !== (wz = function(zz, uz) {
        var bz;
        if (void 0 === zz || null !== (bz = uz.customAttributes) && void 0 !== bz && bz.author) return zz;
        const nz = (0, Ez.uc)(zz);
        return nz.every((zz => "string" === typeof zz)) ? zz : nz.map((zz => "string" === typeof zz ? zz : {
          icon: zz.icon,
          style: {
            fontSize: "1.5em"
          }
        }))
      }(Nz.customDescription, Nz)) && void 0 !== wz ? wz : null === (Xz = uz[zz.name]) || void 0 === Xz ? void 0 : Xz.description) && void 0 !== Kz ? Kz : null === (fz = uz[vz]) || void 0 === fz ? void 0 : fz.description) && void 0 !== Zz ? Zz : "";
      let Lz = Tz;
      if (null !== (sz = Nz.customAttributes) && void 0 !== sz && sz.enchantments) Lz = (0, Mz.c)(Tz, Nz.customAttributes.enchantments, Nz.customAttributes.enchantmentData);
      else if (bz[vz]) Lz = (0, iz.vb)(Tz), Lz.push({
        str: "\n"
      }), Lz.push({
        str: "Enchantable",
        style: {
          fontSize: "0.8em",
          fontWeight: "normal",
          opacity: .4
        }
      });
      else if (null !== (rz = Nz.customAttributes) && void 0 !== rz && rz.mobSettings) {
        var Pz, Gz;
        const zz = Nz.customAttributes.mobSettings;
        var az, Vz;
        if (Lz = [], (0, nz.F)(Nz.customAttributes.health) || (Lz.push({
            str: "\n"
          }), Lz.push({
            icon: "Health",
            style: {
              fontSize: "1.5em"
            }
          }), Lz.push({
            str: " "
          }), Lz.push({
            str: Nz.customAttributes.health.toString()
          }), (0, nz.F)(zz.maxHealth) || (Lz.push({
            str: "/"
          }), Lz.push({
            str: zz.maxHealth.toString()
          }))), !(0, nz.F)(zz.attackDamage) && zz.attackDamage > 0 && (Lz.push({
            str: "\n"
          }), Lz.push({
            icon: "Iron Sword",
            style: {
              fontSize: "1.5em"
            }
          }), Lz.push({
            str: " "
          }), Lz.push({
            str: zz.attackDamage.toString()
          })), !(0, nz.F)(zz.secondaryAttackDamage) && zz.secondaryAttackDamage > 0 && (Lz.push({
            str: "\n"
          }), Lz.push({
            icon: "Stone Crossbow",
            style: {
              fontSize: "1.5em"
            }
          }), Lz.push({
            str: " "
          }), Lz.push({
            str: zz.secondaryAttackDamage.toString()
          })), (0, nz.F)(zz.baseRunningSpeed) || (Lz.push({
            str: "\n"
          }), Lz.push({
            icon: "Speed",
            style: {
              fontSize: "1.5em"
            }
          }), Lz.push({
            str: " "
          }), Lz.push({
            str: zz.baseRunningSpeed.toFixed(2)
          })), "Saddled" === zz.metaInfo) Lz.push({
          str: "\n"
        }), Lz.push({
          str: {
            translationKey: "general:has"
          }
        }), Lz.push({
          str: " "
        }), Lz.push({
          icon: null !== (az = null === (Vz = zz.tameInfo) || void 0 === Vz ? void 0 : Vz.saddleItemName) && void 0 !== az ? az : "Saddle",
          style: {
            fontSize: "1.5em"
          }
        });
        if (Lz.push({
            str: "\n"
          }), Lz.push({
            str: "\n"
          }), zz.petInfo && null !== (Pz = zz.tameInfo) && void 0 !== Pz && Pz.supportsFriendship) {
          const uz = lz.d.getIconsFromFriendshipPoints(zz.petInfo.friendshipPoints);
          for (const zz of uz) Lz.push({
            icon: zz,
            style: {
              fontSize: "1.5em"
            }
          });
          Lz.push({
            str: "\n"
          });
          const bz = lz.d.getMobHungerLevel(zz.petInfo.lastFedAt);
          for (const zz of lz.d.hungerLevelIcons[bz]) Lz.push({
            icon: zz,
            style: {
              fontSize: "1.5em"
            }
          });
          Lz.push({
            str: " "
          }), Lz.push({
            str: lz.d.hungerLevelTranslations[bz],
            style: {
              fontWeight: "bolder"
            }
          })
        }
        if (zz.tameInfo && null !== (Gz = zz.tameInfo) && void 0 !== Gz && Gz.supportsFriendship) {
          var mz, qz;
          let uz = null !== (mz = zz.tameInfo.likedFoods) && void 0 !== mz ? mz : [];
          Lz.push({
            str: "\n"
          }), Lz.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: lz.d.feedTextColours[lz.d.MobFoodType.Superliked]
            }
          }), Lz.push({
            str: " "
          }), null !== (qz = zz.petInfo) && void 0 !== qz && qz.superlikedFoodKnown ? (Lz.push({
            icon: zz.petInfo.superlikedFood,
            style: {
              fontSize: "1.5em"
            }
          }), uz = uz.filter((uz => uz !== zz.petInfo.superlikedFood))) : Lz.push({
            icon: "Question Mark",
            style: {
              fontSize: "1.5em"
            }
          }), Lz.push({
            str: "\n"
          }), Lz.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: lz.d.feedTextColours[lz.d.MobFoodType.Liked]
            }
          }), Lz.push({
            str: " "
          });
          for (const zz of uz) Lz.push({
            icon: zz,
            style: {
              fontSize: "1.5em"
            }
          });
          Lz.push({
            str: "\n"
          }), Lz.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: lz.d.feedTextColours[lz.d.MobFoodType.Neutral]
            }
          }), Lz.push({
            str: " "
          });
          for (const bz of null !== (hz = zz.tameInfo.neutralFoods) && void 0 !== hz ? hz : []) {
            var hz;
            Lz.push({
              icon: bz,
              style: {
                fontSize: "1.5em"
              }
            })
          }
          Lz.push({
            str: "\n"
          }), Lz.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: lz.d.feedTextColours[lz.d.MobFoodType.Disliked]
            }
          }), Lz.push({
            str: " "
          });
          for (const bz of null !== (Uz = zz.tameInfo.dislikedFoods) && void 0 !== Uz ? Uz : []) {
            var Uz;
            Lz.push({
              icon: bz,
              style: {
                fontSize: "1.5em"
              }
            })
          }
        }
        Lz.length > 0 ? (Lz.shift(), Lz.unshift(...(0, iz.vb)(Tz))) : Lz = (0, iz.vb)(Tz)
      }
      return {
        name: Jz,
        desc: Lz,
        fontStyle: null !== (oz = Nz.customAttributes) && void 0 !== oz && oz.author ? "italic" : "normal"
      }
    }

    function wz(zz, uz, bz, Ez) {
      const nz = tz(zz, bz),
        iz = tz(zz, Ez);
      if (!nz) return !1;
      const lz = uz[nz.name].armourReduction,
        Mz = uz[iz.name].armourReduction;
      if (Mz === lz) {
        var Hz, Oz, pz, dz;
        const zz = null !== (Hz = null === (Oz = nz.attributes.customAttributes) || void 0 === Oz ? void 0 : Oz.enchantmentTier) && void 0 !== Hz ? Hz : "Tier 0",
          uz = null !== (pz = null === (dz = iz.attributes.customAttributes) || void 0 === dz ? void 0 : dz.enchantmentTier) && void 0 !== pz ? pz : "Tier 0";
        return parseInt(zz.replace("Tier ", "")) >= parseInt(uz.replace("Tier ", ""))
      }
      return lz > Mz
    }

    function Xz(zz) {
      let uz;
      if ("number" === typeof zz) {
        const bz = document.querySelector(`[data-inven-idx="${zz}"]`);
        if (!bz) return null;
        uz = bz.getBoundingClientRect()
      } else uz = zz.getBoundingClientRect();
      return {
        x: uz.left + uz.width / 2,
        y: uz.top + uz.height / 2
      }
    }
  },
  8892: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Fz,
      e: () => Zz,
      g: () => Rz
    });
    var Ez = bz(1419),
      nz = bz(56),
      iz = bz(1283),
      lz = bz(4292),
      Mz = bz(2256),
      tz = bz(1181),
      Hz = bz(96),
      Oz = bz(1912),
      pz = bz(1305),
      dz = bz(1089);

    function Fz(zz) {
      let {
        show: uz,
        onClose: bz
      } = zz;
      const {
        requestedGameNameWithVariation: Ez,
        lobbyName: nz,
        shownLobbyName: iz
      } = (0, Oz.h)("connectedGame"), tz = (0, Mz.b)(Ez, nz, !1);
      return Hz.featureFlags.canUseInviteLinks && (0, dz.jsx)(lz.d, {
        show: uz,
        close: bz,
        padShowsHud: !0,
        togglePointerLock: !1,
        globallyUniqueKey: "InviteLinkBox",
        doGameplayStartStopOnShow: !0,
        children: (0, dz.jsxs)("div", {
          className: "InviteLinkBox AnimFadeInScaleUp",
          children: [(0, dz.jsx)("div", {
            className: "InviteLinkBoxHeader SmallTextBold",
            children: "Invite Friends"
          }), (0, dz.jsxs)("div", {
            className: "InviteLinkBoxDescription SmallTextLight",
            children: [(0, dz.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: '"Join Lobby Name" Button Info'
            }), "Game: ", null === tz ? (0, dz.jsx)(pz.c, {}) : tz, (0, dz.jsx)("br", {}), "Lobby Name: ", iz, (0, dz.jsx)("br", {}), (0, dz.jsx)("br", {}), (0, dz.jsx)("br", {}), (0, dz.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: "Link"
            })]
          }), (0, dz.jsx)(Zz, {})]
        })
      })
    }

    function Zz() {
      var zz;
      const {
        t: uz
      } = (0, tz.F)(), bz = null !== (zz = Rz(Hz.featureFlags.canUseInviteLinks)) && void 0 !== zz ? zz : "Loading Link...", [iz, lz] = (0, nz.useState)(0), [Mz, Oz] = (0, nz.useReducer)((zz => zz + 1), 0);
      return (0, nz.useEffect)((() => {
        const zz = setTimeout((() => {
          Oz()
        }), 1100);
        return () => {
          clearTimeout(zz)
        }
      }), [iz]), Hz.featureFlags.canUseInviteLinks && (0, dz.jsxs)("div", {
        className: "InviteLinkInnerWrapper",
        children: [(0, dz.jsx)("div", {
          className: "InviteLinkInner",
          children: bz
        }), (0, dz.jsx)(Ez.f, {
          className: "InviteLinkCopyButton",
          onClick: () => {
            navigator.clipboard.writeText(bz).catch((zz => {
              console.error("Failed to copy invite link:", zz)
            })), lz(Date.now())
          },
          disabled: Date.now() - iz < 1e3,
          children: Date.now() - iz < 1e3 ? uz("general:copied") : uz("general:copy")
        })]
      })
    }

    function Rz(zz) {
      const [uz, bz] = (0, nz.useState)(null);
      return (0, nz.useEffect)((() => {
        if (!zz) return;
        let uz = !0;
        return (0, iz.v)().then((zz => {
          uz && bz(zz)
        })).catch((zz => {
          console.error("Failed to get invite link:", zz)
        })), () => {
          uz = !1
        }
      }), [zz]), uz
    }
  },
  8979: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Hz
    });
    var Ez = bz(56),
      nz = bz(1038),
      iz = bz.n(nz),
      lz = bz(1912),
      Mz = bz(1089);

    function tz(zz) {
      const uz = Math.floor(zz / 3600),
        bz = Math.floor(zz % 3600 / 60),
        Ez = Math.floor(zz % 60),
        nz = `${bz.toString().padStart(2,"0")}:${Ez.toString().padStart(2,"0")}`;
      return uz > 0 ? `${uz}:${nz}` : nz
    }
    const Hz = (0, Ez.memo)((function(zz) {
      let {
        className: uz
      } = zz;
      const {
        recording: bz,
        seconds: Ez
      } = (0, lz.h)("replayRecorder");
      return bz ? (0, Mz.jsxs)("div", {
        className: iz()("RecordingIndicator", uz),
        children: [(0, Mz.jsx)("span", {
          className: "RecordingIndicatorDot"
        }), (0, Mz.jsx)("span", {
          className: "RecordingIndicatorLabel",
          children: "REC"
        }), (0, Mz.jsx)("span", {
          className: "RecordingIndicatorTime",
          children: tz(Ez)
        })]
      }) : null
    }))
  },
  4648: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Kz
    });
    var Ez = bz(1038),
      nz = bz.n(Ez),
      iz = bz(4393),
      lz = bz(1181),
      Mz = bz(1047),
      tz = bz(1419),
      Hz = bz(1473),
      Oz = bz(1322),
      pz = bz(2384),
      dz = bz(1089);
    const Fz = {
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

    function Zz(zz) {
      let {
        platform: uz
      } = zz;
      const bz = "youtube" === uz;
      return (0, dz.jsxs)("span", {
        className: nz()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: bz
        }),
        children: [bz && (0, dz.jsx)(pz.b, {
          variant: "white"
        }), !bz && (0, dz.jsx)(Mz.c, {
          name: Fz[uz].icon,
          kit: "brands"
        })]
      })
    }

    function Rz(zz) {
      let {
        platform: uz,
        link: bz,
        editable: Ez,
        userContext: nz,
        onLinksUpdated: pz
      } = zz;
      const {
        t: Rz
      } = (0, lz.F)(), Kz = Fz[uz];
      if (!bz && !Ez) return null;

      function wz() {
        var zz;
        if (!nz || !pz) return;
        Oz.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: Kz.name
            }
          },
          prefixText: iz.y[uz],
          placeholderText: "playBloxd",
          initialValue: null !== (zz = null === bz || void 0 === bz ? void 0 : bz.handle) && void 0 !== zz ? zz : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: bz ? "general:remove" : void 0
        }).getResult().then((async zz => {
          if ("notificationTornDown" !== zz && null !== zz) try {
            "submit" === zz.type ? await Hz.c.setSocialLink(nz, uz, zz.value) : await Hz.c.clearSocialLink(nz, uz), pz()
          } catch (bz) {
            console.error("Failed to update social link", bz), Oz.NotificationProvider.showAlertPopup({
              title: bz.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (bz) {
        const zz = `@${bz.handle}`;
        return (0, dz.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: Kz.color
          },
          href: bz.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, dz.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, dz.jsx)(Zz, {
              platform: uz
            }), (0, dz.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, dz.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: zz
              })
            })]
          }), Ez && (0, dz.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, tz.ab)({
              stopPropagation: !0
            }),
            onClick: zz => {
              zz.stopPropagation(), zz.preventDefault(), wz()
            },
            children: (0, dz.jsx)(Mz.c, {
              name: "pen-to-square"
            })
          }), !Ez && (0, dz.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, dz.jsx)(Mz.c, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, dz.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: Kz.color
        },
        ...(0, tz.ab)(),
        onClick: () => {
          wz()
        },
        children: [(0, dz.jsx)(Zz, {
          platform: uz
        }), (0, dz.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, dz.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: Kz.name
          }), (0, dz.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: Rz("homePage:profileSocialLinkAdd")
          })]
        }), (0, dz.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, dz.jsx)(Mz.c, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function Kz(zz) {
      let {
        socialLinks: uz,
        editable: bz = !1,
        userContext: Ez,
        onLinksUpdated: nz
      } = zz;
      if (!bz && 0 === uz.length) return null;
      const lz = new Map(uz.map((zz => [zz.platform, zz]))),
        Mz = bz ? iz.w : uz.map((zz => zz.platform));
      return (0, dz.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, dz.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: Mz.map((zz => (0, dz.jsx)(Rz, {
            platform: zz,
            link: lz.get(zz),
            editable: bz,
            userContext: Ez,
            onLinksUpdated: nz
          }, zz)))
        })
      })
    }
  },
  8982: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => iz
    });
    var Ez = bz(4298),
      nz = bz(4300);

    function iz(zz) {
      let {
        children: uz,
        showing: bz,
        globallyUniqueKey: iz,
        alwaysMountChildren: lz = !1,
        doGameplayStartStopOnShow: Mz = !0,
        keepsMovement: tz = !1
      } = zz;
      return (0, nz.e)(!0, bz, iz, tz), (0, Ez.d)(Mz, bz), bz || lz ? uz : null
    }
  },
  9035: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => iz
    });
    var Ez = bz(56),
      nz = bz(3332);

    function iz() {
      const [zz, uz] = (0, Ez.useState)(!1);
      return (0, Ez.useLayoutEffect)((() => {
        let zz = !0;
        return (0, nz.e)().then((() => {
          zz && uz(!0)
        })), () => {
          zz = !1
        }
      }), []), zz
    }
  },
  6291: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => iz
    });
    var Ez = bz(56),
      nz = bz(33);

    function iz(zz, uz) {
      var bz;
      const [iz, lz] = (0, Ez.useState)(null !== (bz = nz.g.getItem(zz)) && void 0 !== bz ? bz : uz);
      return [iz, uz => {
        nz.g.setItem(zz, uz), lz(uz)
      }]
    }
  },
  8954: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => dz,
      g: () => pz
    });
    bz(8957);
    var Ez = bz(1038),
      nz = bz.n(Ez),
      iz = bz(56),
      lz = bz(8928);

    function Mz(zz, uz) {
      return Math.max(1, Math.round(zz * uz))
    }

    function tz(zz, uz, bz) {
      const Ez = 2 * bz >= uz - 1;
      return {
        x: zz,
        y: zz,
        size: uz,
        border: Math.min(bz, Math.floor(uz / 2)),
        filled: Ez
      }
    }
    var Hz = bz(1089);
    const Oz = 1.4;

    function pz(zz, uz) {
      return zz && uz ? `scale(${Oz})` : "scale(1)"
    }

    function dz(zz) {
      return "classic" === zz.settings.style ? (0, Hz.jsx)(Rz, {
        ...zz
      }) : (0, Hz.jsx)(oz, {
        ...zz
      })
    }
    const Fz = .125;

    function Zz(zz, uz) {
      const bz = {};
      if (zz.color !== lz.f.color && (bz.color = (0, lz.m)(zz.color)), zz.opacity !== lz.f.opacity && (bz.opacity = zz.opacity / 100), zz.outline !== lz.f.outline || zz.outlineColor !== lz.f.outlineColor) {
        const uz = zz.outline,
          Ez = (0, lz.m)(zz.outlineColor);
        bz.textShadow = uz > 0 ? `-${uz}px 0 ${Ez}, 0 ${uz}px ${Ez}, ${uz}px 0 ${Ez}, 0 -${uz}px ${Ez}` : "none"
      }
      if (zz.size !== lz.f.size) {
        const Ez = zz.size / 100;
        bz.fontSize = uz ? `calc(max(1.3rem, 18px) * ${Ez})` : `calc(1.3rem * ${Ez})`, bz.marginTop = `-${Fz}em`, bz.transformOrigin = `50% calc(50% + ${Fz}em)`
      }
      return bz
    }

    function Rz(zz) {
      let {
        settings: uz,
        touch: bz,
        inPreview: Ez,
        inEditor: iz,
        pressed: lz = !1,
        pressRef: Mz
      } = zz;
      return (0, Hz.jsx)("div", {
        className: nz()("Crosshair", {
          Touch: bz,
          CrosshairInPreview: Ez,
          CrosshairInEditor: iz || Ez
        }),
        ref: Mz,
        style: {
          transform: pz(lz, uz.growOnClick),
          ...Zz(uz, bz)
        },
        children: "+"
      })
    }

    function Kz(zz, uz) {
      return zz / uz + "px"
    }

    function wz(zz, uz, bz, Ez) {
      return {
        ...sz(zz, uz, bz),
        width: Kz(zz.w, bz),
        height: Kz(zz.h, bz),
        background: Ez
      }
    }

    function Xz(zz, uz, bz) {
      return {
        left: Kz(zz.x, uz),
        top: Kz(zz.y, uz),
        width: Kz(zz.size, uz),
        height: Kz(zz.size, uz),
        borderWidth: Kz(zz.border, uz),
        borderColor: bz,
        background: zz.filled ? bz : void 0
      }
    }
    const fz = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function sz(zz, uz, bz) {
      const [Ez, nz] = zz.arm ? fz[zz.arm] : [0, 0], iz = Math.round(uz * bz);
      return {
        left: Kz(zz.x + Ez * iz, bz),
        top: Kz(zz.y + nz * iz, bz)
      }
    }

    function rz(zz) {
      return zz.arm ? {
        "data-arm": zz.arm,
        "data-x": zz.x,
        "data-y": zz.y
      } : {}
    }

    function oz(zz) {
      let {
        settings: uz,
        inPreview: bz,
        inEditor: Ez,
        pressed: pz = !1,
        spread: dz,
        spreadRef: Fz
      } = zz;
      const Zz = (0, iz.useRef)(null),
        {
          box: Rz,
          dpr: Kz
        } = function(zz) {
          const [uz, bz] = (0, iz.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, iz.useLayoutEffect)((() => {
            const uz = zz.current;
            if (!uz) return;
            const Ez = () => {
              const zz = uz.getBoundingClientRect(),
                Ez = window.devicePixelRatio || 1;
              bz((uz => uz.dpr === Ez && uz.box.left === zz.left && uz.box.top === zz.top && uz.box.width === zz.width && uz.box.height === zz.height ? uz : {
                box: {
                  left: zz.left,
                  top: zz.top,
                  width: zz.width,
                  height: zz.height
                },
                dpr: Ez
              }))
            };
            Ez();
            const nz = new ResizeObserver(Ez);
            return nz.observe(uz), window.addEventListener("resize", Ez), window.addEventListener("scroll", Ez, !0), () => {
              nz.disconnect(), window.removeEventListener("resize", Ez), window.removeEventListener("scroll", Ez, !0)
            }
          }), [zz]), uz
        }(Zz),
        fz = (0, iz.useRef)(Kz);
      fz.current = Kz;
      const oz = function(zz, uz) {
          const bz = Mz(zz.lineThickness, uz),
            Ez = Mz(zz.lineLength, uz),
            nz = Math.round(zz.gap * uz),
            iz = Mz(zz.dotSize, uz),
            lz = zz.outline > 0 ? Mz(zz.outline, uz) : 0,
            Hz = Mz(zz.circleThickness, uz),
            Oz = zz.circle ? Math.round(zz.circleRadius * uz * 2 + Hz) : 0,
            pz = function(zz, uz, bz, Ez) {
              return zz.lines ? uz : zz.dot ? bz : zz.circle && Ez % 2 === 0 ? 2 : 1
            }(zz, bz, iz, Oz),
            dz = [];
          if (zz.lines && (dz.push({
              x: pz + nz,
              y: 0,
              w: Ez,
              h: bz,
              arm: "right"
            }), dz.push({
              x: -nz - Ez,
              y: 0,
              w: Ez,
              h: bz,
              arm: "left"
            }), dz.push({
              x: 0,
              y: pz + nz,
              w: bz,
              h: Ez,
              arm: "down"
            }), zz.tStyle || dz.push({
              x: 0,
              y: -nz - Ez,
              w: bz,
              h: Ez,
              arm: "up"
            }), 0 === nz && dz.push({
              x: 0,
              y: 0,
              w: bz,
              h: bz
            })), zz.dot) {
            const zz = Math.floor((pz - iz) / 2);
            dz.push({
              x: zz,
              y: zz,
              w: iz,
              h: iz
            })
          }
          const Fz = dz.map((zz => ({
            ...zz,
            x: zz.x - lz,
            y: zz.y - lz,
            w: zz.w + 2 * lz,
            h: zz.h + 2 * lz
          })));
          let Zz = null,
            Rz = null;
          if (zz.circle) {
            const zz = Oz + ((Oz - pz) % 2 === 0 ? 0 : 1),
              uz = (pz - zz) / 2;
            Zz = tz(uz, zz, Hz), lz > 0 && (Rz = tz(uz - lz, zz + 2 * lz, Hz + 2 * lz))
          }
          return {
            cell: pz,
            fills: dz,
            outlines: lz > 0 ? Fz : [],
            ring: Zz,
            ringOutline: Rz
          }
        }(pz && uz.growOnClick ? function(zz, uz) {
          return {
            ...zz,
            outline: zz.outline * uz,
            lineLength: zz.lineLength * uz,
            lineThickness: zz.lineThickness * uz,
            gap: zz.gap * uz,
            dotSize: zz.dotSize * uz,
            circleRadius: zz.circleRadius * uz,
            circleThickness: zz.circleThickness * uz
          }
        }(uz, Oz) : uz, Kz),
        Nz = function(zz, uz, bz) {
          const Ez = Math.round((zz.left + zz.width / 2) * bz - uz / 2),
            nz = Math.round((zz.top + zz.height / 2) * bz - uz / 2);
          return {
            x: Ez / bz - zz.left,
            y: nz / bz - zz.top
          }
        }(Rz, oz.cell, Kz),
        vz = (0, lz.m)(uz.color),
        xz = (0, lz.m)(uz.outlineColor),
        Jz = (0, iz.useRef)(0);
      (0, iz.useLayoutEffect)((() => {
        if (Fz) return Fz.current = zz => {
          var uz;
          Jz.current = zz, null === (uz = Zz.current) || void 0 === uz || uz.querySelectorAll("[data-arm]").forEach((uz => {
            Object.assign(uz.style, sz(function(zz) {
              return {
                x: Number(zz.dataset.x),
                y: Number(zz.dataset.y),
                arm: zz.dataset.arm
              }
            }(uz), zz, fz.current))
          }))
        }, () => {
          Fz.current = null
        }
      }), [Fz]);
      const Az = null !== dz && void 0 !== dz ? dz : Jz.current;
      return (0, Hz.jsx)("div", {
        ref: Zz,
        className: nz()("CrosshairShapes", {
          CrosshairInPreview: bz,
          CrosshairInEditor: Ez || bz,
          CrosshairSpreads: void 0 !== Fz
        }),
        children: (0, Hz.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: Nz.x,
            top: Nz.y,
            opacity: uz.opacity / 100
          },
          children: (0, Hz.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [oz.ringOutline && (0, Hz.jsx)("div", {
              className: "CrosshairRing",
              style: Xz(oz.ringOutline, Kz, xz)
            }), oz.outlines.map(((zz, uz) => (0, Hz.jsx)("div", {
              className: "CrosshairPart",
              ...rz(zz),
              style: wz(zz, Az, Kz, xz)
            }, `o${uz}`))), oz.ring && (0, Hz.jsx)("div", {
              className: "CrosshairRing",
              style: Xz(oz.ring, Kz, vz)
            }), oz.fills.map(((zz, uz) => (0, Hz.jsx)("div", {
              className: "CrosshairPart",
              ...rz(zz),
              style: wz(zz, Az, Kz, vz)
            }, `f${uz}`)))]
          })
        })
      })
    }
  },
  8962: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Oz,
      g: () => Kz,
      h: () => Rz
    });
    var Ez = bz(8928);
    const nz = "XH1-",
      iz = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      lz = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      Mz = ["color", "outlineColor"],
      tz = 1 + 3 * Mz.length + lz.length + 1,
      Hz = Math.ceil(8 * tz / Math.log2(62)),
      Oz = nz.length + Hz;

    function pz(zz) {
      let uz = 90;
      for (const bz of zz) uz = 31 * uz + bz & 255;
      return uz
    }
    const dz = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      Fz = BigInt(dz.length);

    function Zz(zz, uz) {
      let bz = 0n;
      for (const nz of zz) {
        const zz = dz.indexOf(nz);
        if (zz < 0) return null;
        bz = bz * Fz + BigInt(zz)
      }
      if (bz >> BigInt(8 * uz) !== 0n) return null;
      const Ez = [];
      for (let nz = 0; nz < uz; nz++) Ez.unshift(Number(0xffn & bz)), bz >>= 8n;
      return Ez
    }

    function Rz(zz) {
      let uz = "shapes" === zz.style ? 1 : 0;
      iz.forEach(((bz, Ez) => {
        zz[bz] && (uz |= 1 << Ez + 1)
      }));
      const bz = [uz];
      for (const nz of Mz) {
        const uz = (0, Ez.j)(nz, zz[nz]);
        bz.push(uz >> 16 & 255, uz >> 8 & 255, 255 & uz)
      }
      for (const nz of lz) {
        const {
          min: uz,
          step: iz
        } = Ez.b[nz];
        bz.push(Math.round(((0, Ez.j)(nz, zz[nz]) - uz) / iz))
      }
      return bz.push(pz(bz)), nz + function(zz, uz) {
        let bz = 0n;
        for (const nz of zz) bz = bz << 8n | BigInt(nz);
        let Ez = "";
        for (let nz = 0; nz < uz; nz++) Ez = dz[Number(bz % Fz)] + Ez, bz /= Fz;
        return Ez
      }(bz, Hz)
    }

    function Kz(zz) {
      for (const uz of zz.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${Hz}})`, "gi"))) {
        const zz = wz(Zz(uz[1], tz));
        if (zz) return zz
      }
      return null
    }

    function wz(zz) {
      if (!zz || zz.length !== tz || pz(zz.slice(0, -1)) !== zz[zz.length - 1]) return null;
      const uz = zz[0],
        bz = {
          ...Ez.f,
          style: 1 & uz ? "shapes" : "classic"
        };
      iz.forEach(((zz, Ez) => {
        bz[zz] = 0 !== (uz & 1 << Ez + 1)
      }));
      let nz = 1;
      for (const Ez of Mz) bz[Ez] = zz[nz] << 16 | zz[nz + 1] << 8 | zz[nz + 2], nz += 3;
      for (const iz of lz) {
        const {
          min: uz,
          step: lz
        } = Ez.b[iz];
        bz[iz] = (0, Ez.j)(iz, uz + zz[nz] * lz), nz++
      }
      return bz
    }
  },
  8928: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Ez,
      f: () => nz,
      j: () => iz,
      m: () => Hz,
      n: () => tz,
      p: () => Oz,
      t: () => Mz,
      u: () => lz
    });
    const Ez = {
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
      nz = Object.freeze({
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

    function iz(zz, uz) {
      var bz;
      const {
        min: iz,
        max: lz,
        step: Mz
      } = Ez[zz];
      if (!Number.isFinite(uz)) return nz[zz];
      const tz = (null !== (bz = String(Mz).split(".")[1]) && void 0 !== bz ? bz : "").length,
        Hz = Number((Math.round(uz / Mz) * Mz).toFixed(tz));
      return Math.min(lz, Math.max(iz, Hz))
    }

    function lz(zz, uz, bz) {
      const Ez = "number" === typeof bz ? iz(uz, bz) : bz;
      return {
        ...zz,
        [uz]: Ez
      }
    }

    function Mz(zz, uz) {
      let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(nz).every((Ez => bz.includes(Ez) || zz[Ez] === uz[Ez]))
    }

    function tz(zz) {
      return Mz(zz, nz)
    }

    function Hz(zz) {
      return `#${zz.toString(16).padStart(6,"0")}`
    }

    function Oz(zz) {
      const uz = /^#?([0-9a-f]{6})$/i.exec(zz.trim());
      return uz ? parseInt(uz[1], 16) : null
    }
  },
  8970: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => pz,
      f: () => dz
    });
    var Ez = bz(56),
      nz = bz(33),
      iz = bz(8962),
      lz = bz(8928);
    const Mz = "crosshairCode";
    let tz = null;
    const Hz = new Set;

    function Oz() {
      if (null === tz) {
        var zz;
        const uz = nz.g.getItem(Mz);
        tz = null !== (zz = "string" === typeof uz ? (0, iz.g)(uz) : null) && void 0 !== zz ? zz : lz.f
      }
      return tz
    }

    function pz(zz) {
      tz = zz, (0, lz.n)(zz) ? nz.g.removeItem(Mz) : nz.g.setItem(Mz, (0, iz.h)(zz));
      for (const uz of Hz) uz()
    }

    function dz() {
      const [zz, uz] = (0, Ez.useState)(Oz);
      return (0, Ez.useEffect)((() => {
        const zz = () => {
          uz(Oz())
        };
        return zz(), bz = zz, Hz.add(bz), () => {
          Hz.delete(bz)
        };
        var bz
      }), []), zz
    }
  },
  8563: (zz, uz, bz) => {
    function Ez(zz) {
      return {
        x: (zz.left + zz.right) / 2,
        y: (zz.top + zz.bottom) / 2
      }
    }

    function nz(zz) {
      return 0 === zz.length ? null : zz.reduce(((zz, uz) => ({
        left: Math.min(zz.left, uz.left),
        top: Math.min(zz.top, uz.top),
        right: Math.max(zz.right, uz.right),
        bottom: Math.max(zz.bottom, uz.bottom)
      })))
    }

    function iz(zz, uz) {
      const bz = Math.max(0, (uz - (zz.right - zz.left)) / 2),
        Ez = Math.max(0, (uz - (zz.bottom - zz.top)) / 2);
      return {
        left: zz.left - bz,
        top: zz.top - Ez,
        right: zz.right + bz,
        bottom: zz.bottom + Ez
      }
    }

    function lz(zz, uz) {
      return uz.x >= zz.left && uz.x <= zz.right && uz.y >= zz.top && uz.y <= zz.bottom
    }

    function Mz(zz, uz, bz) {
      let nz = null,
        Mz = 1 / 0;
      for (const {
          id: Ez,
          box: iz
        }
        of uz) {
        const uz = (iz.right - iz.left) * (iz.bottom - iz.top);
        lz(iz, zz) && uz < Mz && (Mz = uz, nz = Ez)
      }
      if (null !== nz) return nz;
      let tz = 1 / 0;
      for (const {
          id: Hz,
          box: Oz
        }
        of uz) {
        if (!lz(iz(Oz, bz), zz)) continue;
        const uz = Ez(Oz),
          Mz = Math.hypot(zz.x - uz.x, zz.y - uz.y);
        Mz < tz && (tz = Mz, nz = Hz)
      }
      return nz
    }

    function tz(zz, uz, bz) {
      return {
        left: bz.left,
        top: bz.top,
        right: zz - bz.right,
        bottom: uz - bz.bottom
      }
    }

    function Hz(zz, uz, bz, Ez) {
      const nz = (zz, uz, bz) => Math.max(Math.min(uz, 0), Math.min(Math.max(bz, 0), zz));
      return {
        x: nz(uz, Ez.left - zz.left, Ez.right - zz.right),
        y: nz(bz, Ez.top - zz.top, Ez.bottom - zz.bottom)
      }
    }

    function Oz(zz, uz, bz, Ez, nz) {
      const iz = zz.dx * Ez + uz,
        lz = zz.dy * nz + bz,
        Mz = zz => Math.max(-1, Math.min(1, zz));
      return {
        dx: Mz(iz / Ez),
        dy: Mz(lz / nz)
      }
    }

    function pz(zz, uz, bz, Ez) {
      return uz <= 0 || bz <= 0 ? 1 : Math.max(.05, Math.min(1, zz / uz, Ez / bz))
    }

    function dz(zz, uz, bz) {
      return Math.min(zz.right, uz.right) - Math.max(zz.left, uz.left) > bz && Math.min(zz.bottom, uz.bottom) - Math.max(zz.top, uz.top) > bz
    }

    function Fz(zz, uz) {
      const bz = (zz, uz, bz, Ez) => uz - zz > Ez - bz ? bz - zz > uz - Ez ? Ez - uz : bz - zz : zz < bz ? bz - zz : uz > Ez ? Ez - uz : 0;
      return {
        x: bz(zz.left, zz.right, uz.left, uz.right),
        y: bz(zz.top, zz.bottom, uz.top, uz.bottom)
      }
    }

    function Zz(zz, uz) {
      let {
        avoid: bz = null,
        bounds: Ez = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, nz = 0, iz = 1 / 0;
      return zz.forEach(((zz, lz) => {
        const Mz = uz.filter((uz => dz(zz, uz, 0))).length,
          tz = null !== Ez && (zz.left < Ez.left || zz.top < Ez.top || zz.right > Ez.right || zz.bottom > Ez.bottom),
          Hz = Mz + (bz && dz(zz, bz, 0) ? 1e3 : 0) + (tz ? 1e6 : 0);
        Hz < iz && (nz = lz, iz = Hz)
      })), nz
    }
    bz.d(uz, {
      e: () => Ez,
      h: () => lz,
      i: () => dz,
      l: () => Hz,
      n: () => iz,
      o: () => Zz,
      p: () => Oz,
      q: () => Mz,
      r: () => pz,
      u: () => tz,
      w: () => Fz,
      x: () => nz
    })
  },
  8920: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => iz,
      g: () => nz
    });
    var Ez = bz(20);

    function nz(zz, uz) {
      return zz && !uz
    }

    function iz() {
      return nz(Ez.e.get("isTouchScreen"), Ez.e.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  8889: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Ez
    });
    const Ez = new Set(["chunkBorders"])
  },
  8886: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      ALL_DEV_TOOLS: () => lz,
      coreDevTools: () => Hz,
      devTools: () => tz
    });
    var Ez = bz(606),
      nz = bz(1273),
      iz = bz(8889);
    const lz = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function Mz() {
      const {
        noaDevTools: zz
      } = await bz.e(230).then((() => bz(40259)));
      return zz
    }
    const tz = new class {
        constructor() {
          this.loadHost = Mz, this.tools = lz
        }
        setHost(zz) {
          this.tools = null === zz ? lz : zz.tools, this.loadHost = null === zz ? Mz : async () => zz
        }
        supports(zz) {
          return this.tools.has(zz)
        }
        async downloadScene(zz, uz) {
          const bz = await this.loadHost();
          await bz.downloadScene(zz, uz)
        }
        async setAmbientLightIntensity(zz) {
          const uz = await this.loadHost();
          await uz.setAmbientLightIntensity(zz)
        }
      },
      Hz = {
        tools: iz.d,
        downloadScene: async () => {
          throw new Error("This client can't download the scene")
        },
        setAmbientLightIntensity: async () => {
          throw new Error("This client can't set the ambient light")
        }
      };
    Ez.x && tz.setHost(Hz), (0, nz.s)((() => {
      tz.setHost(Hz)
    }))
  },
  9028: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => lz,
      e: () => nz,
      g: () => Oz
    });
    var Ez = bz(1531);

    function nz(zz) {
      var uz;
      return {
        ...lz.store,
        yaw: lz.store.yaw + (null !== (uz = Ez.c[zz].previewYaw) && void 0 !== uz ? uz : 0)
      }
    }
    const iz = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      lz = {
        player: iz,
        store: {
          ...iz,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function Mz(zz, uz) {
      zz instanceof Promise ? zz.then(uz).catch((zz => {
        console.error("Couldn't open the preview", zz)
      })) : uz(zz)
    }
    class tz {
      constructor(zz) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, Mz(zz, (zz => {
          this.closed ? zz.close() : (this.opened = zz, null !== this.size && zz.resize(this.size.width, this.size.height), null !== this.view && zz.show(this.view))
        }))
      }
      show(zz) {
        var uz;
        this.view = zz, null === (uz = this.opened) || void 0 === uz || uz.show(zz)
      }
      resize(zz, uz) {
        var bz;
        this.size = {
          width: zz,
          height: uz
        }, null === (bz = this.opened) || void 0 === bz || bz.resize(zz, uz)
      }
      close() {
        var zz;
        this.closed = !0, null === (zz = this.opened) || void 0 === zz || zz.close(), this.opened = null
      }
    }
    class Hz {
      constructor(zz) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(zz).then((zz => zz.ready)), Mz(zz, (zz => {
          this.closed ? zz.close() : (this.opened = zz, null !== this.size && zz.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var zz, uz;
        return null !== (zz = null === (uz = this.opened) || void 0 === uz ? void 0 : uz.isReady()) && void 0 !== zz && zz
      }
      setCosmetic(zz, uz) {
        var bz;
        null === (bz = this.opened) || void 0 === bz || bz.setCosmetic(zz, uz)
      }
      playEmote(zz) {
        var uz;
        null === (uz = this.opened) || void 0 === uz || uz.playEmote(zz)
      }
      setOrbit(zz) {
        var uz;
        null === (uz = this.opened) || void 0 === uz || uz.setOrbit(zz)
      }
      resetCamera() {
        var zz;
        null === (zz = this.opened) || void 0 === zz || zz.resetCamera()
      }
      async untilDrawn(zz) {
        var uz;
        await this.ready, await (null === (uz = this.opened) || void 0 === uz ? void 0 : uz.untilDrawn(zz))
      }
      resize(zz, uz) {
        var bz;
        this.size = {
          width: zz,
          height: uz
        }, null === (bz = this.opened) || void 0 === bz || bz.resize(zz, uz)
      }
      close() {
        var zz;
        this.closed = !0, null === (zz = this.opened) || void 0 === zz || zz.close(), this.opened = null
      }
    }
    const Oz = new class {
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
        return new tz(this.current().openMob(zz))
      }
      openPet(zz) {
        return new tz(this.current().openPet(zz))
      }
      openMobLineup(zz) {
        return new tz(this.current().openMobLineup(zz))
      }
      openCharacter(zz, uz) {
        return new Hz(this.current().openCharacter(zz, uz))
      }
    }
  },
  9020: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Ez.b,
      g: () => Ez.e,
      j: () => Ez.g
    });
    var Ez = bz(9028);
    class nz {
      constructor(zz) {
        this.load = zz, this.loaded = null, this.loading = null
      }
      run(zz) {
        return null !== this.loaded ? zz(this.loaded) : (this.loading ??= this.load().then((zz => (this.loaded = zz, zz)), (zz => {
          throw this.loading = null, zz
        })), this.loading.then(zz))
      }
    }
    class iz {
      constructor() {
        this.mobScene = new nz((() => Promise.all([bz.e(69), bz.e(226), bz.e(225), bz.e(244), bz.e(94), bz.e(245), bz.e(72), bz.e(71), bz.e(242), bz.e(70), bz.e(252), bz.e(246), bz.e(251), bz.e(249), bz.e(241), bz.e(218), bz.e(264), bz.e(222), bz.e(236), bz.e(247), bz.e(250), bz.e(74), bz.e(196), bz.e(215), bz.e(219), bz.e(93), bz.e(113), bz.e(234), bz.e(73), bz.e(112), bz.e(153)]).then((() => bz(40273))))), this.characterScene = new nz((() => Promise.all([bz.e(69), bz.e(226), bz.e(225), bz.e(244), bz.e(94), bz.e(245), bz.e(72), bz.e(71), bz.e(242), bz.e(70), bz.e(252), bz.e(246), bz.e(251), bz.e(249), bz.e(241), bz.e(218), bz.e(264), bz.e(222), bz.e(236), bz.e(247), bz.e(250), bz.e(74), bz.e(196), bz.e(215), bz.e(219), bz.e(93), bz.e(113), bz.e(234), bz.e(73), bz.e(112), bz.e(152)]).then((() => bz(40383)))))
      }
      openMob(zz) {
        return this.mobScene.run((uz => uz.openMobPreview(zz)))
      }
      openPet(zz) {
        return this.mobScene.run((uz => uz.openPetPreview(zz)))
      }
      openMobLineup(zz) {
        return this.mobScene.run((uz => uz.openMobLineupPreview(zz)))
      }
      openCharacter(zz, uz) {
        return this.characterScene.run((bz => bz.openCharacterPreview(zz, uz)))
      }
    }
    Ez.g.setDefaultHost((() => new iz))
  },
  6382: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => nz,
      e: () => iz
    });
    var Ez = bz(33);
    const nz = "shaderPack";
    async function iz() {
      var zz;
      let uz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (zz = await Ez.d.getItem(nz, uz)) && void 0 !== zz ? zz : null
    }
  },
  8902: (zz, uz, bz) => {
    function Ez(zz, uz) {
      return zz && !uz
    }
    bz.d(uz, {
      b: () => Ez
    })
  },
  8915: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => iz
    });
    var Ez = bz(1068);

    function nz() {
      var zz, uz;
      return null !== (zz = null === (uz = screen.orientation) || void 0 === uz ? void 0 : uz.type) && void 0 !== zz ? zz : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const iz = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && nz() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = nz(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, Ez.WR)(new Error("Game view size held for 60 s"))
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
        let uz = !1;
        return () => {
          if (uz && this.isHeld()) return null;
          const bz = zz();
          return uz ||= null !== bz, bz
        }
      }
      onRelease(zz) {
        return this.resizers.add(zz), () => {
          this.resizers.delete(zz)
        }
      }
    }
  },
  8554: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Mz,
      e: () => tz
    });
    var Ez = bz(20),
      nz = bz(1296),
      iz = bz(96);
    const lz = {
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

    function Mz() {
      return (0, iz.isMobile)() && "function" === typeof navigator.vibrate
    }
    const tz = new class {
      constructor(zz) {
        this.deps = zz, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(zz, uz) {
        var bz;
        if (!this.deps.enabled()) return;
        const Ez = lz[zz],
          nz = null !== uz && void 0 !== uz ? uz : Ez.pattern;
        if (null === nz) return void console.warn("No vibration pattern for", zz);
        const iz = this.deps.now();
        iz - this.lastAnyAt < 40 && Ez.priority < this.playingPriority || iz - (null !== (bz = this.lastAt.get(zz)) && void 0 !== bz ? bz : -1 / 0) < Ez.minGapMs || iz < this.playingUntil && Ez.priority < this.playingPriority || (this.lastAt.set(zz, iz), this.lastAnyAt = iz, this.playingUntil = iz + nz.reduce(((zz, uz) => zz + uz), 0), this.playingPriority = Ez.priority, this.deps.vibrate(nz))
      }
    }({
      vibrate: zz => {
        navigator.vibrate([...zz])
      },
      now: () => performance.now(),
      enabled: () => Mz() && Ez.e.get("isTouchScreen") && Ez.e.get("clientEscMenuOptions").vibration && !(0, nz.d)()
    })
  },
  8896: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Fz,
      e: () => dz
    });
    var Ez = bz(20),
      nz = bz(1638),
      iz = bz(33),
      lz = bz(1322),
      Mz = bz(3409),
      tz = bz(1448),
      Hz = bz(1362);
    const Oz = 2592e5,
      pz = "notificationOptInLastPromptedAt";
    async function dz() {
      var zz;
      const uz = await Fz();
      if (null === uz) return;
      const bz = null !== (zz = iz.g.getItem(pz)) && void 0 !== zz ? zz : 0;
      if (Date.now() - bz < Oz) return;
      if ((0, Hz.f)()) return;
      const Ez = await lz.NotificationProvider.showPromptPopup({
        icon: "bell",
        title: "mobilePushNotifications:optInTitle",
        subtitle: nz.d.supports("notifications") ? "mobilePushNotifications:optInSubtitle" : "mobilePushNotifications:optInSubtitleBrowser",
        confirmText: "mobilePushNotifications:optInConfirm",
        cancelText: "mobilePushNotifications:optInCancel",
        padStartsOn: "cancel"
      }).getResult();
      "notificationTornDown" !== Ez && (iz.g.setItem(pz, Date.now()), (0, tz.reportAnalyticsClick)({
        id: !0 === Ez ? "push.allow" : "push.deny",
        value: nz.d.supports("notifications") ? "app" : "browser"
      }), !0 === Ez && uz().catch((zz => {
        console.error("Failed to ask for push notifications:", zz)
      })))
    }
    async function Fz() {
      return await nz.d.ready, nz.d.supports("notifications") ? Ez.e.get("mobilePushNotificationsCanAsk") ? async () => {
        nz.d.request("notifications.requestPermission", {}).then((zz => {
          let {
            canAsk: uz
          } = zz;
          Ez.e.set({
            mobilePushNotificationsCanAsk: uz
          })
        }), (zz => {
          console.error("The app couldn't ask for push notifications:", zz)
        }))
      }: null: await Mz.c.canAsk() ? () => Mz.c.requestPermission() : null
    }
  },
  8908: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Mz,
      d: () => tz
    });
    var Ez = bz(20);
    const nz = 24,
      iz = "farNametags",
      lz = 1e5;

    function Mz() {
      var zz;
      return null === (zz = Ez.e.get("showDistantNametags")) || void 0 === zz || zz
    }

    function tz() {
      var zz;
      return null !== (zz = function() {
        const zz = new URLSearchParams(window.location.search).get(iz),
          uz = null === zz || "" === zz ? NaN : Number(zz);
        return Number.isFinite(uz) && uz >= 0 ? Math.min(uz, lz) : null
      }()) && void 0 !== zz ? zz : Mz() ? 0 : nz
    }
  },
  9013: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => nz,
      d: () => lz
    });
    const Ez = [{
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

    function nz(zz) {
      let uz, bz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof zz) {
        if (!Number.isFinite(zz)) return "0";
        if (Math.abs(zz) < 100) {
          const uz = zz < 0 ? "-" : "",
            bz = Math.abs(zz);
          return bz >= 10 ? `${uz}${bz.toFixed(1).replace(/\.0$/,"")}` : `${uz}${bz.toFixed(2).replace(/\.?0+$/,"")}`
        }
        uz = BigInt(Math.floor(zz))
      } else uz = zz;
      const nz = uz < 0n ? -uz : uz,
        iz = uz < 0n ? "-" : "",
        lz = nz.toString();
      if (lz.length <= bz) return `${iz}${lz}`;
      const Mz = 3 * Math.floor((lz.length - 1) / 3);
      if (Mz < 3) return `${iz}${lz}`;
      if (Mz > 3 * Ez.length) {
        const zz = lz[0],
          uz = lz.slice(1, 3).replace(/0+$/, "");
        return `${iz}${uz?`${zz}.${uz}`:zz}e${lz.length-1}`
      }
      const {
        threshold: tz,
        suffix: Hz
      } = Ez[Ez.length - Mz / 3], Oz = nz / tz, pz = Number(1000n * (nz % tz) / tz), dz = Number(Oz) + pz / 1e3;
      let Fz;
      return Fz = dz >= 100 ? Math.floor(dz).toString() : dz >= 10 ? dz.toFixed(1).replace(/\.0$/, "") : dz.toFixed(2).replace(/\.?0+$/, ""), `${iz}${Fz}${Hz}`
    }
    const iz = Ez.map((zz => {
      let {
        threshold: uz,
        suffix: bz
      } = zz;
      return {
        threshold: Number(uz),
        suffix: bz
      }
    })).filter((zz => {
      let {
        threshold: uz
      } = zz;
      return Number.isFinite(uz)
    }));

    function lz(zz) {
      const uz = Math.abs(zz),
        bz = zz < 0 ? "-" : "";
      for (const {
          threshold: Ez,
          suffix: nz
        }
        of iz)
        if (uz >= Ez) {
          const zz = uz / Ez;
          if (zz >= 1e3) return `${bz}${uz.toExponential(2).replace("e+","e")}`;
          let iz;
          return iz = zz >= 100 ? Math.floor(zz).toString() : zz >= 10 ? zz.toFixed(1).replace(/\.0$/, "") : zz.toFixed(2).replace(/\.?0+$/, ""), `${bz}${iz}${nz}`
        } return `${bz}${uz}`
    }
  },
  8994: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Oz,
      f: () => dz,
      g: () => pz,
      i: () => lz,
      m: () => Hz,
      o: () => tz
    });
    var Ez = bz(328);
    const nz = ["Wood Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table"],
      iz = {
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

    function lz(zz) {
      var uz;
      return null !== (uz = iz[zz]) && void 0 !== uz ? uz : {
        translationKey: ""
      }
    }
    const Mz = {
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

    function tz(zz) {
      return nz.includes(zz)
    }

    function Hz(zz) {
      var uz;
      return !0 === (null === zz || void 0 === zz || null === (uz = zz.customAttributes) || void 0 === uz ? void 0 : uz.cannotEnchant)
    }

    function Oz(zz, uz) {
      const {
        max: bz
      } = Mz[zz].at(-1);
      return uz <= bz
    }

    function pz(zz) {
      const uz = Math.sin(zz / 80),
        bz = zz => {
          if (zz <= 0) return 0;
          if (zz > 1) return 1;
          let uz = 0;
          const bz = [1, 7, 21, 35, 35, 21, 7, 1];
          for (let Ez = 0; Ez < bz.length; Ez++) {
            uz += (Ez % 2 === 0 ? 1 : -1) * bz[Ez] * Math.pow(zz, 2 + Ez) / (2 + Ez)
          }
          return 72 * uz
        },
        Ez = .3 - .78 * uz,
        nz = .5 - .78 * uz,
        iz = .6 - .7 * uz,
        lz = .8 - .6 * uz;
      let Mz = bz(Ez),
        tz = bz(nz) - Mz,
        Hz = bz(iz) - tz - Mz,
        Oz = bz(lz) - Hz - tz - Mz;
      Ez < .041 && (tz /= 1 - Mz, Hz /= 1 - Mz, Oz /= 1 - Mz, Mz = 0), nz < .041 && (Mz /= 1 - tz, Hz /= 1 - tz, Oz /= 1 - tz, tz = 0), iz < .041 && (Mz /= 1 - Hz, tz /= 1 - Hz, Oz /= 1 - Hz, Hz = 0), lz < .041 && (Mz /= 1 - Oz, tz /= 1 - Oz, Hz /= 1 - Oz, Oz = 0);
      return {
        commonProb: Mz,
        uncommonProb: tz,
        rareProb: Hz,
        epicProb: Oz,
        legendaryProb: 1 - (Oz + Hz + tz + Mz)
      }
    }

    function dz(zz, uz) {
      const {
        min: bz,
        max: nz
      } = Mz[zz][uz], iz = Ez.d.sampleUniformIntDistribution(bz, nz, "includeMax");
      return {
        ...pz(iz),
        level: iz
      }
    }
  },
  8434: (zz, uz, bz) => {
    function Ez(zz, uz) {
      return !zz.hidden && (uz || !zz.isRewardedAd)
    }

    function nz(zz) {
      return "object" === typeof zz ? zz.option : zz
    }

    function iz(zz, uz) {
      var bz;
      if ("dropdown" === (null === (bz = zz.userInput) || void 0 === bz ? void 0 : bz.type) && "object" === typeof zz.userInput.dropdownOptions[0]) {
        for (const bz of zz.userInput.dropdownOptions)
          if (nz(bz) === uz) return "object" === typeof bz ? bz.cost : zz.cost;
        console.error("Didn't find matching option for dropdown item. Item:", zz, "input:", uz)
      }
      return zz.cost
    }

    function lz(zz, uz, bz) {
      var Ez;
      const nz = null !== (Ez = bz.excludedPlayers) && void 0 !== Ez ? Ez : [uz];
      return zz.filter((zz => !nz.includes(zz)))
    }
    bz.d(uz, {
      b: () => iz,
      e: () => nz,
      f: () => lz,
      j: () => Ez
    })
  },
  8957: () => {},
  8936: zz => {
    zz.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAaUlEQVR4AWyOQQ6AIAwECwGNr/HkYzz4Hy9+WEkq01BDDCRDy3ZbGo9rU2c/V+1Bj9JOeW7RokaTBO0zpDxJXmYJKXjdohlwOqbWi4YaJFIgcYEIaGAT+JvHCDNQ8El9ziQz/BdzE00vAAAA//+cTXaSAAAABklEQVQDAHI9N5g1NM74AAAAAElFTkSuQmCC"
  },
  8938: zz => {
    zz.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAGBJREFUGJVNjjEOxEAIA+dW22Rpk2+nSndPZFtMewU6FBdIjJHx536+ABARUl7XCbjvyV9mJqX7BtY6RkS0t9bRc0op5ZuaGTAqtPZCpfG+AqSs8FFlulh7s6j7rh9d9wclFjd0V4Z2HAAAAABJRU5ErkJggg=="
  },
  8942: zz => {
    zz.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAbUlEQVR4nESOSwqAMAxEow0pive/gIcTBBdSsZh+NG20DlnkM8MLhnXuzHSnAwBaI8LIV2RXOiIkaGfMKfXGyByZparbyQZpGNUV/KaHGrWowZKVgSx8Qr8vzdXgAkYFCIn9mZP7E8pQ1Q9fzAMAAP//PTNTFgAAAAZJREFUAwAk1D9dXrbJngAAAABJRU5ErkJggg=="
  },
  8947: zz => {
    zz.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAE1JREFUGJVNjsEOwDAIQp/GZv3/j+xx5zVbsh0wZFxEImCsc88RRwHsB5OaI8SA636hjwosNXSUWuRTphxp5iahHX+pozQs+Yt0rU1SPg0CIfgDMgomAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);