export const id = 99;
export const ids = [99, 194];
export const modules = {
  34091: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      EverythingMenu: () => WL
    });
    var pD = wD(58),
      sD = wD(1044),
      KD = wD.n(sD),
      rD = wD(1200),
      LD = wD(1057),
      cD = wD(2062),
      gD = wD(1447),
      RD = wD(1116),
      AD = wD(1096);

    function UD(DD) {
      let {
        items: zD,
        link: wD,
        onClick: pD,
        selectedItemId: sD,
        className: UD,
        padStartsOnTab: fD = !0
      } = DD;
      const {
        t: ID
      } = (0, rD.E)(), BD = (0, RD.g)(), GD = [];
      for (const KD of zD) {
        var hD;
        const DD = GD[GD.length - 1];
        var nD;
        if (DD && DD.title === (null !== (hD = KD.section) && void 0 !== hD ? hD : null)) DD.items.push(KD);
        else GD.push({
          title: null !== (nD = KD.section) && void 0 !== nD ? nD : null,
          items: [KD]
        })
      }
      return (0, AD.jsxs)("div", {
        className: KD()("MenuSideBarBody", UD),
        "data-pad-tabs": "2",
        children: [GD.map(((DD, zD) => {
          var wD;
          return (0, AD.jsxs)("div", {
            className: "MenuSideBarSection",
            children: [DD.title && (0, AD.jsx)("div", {
              className: "MenuSideBarSectionTitle",
              children: ID(DD.title)
            }), DD.items.map((DD => {
              var zD;
              const wD = !!DD.iconElement || !!DD.faIcon;
              return (0, AD.jsxs)("div", {
                "data-pad-tab": !0,
                "data-pad-selected": sD === DD.id ? "true" : void 0,
                "data-pad-default-focus": fD && sD === DD.id || void 0,
                className: KD()("MenuSideBarBodyTab", {
                  ActiveMenuSideBarBodyTab: sD === DD.id
                }),
                onClick: () => {
                  pD(DD.id)
                },
                children: [wD && (0, AD.jsx)("div", {
                  className: "MenuSideBarBodyTabIcon",
                  children: null !== (zD = DD.iconElement) && void 0 !== zD ? zD : (0, AD.jsx)(LD.e, {
                    name: DD.faIcon
                  })
                }), (!BD || !wD) && (0, AD.jsx)("div", {
                  children: ID(DD.title)
                }), DD.redDot && (0, AD.jsx)(cD.d, {
                  top: "-0.2rem",
                  right: "-1rem"
                })]
              }, DD.id)
            }))]
          }, null !== (wD = DD.title) && void 0 !== wD ? wD : zD)
        })), wD && (0, AD.jsxs)("div", {
          ...(0, gD.ib)(),
          "data-pad-destructive": !0,
          className: "MenuSideBarBodyTab MenuSideBarLink",
          onClick: wD.onClick,
          children: [(0, AD.jsx)("div", {
            className: "MenuSideBarBodyTabIcon",
            children: (0, AD.jsx)(LD.e, {
              name: wD.faIcon
            })
          }), (0, AD.jsx)("div", {
            children: ID(wD.title)
          }), (0, AD.jsx)(LD.e, {
            name: "arrow-right",
            className: "MenuSideBarLinkArrow"
          })]
        })]
      })
    }
    var fD = wD(2998),
      ID = wD(1127),
      BD = wD(2402),
      GD = wD(3089),
      hD = wD(103),
      nD = wD(1925),
      MD = wD(2233),
      OD = wD(2238),
      JD = wD(1687),
      ED = wD(1346),
      QD = wD(5021),
      XD = wD(20),
      VD = wD(34095);

    function PD(DD) {
      let {
        setApplySettingsCallback: zD
      } = DD;
      const {
        clientEscMenuOptions: wD
      } = (0, XD.n)(["clientEscMenuOptions"]), [sD, KD] = (0, pD.useState)(!1), [rD, LD] = (0, pD.useState)(!1), [cD, RD] = (0, pD.useState)(6400), [UD, fD] = (0, pD.useState)(3600), [ID, BD] = (0, pD.useState)(!1), [GD, hD] = (0, pD.useState)(!1);

      function nD(DD) {
        const zD = "screenshot" === DD ? LD : KD;
        zD(!0);
        const wD = ID ? "normals" : GD ? "depth" : null;
        VD.devTools.downloadScene(DD, {
          width: cD,
          height: UD,
          colouring: wD
        }).catch((DD => {
          console.error("Couldn't download the scene", DD)
        })).finally((() => {
          zD(!1)
        }))
      }
      return (0, AD.jsxs)("div", {
        className: "DeveloperToolsCategory",
        children: [(0, AD.jsx)(QD.b, {
          label: "Disable Ambient Occlusion",
          checked: wD.disableAmbientOcclusion,
          onClick: DD => {
            XD.e.setClientEscMenuOptions({
              disableAmbientOcclusion: DD
            }), zD((() => QD.g))
          },
          circleInfoText: "Disables ambient occlusion which is the shadow effect that makes corners and crevices darker."
        }), VD.devTools.supports("ambientLight") && (0, AD.jsx)(QD.e, {
          name: "Ambient Lighting Intensity",
          min: 0,
          max: 1,
          step: .01,
          initValue: wD.ambientLightIntensity,
          onChange: DD => {
            VD.devTools.setAmbientLightIntensity(DD).then((() => {
              XD.e.setClientEscMenuOptions({
                ambientLightIntensity: DD
              })
            })).catch((DD => {
              console.error("Couldn't set the ambient light", DD)
            }))
          },
          circleInfoText: "Sets the intensity of the white ambient light in the scene. The default is 0.5."
        }), VD.devTools.supports("weaponRaycasts") && (0, AD.jsx)(QD.b, {
          label: "Show Weapon Raycasts",
          checked: wD.showWeaponRaycasts,
          onClick: DD => {
            XD.e.setClientEscMenuOptions({
              showWeaponRaycasts: DD
            })
          },
          circleInfoText: "Draws debug lines for the raw raycasts used by locally fired weapons."
        }), VD.devTools.supports("sceneDownload") && (0, AD.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, AD.jsxs)("div", {
            className: "SettingBox WarningBorder",
            children: [(0, AD.jsx)(QD.b, {
              label: "Apply normal-based coloring",
              checked: ID,
              onClick: DD => {
                BD(DD), DD && hD(!1)
              },
              circleInfoText: "Colors faces based on their normal direction (red=X, green=Y, blue=Z)."
            }), (0, AD.jsx)(QD.b, {
              label: "Apply depth-based coloring",
              checked: GD,
              onClick: DD => {
                hD(DD), DD && BD(!1)
              },
              circleInfoText: "Colors from white (near) to black (far) based on distance from camera. Only works for screenshot export."
            }), (0, AD.jsxs)("div", {
              className: "SettingBox DeveloperToolsCategoryScreenshotSettings",
              children: [(0, AD.jsx)("div", {
                className: "SettingLabel",
                children: "Screenshot size in pixels (width x height)"
              }), (0, AD.jsx)(JD.e, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (DD, zD) => {
                  const wD = parseInt(DD) || 6400;
                  RD(wD)
                },
                placeholderText: "width",
                maxLength: 10,
                defaultValue: cD.toString()
              }), (0, AD.jsx)("span", {
                children: "X"
              }), (0, AD.jsx)(JD.e, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (DD, zD) => {
                  const wD = parseInt(DD) || 3600;
                  fD(wD)
                },
                placeholderText: "height",
                maxLength: 10,
                defaultValue: UD.toString()
              })]
            }), (0, AD.jsxs)("div", {
              className: "DeveloperToolsCategoryExportButtons",
              children: [(0, AD.jsxs)(gD.f, {
                onClick: () => {
                  nD("screenshot")
                },
                disabled: rD,
                children: [rD && (0, AD.jsx)(ED.e, {}), "Download Screenshot"]
              }), (0, AD.jsxs)(gD.f, {
                onClick: () => {
                  nD("glb")
                },
                disabled: sD,
                children: [sD && (0, AD.jsx)(ED.e, {}), "Download GLB"]
              })]
            })]
          }), (0, AD.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: 'To download GLB of scene with textures you need to "Disable Block Texture Atlas" in graphic settings first (you will need to reload the page to apply the setting).'
          })]
        })]
      })
    }
    var CD = wD(128),
      xD = wD(1130),
      TD = wD(34109),
      bD = wD(3003),
      jD = wD(1511),
      dD = wD(1270),
      SD = wD(1238),
      iD = wD(3072),
      lD = wD(2030),
      WD = wD(1495),
      ND = wD(351),
      ZD = wD(2246),
      yD = wD(2257),
      kD = wD(2700),
      mD = wD(1657),
      eD = wD(3037),
      oD = wD(3026),
      aD = wD(3077),
      uD = wD(212);

    function vD(DD) {
      const {
        t: zD,
        selectedLanguage: wD
      } = (0, rD.E)(), {
        userContext: sD
      } = (0, ID.c)(), {
        superRankInfo: KD
      } = sD, LD = DD && ((0, ND.Bc)(KD) || sD.ranksMayChange) && (0, yD.purchasesAllowed)(), {
        accountId: cD,
        data: gD
      } = (0, kD.f)(eD.e, LD);
      if ((0, pD.useEffect)((() => {
          if (LD) return eD.e.watchAccount(), mD.e.addRefetchListener("billing", (DD => {
            "reconnected" === DD ? eD.e.refreshAfterReconnect() : eD.e.refresh()
          }))
        }), [LD]), !LD || !(0, ND.Bc)(KD) || null === gD || cD !== sD.whamm) return null;
      const RD = function(DD, zD, wD) {
        const pD = aD.h[(0, aD.c)(aD.h, zD)],
          sD = void 0 === pD ? void 0 : (0, uD.d)(DD.entitlements, pD.entitlementId);
        return void 0 === sD || null === sD.expiresAt || (0, oD.f)(sD) <= wD ? null : sD.willRenew && null === sD.billingIssueDetectedAt ? {
          renews: !0,
          at: Math.max(sD.expiresAt, wD)
        } : {
          renews: !1,
          at: (0, oD.f)(sD)
        }
      }(gD, KD.tier, Date.now());
      if (null === RD) return null;
      const AD = RD.renews ? "store:renewsOn" : "store:endsOn";
      return zD(AD, {
        date: new Date(RD.at).toLocaleDateString((0, rD.n)(wD.code, AD), {
          year: "numeric",
          month: "short",
          day: "numeric"
        })
      })
    }
    var tD = wD(1366),
      FD = wD(1221),
      YD = wD(4901),
      HD = wD(1472),
      qD = wD(3667),
      Dz = wD(2218);

    function zz(DD) {
      let {
        showing: zD
      } = DD;
      const {
        t: wD
      } = (0, rD.E)(), {
        data: pD,
        failed: sD
      } = (0, kD.f)(qD.e, zD);
      return 0 === (null === pD || void 0 === pD ? void 0 : pD.length) || null === pD && !sD ? null : (0, AD.jsxs)("div", {
        className: "SettingBox AccountSettingsPaymentHistory",
        children: [(0, AD.jsx)("div", {
          className: "AccountSettingsLabel",
          children: wD("paymentHistory:title")
        }), null === pD && sD && (0, AD.jsx)("div", {
          className: "AccountSettingsPaymentHistoryError",
          children: wD("paymentHistory:loadFailed")
        }), null !== pD && (0, AD.jsx)("ul", {
          className: "PaymentHistoryList",
          children: pD.map((DD => (0, AD.jsxs)("li", {
            className: "PaymentHistoryEntry",
            children: [(0, AD.jsx)(Dz.b, {
              entry: DD
            }), (0, AD.jsxs)("div", {
              className: "PaymentHistoryEntryText",
              children: [(0, AD.jsx)("div", {
                children: (0, Dz.e)(wD, DD)
              }), (0, AD.jsxs)("div", {
                className: "PaymentHistoryEntryDate",
                children: [new Date(DD.at).toLocaleDateString(), "number" === typeof DD.orderId && ` \xb7 ${wD("paymentHistory:order",{orderId:DD.orderId})}`]
              })]
            })]
          }, (0, qD.d)(DD))))
        })]
      })
    }
    var wz = wD(1878),
      pz = wD(1251),
      sz = wD(1355),
      Kz = wD(1797),
      rz = wD(1211),
      Lz = wD(1324),
      cz = wD(3014);
    async function gz() {
      try {
        return function(DD) {
          const zD = new Map;
          for (const {
              store: wD,
              status: pD,
              autoRenewStatus: sD,
              managementUrl: KD
            }
            of Object.values(DD.subscriptions)) !(0, oD.j)(wD) || (0, oD.m)(pD) || "willNotRenew" === sD || zD.has(wD) || zD.set(wD, null !== KD && void 0 !== KD ? KD : oD.n[wD]);
          return Array.from(zD, (DD => {
            let [zD, wD] = DD;
            return {
              store: zD,
              managementUrl: wD
            }
          }))
        }(await (0, Kz.m)((0, cz.e)().getCustomerInfo(), 5e3, "CustomerInfo got no answer in 5 s"))
      } catch (DD) {
        return console.error("Billing: loading CustomerInfo for the player's store subscriptions failed:", DD), null
      }
    }
    var Rz = wD(338),
      Az = wD(2488);
    const Uz = {
      appStore: {
        name: "App Store",
        ...Rz.Mb.appStore
      },
      googlePlay: {
        name: "Google Play",
        ...Rz.Mb.googlePlay
      },
      discord: {
        name: "Discord",
        ...Rz.Mb.discord
      }
    };

    function fz(DD) {
      let {
        warning: zD,
        subscriptions: wD
      } = DD;
      const {
        t: pD
      } = (0, rD.E)();
      return null !== wD && 0 === wD.length ? (0, AD.jsx)(AD.Fragment, {
        children: pD(zD)
      }) : (0, AD.jsxs)("div", {
        className: "DeleteAccountSubtitle",
        children: [pD(zD), null === wD && (0, AD.jsx)("div", {
          className: "DeleteAccountSubtitleNote",
          children: pD("auth:deleteAccountSubscriptionsLoadFailed")
        }), null !== wD && (0, AD.jsxs)(AD.Fragment, {
          children: [(0, AD.jsx)("div", {
            className: "DeleteAccountSubtitleNote",
            children: pD("auth:deleteAccountStoreSubscriptions")
          }), (0, AD.jsx)(Az.d, {
            className: "DeleteAccountSubtitleLinks",
            links: wD.map((DD => {
              let {
                store: zD,
                managementUrl: wD
              } = DD;
              return {
                ...Uz[zD],
                url: wD
              }
            }))
          })]
        })]
      })
    }

    function Iz(DD) {
      let {
        showing: zD
      } = DD;
      const {
        userContext: wD,
        isUserContextUpdating: sD
      } = (0, ID.c)(), {
        t: KD
      } = (0, rD.E)(), [LD, cD] = (0, pD.useState)(!1), [RD, UD] = (0, pD.useState)(null), fD = (0, pD.useRef)(zD);
      (0, pD.useEffect)((() => (fD.current = zD, () => {
        fD.current = !1
      })), [zD]);
      const BD = sD || LD;
      return (0, AD.jsxs)("div", {
        className: "AccountSettingsDeleteAccountButtonContainer",
        children: [(0, AD.jsxs)(gD.R, {
          onClick: async function() {
            if (!LD) {
              cD(!0);
              try {
                const DD = await async function() {
                  const [DD, zD] = await Promise.all([(0, wz.d)(wD.availableUserContextTypes) ? gz() : [], Gz(wD)]);
                  if (!fD.current) return pz.e.ok();
                  const pD = (0, dD.e)(wD.getPlayerName(), !hD.featureFlags.canSeeRealPlayerNames);
                  if (!0 !== await sz.NotificationProvider.showPromptPopup({
                      title: "auth:deleteAccountPopupTitleNamed",
                      textOpts: {
                        title: {
                          playerName: pD
                        }
                      },
                      subtitle: (0, AD.jsx)(fz, {
                        warning: Bz(wD.isLoggedIn(), zD),
                        subscriptions: DD
                      }),
                      confirmText: "auth:deleteAccount",
                      destructive: !0,
                      typedConfirm: zD ? KD("auth:deleteAccountTypedConfirm", {
                        playerName: pD
                      }) : void 0,
                      confirmTooltip: "auth:deleteAccountPopupConfirmTooltip",
                      cancelText: "general:cancel",
                      cancelTooltip: "auth:deleteAccountPopupCancelTooltip"
                    }).getResult()) return pz.e.ok();
                  const sD = await (0, xD.postJsonWithMetricsCookiesAndJsonResponse)(`${rz.clientSideServerUrls.indexUrl}/index/metrics/revoke-cookies`, {
                    gameState: XD.e.get("gameState")
                  }, {
                    retries: 3
                  }, wD.getMetricsCookies());
                  if (sD.error) return pz.e.error(sD.error);
                  (0, CD.d)() && (await Lz.l.discordActivity()).exit("User deleted their account");
                  return (0, xD.forgetStoredGuestAccount)(wD.whamm), (0, xD.forceGlobalSignOut)(!0), pz.e.ok()
                }(), zD = DD.isError() ? DD.asError().message : null;
                UD(zD)
              } catch (DD) {
                console.error("Failed to delete account:", DD), UD(KD("auth:genericDeleteAccountError"))
              }
              cD(!1)
            }
          },
          className: "AccountSettingsDeleteAccountButton",
          disabled: BD,
          children: [BD && (0, AD.jsx)("div", {
            className: "DeletingAccountLoader",
            children: (0, AD.jsx)(ED.e, {})
          }), KD("auth:deleteAccount")]
        }), RD && (0, AD.jsx)("div", {
          className: "DeleteAccountError",
          children: RD
        })]
      })
    }

    function Bz(DD, zD) {
      return (0, CD.d)() ? "auth:discordActivityDeleteAccountLossWarning" : DD ? "auth:deleteAccountLossWarning" : zD ? "auth:deleteGuestAccountLossWarning" : "auth:deleteGuestAccountWarning"
    }
    async function Gz(DD) {
      try {
        const {
          accountCreatedAt: zD
        } = await (0, Kz.m)(WD.d.getPlayerProfile(DD, {
          lowerCaseName: DD.getPlayerName().toLowerCase()
        }), 5e3, "The player's profile got no answer in 5 s");
        return null !== zD && Date.now() - zD >= 7 * ND.f
      } catch (zD) {
        return console.error("Delete Account: loading the account's age failed, so the prompt asks for its name:", zD), !0
      }
    }
    var hz = wD(3579),
      nz = wD(3600),
      Mz = wD(3596);

    function Oz(DD) {
      let {
        showing: zD
      } = DD;
      const {
        t: wD
      } = (0, rD.E)(), {
        data: pD,
        failed: sD
      } = (0, kD.f)(hz.d, zD), KD = null === pD ? null : (0, hz.h)(pD);
      return (0, AD.jsxs)("div", {
        className: "SettingBox BlockedAndIgnoredPlayers",
        children: [(0, AD.jsx)("div", {
          className: "AccountSettingsLabel",
          children: wD("settingsMenu:blockedAndIgnoredPlayers")
        }), null === KD && !sD && (0, AD.jsx)(ED.e, {}), null === KD && sD && (0, AD.jsxs)("div", {
          className: "BlockedAndIgnoredPlayersError",
          children: [wD("settingsMenu:blockedAndIgnoredPlayersLoadFailed"), (0, AD.jsx)(gD.f, {
            className: "SmallTextLight",
            onClick: () => {
              hz.d.refresh()
            },
            children: wD("general:tryAgain")
          })]
        }), 0 === (null === KD || void 0 === KD ? void 0 : KD.length) && (0, AD.jsx)("div", {
          className: "BlockedAndIgnoredPlayersEmpty",
          children: wD("settingsMenu:noBlockedOrIgnoredPlayers")
        }), null !== KD && KD.length > 0 && (0, AD.jsx)("ul", {
          className: "BlockedAndIgnoredPlayersList",
          children: KD.map((DD => {
            let {
              name: zD,
              exclusion: pD
            } = DD;
            const sD = Mz.h[pD];
            return (0, AD.jsxs)("li", {
              className: "BlockedAndIgnoredPlayer",
              children: [(0, AD.jsx)("div", {
                className: "BlockedAndIgnoredPlayerName",
                children: zD
              }), (0, AD.jsx)(gD.g, {
                className: "SmallTextLight",
                onClick: () => {
                  (0, nz.f)(sD, zD, {
                    chatMessage: null
                  })
                },
                children: wD(Mz.l[sD].text)
              })]
            }, zD)
          }))
        })]
      })
    }
    const Jz = (0, pD.memo)((function(DD) {
      var zD;
      let {
        showing: wD,
        inGame: sD
      } = DD;
      const {
        t: cD,
        selectedLanguage: RD
      } = (0, rD.E)(), {
        hideSocialLocationFrom: UD
      } = (0, XD.n)(["hideSocialLocationFrom"]), BD = (0, fD.e)(), {
        userContext: GD,
        isUserContextUpdating: nD
      } = (0, ID.c)(), [MD, OD] = (0, pD.useState)(null !== (zD = GD.getPlayerName()) && void 0 !== zD ? zD : ""), [VD, PD] = (0, pD.useState)(null), {
        purchasing: kD,
        outcome: mD,
        purchase: eD
      } = (0, bD.d)("/super-rank-welcome"), oD = (0, ND.jc)((0, rD.n)(RD.code, "general:timeLeft"), GD.superRankInfo), aD = vD(wD), uD = oD ? cD("general:timeLeft", {
        time: oD
      }) : aD, [qD, Dz] = (0, pD.useState)(!1), [wz, pz] = (0, pD.useState)(!1), sz = (0, pD.useRef)(null), Kz = (0, pD.useRef)(null), rz = (0, lD.g)({
        showProgressUpdateMessage: !0,
        enabled: !0
      }), Lz = null === rz, cz = null !== rz && void 0 !== rz ? rz : [], gz = GD !== xD.NULL_USER_CONTEXT && !GD.isLoggedIn(), Rz = gz && 0 !== (null === rz || void 0 === rz ? void 0 : rz.length), [Az, Uz] = (0, pD.useState)([]), [fz, Bz] = (0, pD.useState)(!1), Gz = GD.playerHasRank("youtuber"), hz = (0, pD.useCallback)((() => WD.d.getPlayerProfile(GD, {
        lowerCaseName: GD.getPlayerName().toLowerCase()
      }).then((DD => {
        Uz(DD.socialLinks)
      })).catch((DD => {
        console.error("Failed to refresh social links", DD)
      }))), [GD]);

      function nz(DD) {
        DD !== MD && ((0, dD.q)(DD) ? (DD = (0, dD.u)(DD), PD(cD("homePage:nameCharacters"))) : PD(null), sz.current && (sz.current.value = DD), OD(DD))
      }
      return (0, pD.useEffect)((() => (!0 === wD ? (clearInterval(Kz.current), Kz.current = setInterval(BD, 1e3)) : clearInterval(Kz.current), () => {
        clearInterval(Kz.current)
      })), [wD, BD]), (0, pD.useEffect)((() => {
        var DD;
        OD(null !== (DD = GD.getPlayerName()) && void 0 !== DD ? DD : "")
      }), [GD]), (0, pD.useEffect)((() => {
        if (!wD || !Gz || nD) return;
        let DD = !1;
        return Bz(!0), Uz([]), WD.d.getPlayerProfile(GD, {
          lowerCaseName: GD.getPlayerName().toLowerCase()
        }).then((zD => {
          DD || Uz(zD.socialLinks)
        })).catch((DD => {
          console.error("Failed to load social links", DD)
        })).finally((() => {
          DD || Bz(!1)
        })), () => {
          DD = !0
        }
      }), [wD, Gz, nD, GD]), (0, AD.jsxs)("div", {
        className: KD()("SettingsMenuRightInner AccountSettings", {
          AccountSettingsLocked: sD
        }),
        children: [sD && (0, AD.jsx)("div", {
          className: "AccountSettingsInGameWarning",
          children: cD("settingsMenu:accountSettingsInGameWarning")
        }), (0, AD.jsxs)("div", {
          className: "SettingBox SetAccountNameDiv SmallTextLight",
          children: [(0, AD.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsNameLabel",
            children: [cD("homePage:discordNamePopupTitle"), (0, AD.jsxs)(jD.LinkPreserveSearch, {
              className: "AccountSettingsViewProfile",
              to: (0, SD.j)({
                name: GD.getPlayerName()
              }),
              onClick: () => {
                XD.e.set({
                  openEverythingMenuName: null
                })
              },
              children: [(0, AD.jsx)(LD.e, {
                name: "arrow-up-right-from-square"
              }), " ", cD("profileCard:viewProfile")]
            })]
          }), (0, AD.jsxs)("div", {
            className: "EnterAccNameDivWrapper",
            "data-pad-initial-area": !0,
            children: [(0, AD.jsxs)("div", {
              className: "EnterAccNameInputRow",
              children: [hD.featureFlags.canChangeName && (0, AD.jsx)(JD.e, {
                className: "EnterName",
                placeholderText: cD("homePage:enterName"),
                maxLength: dD.l,
                defaultValue: MD,
                onValueChange: DD => {
                  nz(DD)
                },
                forcedText: qD || !hD.featureFlags.canChangeName ? MD : null,
                blurOnEnter: !0,
                domRef: sz
              }), (0, AD.jsx)(gD.f, {
                className: "ChooseRandomNameButton",
                onClick: () => {
                  nz((0, dD.h)())
                },
                children: (0, AD.jsx)(LD.e, {
                  name: "dice",
                  className: "ChooseRandomNameIcon"
                })
              }), !hD.featureFlags.canChangeName && (0, AD.jsx)("div", {
                className: "EnterName NoInput",
                children: (0, dD.e)(MD, !hD.featureFlags.canSeeRealPlayerNames)
              })]
            }), (0, AD.jsx)(gD.f, {
              className: "ChooseNameButton",
              disabled: qD || MD === GD.getPlayerName(),
              onClick: () => {
                MD.length < dD.n ? PD(cD("homePage:changeNameMinLengthError", {
                  length: dD.n
                })) : MD.length > dD.l ? PD(cD("homePage:changeNameMaxLengthError", {
                  length: dD.l
                })) : (Dz(!0), PD(null), (0, TD.k)(GD, MD).then((DD => {
                  Dz(!1), "taken" === DD.outcome ? PD(cD("homePage:nameTaken")) : "refused" === DD.outcome ? PD(DD.message) : "failed" === DD.outcome && PD(cD((0, TD.g)(DD.failure)))
                })))
              },
              children: cD("general:choose")
            })]
          }), VD && (0, AD.jsx)("div", {
            className: "ChooseAccNameError",
            children: VD
          })]
        }), (0, AD.jsx)(QD.b, {
          label: (() => {
            if ((0, FD.n)(UD)) {
              const DD = (0, rD.n)(RD.code, "general:timeLeft"),
                zD = (0, ND.fb)(DD, Date.now(), UD + FD.j);
              return `${cD("settingsMenu:hideSocialLocation")} (${cD("general:timeLeft",{time:zD})})`
            }
            return cD("settingsMenu:hideSocialLocation")
          })(),
          onClick: () => {
            const DD = !(0, FD.n)(UD);
            (0, HD.reportAnalyticsClick)({
              id: "social.hide_location",
              value: DD ? "on" : "off"
            }), pz(!0), WD.d.setHideSocialLocation(GD, DD).then((() => {
              XD.e.set({
                hideSocialLocationFrom: DD ? Date.now() : null
              })
            })).finally((() => {
              pz(!1)
            }))
          },
          checked: (0, FD.n)(UD),
          disabled: wz
        }), Gz && (0, AD.jsxs)("div", {
          className: "SettingBox AccountSettingsSocialLinks",
          children: [(0, AD.jsx)("div", {
            className: "AccountSettingsLabel",
            children: cD("settingsMenu:socialLinks")
          }), fz && (0, AD.jsx)(ED.e, {}), !fz && (0, AD.jsx)(YD.e, {
            socialLinks: Az,
            editable: !0,
            userContext: GD,
            onLinksUpdated: hz
          })]
        }), (0, AD.jsxs)("div", {
          className: "SettingBox",
          children: [(0, AD.jsx)("div", {
            className: "AccountSettingsLabel",
            children: cD(Rz ? "auth:loginOrSwitchAccount" : "auth:login")
          }), Lz && (0, AD.jsx)(ED.e, {}), !Lz && 0 === cz.length && (0, AD.jsx)("div", {
            className: "NoLoginOptions",
            children: cD("auth:noLoginOptions")
          }), !Lz && cz.length > 0 && "crazygames" !== CD.v && (0, AD.jsx)("div", {
            className: "AccountSettingsLoginButtons",
            children: cz
          }), !Lz && cz.length > 0 && "crazygames" === CD.v && (0, AD.jsxs)("div", {
            className: "AccountSettingsLoginButtons",
            children: [cz[0], cz.length > 1 && (0, AD.jsxs)(AD.Fragment, {
              children: [(0, AD.jsxs)("div", {
                className: "LegacyLoginOptionsHeader",
                children: [(0, AD.jsx)("span", {
                  className: "LegacyLoginOptionsTitle",
                  children: cD("auth:legacyLoginOptions")
                }), (0, AD.jsx)(tD.b, {
                  className: "LegacyLoginOptionsInfoIcon",
                  hoverInfo: cD("auth:legacyLoginOptionsInfo")
                })]
              }), (0, AD.jsx)("div", {
                className: "LegacyAccountSettingsLoginButtons",
                children: cz.slice(1)
              })]
            })]
          }), hD.featureFlags.useLogin && (null !== GD.loggedInInfo || GD.isLoggedIn()) && (0, AD.jsxs)(AD.Fragment, {
            children: [(0, AD.jsx)("div", {
              className: "AccountSettingsLoginDivider"
            }), (0, AD.jsxs)(gD.R, {
              onClick: () => {
                (0, xD.forceGlobalSignOut)()
              },
              className: "AccountSettingsSignedInButton",
              children: [(0, AD.jsx)(LD.e, {
                name: "right-from-bracket"
              }), cD("auth:signOut")]
            })]
          })]
        }), !GD.playerHasRank("super") && (0, yD.purchasesAllowed)() && (0, AD.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, AD.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, AD.jsx)(LD.e, {
              name: "bolt"
            }), cD("homePage:superRank")]
          }), (0, AD.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [(0, AD.jsxs)(gD.o, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, ZD.n)({
                  mode: "self",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, AD.jsx)(LD.e, {
                name: "bolt"
              }), cD("homePage:getSuperRank")]
            }), (0, AD.jsxs)(gD.o, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, ZD.n)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, AD.jsx)(LD.e, {
                name: "bolt"
              }), cD("homePage:giftSuperRank")]
            })]
          })]
        }), GD.playerHasRank("super") && (0, AD.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, AD.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, AD.jsx)(LD.e, {
              name: "bolt"
            }), cD("homePage:superRank"), uD && (0, AD.jsxs)("div", {
              className: "AccountSettingsSuperRankTimeLeft",
              children: ["(", uD, ")"]
            })]
          }), (0, yD.purchasesAllowed)() && (0, AD.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [!(0, ND.Bc)(GD.superRankInfo) && (0, AD.jsxs)(gD.o, {
              className: "AccountSettingsSuperRankProlong",
              loading: kD,
              onClick: () => {
                eD(iD.h.id, null)
              },
              children: [(0, AD.jsx)(LD.e, {
                name: "bolt"
              }), cD("settingsMenu:getSuperRankAdditionalDaysPremiumCurrency", {
                days: iD.h.product.days,
                price: iD.h.price
              })]
            }), (0, AD.jsxs)(gD.o, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, ZD.n)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, AD.jsx)(LD.e, {
                name: "bolt"
              }), cD("homePage:giftSuperRank")]
            })]
          }), mD && (0, AD.jsx)("div", {
            className: "AccountSettingsSuperRankProlongError SmallTextBold",
            children: cD(mD.translationKey)
          })]
        }), (0, AD.jsx)(zz, {
          showing: wD
        }), hD.featureFlags.useSocialFeatures && (0, AD.jsx)(Oz, {
          showing: wD
        }), (0, AD.jsxs)("div", {
          className: "SettingBoxGroup AccountSettingsDeleteAccountGroup",
          children: [(0, AD.jsxs)("div", {
            className: "SettingBox AccountSettingsDeleteAccount SettingBoxWarning",
            children: [(0, AD.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: cD(Ez(gz, Rz))
            }), (0, CD.d)() && (0, AD.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: cD("auth:discordActivityKickWarning")
            }), (0, AD.jsx)(Iz, {
              showing: wD
            })]
          }), (0, AD.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: cD(gz ? "auth:deleteGuestAccountWarning" : "auth:deleteAccountLossWarning")
          })]
        })]
      })
    }));

    function Ez(DD, zD) {
      return DD ? zD ? "auth:deleteGuestAccountButtonTitle" : "auth:deleteGuestAccountWarning" : "auth:deleteAccountButtonTitle"
    }
    var Qz = wD(34118),
      Xz = wD(3115),
      Vz = wD(1260),
      Pz = wD(1426),
      Cz = wD(1973),
      xz = wD(8887),
      Tz = wD(34122);

    function bz() {
      const {
        t: DD
      } = (0, rD.E)();
      return (0, Cz.i)("localPlayerAlive") ? (0, AD.jsx)(xz.b, {
        icon: "camera",
        title: DD("screenshotMode:title"),
        sub: DD("screenshotMode:entrySub"),
        onClick: Tz.d
      }) : null
    }
    var jz = wD(34133);
    const dz = (0, pD.memo)((function(DD) {
        let {
          inGame: zD
        } = DD;
        const {
          t: wD,
          selectedLanguage: pD
        } = (0, rD.E)(), {
          clientEscMenuOptions: sD,
          showDebugOverlay: KD,
          isTouchScreen: LD
        } = (0, XD.n)(["clientEscMenuOptions", "showDebugOverlay", "isTouchScreen"]), cD = (0, BD.h)("hideCoordinates");
        let gD = "settingsMenu:showCoordinates",
          RD = "settingsMenu:showChunkCoordinates";

        function UD(DD) {
          const zD = new Intl.DisplayNames([DD], {
            type: "language"
          }).of(DD);
          return zD.charAt(0).toUpperCase() + zD.slice(1)
        }
        return cD && (gD = "settingsMenu:showCoordinatesHidden", RD = "settingsMenu:showChunkCoordinatesHidden"), (0, AD.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [zD && hD.featureFlags.canUseInviteLinks && (0, AD.jsxs)("div", {
            className: "SettingBox",
            children: [(0, AD.jsx)("div", {
              className: "SettingsMenuInviteHeader",
              children: wD("settingsMenu:inviteLink")
            }), (0, AD.jsx)(Qz.f, {})]
          }), (0, AD.jsxs)("div", {
            className: "SettingBox",
            children: [(0, AD.jsx)("div", {
              className: "SliderText",
              style: {
                marginBottom: "10px"
              },
              children: wD("settingsMenu:language")
            }), (0, AD.jsx)(Xz.c, {
              options: Object.entries(rD.i).map((DD => {
                let [zD, wD] = DD;
                return {
                  label: (0, AD.jsxs)("div", {
                    className: "SettingsMenuLanguageOption",
                    children: [(0, AD.jsx)("img", {
                      src: wD.flagImg,
                      alt: "flag"
                    }), (0, AD.jsxs)("span", {
                      children: [UD(zD), " ", (0, AD.jsxs)("span", {
                        className: "SettingsMenuLanguageOptionCode",
                        children: ["(", zD, ")"]
                      })]
                    })]
                  }),
                  value: zD
                }
              })),
              value: pD.code,
              onChange: DD => {
                Vz.e.get().setCurrentLanguage(DD.value)
              }
            })]
          }), zD && LD && (0, jz.c)() && (0, AD.jsx)(bz, {}), !(0, hD.isMobileApp)() && (0, Pz.g)() && hD.featureFlags.useForceRotateForceFullscreenOverlay && (0, AD.jsx)(QD.b, {
            label: wD("settingsMenu:disableFullscreenMode"),
            checked: sD.disableFullscreen,
            onClick: DD => {
              XD.e.setClientEscMenuOptions({
                disableFullscreen: DD
              })
            }
          }), (0, AD.jsx)(QD.b, {
            label: wD(gD),
            checked: sD.showCoordinates,
            onClick: DD => {
              XD.e.setClientEscMenuOptions({
                showCoordinates: DD
              })
            },
            disabled: cD
          }), (0, AD.jsx)(QD.b, {
            label: wD(RD),
            checked: sD.showChunkCoordinates,
            onClick: DD => {
              XD.e.setClientEscMenuOptions({
                showChunkCoordinates: DD
              })
            },
            disabled: cD
          }), (0, AD.jsx)(QD.b, {
            label: wD("settingsMenu:showFps"),
            checked: sD.showFPS,
            onClick: DD => {
              XD.e.setClientEscMenuOptions({
                showFPS: DD
              })
            }
          }), (0, AD.jsx)(QD.b, {
            label: wD("settingsMenu:disableBunnyHopping"),
            checked: sD.disableBunnyHopping,
            onClick: DD => {
              XD.e.setClientEscMenuOptions({
                disableBunnyHopping: DD
              })
            }
          }), (0, Lz.w)() && (0, AD.jsx)(QD.b, {
            label: wD("settingsMenu:showChat"),
            checked: sD.showChat,
            onClick: DD => {
              XD.e.setClientEscMenuOptions({
                showChat: DD
              })
            }
          }), (0, AD.jsx)(QD.b, {
            label: wD("settingsMenu:showDebugOverlay"),
            checked: KD,
            onClick: DD => {
              XD.e.set({
                showDebugOverlay: DD
              })
            }
          }), hD.featureFlags.useSocialFeatures && (0, AD.jsx)(QD.b, {
            label: wD("settingsMenu:showFriendOnlineToasts"),
            checked: sD.showFriendOnlineToasts,
            onClick: DD => {
              XD.e.setClientEscMenuOptions({
                showFriendOnlineToasts: DD
              })
            }
          }), (0, AD.jsx)(QD.b, {
            label: wD("settingsMenu:showNewItemIndicator"),
            checked: sD.showNewItemIndicator,
            onClick: DD => {
              XD.e.setClientEscMenuOptions({
                showNewItemIndicator: DD
              })
            }
          })]
        })
      })),
      Sz = (0, pD.memo)((function() {
        const {
          t: DD
        } = (0, rD.E)(), {
          soundVolume: zD,
          musicVolume: wD
        } = (0, XD.n)(["soundVolume", "musicVolume"]);
        return (0, AD.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, AD.jsx)(QD.e, {
            name: DD("settingsMenu:musicVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: wD,
            onChange: DD => {
              XD.e.set({
                musicVolume: Math.round(100 * DD) / 100
              })
            },
            format: DD => DD.toFixed(2)
          }), (0, AD.jsx)(QD.e, {
            name: DD("settingsMenu:soundEffectsVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: zD,
            onChange: DD => {
              XD.e.set({
                soundVolume: Math.round(100 * DD) / 100
              })
            },
            format: DD => DD.toFixed(2)
          })]
        })
      }));
    var iz = wD(713),
      lz = wD(1442),
      Wz = wD(3674),
      Nz = wD(34139),
      Zz = wD(3482);
    const yz = {
      app: "notificationSettings:pushTargetsApp",
      browser: "notificationSettings:pushTargetsBrowser",
      msnPlay: "notificationSettings:pushTargetsMsnPlay"
    };

    function kz() {
      const {
        t: DD
      } = (0, rD.E)(), zD = (0, Zz.c)(), {
        mobilePushNotificationsCanAsk: wD
      } = (0, XD.n)(["mobilePushNotificationsCanAsk"]), [sD, KD] = (0, pD.useState)(null), [LD, cD] = (0, pD.useState)(!1), [RD, UD] = (0, pD.useState)(null), [fD, ID] = (0, pD.useState)(!1), BD = (0, pD.useCallback)((() => {
        (0, Wz.b)().then((DD => {
          zD.current && (KD(DD), cD(!1))
        })).catch((DD => {
          console.error("Failed to load push notification targets:", DD), zD.current && cD(!0)
        }))
      }), [zD]), GD = (0, pD.useCallback)((() => {
        (0, Nz.h)().then((DD => {
          zD.current && UD((() => DD))
        }))
      }), [zD]);
      (0, pD.useEffect)((() => {
        BD()
      }), [BD]), (0, pD.useEffect)((() => {
        GD()
      }), [GD, wD]), (0, lz.g)(Wz.i, BD);
      const hD = null === sD ? [] : Object.keys(yz).filter((DD => sD[DD] > 0));
      return (0, AD.jsxs)("div", {
        className: "SettingBox PushNotificationSettings",
        children: [(0, AD.jsx)("div", {
          className: "SliderText",
          children: DD("notificationSettings:pushNotifications")
        }), null === sD && LD && (0, AD.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: DD("notificationSettings:pushTargetsLoadFailed")
        }), null !== sD && 0 === hD.length && (0, AD.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: DD("notificationSettings:pushTargetsNone")
        }), hD.length > 0 && (0, AD.jsx)("ul", {
          className: "PushNotificationSettingsTargets",
          children: hD.map((zD => {
            var wD;
            return (0, AD.jsx)("li", {
              children: DD(yz[zD], {
                count: null !== (wD = null === sD || void 0 === sD ? void 0 : sD[zD]) && void 0 !== wD ? wD : 0
              })
            }, zD)
          }))
        }), null !== RD && (0, AD.jsx)(gD.f, {
          className: "PushNotificationSettingsButton",
          loading: fD,
          onClick: () => {
            ID(!0), RD().catch((DD => {
              console.error("Failed to turn on push notifications:", DD)
            })).finally((() => {
              zD.current && (ID(!1), GD())
            }))
          },
          children: DD("notificationSettings:pushTurnOn")
        })]
      })
    }
    var mz = wD(2542);
    const ez = {
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
      oz = {
        remindersOn: {
          label: "dailyDrop:settingReminders",
          reportAs: "reminders"
        },
        hidden: {
          label: "dailyDrop:settingHide",
          reportAs: "hidden"
        }
      };

    function az(DD) {
      let {
        setting: zD,
        value: wD
      } = DD;
      const {
        t: sD
      } = (0, rD.E)(), LD = (0, Zz.c)(), [cD, gD] = (0, pD.useState)(null), [RD, UD] = (0, pD.useState)(!1), [fD, ID] = (0, pD.useState)(null);
      return (0, pD.useEffect)((() => {
        "remindersOn" === zD && (0, Nz.h)().then((DD => {
          LD.current && ID((() => DD))
        }), (DD => {
          console.error("Couldn't tell whether this device can take push notifications:", DD)
        }))
      }), [zD, LD]), (0, AD.jsx)(QD.b, {
        className: KD()({
          DailyDropSettingFailed: RD
        }),
        label: sD(oz[zD].label),
        checked: null !== cD && void 0 !== cD ? cD : wD,
        note: RD ? sD("dailyDrop:settingFailed") : void 0,
        onClick: DD => {
          null === cD && (gD(DD), UD(!1), DD && null !== fD && fD().catch((DD => {
            console.error("Failed to ask for push notifications for Lucky Skin Block reminders:", DD)
          })), (0, mz.n)("daily_drop.setting", `${oz[zD].reportAs}_${DD?"on":"off"}`), (0, mz.o)("hidden" === zD ? {
            hidden: DD
          } : {
            remindersOn: DD
          }).catch((DD => {
            console.error(`Failed to save the Lucky Skin Block's ${zD} setting:`, DD), LD.current && UD(!0)
          })).finally((() => {
            LD.current && gD(null)
          })))
        }
      })
    }
    const uz = (0, pD.memo)((function() {
      const {
        t: DD
      } = (0, rD.E)(), {
        clientEscMenuOptions: zD
      } = (0, XD.n)(["clientEscMenuOptions"]), {
        userContext: wD
      } = (0, ID.c)(), pD = wD.dailyDrop;
      return (0, AD.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [hD.featureFlags.useSocialFeatures && (0, AD.jsx)(QD.c, {
          label: DD("notificationSettings:friendRequests"),
          options: iz.e.map((zD => ({
            value: zD,
            label: DD(ez[zD].label)
          }))),
          value: zD.friendRequestNotifications,
          onChange: DD => {
            XD.e.setClientEscMenuOptions({
              friendRequestNotifications: DD
            })
          },
          circleInfoText: (0, AD.jsx)("div", {
            className: "NotificationSettingLevelsInfo",
            children: iz.e.map((zD => (0, AD.jsxs)("div", {
              children: [(0, AD.jsx)("b", {
                children: DD(ez[zD].label)
              }), ": ", DD(ez[zD].info)]
            }, zD)))
          })
        }), null !== pD && (0, AD.jsxs)(AD.Fragment, {
          children: [(0, AD.jsx)(az, {
            setting: "remindersOn",
            value: pD.remindersOn
          }), (0, AD.jsx)(az, {
            setting: "hidden",
            value: pD.hidden
          })]
        }), (0, AD.jsx)(kz, {})]
      })
    }));
    var vz = wD(4520),
      tz = wD(197),
      Fz = wD(323),
      Yz = wD(6693),
      Hz = wD(3462),
      qz = wD(34145),
      Dw = wD(619),
      zw = wD(25);
    var ww = wD(638),
      pw = wD(35),
      sw = wD(4399);
    const Kw = new Map([
      ["chunkHorizAddDist", "horizontal"],
      ["chunkVertAddDist", "vertical"]
    ]);

    function rw(DD) {
      return Kw.has(DD) ? nD.gameBridge.lookup("iJ", null) : null
    }

    function Lw(DD) {
      if (!(0, Dw.B)(XD.e.get("clientEscMenuOptions")[DD])) return XD.e.get("clientEscMenuOptions")[DD];
      const zD = rw(DD);
      return null !== zD ? zD[Kw.get(DD)] : pw.h.getItem(DD)
    }

    function gw(DD, zD) {
      if ("useTouchControls" === DD) return void(0, sw.b)(zD);
      DD in XD.e.get("clientEscMenuOptions") && XD.e.setClientEscMenuOptions({
        [DD]: zD
      });
      const wD = rw(DD);
      null !== wD && nD.gameBridge.send("setChunkAddDistance", {
        ...wD,
        [Kw.get(DD)]: zD
      }), pw.h.setItem(DD, zD)
    }
    var Rw = wD(4454),
      Aw = wD(34150),
      Uw = wD(34158),
      fw = wD(4518);

    function Iw(DD) {
      var zD, sD, LD, cD;
      let {
        minChunkAddDist: gD,
        getValue: RD,
        onChange: UD,
        setApplySettingsCallback: fD
      } = DD;
      const {
        t: ID
      } = (0, rD.E)(), {
        clientEscMenuOptions: GD
      } = (0, XD.n)(["clientEscMenuOptions", "showDistantNametags"]), nD = (0, pD.useRef)(RD("showFog")), MD = (0, pD.useRef)(GD.antiAliasing), OD = (0, pD.useRef)(GD.useWebGpu), [JD, ED] = (0, pD.useState)(null), [PD, CD] = (0, pD.useState)((() => (0, Hz.h)(hD.featureFlags.settings.canUseShaderPacks))), [xD] = (0, pD.useState)((() => XD.e.isWebGpuDefaultOff())), [TD] = (0, pD.useState)(Fz.i);
      (0, pD.useEffect)((() => {
        let DD = !1;
        return (0, hD.hasUsableWebGpuAdapter)().then((zD => {
          DD || ED(zD)
        })), (0, Hz.j)(hD.featureFlags.settings.canUseShaderPacks) && (0, Yz.c)().then((async zD => {
          const pD = null !== zD && await async function(DD) {
            const [{
              isShaderPackActive: zD
            }, {
              loadPageShaderPackCompiler: pD
            }] = await Promise.all([wD.e(137).then((() => wD(6691))), Promise.all([wD.e(77), wD.e(133), wD.e(136)]).then((() => wD(6645)))]);
            return zD(DD, await pD())
          }(zD);
          DD || CD(pD)
        })), () => {
          DD = !0
        }
      }), []);
      const bD = function(DD, zD, wD, pD, sD) {
          return (0, qz.c)(wD, pD) && !0 === zD ? {
            translationKey: "settingsMenu:newWebGpuForcedOnByShaderPack",
            checked: !0,
            disabled: !0
          } : {
            translationKey: !1 !== zD ? "settingsMenu:newWebGpu" : sD ? "settingsMenu:newWebGpuDisabledUntilRestart" : "settingsMenu:newWebGpuUnsupported",
            checked: DD && !1 !== zD,
            disabled: !0 !== zD
          }
        }(GD.useWebGpu, JD, PD, xD, TD),
        jD = (GD.useWebGpu || (0, qz.c)(PD, xD)) && PD && !0 === JD,
        dD = (0, BD.h)("lightingOverride"),
        SD = !(0, Dw.B)(dD);
      let iD = "settingsMenu:enableLighting";
      SD && (iD = dD ? "settingsMenu:enableLightingForcedOn" : "settingsMenu:enableLightingForcedOff");
      const lD = DD => {
          var zD, wD, pD;
          const sD = null !== (zD = DD.showFog) && void 0 !== zD ? zD : RD("showFog"),
            KD = null !== (wD = DD.antiAliasing) && void 0 !== wD ? wD : GD.antiAliasing,
            rD = null !== (pD = DD.useWebGpu) && void 0 !== pD ? pD : GD.useWebGpu,
            LD = !ww.v && sD !== nD.current || KD !== MD.current || rD !== OD.current;
          fD(LD ? () => QD.g : null)
        },
        WD = (0, BD.h)("fogChunkDistanceOverride"),
        ND = (0, BD.h)("fogBlockDistanceOverride"),
        ZD = !(0, Dw.B)(WD) || !(0, Dw.B)(ND),
        yD = ZD ? "settingsMenu:showFogForcedOn" : "settingsMenu:showFog",
        [kD, mD] = (0, vz.c)(gD),
        [eD, oD] = (0, fw.g)(gD),
        aD = ID("settingsMenu:chunkLoadDistanceDeviceLimit"),
        uD = eD < kD,
        vD = Math.min(null !== (zD = RD("chunkHorizAddDist")) && void 0 !== zD ? zD : gD[0], eD),
        tD = !ZD && function(DD, zD) {
          return !0 === DD.showFog && DD.fogChunkDistance > zD
        }(GD, vD);
      return (0, AD.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [(0, AD.jsx)(QD.e, {
          name: ID("settingsMenu:horizontalChunkLoadDistance"),
          min: gD[0],
          max: kD,
          selectableMax: eD,
          cappedNote: aD,
          step: 1,
          initValue: vD,
          onChange: DD => {
            !0 === RD("showFog") && DD < RD("fogChunkDistance") && UD("fogChunkDistance", DD), UD("chunkHorizAddDist", DD), zw.l.KG("updatedChunkLoadDist")
          },
          circleInfoText: ID("settingsMenu:chunkLoadDistanceInfo")
        }), (0, AD.jsx)(QD.e, {
          name: ID("settingsMenu:verticalChunkLoadDistance"),
          min: gD[1],
          max: mD,
          selectableMax: oD,
          cappedNote: uD ? void 0 : aD,
          step: 1,
          initValue: Math.min(null !== (sD = RD("chunkVertAddDist")) && void 0 !== sD ? sD : gD[1], oD),
          onChange: DD => {
            UD("chunkVertAddDist", DD), zw.l.KG("updatedChunkLoadDist")
          },
          circleInfoText: ID("settingsMenu:chunkLoadDistanceInfo"),
          className: "VerticalChunkLoadSlider"
        }), (0, AD.jsx)(QD.b, {
          label: ID("settingsMenu:chunkFadeIn"),
          checked: GD.chunkFadeIn,
          onClick: DD => {
            XD.e.setClientEscMenuOptions({
              chunkFadeIn: DD
            })
          },
          circleInfoText: ID("settingsMenu:chunkFadeInInfo")
        }), VD.devTools.supports("chunkBorders") && (0, AD.jsx)(QD.b, {
          label: ID("settingsMenu:showChunkBorders"),
          checked: GD.showChunkBorders,
          onClick: DD => {
            XD.e.setClientEscMenuOptions({
              showChunkBorders: DD
            })
          },
          circleInfoText: ID("settingsMenu:showChunkBordersInfo")
        }), (0, AD.jsx)(QD.b, {
          label: ID(iD),
          checked: GD.enableLighting,
          onClick: DD => {
            XD.e.setClientEscMenuOptions({
              enableLighting: DD
            })
          },
          disabled: SD
        }), (0, AD.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, AD.jsx)(QD.b, {
            label: ID(yD),
            checked: GD.showFog,
            onClick: DD => {
              lD({
                showFog: DD
              }), XD.e.setClientEscMenuOptions({
                showFog: DD
              })
            },
            disabled: ZD,
            className: KD()({
              SettingBoxWarning: tD
            })
          }), (0, AD.jsx)(QD.e, {
            name: ID("settingsMenu:fogChunkDistance"),
            min: gD[0],
            max: tz.f.maxChunkHorizAddDistance,
            step: 1,
            initValue: null !== (LD = GD.fogChunkDistance) && void 0 !== LD ? LD : gD[0],
            onChange: DD => {
              XD.e.setClientEscMenuOptions({
                fogChunkDistance: DD
              }), zw.l.KG("fogChunkDistanceChanged", DD)
            },
            circleInfoText: ID("settingsMenu:fogChunkDistanceInfo"),
            disabled: ZD || !1 === RD("showFog"),
            className: KD()({
              SettingBoxWarning: tD
            })
          }), tD && (0, AD.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: ID("settingsMenu:fogChunkDistanceInfo")
          })]
        }), !ww.v && (0, AD.jsx)(QD.b, {
          label: ID(jD ? "settingsMenu:disableBlockTextureAtlasUnavailableWithShaderPack" : "settingsMenu:disableBlockTextureAtlas"),
          checked: !jD && GD.disableTexAtlas,
          onClick: DD => {
            XD.e.setClientEscMenuOptions({
              disableTexAtlas: DD
            })
          },
          circleInfoText: ID("settingsMenu:disableBlockTextureAtlasInfo"),
          disabled: jD
        }), (0, AD.jsx)(QD.e, {
          name: ID("settingsMenu:fieldOfView"),
          min: 50,
          max: 160,
          step: 1,
          initValue: GD.cameraFOV,
          onChange: DD => {
            XD.e.setClientEscMenuOptions({
              cameraFOV: DD
            })
          }
        }), (0, AD.jsx)(QD.b, {
          label: ID("settingsMenu:disableViewBobbing"),
          checked: GD.disableBobbing,
          onClick: DD => {
            XD.e.setClientEscMenuOptions({
              disableBobbing: DD
            })
          },
          circleInfoText: ID("settingsMenu:disableViewBobbingInfo")
        }), (0, AD.jsx)(QD.b, {
          label: ID("settingsMenu:antiAliasing"),
          checked: GD.antiAliasing,
          onClick: DD => {
            lD({
              antiAliasing: DD
            }), (0, Rw.e)("antiAliasing"), XD.e.setClientEscMenuOptions({
              antiAliasing: DD
            })
          },
          circleInfoText: ID("settingsMenu:antiAliasingInfo")
        }), (0, AD.jsx)(QD.e, {
          name: ID("settingsMenu:pixelScale"),
          min: 1,
          max: 8,
          step: 1,
          initValue: null !== (cD = GD.pixelScale) && void 0 !== cD ? cD : 1,
          onChange: DD => {
            (DD !== XD.e.get("clientEscMenuOptions").pixelScale || (0, Uw.q)()) && (0, Rw.e)("pixelScale"), XD.e.setClientEscMenuOptions({
              pixelScale: DD
            })
          },
          circleInfoText: ID("settingsMenu:pixelScaleInfo"),
          format: DD => `${DD}x`
        }), (0, AD.jsx)(QD.b, {
          label: ID("settingsMenu:pixelSmoothing"),
          checked: GD.pixelSmoothing,
          onClick: DD => {
            XD.e.setClientEscMenuOptions({
              pixelSmoothing: DD
            })
          },
          circleInfoText: ID("settingsMenu:pixelSmoothingInfo")
        }), ww.v && (0, AD.jsx)(QD.b, {
          label: ID("settingsMenu:distantNametags"),
          checked: (0, Aw.d)(),
          onClick: DD => {
            XD.e.set({
              showDistantNametags: DD
            })
          },
          circleInfoText: ID("settingsMenu:distantNametagsInfo")
        }), (0, AD.jsx)(QD.b, {
          label: ID(bD.translationKey),
          checked: bD.checked,
          onClick: DD => {
            lD({
              useWebGpu: DD
            }), XD.e.setClientEscMenuOptions({
              useWebGpu: DD
            })
          },
          circleInfoText: ID("settingsMenu:newWebGpuInfo"),
          disabled: bD.disabled
        })]
      })
    }
    var Bw = wD(4445),
      Gw = wD(8865),
      hw = wD(34174),
      nw = wD(8875),
      Mw = wD(34181);
    const Ow = {
        color: 16777215,
        name: "white"
      },
      Jw = {
        color: 0,
        name: "black"
      },
      Ew = [Ow, {
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
      }, Jw],
      Qw = [Jw, Ow];

    function Xw(DD) {
      return `${DD} px`
    }

    function Vw(DD) {
      return `${DD}%`
    }

    function Pw(DD) {
      let {
        label: zD,
        value: wD,
        swatches: pD,
        onChange: sD
      } = DD;
      const {
        t: LD
      } = (0, rD.E)(), cD = !pD.some((DD => DD.color === wD));
      return (0, AD.jsxs)("div", {
        className: "SettingBox CrosshairColorRow",
        children: [(0, AD.jsx)("div", {
          className: "SliderText",
          children: zD
        }), (0, AD.jsxs)("div", {
          className: "CrosshairSwatches",
          role: "radiogroup",
          "aria-label": zD,
          children: [pD.map((DD => {
            let {
              color: zD,
              name: pD
            } = DD;
            return (0, AD.jsx)("button", {
              type: "button",
              role: "radio",
              "aria-checked": zD === wD,
              "aria-label": LD(`crosshairSettings:color_${pD}`),
              "data-pad-focusable": !0,
              className: KD()("CrosshairSwatch", {
                Selected: zD === wD
              }),
              style: {
                background: (0, Mw.k)(zD)
              },
              onClick: () => {
                sD(zD)
              }
            }, zD)
          })), (0, AD.jsx)("label", {
            className: KD()("CrosshairSwatch CrosshairSwatchCustom", {
              Selected: cD
            }),
            style: cD ? {
              background: (0, Mw.k)(wD)
            } : void 0,
            title: LD("crosshairSettings:customColor"),
            "data-pad-focusable": !0,
            children: (0, AD.jsx)("input", {
              type: "color",
              "aria-label": LD("crosshairSettings:customColor"),
              value: (0, Mw.k)(wD),
              onChange: DD => {
                const zD = (0, Mw.q)(DD.target.value);
                null !== zD && sD(zD)
              }
            })
          })]
        })]
      })
    }

    function Cw(DD) {
      let {
        settings: zD,
        onChange: wD
      } = DD;
      const {
        t: pD
      } = (0, rD.E)(), sD = (DD, pD) => {
        wD((0, Mw.y)(zD, DD, pD))
      }, KD = function(DD, wD) {
        let pD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Xw;
        const {
          min: KD,
          max: rD,
          step: LD
        } = Mw.b[DD];
        return (0, AD.jsx)(QD.e, {
          name: wD,
          min: KD,
          max: rD,
          step: LD,
          initValue: zD[DD],
          format: pD,
          onChange: zD => {
            sD(DD, zD)
          }
        }, DD)
      }, LD = ["lines", "dot", "circle"].filter((DD => zD[DD])), cD = (DD, wD, pD) => (0, AD.jsx)(QD.b, {
        label: wD,
        checked: zD[DD],
        disabled: 1 === LD.length && LD[0] === DD,
        circleInfoText: pD,
        onClick: zD => {
          sD(DD, zD)
        }
      }, DD), gD = "shapes" === zD.style;
      return (0, AD.jsxs)(AD.Fragment, {
        children: [(0, AD.jsx)(QD.c, {
          label: pD("crosshairSettings:style"),
          options: [{
            value: "classic",
            label: pD("crosshairSettings:styleClassic")
          }, {
            value: "shapes",
            label: pD("crosshairSettings:styleShapes")
          }],
          value: zD.style,
          onChange: DD => {
            sD("style", DD)
          }
        }), (0, AD.jsx)(Pw, {
          label: pD("crosshairSettings:color"),
          value: zD.color,
          swatches: Ew,
          onChange: DD => {
            sD("color", DD)
          }
        }), KD("opacity", pD("crosshairSettings:opacity"), Vw), !gD && KD("size", pD("crosshairSettings:size"), Vw), gD && (0, AD.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [cD("lines", pD("crosshairSettings:lines")), zD.lines && KD("lineLength", pD("crosshairSettings:lineLength")), zD.lines && KD("lineThickness", pD("crosshairSettings:lineThickness")), zD.lines && KD("gap", pD("crosshairSettings:gap")), zD.lines && cD("tStyle", pD("crosshairSettings:tStyle"))]
        }), gD && (0, AD.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [cD("dot", pD("crosshairSettings:dot")), zD.dot && KD("dotSize", pD("crosshairSettings:dotSize"))]
        }), gD && (0, AD.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [cD("circle", pD("crosshairSettings:circle")), zD.circle && KD("circleRadius", pD("crosshairSettings:circleRadius")), zD.circle && KD("circleThickness", pD("crosshairSettings:circleThickness"))]
        }), (0, AD.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [KD("outline", pD("crosshairSettings:outline"), (DD => DD > 0 ? Xw(DD) : pD("crosshairSettings:off"))), zD.outline > 0 && (0, AD.jsx)(Pw, {
            label: pD("crosshairSettings:outlineColor"),
            value: zD.outlineColor,
            swatches: Qw,
            onChange: DD => {
              sD("outlineColor", DD)
            }
          })]
        }), cD("growOnClick", pD("crosshairSettings:growOnClick")), gD && cD("forGuns", pD("crosshairSettings:forGuns"), pD("crosshairSettings:forGunsInfo"))]
      })
    }
    var xw = wD(79),
      Tw = wD(1282),
      bw = wD(12810),
      jw = wD(13954),
      dw = wD(15381),
      Sw = wD(15845);
    const iw = ["sky", "grass", "stone", "sand", "snow", "night"],
      lw = "4rem";

    function Ww(DD) {
      return {
        backgroundImage: `url(${DD})`,
        backgroundSize: `${lw} ${lw}`,
        backgroundRepeat: "repeat",
        imageRendering: "pixelated"
      }
    }

    function Nw(DD) {
      return {
        ...(() => {
          switch (DD) {
            case "sky":
              return {
                backgroundImage: "linear-gradient(#3d8fe0 0%, #8cc8f5 45%, #d6eefc 58%, #6fae4a 58.01%, #4f8a33 100%)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              };
            case "grass":
              return Ww(bw);
            case "stone":
              return Ww(jw);
            case "sand":
              return Ww(dw);
            case "snow":
              return Ww(Sw);
            case "night":
              return {
                backgroundImage: "radial-gradient(circle at 50% 50%, #1e2a4a 0%, #070b16 100vmax)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              }
          }
        })(),
        backgroundPosition: "center"
      }
    }

    function Zw(DD) {
      return Object.freeze({
        ...Mw.e,
        style: "shapes",
        outline: 1,
        lines: !1,
        ...DD
      })
    }
    const yw = [{
        id: "default",
        settings: Mw.e
      }, {
        id: "cross",
        settings: Zw({
          color: 5046092,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3
        })
      }, {
        id: "crossDot",
        settings: Zw({
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
        settings: Zw({
          dot: !0,
          dotSize: 4
        })
      }, {
        id: "circle",
        settings: Zw({
          circle: !0,
          circleRadius: 12,
          circleThickness: 1.5,
          dot: !0,
          dotSize: 2
        })
      }, {
        id: "tShape",
        settings: Zw({
          color: 16731391,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3,
          tStyle: !0
        })
      }, {
        id: "tiny",
        settings: Zw({
          color: 16776960,
          lines: !0,
          lineLength: 3,
          lineThickness: 1,
          gap: 2
        })
      }, {
        id: "bold",
        settings: Zw({
          lines: !0,
          lineLength: 10,
          lineThickness: 3,
          gap: 0,
          outline: 1.5
        })
      }],
      kw = ["growOnClick", "forGuns"];
    var mw = wD(34188);

    function ew(DD) {
      let {
        label: zD,
        selected: wD,
        onClick: pD,
        className: sD,
        style: rD,
        children: LD
      } = DD;
      return (0, AD.jsx)("button", {
        type: "button",
        role: "radio",
        "aria-checked": wD,
        title: zD,
        "aria-label": zD,
        "data-pad-focusable": !0,
        className: KD()("CrosshairBackdropSwatch", sD, {
          Selected: wD
        }),
        style: rD,
        onClick: pD,
        children: LD
      })
    }

    function ow(DD) {
      let {
        backdrop: zD,
        onChange: wD,
        game: pD
      } = DD;
      const {
        t: sD
      } = (0, rD.E)();
      return (0, AD.jsxs)("div", {
        className: "CrosshairBackdrops",
        role: "radiogroup",
        "aria-label": sD("crosshairSettings:background"),
        children: [pD && (0, AD.jsx)(ew, {
          label: sD("crosshairSettings:bg_game"),
          selected: pD.selected,
          onClick: pD.onSelect,
          className: "CrosshairGameSwatch",
          children: (0, AD.jsx)(LD.e, {
            name: "cube"
          })
        }), iw.map((DD => (0, AD.jsx)(ew, {
          label: sD(`crosshairSettings:bg_${DD}`),
          selected: !(null !== pD && void 0 !== pD && pD.selected) && DD === zD,
          style: Nw(DD),
          onClick: () => {
            wD(DD)
          }
        }, DD)))]
      })
    }

    function aw(DD) {
      let {
        settings: zD,
        touch: wD,
        backdrop: pD,
        onChange: sD
      } = DD;
      const {
        t: LD
      } = (0, rD.E)(), cD = function(DD) {
        var zD;
        return null !== (zD = yw.find((zD => (0, Mw.u)(zD.settings, DD, kw)))) && void 0 !== zD ? zD : null
      }(zD);
      return (0, AD.jsx)("div", {
        className: "CrosshairPresets",
        role: "radiogroup",
        "aria-label": LD("crosshairSettings:presets"),
        children: yw.map((DD => {
          const rD = (null === cD || void 0 === cD ? void 0 : cD.id) === DD.id;
          return (0, AD.jsxs)("button", {
            type: "button",
            role: "radio",
            "aria-checked": rD,
            "data-pad-focusable": !0,
            className: KD()("CrosshairPreset", {
              Selected: rD
            }),
            onClick: () => {
              sD(function(DD, zD) {
                return {
                  ...zD.settings,
                  growOnClick: DD.growOnClick,
                  forGuns: DD.forGuns
                }
              }(zD, DD))
            },
            children: [(0, AD.jsx)("div", {
              className: "CrosshairPresetStage",
              style: Nw(pD),
              children: (0, AD.jsx)(mw.d, {
                settings: DD.settings,
                touch: wD,
                inPreview: !0
              })
            }), (0, AD.jsx)("div", {
              className: "CrosshairPresetName",
              children: LD(`crosshairSettings:preset_${DD.id}`)
            })]
          }, DD.id)
        }))
      })
    }
    var uw = wD(1685);

    function vw(DD, zD) {
      const [wD, sD] = (0, pD.useState)(!1), KD = () => {
        sD(!1)
      }, [rD, LD] = (0, pD.useState)(!1), cD = (0, pD.useRef)({
        growOnClick: DD.growOnClick,
        forGuns: DD.forGuns
      });
      (0, pD.useEffect)((() => {
        const zD = cD.current;
        cD.current = {
          growOnClick: DD.growOnClick,
          forGuns: DD.forGuns
        }, (DD.growOnClick && !zD.growOnClick || DD.forGuns && !zD.forGuns) && LD(!0)
      }), [DD.growOnClick, DD.forGuns]), (0, pD.useEffect)((() => {
        if (!rD) return;
        const DD = setTimeout((() => {
          LD(!1)
        }), 600);
        return () => {
          clearTimeout(DD)
        }
      }), [rD]);
      const gD = wD || rD;
      return {
        view: {
          pressed: gD,
          spread: gD && DD.forGuns && !DD.growOnClick ? 6 : 0
        },
        handlers: {
          onPointerDown: DD => {
            !DD.target.closest(zD) && (0, uw.c)(DD.currentTarget, DD.pointerId) && sD(!0)
          },
          onPointerUp: KD,
          onPointerCancel: KD,
          onLostPointerCapture: KD
        }
      }
    }

    function tw(DD) {
      let {
        settings: zD,
        touch: wD,
        backdrop: pD,
        className: sD,
        children: rD,
        label: LD
      } = DD;
      const cD = vw(zD, ".CrosshairStageControls");
      return (0, AD.jsxs)("div", {
        className: KD()("CrosshairStage", sD),
        style: Nw(pD),
        ...cD.handlers,
        children: [(0, AD.jsx)("div", {
          className: "CrosshairStageHold",
          role: "img",
          "aria-label": LD,
          children: (0, AD.jsx)(mw.d, {
            settings: zD,
            touch: wD,
            inPreview: !0,
            ...cD.view
          })
        }), rD]
      })
    }
    const Fw = "crosshairFullScreen";

    function Yw(DD) {
      let {
        settings: zD,
        touch: wD,
        backdrop: sD,
        onBackdrop: cD,
        inGame: RD,
        onChange: UD,
        onClose: fD
      } = DD;
      const {
        t: ID
      } = (0, rD.E)(), BD = (0, pD.useRef)(null);
      (0, Tw.u)("popup", BD, fD),
      function(DD) {
        const zD = (0, pD.useRef)(DD);
        zD.current = DD, (0, pD.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [Fw]: !0
          }, "");
          let DD = !1;
          const wD = () => {
            DD = !0, zD.current()
          };
          return window.addEventListener("popstate", wD), () => {
            var zD;
            window.removeEventListener("popstate", wD), !DD && null !== (zD = window.history.state) && void 0 !== zD && zD[Fw] && window.history.back()
          }
        }), [])
      }(fD);
      const GD = (0, pD.useRef)(fD);
      GD.current = fD, (0, pD.useEffect)((() => {
        function DD(DD) {
          "Escape" === DD.key && (DD.stopPropagation(), GD.current())
        }
        return window.addEventListener("keydown", DD, !0), () => {
          window.removeEventListener("keydown", DD, !0)
        }
      }), []);
      const hD = vw(zD, ".CrosshairFullScreenPanel"),
        [nD, MD] = (0, pD.useState)(!0),
        OD = nD && RD;
      (0, pD.useEffect)((() => {
        if (OD) return XD.e.set({
          crosshairGameView: !0
        }), () => {
          XD.e.set({
            crosshairGameView: !1
          })
        }
      }), [OD]);
      const [JD, ED] = (0, pD.useState)(!0);
      return (0, xw.createPortal)((0, AD.jsxs)("div", {
        ref: BD,
        className: "CrosshairFullScreen",
        style: OD ? void 0 : Nw(sD),
        ...hD.handlers,
        children: [(0, AD.jsx)(mw.d, {
          settings: zD,
          touch: wD,
          inEditor: !0,
          ...hD.view
        }), (0, AD.jsxs)("div", {
          className: KD()("CrosshairFullScreenPanel", {
            Collapsed: !JD
          }),
          children: [(0, AD.jsxs)("div", {
            className: "CrosshairFullScreenBar",
            children: [(0, AD.jsx)(ow, {
              backdrop: sD,
              onChange: DD => {
                MD(!1), cD(DD)
              },
              game: RD ? {
                selected: OD,
                onSelect: () => {
                  MD(!0)
                }
              } : void 0
            }), (0, AD.jsx)(gD.Y, {
              className: "CrosshairPanelToggle",
              ariaLabel: ID(JD ? "crosshairSettings:hideEditor" : "crosshairSettings:showEditor"),
              onClick: () => {
                ED(!JD)
              },
              children: (0, AD.jsx)(LD.e, {
                name: JD ? "caret-up" : "pen"
              })
            }), (0, AD.jsx)(gD.f, {
              className: "CrosshairFullScreenDone",
              onClick: fD,
              padDefaultFocus: !0,
              children: ID("crosshairSettings:done")
            })]
          }), JD && (0, AD.jsxs)("div", {
            className: "CrosshairFullScreenFields",
            children: [(0, AD.jsx)(aw, {
              settings: zD,
              touch: wD,
              backdrop: sD,
              onChange: UD
            }), (0, AD.jsx)(Cw, {
              settings: zD,
              onChange: UD
            })]
          })]
        })]
      }), document.body)
    }
    var Hw = wD(2684),
      qw = wD(34193);

    function Dp(DD) {
      let {
        settings: zD,
        onChange: wD
      } = DD;
      const {
        t: sD
      } = (0, rD.E)(), cD = (0, qw.h)(zD), [RD, UD] = (0, Hw.g)(), [fD, ID] = (0, pD.useState)(!1), BD = (0, pD.useRef)(null), [GD, hD] = (0, Hw.g)(), [nD, MD] = (0, pD.useState)(!1);
      return (0, AD.jsxs)("div", {
        className: "SettingBox CrosshairShare",
        children: [(0, AD.jsxs)("div", {
          className: "CrosshairShareRow",
          children: [(0, AD.jsxs)(gD.Y, {
            className: KD()("CrosshairCopy", {
              ActiveSecondaryButton: RD
            }),
            onClick: () => {
              (0, Hw.d)(cD, {
                useShareSheet: !1,
                onOutcome: DD => {
                  ID("failed" === DD), "copied" === DD && UD()
                }
              })
            },
            children: [(0, AD.jsx)(LD.e, {
              name: RD ? "check" : "copy"
            }), " ", sD(RD ? "general:copied" : "crosshairSettings:copy")]
          }), (0, AD.jsx)(JD.e, {
            className: "CrosshairPaste",
            domRef: BD,
            ariaLabel: sD("crosshairSettings:paste"),
            placeholderText: sD("crosshairSettings:paste"),
            onValueChange: DD => {
              const zD = (0, qw.d)(DD);
              MD(!zD && DD.trim().length >= qw.c), zD && (wD(zD), BD.current.value = "", hD())
            }
          })]
        }), fD && (0, AD.jsx)("input", {
          className: "CrosshairCode",
          readOnly: !0,
          value: cD,
          "aria-label": sD("crosshairSettings:copy"),
          onFocus: DD => {
            DD.currentTarget.select()
          }
        }), (0, AD.jsxs)("div", {
          "aria-live": "polite",
          children: [nD && (0, AD.jsx)("div", {
            className: "CrosshairShareNote Error",
            children: sD("crosshairSettings:pasteInvalid")
          }), GD && !nD && (0, AD.jsx)("div", {
            className: "CrosshairShareNote",
            children: sD("crosshairSettings:applied")
          })]
        })]
      })
    }
    var zp = wD(34197);
    let wp = "sky";

    function pp(DD) {
      let {
        showing: zD
      } = DD;
      const {
        t: wD
      } = (0, rD.E)(), {
        isTouchScreen: sD,
        gameState: KD,
        clientEscMenuOptions: cD
      } = (0, XD.n)(["isTouchScreen", "gameState", "clientEscMenuOptions"]), RD = (0, zp.g)(), [UD, fD] = (0, pD.useState)(wp), ID = DD => {
        wp = DD, fD(DD)
      }, [BD, GD] = (0, pD.useState)(!1);
      return (0, pD.useEffect)((() => {
        zD || GD(!1)
      }), [zD]), (0, AD.jsxs)("div", {
        className: "SettingsMenuRightInner CrosshairCategory",
        children: [(0, AD.jsx)("div", {
          className: "CrosshairPreviewSticky",
          children: (0, AD.jsx)(tw, {
            className: "CrosshairPreviewStage",
            settings: RD,
            touch: sD,
            backdrop: UD,
            label: wD("crosshairSettings:preview"),
            children: (0, AD.jsxs)("div", {
              className: "CrosshairPreviewBar CrosshairStageControls",
              children: [(0, AD.jsx)(ow, {
                backdrop: UD,
                onChange: ID
              }), (0, AD.jsxs)(gD.Y, {
                className: "CrosshairFullScreenButton",
                onClick: () => {
                  GD(!0)
                },
                children: [(0, AD.jsx)(LD.e, {
                  name: "expand"
                }), " ", wD("crosshairSettings:fullScreen")]
              })]
            })
          })
        }), (0, AD.jsx)("div", {
          className: "SettingBox",
          children: (0, AD.jsx)(aw, {
            settings: RD,
            touch: sD,
            backdrop: UD,
            onChange: zp.d
          })
        }), (0, AD.jsx)(Dp, {
          settings: RD,
          onChange: zp.d
        }), sD && (0, AD.jsx)(nw.e, {
          note: (0, hw.h)(sD, cD.touchActionButtons) ? wD("crosshairSettings:touchNote") : void 0
        }), (0, AD.jsx)(Cw, {
          settings: RD,
          onChange: zp.d
        }), BD && (0, AD.jsx)(Yw, {
          settings: RD,
          touch: sD,
          backdrop: UD,
          onBackdrop: ID,
          inGame: "inGame" === KD,
          onChange: zp.d,
          onClose: () => {
            GD(!1)
          }
        })]
      })
    }
    var sp = wD(8870),
      Kp = wD(1387),
      rp = wD(5014),
      Lp = wD(34199),
      cp = wD(4295),
      gp = wD(1977),
      Rp = wD(718);
    const Ap = (0, pD.memo)((function() {
      const {
        clientEscMenuOptions: DD
      } = (0, XD.n)(["clientEscMenuOptions"]), {
        recording: zD,
        clipping: wD,
        hasClipBuffer: sD
      } = (0, Cz.i)("replayRecorder"), rD = (0, Cz.g)("connectedGame", (DD => DD.replay)), LD = (0, cp.l)(), cD = !1 === (0, BD.h)("canRecordReplays");
      (0, pD.useEffect)((() => {
        nD.gameBridge.send("setRecorderPrefs", {
          clipping: DD.enableClipping,
          clipSeconds: DD.clipDurationSeconds
        })
      }), [DD.enableClipping, DD.clipDurationSeconds]);
      const RD = LD || rD,
        UD = !RD && !cD,
        fD = zD || UD,
        ID = UD,
        GD = ID && wD && !zD;

      function hD() {
        fD && nD.gameBridge.send("toggleRecording", null)
      }
      return (0, AD.jsxs)("div", {
        className: "SettingsMenuRightInner ReplayViewerCategory",
        children: [(0, AD.jsxs)("div", {
          className: "SettingBox",
          children: [(0, AD.jsx)("div", {
            className: "ReplayViewerCategoryRecordingRow",
            children: zD ? (0, AD.jsxs)(AD.Fragment, {
              children: [(0, AD.jsxs)(gD.R, {
                className: "ReplayViewerCategoryButton",
                onClick: hD,
                disabled: !fD,
                children: [(0, AD.jsx)("span", {
                  children: "Stop Recording"
                }), (0, AD.jsx)(gp.e, {
                  noaAction: "recordGame"
                })]
              }), (0, AD.jsx)(Lp.b, {
                className: "ReplayViewerCategoryRecordingIndicator"
              })]
            }) : (0, AD.jsxs)(gD.f, {
              className: "ReplayViewerCategoryButton",
              onClick: hD,
              disabled: !fD,
              children: [(0, AD.jsx)("span", {
                children: "Start Recording"
              }), (0, AD.jsx)(gp.e, {
                noaAction: "recordGame"
              })]
            })
          }), cD && (0, AD.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Recording is turned off in this game."
          }), RD && !zD && (0, AD.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Close Replay Mode to start recording."
          })]
        }), (0, AD.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, AD.jsx)(QD.b, {
            label: "Enable clipping",
            checked: DD.enableClipping,
            disabled: !ID,
            onClick: function(DD) {
              ID && XD.e.setClientEscMenuOptions({
                enableClipping: DD
              })
            },
            className: KD()({
              SettingBoxDisabled: !ID
            })
          }), (0, AD.jsx)(QD.e, {
            name: "Clip duration (seconds)",
            min: Rp.n,
            max: Rp.j,
            step: Rp.e,
            initValue: DD.clipDurationSeconds,
            onChange: function(DD) {
              XD.e.setClientEscMenuOptions({
                clipDurationSeconds: DD
              })
            },
            circleInfoText: "Longer clip durations use more memory and may affect performance.",
            disabled: !ID || !DD.enableClipping
          })]
        }), (0, AD.jsxs)("div", {
          className: "SettingBox",
          children: [(0, AD.jsxs)(gD.f, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              GD && nD.gameBridge.send("saveClip", null)
            },
            disabled: !GD,
            children: [(0, AD.jsx)("span", {
              children: "Record clip"
            }), (0, AD.jsx)(gp.e, {
              noaAction: "recordClip"
            })]
          }), DD.enableClipping && !sD && ID && !zD && (0, AD.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clip buffer is filling \u2014 play for a moment, then save."
          }), zD && (0, AD.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clipping pauses while a full recording is active."
          })]
        }), (0, AD.jsxs)("div", {
          className: "SettingBox",
          children: [(0, AD.jsxs)(gD.f, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              (0, cp.i)(!0), XD.e.set({
                openEverythingMenuName: null
              })
            },
            disabled: LD,
            children: [(0, AD.jsx)("span", {
              children: "Open Replay Mode"
            }), (0, AD.jsx)(gp.e, {
              noaAction: "replayViewerOpen"
            })]
          }), LD && (0, AD.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Replay Mode is already open."
          })]
        }), (0, AD.jsxs)("div", {
          className: "SettingBox",
          children: [(0, AD.jsx)("div", {
            className: "ReplayViewerCategoryTutorialTitle",
            children: "How to use Replay Mode"
          }), (0, AD.jsx)("iframe", {
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
    var Up = wD(1886);
    const fp = {
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
        icon: () => (0, AD.jsx)("svg", {
          className: "svg-inline--fa",
          viewBox: "0 0 640 512",
          "aria-hidden": "true",
          children: (0, AD.jsx)("path", {
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
      KI: {
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

    function Ip() {
      return Promise.all([wD.e(77), wD.e(133), wD.e(132), wD.e(129)]).then((() => wD(40991))).then((DD => ({
        default: DD.ShaderPackCategory
      })), (DD => (console.error("Failed to load the shader pack settings", DD), {
        default: Bp
      })))
    }

    function Bp() {
      const {
        t: DD
      } = (0, rD.E)();
      return (0, AD.jsx)("div", {
        className: "SettingsMenuRightInner",
        children: DD("shaderPack:tabLoadFailed")
      })
    }
    var Gp = wD(1383);
    const hp = (0, pD.lazy)((() => wD.e(273).then((() => wD(40978))).then((DD => ({
        default: DD.BloxdInformation
      }))))),
      np = (0, pD.lazy)(Ip);

    function Mp(DD) {
      return DD ? "general" : "account"
    }
    const Op = new Map,
      Jp = (0, pD.memo)((function(DD) {
        let {
          show: zD,
          setBeforeResumeCallback: wD
        } = DD;
        (0, GD.d)();
        const {
          gameState: sD,
          openSettingsCategory: KD
        } = (0, XD.n)(["gameState", "openSettingsCategory"]), {
          userContext: cD
        } = (0, ID.c)(), {
          t: RD
        } = (0, rD.E)(), JD = (0, fD.e)(), ED = (0, BD.h)("minChunkAddDist"), QD = "inGame" === sD, [VD, xD] = (0, pD.useState)(Mp(QD)), [TD, bD] = (0, pD.useState)(null), [jD, dD] = (0, pD.useState)([]), SD = (0, pD.useRef)(function() {
          const DD = new Date,
            zD = 6 * (DD.getMonth() + DD.getDate()) % Rz.u.length;
          return [...Rz.u, ...Rz.u].slice(zD, zD + 6)
        }()), iD = (0, pD.useRef)(null), lD = (0, lz.k)(Kp.f, (0, Kp.d)()), WD = Object.keys(fp).filter((DD => {
          switch (DD) {
            case "replayViewer":
              return QD;
            case "developerTools":
              return cD.playerHasRank("developer") || !1;
            case "texturePack":
              return hD.featureFlags.settings.canChangeTexturePack;
            case "KI":
              return hD.featureFlags.settings.canUseShaderPacks;
            case "notifications":
              return hD.featureFlags.useSocialFeatures || null !== cD.dailyDrop;
            case "alternativeDomains":
              return "crazygames" !== CD.v;
            case "controller":
              return hD.featureFlags.useControllerSupport && (lD || "controller" === VD);
            default:
              return !0
          }
        }));
        (0, lz.g)("toggleFullCoordinateOverlay", (() => {
          const DD = Lw("showCoordinates") && Lw("showChunkCoordinates") && Lw("showFPS");
          gw("showCoordinates", !DD), gw("showChunkCoordinates", !DD), gw("showFPS", !DD), JD()
        })), (0, lz.g)("updatedChunkLoadDist", (() => {
          JD()
        })), (0, pD.useEffect)((() => {
          if (bD(null), null === XD.e.get("openSettingsCategory")) {
            const DD = (0, Gp.f)() ? Op.get(QD) : void 0;
            xD(DD && WD.includes(DD) ? DD : Mp(QD))
          }
        }), [zD]), (0, pD.useEffect)((() => {
          null !== KD && (xD(KD), Op.set(QD, KD), XD.e.set({
            openSettingsCategory: null
          }))
        }), [KD, QD]), (0, pD.useLayoutEffect)((() => {
          iD.current && (iD.current.scrollTop = 0)
        }), [VD, zD]), (0, pD.useEffect)((() => {
          "updateLog" === VD && (0, OD.b)().then(dD)
        }), [VD]), (0, pD.useEffect)((() => {
          if ((0, Dw.B)(ED)) return;
          const [DD, zD] = (0, Bw.h)(), [wD, pD] = (0, vz.c)(ED), sD = (0, Up.f)(ED[0], DD, wD), KD = (0, Up.f)(ED[1], zD, pD);
          nD.gameBridge.send("setChunkAddDistance", {
            horizontal: sD,
            vertical: KD
          })
        }), [ED]);
        const ND = (0, pD.useCallback)((async () => {
          TD && (await TD(), bD(null))
        }), [TD]);

        function ZD() {
          XD.e.set({
            openEverythingMenuName: null
          })
        }
        return (0, pD.useEffect)((() => {
          wD((() => ND))
        }), [ND, wD]), (0, AD.jsxs)("div", {
          className: "SettingsMenu Menu",
          style: zD ? {} : {
            display: "none"
          },
          children: [(0, AD.jsx)("div", {
            className: "MenuSideBar",
            children: (0, AD.jsx)("div", {
              className: "MenuSideBarBody",
              children: (0, AD.jsx)(UD, {
                items: WD.map((DD => {
                  const zD = fp[DD].icon;
                  return {
                    id: DD,
                    faIcon: "string" === typeof zD ? zD : void 0,
                    iconElement: "string" === typeof zD ? void 0 : (0, AD.jsx)(zD, {}),
                    title: RD(fp[DD].displayName),
                    redDot: !1
                  }
                })),
                selectedItemId: VD,
                onClick: DD => {
                  !async function(DD) {
                    await ND(), xD(DD), Op.set(QD, DD)
                  }(DD)
                }
              })
            })
          }), (0, AD.jsxs)("div", {
            ref: iD,
            className: "MenuBody SettingsMenuRight",
            children: ["account" === VD && (0, AD.jsx)(Jz, {
              showing: zD,
              inGame: QD
            }), "general" === VD && (0, AD.jsx)(dz, {
              inGame: QD
            }), "audio" === VD && (0, AD.jsx)(Sz, {}), "notifications" === VD && (0, AD.jsx)(uz, {}), "graphics" === VD && (0, AD.jsx)(Iw, {
              minChunkAddDist: null !== ED && void 0 !== ED ? ED : [2, 2],
              getValue: Lw,
              onChange: gw,
              setApplySettingsCallback: bD
            }), "controls" === VD && (0, AD.jsx)(Gw.g, {}), "crosshair" === VD && (0, AD.jsx)(pp, {
              showing: zD
            }), "controller" === VD && hD.featureFlags.useControllerSupport && (0, AD.jsx)(sp.d, {}), hD.featureFlags.settings.canChangeTexturePack && "texturePack" === VD && (0, AD.jsx)(rp.e, {
              setApplySettingsCallback: bD
            }), hD.featureFlags.settings.canUseShaderPacks && "KI" === VD && (0, AD.jsx)(pD.Suspense, {
              fallback: null,
              children: (0, AD.jsx)(np, {
                setApplySettingsCallback: bD
              })
            }), "updateLog" === VD && (0, AD.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, AD.jsx)("div", {
                className: "UpdateLogsContainer",
                children: jD.map(((DD, zD) => (0, AD.jsx)(MD.b, {
                  updateLog: DD,
                  index: zD,
                  close: ZD
                }, zD)))
              })
            }), "information" === VD && (0, AD.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, AD.jsx)(pD.Suspense, {
                fallback: null,
                children: (0, AD.jsx)(hp, {})
              })
            }), "alternativeDomains" === VD && (0, AD.jsxs)("div", {
              className: "SettingsMenuRightInner",
              children: [(0, AD.jsx)("div", {
                className: "AlternativeDomainsTitle",
                children: RD("settingsMenu:unblockedDomainsDescription")
              }), (0, AD.jsx)("div", {
                className: "AlternativeDomainsList",
                children: SD.current.map((DD => (0, AD.jsxs)(gD.f, {
                  onClick: () => {
                    window.open(`https://${DD}`)
                  },
                  children: [(0, AD.jsx)(LD.e, {
                    name: "arrow-up-right-from-square"
                  }), " ", DD]
                }, DD)))
              })]
            }), "replayViewer" === VD && (0, AD.jsx)(Ap, {}), "developerTools" === VD && (0, AD.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, AD.jsx)(PD, {
                setApplySettingsCallback: bD
              })
            }), null !== TD && (0, AD.jsx)("div", {
              className: "SettingsMenuRightFooter",
              children: (0, AD.jsx)(gD.f, {
                className: "SettingsMenuRightFooterButton",
                onClick: ND,
                children: RD("general:apply")
              })
            })]
          })]
        })
      }));
    var Ep = wD(2624);
    const Qp = ["characters", "emote", "skin", "hat", "head", "eyebrows", "eyes", "back", "body", "legs", "shoes", "profileEffect", "cape", "nameColour"],
      Xp = (0, pD.lazy)((() => Promise.resolve().then((() => wD(4684))).then((DD => {
        DD.needGameClientAfterPaint();
        const zD = DD.matchmakingLibrariesPromise.then((DD => (0, Ep.b)(DD.loadCharacterCustomisationUI(), (DD => DD.CharacterCustomisationUI))));
        return Promise.all([DD.ensureGameSetup(), zD]).then((DD => {
          let [, zD] = DD;
          return zD
        }))
      })))),
      Vp = "openCustomisationTab";

    function Pp(DD) {
      var zD, wD, sD;
      let {
        show: KD
      } = DD;
      const {
        userContext: rD
      } = (0, ID.c)(), LD = (0, pD.useRef)(null);
      var cD, gD;
      rD !== xD.NULL_USER_CONTEXT && (null === (zD = LD.current) || void 0 === zD ? void 0 : zD.whamm) !== rD.whamm && (LD.current = {
        whamm: rD.whamm,
        mountKey: (null !== (cD = null === (gD = LD.current) || void 0 === gD ? void 0 : gD.mountKey) && void 0 !== cD ? cD : -1) + 1
      });
      const [RD, fD] = (0, pD.useState)("characters");
      if ((0, lz.g)(Vp, fD), !KD) return null;
      const BD = Qp.filter((DD => "cape" !== DD && "nameColour" !== DD || rD.getPlayerRanks().includes("super") || (0, yD.purchasesAllowed)())).map((DD => ({
        id: DD,
        faIcon: Rz.D[DD],
        title: Rz.H[DD],
        redDot: !1
      })));
      return (0, AD.jsxs)("div", {
        className: "Menu CharCustomisation",
        children: [(0, AD.jsx)("div", {
          className: "MenuSideBar",
          children: (0, AD.jsx)(UD, {
            items: BD,
            selectedItemId: RD,
            onClick: DD => {
              fD(DD)
            }
          })
        }), (0, AD.jsx)("div", {
          className: "MenuBody",
          children: (0, AD.jsx)(pD.Suspense, {
            fallback: (0, AD.jsx)("div", {
              className: "CharacterCustomisationLoading",
              children: (0, AD.jsx)(ED.e, {})
            }),
            children: (0, AD.jsx)(Xp, {
              selectedTab: RD
            }, null !== (wD = null === (sD = LD.current) || void 0 === sD ? void 0 : sD.mountKey) && void 0 !== wD ? wD : 0)
          })
        })]
      })
    }
    var Cp = wD(1461),
      xp = wD(1467),
      Tp = wD(34206),
      bp = wD(4552),
      jp = wD(3424),
      dp = wD(3470),
      Sp = wD(34226),
      ip = wD(8792),
      lp = wD(34209),
      Wp = wD(34216),
      Np = wD(1915),
      Zp = wD(1895),
      yp = wD(4920),
      kp = wD(1268),
      mp = wD(1232),
      ep = wD(1681),
      op = wD(8849),
      ap = wD(2414),
      vp = wD(2421);

    function tp(DD) {
      return DD ? Object.keys(DD).sort(((zD, wD) => {
        var pD, sD, KD, rD;
        const LD = (null !== (pD = null === (sD = DD[wD]) || void 0 === sD ? void 0 : sD.sortPriority) && void 0 !== pD ? pD : 0) - (null !== (KD = null === (rD = DD[zD]) || void 0 === rD ? void 0 : rD.sortPriority) && void 0 !== KD ? KD : 0);
        return 0 !== LD ? LD : zD.localeCompare(wD)
      })) : []
    }
    const Fp = [{
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

    function Yp(DD) {
      for (const {
          threshold: zD,
          suffix: wD
        }
        of Fp)
        if (DD >= zD) {
          const pD = DD / zD;
          return pD >= 100 ? `${Math.floor(pD)}${wD}` : pD >= 10 ? `${pD.toFixed(1).replace(/\.0$/,"")}${wD}` : `${pD.toFixed(2).replace(/\.?0+$/,"")}${wD}`
        } return String(DD)
    }
    var Hp = wD(5049);
    const qp = {
        normal: "0.8em",
        big: "1em"
      },
      Ds = (0, pD.memo)((function(DD) {
        let {
          item: zD,
          amount: wD = 0,
          size: pD = "normal",
          tier: sD = null
        } = DD;
        return (0, AD.jsx)("div", {
          className: KD()("SmpSlot", `SmpSlot-${pD}`),
          children: zD && (0, AD.jsx)(Np.d, {
            itemName: zD,
            amount: wD > 1 ? wD : 0,
            amountFontSize: qp[pD],
            enchantmentTier: sD
          })
        })
      }));

    function zs(DD) {
      let {
        amount: zD,
        exact: wD = !1,
        className: pD
      } = DD;
      return (0, AD.jsxs)("span", {
        className: KD()("SmpGold", pD),
        children: [(0, AD.jsx)("span", {
          className: "SmpCoin",
          children: (0, AD.jsx)(Np.d, {
            itemName: "Gold Coin",
            amount: 0
          })
        }), wD ? zD.toLocaleString("en-US") : Yp(zD)]
      })
    }

    function ws(DD) {
      let {
        count: zD = 5,
        grid: wD = !1
      } = DD;
      return (0, AD.jsx)("div", {
        className: wD ? "SmpCardGrid" : "SmpList",
        "aria-hidden": "true",
        children: Array.from({
          length: zD
        }, ((DD, zD) => (0, AD.jsxs)("div", {
          className: KD()(wD ? "SmpListingCard" : "SmpRow", "SmpSkeleton"),
          children: [(0, AD.jsx)("div", {
            className: KD()("SmpSlot", wD ? "SmpSlot-big" : "SmpSlot-normal")
          }), (0, AD.jsxs)("div", {
            className: "SmpRowText",
            children: [(0, AD.jsx)("b", {}), (0, AD.jsx)("small", {})]
          }), (0, AD.jsx)("div", {
            className: "SmpSkeletonButton"
          })]
        }, zD)))
      })
    }

    function ps(DD) {
      let {
        title: zD,
        children: wD
      } = DD;
      return (0, AD.jsxs)("div", {
        className: "SmpEmpty",
        children: [(0, AD.jsx)("b", {
          children: zD
        }), wD && (0, AD.jsx)("small", {
          children: wD
        })]
      })
    }

    function ss(DD) {
      let {
        entry: zD
      } = DD;
      return (0, AD.jsx)(ps, {
        title: (0, AD.jsx)(Zp.e, {
          text: zD.item.customTitle
        }),
        children: (0, AD.jsx)(Zp.e, {
          text: zD.item.description
        })
      })
    }

    function Ks(DD) {
      return (0, AD.jsx)(Hp.e, {
        ...DD,
        className: KD()("SmpChoice", DD.className),
        reselectable: !0
      })
    }

    function rs() {
      return (0, AD.jsx)("span", {
        className: "SmpLoader",
        children: (0, AD.jsx)(ED.e, {})
      })
    }

    function Ls(DD) {
      let {
        value: zD,
        onChange: wD,
        min: sD = 1,
        max: KD,
        step: rD = 1,
        label: LD
      } = DD;
      const cD = (0, pD.useRef)(null),
        gD = (0, pD.useRef)(zD);
      gD.current = zD;
      const [RD, UD] = (0, pD.useState)(null), fD = DD => Math.max(sD, Math.min(KD, Math.floor(DD))), ID = DD => {
        const zD = gD.current,
          pD = "function" === typeof rD ? rD(zD, DD) : rD,
          sD = fD(zD + pD * DD);
        gD.current = sD, wD(sD)
      };
      (0, pD.useEffect)((() => {
        if (null === RD) return;
        let DD;
        const zD = () => {
            UD(null)
          },
          wD = setTimeout((() => {
            DD = setInterval((() => {
              ID(RD);
              const DD = gD.current;
              (RD > 0 ? DD >= KD : DD <= sD) && zD()
            }), 70)
          }), 380);
        return window.addEventListener("pointerup", zD), window.addEventListener("pointercancel", zD), window.addEventListener("blur", zD), () => {
          clearTimeout(wD), clearInterval(DD), window.removeEventListener("pointerup", zD), window.removeEventListener("pointercancel", zD), window.removeEventListener("blur", zD)
        }
      }), [RD]), (0, pD.useEffect)((() => {
        const DD = cD.current;
        DD && document.activeElement !== DD && DD.value !== String(zD) && (DD.value = String(zD))
      }), [zD]), (0, pD.useEffect)((() => {
        const DD = cD.current;
        if (!DD) return;
        const zD = () => {
          DD.value = String(gD.current)
        };
        return DD.addEventListener("blur", zD), () => {
          DD.removeEventListener("blur", zD)
        }
      }), []);
      const BD = DD => (0, AD.jsx)("button", {
        type: "button",
        className: "SmpStepButton",
        "aria-label": `${DD>0?"More":"Less"} ${LD}`,
        disabled: DD > 0 ? zD >= KD : zD <= sD,
        onPointerDown: zD => {
          0 === zD.button && (ID(DD), UD(DD))
        },
        onKeyDown: zD => {
          "Enter" !== zD.key && " " !== zD.key || ID(DD)
        },
        onContextMenu: DD => {
          DD.preventDefault()
        },
        children: DD > 0 ? "+" : "\u2212"
      });
      return (0, AD.jsxs)("div", {
        className: "SmpStepper",
        children: [BD(-1), (0, AD.jsx)(JD.e, {
          className: "SmpStepperInput",
          domRef: cD,
          defaultValue: String(zD),
          ariaLabel: LD,
          type: "text",
          blurOnEnter: !0,
          onValueChange: DD => {
            const zD = DD.replace(/[^\d]/g, "");
            cD.current && zD !== DD && (cD.current.value = zD), "" !== zD && wD(fD(Number(zD)))
          }
        }), BD(1)]
      })
    }

    function cs(DD) {
      return Math.max(1, 10 ** Math.max(0, Math.floor(Math.log10(Math.max(1, DD))) - 1))
    }
    var gs = wD(34218),
      Rs = wD(1245);
    const As = ["building", "colours", "nature", "decoration", "utility", "tools", "combat", "food", "mobs", "materials", "worldTools"];
    Rs.t, ND.Ec.length;
    new Map;
    var Us = wD(3288);

    function fs(DD, zD) {
      var wD;
      return zD && (null === (wD = DD[zD]) || void 0 === wD ? void 0 : wD.smp) || null
    }

    function Is(DD, zD) {
      const wD = [];
      for (const sD of tp(DD)) {
        var pD;
        const KD = DD[sD];
        (null === (pD = KD.smp) || void 0 === pD ? void 0 : pD.kind) === zD && wD.push({
          key: sD,
          item: KD,
          meta: KD.smp
        })
      }
      return wD
    }

    function Bs(DD, zD) {
      var wD;
      return null !== (wD = Is(DD, zD)[0]) && void 0 !== wD ? wD : null
    }
    const Gs = "50% 0% 50% 0%",
      hs = [{
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

    function ns(DD) {
      const zD = DD - (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now());
      for (const {
          divisor: wD,
          suffix: pD
        }
        of hs)
        if (zD >= wD) return `${Math.floor(zD/wD)}${pD}`;
      return "<1s"
    }

    function Ms(DD) {
      const zD = DD.map(ip.h),
        wD = [];
      return zD.forEach(((DD, pD) => {
        const sD = function(DD) {
            const zD = DD.match(/\d+/);
            return zD ? Number(zD[0]) : 0
          }(DD),
          KD = pD === zD.length - 1;
        (KD || 1 === sD || 10 === sD || 100 === sD) && wD.push({
          label: DD,
          quantity: sD,
          isAll: KD
        })
      })), wD
    }
    let Os = null;

    function Es(DD, zD) {
      const wD = zD.trim().toLowerCase();
      if (!wD) return [];
      const pD = DD => {
          if (DD === wD) return 0;
          if (DD.startsWith(wD)) return 1;
          const zD = DD.indexOf(wD);
          return -1 === zD ? -1 : 2 + zD
        },
        sD = [];
      for (const LD of DD) {
        const DD = [pD(LD.lowerLabel), pD(LD.lowerName)].filter((DD => -1 !== DD));
        DD.length && sD.push({
          item: LD,
          rank: Math.min(...DD)
        })
      }
      if (sD.length > 0) return sD.sort(((DD, zD) => DD.rank - zD.rank)).map((DD => DD.item));
      const KD = [...wD],
        rD = DD => {
          let zD = 0;
          for (const wD of KD) {
            if (zD = DD.indexOf(wD, zD), -1 === zD) return !1;
            zD++
          }
          return !0
        };
      return DD.filter((DD => rD(DD.lowerLabel) || rD(DD.lowerName)))
    }

    function Qs(DD, zD) {
      var wD;
      return null !== (wD = null === DD || void 0 === DD ? void 0 : DD[zD]) && void 0 !== wD ? wD : zD
    }

    function Xs(DD, zD) {
      const wD = DD.userInput;
      return void 0 !== zD && "dropdown" === (null === wD || void 0 === wD ? void 0 : wD.type) && wD.dropdownOptions.map(ip.h).includes(zD) ? zD : function(DD) {
        const zD = DD.userInput;
        if ("dropdown" !== (null === zD || void 0 === zD ? void 0 : zD.type) || 0 === zD.dropdownOptions.length) return null;
        const wD = zD.dropdownOptions.map(ip.h);
        return zD.initialValue && wD.includes(zD.initialValue) ? zD.initialValue : wD[wD.length - 1]
      }(DD)
    }

    function Vs(DD) {
      return void 0 === DD ? "" : JSON.stringify(DD)
    }
    const Ps = (0, pD.createContext)(null);

    function Cs() {
      return (0, pD.useContext)(Ps)
    }
    var xs = wD(2712);
    const Ts = (0, pD.memo)((function(DD) {
        let {
          name: zD,
          label: wD,
          onPick: pD
        } = DD;
        return (0, AD.jsxs)("button", {
          type: "button",
          className: "SmpCatalogueTile",
          title: wD,
          onClick: () => {
            pD(zD)
          },
          children: [(0, AD.jsx)(Ds, {
            item: zD,
            size: "big"
          }), (0, AD.jsx)("span", {
            children: wD
          })]
        })
      })),
      bs = (0, pD.memo)((function(DD) {
        let {
          items: zD,
          query: wD,
          onPick: sD
        } = DD;
        const {
          t: KD
        } = (0, rD.E)(), [LD, cD] = (0, pD.useState)(new Set), gD = (0, pD.useMemo)((() => function(DD) {
          const zD = new Map;
          for (const wD of DD) {
            let DD = zD.get(wD.category);
            DD || (DD = [], zD.set(wD.category, DD)), DD.push(wD)
          }
          return [...As, "other"].filter((DD => zD.has(DD))).map((DD => ({
            category: DD,
            items: zD.get(DD)
          })))
        }(zD)), [zD]), RD = (0, pD.useMemo)((() => Es(zD, wD).slice(0, 60)), [zD, wD]);
        return wD.trim() ? 0 === RD.length ? (0, AD.jsx)(ps, {
          title: KD("smpShop:noItemsFound", {
            query: wD.trim()
          }),
          children: KD("smpShop:tryShorterName")
        }) : (0, AD.jsx)(xs.b, {
          lazyLoadedClassName: "SmpCatalogueGrid",
          observerRoot: "SmpBody",
          rootMargin: Gs,
          observerUpdateDeps: [wD],
          children: RD.map((DD => (0, AD.jsx)(Ts, {
            name: DD.name,
            label: DD.label,
            onPick: sD
          }, DD.name)))
        }) : (0, AD.jsx)(AD.Fragment, {
          children: gD.map((DD => {
            let {
              category: zD,
              items: wD
            } = DD;
            const pD = LD.has(zD) || wD.length <= 48,
              rD = pD ? wD : wD.slice(0, 48);
            return (0, AD.jsxs)("section", {
              className: "SmpCatalogueSection",
              children: [(0, AD.jsxs)("h4", {
                children: [KD("other" === zD ? "smpShop:otherItems" : `creativeInventory:${zD}`), !pD && (0, AD.jsx)("button", {
                  type: "button",
                  className: "SmpLink",
                  onClick: () => {
                    cD(new Set([...LD, zD]))
                  },
                  children: KD("smpShop:showAll", {
                    count: wD.length
                  })
                })]
              }), (0, AD.jsx)(xs.b, {
                lazyLoadedClassName: "SmpCatalogueGrid",
                observerRoot: "SmpBody",
                rootMargin: Gs,
                observerUpdateDeps: [pD],
                children: rD.map((DD => (0, AD.jsx)(Ts, {
                  name: DD.name,
                  label: DD.label,
                  onPick: sD
                }, DD.name)))
              })]
            }, zD)
          }))
        })
      }));

    function ds(DD, zD) {
      const {
        searched: wD,
        shown: sD,
        searchFor: KD,
        loading: rD
      } = function(DD, zD) {
        var wD;
        const sD = Cs(),
          [KD, rD] = (0, pD.useState)(void 0),
          LD = (0, pD.useRef)(void 0),
          cD = (0, pD.useRef)(0),
          gD = (0, pD.useRef)(void 0),
          RD = null !== (wD = null === DD || void 0 === DD ? void 0 : DD.meta.item) && void 0 !== wD ? wD : null,
          AD = !!DD && sD.isPending(DD.key);
        (0, pD.useEffect)((() => {
          if (!DD || AD || !zD || void 0 === KD || KD === RD) return;
          const wD = KD === LD.current && sD.gaveUpAt(DD.key) > cD.current && gD.current !== KD;
          (KD !== LD.current || wD) && sD.act(DD.key, null !== KD && void 0 !== KD ? KD : "*", wD) && (wD && (gD.current = KD), LD.current = KD, cD.current = Date.now())
        }), [DD, AD, zD, KD, RD, sD]);
        const UD = (0, pD.useCallback)((DD => {
            LD.current = void 0, gD.current = void 0, rD(DD)
          }), []),
          fD = void 0 !== KD && KD !== RD && (AD || LD.current !== KD);
        return {
          searched: RD,
          shown: fD ? KD : RD,
          searchFor: UD,
          loading: fD || AD || null !== RD && !zD
        }
      }(DD, zD), LD = (0, pD.useMemo)((() => function() {
        var DD;
        let zD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          wD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          pD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const sD = `${(0,Us.k)()}\x1f${zD.join("\x1e")}\x1f${wD.join("\x1e")}\x1f${JSON.stringify(pD)}`;
        if ((null === (DD = Os) || void 0 === DD ? void 0 : DD.key) === sD) return Os.items;
        const KD = new Set(wD),
          rD = new Set,
          LD = [],
          cD = (DD, zD) => {
            var wD;
            if (!DD || rD.has(DD) || KD.has(DD)) return;
            rD.add(DD);
            const sD = null !== (wD = pD[DD]) && void 0 !== wD ? wD : DD;
            LD.push({
              name: DD,
              label: sD,
              lowerLabel: sD.toLowerCase(),
              lowerName: DD.toLowerCase(),
              category: zD
            })
          };
        for (const RD of (0, gs.creativeItemIds)()) {
          var gD;
          (0, gs.itemIsDisabled)(RD, !0, !0, !1) || (0, gs.showOnlyInCreativeSearch)(RD) || cD((0, Us.g)(RD), null !== (gD = (0, gs.creativeCategoryOf)(RD)) && void 0 !== gD ? gD : "other")
        }
        for (const RD of zD) cD(RD, "other");
        return Os = {
          key: sD,
          items: LD
        }, LD
      }(null === DD || void 0 === DD ? void 0 : DD.meta.extra, null === DD || void 0 === DD ? void 0 : DD.meta.excluded, null === DD || void 0 === DD ? void 0 : DD.meta.names)), [null === DD || void 0 === DD ? void 0 : DD.meta.extra, null === DD || void 0 === DD ? void 0 : DD.meta.excluded, null === DD || void 0 === DD ? void 0 : DD.meta.names]), [cD, gD] = (0, pD.useState)(""), [RD, AD] = (0, pD.useState)(0), [UD, fD] = (0, pD.useState)("recent"), ID = (0, pD.useCallback)((DD => {
        gD(""), AD((DD => DD + 1)), KD(DD)
      }), [KD]), BD = "browse" === UD || "" !== cD.trim();
      return {
        searched: wD,
        shown: sD,
        searchFor: KD,
        loading: rD,
        catalogue: LD,
        names: null === DD || void 0 === DD ? void 0 : DD.meta.names,
        query: cD,
        setQuery: gD,
        searchBoxKey: RD,
        pickItem: ID,
        setView: fD,
        browsing: BD
      }
    }

    function Ss(DD) {
      let {
        browser: zD,
        children: wD
      } = DD;
      const {
        t: pD
      } = (0, rD.E)(), sD = Cs();
      return (0, AD.jsxs)("div", {
        className: "SmpTopBar",
        children: [(0, AD.jsx)("div", {
          className: "SmpSearch",
          children: (0, AD.jsx)(JD.e, {
            className: "SmpSearchInput",
            placeholderText: pD("smpShop:searchPlaceholder"),
            defaultValue: zD.query,
            onValueChange: DD => {
              zD.setQuery(DD), zD.searched && DD.trim() && zD.searchFor(null)
            },
            blurOnEnter: !0,
            onEnter: () => {
              const DD = Es(zD.catalogue, zD.query)[0];
              DD ? zD.pickItem(DD.name) : zD.query.trim() && sD.notify(pD("smpShop:noItemsFound", {
                query: zD.query.trim()
              }))
            }
          }, zD.searchBoxKey)
        }), wD]
      })
    }

    function is(DD) {
      let {
        browser: zD,
        recentLabel: wD,
        children: pD
      } = DD;
      const {
        t: sD
      } = (0, rD.E)();
      return (0, AD.jsxs)("div", {
        className: "SmpViewBar",
        children: [(0, AD.jsx)(Ks, {
          options: [{
            value: "recent",
            label: wD
          }, {
            value: "browse",
            label: sD("smpShop:browseItems")
          }],
          value: zD.browsing ? "browse" : "recent",
          onChange: zD.setView,
          ariaLabel: sD("smpShop:show")
        }), !zD.browsing && pD]
      })
    }

    function ls(DD) {
      let {
        item: zD,
        names: wD,
        summary: pD,
        onBack: sD,
        children: KD
      } = DD;
      const {
        t: LD
      } = (0, rD.E)();
      return (0, AD.jsxs)("div", {
        className: "SmpItemHeader",
        children: [(0, AD.jsx)(gD.d, {
          className: "SmpBackButton",
          onClick: sD,
          children: LD("general:back")
        }), (0, AD.jsx)(Ds, {
          item: zD,
          size: "big"
        }), (0, AD.jsxs)("div", {
          className: "SmpItemHeaderText",
          children: [(0, AD.jsx)("b", {
            children: Qs(wD, zD)
          }), pD && (0, AD.jsx)("small", {
            children: pD
          })]
        }), KD]
      })
    }

    function Ws(DD) {
      let {
        browser: zD,
        className: wD,
        action: pD,
        above: sD,
        list: rD,
        summary: LD,
        recentLabel: cD,
        listControls: gD,
        onBack: RD
      } = DD;
      return (0, AD.jsxs)("div", {
        className: KD()("SmpScreen", wD),
        children: [(0, AD.jsx)(Ss, {
          browser: zD,
          children: pD
        }), zD.shown && (0, AD.jsx)(ls, {
          item: zD.shown,
          names: zD.names,
          summary: !zD.loading && LD,
          onBack: () => {
            null === RD || void 0 === RD || RD(), zD.searchFor(null)
          },
          children: gD
        }), sD, zD.shown ? rD : (0, AD.jsxs)(AD.Fragment, {
          children: [(0, AD.jsx)(is, {
            browser: zD,
            recentLabel: cD,
            children: gD
          }), zD.browsing ? (0, AD.jsx)(bs, {
            items: zD.catalogue,
            query: zD.query,
            onPick: zD.pickItem
          }) : rD]
        })]
      })
    }

    function Ns(DD, zD) {
      const wD = DD.map((DD => {
        let {
          meta: zD
        } = DD;
        return zD.pricePerItem
      }));
      return "min" === zD ? Math.min(...wD) : Math.max(...wD)
    }
    var Zs = wD(6603);
    const ys = (0, pD.memo)((function(DD) {
      var zD;
      const {
        t: wD
      } = (0, rD.E)(), pD = null === DD.seller, sD = DD.quantity * DD.pricePerItem;
      return (0, AD.jsxs)("div", {
        className: DD.grid ? "SmpListingCard" : "SmpRow SmpListingRow",
        children: [(0, AD.jsx)(Ds, {
          item: DD.item,
          amount: DD.quantity,
          size: DD.grid ? "big" : "normal",
          tier: DD.tier
        }), (0, AD.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, AD.jsx)("b", {
            children: (0, AD.jsx)(Zp.e, {
              text: null !== (zD = DD.title) && void 0 !== zD ? zD : `${DD.quantity}x ${DD.item}`
            })
          }), (0, AD.jsxs)("small", {
            className: "SmpListingFacts",
            children: [(0, AD.jsx)("span", {
              children: pD ? wD("smpShop:you") : (0, AD.jsx)(Zp.e, {
                text: [{
                  entityName: DD.seller
                }]
              })
            }), (0, AD.jsx)("span", {
              children: wD("smpShop:timeLeft", {
                time: ns(DD.expiresAt)
              })
            })]
          })]
        }), (0, AD.jsxs)("div", {
          className: "SmpRowPrice",
          children: [(0, AD.jsx)(zs, {
            amount: DD.pricePerItem
          }), (0, AD.jsx)("small", {
            children: wD("smpShop:each")
          })]
        }), (0, AD.jsx)(gD.f, {
          className: "SmpBuyButton",
          disabled: pD || !DD.canAfford && !DD.busy,
          loading: DD.busy,
          onClick: () => {
            DD.onBuy(DD.itemKey)
          },
          children: pD ? wD("smpShop:yours") : (0, AD.jsx)(zs, {
            amount: sD
          })
        })]
      })
    }));

    function ks(DD) {
      let {
        view: zD,
        onChange: wD
      } = DD;
      const {
        t: pD
      } = (0, rD.E)();
      return (0, AD.jsx)(Hp.e, {
        className: "SmpChoice SmpViewToggle",
        ariaLabel: pD("smpShop:layout"),
        options: [{
          value: "list",
          label: (0, AD.jsx)(LD.e, {
            name: "list"
          }),
          ariaLabel: pD("smpShop:listView")
        }, {
          value: "grid",
          label: (0, AD.jsx)(LD.e, {
            name: "grid-2"
          }),
          ariaLabel: pD("smpShop:gridView")
        }],
        value: zD,
        onChange: wD
      })
    }

    function ms(DD) {
      let {
        entries: zD,
        view: wD
      } = DD;
      const {
        t: pD
      } = (0, rD.E)(), sD = Cs(), KD = "grid" === wD;
      return (0, AD.jsxs)(AD.Fragment, {
        children: [!KD && (0, AD.jsxs)("div", {
          className: "SmpColumns",
          "aria-hidden": "true",
          children: [(0, AD.jsx)("span", {}), (0, AD.jsx)("span", {
            children: pD("smpShop:columnItem")
          }), (0, AD.jsx)("span", {
            children: pD("smpShop:columnPriceEach")
          }), (0, AD.jsx)("span", {
            children: pD("smpShop:columnTotal")
          })]
        }), (0, AD.jsx)(xs.b, {
          lazyLoadedClassName: KD ? "SmpCardGrid" : "SmpList",
          observerRoot: "SmpBody",
          rootMargin: Gs,
          observerUpdateDeps: [zD.length],
          children: zD.map((DD => {
            var zD, wD;
            let {
              key: pD,
              item: rD,
              meta: LD
            } = DD;
            const cD = LD.quantity * LD.pricePerItem;
            return (0, AD.jsx)(ys, {
              itemKey: pD,
              item: LD.item,
              title: rD.customTitle,
              quantity: LD.quantity,
              pricePerItem: LD.pricePerItem,
              seller: LD.seller,
              expiresAt: LD.expiresAt,
              tier: null !== (zD = null === (wD = rD.enchant) || void 0 === wD ? void 0 : wD.tier) && void 0 !== zD ? zD : null,
              busy: sD.isPending(pD) || null !== LD.seller && !1 === rD.canBuy,
              canAfford: sD.canAfford(rD, cD),
              grid: KD,
              onBuy: sD.act
            }, pD)
          }))
        }, wD)]
      })
    }
    const es = [1, 10, 100],
      os = [1, 10, 100, 999];

    function as(DD) {
      var zD, wD, sD, cD, RD, UD, fD, ID, BD, GD;
      const {
        t: hD
      } = (0, rD.E)(), nD = Cs(), {
        creator: MD,
        mode: OD
      } = DD, [ED, QD] = (0, pD.useState)(null !== (zD = null === MD || void 0 === MD ? void 0 : MD.meta.item) && void 0 !== zD ? zD : null), [XD, VD] = (0, pD.useState)(1), [PD, CD] = (0, pD.useState)(0), [xD, TD] = (0, pD.useState)(""), [bD, jD] = (0, pD.useState)(0), dD = (0, pD.useRef)(ED), SD = (0, pD.useRef)(!1), [iD, lD] = (0, pD.useState)(!1), WD = null !== (wD = null === MD || void 0 === MD ? void 0 : MD.meta.item) && void 0 !== wD ? wD : null, ND = null !== (sD = null === MD || void 0 === MD ? void 0 : MD.meta.owned) && void 0 !== sD ? sD : 0;
      (0, pD.useEffect)((() => {
        DD.searching || null === WD || WD === dD.current || (dD.current = WD, SD.current = !1, QD(WD), CD(0), VD("list" === OD ? Math.max(1, ND) : 1))
      }), [WD, DD.searching]);
      const ZD = !!MD && !!ED && MD.meta.item === ED,
        yD = ZD ? MD.meta.owned : null !== (cD = null === (RD = DD.inventory) || void 0 === RD || null === (UD = RD.find((DD => DD.item === ED))) || void 0 === UD ? void 0 : UD.quantity) && void 0 !== cD ? cD : 0,
        kD = "list" === OD ? Math.max(1, yD) : 45954,
        mD = null !== (fD = DD.prices[0]) && void 0 !== fD ? fD : null,
        eD = DD.prices.length ? Math.round(DD.prices.reduce(((DD, zD) => DD + zD), 0) / DD.prices.length) : null,
        oD = null === (ID = DD.inventory) || void 0 === ID || null === (BD = ID.find((DD => DD.item === ED))) || void 0 === BD ? void 0 : BD.sellPrice;
      (0, pD.useEffect)((() => {
        var DD;
        ZD && (VD((DD => "list" === OD ? Math.min(Math.max(1, DD), Math.max(1, yD)) : DD)), SD.current || CD(null !== (DD = null !== mD && void 0 !== mD ? mD : eD) && void 0 !== DD ? DD : Math.max(1, null !== oD && void 0 !== oD ? oD : 1)))
      }), [ZD, yD, ED, mD, eD]);
      const aD = DD => {
          SD.current = !0, CD(DD)
        },
        uD = zD => {
          var wD, pD, sD;
          dD.current = zD, SD.current = !1, lD(!1), TD(""), jD((DD => DD + 1)), QD(zD), CD(0), VD("list" === OD && null !== (wD = null === (pD = DD.inventory) || void 0 === pD || null === (sD = pD.find((DD => DD.item === zD))) || void 0 === sD ? void 0 : sD.quantity) && void 0 !== wD ? wD : 1), (null === MD || void 0 === MD ? void 0 : MD.meta.item) !== zD && DD.onPickItem(zD)
        },
        vD = XD * PD,
        tD = "list" === OD && null !== MD && void 0 !== MD && MD.meta.fee ? function(DD, zD) {
          const wD = Math.max(0, zD - DD.taxFreeAllowance);
          return Math.ceil(Math.round(wD * DD.rate * 1e6) / 1e6)
        }(MD.meta.fee, vD) : 0,
        FD = !!MD && nD.isPending(MD.key),
        YD = ZD && !DD.searching && XD >= 1 && PD >= 1 && ("order" === OD || yD >= XD) && !FD,
        HD = !!ED && !ZD && !DD.searching && XD >= 1 && PD >= 1,
        qD = () => {
          YD ? nD.act(MD.key, `${XD}|${PD}`) : HD && (DD.onPickItem(ED), lD(!0))
        };
      (0, pD.useEffect)((() => {
        iD && ZD && !DD.searching && (lD(!1), qD())
      }), [iD, ZD, DD.searching]);
      const Dz = !!ED && !ZD && (DD.searching || iD),
        zz = ED ? Qs(DD.names, ED) : "",
        wz = (0, pD.useMemo)((() => Es(DD.catalogue, xD).slice(0, 8)), [DD.catalogue, xD]),
        pz = ("list" === OD ? es.filter((DD => DD < yD)) : os).map((DD => ({
          value: DD,
          label: String(DD)
        })));
      "list" === OD && yD > 0 && pz.push({
        value: yD,
        label: hD("smpShop:all", {
          count: yD
        })
      });
      const sz = [];
      return null !== mD && (mD > 1 && sz.push({
        value: mD - 1,
        label: hD("smpShop:undercut", {
          price: Yp(mD - 1)
        })
      }), sz.push({
        value: mD,
        label: hD("smpShop:lowest", {
          price: Yp(mD)
        })
      })), null !== eD && eD !== mD && sz.push({
        value: eD,
        label: hD("smpShop:average", {
          price: Yp(eD)
        })
      }), (0, AD.jsxs)("div", {
        className: "SmpTradeForm",
        children: [(0, AD.jsxs)("div", {
          className: "SmpTradeFormHead",
          children: [(0, AD.jsx)("b", {
            children: hD("list" === OD ? "smpShop:sellOnMarket" : "smpShop:createOrder")
          }), (0, AD.jsx)("button", {
            type: "button",
            className: "SmpIconButton",
            "aria-label": hD("smpShop:close"),
            onClick: DD.onClose,
            children: (0, AD.jsx)(LD.e, {
              name: "xmark"
            })
          })]
        }), "list" === OD && (0, AD.jsx)("div", {
          className: "SmpPicker",
          role: "listbox",
          children: null !== (GD = DD.inventory) && void 0 !== GD && GD.length ? DD.inventory.map((DD => {
            let {
              item: zD,
              quantity: wD
            } = DD;
            return (0, AD.jsx)("button", {
              type: "button",
              title: zD,
              className: KD()("SmpPickerSlot", {
                SmpPickerSlotOn: zD === ED
              }),
              onClick: () => {
                uD(zD)
              },
              children: (0, AD.jsx)(Ds, {
                item: zD,
                amount: wD
              })
            }, zD)
          })) : (0, AD.jsx)("span", {
            className: "SmpMuted",
            children: hD("smpShop:nothingToList")
          })
        }), ("list" === OD || !ED) && (0, AD.jsxs)("div", {
          className: "SmpItemSearch",
          children: [(0, AD.jsx)(JD.e, {
            className: "SmpSearchInput",
            placeholderText: hD("list" === OD ? "smpShop:listSearchPlaceholder" : "smpShop:orderSearchPlaceholder"),
            defaultValue: xD,
            onValueChange: TD,
            blurOnEnter: !0,
            onEnter: () => {
              wz[0] && uD(wz[0].name)
            }
          }, bD), wz.length > 0 && (0, AD.jsx)("div", {
            className: "SmpPicker",
            children: wz.map((DD => {
              let {
                name: zD
              } = DD;
              return (0, AD.jsx)("button", {
                type: "button",
                title: zD,
                className: KD()("SmpPickerSlot", {
                  SmpPickerSlotOn: zD === ED
                }),
                onClick: () => {
                  uD(zD)
                },
                children: (0, AD.jsx)(Ds, {
                  item: zD
                })
              }, zD)
            }))
          })]
        }), ED && (0, AD.jsxs)(AD.Fragment, {
          children: [(0, AD.jsxs)("div", {
            className: "SmpPickedName",
            children: [zz, Dz && (0, AD.jsx)(rs, {})]
          }), (0, AD.jsxs)("div", {
            className: "SmpFormGrid",
            children: [(0, AD.jsxs)("div", {
              className: "SmpField",
              children: [(0, AD.jsxs)("span", {
                children: [hD("smpShop:quantity"), "list" === OD && ZD && (0, AD.jsx)("small", {
                  children: hD("smpShop:youHave", {
                    count: yD
                  })
                })]
              }), (0, AD.jsx)(Ls, {
                value: XD,
                onChange: VD,
                max: kD,
                label: hD("smpShop:quantity")
              }), (0, AD.jsx)(Ks, {
                options: pz,
                value: XD,
                onChange: VD,
                ariaLabel: hD("smpShop:quantity")
              })]
            }), (0, AD.jsxs)("div", {
              className: "SmpField",
              children: [(0, AD.jsx)("span", {
                children: hD("smpShop:pricePerItem")
              }), (0, AD.jsx)(Ls, {
                value: Math.max(1, PD),
                onChange: aD,
                max: 9999999,
                step: cs,
                label: hD("smpShop:pricePerItem")
              }), (0, AD.jsx)(Ks, {
                options: sz,
                value: PD,
                onChange: aD,
                ariaLabel: hD("smpShop:pricePerItem")
              })]
            })]
          }), "list" === OD && (0, AD.jsxs)("div", {
            className: "SmpTradeSummary",
            children: [(0, AD.jsxs)("span", {
              children: [hD("smpShop:youGet"), " ", (0, AD.jsx)(zs, {
                amount: Math.max(0, vD - tD),
                exact: !0
              })]
            }), (0, AD.jsx)("small", {
              children: tD > 0 ? hD("smpShop:listingFee", {
                fee: tD.toLocaleString("en-US")
              }) : hD("smpShop:listingRules")
            })]
          }), (0, AD.jsx)(gD.v, {
            className: "SmpSubmit",
            disabled: !YD && !HD && !FD,
            loading: FD || Dz || ZD && DD.searching,
            onClick: qD,
            children: "list" === OD ? hD("smpShop:listButton", {
              count: XD,
              item: zz
            }) : (0, AD.jsxs)(AD.Fragment, {
              children: [hD("smpShop:orderButton", {
                count: XD,
                item: zz
              }), " ", PD >= 1 && (0, AD.jsx)(zs, {
                amount: vD
              })]
            })
          })]
        })]
      })
    }

    function us() {
      var DD;
      const {
        t: zD
      } = (0, rD.E)(), wD = Cs(), sD = null === (DD = wD.shopInfo[wD.categoryKey]) || void 0 === DD ? void 0 : DD.items, KD = Bs(sD, "search"), LD = Bs(sD, "creator"), cD = Is(sD, "enchantedCreator"), RD = Is(sD, "listing"), UD = Bs(sD, "empty"), fD = ds(KD, RD.length > 0 || null !== UD), {
        searched: ID,
        shown: BD,
        loading: GD
      } = fD, [hD, nD] = (0, pD.useState)(!1), [MD, OD] = function() {
        const [DD, zD] = (0, Zs.d)("smpMarketView", "list");
        return ["grid" === DD ? "grid" : "list", zD]
      }(), JD = "grid" === MD, ED = (0, pD.useMemo)((() => RD.filter((DD => {
        let {
          meta: zD
        } = DD;
        return null !== zD.seller && zD.item === ID
      })).map((DD => {
        let {
          meta: zD
        } = DD;
        return zD.pricePerItem
      })).sort(((DD, zD) => DD - zD))), [RD, ID]), QD = (0, pD.useMemo)((() => {
        const DD = new Set(fD.catalogue.map((DD => {
          let {
            name: zD
          } = DD;
          return zD
        })));
        return function(DD) {
          for (const zD in DD)
            if ("sell" === DD[zD].smp) return Is(DD[zD].items, "sell").filter((DD => {
              let {
                item: zD
              } = DD;
              return !zD.enchant
            })).map((DD => {
              let {
                meta: zD
              } = DD;
              return {
                item: zD.item,
                quantity: zD.quantity,
                sellPrice: zD.pricePerItem
              }
            }));
          return []
        }(wD.shopInfo).filter((zD => {
          let {
            item: wD
          } = zD;
          return DD.has(wD)
        }))
      }), [wD.shopInfo, fD.catalogue]);
      return (0, AD.jsx)(Ws, {
        browser: fD,
        className: "SmpMarketTab",
        recentLabel: zD("smpShop:recentlyListed"),
        action: (0, AD.jsx)(gD.v, {
          className: "SmpSellButton",
          onClick: () => {
            nD((DD => !DD))
          },
          children: zD("smpShop:sell")
        }),
        above: hD && (0, AD.jsxs)(AD.Fragment, {
          children: [(0, AD.jsx)(as, {
            mode: "list",
            creator: LD,
            inventory: QD,
            catalogue: fD.catalogue,
            names: fD.names,
            searching: GD,
            prices: ED,
            onPickItem: fD.searchFor,
            onClose: () => {
              nD(!1)
            }
          }), cD.length > 0 && (0, AD.jsx)(vs, {
            entries: cD
          })]
        }),
        listControls: (0, AD.jsx)(ks, {
          view: MD,
          onChange: OD
        }),
        summary: BD && (RD.length > 0 ? zD(1 === RD.length ? "smpShop:listingSummaryOne" : "smpShop:listingSummary", {
          count: RD.length,
          price: Yp(Ns(RD, "min"))
        }) : zD("smpShop:noOneSelling", {
          item: Qs(fD.names, BD)
        })),
        list: GD ? (0, AD.jsx)(ws, {
          grid: JD
        }) : RD.length > 0 ? (0, AD.jsx)(ms, {
          entries: RD,
          view: MD
        }) : UD ? (0, AD.jsx)(ss, {
          entry: UD
        }) : (0, AD.jsx)(ws, {
          count: 3,
          grid: JD
        })
      })
    }

    function vs(DD) {
      let {
        entries: zD
      } = DD;
      const {
        t: wD
      } = (0, rD.E)(), sD = Cs(), [KD, LD] = (0, pD.useState)({});
      return (0, AD.jsx)("div", {
        className: "SmpList",
        children: zD.map((DD => {
          var zD, pD, rD;
          let {
            key: cD,
            item: RD,
            meta: UD
          } = DD;
          const fD = null !== (zD = KD[cD]) && void 0 !== zD ? zD : 1;
          return (0, AD.jsxs)("div", {
            className: "SmpRow",
            children: [(0, AD.jsx)(Ds, {
              item: UD.item,
              amount: UD.quantity,
              tier: null !== (pD = null === (rD = RD.enchant) || void 0 === rD ? void 0 : rD.tier) && void 0 !== pD ? pD : null
            }), (0, AD.jsxs)("div", {
              className: "SmpRowText",
              children: [(0, AD.jsx)("b", {
                children: (0, AD.jsx)(Zp.e, {
                  text: RD.customTitle
                })
              }), (0, AD.jsx)("small", {
                children: wD("smpShop:enchantedListing")
              })]
            }), (0, AD.jsx)(Ls, {
              value: fD,
              onChange: DD => {
                LD({
                  ...KD,
                  [cD]: DD
                })
              },
              max: 9999999,
              step: cs,
              label: wD("smpShop:pricePerItem")
            }), (0, AD.jsxs)(gD.v, {
              loading: sD.isPending(cD),
              onClick: () => {
                sD.act(cD, String(fD))
              },
              children: [wD("smpShop:list"), " ", (0, AD.jsx)(zs, {
                amount: fD
              })]
            })]
          }, cD)
        }))
      })
    }
    const ts = (0, pD.memo)((function(DD) {
      let {
        itemKey: zD,
        item: wD,
        quantity: pD,
        pricePerItem: sD,
        tier: rD,
        selected: LD,
        onSelect: cD
      } = DD;
      return (0, AD.jsxs)("button", {
        type: "button",
        className: KD()("SmpInventorySlot", {
          SmpInventorySlotOn: LD
        }),
        title: wD,
        onClick: () => {
          cD(zD)
        },
        children: [(0, AD.jsx)(Ds, {
          item: wD,
          amount: pD,
          tier: rD
        }), (0, AD.jsx)(zs, {
          amount: sD
        })]
      })
    }));

    function Fs() {
      var DD;
      const {
        t: zD
      } = (0, rD.E)(), wD = Cs(), sD = null === (DD = wD.shopInfo[wD.categoryKey]) || void 0 === DD ? void 0 : DD.items, LD = Is(sD, "sell"), cD = Bs(sD, "empty"), [gD, RD] = (0, pD.useState)(null), [UD, fD] = (0, pD.useState)({}), ID = LD.find((DD => {
        let {
          key: zD
        } = DD;
        return zD === gD
      }));
      return 0 === LD.length ? (0, AD.jsx)("div", {
        className: "SmpScreen",
        children: (0, AD.jsx)(ps, {
          title: cD ? (0, AD.jsx)(Zp.e, {
            text: cD.item.customTitle
          }) : zD("smpShop:nothingToSell"),
          children: cD && (0, AD.jsx)(Zp.e, {
            text: cD.item.description
          })
        })
      }) : (0, AD.jsxs)("div", {
        className: "SmpScreen SmpInstantSellTab",
        children: [(0, AD.jsx)("div", {
          className: "SmpInventoryGrid",
          children: LD.map((DD => {
            var zD, wD;
            let {
              key: pD,
              item: sD,
              meta: KD
            } = DD;
            return (0, AD.jsx)(ts, {
              itemKey: pD,
              item: KD.item,
              quantity: KD.quantity,
              pricePerItem: KD.pricePerItem,
              tier: null !== (zD = null === (wD = sD.enchant) || void 0 === wD ? void 0 : wD.tier) && void 0 !== zD ? zD : null,
              selected: pD === gD,
              onSelect: RD
            }, pD)
          }))
        }), (0, AD.jsx)("div", {
          className: KD()("SmpSellBar", {
            SmpSellBarIdle: !ID
          }),
          children: ID ? (0, AD.jsx)(Ys, {
            entry: ID,
            choice: Xs(ID.item, UD[ID.key]),
            onChoose: DD => {
              fD({
                ...UD,
                [ID.key]: DD
              })
            }
          }) : (0, AD.jsx)("span", {
            className: "SmpMuted",
            children: zD("smpShop:tapToSell")
          })
        })]
      })
    }

    function Ys(DD) {
      var zD, wD, pD, sD;
      let {
        entry: KD,
        choice: LD,
        onChoose: cD
      } = DD;
      const {
        t: RD
      } = (0, rD.E)(), UD = Cs(), {
        key: fD,
        item: ID,
        meta: BD
      } = KD, GD = Ms("dropdown" === (null === (zD = ID.userInput) || void 0 === zD ? void 0 : zD.type) ? ID.userInput.dropdownOptions : []), hD = null === LD ? 0 : -(0, ip.d)(ID, LD);
      return (0, AD.jsxs)(AD.Fragment, {
        children: [(0, AD.jsx)(Ds, {
          item: BD.item,
          amount: BD.quantity,
          tier: null !== (wD = null === (pD = ID.enchant) || void 0 === pD ? void 0 : pD.tier) && void 0 !== wD ? wD : null
        }), (0, AD.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, AD.jsx)("b", {
            children: (0, AD.jsx)(Zp.e, {
              text: null !== (sD = ID.customTitle) && void 0 !== sD ? sD : BD.item
            })
          }), (0, AD.jsx)("small", {
            children: RD("smpShop:sellEach", {
              count: BD.quantity
            })
          })]
        }), (0, AD.jsx)(Ks, {
          options: GD.map((DD => {
            let {
              label: zD,
              quantity: wD,
              isAll: pD
            } = DD;
            return {
              value: zD,
              label: pD ? RD("smpShop:all", {
                count: wD
              }) : String(wD)
            }
          })),
          value: LD,
          onChange: cD,
          ariaLabel: RD("smpShop:quantity")
        }), (0, AD.jsxs)(gD.v, {
          loading: UD.isPending(fD),
          disabled: null === LD,
          onClick: () => {
            UD.act(fD, LD)
          },
          children: [RD("smpShop:sellButton"), " ", (0, AD.jsx)(zs, {
            amount: hD
          })]
        })]
      })
    }

    function Hs() {
      var DD;
      const {
        t: zD
      } = (0, rD.E)(), wD = Cs(), pD = null === (DD = wD.shopInfo[wD.categoryKey]) || void 0 === DD ? void 0 : DD.items, sD = Is(pD, "collect"), KD = Is(pD, "myListing"), LD = (DD, zD) => wD.isPending(DD) || !1 === zD.canBuy;
      return (0, AD.jsxs)("div", {
        className: "SmpScreen",
        children: [(0, AD.jsx)("h3", {
          className: "SmpSectionTitle",
          children: zD("smpShop:readyToCollect")
        }), sD.length > 0 ? (0, AD.jsx)("div", {
          className: "SmpList",
          children: sD.map((DD => {
            var pD, sD;
            let {
              key: KD,
              item: rD,
              meta: cD
            } = DD;
            return (0, AD.jsxs)("div", {
              className: "SmpRow",
              children: [(0, AD.jsx)(Ds, {
                item: "sold" === cD.type ? "Gold Coin" : cD.item,
                amount: "sold" === cD.type ? 0 : cD.quantity,
                tier: null !== (pD = null === (sD = rD.enchant) || void 0 === sD ? void 0 : sD.tier) && void 0 !== pD ? pD : null
              }), (0, AD.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, AD.jsx)("b", {
                  children: (0, AD.jsx)(Zp.e, {
                    text: rD.customTitle
                  })
                }), (0, AD.jsx)("small", {
                  children: (0, AD.jsx)(Zp.e, {
                    text: rD.description
                  })
                })]
              }), (0, AD.jsx)(gD.o, {
                loading: LD(KD, rD),
                onClick: () => {
                  wD.act(KD)
                },
                children: zD("smpShop:collect")
              })]
            }, KD)
          }))
        }) : (0, AD.jsx)(ps, {
          title: zD("smpShop:nothingToCollect"),
          children: zD("smpShop:nothingToCollectHint")
        }), (0, AD.jsx)("h3", {
          className: "SmpSectionTitle",
          children: zD("smpShop:activeListings", {
            count: KD.length
          })
        }), KD.length > 0 ? (0, AD.jsx)("div", {
          className: "SmpList",
          children: KD.map((DD => {
            var pD, sD;
            let {
              key: KD,
              item: rD,
              meta: cD
            } = DD;
            return (0, AD.jsxs)("div", {
              className: "SmpRow",
              children: [(0, AD.jsx)(Ds, {
                item: cD.item,
                amount: cD.quantity,
                tier: null !== (pD = null === (sD = rD.enchant) || void 0 === sD ? void 0 : sD.tier) && void 0 !== pD ? pD : null
              }), (0, AD.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, AD.jsx)("b", {
                  children: (0, AD.jsx)(Zp.e, {
                    text: rD.customTitle
                  })
                }), (0, AD.jsx)("small", {
                  children: zD("smpShop:timeLeft", {
                    time: ns(cD.expiresAt)
                  })
                })]
              }), (0, AD.jsxs)("div", {
                className: "SmpRowPrice",
                children: [(0, AD.jsx)(zs, {
                  amount: cD.pricePerItem
                }), (0, AD.jsx)("small", {
                  children: zD("smpShop:each")
                })]
              }), (0, AD.jsx)(gD.R, {
                loading: LD(KD, rD),
                onClick: () => {
                  wD.act(KD)
                },
                children: zD("smpShop:cancel")
              })]
            }, KD)
          }))
        }) : (0, AD.jsx)(ps, {
          title: zD("smpShop:noActiveListings"),
          children: zD("smpShop:noActiveListingsHint")
        })]
      })
    }

    function qs(DD) {
      let {
        done: zD,
        of: wD
      } = DD;
      return (0, AD.jsx)("span", {
        className: "SmpProgress",
        children: (0, AD.jsx)("i", {
          style: {
            width: `${Math.min(100,zD/Math.max(1,wD)*100)}%`
          }
        })
      })
    }

    function DK(DD) {
      var zD, wD, pD;
      let {
        entry: sD,
        choice: KD,
        onChoose: LD
      } = DD;
      const {
        t: cD
      } = (0, rD.E)(), RD = Cs(), {
        key: UD,
        item: fD,
        meta: ID
      } = sD, BD = "dropdown" === (null === (zD = fD.userInput) || void 0 === zD ? void 0 : zD.type) ? fD.userInput.dropdownOptions : [], GD = !0 === ID.processing, hD = null !== ID.creator && (ID.owned > 0 || GD), nD = hD && ID.owned > 0 ? Ms(BD) : [], MD = null === KD ? 0 : null !== (wD = null === (pD = nD.find((DD => DD.label === KD))) || void 0 === pD ? void 0 : pD.quantity) && void 0 !== wD ? wD : 0;
      return (0, AD.jsxs)("div", {
        className: "SmpRow SmpOrderRow",
        children: [(0, AD.jsx)(Ds, {
          item: ID.item
        }), (0, AD.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, AD.jsx)("b", {
            children: (0, AD.jsx)(Zp.e, {
              text: fD.customTitle
            })
          }), (0, AD.jsxs)("small", {
            children: [(0, AD.jsx)(zs, {
              amount: ID.pricePerItem
            }), " ", cD("smpShop:each"), " \xb7", " ", null === ID.creator ? cD("smpShop:you") : (0, AD.jsx)(Zp.e, {
              text: [{
                entityName: ID.creator
              }]
            })]
          }), (0, AD.jsx)(qs, {
            done: ID.delivered,
            of: ID.wanted
          })]
        }), hD ? (0, AD.jsxs)(AD.Fragment, {
          children: [(0, AD.jsx)(Ks, {
            options: nD.map((DD => {
              let {
                label: zD,
                quantity: wD,
                isAll: pD
              } = DD;
              return {
                value: zD,
                label: pD ? cD("smpShop:max", {
                  count: wD
                }) : String(wD)
              }
            })),
            value: KD,
            onChange: LD,
            ariaLabel: cD("smpShop:quantity")
          }), (0, AD.jsxs)(gD.v, {
            loading: RD.isPending(UD) || GD,
            disabled: null === KD,
            onClick: () => {
              RD.act(UD, KD)
            },
            children: [cD("smpShop:deliver"), " ", (0, AD.jsx)(zs, {
              amount: MD * ID.pricePerItem
            })]
          })]
        }) : (0, AD.jsx)("span", {
          className: "SmpMuted SmpRowNote",
          children: null === ID.creator ? cD("smpShop:yourOrder") : cD("smpShop:youHave", {
            count: 0
          })
        })]
      })
    }

    function zK() {
      var DD;
      const {
        t: zD
      } = (0, rD.E)(), wD = Cs(), sD = null === (DD = wD.shopInfo[wD.categoryKey]) || void 0 === DD ? void 0 : DD.items, KD = Bs(sD, "search"), LD = Bs(sD, "creator"), cD = Is(sD, "order"), RD = Bs(sD, "empty"), UD = ds(KD, cD.length > 0 || null !== RD), [fD, ID] = (0, pD.useState)(!1), [BD, GD] = (0, pD.useState)({});
      return (0, AD.jsx)(Ws, {
        browser: UD,
        recentLabel: zD("smpShop:recentOrders"),
        action: (0, AD.jsx)(gD.v, {
          onClick: () => {
            ID((DD => !DD))
          },
          children: zD("smpShop:createOrder")
        }),
        above: fD && (0, AD.jsx)(as, {
          mode: "order",
          creator: LD,
          catalogue: UD.catalogue,
          names: UD.names,
          searching: UD.loading,
          prices: [],
          onPickItem: UD.searchFor,
          onClose: () => {
            ID(!1)
          }
        }),
        onBack: () => {
          ID(!1)
        },
        summary: cD.length > 0 && zD(1 === cD.length ? "smpShop:orderSummaryOne" : "smpShop:orderSummary", {
          count: cD.length,
          price: Yp(Ns(cD, "max"))
        }),
        list: UD.loading ? (0, AD.jsx)(ws, {}) : cD.length > 0 ? (0, AD.jsx)(xs.b, {
          lazyLoadedClassName: "SmpList",
          observerRoot: "SmpBody",
          rootMargin: Gs,
          observerUpdateDeps: [cD.length],
          children: cD.map((DD => (0, AD.jsx)(DK, {
            entry: DD,
            choice: Xs(DD.item, BD[DD.key]),
            onChoose: zD => {
              GD({
                ...BD,
                [DD.key]: zD
              })
            }
          }, DD.key)))
        }) : RD ? (0, AD.jsx)(ss, {
          entry: RD
        }) : (0, AD.jsx)(ws, {
          count: 3
        })
      })
    }

    function wK() {
      var DD;
      const {
        t: zD
      } = (0, rD.E)(), wD = Cs(), pD = Is(null === (DD = wD.shopInfo[wD.categoryKey]) || void 0 === DD ? void 0 : DD.items, "myOrder");
      return 0 === pD.length ? (0, AD.jsx)("div", {
        className: "SmpScreen",
        children: (0, AD.jsx)(ps, {
          title: zD("smpShop:noOrders"),
          children: zD("smpShop:noOrdersHint")
        })
      }) : (0, AD.jsx)("div", {
        className: "SmpScreen",
        children: (0, AD.jsx)("div", {
          className: "SmpList",
          children: pD.map((DD => {
            let {
              key: pD,
              item: sD,
              meta: KD
            } = DD;
            const rD = wD.isPending(pD) || !1 === sD.canBuy;
            return (0, AD.jsxs)("div", {
              className: "SmpRow",
              children: [(0, AD.jsx)(Ds, {
                item: KD.item,
                amount: KD.collectable
              }), (0, AD.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, AD.jsx)("b", {
                  children: (0, AD.jsx)(Zp.e, {
                    text: sD.customTitle
                  })
                }), (0, AD.jsxs)("small", {
                  children: [(0, AD.jsx)(zs, {
                    amount: KD.pricePerItem
                  }), " ", zD("smpShop:each"), KD.collectable > 0 && ` \xb7 ${zD("smpShop:readyCount",{count:KD.collectable})}`]
                }), (0, AD.jsx)(qs, {
                  done: KD.delivered,
                  of: KD.wanted
                })]
              }), KD.collectable > 0 ? (0, AD.jsx)(gD.o, {
                loading: rD,
                onClick: () => {
                  wD.act(pD)
                },
                children: zD("smpShop:collectCount", {
                  count: KD.collectable
                })
              }) : (0, AD.jsx)(gD.R, {
                loading: rD,
                onClick: () => {
                  wD.act(pD)
                },
                children: zD("smpShop:cancel")
              })]
            }, pD)
          }))
        })
      })
    }
    const pK = new Set(["search", "creator", "enchantedCreator", "collect", "myOrder", "order"]),
      sK = {
        sell: "coins",
        market: "store",
        collect: "backpack",
        orders: "file-clipboard",
        myOrders: "location-check"
      };

    function KK(DD, zD) {
      let wD = !1;
      const pD = {};
      for (const sD in DD) zD(sD, DD[sD]) ? pD[sD] = DD[sD] : wD = !0;
      return wD ? pD : DD
    }

    function rK(DD) {
      var zD, wD, sD, cD;
      const {
        show: gD,
        shopInfo: RD,
        selectedCategoryKey: UD
      } = DD, {
        t: fD
      } = (0, rD.E)(), ID = null !== UD && void 0 !== UD ? UD : "", BD = fs(RD, ID), GD = null === (zD = RD[ID]) || void 0 === zD ? void 0 : zD.items, hD = null !== BD, [nD, MD] = (0, pD.useState)({}), [OD, JD] = (0, pD.useState)([]), [ED, QD] = (0, pD.useState)(!1), [XD, VD] = (0, pD.useState)(null), [, PD] = (0, pD.useState)(0), CD = (0, pD.useRef)(0), xD = (0, pD.useRef)({}), TD = (0, pD.useRef)({
        items: GD,
        pending: nD,
        shopInfo: RD,
        active: hD,
        canAfford: DD.canAfford,
        buy: DD.buy
      });
      TD.current = {
        items: GD,
        pending: nD,
        shopInfo: RD,
        active: hD,
        canAfford: DD.canAfford,
        buy: DD.buy
      };
      const bD = (0, pD.useCallback)((DD => {
        CD.current++;
        const zD = CD.current;
        JD((wD => [{
          id: zD,
          text: DD
        }, ...wD].slice(0, 8))), VD(zD)
      }), []);
      (0, pD.useEffect)((() => {
        if (null === XD) return;
        const DD = setTimeout((() => {
          VD(null)
        }), 3e3);
        return () => {
          clearTimeout(DD)
        }
      }), [XD]), (0, pD.useEffect)((() => {
        const zD = DD.message;
        if (!zD) return;
        const {
          shopInfo: wD,
          active: pD,
          items: sD
        } = TD.current, KD = null !== zD.categoryKey ? null !== fs(wD, zD.categoryKey) : pD;
        (KD || pD) && bD(zD.text), KD && MD((DD => KK(DD, (DD => {
          var zD, wD;
          return !pK.has(null === sD || void 0 === sD || null === (zD = sD[DD]) || void 0 === zD || null === (wD = zD.smp) || void 0 === wD ? void 0 : wD.kind)
        }))))
      }), [DD.message, bD]), (0, pD.useEffect)((() => {
        MD((DD => KK(DD, ((DD, zD) => Vs(null === GD || void 0 === GD ? void 0 : GD[DD]) === zD.snapshot))))
      }), [RD, GD]);
      const jD = Object.keys(nD).length > 0;
      (0, pD.useEffect)((() => {
        if (!jD) return;
        const DD = setInterval((() => {
          PD((DD => DD + 1));
          const DD = Date.now(),
            {
              pending: zD,
              items: wD
            } = TD.current,
            pD = Object.keys(zD).filter((wD => DD - zD[wD].at >= 12e3));
          if (0 === pD.length) return;
          const sD = pD.some((DD => {
            var pD, sD;
            return "search" !== (null === wD || void 0 === wD || null === (pD = wD[DD]) || void 0 === pD || null === (sD = pD.smp) || void 0 === sD ? void 0 : sD.kind) || zD[DD].resend
          }));
          for (const KD of pD) xD.current[KD] = DD;
          MD((DD => KK(DD, (DD => !pD.includes(DD))))), sD && bD(fD("smpShop:noAnswer"))
        }), 500);
        return () => {
          clearInterval(DD)
        }
      }), [jD]), (0, pD.useEffect)((() => {
        MD({})
      }), [ID]), (0, pD.useEffect)((() => {
        gD || QD(!1)
      }), [gD]);
      const dD = (0, pD.useCallback)((function(DD, zD) {
          let wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            items: pD,
            pending: sD,
            canAfford: KD,
            buy: rD
          } = TD.current, LD = null === pD || void 0 === pD ? void 0 : pD[DD];
          if (!LD || DD in sD || !1 === LD.canBuy) return !1;
          if (!KD(LD, (0, ip.d)(LD, zD))) return !1;
          rD(DD, LD, zD);
          const cD = {
            snapshot: Vs(LD),
            at: Date.now(),
            resend: wD
          };
          return TD.current.pending = {
            ...TD.current.pending,
            [DD]: cD
          }, MD((zD => ({
            ...zD,
            [DD]: cD
          }))), !0
        }), []),
        SD = (0, pD.useMemo)((() => ({
          shopInfo: RD,
          categoryKey: ID,
          canAfford: DD.canAfford,
          isPending: DD => DD in nD,
          gaveUpAt: DD => {
            var zD;
            return null !== (zD = xD.current[DD]) && void 0 !== zD ? zD : 0
          },
          act: dD,
          notify: bD
        })), [RD, ID, DD.canAfford, nD, dD, bD]),
        iD = Math.min(...Object.values(nD).map((DD => DD.at))),
        lD = jD && Date.now() - iD > 1500,
        WD = OD.length > 1,
        ND = null !== (wD = null === (sD = RD[ID]) || void 0 === sD ? void 0 : sD.customTitle) && void 0 !== wD ? wD : ID,
        ZD = null === (cD = RD[ID]) || void 0 === cD ? void 0 : cD.description;
      let yD = null;
      return "market" === BD ? yD = (0, AD.jsx)(us, {}) : "sell" === BD ? yD = (0, AD.jsx)(Fs, {}) : "collect" === BD ? yD = (0, AD.jsx)(Hs, {}) : "orders" === BD ? yD = (0, AD.jsx)(zK, {}) : "myOrders" === BD && (yD = (0, AD.jsx)(wK, {})), (0, AD.jsx)(Ps.Provider, {
        value: SD,
        children: (0, AD.jsx)("div", {
          className: "SmpShopHost",
          hidden: !hD,
          children: (0, AD.jsxs)("div", {
            className: "SmpShop",
            children: [(0, AD.jsx)("header", {
              className: "SmpHeader",
              children: (0, AD.jsxs)("div", {
                className: "SmpHeaderTitle",
                children: [(0, AD.jsxs)("h2", {
                  children: [BD && (0, AD.jsx)(LD.e, {
                    name: sK[BD]
                  }), fD(ND)]
                }), ZD && (0, AD.jsx)("p", {
                  children: (0, AD.jsx)(Zp.e, {
                    text: ZD
                  })
                })]
              })
            }), (0, AD.jsx)("main", {
              className: "SmpBody",
              "data-pad-initial-area": !0,
              children: gD && yD
            }), (0, AD.jsxs)("button", {
              type: "button",
              className: KD()("SmpStatus", {
                SmpStatusWaiting: jD,
                SmpStatusFresh: !jD && null !== XD,
                SmpStatusHasHistory: WD
              }),
              "aria-live": "polite",
              "aria-expanded": WD ? ED : void 0,
              onClick: () => {
                WD && QD((DD => !DD))
              },
              children: [jD ? (0, AD.jsxs)("span", {
                className: "SmpStatusText",
                children: [(0, AD.jsx)(rs, {}), fD(lD ? "smpShop:slowConnection" : "smpShop:waiting")]
              }) : OD[0] ? (0, AD.jsx)("span", {
                className: "SmpStatusText",
                children: (0, AD.jsx)(Zp.e, {
                  text: OD[0].text
                })
              }, OD[0].id) : (0, AD.jsx)("span", {
                className: "SmpStatusText SmpMuted",
                children: fD("smpShop:ready")
              }), WD && (0, AD.jsx)("small", {
                children: fD("smpShop:recentMessages", {
                  count: OD.length
                })
              })]
            }), ED && WD && (0, AD.jsx)("div", {
              className: "SmpStatusHistory",
              children: OD.map((DD => (0, AD.jsx)("div", {
                children: (0, AD.jsx)(Zp.e, {
                  text: DD.text
                })
              }, DD.id)))
            })]
          })
        })
      })
    }
    class LK {
      constructor(DD) {
        this.info = DD
      }
      static fromShopInfo(DD) {
        const zD = {};
        for (const wD in DD) {
          const pD = !0 === DD[wD].redDot && !0 !== DD[wD].forceRemoveRedDot;
          zD[wD] = {
            redDot: pD,
            items: {}
          };
          for (const sD in DD[wD].items) {
            const pD = DD[wD].items[sD],
              KD = !0 === pD.redDot && !0 !== pD.forceRemoveRedDot;
            zD[wD].items[sD] = {
              redDot: KD
            }
          }
        }
        return new LK(zD)
      }
      anyCategoryHasRedDots() {
        for (const DD in this.info)
          if (this.categoryHasRedDot(DD)) return !0;
        return !1
      }
      doesCategoryExist(DD) {
        return !(0, Dw.B)(this.info[DD])
      }
      categoryHasRedDot(DD) {
        return !0 === this.info[DD].redDot
      }
      updateCategoryRedDot(DD, zD) {
        this.info[DD].redDot = zD
      }
      doesItemExist(DD, zD) {
        return this.doesCategoryExist(DD) && !(0, Dw.B)(this.info[DD].items[zD])
      }
      itemHasRedDot(DD, zD) {
        return !0 === this.info[DD].items[zD].redDot
      }
      updateItemRedDot(DD, zD, wD) {
        this.info[DD].items[zD].redDot = wD
      }
      shallowCopy() {
        return new LK(this.info)
      }
    }

    function cK(DD, zD) {
      return `${DD}\x1f${zD}`
    }

    function gK(DD, zD) {
      return !(0, Dw.B)(zD) && !(0, Dw.B)(DD) && zD in DD
    }
    const RK = (0, pD.memo)((function(DD) {
      var zD, wD;
      let {
        show: sD
      } = DD;
      const rD = (0, Cz.g)("players", GK),
        LD = (0, Cz.g)("players", hK),
        RD = (0, ap.c)(),
        [fD, ID] = (0, pD.useState)({
          shopInfo: {},
          userInputsPerItem: {},
          redDotInfo: LK.fromShopInfo({}),
          currencyAmounts: {},
          selectedCategoryKey: null,
          onBoughtInfo: null,
          awaitingPurchase: !1
        }),
        GD = (0, pD.useRef)(""),
        hD = (0, pD.useRef)(null),
        MD = (0, pD.useRef)(null),
        OD = (0, pD.useRef)(0),
        JD = (0, pD.useRef)(void 0),
        ED = (0, pD.useRef)(null),
        QD = (0, pD.useRef)(fD),
        VD = fD.redDotInfo.anyCategoryHasRedDots(),
        [PD, xD] = (0, pD.useState)(null),
        TD = (0, pD.useRef)(!1);
      let bD = !1,
        jD = 0,
        dD = 0;
      if (fD.currencyAmounts) {
        for (const DD in fD.currencyAmounts) {
          var SD;
          const zD = fD.currencyAmounts[DD];
          zD.hidden || (jD++, (null === (SD = zD.subtext) || void 0 === SD ? void 0 : SD.length) > 0 && dD++)
        }
        bD = jD + dD > 4
      }(0, pD.useEffect)((() => {
        zw.l.KG("showShopIconRedDot", VD, !0)
      }), [VD]), (0, pD.useEffect)((() => {
        nD.gameBridge.send("setShopOpen", sD), sD || (clearTimeout(JD.current), ID((DD => DD.awaitingPurchase ? {
          ...DD,
          awaitingPurchase: !1
        } : DD)))
      }), [sD]), (0, pD.useEffect)((() => () => {
        nD.gameBridge.send("setShopOpen", !1), clearTimeout(JD.current)
      }), []), (0, pD.useEffect)((() => {
        QD.current = fD
      }), [fD]), (0, pD.useEffect)((() => {
        if (null === PD) return;
        return (0, ep.e)("pointerdown", (DD => {
          const zD = DD.target;
          null !== zD && void 0 !== zD && zD.closest(".ShopItem") || xD(null)
        }))
      }), [PD]);
      const iD = DD => {
          ID((zD => ({
            ...zD,
            ...DD
          })))
        },
        lD = DD => {
          var zD;
          clearTimeout(null === (zD = fD.onBoughtInfo) || void 0 === zD ? void 0 : zD.timeout);
          const wD = setTimeout((() => {
            iD({
              onBoughtInfo: null
            })
          }), 3e3);
          GD.current = DD, iD({
            onBoughtInfo: {
              text: DD,
              timeout: wD,
              categoryKey: hD.current
            }
          })
        },
        WD = DD => {
          const {
            shopInfo: zD,
            userInputsPerItem: wD,
            redDotInfo: pD,
            autoSelectCategory: KD
          } = function(DD, zD, wD, pD, sD, KD) {
            if ((0, Dw.B)(DD) || 0 === Object.keys(DD).length) return {
              shopInfo: {},
              userInputsPerItem: {},
              redDotInfo: LK.fromShopInfo({}),
              autoSelectCategory: null
            };
            const rD = CD.n[CD.v].adConfig.showRewardedAds,
              LD = {};
            let cD = null;
            for (const GD in DD) {
              const zD = DD[GD],
                wD = {};
              let pD = !1;
              for (const DD in zD.items) {
                const sD = zD.items[DD];
                (0, ip.o)(sD, rD) && (wD[DD] = sD, pD = !0)
              }
              pD && (LD[GD] = {
                ...zD,
                items: wD
              }, !0 === zD.autoSelectCategory && (cD = GD))
            }
            const gD = {},
              RD = (DD, zD, pD, rD) => {
                var LD, cD;
                const RD = cK(DD, zD),
                  AD = null !== (LD = wD[RD]) && void 0 !== LD ? LD : wD[zD];
                if (null !== (cD = rD.userInput) && void 0 !== cD && cD.type) switch (rD.userInput.type) {
                  case "dropdown": {
                    var UD;
                    const DD = !AD || !rD.userInput.dropdownOptions.some((DD => (0, ip.h)(DD) === AD)),
                      zD = rD.userInput.shouldResetSelectionOnOptionsChange && ("dropdown" !== (null === pD || void 0 === pD || null === (UD = pD.userInput) || void 0 === UD ? void 0 : UD.type) || JSON.stringify(pD.userInput.dropdownOptions) !== JSON.stringify(rD.userInput.dropdownOptions)),
                      wD = rD.userInput,
                      sD = !(0, Dw.B)(wD.initialValue) && wD.dropdownOptions.some((DD => (0, ip.h)(DD) === wD.initialValue));
                    var fD;
                    return void(DD || zD ? sD ? gD[RD] = null !== (fD = rD.userInput.initialValue) && void 0 !== fD ? fD : null : rD.userInput.dropdownOptions.length > 0 ? gD[RD] = (0, ip.h)(rD.userInput.dropdownOptions[0]) : gD[RD] = null : gD[RD] = AD)
                  }
                  case "text":
                  case "number":
                    var ID, BD, GD;
                    return void((null === pD || void 0 === pD ? void 0 : pD.userInput) !== rD.userInput ? gD[RD] = null !== (ID = null !== (BD = rD.userInput.initialValue) && void 0 !== BD ? BD : AD) && void 0 !== ID ? ID : "" : gD[RD] = null !== (GD = null !== AD && void 0 !== AD ? AD : rD.userInput.initialValue) && void 0 !== GD ? GD : "");
                  case "color":
                    var hD, nD, MD;
                    return void((null === pD || void 0 === pD ? void 0 : pD.userInput) !== rD.userInput ? gD[RD] = null !== (hD = null !== (nD = rD.userInput.initialValue) && void 0 !== nD ? nD : AD) && void 0 !== hD ? hD : "#000000" : gD[RD] = null !== (MD = null !== AD && void 0 !== AD ? AD : rD.userInput.initialValue) && void 0 !== MD ? MD : "#000000");
                  case "player": {
                    const DD = (0, ip.l)(sD, KD, rD.userInput);
                    return void(AD && DD.includes(AD) ? gD[RD] = AD : gD[RD] = DD.length > 0 ? DD[0] : null)
                  }
                }
              };
            for (const GD in LD)
              for (const DD in LD[GD].items) {
                var AD;
                const wD = LD[GD].items[DD];
                RD(GD, DD, null === (AD = zD[GD]) || void 0 === AD ? void 0 : AD.items[DD], wD)
              }
            const UD = LK.fromShopInfo(LD);
            for (const GD in LD) {
              var fD;
              if (pD.doesCategoryExist(GD)) {
                (null === (fD = zD[GD]) || void 0 === fD ? void 0 : fD.redDot) === LD[GD].redDot && UD.updateCategoryRedDot(GD, pD.categoryHasRedDot(GD));
                for (const DD in LD[GD].items) {
                  var ID, BD;
                  pD.doesItemExist(GD, DD) && (null === (ID = zD[GD]) || void 0 === ID || null === (BD = ID.items[DD]) || void 0 === BD ? void 0 : BD.redDot) === LD[GD].items[DD].redDot && UD.updateItemRedDot(GD, DD, pD.itemHasRedDot(GD, DD))
                }
              }
            }
            return {
              shopInfo: LD,
              userInputsPerItem: gD,
              redDotInfo: UD,
              autoSelectCategory: cD
            }
          }(DD, fD.shopInfo, fD.userInputsPerItem, fD.redDotInfo, rD, LD), cD = {
            shopInfo: zD,
            userInputsPerItem: wD,
            redDotInfo: pD
          };
          if (null === KD || sD)
            if (zD[fD.selectedCategoryKey]) cD.selectedCategoryKey = fD.selectedCategoryKey;
            else {
              const DD = tp(zD);
              cD.selectedCategoryKey = DD.length > 0 ? DD[0] : null
            }
          else cD.selectedCategoryKey = KD;
          return 0 === Object.keys(zD).length && sD && XD.e.set({
            openEverythingMenuName: null
          }), cD
        },
        ZD = (DD, zD, wD) => {
          const pD = fD.selectedCategoryKey,
            sD = cK(pD, DD),
            KD = null !== wD && void 0 !== wD ? wD : fD.userInputsPerItem[sD],
            rD = {
              categoryKey: pD,
              itemKey: DD,
              userInput: KD
            };
          if (hD.current = pD, zD.isRewardedAd) {
            if (Date.now() - OD.current < 5e3) return;
            (0, Lz.db)((() => {
              var wD, pD, KD;
              console.log("bought rewarded ad");
              const LD = rD.categoryKey ? null === (wD = QD.current.shopInfo[rD.categoryKey]) || void 0 === wD ? void 0 : wD.items[DD] : null;
              if (!LD || !LD.isRewardedAd) return void console.warn("Shop item no longer valid or a rewarded ad, early out");
              (null === (pD = zD.userInput) || void 0 === pD ? void 0 : pD.type) === (null === LD || void 0 === LD || null === (KD = LD.userInput) || void 0 === KD ? void 0 : KD.type) ? (rD.userInput = QD.current.userInputsPerItem[sD], nD.gameBridge.send("buyShopItem", rD), zD.onBoughtMessage && lD(zD.onBoughtMessage)) : console.warn("Shop item input type changed, early out")
            })), OD.current = Date.now()
          } else {
            nD.gameBridge.send("buyShopItem", rD), iD({
              awaitingPurchase: !0
            }), clearTimeout(JD.current), JD.current = setTimeout((() => {
              ED.current = null, iD({
                awaitingPurchase: !1
              })
            }), 1e3);
            const DD = (0, ip.d)(zD, KD);
            if (ED.current = null, !isNaN(DD) && gK(fD.currencyAmounts, zD.currency)) {
              0 !== DD && (ED.current = {
                currency: zD.currency,
                amountBefore: fD.currencyAmounts[zD.currency].amount
              });
              const wD = {
                ...fD.currencyAmounts
              };
              wD[zD.currency].amount -= DD, iD({
                currencyAmounts: wD
              })
            }
            zD.onBoughtMessage && lD(zD.onBoughtMessage)
          }
        },
        yD = (DD, zD) => {
          if (null === zD || !DD.shopInfo[zD]) return DD;
          let wD = DD.redDotInfo;
          return wD.categoryHasRedDot(zD) && (wD.updateCategoryRedDot(zD, !1), wD = wD.shallowCopy()), {
            ...DD,
            selectedCategoryKey: zD,
            redDotInfo: wD
          }
        },
        kD = DD => {
          ID((zD => yD(zD, DD)))
        };
      (0, lz.g)(op.j, (() => {
        ID((DD => {
          const zD = (0, op.k)(tp(DD.shopInfo), DD.selectedCategoryKey, (zD => (0, op.h)(DD.shopInfo[zD].items)));
          return zD === DD.selectedCategoryKey ? DD : yD(DD, zD)
        }))
      })), (0, lz.g)("showShopFromServer", (DD => {
        let {
          toggle: zD,
          es: wD
        } = DD;
        wD && kD(wD), 0 === Object.keys(fD.shopInfo).length || zD && sD ? XD.e.set({
          openEverythingMenuName: null
        }) : XD.e.set({
          openEverythingMenuName: Rz.l.SHOP
        })
      })), (0, lz.g)("closeShopOnDamaged", (() => {
        sD && XD.e.set({
          openEverythingMenuName: null
        })
      })), (0, lz.g)("overShopInfo", (DD => {
        lD(DD)
      })), (0, BD.g)("currencyAmounts", (DD => {
        var zD;
        const wD = ED.current;
        wD && (null === DD || void 0 === DD || null === (zD = DD[wD.currency]) || void 0 === zD ? void 0 : zD.amount) === wD.amountBefore ? iD({
          currencyAmounts: DD
        }) : (ED.current = null, iD({
          currencyAmounts: DD,
          awaitingPurchase: !1
        }))
      })), (0, BD.g)("shopInfo", (DD => {
        iD({
          ...WD(DD),
          awaitingPurchase: !1
        })
      }));
      const mD = (0, pD.useRef)({
        playerIds: rD,
        localPlayerId: LD
      });
      (0, pD.useEffect)((() => {
        mD.current.playerIds === rD && mD.current.localPlayerId === LD || (mD.current = {
          playerIds: rD,
          localPlayerId: LD
        }, ID((DD => {
          const zD = WD(DD.shopInfo);
          return {
            ...DD,
            ...zD
          }
        })))
      }), [rD, LD]);
      const eD = fD.selectedCategoryKey,
        oD = (DD, zD) => {
          var wD, pD;
          return (isNaN(zD) || (0, Dw.B)(DD.currency) || gK(fD.currencyAmounts, DD.currency) && zD <= fD.currencyAmounts[DD.currency].amount) && (null === (wD = DD.canBuy) || void 0 === wD || wD) && !(null !== (pD = DD.hidden) && void 0 !== pD && pD)
        },
        aD = (DD, zD) => {
          var wD, pD, sD;
          const rD = cK(eD, DD),
            LD = fD.shopInfo[eD].items[DD],
            RD = fD.userInputsPerItem[rD],
            UD = (0, ip.d)(LD, RD),
            ID = oD(LD, UD),
            BD = LD.enchant,
            GD = BD ? (0, ND.ub)(null !== (wD = LD.customTitle) && void 0 !== wD ? wD : DD, {
              colour: ND.pb[BD.tier]
            }) : null !== (pD = LD.customTitle) && void 0 !== pD ? pD : DD,
            hD = zD => {
              const wD = null !== zD && void 0 !== zD ? zD : RD,
                pD = void 0 !== zD ? (0, ip.d)(LD, zD) : UD;
              oD(LD, pD) && null !== wD && ZD(DD, LD, zD);
              let sD = fD.redDotInfo;
              sD.itemHasRedDot(eD, DD) && (sD.updateItemRedDot(eD, DD, !1), sD = sD.shallowCopy()), iD({
                redDotInfo: sD
              })
            };
          return (0, AD.jsxs)("div", {
            className: KD()("ShopItem", {
              ShopItemNoInput: !LD.userInput,
              ShopItemNoInputCanBuy: !LD.userInput && ID,
              ShopItemNoInputSelected: LD.isSelected,
              ShopItemEnchant: !!BD
            }),
            "data-pad-focusable": !LD.userInput || void 0,
            "data-pad-unavailable": !LD.userInput && !ID || void 0,
            "data-pad-repeat": null !== (sD = (0, op.d)(LD)) && void 0 !== sD ? sD : void 0,
            "data-pad-repeat-wait": fD.awaitingPurchase || void 0,
            onClick: () => {
              if (BD && TD.current) {
                if (PD !== rD) return void xD(rD);
                xD(null)
              }
              LD.userInput || hD()
            },
            onPointerDown: DD => {
              BD && (TD.current = (0, Wp.s)(DD))
            },
            onPointerEnter: DD => {
              BD && !(0, Wp.s)(DD) && xD(rD)
            },
            onPointerLeave: DD => {
              BD && !(0, Wp.s)(DD) && xD((DD => DD === rD ? null : DD))
            },
            style: {
              zIndex: Object.keys(fD.shopInfo[eD].items).length - zD
            },
            children: [fD.redDotInfo.itemHasRedDot(eD, DD) && (0, AD.jsx)(cD.d, {
              top: "-6px",
              right: "-6px"
            }), LD.badge && (0, AD.jsx)("div", {
              className: "ShopBadgeContainer",
              children: (0, AD.jsx)("div", {
                className: KD()("ShopBadgeMain", LD.badge.type),
                children: (0, AD.jsx)(Zp.e, {
                  text: LD.badge.text
                })
              })
            }), (0, AD.jsx)("div", {
              className: "ShopItemLeft",
              children: LD.image && (0, AD.jsx)(AK, {
                item: LD,
                minWidth: 5,
                minHeight: 4.8
              })
            }), (0, AD.jsxs)("div", {
              className: "ShopItemRight",
              children: [(0, AD.jsxs)("div", {
                className: "ShopItemHeader",
                children: [(0, AD.jsx)("div", {
                  className: "ShopItemHeaderTitle",
                  children: (0, AD.jsx)(Zp.e, {
                    text: GD
                  })
                }), (0, AD.jsx)("div", {
                  className: "ShopItemHeaderDescription",
                  children: (0, AD.jsx)(Zp.e, {
                    text: LD.description
                  })
                })]
              }), LD.userInput && (0, AD.jsxs)("div", {
                className: "ShopItemInputsContainer",
                onClick: DD => {
                  DD.stopPropagation()
                },
                children: [(0, AD.jsx)(IK, {
                  item: LD,
                  currInput: RD,
                  updateInput: zD => {
                    ((DD, zD, wD) => {
                      const pD = cK(DD, zD),
                        sD = {
                          ...fD.userInputsPerItem
                        };
                      sD[pD] = wD, iD({
                        userInputsPerItem: sD
                      })
                    })(eD, DD, zD)
                  },
                  onSubmit: DD => {
                    hD(DD)
                  }
                }), ("dropdown" !== LD.userInput.type || !LD.userInput.autoSubmit) && (0, AD.jsx)(gD.f, {
                  className: "ItemCostButton",
                  disabled: !ID && null !== RD,
                  onClick: () => {
                    hD()
                  },
                  children: (0, AD.jsx)(fK, {
                    item: LD,
                    cost: UD,
                    currencyAmounts: fD.currencyAmounts
                  })
                })]
              })]
            }), !LD.userInput && (0, AD.jsx)("div", {
              className: "ShopItemNoInputCost",
              children: (0, AD.jsx)(fK, {
                item: LD,
                cost: UD,
                currencyAmounts: fD.currencyAmounts
              })
            }), BD && PD === rD && (0, AD.jsxs)("div", {
              className: "ShopItemEnchantInfo SmallTextBold",
              children: [(0, AD.jsx)(Zp.e, {
                text: GD
              }), (0, AD.jsx)("div", {
                className: "ShopItemEnchantInfoDescription",
                children: (0, AD.jsx)(Zp.e, {
                  text: (0, lp.b)("", BD.enchantments, BD.enchantmentData)
                })
              })]
            })]
          }, rD)
        },
        uD = function(DD) {
          for (const zD in DD)
            if (DD[zD].smp) return !0;
          return !1
        }(fD.shopInfo),
        vD = fs(fD.shopInfo, eD);
      return (0, AD.jsx)(jp.d, {
        className: "Menu ShopBody",
        show: sD,
        children: 0 !== Object.keys(fD.shopInfo).length && (0, AD.jsxs)(AD.Fragment, {
          children: [(0, AD.jsxs)("div", {
            className: "MenuSideBar",
            children: [(0, AD.jsx)(UD, {
              items: tp(fD.shopInfo).map((DD => {
                var zD;
                return {
                  id: DD,
                  title: null !== (zD = fD.shopInfo[DD].customTitle) && void 0 !== zD ? zD : DD,
                  redDot: fD.redDotInfo.categoryHasRedDot(DD)
                }
              })),
              link: RD ? {
                faIcon: "users-gear",
                title: "lobbyManageEntry:manageLobby",
                onClick: () => {
                  (0, vp.f)({
                    page: (0, vp.d)(),
                    source: "shop"
                  })
                }
              } : void 0,
              selectedItemId: eD,
              onClick: kD,
              padStartsOnTab: (0, op.e)(eD)
            }), (0, AD.jsx)("div", {
              className: "MenuSideBarFooter",
              children: fD.currencyAmounts && Object.keys(fD.currencyAmounts).map((DD => {
                var zD;
                const wD = fD.currencyAmounts[DD];
                return wD.hidden ? null : (0, AD.jsxs)("div", {
                  className: "ShopCurrencyDiv " + (bD ? "SmallText" : ""),
                  children: [(0, AD.jsxs)("div", {
                    className: "ShopCurrencyDetails",
                    children: [(0, AD.jsx)("div", {
                      className: "ShopCurrencyAmtIcon",
                      style: {
                        color: wD.iconColour
                      },
                      children: (0, AD.jsx)(nK, {
                        iconName: wD.icon
                      })
                    }), "\xa0", (0, Sp.d)(wD.amount, 6)]
                  }), (null === (zD = wD.subtext) || void 0 === zD ? void 0 : zD.length) > 0 && (0, AD.jsx)("div", {
                    className: "ShopCurrencySubtext",
                    children: (0, AD.jsx)(Zp.e, {
                      text: wD.subtext
                    })
                  })]
                }, DD)
              }))
            })]
          }), (0, AD.jsxs)("div", {
            className: "MenuBody ShopMenuBody",
            children: [uD && (0, AD.jsx)(rK, {
              show: sD,
              shopInfo: fD.shopInfo,
              selectedCategoryKey: eD,
              buy: (DD, zD, wD) => {
                ZD(DD, zD, wD)
              },
              canAfford: oD,
              message: fD.onBoughtInfo
            }), null === vD && (0, AD.jsxs)(AD.Fragment, {
              children: [(0, AD.jsx)("div", {
                className: KD()("ShopOnBoughtInfo", {
                  ShopOnBoughtInfoShow: null !== fD.onBoughtInfo
                }),
                children: (0, AD.jsx)(Zp.e, {
                  text: GD.current
                })
              }), (0, AD.jsx)("div", {
                className: "ShopItemsWrapper",
                children: (0, AD.jsxs)("div", {
                  className: "ShopItemsInner",
                  children: [(null === (zD = fD.shopInfo[eD]) || void 0 === zD ? void 0 : zD.description) && (0, AD.jsx)("div", {
                    className: "ShopCategoryDescription",
                    children: (0, AD.jsx)(Zp.e, {
                      text: fD.shopInfo[eD].description
                    })
                  }), sD && (0, AD.jsx)("div", {
                    className: "ShopItems",
                    ref: MD,
                    "data-pad-initial-area": !0,
                    children: tp(null === (wD = fD.shopInfo[eD]) || void 0 === wD ? void 0 : wD.items).map(((DD, zD) => aD(DD, zD)))
                  })]
                })
              })]
            })]
          })]
        })
      })
    }));

    function AK(DD) {
      let {
        item: zD,
        minWidth: wD,
        minHeight: pD
      } = DD;
      const {
        image: sD,
        schematicId: KD,
        imageColour: rD
      } = zD;
      if (KD) return (0, AD.jsx)("div", {
        className: "ShopSchematic",
        style: {
          width: `${wD}rem`,
          height: `${pD}rem`
        },
        children: (0, AD.jsx)(yp.e, {
          game: {
            schematicId: KD
          }
        })
      });
      var cD, gD;
      if ((0, Np.f)(sD)) return (0, AD.jsx)("div", {
        className: "ShopBlock",
        style: {
          minWidth: `${wD}rem`,
          height: "0",
          minHeight: `${pD}rem`
        },
        children: (0, AD.jsx)(Np.d, {
          itemName: sD,
          amount: null !== (cD = zD.amount) && void 0 !== cD ? cD : 0,
          amountFontSize: pD / 4 + "rem",
          enchantmentTier: null === (gD = zD.enchant) || void 0 === gD ? void 0 : gD.tier
        })
      });
      const RD = sD.slice(-4);
      return ".jpg" === RD || ".png" === RD ? (0, AD.jsx)(UK, {
        image: sD,
        minWidth: wD
      }) : (0, AD.jsx)(LD.e, {
        name: sD,
        className: "SelectedItemImage",
        style: {
          color: rD
        }
      })
    }

    function UK(DD) {
      let {
        image: zD,
        minWidth: wD
      } = DD;
      const {
        gameNameWithVariation: pD
      } = (0, Cz.i)("connectedGame"), sD = zD.endsWith(".jpg");
      return (0, AD.jsx)("img", {
        className: KD()({
          ShopPixelImage: !sD
        }),
        style: {
          width: `${sD?1.6*wD:wD}rem`,
          height: "auto",
          fontSize: "1.25rem"
        },
        src: `/textures/games/${(0,ND.Tb)(pD)}/${zD}`,
        alt: zD,
        draggable: !1
      })
    }

    function fK(DD) {
      let {
        item: zD,
        cost: wD,
        currencyAmounts: pD
      } = DD;
      const sD = !isNaN(wD) && 0 !== wD && gK(pD, zD.currency);
      let KD = null;
      return zD.buyButtonText ? KD = zD.buyButtonText : sD ? (KD = wD, zD.sell && (KD = -1 * wD), KD = KD.toString()) : 0 === wD ? KD = "Free" : zD.isRewardedAd && (KD = "Watch ad"), (0, Dw.B)(KD) || " " === KD ? null : (0, AD.jsxs)("div", {
        className: "BuyItemCostAndIcon",
        children: [sD && (0, AD.jsx)("div", {
          style: {
            color: pD[zD.currency].iconColour
          },
          className: "BuyItemIcon",
          children: (0, AD.jsx)(nK, {
            iconName: pD[zD.currency].icon
          })
        }), (0, AD.jsx)("div", {
          className: "BuyItemCost",
          children: (0, AD.jsx)(Zp.e, {
            text: KD
          })
        })]
      })
    }

    function IK(DD) {
      let {
        item: zD,
        currInput: wD,
        updateInput: sD,
        onSubmit: KD
      } = DD;
      const {
        t: LD
      } = (0, rD.E)(), cD = (0, pD.useRef)(null);
      if ((0, pD.useEffect)((() => {
          const DD = cD.current;
          DD && DD.value !== wD && document.activeElement !== DD && (DD.value = null !== wD && void 0 !== wD ? wD : "")
        }), [wD]), !zD.userInput) return null;
      let gD = zD.userInput;
      if (hD.featureFlags.sanitizeShopInput && "text" === zD.userInput.type && (gD = {
          type: "number",
          placeholderText: "Numbers Only"
        }), "text" === gD.type || "number" === gD.type) {
        var RD, UD;
        console.assert(void 0 !== wD, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(zD)}`);
        const DD = "text" === gD.type && gD.wordCharsOnly;
        return (0, AD.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputTextWrapper",
          children: (0, AD.jsx)(JD.e, {
            className: "ShopItemUserInputText",
            placeholderText: LD(gD.placeholderText),
            defaultValue: wD,
            domRef: cD,
            onValueChange: (zD, wD) => {
              !0 === DD && (zD = (0, mp.bb)(zD)), cD.current.value = zD, sD(zD)
            },
            onEnter: KD,
            type: gD.type
          }, (null !== (RD = gD.initialValue) && void 0 !== RD ? RD : "") + (null !== (UD = gD.placeholderText) && void 0 !== UD ? UD : ""))
        })
      }
      if ("dropdown" === gD.type) {
        console.assert(void 0 !== wD, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(zD)}`);
        const DD = gD.autoSubmit;
        return (0, AD.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputDropdown",
          children: (0, AD.jsx)(Xz.c, {
            options: gD.dropdownOptions.map((DD => (0, ip.h)(DD))),
            value: wD,
            onChange: zD => {
              let {
                value: wD
              } = zD;
              sD(wD), DD && KD(wD)
            }
          })
        })
      }
      return "player" === gD.type ? (0, AD.jsx)(BK, {
        userInput: gD,
        currInput: wD,
        updateInput: sD
      }) : "color" === gD.type ? (0, AD.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputColor",
        children: (0, AD.jsx)("input", {
          type: "color",
          value: wD,
          onChange: DD => {
            sD(DD.target.value)
          }
        })
      }) : null
    }

    function BK(DD) {
      let {
        userInput: zD,
        currInput: wD,
        updateInput: pD
      } = DD;
      const sD = (0, Cz.i)("players"),
        KD = (0, Cz.i)("hiddenPlayerNames"),
        rD = (0, ip.l)(sD.ids, sD.localId, zD);
      return (0, AD.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputDropdown",
        children: (0, AD.jsx)(Xz.c, {
          options: rD.map((DD => {
            const {
              name: zD
            } = sD.byId[DD];
            return {
              value: DD,
              label: null === zD ? "" : (0, kp.g)(zD, KD)
            }
          })),
          value: wD,
          onChange: DD => {
            let {
              value: zD
            } = DD;
            pD(zD)
          }
        })
      })
    }

    function GK(DD) {
      let {
        ids: zD
      } = DD;
      return zD
    }

    function hK(DD) {
      let {
        localId: zD
      } = DD;
      return zD
    }

    function nK(DD) {
      let {
        iconName: zD
      } = DD;
      return nD.gameBridge.lookup("isItemName", zD) ? (0, AD.jsx)(Np.d, {
        itemName: zD,
        amount: 1
      }) : (0, AD.jsx)(LD.e, {
        name: zD,
        className: "2x"
      })
    }
    var MK = wD(1648);
    const OK = (0, wD(1394).h)((DD => DD.PadLobbyShortcuts)),
      JK = (0, pD.lazy)((() => Promise.resolve().then((() => wD(4684))).then((DD => ({
        default: DD.Lobbyleaderboard
      }))))),
      EK = (0, pD.lazy)((() => wD.e(220).then((() => wD(40995))).then((DD => ({
        default: DD.LobbyManageView
      })))));

    function QK(DD) {
      let {
        show: zD
      } = DD;
      return zD ? (0, AD.jsx)(XK, {}) : null
    }

    function XK() {
      const DD = (0, ap.c)();
      return (0, AD.jsxs)(AD.Fragment, {
        children: [(0, AD.jsx)(OK, {}), (0, AD.jsxs)(pD.Suspense, {
          fallback: (0, AD.jsx)("div", {
            className: "CharacterCustomisationLoading",
            children: (0, AD.jsx)(ED.e, {})
          }),
          children: [DD && (0, AD.jsx)(EK, {
            leaderboard: (0, AD.jsx)(JK, {})
          }), !DD && (0, AD.jsx)(JK, {})]
        })]
      })
    }
    var VK = wD(1562),
      PK = wD(3009),
      CK = wD(1737),
      xK = wD(3053),
      TK = wD(2694),
      bK = wD(1492),
      jK = wD(1453),
      dK = wD(2990),
      SK = wD(3007),
      iK = wD(2319);
    const lK = "storeRecentGiftRecipients",
      WK = new Map;

    function NK() {
      try {
        const DD = pw.h.getItem(lK);
        return Array.isArray(DD) ? DD.filter((DD => "string" === typeof(null === DD || void 0 === DD ? void 0 : DD.name) && DD.name.length > 0)).map((DD => ({
          name: DD.name,
          cosmetics: DD.cosmetics && "object" === typeof DD.cosmetics ? DD.cosmetics : null
        }))) : []
      } catch {
        return []
      }
    }

    function ZK(DD) {
      var zD;
      const [wD, sD] = (0, pD.useState)(""), [KD, rD] = (0, pD.useState)("search"), [LD, cD] = (0, pD.useState)(null), [gD, RD] = (0, pD.useState)(null), AD = (0, pD.useRef)(null), UD = (0, pD.useRef)(null);
      (0, pD.useEffect)((() => () => {
        AD.current && clearTimeout(AD.current)
      }), []);
      const fD = null !== (zD = null === LD || void 0 === LD ? void 0 : LD.name) && void 0 !== zD ? zD : null;

      function ID() {
        AD.current && (clearTimeout(AD.current), AD.current = null)
      }(0, pD.useEffect)((() => {
        if (null === fD || DD === xD.NULL_USER_CONTEXT) return;
        const zD = fD.toLowerCase();
        if (zD === DD.getPlayerName().toLowerCase()) return void RD({
          name: fD,
          result: {
            giftRecipientFound: !1,
            giftRecipientError: "store:giftRecipientIsYou"
          }
        });
        const wD = WK.get(zD);
        if (wD) return void RD({
          name: fD,
          result: wD
        });
        let pD = !1;
        return async function(DD, zD) {
          try {
            const wD = await (0, xD.postJsonWithMetricsCookiesAndJsonResponse)(`${rz.clientSideServerUrls.indexUrl}/index/store/gift-recipient`, {
              giftRecipientName: zD
            }, {
              retries: 1
            }, DD.getMetricsCookies());
            if ("boolean" !== typeof(null === wD || void 0 === wD ? void 0 : wD.giftRecipientFound)) throw new Error(`Unexpected gift recipient lookup response: ${JSON.stringify(wD)}`);
            return wD
          } catch (wD) {
            return console.error("Failed to look up gift recipient:", wD), {
              giftRecipientFound: !1,
              giftRecipientError: "store:giftRecipientLookupFailed"
            }
          }
        }(DD, fD).catch((DD => (console.error("Gift recipient lookup failed:", DD), {
          giftRecipientFound: !1,
          giftRecipientError: "store:giftRecipientLookupFailed"
        }))).then((DD => {
          !0 !== DD.giftRecipientFound && "store:giftRecipientLookupFailed" === DD.giftRecipientError || WK.set(zD, DD), pD || RD({
            name: fD,
            result: DD
          })
        })), () => {
          pD = !0
        }
      }), [fD, DD]);
      const BD = (0, pD.useMemo)((() => {
        const DD = wD.trim();
        if (!DD) return {
          status: "none"
        };
        if (!LD || LD.name !== DD || (null === gD || void 0 === gD ? void 0 : gD.name) !== LD.name) return {
          status: "pending",
          name: DD
        };
        const zD = gD.result;
        return !1 === zD.giftRecipientFound ? {
          status: "error",
          name: LD.name,
          error: zD.giftRecipientError
        } : {
          status: "found",
          name: zD.giftRecipientName,
          ownedPacks: zD.giftRecipientOwnedPacks,
          hasSuperRank: zD.giftRecipientHasSuperRank,
          isSubscriber: zD.giftRecipientIsSubscriber
        }
      }), [wD, LD, gD]);
      (0, pD.useEffect)((() => {
        "found" === BD.status && "typed" === (null === LD || void 0 === LD ? void 0 : LD.source) && UD.current !== BD.name && (UD.current = BD.name, (0, HD.reportAnalyticsClick)({
          id: "store.gift_recipient",
          value: "typed"
        }))
      }), [BD, LD]);
      const GD = (null === gD || void 0 === gD ? void 0 : gD.name) === (null === LD || void 0 === LD ? void 0 : LD.name) ? null === gD || void 0 === gD ? void 0 : gD.result : null,
        hD = !0 === (null === GD || void 0 === GD ? void 0 : GD.giftRecipientFound) ? GD.giftRecipientCosmetics : null;
      return {
        query: wD,
        via: KD,
        recipient: BD,
        recipientCosmetics: hD,
        type: function(DD) {
          sD(DD), rD("search"), ID();
          const zD = DD.trim();
          zD ? AD.current = setTimeout((() => {
            cD({
              name: zD,
              source: "typed"
            })
          }), 400) : cD(null)
        },
        choose: function(DD, zD) {
          ID(), sD(DD), rD("typed" === zD ? "search" : "prefilled" === zD ? "prefilled" : "suggestion"), cD({
            name: DD,
            source: zD
          }), "typed" !== zD && "prefilled" !== zD && (0, HD.reportAnalyticsClick)({
            id: "store.gift_recipient",
            value: zD
          })
        },
        clear: function() {
          ID(), sD(""), rD("search"), cD(null)
        },
        recordGift: function(DD, zD) {
          ! function(DD) {
            WK.delete(DD.toLowerCase())
          }(DD), RD((wD => {
            if (!wD || wD.name.toLowerCase() !== DD.toLowerCase() || !0 !== wD.result.giftRecipientFound || "superRank" === zD) return wD;
            const pD = wD.result.giftRecipientOwnedPacks;
            return {
              ...wD,
              result: {
                ...wD.result,
                giftRecipientOwnedPacks: pD.includes(zD) ? pD : [...pD, zD]
              }
            }
          }))
        }
      }
    }
    var yK = wD(2310),
      kK = wD(4687),
      mK = wD(262),
      eK = wD(3098);
    const oK = ["pointerdown", "pointermove", "keydown", "wheel", "touchstart", "scroll", "blur", "focus"];
    var aK = wD(2252),
      uK = wD(605),
      vK = wD(2356),
      tK = wD(2600);

    function FK(DD) {
      let {
        cosmetics: zD
      } = DD;
      return (0, AD.jsx)("span", {
        className: "StoreRecipientAvatar",
        children: (0, AD.jsx)(vK.c, {
          cosmetics: zD
        })
      })
    }

    function YK(DD, zD) {
      var wD, pD;
      const sD = null !== (wD = DD.friend) && void 0 !== wD ? wD : {
        isError: !1,
        name: DD.name,
        ranks: [],
        cosmetics: null !== (pD = DD.cosmetics) && void 0 !== pD ? pD : {},
        nameColour: uK.b,
        location: {
          status: "noGamePlayed"
        }
      };
      return zD ? {
        ...sD,
        cosmetics: zD
      } : sD
    }

    function HK(DD) {
      let {
        pending: zD
      } = DD;
      return (0, AD.jsx)("span", {
        className: "StoreRecipientLoader",
        children: zD && (0, AD.jsx)(ED.e, {})
      })
    }

    function qK(DD) {
      var zD;
      let {
        selfName: wD,
        giftRecipient: sD,
        suggestionsVersion: cD,
        pulseSignal: RD,
        disabled: UD
      } = DD;
      const {
        t: fD
      } = (0, rD.E)(), ID = (0, mD.o)(), BD = (0, pD.useRef)(null), GD = (0, pD.useRef)(null), {
        query: nD,
        via: MD,
        recipient: OD,
        recipientCosmetics: ED
      } = sD, QD = (0, iK.n)(nD), XD = (0, pD.useMemo)((() => {
        const DD = hD.featureFlags.useSocialFeatures ? ID.friends.filter((DD => !DD.isError)) : [];
        return (0, iK.g)({
          onlineFriends: (0, mD.h)(DD),
          recentRecipients: NK(),
          friends: DD,
          selfName: wD,
          max: 8
        })
      }), [ID.friends, wD, cD]), VD = nD.trim().toLowerCase(), PD = "search" !== MD && VD ? XD.find((DD => DD.name.toLowerCase() === VD)) : void 0, CD = PD && "prefilled" === MD ? [PD, ...XD.filter((DD => DD !== PD))] : XD, xD = "" !== VD && !PD, TD = xD ? nD : "", bD = CD.length > 0;
      (0, pD.useEffect)((() => {
        BD.current && BD.current.value !== TD && (BD.current.value = TD)
      }), [TD]), (0, pD.useEffect)((() => {
        BD.current && (BD.current.disabled = UD)
      }), [UD, RD]);
      const jD = (0, pD.useRef)(0);

      function SD() {
        "self" !== QD && (0, HD.reportAnalyticsClick)({
          id: "store.mode",
          value: "self"
        }), sD.clear()
      }

      function iD(DD) {
        var zD, wD;
        if (UD) return;
        if (" " === DD.key || "Enter" === DD.key) return DD.preventDefault(), void DD.currentTarget.click();
        const pD = Array.from(null !== (zD = null === (wD = GD.current) || void 0 === wD ? void 0 : wD.querySelectorAll("[role=radio]")) && void 0 !== zD ? zD : []),
          sD = pD.indexOf(DD.currentTarget);
        let KD;
        "ArrowRight" === DD.key || "ArrowDown" === DD.key ? KD = pD[(sD + 1) % pD.length] : "ArrowLeft" === DD.key || "ArrowUp" === DD.key ? KD = pD[(sD - 1 + pD.length) % pD.length] : "Home" === DD.key ? KD = pD[0] : "End" === DD.key && (KD = pD[pD.length - 1]), KD && (DD.preventDefault(), KD.focus(), KD.click())
      }(0, pD.useEffect)((() => {
        var DD;
        RD > jD.current && !UD && (jD.current = RD, null === (DD = BD.current) || void 0 === DD || DD.focus())
      }), [RD, UD]);
      const lD = "self" === QD,
        WD = null !== (zD = null === PD || void 0 === PD ? void 0 : PD.name) && void 0 !== zD ? zD : null,
        ND = "error" === OD.status ? OD.error : null,
        ZD = "store:giftRecipientLookupFailed" === ND;
      return (0, AD.jsxs)("div", {
        className: KD()("StoreRecipientStrip", {
          StoreRecipientStripDisabled: UD,
          StoreRecipientStripNoChips: !bD
        }),
        children: [(0, AD.jsx)("span", {
          className: "StoreRecipientLabel",
          "aria-hidden": !0,
          children: fD("store:buyingFor")
        }), (0, AD.jsxs)("div", {
          ref: GD,
          className: "StoreRecipientRadios",
          role: "radiogroup",
          "aria-label": fD("store:whoIsItFor"),
          children: [(0, AD.jsxs)("div", {
            role: "radio",
            "data-pad-focusable": !0,
            "aria-checked": lD,
            tabIndex: UD || !lD && null !== WD ? -1 : 0,
            className: KD()("StoreRecipientMe", {
              StoreRecipientChecked: lD
            }),
            onClick: () => {
              UD || SD()
            },
            onKeyDown: iD,
            children: [(0, AD.jsx)(LD.e, {
              name: "user"
            }), " ", fD("store:me")]
          }), bD && (0, AD.jsx)("div", {
            className: "StoreRecipientChips",
            children: CD.map((DD => {
              const zD = DD === PD;
              return (0, AD.jsx)("div", {
                role: "radio",
                "data-pad-focusable": !0,
                "aria-checked": zD,
                tabIndex: !UD && zD ? 0 : -1,
                title: DD.name,
                className: KD()("StoreRecipientChip", {
                  StoreRecipientChecked: zD
                }),
                onClick: () => {
                  UD || function(DD) {
                    "gift" !== QD && (0, HD.reportAnalyticsClick)({
                      id: "store.mode",
                      value: "gift"
                    }), sD.choose(DD.name, DD.kind)
                  }(DD)
                },
                onKeyDown: iD,
                children: (0, AD.jsx)(tK.e, {
                  playerSocialPreview: YK(DD, zD ? ED : null),
                  opensProfileCard: !1,
                  isFriend: null !== DD.friend,
                  hideFriendBadge: !0,
                  showLocation: null !== DD.friend,
                  status: null === DD.friend ? null : void 0,
                  trailing: zD ? (0, AD.jsx)(HK, {
                    pending: "pending" === OD.status
                  }) : void 0
                })
              }, DD.name)
            }))
          })]
        }), (0, AD.jsxs)("div", {
          className: KD()("StoreRecipientSearch", {
            StoreRecipientChecked: xD,
            StoreRecipientSearchPulse: RD > 0 && !xD,
            StoreRecipientSearchError: null !== ND && !ZD
          }),
          onClick: () => {
            var DD;
            null === (DD = BD.current) || void 0 === DD || DD.focus()
          },
          children: [xD && "found" === OD.status && ED && (0, AD.jsx)(FK, {
            cosmetics: ED
          }), !(xD && "found" === OD.status && ED) && (0, AD.jsx)(LD.e, {
            name: "magnifying-glass",
            className: "StoreRecipientSearchIcon"
          }), (0, AD.jsx)(JD.e, {
            className: "StoreRecipientSearchInput",
            domRef: BD,
            placeholderText: fD("store:searchName"),
            defaultValue: TD,
            maxLength: dD.l,
            onValueChange: function(DD) {
              "gift" !== QD && DD.trim() && (0, HD.reportAnalyticsClick)({
                id: "store.mode",
                value: "gift"
              }), sD.type(DD)
            },
            onEnter: () => {
              var DD;
              const zD = null === (DD = BD.current) || void 0 === DD ? void 0 : DD.value.trim();
              zD && sD.choose(zD, "typed")
            },
            blurOnEnter: !0
          }), xD && (0, AD.jsx)(HK, {
            pending: "pending" === OD.status
          }), xD && (0, AD.jsx)("div", {
            ...(0, gD.ib)({
              disabled: UD
            }),
            "aria-label": fD("store:clearRecipient"),
            title: fD("store:clearRecipient"),
            className: "StoreRecipientClear",
            onClick: DD => {
              DD.stopPropagation(), UD || SD()
            },
            children: (0, AD.jsx)(LD.e, {
              name: "xmark"
            })
          })]
        }, RD), ND && (0, AD.jsx)("div", {
          className: KD()("StoreRecipientPopover", {
            StoreRecipientPopoverSoft: ZD
          }),
          role: "status",
          children: fD(ND)
        })]
      })
    }
    var Dr = wD(2305),
      zr = wD(2225),
      wr = wD(3571),
      pr = wD(3104),
      sr = wD(2264);
    const Kr = wD.p + "static/media/superRankPreviewPoster.e64783181b692cc31e08.webp";

    function rr() {
      (0, sr.g)(Kr, {
        lowPriority: !1
      })
    }

    function Lr(DD) {
      let {
        onBack: zD,
        cta: wD,
        recipient: sD,
        afterCta: KD
      } = DD;
      const {
        t: cD
      } = (0, rD.E)(), [RD, UD] = (0, pD.useState)("starting"), fD = (0, pD.useRef)(null), ID = (0, Zz.c)(), BD = (0, pD.useRef)(null), GD = (0, pD.useCallback)((() => {
        const DD = fD.current;
        null !== DD.error && DD.load();
        const zD = DD.play();
        BD.current = zD, zD.catch((DD => {
          (0, wr.e)("Failed to play Super Rank video", DD), ID.current && BD.current === zD && UD("failed")
        }))
      }), [ID]);
      return (0, pD.useEffect)((() => {
        const DD = fD.current;
        let zD;

        function wD() {
          clearTimeout(zD), zD = setTimeout(GD, 3e3)
        }
        return GD(), DD.addEventListener("ended", wD), () => {
          clearTimeout(zD), DD.removeEventListener("ended", wD)
        }
      }), [GD]), (0, AD.jsxs)("div", {
        className: "StoreSuperRankDetail",
        children: [(0, AD.jsxs)("div", {
          className: "StoreDetailHeader",
          children: [(0, AD.jsx)(gD.d, {
            className: "StoreDetailBackButton",
            onClick: zD,
            padBack: !0,
            children: cD("general:back")
          }), (0, AD.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, AD.jsx)(LD.e, {
              name: "bolt"
            }), " ", cD("homePage:superRank")]
          }), sD]
        }), (0, AD.jsxs)("div", {
          className: "StoreSuperRankDetailBody",
          children: [(0, AD.jsxs)("div", {
            className: "StoreSuperRankVideo",
            children: [(0, AD.jsx)("video", {
              ref: fD,
              src: `${rz.clientSideServerUrls.staticUrl}/videos/SuperRankPreview.mp4`,
              poster: Kr,
              muted: !0,
              playsInline: !0,
              controls: "playing" === RD,
              onPlaying: () => {
                UD("playing")
              },
              onError: () => {
                UD("failed")
              }
            }), ("failed" === RD || "loading" === RD) && (0, AD.jsx)("div", {
              className: "StoreSuperRankPlay",
              children: (0, AD.jsx)(gD.f, {
                ariaLabel: cD("general:play"),
                loading: "loading" === RD,
                onClick: () => {
                  UD("loading"), GD()
                },
                touchPressOn: "pointerup",
                children: (0, AD.jsx)(LD.e, {
                  name: "play"
                })
              })
            })]
          }), (0, AD.jsxs)("div", {
            className: "StoreSuperRankDetailSide",
            children: [(0, AD.jsx)("div", {
              className: "StoreSuperRankDetailTable",
              children: (0, AD.jsx)(pr.d, {})
            }), (0, AD.jsxs)("div", {
              className: "StoreTileActions",
              children: [wD, KD]
            })]
          })]
        })]
      })
    }
    var cr = wD(2618),
      gr = wD(3528),
      Rr = wD(3085),
      Ar = wD(3087);
    const Ur = [uK.v.yellow, uK.v.green, uK.v.aqua, uK.v.blue, uK.v.purple, uK.v.red];

    function fr(DD) {
      return "needsRecipient" === DD || "lookingUp" === DD || "gift" === DD || "recipientOwns" === DD || "recipientSharesOwned" === DD || "recipientSubscribed" === DD
    }

    function Ir(DD) {
      const {
        onKeyDown: zD,
        ...wD
      } = (0, gD.ib)();
      return {
        ...wD,
        "aria-label": DD,
        onKeyDown: DD => {
          DD.target === DD.currentTarget && (null === zD || void 0 === zD || zD(DD))
        }
      }
    }

    function Br(DD) {
      let {
        text: zD
      } = DD;
      return (0, AD.jsx)("span", {
        className: "StoreRainbowText",
        children: Array.from(zD).map(((DD, zD) => (0, AD.jsx)("span", {
          style: {
            color: Ur[zD % Ur.length]
          },
          children: DD
        }, zD)))
      })
    }
    const Gr = {
      recipientOwns: "store:alreadyOwns",
      sharesOwned: "store:sharesOwned",
      recipientSharesOwned: "store:recipientSharesOwned",
      subscribed: "store:subscribed",
      recipientSubscribed: "store:recipientSubscribed"
    };

    function hr(DD) {
      let {
        state: zD,
        item: wD,
        price: pD,
        busy: sD,
        highlight: cD = !1,
        onAct: RD,
        onNeedRecipient: UD,
        onLogin: fD
      } = DD;
      const {
        t: ID
      } = (0, rD.E)(), BD = "superRank" === wD ? iD.h.product.days : null, GD = DD => null === BD ? ID(DD ? "general:gift" : "general:buy") : ID(DD ? "store:giftDays" : "store:buyDays", {
        days: BD
      }), hD = (DD, zD) => {
        const wD = (0, AD.jsxs)(AD.Fragment, {
          children: [null === DD && (0, AD.jsx)("span", {
            className: "StoreCtaLabel StoreCtaLabelPending"
          }), null !== DD && (0, AD.jsx)("span", {
            className: "StoreCtaLabel",
            title: DD,
            children: DD
          })]
        });
        return null !== BD ? (0, AD.jsxs)(AD.Fragment, {
          children: [zD && (0, AD.jsx)("span", {
            className: "StoreCtaIcon",
            children: zD
          }), wD, (0, AD.jsxs)("span", {
            className: "StoreCtaPrice",
            children: ["\xb7", (0, AD.jsx)(zr.e, {
              amount: pD
            })]
          })]
        }) : (0, AD.jsxs)(AD.Fragment, {
          children: [(0, AD.jsxs)("span", {
            className: "StoreCtaLead",
            children: [wD, "\xb7"]
          }), (0, AD.jsxs)("span", {
            className: "StoreCtaPrice",
            children: [zD, (0, AD.jsx)(zr.e, {
              amount: pD
            })]
          })]
        })
      };
      let nD;
      switch (zD) {
        case "pending":
          nD = (0, AD.jsx)(gD.o, {
            className: "StoreCtaButton",
            disabled: !0,
            children: hD(null)
          });
          break;
        case "login":
          nD = (0, AD.jsx)(gD.o, {
            className: "StoreCtaButton",
            onClick: fD,
            children: hD(GD(!1))
          });
          break;
        case "owned":
          nD = (0, AD.jsx)(gD.g, {
            className: "StoreCtaButton",
            onClick: () => {
              XD.e.set({
                openEverythingMenuName: Rz.l.CUSTOMISATION
              })
            },
            children: (0, AD.jsxs)("span", {
              className: "StoreCtaLabel",
              children: [(0, AD.jsx)(LD.e, {
                name: "shirt"
              }), " ", ID("store:equip")]
            })
          });
          break;
        case "recipientOwns":
        case "sharesOwned":
        case "recipientSharesOwned":
        case "subscribed":
        case "recipientSubscribed":
          nD = (0, AD.jsx)(gD.o, {
            className: "StoreCtaButton",
            disabled: !0,
            children: (0, AD.jsx)("span", {
              className: "StoreCtaLabel",
              children: ID(Gr[zD])
            })
          });
          break;
        case "needsRecipient":
        case "lookingUp":
        case "gift":
          nD = (0, AD.jsx)(gD.o, {
            className: "StoreCtaButton",
            disabled: "needsRecipient" === zD || null === pD,
            loading: "lookingUp" === zD || sD,
            onClick: RD,
            analyticsClick: {
              id: "store.gift",
              value: wD
            },
            children: hD(GD(!0), iK.b)
          });
          break;
        case "buy":
        case "recharge":
          nD = (0, AD.jsx)(gD.o, {
            className: "StoreCtaButton",
            loading: sD,
            disabled: null === pD,
            onClick: RD,
            analyticsClick: {
              id: "store.buy",
              value: wD
            },
            children: hD(GD(!1))
          })
      }
      return (0, AD.jsx)("div", {
        className: KD()("StoreCta", {
          StoreCtaHighlight: cD,
          StoreCtaLabelFirst: null !== BD
        }),
        onClick: DD => {
          DD.stopPropagation(), "needsRecipient" === zD && UD()
        },
        children: nD
      })
    }

    function nr() {
      const {
        t: DD
      } = (0, rD.E)();
      return (0, AD.jsxs)("ul", {
        className: "StorePerks",
        children: [(0, AD.jsxs)("li", {
          children: [(0, AD.jsx)(LD.e, {
            name: "check"
          }), (0, AD.jsx)(Br, {
            text: DD("store:colourfulNames")
          })]
        }), (0, AD.jsxs)("li", {
          children: [(0, AD.jsx)(LD.e, {
            name: "check"
          }), DD("store:perkCapes")]
        }), (0, AD.jsxs)("li", {
          children: [(0, AD.jsx)(LD.e, {
            name: "check"
          }), DD("store:perkNoAdverts")]
        }), (0, AD.jsxs)("li", {
          children: [(0, AD.jsx)(LD.e, {
            name: "check"
          }), DD("store:perkFriends", {
            count: (0, FD.c)(["super"])
          })]
        })]
      })
    }

    function Mr(DD) {
      let {
        daysLeft: zD,
        totalDays: wD,
        urgent: pD
      } = DD;
      const {
        t: sD
      } = (0, rD.E)(), LD = wD > 0 ? Math.min(1, Math.max(.03, zD / wD)) : 1;
      return (0, AD.jsxs)("div", {
        className: KD()("StoreSuperRankMeterArea", {
          StoreSuperRankMeterUrgent: pD
        }),
        children: [(0, AD.jsx)("span", {
          className: "StoreSuperRankDaysLeft",
          children: 1 === zD ? sD("store:oneDayLeft") : sD("store:daysLeft", {
            days: zD
          })
        }), (0, AD.jsx)("div", {
          className: "StoreSuperRankMeter",
          children: (0, AD.jsx)("i", {
            style: {
              width: 100 * LD + "%"
            }
          })
        })]
      })
    }

    function Or(DD) {
      let {
        state: zD,
        urgent: wD,
        daysLeft: pD,
        totalDays: sD,
        recipientHasSuperRank: cD,
        busy: gD,
        highlight: RD,
        onOpen: UD,
        onAct: fD,
        onNeedRecipient: ID,
        onLogin: BD
      } = DD;
      const {
        t: GD
      } = (0, rD.E)(), hD = fr(zD), {
        days: nD
      } = iD.h.product, MD = GD("store:recipientHasSuperRank", {
        giftDays: nD
      }), OD = vD("subscribed" === zD);
      return (0, AD.jsxs)("div", {
        className: KD()("StoreTile StoreSuperRankTile", {
          StoreTileGift: hD,
          StoreSuperRankTileUrgent: "recharge" === zD && wD,
          StoreSuperRankTileWithChip: cD,
          StoreSuperRankTileGiftReady: "gift" === zD
        }),
        ...Ir(GD("homePage:superRank")),
        "data-store-item": "superRank",
        onPointerEnter: rr,
        onFocus: rr,
        onClick: UD,
        children: [(0, AD.jsx)("div", {
          className: "StoreSuperRankArt",
          style: {
            backgroundImage: `url(${aK.f})`
          }
        }), hD && (0, AD.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, AD.jsxs)("div", {
          className: "StoreTileContent",
          children: [cD && (0, AD.jsx)("span", {
            className: "StoreChip StoreChipGift",
            title: MD,
            children: MD
          }), (0, AD.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, AD.jsx)(LD.e, {
              name: "bolt"
            }), " ", GD("homePage:superRank")]
          }), hD && (0, AD.jsx)("div", {
            className: "StoreTilePitch",
            children: GD("store:giftPitch", {
              days: nD
            })
          }), "recharge" === zD && (0, AD.jsx)(Mr, {
            daysLeft: pD,
            totalDays: sD,
            urgent: wD
          }), OD && (0, AD.jsx)("div", {
            className: "StoreSuperRankMeterArea",
            children: (0, AD.jsx)("span", {
              className: "StoreSuperRankDaysLeft",
              children: OD
            })
          }), (0, AD.jsx)(nr, {}), (0, AD.jsxs)("div", {
            className: "StoreTileActions",
            children: [(0, AD.jsx)(hr, {
              state: zD,
              item: "superRank",
              price: iD.h.price,
              busy: gD,
              highlight: RD,
              onAct: fD,
              onNeedRecipient: ID,
              onLogin: BD
            }), "needsRecipient" === zD && (0, AD.jsx)("span", {
              className: "StoreTileNote StoreTileNoteGift",
              children: GD("store:pickRecipientFirst")
            }), "recharge" === zD && wD && (0, AD.jsx)("span", {
              className: "StoreTileNote StoreSuperRankEnding",
              children: 1 === pD ? GD("store:endsInOneDay") : GD("store:endsInDays", {
                days: pD
              })
            })]
          })]
        })]
      })
    }
    const Jr = {
      common: "StorePackTileCommon",
      rare: "StorePackTileRare",
      epic: "StorePackTileEpic",
      legendary: "StorePackTileLegendary",
      mythic: "StorePackTileMythic"
    };

    function Er(DD) {
      var zD;
      let {
        pack: wD,
        state: sD,
        busy: cD,
        onOpen: gD,
        onAct: RD,
        onNeedRecipient: UD,
        onLogin: fD
      } = DD;
      const {
        t: ID
      } = (0, rD.E)(), BD = VK.e[wD], GD = dK.i[wD], hD = (0, aK.l)(wD), nD = (0, pD.useRef)(null);
      (0, Rr.o)(wD, nD);
      const MD = fr(sD),
        OD = null !== (zD = BD.displayName) && void 0 !== zD ? zD : wD,
        JD = (0, gr.c)((() => {
          (0, cr.e)();
          const DD = (0, Rr.h)(wD);
          void 0 !== DD && (0, sr.g)((0, Rr.d)(DD))
        })),
        [ED] = (0, pD.useState)(eK.g);
      return (0, AD.jsxs)("div", {
        className: KD()("StoreTile StorePackTile", Jr[BD.tier], {
          StorePackTileOwned: "owned" === sD,
          StorePackTileRecipientOwns: "recipientOwns" === sD,
          StoreTileGift: MD
        }),
        ...Ir(OD),
        ref: nD,
        "data-store-item": wD,
        onClick: gD,
        onPointerMove: DD => {
          "mouse" !== DD.pointerType || 0 === DD.movementX && 0 === DD.movementY || ED || JD.start()
        },
        onPointerLeave: JD.cancel,
        children: [GD && (0, AD.jsx)(GD, {}), (0, AD.jsx)("div", {
          className: "StorePackCharacters",
          children: hD.map((DD => (0, AD.jsx)("div", {
            className: "StorePackCharacter",
            style: {
              backgroundImage: `url(${(0,aK.g)(DD)})`
            }
          }, DD)))
        }), (0, AD.jsx)("div", {
          className: "StoreTileScrim"
        }), MD && (0, AD.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, AD.jsxs)("div", {
          className: "StoreTileContent",
          children: [(0, AD.jsx)("div", {
            className: "StoreTileTitle",
            children: OD
          }), (0, AD.jsxs)("div", {
            className: "StoreTileMeta",
            children: [(0, AD.jsx)(Ar.d, {
              tier: BD.tier
            }), " \xb7 ", ID("store:itemCount", {
              count: (0, Dr.c)(wD)
            }), "owned" === sD && (0, AD.jsxs)("span", {
              className: "StoreTileOwned",
              children: [" \xb7 ", (0, AD.jsx)(LD.e, {
                name: "check"
              }), " ", ID("general:owned")]
            })]
          }), (0, AD.jsx)(hr, {
            state: sD,
            item: wD,
            price: (0, iD.d)(wD),
            busy: cD,
            onAct: RD,
            onNeedRecipient: UD,
            onLogin: fD
          })]
        })]
      })
    }
    var Qr = wD(3056),
      Xr = wD(1556),
      Vr = wD(1457),
      Pr = wD(3556);

    function Cr() {
      return (0, AD.jsx)("span", {
        className: "NewBadge",
        children: "NEW"
      })
    }
    var xr = wD(1348),
      Tr = wD(1570),
      br = wD(34233);

    function jr(DD) {
      let {
        character: zD,
        drawn: wD,
        onDrawn: sD
      } = DD;
      const rD = (0, pD.useRef)(null),
        LD = (0, br.c)(zD);
      return (0, AD.jsx)("div", {
        className: KD()("StoreCharacterLive", {
          StoreCharacterLiveDrawn: wD
        }),
        children: (0, AD.jsx)(pD.Suspense, {
          fallback: null,
          children: (0, AD.jsx)(cr.c, {
            ref: rD,
            framing: "store",
            turntableFromYaw: wD ? LD.yaw : null,
            onReady: () => {
              var DD, wD;
              null === (DD = rD.current) || void 0 === DD || DD.setOrbit(LD), null === (wD = rD.current) || void 0 === wD || wD.setAllCosmetics(Tr.b[zD].cosmetics)
            },
            onDrawn: sD
          })
        })
      })
    }
    const dr = {
        common: "StoreCharacterCardCommon",
        rare: "StoreCharacterCardRare",
        epic: "StoreCharacterCardEpic",
        legendary: "StoreCharacterCardLegendary",
        mythic: "StoreCharacterCardMythic"
      },
      Sr = new Set(["wildSpirits"]);

    function ir(DD) {
      var zD;
      let {
        tile: wD,
        design: sD,
        canGoLive: cD,
        live: gD,
        busy: RD,
        highlight: UD,
        onLiveStart: fD,
        onLiveEnd: ID,
        onOpen: BD,
        onAct: GD,
        onNeedRecipient: hD,
        onLogin: nD
      } = DD;
      const {
        t: MD
      } = (0, rD.E)(), {
        pack: OD,
        state: JD
      } = wD, ED = VK.e[OD], QD = (0, VK.i)(OD), XD = (0, aK.j)(OD), VD = dK.i[XD], PD = Sr.has(XD), {
        tier: CD
      } = ED, xD = "legendary" === CD || "mythic" === CD, TD = (0, pD.useRef)(null);
      (0, xr.b)(TD, "epic" === CD || xD || PD);
      const [bD, dD] = (0, pD.useState)(!1);
      return !gD && bD && dD(!1), (0, AD.jsxs)("div", {
        ref: TD,
        className: KD()("StoreCharacterCard", `StoreCharacterCard${sD}`, dr[CD], {
          StoreCharacterCardOwned: "owned" === JD || "recipientOwns" === JD,
          StoreCharacterCardGift: fr(JD),
          StoreCharacterCardItem: void 0 === QD
        }),
        onPointerMove: DD => {
          "mouse" !== DD.pointerType || 0 === DD.movementX && 0 === DD.movementY || !cD || gD || void 0 === QD || fD()
        },
        onPointerLeave: ID,
        children: [(0, AD.jsx)("div", {
          className: "StoreCharacterBackdrop",
          children: VD && (0, AD.jsx)(VD, {
            simple: !0
          })
        }), xD && (0, AD.jsx)("div", {
          className: "StoreCharacterRays"
        }), (0, AD.jsxs)(jD.LinkPreserveSearch, {
          className: "StoreCharacterLink",
          to: (0, Xr.f)({
            kind: "pack",
            pack: OD
          }),
          "data-store-item": OD,
          onClick: DD => {
            (0, Vr.e)(DD) && (DD.preventDefault(), BD())
          },
          children: [(0, AD.jsxs)("div", {
            className: "StoreCharacterStage",
            children: [(0, AD.jsx)("div", {
              className: "StoreCharacterHalo"
            }), (0, AD.jsx)("div", {
              className: KD()("StoreCharacterFigure", {
                StoreCharacterFigureCovered: bD
              }),
              style: {
                backgroundImage: `url(${(0,aK.o)(OD)})`
              }
            }), gD && void 0 !== QD && (0, AD.jsx)(jr, {
              character: QD,
              drawn: bD,
              onDrawn: () => {
                dD(!0)
              }
            })]
          }), (0, AD.jsx)("div", {
            className: "StoreCharacterName",
            children: null !== (zD = ED.displayName) && void 0 !== zD ? zD : OD
          }), (0, AD.jsx)(Ar.d, {
            tier: CD,
            className: "StoreCharacterTier"
          })]
        }), (0, AD.jsx)("div", {
          className: "StoreCharacterScrim"
        }), PD && (0, AD.jsx)("span", {
          className: "StoreCharacterNew",
          children: (0, AD.jsx)(Cr, {})
        }), "owned" === JD && (0, AD.jsx)("span", {
          className: "StoreCharacterOwned",
          title: MD("general:owned"),
          "aria-label": MD("general:owned"),
          children: (0, AD.jsx)(LD.e, {
            name: "check"
          })
        }), (0, AD.jsx)("div", {
          className: "StoreCharacterPlate",
          children: (0, AD.jsx)(hr, {
            state: JD,
            item: OD,
            price: (0, iD.d)(OD),
            busy: RD,
            highlight: UD,
            onAct: GD,
            onNeedRecipient: hD,
            onLogin: nD
          })
        })]
      })
    }

    function lr(DD) {
      let {
        tiles: zD,
        busy: wD,
        highlightItem: sD,
        onOpen: KD,
        onAct: rD,
        onNeedRecipient: LD,
        onLogin: cD
      } = DD;
      const gD = (0, Pr.t)("storeCharacterCardFoil"),
        RD = (0, Pr.t)("storeCharacterCardSpotlight"),
        UD = gD ? "Foil" : RD ? "Spotlight" : "Showcase",
        [fD] = (0, pD.useState)(eK.g),
        [ID, BD] = (0, pD.useState)(null);
      return (0, AD.jsx)("div", {
        className: "StoreCharacterGrid",
        children: zD.map((DD => (0, AD.jsx)(ir, {
          tile: DD,
          design: UD,
          canGoLive: !fD,
          live: ID === DD.pack,
          busy: wD,
          highlight: sD === DD.pack,
          onLiveStart: () => {
            BD(DD.pack)
          },
          onLiveEnd: () => {
            BD((zD => zD === DD.pack ? null : zD))
          },
          onOpen: () => {
            KD(DD.pack)
          },
          onAct: () => {
            rD(DD.pack)
          },
          onNeedRecipient: LD,
          onLogin: () => {
            cD(DD.pack)
          }
        }, DD.pack)))
      })
    }
    var Wr = wD(34241);

    function Nr(DD) {
      let {
        title: zD
      } = DD;
      return (0, AD.jsx)("h2", {
        className: "StoreSectionDivider",
        children: (0, AD.jsx)("span", {
          className: "StoreSectionDividerTitle",
          children: zD
        })
      })
    }

    function Zr(DD) {
      let {
        mountAtOnce: zD,
        children: wD
      } = DD;
      const sD = (0, pD.useRef)(null),
        [KD, rD] = (0, pD.useState)(zD),
        LD = (0, Wr.e)();
      return (0, pD.useLayoutEffect)((() => {
        const DD = sD.current;
        DD && DD.getBoundingClientRect().top < DD.parentElement.getBoundingClientRect().bottom && rD(!0)
      }), []), KD || LD ? (0, AD.jsx)(AD.Fragment, {
        children: wD
      }) : (0, AD.jsx)("div", {
        ref: sD
      })
    }

    function yr(DD) {
      let {
        layout: zD,
        mountAtOnce: wD,
        bundleGift: pD,
        superRankTotalDays: sD,
        busy: KD,
        highlightItem: LD,
        onOpen: cD,
        onAct: gD,
        onNeedRecipient: RD,
        onLogin: UD,
        dailyDropTile: fD
      } = DD;
      const {
        t: ID
      } = (0, rD.E)(), BD = zD.packs.filter((DD => void 0 === (0, VK.i)(DD.pack) && !(0, VK.q)(DD.pack))), GD = zD.packs.filter((DD => void 0 !== (0, VK.i)(DD.pack))), hD = zD.packs.filter((DD => (0, VK.q)(DD.pack)));
      return (0, AD.jsxs)(AD.Fragment, {
        children: [(0, AD.jsx)(Qr.c, {
          className: "StoreSuperGems",
          gift: pD,
          highlightSku: LD,
          leadingTile: fD
        }), (0, AD.jsx)(Nr, {
          title: ID("store:rank")
        }), (0, AD.jsx)(Or, {
          state: zD.superRank.state,
          urgent: zD.superRank.urgent,
          daysLeft: zD.superRankDaysLeft,
          totalDays: sD,
          recipientHasSuperRank: zD.recipientHasSuperRank,
          busy: KD,
          highlight: "superRank" === LD,
          onOpen: () => {
            cD("superRank")
          },
          onAct: () => {
            gD("superRank")
          },
          onNeedRecipient: RD,
          onLogin: () => {
            UD("superRank")
          }
        }), (0, AD.jsxs)(Zr, {
          mountAtOnce: wD,
          children: [(0, AD.jsx)(Nr, {
            title: ID("store:bundles")
          }), (0, AD.jsx)("div", {
            className: "StorePackGrid",
            children: BD.map((DD => (0, AD.jsx)(Er, {
              pack: DD.pack,
              state: DD.state,
              busy: KD,
              onOpen: () => {
                cD(DD.pack)
              },
              onAct: () => {
                gD(DD.pack)
              },
              onNeedRecipient: RD,
              onLogin: () => {
                UD(DD.pack)
              }
            }, DD.pack)))
          }), (0, AD.jsxs)(Zr, {
            mountAtOnce: wD,
            children: [(0, AD.jsx)(Nr, {
              title: ID("store:characters")
            }), (0, AD.jsx)(lr, {
              tiles: GD,
              busy: KD,
              highlightItem: LD,
              onOpen: cD,
              onAct: gD,
              onNeedRecipient: RD,
              onLogin: UD
            }), hD.length > 0 && (0, AD.jsxs)(AD.Fragment, {
              children: [(0, AD.jsx)(Nr, {
                title: ID("store:premiumItems")
              }), (0, AD.jsx)(lr, {
                tiles: hD,
                busy: KD,
                highlightItem: LD,
                onOpen: cD,
                onAct: gD,
                onNeedRecipient: RD,
                onLogin: UD
              })]
            })]
          })]
        })]
      })
    }

    function kr(DD) {
      let {
        state: zD,
        mode: wD,
        giftName: pD,
        busy: sD,
        highlight: KD,
        purchaseError: LD,
        onBack: cD,
        onChooseRecipient: RD,
        onAct: UD,
        onLogin: fD
      } = DD;
      const {
        t: ID
      } = (0, rD.E)(), BD = vD("gift" !== wD);
      return (0, AD.jsx)(Lr, {
        onBack: cD,
        recipient: "gift" === wD && (0, AD.jsxs)(AD.Fragment, {
          children: [pD && (0, AD.jsxs)("span", {
            className: "StoreDetailRecipient",
            title: ID("store:giftFor", {
              name: pD
            }),
            children: [iK.b, " ", ID("store:giftFor", {
              name: pD
            })]
          }), !pD && (0, AD.jsxs)("div", {
            ...(0, gD.ib)(),
            className: "StoreDetailRecipient StoreDetailRecipientChoose",
            onClick: RD,
            children: [iK.b, " ", ID("store:chooseRecipient")]
          })]
        }),
        cta: (0, AD.jsx)(hr, {
          state: zD,
          item: "superRank",
          price: iD.h.price,
          busy: sD,
          highlight: KD,
          onAct: UD,
          onNeedRecipient: RD,
          onLogin: fD
        }),
        afterCta: (0, AD.jsxs)(AD.Fragment, {
          children: [BD && (0, AD.jsx)("span", {
            className: "StoreTileNote",
            children: BD
          }), LD && (0, AD.jsx)("span", {
            className: "StoreTileNote StoreTileNoteError",
            children: ID(LD)
          })]
        })
      })
    }
    var mr = wD(145);
    const er = mr.k("kind", [mr.u({
      kind: mr.n("refused"),
      heldTierId: mr.Q(),
      until: mr.q()
    }), mr.u({
      kind: mr.n("refund"),
      tierId: mr.Q(),
      refundedMs: mr.q(),
      forfeitedMs: mr.q(),
      premiumCurrency: mr.q()
    }), mr.u({
      kind: mr.n("none")
    })]);
    async function or(DD) {
      const zD = await (0, xD.postJsonWithMetricsCookiesAndJsonResponse)(`${rz.clientSideServerUrls.indexUrl}/index/ranks/subscribe-preview`, {
        productId: DD
      }, {
        retries: 1
      });
      return er.parse(zD)
    }
    var ar = wD(3032),
      ur = wD(3065);

    function vr(DD, zD) {
      const wD = Math.max(1, Math.round(zD / ND.f));
      return [1 === wD ? `${DD}OneDay` : DD, {
        days: wD.toLocaleString()
      }]
    }

    function tr() {
      return "true" === new URLSearchParams(window.location.search).get("tempSubscription") && (0, yD.purchasesAllowed)() ? (0, AD.jsx)(Fr, {}) : null
    }

    function Fr() {
      const {
        t: DD
      } = (0, rD.E)(), {
        userContext: zD
      } = (0, ID.c)(), {
        purchaseUnderWay: wD,
        notice: sD,
        subscribe: KD
      } = (0, ar.e)(), [LD, cD] = (0, pD.useState)(null), [RD, UD] = (0, pD.useState)(0), [fD, BD] = (0, pD.useState)(!1), GD = (0, pD.useRef)(!0), hD = zD !== xD.NULL_USER_CONTEXT, nD = null !== LD && LD.loadedFor === zD ? LD.offer : null, MD = null === sD || void 0 === sD ? void 0 : sD.pendingIntentId, OD = (0, pD.useRef)(MD);

      function JD() {
        UD((DD => DD + 1))
      }
      async function ED(DD) {
        BD(!1), await KD(DD), GD.current && JD()
      }
      if ((0, pD.useEffect)((() => (GD.current = !0, () => {
          GD.current = !1
        })), []), (0, pD.useEffect)((() => {
          void 0 !== OD.current && void 0 === MD && JD(), OD.current = MD
        }), [MD]), (0, pD.useEffect)((() => {
          if (!hD) return;
          let DD = !1;
          return BD(!1), async function() {
            const {
              offering: DD
            } = await (0, cz.e)().getOfferings("superRankPage"), zD = null === DD || void 0 === DD ? void 0 : DD.packages.find((DD => null !== DD.price));
            return void 0 === zD ? {
              kind: "unavailable"
            } : {
              kind: "loaded",
              pkg: zD,
              preview: await or(zD.productId)
            }
          }().catch((DD => (console.error("Billing: loading the Super Rank subscription or its preview failed:", DD), {
            kind: "loadFailed"
          }))).then((wD => {
            DD || cD((DD => "loadFailed" === wD.kind && (null === DD || void 0 === DD ? void 0 : DD.loadedFor) === zD ? DD : {
              loadedFor: zD,
              offer: wD
            }))
          })), () => {
            DD = !0
          }
        }), [zD, hD, RD]), null === nD) return null;
      if ("loaded" !== nD.kind) return (0, AD.jsx)(ur.g, {
        notice: {
          kind: "error",
          key: "unavailable" === nD.kind ? "payments:subscriptionUnavailable" : "payments:subscriptionLoadFailed"
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const {
        pkg: QD,
        preview: XD
      } = nD;
      if ("refused" === XD.kind) return (0, AD.jsx)(ur.g, {
        notice: {
          kind: "error",
          key: "payments:subscribeRefusedGemRank",
          values: {
            date: new Date(XD.until).toLocaleDateString()
          }
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const VD = (0, Qr.g)(QD.price);
      if (fD && "refund" === XD.kind) {
        const {
          refundedMs: zD,
          forfeitedMs: pD,
          premiumCurrency: sD
        } = XD, KD = pD + (0 === sD ? zD : 0), [rD, LD] = vr("payments:subscribeRefundsGemRank", zD), [cD, RD] = vr("payments:subscribeForfeitsGemRank", KD);
        return (0, AD.jsxs)("div", {
          className: "StoreTempSubscribe SmallTextBold",
          children: [(0, AD.jsx)("div", {
            children: DD("payments:subscribeEndsGemRank")
          }), sD > 0 && (0, AD.jsx)("div", {
            children: DD(rD, {
              ...LD,
              amount: sD.toLocaleString()
            })
          }), KD > 0 && (0, AD.jsx)("div", {
            children: DD(cD, RD)
          }), (0, AD.jsxs)("div", {
            className: "StoreTempSubscribeButtons",
            children: [(0, AD.jsx)(gD.g, {
              onClick: () => {
                BD(!1)
              },
              children: DD("general:cancel")
            }), (0, AD.jsx)(gD.o, {
              onClick: () => {
                ED(QD)
              },
              loading: wD,
              children: DD("payments:subscribeContinue", {
                price: VD
              })
            })]
          })]
        })
      }
      return (0, AD.jsxs)("div", {
        className: "StoreTempSubscribe",
        children: [(0, AD.jsx)(ur.g, {
          notice: sD,
          className: "SmallTextBold"
        }), (0, AD.jsx)(ur.b, {
          className: "SmallTextBold"
        }), (0, AD.jsx)(gD.o, {
          onClick: () => {
            "refund" === XD.kind ? BD(!0) : ED(QD)
          },
          disabled: void 0 !== MD,
          loading: wD,
          children: DD("payments:subscribeToSuperRank", {
            price: VD
          })
        })]
      })
    }
    var Yr = wD(2569);

    function Hr(DD) {
      let {
        state: zD,
        view: wD,
        claiming: sD,
        onOpen: LD
      } = DD;
      const {
        t: RD
      } = (0, rD.E)(), UD = (0, pD.useRef)(null), fD = "ready" === wD.kind;
      (0, xr.b)(UD, fD);
      const ID = (0, mz.f)(zD);
      return (0, AD.jsxs)("div", {
        ref: UD,
        className: KD()("DailyDropTile", {
          DailyDropTileReady: fD
        }),
        children: [fD && (0, AD.jsx)(cD.d, {
          top: "0.25rem",
          right: "0.25rem"
        }), (0, AD.jsx)("div", {
          className: "DailyDropTileTitle",
          children: RD("dailyDrop:name")
        }), (0, AD.jsxs)("div", {
          className: "DailyDropTileArt",
          children: [(0, AD.jsx)(Yr.d, {
            className: "DailyDropTileBlock"
          }), (0, AD.jsxs)("div", {
            className: "DailyDropTileInfo SmallTextLight",
            children: [(0, AD.jsx)("span", {
              children: RD("dailyDrop:collected", {
                count: zD.collected.length,
                total: zD.total
              })
            }), null !== ID && (0, AD.jsx)("span", {
              className: "DailyDropTileOdds",
              children: RD("dailyDrop:odds", {
                percent: ID.toLocaleString(void 0, {
                  maximumFractionDigits: 1
                })
              })
            })]
          })]
        }), "ready" === wD.kind && (0, AD.jsx)(gD.o, {
          className: "DailyDropTileOpen",
          onClick: LD,
          loading: sD,
          children: RD("dailyDrop:open")
        }), "waiting" === wD.kind && (0, AD.jsx)("div", {
          className: "DailyDropTileWait SmallTextBold",
          children: RD("dailyDrop:nextIn", {
            count: wD.hours
          })
        })]
      })
    }
    var qr = wD(2197);
    const DL = 32;

    function zL(DD) {
      let {
        worn: zD,
        Pp: wD,
        Cp: sD,
        className: cD
      } = DD;
      const {
        t: gD
      } = (0, rD.E)(), RD = (0, pD.useRef)(null), [UD, fD] = (0, pD.useState)(null), [ID, BD] = (0, pD.useState)(!1);
      async function GD() {
        var DD;
        const zD = RD.current;
        if (!zD) return;
        const pD = null === (DD = zD.getDevTools()) || void 0 === DD ? void 0 : DD.canvas();
        let KD = null;
        try {
          KD = pD ? function(DD) {
            if (0 === DD.width || 0 === DD.height) return null;
            const zD = document.createElement("canvas");
            zD.width = DL, zD.height = DL;
            const wD = zD.getContext("2d", {
              willReadFrequently: !0
            });
            if (!wD) return null;
            wD.drawImage(DD, 0, 0, DL, DL);
            const {
              data: pD
            } = wD.getImageData(0, 0, DL, DL);
            for (let sD = 3; sD < pD.length; sD += 4)
              if (pD[sD] > 0) return DD.toDataURL("image/png");
            return null
          }(pD) : null
        } catch (LD) {
          console.warn("Couldn't read the character preview for the Lucky Skin Block's Before", LD)
        }
        null === KD && console.warn("The character preview read back blank: the Lucky Skin Block's Before shows the head"), fD(null === KD ? {
          kind: "head"
        } : {
          kind: "still",
          src: KD
        }), zD.updateCosmetic(wD, sD);
        const rD = new Promise((DD => {
          setTimeout(DD, 1e4)
        }));
        await Promise.race([zD.ensureReadyForCapture(wD), rD]).catch((DD => {
          console.error("Failed to draw the Lucky Skin Block's piece on the character preview", DD)
        })), RD.current === zD && BD(!0)
      }
      return (0, AD.jsxs)("div", {
        className: KD()("DailyDropRevealFigures", cD),
        children: [(0, AD.jsxs)("div", {
          className: "DailyDropRevealFigure",
          children: [(0, AD.jsxs)("div", {
            className: "DailyDropRevealFigureArt",
            children: ["still" === (null === UD || void 0 === UD ? void 0 : UD.kind) && (0, AD.jsx)("img", {
              className: "DailyDropRevealBeforeStill",
              src: UD.src,
              alt: "",
              draggable: !1
            }), "head" === (null === UD || void 0 === UD ? void 0 : UD.kind) && (0, AD.jsx)("div", {
              className: "DailyDropRevealBeforeHead",
              children: (0, AD.jsx)(vK.c, {
                cosmetics: zD
              })
            }), null === UD && (0, AD.jsx)(ED.e, {})]
          }), (0, AD.jsx)("span", {
            className: "DailyDropRevealFigureLabel SmallTextBold",
            children: gD("dailyDrop:before")
          })]
        }), (0, AD.jsx)(LD.e, {
          name: "arrow-right",
          className: "DailyDropRevealArrow"
        }), (0, AD.jsxs)("div", {
          className: "DailyDropRevealFigure DailyDropRevealAfter",
          children: [(0, AD.jsxs)("div", {
            className: "DailyDropRevealFigureArt",
            children: [(0, AD.jsx)("div", {
              className: KD()("DailyDropRevealLive", {
                DailyDropRevealLiveDrawn: ID
              }),
              children: (0, AD.jsx)(pD.Suspense, {
                fallback: null,
                children: (0, AD.jsx)(cr.c, {
                  ref: RD,
                  onReady: () => {
                    var DD, wD;
                    null === (DD = RD.current) || void 0 === DD || DD.resetCamera(), null === (wD = RD.current) || void 0 === wD || wD.setAllCosmetics(zD)
                  },
                  onDrawn: () => {
                    requestAnimationFrame((() => {
                      GD()
                    }))
                  }
                })
              })
            }), !ID && (0, AD.jsx)(ED.e, {})]
          }), (0, AD.jsx)("span", {
            className: "DailyDropRevealFigureLabel SmallTextBold",
            children: gD("dailyDrop:after")
          })]
        })]
      })
    }
    var wL = wD(1847);
    const pL = "dailyDropReminderAsked_";

    function sL(DD) {
      return async function(DD) {
        if (DD.remindersOn || (0, XD.h)(XD.e.get("gameState"))) return null;
        const zD = await xD.userContextManager.getCurrentUserContext(),
          wD = pL + zD.whamm;
        if (null !== pw.h.getItem(wD)) return null;
        const [pD, sD] = await Promise.all([(0, Nz.h)().catch((DD => (console.error("Couldn't tell whether this device can take push notifications:", DD), null))), rL()]);
        if (null === pD && !sD) return null;
        return {
          askedKey: wD,
          requester: pD
        }
      }(DD).catch((DD => (console.error("Failed to tell whether to ask about Lucky Skin Block reminders:", DD), null)))
    }

    function KL(DD, zD) {
      pw.h.setItem(DD.askedKey, !0), (0, mz.n)("daily_drop.remind", zD ? "yes" : "no"), zD && async function(DD) {
        const zD = (0, mz.o)({
            remindersOn: !0
          }),
          wD = null === DD ? Promise.resolve() : DD(),
          [pD, sD] = await Promise.allSettled([zD, wD]);
        "rejected" === pD.status && console.error("Failed to turn on Lucky Skin Block reminders:", pD.reason);
        "rejected" === sD.status && console.error("Failed to ask for push notifications for Lucky Skin Block reminders:", sD.reason);
        "rejected" !== pD.status && "rejected" !== sD.status || wL.d.showMessage({
          translationKey: "dailyDrop:remindFailed"
        })
      }(DD.requester)
    }

    function rL() {
      return (0, Wz.b)().then((DD => DD.app + DD.browser + DD.msnPlay > 0), (DD => (console.error("Couldn't tell where push notifications reach this account:", DD), !0)))
    }
    const LL = {
        closed: "opening",
        opening: "revealed",
        revealed: "shrinking",
        shrinking: "equip",
        equip: "equip",
        remind: "remind"
      },
      cL = {
        opening: 900,
        shrinking: 700
      };

    function gL(DD) {
      let {
        drop: zD,
        onClose: wD
      } = DD;
      const {
        t: sD
      } = (0, rD.E)(), {
        userContext: cD
      } = (0, ID.c)(), {
        state: RD,
        view: UD
      } = (0, mz.r)(), [fD, BD] = (0, pD.useState)("closed"), [GD] = (0, pD.useState)((() => ({
        ...cD.getPlayerCosmetics()
      }))), [hD] = (0, pD.useState)((() => (0, mz.g)(zD, GD))), [nD, MD] = (0, pD.useState)(!1), [OD, JD] = (0, pD.useState)(!1), [ED] = (0, pD.useState)((() => null === RD ? Promise.resolve(null) : sL(RD))), [QD, VD] = (0, pD.useState)(null), PD = (0, Zz.c)(), {
        gameState: CD
      } = (0, XD.n)(["gameState"]);
      async function xD() {
        const DD = await ED;
        PD.current && (null === DD ? wD() : (VD(DD), BD("remind")))
      }

      function TD(DD) {
        null !== QD && KL(QD, DD), wD()
      }(0, pD.useEffect)((() => {
        const DD = cL[fD];
        if (void 0 === DD) return;
        const zD = setTimeout((() => {
          BD(LL[fD])
        }), DD);
        return () => {
          clearTimeout(zD)
        }
      }), [fD]);
      const bD = sD(`dailyDrop:kind_${hD.Pp}`),
        jD = RD && sD("dailyDrop:collected", {
          count: RD.collected.length,
          total: RD.total
        }),
        dD = "revealed" === fD || "shrinking" === fD,
        SD = "equip" !== fD && "remind" !== fD;
      return (0, AD.jsx)(bp.c, {
        className: "DailyDropRevealScreen",
        close: "remind" === fD ? () => {
          TD(!1)
        } : wD,
        togglePointerLock: !1,
        closeOnPressBackground: !1,
        children: (0, AD.jsxs)("div", {
          className: KD()("DailyDropReveal", {
            DailyDropRevealOpening: "opening" === fD,
            DailyDropRevealShrinking: "shrinking" === fD,
            DailyDropRevealFiguresShown: "shrinking" === fD || "equip" === fD || "remind" === fD
          }),
          children: [(0, AD.jsxs)("div", {
            className: "DailyDropRevealStage",
            children: [(0, AD.jsx)(zL, {
              className: "DailyDropRevealStageFigures",
              worn: GD,
              Pp: hD.Pp,
              Cp: hD.Cp
            }), ("closed" === fD || "opening" === fD) && (0, AD.jsx)(Yr.d, {
              className: "DailyDropRevealBlock",
              open: "opening" === fD
            }), dD && (0, AD.jsx)("div", {
              className: "DailyDropRevealPiece",
              children: (0, AD.jsx)("img", {
                src: `/textures/charSkins/previews/${(0,qr.l)(hD.Pp,hD.Cp).previewTex}.png`,
                alt: bD,
                draggable: !1
              })
            })]
          }), SD && (0, AD.jsxs)(AD.Fragment, {
            children: [(0, AD.jsxs)("div", {
              className: "DailyDropRevealCaption",
              children: [(0, AD.jsx)("div", {
                className: "DailyDropRevealTitle SmallTextBold",
                children: dD ? bD : sD("dailyDrop:name")
              }), "closed" === fD && (0, AD.jsx)("div", {
                className: "DailyDropRevealHint SmallTextLight",
                children: sD("dailyDrop:tapToOpen")
              }), "revealed" === fD && (0, AD.jsx)("div", {
                className: "DailyDropRevealHint SmallTextLight",
                children: sD("dailyDrop:tapToContinue")
              })]
            }), (0, AD.jsx)("button", {
              type: "button",
              className: "DailyDropRevealTap",
              "data-pad-default-focus": !0,
              "aria-label": sD("closed" === fD ? "dailyDrop:tapToOpen" : "dailyDrop:tapToContinue"),
              onClick: () => {
                BD(LL[fD])
              }
            })]
          }), "equip" === fD && (0, AD.jsxs)("div", {
            className: "DailyDropRevealEquip",
            children: [(0, AD.jsx)("div", {
              className: "DailyDropRevealKind SmallTextLight",
              children: bD
            }), (0, AD.jsx)("div", {
              className: "DailyDropRevealQuestion SmallTextBold",
              children: sD("dailyDrop:equipQuestion")
            }), (0, AD.jsxs)("div", {
              className: "DailyDropRevealButtons",
              children: [(0, AD.jsx)(gD.f, {
                className: "DailyDropRevealButton",
                disabled: nD,
                touchPressOn: "pointerup",
                onClick: () => {
                  (0, mz.n)("daily_drop.not_now", zD), xD()
                },
                children: sD("dailyDrop:notNow")
              }), (0, AD.jsx)(gD.f, {
                className: "DailyDropRevealButton",
                loading: nD,
                padDefaultFocus: !0,
                touchPressOn: "pointerup",
                onClick: () => {
                  !async function() {
                    (0, mz.n)("daily_drop.equip", zD), MD(!0), JD(!1);
                    try {
                      await (0, mz.d)(cD, hD.Pp, hD.Cp)
                    } catch (DD) {
                      return console.error("Failed to equip the Lucky Skin Block's piece", DD), MD(!1), void JD(!0)
                    }
                    await xD()
                  }()
                },
                children: sD("dailyDrop:equip")
              })]
            }), OD && (0, AD.jsx)("div", {
              className: "DailyDropRevealError SmallTextBold",
              children: sD("dailyDrop:equipFailed")
            }), !(0, XD.h)(CD) && (0, AD.jsxs)("button", {
              type: "button",
              className: "DailyDropRevealCustomise",
              disabled: nD,
              onClick: () => {
                var DD;
                (0, mz.n)("daily_drop.customise", zD), DD = hD.Pp, zw.l.KG(Vp, DD), XD.e.set({
                  openEverythingMenuName: Rz.l.CUSTOMISATION
                }), wD()
              },
              children: [sD("dailyDrop:customise"), " ", (0, AD.jsx)(LD.e, {
                name: "arrow-right",
                className: "DailyDropRevealCustomiseArrow"
              })]
            }), jD && (0, AD.jsxs)("div", {
              className: "DailyDropRevealProgress SmallTextLight",
              children: [jD, "waiting" === (null === UD || void 0 === UD ? void 0 : UD.kind) && ` \xb7 ${sD("dailyDrop:nextInInline",{count:UD.hours})}`]
            })]
          }), "remind" === fD && (0, AD.jsxs)("div", {
            className: "DailyDropRevealEquip",
            children: [(0, AD.jsx)("div", {
              className: "DailyDropRevealQuestion SmallTextBold",
              children: sD("dailyDrop:remindTitle")
            }), (0, AD.jsx)("div", {
              className: "DailyDropRevealKind SmallTextLight",
              children: sD("dailyDrop:remindSubtitle")
            }), (0, AD.jsxs)("div", {
              className: "DailyDropRevealButtons",
              children: [(0, AD.jsx)(gD.f, {
                className: "DailyDropRevealButton",
                padDefaultFocus: !0,
                touchPressOn: "pointerup",
                onClick: () => {
                  TD(!1)
                },
                children: sD("dailyDrop:remindNo")
              }), (0, AD.jsx)(gD.f, {
                className: "DailyDropRevealButton",
                touchPressOn: "pointerup",
                onClick: () => {
                  TD(!0)
                },
                children: sD("dailyDrop:remindYes")
              })]
            })]
          })]
        })
      })
    }

    function RL(DD, zD) {
      const {
        t: wD
      } = (0, rD.E)(), sD = function(DD, zD) {
        const {
          state: wD,
          view: sD
        } = (0, mz.r)(), [KD, rD] = (0, pD.useState)(!1), [LD, cD] = (0, pD.useState)(!1), [gD, RD] = (0, pD.useState)(null), AD = (0, pD.useRef)(null), UD = (0, pD.useRef)(!1), fD = zD && "ready" === (null === sD || void 0 === sD ? void 0 : sD.kind);
        (0, pD.useEffect)((() => {
          DD ? fD && !UD.current && (UD.current = !0, (0, mz.n)("daily_drop.shown", "tile")) : UD.current = !1
        }), [DD, fD]), (0, pD.useEffect)((() => {
          DD || (hD(), cD(!1))
        }), [DD]);
        const ID = DD && null === gD && !(0, mz.l)(sD);
        (0, pD.useEffect)((() => {
          ID && XD.e.set({
            openEverythingMenuName: Rz.l.CUSTOMISATION
          })
        }), [ID]);
        const BD = (0, pD.useRef)(!1),
          GD = (0, pD.useRef)(DD);

        function hD() {
          null !== AD.current && (AD.current = null, RD(null))
        }
        return GD.current = DD, {
          state: wD,
          view: sD,
          claiming: KD,
          claimFailed: LD,
          reveal: gD,
          open: async function() {
            if (!BD.current) {
              BD.current = !0, rD(!0), cD(!1);
              try {
                const {
                  state: DD,
                  drop: zD
                } = await (0, mz.c)();
                if (null === DD || null === zD) return;
                if (!GD.current) return;
                (0, mz.n)("daily_drop.open", zD), AD.current = {
                  state: DD,
                  drop: zD
                }, RD(AD.current)
              } catch (DD) {
                console.error("Failed to claim the Lucky Skin Block", DD), GD.current && cD(!0)
              } finally {
                BD.current = !1, rD(!1)
              }
            }
          },
          closeReveal: hD
        }
      }(DD, zD);
      return {
        shown: (0, mz.l)(sD.view) || null !== sD.reveal,
        tile: sD.state && sD.view && (0, AD.jsx)(Hr, {
          state: sD.state,
          view: sD.view,
          claiming: sD.claiming,
          onOpen: sD.open
        }),
        claimFailed: sD.claimFailed && (0, AD.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: wD("dailyDrop:claimFailed")
        }),
        reveal: sD.reveal && (0, AD.jsx)(gL, {
          drop: sD.reveal.drop,
          onClose: sD.closeReveal
        })
      }
    }

    function AL(DD) {
      let {
        show: zD
      } = DD;
      const wD = RL(zD, zD);
      return zD && wD.shown ? (0, AD.jsxs)("div", {
        className: "Store StoreDailyDropOnly",
        children: [wD.claimFailed, wD.tile && (0, AD.jsx)("div", {
          className: "StoreDailyDropOnlyTile",
          children: wD.tile
        }), wD.reveal]
      }) : null
    }
    const UL = {
      kind: "board"
    };
    let fL = !1;

    function IL(DD) {
      return "found" === DD.status || "error" === DD.status && "store:giftRecipientLookupFailed" === DD.error ? DD.name : null
    }(0, ZD.v)(PK.prefetchBillingOfferings);
    const BL = (0, pD.memo)((function(DD) {
      var zD;
      let {
        show: sD
      } = DD;
      const {
        t: LD
      } = (0, rD.E)(), {
        userContext: cD
      } = (0, ID.c)(), gD = cD !== xD.NULL_USER_CONTEXT, RD = ZK(cD), [UD, fD] = (0, GD.d)(), {
        page: BD,
        urlMode: hD,
        goTo: nD
      } = (0, yK.e)(), MD = function(DD) {
        return "superRank" === DD.kind ? "superRank" : "pack" === DD.kind ? DD.pack : null
      }(BD), {
        openEverythingMenuName: OD,
        gameState: JD
      } = (0, XD.n)(["openEverythingMenuName", "gameState"]), ED = null !== OD;
      ! function(DD, zD) {
        const [sD] = (0, pD.useState)(eK.g), [KD, rD] = (0, pD.useState)(!1);
        sD && zD && !KD && rD(!0);
        const LD = (0, Gp.o)(),
          cD = sD && KD && DD && !LD;
        (0, pD.useEffect)((() => {
          if (!cD) return;
          let DD = null,
            zD = null,
            pD = null;
          const sD = () => !document.hasFocus() || document.activeElement instanceof HTMLIFrameElement || (0, cz.e)().purchaseUnderWay,
            KD = () => {
              var wD;
              null === (wD = pD) || void 0 === wD || wD(), pD = null, null !== DD && (clearTimeout(DD), DD = null), null !== zD && (clearTimeout(zD), zD = null)
            },
            rD = () => {
              (0, kK.o)(!1), (0, kK.n)(!1), KD(), DD = setTimeout((() => {
                DD = null, pD = (0, mK.b)((() => {
                  pD = null, sD() ? rD() : ((0, kK.o)(!0), zD = setTimeout((() => {
                    zD = null, pD = (0, mK.b)((() => {
                      pD = null, sD() ? rD() : (0, kK.n)(!0)
                    }))
                  }), 3e3), Promise.resolve().then((() => wD(4684))).then((DD => {
                    DD.startBackgroundGameSetup()
                  }), (DD => {
                    console.warn("Background game setup: its chunk failed to load", DD)
                  })))
                }))
              }), 2e3)
            };
          for (const wD of oK) window.addEventListener(wD, rD, {
            capture: !0,
            passive: !0
          });
          return rD(), () => {
            for (const DD of oK) window.removeEventListener(DD, rD, {
              capture: !0
            });
            KD(), (0, kK.o)(!1), (0, kK.n)(!1)
          }
        }), [cD])
      }(sD && ED, "pack" === BD.kind);
      const QD = "landingPage" === JD;
      (0, pD.useEffect)((() => {
        ED && (0, PK.prefetchBillingOfferings)()
      }), [ED]), (0, pD.useEffect)((() => {
        ED && !sD && QD && (0, aK.s)()
      }), [ED, sD, QD]);
      const [VD, PD] = (0, pD.useState)(0), [CD, TD] = (0, pD.useState)(null), [bD, jD] = (0, pD.useState)(null), [dD, SD] = (0, pD.useState)(null), [lD, WD] = (0, pD.useState)(null), ND = (0, pD.useRef)(null), kD = (0, pD.useRef)(null), mD = (0, pD.useRef)(null), eD = (0, pD.useRef)(!1), oD = (0, ZD.C)(), aD = (0, pD.useRef)(0), uD = (0, pD.useRef)(!1);

      function vD() {
        PD((DD => DD + 1))
      }(0, pD.useEffect)((() => {
        if (sD) {
          if (fL = !0, (0, ZD.m)(), oD && oD.seq !== aD.current) {
            var DD;
            aD.current = oD.seq, "loginResume" !== oD.source && (0, ZD.z)();
            const zD = (0, ZD.c)(oD);
            hD || nD(zD), WD(null !== (DD = oD.highlight) && void 0 !== DD ? DD : null), jD(null), "gift" === oD.mode && oD.giftRecipientName ? RD.choose(oD.giftRecipientName, "prefilled") : "current" !== oD.mode && RD.clear(), "gift" !== oD.mode || oD.giftRecipientName || vD(), (0, HD.reportAnalyticsClick)({
              id: "store.open",
              value: oD.source
            })
          } else uD.current || (0, HD.reportAnalyticsClick)({
            id: "store.open",
            value: "menuTab"
          });
          uD.current = !0
        } else uD.current = !1
      }), [sD, oD]), (0, pD.useEffect)((() => {
        if (!lD) return;
        const DD = setTimeout((() => {
          WD(null)
        }), 4e3);
        return () => {
          clearTimeout(DD)
        }
      }), [lD]), (0, pD.useLayoutEffect)((() => {
        const DD = ND.current;
        if (!sD || !DD) return kD.current = null, void(mD.current = null);
        var zD;
        if (MD) kD.current = MD, null === (zD = DD.querySelector(".StoreDetailBackButton, .CosmeticShopDetailBackButton")) || void 0 === zD || zD.focus();
        else if (kD.current) {
          const zD = mD.current;
          null !== zD && (DD.scrollTop = zD);
          const wD = DD.querySelector(`[data-store-item="${kD.current}"]`);
          if (wD) {
            const pD = wD.getBoundingClientRect(),
              sD = DD.getBoundingClientRect();
            wD.focus({
              preventScroll: null !== zD && pD.bottom > sD.top && pD.top < sD.bottom
            })
          }
          kD.current = null
        }
      }), [MD, sD]), (0, pD.useEffect)((() => {
        jD(null)
      }), [RD.query]), (0, pD.useEffect)((() => {
        if (!dD) return;
        const DD = setTimeout((() => {
          SD(null)
        }), 8e3);
        return () => {
          clearTimeout(DD)
        }
      }), [dD]);
      const tD = cD.superRankInfo,
        FD = cD.isLoggedIn() || (0, yD.guestsMayBuy)(),
        YD = cD.getOwnedCosmeticPacks(),
        qD = (0, iK.n)(RD.query),
        Dz = (0, iK.c)({
          mode: qD,
          loggedIn: gD ? FD : null,
          superRankInfo: tD,
          now: Date.now(),
          ownedPacks: YD,
          packs: VK.B,
          recipient: RD.recipient
        });
      (0, pD.useEffect)((() => {
        if (!FD || !sD) return;
        const DD = (0, ZD.z)(),
          zD = DD && (0, iK.k)(DD, VK.B);
        DD && zD && ((0, HD.reportAnalyticsClick)({
          id: "store.login_resume",
          value: DD.item
        }), (0, ZD.n)(zD))
      }), [FD, sD]);
      const zz = (0, iK.r)({
        superRankDaysLeft: Dz.superRankDaysLeft,
        openedThisSession: fL || sD,
        seenNewItems: (0, ZD.j)()
      });
      (0, pD.useEffect)((() => {
        (0, ZD.w)(zz)
      }), [zz]);
      const wz = "self" === qD,
        pz = RL(sD, sD && wz && "board" === BD.kind);
      if (!sD || !(0, yD.purchasesAllowed)()) return null;
      const sz = fD > UD && UD <= 700,
        Kz = !sz && fD <= 420,
        rz = "gift" === qD ? IL(RD.recipient) : null,
        Lz = null !== CD;

      function gz(DD) {
        (0, xK.b)(DD, "gift" === qD ? RD.query.trim() : null)
      }

      function Rz(DD, zD) {
        (0, HD.reportAnalyticsClick)({
          id: "store.purchase_done",
          value: `${zD?"gift":"self"}:${DD}`
        }), zD && (RD.recordGift(zD.name, DD), Az(zD))
      }

      function Az(DD) {
        ! function(DD) {
          try {
            pw.h.setItem(lK, (0, iK.B)(NK(), DD))
          } catch {}
        }({
          name: DD.name,
          cosmetics: DD.cosmetics
        }), nD(UL), SD((zD => {
          var wD;
          return {
            name: DD.name,
            seq: (null !== (wD = null === zD || void 0 === zD ? void 0 : zD.seq) && void 0 !== wD ? wD : 0) + 1
          }
        }))
      }
      async function Uz(DD) {
        var zD, wD;
        if (eD.current) return;
        if (!FD) return void gz(DD);
        jD(null), WD(null);
        const pD = "gift" === qD ? {
          name: IL(RD.recipient),
          cosmetics: RD.recipientCosmetics
        } : null;
        if (pD && !pD.name) return void vD();
        const sD = "superRank" === DD ? iD.h.id : (0, iD.b)(DD);
        eD.current = !0;
        const KD = await (0, SK.c)(sD, null !== (zD = null === pD || void 0 === pD ? void 0 : pD.name) && void 0 !== zD ? zD : null);
        if (eD.current = !1, !KD) return;
        TD(DD);
        const rD = await TK.b.purchase(sD, null !== (wD = null === pD || void 0 === pD ? void 0 : pD.name) && void 0 !== wD ? wD : null);
        TD(null), rD ? jD(rD) : (Rz(DD, pD), pD || (await (0, bK.flushClientAnalyticsEvents)(), (0, CK.refreshWithoutConfirmation)("superRank" === DD ? "/super-rank-welcome" : `/pack-welcome/${DD}`)))
      }
      const fz = KD()("Store", {
        StoreGift: "gift" === qD,
        StorePortrait: sz,
        StoreCompact: Kz
      });
      if ("pack" === BD.kind) {
        const DD = BD.pack,
          zD = Dz.packs.find((zD => zD.pack === DD));
        return (0, AD.jsx)("div", {
          ref: ND,
          className: "CosmeticShopContainer",
          children: (0, AD.jsx)(dK.e, {
            pack: DD,
            onBack: () => {
              nD(UL)
            },
            onPurchased: zD => {
              Rz(DD, zD ? {
                name: zD,
                cosmetics: null
              } : null)
            },
            giftCta: "gift" === qD && rz && zD && (0, AD.jsxs)(AD.Fragment, {
              children: [(0, AD.jsx)(hr, {
                state: zD.state,
                item: DD,
                price: (Iz = DD, "superRank" === Iz ? iD.h.price : (0, iD.d)(Iz)),
                busy: Lz,
                onAct: () => {
                  Uz(DD)
                },
                onNeedRecipient: () => {
                  nD(UL), vD()
                },
                onLogin: () => {
                  gz(DD)
                },
                highlight: lD === DD
              }), bD && (0, AD.jsx)("span", {
                className: "CosmeticShopGiftError SmallTextBold",
                children: LD(bD)
              })]
            }),
            ownedPacks: YD,
            startAsGift: "gift" === qD,
            initialGiftRecipient: "gift" === qD ? null !== rz && void 0 !== rz ? rz : RD.query.trim() : "",
            highlightCta: lD === DD
          }, DD)
        })
      }
      var Iz;
      return "superRank" === BD.kind ? (0, AD.jsx)("div", {
        ref: ND,
        className: KD()(fz, "StoreDetailView"),
        children: (0, AD.jsx)(kr, {
          state: Dz.superRank.state,
          mode: qD,
          giftName: rz,
          busy: Lz,
          highlight: "superRank" === lD,
          purchaseError: bD,
          onBack: () => {
            nD(UL)
          },
          onChooseRecipient: () => {
            nD(UL), vD()
          },
          onAct: () => {
            Uz("superRank")
          },
          onLogin: () => {
            gz("superRank")
          }
        })
      }) : (0, AD.jsxs)("div", {
        ref: ND,
        className: fz,
        onScroll: DD => {
          mD.current = DD.currentTarget.scrollTop
        },
        children: [(0, AD.jsx)("div", {
          className: "StoreTopRow",
          children: (0, AD.jsx)(qK, {
            selfName: gD ? cD.getPlayerName() : "",
            giftRecipient: RD,
            suggestionsVersion: null !== (zD = null === dD || void 0 === dD ? void 0 : dD.seq) && void 0 !== zD ? zD : 0,
            pulseSignal: VD,
            disabled: Lz || !gD
          })
        }), dD && (0, AD.jsxs)("div", {
          className: "StoreNotice StoreNoticeGiftSent",
          onClick: () => {
            SD(null)
          },
          children: [(0, AD.jsx)(jK.b, {
            showSignal: dD.seq
          }), iK.b, " ", LD("store:giftSent", {
            name: dD.name
          })]
        }, dD.seq), !dD && bD && (0, AD.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: LD(bD)
        }), wz && pz.claimFailed, (0, AD.jsx)(yr, {
          layout: Dz,
          mountAtOnce: null !== kD.current,
          bundleGift: "gift" === qD ? {
            recipientName: rz,
            lookingUp: "pending" === RD.recipient.status,
            busy: Lz,
            onNeedRecipient: vD,
            onSent: DD => {
              (0, HD.reportAnalyticsClick)({
                id: "store.purchase_done",
                value: "gift:superGems"
              }), Az({
                name: DD,
                cosmetics: RD.recipientCosmetics
              })
            }
          } : null,
          superRankTotalDays: (0, iK.u)(tD),
          busy: Lz,
          highlightItem: lD,
          onOpen: function(DD) {
            (0, HD.reportAnalyticsClick)({
              id: "store.item_open",
              value: DD
            }), nD((0, ZD.f)(DD))
          },
          onAct: Uz,
          onNeedRecipient: vD,
          onLogin: gz,
          dailyDropTile: wz && pz.tile
        }), "gift" !== qD && (0, AD.jsx)(tr, {}), pz.reveal]
      })
    }));
    var GL = wD(2689),
      hL = wD(8841),
      nL = wD(8671),
      ML = wD(2748),
      OL = wD(2589),
      JL = wD(2638),
      EL = wD(2649),
      QL = wD(2657),
      XL = wD(2739),
      VL = wD(2724),
      PL = wD(2335),
      CL = wD(2369),
      xL = wD(2362),
      TL = wD(2023),
      bL = wD(2666),
      jL = wD(2377);

    function dL(DD) {
      let {
        show: zD
      } = DD;
      return zD ? (0, AD.jsx)(SL, {}) : null
    }

    function SL() {
      const {
        t: DD
      } = (0, rD.E)(), {
        followsLeader: zD
      } = (0, OL.f)(), {
        loading: wD,
        friends: sD,
        requests: cD,
        invites: RD
      } = (0, mD.o)(), {
        userContext: UD
      } = (0, ID.c)(), [fD, BD] = (0, pD.useState)(jL.h);
      (0, pD.useEffect)((() => {
        (0, jL.c)()
      }), []);
      const GD = cD.map((DD => DD.name)),
        {
          state: hD,
          recentRequesters: nD
        } = (0, VL.o)(),
        MD = new Map([...("loaded" === hD.status ? hD.recentPlayers : []).map((DD => [DD.preview.name, DD])), ...nD.map((DD => [DD.name, DD]))]),
        OD = (0, pD.useRef)(null),
        [QD, XD] = (0, pD.useState)(""),
        [VD, PD] = (0, pD.useState)("Enter"),
        [CD, xD] = (0, pD.useState)(null);

      function TD() {
        QD && (PD("Loading"), (0, xL.i)(QD, "social_menu").then((DD => {
          if (OD.current) switch (DD.kind) {
            case "sent":
              PD("Success");
              break;
            case "becameFriends":
              PD("BecameFriends");
              break;
            case "failed":
              xD(DD.message), PD("Error")
          }
        })))
      }
      return (0, pD.useEffect)((() => {
        if ("Enter" === VD || "Loading" === VD) return;
        const DD = setTimeout((() => {
          OD.current.value = "", XD(""), PD("Enter")
        }), "Success" === VD ? 1e3 : 4e3);
        return () => {
          clearTimeout(DD)
        }
      }), [VD]), (0, AD.jsx)("div", {
        className: "SocialMenu",
        children: (0, AD.jsxs)("div", {
          className: "SocialMenuInner",
          children: [(0, AD.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, AD.jsxs)("div", {
              className: "SocialMenuBox SocialMenuAddFriend",
              children: [(0, AD.jsx)(QL.e, {
                label: DD("socialBar:addFriend")
              }), (0, AD.jsxs)("div", {
                className: "AddFriendBody",
                children: [(0, AD.jsxs)("div", {
                  className: KD()("AddFriendBodyOverlay", {
                    [`AddFriendBodyOverlay${VD}`]: !0
                  }),
                  children: ["Loading" === VD && (0, AD.jsx)(ED.e, {}), "Success" === VD && (0, AD.jsx)(LD.e, {
                    name: "check"
                  }), "BecameFriends" === VD && (0, AD.jsx)(AD.Fragment, {
                    children: DD("socialBar:nowFriends", {
                      playerName: QD
                    })
                  }), "Error" === VD && CD && (0, AD.jsx)(AD.Fragment, {
                    children: DD(CD.translationKey, CD.params)
                  })]
                }), (0, AD.jsxs)("div", {
                  className: "PlayerSearch",
                  children: [(0, AD.jsx)(JD.e, {
                    className: "PlayerSearchInput",
                    placeholderText: DD("socialBar:enterPlayerName"),
                    domRef: OD,
                    onValueChange: DD => {
                      XD((0, dD.u)(DD)), OD.current.value = (0, dD.u)(DD)
                    },
                    onEnter: () => {
                      QD && (0, HD.reportAnalyticsClick)({
                        id: "social.add_friend",
                        value: "social_menu"
                      }), TD()
                    }
                  }), (0, AD.jsxs)(gD.f, {
                    className: "PlayerSearchInputButton SmallTextLight",
                    onClick: () => {
                      TD()
                    },
                    analyticsClick: {
                      id: "social.add_friend",
                      value: "social_menu"
                    },
                    children: [(0, AD.jsx)(LD.e, {
                      name: "user-plus"
                    }), " ", DD("socialBar:sendRequest")]
                  })]
                })]
              }), (0, AD.jsx)(bL.c, {
                surface: "social_menu",
                prefetchOnMount: !0
              })]
            }), RD.length > 0 && (0, AD.jsxs)("div", {
              className: "SocialMenuBox SocialMenuInvites",
              children: [(0, AD.jsx)(QL.e, {
                label: DD("socialBar:invites"),
                meta: RD.length
              }), RD.map((zD => (0, AD.jsxs)("div", {
                className: "SocialMenuInvite",
                children: [(0, AD.jsx)("div", {
                  className: "SocialMenuInviteIcon",
                  children: (0, AD.jsx)(PL.e, {
                    invite: zD
                  })
                }), (0, AD.jsx)("div", {
                  className: "SocialMenuInviteText",
                  children: (0, AD.jsx)(PL.i, {
                    invite: zD
                  })
                }), (0, AD.jsx)(gD.o, {
                  className: "SocialMenuInviteJoin SmallTextLight",
                  onClick: () => {
                    (0, CL.h)(zD)
                  },
                  analyticsClick: {
                    id: "social.accept_invite",
                    value: `social_menu:${zD.destination.kind}`
                  },
                  children: DD("general:join")
                }), (0, AD.jsx)(tD.f, {
                  tooltipInner: (0, AD.jsx)(AD.Fragment, {
                    children: DD("general:decline")
                  }),
                  delayShow: 0,
                  children: (0, AD.jsx)(gD.g, {
                    className: "SocialMenuInviteDecline",
                    padDefaultFocus: "invite" === (null === fD || void 0 === fD ? void 0 : fD.kind) && fD.inviteId === zD.id,
                    onClick: () => {
                      mD.e.declineInvite(zD.id)
                    },
                    analyticsClick: {
                      id: "social.decline_invite",
                      value: `social_menu:${zD.destination.kind}`
                    },
                    children: (0, AD.jsx)(LD.e, {
                      name: "xmark"
                    })
                  })
                })]
              }, zD.id)))]
            }), (0, AD.jsxs)("div", {
              className: KD()("SocialMenuBox SocialMenuRequests", {
                SocialMenuBoxEmpty: !wD && 0 === cD.length
              }),
              children: [(0, AD.jsx)(QL.e, {
                label: (0, AD.jsxs)(AD.Fragment, {
                  children: [(0, AD.jsx)(LD.e, {
                    name: TL.c
                  }), " ", DD("socialBar:requests")]
                }),
                meta: (0, AD.jsxs)(AD.Fragment, {
                  children: [cD.length, cD.length === FD.o && (0, AD.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: DD("socialBar:limitReached")
                  })]
                })
              }), wD && (0, AD.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, AD.jsx)(ED.e, {})
              }), !wD && 0 === cD.length && (0, AD.jsx)("div", {
                className: "SocialMenuEmpty",
                children: DD("socialBar:noFriendRequests")
              }), !wD && cD.length > 0 && (0, AD.jsx)("div", {
                className: "PlayerRows",
                children: (0, AD.jsx)(xs.b, {
                  lazyLoadedClassName: "SocialMenuRequestsLazy",
                  observerUpdateDeps: [cD],
                  children: cD.map(((zD, wD) => {
                    const pD = MD.get(zD.name);
                    return (0, AD.jsxs)(EL.g, {
                      playerSocialPreview: zD,
                      zIndex: cD.length - wD,
                      padDefaultFocus: (0, jL.e)(fD, zD.name, wD),
                      status: pD && (0, AD.jsx)(XL.c, {
                        gameNameWithVariation: pD.gameNameWithVariation,
                        isPrivateLobby: pD.isPrivateLobby
                      }),
                      children: [(0, AD.jsx)(tD.f, {
                        tooltipInner: (0, AD.jsx)(AD.Fragment, {
                          children: DD("general:accept")
                        }),
                        delayShow: 0,
                        children: (0, AD.jsx)(gD.f, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            BD((0, jL.d)(GD, wD)), (0, xL.f)(zD.name, !0, {
                              source: "social_menu",
                              announceFriend: !1
                            })
                          },
                          analyticsClick: {
                            id: "social.accept_friend_request",
                            value: "social_menu"
                          },
                          children: (0, AD.jsx)(LD.e, {
                            name: "check"
                          })
                        })
                      }), (0, AD.jsx)(tD.f, {
                        tooltipInner: (0, AD.jsx)(AD.Fragment, {
                          children: DD("general:decline")
                        }),
                        delayShow: 0,
                        children: (0, AD.jsx)(gD.g, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            BD((0, jL.d)(GD, wD)), (0, xL.f)(zD.name, !1, {
                              source: "social_menu"
                            })
                          },
                          analyticsClick: {
                            id: "social.decline_friend_request",
                            value: "social_menu"
                          },
                          children: (0, AD.jsx)(LD.e, {
                            name: "xmark"
                          })
                        })
                      })]
                    }, `${zD.name}_${zD.isError}`)
                  }))
                })
              })]
            }), (0, AD.jsx)(XL.i, {})]
          }), (0, AD.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, AD.jsxs)("div", {
              className: "SocialMenuBox SocialMenuParty",
              children: [(0, AD.jsx)(QL.e, {
                label: DD("socialBar:party")
              }), (0, AD.jsx)(JL.c, {})]
            }), (0, AD.jsxs)("div", {
              className: "SocialMenuBox SocialMenuFriends",
              children: [(0, AD.jsx)(QL.e, {
                label: (0, AD.jsxs)(AD.Fragment, {
                  children: [(0, AD.jsx)(LD.e, {
                    name: TL.b
                  }), " ", DD("socialBar:friends")]
                }),
                meta: (0, AD.jsxs)(AD.Fragment, {
                  children: [sD.length, sD.length >= (0, FD.c)(UD.getPlayerRanks()) && (0, AD.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: DD("socialBar:limitReached")
                  })]
                })
              }), wD && (0, AD.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, AD.jsx)(ED.e, {})
              }), !wD && 0 === sD.length && (0, AD.jsx)("div", {
                className: "SocialMenuEmpty",
                children: DD("socialBar:noFriends")
              }), !wD && sD.length > 0 && (0, AD.jsx)("div", {
                className: "PlayerRows",
                children: (0, AD.jsx)(xs.b, {
                  lazyLoadedClassName: "SocialMenuFriendsLazy",
                  observerUpdateDeps: [sD],
                  children: sD.map(((DD, wD) => (0, AD.jsx)(EL.g, {
                    playerSocialPreview: DD,
                    isFriend: !0,
                    hideFriendBadge: !0,
                    onFriendRemoved: DD => {
                      mD.e.removeFriendFromState(DD)
                    },
                    zIndex: sD.length - wD,
                    children: (0, AD.jsx)(EL.e, {
                      friend: DD,
                      followsLeader: zD,
                      analyticsSurface: "social_menu"
                    })
                  }, `${DD.name}_${DD.isError}`)))
                })
              })]
            })]
          })]
        })
      })
    }
    var iL = wD(2520);
    const lL = DD => {
        let {
          action: zD,
          padAction: wD
        } = DD;
        const {
          isTouchScreen: pD
        } = (0, XD.n)(["isTouchScreen"]), sD = (0, Gp.o)();
        return pD && !sD ? null : (0, AD.jsx)(gp.e, {
          className: "EverythingMenuTabKey",
          noaAction: zD,
          padHidesKey: !0,
          padMenuShortcut: wD
        })
      },
      WL = (0, pD.memo)((function() {
        const {
          t: DD
        } = (0, rD.E)(), {
          gameState: zD,
          openEverythingMenuName: wD,
          initSdkSelectorFinished: sD,
          crosshairGameView: LD
        } = (0, XD.n)(["gameState", "openEverythingMenuName", "initSdkSelectorFinished", "crosshairGameView"]), {
          userContext: cD
        } = (0, ID.c)(), RD = (0, yD.purchasesAllowed)(), UD = (0, ZD.D)(), {
          view: fD
        } = (0, mz.r)(), BD = "dot" === UD || null === UD && "ready" === (null === fD || void 0 === fD ? void 0 : fD.kind), GD = (DD, zD) => (0, AD.jsx)(lL, {
          action: DD,
          padAction: zD
        }), [nD, MD] = (0, pD.useState)(null), OD = (0, pD.useRef)(null), JD = {
          ..."inGame" === zD ? {} : (0, gD.ib)({
            focusOnClick: !1
          }),
          ...Cp.c
        }, ED = DD => {
          const zD = (0, xp.g)((zD => {
            (0, gD.eb)(zD.currentTarget), XD.e.set({
              openEverythingMenuName: DD
            })
          }), "pointerup");
          return {
            ...JD,
            onPointerDown: DD => {
              JD.onPointerDown(DD), zD.onPointerDown(DD)
            },
            onPointerUp: DD => {
              JD.onPointerUp(DD), zD.onPointerUp(DD)
            },
            onClick: zD.onClick
          }
        }, QD = null !== wD, VD = wD !== Rz.l.COSMETIC_SHOP && !LD;
        async function PD() {
          await async function() {
            if (!nD) return;
            await nD(), MD(null)
          }(), XD.e.set({
            openEverythingMenuName: null
          })
        }
        const xD = (0, pD.useRef)(null),
          TD = (0, pD.useCallback)((() => null !== xD.current && (0, nL.d)(xD.current)), []);

        function bD() {
          TD() || PD()
        }(0, pD.useEffect)((() => (0, MK.s)(TD)), [TD]);
        const jD = (0, pD.useMemo)((() => "inGame" === zD ? {
          text: DD("settingsMenu:exitGame"),
          onClick: () => {
            (0, hL.b)()
          }
        } : (0, CD.d)() ? {
          text: DD("settingsMenu:exitGame"),
          onClick: () => {
            Lz.l.discordActivity().then((DD => {
              DD.exit("User exited the game")
            }))
          }
        } : null), [zD, DD]);
        const dD = (0, AD.jsx)("div", {
          className: "EverythingMenuCloseButtonClickZone",
          onClick: bD,
          children: (0, AD.jsx)(gD.k, {
            className: "EverythingMenuCloseButton"
          })
        });
        return (0, AD.jsx)(Tp.d, {
          showing: QD,
          globallyUniqueKey: "EverythingMenu",
          alwaysMountChildren: !0,
          keepsMovement: wD === Rz.l.SHOP,
          doGameplayStartStopOnShow: "inGame" === zD,
          children: (0, AD.jsx)(jp.d, {
            className: "EverythingMenuContainer",
            show: QD && !LD,
            children: (0, AD.jsx)(bp.c, {
              close: bD,
              togglePointerLock: !1,
              children: (0, AD.jsxs)("div", {
                className: "EverythingMenu",
                children: [!(0, MK.o)(wD) && (0, AD.jsxs)("div", {
                  className: "EverythingMenuTabList",
                  children: [(0, AD.jsxs)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerStart",
                    children: [jD && (0, AD.jsx)(gD.d, {
                      className: "EverythingMenuBackButton",
                      padDestructive: !0,
                      onClick: () => {
                        jD.onClick()
                      },
                      children: jD.text
                    }), QD && RD && (0, AD.jsx)("div", {
                      ...JD,
                      className: "EverythingMenuWallet",
                      title: DD("homePage:getPremiumCurrency"),
                      onClick: () => {
                        (0, ZD.n)({
                          mode: "current",
                          source: "menuWallet"
                        })
                      },
                      children: (0, AD.jsx)(GL.f, {})
                    })]
                  }), (0, AD.jsxs)("div", {
                    className: "EverythingMenuTabListInner",
                    "data-pad-tabs": "1",
                    children: [(0, AD.jsxs)("div", {
                      ...ED(Rz.l.SETTINGS),
                      "data-pad-tab": !0,
                      "data-pad-selected": wD === Rz.l.SETTINGS ? "true" : void 0,
                      className: KD()("EverythingMenuTab", {
                        EverythingMenuTabActive: wD === Rz.l.SETTINGS
                      }),
                      children: [DD("general:settings"), GD("OpenSettings", "pause")]
                    }), (0, AD.jsxs)("div", {
                      ...ED(Rz.l.CUSTOMISATION),
                      "data-pad-tab": !0,
                      "data-pad-selected": wD === Rz.l.CUSTOMISATION ? "true" : void 0,
                      className: KD()("EverythingMenuTab", {
                        EverythingMenuTabActive: wD === Rz.l.CUSTOMISATION
                      }),
                      children: [DD("general:player"), GD("OpenCharacterCustomization")]
                    }), hD.featureFlags.useSocialFeatures && (0, AD.jsxs)("div", {
                      ...ED(Rz.l.SOCIAL),
                      "data-pad-tab": !0,
                      "data-pad-selected": wD === Rz.l.SOCIAL ? "true" : void 0,
                      className: KD()("EverythingMenuTab", {
                        EverythingMenuTabActive: wD === Rz.l.SOCIAL
                      }),
                      ...(0, HD.d)({
                        id: "social.open_menu",
                        value: "menu_tab"
                      }, wD === Rz.l.SOCIAL),
                      children: [DD("socialBar:social"), (0, AD.jsx)(iL.c, {})]
                    }), (0, mz.l)(fD) && (0, AD.jsxs)("div", {
                      ...ED(Rz.l.COSMETIC_SHOP),
                      "data-pad-tab": !0,
                      "data-pad-selected": wD === Rz.l.COSMETIC_SHOP ? "true" : void 0,
                      className: KD()("EverythingMenuTab EverythingMenuTabCosmeticShop", {
                        EverythingMenuTabActive: wD === Rz.l.COSMETIC_SHOP
                      }),
                      children: [(0, AD.jsx)("span", {
                        className: "EverythingMenuTabCosmeticShopText",
                        children: DD("store:title")
                      }), "new" === UD && (0, AD.jsx)(Cr, {}), BD && (0, AD.jsx)("span", {
                        className: "EverythingMenuTabStoreBadge EverythingMenuTabStoreDot"
                      })]
                    }), "inGame" === zD && (0, AD.jsxs)("div", {
                      ...ED(Rz.l.LOBBY_LEADERBOARD),
                      "data-pad-tab": !0,
                      "data-pad-selected": wD === Rz.l.LOBBY_LEADERBOARD ? "true" : void 0,
                      className: KD()("EverythingMenuTab", {
                        EverythingMenuTabActive: wD === Rz.l.LOBBY_LEADERBOARD
                      }),
                      children: [DD("general:lobby"), GD("OpenLobbyLeaderboard", "leaderboard")]
                    })]
                  }), (0, AD.jsx)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerEnd",
                    children: dD
                  })]
                }), (0, MK.o)(wD) && dD, (0, AD.jsxs)("div", {
                  ref: xD,
                  className: "EverythingMenuBody",
                  "data-pad-initial-area": !0,
                  style: {
                    "--everythingMenuBodyBackgroundOpacity": "inGame" === zD ? "0.85" : "1"
                  },
                  children: [(0, AD.jsx)(Jp, {
                    show: wD === Rz.l.SETTINGS,
                    setBeforeResumeCallback: MD
                  }), (0, AD.jsx)(Pp, {
                    show: wD === Rz.l.CUSTOMISATION
                  }), (0, AD.jsx)(pD.Suspense, {
                    fallback: null,
                    children: (0, AD.jsx)(RK, {
                      show: wD === Rz.l.SHOP
                    })
                  }), (0, AD.jsx)(QK, {
                    show: wD === Rz.l.LOBBY_LEADERBOARD
                  }), RD && (0, AD.jsx)(BL, {
                    show: wD === Rz.l.COSMETIC_SHOP
                  }), !RD && (0, AD.jsx)(AL, {
                    show: wD === Rz.l.COSMETIC_SHOP
                  }), (0, AD.jsx)(dL, {
                    show: wD === Rz.l.SOCIAL
                  })]
                }), !(0, hD.isMobileApp)() && (0, dp.e)(cD.getPlayerRanks()) && (0, AD.jsx)(jp.d, {
                  ref: OD,
                  className: "EverythingMenuBannerDiv",
                  show: VD,
                  "data-pad-hint-bar-avoid": !0,
                  "data-pad-no-step-in": !0,
                  children: (0, AD.jsx)(ML.e, {
                    info: {
                      adId: 2,
                      adType: "leaderboard",
                      adAlias: "banner_shop"
                    },
                    sizeInfo: {
                      parentRef: OD
                    },
                    showing: QD && VD,
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
  34209: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => KD
    });
    var pD = wD(351),
      sD = wD(34211);

    function KD(DD, zD, wD) {
      const KD = Object.entries(zD).sort(((DD, zD) => zD[1] - DD[1])),
        rD = (0, pD.ub)(DD);
      rD.push(DD ? "\n\n" : "\n");
      for (const [sD, ID] of KD) {
        var LD, cD, gD;
        const DD = null !== (LD = null === wD || void 0 === wD || null === (cD = wD[sD]) || void 0 === cD ? void 0 : cD.icon) && void 0 !== LD ? LD : `${sD} Enchantment`;
        rD.push({
          icon: DD,
          style: {
            fontSize: "1.5rem"
          }
        }), rD.push({
          str: `${sD} ${null!==(gD=(0,pD.R)(ID))&&void 0!==gD?gD:ID}\n`
        })
      }
      rD.push({
        str: "\n"
      });
      for (const [pD, ID] of KD) {
        var RD, AD, UD, fD;
        const DD = null !== (RD = null === wD || void 0 === wD || null === (AD = wD[pD]) || void 0 === AD ? void 0 : AD.icon) && void 0 !== RD ? RD : `${pD} Enchantment`,
          zD = null !== (UD = null === wD || void 0 === wD || null === (fD = wD[pD]) || void 0 === fD ? void 0 : fD.description) && void 0 !== UD ? UD : (0, sD.k)(pD);
        rD.push({
          icon: DD,
          style: {
            fontSize: "1.25rem",
            opacity: .75
          }
        }), rD.push({
          str: zD,
          style: {
            fontSize: "0.8em",
            fontWeight: "normal",
            opacity: .75
          }
        }), rD.push({
          str: "\n"
        })
      }
      return rD
    }
  },
  34216: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => gD,
      h: () => nD,
      k: () => GD,
      m: () => cD,
      o: () => hD,
      r: () => RD,
      s: () => UD,
      u: () => BD,
      x: () => AD
    });
    var pD = wD(338),
      sD = wD(619),
      KD = wD(351),
      rD = wD(4248),
      LD = wD(34209);

    function cD(DD, zD) {
      var wD;
      let {
        player: pD,
        chestOrCreative: sD
      } = DD;
      var KD;
      return zD < pD.length ? null !== (KD = pD[zD]) && void 0 !== KD ? KD : null : null !== (wD = sD[zD - pD.length]) && void 0 !== wD ? wD : null
    }

    function gD(DD) {
      var zD;
      return null !== (zD = DD.amount) && void 0 !== zD ? zD : 0
    }

    function RD(DD) {
      return 0 === DD.button || void 0 === DD.button
    }

    function AD(DD) {
      return !!DD.shiftKey
    }

    function UD(DD) {
      return "touches" in DD || "touch" === DD.pointerType || "pen" === DD.pointerType
    }
    const fD = new Set,
      ID = 50;

    function BD(DD, zD) {
      var wD;
      const pD = null === (wD = DD[zD]) || void 0 === wD ? void 0 : wD.displayName;
      return (0, sD.B)(pD) ? "string" !== typeof zD ? "" : (!fD.has(zD) && fD.size < ID && (fD.add(zD), console.warn(`No item called "${zD}", so its hover shows the name as given`)), zD) : pD
    }

    function GD(DD, zD, wD) {
      var cD, gD, RD, AD, UD, fD, ID, GD, hD, nD, MD, OD, JD, ED;
      const QD = DD.attributes,
        XD = null !== (cD = null === (gD = zD[DD.name]) || void 0 === gD ? void 0 : gD.rootName) && void 0 !== cD ? cD : DD.name,
        VD = null !== (RD = null !== (AD = QD.customDisplayName) && void 0 !== AD ? AD : null === (UD = zD[DD.name]) || void 0 === UD ? void 0 : UD.displayName) && void 0 !== RD ? RD : BD(zD, XD);
      let PD = VD;
      const CD = null === (fD = QD.customAttributes) || void 0 === fD ? void 0 : fD.enchantmentTier;
      CD && (PD = (0, KD.ub)(VD, {
        colour: KD.pb[CD]
      }));
      const xD = null !== (ID = null !== (GD = null !== (hD = function(DD, zD) {
        var wD;
        if (void 0 === DD || null !== (wD = zD.customAttributes) && void 0 !== wD && wD.author) return DD;
        const sD = (0, pD.Vb)(DD);
        return sD.every((DD => "string" === typeof DD)) ? DD : sD.map((DD => "string" === typeof DD ? DD : {
          icon: DD.icon,
          style: {
            fontSize: "1.5em"
          }
        }))
      }(QD.customDescription, QD)) && void 0 !== hD ? hD : null === (nD = zD[DD.name]) || void 0 === nD ? void 0 : nD.description) && void 0 !== GD ? GD : null === (MD = zD[XD]) || void 0 === MD ? void 0 : MD.description) && void 0 !== ID ? ID : "";
      let TD = xD;
      if (null !== (OD = QD.customAttributes) && void 0 !== OD && OD.enchantments) TD = (0, LD.b)(xD, QD.customAttributes.enchantments, QD.customAttributes.enchantmentData);
      else if (wD[XD]) TD = (0, KD.ub)(xD), TD.push({
        str: "\n"
      }), TD.push({
        str: "Enchantable",
        style: {
          fontSize: "0.8em",
          fontWeight: "normal",
          opacity: .4
        }
      });
      else if (null !== (JD = QD.customAttributes) && void 0 !== JD && JD.mobSettings) {
        var bD, jD;
        const DD = QD.customAttributes.mobSettings;
        var dD, SD;
        if (TD = [], (0, sD.B)(QD.customAttributes.health) || (TD.push({
            str: "\n"
          }), TD.push({
            icon: "Health",
            style: {
              fontSize: "1.5em"
            }
          }), TD.push({
            str: " "
          }), TD.push({
            str: QD.customAttributes.health.toString()
          }), (0, sD.B)(DD.maxHealth) || (TD.push({
            str: "/"
          }), TD.push({
            str: DD.maxHealth.toString()
          }))), !(0, sD.B)(DD.attackDamage) && DD.attackDamage > 0 && (TD.push({
            str: "\n"
          }), TD.push({
            icon: "Iron Sword",
            style: {
              fontSize: "1.5em"
            }
          }), TD.push({
            str: " "
          }), TD.push({
            str: DD.attackDamage.toString()
          })), !(0, sD.B)(DD.secondaryAttackDamage) && DD.secondaryAttackDamage > 0 && (TD.push({
            str: "\n"
          }), TD.push({
            icon: "Stone Crossbow",
            style: {
              fontSize: "1.5em"
            }
          }), TD.push({
            str: " "
          }), TD.push({
            str: DD.secondaryAttackDamage.toString()
          })), (0, sD.B)(DD.baseRunningSpeed) || (TD.push({
            str: "\n"
          }), TD.push({
            icon: "Speed",
            style: {
              fontSize: "1.5em"
            }
          }), TD.push({
            str: " "
          }), TD.push({
            str: DD.baseRunningSpeed.toFixed(2)
          })), "Saddled" === DD.metaInfo) TD.push({
          str: "\n"
        }), TD.push({
          str: {
            translationKey: "general:has"
          }
        }), TD.push({
          str: " "
        }), TD.push({
          icon: null !== (dD = null === (SD = DD.tameInfo) || void 0 === SD ? void 0 : SD.saddleItemName) && void 0 !== dD ? dD : "Saddle",
          style: {
            fontSize: "1.5em"
          }
        });
        if (TD.push({
            str: "\n"
          }), TD.push({
            str: "\n"
          }), DD.petInfo && null !== (bD = DD.tameInfo) && void 0 !== bD && bD.supportsFriendship) {
          const zD = rD.c.getIconsFromFriendshipPoints(DD.petInfo.friendshipPoints);
          for (const DD of zD) TD.push({
            icon: DD,
            style: {
              fontSize: "1.5em"
            }
          });
          TD.push({
            str: "\n"
          });
          const wD = rD.c.getMobHungerLevel(DD.petInfo.lastFedAt);
          for (const DD of rD.c.hungerLevelIcons[wD]) TD.push({
            icon: DD,
            style: {
              fontSize: "1.5em"
            }
          });
          TD.push({
            str: " "
          }), TD.push({
            str: rD.c.hungerLevelTranslations[wD],
            style: {
              fontWeight: "bolder"
            }
          })
        }
        if (DD.tameInfo && null !== (jD = DD.tameInfo) && void 0 !== jD && jD.supportsFriendship) {
          var iD, lD;
          let zD = null !== (iD = DD.tameInfo.likedFoods) && void 0 !== iD ? iD : [];
          TD.push({
            str: "\n"
          }), TD.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: rD.c.feedTextColours[rD.c.MobFoodType.Superliked]
            }
          }), TD.push({
            str: " "
          }), null !== (lD = DD.petInfo) && void 0 !== lD && lD.superlikedFoodKnown ? (TD.push({
            icon: DD.petInfo.superlikedFood,
            style: {
              fontSize: "1.5em"
            }
          }), zD = zD.filter((zD => zD !== DD.petInfo.superlikedFood))) : TD.push({
            icon: "Question Mark",
            style: {
              fontSize: "1.5em"
            }
          }), TD.push({
            str: "\n"
          }), TD.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: rD.c.feedTextColours[rD.c.MobFoodType.Liked]
            }
          }), TD.push({
            str: " "
          });
          for (const DD of zD) TD.push({
            icon: DD,
            style: {
              fontSize: "1.5em"
            }
          });
          TD.push({
            str: "\n"
          }), TD.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: rD.c.feedTextColours[rD.c.MobFoodType.Neutral]
            }
          }), TD.push({
            str: " "
          });
          for (const wD of null !== (WD = DD.tameInfo.neutralFoods) && void 0 !== WD ? WD : []) {
            var WD;
            TD.push({
              icon: wD,
              style: {
                fontSize: "1.5em"
              }
            })
          }
          TD.push({
            str: "\n"
          }), TD.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: rD.c.feedTextColours[rD.c.MobFoodType.Disliked]
            }
          }), TD.push({
            str: " "
          });
          for (const wD of null !== (ND = DD.tameInfo.dislikedFoods) && void 0 !== ND ? ND : []) {
            var ND;
            TD.push({
              icon: wD,
              style: {
                fontSize: "1.5em"
              }
            })
          }
        }
        TD.length > 0 ? (TD.shift(), TD.unshift(...(0, KD.ub)(xD))) : TD = (0, KD.ub)(xD)
      }
      return {
        name: PD,
        desc: TD,
        fontStyle: null !== (ED = QD.customAttributes) && void 0 !== ED && ED.author ? "italic" : "normal"
      }
    }

    function hD(DD, zD, wD, pD) {
      const sD = cD(DD, wD),
        KD = cD(DD, pD);
      if (!sD) return !1;
      const rD = zD[sD.name].armourReduction,
        LD = zD[KD.name].armourReduction;
      if (LD === rD) {
        var gD, RD, AD, UD;
        const DD = null !== (gD = null === (RD = sD.attributes.customAttributes) || void 0 === RD ? void 0 : RD.enchantmentTier) && void 0 !== gD ? gD : "Tier 0",
          zD = null !== (AD = null === (UD = KD.attributes.customAttributes) || void 0 === UD ? void 0 : UD.enchantmentTier) && void 0 !== AD ? AD : "Tier 0";
        return parseInt(DD.replace("Tier ", "")) >= parseInt(zD.replace("Tier ", ""))
      }
      return rD > LD
    }

    function nD(DD) {
      let zD;
      if ("number" === typeof DD) {
        const wD = document.querySelector(`[data-inven-idx="${DD}"]`);
        if (!wD) return null;
        zD = wD.getBoundingClientRect()
      } else zD = DD.getBoundingClientRect();
      return {
        x: zD.left + zD.width / 2,
        y: zD.top + zD.height / 2
      }
    }
  },
  34118: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => fD,
      f: () => ID,
      i: () => BD
    });
    var pD = wD(1447),
      sD = wD(58),
      KD = wD(1324),
      rD = wD(4552),
      LD = wD(2343),
      cD = wD(1200),
      gD = wD(103),
      RD = wD(1973),
      AD = wD(1346),
      UD = wD(1096);

    function fD(DD) {
      let {
        show: zD,
        onClose: wD
      } = DD;
      const {
        requestedGameNameWithVariation: pD,
        lobbyName: sD,
        shownLobbyName: KD
      } = (0, RD.i)("connectedGame"), cD = (0, LD.e)(pD, sD, !1);
      return gD.featureFlags.canUseInviteLinks && (0, UD.jsx)(rD.c, {
        show: zD,
        close: wD,
        padShowsHud: !0,
        togglePointerLock: !1,
        globallyUniqueKey: "InviteLinkBox",
        doGameplayStartStopOnShow: !0,
        children: (0, UD.jsxs)("div", {
          className: "InviteLinkBox AnimFadeInScaleUp",
          children: [(0, UD.jsx)("div", {
            className: "InviteLinkBoxHeader SmallTextBold",
            children: "Invite Friends"
          }), (0, UD.jsxs)("div", {
            className: "InviteLinkBoxDescription SmallTextLight",
            children: [(0, UD.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: '"Join Lobby Name" Button Info'
            }), "Game: ", null === cD ? (0, UD.jsx)(AD.e, {}) : cD, (0, UD.jsx)("br", {}), "Lobby Name: ", KD, (0, UD.jsx)("br", {}), (0, UD.jsx)("br", {}), (0, UD.jsx)("br", {}), (0, UD.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: "Link"
            })]
          }), (0, UD.jsx)(ID, {})]
        })
      })
    }

    function ID() {
      var DD;
      const {
        t: zD
      } = (0, cD.E)(), wD = null !== (DD = BD(gD.featureFlags.canUseInviteLinks)) && void 0 !== DD ? DD : "Loading Link...", [KD, rD] = (0, sD.useState)(0), [LD, RD] = (0, sD.useReducer)((DD => DD + 1), 0);
      return (0, sD.useEffect)((() => {
        const DD = setTimeout((() => {
          RD()
        }), 1100);
        return () => {
          clearTimeout(DD)
        }
      }), [KD]), gD.featureFlags.canUseInviteLinks && (0, UD.jsxs)("div", {
        className: "InviteLinkInnerWrapper",
        children: [(0, UD.jsx)("div", {
          className: "InviteLinkInner",
          children: wD
        }), (0, UD.jsx)(pD.f, {
          className: "InviteLinkCopyButton",
          onClick: () => {
            navigator.clipboard.writeText(wD).catch((DD => {
              console.error("Failed to copy invite link:", DD)
            })), rD(Date.now())
          },
          disabled: Date.now() - KD < 1e3,
          children: Date.now() - KD < 1e3 ? zD("general:copied") : zD("general:copy")
        })]
      })
    }

    function BD(DD) {
      const [zD, wD] = (0, sD.useState)(null);
      return (0, sD.useEffect)((() => {
        if (!DD) return;
        let zD = !0;
        return (0, KD.x)().then((DD => {
          zD && wD(DD)
        })).catch((DD => {
          console.error("Failed to get invite link:", DD)
        })), () => {
          zD = !1
        }
      }), [DD]), zD
    }
  },
  34199: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => gD
    });
    var pD = wD(58),
      sD = wD(1044),
      KD = wD.n(sD),
      rD = wD(1973),
      LD = wD(1096);

    function cD(DD) {
      const zD = Math.floor(DD / 3600),
        wD = Math.floor(DD % 3600 / 60),
        pD = Math.floor(DD % 60),
        sD = `${wD.toString().padStart(2,"0")}:${pD.toString().padStart(2,"0")}`;
      return zD > 0 ? `${zD}:${sD}` : sD
    }
    const gD = (0, pD.memo)((function(DD) {
      let {
        className: zD
      } = DD;
      const {
        recording: wD,
        seconds: pD
      } = (0, rD.i)("replayRecorder");
      return wD ? (0, LD.jsxs)("div", {
        className: KD()("RecordingIndicator", zD),
        children: [(0, LD.jsx)("span", {
          className: "RecordingIndicatorDot"
        }), (0, LD.jsx)("span", {
          className: "RecordingIndicatorLabel",
          children: "REC"
        }), (0, LD.jsx)("span", {
          className: "RecordingIndicatorTime",
          children: cD(pD)
        })]
      }) : null
    }))
  },
  4901: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => GD
    });
    var pD = wD(1044),
      sD = wD.n(pD),
      KD = wD(4665),
      rD = wD(1200),
      LD = wD(1057),
      cD = wD(1447),
      gD = wD(1495),
      RD = wD(1355),
      AD = wD(2492),
      UD = wD(1096);
    const fD = {
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

    function ID(DD) {
      let {
        platform: zD
      } = DD;
      const wD = "youtube" === zD;
      return (0, UD.jsxs)("span", {
        className: sD()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: wD
        }),
        children: [wD && (0, UD.jsx)(AD.e, {
          variant: "white"
        }), !wD && (0, UD.jsx)(LD.e, {
          name: fD[zD].icon,
          kit: "brands"
        })]
      })
    }

    function BD(DD) {
      let {
        platform: zD,
        link: wD,
        editable: pD,
        userContext: sD,
        onLinksUpdated: AD
      } = DD;
      const {
        t: BD
      } = (0, rD.E)(), GD = fD[zD];
      if (!wD && !pD) return null;

      function hD() {
        var DD;
        if (!sD || !AD) return;
        RD.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: GD.name
            }
          },
          prefixText: KD.u[zD],
          placeholderText: "playBloxd",
          initialValue: null !== (DD = null === wD || void 0 === wD ? void 0 : wD.handle) && void 0 !== DD ? DD : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: wD ? "general:remove" : void 0
        }).getResult().then((async DD => {
          if ("notificationTornDown" !== DD && null !== DD) try {
            "submit" === DD.type ? await gD.d.setSocialLink(sD, zD, DD.value) : await gD.d.clearSocialLink(sD, zD), AD()
          } catch (wD) {
            console.error("Failed to update social link", wD), RD.NotificationProvider.showAlertPopup({
              title: wD.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (wD) {
        const DD = `@${wD.handle}`;
        return (0, UD.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: GD.color
          },
          href: wD.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, UD.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, UD.jsx)(ID, {
              platform: zD
            }), (0, UD.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, UD.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: DD
              })
            })]
          }), pD && (0, UD.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, cD.ib)({
              stopPropagation: !0
            }),
            onClick: DD => {
              DD.stopPropagation(), DD.preventDefault(), hD()
            },
            children: (0, UD.jsx)(LD.e, {
              name: "pen-to-square"
            })
          }), !pD && (0, UD.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, UD.jsx)(LD.e, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, UD.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: GD.color
        },
        ...(0, cD.ib)(),
        onClick: () => {
          hD()
        },
        children: [(0, UD.jsx)(ID, {
          platform: zD
        }), (0, UD.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, UD.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: GD.name
          }), (0, UD.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: BD("homePage:profileSocialLinkAdd")
          })]
        }), (0, UD.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, UD.jsx)(LD.e, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function GD(DD) {
      let {
        socialLinks: zD,
        editable: wD = !1,
        userContext: pD,
        onLinksUpdated: sD
      } = DD;
      if (!wD && 0 === zD.length) return null;
      const rD = new Map(zD.map((DD => [DD.platform, DD]))),
        LD = wD ? KD.t : zD.map((DD => DD.platform));
      return (0, UD.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, UD.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: LD.map((DD => (0, UD.jsx)(BD, {
            platform: DD,
            link: rD.get(DD),
            editable: wD,
            userContext: pD,
            onLinksUpdated: sD
          }, DD)))
        })
      })
    }
  },
  34206: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => KD
    });
    var pD = wD(4555),
      sD = wD(4562);

    function KD(DD) {
      let {
        children: zD,
        showing: wD,
        globallyUniqueKey: KD,
        alwaysMountChildren: rD = !1,
        doGameplayStartStopOnShow: LD = !0,
        keepsMovement: cD = !1
      } = DD;
      return (0, sD.e)(!0, wD, KD, cD), (0, pD.b)(LD, wD), wD || rD ? zD : null
    }
  },
  34241: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => KD
    });
    var pD = wD(58),
      sD = wD(3444);

    function KD() {
      const [DD, zD] = (0, pD.useState)(!1);
      return (0, pD.useLayoutEffect)((() => {
        let DD = !0;
        return (0, sD.e)().then((() => {
          DD && zD(!0)
        })), () => {
          DD = !1
        }
      }), []), DD
    }
  },
  6603: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => KD
    });
    var pD = wD(58),
      sD = wD(35);

    function KD(DD, zD) {
      var wD;
      const [KD, rD] = (0, pD.useState)(null !== (wD = sD.h.getItem(DD)) && void 0 !== wD ? wD : zD);
      return [KD, zD => {
        sD.h.setItem(DD, zD), rD(zD)
      }]
    }
  },
  34188: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => BD,
      h: () => ID
    });
    wD(34191);
    var pD = wD(1044),
      sD = wD.n(pD),
      KD = wD(58),
      rD = wD(34181);

    function LD(DD, zD) {
      return Math.max(1, Math.round(DD * zD))
    }

    function cD(DD, zD) {
      const wD = zD * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
        pD = function(DD, zD) {
          if (DD.lines) return LD(DD.lineThickness, zD) % 2;
          if (DD.dot) return LD(DD.dotSize, zD) % 2;
          return gD(DD, zD) % 2
        }(DD, zD),
        sD = RD(DD.lineThickness * wD, pD),
        KD = LD(DD.lineLength, wD),
        rD = Math.round(DD.gap * wD),
        cD = DD.outline > 0 ? LD(DD.outline, wD) : 0,
        UD = [];
      if (DD.lines && (UD.push({
          x: sD + rD,
          y: 0,
          w: KD,
          h: sD,
          arm: "right"
        }), UD.push({
          x: -rD - KD,
          y: 0,
          w: KD,
          h: sD,
          arm: "left"
        }), UD.push({
          x: 0,
          y: sD + rD,
          w: sD,
          h: KD,
          arm: "down"
        }), DD.tStyle || UD.push({
          x: 0,
          y: -rD - KD,
          w: sD,
          h: KD,
          arm: "up"
        }), 0 === rD && UD.push({
          x: 0,
          y: 0,
          w: sD,
          h: sD
        })), DD.dot) {
        const zD = RD(DD.dotSize * wD, pD),
          KD = DD.lines && 0 === rD && DD.dotSize > DD.lineThickness ? Math.max(zD, sD + 2) : zD,
          LD = (sD - KD) / 2;
        UD.push({
          x: LD,
          y: LD,
          w: KD,
          h: KD
        })
      }
      const fD = UD.map((DD => ({
        ...DD,
        x: DD.x - cD,
        y: DD.y - cD,
        w: DD.w + 2 * cD,
        h: DD.h + 2 * cD
      })));
      let ID = null,
        BD = null;
      if (DD.circle) {
        const zD = LD(DD.circleThickness, wD),
          KD = function(DD, zD) {
            return DD + (DD % 2 === zD ? 0 : 1)
          }(gD(DD, wD), pD),
          rD = (sD - KD) / 2;
        ID = AD(rD, KD, zD), cD > 0 && (BD = AD(rD - cD, KD + 2 * cD, zD + 2 * cD))
      }
      return {
        cell: sD,
        fills: UD,
        outlines: cD > 0 ? fD : [],
        ring: ID,
        ringOutline: BD
      }
    }

    function gD(DD, zD) {
      return Math.round(DD.circleRadius * zD * 2 + LD(DD.circleThickness, zD))
    }

    function RD(DD, zD) {
      return Math.max(2 - zD, 2 * Math.round((DD - zD) / 2) + zD)
    }

    function AD(DD, zD, wD) {
      const pD = 2 * wD >= zD - 1;
      return {
        x: DD,
        y: DD,
        size: zD,
        border: Math.min(wD, Math.floor(zD / 2)),
        filled: pD
      }
    }
    var UD = wD(1096);
    const fD = 1.4;

    function ID(DD, zD) {
      return DD && zD ? `scale(${fD})` : "scale(1)"
    }

    function BD(DD) {
      return "classic" === DD.settings.style ? (0, UD.jsx)(nD, {
        ...DD
      }) : (0, UD.jsx)(VD, {
        ...DD
      })
    }
    const GD = .125;

    function hD(DD, zD) {
      const wD = {};
      if (DD.color !== rD.e.color && (wD.color = (0, rD.k)(DD.color)), DD.opacity !== rD.e.opacity && (wD.opacity = DD.opacity / 100), DD.outline !== rD.e.outline || DD.outlineColor !== rD.e.outlineColor) {
        const zD = DD.outline,
          pD = (0, rD.k)(DD.outlineColor);
        wD.textShadow = zD > 0 ? `-${zD}px 0 ${pD}, 0 ${zD}px ${pD}, ${zD}px 0 ${pD}, 0 -${zD}px ${pD}` : "none"
      }
      if (DD.size !== rD.e.size) {
        const pD = DD.size / 100;
        wD.fontSize = zD ? `calc(max(1.3rem, 18px) * ${pD})` : `calc(1.3rem * ${pD})`, wD.marginTop = `-${GD}em`, wD.transformOrigin = `50% calc(50% + ${GD}em)`
      }
      return wD
    }

    function nD(DD) {
      let {
        settings: zD,
        touch: wD,
        inPreview: pD,
        inEditor: KD,
        pressed: rD = !1,
        pressRef: LD
      } = DD;
      return (0, UD.jsx)("div", {
        className: sD()("Crosshair", {
          Touch: wD,
          CrosshairInPreview: pD,
          CrosshairInEditor: KD || pD
        }),
        ref: LD,
        style: {
          transform: ID(rD, zD.growOnClick),
          ...hD(zD, wD)
        },
        children: "+"
      })
    }

    function MD(DD, zD) {
      return DD / zD + "px"
    }

    function OD(DD, zD, wD, pD) {
      return {
        ...QD(DD, zD, wD),
        width: MD(DD.w, wD),
        height: MD(DD.h, wD),
        background: pD
      }
    }

    function JD(DD, zD, wD) {
      return {
        left: MD(DD.x, zD),
        top: MD(DD.y, zD),
        width: MD(DD.size, zD),
        height: MD(DD.size, zD),
        borderWidth: MD(DD.border, zD),
        borderColor: wD,
        background: DD.filled ? wD : void 0
      }
    }
    const ED = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function QD(DD, zD, wD) {
      const [pD, sD] = DD.arm ? ED[DD.arm] : [0, 0], KD = Math.round(zD * wD);
      return {
        left: MD(DD.x + pD * KD, wD),
        top: MD(DD.y + sD * KD, wD)
      }
    }

    function XD(DD) {
      return DD.arm ? {
        "data-arm": DD.arm,
        "data-x": DD.x,
        "data-y": DD.y
      } : {}
    }

    function VD(DD) {
      let {
        settings: zD,
        inPreview: wD,
        inEditor: pD,
        pressed: LD = !1,
        spread: gD,
        spreadRef: RD
      } = DD;
      const AD = (0, KD.useRef)(null),
        {
          box: ID,
          dpr: BD
        } = function(DD) {
          const [zD, wD] = (0, KD.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, KD.useLayoutEffect)((() => {
            const zD = DD.current;
            if (!zD) return;
            const pD = () => {
              const DD = zD.getBoundingClientRect(),
                pD = window.devicePixelRatio || 1;
              wD((zD => zD.dpr === pD && zD.box.left === DD.left && zD.box.top === DD.top && zD.box.width === DD.width && zD.box.height === DD.height ? zD : {
                box: {
                  left: DD.left,
                  top: DD.top,
                  width: DD.width,
                  height: DD.height
                },
                dpr: pD
              }))
            };
            pD();
            const sD = new ResizeObserver(pD);
            return sD.observe(zD), window.addEventListener("resize", pD), window.addEventListener("scroll", pD, !0), () => {
              sD.disconnect(), window.removeEventListener("resize", pD), window.removeEventListener("scroll", pD, !0)
            }
          }), [DD]), zD
        }(AD),
        GD = (0, KD.useRef)(BD);
      GD.current = BD;
      const hD = cD(zD, BD, LD && zD.growOnClick ? fD : 1),
        nD = function(DD, zD, wD) {
          const pD = Math.round((DD.left + DD.width / 2) * wD - zD / 2),
            sD = Math.round((DD.top + DD.height / 2) * wD - zD / 2);
          return {
            x: pD / wD - DD.left,
            y: sD / wD - DD.top
          }
        }(ID, hD.cell, BD),
        MD = (0, rD.k)(zD.color),
        ED = (0, rD.k)(zD.outlineColor),
        VD = (0, KD.useRef)(0);
      (0, KD.useLayoutEffect)((() => {
        if (RD) return RD.current = DD => {
          var zD;
          VD.current = DD, null === (zD = AD.current) || void 0 === zD || zD.querySelectorAll("[data-arm]").forEach((zD => {
            Object.assign(zD.style, QD(function(DD) {
              return {
                x: Number(DD.dataset.x),
                y: Number(DD.dataset.y),
                arm: DD.dataset.arm
              }
            }(zD), DD, GD.current))
          }))
        }, () => {
          RD.current = null
        }
      }), [RD]);
      const PD = null !== gD && void 0 !== gD ? gD : VD.current;
      return (0, UD.jsx)("div", {
        ref: AD,
        className: sD()("CrosshairShapes", {
          CrosshairInPreview: wD,
          CrosshairInEditor: pD || wD,
          CrosshairSpreads: void 0 !== RD
        }),
        children: (0, UD.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: nD.x,
            top: nD.y,
            opacity: zD.opacity / 100
          },
          children: (0, UD.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [hD.ringOutline && (0, UD.jsx)("div", {
              className: "CrosshairRing",
              style: JD(hD.ringOutline, BD, ED)
            }), hD.outlines.map(((DD, zD) => (0, UD.jsx)("div", {
              className: "CrosshairPart",
              ...XD(DD),
              style: OD(DD, PD, BD, ED)
            }, `o${zD}`))), hD.ring && (0, UD.jsx)("div", {
              className: "CrosshairRing",
              style: JD(hD.ring, BD, MD)
            }), hD.fills.map(((DD, zD) => (0, UD.jsx)("div", {
              className: "CrosshairPart",
              ...XD(DD),
              style: OD(DD, PD, BD, MD)
            }, `f${zD}`)))]
          })
        })
      })
    }
  },
  34193: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => RD,
      d: () => GD,
      h: () => BD
    });
    var pD = wD(34181);
    const sD = "XH1-",
      KD = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      rD = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      LD = ["color", "outlineColor"],
      cD = 1 + 3 * LD.length + rD.length + 1,
      gD = Math.ceil(8 * cD / Math.log2(62)),
      RD = sD.length + gD;

    function AD(DD) {
      let zD = 90;
      for (const wD of DD) zD = 31 * zD + wD & 255;
      return zD
    }
    const UD = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      fD = BigInt(UD.length);

    function ID(DD, zD) {
      let wD = 0n;
      for (const sD of DD) {
        const DD = UD.indexOf(sD);
        if (DD < 0) return null;
        wD = wD * fD + BigInt(DD)
      }
      if (wD >> BigInt(8 * zD) !== 0n) return null;
      const pD = [];
      for (let sD = 0; sD < zD; sD++) pD.unshift(Number(0xffn & wD)), wD >>= 8n;
      return pD
    }

    function BD(DD) {
      let zD = "shapes" === DD.style ? 1 : 0;
      KD.forEach(((wD, pD) => {
        DD[wD] && (zD |= 1 << pD + 1)
      }));
      const wD = [zD];
      for (const sD of LD) {
        const zD = (0, pD.h)(sD, DD[sD]);
        wD.push(zD >> 16 & 255, zD >> 8 & 255, 255 & zD)
      }
      for (const sD of rD) {
        const {
          min: zD,
          step: KD
        } = pD.b[sD];
        wD.push(Math.round(((0, pD.h)(sD, DD[sD]) - zD) / KD))
      }
      return wD.push(AD(wD)), sD + function(DD, zD) {
        let wD = 0n;
        for (const sD of DD) wD = wD << 8n | BigInt(sD);
        let pD = "";
        for (let sD = 0; sD < zD; sD++) pD = UD[Number(wD % fD)] + pD, wD /= fD;
        return pD
      }(wD, gD)
    }

    function GD(DD) {
      for (const zD of DD.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${gD}})`, "gi"))) {
        const DD = hD(ID(zD[1], cD));
        if (DD) return DD
      }
      return null
    }

    function hD(DD) {
      if (!DD || DD.length !== cD || AD(DD.slice(0, -1)) !== DD[DD.length - 1]) return null;
      const zD = DD[0],
        wD = {
          ...pD.e,
          style: 1 & zD ? "shapes" : "classic"
        };
      KD.forEach(((DD, pD) => {
        wD[DD] = 0 !== (zD & 1 << pD + 1)
      }));
      let sD = 1;
      for (const pD of LD) wD[pD] = DD[sD] << 16 | DD[sD + 1] << 8 | DD[sD + 2], sD += 3;
      for (const KD of rD) {
        const {
          min: zD,
          step: rD
        } = pD.b[KD];
        wD[KD] = (0, pD.h)(KD, zD + DD[sD] * rD), sD++
      }
      return wD
    }
  },
  34181: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => pD,
      e: () => sD,
      h: () => KD,
      k: () => gD,
      m: () => cD,
      q: () => RD,
      u: () => LD,
      y: () => rD
    });
    const pD = {
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
      sD = Object.freeze({
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

    function KD(DD, zD) {
      var wD;
      const {
        min: KD,
        max: rD,
        step: LD
      } = pD[DD];
      if (!Number.isFinite(zD)) return sD[DD];
      const cD = (null !== (wD = String(LD).split(".")[1]) && void 0 !== wD ? wD : "").length,
        gD = Number((Math.round(zD / LD) * LD).toFixed(cD));
      return Math.min(rD, Math.max(KD, gD))
    }

    function rD(DD, zD, wD) {
      const pD = "number" === typeof wD ? KD(zD, wD) : wD;
      return {
        ...DD,
        [zD]: pD
      }
    }

    function LD(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(sD).every((pD => wD.includes(pD) || DD[pD] === zD[pD]))
    }

    function cD(DD) {
      return LD(DD, sD)
    }

    function gD(DD) {
      return `#${DD.toString(16).padStart(6,"0")}`
    }

    function RD(DD) {
      const zD = /^#?([0-9a-f]{6})$/i.exec(DD.trim());
      return zD ? parseInt(zD[1], 16) : null
    }
  },
  34197: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => AD,
      g: () => UD
    });
    var pD = wD(58),
      sD = wD(35),
      KD = wD(34193),
      rD = wD(34181);
    const LD = "crosshairCode";
    let cD = null;
    const gD = new Set;

    function RD() {
      if (null === cD) {
        var DD;
        const zD = sD.h.getItem(LD);
        cD = null !== (DD = "string" === typeof zD ? (0, KD.d)(zD) : null) && void 0 !== DD ? DD : rD.e
      }
      return cD
    }

    function AD(DD) {
      cD = DD, (0, rD.m)(DD) ? sD.h.removeItem(LD) : sD.h.setItem(LD, (0, KD.h)(DD));
      for (const zD of gD) zD()
    }

    function UD() {
      const [DD, zD] = (0, pD.useState)(RD);
      return (0, pD.useEffect)((() => {
        const DD = () => {
          zD(RD())
        };
        return DD(), wD = DD, gD.add(wD), () => {
          gD.delete(wD)
        };
        var wD
      }), []), DD
    }
  },
  34126: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => sD,
      e: () => pD
    });
    const pD = "image/jpeg",
      sD = "jpg"
  },
  34133: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => cD,
      g: () => gD,
      i: () => RD
    });
    var pD = wD(1702),
      sD = wD(3186),
      KD = wD(103),
      rD = wD(1753),
      LD = wD(34126);

    function cD() {
      return !(0, KD.isMobileApp)() || pD.c.supports("photos")
    }
    async function gD(DD) {
      var zD, wD;
      if ((0, KD.isMobileApp)()) {
        const {
          saved: zD
        } = await pD.c.request("photos.save", {
          data: await (0, sD.h)(DD),
          mimeType: LD.e
        });
        return zD ? "saved" : "denied"
      }
      return (0, KD.isIOS)() && null !== (zD = (wD = navigator).canShare) && void 0 !== zD && zD.call(wD, {
        files: [DD]
      }) ? RD(DD) : ((0, rD.b)(DD, DD.name), "saved")
    }
    async function RD(DD) {
      try {
        return await navigator.share({
          files: [DD]
        }), "shared"
      } catch (zD) {
        if (zD instanceof DOMException && "AbortError" === zD.name) return "sw";
        if (zD instanceof DOMException && "NotAllowedError" === zD.name) return "needsTap";
        throw zD
      }
    }
  },
  34122: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => gD,
      e: () => RD,
      g: () => AD
    });
    var pD = wD(20),
      sD = wD(34095),
      KD = wD(1648),
      rD = wD(34126);
    const LD = 8294400,
      cD = .92;

    function gD() {
      (0, KD.i)(), pD.e.set({
        screenshotMode: !0
      })
    }

    function RD() {
      pD.e.set({
        screenshotMode: !1
      })
    }
    async function AD() {
      const {
        width: DD,
        height: zD,
        scale: wD
      } = function(DD, zD, wD) {
        const pD = Math.max(1, DD),
          sD = Math.max(1, zD),
          KD = Math.min(Math.max(1, wD), Math.sqrt(LD / (pD * sD)));
        return {
          width: Math.round(pD * KD),
          height: Math.round(sD * KD),
          scale: KD
        }
      }(window.innerWidth, window.innerHeight, window.devicePixelRatio), {
        blob: pD
      } = await sD.devTools.capturePhoto(DD, zD, {
        scale: wD,
        type: rD.e,
        quality: cD
      });
      return new File([pD], function(DD) {
        const zD = DD => String(DD).padStart(2, "0"),
          wD = `${DD.getFullYear()}${zD(DD.getMonth()+1)}${zD(DD.getDate())}`,
          pD = `${zD(DD.getHours())}${zD(DD.getMinutes())}${zD(DD.getSeconds())}`;
        return `bloxd-${wD}-${pD}.${rD.c}`
      }(new Date), {
        type: rD.e
      })
    }
  },
  34174: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => KD,
      h: () => sD
    });
    var pD = wD(20);

    function sD(DD, zD) {
      return DD && !zD
    }

    function KD() {
      return sD(pD.e.get("isTouchScreen"), pD.e.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  34103: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => pD
    });
    const pD = new Set(["chunkBorders"])
  },
  34095: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      ALL_DEV_TOOLS: () => rD,
      coreDevTools: () => gD,
      devTools: () => cD
    });
    var pD = wD(638),
      sD = wD(1309),
      KD = wD(34103);
    const rD = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function LD() {
      const {
        noaDevTools: DD
      } = await wD.e(236).then((() => wD(40984)));
      return DD
    }
    const cD = new class {
        constructor() {
          this.loadHost = LD, this.tools = rD
        }
        setHost(DD) {
          this.tools = null === DD ? rD : DD.tools, this.loadHost = null === DD ? LD : async () => DD
        }
        supports(DD) {
          return this.tools.has(DD)
        }
        async downloadScene(DD, zD) {
          const wD = await this.loadHost();
          await wD.downloadScene(DD, zD)
        }
        async setAmbientLightIntensity(DD) {
          const zD = await this.loadHost();
          await zD.setAmbientLightIntensity(DD)
        }
        async capturePhoto(DD, zD, wD) {
          return (await this.loadHost()).capturePhoto(DD, zD, wD)
        }
      },
      gD = {
        tools: KD.e,
        downloadScene: async () => {
          throw new Error("This client can't download the scene")
        },
        setAmbientLightIntensity: async () => {
          throw new Error("This client can't set the ambient light")
        },
        capturePhoto: async () => {
          throw new Error("No game is drawing yet")
        }
      };
    pD.v && cD.setHost(gD), (0, sD.v)((() => {
      cD.setHost(gD)
    }))
  },
  34238: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => rD,
      h: () => sD,
      j: () => RD
    });
    var pD = wD(1570);

    function sD(DD) {
      var zD;
      return {
        ...rD.store,
        yaw: rD.store.yaw + (null !== (zD = pD.b[DD].previewYaw) && void 0 !== zD ? zD : 0)
      }
    }
    const KD = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      rD = {
        player: KD,
        store: {
          ...KD,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function LD(DD, zD) {
      DD instanceof Promise ? DD.then(zD).catch((DD => {
        console.error("Couldn't open the preview", DD)
      })) : zD(DD)
    }
    class cD {
      constructor(DD) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, LD(DD, (DD => {
          this.closed ? DD.close() : (this.opened = DD, null !== this.size && DD.resize(this.size.width, this.size.height), null !== this.view && DD.show(this.view))
        }))
      }
      show(DD) {
        var zD;
        this.view = DD, null === (zD = this.opened) || void 0 === zD || zD.show(DD)
      }
      resize(DD, zD) {
        var wD;
        this.size = {
          width: DD,
          height: zD
        }, null === (wD = this.opened) || void 0 === wD || wD.resize(DD, zD)
      }
      close() {
        var DD;
        this.closed = !0, null === (DD = this.opened) || void 0 === DD || DD.close(), this.opened = null
      }
    }
    class gD {
      constructor(DD) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(DD).then((DD => DD.ready)), LD(DD, (DD => {
          this.closed ? DD.close() : (this.opened = DD, null !== this.size && DD.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var DD, zD;
        return null !== (DD = null === (zD = this.opened) || void 0 === zD ? void 0 : zD.isReady()) && void 0 !== DD && DD
      }
      setCosmetic(DD, zD) {
        var wD;
        null === (wD = this.opened) || void 0 === wD || wD.setCosmetic(DD, zD)
      }
      playEmote(DD) {
        var zD;
        null === (zD = this.opened) || void 0 === zD || zD.playEmote(DD)
      }
      setOrbit(DD) {
        var zD;
        null === (zD = this.opened) || void 0 === zD || zD.setOrbit(DD)
      }
      resetCamera() {
        var DD;
        null === (DD = this.opened) || void 0 === DD || DD.resetCamera()
      }
      async untilDrawn(DD) {
        var zD;
        await this.ready, await (null === (zD = this.opened) || void 0 === zD ? void 0 : zD.untilDrawn(DD))
      }
      resize(DD, zD) {
        var wD;
        this.size = {
          width: DD,
          height: zD
        }, null === (wD = this.opened) || void 0 === wD || wD.resize(DD, zD)
      }
      close() {
        var DD;
        this.closed = !0, null === (DD = this.opened) || void 0 === DD || DD.close(), this.opened = null
      }
    }
    const RD = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(DD) {
        this.host = DD
      }
      setDefaultHost(DD) {
        this.makeDefault = DD
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(DD) {
        return new cD(this.current().openMob(DD))
      }
      openPet(DD) {
        return new cD(this.current().openPet(DD))
      }
      openMobLineup(DD) {
        return new cD(this.current().openMobLineup(DD))
      }
      openCharacter(DD, zD) {
        return new gD(this.current().openCharacter(DD, zD))
      }
    }
  },
  34233: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => pD.d,
      c: () => pD.h,
      e: () => pD.j
    });
    var pD = wD(34238);
    class sD {
      constructor(DD) {
        this.load = DD, this.loaded = null, this.loading = null
      }
      run(DD) {
        return null !== this.loaded ? DD(this.loaded) : (this.loading ??= this.load().then((DD => (this.loaded = DD, DD)), (DD => {
          throw this.loading = null, DD
        })), this.loading.then(DD))
      }
    }
    class KD {
      constructor() {
        this.mobScene = new sD((() => Promise.all([wD.e(72), wD.e(232), wD.e(231), wD.e(254), wD.e(96), wD.e(255), wD.e(75), wD.e(74), wD.e(252), wD.e(73), wD.e(262), wD.e(256), wD.e(261), wD.e(259), wD.e(251), wD.e(274), wD.e(228), wD.e(244), wD.e(257), wD.e(260), wD.e(77), wD.e(186), wD.e(222), wD.e(95), wD.e(225), wD.e(240), wD.e(120), wD.e(241), wD.e(76), wD.e(119), wD.e(246)]).then((() => wD(40998))))), this.characterScene = new sD((() => Promise.all([wD.e(72), wD.e(232), wD.e(231), wD.e(254), wD.e(96), wD.e(255), wD.e(75), wD.e(74), wD.e(252), wD.e(73), wD.e(262), wD.e(256), wD.e(261), wD.e(259), wD.e(251), wD.e(274), wD.e(228), wD.e(244), wD.e(257), wD.e(260), wD.e(77), wD.e(186), wD.e(222), wD.e(95), wD.e(225), wD.e(240), wD.e(120), wD.e(241), wD.e(76), wD.e(119), wD.e(245)]).then((() => wD(41087)))))
      }
      openMob(DD) {
        return this.mobScene.run((zD => zD.openMobPreview(DD)))
      }
      openPet(DD) {
        return this.mobScene.run((zD => zD.openPetPreview(DD)))
      }
      openMobLineup(DD) {
        return this.mobScene.run((zD => zD.openMobLineupPreview(DD)))
      }
      openCharacter(DD, zD) {
        return this.characterScene.run((wD => wD.openCharacterPreview(DD, zD)))
      }
    }
    pD.j.setDefaultHost((() => new KD))
  },
  6693: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => sD,
      c: () => KD
    });
    var pD = wD(35);
    const sD = "shaderPack";
    async function KD() {
      var DD;
      let zD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (DD = await pD.g.getItem(sD, zD)) && void 0 !== DD ? DD : null
    }
  },
  34145: (DD, zD, wD) => {
    function pD(DD, zD) {
      return DD && !zD
    }
    wD.d(zD, {
      c: () => pD
    })
  },
  34172: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => KD
    });
    var pD = wD(1075);

    function sD() {
      var DD, zD;
      return null !== (DD = null === (zD = screen.orientation) || void 0 === zD ? void 0 : zD.type) && void 0 !== DD ? DD : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const KD = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && sD() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = sD(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, pD.CB)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const DD of this.resizers) DD()
          }
        }), 1e3)
      }
      heldSizer(DD) {
        let zD = !1;
        return () => {
          if (zD && this.isHeld()) return null;
          const wD = DD();
          return zD ||= null !== wD, wD
        }
      }
      onRelease(DD) {
        return this.resizers.add(DD), () => {
          this.resizers.delete(DD)
        }
      }
    }
  },
  34139: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => gD,
      h: () => AD,
      k: () => RD
    });
    var pD = wD(20),
      sD = wD(1702),
      KD = wD(35),
      rD = wD(3670);
    const LD = 2592e5,
      cD = "notificationOptInLastPromptedAt";
    async function gD() {
      var DD;
      const zD = null !== (DD = KD.h.getItem(cD)) && void 0 !== DD ? DD : 0;
      return Date.now() - zD < LD ? null : AD()
    }

    function RD() {
      KD.h.setItem(cD, Date.now())
    }
    async function AD() {
      return await sD.c.ready, sD.c.supports("notifications") ? pD.e.get("mobilePushNotificationsCanAsk") ? async () => {
        sD.c.request("notifications.requestPermission", {}).then((DD => {
          let {
            canAsk: zD
          } = DD;
          pD.e.set({
            mobilePushNotificationsCanAsk: zD
          })
        }), (DD => {
          console.error("The app couldn't ask for push notifications:", DD)
        }))
      }: null: await rD.c.canAsk() ? () => rD.c.requestPermission() : null
    }
  },
  34109: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => nD,
      g: () => gD,
      k: () => BD,
      n: () => ID
    });
    var pD = wD(157),
      sD = wD(1270),
      KD = wD(1211),
      rD = wD(1130),
      LD = wD(1733);
    const cD = {
      offline: "homePage:onboardingNameNoAccount",
      outdated: "general:updatedReloading",
      busy: "homePage:changeNameTooFast",
      server: "homePage:changeNameFailed"
    };

    function gD(DD) {
      return cD[DD]
    }

    function RD(DD) {
      return (0, LD.c)(DD) ? "outdated" : DD instanceof pD.c ? 429 === DD.httpCode ? "busy" : "server" : "offline"
    }

    function AD(DD, zD, wD) {
      return (0, rD.postJsonWithMetricsCookiesAndJsonResponse)(`${KD.clientSideServerUrls.indexUrl}${zD}`, wD, {
        retries: 3
      }, DD.getMetricsCookies()).catch((DD => (console.error("Bad response from the server when trying to change name:", zD, DD), {
        outcome: "failed",
        failure: RD(DD)
      })))
    }

    function UD(DD) {
      return "outcome" in DD && "failed" === DD.outcome
    }

    function fD(DD) {
      return console.error("Error when trying to get with new name from DB", DD), {
        outcome: "refused",
        message: DD
      }
    }
    async function ID(DD) {
      const zD = await AD(DD, "/index/name/random", {});
      return UD(zD) ? zD : "err" in zD ? fD(zD.err) : (DD.setPlayerName(zD.name), {
        outcome: "changed",
        name: zD.name
      })
    }
    async function BD(DD, zD) {
      const wD = await AD(DD, "/index/name/update", {
        name: zD
      });
      return UD(wD) ? wD : "err" in wD ? fD(wD.err) : wD.nameExists ? {
        outcome: "taken"
      } : (DD.setPlayerName(zD), {
        outcome: "changed",
        name: zD
      })
    }

    function GD(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
      const pD = 1 === zD ? 1 : 10 ** (zD - 1),
        KD = String(pD + Math.floor(wD() * (10 ** zD - pD)));
      return `${DD.slice(0,sD.l-zD)}${KD}`
    }
    const hD = [1, 2, 3, 4];
    async function nD(DD, zD) {
      const wD = await BD(DD, zD);
      if ("taken" !== wD.outcome) return wD;
      for (const pD of hD) {
        const wD = GD(zD, pD),
          sD = await BD(DD, wD);
        if ("taken" !== sD.outcome) return sD
      }
      return {
        outcome: "taken"
      }
    }
  },
  34150: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => LD,
      h: () => cD
    });
    var pD = wD(20);
    const sD = 24,
      KD = "farNametags",
      rD = 1e5;

    function LD() {
      var DD;
      return null === (DD = pD.e.get("showDistantNametags")) || void 0 === DD || DD
    }

    function cD() {
      var DD;
      return null !== (DD = function() {
        const DD = new URLSearchParams(window.location.search).get(KD),
          zD = null === DD || "" === DD ? NaN : Number(DD);
        return Number.isFinite(zD) && zD >= 0 ? Math.min(zD, rD) : null
      }()) && void 0 !== DD ? DD : LD() ? 0 : sD
    }
  },
  34226: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => sD,
      f: () => rD
    });
    const pD = [{
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

    function sD(DD) {
      let zD, wD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof DD) {
        if (!Number.isFinite(DD)) return "0";
        if (Math.abs(DD) < 100) {
          const zD = DD < 0 ? "-" : "",
            wD = Math.abs(DD);
          return wD >= 10 ? `${zD}${wD.toFixed(1).replace(/\.0$/,"")}` : `${zD}${wD.toFixed(2).replace(/\.?0+$/,"")}`
        }
        zD = BigInt(Math.floor(DD))
      } else zD = DD;
      const sD = zD < 0n ? -zD : zD,
        KD = zD < 0n ? "-" : "",
        rD = sD.toString();
      if (rD.length <= wD) return `${KD}${rD}`;
      const LD = 3 * Math.floor((rD.length - 1) / 3);
      if (LD < 3) return `${KD}${rD}`;
      if (LD > 3 * pD.length) {
        const DD = rD[0],
          zD = rD.slice(1, 3).replace(/0+$/, "");
        return `${KD}${zD?`${DD}.${zD}`:DD}e${rD.length-1}`
      }
      const {
        threshold: cD,
        suffix: gD
      } = pD[pD.length - LD / 3], RD = sD / cD, AD = Number(1000n * (sD % cD) / cD), UD = Number(RD) + AD / 1e3;
      let fD;
      return fD = UD >= 100 ? Math.floor(UD).toString() : UD >= 10 ? UD.toFixed(1).replace(/\.0$/, "") : UD.toFixed(2).replace(/\.?0+$/, ""), `${KD}${fD}${gD}`
    }
    const KD = pD.map((DD => {
      let {
        threshold: zD,
        suffix: wD
      } = DD;
      return {
        threshold: Number(zD),
        suffix: wD
      }
    })).filter((DD => {
      let {
        threshold: zD
      } = DD;
      return Number.isFinite(zD)
    }));

    function rD(DD) {
      const zD = Math.abs(DD),
        wD = DD < 0 ? "-" : "";
      for (const {
          threshold: pD,
          suffix: sD
        }
        of KD)
        if (zD >= pD) {
          const DD = zD / pD;
          if (DD >= 1e3) return `${wD}${zD.toExponential(2).replace("e+","e")}`;
          let KD;
          return KD = DD >= 100 ? Math.floor(DD).toString() : DD >= 10 ? DD.toFixed(1).replace(/\.0$/, "") : DD.toFixed(2).replace(/\.?0+$/, ""), `${wD}${KD}${sD}`
        } return `${wD}${zD}`
    }
  },
  34211: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => RD,
      h: () => UD,
      i: () => AD,
      k: () => rD,
      m: () => gD,
      n: () => cD
    });
    var pD = wD(351);
    const sD = ["Wood Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table"],
      KD = {
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

    function rD(DD) {
      var zD;
      return null !== (zD = KD[DD]) && void 0 !== zD ? zD : {
        translationKey: ""
      }
    }
    const LD = {
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

    function cD(DD) {
      return sD.includes(DD)
    }

    function gD(DD) {
      var zD;
      return !0 === (null === DD || void 0 === DD || null === (zD = DD.customAttributes) || void 0 === zD ? void 0 : zD.cannotEnchant)
    }

    function RD(DD, zD) {
      const {
        max: wD
      } = LD[DD].at(-1);
      return zD <= wD
    }

    function AD(DD) {
      const zD = Math.sin(DD / 80),
        wD = DD => {
          if (DD <= 0) return 0;
          if (DD > 1) return 1;
          let zD = 0;
          const wD = [1, 7, 21, 35, 35, 21, 7, 1];
          for (let pD = 0; pD < wD.length; pD++) {
            zD += (pD % 2 === 0 ? 1 : -1) * wD[pD] * Math.pow(DD, 2 + pD) / (2 + pD)
          }
          return 72 * zD
        },
        pD = .3 - .78 * zD,
        sD = .5 - .78 * zD,
        KD = .6 - .7 * zD,
        rD = .8 - .6 * zD;
      let LD = wD(pD),
        cD = wD(sD) - LD,
        gD = wD(KD) - cD - LD,
        RD = wD(rD) - gD - cD - LD;
      pD < .041 && (cD /= 1 - LD, gD /= 1 - LD, RD /= 1 - LD, LD = 0), sD < .041 && (LD /= 1 - cD, gD /= 1 - cD, RD /= 1 - cD, cD = 0), KD < .041 && (LD /= 1 - gD, cD /= 1 - gD, RD /= 1 - gD, gD = 0), rD < .041 && (LD /= 1 - RD, cD /= 1 - RD, gD /= 1 - RD, RD = 0);
      return {
        commonProb: LD,
        uncommonProb: cD,
        rareProb: gD,
        epicProb: RD,
        legendaryProb: 1 - (RD + gD + cD + LD)
      }
    }

    function UD(DD, zD) {
      const {
        min: wD,
        max: sD
      } = LD[DD][zD], KD = pD.c.sampleUniformIntDistribution(wD, sD, "includeMax");
      return {
        ...AD(KD),
        level: KD
      }
    }
  },
  34191: () => {},
  12810: DD => {
    DD.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAaUlEQVR4AWyOQQ6AIAwECwGNr/HkYzz4Hy9+WEkq01BDDCRDy3ZbGo9rU2c/V+1Bj9JOeW7RokaTBO0zpDxJXmYJKXjdohlwOqbWi4YaJFIgcYEIaGAT+JvHCDNQ8El9ziQz/BdzE00vAAAA//+cTXaSAAAABklEQVQDAHI9N5g1NM74AAAAAElFTkSuQmCC"
  },
  13954: DD => {
    DD.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAGBJREFUGJVNjjEOxEAIA+dW22Rpk2+nSndPZFtMewU6FBdIjJHx536+ABARUl7XCbjvyV9mJqX7BtY6RkS0t9bRc0op5ZuaGTAqtPZCpfG+AqSs8FFlulh7s6j7rh9d9wclFjd0V4Z2HAAAAABJRU5ErkJggg=="
  },
  15381: DD => {
    DD.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAbUlEQVR4nESOSwqAMAxEow0pive/gIcTBBdSsZh+NG20DlnkM8MLhnXuzHSnAwBaI8LIV2RXOiIkaGfMKfXGyByZparbyQZpGNUV/KaHGrWowZKVgSx8Qr8vzdXgAkYFCIn9mZP7E8pQ1Q9fzAMAAP//PTNTFgAAAAZJREFUAwAk1D9dXrbJngAAAABJRU5ErkJggg=="
  },
  15845: DD => {
    DD.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAE1JREFUGJVNjsEOwDAIQp/GZv3/j+xx5zVbsh0wZFxEImCsc88RRwHsB5OaI8SA636hjwosNXSUWuRTphxp5iahHX+pozQs+Yt0rU1SPg0CIfgDMgomAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);